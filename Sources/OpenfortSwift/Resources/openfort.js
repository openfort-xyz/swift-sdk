! function(e, t, r, s, a, n, i, o) {
    var l, c = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
        d = "function" == typeof c[s] && c[s],
        u = d.i || {},
        p = d.cache || {},
        f = "undefined" != typeof module && "function" == typeof module.require && module.require.bind(module);

    function h(t, r) {
        if (!p[t]) {
            if (!e[t]) {
                if (a[t]) return a[t];
                var n = "function" == typeof c[s] && c[s];
                if (!r && n) return n(t, !0);
                if (d) return d(t, !0);
                if (f && "string" == typeof t) return f(t);
                var i = Error("Cannot find module '" + t + "'");
                throw i.code = "MODULE_NOT_FOUND", i
            }
            l.resolve = function(r) {
                var s = e[t][1][r];
                return null != s ? s : r
            }, l.cache = {};
            var o = p[t] = new h.Module(t);
            e[t][0].call(o.exports, l, o, o.exports, c)
        }
        return p[t].exports;

        function l(e) {
            var t = l.resolve(e);
            return !1 === t ? {} : h(t)
        }
    }
    h.isParcelRequire = !0, h.Module = function(e) {
        this.id = e, this.bundle = h, this.require = f, this.exports = {}
    }, h.modules = e, h.cache = p, h.parent = d, h.distDir = "./", h.publicUrl = "/", h.devServer = void 0, h.i = u, h.register = function(t, r) {
        e[t] = [function(e, t) {
            t.exports = r
        }, {}]
    }, h.resolve = function(e) {
        if (e = u[e] || e, !l) try {
            throw Error()
        } catch (r) {
            var t = ("" + r.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
            if (!t) return "./" + e;
            l = t[0]
        }
        return new URL(n + e, l).toString()
    }, h.extendImportMap = function(e) {
        Object.assign(u, e)
    }, Object.defineProperty(h, "root", {
        get: function() {
            return c[s]
        }
    }), c[s] = h;
    for (var y = 0; y < t.length; y++) h(t[y]);
    if (r) {
        var m = h(r);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = m : "function" == typeof define && define.amd && define(function() {
            return m
        })
    }
}({
    c4w0B: [function(e, t, r, s) {
        t.bundle.extendImportMap({
            "7UhPZ": "esm.7a5d15e0.js",
            "2XE7A": "lib.esm.da46daf6.js",
            gNKqS: "lib.esm.f6994d39.js",
            lj5Vn: "lib.esm.796e84f1.js",
            "36iUx": "lib.esm.811e0d0a.js"
        })
    }, {}],
    id4SM: [function(e, t, r, s) {
        var a = e("@openfort/openfort-js");
        window.Openfort = a.Openfort
    }, {
        "@openfort/openfort-js": "31lx6"
    }],
    "31lx6": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "OpenfortError", () => n.OpenfortError), a.export(r, "OpenfortErrorType", () => n.OpenfortErrorType), a.export(r, "AccountTypeEnum", () => i.AccountTypeEnum), a.export(r, "AuthActionRequiredActions", () => i.AuthActionRequiredActions), a.export(r, "AuthType", () => i.AuthType), a.export(r, "BasicAuthProvider", () => i.BasicAuthProvider), a.export(r, "ChainTypeEnum", () => i.ChainTypeEnum), a.export(r, "EmbeddedState", () => i.EmbeddedState), a.export(r, "OAuthProvider", () => i.OAuthProvider), a.export(r, "RecoveryMethod", () => i.RecoveryMethod), a.export(r, "ThirdPartyOAuthProvider", () => i.ThirdPartyOAuthProvider), a.export(r, "TokenType", () => i.TokenType), a.export(r, "ShieldAuthType", () => o.ShieldAuthType), a.export(r, "MissingProjectEntropyError", () => l.MissingProjectEntropyError), a.export(r, "MissingRecoveryPasswordError", () => l.MissingRecoveryPasswordError), a.export(r, "NotConfiguredError", () => l.NotConfiguredError), a.export(r, "WrongRecoveryPasswordError", () => l.WrongRecoveryPasswordError), a.export(r, "OpenfortConfiguration", () => c.OpenfortConfiguration), a.export(r, "SDKConfiguration", () => c.SDKConfiguration), a.export(r, "ShieldConfiguration", () => c.ShieldConfiguration), a.export(r, "Openfort", () => d.Openfort), a.export(r, "AuthApi", () => u.AuthApi), a.export(r, "EmbeddedWalletApi", () => p.EmbeddedWalletApi), a.export(r, "UserApi", () => f.UserApi), a.export(r, "OpenfortInternal", () => h.OpenfortInternal), a.export(r, "ProxyApi", () => y.ProxyApi);
        var n = e("./core/errors/openfortError.js"),
            i = e("./types/types.js"),
            o = e("./wallets/types.js"),
            l = e("./wallets/iframeManager.js"),
            c = e("./core/config/config.js"),
            d = e("./core/openfort.js"),
            u = e("./api/auth.js"),
            p = e("./api/embeddedWallet.js"),
            f = e("./api/user.js"),
            h = e("./core/openfortInternal.js"),
            y = e("./api/proxy.js")
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
        var a, n, i = e("@parcel/transformer-js/src/esmodule-helpers.js");
        i.defineInteropFlag(r), i.export(r, "OpenfortError", () => l), i.export(r, "OpenfortErrorType", () => n), i.export(r, "withOpenfortError", () => c);
        var o = e("axios");
        (a = n || (n = {})).AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR", a.INVALID_CONFIGURATION = "INVALID_CONFIGURATION", a.NOT_LOGGED_IN_ERROR = "NOT_LOGGED_IN_ERROR", a.ALREADY_LOGGED_IN_ERROR = "ALREADY_LOGGED_IN_ERROR", a.REFRESH_TOKEN_ERROR = "REFRESH_TOKEN_ERROR", a.USER_REGISTRATION_ERROR = "USER_REGISTRATION_ERROR", a.LOGOUT_ERROR = "LOGOUT_ERROR", a.OPERATION_NOT_SUPPORTED_ERROR = "OPERATION_NOT_SUPPORTED_ERROR", a.MISSING_SIGNER_ERROR = "MISSING_SIGNER_ERROR", a.USER_NOT_AUTHORIZED_ON_ECOSYSTEM = "USER_NOT_AUTHORIZED_ON_ECOSYSTEM", a.INTERNAL_ERROR = "INTERNAL_ERROR";
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
            } catch (i) {
                var s;
                let e, a;
                (0, o.isAxiosError)(i) ? (a = i.response?.status, e = i.response?.data && i.response.data.error && "type" in (s = i.response.data.error) && "message" in s ? i.response.data.error.message : i.message) : e = i.message;
                let n = new l(e, void 0 !== a && t[a] ? t[a] : t.default, {});
                throw void 0 !== a && t[a] || r?.(i, n), n
            }
        }
    }, {
        axios: "jhAcT",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    jhAcT: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i.default), a.export(r, "Axios", () => o), a.export(r, "AxiosError", () => l), a.export(r, "CanceledError", () => c), a.export(r, "isCancel", () => d), a.export(r, "CancelToken", () => u), a.export(r, "VERSION", () => p), a.export(r, "all", () => f), a.export(r, "Cancel", () => h), a.export(r, "isAxiosError", () => y), a.export(r, "spread", () => m), a.export(r, "toFormData", () => g), a.export(r, "AxiosHeaders", () => E), a.export(r, "HttpStatusCode", () => w), a.export(r, "formToJSON", () => j), a.export(r, "getAdapter", () => b), a.export(r, "mergeConfig", () => A);
        var n = e("./lib/axios.js"),
            i = a.interopDefault(n);
        let {
            Axios: o,
            AxiosError: l,
            CanceledError: c,
            isCancel: d,
            CancelToken: u,
            VERSION: p,
            all: f,
            Cancel: h,
            isAxiosError: y,
            spread: m,
            toFormData: g,
            AxiosHeaders: E,
            HttpStatusCode: w,
            formToJSON: j,
            getAdapter: b,
            mergeConfig: A
        } = i.default
    }, {
        "./lib/axios.js": "8DJLn",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "8DJLn": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        "use strict";
        var n = e("./utils.js"),
            i = a.interopDefault(n),
            o = e("./helpers/bind.js"),
            l = a.interopDefault(o),
            c = e("./core/Axios.js"),
            d = a.interopDefault(c),
            u = e("./core/mergeConfig.js"),
            p = a.interopDefault(u),
            f = e("./defaults/index.js"),
            h = a.interopDefault(f),
            y = e("./helpers/formDataToJSON.js"),
            m = a.interopDefault(y),
            g = e("./cancel/CanceledError.js"),
            E = a.interopDefault(g),
            w = e("./cancel/CancelToken.js"),
            j = a.interopDefault(w),
            b = e("./cancel/isCancel.js"),
            A = a.interopDefault(b),
            v = e("./env/data.js"),
            I = e("./helpers/toFormData.js"),
            R = a.interopDefault(I),
            S = e("./core/AxiosError.js"),
            T = a.interopDefault(S),
            O = e("./helpers/spread.js"),
            _ = a.interopDefault(O),
            C = e("./helpers/isAxiosError.js"),
            k = a.interopDefault(C),
            P = e("./core/AxiosHeaders.js"),
            x = a.interopDefault(P),
            D = e("./adapters/adapters.js"),
            N = a.interopDefault(D),
            U = e("./helpers/HttpStatusCode.js"),
            J = a.interopDefault(U);
        let M = function e(t) {
            let r = new(0, d.default)(t),
                s = (0, l.default)(d.default.prototype.request, r);
            return i.default.extend(s, d.default.prototype, r, {
                allOwnKeys: !0
            }), i.default.extend(s, r, null, {
                allOwnKeys: !0
            }), s.create = function(r) {
                return e((0, p.default)(t, r))
            }, s
        }(h.default);
        M.Axios = d.default, M.CanceledError = E.default, M.CancelToken = j.default, M.isCancel = A.default, M.VERSION = v.VERSION, M.toFormData = R.default, M.AxiosError = T.default, M.Cancel = M.CanceledError, M.all = function(e) {
            return Promise.all(e)
        }, M.spread = _.default, M.isAxiosError = k.default, M.mergeConfig = p.default, M.AxiosHeaders = x.default, M.formToJSON = e => (0, m.default)(i.default.isHTMLForm(e) ? new FormData(e) : e), M.getAdapter = N.default.getAdapter, M.HttpStatusCode = J.default, M.default = M, r.default = M
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
        let a, n;
        var i, o, l, c, d = e("@parcel/transformer-js/src/esmodule-helpers.js");
        d.defineInteropFlag(r);
        "use strict";
        var u = e("./helpers/bind.js"),
            p = d.interopDefault(u),
            f = arguments[3];
        let {
            toString: h
        } = Object.prototype, {
            getPrototypeOf: y
        } = Object, {
            iterator: m,
            toStringTag: g
        } = Symbol, E = (a = Object.create(null), e => {
            let t = h.call(e);
            return a[t] || (a[t] = t.slice(8, -1).toLowerCase())
        }), w = e => (e = e.toLowerCase(), t => E(t) === e), j = e => t => typeof t === e, {
            isArray: b
        } = Array, A = j("undefined"), v = w("ArrayBuffer"), I = j("string"), R = j("function"), S = j("number"), T = e => null !== e && "object" == typeof e, O = e => {
            if ("object" !== E(e)) return !1;
            let t = y(e);
            return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(g in e) && !(m in e)
        }, _ = w("Date"), C = w("File"), k = w("Blob"), P = w("FileList"), x = w("URLSearchParams"), [D, N, U, J] = ["ReadableStream", "Request", "Response", "Headers"].map(w);

        function M(e, t, {
            allOwnKeys: r = !1
        } = {}) {
            let s, a;
            if (null != e)
                if ("object" != typeof e && (e = [e]), b(e))
                    for (s = 0, a = e.length; s < a; s++) t.call(null, e[s], s, e);
                else {
                    let a, n = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
                        i = n.length;
                    for (s = 0; s < i; s++) a = n[s], t.call(null, e[a], a, e)
                }
        }

        function H(e, t) {
            let r;
            t = t.toLowerCase();
            let s = Object.keys(e),
                a = s.length;
            for (; a-- > 0;)
                if (t === (r = s[a]).toLowerCase()) return r;
            return null
        }
        let L = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : f,
            K = e => !A(e) && e !== L,
            W = (n = "undefined" != typeof Uint8Array && y(Uint8Array), e => n && e instanceof n),
            F = w("HTMLFormElement"),
            B = (({
                hasOwnProperty: e
            }) => (t, r) => e.call(t, r))(Object.prototype),
            G = w("RegExp"),
            q = (e, t) => {
                let r = Object.getOwnPropertyDescriptors(e),
                    s = {};
                M(r, (r, a) => {
                    let n;
                    !1 !== (n = t(r, a, e)) && (s[a] = n || r)
                }), Object.defineProperties(e, s)
            },
            V = w("AsyncFunction"),
            z = (i = "function" == typeof setImmediate, o = R(L.postMessage), i ? setImmediate : o ? (l = `axios@${Math.random()}`, c = [], L.addEventListener("message", ({
                source: e,
                data: t
            }) => {
                e === L && t === l && c.length && c.shift()()
            }, !1), e => {
                c.push(e), L.postMessage(l, "*")
            }) : e => setTimeout(e)),
            $ = "undefined" != typeof queueMicrotask ? queueMicrotask.bind(L) : z;
        r.default = {
            isArray: b,
            isArrayBuffer: v,
            isBuffer: function(e) {
                return null !== e && !A(e) && null !== e.constructor && !A(e.constructor) && R(e.constructor.isBuffer) && e.constructor.isBuffer(e)
            },
            isFormData: e => {
                let t;
                return e && ("function" == typeof FormData && e instanceof FormData || R(e.append) && ("formdata" === (t = E(e)) || "object" === t && R(e.toString) && "[object FormData]" === e.toString()))
            },
            isArrayBufferView: function(e) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && v(e.buffer)
            },
            isString: I,
            isNumber: S,
            isBoolean: e => !0 === e || !1 === e,
            isObject: T,
            isPlainObject: O,
            isReadableStream: D,
            isRequest: N,
            isResponse: U,
            isHeaders: J,
            isUndefined: A,
            isDate: _,
            isFile: C,
            isBlob: k,
            isRegExp: G,
            isFunction: R,
            isStream: e => T(e) && R(e.pipe),
            isURLSearchParams: x,
            isTypedArray: W,
            isFileList: P,
            forEach: M,
            merge: function e() {
                let {
                    caseless: t
                } = K(this) && this || {}, r = {}, s = (s, a) => {
                    let n = t && H(r, a) || a;
                    O(r[n]) && O(s) ? r[n] = e(r[n], s) : O(s) ? r[n] = e({}, s) : b(s) ? r[n] = s.slice() : r[n] = s
                };
                for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && M(arguments[e], s);
                return r
            },
            extend: (e, t, r, {
                allOwnKeys: s
            } = {}) => (M(t, (t, s) => {
                r && R(t) ? e[s] = (0, p.default)(t, r) : e[s] = t
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
                let a, n, i, o = {};
                if (t = t || {}, null == e) return t;
                do {
                    for (n = (a = Object.getOwnPropertyNames(e)).length; n-- > 0;) i = a[n], (!s || s(i, e, t)) && !o[i] && (t[i] = e[i], o[i] = !0);
                    e = !1 !== r && y(e)
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
                if (b(e)) return e;
                let t = e.length;
                if (!S(t)) return null;
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
            isHTMLForm: F,
            hasOwnProperty: B,
            hasOwnProp: B,
            reduceDescriptors: q,
            freezeMethods: e => {
                q(e, (t, r) => {
                    if (R(e) && -1 !== ["arguments", "caller", "callee"].indexOf(r)) return !1;
                    if (R(e[r])) {
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
                return (b(e) ? e : String(e).split(t)).forEach(e => {
                    r[e] = !0
                }), r
            },
            toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, r) {
                return t.toUpperCase() + r
            }),
            noop: () => {},
            toFiniteNumber: (e, t) => null != e && Number.isFinite(e *= 1) ? e : t,
            findKey: H,
            global: L,
            isContextDefined: K,
            isSpecCompliantForm: function(e) {
                return !!(e && R(e.append) && "FormData" === e[g] && e[m])
            },
            toJSONObject: e => {
                let t = Array(10),
                    r = (e, s) => {
                        if (T(e)) {
                            if (t.indexOf(e) >= 0) return;
                            if (!("toJSON" in e)) {
                                t[s] = e;
                                let a = b(e) ? [] : {};
                                return M(e, (e, t) => {
                                    let n = r(e, s + 1);
                                    A(n) || (a[t] = n)
                                }), t[s] = void 0, a
                            }
                        }
                        return e
                    };
                return r(e, 0)
            },
            isAsyncFn: V,
            isThenable: e => e && (T(e) || R(e)) && R(e.then) && R(e.catch),
            setImmediate: z,
            asap: $,
            isIterable: e => null != e && R(e[m])
        }
    }, {
        "./helpers/bind.js": "9mfTC",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "9mfTC": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        "use strict";

        function n(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }
        a.defineInteropFlag(r), a.export(r, "default", () => n)
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        "use strict";
        var n = e("./../utils.js"),
            i = a.interopDefault(n),
            o = e("../helpers/buildURL.js"),
            l = a.interopDefault(o),
            c = e("./InterceptorManager.js"),
            d = a.interopDefault(c),
            u = e("./dispatchRequest.js"),
            p = a.interopDefault(u),
            f = e("./mergeConfig.js"),
            h = a.interopDefault(f),
            y = e("./buildFullPath.js"),
            m = a.interopDefault(y),
            g = e("../helpers/validator.js"),
            E = a.interopDefault(g),
            w = e("./AxiosHeaders.js"),
            j = a.interopDefault(w);
        let b = E.default.validators;
        class A {
            constructor(e) {
                this.defaults = e || {}, this.interceptors = {
                    request: new(0, d.default),
                    response: new(0, d.default)
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
                    transitional: a,
                    paramsSerializer: n,
                    headers: o
                } = t = (0, h.default)(this.defaults, t);
                void 0 !== a && E.default.assertOptions(a, {
                    silentJSONParsing: b.transitional(b.boolean),
                    forcedJSONParsing: b.transitional(b.boolean),
                    clarifyTimeoutError: b.transitional(b.boolean)
                }, !1), null != n && (i.default.isFunction(n) ? t.paramsSerializer = {
                    serialize: n
                } : E.default.assertOptions(n, {
                    encode: b.function,
                    serialize: b.function
                }, !0)), void 0 !== t.allowAbsoluteUrls || (void 0 !== this.defaults.allowAbsoluteUrls ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), E.default.assertOptions(t, {
                    baseUrl: b.spelling("baseURL"),
                    withXsrfToken: b.spelling("withXSRFToken")
                }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
                let l = o && i.default.merge(o.common, o[t.method]);
                o && i.default.forEach(["delete", "get", "head", "post", "put", "patch", "common"], e => {
                    delete o[e]
                }), t.headers = j.default.concat(l, o);
                let c = [],
                    d = !0;
                this.interceptors.request.forEach(function(e) {
                    ("function" != typeof e.runWhen || !1 !== e.runWhen(t)) && (d = d && e.synchronous, c.unshift(e.fulfilled, e.rejected))
                });
                let u = [];
                this.interceptors.response.forEach(function(e) {
                    u.push(e.fulfilled, e.rejected)
                });
                let f = 0;
                if (!d) {
                    let e = [p.default.bind(this), void 0];
                    for (e.unshift.apply(e, c), e.push.apply(e, u), s = e.length, r = Promise.resolve(t); f < s;) r = r.then(e[f++], e[f++]);
                    return r
                }
                s = c.length;
                let y = t;
                for (f = 0; f < s;) {
                    let e = c[f++],
                        t = c[f++];
                    try {
                        y = e(y)
                    } catch (e) {
                        t.call(this, e);
                        break
                    }
                }
                try {
                    r = p.default.call(this, y)
                } catch (e) {
                    return Promise.reject(e)
                }
                for (f = 0, s = u.length; f < s;) r = r.then(u[f++], u[f++]);
                return r
            }
            getUri(e) {
                e = (0, h.default)(this.defaults, e);
                let t = (0, m.default)(e.baseURL, e.url, e.allowAbsoluteUrls);
                return (0, l.default)(t, e.params, e.paramsSerializer)
            }
        }
        i.default.forEach(["delete", "get", "head", "options"], function(e) {
            A.prototype[e] = function(t, r) {
                return this.request((0, h.default)(r || {}, {
                    method: e,
                    url: t,
                    data: (r || {}).data
                }))
            }
        }), i.default.forEach(["post", "put", "patch"], function(e) {
            function t(t) {
                return function(r, s, a) {
                    return this.request((0, h.default)(a || {}, {
                        method: e,
                        headers: t ? {
                            "Content-Type": "multipart/form-data"
                        } : {},
                        url: r,
                        data: s
                    }))
                }
            }
            A.prototype[e] = t(), A.prototype[e + "Form"] = t(!0)
        }), r.default = A
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => d);
        "use strict";
        var n = e("../utils.js"),
            i = a.interopDefault(n),
            o = e("../helpers/AxiosURLSearchParams.js"),
            l = a.interopDefault(o);

        function c(e) {
            return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }

        function d(e, t, r) {
            let s;
            if (!t) return e;
            let a = r && r.encode || c;
            i.default.isFunction(r) && (r = {
                serialize: r
            });
            let n = r && r.serialize;
            if (s = n ? n(t, r) : i.default.isURLSearchParams(t) ? t.toString() : new(0, l.default)(t, r).toString(a)) {
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        "use strict";
        var n = e("./toFormData.js"),
            i = a.interopDefault(n);

        function o(e) {
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
            this._pairs = [], e && (0, i.default)(e, this, t)
        }
        let c = l.prototype;
        c.append = function(e, t) {
            this._pairs.push([e, t])
        }, c.toString = function(e) {
            let t = e ? function(t) {
                return e.call(this, t, o)
            } : o;
            return this._pairs.map(function(e) {
                return t(e[0]) + "=" + t(e[1])
            }, "").join("&")
        }, r.default = l
    }, {
        "./toFormData.js": "k8OtD",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    k8OtD: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        "use strict";
        var n = e("../utils.js"),
            i = a.interopDefault(n),
            o = e("../core/AxiosError.js"),
            l = a.interopDefault(o),
            c = e("../platform/node/classes/FormData.js"),
            d = a.interopDefault(c),
            u = e("adfd9b103875c2dd").Buffer;

        function p(e) {
            return i.default.isPlainObject(e) || i.default.isArray(e)
        }

        function f(e) {
            return i.default.endsWith(e, "[]") ? e.slice(0, -2) : e
        }

        function h(e, t, r) {
            return e ? e.concat(t).map(function(e, t) {
                return e = f(e), !r && t ? "[" + e + "]" : e
            }).join(r ? "." : "") : t
        }
        let y = i.default.toFlatObject(i.default, {}, null, function(e) {
            return /^is[A-Z]/.test(e)
        });
        r.default = function(e, t, r) {
            if (!i.default.isObject(e)) throw TypeError("target must be an object");
            t = t || new(d.default || FormData);
            let s = (r = i.default.toFlatObject(r, {
                    metaTokens: !0,
                    dots: !1,
                    indexes: !1
                }, !1, function(e, t) {
                    return !i.default.isUndefined(t[e])
                })).metaTokens,
                a = r.visitor || g,
                n = r.dots,
                o = r.indexes,
                c = (r.Blob || "undefined" != typeof Blob && Blob) && i.default.isSpecCompliantForm(t);
            if (!i.default.isFunction(a)) throw TypeError("visitor must be a function");

            function m(e) {
                if (null === e) return "";
                if (i.default.isDate(e)) return e.toISOString();
                if (i.default.isBoolean(e)) return e.toString();
                if (!c && i.default.isBlob(e)) throw new(0, l.default)("Blob is not supported. Use a Buffer instead.");
                return i.default.isArrayBuffer(e) || i.default.isTypedArray(e) ? c && "function" == typeof Blob ? new Blob([e]) : u.from(e) : e
            }

            function g(e, r, a) {
                let l = e;
                if (e && !a && "object" == typeof e)
                    if (i.default.endsWith(r, "{}")) r = s ? r : r.slice(0, -2), e = JSON.stringify(e);
                    else {
                        var c;
                        if (i.default.isArray(e) && (c = e, i.default.isArray(c) && !c.some(p)) || (i.default.isFileList(e) || i.default.endsWith(r, "[]")) && (l = i.default.toArray(e))) return r = f(r), l.forEach(function(e, s) {
                            i.default.isUndefined(e) || null === e || t.append(!0 === o ? h([r], s, n) : null === o ? r : r + "[]", m(e))
                        }), !1
                    } return !!p(e) || (t.append(h(a, r, n), m(e)), !1)
            }
            let E = [],
                w = Object.assign(y, {
                    defaultVisitor: g,
                    convertValue: m,
                    isVisitable: p
                });
            if (!i.default.isObject(e)) throw TypeError("data must be an object");
            return ! function e(r, s) {
                if (!i.default.isUndefined(r)) {
                    if (-1 !== E.indexOf(r)) throw Error("Circular reference detected in " + s.join("."));
                    E.push(r), i.default.forEach(r, function(r, n) {
                        !0 === (!(i.default.isUndefined(r) || null === r) && a.call(t, r, i.default.isString(n) ? n.trim() : n, s, w)) && e(r, s ? s.concat(n) : [n])
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
        let a = e("9c62938f1dccc73c"),
            n = e("aceacb6a4531a9d2"),
            i = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

        function o(e) {
            if (e > 0x7fffffff) throw RangeError('The value "' + e + '" is invalid for option "size"');
            let t = new Uint8Array(e);
            return Object.setPrototypeOf(t, l.prototype), t
        }

        function l(e, t, r) {
            if ("number" == typeof e) {
                if ("string" == typeof t) throw TypeError('The "string" argument must be of type string. Received type number');
                return u(e)
            }
            return c(e, t, r)
        }

        function c(e, t, r) {
            if ("string" == typeof e) {
                var s = e,
                    a = t;
                if (("string" != typeof a || "" === a) && (a = "utf8"), !l.isEncoding(a)) throw TypeError("Unknown encoding: " + a);
                let r = 0 | y(s, a),
                    n = o(r),
                    i = n.write(s, a);
                return i !== r && (n = n.slice(0, i)), n
            }
            if (ArrayBuffer.isView(e)) {
                var n = e;
                if (M(n, Uint8Array)) {
                    let e = new Uint8Array(n);
                    return f(e.buffer, e.byteOffset, e.byteLength)
                }
                return p(n)
            }
            if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
            if (M(e, ArrayBuffer) || e && M(e.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (M(e, SharedArrayBuffer) || e && M(e.buffer, SharedArrayBuffer))) return f(e, t, r);
            if ("number" == typeof e) throw TypeError('The "value" argument must not be of type number. Received type number');
            let i = e.valueOf && e.valueOf();
            if (null != i && i !== e) return l.from(i, t, r);
            let c = function(e) {
                if (l.isBuffer(e)) {
                    let t = 0 | h(e.length),
                        r = o(t);
                    return 0 === r.length || e.copy(r, 0, 0, t), r
                }
                return void 0 !== e.length ? "number" != typeof e.length || function(e) {
                    return e != e
                }(e.length) ? o(0) : p(e) : "Buffer" === e.type && Array.isArray(e.data) ? p(e.data) : void 0
            }(e);
            if (c) return c;
            if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return l.from(e[Symbol.toPrimitive]("string"), t, r);
            throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
        }

        function d(e) {
            if ("number" != typeof e) throw TypeError('"size" argument must be of type number');
            if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"')
        }

        function u(e) {
            return d(e), o(e < 0 ? 0 : 0 | h(e))
        }

        function p(e) {
            let t = e.length < 0 ? 0 : 0 | h(e.length),
                r = o(t);
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

        function y(e, t) {
            if (l.isBuffer(e)) return e.length;
            if (ArrayBuffer.isView(e) || M(e, ArrayBuffer)) return e.byteLength;
            if ("string" != typeof e) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
            let r = e.length,
                s = arguments.length > 2 && !0 === arguments[2];
            if (!s && 0 === r) return 0;
            let a = !1;
            for (;;) switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return r;
                case "utf8":
                case "utf-8":
                    return N(e).length;
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
                    if (a) return s ? -1 : N(e).length;
                    t = ("" + t).toLowerCase(), a = !0
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
                        let a = "";
                        for (let s = t; s < r; ++s) a += H[e[s]];
                        return a
                    }(this, t, r);
                case "utf8":
                case "utf-8":
                    return j(this, t, r);
                case "ascii":
                    return function(e, t, r) {
                        let s = "";
                        r = Math.min(e.length, r);
                        for (let a = t; a < r; ++a) s += String.fromCharCode(127 & e[a]);
                        return s
                    }(this, t, r);
                case "latin1":
                case "binary":
                    return function(e, t, r) {
                        let s = "";
                        r = Math.min(e.length, r);
                        for (let a = t; a < r; ++a) s += String.fromCharCode(e[a]);
                        return s
                    }(this, t, r);
                case "base64":
                    var n, i, o;
                    return n = this, i = t, o = r, 0 === i && o === n.length ? a.fromByteArray(n) : a.fromByteArray(n.slice(i, o));
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return function(e, t, r) {
                        let s = e.slice(t, r),
                            a = "";
                        for (let e = 0; e < s.length - 1; e += 2) a += String.fromCharCode(s[e] + 256 * s[e + 1]);
                        return a
                    }(this, t, r);
                default:
                    if (s) throw TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(), s = !0
            }
        }

        function g(e, t, r) {
            let s = e[t];
            e[t] = e[r], e[r] = s
        }

        function E(e, t, r, s, a) {
            var n;
            if (0 === e.length) return -1;
            if ("string" == typeof r ? (s = r, r = 0) : r > 0x7fffffff ? r = 0x7fffffff : r < -0x80000000 && (r = -0x80000000), (n = r *= 1) != n && (r = a ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length)
                if (a) return -1;
                else r = e.length - 1;
            else if (r < 0)
                if (!a) return -1;
                else r = 0;
            if ("string" == typeof t && (t = l.from(t, s)), l.isBuffer(t)) return 0 === t.length ? -1 : w(e, t, r, s, a);
            if ("number" == typeof t) {
                if (t &= 255, "function" == typeof Uint8Array.prototype.indexOf)
                    if (a) return Uint8Array.prototype.indexOf.call(e, t, r);
                    else return Uint8Array.prototype.lastIndexOf.call(e, t, r);
                return w(e, [t], r, s, a)
            }
            throw TypeError("val must be string, number or Buffer")
        }

        function w(e, t, r, s, a) {
            let n, i = 1,
                o = e.length,
                l = t.length;
            if (void 0 !== s && ("ucs2" === (s = String(s).toLowerCase()) || "ucs-2" === s || "utf16le" === s || "utf-16le" === s)) {
                if (e.length < 2 || t.length < 2) return -1;
                i = 2, o /= 2, l /= 2, r /= 2
            }

            function c(e, t) {
                return 1 === i ? e[t] : e.readUInt16BE(t * i)
            }
            if (a) {
                let s = -1;
                for (n = r; n < o; n++)
                    if (c(e, n) === c(t, -1 === s ? 0 : n - s)) {
                        if (-1 === s && (s = n), n - s + 1 === l) return s * i
                    } else - 1 !== s && (n -= n - s), s = -1
            } else
                for (r + l > o && (r = o - l), n = r; n >= 0; n--) {
                    let r = !0;
                    for (let s = 0; s < l; s++)
                        if (c(e, n + s) !== c(t, s)) {
                            r = !1;
                            break
                        } if (r) return n
                }
            return -1
        }

        function j(e, t, r) {
            r = Math.min(e.length, r);
            let s = [],
                a = t;
            for (; a < r;) {
                let t = e[a],
                    n = null,
                    i = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
                if (a + i <= r) {
                    let r, s, o, l;
                    switch (i) {
                        case 1:
                            t < 128 && (n = t);
                            break;
                        case 2:
                            (192 & (r = e[a + 1])) == 128 && (l = (31 & t) << 6 | 63 & r) > 127 && (n = l);
                            break;
                        case 3:
                            r = e[a + 1], s = e[a + 2], (192 & r) == 128 && (192 & s) == 128 && (l = (15 & t) << 12 | (63 & r) << 6 | 63 & s) > 2047 && (l < 55296 || l > 57343) && (n = l);
                            break;
                        case 4:
                            r = e[a + 1], s = e[a + 2], o = e[a + 3], (192 & r) == 128 && (192 & s) == 128 && (192 & o) == 128 && (l = (15 & t) << 18 | (63 & r) << 12 | (63 & s) << 6 | 63 & o) > 65535 && l < 1114112 && (n = l)
                    }
                }
                null === n ? (n = 65533, i = 1) : n > 65535 && (n -= 65536, s.push(n >>> 10 & 1023 | 55296), n = 56320 | 1023 & n), s.push(n), a += i
            }
            var n = s;
            let i = n.length;
            if (i <= 4096) return String.fromCharCode.apply(String, n);
            let o = "",
                l = 0;
            for (; l < i;) o += String.fromCharCode.apply(String, n.slice(l, l += 4096));
            return o
        }

        function b(e, t, r) {
            if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
            if (e + t > r) throw RangeError("Trying to access beyond buffer length")
        }

        function A(e, t, r, s, a, n) {
            if (!l.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
            if (t > a || t < n) throw RangeError('"value" argument is out of bounds');
            if (r + s > e.length) throw RangeError("Index out of range")
        }

        function v(e, t, r, s, a) {
            k(t, s, a, e, r, 7);
            let n = Number(t & BigInt(0xffffffff));
            e[r++] = n, n >>= 8, e[r++] = n, n >>= 8, e[r++] = n, n >>= 8, e[r++] = n;
            let i = Number(t >> BigInt(32) & BigInt(0xffffffff));
            return e[r++] = i, i >>= 8, e[r++] = i, i >>= 8, e[r++] = i, i >>= 8, e[r++] = i, r
        }

        function I(e, t, r, s, a) {
            k(t, s, a, e, r, 7);
            let n = Number(t & BigInt(0xffffffff));
            e[r + 7] = n, n >>= 8, e[r + 6] = n, n >>= 8, e[r + 5] = n, n >>= 8, e[r + 4] = n;
            let i = Number(t >> BigInt(32) & BigInt(0xffffffff));
            return e[r + 3] = i, i >>= 8, e[r + 2] = i, i >>= 8, e[r + 1] = i, i >>= 8, e[r] = i, r + 8
        }

        function R(e, t, r, s, a, n) {
            if (r + s > e.length || r < 0) throw RangeError("Index out of range")
        }

        function S(e, t, r, s, a) {
            return t *= 1, r >>>= 0, a || R(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, s, 23, 4), r + 4
        }

        function T(e, t, r, s, a) {
            return t *= 1, r >>>= 0, a || R(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, s, 52, 8), r + 8
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
            return (d(e), e <= 0) ? o(e) : void 0 !== t ? "string" == typeof r ? o(e).fill(t, r) : o(e).fill(t) : o(e)
        }, l.allocUnsafe = function(e) {
            return u(e)
        }, l.allocUnsafeSlow = function(e) {
            return u(e)
        }, l.isBuffer = function(e) {
            return null != e && !0 === e._isBuffer && e !== l.prototype
        }, l.compare = function(e, t) {
            if (M(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)), M(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)), !l.isBuffer(e) || !l.isBuffer(t)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (e === t) return 0;
            let r = e.length,
                s = t.length;
            for (let a = 0, n = Math.min(r, s); a < n; ++a)
                if (e[a] !== t[a]) {
                    r = e[a], s = t[a];
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
                a = 0;
            for (r = 0; r < e.length; ++r) {
                let t = e[r];
                if (M(t, Uint8Array)) a + t.length > s.length ? (l.isBuffer(t) || (t = l.from(t)), t.copy(s, a)) : Uint8Array.prototype.set.call(s, t, a);
                else if (l.isBuffer(t)) t.copy(s, a);
                else throw TypeError('"list" argument must be an Array of Buffers');
                a += t.length
            }
            return s
        }, l.byteLength = y, l.prototype._isBuffer = !0, l.prototype.swap16 = function() {
            let e = this.length;
            if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
            for (let t = 0; t < e; t += 2) g(this, t, t + 1);
            return this
        }, l.prototype.swap32 = function() {
            let e = this.length;
            if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
            for (let t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
            return this
        }, l.prototype.swap64 = function() {
            let e = this.length;
            if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
            for (let t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
            return this
        }, l.prototype.toString = function() {
            let e = this.length;
            return 0 === e ? "" : 0 == arguments.length ? j(this, 0, e) : m.apply(this, arguments)
        }, l.prototype.toLocaleString = l.prototype.toString, l.prototype.equals = function(e) {
            if (!l.isBuffer(e)) throw TypeError("Argument must be a Buffer");
            return this === e || 0 === l.compare(this, e)
        }, l.prototype.inspect = function() {
            let e = "",
                t = r.INSPECT_MAX_BYTES;
            return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">"
        }, i && (l.prototype[i] = l.prototype.inspect), l.prototype.compare = function(e, t, r, s, a) {
            if (M(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)), !l.isBuffer(e)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
            if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === s && (s = 0), void 0 === a && (a = this.length), t < 0 || r > e.length || s < 0 || a > this.length) throw RangeError("out of range index");
            if (s >= a && t >= r) return 0;
            if (s >= a) return -1;
            if (t >= r) return 1;
            if (t >>>= 0, r >>>= 0, s >>>= 0, a >>>= 0, this === e) return 0;
            let n = a - s,
                i = r - t,
                o = Math.min(n, i),
                c = this.slice(s, a),
                d = e.slice(t, r);
            for (let e = 0; e < o; ++e)
                if (c[e] !== d[e]) {
                    n = c[e], i = d[e];
                    break
                } return n < i ? -1 : +(i < n)
        }, l.prototype.includes = function(e, t, r) {
            return -1 !== this.indexOf(e, t, r)
        }, l.prototype.indexOf = function(e, t, r) {
            return E(this, e, t, r, !0)
        }, l.prototype.lastIndexOf = function(e, t, r) {
            return E(this, e, t, r, !1)
        }, l.prototype.write = function(e, t, r, s) {
            var a, n, i, o, l, c, d, u;
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
                        let a;
                        r = Number(r) || 0;
                        let n = e.length - r;
                        s ? (s = Number(s)) > n && (s = n) : s = n;
                        let i = t.length;
                        for (s > i / 2 && (s = i / 2), a = 0; a < s; ++a) {
                            var o;
                            let s = parseInt(t.substr(2 * a, 2), 16);
                            if ((o = s) != o) break;
                            e[r + a] = s
                        }
                        return a
                    }(this, e, t, r);
                case "utf8":
                case "utf-8":
                    return a = t, n = r, J(N(e, this.length - a), this, a, n);
                case "ascii":
                case "latin1":
                case "binary":
                    return i = t, o = r, J(function(e) {
                        let t = [];
                        for (let r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                        return t
                    }(e), this, i, o);
                case "base64":
                    return l = t, c = r, J(U(e), this, l, c);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return d = t, u = r, J(function(e, t) {
                        let r, s, a = [];
                        for (let n = 0; n < e.length && !((t -= 2) < 0); ++n) s = (r = e.charCodeAt(n)) >> 8, a.push(r % 256), a.push(s);
                        return a
                    }(e, this.length - d), this, d, u);
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
            e >>>= 0, t >>>= 0, r || b(e, t, this.length);
            let s = this[e],
                a = 1,
                n = 0;
            for (; ++n < t && (a *= 256);) s += this[e + n] * a;
            return s
        }, l.prototype.readUintBE = l.prototype.readUIntBE = function(e, t, r) {
            e >>>= 0, t >>>= 0, r || b(e, t, this.length);
            let s = this[e + --t],
                a = 1;
            for (; t > 0 && (a *= 256);) s += this[e + --t] * a;
            return s
        }, l.prototype.readUint8 = l.prototype.readUInt8 = function(e, t) {
            return e >>>= 0, t || b(e, 1, this.length), this[e]
        }, l.prototype.readUint16LE = l.prototype.readUInt16LE = function(e, t) {
            return e >>>= 0, t || b(e, 2, this.length), this[e] | this[e + 1] << 8
        }, l.prototype.readUint16BE = l.prototype.readUInt16BE = function(e, t) {
            return e >>>= 0, t || b(e, 2, this.length), this[e] << 8 | this[e + 1]
        }, l.prototype.readUint32LE = l.prototype.readUInt32LE = function(e, t) {
            return e >>>= 0, t || b(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 0x1000000 * this[e + 3]
        }, l.prototype.readUint32BE = l.prototype.readUInt32BE = function(e, t) {
            return e >>>= 0, t || b(e, 4, this.length), 0x1000000 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }, l.prototype.readBigUInt64LE = L(function(e) {
            P(e >>>= 0, "offset");
            let t = this[e],
                r = this[e + 7];
            (void 0 === t || void 0 === r) && x(e, this.length - 8);
            let s = t + 256 * this[++e] + 65536 * this[++e] + 0x1000000 * this[++e],
                a = this[++e] + 256 * this[++e] + 65536 * this[++e] + 0x1000000 * r;
            return BigInt(s) + (BigInt(a) << BigInt(32))
        }), l.prototype.readBigUInt64BE = L(function(e) {
            P(e >>>= 0, "offset");
            let t = this[e],
                r = this[e + 7];
            (void 0 === t || void 0 === r) && x(e, this.length - 8);
            let s = 0x1000000 * t + 65536 * this[++e] + 256 * this[++e] + this[++e],
                a = 0x1000000 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r;
            return (BigInt(s) << BigInt(32)) + BigInt(a)
        }), l.prototype.readIntLE = function(e, t, r) {
            e >>>= 0, t >>>= 0, r || b(e, t, this.length);
            let s = this[e],
                a = 1,
                n = 0;
            for (; ++n < t && (a *= 256);) s += this[e + n] * a;
            return s >= (a *= 128) && (s -= Math.pow(2, 8 * t)), s
        }, l.prototype.readIntBE = function(e, t, r) {
            e >>>= 0, t >>>= 0, r || b(e, t, this.length);
            let s = t,
                a = 1,
                n = this[e + --s];
            for (; s > 0 && (a *= 256);) n += this[e + --s] * a;
            return n >= (a *= 128) && (n -= Math.pow(2, 8 * t)), n
        }, l.prototype.readInt8 = function(e, t) {
            return (e >>>= 0, t || b(e, 1, this.length), 128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e]
        }, l.prototype.readInt16LE = function(e, t) {
            e >>>= 0, t || b(e, 2, this.length);
            let r = this[e] | this[e + 1] << 8;
            return 32768 & r ? 0xffff0000 | r : r
        }, l.prototype.readInt16BE = function(e, t) {
            e >>>= 0, t || b(e, 2, this.length);
            let r = this[e + 1] | this[e] << 8;
            return 32768 & r ? 0xffff0000 | r : r
        }, l.prototype.readInt32LE = function(e, t) {
            return e >>>= 0, t || b(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }, l.prototype.readInt32BE = function(e, t) {
            return e >>>= 0, t || b(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }, l.prototype.readBigInt64LE = L(function(e) {
            P(e >>>= 0, "offset");
            let t = this[e],
                r = this[e + 7];
            return (void 0 === t || void 0 === r) && x(e, this.length - 8), (BigInt(this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24)) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + 0x1000000 * this[++e])
        }), l.prototype.readBigInt64BE = L(function(e) {
            P(e >>>= 0, "offset");
            let t = this[e],
                r = this[e + 7];
            return (void 0 === t || void 0 === r) && x(e, this.length - 8), (BigInt((t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e]) << BigInt(32)) + BigInt(0x1000000 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r)
        }), l.prototype.readFloatLE = function(e, t) {
            return e >>>= 0, t || b(e, 4, this.length), n.read(this, e, !0, 23, 4)
        }, l.prototype.readFloatBE = function(e, t) {
            return e >>>= 0, t || b(e, 4, this.length), n.read(this, e, !1, 23, 4)
        }, l.prototype.readDoubleLE = function(e, t) {
            return e >>>= 0, t || b(e, 8, this.length), n.read(this, e, !0, 52, 8)
        }, l.prototype.readDoubleBE = function(e, t) {
            return e >>>= 0, t || b(e, 8, this.length), n.read(this, e, !1, 52, 8)
        }, l.prototype.writeUintLE = l.prototype.writeUIntLE = function(e, t, r, s) {
            if (e *= 1, t >>>= 0, r >>>= 0, !s) {
                let s = Math.pow(2, 8 * r) - 1;
                A(this, e, t, r, s, 0)
            }
            let a = 1,
                n = 0;
            for (this[t] = 255 & e; ++n < r && (a *= 256);) this[t + n] = e / a & 255;
            return t + r
        }, l.prototype.writeUintBE = l.prototype.writeUIntBE = function(e, t, r, s) {
            if (e *= 1, t >>>= 0, r >>>= 0, !s) {
                let s = Math.pow(2, 8 * r) - 1;
                A(this, e, t, r, s, 0)
            }
            let a = r - 1,
                n = 1;
            for (this[t + a] = 255 & e; --a >= 0 && (n *= 256);) this[t + a] = e / n & 255;
            return t + r
        }, l.prototype.writeUint8 = l.prototype.writeUInt8 = function(e, t, r) {
            return e *= 1, t >>>= 0, r || A(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
        }, l.prototype.writeUint16LE = l.prototype.writeUInt16LE = function(e, t, r) {
            return e *= 1, t >>>= 0, r || A(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
        }, l.prototype.writeUint16BE = l.prototype.writeUInt16BE = function(e, t, r) {
            return e *= 1, t >>>= 0, r || A(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
        }, l.prototype.writeUint32LE = l.prototype.writeUInt32LE = function(e, t, r) {
            return e *= 1, t >>>= 0, r || A(this, e, t, 4, 0xffffffff, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
        }, l.prototype.writeUint32BE = l.prototype.writeUInt32BE = function(e, t, r) {
            return e *= 1, t >>>= 0, r || A(this, e, t, 4, 0xffffffff, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
        }, l.prototype.writeBigUInt64LE = L(function(e, t = 0) {
            return v(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
        }), l.prototype.writeBigUInt64BE = L(function(e, t = 0) {
            return I(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
        }), l.prototype.writeIntLE = function(e, t, r, s) {
            if (e *= 1, t >>>= 0, !s) {
                let s = Math.pow(2, 8 * r - 1);
                A(this, e, t, r, s - 1, -s)
            }
            let a = 0,
                n = 1,
                i = 0;
            for (this[t] = 255 & e; ++a < r && (n *= 256);) e < 0 && 0 === i && 0 !== this[t + a - 1] && (i = 1), this[t + a] = (e / n | 0) - i & 255;
            return t + r
        }, l.prototype.writeIntBE = function(e, t, r, s) {
            if (e *= 1, t >>>= 0, !s) {
                let s = Math.pow(2, 8 * r - 1);
                A(this, e, t, r, s - 1, -s)
            }
            let a = r - 1,
                n = 1,
                i = 0;
            for (this[t + a] = 255 & e; --a >= 0 && (n *= 256);) e < 0 && 0 === i && 0 !== this[t + a + 1] && (i = 1), this[t + a] = (e / n | 0) - i & 255;
            return t + r
        }, l.prototype.writeInt8 = function(e, t, r) {
            return e *= 1, t >>>= 0, r || A(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
        }, l.prototype.writeInt16LE = function(e, t, r) {
            return e *= 1, t >>>= 0, r || A(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
        }, l.prototype.writeInt16BE = function(e, t, r) {
            return e *= 1, t >>>= 0, r || A(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
        }, l.prototype.writeInt32LE = function(e, t, r) {
            return e *= 1, t >>>= 0, r || A(this, e, t, 4, 0x7fffffff, -0x80000000), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
        }, l.prototype.writeInt32BE = function(e, t, r) {
            return e *= 1, t >>>= 0, r || A(this, e, t, 4, 0x7fffffff, -0x80000000), e < 0 && (e = 0xffffffff + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
        }, l.prototype.writeBigInt64LE = L(function(e, t = 0) {
            return v(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
        }), l.prototype.writeBigInt64BE = L(function(e, t = 0) {
            return I(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
        }), l.prototype.writeFloatLE = function(e, t, r) {
            return S(this, e, t, !0, r)
        }, l.prototype.writeFloatBE = function(e, t, r) {
            return S(this, e, t, !1, r)
        }, l.prototype.writeDoubleLE = function(e, t, r) {
            return T(this, e, t, !0, r)
        }, l.prototype.writeDoubleBE = function(e, t, r) {
            return T(this, e, t, !1, r)
        }, l.prototype.copy = function(e, t, r, s) {
            if (!l.isBuffer(e)) throw TypeError("argument should be a Buffer");
            if (r || (r = 0), s || 0 === s || (s = this.length), t >= e.length && (t = e.length), t || (t = 0), s > 0 && s < r && (s = r), s === r || 0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length) throw RangeError("Index out of range");
            if (s < 0) throw RangeError("sourceEnd out of bounds");
            s > this.length && (s = this.length), e.length - t < s - r && (s = e.length - t + r);
            let a = s - r;
            return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, r, s) : Uint8Array.prototype.set.call(e, this.subarray(r, s), t), a
        }, l.prototype.fill = function(e, t, r, s) {
            let a;
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
                for (a = t; a < r; ++a) this[a] = e;
            else {
                let n = l.isBuffer(e) ? e : l.from(e, s),
                    i = n.length;
                if (0 === i) throw TypeError('The value "' + e + '" is invalid for argument "value"');
                for (a = 0; a < r - t; ++a) this[a + t] = n[a % i]
            }
            return this
        };
        let O = {};

        function _(e, t, r) {
            O[e] = class extends r {
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

        function C(e) {
            let t = "",
                r = e.length,
                s = +("-" === e[0]);
            for (; r >= s + 4; r -= 3) t = `_${e.slice(r-3,r)}${t}`;
            return `${e.slice(0,r)}${t}`
        }

        function k(e, t, r, s, a, n) {
            if (e > r || e < t) {
                let s, a = "bigint" == typeof t ? "n" : "";
                throw s = n > 3 ? 0 === t || t === BigInt(0) ? `>= 0${a} and < 2${a} ** ${(n+1)*8}${a}` : `>= -(2${a} ** ${(n+1)*8-1}${a}) and < 2 ** ${(n+1)*8-1}${a}` : `>= ${t}${a} and <= ${r}${a}`, new O.ERR_OUT_OF_RANGE("value", s, e)
            }
            P(a, "offset"), (void 0 === s[a] || void 0 === s[a + n]) && x(a, s.length - (n + 1))
        }

        function P(e, t) {
            if ("number" != typeof e) throw new O.ERR_INVALID_ARG_TYPE(t, "number", e)
        }

        function x(e, t, r) {
            if (Math.floor(e) !== e) throw P(e, r), new O.ERR_OUT_OF_RANGE(r || "offset", "an integer", e);
            if (t < 0) throw new O.ERR_BUFFER_OUT_OF_BOUNDS;
            throw new O.ERR_OUT_OF_RANGE(r || "offset", `>= ${+!!r} and <= ${t}`, e)
        }
        _("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
            return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
        }, RangeError), _("ERR_INVALID_ARG_TYPE", function(e, t) {
            return `The "${e}" argument must be of type number. Received type ${typeof t}`
        }, TypeError), _("ERR_OUT_OF_RANGE", function(e, t, r) {
            let s = `The value of "${e}" is out of range.`,
                a = r;
            return Number.isInteger(r) && Math.abs(r) > 0x100000000 ? a = C(String(r)) : "bigint" == typeof r && (a = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (a = C(a)), a += "n"), s += ` It must be ${t}. Received ${a}`
        }, RangeError);
        let D = /[^+/0-9A-Za-z-_]/g;

        function N(e, t) {
            let r;
            t = t || 1 / 0;
            let s = e.length,
                a = null,
                n = [];
            for (let i = 0; i < s; ++i) {
                if ((r = e.charCodeAt(i)) > 55295 && r < 57344) {
                    if (!a) {
                        if (r > 56319 || i + 1 === s) {
                            (t -= 3) > -1 && n.push(239, 191, 189);
                            continue
                        }
                        a = r;
                        continue
                    }
                    if (r < 56320) {
                        (t -= 3) > -1 && n.push(239, 191, 189), a = r;
                        continue
                    }
                    r = (a - 55296 << 10 | r - 56320) + 65536
                } else a && (t -= 3) > -1 && n.push(239, 191, 189);
                if (a = null, r < 128) {
                    if ((t -= 1) < 0) break;
                    n.push(r)
                } else if (r < 2048) {
                    if ((t -= 2) < 0) break;
                    n.push(r >> 6 | 192, 63 & r | 128)
                } else if (r < 65536) {
                    if ((t -= 3) < 0) break;
                    n.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                } else if (r < 1114112) {
                    if ((t -= 4) < 0) break;
                    n.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                } else throw Error("Invalid code point")
            }
            return n
        }

        function U(e) {
            return a.toByteArray(function(e) {
                if ((e = (e = e.split("=")[0]).trim().replace(D, "")).length < 2) return "";
                for (; e.length % 4 != 0;) e += "=";
                return e
            }(e))
        }

        function J(e, t, r, s) {
            let a;
            for (a = 0; a < s && !(a + r >= t.length) && !(a >= e.length); ++a) t[a + r] = e[a];
            return a
        }

        function M(e, t) {
            return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
        }
        let H = function() {
            let e = "0123456789abcdef",
                t = Array(256);
            for (let r = 0; r < 16; ++r) {
                let s = 16 * r;
                for (let a = 0; a < 16; ++a) t[s + a] = e[r] + e[a]
            }
            return t
        }();

        function L(e) {
            return "undefined" == typeof BigInt ? K : e
        }

        function K() {
            throw Error("BigInt not supported")
        }
    }, {
        "9c62938f1dccc73c": "6P4Ax",
        aceacb6a4531a9d2: "lPFVa"
    }],
    "6P4Ax": [function(e, t, r, s) {
        "use strict";
        r.byteLength = function(e) {
            var t = d(e),
                r = t[0],
                s = t[1];
            return (r + s) * 3 / 4 - s
        }, r.toByteArray = function(e) {
            var t, r, s = d(e),
                a = s[0],
                o = s[1],
                l = new i((a + o) * 3 / 4 - o),
                c = 0,
                u = o > 0 ? a - 4 : a;
            for (r = 0; r < u; r += 4) t = n[e.charCodeAt(r)] << 18 | n[e.charCodeAt(r + 1)] << 12 | n[e.charCodeAt(r + 2)] << 6 | n[e.charCodeAt(r + 3)], l[c++] = t >> 16 & 255, l[c++] = t >> 8 & 255, l[c++] = 255 & t;
            return 2 === o && (t = n[e.charCodeAt(r)] << 2 | n[e.charCodeAt(r + 1)] >> 4, l[c++] = 255 & t), 1 === o && (t = n[e.charCodeAt(r)] << 10 | n[e.charCodeAt(r + 1)] << 4 | n[e.charCodeAt(r + 2)] >> 2, l[c++] = t >> 8 & 255, l[c++] = 255 & t), l
        }, r.fromByteArray = function(e) {
            for (var t, r = e.length, s = r % 3, n = [], i = 0, o = r - s; i < o; i += 16383) n.push(function(e, t, r) {
                for (var s, n = [], i = t; i < r; i += 3) s = (e[i] << 16 & 0xff0000) + (e[i + 1] << 8 & 65280) + (255 & e[i + 2]), n.push(a[s >> 18 & 63] + a[s >> 12 & 63] + a[s >> 6 & 63] + a[63 & s]);
                return n.join("")
            }(e, i, i + 16383 > o ? o : i + 16383));
            return 1 === s ? n.push(a[(t = e[r - 1]) >> 2] + a[t << 4 & 63] + "==") : 2 === s && n.push(a[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] + a[t >> 4 & 63] + a[t << 2 & 63] + "="), n.join("")
        };
        for (var a = [], n = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = 0, c = o.length; l < c; ++l) a[l] = o[l], n[o.charCodeAt(l)] = l;

        function d(e) {
            var t = e.length;
            if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
            var r = e.indexOf("="); - 1 === r && (r = t);
            var s = r === t ? 0 : 4 - r % 4;
            return [r, s]
        }
        n[45] = 62, n[95] = 63
    }, {}],
    lPFVa: [function(e, t, r, s) {
        r.read = function(e, t, r, s, a) {
            var n, i, o = 8 * a - s - 1,
                l = (1 << o) - 1,
                c = l >> 1,
                d = -7,
                u = r ? a - 1 : 0,
                p = r ? -1 : 1,
                f = e[t + u];
            for (u += p, n = f & (1 << -d) - 1, f >>= -d, d += o; d > 0; n = 256 * n + e[t + u], u += p, d -= 8);
            for (i = n & (1 << -d) - 1, n >>= -d, d += s; d > 0; i = 256 * i + e[t + u], u += p, d -= 8);
            if (0 === n) n = 1 - c;
            else {
                if (n === l) return i ? NaN : 1 / 0 * (f ? -1 : 1);
                i += Math.pow(2, s), n -= c
            }
            return (f ? -1 : 1) * i * Math.pow(2, n - s)
        }, r.write = function(e, t, r, s, a, n) {
            var i, o, l, c = 8 * n - a - 1,
                d = (1 << c) - 1,
                u = d >> 1,
                p = 5960464477539062e-23 * (23 === a),
                f = s ? 0 : n - 1,
                h = s ? 1 : -1,
                y = +(t < 0 || 0 === t && 1 / t < 0);
            for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (o = +!!isNaN(t), i = d) : (i = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -i)) < 1 && (i--, l *= 2), i + u >= 1 ? t += p / l : t += p * Math.pow(2, 1 - u), t * l >= 2 && (i++, l /= 2), i + u >= d ? (o = 0, i = d) : i + u >= 1 ? (o = (t * l - 1) * Math.pow(2, a), i += u) : (o = t * Math.pow(2, u - 1) * Math.pow(2, a), i = 0)); a >= 8; e[r + f] = 255 & o, f += h, o /= 256, a -= 8);
            for (i = i << a | o, c += a; c > 0; e[r + f] = 255 & i, f += h, i /= 256, c -= 8);
            e[r + f - h] |= 128 * y
        }
    }, {}],
    hjCVQ: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        "use strict";
        var n = e("../utils.js"),
            i = a.interopDefault(n);

        function o(e, t, r, s, a) {
            Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), s && (this.request = s), a && (this.response = a, this.status = a.status ? a.status : null)
        }
        i.default.inherits(o, Error, {
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
                    config: i.default.toJSONObject(this.config),
                    code: this.code,
                    status: this.status
                }
            }
        });
        let l = o.prototype,
            c = {};
        ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
            c[e] = {
                value: e
            }
        }), Object.defineProperties(o, c), Object.defineProperty(l, "isAxiosError", {
            value: !0
        }), o.from = (e, t, r, s, a, n) => {
            let c = Object.create(l);
            return i.default.toFlatObject(e, c, function(e) {
                return e !== Error.prototype
            }, e => "isAxiosError" !== e), o.call(c, e.message, t, r, s, a), c.cause = e, c.name = e.name, n && Object.assign(c, n), c
        }, r.default = o
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        "use strict";
        var n = e("./../utils.js"),
            i = a.interopDefault(n);
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
                i.default.forEach(this.handlers, function(t) {
                    null !== t && e(t)
                })
            }
        }
    }, {
        "./../utils.js": "2ioTY",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    gTZwy: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => E);
        "use strict";
        var n = e("./transformData.js"),
            i = a.interopDefault(n),
            o = e("../cancel/isCancel.js"),
            l = a.interopDefault(o),
            c = e("../defaults/index.js"),
            d = a.interopDefault(c),
            u = e("../cancel/CanceledError.js"),
            p = a.interopDefault(u),
            f = e("../core/AxiosHeaders.js"),
            h = a.interopDefault(f),
            y = e("../adapters/adapters.js"),
            m = a.interopDefault(y);

        function g(e) {
            if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new(0, p.default)(null, e)
        }

        function E(e) {
            return g(e), e.headers = h.default.from(e.headers), e.data = i.default.call(e, e.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1), m.default.getAdapter(e.adapter || d.default.adapter)(e).then(function(t) {
                return g(e), t.data = i.default.call(e, e.transformResponse, t), t.headers = h.default.from(t.headers), t
            }, function(t) {
                return !(0, l.default)(t) && (g(e), t && t.response && (t.response.data = i.default.call(e, e.transformResponse, t.response), t.response.headers = h.default.from(t.response.headers))), Promise.reject(t)
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => u);
        "use strict";
        var n = e("./../utils.js"),
            i = a.interopDefault(n),
            o = e("../defaults/index.js"),
            l = a.interopDefault(o),
            c = e("../core/AxiosHeaders.js"),
            d = a.interopDefault(c);

        function u(e, t) {
            let r = this || l.default,
                s = t || r,
                a = d.default.from(s.headers),
                n = s.data;
            return i.default.forEach(e, function(e) {
                n = e.call(r, n, a.normalize(), t ? t.status : void 0)
            }), a.normalize(), n
        }
    }, {
        "./../utils.js": "2ioTY",
        "../defaults/index.js": "1GU0t",
        "../core/AxiosHeaders.js": "1qkRX",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "1GU0t": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        "use strict";
        var n = e("../utils.js"),
            i = a.interopDefault(n),
            o = e("../core/AxiosError.js"),
            l = a.interopDefault(o),
            c = e("./transitional.js"),
            d = a.interopDefault(c),
            u = e("../helpers/toFormData.js"),
            p = a.interopDefault(u),
            f = e("../helpers/toURLEncodedForm.js"),
            h = a.interopDefault(f),
            y = e("../platform/index.js"),
            m = a.interopDefault(y),
            g = e("../helpers/formDataToJSON.js"),
            E = a.interopDefault(g);
        let w = {
            transitional: d.default,
            adapter: ["xhr", "http", "fetch"],
            transformRequest: [function(e, t) {
                let r, s = t.getContentType() || "",
                    a = s.indexOf("application/json") > -1,
                    n = i.default.isObject(e);
                if (n && i.default.isHTMLForm(e) && (e = new FormData(e)), i.default.isFormData(e)) return a ? JSON.stringify((0, E.default)(e)) : e;
                if (i.default.isArrayBuffer(e) || i.default.isBuffer(e) || i.default.isStream(e) || i.default.isFile(e) || i.default.isBlob(e) || i.default.isReadableStream(e)) return e;
                if (i.default.isArrayBufferView(e)) return e.buffer;
                if (i.default.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
                if (n) {
                    if (s.indexOf("application/x-www-form-urlencoded") > -1) return (0, h.default)(e, this.formSerializer).toString();
                    if ((r = i.default.isFileList(e)) || s.indexOf("multipart/form-data") > -1) {
                        let t = this.env && this.env.FormData;
                        return (0, p.default)(r ? {
                            "files[]": e
                        } : e, t && new t, this.formSerializer)
                    }
                }
                if (n || a) {
                    t.setContentType("application/json", !1);
                    var o = e;
                    if (i.default.isString(o)) try {
                        return (0, JSON.parse)(o), i.default.trim(o)
                    } catch (e) {
                        if ("SyntaxError" !== e.name) throw e
                    }
                    return (0, JSON.stringify)(o)
                }
                return e
            }],
            transformResponse: [function(e) {
                let t = this.transitional || w.transitional,
                    r = t && t.forcedJSONParsing,
                    s = "json" === this.responseType;
                if (i.default.isResponse(e) || i.default.isReadableStream(e)) return e;
                if (e && i.default.isString(e) && (r && !this.responseType || s)) {
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
        i.default.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => u);
        "use strict";
        var n = e("../utils.js"),
            i = a.interopDefault(n),
            o = e("./toFormData.js"),
            l = a.interopDefault(o),
            c = e("../platform/index.js"),
            d = a.interopDefault(c);

        function u(e, t) {
            return (0, l.default)(e, new d.default.classes.URLSearchParams, Object.assign({
                visitor: function(e, t, r, s) {
                    return d.default.isNode && i.default.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments)
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var n = e("./node/index.js"),
            i = a.interopDefault(n);
        r.default = {
            ...e("./common/utils.js"),
            ...i.default
        }
    }, {
        "./node/index.js": "3yghl",
        "./common/utils.js": "dkG5V",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "3yghl": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var n = e("./classes/URLSearchParams.js"),
            i = a.interopDefault(n),
            o = e("./classes/FormData.js"),
            l = a.interopDefault(o),
            c = e("./classes/Blob.js"),
            d = a.interopDefault(c);
        r.default = {
            isBrowser: !0,
            classes: {
                URLSearchParams: i.default,
                FormData: l.default,
                Blob: d.default
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        "use strict";
        var n = e("../../../helpers/AxiosURLSearchParams.js"),
            i = a.interopDefault(n);
        r.default = "undefined" != typeof URLSearchParams ? URLSearchParams : i.default
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "hasBrowserEnv", () => n), a.export(r, "hasStandardBrowserWebWorkerEnv", () => l), a.export(r, "hasStandardBrowserEnv", () => o), a.export(r, "navigator", () => i), a.export(r, "origin", () => c);
        let n = "undefined" != typeof window && "undefined" != typeof document,
            i = "object" == typeof navigator && navigator || void 0,
            o = n && (!i || 0 > ["ReactNative", "NativeScript", "NS"].indexOf(i.product)),
            l = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
            c = n && window.location.href || "http://localhost"
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    jhUur: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        "use strict";
        var n = e("../utils.js"),
            i = a.interopDefault(n);
        r.default = function(e) {
            if (i.default.isFormData(e) && i.default.isFunction(e.entries)) {
                let t = {};
                return i.default.forEachEntry(e, (e, r) => {
                    ! function e(t, r, s, a) {
                        let n = t[a++];
                        if ("__proto__" === n) return !0;
                        let o = Number.isFinite(+n),
                            l = a >= t.length;
                        return (n = !n && i.default.isArray(s) ? s.length : n, l) ? i.default.hasOwnProp(s, n) ? s[n] = [s[n], r] : s[n] = r : (s[n] && i.default.isObject(s[n]) || (s[n] = []), e(t, r, s[n], a) && i.default.isArray(s[n]) && (s[n] = function(e) {
                            let t, r, s = {},
                                a = Object.keys(e),
                                n = a.length;
                            for (t = 0; t < n; t++) s[r = a[t]] = e[r];
                            return s
                        }(s[n]))), !o
                    }(i.default.matchAll(/\w+|\[(\w*)]/g, e).map(e => "[]" === e[0] ? "" : e[1] || e[0]), r, t, 0)
                }), t
            }
            return null
        }
    }, {
        "../utils.js": "2ioTY",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "1qkRX": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        "use strict";
        var n = e("../utils.js"),
            i = a.interopDefault(n),
            o = e("../helpers/parseHeaders.js"),
            l = a.interopDefault(o);
        let c = Symbol("internals");

        function d(e) {
            return e && String(e).trim().toLowerCase()
        }

        function u(e) {
            return !1 === e || null == e ? e : i.default.isArray(e) ? e.map(u) : String(e)
        }

        function p(e, t, r, s, a) {
            if (i.default.isFunction(s)) return s.call(this, t, r);
            if (a && (t = r), i.default.isString(t)) {
                if (i.default.isString(s)) return -1 !== t.indexOf(s);
                if (i.default.isRegExp(s)) return s.test(t)
            }
        }
        class f {
            constructor(e) {
                e && this.set(e)
            }
            set(e, t, r) {
                let s = this;

                function a(e, t, r) {
                    let a = d(t);
                    if (!a) throw Error("header name must be a non-empty string");
                    let n = i.default.findKey(s, a);
                    n && void 0 !== s[n] && !0 !== r && (void 0 !== r || !1 === s[n]) || (s[n || t] = u(e))
                }
                let n = (e, t) => i.default.forEach(e, (e, r) => a(e, r, t));
                if (i.default.isPlainObject(e) || e instanceof this.constructor) n(e, t);
                else {
                    let s;
                    if (i.default.isString(e) && (e = e.trim()) && (s = e, !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim()))) n((0, l.default)(e), t);
                    else if (i.default.isObject(e) && i.default.isIterable(e)) {
                        let r = {},
                            s, a;
                        for (let t of e) {
                            if (!i.default.isArray(t)) throw TypeError("Object iterator must return a key-value pair");
                            r[a = t[0]] = (s = r[a]) ? i.default.isArray(s) ? [...s, t[1]] : [s, t[1]] : t[1]
                        }
                        n(r, t)
                    } else null != e && a(t, e, r)
                }
                return this
            }
            get(e, t) {
                if (e = d(e)) {
                    let r = i.default.findKey(this, e);
                    if (r) {
                        let e = this[r];
                        if (!t) return e;
                        if (!0 === t) {
                            let t, r = Object.create(null),
                                s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                            for (; t = s.exec(e);) r[t[1]] = t[2];
                            return r
                        }
                        if (i.default.isFunction(t)) return t.call(this, e, r);
                        if (i.default.isRegExp(t)) return t.exec(e);
                        throw TypeError("parser must be boolean|regexp|function")
                    }
                }
            }
            has(e, t) {
                if (e = d(e)) {
                    let r = i.default.findKey(this, e);
                    return !!(r && void 0 !== this[r] && (!t || p(this, this[r], r, t)))
                }
                return !1
            }
            delete(e, t) {
                let r = this,
                    s = !1;

                function a(e) {
                    if (e = d(e)) {
                        let a = i.default.findKey(r, e);
                        a && (!t || p(r, r[a], a, t)) && (delete r[a], s = !0)
                    }
                }
                return i.default.isArray(e) ? e.forEach(a) : a(e), s
            }
            clear(e) {
                let t = Object.keys(this),
                    r = t.length,
                    s = !1;
                for (; r--;) {
                    let a = t[r];
                    (!e || p(this, this[a], a, e, !0)) && (delete this[a], s = !0)
                }
                return s
            }
            normalize(e) {
                let t = this,
                    r = {};
                return i.default.forEach(this, (s, a) => {
                    let n = i.default.findKey(r, a);
                    if (n) {
                        t[n] = u(s), delete t[a];
                        return
                    }
                    let o = e ? a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, r) => t.toUpperCase() + r) : String(a).trim();
                    o !== a && delete t[a], t[o] = u(s), r[o] = !0
                }), this
            }
            concat(...e) {
                return this.constructor.concat(this, ...e)
            }
            toJSON(e) {
                let t = Object.create(null);
                return i.default.forEach(this, (r, s) => {
                    null != r && !1 !== r && (t[s] = e && i.default.isArray(r) ? r.join(", ") : r)
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
                    let s = d(e);
                    if (!t[s]) {
                        let a = i.default.toCamelCase(" " + e);
                        ["get", "set", "has"].forEach(t => {
                            Object.defineProperty(r, t + a, {
                                value: function(r, s, a) {
                                    return this[t].call(this, e, r, s, a)
                                },
                                configurable: !0
                            })
                        }), t[s] = !0
                    }
                }
                return i.default.isArray(e) ? e.forEach(s) : s(e), this
            }
        }
        f.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), i.default.reduceDescriptors(f.prototype, ({
            value: e
        }, t) => {
            let r = t[0].toUpperCase() + t.slice(1);
            return {
                get: () => e,
                set(e) {
                    this[r] = e
                }
            }
        }), i.default.freezeMethods(f), r.default = f
    }, {
        "../utils.js": "2ioTY",
        "../helpers/parseHeaders.js": "aYbVO",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    aYbVO: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        "use strict";
        var n = e("./../utils.js");
        let i = a.interopDefault(n).default.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
        r.default = e => {
            let t, r, s, a = {};
            return e && e.split("\n").forEach(function(e) {
                s = e.indexOf(":"), t = e.substring(0, s).trim().toLowerCase(), r = e.substring(s + 1).trim(), !t || a[t] && i[t] || ("set-cookie" === t ? a[t] ? a[t].push(r) : a[t] = [r] : a[t] = a[t] ? a[t] + ", " + r : r)
            }), a
        }
    }, {
        "./../utils.js": "2ioTY",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "5ndsF": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        "use strict";

        function n(e) {
            return !!(e && e.__CANCEL__)
        }
        a.defineInteropFlag(r), a.export(r, "default", () => n)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    judoa: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        "use strict";
        var n = e("../core/AxiosError.js"),
            i = a.interopDefault(n),
            o = e("../utils.js");

        function l(e, t, r) {
            i.default.call(this, null == e ? "canceled" : e, i.default.ERR_CANCELED, t, r), this.name = "CanceledError"
        }
        a.interopDefault(o).default.inherits(l, i.default, {
            __CANCEL__: !0
        }), r.default = l
    }, {
        "../core/AxiosError.js": "hjCVQ",
        "../utils.js": "2ioTY",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "6E0f0": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var n = e("../utils.js"),
            i = a.interopDefault(n),
            o = e("./http.js"),
            l = a.interopDefault(o),
            c = e("./xhr.js"),
            d = a.interopDefault(c),
            u = e("./fetch.js"),
            p = a.interopDefault(u),
            f = e("../core/AxiosError.js"),
            h = a.interopDefault(f);
        let y = {
            http: l.default,
            xhr: d.default,
            fetch: p.default
        };
        i.default.forEach(y, (e, t) => {
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
            g = e => i.default.isFunction(e) || null === e || !1 === e;
        r.default = {
            getAdapter: e => {
                let t, r, {
                        length: s
                    } = e = i.default.isArray(e) ? e : [e],
                    a = {};
                for (let n = 0; n < s; n++) {
                    let s;
                    if (r = t = e[n], !g(t) && void 0 === (r = y[(s = String(t)).toLowerCase()])) throw new(0, h.default)(`Unknown adapter '${s}'`);
                    if (r) break;
                    a[s || "#" + n] = r
                }
                if (!r) {
                    let e = Object.entries(a).map(([e, t]) => `adapter ${e} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build")),
                        t = s ? e.length > 1 ? "since :\n" + e.map(m).join("\n") : " " + m(e[0]) : "as no adapter specified";
                    throw new(0, h.default)("There is no suitable adapter to dispatch the request " + t, "ERR_NOT_SUPPORT")
                }
                return r
            },
            adapters: y
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var n = e("./../utils.js"),
            i = a.interopDefault(n),
            o = e("./../core/settle.js"),
            l = a.interopDefault(o),
            c = e("../defaults/transitional.js"),
            d = a.interopDefault(c),
            u = e("../core/AxiosError.js"),
            p = a.interopDefault(u),
            f = e("../cancel/CanceledError.js"),
            h = a.interopDefault(f),
            y = e("../helpers/parseProtocol.js"),
            m = a.interopDefault(y),
            g = e("../platform/index.js"),
            E = a.interopDefault(g),
            w = e("../core/AxiosHeaders.js"),
            j = a.interopDefault(w),
            b = e("../helpers/progressEventReducer.js"),
            A = e("../helpers/resolveConfig.js"),
            v = a.interopDefault(A);
        r.default = "undefined" != typeof XMLHttpRequest && function(e) {
            return new Promise(function(t, r) {
                let s, a, n, o, c, u = (0, v.default)(e),
                    f = u.data,
                    y = j.default.from(u.headers).normalize(),
                    {
                        responseType: g,
                        onUploadProgress: w,
                        onDownloadProgress: A
                    } = u;

                function I() {
                    o && o(), c && c(), u.cancelToken && u.cancelToken.unsubscribe(s), u.signal && u.signal.removeEventListener("abort", s)
                }
                let R = new XMLHttpRequest;

                function S() {
                    if (!R) return;
                    let s = j.default.from("getAllResponseHeaders" in R && R.getAllResponseHeaders()),
                        a = {
                            data: g && "text" !== g && "json" !== g ? R.response : R.responseText,
                            status: R.status,
                            statusText: R.statusText,
                            headers: s,
                            config: e,
                            request: R
                        };
                    (0, l.default)(function(e) {
                        t(e), I()
                    }, function(e) {
                        r(e), I()
                    }, a), R = null
                }
                R.open(u.method.toUpperCase(), u.url, !0), R.timeout = u.timeout, "onloadend" in R ? R.onloadend = S : R.onreadystatechange = function() {
                    R && 4 === R.readyState && (0 !== R.status || R.responseURL && 0 === R.responseURL.indexOf("file:")) && setTimeout(S)
                }, R.onabort = function() {
                    R && (r(new(0, p.default)("Request aborted", p.default.ECONNABORTED, e, R)), R = null)
                }, R.onerror = function() {
                    r(new(0, p.default)("Network Error", p.default.ERR_NETWORK, e, R)), R = null
                }, R.ontimeout = function() {
                    let t = u.timeout ? "timeout of " + u.timeout + "ms exceeded" : "timeout exceeded",
                        s = u.transitional || d.default;
                    u.timeoutErrorMessage && (t = u.timeoutErrorMessage), r(new(0, p.default)(t, s.clarifyTimeoutError ? p.default.ETIMEDOUT : p.default.ECONNABORTED, e, R)), R = null
                }, void 0 === f && y.setContentType(null), "setRequestHeader" in R && i.default.forEach(y.toJSON(), function(e, t) {
                    R.setRequestHeader(t, e)
                }), i.default.isUndefined(u.withCredentials) || (R.withCredentials = !!u.withCredentials), g && "json" !== g && (R.responseType = u.responseType), A && ([n, c] = (0, b.progressEventReducer)(A, !0), R.addEventListener("progress", n)), w && R.upload && ([a, o] = (0, b.progressEventReducer)(w), R.upload.addEventListener("progress", a), R.upload.addEventListener("loadend", o)), (u.cancelToken || u.signal) && (s = t => {
                    R && (r(!t || t.type ? new(0, h.default)(null, e, R) : t), R.abort(), R = null)
                }, u.cancelToken && u.cancelToken.subscribe(s), u.signal && (u.signal.aborted ? s() : u.signal.addEventListener("abort", s)));
                let T = (0, m.default)(u.url);
                if (T && -1 === E.default.protocols.indexOf(T)) return void r(new(0, p.default)("Unsupported protocol " + T + ":", p.default.ERR_BAD_REQUEST, e));
                R.send(f || null)
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => o);
        "use strict";
        var n = e("./AxiosError.js"),
            i = a.interopDefault(n);

        function o(e, t, r) {
            let s = r.config.validateStatus;
            !r.status || !s || s(r.status) ? e(r) : t(new(0, i.default)("Request failed with status code " + r.status, [i.default.ERR_BAD_REQUEST, i.default.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r))
        }
    }, {
        "./AxiosError.js": "hjCVQ",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "3ExDf": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        "use strict";

        function n(e) {
            let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
            return t && t[1] || ""
        }
        a.defineInteropFlag(r), a.export(r, "default", () => n)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "7uRZA": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "progressEventReducer", () => u), a.export(r, "progressEventDecorator", () => p), a.export(r, "asyncDecorator", () => f);
        var n = e("./speedometer.js"),
            i = a.interopDefault(n),
            o = e("./throttle.js"),
            l = a.interopDefault(o),
            c = e("../utils.js"),
            d = a.interopDefault(c);
        let u = (e, t, r = 3) => {
                let s = 0,
                    a = (0, i.default)(50, 250);
                return (0, l.default)(r => {
                    let n = r.loaded,
                        i = r.lengthComputable ? r.total : void 0,
                        o = n - s,
                        l = a(o);
                    s = n, e({
                        loaded: n,
                        total: i,
                        progress: i ? n / i : void 0,
                        bytes: o,
                        rate: l || void 0,
                        estimated: l && i && n <= i ? (i - n) / l : void 0,
                        event: r,
                        lengthComputable: null != i,
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
            f = e => (...t) => d.default.asap(() => e(...t))
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
                a = Array(e),
                n = 0,
                i = 0;
            return t = void 0 !== t ? t : 1e3,
                function(o) {
                    let l = Date.now(),
                        c = a[i];
                    r || (r = l), s[n] = o, a[n] = l;
                    let d = i,
                        u = 0;
                    for (; d !== n;) u += s[d++], d %= e;
                    if ((n = (n + 1) % e) === i && (i = (i + 1) % e), l - r < t) return;
                    let p = c && l - c;
                    return p ? Math.round(1e3 * u / p) : void 0
                }
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "4cf1B": [function(e, t, r, s) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = function(e, t) {
            let r, s, a = 0,
                n = 1e3 / t,
                i = (t, n = Date.now()) => {
                    a = n, r = null, s && (clearTimeout(s), s = null), e.apply(null, t)
                };
            return [(...e) => {
                let t = Date.now(),
                    o = t - a;
                o >= n ? i(e, t) : (r = e, s || (s = setTimeout(() => {
                    s = null, i(r)
                }, n - o)))
            }, () => r && i(r)]
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    gdj2s: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var n = e("../platform/index.js"),
            i = a.interopDefault(n),
            o = e("../utils.js"),
            l = a.interopDefault(o),
            c = e("./isURLSameOrigin.js"),
            d = a.interopDefault(c),
            u = e("./cookies.js"),
            p = a.interopDefault(u),
            f = e("../core/buildFullPath.js"),
            h = a.interopDefault(f),
            y = e("../core/mergeConfig.js"),
            m = a.interopDefault(y),
            g = e("../core/AxiosHeaders.js"),
            E = a.interopDefault(g),
            w = e("./buildURL.js"),
            j = a.interopDefault(w);
        r.default = e => {
            let t, r = (0, m.default)({}, e),
                {
                    data: s,
                    withXSRFToken: a,
                    xsrfHeaderName: n,
                    xsrfCookieName: o,
                    headers: c,
                    auth: u
                } = r;
            if (r.headers = c = E.default.from(c), r.url = (0, j.default)((0, h.default)(r.baseURL, r.url, r.allowAbsoluteUrls), e.params, e.paramsSerializer), u && c.set("Authorization", "Basic " + btoa((u.username || "") + ":" + (u.password ? unescape(encodeURIComponent(u.password)) : ""))), l.default.isFormData(s)) {
                if (i.default.hasStandardBrowserEnv || i.default.hasStandardBrowserWebWorkerEnv) c.setContentType(void 0);
                else if (!1 !== (t = c.getContentType())) {
                    let [e, ...r] = t ? t.split(";").map(e => e.trim()).filter(Boolean) : [];
                    c.setContentType([e || "multipart/form-data", ...r].join("; "))
                }
            }
            if (i.default.hasStandardBrowserEnv && (a && l.default.isFunction(a) && (a = a(r)), a || !1 !== a && (0, d.default)(r.url))) {
                let e = n && o && p.default.read(o);
                e && c.set(n, e)
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
        let a, n;
        var i = e("@parcel/transformer-js/src/esmodule-helpers.js");
        i.defineInteropFlag(r);
        var o = e("../platform/index.js"),
            l = i.interopDefault(o);
        r.default = l.default.hasStandardBrowserEnv ? (a = new URL(l.default.origin), n = l.default.navigator && /(msie|trident)/i.test(l.default.navigator.userAgent), e => (e = new URL(e, l.default.origin), a.protocol === e.protocol && a.host === e.host && (n || a.port === e.port))) : () => !0
    }, {
        "../platform/index.js": "fP1Ni",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    lftHJ: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var n = e("./../utils.js"),
            i = a.interopDefault(n),
            o = e("../platform/index.js");
        r.default = a.interopDefault(o).default.hasStandardBrowserEnv ? {
            write(e, t, r, s, a, n) {
                let o = [e + "=" + encodeURIComponent(t)];
                i.default.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), i.default.isString(s) && o.push("path=" + s), i.default.isString(a) && o.push("domain=" + a), !0 === n && o.push("secure"), document.cookie = o.join("; ")
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => c);
        "use strict";
        var n = e("../helpers/isAbsoluteURL.js"),
            i = a.interopDefault(n),
            o = e("../helpers/combineURLs.js"),
            l = a.interopDefault(o);

        function c(e, t, r) {
            let s = !(0, i.default)(t);
            return e && (s || !1 == r) ? (0, l.default)(e, t) : t
        }
    }, {
        "../helpers/isAbsoluteURL.js": "lW14e",
        "../helpers/combineURLs.js": "kZdZo",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    lW14e: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        "use strict";

        function n(e) {
            return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
        }
        a.defineInteropFlag(r), a.export(r, "default", () => n)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    kZdZo: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        "use strict";

        function n(e, t) {
            return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
        }
        a.defineInteropFlag(r), a.export(r, "default", () => n)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    j8Sbj: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => d);
        "use strict";
        var n = e("../utils.js"),
            i = a.interopDefault(n),
            o = e("./AxiosHeaders.js"),
            l = a.interopDefault(o);
        let c = e => e instanceof l.default ? {
            ...e
        } : e;

        function d(e, t) {
            t = t || {};
            let r = {};

            function s(e, t, r, s) {
                return i.default.isPlainObject(e) && i.default.isPlainObject(t) ? i.default.merge.call({
                    caseless: s
                }, e, t) : i.default.isPlainObject(t) ? i.default.merge({}, t) : i.default.isArray(t) ? t.slice() : t
            }

            function a(e, t, r, a) {
                return i.default.isUndefined(t) ? i.default.isUndefined(e) ? void 0 : s(void 0, e, r, a) : s(e, t, r, a)
            }

            function n(e, t) {
                if (!i.default.isUndefined(t)) return s(void 0, t)
            }

            function o(e, t) {
                return i.default.isUndefined(t) ? i.default.isUndefined(e) ? void 0 : s(void 0, e) : s(void 0, t)
            }

            function l(r, a, n) {
                return n in t ? s(r, a) : n in e ? s(void 0, r) : void 0
            }
            let d = {
                url: n,
                method: n,
                data: n,
                baseURL: o,
                transformRequest: o,
                transformResponse: o,
                paramsSerializer: o,
                timeout: o,
                timeoutMessage: o,
                withCredentials: o,
                withXSRFToken: o,
                adapter: o,
                responseType: o,
                xsrfCookieName: o,
                xsrfHeaderName: o,
                onUploadProgress: o,
                onDownloadProgress: o,
                decompress: o,
                maxContentLength: o,
                maxBodyLength: o,
                beforeRedirect: o,
                transport: o,
                httpAgent: o,
                httpsAgent: o,
                cancelToken: o,
                socketPath: o,
                responseEncoding: o,
                validateStatus: l,
                headers: (e, t, r) => a(c(e), c(t), r, !0)
            };
            return i.default.forEach(Object.keys(Object.assign({}, e, t)), function(s) {
                let n = d[s] || a,
                    o = n(e[s], t[s], s);
                i.default.isUndefined(o) && n !== l || (r[s] = o)
            }), r
        }
    }, {
        "../utils.js": "2ioTY",
        "./AxiosHeaders.js": "1qkRX",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "29Teh": [function(e, t, r, s) {
        let a;
        var n, i = e("@parcel/transformer-js/src/esmodule-helpers.js");
        i.defineInteropFlag(r);
        var o = e("../platform/index.js"),
            l = i.interopDefault(o),
            c = e("../utils.js"),
            d = i.interopDefault(c),
            u = e("../core/AxiosError.js"),
            p = i.interopDefault(u),
            f = e("../helpers/composeSignals.js"),
            h = i.interopDefault(f),
            y = e("../helpers/trackStream.js"),
            m = e("../core/AxiosHeaders.js"),
            g = i.interopDefault(m),
            E = e("../helpers/progressEventReducer.js"),
            w = e("../helpers/resolveConfig.js"),
            j = i.interopDefault(w),
            b = e("../core/settle.js"),
            A = i.interopDefault(b);
        let v = "function" == typeof fetch && "function" == typeof Request && "function" == typeof Response,
            I = v && "function" == typeof ReadableStream,
            R = v && ("function" == typeof TextEncoder ? (a = new TextEncoder, e => a.encode(e)) : async e => new Uint8Array(await new Response(e).arrayBuffer())),
            S = (e, ...t) => {
                try {
                    return !!e(...t)
                } catch (e) {
                    return !1
                }
            },
            T = I && S(() => {
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
            O = I && S(() => d.default.isReadableStream(new Response("").body)),
            _ = {
                stream: O && (e => e.body)
            };
        v && (n = new Response, ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(e => {
            _[e] || (_[e] = d.default.isFunction(n[e]) ? t => t[e]() : (t, r) => {
                throw new(0, p.default)(`Response type '${e}' is not supported`, p.default.ERR_NOT_SUPPORT, r)
            })
        }));
        let C = async e => {
            if (null == e) return 0;
            if (d.default.isBlob(e)) return e.size;
            if (d.default.isSpecCompliantForm(e)) {
                let t = new Request(l.default.origin, {
                    method: "POST",
                    body: e
                });
                return (await t.arrayBuffer()).byteLength
            }
            return d.default.isArrayBufferView(e) || d.default.isArrayBuffer(e) ? e.byteLength : (d.default.isURLSearchParams(e) && (e += ""), d.default.isString(e)) ? (await R(e)).byteLength : void 0
        }, k = async (e, t) => {
            let r = d.default.toFiniteNumber(e.getContentLength());
            return null == r ? C(t) : r
        };
        r.default = v && (async e => {
            let t, r, {
                url: s,
                method: a,
                data: n,
                signal: i,
                cancelToken: o,
                timeout: l,
                onDownloadProgress: c,
                onUploadProgress: u,
                responseType: f,
                headers: m,
                withCredentials: w = "same-origin",
                fetchOptions: b
            } = (0, j.default)(e);
            f = f ? (f + "").toLowerCase() : "text";
            let v = (0, h.default)([i, o && o.toAbortSignal()], l),
                I = v && v.unsubscribe && (() => {
                    v.unsubscribe()
                });
            try {
                if (u && T && "get" !== a && "head" !== a && 0 !== (r = await k(m, n))) {
                    let e, t = new Request(s, {
                        method: "POST",
                        body: n,
                        duplex: "half"
                    });
                    if (d.default.isFormData(n) && (e = t.headers.get("content-type")) && m.setContentType(e), t.body) {
                        let [e, s] = (0, E.progressEventDecorator)(r, (0, E.progressEventReducer)((0, E.asyncDecorator)(u)));
                        n = (0, y.trackStream)(t.body, 65536, e, s)
                    }
                }
                d.default.isString(w) || (w = w ? "include" : "omit");
                let i = "credentials" in Request.prototype;
                t = new Request(s, {
                    ...b,
                    signal: v,
                    method: a.toUpperCase(),
                    headers: m.normalize().toJSON(),
                    body: n,
                    duplex: "half",
                    credentials: i ? w : void 0
                });
                let o = await fetch(t, b),
                    l = O && ("stream" === f || "response" === f);
                if (O && (c || l && I)) {
                    let e = {};
                    ["status", "statusText", "headers"].forEach(t => {
                        e[t] = o[t]
                    });
                    let t = d.default.toFiniteNumber(o.headers.get("content-length")),
                        [r, s] = c && (0, E.progressEventDecorator)(t, (0, E.progressEventReducer)((0, E.asyncDecorator)(c), !0)) || [];
                    o = new Response((0, y.trackStream)(o.body, 65536, r, () => {
                        s && s(), I && I()
                    }), e)
                }
                f = f || "text";
                let p = await _[d.default.findKey(_, f) || "text"](o, e);
                return !l && I && I(), await new Promise((r, s) => {
                    (0, A.default)(r, s, {
                        data: p,
                        headers: g.default.from(o.headers),
                        status: o.status,
                        statusText: o.statusText,
                        config: e,
                        request: t
                    })
                })
            } catch (r) {
                if (I && I(), r && "TypeError" === r.name && /Load failed|fetch/i.test(r.message)) throw Object.assign(new(0, p.default)("Network Error", p.default.ERR_NETWORK, e, t), {
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var n = e("../cancel/CanceledError.js"),
            i = a.interopDefault(n),
            o = e("../core/AxiosError.js"),
            l = a.interopDefault(o),
            c = e("../utils.js"),
            d = a.interopDefault(c);
        r.default = (e, t) => {
            let {
                length: r
            } = e = e ? e.filter(Boolean) : [];
            if (t || r) {
                let r, s = new AbortController,
                    a = function(e) {
                        if (!r) {
                            r = !0, o();
                            let t = e instanceof Error ? e : this.reason;
                            s.abort(t instanceof l.default ? t : new(0, i.default)(t instanceof Error ? t.message : t))
                        }
                    },
                    n = t && setTimeout(() => {
                        n = null, a(new(0, l.default)(`timeout ${t} of ms exceeded`, l.default.ETIMEDOUT))
                    }, t),
                    o = () => {
                        e && (n && clearTimeout(n), n = null, e.forEach(e => {
                            e.unsubscribe ? e.unsubscribe(a) : e.removeEventListener("abort", a)
                        }), e = null)
                    };
                e.forEach(e => e.addEventListener("abort", a));
                let {
                    signal: c
                } = s;
                return c.unsubscribe = () => d.default.asap(o), c
            }
        }
    }, {
        "../cancel/CanceledError.js": "judoa",
        "../core/AxiosError.js": "hjCVQ",
        "../utils.js": "2ioTY",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    g4EAB: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "streamChunk", () => n), a.export(r, "readBytes", () => i), a.export(r, "trackStream", () => l);
        let n = function*(e, t) {
                let r, s = e.byteLength;
                if (!t || s < t) return void(yield e);
                let a = 0;
                for (; a < s;) r = a + t, yield e.slice(a, r), a = r
            },
            i = async function*(e, t) {
                for await (let r of o(e)) yield* n(r, t)
            }, o = async function*(e) {
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
                let a, n = i(e, t),
                    o = 0,
                    l = e => {
                        !a && (a = !0, s && s(e))
                    };
                return new ReadableStream({
                    async pull(e) {
                        try {
                            let {
                                done: t,
                                value: s
                            } = await n.next();
                            if (t) {
                                l(), e.close();
                                return
                            }
                            let a = s.byteLength;
                            if (r) {
                                let e = o += a;
                                r(e)
                            }
                            e.enqueue(new Uint8Array(s))
                        } catch (e) {
                            throw l(e), e
                        }
                    },
                    cancel: e => (l(e), n.return())
                }, {
                    highWaterMark: 2
                })
            }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "8PNBN": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        "use strict";
        a.defineInteropFlag(r);
        var n = e("../env/data.js"),
            i = e("../core/AxiosError.js"),
            o = a.interopDefault(i);
        let l = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
            l[e] = function(r) {
                return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
            }
        });
        let c = {};
        l.transitional = function(e, t, r) {
            function s(e, t) {
                return "[Axios v" + n.VERSION + "] Transitional option '" + e + "'" + t + (r ? ". " + r : "")
            }
            return (r, a, n) => {
                if (!1 === e) throw new(0, o.default)(s(a, " has been removed" + (t ? " in " + t : "")), o.default.ERR_DEPRECATED);
                return t && !c[a] && (c[a] = !0, console.warn(s(a, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(r, a, n)
            }
        }, l.spelling = function(e) {
            return (t, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0)
        }, r.default = {
            assertOptions: function(e, t, r) {
                if ("object" != typeof e) throw new(0, o.default)("options must be an object", o.default.ERR_BAD_OPTION_VALUE);
                let s = Object.keys(e),
                    a = s.length;
                for (; a-- > 0;) {
                    let n = s[a],
                        i = t[n];
                    if (i) {
                        let t = e[n],
                            r = void 0 === t || i(t, n, e);
                        if (!0 !== r) throw new(0, o.default)("option " + n + " must be " + r, o.default.ERR_BAD_OPTION_VALUE);
                        continue
                    }
                    if (!0 !== r) throw new(0, o.default)("Unknown option " + n, o.default.ERR_BAD_OPTION)
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "VERSION", () => n);
        let n = "1.10.0"
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "2aN3e": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        "use strict";
        var n = e("./CanceledError.js"),
            i = a.interopDefault(n);
        class o {
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
                }, e(function(e, s, a) {
                    r.reason || (r.reason = new(0, i.default)(e, s, a), t(r.reason))
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
                    token: new o(function(t) {
                        e = t
                    }),
                    cancel: e
                }
            }
        }
        r.default = o
    }, {
        "./CanceledError.js": "judoa",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    gQxw3: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        "use strict";

        function n(e) {
            return function(t) {
                return e.apply(null, t)
            }
        }
        a.defineInteropFlag(r), a.export(r, "default", () => n)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    lE0ea: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => o);
        "use strict";
        var n = e("./../utils.js"),
            i = a.interopDefault(n);

        function o(e) {
            return i.default.isObject(e) && !0 === e.isAxiosError
        }
    }, {
        "./../utils.js": "2ioTY",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    agO1h: [function(e, t, r, s) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        let a = {
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
        Object.entries(a).forEach(([e, t]) => {
            a[t] = e
        }), r.default = a
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    fUPIN: [function(e, t, r, s) {
        var a, n, i, o, l, c, d, u, p, f, h, y, m, g, E, w, j, b, A, v, I, R, S, T, O, _ = e("@parcel/transformer-js/src/esmodule-helpers.js");
        _.defineInteropFlag(r), _.export(r, "AccountType", () => w), _.export(r, "AccountTypeEnum", () => T), _.export(r, "AuthActionRequiredActions", () => R), _.export(r, "AuthType", () => j), _.export(r, "BasicAuthProvider", () => v), _.export(r, "ChainTypeEnum", () => O), _.export(r, "CodeChallengeMethodEnum", () => S), _.export(r, "EmbeddedState", () => m), _.export(r, "OAuthProvider", () => I), _.export(r, "OpenfortEvents", () => g), _.export(r, "RecoveryMethod", () => E), _.export(r, "ThirdPartyOAuthProvider", () => A), _.export(r, "TokenType", () => b), (a = m || (m = {}))[a.NONE = 0] = "NONE", a[a.UNAUTHENTICATED = 1] = "UNAUTHENTICATED", a[a.EMBEDDED_SIGNER_NOT_CONFIGURED = 2] = "EMBEDDED_SIGNER_NOT_CONFIGURED", a[a.CREATING_ACCOUNT = 3] = "CREATING_ACCOUNT", a[a.READY = 4] = "READY", (n = g || (g = {})).LOGGED_OUT = "loggedOut", n.SWITCH_ACCOUNT = "switchAccount", n.TOKEN_REFRESHED = "tokenRefreshed", (i = E || (E = {})).PASSWORD = "password", i.AUTOMATIC = "automatic", (o = w || (w = {})).UPGRADEABLE_V4 = "Upgradeable_v04", o.MANAGED_V4 = "Managed_v04", o.ERC6551_V4 = "ERC6551_v04", o.ERC6551_V5 = "ERC6551_v05", o.RECOVERABLE_V4 = "Recoverable_v04", o.MANAGED_V5 = "Managed_v05", o.UPGRADEABLE_V5 = "Upgradeable_v05", o.UPGRADEABLE_V6 = "Upgradeable_v06", o.ZKSYNC_UPGRADEABLE_V1 = "zksync_upgradeable_v1", o.ZKSYNC_UPGRADEABLE_V2 = "zksync_upgradeable_v2", (l = j || (j = {})).OPENFORT = "openfort", l.THIRD_PARTY = "thirdParty", (c = b || (b = {})).ID_TOKEN = "idToken", c.CUSTOM_TOKEN = "customToken", (d = A || (A = {})).ACCELBYTE = "accelbyte", d.FIREBASE = "firebase", d.LOOTLOCKER = "lootlocker", d.PLAYFAB = "playfab", d.SUPABASE = "supabase", d.CUSTOM = "custom", d.OIDC = "oidc", (u = v || (v = {})).EMAIL = "email", u.WALLET = "wallet", (p = I || (I = {})).GOOGLE = "google", p.TWITTER = "twitter", p.APPLE = "apple", p.FACEBOOK = "facebook", p.DISCORD = "discord", p.EPIC_GAMES = "epic_games", p.LINE = "line", (R || (R = {})).ACTION_VERIFY_EMAIL = "verify_email", (f = S || (S = {})).PLAIN = "plain", f.S256 = "S256", (h = T || (T = {})).EOA = "Externally Owned Account", h.SMART_ACCOUNT = "Smart Account", (y = O || (O = {})).EVM = "EVM", y.SVM = "SVM"
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    iBeSb: [function(e, t, r, s) {
        var a, n, i, o = e("@parcel/transformer-js/src/esmodule-helpers.js");
        o.defineInteropFlag(r), o.export(r, "Event", () => n), o.export(r, "ExportPrivateKeyRequest", () => y), o.export(r, "GetCurrentDeviceRequest", () => p), o.export(r, "INCORRECT_USER_ENTROPY_ERROR", () => u), o.export(r, "MISSING_PROJECT_ENTROPY_ERROR", () => d), o.export(r, "MISSING_USER_ENTROPY_ERROR", () => c), o.export(r, "NOT_CONFIGURED_ERROR", () => l), o.export(r, "SetRecoveryMethodRequest", () => m), o.export(r, "ShieldAuthType", () => i), o.export(r, "SignRequest", () => f), o.export(r, "SwitchChainRequest", () => h), o.export(r, "UpdateAuthenticationRequest", () => E), o.export(r, "isErrorResponse", () => g), (a = n || (n = {})).LOADED = "loaded", a.CONFIGURE = "configure", a.CONFIGURED = "configured", a.RECOVER = "recover", a.RECOVERED = "recovered", a.CREATE = "create", a.CREATED = "created", a.UPDATE_AUTHENTICATION = "update-authentication", a.AUTHENTICATION_UPDATED = "authentication-updated", a.SIGN = "sign", a.SET_RECOVERY_METHOD = "set-recovery-method", a.SWITCH_CHAIN = "switch-chain", a.CHAIN_SWITCHED = "chain-switched", a.EXPORT = "export", a.SIGNED = "signed", a.LOGOUT = "logout", a.LOGGED_OUT = "logged-out", a.GET_CURRENT_DEVICE = "get-current-device", a.CURRENT_DEVICE = "current-device", a.PING = "ping", a.PONG = "pong";
        let l = "not-configured-error",
            c = "missing-user-entropy-error",
            d = "missing-project-entropy-error",
            u = "incorrect-user-entropy-error";
        class p {
            uuid;
            action = n.GET_CURRENT_DEVICE;
            playerID;
            constructor(e, t) {
                this.uuid = e, this.playerID = t
            }
        }
        class f {
            uuid;
            action = n.SIGN;
            message;
            requireArrayify;
            requireHash;
            requestConfiguration;
            constructor(e, t, r, s, a) {
                this.uuid = e, this.message = t, this.requireArrayify = r, this.requireHash = s, this.requestConfiguration = a
            }
        }
        class h {
            uuid;
            action = n.SWITCH_CHAIN;
            chainId;
            requestConfiguration;
            constructor(e, t, r) {
                this.uuid = e, this.chainId = t, this.requestConfiguration = r
            }
        }
        class y {
            uuid;
            action = n.EXPORT;
            requestConfiguration;
            constructor(e, t) {
                this.uuid = e, this.requestConfiguration = t
            }
        }
        class m {
            uuid;
            action = n.SET_RECOVERY_METHOD;
            recoveryMethod;
            recoveryPassword;
            encryptionSession;
            requestConfiguration;
            constructor(e, t, r, s, a) {
                this.uuid = e, this.recoveryMethod = t, this.recoveryPassword = r, this.encryptionSession = s, this.requestConfiguration = a
            }
        }

        function g(e) {
            return "error" in e
        }
        class E {
            uuid;
            action = n.UPDATE_AUTHENTICATION;
            accessToken;
            recovery;
            constructor(e, t, r) {
                this.uuid = e, this.accessToken = t, this.recovery = r
            }
        }(i || (i = {})).OPENFORT = "openfort"
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    kcx6I: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "IframeManager", () => j), a.export(r, "MissingProjectEntropyError", () => g), a.export(r, "MissingRecoveryPasswordError", () => m), a.export(r, "NotConfiguredError", () => w), a.export(r, "WrongRecoveryPasswordError", () => E);
        var n = e("../core/configuration/account.js"),
            i = e("./messaging/browserMessenger/connect.js"),
            o = a.interopDefault(i);
        e("./messaging/browserMessenger/backwardCompatibility.js");
        var l = e("../storage/istorage.js"),
            c = e("../core/errors/openfortError.js"),
            d = e("../utils/debug.js"),
            u = e("../utils/crypto.js"),
            p = e("../core/configuration/authentication.js"),
            f = e("./messaging/ReactNativeMessenger.js"),
            h = e("./types.js"),
            y = e("../core/errors/sentry.js");
        class m extends Error {
            constructor() {
                super("This embedded signer requires a password to be recovered")
            }
        }
        class g extends Error {
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
        class j {
            messenger;
            connection;
            remote;
            storage;
            sdkConfiguration;
            isInitialized = !1;
            initializationPromise = null;
            constructor(e, t, r) {
                if (!e) throw new(0, c.OpenfortError)("Configuration is required for IframeManager", c.OpenfortErrorType.INVALID_CONFIGURATION);
                if (!t) throw new(0, c.OpenfortError)("Storage is required for IframeManager", c.OpenfortErrorType.INVALID_CONFIGURATION);
                if (!r) throw new(0, c.OpenfortError)("Messenger is required for IframeManager", c.OpenfortErrorType.INVALID_CONFIGURATION);
                this.sdkConfiguration = e, this.storage = t, this.messenger = r
            }
            async initialize() {
                if (!this.isInitialized)
                    if (this.initializationPromise) await this.initializationPromise;
                    else {
                        this.initializationPromise = this.doInitialize();
                        try {
                            await this.initializationPromise, this.isInitialized = !0
                        } catch (e) {
                            throw this.initializationPromise = null, e
                        }
                    }
            }
            async doInitialize() {
                (0, d.debugLog)("Initializing IframeManager connection..."), this.messenger.initialize({
                    validateReceivedMessage: e => !(!e || "object" != typeof e),
                    log: d.debugLog
                }), this.connection = (0, o.default)({
                    messenger: this.messenger,
                    timeout: 1e4,
                    log: d.debugLog
                });
                try {
                    this.remote = await this.connection.promise, (0, d.debugLog)("IframeManager connection established")
                } catch (e) {
                    throw y.sentry.captureException(e), this.destroy(), (0, d.debugLog)("Failed to establish connection:", e), new(0, c.OpenfortError)(`Failed to establish iFrame connection: ${e.cause||e.message}`, c.OpenfortErrorType.INTERNAL_ERROR, e)
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
                    if (e.error === h.MISSING_PROJECT_ENTROPY_ERROR) throw this.storage.remove(l.StorageKeys.ACCOUNT), new g;
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
                let t = await n.Account.fromStorage(this.storage),
                    r = await this.ensureConnection(),
                    s = await this.buildIFrameRequestConfiguration();
                s.chainId = e?.chainId ?? t?.chainId ?? null, s.password = e?.entropy?.recoveryPassword ?? null, s.recovery = {
                    ...s.recovery,
                    encryptionSession: e?.entropy?.encryptionSession
                };
                let a = {
                        uuid: (0, u.randomUUID)(),
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
                    i = await r.configure(a);
                return (0, h.isErrorResponse)(i) && this.handleError(i), "undefined" != typeof sessionStorage && sessionStorage.setItem("iframe-version", i.version ?? "undefined"), i
            }
            async create(e) {
                if (!this.sdkConfiguration.shieldConfiguration) throw Error("shieldConfiguration is required");
                let t = await this.ensureConnection(),
                    r = await this.buildIFrameRequestConfiguration(),
                    s = {
                        uuid: (0, u.randomUUID)(),
                        action: h.Event.CREATE,
                        recovery: r.recovery,
                        publishableKey: this.sdkConfiguration.baseConfiguration.publishableKey,
                        shieldAPIKey: this.sdkConfiguration.shieldConfiguration?.shieldPublishableKey || "",
                        accessToken: r.accessToken,
                        playerID: r.playerID,
                        thirdPartyProvider: r.thirdPartyProvider,
                        thirdPartyTokenType: r.thirdPartyTokenType,
                        encryptionKey: r.password,
                        encryptionPart: this.sdkConfiguration?.shieldConfiguration?.shieldEncryptionKey ?? null,
                        encryptionSession: r.recovery?.encryptionSession ?? null,
                        openfortURL: this.sdkConfiguration.backendUrl,
                        shieldURL: this.sdkConfiguration.shieldUrl,
                        chainId: e.chainId,
                        accountType: e.accountType,
                        chainType: e.chainType
                    },
                    a = await t.create(s);
                return (0, h.isErrorResponse)(a) && this.handleError(a), "undefined" != typeof sessionStorage && sessionStorage.setItem("iframe-version", a.version ?? "undefined"), a
            }
            async recover(e) {
                if (!this.sdkConfiguration.shieldConfiguration) throw Error("shieldConfiguration is required");
                let t = await n.Account.fromStorage(this.storage),
                    r = await this.ensureConnection(),
                    s = await this.buildIFrameRequestConfiguration();
                s.chainId = t?.chainId ?? null, s.password = e?.entropy?.recoveryPassword ?? null, s.recovery = {
                    ...s.recovery,
                    encryptionSession: e?.entropy?.encryptionSession
                };
                let a = {
                        uuid: (0, u.randomUUID)(),
                        action: h.Event.RECOVER,
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
                        shieldURL: this.sdkConfiguration.shieldUrl,
                        account: e.account
                    },
                    i = await r.recover(a);
                return (0, h.isErrorResponse)(i) && this.handleError(i), "undefined" != typeof sessionStorage && sessionStorage.setItem("iframe-version", i.version ?? "undefined"), i
            }
            async sign(e, t, r) {
                (0, d.debugLog)("[iframe] ensureConnection");
                let s = await this.ensureConnection(),
                    a = new(0, h.SignRequest)((0, u.randomUUID)(), e, t, r, await this.buildRequestConfiguration());
                (0, d.debugLog)("[iframe] done ensureConnection");
                try {
                    let e = await s.sign(a);
                    return (0, d.debugLog)("[iframe] response", e), (0, h.isErrorResponse)(e) && this.handleError(e), "undefined" != typeof sessionStorage && sessionStorage.setItem("iframe-version", e.version ?? "undefined"), e.signature
                } catch (s) {
                    if (s instanceof w) return await this.configure(), this.sign(e, t, r);
                    throw s
                }
            }
            async switchChain(e) {
                let t = await this.ensureConnection(),
                    r = new(0, h.SwitchChainRequest)((0, u.randomUUID)(), e, await this.buildRequestConfiguration());
                try {
                    let e = await t.switchChain(r);
                    return (0, h.isErrorResponse)(e) && this.handleError(e), e
                } catch (t) {
                    if (t instanceof w) return await this.configure(), this.switchChain(e);
                    throw t
                }
            }
            async export () {
                let e = await this.ensureConnection(),
                    t = new(0, h.ExportPrivateKeyRequest)((0, u.randomUUID)(), await this.buildRequestConfiguration());
                try {
                    let r = await e.export(t);
                    return (0, h.isErrorResponse)(r) && this.handleError(r), "undefined" != typeof sessionStorage && sessionStorage.setItem("iframe-version", r.version ?? "undefined"), r.key
                } catch (e) {
                    if (e instanceof w) return await this.configure(), this.export();
                    throw e
                }
            }
            async setEmbeddedRecovery(e, t, r) {
                let s = await this.ensureConnection(),
                    a = new(0, h.SetRecoveryMethodRequest)((0, u.randomUUID)(), e, t, r, await this.buildRequestConfiguration());
                try {
                    let e = await s.setRecoveryMethod(a);
                    (0, h.isErrorResponse)(e) && this.handleError(e), "undefined" != typeof sessionStorage && sessionStorage.setItem("iframe-version", e.version ?? "undefined")
                } catch (s) {
                    if (s instanceof w) return await this.configure(), this.setEmbeddedRecovery(e, t, r);
                    throw s
                }
            }
            async getCurrentDevice(e) {
                let t = await this.ensureConnection(),
                    r = new(0, h.GetCurrentDeviceRequest)((0, u.randomUUID)(), e);
                try {
                    let e = await t.getCurrentDevice(r);
                    return (0, h.isErrorResponse)(e) && this.handleError(e), "undefined" != typeof sessionStorage && sessionStorage.setItem("iframe-version", e.version ?? "undefined"), e
                } catch (e) {
                    if (e instanceof w) return null;
                    throw e
                }
            }
            async updateAuthentication() {
                if (!this.isLoaded() || !this.remote) return void(0, d.debugLog)("IframeManager not loaded, skipping authentication update");
                let e = await p.Authentication.fromStorage(this.storage);
                if (!e) return void(0, d.debugLog)("No authentication found, skipping update");
                let t = new(0, h.UpdateAuthenticationRequest)((0, u.randomUUID)(), e.token);
                try {
                    (0, d.debugLog)("Updating authentication in iframe with token:", e.token);
                    let r = await this.remote.updateAuthentication(t);
                    (0, h.isErrorResponse)(r) && this.handleError(r)
                } catch (e) {
                    if (e instanceof w) return await this.configure(), void await this.updateAuthentication();
                    throw e
                }
            }
            async disconnect() {
                let e = await this.ensureConnection(),
                    t = {
                        uuid: (0, u.randomUUID)()
                    };
                await e.logout(t)
            }
            async onMessage(e) {
                (0, d.debugLog)("[HANDSHAKE DEBUG] IframeManager.onMessage called with:", e), this.messenger instanceof f.ReactNativeMessenger ? (this.isInitialized || this.connection ? (0, d.debugLog)(`[HANDSHAKE DEBUG] Connection already initialized (isInitialized: ${this.isInitialized}, hasConnection: ${!!this.connection})`) : ((0, d.debugLog)("[HANDSHAKE DEBUG] First message received, initializing connection..."), this.initialize().catch(e => {
                    (0, d.debugLog)("[HANDSHAKE DEBUG] Failed to initialize connection:", e)
                })), (0, d.debugLog)("[HANDSHAKE DEBUG] Passing message to ReactNativeMessenger"), this.messenger.handleMessage(e)) : (0, d.debugLog)("[HANDSHAKE DEBUG] Not a ReactNativeMessenger, ignoring message")
            }
            isLoaded() {
                return this.isInitialized && void 0 !== this.remote
            }
            destroy() {
                this.connection && this.connection.destroy(), this.messenger.destroy(), this.remote = void 0, this.isInitialized = !1, this.connection = void 0, this.initializationPromise = null
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "Account", () => i);
        var n = e("../../storage/istorage.js");
        class i {
            constructor(e) {
                this.user = e.user, this.id = e.id, this.chainType = e.chainType, this.address = e.address, this.accountType = e.accountType, this.chainId = e.chainId, this.createdAt = e.createdAt, this.implementationType = e.implementationType, this.factoryAddress = e.factoryAddress, this.salt = e.salt, this.ownerAddress = e.ownerAddress, this.type = e.type
            }
            user;
            id;
            chainType;
            address;
            accountType;
            chainId;
            ownerAddress;
            factoryAddress;
            salt;
            createdAt;
            implementationType;
            type;
            save(e) {
                e.save(n.StorageKeys.ACCOUNT, JSON.stringify({
                    user: this.user,
                    id: this.id,
                    chainType: this.chainType,
                    address: this.address,
                    accountType: this.accountType,
                    chainId: this.chainId,
                    ownerAddress: this.ownerAddress,
                    createdAt: this.createdAt,
                    implementationType: this.implementationType,
                    factoryAddress: this.factoryAddress,
                    salt: this.salt
                }))
            }
            static async fromStorage(e) {
                let t = await e.get(n.StorageKeys.ACCOUNT);
                if (!t) return null;
                try {
                    let e = JSON.parse(t);
                    return new i(e)
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
        var a, n, i = e("@parcel/transformer-js/src/esmodule-helpers.js");
        i.defineInteropFlag(r), i.export(r, "StorageKeys", () => n), (a = n || (n = {})).AUTHENTICATION = "openfort.authentication", a.CONFIGURATION = "openfort.configuration", a.ACCOUNT = "openfort.account", a.TEST = "openfort.test", a.SESSION = "openfort.session", a.PKCE_STATE = "openfort.pkce_state", a.PKCE_VERIFIER = "openfort.pkce_verifier"
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "7f1ki": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => y);
        var n = e("./PenpalError.js"),
            i = a.interopDefault(n),
            o = e("./shakeHands.js"),
            l = a.interopDefault(o),
            c = e("./guards.js"),
            d = e("./once.js"),
            u = a.interopDefault(d),
            p = e("./namespace.js"),
            f = a.interopDefault(p);
        let h = new WeakSet,
            y = ({
                messenger: e,
                methods: t = {},
                timeout: r,
                channel: s,
                log: a
            }) => {
                if (!e) throw new(0, i.default)("INVALID_ARGUMENT", "messenger must be defined");
                if (h.has(e)) throw new(0, i.default)("INVALID_ARGUMENT", "A messenger can only be used for a single connection");
                h.add(e);
                let n = [e.destroy],
                    o = (0, u.default)(t => {
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
                        for (let e of n) e();
                        a?.("Connection destroyed")
                    }),
                    d = e => (0, c.isMessage)(e) && e.channel === s;
                return {
                    promise: (async () => {
                        try {
                            e.initialize({
                                log: a,
                                validateReceivedMessage: d
                            }), e.addMessageHandler(e => {
                                (0, c.isDestroyMessage)(e) && o(!1)
                            });
                            let {
                                remoteProxy: i,
                                destroy: u
                            } = await (0, l.default)({
                                messenger: e,
                                methods: t,
                                timeout: r,
                                channel: s,
                                log: a
                            });
                            return n.push(u), i
                        } catch (e) {
                            throw o(!0), e
                        }
                    })(),
                    destroy: () => {
                        o(!0)
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => n);
        class n extends Error {
            code;
            constructor(e, t) {
                super(t), this.name = "PenpalError", this.code = e
            }
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    zrweY: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => w);
        var n = e("../../../utils/crypto.js"),
            i = e("./PenpalError.js"),
            o = a.interopDefault(i),
            l = e("./connectCallHandler.js"),
            c = a.interopDefault(l),
            d = e("./connectRemoteProxy.js"),
            u = a.interopDefault(d),
            p = e("./guards.js"),
            f = e("./getPromiseWithResolvers.js"),
            h = a.interopDefault(f),
            y = e("./methodSerialization.js"),
            m = e("./backwardCompatibility.js"),
            g = e("./namespace.js"),
            E = a.interopDefault(g);
        let w = ({
            messenger: e,
            methods: t,
            timeout: r,
            channel: s,
            log: a
        }) => {
            let i, l = (0, n.randomUUID)(),
                d = [],
                f = !1,
                g = (0, y.extractMethodPathsFromMethods)(t),
                {
                    promise: w,
                    resolve: j,
                    reject: b
                } = (0, h.default)(),
                A = void 0 !== r ? setTimeout(() => {
                    b(new(0, o.default)("CONNECTION_TIMEOUT", `Connection timed out after ${r}ms`))
                }, r) : void 0,
                v = () => {
                    for (let e of d) e()
                },
                I = () => {
                    if (f) return;
                    d.push((0, c.default)(e, t, s, a));
                    let {
                        remoteProxy: r,
                        destroy: n
                    } = (0, u.default)(e, s, a);
                    d.push(n), clearTimeout(A), f = !0, j({
                        remoteProxy: r,
                        destroy: v
                    })
                },
                R = () => {
                    let t = {
                        namespace: E.default,
                        type: "SYN",
                        channel: s,
                        participantId: l
                    };
                    a?.("Sending handshake SYN", t);
                    try {
                        e.sendMessage(t)
                    } catch (e) {
                        b(new(0, o.default)("TRANSMISSION_FAILED", e.message))
                    }
                },
                S = t => {
                    (0, p.isSynMessage)(t) && (t => {
                        if (a?.("Received handshake SYN", t), t.participantId === i && i !== m.DEPRECATED_PENPAL_PARTICIPANT_ID || (i = t.participantId, R(), !(l > i || i === m.DEPRECATED_PENPAL_PARTICIPANT_ID))) return;
                        let r = {
                            namespace: E.default,
                            channel: s,
                            type: "ACK1",
                            methodPaths: g
                        };
                        a?.("Sending handshake ACK1", r);
                        try {
                            e.sendMessage(r)
                        } catch (e) {
                            b(new(0, o.default)("TRANSMISSION_FAILED", e.message))
                        }
                    })(t), (0, p.isAck1Message)(t) && (t => {
                        a?.("Received handshake ACK1", t);
                        let r = {
                            namespace: E.default,
                            channel: s,
                            type: "ACK2"
                        };
                        a?.("Sending handshake ACK2", r);
                        try {
                            e.sendMessage(r)
                        } catch (e) {
                            return void b(new(0, o.default)("TRANSMISSION_FAILED", e.message))
                        }
                        I()
                    })(t), (0, p.isAck2Message)(t) && (a?.("Received handshake ACK2", t), I())
                };
            return e.addMessageHandler(S), d.push(() => e.removeMessageHandler(S)), R(), w
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
        let a;
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");

        function i() {
            if ("undefined" != typeof crypto && crypto.randomUUID) return crypto.randomUUID();
            let e = new Uint8Array(16);
            return crypto.getRandomValues(e), e[6] = 15 & e[6] | 64, e[8] = 63 & e[8] | 128, [...e].map((e, t) => {
                let r = e.toString(16).padStart(2, "0");
                return [4, 6, 8, 10].includes(t) ? `-${r}` : r
            }).join("")
        }

        function o(e) {
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
            a = e
        }
        async function d(e, t) {
            if (a) return a(e, t);
            if ("undefined" != typeof crypto && crypto.subtle && crypto.subtle.digest) return crypto.subtle.digest(e, t);
            throw Error("No crypto digest function available. Please provide a crypto override for this environment.")
        }
        n.defineInteropFlag(r), n.export(r, "cryptoDigest", () => d), n.export(r, "hexToString", () => l), n.export(r, "numberToHex", () => o), n.export(r, "randomUUID", () => i), n.export(r, "setCryptoDigestOverride", () => c)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    d5yCk: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => y);
        var n = e("./errorSerialization.js"),
            i = e("./Reply.js"),
            o = a.interopDefault(i),
            l = e("./PenpalError.js"),
            c = a.interopDefault(l),
            d = e("./methodSerialization.js"),
            u = e("./guards.js"),
            p = e("./namespace.js"),
            f = a.interopDefault(p);
        let h = (e, t, r) => ({
                namespace: f.default,
                channel: e,
                type: "REPLY",
                callId: t,
                isError: !0,
                ...r instanceof Error ? {
                    value: (0, n.serializeError)(r),
                    isSerializedErrorInstance: !0
                } : {
                    value: r
                }
            }),
            y = (e, t, r, s) => {
                let a = !1,
                    n = async n => {
                        let i, l;
                        if (a || !(0, u.isCallMessage)(n)) return;
                        s?.(`Received ${(0,d.formatMethodPath)(n.methodPath)}() call`, n);
                        let {
                            methodPath: p,
                            args: y,
                            id: m
                        } = n;
                        try {
                            let e = (0, d.getMethodAtMethodPath)(p, t);
                            if (!e) throw new(0, c.default)("METHOD_NOT_FOUND", `Method \`${(0,d.formatMethodPath)(p)}\` is not found.`);
                            let s = await e(...y);
                            s instanceof o.default && (l = s.transferables, s = await s.value), i = {
                                namespace: f.default,
                                channel: r,
                                type: "REPLY",
                                callId: m,
                                value: s
                            }
                        } catch (e) {
                            i = h(r, m, e)
                        }
                        if (!a) try {
                            s?.(`Sending ${(0,d.formatMethodPath)(p)}() reply`, i), e.sendMessage(i, l)
                        } catch (t) {
                            throw "DataCloneError" === t.name && (i = h(r, m, t), s?.(`Sending ${(0,d.formatMethodPath)(p)}() reply`, i), e.sendMessage(i)), t
                        }
                    };
                return e.addMessageHandler(n), () => {
                    a = !0, e.removeMessageHandler(n)
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "deserializeError", () => l), a.export(r, "serializeError", () => o);
        var n = e("./PenpalError.js"),
            i = a.interopDefault(n);
        let o = e => ({
                name: e.name,
                message: e.message,
                stack: e.stack,
                penpalCode: e instanceof i.default ? e.code : void 0
            }),
            l = ({
                name: e,
                message: t,
                stack: r,
                penpalCode: s
            }) => {
                let a = s ? new(0, i.default)(s, t) : Error(t);
                return a.name = e, a.stack = r, a
            }
    }, {
        "./PenpalError.js": "dwP65",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "8oNoy": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        let n = Symbol("Reply");
        class i {
            value;
            transferables;
            #e = n;
            constructor(e, t) {
                this.value = e, this.transferables = t?.transferables
            }
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    lKmYZ: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "extractMethodPathsFromMethods", () => i), a.export(r, "formatMethodPath", () => l), a.export(r, "getMethodAtMethodPath", () => o);
        var n = e("./guards.js");
        let i = (e, t = []) => {
                let r = [];
                for (let s of Object.keys(e)) {
                    let a = e[s];
                    (0, n.isFunction)(a) ? r.push([...t, s]): (0, n.isObject)(a) && r.push(...i(a, [...t, s]))
                }
                return r
            },
            o = (e, t) => {
                let r = e.reduce((e, t) => (0, n.isObject)(e) ? e[t] : void 0, t);
                return (0, n.isFunction)(r) ? r : void 0
            },
            l = e => e.join(".")
    }, {
        "./guards.js": "6PYiY",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "6PYiY": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "isAck1Message", () => u), a.export(r, "isAck2Message", () => p), a.export(r, "isCallMessage", () => f), a.export(r, "isDestroyMessage", () => y), a.export(r, "isFunction", () => l), a.export(r, "isMessage", () => c), a.export(r, "isObject", () => o), a.export(r, "isReplyMessage", () => h), a.export(r, "isSynMessage", () => d);
        var n = e("./namespace.js"),
            i = a.interopDefault(n);
        let o = e => "object" == typeof e && null !== e,
            l = e => "function" == typeof e,
            c = e => o(e) && e.namespace === i.default,
            d = e => "SYN" === e.type,
            u = e => "ACK1" === e.type,
            p = e => "ACK2" === e.type,
            f = e => "CALL" === e.type,
            h = e => "REPLY" === e.type,
            y = e => "DESTROY" === e.type
    }, {
        "./namespace.js": "sVrrw",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    sVrrw: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => n);
        var n = "penpal"
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "9AXaC": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => E);
        var n = e("../../../utils/crypto.js"),
            i = e("./errorSerialization.js"),
            o = e("./methodSerialization.js"),
            l = e("./CallOptions.js"),
            c = a.interopDefault(l),
            d = e("./PenpalError.js"),
            u = a.interopDefault(d),
            p = e("./guards.js"),
            f = e("./namespace.js"),
            h = a.interopDefault(f);
        let y = new Set(["apply", "call", "bind"]),
            m = (e, t, r = []) => new Proxy(r.length ? () => {} : Object.create(null), {
                get(s, a) {
                    if ("then" !== a) return r.length && y.has(a) ? Reflect.get(s, a) : m(e, t, [...r, a])
                },
                apply: (t, s, a) => e(r, a)
            }),
            g = e => new(0, u.default)("CONNECTION_DESTROYED", `Method call ${(0,o.formatMethodPath)(e)}() failed due to destroyed connection`),
            E = (e, t, r) => {
                let s = !1,
                    a = new Map,
                    l = e => {
                        if (!(0, p.isReplyMessage)(e)) return;
                        let {
                            callId: t,
                            value: s,
                            isError: n,
                            isSerializedErrorInstance: l
                        } = e, c = a.get(t);
                        c && (a.delete(t), r?.(`Received ${(0,o.formatMethodPath)(c.methodPath)}() call`, e), n ? c.reject(l ? (0, i.deserializeError)(s) : s) : c.resolve(s))
                    };
                return e.addMessageHandler(l), {
                    remoteProxy: m((i, l) => {
                        if (s) throw g(i);
                        let d = (0, n.randomUUID)(),
                            p = l[l.length - 1],
                            f = p instanceof c.default,
                            {
                                timeout: y,
                                transferables: m
                            } = f ? p : {},
                            E = f ? l.slice(0, -1) : l;
                        return new Promise((s, n) => {
                            let l = void 0 !== y ? window.setTimeout(() => {
                                a.delete(d), n(new(0, u.default)("METHOD_CALL_TIMEOUT", `Method call ${(0,o.formatMethodPath)(i)}() timed out after ${y}ms`))
                            }, y) : void 0;
                            a.set(d, {
                                methodPath: i,
                                resolve: s,
                                reject: n,
                                timeoutId: l
                            });
                            try {
                                let s = {
                                    namespace: h.default,
                                    channel: t,
                                    type: "CALL",
                                    id: d,
                                    methodPath: i,
                                    args: E
                                };
                                r?.(`Sending ${(0,o.formatMethodPath)(i)}() call`, s), e.sendMessage(s, m)
                            } catch (e) {
                                n(new(0, u.default)("TRANSMISSION_FAILED", e.message))
                            }
                        })
                    }, r),
                    destroy: () => {
                        for (let {
                                methodPath: t,
                                reject: r,
                                timeoutId: n
                            }
                            of(s = !0, e.removeMessageHandler(l), a.values())) clearTimeout(n), r(g(t));
                        a.clear()
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        let n = Symbol("CallOptions");
        class i {
            transferables;
            timeout;
            #t = n;
            constructor(e) {
                this.transferables = e?.transferables, this.timeout = e?.timeout
            }
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "1ZTRs": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => n);
        let n = () => {
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
        var a, n, i, o, l = e("@parcel/transformer-js/src/esmodule-helpers.js");
        l.defineInteropFlag(r), l.export(r, "DEPRECATED_PENPAL_PARTICIPANT_ID", () => h), l.export(r, "downgradeMessage", () => j), l.export(r, "isDeprecatedMessage", () => y), l.export(r, "upgradeMessage", () => w);
        var c = e("./namespace.js"),
            d = l.interopDefault(c),
            u = e("./guards.js"),
            p = e("./PenpalBugError.js"),
            f = l.interopDefault(p);
        let h = "deprecated-penpal";
        (a = i || (i = {})).Call = "call", a.Reply = "reply", a.Syn = "syn", a.SynAck = "synAck", a.Ack = "ack", (n = o || (o = {})).Fulfilled = "fulfilled", n.Rejected = "rejected";
        let y = e => (0, u.isObject)(e) && "penpal" in e,
            m = e => e.split("."),
            g = e => e.join("."),
            E = e => new(0, f.default)(`Unexpected message to translate: ${JSON.stringify(e)}`),
            w = e => {
                if (e.penpal === i.Syn) return {
                    namespace: d.default,
                    channel: void 0,
                    type: "SYN",
                    participantId: h
                };
                if (e.penpal === i.SynAck) return {
                    namespace: d.default,
                    channel: void 0,
                    type: "ACK1",
                    methodPaths: e.methodNames.map(m)
                };
                if (e.penpal === i.Ack) return {
                    namespace: d.default,
                    channel: void 0,
                    type: "ACK2"
                };
                if (e.penpal === i.Call) return {
                    namespace: d.default,
                    channel: void 0,
                    type: "CALL",
                    id: e.id,
                    methodPath: m(e.methodName),
                    args: e.args
                };
                if (e.penpal === i.Reply) return e.resolution === o.Fulfilled ? {
                    namespace: d.default,
                    channel: void 0,
                    type: "REPLY",
                    callId: e.id,
                    value: e.returnValue
                } : {
                    namespace: d.default,
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
            j = e => {
                if ((0, u.isAck1Message)(e)) return {
                    penpal: i.SynAck,
                    methodNames: e.methodPaths.map(g)
                };
                if ((0, u.isCallMessage)(e)) return {
                    penpal: i.Call,
                    id: e.id,
                    methodName: g(e.methodPath),
                    args: e.args
                };
                if ((0, u.isReplyMessage)(e)) return e.isError ? {
                    penpal: i.Reply,
                    id: e.callId,
                    resolution: o.Rejected,
                    ...e.isSerializedErrorInstance ? {
                        returnValue: e.value,
                        returnValueIsError: !0
                    } : {
                        returnValue: e.value
                    }
                } : {
                    penpal: i.Reply,
                    id: e.callId,
                    resolution: o.Fulfilled,
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => n);
        class n extends Error {
            constructor(e) {
                super(`You've hit a bug in Penpal. Please file an issue with the following information: ${e}`)
            }
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    a7jQh: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => n);
        let n = e => {
            let t, r = !1;
            return (...s) => (r || (r = !0, t = e(...s)), t)
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "8822a": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "debugLog", () => i);
        var n = e("../core/config/config.js");

        function i(...e) {
            let t = n.SDKConfiguration.fromStorage();
            t?.shieldConfiguration?.debug && console.log(`${(new Date).toISOString()} [SDK]`, ...e)
        }
    }, {
        "../core/config/config.js": "8pPBU",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "8pPBU": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "OpenfortConfiguration", () => l), a.export(r, "SDKConfiguration", () => d), a.export(r, "ShieldConfiguration", () => c);
        var n = e("../../storage/istorage.js"),
            i = e("../../utils/crypto.js");
        let o = null;
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
        class d {
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
                this.shieldConfiguration = t, this.baseConfiguration = e, this.backendUrl = r?.backendUrl || "https://api.openfort.io", this.iframeUrl = r?.iframeUrl || "https://embed.openfort.io", this.iframeUrl = `${this.iframeUrl}/iframe/${this.baseConfiguration.publishableKey}`, t?.debug && (this.iframeUrl = `${this.iframeUrl}?debug=true`), this.shieldUrl = r?.shieldUrl || "https://shield.openfort.io", this.storage = r?.storage, r?.crypto?.digest && (0, i.setCryptoDigestOverride)(r.crypto.digest), this.save()
            }
            static async isStorageAccessible(e) {
                try {
                    let t = n.StorageKeys.TEST,
                        r = "openfort_storage_test";
                    e.save(t, r);
                    let s = await e.get(t);
                    return e.remove(t), s === r
                } catch (e) {
                    return !1
                }
            }
            static fromStorage(e) {
                return e ? this.loadFromStorage(e) : o
            }
            static async loadFromStorage(e) {
                let t = await e.get(n.StorageKeys.CONFIGURATION);
                if (!t) return null;
                try {
                    let r, s = JSON.parse(t),
                        a = new l({
                            publishableKey: s.publishableKey
                        });
                    s.shieldPublishableKey && (r = new c({
                        shieldPublishableKey: s.shieldPublishableKey,
                        shieldEncryptionKey: s.shieldEncryptionKey,
                        shieldDebug: s.shieldDebug
                    }));
                    let n = {
                        backendUrl: s.backendUrl,
                        iframeUrl: s.iframeUrl,
                        shieldUrl: s.shieldUrl,
                        storage: e
                    };
                    return new d({
                        baseConfiguration: a,
                        shieldConfiguration: r,
                        overrides: n
                    })
                } catch {
                    return null
                }
            }
            save() {
                o = this, this.storage && this.storage.save(n.StorageKeys.CONFIGURATION, JSON.stringify({
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "Authentication", () => i);
        var n = e("../../storage/istorage.js");
        class i {
            type;
            token;
            player;
            refreshToken;
            thirdPartyProvider;
            thirdPartyTokenType;
            constructor(e, t, r, s, a, n) {
                this.type = e, this.token = t, this.player = r, this.refreshToken = s, this.thirdPartyProvider = a, this.thirdPartyTokenType = n
            }
            get provider() {
                return this.thirdPartyProvider
            }
            get tokenType() {
                return this.thirdPartyTokenType
            }
            save(e) {
                e.save(n.StorageKeys.AUTHENTICATION, JSON.stringify({
                    type: this.type,
                    token: this.token,
                    player: this.player,
                    refreshToken: this.refreshToken,
                    thirdPartyProvider: this.thirdPartyProvider,
                    thirdPartyTokenType: this.thirdPartyTokenType
                }))
            }
            static async fromStorage(e) {
                let t = await e.get(n.StorageKeys.AUTHENTICATION);
                if (!t) return null;
                try {
                    let e = JSON.parse(t);
                    return new i(e.type, e.token, e.player, e.refreshToken, e.thirdPartyProvider, e.thirdPartyTokenType)
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "ReactNativeMessenger", () => l);
        var n = e("../../utils/debug.js"),
            i = e("./browserMessenger/PenpalError.js"),
            o = a.interopDefault(i);
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
                if (this.messagePoster = e, !e || "function" != typeof e.postMessage) throw new(0, o.default)("CONNECTION_DESTROYED", "Invalid message poster provided");
                (0, n.debugLog)("ReactNativeMessenger created")
            }
            initialize(e) {
                if (this.isInitialized) return void(0, n.debugLog)("ReactNativeMessenger already initialized");
                if (this.hasBeenUsed) throw new(0, o.default)("CONNECTION_DESTROYED", "A messenger can only be used for a single connection");
                this.validateMessage = e?.validateReceivedMessage, this.isInitialized = !0, this.hasBeenUsed = !0, (0, n.debugLog)(`ReactNativeMessenger initialized, processing ${this.messageBuffer.length} buffered messages`);
                let t = [...this.messageBuffer];
                this.messageBuffer = [], t.forEach(e => {
                    this.processMessage(e)
                })
            }
            sendMessage(e, t) {
                if (!this.isInitialized) throw new(0, o.default)("CONNECTION_DESTROYED", "ReactNativeMessenger not initialized");
                t && t.length > 0 && (0, n.debugLog)("React Native: Ignoring transferables (not supported)"), (0, n.debugLog)("ReactNativeMessenger sending message:", e);
                try {
                    let t = e;
                    "penpal" === e?.namespace && (t = this.convertToDeprecatedFormat(e), (0, n.debugLog)("React Native: Converted message:", t));
                    let r = JSON.stringify(t);
                    this.messagePoster.postMessage(r)
                } catch (e) {
                    throw new(0, o.default)("TRANSMISSION_FAILED", `Failed to send message through React Native WebView: ${e instanceof Error?e.message:String(e)}`)
                }
            }
            addMessageHandler(e) {
                this.handlers.add(e), (0, n.debugLog)(`Message handler added, total handlers: ${this.handlers.size}`)
            }
            removeMessageHandler(e) {
                this.handlers.delete(e), (0, n.debugLog)(`Message handler removed, total handlers: ${this.handlers.size}`)
            }
            handleMessage(e) {
                if ((0, n.debugLog)("[HANDSHAKE DEBUG] ReactNativeMessenger.handleMessage called with:", e), !this.isInitialized) {
                    let t = this.messageBuffer.length + 1;
                    return (0, n.debugLog)(`[HANDSHAKE DEBUG] ReactNativeMessenger: Message received but not initialized, buffering message (${t} total)`), void this.messageBuffer.push(e)
                }(0, n.debugLog)("[HANDSHAKE DEBUG] ReactNativeMessenger is initialized, processing message"), this.processMessage(e)
            }
            processMessage(e) {
                (0, n.debugLog)("[HANDSHAKE DEBUG] ReactNativeMessenger processing message:", e);
                let t = this.convertFromDeprecatedFormat(e);
                if ((0, n.debugLog)("[HANDSHAKE DEBUG] Message after conversion:", t), this.validateMessage && !this.validateMessage(t)) return void(0, n.debugLog)("[HANDSHAKE DEBUG] Message validation failed:", t);
                (0, n.debugLog)(`[HANDSHAKE DEBUG] Routing message to ${this.handlers.size} handlers`);
                let r = 0;
                this.handlers.forEach(e => {
                    r++;
                    try {
                        (0, n.debugLog)(`[HANDSHAKE DEBUG] Calling handler ${r}/${this.handlers.size}`), e(t), (0, n.debugLog)(`[HANDSHAKE DEBUG] Handler ${r} completed successfully`)
                    } catch (e) {
                        (0, n.debugLog)(`[HANDSHAKE DEBUG] Error in handler ${r}:`, e)
                    }
                })
            }
            convertToDeprecatedFormat(e) {
                if ("penpal" !== e?.namespace) return e;
                switch (e.type) {
                    case "SYN":
                        return (0, n.debugLog)("React Native: Converting SYN to deprecated format to avoid MessagePorts", {
                            originalMessage: e
                        }), {
                            penpal: "syn",
                            participantId: e.participantId
                        };
                    case "ACK1":
                        return (0, n.debugLog)("React Native: Converting ACK1 to deprecated format", {
                            originalMessage: e
                        }), {
                            penpal: "synAck",
                            methodNames: e.methodPaths || []
                        };
                    case "ACK2":
                        return (0, n.debugLog)("React Native: Converting ACK2 to deprecated format", {
                            originalMessage: e
                        }), {
                            penpal: "ack"
                        };
                    case "REPLY": {
                        (0, n.debugLog)("React Native: Converting REPLY to deprecated format", {
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
                        return (0, n.debugLog)("React Native: Converting CALL to deprecated format", {
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
                        (0, n.debugLog)("[HANDSHAKE DEBUG] React Native: Converting deprecated SYN to modern format", {
                            originalMessage: e
                        });
                        let t = {
                            namespace: "penpal",
                            type: "SYN",
                            participantId: e.participantId
                        };
                        return (0, n.debugLog)("[HANDSHAKE DEBUG] Converted SYN:", t), t
                    }
                    case "synAck": {
                        (0, n.debugLog)("[HANDSHAKE DEBUG] React Native: Converting deprecated synAck to modern ACK1 format", {
                            originalMessage: e
                        });
                        let t = {
                            namespace: "penpal",
                            type: "ACK1",
                            methodPaths: e.methodNames?.map(e => e.split(".")) || [],
                            channel: void 0
                        };
                        return (0, n.debugLog)("[HANDSHAKE DEBUG] Converted ACK1:", t), t
                    }
                    case "ack": {
                        (0, n.debugLog)("[HANDSHAKE DEBUG] React Native: Converting deprecated ack to modern ACK2 format", {
                            originalMessage: e
                        });
                        let t = {
                            namespace: "penpal",
                            type: "ACK2",
                            channel: void 0
                        };
                        return (0, n.debugLog)("[HANDSHAKE DEBUG] Converted ACK2:", t), t
                    }
                    case "reply": {
                        (0, n.debugLog)("React Native: Converting deprecated reply to modern REPLY format", {
                            originalMessage: e
                        });
                        let t = this.getStringId(e.id);
                        t || (0, n.debugLog)(`Warning: No string ID mapping found for numeric ID ${e.id}, using as-is`);
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
                        (0, n.debugLog)("React Native: Converting deprecated call to modern CALL format", {
                            originalMessage: e
                        });
                        let t = this.getStringId(e.id);
                        return t || (0, n.debugLog)(`Warning: No string ID mapping found for numeric ID ${e.id}, using as-is`), {
                            namespace: "penpal",
                            type: "CALL",
                            id: t || String(e.id),
                            methodPath: e.methodName.split("."),
                            args: e.args
                        }
                    }
                    default:
                        return (0, n.debugLog)("React Native: Unknown deprecated penpal message type:", e.penpal), e
                }
                return e
            }
            setupMessagePort(e) {
                (0, n.debugLog)("React Native: setupMessagePort called but ignored (MessagePort not supported)")
            }
            destroy() {
                this.isInitialized && (this.handlers.clear(), this.messageBuffer = [], this.stringToNumericId.clear(), this.numericToStringId.clear(), this.nextNumericId = 1, this.isInitialized = !1, this.hasBeenUsed = !1, (0, n.debugLog)("ReactNativeMessenger destroyed and ready for reuse"))
            }
            reset() {
                (0, n.debugLog)("ReactNativeMessenger reset for reuse"), this.handlers.clear(), this.messageBuffer = [], this.isInitialized = !1, this.hasBeenUsed = !1, this.nextNumericId = 1, this.stringToNumericId.clear(), this.numericToStringId.clear()
            }
            getNumericId(e) {
                let t = this.stringToNumericId.get(e);
                return t || (t = this.nextNumericId++, this.stringToNumericId.set(e, t), this.numericToStringId.set(t, e), (0, n.debugLog)(`ID mapping created: "${e}" -> ${t}`)), t
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "InternalSentry", () => l), a.export(r, "sentry", () => c);
        var n = e("axios"),
            i = e("../../version.js");
        let o = "https://64a03e4967fb4dad3ecb914918c777b6@o4504593015242752.ingest.us.sentry.io/4509292415287296";
        class l {
            static sentryInstance;
            static queuedCalls = [];
            static baseTags;
            static set sentry(e) {
                let t = e.getDsn();
                if (!t) throw Error("Sentry DSN is not set");
                if (t.projectId !== o.split("https://")[1].split("/")[1] || t.host !== o.split("@")[1].split("/")[0] || t.publicKey !== o.split("@")[0].split("https://")[1]) throw Error("Sentry DSN is not valid");
                e.captureAxiosError = (t, r, s, a) => {
                    r instanceof n.AxiosError ? (r.name = t, e.captureException(r, {
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
                    })) : e.captureException(r, s, a)
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
                    dsn: o,
                    integrations: [],
                    stackParser: s.defaultStackParser,
                    transport: s.makeFetchTransport
                }), this.baseTags = {
                    projectId: r?.baseConfiguration.publishableKey,
                    sdk: i.PACKAGE,
                    sdkVersion: i.VERSION
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "PACKAGE", () => i), a.export(r, "VERSION", () => n);
        let n = "0.9.7",
            i = "@openfort/openfort-js"
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
                var a = document.createElement("script");
                a.async = !0, a.type = "text/javascript", a.src = e, a.onerror = function(t) {
                    var s = TypeError("Failed to fetch dynamically imported module: ".concat(e, ". Error: ").concat(t.message));
                    a.onerror = a.onload = null, a.remove(), r(s)
                }, a.onload = function() {
                    a.onerror = a.onload = null, t()
                }, document.getElementsByTagName("head")[0].appendChild(a)
            })
        })
    }, {
        ca2a84f7fa4a3bb0: "cpF2B"
    }],
    cpF2B: [function(e, t, r, s) {
        "use strict";
        var a = {},
            n = {},
            i = {};
        t.exports = function(e, t) {
            return function(r) {
                var s = function(e) {
                    switch (e) {
                        case "preload":
                            return n;
                        case "prefetch":
                            return i;
                        default:
                            return a
                    }
                }(t);
                return s[r] ? s[r] : s[r] = e.apply(null, arguments).catch(function(e) {
                    throw delete s[r], e
                })
            }
        }
    }, {}],
    "26nPt": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "Openfort", () => E);
        var n = e("../../../packages/internal/openapi-clients/dist/index.js"),
            i = e("./errors/sentry.js"),
            o = e("../storage/lazyStorage.js"),
            l = e("./errors/openfortError.js"),
            c = e("./config/config.js"),
            d = e("../auth/authManager.js"),
            u = e("../api/auth.js"),
            p = e("../api/embeddedWallet.js"),
            f = e("../api/user.js"),
            h = e("../api/proxy.js"),
            y = e("./openfortInternal.js"),
            m = e("../utils/typedEventEmitter.js"),
            g = a.interopDefault(m);
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
                    this.iAuthManager = new(0, d.AuthManager)(this.storage), this.openfortInternal = new(0, y.OpenfortInternal)(this.storage, this.authManager, this.eventEmitter), this.authInstance = new(0, u.AuthApi)(this.storage, this.authManager, this.validateAndRefreshToken.bind(this), this.ensureInitialized.bind(this), this.eventEmitter), this.embeddedWalletInstance = new(0, p.EmbeddedWalletApi)(this.storage, this.validateAndRefreshToken.bind(this), this.ensureInitialized.bind(this), this.eventEmitter), this.userInstance = new(0, f.UserApi)(this.storage, this.authManager, this.validateAndRefreshToken.bind(this)), this.proxyInstance = new(0, h.ProxyApi)(this.storage, this.backendApiClients, this.validateAndRefreshToken.bind(this), this.ensureInitialized.bind(this), async () => {
                        if (!this.embeddedWalletInstance) throw new(0, l.OpenfortError)("Embedded wallet not initialized", l.OpenfortErrorType.MISSING_SIGNER_ERROR);
                        let e = this.embeddedWalletInstance;
                        return t => e.signMessage(t, {
                            hashMessage: !0,
                            arrayifyMessage: !0
                        })
                    })
                } catch (e) {
                    throw new(0, l.OpenfortError)("Openfort SDK synchronous initialization failed", l.OpenfortErrorType.INVALID_CONFIGURATION)
                }
            }
            constructor(e) {
                this.configuration = new(0, c.SDKConfiguration)(e), this.storage = new(0, o.LazyStorage)(this.configuration.storage), this.eventEmitter = new(0, g.default), i.InternalSentry.init({
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
                return new(0, n.BackendApiClients)({
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "BackendApiClients", () => _), a.export(r, "createConfig", () => O);
        var n = e("axios"),
            i = a.interopDefault(n),
            o = e("axios-retry"),
            l = a.interopDefault(o);
        let c = "https://api.openfort.xyz".replace(/\/+$/, "");
        class d {
            basePath;
            axios;
            configuration;
            constructor(e, t = c, r = i.default) {
                this.basePath = t, this.axios = r, e && (this.configuration = e, this.basePath = e.basePath || this.basePath)
            }
        }
        class u extends Error {
            field;
            constructor(e, t) {
                super(t), this.field = e, this.name = "RequiredError"
            }
        }
        let p = "https://example.com",
            f = function(e, t, r) {
                if (null == r) throw new u(t, `Required parameter ${t} was null or undefined when calling ${e}.`)
            },
            h = async function(e, t) {
                t && t.accessToken && (e.Authorization = "Bearer " + ("function" == typeof t.accessToken ? await t.accessToken() : await t.accessToken))
            }, y = function(e, ...t) {
                let r = new URLSearchParams(e.search);
                (function e(t, r, s = "") {
                    null != r && ("object" == typeof r ? Array.isArray(r) ? r.forEach(r => e(t, r, s)) : Object.keys(r).forEach(a => e(t, r[a], `${s}${""!==s?".":""}${a}`)) : t.has(s) ? t.append(s, r) : t.set(s, r))
                })(r, t), e.search = r.toString()
            }, m = function(e, t, r) {
                let s = "string" != typeof e;
                return (s && r && r.isJsonMime ? r.isJsonMime(t.headers["Content-Type"]) : s) ? JSON.stringify(void 0 !== e ? e : {}) : e || ""
            }, g = function(e) {
                return e.pathname + e.search + e.hash
            }, E = function(e, t, r, s) {
                return (a = t, n = r) => {
                    let i = {
                        ...e.options,
                        url: (s?.basePath || a.defaults.baseURL || n) + e.url
                    };
                    return a.request(i)
                }
            }, w = function(e) {
                let t = {
                    cancelTransferOwnership: async (t, r, s = {}) => {
                        let a;
                        f("cancelTransferOwnership", "id", t), f("cancelTransferOwnership", "cancelTransferOwnershipRequest", r);
                        let n = new URL("/v1/accounts/{id}/cancel_transfer_ownership".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (a = e.baseOptions);
                        let i = {
                                method: "POST",
                                ...a,
                                ...s
                            },
                            o = {};
                        await h(o, e), o["Content-Type"] = "application/json", y(n, {});
                        let l = a && a.headers ? a.headers : {};
                        return i.headers = {
                            ...o,
                            ...l,
                            ...s.headers
                        }, i.data = m(r, i, e), {
                            url: g(n),
                            options: i
                        }
                    },
                    completeRecovery: async (t, r, s = {}) => {
                        let a;
                        f("completeRecovery", "id", t), f("completeRecovery", "completeRecoveryRequest", r);
                        let n = new URL("/v1/accounts/{id}/complete_recovery".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (a = e.baseOptions);
                        let i = {
                                method: "POST",
                                ...a,
                                ...s
                            },
                            o = {};
                        await h(o, e), o["Content-Type"] = "application/json", y(n, {});
                        let l = a && a.headers ? a.headers : {};
                        return i.headers = {
                            ...o,
                            ...l,
                            ...s.headers
                        }, i.data = m(r, i, e), {
                            url: g(n),
                            options: i
                        }
                    },
                    createAccount: async (t, r = {}) => {
                        let s;
                        f("createAccount", "createAccountRequest", t);
                        let a = new URL("/v1/accounts", p);
                        e && (s = e.baseOptions);
                        let n = {
                                method: "POST",
                                ...s,
                                ...r
                            },
                            i = {};
                        await h(i, e), i["Content-Type"] = "application/json", y(a, {});
                        let o = s && s.headers ? s.headers : {};
                        return n.headers = {
                            ...i,
                            ...o,
                            ...r.headers
                        }, n.data = m(t, n, e), {
                            url: g(a),
                            options: n
                        }
                    },
                    deployAccount: async (t, r, s = {}) => {
                        let a;
                        f("deployAccount", "id", t), f("deployAccount", "deployRequest", r);
                        let n = new URL("/v1/accounts/{id}/deploy".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (a = e.baseOptions);
                        let i = {
                                method: "POST",
                                ...a,
                                ...s
                            },
                            o = {};
                        await h(o, e), o["Content-Type"] = "application/json", y(n, {});
                        let l = a && a.headers ? a.headers : {};
                        return i.headers = {
                            ...o,
                            ...l,
                            ...s.headers
                        }, i.data = m(r, i, e), {
                            url: g(n),
                            options: i
                        }
                    },
                    disableAccount: async (t, r = {}) => {
                        let s;
                        f("disableAccount", "id", t);
                        let a = new URL("/v1/accounts/{id}/disable".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (s = e.baseOptions);
                        let n = {
                                method: "POST",
                                ...s,
                                ...r
                            },
                            i = {};
                        await h(i, e), y(a, {});
                        let o = s && s.headers ? s.headers : {};
                        return n.headers = {
                            ...i,
                            ...o,
                            ...r.headers
                        }, {
                            url: g(a),
                            options: n
                        }
                    },
                    getAccount: async (t, r, s = {}) => {
                        let a;
                        f("getAccount", "id", t);
                        let n = new URL("/v1/accounts/{id}".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (a = e.baseOptions);
                        let i = {
                                method: "GET",
                                ...a,
                                ...s
                            },
                            o = {},
                            l = {};
                        await h(o, e), r && (l.expand = r), y(n, l);
                        let c = a && a.headers ? a.headers : {};
                        return i.headers = {
                            ...o,
                            ...c,
                            ...s.headers
                        }, {
                            url: g(n),
                            options: i
                        }
                    },
                    getAccountV2: async (t, r = {}) => {
                        let s;
                        f("getAccountV2", "id", t);
                        let a = new URL("/v2/accounts/{id}".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (s = e.baseOptions);
                        let n = {
                                method: "GET",
                                ...s,
                                ...r
                            },
                            i = {};
                        await h(i, e), y(a, {});
                        let o = s && s.headers ? s.headers : {};
                        return n.headers = {
                            ...i,
                            ...o,
                            ...r.headers
                        }, {
                            url: g(a),
                            options: n
                        }
                    },
                    getAccounts: async (t, r, s, a, n, i, o, l = {}) => {
                        let c, d = new URL("/v1/accounts", p);
                        e && (c = e.baseOptions);
                        let u = {
                                method: "GET",
                                ...c,
                                ...l
                            },
                            f = {},
                            m = {};
                        await h(f, e), void 0 !== t && (m.limit = t), void 0 !== r && (m.skip = r), void 0 !== s && (m.order = s), void 0 !== a && (m.chainId = a), void 0 !== n && (m.player = n), void 0 !== i && (m.address = i), o && (m.expand = o), y(d, m);
                        let E = c && c.headers ? c.headers : {};
                        return u.headers = {
                            ...f,
                            ...E,
                            ...l.headers
                        }, {
                            url: g(d),
                            options: u
                        }
                    },
                    getAccountsV2: async (t, r, s, a, n, i, o, l, c = {}) => {
                        let d, u = new URL("/v2/accounts", p);
                        e && (d = e.baseOptions);
                        let f = {
                                method: "GET",
                                ...d,
                                ...c
                            },
                            m = {},
                            E = {};
                        await h(m, e), void 0 !== t && (E.limit = t), void 0 !== r && (E.skip = r), void 0 !== s && (E.order = s), void 0 !== a && (E.chainId = a), void 0 !== n && (E.user = n), void 0 !== i && (E.chainType = i), void 0 !== o && (E.accountType = o), void 0 !== l && (E.address = l), y(u, E);
                        let w = d && d.headers ? d.headers : {};
                        return f.headers = {
                            ...m,
                            ...w,
                            ...c.headers
                        }, {
                            url: g(u),
                            options: f
                        }
                    },
                    getSignerIdByAddress: async (t, r = {}) => {
                        let s;
                        f("getSignerIdByAddress", "address", t);
                        let a = new URL("/v2/accounts/signer", p);
                        e && (s = e.baseOptions);
                        let n = {
                                method: "GET",
                                ...s,
                                ...r
                            },
                            i = {},
                            o = {};
                        await h(i, e), void 0 !== t && (o.address = t), y(a, o);
                        let l = s && s.headers ? s.headers : {};
                        return n.headers = {
                            ...i,
                            ...l,
                            ...r.headers
                        }, {
                            url: g(a),
                            options: n
                        }
                    },
                    requestTransferOwnership: async (t, r, s = {}) => {
                        let a;
                        f("requestTransferOwnership", "id", t), f("requestTransferOwnership", "transferOwnershipRequest", r);
                        let n = new URL("/v1/accounts/{id}/request_transfer_ownership".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (a = e.baseOptions);
                        let i = {
                                method: "POST",
                                ...a,
                                ...s
                            },
                            o = {};
                        await h(o, e), o["Content-Type"] = "application/json", y(n, {});
                        let l = a && a.headers ? a.headers : {};
                        return i.headers = {
                            ...o,
                            ...l,
                            ...s.headers
                        }, i.data = m(r, i, e), {
                            url: g(n),
                            options: i
                        }
                    },
                    signPayload: async (t, r, s = {}) => {
                        let a;
                        f("signPayload", "id", t), f("signPayload", "signPayloadRequest", r);
                        let n = new URL("/v1/accounts/{id}/sign_payload".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (a = e.baseOptions);
                        let i = {
                                method: "POST",
                                ...a,
                                ...s
                            },
                            o = {};
                        await h(o, e), o["Content-Type"] = "application/json", y(n, {});
                        let l = a && a.headers ? a.headers : {};
                        return i.headers = {
                            ...o,
                            ...l,
                            ...s.headers
                        }, i.data = m(r, i, e), {
                            url: g(n),
                            options: i
                        }
                    },
                    startRecovery: async (t, r, s = {}) => {
                        let a;
                        f("startRecovery", "id", t), f("startRecovery", "startRecoveryRequest", r);
                        let n = new URL("/v1/accounts/{id}/start_recovery".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (a = e.baseOptions);
                        let i = {
                                method: "POST",
                                ...a,
                                ...s
                            },
                            o = {};
                        await h(o, e), o["Content-Type"] = "application/json", y(n, {});
                        let l = a && a.headers ? a.headers : {};
                        return i.headers = {
                            ...o,
                            ...l,
                            ...s.headers
                        }, i.data = m(r, i, e), {
                            url: g(n),
                            options: i
                        }
                    },
                    switchChainV2: async (t, r = {}) => {
                        let s;
                        f("switchChainV2", "switchChainQueriesV2", t);
                        let a = new URL("/v2/accounts/switch-chain", p);
                        e && (s = e.baseOptions);
                        let n = {
                            method: "POST",
                            ...s,
                            ...r
                        };
                        return y(a, {}), n.headers = {
                            "Content-Type": "application/json",
                            ...s && s.headers ? s.headers : {},
                            ...r.headers
                        }, n.data = m(t, n, e), {
                            url: g(a),
                            options: n
                        }
                    },
                    syncAccount: async (t, r = {}) => {
                        let s;
                        f("syncAccount", "id", t);
                        let a = new URL("/v1/accounts/{id}/sync".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (s = e.baseOptions);
                        let n = {
                                method: "POST",
                                ...s,
                                ...r
                            },
                            i = {};
                        await h(i, e), y(a, {});
                        let o = s && s.headers ? s.headers : {};
                        return n.headers = {
                            ...i,
                            ...o,
                            ...r.headers
                        }, {
                            url: g(a),
                            options: n
                        }
                    }
                };
                return {
                    cancelTransferOwnership: async (r, s, a) => E(await t.cancelTransferOwnership(r, s, a), i.default, c, e),
                    completeRecovery: async (r, s, a) => E(await t.completeRecovery(r, s, a), i.default, c, e),
                    createAccount: async (r, s) => E(await t.createAccount(r, s), i.default, c, e),
                    deployAccount: async (r, s, a) => E(await t.deployAccount(r, s, a), i.default, c, e),
                    disableAccount: async (r, s) => E(await t.disableAccount(r, s), i.default, c, e),
                    getAccount: async (r, s, a) => E(await t.getAccount(r, s, a), i.default, c, e),
                    getAccountV2: async (r, s) => E(await t.getAccountV2(r, s), i.default, c, e),
                    getAccounts: async (r, s, a, n, o, l, d, u) => E(await t.getAccounts(r, s, a, n, o, l, d, u), i.default, c, e),
                    getAccountsV2: async (r, s, a, n, o, l, d, u, p) => E(await t.getAccountsV2(r, s, a, n, o, l, d, u, p), i.default, c, e),
                    getSignerIdByAddress: async (r, s) => E(await t.getSignerIdByAddress(r, s), i.default, c, e),
                    requestTransferOwnership: async (r, s, a) => E(await t.requestTransferOwnership(r, s, a), i.default, c, e),
                    signPayload: async (r, s, a) => E(await t.signPayload(r, s, a), i.default, c, e),
                    startRecovery: async (r, s, a) => E(await t.startRecovery(r, s, a), i.default, c, e),
                    switchChainV2: async (r, s) => E(await t.switchChainV2(r, s), i.default, c, e),
                    syncAccount: async (r, s) => E(await t.syncAccount(r, s), i.default, c, e)
                }
            };
        class j extends d {
            cancelTransferOwnership(e, t) {
                return w(this.configuration).cancelTransferOwnership(e.id, e.cancelTransferOwnershipRequest, t).then(e => e(this.axios, this.basePath))
            }
            completeRecovery(e, t) {
                return w(this.configuration).completeRecovery(e.id, e.completeRecoveryRequest, t).then(e => e(this.axios, this.basePath))
            }
            createAccount(e, t) {
                return w(this.configuration).createAccount(e.createAccountRequest, t).then(e => e(this.axios, this.basePath))
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
                return w(this.configuration).getAccountV2(e.id, t).then(e => e(this.axios, this.basePath))
            }
            getAccounts(e = {}, t) {
                return w(this.configuration).getAccounts(e.limit, e.skip, e.order, e.chainId, e.player, e.address, e.expand, t).then(e => e(this.axios, this.basePath))
            }
            getAccountsV2(e = {}, t) {
                return w(this.configuration).getAccountsV2(e.limit, e.skip, e.order, e.chainId, e.user, e.chainType, e.accountType, e.address, t).then(e => e(this.axios, this.basePath))
            }
            getSignerIdByAddress(e, t) {
                return w(this.configuration).getSignerIdByAddress(e.address, t).then(e => e(this.axios, this.basePath))
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
            switchChainV2(e, t) {
                return w(this.configuration).switchChainV2(e.switchChainQueriesV2, t).then(e => e(this.axios, this.basePath))
            }
            syncAccount(e, t) {
                return w(this.configuration).syncAccount(e.id, t).then(e => e(this.axios, this.basePath))
            }
        }
        let b = function(e) {
            let t = {
                authenticateSIWE: async (t, r = {}) => {
                    let s;
                    f("authenticateSIWE", "sIWEAuthenticateRequest", t);
                    let a = new URL("/iam/v1/siwe/authenticate", p);
                    e && (s = e.baseOptions);
                    let n = {
                            method: "POST",
                            ...s,
                            ...r
                        },
                        i = {};
                    await h(i, e), i["Content-Type"] = "application/json", y(a, {});
                    let o = s && s.headers ? s.headers : {};
                    return n.headers = {
                        ...i,
                        ...o,
                        ...r.headers
                    }, n.data = m(t, n, e), {
                        url: g(a),
                        options: n
                    }
                },
                getJwks: async (t, r = {}) => {
                    let s;
                    f("getJwks", "publishableKey", t);
                    let a = new URL("/iam/v1/{publishable_key}/jwks.json".replace("{publishable_key}", encodeURIComponent(String(t))), p);
                    e && (s = e.baseOptions);
                    let n = {
                        method: "GET",
                        ...s,
                        ...r
                    };
                    return y(a, {}), n.headers = {
                        ...s && s.headers ? s.headers : {},
                        ...r.headers
                    }, {
                        url: g(a),
                        options: n
                    }
                },
                initOAuth: async (t, r, s = {}) => {
                    let a;
                    f("initOAuth", "oAuthInitRequest", t);
                    let n = new URL("/iam/v1/oauth/init", p);
                    e && (a = e.baseOptions);
                    let i = {
                            method: "POST",
                            ...a,
                            ...s
                        },
                        o = {};
                    await h(o, e), null != r && (o["x-game"] = String(r)), o["Content-Type"] = "application/json", y(n, {});
                    let l = a && a.headers ? a.headers : {};
                    return i.headers = {
                        ...o,
                        ...l,
                        ...s.headers
                    }, i.data = m(t, i, e), {
                        url: g(n),
                        options: i
                    }
                },
                initSIWE: async (t, r, s = {}) => {
                    let a;
                    f("initSIWE", "sIWERequest", t);
                    let n = new URL("/iam/v1/siwe/init", p);
                    e && (a = e.baseOptions);
                    let i = {
                            method: "POST",
                            ...a,
                            ...s
                        },
                        o = {};
                    await h(o, e), null != r && (o["x-game"] = String(r)), o["Content-Type"] = "application/json", y(n, {});
                    let l = a && a.headers ? a.headers : {};
                    return i.headers = {
                        ...o,
                        ...l,
                        ...s.headers
                    }, i.data = m(t, i, e), {
                        url: g(n),
                        options: i
                    }
                },
                linkEmail: async (t, r, s = {}) => {
                    let a;
                    f("linkEmail", "loginRequest", t);
                    let n = new URL("/iam/v1/password/link", p);
                    e && (a = e.baseOptions);
                    let i = {
                            method: "POST",
                            ...a,
                            ...s
                        },
                        o = {};
                    null != r && (o["x-game"] = String(r)), o["Content-Type"] = "application/json", y(n, {});
                    let l = a && a.headers ? a.headers : {};
                    return i.headers = {
                        ...o,
                        ...l,
                        ...s.headers
                    }, i.data = m(t, i, e), {
                        url: g(n),
                        options: i
                    }
                },
                linkOAuth: async (t, r, s = {}) => {
                    let a;
                    f("linkOAuth", "oAuthInitRequest", t);
                    let n = new URL("/iam/v1/oauth/init_link", p);
                    e && (a = e.baseOptions);
                    let i = {
                            method: "POST",
                            ...a,
                            ...s
                        },
                        o = {};
                    null != r && (o["x-game"] = String(r)), o["Content-Type"] = "application/json", y(n, {});
                    let l = a && a.headers ? a.headers : {};
                    return i.headers = {
                        ...o,
                        ...l,
                        ...s.headers
                    }, i.data = m(t, i, e), {
                        url: g(n),
                        options: i
                    }
                },
                linkSIWE: async (t, r = {}) => {
                    let s;
                    f("linkSIWE", "sIWEAuthenticateRequest", t);
                    let a = new URL("/iam/v1/siwe/link", p);
                    e && (s = e.baseOptions);
                    let n = {
                        method: "POST",
                        ...s,
                        ...r
                    };
                    return y(a, {}), n.headers = {
                        "Content-Type": "application/json",
                        ...s && s.headers ? s.headers : {},
                        ...r.headers
                    }, n.data = m(t, n, e), {
                        url: g(a),
                        options: n
                    }
                },
                linkThirdParty: async (t, r, s = {}) => {
                    let a;
                    f("linkThirdParty", "thirdPartyLinkRequest", t);
                    let n = new URL("/iam/v1/oauth/link", p);
                    e && (a = e.baseOptions);
                    let i = {
                            method: "POST",
                            ...a,
                            ...s
                        },
                        o = {};
                    null != r && (o["x-game"] = String(r)), o["Content-Type"] = "application/json", y(n, {});
                    let l = a && a.headers ? a.headers : {};
                    return i.headers = {
                        ...o,
                        ...l,
                        ...s.headers
                    }, i.data = m(t, i, e), {
                        url: g(n),
                        options: i
                    }
                },
                loginEmailPassword: async (t, r, s = {}) => {
                    let a;
                    f("loginEmailPassword", "loginRequest", t);
                    let n = new URL("/iam/v1/password/login", p);
                    e && (a = e.baseOptions);
                    let i = {
                            method: "POST",
                            ...a,
                            ...s
                        },
                        o = {};
                    await h(o, e), null != r && (o["x-game"] = String(r)), o["Content-Type"] = "application/json", y(n, {});
                    let l = a && a.headers ? a.headers : {};
                    return i.headers = {
                        ...o,
                        ...l,
                        ...s.headers
                    }, i.data = m(t, i, e), {
                        url: g(n),
                        options: i
                    }
                },
                loginOIDC: async (t, r, s = {}) => {
                    let a;
                    f("loginOIDC", "loginOIDCRequest", t);
                    let n = new URL("/iam/v1/oidc/login", p);
                    e && (a = e.baseOptions);
                    let i = {
                            method: "POST",
                            ...a,
                            ...s
                        },
                        o = {};
                    await h(o, e), null != r && (o["x-game"] = String(r)), o["Content-Type"] = "application/json", y(n, {});
                    let l = a && a.headers ? a.headers : {};
                    return i.headers = {
                        ...o,
                        ...l,
                        ...s.headers
                    }, i.data = m(t, i, e), {
                        url: g(n),
                        options: i
                    }
                },
                loginWithIdToken: async (t, r = {}) => {
                    let s;
                    f("loginWithIdToken", "loginWithIdTokenRequest", t);
                    let a = new URL("/iam/v1/oauth/login_id_token", p);
                    e && (s = e.baseOptions);
                    let n = {
                            method: "POST",
                            ...s,
                            ...r
                        },
                        i = {};
                    await h(i, e), i["Content-Type"] = "application/json", y(a, {});
                    let o = s && s.headers ? s.headers : {};
                    return n.headers = {
                        ...i,
                        ...o,
                        ...r.headers
                    }, n.data = m(t, n, e), {
                        url: g(a),
                        options: n
                    }
                },
                logout: async (t, r = {}) => {
                    let s;
                    f("logout", "logoutRequest", t);
                    let a = new URL("/iam/v1/sessions/logout", p);
                    e && (s = e.baseOptions);
                    let n = {
                        method: "POST",
                        ...s,
                        ...r
                    };
                    return y(a, {}), n.headers = {
                        "Content-Type": "application/json",
                        ...s && s.headers ? s.headers : {},
                        ...r.headers
                    }, n.data = m(t, n, e), {
                        url: g(a),
                        options: n
                    }
                },
                me: async (t = {}) => {
                    let r, s = new URL("/iam/v1/me", p);
                    e && (r = e.baseOptions);
                    let a = {
                        method: "GET",
                        ...r,
                        ...t
                    };
                    return y(s, {}), a.headers = {
                        ...r && r.headers ? r.headers : {},
                        ...t.headers
                    }, {
                        url: g(s),
                        options: a
                    }
                },
                poolOAuth: async (t, r = {}) => {
                    let s;
                    f("poolOAuth", "key", t);
                    let a = new URL("/iam/v1/oauth/pool", p);
                    e && (s = e.baseOptions);
                    let n = {
                            method: "POST",
                            ...s,
                            ...r
                        },
                        i = {},
                        o = {};
                    await h(i, e), void 0 !== t && (o.key = t), y(a, o);
                    let l = s && s.headers ? s.headers : {};
                    return n.headers = {
                        ...i,
                        ...l,
                        ...r.headers
                    }, {
                        url: g(a),
                        options: n
                    }
                },
                refresh: async (t, r = {}) => {
                    let s;
                    f("refresh", "refreshTokenRequest", t);
                    let a = new URL("/iam/v1/sessions", p);
                    e && (s = e.baseOptions);
                    let n = {
                            method: "POST",
                            ...s,
                            ...r
                        },
                        i = {};
                    await h(i, e), i["Content-Type"] = "application/json", y(a, {});
                    let o = s && s.headers ? s.headers : {};
                    return n.headers = {
                        ...i,
                        ...o,
                        ...r.headers
                    }, n.data = m(t, n, e), {
                        url: g(a),
                        options: n
                    }
                },
                registerGuest: async (t, r = {}) => {
                    let s, a = new URL("/iam/v1/guest", p);
                    e && (s = e.baseOptions);
                    let n = {
                            method: "POST",
                            ...s,
                            ...r
                        },
                        i = {};
                    await h(i, e), null != t && (i["x-game"] = String(t)), y(a, {});
                    let o = s && s.headers ? s.headers : {};
                    return n.headers = {
                        ...i,
                        ...o,
                        ...r.headers
                    }, {
                        url: g(a),
                        options: n
                    }
                },
                requestEmailVerification: async (t, r = {}) => {
                    let s;
                    f("requestEmailVerification", "requestVerifyEmailRequest", t);
                    let a = new URL("/iam/v1/password/request_email_verification", p);
                    e && (s = e.baseOptions);
                    let n = {
                            method: "POST",
                            ...s,
                            ...r
                        },
                        i = {};
                    await h(i, e), i["Content-Type"] = "application/json", y(a, {});
                    let o = s && s.headers ? s.headers : {};
                    return n.headers = {
                        ...i,
                        ...o,
                        ...r.headers
                    }, n.data = m(t, n, e), {
                        url: g(a),
                        options: n
                    }
                },
                requestResetPassword: async (t, r = {}) => {
                    let s;
                    f("requestResetPassword", "requestResetPasswordRequest", t);
                    let a = new URL("/iam/v1/password/request_reset", p);
                    e && (s = e.baseOptions);
                    let n = {
                            method: "POST",
                            ...s,
                            ...r
                        },
                        i = {};
                    await h(i, e), i["Content-Type"] = "application/json", y(a, {});
                    let o = s && s.headers ? s.headers : {};
                    return n.headers = {
                        ...i,
                        ...o,
                        ...r.headers
                    }, n.data = m(t, n, e), {
                        url: g(a),
                        options: n
                    }
                },
                resetPassword: async (t, r = {}) => {
                    let s;
                    f("resetPassword", "resetPasswordRequest", t);
                    let a = new URL("/iam/v1/password/reset", p);
                    e && (s = e.baseOptions);
                    let n = {
                            method: "POST",
                            ...s,
                            ...r
                        },
                        i = {};
                    await h(i, e), i["Content-Type"] = "application/json", y(a, {});
                    let o = s && s.headers ? s.headers : {};
                    return n.headers = {
                        ...i,
                        ...o,
                        ...r.headers
                    }, n.data = m(t, n, e), {
                        url: g(a),
                        options: n
                    }
                },
                signupEmailPassword: async (t, r, s = {}) => {
                    let a;
                    f("signupEmailPassword", "signupRequest", t);
                    let n = new URL("/iam/v1/password/signup", p);
                    e && (a = e.baseOptions);
                    let i = {
                            method: "POST",
                            ...a,
                            ...s
                        },
                        o = {};
                    await h(o, e), null != r && (o["x-game"] = String(r)), o["Content-Type"] = "application/json", y(n, {});
                    let l = a && a.headers ? a.headers : {};
                    return i.headers = {
                        ...o,
                        ...l,
                        ...s.headers
                    }, i.data = m(t, i, e), {
                        url: g(n),
                        options: i
                    }
                },
                thirdParty: async (t, r, s = {}) => {
                    let a;
                    f("thirdParty", "thirdPartyOAuthRequest", t);
                    let n = new URL("/iam/v1/oauth/third_party", p);
                    e && (a = e.baseOptions);
                    let i = {
                            method: "POST",
                            ...a,
                            ...s
                        },
                        o = {};
                    await h(o, e), null != r && (o["x-game"] = String(r)), o["Content-Type"] = "application/json", y(n, {});
                    let l = a && a.headers ? a.headers : {};
                    return i.headers = {
                        ...o,
                        ...l,
                        ...s.headers
                    }, i.data = m(t, i, e), {
                        url: g(n),
                        options: i
                    }
                },
                unlinkEmail: async (t, r = {}) => {
                    let s;
                    f("unlinkEmail", "unlinkEmailRequest", t);
                    let a = new URL("/iam/v1/password/unlink", p);
                    e && (s = e.baseOptions);
                    let n = {
                        method: "POST",
                        ...s,
                        ...r
                    };
                    return y(a, {}), n.headers = {
                        "Content-Type": "application/json",
                        ...s && s.headers ? s.headers : {},
                        ...r.headers
                    }, n.data = m(t, n, e), {
                        url: g(a),
                        options: n
                    }
                },
                unlinkOAuth: async (t, r = {}) => {
                    let s;
                    f("unlinkOAuth", "unlinkOAuthRequest", t);
                    let a = new URL("/iam/v1/oauth/unlink", p);
                    e && (s = e.baseOptions);
                    let n = {
                        method: "POST",
                        ...s,
                        ...r
                    };
                    return y(a, {}), n.headers = {
                        "Content-Type": "application/json",
                        ...s && s.headers ? s.headers : {},
                        ...r.headers
                    }, n.data = m(t, n, e), {
                        url: g(a),
                        options: n
                    }
                },
                unlinkSIWE: async (t, r = {}) => {
                    let s;
                    f("unlinkSIWE", "sIWERequest", t);
                    let a = new URL("/iam/v1/siwe/unlink", p);
                    e && (s = e.baseOptions);
                    let n = {
                        method: "POST",
                        ...s,
                        ...r
                    };
                    return y(a, {}), n.headers = {
                        "Content-Type": "application/json",
                        ...s && s.headers ? s.headers : {},
                        ...r.headers
                    }, n.data = m(t, n, e), {
                        url: g(a),
                        options: n
                    }
                },
                verifyEmail: async (t, r = {}) => {
                    let s;
                    f("verifyEmail", "verifyEmailRequest", t);
                    let a = new URL("/iam/v1/password/verify_email", p);
                    e && (s = e.baseOptions);
                    let n = {
                            method: "POST",
                            ...s,
                            ...r
                        },
                        i = {};
                    await h(i, e), i["Content-Type"] = "application/json", y(a, {});
                    let o = s && s.headers ? s.headers : {};
                    return n.headers = {
                        ...i,
                        ...o,
                        ...r.headers
                    }, n.data = m(t, n, e), {
                        url: g(a),
                        options: n
                    }
                },
                verifyOAuthToken: async (t, r = {}) => {
                    let s;
                    f("verifyOAuthToken", "authenticateOAuthRequest", t);
                    let a = new URL("/iam/v1/oauth/verify", p);
                    e && (s = e.baseOptions);
                    let n = {
                            method: "POST",
                            ...s,
                            ...r
                        },
                        i = {};
                    await h(i, e), i["Content-Type"] = "application/json", y(a, {});
                    let o = s && s.headers ? s.headers : {};
                    return n.headers = {
                        ...i,
                        ...o,
                        ...r.headers
                    }, n.data = m(t, n, e), {
                        url: g(a),
                        options: n
                    }
                }
            };
            return {
                authenticateSIWE: async (r, s) => E(await t.authenticateSIWE(r, s), i.default, c, e),
                getJwks: async (r, s) => E(await t.getJwks(r, s), i.default, c, e),
                initOAuth: async (r, s, a) => E(await t.initOAuth(r, s, a), i.default, c, e),
                initSIWE: async (r, s, a) => E(await t.initSIWE(r, s, a), i.default, c, e),
                linkEmail: async (r, s, a) => E(await t.linkEmail(r, s, a), i.default, c, e),
                linkOAuth: async (r, s, a) => E(await t.linkOAuth(r, s, a), i.default, c, e),
                linkSIWE: async (r, s) => E(await t.linkSIWE(r, s), i.default, c, e),
                linkThirdParty: async (r, s, a) => E(await t.linkThirdParty(r, s, a), i.default, c, e),
                loginEmailPassword: async (r, s, a) => E(await t.loginEmailPassword(r, s, a), i.default, c, e),
                loginOIDC: async (r, s, a) => E(await t.loginOIDC(r, s, a), i.default, c, e),
                loginWithIdToken: async (r, s) => E(await t.loginWithIdToken(r, s), i.default, c, e),
                logout: async (r, s) => E(await t.logout(r, s), i.default, c, e),
                me: async r => E(await t.me(r), i.default, c, e),
                poolOAuth: async (r, s) => E(await t.poolOAuth(r, s), i.default, c, e),
                refresh: async (r, s) => E(await t.refresh(r, s), i.default, c, e),
                registerGuest: async (r, s) => E(await t.registerGuest(r, s), i.default, c, e),
                requestEmailVerification: async (r, s) => E(await t.requestEmailVerification(r, s), i.default, c, e),
                requestResetPassword: async (r, s) => E(await t.requestResetPassword(r, s), i.default, c, e),
                resetPassword: async (r, s) => E(await t.resetPassword(r, s), i.default, c, e),
                signupEmailPassword: async (r, s, a) => E(await t.signupEmailPassword(r, s, a), i.default, c, e),
                thirdParty: async (r, s, a) => E(await t.thirdParty(r, s, a), i.default, c, e),
                unlinkEmail: async (r, s) => E(await t.unlinkEmail(r, s), i.default, c, e),
                unlinkOAuth: async (r, s) => E(await t.unlinkOAuth(r, s), i.default, c, e),
                unlinkSIWE: async (r, s) => E(await t.unlinkSIWE(r, s), i.default, c, e),
                verifyEmail: async (r, s) => E(await t.verifyEmail(r, s), i.default, c, e),
                verifyOAuthToken: async (r, s) => E(await t.verifyOAuthToken(r, s), i.default, c, e)
            }
        };
        class A extends d {
            authenticateSIWE(e, t) {
                return b(this.configuration).authenticateSIWE(e.sIWEAuthenticateRequest, t).then(e => e(this.axios, this.basePath))
            }
            getJwks(e, t) {
                return b(this.configuration).getJwks(e.publishableKey, t).then(e => e(this.axios, this.basePath))
            }
            initOAuth(e, t) {
                return b(this.configuration).initOAuth(e.oAuthInitRequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            initSIWE(e, t) {
                return b(this.configuration).initSIWE(e.sIWERequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            linkEmail(e, t) {
                return b(this.configuration).linkEmail(e.loginRequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            linkOAuth(e, t) {
                return b(this.configuration).linkOAuth(e.oAuthInitRequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            linkSIWE(e, t) {
                return b(this.configuration).linkSIWE(e.sIWEAuthenticateRequest, t).then(e => e(this.axios, this.basePath))
            }
            linkThirdParty(e, t) {
                return b(this.configuration).linkThirdParty(e.thirdPartyLinkRequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            loginEmailPassword(e, t) {
                return b(this.configuration).loginEmailPassword(e.loginRequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            loginOIDC(e, t) {
                return b(this.configuration).loginOIDC(e.loginOIDCRequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            loginWithIdToken(e, t) {
                return b(this.configuration).loginWithIdToken(e.loginWithIdTokenRequest, t).then(e => e(this.axios, this.basePath))
            }
            logout(e, t) {
                return b(this.configuration).logout(e.logoutRequest, t).then(e => e(this.axios, this.basePath))
            }
            me(e) {
                return b(this.configuration).me(e).then(e => e(this.axios, this.basePath))
            }
            poolOAuth(e, t) {
                return b(this.configuration).poolOAuth(e.key, t).then(e => e(this.axios, this.basePath))
            }
            refresh(e, t) {
                return b(this.configuration).refresh(e.refreshTokenRequest, t).then(e => e(this.axios, this.basePath))
            }
            registerGuest(e = {}, t) {
                return b(this.configuration).registerGuest(e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            requestEmailVerification(e, t) {
                return b(this.configuration).requestEmailVerification(e.requestVerifyEmailRequest, t).then(e => e(this.axios, this.basePath))
            }
            requestResetPassword(e, t) {
                return b(this.configuration).requestResetPassword(e.requestResetPasswordRequest, t).then(e => e(this.axios, this.basePath))
            }
            resetPassword(e, t) {
                return b(this.configuration).resetPassword(e.resetPasswordRequest, t).then(e => e(this.axios, this.basePath))
            }
            signupEmailPassword(e, t) {
                return b(this.configuration).signupEmailPassword(e.signupRequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            thirdParty(e, t) {
                return b(this.configuration).thirdParty(e.thirdPartyOAuthRequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            unlinkEmail(e, t) {
                return b(this.configuration).unlinkEmail(e.unlinkEmailRequest, t).then(e => e(this.axios, this.basePath))
            }
            unlinkOAuth(e, t) {
                return b(this.configuration).unlinkOAuth(e.unlinkOAuthRequest, t).then(e => e(this.axios, this.basePath))
            }
            unlinkSIWE(e, t) {
                return b(this.configuration).unlinkSIWE(e.sIWERequest, t).then(e => e(this.axios, this.basePath))
            }
            verifyEmail(e, t) {
                return b(this.configuration).verifyEmail(e.verifyEmailRequest, t).then(e => e(this.axios, this.basePath))
            }
            verifyOAuthToken(e, t) {
                return b(this.configuration).verifyOAuthToken(e.authenticateOAuthRequest, t).then(e => e(this.axios, this.basePath))
            }
        }
        let v = function(e) {
            let t = {
                createSession: async (t, r, s = {}) => {
                    let a;
                    f("createSession", "createSessionRequest", t);
                    let n = new URL("/v1/sessions", p);
                    e && (a = e.baseOptions);
                    let i = {
                            method: "POST",
                            ...a,
                            ...s
                        },
                        o = {};
                    await h(o, e), null != r && (o["X-Behalf-Of-Project"] = String(r)), o["Content-Type"] = "application/json", y(n, {});
                    let l = a && a.headers ? a.headers : {};
                    return i.headers = {
                        ...o,
                        ...l,
                        ...s.headers
                    }, i.data = m(t, i, e), {
                        url: g(n),
                        options: i
                    }
                },
                getPlayerSessions: async (t, r, s, a, n, i = {}) => {
                    let o;
                    f("getPlayerSessions", "player", t);
                    let l = new URL("/v1/sessions", p);
                    e && (o = e.baseOptions);
                    let c = {
                            method: "GET",
                            ...o,
                            ...i
                        },
                        d = {},
                        u = {};
                    await h(d, e), void 0 !== r && (u.limit = r), void 0 !== s && (u.skip = s), void 0 !== a && (u.order = a), void 0 !== t && (u.player = t), n && (u.expand = n), y(l, u);
                    let m = o && o.headers ? o.headers : {};
                    return c.headers = {
                        ...d,
                        ...m,
                        ...i.headers
                    }, {
                        url: g(l),
                        options: c
                    }
                },
                getSession: async (t, r, s = {}) => {
                    let a;
                    f("getSession", "id", t);
                    let n = new URL("/v1/sessions/{id}".replace("{id}", encodeURIComponent(String(t))), p);
                    e && (a = e.baseOptions);
                    let i = {
                            method: "GET",
                            ...a,
                            ...s
                        },
                        o = {},
                        l = {};
                    await h(o, e), r && (l.expand = r), y(n, l);
                    let c = a && a.headers ? a.headers : {};
                    return i.headers = {
                        ...o,
                        ...c,
                        ...s.headers
                    }, {
                        url: g(n),
                        options: i
                    }
                },
                revokeSession: async (t, r, s = {}) => {
                    let a;
                    f("revokeSession", "revokeSessionRequest", t);
                    let n = new URL("/v1/sessions/revoke", p);
                    e && (a = e.baseOptions);
                    let i = {
                            method: "POST",
                            ...a,
                            ...s
                        },
                        o = {};
                    await h(o, e), null != r && (o["X-Behalf-Of-Project"] = String(r)), o["Content-Type"] = "application/json", y(n, {});
                    let l = a && a.headers ? a.headers : {};
                    return i.headers = {
                        ...o,
                        ...l,
                        ...s.headers
                    }, i.data = m(t, i, e), {
                        url: g(n),
                        options: i
                    }
                },
                signatureSession: async (t, r, s = {}) => {
                    let a;
                    f("signatureSession", "id", t), f("signatureSession", "signatureRequest", r);
                    let n = new URL("/v1/sessions/{id}/signature".replace("{id}", encodeURIComponent(String(t))), p);
                    e && (a = e.baseOptions);
                    let i = {
                            method: "POST",
                            ...a,
                            ...s
                        },
                        o = {};
                    await h(o, e), await h(o, e), o["Content-Type"] = "application/json", y(n, {});
                    let l = a && a.headers ? a.headers : {};
                    return i.headers = {
                        ...o,
                        ...l,
                        ...s.headers
                    }, i.data = m(r, i, e), {
                        url: g(n),
                        options: i
                    }
                }
            };
            return {
                createSession: async (r, s, a) => E(await t.createSession(r, s, a), i.default, c, e),
                getPlayerSessions: async (r, s, a, n, o, l) => E(await t.getPlayerSessions(r, s, a, n, o, l), i.default, c, e),
                getSession: async (r, s, a) => E(await t.getSession(r, s, a), i.default, c, e),
                revokeSession: async (r, s, a) => E(await t.revokeSession(r, s, a), i.default, c, e),
                signatureSession: async (r, s, a) => E(await t.signatureSession(r, s, a), i.default, c, e)
            }
        };
        class I extends d {
            createSession(e, t) {
                return v(this.configuration).createSession(e.createSessionRequest, e.xBehalfOfProject, t).then(e => e(this.axios, this.basePath))
            }
            getPlayerSessions(e, t) {
                return v(this.configuration).getPlayerSessions(e.player, e.limit, e.skip, e.order, e.expand, t).then(e => e(this.axios, this.basePath))
            }
            getSession(e, t) {
                return v(this.configuration).getSession(e.id, e.expand, t).then(e => e(this.axios, this.basePath))
            }
            revokeSession(e, t) {
                return v(this.configuration).revokeSession(e.revokeSessionRequest, e.xBehalfOfProject, t).then(e => e(this.axios, this.basePath))
            }
            signatureSession(e, t) {
                return v(this.configuration).signatureSession(e.id, e.signatureRequest, t).then(e => e(this.axios, this.basePath))
            }
        }
        let R = function(e) {
            let t = {
                createTransactionIntent: async (t, r, s = {}) => {
                    let a;
                    f("createTransactionIntent", "createTransactionIntentRequest", t);
                    let n = new URL("/v1/transaction_intents", p);
                    e && (a = e.baseOptions);
                    let i = {
                            method: "POST",
                            ...a,
                            ...s
                        },
                        o = {};
                    await h(o, e), null != r && (o["X-Behalf-Of-Project"] = String(r)), o["Content-Type"] = "application/json", y(n, {});
                    let l = a && a.headers ? a.headers : {};
                    return i.headers = {
                        ...o,
                        ...l,
                        ...s.headers
                    }, i.data = m(t, i, e), {
                        url: g(n),
                        options: i
                    }
                },
                estimateTransactionIntentCost: async (t, r = {}) => {
                    let s;
                    f("estimateTransactionIntentCost", "createTransactionIntentRequest", t);
                    let a = new URL("/v1/transaction_intents/estimate_gas_cost", p);
                    e && (s = e.baseOptions);
                    let n = {
                            method: "POST",
                            ...s,
                            ...r
                        },
                        i = {};
                    await h(i, e), i["Content-Type"] = "application/json", y(a, {});
                    let o = s && s.headers ? s.headers : {};
                    return n.headers = {
                        ...i,
                        ...o,
                        ...r.headers
                    }, n.data = m(t, n, e), {
                        url: g(a),
                        options: n
                    }
                },
                getTransactionIntent: async (t, r, s = {}) => {
                    let a;
                    f("getTransactionIntent", "id", t);
                    let n = new URL("/v1/transaction_intents/{id}".replace("{id}", encodeURIComponent(String(t))), p);
                    e && (a = e.baseOptions);
                    let i = {
                            method: "GET",
                            ...a,
                            ...s
                        },
                        o = {},
                        l = {};
                    await h(o, e), r && (l.expand = r), y(n, l);
                    let c = a && a.headers ? a.headers : {};
                    return i.headers = {
                        ...o,
                        ...c,
                        ...s.headers
                    }, {
                        url: g(n),
                        options: i
                    }
                },
                getTransactionIntents: async (t, r, s, a, n, i, o, l, c, d = {}) => {
                    let u, f = new URL("/v1/transaction_intents", p);
                    e && (u = e.baseOptions);
                    let m = {
                            method: "GET",
                            ...u,
                            ...d
                        },
                        E = {},
                        w = {};
                    await h(E, e), void 0 !== t && (w.limit = t), void 0 !== r && (w.skip = r), void 0 !== s && (w.order = s), a && (w.expand = a), void 0 !== n && (w.chainId = n), i && (w.account = i), o && (w.player = o), void 0 !== l && (w.status = l), c && (w.policy = c), y(f, w);
                    let j = u && u.headers ? u.headers : {};
                    return m.headers = {
                        ...E,
                        ...j,
                        ...d.headers
                    }, {
                        url: g(f),
                        options: m
                    }
                },
                signature: async (t, r, s = {}) => {
                    let a;
                    f("signature", "id", t), f("signature", "signatureRequest", r);
                    let n = new URL("/v1/transaction_intents/{id}/signature".replace("{id}", encodeURIComponent(String(t))), p);
                    e && (a = e.baseOptions);
                    let i = {
                            method: "POST",
                            ...a,
                            ...s
                        },
                        o = {};
                    await h(o, e), await h(o, e), o["Content-Type"] = "application/json", y(n, {});
                    let l = a && a.headers ? a.headers : {};
                    return i.headers = {
                        ...o,
                        ...l,
                        ...s.headers
                    }, i.data = m(r, i, e), {
                        url: g(n),
                        options: i
                    }
                }
            };
            return {
                createTransactionIntent: async (r, s, a) => E(await t.createTransactionIntent(r, s, a), i.default, c, e),
                estimateTransactionIntentCost: async (r, s) => E(await t.estimateTransactionIntentCost(r, s), i.default, c, e),
                getTransactionIntent: async (r, s, a) => E(await t.getTransactionIntent(r, s, a), i.default, c, e),
                getTransactionIntents: async (r, s, a, n, o, l, d, u, p, f) => E(await t.getTransactionIntents(r, s, a, n, o, l, d, u, p, f), i.default, c, e),
                signature: async (r, s, a) => E(await t.signature(r, s, a), i.default, c, e)
            }
        };
        class S extends d {
            createTransactionIntent(e, t) {
                return R(this.configuration).createTransactionIntent(e.createTransactionIntentRequest, e.xBehalfOfProject, t).then(e => e(this.axios, this.basePath))
            }
            estimateTransactionIntentCost(e, t) {
                return R(this.configuration).estimateTransactionIntentCost(e.createTransactionIntentRequest, t).then(e => e(this.axios, this.basePath))
            }
            getTransactionIntent(e, t) {
                return R(this.configuration).getTransactionIntent(e.id, e.expand, t).then(e => e(this.axios, this.basePath))
            }
            getTransactionIntents(e = {}, t) {
                return R(this.configuration).getTransactionIntents(e.limit, e.skip, e.order, e.expand, e.chainId, e.account, e.player, e.status, e.policy, t).then(e => e(this.axios, this.basePath))
            }
            signature(e, t) {
                return R(this.configuration).signature(e.id, e.signatureRequest, t).then(e => e(this.axios, this.basePath))
            }
        }
        class T {
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
        let O = ({
            basePath: e,
            accessToken: t
        }) => {
            if (!e.trim()) throw Error("basePath can not be empty");
            return new T({
                basePath: e,
                accessToken: t
            })
        };
        class _ {
            config;
            transactionIntentsApi;
            accountsApi;
            sessionsApi;
            authenticationApi;
            constructor(e) {
                let t = i.default.create();
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
                    backend: O(r)
                }, this.transactionIntentsApi = new S(this.config.backend, void 0, t), this.accountsApi = new j(this.config.backend, void 0, t), this.sessionsApi = new I(this.config.backend, void 0, t), this.authenticationApi = new A(this.config.backend, void 0, t)
            }
        }
    }, {
        axios: "jhAcT",
        "axios-retry": "8va09",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "8va09": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "namespace", () => o), a.export(r, "isNetworkError", () => l), a.export(r, "isRetryableError", () => u), a.export(r, "isSafeRequestError", () => p), a.export(r, "isIdempotentRequestError", () => f), a.export(r, "isNetworkOrIdempotentRequestError", () => h), a.export(r, "retryAfter", () => y), a.export(r, "exponentialDelay", () => m), a.export(r, "linearDelay", () => g), a.export(r, "DEFAULT_OPTIONS", () => E);
        var n = e("is-retry-allowed"),
            i = a.interopDefault(n);
        let o = "axios-retry";

        function l(e) {
            return !(e.response || !e.code || ["ERR_CANCELED", "ECONNABORTED"].includes(e.code)) && (0, i.default)(e)
        }
        let c = ["get", "head", "options"],
            d = c.concat(["put", "delete"]);

        function u(e) {
            return "ECONNABORTED" !== e.code && (!e.response || 429 === e.response.status || e.response.status >= 500 && e.response.status <= 599)
        }

        function p(e) {
            return !!e.config?.method && u(e) && -1 !== c.indexOf(e.config.method)
        }

        function f(e) {
            return !!e.config?.method && u(e) && -1 !== d.indexOf(e.config.method)
        }

        function h(e) {
            return l(e) || f(e)
        }

        function y(e) {
            let t = e?.response?.headers["retry-after"];
            if (!t) return 0;
            let r = 1e3 * (Number(t) || 0);
            return 0 === r && (r = (new Date(t).valueOf() || 0) - Date.now()), Math.max(0, r)
        }

        function m(e = 0, t, r = 100) {
            let s = Math.max(2 ** e * r, y(t)),
                a = .2 * s * Math.random();
            return s + a
        }

        function g(e = 100) {
            return (t = 0, r) => Math.max(t * e, y(r))
        }
        let E = {
            retries: 3,
            retryCondition: h,
            retryDelay: function(e = 0, t) {
                return Math.max(0, y(t))
            },
            shouldResetTimeout: !1,
            onRetry: () => {},
            onMaxRetryTimesExceeded: () => {},
            validateResponse: null
        };

        function w(e, t, r = !1) {
            var s;
            let a = (s = t || {}, {
                ...E,
                ...s,
                ...e[o]
            });
            return a.retryCount = a.retryCount || 0, (!a.lastRequestTime || r) && (a.lastRequestTime = Date.now()), e[o] = a, a
        }
        async function j(e, t) {
            let {
                retries: r,
                retryCondition: s
            } = e, a = (e.retryCount || 0) < r && s(t);
            if ("object" == typeof a) try {
                let e = await a;
                return !1 !== e
            } catch (e) {
                return !1
            }
            return a
        }
        async function b(e, t, r, s) {
            t.retryCount += 1;
            let {
                retryDelay: a,
                shouldResetTimeout: n,
                onRetry: i
            } = t, o = a(t.retryCount, r);
            if (e.defaults.agent === s.agent && delete s.agent, e.defaults.httpAgent === s.httpAgent && delete s.httpAgent, e.defaults.httpsAgent === s.httpsAgent && delete s.httpsAgent, !n && s.timeout && t.lastRequestTime) {
                let e = Date.now() - t.lastRequestTime,
                    a = s.timeout - e - o;
                if (a <= 0) return Promise.reject(r);
                s.timeout = a
            }
            return (s.transformRequest = [e => e], await i(t.retryCount, r, s), s.signal?.aborted) ? Promise.resolve(e(s)) : new Promise(t => {
                let r = () => {
                        clearTimeout(a), t(e(s))
                    },
                    a = setTimeout(() => {
                        t(e(s)), s.signal?.removeEventListener && s.signal.removeEventListener("abort", r)
                    }, o);
                s.signal?.addEventListener && s.signal.addEventListener("abort", r, {
                    once: !0
                })
            })
        }
        async function A(e, t) {
            e.retryCount >= e.retries && await e.onMaxRetryTimesExceeded(t, e.retryCount)
        }
        let v = (e, t) => ({
            requestInterceptorId: e.interceptors.request.use(e => (w(e, t, !0), e[o]?.validateResponse && (e.validateStatus = () => !1), e)),
            responseInterceptorId: e.interceptors.response.use(null, async r => {
                let {
                    config: s
                } = r;
                if (!s) return Promise.reject(r);
                let a = w(s, t);
                return r.response && a.validateResponse?.(r.response) ? r.response : await j(a, r) ? b(e, a, r, s) : (await A(a, r), Promise.reject(r))
            })
        });
        v.isNetworkError = l, v.isSafeRequestError = p, v.isIdempotentRequestError = f, v.isNetworkOrIdempotentRequestError = h, v.exponentialDelay = m, v.linearDelay = g, v.isRetryableError = u, r.default = v
    }, {
        "is-retry-allowed": "gqdKH",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    gqdKH: [function(e, t, r, s) {
        "use strict";
        let a = new Set(["ENOTFOUND", "ENETUNREACH", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_CRL", "UNABLE_TO_DECRYPT_CERT_SIGNATURE", "UNABLE_TO_DECRYPT_CRL_SIGNATURE", "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY", "CERT_SIGNATURE_FAILURE", "CRL_SIGNATURE_FAILURE", "CERT_NOT_YET_VALID", "CERT_HAS_EXPIRED", "CRL_NOT_YET_VALID", "CRL_HAS_EXPIRED", "ERROR_IN_CERT_NOT_BEFORE_FIELD", "ERROR_IN_CERT_NOT_AFTER_FIELD", "ERROR_IN_CRL_LAST_UPDATE_FIELD", "ERROR_IN_CRL_NEXT_UPDATE_FIELD", "OUT_OF_MEM", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "UNABLE_TO_VERIFY_LEAF_SIGNATURE", "CERT_CHAIN_TOO_LONG", "CERT_REVOKED", "INVALID_CA", "PATH_LENGTH_EXCEEDED", "INVALID_PURPOSE", "CERT_UNTRUSTED", "CERT_REJECTED", "HOSTNAME_MISMATCH"]);
        t.exports = e => !a.has(e && e.code)
    }, {}],
    i2ayE: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "LazyStorage", () => o);
        var n = e("./storage.js"),
            i = e("../core/errors/openfortError.js");
        class o {
            realStorage = null;
            customStorage;
            constructor(e) {
                this.customStorage = e
            }
            getRealStorage() {
                if (!this.realStorage)
                    if (this.customStorage) this.realStorage = this.customStorage;
                    else {
                        if ("undefined" == typeof window || "undefined" == typeof localStorage) throw new(0, i.OpenfortError)("Storage not available. Please provide custom storage or use in browser environment.", i.OpenfortErrorType.INVALID_CONFIGURATION);
                        this.realStorage = new(0, n.StorageImplementation)(localStorage)
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "StorageImplementation", () => i);
        var n = e("./istorage.js");
        class i {
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
                for (let e of Object.values(n.StorageKeys)) this.storage.removeItem(e)
            }
        }
    }, {
        "./istorage.js": "8EpXG",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    aurKi: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "AuthManager", () => m);
        var n = e("jose"),
            i = e("../utils/debug.js"),
            o = e("../core/errors/openfortError.js"),
            l = e("../core/errors/sentry.js"),
            c = e("../types/types.js"),
            d = e("../storage/istorage.js"),
            u = e("../utils/crypto.js");
        async function p(e) {
            let t = (new TextEncoder).encode(e);
            return new Uint8Array(await (0, u.cryptoDigest)("SHA-256", t))
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
                    this.decodedPayload = (0, n.decodeJwt)(e)
                } catch (e) {
                    throw new(0, o.OpenfortError)("Invalid token format", o.OpenfortErrorType.AUTHENTICATION_ERROR)
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
                return !this.expiration || ((0, i.debugLog)("Token expiration:", 1e3 * (this.expiration - e), "Current time:", Date.now()), Date.now() >= 1e3 * (this.expiration - e))
            }
            static parse(e) {
                try {
                    return new h(e)
                } catch {
                    return null
                }
            }
        }
        class y {
            storage;
            constructor(e) {
                this.storage = e
            }
            async savePKCEData(e) {
                this.storage.save(d.StorageKeys.PKCE_STATE, e.state), this.storage.save(d.StorageKeys.PKCE_VERIFIER, e.verifier)
            }
            async getPKCEData() {
                let e = await this.storage.get(d.StorageKeys.PKCE_STATE),
                    t = await this.storage.get(d.StorageKeys.PKCE_VERIFIER);
                return e && t ? {
                    state: e,
                    verifier: t
                } : null
            }
            async clearPKCEData() {
                this.storage.remove(d.StorageKeys.PKCE_STATE), this.storage.remove(d.StorageKeys.PKCE_VERIFIER)
            }
        }
        class m {
            deviceCredentialsManager;
            backendApiClientsInstance;
            publishableKeyInstance;
            constructor(e) {
                this.deviceCredentialsManager = new y(e)
            }
            setBackendApiClients(e, t) {
                this.backendApiClientsInstance = e, this.publishableKeyInstance = t
            }
            get backendApiClients() {
                if (!this.backendApiClientsInstance) throw new(0, o.OpenfortError)("Backend API clients not initialized", o.OpenfortErrorType.INTERNAL_ERROR);
                return this.backendApiClientsInstance
            }
            get publishableKey() {
                if (!this.publishableKeyInstance) throw new(0, o.OpenfortError)("Publishable key not initialized", o.OpenfortErrorType.INTERNAL_ERROR);
                return this.publishableKeyInstance
            }
            async initOAuth(e, t, r) {
                let s = t?.usePooling ?? !1,
                    a = t?.skipBrowserRedirect ?? !1,
                    {
                        usePooling: n,
                        skipBrowserRedirect: i,
                        ...l
                    } = t || {},
                    c = {
                        oAuthInitRequest: {
                            provider: e,
                            options: l,
                            usePooling: s
                        }
                    },
                    d = await (0, o.withOpenfortError)(async () => this.backendApiClients.authenticationApi.initOAuth(c, m.getEcosystemGameOptsOrUndefined(r)), {
                        default: o.OpenfortErrorType.AUTHENTICATION_ERROR
                    });
                return "undefined" == typeof window || a || window.location.assign(d.data.url), {
                    url: d.data.url,
                    key: d.data.key
                }
            }
            async registerGuest() {
                let e = {};
                return (0, o.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.registerGuest(e)).data, {
                    default: o.OpenfortErrorType.USER_REGISTRATION_ERROR
                })
            }
            async poolOAuth(e) {
                let t = {
                    key: e
                };
                for (let e = 0; e < 600; e++) try {
                    let e = await (0, o.withOpenfortError)(async () => this.backendApiClients.authenticationApi.poolOAuth(t), {
                        default: o.OpenfortErrorType.AUTHENTICATION_ERROR
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
                return (0, o.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.loginWithIdToken(s, m.getEcosystemGameOptsOrUndefined(r))).data, {
                    default: o.OpenfortErrorType.AUTHENTICATION_ERROR,
                    401: o.OpenfortErrorType.AUTHENTICATION_ERROR,
                    403: o.OpenfortErrorType.USER_NOT_AUTHORIZED_ON_ECOSYSTEM
                }, e => {
                    l.sentry.captureAxiosError("loginWithIdToken", e)
                })
            }
            async authenticateThirdParty(e, t, r, s) {
                let a = {
                    thirdPartyOAuthRequest: {
                        provider: e,
                        token: t,
                        tokenType: r
                    }
                };
                return (0, o.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.thirdParty(a, m.getEcosystemGameOptsOrUndefined(s))).data, {
                    default: o.OpenfortErrorType.AUTHENTICATION_ERROR,
                    401: o.OpenfortErrorType.AUTHENTICATION_ERROR,
                    403: o.OpenfortErrorType.USER_NOT_AUTHORIZED_ON_ECOSYSTEM
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
                    s = await (0, o.withOpenfortError)(async () => this.backendApiClients.authenticationApi.initSIWE(r, m.getEcosystemGameOptsOrUndefined(t)), {
                        default: o.OpenfortErrorType.AUTHENTICATION_ERROR
                    });
                return {
                    address: s.data.address,
                    nonce: s.data.nonce,
                    expiresAt: s.data.expiresAt
                }
            }
            async authenticateSIWE(e, t, r, s) {
                let a = {
                    sIWEAuthenticateRequest: {
                        signature: e,
                        message: t,
                        walletClientType: r,
                        connectorType: s
                    }
                };
                return (0, o.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.authenticateSIWE(a)).data, {
                    default: o.OpenfortErrorType.AUTHENTICATION_ERROR,
                    401: o.OpenfortErrorType.AUTHENTICATION_ERROR,
                    403: o.OpenfortErrorType.USER_NOT_AUTHORIZED_ON_ECOSYSTEM
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
                return (0, o.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.loginEmailPassword(s, m.getEcosystemGameOptsOrUndefined(r))).data, {
                    default: o.OpenfortErrorType.AUTHENTICATION_ERROR,
                    401: o.OpenfortErrorType.AUTHENTICATION_ERROR,
                    403: o.OpenfortErrorType.USER_NOT_AUTHORIZED_ON_ECOSYSTEM
                }, e => {
                    l.sentry.captureAxiosError("loginEmailPassword", e)
                })
            }
            async requestResetPassword(e, t) {
                let r = f(32),
                    s = n.base64url.encode(r),
                    a = await p(s),
                    i = n.base64url.encode(a),
                    l = f(32),
                    d = n.base64url.encode(l);
                await this.deviceCredentialsManager.savePKCEData({
                    state: d,
                    verifier: s
                });
                let u = {
                    requestResetPasswordRequest: {
                        email: e,
                        redirectUrl: t,
                        challenge: {
                            codeChallenge: i,
                            method: c.CodeChallengeMethodEnum.S256
                        }
                    }
                };
                await (0, o.withOpenfortError)(async () => {
                    await this.backendApiClients.authenticationApi.requestResetPassword(u)
                }, {
                    default: o.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async resetPassword(e, t, r) {
                return (0, o.withOpenfortError)(async () => {
                    let s = await this.deviceCredentialsManager.getPKCEData();
                    if (!s) throw Error("No code verifier or state for PKCE");
                    let a = {
                        resetPasswordRequest: {
                            email: e,
                            password: t,
                            state: r,
                            challenge: {
                                codeVerifier: s.verifier
                            }
                        }
                    };
                    await this.backendApiClients.authenticationApi.resetPassword(a)
                }, {
                    default: o.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async requestEmailVerification(e, t) {
                let r = f(32),
                    s = n.base64url.encode(r),
                    a = await p(s),
                    i = n.base64url.encode(a),
                    l = f(32),
                    d = n.base64url.encode(l);
                await this.deviceCredentialsManager.savePKCEData({
                    state: d,
                    verifier: s
                });
                let u = {
                    requestVerifyEmailRequest: {
                        email: e,
                        redirectUrl: t,
                        challenge: {
                            codeChallenge: i,
                            method: c.CodeChallengeMethodEnum.S256
                        }
                    }
                };
                await (0, o.withOpenfortError)(async () => {
                    await this.backendApiClients.authenticationApi.requestEmailVerification(u)
                }, {
                    default: o.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async verifyEmail(e, t) {
                return (0, o.withOpenfortError)(async () => {
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
                    default: o.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async signupEmailPassword(e, t, r, s) {
                let a = {
                    signupRequest: {
                        email: e,
                        password: t,
                        name: r
                    }
                };
                return (0, o.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.signupEmailPassword(a, m.getEcosystemGameOptsOrUndefined(s))).data, {
                    default: o.OpenfortErrorType.USER_REGISTRATION_ERROR,
                    401: o.OpenfortErrorType.USER_REGISTRATION_ERROR,
                    403: o.OpenfortErrorType.USER_NOT_AUTHORIZED_ON_ECOSYSTEM
                }, e => {
                    l.sentry.captureAxiosError("signupEmailPassword", e)
                })
            }
            async validateCredentials(e, t) {
                if (!e.refreshToken) throw new(0, o.OpenfortError)("No refresh token provided", o.OpenfortErrorType.AUTHENTICATION_ERROR);
                if (t) return this.refreshTokens(e.refreshToken, t);
                (0, i.debugLog)("Validating credentials with token:", e.token);
                let r = h.parse(e.token);
                return r ? r.isExpired() ? ((0, i.debugLog)("Token expired, refreshing..."), this.refreshTokens(e.refreshToken)) : {
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
                return (0, o.withOpenfortError)(async () => {
                    let e = await this.backendApiClients.authenticationApi.refresh(r);
                    return {
                        player: e.data.player.id,
                        accessToken: e.data.token,
                        refreshToken: e.data.refreshToken
                    }
                }, {
                    default: o.OpenfortErrorType.REFRESH_TOKEN_ERROR
                })
            }
            async logout(e, t) {
                let r = {
                    logoutRequest: {
                        refreshToken: t
                    }
                };
                return (0, o.withOpenfortError)(async () => {
                    await this.backendApiClients.authenticationApi.logout(r, {
                        headers: {
                            authorization: `Bearer ${this.publishableKey}`,
                            "x-player-token": e
                        }
                    })
                }, {
                    default: o.OpenfortErrorType.LOGOUT_ERROR
                })
            }
            async getUser(e) {
                return (0, o.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.me({
                    headers: {
                        authorization: `Bearer ${this.publishableKey}`,
                        "x-player-token": e.token,
                        "x-auth-provider": e.thirdPartyProvider,
                        "x-token-type": e.thirdPartyTokenType
                    }
                })).data, {
                    default: o.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async linkThirdParty(e, t, r, s, a) {
                let n = {
                    thirdPartyLinkRequest: {
                        provider: t,
                        token: r,
                        tokenType: s
                    }
                };
                return (0, o.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.linkThirdParty(n, {
                    headers: {
                        authorization: `Bearer ${this.publishableKey}`,
                        "x-player-token": e.token,
                        "x-auth-provider": e.thirdPartyProvider || void 0,
                        "x-token-type": e.thirdPartyTokenType || void 0,
                        "x-game": a || void 0
                    }
                })).data, {
                    default: o.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async linkOAuth(e, t, r, s) {
                let a = r?.skipBrowserRedirect ?? !1;
                delete r?.skipBrowserRedirect;
                let n = {
                        oAuthInitRequest: {
                            provider: t,
                            options: r,
                            usePooling: r?.usePooling || !1
                        }
                    },
                    i = await (0, o.withOpenfortError)(async () => this.backendApiClients.authenticationApi.linkOAuth(n, {
                        headers: {
                            authorization: `Bearer ${this.publishableKey}`,
                            "x-player-token": e.token,
                            "x-auth-provider": e.thirdPartyProvider || void 0,
                            "x-token-type": e.thirdPartyTokenType || void 0,
                            "x-game": s || void 0
                        }
                    }), {
                        default: o.OpenfortErrorType.AUTHENTICATION_ERROR
                    });
                return "undefined" == typeof window || a || window.location.assign(i.data.url), {
                    url: i.data.url,
                    key: i.data.key
                }
            }
            async unlinkOAuth(e, t) {
                let r = {
                    unlinkOAuthRequest: {
                        provider: e
                    }
                };
                return (0, o.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.unlinkOAuth(r, {
                    headers: {
                        authorization: `Bearer ${this.publishableKey}`,
                        "x-player-token": t
                    }
                })).data, {
                    default: o.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async unlinkWallet(e, t) {
                let r = {
                    sIWERequest: {
                        address: e
                    }
                };
                return (0, o.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.unlinkSIWE(r, {
                    headers: {
                        authorization: `Bearer ${this.publishableKey}`,
                        "x-player-token": t
                    }
                })).data, {
                    default: o.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async linkWallet(e, t, r, s, a) {
                let n = {
                    sIWEAuthenticateRequest: {
                        signature: e,
                        message: t,
                        walletClientType: r,
                        connectorType: s
                    }
                };
                return (0, o.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.linkSIWE(n, {
                    headers: {
                        authorization: `Bearer ${this.publishableKey}`,
                        "x-player-token": a
                    }
                })).data, {
                    default: o.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async unlinkEmail(e, t) {
                let r = {
                    unlinkEmailRequest: {
                        email: e
                    }
                };
                return (0, o.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.unlinkEmail(r, {
                    headers: {
                        authorization: `Bearer ${this.publishableKey}`,
                        "x-player-token": t
                    }
                })).data, {
                    default: o.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async linkEmail(e, t, r, s) {
                let a = {
                    loginRequest: {
                        email: e,
                        password: t
                    }
                };
                return (0, o.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.linkEmail(a, {
                    headers: {
                        authorization: `Bearer ${this.publishableKey}`,
                        "x-player-token": r,
                        "x-game": s || void 0
                    }
                })).data, {
                    default: o.OpenfortErrorType.AUTHENTICATION_ERROR
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "compactDecrypt", () => n.compactDecrypt), a.export(r, "flattenedDecrypt", () => i.flattenedDecrypt), a.export(r, "generalDecrypt", () => o.generalDecrypt), a.export(r, "GeneralEncrypt", () => l.GeneralEncrypt), a.export(r, "compactVerify", () => c.compactVerify), a.export(r, "flattenedVerify", () => d.flattenedVerify), a.export(r, "generalVerify", () => u.generalVerify), a.export(r, "jwtVerify", () => p.jwtVerify), a.export(r, "jwtDecrypt", () => f.jwtDecrypt), a.export(r, "CompactEncrypt", () => h.CompactEncrypt), a.export(r, "FlattenedEncrypt", () => y.FlattenedEncrypt), a.export(r, "CompactSign", () => m.CompactSign), a.export(r, "FlattenedSign", () => g.FlattenedSign), a.export(r, "GeneralSign", () => E.GeneralSign), a.export(r, "SignJWT", () => w.SignJWT), a.export(r, "EncryptJWT", () => j.EncryptJWT), a.export(r, "calculateJwkThumbprint", () => b.calculateJwkThumbprint), a.export(r, "calculateJwkThumbprintUri", () => b.calculateJwkThumbprintUri), a.export(r, "EmbeddedJWK", () => A.EmbeddedJWK), a.export(r, "createLocalJWKSet", () => v.createLocalJWKSet), a.export(r, "createRemoteJWKSet", () => I.createRemoteJWKSet), a.export(r, "jwksCache", () => I.jwksCache), a.export(r, "experimental_jwksCache", () => I.experimental_jwksCache), a.export(r, "UnsecuredJWT", () => R.UnsecuredJWT), a.export(r, "exportPKCS8", () => S.exportPKCS8), a.export(r, "exportSPKI", () => S.exportSPKI), a.export(r, "exportJWK", () => S.exportJWK), a.export(r, "importSPKI", () => T.importSPKI), a.export(r, "importPKCS8", () => T.importPKCS8), a.export(r, "importX509", () => T.importX509), a.export(r, "importJWK", () => T.importJWK), a.export(r, "decodeProtectedHeader", () => O.decodeProtectedHeader), a.export(r, "decodeJwt", () => _.decodeJwt), a.export(r, "errors", () => C), a.export(r, "generateKeyPair", () => k.generateKeyPair), a.export(r, "generateSecret", () => P.generateSecret), a.export(r, "base64url", () => x), a.export(r, "cryptoRuntime", () => N.default);
        var n = e("./jwe/compact/decrypt.js"),
            i = e("./jwe/flattened/decrypt.js"),
            o = e("./jwe/general/decrypt.js"),
            l = e("./jwe/general/encrypt.js"),
            c = e("./jws/compact/verify.js"),
            d = e("./jws/flattened/verify.js"),
            u = e("./jws/general/verify.js"),
            p = e("./jwt/verify.js"),
            f = e("./jwt/decrypt.js"),
            h = e("./jwe/compact/encrypt.js"),
            y = e("./jwe/flattened/encrypt.js"),
            m = e("./jws/compact/sign.js"),
            g = e("./jws/flattened/sign.js"),
            E = e("./jws/general/sign.js"),
            w = e("./jwt/sign.js"),
            j = e("./jwt/encrypt.js"),
            b = e("./jwk/thumbprint.js"),
            A = e("./jwk/embedded.js"),
            v = e("./jwks/local.js"),
            I = e("./jwks/remote.js"),
            R = e("./jwt/unsecured.js"),
            S = e("./key/export.js"),
            T = e("./key/import.js"),
            O = e("./util/decode_protected_header.js"),
            _ = e("./util/decode_jwt.js"),
            C = e("./util/errors.js"),
            k = e("./key/generate_key_pair.js"),
            P = e("./key/generate_secret.js"),
            x = e("./util/base64url.js"),
            D = e("./util/runtime.js"),
            N = a.interopDefault(D)
    }, {
        "./jwe/compact/decrypt.js": "7DFBy",
        "./jwe/flattened/decrypt.js": "luo4b",
        "./jwe/general/decrypt.js": "8zfCc",
        "./jwe/general/encrypt.js": "3SkdU",
        "./jws/compact/verify.js": "dqf6f",
        "./jws/flattened/verify.js": "dx6in",
        "./jws/general/verify.js": "dUaF5",
        "./jwt/verify.js": "kEUL7",
        "./jwt/decrypt.js": "2hBcA",
        "./jwe/compact/encrypt.js": "3oyTC",
        "./jwe/flattened/encrypt.js": "38HbS",
        "./jws/compact/sign.js": "fw8ji",
        "./jws/flattened/sign.js": "1BlEG",
        "./jws/general/sign.js": "5keNb",
        "./jwt/sign.js": "6ZXe2",
        "./jwt/encrypt.js": "4bdxA",
        "./jwk/thumbprint.js": "hlmFr",
        "./jwk/embedded.js": "bAeYV",
        "./jwks/local.js": "ljm8x",
        "./jwks/remote.js": "fONdD",
        "./jwt/unsecured.js": "TdmmA",
        "./key/export.js": "fy0WI",
        "./key/import.js": "azICy",
        "./util/decode_protected_header.js": "7jXGQ",
        "./util/decode_jwt.js": "eIcG3",
        "./util/errors.js": "2MROB",
        "./key/generate_key_pair.js": "ktMh4",
        "./key/generate_secret.js": "1pU2l",
        "./util/base64url.js": "gHZ5h",
        "./util/runtime.js": "bIO4P",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "7DFBy": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "compactDecrypt", () => l);
        var n = e("../flattened/decrypt.js"),
            i = e("../../util/errors.js"),
            o = e("../../lib/buffer_utils.js");
        async function l(e, t, r) {
            if (e instanceof Uint8Array && (e = o.decoder.decode(e)), "string" != typeof e) throw new(0, i.JWEInvalid)("Compact JWE must be a string or Uint8Array");
            let {
                0: s,
                1: a,
                2: l,
                3: c,
                4: d,
                length: u
            } = e.split(".");
            if (5 !== u) throw new(0, i.JWEInvalid)("Invalid Compact JWE");
            let p = await (0, n.flattenedDecrypt)({
                    ciphertext: c,
                    iv: l || void 0,
                    protected: s,
                    tag: d || void 0,
                    encrypted_key: a || void 0
                }, t, r),
                f = {
                    plaintext: p.plaintext,
                    protectedHeader: p.protectedHeader
                };
            return "function" == typeof t ? {
                ...f,
                key: p.key
            } : f
        }
    }, {
        "../flattened/decrypt.js": "luo4b",
        "../../util/errors.js": "2MROB",
        "../../lib/buffer_utils.js": "3OSXK",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    luo4b: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "flattenedDecrypt", () => A);
        var n = e("../../runtime/base64url.js"),
            i = e("../../runtime/decrypt.js"),
            o = a.interopDefault(i),
            l = e("../../util/errors.js"),
            c = e("../../lib/is_disjoint.js"),
            d = a.interopDefault(c),
            u = e("../../lib/is_object.js"),
            p = a.interopDefault(u),
            f = e("../../lib/decrypt_key_management.js"),
            h = a.interopDefault(f),
            y = e("../../lib/buffer_utils.js"),
            m = e("../../lib/cek.js"),
            g = a.interopDefault(m),
            E = e("../../lib/validate_crit.js"),
            w = a.interopDefault(E),
            j = e("../../lib/validate_algorithms.js"),
            b = a.interopDefault(j);
        async function A(e, t, r) {
            let s, a, i, c, u, f, m;
            if (!(0, p.default)(e)) throw new(0, l.JWEInvalid)("Flattened JWE must be an object");
            if (void 0 === e.protected && void 0 === e.header && void 0 === e.unprotected) throw new(0, l.JWEInvalid)("JOSE Header missing");
            if (void 0 !== e.iv && "string" != typeof e.iv) throw new(0, l.JWEInvalid)("JWE Initialization Vector incorrect type");
            if ("string" != typeof e.ciphertext) throw new(0, l.JWEInvalid)("JWE Ciphertext missing or incorrect type");
            if (void 0 !== e.tag && "string" != typeof e.tag) throw new(0, l.JWEInvalid)("JWE Authentication Tag incorrect type");
            if (void 0 !== e.protected && "string" != typeof e.protected) throw new(0, l.JWEInvalid)("JWE Protected Header incorrect type");
            if (void 0 !== e.encrypted_key && "string" != typeof e.encrypted_key) throw new(0, l.JWEInvalid)("JWE Encrypted Key incorrect type");
            if (void 0 !== e.aad && "string" != typeof e.aad) throw new(0, l.JWEInvalid)("JWE AAD incorrect type");
            if (void 0 !== e.header && !(0, p.default)(e.header)) throw new(0, l.JWEInvalid)("JWE Shared Unprotected Header incorrect type");
            if (void 0 !== e.unprotected && !(0, p.default)(e.unprotected)) throw new(0, l.JWEInvalid)("JWE Per-Recipient Unprotected Header incorrect type");
            if (e.protected) try {
                let t = (0, n.decode)(e.protected);
                s = JSON.parse(y.decoder.decode(t))
            } catch {
                throw new(0, l.JWEInvalid)("JWE Protected Header is invalid")
            }
            if (!(0, d.default)(s, e.header, e.unprotected)) throw new(0, l.JWEInvalid)("JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint");
            let E = {
                ...s,
                ...e.header,
                ...e.unprotected
            };
            if ((0, w.default)(l.JWEInvalid, new Map, r?.crit, s, E), void 0 !== E.zip) throw new(0, l.JOSENotSupported)('JWE "zip" (Compression Algorithm) Header Parameter is not supported.');
            let {
                alg: j,
                enc: A
            } = E;
            if ("string" != typeof j || !j) throw new(0, l.JWEInvalid)("missing JWE Algorithm (alg) in JWE Header");
            if ("string" != typeof A || !A) throw new(0, l.JWEInvalid)("missing JWE Encryption Algorithm (enc) in JWE Header");
            let v = r && (0, b.default)("keyManagementAlgorithms", r.keyManagementAlgorithms),
                I = r && (0, b.default)("contentEncryptionAlgorithms", r.contentEncryptionAlgorithms);
            if (v && !v.has(j) || !v && j.startsWith("PBES2")) throw new(0, l.JOSEAlgNotAllowed)('"alg" (Algorithm) Header Parameter value not allowed');
            if (I && !I.has(A)) throw new(0, l.JOSEAlgNotAllowed)('"enc" (Encryption Algorithm) Header Parameter value not allowed');
            if (void 0 !== e.encrypted_key) try {
                a = (0, n.decode)(e.encrypted_key)
            } catch {
                throw new(0, l.JWEInvalid)("Failed to base64url decode the encrypted_key")
            }
            let R = !1;
            "function" == typeof t && (t = await t(s, e), R = !0);
            try {
                i = await (0, h.default)(j, t, a, E, r)
            } catch (e) {
                if (e instanceof TypeError || e instanceof l.JWEInvalid || e instanceof l.JOSENotSupported) throw e;
                i = (0, g.default)(A)
            }
            if (void 0 !== e.iv) try {
                c = (0, n.decode)(e.iv)
            } catch {
                throw new(0, l.JWEInvalid)("Failed to base64url decode the iv")
            }
            if (void 0 !== e.tag) try {
                u = (0, n.decode)(e.tag)
            } catch {
                throw new(0, l.JWEInvalid)("Failed to base64url decode the tag")
            }
            let S = y.encoder.encode(e.protected ?? "");
            f = void 0 !== e.aad ? (0, y.concat)(S, y.encoder.encode("."), y.encoder.encode(e.aad)) : S;
            try {
                m = (0, n.decode)(e.ciphertext)
            } catch {
                throw new(0, l.JWEInvalid)("Failed to base64url decode the ciphertext")
            }
            let T = {
                plaintext: await (0, o.default)(A, i, m, c, u, f)
            };
            if (void 0 !== e.protected && (T.protectedHeader = s), void 0 !== e.aad) try {
                T.additionalAuthenticatedData = (0, n.decode)(e.aad)
            } catch {
                throw new(0, l.JWEInvalid)("Failed to base64url decode the aad")
            }
            return (void 0 !== e.unprotected && (T.sharedUnprotectedHeader = e.unprotected), void 0 !== e.header && (T.unprotectedHeader = e.header), R) ? {
                ...T,
                key: t
            } : T
        }
    }, {
        "../../runtime/base64url.js": "By2uJ",
        "../../runtime/decrypt.js": "iJrMx",
        "../../util/errors.js": "2MROB",
        "../../lib/is_disjoint.js": "kFS6o",
        "../../lib/is_object.js": "kQMV3",
        "../../lib/decrypt_key_management.js": "jBn3k",
        "../../lib/buffer_utils.js": "3OSXK",
        "../../lib/cek.js": "bsH55",
        "../../lib/validate_crit.js": "6XGo3",
        "../../lib/validate_algorithms.js": "6NazR",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    By2uJ: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "encodeBase64", () => i), a.export(r, "encode", () => o), a.export(r, "decodeBase64", () => l), a.export(r, "decode", () => c);
        var n = e("../lib/buffer_utils.js");
        let i = e => {
                let t = e;
                "string" == typeof t && (t = n.encoder.encode(t));
                let r = [];
                for (let e = 0; e < t.length; e += 32768) r.push(String.fromCharCode.apply(null, t.subarray(e, e + 32768)));
                return btoa(r.join(""))
            },
            o = e => i(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_"),
            l = e => {
                let t = atob(e),
                    r = new Uint8Array(t.length);
                for (let e = 0; e < t.length; e++) r[e] = t.charCodeAt(e);
                return r
            },
            c = e => {
                let t = e;
                t instanceof Uint8Array && (t = n.decoder.decode(t)), t = t.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "encoder", () => o), a.export(r, "decoder", () => l), a.export(r, "concat", () => c), a.export(r, "p2s", () => d), a.export(r, "uint64be", () => p), a.export(r, "uint32be", () => f), a.export(r, "lengthAndInput", () => h), a.export(r, "concatKdf", () => y);
        var n = e("../runtime/digest.js"),
            i = a.interopDefault(n);
        let o = new TextEncoder,
            l = new TextDecoder;

        function c(...e) {
            let t = new Uint8Array(e.reduce((e, {
                    length: t
                }) => e + t, 0)),
                r = 0;
            for (let s of e) t.set(s, r), r += s.length;
            return t
        }

        function d(e, t) {
            return c(o.encode(e), new Uint8Array([0]), t)
        }

        function u(e, t, r) {
            if (t < 0 || t >= 0x100000000) throw RangeError(`value must be >= 0 and <= ${0x100000000-1}. Received ${t}`);
            e.set([t >>> 24, t >>> 16, t >>> 8, 255 & t], r)
        }

        function p(e) {
            let t = Math.floor(e / 0x100000000),
                r = new Uint8Array(8);
            return u(r, t, 0), u(r, e % 0x100000000, 4), r
        }

        function f(e) {
            let t = new Uint8Array(4);
            return u(t, e), t
        }

        function h(e) {
            return c(f(e.length), e)
        }
        async function y(e, t, r) {
            let s = Math.ceil((t >> 3) / 32),
                a = new Uint8Array(32 * s);
            for (let t = 0; t < s; t++) {
                let s = new Uint8Array(4 + e.length + r.length);
                s.set(f(t + 1)), s.set(e, 4), s.set(r, 4 + e.length), a.set(await (0, i.default)("sha256", s), 32 * t)
            }
            return a.slice(0, t >> 3)
        }
    }, {
        "../runtime/digest.js": "fpkwe",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    fpkwe: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var n = e("./webcrypto.js"),
            i = a.interopDefault(n);
        r.default = async (e, t) => {
            let r = `SHA-${e.slice(-3)}`;
            return new Uint8Array(await i.default.subtle.digest(r, t))
        }
    }, {
        "./webcrypto.js": "8W0ZQ",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "8W0ZQ": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "isCryptoKey", () => n), r.default = crypto;
        let n = e => e instanceof CryptoKey
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    iJrMx: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var n = e("../lib/buffer_utils.js"),
            i = e("../lib/check_iv_length.js"),
            o = a.interopDefault(i),
            l = e("./check_cek_length.js"),
            c = a.interopDefault(l),
            d = e("./timing_safe_equal.js"),
            u = a.interopDefault(d),
            p = e("../util/errors.js"),
            f = e("./webcrypto.js"),
            h = a.interopDefault(f),
            y = e("../lib/crypto_key.js"),
            m = e("../lib/invalid_key_input.js"),
            g = a.interopDefault(m),
            E = e("./is_key_like.js");
        async function w(e, t, r, s, a, i) {
            let o, l;
            if (!(t instanceof Uint8Array)) throw TypeError((0, g.default)(t, "Uint8Array"));
            let c = parseInt(e.slice(1, 4), 10),
                d = await h.default.subtle.importKey("raw", t.subarray(c >> 3), "AES-CBC", !1, ["decrypt"]),
                f = await h.default.subtle.importKey("raw", t.subarray(0, c >> 3), {
                    hash: `SHA-${c<<1}`,
                    name: "HMAC"
                }, !1, ["sign"]),
                y = (0, n.concat)(i, s, r, (0, n.uint64be)(i.length << 3)),
                m = new Uint8Array((await h.default.subtle.sign("HMAC", f, y)).slice(0, c >> 3));
            try {
                o = (0, u.default)(a, m)
            } catch {}
            if (!o) throw new(0, p.JWEDecryptionFailed);
            try {
                l = new Uint8Array(await h.default.subtle.decrypt({
                    iv: s,
                    name: "AES-CBC"
                }, d, r))
            } catch {}
            if (!l) throw new(0, p.JWEDecryptionFailed);
            return l
        }
        async function j(e, t, r, s, a, i) {
            let o;
            t instanceof Uint8Array ? o = await h.default.subtle.importKey("raw", t, "AES-GCM", !1, ["decrypt"]) : ((0, y.checkEncCryptoKey)(t, e, "decrypt"), o = t);
            try {
                return new Uint8Array(await h.default.subtle.decrypt({
                    additionalData: i,
                    iv: s,
                    name: "AES-GCM",
                    tagLength: 128
                }, o, (0, n.concat)(r, a)))
            } catch {
                throw new(0, p.JWEDecryptionFailed)
            }
        }
        r.default = async (e, t, r, s, a, n) => {
            if (!(0, f.isCryptoKey)(t) && !(t instanceof Uint8Array)) throw TypeError((0, g.default)(t, ...E.types, "Uint8Array"));
            if (!s) throw new(0, p.JWEInvalid)("JWE Initialization Vector missing");
            if (!a) throw new(0, p.JWEInvalid)("JWE Authentication Tag missing");
            switch ((0, o.default)(e, s), e) {
                case "A128CBC-HS256":
                case "A192CBC-HS384":
                case "A256CBC-HS512":
                    return t instanceof Uint8Array && (0, c.default)(t, parseInt(e.slice(-3), 10)), w(e, t, r, s, a, n);
                case "A128GCM":
                case "A192GCM":
                case "A256GCM":
                    return t instanceof Uint8Array && (0, c.default)(t, parseInt(e.slice(1, 4), 10)), j(e, t, r, s, a, n);
                default:
                    throw new(0, p.JOSENotSupported)("Unsupported JWE Content Encryption Algorithm")
            }
        }
    }, {
        "../lib/buffer_utils.js": "3OSXK",
        "../lib/check_iv_length.js": "f0OE0",
        "./check_cek_length.js": "nQ7SI",
        "./timing_safe_equal.js": "9YoIW",
        "../util/errors.js": "2MROB",
        "./webcrypto.js": "8W0ZQ",
        "../lib/crypto_key.js": "8E2Zq",
        "../lib/invalid_key_input.js": "hv0bb",
        "./is_key_like.js": "nxGhD",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    f0OE0: [function(e, t, r, s) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = e("../util/errors.js"),
            n = e("./iv.js");
        r.default = (e, t) => {
            if (t.length << 3 !== (0, n.bitLength)(e)) throw new(0, a.JWEInvalid)("Invalid Initialization Vector length")
        }
    }, {
        "../util/errors.js": "2MROB",
        "./iv.js": "931z5",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "2MROB": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "JOSEError", () => n), a.export(r, "JWTClaimValidationFailed", () => i), a.export(r, "JWTExpired", () => o), a.export(r, "JOSEAlgNotAllowed", () => l), a.export(r, "JOSENotSupported", () => c), a.export(r, "JWEDecryptionFailed", () => d), a.export(r, "JWEInvalid", () => u), a.export(r, "JWSInvalid", () => p), a.export(r, "JWTInvalid", () => f), a.export(r, "JWKInvalid", () => h), a.export(r, "JWKSInvalid", () => y), a.export(r, "JWKSNoMatchingKey", () => m), a.export(r, "JWKSMultipleMatchingKeys", () => g), a.export(r, "JWKSTimeout", () => E), a.export(r, "JWSSignatureVerificationFailed", () => w);
        class n extends Error {
            constructor(e, t) {
                super(e, t), this.code = "ERR_JOSE_GENERIC", this.name = this.constructor.name, Error.captureStackTrace?.(this, this.constructor)
            }
        }
        n.code = "ERR_JOSE_GENERIC";
        class i extends n {
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
        i.code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
        class o extends n {
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
        o.code = "ERR_JWT_EXPIRED";
        class l extends n {
            constructor() {
                super(...arguments), this.code = "ERR_JOSE_ALG_NOT_ALLOWED"
            }
        }
        l.code = "ERR_JOSE_ALG_NOT_ALLOWED";
        class c extends n {
            constructor() {
                super(...arguments), this.code = "ERR_JOSE_NOT_SUPPORTED"
            }
        }
        c.code = "ERR_JOSE_NOT_SUPPORTED";
        class d extends n {
            constructor(e = "decryption operation failed", t) {
                super(e, t), this.code = "ERR_JWE_DECRYPTION_FAILED"
            }
        }
        d.code = "ERR_JWE_DECRYPTION_FAILED";
        class u extends n {
            constructor() {
                super(...arguments), this.code = "ERR_JWE_INVALID"
            }
        }
        u.code = "ERR_JWE_INVALID";
        class p extends n {
            constructor() {
                super(...arguments), this.code = "ERR_JWS_INVALID"
            }
        }
        p.code = "ERR_JWS_INVALID";
        class f extends n {
            constructor() {
                super(...arguments), this.code = "ERR_JWT_INVALID"
            }
        }
        f.code = "ERR_JWT_INVALID";
        class h extends n {
            constructor() {
                super(...arguments), this.code = "ERR_JWK_INVALID"
            }
        }
        h.code = "ERR_JWK_INVALID";
        class y extends n {
            constructor() {
                super(...arguments), this.code = "ERR_JWKS_INVALID"
            }
        }
        y.code = "ERR_JWKS_INVALID";
        class m extends n {
            constructor(e = "no applicable key found in the JSON Web Key Set", t) {
                super(e, t), this.code = "ERR_JWKS_NO_MATCHING_KEY"
            }
        }
        m.code = "ERR_JWKS_NO_MATCHING_KEY";
        class g extends n {
            constructor(e = "multiple matching keys found in the JSON Web Key Set", t) {
                super(e, t), this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS"
            }
        }
        g.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
        class E extends n {
            constructor(e = "request timed out", t) {
                super(e, t), this.code = "ERR_JWKS_TIMEOUT"
            }
        }
        E.code = "ERR_JWKS_TIMEOUT";
        class w extends n {
            constructor(e = "signature verification failed", t) {
                super(e, t), this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED"
            }
        }
        w.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED"
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "931z5": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "bitLength", () => l);
        var n = e("../util/errors.js"),
            i = e("../runtime/random.js"),
            o = a.interopDefault(i);

        function l(e) {
            switch (e) {
                case "A128GCM":
                case "A128GCMKW":
                case "A192GCM":
                case "A192GCMKW":
                case "A256GCM":
                case "A256GCMKW":
                    return 96;
                case "A128CBC-HS256":
                case "A192CBC-HS384":
                case "A256CBC-HS512":
                    return 128;
                default:
                    throw new(0, n.JOSENotSupported)(`Unsupported JWE Algorithm: ${e}`)
            }
        }
        r.default = e => (0, o.default)(new Uint8Array(l(e) >> 3))
    }, {
        "../util/errors.js": "2MROB",
        "../runtime/random.js": "eG44V",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    eG44V: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var n = e("./webcrypto.js"),
            i = a.interopDefault(n);
        r.default = i.default.getRandomValues.bind(i.default)
    }, {
        "./webcrypto.js": "8W0ZQ",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    nQ7SI: [function(e, t, r, s) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = e("../util/errors.js");
        r.default = (e, t) => {
            let r = e.byteLength << 3;
            if (r !== t) throw new(0, a.JWEInvalid)(`Invalid Content Encryption Key length. Expected ${t} bits, got ${r} bits`)
        }
    }, {
        "../util/errors.js": "2MROB",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "9YoIW": [function(e, t, r, s) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = (e, t) => {
            if (!(e instanceof Uint8Array)) throw TypeError("First argument must be a buffer");
            if (!(t instanceof Uint8Array)) throw TypeError("Second argument must be a buffer");
            if (e.length !== t.length) throw TypeError("Input buffers must have the same length");
            let r = e.length,
                s = 0,
                a = -1;
            for (; ++a < r;) s |= e[a] ^ t[a];
            return 0 === s
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "8E2Zq": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");

        function n(e, t = "algorithm.name") {
            return TypeError(`CryptoKey does not support this operation, its ${t} must be ${e}`)
        }

        function i(e, t) {
            return e.name === t
        }

        function o(e) {
            return parseInt(e.name.slice(4), 10)
        }

        function l(e, t) {
            if (t.length && !t.some(t => e.usages.includes(t))) {
                let e = "CryptoKey does not support this operation, its usages must include ";
                if (t.length > 2) {
                    let r = t.pop();
                    e += `one of ${t.join(", ")}, or ${r}.`
                } else 2 === t.length ? e += `one of ${t[0]} or ${t[1]}.` : e += `${t[0]}.`;
                throw TypeError(e)
            }
        }

        function c(e, t, ...r) {
            switch (t) {
                case "HS256":
                case "HS384":
                case "HS512": {
                    if (!i(e.algorithm, "HMAC")) throw n("HMAC");
                    let r = parseInt(t.slice(2), 10);
                    if (o(e.algorithm.hash) !== r) throw n(`SHA-${r}`, "algorithm.hash");
                    break
                }
                case "RS256":
                case "RS384":
                case "RS512": {
                    if (!i(e.algorithm, "RSASSA-PKCS1-v1_5")) throw n("RSASSA-PKCS1-v1_5");
                    let r = parseInt(t.slice(2), 10);
                    if (o(e.algorithm.hash) !== r) throw n(`SHA-${r}`, "algorithm.hash");
                    break
                }
                case "PS256":
                case "PS384":
                case "PS512": {
                    if (!i(e.algorithm, "RSA-PSS")) throw n("RSA-PSS");
                    let r = parseInt(t.slice(2), 10);
                    if (o(e.algorithm.hash) !== r) throw n(`SHA-${r}`, "algorithm.hash");
                    break
                }
                case "EdDSA":
                    if ("Ed25519" !== e.algorithm.name && "Ed448" !== e.algorithm.name) throw n("Ed25519 or Ed448");
                    break;
                case "Ed25519":
                    if (!i(e.algorithm, "Ed25519")) throw n("Ed25519");
                    break;
                case "ES256":
                case "ES384":
                case "ES512": {
                    if (!i(e.algorithm, "ECDSA")) throw n("ECDSA");
                    let r = function(e) {
                        switch (e) {
                            case "ES256":
                                return "P-256";
                            case "ES384":
                                return "P-384";
                            case "ES512":
                                return "P-521";
                            default:
                                throw Error("unreachable")
                        }
                    }(t);
                    if (e.algorithm.namedCurve !== r) throw n(r, "algorithm.namedCurve");
                    break
                }
                default:
                    throw TypeError("CryptoKey does not support this operation")
            }
            l(e, r)
        }

        function d(e, t, ...r) {
            switch (t) {
                case "A128GCM":
                case "A192GCM":
                case "A256GCM": {
                    if (!i(e.algorithm, "AES-GCM")) throw n("AES-GCM");
                    let r = parseInt(t.slice(1, 4), 10);
                    if (e.algorithm.length !== r) throw n(r, "algorithm.length");
                    break
                }
                case "A128KW":
                case "A192KW":
                case "A256KW": {
                    if (!i(e.algorithm, "AES-KW")) throw n("AES-KW");
                    let r = parseInt(t.slice(1, 4), 10);
                    if (e.algorithm.length !== r) throw n(r, "algorithm.length");
                    break
                }
                case "ECDH":
                    switch (e.algorithm.name) {
                        case "ECDH":
                        case "X25519":
                        case "X448":
                            break;
                        default:
                            throw n("ECDH, X25519, or X448")
                    }
                    break;
                case "PBES2-HS256+A128KW":
                case "PBES2-HS384+A192KW":
                case "PBES2-HS512+A256KW":
                    if (!i(e.algorithm, "PBKDF2")) throw n("PBKDF2");
                    break;
                case "RSA-OAEP":
                case "RSA-OAEP-256":
                case "RSA-OAEP-384":
                case "RSA-OAEP-512": {
                    if (!i(e.algorithm, "RSA-OAEP")) throw n("RSA-OAEP");
                    let r = parseInt(t.slice(9), 10) || 1;
                    if (o(e.algorithm.hash) !== r) throw n(`SHA-${r}`, "algorithm.hash");
                    break
                }
                default:
                    throw TypeError("CryptoKey does not support this operation")
            }
            l(e, r)
        }
        a.defineInteropFlag(r), a.export(r, "checkSigCryptoKey", () => c), a.export(r, "checkEncCryptoKey", () => d)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    hv0bb: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");

        function n(e, t, ...r) {
            if ((r = r.filter(Boolean)).length > 2) {
                let t = r.pop();
                e += `one of type ${r.join(", ")}, or ${t}.`
            } else 2 === r.length ? e += `one of type ${r[0]} or ${r[1]}.` : e += `of type ${r[0]}.`;
            return null == t ? e += ` Received ${t}` : "function" == typeof t && t.name ? e += ` Received function ${t.name}` : "object" == typeof t && null != t && t.constructor?.name && (e += ` Received an instance of ${t.constructor.name}`), e
        }

        function i(e, t, ...r) {
            return n(`Key for the ${e} algorithm must be `, t, ...r)
        }
        a.defineInteropFlag(r), a.export(r, "withAlg", () => i), r.default = (e, ...t) => n("Key must be ", e, ...t)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    nxGhD: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "types", () => i);
        var n = e("./webcrypto.js");
        r.default = e => !!(0, n.isCryptoKey)(e) || e?.[Symbol.toStringTag] === "KeyObject";
        let i = ["CryptoKey"]
    }, {
        "./webcrypto.js": "8W0ZQ",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    kFS6o: [function(e, t, r, s) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = (...e) => {
            let t, r = e.filter(Boolean);
            if (0 === r.length || 1 === r.length) return !0;
            for (let e of r) {
                let r = Object.keys(e);
                if (!t || 0 === t.size) {
                    t = new Set(r);
                    continue
                }
                for (let e of r) {
                    if (t.has(e)) return !1;
                    t.add(e)
                }
            }
            return !0
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    kQMV3: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");

        function n(e) {
            if ("object" != typeof e || null === e || "[object Object]" !== Object.prototype.toString.call(e)) return !1;
            if (null === Object.getPrototypeOf(e)) return !0;
            let t = e;
            for (; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
            return Object.getPrototypeOf(e) === t
        }
        a.defineInteropFlag(r), a.export(r, "default", () => n)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    jBn3k: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var n = e("../runtime/aeskw.js"),
            i = e("../runtime/ecdhes.js"),
            o = e("../runtime/pbes2kw.js"),
            l = e("../runtime/rsaes.js"),
            c = e("../runtime/base64url.js"),
            d = e("../runtime/normalize_key.js"),
            u = a.interopDefault(d),
            p = e("../util/errors.js"),
            f = e("../lib/cek.js"),
            h = e("../key/import.js"),
            y = e("./check_key_type.js"),
            m = a.interopDefault(y),
            g = e("./is_object.js"),
            E = a.interopDefault(g),
            w = e("./aesgcmkw.js");
        r.default = async function(e, t, r, s, a) {
            switch ((0, m.default)(e, t, "decrypt"), t = await u.default.normalizePrivateKey?.(t, e) || t, e) {
                case "dir":
                    if (void 0 !== r) throw new(0, p.JWEInvalid)("Encountered unexpected JWE Encrypted Key");
                    return t;
                case "ECDH-ES":
                    if (void 0 !== r) throw new(0, p.JWEInvalid)("Encountered unexpected JWE Encrypted Key");
                case "ECDH-ES+A128KW":
                case "ECDH-ES+A192KW":
                case "ECDH-ES+A256KW": {
                    let a, o;
                    if (!(0, E.default)(s.epk)) throw new(0, p.JWEInvalid)('JOSE Header "epk" (Ephemeral Public Key) missing or invalid');
                    if (!i.ecdhAllowed(t)) throw new(0, p.JOSENotSupported)("ECDH with the provided key is not allowed or not supported by your javascript runtime");
                    let l = await (0, h.importJWK)(s.epk, e);
                    if (void 0 !== s.apu) {
                        if ("string" != typeof s.apu) throw new(0, p.JWEInvalid)('JOSE Header "apu" (Agreement PartyUInfo) invalid');
                        try {
                            a = (0, c.decode)(s.apu)
                        } catch {
                            throw new(0, p.JWEInvalid)("Failed to base64url decode the apu")
                        }
                    }
                    if (void 0 !== s.apv) {
                        if ("string" != typeof s.apv) throw new(0, p.JWEInvalid)('JOSE Header "apv" (Agreement PartyVInfo) invalid');
                        try {
                            o = (0, c.decode)(s.apv)
                        } catch {
                            throw new(0, p.JWEInvalid)("Failed to base64url decode the apv")
                        }
                    }
                    let d = await i.deriveKey(l, t, "ECDH-ES" === e ? s.enc : e, "ECDH-ES" === e ? (0, f.bitLength)(s.enc) : parseInt(e.slice(-5, -2), 10), a, o);
                    if ("ECDH-ES" === e) return d;
                    if (void 0 === r) throw new(0, p.JWEInvalid)("JWE Encrypted Key missing");
                    return (0, n.unwrap)(e.slice(-6), d, r)
                }
                case "RSA1_5":
                case "RSA-OAEP":
                case "RSA-OAEP-256":
                case "RSA-OAEP-384":
                case "RSA-OAEP-512":
                    if (void 0 === r) throw new(0, p.JWEInvalid)("JWE Encrypted Key missing");
                    return (0, l.decrypt)(e, t, r);
                case "PBES2-HS256+A128KW":
                case "PBES2-HS384+A192KW":
                case "PBES2-HS512+A256KW": {
                    let n;
                    if (void 0 === r) throw new(0, p.JWEInvalid)("JWE Encrypted Key missing");
                    if ("number" != typeof s.p2c) throw new(0, p.JWEInvalid)('JOSE Header "p2c" (PBES2 Count) missing or invalid');
                    let i = a?.maxPBES2Count || 1e4;
                    if (s.p2c > i) throw new(0, p.JWEInvalid)('JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds');
                    if ("string" != typeof s.p2s) throw new(0, p.JWEInvalid)('JOSE Header "p2s" (PBES2 Salt) missing or invalid');
                    try {
                        n = (0, c.decode)(s.p2s)
                    } catch {
                        throw new(0, p.JWEInvalid)("Failed to base64url decode the p2s")
                    }
                    return (0, o.decrypt)(e, t, r, s.p2c, n)
                }
                case "A128KW":
                case "A192KW":
                case "A256KW":
                    if (void 0 === r) throw new(0, p.JWEInvalid)("JWE Encrypted Key missing");
                    return (0, n.unwrap)(e, t, r);
                case "A128GCMKW":
                case "A192GCMKW":
                case "A256GCMKW": {
                    let a, n;
                    if (void 0 === r) throw new(0, p.JWEInvalid)("JWE Encrypted Key missing");
                    if ("string" != typeof s.iv) throw new(0, p.JWEInvalid)('JOSE Header "iv" (Initialization Vector) missing or invalid');
                    if ("string" != typeof s.tag) throw new(0, p.JWEInvalid)('JOSE Header "tag" (Authentication Tag) missing or invalid');
                    try {
                        a = (0, c.decode)(s.iv)
                    } catch {
                        throw new(0, p.JWEInvalid)("Failed to base64url decode the iv")
                    }
                    try {
                        n = (0, c.decode)(s.tag)
                    } catch {
                        throw new(0, p.JWEInvalid)("Failed to base64url decode the tag")
                    }
                    return (0, w.unwrap)(e, t, r, a, n)
                }
                default:
                    throw new(0, p.JOSENotSupported)('Invalid or unsupported "alg" (JWE Algorithm) header value')
            }
        }
    }, {
        "../runtime/aeskw.js": "pUGmP",
        "../runtime/ecdhes.js": "aTdif",
        "../runtime/pbes2kw.js": "6uLsN",
        "../runtime/rsaes.js": "6nFVi",
        "../runtime/base64url.js": "By2uJ",
        "../runtime/normalize_key.js": "2snrQ",
        "../util/errors.js": "2MROB",
        "../lib/cek.js": "bsH55",
        "../key/import.js": "azICy",
        "./check_key_type.js": "fyQAE",
        "./is_object.js": "kQMV3",
        "./aesgcmkw.js": "ugaG7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    pUGmP: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "wrap", () => y), a.export(r, "unwrap", () => m);
        var n = e("./bogus.js"),
            i = a.interopDefault(n),
            o = e("./webcrypto.js"),
            l = a.interopDefault(o),
            c = e("../lib/crypto_key.js"),
            d = e("../lib/invalid_key_input.js"),
            u = a.interopDefault(d),
            p = e("./is_key_like.js");

        function f(e, t) {
            if (e.algorithm.length !== parseInt(t.slice(1, 4), 10)) throw TypeError(`Invalid key size for alg: ${t}`)
        }

        function h(e, t, r) {
            if ((0, o.isCryptoKey)(e)) return (0, c.checkEncCryptoKey)(e, t, r), e;
            if (e instanceof Uint8Array) return l.default.subtle.importKey("raw", e, "AES-KW", !0, [r]);
            throw TypeError((0, u.default)(e, ...p.types, "Uint8Array"))
        }
        let y = async (e, t, r) => {
            let s = await h(t, e, "wrapKey");
            f(s, e);
            let a = await l.default.subtle.importKey("raw", r, ...i.default);
            return new Uint8Array(await l.default.subtle.wrapKey("raw", a, s, "AES-KW"))
        }, m = async (e, t, r) => {
            let s = await h(t, e, "unwrapKey");
            f(s, e);
            let a = await l.default.subtle.unwrapKey("raw", r, s, "AES-KW", ...i.default);
            return new Uint8Array(await l.default.subtle.exportKey("raw", a))
        }
    }, {
        "./bogus.js": "82XGp",
        "./webcrypto.js": "8W0ZQ",
        "../lib/crypto_key.js": "8E2Zq",
        "../lib/invalid_key_input.js": "hv0bb",
        "./is_key_like.js": "nxGhD",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "82XGp": [function(e, t, r, s) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = [{
            hash: "SHA-256",
            name: "HMAC"
        }, !0, ["sign"]]
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    aTdif: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "deriveKey", () => p), a.export(r, "generateEpk", () => f), a.export(r, "ecdhAllowed", () => h);
        var n = e("../lib/buffer_utils.js"),
            i = e("./webcrypto.js"),
            o = a.interopDefault(i),
            l = e("../lib/crypto_key.js"),
            c = e("../lib/invalid_key_input.js"),
            d = a.interopDefault(c),
            u = e("./is_key_like.js");
        async function p(e, t, r, s, a = new Uint8Array(0), c = new Uint8Array(0)) {
            let f;
            if (!(0, i.isCryptoKey)(e)) throw TypeError((0, d.default)(e, ...u.types));
            if ((0, l.checkEncCryptoKey)(e, "ECDH"), !(0, i.isCryptoKey)(t)) throw TypeError((0, d.default)(t, ...u.types));
            (0, l.checkEncCryptoKey)(t, "ECDH", "deriveBits");
            let h = (0, n.concat)((0, n.lengthAndInput)(n.encoder.encode(r)), (0, n.lengthAndInput)(a), (0, n.lengthAndInput)(c), (0, n.uint32be)(s));
            f = "X25519" === e.algorithm.name ? 256 : "X448" === e.algorithm.name ? 448 : Math.ceil(parseInt(e.algorithm.namedCurve.substr(-3), 10) / 8) << 3;
            let y = new Uint8Array(await o.default.subtle.deriveBits({
                name: e.algorithm.name,
                public: e
            }, t, f));
            return (0, n.concatKdf)(y, s, h)
        }
        async function f(e) {
            if (!(0, i.isCryptoKey)(e)) throw TypeError((0, d.default)(e, ...u.types));
            return o.default.subtle.generateKey(e.algorithm, !0, ["deriveBits"])
        }

        function h(e) {
            if (!(0, i.isCryptoKey)(e)) throw TypeError((0, d.default)(e, ...u.types));
            return ["P-256", "P-384", "P-521"].includes(e.algorithm.namedCurve) || "X25519" === e.algorithm.name || "X448" === e.algorithm.name
        }
    }, {
        "../lib/buffer_utils.js": "3OSXK",
        "./webcrypto.js": "8W0ZQ",
        "../lib/crypto_key.js": "8E2Zq",
        "../lib/invalid_key_input.js": "hv0bb",
        "./is_key_like.js": "nxGhD",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "6uLsN": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "encrypt", () => w), a.export(r, "decrypt", () => j);
        var n = e("./random.js"),
            i = a.interopDefault(n),
            o = e("../lib/buffer_utils.js"),
            l = e("./base64url.js"),
            c = e("./aeskw.js"),
            d = e("../lib/check_p2s.js"),
            u = a.interopDefault(d),
            p = e("./webcrypto.js"),
            f = a.interopDefault(p),
            h = e("../lib/crypto_key.js"),
            y = e("../lib/invalid_key_input.js"),
            m = a.interopDefault(y),
            g = e("./is_key_like.js");
        async function E(e, t, r, s) {
            (0, u.default)(e);
            let a = (0, o.p2s)(t, e),
                n = parseInt(t.slice(13, 16), 10),
                i = {
                    hash: `SHA-${t.slice(8,11)}`,
                    iterations: r,
                    name: "PBKDF2",
                    salt: a
                },
                l = await
            function(e, t) {
                if (e instanceof Uint8Array) return f.default.subtle.importKey("raw", e, "PBKDF2", !1, ["deriveBits"]);
                if ((0, p.isCryptoKey)(e)) return (0, h.checkEncCryptoKey)(e, t, "deriveBits", "deriveKey"), e;
                throw TypeError((0, m.default)(e, ...g.types, "Uint8Array"))
            }(s, t);
            if (l.usages.includes("deriveBits")) return new Uint8Array(await f.default.subtle.deriveBits(i, l, n));
            if (l.usages.includes("deriveKey")) return f.default.subtle.deriveKey(i, l, {
                length: n,
                name: "AES-KW"
            }, !1, ["wrapKey", "unwrapKey"]);
            throw TypeError('PBKDF2 key "usages" must include "deriveBits" or "deriveKey"')
        }
        let w = async (e, t, r, s = 2048, a = (0, i.default)(new Uint8Array(16))) => {
            let n = await E(a, e, s, t);
            return {
                encryptedKey: await (0, c.wrap)(e.slice(-6), n, r),
                p2c: s,
                p2s: (0, l.encode)(a)
            }
        }, j = async (e, t, r, s, a) => {
            let n = await E(a, e, s, t);
            return (0, c.unwrap)(e.slice(-6), n, r)
        }
    }, {
        "./random.js": "eG44V",
        "../lib/buffer_utils.js": "3OSXK",
        "./base64url.js": "By2uJ",
        "./aeskw.js": "pUGmP",
        "../lib/check_p2s.js": "6deeA",
        "./webcrypto.js": "8W0ZQ",
        "../lib/crypto_key.js": "8E2Zq",
        "../lib/invalid_key_input.js": "hv0bb",
        "./is_key_like.js": "nxGhD",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "6deeA": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var n = e("../util/errors.js");

        function i(e) {
            if (!(e instanceof Uint8Array) || e.length < 8) throw new(0, n.JWEInvalid)("PBES2 Salt Input must be 8 or more octets")
        }
    }, {
        "../util/errors.js": "2MROB",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "6nFVi": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "encrypt", () => g), a.export(r, "decrypt", () => E);
        var n = e("./subtle_rsaes.js"),
            i = a.interopDefault(n),
            o = e("./bogus.js"),
            l = a.interopDefault(o),
            c = e("./webcrypto.js"),
            d = a.interopDefault(c),
            u = e("../lib/crypto_key.js"),
            p = e("./check_key_length.js"),
            f = a.interopDefault(p),
            h = e("../lib/invalid_key_input.js"),
            y = a.interopDefault(h),
            m = e("./is_key_like.js");
        let g = async (e, t, r) => {
            if (!(0, c.isCryptoKey)(t)) throw TypeError((0, y.default)(t, ...m.types));
            if ((0, u.checkEncCryptoKey)(t, e, "encrypt", "wrapKey"), (0, f.default)(e, t), t.usages.includes("encrypt")) return new Uint8Array(await d.default.subtle.encrypt((0, i.default)(e), t, r));
            if (t.usages.includes("wrapKey")) {
                let s = await d.default.subtle.importKey("raw", r, ...l.default);
                return new Uint8Array(await d.default.subtle.wrapKey("raw", s, t, (0, i.default)(e)))
            }
            throw TypeError('RSA-OAEP key "usages" must include "encrypt" or "wrapKey" for this operation')
        }, E = async (e, t, r) => {
            if (!(0, c.isCryptoKey)(t)) throw TypeError((0, y.default)(t, ...m.types));
            if ((0, u.checkEncCryptoKey)(t, e, "decrypt", "unwrapKey"), (0, f.default)(e, t), t.usages.includes("decrypt")) return new Uint8Array(await d.default.subtle.decrypt((0, i.default)(e), t, r));
            if (t.usages.includes("unwrapKey")) {
                let s = await d.default.subtle.unwrapKey("raw", r, t, (0, i.default)(e), ...l.default);
                return new Uint8Array(await d.default.subtle.exportKey("raw", s))
            }
            throw TypeError('RSA-OAEP key "usages" must include "decrypt" or "unwrapKey" for this operation')
        }
    }, {
        "./subtle_rsaes.js": "aJk2b",
        "./bogus.js": "82XGp",
        "./webcrypto.js": "8W0ZQ",
        "../lib/crypto_key.js": "8E2Zq",
        "./check_key_length.js": "c7se2",
        "../lib/invalid_key_input.js": "hv0bb",
        "./is_key_like.js": "nxGhD",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    aJk2b: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var n = e("../util/errors.js");

        function i(e) {
            switch (e) {
                case "RSA-OAEP":
                case "RSA-OAEP-256":
                case "RSA-OAEP-384":
                case "RSA-OAEP-512":
                    return "RSA-OAEP";
                default:
                    throw new(0, n.JOSENotSupported)(`alg ${e} is not supported either by JOSE or your javascript runtime`)
            }
        }
    }, {
        "../util/errors.js": "2MROB",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    c7se2: [function(e, t, r, s) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = (e, t) => {
            if (e.startsWith("RS") || e.startsWith("PS")) {
                let {
                    modulusLength: r
                } = t.algorithm;
                if ("number" != typeof r || r < 2048) throw TypeError(`${e} requires key modulusLength to be 2048 bits or larger`)
            }
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "2snrQ": [function(e, t, r, s) {
        let a, n;
        var i = e("@parcel/transformer-js/src/esmodule-helpers.js");
        i.defineInteropFlag(r);
        var o = e("../lib/is_jwk.js"),
            l = e("./base64url.js"),
            c = e("./jwk_to_key.js"),
            d = i.interopDefault(c);
        let u = e => (0, l.decode)(e),
            p = e => e?.[Symbol.toStringTag] === "KeyObject",
            f = async (e, t, r, s, a = !1) => {
                let n = e.get(t);
                if (n?.[s]) return n[s];
                let i = await (0, d.default)({
                    ...r,
                    alg: s
                });
                return a && Object.freeze(t), n ? n[s] = i : e.set(t, {
                    [s]: i
                }), i
            };
        r.default = {
            normalizePublicKey: (e, t) => {
                if (p(e)) {
                    let r = e.export({
                        format: "jwk"
                    });
                    return (delete r.d, delete r.dp, delete r.dq, delete r.p, delete r.q, delete r.qi, r.k) ? u(r.k) : (n || (n = new WeakMap), f(n, e, r, t))
                }
                return (0, o.isJWK)(e) ? e.k ? (0, l.decode)(e.k) : (n || (n = new WeakMap), f(n, e, e, t, !0)) : e
            },
            normalizePrivateKey: (e, t) => {
                if (p(e)) {
                    let r = e.export({
                        format: "jwk"
                    });
                    return r.k ? u(r.k) : (a || (a = new WeakMap), f(a, e, r, t))
                }
                return (0, o.isJWK)(e) ? e.k ? (0, l.decode)(e.k) : (a || (a = new WeakMap), f(a, e, e, t, !0)) : e
            }
        }
    }, {
        "../lib/is_jwk.js": "2dmgx",
        "./base64url.js": "By2uJ",
        "./jwk_to_key.js": "ayvt7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "2dmgx": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "isJWK", () => o), a.export(r, "isPrivateJWK", () => l), a.export(r, "isPublicJWK", () => c), a.export(r, "isSecretJWK", () => d);
        var n = e("./is_object.js"),
            i = a.interopDefault(n);

        function o(e) {
            return (0, i.default)(e) && "string" == typeof e.kty
        }

        function l(e) {
            return "oct" !== e.kty && "string" == typeof e.d
        }

        function c(e) {
            return "oct" !== e.kty && void 0 === e.d
        }

        function d(e) {
            return o(e) && "oct" === e.kty && "string" == typeof e.k
        }
    }, {
        "./is_object.js": "kQMV3",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    ayvt7: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var n = e("./webcrypto.js"),
            i = a.interopDefault(n),
            o = e("../util/errors.js");
        r.default = async e => {
            if (!e.alg) throw TypeError('"alg" argument is required when "jwk.alg" is not present');
            let {
                algorithm: t,
                keyUsages: r
            } = function(e) {
                let t, r;
                switch (e.kty) {
                    case "RSA":
                        switch (e.alg) {
                            case "PS256":
                            case "PS384":
                            case "PS512":
                                t = {
                                    name: "RSA-PSS",
                                    hash: `SHA-${e.alg.slice(-3)}`
                                }, r = e.d ? ["sign"] : ["verify"];
                                break;
                            case "RS256":
                            case "RS384":
                            case "RS512":
                                t = {
                                    name: "RSASSA-PKCS1-v1_5",
                                    hash: `SHA-${e.alg.slice(-3)}`
                                }, r = e.d ? ["sign"] : ["verify"];
                                break;
                            case "RSA-OAEP":
                            case "RSA-OAEP-256":
                            case "RSA-OAEP-384":
                            case "RSA-OAEP-512":
                                t = {
                                    name: "RSA-OAEP",
                                    hash: `SHA-${parseInt(e.alg.slice(-3),10)||1}`
                                }, r = e.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
                                break;
                            default:
                                throw new(0, o.JOSENotSupported)('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                        }
                        break;
                    case "EC":
                        switch (e.alg) {
                            case "ES256":
                                t = {
                                    name: "ECDSA",
                                    namedCurve: "P-256"
                                }, r = e.d ? ["sign"] : ["verify"];
                                break;
                            case "ES384":
                                t = {
                                    name: "ECDSA",
                                    namedCurve: "P-384"
                                }, r = e.d ? ["sign"] : ["verify"];
                                break;
                            case "ES512":
                                t = {
                                    name: "ECDSA",
                                    namedCurve: "P-521"
                                }, r = e.d ? ["sign"] : ["verify"];
                                break;
                            case "ECDH-ES":
                            case "ECDH-ES+A128KW":
                            case "ECDH-ES+A192KW":
                            case "ECDH-ES+A256KW":
                                t = {
                                    name: "ECDH",
                                    namedCurve: e.crv
                                }, r = e.d ? ["deriveBits"] : [];
                                break;
                            default:
                                throw new(0, o.JOSENotSupported)('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                        }
                        break;
                    case "OKP":
                        switch (e.alg) {
                            case "Ed25519":
                                t = {
                                    name: "Ed25519"
                                }, r = e.d ? ["sign"] : ["verify"];
                                break;
                            case "EdDSA":
                                t = {
                                    name: e.crv
                                }, r = e.d ? ["sign"] : ["verify"];
                                break;
                            case "ECDH-ES":
                            case "ECDH-ES+A128KW":
                            case "ECDH-ES+A192KW":
                            case "ECDH-ES+A256KW":
                                t = {
                                    name: e.crv
                                }, r = e.d ? ["deriveBits"] : [];
                                break;
                            default:
                                throw new(0, o.JOSENotSupported)('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                        }
                        break;
                    default:
                        throw new(0, o.JOSENotSupported)('Invalid or unsupported JWK "kty" (Key Type) Parameter value')
                }
                return {
                    algorithm: t,
                    keyUsages: r
                }
            }(e), s = [t, e.ext ?? !1, e.key_ops ?? r], a = {
                ...e
            };
            return delete a.alg, delete a.use, i.default.subtle.importKey("jwk", a, ...s)
        }
    }, {
        "./webcrypto.js": "8W0ZQ",
        "../util/errors.js": "2MROB",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    bsH55: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "bitLength", () => l);
        var n = e("../util/errors.js"),
            i = e("../runtime/random.js"),
            o = a.interopDefault(i);

        function l(e) {
            switch (e) {
                case "A128GCM":
                    return 128;
                case "A192GCM":
                    return 192;
                case "A256GCM":
                case "A128CBC-HS256":
                    return 256;
                case "A192CBC-HS384":
                    return 384;
                case "A256CBC-HS512":
                    return 512;
                default:
                    throw new(0, n.JOSENotSupported)(`Unsupported JWE Algorithm: ${e}`)
            }
        }
        r.default = e => (0, o.default)(new Uint8Array(l(e) >> 3))
    }, {
        "../util/errors.js": "2MROB",
        "../runtime/random.js": "eG44V",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    azICy: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "importSPKI", () => p), a.export(r, "importX509", () => f), a.export(r, "importPKCS8", () => h), a.export(r, "importJWK", () => y);
        var n = e("../runtime/base64url.js"),
            i = e("../runtime/asn1.js"),
            o = e("../runtime/jwk_to_key.js"),
            l = a.interopDefault(o),
            c = e("../util/errors.js"),
            d = e("../lib/is_object.js"),
            u = a.interopDefault(d);
        async function p(e, t, r) {
            if ("string" != typeof e || 0 !== e.indexOf("-----BEGIN PUBLIC KEY-----")) throw TypeError('"spki" must be SPKI formatted string');
            return (0, i.fromSPKI)(e, t, r)
        }
        async function f(e, t, r) {
            if ("string" != typeof e || 0 !== e.indexOf("-----BEGIN CERTIFICATE-----")) throw TypeError('"x509" must be X.509 formatted string');
            return (0, i.fromX509)(e, t, r)
        }
        async function h(e, t, r) {
            if ("string" != typeof e || 0 !== e.indexOf("-----BEGIN PRIVATE KEY-----")) throw TypeError('"pkcs8" must be PKCS#8 formatted string');
            return (0, i.fromPKCS8)(e, t, r)
        }
        async function y(e, t) {
            if (!(0, u.default)(e)) throw TypeError("JWK must be an object");
            switch (t || (t = e.alg), e.kty) {
                case "oct":
                    if ("string" != typeof e.k || !e.k) throw TypeError('missing "k" (Key Value) Parameter value');
                    return (0, n.decode)(e.k);
                case "RSA":
                    if ("oth" in e && void 0 !== e.oth) throw new(0, c.JOSENotSupported)('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
                case "EC":
                case "OKP":
                    return (0, l.default)({
                        ...e,
                        alg: t
                    });
                default:
                    throw new(0, c.JOSENotSupported)('Unsupported "kty" (Key Type) Parameter value')
            }
        }
    }, {
        "../runtime/base64url.js": "By2uJ",
        "../runtime/asn1.js": "16Zke",
        "../runtime/jwk_to_key.js": "ayvt7",
        "../util/errors.js": "2MROB",
        "../lib/is_object.js": "kQMV3",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "16Zke": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "toSPKI", () => y), a.export(r, "toPKCS8", () => m), a.export(r, "fromPKCS8", () => j), a.export(r, "fromSPKI", () => b), a.export(r, "fromX509", () => I);
        var n = e("./webcrypto.js"),
            i = a.interopDefault(n),
            o = e("../lib/invalid_key_input.js"),
            l = a.interopDefault(o),
            c = e("./base64url.js"),
            d = e("../lib/format_pem.js"),
            u = a.interopDefault(d),
            p = e("../util/errors.js"),
            f = e("./is_key_like.js");
        let h = async (e, t, r) => {
            if (!(0, n.isCryptoKey)(r)) throw TypeError((0, l.default)(r, ...f.types));
            if (!r.extractable) throw TypeError("CryptoKey is not extractable");
            if (r.type !== e) throw TypeError(`key is not a ${e} key`);
            return (0, u.default)((0, c.encodeBase64)(new Uint8Array(await i.default.subtle.exportKey(t, r))), `${e.toUpperCase()} KEY`)
        }, y = e => h("public", "spki", e), m = e => h("private", "pkcs8", e), g = (e, t, r = 0) => {
            0 === r && (t.unshift(t.length), t.unshift(6));
            let s = e.indexOf(t[0], r);
            if (-1 === s) return !1;
            let a = e.subarray(s, s + t.length);
            return a.length === t.length && (a.every((e, r) => e === t[r]) || g(e, t, s + 1))
        }, E = e => {
            switch (!0) {
                case g(e, [42, 134, 72, 206, 61, 3, 1, 7]):
                    return "P-256";
                case g(e, [43, 129, 4, 0, 34]):
                    return "P-384";
                case g(e, [43, 129, 4, 0, 35]):
                    return "P-521";
                case g(e, [43, 101, 110]):
                    return "X25519";
                case g(e, [43, 101, 111]):
                    return "X448";
                case g(e, [43, 101, 112]):
                    return "Ed25519";
                case g(e, [43, 101, 113]):
                    return "Ed448";
                default:
                    throw new(0, p.JOSENotSupported)("Invalid or unsupported EC Key Curve or OKP Key Sub Type")
            }
        }, w = async (e, t, r, s, a) => {
            let n, o, l = new Uint8Array(atob(r.replace(e, "")).split("").map(e => e.charCodeAt(0))),
                c = "spki" === t;
            switch (s) {
                case "PS256":
                case "PS384":
                case "PS512":
                    n = {
                        name: "RSA-PSS",
                        hash: `SHA-${s.slice(-3)}`
                    }, o = c ? ["verify"] : ["sign"];
                    break;
                case "RS256":
                case "RS384":
                case "RS512":
                    n = {
                        name: "RSASSA-PKCS1-v1_5",
                        hash: `SHA-${s.slice(-3)}`
                    }, o = c ? ["verify"] : ["sign"];
                    break;
                case "RSA-OAEP":
                case "RSA-OAEP-256":
                case "RSA-OAEP-384":
                case "RSA-OAEP-512":
                    n = {
                        name: "RSA-OAEP",
                        hash: `SHA-${parseInt(s.slice(-3),10)||1}`
                    }, o = c ? ["encrypt", "wrapKey"] : ["decrypt", "unwrapKey"];
                    break;
                case "ES256":
                    n = {
                        name: "ECDSA",
                        namedCurve: "P-256"
                    }, o = c ? ["verify"] : ["sign"];
                    break;
                case "ES384":
                    n = {
                        name: "ECDSA",
                        namedCurve: "P-384"
                    }, o = c ? ["verify"] : ["sign"];
                    break;
                case "ES512":
                    n = {
                        name: "ECDSA",
                        namedCurve: "P-521"
                    }, o = c ? ["verify"] : ["sign"];
                    break;
                case "ECDH-ES":
                case "ECDH-ES+A128KW":
                case "ECDH-ES+A192KW":
                case "ECDH-ES+A256KW": {
                    let e = E(l);
                    n = e.startsWith("P-") ? {
                        name: "ECDH",
                        namedCurve: e
                    } : {
                        name: e
                    }, o = c ? [] : ["deriveBits"];
                    break
                }
                case "Ed25519":
                    n = {
                        name: "Ed25519"
                    }, o = c ? ["verify"] : ["sign"];
                    break;
                case "EdDSA":
                    n = {
                        name: E(l)
                    }, o = c ? ["verify"] : ["sign"];
                    break;
                default:
                    throw new(0, p.JOSENotSupported)('Invalid or unsupported "alg" (Algorithm) value')
            }
            return i.default.subtle.importKey(t, l, n, a?.extractable ?? !1, o)
        }, j = (e, t, r) => w(/(?:-----(?:BEGIN|END) PRIVATE KEY-----|\s)/g, "pkcs8", e, t, r), b = (e, t, r) => w(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g, "spki", e, t, r);

        function A(e) {
            let t = [],
                r = 0;
            for (; r < e.length;) {
                let s = v(e.subarray(r));
                t.push(s), r += s.byteLength
            }
            return t
        }

        function v(e) {
            let t = 0,
                r = 31 & e[0];
            if (t++, 31 === r) {
                for (r = 0; e[t] >= 128;) r = 128 * r + e[t] - 128, t++;
                r = 128 * r + e[t] - 128, t++
            }
            let s = 0;
            if (e[t] < 128) s = e[t], t++;
            else if (128 === s) {
                for (s = 0; 0 !== e[t + s] || 0 !== e[t + s + 1];) {
                    if (s > e.byteLength) throw TypeError("invalid indefinite form length");
                    s++
                }
                let r = t + s + 2;
                return {
                    byteLength: r,
                    contents: e.subarray(t, t + s),
                    raw: e.subarray(0, r)
                }
            } else {
                let r = 127 & e[t];
                t++, s = 0;
                for (let a = 0; a < r; a++) s = 256 * s + e[t], t++
            }
            let a = t + s;
            return {
                byteLength: a,
                contents: e.subarray(t, a),
                raw: e.subarray(0, a)
            }
        }
        let I = (e, t, r) => {
            let s;
            try {
                s = function(e) {
                    let t = e.replace(/(?:-----(?:BEGIN|END) CERTIFICATE-----|\s)/g, ""),
                        r = (0, c.decodeBase64)(t);
                    return (0, u.default)(function(e) {
                        let t = A(A(v(e).contents)[0].contents);
                        return (0, c.encodeBase64)(t[160 === t[0].raw[0] ? 6 : 5].raw)
                    }(r), "PUBLIC KEY")
                }(e)
            } catch (e) {
                throw TypeError("Failed to parse the X.509 certificate", {
                    cause: e
                })
            }
            return b(s, t, r)
        }
    }, {
        "./webcrypto.js": "8W0ZQ",
        "../lib/invalid_key_input.js": "hv0bb",
        "./base64url.js": "By2uJ",
        "../lib/format_pem.js": "kmo3m",
        "../util/errors.js": "2MROB",
        "./is_key_like.js": "nxGhD",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    kmo3m: [function(e, t, r, s) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = (e, t) => {
            let r = (e.match(/.{1,64}/g) || []).join("\n");
            return `-----BEGIN ${t}-----
${r}
-----END ${t}-----`
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    fyQAE: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "checkKeyTypeWithJwk", () => p);
        var n = e("./invalid_key_input.js"),
            i = e("../runtime/is_key_like.js"),
            o = a.interopDefault(i),
            l = e("./is_jwk.js");
        let c = e => e?.[Symbol.toStringTag],
            d = (e, t, r) => {
                if (void 0 !== t.use && "sig" !== t.use) throw TypeError("Invalid key for this operation, when present its use must be sig");
                if (void 0 !== t.key_ops && t.key_ops.includes?.(r) !== !0) throw TypeError(`Invalid key for this operation, when present its key_ops must include ${r}`);
                if (void 0 !== t.alg && t.alg !== e) throw TypeError(`Invalid key for this operation, when present its alg must be ${e}`);
                return !0
            };

        function u(e, t, r, s) {
            t.startsWith("HS") || "dir" === t || t.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(t) ? ((e, t, r, s) => {
                if (!(t instanceof Uint8Array)) {
                    if (s && l.isJWK(t)) {
                        if (l.isSecretJWK(t) && d(e, t, r)) return;
                        throw TypeError('JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present')
                    }
                    if (!(0, o.default)(t)) throw TypeError((0, n.withAlg)(e, t, ...i.types, "Uint8Array", s ? "JSON Web Key" : null));
                    if ("secret" !== t.type) throw TypeError(`${c(t)} instances for symmetric algorithms must be of type "secret"`)
                }
            })(t, r, s, e) : ((e, t, r, s) => {
                if (s && l.isJWK(t)) switch (r) {
                    case "sign":
                        if (l.isPrivateJWK(t) && d(e, t, r)) return;
                        throw TypeError("JSON Web Key for this operation be a private JWK");
                    case "verify":
                        if (l.isPublicJWK(t) && d(e, t, r)) return;
                        throw TypeError("JSON Web Key for this operation be a public JWK")
                }
                if (!(0, o.default)(t)) throw TypeError((0, n.withAlg)(e, t, ...i.types, s ? "JSON Web Key" : null));
                if ("secret" === t.type) throw TypeError(`${c(t)} instances for asymmetric algorithms must not be of type "secret"`);
                if ("sign" === r && "public" === t.type) throw TypeError(`${c(t)} instances for asymmetric algorithm signing must be of type "private"`);
                if ("decrypt" === r && "public" === t.type) throw TypeError(`${c(t)} instances for asymmetric algorithm decryption must be of type "private"`);
                if (t.algorithm && "verify" === r && "private" === t.type) throw TypeError(`${c(t)} instances for asymmetric algorithm verifying must be of type "public"`);
                if (t.algorithm && "encrypt" === r && "private" === t.type) throw TypeError(`${c(t)} instances for asymmetric algorithm encryption must be of type "public"`)
            })(t, r, s, e)
        }
        r.default = u.bind(void 0, !1);
        let p = u.bind(void 0, !0)
    }, {
        "./invalid_key_input.js": "hv0bb",
        "../runtime/is_key_like.js": "nxGhD",
        "./is_jwk.js": "2dmgx",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    ugaG7: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "wrap", () => d), a.export(r, "unwrap", () => u);
        var n = e("../runtime/encrypt.js"),
            i = a.interopDefault(n),
            o = e("../runtime/decrypt.js"),
            l = a.interopDefault(o),
            c = e("../runtime/base64url.js");
        async function d(e, t, r, s) {
            let a = e.slice(0, 7),
                n = await (0, i.default)(a, r, t, s, new Uint8Array(0));
            return {
                encryptedKey: n.ciphertext,
                iv: (0, c.encode)(n.iv),
                tag: (0, c.encode)(n.tag)
            }
        }
        async function u(e, t, r, s, a) {
            let n = e.slice(0, 7);
            return (0, l.default)(n, t, r, s, a, new Uint8Array(0))
        }
    }, {
        "../runtime/encrypt.js": "fvDiv",
        "../runtime/decrypt.js": "iJrMx",
        "../runtime/base64url.js": "By2uJ",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    fvDiv: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var n = e("../lib/buffer_utils.js"),
            i = e("../lib/check_iv_length.js"),
            o = a.interopDefault(i),
            l = e("./check_cek_length.js"),
            c = a.interopDefault(l),
            d = e("./webcrypto.js"),
            u = a.interopDefault(d),
            p = e("../lib/crypto_key.js"),
            f = e("../lib/invalid_key_input.js"),
            h = a.interopDefault(f),
            y = e("../lib/iv.js"),
            m = a.interopDefault(y),
            g = e("../util/errors.js"),
            E = e("./is_key_like.js");
        async function w(e, t, r, s, a) {
            if (!(r instanceof Uint8Array)) throw TypeError((0, h.default)(r, "Uint8Array"));
            let i = parseInt(e.slice(1, 4), 10),
                o = await u.default.subtle.importKey("raw", r.subarray(i >> 3), "AES-CBC", !1, ["encrypt"]),
                l = await u.default.subtle.importKey("raw", r.subarray(0, i >> 3), {
                    hash: `SHA-${i<<1}`,
                    name: "HMAC"
                }, !1, ["sign"]),
                c = new Uint8Array(await u.default.subtle.encrypt({
                    iv: s,
                    name: "AES-CBC"
                }, o, t)),
                d = (0, n.concat)(a, s, c, (0, n.uint64be)(a.length << 3));
            return {
                ciphertext: c,
                tag: new Uint8Array((await u.default.subtle.sign("HMAC", l, d)).slice(0, i >> 3)),
                iv: s
            }
        }
        async function j(e, t, r, s, a) {
            let n;
            r instanceof Uint8Array ? n = await u.default.subtle.importKey("raw", r, "AES-GCM", !1, ["encrypt"]) : ((0, p.checkEncCryptoKey)(r, e, "encrypt"), n = r);
            let i = new Uint8Array(await u.default.subtle.encrypt({
                    additionalData: a,
                    iv: s,
                    name: "AES-GCM",
                    tagLength: 128
                }, n, t)),
                o = i.slice(-16);
            return {
                ciphertext: i.slice(0, -16),
                tag: o,
                iv: s
            }
        }
        r.default = async (e, t, r, s, a) => {
            if (!(0, d.isCryptoKey)(r) && !(r instanceof Uint8Array)) throw TypeError((0, h.default)(r, ...E.types, "Uint8Array"));
            switch (s ? (0, o.default)(e, s) : s = (0, m.default)(e), e) {
                case "A128CBC-HS256":
                case "A192CBC-HS384":
                case "A256CBC-HS512":
                    return r instanceof Uint8Array && (0, c.default)(r, parseInt(e.slice(-3), 10)), w(e, t, r, s, a);
                case "A128GCM":
                case "A192GCM":
                case "A256GCM":
                    return r instanceof Uint8Array && (0, c.default)(r, parseInt(e.slice(1, 4), 10)), j(e, t, r, s, a);
                default:
                    throw new(0, g.JOSENotSupported)("Unsupported JWE Content Encryption Algorithm")
            }
        }
    }, {
        "../lib/buffer_utils.js": "3OSXK",
        "../lib/check_iv_length.js": "f0OE0",
        "./check_cek_length.js": "nQ7SI",
        "./webcrypto.js": "8W0ZQ",
        "../lib/crypto_key.js": "8E2Zq",
        "../lib/invalid_key_input.js": "hv0bb",
        "../lib/iv.js": "931z5",
        "../util/errors.js": "2MROB",
        "./is_key_like.js": "nxGhD",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "6XGo3": [function(e, t, r, s) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = e("../util/errors.js");
        r.default = function(e, t, r, s, n) {
            let i;
            if (void 0 !== n.crit && s?.crit === void 0) throw new e('"crit" (Critical) Header Parameter MUST be integrity protected');
            if (!s || void 0 === s.crit) return new Set;
            if (!Array.isArray(s.crit) || 0 === s.crit.length || s.crit.some(e => "string" != typeof e || 0 === e.length)) throw new e('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
            for (let o of (i = void 0 !== r ? new Map([...Object.entries(r), ...t.entries()]) : t, s.crit)) {
                if (!i.has(o)) throw new(0, a.JOSENotSupported)(`Extension Header Parameter "${o}" is not recognized`);
                if (void 0 === n[o]) throw new e(`Extension Header Parameter "${o}" is missing`);
                if (i.get(o) && void 0 === s[o]) throw new e(`Extension Header Parameter "${o}" MUST be integrity protected`)
            }
            return new Set(s.crit)
        }
    }, {
        "../util/errors.js": "2MROB",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "6NazR": [function(e, t, r, s) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = (e, t) => {
            if (void 0 !== t && (!Array.isArray(t) || t.some(e => "string" != typeof e))) throw TypeError(`"${e}" option must be an array of strings`);
            if (t) return new Set(t)
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "8zfCc": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "generalDecrypt", () => c);
        var n = e("../flattened/decrypt.js"),
            i = e("../../util/errors.js"),
            o = e("../../lib/is_object.js"),
            l = a.interopDefault(o);
        async function c(e, t, r) {
            if (!(0, l.default)(e)) throw new(0, i.JWEInvalid)("General JWE must be an object");
            if (!Array.isArray(e.recipients) || !e.recipients.every(l.default)) throw new(0, i.JWEInvalid)("JWE Recipients missing or incorrect type");
            if (!e.recipients.length) throw new(0, i.JWEInvalid)("JWE Recipients has no members");
            for (let s of e.recipients) try {
                return await (0, n.flattenedDecrypt)({
                    aad: e.aad,
                    ciphertext: e.ciphertext,
                    encrypted_key: s.encrypted_key,
                    header: s.header,
                    iv: e.iv,
                    protected: e.protected,
                    tag: e.tag,
                    unprotected: e.unprotected
                }, t, r)
            } catch {}
            throw new(0, i.JWEDecryptionFailed)
        }
    }, {
        "../flattened/decrypt.js": "luo4b",
        "../../util/errors.js": "2MROB",
        "../../lib/is_object.js": "kQMV3",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "3SkdU": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "GeneralEncrypt", () => E);
        var n = e("../flattened/encrypt.js"),
            i = e("../../lib/private_symbols.js"),
            o = e("../../util/errors.js"),
            l = e("../../lib/cek.js"),
            c = a.interopDefault(l),
            d = e("../../lib/is_disjoint.js"),
            u = a.interopDefault(d),
            p = e("../../lib/encrypt_key_management.js"),
            f = a.interopDefault(p),
            h = e("../../runtime/base64url.js"),
            y = e("../../lib/validate_crit.js"),
            m = a.interopDefault(y);
        class g {
            constructor(e, t, r) {
                this.parent = e, this.key = t, this.options = r
            }
            setUnprotectedHeader(e) {
                if (this.unprotectedHeader) throw TypeError("setUnprotectedHeader can only be called once");
                return this.unprotectedHeader = e, this
            }
            addRecipient(...e) {
                return this.parent.addRecipient(...e)
            }
            encrypt(...e) {
                return this.parent.encrypt(...e)
            }
            done() {
                return this.parent
            }
        }
        class E {
            constructor(e) {
                this._recipients = [], this._plaintext = e
            }
            addRecipient(e, t) {
                let r = new g(this, e, {
                    crit: t?.crit
                });
                return this._recipients.push(r), r
            }
            setProtectedHeader(e) {
                if (this._protectedHeader) throw TypeError("setProtectedHeader can only be called once");
                return this._protectedHeader = e, this
            }
            setSharedUnprotectedHeader(e) {
                if (this._unprotectedHeader) throw TypeError("setSharedUnprotectedHeader can only be called once");
                return this._unprotectedHeader = e, this
            }
            setAdditionalAuthenticatedData(e) {
                return this._aad = e, this
            }
            async encrypt() {
                let e;
                if (!this._recipients.length) throw new(0, o.JWEInvalid)("at least one recipient must be added");
                if (1 === this._recipients.length) {
                    let [e] = this._recipients, t = await new(0, n.FlattenedEncrypt)(this._plaintext).setAdditionalAuthenticatedData(this._aad).setProtectedHeader(this._protectedHeader).setSharedUnprotectedHeader(this._unprotectedHeader).setUnprotectedHeader(e.unprotectedHeader).encrypt(e.key, {
                        ...e.options
                    }), r = {
                        ciphertext: t.ciphertext,
                        iv: t.iv,
                        recipients: [{}],
                        tag: t.tag
                    };
                    return t.aad && (r.aad = t.aad), t.protected && (r.protected = t.protected), t.unprotected && (r.unprotected = t.unprotected), t.encrypted_key && (r.recipients[0].encrypted_key = t.encrypted_key), t.header && (r.recipients[0].header = t.header), r
                }
                for (let t = 0; t < this._recipients.length; t++) {
                    let r = this._recipients[t];
                    if (!(0, u.default)(this._protectedHeader, this._unprotectedHeader, r.unprotectedHeader)) throw new(0, o.JWEInvalid)("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
                    let s = {
                            ...this._protectedHeader,
                            ...this._unprotectedHeader,
                            ...r.unprotectedHeader
                        },
                        {
                            alg: a
                        } = s;
                    if ("string" != typeof a || !a) throw new(0, o.JWEInvalid)('JWE "alg" (Algorithm) Header Parameter missing or invalid');
                    if ("dir" === a || "ECDH-ES" === a) throw new(0, o.JWEInvalid)('"dir" and "ECDH-ES" alg may only be used with a single recipient');
                    if ("string" != typeof s.enc || !s.enc) throw new(0, o.JWEInvalid)('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
                    if (e) {
                        if (e !== s.enc) throw new(0, o.JWEInvalid)('JWE "enc" (Encryption Algorithm) Header Parameter must be the same for all recipients')
                    } else e = s.enc;
                    if ((0, m.default)(o.JWEInvalid, new Map, r.options.crit, this._protectedHeader, s), void 0 !== s.zip) throw new(0, o.JOSENotSupported)('JWE "zip" (Compression Algorithm) Header Parameter is not supported.')
                }
                let t = (0, c.default)(e),
                    r = {
                        ciphertext: "",
                        iv: "",
                        recipients: [],
                        tag: ""
                    };
                for (let s = 0; s < this._recipients.length; s++) {
                    let a = this._recipients[s],
                        o = {};
                    r.recipients.push(o);
                    let l = ({
                        ...this._protectedHeader,
                        ...this._unprotectedHeader,
                        ...a.unprotectedHeader
                    }).alg.startsWith("PBES2") ? 2048 + s : void 0;
                    if (0 === s) {
                        let e = await new(0, n.FlattenedEncrypt)(this._plaintext).setAdditionalAuthenticatedData(this._aad).setContentEncryptionKey(t).setProtectedHeader(this._protectedHeader).setSharedUnprotectedHeader(this._unprotectedHeader).setUnprotectedHeader(a.unprotectedHeader).setKeyManagementParameters({
                            p2c: l
                        }).encrypt(a.key, {
                            ...a.options,
                            [i.unprotected]: !0
                        });
                        r.ciphertext = e.ciphertext, r.iv = e.iv, r.tag = e.tag, e.aad && (r.aad = e.aad), e.protected && (r.protected = e.protected), e.unprotected && (r.unprotected = e.unprotected), o.encrypted_key = e.encrypted_key, e.header && (o.header = e.header);
                        continue
                    }
                    let {
                        encryptedKey: c,
                        parameters: d
                    } = await (0, f.default)(a.unprotectedHeader?.alg || this._protectedHeader?.alg || this._unprotectedHeader?.alg, e, a.key, t, {
                        p2c: l
                    });
                    o.encrypted_key = (0, h.encode)(c), (a.unprotectedHeader || d) && (o.header = {
                        ...a.unprotectedHeader,
                        ...d
                    })
                }
                return r
            }
        }
    }, {
        "../flattened/encrypt.js": "38HbS",
        "../../lib/private_symbols.js": "27qIB",
        "../../util/errors.js": "2MROB",
        "../../lib/cek.js": "bsH55",
        "../../lib/is_disjoint.js": "kFS6o",
        "../../lib/encrypt_key_management.js": "d7HOV",
        "../../runtime/base64url.js": "By2uJ",
        "../../lib/validate_crit.js": "6XGo3",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "38HbS": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "FlattenedEncrypt", () => g);
        var n = e("../../runtime/base64url.js"),
            i = e("../../lib/private_symbols.js"),
            o = e("../../runtime/encrypt.js"),
            l = a.interopDefault(o),
            c = e("../../lib/encrypt_key_management.js"),
            d = a.interopDefault(c),
            u = e("../../util/errors.js"),
            p = e("../../lib/is_disjoint.js"),
            f = a.interopDefault(p),
            h = e("../../lib/buffer_utils.js"),
            y = e("../../lib/validate_crit.js"),
            m = a.interopDefault(y);
        class g {
            constructor(e) {
                if (!(e instanceof Uint8Array)) throw TypeError("plaintext must be an instance of Uint8Array");
                this._plaintext = e
            }
            setKeyManagementParameters(e) {
                if (this._keyManagementParameters) throw TypeError("setKeyManagementParameters can only be called once");
                return this._keyManagementParameters = e, this
            }
            setProtectedHeader(e) {
                if (this._protectedHeader) throw TypeError("setProtectedHeader can only be called once");
                return this._protectedHeader = e, this
            }
            setSharedUnprotectedHeader(e) {
                if (this._sharedUnprotectedHeader) throw TypeError("setSharedUnprotectedHeader can only be called once");
                return this._sharedUnprotectedHeader = e, this
            }
            setUnprotectedHeader(e) {
                if (this._unprotectedHeader) throw TypeError("setUnprotectedHeader can only be called once");
                return this._unprotectedHeader = e, this
            }
            setAdditionalAuthenticatedData(e) {
                return this._aad = e, this
            }
            setContentEncryptionKey(e) {
                if (this._cek) throw TypeError("setContentEncryptionKey can only be called once");
                return this._cek = e, this
            }
            setInitializationVector(e) {
                if (this._iv) throw TypeError("setInitializationVector can only be called once");
                return this._iv = e, this
            }
            async encrypt(e, t) {
                let r, s, a, o, c;
                if (!this._protectedHeader && !this._unprotectedHeader && !this._sharedUnprotectedHeader) throw new(0, u.JWEInvalid)("either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()");
                if (!(0, f.default)(this._protectedHeader, this._unprotectedHeader, this._sharedUnprotectedHeader)) throw new(0, u.JWEInvalid)("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
                let p = {
                    ...this._protectedHeader,
                    ...this._unprotectedHeader,
                    ...this._sharedUnprotectedHeader
                };
                if ((0, m.default)(u.JWEInvalid, new Map, t?.crit, this._protectedHeader, p), void 0 !== p.zip) throw new(0, u.JOSENotSupported)('JWE "zip" (Compression Algorithm) Header Parameter is not supported.');
                let {
                    alg: y,
                    enc: g
                } = p;
                if ("string" != typeof y || !y) throw new(0, u.JWEInvalid)('JWE "alg" (Algorithm) Header Parameter missing or invalid');
                if ("string" != typeof g || !g) throw new(0, u.JWEInvalid)('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
                if (this._cek && ("dir" === y || "ECDH-ES" === y)) throw TypeError(`setContentEncryptionKey cannot be called with JWE "alg" (Algorithm) Header ${y}`);
                {
                    let a;
                    ({
                        cek: s,
                        encryptedKey: r,
                        parameters: a
                    } = await (0, d.default)(y, g, e, this._cek, this._keyManagementParameters)), a && (t && i.unprotected in t ? this._unprotectedHeader ? this._unprotectedHeader = {
                        ...this._unprotectedHeader,
                        ...a
                    } : this.setUnprotectedHeader(a) : this._protectedHeader ? this._protectedHeader = {
                        ...this._protectedHeader,
                        ...a
                    } : this.setProtectedHeader(a))
                }
                o = this._protectedHeader ? h.encoder.encode((0, n.encode)(JSON.stringify(this._protectedHeader))) : h.encoder.encode(""), this._aad ? (c = (0, n.encode)(this._aad), a = (0, h.concat)(o, h.encoder.encode("."), h.encoder.encode(c))) : a = o;
                let {
                    ciphertext: E,
                    tag: w,
                    iv: j
                } = await (0, l.default)(g, this._plaintext, s, this._iv, a), b = {
                    ciphertext: (0, n.encode)(E)
                };
                return j && (b.iv = (0, n.encode)(j)), w && (b.tag = (0, n.encode)(w)), r && (b.encrypted_key = (0, n.encode)(r)), c && (b.aad = c), this._protectedHeader && (b.protected = h.decoder.decode(o)), this._sharedUnprotectedHeader && (b.unprotected = this._sharedUnprotectedHeader), this._unprotectedHeader && (b.header = this._unprotectedHeader), b
            }
        }
    }, {
        "../../runtime/base64url.js": "By2uJ",
        "../../lib/private_symbols.js": "27qIB",
        "../../runtime/encrypt.js": "fvDiv",
        "../../lib/encrypt_key_management.js": "d7HOV",
        "../../util/errors.js": "2MROB",
        "../../lib/is_disjoint.js": "kFS6o",
        "../../lib/buffer_utils.js": "3OSXK",
        "../../lib/validate_crit.js": "6XGo3",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "27qIB": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "unprotected", () => n);
        let n = Symbol()
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    d7HOV: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var n = e("../runtime/aeskw.js"),
            i = e("../runtime/ecdhes.js"),
            o = e("../runtime/pbes2kw.js"),
            l = e("../runtime/rsaes.js"),
            c = e("../runtime/base64url.js"),
            d = e("../runtime/normalize_key.js"),
            u = a.interopDefault(d),
            p = e("../lib/cek.js"),
            f = a.interopDefault(p),
            h = e("../util/errors.js"),
            y = e("../key/export.js"),
            m = e("./check_key_type.js"),
            g = a.interopDefault(m),
            E = e("./aesgcmkw.js");
        r.default = async function(e, t, r, s, a = {}) {
            let d, m, w;
            switch ((0, g.default)(e, r, "encrypt"), r = await u.default.normalizePublicKey?.(r, e) || r, e) {
                case "dir":
                    w = r;
                    break;
                case "ECDH-ES":
                case "ECDH-ES+A128KW":
                case "ECDH-ES+A192KW":
                case "ECDH-ES+A256KW": {
                    if (!i.ecdhAllowed(r)) throw new(0, h.JOSENotSupported)("ECDH with the provided key is not allowed or not supported by your javascript runtime");
                    let {
                        apu: o,
                        apv: l
                    } = a, {
                        epk: u
                    } = a;
                    u || (u = (await i.generateEpk(r)).privateKey);
                    let {
                        x: g,
                        y: E,
                        crv: j,
                        kty: b
                    } = await (0, y.exportJWK)(u), A = await i.deriveKey(r, u, "ECDH-ES" === e ? t : e, "ECDH-ES" === e ? (0, p.bitLength)(t) : parseInt(e.slice(-5, -2), 10), o, l);
                    if (m = {
                            epk: {
                                x: g,
                                crv: j,
                                kty: b
                            }
                        }, "EC" === b && (m.epk.y = E), o && (m.apu = (0, c.encode)(o)), l && (m.apv = (0, c.encode)(l)), "ECDH-ES" === e) {
                        w = A;
                        break
                    }
                    w = s || (0, f.default)(t);
                    let v = e.slice(-6);
                    d = await (0, n.wrap)(v, A, w);
                    break
                }
                case "RSA1_5":
                case "RSA-OAEP":
                case "RSA-OAEP-256":
                case "RSA-OAEP-384":
                case "RSA-OAEP-512":
                    w = s || (0, f.default)(t), d = await (0, l.encrypt)(e, r, w);
                    break;
                case "PBES2-HS256+A128KW":
                case "PBES2-HS384+A192KW":
                case "PBES2-HS512+A256KW": {
                    w = s || (0, f.default)(t);
                    let {
                        p2c: n,
                        p2s: i
                    } = a;
                    ({
                        encryptedKey: d,
                        ...m
                    } = await (0, o.encrypt)(e, r, w, n, i));
                    break
                }
                case "A128KW":
                case "A192KW":
                case "A256KW":
                    w = s || (0, f.default)(t), d = await (0, n.wrap)(e, r, w);
                    break;
                case "A128GCMKW":
                case "A192GCMKW":
                case "A256GCMKW": {
                    w = s || (0, f.default)(t);
                    let {
                        iv: n
                    } = a;
                    ({
                        encryptedKey: d,
                        ...m
                    } = await (0, E.wrap)(e, r, w, n));
                    break
                }
                default:
                    throw new(0, h.JOSENotSupported)('Invalid or unsupported "alg" (JWE Algorithm) header value')
            }
            return {
                cek: w,
                encryptedKey: d,
                parameters: m
            }
        }
    }, {
        "../runtime/aeskw.js": "pUGmP",
        "../runtime/ecdhes.js": "aTdif",
        "../runtime/pbes2kw.js": "6uLsN",
        "../runtime/rsaes.js": "6nFVi",
        "../runtime/base64url.js": "By2uJ",
        "../runtime/normalize_key.js": "2snrQ",
        "../lib/cek.js": "bsH55",
        "../util/errors.js": "2MROB",
        "../key/export.js": "fy0WI",
        "./check_key_type.js": "fyQAE",
        "./aesgcmkw.js": "ugaG7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    fy0WI: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "exportSPKI", () => l), a.export(r, "exportPKCS8", () => c), a.export(r, "exportJWK", () => d);
        var n = e("../runtime/asn1.js"),
            i = e("../runtime/key_to_jwk.js"),
            o = a.interopDefault(i);
        async function l(e) {
            return (0, n.toSPKI)(e)
        }
        async function c(e) {
            return (0, n.toPKCS8)(e)
        }
        async function d(e) {
            return (0, o.default)(e)
        }
    }, {
        "../runtime/asn1.js": "16Zke",
        "../runtime/key_to_jwk.js": "9A3Mz",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "9A3Mz": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var n = e("./webcrypto.js"),
            i = a.interopDefault(n),
            o = e("../lib/invalid_key_input.js"),
            l = a.interopDefault(o),
            c = e("./base64url.js"),
            d = e("./is_key_like.js");
        r.default = async e => {
            if (e instanceof Uint8Array) return {
                kty: "oct",
                k: (0, c.encode)(e)
            };
            if (!(0, n.isCryptoKey)(e)) throw TypeError((0, l.default)(e, ...d.types, "Uint8Array"));
            if (!e.extractable) throw TypeError("non-extractable CryptoKey cannot be exported as a JWK");
            let {
                ext: t,
                key_ops: r,
                alg: s,
                use: a,
                ...o
            } = await i.default.subtle.exportKey("jwk", e);
            return o
        }
    }, {
        "./webcrypto.js": "8W0ZQ",
        "../lib/invalid_key_input.js": "hv0bb",
        "./base64url.js": "By2uJ",
        "./is_key_like.js": "nxGhD",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    dqf6f: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "compactVerify", () => l);
        var n = e("../flattened/verify.js"),
            i = e("../../util/errors.js"),
            o = e("../../lib/buffer_utils.js");
        async function l(e, t, r) {
            if (e instanceof Uint8Array && (e = o.decoder.decode(e)), "string" != typeof e) throw new(0, i.JWSInvalid)("Compact JWS must be a string or Uint8Array");
            let {
                0: s,
                1: a,
                2: l,
                length: c
            } = e.split(".");
            if (3 !== c) throw new(0, i.JWSInvalid)("Invalid Compact JWS");
            let d = await (0, n.flattenedVerify)({
                    payload: a,
                    protected: s,
                    signature: l
                }, t, r),
                u = {
                    payload: d.payload,
                    protectedHeader: d.protectedHeader
                };
            return "function" == typeof t ? {
                ...u,
                key: d.key
            } : u
        }
    }, {
        "../flattened/verify.js": "dx6in",
        "../../util/errors.js": "2MROB",
        "../../lib/buffer_utils.js": "3OSXK",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    dx6in: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "flattenedVerify", () => b);
        var n = e("../../runtime/base64url.js"),
            i = e("../../runtime/verify.js"),
            o = a.interopDefault(i),
            l = e("../../util/errors.js"),
            c = e("../../lib/buffer_utils.js"),
            d = e("../../lib/is_disjoint.js"),
            u = a.interopDefault(d),
            p = e("../../lib/is_object.js"),
            f = a.interopDefault(p),
            h = e("../../lib/check_key_type.js"),
            y = e("../../lib/validate_crit.js"),
            m = a.interopDefault(y),
            g = e("../../lib/validate_algorithms.js"),
            E = a.interopDefault(g),
            w = e("../../lib/is_jwk.js"),
            j = e("../../key/import.js");
        async function b(e, t, r) {
            let s, a;
            if (!(0, f.default)(e)) throw new(0, l.JWSInvalid)("Flattened JWS must be an object");
            if (void 0 === e.protected && void 0 === e.header) throw new(0, l.JWSInvalid)('Flattened JWS must have either of the "protected" or "header" members');
            if (void 0 !== e.protected && "string" != typeof e.protected) throw new(0, l.JWSInvalid)("JWS Protected Header incorrect type");
            if (void 0 === e.payload) throw new(0, l.JWSInvalid)("JWS Payload missing");
            if ("string" != typeof e.signature) throw new(0, l.JWSInvalid)("JWS Signature missing or incorrect type");
            if (void 0 !== e.header && !(0, f.default)(e.header)) throw new(0, l.JWSInvalid)("JWS Unprotected Header incorrect type");
            let i = {};
            if (e.protected) try {
                let t = (0, n.decode)(e.protected);
                i = JSON.parse(c.decoder.decode(t))
            } catch {
                throw new(0, l.JWSInvalid)("JWS Protected Header is invalid")
            }
            if (!(0, u.default)(i, e.header)) throw new(0, l.JWSInvalid)("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
            let d = {
                    ...i,
                    ...e.header
                },
                p = (0, m.default)(l.JWSInvalid, new Map([
                    ["b64", !0]
                ]), r?.crit, i, d),
                y = !0;
            if (p.has("b64") && "boolean" != typeof(y = i.b64)) throw new(0, l.JWSInvalid)('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
            let {
                alg: g
            } = d;
            if ("string" != typeof g || !g) throw new(0, l.JWSInvalid)('JWS "alg" (Algorithm) Header Parameter missing or invalid');
            let b = r && (0, E.default)("algorithms", r.algorithms);
            if (b && !b.has(g)) throw new(0, l.JOSEAlgNotAllowed)('"alg" (Algorithm) Header Parameter value not allowed');
            if (y) {
                if ("string" != typeof e.payload) throw new(0, l.JWSInvalid)("JWS Payload must be a string")
            } else if ("string" != typeof e.payload && !(e.payload instanceof Uint8Array)) throw new(0, l.JWSInvalid)("JWS Payload must be a string or an Uint8Array instance");
            let A = !1;
            "function" == typeof t ? (t = await t(i, e), A = !0, (0, h.checkKeyTypeWithJwk)(g, t, "verify"), (0, w.isJWK)(t) && (t = await (0, j.importJWK)(t, g))) : (0, h.checkKeyTypeWithJwk)(g, t, "verify");
            let v = (0, c.concat)(c.encoder.encode(e.protected ?? ""), c.encoder.encode("."), "string" == typeof e.payload ? c.encoder.encode(e.payload) : e.payload);
            try {
                s = (0, n.decode)(e.signature)
            } catch {
                throw new(0, l.JWSInvalid)("Failed to base64url decode the signature")
            }
            if (!await (0, o.default)(g, t, s, v)) throw new(0, l.JWSSignatureVerificationFailed);
            if (y) try {
                a = (0, n.decode)(e.payload)
            } catch {
                throw new(0, l.JWSInvalid)("Failed to base64url decode the payload")
            } else a = "string" == typeof e.payload ? c.encoder.encode(e.payload) : e.payload;
            let I = {
                payload: a
            };
            return (void 0 !== e.protected && (I.protectedHeader = i), void 0 !== e.header && (I.unprotectedHeader = e.header), A) ? {
                ...I,
                key: t
            } : I
        }
    }, {
        "../../runtime/base64url.js": "By2uJ",
        "../../runtime/verify.js": "1F76X",
        "../../util/errors.js": "2MROB",
        "../../lib/buffer_utils.js": "3OSXK",
        "../../lib/is_disjoint.js": "kFS6o",
        "../../lib/is_object.js": "kQMV3",
        "../../lib/check_key_type.js": "fyQAE",
        "../../lib/validate_crit.js": "6XGo3",
        "../../lib/validate_algorithms.js": "6NazR",
        "../../lib/is_jwk.js": "2dmgx",
        "../../key/import.js": "azICy",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "1F76X": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var n = e("./subtle_dsa.js"),
            i = a.interopDefault(n),
            o = e("./webcrypto.js"),
            l = a.interopDefault(o),
            c = e("./check_key_length.js"),
            d = a.interopDefault(c),
            u = e("./get_sign_verify_key.js"),
            p = a.interopDefault(u);
        r.default = async (e, t, r, s) => {
            let a = await (0, p.default)(e, t, "verify");
            (0, d.default)(e, a);
            let n = (0, i.default)(e, a.algorithm);
            try {
                return await l.default.subtle.verify(n, a, r, s)
            } catch {
                return !1
            }
        }
    }, {
        "./subtle_dsa.js": "Wuc1m",
        "./webcrypto.js": "8W0ZQ",
        "./check_key_length.js": "c7se2",
        "./get_sign_verify_key.js": "ip1IO",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    Wuc1m: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var n = e("../util/errors.js");

        function i(e, t) {
            let r = `SHA-${e.slice(-3)}`;
            switch (e) {
                case "HS256":
                case "HS384":
                case "HS512":
                    return {
                        hash: r, name: "HMAC"
                    };
                case "PS256":
                case "PS384":
                case "PS512":
                    return {
                        hash: r, name: "RSA-PSS", saltLength: e.slice(-3) >> 3
                    };
                case "RS256":
                case "RS384":
                case "RS512":
                    return {
                        hash: r, name: "RSASSA-PKCS1-v1_5"
                    };
                case "ES256":
                case "ES384":
                case "ES512":
                    return {
                        hash: r, name: "ECDSA", namedCurve: t.namedCurve
                    };
                case "Ed25519":
                    return {
                        name: "Ed25519"
                    };
                case "EdDSA":
                    return {
                        name: t.name
                    };
                default:
                    throw new(0, n.JOSENotSupported)(`alg ${e} is not supported either by JOSE or your javascript runtime`)
            }
        }
    }, {
        "../util/errors.js": "2MROB",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    ip1IO: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => f);
        var n = e("./webcrypto.js"),
            i = a.interopDefault(n),
            o = e("../lib/crypto_key.js"),
            l = e("../lib/invalid_key_input.js"),
            c = a.interopDefault(l),
            d = e("./is_key_like.js"),
            u = e("./normalize_key.js"),
            p = a.interopDefault(u);
        async function f(e, t, r) {
            if ("sign" === r && (t = await p.default.normalizePrivateKey(t, e)), "verify" === r && (t = await p.default.normalizePublicKey(t, e)), (0, n.isCryptoKey)(t)) return (0, o.checkSigCryptoKey)(t, e, r), t;
            if (t instanceof Uint8Array) {
                if (!e.startsWith("HS")) throw TypeError((0, c.default)(t, ...d.types));
                return i.default.subtle.importKey("raw", t, {
                    hash: `SHA-${e.slice(-3)}`,
                    name: "HMAC"
                }, !1, [r])
            }
            throw TypeError((0, c.default)(t, ...d.types, "Uint8Array", "JSON Web Key"))
        }
    }, {
        "./webcrypto.js": "8W0ZQ",
        "../lib/crypto_key.js": "8E2Zq",
        "../lib/invalid_key_input.js": "hv0bb",
        "./is_key_like.js": "nxGhD",
        "./normalize_key.js": "2snrQ",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    dUaF5: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "generalVerify", () => c);
        var n = e("../flattened/verify.js"),
            i = e("../../util/errors.js"),
            o = e("../../lib/is_object.js"),
            l = a.interopDefault(o);
        async function c(e, t, r) {
            if (!(0, l.default)(e)) throw new(0, i.JWSInvalid)("General JWS must be an object");
            if (!Array.isArray(e.signatures) || !e.signatures.every(l.default)) throw new(0, i.JWSInvalid)("JWS Signatures missing or incorrect type");
            for (let s of e.signatures) try {
                return await (0, n.flattenedVerify)({
                    header: s.header,
                    payload: e.payload,
                    protected: s.protected,
                    signature: s.signature
                }, t, r)
            } catch {}
            throw new(0, i.JWSSignatureVerificationFailed)
        }
    }, {
        "../flattened/verify.js": "dx6in",
        "../../util/errors.js": "2MROB",
        "../../lib/is_object.js": "kQMV3",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    kEUL7: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "jwtVerify", () => c);
        var n = e("../jws/compact/verify.js"),
            i = e("../lib/jwt_claims_set.js"),
            o = a.interopDefault(i),
            l = e("../util/errors.js");
        async function c(e, t, r) {
            let s = await (0, n.compactVerify)(e, t, r);
            if (s.protectedHeader.crit?.includes("b64") && !1 === s.protectedHeader.b64) throw new(0, l.JWTInvalid)("JWTs MUST NOT use unencoded payload");
            let a = {
                payload: (0, o.default)(s.protectedHeader, s.payload, r),
                protectedHeader: s.protectedHeader
            };
            return "function" == typeof t ? {
                ...a,
                key: s.key
            } : a
        }
    }, {
        "../jws/compact/verify.js": "dqf6f",
        "../lib/jwt_claims_set.js": "1CtcQ",
        "../util/errors.js": "2MROB",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "1CtcQ": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var n = e("../util/errors.js"),
            i = e("./buffer_utils.js"),
            o = e("./epoch.js"),
            l = a.interopDefault(o),
            c = e("./secs.js"),
            d = a.interopDefault(c),
            u = e("./is_object.js"),
            p = a.interopDefault(u);
        let f = e => e.toLowerCase().replace(/^application\//, "");
        r.default = (e, t, r = {}) => {
            var s, a;
            let o, c;
            try {
                o = JSON.parse(i.decoder.decode(t))
            } catch {}
            if (!(0, p.default)(o)) throw new(0, n.JWTInvalid)("JWT Claims Set must be a top-level JSON object");
            let {
                typ: u
            } = r;
            if (u && ("string" != typeof e.typ || f(e.typ) !== f(u))) throw new(0, n.JWTClaimValidationFailed)('unexpected "typ" JWT header value', o, "typ", "check_failed");
            let {
                requiredClaims: h = [],
                issuer: y,
                subject: m,
                audience: g,
                maxTokenAge: E
            } = r, w = [...h];
            for (let e of (void 0 !== E && w.push("iat"), void 0 !== g && w.push("aud"), void 0 !== m && w.push("sub"), void 0 !== y && w.push("iss"), new Set(w.reverse())))
                if (!(e in o)) throw new(0, n.JWTClaimValidationFailed)(`missing required "${e}" claim`, o, e, "missing");
            if (y && !(Array.isArray(y) ? y : [y]).includes(o.iss)) throw new(0, n.JWTClaimValidationFailed)('unexpected "iss" claim value', o, "iss", "check_failed");
            if (m && o.sub !== m) throw new(0, n.JWTClaimValidationFailed)('unexpected "sub" claim value', o, "sub", "check_failed");
            if (g && (s = o.aud, a = "string" == typeof g ? [g] : g, "string" == typeof s ? !a.includes(s) : !(Array.isArray(s) && a.some(Set.prototype.has.bind(new Set(s)))))) throw new(0, n.JWTClaimValidationFailed)('unexpected "aud" claim value', o, "aud", "check_failed");
            switch (typeof r.clockTolerance) {
                case "string":
                    c = (0, d.default)(r.clockTolerance);
                    break;
                case "number":
                    c = r.clockTolerance;
                    break;
                case "undefined":
                    c = 0;
                    break;
                default:
                    throw TypeError("Invalid clockTolerance option type")
            }
            let {
                currentDate: j
            } = r, b = (0, l.default)(j || new Date);
            if ((void 0 !== o.iat || E) && "number" != typeof o.iat) throw new(0, n.JWTClaimValidationFailed)('"iat" claim must be a number', o, "iat", "invalid");
            if (void 0 !== o.nbf) {
                if ("number" != typeof o.nbf) throw new(0, n.JWTClaimValidationFailed)('"nbf" claim must be a number', o, "nbf", "invalid");
                if (o.nbf > b + c) throw new(0, n.JWTClaimValidationFailed)('"nbf" claim timestamp check failed', o, "nbf", "check_failed")
            }
            if (void 0 !== o.exp) {
                if ("number" != typeof o.exp) throw new(0, n.JWTClaimValidationFailed)('"exp" claim must be a number', o, "exp", "invalid");
                if (o.exp <= b - c) throw new(0, n.JWTExpired)('"exp" claim timestamp check failed', o, "exp", "check_failed")
            }
            if (E) {
                let e = b - o.iat;
                if (e - c > ("number" == typeof E ? E : (0, d.default)(E))) throw new(0, n.JWTExpired)('"iat" claim timestamp check failed (too far in the past)', o, "iat", "check_failed");
                if (e < 0 - c) throw new(0, n.JWTClaimValidationFailed)('"iat" claim timestamp check failed (it should be in the past)', o, "iat", "check_failed")
            }
            return o
        }
    }, {
        "../util/errors.js": "2MROB",
        "./buffer_utils.js": "3OSXK",
        "./epoch.js": "cq2Hv",
        "./secs.js": "kWq7m",
        "./is_object.js": "kQMV3",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    cq2Hv: [function(e, t, r, s) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = e => Math.floor(e.getTime() / 1e3)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    kWq7m: [function(e, t, r, s) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        let a = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
        r.default = e => {
            let t, r = a.exec(e);
            if (!r || r[4] && r[1]) throw TypeError("Invalid time period format");
            let s = parseFloat(r[2]);
            switch (r[3].toLowerCase()) {
                case "sec":
                case "secs":
                case "second":
                case "seconds":
                case "s":
                    t = Math.round(s);
                    break;
                case "minute":
                case "minutes":
                case "min":
                case "mins":
                case "m":
                    t = Math.round(60 * s);
                    break;
                case "hour":
                case "hours":
                case "hr":
                case "hrs":
                case "h":
                    t = Math.round(3600 * s);
                    break;
                case "day":
                case "days":
                case "d":
                    t = Math.round(86400 * s);
                    break;
                case "week":
                case "weeks":
                case "w":
                    t = Math.round(604800 * s);
                    break;
                default:
                    t = Math.round(0x1e187e0 * s)
            }
            return "-" === r[1] || "ago" === r[4] ? -t : t
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "2hBcA": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "jwtDecrypt", () => c);
        var n = e("../jwe/compact/decrypt.js"),
            i = e("../lib/jwt_claims_set.js"),
            o = a.interopDefault(i),
            l = e("../util/errors.js");
        async function c(e, t, r) {
            let s = await (0, n.compactDecrypt)(e, t, r),
                a = (0, o.default)(s.protectedHeader, s.plaintext, r),
                {
                    protectedHeader: i
                } = s;
            if (void 0 !== i.iss && i.iss !== a.iss) throw new(0, l.JWTClaimValidationFailed)('replicated "iss" claim header parameter mismatch', a, "iss", "mismatch");
            if (void 0 !== i.sub && i.sub !== a.sub) throw new(0, l.JWTClaimValidationFailed)('replicated "sub" claim header parameter mismatch', a, "sub", "mismatch");
            if (void 0 !== i.aud && JSON.stringify(i.aud) !== JSON.stringify(a.aud)) throw new(0, l.JWTClaimValidationFailed)('replicated "aud" claim header parameter mismatch', a, "aud", "mismatch");
            let c = {
                payload: a,
                protectedHeader: i
            };
            return "function" == typeof t ? {
                ...c,
                key: s.key
            } : c
        }
    }, {
        "../jwe/compact/decrypt.js": "7DFBy",
        "../lib/jwt_claims_set.js": "1CtcQ",
        "../util/errors.js": "2MROB",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "3oyTC": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "CompactEncrypt", () => i);
        var n = e("../flattened/encrypt.js");
        class i {
            constructor(e) {
                this._flattened = new(0, n.FlattenedEncrypt)(e)
            }
            setContentEncryptionKey(e) {
                return this._flattened.setContentEncryptionKey(e), this
            }
            setInitializationVector(e) {
                return this._flattened.setInitializationVector(e), this
            }
            setProtectedHeader(e) {
                return this._flattened.setProtectedHeader(e), this
            }
            setKeyManagementParameters(e) {
                return this._flattened.setKeyManagementParameters(e), this
            }
            async encrypt(e, t) {
                let r = await this._flattened.encrypt(e, t);
                return [r.protected, r.encrypted_key, r.iv, r.ciphertext, r.tag].join(".")
            }
        }
    }, {
        "../flattened/encrypt.js": "38HbS",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    fw8ji: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "CompactSign", () => i);
        var n = e("../flattened/sign.js");
        class i {
            constructor(e) {
                this._flattened = new(0, n.FlattenedSign)(e)
            }
            setProtectedHeader(e) {
                return this._flattened.setProtectedHeader(e), this
            }
            async sign(e, t) {
                let r = await this._flattened.sign(e, t);
                if (void 0 === r.payload) throw TypeError("use the flattened module for creating JWS with b64: false");
                return `${r.protected}.${r.payload}.${r.signature}`
            }
        }
    }, {
        "../flattened/sign.js": "1BlEG",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "1BlEG": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "FlattenedSign", () => y);
        var n = e("../../runtime/base64url.js"),
            i = e("../../runtime/sign.js"),
            o = a.interopDefault(i),
            l = e("../../lib/is_disjoint.js"),
            c = a.interopDefault(l),
            d = e("../../util/errors.js"),
            u = e("../../lib/buffer_utils.js"),
            p = e("../../lib/check_key_type.js"),
            f = e("../../lib/validate_crit.js"),
            h = a.interopDefault(f);
        class y {
            constructor(e) {
                if (!(e instanceof Uint8Array)) throw TypeError("payload must be an instance of Uint8Array");
                this._payload = e
            }
            setProtectedHeader(e) {
                if (this._protectedHeader) throw TypeError("setProtectedHeader can only be called once");
                return this._protectedHeader = e, this
            }
            setUnprotectedHeader(e) {
                if (this._unprotectedHeader) throw TypeError("setUnprotectedHeader can only be called once");
                return this._unprotectedHeader = e, this
            }
            async sign(e, t) {
                let r;
                if (!this._protectedHeader && !this._unprotectedHeader) throw new(0, d.JWSInvalid)("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
                if (!(0, c.default)(this._protectedHeader, this._unprotectedHeader)) throw new(0, d.JWSInvalid)("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
                let s = {
                        ...this._protectedHeader,
                        ...this._unprotectedHeader
                    },
                    a = (0, h.default)(d.JWSInvalid, new Map([
                        ["b64", !0]
                    ]), t?.crit, this._protectedHeader, s),
                    i = !0;
                if (a.has("b64") && "boolean" != typeof(i = this._protectedHeader.b64)) throw new(0, d.JWSInvalid)('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
                let {
                    alg: l
                } = s;
                if ("string" != typeof l || !l) throw new(0, d.JWSInvalid)('JWS "alg" (Algorithm) Header Parameter missing or invalid');
                (0, p.checkKeyTypeWithJwk)(l, e, "sign");
                let f = this._payload;
                i && (f = u.encoder.encode((0, n.encode)(f))), r = this._protectedHeader ? u.encoder.encode((0, n.encode)(JSON.stringify(this._protectedHeader))) : u.encoder.encode("");
                let y = (0, u.concat)(r, u.encoder.encode("."), f),
                    m = await (0, o.default)(l, e, y),
                    g = {
                        signature: (0, n.encode)(m),
                        payload: ""
                    };
                return i && (g.payload = u.decoder.decode(f)), this._unprotectedHeader && (g.header = this._unprotectedHeader), this._protectedHeader && (g.protected = u.decoder.decode(r)), g
            }
        }
    }, {
        "../../runtime/base64url.js": "By2uJ",
        "../../runtime/sign.js": "1rtpN",
        "../../lib/is_disjoint.js": "kFS6o",
        "../../util/errors.js": "2MROB",
        "../../lib/buffer_utils.js": "3OSXK",
        "../../lib/check_key_type.js": "fyQAE",
        "../../lib/validate_crit.js": "6XGo3",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "1rtpN": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var n = e("./subtle_dsa.js"),
            i = a.interopDefault(n),
            o = e("./webcrypto.js"),
            l = a.interopDefault(o),
            c = e("./check_key_length.js"),
            d = a.interopDefault(c),
            u = e("./get_sign_verify_key.js"),
            p = a.interopDefault(u);
        r.default = async (e, t, r) => {
            let s = await (0, p.default)(e, t, "sign");
            return (0, d.default)(e, s), new Uint8Array(await l.default.subtle.sign((0, i.default)(e, s.algorithm), s, r))
        }
    }, {
        "./subtle_dsa.js": "Wuc1m",
        "./webcrypto.js": "8W0ZQ",
        "./check_key_length.js": "c7se2",
        "./get_sign_verify_key.js": "ip1IO",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "5keNb": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "GeneralSign", () => l);
        var n = e("../flattened/sign.js"),
            i = e("../../util/errors.js");
        class o {
            constructor(e, t, r) {
                this.parent = e, this.key = t, this.options = r
            }
            setProtectedHeader(e) {
                if (this.protectedHeader) throw TypeError("setProtectedHeader can only be called once");
                return this.protectedHeader = e, this
            }
            setUnprotectedHeader(e) {
                if (this.unprotectedHeader) throw TypeError("setUnprotectedHeader can only be called once");
                return this.unprotectedHeader = e, this
            }
            addSignature(...e) {
                return this.parent.addSignature(...e)
            }
            sign(...e) {
                return this.parent.sign(...e)
            }
            done() {
                return this.parent
            }
        }
        class l {
            constructor(e) {
                this._signatures = [], this._payload = e
            }
            addSignature(e, t) {
                let r = new o(this, e, t);
                return this._signatures.push(r), r
            }
            async sign() {
                if (!this._signatures.length) throw new(0, i.JWSInvalid)("at least one signature must be added");
                let e = {
                    signatures: [],
                    payload: ""
                };
                for (let t = 0; t < this._signatures.length; t++) {
                    let r = this._signatures[t],
                        s = new(0, n.FlattenedSign)(this._payload);
                    s.setProtectedHeader(r.protectedHeader), s.setUnprotectedHeader(r.unprotectedHeader);
                    let {
                        payload: a,
                        ...o
                    } = await s.sign(r.key, r.options);
                    if (0 === t) e.payload = a;
                    else if (e.payload !== a) throw new(0, i.JWSInvalid)("inconsistent use of JWS Unencoded Payload (RFC7797)");
                    e.signatures.push(o)
                }
                return e
            }
        }
    }, {
        "../flattened/sign.js": "1BlEG",
        "../../util/errors.js": "2MROB",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "6ZXe2": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "SignJWT", () => c);
        var n = e("../jws/compact/sign.js"),
            i = e("../util/errors.js"),
            o = e("../lib/buffer_utils.js"),
            l = e("./produce.js");
        class c extends l.ProduceJWT {
            setProtectedHeader(e) {
                return this._protectedHeader = e, this
            }
            async sign(e, t) {
                let r = new(0, n.CompactSign)(o.encoder.encode(JSON.stringify(this._payload)));
                if (r.setProtectedHeader(this._protectedHeader), Array.isArray(this._protectedHeader?.crit) && this._protectedHeader.crit.includes("b64") && !1 === this._protectedHeader.b64) throw new(0, i.JWTInvalid)("JWTs MUST NOT use unencoded payload");
                return r.sign(e, t)
            }
        }
    }, {
        "../jws/compact/sign.js": "fw8ji",
        "../util/errors.js": "2MROB",
        "../lib/buffer_utils.js": "3OSXK",
        "./produce.js": "6ZTKR",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "6ZTKR": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "ProduceJWT", () => p);
        var n = e("../lib/epoch.js"),
            i = a.interopDefault(n),
            o = e("../lib/is_object.js"),
            l = a.interopDefault(o),
            c = e("../lib/secs.js"),
            d = a.interopDefault(c);

        function u(e, t) {
            if (!Number.isFinite(t)) throw TypeError(`Invalid ${e} input`);
            return t
        }
        class p {
            constructor(e = {}) {
                if (!(0, l.default)(e)) throw TypeError("JWT Claims Set MUST be an object");
                this._payload = e
            }
            setIssuer(e) {
                return this._payload = {
                    ...this._payload,
                    iss: e
                }, this
            }
            setSubject(e) {
                return this._payload = {
                    ...this._payload,
                    sub: e
                }, this
            }
            setAudience(e) {
                return this._payload = {
                    ...this._payload,
                    aud: e
                }, this
            }
            setJti(e) {
                return this._payload = {
                    ...this._payload,
                    jti: e
                }, this
            }
            setNotBefore(e) {
                return "number" == typeof e ? this._payload = {
                    ...this._payload,
                    nbf: u("setNotBefore", e)
                } : e instanceof Date ? this._payload = {
                    ...this._payload,
                    nbf: u("setNotBefore", (0, i.default)(e))
                } : this._payload = {
                    ...this._payload,
                    nbf: (0, i.default)(new Date) + (0, d.default)(e)
                }, this
            }
            setExpirationTime(e) {
                return "number" == typeof e ? this._payload = {
                    ...this._payload,
                    exp: u("setExpirationTime", e)
                } : e instanceof Date ? this._payload = {
                    ...this._payload,
                    exp: u("setExpirationTime", (0, i.default)(e))
                } : this._payload = {
                    ...this._payload,
                    exp: (0, i.default)(new Date) + (0, d.default)(e)
                }, this
            }
            setIssuedAt(e) {
                return void 0 === e ? this._payload = {
                    ...this._payload,
                    iat: (0, i.default)(new Date)
                } : e instanceof Date ? this._payload = {
                    ...this._payload,
                    iat: u("setIssuedAt", (0, i.default)(e))
                } : "string" == typeof e ? this._payload = {
                    ...this._payload,
                    iat: u("setIssuedAt", (0, i.default)(new Date) + (0, d.default)(e))
                } : this._payload = {
                    ...this._payload,
                    iat: u("setIssuedAt", e)
                }, this
            }
        }
    }, {
        "../lib/epoch.js": "cq2Hv",
        "../lib/is_object.js": "kQMV3",
        "../lib/secs.js": "kWq7m",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "4bdxA": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "EncryptJWT", () => l);
        var n = e("../jwe/compact/encrypt.js"),
            i = e("../lib/buffer_utils.js"),
            o = e("./produce.js");
        class l extends o.ProduceJWT {
            setProtectedHeader(e) {
                if (this._protectedHeader) throw TypeError("setProtectedHeader can only be called once");
                return this._protectedHeader = e, this
            }
            setKeyManagementParameters(e) {
                if (this._keyManagementParameters) throw TypeError("setKeyManagementParameters can only be called once");
                return this._keyManagementParameters = e, this
            }
            setContentEncryptionKey(e) {
                if (this._cek) throw TypeError("setContentEncryptionKey can only be called once");
                return this._cek = e, this
            }
            setInitializationVector(e) {
                if (this._iv) throw TypeError("setInitializationVector can only be called once");
                return this._iv = e, this
            }
            replicateIssuerAsHeader() {
                return this._replicateIssuerAsHeader = !0, this
            }
            replicateSubjectAsHeader() {
                return this._replicateSubjectAsHeader = !0, this
            }
            replicateAudienceAsHeader() {
                return this._replicateAudienceAsHeader = !0, this
            }
            async encrypt(e, t) {
                let r = new(0, n.CompactEncrypt)(i.encoder.encode(JSON.stringify(this._payload)));
                return this._replicateIssuerAsHeader && (this._protectedHeader = {
                    ...this._protectedHeader,
                    iss: this._payload.iss
                }), this._replicateSubjectAsHeader && (this._protectedHeader = {
                    ...this._protectedHeader,
                    sub: this._payload.sub
                }), this._replicateAudienceAsHeader && (this._protectedHeader = {
                    ...this._protectedHeader,
                    aud: this._payload.aud
                }), r.setProtectedHeader(this._protectedHeader), this._iv && r.setInitializationVector(this._iv), this._cek && r.setContentEncryptionKey(this._cek), this._keyManagementParameters && r.setKeyManagementParameters(this._keyManagementParameters), r.encrypt(e, t)
            }
        }
    }, {
        "../jwe/compact/encrypt.js": "3oyTC",
        "../lib/buffer_utils.js": "3OSXK",
        "./produce.js": "6ZTKR",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    hlmFr: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "calculateJwkThumbprint", () => f), a.export(r, "calculateJwkThumbprintUri", () => h);
        var n = e("../runtime/digest.js"),
            i = a.interopDefault(n),
            o = e("../runtime/base64url.js"),
            l = e("../util/errors.js"),
            c = e("../lib/buffer_utils.js"),
            d = e("../lib/is_object.js"),
            u = a.interopDefault(d);
        let p = (e, t) => {
            if ("string" != typeof e || !e) throw new(0, l.JWKInvalid)(`${t} missing or invalid`)
        };
        async function f(e, t) {
            let r;
            if (!(0, u.default)(e)) throw TypeError("JWK must be an object");
            if (t ?? (t = "sha256"), "sha256" !== t && "sha384" !== t && "sha512" !== t) throw TypeError('digestAlgorithm must one of "sha256", "sha384", or "sha512"');
            switch (e.kty) {
                case "EC":
                    p(e.crv, '"crv" (Curve) Parameter'), p(e.x, '"x" (X Coordinate) Parameter'), p(e.y, '"y" (Y Coordinate) Parameter'), r = {
                        crv: e.crv,
                        kty: e.kty,
                        x: e.x,
                        y: e.y
                    };
                    break;
                case "OKP":
                    p(e.crv, '"crv" (Subtype of Key Pair) Parameter'), p(e.x, '"x" (Public Key) Parameter'), r = {
                        crv: e.crv,
                        kty: e.kty,
                        x: e.x
                    };
                    break;
                case "RSA":
                    p(e.e, '"e" (Exponent) Parameter'), p(e.n, '"n" (Modulus) Parameter'), r = {
                        e: e.e,
                        kty: e.kty,
                        n: e.n
                    };
                    break;
                case "oct":
                    p(e.k, '"k" (Key Value) Parameter'), r = {
                        k: e.k,
                        kty: e.kty
                    };
                    break;
                default:
                    throw new(0, l.JOSENotSupported)('"kty" (Key Type) Parameter missing or unsupported')
            }
            let s = c.encoder.encode(JSON.stringify(r));
            return (0, o.encode)(await (0, i.default)(t, s))
        }
        async function h(e, t) {
            t ?? (t = "sha256");
            let r = await f(e, t);
            return `urn:ietf:params:oauth:jwk-thumbprint:sha-${t.slice(-3)}:${r}`
        }
    }, {
        "../runtime/digest.js": "fpkwe",
        "../runtime/base64url.js": "By2uJ",
        "../util/errors.js": "2MROB",
        "../lib/buffer_utils.js": "3OSXK",
        "../lib/is_object.js": "kQMV3",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    bAeYV: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "EmbeddedJWK", () => c);
        var n = e("../key/import.js"),
            i = e("../lib/is_object.js"),
            o = a.interopDefault(i),
            l = e("../util/errors.js");
        async function c(e, t) {
            let r = {
                ...e,
                ...t?.header
            };
            if (!(0, o.default)(r.jwk)) throw new(0, l.JWSInvalid)('"jwk" (JSON Web Key) Header Parameter must be a JSON object');
            let s = await (0, n.importJWK)({
                ...r.jwk,
                ext: !0
            }, r.alg);
            if (s instanceof Uint8Array || "public" !== s.type) throw new(0, l.JWSInvalid)('"jwk" (JSON Web Key) Header Parameter must be a public key');
            return s
        }
    }, {
        "../key/import.js": "azICy",
        "../lib/is_object.js": "kQMV3",
        "../util/errors.js": "2MROB",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    ljm8x: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "createLocalJWKSet", () => f);
        var n = e("../key/import.js"),
            i = e("../util/errors.js"),
            o = e("../lib/is_object.js"),
            l = a.interopDefault(o);

        function c(e) {
            return (0, l.default)(e)
        }

        function d(e) {
            return "function" == typeof structuredClone ? structuredClone(e) : JSON.parse(JSON.stringify(e))
        }
        class u {
            constructor(e) {
                if (this._cached = new WeakMap, !(e && "object" == typeof e && Array.isArray(e.keys) && e.keys.every(c))) throw new(0, i.JWKSInvalid)("JSON Web Key Set malformed");
                this._jwks = d(e)
            }
            async getKey(e, t) {
                let {
                    alg: r,
                    kid: s
                } = {
                    ...e,
                    ...t?.header
                }, a = function(e) {
                    switch ("string" == typeof e && e.slice(0, 2)) {
                        case "RS":
                        case "PS":
                            return "RSA";
                        case "ES":
                            return "EC";
                        case "Ed":
                            return "OKP";
                        default:
                            throw new(0, i.JOSENotSupported)('Unsupported "alg" value for a JSON Web Key Set')
                    }
                }(r), n = this._jwks.keys.filter(e => {
                    let t = a === e.kty;
                    if (t && "string" == typeof s && (t = s === e.kid), t && "string" == typeof e.alg && (t = r === e.alg), t && "string" == typeof e.use && (t = "sig" === e.use), t && Array.isArray(e.key_ops) && (t = e.key_ops.includes("verify")), t) switch (r) {
                        case "ES256":
                            t = "P-256" === e.crv;
                            break;
                        case "ES256K":
                            t = "secp256k1" === e.crv;
                            break;
                        case "ES384":
                            t = "P-384" === e.crv;
                            break;
                        case "ES512":
                            t = "P-521" === e.crv;
                            break;
                        case "Ed25519":
                            t = "Ed25519" === e.crv;
                            break;
                        case "EdDSA":
                            t = "Ed25519" === e.crv || "Ed448" === e.crv
                    }
                    return t
                }), {
                    0: o,
                    length: l
                } = n;
                if (0 === l) throw new(0, i.JWKSNoMatchingKey);
                if (1 !== l) {
                    let e = new(0, i.JWKSMultipleMatchingKeys),
                        {
                            _cached: t
                        } = this;
                    throw e[Symbol.asyncIterator] = async function*() {
                        for (let e of n) try {
                            yield await p(t, e, r)
                        } catch {}
                    }, e
                }
                return p(this._cached, o, r)
            }
        }
        async function p(e, t, r) {
            let s = e.get(t) || e.set(t, {}).get(t);
            if (void 0 === s[r]) {
                let e = await (0, n.importJWK)({
                    ...t,
                    ext: !0
                }, r);
                if (e instanceof Uint8Array || "public" !== e.type) throw new(0, i.JWKSInvalid)("JSON Web Key Set members must be public keys");
                s[r] = e
            }
            return s[r]
        }

        function f(e) {
            let t = new u(e),
                r = async (e, r) => t.getKey(e, r);
            return Object.defineProperties(r, {
                jwks: {
                    value: () => d(t._jwks),
                    enumerable: !0,
                    configurable: !1,
                    writable: !1
                }
            }), r
        }
    }, {
        "../key/import.js": "azICy",
        "../util/errors.js": "2MROB",
        "../lib/is_object.js": "kQMV3",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    fONdD: [function(e, t, r, s) {
        let a;
        var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
        n.defineInteropFlag(r), n.export(r, "jwksCache", () => p), n.export(r, "createRemoteJWKSet", () => h), n.export(r, "experimental_jwksCache", () => y);
        var i = e("../runtime/fetch_jwks.js"),
            o = n.interopDefault(i),
            l = e("../util/errors.js"),
            c = e("./local.js"),
            d = e("../lib/is_object.js"),
            u = n.interopDefault(d);
        "undefined" != typeof navigator && navigator.userAgent?.startsWith?.("Mozilla/5.0 ") || (a = "jose/v5.10.0");
        let p = Symbol();
        class f {
            constructor(e, t) {
                if (!(e instanceof URL)) throw TypeError("url must be an instance of URL");
                if (this._url = new URL(e.href), this._options = {
                        agent: t?.agent,
                        headers: t?.headers
                    }, this._timeoutDuration = "number" == typeof t?.timeoutDuration ? t?.timeoutDuration : 5e3, this._cooldownDuration = "number" == typeof t?.cooldownDuration ? t?.cooldownDuration : 3e4, this._cacheMaxAge = "number" == typeof t?.cacheMaxAge ? t?.cacheMaxAge : 6e5, t?.[p] !== void 0) {
                    var r, s;
                    this._cache = t?.[p], r = t?.[p], s = this._cacheMaxAge, !("object" != typeof r || null === r || !("uat" in r) || "number" != typeof r.uat || Date.now() - r.uat >= s) && "jwks" in r && (0, u.default)(r.jwks) && Array.isArray(r.jwks.keys) && Array.prototype.every.call(r.jwks.keys, u.default) && 1 && (this._jwksTimestamp = this._cache.uat, this._local = (0, c.createLocalJWKSet)(this._cache.jwks))
                }
            }
            coolingDown() {
                return "number" == typeof this._jwksTimestamp && Date.now() < this._jwksTimestamp + this._cooldownDuration
            }
            fresh() {
                return "number" == typeof this._jwksTimestamp && Date.now() < this._jwksTimestamp + this._cacheMaxAge
            }
            async getKey(e, t) {
                this._local && this.fresh() || await this.reload();
                try {
                    return await this._local(e, t)
                } catch (r) {
                    if (r instanceof l.JWKSNoMatchingKey && !1 === this.coolingDown()) return await this.reload(), this._local(e, t);
                    throw r
                }
            }
            async reload() {
                this._pendingFetch && ("undefined" != typeof WebSocketPair || "undefined" != typeof navigator && "Cloudflare-Workers" === navigator.userAgent || "undefined" != typeof EdgeRuntime && "vercel" === EdgeRuntime) && (this._pendingFetch = void 0);
                let e = new Headers(this._options.headers);
                a && !e.has("User-Agent") && (e.set("User-Agent", a), this._options.headers = Object.fromEntries(e.entries())), this._pendingFetch || (this._pendingFetch = (0, o.default)(this._url, this._timeoutDuration, this._options).then(e => {
                    this._local = (0, c.createLocalJWKSet)(e), this._cache && (this._cache.uat = Date.now(), this._cache.jwks = e), this._jwksTimestamp = Date.now(), this._pendingFetch = void 0
                }).catch(e => {
                    throw this._pendingFetch = void 0, e
                })), await this._pendingFetch
            }
        }

        function h(e, t) {
            let r = new f(e, t),
                s = async (e, t) => r.getKey(e, t);
            return Object.defineProperties(s, {
                coolingDown: {
                    get: () => r.coolingDown(),
                    enumerable: !0,
                    configurable: !1
                },
                fresh: {
                    get: () => r.fresh(),
                    enumerable: !0,
                    configurable: !1
                },
                reload: {
                    value: () => r.reload(),
                    enumerable: !0,
                    configurable: !1,
                    writable: !1
                },
                reloading: {
                    get: () => !!r._pendingFetch,
                    enumerable: !0,
                    configurable: !1
                },
                jwks: {
                    value: () => r._local?.jwks(),
                    enumerable: !0,
                    configurable: !1,
                    writable: !1
                }
            }), s
        }
        let y = p
    }, {
        "../runtime/fetch_jwks.js": "9YSbc",
        "../util/errors.js": "2MROB",
        "./local.js": "ljm8x",
        "../lib/is_object.js": "kQMV3",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "9YSbc": [function(e, t, r, s) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = e("../util/errors.js");
        r.default = async (e, t, r) => {
            let s, n, i = !1;
            "function" == typeof AbortController && (s = new AbortController, n = setTimeout(() => {
                i = !0, s.abort()
            }, t));
            let o = await fetch(e.href, {
                signal: s ? s.signal : void 0,
                redirect: "manual",
                headers: r.headers
            }).catch(e => {
                if (i) throw new(0, a.JWKSTimeout);
                throw e
            });
            if (void 0 !== n && clearTimeout(n), 200 !== o.status) throw new(0, a.JOSEError)("Expected 200 OK from the JSON Web Key Set HTTP response");
            try {
                return await o.json()
            } catch {
                throw new(0, a.JOSEError)("Failed to parse the JSON Web Key Set HTTP response as JSON")
            }
        }
    }, {
        "../util/errors.js": "2MROB",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    TdmmA: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "UnsecuredJWT", () => u);
        var n = e("../runtime/base64url.js"),
            i = e("../lib/buffer_utils.js"),
            o = e("../util/errors.js"),
            l = e("../lib/jwt_claims_set.js"),
            c = a.interopDefault(l),
            d = e("./produce.js");
        class u extends d.ProduceJWT {
            encode() {
                let e = n.encode(JSON.stringify({
                        alg: "none"
                    })),
                    t = n.encode(JSON.stringify(this._payload));
                return `${e}.${t}.`
            }
            static decode(e, t) {
                let r;
                if ("string" != typeof e) throw new(0, o.JWTInvalid)("Unsecured JWT must be a string");
                let {
                    0: s,
                    1: a,
                    2: l,
                    length: d
                } = e.split(".");
                if (3 !== d || "" !== l) throw new(0, o.JWTInvalid)("Invalid Unsecured JWT");
                try {
                    if (r = JSON.parse(i.decoder.decode(n.decode(s))), "none" !== r.alg) throw Error()
                } catch {
                    throw new(0, o.JWTInvalid)("Invalid Unsecured JWT")
                }
                return {
                    payload: (0, c.default)(r, n.decode(a), t),
                    header: r
                }
            }
        }
    }, {
        "../runtime/base64url.js": "By2uJ",
        "../lib/buffer_utils.js": "3OSXK",
        "../util/errors.js": "2MROB",
        "../lib/jwt_claims_set.js": "1CtcQ",
        "./produce.js": "6ZTKR",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "7jXGQ": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "decodeProtectedHeader", () => c);
        var n = e("./base64url.js"),
            i = e("../lib/buffer_utils.js"),
            o = e("../lib/is_object.js"),
            l = a.interopDefault(o);

        function c(e) {
            let t;
            if ("string" == typeof e) {
                let r = e.split(".");
                (3 === r.length || 5 === r.length) && ([t] = r)
            } else if ("object" == typeof e && e)
                if ("protected" in e) t = e.protected;
                else throw TypeError("Token does not contain a Protected Header");
            try {
                if ("string" != typeof t || !t) throw Error();
                let e = JSON.parse(i.decoder.decode((0, n.decode)(t)));
                if (!(0, l.default)(e)) throw Error();
                return e
            } catch {
                throw TypeError("Invalid Token or Protected Header formatting")
            }
        }
    }, {
        "./base64url.js": "gHZ5h",
        "../lib/buffer_utils.js": "3OSXK",
        "../lib/is_object.js": "kQMV3",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    gHZ5h: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "encode", () => i), a.export(r, "decode", () => o);
        var n = e("../runtime/base64url.js");
        let i = n.encode,
            o = n.decode
    }, {
        "../runtime/base64url.js": "By2uJ",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    eIcG3: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "decodeJwt", () => d);
        var n = e("./base64url.js"),
            i = e("../lib/buffer_utils.js"),
            o = e("../lib/is_object.js"),
            l = a.interopDefault(o),
            c = e("./errors.js");

        function d(e) {
            let t, r;
            if ("string" != typeof e) throw new(0, c.JWTInvalid)("JWTs must use Compact JWS serialization, JWT must be a string");
            let {
                1: s,
                length: a
            } = e.split(".");
            if (5 === a) throw new(0, c.JWTInvalid)("Only JWTs using Compact JWS serialization can be decoded");
            if (3 !== a) throw new(0, c.JWTInvalid)("Invalid JWT");
            if (!s) throw new(0, c.JWTInvalid)("JWTs must contain a payload");
            try {
                t = (0, n.decode)(s)
            } catch {
                throw new(0, c.JWTInvalid)("Failed to base64url decode the payload")
            }
            try {
                r = JSON.parse(i.decoder.decode(t))
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
    ktMh4: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "generateKeyPair", () => i);
        var n = e("../runtime/generate.js");
        async function i(e, t) {
            return (0, n.generateKeyPair)(e, t)
        }
    }, {
        "../runtime/generate.js": "9B8av",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "9B8av": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "generateSecret", () => d), a.export(r, "generateKeyPair", () => p);
        var n = e("./webcrypto.js"),
            i = a.interopDefault(n),
            o = e("../util/errors.js"),
            l = e("./random.js"),
            c = a.interopDefault(l);
        async function d(e, t) {
            let r, s, a;
            switch (e) {
                case "HS256":
                case "HS384":
                case "HS512":
                    r = parseInt(e.slice(-3), 10), s = {
                        name: "HMAC",
                        hash: `SHA-${r}`,
                        length: r
                    }, a = ["sign", "verify"];
                    break;
                case "A128CBC-HS256":
                case "A192CBC-HS384":
                case "A256CBC-HS512":
                    return r = parseInt(e.slice(-3), 10), (0, c.default)(new Uint8Array(r >> 3));
                case "A128KW":
                case "A192KW":
                case "A256KW":
                    s = {
                        name: "AES-KW",
                        length: r = parseInt(e.slice(1, 4), 10)
                    }, a = ["wrapKey", "unwrapKey"];
                    break;
                case "A128GCMKW":
                case "A192GCMKW":
                case "A256GCMKW":
                case "A128GCM":
                case "A192GCM":
                case "A256GCM":
                    s = {
                        name: "AES-GCM",
                        length: r = parseInt(e.slice(1, 4), 10)
                    }, a = ["encrypt", "decrypt"];
                    break;
                default:
                    throw new(0, o.JOSENotSupported)('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
            }
            return i.default.subtle.generateKey(s, t?.extractable ?? !1, a)
        }

        function u(e) {
            let t = e?.modulusLength ?? 2048;
            if ("number" != typeof t || t < 2048) throw new(0, o.JOSENotSupported)("Invalid or unsupported modulusLength option provided, 2048 bits or larger keys must be used");
            return t
        }
        async function p(e, t) {
            let r, s;
            switch (e) {
                case "PS256":
                case "PS384":
                case "PS512":
                    r = {
                        name: "RSA-PSS",
                        hash: `SHA-${e.slice(-3)}`,
                        publicExponent: new Uint8Array([1, 0, 1]),
                        modulusLength: u(t)
                    }, s = ["sign", "verify"];
                    break;
                case "RS256":
                case "RS384":
                case "RS512":
                    r = {
                        name: "RSASSA-PKCS1-v1_5",
                        hash: `SHA-${e.slice(-3)}`,
                        publicExponent: new Uint8Array([1, 0, 1]),
                        modulusLength: u(t)
                    }, s = ["sign", "verify"];
                    break;
                case "RSA-OAEP":
                case "RSA-OAEP-256":
                case "RSA-OAEP-384":
                case "RSA-OAEP-512":
                    r = {
                        name: "RSA-OAEP",
                        hash: `SHA-${parseInt(e.slice(-3),10)||1}`,
                        publicExponent: new Uint8Array([1, 0, 1]),
                        modulusLength: u(t)
                    }, s = ["decrypt", "unwrapKey", "encrypt", "wrapKey"];
                    break;
                case "ES256":
                    r = {
                        name: "ECDSA",
                        namedCurve: "P-256"
                    }, s = ["sign", "verify"];
                    break;
                case "ES384":
                    r = {
                        name: "ECDSA",
                        namedCurve: "P-384"
                    }, s = ["sign", "verify"];
                    break;
                case "ES512":
                    r = {
                        name: "ECDSA",
                        namedCurve: "P-521"
                    }, s = ["sign", "verify"];
                    break;
                case "Ed25519":
                    r = {
                        name: "Ed25519"
                    }, s = ["sign", "verify"];
                    break;
                case "EdDSA": {
                    s = ["sign", "verify"];
                    let e = t?.crv ?? "Ed25519";
                    switch (e) {
                        case "Ed25519":
                        case "Ed448":
                            r = {
                                name: e
                            };
                            break;
                        default:
                            throw new(0, o.JOSENotSupported)("Invalid or unsupported crv option provided")
                    }
                    break
                }
                case "ECDH-ES":
                case "ECDH-ES+A128KW":
                case "ECDH-ES+A192KW":
                case "ECDH-ES+A256KW": {
                    s = ["deriveKey", "deriveBits"];
                    let e = t?.crv ?? "P-256";
                    switch (e) {
                        case "P-256":
                        case "P-384":
                        case "P-521":
                            r = {
                                name: "ECDH",
                                namedCurve: e
                            };
                            break;
                        case "X25519":
                        case "X448":
                            r = {
                                name: e
                            };
                            break;
                        default:
                            throw new(0, o.JOSENotSupported)("Invalid or unsupported crv option provided, supported values are P-256, P-384, P-521, X25519, and X448")
                    }
                    break
                }
                default:
                    throw new(0, o.JOSENotSupported)('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
            }
            return i.default.subtle.generateKey(r, t?.extractable ?? !1, s)
        }
    }, {
        "./webcrypto.js": "8W0ZQ",
        "../util/errors.js": "2MROB",
        "./random.js": "eG44V",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "1pU2l": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "generateSecret", () => i);
        var n = e("../runtime/generate.js");
        async function i(e, t) {
            return (0, n.generateSecret)(e, t)
        }
    }, {
        "../runtime/generate.js": "9B8av",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    bIO4P: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var n = e("../runtime/runtime.js");
        r.default = a.interopDefault(n).default
    }, {
        "../runtime/runtime.js": "19xGX",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "19xGX": [function(e, t, r, s) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = "WebCryptoAPI"
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    kxNZ1: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "AuthApi", () => c);
        var n = e("../storage/istorage.js"),
            i = e("../core/configuration/authentication.js"),
            o = e("../core/errors/openfortError.js"),
            l = e("../types/types.js");
        class c {
            storage;
            authManager;
            validateAndRefreshToken;
            ensureInitialized;
            eventEmitter;
            constructor(e, t, r, s, a) {
                this.storage = e, this.authManager = t, this.validateAndRefreshToken = r, this.ensureInitialized = s, this.eventEmitter = a
            }
            async logInWithEmailPassword({
                email: e,
                password: t,
                ecosystemGame: r
            }) {
                if (await this.ensureInitialized(), await i.Authentication.fromStorage(this.storage)) throw new(0, o.OpenfortError)("Already logged in", o.OpenfortErrorType.ALREADY_LOGGED_IN_ERROR);
                let s = await this.authManager.loginEmailPassword(e, t, r);
                return "action" in s || new(0, i.Authentication)("jwt", s.token, s.player.id, s.refreshToken).save(this.storage), s
            }
            async signUpGuest() {
                if (await this.ensureInitialized(), await i.Authentication.fromStorage(this.storage)) throw new(0, o.OpenfortError)("Already logged in", o.OpenfortErrorType.ALREADY_LOGGED_IN_ERROR);
                let e = await this.authManager.registerGuest();
                return new(0, i.Authentication)("jwt", e.token, e.player.id, e.refreshToken).save(this.storage), e
            }
            async signUpWithEmailPassword({
                email: e,
                password: t,
                options: r,
                ecosystemGame: s
            }) {
                if (await this.ensureInitialized(), await i.Authentication.fromStorage(this.storage)) throw new(0, o.OpenfortError)("Already logged in", o.OpenfortErrorType.ALREADY_LOGGED_IN_ERROR);
                let a = await this.authManager.signupEmailPassword(e, t, r?.data.name, s);
                return "action" in a || new(0, i.Authentication)("jwt", a.token, a.player.id, a.refreshToken).save(this.storage), a
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
                if (await this.ensureInitialized(), await i.Authentication.fromStorage(this.storage)) throw new(0, o.OpenfortError)("Already logged in", o.OpenfortErrorType.ALREADY_LOGGED_IN_ERROR);
                return await this.authManager.initOAuth(e, t, r)
            }
            async initLinkOAuth({
                provider: e,
                options: t,
                ecosystemGame: r
            }) {
                await this.validateAndRefreshToken();
                let s = await i.Authentication.fromStorage(this.storage);
                if (!s) throw new(0, o.OpenfortError)("No authentication found", o.OpenfortErrorType.NOT_LOGGED_IN_ERROR);
                return await this.authManager.linkOAuth(s, e, t, r)
            }
            async linkThirdPartyProvider({
                provider: e,
                token: t,
                tokenType: r
            }) {
                await this.validateAndRefreshToken();
                let s = await i.Authentication.fromStorage(this.storage);
                if (!s) throw new(0, o.OpenfortError)("No authentication found", o.OpenfortErrorType.NOT_LOGGED_IN_ERROR);
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
                return new(0, i.Authentication)("jwt", t.token, t.player.id, t.refreshToken).save(this.storage), t
            }
            async authenticateWithThirdPartyProvider({
                provider: e,
                token: t,
                tokenType: r,
                ecosystemGame: s
            }) {
                await this.ensureInitialized();
                let a = await this.authManager.authenticateThirdParty(e, t, r, s);
                return new(0, i.Authentication)("third_party", t, a.id, null, e, r).save(this.storage), a
            }
            async loginWithIdToken({
                provider: e,
                token: t,
                ecosystemGame: r
            }) {
                if (await this.ensureInitialized(), await i.Authentication.fromStorage(this.storage)) throw new(0, o.OpenfortError)("Already logged in", o.OpenfortErrorType.ALREADY_LOGGED_IN_ERROR);
                let s = await this.authManager.loginWithIdToken(e, t, r);
                return new(0, i.Authentication)("jwt", s.token, s.player.id, s.refreshToken).save(this.storage), s
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
                if (await this.ensureInitialized(), await i.Authentication.fromStorage(this.storage)) throw new(0, o.OpenfortError)("Already logged in", o.OpenfortErrorType.ALREADY_LOGGED_IN_ERROR);
                let a = await this.authManager.authenticateSIWE(e, t, r, s);
                return new(0, i.Authentication)("jwt", a.token, a.player.id, a.refreshToken).save(this.storage), a
            }
            async linkWallet({
                signature: e,
                message: t,
                walletClientType: r,
                connectorType: s,
                authToken: a
            }) {
                return await this.validateAndRefreshToken(), await this.authManager.linkWallet(e, t, r, s, a)
            }
            async unlinkWallet({
                address: e,
                authToken: t
            }) {
                return await this.validateAndRefreshToken(), await this.authManager.unlinkWallet(e, t)
            }
            async storeCredentials(e) {
                if (await this.ensureInitialized(), !e.player) throw new(0, o.OpenfortError)("Player ID is required to store credentials", o.OpenfortErrorType.INVALID_CONFIGURATION);
                new(0, i.Authentication)("jwt", e.accessToken, e.player, e.refreshToken).save(this.storage)
            }
            async logout() {
                let e = await i.Authentication.fromStorage(this.storage);
                if (e) {
                    try {
                        "third_party" !== e.type && await this.authManager.logout(e.token, e?.refreshToken)
                    } catch (e) {}
                    this.storage.remove(n.StorageKeys.AUTHENTICATION), this.eventEmitter.emit(l.OpenfortEvents.LOGGED_OUT)
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "EmbeddedWalletApi", () => b);
        var n = e("../../../packages/internal/openapi-clients/dist/index.js"),
            i = e("../storage/istorage.js"),
            o = e("../core/configuration/account.js"),
            l = e("../core/configuration/authentication.js"),
            c = e("../core/config/config.js"),
            d = e("../core/errors/openfortError.js"),
            u = e("../wallets/evm/walletHelpers.js"),
            p = e("../wallets/evm/evmProvider.js");
        e("../wallets/evm/types.js");
        var f = e("../wallets/evm/provider/eip6963.js"),
            h = e("../types/types.js"),
            y = e("../wallets/iframeManager.js"),
            m = e("../wallets/embedded.js");
        e("../wallets/messaging/browserMessenger/backwardCompatibility.js");
        var g = e("../wallets/messaging/browserMessenger/messengers/WindowMessenger.js"),
            E = a.interopDefault(g),
            w = e("../wallets/messaging/ReactNativeMessenger.js"),
            j = e("../utils/debug.js");
        class b {
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
                    (0, j.debugLog)("Handling token refresh event in EmbeddedWalletApi"), this.handleTokenRefreshed()
                }), this.eventEmitter.on(h.OpenfortEvents.LOGGED_OUT, () => {
                    (0, j.debugLog)("Handling logout event in EmbeddedWalletApi"), this.handleLogout()
                })
            }
            get backendApiClients() {
                let e = c.SDKConfiguration.fromStorage();
                if (!e) throw new(0, d.OpenfortError)("Configuration not found", d.OpenfortErrorType.INVALID_CONFIGURATION);
                return new(0, n.BackendApiClients)({
                    basePath: e.backendUrl,
                    accessToken: e.baseConfiguration.publishableKey
                })
            }
            async getIframeManager() {
                if ((0, j.debugLog)("[HANDSHAKE DEBUG] getIframeManager called"), this.iframeManager) return (0, j.debugLog)("[HANDSHAKE DEBUG] Returning existing iframeManager instance"), this.iframeManager;
                if (this.iframeManagerPromise) return (0, j.debugLog)("[HANDSHAKE DEBUG] Returning existing iframeManagerPromise"), this.iframeManagerPromise;
                (0, j.debugLog)("[HANDSHAKE DEBUG] Creating new iframeManager"), this.iframeManagerPromise = this.createIframeManager();
                try {
                    return (0, j.debugLog)("[HANDSHAKE DEBUG] Awaiting iframeManager creation"), this.iframeManager = await this.iframeManagerPromise, (0, j.debugLog)("[HANDSHAKE DEBUG] IframeManager created successfully"), this.iframeManagerPromise = null, this.iframeManager
                } catch (e) {
                    throw (0, j.debugLog)("[HANDSHAKE DEBUG] Error creating iframeManager:", e), this.iframeManagerPromise = null, e
                }
            }
            async createIframeManager() {
                let e;
                (0, j.debugLog)("[HANDSHAKE DEBUG] createIframeManager starting");
                let t = c.SDKConfiguration.fromStorage();
                if (!t) throw (0, j.debugLog)("[HANDSHAKE DEBUG] Configuration not found"), new(0, d.OpenfortError)("Configuration not found", d.OpenfortErrorType.INVALID_CONFIGURATION);
                if ((0, j.debugLog)("[HANDSHAKE DEBUG] Configuration found"), this.messagePoster)(0, j.debugLog)("[HANDSHAKE DEBUG] Creating ReactNativeMessenger with messagePoster"), this.messenger = new(0, w.ReactNativeMessenger)(this.messagePoster), (0, j.debugLog)("[HANDSHAKE DEBUG] Created new ReactNativeMessenger instance"), e = this.messenger;
                else {
                    (0, j.debugLog)("[HANDSHAKE DEBUG] Creating WindowMessenger for browser mode");
                    let r = this.createIframe(t.iframeUrl),
                        s = new URL(t.iframeUrl).origin;
                    e = new(0, E.default)({
                        remoteWindow: r.contentWindow,
                        allowedOrigins: [s]
                    }), (0, j.debugLog)("[HANDSHAKE DEBUG] Created WindowMessenger")
                }
                return (0, j.debugLog)("[HANDSHAKE DEBUG] Creating IframeManager instance"), new(0, y.IframeManager)(t, this.storage, e)
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
                let e = await this.getIframeManager();
                return new(0, m.EmbeddedSigner)(e, this.storage, this.backendApiClients, this.eventEmitter)
            }
            createIframe(e) {
                if ("undefined" == typeof document) throw new(0, d.OpenfortError)("Document is not available. Please provide a message poster for non-browser environments.", d.OpenfortErrorType.INVALID_CONFIGURATION);
                let t = document.getElementById("openfort-iframe");
                t && t.remove();
                let r = document.createElement("iframe");
                return r.style.display = "none", r.id = "openfort-iframe", r.src = e, document.body.appendChild(r), (0, j.debugLog)("Iframe created and appended to document"), r
            }
            async configure(e) {
                let t;
                await this.validateAndRefreshToken();
                let r = e.recoveryParams ?? {
                    recoveryMethod: h.RecoveryMethod.AUTOMATIC
                };
                (r.recoveryMethod === h.RecoveryMethod.PASSWORD || e.shieldAuthentication?.encryptionSession) && (t = {
                    encryptionSession: e.shieldAuthentication?.encryptionSession,
                    recoveryPassword: r.recoveryMethod === h.RecoveryMethod.PASSWORD ? r.password : void 0
                });
                let s = await this.ensureSigner(),
                    a = await s.configure({
                        chainId: e.chainId,
                        entropy: t
                    }),
                    n = await l.Authentication.fromStorage(this.storage);
                return {
                    id: a.id,
                    chainId: a.chainId,
                    user: n.player,
                    address: a.address,
                    ownerAddress: a.ownerAddress,
                    chainType: a.chainType,
                    accountType: a.accountType,
                    implementationType: a.implementationType
                }
            }
            async create(e) {
                let t;
                await this.validateAndRefreshToken();
                let r = e.recoveryParams ?? {
                    recoveryMethod: h.RecoveryMethod.AUTOMATIC
                };
                (r.recoveryMethod === h.RecoveryMethod.PASSWORD || e.shieldAuthentication?.encryptionSession) && (t = {
                    encryptionSession: e.shieldAuthentication?.encryptionSession,
                    recoveryPassword: r.recoveryMethod === h.RecoveryMethod.PASSWORD ? r.password : void 0
                });
                let s = await this.ensureSigner(),
                    a = await s.create({
                        accountType: e.accountType,
                        chainType: e.chainType,
                        chainId: e.chainId,
                        entropy: t
                    });
                this.signer = null, this.signerPromise = null;
                let n = await l.Authentication.fromStorage(this.storage);
                return {
                    id: a.id,
                    chainId: a.chainId,
                    user: n.player,
                    address: a.address,
                    ownerAddress: a.ownerAddress,
                    chainType: a.chainType,
                    accountType: a.accountType,
                    implementationType: a.implementationType
                }
            }
            async recover(e) {
                let t;
                await this.validateAndRefreshToken();
                let r = e.recoveryParams ?? {
                    recoveryMethod: h.RecoveryMethod.AUTOMATIC
                };
                (r.recoveryMethod === h.RecoveryMethod.PASSWORD || e.shieldAuthentication?.encryptionSession) && (t = {
                    encryptionSession: e.shieldAuthentication?.encryptionSession,
                    recoveryPassword: r.recoveryMethod === h.RecoveryMethod.PASSWORD ? r.password : void 0
                });
                let s = await this.ensureSigner(),
                    a = await s.recover({
                        account: e.account,
                        entropy: t
                    });
                this.signer = null, this.signerPromise = null;
                let n = await l.Authentication.fromStorage(this.storage);
                return {
                    id: a.id,
                    chainId: a.chainId,
                    user: n.player,
                    address: a.address,
                    ownerAddress: a.ownerAddress,
                    chainType: a.chainType,
                    accountType: a.accountType,
                    implementationType: a.implementationType
                }
            }
            async signMessage(e, t) {
                await this.validateAndRefreshToken();
                let r = await this.ensureSigner(),
                    {
                        hashMessage: s = !0,
                        arrayifyMessage: a = !1
                    } = t || {};
                return await r.sign(e, a, s)
            }
            async signTypedData(t, r, s) {
                await this.validateAndRefreshToken();
                let a = await this.ensureSigner(),
                    n = await o.Account.fromStorage(this.storage);
                if (!n) throw new(0, d.OpenfortError)("No account found", d.OpenfortErrorType.MISSING_SIGNER_ERROR);
                let i = {
                    ...r
                };
                delete i.EIP712Domain;
                let {
                    _TypedDataEncoder: l
                } = await e("e9b2dbfd4a72e730"), c = l.hash(t, i, s);
                return await (0, u.signMessage)({
                    hash: c,
                    implementationType: n.implementationType || n.type,
                    chainId: Number(n.chainId),
                    signer: a,
                    address: n.address,
                    ownerAddress: n.ownerAddress,
                    factoryAddress: n.factoryAddress,
                    salt: n.salt
                })
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
                if ("password" === e && !t) throw new(0, d.OpenfortError)("Recovery password is required", d.OpenfortErrorType.INVALID_CONFIGURATION);
                await s.setEmbeddedRecovery({
                    recoveryMethod: e,
                    recoveryPassword: t,
                    encryptionSession: r
                })
            }
            async get() {
                let e = await o.Account.fromStorage(this.storage);
                if (!e) throw new(0, d.OpenfortError)("No signer configured", d.OpenfortErrorType.MISSING_SIGNER_ERROR);
                let t = await l.Authentication.fromStorage(this.storage);
                if (!t) throw new(0, d.OpenfortError)("No access token found", d.OpenfortErrorType.NOT_LOGGED_IN_ERROR);
                return {
                    id: e.id,
                    chainId: e.chainId,
                    user: t.player,
                    address: e.address,
                    ownerAddress: e.ownerAddress,
                    chainType: e.chainType,
                    accountType: e.accountType,
                    implementationType: e.implementationType
                }
            }
            async list() {
                let e = c.SDKConfiguration.fromStorage();
                if (!e) throw new(0, d.OpenfortError)("Configuration not found", d.OpenfortErrorType.INVALID_CONFIGURATION);
                await this.validateAndRefreshToken();
                let t = await l.Authentication.fromStorage(this.storage);
                if (!t) throw new(0, d.OpenfortError)("No access token found", d.OpenfortErrorType.NOT_LOGGED_IN_ERROR);
                return (0, d.withOpenfortError)(async () => (await this.backendApiClients.accountsApi.getAccountsV2({
                    accountType: h.AccountTypeEnum.SMART_ACCOUNT
                }, {
                    headers: {
                        authorization: `Bearer ${e.baseConfiguration.publishableKey}`,
                        "x-player-token": t.token,
                        "x-auth-provider": t.thirdPartyProvider,
                        "x-token-type": t.thirdPartyTokenType
                    }
                })).data.data.map(e => ({
                    user: e.user,
                    chainType: e.accountType,
                    id: e.id,
                    address: e.address,
                    ownerAddress: e.ownerAddress,
                    accountType: e.accountType,
                    createdAt: e.createdAt,
                    implementationType: e.smartAccount?.implementationType,
                    chainId: e.chainId
                })), {
                    default: d.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async getEmbeddedState() {
                try {
                    if (!await l.Authentication.fromStorage(this.storage)) return h.EmbeddedState.UNAUTHENTICATED;
                    return await o.Account.fromStorage(this.storage) ? h.EmbeddedState.READY : h.EmbeddedState.EMBEDDED_SIGNER_NOT_CONFIGURED
                } catch (e) {
                    return (0, j.debugLog)("Failed to get embedded state:", e), h.EmbeddedState.UNAUTHENTICATED
                }
            }
            async getEthereumProvider(e) {
                await this.ensureInitialized();
                let t = {
                        announceProvider: !0,
                        ...e
                    },
                    r = await l.Authentication.fromStorage(this.storage),
                    s = await o.Account.fromStorage(this.storage);
                return this.provider ? this.provider && t.policy && this.provider.updatePolicy(t.policy) : (this.provider = new(0, p.EvmProvider)({
                    storage: this.storage,
                    openfortEventEmitter: this.eventEmitter,
                    ensureSigner: this.ensureSigner.bind(this),
                    account: s || void 0,
                    authentication: r || void 0,
                    backendApiClients: this.backendApiClients,
                    policyId: t.policy,
                    validateAndRefreshSession: this.validateAndRefreshToken.bind(this),
                    chains: t.chains
                }), t.announceProvider && (0, f.announceProvider)({
                    info: {
                        ...f.openfortProviderInfo,
                        ...t.providerInfo
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
                    return (0, j.debugLog)("Ping failed:", e), !1
                }
            }
            getURL() {
                let e = c.SDKConfiguration.fromStorage();
                if (!e) throw new(0, d.OpenfortError)("Configuration not found", d.OpenfortErrorType.INVALID_CONFIGURATION);
                return e.iframeUrl
            }
            async setMessagePoster(e) {
                if (!e || "function" != typeof e.postMessage) throw new(0, d.OpenfortError)("Invalid message poster", d.OpenfortErrorType.INVALID_CONFIGURATION);
                this.messagePoster = e, this.messenger && this.messenger.destroy(), this.iframeManager && this.iframeManager.destroy(), this.signer = null, this.signerPromise = null, this.iframeManager = null, this.iframeManagerPromise = null, this.messenger = null
            }
            async handleTokenRefreshed() {
                if (this.iframeManager) try {
                    await this.iframeManager.updateAuthentication(), (0, j.debugLog)("Updated IframeManager authentication after token refresh")
                } catch (e) {
                    (0, j.debugLog)("Failed to update IframeManager authentication:", e)
                } else(0, j.debugLog)("IframeManager not initialized, skipping authentication update")
            }
            async handleLogout() {
                this.provider = null, this.messenger = null, this.iframeManager = null, this.iframeManagerPromise = null, this.signer = null, this.signerPromise = null, this.storage.remove(i.StorageKeys.ACCOUNT)
            }
            async onMessage(e) {
                if (!e || "object" != typeof e) return void(0, j.debugLog)("Invalid message received:", e);
                (0, j.debugLog)("[HANDSHAKE DEBUG] EmbeddedWalletApi onMessage:", e);
                let t = "penpal" === e.namespace && "SYN" === e.type || e.penpal && "string" == typeof e.penpal;
                if (t && this.messenger && this.messagePoster) return (0, j.debugLog)("[HANDSHAKE DEBUG] Passing message directly to existing ReactNativeMessenger"), void this.messenger.handleMessage(e);
                let r = await this.getIframeManager();
                (0, j.debugLog)(`[HANDSHAKE DEBUG] IframeManager obtained, isLoaded: ${r.isLoaded()}`), t && !r.isLoaded() && (0, j.debugLog)("[HANDSHAKE DEBUG] Received penpal message before connection initialized, setting up connection..."), (0, j.debugLog)("[HANDSHAKE DEBUG] Calling iframeManager.onMessage"), await r.onMessage(e), (0, j.debugLog)("[HANDSHAKE DEBUG] iframeManager.onMessage completed")
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
        e9b2dbfd4a72e730: "6eWeC",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    arpu2: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "signMessage", () => i);
        var n = e("../../types/types.js");
        let i = async t => {
            let {
                hash: r,
                signer: s,
                ownerAddress: a,
                factoryAddress: i,
                salt: o,
                chainId: l,
                address: c,
                implementationType: d
            } = t, u = r;
            if ([n.AccountType.UPGRADEABLE_V5, n.AccountType.UPGRADEABLE_V6, n.AccountType.ZKSYNC_UPGRADEABLE_V1, n.AccountType.ZKSYNC_UPGRADEABLE_V2].includes(d)) {
                let t = {
                        name: "Openfort",
                        version: "0.5",
                        chainId: Number(l),
                        verifyingContract: c
                    },
                    r = {
                        hashedMessage: u
                    },
                    {
                        _TypedDataEncoder: s
                    } = await e("9ea20aecf4a918ce");
                u = s.hash(t, {
                    OpenfortMessage: [{
                        name: "hashedMessage",
                        type: "bytes32"
                    }]
                }, r)
            }
            let p = await s.sign(u, !1, !1);
            if (i && o && [n.AccountType.UPGRADEABLE_V5, n.AccountType.UPGRADEABLE_V6].includes(d)) {
                let {
                    id: t
                } = await e("9ea20aecf4a918ce"), {
                    defaultAbiCoder: r
                } = await e("5ed2fd0dd216bb46"), {
                    hexConcat: s
                } = await e("553cda3d14fc6f01"), n = s([t("createAccountWithNonce(address,bytes32,bool)").slice(0, 10), r.encode(["address", "bytes32", "bool"], [a, o, !1])]);
                return s([r.encode(["address", "bytes", "bytes"], [i, n, p]), "0x6492649264926492649264926492649264926492649264926492649264926492"])
            }
            return p
        }
    }, {
        "../../types/types.js": "fUPIN",
        "9ea20aecf4a918ce": "6eWeC",
        "5ed2fd0dd216bb46": "6suBx",
        "553cda3d14fc6f01": "kcvZk",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "6eWeC": [function(e, t, r, s) {
        t.exports = Promise.all([e("1f07445952e3602a")(t.bundle.resolve("gNKqS")), e("1f07445952e3602a")(t.bundle.resolve("2XE7A"))]).then(() => t.bundle.root("jLDfB"))
    }, {
        "1f07445952e3602a": "6IWJC"
    }],
    "6suBx": [function(e, t, r, s) {
        t.exports = Promise.all([e("33486af1e73ea373")(t.bundle.resolve("gNKqS")), e("33486af1e73ea373")(t.bundle.resolve("2XE7A")), e("33486af1e73ea373")(t.bundle.resolve("lj5Vn"))]).then(() => t.bundle.root("gbtNr"))
    }, {
        "33486af1e73ea373": "6IWJC"
    }],
    kcvZk: [function(e, t, r, s) {
        t.exports = e("23f4db44e6edbcd5")(t.bundle.resolve("gNKqS")).then(() => t.bundle.root("19SwW"))
    }, {
        "23f4db44e6edbcd5": "6IWJC"
    }],
    "4mZuV": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "EvmProvider", () => v);
        var n = e("../../utils/debug.js"),
            i = e("../../core/configuration/authentication.js"),
            o = e("./types.js"),
            l = e("./JsonRpcError.js"),
            c = e("./signTypedDataV4.js"),
            d = e("../../types/types.js"),
            u = e("../../utils/typedEventEmitter.js"),
            p = a.interopDefault(u),
            f = e("../../utils/chains/index.js"),
            h = e("../../core/configuration/account.js"),
            y = e("./addEthereumChain.js"),
            m = e("./registerSession.js"),
            g = e("./revokeSession.js"),
            E = e("./sendCalls.js"),
            w = e("./getCallsStatus.js"),
            j = e("./personalSign.js"),
            b = e("./estimateGas.js"),
            A = e("../../utils/crypto.js");
        class v {
            #t;
            #r;
            #s;
            #e;
            updatePolicy(e) {
                this.#r = e
            }
            #a;
            #n;
            #i = null;
            #o;
            isOpenfort = !0;
            #l;
            constructor({
                storage: e,
                backendApiClients: t,
                openfortEventEmitter: r,
                policyId: s,
                ensureSigner: a,
                chains: n,
                validateAndRefreshSession: i
            }) {
                this.#l = a, this.#t = e, this.#s = n, this.#r = s, this.#a = i, this.#o = t, this.#o = t, this.#n = new(0, p.default), r.on(d.OpenfortEvents.LOGGED_OUT, this.#c), r.on(d.OpenfortEvents.SWITCH_ACCOUNT, this.#d)
            }
            #u = async () => (this.#e || (this.#e = await this.#l()), this.#e);
            #c = async () => {
                this.#e = void 0, this.#n.emit(o.ProviderEvent.ACCOUNTS_CHANGED, [])
            };
            #d = async e => {
                this.#n.emit(o.ProviderEvent.ACCOUNTS_CHANGED, [e])
            };
            async getRpcProvider() {
                if (!this.#i) {
                    let t = await h.Account.fromStorage(this.#t),
                        r = t?.chainId || 8453;
                    await e("369f3e054ad6e98f").then(e => {
                        let t = this.#s ? this.#s[r] : void 0;
                        this.#i = new e.StaticJsonRpcProvider(t ?? f.defaultChainRpcs[r])
                    })
                }
                if (!this.#i) throw Error("RPC provider not initialized");
                return this.#i
            }
            async #p(t) {
                switch (t.method) {
                    case "eth_accounts": {
                        let e = await h.Account.fromStorage(this.#t);
                        return e ? [e.address] : []
                    }
                    case "eth_requestAccounts": {
                        let e = await h.Account.fromStorage(this.#t);
                        if (e) return this.#n.emit(o.ProviderEvent.ACCOUNTS_CONNECT, {
                            chainId: String(e.chainId)
                        }), [e.address];
                        throw new(0, l.JsonRpcError)(l.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - must be authenticated and configured with a signer.")
                    }
                    case "eth_sendTransaction": {
                        let e = await h.Account.fromStorage(this.#t),
                            r = await this.#u(),
                            s = await i.Authentication.fromStorage(this.#t);
                        if (!e || !s) throw new(0, l.JsonRpcError)(l.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                        return await this.#a(), await (0, E.sendCalls)({
                            params: t.params || [],
                            signer: r,
                            account: e,
                            authentication: s,
                            backendClient: this.#o,
                            policyId: this.#r
                        })
                    }
                    case "eth_estimateGas": {
                        let e = await h.Account.fromStorage(this.#t),
                            r = await i.Authentication.fromStorage(this.#t);
                        if (!e || !r) throw new(0, l.JsonRpcError)(l.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                        return await this.#a(), await (0, b.estimateGas)({
                            params: t.params || [],
                            account: e,
                            authentication: r,
                            backendClient: this.#o,
                            policyId: this.#r
                        })
                    }
                    case "eth_signTypedData":
                    case "eth_signTypedData_v4": {
                        let e = await h.Account.fromStorage(this.#t),
                            r = await this.#u();
                        if (!e) throw new(0, l.JsonRpcError)(l.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                        await this.#a();
                        let s = await this.getRpcProvider();
                        return await (0, c.signTypedDataV4)({
                            method: t.method,
                            params: t.params || [],
                            signer: r,
                            implementationType: e.implementationType || e.type,
                            rpcProvider: s,
                            account: e
                        })
                    }
                    case "personal_sign": {
                        let e = await h.Account.fromStorage(this.#t);
                        if (!e) throw new(0, l.JsonRpcError)(l.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                        let r = await this.#u();
                        return await this.#a(), (0, n.debugLog)("[personal_sign] validateAndRefreshSession:"), await (0, j.personalSign)({
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
                        return (0, A.numberToHex)(t)
                    }
                    case "wallet_switchEthereumChain": {
                        let r = await this.#u();
                        if (!t.params || !Array.isArray(t.params) || 0 === t.params.length) throw new(0, l.JsonRpcError)(l.RpcErrorCode.INVALID_PARAMS, "Invalid parameters for wallet_switchEthereumChain");
                        await this.#a();
                        try {
                            let s = parseInt(t.params[0].chainId, 16);
                            await r.switchChain({
                                chainId: s
                            }), await e("369f3e054ad6e98f").then(e => {
                                let t = this.#s ? this.#s[s] : void 0;
                                this.#i = new e.StaticJsonRpcProvider(t ?? f.defaultChainRpcs[s])
                            })
                        } catch (e) {
                            throw new(0, l.JsonRpcError)(l.RpcErrorCode.INTERNAL_ERROR, `Failed to switch chain: ${e.message}`)
                        }
                        return null
                    }
                    case "wallet_addEthereumChain": {
                        await this.#u();
                        let e = await this.getRpcProvider();
                        return await (0, y.addEthereumChain)({
                            params: t.params || [],
                            rpcProvider: e,
                            storage: this.#t
                        })
                    }
                    case "wallet_showCallsStatus":
                        return null;
                    case "wallet_getCallsStatus": {
                        let e = await h.Account.fromStorage(this.#t);
                        await this.#u();
                        let r = await i.Authentication.fromStorage(this.#t);
                        if (!e || !r) throw new(0, l.JsonRpcError)(l.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                        return await this.#a(), await (0, w.getCallStatus)({
                            params: t.params || {},
                            authentication: r,
                            backendClient: this.#o,
                            account: e
                        })
                    }
                    case "wallet_sendCalls": {
                        let e = await h.Account.fromStorage(this.#t),
                            r = await this.#u(),
                            s = await i.Authentication.fromStorage(this.#t);
                        if (!e || !s) throw new(0, l.JsonRpcError)(l.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                        return await this.#a(), await (0, E.sendCalls)({
                            params: t.params ? t.params[0].calls : [],
                            signer: r,
                            account: e,
                            authentication: s,
                            backendClient: this.#o,
                            policyId: this.#r
                        })
                    }
                    case "wallet_grantPermissions": {
                        let e = await h.Account.fromStorage(this.#t),
                            r = await this.#u(),
                            s = await i.Authentication.fromStorage(this.#t);
                        if (!e || !s) throw new(0, l.JsonRpcError)(l.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                        return await this.#a(), await (0, m.registerSession)({
                            params: t.params || [],
                            signer: r,
                            account: e,
                            authentication: s,
                            backendClient: this.#o,
                            policyId: this.#r
                        })
                    }
                    case "wallet_revokePermissions": {
                        let e = await h.Account.fromStorage(this.#t),
                            r = await this.#u(),
                            s = await i.Authentication.fromStorage(this.#t);
                        if (!e || !s) throw new(0, l.JsonRpcError)(l.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                        return await this.#a(), await (0, g.revokeSession)({
                            params: t.params || [],
                            signer: r,
                            account: e,
                            authentication: s,
                            backendClient: this.#o
                        })
                    }
                    case "wallet_getCapabilities": {
                        let e = await this.getRpcProvider(),
                            {
                                chainId: t
                            } = await e.detectNetwork();
                        return {
                            [(0, A.numberToHex)(t)]: {
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
                    return this.#p(e)
                } catch (e) {
                    if (e instanceof l.JsonRpcError) throw e;
                    if (e instanceof Error) throw new(0, l.JsonRpcError)(l.RpcErrorCode.INTERNAL_ERROR, e.message);
                    throw new(0, l.JsonRpcError)(l.RpcErrorCode.INTERNAL_ERROR, "Internal error")
                }
            }
            on(e, t) {
                this.#n.on(e, t)
            }
            removeListener(e, t) {
                this.#n.off(e, t)
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
        "369f3e054ad6e98f": "1SNk9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    h6Lv9: [function(e, t, r, s) {
        var a, n, i, o, l = e("@parcel/transformer-js/src/esmodule-helpers.js");
        l.defineInteropFlag(r), l.export(r, "BackendTransactionStatus", () => i), l.export(r, "ProviderEvent", () => o), (a = i || (i = {})).PENDING = "PENDING", a.SUBMITTED = "SUBMITTED", a.SUCCESSFUL = "SUCCESSFUL", a.REVERTED = "REVERTED", a.FAILED = "FAILED", a.CANCELLED = "CANCELLED", (n = o || (o = {})).ACCOUNTS_CHANGED = "accountsChanged", n.ACCOUNTS_CONNECT = "connect"
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "5MjlL": [function(e, t, r, s) {
        var a, n, i, o, l = e("@parcel/transformer-js/src/esmodule-helpers.js");
        l.defineInteropFlag(r), l.export(r, "JsonRpcError", () => c), l.export(r, "ProviderErrorCode", () => i), l.export(r, "RpcErrorCode", () => o), (a = i || (i = {}))[a.USER_REJECTED_REQUEST = 4001] = "USER_REJECTED_REQUEST", a[a.UNAUTHORIZED = 4100] = "UNAUTHORIZED", a[a.UNSUPPORTED_METHOD = 4200] = "UNSUPPORTED_METHOD", a[a.DISCONNECTED = 4900] = "DISCONNECTED", (n = o || (o = {}))[n.RPC_SERVER_ERROR = -32e3] = "RPC_SERVER_ERROR", n[n.INVALID_REQUEST = -32600] = "INVALID_REQUEST", n[n.METHOD_NOT_FOUND = -32601] = "METHOD_NOT_FOUND", n[n.INVALID_PARAMS = -32602] = "INVALID_PARAMS", n[n.INTERNAL_ERROR = -32603] = "INTERNAL_ERROR", n[n.PARSE_ERROR = -32700] = "PARSE_ERROR", n[n.TRANSACTION_REJECTED = -32003] = "TRANSACTION_REJECTED";
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "signTypedDataV4", () => l);
        var n = e("./walletHelpers.js"),
            i = e("./JsonRpcError.js");
        let o = ["types", "domain", "primaryType", "message"],
            l = async ({
                params: t,
                method: r,
                signer: s,
                implementationType: a,
                rpcProvider: l,
                account: c
            }) => {
                let d = t[0],
                    u = t[1];
                if (!d || !u) throw new(0, i.JsonRpcError)(i.RpcErrorCode.INVALID_PARAMS, `${r} requires an address and a typed data JSON`);
                let {
                    chainId: p
                } = await l.detectNetwork(), f = ((e, t) => {
                    let r, s;
                    if ("string" == typeof e) try {
                        r = JSON.parse(e)
                    } catch (e) {
                        throw new(0, i.JsonRpcError)(i.RpcErrorCode.INVALID_PARAMS, `Failed to parse typed data JSON: ${e}`)
                    } else {
                        if ("object" != typeof e) throw new(0, i.JsonRpcError)(i.RpcErrorCode.INVALID_PARAMS, `Invalid typed data argument: ${e}`);
                        r = e
                    }
                    if (s = r, !o.every(e => e in s)) throw new(0, i.JsonRpcError)(i.RpcErrorCode.INVALID_PARAMS, `Invalid typed data argument. The following properties are required: 
      ${o.join(", ")}`);
                    let a = r.domain?.chainId;
                    if (a && ("string" == typeof a && (a.startsWith("0x") ? r.domain.chainId = parseInt(a, 16) : r.domain.chainId = parseInt(a, 10)), r.domain.chainId !== t)) throw new(0, i.JsonRpcError)(i.RpcErrorCode.INVALID_PARAMS, `Invalid chainId, expected ${t}`);
                    return r
                })(u, p), h = {
                    ...f.types
                };
                delete h.EIP712Domain;
                let {
                    _TypedDataEncoder: y
                } = await e("f00f964c12e9a3d1"), m = y.hash(f.domain, h, f.message);
                return await (0, n.signMessage)({
                    hash: m,
                    implementationType: a,
                    chainId: p,
                    signer: s,
                    address: d,
                    ownerAddress: c.ownerAddress,
                    factoryAddress: c.factoryAddress,
                    salt: c.salt
                })
            }
    }, {
        "./walletHelpers.js": "arpu2",
        "./JsonRpcError.js": "5MjlL",
        f00f964c12e9a3d1: "6eWeC",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    gZetA: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var n = e("eventemitter3");
        class i {
            emitter = new(0, n.EventEmitter);
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
        var a = Object.prototype.hasOwnProperty,
            n = "~";

        function i() {}

        function o(e, t, r) {
            this.fn = e, this.context = t, this.once = r || !1
        }

        function l(e, t, r, s, a) {
            if ("function" != typeof r) throw TypeError("The listener must be a function");
            var i = new o(r, s || e, a),
                l = n ? n + t : t;
            return e._events[l] ? e._events[l].fn ? e._events[l] = [e._events[l], i] : e._events[l].push(i) : (e._events[l] = i, e._eventsCount++), e
        }

        function c(e, t) {
            0 == --e._eventsCount ? e._events = new i : delete e._events[t]
        }

        function d() {
            this._events = new i, this._eventsCount = 0
        }
        Object.create && (i.prototype = Object.create(null), new i().__proto__ || (n = !1)), d.prototype.eventNames = function() {
            var e, t, r = [];
            if (0 === this._eventsCount) return r;
            for (t in e = this._events) a.call(e, t) && r.push(n ? t.slice(1) : t);
            return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
        }, d.prototype.listeners = function(e) {
            var t = n ? n + e : e,
                r = this._events[t];
            if (!r) return [];
            if (r.fn) return [r.fn];
            for (var s = 0, a = r.length, i = Array(a); s < a; s++) i[s] = r[s].fn;
            return i
        }, d.prototype.listenerCount = function(e) {
            var t = n ? n + e : e,
                r = this._events[t];
            return r ? r.fn ? 1 : r.length : 0
        }, d.prototype.emit = function(e, t, r, s, a, i) {
            var o = n ? n + e : e;
            if (!this._events[o]) return !1;
            var l, c, d = this._events[o],
                u = arguments.length;
            if (d.fn) {
                switch (d.once && this.removeListener(e, d.fn, void 0, !0), u) {
                    case 1:
                        return d.fn.call(d.context), !0;
                    case 2:
                        return d.fn.call(d.context, t), !0;
                    case 3:
                        return d.fn.call(d.context, t, r), !0;
                    case 4:
                        return d.fn.call(d.context, t, r, s), !0;
                    case 5:
                        return d.fn.call(d.context, t, r, s, a), !0;
                    case 6:
                        return d.fn.call(d.context, t, r, s, a, i), !0
                }
                for (c = 1, l = Array(u - 1); c < u; c++) l[c - 1] = arguments[c];
                d.fn.apply(d.context, l)
            } else {
                var p, f = d.length;
                for (c = 0; c < f; c++) switch (d[c].once && this.removeListener(e, d[c].fn, void 0, !0), u) {
                    case 1:
                        d[c].fn.call(d[c].context);
                        break;
                    case 2:
                        d[c].fn.call(d[c].context, t);
                        break;
                    case 3:
                        d[c].fn.call(d[c].context, t, r);
                        break;
                    case 4:
                        d[c].fn.call(d[c].context, t, r, s);
                        break;
                    default:
                        if (!l)
                            for (p = 1, l = Array(u - 1); p < u; p++) l[p - 1] = arguments[p];
                        d[c].fn.apply(d[c].context, l)
                }
            }
            return !0
        }, d.prototype.on = function(e, t, r) {
            return l(this, e, t, r, !1)
        }, d.prototype.once = function(e, t, r) {
            return l(this, e, t, r, !0)
        }, d.prototype.removeListener = function(e, t, r, s) {
            var a = n ? n + e : e;
            if (!this._events[a]) return this;
            if (!t) return c(this, a), this;
            var i = this._events[a];
            if (i.fn) i.fn !== t || s && !i.once || r && i.context !== r || c(this, a);
            else {
                for (var o = 0, l = [], d = i.length; o < d; o++)(i[o].fn !== t || s && !i[o].once || r && i[o].context !== r) && l.push(i[o]);
                l.length ? this._events[a] = 1 === l.length ? l[0] : l : c(this, a)
            }
            return this
        }, d.prototype.removeAllListeners = function(e) {
            var t;
            return e ? (t = n ? n + e : e, this._events[t] && c(this, t)) : (this._events = new i, this._eventsCount = 0), this
        }, d.prototype.off = d.prototype.removeListener, d.prototype.addListener = d.prototype.on, d.prefixed = n, d.EventEmitter = d, t.exports = d
    }, {}],
    lU4aU: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "defaultChainRpcs", () => n);
        let n = {
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "addEthereumChain", () => o);
        var n = e("./JsonRpcError.js");
        let i = ["chainId", "chainName", "nativeCurrency"],
            o = async ({
                params: e,
                rpcProvider: t,
                storage: r
            }) => {
                if (!e || !Array.isArray(e) || 0 === e.length) throw new(0, n.JsonRpcError)(n.RpcErrorCode.INVALID_PARAMS, "Invalid parameters for wallet_addEthereumChain");
                let s = parseInt((e => {
                        var t;
                        if (!e || "object" != typeof e) throw new(0, n.JsonRpcError)(n.RpcErrorCode.INVALID_PARAMS, "Invalid chain parameter: expected an object");
                        if (!i.every(t => t in e)) throw new(0, n.JsonRpcError)(n.RpcErrorCode.INVALID_PARAMS, `Invalid chain parameter. The following properties are required: ${i.join(", ")}`);
                        if (!e.chainName || "" === e.chainName.trim()) throw new(0, n.JsonRpcError)(n.RpcErrorCode.INVALID_PARAMS, "chainName cannot be empty");
                        if (!((t = e.nativeCurrency) && "object" == typeof t && "name" in t && "symbol" in t && "decimals" in t && "string" == typeof t.name && "string" == typeof t.symbol && "number" == typeof t.decimals && Number.isInteger(t.decimals))) throw new(0, n.JsonRpcError)(n.RpcErrorCode.INVALID_PARAMS, "Invalid nativeCurrency object");
                        if (0 === e.rpcUrls?.length) throw new(0, n.JsonRpcError)(n.RpcErrorCode.INVALID_PARAMS, "At least one RPC URL must be provided");
                        if (!/^0x[0-9a-fA-F]+$/.test(e.chainId)) throw new(0, n.JsonRpcError)(n.RpcErrorCode.INVALID_PARAMS, "chainId must be a valid hex string");
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
                        chainId: a
                    } = await t.detectNetwork();
                return s !== a && null
            }
    }, {
        "./JsonRpcError.js": "5MjlL",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    iRVAB: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "registerSession", () => d);
        var n = e("../../core/errors/openfortError.js"),
            i = e("./JsonRpcError.js");

        function o(e) {
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
                policies: e.policies.map(o),
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
        let d = async ({
            params: e,
            signer: t,
            account: r,
            authentication: s,
            backendClient: a,
            policyId: o
        }) => {
            let d = await (async (e, t, r, s, a) => {
                let o, c = e[0],
                    d = Math.floor((new Date).getTime() / 1e3),
                    u = Math.floor(new Date(Date.now() + 1e3 * c.expiry).getTime() / 1e3),
                    p = c.permissions.map(l),
                    f = p.filter(e => "contract-call" === e.type || "erc20-token-transfer" === e.type).map(e => e.data.address),
                    h = p[0].policies.find(e => "usage-limit" === e.type)?.data?.limit;
                if ("signer" in c && c.signer) {
                    if ("keys" === c.signer.type) throw new(0, i.JsonRpcError)(i.RpcErrorCode.INVALID_PARAMS, "Multi-key signers are not supported for session creation");
                    "key" !== c.signer.type && "account" !== c.signer.type || (o = c.signer.data.id)
                } else "account" in c && c.account && (o = c.account);
                if (!o) throw new(0, i.JsonRpcError)(i.RpcErrorCode.INVALID_PARAMS, "Failed to request permissions - missing session address");
                let y = ((e, t, r, s, a, n = !1, i, o, l, c) => {
                    let d = {
                        address: e,
                        chainId: t,
                        validAfter: r,
                        validUntil: s,
                        optimistic: n,
                        whitelist: i,
                        player: o,
                        account: c
                    };
                    return a && (d.policy = a), l && (d.limit = l), d
                })(o, r.chainId, d, u, a, !1, f, s.player, h, r.id);
                return (0, n.withOpenfortError)(async () => (await t.sessionsApi.createSession({
                    createSessionRequest: y
                }, {
                    headers: {
                        authorization: `Bearer ${t.config.backend.accessToken}`,
                        "x-player-token": s.token,
                        "x-auth-provider": s.thirdPartyProvider,
                        "x-token-type": s.thirdPartyTokenType
                    }
                })).data, {
                    default: n.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            })(e, a, r, s, o).catch(e => {
                throw new(0, i.JsonRpcError)(i.RpcErrorCode.TRANSACTION_REJECTED, e.message)
            });
            if (d?.nextAction?.payload?.signableHash) {
                let e;
                return e = [300, 0x1fa72e78, 324, 50104, 2741, 11124].includes(r.chainId) ? await t.sign(d.nextAction.payload.signableHash, !1, !1) : await t.sign(d.nextAction.payload.signableHash), c(await (0, n.withOpenfortError)(async () => (await a.sessionsApi.signatureSession({
                    id: d.id,
                    signatureRequest: {
                        signature: e
                    }
                })).data, {
                    default: n.OpenfortErrorType.AUTHENTICATION_ERROR
                }).catch(e => {
                    throw new(0, i.JsonRpcError)(i.RpcErrorCode.TRANSACTION_REJECTED, e.message)
                }))
            }
            if (!1 === d.isActive) throw new(0, i.JsonRpcError)(i.RpcErrorCode.TRANSACTION_REJECTED, "Failed to grant permissions");
            return c(d)
        }
    }, {
        "../../core/errors/openfortError.js": "3xESR",
        "./JsonRpcError.js": "5MjlL",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    h0LtA: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "revokeSession", () => o);
        var n = e("../../core/errors/openfortError.js"),
            i = e("./JsonRpcError.js");
        let o = async ({
            params: e,
            signer: t,
            account: r,
            authentication: s,
            backendClient: a,
            policyId: o
        }) => {
            let l = e[0];
            if (!l.permissionContext) return await t.disconnect(), {};
            let c = await (async (e, t, r, s, a) => {
                let i = ((e, t, r, s, a) => {
                    let n = {
                        address: e,
                        chainId: t,
                        player: r,
                        account: a
                    };
                    return s && (n.policy = s), n
                })(e.permissionContext, r.chainId, s.player, a, r.id);
                return (0, n.withOpenfortError)(async () => (await t.sessionsApi.revokeSession({
                    revokeSessionRequest: i
                }, {
                    headers: {
                        authorization: `Bearer ${t.config.backend.accessToken}`,
                        "x-player-token": s.token,
                        "x-auth-provider": s.thirdPartyProvider,
                        "x-token-type": s.thirdPartyTokenType
                    }
                })).data, {
                    default: n.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            })(l, a, r, s, o).catch(e => {
                throw new(0, i.JsonRpcError)(i.RpcErrorCode.TRANSACTION_REJECTED, e.message)
            });
            if (c?.nextAction?.payload?.signableHash) {
                let e;
                return e = [300, 0x1fa72e78, 324, 50104, 2741, 11124].includes(r.chainId) ? await t.sign(c.nextAction.payload.signableHash, !1, !1) : await t.sign(c.nextAction.payload.signableHash), (await a.sessionsApi.signatureSession({
                    id: c.id,
                    signatureRequest: {
                        signature: e
                    }
                }).catch(e => {
                    throw new(0, i.JsonRpcError)(i.RpcErrorCode.TRANSACTION_REJECTED, e.message)
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "sendCalls", () => o);
        var n = e("../../core/errors/openfortError.js"),
            i = e("./JsonRpcError.js");
        let o = async ({
            params: e,
            signer: t,
            account: r,
            authentication: s,
            backendClient: a,
            policyId: o
        }) => {
            let l = e[0]?.capabilities?.paymasterService?.policy ?? o,
                c = await (async (e, t, r, s, a) => {
                    let o = e.map(e => {
                        if (!e.to) throw new(0, i.JsonRpcError)(i.RpcErrorCode.INVALID_PARAMS, 'wallet_sendCalls requires a "to" field');
                        return {
                            to: String(e.to),
                            data: e.data ? String(e.data) : void 0,
                            value: e.value ? String(e.value) : void 0
                        }
                    });
                    return (0, n.withOpenfortError)(async () => (await t.transactionIntentsApi.createTransactionIntent({
                        createTransactionIntentRequest: {
                            account: r.id,
                            policy: a,
                            chainId: r.chainId,
                            interactions: o
                        }
                    }, {
                        headers: {
                            authorization: `Bearer ${t.config.backend.accessToken}`,
                            "x-player-token": s.token,
                            "x-auth-provider": s.thirdPartyProvider,
                            "x-token-type": s.thirdPartyTokenType
                        }
                    })).data, {
                        default: n.OpenfortErrorType.AUTHENTICATION_ERROR
                    })
                })(e, a, r, s, l).catch(e => {
                    throw new(0, i.JsonRpcError)(i.RpcErrorCode.TRANSACTION_REJECTED, e.message)
                });
            if (c.response?.error.reason) throw new(0, i.JsonRpcError)(i.RpcErrorCode.TRANSACTION_REJECTED, c.response?.error.reason);
            if (c?.nextAction?.payload?.signableHash) {
                let e;
                e = [300, 0x1fa72e78, 324, 50104, 2741, 11124].includes(r.chainId) ? await t.sign(c.nextAction.payload.signableHash, !1, !1) : await t.sign(c.nextAction.payload.signableHash);
                let s = await (0, n.withOpenfortError)(async () => await a.transactionIntentsApi.signature({
                    id: c.id,
                    signatureRequest: {
                        signature: e
                    }
                }), {
                    default: n.OpenfortErrorType.AUTHENTICATION_ERROR
                }).catch(e => {
                    throw new(0, i.JsonRpcError)(i.RpcErrorCode.TRANSACTION_REJECTED, e.message)
                });
                if (0 === s.data.response?.status) throw new(0, i.JsonRpcError)(i.RpcErrorCode.TRANSACTION_REJECTED, s.data.response?.error.reason);
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "getCallStatus", () => o);
        var n = e("../../core/errors/openfortError.js"),
            i = e("./JsonRpcError.js");
        let o = async ({
            params: e,
            authentication: t,
            backendClient: r
        }) => {
            let s = await (async (e, t, r) => (0, n.withOpenfortError)(async () => (await t.transactionIntentsApi.getTransactionIntent({
                id: e
            }, {
                headers: {
                    authorization: `Bearer ${t.config.backend.accessToken}`,
                    "x-player-token": r.token,
                    "x-auth-provider": r.thirdPartyProvider,
                    "x-token-type": r.thirdPartyTokenType
                }
            })).data, {
                default: n.OpenfortErrorType.AUTHENTICATION_ERROR
            }))(e[0], r, t).catch(e => {
                throw new(0, i.JsonRpcError)(i.RpcErrorCode.TRANSACTION_REJECTED, e.message)
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "personalSign", () => l);
        var n = e("../../utils/crypto.js"),
            i = e("./JsonRpcError.js"),
            o = e("./walletHelpers.js");
        let l = async ({
            params: t,
            signer: r,
            account: s
        }) => {
            let a = t[0],
                l = t[1];
            if (!l || !a) throw new(0, i.JsonRpcError)(i.RpcErrorCode.INVALID_PARAMS, "personal_sign requires an address and a message");
            if (l.toLowerCase() !== s.address.toLowerCase()) throw new(0, i.JsonRpcError)(i.RpcErrorCode.INVALID_PARAMS, "personal_sign requires the signer to be the from address");
            let {
                hashMessage: c
            } = await e("ac18b93a38ef0b94");
            return await (0, o.signMessage)({
                hash: c((0, n.hexToString)(a)),
                implementationType: s.implementationType || s.type,
                chainId: Number(s.chainId),
                signer: r,
                address: l,
                salt: s.salt,
                factoryAddress: s.factoryAddress,
                ownerAddress: s.ownerAddress
            })
        }
    }, {
        "../../utils/crypto.js": "3dq9D",
        "./JsonRpcError.js": "5MjlL",
        "./walletHelpers.js": "arpu2",
        ac18b93a38ef0b94: "6eWeC",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    d2KSV: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "estimateGas", () => o);
        var n = e("../../core/errors/openfortError.js"),
            i = e("./JsonRpcError.js");
        let o = async ({
            params: e,
            account: t,
            authentication: r,
            backendClient: s,
            policyId: a
        }) => (await (async (e, t, r, s, a) => {
            let o = e.map(e => {
                if (!e.to) throw new(0, i.JsonRpcError)(i.RpcErrorCode.INVALID_PARAMS, 'eth_estimateGas requires a "to" field');
                return {
                    to: String(e.to),
                    data: e.data ? String(e.data) : void 0,
                    value: e.value ? String(e.value) : void 0
                }
            });
            return (0, n.withOpenfortError)(async () => (await t.transactionIntentsApi.estimateTransactionIntentCost({
                createTransactionIntentRequest: {
                    policy: a,
                    chainId: r.chainId,
                    interactions: o
                }
            }, {
                headers: {
                    authorization: `Bearer ${t.config.backend.accessToken}`,
                    "x-player-token": s.token,
                    "x-auth-provider": s.thirdPartyProvider,
                    "x-token-type": s.thirdPartyTokenType
                }
            })).data, {
                default: n.OpenfortErrorType.AUTHENTICATION_ERROR
            })
        })(e, s, t, r, a).catch(e => {
            throw new(0, i.JsonRpcError)(i.RpcErrorCode.TRANSACTION_REJECTED, e.message)
        })).estimatedTXGas
    }, {
        "../../core/errors/openfortError.js": "3xESR",
        "./JsonRpcError.js": "5MjlL",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "1SNk9": [function(e, t, r, s) {
        t.exports = Promise.all([e("fcc7b33231620d38")(t.bundle.resolve("gNKqS")), e("fcc7b33231620d38")(t.bundle.resolve("2XE7A")), e("fcc7b33231620d38")(t.bundle.resolve("36iUx"))]).then(() => t.bundle.root("lpm2Y"))
    }, {
        fcc7b33231620d38: "6IWJC"
    }],
    "3LTkv": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "announceProvider", () => i), a.export(r, "openfortProviderInfo", () => n);
        let n = {
            icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="597.32 331.34 171.36 105.32" ><g><rect x="673.9" y="404.26" width="18.2" height="32.4" /><polygon points="768.68,331.36 768.68,331.36 768.68,331.34 610.78,331.34 610.78,331.36 597.32,331.36 597.32,436.64    615.52,436.64 615.52,349.54 750.48,349.54 750.48,436.64 768.68,436.64  " /><polygon points="732.16,367.79 633.83,367.79 633.83,370.19 633.79,370.19 633.79,436.64 651.99,436.64 651.99,385.99    713.9,385.99 713.9,436.64 732.09,436.64 732.09,385.99 732.16,385.99  " /></g></svg>',
            name: "Openfort",
            rdns: "xyz.openfort",
            uuid: (0, e("../../../utils/crypto.js").randomUUID)()
        };

        function i(e) {
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "EmbeddedSigner", () => d);
        var n = e("../core/configuration/authentication.js"),
            i = e("../core/errors/openfortError.js"),
            o = e("../types/types.js");
        e("./types.js");
        var l = e("../core/configuration/account.js");
        e("./messaging/browserMessenger/backwardCompatibility.js"), e("../storage/istorage.js");
        var c = e("../core/config/config.js");
        e("../core/errors/sentry.js"), e("jose"), e("./evm/types.js"), e("./evm/JsonRpcError.js"), e("eventemitter3"), e("./evm/provider/eip6963.js");
        class d {
            iframeManager;
            storage;
            backendApiClients;
            eventEmitter;
            constructor(e, t, r, s) {
                this.iframeManager = e, this.storage = t, this.backendApiClients = r, this.eventEmitter = s
            }
            async configure(e) {
                let t = await this.iframeManager.configure(e),
                    r = await n.Authentication.fromStorage(this.storage);
                if (!r) throw new(0, i.OpenfortError)("No access token found", i.OpenfortErrorType.NOT_LOGGED_IN_ERROR);
                let s = c.SDKConfiguration.fromStorage();
                if (!s) throw new(0, i.OpenfortError)("Configuration not found", i.OpenfortErrorType.INVALID_CONFIGURATION);
                return t?.account || (0, i.withOpenfortError)(async () => {
                    let e = await this.backendApiClients.accountsApi.getAccountsV2({
                        chainId: t.chainId,
                        address: t.address
                    }, {
                        headers: {
                            authorization: `Bearer ${s.baseConfiguration.publishableKey}`,
                            "x-player-token": r.token,
                            "x-auth-provider": r.thirdPartyProvider,
                            "x-token-type": r.thirdPartyTokenType
                        }
                    });
                    if (0 === e.data.data.length) throw new(0, i.OpenfortError)("No account found", i.OpenfortErrorType.MISSING_SIGNER_ERROR);
                    let a = new(0, l.Account)({
                        user: e.data.data[0].user,
                        chainType: e.data.data[0].accountType,
                        id: e.data.data[0].id,
                        address: e.data.data[0].address,
                        ownerAddress: e.data.data[0].ownerAddress,
                        accountType: e.data.data[0].accountType,
                        createdAt: e.data.data[0].createdAt,
                        implementationType: e.data.data[0].smartAccount?.implementationType,
                        chainId: e.data.data[0].chainId,
                        factoryAddress: e.data.data[0].smartAccount?.factoryAddress,
                        salt: e.data.data[0].smartAccount?.salt
                    });
                    return a.save(this.storage), this.eventEmitter.emit(o.OpenfortEvents.SWITCH_ACCOUNT, e.data.data[0].address), a
                }, {
                    default: i.OpenfortErrorType.AUTHENTICATION_ERROR
                }), (0, i.withOpenfortError)(async () => {
                    let e = await this.backendApiClients.accountsApi.getAccountV2({
                            id: t.account
                        }, {
                            headers: {
                                authorization: `Bearer ${s.baseConfiguration.publishableKey}`,
                                "x-player-token": r.token,
                                "x-auth-provider": r.thirdPartyProvider,
                                "x-token-type": r.thirdPartyTokenType
                            }
                        }),
                        a = new(0, l.Account)({
                            user: e.data.user,
                            chainType: e.data.accountType,
                            id: e.data.id,
                            address: e.data.address,
                            ownerAddress: e.data.ownerAddress,
                            accountType: e.data.accountType,
                            createdAt: e.data.createdAt,
                            implementationType: e.data.smartAccount?.implementationType,
                            chainId: e.data.chainId,
                            salt: e.data.smartAccount?.salt,
                            factoryAddress: e.data.smartAccount?.factoryAddress
                        });
                    return a.save(this.storage), this.eventEmitter.emit(o.OpenfortEvents.SWITCH_ACCOUNT, e.data.address), a
                }, {
                    default: i.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async sign(e, t, r) {
                return await this.iframeManager.sign(e, t, r)
            }
            async export () {
                return await this.iframeManager.export()
            }
            async switchChain({
                chainId: e
            }) {
                let t = await this.iframeManager.switchChain(e),
                    r = await l.Account.fromStorage(this.storage);
                new(0, l.Account)({
                    ...r,
                    id: t.account,
                    chainId: e
                }).save(this.storage)
            }
            async create(e) {
                let t = await this.iframeManager.create(e),
                    r = await n.Authentication.fromStorage(this.storage);
                if (!r) throw new(0, i.OpenfortError)("No access token found", i.OpenfortErrorType.NOT_LOGGED_IN_ERROR);
                let s = c.SDKConfiguration.fromStorage();
                if (!s) throw new(0, i.OpenfortError)("Configuration not found", i.OpenfortErrorType.INVALID_CONFIGURATION);
                return (0, i.withOpenfortError)(async () => {
                    let e = await this.backendApiClients.accountsApi.getAccountV2({
                            id: t.account
                        }, {
                            headers: {
                                authorization: `Bearer ${s.baseConfiguration.publishableKey}`,
                                "x-player-token": r.token,
                                "x-auth-provider": r.thirdPartyProvider,
                                "x-token-type": r.thirdPartyTokenType
                            }
                        }),
                        a = new(0, l.Account)({
                            user: e.data.user,
                            chainType: e.data.accountType,
                            id: e.data.id,
                            address: e.data.address,
                            ownerAddress: e.data.ownerAddress,
                            accountType: e.data.accountType,
                            createdAt: e.data.createdAt,
                            implementationType: e.data.smartAccount?.implementationType,
                            chainId: e.data.chainId,
                            salt: e.data.smartAccount?.salt,
                            factoryAddress: e.data.smartAccount?.factoryAddress
                        });
                    return a.save(this.storage), this.eventEmitter.emit(o.OpenfortEvents.SWITCH_ACCOUNT, e.data.address), a
                }, {
                    default: i.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async recover(e) {
                let t = await this.iframeManager.recover(e),
                    r = await n.Authentication.fromStorage(this.storage);
                if (!r) throw new(0, i.OpenfortError)("No access token found", i.OpenfortErrorType.NOT_LOGGED_IN_ERROR);
                let s = c.SDKConfiguration.fromStorage();
                if (!s) throw new(0, i.OpenfortError)("Configuration not found", i.OpenfortErrorType.INVALID_CONFIGURATION);
                return (0, i.withOpenfortError)(async () => {
                    let e = await this.backendApiClients.accountsApi.getAccountV2({
                            id: t.account
                        }, {
                            headers: {
                                authorization: `Bearer ${s.baseConfiguration.publishableKey}`,
                                "x-player-token": r.token,
                                "x-auth-provider": r.thirdPartyProvider,
                                "x-token-type": r.thirdPartyTokenType
                            }
                        }),
                        a = new(0, l.Account)({
                            user: e.data.user,
                            chainType: e.data.accountType,
                            id: e.data.id,
                            address: e.data.address,
                            ownerAddress: e.data.ownerAddress,
                            accountType: e.data.accountType,
                            createdAt: e.data.createdAt,
                            implementationType: e.data.smartAccount?.implementationType,
                            chainId: e.data.chainId,
                            salt: e.data.smartAccount?.salt,
                            factoryAddress: e.data.smartAccount?.factoryAddress
                        });
                    return a.save(this.storage), this.eventEmitter.emit(o.OpenfortEvents.SWITCH_ACCOUNT, e.data.address), a
                }, {
                    default: i.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async setEmbeddedRecovery({
                recoveryMethod: e,
                recoveryPassword: t,
                encryptionSession: r
            }) {
                await this.iframeManager.setEmbeddedRecovery(e, t, r)
            }
            async disconnect() {
                this.eventEmitter.emit(o.OpenfortEvents.LOGGED_OUT)
            }
        }
    }, {
        "../core/configuration/authentication.js": "1Nfd7",
        "../core/errors/openfortError.js": "3xESR",
        "../types/types.js": "fUPIN",
        "./types.js": "iBeSb",
        "../core/configuration/account.js": "f6fHD",
        "./messaging/browserMessenger/backwardCompatibility.js": "hsQQI",
        "../storage/istorage.js": "8EpXG",
        "../core/config/config.js": "8pPBU",
        "../core/errors/sentry.js": "913SB",
        jose: "kXgGE",
        "./evm/types.js": "h6Lv9",
        "./evm/JsonRpcError.js": "5MjlL",
        eventemitter3: "gddYA",
        "./evm/provider/eip6963.js": "3LTkv",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    eYWLa: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => u);
        var n = e("../backwardCompatibility.js"),
            i = e("../guards.js"),
            o = e("../PenpalError.js"),
            l = a.interopDefault(o),
            c = e("../PenpalBugError.js"),
            d = a.interopDefault(c);
        class u {
            #r;
            #e;
            #t;
            #a;
            #o;
            #n = new Set;
            #i;
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
                this.#t = e, this.#a = t, window.addEventListener("message", this.#d)
            };
            sendMessage = (e, t) => {
                if ((0, i.isSynMessage)(e)) {
                    let r = this.#f(e);
                    return void this.#r.postMessage(e, {
                        targetOrigin: r,
                        transfer: t
                    })
                }
                if ((0, i.isAck1Message)(e) || this.#s) {
                    let r = this.#s ? (0, n.downgradeMessage)(e) : e,
                        s = this.#f(e);
                    return void this.#r.postMessage(r, {
                        targetOrigin: s,
                        transfer: t
                    })
                }
                if ((0, i.isAck2Message)(e)) {
                    let {
                        port1: r,
                        port2: s
                    } = new MessageChannel;
                    this.#i = r, r.addEventListener("message", this.#h), r.start();
                    let a = [s, ...t || []],
                        n = this.#f(e);
                    return void this.#r.postMessage(e, {
                        targetOrigin: n,
                        transfer: a
                    })
                }
                if (!this.#i) throw new(0, d.default)("Port is undefined");
                this.#i.postMessage(e, {
                    transfer: t
                })
            };
            addMessageHandler = e => {
                this.#n.add(e)
            };
            removeMessageHandler = e => {
                this.#n.delete(e)
            };
            destroy = () => {
                window.removeEventListener("message", this.#d), this.#c(), this.#n.clear()
            };
            #l = e => this.#e.some(t => t instanceof RegExp ? t.test(e) : t === e || "*" === t);
            #f = e => {
                if ((0, i.isSynMessage)(e)) return "*";
                if (!this.#o) throw new(0, d.default)("Concrete remote origin not set");
                return "null" === this.#o && this.#e.includes("*") ? "*" : this.#o
            };
            #c = () => {
                this.#i?.removeEventListener("message", this.#h), this.#i?.close(), this.#i = void 0
            };
            #d = ({
                source: e,
                origin: t,
                ports: r,
                data: s
            }) => {
                if (e === this.#r && ((0, n.isDeprecatedMessage)(s) && (this.#t?.("Please upgrade the child window to the latest version of Penpal."), this.#s = !0, s = (0, n.upgradeMessage)(s)), this.#a?.(s)))
                    if (this.#l(t)) {
                        if ((0, i.isSynMessage)(s) && (this.#c(), this.#o = t), (0, i.isAck2Message)(s) && !this.#s) {
                            if ([this.#i] = r, !this.#i) throw new(0, d.default)("No port received on ACK2");
                            this.#i.addEventListener("message", this.#h), this.#i.start()
                        }
                        for (let e of this.#n) e(s)
                    } else this.#t?.(`Received a message from origin \`${t}\` which did not match allowed origins \`[${this.#e.join(", ")}]\``)
            };
            #h = ({
                data: e
            }) => {
                if (this.#a?.(e))
                    for (let t of this.#n) t(e)
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
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "UserApi", () => o);
        var n = e("../core/configuration/authentication.js"),
            i = e("../core/errors/openfortError.js");
        class o {
            storage;
            authManager;
            validateAndRefreshToken;
            constructor(e, t, r) {
                this.storage = e, this.authManager = t, this.validateAndRefreshToken = r
            }
            async get() {
                await this.validateAndRefreshToken();
                let e = await n.Authentication.fromStorage(this.storage);
                if (!e) throw new(0, i.OpenfortError)("No access token found", i.OpenfortErrorType.NOT_LOGGED_IN_ERROR);
                return await this.authManager.getUser(e)
            }
        }
    }, {
        "../core/configuration/authentication.js": "1Nfd7",
        "../core/errors/openfortError.js": "3xESR",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "3zeZX": [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "ProxyApi", () => o);
        var n = e("../core/config/config.js"),
            i = e("../core/errors/openfortError.js");
        class o {
            storage;
            backendApiClients;
            validateAndRefreshToken;
            ensureInitialized;
            getSignerSignFunction;
            constructor(e, t, r, s, a) {
                this.storage = e, this.backendApiClients = t, this.validateAndRefreshToken = r, this.ensureInitialized = s, this.getSignerSignFunction = a
            }
            async sendSignatureTransactionIntentRequest(e, t = null, r = null, s = !1) {
                if (await this.ensureInitialized(), !n.SDKConfiguration.fromStorage()) throw new(0, i.OpenfortError)("Configuration not found", i.OpenfortErrorType.INVALID_CONFIGURATION);
                await this.validateAndRefreshToken();
                let a = r;
                if (!a) {
                    if (!t) throw new(0, i.OpenfortError)("No signableHash or signature provided", i.OpenfortErrorType.OPERATION_NOT_SUPPORTED_ERROR);
                    if (!this.getSignerSignFunction) throw new(0, i.OpenfortError)("In order to sign a transaction intent, a signer must be configured", i.OpenfortErrorType.MISSING_SIGNER_ERROR);
                    let e = await this.getSignerSignFunction();
                    a = await e(t)
                }
                let o = {
                    id: e,
                    signatureRequest: {
                        signature: a,
                        optimistic: s
                    }
                };
                return (0, i.withOpenfortError)(async () => (await this.backendApiClients.transactionIntentsApi.signature(o)).data, {
                    default: i.OpenfortErrorType.INTERNAL_ERROR
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
                return (0, i.withOpenfortError)(async () => (await this.backendApiClients.sessionsApi.signatureSession(s)).data, {
                    default: i.OpenfortErrorType.INTERNAL_ERROR
                })
            }
        }
    }, {
        "../core/config/config.js": "8pPBU",
        "../core/errors/openfortError.js": "3xESR",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    kvnur: [function(e, t, r, s) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "OpenfortInternal", () => d);
        var n = e("../utils/debug.js"),
            i = e("../storage/istorage.js"),
            o = e("./errors/openfortError.js"),
            l = e("./configuration/authentication.js"),
            c = e("../types/types.js");
        class d {
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
                if (!r) throw new(0, o.OpenfortError)("Must be logged in to validate and refresh token", o.OpenfortErrorType.NOT_LOGGED_IN_ERROR);
                if ("jwt" === r.type) {
                    (0, n.debugLog)("validating credentials...");
                    try {
                        t = await this.authManager.validateCredentials(r, e)
                    } catch (e) {
                        throw this.storage.remove(i.StorageKeys.AUTHENTICATION), this.eventEmitter.emit(c.OpenfortEvents.LOGGED_OUT), e
                    }
                    if (!t.player) throw new(0, o.OpenfortError)("No user found in credentials", o.OpenfortErrorType.INTERNAL_ERROR);
                    t.accessToken !== r.token && ((0, n.debugLog)("tokens refreshed"), new(0, l.Authentication)("jwt", t.accessToken, t.player, t.refreshToken).save(this.storage), this.eventEmitter.emit(c.OpenfortEvents.TOKEN_REFRESHED))
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
}, ["c4w0B", "id4SM"], "id4SM", "parcelRequire3602", {}, "./", 0);
//# sourceMappingURL=index.js.map
