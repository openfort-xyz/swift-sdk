//
//  ContentView.swift
//  SampleApp
//
//  Created by Marc Flores on 22/5/25.
//

import SwiftUI
import Openfort

struct ContentView: View {
   private let openfort = Openfort(
        OpenfortSDKConfiguration(
            baseConfiguration: .init(
                publishableKey: "pk_test_505bc088-905e-5a43-b60b-4c37ed1f887a"
            ),
            shieldConfiguration: .init(
                shieldPublishableKey: "56ca3248-d8a4-499c-b07b-aa9d50a2b577",
                shieldEncryptionKey: "ApIULM96wggoEnYQ5x+TO5KRiYiHZdcNQ7wKtV1dvulp"
            )
        )
    )
    
    var body: some View {
        VStack {
            Image(systemName: "globe")
                .imageScale(.large)
                .foregroundStyle(.tint)
            Text("Hi there")
        }
        .padding()
    }
}

#Preview {
    ContentView()
}
