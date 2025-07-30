! function(e, t, r, n, s, a, o, i) {
    var l, c = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
        u = "function" == typeof c[n] && c[n],
        d = u.i || {},
        p = u.cache || {},
        f = "undefined" != typeof module && "function" == typeof module.require && module.require.bind(module);

    function h(t, r) {
        if (!p[t]) {
            if (!e[t]) {
                if (s[t]) return s[t];
                var a = "function" == typeof c[n] && c[n];
                if (!r && a) return a(t, !0);
                if (u) return u(t, !0);
                if (f && "string" == typeof t) return f(t);
                var o = Error("Cannot find module '" + t + "'");
                throw o.code = "MODULE_NOT_FOUND", o
            }
            l.resolve = function(r) {
                var n = e[t][1][r];
                return null != n ? n : r
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
            return c[n]
        }
    }), c[n] = h;
    for (var g = 0; g < t.length; g++) h(t[g]);
    if (r) {
        var y = h(r);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = y : "function" == typeof define && define.amd && define(function() {
            return y
        })
    }
}({
    gJu1s: [function(e, t, r, n) {
        t.bundle.extendImportMap({
            "7UhPZ": "esm.7a5d15e0.js",
            "2XE7A": "lib.esm.938dbd13.js",
            "36iUx": "lib.esm.811e0d0a.js"
        })
    }, {}],
    id4SM: [function(e, t, r, n) {
        var s = e("@openfort/openfort-js");
        window.Openfort = s.Openfort
    }, {
        "@openfort/openfort-js": "31lx6"
    }],
    "31lx6": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "OpenfortError", () => a.OpenfortError), s.export(r, "OpenfortErrorType", () => a.OpenfortErrorType), s.export(r, "AuthActionRequiredActions", () => o.AuthActionRequiredActions), s.export(r, "AuthType", () => o.AuthType), s.export(r, "BasicAuthProvider", () => o.BasicAuthProvider), s.export(r, "EmbeddedState", () => o.EmbeddedState), s.export(r, "OAuthProvider", () => o.OAuthProvider), s.export(r, "RecoveryMethod", () => o.RecoveryMethod), s.export(r, "ThirdPartyOAuthProvider", () => o.ThirdPartyOAuthProvider), s.export(r, "TokenType", () => o.TokenType), s.export(r, "ShieldAuthType", () => i.ShieldAuthType), s.export(r, "MissingProjectEntropyError", () => l.MissingProjectEntropyError), s.export(r, "MissingRecoveryPasswordError", () => l.MissingRecoveryPasswordError), s.export(r, "NotConfiguredError", () => l.NotConfiguredError), s.export(r, "WrongRecoveryPasswordError", () => l.WrongRecoveryPasswordError), s.export(r, "OpenfortConfiguration", () => c.OpenfortConfiguration), s.export(r, "SDKConfiguration", () => c.SDKConfiguration), s.export(r, "ShieldConfiguration", () => c.ShieldConfiguration), s.export(r, "Openfort", () => u.Openfort), s.export(r, "AuthApi", () => d.AuthApi), s.export(r, "EmbeddedWalletApi", () => p.EmbeddedWalletApi), s.export(r, "UserApi", () => f.UserApi), s.export(r, "OpenfortInternal", () => h.OpenfortInternal), s.export(r, "ProxyApi", () => g.ProxyApi);
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
    "3xESR": [function(e, t, r, n) {
        var s, a, o = e("@parcel/transformer-js/src/esmodule-helpers.js");
        o.defineInteropFlag(r), o.export(r, "OpenfortError", () => l), o.export(r, "OpenfortErrorType", () => a), o.export(r, "withOpenfortError", () => c);
        var i = e("axios");
        (s = a || (a = {})).AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR", s.INVALID_CONFIGURATION = "INVALID_CONFIGURATION", s.NOT_LOGGED_IN_ERROR = "NOT_LOGGED_IN_ERROR", s.REFRESH_TOKEN_ERROR = "REFRESH_TOKEN_ERROR", s.USER_REGISTRATION_ERROR = "USER_REGISTRATION_ERROR", s.LOGOUT_ERROR = "LOGOUT_ERROR", s.OPERATION_NOT_SUPPORTED_ERROR = "OPERATION_NOT_SUPPORTED_ERROR", s.MISSING_SESSION_SIGNER_ERROR = "MISSING_SESSION_SIGNER_ERROR", s.MISSING_EMBEDDED_SIGNER_ERROR = "MISSING_EMBEDDED_SIGNER_ERROR", s.MISSING_SIGNER_ERROR = "MISSING_SIGNER_ERROR", s.USER_NOT_AUTHORIZED_ON_ECOSYSTEM = "USER_NOT_AUTHORIZED_ON_ECOSYSTEM", s.INTERNAL_ERROR = "INTERNAL_ERROR";
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
                var n;
                let e, s;
                (0, i.isAxiosError)(o) ? (s = o.response?.status, e = o.response?.data && o.response.data.error && "type" in (n = o.response.data.error) && "message" in n ? o.response.data.error.message : o.message) : e = o.message;
                let a = new l(e, void 0 !== s && t[s] ? t[s] : t.default, {});
                throw void 0 !== s && t[s] || r?.(o, a), a
            }
        }
    }, {
        axios: "jhAcT",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    jhAcT: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "default", () => o.default), s.export(r, "Axios", () => i), s.export(r, "AxiosError", () => l), s.export(r, "CanceledError", () => c), s.export(r, "isCancel", () => u), s.export(r, "CancelToken", () => d), s.export(r, "VERSION", () => p), s.export(r, "all", () => f), s.export(r, "Cancel", () => h), s.export(r, "isAxiosError", () => g), s.export(r, "spread", () => y), s.export(r, "toFormData", () => m), s.export(r, "AxiosHeaders", () => E), s.export(r, "HttpStatusCode", () => w), s.export(r, "formToJSON", () => R), s.export(r, "getAdapter", () => I), s.export(r, "mergeConfig", () => T);
        var a = e("./lib/axios.js"),
            o = s.interopDefault(a);
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
            spread: y,
            toFormData: m,
            AxiosHeaders: E,
            HttpStatusCode: w,
            formToJSON: R,
            getAdapter: I,
            mergeConfig: T
        } = o.default
    }, {
        "./lib/axios.js": "8DJLn",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "8DJLn": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r);
        "use strict";
        var a = e("./utils.js"),
            o = s.interopDefault(a),
            i = e("./helpers/bind.js"),
            l = s.interopDefault(i),
            c = e("./core/Axios.js"),
            u = s.interopDefault(c),
            d = e("./core/mergeConfig.js"),
            p = s.interopDefault(d),
            f = e("./defaults/index.js"),
            h = s.interopDefault(f),
            g = e("./helpers/formDataToJSON.js"),
            y = s.interopDefault(g),
            m = e("./cancel/CanceledError.js"),
            E = s.interopDefault(m),
            w = e("./cancel/CancelToken.js"),
            R = s.interopDefault(w),
            I = e("./cancel/isCancel.js"),
            T = s.interopDefault(I),
            j = e("./env/data.js"),
            A = e("./helpers/toFormData.js"),
            O = s.interopDefault(A),
            v = e("./core/AxiosError.js"),
            b = s.interopDefault(v),
            S = e("./helpers/spread.js"),
            C = s.interopDefault(S),
            x = e("./helpers/isAxiosError.js"),
            N = s.interopDefault(x),
            _ = e("./core/AxiosHeaders.js"),
            P = s.interopDefault(_),
            k = e("./adapters/adapters.js"),
            U = s.interopDefault(k),
            D = e("./helpers/HttpStatusCode.js"),
            L = s.interopDefault(D);
        let M = function e(t) {
            let r = new(0, u.default)(t),
                n = (0, l.default)(u.default.prototype.request, r);
            return o.default.extend(n, u.default.prototype, r, {
                allOwnKeys: !0
            }), o.default.extend(n, r, null, {
                allOwnKeys: !0
            }), n.create = function(r) {
                return e((0, p.default)(t, r))
            }, n
        }(h.default);
        M.Axios = u.default, M.CanceledError = E.default, M.CancelToken = R.default, M.isCancel = T.default, M.VERSION = j.VERSION, M.toFormData = O.default, M.AxiosError = b.default, M.Cancel = M.CanceledError, M.all = function(e) {
            return Promise.all(e)
        }, M.spread = C.default, M.isAxiosError = N.default, M.mergeConfig = p.default, M.AxiosHeaders = P.default, M.formToJSON = e => (0, y.default)(o.default.isHTMLForm(e) ? new FormData(e) : e), M.getAdapter = U.default.getAdapter, M.HttpStatusCode = L.default, M.default = M, r.default = M
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
    "2ioTY": [function(e, t, r, n) {
        let s, a;
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
            iterator: y,
            toStringTag: m
        } = Symbol, E = (s = Object.create(null), e => {
            let t = h.call(e);
            return s[t] || (s[t] = t.slice(8, -1).toLowerCase())
        }), w = e => (e = e.toLowerCase(), t => E(t) === e), R = e => t => typeof t === e, {
            isArray: I
        } = Array, T = R("undefined"), j = w("ArrayBuffer"), A = R("string"), O = R("function"), v = R("number"), b = e => null !== e && "object" == typeof e, S = e => {
            if ("object" !== E(e)) return !1;
            let t = g(e);
            return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(m in e) && !(y in e)
        }, C = w("Date"), x = w("File"), N = w("Blob"), _ = w("FileList"), P = w("URLSearchParams"), [k, U, D, L] = ["ReadableStream", "Request", "Response", "Headers"].map(w);

        function M(e, t, {
            allOwnKeys: r = !1
        } = {}) {
            let n, s;
            if (null != e)
                if ("object" != typeof e && (e = [e]), I(e))
                    for (n = 0, s = e.length; n < s; n++) t.call(null, e[n], n, e);
                else {
                    let s, a = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
                        o = a.length;
                    for (n = 0; n < o; n++) s = a[n], t.call(null, e[s], s, e)
                }
        }

        function F(e, t) {
            let r;
            t = t.toLowerCase();
            let n = Object.keys(e),
                s = n.length;
            for (; s-- > 0;)
                if (t === (r = n[s]).toLowerCase()) return r;
            return null
        }
        let J = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : f,
            B = e => !T(e) && e !== J,
            q = (a = "undefined" != typeof Uint8Array && g(Uint8Array), e => a && e instanceof a),
            G = w("HTMLFormElement"),
            K = (({
                hasOwnProperty: e
            }) => (t, r) => e.call(t, r))(Object.prototype),
            V = w("RegExp"),
            H = (e, t) => {
                let r = Object.getOwnPropertyDescriptors(e),
                    n = {};
                M(r, (r, s) => {
                    let a;
                    !1 !== (a = t(r, s, e)) && (n[s] = a || r)
                }), Object.defineProperties(e, n)
            },
            W = w("AsyncFunction"),
            z = (o = "function" == typeof setImmediate, i = O(J.postMessage), o ? setImmediate : i ? (l = `axios@${Math.random()}`, c = [], J.addEventListener("message", ({
                source: e,
                data: t
            }) => {
                e === J && t === l && c.length && c.shift()()
            }, !1), e => {
                c.push(e), J.postMessage(l, "*")
            }) : e => setTimeout(e)),
            Y = "undefined" != typeof queueMicrotask ? queueMicrotask.bind(J) : z;
        r.default = {
            isArray: I,
            isArrayBuffer: j,
            isBuffer: function(e) {
                return null !== e && !T(e) && null !== e.constructor && !T(e.constructor) && O(e.constructor.isBuffer) && e.constructor.isBuffer(e)
            },
            isFormData: e => {
                let t;
                return e && ("function" == typeof FormData && e instanceof FormData || O(e.append) && ("formdata" === (t = E(e)) || "object" === t && O(e.toString) && "[object FormData]" === e.toString()))
            },
            isArrayBufferView: function(e) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && j(e.buffer)
            },
            isString: A,
            isNumber: v,
            isBoolean: e => !0 === e || !1 === e,
            isObject: b,
            isPlainObject: S,
            isReadableStream: k,
            isRequest: U,
            isResponse: D,
            isHeaders: L,
            isUndefined: T,
            isDate: C,
            isFile: x,
            isBlob: N,
            isRegExp: V,
            isFunction: O,
            isStream: e => b(e) && O(e.pipe),
            isURLSearchParams: P,
            isTypedArray: q,
            isFileList: _,
            forEach: M,
            merge: function e() {
                let {
                    caseless: t
                } = B(this) && this || {}, r = {}, n = (n, s) => {
                    let a = t && F(r, s) || s;
                    S(r[a]) && S(n) ? r[a] = e(r[a], n) : S(n) ? r[a] = e({}, n) : I(n) ? r[a] = n.slice() : r[a] = n
                };
                for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && M(arguments[e], n);
                return r
            },
            extend: (e, t, r, {
                allOwnKeys: n
            } = {}) => (M(t, (t, n) => {
                r && O(t) ? e[n] = (0, p.default)(t, r) : e[n] = t
            }, {
                allOwnKeys: n
            }), e),
            trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
            stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
            inherits: (e, t, r, n) => {
                e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                    value: t.prototype
                }), r && Object.assign(e.prototype, r)
            },
            toFlatObject: (e, t, r, n) => {
                let s, a, o, i = {};
                if (t = t || {}, null == e) return t;
                do {
                    for (a = (s = Object.getOwnPropertyNames(e)).length; a-- > 0;) o = s[a], (!n || n(o, e, t)) && !i[o] && (t[o] = e[o], i[o] = !0);
                    e = !1 !== r && g(e)
                } while (e && (!r || r(e, t)) && e !== Object.prototype) return t
            },
            kindOf: E,
            kindOfTest: w,
            endsWith: (e, t, r) => {
                e = String(e), (void 0 === r || r > e.length) && (r = e.length), r -= t.length;
                let n = e.indexOf(t, r);
                return -1 !== n && n === r
            },
            toArray: e => {
                if (!e) return null;
                if (I(e)) return e;
                let t = e.length;
                if (!v(t)) return null;
                let r = Array(t);
                for (; t-- > 0;) r[t] = e[t];
                return r
            },
            forEachEntry: (e, t) => {
                let r, n = (e && e[y]).call(e);
                for (;
                    (r = n.next()) && !r.done;) {
                    let n = r.value;
                    t.call(e, n[0], n[1])
                }
            },
            matchAll: (e, t) => {
                let r, n = [];
                for (; null !== (r = e.exec(t));) n.push(r);
                return n
            },
            isHTMLForm: G,
            hasOwnProperty: K,
            hasOwnProp: K,
            reduceDescriptors: H,
            freezeMethods: e => {
                H(e, (t, r) => {
                    if (O(e) && -1 !== ["arguments", "caller", "callee"].indexOf(r)) return !1;
                    if (O(e[r])) {
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
                return (I(e) ? e : String(e).split(t)).forEach(e => {
                    r[e] = !0
                }), r
            },
            toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, r) {
                return t.toUpperCase() + r
            }),
            noop: () => {},
            toFiniteNumber: (e, t) => null != e && Number.isFinite(e *= 1) ? e : t,
            findKey: F,
            global: J,
            isContextDefined: B,
            isSpecCompliantForm: function(e) {
                return !!(e && O(e.append) && "FormData" === e[m] && e[y])
            },
            toJSONObject: e => {
                let t = Array(10),
                    r = (e, n) => {
                        if (b(e)) {
                            if (t.indexOf(e) >= 0) return;
                            if (!("toJSON" in e)) {
                                t[n] = e;
                                let s = I(e) ? [] : {};
                                return M(e, (e, t) => {
                                    let a = r(e, n + 1);
                                    T(a) || (s[t] = a)
                                }), t[n] = void 0, s
                            }
                        }
                        return e
                    };
                return r(e, 0)
            },
            isAsyncFn: W,
            isThenable: e => e && (b(e) || O(e)) && O(e.then) && O(e.catch),
            setImmediate: z,
            asap: Y,
            isIterable: e => null != e && O(e[y])
        }
    }, {
        "./helpers/bind.js": "9mfTC",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "9mfTC": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        "use strict";

        function a(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }
        s.defineInteropFlag(r), s.export(r, "default", () => a)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    cI3Jn: [function(e, t, r, n) {
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
    "2wp4K": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r);
        "use strict";
        var a = e("./../utils.js"),
            o = s.interopDefault(a),
            i = e("../helpers/buildURL.js"),
            l = s.interopDefault(i),
            c = e("./InterceptorManager.js"),
            u = s.interopDefault(c),
            d = e("./dispatchRequest.js"),
            p = s.interopDefault(d),
            f = e("./mergeConfig.js"),
            h = s.interopDefault(f),
            g = e("./buildFullPath.js"),
            y = s.interopDefault(g),
            m = e("../helpers/validator.js"),
            E = s.interopDefault(m),
            w = e("./AxiosHeaders.js"),
            R = s.interopDefault(w);
        let I = E.default.validators;
        class T {
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
                let r, n;
                "string" == typeof e ? (t = t || {}).url = e : t = e || {};
                let {
                    transitional: s,
                    paramsSerializer: a,
                    headers: i
                } = t = (0, h.default)(this.defaults, t);
                void 0 !== s && E.default.assertOptions(s, {
                    silentJSONParsing: I.transitional(I.boolean),
                    forcedJSONParsing: I.transitional(I.boolean),
                    clarifyTimeoutError: I.transitional(I.boolean)
                }, !1), null != a && (o.default.isFunction(a) ? t.paramsSerializer = {
                    serialize: a
                } : E.default.assertOptions(a, {
                    encode: I.function,
                    serialize: I.function
                }, !0)), void 0 !== t.allowAbsoluteUrls || (void 0 !== this.defaults.allowAbsoluteUrls ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), E.default.assertOptions(t, {
                    baseUrl: I.spelling("baseURL"),
                    withXsrfToken: I.spelling("withXSRFToken")
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
                    for (e.unshift.apply(e, c), e.push.apply(e, d), n = e.length, r = Promise.resolve(t); f < n;) r = r.then(e[f++], e[f++]);
                    return r
                }
                n = c.length;
                let g = t;
                for (f = 0; f < n;) {
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
                for (f = 0, n = d.length; f < n;) r = r.then(d[f++], d[f++]);
                return r
            }
            getUri(e) {
                e = (0, h.default)(this.defaults, e);
                let t = (0, y.default)(e.baseURL, e.url, e.allowAbsoluteUrls);
                return (0, l.default)(t, e.params, e.paramsSerializer)
            }
        }
        o.default.forEach(["delete", "get", "head", "options"], function(e) {
            T.prototype[e] = function(t, r) {
                return this.request((0, h.default)(r || {}, {
                    method: e,
                    url: t,
                    data: (r || {}).data
                }))
            }
        }), o.default.forEach(["post", "put", "patch"], function(e) {
            function t(t) {
                return function(r, n, s) {
                    return this.request((0, h.default)(s || {}, {
                        method: e,
                        headers: t ? {
                            "Content-Type": "multipart/form-data"
                        } : {},
                        url: r,
                        data: n
                    }))
                }
            }
            T.prototype[e] = t(), T.prototype[e + "Form"] = t(!0)
        }), r.default = T
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
    aGaJq: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "default", () => u);
        "use strict";
        var a = e("../utils.js"),
            o = s.interopDefault(a),
            i = e("../helpers/AxiosURLSearchParams.js"),
            l = s.interopDefault(i);

        function c(e) {
            return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }

        function u(e, t, r) {
            let n;
            if (!t) return e;
            let s = r && r.encode || c;
            o.default.isFunction(r) && (r = {
                serialize: r
            });
            let a = r && r.serialize;
            if (n = a ? a(t, r) : o.default.isURLSearchParams(t) ? t.toString() : new(0, l.default)(t, r).toString(s)) {
                let t = e.indexOf("#"); - 1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + n
            }
            return e
        }
    }, {
        "../utils.js": "2ioTY",
        "../helpers/AxiosURLSearchParams.js": "juzHK",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    juzHK: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r);
        "use strict";
        var a = e("./toFormData.js"),
            o = s.interopDefault(a);

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
    k8OtD: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r);
        "use strict";
        var a = e("../utils.js"),
            o = s.interopDefault(a),
            i = e("../core/AxiosError.js"),
            l = s.interopDefault(i),
            c = e("../platform/node/classes/FormData.js"),
            u = s.interopDefault(c),
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
            let n = (r = o.default.toFlatObject(r, {
                    metaTokens: !0,
                    dots: !1,
                    indexes: !1
                }, !1, function(e, t) {
                    return !o.default.isUndefined(t[e])
                })).metaTokens,
                s = r.visitor || m,
                a = r.dots,
                i = r.indexes,
                c = (r.Blob || "undefined" != typeof Blob && Blob) && o.default.isSpecCompliantForm(t);
            if (!o.default.isFunction(s)) throw TypeError("visitor must be a function");

            function y(e) {
                if (null === e) return "";
                if (o.default.isDate(e)) return e.toISOString();
                if (o.default.isBoolean(e)) return e.toString();
                if (!c && o.default.isBlob(e)) throw new(0, l.default)("Blob is not supported. Use a Buffer instead.");
                return o.default.isArrayBuffer(e) || o.default.isTypedArray(e) ? c && "function" == typeof Blob ? new Blob([e]) : d.from(e) : e
            }

            function m(e, r, s) {
                let l = e;
                if (e && !s && "object" == typeof e)
                    if (o.default.endsWith(r, "{}")) r = n ? r : r.slice(0, -2), e = JSON.stringify(e);
                    else {
                        var c;
                        if (o.default.isArray(e) && (c = e, o.default.isArray(c) && !c.some(p)) || (o.default.isFileList(e) || o.default.endsWith(r, "[]")) && (l = o.default.toArray(e))) return r = f(r), l.forEach(function(e, n) {
                            o.default.isUndefined(e) || null === e || t.append(!0 === i ? h([r], n, a) : null === i ? r : r + "[]", y(e))
                        }), !1
                    } return !!p(e) || (t.append(h(s, r, a), y(e)), !1)
            }
            let E = [],
                w = Object.assign(g, {
                    defaultVisitor: m,
                    convertValue: y,
                    isVisitable: p
                });
            if (!o.default.isObject(e)) throw TypeError("data must be an object");
            return ! function e(r, n) {
                if (!o.default.isUndefined(r)) {
                    if (-1 !== E.indexOf(r)) throw Error("Circular reference detected in " + n.join("."));
                    E.push(r), o.default.forEach(r, function(r, a) {
                        !0 === (!(o.default.isUndefined(r) || null === r) && s.call(t, r, o.default.isString(a) ? a.trim() : a, n, w)) && e(r, n ? n.concat(a) : [a])
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
    "2MMCE": [function(e, t, r, n) {
        "use strict";
        let s = e("9c62938f1dccc73c"),
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
                var n = e,
                    s = t;
                if (("string" != typeof s || "" === s) && (s = "utf8"), !l.isEncoding(s)) throw TypeError("Unknown encoding: " + s);
                let r = 0 | g(n, s),
                    a = i(r),
                    o = a.write(n, s);
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
            for (let n = 0; n < t; n += 1) r[n] = 255 & e[n];
            return r
        }

        function f(e, t, r) {
            let n;
            if (t < 0 || e.byteLength < t) throw RangeError('"offset" is outside of buffer bounds');
            if (e.byteLength < t + (r || 0)) throw RangeError('"length" is outside of buffer bounds');
            return Object.setPrototypeOf(n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r), l.prototype), n
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
                n = arguments.length > 2 && !0 === arguments[2];
            if (!n && 0 === r) return 0;
            let s = !1;
            for (;;) switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return r;
                case "utf8":
                case "utf-8":
                    return U(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * r;
                case "hex":
                    return r >>> 1;
                case "base64":
                    return D(e).length;
                default:
                    if (s) return n ? -1 : U(e).length;
                    t = ("" + t).toLowerCase(), s = !0
            }
        }

        function y(e, t, r) {
            let n = !1;
            if ((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0 || (r >>>= 0) <= (t >>>= 0))) return "";
            for (e || (e = "utf8");;) switch (e) {
                case "hex":
                    return function(e, t, r) {
                        let n = e.length;
                        (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                        let s = "";
                        for (let n = t; n < r; ++n) s += F[e[n]];
                        return s
                    }(this, t, r);
                case "utf8":
                case "utf-8":
                    return R(this, t, r);
                case "ascii":
                    return function(e, t, r) {
                        let n = "";
                        r = Math.min(e.length, r);
                        for (let s = t; s < r; ++s) n += String.fromCharCode(127 & e[s]);
                        return n
                    }(this, t, r);
                case "latin1":
                case "binary":
                    return function(e, t, r) {
                        let n = "";
                        r = Math.min(e.length, r);
                        for (let s = t; s < r; ++s) n += String.fromCharCode(e[s]);
                        return n
                    }(this, t, r);
                case "base64":
                    var a, o, i;
                    return a = this, o = t, i = r, 0 === o && i === a.length ? s.fromByteArray(a) : s.fromByteArray(a.slice(o, i));
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return function(e, t, r) {
                        let n = e.slice(t, r),
                            s = "";
                        for (let e = 0; e < n.length - 1; e += 2) s += String.fromCharCode(n[e] + 256 * n[e + 1]);
                        return s
                    }(this, t, r);
                default:
                    if (n) throw TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(), n = !0
            }
        }

        function m(e, t, r) {
            let n = e[t];
            e[t] = e[r], e[r] = n
        }

        function E(e, t, r, n, s) {
            var a;
            if (0 === e.length) return -1;
            if ("string" == typeof r ? (n = r, r = 0) : r > 0x7fffffff ? r = 0x7fffffff : r < -0x80000000 && (r = -0x80000000), (a = r *= 1) != a && (r = s ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length)
                if (s) return -1;
                else r = e.length - 1;
            else if (r < 0)
                if (!s) return -1;
                else r = 0;
            if ("string" == typeof t && (t = l.from(t, n)), l.isBuffer(t)) return 0 === t.length ? -1 : w(e, t, r, n, s);
            if ("number" == typeof t) {
                if (t &= 255, "function" == typeof Uint8Array.prototype.indexOf)
                    if (s) return Uint8Array.prototype.indexOf.call(e, t, r);
                    else return Uint8Array.prototype.lastIndexOf.call(e, t, r);
                return w(e, [t], r, n, s)
            }
            throw TypeError("val must be string, number or Buffer")
        }

        function w(e, t, r, n, s) {
            let a, o = 1,
                i = e.length,
                l = t.length;
            if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                if (e.length < 2 || t.length < 2) return -1;
                o = 2, i /= 2, l /= 2, r /= 2
            }

            function c(e, t) {
                return 1 === o ? e[t] : e.readUInt16BE(t * o)
            }
            if (s) {
                let n = -1;
                for (a = r; a < i; a++)
                    if (c(e, a) === c(t, -1 === n ? 0 : a - n)) {
                        if (-1 === n && (n = a), a - n + 1 === l) return n * o
                    } else - 1 !== n && (a -= a - n), n = -1
            } else
                for (r + l > i && (r = i - l), a = r; a >= 0; a--) {
                    let r = !0;
                    for (let n = 0; n < l; n++)
                        if (c(e, a + n) !== c(t, n)) {
                            r = !1;
                            break
                        } if (r) return a
                }
            return -1
        }

        function R(e, t, r) {
            r = Math.min(e.length, r);
            let n = [],
                s = t;
            for (; s < r;) {
                let t = e[s],
                    a = null,
                    o = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
                if (s + o <= r) {
                    let r, n, i, l;
                    switch (o) {
                        case 1:
                            t < 128 && (a = t);
                            break;
                        case 2:
                            (192 & (r = e[s + 1])) == 128 && (l = (31 & t) << 6 | 63 & r) > 127 && (a = l);
                            break;
                        case 3:
                            r = e[s + 1], n = e[s + 2], (192 & r) == 128 && (192 & n) == 128 && (l = (15 & t) << 12 | (63 & r) << 6 | 63 & n) > 2047 && (l < 55296 || l > 57343) && (a = l);
                            break;
                        case 4:
                            r = e[s + 1], n = e[s + 2], i = e[s + 3], (192 & r) == 128 && (192 & n) == 128 && (192 & i) == 128 && (l = (15 & t) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & i) > 65535 && l < 1114112 && (a = l)
                    }
                }
                null === a ? (a = 65533, o = 1) : a > 65535 && (a -= 65536, n.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), n.push(a), s += o
            }
            var a = n;
            let o = a.length;
            if (o <= 4096) return String.fromCharCode.apply(String, a);
            let i = "",
                l = 0;
            for (; l < o;) i += String.fromCharCode.apply(String, a.slice(l, l += 4096));
            return i
        }

        function I(e, t, r) {
            if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
            if (e + t > r) throw RangeError("Trying to access beyond buffer length")
        }

        function T(e, t, r, n, s, a) {
            if (!l.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
            if (t > s || t < a) throw RangeError('"value" argument is out of bounds');
            if (r + n > e.length) throw RangeError("Index out of range")
        }

        function j(e, t, r, n, s) {
            N(t, n, s, e, r, 7);
            let a = Number(t & BigInt(0xffffffff));
            e[r++] = a, a >>= 8, e[r++] = a, a >>= 8, e[r++] = a, a >>= 8, e[r++] = a;
            let o = Number(t >> BigInt(32) & BigInt(0xffffffff));
            return e[r++] = o, o >>= 8, e[r++] = o, o >>= 8, e[r++] = o, o >>= 8, e[r++] = o, r
        }

        function A(e, t, r, n, s) {
            N(t, n, s, e, r, 7);
            let a = Number(t & BigInt(0xffffffff));
            e[r + 7] = a, a >>= 8, e[r + 6] = a, a >>= 8, e[r + 5] = a, a >>= 8, e[r + 4] = a;
            let o = Number(t >> BigInt(32) & BigInt(0xffffffff));
            return e[r + 3] = o, o >>= 8, e[r + 2] = o, o >>= 8, e[r + 1] = o, o >>= 8, e[r] = o, r + 8
        }

        function O(e, t, r, n, s, a) {
            if (r + n > e.length || r < 0) throw RangeError("Index out of range")
        }

        function v(e, t, r, n, s) {
            return t *= 1, r >>>= 0, s || O(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), a.write(e, t, r, n, 23, 4), r + 4
        }

        function b(e, t, r, n, s) {
            return t *= 1, r >>>= 0, s || O(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), a.write(e, t, r, n, 52, 8), r + 8
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
                n = t.length;
            for (let s = 0, a = Math.min(r, n); s < a; ++s)
                if (e[s] !== t[s]) {
                    r = e[s], n = t[s];
                    break
                } return r < n ? -1 : +(n < r)
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
            let n = l.allocUnsafe(t),
                s = 0;
            for (r = 0; r < e.length; ++r) {
                let t = e[r];
                if (M(t, Uint8Array)) s + t.length > n.length ? (l.isBuffer(t) || (t = l.from(t)), t.copy(n, s)) : Uint8Array.prototype.set.call(n, t, s);
                else if (l.isBuffer(t)) t.copy(n, s);
                else throw TypeError('"list" argument must be an Array of Buffers');
                s += t.length
            }
            return n
        }, l.byteLength = g, l.prototype._isBuffer = !0, l.prototype.swap16 = function() {
            let e = this.length;
            if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
            for (let t = 0; t < e; t += 2) m(this, t, t + 1);
            return this
        }, l.prototype.swap32 = function() {
            let e = this.length;
            if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
            for (let t = 0; t < e; t += 4) m(this, t, t + 3), m(this, t + 1, t + 2);
            return this
        }, l.prototype.swap64 = function() {
            let e = this.length;
            if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
            for (let t = 0; t < e; t += 8) m(this, t, t + 7), m(this, t + 1, t + 6), m(this, t + 2, t + 5), m(this, t + 3, t + 4);
            return this
        }, l.prototype.toString = function() {
            let e = this.length;
            return 0 === e ? "" : 0 == arguments.length ? R(this, 0, e) : y.apply(this, arguments)
        }, l.prototype.toLocaleString = l.prototype.toString, l.prototype.equals = function(e) {
            if (!l.isBuffer(e)) throw TypeError("Argument must be a Buffer");
            return this === e || 0 === l.compare(this, e)
        }, l.prototype.inspect = function() {
            let e = "",
                t = r.INSPECT_MAX_BYTES;
            return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">"
        }, o && (l.prototype[o] = l.prototype.inspect), l.prototype.compare = function(e, t, r, n, s) {
            if (M(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)), !l.isBuffer(e)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
            if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === s && (s = this.length), t < 0 || r > e.length || n < 0 || s > this.length) throw RangeError("out of range index");
            if (n >= s && t >= r) return 0;
            if (n >= s) return -1;
            if (t >= r) return 1;
            if (t >>>= 0, r >>>= 0, n >>>= 0, s >>>= 0, this === e) return 0;
            let a = s - n,
                o = r - t,
                i = Math.min(a, o),
                c = this.slice(n, s),
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
        }, l.prototype.write = function(e, t, r, n) {
            var s, a, o, i, l, c, u, d;
            if (void 0 === t) n = "utf8", r = this.length, t = 0;
            else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
            else if (isFinite(t)) t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
            else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            let p = this.length - t;
            if ((void 0 === r || r > p) && (r = p), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            let f = !1;
            for (;;) switch (n) {
                case "hex":
                    return function(e, t, r, n) {
                        let s;
                        r = Number(r) || 0;
                        let a = e.length - r;
                        n ? (n = Number(n)) > a && (n = a) : n = a;
                        let o = t.length;
                        for (n > o / 2 && (n = o / 2), s = 0; s < n; ++s) {
                            var i;
                            let n = parseInt(t.substr(2 * s, 2), 16);
                            if ((i = n) != i) break;
                            e[r + s] = n
                        }
                        return s
                    }(this, e, t, r);
                case "utf8":
                case "utf-8":
                    return s = t, a = r, L(U(e, this.length - s), this, s, a);
                case "ascii":
                case "latin1":
                case "binary":
                    return o = t, i = r, L(function(e) {
                        let t = [];
                        for (let r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                        return t
                    }(e), this, o, i);
                case "base64":
                    return l = t, c = r, L(D(e), this, l, c);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return u = t, d = r, L(function(e, t) {
                        let r, n, s = [];
                        for (let a = 0; a < e.length && !((t -= 2) < 0); ++a) n = (r = e.charCodeAt(a)) >> 8, s.push(r % 256), s.push(n);
                        return s
                    }(e, this.length - u), this, u, d);
                default:
                    if (f) throw TypeError("Unknown encoding: " + n);
                    n = ("" + n).toLowerCase(), f = !0
            }
        }, l.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        }, l.prototype.slice = function(e, t) {
            let r = this.length;
            e = ~~e, t = void 0 === t ? r : ~~t, e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
            let n = this.subarray(e, t);
            return Object.setPrototypeOf(n, l.prototype), n
        }, l.prototype.readUintLE = l.prototype.readUIntLE = function(e, t, r) {
            e >>>= 0, t >>>= 0, r || I(e, t, this.length);
            let n = this[e],
                s = 1,
                a = 0;
            for (; ++a < t && (s *= 256);) n += this[e + a] * s;
            return n
        }, l.prototype.readUintBE = l.prototype.readUIntBE = function(e, t, r) {
            e >>>= 0, t >>>= 0, r || I(e, t, this.length);
            let n = this[e + --t],
                s = 1;
            for (; t > 0 && (s *= 256);) n += this[e + --t] * s;
            return n
        }, l.prototype.readUint8 = l.prototype.readUInt8 = function(e, t) {
            return e >>>= 0, t || I(e, 1, this.length), this[e]
        }, l.prototype.readUint16LE = l.prototype.readUInt16LE = function(e, t) {
            return e >>>= 0, t || I(e, 2, this.length), this[e] | this[e + 1] << 8
        }, l.prototype.readUint16BE = l.prototype.readUInt16BE = function(e, t) {
            return e >>>= 0, t || I(e, 2, this.length), this[e] << 8 | this[e + 1]
        }, l.prototype.readUint32LE = l.prototype.readUInt32LE = function(e, t) {
            return e >>>= 0, t || I(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 0x1000000 * this[e + 3]
        }, l.prototype.readUint32BE = l.prototype.readUInt32BE = function(e, t) {
            return e >>>= 0, t || I(e, 4, this.length), 0x1000000 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }, l.prototype.readBigUInt64LE = J(function(e) {
            _(e >>>= 0, "offset");
            let t = this[e],
                r = this[e + 7];
            (void 0 === t || void 0 === r) && P(e, this.length - 8);
            let n = t + 256 * this[++e] + 65536 * this[++e] + 0x1000000 * this[++e],
                s = this[++e] + 256 * this[++e] + 65536 * this[++e] + 0x1000000 * r;
            return BigInt(n) + (BigInt(s) << BigInt(32))
        }), l.prototype.readBigUInt64BE = J(function(e) {
            _(e >>>= 0, "offset");
            let t = this[e],
                r = this[e + 7];
            (void 0 === t || void 0 === r) && P(e, this.length - 8);
            let n = 0x1000000 * t + 65536 * this[++e] + 256 * this[++e] + this[++e],
                s = 0x1000000 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r;
            return (BigInt(n) << BigInt(32)) + BigInt(s)
        }), l.prototype.readIntLE = function(e, t, r) {
            e >>>= 0, t >>>= 0, r || I(e, t, this.length);
            let n = this[e],
                s = 1,
                a = 0;
            for (; ++a < t && (s *= 256);) n += this[e + a] * s;
            return n >= (s *= 128) && (n -= Math.pow(2, 8 * t)), n
        }, l.prototype.readIntBE = function(e, t, r) {
            e >>>= 0, t >>>= 0, r || I(e, t, this.length);
            let n = t,
                s = 1,
                a = this[e + --n];
            for (; n > 0 && (s *= 256);) a += this[e + --n] * s;
            return a >= (s *= 128) && (a -= Math.pow(2, 8 * t)), a
        }, l.prototype.readInt8 = function(e, t) {
            return (e >>>= 0, t || I(e, 1, this.length), 128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e]
        }, l.prototype.readInt16LE = function(e, t) {
            e >>>= 0, t || I(e, 2, this.length);
            let r = this[e] | this[e + 1] << 8;
            return 32768 & r ? 0xffff0000 | r : r
        }, l.prototype.readInt16BE = function(e, t) {
            e >>>= 0, t || I(e, 2, this.length);
            let r = this[e + 1] | this[e] << 8;
            return 32768 & r ? 0xffff0000 | r : r
        }, l.prototype.readInt32LE = function(e, t) {
            return e >>>= 0, t || I(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }, l.prototype.readInt32BE = function(e, t) {
            return e >>>= 0, t || I(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }, l.prototype.readBigInt64LE = J(function(e) {
            _(e >>>= 0, "offset");
            let t = this[e],
                r = this[e + 7];
            return (void 0 === t || void 0 === r) && P(e, this.length - 8), (BigInt(this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24)) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + 0x1000000 * this[++e])
        }), l.prototype.readBigInt64BE = J(function(e) {
            _(e >>>= 0, "offset");
            let t = this[e],
                r = this[e + 7];
            return (void 0 === t || void 0 === r) && P(e, this.length - 8), (BigInt((t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e]) << BigInt(32)) + BigInt(0x1000000 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r)
        }), l.prototype.readFloatLE = function(e, t) {
            return e >>>= 0, t || I(e, 4, this.length), a.read(this, e, !0, 23, 4)
        }, l.prototype.readFloatBE = function(e, t) {
            return e >>>= 0, t || I(e, 4, this.length), a.read(this, e, !1, 23, 4)
        }, l.prototype.readDoubleLE = function(e, t) {
            return e >>>= 0, t || I(e, 8, this.length), a.read(this, e, !0, 52, 8)
        }, l.prototype.readDoubleBE = function(e, t) {
            return e >>>= 0, t || I(e, 8, this.length), a.read(this, e, !1, 52, 8)
        }, l.prototype.writeUintLE = l.prototype.writeUIntLE = function(e, t, r, n) {
            if (e *= 1, t >>>= 0, r >>>= 0, !n) {
                let n = Math.pow(2, 8 * r) - 1;
                T(this, e, t, r, n, 0)
            }
            let s = 1,
                a = 0;
            for (this[t] = 255 & e; ++a < r && (s *= 256);) this[t + a] = e / s & 255;
            return t + r
        }, l.prototype.writeUintBE = l.prototype.writeUIntBE = function(e, t, r, n) {
            if (e *= 1, t >>>= 0, r >>>= 0, !n) {
                let n = Math.pow(2, 8 * r) - 1;
                T(this, e, t, r, n, 0)
            }
            let s = r - 1,
                a = 1;
            for (this[t + s] = 255 & e; --s >= 0 && (a *= 256);) this[t + s] = e / a & 255;
            return t + r
        }, l.prototype.writeUint8 = l.prototype.writeUInt8 = function(e, t, r) {
            return e *= 1, t >>>= 0, r || T(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
        }, l.prototype.writeUint16LE = l.prototype.writeUInt16LE = function(e, t, r) {
            return e *= 1, t >>>= 0, r || T(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
        }, l.prototype.writeUint16BE = l.prototype.writeUInt16BE = function(e, t, r) {
            return e *= 1, t >>>= 0, r || T(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
        }, l.prototype.writeUint32LE = l.prototype.writeUInt32LE = function(e, t, r) {
            return e *= 1, t >>>= 0, r || T(this, e, t, 4, 0xffffffff, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
        }, l.prototype.writeUint32BE = l.prototype.writeUInt32BE = function(e, t, r) {
            return e *= 1, t >>>= 0, r || T(this, e, t, 4, 0xffffffff, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
        }, l.prototype.writeBigUInt64LE = J(function(e, t = 0) {
            return j(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
        }), l.prototype.writeBigUInt64BE = J(function(e, t = 0) {
            return A(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
        }), l.prototype.writeIntLE = function(e, t, r, n) {
            if (e *= 1, t >>>= 0, !n) {
                let n = Math.pow(2, 8 * r - 1);
                T(this, e, t, r, n - 1, -n)
            }
            let s = 0,
                a = 1,
                o = 0;
            for (this[t] = 255 & e; ++s < r && (a *= 256);) e < 0 && 0 === o && 0 !== this[t + s - 1] && (o = 1), this[t + s] = (e / a | 0) - o & 255;
            return t + r
        }, l.prototype.writeIntBE = function(e, t, r, n) {
            if (e *= 1, t >>>= 0, !n) {
                let n = Math.pow(2, 8 * r - 1);
                T(this, e, t, r, n - 1, -n)
            }
            let s = r - 1,
                a = 1,
                o = 0;
            for (this[t + s] = 255 & e; --s >= 0 && (a *= 256);) e < 0 && 0 === o && 0 !== this[t + s + 1] && (o = 1), this[t + s] = (e / a | 0) - o & 255;
            return t + r
        }, l.prototype.writeInt8 = function(e, t, r) {
            return e *= 1, t >>>= 0, r || T(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
        }, l.prototype.writeInt16LE = function(e, t, r) {
            return e *= 1, t >>>= 0, r || T(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
        }, l.prototype.writeInt16BE = function(e, t, r) {
            return e *= 1, t >>>= 0, r || T(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
        }, l.prototype.writeInt32LE = function(e, t, r) {
            return e *= 1, t >>>= 0, r || T(this, e, t, 4, 0x7fffffff, -0x80000000), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
        }, l.prototype.writeInt32BE = function(e, t, r) {
            return e *= 1, t >>>= 0, r || T(this, e, t, 4, 0x7fffffff, -0x80000000), e < 0 && (e = 0xffffffff + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
        }, l.prototype.writeBigInt64LE = J(function(e, t = 0) {
            return j(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
        }), l.prototype.writeBigInt64BE = J(function(e, t = 0) {
            return A(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
        }), l.prototype.writeFloatLE = function(e, t, r) {
            return v(this, e, t, !0, r)
        }, l.prototype.writeFloatBE = function(e, t, r) {
            return v(this, e, t, !1, r)
        }, l.prototype.writeDoubleLE = function(e, t, r) {
            return b(this, e, t, !0, r)
        }, l.prototype.writeDoubleBE = function(e, t, r) {
            return b(this, e, t, !1, r)
        }, l.prototype.copy = function(e, t, r, n) {
            if (!l.isBuffer(e)) throw TypeError("argument should be a Buffer");
            if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r || 0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length) throw RangeError("Index out of range");
            if (n < 0) throw RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
            let s = n - r;
            return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, r, n) : Uint8Array.prototype.set.call(e, this.subarray(r, n), t), s
        }, l.prototype.fill = function(e, t, r, n) {
            let s;
            if ("string" == typeof e) {
                if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw TypeError("encoding must be a string");
                if ("string" == typeof n && !l.isEncoding(n)) throw TypeError("Unknown encoding: " + n);
                if (1 === e.length) {
                    let t = e.charCodeAt(0);
                    ("utf8" === n && t < 128 || "latin1" === n) && (e = t)
                }
            } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
            if (t < 0 || this.length < t || this.length < r) throw RangeError("Out of range index");
            if (r <= t) return this;
            if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                for (s = t; s < r; ++s) this[s] = e;
            else {
                let a = l.isBuffer(e) ? e : l.from(e, n),
                    o = a.length;
                if (0 === o) throw TypeError('The value "' + e + '" is invalid for argument "value"');
                for (s = 0; s < r - t; ++s) this[s + t] = a[s % o]
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

        function x(e) {
            let t = "",
                r = e.length,
                n = +("-" === e[0]);
            for (; r >= n + 4; r -= 3) t = `_${e.slice(r-3,r)}${t}`;
            return `${e.slice(0,r)}${t}`
        }

        function N(e, t, r, n, s, a) {
            if (e > r || e < t) {
                let n, s = "bigint" == typeof t ? "n" : "";
                throw n = a > 3 ? 0 === t || t === BigInt(0) ? `>= 0${s} and < 2${s} ** ${(a+1)*8}${s}` : `>= -(2${s} ** ${(a+1)*8-1}${s}) and < 2 ** ${(a+1)*8-1}${s}` : `>= ${t}${s} and <= ${r}${s}`, new S.ERR_OUT_OF_RANGE("value", n, e)
            }
            _(s, "offset"), (void 0 === n[s] || void 0 === n[s + a]) && P(s, n.length - (a + 1))
        }

        function _(e, t) {
            if ("number" != typeof e) throw new S.ERR_INVALID_ARG_TYPE(t, "number", e)
        }

        function P(e, t, r) {
            if (Math.floor(e) !== e) throw _(e, r), new S.ERR_OUT_OF_RANGE(r || "offset", "an integer", e);
            if (t < 0) throw new S.ERR_BUFFER_OUT_OF_BOUNDS;
            throw new S.ERR_OUT_OF_RANGE(r || "offset", `>= ${+!!r} and <= ${t}`, e)
        }
        C("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
            return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
        }, RangeError), C("ERR_INVALID_ARG_TYPE", function(e, t) {
            return `The "${e}" argument must be of type number. Received type ${typeof t}`
        }, TypeError), C("ERR_OUT_OF_RANGE", function(e, t, r) {
            let n = `The value of "${e}" is out of range.`,
                s = r;
            return Number.isInteger(r) && Math.abs(r) > 0x100000000 ? s = x(String(r)) : "bigint" == typeof r && (s = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (s = x(s)), s += "n"), n += ` It must be ${t}. Received ${s}`
        }, RangeError);
        let k = /[^+/0-9A-Za-z-_]/g;

        function U(e, t) {
            let r;
            t = t || 1 / 0;
            let n = e.length,
                s = null,
                a = [];
            for (let o = 0; o < n; ++o) {
                if ((r = e.charCodeAt(o)) > 55295 && r < 57344) {
                    if (!s) {
                        if (r > 56319 || o + 1 === n) {
                            (t -= 3) > -1 && a.push(239, 191, 189);
                            continue
                        }
                        s = r;
                        continue
                    }
                    if (r < 56320) {
                        (t -= 3) > -1 && a.push(239, 191, 189), s = r;
                        continue
                    }
                    r = (s - 55296 << 10 | r - 56320) + 65536
                } else s && (t -= 3) > -1 && a.push(239, 191, 189);
                if (s = null, r < 128) {
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

        function D(e) {
            return s.toByteArray(function(e) {
                if ((e = (e = e.split("=")[0]).trim().replace(k, "")).length < 2) return "";
                for (; e.length % 4 != 0;) e += "=";
                return e
            }(e))
        }

        function L(e, t, r, n) {
            let s;
            for (s = 0; s < n && !(s + r >= t.length) && !(s >= e.length); ++s) t[s + r] = e[s];
            return s
        }

        function M(e, t) {
            return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
        }
        let F = function() {
            let e = "0123456789abcdef",
                t = Array(256);
            for (let r = 0; r < 16; ++r) {
                let n = 16 * r;
                for (let s = 0; s < 16; ++s) t[n + s] = e[r] + e[s]
            }
            return t
        }();

        function J(e) {
            return "undefined" == typeof BigInt ? B : e
        }

        function B() {
            throw Error("BigInt not supported")
        }
    }, {
        "9c62938f1dccc73c": "6P4Ax",
        aceacb6a4531a9d2: "lPFVa"
    }],
    "6P4Ax": [function(e, t, r, n) {
        "use strict";
        r.byteLength = function(e) {
            var t = u(e),
                r = t[0],
                n = t[1];
            return (r + n) * 3 / 4 - n
        }, r.toByteArray = function(e) {
            var t, r, n = u(e),
                s = n[0],
                i = n[1],
                l = new o((s + i) * 3 / 4 - i),
                c = 0,
                d = i > 0 ? s - 4 : s;
            for (r = 0; r < d; r += 4) t = a[e.charCodeAt(r)] << 18 | a[e.charCodeAt(r + 1)] << 12 | a[e.charCodeAt(r + 2)] << 6 | a[e.charCodeAt(r + 3)], l[c++] = t >> 16 & 255, l[c++] = t >> 8 & 255, l[c++] = 255 & t;
            return 2 === i && (t = a[e.charCodeAt(r)] << 2 | a[e.charCodeAt(r + 1)] >> 4, l[c++] = 255 & t), 1 === i && (t = a[e.charCodeAt(r)] << 10 | a[e.charCodeAt(r + 1)] << 4 | a[e.charCodeAt(r + 2)] >> 2, l[c++] = t >> 8 & 255, l[c++] = 255 & t), l
        }, r.fromByteArray = function(e) {
            for (var t, r = e.length, n = r % 3, a = [], o = 0, i = r - n; o < i; o += 16383) a.push(function(e, t, r) {
                for (var n, a = [], o = t; o < r; o += 3) n = (e[o] << 16 & 0xff0000) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]), a.push(s[n >> 18 & 63] + s[n >> 12 & 63] + s[n >> 6 & 63] + s[63 & n]);
                return a.join("")
            }(e, o, o + 16383 > i ? i : o + 16383));
            return 1 === n ? a.push(s[(t = e[r - 1]) >> 2] + s[t << 4 & 63] + "==") : 2 === n && a.push(s[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] + s[t >> 4 & 63] + s[t << 2 & 63] + "="), a.join("")
        };
        for (var s = [], a = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = 0, c = i.length; l < c; ++l) s[l] = i[l], a[i.charCodeAt(l)] = l;

        function u(e) {
            var t = e.length;
            if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
            var r = e.indexOf("="); - 1 === r && (r = t);
            var n = r === t ? 0 : 4 - r % 4;
            return [r, n]
        }
        a[45] = 62, a[95] = 63
    }, {}],
    lPFVa: [function(e, t, r, n) {
        r.read = function(e, t, r, n, s) {
            var a, o, i = 8 * s - n - 1,
                l = (1 << i) - 1,
                c = l >> 1,
                u = -7,
                d = r ? s - 1 : 0,
                p = r ? -1 : 1,
                f = e[t + d];
            for (d += p, a = f & (1 << -u) - 1, f >>= -u, u += i; u > 0; a = 256 * a + e[t + d], d += p, u -= 8);
            for (o = a & (1 << -u) - 1, a >>= -u, u += n; u > 0; o = 256 * o + e[t + d], d += p, u -= 8);
            if (0 === a) a = 1 - c;
            else {
                if (a === l) return o ? NaN : 1 / 0 * (f ? -1 : 1);
                o += Math.pow(2, n), a -= c
            }
            return (f ? -1 : 1) * o * Math.pow(2, a - n)
        }, r.write = function(e, t, r, n, s, a) {
            var o, i, l, c = 8 * a - s - 1,
                u = (1 << c) - 1,
                d = u >> 1,
                p = 5960464477539062e-23 * (23 === s),
                f = n ? 0 : a - 1,
                h = n ? 1 : -1,
                g = +(t < 0 || 0 === t && 1 / t < 0);
            for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (i = +!!isNaN(t), o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -o)) < 1 && (o--, l *= 2), o + d >= 1 ? t += p / l : t += p * Math.pow(2, 1 - d), t * l >= 2 && (o++, l /= 2), o + d >= u ? (i = 0, o = u) : o + d >= 1 ? (i = (t * l - 1) * Math.pow(2, s), o += d) : (i = t * Math.pow(2, d - 1) * Math.pow(2, s), o = 0)); s >= 8; e[r + f] = 255 & i, f += h, i /= 256, s -= 8);
            for (o = o << s | i, c += s; c > 0; e[r + f] = 255 & o, f += h, o /= 256, c -= 8);
            e[r + f - h] |= 128 * g
        }
    }, {}],
    hjCVQ: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r);
        "use strict";
        var a = e("../utils.js"),
            o = s.interopDefault(a);

        function i(e, t, r, n, s) {
            Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s, this.status = s.status ? s.status : null)
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
        }), i.from = (e, t, r, n, s, a) => {
            let c = Object.create(l);
            return o.default.toFlatObject(e, c, function(e) {
                return e !== Error.prototype
            }, e => "isAxiosError" !== e), i.call(c, e.message, t, r, n, s), c.cause = e, c.name = e.name, a && Object.assign(c, a), c
        }, r.default = i
    }, {
        "../utils.js": "2ioTY",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    fN4B6: [function(e, t, r, n) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = null
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "5Qndl": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r);
        "use strict";
        var a = e("./../utils.js"),
            o = s.interopDefault(a);
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
    gTZwy: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "default", () => E);
        "use strict";
        var a = e("./transformData.js"),
            o = s.interopDefault(a),
            i = e("../cancel/isCancel.js"),
            l = s.interopDefault(i),
            c = e("../defaults/index.js"),
            u = s.interopDefault(c),
            d = e("../cancel/CanceledError.js"),
            p = s.interopDefault(d),
            f = e("../core/AxiosHeaders.js"),
            h = s.interopDefault(f),
            g = e("../adapters/adapters.js"),
            y = s.interopDefault(g);

        function m(e) {
            if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new(0, p.default)(null, e)
        }

        function E(e) {
            return m(e), e.headers = h.default.from(e.headers), e.data = o.default.call(e, e.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1), y.default.getAdapter(e.adapter || u.default.adapter)(e).then(function(t) {
                return m(e), t.data = o.default.call(e, e.transformResponse, t), t.headers = h.default.from(t.headers), t
            }, function(t) {
                return !(0, l.default)(t) && (m(e), t && t.response && (t.response.data = o.default.call(e, e.transformResponse, t.response), t.response.headers = h.default.from(t.response.headers))), Promise.reject(t)
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
    "8H0wy": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "default", () => d);
        "use strict";
        var a = e("./../utils.js"),
            o = s.interopDefault(a),
            i = e("../defaults/index.js"),
            l = s.interopDefault(i),
            c = e("../core/AxiosHeaders.js"),
            u = s.interopDefault(c);

        function d(e, t) {
            let r = this || l.default,
                n = t || r,
                s = u.default.from(n.headers),
                a = n.data;
            return o.default.forEach(e, function(e) {
                a = e.call(r, a, s.normalize(), t ? t.status : void 0)
            }), s.normalize(), a
        }
    }, {
        "./../utils.js": "2ioTY",
        "../defaults/index.js": "1GU0t",
        "../core/AxiosHeaders.js": "1qkRX",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "1GU0t": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r);
        "use strict";
        var a = e("../utils.js"),
            o = s.interopDefault(a),
            i = e("../core/AxiosError.js"),
            l = s.interopDefault(i),
            c = e("./transitional.js"),
            u = s.interopDefault(c),
            d = e("../helpers/toFormData.js"),
            p = s.interopDefault(d),
            f = e("../helpers/toURLEncodedForm.js"),
            h = s.interopDefault(f),
            g = e("../platform/index.js"),
            y = s.interopDefault(g),
            m = e("../helpers/formDataToJSON.js"),
            E = s.interopDefault(m);
        let w = {
            transitional: u.default,
            adapter: ["xhr", "http", "fetch"],
            transformRequest: [function(e, t) {
                let r, n = t.getContentType() || "",
                    s = n.indexOf("application/json") > -1,
                    a = o.default.isObject(e);
                if (a && o.default.isHTMLForm(e) && (e = new FormData(e)), o.default.isFormData(e)) return s ? JSON.stringify((0, E.default)(e)) : e;
                if (o.default.isArrayBuffer(e) || o.default.isBuffer(e) || o.default.isStream(e) || o.default.isFile(e) || o.default.isBlob(e) || o.default.isReadableStream(e)) return e;
                if (o.default.isArrayBufferView(e)) return e.buffer;
                if (o.default.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
                if (a) {
                    if (n.indexOf("application/x-www-form-urlencoded") > -1) return (0, h.default)(e, this.formSerializer).toString();
                    if ((r = o.default.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                        let t = this.env && this.env.FormData;
                        return (0, p.default)(r ? {
                            "files[]": e
                        } : e, t && new t, this.formSerializer)
                    }
                }
                if (a || s) {
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
                    n = "json" === this.responseType;
                if (o.default.isResponse(e) || o.default.isReadableStream(e)) return e;
                if (e && o.default.isString(e) && (r && !this.responseType || n)) {
                    let r = t && t.silentJSONParsing;
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        if (!r && n) {
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
                FormData: y.default.classes.FormData,
                Blob: y.default.classes.Blob
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
    lBqaD: [function(e, t, r, n) {
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
    bgvH4: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "default", () => d);
        "use strict";
        var a = e("../utils.js"),
            o = s.interopDefault(a),
            i = e("./toFormData.js"),
            l = s.interopDefault(i),
            c = e("../platform/index.js"),
            u = s.interopDefault(c);

        function d(e, t) {
            return (0, l.default)(e, new u.default.classes.URLSearchParams, Object.assign({
                visitor: function(e, t, r, n) {
                    return u.default.isNode && o.default.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : n.defaultVisitor.apply(this, arguments)
                }
            }, t))
        }
    }, {
        "../utils.js": "2ioTY",
        "./toFormData.js": "k8OtD",
        "../platform/index.js": "fP1Ni",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    fP1Ni: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r);
        var a = e("./node/index.js"),
            o = s.interopDefault(a);
        r.default = {
            ...e("./common/utils.js"),
            ...o.default
        }
    }, {
        "./node/index.js": "3yghl",
        "./common/utils.js": "dkG5V",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "3yghl": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r);
        var a = e("./classes/URLSearchParams.js"),
            o = s.interopDefault(a),
            i = e("./classes/FormData.js"),
            l = s.interopDefault(i),
            c = e("./classes/Blob.js"),
            u = s.interopDefault(c);
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
    eT4YQ: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r);
        "use strict";
        var a = e("../../../helpers/AxiosURLSearchParams.js"),
            o = s.interopDefault(a);
        r.default = "undefined" != typeof URLSearchParams ? URLSearchParams : o.default
    }, {
        "../../../helpers/AxiosURLSearchParams.js": "juzHK",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "2389U": [function(e, t, r, n) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        "use strict";
        r.default = "undefined" != typeof FormData ? FormData : null
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    eKMhL: [function(e, t, r, n) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        "use strict";
        r.default = "undefined" != typeof Blob ? Blob : null
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    dkG5V: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "hasBrowserEnv", () => a), s.export(r, "hasStandardBrowserWebWorkerEnv", () => l), s.export(r, "hasStandardBrowserEnv", () => i), s.export(r, "navigator", () => o), s.export(r, "origin", () => c);
        let a = "undefined" != typeof window && "undefined" != typeof document,
            o = "object" == typeof navigator && navigator || void 0,
            i = a && (!o || 0 > ["ReactNative", "NativeScript", "NS"].indexOf(o.product)),
            l = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
            c = a && window.location.href || "http://localhost"
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    jhUur: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r);
        "use strict";
        var a = e("../utils.js"),
            o = s.interopDefault(a);
        r.default = function(e) {
            if (o.default.isFormData(e) && o.default.isFunction(e.entries)) {
                let t = {};
                return o.default.forEachEntry(e, (e, r) => {
                    ! function e(t, r, n, s) {
                        let a = t[s++];
                        if ("__proto__" === a) return !0;
                        let i = Number.isFinite(+a),
                            l = s >= t.length;
                        return (a = !a && o.default.isArray(n) ? n.length : a, l) ? o.default.hasOwnProp(n, a) ? n[a] = [n[a], r] : n[a] = r : (n[a] && o.default.isObject(n[a]) || (n[a] = []), e(t, r, n[a], s) && o.default.isArray(n[a]) && (n[a] = function(e) {
                            let t, r, n = {},
                                s = Object.keys(e),
                                a = s.length;
                            for (t = 0; t < a; t++) n[r = s[t]] = e[r];
                            return n
                        }(n[a]))), !i
                    }(o.default.matchAll(/\w+|\[(\w*)]/g, e).map(e => "[]" === e[0] ? "" : e[1] || e[0]), r, t, 0)
                }), t
            }
            return null
        }
    }, {
        "../utils.js": "2ioTY",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "1qkRX": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r);
        "use strict";
        var a = e("../utils.js"),
            o = s.interopDefault(a),
            i = e("../helpers/parseHeaders.js"),
            l = s.interopDefault(i);
        let c = Symbol("internals");

        function u(e) {
            return e && String(e).trim().toLowerCase()
        }

        function d(e) {
            return !1 === e || null == e ? e : o.default.isArray(e) ? e.map(d) : String(e)
        }

        function p(e, t, r, n, s) {
            if (o.default.isFunction(n)) return n.call(this, t, r);
            if (s && (t = r), o.default.isString(t)) {
                if (o.default.isString(n)) return -1 !== t.indexOf(n);
                if (o.default.isRegExp(n)) return n.test(t)
            }
        }
        class f {
            constructor(e) {
                e && this.set(e)
            }
            set(e, t, r) {
                let n = this;

                function s(e, t, r) {
                    let s = u(t);
                    if (!s) throw Error("header name must be a non-empty string");
                    let a = o.default.findKey(n, s);
                    a && void 0 !== n[a] && !0 !== r && (void 0 !== r || !1 === n[a]) || (n[a || t] = d(e))
                }
                let a = (e, t) => o.default.forEach(e, (e, r) => s(e, r, t));
                if (o.default.isPlainObject(e) || e instanceof this.constructor) a(e, t);
                else {
                    let n;
                    if (o.default.isString(e) && (e = e.trim()) && (n = e, !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim()))) a((0, l.default)(e), t);
                    else if (o.default.isObject(e) && o.default.isIterable(e)) {
                        let r = {},
                            n, s;
                        for (let t of e) {
                            if (!o.default.isArray(t)) throw TypeError("Object iterator must return a key-value pair");
                            r[s = t[0]] = (n = r[s]) ? o.default.isArray(n) ? [...n, t[1]] : [n, t[1]] : t[1]
                        }
                        a(r, t)
                    } else null != e && s(t, e, r)
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
                                n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                            for (; t = n.exec(e);) r[t[1]] = t[2];
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
                    n = !1;

                function s(e) {
                    if (e = u(e)) {
                        let s = o.default.findKey(r, e);
                        s && (!t || p(r, r[s], s, t)) && (delete r[s], n = !0)
                    }
                }
                return o.default.isArray(e) ? e.forEach(s) : s(e), n
            }
            clear(e) {
                let t = Object.keys(this),
                    r = t.length,
                    n = !1;
                for (; r--;) {
                    let s = t[r];
                    (!e || p(this, this[s], s, e, !0)) && (delete this[s], n = !0)
                }
                return n
            }
            normalize(e) {
                let t = this,
                    r = {};
                return o.default.forEach(this, (n, s) => {
                    let a = o.default.findKey(r, s);
                    if (a) {
                        t[a] = d(n), delete t[s];
                        return
                    }
                    let i = e ? s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, r) => t.toUpperCase() + r) : String(s).trim();
                    i !== s && delete t[s], t[i] = d(n), r[i] = !0
                }), this
            }
            concat(...e) {
                return this.constructor.concat(this, ...e)
            }
            toJSON(e) {
                let t = Object.create(null);
                return o.default.forEach(this, (r, n) => {
                    null != r && !1 !== r && (t[n] = e && o.default.isArray(r) ? r.join(", ") : r)
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

                function n(e) {
                    let n = u(e);
                    if (!t[n]) {
                        let s = o.default.toCamelCase(" " + e);
                        ["get", "set", "has"].forEach(t => {
                            Object.defineProperty(r, t + s, {
                                value: function(r, n, s) {
                                    return this[t].call(this, e, r, n, s)
                                },
                                configurable: !0
                            })
                        }), t[n] = !0
                    }
                }
                return o.default.isArray(e) ? e.forEach(n) : n(e), this
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
    aYbVO: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r);
        "use strict";
        var a = e("./../utils.js");
        let o = s.interopDefault(a).default.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
        r.default = e => {
            let t, r, n, s = {};
            return e && e.split("\n").forEach(function(e) {
                n = e.indexOf(":"), t = e.substring(0, n).trim().toLowerCase(), r = e.substring(n + 1).trim(), !t || s[t] && o[t] || ("set-cookie" === t ? s[t] ? s[t].push(r) : s[t] = [r] : s[t] = s[t] ? s[t] + ", " + r : r)
            }), s
        }
    }, {
        "./../utils.js": "2ioTY",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "5ndsF": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        "use strict";

        function a(e) {
            return !!(e && e.__CANCEL__)
        }
        s.defineInteropFlag(r), s.export(r, "default", () => a)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    judoa: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r);
        "use strict";
        var a = e("../core/AxiosError.js"),
            o = s.interopDefault(a),
            i = e("../utils.js");

        function l(e, t, r) {
            o.default.call(this, null == e ? "canceled" : e, o.default.ERR_CANCELED, t, r), this.name = "CanceledError"
        }
        s.interopDefault(i).default.inherits(l, o.default, {
            __CANCEL__: !0
        }), r.default = l
    }, {
        "../core/AxiosError.js": "hjCVQ",
        "../utils.js": "2ioTY",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "6E0f0": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r);
        var a = e("../utils.js"),
            o = s.interopDefault(a),
            i = e("./http.js"),
            l = s.interopDefault(i),
            c = e("./xhr.js"),
            u = s.interopDefault(c),
            d = e("./fetch.js"),
            p = s.interopDefault(d),
            f = e("../core/AxiosError.js"),
            h = s.interopDefault(f);
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
        let y = e => `- ${e}`,
            m = e => o.default.isFunction(e) || null === e || !1 === e;
        r.default = {
            getAdapter: e => {
                let t, r, {
                        length: n
                    } = e = o.default.isArray(e) ? e : [e],
                    s = {};
                for (let a = 0; a < n; a++) {
                    let n;
                    if (r = t = e[a], !m(t) && void 0 === (r = g[(n = String(t)).toLowerCase()])) throw new(0, h.default)(`Unknown adapter '${n}'`);
                    if (r) break;
                    s[n || "#" + a] = r
                }
                if (!r) {
                    let e = Object.entries(s).map(([e, t]) => `adapter ${e} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build")),
                        t = n ? e.length > 1 ? "since :\n" + e.map(y).join("\n") : " " + y(e[0]) : "as no adapter specified";
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
    "9qcoo": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r);
        var a = e("./../utils.js"),
            o = s.interopDefault(a),
            i = e("./../core/settle.js"),
            l = s.interopDefault(i),
            c = e("../defaults/transitional.js"),
            u = s.interopDefault(c),
            d = e("../core/AxiosError.js"),
            p = s.interopDefault(d),
            f = e("../cancel/CanceledError.js"),
            h = s.interopDefault(f),
            g = e("../helpers/parseProtocol.js"),
            y = s.interopDefault(g),
            m = e("../platform/index.js"),
            E = s.interopDefault(m),
            w = e("../core/AxiosHeaders.js"),
            R = s.interopDefault(w),
            I = e("../helpers/progressEventReducer.js"),
            T = e("../helpers/resolveConfig.js"),
            j = s.interopDefault(T);
        r.default = "undefined" != typeof XMLHttpRequest && function(e) {
            return new Promise(function(t, r) {
                let n, s, a, i, c, d = (0, j.default)(e),
                    f = d.data,
                    g = R.default.from(d.headers).normalize(),
                    {
                        responseType: m,
                        onUploadProgress: w,
                        onDownloadProgress: T
                    } = d;

                function A() {
                    i && i(), c && c(), d.cancelToken && d.cancelToken.unsubscribe(n), d.signal && d.signal.removeEventListener("abort", n)
                }
                let O = new XMLHttpRequest;

                function v() {
                    if (!O) return;
                    let n = R.default.from("getAllResponseHeaders" in O && O.getAllResponseHeaders()),
                        s = {
                            data: m && "text" !== m && "json" !== m ? O.response : O.responseText,
                            status: O.status,
                            statusText: O.statusText,
                            headers: n,
                            config: e,
                            request: O
                        };
                    (0, l.default)(function(e) {
                        t(e), A()
                    }, function(e) {
                        r(e), A()
                    }, s), O = null
                }
                O.open(d.method.toUpperCase(), d.url, !0), O.timeout = d.timeout, "onloadend" in O ? O.onloadend = v : O.onreadystatechange = function() {
                    O && 4 === O.readyState && (0 !== O.status || O.responseURL && 0 === O.responseURL.indexOf("file:")) && setTimeout(v)
                }, O.onabort = function() {
                    O && (r(new(0, p.default)("Request aborted", p.default.ECONNABORTED, e, O)), O = null)
                }, O.onerror = function() {
                    r(new(0, p.default)("Network Error", p.default.ERR_NETWORK, e, O)), O = null
                }, O.ontimeout = function() {
                    let t = d.timeout ? "timeout of " + d.timeout + "ms exceeded" : "timeout exceeded",
                        n = d.transitional || u.default;
                    d.timeoutErrorMessage && (t = d.timeoutErrorMessage), r(new(0, p.default)(t, n.clarifyTimeoutError ? p.default.ETIMEDOUT : p.default.ECONNABORTED, e, O)), O = null
                }, void 0 === f && g.setContentType(null), "setRequestHeader" in O && o.default.forEach(g.toJSON(), function(e, t) {
                    O.setRequestHeader(t, e)
                }), o.default.isUndefined(d.withCredentials) || (O.withCredentials = !!d.withCredentials), m && "json" !== m && (O.responseType = d.responseType), T && ([a, c] = (0, I.progressEventReducer)(T, !0), O.addEventListener("progress", a)), w && O.upload && ([s, i] = (0, I.progressEventReducer)(w), O.upload.addEventListener("progress", s), O.upload.addEventListener("loadend", i)), (d.cancelToken || d.signal) && (n = t => {
                    O && (r(!t || t.type ? new(0, h.default)(null, e, O) : t), O.abort(), O = null)
                }, d.cancelToken && d.cancelToken.subscribe(n), d.signal && (d.signal.aborted ? n() : d.signal.addEventListener("abort", n)));
                let b = (0, y.default)(d.url);
                if (b && -1 === E.default.protocols.indexOf(b)) return void r(new(0, p.default)("Unsupported protocol " + b + ":", p.default.ERR_BAD_REQUEST, e));
                O.send(f || null)
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
    dlf0W: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "default", () => i);
        "use strict";
        var a = e("./AxiosError.js"),
            o = s.interopDefault(a);

        function i(e, t, r) {
            let n = r.config.validateStatus;
            !r.status || !n || n(r.status) ? e(r) : t(new(0, o.default)("Request failed with status code " + r.status, [o.default.ERR_BAD_REQUEST, o.default.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r))
        }
    }, {
        "./AxiosError.js": "hjCVQ",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "3ExDf": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        "use strict";

        function a(e) {
            let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
            return t && t[1] || ""
        }
        s.defineInteropFlag(r), s.export(r, "default", () => a)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "7uRZA": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "progressEventReducer", () => d), s.export(r, "progressEventDecorator", () => p), s.export(r, "asyncDecorator", () => f);
        var a = e("./speedometer.js"),
            o = s.interopDefault(a),
            i = e("./throttle.js"),
            l = s.interopDefault(i),
            c = e("../utils.js"),
            u = s.interopDefault(c);
        let d = (e, t, r = 3) => {
                let n = 0,
                    s = (0, o.default)(50, 250);
                return (0, l.default)(r => {
                    let a = r.loaded,
                        o = r.lengthComputable ? r.total : void 0,
                        i = a - n,
                        l = s(i);
                    n = a, e({
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
                return [n => t[0]({
                    lengthComputable: r,
                    total: e,
                    loaded: n
                }), t[1]]
            },
            f = e => (...t) => u.default.asap(() => e(...t))
    }, {
        "./speedometer.js": "cludo",
        "./throttle.js": "4cf1B",
        "../utils.js": "2ioTY",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    cludo: [function(e, t, r, n) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        "use strict";
        r.default = function(e, t) {
            let r, n = Array(e = e || 10),
                s = Array(e),
                a = 0,
                o = 0;
            return t = void 0 !== t ? t : 1e3,
                function(i) {
                    let l = Date.now(),
                        c = s[o];
                    r || (r = l), n[a] = i, s[a] = l;
                    let u = o,
                        d = 0;
                    for (; u !== a;) d += n[u++], u %= e;
                    if ((a = (a + 1) % e) === o && (o = (o + 1) % e), l - r < t) return;
                    let p = c && l - c;
                    return p ? Math.round(1e3 * d / p) : void 0
                }
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "4cf1B": [function(e, t, r, n) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = function(e, t) {
            let r, n, s = 0,
                a = 1e3 / t,
                o = (t, a = Date.now()) => {
                    s = a, r = null, n && (clearTimeout(n), n = null), e.apply(null, t)
                };
            return [(...e) => {
                let t = Date.now(),
                    i = t - s;
                i >= a ? o(e, t) : (r = e, n || (n = setTimeout(() => {
                    n = null, o(r)
                }, a - i)))
            }, () => r && o(r)]
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    gdj2s: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r);
        var a = e("../platform/index.js"),
            o = s.interopDefault(a),
            i = e("../utils.js"),
            l = s.interopDefault(i),
            c = e("./isURLSameOrigin.js"),
            u = s.interopDefault(c),
            d = e("./cookies.js"),
            p = s.interopDefault(d),
            f = e("../core/buildFullPath.js"),
            h = s.interopDefault(f),
            g = e("../core/mergeConfig.js"),
            y = s.interopDefault(g),
            m = e("../core/AxiosHeaders.js"),
            E = s.interopDefault(m),
            w = e("./buildURL.js"),
            R = s.interopDefault(w);
        r.default = e => {
            let t, r = (0, y.default)({}, e),
                {
                    data: n,
                    withXSRFToken: s,
                    xsrfHeaderName: a,
                    xsrfCookieName: i,
                    headers: c,
                    auth: d
                } = r;
            if (r.headers = c = E.default.from(c), r.url = (0, R.default)((0, h.default)(r.baseURL, r.url, r.allowAbsoluteUrls), e.params, e.paramsSerializer), d && c.set("Authorization", "Basic " + btoa((d.username || "") + ":" + (d.password ? unescape(encodeURIComponent(d.password)) : ""))), l.default.isFormData(n)) {
                if (o.default.hasStandardBrowserEnv || o.default.hasStandardBrowserWebWorkerEnv) c.setContentType(void 0);
                else if (!1 !== (t = c.getContentType())) {
                    let [e, ...r] = t ? t.split(";").map(e => e.trim()).filter(Boolean) : [];
                    c.setContentType([e || "multipart/form-data", ...r].join("; "))
                }
            }
            if (o.default.hasStandardBrowserEnv && (s && l.default.isFunction(s) && (s = s(r)), s || !1 !== s && (0, u.default)(r.url))) {
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
    "33eDi": [function(e, t, r, n) {
        let s, a;
        var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
        o.defineInteropFlag(r);
        var i = e("../platform/index.js"),
            l = o.interopDefault(i);
        r.default = l.default.hasStandardBrowserEnv ? (s = new URL(l.default.origin), a = l.default.navigator && /(msie|trident)/i.test(l.default.navigator.userAgent), e => (e = new URL(e, l.default.origin), s.protocol === e.protocol && s.host === e.host && (a || s.port === e.port))) : () => !0
    }, {
        "../platform/index.js": "fP1Ni",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    lftHJ: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r);
        var a = e("./../utils.js"),
            o = s.interopDefault(a),
            i = e("../platform/index.js");
        r.default = s.interopDefault(i).default.hasStandardBrowserEnv ? {
            write(e, t, r, n, s, a) {
                let i = [e + "=" + encodeURIComponent(t)];
                o.default.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()), o.default.isString(n) && i.push("path=" + n), o.default.isString(s) && i.push("domain=" + s), !0 === a && i.push("secure"), document.cookie = i.join("; ")
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
    "48uot": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "default", () => c);
        "use strict";
        var a = e("../helpers/isAbsoluteURL.js"),
            o = s.interopDefault(a),
            i = e("../helpers/combineURLs.js"),
            l = s.interopDefault(i);

        function c(e, t, r) {
            let n = !(0, o.default)(t);
            return e && (n || !1 == r) ? (0, l.default)(e, t) : t
        }
    }, {
        "../helpers/isAbsoluteURL.js": "lW14e",
        "../helpers/combineURLs.js": "kZdZo",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    lW14e: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        "use strict";

        function a(e) {
            return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
        }
        s.defineInteropFlag(r), s.export(r, "default", () => a)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    kZdZo: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        "use strict";

        function a(e, t) {
            return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
        }
        s.defineInteropFlag(r), s.export(r, "default", () => a)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    j8Sbj: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "default", () => u);
        "use strict";
        var a = e("../utils.js"),
            o = s.interopDefault(a),
            i = e("./AxiosHeaders.js"),
            l = s.interopDefault(i);
        let c = e => e instanceof l.default ? {
            ...e
        } : e;

        function u(e, t) {
            t = t || {};
            let r = {};

            function n(e, t, r, n) {
                return o.default.isPlainObject(e) && o.default.isPlainObject(t) ? o.default.merge.call({
                    caseless: n
                }, e, t) : o.default.isPlainObject(t) ? o.default.merge({}, t) : o.default.isArray(t) ? t.slice() : t
            }

            function s(e, t, r, s) {
                return o.default.isUndefined(t) ? o.default.isUndefined(e) ? void 0 : n(void 0, e, r, s) : n(e, t, r, s)
            }

            function a(e, t) {
                if (!o.default.isUndefined(t)) return n(void 0, t)
            }

            function i(e, t) {
                return o.default.isUndefined(t) ? o.default.isUndefined(e) ? void 0 : n(void 0, e) : n(void 0, t)
            }

            function l(r, s, a) {
                return a in t ? n(r, s) : a in e ? n(void 0, r) : void 0
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
                headers: (e, t, r) => s(c(e), c(t), r, !0)
            };
            return o.default.forEach(Object.keys(Object.assign({}, e, t)), function(n) {
                let a = u[n] || s,
                    i = a(e[n], t[n], n);
                o.default.isUndefined(i) && a !== l || (r[n] = i)
            }), r
        }
    }, {
        "../utils.js": "2ioTY",
        "./AxiosHeaders.js": "1qkRX",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "29Teh": [function(e, t, r, n) {
        let s;
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
            y = e("../core/AxiosHeaders.js"),
            m = o.interopDefault(y),
            E = e("../helpers/progressEventReducer.js"),
            w = e("../helpers/resolveConfig.js"),
            R = o.interopDefault(w),
            I = e("../core/settle.js"),
            T = o.interopDefault(I);
        let j = "function" == typeof fetch && "function" == typeof Request && "function" == typeof Response,
            A = j && "function" == typeof ReadableStream,
            O = j && ("function" == typeof TextEncoder ? (s = new TextEncoder, e => s.encode(e)) : async e => new Uint8Array(await new Response(e).arrayBuffer())),
            v = (e, ...t) => {
                try {
                    return !!e(...t)
                } catch (e) {
                    return !1
                }
            },
            b = A && v(() => {
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
            S = A && v(() => u.default.isReadableStream(new Response("").body)),
            C = {
                stream: S && (e => e.body)
            };
        j && (a = new Response, ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(e => {
            C[e] || (C[e] = u.default.isFunction(a[e]) ? t => t[e]() : (t, r) => {
                throw new(0, p.default)(`Response type '${e}' is not supported`, p.default.ERR_NOT_SUPPORT, r)
            })
        }));
        let x = async e => {
            if (null == e) return 0;
            if (u.default.isBlob(e)) return e.size;
            if (u.default.isSpecCompliantForm(e)) {
                let t = new Request(l.default.origin, {
                    method: "POST",
                    body: e
                });
                return (await t.arrayBuffer()).byteLength
            }
            return u.default.isArrayBufferView(e) || u.default.isArrayBuffer(e) ? e.byteLength : (u.default.isURLSearchParams(e) && (e += ""), u.default.isString(e)) ? (await O(e)).byteLength : void 0
        }, N = async (e, t) => {
            let r = u.default.toFiniteNumber(e.getContentLength());
            return null == r ? x(t) : r
        };
        r.default = j && (async e => {
            let t, r, {
                url: n,
                method: s,
                data: a,
                signal: o,
                cancelToken: i,
                timeout: l,
                onDownloadProgress: c,
                onUploadProgress: d,
                responseType: f,
                headers: y,
                withCredentials: w = "same-origin",
                fetchOptions: I
            } = (0, R.default)(e);
            f = f ? (f + "").toLowerCase() : "text";
            let j = (0, h.default)([o, i && i.toAbortSignal()], l),
                A = j && j.unsubscribe && (() => {
                    j.unsubscribe()
                });
            try {
                if (d && b && "get" !== s && "head" !== s && 0 !== (r = await N(y, a))) {
                    let e, t = new Request(n, {
                        method: "POST",
                        body: a,
                        duplex: "half"
                    });
                    if (u.default.isFormData(a) && (e = t.headers.get("content-type")) && y.setContentType(e), t.body) {
                        let [e, n] = (0, E.progressEventDecorator)(r, (0, E.progressEventReducer)((0, E.asyncDecorator)(d)));
                        a = (0, g.trackStream)(t.body, 65536, e, n)
                    }
                }
                u.default.isString(w) || (w = w ? "include" : "omit");
                let o = "credentials" in Request.prototype;
                t = new Request(n, {
                    ...I,
                    signal: j,
                    method: s.toUpperCase(),
                    headers: y.normalize().toJSON(),
                    body: a,
                    duplex: "half",
                    credentials: o ? w : void 0
                });
                let i = await fetch(t, I),
                    l = S && ("stream" === f || "response" === f);
                if (S && (c || l && A)) {
                    let e = {};
                    ["status", "statusText", "headers"].forEach(t => {
                        e[t] = i[t]
                    });
                    let t = u.default.toFiniteNumber(i.headers.get("content-length")),
                        [r, n] = c && (0, E.progressEventDecorator)(t, (0, E.progressEventReducer)((0, E.asyncDecorator)(c), !0)) || [];
                    i = new Response((0, g.trackStream)(i.body, 65536, r, () => {
                        n && n(), A && A()
                    }), e)
                }
                f = f || "text";
                let p = await C[u.default.findKey(C, f) || "text"](i, e);
                return !l && A && A(), await new Promise((r, n) => {
                    (0, T.default)(r, n, {
                        data: p,
                        headers: m.default.from(i.headers),
                        status: i.status,
                        statusText: i.statusText,
                        config: e,
                        request: t
                    })
                })
            } catch (r) {
                if (A && A(), r && "TypeError" === r.name && /Load failed|fetch/i.test(r.message)) throw Object.assign(new(0, p.default)("Network Error", p.default.ERR_NETWORK, e, t), {
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
    iHSrx: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r);
        var a = e("../cancel/CanceledError.js"),
            o = s.interopDefault(a),
            i = e("../core/AxiosError.js"),
            l = s.interopDefault(i),
            c = e("../utils.js"),
            u = s.interopDefault(c);
        r.default = (e, t) => {
            let {
                length: r
            } = e = e ? e.filter(Boolean) : [];
            if (t || r) {
                let r, n = new AbortController,
                    s = function(e) {
                        if (!r) {
                            r = !0, i();
                            let t = e instanceof Error ? e : this.reason;
                            n.abort(t instanceof l.default ? t : new(0, o.default)(t instanceof Error ? t.message : t))
                        }
                    },
                    a = t && setTimeout(() => {
                        a = null, s(new(0, l.default)(`timeout ${t} of ms exceeded`, l.default.ETIMEDOUT))
                    }, t),
                    i = () => {
                        e && (a && clearTimeout(a), a = null, e.forEach(e => {
                            e.unsubscribe ? e.unsubscribe(s) : e.removeEventListener("abort", s)
                        }), e = null)
                    };
                e.forEach(e => e.addEventListener("abort", s));
                let {
                    signal: c
                } = n;
                return c.unsubscribe = () => u.default.asap(i), c
            }
        }
    }, {
        "../cancel/CanceledError.js": "judoa",
        "../core/AxiosError.js": "hjCVQ",
        "../utils.js": "2ioTY",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    g4EAB: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "streamChunk", () => a), s.export(r, "readBytes", () => o), s.export(r, "trackStream", () => l);
        let a = function*(e, t) {
                let r, n = e.byteLength;
                if (!t || n < t) return void(yield e);
                let s = 0;
                for (; s < n;) r = s + t, yield e.slice(s, r), s = r
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
            }, l = (e, t, r, n) => {
                let s, a = o(e, t),
                    i = 0,
                    l = e => {
                        !s && (s = !0, n && n(e))
                    };
                return new ReadableStream({
                    async pull(e) {
                        try {
                            let {
                                done: t,
                                value: n
                            } = await a.next();
                            if (t) {
                                l(), e.close();
                                return
                            }
                            let s = n.byteLength;
                            if (r) {
                                let e = i += s;
                                r(e)
                            }
                            e.enqueue(new Uint8Array(n))
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
    "8PNBN": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        "use strict";
        s.defineInteropFlag(r);
        var a = e("../env/data.js"),
            o = e("../core/AxiosError.js"),
            i = s.interopDefault(o);
        let l = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
            l[e] = function(r) {
                return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
            }
        });
        let c = {};
        l.transitional = function(e, t, r) {
            function n(e, t) {
                return "[Axios v" + a.VERSION + "] Transitional option '" + e + "'" + t + (r ? ". " + r : "")
            }
            return (r, s, a) => {
                if (!1 === e) throw new(0, i.default)(n(s, " has been removed" + (t ? " in " + t : "")), i.default.ERR_DEPRECATED);
                return t && !c[s] && (c[s] = !0, console.warn(n(s, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(r, s, a)
            }
        }, l.spelling = function(e) {
            return (t, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0)
        }, r.default = {
            assertOptions: function(e, t, r) {
                if ("object" != typeof e) throw new(0, i.default)("options must be an object", i.default.ERR_BAD_OPTION_VALUE);
                let n = Object.keys(e),
                    s = n.length;
                for (; s-- > 0;) {
                    let a = n[s],
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
    "9ssnR": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "VERSION", () => a);
        let a = "1.10.0"
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "2aN3e": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r);
        "use strict";
        var a = e("./CanceledError.js"),
            o = s.interopDefault(a);
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
                    let t, n = new Promise(e => {
                        r.subscribe(e), t = e
                    }).then(e);
                    return n.cancel = function() {
                        r.unsubscribe(t)
                    }, n
                }, e(function(e, n, s) {
                    r.reason || (r.reason = new(0, o.default)(e, n, s), t(r.reason))
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
    gQxw3: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        "use strict";

        function a(e) {
            return function(t) {
                return e.apply(null, t)
            }
        }
        s.defineInteropFlag(r), s.export(r, "default", () => a)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    lE0ea: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "default", () => i);
        "use strict";
        var a = e("./../utils.js"),
            o = s.interopDefault(a);

        function i(e) {
            return o.default.isObject(e) && !0 === e.isAxiosError
        }
    }, {
        "./../utils.js": "2ioTY",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    agO1h: [function(e, t, r, n) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        let s = {
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
        Object.entries(s).forEach(([e, t]) => {
            s[t] = e
        }), r.default = s
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    fUPIN: [function(e, t, r, n) {
        var s, a, o, i, l, c, u, d, p, f, h, g, y, m, E, w, R, I, T, j, A = e("@parcel/transformer-js/src/esmodule-helpers.js");
        A.defineInteropFlag(r), A.export(r, "AccountType", () => y), A.export(r, "AuthActionRequiredActions", () => T), A.export(r, "AuthType", () => m), A.export(r, "BasicAuthProvider", () => R), A.export(r, "CodeChallengeMethodEnum", () => j), A.export(r, "EmbeddedState", () => f), A.export(r, "OAuthProvider", () => I), A.export(r, "OpenfortEvents", () => h), A.export(r, "RecoveryMethod", () => g), A.export(r, "ThirdPartyOAuthProvider", () => w), A.export(r, "TokenType", () => E), (s = f || (f = {}))[s.NONE = 0] = "NONE", s[s.UNAUTHENTICATED = 1] = "UNAUTHENTICATED", s[s.EMBEDDED_SIGNER_NOT_CONFIGURED = 2] = "EMBEDDED_SIGNER_NOT_CONFIGURED", s[s.CREATING_ACCOUNT = 3] = "CREATING_ACCOUNT", s[s.READY = 4] = "READY", (h || (h = {})).LOGGED_OUT = "loggedOut", (a = g || (g = {})).PASSWORD = "password", a.AUTOMATIC = "automatic", (o = y || (y = {})).UPGRADEABLE_V4 = "Upgradeable_v04", o.MANAGED_V4 = "Managed_v04", o.ERC6551_V4 = "ERC6551_v04", o.ERC6551_V5 = "ERC6551_v05", o.RECOVERABLE_V4 = "Recoverable_v04", o.MANAGED_V5 = "Managed_v05", o.UPGRADEABLE_V5 = "Upgradeable_v05", o.UPGRADEABLE_V6 = "Upgradeable_v06", o.ZKSYNC_UPGRADEABLE_V1 = "zksync_upgradeable_v1", o.ZKSYNC_UPGRADEABLE_V2 = "zksync_upgradeable_v2", (i = m || (m = {})).OPENFORT = "openfort", i.THIRD_PARTY = "thirdParty", (l = E || (E = {})).ID_TOKEN = "idToken", l.CUSTOM_TOKEN = "customToken", (c = w || (w = {})).ACCELBYTE = "accelbyte", c.FIREBASE = "firebase", c.LOOTLOCKER = "lootlocker", c.PLAYFAB = "playfab", c.SUPABASE = "supabase", c.CUSTOM = "custom", c.OIDC = "oidc", (u = R || (R = {})).EMAIL = "email", u.WALLET = "wallet", (d = I || (I = {})).GOOGLE = "google", d.TWITTER = "twitter", d.APPLE = "apple", d.FACEBOOK = "facebook", d.DISCORD = "discord", d.EPIC_GAMES = "epic_games", d.LINE = "line", (T || (T = {})).ACTION_VERIFY_EMAIL = "verify_email", (p = j || (j = {})).PLAIN = "plain", p.S256 = "S256"
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    iBeSb: [function(e, t, r, n) {
        var s, a, o, i, l = e("@parcel/transformer-js/src/esmodule-helpers.js");
        l.defineInteropFlag(r), l.export(r, "Event", () => o), l.export(r, "ExportPrivateKeyRequest", () => y), l.export(r, "GetCurrentDeviceRequest", () => f), l.export(r, "INCORRECT_USER_ENTROPY_ERROR", () => p), l.export(r, "MISSING_PROJECT_ENTROPY_ERROR", () => d), l.export(r, "MISSING_USER_ENTROPY_ERROR", () => u), l.export(r, "NOT_CONFIGURED_ERROR", () => c), l.export(r, "SetRecoveryMethodRequest", () => m), l.export(r, "ShieldAuthType", () => i), l.export(r, "SignRequest", () => h), l.export(r, "SwitchChainRequest", () => g), l.export(r, "UpdateAuthenticationRequest", () => w), l.export(r, "isErrorResponse", () => E), (s = o || (o = {})).LOADED = "loaded", s.CONFIGURE = "configure", s.CONFIGURED = "configured", s.UPDATE_AUTHENTICATION = "update-authentication", s.AUTHENTICATION_UPDATED = "authentication-updated", s.SIGN = "sign", s.SET_RECOVERY_METHOD = "set-recovery-method", s.SWITCH_CHAIN = "switch-chain", s.CHAIN_SWITCHED = "chain-switched", s.EXPORT = "export", s.SIGNED = "signed", s.LOGOUT = "logout", s.LOGGED_OUT = "logged-out", s.GET_CURRENT_DEVICE = "get-current-device", s.CURRENT_DEVICE = "current-device", s.PING = "ping", s.PONG = "pong";
        let c = "not-configured-error",
            u = "missing-user-entropy-error",
            d = "missing-project-entropy-error",
            p = "incorrect-user-entropy-error";
        class f {
            uuid;
            action = o.GET_CURRENT_DEVICE;
            playerID;
            constructor(e, t) {
                this.uuid = e, this.playerID = t
            }
        }
        class h {
            uuid;
            action = o.SIGN;
            message;
            requireArrayify;
            requireHash;
            requestConfiguration;
            constructor(e, t, r, n, s) {
                this.uuid = e, this.message = t, this.requireArrayify = r, this.requireHash = n, this.requestConfiguration = s
            }
        }
        class g {
            uuid;
            action = o.SWITCH_CHAIN;
            chainId;
            requestConfiguration;
            constructor(e, t, r) {
                this.uuid = e, this.chainId = t, this.requestConfiguration = r
            }
        }
        class y {
            uuid;
            action = o.EXPORT;
            requestConfiguration;
            constructor(e, t) {
                this.uuid = e, this.requestConfiguration = t
            }
        }
        class m {
            uuid;
            action = o.SET_RECOVERY_METHOD;
            recoveryMethod;
            recoveryPassword;
            encryptionSession;
            requestConfiguration;
            constructor(e, t, r, n, s) {
                this.uuid = e, this.recoveryMethod = t, this.recoveryPassword = r, this.encryptionSession = n, this.requestConfiguration = s
            }
        }

        function E(e) {
            return "error" in e
        }
        class w {
            uuid;
            action = o.UPDATE_AUTHENTICATION;
            accessToken;
            recovery;
            constructor(e, t, r) {
                this.uuid = e, this.accessToken = t, this.recovery = r
            }
        }(a = i || (i = {})).OPENFORT = "openfort", a.CUSTOM = "custom"
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    kcx6I: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "IframeManager", () => g), s.export(r, "MissingProjectEntropyError", () => d), s.export(r, "MissingRecoveryPasswordError", () => u), s.export(r, "NotConfiguredError", () => h), s.export(r, "UnknownResponseError", () => f), s.export(r, "WrongRecoveryPasswordError", () => p);
        var a = e("../../../node_modules/penpal/dist/penpal.js"),
            o = e("../storage/istorage.js"),
            i = e("../utils/crypto.js"),
            l = e("../core/errors/openfortError.js"),
            c = e("./types.js");
        class u extends Error {
            constructor() {
                super("This embedded signer requires a password to be recovered")
            }
        }
        class d extends Error {
            constructor() {
                super("MissingProjectEntropyError")
            }
        }
        class p extends Error {
            constructor() {
                super("Wrong recovery password for this embedded signer")
            }
        }
        class f extends Error {
            message;
            constructor(e) {
                super(`Unknown response from iframe: ${e}`), this.message = e || ""
            }
        }
        class h extends Error {
            constructor() {
                super("Not configured")
            }
        }
        class g {
            iframe;
            connection;
            remote;
            storage;
            sdkConfiguration;
            isInitialized = !1;
            constructor(e, t) {
                if (!e) throw new(0, l.OpenfortError)("Configuration is required for IframeManager", l.OpenfortErrorType.INVALID_CONFIGURATION);
                if (!t) throw new(0, l.OpenfortError)("Storage is required for IframeManager", l.OpenfortErrorType.INVALID_CONFIGURATION);
                this.sdkConfiguration = e, this.storage = t
            }
            async iframeSetup() {
                if ("undefined" == typeof document) throw new(0, l.OpenfortError)("Document is not available. Please provide a message poster for non-browser environments.", l.OpenfortErrorType.INVALID_CONFIGURATION);
                let e = document.getElementById("openfort-iframe");
                e && document.body.removeChild(e);
                let t = document.createElement("iframe");
                t.style.display = "none", t.id = "openfort-iframe", document.body.appendChild(t), t.src = this.sdkConfiguration.iframeUrl, this.iframe = t, await new Promise((e, r) => {
                    let n = setTimeout(() => {
                        r(Error("Iframe load timeout"))
                    }, 1e4);
                    t.onload = () => {
                        clearTimeout(n), e()
                    }, t.onerror = () => {
                        clearTimeout(n), r(Error("Failed to load iframe"))
                    }
                })
            }
            async establishIframeConnection() {
                if ("undefined" == typeof document) throw new(0, l.OpenfortError)("Document is not available.", l.OpenfortErrorType.INVALID_CONFIGURATION);
                if (!this.iframe?.contentWindow) throw new(0, l.OpenfortError)("Iframe does not have content window", l.OpenfortErrorType.INVALID_CONFIGURATION);
                let e = new URL(this.sdkConfiguration.iframeUrl).origin,
                    t = new(0, a.WindowMessenger)({
                        remoteWindow: this.iframe.contentWindow,
                        allowedOrigins: [e]
                    });
                this.connection = (0, a.connect)({
                    messenger: t,
                    timeout: 5e3
                });
                try {
                    this.remote = await this.connection.promise, this.isInitialized = !0
                } catch (e) {
                    throw new(0, l.OpenfortError)(`Failed to establish iFrame connection: ${e.cause||e.message}`, l.OpenfortErrorType.INTERNAL_ERROR, e)
                }
            }
            isLoaded() {
                return this.isInitialized && void 0 !== this.remote
            }
            async ensureConnection() {
                if (!this.isLoaded()) {
                    if ("undefined" == typeof document) throw new(0, l.OpenfortError)("Document is not available.", l.OpenfortErrorType.INVALID_CONFIGURATION);
                    await this.iframeSetup(), await this.establishIframeConnection()
                }
                if (!this.remote) throw new(0, l.OpenfortError)("Failed to establish iFrame connection", l.OpenfortErrorType.INTERNAL_ERROR);
                return this.remote
            }
            handleError(e) {
                if ((0, c.isErrorResponse)(e)) {
                    if (e.error === c.NOT_CONFIGURED_ERROR) throw new h;
                    if (e.error === c.MISSING_USER_ENTROPY_ERROR) throw this.storage.remove(o.StorageKeys.ACCOUNT), new u;
                    if (e.error === c.MISSING_PROJECT_ENTROPY_ERROR) throw this.storage.remove(o.StorageKeys.ACCOUNT), new d;
                    if (e.error === c.INCORRECT_USER_ENTROPY_ERROR) throw new p;
                    throw new f(e.error)
                }
                throw e
            }
            async configure(e) {
                if (!this.sdkConfiguration.shieldConfiguration) throw Error("shieldConfiguration is required");
                let t = await this.ensureConnection(),
                    r = {
                        uuid: (0, i.randomUUID)(),
                        action: c.Event.CONFIGURE,
                        chainId: e.chainId,
                        recovery: e.recovery,
                        publishableKey: this.sdkConfiguration.baseConfiguration.publishableKey,
                        shieldAPIKey: this.sdkConfiguration.shieldConfiguration?.shieldPublishableKey || "",
                        accessToken: e.accessToken,
                        playerID: e.playerID,
                        thirdPartyProvider: e.thirdPartyProvider,
                        thirdPartyTokenType: e.thirdPartyTokenType,
                        encryptionKey: e.password,
                        encryptionPart: this.sdkConfiguration?.shieldConfiguration?.shieldEncryptionKey ?? null,
                        encryptionSession: e.recovery?.encryptionSession ?? null,
                        openfortURL: this.sdkConfiguration.backendUrl,
                        shieldURL: this.sdkConfiguration.shieldUrl
                    },
                    n = await t.configure(r);
                return (0, c.isErrorResponse)(n) && this.handleError(n), "undefined" != typeof sessionStorage && sessionStorage.setItem("iframe-version", n.version ?? "undefined"), n
            }
            async sign(e, t, r, n) {
                let s = await this.ensureConnection(),
                    a = {
                        thirdPartyProvider: e.thirdPartyProvider ?? void 0,
                        thirdPartyTokenType: e.thirdPartyTokenType ?? void 0,
                        token: e.accessToken ?? void 0,
                        publishableKey: this.sdkConfiguration.baseConfiguration.publishableKey,
                        openfortURL: this.sdkConfiguration.backendUrl
                    },
                    o = new(0, c.SignRequest)((0, i.randomUUID)(), t, r, n, a);
                try {
                    let e = await s.sign(o);
                    return (0, c.isErrorResponse)(e) && this.handleError(e), "undefined" != typeof sessionStorage && sessionStorage.setItem("iframe-version", e.version ?? "undefined"), e.signature
                } catch (s) {
                    if (s instanceof h) return await this.configure(e), this.sign(e, t, r, n);
                    throw s
                }
            }
            async switchChain(e, t) {
                let r = await this.ensureConnection(),
                    n = {
                        thirdPartyProvider: e.thirdPartyProvider ?? void 0,
                        thirdPartyTokenType: e.thirdPartyTokenType ?? void 0,
                        token: e.accessToken ?? void 0,
                        publishableKey: this.sdkConfiguration.baseConfiguration.publishableKey,
                        openfortURL: this.sdkConfiguration.backendUrl
                    },
                    s = new(0, c.SwitchChainRequest)((0, i.randomUUID)(), t, n);
                try {
                    let e = await r.switchChain(s);
                    return (0, c.isErrorResponse)(e) && this.handleError(e), "undefined" != typeof sessionStorage && sessionStorage.setItem("iframe-version", e.version ?? "undefined"), e
                } catch (r) {
                    if (r instanceof h) return await this.configure(e), this.switchChain(e, t);
                    throw r
                }
            }
            async export (e) {
                let t = await this.ensureConnection(),
                    r = {
                        thirdPartyProvider: e.thirdPartyProvider ?? void 0,
                        thirdPartyTokenType: e.thirdPartyTokenType ?? void 0,
                        token: e.accessToken ?? void 0,
                        publishableKey: this.sdkConfiguration.baseConfiguration.publishableKey,
                        openfortURL: this.sdkConfiguration.backendUrl
                    },
                    n = new(0, c.ExportPrivateKeyRequest)((0, i.randomUUID)(), r);
                try {
                    let e = await t.export(n);
                    return (0, c.isErrorResponse)(e) && this.handleError(e), "undefined" != typeof sessionStorage && sessionStorage.setItem("iframe-version", e.version ?? "undefined"), e.key
                } catch (t) {
                    if (t instanceof h) return await this.configure(e), this.export(e);
                    throw t
                }
            }
            async setEmbeddedRecovery(e, t, r, n) {
                let s = await this.ensureConnection(),
                    a = {
                        thirdPartyProvider: e.thirdPartyProvider ?? void 0,
                        thirdPartyTokenType: e.thirdPartyTokenType ?? void 0,
                        token: e.accessToken ?? void 0,
                        publishableKey: this.sdkConfiguration.baseConfiguration.publishableKey,
                        openfortURL: this.sdkConfiguration.backendUrl
                    },
                    o = new(0, c.SetRecoveryMethodRequest)((0, i.randomUUID)(), t, r, n, a);
                try {
                    let e = await s.setRecoveryMethod(o);
                    (0, c.isErrorResponse)(e) && this.handleError(e), "undefined" != typeof sessionStorage && sessionStorage.setItem("iframe-version", e.version ?? "undefined")
                } catch (s) {
                    if (s instanceof h) return await this.configure(e), this.setEmbeddedRecovery(e, t, r, n);
                    throw s
                }
            }
            async getCurrentUser(e) {
                let t = await this.ensureConnection(),
                    r = new(0, c.GetCurrentDeviceRequest)((0, i.randomUUID)(), e);
                try {
                    let e = await t.getCurrentDevice(r);
                    return (0, c.isErrorResponse)(e) && this.handleError(e), "undefined" != typeof sessionStorage && sessionStorage.setItem("iframe-version", e.version ?? "undefined"), e
                } catch (e) {
                    if (e instanceof h) return null;
                    throw e
                }
            }
            async logout() {
                let e = await this.ensureConnection(),
                    t = {
                        uuid: (0, i.randomUUID)()
                    };
                await e.logout(t)
            }
            async updateAuthentication(e, t, r) {
                let n = {
                    ...e
                };
                n.accessToken = t, r === c.ShieldAuthType.OPENFORT && n.recovery && (n.recovery = {
                    ...n.recovery,
                    token: t
                });
                let s = await this.ensureConnection(),
                    a = new(0, c.UpdateAuthenticationRequest)((0, i.randomUUID)(), t);
                try {
                    await s.updateAuthentication(a)
                } catch (e) {
                    if (e instanceof h) return await this.configure(n), void await this.updateAuthentication(n, t, r);
                    throw e
                }
            }
            destroy() {
                if (this.connection && (this.connection.destroy(), this.connection = void 0), this.remote = void 0, this.isInitialized = !1, this.iframe && "undefined" != typeof document) {
                    let e = document.getElementById("openfort-iframe");
                    e && e.parentNode && e.parentNode.removeChild(e), this.iframe = void 0
                }
            }
        }
    }, {
        "../../../node_modules/penpal/dist/penpal.js": "1Rzcy",
        "../storage/istorage.js": "8EpXG",
        "../utils/crypto.js": "3dq9D",
        "../core/errors/openfortError.js": "3xESR",
        "./types.js": "iBeSb",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "1Rzcy": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "CallOptions", () => y), s.export(r, "PenpalError", () => a), s.export(r, "Reply", () => i), s.export(r, "WindowMessenger", () => v), s.export(r, "connect", () => O);
        var a = class extends Error {
                code;
                constructor(e, t) {
                    super(t), this.name = "PenpalError", this.code = e
                }
            },
            o = Symbol("Reply"),
            i = class {
                value;
                transferables;
                #e = o;
                constructor(e, t) {
                    this.value = e, this.transferables = t?.transferables
                }
            },
            l = "penpal",
            c = e => "object" == typeof e && null !== e,
            u = e => "function" == typeof e,
            d = (e, t = []) => {
                let r = [];
                for (let n of Object.keys(e)) {
                    let s = e[n];
                    u(s) ? r.push([...t, n]) : c(s) && r.push(...d(s, [...t, n]))
                }
                return r
            },
            p = e => e.join("."),
            f = (e, t, r) => ({
                namespace: l,
                channel: e,
                type: "REPLY",
                callId: t,
                isError: !0,
                ...r instanceof Error ? {
                    value: {
                        name: r.name,
                        message: r.message,
                        stack: r.stack,
                        penpalCode: r instanceof a ? r.code : void 0
                    },
                    isSerializedErrorInstance: !0
                } : {
                    value: r
                }
            }),
            h = crypto.randomUUID?.bind(crypto) ?? (() => [, , , , ].fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-")),
            g = Symbol("CallOptions"),
            y = class {
                transferables;
                timeout;
                #e = g;
                constructor(e) {
                    this.transferables = e?.transferables, this.timeout = e?.timeout
                }
            },
            m = new Set(["apply", "call", "bind"]),
            E = (e, t, r = []) => new Proxy(r.length ? () => {} : Object.create(null), {
                get(n, s) {
                    if ("then" !== s) return r.length && m.has(s) ? Reflect.get(n, s) : E(e, t, [...r, s])
                },
                apply: (t, n, s) => e(r, s)
            }),
            w = e => new a("CONNECTION_DESTROYED", `Method call ${p(e)}() failed due to destroyed connection`),
            R = class extends Error {
                constructor(e) {
                    super(`You've hit a bug in Penpal. Please file an issue with the following information: ${e}`)
                }
            },
            I = "deprecated-penpal",
            T = e => e.join("."),
            j = e => new R(`Unexpected message to translate: ${JSON.stringify(e)}`),
            A = new WeakSet,
            O = ({
                messenger: e,
                methods: t = {},
                timeout: r,
                channel: n,
                log: s
            }) => {
                var o;
                let g, m;
                if (!e) throw new a("INVALID_ARGUMENT", "messenger must be defined");
                if (A.has(e)) throw new a("INVALID_ARGUMENT", "A messenger can only be used for a single connection");
                A.add(e);
                let R = [e.destroy],
                    T = (o = t => {
                        if (t) try {
                            e.sendMessage({
                                namespace: l,
                                channel: n,
                                type: "DESTROY"
                            })
                        } catch (e) {}
                        for (let e of R) e();
                        s?.("Connection destroyed")
                    }, m = !1, (...e) => (m || (m = !0, g = o(...e)), g)),
                    j = e => c(e) && e.namespace === l && e.channel === n;
                return {
                    promise: (async () => {
                        try {
                            e.initialize({
                                log: s,
                                validateReceivedMessage: j
                            }), e.addMessageHandler(e => {
                                "DESTROY" === e.type && T(!1)
                            });
                            let {
                                remoteProxy: o,
                                destroy: g
                            } = await (({
                                messenger: e,
                                methods: t,
                                timeout: r,
                                channel: n,
                                log: s
                            }) => {
                                let o, g, m, R = h(),
                                    T = [],
                                    j = !1,
                                    A = d(t),
                                    {
                                        promise: O,
                                        resolve: v,
                                        reject: b
                                    } = {
                                        promise: new Promise((e, t) => {
                                            g = e, m = t
                                        }),
                                        resolve: g,
                                        reject: m
                                    },
                                    S = void 0 !== r ? setTimeout(() => {
                                        b(new a("CONNECTION_TIMEOUT", `Connection timed out after ${r}ms`))
                                    }, r) : void 0,
                                    C = () => {
                                        for (let e of T) e()
                                    },
                                    x = () => {
                                        if (j) return;
                                        T.push(((e, t, r, n) => {
                                            let s = !1,
                                                o = async o => {
                                                    let d, h;
                                                    if (s || "CALL" !== o.type) return;
                                                    n?.(`Received ${p(o.methodPath)}() call`, o);
                                                    let {
                                                        methodPath: g,
                                                        args: y,
                                                        id: m
                                                    } = o;
                                                    try {
                                                        let e = ((e, t) => {
                                                            let r = e.reduce((e, t) => c(e) ? e[t] : void 0, t);
                                                            return u(r) ? r : void 0
                                                        })(g, t);
                                                        if (!e) throw new a("METHOD_NOT_FOUND", `Method \`${p(g)}\` is not found.`);
                                                        let n = await e(...y);
                                                        n instanceof i && (h = n.transferables, n = await n.value), d = {
                                                            namespace: l,
                                                            channel: r,
                                                            type: "REPLY",
                                                            callId: m,
                                                            value: n
                                                        }
                                                    } catch (e) {
                                                        d = f(r, m, e)
                                                    }
                                                    if (!s) try {
                                                        n?.(`Sending ${p(g)}() reply`, d), e.sendMessage(d, h)
                                                    } catch (t) {
                                                        throw "DataCloneError" === t.name && (d = f(r, m, t), n?.(`Sending ${p(g)}() reply`, d), e.sendMessage(d)), t
                                                    }
                                                };
                                            return e.addMessageHandler(o), () => {
                                                s = !0, e.removeMessageHandler(o)
                                            }
                                        })(e, t, n, s));
                                        let {
                                            remoteProxy: r,
                                            destroy: o
                                        } = ((e, t, r) => {
                                            let n = !1,
                                                s = new Map,
                                                o = e => {
                                                    if ("REPLY" !== e.type) return;
                                                    let {
                                                        callId: t,
                                                        value: n,
                                                        isError: o,
                                                        isSerializedErrorInstance: i
                                                    } = e, l = s.get(t);
                                                    l && (s.delete(t), r?.(`Received ${p(l.methodPath)}() call`, e), o ? l.reject(i ? (({
                                                        name: e,
                                                        message: t,
                                                        stack: r,
                                                        penpalCode: n
                                                    }) => {
                                                        let s = n ? new a(n, t) : Error(t);
                                                        return s.name = e, s.stack = r, s
                                                    })(n) : n) : l.resolve(n))
                                                };
                                            return e.addMessageHandler(o), {
                                                remoteProxy: E((o, i) => {
                                                    if (n) throw w(o);
                                                    let c = h(),
                                                        u = i[i.length - 1],
                                                        d = u instanceof y,
                                                        {
                                                            timeout: f,
                                                            transferables: g
                                                        } = d ? u : {},
                                                        m = d ? i.slice(0, -1) : i;
                                                    return new Promise((n, i) => {
                                                        let u = void 0 !== f ? window.setTimeout(() => {
                                                            s.delete(c), i(new a("METHOD_CALL_TIMEOUT", `Method call ${p(o)}() timed out after ${f}ms`))
                                                        }, f) : void 0;
                                                        s.set(c, {
                                                            methodPath: o,
                                                            resolve: n,
                                                            reject: i,
                                                            timeoutId: u
                                                        });
                                                        try {
                                                            let n = {
                                                                namespace: l,
                                                                channel: t,
                                                                type: "CALL",
                                                                id: c,
                                                                methodPath: o,
                                                                args: m
                                                            };
                                                            r?.(`Sending ${p(o)}() call`, n), e.sendMessage(n, g)
                                                        } catch (e) {
                                                            i(new a("TRANSMISSION_FAILED", e.message))
                                                        }
                                                    })
                                                }, r),
                                                destroy: () => {
                                                    for (let {
                                                            methodPath: t,
                                                            reject: r,
                                                            timeoutId: a
                                                        }
                                                        of(n = !0, e.removeMessageHandler(o), s.values())) clearTimeout(a), r(w(t));
                                                    s.clear()
                                                }
                                            }
                                        })(e, n, s);
                                        T.push(o), clearTimeout(S), j = !0, v({
                                            remoteProxy: r,
                                            destroy: C
                                        })
                                    },
                                    N = () => {
                                        let t = {
                                            namespace: l,
                                            type: "SYN",
                                            channel: n,
                                            participantId: R
                                        };
                                        s?.("Sending handshake SYN", t);
                                        try {
                                            e.sendMessage(t)
                                        } catch (e) {
                                            b(new a("TRANSMISSION_FAILED", e.message))
                                        }
                                    },
                                    _ = t => {
                                        "SYN" === t.type && (t => {
                                            if (s?.("Received handshake SYN", t), t.participantId === o && o !== I || (o = t.participantId, N(), !(R > o || o === I))) return;
                                            let r = {
                                                namespace: l,
                                                channel: n,
                                                type: "ACK1",
                                                methodPaths: A
                                            };
                                            s?.("Sending handshake ACK1", r);
                                            try {
                                                e.sendMessage(r)
                                            } catch (e) {
                                                return void b(new a("TRANSMISSION_FAILED", e.message))
                                            }
                                        })(t), "ACK1" === t.type && (t => {
                                            s?.("Received handshake ACK1", t);
                                            let r = {
                                                namespace: l,
                                                channel: n,
                                                type: "ACK2"
                                            };
                                            s?.("Sending handshake ACK2", r);
                                            try {
                                                e.sendMessage(r)
                                            } catch (e) {
                                                return void b(new a("TRANSMISSION_FAILED", e.message))
                                            }
                                            x()
                                        })(t), "ACK2" === t.type && (s?.("Received handshake ACK2", t), x())
                                    };
                                return e.addMessageHandler(_), T.push(() => e.removeMessageHandler(_)), N(), O
                            })({
                                messenger: e,
                                methods: t,
                                timeout: r,
                                channel: n,
                                log: s
                            });
                            return R.push(g), o
                        } catch (e) {
                            throw T(!0), e
                        }
                    })(),
                    destroy: () => {
                        T(!0)
                    }
                }
            },
            v = class {
                #t;
                #r;
                #n;
                #s;
                #a;
                #o = new Set;
                #i;
                #l = !1;
                constructor({
                    remoteWindow: e,
                    allowedOrigins: t
                }) {
                    if (!e) throw new a("INVALID_ARGUMENT", "remoteWindow must be defined");
                    this.#t = e, this.#r = t?.length ? t : [window.origin]
                }
                initialize = ({
                    log: e,
                    validateReceivedMessage: t
                }) => {
                    this.#n = e, this.#s = t, window.addEventListener("message", this.#c)
                };
                sendMessage = (e, t) => {
                    if ("SYN" === e.type) {
                        let r = this.#u(e);
                        return void this.#t.postMessage(e, {
                            targetOrigin: r,
                            transfer: t
                        })
                    }
                    if ("ACK1" === e.type || this.#l) {
                        let r = this.#l ? (e => {
                                if ("ACK1" === e.type) return {
                                    penpal: "synAck",
                                    methodNames: e.methodPaths.map(T)
                                };
                                if ("CALL" === e.type) return {
                                    penpal: "call",
                                    id: e.id,
                                    methodName: T(e.methodPath),
                                    args: e.args
                                };
                                if ("REPLY" === e.type) return e.isError ? {
                                    penpal: "reply",
                                    id: e.callId,
                                    resolution: "rejected",
                                    ...e.isSerializedErrorInstance ? {
                                        returnValue: e.value,
                                        returnValueIsError: !0
                                    } : {
                                        returnValue: e.value
                                    }
                                } : {
                                    penpal: "reply",
                                    id: e.callId,
                                    resolution: "fulfilled",
                                    returnValue: e.value
                                };
                                throw j(e)
                            })(e) : e,
                            n = this.#u(e);
                        return void this.#t.postMessage(r, {
                            targetOrigin: n,
                            transfer: t
                        })
                    }
                    if ("ACK2" === e.type) {
                        let {
                            port1: r,
                            port2: n
                        } = new MessageChannel;
                        this.#i = r, r.addEventListener("message", this.#d), r.start();
                        let s = [n, ...t || []],
                            a = this.#u(e);
                        return void this.#t.postMessage(e, {
                            targetOrigin: a,
                            transfer: s
                        })
                    }
                    if (!this.#i) throw new R("Port is undefined");
                    this.#i.postMessage(e, {
                        transfer: t
                    })
                };
                addMessageHandler = e => {
                    this.#o.add(e)
                };
                removeMessageHandler = e => {
                    this.#o.delete(e)
                };
                destroy = () => {
                    window.removeEventListener("message", this.#c), this.#p(), this.#o.clear()
                };
                #f = e => this.#r.some(t => t instanceof RegExp ? t.test(e) : t === e || "*" === t);
                #u = e => {
                    if ("SYN" === e.type) return "*";
                    if (!this.#a) throw new R("Concrete remote origin not set");
                    return "null" === this.#a && this.#r.includes("*") ? "*" : this.#a
                };
                #p = () => {
                    this.#i?.removeEventListener("message", this.#d), this.#i?.close(), this.#i = void 0
                };
                #c = ({
                    source: e,
                    origin: t,
                    ports: r,
                    data: n
                }) => {
                    let s;
                    if (e === this.#t && (c(s = n) && "penpal" in s && (this.#n?.("Please upgrade the child window to the latest version of Penpal."), this.#l = !0, n = (e => {
                            if ("syn" === e.penpal) return {
                                namespace: l,
                                channel: void 0,
                                type: "SYN",
                                participantId: I
                            };
                            if ("ack" === e.penpal) return {
                                namespace: l,
                                channel: void 0,
                                type: "ACK2"
                            };
                            if ("call" === e.penpal) return {
                                namespace: l,
                                channel: void 0,
                                type: "CALL",
                                id: e.id,
                                methodPath: e.methodName.split("."),
                                args: e.args
                            };
                            if ("reply" === e.penpal) return "fulfilled" === e.resolution ? {
                                namespace: l,
                                channel: void 0,
                                type: "REPLY",
                                callId: e.id,
                                value: e.returnValue
                            } : {
                                namespace: l,
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
                            throw j(e)
                        })(n)), this.#s?.(n)))
                        if (this.#f(t)) {
                            if ("SYN" === n.type && (this.#p(), this.#a = t), "ACK2" === n.type && !this.#l) {
                                if (this.#i = r[0], !this.#i) throw new R("No port received on ACK2");
                                this.#i.addEventListener("message", this.#d), this.#i.start()
                            }
                            for (let e of this.#o) e(n)
                        } else this.#n?.(`Received a message from origin \`${t}\` which did not match allowed origins \`[${this.#r.join(", ")}]\``)
                };
                #d = ({
                    data: e
                }) => {
                    if (this.#s?.(e))
                        for (let t of this.#o) t(e)
                }
            }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "8EpXG": [function(e, t, r, n) {
        var s, a, o = e("@parcel/transformer-js/src/esmodule-helpers.js");
        o.defineInteropFlag(r), o.export(r, "StorageKeys", () => a), (s = a || (a = {})).AUTHENTICATION = "openfort.authentication", s.CONFIGURATION = "openfort.configuration", s.ACCOUNT = "openfort.account", s.TEST = "openfort.test", s.RECOVERY = "openfort.recovery", s.SESSION = "openfort.session", s.PKCE_STATE = "openfort.pkce_state", s.PKCE_VERIFIER = "openfort.pkce_verifier"
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "3dq9D": [function(e, t, r, n) {
        let s;
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
                let n = parseInt(r.substring(e, e + 2), 16);
                0 !== n && (t += String.fromCharCode(n))
            }
            return t
        }

        function c(e) {
            s = e
        }
        async function u(e, t) {
            if (s) return s(e, t);
            if ("undefined" != typeof crypto && crypto.subtle && crypto.subtle.digest) return crypto.subtle.digest(e, t);
            throw Error("No crypto digest function available. Please provide a crypto override for this environment.")
        }
        a.defineInteropFlag(r), a.export(r, "cryptoDigest", () => u), a.export(r, "hexToString", () => l), a.export(r, "numberToHex", () => i), a.export(r, "randomUUID", () => o), a.export(r, "setCryptoDigestOverride", () => c)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "8pPBU": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "OpenfortConfiguration", () => l), s.export(r, "SDKConfiguration", () => u), s.export(r, "ShieldConfiguration", () => c);
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
                this.shieldConfiguration = t, this.baseConfiguration = e, this.backendUrl = r?.backendUrl || "https://api.openfort.xyz", this.iframeUrl = r?.iframeUrl || "https://embed.openfort.xyz/iframe", this.iframeUrl = `${this.iframeUrl}/${this.baseConfiguration.publishableKey}`, t?.debug && (this.iframeUrl = `${this.iframeUrl}?debug=true`), this.shieldUrl = r?.shieldUrl || "https://shield.openfort.xyz", this.storage = r?.storage, r?.crypto?.digest && (0, o.setCryptoDigestOverride)(r.crypto.digest), this.save()
            }
            static async isStorageAccessible(e) {
                try {
                    let t = a.StorageKeys.TEST,
                        r = "openfort_storage_test";
                    e.save(t, r);
                    let n = await e.get(t);
                    return e.remove(t), n === r
                } catch (e) {
                    return console.error("Storage accessibility check failed:", e), !1
                }
            }
            static fromStorage(e) {
                return e ? this.loadFromStorage(e) : i
            }
            static async loadFromStorage(e) {
                let t = await e.get(a.StorageKeys.CONFIGURATION);
                if (!t) return null;
                try {
                    let r, n = JSON.parse(t),
                        s = new l({
                            publishableKey: n.publishableKey
                        });
                    n.shieldPublishableKey && (r = new c({
                        shieldPublishableKey: n.shieldPublishableKey,
                        shieldEncryptionKey: n.shieldEncryptionKey,
                        shieldDebug: n.shieldDebug
                    }));
                    let a = {
                        backendUrl: n.backendUrl,
                        iframeUrl: `${n.iframeUrl?.split("/")[0]}//${n.iframeUrl?.split("/")[2]}/iframe`,
                        shieldUrl: n.shieldUrl,
                        storage: e
                    };
                    return new u({
                        baseConfiguration: s,
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
    "26nPt": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "Openfort", () => y);
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
            g = e("./openfortInternal.js");
        class y {
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
                    this.iAuthManager = new(0, u.AuthManager)(this.storage), this.openfortInternal = new(0, g.OpenfortInternal)(this.storage, this.authManager), this.authInstance = new(0, d.AuthApi)(this.storage, this.authManager, () => this.openfortInternal.validateAndRefreshToken(), this.ensureInitialized.bind(this)), this.embeddedWalletInstance = new(0, p.EmbeddedWalletApi)(this.storage, () => this.openfortInternal.validateAndRefreshToken(), this.ensureInitialized.bind(this)), this.userInstance = new(0, f.UserApi)(this.storage, this.authManager, () => this.openfortInternal.validateAndRefreshToken(), this.ensureInitialized.bind(this)), this.proxyInstance = new(0, h.ProxyApi)(this.storage, this.backendApiClients, () => this.openfortInternal.validateAndRefreshToken(), this.ensureInitialized.bind(this))
                } catch (e) {
                    throw new(0, l.OpenfortError)("Openfort SDK synchronous initialization failed", l.OpenfortErrorType.INVALID_CONFIGURATION)
                }
            }
            constructor(e) {
                this.configuration = new(0, c.SDKConfiguration)(e), this.storage = new(0, i.LazyStorage)(this.configuration.storage), o.InternalSentry.init({
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
                return await this.ensureInitialized(), this.openfortInternal.validateAndRefreshToken(e)
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
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "5IDb0": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "BackendApiClients", () => C), s.export(r, "createConfig", () => S);
        var a = e("axios"),
            o = s.interopDefault(a),
            i = e("axios-retry"),
            l = s.interopDefault(i);
        let c = "https://api.openfort.xyz".replace(/\/+$/, "");
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
                (function e(t, r, n = "") {
                    null != r && ("object" == typeof r ? Array.isArray(r) ? r.forEach(r => e(t, r, n)) : Object.keys(r).forEach(s => e(t, r[s], `${n}${""!==n?".":""}${s}`)) : t.has(n) ? t.append(n, r) : t.set(n, r))
                })(r, t), e.search = r.toString()
            }, y = function(e, t, r) {
                let n = "string" != typeof e;
                return (n && r && r.isJsonMime ? r.isJsonMime(t.headers["Content-Type"]) : n) ? JSON.stringify(void 0 !== e ? e : {}) : e || ""
            }, m = function(e) {
                return e.pathname + e.search + e.hash
            }, E = function(e, t, r, n) {
                return (s = t, a = r) => {
                    let o = {
                        ...e.options,
                        url: (n?.basePath || s.defaults.baseURL || a) + e.url
                    };
                    return s.request(o)
                }
            }, w = function(e) {
                let t = {
                    cancelTransferOwnership: async (t, r, n = {}) => {
                        let s;
                        f("cancelTransferOwnership", "id", t), f("cancelTransferOwnership", "cancelTransferOwnershipRequest", r);
                        let a = new URL("/v1/accounts/{id}/cancel_transfer_ownership".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (s = e.baseOptions);
                        let o = {
                                method: "POST",
                                ...s,
                                ...n
                            },
                            i = {};
                        await h(i, e), i["Content-Type"] = "application/json", g(a, {});
                        let l = s && s.headers ? s.headers : {};
                        return o.headers = {
                            ...i,
                            ...l,
                            ...n.headers
                        }, o.data = y(r, o, e), {
                            url: m(a),
                            options: o
                        }
                    },
                    completeRecovery: async (t, r, n = {}) => {
                        let s;
                        f("completeRecovery", "id", t), f("completeRecovery", "completeRecoveryRequest", r);
                        let a = new URL("/v1/accounts/{id}/complete_recovery".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (s = e.baseOptions);
                        let o = {
                                method: "POST",
                                ...s,
                                ...n
                            },
                            i = {};
                        await h(i, e), i["Content-Type"] = "application/json", g(a, {});
                        let l = s && s.headers ? s.headers : {};
                        return o.headers = {
                            ...i,
                            ...l,
                            ...n.headers
                        }, o.data = y(r, o, e), {
                            url: m(a),
                            options: o
                        }
                    },
                    createAccount: async (t, r = {}) => {
                        let n;
                        f("createAccount", "createAccountRequest", t);
                        let s = new URL("/v1/accounts", p);
                        e && (n = e.baseOptions);
                        let a = {
                                method: "POST",
                                ...n,
                                ...r
                            },
                            o = {};
                        await h(o, e), o["Content-Type"] = "application/json", g(s, {});
                        let i = n && n.headers ? n.headers : {};
                        return a.headers = {
                            ...o,
                            ...i,
                            ...r.headers
                        }, a.data = y(t, a, e), {
                            url: m(s),
                            options: a
                        }
                    },
                    createAccountV2: async (t, r = {}) => {
                        let n;
                        f("createAccountV2", "accountCreateRequest", t);
                        let s = new URL("/v2/accounts", p);
                        e && (n = e.baseOptions);
                        let a = {
                            method: "POST",
                            ...n,
                            ...r
                        };
                        return g(s, {}), a.headers = {
                            "Content-Type": "application/json",
                            ...n && n.headers ? n.headers : {},
                            ...r.headers
                        }, a.data = y(t, a, e), {
                            url: m(s),
                            options: a
                        }
                    },
                    deployAccount: async (t, r, n = {}) => {
                        let s;
                        f("deployAccount", "id", t), f("deployAccount", "deployRequest", r);
                        let a = new URL("/v1/accounts/{id}/deploy".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (s = e.baseOptions);
                        let o = {
                                method: "POST",
                                ...s,
                                ...n
                            },
                            i = {};
                        await h(i, e), i["Content-Type"] = "application/json", g(a, {});
                        let l = s && s.headers ? s.headers : {};
                        return o.headers = {
                            ...i,
                            ...l,
                            ...n.headers
                        }, o.data = y(r, o, e), {
                            url: m(a),
                            options: o
                        }
                    },
                    disableAccount: async (t, r = {}) => {
                        let n;
                        f("disableAccount", "id", t);
                        let s = new URL("/v1/accounts/{id}/disable".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (n = e.baseOptions);
                        let a = {
                                method: "POST",
                                ...n,
                                ...r
                            },
                            o = {};
                        await h(o, e), g(s, {});
                        let i = n && n.headers ? n.headers : {};
                        return a.headers = {
                            ...o,
                            ...i,
                            ...r.headers
                        }, {
                            url: m(s),
                            options: a
                        }
                    },
                    getAccount: async (t, r, n = {}) => {
                        let s;
                        f("getAccount", "id", t);
                        let a = new URL("/v1/accounts/{id}".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (s = e.baseOptions);
                        let o = {
                                method: "GET",
                                ...s,
                                ...n
                            },
                            i = {},
                            l = {};
                        await h(i, e), r && (l.expand = r), g(a, l);
                        let c = s && s.headers ? s.headers : {};
                        return o.headers = {
                            ...i,
                            ...c,
                            ...n.headers
                        }, {
                            url: m(a),
                            options: o
                        }
                    },
                    getAccountV2: async (t, r = {}) => {
                        let n;
                        f("getAccountV2", "accountId", t);
                        let s = new URL("/v2/accounts/{accountId}".replace("{accountId}", encodeURIComponent(String(t))), p);
                        e && (n = e.baseOptions);
                        let a = {
                            method: "GET",
                            ...n,
                            ...r
                        };
                        return g(s, {}), a.headers = {
                            ...n && n.headers ? n.headers : {},
                            ...r.headers
                        }, {
                            url: m(s),
                            options: a
                        }
                    },
                    getAccounts: async (t, r, n, s, a, o, i = {}) => {
                        let l, c = new URL("/v1/accounts", p);
                        e && (l = e.baseOptions);
                        let u = {
                                method: "GET",
                                ...l,
                                ...i
                            },
                            d = {},
                            f = {};
                        await h(d, e), void 0 !== t && (f.limit = t), void 0 !== r && (f.skip = r), void 0 !== n && (f.order = n), void 0 !== s && (f.player = s), void 0 !== a && (f.address = a), o && (f.expand = o), g(c, f);
                        let y = l && l.headers ? l.headers : {};
                        return u.headers = {
                            ...d,
                            ...y,
                            ...i.headers
                        }, {
                            url: m(c),
                            options: u
                        }
                    },
                    listAccountsV2: async (t, r, n, s, a = {}) => {
                        let o, i = new URL("/v2/accounts", p);
                        e && (o = e.baseOptions);
                        let l = {
                                method: "GET",
                                ...o,
                                ...a
                            },
                            c = {};
                        return void 0 !== t && (c.limit = t), void 0 !== r && (c.skip = r), void 0 !== n && (c.order = n), void 0 !== s && (c.accountType = s), g(i, c), l.headers = {
                            ...o && o.headers ? o.headers : {},
                            ...a.headers
                        }, {
                            url: m(i),
                            options: l
                        }
                    },
                    requestTransferOwnership: async (t, r, n = {}) => {
                        let s;
                        f("requestTransferOwnership", "id", t), f("requestTransferOwnership", "transferOwnershipRequest", r);
                        let a = new URL("/v1/accounts/{id}/request_transfer_ownership".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (s = e.baseOptions);
                        let o = {
                                method: "POST",
                                ...s,
                                ...n
                            },
                            i = {};
                        await h(i, e), i["Content-Type"] = "application/json", g(a, {});
                        let l = s && s.headers ? s.headers : {};
                        return o.headers = {
                            ...i,
                            ...l,
                            ...n.headers
                        }, o.data = y(r, o, e), {
                            url: m(a),
                            options: o
                        }
                    },
                    signPayload: async (t, r, n = {}) => {
                        let s;
                        f("signPayload", "id", t), f("signPayload", "signPayloadRequest", r);
                        let a = new URL("/v1/accounts/{id}/sign_payload".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (s = e.baseOptions);
                        let o = {
                                method: "POST",
                                ...s,
                                ...n
                            },
                            i = {};
                        await h(i, e), i["Content-Type"] = "application/json", g(a, {});
                        let l = s && s.headers ? s.headers : {};
                        return o.headers = {
                            ...i,
                            ...l,
                            ...n.headers
                        }, o.data = y(r, o, e), {
                            url: m(a),
                            options: o
                        }
                    },
                    startRecovery: async (t, r, n = {}) => {
                        let s;
                        f("startRecovery", "id", t), f("startRecovery", "startRecoveryRequest", r);
                        let a = new URL("/v1/accounts/{id}/start_recovery".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (s = e.baseOptions);
                        let o = {
                                method: "POST",
                                ...s,
                                ...n
                            },
                            i = {};
                        await h(i, e), i["Content-Type"] = "application/json", g(a, {});
                        let l = s && s.headers ? s.headers : {};
                        return o.headers = {
                            ...i,
                            ...l,
                            ...n.headers
                        }, o.data = y(r, o, e), {
                            url: m(a),
                            options: o
                        }
                    },
                    syncAccount: async (t, r = {}) => {
                        let n;
                        f("syncAccount", "id", t);
                        let s = new URL("/v1/accounts/{id}/sync".replace("{id}", encodeURIComponent(String(t))), p);
                        e && (n = e.baseOptions);
                        let a = {
                                method: "POST",
                                ...n,
                                ...r
                            },
                            o = {};
                        await h(o, e), g(s, {});
                        let i = n && n.headers ? n.headers : {};
                        return a.headers = {
                            ...o,
                            ...i,
                            ...r.headers
                        }, {
                            url: m(s),
                            options: a
                        }
                    }
                };
                return {
                    cancelTransferOwnership: async (r, n, s) => E(await t.cancelTransferOwnership(r, n, s), o.default, c, e),
                    completeRecovery: async (r, n, s) => E(await t.completeRecovery(r, n, s), o.default, c, e),
                    createAccount: async (r, n) => E(await t.createAccount(r, n), o.default, c, e),
                    createAccountV2: async (r, n) => E(await t.createAccountV2(r, n), o.default, c, e),
                    deployAccount: async (r, n, s) => E(await t.deployAccount(r, n, s), o.default, c, e),
                    disableAccount: async (r, n) => E(await t.disableAccount(r, n), o.default, c, e),
                    getAccount: async (r, n, s) => E(await t.getAccount(r, n, s), o.default, c, e),
                    getAccountV2: async (r, n) => E(await t.getAccountV2(r, n), o.default, c, e),
                    getAccounts: async (r, n, s, a, i, l, u) => E(await t.getAccounts(r, n, s, a, i, l, u), o.default, c, e),
                    listAccountsV2: async (r, n, s, a, i) => E(await t.listAccountsV2(r, n, s, a, i), o.default, c, e),
                    requestTransferOwnership: async (r, n, s) => E(await t.requestTransferOwnership(r, n, s), o.default, c, e),
                    signPayload: async (r, n, s) => E(await t.signPayload(r, n, s), o.default, c, e),
                    startRecovery: async (r, n, s) => E(await t.startRecovery(r, n, s), o.default, c, e),
                    syncAccount: async (r, n) => E(await t.syncAccount(r, n), o.default, c, e)
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
        let I = function(e) {
            let t = {
                authenticateSIWE: async (t, r = {}) => {
                    let n;
                    f("authenticateSIWE", "sIWEAuthenticateRequest", t);
                    let s = new URL("/iam/v1/siwe/authenticate", p);
                    e && (n = e.baseOptions);
                    let a = {
                            method: "POST",
                            ...n,
                            ...r
                        },
                        o = {};
                    await h(o, e), o["Content-Type"] = "application/json", g(s, {});
                    let i = n && n.headers ? n.headers : {};
                    return a.headers = {
                        ...o,
                        ...i,
                        ...r.headers
                    }, a.data = y(t, a, e), {
                        url: m(s),
                        options: a
                    }
                },
                getJwks: async (t, r = {}) => {
                    let n;
                    f("getJwks", "publishableKey", t);
                    let s = new URL("/iam/v1/{publishable_key}/jwks.json".replace("{publishable_key}", encodeURIComponent(String(t))), p);
                    e && (n = e.baseOptions);
                    let a = {
                        method: "GET",
                        ...n,
                        ...r
                    };
                    return g(s, {}), a.headers = {
                        ...n && n.headers ? n.headers : {},
                        ...r.headers
                    }, {
                        url: m(s),
                        options: a
                    }
                },
                initOAuth: async (t, r, n = {}) => {
                    let s;
                    f("initOAuth", "oAuthInitRequest", t);
                    let a = new URL("/iam/v1/oauth/init", p);
                    e && (s = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...s,
                            ...n
                        },
                        i = {};
                    await h(i, e), null != r && (i["x-game"] = String(r)), i["Content-Type"] = "application/json", g(a, {});
                    let l = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...n.headers
                    }, o.data = y(t, o, e), {
                        url: m(a),
                        options: o
                    }
                },
                initSIWE: async (t, r, n = {}) => {
                    let s;
                    f("initSIWE", "sIWERequest", t);
                    let a = new URL("/iam/v1/siwe/init", p);
                    e && (s = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...s,
                            ...n
                        },
                        i = {};
                    await h(i, e), null != r && (i["x-game"] = String(r)), i["Content-Type"] = "application/json", g(a, {});
                    let l = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...n.headers
                    }, o.data = y(t, o, e), {
                        url: m(a),
                        options: o
                    }
                },
                linkEmail: async (t, r, n = {}) => {
                    let s;
                    f("linkEmail", "loginRequest", t);
                    let a = new URL("/iam/v1/password/link", p);
                    e && (s = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...s,
                            ...n
                        },
                        i = {};
                    null != r && (i["x-game"] = String(r)), i["Content-Type"] = "application/json", g(a, {});
                    let l = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...n.headers
                    }, o.data = y(t, o, e), {
                        url: m(a),
                        options: o
                    }
                },
                linkOAuth: async (t, r, n = {}) => {
                    let s;
                    f("linkOAuth", "oAuthInitRequest", t);
                    let a = new URL("/iam/v1/oauth/init_link", p);
                    e && (s = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...s,
                            ...n
                        },
                        i = {};
                    null != r && (i["x-game"] = String(r)), i["Content-Type"] = "application/json", g(a, {});
                    let l = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...n.headers
                    }, o.data = y(t, o, e), {
                        url: m(a),
                        options: o
                    }
                },
                linkSIWE: async (t, r = {}) => {
                    let n;
                    f("linkSIWE", "sIWEAuthenticateRequest", t);
                    let s = new URL("/iam/v1/siwe/link", p);
                    e && (n = e.baseOptions);
                    let a = {
                        method: "POST",
                        ...n,
                        ...r
                    };
                    return g(s, {}), a.headers = {
                        "Content-Type": "application/json",
                        ...n && n.headers ? n.headers : {},
                        ...r.headers
                    }, a.data = y(t, a, e), {
                        url: m(s),
                        options: a
                    }
                },
                linkThirdParty: async (t, r, n = {}) => {
                    let s;
                    f("linkThirdParty", "thirdPartyLinkRequest", t);
                    let a = new URL("/iam/v1/oauth/link", p);
                    e && (s = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...s,
                            ...n
                        },
                        i = {};
                    null != r && (i["x-game"] = String(r)), i["Content-Type"] = "application/json", g(a, {});
                    let l = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...n.headers
                    }, o.data = y(t, o, e), {
                        url: m(a),
                        options: o
                    }
                },
                loginEmailPassword: async (t, r, n = {}) => {
                    let s;
                    f("loginEmailPassword", "loginRequest", t);
                    let a = new URL("/iam/v1/password/login", p);
                    e && (s = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...s,
                            ...n
                        },
                        i = {};
                    await h(i, e), null != r && (i["x-game"] = String(r)), i["Content-Type"] = "application/json", g(a, {});
                    let l = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...n.headers
                    }, o.data = y(t, o, e), {
                        url: m(a),
                        options: o
                    }
                },
                loginOIDC: async (t, r, n = {}) => {
                    let s;
                    f("loginOIDC", "loginOIDCRequest", t);
                    let a = new URL("/iam/v1/oidc/login", p);
                    e && (s = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...s,
                            ...n
                        },
                        i = {};
                    await h(i, e), null != r && (i["x-game"] = String(r)), i["Content-Type"] = "application/json", g(a, {});
                    let l = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...n.headers
                    }, o.data = y(t, o, e), {
                        url: m(a),
                        options: o
                    }
                },
                loginWithIdToken: async (t, r = {}) => {
                    let n;
                    f("loginWithIdToken", "loginWithIdTokenRequest", t);
                    let s = new URL("/iam/v1/oauth/login_id_token", p);
                    e && (n = e.baseOptions);
                    let a = {
                            method: "POST",
                            ...n,
                            ...r
                        },
                        o = {};
                    await h(o, e), o["Content-Type"] = "application/json", g(s, {});
                    let i = n && n.headers ? n.headers : {};
                    return a.headers = {
                        ...o,
                        ...i,
                        ...r.headers
                    }, a.data = y(t, a, e), {
                        url: m(s),
                        options: a
                    }
                },
                logout: async (t, r = {}) => {
                    let n;
                    f("logout", "logoutRequest", t);
                    let s = new URL("/iam/v1/sessions/logout", p);
                    e && (n = e.baseOptions);
                    let a = {
                        method: "POST",
                        ...n,
                        ...r
                    };
                    return g(s, {}), a.headers = {
                        "Content-Type": "application/json",
                        ...n && n.headers ? n.headers : {},
                        ...r.headers
                    }, a.data = y(t, a, e), {
                        url: m(s),
                        options: a
                    }
                },
                me: async (t = {}) => {
                    let r, n = new URL("/iam/v1/me", p);
                    e && (r = e.baseOptions);
                    let s = {
                        method: "GET",
                        ...r,
                        ...t
                    };
                    return g(n, {}), s.headers = {
                        ...r && r.headers ? r.headers : {},
                        ...t.headers
                    }, {
                        url: m(n),
                        options: s
                    }
                },
                poolOAuth: async (t, r = {}) => {
                    let n;
                    f("poolOAuth", "key", t);
                    let s = new URL("/iam/v1/oauth/pool", p);
                    e && (n = e.baseOptions);
                    let a = {
                            method: "POST",
                            ...n,
                            ...r
                        },
                        o = {},
                        i = {};
                    await h(o, e), void 0 !== t && (i.key = t), g(s, i);
                    let l = n && n.headers ? n.headers : {};
                    return a.headers = {
                        ...o,
                        ...l,
                        ...r.headers
                    }, {
                        url: m(s),
                        options: a
                    }
                },
                refresh: async (t, r = {}) => {
                    let n;
                    f("refresh", "refreshTokenRequest", t);
                    let s = new URL("/iam/v1/sessions", p);
                    e && (n = e.baseOptions);
                    let a = {
                            method: "POST",
                            ...n,
                            ...r
                        },
                        o = {};
                    await h(o, e), o["Content-Type"] = "application/json", g(s, {});
                    let i = n && n.headers ? n.headers : {};
                    return a.headers = {
                        ...o,
                        ...i,
                        ...r.headers
                    }, a.data = y(t, a, e), {
                        url: m(s),
                        options: a
                    }
                },
                registerGuest: async (t, r = {}) => {
                    let n, s = new URL("/iam/v1/guest", p);
                    e && (n = e.baseOptions);
                    let a = {
                            method: "POST",
                            ...n,
                            ...r
                        },
                        o = {};
                    await h(o, e), null != t && (o["x-game"] = String(t)), g(s, {});
                    let i = n && n.headers ? n.headers : {};
                    return a.headers = {
                        ...o,
                        ...i,
                        ...r.headers
                    }, {
                        url: m(s),
                        options: a
                    }
                },
                requestEmailVerification: async (t, r = {}) => {
                    let n;
                    f("requestEmailVerification", "requestVerifyEmailRequest", t);
                    let s = new URL("/iam/v1/password/request_email_verification", p);
                    e && (n = e.baseOptions);
                    let a = {
                            method: "POST",
                            ...n,
                            ...r
                        },
                        o = {};
                    await h(o, e), o["Content-Type"] = "application/json", g(s, {});
                    let i = n && n.headers ? n.headers : {};
                    return a.headers = {
                        ...o,
                        ...i,
                        ...r.headers
                    }, a.data = y(t, a, e), {
                        url: m(s),
                        options: a
                    }
                },
                requestResetPassword: async (t, r = {}) => {
                    let n;
                    f("requestResetPassword", "requestResetPasswordRequest", t);
                    let s = new URL("/iam/v1/password/request_reset", p);
                    e && (n = e.baseOptions);
                    let a = {
                            method: "POST",
                            ...n,
                            ...r
                        },
                        o = {};
                    await h(o, e), o["Content-Type"] = "application/json", g(s, {});
                    let i = n && n.headers ? n.headers : {};
                    return a.headers = {
                        ...o,
                        ...i,
                        ...r.headers
                    }, a.data = y(t, a, e), {
                        url: m(s),
                        options: a
                    }
                },
                resetPassword: async (t, r = {}) => {
                    let n;
                    f("resetPassword", "resetPasswordRequest", t);
                    let s = new URL("/iam/v1/password/reset", p);
                    e && (n = e.baseOptions);
                    let a = {
                            method: "POST",
                            ...n,
                            ...r
                        },
                        o = {};
                    await h(o, e), o["Content-Type"] = "application/json", g(s, {});
                    let i = n && n.headers ? n.headers : {};
                    return a.headers = {
                        ...o,
                        ...i,
                        ...r.headers
                    }, a.data = y(t, a, e), {
                        url: m(s),
                        options: a
                    }
                },
                signupEmailPassword: async (t, r, n = {}) => {
                    let s;
                    f("signupEmailPassword", "signupRequest", t);
                    let a = new URL("/iam/v1/password/signup", p);
                    e && (s = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...s,
                            ...n
                        },
                        i = {};
                    await h(i, e), null != r && (i["x-game"] = String(r)), i["Content-Type"] = "application/json", g(a, {});
                    let l = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...n.headers
                    }, o.data = y(t, o, e), {
                        url: m(a),
                        options: o
                    }
                },
                thirdParty: async (t, r, n = {}) => {
                    let s;
                    f("thirdParty", "thirdPartyOAuthRequest", t);
                    let a = new URL("/iam/v1/oauth/third_party", p);
                    e && (s = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...s,
                            ...n
                        },
                        i = {};
                    await h(i, e), null != r && (i["x-game"] = String(r)), i["Content-Type"] = "application/json", g(a, {});
                    let l = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...n.headers
                    }, o.data = y(t, o, e), {
                        url: m(a),
                        options: o
                    }
                },
                unlinkEmail: async (t, r = {}) => {
                    let n;
                    f("unlinkEmail", "unlinkEmailRequest", t);
                    let s = new URL("/iam/v1/password/unlink", p);
                    e && (n = e.baseOptions);
                    let a = {
                        method: "POST",
                        ...n,
                        ...r
                    };
                    return g(s, {}), a.headers = {
                        "Content-Type": "application/json",
                        ...n && n.headers ? n.headers : {},
                        ...r.headers
                    }, a.data = y(t, a, e), {
                        url: m(s),
                        options: a
                    }
                },
                unlinkOAuth: async (t, r = {}) => {
                    let n;
                    f("unlinkOAuth", "unlinkOAuthRequest", t);
                    let s = new URL("/iam/v1/oauth/unlink", p);
                    e && (n = e.baseOptions);
                    let a = {
                        method: "POST",
                        ...n,
                        ...r
                    };
                    return g(s, {}), a.headers = {
                        "Content-Type": "application/json",
                        ...n && n.headers ? n.headers : {},
                        ...r.headers
                    }, a.data = y(t, a, e), {
                        url: m(s),
                        options: a
                    }
                },
                unlinkSIWE: async (t, r = {}) => {
                    let n;
                    f("unlinkSIWE", "sIWERequest", t);
                    let s = new URL("/iam/v1/siwe/unlink", p);
                    e && (n = e.baseOptions);
                    let a = {
                        method: "POST",
                        ...n,
                        ...r
                    };
                    return g(s, {}), a.headers = {
                        "Content-Type": "application/json",
                        ...n && n.headers ? n.headers : {},
                        ...r.headers
                    }, a.data = y(t, a, e), {
                        url: m(s),
                        options: a
                    }
                },
                verifyEmail: async (t, r = {}) => {
                    let n;
                    f("verifyEmail", "verifyEmailRequest", t);
                    let s = new URL("/iam/v1/password/verify_email", p);
                    e && (n = e.baseOptions);
                    let a = {
                            method: "POST",
                            ...n,
                            ...r
                        },
                        o = {};
                    await h(o, e), o["Content-Type"] = "application/json", g(s, {});
                    let i = n && n.headers ? n.headers : {};
                    return a.headers = {
                        ...o,
                        ...i,
                        ...r.headers
                    }, a.data = y(t, a, e), {
                        url: m(s),
                        options: a
                    }
                },
                verifyOAuthToken: async (t, r = {}) => {
                    let n;
                    f("verifyOAuthToken", "authenticateOAuthRequest", t);
                    let s = new URL("/iam/v1/oauth/verify", p);
                    e && (n = e.baseOptions);
                    let a = {
                            method: "POST",
                            ...n,
                            ...r
                        },
                        o = {};
                    await h(o, e), o["Content-Type"] = "application/json", g(s, {});
                    let i = n && n.headers ? n.headers : {};
                    return a.headers = {
                        ...o,
                        ...i,
                        ...r.headers
                    }, a.data = y(t, a, e), {
                        url: m(s),
                        options: a
                    }
                }
            };
            return {
                authenticateSIWE: async (r, n) => E(await t.authenticateSIWE(r, n), o.default, c, e),
                getJwks: async (r, n) => E(await t.getJwks(r, n), o.default, c, e),
                initOAuth: async (r, n, s) => E(await t.initOAuth(r, n, s), o.default, c, e),
                initSIWE: async (r, n, s) => E(await t.initSIWE(r, n, s), o.default, c, e),
                linkEmail: async (r, n, s) => E(await t.linkEmail(r, n, s), o.default, c, e),
                linkOAuth: async (r, n, s) => E(await t.linkOAuth(r, n, s), o.default, c, e),
                linkSIWE: async (r, n) => E(await t.linkSIWE(r, n), o.default, c, e),
                linkThirdParty: async (r, n, s) => E(await t.linkThirdParty(r, n, s), o.default, c, e),
                loginEmailPassword: async (r, n, s) => E(await t.loginEmailPassword(r, n, s), o.default, c, e),
                loginOIDC: async (r, n, s) => E(await t.loginOIDC(r, n, s), o.default, c, e),
                loginWithIdToken: async (r, n) => E(await t.loginWithIdToken(r, n), o.default, c, e),
                logout: async (r, n) => E(await t.logout(r, n), o.default, c, e),
                me: async r => E(await t.me(r), o.default, c, e),
                poolOAuth: async (r, n) => E(await t.poolOAuth(r, n), o.default, c, e),
                refresh: async (r, n) => E(await t.refresh(r, n), o.default, c, e),
                registerGuest: async (r, n) => E(await t.registerGuest(r, n), o.default, c, e),
                requestEmailVerification: async (r, n) => E(await t.requestEmailVerification(r, n), o.default, c, e),
                requestResetPassword: async (r, n) => E(await t.requestResetPassword(r, n), o.default, c, e),
                resetPassword: async (r, n) => E(await t.resetPassword(r, n), o.default, c, e),
                signupEmailPassword: async (r, n, s) => E(await t.signupEmailPassword(r, n, s), o.default, c, e),
                thirdParty: async (r, n, s) => E(await t.thirdParty(r, n, s), o.default, c, e),
                unlinkEmail: async (r, n) => E(await t.unlinkEmail(r, n), o.default, c, e),
                unlinkOAuth: async (r, n) => E(await t.unlinkOAuth(r, n), o.default, c, e),
                unlinkSIWE: async (r, n) => E(await t.unlinkSIWE(r, n), o.default, c, e),
                verifyEmail: async (r, n) => E(await t.verifyEmail(r, n), o.default, c, e),
                verifyOAuthToken: async (r, n) => E(await t.verifyOAuthToken(r, n), o.default, c, e)
            }
        };
        class T extends u {
            authenticateSIWE(e, t) {
                return I(this.configuration).authenticateSIWE(e.sIWEAuthenticateRequest, t).then(e => e(this.axios, this.basePath))
            }
            getJwks(e, t) {
                return I(this.configuration).getJwks(e.publishableKey, t).then(e => e(this.axios, this.basePath))
            }
            initOAuth(e, t) {
                return I(this.configuration).initOAuth(e.oAuthInitRequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            initSIWE(e, t) {
                return I(this.configuration).initSIWE(e.sIWERequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            linkEmail(e, t) {
                return I(this.configuration).linkEmail(e.loginRequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            linkOAuth(e, t) {
                return I(this.configuration).linkOAuth(e.oAuthInitRequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            linkSIWE(e, t) {
                return I(this.configuration).linkSIWE(e.sIWEAuthenticateRequest, t).then(e => e(this.axios, this.basePath))
            }
            linkThirdParty(e, t) {
                return I(this.configuration).linkThirdParty(e.thirdPartyLinkRequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            loginEmailPassword(e, t) {
                return I(this.configuration).loginEmailPassword(e.loginRequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            loginOIDC(e, t) {
                return I(this.configuration).loginOIDC(e.loginOIDCRequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            loginWithIdToken(e, t) {
                return I(this.configuration).loginWithIdToken(e.loginWithIdTokenRequest, t).then(e => e(this.axios, this.basePath))
            }
            logout(e, t) {
                return I(this.configuration).logout(e.logoutRequest, t).then(e => e(this.axios, this.basePath))
            }
            me(e) {
                return I(this.configuration).me(e).then(e => e(this.axios, this.basePath))
            }
            poolOAuth(e, t) {
                return I(this.configuration).poolOAuth(e.key, t).then(e => e(this.axios, this.basePath))
            }
            refresh(e, t) {
                return I(this.configuration).refresh(e.refreshTokenRequest, t).then(e => e(this.axios, this.basePath))
            }
            registerGuest(e = {}, t) {
                return I(this.configuration).registerGuest(e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            requestEmailVerification(e, t) {
                return I(this.configuration).requestEmailVerification(e.requestVerifyEmailRequest, t).then(e => e(this.axios, this.basePath))
            }
            requestResetPassword(e, t) {
                return I(this.configuration).requestResetPassword(e.requestResetPasswordRequest, t).then(e => e(this.axios, this.basePath))
            }
            resetPassword(e, t) {
                return I(this.configuration).resetPassword(e.resetPasswordRequest, t).then(e => e(this.axios, this.basePath))
            }
            signupEmailPassword(e, t) {
                return I(this.configuration).signupEmailPassword(e.signupRequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            thirdParty(e, t) {
                return I(this.configuration).thirdParty(e.thirdPartyOAuthRequest, e.xGame, t).then(e => e(this.axios, this.basePath))
            }
            unlinkEmail(e, t) {
                return I(this.configuration).unlinkEmail(e.unlinkEmailRequest, t).then(e => e(this.axios, this.basePath))
            }
            unlinkOAuth(e, t) {
                return I(this.configuration).unlinkOAuth(e.unlinkOAuthRequest, t).then(e => e(this.axios, this.basePath))
            }
            unlinkSIWE(e, t) {
                return I(this.configuration).unlinkSIWE(e.sIWERequest, t).then(e => e(this.axios, this.basePath))
            }
            verifyEmail(e, t) {
                return I(this.configuration).verifyEmail(e.verifyEmailRequest, t).then(e => e(this.axios, this.basePath))
            }
            verifyOAuthToken(e, t) {
                return I(this.configuration).verifyOAuthToken(e.authenticateOAuthRequest, t).then(e => e(this.axios, this.basePath))
            }
        }
        let j = function(e) {
            let t = {
                createSession: async (t, r, n = {}) => {
                    let s;
                    f("createSession", "createSessionRequest", t);
                    let a = new URL("/v1/sessions", p);
                    e && (s = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...s,
                            ...n
                        },
                        i = {};
                    await h(i, e), null != r && (i["X-Behalf-Of-Project"] = String(r)), i["Content-Type"] = "application/json", g(a, {});
                    let l = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...n.headers
                    }, o.data = y(t, o, e), {
                        url: m(a),
                        options: o
                    }
                },
                getPlayerSessions: async (t, r, n, s, a, o = {}) => {
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
                    await h(u, e), void 0 !== r && (d.limit = r), void 0 !== n && (d.skip = n), void 0 !== s && (d.order = s), void 0 !== t && (d.player = t), a && (d.expand = a), g(l, d);
                    let y = i && i.headers ? i.headers : {};
                    return c.headers = {
                        ...u,
                        ...y,
                        ...o.headers
                    }, {
                        url: m(l),
                        options: c
                    }
                },
                getSession: async (t, r, n = {}) => {
                    let s;
                    f("getSession", "id", t);
                    let a = new URL("/v1/sessions/{id}".replace("{id}", encodeURIComponent(String(t))), p);
                    e && (s = e.baseOptions);
                    let o = {
                            method: "GET",
                            ...s,
                            ...n
                        },
                        i = {},
                        l = {};
                    await h(i, e), r && (l.expand = r), g(a, l);
                    let c = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...i,
                        ...c,
                        ...n.headers
                    }, {
                        url: m(a),
                        options: o
                    }
                },
                revokeSession: async (t, r, n = {}) => {
                    let s;
                    f("revokeSession", "revokeSessionRequest", t);
                    let a = new URL("/v1/sessions/revoke", p);
                    e && (s = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...s,
                            ...n
                        },
                        i = {};
                    await h(i, e), null != r && (i["X-Behalf-Of-Project"] = String(r)), i["Content-Type"] = "application/json", g(a, {});
                    let l = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...n.headers
                    }, o.data = y(t, o, e), {
                        url: m(a),
                        options: o
                    }
                },
                signatureSession: async (t, r, n = {}) => {
                    let s;
                    f("signatureSession", "id", t), f("signatureSession", "signatureRequest", r);
                    let a = new URL("/v1/sessions/{id}/signature".replace("{id}", encodeURIComponent(String(t))), p);
                    e && (s = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...s,
                            ...n
                        },
                        i = {};
                    await h(i, e), await h(i, e), i["Content-Type"] = "application/json", g(a, {});
                    let l = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...n.headers
                    }, o.data = y(r, o, e), {
                        url: m(a),
                        options: o
                    }
                }
            };
            return {
                createSession: async (r, n, s) => E(await t.createSession(r, n, s), o.default, c, e),
                getPlayerSessions: async (r, n, s, a, i, l) => E(await t.getPlayerSessions(r, n, s, a, i, l), o.default, c, e),
                getSession: async (r, n, s) => E(await t.getSession(r, n, s), o.default, c, e),
                revokeSession: async (r, n, s) => E(await t.revokeSession(r, n, s), o.default, c, e),
                signatureSession: async (r, n, s) => E(await t.signatureSession(r, n, s), o.default, c, e)
            }
        };
        class A extends u {
            createSession(e, t) {
                return j(this.configuration).createSession(e.createSessionRequest, e.xBehalfOfProject, t).then(e => e(this.axios, this.basePath))
            }
            getPlayerSessions(e, t) {
                return j(this.configuration).getPlayerSessions(e.player, e.limit, e.skip, e.order, e.expand, t).then(e => e(this.axios, this.basePath))
            }
            getSession(e, t) {
                return j(this.configuration).getSession(e.id, e.expand, t).then(e => e(this.axios, this.basePath))
            }
            revokeSession(e, t) {
                return j(this.configuration).revokeSession(e.revokeSessionRequest, e.xBehalfOfProject, t).then(e => e(this.axios, this.basePath))
            }
            signatureSession(e, t) {
                return j(this.configuration).signatureSession(e.id, e.signatureRequest, t).then(e => e(this.axios, this.basePath))
            }
        }
        let O = function(e) {
            let t = {
                createTransactionIntent: async (t, r, n = {}) => {
                    let s;
                    f("createTransactionIntent", "createTransactionIntentRequest", t);
                    let a = new URL("/v1/transaction_intents", p);
                    e && (s = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...s,
                            ...n
                        },
                        i = {};
                    await h(i, e), null != r && (i["X-Behalf-Of-Project"] = String(r)), i["Content-Type"] = "application/json", g(a, {});
                    let l = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...n.headers
                    }, o.data = y(t, o, e), {
                        url: m(a),
                        options: o
                    }
                },
                estimateTransactionIntentCost: async (t, r = {}) => {
                    let n;
                    f("estimateTransactionIntentCost", "createTransactionIntentRequest", t);
                    let s = new URL("/v1/transaction_intents/estimate_gas_cost", p);
                    e && (n = e.baseOptions);
                    let a = {
                            method: "POST",
                            ...n,
                            ...r
                        },
                        o = {};
                    await h(o, e), o["Content-Type"] = "application/json", g(s, {});
                    let i = n && n.headers ? n.headers : {};
                    return a.headers = {
                        ...o,
                        ...i,
                        ...r.headers
                    }, a.data = y(t, a, e), {
                        url: m(s),
                        options: a
                    }
                },
                getTransactionIntent: async (t, r, n = {}) => {
                    let s;
                    f("getTransactionIntent", "id", t);
                    let a = new URL("/v1/transaction_intents/{id}".replace("{id}", encodeURIComponent(String(t))), p);
                    e && (s = e.baseOptions);
                    let o = {
                            method: "GET",
                            ...s,
                            ...n
                        },
                        i = {},
                        l = {};
                    await h(i, e), r && (l.expand = r), g(a, l);
                    let c = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...i,
                        ...c,
                        ...n.headers
                    }, {
                        url: m(a),
                        options: o
                    }
                },
                getTransactionIntents: async (t, r, n, s, a, o, i, l, c, u = {}) => {
                    let d, f = new URL("/v1/transaction_intents", p);
                    e && (d = e.baseOptions);
                    let y = {
                            method: "GET",
                            ...d,
                            ...u
                        },
                        E = {},
                        w = {};
                    await h(E, e), void 0 !== t && (w.limit = t), void 0 !== r && (w.skip = r), void 0 !== n && (w.order = n), s && (w.expand = s), void 0 !== a && (w.chainId = a), o && (w.account = o), i && (w.player = i), void 0 !== l && (w.status = l), c && (w.policy = c), g(f, w);
                    let R = d && d.headers ? d.headers : {};
                    return y.headers = {
                        ...E,
                        ...R,
                        ...u.headers
                    }, {
                        url: m(f),
                        options: y
                    }
                },
                signature: async (t, r, n = {}) => {
                    let s;
                    f("signature", "id", t), f("signature", "signatureRequest", r);
                    let a = new URL("/v1/transaction_intents/{id}/signature".replace("{id}", encodeURIComponent(String(t))), p);
                    e && (s = e.baseOptions);
                    let o = {
                            method: "POST",
                            ...s,
                            ...n
                        },
                        i = {};
                    await h(i, e), await h(i, e), i["Content-Type"] = "application/json", g(a, {});
                    let l = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...i,
                        ...l,
                        ...n.headers
                    }, o.data = y(r, o, e), {
                        url: m(a),
                        options: o
                    }
                }
            };
            return {
                createTransactionIntent: async (r, n, s) => E(await t.createTransactionIntent(r, n, s), o.default, c, e),
                estimateTransactionIntentCost: async (r, n) => E(await t.estimateTransactionIntentCost(r, n), o.default, c, e),
                getTransactionIntent: async (r, n, s) => E(await t.getTransactionIntent(r, n, s), o.default, c, e),
                getTransactionIntents: async (r, n, s, a, i, l, u, d, p, f) => E(await t.getTransactionIntents(r, n, s, a, i, l, u, d, p, f), o.default, c, e),
                signature: async (r, n, s) => E(await t.signature(r, n, s), o.default, c, e)
            }
        };
        class v extends u {
            createTransactionIntent(e, t) {
                return O(this.configuration).createTransactionIntent(e.createTransactionIntentRequest, e.xBehalfOfProject, t).then(e => e(this.axios, this.basePath))
            }
            estimateTransactionIntentCost(e, t) {
                return O(this.configuration).estimateTransactionIntentCost(e.createTransactionIntentRequest, t).then(e => e(this.axios, this.basePath))
            }
            getTransactionIntent(e, t) {
                return O(this.configuration).getTransactionIntent(e.id, e.expand, t).then(e => e(this.axios, this.basePath))
            }
            getTransactionIntents(e = {}, t) {
                return O(this.configuration).getTransactionIntents(e.limit, e.skip, e.order, e.expand, e.chainId, e.account, e.player, e.status, e.policy, t).then(e => e(this.axios, this.basePath))
            }
            signature(e, t) {
                return O(this.configuration).signature(e.id, e.signatureRequest, t).then(e => e(this.axios, this.basePath))
            }
        }
        class b {
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
            return new b({
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
                }, this.transactionIntentsApi = new v(this.config.backend, void 0, t), this.accountsApi = new R(this.config.backend, void 0, t), this.sessionsApi = new A(this.config.backend, void 0, t), this.authenticationApi = new T(this.config.backend, void 0, t)
            }
        }
    }, {
        axios: "jhAcT",
        "axios-retry": "8va09",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "8va09": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "namespace", () => i), s.export(r, "isNetworkError", () => l), s.export(r, "isRetryableError", () => d), s.export(r, "isSafeRequestError", () => p), s.export(r, "isIdempotentRequestError", () => f), s.export(r, "isNetworkOrIdempotentRequestError", () => h), s.export(r, "retryAfter", () => g), s.export(r, "exponentialDelay", () => y), s.export(r, "linearDelay", () => m), s.export(r, "DEFAULT_OPTIONS", () => E);
        var a = e("is-retry-allowed"),
            o = s.interopDefault(a);
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

        function y(e = 0, t, r = 100) {
            let n = Math.max(2 ** e * r, g(t)),
                s = .2 * n * Math.random();
            return n + s
        }

        function m(e = 100) {
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
            var n;
            let s = (n = t || {}, {
                ...E,
                ...n,
                ...e[i]
            });
            return s.retryCount = s.retryCount || 0, (!s.lastRequestTime || r) && (s.lastRequestTime = Date.now()), e[i] = s, s
        }
        async function R(e, t) {
            let {
                retries: r,
                retryCondition: n
            } = e, s = (e.retryCount || 0) < r && n(t);
            if ("object" == typeof s) try {
                let e = await s;
                return !1 !== e
            } catch (e) {
                return !1
            }
            return s
        }
        async function I(e, t, r, n) {
            t.retryCount += 1;
            let {
                retryDelay: s,
                shouldResetTimeout: a,
                onRetry: o
            } = t, i = s(t.retryCount, r);
            if (e.defaults.agent === n.agent && delete n.agent, e.defaults.httpAgent === n.httpAgent && delete n.httpAgent, e.defaults.httpsAgent === n.httpsAgent && delete n.httpsAgent, !a && n.timeout && t.lastRequestTime) {
                let e = Date.now() - t.lastRequestTime,
                    s = n.timeout - e - i;
                if (s <= 0) return Promise.reject(r);
                n.timeout = s
            }
            return (n.transformRequest = [e => e], await o(t.retryCount, r, n), n.signal?.aborted) ? Promise.resolve(e(n)) : new Promise(t => {
                let r = () => {
                        clearTimeout(s), t(e(n))
                    },
                    s = setTimeout(() => {
                        t(e(n)), n.signal?.removeEventListener && n.signal.removeEventListener("abort", r)
                    }, i);
                n.signal?.addEventListener && n.signal.addEventListener("abort", r, {
                    once: !0
                })
            })
        }
        async function T(e, t) {
            e.retryCount >= e.retries && await e.onMaxRetryTimesExceeded(t, e.retryCount)
        }
        let j = (e, t) => ({
            requestInterceptorId: e.interceptors.request.use(e => (w(e, t, !0), e[i]?.validateResponse && (e.validateStatus = () => !1), e)),
            responseInterceptorId: e.interceptors.response.use(null, async r => {
                let {
                    config: n
                } = r;
                if (!n) return Promise.reject(r);
                let s = w(n, t);
                return r.response && s.validateResponse?.(r.response) ? r.response : await R(s, r) ? I(e, s, r, n) : (await T(s, r), Promise.reject(r))
            })
        });
        j.isNetworkError = l, j.isSafeRequestError = p, j.isIdempotentRequestError = f, j.isNetworkOrIdempotentRequestError = h, j.exponentialDelay = y, j.linearDelay = m, j.isRetryableError = d, r.default = j
    }, {
        "is-retry-allowed": "gqdKH",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    gqdKH: [function(e, t, r, n) {
        "use strict";
        let s = new Set(["ENOTFOUND", "ENETUNREACH", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_CRL", "UNABLE_TO_DECRYPT_CERT_SIGNATURE", "UNABLE_TO_DECRYPT_CRL_SIGNATURE", "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY", "CERT_SIGNATURE_FAILURE", "CRL_SIGNATURE_FAILURE", "CERT_NOT_YET_VALID", "CERT_HAS_EXPIRED", "CRL_NOT_YET_VALID", "CRL_HAS_EXPIRED", "ERROR_IN_CERT_NOT_BEFORE_FIELD", "ERROR_IN_CERT_NOT_AFTER_FIELD", "ERROR_IN_CRL_LAST_UPDATE_FIELD", "ERROR_IN_CRL_NEXT_UPDATE_FIELD", "OUT_OF_MEM", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "UNABLE_TO_VERIFY_LEAF_SIGNATURE", "CERT_CHAIN_TOO_LONG", "CERT_REVOKED", "INVALID_CA", "PATH_LENGTH_EXCEEDED", "INVALID_PURPOSE", "CERT_UNTRUSTED", "CERT_REJECTED", "HOSTNAME_MISMATCH"]);
        t.exports = e => !s.has(e && e.code)
    }, {}],
    "913SB": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "InternalSentry", () => l), s.export(r, "sentry", () => c);
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
                e.captureAxiosError = (t, r, n, s) => {
                    r instanceof a.AxiosError ? (r.name = t, e.captureException(r, {
                        ...n,
                        captureContext: {
                            ...n?.captureContext,
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
                    })) : e.captureException(r, n, s)
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
                let n = await e("a9e6b8ea4960bb4a");
                this.sentry = new n.BrowserClient({
                    dsn: i,
                    integrations: [],
                    stackParser: n.defaultStackParser,
                    transport: n.makeFetchTransport
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
    b25yF: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "PACKAGE", () => o), s.export(r, "VERSION", () => a);
        let a = "0.9.3",
            o = "@openfort/openfort-js"
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    lXFlS: [function(e, t, r, n) {
        t.exports = e("b8b8447d32e4fae5")(t.bundle.resolve("7UhPZ")).then(() => t.bundle.root("9vv7N"))
    }, {
        b8b8447d32e4fae5: "6IWJC"
    }],
    "6IWJC": [function(e, t, r, n) {
        "use strict";
        t.exports = e("ca2a84f7fa4a3bb0")(function(e) {
            return new Promise(function(t, r) {
                if ([].concat(document.getElementsByTagName("script")).some(function(t) {
                        return t.src === e
                    })) return void t();
                var n = document.createElement("link");
                n.href = e, n.rel = "preload", n.as = "script", document.head.appendChild(n);
                var s = document.createElement("script");
                s.async = !0, s.type = "text/javascript", s.src = e, s.onerror = function(t) {
                    var n = TypeError("Failed to fetch dynamically imported module: ".concat(e, ". Error: ").concat(t.message));
                    s.onerror = s.onload = null, s.remove(), r(n)
                }, s.onload = function() {
                    s.onerror = s.onload = null, t()
                }, document.getElementsByTagName("head")[0].appendChild(s)
            })
        })
    }, {
        ca2a84f7fa4a3bb0: "cpF2B"
    }],
    cpF2B: [function(e, t, r, n) {
        "use strict";
        var s = {},
            a = {},
            o = {};
        t.exports = function(e, t) {
            return function(r) {
                var n = function(e) {
                    switch (e) {
                        case "preload":
                            return a;
                        case "prefetch":
                            return o;
                        default:
                            return s
                    }
                }(t);
                return n[r] ? n[r] : n[r] = e.apply(null, arguments).catch(function(e) {
                    throw delete n[r], e
                })
            }
        }
    }, {}],
    i2ayE: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "LazyStorage", () => i);
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
    O8SR8: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "StorageImplementation", () => o);
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
    aurKi: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "AuthManager", () => g);
        var a = e("jose"),
            o = e("../core/errors/openfortError.js"),
            i = e("../core/errors/sentry.js"),
            l = e("../types/types.js"),
            c = e("../storage/istorage.js"),
            u = e("../utils/crypto.js");
        async function d(e) {
            let t = (new TextEncoder).encode(e);
            return new Uint8Array(await (0, u.cryptoDigest)("SHA-256", t))
        }

        function p(e) {
            let t = new Uint8Array(e);
            return crypto.getRandomValues(t), t
        }
        class f {
            decodedPayload;
            value;
            constructor(e) {
                this.value = e;
                try {
                    this.decodedPayload = (0, a.decodeJwt)(e)
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
                return !this.expiration || Date.now() >= 1e3 * (this.expiration - e)
            }
            static parse(e) {
                try {
                    return new f(e)
                } catch {
                    return null
                }
            }
        }
        class h {
            storage;
            constructor(e) {
                this.storage = e
            }
            async savePKCEData(e) {
                this.storage.save(c.StorageKeys.PKCE_STATE, e.state), this.storage.save(c.StorageKeys.PKCE_VERIFIER, e.verifier)
            }
            async getPKCEData() {
                let e = await this.storage.get(c.StorageKeys.PKCE_STATE),
                    t = await this.storage.get(c.StorageKeys.PKCE_VERIFIER);
                return e && t ? {
                    state: e,
                    verifier: t
                } : null
            }
            async clearPKCEData() {
                this.storage.remove(c.StorageKeys.PKCE_STATE), this.storage.remove(c.StorageKeys.PKCE_VERIFIER)
            }
        }
        class g {
            deviceCredentialsManager;
            backendApiClientsInstance;
            publishableKeyInstance;
            constructor(e) {
                this.deviceCredentialsManager = new h(e)
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
                let n = t?.usePooling ?? !1;
                delete t?.usePooling;
                let s = {
                        oAuthInitRequest: {
                            provider: e,
                            options: t,
                            usePooling: n
                        }
                    },
                    a = await (0, o.withOpenfortError)(async () => this.backendApiClients.authenticationApi.initOAuth(s, g.getEcosystemGameOptsOrUndefined(r)), {
                        default: o.OpenfortErrorType.AUTHENTICATION_ERROR
                    });
                return "undefined" == typeof window || t?.skipBrowserRedirect || window.location.assign(a.data.url), {
                    url: a.data.url,
                    key: a.data.key
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
                let n = {
                    loginWithIdTokenRequest: {
                        provider: e,
                        token: t
                    }
                };
                return (0, o.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.loginWithIdToken(n, g.getEcosystemGameOptsOrUndefined(r))).data, {
                    default: o.OpenfortErrorType.AUTHENTICATION_ERROR,
                    401: o.OpenfortErrorType.AUTHENTICATION_ERROR,
                    403: o.OpenfortErrorType.USER_NOT_AUTHORIZED_ON_ECOSYSTEM
                }, e => {
                    i.sentry.captureAxiosError("loginWithIdToken", e)
                })
            }
            async authenticateThirdParty(e, t, r, n) {
                let s = {
                    thirdPartyOAuthRequest: {
                        provider: e,
                        token: t,
                        tokenType: r
                    }
                };
                return (0, o.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.thirdParty(s, g.getEcosystemGameOptsOrUndefined(n))).data, {
                    default: o.OpenfortErrorType.AUTHENTICATION_ERROR,
                    401: o.OpenfortErrorType.AUTHENTICATION_ERROR,
                    403: o.OpenfortErrorType.USER_NOT_AUTHORIZED_ON_ECOSYSTEM
                }, e => {
                    i.sentry.captureAxiosError("authenticateThirdParty", e)
                })
            }
            async initSIWE(e, t) {
                let r = {
                        sIWERequest: {
                            address: e
                        }
                    },
                    n = await (0, o.withOpenfortError)(async () => this.backendApiClients.authenticationApi.initSIWE(r, g.getEcosystemGameOptsOrUndefined(t)), {
                        default: o.OpenfortErrorType.AUTHENTICATION_ERROR
                    });
                return {
                    address: n.data.address,
                    nonce: n.data.nonce,
                    expiresAt: n.data.expiresAt
                }
            }
            async authenticateSIWE(e, t, r, n) {
                let s = {
                    sIWEAuthenticateRequest: {
                        signature: e,
                        message: t,
                        walletClientType: r,
                        connectorType: n
                    }
                };
                return (0, o.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.authenticateSIWE(s)).data, {
                    default: o.OpenfortErrorType.AUTHENTICATION_ERROR,
                    401: o.OpenfortErrorType.AUTHENTICATION_ERROR,
                    403: o.OpenfortErrorType.USER_NOT_AUTHORIZED_ON_ECOSYSTEM
                }, e => {
                    i.sentry.captureAxiosError("authenticateSIWE", e)
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
                let n = {
                    loginRequest: {
                        email: e,
                        password: t
                    }
                };
                return (0, o.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.loginEmailPassword(n, g.getEcosystemGameOptsOrUndefined(r))).data, {
                    default: o.OpenfortErrorType.AUTHENTICATION_ERROR,
                    401: o.OpenfortErrorType.AUTHENTICATION_ERROR,
                    403: o.OpenfortErrorType.USER_NOT_AUTHORIZED_ON_ECOSYSTEM
                }, e => {
                    i.sentry.captureAxiosError("loginEmailPassword", e)
                })
            }
            async requestResetPassword(e, t) {
                let r = p(32),
                    n = a.base64url.encode(r),
                    s = await d(n),
                    i = a.base64url.encode(s),
                    c = p(32),
                    u = a.base64url.encode(c);
                await this.deviceCredentialsManager.savePKCEData({
                    state: u,
                    verifier: n
                });
                let f = {
                    requestResetPasswordRequest: {
                        email: e,
                        redirectUrl: t,
                        challenge: {
                            codeChallenge: i,
                            method: l.CodeChallengeMethodEnum.S256
                        }
                    }
                };
                await (0, o.withOpenfortError)(async () => {
                    await this.backendApiClients.authenticationApi.requestResetPassword(f)
                }, {
                    default: o.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async resetPassword(e, t, r) {
                return (0, o.withOpenfortError)(async () => {
                    let n = await this.deviceCredentialsManager.getPKCEData();
                    if (!n) throw Error("No code verifier or state for PKCE");
                    let s = {
                        resetPasswordRequest: {
                            email: e,
                            password: t,
                            state: r,
                            challenge: {
                                codeVerifier: n.verifier
                            }
                        }
                    };
                    await this.backendApiClients.authenticationApi.resetPassword(s)
                }, {
                    default: o.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async requestEmailVerification(e, t) {
                let r = p(32),
                    n = a.base64url.encode(r),
                    s = await d(n),
                    i = a.base64url.encode(s),
                    c = p(32),
                    u = a.base64url.encode(c);
                await this.deviceCredentialsManager.savePKCEData({
                    state: u,
                    verifier: n
                });
                let f = {
                    requestVerifyEmailRequest: {
                        email: e,
                        redirectUrl: t,
                        challenge: {
                            codeChallenge: i,
                            method: l.CodeChallengeMethodEnum.S256
                        }
                    }
                };
                await (0, o.withOpenfortError)(async () => {
                    await this.backendApiClients.authenticationApi.requestEmailVerification(f)
                }, {
                    default: o.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async verifyEmail(e, t) {
                return (0, o.withOpenfortError)(async () => {
                    let r = await this.deviceCredentialsManager.getPKCEData();
                    if (!r) throw Error("No code verifier or state for PKCE");
                    let n = {
                        verifyEmailRequest: {
                            email: e,
                            token: t,
                            challenge: {
                                codeVerifier: r.verifier
                            }
                        }
                    };
                    await this.backendApiClients.authenticationApi.verifyEmail(n)
                }, {
                    default: o.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async signupEmailPassword(e, t, r, n) {
                let s = {
                    signupRequest: {
                        email: e,
                        password: t,
                        name: r
                    }
                };
                return (0, o.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.signupEmailPassword(s, g.getEcosystemGameOptsOrUndefined(n))).data, {
                    default: o.OpenfortErrorType.USER_REGISTRATION_ERROR,
                    401: o.OpenfortErrorType.USER_REGISTRATION_ERROR,
                    403: o.OpenfortErrorType.USER_NOT_AUTHORIZED_ON_ECOSYSTEM
                }, e => {
                    i.sentry.captureAxiosError("signupEmailPassword", e)
                })
            }
            async validateCredentials(e, t) {
                if (!e.refreshToken) throw new(0, o.OpenfortError)("No refresh token provided", o.OpenfortErrorType.AUTHENTICATION_ERROR);
                if (t) return this.refreshTokens(e.refreshToken, t);
                let r = f.parse(e.token);
                return r ? r.isExpired() ? this.refreshTokens(e.refreshToken) : {
                    player: r.subject || "",
                    accessToken: e.token,
                    refreshToken: e.refreshToken
                } : this.refreshTokens(e.refreshToken)
            }
            isTokenActive(e) {
                if (!e) return !1;
                let t = f.parse(e);
                return null !== t && !t.isExpired(30)
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
            async linkThirdParty(e, t, r, n, s) {
                let a = {
                    thirdPartyLinkRequest: {
                        provider: t,
                        token: r,
                        tokenType: n
                    }
                };
                return (0, o.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.linkThirdParty(a, {
                    headers: {
                        authorization: `Bearer ${this.publishableKey}`,
                        "x-player-token": e.token,
                        "x-auth-provider": e.thirdPartyProvider || void 0,
                        "x-token-type": e.thirdPartyTokenType || void 0,
                        "x-game": s || void 0
                    }
                })).data, {
                    default: o.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
            async linkOAuth(e, t, r, n) {
                let s = {
                        oAuthInitRequest: {
                            provider: t,
                            options: r,
                            usePooling: r?.usePooling || !1
                        }
                    },
                    a = await (0, o.withOpenfortError)(async () => this.backendApiClients.authenticationApi.linkOAuth(s, {
                        headers: {
                            authorization: `Bearer ${this.publishableKey}`,
                            "x-player-token": e.token,
                            "x-auth-provider": e.thirdPartyProvider || void 0,
                            "x-token-type": e.thirdPartyTokenType || void 0,
                            "x-game": n || void 0
                        }
                    }), {
                        default: o.OpenfortErrorType.AUTHENTICATION_ERROR
                    });
                return "undefined" == typeof window || r?.skipBrowserRedirect || window.location.assign(a.data.url), {
                    url: a.data.url,
                    key: a.data.key
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
            async linkWallet(e, t, r, n, s) {
                let a = {
                    sIWEAuthenticateRequest: {
                        signature: e,
                        message: t,
                        walletClientType: r,
                        connectorType: n
                    }
                };
                return (0, o.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.linkSIWE(a, {
                    headers: {
                        authorization: `Bearer ${this.publishableKey}`,
                        "x-player-token": s
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
            async linkEmail(e, t, r, n) {
                let s = {
                    loginRequest: {
                        email: e,
                        password: t
                    }
                };
                return (0, o.withOpenfortError)(async () => (await this.backendApiClients.authenticationApi.linkEmail(s, {
                    headers: {
                        authorization: `Bearer ${this.publishableKey}`,
                        "x-player-token": r,
                        "x-game": n || void 0
                    }
                })).data, {
                    default: o.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            }
        }
    }, {
        jose: "kXgGE",
        "../core/errors/openfortError.js": "3xESR",
        "../core/errors/sentry.js": "913SB",
        "../types/types.js": "fUPIN",
        "../storage/istorage.js": "8EpXG",
        "../utils/crypto.js": "3dq9D",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    kXgGE: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "compactDecrypt", () => a.compactDecrypt), s.export(r, "flattenedDecrypt", () => o.flattenedDecrypt), s.export(r, "generalDecrypt", () => i.generalDecrypt), s.export(r, "GeneralEncrypt", () => l.GeneralEncrypt), s.export(r, "compactVerify", () => c.compactVerify), s.export(r, "flattenedVerify", () => u.flattenedVerify), s.export(r, "generalVerify", () => d.generalVerify), s.export(r, "jwtVerify", () => p.jwtVerify), s.export(r, "jwtDecrypt", () => f.jwtDecrypt), s.export(r, "CompactEncrypt", () => h.CompactEncrypt), s.export(r, "FlattenedEncrypt", () => g.FlattenedEncrypt), s.export(r, "CompactSign", () => y.CompactSign), s.export(r, "FlattenedSign", () => m.FlattenedSign), s.export(r, "GeneralSign", () => E.GeneralSign), s.export(r, "SignJWT", () => w.SignJWT), s.export(r, "EncryptJWT", () => R.EncryptJWT), s.export(r, "calculateJwkThumbprint", () => I.calculateJwkThumbprint), s.export(r, "calculateJwkThumbprintUri", () => I.calculateJwkThumbprintUri), s.export(r, "EmbeddedJWK", () => T.EmbeddedJWK), s.export(r, "createLocalJWKSet", () => j.createLocalJWKSet), s.export(r, "createRemoteJWKSet", () => A.createRemoteJWKSet), s.export(r, "jwksCache", () => A.jwksCache), s.export(r, "experimental_jwksCache", () => A.experimental_jwksCache), s.export(r, "UnsecuredJWT", () => O.UnsecuredJWT), s.export(r, "exportPKCS8", () => v.exportPKCS8), s.export(r, "exportSPKI", () => v.exportSPKI), s.export(r, "exportJWK", () => v.exportJWK), s.export(r, "importSPKI", () => b.importSPKI), s.export(r, "importPKCS8", () => b.importPKCS8), s.export(r, "importX509", () => b.importX509), s.export(r, "importJWK", () => b.importJWK), s.export(r, "decodeProtectedHeader", () => S.decodeProtectedHeader), s.export(r, "decodeJwt", () => C.decodeJwt), s.export(r, "errors", () => x), s.export(r, "generateKeyPair", () => N.generateKeyPair), s.export(r, "generateSecret", () => _.generateSecret), s.export(r, "base64url", () => P), s.export(r, "cryptoRuntime", () => U.default);
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
            y = e("./jws/compact/sign.js"),
            m = e("./jws/flattened/sign.js"),
            E = e("./jws/general/sign.js"),
            w = e("./jwt/sign.js"),
            R = e("./jwt/encrypt.js"),
            I = e("./jwk/thumbprint.js"),
            T = e("./jwk/embedded.js"),
            j = e("./jwks/local.js"),
            A = e("./jwks/remote.js"),
            O = e("./jwt/unsecured.js"),
            v = e("./key/export.js"),
            b = e("./key/import.js"),
            S = e("./util/decode_protected_header.js"),
            C = e("./util/decode_jwt.js"),
            x = e("./util/errors.js"),
            N = e("./key/generate_key_pair.js"),
            _ = e("./key/generate_secret.js"),
            P = e("./util/base64url.js"),
            k = e("./util/runtime.js"),
            U = s.interopDefault(k)
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
    eIcG3: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "decodeJwt", () => u);
        var a = e("./base64url.js"),
            o = e("../lib/buffer_utils.js"),
            i = e("../lib/is_object.js"),
            l = s.interopDefault(i),
            c = e("./errors.js");

        function u(e) {
            let t, r;
            if ("string" != typeof e) throw new(0, c.JWTInvalid)("JWTs must use Compact JWS serialization, JWT must be a string");
            let {
                1: n,
                length: s
            } = e.split(".");
            if (5 === s) throw new(0, c.JWTInvalid)("Only JWTs using Compact JWS serialization can be decoded");
            if (3 !== s) throw new(0, c.JWTInvalid)("Invalid JWT");
            if (!n) throw new(0, c.JWTInvalid)("JWTs must contain a payload");
            try {
                t = (0, a.decode)(n)
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
    gHZ5h: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "encode", () => o), s.export(r, "decode", () => i);
        var a = e("../runtime/base64url.js");
        let o = a.encode,
            i = a.decode
    }, {
        "../runtime/base64url.js": "By2uJ",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    By2uJ: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "encodeBase64", () => o), s.export(r, "encode", () => i), s.export(r, "decodeBase64", () => l), s.export(r, "decode", () => c);
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
    "3OSXK": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "encoder", () => i), s.export(r, "decoder", () => l), s.export(r, "concat", () => c), s.export(r, "p2s", () => u), s.export(r, "uint64be", () => p), s.export(r, "uint32be", () => f), s.export(r, "lengthAndInput", () => h), s.export(r, "concatKdf", () => g);
        var a = e("../runtime/digest.js"),
            o = s.interopDefault(a);
        let i = new TextEncoder,
            l = new TextDecoder;

        function c(...e) {
            let t = new Uint8Array(e.reduce((e, {
                    length: t
                }) => e + t, 0)),
                r = 0;
            for (let n of e) t.set(n, r), r += n.length;
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
            let n = Math.ceil((t >> 3) / 32),
                s = new Uint8Array(32 * n);
            for (let t = 0; t < n; t++) {
                let n = new Uint8Array(4 + e.length + r.length);
                n.set(f(t + 1)), n.set(e, 4), n.set(r, 4 + e.length), s.set(await (0, o.default)("sha256", n), 32 * t)
            }
            return s.slice(0, t >> 3)
        }
    }, {
        "../runtime/digest.js": "fpkwe",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    fpkwe: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r);
        var a = e("./webcrypto.js"),
            o = s.interopDefault(a);
        r.default = async (e, t) => {
            let r = `SHA-${e.slice(-3)}`;
            return new Uint8Array(await o.default.subtle.digest(r, t))
        }
    }, {
        "./webcrypto.js": "8W0ZQ",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "8W0ZQ": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "isCryptoKey", () => a), r.default = crypto;
        let a = e => e instanceof CryptoKey
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    kQMV3: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");

        function a(e) {
            if ("object" != typeof e || null === e || "[object Object]" !== Object.prototype.toString.call(e)) return !1;
            if (null === Object.getPrototypeOf(e)) return !0;
            let t = e;
            for (; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
            return Object.getPrototypeOf(e) === t
        }
        s.defineInteropFlag(r), s.export(r, "default", () => a)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "2MROB": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "JOSEError", () => a), s.export(r, "JWTClaimValidationFailed", () => o), s.export(r, "JWTExpired", () => i), s.export(r, "JOSEAlgNotAllowed", () => l), s.export(r, "JOSENotSupported", () => c), s.export(r, "JWEDecryptionFailed", () => u), s.export(r, "JWEInvalid", () => d), s.export(r, "JWSInvalid", () => p), s.export(r, "JWTInvalid", () => f), s.export(r, "JWKInvalid", () => h), s.export(r, "JWKSInvalid", () => g), s.export(r, "JWKSNoMatchingKey", () => y), s.export(r, "JWKSMultipleMatchingKeys", () => m), s.export(r, "JWKSTimeout", () => E), s.export(r, "JWSSignatureVerificationFailed", () => w);
        class a extends Error {
            constructor(e, t) {
                super(e, t), this.code = "ERR_JOSE_GENERIC", this.name = this.constructor.name, Error.captureStackTrace?.(this, this.constructor)
            }
        }
        a.code = "ERR_JOSE_GENERIC";
        class o extends a {
            constructor(e, t, r = "unspecified", n = "unspecified") {
                super(e, {
                    cause: {
                        claim: r,
                        reason: n,
                        payload: t
                    }
                }), this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED", this.claim = r, this.reason = n, this.payload = t
            }
        }
        o.code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
        class i extends a {
            constructor(e, t, r = "unspecified", n = "unspecified") {
                super(e, {
                    cause: {
                        claim: r,
                        reason: n,
                        payload: t
                    }
                }), this.code = "ERR_JWT_EXPIRED", this.claim = r, this.reason = n, this.payload = t
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
        class y extends a {
            constructor(e = "no applicable key found in the JSON Web Key Set", t) {
                super(e, t), this.code = "ERR_JWKS_NO_MATCHING_KEY"
            }
        }
        y.code = "ERR_JWKS_NO_MATCHING_KEY";
        class m extends a {
            constructor(e = "multiple matching keys found in the JSON Web Key Set", t) {
                super(e, t), this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS"
            }
        }
        m.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
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
    kxNZ1: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "AuthApi", () => c);
        var a = e("../storage/istorage.js"),
            o = e("../core/configuration/authentication.js"),
            i = e("../wallets/signer.js"),
            l = e("../core/errors/openfortError.js");
        class c {
            storage;
            authManager;
            validateAndRefreshToken;
            ensureInitialized;
            constructor(e, t, r, n) {
                this.storage = e, this.authManager = t, this.validateAndRefreshToken = r, this.ensureInitialized = n
            }
            async logInWithEmailPassword({
                email: e,
                password: t,
                ecosystemGame: r
            }) {
                await this.ensureInitialized();
                let n = await o.Authentication.fromStorage(this.storage),
                    s = await this.authManager.loginEmailPassword(e, t, r);
                return "action" in s || (n && n.player !== s.player.id && await this.logout(), new(0, o.Authentication)("jwt", s.token, s.player.id, s.refreshToken).save(this.storage)), s
            }
            async signUpGuest() {
                await this.ensureInitialized();
                let e = await o.Authentication.fromStorage(this.storage),
                    t = await this.authManager.registerGuest();
                return e && e.player !== t.player.id && await this.logout(), new(0, o.Authentication)("jwt", t.token, t.player.id, t.refreshToken).save(this.storage), t
            }
            async signUpWithEmailPassword({
                email: e,
                password: t,
                options: r,
                ecosystemGame: n
            }) {
                await this.ensureInitialized();
                let s = await o.Authentication.fromStorage(this.storage),
                    a = await this.authManager.signupEmailPassword(e, t, r?.data.name, n);
                return "action" in a || (s && s.player !== a.player.id && await this.logout(), new(0, o.Authentication)("jwt", a.token, a.player.id, a.refreshToken).save(this.storage)), a
            }
            async linkEmailPassword({
                email: e,
                password: t,
                authToken: r,
                ecosystemGame: n
            }) {
                return await this.authManager.linkEmail(e, t, r, n)
            }
            async unlinkEmailPassword({
                email: e,
                authToken: t
            }) {
                return await this.authManager.unlinkEmail(e, t)
            }
            async requestEmailVerification({
                email: e,
                redirectUrl: t
            }) {
                await this.authManager.requestEmailVerification(e, t)
            }
            async resetPassword({
                email: e,
                password: t,
                state: r
            }) {
                await this.authManager.resetPassword(e, t, r)
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
                await this.authManager.verifyEmail(e, t)
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
                let n = await o.Authentication.fromStorage(this.storage);
                if (!n) throw new(0, l.OpenfortError)("No authentication found", l.OpenfortErrorType.NOT_LOGGED_IN_ERROR);
                return await this.authManager.linkOAuth(n, e, t, r)
            }
            async linkThirdPartyProvider({
                provider: e,
                token: t,
                tokenType: r
            }) {
                let n = await o.Authentication.fromStorage(this.storage);
                if (!n) throw new(0, l.OpenfortError)("No authentication found", l.OpenfortErrorType.NOT_LOGGED_IN_ERROR);
                return await this.authManager.linkThirdParty(n, e, t, r)
            }
            async unlinkOAuth({
                provider: e,
                authToken: t
            }) {
                return await this.authManager.unlinkOAuth(e, t)
            }
            async poolOAuth(e) {
                await this.ensureInitialized();
                let t = await o.Authentication.fromStorage(this.storage),
                    r = await this.authManager.poolOAuth(e);
                return t && t.player !== r.player.id && await this.logout(), new(0, o.Authentication)("jwt", r.token, r.player.id, r.refreshToken).save(this.storage), r
            }
            async authenticateWithThirdPartyProvider({
                provider: e,
                token: t,
                tokenType: r,
                ecosystemGame: n
            }) {
                await this.ensureInitialized();
                let s = await o.Authentication.fromStorage(this.storage),
                    a = await this.authManager.authenticateThirdParty(e, t, r, n);
                return s && s.player !== a.id && await this.logout(), new(0, o.Authentication)("third_party", t, a.id, null, e, r).save(this.storage), a
            }
            async loginWithIdToken({
                provider: e,
                token: t,
                ecosystemGame: r
            }) {
                await this.ensureInitialized();
                let n = await o.Authentication.fromStorage(this.storage),
                    s = await this.authManager.loginWithIdToken(e, t, r);
                return n && n.player !== s.player.id && await this.logout(), new(0, o.Authentication)("jwt", s.token, s.player.id, s.refreshToken).save(this.storage), s
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
                connectorType: n
            }) {
                await this.ensureInitialized();
                let s = await o.Authentication.fromStorage(this.storage),
                    a = await this.authManager.authenticateSIWE(e, t, r, n);
                return s && s.player !== a.player.id && await this.logout(), new(0, o.Authentication)("jwt", a.token, a.player.id, a.refreshToken).save(this.storage), a
            }
            async linkWallet({
                signature: e,
                message: t,
                walletClientType: r,
                connectorType: n,
                authToken: s
            }) {
                return await this.authManager.linkWallet(e, t, r, n, s)
            }
            async unlinkWallet({
                address: e,
                authToken: t
            }) {
                return await this.authManager.unlinkWallet(e, t)
            }
            async storeCredentials(e) {
                if (await this.ensureInitialized(), !e.player) throw new(0, l.OpenfortError)("Player ID is required to store credentials", l.OpenfortErrorType.INVALID_CONFIGURATION);
                new(0, o.Authentication)("jwt", e.accessToken, e.player, e.refreshToken).save(this.storage)
            }
            async logout() {
                await this.ensureInitialized();
                let e = await i.SignerManager.fromStorage(this.storage);
                this.storage.remove(a.StorageKeys.AUTHENTICATION), this.storage.remove(a.StorageKeys.ACCOUNT), e && await e.logout()
            }
        }
    }, {
        "../storage/istorage.js": "8EpXG",
        "../core/configuration/authentication.js": "1Nfd7",
        "../wallets/signer.js": "k5e7f",
        "../core/errors/openfortError.js": "3xESR",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "1Nfd7": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "Authentication", () => o);
        var a = e("../../storage/istorage.js");
        class o {
            type;
            token;
            player;
            refreshToken;
            thirdPartyProvider;
            thirdPartyTokenType;
            constructor(e, t, r, n, s, a) {
                this.type = e, this.token = t, this.player = r, this.refreshToken = n, this.thirdPartyProvider = s, this.thirdPartyTokenType = a
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
                window.webkit.messageHandlers.userHandler.postMessage({ method: "fromStorage", data: t });
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
    k5e7f: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "SignerManager", () => g);
        var a = e("../core/config/config.js"),
            o = e("../storage/istorage.js"),
            i = e("./iframeManager.js"),
            l = e("../core/configuration/authentication.js"),
            c = e("../core/errors/openfortError.js"),
            u = e("./types.js"),
            d = e("../core/configuration/recovery.js"),
            p = e("./embedded.js"),
            f = e("../core/configuration/account.js");
        let h = new WeakMap;
        class g {
            static async fromStorage(e) {
                if (!e) throw new(0, c.OpenfortError)("Storage is required", c.OpenfortErrorType.INVALID_CONFIGURATION);
                let t = await e.get(o.StorageKeys.ACCOUNT);
                if (!t) return null;
                let r = JSON.parse(t);
                return this.embeddedFromStorage(e, r.chainId)
            }
            static async embeddedFromStorage(e, t) {
                let r = this.getIframeManager(e),
                    n = await l.Authentication.fromStorage(e);
                if (!n) throw new(0, c.OpenfortError)("Must be authenticated to create a signer", c.OpenfortErrorType.NOT_LOGGED_IN_ERROR);
                let s = await d.Recovery.fromStorage(e);
                if (!s) throw new(0, c.OpenfortError)("Must have recovery to create a signer", c.OpenfortErrorType.INVALID_CONFIGURATION);
                let a = {
                    thirdPartyTokenType: n.thirdPartyTokenType ?? null,
                    thirdPartyProvider: n.thirdPartyProvider ?? null,
                    accessToken: n.token,
                    playerID: n.player,
                    recovery: this.shieldAuthentication(e, s, n, null),
                    chainId: t,
                    password: null
                };
                return new(0, p.EmbeddedSigner)(r, a, e)
            }
            static getIframeManager(e) {
                let t = h.get(e);
                if (t) return t;
                let r = a.SDKConfiguration.fromStorage();
                if (!r) throw new(0, c.OpenfortError)("Must be configured to create a signer", c.OpenfortErrorType.INVALID_CONFIGURATION);
                let n = new(0, i.IframeManager)(r, e);
                return h.set(e, n), n
            }
            static async embedded(e, t = null, r = null, n = null, s = null) {
                let a;
                if (!e) throw new(0, c.OpenfortError)("Storage is required", c.OpenfortErrorType.INVALID_CONFIGURATION);
                let o = this.getIframeManager(e);
                try {
                    a = await l.Authentication.fromStorage(e)
                } catch (e) {
                    throw new(0, c.OpenfortError)("Failed to access authentication storage", c.OpenfortErrorType.INVALID_CONFIGURATION)
                }
                if (!a) throw new(0, c.OpenfortError)("Must be authenticated to create a signer", c.OpenfortErrorType.NOT_LOGGED_IN_ERROR);
                let i = await d.Recovery.fromStorage(e),
                    u = new(0, d.Recovery)(n || i?.type || "openfort", s || i?.customToken),
                    h = this.shieldAuthentication(e, u, a, r),
                    g = {
                        thirdPartyTokenType: a.thirdPartyTokenType ?? null,
                        thirdPartyProvider: a.thirdPartyProvider ?? null,
                        accessToken: a.token,
                        playerID: a.player,
                        recovery: h,
                        chainId: t,
                        password: r?.recoveryPassword || null
                    },
                    y = await o.configure(g);
                return new(0, f.Account)(y.address, y.chainId, y.ownerAddress, y.accountType).save(e), new(0, p.EmbeddedSigner)(o, g, e)
            }
            static shieldAuthentication(e, t, r, n) {
                let s = null;
                if ("openfort" === t.type) s = {
                    auth: u.ShieldAuthType.OPENFORT,
                    authProvider: r.thirdPartyProvider || void 0,
                    token: r.token,
                    tokenType: r.thirdPartyTokenType || void 0,
                    encryptionSession: n?.encryptionSession || void 0
                }, new(0, d.Recovery)("openfort").save(e);
                else if ("custom" === t.type) {
                    if (!t.customToken) throw new(0, c.OpenfortError)("Custom recovery requires a token", c.OpenfortErrorType.INVALID_CONFIGURATION);
                    s = {
                        auth: u.ShieldAuthType.CUSTOM,
                        token: t.customToken
                    }, new(0, d.Recovery)("custom", t.customToken).save(e)
                }
                return s
            }
        }
    }, {
        "../core/config/config.js": "8pPBU",
        "../storage/istorage.js": "8EpXG",
        "./iframeManager.js": "kcx6I",
        "../core/configuration/authentication.js": "1Nfd7",
        "../core/errors/openfortError.js": "3xESR",
        "./types.js": "iBeSb",
        "../core/configuration/recovery.js": "bUac4",
        "./embedded.js": "18PER",
        "../core/configuration/account.js": "f6fHD",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    bUac4: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "Recovery", () => o);
        var a = e("../../storage/istorage.js");
        class o {
            type;
            customToken;
            options;
            constructor(e, t = null, r = {}) {
                this.type = e, this.customToken = t, this.options = r
            }
            save(e) {
                e.save(a.StorageKeys.RECOVERY, JSON.stringify({
                    type: this.type,
                    customToken: this.customToken,
                    options: this.options
                }))
            }
            static async fromStorage(e) {
                let t = await e.get(a.StorageKeys.RECOVERY);
                if (!t) return null;
                try {
                    let e = JSON.parse(t);
                    return new o(e.type, e.customToken, e.options)
                } catch {
                    return null
                }
            }
        }
    }, {
        "../../storage/istorage.js": "8EpXG",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "18PER": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "EmbeddedSigner", () => d);
        var a = e("../core/configuration/account.js"),
            o = e("../core/configuration/authentication.js"),
            i = e("../core/errors/openfortError.js"),
            l = e("../core/configuration/recovery.js"),
            c = e("./types.js"),
            u = e("../storage/istorage.js");
        class d {
            iframeManager;
            iframeConfiguration;
            storage;
            constructor(e, t, r) {
                this.iframeManager = e, this.iframeConfiguration = t, this.storage = r
            }
            async sign(e, t, r) {
                return await this.iframeManager.sign(this.iframeConfiguration, e, t, r)
            }
            async export () {
                return await this.iframeManager.export(this.iframeConfiguration)
            }
            async switchChain({
                chainId: e
            }) {
                let t = await this.iframeManager.switchChain(this.iframeConfiguration, e);
                new(0, a.Account)(t.address, t.chainId, t.ownerAddress, t.accountType).save(this.storage)
            }
            async setEmbeddedRecovery({
                recoveryMethod: e,
                recoveryPassword: t,
                encryptionSession: r
            }) {
                await this.iframeManager.setEmbeddedRecovery(this.iframeConfiguration, e, t, r)
            }
            async logout() {
                await this.iframeManager.logout(), this.storage.remove(u.StorageKeys.RECOVERY)
            }
            async updateAuthentication() {
                let e = await o.Authentication.fromStorage(this.storage);
                if (!e) throw new(0, i.OpenfortError)("Must provide authentication to update authentication", i.OpenfortErrorType.NOT_LOGGED_IN_ERROR);
                let t = await l.Recovery.fromStorage(this.storage);
                if (!t) throw new(0, i.OpenfortError)("Must have recovery to update authentication", i.OpenfortErrorType.INVALID_CONFIGURATION);
                await this.iframeManager.updateAuthentication(this.iframeConfiguration, e.token, "openfort" === t.type ? c.ShieldAuthType.OPENFORT : c.ShieldAuthType.CUSTOM)
            }
        }
    }, {
        "../core/configuration/account.js": "f6fHD",
        "../core/configuration/authentication.js": "1Nfd7",
        "../core/errors/openfortError.js": "3xESR",
        "../core/configuration/recovery.js": "bUac4",
        "./types.js": "iBeSb",
        "../storage/istorage.js": "8EpXG",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    f6fHD: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "Account", () => o);
        var a = e("../../storage/istorage.js");
        class o {
            address;
            chainId;
            ownerAddress;
            type;
            constructor(e, t, r, n) {
                this.address = e, this.chainId = t, this.ownerAddress = r, this.type = n
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
    cN17n: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "EmbeddedWalletApi", () => E);
        var a = e("../../../packages/internal/openapi-clients/dist/index.js"),
            o = e("../wallets/signer.js"),
            i = e("../core/configuration/account.js"),
            l = e("../core/configuration/authentication.js"),
            c = e("../core/config/config.js"),
            u = e("../core/errors/openfortError.js"),
            d = e("../wallets/evm/walletHelpers.js"),
            p = e("../wallets/evm/evmProvider.js");
        e("../wallets/evm/types.js");
        var f = e("../wallets/evm/provider/eip6963.js"),
            h = e("../utils/typedEventEmitter.js"),
            g = s.interopDefault(h),
            y = e("../types/types.js"),
            m = e("../wallets/iframeManager.js");
        class E {
            storage;
            validateAndRefreshToken;
            ensureInitialized;
            provider = null;
            iframeManager = null;
            constructor(e, t, r) {
                this.storage = e, this.validateAndRefreshToken = t, this.ensureInitialized = r
            }
            get backendApiClients() {
                let e = c.SDKConfiguration.fromStorage();
                if (!e) throw new(0, u.OpenfortError)("Configuration not found", u.OpenfortErrorType.INVALID_CONFIGURATION);
                return new(0, a.BackendApiClients)({
                    basePath: e.backendUrl,
                    accessToken: e.baseConfiguration.publishableKey
                })
            }
            getIframeManager() {
                if (!this.iframeManager) {
                    let e = c.SDKConfiguration.fromStorage();
                    if (!e) throw new(0, u.OpenfortError)("Configuration not found", u.OpenfortErrorType.INVALID_CONFIGURATION);
                    this.iframeManager = new(0, m.IframeManager)(e, this.storage)
                }
                return this.iframeManager
            }
            async configure(e = {}) {
                let t = e.recoveryParams ?? {
                    recoveryMethod: y.RecoveryMethod.AUTOMATIC
                };
                await this.ensureInitialized(), await this.validateAndRefreshToken();
                let r = c.SDKConfiguration.fromStorage(),
                    n = null;
                (t.recoveryMethod === y.RecoveryMethod.PASSWORD || e.shieldAuthentication?.encryptionSession) && (n = {
                    encryptionSession: e.shieldAuthentication?.encryptionSession || null,
                    recoveryPassword: t.recoveryMethod === y.RecoveryMethod.PASSWORD ? t.password : null,
                    encryptionPart: r?.shieldConfiguration?.shieldEncryptionKey || null
                });
                let s = null,
                    a = null;
                if (e.shieldAuthentication && (s = "openfort" === e.shieldAuthentication.auth ? "openfort" : "custom", a = e.shieldAuthentication.token), !this.storage) throw new(0, u.OpenfortError)("Storage not available in EmbeddedWalletApi", u.OpenfortErrorType.INVALID_CONFIGURATION);
                return await o.SignerManager.embedded(this.storage, e.chainId, n, s, a), this.get()
            }
            async signMessage(e, t) {
                await this.ensureInitialized(), await this.validateAndRefreshToken();
                let r = await o.SignerManager.fromStorage(this.storage);
                if (!r) throw new(0, u.OpenfortError)("No signer configured", u.OpenfortErrorType.MISSING_SIGNER_ERROR);
                let {
                    hashMessage: n = !0,
                    arrayifyMessage: s = !1
                } = t || {};
                return await r.sign(e, s, n)
            }
            async signTypedData(e, t, r) {
                await this.ensureInitialized(), await this.validateAndRefreshToken();
                let n = await o.SignerManager.fromStorage(this.storage),
                    s = await i.Account.fromStorage(this.storage);
                if (!n || !s) throw new(0, u.OpenfortError)("No signer configured", u.OpenfortErrorType.MISSING_SIGNER_ERROR);
                return await (0, d.getSignedTypedData)({
                    domain: e,
                    types: t,
                    message: r
                }, s.type, Number(s.chainId), n, s.address)
            }
            async exportPrivateKey() {
                await this.ensureInitialized(), await this.validateAndRefreshToken();
                let e = await o.SignerManager.fromStorage(this.storage);
                if (!e) throw new(0, u.OpenfortError)("No signer configured", u.OpenfortErrorType.MISSING_SIGNER_ERROR);
                return await e.export()
            }
            async setEmbeddedRecovery({
                recoveryMethod: e,
                recoveryPassword: t,
                encryptionSession: r
            }) {
                await this.ensureInitialized(), await this.validateAndRefreshToken();
                let n = await o.SignerManager.fromStorage(this.storage);
                if (!n) throw new(0, u.OpenfortError)("No signer configured", u.OpenfortErrorType.MISSING_SIGNER_ERROR);
                if ("password" === e && !t) throw new(0, u.OpenfortError)("Recovery password is required", u.OpenfortErrorType.INVALID_CONFIGURATION);
                await n.setEmbeddedRecovery({
                    recoveryMethod: e,
                    recoveryPassword: t,
                    encryptionSession: r
                })
            }
            async get() {
                let e = await i.Account.fromStorage(this.storage);
                if (!e) throw new(0, u.OpenfortError)("No signer configured", u.OpenfortErrorType.MISSING_SIGNER_ERROR);
                let t = await l.Authentication.fromStorage(this.storage);
                if (!t) throw new(0, u.OpenfortError)("No access token found", u.OpenfortErrorType.INTERNAL_ERROR);
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
                await this.ensureInitialized(), await this.validateAndRefreshToken();
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
                    if (!await l.Authentication.fromStorage(this.storage)) return y.EmbeddedState.UNAUTHENTICATED;
                    if (!await o.SignerManager.fromStorage(this.storage)) return y.EmbeddedState.EMBEDDED_SIGNER_NOT_CONFIGURED;
                    return await i.Account.fromStorage(this.storage) ? y.EmbeddedState.READY : y.EmbeddedState.CREATING_ACCOUNT
                } catch (e) {
                    return console.error("Failed to get embedded state:", e), y.EmbeddedState.UNAUTHENTICATED
                }
            }
            async getEthereumProvider(e) {
                await this.ensureInitialized();
                let t = {
                        announceProvider: !0,
                        ...e
                    },
                    r = await l.Authentication.fromStorage(this.storage),
                    n = await o.SignerManager.fromStorage(this.storage),
                    s = await i.Account.fromStorage(this.storage);
                return this.provider ? this.provider && t.policy && this.provider.updatePolicy(t.policy) : (this.provider = new(0, p.EvmProvider)({
                    storage: this.storage,
                    openfortEventEmitter: new(0, g.default),
                    signer: n || void 0,
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
                    let t = this.getIframeManager();
                    if (!t.isLoaded()) return !1;
                    e > 0 && await new Promise(t => {
                        setTimeout(t, e)
                    });
                    let r = await l.Authentication.fromStorage(this.storage);
                    if (r) try {
                        return await t.getCurrentUser(r.player), !0
                    } catch (e) {
                        return !1
                    }
                    return t.isLoaded()
                } catch (e) {
                    return !1
                }
            }
            getURL() {
                let e = c.SDKConfiguration.fromStorage();
                if (!e) throw new(0, u.OpenfortError)("Configuration not found", u.OpenfortErrorType.INVALID_CONFIGURATION);
                return e.iframeUrl
            }
        }
    }, {
        "../../../packages/internal/openapi-clients/dist/index.js": "5IDb0",
        "../wallets/signer.js": "k5e7f",
        "../core/configuration/account.js": "f6fHD",
        "../core/configuration/authentication.js": "1Nfd7",
        "../core/config/config.js": "8pPBU",
        "../core/errors/openfortError.js": "3xESR",
        "../wallets/evm/walletHelpers.js": "arpu2",
        "../wallets/evm/evmProvider.js": "4mZuV",
        "../wallets/evm/types.js": "h6Lv9",
        "../wallets/evm/provider/eip6963.js": "3LTkv",
        "../utils/typedEventEmitter.js": "gZetA",
        "../types/types.js": "fUPIN",
        "../wallets/iframeManager.js": "kcx6I",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    arpu2: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "getSignedTypedData", () => o);
        var a = e("../../types/types.js");
        let o = async (t, r, n, s, o) => {
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
                        chainId: Number(n),
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
            return await s.sign(c, !1, !1)
        }
    }, {
        "../../types/types.js": "fUPIN",
        "9ea20aecf4a918ce": "f41ft",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    f41ft: [function(e, t, r, n) {
        t.exports = e("bb8bb6b54cc9cc05")(t.bundle.resolve("2XE7A")).then(() => t.bundle.root("jLDfB"))
    }, {
        bb8bb6b54cc9cc05: "6IWJC"
    }],
    "4mZuV": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "EvmProvider", () => A);
        var a = e("../../core/configuration/authentication.js"),
            o = e("./types.js"),
            i = e("./JsonRpcError.js"),
            l = e("./signTypedDataV4.js"),
            c = e("../../types/types.js"),
            u = e("../../utils/typedEventEmitter.js"),
            d = s.interopDefault(u),
            p = e("../../utils/chains/index.js"),
            f = e("../../core/configuration/account.js"),
            h = e("../signer.js"),
            g = e("../../storage/istorage.js"),
            y = e("./addEthereumChain.js"),
            m = e("./registerSession.js"),
            E = e("./revokeSession.js"),
            w = e("./sendCalls.js"),
            R = e("./getCallsStatus.js"),
            I = e("./personalSign.js"),
            T = e("./estimateGas.js"),
            j = e("../../utils/crypto.js");
        class A {
            #t;
            #e;
            #a;
            updatePolicy(e) {
                this.#e = e
            }
            #r;
            #s;
            #i = null;
            #o;
            isOpenfort = !0;
            constructor({
                storage: e,
                backendApiClients: t,
                openfortEventEmitter: r,
                policyId: n,
                chains: s,
                validateAndRefreshSession: a
            }) {
                this.#t = e, this.#a = s, this.#e = n, this.#r = a, this.#o = t, this.#o = t, this.#s = new(0, d.default), r.on(c.OpenfortEvents.LOGGED_OUT, this.#n)
            }
            #n = async () => {
                let e = !!await f.Account.fromStorage(this.#t),
                    t = await h.SignerManager.fromStorage(this.#t);
                t?.logout(), this.#t.remove(g.StorageKeys.ACCOUNT), this.#t.remove(g.StorageKeys.AUTHENTICATION), e && this.#s.emit(o.ProviderEvent.ACCOUNTS_CHANGED, [])
            };
            async getRpcProvider() {
                if (!this.#i) {
                    let t = await f.Account.fromStorage(this.#t),
                        r = t?.chainId || 8453;
                    await e("369f3e054ad6e98f").then(e => {
                        let t = this.#a ? this.#a[r] : void 0;
                        this.#i = new e.StaticJsonRpcProvider(t ?? p.defaultChainRpcs[r])
                    })
                }
                if (!this.#i) throw Error("RPC provider not initialized");
                return this.#i
            }
            async #u(t) {
                switch (t.method) {
                    case "eth_accounts": {
                        let e = await f.Account.fromStorage(this.#t);
                        return e ? [e.address] : []
                    }
                    case "eth_requestAccounts": {
                        let e = await f.Account.fromStorage(this.#t);
                        if (e) return this.#s.emit(o.ProviderEvent.ACCOUNTS_CONNECT, {
                            chainId: (0, j.numberToHex)(e.chainId)
                        }), [e.address];
                        if (!await h.SignerManager.fromStorage(this.#t)) throw new(0, i.JsonRpcError)(i.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - must be authenticated and configured with a signer");
                        if (await h.SignerManager.embedded(this.#t), !(e = await f.Account.fromStorage(this.#t))) throw new(0, i.JsonRpcError)(i.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - no account available");
                        return this.#s.emit(o.ProviderEvent.ACCOUNTS_CHANGED, [e.address]), [e.address]
                    }
                    case "eth_sendTransaction": {
                        let e = await f.Account.fromStorage(this.#t),
                            r = await h.SignerManager.fromStorage(this.#t),
                            n = await a.Authentication.fromStorage(this.#t);
                        if (!e || !r || !n) throw new(0, i.JsonRpcError)(i.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                        return await this.#r(), await (0, w.sendCalls)({
                            params: t.params || [],
                            signer: r,
                            account: e,
                            authentication: n,
                            backendClient: this.#o,
                            policyId: this.#e
                        })
                    }
                    case "eth_estimateGas": {
                        let e = await f.Account.fromStorage(this.#t),
                            r = await a.Authentication.fromStorage(this.#t);
                        if (!e || !r) throw new(0, i.JsonRpcError)(i.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                        return await this.#r(), await (0, T.estimateGas)({
                            params: t.params || [],
                            account: e,
                            authentication: r,
                            backendClient: this.#o,
                            policyId: this.#e
                        })
                    }
                    case "eth_signTypedData":
                    case "eth_signTypedData_v4": {
                        let e = await f.Account.fromStorage(this.#t),
                            r = await h.SignerManager.fromStorage(this.#t);
                        if (!e || !r) throw new(0, i.JsonRpcError)(i.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                        await this.#r();
                        let n = await this.getRpcProvider();
                        return await (0, l.signTypedDataV4)({
                            method: t.method,
                            params: t.params || [],
                            signer: r,
                            accountType: e.type,
                            rpcProvider: n
                        })
                    }
                    case "personal_sign": {
                        let e = await f.Account.fromStorage(this.#t),
                            r = await h.SignerManager.fromStorage(this.#t);
                        if (!e || !r) throw new(0, i.JsonRpcError)(i.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                        return await this.#r(), await (0, I.personalSign)({
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
                        return (0, j.numberToHex)(t)
                    }
                    case "wallet_switchEthereumChain": {
                        let r = await h.SignerManager.fromStorage(this.#t);
                        if (!r) throw new(0, i.JsonRpcError)(i.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - must be authenticated and configured with a signer");
                        if (!t.params || !Array.isArray(t.params) || 0 === t.params.length) throw new(0, i.JsonRpcError)(i.RpcErrorCode.INVALID_PARAMS, "Invalid parameters for wallet_switchEthereumChain");
                        await this.#r();
                        try {
                            let n = parseInt(t.params[0].chainId, 16);
                            await r.switchChain({
                                chainId: n
                            }), await e("369f3e054ad6e98f").then(e => {
                                let t = this.#a ? this.#a[n] : void 0;
                                this.#i = new e.StaticJsonRpcProvider(t ?? p.defaultChainRpcs[n])
                            })
                        } catch (e) {
                            throw new(0, i.JsonRpcError)(i.RpcErrorCode.INTERNAL_ERROR, "Failed to switch chain")
                        }
                        return null
                    }
                    case "wallet_addEthereumChain": {
                        if (!await h.SignerManager.fromStorage(this.#t)) throw new(0, i.JsonRpcError)(i.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - must be authenticated and configured with a signer");
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
                        let e = await f.Account.fromStorage(this.#t),
                            r = await h.SignerManager.fromStorage(this.#t),
                            n = await a.Authentication.fromStorage(this.#t);
                        if (!e || !r || !n) throw new(0, i.JsonRpcError)(i.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                        return await this.#r(), await (0, R.getCallStatus)({
                            params: t.params || {},
                            authentication: n,
                            backendClient: this.#o,
                            account: e
                        })
                    }
                    case "wallet_sendCalls": {
                        let e = await f.Account.fromStorage(this.#t),
                            r = await h.SignerManager.fromStorage(this.#t),
                            n = await a.Authentication.fromStorage(this.#t);
                        if (!e || !r || !n) throw new(0, i.JsonRpcError)(i.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                        return await this.#r(), await (0, w.sendCalls)({
                            params: t.params ? t.params[0].calls : [],
                            signer: r,
                            account: e,
                            authentication: n,
                            backendClient: this.#o,
                            policyId: this.#e
                        })
                    }
                    case "wallet_grantPermissions": {
                        let e = await f.Account.fromStorage(this.#t),
                            r = await h.SignerManager.fromStorage(this.#t),
                            n = await a.Authentication.fromStorage(this.#t);
                        if (!e || !r || !n) throw new(0, i.JsonRpcError)(i.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                        return await this.#r(), await (0, m.registerSession)({
                            params: t.params || [],
                            signer: r,
                            account: e,
                            authentication: n,
                            backendClient: this.#o,
                            policyId: this.#e
                        })
                    }
                    case "wallet_revokePermissions": {
                        let e = await f.Account.fromStorage(this.#t),
                            r = await h.SignerManager.fromStorage(this.#t),
                            n = await a.Authentication.fromStorage(this.#t);
                        if (!e || !r || !n) throw new(0, i.JsonRpcError)(i.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                        return await this.#r(), await (0, E.revokeSession)({
                            params: t.params || [],
                            signer: r,
                            account: e,
                            authentication: n,
                            backendClient: this.#o
                        })
                    }
                    case "wallet_getCapabilities": {
                        let e = await this.getRpcProvider(),
                            {
                                chainId: t
                            } = await e.detectNetwork();
                        return {
                            [(0, j.numberToHex)(t)]: {
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
                        throw new(0, i.JsonRpcError)(i.ProviderErrorCode.UNSUPPORTED_METHOD, `${t.method}: Method not supported`)
                }
            }
            async request(e) {
                try {
                    return this.#u(e)
                } catch (e) {
                    if (e instanceof i.JsonRpcError) throw e;
                    if (e instanceof Error) throw new(0, i.JsonRpcError)(i.RpcErrorCode.INTERNAL_ERROR, e.message);
                    throw new(0, i.JsonRpcError)(i.RpcErrorCode.INTERNAL_ERROR, "Internal error")
                }
            }
            on(e, t) {
                this.#s.on(e, t)
            }
            removeListener(e, t) {
                this.#s.off(e, t)
            }
        }
    }, {
        "../../core/configuration/authentication.js": "1Nfd7",
        "./types.js": "h6Lv9",
        "./JsonRpcError.js": "5MjlL",
        "./signTypedDataV4.js": "4S1Sk",
        "../../types/types.js": "fUPIN",
        "../../utils/typedEventEmitter.js": "gZetA",
        "../../utils/chains/index.js": "lU4aU",
        "../../core/configuration/account.js": "f6fHD",
        "../signer.js": "k5e7f",
        "../../storage/istorage.js": "8EpXG",
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
    h6Lv9: [function(e, t, r, n) {
        var s, a, o, i, l = e("@parcel/transformer-js/src/esmodule-helpers.js");
        l.defineInteropFlag(r), l.export(r, "BackendTransactionStatus", () => o), l.export(r, "ProviderEvent", () => i), (s = o || (o = {})).PENDING = "PENDING", s.SUBMITTED = "SUBMITTED", s.SUCCESSFUL = "SUCCESSFUL", s.REVERTED = "REVERTED", s.FAILED = "FAILED", s.CANCELLED = "CANCELLED", (a = i || (i = {})).ACCOUNTS_CHANGED = "accountsChanged", a.ACCOUNTS_CONNECT = "connect"
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "5MjlL": [function(e, t, r, n) {
        var s, a, o, i, l = e("@parcel/transformer-js/src/esmodule-helpers.js");
        l.defineInteropFlag(r), l.export(r, "JsonRpcError", () => c), l.export(r, "ProviderErrorCode", () => o), l.export(r, "RpcErrorCode", () => i), (s = o || (o = {}))[s.USER_REJECTED_REQUEST = 4001] = "USER_REJECTED_REQUEST", s[s.UNAUTHORIZED = 4100] = "UNAUTHORIZED", s[s.UNSUPPORTED_METHOD = 4200] = "UNSUPPORTED_METHOD", s[s.DISCONNECTED = 4900] = "DISCONNECTED", (a = i || (i = {}))[a.RPC_SERVER_ERROR = -32e3] = "RPC_SERVER_ERROR", a[a.INVALID_REQUEST = -32600] = "INVALID_REQUEST", a[a.METHOD_NOT_FOUND = -32601] = "METHOD_NOT_FOUND", a[a.INVALID_PARAMS = -32602] = "INVALID_PARAMS", a[a.INTERNAL_ERROR = -32603] = "INTERNAL_ERROR", a[a.PARSE_ERROR = -32700] = "PARSE_ERROR", a[a.TRANSACTION_REJECTED = -32003] = "TRANSACTION_REJECTED";
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
    "4S1Sk": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "signTypedDataV4", () => l);
        var a = e("./walletHelpers.js"),
            o = e("./JsonRpcError.js");
        let i = ["types", "domain", "primaryType", "message"],
            l = async ({
                params: e,
                method: t,
                signer: r,
                accountType: n,
                rpcProvider: s
            }) => {
                let l = e[0],
                    c = e[1];
                if (!l || !c) throw new(0, o.JsonRpcError)(o.RpcErrorCode.INVALID_PARAMS, `${t} requires an address and a typed data JSON`);
                let {
                    chainId: u
                } = await s.detectNetwork(), d = ((e, t) => {
                    let r, n;
                    if ("string" == typeof e) try {
                        r = JSON.parse(e)
                    } catch (e) {
                        throw new(0, o.JsonRpcError)(o.RpcErrorCode.INVALID_PARAMS, `Failed to parse typed data JSON: ${e}`)
                    } else {
                        if ("object" != typeof e) throw new(0, o.JsonRpcError)(o.RpcErrorCode.INVALID_PARAMS, `Invalid typed data argument: ${e}`);
                        r = e
                    }
                    if (n = r, !i.every(e => e in n)) throw new(0, o.JsonRpcError)(o.RpcErrorCode.INVALID_PARAMS, `Invalid typed data argument. The following properties are required: 
      ${i.join(", ")}`);
                    let s = r.domain?.chainId;
                    if (s && ("string" == typeof s && (s.startsWith("0x") ? r.domain.chainId = parseInt(s, 16) : r.domain.chainId = parseInt(s, 10)), r.domain.chainId !== t)) throw new(0, o.JsonRpcError)(o.RpcErrorCode.INVALID_PARAMS, `Invalid chainId, expected ${t}`);
                    return r
                })(c, u);
                return await (0, a.getSignedTypedData)(d, n, u, r, l)
            }
    }, {
        "./walletHelpers.js": "arpu2",
        "./JsonRpcError.js": "5MjlL",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    gZetA: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "default", () => o);
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
    gddYA: [function(e, t, r, n) {
        "use strict";
        var s = Object.prototype.hasOwnProperty,
            a = "~";

        function o() {}

        function i(e, t, r) {
            this.fn = e, this.context = t, this.once = r || !1
        }

        function l(e, t, r, n, s) {
            if ("function" != typeof r) throw TypeError("The listener must be a function");
            var o = new i(r, n || e, s),
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
            for (t in e = this._events) s.call(e, t) && r.push(a ? t.slice(1) : t);
            return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
        }, u.prototype.listeners = function(e) {
            var t = a ? a + e : e,
                r = this._events[t];
            if (!r) return [];
            if (r.fn) return [r.fn];
            for (var n = 0, s = r.length, o = Array(s); n < s; n++) o[n] = r[n].fn;
            return o
        }, u.prototype.listenerCount = function(e) {
            var t = a ? a + e : e,
                r = this._events[t];
            return r ? r.fn ? 1 : r.length : 0
        }, u.prototype.emit = function(e, t, r, n, s, o) {
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
                        return u.fn.call(u.context, t, r, n), !0;
                    case 5:
                        return u.fn.call(u.context, t, r, n, s), !0;
                    case 6:
                        return u.fn.call(u.context, t, r, n, s, o), !0
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
                        u[c].fn.call(u[c].context, t, r, n);
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
        }, u.prototype.removeListener = function(e, t, r, n) {
            var s = a ? a + e : e;
            if (!this._events[s]) return this;
            if (!t) return c(this, s), this;
            var o = this._events[s];
            if (o.fn) o.fn !== t || n && !o.once || r && o.context !== r || c(this, s);
            else {
                for (var i = 0, l = [], u = o.length; i < u; i++)(o[i].fn !== t || n && !o[i].once || r && o[i].context !== r) && l.push(o[i]);
                l.length ? this._events[s] = 1 === l.length ? l[0] : l : c(this, s)
            }
            return this
        }, u.prototype.removeAllListeners = function(e) {
            var t;
            return e ? (t = a ? a + e : e, this._events[t] && c(this, t)) : (this._events = new o, this._eventsCount = 0), this
        }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = a, u.EventEmitter = u, t.exports = u
    }, {}],
    lU4aU: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "defaultChainRpcs", () => a);
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
    kBFnU: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "addEthereumChain", () => l);
        var a = e("../signer.js"),
            o = e("./JsonRpcError.js");
        let i = ["chainId", "chainName", "nativeCurrency"],
            l = async ({
                params: e,
                rpcProvider: t,
                storage: r
            }) => {
                if (!e || !Array.isArray(e) || 0 === e.length) throw new(0, o.JsonRpcError)(o.RpcErrorCode.INVALID_PARAMS, "Invalid parameters for wallet_addEthereumChain");
                let n = parseInt((e => {
                        var t;
                        if (!e || "object" != typeof e) throw new(0, o.JsonRpcError)(o.RpcErrorCode.INVALID_PARAMS, "Invalid chain parameter: expected an object");
                        if (!i.every(t => t in e)) throw new(0, o.JsonRpcError)(o.RpcErrorCode.INVALID_PARAMS, `Invalid chain parameter. The following properties are required: ${i.join(", ")}`);
                        if (!e.chainName || "" === e.chainName.trim()) throw new(0, o.JsonRpcError)(o.RpcErrorCode.INVALID_PARAMS, "chainName cannot be empty");
                        if (!((t = e.nativeCurrency) && "object" == typeof t && "name" in t && "symbol" in t && "decimals" in t && "string" == typeof t.name && "string" == typeof t.symbol && "number" == typeof t.decimals && Number.isInteger(t.decimals))) throw new(0, o.JsonRpcError)(o.RpcErrorCode.INVALID_PARAMS, "Invalid nativeCurrency object");
                        if (0 === e.rpcUrls?.length) throw new(0, o.JsonRpcError)(o.RpcErrorCode.INVALID_PARAMS, "At least one RPC URL must be provided");
                        if (!/^0x[0-9a-fA-F]+$/.test(e.chainId)) throw new(0, o.JsonRpcError)(o.RpcErrorCode.INVALID_PARAMS, "chainId must be a valid hex string");
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
                        chainId: s
                    } = await t.detectNetwork();
                if (n === s) return !1;
                try {
                    if (!await a.SignerManager.embedded(r)) throw new(0, o.JsonRpcError)(o.ProviderErrorCode.UNAUTHORIZED, "Unauthorized - no account available");
                    return null
                } catch (e) {
                    if (e instanceof Error) throw new(0, o.JsonRpcError)(o.RpcErrorCode.INTERNAL_ERROR, `Failed to add chain: ${e.message}`);
                    throw new(0, o.JsonRpcError)(o.RpcErrorCode.INTERNAL_ERROR, "Failed to add chain")
                }
            }
    }, {
        "../signer.js": "k5e7f",
        "./JsonRpcError.js": "5MjlL",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    iRVAB: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "registerSession", () => u);
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
            authentication: n,
            backendClient: s,
            policyId: i
        }) => {
            let u = await (async (e, t, r, n, s) => {
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
                let g = ((e, t, r, n, s, a = !1, o, i, l, c) => {
                    let u = {
                        address: e,
                        chainId: t,
                        validAfter: r,
                        validUntil: n,
                        optimistic: a,
                        whitelist: o,
                        player: i
                    };
                    return s && (u.policy = s), c && (u.externalOwnerAddress = c), l && (u.limit = l), u
                })(i, r.chainId, u, d, s, !1, f, n.player, h);
                return (0, a.withOpenfortError)(async () => (await t.sessionsApi.createSession({
                    createSessionRequest: g
                }, {
                    headers: {
                        authorization: `Bearer ${t.config.backend.accessToken}`,
                        "x-player-token": n.token,
                        "x-auth-provider": n.thirdPartyProvider,
                        "x-token-type": n.thirdPartyTokenType
                    }
                })).data, {
                    default: a.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            })(e, s, r, n, i).catch(e => {
                throw new(0, o.JsonRpcError)(o.RpcErrorCode.TRANSACTION_REJECTED, e.message)
            });
            if (u?.nextAction?.payload?.signableHash) {
                let e;
                return e = [300, 0x1fa72e78, 324, 50104, 2741, 11124].includes(r.chainId) ? await t.sign(u.nextAction.payload.signableHash, !1, !1) : await t.sign(u.nextAction.payload.signableHash), c(await (0, a.withOpenfortError)(async () => (await s.sessionsApi.signatureSession({
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
    h0LtA: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "revokeSession", () => i);
        var a = e("../../core/errors/openfortError.js"),
            o = e("./JsonRpcError.js");
        let i = async ({
            params: e,
            signer: t,
            account: r,
            authentication: n,
            backendClient: s,
            policyId: i
        }) => {
            let l = e[0];
            if (!l.permissionContext) return await t.logout(), {};
            let c = await (async (e, t, r, n, s) => {
                let o = ((e, t, r, n) => {
                    let s = {
                        address: e,
                        chainId: t,
                        player: r
                    };
                    return n && (s.policy = n), s
                })(e.permissionContext, r.chainId, n.player, s);
                return (0, a.withOpenfortError)(async () => (await t.sessionsApi.revokeSession({
                    revokeSessionRequest: o
                }, {
                    headers: {
                        authorization: `Bearer ${t.config.backend.accessToken}`,
                        "x-player-token": n.token,
                        "x-auth-provider": n.thirdPartyProvider,
                        "x-token-type": n.thirdPartyTokenType
                    }
                })).data, {
                    default: a.OpenfortErrorType.AUTHENTICATION_ERROR
                })
            })(l, s, r, n, i).catch(e => {
                throw new(0, o.JsonRpcError)(o.RpcErrorCode.TRANSACTION_REJECTED, e.message)
            });
            if (c?.nextAction?.payload?.signableHash) {
                let e;
                return e = [300, 0x1fa72e78, 324, 50104, 2741, 11124].includes(r.chainId) ? await t.sign(c.nextAction.payload.signableHash, !1, !1) : await t.sign(c.nextAction.payload.signableHash), (await s.sessionsApi.signatureSession({
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
    bOo3j: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "sendCalls", () => i);
        var a = e("../../core/errors/openfortError.js"),
            o = e("./JsonRpcError.js");
        let i = async ({
            params: e,
            signer: t,
            account: r,
            authentication: n,
            backendClient: s,
            policyId: i
        }) => {
            let l = e[0]?.capabilities?.paymasterService?.policy ?? i,
                c = await (async (e, t, r, n, s) => {
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
                            policy: s,
                            chainId: r.chainId,
                            interactions: i
                        }
                    }, {
                        headers: {
                            authorization: `Bearer ${t.config.backend.accessToken}`,
                            "x-player-token": n.token,
                            "x-auth-provider": n.thirdPartyProvider,
                            "x-token-type": n.thirdPartyTokenType
                        }
                    })).data, {
                        default: a.OpenfortErrorType.AUTHENTICATION_ERROR
                    })
                })(e, s, r, n, l).catch(e => {
                    throw new(0, o.JsonRpcError)(o.RpcErrorCode.TRANSACTION_REJECTED, e.message)
                });
            if (c.response?.error.reason) throw new(0, o.JsonRpcError)(o.RpcErrorCode.TRANSACTION_REJECTED, c.response?.error.reason);
            if (c?.nextAction?.payload?.signableHash) {
                let e;
                e = [300, 0x1fa72e78, 324, 50104, 2741, 11124].includes(r.chainId) ? await t.sign(c.nextAction.payload.signableHash, !1, !1) : await t.sign(c.nextAction.payload.signableHash);
                let n = await (0, a.withOpenfortError)(async () => await s.transactionIntentsApi.signature({
                    id: c.id,
                    signatureRequest: {
                        signature: e
                    }
                }), {
                    default: a.OpenfortErrorType.AUTHENTICATION_ERROR
                }).catch(e => {
                    throw new(0, o.JsonRpcError)(o.RpcErrorCode.TRANSACTION_REJECTED, e.message)
                });
                if (0 === n.data.response?.status) throw new(0, o.JsonRpcError)(o.RpcErrorCode.TRANSACTION_REJECTED, n.data.response?.error.reason);
                return n.data.response?.transactionHash
            }
            return c.response?.transactionHash
        }
    }, {
        "../../core/errors/openfortError.js": "3xESR",
        "./JsonRpcError.js": "5MjlL",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    fT4j5: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "getCallStatus", () => i);
        var a = e("../../core/errors/openfortError.js"),
            o = e("./JsonRpcError.js");
        let i = async ({
            params: e,
            authentication: t,
            backendClient: r
        }) => {
            let n = await (async (e, t, r) => (0, a.withOpenfortError)(async () => (await t.transactionIntentsApi.getTransactionIntent({
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
                status: n.response ? "CONFIRMED" : "PENDING",
                receipts: n.response ? [{
                    status: 0 === n.response.status ? "reverted" : "success",
                    logs: n.response.logs?.map(e => ({
                        address: e.address,
                        data: e.data,
                        topics: e.topics
                    })) || [],
                    blockHash: n.response.transactionHash || "",
                    blockNumber: BigInt(n.response.blockNumber || 0),
                    gasUsed: BigInt(n.response.gasUsed || 0),
                    transactionHash: n.response.transactionHash || ""
                }] : void 0
            }
        }
    }, {
        "../../core/errors/openfortError.js": "3xESR",
        "./JsonRpcError.js": "5MjlL",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    dk0yV: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "personalSign", () => i);
        var a = e("../../utils/crypto.js"),
            o = e("./JsonRpcError.js");
        let i = async ({
            params: e,
            signer: t,
            account: r
        }) => {
            let n = e[0],
                s = e[1];
            if (!s || !n) throw new(0, o.JsonRpcError)(o.RpcErrorCode.INVALID_PARAMS, "personal_sign requires an address and a message");
            if (s.toLowerCase() !== r.address.toLowerCase()) throw new(0, o.JsonRpcError)(o.RpcErrorCode.INVALID_PARAMS, "personal_sign requires the signer to be the from address");
            return await t.sign((0, a.hexToString)(n), !1, !0)
        }
    }, {
        "../../utils/crypto.js": "3dq9D",
        "./JsonRpcError.js": "5MjlL",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    d2KSV: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "estimateGas", () => i);
        var a = e("../../core/errors/openfortError.js"),
            o = e("./JsonRpcError.js");
        let i = async ({
            params: e,
            account: t,
            authentication: r,
            backendClient: n,
            policyId: s
        }) => (await (async (e, t, r, n, s) => {
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
                    policy: s,
                    chainId: r.chainId,
                    interactions: i
                }
            }, {
                headers: {
                    authorization: `Bearer ${t.config.backend.accessToken}`,
                    "x-player-token": n.token,
                    "x-auth-provider": n.thirdPartyProvider,
                    "x-token-type": n.thirdPartyTokenType
                }
            })).data, {
                default: a.OpenfortErrorType.AUTHENTICATION_ERROR
            })
        })(e, n, t, r, s).catch(e => {
            throw new(0, o.JsonRpcError)(o.RpcErrorCode.TRANSACTION_REJECTED, e.message)
        })).estimatedTXGas
    }, {
        "../../core/errors/openfortError.js": "3xESR",
        "./JsonRpcError.js": "5MjlL",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    "43YbP": [function(e, t, r, n) {
        t.exports = Promise.all([e("63e32bce7f1a5665")(t.bundle.resolve("2XE7A")), e("63e32bce7f1a5665")(t.bundle.resolve("36iUx"))]).then(() => t.bundle.root("lpm2Y"))
    }, {
        "63e32bce7f1a5665": "6IWJC"
    }],
    "3LTkv": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "announceProvider", () => o), s.export(r, "openfortProviderInfo", () => a);
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
    "6FRSo": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "UserApi", () => i);
        var a = e("../core/configuration/authentication.js"),
            o = e("../core/errors/openfortError.js");
        class i {
            storage;
            authManager;
            validateAndRefreshToken;
            ensureInitialized;
            constructor(e, t, r, n) {
                this.storage = e, this.authManager = t, this.validateAndRefreshToken = r, this.ensureInitialized = n
            }
            async get() {
                await this.ensureInitialized(), await this.validateAndRefreshToken();
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
    "3zeZX": [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "ProxyApi", () => l);
        var a = e("../wallets/signer.js"),
            o = e("../core/config/config.js"),
            i = e("../core/errors/openfortError.js");
        class l {
            storage;
            backendApiClients;
            validateAndRefreshToken;
            ensureInitialized;
            constructor(e, t, r, n) {
                this.storage = e, this.backendApiClients = t, this.validateAndRefreshToken = r, this.ensureInitialized = n
            }
            async sendSignatureTransactionIntentRequest(e, t = null, r = null, n = !1) {
                if (await this.ensureInitialized(), !o.SDKConfiguration.fromStorage()) throw new(0, i.OpenfortError)("Configuration not found", i.OpenfortErrorType.INVALID_CONFIGURATION);
                await this.validateAndRefreshToken();
                let s = r;
                if (!s) {
                    if (!t) throw new(0, i.OpenfortError)("No signableHash or signature provided", i.OpenfortErrorType.OPERATION_NOT_SUPPORTED_ERROR);
                    let e = await a.SignerManager.fromStorage(this.storage);
                    if (!e) throw new(0, i.OpenfortError)("In order to sign a transaction intent, a signer must be configured", i.OpenfortErrorType.MISSING_SIGNER_ERROR);
                    s = await e.sign(t)
                }
                let l = {
                    id: e,
                    signatureRequest: {
                        signature: s,
                        optimistic: n
                    }
                };
                return (0, i.withOpenfortError)(async () => (await this.backendApiClients.transactionIntentsApi.signature(l)).data, {
                    default: i.OpenfortErrorType.INTERNAL_ERROR
                })
            }
            async sendSignatureSessionRequest(e, t, r) {
                await this.ensureInitialized();
                let n = {
                    id: e,
                    signatureRequest: {
                        signature: t,
                        optimistic: r
                    }
                };
                return (0, i.withOpenfortError)(async () => (await this.backendApiClients.sessionsApi.signatureSession(n)).data, {
                    default: i.OpenfortErrorType.INTERNAL_ERROR
                })
            }
        }
    }, {
        "../wallets/signer.js": "k5e7f",
        "../core/config/config.js": "8pPBU",
        "../core/errors/openfortError.js": "3xESR",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }],
    kvnur: [function(e, t, r, n) {
        var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
        s.defineInteropFlag(r), s.export(r, "OpenfortInternal", () => c);
        var a = e("../wallets/signer.js"),
            o = e("./errors/openfortError.js"),
            i = e("./configuration/authentication.js"),
            l = e("../wallets/iframeManager.js");
        class c {
            storage;
            authManager;
            constructor(e, t) {
                this.storage = e, this.authManager = t
            }
            async getAccessToken() {
                return (await i.Authentication.fromStorage(this.storage))?.token ?? null
            }
            async validateAndRefreshToken(e) {
                let t = await i.Authentication.fromStorage(this.storage);
                if (!t) throw new(0, o.OpenfortError)("Must be logged in to validate and refresh token", o.OpenfortErrorType.NOT_LOGGED_IN_ERROR);
                if ("jwt" !== t.type) return;
                let r = await this.authManager.validateCredentials(t, e);
                if (!r.player) throw new(0, o.OpenfortError)("No player found in credentials", o.OpenfortErrorType.INTERNAL_ERROR);
                if (r.accessToken === t.token) return;
                new(0, i.Authentication)("jwt", r.accessToken, r.player, r.refreshToken).save(this.storage);
                let n = await a.SignerManager.fromStorage(this.storage);
                try {
                    await n?.updateAuthentication()
                } catch (e) {
                    throw (e instanceof l.MissingRecoveryPasswordError || e instanceof l.MissingProjectEntropyError) && await n?.logout(), e
                }
            }
        }
    }, {
        "../wallets/signer.js": "k5e7f",
        "./errors/openfortError.js": "3xESR",
        "./configuration/authentication.js": "1Nfd7",
        "../wallets/iframeManager.js": "kcx6I",
        "@parcel/transformer-js/src/esmodule-helpers.js": "cI3Jn"
    }]
}, ["gJu1s", "id4SM"], "id4SM", "parcelRequire3602", {}, "./", 0);
//# sourceMappingURL=index.js.map
