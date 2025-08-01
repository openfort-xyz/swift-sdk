! function(e, t, r, s, n, a, o, i) {
    var l, c = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
        u = "function" == typeof c[s] && c[s],
        d = u.i || {},
        p = u.cache || {},
        f = "undefined" != typeof module && "function" == typeof module.require && module.require.bind(module);

    function h(t, r) {
        if (!p[t]) {
            if (!e[t]) {
                if (n[t]) return n[t];
                var a = "function" == typeof c[s] && c[s];
                if (!r && a) return a(t, !0);
                if (u) return u(t, !0);
                if (f && "string" == typeof t) return f(t);
                var o = Error("Cannot find module '" + t + "'");
                throw o.code = "MODULE_NOT_FOUND", o
            }
            l.resolve = function(r) {
                var s = e[t][1][r];
                return null != s ? s : r
            }, l.cache = {};
            var i = p[t] = new h.Module(t);
            e[t][0].call(i.exports, l, i, i.exports, c)
        }
        return p[t].exports;

        function l(e) {
            var t = l.resolve(e);
            return !1 === t ? {} : h(t)
        }
    }
    h.isParcelRequire = !0, h.Module = function(e) {
        this.id = e, this.bundle = h, this.require = f, this.exports = {}
    }, h.modules = e, h.cache = p, h.parent = u, h.distDir = "./", h.publicUrl = "/", h.devServer = void 0, h.i = d, h.register = function(t, r) {
        e[t] = [function(e, t) {
            t.exports = r
        }, {}]
    }, h.resolve = function(e) {
        if (e = d[e] || e, !l) try {
            throw Error()
        } catch (r) {
            var t = ("" + r.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
            if (!t) return "./" + e;
            l = t[0]
        }
        return new URL(a + e, l).toString()
    }, h.extendImportMap = function(e) {
        Object.assign(d, e)
    }, Object.defineProperty(h, "root", {
        get: function() {
            return c[s]
        }
    }), c[s] = h;
    for (var g = 0; g < t.length; g++) h(t[g]);
    if (r) {
        var m = h(r);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = m : "function" == typeof define && define.amd && define(function() {
            return m
        })
    }
}({
    gJu1s: [function(e, t, r, s) {
        t.bundle.extendImportMap({
            "7UhPZ": "esm.7a5d15e0.js",
            "2XE7A": "lib.esm.938dbd13.js",
            "36iUx": "lib.esm.811e0d0a.js"
        })
    }, {}],
    id4SM: [function(e, t, r, s) {
        var n = e("@openfort/openfort-js");
        window.Openfort = n.Openfort
    }, {
        "@openfort/openfort-js": "31lx6"
    }],
    "31lx6": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "OpenfortError", () => a.OpenfortError), n.export(r, "OpenfortErrorType", () => a.OpenfortErrorType), n.export(r, "AuthActionRequiredActions", () => o.AuthActionRequiredActions), n.export(r, "AuthType", () => o.AuthType), n.export(r, "BasicAuthProvider", () => o.BasicAuthProvider), n.export(r, "EmbeddedState", () => o.EmbeddedState), n.export(r, "OAuthProvider", () => o.OAuthProvider), n.export(r, "RecoveryMethod", () => o.RecoveryMethod), n.export(r, "ThirdPartyOAuthProvider", () => o.ThirdPartyOAuthProvider), n.export(r, "TokenType", () => o.TokenType), n.export(r, "ShieldAuthType", () => i.ShieldAuthType), n.export(r, "MissingProjectEntropyError", () => l.MissingProjectEntropyError), n.export(r, "MissingRecoveryPasswordError", () => l.MissingRecoveryPasswordError), n.export(r, "NotConfiguredError", () => l.NotConfiguredError), n.export(r, "WrongRecoveryPasswordError", () => l.WrongRecoveryPasswordError), n.export(r, "OpenfortConfiguration", () => c.OpenfortConfiguration), n.export(r, "SDKConfiguration", () => c.SDKConfiguration), n.export(r, "ShieldConfiguration", () => c.ShieldConfiguration), n.export(r, "Openfort", () => u.Openfort), n.export(r, "AuthApi", () => d.AuthApi), n.export(r, "EmbeddedWalletApi", () => p.EmbeddedWalletApi), n.export(r, "UserApi", () => f.UserApi), n.export(r, "OpenfortInternal", () => h.OpenfortInternal), n.export(r, "ProxyApi", () => g.ProxyApi);
        var a = e("./core/errors/openfortError.js"),
            o = e("./types/types.js"),
            i = e("./wallets/types.js"),
            l = e("./wallets/iframeManager.js"),
            c = e("./core/config/config.js"),
            u = e("./core/openfort.js"),
            d = e("./api/auth.js"),
            p = e("./api/embeddedWallet.js"),
            f = e("./api/user.js"),
            h = e("./core/openfortInternal.js"),
            g = e("./api/proxy.js")
    }, {
        "./core/errors/openfortError.js": "3xESR",
        "./types/types.js": "fUPIN",
        "./wallets/types.js": !1,
        "./wallets/iframeManager.js": !1,
        "./core/config/config.js": !1,
        "./core/openfort.js": "26nPt",
        "./api/auth.js": !1,
        "./api/embeddedWallet.js": !1,
        "./api/user.js": !1,
        "./core/openfortInternal.js": !1,
        "./api/proxy.js": !1,
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "3xESR": [function(e, t, r, s) {
        var n, a, o = e("@parcel/transformer-js/src/esmodule-helpers.js");
        o.defineInteropFlag(r), o.export(r, "OpenfortError", () => l), o.export(r, "OpenfortErrorType", () => a), o.export(r, "withOpenfortError", () => c);
        var i = e("axios");
        (n = a || (a = {})).AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR", n.INVALID_CONFIGURATION = "INVALID_CONFIGURATION", n.NOT_LOGGED_IN_ERROR = "NOT_LOGGED_IN_ERROR", n.REFRESH_TOKEN_ERROR = "REFRESH_TOKEN_ERROR", n.USER_REGISTRATION_ERROR = "USER_REGISTRATION_ERROR", n.LOGOUT_ERROR = "LOGOUT_ERROR", n.OPERATION_NOT_SUPPORTED_ERROR = "OPERATION_NOT_SUPPORTED_ERROR", n.MISSING_EMBEDDED_SIGNER_ERROR = "MISSING_EMBEDDED_SIGNER_ERROR", n.MISSING_SIGNER_ERROR = "MISSING_SIGNER_ERROR", n.USER_NOT_AUTHORIZED_ON_ECOSYSTEM = "USER_NOT_AUTHORIZED_ON_ECOSYSTEM", n.INTERNAL_ERROR = "INTERNAL_ERROR";
        class l extends Error {
            type;
            data;
            constructor(e, t, r = {}) {
                super(e), this.type = t, this.data = r
            }
        }
        let c = async (e, t, r) => {
            try {
                return await e()
            } catch (o) {
                var s;
                let e, n;
                (0, i.isAxiosError)(o) ? (n = o.response?.status, e = o.response?.data && o.response.data.error && "type" in (s = o.response.data.error) && "message" in s ? o.response.data.error.message : o.message) : e = o.message;
                let a = new l(e, void 0 !== n && t[n] ? t[n] : t.default, {});
                throw void 0 !== n && t[n] || r?.(o, a), a
            }
        }
    }, {
        axios: "jhAcT",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    jhAcT: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "default", () => o.default), n.export(r, "Axios", () => i), n.export(r, "AxiosError", () => l), n.export(r, "CanceledError", () => c), n.export(r, "isCancel", () => u), n.export(r, "CancelToken", () => d), n.export(r, "VERSION", () => p), n.export(r, "all", () => f), n.export(r, "Cancel", () => h), n.export(r, "isAxiosError", () => g), n.export(r, "spread", () => m), n.export(r, "toFormData", () => y), n.export(r, "AxiosHeaders", () => E), n.export(r, "HttpStatusCode", () => w), n.export(r, "formToJSON", () => R), n.export(r, "getAdapter", () => j), n.export(r, "mergeConfig", () => I);
        var a = e("./lib/axios.js"),
            o = n.interopDefault(a);
        let {
            Axios: i,
            AxiosError: l,
            CanceledError: c,
            isCancel: u,
            CancelToken: d,
            VERSION: p,
            all: f,
            Cancel: h,
            isAxiosError: g,
            spread: m,
            toFormData: y,
            AxiosHeaders: E,
            HttpStatusCode: w,
            formToJSON: R,
            getAdapter: j,
            mergeConfig: I
        } = o.default
    }, {
        "./lib/axios.js": "8DJLn",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "8DJLn": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r);
        "use strict";
        var a = e("./utils.js"),
            o = n.interopDefault(a),
            i = e("./helpers/bind.js"),
            l = n.interopDefault(i),
            c = e("./core/Axios.js"),
            u = n.interopDefault(c),
            d = e("./core/mergeConfig.js"),
            p = n.interopDefault(d),
            f = e("./defaults/index.js"),
            h = n.interopDefault(f),
            g = e("./helpers/formDataToJSON.js"),
            m = n.interopDefault(g),
            y = e("./cancel/CanceledError.js"),
            E = n.interopDefault(y),
            w = e("./cancel/CancelToken.js"),
            R = n.interopDefault(w),
            j = e("./cancel/isCancel.js"),
            I = n.interopDefault(j),
            A = e("./env/data.js"),
            T = e("./helpers/toFormData.js"),
            v = n.interopDefault(T),
            b = e("./core/AxiosError.js"),
            O = n.interopDefault(b),
            S = e("./helpers/spread.js"),
            C = n.interopDefault(S),
            N = e("./helpers/isAxiosError.js"),
            x = n.interopDefault(N),
            P = e("./core/AxiosHeaders.js"),
            _ = n.interopDefault(P),
            D = e("./adapters/adapters.js"),
            k = n.interopDefault(D),
            U = e("./helpers/HttpStatusCode.js"),
            L = n.interopDefault(U);
        let M = function e(t) {
            let r = new(0, u.default)(t),
                s = (0, l.default)(u.default.prototype.request, r);
            return o.default.extend(s, u.default.prototype, r, {
                allOwnKeys: !0
            }), o.default.extend(s, r, null, {
                allOwnKeys: !0
            }), s.create = function(r) {
                return e((0, p.default)(t, r))
            }, s
        }(h.default);
        M.Axios = u.default, M.CanceledError = E.default, M.CancelToken = R.default, M.isCancel = I.default, M.VERSION = A.VERSION, M.toFormData = v.default, M.AxiosError = O.default, M.Cancel = M.CanceledError, M.all = function(e) {
            return Promise.all(e)
        }, M.spread = C.default, M.isAxiosError = x.default, M.mergeConfig = p.default, M.AxiosHeaders = _.default, M.formToJSON = e => (0, m.default)(o.default.isHTMLForm(e) ? new FormData(e) : e), M.getAdapter = k.default.getAdapter, M.HttpStatusCode = L.default, M.default = M, r.default = M
    }, {
        "./utils.js": "2ioTY",
        "./helpers/bind.js": "9mfTC",
        "./core/Axios.js": "2wp4K",
        "./core/mergeConfig.js": "j8Sbj",
        "./defaults/index.js": "1GU0t",
        "./helpers/formDataToJSON.js": "jhUur",
        "./cancel/CanceledError.js": "judoa",
        "./cancel/CancelToken.js": "2aN3e",
        "./cancel/isCancel.js": "5ndsF",
        "./env/data.js": "9ssnR",
        "./helpers/toFormData.js": "k8OtD",
        "./core/AxiosError.js": "hjCVQ",
        "./helpers/spread.js": "gQxw3",
        "./helpers/isAxiosError.js": "lE0ea",
        "./core/AxiosHeaders.js": "1qkRX",
        "./adapters/adapters.js": "6E0f0",
        "./helpers/HttpStatusCode.js": "agO1h",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "2ioTY": [function(e, t, r, s) {
        let n, a;
        var o, i, l, c, u = e("@parcel/transformer-js/src/esmodule-helpers.js");
        u.defineInteropFlag(r);
        "use strict";
        var d = e("./helpers/bind.js"),
            p = u.interopDefault(d),
            f = arguments[3];
        let {
            toString: h
        } = Object.prototype, {
            getPrototypeOf: g
        } = Object, {
            iterator: m,
            toStringTag: y
        } = Symbol, E = (n = Object.create(null), e => {
            let t = h.call(e);
            return n[t] || (n[t] = t.slice(8, -1).toLowerCase())
        }), w = e => (e = e.toLowerCase(), t => E(t) === e), R = e => t => typeof t === e, {
            isArray: j
        } = Array, I = R("undefined"), A = w("ArrayBuffer"), T = R("string"), v = R("function"), b = R("number"), O = e => null !== e && "object" == typeof e, S = e => {
            if ("object" !== E(e)) return !1;
            let t = g(e);
            return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(y in e) && !(m in e)
        }, C = w("Date"), N = w("File"), x = w("Blob"), P = w("FileList"), _ = w("URLSearchParams"), [D, k, U, L] = ["ReadableStream", "Request", "Response", "Headers"].map(w);

        function M(e, t, {
            allOwnKeys: r = !1
        } = {}) {
            let s, n;
            if (null != e)
                if ("object" != typeof e && (e = [e]), j(e))
                    for (s = 0, n = e.length; s < n; s++) t.call(null, e[s], s, e);
                else {
                    let n, a = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
                        o = a.length;
                    for (s = 0; s < o; s++) n = a[s], t.call(null, e[n], n, e)
                }
        }

        function F(e, t) {
            let r;
            t = t.toLowerCase();
            let s = Object.keys(e),
                n = s.length;
            for (; n-- > 0;)
                if (t === (r = s[n]).toLowerCase()) return r;
            return null
        }
        let B = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : f,
            J = e => !I(e) && e !== B,
            q = (a = "undefined" != typeof Uint8Array && g(Uint8Array), e => a && e instanceof a),
            H = w("HTMLFormElement"),
            G = (({
                hasOwnProperty: e
            }) => (t, r) => e.call(t, r))(Object.prototype),
            K = w("RegExp"),
            W = (e, t) => {
                let r = Object.getOwnPropertyDescriptors(e),
                    s = {};
                M(r, (r, n) => {
                    let a;
                    !1 !== (a = t(r, n, e)) && (s[n] = a || r)
                }), Object.defineProperties(e, s)
            },
            V = w("AsyncFunction"),
            z = (o = "function" == typeof setImmediate, i = v(B.postMessage), o ? setImmediate : i ? (l = `axios@${Math.random()}`, c = [], B.addEventListener("message", ({
                source: e,
                data: t
            }) => {
                e === B && t === l && c.length && c.shift()()
            }, !1), e => {
                c.push(e), B.postMessage(l, "*")
            }) : e => setTimeout(e)),
            Y = "undefined" != typeof queueMicrotask ? queueMicrotask.bind(B) : z;
        r.default = {
            isArray: j,
            isArrayBuffer: A,
            isBuffer: function(e) {
                return null !== e && !I(e) && null !== e.constructor && !I(e.constructor) && v(e.constructor.isBuffer) && e.constructor.isBuffer(e)
            },
            isFormData: e => {
                let t;
                return e && ("function" == typeof FormData && e instanceof FormData || v(e.append) && ("formdata" === (t = E(e)) || "object" === t && v(e.toString) && "[object FormData]" === e.toString()))
            },
            isArrayBufferView: function(e) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && A(e.buffer)
            },
            isString: T,
            isNumber: b,
            isBoolean: e => !0 === e || !1 === e,
            isObject: O,
            isPlainObject: S,
            isReadableStream: D,
            isRequest: k,
            isResponse: U,
            isHeaders: L,
            isUndefined: I,
            isDate: C,
            isFile: N,
            isBlob: x,
            isRegExp: K,
            isFunction: v,
            isStream: e => O(e) && v(e.pipe),
            isURLSearchParams: _,
            isTypedArray: q,
            isFileList: P,
            forEach: M,
            merge: function e() {
                let {
                    caseless: t
                } = J(this) && this || {}, r = {}, s = (s, n) => {
                    let a = t && F(r, n) || n;
                    S(r[a]) && S(s) ? r[a] = e(r[a], s) : S(s) ? r[a] = e({}, s) : j(s) ? r[a] = s.slice() : r[a] = s
                };
                for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && M(arguments[e], s);
                return r
            },
            extend: (e, t, r, {
                allOwnKeys: s
            } = {}) => (M(t, (t, s) => {
                r && v(t) ? e[s] = (0, p.default)(t, r) : e[s] = t
            }, {
                allOwnKeys: s
            }), e),
            trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
            stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
            inherits: (e, t, r, s) => {
                e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                    value: t.prototype
                }), r && Object.assign(e.prototype, r)
            },
            toFlatObject: (e, t, r, s) => {
                let n, a, o, i = {};
                if (t = t || {}, null == e) return t;
                do {
                    for (a = (n = Object.getOwnPropertyNames(e)).length; a-- > 0;) o = n[a], (!s || s(o, e, t)) && !i[o] && (t[o] = e[o], i[o] = !0);
                    e = !1 !== r && g(e)
                } while (e && (!r || r(e, t)) && e !== Object.prototype) return t
            },
            kindOf: E,
            kindOfTest: w,
            endsWith: (e, t, r) => {
                e = String(e), (void 0 === r || r > e.length) && (r = e.length), r -= t.length;
                let s = e.indexOf(t, r);
                return -1 !== s && s === r
            },
            toArray: e => {
                if (!e) return null;
                if (j(e)) return e;
                let t = e.length;
                if (!b(t)) return null;
                let r = Array(t);
                for (; t-- > 0;) r[t] = e[t];
                return r
            },
            forEachEntry: (e, t) => {
                let r, s = (e && e[m]).call(e);
                for (;
                    (r = s.next()) && !r.done;) {
                    let s = r.value;
                    t.call(e, s[0], s[1])
                }
            },
            matchAll: (e, t) => {
                let r, s = [];
                for (; null !== (r = e.exec(t));) s.push(r);
                return s
            },
            isHTMLForm: H,
            hasOwnProperty: G,
            hasOwnProp: G,
            reduceDescriptors: W,
            freezeMethods: e => {
                W(e, (t, r) => {
                    if (v(e) && -1 !== ["arguments", "caller", "callee"].indexOf(r)) return !1;
                    if (v(e[r])) {
                        if (t.enumerable = !1, "writable" in t) {
                            t.writable = !1;
                            return
                        }
                        t.set || (t.set = () => {
                            throw Error("Can not rewrite read-only method '" + r + "'")
                        })
                    }
                })
            },
            toObjectSet: (e, t) => {
                let r = {};
                return (j(e) ? e : String(e).split(t)).forEach(e => {
                    r[e] = !0
                }), r
            },
            toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, r) {
                return t.toUpperCase() + r
            }),
            noop: () => {},
            toFiniteNumber: (e, t) => null != e && Number.isFinite(e *= 1) ? e : t,
            findKey: F,
            global: B,
            isContextDefined: J,
            isSpecCompliantForm: function(e) {
                return !!(e && v(e.append) && "FormData" === e[y] && e[m])
            },
            toJSONObject: e => {
                let t = Array(10),
                    r = (e, s) => {
                        if (O(e)) {
                            if (t.indexOf(e) >= 0) return;
                            if (!("toJSON" in e)) {
                                t[s] = e;
                                let n = j(e) ? [] : {};
                                return M(e, (e, t) => {
                                    let a = r(e, s + 1);
                                    I(a) || (n[t] = a)
                                }), t[s] = void 0, n
                            }
                        }
                        return e
                    };
                return r(e, 0)
            },
            isAsyncFn: V,
            isThenable: e => e && (O(e) || v(e)) && v(e.then) && v(e.catch),
            setImmediate: z,
            asap: Y,
            isIterable: e => null != e && v(e[m])
        }
    }, {
        "./helpers/bind.js": "9mfTC",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "9mfTC": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        "use strict";

        function a(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }
        n.defineInteropFlag(r), n.export(r, "default", () => a)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    cI3Jn: [function(e, t, r, s) {
        r.interopDefault = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }, r.defineInteropFlag = function(e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.exportAll = function(e, t) {
            return Object.keys(e).forEach(function(r) {
                "default" === r || "__esModule" === r || Object.prototype.hasOwnProperty.call(t, r) || Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: function() {
                        return e[r]
                    }
                })
            }), t
        }, r.export = function(e, t, r) {
            Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }
    }, {}],
    "2wp4K": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r);
        "use strict";
        var a = e("./../utils.js"),
            o = n.interopDefault(a),
            i = e("../helpers/buildURL.js"),
            l = n.interopDefault(i),
            c = e("./InterceptorManager.js"),
            u = n.interopDefault(c),
            d = e("./dispatchRequest.js"),
            p = n.interopDefault(d),
            f = e("./mergeConfig.js"),
            h = n.interopDefault(f),
            g = e("./buildFullPath.js"),
            m = n.interopDefault(g),
            y = e("../helpers/validator.js"),
            E = n.interopDefault(y),
            w = e("./AxiosHeaders.js"),
            R = n.interopDefault(w);
        let j = E.default.validators;
        class I {
            constructor(e) {
                this.defaults = e || {}, this.interceptors = {
                    request: new(0, u.default),
                    response: new(0, u.default)
                }
            }
            async request(e, t) {
                try {
                    return await this._request(e, t)
                } catch (e) {
                    if (e instanceof Error) {
                        let t = {};
                        Error.captureStackTrace ? Error.captureStackTrace(t) : t = Error();
                        let r = t.stack ? t.stack.replace(/^.+\n/, "") : "";
                        try {
                            e.stack ? r && !String(e.stack).endsWith(r.replace(/^.+\n.+\n/, "")) && (e.stack += "\n" + r) : e.stack = r
                        } catch (e) {}
                    }
                    throw e
                }
            }
            _request(e, t) {
                let r, s;
                "string" == typeof e ? (t = t || {}).url = e : t = e || {};
                let {
                    transitional: n,
                    paramsSerializer: a,
                    headers: i
                } = t = (0, h.default)(this.defaults, t);
                void 0 !== n && E.default.assertOptions(n, {
                    silentJSONParsing: j.transitional(j.boolean),
                    forcedJSONParsing: j.transitional(j.boolean),
                    clarifyTimeoutError: j.transitional(j.boolean)
                }, !1), null != a && (o.default.isFunction(a) ? t.paramsSerializer = {
                    serialize: a
                } : E.default.assertOptions(a, {
                    encode: j.function,
                    serialize: j.function
                }, !0)), void 0 !== t.allowAbsoluteUrls || (void 0 !== this.defaults.allowAbsoluteUrls ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), E.default.assertOptions(t, {
                    baseUrl: j.spelling("baseURL"),
                    withXsrfToken: j.spelling("withXSRFToken")
                }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
                let l = i && o.default.merge(i.common, i[t.method]);
                i && o.default.forEach(["delete", "get", "head", "post", "put", "patch", "common"], e => {
                    delete i[e]
                }), t.headers = R.default.concat(l, i);
                let c = [],
                    u = !0;
                this.interceptors.request.forEach(function(e) {
                    ("function" != typeof e.runWhen || !1 !== e.runWhen(t)) && (u = u && e.synchronous, c.unshift(e.fulfilled, e.rejected))
                });
                let d = [];
                this.interceptors.response.forEach(function(e) {
                    d.push(e.fulfilled, e.rejected)
                });
                let f = 0;
                if (!u) {
                    let e = [p.default.bind(this), void 0];
                    for (e.unshift.apply(e, c), e.push.apply(e, d), s = e.length, r = Promise.resolve(t); f < s;) r = r.then(e[f++], e[f++]);
                    return r
                }
                s = c.length;
                let g = t;
                for (f = 0; f < s;) {
                    let e = c[f++],
                        t = c[f++];
                    try {
                        g = e(g)
                    } catch (e) {
                        t.call(this, e);
                        break
                    }
                }
                try {
                    r = p.default.call(this, g)
                } catch (e) {
                    return Promise.reject(e)
                }
                for (f = 0, s = d.length; f < s;) r = r.then(d[f++], d[f++]);
                return r
            }
            getUri(e) {
                e = (0, h.default)(this.defaults, e);
                let t = (0, m.default)(e.baseURL, e.url, e.allowAbsoluteUrls);
                return (0, l.default)(t, e.params, e.paramsSerializer)
            }
        }
        o.default.forEach(["delete", "get", "head", "options"], function(e) {
            I.prototype[e] = function(t, r) {
                return this.request((0, h.default)(r || {}, {
                    method: e,
                    url: t,
                    data: (r || {}).data
                }))
            }
        }), o.default.forEach(["post", "put", "patch"], function(e) {
            function t(t) {
                return function(r, s, n) {
                    return this.request((0, h.default)(n || {}, {
                        method: e,
                        headers: t ? {
                            "Content-Type": "multipart/form-data"
                        } : {},
                        url: r,
                        data: s
                    }))
                }
            }
            I.prototype[e] = t(), I.prototype[e + "Form"] = t(!0)
        }), r.default = I
    }, {
        "./../utils.js": "2ioTY",
        "../helpers/buildURL.js": "aGaJq",
        "./InterceptorManager.js": "5Qndl",
        "./dispatchRequest.js": "gTZwy",
        "./mergeConfig.js": "j8Sbj",
        "./buildFullPath.js": "48uot",
        "../helpers/validator.js": "8PNBN",
        "./AxiosHeaders.js": "1qkRX",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    aGaJq: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "default", () => u);
        "use strict";
        var a = e("../utils.js"),
            o = n.interopDefault(a),
            i = e("../helpers/AxiosURLSearchParams.js"),
            l = n.interopDefault(i);

        function c(e) {
            return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }

        function u(e, t, r) {
            let s;
            if (!t) return e;
            let n = r && r.encode || c;
            o.default.isFunction(r) && (r = {
                serialize: r
            });
            let a = r && r.serialize;
            if (s = a ? a(t, r) : o.default.isURLSearchParams(t) ? t.toString() : new(0, l.default)(t, r).toString(n)) {
                let t = e.indexOf("#"); - 1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + s
            }
            return e
        }
    }, {
        "../utils.js": "2ioTY",
        "../helpers/AxiosURLSearchParams.js": "juzHK",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    juzHK: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r);
        "use strict";
        var a = e("./toFormData.js"),
            o = n.interopDefault(a);

        function i(e) {
            let t = {
                "!": "%21",
                "'": "%27",
                "(": "%28",
                ")": "%29",
                "~": "%7E",
                "%20": "+",
                "%00": "\0"
            };
            return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(e) {
                return t[e]
            })
        }

        function l(e, t) {
            this._pairs = [], e && (0, o.default)(e, this, t)
        }
        let c = l.prototype;
        c.append = function(e, t) {
            this._pairs.push([e, t])
        }, c.toString = function(e) {
            let t = e ? function(t) {
                return e.call(this, t, i)
            } : i;
            return this._pairs.map(function(e) {
                return t(e[0]) + "=" + t(e[1])
            }, "").join("&")
        }, r.default = l
    }, {
        "./toFormData.js": "k8OtD",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    k8OtD: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r);
        "use strict";
        var a = e("../utils.js"),
            o = n.interopDefault(a),
            i = e("../core/AxiosError.js"),
            l = n.interopDefault(i),
            c = e("../platform/node/classes/FormData.js"),
            u = n.interopDefault(c),
            d = e("adfd9b103875c2dd").Buffer;

        function p(e) {
            return o.default.isPlainObject(e) || o.default.isArray(e)
        }

        function f(e) {
            return o.default.endsWith(e, "[]") ? e.slice(0, -2) : e
        }

        function h(e, t, r) {
            return e ? e.concat(t).map(function(e, t) {
                return e = f(e), !r && t ? "[" + e + "]" : e
            }).join(r ? "." : "") : t
        }
        let g = o.default.toFlatObject(o.default, {}, null, function(e) {
            return /^is[A-Z]/.test(e)
        });
        r.default = function(e, t, r) {
            if (!o.default.isObject(e)) throw TypeError("target must be an object");
            t = t || new(u.default || FormData);
            let s = (r = o.default.toFlatObject(r, {
                    metaTokens: !0,
                    dots: !1,
                    indexes: !1
                }, !1, function(e, t) {
                    return !o.default.isUndefined(t[e])
                })).metaTokens,
                n = r.visitor || y,
                a = r.dots,
                i = r.indexes,
                c = (r.Blob || "undefined" != typeof Blob && Blob) && o.default.isSpecCompliantForm(t);
            if (!o.default.isFunction(n)) throw TypeError("visitor must be a function");

            function m(e) {
                if (null === e) return "";
                if (o.default.isDate(e)) return e.toISOString();
                if (o.default.isBoolean(e)) return e.toString();
                if (!c && o.default.isBlob(e)) throw new(0, l.default)("Blob is not supported. Use a Buffer instead.");
                return o.default.isArrayBuffer(e) || o.default.isTypedArray(e) ? c && "function" == typeof Blob ? new Blob([e]) : d.from(e) : e
            }

            function y(e, r, n) {
                let l = e;
                if (e && !n && "object" == typeof e)
                    if (o.default.endsWith(r, "{}")) r = s ? r : r.slice(0, -2), e = JSON.stringify(e);
                    else {
                        var c;
                        if (o.default.isArray(e) && (c = e, o.default.isArray(c) && !c.some(p)) || (o.default.isFileList(e) || o.default.endsWith(r, "[]")) && (l = o.default.toArray(e))) return r = f(r), l.forEach(function(e, s) {
                            o.default.isUndefined(e) || null === e || t.append(!0 === i ? h([r], s, a) : null === i ? r : r + "[]", m(e))
                        }), !1
                    } return !!p(e) || (t.append(h(n, r, a), m(e)), !1)
            }
            let E = [],
                w = Object.assign(g, {
                    defaultVisitor: y,
                    convertValue: m,
                    isVisitable: p
                });
            if (!o.default.isObject(e)) throw TypeError("data must be an object");
            return ! function e(r, s) {
                if (!o.default.isUndefined(r)) {
                    if (-1 !== E.indexOf(r)) throw Error("Circular reference detected in " + s.join("."));
                    E.push(r), o.default.forEach(r, function(r, a) {
                        !0 === (!(o.default.isUndefined(r) || null === r) && n.call(t, r, o.default.isString(a) ? a.trim() : a, s, w)) && e(r, s ? s.concat(a) : [a])
                    }), E.pop()
                }
            }(e), t
        }
    }, {
        adfd9b103875c2dd: "2MMCE",
        "../utils.js": "2ioTY",
        "../core/AxiosError.js": "hjCVQ",
        "../platform/node/classes/FormData.js": "fN4B6",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "2MMCE": [function(e, t, r, s) {
        "use strict";
        let n = e("9c62938f1dccc73c"),
            a = e("aceacb6a4531a9d2"),
            o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

        function i(e) {
            if (e > 0x7fffffff) throw RangeError('The value "' + e + '" is invalid for option "size"');
            let t = new Uint8Array(e);
            return Object.setPrototypeOf(t, l.prototype), t
        }

        function l(e, t, r) {
            if ("number" == typeof e) {
                if ("string" == typeof t) throw TypeError('The "string" argument must be of type string. Received type number');
                return d(e)
            }
            return c(e, t, r)
        }

        function c(e, t, r) {
            if ("string" == typeof e) {
                var s = e,
                    n = t;
                if (("string" != typeof n || "" === n) && (n = "utf8"), !l.isEncoding(n)) throw TypeError("Unknown encoding: " + n);
                let r = 0 | g(s, n),
                    a = i(r),
                    o = a.write(s, n);
                return o !== r && (a = a.slice(0, o)), a
            }
            if (ArrayBuffer.isView(e)) {
                var a = e;
                if (M(a, Uint8Array)) {
                    let e = new Uint8Array(a);
                    return f(e.buffer, e.byteOffset, e.byteLength)
                }
                return p(a)
            }
            if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
            if (M(e, ArrayBuffer) || e && M(e.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (M(e, SharedArrayBuffer) || e && M(e.buffer, SharedArrayBuffer))) return f(e, t, r);
            if ("number" == typeof e) throw TypeError('The "value" argument must not be of type number. Received type number');
            let o = e.valueOf && e.valueOf();
            if (null != o && o !== e) return l.from(o, t, r);
            let c = function(e) {
                if (l.isBuffer(e)) {
                    let t = 0 | h(e.length),
                        r = i(t);
                    return 0 === r.length || e.copy(r, 0, 0, t), r
                }
                return void 0 !== e.length ? "number" != typeof e.length || function(e) {
                    return e != e
                }(e.length) ? i(0) : p(e) : "Buffer" === e.type && Array.isArray(e.data) ? p(e.data) : void 0
            }(e);
            if (c) return c;
            if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return l.from(e[Symbol.toPrimitive]("string"), t, r);
            throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
        }

        function u(e) {
            if ("number" != typeof e) throw TypeError('"size" argument must be of type number');
            if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"')
        }

        function d(e) {
            return u(e), i(e < 0 ? 0 : 0 | h(e))
        }

        function p(e) {
            let t = e.length < 0 ? 0 : 0 | h(e.length),
                r = i(t);
            for (let s = 0; s < t; s += 1) r[s] = 255 & e[s];
            return r
        }

        function f(e, t, r) {
            let s;
            if (t < 0 || e.byteLength < t) throw RangeError('"offset" is outside of buffer bounds');
            if (e.byteLength < t + (r || 0)) throw RangeError('"length" is outside of buffer bounds');
            return Object.setPrototypeOf(s = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r), l.prototype), s
        }

        function h(e) {
            if (e >= 0x7fffffff) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
            return 0 | e
        }

        function g(e, t) {
            if (l.isBuffer(e)) return e.length;
            if (ArrayBuffer.isView(e) || M(e, ArrayBuffer)) return e.byteLength;
            if ("string" != typeof e) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
            let r = e.length,
                s = arguments.length > 2 && !0 === arguments[2];
            if (!s && 0 === r) return 0;
            let n = !1;
            for (;;) switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return r;
                case "utf8":
                case "utf-8":
                    return k(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * r;
                case "hex":
                    return r >>> 1;
                case "base64":
                    return U(e).length;
                default:
                    if (n) return s ? -1 : k(e).length;
                    t = ("" + t).toLowerCase(), n = !0
            }
        }

        function m(e, t, r) {
            let s = !1;
            if ((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0 || (r >>>= 0) <= (t >>>= 0))) return "";
            for (e || (e = "utf8");;) switch (e) {
                case "hex":
                    return function(e, t, r) {
                        let s = e.length;
                        (!t || t < 0) && (t = 0), (!r || r < 0 || r > s) && (r = s);
                        let n = "";
                        for (let s = t; s < r; ++s) n += F[e[s]];
                        return n
                    }(this, t, r);
                case "utf8":
                case "utf-8":
                    return R(this, t, r);
                case "ascii":
                    return function(e, t, r) {
                        let s = "";
                        r = Math.min(e.length, r);
                        for (let n = t; n < r; ++n) s += String.fromCharCode(127 & e[n]);
                        return s
                    }(this, t, r);
                case "latin1":
                case "binary":
                    return function(e, t, r) {
                        let s = "";
                        r = Math.min(e.length, r);
                        for (let n = t; n < r; ++n) s += String.fromCharCode(e[n]);
                        return s
                    }(this, t, r);
                case "base64":
                    var a, o, i;
                    return a = this, o = t, i = r, 0 === o && i === a.length ? n.fromByteArray(a) : n.fromByteArray(a.slice(o, i));
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return function(e, t, r) {
                        let s = e.slice(t, r),
                            n = "";
                        for (let e = 0; e < s.length - 1; e += 2) n += String.fromCharCode(s[e] + 256 * s[e + 1]);
                        return n
                    }(this, t, r);
                default:
                    if (s) throw TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(), s = !0
            }
        }

        function y(e, t, r) {
            let s = e[t];
            e[t] = e[r], e[r] = s
        }

        function E(e, t, r, s, n) {
            var a;
            if (0 === e.length) return -1;
            if ("string" == typeof r ? (s = r, r = 0) : r > 0x7fffffff ? r = 0x7fffffff : r < -0x80000000 && (r = -0x80000000), (a = r *= 1) != a && (r = n ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length)
                if (n) return -1;
                else r = e.length - 1;
            else if (r < 0)
                if (!n) return -1;
                else r = 0;
            if ("string" == typeof t && (t = l.from(t, s)), l.isBuffer(t)) return 0 === t.length ? -1 : w(e, t, r, s, n);
            if ("number" == typeof t) {
                if (t &= 255, "function" == typeof Uint8Array.prototype.indexOf)
                    if (n) return Uint8Array.prototype.indexOf.call(e, t, r);
                    else return Uint8Array.prototype.lastIndexOf.call(e, t, r);
                return w(e, [t], r, s, n)
            }
            throw TypeError("val must be string, number or Buffer")
        }

        function w(e, t, r, s, n) {
            let a, o = 1,
                i = e.length,
                l = t.length;
            if (void 0 !== s && ("ucs2" === (s = String(s).toLowerCase()) || "ucs-2" === s || "utf16le" === s || "utf-16le" === s)) {
                if (e.length < 2 || t.length < 2) return -1;
                o = 2, i /= 2, l /= 2, r /= 2
            }

            function c(e, t) {
                return 1 === o ? e[t] : e.readUInt16BE(t * o)
            }
            if (n) {
                let s = -1;
                for (a = r; a < i; a++)
                    if (c(e, a) === c(t, -1 === s ? 0 : a - s)) {
                        if (-1 === s && (s = a), a - s + 1 === l) return s * o
                    } else - 1 !== s && (a -= a - s), s = -1
            } else
                for (r + l > i && (r = i - l), a = r; a >= 0; a--) {
                    let r = !0;
                    for (let s = 0; s < l; s++)
                        if (c(e, a + s) !== c(t, s)) {
                            r = !1;
                            break
                        } if (r) return a
                }
            return -1
        }

        function R(e, t, r) {
            r = Math.min(e.length, r);
            let s = [],
                n = t;
            for (; n < r;) {
                let t = e[n],
                    a = null,
                    o = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
                if (n + o <= r) {
                    let r, s, i, l;
                    switch (o) {
                        case 1:
                            t < 128 && (a = t);
                            break;
                        case 2:
                            (192 & (r = e[n + 1])) == 128 && (l = (31 & t) << 6 | 63 & r) > 127 && (a = l);
                            break;
                        case 3:
                            r = e[n + 1], s = e[n + 2], (192 & r) == 128 && (192 & s) == 128 && (l = (15 & t) << 12 | (63 & r) << 6 | 63 & s) > 2047 && (l < 55296 || l > 57343) && (a = l);
                            break;
                        case 4:
                            r = e[n + 1], s = e[n + 2], i = e[n + 3], (192 & r) == 128 && (192 & s) == 128 && (192 & i) == 128 && (l = (15 & t) << 18 | (63 & r) << 12 | (63 & s) << 6 | 63 & i) > 65535 && l < 1114112 && (a = l)
                    }
                }
                null === a ? (a = 65533, o = 1) : a > 65535 && (a -= 65536, s.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), s.push(a), n += o
            }
            var a = s;
            let o = a.length;
            if (o <= 4096) return String.fromCharCode.apply(String, a);
            let i = "",
                l = 0;
            for (; l < o;) i += String.fromCharCode.apply(String, a.slice(l, l += 4096));
            return i
        }

        function j(e, t, r) {
            if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
            if (e + t > r) throw RangeError("Trying to access beyond buffer length")
        }

        function I(e, t, r, s, n, a) {
            if (!l.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
            if (t > n || t < a) throw RangeError('"value" argument is out of bounds');
            if (r + s > e.length) throw RangeError("Index out of range")
        }

        function A(e, t, r, s, n) {
            x(t, s, n, e, r, 7);
            let a = Number(t & BigInt(0xffffffff));
            e[r++] = a, a >>= 8, e[r++] = a, a >>= 8, e[r++] = a, a >>= 8, e[r++] = a;
            let o = Number(t >> BigInt(32) & BigInt(0xffffffff));
            return e[r++] = o, o >>= 8, e[r++] = o, o >>= 8, e[r++] = o, o >>= 8, e[r++] = o, r
        }

        function T(e, t, r, s, n) {
            x(t, s, n, e, r, 7);
            let a = Number(t & BigInt(0xffffffff));
            e[r + 7] = a, a >>= 8, e[r + 6] = a, a >>= 8, e[r + 5] = a, a >>= 8, e[r + 4] = a;
            let o = Number(t >> BigInt(32) & BigInt(0xffffffff));
            return e[r + 3] = o, o >>= 8, e[r + 2] = o, o >>= 8, e[r + 1] = o, o >>= 8, e[r] = o, r + 8
        }

        function v(e, t, r, s, n, a) {
            if (r + s > e.length || r < 0) throw RangeError("Index out of range")
        }

        function b(e, t, r, s, n) {
            return t *= 1, r >>>= 0, n || v(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), a.write(e, t, r, s, 23, 4), r + 4
        }

        function O(e, t, r, s, n) {
            return t *= 1, r >>>= 0, n || v(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), a.write(e, t, r, s, 52, 8), r + 8
        }
        r.Buffer = l, r.SlowBuffer = function(e) {
            return +e != e && (e = 0), l.alloc(+e)
        }, r.INSPECT_MAX_BYTES = 50, r.kMaxLength = 0x7fffffff, l.TYPED_ARRAY_SUPPORT = function() {
            try {
                let e = new Uint8Array(1),
                    t = {
                        foo: function() {
                            return 42
                        }
                    };
                return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
            } catch (e) {
                return !1
            }
        }(), l.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(l.prototype, "parent", {
            enumerable: !0,
            get: function() {
                if (l.isBuffer(this)) return this.buffer
            }
        }), Object.defineProperty(l.prototype, "offset", {
            enumerable: !0,
            get: function() {
                if (l.isBuffer(this)) return this.byteOffset
            }
        }), l.poolSize = 8192, l.from = function(e, t, r) {
            return c(e, t, r)
        }, Object.setPrototypeOf(l.prototype, Uint8Array.prototype), Object.setPrototypeOf(l, Uint8Array), l.alloc = function(e, t, r) {
            return (u(e), e <= 0) ? i(e) : void 0 !== t ? "string" == typeof r ? i(e).fill(t, r) : i(e).fill(t) : i(e)
        }, l.allocUnsafe = function(e) {
            return d(e)
        }, l.allocUnsafeSlow = function(e) {
            return d(e)
        }, l.isBuffer = function(e) {
            return null != e && !0 === e._isBuffer && e !== l.prototype
        }, l.compare = function(e, t) {
            if (M(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)), M(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)), !l.isBuffer(e) || !l.isBuffer(t)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (e === t) return 0;
            let r = e.length,
                s = t.length;
            for (let n = 0, a = Math.min(r, s); n < a; ++n)
                if (e[n] !== t[n]) {
                    r = e[n], s = t[n];
                    break
                } return r < s ? -1 : +(s < r)
        }, l.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, l.concat = function(e, t) {
            let r;
            if (!Array.isArray(e)) throw TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return l.alloc(0);
            if (void 0 === t)
                for (r = 0, t = 0; r < e.length; ++r) t += e[r].length;
            let s = l.allocUnsafe(t),
                n = 0;
            for (r = 0; r < e.length; ++r) {
                let t = e[r];
                if (M(t, Uint8Array)) n + t.length > s.length ? (l.isBuffer(t) || (t = l.from(t)), t.copy(s, n)) : Uint8Array.prototype.set.call(s, t, n);
                else if (l.isBuffer(t)) t.copy(s, n);
                else throw TypeError('"list" argument must be an Array of Buffers');
                n += t.length
            }
            return s
        }, l.byteLength = g, l.prototype._isBuffer = !0, l.prototype.swap16 = function() {
            let e = this.length;
            if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
            for (let t = 0; t < e; t += 2) y(this, t, t + 1);
            return this
        }, l.prototype.swap32 = function() {
            let e = this.length;
            if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
            for (let t = 0; t < e; t += 4) y(this, t, t + 3), y(this, t + 1, t + 2);
            return this
        }, l.prototype.swap64 = function() {
            let e = this.length;
            if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
            for (let t = 0; t < e; t += 8) y(this, t, t + 7), y(this, t + 1, t + 6), y(this, t + 2, t + 5), y(this, t + 3, t + 4);
            return this
        }, l.prototype.toString = function() {
            let e = this.length;
            return 0 === e ? "" : 0 == arguments.length ? R(this, 0, e) : m.apply(this, arguments)
        }, l.prototype.toLocaleString = l.prototype.toString, l.prototype.equals = function(e) {
            if (!l.isBuffer(e)) throw TypeError("Argument must be a Buffer");
            return this === e || 0 === l.compare(this, e)
        }, l.prototype.inspect = function() {
            let e = "",
                t = r.INSPECT_MAX_BYTES;
            return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">"
        }, o && (l.prototype[o] = l.prototype.inspect), l.prototype.compare = function(e, t, r, s, n) {
            if (M(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)), !l.isBuffer(e)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
            if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === s && (s = 0), void 0 === n && (n = this.length), t < 0 || r > e.length || s < 0 || n > this.length) throw RangeError("out of range index");
            if (s >= n && t >= r) return 0;
            if (s >= n) return -1;
            if (t >= r) return 1;
            if (t >>>= 0, r >>>= 0, s >>>= 0, n >>>= 0, this === e) return 0;
            let a = n - s,
                o = r - t,
                i = Math.min(a, o),
                c = this.slice(s, n),
                u = e.slice(t, r);
            for (let e = 0; e < i; ++e)
                if (c[e] !== u[e]) {
                    a = c[e], o = u[e];
                    break
                } return a < o ? -1 : +(o < a)
        }, l.prototype.includes = function(e, t, r) {
            return -1 !== this.indexOf(e, t, r)
        }, l.prototype.indexOf = function(e, t, r) {
            return E(this, e, t, r, !0)
        }, l.prototype.lastIndexOf = function(e, t, r) {
            return E(this, e, t, r, !1)
        }, l.prototype.write = function(e, t, r, s) {
            var n, a, o, i, l, c, u, d;
            if (void 0 === t) s = "utf8", r = this.length, t = 0;
            else if (void 0 === r && "string" == typeof t) s = t, r = this.length, t = 0;
            else if (isFinite(t)) t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === s && (s = "utf8")) : (s = r, r = void 0);
            else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            let p = this.length - t;
            if ((void 0 === r || r > p) && (r = p), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw RangeError("Attempt to write outside buffer bounds");
            s || (s = "utf8");
            let f = !1;
            for (;;) switch (s) {
                case "hex":
                    return function(e, t, r, s) {
                        let n;
                        r = Number(r) || 0;
                        let a = e.length - r;
                        s ? (s = Number(s)) > a && (s = a) : s = a;
                        let o = t.length;
                        for (s > o / 2 && (s = o / 2), n = 0; n < s; ++n) {
                            var i;
                            let s = parseInt(t.substr(2 * n, 2), 16);
                            if ((i = s) != i) break;
                            e[r + n] = s
                        }
                        return n
                    }(this, e, t, r);
                case "utf8":
                case "utf-8":
                    return n = t, a = r, L(k(e, this.length - n), this, n, a);
                case "ascii":
                case "latin1":
                case "binary":
                    return o = t, i = r, L(function(e) {
                        let t = [];
                        for (let r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                        return t
                    }(e), this, o, i);
                case "base64":
                    return l = t, c = r, L(U(e), this, l, c);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return u = t, d = r, L(function(e, t) {
                        let r, s, n = [];
                        for (let a = 0; a < e.length && !((t -= 2) < 0); ++a) s = (r = e.charCodeAt(a)) >> 8, n.push(r % 256), n.push(s);
                        return n
                    }(e, this.length - u), this, u, d);
                default:
                    if (f) throw TypeError("Unknown encoding: " + s);
                    s = ("" + s).toLowerCase(), f = !0
            }
        }, l.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        }, l.prototype.slice = function(e, t) {
            let r = this.length;
            e = ~~e, t = void 0 === t ? r : ~~t, e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
            let s = this.subarray(e, t);
            return Object.setPrototypeOf(s, l.prototype), s
        }, l.prototype.readUintLE = l.prototype.readUIntLE = function(e, t, r) {
            e >>>= 0, t >>>= 0, r || j(e, t, this.length);
            let s = this[e],
                n = 1,
                a = 0;
            for (; ++a < t && (n *= 256);) s += this[e + a] * n;
            return s
        }, l.prototype.readUintBE = l.prototype.readUIntBE = function(e, t, r) {
            e >>>= 0, t >>>= 0, r || j(e, t, this.length);
            let s = this[e + --t],
                n = 1;
            for (; t > 0 && (n *= 256);) s += this[e + --t] * n;
            return s
        }, l.prototype.readUint8 = l.prototype.readUInt8 = function(e, t) {
            return e >>>= 0, t || j(e, 1, this.length), this[e]
        }, l.prototype.readUint16LE = l.prototype.readUInt16LE = function(e, t) {
            return e >>>= 0, t || j(e, 2, this.length), this[e] | this[e + 1] << 8
        }, l.prototype.readUint16BE = l.prototype.readUInt16BE = function(e, t) {
            return e >>>= 0, t || j(e, 2, this.length), this[e] << 8 | this[e + 1]
        }, l.prototype.readUint32LE = l.prototype.readUInt32LE = function(e, t) {
            return e >>>= 0, t || j(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 0x1000000 * this[e + 3]
        }, l.prototype.readUint32BE = l.prototype.readUInt32BE = function(e, t) {
            return e >>>= 0, t || j(e, 4, this.length), 0x1000000 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }, l.prototype.readBigUInt64LE = B(function(e) {
            P(e >>>= 0, "offset");
            let t = this[e],
                r = this[e + 7];
            (void 0 === t || void 0 === r) && _(e, this.length - 8);
            let s = t + 256 * this[++e] + 65536 * this[++e] + 0x1000000 * this[++e],
                n = this[++e] + 256 * this[++e] + 65536 * this[++e] + 0x1000000 * r;
            return BigInt(s) + (BigInt(n) << BigInt(32))
        }), l.prototype.readBigUInt64BE = B(function(e) {
            P(e >>>= 0, "offset");
            let t = this[e],
                r = this[e + 7];
            (void 0 === t || void 0 === r) && _(e, this.length - 8);
            let s = 0x1000000 * t + 65536 * this[++e] + 256 * this[++e] + this[++e],
                n = 0x1000000 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r;
            return (BigInt(s) << BigInt(32)) + BigInt(n)
        }), l.prototype.readIntLE = function(e, t, r) {
            e >>>= 0, t >>>= 0, r || j(e, t, this.length);
            let s = this[e],
                n = 1,
                a = 0;
            for (; ++a < t && (n *= 256);) s += this[e + a] * n;
            return s >= (n *= 128) && (s -= Math.pow(2, 8 * t)), s
        }, l.prototype.readIntBE = function(e, t, r) {
            e >>>= 0, t >>>= 0, r || j(e, t, this.length);
            let s = t,
                n = 1,
                a = this[e + --s];
            for (; s > 0 && (n *= 256);) a += this[e + --s] * n;
            return a >= (n *= 128) && (a -= Math.pow(2, 8 * t)), a
        }, l.prototype.readInt8 = function(e, t) {
            return (e >>>= 0, t || j(e, 1, this.length), 128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e]
        }, l.prototype.readInt16LE = function(e, t) {
            e >>>= 0, t || j(e, 2, this.length);
            let r = this[e] | this[e + 1] << 8;
            return 32768 & r ? 0xffff0000 | r : r
        }, l.prototype.readInt16BE = function(e, t) {
            e >>>= 0, t || j(e, 2, this.length);
            let r = this[e + 1] | this[e] << 8;
            return 32768 & r ? 0xffff0000 | r : r
        }, l.prototype.readInt32LE = function(e, t) {
            return e >>>= 0, t || j(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }, l.prototype.readInt32BE = function(e, t) {
            return e >>>= 0, t || j(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }, l.prototype.readBigInt64LE = B(function(e) {
            P(e >>>= 0, "offset");
            let t = this[e],
                r = this[e + 7];
            return (void 0 === t || void 0 === r) && _(e, this.length - 8), (BigInt(this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24)) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + 0x1000000 * this[++e])
        }), l.prototype.readBigInt64BE = B(function(e) {
            P(e >>>= 0, "offset");
            let t = this[e],
                r = this[e + 7];
            return (void 0 === t || void 0 === r) && _(e, this.length - 8), (BigInt((t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e]) << BigInt(32)) + BigInt(0x1000000 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r)
        }), l.prototype.readFloatLE = function(e, t) {
            return e >>>= 0, t || j(e, 4, this.length), a.read(this, e, !0, 23, 4)
        }, l.prototype.readFloatBE = function(e, t) {
            return e >>>= 0, t || j(e, 4, this.length), a.read(this, e, !1, 23, 4)
        }, l.prototype.readDoubleLE = function(e, t) {
            return e >>>= 0, t || j(e, 8, this.length), a.read(this, e, !0, 52, 8)
        }, l.prototype.readDoubleBE = function(e, t) {
            return e >>>= 0, t || j(e, 8, this.length), a.read(this, e, !1, 52, 8)
        }, l.prototype.writeUintLE = l.prototype.writeUIntLE = function(e, t, r, s) {
            if (e *= 1, t >>>= 0, r >>>= 0, !s) {
                let s = Math.pow(2, 8 * r) - 1;
                I(this, e, t, r, s, 0)
            }
            let n = 1,
                a = 0;
            for (this[t] = 255 & e; ++a < r && (n *= 256);) this[t + a] = e / n & 255;
            return t + r
        }, l.prototype.writeUintBE = l.prototype.writeUIntBE = function(e, t, r, s) {
            if (e *= 1, t >>>= 0, r >>>= 0, !s) {
                let s = Math.pow(2, 8 * r) - 1;
                I(this, e, t, r, s, 0)
            }
            let n = r - 1,
                a = 1;
            for (this[t + n] = 255 & e; --n >= 0 && (a *= 256);) this[t + n] = e / a & 255;
            return t + r
        }, l.prototype.writeUint8 = l.prototype.writeUInt8 = function(e, t, r) {
            return e *= 1, t >>>= 0, r || I(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
        }, l.prototype.writeUint16LE = l.prototype.writeUInt16LE = function(e, t, r) {
            return e *= 1, t >>>= 0, r || I(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
        }, l.prototype.writeUint16BE = l.prototype.writeUInt16BE = function(e, t, r) {
            return e *= 1, t >>>= 0, r || I(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
        }, l.prototype.writeUint32LE = l.prototype.writeUInt32LE = function(e, t, r) {
            return e *= 1, t >>>= 0, r || I(this, e, t, 4, 0xffffffff, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
        }, l.prototype.writeUint32BE = l.prototype.writeUInt32BE = function(e, t, r) {
            return e *= 1, t >>>= 0, r || I(this, e, t, 4, 0xffffffff, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
        }, l.prototype.writeBigUInt64LE = B(function(e, t = 0) {
            return A(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
        }), l.prototype.writeBigUInt64BE = B(function(e, t = 0) {
            return T(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
        }), l.prototype.writeIntLE = function(e, t, r, s) {
            if (e *= 1, t >>>= 0, !s) {
                let s = Math.pow(2, 8 * r - 1);
                I(this, e, t, r, s - 1, -s)
            }
            let n = 0,
                a = 1,
                o = 0;
            for (this[t] = 255 & e; ++n < r && (a *= 256);) e < 0 && 0 === o && 0 !== this[t + n - 1] && (o = 1), this[t + n] = (e / a | 0) - o & 255;
            return t + r
        }, l.prototype.writeIntBE = function(e, t, r, s) {
            if (e *= 1, t >>>= 0, !s) {
                let s = Math.pow(2, 8 * r - 1);
                I(this, e, t, r, s - 1, -s)
            }
            let n = r - 1,
                a = 1,
                o = 0;
            for (this[t + n] = 255 & e; --n >= 0 && (a *= 256);) e < 0 && 0 === o && 0 !== this[t + n + 1] && (o = 1), this[t + n] = (e / a | 0) - o & 255;
            return t + r
        }, l.prototype.writeInt8 = function(e, t, r) {
            return e *= 1, t >>>= 0, r || I(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
        }, l.prototype.writeInt16LE = function(e, t, r) {
            return e *= 1, t >>>= 0, r || I(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
        }, l.prototype.writeInt16BE = function(e, t, r) {
            return e *= 1, t >>>= 0, r || I(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
        }, l.prototype.writeInt32LE = function(e, t, r) {
            return e *= 1, t >>>= 0, r || I(this, e, t, 4, 0x7fffffff, -0x80000000), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
        }, l.prototype.writeInt32BE = function(e, t, r) {
            return e *= 1, t >>>= 0, r || I(this, e, t, 4, 0x7fffffff, -0x80000000), e < 0 && (e = 0xffffffff + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
        }, l.prototype.writeBigInt64LE = B(function(e, t = 0) {
            return A(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
        }), l.prototype.writeBigInt64BE = B(function(e, t = 0) {
            return T(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
        }), l.prototype.writeFloatLE = function(e, t, r) {
            return b(this, e, t, !0, r)
        }, l.prototype.writeFloatBE = function(e, t, r) {
            return b(this, e, t, !1, r)
        }, l.prototype.writeDoubleLE = function(e, t, r) {
            return O(this, e, t, !0, r)
        }, l.prototype.writeDoubleBE = function(e, t, r) {
            return O(this, e, t, !1, r)
        }, l.prototype.copy = function(e, t, r, s) {
            if (!l.isBuffer(e)) throw TypeError("argument should be a Buffer");
            if (r || (r = 0), s || 0 === s || (s = this.length), t >= e.length && (t = e.length), t || (t = 0), s > 0 && s < r && (s = r), s === r || 0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length) throw RangeError("Index out of range");
            if (s < 0) throw RangeError("sourceEnd out of bounds");
            s > this.length && (s = this.length), e.length - t < s - r && (s = e.length - t + r);
            let n = s - r;
            return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, r, s) : Uint8Array.prototype.set.call(e, this.subarray(r, s), t), n
        }, l.prototype.fill = function(e, t, r, s) {
            let n;
            if ("string" == typeof e) {
                if ("string" == typeof t ? (s = t, t = 0, r = this.length) : "string" == typeof r && (s = r, r = this.length), void 0 !== s && "string" != typeof s) throw TypeError("encoding must be a string");
                if ("string" == typeof s && !l.isEncoding(s)) throw TypeError("Unknown encoding: " + s);
                if (1 === e.length) {
                    let t = e.charCodeAt(0);
                    ("utf8" === s && t < 128 || "latin1" === s) && (e = t)
                }
            } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
            if (t < 0 || this.length < t || this.length < r) throw RangeError("Out of range index");
            if (r <= t) return this;
            if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                for (n = t; n < r; ++n) this[n] = e;
            else {
                let a = l.isBuffer(e) ? e : l.from(e, s),
                    o = a.length;
                if (0 === o) throw TypeError('The value "' + e + '" is invalid for argument "value"');
                for (n = 0; n < r - t; ++n) this[n + t] = a[n % o]
            }
            return this
        };
        let S = {};

        function C(e, t, r) {
            S[e] = class extends r {
                constructor() {
                    super(), Object.defineProperty(this, "message", {
                        value: t.apply(this, arguments),
                        writable: !0,
                        configurable: !0
                    }), this.name = `${this.name} [${e}]`, this.stack, delete this.name
                }
                get code() {
                    return e
                }
                set code(e) {
                    Object.defineProperty(this, "code", {
                        configurable: !0,
                        enumerable: !0,
                        value: e,
                        writable: !0
                    })
                }
                toString() {
                    return `${this.name} [${e}]: ${this.message}`
                }
            }
        }

        function N(e) {
            let t = "",
                r = e.length,
                s = +("-" === e[0]);
            for (; r >= s + 4; r -= 3) t = `_${e.slice(r-3,r)}${t}`;
            return `${e.slice(0,r)}${t}`
        }

        function x(e, t, r, s, n, a) {
            if (e > r || e < t) {
                let s, n = "bigint" == typeof t ? "n" : "";
                throw s = a > 3 ? 0 === t || t === BigInt(0) ? `>= 0${n} and < 2${n} ** ${(a+1)*8}${n}` : `>= -(2${n} ** ${(a+1)*8-1}${n}) and < 2 ** ${(a+1)*8-1}${n}` : `>= ${t}${n} and <= ${r}${n}`, new S.ERR_OUT_OF_RANGE("value", s, e)
            }
            P(n, "offset"), (void 0 === s[n] || void 0 === s[n + a]) && _(n, s.length - (a + 1))
        }

        function P(e, t) {
            if ("number" != typeof e) throw new S.ERR_INVALID_ARG_TYPE(t, "number", e)
        }

        function _(e, t, r) {
            if (Math.floor(e) !== e) throw P(e, r), new S.ERR_OUT_OF_RANGE(r || "offset", "an integer", e);
            if (t < 0) throw new S.ERR_BUFFER_OUT_OF_BOUNDS;
            throw new S.ERR_OUT_OF_RANGE(r || "offset", `>= ${+!!r} and <= ${t}`, e)
        }
        C("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
            return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
        }, RangeError), C("ERR_INVALID_ARG_TYPE", function(e, t) {
            return `The "${e}" argument must be of type number. Received type ${typeof t}`
        }, TypeError), C("ERR_OUT_OF_RANGE", function(e, t, r) {
            let s = `The value of "${e}" is out of range.`,
                n = r;
            return Number.isInteger(r) && Math.abs(r) > 0x100000000 ? n = N(String(r)) : "bigint" == typeof r && (n = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (n = N(n)), n += "n"), s += ` It must be ${t}. Received ${n}`
        }, RangeError);
        let D = /[^+/0-9A-Za-z-_]/g;

        function k(e, t) {
            let r;
            t = t || 1 / 0;
            let s = e.length,
                n = null,
                a = [];
            for (let o = 0; o < s; ++o) {
                if ((r = e.charCodeAt(o)) > 55295 && r < 57344) {
                    if (!n) {
                        if (r > 56319 || o + 1 === s) {
                            (t -= 3) > -1 && a.push(239, 191, 189);
                            continue
                        }
                        n = r;
                        continue
                    }
                    if (r < 56320) {
                        (t -= 3) > -1 && a.push(239, 191, 189), n = r;
                        continue
                    }
                    r = (n - 55296 << 10 | r - 56320) + 65536
                } else n && (t -= 3) > -1 && a.push(239, 191, 189);
                if (n = null, r < 128) {
                    if ((t -= 1) < 0) break;
                    a.push(r)
                } else if (r < 2048) {
                    if ((t -= 2) < 0) break;
                    a.push(r >> 6 | 192, 63 & r | 128)
                } else if (r < 65536) {
                    if ((t -= 3) < 0) break;
                    a.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                } else if (r < 1114112) {
                    if ((t -= 4) < 0) break;
                    a.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                } else throw Error("Invalid code point")
            }
            return a
        }

        function U(e) {
            return n.toByteArray(function(e) {
                if ((e = (e = e.split("=")[0]).trim().replace(D, "")).length < 2) return "";
                for (; e.length % 4 != 0;) e += "=";
                return e
            }(e))
        }

        function L(e, t, r, s) {
            let n;
            for (n = 0; n < s && !(n + r >= t.length) && !(n >= e.length); ++n) t[n + r] = e[n];
            return n
        }

        function M(e, t) {
            return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
        }
        let F = function() {
            let e = "0123456789abcdef",
                t = Array(256);
            for (let r = 0; r < 16; ++r) {
                let s = 16 * r;
                for (let n = 0; n < 16; ++n) t[s + n] = e[r] + e[n]
            }
            return t
        }();

        function B(e) {
            return "undefined" == typeof BigInt ? J : e
        }

        function J() {
            throw Error("BigInt not supported")
        }
    }, {
        "9c62938f1dccc73c": "6P4Ax",
        aceacb6a4531a9d2: "lPFVa"
    }],
    "6P4Ax": [function(e, t, r, s) {
        "use strict";
        r.byteLength = function(e) {
            var t = u(e),
                r = t[0],
                s = t[1];
            return (r + s) * 3 / 4 - s
        }, r.toByteArray = function(e) {
            var t, r, s = u(e),
                n = s[0],
                i = s[1],
                l = new o((n + i) * 3 / 4 - i),
                c = 0,
                d = i > 0 ? n - 4 : n;
            for (r = 0; r < d; r += 4) t = a[e.charCodeAt(r)] << 18 | a[e.charCodeAt(r + 1)] << 12 | a[e.charCodeAt(r + 2)] << 6 | a[e.charCodeAt(r + 3)], l[c++] = t >> 16 & 255, l[c++] = t >> 8 & 255, l[c++] = 255 & t;
            return 2 === i && (t = a[e.charCodeAt(r)] << 2 | a[e.charCodeAt(r + 1)] >> 4, l[c++] = 255 & t), 1 === i && (t = a[e.charCodeAt(r)] << 10 | a[e.charCodeAt(r + 1)] << 4 | a[e.charCodeAt(r + 2)] >> 2, l[c++] = t >> 8 & 255, l[c++] = 255 & t), l
        }, r.fromByteArray = function(e) {
            for (var t, r = e.length, s = r % 3, a = [], o = 0, i = r - s; o < i; o += 16383) a.push(function(e, t, r) {
                for (var s, a = [], o = t; o < r; o += 3) s = (e[o] << 16 & 0xff0000) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]), a.push(n[s >> 18 & 63] + n[s >> 12 & 63] + n[s >> 6 & 63] + n[63 & s]);
                return a.join("")
            }(e, o, o + 16383 > i ? i : o + 16383));
            return 1 === s ? a.push(n[(t = e[r - 1]) >> 2] + n[t << 4 & 63] + "==") : 2 === s && a.push(n[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="), a.join("")
        };
        for (var n = [], a = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = 0, c = i.length; l < c; ++l) n[l] = i[l], a[i.charCodeAt(l)] = l;

        function u(e) {
            var t = e.length;
            if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
            var r = e.indexOf("="); - 1 === r && (r = t);
            var s = r === t ? 0 : 4 - r % 4;
            return [r, s]
        }
        a[45] = 62, a[95] = 63
    }, {}],
    lPFVa: [function(e, t, r, s) {
        r.read = function(e, t, r, s, n) {
            var a, o, i = 8 * n - s - 1,
                l = (1 << i) - 1,
                c = l >> 1,
                u = -7,
                d = r ? n - 1 : 0,
                p = r ? -1 : 1,
                f = e[t + d];
            for (d += p, a = f & (1 << -u) - 1, f >>= -u, u += i; u > 0; a = 256 * a + e[t + d], d += p, u -= 8);
            for (o = a & (1 << -u) - 1, a >>= -u, u += s; u > 0; o = 256 * o + e[t + d], d += p, u -= 8);
            if (0 === a) a = 1 - c;
            else {
                if (a === l) return o ? NaN : 1 / 0 * (f ? -1 : 1);
                o += Math.pow(2, s), a -= c
            }
            return (f ? -1 : 1) * o * Math.pow(2, a - s)
        }, r.write = function(e, t, r, s, n, a) {
            var o, i, l, c = 8 * a - n - 1,
                u = (1 << c) - 1,
                d = u >> 1,
                p = 5960464477539062e-23 * (23 === n),
                f = s ? 0 : a - 1,
                h = s ? 1 : -1,
                g = +(t < 0 || 0 === t && 1 / t < 0);
            for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (i = +!!isNaN(t), o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -o)) < 1 && (o--, l *= 2), o + d >= 1 ? t += p / l : t += p * Math.pow(2, 1 - d), t * l >= 2 && (o++, l /= 2), o + d >= u ? (i = 0, o = u) : o + d >= 1 ? (i = (t * l - 1) * Math.pow(2, n), o += d) : (i = t * Math.pow(2, d - 1) * Math.pow(2, n), o = 0)); n >= 8; e[r + f] = 255 & i, f += h, i /= 256, n -= 8);
            for (o = o << n | i, c += n; c > 0; e[r + f] = 255 & o, f += h, o /= 256, c -= 8);
            e[r + f - h] |= 128 * g
        }
    }, {}],
    hjCVQ: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r);
        "use strict";
        var a = e("../utils.js"),
            o = n.interopDefault(a);

        function i(e, t, r, s, n) {
            Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), s && (this.request = s), n && (this.response = n, this.status = n.status ? n.status : null)
        }
        o.default.inherits(i, Error, {
            toJSON: function() {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: o.default.toJSONObject(this.config),
                    code: this.code,
                    status: this.status
                }
            }
        });
        let l = i.prototype,
            c = {};
        ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
            c[e] = {
                value: e
            }
        }), Object.defineProperties(i, c), Object.defineProperty(l, "isAxiosError", {
            value: !0
        }), i.from = (e, t, r, s, n, a) => {
            let c = Object.create(l);
            return o.default.toFlatObject(e, c, function(e) {
                return e !== Error.prototype
            }, e => "isAxiosError" !== e), i.call(c, e.message, t, r, s, n), c.cause = e, c.name = e.name, a && Object.assign(c, a), c
        }, r.default = i
    }, {
        "../utils.js": "2ioTY",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    fN4B6: [function(e, t, r, s) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = null
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "5Qndl": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r);
        "use strict";
        var a = e("./../utils.js"),
            o = n.interopDefault(a);
        r.default = class {
            constructor() {
                this.handlers = []
            }
            use(e, t, r) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t,
                    synchronous: !!r && r.synchronous,
                    runWhen: r ? r.runWhen : null
                }), this.handlers.length - 1
            }
            eject(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }
            clear() {
                this.handlers && (this.handlers = [])
            }
            forEach(e) {
                o.default.forEach(this.handlers, function(t) {
                    null !== t && e(t)
                })
            }
        }
    }, {
        "./../utils.js": "2ioTY",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    gTZwy: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "default", () => E);
        "use strict";
        var a = e("./transformData.js"),
            o = n.interopDefault(a),
            i = e("../cancel/isCancel.js"),
            l = n.interopDefault(i),
            c = e("../defaults/index.js"),
            u = n.interopDefault(c),
            d = e("../cancel/CanceledError.js"),
            p = n.interopDefault(d),
            f = e("../core/AxiosHeaders.js"),
            h = n.interopDefault(f),
            g = e("../adapters/adapters.js"),
            m = n.interopDefault(g);

        function y(e) {
            if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new(0, p.default)(null, e)
        }

        function E(e) {
            return y(e), e.headers = h.default.from(e.headers), e.data = o.default.call(e, e.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1), m.default.getAdapter(e.adapter || u.default.adapter)(e).then(function(t) {
                return y(e), t.data = o.default.call(e, e.transformResponse, t), t.headers = h.default.from(t.headers), t
            }, function(t) {
                return !(0, l.default)(t) && (y(e), t && t.response && (t.response.data = o.default.call(e, e.transformResponse, t.response), t.response.headers = h.default.from(t.response.headers))), Promise.reject(t)
            })
        }
    }, {
        "./transformData.js": "8H0wy",
        "../cancel/isCancel.js": "5ndsF",
        "../defaults/index.js": "1GU0t",
        "../cancel/CanceledError.js": "judoa",
        "../core/AxiosHeaders.js": "1qkRX",
        "../adapters/adapters.js": "6E0f0",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "8H0wy": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "default", () => d);
        "use strict";
        var a = e("./../utils.js"),
            o = n.interopDefault(a),
            i = e("../defaults/index.js"),
            l = n.interopDefault(i),
            c = e("../core/AxiosHeaders.js"),
            u = n.interopDefault(c);

        function d(e, t) {
            let r = this || l.default,
                s = t || r,
                n = u.default.from(s.headers),
                a = s.data;
            return o.default.forEach(e, function(e) {
                a = e.call(r, a, n.normalize(), t ? t.status : void 0)
            }), n.normalize(), a
        }
    }, {
        "./../utils.js": "2ioTY",
        "../defaults/index.js": "1GU0t",
        "../core/AxiosHeaders.js": "1qkRX",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "1GU0t": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r);
        "use strict";
        var a = e("../utils.js"),
            o = n.interopDefault(a),
            i = e("../core/AxiosError.js"),
            l = n.interopDefault(i),
            c = e("./transitional.js"),
            u = n.interopDefault(c),
            d = e("../helpers/toFormData.js"),
            p = n.interopDefault(d),
            f = e("../helpers/toURLEncodedForm.js"),
            h = n.interopDefault(f),
            g = e("../platform/index.js"),
            m = n.interopDefault(g),
            y = e("../helpers/formDataToJSON.js"),
            E = n.interopDefault(y);
        let w = {
            transitional: u.default,
            adapter: ["xhr", "http", "fetch"],
            transformRequest: [function(e, t) {
                let r, s = t.getContentType() || "",
                    n = s.indexOf("application/json") > -1,
                    a = o.default.isObject(e);
                if (a && o.default.isHTMLForm(e) && (e = new FormData(e)), o.default.isFormData(e)) return n ? JSON.stringify((0, E.default)(e)) : e;
                if (o.default.isArrayBuffer(e) || o.default.isBuffer(e) || o.default.isStream(e) || o.default.isFile(e) || o.default.isBlob(e) || o.default.isReadableStream(e)) return e;
                if (o.default.isArrayBufferView(e)) return e.buffer;
                if (o.default.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
                if (a) {
                    if (s.indexOf("application/x-www-form-urlencoded") > -1) return (0, h.default)(e, this.formSerializer).toString();
                    if ((r = o.default.isFileList(e)) || s.indexOf("multipart/form-data") > -1) {
                        let t = this.env && this.env.FormData;
                        return (0, p.default)(r ? {
                            "files[]": e
                        } : e, t && new t, this.formSerializer)
                    }
                }
                if (a || n) {
                    t.setContentType("application/json", !1);
                    var i = e;
                    if (o.default.isString(i)) try {
                        return (0, JSON.parse)(i), o.default.trim(i)
                    } catch (e) {
                        if ("SyntaxError" !== e.name) throw e
                    }
                    return (0, JSON.stringify)(i)
                }
                return e
            }],
            transformResponse: [function(e) {
                let t = this.transitional || w.transitional,
                    r = t && t.forcedJSONParsing,
                    s = "json" === this.responseType;
                if (o.default.isResponse(e) || o.default.isReadableStream(e)) return e;
                if (e && o.default.isString(e) && (r && !this.responseType || s)) {
                    let r = t && t.silentJSONParsing;
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        if (!r && s) {
                            if ("SyntaxError" === e.name) throw l.default.from(e, l.default.ERR_BAD_RESPONSE, this, null, this.response);
                            throw e
                        }
                    }
                }
                return e
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            env: {
                FormData: m.default.classes.FormData,
                Blob: m.default.classes.Blob
            },
            validateStatus: function(e) {
                return e >= 200 && e < 300
            },
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": void 0
                }
            }
        };
        o.default.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
            w.headers[e] = {}
        }), r.default = w
    }, {
        "../utils.js": "2ioTY",
        "../core/AxiosError.js": "hjCVQ",
        "./transitional.js": "lBqaD",
        "../helpers/toFormData.js": "k8OtD",
        "../helpers/toURLEncodedForm.js": "bgvH4",
        "../platform/index.js": "fP1Ni",
        "../helpers/formDataToJSON.js": "jhUur",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    lBqaD: [function(e, t, r, s) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        "use strict";
        r.default = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    bgvH4: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "default", () => d);
        "use strict";
        var a = e("../utils.js"),
            o = n.interopDefault(a),
            i = e("./toFormData.js"),
            l = n.interopDefault(i),
            c = e("../platform/index.js"),
            u = n.interopDefault(c);

        function d(e, t) {
            return (0, l.default)(e, new u.default.classes.URLSearchParams, Object.assign({
                visitor: function(e, t, r, s) {
                    return u.default.isNode && o.default.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments)
                }
            }, t))
        }
    }, {
        "../utils.js": "2ioTY",
        "./toFormData.js": "k8OtD",
        "../platform/index.js": "fP1Ni",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    fP1Ni: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r);
        var a = e("./node/index.js"),
            o = n.interopDefault(a);
        r.default = {
            ...e("./common/utils.js"),
            ...o.default
        }
    }, {
        "./node/index.js": "3yghl",
        "./common/utils.js": "dkG5V",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "3yghl": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r);
        var a = e("./classes/URLSearchParams.js"),
            o = n.interopDefault(a),
            i = e("./classes/FormData.js"),
            l = n.interopDefault(i),
            c = e("./classes/Blob.js"),
            u = n.interopDefault(c);
        r.default = {
            isBrowser: !0,
            classes: {
                URLSearchParams: o.default,
                FormData: l.default,
                Blob: u.default
            },
            protocols: ["http", "https", "file", "blob", "url", "data"]
        }
    }, {
        "./classes/URLSearchParams.js": "eT4YQ",
        "./classes/FormData.js": "2389U",
        "./classes/Blob.js": "eKMhL",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    eT4YQ: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r);
        "use strict";
        var a = e("../../../helpers/AxiosURLSearchParams.js"),
            o = n.interopDefault(a);
        r.default = "undefined" != typeof URLSearchParams ? URLSearchParams : o.default
    }, {
        "../../../helpers/AxiosURLSearchParams.js": "juzHK",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "2389U": [function(e, t, r, s) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        "use strict";
        r.default = "undefined" != typeof FormData ? FormData : null
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    eKMhL: [function(e, t, r, s) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        "use strict";
        r.default = "undefined" != typeof Blob ? Blob : null
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    dkG5V: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "hasBrowserEnv", () => a), n.export(r, "hasStandardBrowserWebWorkerEnv", () => l), n.export(r, "hasStandardBrowserEnv", () => i), n.export(r, "navigator", () => o), n.export(r, "origin", () => c);
        let a = "undefined" != typeof window && "undefined" != typeof document,
            o = "object" == typeof navigator && navigator || void 0,
            i = a && (!o || 0 > ["ReactNative", "NativeScript", "NS"].indexOf(o.product)),
            l = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
            c = a && window.location.href || "http://localhost"
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    jhUur: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r);
        "use strict";
        var a = e("../utils.js"),
            o = n.interopDefault(a);
        r.default = function(e) {
            if (o.default.isFormData(e) && o.default.isFunction(e.entries)) {
                let t = {};
                return o.default.forEachEntry(e, (e, r) => {
                    ! function e(t, r, s, n) {
                        let a = t[n++];
                        if ("__proto__" === a) return !0;
                        let i = Number.isFinite(+a),
                            l = n >= t.length;
                        return (a = !a && o.default.isArray(s) ? s.length : a, l) ? o.default.hasOwnProp(s, a) ? s[a] = [s[a], r] : s[a] = r : (s[a] && o.default.isObject(s[a]) || (s[a] = []), e(t, r, s[a], n) && o.default.isArray(s[a]) && (s[a] = function(e) {
                            let t, r, s = {},
                                n = Object.keys(e),
                                a = n.length;
                            for (t = 0; t < a; t++) s[r = n[t]] = e[r];
                            return s
                        }(s[a]))), !i
                    }(o.default.matchAll(/\w+|\[(\w*)]/g, e).map(e => "[]" === e[0] ? "" : e[1] || e[0]), r, t, 0)
                }), t
            }
            return null
        }
    }, {
        "../utils.js": "2ioTY",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "1qkRX": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r);
        "use strict";
        var a = e("../utils.js"),
            o = n.interopDefault(a),
            i = e("../helpers/parseHeaders.js"),
            l = n.interopDefault(i);
        let c = Symbol("internals");

        function u(e) {
            return e && String(e).trim().toLowerCase()
        }

        function d(e) {
            return !1 === e || null == e ? e : o.default.isArray(e) ? e.map(d) : String(e)
        }

        function p(e, t, r, s, n) {
            if (o.default.isFunction(s)) return s.call(this, t, r);
            if (n && (t = r), o.default.isString(t)) {
                if (o.default.isString(s)) return -1 !== t.indexOf(s);
                if (o.default.isRegExp(s)) return s.test(t)
            }
        }
        class f {
            constructor(e) {
                e && this.set(e)
            }
            set(e, t, r) {
                let s = this;

                function n(e, t, r) {
                    let n = u(t);
                    if (!n) throw Error("header name must be a non-empty string");
                    let a = o.default.findKey(s, n);
                    a && void 0 !== s[a] && !0 !== r && (void 0 !== r || !1 === s[a]) || (s[a || t] = d(e))
                }
                let a = (e, t) => o.default.forEach(e, (e, r) => n(e, r, t));
                if (o.default.isPlainObject(e) || e instanceof this.constructor) a(e, t);
                else {
                    let s;
                    if (o.default.isString(e) && (e = e.trim()) && (s = e, !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim()))) a((0, l.default)(e), t);
                    else if (o.default.isObject(e) && o.default.isIterable(e)) {
                        let r = {},
                            s, n;
                        for (let t of e) {
                            if (!o.default.isArray(t)) throw TypeError("Object iterator must return a key-value pair");
                            r[n = t[0]] = (s = r[n]) ? o.default.isArray(s) ? [...s, t[1]] : [s, t[1]] : t[1]
                        }
                        a(r, t)
                    } else null != e && n(t, e, r)
                }
                return this
            }
            get(e, t) {
                if (e = u(e)) {
                    let r = o.default.findKey(this, e);
                    if (r) {
                        let e = this[r];
                        if (!t) return e;
                        if (!0 === t) {
                            let t, r = Object.create(null),
                                s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                            for (; t = s.exec(e);) r[t[1]] = t[2];
                            return r
                        }
                        if (o.default.isFunction(t)) return t.call(this, e, r);
                        if (o.default.isRegExp(t)) return t.exec(e);
                        throw TypeError("parser must be boolean|regexp|function")
                    }
                }
            }
            has(e, t) {
                if (e = u(e)) {
                    let r = o.default.findKey(this, e);
                    return !!(r && void 0 !== this[r] && (!t || p(this, this[r], r, t)))
                }
                return !1
            }
            delete(e, t) {
                let r = this,
                    s = !1;

                function n(e) {
                    if (e = u(e)) {
                        let n = o.default.findKey(r, e);
                        n && (!t || p(r, r[n], n, t)) && (delete r[n], s = !0)
                    }
                }
                return o.default.isArray(e) ? e.forEach(n) : n(e), s
            }
            clear(e) {
                let t = Object.keys(this),
                    r = t.length,
                    s = !1;
                for (; r--;) {
                    let n = t[r];
                    (!e || p(this, this[n], n, e, !0)) && (delete this[n], s = !0)
                }
                return s
            }
            normalize(e) {
                let t = this,
                    r = {};
                return o.default.forEach(this, (s, n) => {
                    let a = o.default.findKey(r, n);
                    if (a) {
                        t[a] = d(s), delete t[n];
                        return
                    }
                    let i = e ? n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, r) => t.toUpperCase() + r) : String(n).trim();
                    i !== n && delete t[n], t[i] = d(s), r[i] = !0
                }), this
            }
            concat(...e) {
                return this.constructor.concat(this, ...e)
            }
            toJSON(e) {
                let t = Object.create(null);
                return o.default.forEach(this, (r, s) => {
                    null != r && !1 !== r && (t[s] = e && o.default.isArray(r) ? r.join(", ") : r)
                }), t
            } [Symbol.iterator]() {
                return Object.entries(this.toJSON())[Symbol.iterator]()
            }
            toString() {
                return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join("\n")
            }
            getSetCookie() {
                return this.get("set-cookie") || []
            }
            get[Symbol.toStringTag]() {
                return "AxiosHeaders"
            }
            static from(e) {
                return e instanceof this ? e : new this(e)
            }
            static concat(e, ...t) {
                let r = new this(e);
                return t.forEach(e => r.set(e)), r
            }
            static accessor(e) {
                let t = (this[c] = this[c] = {
                        accessors: {}
                    }).accessors,
                    r = this.prototype;

                function s(e) {
                    let s = u(e);
                    if (!t[s]) {
                        let n = o.default.toCamelCase(" " + e);
                        ["get", "set", "has"].forEach(t => {
                            Object.defineProperty(r, t + n, {
                                value: function(r, s, n) {
                                    return this[t].call(this, e, r, s, n)
                                },
                                configurable: !0
                            })
                        }), t[s] = !0
                    }
                }
                return o.default.isArray(e) ? e.forEach(s) : s(e), this
            }
        }
        f.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), o.default.reduceDescriptors(f.prototype, ({
            value: e
        }, t) => {
            let r = t[0].toUpperCase() + t.slice(1);
            return {
                get: () => e,
                set(e) {
                    this[r] = e
                }
            }
        }), o.default.freezeMethods(f), r.default = f
    }, {
        "../utils.js": "2ioTY",
        "../helpers/parseHeaders.js": "aYbVO",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    aYbVO: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r);
        "use strict";
        var a = e("./../utils.js");
        let o = n.interopDefault(a).default.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
        r.default = e => {
            let t, r, s, n = {};
            return e && e.split("\n").forEach(function(e) {
                s = e.indexOf(":"), t = e.substring(0, s).trim().toLowerCase(), r = e.substring(s + 1).trim(), !t || n[t] && o[t] || ("set-cookie" === t ? n[t] ? n[t].push(r) : n[t] = [r] : n[t] = n[t] ? n[t] + ", " + r : r)
            }), n
        }
    }, {
        "./../utils.js": "2ioTY",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "5ndsF": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        "use strict";

        function a(e) {
            return !!(e && e.__CANCEL__)
        }
        n.defineInteropFlag(r), n.export(r, "default", () => a)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    judoa: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r);
        "use strict";
        var a = e("../core/AxiosError.js"),
            o = n.interopDefault(a),
            i = e("../utils.js");

        function l(e, t, r) {
            o.default.call(this, null == e ? "canceled" : e, o.default.ERR_CANCELED, t, r), this.name = "CanceledError"
        }
        n.interopDefault(i).default.inherits(l, o.default, {
            __CANCEL__: !0
        }), r.default = l
    }, {
        "../core/AxiosError.js": "hjCVQ",
        "../utils.js": "2ioTY",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "6E0f0": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r);
        var a = e("../utils.js"),
            o = n.interopDefault(a),
            i = e("./http.js"),
            l = n.interopDefault(i),
            c = e("./xhr.js"),
            u = n.interopDefault(c),
            d = e("./fetch.js"),
            p = n.interopDefault(d),
            f = e("../core/AxiosError.js"),
            h = n.interopDefault(f);
        let g = {
            http: l.default,
            xhr: u.default,
            fetch: p.default
        };
        o.default.forEach(g, (e, t) => {
            if (e) {
                try {
                    Object.defineProperty(e, "name", {
                        value: t
                    })
                } catch (e) {}
                Object.defineProperty(e, "adapterName", {
                    value: t
                })
            }
        });
        let m = e => `- ${e}`,
            y = e => o.default.isFunction(e) || null === e || !1 === e;
        r.default = {
            getAdapter: e => {
                let t, r, {
                        length: s
                    } = e = o.default.isArray(e) ? e : [e],
                    n = {};
                for (let a = 0; a < s; a++) {
                    let s;
                    if (r = t = e[a], !y(t) && void 0 === (r = g[(s = String(t)).toLowerCase()])) throw new(0, h.default)(`Unknown adapter '${s}'`);
                    if (r) break;
                    n[s || "#" + a] = r
                }
                if (!r) {
                    let e = Object.entries(n).map(([e, t]) => `adapter ${e} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build")),
                        t = s ? e.length > 1 ? "since :\n" + e.map(m).join("\n") : " " + m(e[0]) : "as no adapter specified";
                    throw new(0, h.default)("There is no suitable adapter to dispatch the request " + t, "ERR_NOT_SUPPORT")
                }
                return r
            },
            adapters: g
        }
    }, {
        "../utils.js": "2ioTY",
        "./http.js": "fN4B6",
        "./xhr.js": "9qcoo",
        "./fetch.js": "29Teh",
        "../core/AxiosError.js": "hjCVQ",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "9qcoo": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r);
        var a = e("./../utils.js"),
            o = n.interopDefault(a),
            i = e("./../core/settle.js"),
            l = n.interopDefault(i),
            c = e("../defaults/transitional.js"),
            u = n.interopDefault(c),
            d = e("../core/AxiosError.js"),
            p = n.interopDefault(d),
            f = e("../cancel/CanceledError.js"),
            h = n.interopDefault(f),
            g = e("../helpers/parseProtocol.js"),
            m = n.interopDefault(g),
            y = e("../platform/index.js"),
            E = n.interopDefault(y),
            w = e("../core/AxiosHeaders.js"),
            R = n.interopDefault(w),
            j = e("../helpers/progressEventReducer.js"),
            I = e("../helpers/resolveConfig.js"),
            A = n.interopDefault(I);
        r.default = "undefined" != typeof XMLHttpRequest && function(e) {
            return new Promise(function(t, r) {
                let s, n, a, i, c, d = (0, A.default)(e),
                    f = d.data,
                    g = R.default.from(d.headers).normalize(),
                    {
                        responseType: y,
                        onUploadProgress: w,
                        onDownloadProgress: I
                    } = d;

                function T() {
                    i && i(), c && c(), d.cancelToken && d.cancelToken.unsubscribe(s), d.signal && d.signal.removeEventListener("abort", s)
                }
                let v = new XMLHttpRequest;

                function b() {
                    if (!v) return;
                    let s = R.default.from("getAllResponseHeaders" in v && v.getAllResponseHeaders()),
                        n = {
                            data: y && "text" !== y && "json" !== y ? v.response : v.responseText,
                            status: v.status,
                            statusText: v.statusText,
                            headers: s,
                            config: e,
                            request: v
                        };
                    (0, l.default)(function(e) {
                        t(e), T()
                    }, function(e) {
                        r(e), T()
                    }, n), v = null
                }
                v.open(d.method.toUpperCase(), d.url, !0), v.timeout = d.timeout, "onloadend" in v ? v.onloadend = b : v.onreadystatechange = function() {
                    v && 4 === v.readyState && (0 !== v.status || v.responseURL && 0 === v.responseURL.indexOf("file:")) && setTimeout(b)
                }, v.onabort = function() {
                    v && (r(new(0, p.default)("Request aborted", p.default.ECONNABORTED, e, v)), v = null)
                }, v.onerror = function() {
                    r(new(0, p.default)("Network Error", p.default.ERR_NETWORK, e, v)), v = null
                }, v.ontimeout = function() {
                    let t = d.timeout ? "timeout of " + d.timeout + "ms exceeded" : "timeout exceeded",
                        s = d.transitional || u.default;
                    d.timeoutErrorMessage && (t = d.timeoutErrorMessage), r(new(0, p.default)(t, s.clarifyTimeoutError ? p.default.ETIMEDOUT : p.default.ECONNABORTED, e, v)), v = null
                }, void 0 === f && g.setContentType(null), "setRequestHeader" in v && o.default.forEach(g.toJSON(), function(e, t) {
                    v.setRequestHeader(t, e)
                }), o.default.isUndefined(d.withCredentials) || (v.withCredentials = !!d.withCredentials), y && "json" !== y && (v.responseType = d.responseType), I && ([a, c] = (0, j.progressEventReducer)(I, !0), v.addEventListener("progress", a)), w && v.upload && ([n, i] = (0, j.progressEventReducer)(w), v.upload.addEventListener("progress", n), v.upload.addEventListener("loadend", i)), (d.cancelToken || d.signal) && (s = t => {
                    v && (r(!t || t.type ? new(0, h.default)(null, e, v) : t), v.abort(), v = null)
                }, d.cancelToken && d.cancelToken.subscribe(s), d.signal && (d.signal.aborted ? s() : d.signal.addEventListener("abort", s)));
                let O = (0, m.default)(d.url);
                if (O && -1 === E.default.protocols.indexOf(O)) return void r(new(0, p.default)("Unsupported protocol " + O + ":", p.default.ERR_BAD_REQUEST, e));
                v.send(f || null)
            })
        }
    }, {
        "./../utils.js": "2ioTY",
        "./../core/settle.js": "dlf0W",
        "../defaults/transitional.js": "lBqaD",
        "../core/AxiosError.js": "hjCVQ",
        "../cancel/CanceledError.js": "judoa",
        "../helpers/parseProtocol.js": "3ExDf",
        "../platform/index.js": "fP1Ni",
        "../core/AxiosHeaders.js": "1qkRX",
        "../helpers/progressEventReducer.js": "7uRZA",
        "../helpers/resolveConfig.js": "gdj2s",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    dlf0W: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "default", () => i);
        "use strict";
        var a = e("./AxiosError.js"),
            o = n.interopDefault(a);

        function i(e, t, r) {
            let s = r.config.validateStatus;
            !r.status || !s || s(r.status) ? e(r) : t(new(0, o.default)("Request failed with status code " + r.status, [o.default.ERR_BAD_REQUEST, o.default.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r))
        }
    }, {
        "./AxiosError.js": "hjCVQ",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "3ExDf": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        "use strict";

        function a(e) {
            let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
            return t && t[1] || ""
        }
        n.defineInteropFlag(r), n.export(r, "default", () => a)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "7uRZA": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "progressEventReducer", () => d), n.export(r, "progressEventDecorator", () => p), n.export(r, "asyncDecorator", () => f);
        var a = e("./speedometer.js"),
            o = n.interopDefault(a),
            i = e("./throttle.js"),
            l = n.interopDefault(i),
            c = e("../utils.js"),
            u = n.interopDefault(c);
        let d = (e, t, r = 3) => {
                let s = 0,
                    n = (0, o.default)(50, 250);
                return (0, l.default)(r => {
                    let a = r.loaded,
                        o = r.lengthComputable ? r.total : void 0,
                        i = a - s,
                        l = n(i);
                    s = a, e({
                        loaded: a,
                        total: o,
                        progress: o ? a / o : void 0,
                        bytes: i,
                        rate: l || void 0,
                        estimated: l && o && a <= o ? (o - a) / l : void 0,
                        event: r,
                        lengthComputable: null != o,
                        [t ? "download" : "upload"]: !0
                    })
                }, r)
            },
            p = (e, t) => {
                let r = null != e;
                return [s => t[0]({
                    lengthComputable: r,
                    total: e,
                    loaded: s
                }), t[1]]
            },
            f = e => (...t) => u.default.asap(() => e(...t))
    }, {
        "./speedometer.js": "cludo",
        "./throttle.js": "4cf1B",
        "../utils.js": "2ioTY",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    cludo: [function(e, t, r, s) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        "use strict";
        r.default = function(e, t) {
            let r, s = Array(e = e || 10),
                n = Array(e),
                a = 0,
                o = 0;
            return t = void 0 !== t ? t : 1e3,
                function(i) {
                    let l = Date.now(),
                        c = n[o];
                    r || (r = l), s[a] = i, n[a] = l;
                    let u = o,
                        d = 0;
                    for (; u !== a;) d += s[u++], u %= e;
                    if ((a = (a + 1) % e) === o && (o = (o + 1) % e), l - r < t) return;
                    let p = c && l - c;
                    return p ? Math.round(1e3 * d / p) : void 0
                }
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "4cf1B": [function(e, t, r, s) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = function(e, t) {
            let r, s, n = 0,
                a = 1e3 / t,
                o = (t, a = Date.now()) => {
                    n = a, r = null, s && (clearTimeout(s), s = null), e.apply(null, t)
                };
            return [(...e) => {
                let t = Date.now(),
                    i = t - n;
                i >= a ? o(e, t) : (r = e, s || (s = setTimeout(() => {
                    s = null, o(r)
                }, a - i)))
            }, () => r && o(r)]
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    gdj2s: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r);
        var a = e("../platform/index.js"),
            o = n.interopDefault(a),
            i = e("../utils.js"),
            l = n.interopDefault(i),
            c = e("./isURLSameOrigin.js"),
            u = n.interopDefault(c),
            d = e("./cookies.js"),
            p = n.interopDefault(d),
            f = e("../core/buildFullPath.js"),
            h = n.interopDefault(f),
            g = e("../core/mergeConfig.js"),
            m = n.interopDefault(g),
            y = e("../core/AxiosHeaders.js"),
            E = n.interopDefault(y),
            w = e("./buildURL.js"),
            R = n.interopDefault(w);
        r.default = e => {
            let t, r = (0, m.default)({}, e),
                {
                    data: s,
                    withXSRFToken: n,
                    xsrfHeaderName: a,
                    xsrfCookieName: i,
                    headers: c,
                    auth: d
                } = r;
            if (r.headers = c = E.default.from(c), r.url = (0, R.default)((0, h.default)(r.baseURL, r.url, r.allowAbsoluteUrls), e.params, e.paramsSerializer), d && c.set("Authorization", "Basic " + btoa((d.username || "") + ":" + (d.password ? unescape(encodeURIComponent(d.password)) : ""))), l.default.isFormData(s)) {
                if (o.default.hasStandardBrowserEnv || o.default.hasStandardBrowserWebWorkerEnv) c.setContentType(void 0);
                else if (!1 !== (t = c.getContentType())) {
                    let [e, ...r] = t ? t.split(";").map(e => e.trim()).filter(Boolean) : [];
                    c.setContentType([e || "multipart/form-data", ...r].join("; "))
                }
            }
            if (o.default.hasStandardBrowserEnv && (n && l.default.isFunction(n) && (n = n(r)), n || !1 !== n && (0, u.default)(r.url))) {
                let e = a && i && p.default.read(i);
                e && c.set(a, e)
            }
            return r
        }
    }, {
        "../platform/index.js": "fP1Ni",
        "../utils.js": "2ioTY",
        "./isURLSameOrigin.js": "33eDi",
        "./cookies.js": "lftHJ",
        "../core/buildFullPath.js": "48uot",
        "../core/mergeConfig.js": "j8Sbj",
        "../core/AxiosHeaders.js": "1qkRX",
        "./buildURL.js": "aGaJq",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "33eDi": [function(e, t, r, s) {
        let n, a;
        var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
        o.defineInteropFlag(r);
        var i = e("../platform/index.js"),
            l = o.interopDefault(i);
        r.default = l.default.hasStandardBrowserEnv ? (n = new URL(l.default.origin), a = l.default.navigator && /(msie|trident)/i.test(l.default.navigator.userAgent), e => (e = new URL(e, l.default.origin), n.protocol === e.protocol && n.host === e.host && (a || n.port === e.port))) : () => !0
    }, {
        "../platform/index.js": "fP1Ni",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    lftHJ: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r);
        var a = e("./../utils.js"),
            o = n.interopDefault(a),
            i = e("../platform/index.js");
        r.default = n.interopDefault(i).default.hasStandardBrowserEnv ? {
            write(e, t, r, s, n, a) {
                let i = [e + "=" + encodeURIComponent(t)];
                o.default.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()), o.default.isString(s) && i.push("path=" + s), o.default.isString(n) && i.push("domain=" + n), !0 === a && i.push("secure"), document.cookie = i.join("; ")
            },
            read(e) {
                let t = document.cookie.match(RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write() {},
            read: () => null,
            remove() {}
        }
    }, {
        "./../utils.js": "2ioTY",
        "../platform/index.js": "fP1Ni",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "48uot": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "default", () => c);
        "use strict";
        var a = e("../helpers/isAbsoluteURL.js"),
            o = n.interopDefault(a),
            i = e("../helpers/combineURLs.js"),
            l = n.interopDefault(i);

        function c(e, t, r) {
            let s = !(0, o.default)(t);
            return e && (s || !1 == r) ? (0, l.default)(e, t) : t
        }
    }, {
        "../helpers/isAbsoluteURL.js": "lW14e",
        "../helpers/combineURLs.js": "kZdZo",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    lW14e: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        "use strict";

        function a(e) {
            return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
        }
        n.defineInteropFlag(r), n.export(r, "default", () => a)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    kZdZo: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        "use strict";

        function a(e, t) {
            return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
        }
        n.defineInteropFlag(r), n.export(r, "default", () => a)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    j8Sbj: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "default", () => u);
        "use strict";
        var a = e("../utils.js"),
            o = n.interopDefault(a),
            i = e("./AxiosHeaders.js"),
            l = n.interopDefault(i);
        let c = e => e instanceof l.default ? {
            ...e
        } : e;

        function u(e, t) {
            t = t || {};
            let r = {};

            function s(e, t, r, s) {
                return o.default.isPlainObject(e) && o.default.isPlainObject(t) ? o.default.merge.call({
                    caseless: s
                }, e, t) : o.default.isPlainObject(t) ? o.default.merge({}, t) : o.default.isArray(t) ? t.slice() : t
            }

            function n(e, t, r, n) {
                return o.default.isUndefined(t) ? o.default.isUndefined(e) ? void 0 : s(void 0, e, r, n) : s(e, t, r, n)
            }

            function a(e, t) {
                if (!o.default.isUndefined(t)) return s(void 0, t)
            }

            function i(e, t) {
                return o.default.isUndefined(t) ? o.default.isUndefined(e) ? void 0 : s(void 0, e) : s(void 0, t)
            }

            function l(r, n, a) {
                return a in t ? s(r, n) : a in e ? s(void 0, r) : void 0
            }
            let u = {
                url: a,
                method: a,
                data: a,
                baseURL: i,
                transformRequest: i,
                transformResponse: i,
                paramsSerializer: i,
                timeout: i,
                timeoutMessage: i,
                withCredentials: i,
                withXSRFToken: i,
                adapter: i,
                responseType: i,
                xsrfCookieName: i,
                xsrfHeaderName: i,
                onUploadProgress: i,
                onDownloadProgress: i,
                decompress: i,
                maxContentLength: i,
                maxBodyLength: i,
                beforeRedirect: i,
                transport: i,
                httpAgent: i,
                httpsAgent: i,
                cancelToken: i,
                socketPath: i,
                responseEncoding: i,
                validateStatus: l,
                headers: (e, t, r) => n(c(e), c(t), r, !0)
            };
            return o.default.forEach(Object.keys(Object.assign({}, e, t)), function(s) {
                let a = u[s] || n,
                    i = a(e[s], t[s], s);
                o.default.isUndefined(i) && a !== l || (r[s] = i)
            }), r
        }
    }, {
        "../utils.js": "2ioTY",
        "./AxiosHeaders.js": "1qkRX",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "29Teh": [function(e, t, r, s) {
        let n;
        var a, o = e("@parcel/transformer-js/src/esmodule-helpers.js");
        o.defineInteropFlag(r);
        var i = e("../platform/index.js"),
            l = o.interopDefault(i),
            c = e("../utils.js"),
            u = o.interopDefault(c),
            d = e("../core/AxiosError.js"),
            p = o.interopDefault(d),
            f = e("../helpers/composeSignals.js"),
            h = o.interopDefault(f),
            g = e("../helpers/trackStream.js"),
            m = e("../core/AxiosHeaders.js"),
            y = o.interopDefault(m),
            E = e("../helpers/progressEventReducer.js"),
            w = e("../helpers/resolveConfig.js"),
            R = o.interopDefault(w),
            j = e("../core/settle.js"),
            I = o.interopDefault(j);
        let A = "function" == typeof fetch && "function" == typeof Request && "function" == typeof Response,
            T = A && "function" == typeof ReadableStream,
            v = A && ("function" == typeof TextEncoder ? (n = new TextEncoder, e => n.encode(e)) : async e => new Uint8Array(await new Response(e).arrayBuffer())),
            b = (e, ...t) => {
                try {
                    return !!e(...t)
                } catch (e) {
                    return !1
                }
            },
            O = T && b(() => {
                let e = !1,
                    t = new Request(l.default.origin, {
                        body: new ReadableStream,
                        method: "POST",
                        get duplex() {
                            return e = !0, "half"
                        }
                    }).headers.has("Content-Type");
                return e && !t
            }),
            S = T && b(() => u.default.isReadableStream(new Response("").body)),
            C = {
                stream: S && (e => e.body)
            };
        A && (a = new Response, ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(e => {
            C[e] || (C[e] = u.default.isFunction(a[e]) ? t => t[e]() : (t, r) => {
                throw new(0, p.default)(`Response type '${e}' is not supported`, p.default.ERR_NOT_SUPPORT, r)
            })
        }));
        let N = async e => {
            if (null == e) return 0;
            if (u.default.isBlob(e)) return e.size;
            if (u.default.isSpecCompliantForm(e)) {
                let t = new Request(l.default.origin, {
                    method: "POST",
                    body: e
                });
                return (await t.arrayBuffer()).byteLength
            }
            return u.default.isArrayBufferView(e) || u.default.isArrayBuffer(e) ? e.byteLength : (u.default.isURLSearchParams(e) && (e += ""), u.default.isString(e)) ? (await v(e)).byteLength : void 0
        }, x = async (e, t) => {
            let r = u.default.toFiniteNumber(e.getContentLength());
            return null == r ? N(t) : r
        };
        r.default = A && (async e => {
            let t, r, {
                url: s,
                method: n,
                data: a,
                signal: o,
                cancelToken: i,
                timeout: l,
                onDownloadProgress: c,
                onUploadProgress: d,
                responseType: f,
                headers: m,
                withCredentials: w = "same-origin",
                fetchOptions: j
            } = (0, R.default)(e);
            f = f ? (f + "").toLowerCase() : "text";
            let A = (0, h.default)([o, i && i.toAbortSignal()], l),
                T = A && A.unsubscribe && (() => {
                    A.unsubscribe()
                });
            try {
                if (d && O && "get" !== n && "head" !== n && 0 !== (r = await x(m, a))) {
                    let e, t = new Request(s, {
                        method: "POST",
                        body: a,
                        duplex: "half"
                    });
                    if (u.default.isFormData(a) && (e = t.headers.get("content-type")) && m.setContentType(e), t.body) {
                        let [e, s] = (0, E.progressEventDecorator)(r, (0, E.progressEventReducer)((0, E.asyncDecorator)(d)));
                        a = (0, g.trackStream)(t.body, 65536, e, s)
                    }
                }
                u.default.isString(w) || (w = w ? "include" : "omit");
                let o = "credentials" in Request.prototype;
                t = new Request(s, {
                    ...j,
                    signal: A,
                    method: n.toUpperCase(),
                    headers: m.normalize().toJSON(),
                    body: a,
                    duplex: "half",
                    credentials: o ? w : void 0
                });
                let i = await fetch(t, j),
                    l = S && ("stream" === f || "response" === f);
                if (S && (c || l && T)) {
                    let e = {};
                    ["status", "statusText", "headers"].forEach(t => {
                        e[t] = i[t]
                    });
                    let t = u.default.toFiniteNumber(i.headers.get("content-length")),
                        [r, s] = c && (0, E.progressEventDecorator)(t, (0, E.progressEventReducer)((0, E.asyncDecorator)(c), !0)) || [];
                    i = new Response((0, g.trackStream)(i.body, 65536, r, () => {
                        s && s(), T && T()
                    }), e)
                }
                f = f || "text";
                let p = await C[u.default.findKey(C, f) || "text"](i, e);
                return !l && T && T(), await new Promise((r, s) => {
                    (0, I.default)(r, s, {
                        data: p,
                        headers: y.default.from(i.headers),
                        status: i.status,
                        statusText: i.statusText,
                        config: e,
                        request: t
                    })
                })
            } catch (r) {
                if (T && T(), r && "TypeError" === r.name && /Load failed|fetch/i.test(r.message)) throw Object.assign(new(0, p.default)("Network Error", p.default.ERR_NETWORK, e, t), {
                    cause: r.cause || r
                });
                throw p.default.from(r, r && r.code, e, t)
            }
        })
    }, {
        "../platform/index.js": "fP1Ni",
        "../utils.js": "2ioTY",
        "../core/AxiosError.js": "hjCVQ",
        "../helpers/composeSignals.js": "iHSrx",
        "../helpers/trackStream.js": "g4EAB",
        "../core/AxiosHeaders.js": "1qkRX",
        "../helpers/progressEventReducer.js": "7uRZA",
        "../helpers/resolveConfig.js": "gdj2s",
        "../core/settle.js": "dlf0W",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    iHSrx: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r);
        var a = e("../cancel/CanceledError.js"),
            o = n.interopDefault(a),
            i = e("../core/AxiosError.js"),
            l = n.interopDefault(i),
            c = e("../utils.js"),
            u = n.interopDefault(c);
        r.default = (e, t) => {
            let {
                length: r
            } = e = e ? e.filter(Boolean) : [];
            if (t || r) {
                let r, s = new AbortController,
                    n = function(e) {
                        if (!r) {
                            r = !0, i();
                            let t = e instanceof Error ? e : this.reason;
                            s.abort(t instanceof l.default ? t : new(0, o.default)(t instanceof Error ? t.message : t))
                        }
                    },
                    a = t && setTimeout(() => {
                        a = null, n(new(0, l.default)(`timeout ${t} of ms exceeded`, l.default.ETIMEDOUT))
                    }, t),
                    i = () => {
                        e && (a && clearTimeout(a), a = null, e.forEach(e => {
                            e.unsubscribe ? e.unsubscribe(n) : e.removeEventListener("abort", n)
                        }), e = null)
                    };
                e.forEach(e => e.addEventListener("abort", n));
                let {
                    signal: c
                } = s;
                return c.unsubscribe = () => u.default.asap(i), c
            }
        }
    }, {
        "../cancel/CanceledError.js": "judoa",
        "../core/AxiosError.js": "hjCVQ",
        "../utils.js": "2ioTY",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    g4EAB: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "streamChunk", () => a), n.export(r, "readBytes", () => o), n.export(r, "trackStream", () => l);
        let a = function*(e, t) {
                let r, s = e.byteLength;
                if (!t || s < t) return void(yield e);
                let n = 0;
                for (; n < s;) r = n + t, yield e.slice(n, r), n = r
            },
            o = async function*(e, t) {
                for await (let r of i(e)) yield* a(r, t)
            }, i = async function*(e) {
                if (e[Symbol.asyncIterator]) return void(yield* e);
                let t = e.getReader();
                try {
                    for (;;) {
                        let {
                            done: e,
                            value: r
                        } = await t.read();
                        if (e) break;
                        yield r
                    }
                } finally {
                    await t.cancel()
                }
            }, l = (e, t, r, s) => {
                let n, a = o(e, t),
                    i = 0,
                    l = e => {
                        !n && (n = !0, s && s(e))
                    };
                return new ReadableStream({
                    async pull(e) {
                        try {
                            let {
                                done: t,
                                value: s
                            } = await a.next();
                            if (t) {
                                l(), e.close();
                                return
                            }
                            let n = s.byteLength;
                            if (r) {
                                let e = i += n;
                                r(e)
                            }
                            e.enqueue(new Uint8Array(s))
                        } catch (e) {
                            throw l(e), e
                        }
                    },
                    cancel: e => (l(e), a.return())
                }, {
                    highWaterMark: 2
                })
            }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "8PNBN": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        "use strict";
        n.defineInteropFlag(r);
        var a = e("../env/data.js"),
            o = e("../core/AxiosError.js"),
            i = n.interopDefault(o);
        let l = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
            l[e] = function(r) {
                return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
            }
        });
        let c = {};
        l.transitional = function(e, t, r) {
            function s(e, t) {
                return "[Axios v" + a.VERSION + "] Transitional option '" + e + "'" + t + (r ? ". " + r : "")
            }
            return (r, n, a) => {
                if (!1 === e) throw new(0, i.default)(s(n, " has been removed" + (t ? " in " + t : "")), i.default.ERR_DEPRECATED);
                return t && !c[n] && (c[n] = !0, console.warn(s(n, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(r, n, a)
            }
        }, l.spelling = function(e) {
            return (t, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0)
        }, r.default = {
            assertOptions: function(e, t, r) {
                if ("object" != typeof e) throw new(0, i.default)("options must be an object", i.default.ERR_BAD_OPTION_VALUE);
                let s = Object.keys(e),
                    n = s.length;
                for (; n-- > 0;) {
                    let a = s[n],
                        o = t[a];
                    if (o) {
                        let t = e[a],
                            r = void 0 === t || o(t, a, e);
                        if (!0 !== r) throw new(0, i.default)("option " + a + " must be " + r, i.default.ERR_BAD_OPTION_VALUE);
                        continue
                    }
                    if (!0 !== r) throw new(0, i.default)("Unknown option " + a, i.default.ERR_BAD_OPTION)
                }
            },
            validators: l
        }
    }, {
        "../env/data.js": "9ssnR",
        "../core/AxiosError.js": "hjCVQ",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "9ssnR": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "VERSION", () => a);
        let a = "1.10.0"
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "2aN3e": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r);
        "use strict";
        var a = e("./CanceledError.js"),
            o = n.interopDefault(a);
        class i {
            constructor(e) {
                let t;
                if ("function" != typeof e) throw TypeError("executor must be a function.");
                this.promise = new Promise(function(e) {
                    t = e
                });
                let r = this;
                this.promise.then(e => {
                    if (!r._listeners) return;
                    let t = r._listeners.length;
                    for (; t-- > 0;) r._listeners[t](e);
                    r._listeners = null
                }), this.promise.then = e => {
                    let t, s = new Promise(e => {
                        r.subscribe(e), t = e
                    }).then(e);
                    return s.cancel = function() {
                        r.unsubscribe(t)
                    }, s
                }, e(function(e, s, n) {
                    r.reason || (r.reason = new(0, o.default)(e, s, n), t(r.reason))
                })
            }
            throwIfRequested() {
                if (this.reason) throw this.reason
            }
            subscribe(e) {
                if (this.reason) return void e(this.reason);
                this._listeners ? this._listeners.push(e) : this._listeners = [e]
            }
            unsubscribe(e) {
                if (!this._listeners) return;
                let t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
            }
            toAbortSignal() {
                let e = new AbortController,
                    t = t => {
                        e.abort(t)
                    };
                return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal
            }
            static source() {
                let e;
                return {
                    token: new i(function(t) {
                        e = t
                    }),
                    cancel: e
                }
            }
        }
        r.default = i
    }, {
        "./CanceledError.js": "judoa",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    gQxw3: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        "use strict";

        function a(e) {
            return function(t) {
                return e.apply(null, t)
            }
        }
        n.defineInteropFlag(r), n.export(r, "default", () => a)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    lE0ea: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "default", () => i);
        "use strict";
        var a = e("./../utils.js"),
            o = n.interopDefault(a);

        function i(e) {
            return o.default.isObject(e) && !0 === e.isAxiosError
        }
    }, {
        "./../utils.js": "2ioTY",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    agO1h: [function(e, t, r, s) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        let n = {
            Continue: 100,
            SwitchingProtocols: 101,
            Processing: 102,
            EarlyHints: 103,
            Ok: 200,
            Created: 201,
            Accepted: 202,
            NonAuthoritativeInformation: 203,
            NoContent: 204,
            ResetContent: 205,
            PartialContent: 206,
            MultiStatus: 207,
            AlreadyReported: 208,
            ImUsed: 226,
            MultipleChoices: 300,
            MovedPermanently: 301,
            Found: 302,
            SeeOther: 303,
            NotModified: 304,
            UseProxy: 305,
            Unused: 306,
            TemporaryRedirect: 307,
            PermanentRedirect: 308,
            BadRequest: 400,
            Unauthorized: 401,
            PaymentRequired: 402,
            Forbidden: 403,
            NotFound: 404,
            MethodNotAllowed: 405,
            NotAcceptable: 406,
            ProxyAuthenticationRequired: 407,
            RequestTimeout: 408,
            Conflict: 409,
            Gone: 410,
            LengthRequired: 411,
            PreconditionFailed: 412,
            PayloadTooLarge: 413,
            UriTooLong: 414,
            UnsupportedMediaType: 415,
            RangeNotSatisfiable: 416,
            ExpectationFailed: 417,
            ImATeapot: 418,
            MisdirectedRequest: 421,
            UnprocessableEntity: 422,
            Locked: 423,
            FailedDependency: 424,
            TooEarly: 425,
            UpgradeRequired: 426,
            PreconditionRequired: 428,
            TooManyRequests: 429,
            RequestHeaderFieldsTooLarge: 431,
            UnavailableForLegalReasons: 451,
            InternalServerError: 500,
            NotImplemented: 501,
            BadGateway: 502,
            ServiceUnavailable: 503,
            GatewayTimeout: 504,
            HttpVersionNotSupported: 505,
            VariantAlsoNegotiates: 506,
            InsufficientStorage: 507,
            LoopDetected: 508,
            NotExtended: 510,
            NetworkAuthenticationRequired: 511
        };
        Object.entries(n).forEach(([e, t]) => {
            n[t] = e
        }), r.default = n
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    fUPIN: [function(e, t, r, s) {
        var n, a, o, i, l, c, u, d, p, f, h, g, m, y, E, w, R, j, I, A, T, v = e("@parcel/transformer-js/src/esmodule-helpers.js");
        v.defineInteropFlag(r), v.export(r, "AccountType", () => y), v.export(r, "AuthActionRequiredActions", () => A), v.export(r, "AuthType", () => E), v.export(r, "BasicAuthProvider", () => j), v.export(r, "CodeChallengeMethodEnum", () => T), v.export(r, "EmbeddedState", () => h), v.export(r, "OAuthProvider", () => I), v.export(r, "OpenfortEvents", () => g), v.export(r, "RecoveryMethod", () => m), v.export(r, "ThirdPartyOAuthProvider", () => R), v.export(r, "TokenType", () => w), (n = h || (h = {}))[n.NONE = 0] = "NONE", n[n.UNAUTHENTICATED = 1] = "UNAUTHENTICATED", n[n.EMBEDDED_SIGNER_NOT_CONFIGURED = 2] = "EMBEDDED_SIGNER_NOT_CONFIGURED", n[n.CREATING_ACCOUNT = 3] = "CREATING_ACCOUNT", n[n.READY = 4] = "READY", (a = g || (g = {})).LOGGED_OUT = "loggedOut", a.SIGNER_CONFIGURED = "signerConfigured", a.TOKEN_REFRESHED = "tokenRefreshed", (o = m || (m = {})).PASSWORD = "password", o.AUTOMATIC = "automatic", (i = y || (y = {})).UPGRADEABLE_V4 = "Upgradeable_v04", i.MANAGED_V4 = "Managed_v04", i.ERC6551_V4 = "ERC6551_v04", i.ERC6551_V5 = "ERC6551_v05", i.RECOVERABLE_V4 = "Recoverable_v04", i.MANAGED_V5 = "Managed_v05", i.UPGRADEABLE_V5 = "Upgradeable_v05", i.UPGRADEABLE_V6 = "Upgradeable_v06", i.ZKSYNC_UPGRADEABLE_V1 = "zksync_upgradeable_v1", i.ZKSYNC_UPGRADEABLE_V2 = "zksync_upgradeable_v2", (l = E || (E = {})).OPENFORT = "openfort", l.THIRD_PARTY = "thirdParty", (c = w || (w = {})).ID_TOKEN = "idToken", c.CUSTOM_TOKEN = "customToken", (u = R || (R = {})).ACCELBYTE = "accelbyte", u.FIREBASE = "firebase", u.LOOTLOCKER = "lootlocker", u.PLAYFAB = "playfab", u.SUPABASE = "supabase", u.CUSTOM = "custom", u.OIDC = "oidc", (d = j || (j = {})).EMAIL = "email", d.WALLET = "wallet", (p = I || (I = {})).GOOGLE = "google", p.TWITTER = "twitter", p.APPLE = "apple", p.FACEBOOK = "facebook", p.DISCORD = "discord", p.EPIC_GAMES = "epic_games", p.LINE = "line", (A || (A = {})).ACTION_VERIFY_EMAIL = "verify_email", (f = T || (T = {})).PLAIN = "plain", f.S256 = "S256"
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    iBeSb: [function(e, t, r, s) {
        var n, a, o, i = e("@parcel/transformer-js/src/esmodule-helpers.js");
        i.defineInteropFlag(r), i.export(r, "Event", () => a), i.export(r, "ExportPrivateKeyRequest", () => g), i.export(r, "GetCurrentDeviceRequest", () => p), i.export(r, "INCORRECT_USER_ENTROPY_ERROR", () => d), i.export(r, "MISSING_PROJECT_ENTROPY_ERROR", () => u), i.export(r, "MISSING_USER_ENTROPY_ERROR", () => c), i.export(r, "NOT_CONFIGURED_ERROR", () => l), i.export(r, "SetRecoveryMethodRequest", () => m), i.export(r, "ShieldAuthType", () => o), i.export(r, "SignRequest", () => f), i.export(r, "SwitchChainRequest", () => h), i.export(r, "UpdateAuthenticationRequest", () => E), i.export(r, "isErrorResponse", () => y), (n = a || (a = {})).LOADED = "loaded", n.CONFIGURE = "configure", n.CONFIGURED = "configured", n.UPDATE_AUTHENTICATION = "update-authentication", n.AUTHENTICATION_UPDATED = "authentication-updated", n.SIGN = "sign", n.SET_RECOVERY_METHOD = "set-recovery-method", n.SWITCH_CHAIN = "switch-chain", n.CHAIN_SWITCHED = "chain-switched", n.EXPORT = "export", n.SIGNED = "signed", n.LOGOUT = "logout", n.LOGGED_OUT = "logged-out", n.GET_CURRENT_DEVICE = "get-current-device", n.CURRENT_DEVICE = "current-device", n.PING = "ping", n.PONG = "pong";
        let l = "not-configured-error",
            c = "missing-user-entropy-error",
            u = "missing-project-entropy-error",
            d = "incorrect-user-entropy-error";
        class p {
            uuid;
            action = a.GET_CURRENT_DEVICE;
            playerID;
            constructor(e, t) {
                this.uuid = e, this.playerID = t
            }
        }
        class f {
            uuid;
            action = a.SIGN;
            message;
            requireArrayify;
            requireHash;
            requestConfiguration;
            constructor(e, t, r, s, n) {
                this.uuid = e, this.message = t, this.requireArrayify = r, this.requireHash = s, this.requestConfiguration = n
            }
        }
        class h {
            uuid;
            action = a.SWITCH_CHAIN;
            chainId;
            requestConfiguration;
            constructor(e, t, r) {
                this.uuid = e, this.chainId = t, this.requestConfiguration = r
            }
        }
        class g {
            uuid;
            action = a.EXPORT;
            requestConfiguration;
            constructor(e, t) {
                this.uuid = e, this.requestConfiguration = t
            }
        }
        class m {
            uuid;
            action = a.SET_RECOVERY_METHOD;
            recoveryMethod;
            recoveryPassword;
            encryptionSession;
            requestConfiguration;
            constructor(e, t, r, s, n) {
                this.uuid = e, this.recoveryMethod = t, this.recoveryPassword = r, this.encryptionSession = s, this.requestConfiguration = n
            }
        }

        function y(e) {
            return "error" in e
        }
        class E {
            uuid;
            action = a.UPDATE_AUTHENTICATION;
            accessToken;
            recovery;
            constructor(e, t, r) {
                this.uuid = e, this.accessToken = t, this.recovery = r
            }
        }(o || (o = {})).OPENFORT = "openfort"
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    kcx6I: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "IframeManager", () => R), n.export(r, "MissingProjectEntropyError", () => y), n.export(r, "MissingRecoveryPasswordError", () => m), n.export(r, "NotConfiguredError", () => w), n.export(r, "WrongRecoveryPasswordError", () => E);
        var a = e("../core/configuration/account.js"),
            o = e("./messaging/browserMessenger/connect.js"),
            i = n.interopDefault(o);
        e("./messaging/browserMessenger/backwardCompatibility.js");
        var l = e("../storage/istorage.js"),
            c = e("../core/errors/openfortError.js"),
            u = e("../utils/debug.js"),
            d = e("../utils/crypto.js"),
            p = e("../core/configuration/authentication.js"),
            f = e("./messaging/ReactNativeMessenger.js"),
            h = e("./types.js"),
            g = e("../core/errors/sentry.js");
        class m extends Error {
            constructor() {
                super("This embedded signer requires a password to be recovered")
            }
        }
        class y extends Error {
            constructor() {
                super("MissingProjectEntropyError")
            }
        }
        class E extends Error {
            constructor() {
                super("Wrong recovery password for this embedded signer")
            }
        }
        class w extends Error {
            constructor() {
                super("Not configured")
            }
        }
        class R {
            messenger;
            connection;
            remote;
            storage;
            sdkConfiguration;
            isInitialized = !1;
            configurationRequest;
            constructor(e, t, r) {
                if (!e) throw new(0, c.OpenfortError)("Configuration is required for IframeManager", c.OpenfortErrorType.INVALID_CONFIGURATION);
                if (!t) throw new(0, c.OpenfortError)("Storage is required for IframeManager", c.OpenfortErrorType.INVALID_CONFIGURATION);
                if (!r) throw new(0, c.OpenfortError)("Messenger is required for IframeManager", c.OpenfortErrorType.INVALID_CONFIGURATION);
                this.sdkConfiguration = e, this.storage = t, this.messenger = r
            }
            async initialize() {
                if (!this.isInitialized) {
                    (0, u.debugLog)("Initializing IframeManager connection..."), this.messenger.initialize({
                        validateReceivedMessage: e => !(!e || "object" != typeof e),
                        log: u.debugLog
                    }), this.connection = (0, i.default)({
                        messenger: this.messenger,
                        timeout: 1e4,
                        log: u.debugLog
                    });
                    try {
                        this.remote = await this.connection.promise, this.isInitialized = !0, (0, u.debugLog)("IframeManager connection established")
                    } catch (e) {
                        throw g.sentry.captureException(e), this.destroy(), (0, u.debugLog)("Failed to establish connection:", e), new(0, c.OpenfortError)(`Failed to establish iFrame connection: ${e.cause||e.message}`, c.OpenfortErrorType.INTERNAL_ERROR, e)
                    }
                }
            }
            async ensureConnection() {
                if (this.isInitialized && this.remote || await this.initialize(), !this.remote) throw new(0, c.OpenfortError)("Failed to establish connection", c.OpenfortErrorType.INTERNAL_ERROR);
                return this.remote
            }
            handleError(e) {
                if ((0, h.isErrorResponse)(e)) {
                    if (e.error === h.NOT_CONFIGURED_ERROR) throw new w;
                    if (e.error === h.MISSING_USER_ENTROPY_ERROR) throw this.storage.remove(l.StorageKeys.ACCOUNT), new m;
                    if (e.error === h.MISSING_PROJECT_ENTROPY_ERROR) throw this.storage.remove(l.StorageKeys.ACCOUNT), new y;
                    if (e.error === h.INCORRECT_USER_ENTROPY_ERROR) throw new E;
                    throw new(0, c.OpenfortError)(`Unknown error: ${e.error}`, c.OpenfortErrorType.INTERNAL_ERROR)
                }
                throw e
            }
            async buildRequestConfiguration() {
                let e = await p.Authentication.fromStorage(this.storage);
                if (!e) throw new(0, c.OpenfortError)("Must be authenticated to create a signer", c.OpenfortErrorType.NOT_LOGGED_IN_ERROR);
                return {
                    thirdPartyProvider: e.thirdPartyProvider,
                    thirdPartyTokenType: e.thirdPartyTokenType,
                    token: e.token,
                    publishableKey: this.sdkConfiguration.baseConfiguration.publishableKey,
                    openfortURL: this.sdkConfiguration.backendUrl
                }
            }
            async buildIFrameRequestConfiguration() {
                let e = await p.Authentication.fromStorage(this.storage);
                if (!e) throw new(0, c.OpenfortError)("Must be authenticated to create a signer", c.OpenfortErrorType.NOT_LOGGED_IN_ERROR);
                let t = {
                    auth: h.ShieldAuthType.OPENFORT,
                    authProvider: e.thirdPartyProvider,
                    token: e.token,
                    tokenType: e.thirdPartyTokenType
                };
                return {
                    thirdPartyTokenType: e.thirdPartyTokenType ?? null,
                    thirdPartyProvider: e.thirdPartyProvider ?? null,
                    accessToken: e.token,
                    playerID: e.player,
                    recovery: t,
                    chainId: null,
                    password: null
                }
            }
            async configure(e) {
                if (!this.sdkConfiguration.shieldConfiguration) throw new(0, c.OpenfortError)("shieldConfiguration is required", c.OpenfortErrorType.INVALID_CONFIGURATION);
                let t = await a.Account.fromStorage(this.storage),
                    r = await this.ensureConnection(),
                    s = await this.buildIFrameRequestConfiguration();
                s.chainId = e?.chainId ?? t?.chainId ?? null, s.password = e?.entropy?.recoveryPassword ?? null, s.recovery = {
                    ...s.recovery,
                    encryptionSession: e?.entropy?.encryptionSession
                };
                let n = {
                        uuid: (0, d.randomUUID)(),
                        action: h.Event.CONFIGURE,
                        chainId: s.chainId,
                        recovery: s.recovery,
                        publishableKey: this.sdkConfiguration.baseConfiguration.publishableKey,
                        shieldAPIKey: this.sdkConfiguration.shieldConfiguration?.shieldPublishableKey || "",
                        accessToken: s.accessToken,
                        playerID: s.playerID,
                        thirdPartyProvider: s.thirdPartyProvider,
                        thirdPartyTokenType: s.thirdPartyTokenType,
                        encryptionKey: s.password,
                        encryptionPart: this.sdkConfiguration?.shieldConfiguration?.shieldEncryptionKey ?? null,
                        encryptionSession: s.recovery?.encryptionSession ?? null,
                        openfortURL: this.sdkConfiguration.backendUrl,
                        shieldURL: this.sdkConfiguration.shieldUrl
                    },
                    o = await r.configure(n);
                return (0, h.isErrorResponse)(o) && this.handleError(o), "undefined" != typeof sessionStorage && sessionStorage.setItem("iframe-version", o.version ?? "undefined"), o
            }
            async sign(e, t, r) {
                (0, u.debugLog)("[iframe] ensureConnection");
                let s = await this.ensureConnection(),
                    n = new(0, h.SignRequest)((0, d.randomUUID)(), e, t, r, await this.buildRequestConfiguration());
                (0, u.debugLog)("[iframe] done ensureConnection");
                try {
                    let e = await s.sign(n);
                    return (0, u.debugLog)("[iframe] response", e), (0, h.isErrorResponse)(e) && this.handleError(e), "undefined" != typeof sessionStorage && sessionStorage.setItem("iframe-version", e.version ?? "undefined"), e.signature
                } catch (s) {
                    if (s instanceof w) return await this.configure(this.configurationRequest), this.sign(e, t, r);
                    throw s
                }
            }
            async switchChain(e) {
                let t = await this.ensureConnection(),
                    r = new(0, h.SwitchChainRequest)((0, d.randomUUID)(), e, await this.buildRequestConfiguration());
                try {
                    let s = await t.switchChain(r);
                    return (0, h.isErrorResponse)(s) && this.handleError(s), this.configurationRequest && (this.configurationRequest.chainId = e), s
                } catch (t) {
                    if (t instanceof w) return await this.configure(this.configurationRequest), this.switchChain(e);
                    throw t
                }
            }
            async export () {
                let e = await this.ensureConnection(),
                    t = new(0, h.ExportPrivateKeyRequest)((0, d.randomUUID)(), await this.buildRequestConfiguration());
                try {
                    let r = await e.export(t);
                    return (0, h.isErrorResponse)(r) && this.handleError(r), "undefined" != typeof sessionStorage && sessionStorage.setItem("iframe-version", r.version ?? "undefined"), r.key
                } catch (e) {
                    if (e instanceof w) return await this.configure(this.configurationRequest), this.export();
                    throw e
                }
            }
            async setEmbeddedRecovery(e, t, r) {
                let s = await this.ensureConnection(),
                    n = new(0, h.SetRecoveryMethodRequest)((0, d.randomUUID)(), e, t, r, await this.buildRequestConfiguration());
                try {
                    let e = await s.setRecoveryMethod(n);
                    (0, h.isErrorResponse)(e) && this.handleError(e), "undefined" != typeof sessionStorage && sessionStorage.setItem("iframe-version", e.version ?? "undefined")
                } catch (s) {
                    if (s instanceof w) return await this.configure(this.configurationRequest), this.setEmbeddedRecovery(e, t, r);
                    throw s
                }
            }
            async getCurrentDevice(e) {
                let t = await this.ensureConnection(),
                    r = new(0, h.GetCurrentDeviceRequest)((0, d.randomUUID)(), e);
                try {
                    let e = await t.getCurrentDevice(r);
                    return (0, h.isErrorResponse)(e) && this.handleError(e), "undefined" != typeof sessionStorage && sessionStorage.setItem("iframe-version", e.version ?? "undefined"), e
                } catch (e) {
                    if (e instanceof w) return null;
                    throw e
                }
            }
            async updateAuthentication() {
                if (!this.isLoaded() || !this.remote) return void(0, u.debugLog)("IframeManager not loaded, skipping authentication update");
                let e = await p.Authentication.fromStorage(this.storage);
                if (!e) return void(0, u.debugLog)("No authentication found, skipping update");
                let t = new(0, h.UpdateAuthenticationRequest)((0, d.randomUUID)(), e.token);
                try {
                    (0, u.debugLog)("Updating authentication in iframe with token:", e.token);
                    let r = await this.remote.updateAuthentication(t);
                    (0, h.isErrorResponse)(r) && this.handleError(r)
                } catch (e) {
                    if (e instanceof w) return await this.configure(this.configurationRequest), void await this.updateAuthentication();
                    throw e
                }
            }
            async disconnect() {
                let e = await this.ensureConnection(),
                    t = {
                        uuid: (0, d.randomUUID)()
                    };
                await e.logout(t), this.configurationRequest = void 0
            }
            async onMessage(e) {
                (0, u.debugLog)("[HANDSHAKE DEBUG] IframeManager.onMessage called with:", e), this.messenger instanceof f.ReactNativeMessenger ? (this.isInitialized || this.connection ? (0, u.debugLog)(`[HANDSHAKE DEBUG] Connection already initialized (isInitialized: ${this.isInitialized}, hasConnection: ${!!this.connection})`) : ((0, u.debugLog)("[HANDSHAKE DEBUG] First message received, initializing connection..."), this.initialize().catch(e => {
                    (0, u.debugLog)("[HANDSHAKE DEBUG] Failed to initialize connection:", e)
                })), (0, u.debugLog)("[HANDSHAKE DEBUG] Passing message to ReactNativeMessenger"), this.messenger.handleMessage(e)) : (0, u.debugLog)("[HANDSHAKE DEBUG] Not a ReactNativeMessenger, ignoring message")
            }
            isLoaded() {
                return this.isInitialized && void 0 !== this.remote
            }
            destroy() {
                this.connection && (this.connection.destroy(), this.connection = void 0), this.remote = void 0, this.isInitialized = !1, this.configurationRequest = void 0, this.messenger.destroy()
            }
        }
    }, {
        "../core/configuration/account.js": "f6fHD",
        "./messaging/browserMessenger/connect.js": "7f1ki",
        "./messaging/browserMessenger/backwardCompatibility.js": "hsQQI",
        "../storage/istorage.js": "8EpXG",
        "../core/errors/openfortError.js": "3xESR",
        "../utils/debug.js": "8822a",
        "../utils/crypto.js": "3dq9D",
        "../core/configuration/authentication.js": "1Nfd7",
        "./messaging/ReactNativeMessenger.js": "19aZg",
        "./types.js": "iBeSb",
        "../core/errors/sentry.js": "913SB",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    f6fHD: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "Account", () => o);
        var a = e("../../storage/istorage.js");
        class o {
            address;
            chainId;
            ownerAddress;
            type;
            constructor(e, t, r, s) {
                this.address = e, this.chainId = t, this.ownerAddress = r, this.type = s
            }
            save(e) {
                e.save(a.StorageKeys.ACCOUNT, JSON.stringify({
                    address: this.address,
                    chainId: this.chainId,
                    ownerAddress: this.ownerAddress,
                    type: this.type
                }))
            }
            static async fromStorage(e) {
                let t = await e.get(a.StorageKeys.ACCOUNT);
                if (!t) return null;
                try {
                    let e = JSON.parse(t);
                    return new o(e.address, Number(e.chainId), e.ownerAddress, e.type)
                } catch {
                    return null
                }
            }
        }
    }, {
        "../../storage/istorage.js": "8EpXG",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "8EpXG": [function(e, t, r, s) {
        var n, a, o = e("@parcel/transformer-js/src/esmodule-helpers.js");
        o.defineInteropFlag(r), o.export(r, "StorageKeys", () => a), (n = a || (a = {})).AUTHENTICATION = "openfort.authentication", n.CONFIGURATION = "openfort.configuration", n.ACCOUNT = "openfort.account", n.TEST = "openfort.test", n.SESSION = "openfort.session", n.PKCE_STATE = "openfort.pkce_state", n.PKCE_VERIFIER = "openfort.pkce_verifier"
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "7f1ki": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "default", () => g);
        var a = e("./PenpalError.js"),
            o = n.interopDefault(a),
            i = e("./shakeHands.js"),
            l = n.interopDefault(i),
            c = e("./guards.js"),
            u = e("./once.js"),
            d = n.interopDefault(u),
            p = e("./namespace.js"),
            f = n.interopDefault(p);
        let h = new WeakSet,
            g = ({
                messenger: e,
                methods: t = {},
                timeout: r,
                channel: s,
                log: n
            }) => {
                if (!e) throw new(0, o.default)("INVALID_ARGUMENT", "messenger must be defined");
                if (h.has(e)) throw new(0, o.default)("INVALID_ARGUMENT", "A messenger can only be used for a single connection");
                h.add(e);
                let a = [e.destroy],
                    i = (0, d.default)(t => {
                        if (t) {
                            let t = {
                                namespace: f.default,
                                channel: s,
                                type: "DESTROY"
                            };
                            try {
                                e.sendMessage(t)
                            } catch (e) {}
                        }
                        for (let e of a) e();
                        n?.("Connection destroyed")
                    }),
                    u = e => (0, c.isMessage)(e) && e.channel === s;
                return {
                    promise: (async () => {
                        try {
                            e.initialize({
                                log: n,
                                validateReceivedMessage: u
                            }), e.addMessageHandler(e => {
                                (0, c.isDestroyMessage)(e) && i(!1)
                            });
                            let {
                                remoteProxy: o,
                                destroy: d
                            } = await (0, l.default)({
                                messenger: e,
                                methods: t,
                                timeout: r,
                                channel: s,
                                log: n
                            });
                            return a.push(d), o
                        } catch (e) {
                            throw i(!0), e
                        }
                    })(),
                    destroy: () => {
                        i(!0)
                    }
                }
            }
    }, {
        "./PenpalError.js": "dwP65",
        "./shakeHands.js": "zrweY",
        "./guards.js": "6PYiY",
        "./once.js": "a7jQh",
        "./namespace.js": "sVrrw",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    dwP65: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "default", () => a);
        class a extends Error {
            code;
            constructor(e, t) {
                super(t), this.name = "PenpalError", this.code = e
            }
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    zrweY: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "default", () => w);
        var a = e("../../../utils/crypto.js"),
            o = e("./PenpalError.js"),
            i = n.interopDefault(o),
            l = e("./connectCallHandler.js"),
            c = n.interopDefault(l),
            u = e("./connectRemoteProxy.js"),
            d = n.interopDefault(u),
            p = e("./guards.js"),
            f = e("./getPromiseWithResolvers.js"),
            h = n.interopDefault(f),
            g = e("./methodSerialization.js"),
            m = e("./backwardCompatibility.js"),
            y = e("./namespace.js"),
            E = n.interopDefault(y);
        let w = ({
            messenger: e,
            methods: t,
            timeout: r,
            channel: s,
            log: n
        }) => {
            let o, l = (0, a.randomUUID)(),
                u = [],
                f = !1,
                y = (0, g.extractMethodPathsFromMethods)(t),
                {
                    promise: w,
                    resolve: R,
                    reject: j
                } = (0, h.default)(),
                I = void 0 !== r ? setTimeout(() => {
                    j(new(0, i.default)("CONNECTION_TIMEOUT", `Connection timed out after ${r}ms`))
                }, r) : void 0,
                A = () => {
                    for (let e of u) e()
                },
                T = () => {
                    if (f) return;
                    u.push((0, c.default)(e, t, s, n));
                    let {
                        remoteProxy: r,
                        destroy: a
                    } = (0, d.default)(e, s, n);
                    u.push(a), clearTimeout(I), f = !0, R({
                        remoteProxy: r,
                        destroy: A
                    })
                },
                v = () => {
                    let t = {
                        namespace: E.default,
                        type: "SYN",
                        channel: s,
                        participantId: l
                    };
                    n?.("Sending handshake SYN", t);
                    try {
                        e.sendMessage(t)
                    } catch (e) {
                        j(new(0, i.default)("TRANSMISSION_FAILED", e.message))
                    }
                },
                b = t => {
                    (0, p.isSynMessage)(t) && (t => {
                        if (n?.("Received handshake SYN", t), t.participantId === o && o !== m.DEPRECATED_PENPAL_PARTICIPANT_ID || (o = t.participantId, v(), !(l > o || o === m.DEPRECATED_PENPAL_PARTICIPANT_ID))) return;
                        let r = {
                            namespace: E.default,
                            channel: s,
                            type: "ACK1",
                            methodPaths: y
                        };
                        n?.("Sending handshake ACK1", r);
                        try {
                            e.sendMessage(r)
                        } catch (e) {
                            j(new(0, i.default)("TRANSMISSION_FAILED", e.message))
                        }
                    })(t), (0, p.isAck1Message)(t) && (t => {
                        n?.("Received handshake ACK1", t);
                        let r = {
                            namespace: E.default,
                            channel: s,
                            type: "ACK2"
                        };
                        n?.("Sending handshake ACK2", r);
                        try {
                            e.sendMessage(r)
                        } catch (e) {
                            return void j(new(0, i.default)("TRANSMISSION_FAILED", e.message))
                        }
                        T()
                    })(t), (0, p.isAck2Message)(t) && (n?.("Received handshake ACK2", t), T())
                };
            return e.addMessageHandler(b), u.push(() => e.removeMessageHandler(b)), v(), w
        }
    }, {
        "../../../utils/crypto.js": "3dq9D",
        "./PenpalError.js": "dwP65",
        "./connectCallHandler.js": "d5yCk",
        "./connectRemoteProxy.js": "9AXaC",
        "./guards.js": "6PYiY",
        "./getPromiseWithResolvers.js": "1ZTRs",
        "./methodSerialization.js": "lKmYZ",
        "./backwardCompatibility.js": "hsQQI",
        "./namespace.js": "sVrrw",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "3dq9D": [function(e, t, r, s) {
        let n;
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");

        function o() {
            if ("undefined" != typeof crypto && crypto.randomUUID) return crypto.randomUUID();
            let e = new Uint8Array(16);
            return crypto.getRandomValues(e), e[6] = 15 & e[6] | 64, e[8] = 63 & e[8] | 128, [...e].map((e, t) => {
                let r = e.toString(16).padStart(2, "0");
                return [4, 6, 8, 10].includes(t) ? `-${r}` : r
            }).join("")
        }

        function i(e) {
            return `0x${e.toString(16)}`
        }

        function l(e) {
            let t = "",
                r = e.startsWith("0x") ? e.slice(2) : e;
            for (let e = 0; e < r.length; e += 2) {
                let s = parseInt(r.substring(e, e + 2), 16);
                0 !== s && (t += String.fromCharCode(s))
            }
            return t
        }

        function c(e) {
            n = e
        }
        async function u(e, t) {
            if (n) return n(e, t);
            if ("undefined" != typeof crypto && crypto.subtle && crypto.subtle.digest) return crypto.subtle.digest(e, t);
            throw Error("No crypto digest function available. Please provide a crypto override for this environment.")
        }
        a.defineInteropFlag(r), a.export(r, "cryptoDigest", () => u), a.export(r, "hexToString", () => l), a.export(r, "numberToHex", () => i), a.export(r, "randomUUID", () => o), a.export(r, "setCryptoDigestOverride", () => c)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    d5yCk: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "default", () => g);
        var a = e("./errorSerialization.js"),
            o = e("./Reply.js"),
            i = n.interopDefault(o),
            l = e("./PenpalError.js"),
            c = n.interopDefault(l),
            u = e("./methodSerialization.js"),
            d = e("./guards.js"),
            p = e("./namespace.js"),
            f = n.interopDefault(p);
        let h = (e, t, r) => ({
                namespace: f.default,
                channel: e,
                type: "REPLY",
                callId: t,
                isError: !0,
                ...r instanceof Error ? {
                    value: (0, a.serializeError)(r),
                    isSerializedErrorInstance: !0
                } : {
                    value: r
                }
            }),
            g = (e, t, r, s) => {
                let n = !1,
                    a = async a => {
                        let o, l;
                        if (n || !(0, d.isCallMessage)(a)) return;
                        s?.(`Received ${(0,u.formatMethodPath)(a.methodPath)}() call`, a);
                        let {
                            methodPath: p,
                            args: g,
                            id: m
                        } = a;
                        try {
                            let e = (0, u.getMethodAtMethodPath)(p, t);
                            if (!e) throw new(0, c.default)("METHOD_NOT_FOUND", `Method \`${(0,u.formatMethodPath)(p)}\` is not found.`);
                            let s = await e(...g);
                            s instanceof i.default && (l = s.transferables, s = await s.value), o = {
                                namespace: f.default,
                                channel: r,
                                type: "REPLY",
                                callId: m,
                                value: s
                            }
                        } catch (e) {
                            o = h(r, m, e)
                        }
                        if (!n) try {
                            s?.(`Sending ${(0,u.formatMethodPath)(p)}() reply`, o), e.sendMessage(o, l)
                        } catch (t) {
                            throw "DataCloneError" === t.name && (o = h(r, m, t), s?.(`Sending ${(0,u.formatMethodPath)(p)}() reply`, o), e.sendMessage(o)), t
                        }
                    };
                return e.addMessageHandler(a), () => {
                    n = !0, e.removeMessageHandler(a)
                }
            }
    }, {
        "./errorSerialization.js": "3mtoI",
        "./Reply.js": "8oNoy",
        "./PenpalError.js": "dwP65",
        "./methodSerialization.js": "lKmYZ",
        "./guards.js": "6PYiY",
        "./namespace.js": "sVrrw",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "3mtoI": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "deserializeError", () => l), n.export(r, "serializeError", () => i);
        var a = e("./PenpalError.js"),
            o = n.interopDefault(a);
        let i = e => ({
                name: e.name,
                message: e.message,
                stack: e.stack,
                penpalCode: e instanceof o.default ? e.code : void 0
            }),
            l = ({
                name: e,
                message: t,
                stack: r,
                penpalCode: s
            }) => {
                let n = s ? new(0, o.default)(s, t) : Error(t);
                return n.name = e, n.stack = r, n
            }
    }, {
        "./PenpalError.js": "dwP65",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "8oNoy": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "default", () => o);
        let a = Symbol("Reply");
        class o {
            value;
            transferables;
            #e = a;
            constructor(e, t) {
                this.value = e, this.transferables = t?.transferables
            }
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    lKmYZ: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "extractMethodPathsFromMethods", () => o), n.export(r, "formatMethodPath", () => l), n.export(r, "getMethodAtMethodPath", () => i);
        var a = e("./guards.js");
        let o = (e, t = []) => {
                let r = [];
                for (let s of Object.keys(e)) {
                    let n = e[s];
                    (0, a.isFunction)(n) ? r.push([...t, s]): (0, a.isObject)(n) && r.push(...o(n, [...t, s]))
                }
                return r
            },
            i = (e, t) => {
                let r = e.reduce((e, t) => (0, a.isObject)(e) ? e[t] : void 0, t);
                return (0, a.isFunction)(r) ? r : void 0
            },
            l = e => e.join(".")
    }, {
        "./guards.js": "6PYiY",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "6PYiY": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "isAck1Message", () => d), n.export(r, "isAck2Message", () => p), n.export(r, "isCallMessage", () => f), n.export(r, "isDestroyMessage", () => g), n.export(r, "isFunction", () => l), n.export(r, "isMessage", () => c), n.export(r, "isObject", () => i), n.export(r, "isReplyMessage", () => h), n.export(r, "isSynMessage", () => u);
        var a = e("./namespace.js"),
            o = n.interopDefault(a);
        let i = e => "object" == typeof e && null !== e,
            l = e => "function" == typeof e,
            c = e => i(e) && e.namespace === o.default,
            u = e => "SYN" === e.type,
            d = e => "ACK1" === e.type,
            p = e => "ACK2" === e.type,
            f = e => "CALL" === e.type,
            h = e => "REPLY" === e.type,
            g = e => "DESTROY" === e.type
    }, {
        "./namespace.js": "sVrrw",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    sVrrw: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "default", () => a);
        var a = "penpal"
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "9AXaC": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "default", () => E);
        var a = e("../../../utils/crypto.js"),
            o = e("./errorSerialization.js"),
            i = e("./methodSerialization.js"),
            l = e("./CallOptions.js"),
            c = n.interopDefault(l),
            u = e("./PenpalError.js"),
            d = n.interopDefault(u),
            p = e("./guards.js"),
            f = e("./namespace.js"),
            h = n.interopDefault(f);
        let g = new Set(["apply", "call", "bind"]),
            m = (e, t, r = []) => new Proxy(r.length ? () => {} : Object.create(null), {
                get(s, n) {
                    if ("then" !== n) return r.length && g.has(n) ? Reflect.get(s, n) : m(e, t, [...r, n])
                },
                apply: (t, s, n) => e(r, n)
            }),
            y = e => new(0, d.default)("CONNECTION_DESTROYED", `Method call ${(0,i.formatMethodPath)(e)}() failed due to destroyed connection`),
            E = (e, t, r) => {
                let s = !1,
                    n = new Map,
                    l = e => {
                        if (!(0, p.isReplyMessage)(e)) return;
                        let {
                            callId: t,
                            value: s,
                            isError: a,
                            isSerializedErrorInstance: l
                        } = e, c = n.get(t);
                        c && (n.delete(t), r?.(`Received ${(0,i.formatMethodPath)(c.methodPath)}() call`, e), a ? c.reject(l ? (0, o.deserializeError)(s) : s) : c.resolve(s))
                    };
                return e.addMessageHandler(l), {
                    remoteProxy: m((o, l) => {
                        if (s) throw y(o);
                        let u = (0, a.randomUUID)(),
                            p = l[l.length - 1],
                            f = p instanceof c.default,
                            {
                                timeout: g,
                                transferables: m
                            } = f ? p : {},
                            E = f ? l.slice(0, -1) : l;
                        return new Promise((s, a) => {
                            let l = void 0 !== g ? window.setTimeout(() => {
                                n.delete(u), a(new(0, d.default)("METHOD_CALL_TIMEOUT", `Method call ${(0,i.formatMethodPath)(o)}() timed out after ${g}ms`))
                            }, g) : void 0;
                            n.set(u, {
                                methodPath: o,
                                resolve: s,
                                reject: a,
                                timeoutId: l
                            });
                            try {
                                let s = {
                                    namespace: h.default,
                                    channel: t,
                                    type: "CALL",
                                    id: u,
                                    methodPath: o,
                                    args: E
                                };
                                r?.(`Sending ${(0,i.formatMethodPath)(o)}() call`, s), e.sendMessage(s, m)
                            } catch (e) {
                                a(new(0, d.default)("TRANSMISSION_FAILED", e.message))
                            }
                        })
                    }, r),
                    destroy: () => {
                        for (let {
                                methodPath: t,
                                reject: r,
                                timeoutId: a
                            }
                            of(s = !0, e.removeMessageHandler(l), n.values())) clearTimeout(a), r(y(t));
                        n.clear()
                    }
                }
            }
    }, {
        "../../../utils/crypto.js": "3dq9D",
        "./errorSerialization.js": "3mtoI",
        "./methodSerialization.js": "lKmYZ",
        "./CallOptions.js": "c0l2X",
        "./PenpalError.js": "dwP65",
        "./guards.js": "6PYiY",
        "./namespace.js": "sVrrw",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    c0l2X: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "default", () => o);
        let a = Symbol("CallOptions");
        class o {
            transferables;
            timeout;
            #t = a;
            constructor(e) {
                this.transferables = e?.transferables, this.timeout = e?.timeout
            }
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "1ZTRs": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "default", () => a);
        let a = () => {
            let e, t;
            return {
                promise: new Promise((r, s) => {
                    e = r, t = s
                }),
                resolve: e,
                reject: t
            }
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    hsQQI: [function(e, t, r, s) {
        var n, a, o, i, l = e("@parcel/transformer-js/src/esmodule-helpers.js");
        l.defineInteropFlag(r), l.export(r, "DEPRECATED_PENPAL_PARTICIPANT_ID", () => h), l.export(r, "downgradeMessage", () => R), l.export(r, "isDeprecatedMessage", () => g), l.export(r, "upgradeMessage", () => w);
        var c = e("./namespace.js"),
            u = l.interopDefault(c),
            d = e("./guards.js"),
            p = e("./PenpalBugError.js"),
            f = l.interopDefault(p);
        let h = "deprecated-penpal";
        (n = o || (o = {})).Call = "call", n.Reply = "reply", n.Syn = "syn", n.SynAck = "synAck", n.Ack = "ack", (a = i || (i = {})).Fulfilled = "fulfilled", a.Rejected = "rejected";
        let g = e => (0, d.isObject)(e) && "penpal" in e,
            m = e => e.split("."),
            y = e => e.join("."),
            E = e => new(0, f.default)(`Unexpected message to translate: ${JSON.stringify(e)}`),
            w = e => {
                if (e.penpal === o.Syn) return {
                    namespace: u.default,
                    channel: void 0,
                    type: "SYN",
                    participantId: h
                };
                if (e.penpal === o.SynAck) return {
                    namespace: u.default,
                    channel: void 0,
                    type: "ACK1",
                    methodPaths: e.methodNames.map(m)
                };
                if (e.penpal === o.Ack) return {
                    namespace: u.default,
                    channel: void 0,
                    type: "ACK2"
                };
                if (e.penpal === o.Call) return {
                    namespace: u.default,
                    channel: void 0,
                    type: "CALL",
                    id: e.id,
                    methodPath: m(e.methodName),
                    args: e.args
                };
                if (e.penpal === o.Reply) return e.resolution === i.Fulfilled ? {
                    namespace: u.default,
                    channel: void 0,
                    type: "REPLY",
                    callId: e.id,
                    value: e.returnValue
                } : {
                    namespace: u.default,
                    channel: void 0,
                    type: "REPLY",
                    callId: e.id,
                    isError: !0,
                    ...e.returnValueIsError ? {
                        value: e.returnValue,
                        isSerializedErrorInstance: !0
                    } : {
                        value: e.returnValue
                    }
                };
                throw E(e)
            },
            R = e => {
                if ((0, d.isAck1Message)(e)) return {
                    penpal: o.SynAck,
                    methodNames: e.methodPaths.map(y)
                };
                if ((0, d.isCallMessage)(e)) return {
                    penpal: o.Call,
                    id: e.id,
                    methodName: y(e.methodPath),
                    args: e.args
                };
                if ((0, d.isReplyMessage)(e)) return e.isError ? {
                    penpal: o.Reply,
                    id: e.callId,
                    resolution: i.Rejected,
                    ...e.isSerializedErrorInstance ? {
                        returnValue: e.value,
                        returnValueIsError: !0
                    } : {
                        returnValue: e.value
                    }
                } : {
                    penpal: o.Reply,
                    id: e.callId,
                    resolution: i.Fulfilled,
                    returnValue: e.value
                };
                throw E(e)
            }
    }, {
        "./namespace.js": "sVrrw",
        "./guards.js": "6PYiY",
        "./PenpalBugError.js": "4tDPR",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "4tDPR": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "default", () => a);
        class a extends Error {
            constructor(e) {
                super(`You've hit a bug in Penpal. Please file an issue with the following information: ${e}`)
            }
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    a7jQh: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "default", () => a);
        let a = e => {
            let t, r = !1;
            return (...s) => (r || (r = !0, t = e(...s)), t)
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "8822a": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "debugLog", () => o);
        var a = e("../core/config/config.js");

        function o(...e) {
            let t = a.SDKConfiguration.fromStorage();
            t?.shieldConfiguration?.debug && console.log(`${(new Date).toISOString()} [SDK]`, ...e)
        }
    }, {
        "../core/config/config.js": "8pPBU",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "8pPBU": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "OpenfortConfiguration", () => l), n.export(r, "SDKConfiguration", () => u), n.export(r, "ShieldConfiguration", () => c);
        var a = e("../../storage/istorage.js"),
            o = e("../../utils/crypto.js");
        let i = null;
        class l {
            publishableKey;
            constructor(e) {
                this.publishableKey = e.publishableKey
            }
        }
        class c {
            shieldPublishableKey;
            shieldEncryptionKey;
            debug = !1;
            constructor(e) {
                this.shieldPublishableKey = e.shieldPublishableKey, this.shieldEncryptionKey = e.shieldEncryptionKey, this.debug = e.shieldDebug || !1
            }
        }
        class u {
            baseConfiguration;
            shieldConfiguration;
            shieldUrl;
            iframeUrl;
            backendUrl;
            storage;
            constructor({
                baseConfiguration: e,
                shieldConfiguration: t,
                overrides: r
            }) {
                this.shieldConfiguration = t, this.baseConfiguration = e, this.backendUrl = r?.backendUrl || "https://api.openfort.io", this.iframeUrl = r?.iframeUrl || "https://embed.openfort.io", this.iframeUrl = `${this.iframeUrl}/iframe/${this.baseConfiguration.publishableKey}`, t?.debug && (this.iframeUrl = `${this.iframeUrl}?debug=true`), this.shieldUrl = r?.shieldUrl || "https://shield.openfort.io", this.storage = r?.storage, r?.crypto?.digest && (0, o.setCryptoDigestOverride)(r.crypto.digest), this.save()
            }
            static async isStorageAccessible(e) {
                try {
                    let t = a.StorageKeys.TEST,
                        r = "openfort_storage_test";
                    e.save(t, r);
                    let s = await e.get(t);
                    return e.remove(t), s === r
                } catch (e) {
                    return !1
                }
            }
            static fromStorage(e) {
                return e ? this.loadFromStorage(e) : i
            }
            static async loadFromStorage(e) {
                let t = await e.get(a.StorageKeys.CONFIGURATION);
                if (!t) return null;
                try {
                    let r, s = JSON.parse(t),
                        n = new l({
                            publishableKey: s.publishableKey
                        });
                    s.shieldPublishableKey && (r = new c({
                        shieldPublishableKey: s.shieldPublishableKey,
                        shieldEncryptionKey: s.shieldEncryptionKey,
                        shieldDebug: s.shieldDebug
                    }));
                    let a = {
                        backendUrl: s.backendUrl,
                        iframeUrl: s.iframeUrl,
                        shieldUrl: s.shieldUrl,
                        storage: e
                    };
                    return new u({
                        baseConfiguration: n,
                        shieldConfiguration: r,
                        overrides: a
                    })
                } catch {
                    return null
                }
            }
            save() {
                i = this, this.storage && this.storage.save(a.StorageKeys.CONFIGURATION, JSON.stringify({
                    publishableKey: this.baseConfiguration.publishableKey,
                    backendUrl: this.backendUrl,
                    iframeUrl: this.iframeUrl,
                    shieldUrl: this.shieldUrl,
                    shieldPublishableKey: this.shieldConfiguration?.shieldPublishableKey,
                    shieldEncryptionKey: this.shieldConfiguration?.shieldEncryptionKey,
                    shieldDebug: this.shieldConfiguration?.debug
                }))
            }
        }
    }, {
        "../../storage/istorage.js": "8EpXG",
        "../../utils/crypto.js": "3dq9D",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "1Nfd7": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "Authentication", () => o);
        var a = e("../../storage/istorage.js");
        class o {
            type;
            token;
            player;
            refreshToken;
            thirdPartyProvider;
            thirdPartyTokenType;
            constructor(e, t, r, s, n, a) {
                this.type = e, this.token = t, this.player = r, this.refreshToken = s, this.thirdPartyProvider = n, this.thirdPartyTokenType = a
            }
            get provider() {
                return this.thirdPartyProvider
            }
            get tokenType() {
                return this.thirdPartyTokenType
            }
            save(e) {
                e.save(a.StorageKeys.AUTHENTICATION, JSON.stringify({
                    type: this.type,
                    token: this.token,
                    player: this.player,
                    refreshToken: this.refreshToken,
                    thirdPartyProvider: this.thirdPartyProvider,
                    thirdPartyTokenType: this.thirdPartyTokenType
                }))
            }
            static async fromStorage(e) {
                let t = await e.get(a.StorageKeys.AUTHENTICATION);
                if (!t) return null;
                try {
                    let e = JSON.parse(t);
                    return new o(e.type, e.token, e.player, e.refreshToken, e.thirdPartyProvider, e.thirdPartyTokenType)
                } catch {
                    return null
                }
            }
        }
    }, {
        "../../storage/istorage.js": "8EpXG",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "19aZg": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "ReactNativeMessenger", () => l);
        var a = e("../../utils/debug.js"),
            o = e("./browserMessenger/PenpalError.js"),
            i = n.interopDefault(o);
        e("./browserMessenger/backwardCompatibility.js");
        class l {
            messagePoster;
            handlers = new Set;
            isInitialized = !1;
            hasBeenUsed = !1;
            validateMessage;
            messageBuffer = [];
            nextNumericId = 1;
            stringToNumericId = new Map;
            numericToStringId = new Map;
            constructor(e) {
                if (this.messagePoster = e, !e || "function" != typeof e.postMessage) throw new(0, i.default)("CONNECTION_DESTROYED", "Invalid message poster provided");
                (0, a.debugLog)("ReactNativeMessenger created")
            }
            initialize(e) {
                if (this.isInitialized) return void(0, a.debugLog)("ReactNativeMessenger already initialized");
                if (this.hasBeenUsed) throw new(0, i.default)("CONNECTION_DESTROYED", "A messenger can only be used for a single connection");
                this.validateMessage = e?.validateReceivedMessage, this.isInitialized = !0, this.hasBeenUsed = !0, (0, a.debugLog)(`ReactNativeMessenger initialized, processing ${this.messageBuffer.length} buffered messages`);
                let t = [...this.messageBuffer];
                this.messageBuffer = [], t.forEach(e => {
                    this.processMessage(e)
                })
            }
            sendMessage(e, t) {
                if (!this.isInitialized) throw new(0, i.default)("CONNECTION_DESTROYED", "ReactNativeMessenger not initialized");
                t && t.length > 0 && (0, a.debugLog)("React Native: Ignoring transferables (not supported)"), (0, a.debugLog)("ReactNativeMessenger sending message:", e);
                try {
                    let t = e;
                    "penpal" === e?.namespace && (t = this.convertToDeprecatedFormat(e), (0, a.debugLog)("React Native: Converted message:", t));
                    let r = JSON.stringify(t);
                    this.messagePoster.postMessage(r)
                } catch (e) {
                    throw new(0, i.default)("TRANSMISSION_FAILED", `Failed to send message through React Native WebView: ${e instanceof Error?e.message:String(e)}`)
                }
            }
            addMessageHandler(e) {
                this.handlers.add(e), (0, a.debugLog)(`Message handler added, total handlers: ${this.handlers.size}`)
            }
            removeMessageHandler(e) {
                this.handlers.delete(e), (0, a.debugLog)(`Message handler removed, total handlers: ${this.handlers.size}`)
            }
            handleMessage(e) {
                if ((0, a.debugLog)("[HANDSHAKE DEBUG] ReactNativeMessenger.handleMessage called with:", e), !this.isInitialized) {
                    let t = this.messageBuffer.length + 1;
                    return (0, a.debugLog)(`[HANDSHAKE DEBUG] ReactNativeMessenger: Message received but not initialized, buffering message (${t} total)`), void this.messageBuffer.push(e)
                }(0, a.debugLog)("[HANDSHAKE DEBUG] ReactNativeMessenger is initialized, processing message"), this.processMessage(e)
            }
            processMessage(e) {
                (0, a.debugLog)("[HANDSHAKE DEBUG] ReactNativeMessenger processing message:", e);
                let t = this.convertFromDeprecatedFormat(e);
                if ((0, a.debugLog)("[HANDSHAKE DEBUG] Message after conversion:", t), this.validateMessage && !this.validateMessage(t)) return void(0, a.debugLog)("[HANDSHAKE DEBUG] Message validation failed:", t);
                (0, a.debugLog)(`[HANDSHAKE DEBUG] Routing message to ${this.handlers.size} handlers`);
                let r = 0;
                this.handlers.forEach(e => {
                    r++;
                    try {
                        (0, a.debugLog)(`[HANDSHAKE DEBUG] Calling handler ${r}/${this.handlers.size}`), e(t), (0, a.debugLog)(`[HANDSHAKE DEBUG] Handler ${r} completed successfully`)
                    } catch (e) {
                        (0, a.debugLog)(`[HANDSHAKE DEBUG] Error in handler ${r}:`, e)
                    }
                })
            }
            convertToDeprecatedFormat(e) {
                if ("penpal" !== e?.namespace) return e;
                switch (e.type) {
                    case "SYN":
                        return (0, a.debugLog)("React Native: Converting SYN to deprecated format to avoid MessagePorts", {
                            originalMessage: e
                        }), {
                            penpal: "syn",
                            participantId: e.participantId
                        };
                    case "ACK1":
                        return (0, a.debugLog)("React Native: Converting ACK1 to deprecated format", {
                            originalMessage: e
                        }), {
                            penpal: "synAck",
                            methodNames: e.methodPaths || []
                        };
                    case "ACK2":
                        return (0, a.debugLog)("React Native: Converting ACK2 to deprecated format", {
                            originalMessage: e
                        }), {
                            penpal: "ack"
                        };
                    case "REPLY": {
                        (0, a.debugLog)("React Native: Converting REPLY to deprecated format", {
                            originalMessage: e
                        });
                        let t = this.getNumericId(e.callId);
                        return e.isError ? {
                            penpal: "reply",
                            id: t,
                            resolution: "rejected",
                            returnValue: e.value,
                            returnValueIsError: e.isSerializedErrorInstance || !1
                        } : {
                            penpal: "reply",
                            id: t,
                            resolution: "fulfilled",
                            returnValue: e.value
                        }
                    }
                    case "CALL":
                        return (0, a.debugLog)("React Native: Converting CALL to deprecated format", {
                            originalMessage: e
                        }), {
                            penpal: "call",
                            id: this.getNumericId(e.id),
                            methodName: e.methodPath.join("."),
                            args: e.args
                        };
                    case "DESTROY":
                        return {
                            namespace: "penpal", type: "DESTROY"
                        };
                    default:
                        return e
                }
            }
            convertFromDeprecatedFormat(e) {
                if (e?.penpal) switch (e.penpal) {
                    case "syn": {
                        (0, a.debugLog)("[HANDSHAKE DEBUG] React Native: Converting deprecated SYN to modern format", {
                            originalMessage: e
                        });
                        let t = {
                            namespace: "penpal",
                            type: "SYN",
                            participantId: e.participantId
                        };
                        return (0, a.debugLog)("[HANDSHAKE DEBUG] Converted SYN:", t), t
                    }
                    case "synAck": {
                        (0, a.debugLog)("[HANDSHAKE DEBUG] React Native: Converting deprecated synAck to modern ACK1 format", {
                            originalMessage: e
                        });
                        let t = {
                            namespace: "penpal",
                            type: "ACK1",
                            methodPaths: e.methodNames?.map(e => e.split(".")) || [],
                            channel: void 0
                        };
                        return (0, a.debugLog)("[HANDSHAKE DEBUG] Converted ACK1:", t), t
                    }
                    case "ack": {
                        (0, a.debugLog)("[HANDSHAKE DEBUG] React Native: Converting deprecated ack to modern ACK2 format", {
                            originalMessage: e
                        });
                        let t = {
                            namespace: "penpal",
                            type: "ACK2",
                            channel: void 0
                        };
                        return (0, a.debugLog)("[HANDSHAKE DEBUG] Converted ACK2:", t), t
                    }
                    case "reply": {
                        (0, a.debugLog)("React Native: Converting deprecated reply to modern REPLY format", {
                            originalMessage: e
                        });
                        let t = this.getStringId(e.id);
                        t || (0, a.debugLog)(`Warning: No string ID mapping found for numeric ID ${e.id}, using as-is`);
                        let r = t || String(e.id);
                        return "fulfilled" === e.resolution ? {
                            namespace: "penpal",
                            type: "REPLY",
                            callId: r,
                            value: e.returnValue
                        } : {
                            namespace: "penpal",
                            type: "REPLY",
                            callId: r,
                            isError: !0,
                            value: e.returnValue,
                            isSerializedErrorInstance: e.returnValueIsError || !1
                        }
                    }
                    case "call": {
                        (0, a.debugLog)("React Native: Converting deprecated call to modern CALL format", {
                            originalMessage: e
                        });
                        let t = this.getStringId(e.id);
                        return t || (0, a.debugLog)(`Warning: No string ID mapping found for numeric ID ${e.id}, using as-is`), {
                            namespace: "penpal",
                            type: "CALL",
                            id: t || String(e.id),
                            methodPath: e.methodName.split("."),
                            args: e.args
                        }
                    }
                    default:
                        return (0, a.debugLog)("React Native: Unknown deprecated penpal message type:", e.penpal), e
                }
                return e
            }
            setupMessagePort(e) {
                (0, a.debugLog)("React Native: setupMessagePort called but ignored (MessagePort not supported)")
            }
            destroy() {
                this.isInitialized && (this.handlers.clear(), this.messageBuffer = [], this.stringToNumericId.clear(), this.numericToStringId.clear(), this.nextNumericId = 1, this.isInitialized = !1, this.hasBeenUsed = !1, (0, a.debugLog)("ReactNativeMessenger destroyed and ready for reuse"))
            }
            reset() {
                (0, a.debugLog)("ReactNativeMessenger reset for reuse"), this.handlers.clear(), this.messageBuffer = [], this.isInitialized = !1, this.hasBeenUsed = !1, this.nextNumericId = 1, this.stringToNumericId.clear(), this.numericToStringId.clear()
            }
            getNumericId(e) {
                let t = this.stringToNumericId.get(e);
                return t || (t = this.nextNumericId++, this.stringToNumericId.set(e, t), this.numericToStringId.set(t, e), (0, a.debugLog)(`ID mapping created: "${e}" -> ${t}`)), t
            }
            getStringId(e) {
                return this.numericToStringId.get(e)
            }
        }
    }, {
        "../../utils/debug.js": "8822a",
        "./browserMessenger/PenpalError.js": "dwP65",
        "./browserMessenger/backwardCompatibility.js": "hsQQI",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "913SB": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "InternalSentry", () => l), n.export(r, "sentry", () => c);
        var a = e("axios"),
            o = e("../../version.js");
        let i = "https://64a03e4967fb4dad3ecb914918c777b6@o4504593015242752.ingest.us.sentry.io/4509292415287296";
        class l {
            static sentryInstance;
            static queuedCalls = [];
            static baseTags;
            static set sentry(e) {
                let t = e.getDsn();
                if (!t) throw Error("Sentry DSN is not set");
                if (t.projectId !== i.split("https://")[1].split("/")[1] || t.host !== i.split("@")[1].split("/")[0] || t.publicKey !== i.split("@")[0].split("https://")[1]) throw Error("Sentry DSN is not valid");
                e.captureAxiosError = (t, r, s, n) => {
                    r instanceof a.AxiosError ? (r.name = t, e.captureException(r, {
                        ...s,
                        captureContext: {
                            ...s?.captureContext,
                            extra: {
                                errorResponseData: r.response?.data,
                                errorStatus: r.response?.status,
                                errorHeaders: r.response?.headers,
                                errorRequest: r.request
                            },
                            tags: {
                                ...this.baseTags,
                                method: t
                            }
                        }
                    })) : e.captureException(r, s, n)
                }, this.sentryInstance = e
            }
            static get sentry() {
                return this.proxy
            }
            static async init({
                sentry: t,
                configuration: r
            }) {
                if (t) return void(this.sentry = t);
                let s = await e("a9e6b8ea4960bb4a");
                this.sentry = new s.BrowserClient({
                    dsn: i,
                    integrations: [],
                    stackParser: s.defaultStackParser,
                    transport: s.makeFetchTransport
                }), this.baseTags = {
                    projectId: r?.baseConfiguration.publishableKey,
                    sdk: o.PACKAGE,
                    sdkVersion: o.VERSION
                }, this.processQueuedCalls()
            }
            static proxy = new Proxy({}, {
                get: (e, t) => l.sentryInstance && "function" == typeof l.sentryInstance[t] ? (...e) => l.sentryInstance[t](...e) : (...e) => {
                    l.queuedCalls.push({
                        fn: t,
                        args: e
                    })
                }
            });
            static processQueuedCalls() {
                this.sentryInstance && (this.queuedCalls.forEach(({
                    fn: e,
                    args: t
                }) => {
                    "function" == typeof this.sentryInstance[e] && this.sentryInstance[e](...t)
                }), this.queuedCalls = [])
            }
        }
        let {
            sentry: c
        } = l
    }, {
        axios: "jhAcT",
        "../../version.js": "b25yF",
        a9e6b8ea4960bb4a: "lXFlS",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    b25yF: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "PACKAGE", () => o), n.export(r, "VERSION", () => a);
        let a = "0.9.5",
            o = "@openfort/openfort-js"
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    lXFlS: [function(e, t, r, s) {
        t.exports = e("b8b8447d32e4fae5")(t.bundle.resolve("7UhPZ")).then(() => t.bundle.root("9vv7N"))
    }, {
        b8b8447d32e4fae5: "6IWJC"
    }],
    "6IWJC": [function(e, t, r, s) {
        "use strict";
        t.exports = e("ca2a84f7fa4a3bb0")(function(e) {
            return new Promise(function(t, r) {
                if ([].concat(document.getElementsByTagName("script")).some(function(t) {
                        return t.src === e
                    })) return void t();
                var s = document.createElement("link");
                s.href = e, s.rel = "preload", s.as = "script", document.head.appendChild(s);
                var n = document.createElement("script");
                n.async = !0, n.type = "text/javascript", n.src = e, n.onerror = function(t) {
                    var s = TypeError("Failed to fetch dynamically imported module: ".concat(e, ". Error: ").concat(t.message));
                    n.onerror = n.onload = null, n.remove(), r(s)
                }, n.onload = function() {
                    n.onerror = n.onload = null, t()
                }, document.getElementsByTagName("head")[0].appendChild(n)
            })
        })
    }, {
        ca2a84f7fa4a3bb0: "cpF2B"
    }],
    cpF2B: [function(e, t, r, s) {
        "use strict";
        var n = {},
            a = {},
            o = {};
        t.exports = function(e, t) {
            return function(r) {
                var s = function(e) {
                    switch (e) {
                        case "preload":
                            return a;
                        case "prefetch":
                            return o;
                        default:
                            return n
                    }
                }(t);
                return s[r] ? s[r] : s[r] = e.apply(null, arguments).catch(function(e) {
                    throw delete s[r], e
                })
            }
        }
    }, {}],
    "26nPt": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "Openfort", () => E);
        var a = e("../../../packages/internal/openapi-clients/dist/index.js"),
            o = e("./errors/sentry.js"),
            i = e("../storage/lazyStorage.js"),
            l = e("./errors/openfortError.js"),
            c = e("./config/config.js"),
            u = e("../auth/authManager.js"),
            d = e("../api/auth.js"),
            p = e("../api/embeddedWallet.js"),
            f = e("../api/user.js"),
            h = e("../api/proxy.js"),
            g = e("./openfortInternal.js"),
            m = e("../utils/typedEventEmitter.js"),
            y = n.interopDefault(m);
        class E {
            storage;
            iAuthManager = null;
            openfortInternal;
            initPromise;
            asyncInitPromise = null;
            authInstance;
            embeddedWalletInstance;
            userInstance;
            proxyInstance;
            configuration;
            eventEmitter;
            get auth() {
                if (!this.authInstance) throw new(0, l.OpenfortError)("Openfort SDK not initialized. Please await waitForInitialization() before accessing auth.", l.OpenfortErrorType.INVALID_CONFIGURATION);
                return this.authInstance
            }
            get embeddedWallet() {
                if (!this.embeddedWalletInstance) throw new(0, l.OpenfortError)("Openfort SDK not initialized. Please await waitForInitialization() before accessing embeddedWallet.", l.OpenfortErrorType.INVALID_CONFIGURATION);
                return this.embeddedWalletInstance
            }
            get user() {
                if (!this.userInstance) throw new(0, l.OpenfortError)("Openfort SDK not initialized. Please await waitForInitialization() before accessing user.", l.OpenfortErrorType.INVALID_CONFIGURATION);
                return this.userInstance
            }
            get proxy() {
                if (!this.proxyInstance) throw new(0, l.OpenfortError)("Openfort SDK not initialized. Please await waitForInitialization() before accessing proxy.", l.OpenfortErrorType.INVALID_CONFIGURATION);
                return this.proxyInstance
            }
            initializeSynchronously() {
                try {
                    this.iAuthManager = new(0, u.AuthManager)(this.storage), this.openfortInternal = new(0, g.OpenfortInternal)(this.storage, this.authManager, this.eventEmitter), this.authInstance = new(0, d.AuthApi)(this.storage, this.authManager, this.validateAndRefreshToken.bind(this), this.ensureInitialized.bind(this), this.eventEmitter), this.embeddedWalletInstance = new(0, p.EmbeddedWalletApi)(this.storage, this.validateAndRefreshToken.bind(this), this.ensureInitialized.bind(this), this.eventEmitter), this.userInstance = new(0, f.UserApi)(this.storage, this.authManager, this.validateAndRefreshToken.bind(this)), this.proxyInstance = new(0, h.ProxyApi)(this.storage, this.backendApiClients, this.validateAndRefreshToken.bind(this), this.ensureInitialized.bind(this), async () => {
                        if (!this.embeddedWalletInstance) throw new(0, l.OpenfortError)("Embedded wallet not initialized", l.OpenfortErrorType.MISSING_SIGNER_ERROR);
                        let e = this.embeddedWalletInstance;
                        return t => e.signMessage(t, {
                            hashMessage: !1,
                            arrayifyMessage: !1
                        })
                    })
                } catch (e) {
                    throw new(0, l.OpenfortError)("Openfort SDK synchronous initialization failed", l.OpenfortErrorType.INVALID_CONFIGURATION)
                }
            }
            constructor(e) {
                this.configuration = new(0, c.SDKConfiguration)(e), this.storage = new(0, i.LazyStorage)(this.configuration.storage), this.eventEmitter = new(0, y.default), o.InternalSentry.init({
                    configuration: this.configuration
                }), this.initializeSynchronously(), this.initPromise = Promise.resolve()
            }
            async waitForInitialization() {
                await this.initPromise, await this.ensureAsyncInitialized()
            }
            async getAccessToken() {
                return await this.ensureInitialized(), this.openfortInternal.getAccessToken()
            }
            async validateAndRefreshToken(e) {
                return await this.ensureInitialized(), await this.openfortInternal.validateAndRefreshToken(e)
            }
            get backendApiClients() {
                return new(0, a.BackendApiClients)({
                    basePath: this.configuration.backendUrl,
                    accessToken: this.configuration.baseConfiguration.publishableKey
                })
            }
            get authManager() {
                if (!this.iAuthManager) throw new(0, l.OpenfortError)("AuthManager not initialized", l.OpenfortErrorType.INTERNAL_ERROR);
                return this.iAuthManager
            }
            async initializeAsync() {
                try {
                    if (!await c.SDKConfiguration.isStorageAccessible(this.storage)) throw new(0, l.OpenfortError)("Storage is not accessible", l.OpenfortErrorType.INVALID_CONFIGURATION);
                    this.authManager.setBackendApiClients(this.backendApiClients, this.configuration.baseConfiguration.publishableKey)
                } catch (e) {
                    throw new(0, l.OpenfortError)("Openfort SDK async initialization failed", l.OpenfortErrorType.INTERNAL_ERROR)
                }
            }
            async ensureAsyncInitialized() {
                this.asyncInitPromise || (this.asyncInitPromise = this.initializeAsync()), await this.asyncInitPromise
            }
            async ensureInitialized() {
                await this.initPromise, await this.ensureAsyncInitialized()
            }
        }
    }, {
        "../../../packages/internal/openapi-clients/dist/index.js": "5IDb0",
        "./errors/sentry.js": "913SB",
        "../storage/lazyStorage.js": "i2ayE",
        "./errors/openfortError.js": "3xESR",
        "./config/config.js": "8pPBU",
        "../auth/authManager.js": "aurKi",
        "../api/auth.js": "kxNZ1",
        "../api/embeddedWallet.js": "cN17n",
        "../api/user.js": "6FRSo",
        "../api/proxy.js": "3zeZX",
        "./openfortInternal.js": "kvnur",
        "../utils/typedEventEmitter.js": "gZetA",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "5IDb0": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "BackendApiClients", () => C), n.export(r, "createConfig", () => S);
        var a = e("axios"),
            o = n.interopDefault(a),
            i = e("axios-retry"),
            l = n.interopDefault(i);
        let c = "https://api.openfort.io".replace(/\/+$/, "");
        class u {
            basePath;
            axios;
            configuration;
            constructor(e, t = c, r = o.default) {
                this.basePath = t, this.axios = r, e && (this.configuration = e, this.basePath = e.basePath || this.basePath)
            }
        }
        class d extends Error {
            field;
            constructor(e, t) {
                super(t), this.field = e, this.name = "RequiredError"
            }
        }
        let p = "https://example.com",
            f = function(e, t, r) {
                if (null == r) throw new d(t, `Required parameter ${t} was null or undefined when calling ${e}.`)
            },
            h = async function(e, t) {
                t && t.accessToken && (e.Authorization = "Bearer " + ("function" == typeof t.accessToken ? await t.accessToken() : await t.accessToken))
            }, g = function(e, ...t) {
                let r = new URLSearchParams(e.search);
                (function e(t, r, s = "") {
                    null != r && ("object" == typeof r ? Array.isArray(r) ? r.forEach(r => e(t, r, s)) : Object.keys(r).forEach(n => e(t, r[n], `${s}${""!==s?".":""}${n}`)) : t.has(s) ? t.append(s, r) : t.set(s, r))
                })(r, t), e.search = r.toString()
            }, m = function(e, t, r) {
                let s = "string" != typeof e;
                return (s && r && r.isJsonMime ? r.isJsonMime(t.headers["Content-Type"]) : s) ? JSON.stringify(void 0 !== e ? e : {}) : e || ""
            }, y = function(e) {
                return e.pathname + e.search + e.hash
            }, E = function(e, t, r, s) {
                return (n = t, a = r) => {
                    let o = {
                        ...e.options,
                        url: (s?.basePath || n.defaults.baseURL || a) + e.url
                    };
                    return n.request(o)
                }
            }, w = function(e) {
                let t = {
                    cancelTransferOwnership: async (t, r, s = {}) => {
                        let n;
                        f("cancelTransferOwnership", "id", t), f("cancelTransferOwnership", "cancelTransferOwnershipRequest", r);
                        let a = new URL("/v1/accounts/{id}/cancel_transfer_ownership".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (n = e.baseOptions);
                        let o = {
                                method: "POST",
                                ...n,
                                ...s
                            },
                            i = {};
                        await h(i, e), i["Content-Type"] = "application/json", g(a, {});
                        let l = n && n.headers ? n.headers : {};
                        return o.headers = {
                            ...i,
                            ...l,
                            ...s.headers
                        }, o.data = m(r, o, e), {
                            url: y(a),
                            options: o
                        }
                    },
                    completeRecovery: async (t, r, s = {}) => {
                        let n;
                        f("completeRecovery", "id", t), f("completeRecovery", "completeRecoveryRequest", r);
                        let a = new URL("/v1/accounts/{id}/complete_recovery".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (n = e.baseOptions);
                        let o = {
                                method: "POST",
                                ...n,
                                ...s
                            },
                            i = {};
                        await h(i, e), i["Content-Type"] = "application/json", g(a, {});
                        let l = n && n.headers ? n.headers : {};
                        return o.headers = {
                            ...i,
                            ...l,
                            ...s.headers
                        }, o.data = m(r, o, e), {
                            url: y(a),
                            options: o
                        }
                    },
                    createAccount: async (t, r = {}) => {
                        let s;
                        f("createAccount", "createAccountRequest", t);
                        let n = new URL("/v1/accounts", p);
                        e && (s = e.baseOptions);
                        let a = {
                                method: "POST",
                                ...s,
                                ...r
                            },
                            o = {};
                        await h(o, e), o["Content-Type"] = "application/json", g(n, {});
                        let i = s && s.headers ? s.headers : {};
                        return a.headers = {
                            ...o,
                            ...i,
                            ...r.headers
                        }, a.data = m(t, a, e), {
                            url: y(n),
                            options: a
                        }
                    },
                    createAccountV2: async (t, r = {}) => {
                        let s;
                        f("createAccountV2", "accountCreateRequest", t);
                        let n = new URL("/v2/accounts", p);
                        e && (s = e.baseOptions);
                        let a = {
                            method: "POST",
                            ...s,
                            ...r
                        };
                        return g(n, {}), a.headers = {
                            "Content-Type": "application/json",
                            ...s && s.headers ? s.headers : {},
                            ...r.headers
                        }, a.data = m(t, a, e), {
                            url: y(n),
                            options: a
                        }
                    },
                    deployAccount: async (t, r, s = {}) => {
                        let n;
                        f("deployAccount", "id", t), f("deployAccount", "deployRequest", r);
                        let a = new URL("/v1/accounts/{id}/deploy".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (n = e.baseOptions);
                        let o = {
                                method: "POST",
                                ...n,
                                ...s
                            },
                            i = {};
                        await h(i, e), i["Content-Type"] = "application/json", g(a, {});
                        let l = n && n.headers ? n.headers : {};
                        return o.headers = {
                            ...i,
                            ...l,
                            ...s.headers
                        }, o.data = m(r, o, e), {
                            url: y(a),
                            options: o
                        }
                    },
                    disableAccount: async (t, r = {}) => {
                        let s;
                        f("disableAccount", "id", t);
                        let n = new URL("/v1/accounts/{id}/disable".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (s = e.baseOptions);
                        let a = {
                                method: "POST",
                                ...s,
                                ...r
                            },
                            o = {};
                        await h(o, e), g(n, {});
                        let i = s && s.headers ? s.headers : {};
                        return a.headers = {
                            ...o,
                            ...i,
                            ...r.headers
                        }, {
                            url: y(n),
                            options: a
                        }
                    },
                    getAccount: async (t, r, s = {}) => {
                        let n;
                        f("getAccount", "id", t);
                        let a = new URL("/v1/accounts/{id}".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (n = e.baseOptions);
                        let o = {
                                method: "GET",
                                ...n,
                                ...s
                            },
                            i = {},
                            l = {};
                        await h(i, e), r && (l.expand = r), g(a, l);
                        let c = n && n.headers ? n.headers : {};
                        return o.headers = {
                            ...i,
                            ...c,
                            ...s.headers
                        }, {
                            url: y(a),
                            options: o
                        }
                    },
                    getAccountV2: async (t, r = {}) => {
                        let s;
                        f("getAccountV2", "accountId", t);
                        let n = new URL("/v2/accounts/{accountId}".replace("{accountId}", encodeURIComponent(String(t))), p);
                        e && (s = e.baseOptions);
                        let a = {
                            method: "GET",
                            ...s,
                            ...r
                        };
                        return g(n, {}), a.headers = {
                            ...s && s.headers ? s.headers : {},
                            ...r.headers
                        }, {
                            url: y(n),
                            options: a
                        }
                    },
                    getAccounts: async (t, r, s, n, a, o, i = {}) => {
                        let l, c = new URL("/v1/accounts", p);
                        e && (l = e.baseOptions);
                        let u = {
                                method: "GET",
                                ...l,
                                ...i
                            },
                            d = {},
                            f = {};
                        await h(d, e), void 0 !== t && (f.limit = t), void 0 !== r && (f.skip = r), void 0 !== s && (f.order = s), void 0 !== n && (f.player = n), void 0 !== a && (f.address = a), o && (f.expand = o), g(c, f);
                        let m = l && l.headers ? l.headers : {};
                        return u.headers = {
                            ...d,
                            ...m,
                            ...i.headers
                        }, {
                            url: y(c),
                            options: u
                        }
                    },
                    listAccountsV2: async (t, r, s, n, a = {}) => {
                        let o, i = new URL("/v2/accounts", p);
                        e && (o = e.baseOptions);
                        let l = {
                                method: "GET",
                                ...o,
                                ...a
                            },
                            c = {};
                        return void 0 !== t && (c.limit = t), void 0 !== r && (c.skip = r), void 0 !== s && (c.order = s), void 0 !== n && (c.accountType = n), g(i, c), l.headers = {
                            ...o && o.headers ? o.headers : {},
                            ...a.headers
                        }, {
                            url: y(i),
                            options: l
                        }
                    },
                    requestTransferOwnership: async (t, r, s = {}) => {
                        let n;
                        f("requestTransferOwnership", "id", t), f("requestTransferOwnership", "transferOwnershipRequest", r);
                        let a = new URL("/v1/accounts/{id}/request_transfer_ownership".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (n = e.baseOptions);
                        let o = {
                                method: "POST",
                                ...n,
                                ...s
                            },
                            i = {};
                        await h(i, e), i["Content-Type"] = "application/json", g(a, {});
                        let l = n && n.headers ? n.headers : {};
                        return o.headers = {
                            ...i,
                            ...l,
                            ...s.headers
                        }, o.data = m(r, o, e), {
                            url: y(a),
                            options: o
                        }
                    },
                    signPayload: async (t, r, s = {}) => {
                        let n;
                        f("signPayload", "id", t), f("signPayload", "signPayloadRequest", r);
                        let a = new URL("/v1/accounts/{id}/sign_payload".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (n = e.baseOptions);
                        let o = {
                                method: "POST",
                                ...n,
                                ...s
                            },
                            i = {};
                        await h(i, e), i["Content-Type"] = "application/json", g(a, {});
                        let l = n && n.headers ? n.headers : {};
                        return o.headers = {
                            ...i,
                            ...l,
                            ...s.headers
                        }, o.data = m(r, o, e), {
                            url: y(a),
                            options: o
                        }
                    },
                    startRecovery: async (t, r, s = {}) => {
                        let n;
                        f("startRecovery", "id", t), f("startRecovery", "startRecoveryRequest", r);
                        let a = new URL("/v1/accounts/{id}/start_recovery".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (n = e.baseOptions);
                        let o = {
                                method: "POST",
                                ...n,
                                ...s
                            },
                            i = {};
                        await h(i, e), i["Content-Type"] = "application/json", g(a, {});
                        let l = n && n.headers ? n.headers : {};
                        return o.headers = {
                            ...i,
                            ...l,
                            ...s.headers
                        }, o.data = m(r, o, e), {
                            url: y(a),
                            options: o
                        }
                    },
                    syncAccount: async (t, r = {}) => {
                        let s;
                        f("syncAccount", "id", t);
                        let n = new URL("/v1/accounts/{id}/sync".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (s = e.baseOptions);
                        let a = {
                                method: "POST",
                                ...s,
                                ...r
                            },
                            o = {};
                        await h(o, e), g(n, {});
                        let i = s && s.headers ? s.headers : {};
                        return a.headers = {
                            ...o,
                            ...i,
                            ...r.headers
                        }, {
                            url: y(n),
                            options: a
                        }
                    }
                };
                return {
                    cancelTransferOwnership: async (r, s, n) => E(await t.cancelTransferOwnership(r, s, n), o.default, c, e),
                    completeRecovery: async (r, s, n) => E(await t.completeRecovery(r, s, n), o.default, c, e),
                    createAccount: async (r, s) => E(await t.createAccount(r, s), o.default, c, e),
                    createAccountV2: async (r, s) => E(await t.createAccountV2(r, s), o.default, c, e),
                    deployAccount: async (r, s, n) => E(await t.deployAccount(r, s, n), o.default, c, e),
                    disableAccount: async (r, s) => E(await t.disableAccount(r, s), o.default, c, e),
                    getAccount: async (r, s, n) => E(await t.getAccount(r, s, n), o.default, c, e),
                    getAccountV2: async (r, s) => E(await t.getAccountV2(r, s), o.default, c, e),
                    getAccounts: async (r, s, n, a, i, l, u) => E(await t.getAccounts(r, s, n, a, i, l, u), o.default, c, e),
                    listAccountsV2: async (r, s, n, a, i) => E(await t.listAccountsV2(r, s, n, a, i), o.default, c, e),
                    requestTransferOwnership: async (r, s, n) => E(await t.requestTransferOwnership(r, s, n), o.default, c, e),
                    signPayload: async (r, s, n) => E(await t.signPayload(r, s, n), o.default, c, e),
                    startRecovery: async (r, s, n) => E(await t.startRecovery(r, s, n), o.default, c, e),
                    syncAccount: async (r, s) => E(await t.syncAccount(r, s), o.default, c, e)
                }
            };
        class R extends u {
            cancelTransferOwnership(e, t) {
                return w(this.configuration).cancelTransferOwnership(e.id, e.cancelTransferOwnershipRequest, t).then(e => e(this.axios, this.basePath))
            }
            completeRecovery(e, t) {
                return w(this.configuration).completeRecovery(e.id, e.completeRecoveryRequest, t).then(e => e(this.axios, this.basePath))
            }
            createAccount(e, t) {
                return w(this.configuration).createAccount(e.createAccountRequest, t).then(e => e(this.axios, this.basePath))
            }
            createAccountV2(e, t) {
                return w(this.configuration).createAccountV2(e.accountCreateRequest, t).then(e => e(this.axios, this.basePath))
            }
            deployAccount(e, t) {
                return w(this.configuration).deployAccount(e.id, e.deployRequest, t).then(e => e(this.axios, this.basePath))
            }
            disableAccount(e, t) {
                return w(this.configuration).disableAccount(e.id, t).then(e => e(this.axios, this.basePath))
            }
            getAccount(e, t) {
                return w(this.configuration).getAccount(e.id, e.expand, t).then(e => e(this.axios, this.basePath))
            }
            getAccountV2(e, t) {
                return w(this.configuration).getAccountV2(e.accountId, t).then(e => e(this.axios, this.basePath))
            }
            getAccounts(e = {}, t) {
                return w(this.configuration).getAccounts(e.limit, e.skip, e.order, e.player, e.address, e.expand, t).then(e => e(this.axios, this.basePath))
            }
            listAccountsV2(e = {}, t) {
                return w(this.configuration).listAccountsV2(e.limit, e.skip, e.order, e.accountType, t).then(e => e(this.axios, this.basePath))
            }
            requestTransferOwnership(e, t) {
                return w(this.configuration).requestTransferOwnership(e.id, e.transferOwnershipRequest, t).then(e => e(this.axios, this.basePath))
            }
            signPayload(e, t) {
                return w(this.configuration).signPayload(e.id, e.signPayloadRequest, t).then(e => e(this.axios, this.basePath))
            }
            startRecovery(e, t) {
                return w(this.configuration).startRecovery(e.id, e.startRecoveryRequest, t).then(e => e(this.axios, this.basePath))
            }
            syncAccount(e, t) {
                return w(this.configuration).syncAccount(e.id, t).then(e => e(this.axios, this.basePath))
            }
        }
        let j = function(e) {
            let t = {
                authenticateSIWE: async (t, r = {}) => {
                    let s;
                    f("authenticateSIWE", "sIWEAuthenticateRequest", t);
                    let n = new URL("/iam/v1/siwe/authenticate", p);
                    e && (s = e.baseOptions);
                    let a = {
                            method: "POST",
                            ...s,
                            ...r
                        },
                        o = {};
                    await h(o, e), o["Content-Type"] = "application/json", g(n, {});
                    let i = s && s.headers ? s.headers : {};
                    return a.headers = {
                        ...o,
                        ...i,
                        ...r.headers
                    }, a.data = m(t, a, e), {
                        url: y(n),
                        options: a
                    }
                },
                getJwks: async (t, r = {}) => {
                    let s;
                    f("getJwks", "publishableKey", t);
                    let n = new URL("/iam/v1/{publishable_key}/jwks.json".replace("{publishable_key}", encodeURIComponent(String(t))), p);
                    e && (s = e.baseOptions);
                    let a = {
                        method: "GET",
                        ...s,
                        ...r
                    };
                    return g(n, {}), a.headers = {
                        ...s && s.headers ? s.headers : {},
                        ...r.headers
                    }, {
                        url: y(n),
                        options: a
                    }
                },
                initOAuth: async (t, r, s = {}) => {
                    let n;
                    f("initOAuth", "oAuthInitRequest", t);
                    let a = new URL("/iam/v1/oauth/init", p);
                    e && (n = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...n,
                            ...s
                        },
                        i = {};
                    await h(i, e), null != r && (i["x-game"] = String(r)), i["Content-Type"] = "application/json", g(a, {});
                    let l = n && n.headers ? n.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...s.headers
                    }, o.data = m(t, o, e), {
                        url: y(a),
                        options: o
                    }
                },
                initSIWE: async (t, r, s = {}) => {
                    let n;
                    f("initSIWE", "sIWERequest", t);
                    let a = new URL("/iam/v1/siwe/init", p);
                    e && (n = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...n,
                            ...s
                        },
                        i = {};
                    await h(i, e), null != r && (i["x-game"] = String(r)), i["Content-Type"] = "application/json", g(a, {});
                    let l = n && n.headers ? n.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...s.headers
                    }, o.data = m(t, o, e), {
                        url: y(a),
                        options: o
                    }
                },
                linkEmail: async (t, r, s = {}) => {
                    let n;
                    f("linkEmail", "loginRequest", t);
                    let a = new URL("/iam/v1/password/link", p);
                    e && (n = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...n,
                            ...s
                        },
                        i = {};
                    null != r && (i["x-game"] = String(r)), i["Content-Type"] = "application/json", g(a, {});
                    let l = n && n.headers ? n.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...s.headers
                    }, o.data = m(t, o, e), {
                        url: y(a),
                        options: o
                    }
                },
                linkOAuth: async (t, r, s = {}) => {
                    let n;
                    f("linkOAuth", "oAuthInitRequest", t);
                    let a = new URL("/iam/v1/oauth/init_link", p);
                    e && (n = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...n,
                            ...s
                        },
                        i = {};
                    null != r && (i["x-game"] = String(r)), i["Content-Type"] = "application/json", g(a, {});
                    let l = n && n.headers ? n.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...s.headers
                    }, o.data = m(t, o, e), {
                        url: y(a),
                        options: o
                    }
                },
                linkSIWE: async (t, r = {}) => {
                    let s;
                    f("linkSIWE", "sIWEAuthenticateRequest", t);
                    let n = new URL("/iam/v1/siwe/link", p);
                    e && (s = e.baseOptions);
                    let a = {
                        method: "POST",
                        ...s,
                        ...r
                    };
                    return g(n, {}), a.headers = {
                        "Content-Type": "application/json",
                        ...s && s.headers ? s.headers : {},
                        ...r.headers
                    }, a.data = m(t, a, e), {
                        url: y(n),
                        options: a
                    }
                },
                linkThirdParty: async (t, r, s = {}) => {
                    let n;
                    f("linkThirdParty", "thirdPartyLinkRequest", t);
                    let a = new URL("/iam/v1/oauth/link", p);
                    e && (n = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...n,
                            ...s
                        },
                        i = {};
                    null != r && (i["x-game"] = String(r)), i["Content-Type"] = "application/json", g(a, {});
                    let l = n && n.headers ? n.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...s.headers
                    }, o.data = m(t, o, e), {
                        url: y(a),
                        options: o
                    }
                },
                loginEmailPassword: async (t, r, s = {}) => {
                    let n;
                    f("loginEmailPassword", "loginRequest", t);
                    let a = new URL("/iam/v1/password/login", p);
                    e && (n = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...n,
                            ...s
                        },
                        i = {};
                    await h(i, e), null != r && (i["x-game"] = String(r)), i["Content-Type"] = "application/json", g(a, {});
                    let l = n && n.headers ? n.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...s.headers
                    }, o.data = m(t, o, e), {
                        url: y(a),
                        options: o
                    }
                },
                loginOIDC: async (t, r, s = {}) => {
                    let n;
                    f("loginOIDC", "loginOIDCRequest", t);
                    let a = new URL("/iam/v1/oidc/login", p);
                    e && (n = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...n,
                            ...s
                        },
                        i = {};
                    await h(i, e), null != r && (i["x-game"] = String(r)), i["Content-Type"] = "application/json", g(a, {});
                    let l = n && n.headers ? n.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...s.headers
                    }, o.data = m(t, o, e), {
                        url: y(a),
                        options: o
                    }
                },
                loginWithIdToken: async (t, r = {}) => {
                    let s;
                    f("loginWithIdToken", "loginWithIdTokenRequest", t);
                    let n = new URL("/iam/v1/oauth/login_id_token", p);
                    e && (s = e.baseOptions);
                    let a = {
                            method: "POST",
                            ...s,
                            ...r
                        },
                        o = {};
                    await h(o, e), o["Content-Type"] = "application/json", g(n, {});
                    let i = s && s.headers ? s.headers : {};
                    return a.headers = {
                        ...o,
                        ...i,
                        ...r.headers
                    }, a.data = m(t, a, e), {
                        url: y(n),
                        options: a
                    }
                },
                logout: async (t, r = {}) => {
                    let s;
                    f("logout", "logoutRequest", t);
                    let n = new URL("/iam/v1/sessions/logout", p);
                    e && (s = e.baseOptions);
                    let a = {
                        method: "POST",
                        ...s,
                        ...r
                    };
                    return g(n, {}), a.headers = {
                        "Content-Type": "application/json",
                        ...s && s.headers ? s.headers : {},
                        ...r.headers
                    }, a.data = m(t, a, e), {
                        url: y(n),
                        options: a
                    }
                },
                me: async (t = {}) => {
                    let r, s = new URL("/iam/v1/me", p);
                    e && (r = e.baseOptions);
                    let n = {
                        method: "GET",
                        ...r,
                        ...t
                    };
                    return g(s, {}), n.headers = {
                        ...r && r.headers ? r.headers : {},
                        ...t.headers
                    }, {
                        url: y(s),
                        options: n
                    }
                },
                poolOAuth: async (t, r = {}) => {
                    let s;
                    f("poolOAuth", "key", t);
                    let n = new URL("/iam/v1/oauth/pool", p);
                    e && (s = e.baseOptions);
                    let a = {
                            method: "POST",
                            ...s,
                            ...r
                        },
                        o = {},
                        i = {};
                    await h(o, e), void 0 !== t && (i.key = t), g(n, i);
                    let l = s && s.headers ? s.headers : {};
                    return a.headers = {
                        ...o,
                        ...l,
                        ...r.headers
                    }, {
                        url: y(n),
                        options: a
                    }
                },
                refresh: async (t, r = {}) => {
                    let s;
                    f("refresh", "refreshTokenRequest", t);
                    let n = new URL("/iam/v1/sessions", p);
                    e && (s = e.baseOptions);
                    let a = {
                            method: "POST",
                            ...s,
                            ...r
                        },
                        o = {};
                    await h(o, e), o["Content-Type"] = "application/json", g(n, {});
                    let i = s && s.headers ? s.headers : {};
                    return a.headers = {
                        ...o,
                        ...i,
                        ...r.headers
                    }, a.data = m(t, a, e), {
                        url: y(n),
                        options: a
                    }
                },
                registerGuest: async (t, r = {}) => {
                    let s, n = new URL("/iam/v1/guest", p);
                    e && (s = e.baseOptions);
                    let a = {
                            method: "POST",
                            ...s,
                            ...r
                        },
                        o = {};
                    await h(o, e), null != t && (o["x-game"] = String(t)), g(n, {});
                    let i = s && s.headers ? s.headers : {};
                    return a.headers = {
                        ...o,
                        ...i,
                        ...r.headers
                    }, {
                        url: y(n),
                        options: a
                    }
                },
                requestEmailVerification: async (t, r = {}) => {
                    let s;
                    f("requestEmailVerification", "requestVerifyEmailRequest", t);
                    let n = new URL("/iam/v1/password/request_email_verification", p);
                    e && (s = e.baseOptions);
                    let a = {
                            method: "POST",
                            ...s,
                            ...r
                        },
                        o = {};
                    await h(o, e), o["Content-Type"] = "application/json", g(n, {});
                    let i = s && s.headers ? s.headers : {};
                    return a.headers = {
                        ...o,
                        ...i,
                        ...r.headers
                    }, a.data = m(t, a, e), {
                        url: y(n),
                        options: a
                    }
                },
                requestResetPassword: async (t, r = {}) => {
                    let s;
                    f("requestResetPassword", "requestResetPasswordRequest", t);
                    let n = new URL("/iam/v1/password/request_reset", p);
                    e && (s = e.baseOptions);
                    let a = {
                            method: "POST",
                            ...s,
                            ...r
                        },
                        o = {};
                    await h(o, e), o["Content-Type"] = "application/json", g(n, {});
                    let i = s && s.headers ? s.headers : {};
                    return a.headers = {
                        ...o,
                        ...i,
                        ...r.headers
                    }, a.data = m(t, a, e), {
                        url: y(n),
                        options: a
                    }
                },
                resetPassword: async (t, r = {}) => {
                    let s;
                    f("resetPassword", "resetPasswordRequest", t);
                    let n = new URL("/iam/v1/password/reset", p);
                    e && (s = e.baseOptions);
                    let a = {
                            method: "POST",
                            ...s,
                            ...r
                        },
                        o = {};
                    await h(o, e), o["Content-Type"] = "application/json", g(n, {});
                    let i = s && s.headers ? s.headers : {};
                    return a.headers = {
                        ...o,
                        ...i,
                        ...r.headers
                    }, a.data = m(t, a, e), {
                        url: y(n),
                        options: a
                    }
                },
                signupEmailPassword: async (t, r, s = {}) => {
                    let n;
                    f("signupEmailPassword", "signupRequest", t);
                    let a = new URL("/iam/v1/password/signup", p);
                    e && (n = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...n,
                            ...s
                        },
                        i = {};
                    await h(i, e), null != r && (i["x-game"] = String(r)), i["Content-Type"] = "application/json", g(a, {});
                    let l = n && n.headers ? n.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...s.headers
                    }, o.data = m(t, o, e), {
                        url: y(a),
                        options: o
                    }
                },
                thirdParty: async (t, r, s = {}) => {
                    let n;
                    f("thirdParty", "thirdPartyOAuthRequest", t);
                    let a = new URL("/iam/v1/oauth/third_party", p);
                    e && (n = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...n,
                            ...s
                        },
                        i = {};
                    await h(i, e), null != r && (i["x-game"] = String(r)), i["Content-Type"] = "application/json", g(a, {});
                    let l = n && n.headers ? n.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...s.headers
                    }, o.data = m(t, o, e), {
                        url: y(a),
                        options: o
                    }
                },
                unlinkEmail: async (t, r = {}) => {
                    let s;
                    f("unlinkEmail", "unlinkEmailRequest", t);
                    let n = new URL("/iam/v1/password/unlink", p);
                    e && (s = e.baseOptions);
                    let a = {
                        method: "POST",
                        ...s,
                        ...r
                    };
                    return g(n, {}), a.headers = {
                        "Content-Type": "application/json",
                        ...s && s.headers ? s.headers : {},
                        ...r.headers
                    }, a.data = m(t, a, e), {
                        url: y(n),
                        options: a
                    }
                },
                unlinkOAuth: async (t, r = {}) => {
                    let s;
                    f("unlinkOAuth", "unlinkOAuthRequest", t);
                    let n = new URL("/iam/v1/oauth/unlink", p);
                    e && (s = e.baseOptions);
                    let a = {
                        method: "POST",
                        ...s,
                        ...r
                    };
                    return g(n, {}), a.headers = {
                        "Content-Type": "application/json",
                        ...s && s.headers ? s.headers : {},
                        ...r.headers
                    }, a.data = m(t, a, e), {
                        url: y(n),
                        options: a
                    }
                },
                unlinkSIWE: async (t, r = {}) => {
                    let s;
                    f("unlinkSIWE", "sIWERequest", t);
                    let n = new URL("/iam/v1/siwe/unlink", p);
                    e && (s = e.baseOptions);
                    let a = {
                        method: "POST",
                        ...s,
                        ...r
                    };
                    return g(n, {}), a.headers = {
                        "Content-Type": "application/json",
                        ...s && s.headers ? s.headers : {},
                        ...r.headers
                    }, a.data = m(t, a, e), {
                        url: y(n),
                        options: a
                    }
                },
                verifyEmail: async (t, r = {}) => {
                    let s;
                    f("verifyEmail", "verifyEmailRequest", t);
                    let n = new URL("/iam/v1/password/verify_email", p);
                    e && (s = e.baseOptions);
                    let a = {
                            method: "POST",
                            ...s,
                            ...r
                        },
                        o = {};
                    await h(o, e), o["Content-Type"] = "application/json", g(n, {});
                    let i = s && s.headers ? s.headers : {};
                    return a.headers = {
                        ...o,
                        ...i,
                        ...r.headers
                    }, a.data = m(t, a, e), {
                        url: y(n),
                        options: a
                    }
                },
                verifyOAuthToken: async (t, r = {}) => {
                    let s;
                    f("verifyOAuthToken", "authenticateOAuthRequest", t);
                    let n = new URL("/iam/v1/oauth/verify", p);
                    e && (s = e.baseOptions);
                    let a = {
                            method: "POST",
                            ...s,
                            ...r
                        },
                        o = {};
                    await h(o, e), o["Content-Type"] = "application/json", g(n, {});
                    let i = s && s.headers ? s.headers : {};
                    return a.headers = {
                        ...o,
                        ...i,
                        ...r.headers
                    }, a.data = m(t, a, e), {
                        url: y(n),
                        options: a
                    }
                }
            };
            return {
                authenticateSIWE: async (r, s) => E(await t.authenticateSIWE(r, s), o.default, c, e),
                getJwks: async (r, s) => E(await t.getJwks(r, s), o.default, c, e),
                initOAuth: async (r, s, n) => E(await t.initOAuth(r, s, n), o.default, c, e),
                initSIWE: async (r, s, n) => E(await t.initSIWE(r, s, n), o.default, c, e),
                linkEmail: async (r, s, n) => E(await t.linkEmail(r, s, n), o.default, c, e),
                linkOAuth: async (r, s, n) => E(await t.linkOAuth(r, s, n), o.default, c, e),
                linkSIWE: async (r, s) => E(await t.linkSIWE(r, s), o.default, c, e),
                linkThirdParty: async (r, s, n) => E(await t.linkThirdParty(r, s, n), o.default, c, e),
                loginEmailPassword: async (r, s, n) => E(await t.loginEmailPassword(r, s, n), o.default, c, e),
                loginOIDC: async (r, s, n) => E(await t.loginOIDC(r, s, n), o.default, c, e),
                loginWithIdToken: async (r, s) => E(await t.loginWithIdToken(r, s), o.default, c, e),
                logout: async (r, s) => E(await t.logout(r, s), o.default, c, e),
                me: async r => E(await t.me(r), o.default, c, e),
                poolOAuth: async (r, s) => E(await t.poolOAuth(r, s), o.default, c, e),
                refresh: async (r, s) => E(await t.refresh(r, s), o.default, c, e),
                registerGuest: async (r, s) => E(await t.registerGuest(r, s), o.default, c, e),
                requestEmailVerification: async (r, s) => E(await t.requestEmailVerification(r, s), o.default, c, e),
                requestResetPassword: async (r, s) => E(await t.requestResetPassword(r, s), o.default, c, e),
                resetPassword: async (r, s) => E(await t.resetPassword(r, s), o.default, c, e),
                signupEmailPassword: async (r, s, n) => E(await t.signupEmailPassword(r, s, n), o.default, c, e),
                thirdParty: async (r, s, n) => E(await t.thirdParty(r, s, n), o.default, c, e),
                unlinkEmail: async (r, s) => E(await t.unlinkEmail(r, s), o.default, c, e),
                unlinkOAuth: async (r, s) => E(await t.unlinkOAuth(r, s), o.default, c, e),
                unlinkSIWE: async (r, s) => E(await t.unlinkSIWE(r, s), o.default, c, e),
                verifyEmail: async (r, s) => E(await t.verifyEmail(r, s), o.default, c, e),
                verifyOAuthToken: async (r, s) => E(await t.verifyOAuthToken(r, s), o.default, c, e)
            }
        };
        class I extends u {
            authenticateSIWE(e, t) {
                return j(this.configuration).authenticateSIWE(e.sIWEAuthenticateRequest, t).then(e => e(this.axios, this.basePath))
            }
            getJwks(e, t) {
                return j(this.configuration).getJwks(e.publishableKey, t).then(e => e(this.axios, this.basePath))
            }
            initOAuth(e, t) {
                return j(this.configuration).initOAuth(e.oAuthInitRequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            initSIWE(e, t) {
                return j(this.configuration).initSIWE(e.sIWERequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            linkEmail(e, t) {
                return j(this.configuration).linkEmail(e.loginRequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            linkOAuth(e, t) {
                return j(this.configuration).linkOAuth(e.oAuthInitRequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            linkSIWE(e, t) {
                return j(this.configuration).linkSIWE(e.sIWEAuthenticateRequest, t).then(e => e(this.axios, this.basePath))
            }
            linkThirdParty(e, t) {
                return j(this.configuration).linkThirdParty(e.thirdPartyLinkRequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            loginEmailPassword(e, t) {
                return j(this.configuration).loginEmailPassword(e.loginRequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            loginOIDC(e, t) {
                return j(this.configuration).loginOIDC(e.loginOIDCRequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            loginWithIdToken(e, t) {
                return j(this.configuration).loginWithIdToken(e.loginWithIdTokenRequest, t).then(e => e(this.axios, this.basePath))
            }
            logout(e, t) {
                return j(this.configuration).logout(e.logoutRequest, t).then(e => e(this.axios, this.basePath))
            }
            me(e) {
                return j(this.configuration).me(e).then(e => e(this.axios, this.basePath))
            }
            poolOAuth(e, t) {
                return j(this.configuration).poolOAuth(e.key, t).then(e => e(this.axios, this.basePath))
            }
            refresh(e, t) {
                return j(this.configuration).refresh(e.refreshTokenRequest, t).then(e => e(this.axios, this.basePath))
            }
            registerGuest(e = {}, t) {
                return j(this.configuration).registerGuest(e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            requestEmailVerification(e, t) {
                return j(this.configuration).requestEmailVerification(e.requestVerifyEmailRequest, t).then(e => e(this.axios, this.basePath))
            }
            requestResetPassword(e, t) {
                return j(this.configuration).requestResetPassword(e.requestResetPasswordRequest, t).then(e => e(this.axios, this.basePath))
            }
            resetPassword(e, t) {
                return j(this.configuration).resetPassword(e.resetPasswordRequest, t).then(e => e(this.axios, this.basePath))
            }
            signupEmailPassword(e, t) {
                return j(this.configuration).signupEmailPassword(e.signupRequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            thirdParty(e, t) {
                return j(this.configuration).thirdParty(e.thirdPartyOAuthRequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            unlinkEmail(e, t) {
                return j(this.configuration).unlinkEmail(e.unlinkEmailRequest, t).then(e => e(this.axios, this.basePath))
            }
            unlinkOAuth(e, t) {
                return j(this.configuration).unlinkOAuth(e.unlinkOAuthRequest, t).then(e => e(this.axios, this.basePath))
            }
            unlinkSIWE(e, t) {
                return j(this.configuration).unlinkSIWE(e.sIWERequest, t).then(e => e(this.axios, this.basePath))
            }
            verifyEmail(e, t) {
                return j(this.configuration).verifyEmail(e.verifyEmailRequest, t).then(e => e(this.axios, this.basePath))
            }
            verifyOAuthToken(e, t) {
                return j(this.configuration).verifyOAuthToken(e.authenticateOAuthRequest, t).then(e => e(this.axios, this.basePath))
            }
        }
        let A = function(e) {
            let t = {
                createSession: async (t, r, s = {}) => {
                    let n;
                    f("createSession", "createSessionRequest", t);
                    let a = new URL("/v1/sessions", p);
                    e && (n = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...n,
                            ...s
                        },
                        i = {};
                    await h(i, e), null != r && (i["X-Behalf-Of-Project"] = String(r)), i["Content-Type"] = "application/json", g(a, {});
                    let l = n && n.headers ? n.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...s.headers
                    }, o.data = m(t, o, e), {
                        url: y(a),
                        options: o
                    }
                },
                getPlayerSessions: async (t, r, s, n, a, o = {}) => {
                    let i;
                    f("getPlayerSessions", "player", t);
                    let l = new URL("/v1/sessions", p);
                    e && (i = e.baseOptions);
                    let c = {
                            method: "GET",
                            ...i,
                            ...o
                        },
                        u = {},
                        d = {};
                    await h(u, e), void 0 !== r && (d.limit = r), void 0 !== s && (d.skip = s), void 0 !== n && (d.order = n), void 0 !== t && (d.player = t), a && (d.expand = a), g(l, d);
                    let m = i && i.headers ? i.headers : {};
                    return c.headers = {
                        ...u,
                        ...m,
                        ...o.headers
                    }, {
                        url: y(l),
                        options: c
                    }
                },
                getSession: async (t, r, s = {}) => {
                    let n;
                    f("getSession", "id", t);
                    let a = new URL("/v1/sessions/{id}".replace("{id}", encodeURIComponent(String(t))), p);
                    e && (n = e.baseOptions);
                    let o = {
                            method: "GET",
                            ...n,
                            ...s
                        },
                        i = {},
                        l = {};
                    await h(i, e), r && (l.expand = r), g(a, l);
                    let c = n && n.headers ? n.headers : {};
                    return o.headers = {
                        ...i,
                        ...c,
                        ...s.headers
                    }, {
                        url: y(a),
                        options: o
                    }
                },
                revokeSession: async (t, r, s = {}) => {
                    let n;
                    f("revokeSession", "revokeSessionRequest", t);
                    let a = new URL("/v1/sessions/revoke", p);
                    e && (n = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...n,
                            ...s
                        },
                        i = {};
                    await h(i, e), null != r && (i["X-Behalf-Of-Project"] = String(r)), i["Content-Type"] = "application/json", g(a, {});
                    let l = n && n.headers ? n.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...s.headers
                    }, o.data = m(t, o, e), {
                        url: y(a),
                        options: o
                    }
                },
                signatureSession: async (t, r, s = {}) => {
                    let n;
                    f("signatureSession", "id", t), f("signatureSession", "signatureRequest", r);
                    let a = new URL("/v1/sessions/{id}/signature".replace("{id}", encodeURIComponent(String(t))), p);
                    e && (n = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...n,
                            ...s
                        },
                        i = {};
                    await h(i, e), await h(i, e), i["Content-Type"] = "application/json", g(a, {});
                    let l = n && n.headers ? n.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...s.headers
                    }, o.data = m(r, o, e), {
                        url: y(a),
                        options: o
                    }
                }
            };
            return {
                createSession: async (r, s, n) => E(await t.createSession(r, s, n), o.default, c, e),
                getPlayerSessions: async (r, s, n, a, i, l) => E(await t.getPlayerSessions(r, s, n, a, i, l), o.default, c, e),
                getSession: async (r, s, n) => E(await t.getSession(r, s, n), o.default, c, e),
                revokeSession: async (r, s, n) => E(await t.revokeSession(r, s, n), o.default, c, e),
                signatureSession: async (r, s, n) => E(await t.signatureSession(r, s, n), o.default, c, e)
            }
        };
        class T extends u {
            createSession(e, t) {
                return A(this.configuration).createSession(e.createSessionRequest, e.xBehalfOfProject, t).then(e => e(this.axios, this.basePath))
            }
            getPlayerSessions(e, t) {
                return A(this.configuration).getPlayerSessions(e.player, e.limit, e.skip, e.order, e.expand, t).then(e => e(this.axios, this.basePath))
            }
            getSession(e, t) {
                return A(this.configuration).getSession(e.id, e.expand, t).then(e => e(this.axios, this.basePath))
            }
            revokeSession(e, t) {
                return A(this.configuration).revokeSession(e.revokeSessionRequest, e.xBehalfOfProject, t).then(e => e(this.axios, this.basePath))
            }
            signatureSession(e, t) {
                return A(this.configuration).signatureSession(e.id, e.signatureRequest, t).then(e => e(this.axios, this.basePath))
            }
        }
        let v = function(e) {
            let t = {
                createTransactionIntent: async (t, r, s = {}) => {
                    let n;
                    f("createTransactionIntent", "createTransactionIntentRequest", t);
                    let a = new URL("/v1/transaction_intents", p);
                    e && (n = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...n,
                            ...s
                        },
                        i = {};
                    await h(i, e), null != r && (i["X-Behalf-Of-Project"] = String(r)), i["Content-Type"] = "application/json", g(a, {});
                    let l = n && n.headers ? n.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...s.headers
                    }, o.data = m(t, o, e), {
                        url: y(a),
                        options: o
                    }
                },
                estimateTransactionIntentCost: async (t, r = {}) => {
                    let s;
                    f("estimateTransactionIntentCost", "createTransactionIntentRequest", t);
                    let n = new URL("/v1/transaction_intents/estimate_gas_cost", p);
                    e && (s = e.baseOptions);
                    let a = {
                            method: "POST",
                            ...s,
                            ...r
                        },
                        o = {};
                    await h(o, e), o["Content-Type"] = "application/json", g(n, {});
                    let i = s && s.headers ? s.headers : {};
                    return a.headers = {
                        ...o,
                        ...i,
                        ...r.headers
                    }, a.data = m(t, a, e), {
                        url: y(n),
                        options: a
                    }
                },
                getTransactionIntent: async (t, r, s = {}) => {
                    let n;
                    f("getTransactionIntent", "id", t);
                    let a = new URL("/v1/transaction_intents/{id}".replace("{id}", encodeURIComponent(String(t))), p);
                    e && (n = e.baseOptions);
                    let o = {
                            method: "GET",
                            ...n,
                            ...s
                        },
                        i = {},
                        l = {};
                    await h(i, e), r && (l.expand = r), g(a, l);
                    let c = n && n.headers ? n.headers : {};
                    return o.headers = {
                        ...i,
                        ...c,
                        ...s.headers
                    }, {
                        url: y(a),
                        options: o
                    }
                },
                getTransactionIntents: async (t, r, s, n, a, o, i, l, c, u = {}) => {
                    let d, f = new URL("/v1/transaction_intents", p);
                    e && (d = e.baseOptions);
                    let m = {
                            method: "GET",
                            ...d,
                            ...u
                        },
                        E = {},
                        w = {};
                    await h(E, e), void 0 !== t && (w.limit = t), void 0 !== r && (w.skip = r), void 0 !== s && (w.order = s), n && (w.expand = n), void 0 !== a && (w.chainId = a), o && (w.account = o), i && (w.player = i), void 0 !== l && (w.status = l), c && (w.policy = c), g(f, w);
                    let R = d && d.headers ? d.headers : {};
                    return m.headers = {
                        ...E,
                        ...R,
                        ...u.headers
                    }, {
                        url: y(f),
                        options: m
                    }
                },
                signature: async (t, r, s = {}) => {
                    let n;
                    f("signature", "id", t), f("signature", "signatureRequest", r);
                    let a = new URL("/v1/transaction_intents/{id}/signature".replace("{id}", encodeURIComponent(String(t))), p);
                    e && (n = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...n,
                            ...s
                        },
                        i = {};
                    await h(i, e), await h(i, e), i["Content-Type"] = "application/json", g(a, {});
                    let l = n && n.headers ? n.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...s.headers
                    }, o.data = m(r, o, e), {
                        url: y(a),
                        options: o
                    }
                }
            };
            return {
                createTransactionIntent: async (r, s, n) => E(await t.createTransactionIntent(r, s, n), o.default, c, e),
                estimateTransactionIntentCost: async (r, s) => E(await t.estimateTransactionIntentCost(r, s), o.default, c, e),
                getTransactionIntent: async (r, s, n) => E(await t.getTransactionIntent(r, s, n), o.default, c, e),
                getTransactionIntents: async (r, s, n, a, i, l, u, d, p, f) => E(await t.getTransactionIntents(r, s, n, a, i, l, u, d, p, f), o.default, c, e),
                signature: async (r, s, n) => E(await t.signature(r, s, n), o.default, c, e)
            }
        };
        class b extends u {
            createTransactionIntent(e, t) {
                return v(this.configuration).createTransactionIntent(e.createTransactionIntentRequest, e.xBehalfOfProject, t).then(e => e(this.axios, this.basePath))
            }
            estimateTransactionIntentCost(e, t) {
                return v(this.configuration).estimateTransactionIntentCost(e.createTransactionIntentRequest, t).then(e => e(this.axios, this.basePath))
            }
            getTransactionIntent(e, t) {
                return v(this.configuration).getTransactionIntent(e.id, e.expand, t).then(e => e(this.axios, this.basePath))
            }
            getTransactionIntents(e = {}, t) {
                return v(this.configuration).getTransactionIntents(e.limit, e.skip, e.order, e.expand, e.chainId, e.account, e.player, e.status, e.policy, t).then(e => e(this.axios, this.basePath))
            }
            signature(e, t) {
                return v(this.configuration).signature(e.id, e.signatureRequest, t).then(e => e(this.axios, this.basePath))
            }
        }
        class O {
            apiKey;
            username;
            password;
            accessToken;
            basePath;
            baseOptions;
            formDataCtor;
            constructor(e = {}) {
                this.apiKey = e.apiKey, this.username = e.username, this.password = e.password, this.accessToken = e.accessToken, this.basePath = e.basePath, this.baseOptions = e.baseOptions, this.formDataCtor = e.formDataCtor
            }
            isJsonMime(e) {
                let t = RegExp("^(application/json|[^;/     ]+/[^;/     ]+[+]json)[     ]*(;.*)?$", "i");
                return null !== e && (t.test(e) || "application/json-patch+json" === e.toLowerCase())
            }
        }
        let S = ({
            basePath: e,
            accessToken: t
        }) => {
            if (!e.trim()) throw Error("basePath can not be empty");
            return new O({
                basePath: e,
                accessToken: t
            })
        };
        class C {
            config;
            transactionIntentsApi;
            accountsApi;
            sessionsApi;
            authenticationApi;
            constructor(e) {
                let t = o.default.create();
                (0, l.default)(t, {
                    retries: 3,
                    retryDelay: l.default.exponentialDelay,
                    retryCondition: l.default.isRetryableError
                });
                let r = {
                    basePath: e.basePath,
                    accessToken: e.accessToken
                };
                this.config = {
                    backend: S(r)
                }, this.transactionIntentsApi = new b(this.config.backend, void 0, t), this.accountsApi = new R(this.config.backend, void 0, t), this.sessionsApi = new T(this.config.backend, void 0, t), this.authenticationApi = new I(this.config.backend, void 0, t)
            }
        }
    }, {
        axios: "jhAcT",
        "axios-retry": "8va09",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "8va09": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "namespace", () => i), n.export(r, "isNetworkError", () => l), n.export(r, "isRetryableError", () => d), n.export(r, "isSafeRequestError", () => p), n.export(r, "isIdempotentRequestError", () => f), n.export(r, "isNetworkOrIdempotentRequestError", () => h), n.export(r, "retryAfter", () => g), n.export(r, "exponentialDelay", () => m), n.export(r, "linearDelay", () => y), n.export(r, "DEFAULT_OPTIONS", () => E);
        var a = e("is-retry-allowed"),
            o = n.interopDefault(a);
        let i = "axios-retry";

        function l(e) {
            return !(e.response || !e.code || ["ERR_CANCELED", "ECONNABORTED"].includes(e.code)) && (0, o.default)(e)
        }
        let c = ["get", "head", "options"],
            u = c.concat(["put", "delete"]);

        function d(e) {
            return "ECONNABORTED" !== e.code && (!e.response || 429 === e.response.status || e.response.status >= 500 && e.response.status <= 599)
        }

        function p(e) {
            return !!e.config?.method && d(e) && -1 !== c.indexOf(e.config.method)
        }

        function f(e) {
            return !!e.config?.method && d(e) && -1 !== u.indexOf(e.config.method)
        }

        function h(e) {
            return l(e) || f(e)
        }

        function g(e) {
            let t = e?.response?.headers["retry-after"];
            if (!t) return 0;
            let r = 1e3 * (Number(t) || 0);
            return 0 === r && (r = (new Date(t).valueOf() || 0) - Date.now()), Math.max(0, r)
        }

        function m(e = 0, t, r = 100) {
            let s = Math.max(2 ** e * r, g(t)),
                n = .2 * s * Math.random();
            return s + n
        }

        function y(e = 100) {
            return (t = 0, r) => Math.max(t * e, g(r))
        }
        let E = {
            retries: 3,
            retryCondition: h,
            retryDelay: function(e = 0, t) {
                return Math.max(0, g(t))
            },
            shouldResetTimeout: !1,
            onRetry: () => {},
            onMaxRetryTimesExceeded: () => {},
            validateResponse: null
        };

        function w(e, t, r = !1) {
            var s;
            let n = (s = t || {}, {
                ...E,
                ...s,
                ...e[i]
            });
            return n.retryCount = n.retryCount || 0, (!n.lastRequestTime || r) && (n.lastRequestTime = Date.now()), e[i] = n, n
        }
        async function R(e, t) {
            let {
                retries: r,
                retryCondition: s
            } = e, n = (e.retryCount || 0) < r && s(t);
            if ("object" == typeof n) try {
                let e = await n;
                return !1 !== e
            } catch (e) {
                return !1
            }
            return n
        }
        async function j(e, t, r, s) {
            t.retryCount += 1;
            let {
                retryDelay: n,
                shouldResetTimeout: a,
                onRetry: o
            } = t, i = n(t.retryCount, r);
            if (e.defaults.agent === s.agent && delete s.agent, e.defaults.httpAgent === s.httpAgent && delete s.httpAgent, e.defaults.httpsAgent === s.httpsAgent && delete s.httpsAgent, !a && s.timeout && t.lastRequestTime) {
                let e = Date.now() - t.lastRequestTime,
                    n = s.timeout - e - i;
                if (n <= 0) return Promise.reject(r);
                s.timeout = n
            }
            return (s.transformRequest = [e => e], await o(t.retryCount, r, s), s.signal?.aborted) ? Promise.resolve(e(s)) : new Promise(t => {
                let r = () => {
                        clearTimeout(n), t(e(s))
                    },
                    n = setTimeout(() => {
                        t(e(s)), s.signal?.removeEventListener && s.signal.removeEventListener("abort", r)
                    }, i);
                s.signal?.addEventListener && s.signal.addEventListener("abort", r, {
                    once: !0
                })
            })
        }
        async function I(e, t) {
            e.retryCount >= e.retries && await e.onMaxRetryTimesExceeded(t, e.retryCount)
        }
        let A = (e, t) => ({
            requestInterceptorId: e.interceptors.request.use(e => (w(e, t, !0), e[i]?.validateResponse && (e.validateStatus = () => !1), e)),
            responseInterceptorId: e.interceptors.response.use(null, async r => {
                let {
                    config: s
                } = r;
                if (!s) return Promise.reject(r);
                let n = w(s, t);
                return r.response && n.validateResponse?.(r.response) ? r.response : await R(n, r) ? j(e, n, r, s) : (await I(n, r), Promise.reject(r))
            })
        });
        A.isNetworkError = l, A.isSafeRequestError = p, A.isIdempotentRequestError = f, A.isNetworkOrIdempotentRequestError = h, A.exponentialDelay = m, A.linearDelay = y, A.isRetryableError = d, r.default = A
    }, {
        "is-retry-allowed": "gqdKH",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    gqdKH: [function(e, t, r, s) {
        "use strict";
        let n = new Set(["ENOTFOUND", "ENETUNREACH", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_CRL", "UNABLE_TO_DECRYPT_CERT_SIGNATURE", "UNABLE_TO_DECRYPT_CRL_SIGNATURE", "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY", "CERT_SIGNATURE_FAILURE", "CRL_SIGNATURE_FAILURE", "CERT_NOT_YET_VALID", "CERT_HAS_EXPIRED", "CRL_NOT_YET_VALID", "CRL_HAS_EXPIRED", "ERROR_IN_CERT_NOT_BEFORE_FIELD", "ERROR_IN_CERT_NOT_AFTER_FIELD", "ERROR_IN_CRL_LAST_UPDATE_FIELD", "ERROR_IN_CRL_NEXT_UPDATE_FIELD", "OUT_OF_MEM", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "UNABLE_TO_VERIFY_LEAF_SIGNATURE", "CERT_CHAIN_TOO_LONG", "CERT_REVOKED", "INVALID_CA", "PATH_LENGTH_EXCEEDED", "INVALID_PURPOSE", "CERT_UNTRUSTED", "CERT_REJECTED", "HOSTNAME_MISMATCH"]);
        t.exports = e => !n.has(e && e.code)
    }, {}],
    i2ayE: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "LazyStorage", () => i);
        var a = e("./storage.js"),
            o = e("../core/errors/openfortError.js");
        class i {
            realStorage = null;
            customStorage;
            constructor(e) {
                this.customStorage = e
            }
            getRealStorage() {
                if (!this.realStorage)
                    if (this.customStorage) this.realStorage = this.customStorage;
                    else {
                        if ("undefined" == typeof window || "undefined" == typeof localStorage) throw new(0, o.OpenfortError)("Storage not available. Please provide custom storage or use in browser environment.", o.OpenfortErrorType.INVALID_CONFIGURATION);
                        this.realStorage = new(0, a.StorageImplementation)(localStorage)
                    } return this.realStorage
            }
            async get(e) {
                return this.getRealStorage().get(e)
            }
            save(e, t) {
                this.getRealStorage().save(e, t)
            }
            remove(e) {
                this.getRealStorage().remove(e)
            }
            flush() {
                this.getRealStorage().flush()
            }
        }
    }, {
        "./storage.js": "O8SR8",
        "../core/errors/openfortError.js": "3xESR",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    O8SR8: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "StorageImplementation", () => o);
        var a = e("./istorage.js");
        class o {
            storage;
            constructor(e) {
                this.storage = e
            }
            async get(e) {
                return Promise.resolve(this.storage.getItem(e))
            }
            save(e, t) {
                this.storage.setItem(e, t)
            }
            remove(e) {
                this.storage.removeItem(e)
            }
            flush() {
                for (let e of Object.values(a.StorageKeys)) this.storage.removeItem(e)
            }
        }
    }, {
        "./istorage.js": "8EpXG",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    aurKi: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "AuthManager", () => m);
        var a = e("jose"),
            o = e("../utils/debug.js"),
            i = e("../core/errors/openfortError.js"),
            l = e("../core/errors/sentry.js"),
            c = e("../types/types.js"),
            u = e("../storage/istorage.js"),
            d = e("../utils/crypto.js");
        async function p(e) {
            let t = (new TextEncoder).encode(e);
            return new Uint8Array(await (0, d.cryptoDigest)("SHA-256", t))
        }

        function f(e) {
            let t = new Uint8Array(e);
            return crypto.getRandomValues(t), t
        }
        class h {
            decodedPayload;
            value;
            constructor(e) {
                this.value = e;
                try {
                    this.decodedPayload = (0, a.decodeJwt)(e)
                } catch (e) {
                    throw new(0, i.OpenfortError)("Invalid token format", i.OpenfortErrorType.AUTHENTICATION_ERROR)
                }
            }
            get subject() {
                return this.decodedPayload.sub
            }
            get expiration() {
                return this.decodedPayload.exp
            }
            get issuer() {
                return this.decodedPayload.iss
            }
            isExpired(e = 30) {
                return !this.expiration || ((0, o.debugLog)("Token expiration:", 1e3 * (this.expiration - e), "Current time:", Date.now()), Date.now() >= 1e3 * (this.expiration - e))
            }
            static parse(e) {
                try {
                    return new h(e)
                } catch {
                    return null
                }
            }
        }
        class g {
            storage;
            constructor(e) {
                this.storage = e
            }
            async savePKCEData(e) {
                this.storage.save(u.StorageKeys.PKCE_STATE, e.state), this.storage.save(u.StorageKeys.PKCE_VERIFIER, e.verifier)
            }
            async getPKCEData() {
                let e = await this.storage.get(u.StorageKeys.PKCE_STATE),
                    t = await this.storage.get(u.StorageKeys.PKCE_VERIFIER);
                return e && t ? {
                    state: e,
                    verifier: t
                } : null
            }
            async clearPKCEData() {
                this.storage.remove(u.StorageKeys.PKCE_STATE), this.storage.remove(u.StorageKeys.PKCE_VERIFIER)
            }
        }
        class m {
            deviceCredentialsManager;
            backendApiClientsInstance;
            publishableKeyInstance;
            constructor(e) {
                this.deviceCredentialsManager = new g(e)
            }
            setBackendApiClients(e, t) {
                this.backendApiClientsInstance = e, this.publishableKeyInstance = t
            }
            get backendApiClients() {
                if (!this.backendApiClientsInstance) throw new(0, i.OpenfortError)("Backend API clients not initialized", i.OpenfortErrorType.INTERNAL_ERROR);
                return this.backendApiClientsInstance
            }
            get publishableKey() {
                if (!this.publishableKeyInstance) throw new(0, i.OpenfortError)("Publishable key not initialized", i.OpenfortErrorType.INTERNAL_ERROR);
                return this.publishableKeyInstance
            }
            async initOAuth(e, t, r) {
                let s = t?.usePooling ?? !1,
                    n = t?.skipBrowserRedirect ?? !1,
                    {
                        usePooling: a,
                        skipBrowserRedirect: o,
                        ...l
                    } = t || {},
                    c = {
                        oAuthInitRequest: {
                            provider: e,
                            options: l,
                            usePooling: s
                        }
                    },
                    u = await (0, i.withOpenfortError)(async () => this.backendApiClients.authenticationApi.initOAuth(c, m.getEcosystemGameOptsOrUndefined(r)), {
                        default: i.OpenfortErrorType.AUTHENTICATION_ERROR
                    });
                return "undefined" == typeof window || n || window.location.assign(u.data.url), {
                    url: u.data.url,
                    key: u.data.key
                }
            }
            async registerGuest() {
                let e = {};
                return (0, i.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.registerGuest(e)).data, {
                    default: i.OpenfortErrorType.USER_REGISTRATION_ERROR
                })
            }
            async poolOAuth(e) {
                let t = {
                    key: e
                };
                for (let e = 0; e < 600; e++) try {
                    let e = await (0, i.withOpenfortError)(async () => this.backendApiClients.authenticationApi.poolOAuth(t), {
                        default: i.OpenfortErrorType.AUTHENTICATION_ERROR
                    });
                    if (200 === e.status) return e.data
                } catch (e) {
                    if (e.response && 404 === e.response.status) {
                        await new Promise(e => {
                            setTimeout(e, 500)
                        });
                        continue
                    }
                    throw e
                }
                throw Error("Failed to pool OAuth, try again later")
            }
            async loginWithIdToken(e, t, r) {
                let s = {
                    loginWithIdTokenRequest: {
                        provider: e,
                        token: t
                    }
                };
                return (0, i.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.loginWithIdToken(s, m.getEcosystemGameOptsOrUndefined(r))).data, {
                    default: i.OpenfortErrorType.AUTHENTICATION_ERROR,
                    401: i.OpenfortErrorType.AUTHENTICATION_ERROR,
                    403: i.OpenfortErrorType.USER_NOT_AUTHORIZED_ON_ECOSYSTEM
                }, e => {
                    l.sentry.captureAxiosError("loginWithIdToken", e)
                })
            }
            async authenticateThirdParty(e, t, r, s) {
                let n = {
                    thirdPartyOAuthRequest: {
                        provider: e,
                        token: t,
                        tokenType: r
                    }
                };
                return (0, i.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.thirdParty(n, m.getEcosystemGameOptsOrUndefined(s))).data, {
                    default: i.OpenfortErrorType.AUTHENTICATION_ERROR,
                    401: i.OpenfortErrorType.AUTHENTICATION_ERROR,
                    403: i.OpenfortErrorType.USER_NOT_AUTHORIZED_ON_ECOSYSTEM
                }, e => {
                    l.sentry.captureAxiosError("authenticateThirdParty", e)
                })
            }
            async initSIWE(e, t) {
                let r = {
                        sIWERequest: {
                            address: e
                        }
                    },
                    s = await (0, i.withOpenfortError)(async () => this.backendApiClients.authenticationApi.initSIWE(r, m.getEcosystemGameOptsOrUndefined(t)), {
                        default: i.OpenfortErrorType.AUTHENTICATION_ERROR
                    });
                return {
                    address: s.data.address,
                    nonce: s.data.nonce,
                    expiresAt: s.data.expiresAt
                }
            }
            async authenticateSIWE(e, t, r, s) {
                let n = {
                    sIWEAuthenticateRequest: {
                        signature: e,
                        message: t,
                        walletClientType: r,
                        connectorType: s
                    }
                };
                return (0, i.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.authenticateSIWE(n)).data, {
                    default: i.OpenfortErrorType.AUTHENTICATION_ERROR,
                    401: i.OpenfortErrorType.AUTHENTICATION_ERROR,
                    403: i.OpenfortErrorType.USER_NOT_AUTHORIZED_ON_ECOSYSTEM
                }, e => {
                    l.sentry.captureAxiosError("authenticateSIWE", e)
                })
            }
            static getEcosystemGameOptsOrUndefined(e) {
                if (e) return {
                    headers: {
                        "x-game": e
                    }
                }
            }
            async loginEmailPassword(e, t, r) {
                let s = {
                    loginRequest: {
                        email: e,
                        password: t
                    }
                };
                return (0, i.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.loginEmailPassword(s, m.getEcosystemGameOptsOrUndefined(r))).data, {
                    default: i.OpenfortErrorType.AUTHENTICATION_ERROR,
                    401: i.OpenfortErrorType.AUTHENTICATION_ERROR,
                    403: i.OpenfortErrorType.USER_NOT_AUTHORIZED_ON_ECOSYSTEM
                }, e => {
                    l.sentry.captureAxiosError("loginEmailPassword", e)
                })
            }
            async requestResetPassword(e, t) {
                let r = f(32),
                    s = a.base64url.encode(r),
                    n = await p(s),
                    o = a.base64url.encode(n),
                    l = f(32),
                    u = a.base64url.encode(l);
                await this.deviceCredentialsManager.savePKCEData({
                    state: u,
                    verifier: s
                });
                let d = {
                    requestResetPasswordRequest: {
                        email: e,
                        redirectUrl: t,
                        challenge: {
                            codeChallenge: o,
                            method: c.CodeChallengeMethodEnum.S256
                        }
                    }
                };
                await (0, i.withOpenfortError)(async () => {
                    await this.backendApiClients.authenticationApi.requestResetPassword(d)
                }, {
                    default: i.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async resetPassword(e, t, r) {
                return (0, i.withOpenfortError)(async () => {
                    let s = await this.deviceCredentialsManager.getPKCEData();
                    if (!s) throw Error("No code verifier or state for PKCE");
                    let n = {
                        resetPasswordRequest: {
                            email: e,
                            password: t,
                            state: r,
                            challenge: {
                                codeVerifier: s.verifier
                            }
                        }
                    };
                    await this.backendApiClients.authenticationApi.resetPassword(n)
                }, {
                    default: i.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async requestEmailVerification(e, t) {
                let r = f(32),
                    s = a.base64url.encode(r),
                    n = await p(s),
                    o = a.base64url.encode(n),
                    l = f(32),
                    u = a.base64url.encode(l);
                await this.deviceCredentialsManager.savePKCEData({
                    state: u,
                    verifier: s
                });
                let d = {
                    requestVerifyEmailRequest: {
                        email: e,
                        redirectUrl: t,
                        challenge: {
                            codeChallenge: o,
                            method: c.CodeChallengeMethodEnum.S256
                        }
                    }
                };
                await (0, i.withOpenfortError)(async () => {
                    await this.backendApiClients.authenticationApi.requestEmailVerification(d)
                }, {
                    default: i.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async verifyEmail(e, t) {
                return (0, i.withOpenfortError)(async () => {
                    let r = await this.deviceCredentialsManager.getPKCEData();
                    if (!r) throw Error("No code verifier or state for PKCE");
                    let s = {
                        verifyEmailRequest: {
                            email: e,
                            token: t,
                            challenge: {
                                codeVerifier: r.verifier
                            }
                        }
                    };
                    await this.backendApiClients.authenticationApi.verifyEmail(s)
                }, {
                    default: i.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async signupEmailPassword(e, t, r, s) {
                let n = {
                    signupRequest: {
                        email: e,
                        password: t,
                        name: r
                    }
                };
                return (0, i.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.signupEmailPassword(n, m.getEcosystemGameOptsOrUndefined(s))).data, {
                    default: i.OpenfortErrorType.USER_REGISTRATION_ERROR,
                    401: i.OpenfortErrorType.USER_REGISTRATION_ERROR,
                    403: i.OpenfortErrorType.USER_NOT_AUTHORIZED_ON_ECOSYSTEM
                }, e => {
                    l.sentry.captureAxiosError("signupEmailPassword", e)
                })
            }
            async validateCredentials(e, t) {
                if (!e.refreshToken) throw new(0, i.OpenfortError)("No refresh token provided", i.OpenfortErrorType.AUTHENTICATION_ERROR);
                if (t) return this.refreshTokens(e.refreshToken, t);
                (0, o.debugLog)("Validating credentials with token:", e.token);
                let r = h.parse(e.token);
                return r ? r.isExpired() ? ((0, o.debugLog)("Token expired, refreshing..."), this.refreshTokens(e.refreshToken)) : {
                    player: r.subject,
                    accessToken: e.token,
                    refreshToken: e.refreshToken
                } : this.refreshTokens(e.refreshToken)
            }
            async refreshTokens(e, t) {
                let r = {
                    refreshTokenRequest: {
                        refreshToken: e,
                        forceRefresh: t
                    }
                };
                return (0, i.withOpenfortError)(async () => {
                    let e = await this.backendApiClients.authenticationApi.refresh(r);
                    return {
                        player: e.data.player.id,
                        accessToken: e.data.token,
                        refreshToken: e.data.refreshToken
                    }
                }, {
                    default: i.OpenfortErrorType.REFRESH_TOKEN_ERROR
                })
            }
            async logout(e, t) {
                let r = {
                    logoutRequest: {
                        refreshToken: t
                    }
                };
                return (0, i.withOpenfortError)(async () => {
                    await this.backendApiClients.authenticationApi.logout(r, {
                        headers: {
                            authorization: `Bearer ${this.publishableKey}`,
                            "x-player-token": e
                        }
                    })
                }, {
                    default: i.OpenfortErrorType.LOGOUT_ERROR
                })
            }
            async getUser(e) {
                return (0, i.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.me({
                    headers: {
                        authorization: `Bearer ${this.publishableKey}`,
                        "x-player-token": e.token,
                        "x-auth-provider": e.thirdPartyProvider,
                        "x-token-type": e.thirdPartyTokenType
                    }
                })).data, {
                    default: i.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async linkThirdParty(e, t, r, s, n) {
                let a = {
                    thirdPartyLinkRequest: {
                        provider: t,
                        token: r,
                        tokenType: s
                    }
                };
                return (0, i.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.linkThirdParty(a, {
                    headers: {
                        authorization: `Bearer ${this.publishableKey}`,
                        "x-player-token": e.token,
                        "x-auth-provider": e.thirdPartyProvider || void 0,
                        "x-token-type": e.thirdPartyTokenType || void 0,
                        "x-game": n || void 0
                    }
                })).data, {
                    default: i.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async linkOAuth(e, t, r, s) {
                let n = r?.skipBrowserRedirect ?? !1;
                delete r?.skipBrowserRedirect;
                let a = {
                        oAuthInitRequest: {
                            provider: t,
                            options: r,
                            usePooling: r?.usePooling || !1
                        }
                    },
                    o = await (0, i.withOpenfortError)(async () => this.backendApiClients.authenticationApi.linkOAuth(a, {
                        headers: {
                            authorization: `Bearer ${this.publishableKey}`,
                            "x-player-token": e.token,
                            "x-auth-provider": e.thirdPartyProvider || void 0,
                            "x-token-type": e.thirdPartyTokenType || void 0,
                            "x-game": s || void 0
                        }
                    }), {
                        default: i.OpenfortErrorType.AUTHENTICATION_ERROR
                    });
                return "undefined" == typeof window || n || window.location.assign(o.data.url), {
                    url: o.data.url,
                    key: o.data.key
                }
            }
            async unlinkOAuth(e, t) {
                let r = {
                    unlinkOAuthRequest: {
                        provider: e
                    }
                };
                return (0, i.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.unlinkOAuth(r, {
                    headers: {
                        authorization: `Bearer ${this.publishableKey}`,
                        "x-player-token": t
                    }
                })).data, {
                    default: i.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async unlinkWallet(e, t) {
                let r = {
                    sIWERequest: {
                        address: e
                    }
                };
                return (0, i.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.unlinkSIWE(r, {
                    headers: {
                        authorization: `Bearer ${this.publishableKey}`,
                        "x-player-token": t
                    }
                })).data, {
                    default: i.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async linkWallet(e, t, r, s, n) {
                let a = {
                    sIWEAuthenticateRequest: {
                        signature: e,
                        message: t,
                        walletClientType: r,
                        connectorType: s
                    }
                };
                return (0, i.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.linkSIWE(a, {
                    headers: {
                        authorization: `Bearer ${this.publishableKey}`,
                        "x-player-token": n
                    }
                })).data, {
                    default: i.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async unlinkEmail(e, t) {
                let r = {
                    unlinkEmailRequest: {
                        email: e
                    }
                };
                return (0, i.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.unlinkEmail(r, {
                    headers: {
                        authorization: `Bearer ${this.publishableKey}`,
                        "x-player-token": t
                    }
                })).data, {
                    default: i.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async linkEmail(e, t, r, s) {
                let n = {
                    loginRequest: {
                        email: e,
                        password: t
                    }
                };
                return (0, i.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.linkEmail(n, {
                    headers: {
                        authorization: `Bearer ${this.publishableKey}`,
                        "x-player-token": r,
                        "x-game": s || void 0
                    }
                })).data, {
                    default: i.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
        }
    }, {
        jose: "kXgGE",
        "../utils/debug.js": "8822a",
        "../core/errors/openfortError.js": "3xESR",
        "../core/errors/sentry.js": "913SB",
        "../types/types.js": "fUPIN",
        "../storage/istorage.js": "8EpXG",
        "../utils/crypto.js": "3dq9D",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    kXgGE: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "compactDecrypt", () => a.compactDecrypt), n.export(r, "flattenedDecrypt", () => o.flattenedDecrypt), n.export(r, "generalDecrypt", () => i.generalDecrypt), n.export(r, "GeneralEncrypt", () => l.GeneralEncrypt), n.export(r, "compactVerify", () => c.compactVerify), n.export(r, "flattenedVerify", () => u.flattenedVerify), n.export(r, "generalVerify", () => d.generalVerify), n.export(r, "jwtVerify", () => p.jwtVerify), n.export(r, "jwtDecrypt", () => f.jwtDecrypt), n.export(r, "CompactEncrypt", () => h.CompactEncrypt), n.export(r, "FlattenedEncrypt", () => g.FlattenedEncrypt), n.export(r, "CompactSign", () => m.CompactSign), n.export(r, "FlattenedSign", () => y.FlattenedSign), n.export(r, "GeneralSign", () => E.GeneralSign), n.export(r, "SignJWT", () => w.SignJWT), n.export(r, "EncryptJWT", () => R.EncryptJWT), n.export(r, "calculateJwkThumbprint", () => j.calculateJwkThumbprint), n.export(r, "calculateJwkThumbprintUri", () => j.calculateJwkThumbprintUri), n.export(r, "EmbeddedJWK", () => I.EmbeddedJWK), n.export(r, "createLocalJWKSet", () => A.createLocalJWKSet), n.export(r, "createRemoteJWKSet", () => T.createRemoteJWKSet), n.export(r, "jwksCache", () => T.jwksCache), n.export(r, "experimental_jwksCache", () => T.experimental_jwksCache), n.export(r, "UnsecuredJWT", () => v.UnsecuredJWT), n.export(r, "exportPKCS8", () => b.exportPKCS8), n.export(r, "exportSPKI", () => b.exportSPKI), n.export(r, "exportJWK", () => b.exportJWK), n.export(r, "importSPKI", () => O.importSPKI), n.export(r, "importPKCS8", () => O.importPKCS8), n.export(r, "importX509", () => O.importX509), n.export(r, "importJWK", () => O.importJWK), n.export(r, "decodeProtectedHeader", () => S.decodeProtectedHeader), n.export(r, "decodeJwt", () => C.decodeJwt), n.export(r, "errors", () => N), n.export(r, "generateKeyPair", () => x.generateKeyPair), n.export(r, "generateSecret", () => P.generateSecret), n.export(r, "base64url", () => _), n.export(r, "cryptoRuntime", () => k.default);
        var a = e("./jwe/compact/decrypt.js"),
            o = e("./jwe/flattened/decrypt.js"),
            i = e("./jwe/general/decrypt.js"),
            l = e("./jwe/general/encrypt.js"),
            c = e("./jws/compact/verify.js"),
            u = e("./jws/flattened/verify.js"),
            d = e("./jws/general/verify.js"),
            p = e("./jwt/verify.js"),
            f = e("./jwt/decrypt.js"),
            h = e("./jwe/compact/encrypt.js"),
            g = e("./jwe/flattened/encrypt.js"),
            m = e("./jws/compact/sign.js"),
            y = e("./jws/flattened/sign.js"),
            E = e("./jws/general/sign.js"),
            w = e("./jwt/sign.js"),
            R = e("./jwt/encrypt.js"),
            j = e("./jwk/thumbprint.js"),
            I = e("./jwk/embedded.js"),
            A = e("./jwks/local.js"),
            T = e("./jwks/remote.js"),
            v = e("./jwt/unsecured.js"),
            b = e("./key/export.js"),
            O = e("./key/import.js"),
            S = e("./util/decode_protected_header.js"),
            C = e("./util/decode_jwt.js"),
            N = e("./util/errors.js"),
            x = e("./key/generate_key_pair.js"),
            P = e("./key/generate_secret.js"),
            _ = e("./util/base64url.js"),
            D = e("./util/runtime.js"),
            k = n.interopDefault(D)
    }, {
        "./jwe/compact/decrypt.js": !1,
        "./jwe/flattened/decrypt.js": !1,
        "./jwe/general/decrypt.js": !1,
        "./jwe/general/encrypt.js": !1,
        "./jws/compact/verify.js": !1,
        "./jws/flattened/verify.js": !1,
        "./jws/general/verify.js": !1,
        "./jwt/verify.js": !1,
        "./jwt/decrypt.js": !1,
        "./jwe/compact/encrypt.js": !1,
        "./jwe/flattened/encrypt.js": !1,
        "./jws/compact/sign.js": !1,
        "./jws/flattened/sign.js": !1,
        "./jws/general/sign.js": !1,
        "./jwt/sign.js": !1,
        "./jwt/encrypt.js": !1,
        "./jwk/thumbprint.js": !1,
        "./jwk/embedded.js": !1,
        "./jwks/local.js": !1,
        "./jwks/remote.js": !1,
        "./jwt/unsecured.js": !1,
        "./key/export.js": !1,
        "./key/import.js": !1,
        "./util/decode_protected_header.js": !1,
        "./util/decode_jwt.js": "eIcG3",
        "./util/errors.js": !1,
        "./key/generate_key_pair.js": !1,
        "./key/generate_secret.js": !1,
        "./util/base64url.js": "gHZ5h",
        "./util/runtime.js": !1,
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    eIcG3: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "decodeJwt", () => u);
        var a = e("./base64url.js"),
            o = e("../lib/buffer_utils.js"),
            i = e("../lib/is_object.js"),
            l = n.interopDefault(i),
            c = e("./errors.js");

        function u(e) {
            let t, r;
            if ("string" != typeof e) throw new(0, c.JWTInvalid)("JWTs must use Compact JWS serialization, JWT must be a string");
            let {
                1: s,
                length: n
            } = e.split(".");
            if (5 === n) throw new(0, c.JWTInvalid)("Only JWTs using Compact JWS serialization can be decoded");
            if (3 !== n) throw new(0, c.JWTInvalid)("Invalid JWT");
            if (!s) throw new(0, c.JWTInvalid)("JWTs must contain a payload");
            try {
                t = (0, a.decode)(s)
            } catch {
                throw new(0, c.JWTInvalid)("Failed to base64url decode the payload")
            }
            try {
                r = JSON.parse(o.decoder.decode(t))
            } catch {
                throw new(0, c.JWTInvalid)("Failed to parse the decoded payload as JSON")
            }
            if (!(0, l.default)(r)) throw new(0, c.JWTInvalid)("Invalid JWT Claims Set");
            return r
        }
    }, {
        "./base64url.js": "gHZ5h",
        "../lib/buffer_utils.js": "3OSXK",
        "../lib/is_object.js": "kQMV3",
        "./errors.js": "2MROB",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    gHZ5h: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "encode", () => o), n.export(r, "decode", () => i);
        var a = e("../runtime/base64url.js");
        let o = a.encode,
            i = a.decode
    }, {
        "../runtime/base64url.js": "By2uJ",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    By2uJ: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "encodeBase64", () => o), n.export(r, "encode", () => i), n.export(r, "decodeBase64", () => l), n.export(r, "decode", () => c);
        var a = e("../lib/buffer_utils.js");
        let o = e => {
                let t = e;
                "string" == typeof t && (t = a.encoder.encode(t));
                let r = [];
                for (let e = 0; e < t.length; e += 32768) r.push(String.fromCharCode.apply(null, t.subarray(e, e + 32768)));
                return btoa(r.join(""))
            },
            i = e => o(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_"),
            l = e => {
                let t = atob(e),
                    r = new Uint8Array(t.length);
                for (let e = 0; e < t.length; e++) r[e] = t.charCodeAt(e);
                return r
            },
            c = e => {
                let t = e;
                t instanceof Uint8Array && (t = a.decoder.decode(t)), t = t.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
                try {
                    return l(t)
                } catch {
                    throw TypeError("The input to be decoded is not correctly encoded.")
                }
            }
    }, {
        "../lib/buffer_utils.js": "3OSXK",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "3OSXK": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "encoder", () => i), n.export(r, "decoder", () => l), n.export(r, "concat", () => c), n.export(r, "p2s", () => u), n.export(r, "uint64be", () => p), n.export(r, "uint32be", () => f), n.export(r, "lengthAndInput", () => h), n.export(r, "concatKdf", () => g);
        var a = e("../runtime/digest.js"),
            o = n.interopDefault(a);
        let i = new TextEncoder,
            l = new TextDecoder;

        function c(...e) {
            let t = new Uint8Array(e.reduce((e, {
                    length: t
                }) => e + t, 0)),
                r = 0;
            for (let s of e) t.set(s, r), r += s.length;
            return t
        }

        function u(e, t) {
            return c(i.encode(e), new Uint8Array([0]), t)
        }

        function d(e, t, r) {
            if (t < 0 || t >= 0x100000000) throw RangeError(`value must be >= 0 and <= ${0x100000000-1}. Received ${t}`);
            e.set([t >>> 24, t >>> 16, t >>> 8, 255 & t], r)
        }

        function p(e) {
            let t = Math.floor(e / 0x100000000),
                r = new Uint8Array(8);
            return d(r, t, 0), d(r, e % 0x100000000, 4), r
        }

        function f(e) {
            let t = new Uint8Array(4);
            return d(t, e), t
        }

        function h(e) {
            return c(f(e.length), e)
        }
        async function g(e, t, r) {
            let s = Math.ceil((t >> 3) / 32),
                n = new Uint8Array(32 * s);
            for (let t = 0; t < s; t++) {
                let s = new Uint8Array(4 + e.length + r.length);
                s.set(f(t + 1)), s.set(e, 4), s.set(r, 4 + e.length), n.set(await (0, o.default)("sha256", s), 32 * t)
            }
            return n.slice(0, t >> 3)
        }
    }, {
        "../runtime/digest.js": "fpkwe",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    fpkwe: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r);
        var a = e("./webcrypto.js"),
            o = n.interopDefault(a);
        r.default = async (e, t) => {
            let r = `SHA-${e.slice(-3)}`;
            return new Uint8Array(await o.default.subtle.digest(r, t))
        }
    }, {
        "./webcrypto.js": "8W0ZQ",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "8W0ZQ": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "isCryptoKey", () => a), r.default = crypto;
        let a = e => e instanceof CryptoKey
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    kQMV3: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

        function a(e) {
            if ("object" != typeof e || null === e || "[object Object]" !== Object.prototype.toString.call(e)) return !1;
            if (null === Object.getPrototypeOf(e)) return !0;
            let t = e;
            for (; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
            return Object.getPrototypeOf(e) === t
        }
        n.defineInteropFlag(r), n.export(r, "default", () => a)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "2MROB": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "JOSEError", () => a), n.export(r, "JWTClaimValidationFailed", () => o), n.export(r, "JWTExpired", () => i), n.export(r, "JOSEAlgNotAllowed", () => l), n.export(r, "JOSENotSupported", () => c), n.export(r, "JWEDecryptionFailed", () => u), n.export(r, "JWEInvalid", () => d), n.export(r, "JWSInvalid", () => p), n.export(r, "JWTInvalid", () => f), n.export(r, "JWKInvalid", () => h), n.export(r, "JWKSInvalid", () => g), n.export(r, "JWKSNoMatchingKey", () => m), n.export(r, "JWKSMultipleMatchingKeys", () => y), n.export(r, "JWKSTimeout", () => E), n.export(r, "JWSSignatureVerificationFailed", () => w);
        class a extends Error {
            constructor(e, t) {
                super(e, t), this.code = "ERR_JOSE_GENERIC", this.name = this.constructor.name, Error.captureStackTrace?.(this, this.constructor)
            }
        }
        a.code = "ERR_JOSE_GENERIC";
        class o extends a {
            constructor(e, t, r = "unspecified", s = "unspecified") {
                super(e, {
                    cause: {
                        claim: r,
                        reason: s,
                        payload: t
                    }
                }), this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED", this.claim = r, this.reason = s, this.payload = t
            }
        }
        o.code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
        class i extends a {
            constructor(e, t, r = "unspecified", s = "unspecified") {
                super(e, {
                    cause: {
                        claim: r,
                        reason: s,
                        payload: t
                    }
                }), this.code = "ERR_JWT_EXPIRED", this.claim = r, this.reason = s, this.payload = t
            }
        }
        i.code = "ERR_JWT_EXPIRED";
        class l extends a {
            constructor() {
                super(...arguments), this.code = "ERR_JOSE_ALG_NOT_ALLOWED"
            }
        }
        l.code = "ERR_JOSE_ALG_NOT_ALLOWED";
        class c extends a {
            constructor() {
                super(...arguments), this.code = "ERR_JOSE_NOT_SUPPORTED"
            }
        }
        c.code = "ERR_JOSE_NOT_SUPPORTED";
        class u extends a {
            constructor(e = "decryption operation failed", t) {
                super(e, t), this.code = "ERR_JWE_DECRYPTION_FAILED"
            }
        }
        u.code = "ERR_JWE_DECRYPTION_FAILED";
        class d extends a {
            constructor() {
                super(...arguments), this.code = "ERR_JWE_INVALID"
            }
        }
        d.code = "ERR_JWE_INVALID";
        class p extends a {
            constructor() {
                super(...arguments), this.code = "ERR_JWS_INVALID"
            }
        }
        p.code = "ERR_JWS_INVALID";
        class f extends a {
            constructor() {
                super(...arguments), this.code = "ERR_JWT_INVALID"
            }
        }
        f.code = "ERR_JWT_INVALID";
        class h extends a {
            constructor() {
                super(...arguments), this.code = "ERR_JWK_INVALID"
            }
        }
        h.code = "ERR_JWK_INVALID";
        class g extends a {
            constructor() {
                super(...arguments), this.code = "ERR_JWKS_INVALID"
            }
        }
        g.code = "ERR_JWKS_INVALID";
        class m extends a {
            constructor(e = "no applicable key found in the JSON Web Key Set", t) {
                super(e, t), this.code = "ERR_JWKS_NO_MATCHING_KEY"
            }
        }
        m.code = "ERR_JWKS_NO_MATCHING_KEY";
        class y extends a {
            constructor(e = "multiple matching keys found in the JSON Web Key Set", t) {
                super(e, t), this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS"
            }
        }
        y.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
        class E extends a {
            constructor(e = "request timed out", t) {
                super(e, t), this.code = "ERR_JWKS_TIMEOUT"
            }
        }
        E.code = "ERR_JWKS_TIMEOUT";
        class w extends a {
            constructor(e = "signature verification failed", t) {
                super(e, t), this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED"
            }
        }
        w.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED"
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    kxNZ1: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "AuthApi", () => c);
        var a = e("../storage/istorage.js"),
            o = e("../core/configuration/authentication.js"),
            i = e("../core/errors/openfortError.js"),
            l = e("../types/types.js");
        class c {
            storage;
            authManager;
            validateAndRefreshToken;
            ensureInitialized;
            eventEmitter;
            constructor(e, t, r, s, n) {
                this.storage = e, this.authManager = t, this.validateAndRefreshToken = r, this.ensureInitialized = s, this.eventEmitter = n
            }
            async logInWithEmailPassword({
                email: e,
                password: t,
                ecosystemGame: r
            }) {
                await this.ensureInitialized();
                let s = await this.authManager.loginEmailPassword(e, t, r);
                return "action" in s || new(0, o.Authentication)("jwt", s.token, s.player.id, s.refreshToken).save(this.storage), s
            }
            async signUpGuest() {
                await this.ensureInitialized();
                let e = await this.authManager.registerGuest();
                return new(0, o.Authentication)("jwt", e.token, e.player.id, e.refreshToken).save(this.storage), e
            }
            async signUpWithEmailPassword({
                email: e,
                password: t,
                options: r,
                ecosystemGame: s
            }) {
                await this.ensureInitialized();
                let n = await this.authManager.signupEmailPassword(e, t, r?.data.name, s);
                return "action" in n || new(0, o.Authentication)("jwt", n.token, n.player.id, n.refreshToken).save(this.storage), n
            }
            async linkEmailPassword({
                email: e,
                password: t,
                authToken: r,
                ecosystemGame: s
            }) {
                return await this.validateAndRefreshToken(), await this.authManager.linkEmail(e, t, r, s)
            }
            async unlinkEmailPassword({
                email: e,
                authToken: t
            }) {
                return await this.validateAndRefreshToken(), await this.authManager.unlinkEmail(e, t)
            }
            async requestEmailVerification({
                email: e,
                redirectUrl: t
            }) {
                await this.ensureInitialized(), await this.authManager.requestEmailVerification(e, t)
            }
            async resetPassword({
                email: e,
                password: t,
                state: r
            }) {
                await this.ensureInitialized(), await this.authManager.resetPassword(e, t, r)
            }
            async requestResetPassword({
                email: e,
                redirectUrl: t
            }) {
                await this.ensureInitialized(), await this.authManager.requestResetPassword(e, t)
            }
            async verifyEmail({
                email: e,
                state: t
            }) {
                await this.ensureInitialized(), await this.authManager.verifyEmail(e, t)
            }
            async initOAuth({
                provider: e,
                options: t,
                ecosystemGame: r
            }) {
                return await this.ensureInitialized(), await this.authManager.initOAuth(e, t, r)
            }
            async initLinkOAuth({
                provider: e,
                options: t,
                ecosystemGame: r
            }) {
                await this.validateAndRefreshToken();
                let s = await o.Authentication.fromStorage(this.storage);
                if (!s) throw new(0, i.OpenfortError)("No authentication found", i.OpenfortErrorType.NOT_LOGGED_IN_ERROR);
                return await this.authManager.linkOAuth(s, e, t, r)
            }
            async linkThirdPartyProvider({
                provider: e,
                token: t,
                tokenType: r
            }) {
                await this.validateAndRefreshToken();
                let s = await o.Authentication.fromStorage(this.storage);
                if (!s) throw new(0, i.OpenfortError)("No authentication found", i.OpenfortErrorType.NOT_LOGGED_IN_ERROR);
                return await this.authManager.linkThirdParty(s, e, t, r)
            }
            async unlinkOAuth({
                provider: e,
                authToken: t
            }) {
                return await this.validateAndRefreshToken(), await this.authManager.unlinkOAuth(e, t)
            }
            async poolOAuth(e) {
                await this.ensureInitialized();
                let t = await this.authManager.poolOAuth(e);
                return new(0, o.Authentication)("jwt", t.token, t.player.id, t.refreshToken).save(this.storage), t
            }
            async authenticateWithThirdPartyProvider({
                provider: e,
                token: t,
                tokenType: r,
                ecosystemGame: s
            }) {
                await this.ensureInitialized();
                let n = await this.authManager.authenticateThirdParty(e, t, r, s);
                return new(0, o.Authentication)("third_party", t, n.id, null, e, r).save(this.storage), n
            }
            async loginWithIdToken({
                provider: e,
                token: t,
                ecosystemGame: r
            }) {
                await this.ensureInitialized();
                let s = await this.authManager.loginWithIdToken(e, t, r);
                return new(0, o.Authentication)("jwt", s.token, s.player.id, s.refreshToken).save(this.storage), s
            }
            async initSIWE({
                address: e,
                ecosystemGame: t
            }) {
                return await this.ensureInitialized(), await this.authManager.initSIWE(e, t)
            }
            async authenticateWithSIWE({
                signature: e,
                message: t,
                walletClientType: r,
                connectorType: s
            }) {
                await this.ensureInitialized();
                let n = await this.authManager.authenticateSIWE(e, t, r, s);
                return new(0, o.Authentication)("jwt", n.token, n.player.id, n.refreshToken).save(this.storage), n
            }
            async linkWallet({
                signature: e,
                message: t,
                walletClientType: r,
                connectorType: s,
                authToken: n
            }) {
                return await this.validateAndRefreshToken(), await this.authManager.linkWallet(e, t, r, s, n)
                return await this.validateAndRefreshToken(), await this.authManager.linkWallet(e, t, r, s, n)
            }
            async unlinkWallet({
                address: e,
                authToken: t
            }) {
                return await this.validateAndRefreshToken(), await this.authManager.unlinkWallet(e, t)
            }
            async storeCredentials(e) {
                if (await this.ensureInitialized(), !e.player) throw new(0, i.OpenfortError)("Player ID is required to store credentials", i.OpenfortErrorType.INVALID_CONFIGURATION);
                new(0, o.Authentication)("jwt", e.accessToken, e.player, e.refreshToken).save(this.storage)
            }
            async logout() {
                let e = await o.Authentication.fromStorage(this.storage);
                if (e) {
                    try {
                        "third_party" !== e.type && await this.authManager.logout(e.token, e?.refreshToken)
                    } catch (e) {}
                    this.storage.remove(a.StorageKeys.AUTHENTICATION), this.eventEmitter.emit(l.OpenfortEvents.LOGGED_OUT)
                }
            }
        }
    }, {
        "../storage/istorage.js": "8EpXG",
        "../core/configuration/authentication.js": "1Nfd7",
        "../core/errors/openfortError.js": "3xESR",
        "../types/types.js": "fUPIN",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    cN17n: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "EmbeddedWalletApi", () => j);
        var a = e("../../../packages/internal/openapi-clients/dist/index.js"),
            o = e("../storage/istorage.js"),
            i = e("../core/configuration/account.js"),
            l = e("../core/configuration/authentication.js"),
            c = e("../core/config/config.js"),
            u = e("../core/errors/openfortError.js"),
            d = e("../wallets/evm/walletHelpers.js"),
            p = e("../wallets/evm/evmProvider.js");
        e("../wallets/evm/types.js");
        var f = e("../wallets/evm/provider/eip6963.js"),
            h = e("../types/types.js"),
            g = e("../wallets/iframeManager.js"),
            m = e("../wallets/embedded.js");
        e("../wallets/messaging/browserMessenger/backwardCompatibility.js");
        var y = e("../wallets/messaging/browserMessenger/messengers/WindowMessenger.js"),
            E = n.interopDefault(y),
            w = e("../wallets/messaging/ReactNativeMessenger.js"),
            R = e("../utils/debug.js");
        class j {
            storage;
            validateAndRefreshToken;
            ensureInitialized;
            eventEmitter;
            iframeManager = null;
            iframeManagerPromise = null;
            signer = null;
            signerPromise = null;
            provider = null;
            messagePoster = null;
            messenger = null;
            constructor(e, t, r, s) {
                this.storage = e, this.validateAndRefreshToken = t, this.ensureInitialized = r, this.eventEmitter = s, this.eventEmitter.on(h.OpenfortEvents.TOKEN_REFRESHED, () => {
                    (0, R.debugLog)("Handling token refresh event in EmbeddedWalletApi"), this.handleTokenRefreshed()
                }), this.eventEmitter.on(h.OpenfortEvents.LOGGED_OUT, () => {
                    (0, R.debugLog)("Handling logout event in EmbeddedWalletApi"), this.handleLogout()
                })
            }
            get backendApiClients() {
                let e = c.SDKConfiguration.fromStorage();
                if (!e) throw new(0, u.OpenfortError)("Configuration not found", u.OpenfortErrorType.INVALID_CONFIGURATION);
                return new(0, a.BackendApiClients)({
                    basePath: e.backendUrl,
                    accessToken: e.baseConfiguration.publishableKey
                })
            }
            async getIframeManager() {
                if ((0, R.debugLog)("[HANDSHAKE DEBUG] getIframeManager called"), this.iframeManager) return (0, R.debugLog)("[HANDSHAKE DEBUG] Returning existing iframeManager instance"), this.iframeManager;
                if (this.iframeManagerPromise) return (0, R.debugLog)("[HANDSHAKE DEBUG] Returning existing iframeManagerPromise"), this.iframeManagerPromise;
                (0, R.debugLog)("[HANDSHAKE DEBUG] Creating new iframeManager"), this.iframeManagerPromise = this.createIframeManager();
                try {
                    return (0, R.debugLog)("[HANDSHAKE DEBUG] Awaiting iframeManager creation"), this.iframeManager = await this.iframeManagerPromise, (0, R.debugLog)("[HANDSHAKE DEBUG] IframeManager created successfully"), this.iframeManagerPromise = null, this.iframeManager
                } catch (e) {
                    throw (0, R.debugLog)("[HANDSHAKE DEBUG] Error creating iframeManager:", e), this.iframeManagerPromise = null, e
                }
            }
            async createIframeManager() {
                let e;
                (0, R.debugLog)("[HANDSHAKE DEBUG] createIframeManager starting");
                let t = c.SDKConfiguration.fromStorage();
                if (!t) throw (0, R.debugLog)("[HANDSHAKE DEBUG] Configuration not found"), new(0, u.OpenfortError)("Configuration not found", u.OpenfortErrorType.INVALID_CONFIGURATION);
                if ((0, R.debugLog)("[HANDSHAKE DEBUG] Configuration found"), this.messagePoster)(0, R.debugLog)("[HANDSHAKE DEBUG] Creating ReactNativeMessenger with messagePoster"), this.messenger = new(0, w.ReactNativeMessenger)(this.messagePoster), (0, R.debugLog)("[HANDSHAKE DEBUG] Created new ReactNativeMessenger instance"), e = this.messenger;
                else {
                    (0, R.debugLog)("[HANDSHAKE DEBUG] Creating WindowMessenger for browser mode");
                    let r = this.createIframe(t.iframeUrl),
                        s = new URL(t.iframeUrl).origin;
                    e = new(0, E.default)({
                        remoteWindow: r.contentWindow,
                        allowedOrigins: [s]
                    }), (0, R.debugLog)("[HANDSHAKE DEBUG] Created WindowMessenger")
                }(0, R.debugLog)("[HANDSHAKE DEBUG] Creating IframeManager instance");
                let r = new(0, g.IframeManager)(t, this.storage, e);
                return (0, R.debugLog)("[HANDSHAKE DEBUG] Initializing IframeManager"), await r.initialize(), (0, R.debugLog)("[HANDSHAKE DEBUG] IframeManager initialized successfully"), r
            }
            async ensureSigner() {
                if (this.signer) return this.signer;
                if (this.signerPromise) return this.signerPromise;
                this.signerPromise = this.createSigner();
                try {
                    return this.signer = await this.signerPromise, this.signer
                } catch (e) {
                    throw this.signerPromise = null, e
                } finally {
                    this.signerPromise = null
                }
            }
            async createSigner() {
                let e = await this.getIframeManager(),
                    t = new(0, m.EmbeddedSigner)(e, this.storage);
                return this.eventEmitter.emit(h.OpenfortEvents.SIGNER_CONFIGURED, t), t
            }
            createIframe(e) {
                if ("undefined" == typeof document) throw new(0, u.OpenfortError)("Document is not available. Please provide a message poster for non-browser environments.", u.OpenfortErrorType.INVALID_CONFIGURATION);
                let t = document.getElementById("openfort-iframe");
                t && t.remove();
                let r = document.createElement("iframe");
                return r.style.display = "none", r.id = "openfort-iframe", r.src = e, document.body.appendChild(r), (0, R.debugLog)("Iframe created and appended to document"), r
            }
            async configure(e = {}) {
                let t;
                await this.validateAndRefreshToken();
                let r = e.recoveryParams ?? {
                    recoveryMethod: h.RecoveryMethod.AUTOMATIC
                };
                if (!c.SDKConfiguration.fromStorage()) throw new(0, u.OpenfortError)("Configuration not found", u.OpenfortErrorType.INVALID_CONFIGURATION);
                (r.recoveryMethod === h.RecoveryMethod.PASSWORD || e.shieldAuthentication?.encryptionSession) && (t = {
                    encryptionSession: e.shieldAuthentication?.encryptionSession,
                    recoveryPassword: r.recoveryMethod === h.RecoveryMethod.PASSWORD ? r.password : void 0
                });
                let s = await this.getIframeManager(),
                    n = await s.configure({
                        chainId: e.chainId,
                        entropy: t
                    });
                new(0, i.Account)(n.address, n.chainId, n.ownerAddress, n.accountType).save(this.storage);
                let a = new(0, m.EmbeddedSigner)(s, this.storage);
                this.eventEmitter.emit(h.OpenfortEvents.SIGNER_CONFIGURED, a);
                let o = await l.Authentication.fromStorage(this.storage);
                if (!o) throw new(0, u.OpenfortError)("No access token found", u.OpenfortErrorType.NOT_LOGGED_IN_ERROR);
                return {
                    chainId: n.chainId.toString(),
                    owner: {
                        id: o.player
                    },
                    address: n.address,
                    ownerAddress: "solana" === n.accountType ? void 0 : n.ownerAddress,
                    chainType: "solana" === n.accountType ? "solana" : "ethereum",
                    implementationType: "solana" === n.accountType ? void 0 : n.accountType
                }
            }
            async signMessage(e, t) {
                await this.validateAndRefreshToken();
                let r = await this.ensureSigner(),
                    {
                        hashMessage: s = !0,
                        arrayifyMessage: n = !1
                    } = t || {};
                return await r.sign(e, n, s)
            }
            async signTypedData(e, t, r) {
                await this.validateAndRefreshToken();
                let s = await this.ensureSigner(),
                    n = await i.Account.fromStorage(this.storage);
                if (!n) throw new(0, u.OpenfortError)("No account found", u.OpenfortErrorType.MISSING_SIGNER_ERROR);
                return await (0, d.getSignedTypedData)({
                    domain: e,
                    types: t,
                    message: r
                }, n.type, Number(n.chainId), s, n.address)
            }
            async exportPrivateKey() {
                await this.validateAndRefreshToken();
                let e = await this.ensureSigner();
                return await e.export()
            }
            async setEmbeddedRecovery({
                recoveryMethod: e,
                recoveryPassword: t,
                encryptionSession: r
            }) {
                await this.validateAndRefreshToken();
                let s = await this.ensureSigner();
                if ("password" === e && !t) throw new(0, u.OpenfortError)("Recovery password is required", u.OpenfortErrorType.INVALID_CONFIGURATION);
                await s.setEmbeddedRecovery({
                    recoveryMethod: e,
                    recoveryPassword: t,
                    encryptionSession: r
                })
            }
            async get() {
                let e = await i.Account.fromStorage(this.storage);
                if (!e) throw new(0, u.OpenfortError)("No signer configured", u.OpenfortErrorType.MISSING_SIGNER_ERROR);
                let t = await l.Authentication.fromStorage(this.storage);
                if (!t) throw new(0, u.OpenfortError)("No access token found", u.OpenfortErrorType.NOT_LOGGED_IN_ERROR);
                return {
                    chainId: e.chainId.toString(),
                    owner: {
                        id: t.player
                    },
                    address: e.address,
                    ownerAddress: "solana" === e.type ? void 0 : e.ownerAddress,
                    chainType: "solana" === e.type ? "solana" : "ethereum",
                    implementationType: "solana" === e.type ? void 0 : e.type
                }
            }
            async list() {
                let e = c.SDKConfiguration.fromStorage();
                if (!e) throw new(0, u.OpenfortError)("Configuration not found", u.OpenfortErrorType.INVALID_CONFIGURATION);
                await this.validateAndRefreshToken();
                let t = await l.Authentication.fromStorage(this.storage);
                if (!t) throw new(0, u.OpenfortError)("No access token found", u.OpenfortErrorType.NOT_LOGGED_IN_ERROR);
                return (0, u.withOpenfortError)(async () => (await this.backendApiClients.accountsApi.getAccounts(void 0, {
                    headers: {
                        authorization: `Bearer ${e.baseConfiguration.publishableKey}`,
                        "x-player-token": t.token,
                        "x-auth-provider": t.thirdPartyProvider,
                        "x-token-type": t.thirdPartyTokenType
                    }
                })).data.data.map(e => ({
                    owner: {
                        id: e.player.id
                    },
                    chainType: "ethereum",
                    address: e.address,
                    ownerAddress: e.ownerAddress,
                    createdAt: e.createdAt,
                    implementationType: e.accountType,
                    chainId: e.chainId.toString()
                })), {
                    default: u.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async getEmbeddedState() {
                try {
                    if (!await l.Authentication.fromStorage(this.storage)) return h.EmbeddedState.UNAUTHENTICATED;
                    return await i.Account.fromStorage(this.storage) ? h.EmbeddedState.READY : h.EmbeddedState.EMBEDDED_SIGNER_NOT_CONFIGURED
                } catch (e) {
                    return (0, R.debugLog)("Failed to get embedded state:", e), h.EmbeddedState.UNAUTHENTICATED
                }
            }
            async getEthereumProvider(e) {
                let t;
                await this.ensureInitialized();
                let r = {
                        announceProvider: !0,
                        ...e
                    },
                    s = await l.Authentication.fromStorage(this.storage),
                    n = await i.Account.fromStorage(this.storage);
                try {
                    t = n ? await this.ensureSigner() : void 0
                } catch (e) {
                    t = void 0
                }
                return this.provider ? this.provider && r.policy && this.provider.updatePolicy(r.policy) : (this.provider = new(0, p.EvmProvider)({
                    storage: this.storage,
                    openfortEventEmitter: this.eventEmitter,
                    signer: t || void 0,
                    account: n || void 0,
                    authentication: s || void 0,
                    backendApiClients: this.backendApiClients,
                    policyId: r.policy,
                    validateAndRefreshSession: this.validateAndRefreshToken.bind(this),
                    chains: r.chains
                }), r.announceProvider && (0, f.announceProvider)({
                    info: {
                        ...f.openfortProviderInfo,
                        ...r.providerInfo
                    },
                    provider: this.provider
                })), this.provider
            }
            async ping(e) {
                try {
                    e > 0 && await new Promise(t => {
                        setTimeout(t, e)
                    });
                    let t = await this.getIframeManager();
                    if (!t.isLoaded()) return !1;
                    let r = await l.Authentication.fromStorage(this.storage);
                    if (r) try {
                        return await t.getCurrentDevice(r.player), !0
                    } catch (e) {
                        return !1
                    }
                    return t.isLoaded()
                } catch (e) {
                    return (0, R.debugLog)("Ping failed:", e), !1
                }
            }
            getURL() {
                let e = c.SDKConfiguration.fromStorage();
                if (!e) throw new(0, u.OpenfortError)("Configuration not found", u.OpenfortErrorType.INVALID_CONFIGURATION);
                return e.iframeUrl
            }
            async setMessagePoster(e) {
                if (!e || "function" != typeof e.postMessage) throw new(0, u.OpenfortError)("Invalid message poster", u.OpenfortErrorType.INVALID_CONFIGURATION);
                this.messagePoster = e, this.messenger && (this.messenger.destroy(), this.messenger = null), this.iframeManager && (this.iframeManager.destroy(), this.iframeManager = null, this.iframeManagerPromise = null), this.signer && (this.signer = null, this.signerPromise = null)
            }
            async handleTokenRefreshed() {
                if (this.iframeManager) try {
                    await this.iframeManager.updateAuthentication(), (0, R.debugLog)("Updated IframeManager authentication after token refresh")
                } catch (e) {
                    (0, R.debugLog)("Failed to update IframeManager authentication:", e)
                } else(0, R.debugLog)("IframeManager not initialized, skipping authentication update")
            }
            async handleLogout() {
                if (this.signer) {
                    try {
                        await this.signer.disconnect(), (0, R.debugLog)("Logged out embedded signer")
                    } catch (e) {
                        (0, R.debugLog)("Failed to logout embedded signer:", e)
                    }
                    this.signer = null, this.signerPromise = null
                }
                this.storage.remove(o.StorageKeys.ACCOUNT), this.iframeManager && (this.iframeManager.destroy(), this.iframeManager = null, this.iframeManagerPromise = null), this.messenger && (this.messenger.destroy(), this.messenger = null), this.provider && (this.provider = null)
            }
            async onMessage(e) {
                if (!e || "object" != typeof e) return void(0, R.debugLog)("Invalid message received:", e);
                (0, R.debugLog)("[HANDSHAKE DEBUG] EmbeddedWalletApi onMessage:", e);
                let t = "penpal" === e.namespace && "SYN" === e.type || e.penpal && "string" == typeof e.penpal;
                if (t && this.messenger && this.messagePoster) return (0, R.debugLog)("[HANDSHAKE DEBUG] Passing message directly to existing ReactNativeMessenger"), void this.messenger.handleMessage(e);
                let r = await this.getIframeManager();
                (0, R.debugLog)(`[HANDSHAKE DEBUG] IframeManager obtained, isLoaded: ${r.isLoaded()}`), t && !r.isLoaded() && (0, R.debugLog)("[HANDSHAKE DEBUG] Received penpal message before connection initialized, setting up connection..."), (0, R.debugLog)("[HANDSHAKE DEBUG] Calling iframeManager.onMessage"), await r.onMessage(e), (0, R.debugLog)("[HANDSHAKE DEBUG] iframeManager.onMessage completed")
            }
            isReady() {
                return this.iframeManager?.isLoaded() || !1
            }
        }
    }, {
        "../../../packages/internal/openapi-clients/dist/index.js": "5IDb0",
        "../storage/istorage.js": "8EpXG",
        "../core/configuration/account.js": "f6fHD",
        "../core/configuration/authentication.js": "1Nfd7",
        "../core/config/config.js": "8pPBU",
        "../core/errors/openfortError.js": "3xESR",
        "../wallets/evm/walletHelpers.js": "arpu2",
        "../wallets/evm/evmProvider.js": "4mZuV",
        "../wallets/evm/types.js": "h6Lv9",
        "../wallets/evm/provider/eip6963.js": "3LTkv",
        "../types/types.js": "fUPIN",
        "../wallets/iframeManager.js": "kcx6I",
        "../wallets/embedded.js": "18PER",
        "../wallets/messaging/browserMessenger/backwardCompatibility.js": "hsQQI",
        "../wallets/messaging/browserMessenger/messengers/WindowMessenger.js": "eYWLa",
        "../wallets/messaging/ReactNativeMessenger.js": "19aZg",
        "../utils/debug.js": "8822a",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    arpu2: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "getSignedTypedData", () => o);
        var a = e("../../types/types.js");
        let o = async (t, r, s, n, o) => {
            let i = {
                ...t.types
            };
            delete i.EIP712Domain;
            let {
                _TypedDataEncoder: l
            } = await e("9ea20aecf4a918ce"), c = l.hash(t.domain, i, t.message);
            if ([a.AccountType.UPGRADEABLE_V5, a.AccountType.UPGRADEABLE_V6, a.AccountType.ZKSYNC_UPGRADEABLE_V1, a.AccountType.ZKSYNC_UPGRADEABLE_V2].includes(r)) {
                let e = {
                        name: "Openfort",
                        version: "0.5",
                        chainId: Number(s),
                        verifyingContract: o
                    },
                    t = {
                        hashedMessage: c
                    };
                c = l.hash(e, {
                    OpenfortMessage: [{
                        name: "hashedMessage",
                        type: "bytes32"
                    }]
                }, t)
            }
            return await n.sign(c, !1, !1)
        }
    }, {
        "../../types/types.js": "fUPIN",
        "9ea20aecf4a918ce": "f41ft",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    f41ft: [function(e, t, r, s) {
        t.exports = e("bb8bb6b54cc9cc05")(t.bundle.resolve("2XE7A")).then(() => t.bundle.root("jLDfB"))
    }, {
        bb8bb6b54cc9cc05: "6IWJC"
    }],
    "4mZuV": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "EvmProvider", () => A);
        var a = e("../../utils/debug.js"),
            o = e("../../core/configuration/authentication.js"),
            i = e("./types.js"),
            l = e("./JsonRpcError.js"),
            c = e("./signTypedDataV4.js"),
            u = e("../../types/types.js"),
            d = e("../../utils/typedEventEmitter.js"),
            p = n.interopDefault(d),
            f = e("../../utils/chains/index.js"),
            h = e("../../core/configuration/account.js"),
            g = e("./addEthereumChain.js"),
            m = e("./registerSession.js"),
            y = e("./revokeSession.js"),
            E = e("./sendCalls.js"),
            w = e("./getCallsStatus.js"),
            R = e("./personalSign.js"),
            j = e("./estimateGas.js"),
            I = e("../../utils/crypto.js");
        class A {
            #t;
            #r;
            #s;
            #e;
            updatePolicy(e) {
                this.#r = e
            }
            #n;
            #a;
            #o = null;
            #i;
            isOpenfort = !0;
            constructor({
                storage: e,
                signer: t,
                backendApiClients: r,
                openfortEventEmitter: s,
                policyId: n,
                chains: a,
                validateAndRefreshSession: o
            }) {
                this.#t = e, this.#e = t, this.#s = a, this.#r = n, this.#n = o, this.#i = r, this.#i = r, this.#a = new(0, p.default), s.on(u.OpenfortEvents.LOGGED_OUT, this.#l), s.on(u.OpenfortEvents.SIGNER_CONFIGURED, e => {
                    this.#e = e
                })
            }
            #c() {
                if (!this.#e) throw new(0, l.JsonRpcError)(l.ProviderErrorCode.UNAUTHORIZED, "No signer configured. Please configure an embedded wallet first.");
                return this.#e
            }
            #l = async () => {
                this.#e = void 0, this.#a.emit(i.ProviderEvent.ACCOUNTS_CHANGED, [])
            };
            async getRpcProvider() {
                if (!this.#o) {
                    let t = await h.Account.fromStorage(this.#t),
                        r = t?.chainId || 8453;
                    await e("369f3e054ad6e98f").then(e => {
                        let t = this.#s ? this.#s[r] : void 0;
                        this.#o = new e.StaticJsonRpcProvider(t ?? f.defaultChainRpcs[r])
                    })
                }
                if (!this.#o) throw Error("RPC provider not initialized");
                return this.#o
            }
            async #u(t) {
                switch (t.method) {
                    case "eth_accounts": {
                        let e = await h.Account.fromStorage(this.#t);
                        return e ? [e.address] : []
                    }
                    case "eth_requestAccounts": {
                        let e = await h.Account.fromStorage(this.#t);
                        if (e) return this.#a.emit(i.ProviderEvent.ACCOUNTS_CONNECT, {
                            chainId: (0, I.numberToHex)(e.chainId)
                        }), [e.address];
                        throw new(0, l.JsonRpcError)(l.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - must be authenticated and configured with a signer.")
                    }
                    case "eth_sendTransaction": {
                        let e = await h.Account.fromStorage(this.#t),
                            r = await this.#c(),
                            s = await o.Authentication.fromStorage(this.#t);
                        if (!e || !s) throw new(0, l.JsonRpcError)(l.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                        return await this.#n(), await (0, E.sendCalls)({
                            params: t.params || [],
                            signer: r,
                            account: e,
                            authentication: s,
                            backendClient: this.#i,
                            policyId: this.#r
                        })
                    }
                    case "eth_estimateGas": {
                        let e = await h.Account.fromStorage(this.#t),
                            r = await o.Authentication.fromStorage(this.#t);
                        if (!e || !r) throw new(0, l.JsonRpcError)(l.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                        return await this.#n(), await (0, j.estimateGas)({
                            params: t.params || [],
                            account: e,
                            authentication: r,
                            backendClient: this.#i,
                            policyId: this.#r
                        })
                    }
                    case "eth_signTypedData":
                    case "eth_signTypedData_v4": {
                        let e = await h.Account.fromStorage(this.#t),
                            r = await this.#c();
                        if (!e) throw new(0, l.JsonRpcError)(l.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                        await this.#n();
                        let s = await this.getRpcProvider();
                        return await (0, c.signTypedDataV4)({
                            method: t.method,
                            params: t.params || [],
                            signer: r,
                            accountType: e.type,
                            rpcProvider: s
                        })
                    }
                    case "personal_sign": {
                        (0, a.debugLog)("[personal_sign] request:", t);
                        let e = await h.Account.fromStorage(this.#t);
                        (0, a.debugLog)("[personal_sign] account:", e);
                        let r = await this.#c();
                        if ((0, a.debugLog)("[personal_sign] signer:", r), !e) throw new(0, l.JsonRpcError)(l.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                        return await this.#n(), (0, a.debugLog)("[personal_sign] validateAndRefreshSession:"), await (0, R.personalSign)({
                            params: t.params || [],
                            signer: r,
                            account: e
                        })
                    }
                    case "eth_chainId": {
                        let e = await this.getRpcProvider(),
                            {
                                chainId: t
                            } = await e.detectNetwork();
                        return (0, I.numberToHex)(t)
                    }
                    case "wallet_switchEthereumChain": {
                        let r = await this.#c();
                        if (!t.params || !Array.isArray(t.params) || 0 === t.params.length) throw new(0, l.JsonRpcError)(l.RpcErrorCode.INVALID_PARAMS, "Invalid parameters for wallet_switchEthereumChain");
                        await this.#n();
                        try {
                            let s = parseInt(t.params[0].chainId, 16);
                            await r.switchChain({
                                chainId: s
                            }), await e("369f3e054ad6e98f").then(e => {
                                let t = this.#s ? this.#s[s] : void 0;
                                this.#o = new e.StaticJsonRpcProvider(t ?? f.defaultChainRpcs[s])
                            })
                        } catch (e) {
                            throw new(0, l.JsonRpcError)(l.RpcErrorCode.INTERNAL_ERROR, `Failed to switch chain: ${e.message}`)
                        }
                        return null
                    }
                    case "wallet_addEthereumChain": {
                        await this.#c();
                        let e = await this.getRpcProvider();
                        return await (0, g.addEthereumChain)({
                            params: t.params || [],
                            rpcProvider: e,
                            storage: this.#t
                        })
                    }
                    case "wallet_showCallsStatus":
                        return null;
                    case "wallet_getCallsStatus": {
                        let e = await h.Account.fromStorage(this.#t);
                        await this.#c();
                        let r = await o.Authentication.fromStorage(this.#t);
                        if (!e || !r) throw new(0, l.JsonRpcError)(l.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                        return await this.#n(), await (0, w.getCallStatus)({
                            params: t.params || {},
                            authentication: r,
                            backendClient: this.#i,
                            account: e
                        })
                    }
                    case "wallet_sendCalls": {
                        let e = await h.Account.fromStorage(this.#t),
                            r = await this.#c(),
                            s = await o.Authentication.fromStorage(this.#t);
                        if (!e || !s) throw new(0, l.JsonRpcError)(l.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                        return await this.#n(), await (0, E.sendCalls)({
                            params: t.params ? t.params[0].calls : [],
                            signer: r,
                            account: e,
                            authentication: s,
                            backendClient: this.#i,
                            policyId: this.#r
                        })
                    }
                    case "wallet_grantPermissions": {
                        let e = await h.Account.fromStorage(this.#t),
                            r = await this.#c(),
                            s = await o.Authentication.fromStorage(this.#t);
                        if (!e || !s) throw new(0, l.JsonRpcError)(l.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                        return await this.#n(), await (0, m.registerSession)({
                            params: t.params || [],
                            signer: r,
                            account: e,
                            authentication: s,
                            backendClient: this.#i,
                            policyId: this.#r
                        })
                    }
                    case "wallet_revokePermissions": {
                        let e = await h.Account.fromStorage(this.#t),
                            r = await this.#c(),
                            s = await o.Authentication.fromStorage(this.#t);
                        if (!e || !s) throw new(0, l.JsonRpcError)(l.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                        return await this.#n(), await (0, y.revokeSession)({
                            params: t.params || [],
                            signer: r,
                            account: e,
                            authentication: s,
                            backendClient: this.#i
                        })
                    }
                    case "wallet_getCapabilities": {
                        let e = await this.getRpcProvider(),
                            {
                                chainId: t
                            } = await e.detectNetwork();
                        return {
                            [(0, I.numberToHex)(t)]: {
                                permissions: {
                                    supported: !0,
                                    signerTypes: ["account", "key"],
                                    keyTypes: ["secp256k1"],
                                    permissionTypes: ["contract-calls"]
                                },
                                paymasterService: {
                                    supported: !0
                                },
                                atomicBatch: {
                                    supported: !0
                                }
                            }
                        }
                    }
                    case "eth_gasPrice":
                    case "eth_getBalance":
                    case "eth_getCode":
                    case "eth_getStorageAt":
                    case "eth_call":
                    case "eth_blockNumber":
                    case "eth_getBlockByHash":
                    case "eth_getBlockByNumber":
                    case "eth_getTransactionByHash":
                    case "eth_getTransactionReceipt":
                    case "eth_getTransactionCount":
                        return (await this.getRpcProvider()).send(t.method, t.params || []);
                    default:
                        throw new(0, l.JsonRpcError)(l.ProviderErrorCode.UNSUPPORTED_METHOD, `${t.method}: Method not supported`)
                }
            }
            async request(e) {
                try {
                    return this.#u(e)
                } catch (e) {
                    if (e instanceof l.JsonRpcError) throw e;
                    if (e instanceof Error) throw new(0, l.JsonRpcError)(l.RpcErrorCode.INTERNAL_ERROR, e.message);
                    throw new(0, l.JsonRpcError)(l.RpcErrorCode.INTERNAL_ERROR, "Internal error")
                }
            }
            on(e, t) {
                this.#a.on(e, t)
            }
            removeListener(e, t) {
                this.#a.off(e, t)
            }
        }
    }, {
        "../../utils/debug.js": "8822a",
        "../../core/configuration/authentication.js": "1Nfd7",
        "./types.js": "h6Lv9",
        "./JsonRpcError.js": "5MjlL",
        "./signTypedDataV4.js": "4S1Sk",
        "../../types/types.js": "fUPIN",
        "../../utils/typedEventEmitter.js": "gZetA",
        "../../utils/chains/index.js": "lU4aU",
        "../../core/configuration/account.js": "f6fHD",
        "./addEthereumChain.js": "kBFnU",
        "./registerSession.js": "iRVAB",
        "./revokeSession.js": "h0LtA",
        "./sendCalls.js": "bOo3j",
        "./getCallsStatus.js": "fT4j5",
        "./personalSign.js": "dk0yV",
        "./estimateGas.js": "d2KSV",
        "../../utils/crypto.js": "3dq9D",
        "369f3e054ad6e98f": "43YbP",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    h6Lv9: [function(e, t, r, s) {
        var n, a, o, i, l = e("@parcel/transformer-js/src/esmodule-helpers.js");
        l.defineInteropFlag(r), l.export(r, "BackendTransactionStatus", () => o), l.export(r, "ProviderEvent", () => i), (n = o || (o = {})).PENDING = "PENDING", n.SUBMITTED = "SUBMITTED", n.SUCCESSFUL = "SUCCESSFUL", n.REVERTED = "REVERTED", n.FAILED = "FAILED", n.CANCELLED = "CANCELLED", (a = i || (i = {})).ACCOUNTS_CHANGED = "accountsChanged", a.ACCOUNTS_CONNECT = "connect"
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "5MjlL": [function(e, t, r, s) {
        var n, a, o, i, l = e("@parcel/transformer-js/src/esmodule-helpers.js");
        l.defineInteropFlag(r), l.export(r, "JsonRpcError", () => c), l.export(r, "ProviderErrorCode", () => o), l.export(r, "RpcErrorCode", () => i), (n = o || (o = {}))[n.USER_REJECTED_REQUEST = 4001] = "USER_REJECTED_REQUEST", n[n.UNAUTHORIZED = 4100] = "UNAUTHORIZED", n[n.UNSUPPORTED_METHOD = 4200] = "UNSUPPORTED_METHOD", n[n.DISCONNECTED = 4900] = "DISCONNECTED", (a = i || (i = {}))[a.RPC_SERVER_ERROR = -32e3] = "RPC_SERVER_ERROR", a[a.INVALID_REQUEST = -32600] = "INVALID_REQUEST", a[a.METHOD_NOT_FOUND = -32601] = "METHOD_NOT_FOUND", a[a.INVALID_PARAMS = -32602] = "INVALID_PARAMS", a[a.INTERNAL_ERROR = -32603] = "INTERNAL_ERROR", a[a.PARSE_ERROR = -32700] = "PARSE_ERROR", a[a.TRANSACTION_REJECTED = -32003] = "TRANSACTION_REJECTED";
        class c extends Error {
            message;
            code;
            constructor(e, t) {
                super(t), this.message = t, this.code = e
            }
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "4S1Sk": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "signTypedDataV4", () => l);
        var a = e("./walletHelpers.js"),
            o = e("./JsonRpcError.js");
        let i = ["types", "domain", "primaryType", "message"],
            l = async ({
                params: e,
                method: t,
                signer: r,
                accountType: s,
                rpcProvider: n
            }) => {
                let l = e[0],
                    c = e[1];
                if (!l || !c) throw new(0, o.JsonRpcError)(o.RpcErrorCode.INVALID_PARAMS, `${t} requires an address and a typed data JSON`);
                let {
                    chainId: u
                } = await n.detectNetwork(), d = ((e, t) => {
                    let r, s;
                    if ("string" == typeof e) try {
                        r = JSON.parse(e)
                    } catch (e) {
                        throw new(0, o.JsonRpcError)(o.RpcErrorCode.INVALID_PARAMS, `Failed to parse typed data JSON: ${e}`)
                    } else {
                        if ("object" != typeof e) throw new(0, o.JsonRpcError)(o.RpcErrorCode.INVALID_PARAMS, `Invalid typed data argument: ${e}`);
                        r = e
                    }
                    if (s = r, !i.every(e => e in s)) throw new(0, o.JsonRpcError)(o.RpcErrorCode.INVALID_PARAMS, `Invalid typed data argument. The following properties are required: 
      ${i.join(", ")}`);
                    let n = r.domain?.chainId;
                    if (n && ("string" == typeof n && (n.startsWith("0x") ? r.domain.chainId = parseInt(n, 16) : r.domain.chainId = parseInt(n, 10)), r.domain.chainId !== t)) throw new(0, o.JsonRpcError)(o.RpcErrorCode.INVALID_PARAMS, `Invalid chainId, expected ${t}`);
                    return r
                })(c, u);
                return await (0, a.getSignedTypedData)(d, s, u, r, l)
            }
    }, {
        "./walletHelpers.js": "arpu2",
        "./JsonRpcError.js": "5MjlL",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    gZetA: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "default", () => o);
        var a = e("eventemitter3");
        class o {
            emitter = new(0, a.EventEmitter);
            on(e, t) {
                return this.emitter.on(e, t), this
            }
            off(e, t) {
                return this.emitter.off(e, t), this
            }
            emit(e, ...t) {
                return this.emitter.emit(e, ...t)
            }
            once(e, t) {
                return this.emitter.once(e, t), this
            }
            removeAllListeners(e) {
                return this.emitter.removeAllListeners(e), this
            }
            listenerCount(e) {
                return this.emitter.listenerCount(e)
            }
            listeners(e) {
                return this.emitter.listeners(e)
            }
        }
    }, {
        eventemitter3: "gddYA",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    gddYA: [function(e, t, r, s) {
        "use strict";
        var n = Object.prototype.hasOwnProperty,
            a = "~";

        function o() {}

        function i(e, t, r) {
            this.fn = e, this.context = t, this.once = r || !1
        }

        function l(e, t, r, s, n) {
            if ("function" != typeof r) throw TypeError("The listener must be a function");
            var o = new i(r, s || e, n),
                l = a ? a + t : t;
            return e._events[l] ? e._events[l].fn ? e._events[l] = [e._events[l], o] : e._events[l].push(o) : (e._events[l] = o, e._eventsCount++), e
        }

        function c(e, t) {
            0 == --e._eventsCount ? e._events = new o : delete e._events[t]
        }

        function u() {
            this._events = new o, this._eventsCount = 0
        }
        Object.create && (o.prototype = Object.create(null), new o().__proto__ || (a = !1)), u.prototype.eventNames = function() {
            var e, t, r = [];
            if (0 === this._eventsCount) return r;
            for (t in e = this._events) n.call(e, t) && r.push(a ? t.slice(1) : t);
            return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
        }, u.prototype.listeners = function(e) {
            var t = a ? a + e : e,
                r = this._events[t];
            if (!r) return [];
            if (r.fn) return [r.fn];
            for (var s = 0, n = r.length, o = Array(n); s < n; s++) o[s] = r[s].fn;
            return o
        }, u.prototype.listenerCount = function(e) {
            var t = a ? a + e : e,
                r = this._events[t];
            return r ? r.fn ? 1 : r.length : 0
        }, u.prototype.emit = function(e, t, r, s, n, o) {
            var i = a ? a + e : e;
            if (!this._events[i]) return !1;
            var l, c, u = this._events[i],
                d = arguments.length;
            if (u.fn) {
                switch (u.once && this.removeListener(e, u.fn, void 0, !0), d) {
                    case 1:
                        return u.fn.call(u.context), !0;
                    case 2:
                        return u.fn.call(u.context, t), !0;
                    case 3:
                        return u.fn.call(u.context, t, r), !0;
                    case 4:
                        return u.fn.call(u.context, t, r, s), !0;
                    case 5:
                        return u.fn.call(u.context, t, r, s, n), !0;
                    case 6:
                        return u.fn.call(u.context, t, r, s, n, o), !0
                }
                for (c = 1, l = Array(d - 1); c < d; c++) l[c - 1] = arguments[c];
                u.fn.apply(u.context, l)
            } else {
                var p, f = u.length;
                for (c = 0; c < f; c++) switch (u[c].once && this.removeListener(e, u[c].fn, void 0, !0), d) {
                    case 1:
                        u[c].fn.call(u[c].context);
                        break;
                    case 2:
                        u[c].fn.call(u[c].context, t);
                        break;
                    case 3:
                        u[c].fn.call(u[c].context, t, r);
                        break;
                    case 4:
                        u[c].fn.call(u[c].context, t, r, s);
                        break;
                    default:
                        if (!l)
                            for (p = 1, l = Array(d - 1); p < d; p++) l[p - 1] = arguments[p];
                        u[c].fn.apply(u[c].context, l)
                }
            }
            return !0
        }, u.prototype.on = function(e, t, r) {
            return l(this, e, t, r, !1)
        }, u.prototype.once = function(e, t, r) {
            return l(this, e, t, r, !0)
        }, u.prototype.removeListener = function(e, t, r, s) {
            var n = a ? a + e : e;
            if (!this._events[n]) return this;
            if (!t) return c(this, n), this;
            var o = this._events[n];
            if (o.fn) o.fn !== t || s && !o.once || r && o.context !== r || c(this, n);
            else {
                for (var i = 0, l = [], u = o.length; i < u; i++)(o[i].fn !== t || s && !o[i].once || r && o[i].context !== r) && l.push(o[i]);
                l.length ? this._events[n] = 1 === l.length ? l[0] : l : c(this, n)
            }
            return this
        }, u.prototype.removeAllListeners = function(e) {
            var t;
            return e ? (t = a ? a + e : e, this._events[t] && c(this, t)) : (this._events = new o, this._eventsCount = 0), this
        }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = a, u.EventEmitter = u, t.exports = u
    }, {}],
    lU4aU: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "defaultChainRpcs", () => a);
        let a = {
            1: "https://cloudflare-eth.com",
            10: "https://optimism-rpc.publicnode.com",
            56: "https://bsc.publicnode.com",
            97: "https://bsc-testnet.publicnode.com",
            137: "https://polygon-rpc.com",
            204: "https://opbnb-mainnet-rpc.bnbchain.org",
            300: "https://sepolia.era.zksync.dev",
            324: "https://mainnet.era.zksync.io",
            1946: "https://rpc.minato.soneium.org",
            2741: "https://api.mainnet.abs.xyz",
            3939: "https://test.doschain.com",
            4337: "https://build.onbeam.com/rpc",
            5611: "https://opbnb-testnet-rpc.bnbchain.org",
            7979: "https://main.doschain.com",
            8453: "https://mainnet.base.org",
            11124: "https://api.testnet.abs.xyz",
            13337: "https://build.onbeam.com/rpc/testnet",
            13473: "https://rpc.testnet.immutable.com",
            42161: "https://arb1.arbitrum.io/rpc",
            42170: "https://nova.arbitrum.io/rpc",
            43113: "https://api.avax-test.network/ext/bc/C/rpc",
            43114: "https://api.avax.network/ext/bc/C/rpc",
            50104: "https://rpc.sophon.xyz",
            80002: "https://polygon-amoy-bor-rpc.publicnode.com",
            84532: "https://sepolia.base.org",
            247253: "https://rpc-testnet.saakuru.network",
            421614: "https://sepolia-rollup.arbitrum.io/rpc",
            7225878: "https://rpc.saakuru.network",
            7777777: "https://rpc.zora.energy",
            0xaa36a7: "https://ethereum-sepolia-rpc.publicnode.com",
            0xaa37dc: "https://optimism-sepolia-rpc.publicnode.com",
            0x1ad1ba8: "https://rpcv2-testnet.ancient8.gg",
            0x1fa72e78: "https://rpc.testnet.sophon.xyz",
            0x27bc86aa: "https://rpc.degen.tips",
            0x34fb5e38: "https://rpc.ancient8.gg",
            0x3b9ac9ff: "https://sepolia.rpc.zora.energy",
            85011: "https://subnets.avax.network/criminalsa/testnet/rpc",
            84358: "https://subnets.avax.network/titan/mainnet/rpc",
            10143: "https://testnet-rpc.monad.xyz"
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    kBFnU: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "addEthereumChain", () => i);
        var a = e("./JsonRpcError.js");
        let o = ["chainId", "chainName", "nativeCurrency"],
            i = async ({
                params: e,
                rpcProvider: t,
                storage: r
            }) => {
                if (!e || !Array.isArray(e) || 0 === e.length) throw new(0, a.JsonRpcError)(a.RpcErrorCode.INVALID_PARAMS, "Invalid parameters for wallet_addEthereumChain");
                let s = parseInt((e => {
                        var t;
                        if (!e || "object" != typeof e) throw new(0, a.JsonRpcError)(a.RpcErrorCode.INVALID_PARAMS, "Invalid chain parameter: expected an object");
                        if (!o.every(t => t in e)) throw new(0, a.JsonRpcError)(a.RpcErrorCode.INVALID_PARAMS, `Invalid chain parameter. The following properties are required: ${o.join(", ")}`);
                        if (!e.chainName || "" === e.chainName.trim()) throw new(0, a.JsonRpcError)(a.RpcErrorCode.INVALID_PARAMS, "chainName cannot be empty");
                        if (!((t = e.nativeCurrency) && "object" == typeof t && "name" in t && "symbol" in t && "decimals" in t && "string" == typeof t.name && "string" == typeof t.symbol && "number" == typeof t.decimals && Number.isInteger(t.decimals))) throw new(0, a.JsonRpcError)(a.RpcErrorCode.INVALID_PARAMS, "Invalid nativeCurrency object");
                        if (0 === e.rpcUrls?.length) throw new(0, a.JsonRpcError)(a.RpcErrorCode.INVALID_PARAMS, "At least one RPC URL must be provided");
                        if (!/^0x[0-9a-fA-F]+$/.test(e.chainId)) throw new(0, a.JsonRpcError)(a.RpcErrorCode.INVALID_PARAMS, "chainId must be a valid hex string");
                        return {
                            chainId: e.chainId,
                            blockExplorerUrls: e.blockExplorerUrls || [],
                            chainName: e.chainName,
                            iconUrls: e.iconUrls || [],
                            rpcUrls: e.rpcUrls || [],
                            nativeCurrency: e.nativeCurrency
                        }
                    })(e[0]).chainId, 16),
                    {
                        chainId: n
                    } = await t.detectNetwork();
                return s !== n && null
            }
    }, {
        "./JsonRpcError.js": "5MjlL",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    iRVAB: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "registerSession", () => u);
        var a = e("../../core/errors/openfortError.js"),
            o = e("./JsonRpcError.js");

        function i(e) {
            return {
                data: "token-allowance" === e.type ? {
                    allowance: e.data.allowance.toString()
                } : "gas-limit" === e.type ? {
                    limit: e.data.limit.toString()
                } : e.data,
                type: "string" == typeof e.type ? e.type : e.type.custom
            }
        }

        function l(e) {
            return {
                ...e,
                policies: e.policies.map(i),
                required: e.required ?? !1,
                type: "string" == typeof e.type ? e.type : e.type.custom
            }
        }

        function c(e) {
            return {
                expiry: e.validUntil ? Number(e.validUntil) : 0,
                grantedPermissions: e.whitelist ? e.whitelist.map(t => ({
                    type: "contract-call",
                    data: {
                        address: t,
                        calls: []
                    },
                    policies: [{
                        data: {
                            limit: e.limit
                        },
                        type: {
                            custom: "usage-limit"
                        }
                    }]
                })) : [],
                permissionsContext: e.id
            }
        }
        let u = async ({
            params: e,
            signer: t,
            account: r,
            authentication: s,
            backendClient: n,
            policyId: i
        }) => {
            let u = await (async (e, t, r, s, n) => {
                let i, c = e[0],
                    u = Math.floor((new Date).getTime() / 1e3),
                    d = Math.floor(new Date(Date.now() + 1e3 * c.expiry).getTime() / 1e3),
                    p = c.permissions.map(l),
                    f = p.filter(e => "contract-call" === e.type || "erc20-token-transfer" === e.type).map(e => e.data.address),
                    h = p[0].policies.find(e => "usage-limit" === e.type)?.data?.limit;
                if ("signer" in c && c.signer) {
                    if ("keys" === c.signer.type) throw new(0, o.JsonRpcError)(o.RpcErrorCode.INVALID_PARAMS, "Multi-key signers are not supported for session creation");
                    "key" !== c.signer.type && "account" !== c.signer.type || (i = c.signer.data.id)
                } else "account" in c && c.account && (i = c.account);
                if (!i) throw new(0, o.JsonRpcError)(o.RpcErrorCode.INVALID_PARAMS, "Failed to request permissions - missing session address");
                let g = ((e, t, r, s, n, a = !1, o, i, l, c) => {
                    let u = {
                        address: e,
                        chainId: t,
                        validAfter: r,
                        validUntil: s,
                        optimistic: a,
                        whitelist: o,
                        player: i
                    };
                    return n && (u.policy = n), c && (u.externalOwnerAddress = c), l && (u.limit = l), u
                })(i, r.chainId, u, d, n, !1, f, s.player, h);
                return (0, a.withOpenfortError)(async () => (await t.sessionsApi.createSession({
                    createSessionRequest: g
                }, {
                    headers: {
                        authorization: `Bearer ${t.config.backend.accessToken}`,
                        "x-player-token": s.token,
                        "x-auth-provider": s.thirdPartyProvider,
                        "x-token-type": s.thirdPartyTokenType
                    }
                })).data, {
                    default: a.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            })(e, n, r, s, i).catch(e => {
                throw new(0, o.JsonRpcError)(o.RpcErrorCode.TRANSACTION_REJECTED, e.message)
            });
            if (u?.nextAction?.payload?.signableHash) {
                let e;
                return e = [300, 0x1fa72e78, 324, 50104, 2741, 11124].includes(r.chainId) ? await t.sign(u.nextAction.payload.signableHash, !1, !1) : await t.sign(u.nextAction.payload.signableHash), c(await (0, a.withOpenfortError)(async () => (await n.sessionsApi.signatureSession({
                    id: u.id,
                    signatureRequest: {
                        signature: e
                    }
                })).data, {
                    default: a.OpenfortErrorType.AUTHENTICATION_ERROR
                }).catch(e => {
                    throw new(0, o.JsonRpcError)(o.RpcErrorCode.TRANSACTION_REJECTED, e.message)
                }))
            }
            if (!1 === u.isActive) throw new(0, o.JsonRpcError)(o.RpcErrorCode.TRANSACTION_REJECTED, "Failed to grant permissions");
            return c(u)
        }
    }, {
        "../../core/errors/openfortError.js": "3xESR",
        "./JsonRpcError.js": "5MjlL",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    h0LtA: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "revokeSession", () => i);
        var a = e("../../core/errors/openfortError.js"),
            o = e("./JsonRpcError.js");
        let i = async ({
            params: e,
            signer: t,
            account: r,
            authentication: s,
            backendClient: n,
            policyId: i
        }) => {
            let l = e[0];
            if (!l.permissionContext) return await t.disconnect(), {};
            let c = await (async (e, t, r, s, n) => {
                let o = ((e, t, r, s) => {
                    let n = {
                        address: e,
                        chainId: t,
                        player: r
                    };
                    return s && (n.policy = s), n
                })(e.permissionContext, r.chainId, s.player, n);
                return (0, a.withOpenfortError)(async () => (await t.sessionsApi.revokeSession({
                    revokeSessionRequest: o
                }, {
                    headers: {
                        authorization: `Bearer ${t.config.backend.accessToken}`,
                        "x-player-token": s.token,
                        "x-auth-provider": s.thirdPartyProvider,
                        "x-token-type": s.thirdPartyTokenType
                    }
                })).data, {
                    default: a.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            })(l, n, r, s, i).catch(e => {
                throw new(0, o.JsonRpcError)(o.RpcErrorCode.TRANSACTION_REJECTED, e.message)
            });
            if (c?.nextAction?.payload?.signableHash) {
                let e;
                return e = [300, 0x1fa72e78, 324, 50104, 2741, 11124].includes(r.chainId) ? await t.sign(c.nextAction.payload.signableHash, !1, !1) : await t.sign(c.nextAction.payload.signableHash), (await n.sessionsApi.signatureSession({
                    id: c.id,
                    signatureRequest: {
                        signature: e
                    }
                }).catch(e => {
                    throw new(0, o.JsonRpcError)(o.RpcErrorCode.TRANSACTION_REJECTED, e.message)
                })).data
            }
            return c
        }
    }, {
        "../../core/errors/openfortError.js": "3xESR",
        "./JsonRpcError.js": "5MjlL",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    bOo3j: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "sendCalls", () => i);
        var a = e("../../core/errors/openfortError.js"),
            o = e("./JsonRpcError.js");
        let i = async ({
            params: e,
            signer: t,
            account: r,
            authentication: s,
            backendClient: n,
            policyId: i
        }) => {
            let l = e[0]?.capabilities?.paymasterService?.policy ?? i,
                c = await (async (e, t, r, s, n) => {
                    let i = e.map(e => {
                        if (!e.to) throw new(0, o.JsonRpcError)(o.RpcErrorCode.INVALID_PARAMS, 'wallet_sendCalls requires a "to" field');
                        return {
                            to: String(e.to),
                            data: e.data ? String(e.data) : void 0,
                            value: e.value ? String(e.value) : void 0
                        }
                    });
                    return (0, a.withOpenfortError)(async () => (await t.transactionIntentsApi.createTransactionIntent({
                        createTransactionIntentRequest: {
                            policy: n,
                            chainId: r.chainId,
                            interactions: i
                        }
                    }, {
                        headers: {
                            authorization: `Bearer ${t.config.backend.accessToken}`,
                            "x-player-token": s.token,
                            "x-auth-provider": s.thirdPartyProvider,
                            "x-token-type": s.thirdPartyTokenType
                        }
                    })).data, {
                        default: a.OpenfortErrorType.AUTHENTICATION_ERROR
                    })
                })(e, n, r, s, l).catch(e => {
                    throw new(0, o.JsonRpcError)(o.RpcErrorCode.TRANSACTION_REJECTED, e.message)
                });
            if (c.response?.error.reason) throw new(0, o.JsonRpcError)(o.RpcErrorCode.TRANSACTION_REJECTED, c.response?.error.reason);
            if (c?.nextAction?.payload?.signableHash) {
                let e;
                e = [300, 0x1fa72e78, 324, 50104, 2741, 11124].includes(r.chainId) ? await t.sign(c.nextAction.payload.signableHash, !1, !1) : await t.sign(c.nextAction.payload.signableHash);
                let s = await (0, a.withOpenfortError)(async () => await n.transactionIntentsApi.signature({
                    id: c.id,
                    signatureRequest: {
                        signature: e
                    }
                }), {
                    default: a.OpenfortErrorType.AUTHENTICATION_ERROR
                }).catch(e => {
                    throw new(0, o.JsonRpcError)(o.RpcErrorCode.TRANSACTION_REJECTED, e.message)
                });
                if (0 === s.data.response?.status) throw new(0, o.JsonRpcError)(o.RpcErrorCode.TRANSACTION_REJECTED, s.data.response?.error.reason);
                return s.data.response?.transactionHash
            }
            return c.response?.transactionHash
        }
    }, {
        "../../core/errors/openfortError.js": "3xESR",
        "./JsonRpcError.js": "5MjlL",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    fT4j5: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "getCallStatus", () => i);
        var a = e("../../core/errors/openfortError.js"),
            o = e("./JsonRpcError.js");
        let i = async ({
            params: e,
            authentication: t,
            backendClient: r
        }) => {
            let s = await (async (e, t, r) => (0, a.withOpenfortError)(async () => (await t.transactionIntentsApi.getTransactionIntent({
                id: e
            }, {
                headers: {
                    authorization: `Bearer ${t.config.backend.accessToken}`,
                    "x-player-token": r.token,
                    "x-auth-provider": r.thirdPartyProvider,
                    "x-token-type": r.thirdPartyTokenType
                }
            })).data, {
                default: a.OpenfortErrorType.AUTHENTICATION_ERROR
            }))(e[0], r, t).catch(e => {
                throw new(0, o.JsonRpcError)(o.RpcErrorCode.TRANSACTION_REJECTED, e.message)
            });
            return {
                status: s.response ? "CONFIRMED" : "PENDING",
                receipts: s.response ? [{
                    status: 0 === s.response.status ? "reverted" : "success",
                    logs: s.response.logs?.map(e => ({
                        address: e.address,
                        data: e.data,
                        topics: e.topics
                    })) || [],
                    blockHash: s.response.transactionHash || "",
                    blockNumber: BigInt(s.response.blockNumber || 0),
                    gasUsed: BigInt(s.response.gasUsed || 0),
                    transactionHash: s.response.transactionHash || ""
                }] : void 0
            }
        }
    }, {
        "../../core/errors/openfortError.js": "3xESR",
        "./JsonRpcError.js": "5MjlL",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    dk0yV: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "personalSign", () => i);
        var a = e("../../utils/crypto.js"),
            o = e("./JsonRpcError.js");
        let i = async ({
            params: e,
            signer: t,
            account: r
        }) => {
            let s = e[0],
                n = e[1];
            if (!n || !s) throw new(0, o.JsonRpcError)(o.RpcErrorCode.INVALID_PARAMS, "personal_sign requires an address and a message");
            if (n.toLowerCase() !== r.address.toLowerCase()) throw new(0, o.JsonRpcError)(o.RpcErrorCode.INVALID_PARAMS, "personal_sign requires the signer to be the from address");
            return await t.sign((0, a.hexToString)(s), !1, !0)
        }
    }, {
        "../../utils/crypto.js": "3dq9D",
        "./JsonRpcError.js": "5MjlL",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    d2KSV: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "estimateGas", () => i);
        var a = e("../../core/errors/openfortError.js"),
            o = e("./JsonRpcError.js");
        let i = async ({
            params: e,
            account: t,
            authentication: r,
            backendClient: s,
            policyId: n
        }) => (await (async (e, t, r, s, n) => {
            let i = e.map(e => {
                if (!e.to) throw new(0, o.JsonRpcError)(o.RpcErrorCode.INVALID_PARAMS, 'eth_estimateGas requires a "to" field');
                return {
                    to: String(e.to),
                    data: e.data ? String(e.data) : void 0,
                    value: e.value ? String(e.value) : void 0
                }
            });
            return (0, a.withOpenfortError)(async () => (await t.transactionIntentsApi.estimateTransactionIntentCost({
                createTransactionIntentRequest: {
                    policy: n,
                    chainId: r.chainId,
                    interactions: i
                }
            }, {
                headers: {
                    authorization: `Bearer ${t.config.backend.accessToken}`,
                    "x-player-token": s.token,
                    "x-auth-provider": s.thirdPartyProvider,
                    "x-token-type": s.thirdPartyTokenType
                }
            })).data, {
                default: a.OpenfortErrorType.AUTHENTICATION_ERROR
            })
        })(e, s, t, r, n).catch(e => {
            throw new(0, o.JsonRpcError)(o.RpcErrorCode.TRANSACTION_REJECTED, e.message)
        })).estimatedTXGas
    }, {
        "../../core/errors/openfortError.js": "3xESR",
        "./JsonRpcError.js": "5MjlL",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "43YbP": [function(e, t, r, s) {
        t.exports = Promise.all([e("63e32bce7f1a5665")(t.bundle.resolve("2XE7A")), e("63e32bce7f1a5665")(t.bundle.resolve("36iUx"))]).then(() => t.bundle.root("lpm2Y"))
    }, {
        "63e32bce7f1a5665": "6IWJC"
    }],
    "3LTkv": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "announceProvider", () => o), n.export(r, "openfortProviderInfo", () => a);
        let a = {
            icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="597.32 331.34 171.36 105.32" ><g><rect x="673.9" y="404.26" width="18.2" height="32.4" /><polygon points="768.68,331.36 768.68,331.36 768.68,331.34 610.78,331.34 610.78,331.36 597.32,331.36 597.32,436.64    615.52,436.64 615.52,349.54 750.48,349.54 750.48,436.64 768.68,436.64  " /><polygon points="732.16,367.79 633.83,367.79 633.83,370.19 633.79,370.19 633.79,436.64 651.99,436.64 651.99,385.99    713.9,385.99 713.9,436.64 732.09,436.64 732.09,385.99 732.16,385.99  " /></g></svg>',
            name: "Openfort",
            rdns: "xyz.openfort",
            uuid: (0, e("../../../utils/crypto.js").randomUUID)()
        };

        function o(e) {
            if ("undefined" == typeof window) return;
            let t = new CustomEvent("eip6963:announceProvider", {
                detail: Object.freeze(e)
            });
            window.dispatchEvent(t), window.addEventListener("eip6963:requestProvider", () => window.dispatchEvent(t))
        }
    }, {
        "../../../utils/crypto.js": "3dq9D",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "18PER": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "EmbeddedSigner", () => i);
        var a = e("../utils/debug.js"),
            o = e("../core/configuration/account.js");
        class i {
            iframeManager;
            storage;
            constructor(e, t) {
                this.iframeManager = e, this.storage = t
            }
            async sign(e, t, r) {
                return (0, a.debugLog)("Signing message:", e, "requireArrayify:", t, "requireHash:", r), await this.iframeManager.sign(e, t, r)
            }
            async export () {
                return await this.iframeManager.export()
            }
            async switchChain({
                chainId: e
            }) {
                let t = await this.iframeManager.switchChain(e);
                new(0, o.Account)(t.address, t.chainId, t.ownerAddress, t.accountType).save(this.storage)
            }
            async setEmbeddedRecovery({
                recoveryMethod: e,
                recoveryPassword: t,
                encryptionSession: r
            }) {
                await this.iframeManager.setEmbeddedRecovery(e, t, r)
            }
            async disconnect() {
                await this.iframeManager.disconnect()
            }
        }
    }, {
        "../utils/debug.js": "8822a",
        "../core/configuration/account.js": "f6fHD",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    eYWLa: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "default", () => d);
        var a = e("../backwardCompatibility.js"),
            o = e("../guards.js"),
            i = e("../PenpalError.js"),
            l = n.interopDefault(i),
            c = e("../PenpalBugError.js"),
            u = n.interopDefault(c);
        class d {
            #r;
            #e;
            #t;
            #n;
            #i;
            #a = new Set;
            #o;
            #s = !1;
            constructor({
                remoteWindow: e,
                allowedOrigins: t
            }) {
                if (!e) throw new(0, l.default)("INVALID_ARGUMENT", "remoteWindow must be defined");
                this.#r = e, this.#e = t?.length ? t : [window.origin]
            }
            initialize = ({
                log: e,
                validateReceivedMessage: t
            }) => {
                this.#t = e, this.#n = t, window.addEventListener("message", this.#u)
            };
            sendMessage = (e, t) => {
                if ((0, o.isSynMessage)(e)) {
                    let r = this.#d(e);
                    return void this.#r.postMessage(e, {
                        targetOrigin: r,
                        transfer: t
                    })
                }
                if ((0, o.isAck1Message)(e) || this.#s) {
                    let r = this.#s ? (0, a.downgradeMessage)(e) : e,
                        s = this.#d(e);
                    return void this.#r.postMessage(r, {
                        targetOrigin: s,
                        transfer: t
                    })
                }
                if ((0, o.isAck2Message)(e)) {
                    let {
                        port1: r,
                        port2: s
                    } = new MessageChannel;
                    this.#o = r, r.addEventListener("message", this.#p), r.start();
                    let n = [s, ...t || []],
                        a = this.#d(e);
                    return void this.#r.postMessage(e, {
                        targetOrigin: a,
                        transfer: n
                    })
                }
                if (!this.#o) throw new(0, u.default)("Port is undefined");
                this.#o.postMessage(e, {
                    transfer: t
                })
            };
            addMessageHandler = e => {
                this.#a.add(e)
            };
            removeMessageHandler = e => {
                this.#a.delete(e)
            };
            destroy = () => {
                window.removeEventListener("message", this.#u), this.#c(), this.#a.clear()
            };
            #l = e => this.#e.some(t => t instanceof RegExp ? t.test(e) : t === e || "*" === t);
            #d = e => {
                if ((0, o.isSynMessage)(e)) return "*";
                if (!this.#i) throw new(0, u.default)("Concrete remote origin not set");
                return "null" === this.#i && this.#e.includes("*") ? "*" : this.#i
            };
            #c = () => {
                this.#o?.removeEventListener("message", this.#p), this.#o?.close(), this.#o = void 0
            };
            #u = ({
                source: e,
                origin: t,
                ports: r,
                data: s
            }) => {
                if (e === this.#r && ((0, a.isDeprecatedMessage)(s) && (this.#t?.("Please upgrade the child window to the latest version of Penpal."), this.#s = !0, s = (0, a.upgradeMessage)(s)), this.#n?.(s)))
                    if (this.#l(t)) {
                        if ((0, o.isSynMessage)(s) && (this.#c(), this.#i = t), (0, o.isAck2Message)(s) && !this.#s) {
                            if ([this.#o] = r, !this.#o) throw new(0, u.default)("No port received on ACK2");
                            this.#o.addEventListener("message", this.#p), this.#o.start()
                        }
                        for (let e of this.#a) e(s)
                    } else this.#t?.(`Received a message from origin \`${t}\` which did not match allowed origins \`[${this.#e.join(", ")}]\``)
            };
            #p = ({
                data: e
            }) => {
                if (this.#n?.(e))
                    for (let t of this.#a) t(e)
            }
        }
    }, {
        "../backwardCompatibility.js": "hsQQI",
        "../guards.js": "6PYiY",
        "../PenpalError.js": "dwP65",
        "../PenpalBugError.js": "4tDPR",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "6FRSo": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "UserApi", () => i);
        var a = e("../core/configuration/authentication.js"),
            o = e("../core/errors/openfortError.js");
        class i {
            storage;
            authManager;
            validateAndRefreshToken;
            constructor(e, t, r) {
                this.storage = e, this.authManager = t, this.validateAndRefreshToken = r
            }
            async get() {
                await this.validateAndRefreshToken();
                let e = await a.Authentication.fromStorage(this.storage);
                if (!e) throw new(0, o.OpenfortError)("No access token found", o.OpenfortErrorType.NOT_LOGGED_IN_ERROR);
                return await this.authManager.getUser(e)
            }
        }
    }, {
        "../core/configuration/authentication.js": "1Nfd7",
        "../core/errors/openfortError.js": "3xESR",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "3zeZX": [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "ProxyApi", () => i);
        var a = e("../core/config/config.js"),
            o = e("../core/errors/openfortError.js");
        class i {
            storage;
            backendApiClients;
            validateAndRefreshToken;
            ensureInitialized;
            getSignerSignFunction;
            constructor(e, t, r, s, n) {
                this.storage = e, this.backendApiClients = t, this.validateAndRefreshToken = r, this.ensureInitialized = s, this.getSignerSignFunction = n
            }
            async sendSignatureTransactionIntentRequest(e, t = null, r = null, s = !1) {
                if (await this.ensureInitialized(), !a.SDKConfiguration.fromStorage()) throw new(0, o.OpenfortError)("Configuration not found", o.OpenfortErrorType.INVALID_CONFIGURATION);
                await this.validateAndRefreshToken();
                let n = r;
                if (!n) {
                    if (!t) throw new(0, o.OpenfortError)("No signableHash or signature provided", o.OpenfortErrorType.OPERATION_NOT_SUPPORTED_ERROR);
                    if (!this.getSignerSignFunction) throw new(0, o.OpenfortError)("In order to sign a transaction intent, a signer must be configured", o.OpenfortErrorType.MISSING_SIGNER_ERROR);
                    let e = await this.getSignerSignFunction();
                    n = await e(t)
                }
                let i = {
                    id: e,
                    signatureRequest: {
                        signature: n,
                        optimistic: s
                    }
                };
                return (0, o.withOpenfortError)(async () => (await this.backendApiClients.transactionIntentsApi.signature(i)).data, {
                    default: o.OpenfortErrorType.INTERNAL_ERROR
                })
            }
            async sendSignatureSessionRequest(e, t, r) {
                await this.ensureInitialized();
                let s = {
                    id: e,
                    signatureRequest: {
                        signature: t,
                        optimistic: r
                    }
                };
                return (0, o.withOpenfortError)(async () => (await this.backendApiClients.sessionsApi.signatureSession(s)).data, {
                    default: o.OpenfortErrorType.INTERNAL_ERROR
                })
            }
        }
    }, {
        "../core/config/config.js": "8pPBU",
        "../core/errors/openfortError.js": "3xESR",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    kvnur: [function(e, t, r, s) {
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "OpenfortInternal", () => u);
        var a = e("../utils/debug.js"),
            o = e("../storage/istorage.js"),
            i = e("./errors/openfortError.js"),
            l = e("./configuration/authentication.js"),
            c = e("../types/types.js");
        class u {
            storage;
            authManager;
            eventEmitter;
            constructor(e, t, r) {
                this.storage = e, this.authManager = t, this.eventEmitter = r
            }
            async getAccessToken() {
                return (await l.Authentication.fromStorage(this.storage))?.token ?? null
            }
            async validateAndRefreshToken(e) {
                let t, r = await l.Authentication.fromStorage(this.storage);
                if (!r) throw new(0, i.OpenfortError)("Must be logged in to validate and refresh token", i.OpenfortErrorType.NOT_LOGGED_IN_ERROR);
                if ("jwt" === r.type) {
                    (0, a.debugLog)("validating credentials...");
                    try {
                        t = await this.authManager.validateCredentials(r, e)
                    } catch (e) {
                        throw this.storage.remove(o.StorageKeys.AUTHENTICATION), this.eventEmitter.emit(c.OpenfortEvents.LOGGED_OUT), e
                    }
                    if (!t.player) throw new(0, i.OpenfortError)("No user found in credentials", i.OpenfortErrorType.INTERNAL_ERROR);
                    t.accessToken !== r.token && ((0, a.debugLog)("tokens refreshed"), new(0, l.Authentication)("jwt", t.accessToken, t.player, t.refreshToken).save(this.storage), this.eventEmitter.emit(c.OpenfortEvents.TOKEN_REFRESHED))
                }
            }
        }
    }, {
        "../utils/debug.js": "8822a",
        "../storage/istorage.js": "8EpXG",
        "./errors/openfortError.js": "3xESR",
        "./configuration/authentication.js": "1Nfd7",
        "../types/types.js": "fUPIN",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }]
}, ["gJu1s", "id4SM"], "id4SM", "parcelRequire3602", {}, "./", 0);
//# sourceMappingURL=index.js.map
