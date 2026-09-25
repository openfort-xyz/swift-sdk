import Foundation
import Testing
@testable import OpenfortSwift

private func jsonDict(_ value: some Encodable) throws -> [String: Any]? {
    let data = try JSONEncoder().encode(value)
    return try JSONSerialization.jsonObject(with: data) as? [String: Any]
}

// MARK: - OFSendTransactionSignatureRequestParams encoding

@Test func signatureRequestParamsOmitNilFields() throws {
    let params = OFSendTransactionSignatureRequestParams(transactionId: "tin_123", hash: "0xabc")
    let dict = try #require(try jsonDict(params))
    #expect(dict["transactionId"] as? String == "tin_123")
    #expect(dict["hash"] as? String == "0xabc")
    #expect(dict["signature"] == nil)
    #expect(dict["optimistic"] == nil)
}

@Test func signatureRequestParamsEncodeSignatureAndOptimistic() throws {
    let params = OFSendTransactionSignatureRequestParams(
        transactionId: "tin_123", signature: "0xsig", optimistic: true
    )
    let dict = try #require(try jsonDict(params))
    #expect(dict["hash"] == nil)
    #expect(dict["signature"] as? String == "0xsig")
    #expect(dict["optimistic"] as? Bool == true)
}

// MARK: - OFTransactionStatus

@Test func statusDecodesSnakeCaseRawValue() {
    #expect(OFTransactionStatus(rawValue: "awaiting_signature") == .awaitingSignature)
    #expect(OFTransactionStatus(rawValue: "succeeded") == .succeeded)
    #expect(OFTransactionStatus(rawValue: "expired") == .expired)
}

// MARK: - OFTransactionResponse decoding (matches the /v2/transactions API shape)

@Test func transactionDecodesAwaitingSignature() throws {
    let json = """
    {
      "id": "tin_awaiting",
      "object": "transaction",
      "createdAt": 1700000000,
      "updatedAt": 1700000001,
      "chainId": 84532,
      "status": "awaiting_signature",
      "accountId": "acc_1",
      "walletId": "wal_1",
      "feeSponsorshipId": "fsp_1",
      "calls": [
        { "contractId": "con_1", "functionName": "mint", "functionArgs": ["0xabc", 1, true] }
      ],
      "execution": {
        "type": "userOperation",
        "entryPointVersion": "0.6",
        "userOperationHash": "0xuserop"
      },
      "nextAction": { "type": "sign_hash", "hash": "0xhash" }
    }
    """
    let tx = try JSONDecoder().decode(OFTransactionResponse.self, from: Data(json.utf8))
    #expect(tx.id == "tin_awaiting")
    #expect(tx.status == .awaitingSignature)
    #expect(tx.chainId == 84532)
    #expect(tx.accountId == "acc_1")
    #expect(tx.feeSponsorshipId == "fsp_1")
    #expect(tx.nextAction?.type == "sign_hash")
    #expect(tx.nextAction?.hash == "0xhash")
    #expect(tx.receipt == nil)

    let call = try #require(tx.calls?.first)
    #expect(call.contractId == "con_1")
    #expect(call.functionName == "mint")
    #expect(call.functionArgs == [.string("0xabc"), .int(1), .bool(true)])

    let execution = try #require(tx.execution)
    #expect(execution.type == "userOperation")
    #expect(execution.entryPointVersion == "0.6")
    #expect(execution.userOperationHash == "0xuserop")
    #expect(execution.from == nil)
}

@Test func transactionDecodesSucceededWithReceipt() throws {
    let json = """
    {
      "id": "tin_ok",
      "object": "transaction",
      "createdAt": 1,
      "updatedAt": 2,
      "chainId": 8453,
      "status": "succeeded",
      "accountId": "acc_1",
      "execution": {
        "type": "transaction",
        "from": "0xfrom", "to": "0xto", "nonce": "1", "gas": "21000",
        "maxFeePerGas": "10", "maxPriorityFeePerGas": "1"
      },
      "receipt": {
        "createdAt": 3,
        "transactionHash": "0xtxhash",
        "blockNumber": 123,
        "gasUsed": "21000",
        "gasFee": "210000",
        "logs": [
          {
            "blockNumber": 123, "blockHash": "0xblock", "transactionIndex": 0, "removed": false,
            "address": "0xtoken", "data": "0x", "topics": ["0xtopic"],
            "transactionHash": "0xtxhash", "logIndex": 0
          }
        ]
      },
      "timeline": [
        { "event": "awaiting_signature", "at": 1 },
        { "event": "submitted", "at": 2 },
        { "event": "succeeded", "at": 3 }
      ],
      "costUsd": "0.01"
    }
    """
    let tx = try JSONDecoder().decode(OFTransactionResponse.self, from: Data(json.utf8))
    #expect(tx.status == .succeeded)
    #expect(tx.nextAction == nil)
    #expect(tx.execution?.type == "transaction")
    #expect(tx.execution?.from == "0xfrom")
    #expect(tx.costUsd == "0.01")
    #expect(tx.timeline?.map(\.event) == ["awaiting_signature", "submitted", "succeeded"])

    let receipt = try #require(tx.receipt)
    #expect(receipt.transactionHash == "0xtxhash")
    #expect(receipt.blockNumber == 123)
    #expect(receipt.error == nil)
    #expect(receipt.logs?.first?.address == "0xtoken")
}

@Test func transactionDecodesRevertedWithError() throws {
    let json = """
    {
      "id": "tin_rev",
      "object": "transaction",
      "createdAt": 1,
      "updatedAt": 2,
      "chainId": 8453,
      "status": "reverted",
      "accountId": "acc_1",
      "receipt": {
        "createdAt": 3,
        "transactionHash": "0xtxhash",
        "error": {
          "reason": "ERC20: transfer amount exceeds balance",
          "name": "InsufficientBalance",
          "explanation": { "cause": "The wallet holds less than the amount sent.", "solution": "Fund the wallet first." }
        }
      }
    }
    """
    let tx = try JSONDecoder().decode(OFTransactionResponse.self, from: Data(json.utf8))
    #expect(tx.status == .reverted)

    let error = try #require(tx.receipt?.error)
    #expect(error.reason == "ERC20: transfer amount exceeds balance")
    #expect(error.name == "InsufficientBalance")
    #expect(error.explanation?.solution == "Fund the wallet first.")
}

// MARK: - OFSessionResponse decoding (sessions remain v1)

@Test func sessionDecodesNextAction() throws {
    let json = """
    {
      "id": "ses_1", "object": "session", "createdAt": 1, "updatedAt": 2,
      "isActive": false, "address": "0xsession",
      "nextAction": { "type": "sign_with_wallet", "payload": { "signableHash": "0xhash" } }
    }
    """
    let session = try JSONDecoder().decode(OFSessionResponse.self, from: Data(json.utf8))
    #expect(session.address == "0xsession")
    #expect(session.nextAction?.type == "sign_with_wallet")
    #expect(session.nextAction?.payload.signableHash == "0xhash")
}
