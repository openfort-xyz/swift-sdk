! function() {
    "use strict";

    function t(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    const {
        toString: e
    } = Object.prototype, {
        getPrototypeOf: r
    } = Object, {
        iterator: n,
        toStringTag: i
    } = Symbol, s = (o = Object.create(null), t => {
        const r = e.call(t);
        return o[r] || (o[r] = r.slice(8, -1).toLowerCase())
    });
    var o;
    const a = t => (t = t.toLowerCase(), e => s(e) === t),
        c = t => e => typeof e === t,
        {
            isArray: u
        } = Array,
        h = c("undefined");
    const l = a("ArrayBuffer");
    const d = c("string"),
        f = c("function"),
        p = c("number"),
        m = t => null !== t && "object" == typeof t,
        g = t => {
            if ("object" !== s(t)) return !1;
            const e = r(t);
            return !(null !== e && e !== Object.prototype && null !== Object.getPrototypeOf(e) || i in t || n in t)
        },
        y = a("Date"),
        w = a("File"),
        v = a("Blob"),
        A = a("FileList"),
        b = a("URLSearchParams"),
        [E, _, R, T] = ["ReadableStream", "Request", "Response", "Headers"].map(a);

    function I(t, e, {
        allOwnKeys: r = !1
    } = {}) {
        if (null == t) return;
        let n, i;
        if ("object" != typeof t && (t = [t]), u(t))
            for (n = 0, i = t.length; n < i; n++) e.call(null, t[n], n, t);
        else {
            const i = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
                s = i.length;
            let o;
            for (n = 0; n < s; n++) o = i[n], e.call(null, t[o], o, t)
        }
    }

    function k(t, e) {
        e = e.toLowerCase();
        const r = Object.keys(t);
        let n, i = r.length;
        for (; i-- > 0;)
            if (n = r[i], e === n.toLowerCase()) return n;
        return null
    }
    const S = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global,
        N = t => !h(t) && t !== S;
    const O = (P = "undefined" != typeof Uint8Array && r(Uint8Array), t => P && t instanceof P);
    var P;
    const C = a("HTMLFormElement"),
        x = (({
            hasOwnProperty: t
        }) => (e, r) => t.call(e, r))(Object.prototype),
        M = a("RegExp"),
        U = (t, e) => {
            const r = Object.getOwnPropertyDescriptors(t),
                n = {};
            I(r, (r, i) => {
                let s;
                !1 !== (s = e(r, i, t)) && (n[i] = s || r)
            }), Object.defineProperties(t, n)
        };
    const D = a("AsyncFunction"),
        L = (B = "function" == typeof setImmediate, F = f(S.postMessage), B ? setImmediate : F ? (q = `axios@${Math.random()}`, G = [], S.addEventListener("message", ({
            source: t,
            data: e
        }) => {
            t === S && e === q && G.length && G.shift()()
        }, !1), t => {
            G.push(t), S.postMessage(q, "*")
        }) : t => setTimeout(t));
    var B, F, q, G;
    const j = "undefined" != typeof queueMicrotask ? queueMicrotask.bind(S) : "undefined" != typeof process && process.nextTick || L;
    var H = {
        isArray: u,
        isArrayBuffer: l,
        isBuffer: function(t) {
            return null !== t && !h(t) && null !== t.constructor && !h(t.constructor) && f(t.constructor.isBuffer) && t.constructor.isBuffer(t)
        },
        isFormData: t => {
            let e;
            return t && ("function" == typeof FormData && t instanceof FormData || f(t.append) && ("formdata" === (e = s(t)) || "object" === e && f(t.toString) && "[object FormData]" === t.toString()))
        },
        isArrayBufferView: function(t) {
            let e;
            return e = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && l(t.buffer), e
        },
        isString: d,
        isNumber: p,
        isBoolean: t => !0 === t || !1 === t,
        isObject: m,
        isPlainObject: g,
        isReadableStream: E,
        isRequest: _,
        isResponse: R,
        isHeaders: T,
        isUndefined: h,
        isDate: y,
        isFile: w,
        isBlob: v,
        isRegExp: M,
        isFunction: f,
        isStream: t => m(t) && f(t.pipe),
        isURLSearchParams: b,
        isTypedArray: O,
        isFileList: A,
        forEach: I,
        merge: function t() {
            const {
                caseless: e
            } = N(this) && this || {}, r = {}, n = (n, i) => {
                const s = e && k(r, i) || i;
                g(r[s]) && g(n) ? r[s] = t(r[s], n) : g(n) ? r[s] = t({}, n) : u(n) ? r[s] = n.slice() : r[s] = n
            };
            for (let t = 0, e = arguments.length; t < e; t++) arguments[t] && I(arguments[t], n);
            return r
        },
        extend: (e, r, n, {
            allOwnKeys: i
        } = {}) => (I(r, (r, i) => {
            n && f(r) ? e[i] = t(r, n) : e[i] = r
        }, {
            allOwnKeys: i
        }), e),
        trim: t => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
        stripBOM: t => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
        inherits: (t, e, r, n) => {
            t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
                value: e.prototype
            }), r && Object.assign(t.prototype, r)
        },
        toFlatObject: (t, e, n, i) => {
            let s, o, a;
            const c = {};
            if (e = e || {}, null == t) return e;
            do {
                for (s = Object.getOwnPropertyNames(t), o = s.length; o-- > 0;) a = s[o], i && !i(a, t, e) || c[a] || (e[a] = t[a], c[a] = !0);
                t = !1 !== n && r(t)
            } while (t && (!n || n(t, e)) && t !== Object.prototype);
            return e
        },
        kindOf: s,
        kindOfTest: a,
        endsWith: (t, e, r) => {
            t = String(t), (void 0 === r || r > t.length) && (r = t.length), r -= e.length;
            const n = t.indexOf(e, r);
            return -1 !== n && n === r
        },
        toArray: t => {
            if (!t) return null;
            if (u(t)) return t;
            let e = t.length;
            if (!p(e)) return null;
            const r = new Array(e);
            for (; e-- > 0;) r[e] = t[e];
            return r
        },
        forEachEntry: (t, e) => {
            const r = (t && t[n]).call(t);
            let i;
            for (;
                (i = r.next()) && !i.done;) {
                const r = i.value;
                e.call(t, r[0], r[1])
            }
        },
        matchAll: (t, e) => {
            let r;
            const n = [];
            for (; null !== (r = t.exec(e));) n.push(r);
            return n
        },
        isHTMLForm: C,
        hasOwnProperty: x,
        hasOwnProp: x,
        reduceDescriptors: U,
        freezeMethods: t => {
            U(t, (e, r) => {
                if (f(t) && -1 !== ["arguments", "caller", "callee"].indexOf(r)) return !1;
                const n = t[r];
                f(n) && (e.enumerable = !1, "writable" in e ? e.writable = !1 : e.set || (e.set = () => {
                    throw Error("Can not rewrite read-only method '" + r + "'")
                }))
            })
        },
        toObjectSet: (t, e) => {
            const r = {},
                n = t => {
                    t.forEach(t => {
                        r[t] = !0
                    })
                };
            return u(t) ? n(t) : n(String(t).split(e)), r
        },
        toCamelCase: t => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(t, e, r) {
            return e.toUpperCase() + r
        }),
        noop: () => {},
        toFiniteNumber: (t, e) => null != t && Number.isFinite(t = +t) ? t : e,
        findKey: k,
        global: S,
        isContextDefined: N,
        isSpecCompliantForm: function(t) {
            return !!(t && f(t.append) && "FormData" === t[i] && t[n])
        },
        toJSONObject: t => {
            const e = new Array(10),
                r = (t, n) => {
                    if (m(t)) {
                        if (e.indexOf(t) >= 0) return;
                        if (!("toJSON" in t)) {
                            e[n] = t;
                            const i = u(t) ? [] : {};
                            return I(t, (t, e) => {
                                const s = r(t, n + 1);
                                !h(s) && (i[e] = s)
                            }), e[n] = void 0, i
                        }
                    }
                    return t
                };
            return r(t, 0)
        },
        isAsyncFn: D,
        isThenable: t => t && (m(t) || f(t)) && f(t.then) && f(t.catch),
        setImmediate: L,
        asap: j,
        isIterable: t => null != t && f(t[n])
    };

    function z(t, e, r, n, i) {
        Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), i && (this.response = i, this.status = i.status ? i.status : null)
    }
    H.inherits(z, Error, {
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
                config: H.toJSONObject(this.config),
                code: this.code,
                status: this.status
            }
        }
    });
    const K = z.prototype,
        V = {};
    ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(t => {
        V[t] = {
            value: t
        }
    }), Object.defineProperties(z, V), Object.defineProperty(K, "isAxiosError", {
        value: !0
    }), z.from = (t, e, r, n, i, s) => {
        const o = Object.create(K);
        return H.toFlatObject(t, o, function(t) {
            return t !== Error.prototype
        }, t => "isAxiosError" !== t), z.call(o, t.message, e, r, n, i), o.cause = t, o.name = t.name, s && Object.assign(o, s), o
    };

    function W(t) {
        return H.isPlainObject(t) || H.isArray(t)
    }

    function J(t) {
        return H.endsWith(t, "[]") ? t.slice(0, -2) : t
    }

    function Y(t, e, r) {
        return t ? t.concat(e).map(function(t, e) {
            return t = J(t), !r && e ? "[" + t + "]" : t
        }).join(r ? "." : "") : e
    }
    const Q = H.toFlatObject(H, {}, null, function(t) {
        return /^is[A-Z]/.test(t)
    });

    function X(t, e, r) {
        if (!H.isObject(t)) throw new TypeError("target must be an object");
        e = e || new FormData;
        const n = (r = H.toFlatObject(r, {
                metaTokens: !0,
                dots: !1,
                indexes: !1
            }, !1, function(t, e) {
                return !H.isUndefined(e[t])
            })).metaTokens,
            i = r.visitor || u,
            s = r.dots,
            o = r.indexes,
            a = (r.Blob || "undefined" != typeof Blob && Blob) && H.isSpecCompliantForm(e);
        if (!H.isFunction(i)) throw new TypeError("visitor must be a function");

        function c(t) {
            if (null === t) return "";
            if (H.isDate(t)) return t.toISOString();
            if (H.isBoolean(t)) return t.toString();
            if (!a && H.isBlob(t)) throw new z("Blob is not supported. Use a Buffer instead.");
            return H.isArrayBuffer(t) || H.isTypedArray(t) ? a && "function" == typeof Blob ? new Blob([t]) : Buffer.from(t) : t
        }

        function u(t, r, i) {
            let a = t;
            if (t && !i && "object" == typeof t)
                if (H.endsWith(r, "{}")) r = n ? r : r.slice(0, -2), t = JSON.stringify(t);
                else if (H.isArray(t) && function(t) {
                    return H.isArray(t) && !t.some(W)
                }(t) || (H.isFileList(t) || H.endsWith(r, "[]")) && (a = H.toArray(t))) return r = J(r), a.forEach(function(t, n) {
                !H.isUndefined(t) && null !== t && e.append(!0 === o ? Y([r], n, s) : null === o ? r : r + "[]", c(t))
            }), !1;
            return !!W(t) || (e.append(Y(i, r, s), c(t)), !1)
        }
        const h = [],
            l = Object.assign(Q, {
                defaultVisitor: u,
                convertValue: c,
                isVisitable: W
            });
        if (!H.isObject(t)) throw new TypeError("data must be an object");
        return function t(r, n) {
            if (!H.isUndefined(r)) {
                if (-1 !== h.indexOf(r)) throw Error("Circular reference detected in " + n.join("."));
                h.push(r), H.forEach(r, function(r, s) {
                    !0 === (!(H.isUndefined(r) || null === r) && i.call(e, r, H.isString(s) ? s.trim() : s, n, l)) && t(r, n ? n.concat(s) : [s])
                }), h.pop()
            }
        }(t), e
    }

    function $(t) {
        const e = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
        };
        return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(t) {
            return e[t]
        })
    }

    function Z(t, e) {
        this._pairs = [], t && X(t, this, e)
    }
    const tt = Z.prototype;

    function et(t) {
        return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    function rt(t, e, r) {
        if (!e) return t;
        const n = r && r.encode || et;
        H.isFunction(r) && (r = {
            serialize: r
        });
        const i = r && r.serialize;
        let s;
        if (s = i ? i(e, r) : H.isURLSearchParams(e) ? e.toString() : new Z(e, r).toString(n), s) {
            const e = t.indexOf("#"); - 1 !== e && (t = t.slice(0, e)), t += (-1 === t.indexOf("?") ? "?" : "&") + s
        }
        return t
    }
    tt.append = function(t, e) {
        this._pairs.push([t, e])
    }, tt.toString = function(t) {
        const e = t ? function(e) {
            return t.call(this, e, $)
        } : $;
        return this._pairs.map(function(t) {
            return e(t[0]) + "=" + e(t[1])
        }, "").join("&")
    };
    class nt {
        constructor() {
            this.handlers = []
        }
        use(t, e, r) {
            return this.handlers.push({
                fulfilled: t,
                rejected: e,
                synchronous: !!r && r.synchronous,
                runWhen: r ? r.runWhen : null
            }), this.handlers.length - 1
        }
        eject(t) {
            this.handlers[t] && (this.handlers[t] = null)
        }
        clear() {
            this.handlers && (this.handlers = [])
        }
        forEach(t) {
            H.forEach(this.handlers, function(e) {
                null !== e && t(e)
            })
        }
    }
    var it = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1
        },
        st = {
            isBrowser: !0,
            classes: {
                URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : Z,
                FormData: "undefined" != typeof FormData ? FormData : null,
                Blob: "undefined" != typeof Blob ? Blob : null
            },
            protocols: ["http", "https", "file", "blob", "url", "data"]
        };
    const ot = "undefined" != typeof window && "undefined" != typeof document,
        at = "object" == typeof navigator && navigator || void 0,
        ct = ot && (!at || ["ReactNative", "NativeScript", "NS"].indexOf(at.product) < 0),
        ut = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
        ht = ot && window.location.href || "http://localhost";
    var lt = {
        ...Object.freeze({
            __proto__: null,
            hasBrowserEnv: ot,
            hasStandardBrowserEnv: ct,
            hasStandardBrowserWebWorkerEnv: ut,
            navigator: at,
            origin: ht
        }),
        ...st
    };

    function dt(t) {
        function e(t, r, n, i) {
            let s = t[i++];
            if ("__proto__" === s) return !0;
            const o = Number.isFinite(+s),
                a = i >= t.length;
            if (s = !s && H.isArray(n) ? n.length : s, a) return H.hasOwnProp(n, s) ? n[s] = [n[s], r] : n[s] = r, !o;
            n[s] && H.isObject(n[s]) || (n[s] = []);
            return e(t, r, n[s], i) && H.isArray(n[s]) && (n[s] = function(t) {
                const e = {},
                    r = Object.keys(t);
                let n;
                const i = r.length;
                let s;
                for (n = 0; n < i; n++) s = r[n], e[s] = t[s];
                return e
            }(n[s])), !o
        }
        if (H.isFormData(t) && H.isFunction(t.entries)) {
            const r = {};
            return H.forEachEntry(t, (t, n) => {
                e(function(t) {
                    return H.matchAll(/\w+|\[(\w*)]/g, t).map(t => "[]" === t[0] ? "" : t[1] || t[0])
                }(t), n, r, 0)
            }), r
        }
        return null
    }
    const ft = {
        transitional: it,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [function(t, e) {
            const r = e.getContentType() || "",
                n = r.indexOf("application/json") > -1,
                i = H.isObject(t);
            i && H.isHTMLForm(t) && (t = new FormData(t));
            if (H.isFormData(t)) return n ? JSON.stringify(dt(t)) : t;
            if (H.isArrayBuffer(t) || H.isBuffer(t) || H.isStream(t) || H.isFile(t) || H.isBlob(t) || H.isReadableStream(t)) return t;
            if (H.isArrayBufferView(t)) return t.buffer;
            if (H.isURLSearchParams(t)) return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
            let s;
            if (i) {
                if (r.indexOf("application/x-www-form-urlencoded") > -1) return function(t, e) {
                    return X(t, new lt.classes.URLSearchParams, Object.assign({
                        visitor: function(t, e, r, n) {
                            return lt.isNode && H.isBuffer(t) ? (this.append(e, t.toString("base64")), !1) : n.defaultVisitor.apply(this, arguments)
                        }
                    }, e))
                }(t, this.formSerializer).toString();
                if ((s = H.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                    const e = this.env && this.env.FormData;
                    return X(s ? {
                        "files[]": t
                    } : t, e && new e, this.formSerializer)
                }
            }
            return i || n ? (e.setContentType("application/json", !1), function(t, e, r) {
                if (H.isString(t)) try {
                    return (e || JSON.parse)(t), H.trim(t)
                } catch (t) {
                    if ("SyntaxError" !== t.name) throw t
                }
                return (r || JSON.stringify)(t)
            }(t)) : t
        }],
        transformResponse: [function(t) {
            const e = this.transitional || ft.transitional,
                r = e && e.forcedJSONParsing,
                n = "json" === this.responseType;
            if (H.isResponse(t) || H.isReadableStream(t)) return t;
            if (t && H.isString(t) && (r && !this.responseType || n)) {
                const r = !(e && e.silentJSONParsing) && n;
                try {
                    return JSON.parse(t)
                } catch (t) {
                    if (r) {
                        if ("SyntaxError" === t.name) throw z.from(t, z.ERR_BAD_RESPONSE, this, null, this.response);
                        throw t
                    }
                }
            }
            return t
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
            FormData: lt.classes.FormData,
            Blob: lt.classes.Blob
        },
        validateStatus: function(t) {
            return t >= 200 && t < 300
        },
        headers: {
            common: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": void 0
            }
        }
    };
    H.forEach(["delete", "get", "head", "post", "put", "patch"], t => {
        ft.headers[t] = {}
    });
    const pt = H.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
    const mt = Symbol("internals");

    function gt(t) {
        return t && String(t).trim().toLowerCase()
    }

    function yt(t) {
        return !1 === t || null == t ? t : H.isArray(t) ? t.map(yt) : String(t)
    }

    function wt(t, e, r, n, i) {
        return H.isFunction(n) ? n.call(this, e, r) : (i && (e = r), H.isString(e) ? H.isString(n) ? -1 !== e.indexOf(n) : H.isRegExp(n) ? n.test(e) : void 0 : void 0)
    }
    let vt = class {
        constructor(t) {
            t && this.set(t)
        }
        set(t, e, r) {
            const n = this;

            function i(t, e, r) {
                const i = gt(e);
                if (!i) throw new Error("header name must be a non-empty string");
                const s = H.findKey(n, i);
                (!s || void 0 === n[s] || !0 === r || void 0 === r && !1 !== n[s]) && (n[s || e] = yt(t))
            }
            const s = (t, e) => H.forEach(t, (t, r) => i(t, r, e));
            if (H.isPlainObject(t) || t instanceof this.constructor) s(t, e);
            else if (H.isString(t) && (t = t.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())) s((t => {
                const e = {};
                let r, n, i;
                return t && t.split("\n").forEach(function(t) {
                    i = t.indexOf(":"), r = t.substring(0, i).trim().toLowerCase(), n = t.substring(i + 1).trim(), !r || e[r] && pt[r] || ("set-cookie" === r ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n)
                }), e
            })(t), e);
            else if (H.isObject(t) && H.isIterable(t)) {
                let r, n, i = {};
                for (const e of t) {
                    if (!H.isArray(e)) throw TypeError("Object iterator must return a key-value pair");
                    i[n = e[0]] = (r = i[n]) ? H.isArray(r) ? [...r, e[1]] : [r, e[1]] : e[1]
                }
                s(i, e)
            } else null != t && i(e, t, r);
            return this
        }
        get(t, e) {
            if (t = gt(t)) {
                const r = H.findKey(this, t);
                if (r) {
                    const t = this[r];
                    if (!e) return t;
                    if (!0 === e) return function(t) {
                        const e = Object.create(null),
                            r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                        let n;
                        for (; n = r.exec(t);) e[n[1]] = n[2];
                        return e
                    }(t);
                    if (H.isFunction(e)) return e.call(this, t, r);
                    if (H.isRegExp(e)) return e.exec(t);
                    throw new TypeError("parser must be boolean|regexp|function")
                }
            }
        }
        has(t, e) {
            if (t = gt(t)) {
                const r = H.findKey(this, t);
                return !(!r || void 0 === this[r] || e && !wt(0, this[r], r, e))
            }
            return !1
        }
        delete(t, e) {
            const r = this;
            let n = !1;

            function i(t) {
                if (t = gt(t)) {
                    const i = H.findKey(r, t);
                    !i || e && !wt(0, r[i], i, e) || (delete r[i], n = !0)
                }
            }
            return H.isArray(t) ? t.forEach(i) : i(t), n
        }
        clear(t) {
            const e = Object.keys(this);
            let r = e.length,
                n = !1;
            for (; r--;) {
                const i = e[r];
                t && !wt(0, this[i], i, t, !0) || (delete this[i], n = !0)
            }
            return n
        }
        normalize(t) {
            const e = this,
                r = {};
            return H.forEach(this, (n, i) => {
                const s = H.findKey(r, i);
                if (s) return e[s] = yt(n), void delete e[i];
                const o = t ? function(t) {
                    return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, e, r) => e.toUpperCase() + r)
                }(i) : String(i).trim();
                o !== i && delete e[i], e[o] = yt(n), r[o] = !0
            }), this
        }
        concat(...t) {
            return this.constructor.concat(this, ...t)
        }
        toJSON(t) {
            const e = Object.create(null);
            return H.forEach(this, (r, n) => {
                null != r && !1 !== r && (e[n] = t && H.isArray(r) ? r.join(", ") : r)
            }), e
        } [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]()
        }
        toString() {
            return Object.entries(this.toJSON()).map(([t, e]) => t + ": " + e).join("\n")
        }
        getSetCookie() {
            return this.get("set-cookie") || []
        }
        get[Symbol.toStringTag]() {
            return "AxiosHeaders"
        }
        static from(t) {
            return t instanceof this ? t : new this(t)
        }
        static concat(t, ...e) {
            const r = new this(t);
            return e.forEach(t => r.set(t)), r
        }
        static accessor(t) {
            const e = (this[mt] = this[mt] = {
                    accessors: {}
                }).accessors,
                r = this.prototype;

            function n(t) {
                const n = gt(t);
                e[n] || (! function(t, e) {
                    const r = H.toCamelCase(" " + e);
                    ["get", "set", "has"].forEach(n => {
                        Object.defineProperty(t, n + r, {
                            value: function(t, r, i) {
                                return this[n].call(this, e, t, r, i)
                            },
                            configurable: !0
                        })
                    })
                }(r, t), e[n] = !0)
            }
            return H.isArray(t) ? t.forEach(n) : n(t), this
        }
    };

    function At(t, e) {
        const r = this || ft,
            n = e || r,
            i = vt.from(n.headers);
        let s = n.data;
        return H.forEach(t, function(t) {
            s = t.call(r, s, i.normalize(), e ? e.status : void 0)
        }), i.normalize(), s
    }

    function bt(t) {
        return !(!t || !t.__CANCEL__)
    }

    function Et(t, e, r) {
        z.call(this, null == t ? "canceled" : t, z.ERR_CANCELED, e, r), this.name = "CanceledError"
    }

    function _t(t, e, r) {
        const n = r.config.validateStatus;
        r.status && n && !n(r.status) ? e(new z("Request failed with status code " + r.status, [z.ERR_BAD_REQUEST, z.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r)) : t(r)
    }
    vt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), H.reduceDescriptors(vt.prototype, ({
        value: t
    }, e) => {
        let r = e[0].toUpperCase() + e.slice(1);
        return {
            get: () => t,
            set(t) {
                this[r] = t
            }
        }
    }), H.freezeMethods(vt), H.inherits(Et, z, {
        __CANCEL__: !0
    });
    const Rt = (t, e, r = 3) => {
            let n = 0;
            const i = function(t, e) {
                t = t || 10;
                const r = new Array(t),
                    n = new Array(t);
                let i, s = 0,
                    o = 0;
                return e = void 0 !== e ? e : 1e3,
                    function(a) {
                        const c = Date.now(),
                            u = n[o];
                        i || (i = c), r[s] = a, n[s] = c;
                        let h = o,
                            l = 0;
                        for (; h !== s;) l += r[h++], h %= t;
                        if (s = (s + 1) % t, s === o && (o = (o + 1) % t), c - i < e) return;
                        const d = u && c - u;
                        return d ? Math.round(1e3 * l / d) : void 0
                    }
            }(50, 250);
            return function(t, e) {
                let r, n, i = 0,
                    s = 1e3 / e;
                const o = (e, s = Date.now()) => {
                    i = s, r = null, n && (clearTimeout(n), n = null), t.apply(null, e)
                };
                return [(...t) => {
                    const e = Date.now(),
                        a = e - i;
                    a >= s ? o(t, e) : (r = t, n || (n = setTimeout(() => {
                        n = null, o(r)
                    }, s - a)))
                }, () => r && o(r)]
            }(r => {
                const s = r.loaded,
                    o = r.lengthComputable ? r.total : void 0,
                    a = s - n,
                    c = i(a);
                n = s;
                t({
                    loaded: s,
                    total: o,
                    progress: o ? s / o : void 0,
                    bytes: a,
                    rate: c || void 0,
                    estimated: c && o && s <= o ? (o - s) / c : void 0,
                    event: r,
                    lengthComputable: null != o,
                    [e ? "download" : "upload"]: !0
                })
            }, r)
        },
        Tt = (t, e) => {
            const r = null != t;
            return [n => e[0]({
                lengthComputable: r,
                total: t,
                loaded: n
            }), e[1]]
        },
        It = t => (...e) => H.asap(() => t(...e));
    var kt = lt.hasStandardBrowserEnv ? ((t, e) => r => (r = new URL(r, lt.origin), t.protocol === r.protocol && t.host === r.host && (e || t.port === r.port)))(new URL(lt.origin), lt.navigator && /(msie|trident)/i.test(lt.navigator.userAgent)) : () => !0,
        St = lt.hasStandardBrowserEnv ? {
            write(t, e, r, n, i, s) {
                const o = [t + "=" + encodeURIComponent(e)];
                H.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), H.isString(n) && o.push("path=" + n), H.isString(i) && o.push("domain=" + i), !0 === s && o.push("secure"), document.cookie = o.join("; ")
            },
            read(t) {
                const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                return e ? decodeURIComponent(e[3]) : null
            },
            remove(t) {
                this.write(t, "", Date.now() - 864e5)
            }
        } : {
            write() {},
            read: () => null,
            remove() {}
        };

    function Nt(t, e, r) {
        let n = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
        return t && (n || 0 == r) ? function(t, e) {
            return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t
        }(t, e) : e
    }
    const Ot = t => t instanceof vt ? {
        ...t
    } : t;

    function Pt(t, e) {
        e = e || {};
        const r = {};

        function n(t, e, r, n) {
            return H.isPlainObject(t) && H.isPlainObject(e) ? H.merge.call({
                caseless: n
            }, t, e) : H.isPlainObject(e) ? H.merge({}, e) : H.isArray(e) ? e.slice() : e
        }

        function i(t, e, r, i) {
            return H.isUndefined(e) ? H.isUndefined(t) ? void 0 : n(void 0, t, 0, i) : n(t, e, 0, i)
        }

        function s(t, e) {
            if (!H.isUndefined(e)) return n(void 0, e)
        }

        function o(t, e) {
            return H.isUndefined(e) ? H.isUndefined(t) ? void 0 : n(void 0, t) : n(void 0, e)
        }

        function a(r, i, s) {
            return s in e ? n(r, i) : s in t ? n(void 0, r) : void 0
        }
        const c = {
            url: s,
            method: s,
            data: s,
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
            validateStatus: a,
            headers: (t, e, r) => i(Ot(t), Ot(e), 0, !0)
        };
        return H.forEach(Object.keys(Object.assign({}, t, e)), function(n) {
            const s = c[n] || i,
                o = s(t[n], e[n], n);
            H.isUndefined(o) && s !== a || (r[n] = o)
        }), r
    }
    var Ct = t => {
        const e = Pt({}, t);
        let r, {
            data: n,
            withXSRFToken: i,
            xsrfHeaderName: s,
            xsrfCookieName: o,
            headers: a,
            auth: c
        } = e;
        if (e.headers = a = vt.from(a), e.url = rt(Nt(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), c && a.set("Authorization", "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))), H.isFormData(n))
            if (lt.hasStandardBrowserEnv || lt.hasStandardBrowserWebWorkerEnv) a.setContentType(void 0);
            else if (!1 !== (r = a.getContentType())) {
            const [t, ...e] = r ? r.split(";").map(t => t.trim()).filter(Boolean) : [];
            a.setContentType([t || "multipart/form-data", ...e].join("; "))
        }
        if (lt.hasStandardBrowserEnv && (i && H.isFunction(i) && (i = i(e)), i || !1 !== i && kt(e.url))) {
            const t = s && o && St.read(o);
            t && a.set(s, t)
        }
        return e
    };
    var xt = "undefined" != typeof XMLHttpRequest && function(t) {
        return new Promise(function(e, r) {
            const n = Ct(t);
            let i = n.data;
            const s = vt.from(n.headers).normalize();
            let o, a, c, u, h, {
                responseType: l,
                onUploadProgress: d,
                onDownloadProgress: f
            } = n;

            function p() {
                u && u(), h && h(), n.cancelToken && n.cancelToken.unsubscribe(o), n.signal && n.signal.removeEventListener("abort", o)
            }
            let m = new XMLHttpRequest;

            function g() {
                if (!m) return;
                const n = vt.from("getAllResponseHeaders" in m && m.getAllResponseHeaders());
                _t(function(t) {
                    e(t), p()
                }, function(t) {
                    r(t), p()
                }, {
                    data: l && "text" !== l && "json" !== l ? m.response : m.responseText,
                    status: m.status,
                    statusText: m.statusText,
                    headers: n,
                    config: t,
                    request: m
                }), m = null
            }
            m.open(n.method.toUpperCase(), n.url, !0), m.timeout = n.timeout, "onloadend" in m ? m.onloadend = g : m.onreadystatechange = function() {
                m && 4 === m.readyState && (0 !== m.status || m.responseURL && 0 === m.responseURL.indexOf("file:")) && setTimeout(g)
            }, m.onabort = function() {
                m && (r(new z("Request aborted", z.ECONNABORTED, t, m)), m = null)
            }, m.onerror = function() {
                r(new z("Network Error", z.ERR_NETWORK, t, m)), m = null
            }, m.ontimeout = function() {
                let e = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
                const i = n.transitional || it;
                n.timeoutErrorMessage && (e = n.timeoutErrorMessage), r(new z(e, i.clarifyTimeoutError ? z.ETIMEDOUT : z.ECONNABORTED, t, m)), m = null
            }, void 0 === i && s.setContentType(null), "setRequestHeader" in m && H.forEach(s.toJSON(), function(t, e) {
                m.setRequestHeader(e, t)
            }), H.isUndefined(n.withCredentials) || (m.withCredentials = !!n.withCredentials), l && "json" !== l && (m.responseType = n.responseType), f && ([c, h] = Rt(f, !0), m.addEventListener("progress", c)), d && m.upload && ([a, u] = Rt(d), m.upload.addEventListener("progress", a), m.upload.addEventListener("loadend", u)), (n.cancelToken || n.signal) && (o = e => {
                m && (r(!e || e.type ? new Et(null, t, m) : e), m.abort(), m = null)
            }, n.cancelToken && n.cancelToken.subscribe(o), n.signal && (n.signal.aborted ? o() : n.signal.addEventListener("abort", o)));
            const y = function(t) {
                const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
                return e && e[1] || ""
            }(n.url);
            y && -1 === lt.protocols.indexOf(y) ? r(new z("Unsupported protocol " + y + ":", z.ERR_BAD_REQUEST, t)) : m.send(i || null)
        })
    };
    const Mt = (t, e) => {
            const {
                length: r
            } = t = t ? t.filter(Boolean) : [];
            if (e || r) {
                let r, n = new AbortController;
                const i = function(t) {
                    if (!r) {
                        r = !0, o();
                        const e = t instanceof Error ? t : this.reason;
                        n.abort(e instanceof z ? e : new Et(e instanceof Error ? e.message : e))
                    }
                };
                let s = e && setTimeout(() => {
                    s = null, i(new z(`timeout ${e} of ms exceeded`, z.ETIMEDOUT))
                }, e);
                const o = () => {
                    t && (s && clearTimeout(s), s = null, t.forEach(t => {
                        t.unsubscribe ? t.unsubscribe(i) : t.removeEventListener("abort", i)
                    }), t = null)
                };
                t.forEach(t => t.addEventListener("abort", i));
                const {
                    signal: a
                } = n;
                return a.unsubscribe = () => H.asap(o), a
            }
        },
        Ut = function*(t, e) {
            let r = t.byteLength;
            if (r < e) return void(yield t);
            let n, i = 0;
            for (; i < r;) n = i + e, yield t.slice(i, n), i = n
        },
        Dt = async function*(t) {
            if (t[Symbol.asyncIterator]) return void(yield* t);
            const e = t.getReader();
            try {
                for (;;) {
                    const {
                        done: t,
                        value: r
                    } = await e.read();
                    if (t) break;
                    yield r
                }
            } finally {
                await e.cancel()
            }
        }, Lt = (t, e, r, n) => {
            const i = async function*(t, e) {
                for await (const r of Dt(t)) yield* Ut(r, e)
            }(t, e);
            let s, o = 0,
                a = t => {
                    s || (s = !0, n && n(t))
                };
            return new ReadableStream({
                async pull(t) {
                    try {
                        const {
                            done: e,
                            value: n
                        } = await i.next();
                        if (e) return a(), void t.close();
                        let s = n.byteLength;
                        if (r) {
                            let t = o += s;
                            r(t)
                        }
                        t.enqueue(new Uint8Array(n))
                    } catch (t) {
                        throw a(t), t
                    }
                },
                cancel: t => (a(t), i.return())
            }, {
                highWaterMark: 2
            })
        }, Bt = "function" == typeof fetch && "function" == typeof Request && "function" == typeof Response, Ft = Bt && "function" == typeof ReadableStream, qt = Bt && ("function" == typeof TextEncoder ? (t => e => t.encode(e))(new TextEncoder) : async t => new Uint8Array(await new Response(t).arrayBuffer())), Gt = (t, ...e) => {
            try {
                return !!t(...e)
            } catch (t) {
                return !1
            }
        }, jt = Ft && Gt(() => {
            let t = !1;
            const e = new Request(lt.origin, {
                body: new ReadableStream,
                method: "POST",
                get duplex() {
                    return t = !0, "half"
                }
            }).headers.has("Content-Type");
            return t && !e
        }), Ht = Ft && Gt(() => H.isReadableStream(new Response("").body)), zt = {
            stream: Ht && (t => t.body)
        };
    var Kt;
    Bt && (Kt = new Response, ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => {
        !zt[t] && (zt[t] = H.isFunction(Kt[t]) ? e => e[t]() : (e, r) => {
            throw new z(`Response type '${t}' is not supported`, z.ERR_NOT_SUPPORT, r)
        })
    }));
    const Vt = async (t, e) => {
        const r = H.toFiniteNumber(t.getContentLength());
        return null == r ? (async t => {
            if (null == t) return 0;
            if (H.isBlob(t)) return t.size;
            if (H.isSpecCompliantForm(t)) {
                const e = new Request(lt.origin, {
                    method: "POST",
                    body: t
                });
                return (await e.arrayBuffer()).byteLength
            }
            return H.isArrayBufferView(t) || H.isArrayBuffer(t) ? t.byteLength : (H.isURLSearchParams(t) && (t += ""), H.isString(t) ? (await qt(t)).byteLength : void 0)
        })(e) : r
    };
    const Wt = {
        http: null,
        xhr: xt,
        fetch: Bt && (async t => {
            let {
                url: e,
                method: r,
                data: n,
                signal: i,
                cancelToken: s,
                timeout: o,
                onDownloadProgress: a,
                onUploadProgress: c,
                responseType: u,
                headers: h,
                withCredentials: l = "same-origin",
                fetchOptions: d
            } = Ct(t);
            u = u ? (u + "").toLowerCase() : "text";
            let f, p = Mt([i, s && s.toAbortSignal()], o);
            const m = p && p.unsubscribe && (() => {
                p.unsubscribe()
            });
            let g;
            try {
                if (c && jt && "get" !== r && "head" !== r && 0 !== (g = await Vt(h, n))) {
                    let t, r = new Request(e, {
                        method: "POST",
                        body: n,
                        duplex: "half"
                    });
                    if (H.isFormData(n) && (t = r.headers.get("content-type")) && h.setContentType(t), r.body) {
                        const [t, e] = Tt(g, Rt(It(c)));
                        n = Lt(r.body, 65536, t, e)
                    }
                }
                H.isString(l) || (l = l ? "include" : "omit");
                const i = "credentials" in Request.prototype;
                f = new Request(e, {
                    ...d,
                    signal: p,
                    method: r.toUpperCase(),
                    headers: h.normalize().toJSON(),
                    body: n,
                    duplex: "half",
                    credentials: i ? l : void 0
                });
                let s = await fetch(f, d);
                const o = Ht && ("stream" === u || "response" === u);
                if (Ht && (a || o && m)) {
                    const t = {};
                    ["status", "statusText", "headers"].forEach(e => {
                        t[e] = s[e]
                    });
                    const e = H.toFiniteNumber(s.headers.get("content-length")),
                        [r, n] = a && Tt(e, Rt(It(a), !0)) || [];
                    s = new Response(Lt(s.body, 65536, r, () => {
                        n && n(), m && m()
                    }), t)
                }
                u = u || "text";
                let y = await zt[H.findKey(zt, u) || "text"](s, t);
                return !o && m && m(), await new Promise((e, r) => {
                    _t(e, r, {
                        data: y,
                        headers: vt.from(s.headers),
                        status: s.status,
                        statusText: s.statusText,
                        config: t,
                        request: f
                    })
                })
            } catch (e) {
                if (m && m(), e && "TypeError" === e.name && /Load failed|fetch/i.test(e.message)) throw Object.assign(new z("Network Error", z.ERR_NETWORK, t, f), {
                    cause: e.cause || e
                });
                throw z.from(e, e && e.code, t, f)
            }
        })
    };
    H.forEach(Wt, (t, e) => {
        if (t) {
            try {
                Object.defineProperty(t, "name", {
                    value: e
                })
            } catch (t) {}
            Object.defineProperty(t, "adapterName", {
                value: e
            })
        }
    });
    const Jt = t => `- ${t}`,
        Yt = t => H.isFunction(t) || null === t || !1 === t;
    var Qt = t => {
        t = H.isArray(t) ? t : [t];
        const {
            length: e
        } = t;
        let r, n;
        const i = {};
        for (let s = 0; s < e; s++) {
            let e;
            if (r = t[s], n = r, !Yt(r) && (n = Wt[(e = String(r)).toLowerCase()], void 0 === n)) throw new z(`Unknown adapter '${e}'`);
            if (n) break;
            i[e || "#" + s] = n
        }
        if (!n) {
            const t = Object.entries(i).map(([t, e]) => `adapter ${t} ` + (!1 === e ? "is not supported by the environment" : "is not available in the build"));
            throw new z("There is no suitable adapter to dispatch the request " + (e ? t.length > 1 ? "since :\n" + t.map(Jt).join("\n") : " " + Jt(t[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT")
        }
        return n
    };

    function Xt(t) {
        if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted) throw new Et(null, t)
    }

    function $t(t) {
        Xt(t), t.headers = vt.from(t.headers), t.data = At.call(t, t.transformRequest), -1 !== ["post", "put", "patch"].indexOf(t.method) && t.headers.setContentType("application/x-www-form-urlencoded", !1);
        return Qt(t.adapter || ft.adapter)(t).then(function(e) {
            return Xt(t), e.data = At.call(t, t.transformResponse, e), e.headers = vt.from(e.headers), e
        }, function(e) {
            return bt(e) || (Xt(t), e && e.response && (e.response.data = At.call(t, t.transformResponse, e.response), e.response.headers = vt.from(e.response.headers))), Promise.reject(e)
        })
    }
    const Zt = "1.10.0",
        te = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
        te[t] = function(r) {
            return typeof r === t || "a" + (e < 1 ? "n " : " ") + t
        }
    });
    const ee = {};
    te.transitional = function(t, e, r) {
        function n(t, e) {
            return "[Axios v" + Zt + "] Transitional option '" + t + "'" + e + (r ? ". " + r : "")
        }
        return (r, i, s) => {
            if (!1 === t) throw new z(n(i, " has been removed" + (e ? " in " + e : "")), z.ERR_DEPRECATED);
            return e && !ee[i] && (ee[i] = !0, console.warn(n(i, " has been deprecated since v" + e + " and will be removed in the near future"))), !t || t(r, i, s)
        }
    }, te.spelling = function(t) {
        return (e, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0)
    };
    var re = {
        assertOptions: function(t, e, r) {
            if ("object" != typeof t) throw new z("options must be an object", z.ERR_BAD_OPTION_VALUE);
            const n = Object.keys(t);
            let i = n.length;
            for (; i-- > 0;) {
                const s = n[i],
                    o = e[s];
                if (o) {
                    const e = t[s],
                        r = void 0 === e || o(e, s, t);
                    if (!0 !== r) throw new z("option " + s + " must be " + r, z.ERR_BAD_OPTION_VALUE);
                    continue
                }
                if (!0 !== r) throw new z("Unknown option " + s, z.ERR_BAD_OPTION)
            }
        },
        validators: te
    };
    const ne = re.validators;
    let ie = class {
        constructor(t) {
            this.defaults = t || {}, this.interceptors = {
                request: new nt,
                response: new nt
            }
        }
        async request(t, e) {
            try {
                return await this._request(t, e)
            } catch (t) {
                if (t instanceof Error) {
                    let e = {};
                    Error.captureStackTrace ? Error.captureStackTrace(e) : e = new Error;
                    const r = e.stack ? e.stack.replace(/^.+\n/, "") : "";
                    try {
                        t.stack ? r && !String(t.stack).endsWith(r.replace(/^.+\n.+\n/, "")) && (t.stack += "\n" + r) : t.stack = r
                    } catch (t) {}
                }
                throw t
            }
        }
        _request(t, e) {
            "string" == typeof t ? (e = e || {}).url = t : e = t || {}, e = Pt(this.defaults, e);
            const {
                transitional: r,
                paramsSerializer: n,
                headers: i
            } = e;
            void 0 !== r && re.assertOptions(r, {
                silentJSONParsing: ne.transitional(ne.boolean),
                forcedJSONParsing: ne.transitional(ne.boolean),
                clarifyTimeoutError: ne.transitional(ne.boolean)
            }, !1), null != n && (H.isFunction(n) ? e.paramsSerializer = {
                serialize: n
            } : re.assertOptions(n, {
                encode: ne.function,
                serialize: ne.function
            }, !0)), void 0 !== e.allowAbsoluteUrls || (void 0 !== this.defaults.allowAbsoluteUrls ? e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : e.allowAbsoluteUrls = !0), re.assertOptions(e, {
                baseUrl: ne.spelling("baseURL"),
                withXsrfToken: ne.spelling("withXSRFToken")
            }, !0), e.method = (e.method || this.defaults.method || "get").toLowerCase();
            let s = i && H.merge(i.common, i[e.method]);
            i && H.forEach(["delete", "get", "head", "post", "put", "patch", "common"], t => {
                delete i[t]
            }), e.headers = vt.concat(s, i);
            const o = [];
            let a = !0;
            this.interceptors.request.forEach(function(t) {
                "function" == typeof t.runWhen && !1 === t.runWhen(e) || (a = a && t.synchronous, o.unshift(t.fulfilled, t.rejected))
            });
            const c = [];
            let u;
            this.interceptors.response.forEach(function(t) {
                c.push(t.fulfilled, t.rejected)
            });
            let h, l = 0;
            if (!a) {
                const t = [$t.bind(this), void 0];
                for (t.unshift.apply(t, o), t.push.apply(t, c), h = t.length, u = Promise.resolve(e); l < h;) u = u.then(t[l++], t[l++]);
                return u
            }
            h = o.length;
            let d = e;
            for (l = 0; l < h;) {
                const t = o[l++],
                    e = o[l++];
                try {
                    d = t(d)
                } catch (t) {
                    e.call(this, t);
                    break
                }
            }
            try {
                u = $t.call(this, d)
            } catch (t) {
                return Promise.reject(t)
            }
            for (l = 0, h = c.length; l < h;) u = u.then(c[l++], c[l++]);
            return u
        }
        getUri(t) {
            return rt(Nt((t = Pt(this.defaults, t)).baseURL, t.url, t.allowAbsoluteUrls), t.params, t.paramsSerializer)
        }
    };
    H.forEach(["delete", "get", "head", "options"], function(t) {
        ie.prototype[t] = function(e, r) {
            return this.request(Pt(r || {}, {
                method: t,
                url: e,
                data: (r || {}).data
            }))
        }
    }), H.forEach(["post", "put", "patch"], function(t) {
        function e(e) {
            return function(r, n, i) {
                return this.request(Pt(i || {}, {
                    method: t,
                    headers: e ? {
                        "Content-Type": "multipart/form-data"
                    } : {},
                    url: r,
                    data: n
                }))
            }
        }
        ie.prototype[t] = e(), ie.prototype[t + "Form"] = e(!0)
    });
    const se = {
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
    Object.entries(se).forEach(([t, e]) => {
        se[e] = t
    });
    const oe = function e(r) {
        const n = new ie(r),
            i = t(ie.prototype.request, n);
        return H.extend(i, ie.prototype, n, {
            allOwnKeys: !0
        }), H.extend(i, n, null, {
            allOwnKeys: !0
        }), i.create = function(t) {
            return e(Pt(r, t))
        }, i
    }(ft);
    oe.Axios = ie, oe.CanceledError = Et, oe.CancelToken = class t {
        constructor(t) {
            if ("function" != typeof t) throw new TypeError("executor must be a function.");
            let e;
            this.promise = new Promise(function(t) {
                e = t
            });
            const r = this;
            this.promise.then(t => {
                if (!r._listeners) return;
                let e = r._listeners.length;
                for (; e-- > 0;) r._listeners[e](t);
                r._listeners = null
            }), this.promise.then = t => {
                let e;
                const n = new Promise(t => {
                    r.subscribe(t), e = t
                }).then(t);
                return n.cancel = function() {
                    r.unsubscribe(e)
                }, n
            }, t(function(t, n, i) {
                r.reason || (r.reason = new Et(t, n, i), e(r.reason))
            })
        }
        throwIfRequested() {
            if (this.reason) throw this.reason
        }
        subscribe(t) {
            this.reason ? t(this.reason) : this._listeners ? this._listeners.push(t) : this._listeners = [t]
        }
        unsubscribe(t) {
            if (!this._listeners) return;
            const e = this._listeners.indexOf(t); - 1 !== e && this._listeners.splice(e, 1)
        }
        toAbortSignal() {
            const t = new AbortController,
                e = e => {
                    t.abort(e)
                };
            return this.subscribe(e), t.signal.unsubscribe = () => this.unsubscribe(e), t.signal
        }
        static source() {
            let e;
            const r = new t(function(t) {
                e = t
            });
            return {
                token: r,
                cancel: e
            }
        }
    }, oe.isCancel = bt, oe.VERSION = Zt, oe.toFormData = X, oe.AxiosError = z, oe.Cancel = oe.CanceledError, oe.all = function(t) {
        return Promise.all(t)
    }, oe.spread = function(t) {
        return function(e) {
            return t.apply(null, e)
        }
    }, oe.isAxiosError = function(t) {
        return H.isObject(t) && !0 === t.isAxiosError
    }, oe.mergeConfig = Pt, oe.AxiosHeaders = vt, oe.formToJSON = t => dt(H.isHTMLForm(t) ? new FormData(t) : t), oe.getAdapter = Qt, oe.HttpStatusCode = se, oe.default = oe;
    const {
        Axios: ae,
        AxiosError: ce,
        CanceledError: ue,
        isCancel: he,
        CancelToken: le,
        VERSION: de,
        all: fe,
        Cancel: pe,
        isAxiosError: me,
        spread: ge,
        toFormData: ye,
        AxiosHeaders: we,
        HttpStatusCode: ve,
        formToJSON: Ae,
        getAdapter: be,
        mergeConfig: Ee
    } = oe;
    var _e;
    ! function(t) {
        t.AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR", t.INVALID_CONFIGURATION = "INVALID_CONFIGURATION", t.NOT_LOGGED_IN_ERROR = "NOT_LOGGED_IN_ERROR", t.ALREADY_LOGGED_IN_ERROR = "ALREADY_LOGGED_IN_ERROR", t.REFRESH_TOKEN_ERROR = "REFRESH_TOKEN_ERROR", t.USER_REGISTRATION_ERROR = "USER_REGISTRATION_ERROR", t.LOGOUT_ERROR = "LOGOUT_ERROR", t.OPERATION_NOT_SUPPORTED_ERROR = "OPERATION_NOT_SUPPORTED_ERROR", t.MISSING_SIGNER_ERROR = "MISSING_SIGNER_ERROR", t.USER_NOT_AUTHORIZED_ON_ECOSYSTEM = "USER_NOT_AUTHORIZED_ON_ECOSYSTEM", t.INTERNAL_ERROR = "INTERNAL_ERROR"
    }(_e || (_e = {}));
    let Re = class extends Error {
        type;
        data;
        constructor(t, e, r = {}) {
            super(t), this.type = e, this.data = r
        }
    };
    const Te = async (t, e, r) => {
        try {
            return await t()
        } catch (t) {
            let n;
            const i = {};
            let s;
            me(t) ? (s = t.response?.status, n = t.response?.data && t.response.data.error && function(t) {
                return "type" in t && "message" in t
            }(t.response.data.error) ? t.response.data.error.message : t.message) : n = t.message;
            const o = void 0 !== s && e[s] ? e[s] : e.default,
                a = new Re(n, o, i);
            throw void 0 !== s && e[s] || r?.(t, a), a
        }
    };
    var Ie, ke, Se, Ne, Oe, Pe, Ce, xe, Me, Ue, De, Le, Be, Fe;
    ! function(t) {
        t[t.NONE = 0] = "NONE", t[t.UNAUTHENTICATED = 1] = "UNAUTHENTICATED", t[t.EMBEDDED_SIGNER_NOT_CONFIGURED = 2] = "EMBEDDED_SIGNER_NOT_CONFIGURED", t[t.CREATING_ACCOUNT = 3] = "CREATING_ACCOUNT", t[t.READY = 4] = "READY"
    }(Ie || (Ie = {})),
    function(t) {
        t.LOGGED_OUT = "loggedOut", t.SWITCH_ACCOUNT = "switchAccount", t.TOKEN_REFRESHED = "tokenRefreshed"
    }(ke || (ke = {})),
    function(t) {
        t.PASSWORD = "password", t.AUTOMATIC = "automatic"
    }(Se || (Se = {})),
    function(t) {
        t.UPGRADEABLE_V4 = "Upgradeable_v04", t.MANAGED_V4 = "Managed_v04", t.ERC6551_V4 = "ERC6551_v04", t.ERC6551_V5 = "ERC6551_v05", t.RECOVERABLE_V4 = "Recoverable_v04", t.MANAGED_V5 = "Managed_v05", t.UPGRADEABLE_V5 = "Upgradeable_v05", t.UPGRADEABLE_V6 = "Upgradeable_v06", t.ZKSYNC_UPGRADEABLE_V1 = "zksync_upgradeable_v1", t.ZKSYNC_UPGRADEABLE_V2 = "zksync_upgradeable_v2"
    }(Ne || (Ne = {})),
    function(t) {
        t.OPENFORT = "openfort", t.THIRD_PARTY = "thirdParty"
    }(Oe || (Oe = {})),
    function(t) {
        t.ID_TOKEN = "idToken", t.CUSTOM_TOKEN = "customToken"
    }(Pe || (Pe = {})),
    function(t) {
        t.ACCELBYTE = "accelbyte", t.FIREBASE = "firebase", t.LOOTLOCKER = "lootlocker", t.PLAYFAB = "playfab", t.SUPABASE = "supabase", t.CUSTOM = "custom", t.OIDC = "oidc"
    }(Ce || (Ce = {})),
    function(t) {
        t.EMAIL = "email", t.WALLET = "wallet"
    }(xe || (xe = {})),
    function(t) {
        t.GOOGLE = "google", t.TWITTER = "twitter", t.APPLE = "apple", t.FACEBOOK = "facebook", t.DISCORD = "discord", t.EPIC_GAMES = "epic_games", t.LINE = "line"
    }(Me || (Me = {})),
    function(t) {
        t.ACTION_VERIFY_EMAIL = "verify_email"
    }(Ue || (Ue = {})),
    function(t) {
        t.PLAIN = "plain", t.S256 = "S256"
    }(De || (De = {})),
    function(t) {
        t.EOA = "Externally Owned Account", t.SMART_ACCOUNT = "Smart Account"
    }(Le || (Le = {})),
    function(t) {
        t.EVM = "EVM", t.SVM = "SVM"
    }(Be || (Be = {})),
    function(t) {
        t.LOADED = "loaded", t.CONFIGURE = "configure", t.CONFIGURED = "configured", t.RECOVER = "recover", t.RECOVERED = "recovered", t.CREATE = "create", t.CREATED = "created", t.UPDATE_AUTHENTICATION = "update-authentication", t.AUTHENTICATION_UPDATED = "authentication-updated", t.SIGN = "sign", t.SET_RECOVERY_METHOD = "set-recovery-method", t.SWITCH_CHAIN = "switch-chain", t.CHAIN_SWITCHED = "chain-switched", t.EXPORT = "export", t.SIGNED = "signed", t.LOGOUT = "logout", t.LOGGED_OUT = "logged-out", t.GET_CURRENT_DEVICE = "get-current-device", t.CURRENT_DEVICE = "current-device", t.PING = "ping", t.PONG = "pong"
    }(Fe || (Fe = {}));
    let qe = class {
            uuid;
            action = Fe.GET_CURRENT_DEVICE;
            playerID;
            constructor(t, e) {
                this.uuid = t, this.playerID = e
            }
        },
        Ge = class {
            uuid;
            action = Fe.SIGN;
            message;
            requireArrayify;
            requireHash;
            requestConfiguration;
            constructor(t, e, r, n, i) {
                this.uuid = t, this.message = e, this.requireArrayify = r, this.requireHash = n, this.requestConfiguration = i
            }
        },
        je = class {
            uuid;
            action = Fe.SWITCH_CHAIN;
            chainId;
            requestConfiguration;
            constructor(t, e, r) {
                this.uuid = t, this.chainId = e, this.requestConfiguration = r
            }
        },
        He = class {
            uuid;
            action = Fe.EXPORT;
            requestConfiguration;
            constructor(t, e) {
                this.uuid = t, this.requestConfiguration = e
            }
        },
        ze = class {
            uuid;
            action = Fe.SET_RECOVERY_METHOD;
            recoveryMethod;
            recoveryPassword;
            encryptionSession;
            requestConfiguration;
            constructor(t, e, r, n, i) {
                this.uuid = t, this.recoveryMethod = e, this.recoveryPassword = r, this.encryptionSession = n, this.requestConfiguration = i
            }
        };

    function Ke(t) {
        return "error" in t
    }
    let Ve = class {
        uuid;
        action = Fe.UPDATE_AUTHENTICATION;
        accessToken;
        recovery;
        constructor(t, e, r) {
            this.uuid = t, this.accessToken = e, this.recovery = r
        }
    };
    var We, Je;
    ! function(t) {
        t.OPENFORT = "openfort"
    }(We || (We = {})),
    function(t) {
        t.AUTHENTICATION = "openfort.authentication", t.CONFIGURATION = "openfort.configuration", t.ACCOUNT = "openfort.account", t.TEST = "openfort.test", t.SESSION = "openfort.session", t.PKCE_STATE = "openfort.pkce_state", t.PKCE_VERIFIER = "openfort.pkce_verifier"
    }(Je || (Je = {}));
    let Ye, Qe = class t {
            constructor(t) {
                this.user = t.user, this.id = t.id, this.chainType = t.chainType, this.address = t.address, this.accountType = t.accountType, this.chainId = t.chainId, this.createdAt = t.createdAt, this.implementationType = t.implementationType, this.factoryAddress = t.factoryAddress, this.salt = t.salt, this.ownerAddress = t.ownerAddress, this.type = t.type
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
            save(t) {
                t.save(Je.ACCOUNT, JSON.stringify({
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
                const r = await e.get(Je.ACCOUNT);
                if (!r) return null;
                try {
                    const e = JSON.parse(r);
                    return new t(e)
                } catch {
                    return null
                }
            }
        },
        Xe = class extends Error {
            code;
            constructor(t, e) {
                super(e), this.name = "PenpalError", this.code = t
            }
        };

    function $e() {
        if ("undefined" != typeof crypto && crypto.randomUUID) return crypto.randomUUID();
        const t = new Uint8Array(16);
        return crypto.getRandomValues(t), t[6] = 15 & t[6] | 64, t[8] = 63 & t[8] | 128, [...t].map((t, e) => {
            const r = t.toString(16).padStart(2, "0");
            return [4, 6, 8, 10].includes(e) ? `-${r}` : r
        }).join("")
    }

    function Ze(t) {
        return `0x${t.toString(16)}`
    }

    function tr(t) {
        let e = "";
        const r = t.startsWith("0x") ? t.slice(2) : t;
        for (let t = 0; t < r.length; t += 2) {
            const n = parseInt(r.substring(t, t + 2), 16);
            0 !== n && (e += String.fromCharCode(n))
        }
        return e
    }
    const er = t => ({
            name: t.name,
            message: t.message,
            stack: t.stack,
            penpalCode: t instanceof Xe ? t.code : void 0
        }),
        rr = Symbol("Reply");
    let nr = class {
        value;
        transferables;
        #t = rr;
        constructor(t, e) {
            this.value = t, this.transferables = e?.transferables
        }
    };
    var ir = "penpal";
    const sr = t => "object" == typeof t && null !== t,
        or = t => "function" == typeof t,
        ar = t => "SYN" === t.type,
        cr = t => "ACK1" === t.type,
        ur = t => "ACK2" === t.type,
        hr = t => "CALL" === t.type,
        lr = t => "REPLY" === t.type,
        dr = (t, e = []) => {
            const r = [];
            for (const n of Object.keys(t)) {
                const i = t[n];
                or(i) ? r.push([...e, n]) : sr(i) && r.push(...dr(i, [...e, n]))
            }
            return r
        },
        fr = t => t.join("."),
        pr = (t, e, r) => ({
            namespace: ir,
            channel: t,
            type: "REPLY",
            callId: e,
            isError: !0,
            ...r instanceof Error ? {
                value: er(r),
                isSerializedErrorInstance: !0
            } : {
                value: r
            }
        }),
        mr = (t, e, r, n) => {
            let i = !1;
            const s = async s => {
                if (i) return;
                if (!hr(s)) return;
                n?.(`Received ${fr(s.methodPath)}() call`, s);
                const {
                    methodPath: o,
                    args: a,
                    id: c
                } = s;
                let u, h;
                try {
                    const t = ((t, e) => {
                        const r = t.reduce((t, e) => sr(t) ? t[e] : void 0, e);
                        return or(r) ? r : void 0
                    })(o, e);
                    if (!t) throw new Xe("METHOD_NOT_FOUND", `Method \`${fr(o)}\` is not found.`);
                    let n = await t(...a);
                    n instanceof nr && (h = n.transferables, n = await n.value), u = {
                        namespace: ir,
                        channel: r,
                        type: "REPLY",
                        callId: c,
                        value: n
                    }
                } catch (t) {
                    u = pr(r, c, t)
                }
                if (!i) try {
                    n?.(`Sending ${fr(o)}() reply`, u), t.sendMessage(u, h)
                } catch (e) {
                    throw "DataCloneError" === e.name && (u = pr(r, c, e), n?.(`Sending ${fr(o)}() reply`, u), t.sendMessage(u)), e
                }
            };
            return t.addMessageHandler(s), () => {
                i = !0, t.removeMessageHandler(s)
            }
        },
        gr = Symbol("CallOptions");
    let yr = class {
        transferables;
        timeout;
        #e = gr;
        constructor(t) {
            this.transferables = t?.transferables, this.timeout = t?.timeout
        }
    };
    const wr = new Set(["apply", "call", "bind"]),
        vr = (t, e, r = []) => new Proxy(r.length ? () => {} : Object.create(null), {
            get(n, i) {
                if ("then" !== i) return r.length && wr.has(i) ? Reflect.get(n, i) : vr(t, e, [...r, i])
            },
            apply: (e, n, i) => t(r, i)
        }),
        Ar = t => new Xe("CONNECTION_DESTROYED", `Method call ${fr(t)}() failed due to destroyed connection`),
        br = (t, e, r) => {
            let n = !1;
            const i = new Map,
                s = t => {
                    if (!lr(t)) return;
                    const {
                        callId: e,
                        value: n,
                        isError: s,
                        isSerializedErrorInstance: o
                    } = t, a = i.get(e);
                    a && (i.delete(e), r?.(`Received ${fr(a.methodPath)}() call`, t), s ? a.reject(o ? (({
                        name: t,
                        message: e,
                        stack: r,
                        penpalCode: n
                    }) => {
                        const i = n ? new Xe(n, e) : new Error(e);
                        return i.name = t, i.stack = r, i
                    })(n) : n) : a.resolve(n))
                };
            return t.addMessageHandler(s), {
                remoteProxy: vr((s, o) => {
                    if (n) throw Ar(s);
                    const a = $e(),
                        c = o[o.length - 1],
                        u = c instanceof yr,
                        {
                            timeout: h,
                            transferables: l
                        } = u ? c : {},
                        d = u ? o.slice(0, -1) : o;
                    return new Promise((n, o) => {
                        const c = void 0 !== h ? window.setTimeout(() => {
                            i.delete(a), o(new Xe("METHOD_CALL_TIMEOUT", `Method call ${fr(s)}() timed out after ${h}ms`))
                        }, h) : void 0;
                        i.set(a, {
                            methodPath: s,
                            resolve: n,
                            reject: o,
                            timeoutId: c
                        });
                        try {
                            const n = {
                                namespace: ir,
                                channel: e,
                                type: "CALL",
                                id: a,
                                methodPath: s,
                                args: d
                            };
                            r?.(`Sending ${fr(s)}() call`, n), t.sendMessage(n, l)
                        } catch (n) {
                            o(new Xe("TRANSMISSION_FAILED", n.message))
                        }
                    })
                }, r),
                destroy: () => {
                    n = !0, t.removeMessageHandler(s);
                    for (const {
                            methodPath: t,
                            reject: e,
                            timeoutId: r
                        }
                        of i.values()) clearTimeout(r), e(Ar(t));
                    i.clear()
                }
            }
        };
    let Er = class extends Error {
        constructor(t) {
            super(`You've hit a bug in Penpal. Please file an issue with the following information: ${t}`)
        }
    };
    const _r = "deprecated-penpal";
    var Rr, Tr;
    ! function(t) {
        t.Call = "call", t.Reply = "reply", t.Syn = "syn", t.SynAck = "synAck", t.Ack = "ack"
    }(Rr || (Rr = {})),
    function(t) {
        t.Fulfilled = "fulfilled", t.Rejected = "rejected"
    }(Tr || (Tr = {}));
    const Ir = t => t.split("."),
        kr = t => t.join("."),
        Sr = t => new Er(`Unexpected message to translate: ${JSON.stringify(t)}`),
        Nr = ({
            messenger: t,
            methods: e,
            timeout: r,
            channel: n,
            log: i
        }) => {
            const s = $e();
            let o;
            const a = [];
            let c = !1;
            const u = dr(e),
                {
                    promise: h,
                    resolve: l,
                    reject: d
                } = (() => {
                    let t, e;
                    return {
                        promise: new Promise((r, n) => {
                            t = r, e = n
                        }),
                        resolve: t,
                        reject: e
                    }
                })(),
                f = setTimeout(() => {
                    d(new Xe("CONNECTION_TIMEOUT", `Connection timed out after ${r}ms`))
                }, r),
                p = () => {
                    for (const t of a) t()
                },
                m = () => {
                    if (c) return;
                    a.push(mr(t, e, n, i));
                    const {
                        remoteProxy: r,
                        destroy: s
                    } = br(t, n, i);
                    a.push(s), clearTimeout(f), c = !0, l({
                        remoteProxy: r,
                        destroy: p
                    })
                },
                g = () => {
                    const e = {
                        namespace: ir,
                        type: "SYN",
                        channel: n,
                        participantId: s
                    };
                    i?.("Sending handshake SYN", e);
                    try {
                        t.sendMessage(e)
                    } catch (e) {
                        d(new Xe("TRANSMISSION_FAILED", e.message))
                    }
                },
                y = e => {
                    ar(e) && (e => {
                        if (i?.("Received handshake SYN", e), e.participantId === o && o !== _r) return;
                        if (o = e.participantId, g(), !(s > o || o === _r)) return;
                        const r = {
                            namespace: ir,
                            channel: n,
                            type: "ACK1",
                            methodPaths: u
                        };
                        i?.("Sending handshake ACK1", r);
                        try {
                            t.sendMessage(r)
                        } catch (e) {
                            d(new Xe("TRANSMISSION_FAILED", e.message))
                        }
                    })(e), cr(e) && (e => {
                        i?.("Received handshake ACK1", e);
                        const r = {
                            namespace: ir,
                            channel: n,
                            type: "ACK2"
                        };
                        i?.("Sending handshake ACK2", r);
                        try {
                            t.sendMessage(r)
                        } catch (e) {
                            return void d(new Xe("TRANSMISSION_FAILED", e.message))
                        }
                        m()
                    })(e), ur(e) && (t => {
                        i?.("Received handshake ACK2", t), m()
                    })(e)
                };
            return t.addMessageHandler(y), a.push(() => t.removeMessageHandler(y)), g(), h
        },
        Or = new WeakSet,
        Pr = ({
            messenger: t,
            methods: e = {},
            timeout: r,
            channel: n,
            log: i
        }) => {
            if (!t) throw new Xe("INVALID_ARGUMENT", "messenger must be defined");
            if (Or.has(t)) throw new Xe("INVALID_ARGUMENT", "A messenger can only be used for a single connection");
            Or.add(t);
            const s = [t.destroy],
                o = (t => {
                    let e, r = !1;
                    return (...n) => (r || (r = !0, e = t(...n)), e)
                })(e => {
                    if (e) {
                        const r = {
                            namespace: ir,
                            channel: n,
                            type: "DESTROY"
                        };
                        try {
                            t.sendMessage(r)
                        } catch (e) {}
                    }
                    for (const t of s) t();
                    i?.("Connection destroyed")
                }),
                a = t => (t => sr(t) && t.namespace === ir)(t) && t.channel === n;
            return {
                promise: (async () => {
                    try {
                        t.initialize({
                            log: i,
                            validateReceivedMessage: a
                        }), t.addMessageHandler(t => {
                            (t => "DESTROY" === t.type)(t) && o(!1)
                        });
                        const {
                            remoteProxy: c,
                            destroy: u
                        } = await Nr({
                            messenger: t,
                            methods: e,
                            timeout: r,
                            channel: n,
                            log: i
                        });
                        return s.push(u), c
                    } catch (t) {
                        throw o(!0), t
                    }
                })(),
                destroy: () => {
                    o(!0)
                }
            }
        };
    let Cr = null,
        xr = class {
            publishableKey;
            constructor(t) {
                this.publishableKey = t.publishableKey
            }
        },
        Mr = class {
            shieldPublishableKey;
            shieldEncryptionKey;
            debug = !1;
            constructor(t) {
                this.shieldPublishableKey = t.shieldPublishableKey, this.shieldEncryptionKey = t.shieldEncryptionKey, this.debug = t.shieldDebug || !1
            }
        },
        Ur = class t {
            baseConfiguration;
            shieldConfiguration;
            shieldUrl;
            iframeUrl;
            backendUrl;
            storage;
            constructor({
                baseConfiguration: t,
                shieldConfiguration: e,
                overrides: r
            }) {
                this.shieldConfiguration = e, this.baseConfiguration = t, this.backendUrl = r?.backendUrl || "https://api.openfort.io", this.iframeUrl = r?.iframeUrl || "https://embed.openfort.io", this.iframeUrl = `${this.iframeUrl}/iframe/${this.baseConfiguration.publishableKey}`, e?.debug && (this.iframeUrl = `${this.iframeUrl}?debug=true`), this.shieldUrl = r?.shieldUrl || "https://shield.openfort.io", this.storage = r?.storage, r?.crypto?.digest && function(t) {
                    Ye = t
                }(r.crypto.digest), this.save()
            }
            static async isStorageAccessible(t) {
                try {
                    const e = Je.TEST,
                        r = "openfort_storage_test";
                    t.save(e, r);
                    const n = await t.get(e);
                    return t.remove(e), n === r
                } catch (t) {
                    return !1
                }
            }
            static fromStorage(t) {
                return t ? this.loadFromStorage(t) : Cr
            }
            static async loadFromStorage(e) {
                const r = await e.get(Je.CONFIGURATION);
                if (!r) return null;
                try {
                    const n = JSON.parse(r),
                        i = new xr({
                            publishableKey: n.publishableKey
                        });
                    let s;
                    n.shieldPublishableKey && (s = new Mr({
                        shieldPublishableKey: n.shieldPublishableKey,
                        shieldEncryptionKey: n.shieldEncryptionKey,
                        shieldDebug: n.shieldDebug
                    }));
                    const o = {
                        backendUrl: n.backendUrl,
                        iframeUrl: n.iframeUrl,
                        shieldUrl: n.shieldUrl,
                        storage: e
                    };
                    return new t({
                        baseConfiguration: i,
                        shieldConfiguration: s,
                        overrides: o
                    })
                } catch {
                    return null
                }
            }
            save() {
                Cr = this, this.storage && this.storage.save(Je.CONFIGURATION, JSON.stringify({
                    publishableKey: this.baseConfiguration.publishableKey,
                    backendUrl: this.backendUrl,
                    iframeUrl: this.iframeUrl,
                    shieldUrl: this.shieldUrl,
                    shieldPublishableKey: this.shieldConfiguration?.shieldPublishableKey,
                    shieldEncryptionKey: this.shieldConfiguration?.shieldEncryptionKey,
                    shieldDebug: this.shieldConfiguration?.debug
                }))
            }
        };

    function Dr(...t) {
        const e = Ur.fromStorage();
        e?.shieldConfiguration?.debug && console.log(`${(new Date).toISOString()} [SDK]`, ...t)
    }
    let Lr = class t {
            type;
            token;
            player;
            refreshToken;
            thirdPartyProvider;
            thirdPartyTokenType;
            constructor(t, e, r, n, i, s) {
                this.type = t, this.token = e, this.player = r, this.refreshToken = n, this.thirdPartyProvider = i, this.thirdPartyTokenType = s
            }
            get provider() {
                return this.thirdPartyProvider
            }
            get tokenType() {
                return this.thirdPartyTokenType
            }
            save(t) {
                t.save(Je.AUTHENTICATION, JSON.stringify({
                    type: this.type,
                    token: this.token,
                    player: this.player,
                    refreshToken: this.refreshToken,
                    thirdPartyProvider: this.thirdPartyProvider,
                    thirdPartyTokenType: this.thirdPartyTokenType
                }))
            }
            static async fromStorage(e) {
                const r = await e.get(Je.AUTHENTICATION);
                if (!r) return null;
                try {
                    const e = JSON.parse(r);
                    return new t(e.type, e.token, e.player, e.refreshToken, e.thirdPartyProvider, e.thirdPartyTokenType)
                } catch {
                    return null
                }
            }
        },
        Br = class {
            messagePoster;
            handlers = new Set;
            isInitialized = !1;
            hasBeenUsed = !1;
            validateMessage;
            messageBuffer = [];
            nextNumericId = 1;
            stringToNumericId = new Map;
            numericToStringId = new Map;
            constructor(t) {
                if (this.messagePoster = t, !t || "function" != typeof t.postMessage) throw new Xe("CONNECTION_DESTROYED", "Invalid message poster provided");
                Dr("ReactNativeMessenger created")
            }
            initialize(t) {
                if (this.isInitialized) return void Dr("ReactNativeMessenger already initialized");
                if (this.hasBeenUsed) throw new Xe("CONNECTION_DESTROYED", "A messenger can only be used for a single connection");
                this.validateMessage = t?.validateReceivedMessage, this.isInitialized = !0, this.hasBeenUsed = !0, Dr(`ReactNativeMessenger initialized, processing ${this.messageBuffer.length} buffered messages`);
                const e = [...this.messageBuffer];
                this.messageBuffer = [], e.forEach(t => {
                    this.processMessage(t)
                })
            }
            sendMessage(t, e) {
                if (!this.isInitialized) throw new Xe("CONNECTION_DESTROYED", "ReactNativeMessenger not initialized");
                e && e.length > 0 && Dr("React Native: Ignoring transferables (not supported)"), Dr("ReactNativeMessenger sending message:", t);
                try {
                    let e = t;
                    "penpal" === t?.namespace && (e = this.convertToDeprecatedFormat(t), Dr("React Native: Converted message:", e));
                    const r = JSON.stringify(e);
                    this.messagePoster.postMessage(r)
                } catch (t) {
                    throw new Xe("TRANSMISSION_FAILED", `Failed to send message through React Native WebView: ${t instanceof Error?t.message:String(t)}`)
                }
            }
            addMessageHandler(t) {
                this.handlers.add(t), Dr(`Message handler added, total handlers: ${this.handlers.size}`)
            }
            removeMessageHandler(t) {
                this.handlers.delete(t), Dr(`Message handler removed, total handlers: ${this.handlers.size}`)
            }
            handleMessage(t) {
                if (Dr("[HANDSHAKE DEBUG] ReactNativeMessenger.handleMessage called with:", t), !this.isInitialized) {
                    return Dr(`[HANDSHAKE DEBUG] ReactNativeMessenger: Message received but not initialized, buffering message (${this.messageBuffer.length+1} total)`), void this.messageBuffer.push(t)
                }
                Dr("[HANDSHAKE DEBUG] ReactNativeMessenger is initialized, processing message"), this.processMessage(t)
            }
            processMessage(t) {
                Dr("[HANDSHAKE DEBUG] ReactNativeMessenger processing message:", t);
                const e = this.convertFromDeprecatedFormat(t);
                if (Dr("[HANDSHAKE DEBUG] Message after conversion:", e), this.validateMessage && !this.validateMessage(e)) return void Dr("[HANDSHAKE DEBUG] Message validation failed:", e);
                Dr(`[HANDSHAKE DEBUG] Routing message to ${this.handlers.size} handlers`);
                let r = 0;
                this.handlers.forEach(t => {
                    r++;
                    try {
                        Dr(`[HANDSHAKE DEBUG] Calling handler ${r}/${this.handlers.size}`), t(e), Dr(`[HANDSHAKE DEBUG] Handler ${r} completed successfully`)
                    } catch (t) {
                        Dr(`[HANDSHAKE DEBUG] Error in handler ${r}:`, t)
                    }
                })
            }
            convertToDeprecatedFormat(t) {
                if ("penpal" !== t?.namespace) return t;
                switch (t.type) {
                    case "SYN":
                        return Dr("React Native: Converting SYN to deprecated format to avoid MessagePorts", {
                            originalMessage: t
                        }), {
                            penpal: "syn",
                            participantId: t.participantId
                        };
                    case "ACK1":
                        return Dr("React Native: Converting ACK1 to deprecated format", {
                            originalMessage: t
                        }), {
                            penpal: "synAck",
                            methodNames: t.methodPaths || []
                        };
                    case "ACK2":
                        return Dr("React Native: Converting ACK2 to deprecated format", {
                            originalMessage: t
                        }), {
                            penpal: "ack"
                        };
                    case "REPLY": {
                        Dr("React Native: Converting REPLY to deprecated format", {
                            originalMessage: t
                        });
                        const e = this.getNumericId(t.callId);
                        return t.isError ? {
                            penpal: "reply",
                            id: e,
                            resolution: "rejected",
                            returnValue: t.value,
                            returnValueIsError: t.isSerializedErrorInstance || !1
                        } : {
                            penpal: "reply",
                            id: e,
                            resolution: "fulfilled",
                            returnValue: t.value
                        }
                    }
                    case "CALL":
                        return Dr("React Native: Converting CALL to deprecated format", {
                            originalMessage: t
                        }), {
                            penpal: "call",
                            id: this.getNumericId(t.id),
                            methodName: t.methodPath.join("."),
                            args: t.args
                        };
                    case "DESTROY":
                        return {
                            namespace: "penpal", type: "DESTROY"
                        };
                    default:
                        return t
                }
            }
            convertFromDeprecatedFormat(t) {
                if (t?.penpal) switch (t.penpal) {
                    case "syn": {
                        Dr("[HANDSHAKE DEBUG] React Native: Converting deprecated SYN to modern format", {
                            originalMessage: t
                        });
                        const e = {
                            namespace: "penpal",
                            type: "SYN",
                            participantId: t.participantId
                        };
                        return Dr("[HANDSHAKE DEBUG] Converted SYN:", e), e
                    }
                    case "synAck": {
                        Dr("[HANDSHAKE DEBUG] React Native: Converting deprecated synAck to modern ACK1 format", {
                            originalMessage: t
                        });
                        const e = {
                            namespace: "penpal",
                            type: "ACK1",
                            methodPaths: t.methodNames?.map(t => t.split(".")) || [],
                            channel: void 0
                        };
                        return Dr("[HANDSHAKE DEBUG] Converted ACK1:", e), e
                    }
                    case "ack": {
                        Dr("[HANDSHAKE DEBUG] React Native: Converting deprecated ack to modern ACK2 format", {
                            originalMessage: t
                        });
                        const e = {
                            namespace: "penpal",
                            type: "ACK2",
                            channel: void 0
                        };
                        return Dr("[HANDSHAKE DEBUG] Converted ACK2:", e), e
                    }
                    case "reply": {
                        Dr("React Native: Converting deprecated reply to modern REPLY format", {
                            originalMessage: t
                        });
                        const e = this.getStringId(t.id);
                        e || Dr(`Warning: No string ID mapping found for numeric ID ${t.id}, using as-is`);
                        const r = e || String(t.id);
                        return "fulfilled" === t.resolution ? {
                            namespace: "penpal",
                            type: "REPLY",
                            callId: r,
                            value: t.returnValue
                        } : {
                            namespace: "penpal",
                            type: "REPLY",
                            callId: r,
                            isError: !0,
                            value: t.returnValue,
                            isSerializedErrorInstance: t.returnValueIsError || !1
                        }
                    }
                    case "call": {
                        Dr("React Native: Converting deprecated call to modern CALL format", {
                            originalMessage: t
                        });
                        const e = this.getStringId(t.id);
                        return e || Dr(`Warning: No string ID mapping found for numeric ID ${t.id}, using as-is`), {
                            namespace: "penpal",
                            type: "CALL",
                            id: e || String(t.id),
                            methodPath: t.methodName.split("."),
                            args: t.args
                        }
                    }
                    default:
                        return Dr("React Native: Unknown deprecated penpal message type:", t.penpal), t
                }
                return t
            }
            setupMessagePort(t) {
                Dr("React Native: setupMessagePort called but ignored (MessagePort not supported)")
            }
            destroy() {
                this.isInitialized && (this.handlers.clear(), this.messageBuffer = [], this.stringToNumericId.clear(), this.numericToStringId.clear(), this.nextNumericId = 1, this.isInitialized = !1, this.hasBeenUsed = !1, Dr("ReactNativeMessenger destroyed and ready for reuse"))
            }
            reset() {
                Dr("ReactNativeMessenger reset for reuse"), this.handlers.clear(), this.messageBuffer = [], this.isInitialized = !1, this.hasBeenUsed = !1, this.nextNumericId = 1, this.stringToNumericId.clear(), this.numericToStringId.clear()
            }
            getNumericId(t) {
                let e = this.stringToNumericId.get(t);
                return e || (e = this.nextNumericId++, this.stringToNumericId.set(t, e), this.numericToStringId.set(e, t), Dr(`ID mapping created: "${t}" -> ${e}`)), e
            }
            getStringId(t) {
                return this.numericToStringId.get(t)
            }
        };
    const Fr = "https://64a03e4967fb4dad3ecb914918c777b6@o4504593015242752.ingest.us.sentry.io/4509292415287296";
    let qr = class t {
        static sentryInstance;
        static queuedCalls = [];
        static baseTags;
        static set sentry(t) {
            const e = t.getDsn();
            if (!e) throw new Error("Sentry DSN is not set");
            if (e.projectId !== Fr.split("https://")[1].split("/")[1] || e.host !== Fr.split("@")[1].split("/")[0] || e.publicKey !== Fr.split("@")[0].split("https://")[1]) throw new Error("Sentry DSN is not valid");
            t.captureAxiosError = (e, r, n, i) => {
                r instanceof ce ? (r.name = e, t.captureException(r, {
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
                            method: e
                        }
                    }
                })) : t.captureException(r, n, i)
            }, this.sentryInstance = t
        }
        static get sentry() {
            return this.proxy
        }
        static async init({
            sentry: t,
            configuration: e
        }) {
            if (t) return void(this.sentry = t);
            const r = await Promise.resolve().then(function() {
                return Ea
            });
            this.sentry = new r.BrowserClient({
                dsn: Fr,
                integrations: [],
                stackParser: r.defaultStackParser,
                transport: r.makeFetchTransport
            }), this.baseTags = {
                projectId: e?.baseConfiguration.publishableKey,
                sdk: "@openfort/openfort-js",
                sdkVersion: "0.9.8"
            }, this.processQueuedCalls()
        }
        static proxy = new Proxy({}, {
            get: (e, r) => t.sentryInstance && "function" == typeof t.sentryInstance[r] ? (...e) => t.sentryInstance[r](...e) : (...e) => {
                t.queuedCalls.push({
                    fn: r,
                    args: e
                })
            }
        });
        static processQueuedCalls() {
            this.sentryInstance && (this.queuedCalls.forEach(({
                fn: t,
                args: e
            }) => {
                "function" == typeof this.sentryInstance[t] && this.sentryInstance[t](...e)
            }), this.queuedCalls = [])
        }
    };
    const {
        sentry: Gr
    } = qr;
    let jr = class extends Error {
            constructor() {
                super("This embedded signer requires a password to be recovered")
            }
        },
        Hr = class extends Error {
            constructor() {
                super("MissingProjectEntropyError")
            }
        },
        zr = class extends Error {
            constructor() {
                super("Wrong recovery password for this embedded signer")
            }
        },
        Kr = class extends Error {
            constructor() {
                super("Not configured")
            }
        },
        Vr = class {
            messenger;
            connection;
            remote;
            storage;
            sdkConfiguration;
            isInitialized = !1;
            initializationPromise = null;
            constructor(t, e, r) {
                if (!t) throw new Re("Configuration is required for IframeManager", _e.INVALID_CONFIGURATION);
                if (!e) throw new Re("Storage is required for IframeManager", _e.INVALID_CONFIGURATION);
                if (!r) throw new Re("Messenger is required for IframeManager", _e.INVALID_CONFIGURATION);
                this.sdkConfiguration = t, this.storage = e, this.messenger = r
            }
            async initialize() {
                if (!this.isInitialized)
                    if (this.initializationPromise) await this.initializationPromise;
                    else {
                        this.initializationPromise = this.doInitialize();
                        try {
                            await this.initializationPromise, this.isInitialized = !0
                        } catch (t) {
                            throw this.initializationPromise = null, t
                        }
                    }
            }
            async doInitialize() {
                Dr("Initializing IframeManager connection..."), this.messenger.initialize({
                    validateReceivedMessage: t => !(!t || "object" != typeof t),
                    log: Dr
                }), this.connection = Pr({
                    messenger: this.messenger,
                    timeout: 1e4,
                    log: Dr
                });
                try {
                    this.remote = await this.connection.promise, Dr("IframeManager connection established")
                } catch (t) {
                    const e = t;
                    throw Gr.captureException(e), this.destroy(), Dr("Failed to establish connection:", e), new Re(`Failed to establish iFrame connection: ${e.cause||e.message}`, _e.INTERNAL_ERROR, t)
                }
            }
            async ensureConnection() {
                if (this.isInitialized && this.remote || await this.initialize(), !this.remote) throw new Re("Failed to establish connection", _e.INTERNAL_ERROR);
                return this.remote
            }
            handleError(t) {
                if (Ke(t)) {
                    if ("not-configured-error" === t.error) throw new Kr;
                    if ("missing-user-entropy-error" === t.error) throw this.storage.remove(Je.ACCOUNT), new jr;
                    if ("missing-project-entropy-error" === t.error) throw this.storage.remove(Je.ACCOUNT), new Hr;
                    if ("incorrect-user-entropy-error" === t.error) throw new zr;
                    throw new Re(`Unknown error: ${t.error}`, _e.INTERNAL_ERROR)
                }
                throw t
            }
            async buildRequestConfiguration() {
                const t = await Lr.fromStorage(this.storage);
                if (!t) throw new Re("Must be authenticated to create a signer", _e.NOT_LOGGED_IN_ERROR);
                return {
                    thirdPartyProvider: t.thirdPartyProvider,
                    thirdPartyTokenType: t.thirdPartyTokenType,
                    token: t.token,
                    publishableKey: this.sdkConfiguration.baseConfiguration.publishableKey,
                    openfortURL: this.sdkConfiguration.backendUrl
                }
            }
            async buildIFrameRequestConfiguration() {
                const t = await Lr.fromStorage(this.storage);
                if (!t) throw new Re("Must be authenticated to create a signer", _e.NOT_LOGGED_IN_ERROR);
                const e = {
                    auth: We.OPENFORT,
                    authProvider: t.thirdPartyProvider,
                    token: t.token,
                    tokenType: t.thirdPartyTokenType
                };
                return {
                    thirdPartyTokenType: t.thirdPartyTokenType ?? null,
                    thirdPartyProvider: t.thirdPartyProvider ?? null,
                    accessToken: t.token,
                    playerID: t.player,
                    recovery: e,
                    chainId: null,
                    password: null
                }
            }
            async configure(t) {
                if (!this.sdkConfiguration.shieldConfiguration) throw new Re("shieldConfiguration is required", _e.INVALID_CONFIGURATION);
                const e = await Qe.fromStorage(this.storage),
                    r = await this.ensureConnection(),
                    n = await this.buildIFrameRequestConfiguration();
                n.chainId = t?.chainId ?? e?.chainId ?? null, n.password = t?.entropy?.recoveryPassword ?? null, n.recovery = {
                    ...n.recovery,
                    encryptionSession: t?.entropy?.encryptionSession
                };
                const i = {
                        uuid: $e(),
                        action: Fe.CONFIGURE,
                        chainId: n.chainId,
                        recovery: n.recovery,
                        publishableKey: this.sdkConfiguration.baseConfiguration.publishableKey,
                        shieldAPIKey: this.sdkConfiguration.shieldConfiguration?.shieldPublishableKey || "",
                        accessToken: n.accessToken,
                        playerID: n.playerID,
                        thirdPartyProvider: n.thirdPartyProvider,
                        thirdPartyTokenType: n.thirdPartyTokenType,
                        encryptionKey: n.password,
                        encryptionPart: this.sdkConfiguration?.shieldConfiguration?.shieldEncryptionKey ?? null,
                        encryptionSession: n.recovery?.encryptionSession ?? null,
                        openfortURL: this.sdkConfiguration.backendUrl,
                        shieldURL: this.sdkConfiguration.shieldUrl
                    },
                    s = await r.configure(i);
                return Ke(s) && this.handleError(s), "undefined" != typeof sessionStorage && sessionStorage.setItem("iframe-version", s.version ?? "undefined"), s
            }
            async create(t) {
                if (!this.sdkConfiguration.shieldConfiguration) throw new Error("shieldConfiguration is required");
                const e = await this.ensureConnection(),
                    r = await this.buildIFrameRequestConfiguration();
                r.chainId = t.chainId, r.password = t?.entropy?.recoveryPassword ?? null, r.recovery = {
                    ...r.recovery,
                    encryptionSession: t?.entropy?.encryptionSession
                };
                const n = {
                        uuid: $e(),
                        action: Fe.CREATE,
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
                        chainId: t.chainId,
                        accountType: t.accountType,
                        chainType: t.chainType
                    },
                    i = await e.create(n);
                return Ke(i) && this.handleError(i), "undefined" != typeof sessionStorage && sessionStorage.setItem("iframe-version", i.version ?? "undefined"), i
            }
            async recover(t) {
                if (!this.sdkConfiguration.shieldConfiguration) throw new Error("shieldConfiguration is required");
                const e = await Qe.fromStorage(this.storage),
                    r = await this.ensureConnection(),
                    n = await this.buildIFrameRequestConfiguration();
                n.chainId = e?.chainId ?? null, n.password = t?.entropy?.recoveryPassword ?? null, n.recovery = {
                    ...n.recovery,
                    encryptionSession: t?.entropy?.encryptionSession
                };
                const i = {
                        uuid: $e(),
                        action: Fe.RECOVER,
                        recovery: n.recovery,
                        publishableKey: this.sdkConfiguration.baseConfiguration.publishableKey,
                        shieldAPIKey: this.sdkConfiguration.shieldConfiguration?.shieldPublishableKey || "",
                        accessToken: n.accessToken,
                        playerID: n.playerID,
                        thirdPartyProvider: n.thirdPartyProvider,
                        thirdPartyTokenType: n.thirdPartyTokenType,
                        encryptionKey: n.password,
                        encryptionPart: this.sdkConfiguration?.shieldConfiguration?.shieldEncryptionKey ?? null,
                        encryptionSession: n.recovery?.encryptionSession ?? null,
                        openfortURL: this.sdkConfiguration.backendUrl,
                        shieldURL: this.sdkConfiguration.shieldUrl,
                        account: t.account
                    },
                    s = await r.recover(i);
                return Ke(s) && this.handleError(s), "undefined" != typeof sessionStorage && sessionStorage.setItem("iframe-version", s.version ?? "undefined"), s
            }
            async sign(t, e, r) {
                Dr("[iframe] ensureConnection");
                const n = await this.ensureConnection(),
                    i = new Ge($e(), t, e, r, await this.buildRequestConfiguration());
                Dr("[iframe] done ensureConnection");
                try {
                    const t = await n.sign(i);
                    return Dr("[iframe] response", t), Ke(t) && this.handleError(t), "undefined" != typeof sessionStorage && sessionStorage.setItem("iframe-version", t.version ?? "undefined"), t.signature
                } catch (n) {
                    if (n instanceof Kr) return await this.configure(), this.sign(t, e, r);
                    throw n
                }
            }
            async switchChain(t) {
                const e = await this.ensureConnection(),
                    r = new je($e(), t, await this.buildRequestConfiguration());
                try {
                    const t = await e.switchChain(r);
                    return Ke(t) && this.handleError(t), t
                } catch (e) {
                    if (e instanceof Kr) return await this.configure(), this.switchChain(t);
                    throw e
                }
            }
            async export () {
                const t = await this.ensureConnection(),
                    e = new He($e(), await this.buildRequestConfiguration());
                try {
                    const r = await t.export(e);
                    return Ke(r) && this.handleError(r), "undefined" != typeof sessionStorage && sessionStorage.setItem("iframe-version", r.version ?? "undefined"), r.key
                } catch (t) {
                    if (t instanceof Kr) return await this.configure(), this.export();
                    throw t
                }
            }
            async setEmbeddedRecovery(t, e, r) {
                const n = await this.ensureConnection(),
                    i = new ze($e(), t, e, r, await this.buildRequestConfiguration());
                try {
                    const t = await n.setRecoveryMethod(i);
                    Ke(t) && this.handleError(t), "undefined" != typeof sessionStorage && sessionStorage.setItem("iframe-version", t.version ?? "undefined")
                } catch (n) {
                    if (n instanceof Kr) return await this.configure(), this.setEmbeddedRecovery(t, e, r);
                    throw n
                }
            }
            async getCurrentDevice(t) {
                const e = await this.ensureConnection(),
                    r = new qe($e(), t);
                try {
                    const t = await e.getCurrentDevice(r);
                    return Ke(t) && this.handleError(t), "undefined" != typeof sessionStorage && sessionStorage.setItem("iframe-version", t.version ?? "undefined"), t
                } catch (t) {
                    if (t instanceof Kr) return null;
                    throw t
                }
            }
            async updateAuthentication() {
                if (!this.isLoaded() || !this.remote) return void Dr("IframeManager not loaded, skipping authentication update");
                const t = await Lr.fromStorage(this.storage);
                if (!t) return void Dr("No authentication found, skipping update");
                const e = new Ve($e(), t.token);
                try {
                    Dr("Updating authentication in iframe with token:", t.token);
                    const r = await this.remote.updateAuthentication(e);
                    Ke(r) && this.handleError(r)
                } catch (t) {
                    if (t instanceof Kr) return await this.configure(), void await this.updateAuthentication();
                    throw t
                }
            }
            async disconnect() {
                const t = await this.ensureConnection(),
                    e = {
                        uuid: $e()
                    };
                await t.logout(e)
            }
            async onMessage(t) {
                Dr("[HANDSHAKE DEBUG] IframeManager.onMessage called with:", t), this.messenger instanceof Br ? (this.isInitialized || this.connection ? Dr(`[HANDSHAKE DEBUG] Connection already initialized (isInitialized: ${this.isInitialized}, hasConnection: ${!!this.connection})`) : (Dr("[HANDSHAKE DEBUG] First message received, initializing connection..."), this.initialize().catch(t => {
                    Dr("[HANDSHAKE DEBUG] Failed to initialize connection:", t)
                })), Dr("[HANDSHAKE DEBUG] Passing message to ReactNativeMessenger"), this.messenger.handleMessage(t)) : Dr("[HANDSHAKE DEBUG] Not a ReactNativeMessenger, ignoring message")
            }
            isLoaded() {
                return this.isInitialized && void 0 !== this.remote
            }
            destroy() {
                this.connection && this.connection.destroy(), this.messenger.destroy(), this.remote = void 0, this.isInitialized = !1, this.connection = void 0, this.initializationPromise = null
            }
        };
    var Wr, Jr, Yr = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function Qr(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }

    function Xr(t) {
        if (Object.prototype.hasOwnProperty.call(t, "__esModule")) return t;
        var e = t.default;
        if ("function" == typeof e) {
            var r = function t() {
                var r = !1;
                try {
                    r = this instanceof t
                } catch {}
                return r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments)
            };
            r.prototype = e.prototype
        } else r = {};
        return Object.defineProperty(r, "__esModule", {
            value: !0
        }), Object.keys(t).forEach(function(e) {
            var n = Object.getOwnPropertyDescriptor(t, e);
            Object.defineProperty(r, e, n.get ? n : {
                enumerable: !0,
                get: function() {
                    return t[e]
                }
            })
        }), r
    }
    var $r = Qr(function() {
        if (Jr) return Wr;
        Jr = 1;
        const t = new Set(["ENOTFOUND", "ENETUNREACH", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_CRL", "UNABLE_TO_DECRYPT_CERT_SIGNATURE", "UNABLE_TO_DECRYPT_CRL_SIGNATURE", "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY", "CERT_SIGNATURE_FAILURE", "CRL_SIGNATURE_FAILURE", "CERT_NOT_YET_VALID", "CERT_HAS_EXPIRED", "CRL_NOT_YET_VALID", "CRL_HAS_EXPIRED", "ERROR_IN_CERT_NOT_BEFORE_FIELD", "ERROR_IN_CERT_NOT_AFTER_FIELD", "ERROR_IN_CRL_LAST_UPDATE_FIELD", "ERROR_IN_CRL_NEXT_UPDATE_FIELD", "OUT_OF_MEM", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "UNABLE_TO_VERIFY_LEAF_SIGNATURE", "CERT_CHAIN_TOO_LONG", "CERT_REVOKED", "INVALID_CA", "PATH_LENGTH_EXCEEDED", "INVALID_PURPOSE", "CERT_UNTRUSTED", "CERT_REJECTED", "HOSTNAME_MISMATCH"]);
        return Wr = e => !t.has(e && e.code)
    }());
    const Zr = "axios-retry";

    function tn(t) {
        return !t.response && (!!t.code && (!["ERR_CANCELED", "ECONNABORTED"].includes(t.code) && $r(t)))
    }
    const en = ["get", "head", "options"],
        rn = en.concat(["put", "delete"]);

    function nn(t) {
        return "ECONNABORTED" !== t.code && (!t.response || 429 === t.response.status || t.response.status >= 500 && t.response.status <= 599)
    }

    function sn(t) {
        return !!t.config?.method && (nn(t) && -1 !== rn.indexOf(t.config.method))
    }

    function on(t) {
        return tn(t) || sn(t)
    }

    function an(t = void 0) {
        const e = t?.response?.headers["retry-after"];
        if (!e) return 0;
        let r = 1e3 * (Number(e) || 0);
        return 0 === r && (r = (new Date(e).valueOf() || 0) - Date.now()), Math.max(0, r)
    }
    const cn = {
        retries: 3,
        retryCondition: on,
        retryDelay: function(t = 0, e = void 0) {
            return Math.max(0, an(e))
        },
        shouldResetTimeout: !1,
        onRetry: () => {},
        onMaxRetryTimesExceeded: () => {},
        validateResponse: null
    };

    function un(t, e, r = !1) {
        const n = function(t, e) {
            return {
                ...cn,
                ...e,
                ...t[Zr]
            }
        }(t, e || {});
        return n.retryCount = n.retryCount || 0, n.lastRequestTime && !r || (n.lastRequestTime = Date.now()), t[Zr] = n, n
    }
    const hn = (t, e) => {
        const r = t.interceptors.request.use(t => (un(t, e, !0), t[Zr]?.validateResponse && (t.validateStatus = () => !1), t)),
            n = t.interceptors.response.use(null, async r => {
                const {
                    config: n
                } = r;
                if (!n) return Promise.reject(r);
                const i = un(n, e);
                return r.response && i.validateResponse?.(r.response) ? r.response : await async function(t, e) {
                    const {
                        retries: r,
                        retryCondition: n
                    } = t, i = (t.retryCount || 0) < r && n(e);
                    if ("object" == typeof i) try {
                        return !1 !== await i
                    } catch (t) {
                        return !1
                    }
                    return i
                }(i, r) ? async function(t, e, r, n) {
                    e.retryCount += 1;
                    const {
                        retryDelay: i,
                        shouldResetTimeout: s,
                        onRetry: o
                    } = e, a = i(e.retryCount, r);
                    if (function(t, e) {
                            t.defaults.agent === e.agent && delete e.agent, t.defaults.httpAgent === e.httpAgent && delete e.httpAgent, t.defaults.httpsAgent === e.httpsAgent && delete e.httpsAgent
                        }(t, n), !s && n.timeout && e.lastRequestTime) {
                        const t = Date.now() - e.lastRequestTime,
                            i = n.timeout - t - a;
                        if (i <= 0) return Promise.reject(r);
                        n.timeout = i
                    }
                    return n.transformRequest = [t => t], await o(e.retryCount, r, n), n.signal?.aborted ? Promise.resolve(t(n)) : new Promise(e => {
                        const r = () => {
                                clearTimeout(i), e(t(n))
                            },
                            i = setTimeout(() => {
                                e(t(n)), n.signal?.removeEventListener && n.signal.removeEventListener("abort", r)
                            }, a);
                        n.signal?.addEventListener && n.signal.addEventListener("abort", r, {
                            once: !0
                        })
                    })
                }(t, i, r, n): (await async function(t, e) {
                    t.retryCount >= t.retries && await t.onMaxRetryTimesExceeded(e, t.retryCount)
                }(i, r), Promise.reject(r))
            });
        return {
            requestInterceptorId: r,
            responseInterceptorId: n
        }
    };
    hn.isNetworkError = tn, hn.isSafeRequestError = function(t) {
        return !!t.config?.method && (nn(t) && -1 !== en.indexOf(t.config.method))
    }, hn.isIdempotentRequestError = sn, hn.isNetworkOrIdempotentRequestError = on, hn.exponentialDelay = function(t = 0, e = void 0, r = 100) {
        const n = 2 ** t * r,
            i = Math.max(n, an(e));
        return i + .2 * i * Math.random()
    }, hn.linearDelay = function(t = 100) {
        return (e = 0, r = void 0) => {
            const n = e * t;
            return Math.max(n, an(r))
        }
    }, hn.isRetryableError = nn;
    const ln = "https://api.openfort.xyz".replace(/\/+$/, "");
    let dn = class {
            basePath;
            axios;
            configuration;
            constructor(t, e = ln, r = oe) {
                this.basePath = e, this.axios = r, t && (this.configuration = t, this.basePath = t.basePath || this.basePath)
            }
        },
        fn = class extends Error {
            field;
            constructor(t, e) {
                super(e), this.field = t, this.name = "RequiredError"
            }
        };
    const pn = "https://example.com",
        mn = function(t, e, r) {
            if (null == r) throw new fn(e, `Required parameter ${e} was null or undefined when calling ${t}.`)
        },
        gn = async function(t, e) {
            if (e && e.accessToken) {
                const r = "function" == typeof e.accessToken ? await e.accessToken() : await e.accessToken;
                t.Authorization = "Bearer " + r
            }
        };

    function yn(t, e, r = "") {
        null != e && ("object" == typeof e ? Array.isArray(e) ? e.forEach(e => yn(t, e, r)) : Object.keys(e).forEach(n => yn(t, e[n], `${r}${""!==r?".":""}${n}`)) : t.has(r) ? t.append(r, e) : t.set(r, e))
    }
    const wn = function(t, ...e) {
            const r = new URLSearchParams(t.search);
            yn(r, e), t.search = r.toString()
        },
        vn = function(t, e, r) {
            const n = "string" != typeof t;
            return (n && r && r.isJsonMime ? r.isJsonMime(e.headers["Content-Type"]) : n) ? JSON.stringify(void 0 !== t ? t : {}) : t || ""
        },
        An = function(t) {
            return t.pathname + t.search + t.hash
        },
        bn = function(t, e, r, n) {
            return (i = e, s = r) => {
                const o = {
                    ...t.options,
                    url: (n?.basePath || i.defaults.baseURL || s) + t.url
                };
                return i.request(o)
            }
        },
        En = function(t) {
            const e = function(t) {
                return {
                    cancelTransferOwnership: async (e, r, n = {}) => {
                        mn("cancelTransferOwnership", "id", e), mn("cancelTransferOwnership", "cancelTransferOwnershipRequest", r);
                        const i = "/v1/accounts/{id}/cancel_transfer_ownership".replace("{id}", encodeURIComponent(String(e))),
                            s = new URL(i, pn);
                        let o;
                        t && (o = t.baseOptions);
                        const a = {
                                method: "POST",
                                ...o,
                                ...n
                            },
                            c = {};
                        await gn(c, t), c["Content-Type"] = "application/json", wn(s, {});
                        let u = o && o.headers ? o.headers : {};
                        return a.headers = {
                            ...c,
                            ...u,
                            ...n.headers
                        }, a.data = vn(r, a, t), {
                            url: An(s),
                            options: a
                        }
                    },
                    completeRecovery: async (e, r, n = {}) => {
                        mn("completeRecovery", "id", e), mn("completeRecovery", "completeRecoveryRequest", r);
                        const i = "/v1/accounts/{id}/complete_recovery".replace("{id}", encodeURIComponent(String(e))),
                            s = new URL(i, pn);
                        let o;
                        t && (o = t.baseOptions);
                        const a = {
                                method: "POST",
                                ...o,
                                ...n
                            },
                            c = {};
                        await gn(c, t), c["Content-Type"] = "application/json", wn(s, {});
                        let u = o && o.headers ? o.headers : {};
                        return a.headers = {
                            ...c,
                            ...u,
                            ...n.headers
                        }, a.data = vn(r, a, t), {
                            url: An(s),
                            options: a
                        }
                    },
                    createAccount: async (e, r = {}) => {
                        mn("createAccount", "createAccountRequest", e);
                        const n = new URL("/v1/accounts", pn);
                        let i;
                        t && (i = t.baseOptions);
                        const s = {
                                method: "POST",
                                ...i,
                                ...r
                            },
                            o = {};
                        await gn(o, t), o["Content-Type"] = "application/json", wn(n, {});
                        let a = i && i.headers ? i.headers : {};
                        return s.headers = {
                            ...o,
                            ...a,
                            ...r.headers
                        }, s.data = vn(e, s, t), {
                            url: An(n),
                            options: s
                        }
                    },
                    deployAccount: async (e, r, n = {}) => {
                        mn("deployAccount", "id", e), mn("deployAccount", "deployRequest", r);
                        const i = "/v1/accounts/{id}/deploy".replace("{id}", encodeURIComponent(String(e))),
                            s = new URL(i, pn);
                        let o;
                        t && (o = t.baseOptions);
                        const a = {
                                method: "POST",
                                ...o,
                                ...n
                            },
                            c = {};
                        await gn(c, t), c["Content-Type"] = "application/json", wn(s, {});
                        let u = o && o.headers ? o.headers : {};
                        return a.headers = {
                            ...c,
                            ...u,
                            ...n.headers
                        }, a.data = vn(r, a, t), {
                            url: An(s),
                            options: a
                        }
                    },
                    disableAccount: async (e, r = {}) => {
                        mn("disableAccount", "id", e);
                        const n = "/v1/accounts/{id}/disable".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(n, pn);
                        let s;
                        t && (s = t.baseOptions);
                        const o = {
                                method: "POST",
                                ...s,
                                ...r
                            },
                            a = {};
                        await gn(a, t), wn(i, {});
                        let c = s && s.headers ? s.headers : {};
                        return o.headers = {
                            ...a,
                            ...c,
                            ...r.headers
                        }, {
                            url: An(i),
                            options: o
                        }
                    },
                    getAccount: async (e, r, n = {}) => {
                        mn("getAccount", "id", e);
                        const i = "/v1/accounts/{id}".replace("{id}", encodeURIComponent(String(e))),
                            s = new URL(i, pn);
                        let o;
                        t && (o = t.baseOptions);
                        const a = {
                                method: "GET",
                                ...o,
                                ...n
                            },
                            c = {},
                            u = {};
                        await gn(c, t), r && (u.expand = r), wn(s, u);
                        let h = o && o.headers ? o.headers : {};
                        return a.headers = {
                            ...c,
                            ...h,
                            ...n.headers
                        }, {
                            url: An(s),
                            options: a
                        }
                    },
                    getAccountV2: async (e, r = {}) => {
                        mn("getAccountV2", "id", e);
                        const n = "/v2/accounts/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(n, pn);
                        let s;
                        t && (s = t.baseOptions);
                        const o = {
                                method: "GET",
                                ...s,
                                ...r
                            },
                            a = {};
                        await gn(a, t), wn(i, {});
                        let c = s && s.headers ? s.headers : {};
                        return o.headers = {
                            ...a,
                            ...c,
                            ...r.headers
                        }, {
                            url: An(i),
                            options: o
                        }
                    },
                    getAccounts: async (e, r, n, i, s, o, a, c = {}) => {
                        const u = new URL("/v1/accounts", pn);
                        let h;
                        t && (h = t.baseOptions);
                        const l = {
                                method: "GET",
                                ...h,
                                ...c
                            },
                            d = {},
                            f = {};
                        await gn(d, t), void 0 !== e && (f.limit = e), void 0 !== r && (f.skip = r), void 0 !== n && (f.order = n), void 0 !== i && (f.chainId = i), void 0 !== s && (f.player = s), void 0 !== o && (f.address = o), a && (f.expand = a), wn(u, f);
                        let p = h && h.headers ? h.headers : {};
                        return l.headers = {
                            ...d,
                            ...p,
                            ...c.headers
                        }, {
                            url: An(u),
                            options: l
                        }
                    },
                    getAccountsV2: async (e, r, n, i, s, o, a, c, u = {}) => {
                        const h = new URL("/v2/accounts", pn);
                        let l;
                        t && (l = t.baseOptions);
                        const d = {
                                method: "GET",
                                ...l,
                                ...u
                            },
                            f = {},
                            p = {};
                        await gn(f, t), void 0 !== e && (p.limit = e), void 0 !== r && (p.skip = r), void 0 !== n && (p.order = n), void 0 !== i && (p.chainId = i), void 0 !== s && (p.user = s), void 0 !== o && (p.chainType = o), void 0 !== a && (p.accountType = a), void 0 !== c && (p.address = c), wn(h, p);
                        let m = l && l.headers ? l.headers : {};
                        return d.headers = {
                            ...f,
                            ...m,
                            ...u.headers
                        }, {
                            url: An(h),
                            options: d
                        }
                    },
                    getSignerIdByAddress: async (e, r = {}) => {
                        mn("getSignerIdByAddress", "address", e);
                        const n = new URL("/v2/accounts/signer", pn);
                        let i;
                        t && (i = t.baseOptions);
                        const s = {
                                method: "GET",
                                ...i,
                                ...r
                            },
                            o = {},
                            a = {};
                        await gn(o, t), void 0 !== e && (a.address = e), wn(n, a);
                        let c = i && i.headers ? i.headers : {};
                        return s.headers = {
                            ...o,
                            ...c,
                            ...r.headers
                        }, {
                            url: An(n),
                            options: s
                        }
                    },
                    requestTransferOwnership: async (e, r, n = {}) => {
                        mn("requestTransferOwnership", "id", e), mn("requestTransferOwnership", "transferOwnershipRequest", r);
                        const i = "/v1/accounts/{id}/request_transfer_ownership".replace("{id}", encodeURIComponent(String(e))),
                            s = new URL(i, pn);
                        let o;
                        t && (o = t.baseOptions);
                        const a = {
                                method: "POST",
                                ...o,
                                ...n
                            },
                            c = {};
                        await gn(c, t), c["Content-Type"] = "application/json", wn(s, {});
                        let u = o && o.headers ? o.headers : {};
                        return a.headers = {
                            ...c,
                            ...u,
                            ...n.headers
                        }, a.data = vn(r, a, t), {
                            url: An(s),
                            options: a
                        }
                    },
                    signPayload: async (e, r, n = {}) => {
                        mn("signPayload", "id", e), mn("signPayload", "signPayloadRequest", r);
                        const i = "/v1/accounts/{id}/sign_payload".replace("{id}", encodeURIComponent(String(e))),
                            s = new URL(i, pn);
                        let o;
                        t && (o = t.baseOptions);
                        const a = {
                                method: "POST",
                                ...o,
                                ...n
                            },
                            c = {};
                        await gn(c, t), c["Content-Type"] = "application/json", wn(s, {});
                        let u = o && o.headers ? o.headers : {};
                        return a.headers = {
                            ...c,
                            ...u,
                            ...n.headers
                        }, a.data = vn(r, a, t), {
                            url: An(s),
                            options: a
                        }
                    },
                    startRecovery: async (e, r, n = {}) => {
                        mn("startRecovery", "id", e), mn("startRecovery", "startRecoveryRequest", r);
                        const i = "/v1/accounts/{id}/start_recovery".replace("{id}", encodeURIComponent(String(e))),
                            s = new URL(i, pn);
                        let o;
                        t && (o = t.baseOptions);
                        const a = {
                                method: "POST",
                                ...o,
                                ...n
                            },
                            c = {};
                        await gn(c, t), c["Content-Type"] = "application/json", wn(s, {});
                        let u = o && o.headers ? o.headers : {};
                        return a.headers = {
                            ...c,
                            ...u,
                            ...n.headers
                        }, a.data = vn(r, a, t), {
                            url: An(s),
                            options: a
                        }
                    },
                    switchChainV2: async (e, r = {}) => {
                        mn("switchChainV2", "switchChainQueriesV2", e);
                        const n = new URL("/v2/accounts/switch-chain", pn);
                        let i;
                        t && (i = t.baseOptions);
                        const s = {
                            method: "POST",
                            ...i,
                            ...r
                        };
                        wn(n, {});
                        let o = i && i.headers ? i.headers : {};
                        return s.headers = {
                            "Content-Type": "application/json",
                            ...o,
                            ...r.headers
                        }, s.data = vn(e, s, t), {
                            url: An(n),
                            options: s
                        }
                    },
                    syncAccount: async (e, r = {}) => {
                        mn("syncAccount", "id", e);
                        const n = "/v1/accounts/{id}/sync".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(n, pn);
                        let s;
                        t && (s = t.baseOptions);
                        const o = {
                                method: "POST",
                                ...s,
                                ...r
                            },
                            a = {};
                        await gn(a, t), wn(i, {});
                        let c = s && s.headers ? s.headers : {};
                        return o.headers = {
                            ...a,
                            ...c,
                            ...r.headers
                        }, {
                            url: An(i),
                            options: o
                        }
                    }
                }
            }(t);
            return {
                async cancelTransferOwnership(r, n, i) {
                    const s = await e.cancelTransferOwnership(r, n, i);
                    return bn(s, oe, ln, t)
                },
                async completeRecovery(r, n, i) {
                    const s = await e.completeRecovery(r, n, i);
                    return bn(s, oe, ln, t)
                },
                async createAccount(r, n) {
                    const i = await e.createAccount(r, n);
                    return bn(i, oe, ln, t)
                },
                async deployAccount(r, n, i) {
                    const s = await e.deployAccount(r, n, i);
                    return bn(s, oe, ln, t)
                },
                async disableAccount(r, n) {
                    const i = await e.disableAccount(r, n);
                    return bn(i, oe, ln, t)
                },
                async getAccount(r, n, i) {
                    const s = await e.getAccount(r, n, i);
                    return bn(s, oe, ln, t)
                },
                async getAccountV2(r, n) {
                    const i = await e.getAccountV2(r, n);
                    return bn(i, oe, ln, t)
                },
                async getAccounts(r, n, i, s, o, a, c, u) {
                    const h = await e.getAccounts(r, n, i, s, o, a, c, u);
                    return bn(h, oe, ln, t)
                },
                async getAccountsV2(r, n, i, s, o, a, c, u, h) {
                    const l = await e.getAccountsV2(r, n, i, s, o, a, c, u, h);
                    return bn(l, oe, ln, t)
                },
                async getSignerIdByAddress(r, n) {
                    const i = await e.getSignerIdByAddress(r, n);
                    return bn(i, oe, ln, t)
                },
                async requestTransferOwnership(r, n, i) {
                    const s = await e.requestTransferOwnership(r, n, i);
                    return bn(s, oe, ln, t)
                },
                async signPayload(r, n, i) {
                    const s = await e.signPayload(r, n, i);
                    return bn(s, oe, ln, t)
                },
                async startRecovery(r, n, i) {
                    const s = await e.startRecovery(r, n, i);
                    return bn(s, oe, ln, t)
                },
                async switchChainV2(r, n) {
                    const i = await e.switchChainV2(r, n);
                    return bn(i, oe, ln, t)
                },
                async syncAccount(r, n) {
                    const i = await e.syncAccount(r, n);
                    return bn(i, oe, ln, t)
                }
            }
        };
    class _n extends dn {
        cancelTransferOwnership(t, e) {
            return En(this.configuration).cancelTransferOwnership(t.id, t.cancelTransferOwnershipRequest, e).then(t => t(this.axios, this.basePath))
        }
        completeRecovery(t, e) {
            return En(this.configuration).completeRecovery(t.id, t.completeRecoveryRequest, e).then(t => t(this.axios, this.basePath))
        }
        createAccount(t, e) {
            return En(this.configuration).createAccount(t.createAccountRequest, e).then(t => t(this.axios, this.basePath))
        }
        deployAccount(t, e) {
            return En(this.configuration).deployAccount(t.id, t.deployRequest, e).then(t => t(this.axios, this.basePath))
        }
        disableAccount(t, e) {
            return En(this.configuration).disableAccount(t.id, e).then(t => t(this.axios, this.basePath))
        }
        getAccount(t, e) {
            return En(this.configuration).getAccount(t.id, t.expand, e).then(t => t(this.axios, this.basePath))
        }
        getAccountV2(t, e) {
            return En(this.configuration).getAccountV2(t.id, e).then(t => t(this.axios, this.basePath))
        }
        getAccounts(t = {}, e) {
            return En(this.configuration).getAccounts(t.limit, t.skip, t.order, t.chainId, t.player, t.address, t.expand, e).then(t => t(this.axios, this.basePath))
        }
        getAccountsV2(t = {}, e) {
            return En(this.configuration).getAccountsV2(t.limit, t.skip, t.order, t.chainId, t.user, t.chainType, t.accountType, t.address, e).then(t => t(this.axios, this.basePath))
        }
        getSignerIdByAddress(t, e) {
            return En(this.configuration).getSignerIdByAddress(t.address, e).then(t => t(this.axios, this.basePath))
        }
        requestTransferOwnership(t, e) {
            return En(this.configuration).requestTransferOwnership(t.id, t.transferOwnershipRequest, e).then(t => t(this.axios, this.basePath))
        }
        signPayload(t, e) {
            return En(this.configuration).signPayload(t.id, t.signPayloadRequest, e).then(t => t(this.axios, this.basePath))
        }
        startRecovery(t, e) {
            return En(this.configuration).startRecovery(t.id, t.startRecoveryRequest, e).then(t => t(this.axios, this.basePath))
        }
        switchChainV2(t, e) {
            return En(this.configuration).switchChainV2(t.switchChainQueriesV2, e).then(t => t(this.axios, this.basePath))
        }
        syncAccount(t, e) {
            return En(this.configuration).syncAccount(t.id, e).then(t => t(this.axios, this.basePath))
        }
    }
    const Rn = function(t) {
        const e = function(t) {
            return {
                authenticateSIWE: async (e, r = {}) => {
                    mn("authenticateSIWE", "sIWEAuthenticateRequest", e);
                    const n = new URL("/iam/v1/siwe/authenticate", pn);
                    let i;
                    t && (i = t.baseOptions);
                    const s = {
                            method: "POST",
                            ...i,
                            ...r
                        },
                        o = {};
                    await gn(o, t), o["Content-Type"] = "application/json", wn(n, {});
                    let a = i && i.headers ? i.headers : {};
                    return s.headers = {
                        ...o,
                        ...a,
                        ...r.headers
                    }, s.data = vn(e, s, t), {
                        url: An(n),
                        options: s
                    }
                },
                getJwks: async (e, r = {}) => {
                    mn("getJwks", "publishableKey", e);
                    const n = "/iam/v1/{publishable_key}/jwks.json".replace("{publishable_key}", encodeURIComponent(String(e))),
                        i = new URL(n, pn);
                    let s;
                    t && (s = t.baseOptions);
                    const o = {
                        method: "GET",
                        ...s,
                        ...r
                    };
                    wn(i, {});
                    let a = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...a,
                        ...r.headers
                    }, {
                        url: An(i),
                        options: o
                    }
                },
                initOAuth: async (e, r, n = {}) => {
                    mn("initOAuth", "oAuthInitRequest", e);
                    const i = new URL("/iam/v1/oauth/init", pn);
                    let s;
                    t && (s = t.baseOptions);
                    const o = {
                            method: "POST",
                            ...s,
                            ...n
                        },
                        a = {};
                    await gn(a, t), null != r && (a["x-game"] = String(r)), a["Content-Type"] = "application/json", wn(i, {});
                    let c = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...a,
                        ...c,
                        ...n.headers
                    }, o.data = vn(e, o, t), {
                        url: An(i),
                        options: o
                    }
                },
                initSIWE: async (e, r, n = {}) => {
                    mn("initSIWE", "sIWERequest", e);
                    const i = new URL("/iam/v1/siwe/init", pn);
                    let s;
                    t && (s = t.baseOptions);
                    const o = {
                            method: "POST",
                            ...s,
                            ...n
                        },
                        a = {};
                    await gn(a, t), null != r && (a["x-game"] = String(r)), a["Content-Type"] = "application/json", wn(i, {});
                    let c = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...a,
                        ...c,
                        ...n.headers
                    }, o.data = vn(e, o, t), {
                        url: An(i),
                        options: o
                    }
                },
                linkEmail: async (e, r, n = {}) => {
                    mn("linkEmail", "loginRequest", e);
                    const i = new URL("/iam/v1/password/link", pn);
                    let s;
                    t && (s = t.baseOptions);
                    const o = {
                            method: "POST",
                            ...s,
                            ...n
                        },
                        a = {};
                    null != r && (a["x-game"] = String(r)), a["Content-Type"] = "application/json", wn(i, {});
                    let c = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...a,
                        ...c,
                        ...n.headers
                    }, o.data = vn(e, o, t), {
                        url: An(i),
                        options: o
                    }
                },
                linkOAuth: async (e, r, n = {}) => {
                    mn("linkOAuth", "oAuthInitRequest", e);
                    const i = new URL("/iam/v1/oauth/init_link", pn);
                    let s;
                    t && (s = t.baseOptions);
                    const o = {
                            method: "POST",
                            ...s,
                            ...n
                        },
                        a = {};
                    null != r && (a["x-game"] = String(r)), a["Content-Type"] = "application/json", wn(i, {});
                    let c = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...a,
                        ...c,
                        ...n.headers
                    }, o.data = vn(e, o, t), {
                        url: An(i),
                        options: o
                    }
                },
                linkSIWE: async (e, r = {}) => {
                    mn("linkSIWE", "sIWEAuthenticateRequest", e);
                    const n = new URL("/iam/v1/siwe/link", pn);
                    let i;
                    t && (i = t.baseOptions);
                    const s = {
                        method: "POST",
                        ...i,
                        ...r
                    };
                    wn(n, {});
                    let o = i && i.headers ? i.headers : {};
                    return s.headers = {
                        "Content-Type": "application/json",
                        ...o,
                        ...r.headers
                    }, s.data = vn(e, s, t), {
                        url: An(n),
                        options: s
                    }
                },
                linkThirdParty: async (e, r, n = {}) => {
                    mn("linkThirdParty", "thirdPartyLinkRequest", e);
                    const i = new URL("/iam/v1/oauth/link", pn);
                    let s;
                    t && (s = t.baseOptions);
                    const o = {
                            method: "POST",
                            ...s,
                            ...n
                        },
                        a = {};
                    null != r && (a["x-game"] = String(r)), a["Content-Type"] = "application/json", wn(i, {});
                    let c = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...a,
                        ...c,
                        ...n.headers
                    }, o.data = vn(e, o, t), {
                        url: An(i),
                        options: o
                    }
                },
                loginEmailPassword: async (e, r, n = {}) => {
                    mn("loginEmailPassword", "loginRequest", e);
                    const i = new URL("/iam/v1/password/login", pn);
                    let s;
                    t && (s = t.baseOptions);
                    const o = {
                            method: "POST",
                            ...s,
                            ...n
                        },
                        a = {};
                    await gn(a, t), null != r && (a["x-game"] = String(r)), a["Content-Type"] = "application/json", wn(i, {});
                    let c = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...a,
                        ...c,
                        ...n.headers
                    }, o.data = vn(e, o, t), {
                        url: An(i),
                        options: o
                    }
                },
                loginOIDC: async (e, r, n = {}) => {
                    mn("loginOIDC", "loginOIDCRequest", e);
                    const i = new URL("/iam/v1/oidc/login", pn);
                    let s;
                    t && (s = t.baseOptions);
                    const o = {
                            method: "POST",
                            ...s,
                            ...n
                        },
                        a = {};
                    await gn(a, t), null != r && (a["x-game"] = String(r)), a["Content-Type"] = "application/json", wn(i, {});
                    let c = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...a,
                        ...c,
                        ...n.headers
                    }, o.data = vn(e, o, t), {
                        url: An(i),
                        options: o
                    }
                },
                loginWithIdToken: async (e, r = {}) => {
                    mn("loginWithIdToken", "loginWithIdTokenRequest", e);
                    const n = new URL("/iam/v1/oauth/login_id_token", pn);
                    let i;
                    t && (i = t.baseOptions);
                    const s = {
                            method: "POST",
                            ...i,
                            ...r
                        },
                        o = {};
                    await gn(o, t), o["Content-Type"] = "application/json", wn(n, {});
                    let a = i && i.headers ? i.headers : {};
                    return s.headers = {
                        ...o,
                        ...a,
                        ...r.headers
                    }, s.data = vn(e, s, t), {
                        url: An(n),
                        options: s
                    }
                },
                logout: async (e, r = {}) => {
                    mn("logout", "logoutRequest", e);
                    const n = new URL("/iam/v1/sessions/logout", pn);
                    let i;
                    t && (i = t.baseOptions);
                    const s = {
                        method: "POST",
                        ...i,
                        ...r
                    };
                    wn(n, {});
                    let o = i && i.headers ? i.headers : {};
                    return s.headers = {
                        "Content-Type": "application/json",
                        ...o,
                        ...r.headers
                    }, s.data = vn(e, s, t), {
                        url: An(n),
                        options: s
                    }
                },
                me: async (e = {}) => {
                    const r = new URL("/iam/v1/me", pn);
                    let n;
                    t && (n = t.baseOptions);
                    const i = {
                        method: "GET",
                        ...n,
                        ...e
                    };
                    wn(r, {});
                    let s = n && n.headers ? n.headers : {};
                    return i.headers = {
                        ...s,
                        ...e.headers
                    }, {
                        url: An(r),
                        options: i
                    }
                },
                poolOAuth: async (e, r = {}) => {
                    mn("poolOAuth", "key", e);
                    const n = new URL("/iam/v1/oauth/pool", pn);
                    let i;
                    t && (i = t.baseOptions);
                    const s = {
                            method: "POST",
                            ...i,
                            ...r
                        },
                        o = {},
                        a = {};
                    await gn(o, t), void 0 !== e && (a.key = e), wn(n, a);
                    let c = i && i.headers ? i.headers : {};
                    return s.headers = {
                        ...o,
                        ...c,
                        ...r.headers
                    }, {
                        url: An(n),
                        options: s
                    }
                },
                refresh: async (e, r = {}) => {
                    mn("refresh", "refreshTokenRequest", e);
                    const n = new URL("/iam/v1/sessions", pn);
                    let i;
                    t && (i = t.baseOptions);
                    const s = {
                            method: "POST",
                            ...i,
                            ...r
                        },
                        o = {};
                    await gn(o, t), o["Content-Type"] = "application/json", wn(n, {});
                    let a = i && i.headers ? i.headers : {};
                    return s.headers = {
                        ...o,
                        ...a,
                        ...r.headers
                    }, s.data = vn(e, s, t), {
                        url: An(n),
                        options: s
                    }
                },
                registerGuest: async (e, r = {}) => {
                    const n = new URL("/iam/v1/guest", pn);
                    let i;
                    t && (i = t.baseOptions);
                    const s = {
                            method: "POST",
                            ...i,
                            ...r
                        },
                        o = {};
                    await gn(o, t), null != e && (o["x-game"] = String(e)), wn(n, {});
                    let a = i && i.headers ? i.headers : {};
                    return s.headers = {
                        ...o,
                        ...a,
                        ...r.headers
                    }, {
                        url: An(n),
                        options: s
                    }
                },
                requestEmailVerification: async (e, r = {}) => {
                    mn("requestEmailVerification", "requestVerifyEmailRequest", e);
                    const n = new URL("/iam/v1/password/request_email_verification", pn);
                    let i;
                    t && (i = t.baseOptions);
                    const s = {
                            method: "POST",
                            ...i,
                            ...r
                        },
                        o = {};
                    await gn(o, t), o["Content-Type"] = "application/json", wn(n, {});
                    let a = i && i.headers ? i.headers : {};
                    return s.headers = {
                        ...o,
                        ...a,
                        ...r.headers
                    }, s.data = vn(e, s, t), {
                        url: An(n),
                        options: s
                    }
                },
                requestResetPassword: async (e, r = {}) => {
                    mn("requestResetPassword", "requestResetPasswordRequest", e);
                    const n = new URL("/iam/v1/password/request_reset", pn);
                    let i;
                    t && (i = t.baseOptions);
                    const s = {
                            method: "POST",
                            ...i,
                            ...r
                        },
                        o = {};
                    await gn(o, t), o["Content-Type"] = "application/json", wn(n, {});
                    let a = i && i.headers ? i.headers : {};
                    return s.headers = {
                        ...o,
                        ...a,
                        ...r.headers
                    }, s.data = vn(e, s, t), {
                        url: An(n),
                        options: s
                    }
                },
                resetPassword: async (e, r = {}) => {
                    mn("resetPassword", "resetPasswordRequest", e);
                    const n = new URL("/iam/v1/password/reset", pn);
                    let i;
                    t && (i = t.baseOptions);
                    const s = {
                            method: "POST",
                            ...i,
                            ...r
                        },
                        o = {};
                    await gn(o, t), o["Content-Type"] = "application/json", wn(n, {});
                    let a = i && i.headers ? i.headers : {};
                    return s.headers = {
                        ...o,
                        ...a,
                        ...r.headers
                    }, s.data = vn(e, s, t), {
                        url: An(n),
                        options: s
                    }
                },
                signupEmailPassword: async (e, r, n = {}) => {
                    mn("signupEmailPassword", "signupRequest", e);
                    const i = new URL("/iam/v1/password/signup", pn);
                    let s;
                    t && (s = t.baseOptions);
                    const o = {
                            method: "POST",
                            ...s,
                            ...n
                        },
                        a = {};
                    await gn(a, t), null != r && (a["x-game"] = String(r)), a["Content-Type"] = "application/json", wn(i, {});
                    let c = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...a,
                        ...c,
                        ...n.headers
                    }, o.data = vn(e, o, t), {
                        url: An(i),
                        options: o
                    }
                },
                thirdParty: async (e, r, n = {}) => {
                    mn("thirdParty", "thirdPartyOAuthRequest", e);
                    const i = new URL("/iam/v1/oauth/third_party", pn);
                    let s;
                    t && (s = t.baseOptions);
                    const o = {
                            method: "POST",
                            ...s,
                            ...n
                        },
                        a = {};
                    await gn(a, t), null != r && (a["x-game"] = String(r)), a["Content-Type"] = "application/json", wn(i, {});
                    let c = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...a,
                        ...c,
                        ...n.headers
                    }, o.data = vn(e, o, t), {
                        url: An(i),
                        options: o
                    }
                },
                unlinkEmail: async (e, r = {}) => {
                    mn("unlinkEmail", "unlinkEmailRequest", e);
                    const n = new URL("/iam/v1/password/unlink", pn);
                    let i;
                    t && (i = t.baseOptions);
                    const s = {
                        method: "POST",
                        ...i,
                        ...r
                    };
                    wn(n, {});
                    let o = i && i.headers ? i.headers : {};
                    return s.headers = {
                        "Content-Type": "application/json",
                        ...o,
                        ...r.headers
                    }, s.data = vn(e, s, t), {
                        url: An(n),
                        options: s
                    }
                },
                unlinkOAuth: async (e, r = {}) => {
                    mn("unlinkOAuth", "unlinkOAuthRequest", e);
                    const n = new URL("/iam/v1/oauth/unlink", pn);
                    let i;
                    t && (i = t.baseOptions);
                    const s = {
                        method: "POST",
                        ...i,
                        ...r
                    };
                    wn(n, {});
                    let o = i && i.headers ? i.headers : {};
                    return s.headers = {
                        "Content-Type": "application/json",
                        ...o,
                        ...r.headers
                    }, s.data = vn(e, s, t), {
                        url: An(n),
                        options: s
                    }
                },
                unlinkSIWE: async (e, r = {}) => {
                    mn("unlinkSIWE", "sIWERequest", e);
                    const n = new URL("/iam/v1/siwe/unlink", pn);
                    let i;
                    t && (i = t.baseOptions);
                    const s = {
                        method: "POST",
                        ...i,
                        ...r
                    };
                    wn(n, {});
                    let o = i && i.headers ? i.headers : {};
                    return s.headers = {
                        "Content-Type": "application/json",
                        ...o,
                        ...r.headers
                    }, s.data = vn(e, s, t), {
                        url: An(n),
                        options: s
                    }
                },
                verifyEmail: async (e, r = {}) => {
                    mn("verifyEmail", "verifyEmailRequest", e);
                    const n = new URL("/iam/v1/password/verify_email", pn);
                    let i;
                    t && (i = t.baseOptions);
                    const s = {
                            method: "POST",
                            ...i,
                            ...r
                        },
                        o = {};
                    await gn(o, t), o["Content-Type"] = "application/json", wn(n, {});
                    let a = i && i.headers ? i.headers : {};
                    return s.headers = {
                        ...o,
                        ...a,
                        ...r.headers
                    }, s.data = vn(e, s, t), {
                        url: An(n),
                        options: s
                    }
                },
                verifyOAuthToken: async (e, r = {}) => {
                    mn("verifyOAuthToken", "authenticateOAuthRequest", e);
                    const n = new URL("/iam/v1/oauth/verify", pn);
                    let i;
                    t && (i = t.baseOptions);
                    const s = {
                            method: "POST",
                            ...i,
                            ...r
                        },
                        o = {};
                    await gn(o, t), o["Content-Type"] = "application/json", wn(n, {});
                    let a = i && i.headers ? i.headers : {};
                    return s.headers = {
                        ...o,
                        ...a,
                        ...r.headers
                    }, s.data = vn(e, s, t), {
                        url: An(n),
                        options: s
                    }
                }
            }
        }(t);
        return {
            async authenticateSIWE(r, n) {
                const i = await e.authenticateSIWE(r, n);
                return bn(i, oe, ln, t)
            },
            async getJwks(r, n) {
                const i = await e.getJwks(r, n);
                return bn(i, oe, ln, t)
            },
            async initOAuth(r, n, i) {
                const s = await e.initOAuth(r, n, i);
                return bn(s, oe, ln, t)
            },
            async initSIWE(r, n, i) {
                const s = await e.initSIWE(r, n, i);
                return bn(s, oe, ln, t)
            },
            async linkEmail(r, n, i) {
                const s = await e.linkEmail(r, n, i);
                return bn(s, oe, ln, t)
            },
            async linkOAuth(r, n, i) {
                const s = await e.linkOAuth(r, n, i);
                return bn(s, oe, ln, t)
            },
            async linkSIWE(r, n) {
                const i = await e.linkSIWE(r, n);
                return bn(i, oe, ln, t)
            },
            async linkThirdParty(r, n, i) {
                const s = await e.linkThirdParty(r, n, i);
                return bn(s, oe, ln, t)
            },
            async loginEmailPassword(r, n, i) {
                const s = await e.loginEmailPassword(r, n, i);
                return bn(s, oe, ln, t)
            },
            async loginOIDC(r, n, i) {
                const s = await e.loginOIDC(r, n, i);
                return bn(s, oe, ln, t)
            },
            async loginWithIdToken(r, n) {
                const i = await e.loginWithIdToken(r, n);
                return bn(i, oe, ln, t)
            },
            async logout(r, n) {
                const i = await e.logout(r, n);
                return bn(i, oe, ln, t)
            },
            async me(r) {
                const n = await e.me(r);
                return bn(n, oe, ln, t)
            },
            async poolOAuth(r, n) {
                const i = await e.poolOAuth(r, n);
                return bn(i, oe, ln, t)
            },
            async refresh(r, n) {
                const i = await e.refresh(r, n);
                return bn(i, oe, ln, t)
            },
            async registerGuest(r, n) {
                const i = await e.registerGuest(r, n);
                return bn(i, oe, ln, t)
            },
            async requestEmailVerification(r, n) {
                const i = await e.requestEmailVerification(r, n);
                return bn(i, oe, ln, t)
            },
            async requestResetPassword(r, n) {
                const i = await e.requestResetPassword(r, n);
                return bn(i, oe, ln, t)
            },
            async resetPassword(r, n) {
                const i = await e.resetPassword(r, n);
                return bn(i, oe, ln, t)
            },
            async signupEmailPassword(r, n, i) {
                const s = await e.signupEmailPassword(r, n, i);
                return bn(s, oe, ln, t)
            },
            async thirdParty(r, n, i) {
                const s = await e.thirdParty(r, n, i);
                return bn(s, oe, ln, t)
            },
            async unlinkEmail(r, n) {
                const i = await e.unlinkEmail(r, n);
                return bn(i, oe, ln, t)
            },
            async unlinkOAuth(r, n) {
                const i = await e.unlinkOAuth(r, n);
                return bn(i, oe, ln, t)
            },
            async unlinkSIWE(r, n) {
                const i = await e.unlinkSIWE(r, n);
                return bn(i, oe, ln, t)
            },
            async verifyEmail(r, n) {
                const i = await e.verifyEmail(r, n);
                return bn(i, oe, ln, t)
            },
            async verifyOAuthToken(r, n) {
                const i = await e.verifyOAuthToken(r, n);
                return bn(i, oe, ln, t)
            }
        }
    };
    class Tn extends dn {
        authenticateSIWE(t, e) {
            return Rn(this.configuration).authenticateSIWE(t.sIWEAuthenticateRequest, e).then(t => t(this.axios, this.basePath))
        }
        getJwks(t, e) {
            return Rn(this.configuration).getJwks(t.publishableKey, e).then(t => t(this.axios, this.basePath))
        }
        initOAuth(t, e) {
            return Rn(this.configuration).initOAuth(t.oAuthInitRequest, t.xGame, e).then(t => t(this.axios, this.basePath))
        }
        initSIWE(t, e) {
            return Rn(this.configuration).initSIWE(t.sIWERequest, t.xGame, e).then(t => t(this.axios, this.basePath))
        }
        linkEmail(t, e) {
            return Rn(this.configuration).linkEmail(t.loginRequest, t.xGame, e).then(t => t(this.axios, this.basePath))
        }
        linkOAuth(t, e) {
            return Rn(this.configuration).linkOAuth(t.oAuthInitRequest, t.xGame, e).then(t => t(this.axios, this.basePath))
        }
        linkSIWE(t, e) {
            return Rn(this.configuration).linkSIWE(t.sIWEAuthenticateRequest, e).then(t => t(this.axios, this.basePath))
        }
        linkThirdParty(t, e) {
            return Rn(this.configuration).linkThirdParty(t.thirdPartyLinkRequest, t.xGame, e).then(t => t(this.axios, this.basePath))
        }
        loginEmailPassword(t, e) {
            return Rn(this.configuration).loginEmailPassword(t.loginRequest, t.xGame, e).then(t => t(this.axios, this.basePath))
        }
        loginOIDC(t, e) {
            return Rn(this.configuration).loginOIDC(t.loginOIDCRequest, t.xGame, e).then(t => t(this.axios, this.basePath))
        }
        loginWithIdToken(t, e) {
            return Rn(this.configuration).loginWithIdToken(t.loginWithIdTokenRequest, e).then(t => t(this.axios, this.basePath))
        }
        logout(t, e) {
            return Rn(this.configuration).logout(t.logoutRequest, e).then(t => t(this.axios, this.basePath))
        }
        me(t) {
            return Rn(this.configuration).me(t).then(t => t(this.axios, this.basePath))
        }
        poolOAuth(t, e) {
            return Rn(this.configuration).poolOAuth(t.key, e).then(t => t(this.axios, this.basePath))
        }
        refresh(t, e) {
            return Rn(this.configuration).refresh(t.refreshTokenRequest, e).then(t => t(this.axios, this.basePath))
        }
        registerGuest(t = {}, e) {
            return Rn(this.configuration).registerGuest(t.xGame, e).then(t => t(this.axios, this.basePath))
        }
        requestEmailVerification(t, e) {
            return Rn(this.configuration).requestEmailVerification(t.requestVerifyEmailRequest, e).then(t => t(this.axios, this.basePath))
        }
        requestResetPassword(t, e) {
            return Rn(this.configuration).requestResetPassword(t.requestResetPasswordRequest, e).then(t => t(this.axios, this.basePath))
        }
        resetPassword(t, e) {
            return Rn(this.configuration).resetPassword(t.resetPasswordRequest, e).then(t => t(this.axios, this.basePath))
        }
        signupEmailPassword(t, e) {
            return Rn(this.configuration).signupEmailPassword(t.signupRequest, t.xGame, e).then(t => t(this.axios, this.basePath))
        }
        thirdParty(t, e) {
            return Rn(this.configuration).thirdParty(t.thirdPartyOAuthRequest, t.xGame, e).then(t => t(this.axios, this.basePath))
        }
        unlinkEmail(t, e) {
            return Rn(this.configuration).unlinkEmail(t.unlinkEmailRequest, e).then(t => t(this.axios, this.basePath))
        }
        unlinkOAuth(t, e) {
            return Rn(this.configuration).unlinkOAuth(t.unlinkOAuthRequest, e).then(t => t(this.axios, this.basePath))
        }
        unlinkSIWE(t, e) {
            return Rn(this.configuration).unlinkSIWE(t.sIWERequest, e).then(t => t(this.axios, this.basePath))
        }
        verifyEmail(t, e) {
            return Rn(this.configuration).verifyEmail(t.verifyEmailRequest, e).then(t => t(this.axios, this.basePath))
        }
        verifyOAuthToken(t, e) {
            return Rn(this.configuration).verifyOAuthToken(t.authenticateOAuthRequest, e).then(t => t(this.axios, this.basePath))
        }
    }
    const In = function(t) {
        const e = function(t) {
            return {
                createSession: async (e, r, n = {}) => {
                    mn("createSession", "createSessionRequest", e);
                    const i = new URL("/v1/sessions", pn);
                    let s;
                    t && (s = t.baseOptions);
                    const o = {
                            method: "POST",
                            ...s,
                            ...n
                        },
                        a = {};
                    await gn(a, t), null != r && (a["X-Behalf-Of-Project"] = String(r)), a["Content-Type"] = "application/json", wn(i, {});
                    let c = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...a,
                        ...c,
                        ...n.headers
                    }, o.data = vn(e, o, t), {
                        url: An(i),
                        options: o
                    }
                },
                getPlayerSessions: async (e, r, n, i, s, o = {}) => {
                    mn("getPlayerSessions", "player", e);
                    const a = new URL("/v1/sessions", pn);
                    let c;
                    t && (c = t.baseOptions);
                    const u = {
                            method: "GET",
                            ...c,
                            ...o
                        },
                        h = {},
                        l = {};
                    await gn(h, t), void 0 !== r && (l.limit = r), void 0 !== n && (l.skip = n), void 0 !== i && (l.order = i), void 0 !== e && (l.player = e), s && (l.expand = s), wn(a, l);
                    let d = c && c.headers ? c.headers : {};
                    return u.headers = {
                        ...h,
                        ...d,
                        ...o.headers
                    }, {
                        url: An(a),
                        options: u
                    }
                },
                getSession: async (e, r, n = {}) => {
                    mn("getSession", "id", e);
                    const i = "/v1/sessions/{id}".replace("{id}", encodeURIComponent(String(e))),
                        s = new URL(i, pn);
                    let o;
                    t && (o = t.baseOptions);
                    const a = {
                            method: "GET",
                            ...o,
                            ...n
                        },
                        c = {},
                        u = {};
                    await gn(c, t), r && (u.expand = r), wn(s, u);
                    let h = o && o.headers ? o.headers : {};
                    return a.headers = {
                        ...c,
                        ...h,
                        ...n.headers
                    }, {
                        url: An(s),
                        options: a
                    }
                },
                revokeSession: async (e, r, n = {}) => {
                    mn("revokeSession", "revokeSessionRequest", e);
                    const i = new URL("/v1/sessions/revoke", pn);
                    let s;
                    t && (s = t.baseOptions);
                    const o = {
                            method: "POST",
                            ...s,
                            ...n
                        },
                        a = {};
                    await gn(a, t), null != r && (a["X-Behalf-Of-Project"] = String(r)), a["Content-Type"] = "application/json", wn(i, {});
                    let c = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...a,
                        ...c,
                        ...n.headers
                    }, o.data = vn(e, o, t), {
                        url: An(i),
                        options: o
                    }
                },
                signatureSession: async (e, r, n = {}) => {
                    mn("signatureSession", "id", e), mn("signatureSession", "signatureRequest", r);
                    const i = "/v1/sessions/{id}/signature".replace("{id}", encodeURIComponent(String(e))),
                        s = new URL(i, pn);
                    let o;
                    t && (o = t.baseOptions);
                    const a = {
                            method: "POST",
                            ...o,
                            ...n
                        },
                        c = {};
                    await gn(c, t), await gn(c, t), c["Content-Type"] = "application/json", wn(s, {});
                    let u = o && o.headers ? o.headers : {};
                    return a.headers = {
                        ...c,
                        ...u,
                        ...n.headers
                    }, a.data = vn(r, a, t), {
                        url: An(s),
                        options: a
                    }
                }
            }
        }(t);
        return {
            async createSession(r, n, i) {
                const s = await e.createSession(r, n, i);
                return bn(s, oe, ln, t)
            },
            async getPlayerSessions(r, n, i, s, o, a) {
                const c = await e.getPlayerSessions(r, n, i, s, o, a);
                return bn(c, oe, ln, t)
            },
            async getSession(r, n, i) {
                const s = await e.getSession(r, n, i);
                return bn(s, oe, ln, t)
            },
            async revokeSession(r, n, i) {
                const s = await e.revokeSession(r, n, i);
                return bn(s, oe, ln, t)
            },
            async signatureSession(r, n, i) {
                const s = await e.signatureSession(r, n, i);
                return bn(s, oe, ln, t)
            }
        }
    };
    class kn extends dn {
        createSession(t, e) {
            return In(this.configuration).createSession(t.createSessionRequest, t.xBehalfOfProject, e).then(t => t(this.axios, this.basePath))
        }
        getPlayerSessions(t, e) {
            return In(this.configuration).getPlayerSessions(t.player, t.limit, t.skip, t.order, t.expand, e).then(t => t(this.axios, this.basePath))
        }
        getSession(t, e) {
            return In(this.configuration).getSession(t.id, t.expand, e).then(t => t(this.axios, this.basePath))
        }
        revokeSession(t, e) {
            return In(this.configuration).revokeSession(t.revokeSessionRequest, t.xBehalfOfProject, e).then(t => t(this.axios, this.basePath))
        }
        signatureSession(t, e) {
            return In(this.configuration).signatureSession(t.id, t.signatureRequest, e).then(t => t(this.axios, this.basePath))
        }
    }
    const Sn = function(t) {
        const e = function(t) {
            return {
                createTransactionIntent: async (e, r, n = {}) => {
                    mn("createTransactionIntent", "createTransactionIntentRequest", e);
                    const i = new URL("/v1/transaction_intents", pn);
                    let s;
                    t && (s = t.baseOptions);
                    const o = {
                            method: "POST",
                            ...s,
                            ...n
                        },
                        a = {};
                    await gn(a, t), null != r && (a["X-Behalf-Of-Project"] = String(r)), a["Content-Type"] = "application/json", wn(i, {});
                    let c = s && s.headers ? s.headers : {};
                    return o.headers = {
                        ...a,
                        ...c,
                        ...n.headers
                    }, o.data = vn(e, o, t), {
                        url: An(i),
                        options: o
                    }
                },
                estimateTransactionIntentCost: async (e, r = {}) => {
                    mn("estimateTransactionIntentCost", "createTransactionIntentRequest", e);
                    const n = new URL("/v1/transaction_intents/estimate_gas_cost", pn);
                    let i;
                    t && (i = t.baseOptions);
                    const s = {
                            method: "POST",
                            ...i,
                            ...r
                        },
                        o = {};
                    await gn(o, t), o["Content-Type"] = "application/json", wn(n, {});
                    let a = i && i.headers ? i.headers : {};
                    return s.headers = {
                        ...o,
                        ...a,
                        ...r.headers
                    }, s.data = vn(e, s, t), {
                        url: An(n),
                        options: s
                    }
                },
                getTransactionIntent: async (e, r, n = {}) => {
                    mn("getTransactionIntent", "id", e);
                    const i = "/v1/transaction_intents/{id}".replace("{id}", encodeURIComponent(String(e))),
                        s = new URL(i, pn);
                    let o;
                    t && (o = t.baseOptions);
                    const a = {
                            method: "GET",
                            ...o,
                            ...n
                        },
                        c = {},
                        u = {};
                    await gn(c, t), r && (u.expand = r), wn(s, u);
                    let h = o && o.headers ? o.headers : {};
                    return a.headers = {
                        ...c,
                        ...h,
                        ...n.headers
                    }, {
                        url: An(s),
                        options: a
                    }
                },
                getTransactionIntents: async (e, r, n, i, s, o, a, c, u, h = {}) => {
                    const l = new URL("/v1/transaction_intents", pn);
                    let d;
                    t && (d = t.baseOptions);
                    const f = {
                            method: "GET",
                            ...d,
                            ...h
                        },
                        p = {},
                        m = {};
                    await gn(p, t), void 0 !== e && (m.limit = e), void 0 !== r && (m.skip = r), void 0 !== n && (m.order = n), i && (m.expand = i), void 0 !== s && (m.chainId = s), o && (m.account = o), a && (m.player = a), void 0 !== c && (m.status = c), u && (m.policy = u), wn(l, m);
                    let g = d && d.headers ? d.headers : {};
                    return f.headers = {
                        ...p,
                        ...g,
                        ...h.headers
                    }, {
                        url: An(l),
                        options: f
                    }
                },
                signature: async (e, r, n = {}) => {
                    mn("signature", "id", e), mn("signature", "signatureRequest", r);
                    const i = "/v1/transaction_intents/{id}/signature".replace("{id}", encodeURIComponent(String(e))),
                        s = new URL(i, pn);
                    let o;
                    t && (o = t.baseOptions);
                    const a = {
                            method: "POST",
                            ...o,
                            ...n
                        },
                        c = {};
                    await gn(c, t), await gn(c, t), c["Content-Type"] = "application/json", wn(s, {});
                    let u = o && o.headers ? o.headers : {};
                    return a.headers = {
                        ...c,
                        ...u,
                        ...n.headers
                    }, a.data = vn(r, a, t), {
                        url: An(s),
                        options: a
                    }
                }
            }
        }(t);
        return {
            async createTransactionIntent(r, n, i) {
                const s = await e.createTransactionIntent(r, n, i);
                return bn(s, oe, ln, t)
            },
            async estimateTransactionIntentCost(r, n) {
                const i = await e.estimateTransactionIntentCost(r, n);
                return bn(i, oe, ln, t)
            },
            async getTransactionIntent(r, n, i) {
                const s = await e.getTransactionIntent(r, n, i);
                return bn(s, oe, ln, t)
            },
            async getTransactionIntents(r, n, i, s, o, a, c, u, h, l) {
                const d = await e.getTransactionIntents(r, n, i, s, o, a, c, u, h, l);
                return bn(d, oe, ln, t)
            },
            async signature(r, n, i) {
                const s = await e.signature(r, n, i);
                return bn(s, oe, ln, t)
            }
        }
    };
    let Nn = class extends dn {
        createTransactionIntent(t, e) {
            return Sn(this.configuration).createTransactionIntent(t.createTransactionIntentRequest, t.xBehalfOfProject, e).then(t => t(this.axios, this.basePath))
        }
        estimateTransactionIntentCost(t, e) {
            return Sn(this.configuration).estimateTransactionIntentCost(t.createTransactionIntentRequest, e).then(t => t(this.axios, this.basePath))
        }
        getTransactionIntent(t, e) {
            return Sn(this.configuration).getTransactionIntent(t.id, t.expand, e).then(t => t(this.axios, this.basePath))
        }
        getTransactionIntents(t = {}, e) {
            return Sn(this.configuration).getTransactionIntents(t.limit, t.skip, t.order, t.expand, t.chainId, t.account, t.player, t.status, t.policy, e).then(t => t(this.axios, this.basePath))
        }
        signature(t, e) {
            return Sn(this.configuration).signature(t.id, t.signatureRequest, e).then(t => t(this.axios, this.basePath))
        }
    };
    class On {
        apiKey;
        username;
        password;
        accessToken;
        basePath;
        baseOptions;
        formDataCtor;
        constructor(t = {}) {
            this.apiKey = t.apiKey, this.username = t.username, this.password = t.password, this.accessToken = t.accessToken, this.basePath = t.basePath, this.baseOptions = t.baseOptions, this.formDataCtor = t.formDataCtor
        }
        isJsonMime(t) {
            const e = new RegExp("^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$", "i");
            return null !== t && (e.test(t) || "application/json-patch+json" === t.toLowerCase())
        }
    }
    const Pn = ({
        basePath: t,
        accessToken: e
    }) => {
        if (!t.trim()) throw Error("basePath can not be empty");
        return new On({
            basePath: t,
            accessToken: e
        })
    };
    class Cn {
        config;
        transactionIntentsApi;
        accountsApi;
        sessionsApi;
        authenticationApi;
        constructor(t) {
            const e = oe.create();
            hn(e, {
                retries: 3,
                retryDelay: hn.exponentialDelay,
                retryCondition: hn.isRetryableError
            });
            const r = {
                basePath: t.basePath,
                accessToken: t.accessToken
            };
            this.config = {
                backend: Pn(r)
            }, this.transactionIntentsApi = new Nn(this.config.backend, void 0, e), this.accountsApi = new _n(this.config.backend, void 0, e), this.sessionsApi = new kn(this.config.backend, void 0, e), this.authenticationApi = new Tn(this.config.backend, void 0, e)
        }
    }
    let xn = class {
            storage;
            constructor(t) {
                this.storage = t
            }
            async get(t) {
                return Promise.resolve(this.storage.getItem(t))
            }
            save(t, e) {
                this.storage.setItem(t, e)
            }
            remove(t) {
                this.storage.removeItem(t)
            }
            flush() {
                for (const t of Object.values(Je)) this.storage.removeItem(t)
            }
        },
        Mn = class {
            realStorage = null;
            customStorage;
            constructor(t) {
                this.customStorage = t
            }
            getRealStorage() {
                if (!this.realStorage)
                    if (this.customStorage) this.realStorage = this.customStorage;
                    else {
                        if ("undefined" == typeof window || "undefined" == typeof localStorage) throw new Re("Storage not available. Please provide custom storage or use in browser environment.", _e.INVALID_CONFIGURATION);
                        this.realStorage = new xn(localStorage)
                    } return this.realStorage
            }
            async get(t) {
                return this.getRealStorage().get(t)
            }
            save(t, e) {
                this.getRealStorage().save(t, e)
            }
            remove(t) {
                this.getRealStorage().remove(t)
            }
            flush() {
                this.getRealStorage().flush()
            }
        };
    const Un = new TextEncoder,
        Dn = new TextDecoder;
    class Ln extends Error {
        constructor(t, e) {
            super(t, e), this.code = "ERR_JOSE_GENERIC", this.name = this.constructor.name, Error.captureStackTrace?.(this, this.constructor)
        }
    }
    Ln.code = "ERR_JOSE_GENERIC";
    (class extends Ln {
        constructor(t, e, r = "unspecified", n = "unspecified") {
            super(t, {
                cause: {
                    claim: r,
                    reason: n,
                    payload: e
                }
            }), this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED", this.claim = r, this.reason = n, this.payload = e
        }
    }).code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
    (class extends Ln {
        constructor(t, e, r = "unspecified", n = "unspecified") {
            super(t, {
                cause: {
                    claim: r,
                    reason: n,
                    payload: e
                }
            }), this.code = "ERR_JWT_EXPIRED", this.claim = r, this.reason = n, this.payload = e
        }
    }).code = "ERR_JWT_EXPIRED";
    (class extends Ln {
        constructor() {
            super(...arguments), this.code = "ERR_JOSE_ALG_NOT_ALLOWED"
        }
    }).code = "ERR_JOSE_ALG_NOT_ALLOWED";
    (class extends Ln {
        constructor() {
            super(...arguments), this.code = "ERR_JOSE_NOT_SUPPORTED"
        }
    }).code = "ERR_JOSE_NOT_SUPPORTED";
    (class extends Ln {
        constructor(t = "decryption operation failed", e) {
            super(t, e), this.code = "ERR_JWE_DECRYPTION_FAILED"
        }
    }).code = "ERR_JWE_DECRYPTION_FAILED";
    (class extends Ln {
        constructor() {
            super(...arguments), this.code = "ERR_JWE_INVALID"
        }
    }).code = "ERR_JWE_INVALID";
    (class extends Ln {
        constructor() {
            super(...arguments), this.code = "ERR_JWS_INVALID"
        }
    }).code = "ERR_JWS_INVALID";
    class Bn extends Ln {
        constructor() {
            super(...arguments), this.code = "ERR_JWT_INVALID"
        }
    }
    Bn.code = "ERR_JWT_INVALID";
    (class extends Ln {
        constructor() {
            super(...arguments), this.code = "ERR_JWK_INVALID"
        }
    }).code = "ERR_JWK_INVALID";
    (class extends Ln {
        constructor() {
            super(...arguments), this.code = "ERR_JWKS_INVALID"
        }
    }).code = "ERR_JWKS_INVALID";
    (class extends Ln {
        constructor(t = "no applicable key found in the JSON Web Key Set", e) {
            super(t, e), this.code = "ERR_JWKS_NO_MATCHING_KEY"
        }
    }).code = "ERR_JWKS_NO_MATCHING_KEY";
    (class extends Ln {
        constructor(t = "multiple matching keys found in the JSON Web Key Set", e) {
            super(t, e), this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS"
        }
    }).code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
    (class extends Ln {
        constructor(t = "request timed out", e) {
            super(t, e), this.code = "ERR_JWKS_TIMEOUT"
        }
    }).code = "ERR_JWKS_TIMEOUT";
    (class extends Ln {
        constructor(t = "signature verification failed", e) {
            super(t, e), this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED"
        }
    }).code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
    const Fn = t => (t => {
            let e = t;
            "string" == typeof e && (e = Un.encode(e));
            const r = [];
            for (let t = 0; t < e.length; t += 32768) r.push(String.fromCharCode.apply(null, e.subarray(t, t + 32768)));
            return btoa(r.join(""))
        })(t).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_"),
        qn = t => {
            let e = t;
            e instanceof Uint8Array && (e = Dn.decode(e)), e = e.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
            try {
                return (t => {
                    const e = atob(t),
                        r = new Uint8Array(e.length);
                    for (let t = 0; t < e.length; t++) r[t] = e.charCodeAt(t);
                    return r
                })(e)
            } catch {
                throw new TypeError("The input to be decoded is not correctly encoded.")
            }
        };

    function Gn(t) {
        if ("string" != typeof t) throw new Bn("JWTs must use Compact JWS serialization, JWT must be a string");
        const {
            1: e,
            length: r
        } = t.split(".");
        if (5 === r) throw new Bn("Only JWTs using Compact JWS serialization can be decoded");
        if (3 !== r) throw new Bn("Invalid JWT");
        if (!e) throw new Bn("JWTs must contain a payload");
        let n, i;
        try {
            n = qn(e)
        } catch {
            throw new Bn("Failed to base64url decode the payload")
        }
        try {
            i = JSON.parse(Dn.decode(n))
        } catch {
            throw new Bn("Failed to parse the decoded payload as JSON")
        }
        if (! function(t) {
                if ("object" != typeof(e = t) || null === e || "[object Object]" !== Object.prototype.toString.call(t)) return !1;
                var e;
                if (null === Object.getPrototypeOf(t)) return !0;
                let r = t;
                for (; null !== Object.getPrototypeOf(r);) r = Object.getPrototypeOf(r);
                return Object.getPrototypeOf(t) === r
            }(i)) throw new Bn("Invalid JWT Claims Set");
        return i
    }
    async function jn(t) {
        const e = (new TextEncoder).encode(t),
            r = await async function(t, e) {
                if (Ye) return Ye(t, e);
                if ("undefined" != typeof crypto && crypto.subtle && crypto.subtle.digest) return crypto.subtle.digest(t, e);
                throw new Error("No crypto digest function available. Please provide a crypto override for this environment.")
            }("SHA-256", e);
        return new Uint8Array(r)
    }

    function Hn(t) {
        const e = new Uint8Array(t);
        return crypto.getRandomValues(e), e
    }
    class zn {
        decodedPayload;
        value;
        constructor(t) {
            this.value = t;
            try {
                this.decodedPayload = Gn(t)
            } catch (t) {
                throw new Re("Invalid token format", _e.AUTHENTICATION_ERROR)
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
        isExpired(t = 30) {
            return !this.expiration || (Dr("Token expiration:", 1e3 * (this.expiration - t), "Current time:", Date.now()), Date.now() >= 1e3 * (this.expiration - t))
        }
        static parse(t) {
            try {
                return new zn(t)
            } catch {
                return null
            }
        }
    }
    class Kn {
        storage;
        constructor(t) {
            this.storage = t
        }
        async savePKCEData(t) {
            this.storage.save(Je.PKCE_STATE, t.state), this.storage.save(Je.PKCE_VERIFIER, t.verifier)
        }
        async getPKCEData() {
            const t = await this.storage.get(Je.PKCE_STATE),
                e = await this.storage.get(Je.PKCE_VERIFIER);
            return t && e ? {
                state: t,
                verifier: e
            } : null
        }
        async clearPKCEData() {
            this.storage.remove(Je.PKCE_STATE), this.storage.remove(Je.PKCE_VERIFIER)
        }
    }
    let Vn = class t {
            deviceCredentialsManager;
            backendApiClientsInstance;
            publishableKeyInstance;
            constructor(t) {
                this.deviceCredentialsManager = new Kn(t)
            }
            setBackendApiClients(t, e) {
                this.backendApiClientsInstance = t, this.publishableKeyInstance = e
            }
            get backendApiClients() {
                if (!this.backendApiClientsInstance) throw new Re("Backend API clients not initialized", _e.INTERNAL_ERROR);
                return this.backendApiClientsInstance
            }
            get publishableKey() {
                if (!this.publishableKeyInstance) throw new Re("Publishable key not initialized", _e.INTERNAL_ERROR);
                return this.publishableKeyInstance
            }
            async initOAuth(e, r, n) {
                const i = r?.usePooling ?? !1,
                    s = r?.skipBrowserRedirect ?? !1,
                    {
                        usePooling: o,
                        skipBrowserRedirect: a,
                        ...c
                    } = r || {},
                    u = {
                        oAuthInitRequest: {
                            provider: e,
                            options: c,
                            usePooling: i
                        }
                    },
                    h = await Te(async () => this.backendApiClients.authenticationApi.initOAuth(u, t.getEcosystemGameOptsOrUndefined(n)), {
                        default: _e.AUTHENTICATION_ERROR
                    });
                return "undefined" == typeof window || s || window.location.assign(h.data.url), {
                    url: h.data.url,
                    key: h.data.key
                }
            }
            async registerGuest() {
                const t = {};
                return Te(async () => (await this.backendApiClients.authenticationApi.registerGuest(t)).data, {
                    default: _e.USER_REGISTRATION_ERROR
                })
            }
            async poolOAuth(t) {
                const e = {
                    key: t
                };
                for (let r = 0; r < 600; r++) try {
                    const t = await Te(async () => this.backendApiClients.authenticationApi.poolOAuth(e), {
                        default: _e.AUTHENTICATION_ERROR
                    });
                    if (200 === t.status) return t.data
                } catch (t) {
                    if (t.response && 404 === t.response.status) {
                        await new Promise(t => {
                            setTimeout(t, 500)
                        });
                        continue
                    }
                    throw t
                }
                throw new Error("Failed to pool OAuth, try again later")
            }
            async loginWithIdToken(e, r, n) {
                const i = {
                    loginWithIdTokenRequest: {
                        provider: e,
                        token: r
                    }
                };
                return Te(async () => (await this.backendApiClients.authenticationApi.loginWithIdToken(i, t.getEcosystemGameOptsOrUndefined(n))).data, {
                    default: _e.AUTHENTICATION_ERROR,
                    401: _e.AUTHENTICATION_ERROR,
                    403: _e.USER_NOT_AUTHORIZED_ON_ECOSYSTEM
                }, t => {
                    Gr.captureAxiosError("loginWithIdToken", t)
                })
            }
            async authenticateThirdParty(e, r, n, i) {
                const s = {
                    thirdPartyOAuthRequest: {
                        provider: e,
                        token: r,
                        tokenType: n
                    }
                };
                return Te(async () => (await this.backendApiClients.authenticationApi.thirdParty(s, t.getEcosystemGameOptsOrUndefined(i))).data, {
                    default: _e.AUTHENTICATION_ERROR,
                    401: _e.AUTHENTICATION_ERROR,
                    403: _e.USER_NOT_AUTHORIZED_ON_ECOSYSTEM
                }, t => {
                    Gr.captureAxiosError("authenticateThirdParty", t)
                })
            }
            async initSIWE(e, r) {
                const n = {
                        sIWERequest: {
                            address: e
                        }
                    },
                    i = await Te(async () => this.backendApiClients.authenticationApi.initSIWE(n, t.getEcosystemGameOptsOrUndefined(r)), {
                        default: _e.AUTHENTICATION_ERROR
                    });
                return {
                    address: i.data.address,
                    nonce: i.data.nonce,
                    expiresAt: i.data.expiresAt
                }
            }
            async authenticateSIWE(t, e, r, n) {
                const i = {
                    sIWEAuthenticateRequest: {
                        signature: t,
                        message: e,
                        walletClientType: r,
                        connectorType: n
                    }
                };
                return Te(async () => (await this.backendApiClients.authenticationApi.authenticateSIWE(i)).data, {
                    default: _e.AUTHENTICATION_ERROR,
                    401: _e.AUTHENTICATION_ERROR,
                    403: _e.USER_NOT_AUTHORIZED_ON_ECOSYSTEM
                }, t => {
                    Gr.captureAxiosError("authenticateSIWE", t)
                })
            }
            static getEcosystemGameOptsOrUndefined(t) {
                if (t) return {
                    headers: {
                        "x-game": t
                    }
                }
            }
            async loginEmailPassword(e, r, n) {
                const i = {
                    loginRequest: {
                        email: e,
                        password: r
                    }
                };
                return Te(async () => (await this.backendApiClients.authenticationApi.loginEmailPassword(i, t.getEcosystemGameOptsOrUndefined(n))).data, {
                    default: _e.AUTHENTICATION_ERROR,
                    401: _e.AUTHENTICATION_ERROR,
                    403: _e.USER_NOT_AUTHORIZED_ON_ECOSYSTEM
                }, t => {
                    Gr.captureAxiosError("loginEmailPassword", t)
                })
            }
            async requestResetPassword(t, e) {
                const r = Hn(32),
                    n = Fn(r),
                    i = await jn(n),
                    s = Fn(i),
                    o = Hn(32),
                    a = Fn(o);
                await this.deviceCredentialsManager.savePKCEData({
                    state: a,
                    verifier: n
                });
                const c = {
                    requestResetPasswordRequest: {
                        email: t,
                        redirectUrl: e,
                        challenge: {
                            codeChallenge: s,
                            method: De.S256
                        }
                    }
                };
                await Te(async () => {
                    await this.backendApiClients.authenticationApi.requestResetPassword(c)
                }, {
                    default: _e.AUTHENTICATION_ERROR
                })
            }
            async resetPassword(t, e, r) {
                return Te(async () => {
                    const n = await this.deviceCredentialsManager.getPKCEData();
                    if (!n) throw new Error("No code verifier or state for PKCE");
                    const i = {
                        resetPasswordRequest: {
                            email: t,
                            password: e,
                            state: r,
                            challenge: {
                                codeVerifier: n.verifier
                            }
                        }
                    };
                    await this.backendApiClients.authenticationApi.resetPassword(i)
                }, {
                    default: _e.AUTHENTICATION_ERROR
                })
            }
            async requestEmailVerification(t, e) {
                const r = Hn(32),
                    n = Fn(r),
                    i = await jn(n),
                    s = Fn(i),
                    o = Hn(32),
                    a = Fn(o);
                await this.deviceCredentialsManager.savePKCEData({
                    state: a,
                    verifier: n
                });
                const c = {
                    requestVerifyEmailRequest: {
                        email: t,
                        redirectUrl: e,
                        challenge: {
                            codeChallenge: s,
                            method: De.S256
                        }
                    }
                };
                await Te(async () => {
                    await this.backendApiClients.authenticationApi.requestEmailVerification(c)
                }, {
                    default: _e.AUTHENTICATION_ERROR
                })
            }
            async verifyEmail(t, e) {
                return Te(async () => {
                    const r = await this.deviceCredentialsManager.getPKCEData();
                    if (!r) throw new Error("No code verifier or state for PKCE");
                    const n = {
                        verifyEmailRequest: {
                            email: t,
                            token: e,
                            challenge: {
                                codeVerifier: r.verifier
                            }
                        }
                    };
                    await this.backendApiClients.authenticationApi.verifyEmail(n)
                }, {
                    default: _e.AUTHENTICATION_ERROR
                })
            }
            async signupEmailPassword(e, r, n, i) {
                const s = {
                    signupRequest: {
                        email: e,
                        password: r,
                        name: n
                    }
                };
                return Te(async () => (await this.backendApiClients.authenticationApi.signupEmailPassword(s, t.getEcosystemGameOptsOrUndefined(i))).data, {
                    default: _e.USER_REGISTRATION_ERROR,
                    401: _e.USER_REGISTRATION_ERROR,
                    403: _e.USER_NOT_AUTHORIZED_ON_ECOSYSTEM
                }, t => {
                    Gr.captureAxiosError("signupEmailPassword", t)
                })
            }
            async validateCredentials(t, e) {
                if (!t.refreshToken) throw new Re("No refresh token provided", _e.AUTHENTICATION_ERROR);
                if (e) return this.refreshTokens(t.refreshToken, e);
                Dr("Validating credentials with token:", t.token);
                const r = zn.parse(t.token);
                return r ? r.isExpired() ? (Dr("Token expired, refreshing..."), this.refreshTokens(t.refreshToken)) : {
                    player: r.subject,
                    accessToken: t.token,
                    refreshToken: t.refreshToken
                } : this.refreshTokens(t.refreshToken)
            }
            async refreshTokens(t, e) {
                const r = {
                    refreshTokenRequest: {
                        refreshToken: t,
                        forceRefresh: e
                    }
                };
                return Te(async () => {
                    const t = await this.backendApiClients.authenticationApi.refresh(r);
                    return {
                        player: t.data.player.id,
                        accessToken: t.data.token,
                        refreshToken: t.data.refreshToken
                    }
                }, {
                    default: _e.REFRESH_TOKEN_ERROR
                })
            }
            async logout(t, e) {
                const r = {
                    logoutRequest: {
                        refreshToken: e
                    }
                };
                return Te(async () => {
                    await this.backendApiClients.authenticationApi.logout(r, {
                        headers: {
                            authorization: `Bearer ${this.publishableKey}`,
                            "x-player-token": t
                        }
                    })
                }, {
                    default: _e.LOGOUT_ERROR
                })
            }
            async getUser(t) {
                return Te(async () => (await this.backendApiClients.authenticationApi.me({
                    headers: {
                        authorization: `Bearer ${this.publishableKey}`,
                        "x-player-token": t.token,
                        "x-auth-provider": t.thirdPartyProvider,
                        "x-token-type": t.thirdPartyTokenType
                    }
                })).data, {
                    default: _e.AUTHENTICATION_ERROR
                })
            }
            async linkThirdParty(t, e, r, n, i) {
                const s = {
                    thirdPartyLinkRequest: {
                        provider: e,
                        token: r,
                        tokenType: n
                    }
                };
                return Te(async () => (await this.backendApiClients.authenticationApi.linkThirdParty(s, {
                    headers: {
                        authorization: `Bearer ${this.publishableKey}`,
                        "x-player-token": t.token,
                        "x-auth-provider": t.thirdPartyProvider || void 0,
                        "x-token-type": t.thirdPartyTokenType || void 0,
                        "x-game": i || void 0
                    }
                })).data, {
                    default: _e.AUTHENTICATION_ERROR
                })
            }
            async linkOAuth(t, e, r, n) {
                const i = r?.skipBrowserRedirect ?? !1;
                delete r?.skipBrowserRedirect;
                const s = {
                        oAuthInitRequest: {
                            provider: e,
                            options: r,
                            usePooling: r?.usePooling || !1
                        }
                    },
                    o = await Te(async () => this.backendApiClients.authenticationApi.linkOAuth(s, {
                        headers: {
                            authorization: `Bearer ${this.publishableKey}`,
                            "x-player-token": t.token,
                            "x-auth-provider": t.thirdPartyProvider || void 0,
                            "x-token-type": t.thirdPartyTokenType || void 0,
                            "x-game": n || void 0
                        }
                    }), {
                        default: _e.AUTHENTICATION_ERROR
                    });
                return "undefined" == typeof window || i || window.location.assign(o.data.url), {
                    url: o.data.url,
                    key: o.data.key
                }
            }
            async unlinkOAuth(t, e) {
                const r = {
                    unlinkOAuthRequest: {
                        provider: t
                    }
                };
                return Te(async () => (await this.backendApiClients.authenticationApi.unlinkOAuth(r, {
                    headers: {
                        authorization: `Bearer ${this.publishableKey}`,
                        "x-player-token": e
                    }
                })).data, {
                    default: _e.AUTHENTICATION_ERROR
                })
            }
            async unlinkWallet(t, e) {
                const r = {
                    sIWERequest: {
                        address: t
                    }
                };
                return Te(async () => (await this.backendApiClients.authenticationApi.unlinkSIWE(r, {
                    headers: {
                        authorization: `Bearer ${this.publishableKey}`,
                        "x-player-token": e
                    }
                })).data, {
                    default: _e.AUTHENTICATION_ERROR
                })
            }
            async linkWallet(t, e, r, n, i) {
                const s = {
                    sIWEAuthenticateRequest: {
                        signature: t,
                        message: e,
                        walletClientType: r,
                        connectorType: n
                    }
                };
                return Te(async () => (await this.backendApiClients.authenticationApi.linkSIWE(s, {
                    headers: {
                        authorization: `Bearer ${this.publishableKey}`,
                        "x-player-token": i
                    }
                })).data, {
                    default: _e.AUTHENTICATION_ERROR
                })
            }
            async unlinkEmail(t, e) {
                const r = {
                    unlinkEmailRequest: {
                        email: t
                    }
                };
                return Te(async () => (await this.backendApiClients.authenticationApi.unlinkEmail(r, {
                    headers: {
                        authorization: `Bearer ${this.publishableKey}`,
                        "x-player-token": e
                    }
                })).data, {
                    default: _e.AUTHENTICATION_ERROR
                })
            }
            async linkEmail(t, e, r, n) {
                const i = {
                    loginRequest: {
                        email: t,
                        password: e
                    }
                };
                return Te(async () => (await this.backendApiClients.authenticationApi.linkEmail(i, {
                    headers: {
                        authorization: `Bearer ${this.publishableKey}`,
                        "x-player-token": r,
                        "x-game": n || void 0
                    }
                })).data, {
                    default: _e.AUTHENTICATION_ERROR
                })
            }
        },
        Wn = class {
            storage;
            authManager;
            validateAndRefreshToken;
            ensureInitialized;
            eventEmitter;
            constructor(t, e, r, n, i) {
                this.storage = t, this.authManager = e, this.validateAndRefreshToken = r, this.ensureInitialized = n, this.eventEmitter = i
            }
            async logInWithEmailPassword({
                email: t,
                password: e,
                ecosystemGame: r
            }) {
                if (await this.ensureInitialized(), await Lr.fromStorage(this.storage)) throw new Re("Already logged in", _e.ALREADY_LOGGED_IN_ERROR);
                const n = await this.authManager.loginEmailPassword(t, e, r);
                return "action" in n || new Lr("jwt", n.token, n.player.id, n.refreshToken).save(this.storage), n
            }
            async signUpGuest() {
                if (await this.ensureInitialized(), await Lr.fromStorage(this.storage)) throw new Re("Already logged in", _e.ALREADY_LOGGED_IN_ERROR);
                const t = await this.authManager.registerGuest();
                return new Lr("jwt", t.token, t.player.id, t.refreshToken).save(this.storage), t
            }
            async signUpWithEmailPassword({
                email: t,
                password: e,
                options: r,
                ecosystemGame: n
            }) {
                if (await this.ensureInitialized(), await Lr.fromStorage(this.storage)) throw new Re("Already logged in", _e.ALREADY_LOGGED_IN_ERROR);
                const i = await this.authManager.signupEmailPassword(t, e, r?.data.name, n);
                return "action" in i || new Lr("jwt", i.token, i.player.id, i.refreshToken).save(this.storage), i
            }
            async linkEmailPassword({
                email: t,
                password: e,
                authToken: r,
                ecosystemGame: n
            }) {
                return await this.validateAndRefreshToken(), await this.authManager.linkEmail(t, e, r, n)
            }
            async unlinkEmailPassword({
                email: t,
                authToken: e
            }) {
                return await this.validateAndRefreshToken(), await this.authManager.unlinkEmail(t, e)
            }
            async requestEmailVerification({
                email: t,
                redirectUrl: e
            }) {
                await this.ensureInitialized(), await this.authManager.requestEmailVerification(t, e)
            }
            async resetPassword({
                email: t,
                password: e,
                state: r
            }) {
                await this.ensureInitialized(), await this.authManager.resetPassword(t, e, r)
            }
            async requestResetPassword({
                email: t,
                redirectUrl: e
            }) {
                await this.ensureInitialized(), await this.authManager.requestResetPassword(t, e)
            }
            async verifyEmail({
                email: t,
                state: e
            }) {
                await this.ensureInitialized(), await this.authManager.verifyEmail(t, e)
            }
            async initOAuth({
                provider: t,
                options: e,
                ecosystemGame: r
            }) {
                if (await this.ensureInitialized(), await Lr.fromStorage(this.storage)) throw new Re("Already logged in", _e.ALREADY_LOGGED_IN_ERROR);
                return await this.authManager.initOAuth(t, e, r)
            }
            async initLinkOAuth({
                provider: t,
                options: e,
                ecosystemGame: r
            }) {
                await this.validateAndRefreshToken();
                const n = await Lr.fromStorage(this.storage);
                if (!n) throw new Re("No authentication found", _e.NOT_LOGGED_IN_ERROR);
                return await this.authManager.linkOAuth(n, t, e, r)
            }
            async linkThirdPartyProvider({
                provider: t,
                token: e,
                tokenType: r
            }) {
                await this.validateAndRefreshToken();
                const n = await Lr.fromStorage(this.storage);
                if (!n) throw new Re("No authentication found", _e.NOT_LOGGED_IN_ERROR);
                return await this.authManager.linkThirdParty(n, t, e, r)
            }
            async unlinkOAuth({
                provider: t,
                authToken: e
            }) {
                return await this.validateAndRefreshToken(), await this.authManager.unlinkOAuth(t, e)
            }
            async poolOAuth(t) {
                await this.ensureInitialized();
                const e = await this.authManager.poolOAuth(t);
                return new Lr("jwt", e.token, e.player.id, e.refreshToken).save(this.storage), e
            }
            async authenticateWithThirdPartyProvider({
                provider: t,
                token: e,
                tokenType: r,
                ecosystemGame: n
            }) {
                await this.ensureInitialized();
                const i = await this.authManager.authenticateThirdParty(t, e, r, n);
                return new Lr("third_party", e, i.id, null, t, r).save(this.storage), i
            }
            async loginWithIdToken({
                provider: t,
                token: e,
                ecosystemGame: r
            }) {
                if (await this.ensureInitialized(), await Lr.fromStorage(this.storage)) throw new Re("Already logged in", _e.ALREADY_LOGGED_IN_ERROR);
                const n = await this.authManager.loginWithIdToken(t, e, r);
                return new Lr("jwt", n.token, n.player.id, n.refreshToken).save(this.storage), n
            }
            async initSIWE({
                address: t,
                ecosystemGame: e
            }) {
                return await this.ensureInitialized(), await this.authManager.initSIWE(t, e)
            }
            async authenticateWithSIWE({
                signature: t,
                message: e,
                walletClientType: r,
                connectorType: n
            }) {
                if (await this.ensureInitialized(), await Lr.fromStorage(this.storage)) throw new Re("Already logged in", _e.ALREADY_LOGGED_IN_ERROR);
                const i = await this.authManager.authenticateSIWE(t, e, r, n);
                return new Lr("jwt", i.token, i.player.id, i.refreshToken).save(this.storage), i
            }
            async linkWallet({
                signature: t,
                message: e,
                walletClientType: r,
                connectorType: n,
                authToken: i
            }) {
                return await this.validateAndRefreshToken(), await this.authManager.linkWallet(t, e, r, n, i)
            }
            async unlinkWallet({
                address: t,
                authToken: e
            }) {
                return await this.validateAndRefreshToken(), await this.authManager.unlinkWallet(t, e)
            }
            async storeCredentials(t) {
                if (await this.ensureInitialized(), !t.player) throw new Re("Player ID is required to store credentials", _e.INVALID_CONFIGURATION);
                new Lr("jwt", t.accessToken, t.player, t.refreshToken).save(this.storage)
            }
            async logout() {
                const t = await Lr.fromStorage(this.storage);
                if (t) {
                    try {
                        "third_party" !== t.type && await this.authManager.logout(t.token, t?.refreshToken)
                    } catch (t) {}
                    this.storage.remove(Je.AUTHENTICATION), this.eventEmitter.emit(ke.LOGGED_OUT)
                }
            }
        };
    const Jn = async t => {
        const {
            hash: e,
            signer: r,
            ownerAddress: n,
            factoryAddress: i,
            salt: s,
            chainId: o,
            address: a,
            implementationType: c
        } = t;
        let u = e;
        if ([Ne.UPGRADEABLE_V5, Ne.UPGRADEABLE_V6, Ne.ZKSYNC_UPGRADEABLE_V1, Ne.ZKSYNC_UPGRADEABLE_V2].includes(c)) {
            const t = {
                    name: "Openfort",
                    version: "0.5",
                    chainId: Number(o),
                    verifyingContract: a
                },
                e = {
                    OpenfortMessage: [{
                        name: "hashedMessage",
                        type: "bytes32"
                    }]
                },
                r = {
                    hashedMessage: u
                },
                {
                    _TypedDataEncoder: n
                } = await Promise.resolve().then(function() {
                    return Qu
                });
            u = n.hash(t, e, r)
        }
        const h = await r.sign(u, !1, !1);
        if (i && s && [Ne.UPGRADEABLE_V5, Ne.UPGRADEABLE_V6].includes(c)) {
            const {
                id: t
            } = await Promise.resolve().then(function() {
                return Qu
            }), {
                defaultAbiCoder: e
            } = await Promise.resolve().then(function() {
                return Ph
            }), {
                hexConcat: r
            } = await Promise.resolve().then(function() {
                return nc
            }), o = r([t("createAccountWithNonce(address,bytes32,bool)").slice(0, 10), e.encode(["address", "bytes32", "bool"], [n, s, !1])]);
            return r([e.encode(["address", "bytes", "bytes"], [i, o, h]), "0x6492649264926492649264926492649264926492649264926492649264926492"])
        }
        return h
    };
    var Yn, Qn, Xn, $n;
    ! function(t) {
        t.PENDING = "PENDING", t.SUBMITTED = "SUBMITTED", t.SUCCESSFUL = "SUCCESSFUL", t.REVERTED = "REVERTED", t.FAILED = "FAILED", t.CANCELLED = "CANCELLED"
    }(Yn || (Yn = {})),
    function(t) {
        t.ACCOUNTS_CHANGED = "accountsChanged", t.ACCOUNTS_CONNECT = "connect"
    }(Qn || (Qn = {})),
    function(t) {
        t[t.USER_REJECTED_REQUEST = 4001] = "USER_REJECTED_REQUEST", t[t.UNAUTHORIZED = 4100] = "UNAUTHORIZED", t[t.UNSUPPORTED_METHOD = 4200] = "UNSUPPORTED_METHOD", t[t.DISCONNECTED = 4900] = "DISCONNECTED"
    }(Xn || (Xn = {})),
    function(t) {
        t[t.RPC_SERVER_ERROR = -32e3] = "RPC_SERVER_ERROR", t[t.INVALID_REQUEST = -32600] = "INVALID_REQUEST", t[t.METHOD_NOT_FOUND = -32601] = "METHOD_NOT_FOUND", t[t.INVALID_PARAMS = -32602] = "INVALID_PARAMS", t[t.INTERNAL_ERROR = -32603] = "INTERNAL_ERROR", t[t.PARSE_ERROR = -32700] = "PARSE_ERROR", t[t.TRANSACTION_REJECTED = -32003] = "TRANSACTION_REJECTED"
    }($n || ($n = {}));
    class Zn extends Error {
        message;
        code;
        constructor(t, e) {
            super(e), this.message = e, this.code = t
        }
    }
    const ti = ["types", "domain", "primaryType", "message"],
        ei = async ({
            params: t,
            method: e,
            signer: r,
            implementationType: n,
            rpcProvider: i,
            account: s
        }) => {
            const o = t[0],
                a = t[1];
            if (!o || !a) throw new Zn($n.INVALID_PARAMS, `${e} requires an address and a typed data JSON`);
            const {
                chainId: c
            } = await i.detectNetwork(), u = ((t, e) => {
                let r;
                if ("string" == typeof t) try {
                    r = JSON.parse(t)
                } catch (t) {
                    throw new Zn($n.INVALID_PARAMS, `Failed to parse typed data JSON: ${t}`)
                } else {
                    if ("object" != typeof t) throw new Zn($n.INVALID_PARAMS, `Invalid typed data argument: ${t}`);
                    r = t
                }
                if (!(t => ti.every(e => e in t))(r)) throw new Zn($n.INVALID_PARAMS, `Invalid typed data argument. The following properties are required: \n      ${ti.join(", ")}`);
                const n = r.domain?.chainId;
                if (n && ("string" == typeof n && (n.startsWith("0x") ? r.domain.chainId = parseInt(n, 16) : r.domain.chainId = parseInt(n, 10)), r.domain.chainId !== e)) throw new Zn($n.INVALID_PARAMS, `Invalid chainId, expected ${e}`);
                return r
            })(a, c), h = {
                ...u.types
            };
            delete h.EIP712Domain;
            const {
                _TypedDataEncoder: l
            } = await Promise.resolve().then(function() {
                return Qu
            }), d = l.hash(u.domain, h, u.message);
            return await Jn({
                hash: d,
                implementationType: n,
                chainId: c,
                signer: r,
                address: o,
                ownerAddress: s.ownerAddress,
                factoryAddress: s.factoryAddress,
                salt: s.salt
            })
        };
    var ri, ni = {
        exports: {}
    };
    var ii = (ri || (ri = 1, function(t) {
            var e = Object.prototype.hasOwnProperty,
                r = "~";

            function n() {}

            function i(t, e, r) {
                this.fn = t, this.context = e, this.once = r || !1
            }

            function s(t, e, n, s, o) {
                if ("function" != typeof n) throw new TypeError("The listener must be a function");
                var a = new i(n, s || t, o),
                    c = r ? r + e : e;
                return t._events[c] ? t._events[c].fn ? t._events[c] = [t._events[c], a] : t._events[c].push(a) : (t._events[c] = a, t._eventsCount++), t
            }

            function o(t, e) {
                0 === --t._eventsCount ? t._events = new n : delete t._events[e]
            }

            function a() {
                this._events = new n, this._eventsCount = 0
            }
            Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (r = !1)), a.prototype.eventNames = function() {
                var t, n, i = [];
                if (0 === this._eventsCount) return i;
                for (n in t = this._events) e.call(t, n) && i.push(r ? n.slice(1) : n);
                return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i
            }, a.prototype.listeners = function(t) {
                var e = r ? r + t : t,
                    n = this._events[e];
                if (!n) return [];
                if (n.fn) return [n.fn];
                for (var i = 0, s = n.length, o = new Array(s); i < s; i++) o[i] = n[i].fn;
                return o
            }, a.prototype.listenerCount = function(t) {
                var e = r ? r + t : t,
                    n = this._events[e];
                return n ? n.fn ? 1 : n.length : 0
            }, a.prototype.emit = function(t, e, n, i, s, o) {
                var a = r ? r + t : t;
                if (!this._events[a]) return !1;
                var c, u, h = this._events[a],
                    l = arguments.length;
                if (h.fn) {
                    switch (h.once && this.removeListener(t, h.fn, void 0, !0), l) {
                        case 1:
                            return h.fn.call(h.context), !0;
                        case 2:
                            return h.fn.call(h.context, e), !0;
                        case 3:
                            return h.fn.call(h.context, e, n), !0;
                        case 4:
                            return h.fn.call(h.context, e, n, i), !0;
                        case 5:
                            return h.fn.call(h.context, e, n, i, s), !0;
                        case 6:
                            return h.fn.call(h.context, e, n, i, s, o), !0
                    }
                    for (u = 1, c = new Array(l - 1); u < l; u++) c[u - 1] = arguments[u];
                    h.fn.apply(h.context, c)
                } else {
                    var d, f = h.length;
                    for (u = 0; u < f; u++) switch (h[u].once && this.removeListener(t, h[u].fn, void 0, !0), l) {
                        case 1:
                            h[u].fn.call(h[u].context);
                            break;
                        case 2:
                            h[u].fn.call(h[u].context, e);
                            break;
                        case 3:
                            h[u].fn.call(h[u].context, e, n);
                            break;
                        case 4:
                            h[u].fn.call(h[u].context, e, n, i);
                            break;
                        default:
                            if (!c)
                                for (d = 1, c = new Array(l - 1); d < l; d++) c[d - 1] = arguments[d];
                            h[u].fn.apply(h[u].context, c)
                    }
                }
                return !0
            }, a.prototype.on = function(t, e, r) {
                return s(this, t, e, r, !1)
            }, a.prototype.once = function(t, e, r) {
                return s(this, t, e, r, !0)
            }, a.prototype.removeListener = function(t, e, n, i) {
                var s = r ? r + t : t;
                if (!this._events[s]) return this;
                if (!e) return o(this, s), this;
                var a = this._events[s];
                if (a.fn) a.fn !== e || i && !a.once || n && a.context !== n || o(this, s);
                else {
                    for (var c = 0, u = [], h = a.length; c < h; c++)(a[c].fn !== e || i && !a[c].once || n && a[c].context !== n) && u.push(a[c]);
                    u.length ? this._events[s] = 1 === u.length ? u[0] : u : o(this, s)
                }
                return this
            }, a.prototype.removeAllListeners = function(t) {
                var e;
                return t ? (e = r ? r + t : t, this._events[e] && o(this, e)) : (this._events = new n, this._eventsCount = 0), this
            }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = r, a.EventEmitter = a, t.exports = a
        }(ni)), ni.exports),
        si = Qr(ii);
    let oi = class {
        emitter = new si;
        on(t, e) {
            return this.emitter.on(t, e), this
        }
        off(t, e) {
            return this.emitter.off(t, e), this
        }
        emit(t, ...e) {
            return this.emitter.emit(t, ...e)
        }
        once(t, e) {
            return this.emitter.once(t, e), this
        }
        removeAllListeners(t) {
            return this.emitter.removeAllListeners(t), this
        }
        listenerCount(t) {
            return this.emitter.listenerCount(t)
        }
        listeners(t) {
            return this.emitter.listeners(t)
        }
    };
    const ai = {
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
            11155111: "https://ethereum-sepolia-rpc.publicnode.com",
            11155420: "https://optimism-sepolia-rpc.publicnode.com",
            28122024: "https://rpcv2-testnet.ancient8.gg",
            531050104: "https://rpc.testnet.sophon.xyz",
            666666666: "https://rpc.degen.tips",
            888888888: "https://rpc.ancient8.gg",
            999999999: "https://sepolia.rpc.zora.energy",
            85011: "https://subnets.avax.network/criminalsa/testnet/rpc",
            84358: "https://subnets.avax.network/titan/mainnet/rpc",
            10143: "https://testnet-rpc.monad.xyz"
        },
        ci = ["chainId", "chainName", "nativeCurrency"],
        ui = async ({
            params: t,
            rpcProvider: e,
            storage: r
        }) => {
            if (!t || !Array.isArray(t) || 0 === t.length) throw new Zn($n.INVALID_PARAMS, "Invalid parameters for wallet_addEthereumChain");
            const n = (t => {
                    if (!t || "object" != typeof t) throw new Zn($n.INVALID_PARAMS, "Invalid chain parameter: expected an object");
                    if (!(t => ci.every(e => e in t))(t)) throw new Zn($n.INVALID_PARAMS, `Invalid chain parameter. The following properties are required: ${ci.join(", ")}`);
                    if (!t.chainName || "" === t.chainName.trim()) throw new Zn($n.INVALID_PARAMS, "chainName cannot be empty");
                    if (!((e = t.nativeCurrency) && "object" == typeof e && "name" in e && "symbol" in e && "decimals" in e && "string" == typeof e.name && "string" == typeof e.symbol && "number" == typeof e.decimals && Number.isInteger(e.decimals))) throw new Zn($n.INVALID_PARAMS, "Invalid nativeCurrency object");
                    var e;
                    if (0 === t.rpcUrls?.length) throw new Zn($n.INVALID_PARAMS, "At least one RPC URL must be provided");
                    if (!/^0x[0-9a-fA-F]+$/.test(t.chainId)) throw new Zn($n.INVALID_PARAMS, "chainId must be a valid hex string");
                    return {
                        chainId: t.chainId,
                        blockExplorerUrls: t.blockExplorerUrls || [],
                        chainName: t.chainName,
                        iconUrls: t.iconUrls || [],
                        rpcUrls: t.rpcUrls || [],
                        nativeCurrency: t.nativeCurrency
                    }
                })(t[0]),
                i = parseInt(n.chainId, 16),
                {
                    chainId: s
                } = await e.detectNetwork();
            return i !== s && null
        };

    function hi(t) {
        return {
            data: "token-allowance" === t.type ? {
                allowance: t.data.allowance.toString()
            } : "gas-limit" === t.type ? {
                limit: t.data.limit.toString()
            } : t.data,
            type: "string" == typeof t.type ? t.type : t.type.custom
        }
    }

    function li(t) {
        return {
            ...t,
            policies: t.policies.map(hi),
            required: t.required ?? !1,
            type: "string" == typeof t.type ? t.type : t.type.custom
        }
    }

    function di(t) {
        return {
            expiry: t.validUntil ? Number(t.validUntil) : 0,
            grantedPermissions: t.whitelist ? t.whitelist.map(e => ({
                type: "contract-call",
                data: {
                    address: e,
                    calls: []
                },
                policies: [{
                    data: {
                        limit: t.limit
                    },
                    type: {
                        custom: "usage-limit"
                    }
                }]
            })) : [],
            permissionsContext: t.id
        }
    }
    const fi = async ({
        params: t,
        signer: e,
        account: r,
        authentication: n,
        backendClient: i,
        policyId: s
    }) => {
        const o = t[0]?.capabilities?.paymasterService?.policy ?? s,
            a = await (async (t, e, r, n, i) => {
                const s = t.map(t => {
                    if (!t.to) throw new Zn($n.INVALID_PARAMS, 'wallet_sendCalls requires a "to" field');
                    return {
                        to: String(t.to),
                        data: t.data ? String(t.data) : void 0,
                        value: t.value ? String(t.value) : void 0
                    }
                });
                return Te(async () => (await e.transactionIntentsApi.createTransactionIntent({
                    createTransactionIntentRequest: {
                        account: r.id,
                        policy: i,
                        chainId: r.chainId,
                        interactions: s
                    }
                }, {
                    headers: {
                        authorization: `Bearer ${e.config.backend.accessToken}`,
                        "x-player-token": n.token,
                        "x-auth-provider": n.thirdPartyProvider,
                        "x-token-type": n.thirdPartyTokenType
                    }
                })).data, {
                    default: _e.AUTHENTICATION_ERROR
                })
            })(t, i, r, n, o).catch(t => {
                throw new Zn($n.TRANSACTION_REJECTED, t.message)
            });
        if (a.response?.error.reason) throw new Zn($n.TRANSACTION_REJECTED, a.response?.error.reason);
        if (a?.nextAction?.payload?.signableHash) {
            let t;
            t = [300, 531050104, 324, 50104, 2741, 11124].includes(r.chainId) ? await e.sign(a.nextAction.payload.signableHash, !1, !1) : await e.sign(a.nextAction.payload.signableHash);
            const n = await Te(async () => await i.transactionIntentsApi.signature({
                id: a.id,
                signatureRequest: {
                    signature: t
                }
            }), {
                default: _e.AUTHENTICATION_ERROR
            }).catch(t => {
                throw new Zn($n.TRANSACTION_REJECTED, t.message)
            });
            if (0 === n.data.response?.status) throw new Zn($n.TRANSACTION_REJECTED, n.data.response?.error.reason);
            return n.data.response?.transactionHash
        }
        return a.response?.transactionHash
    };
    class pi {
        #e;
        #r;
        #n;
        #t;
        updatePolicy(t) {
            this.#r = t
        }
        #i;
        #s;
        #o = null;
        #a;
        isOpenfort = !0;
        #c;
        constructor({
            storage: t,
            backendApiClients: e,
            openfortEventEmitter: r,
            policyId: n,
            ensureSigner: i,
            chains: s,
            validateAndRefreshSession: o
        }) {
            this.#c = i, this.#e = t, this.#n = s, this.#r = n, this.#i = o, this.#a = e, this.#a = e, this.#s = new oi, r.on(ke.LOGGED_OUT, this.#u), r.on(ke.SWITCH_ACCOUNT, this.#h)
        }
        #l = async () => (this.#t || (this.#t = await this.#c()), this.#t);
        #u = async () => {
            this.#t = void 0, this.#s.emit(Qn.ACCOUNTS_CHANGED, [])
        };
        #h = async t => {
            this.#s.emit(Qn.ACCOUNTS_CHANGED, [t])
        };
        async getRpcProvider() {
            if (!this.#o) {
                const t = await Qe.fromStorage(this.#e),
                    e = t?.chainId || 8453;
                await Promise.resolve().then(function() {
                    return Hp
                }).then(t => {
                    const r = this.#n ? this.#n[e] : void 0;
                    this.#o = new t.StaticJsonRpcProvider(r ?? ai[e])
                })
            }
            if (!this.#o) throw new Error("RPC provider not initialized");
            return this.#o
        }
        async #d(t) {
            switch (t.method) {
                case "eth_accounts": {
                    const t = await Qe.fromStorage(this.#e);
                    return t ? [t.address] : []
                }
                case "eth_requestAccounts": {
                    const t = await Qe.fromStorage(this.#e);
                    if (t) return this.#s.emit(Qn.ACCOUNTS_CONNECT, {
                        chainId: String(t.chainId)
                    }), [t.address];
                    throw new Zn(Xn.UNAUTHORIZED, "Unauthorized - must be authenticated and configured with a signer.")
                }
                case "eth_sendTransaction": {
                    const e = await Qe.fromStorage(this.#e),
                        r = await this.#l(),
                        n = await Lr.fromStorage(this.#e);
                    if (!e || !n) throw new Zn(Xn.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                    return await this.#i(), await fi({
                        params: t.params || [],
                        signer: r,
                        account: e,
                        authentication: n,
                        backendClient: this.#a,
                        policyId: this.#r
                    })
                }
                case "eth_estimateGas": {
                    const e = await Qe.fromStorage(this.#e),
                        r = await Lr.fromStorage(this.#e);
                    if (!e || !r) throw new Zn(Xn.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                    return await this.#i(), await (async ({
                        params: t,
                        account: e,
                        authentication: r,
                        backendClient: n,
                        policyId: i
                    }) => {
                        const s = await (async (t, e, r, n, i) => {
                            const s = t.map(t => {
                                if (!t.to) throw new Zn($n.INVALID_PARAMS, 'eth_estimateGas requires a "to" field');
                                return {
                                    to: String(t.to),
                                    data: t.data ? String(t.data) : void 0,
                                    value: t.value ? String(t.value) : void 0
                                }
                            });
                            return Te(async () => (await e.transactionIntentsApi.estimateTransactionIntentCost({
                                createTransactionIntentRequest: {
                                    policy: i,
                                    chainId: r.chainId,
                                    interactions: s
                                }
                            }, {
                                headers: {
                                    authorization: `Bearer ${e.config.backend.accessToken}`,
                                    "x-player-token": n.token,
                                    "x-auth-provider": n.thirdPartyProvider,
                                    "x-token-type": n.thirdPartyTokenType
                                }
                            })).data, {
                                default: _e.AUTHENTICATION_ERROR
                            })
                        })(t, n, e, r, i).catch(t => {
                            throw new Zn($n.TRANSACTION_REJECTED, t.message)
                        });
                        return s.estimatedTXGas
                    })({
                        params: t.params || [],
                        account: e,
                        authentication: r,
                        backendClient: this.#a,
                        policyId: this.#r
                    })
                }
                case "eth_signTypedData":
                case "eth_signTypedData_v4": {
                    const e = await Qe.fromStorage(this.#e),
                        r = await this.#l();
                    if (!e) throw new Zn(Xn.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                    await this.#i();
                    const n = await this.getRpcProvider();
                    return await ei({
                        method: t.method,
                        params: t.params || [],
                        signer: r,
                        implementationType: e.implementationType || e.type,
                        rpcProvider: n,
                        account: e
                    })
                }
                case "personal_sign": {
                    const e = await Qe.fromStorage(this.#e);
                    if (!e) throw new Zn(Xn.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                    const r = await this.#l();
                    return await this.#i(), Dr("[personal_sign] validateAndRefreshSession:"), await (async ({
                        params: t,
                        signer: e,
                        account: r
                    }) => {
                        const n = t[0],
                            i = t[1];
                        if (!i || !n) throw new Zn($n.INVALID_PARAMS, "personal_sign requires an address and a message");
                        if (i.toLowerCase() !== r.address.toLowerCase()) throw new Zn($n.INVALID_PARAMS, "personal_sign requires the signer to be the from address");
                        const {
                            hashMessage: s
                        } = await Promise.resolve().then(function() {
                            return Qu
                        });
                        return await Jn({
                            hash: s(tr(n)),
                            implementationType: r.implementationType || r.type,
                            chainId: Number(r.chainId),
                            signer: e,
                            address: i,
                            salt: r.salt,
                            factoryAddress: r.factoryAddress,
                            ownerAddress: r.ownerAddress
                        })
                    })({
                        params: t.params || [],
                        signer: r,
                        account: e
                    })
                }
                case "eth_chainId": {
                    const t = await this.getRpcProvider(),
                        {
                            chainId: e
                        } = await t.detectNetwork();
                    return Ze(e)
                }
                case "wallet_switchEthereumChain": {
                    const e = await this.#l();
                    if (!t.params || !Array.isArray(t.params) || 0 === t.params.length) throw new Zn($n.INVALID_PARAMS, "Invalid parameters for wallet_switchEthereumChain");
                    await this.#i();
                    try {
                        const r = parseInt(t.params[0].chainId, 16);
                        await e.switchChain({
                            chainId: r
                        }), await Promise.resolve().then(function() {
                            return Hp
                        }).then(t => {
                            const e = this.#n ? this.#n[r] : void 0;
                            this.#o = new t.StaticJsonRpcProvider(e ?? ai[r])
                        })
                    } catch (t) {
                        const e = t;
                        throw new Zn($n.INTERNAL_ERROR, `Failed to switch chain: ${e.message}`)
                    }
                    return null
                }
                case "wallet_addEthereumChain": {
                    await this.#l();
                    const e = await this.getRpcProvider();
                    return await ui({
                        params: t.params || [],
                        rpcProvider: e,
                        storage: this.#e
                    })
                }
                case "wallet_showCallsStatus":
                    return null;
                case "wallet_getCallsStatus": {
                    const e = await Qe.fromStorage(this.#e);
                    await this.#l();
                    const r = await Lr.fromStorage(this.#e);
                    if (!e || !r) throw new Zn(Xn.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                    return await this.#i(), await (async ({
                        params: t,
                        authentication: e,
                        backendClient: r
                    }) => {
                        const n = await (async (t, e, r) => Te(async () => (await e.transactionIntentsApi.getTransactionIntent({
                            id: t
                        }, {
                            headers: {
                                authorization: `Bearer ${e.config.backend.accessToken}`,
                                "x-player-token": r.token,
                                "x-auth-provider": r.thirdPartyProvider,
                                "x-token-type": r.thirdPartyTokenType
                            }
                        })).data, {
                            default: _e.AUTHENTICATION_ERROR
                        }))(t[0], r, e).catch(t => {
                            throw new Zn($n.TRANSACTION_REJECTED, t.message)
                        });
                        return {
                            status: n.response ? "CONFIRMED" : "PENDING",
                            receipts: n.response ? [{
                                status: 0 === n.response.status ? "reverted" : "success",
                                logs: n.response.logs?.map(t => ({
                                    address: t.address,
                                    data: t.data,
                                    topics: t.topics
                                })) || [],
                                blockHash: n.response.transactionHash || "",
                                blockNumber: BigInt(n.response.blockNumber || 0),
                                gasUsed: BigInt(n.response.gasUsed || 0),
                                transactionHash: n.response.transactionHash || ""
                            }] : void 0
                        }
                    })({
                        params: t.params || {},
                        authentication: r,
                        backendClient: this.#a
                    })
                }
                case "wallet_sendCalls": {
                    const e = await Qe.fromStorage(this.#e),
                        r = await this.#l(),
                        n = await Lr.fromStorage(this.#e);
                    if (!e || !n) throw new Zn(Xn.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                    return await this.#i(), await fi({
                        params: t.params ? t.params[0].calls : [],
                        signer: r,
                        account: e,
                        authentication: n,
                        backendClient: this.#a,
                        policyId: this.#r
                    })
                }
                case "wallet_grantPermissions": {
                    const e = await Qe.fromStorage(this.#e),
                        r = await this.#l(),
                        n = await Lr.fromStorage(this.#e);
                    if (!e || !n) throw new Zn(Xn.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                    return await this.#i(), await (async ({
                        params: t,
                        signer: e,
                        account: r,
                        authentication: n,
                        backendClient: i,
                        policyId: s
                    }) => {
                        const o = await (async (t, e, r, n, i) => {
                            const s = t[0],
                                o = Math.floor((new Date).getTime() / 1e3),
                                a = Math.floor(new Date(Date.now() + 1e3 * s.expiry).getTime() / 1e3),
                                c = s.permissions.map(li),
                                u = c.filter(t => "contract-call" === t.type || "erc20-token-transfer" === t.type).map(t => t.data.address),
                                h = c[0].policies.find(t => "usage-limit" === t.type)?.data?.limit;
                            let l;
                            if ("signer" in s && s.signer) {
                                if ("keys" === s.signer.type) throw new Zn($n.INVALID_PARAMS, "Multi-key signers are not supported for session creation");
                                "key" !== s.signer.type && "account" !== s.signer.type || (l = s.signer.data.id)
                            } else "account" in s && s.account && (l = s.account);
                            if (!l) throw new Zn($n.INVALID_PARAMS, "Failed to request permissions - missing session address");
                            const d = ((t, e, r, n, i, s = !1, o, a, c, u) => {
                                const h = {
                                    address: t,
                                    chainId: e,
                                    validAfter: r,
                                    validUntil: n,
                                    optimistic: s,
                                    whitelist: o,
                                    player: a,
                                    account: u
                                };
                                return i && (h.policy = i), c && (h.limit = c), h
                            })(l, r.chainId, o, a, i, !1, u, n.player, h, r.id);
                            return Te(async () => (await e.sessionsApi.createSession({
                                createSessionRequest: d
                            }, {
                                headers: {
                                    authorization: `Bearer ${e.config.backend.accessToken}`,
                                    "x-player-token": n.token,
                                    "x-auth-provider": n.thirdPartyProvider,
                                    "x-token-type": n.thirdPartyTokenType
                                }
                            })).data, {
                                default: _e.AUTHENTICATION_ERROR
                            })
                        })(t, i, r, n, s).catch(t => {
                            throw new Zn($n.TRANSACTION_REJECTED, t.message)
                        });
                        if (o?.nextAction?.payload?.signableHash) {
                            let t;
                            return t = [300, 531050104, 324, 50104, 2741, 11124].includes(r.chainId) ? await e.sign(o.nextAction.payload.signableHash, !1, !1) : await e.sign(o.nextAction.payload.signableHash), di(await Te(async () => (await i.sessionsApi.signatureSession({
                                id: o.id,
                                signatureRequest: {
                                    signature: t
                                }
                            })).data, {
                                default: _e.AUTHENTICATION_ERROR
                            }).catch(t => {
                                throw new Zn($n.TRANSACTION_REJECTED, t.message)
                            }))
                        }
                        if (!1 === o.isActive) throw new Zn($n.TRANSACTION_REJECTED, "Failed to grant permissions");
                        return di(o)
                    })({
                        params: t.params || [],
                        signer: r,
                        account: e,
                        authentication: n,
                        backendClient: this.#a,
                        policyId: this.#r
                    })
                }
                case "wallet_revokePermissions": {
                    const e = await Qe.fromStorage(this.#e),
                        r = await this.#l(),
                        n = await Lr.fromStorage(this.#e);
                    if (!e || !n) throw new Zn(Xn.UNAUTHORIZED, "Unauthorized - call eth_requestAccounts first");
                    return await this.#i(), await (async ({
                        params: t,
                        signer: e,
                        account: r,
                        authentication: n,
                        backendClient: i,
                        policyId: s
                    }) => {
                        const o = t[0];
                        if (!o.permissionContext) return await e.disconnect(), {};
                        const a = await (async (t, e, r, n, i) => {
                            const s = ((t, e, r, n, i) => {
                                const s = {
                                    address: t,
                                    chainId: e,
                                    player: r,
                                    account: i
                                };
                                return n && (s.policy = n), s
                            })(t.permissionContext, r.chainId, n.player, i, r.id);
                            return Te(async () => (await e.sessionsApi.revokeSession({
                                revokeSessionRequest: s
                            }, {
                                headers: {
                                    authorization: `Bearer ${e.config.backend.accessToken}`,
                                    "x-player-token": n.token,
                                    "x-auth-provider": n.thirdPartyProvider,
                                    "x-token-type": n.thirdPartyTokenType
                                }
                            })).data, {
                                default: _e.AUTHENTICATION_ERROR
                            })
                        })(o, i, r, n, s).catch(t => {
                            throw new Zn($n.TRANSACTION_REJECTED, t.message)
                        });
                        if (a?.nextAction?.payload?.signableHash) {
                            let t;
                            return t = [300, 531050104, 324, 50104, 2741, 11124].includes(r.chainId) ? await e.sign(a.nextAction.payload.signableHash, !1, !1) : await e.sign(a.nextAction.payload.signableHash), (await i.sessionsApi.signatureSession({
                                id: a.id,
                                signatureRequest: {
                                    signature: t
                                }
                            }).catch(t => {
                                throw new Zn($n.TRANSACTION_REJECTED, t.message)
                            })).data
                        }
                        return a
                    })({
                        params: t.params || [],
                        signer: r,
                        account: e,
                        authentication: n,
                        backendClient: this.#a
                    })
                }
                case "wallet_getCapabilities": {
                    const t = await this.getRpcProvider(),
                        {
                            chainId: e
                        } = await t.detectNetwork();
                    return {
                        [Ze(e)]: {
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
                    throw new Zn(Xn.UNSUPPORTED_METHOD, `${t.method}: Method not supported`)
            }
        }
        async request(t) {
            try {
                return this.#d(t)
            } catch (t) {
                if (t instanceof Zn) throw t;
                if (t instanceof Error) throw new Zn($n.INTERNAL_ERROR, t.message);
                throw new Zn($n.INTERNAL_ERROR, "Internal error")
            }
        }
        on(t, e) {
            this.#s.on(t, e)
        }
        removeListener(t, e) {
            this.#s.off(t, e)
        }
    }
    const mi = {
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="597.32 331.34 171.36 105.32" ><g><rect x="673.9" y="404.26" width="18.2" height="32.4" /><polygon points="768.68,331.36 768.68,331.36 768.68,331.34 610.78,331.34 610.78,331.36 597.32,331.36 597.32,436.64    615.52,436.64 615.52,349.54 750.48,349.54 750.48,436.64 768.68,436.64  " /><polygon points="732.16,367.79 633.83,367.79 633.83,370.19 633.79,370.19 633.79,436.64 651.99,436.64 651.99,385.99    713.9,385.99 713.9,436.64 732.09,436.64 732.09,385.99 732.16,385.99  " /></g></svg>',
        name: "Openfort",
        rdns: "xyz.openfort",
        uuid: $e()
    };
    let gi = class {
        iframeManager;
        storage;
        backendApiClients;
        eventEmitter;
        constructor(t, e, r, n) {
            this.iframeManager = t, this.storage = e, this.backendApiClients = r, this.eventEmitter = n
        }
        async configure(t) {
            const e = await this.iframeManager.configure(t),
                r = await Lr.fromStorage(this.storage);
            if (!r) throw new Re("No access token found", _e.NOT_LOGGED_IN_ERROR);
            const n = Ur.fromStorage();
            if (!n) throw new Re("Configuration not found", _e.INVALID_CONFIGURATION);
            return e?.account || Te(async () => {
                const t = await this.backendApiClients.accountsApi.getAccountsV2({
                    chainId: e.chainId,
                    address: e.address
                }, {
                    headers: {
                        authorization: `Bearer ${n.baseConfiguration.publishableKey}`,
                        "x-player-token": r.token,
                        "x-auth-provider": r.thirdPartyProvider,
                        "x-token-type": r.thirdPartyTokenType
                    }
                });
                if (0 === t.data.data.length) throw new Re("No account found", _e.MISSING_SIGNER_ERROR);
                const i = new Qe({
                    user: t.data.data[0].user,
                    chainType: t.data.data[0].accountType,
                    id: t.data.data[0].id,
                    address: t.data.data[0].address,
                    ownerAddress: t.data.data[0].ownerAddress,
                    accountType: t.data.data[0].accountType,
                    createdAt: t.data.data[0].createdAt,
                    implementationType: t.data.data[0].smartAccount?.implementationType,
                    chainId: t.data.data[0].chainId,
                    factoryAddress: t.data.data[0].smartAccount?.factoryAddress,
                    salt: t.data.data[0].smartAccount?.salt
                });
                return i.save(this.storage), this.eventEmitter.emit(ke.SWITCH_ACCOUNT, t.data.data[0].address), i
            }, {
                default: _e.AUTHENTICATION_ERROR
            }), Te(async () => {
                const t = await this.backendApiClients.accountsApi.getAccountV2({
                        id: e.account
                    }, {
                        headers: {
                            authorization: `Bearer ${n.baseConfiguration.publishableKey}`,
                            "x-player-token": r.token,
                            "x-auth-provider": r.thirdPartyProvider,
                            "x-token-type": r.thirdPartyTokenType
                        }
                    }),
                    i = new Qe({
                        user: t.data.user,
                        chainType: t.data.accountType,
                        id: t.data.id,
                        address: t.data.address,
                        ownerAddress: t.data.ownerAddress,
                        accountType: t.data.accountType,
                        createdAt: t.data.createdAt,
                        implementationType: t.data.smartAccount?.implementationType,
                        chainId: t.data.chainId,
                        salt: t.data.smartAccount?.salt,
                        factoryAddress: t.data.smartAccount?.factoryAddress
                    });
                return i.save(this.storage), this.eventEmitter.emit(ke.SWITCH_ACCOUNT, t.data.address), i
            }, {
                default: _e.AUTHENTICATION_ERROR
            })
        }
        async sign(t, e, r) {
            return await this.iframeManager.sign(t, e, r)
        }
        async export () {
            return await this.iframeManager.export()
        }
        async switchChain({
            chainId: t
        }) {
            const e = await this.iframeManager.switchChain(t),
                r = await Qe.fromStorage(this.storage);
            new Qe({
                ...r,
                id: e.account,
                chainId: t
            }).save(this.storage)
        }
        async create(t) {
            const e = await this.iframeManager.create(t),
                r = await Lr.fromStorage(this.storage);
            if (!r) throw new Re("No access token found", _e.NOT_LOGGED_IN_ERROR);
            const n = Ur.fromStorage();
            if (!n) throw new Re("Configuration not found", _e.INVALID_CONFIGURATION);
            return Te(async () => {
                const t = await this.backendApiClients.accountsApi.getAccountV2({
                        id: e.account
                    }, {
                        headers: {
                            authorization: `Bearer ${n.baseConfiguration.publishableKey}`,
                            "x-player-token": r.token,
                            "x-auth-provider": r.thirdPartyProvider,
                            "x-token-type": r.thirdPartyTokenType
                        }
                    }),
                    i = new Qe({
                        user: t.data.user,
                        chainType: t.data.accountType,
                        id: t.data.id,
                        address: t.data.address,
                        ownerAddress: t.data.ownerAddress,
                        accountType: t.data.accountType,
                        createdAt: t.data.createdAt,
                        implementationType: t.data.smartAccount?.implementationType,
                        chainId: t.data.chainId,
                        salt: t.data.smartAccount?.salt,
                        factoryAddress: t.data.smartAccount?.factoryAddress
                    });
                return i.save(this.storage), this.eventEmitter.emit(ke.SWITCH_ACCOUNT, t.data.address), i
            }, {
                default: _e.AUTHENTICATION_ERROR
            })
        }
        async recover(t) {
            const e = await this.iframeManager.recover(t),
                r = await Lr.fromStorage(this.storage);
            if (!r) throw new Re("No access token found", _e.NOT_LOGGED_IN_ERROR);
            const n = Ur.fromStorage();
            if (!n) throw new Re("Configuration not found", _e.INVALID_CONFIGURATION);
            return Te(async () => {
                const t = await this.backendApiClients.accountsApi.getAccountV2({
                        id: e.account
                    }, {
                        headers: {
                            authorization: `Bearer ${n.baseConfiguration.publishableKey}`,
                            "x-player-token": r.token,
                            "x-auth-provider": r.thirdPartyProvider,
                            "x-token-type": r.thirdPartyTokenType
                        }
                    }),
                    i = new Qe({
                        user: t.data.user,
                        chainType: t.data.accountType,
                        id: t.data.id,
                        address: t.data.address,
                        ownerAddress: t.data.ownerAddress,
                        accountType: t.data.accountType,
                        createdAt: t.data.createdAt,
                        implementationType: t.data.smartAccount?.implementationType,
                        chainId: t.data.chainId,
                        salt: t.data.smartAccount?.salt,
                        factoryAddress: t.data.smartAccount?.factoryAddress
                    });
                return i.save(this.storage), this.eventEmitter.emit(ke.SWITCH_ACCOUNT, t.data.address), i
            }, {
                default: _e.AUTHENTICATION_ERROR
            })
        }
        async setEmbeddedRecovery({
            recoveryMethod: t,
            recoveryPassword: e,
            encryptionSession: r
        }) {
            await this.iframeManager.setEmbeddedRecovery(t, e, r)
        }
        async disconnect() {
            await this.iframeManager.disconnect(), this.storage.remove(Je.ACCOUNT)
        }
    };
    class yi {
        #r;
        #t;
        #e;
        #i;
        #a;
        #s = new Set;
        #o;
        #n = !1;
        constructor({
            remoteWindow: t,
            allowedOrigins: e
        }) {
            if (!t) throw new Xe("INVALID_ARGUMENT", "remoteWindow must be defined");
            this.#r = t, this.#t = e?.length ? e : [window.origin]
        }
        initialize = ({
            log: t,
            validateReceivedMessage: e
        }) => {
            this.#e = t, this.#i = e, window.addEventListener("message", this.#h)
        };
        sendMessage = (t, e) => {
            if (ar(t)) {
                const r = this.#f(t);
                return void this.#r.postMessage(t, {
                    targetOrigin: r,
                    transfer: e
                })
            }
            if (cr(t) || this.#n) {
                const r = this.#n ? (t => {
                        if (cr(t)) return {
                            penpal: Rr.SynAck,
                            methodNames: t.methodPaths.map(kr)
                        };
                        if (hr(t)) return {
                            penpal: Rr.Call,
                            id: t.id,
                            methodName: kr(t.methodPath),
                            args: t.args
                        };
                        if (lr(t)) return t.isError ? {
                            penpal: Rr.Reply,
                            id: t.callId,
                            resolution: Tr.Rejected,
                            ...t.isSerializedErrorInstance ? {
                                returnValue: t.value,
                                returnValueIsError: !0
                            } : {
                                returnValue: t.value
                            }
                        } : {
                            penpal: Rr.Reply,
                            id: t.callId,
                            resolution: Tr.Fulfilled,
                            returnValue: t.value
                        };
                        throw Sr(t)
                    })(t) : t,
                    n = this.#f(t);
                return void this.#r.postMessage(r, {
                    targetOrigin: n,
                    transfer: e
                })
            }
            if (ur(t)) {
                const {
                    port1: r,
                    port2: n
                } = new MessageChannel;
                this.#o = r, r.addEventListener("message", this.#p), r.start();
                const i = [n, ...e || []],
                    s = this.#f(t);
                return void this.#r.postMessage(t, {
                    targetOrigin: s,
                    transfer: i
                })
            }
            if (!this.#o) throw new Er("Port is undefined");
            this.#o.postMessage(t, {
                transfer: e
            })
        };
        addMessageHandler = t => {
            this.#s.add(t)
        };
        removeMessageHandler = t => {
            this.#s.delete(t)
        };
        destroy = () => {
            window.removeEventListener("message", this.#h), this.#u(), this.#s.clear()
        };
        #c = t => this.#t.some(e => e instanceof RegExp ? e.test(t) : e === t || "*" === e);
        #f = t => {
            if (ar(t)) return "*";
            if (!this.#a) throw new Er("Concrete remote origin not set");
            return "null" === this.#a && this.#t.includes("*") ? "*" : this.#a
        };
        #u = () => {
            this.#o?.removeEventListener("message", this.#p), this.#o?.close(), this.#o = void 0
        };
        #h = ({
            source: t,
            origin: e,
            ports: r,
            data: n
        }) => {
            if (t === this.#r && ((t => sr(t) && "penpal" in t)(n) && (this.#e?.("Please upgrade the child window to the latest version of Penpal."), this.#n = !0, n = (t => {
                    if (t.penpal === Rr.Syn) return {
                        namespace: ir,
                        channel: void 0,
                        type: "SYN",
                        participantId: _r
                    };
                    if (t.penpal === Rr.SynAck) return {
                        namespace: ir,
                        channel: void 0,
                        type: "ACK1",
                        methodPaths: t.methodNames.map(Ir)
                    };
                    if (t.penpal === Rr.Ack) return {
                        namespace: ir,
                        channel: void 0,
                        type: "ACK2"
                    };
                    if (t.penpal === Rr.Call) return {
                        namespace: ir,
                        channel: void 0,
                        type: "CALL",
                        id: t.id,
                        methodPath: Ir(t.methodName),
                        args: t.args
                    };
                    if (t.penpal === Rr.Reply) return t.resolution === Tr.Fulfilled ? {
                        namespace: ir,
                        channel: void 0,
                        type: "REPLY",
                        callId: t.id,
                        value: t.returnValue
                    } : {
                        namespace: ir,
                        channel: void 0,
                        type: "REPLY",
                        callId: t.id,
                        isError: !0,
                        ...t.returnValueIsError ? {
                            value: t.returnValue,
                            isSerializedErrorInstance: !0
                        } : {
                            value: t.returnValue
                        }
                    };
                    throw Sr(t)
                })(n)), this.#i?.(n)))
                if (this.#c(e)) {
                    if (ar(n) && (this.#u(), this.#a = e), ur(n) && !this.#n) {
                        if ([this.#o] = r, !this.#o) throw new Er("No port received on ACK2");
                        this.#o.addEventListener("message", this.#p), this.#o.start()
                    }
                    for (const t of this.#s) t(n)
                } else this.#e?.(`Received a message from origin \`${e}\` which did not match allowed origins \`[${this.#t.join(", ")}]\``)
        };
        #p = ({
            data: t
        }) => {
            if (this.#i?.(t))
                for (const e of this.#s) e(t)
        }
    }
    class wi {
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
        constructor(t, e, r, n) {
            this.storage = t, this.validateAndRefreshToken = e, this.ensureInitialized = r, this.eventEmitter = n, this.eventEmitter.on(ke.TOKEN_REFRESHED, () => {
                Dr("Handling token refresh event in EmbeddedWalletApi"), this.handleTokenRefreshed()
            }), this.eventEmitter.on(ke.LOGGED_OUT, () => {
                Dr("Handling logout event in EmbeddedWalletApi"), this.handleLogout()
            })
        }
        get backendApiClients() {
            const t = Ur.fromStorage();
            if (!t) throw new Re("Configuration not found", _e.INVALID_CONFIGURATION);
            return new Cn({
                basePath: t.backendUrl,
                accessToken: t.baseConfiguration.publishableKey
            })
        }
        async getIframeManager() {
            if (Dr("[HANDSHAKE DEBUG] getIframeManager called"), this.iframeManager) return Dr("[HANDSHAKE DEBUG] Returning existing iframeManager instance"), this.iframeManager;
            if (this.iframeManagerPromise) return Dr("[HANDSHAKE DEBUG] Returning existing iframeManagerPromise"), this.iframeManagerPromise;
            Dr("[HANDSHAKE DEBUG] Creating new iframeManager"), this.iframeManagerPromise = this.createIframeManager();
            try {
                return Dr("[HANDSHAKE DEBUG] Awaiting iframeManager creation"), this.iframeManager = await this.iframeManagerPromise, Dr("[HANDSHAKE DEBUG] IframeManager created successfully"), this.iframeManagerPromise = null, this.iframeManager
            } catch (t) {
                throw Dr("[HANDSHAKE DEBUG] Error creating iframeManager:", t), this.iframeManagerPromise = null, t
            }
        }
        async createIframeManager() {
            Dr("[HANDSHAKE DEBUG] createIframeManager starting");
            const t = Ur.fromStorage();
            if (!t) throw Dr("[HANDSHAKE DEBUG] Configuration not found"), new Re("Configuration not found", _e.INVALID_CONFIGURATION);
            let e;
            if (Dr("[HANDSHAKE DEBUG] Configuration found"), this.messagePoster) Dr("[HANDSHAKE DEBUG] Creating ReactNativeMessenger with messagePoster"), this.messenger = new Br(this.messagePoster), Dr("[HANDSHAKE DEBUG] Created new ReactNativeMessenger instance"), e = this.messenger;
            else {
                Dr("[HANDSHAKE DEBUG] Creating WindowMessenger for browser mode");
                const r = this.createIframe(t.iframeUrl),
                    n = new URL(t.iframeUrl).origin;
                e = new yi({
                    remoteWindow: r.contentWindow,
                    allowedOrigins: [n]
                }), Dr("[HANDSHAKE DEBUG] Created WindowMessenger")
            }
            return Dr("[HANDSHAKE DEBUG] Creating IframeManager instance"), new Vr(t, this.storage, e)
        }
        async ensureSigner() {
            if (this.signer) return this.signer;
            if (this.signerPromise) return this.signerPromise;
            this.signerPromise = this.createSigner();
            try {
                return this.signer = await this.signerPromise, this.signer
            } catch (t) {
                throw this.signerPromise = null, t
            } finally {
                this.signerPromise = null
            }
        }
        async createSigner() {
            const t = await this.getIframeManager();
            return new gi(t, this.storage, this.backendApiClients, this.eventEmitter)
        }
        createIframe(t) {
            if ("undefined" == typeof document) throw new Re("Document is not available. Please provide a message poster for non-browser environments.", _e.INVALID_CONFIGURATION);
            const e = document.getElementById("openfort-iframe");
            e && e.remove();
            const r = document.createElement("iframe");
            return r.style.display = "none", r.id = "openfort-iframe", r.src = t, document.body.appendChild(r), Dr("Iframe created and appended to document"), r
        }
        async configure(t) {
            await this.validateAndRefreshToken();
            const e = t.recoveryParams ?? {
                recoveryMethod: Se.AUTOMATIC
            };
            let r;
            (e.recoveryMethod === Se.PASSWORD || t.shieldAuthentication?.encryptionSession) && (r = {
                encryptionSession: t.shieldAuthentication?.encryptionSession,
                recoveryPassword: e.recoveryMethod === Se.PASSWORD ? e.password : void 0
            });
            const n = await this.ensureSigner(),
                i = await n.configure({
                    chainId: t.chainId,
                    entropy: r
                }),
                s = await Lr.fromStorage(this.storage);
            return {
                id: i.id,
                chainId: i.chainId,
                user: s.player,
                address: i.address,
                ownerAddress: i.ownerAddress,
                chainType: i.chainType,
                accountType: i.accountType,
                implementationType: i.implementationType
            }
        }
        async create(t) {
            await this.validateAndRefreshToken();
            const e = t.recoveryParams ?? {
                recoveryMethod: Se.AUTOMATIC
            };
            let r;
            (e.recoveryMethod === Se.PASSWORD || t.shieldAuthentication?.encryptionSession) && (r = {
                encryptionSession: t.shieldAuthentication?.encryptionSession,
                recoveryPassword: e.recoveryMethod === Se.PASSWORD ? e.password : void 0
            });
            const n = await this.ensureSigner(),
                i = await n.create({
                    accountType: t.accountType,
                    chainType: t.chainType,
                    chainId: t.chainId,
                    entropy: r
                }),
                s = await Lr.fromStorage(this.storage);
            return {
                id: i.id,
                chainId: i.chainId,
                user: s.player,
                address: i.address,
                ownerAddress: i.ownerAddress,
                chainType: i.chainType,
                accountType: i.accountType,
                implementationType: i.implementationType
            }
        }
        async recover(t) {
            await this.validateAndRefreshToken();
            const e = t.recoveryParams ?? {
                recoveryMethod: Se.AUTOMATIC
            };
            let r;
            (e.recoveryMethod === Se.PASSWORD || t.shieldAuthentication?.encryptionSession) && (r = {
                encryptionSession: t.shieldAuthentication?.encryptionSession,
                recoveryPassword: e.recoveryMethod === Se.PASSWORD ? e.password : void 0
            });
            const n = await this.ensureSigner(),
                i = await n.recover({
                    account: t.account,
                    entropy: r
                }),
                s = await Lr.fromStorage(this.storage);
            return {
                id: i.id,
                chainId: i.chainId,
                user: s.player,
                address: i.address,
                ownerAddress: i.ownerAddress,
                chainType: i.chainType,
                accountType: i.accountType,
                implementationType: i.implementationType
            }
        }
        async signMessage(t, e) {
            await this.validateAndRefreshToken();
            const r = await this.ensureSigner(),
                {
                    hashMessage: n = !0,
                    arrayifyMessage: i = !1
                } = e || {};
            return await r.sign(t, i, n)
        }
        async signTypedData(t, e, r) {
            await this.validateAndRefreshToken();
            const n = await this.ensureSigner(),
                i = await Qe.fromStorage(this.storage);
            if (!i) throw new Re("No account found", _e.MISSING_SIGNER_ERROR);
            const s = {
                ...e
            };
            delete s.EIP712Domain;
            const {
                _TypedDataEncoder: o
            } = await Promise.resolve().then(function() {
                return Qu
            }), a = o.hash(t, s, r);
            return await Jn({
                hash: a,
                implementationType: i.implementationType || i.type,
                chainId: Number(i.chainId),
                signer: n,
                address: i.address,
                ownerAddress: i.ownerAddress,
                factoryAddress: i.factoryAddress,
                salt: i.salt
            })
        }
        async exportPrivateKey() {
            await this.validateAndRefreshToken();
            const t = await this.ensureSigner();
            return await t.export()
        }
        async setEmbeddedRecovery({
            recoveryMethod: t,
            recoveryPassword: e,
            encryptionSession: r
        }) {
            await this.validateAndRefreshToken();
            const n = await this.ensureSigner();
            if ("password" === t && !e) throw new Re("Recovery password is required", _e.INVALID_CONFIGURATION);
            await n.setEmbeddedRecovery({
                recoveryMethod: t,
                recoveryPassword: e,
                encryptionSession: r
            })
        }
        async get() {
            const t = await Qe.fromStorage(this.storage);
            if (!t) throw new Re("No signer configured", _e.MISSING_SIGNER_ERROR);
            const e = await Lr.fromStorage(this.storage);
            if (!e) throw new Re("No access token found", _e.NOT_LOGGED_IN_ERROR);
            return {
                id: t.id,
                chainId: t.chainId,
                user: e.player,
                address: t.address,
                ownerAddress: t.ownerAddress,
                chainType: t.chainType,
                accountType: t.accountType,
                implementationType: t.implementationType
            }
        }
        async list() {
            const t = Ur.fromStorage();
            if (!t) throw new Re("Configuration not found", _e.INVALID_CONFIGURATION);
            await this.validateAndRefreshToken();
            const e = await Lr.fromStorage(this.storage);
            if (!e) throw new Re("No access token found", _e.NOT_LOGGED_IN_ERROR);
            return Te(async () => (await this.backendApiClients.accountsApi.getAccountsV2({
                accountType: Le.SMART_ACCOUNT
            }, {
                headers: {
                    authorization: `Bearer ${t.baseConfiguration.publishableKey}`,
                    "x-player-token": e.token,
                    "x-auth-provider": e.thirdPartyProvider,
                    "x-token-type": e.thirdPartyTokenType
                }
            })).data.data.map(t => ({
                user: t.user,
                chainType: t.accountType,
                id: t.id,
                address: t.address,
                ownerAddress: t.ownerAddress,
                accountType: t.accountType,
                createdAt: t.createdAt,
                implementationType: t.smartAccount?.implementationType,
                chainId: t.chainId
            })), {
                default: _e.AUTHENTICATION_ERROR
            })
        }
        async getEmbeddedState() {
            try {
                return await Lr.fromStorage(this.storage) ? await Qe.fromStorage(this.storage) ? Ie.READY : Ie.EMBEDDED_SIGNER_NOT_CONFIGURED : Ie.UNAUTHENTICATED
            } catch (t) {
                return Dr("Failed to get embedded state:", t), Ie.UNAUTHENTICATED
            }
        }
        async getEthereumProvider(t) {
            await this.ensureInitialized();
            const e = {
                    announceProvider: !0,
                    ...t
                },
                r = await Lr.fromStorage(this.storage),
                n = await Qe.fromStorage(this.storage);
            return this.provider ? this.provider && e.policy && this.provider.updatePolicy(e.policy) : (this.provider = new pi({
                storage: this.storage,
                openfortEventEmitter: this.eventEmitter,
                ensureSigner: this.ensureSigner.bind(this),
                account: n || void 0,
                authentication: r || void 0,
                backendApiClients: this.backendApiClients,
                policyId: e.policy,
                validateAndRefreshSession: this.validateAndRefreshToken.bind(this),
                chains: e.chains
            }), e.announceProvider && function(t) {
                if ("undefined" == typeof window) return;
                const e = new CustomEvent("eip6963:announceProvider", {
                    detail: Object.freeze(t)
                });
                window.dispatchEvent(e), window.addEventListener("eip6963:requestProvider", () => window.dispatchEvent(e))
            }({
                info: {
                    ...mi,
                    ...e.providerInfo
                },
                provider: this.provider
            })), this.provider
        }
        async ping(t) {
            try {
                t > 0 && await new Promise(e => {
                    setTimeout(e, t)
                });
                const e = await this.getIframeManager();
                if (!e.isLoaded()) return !1;
                const r = await Lr.fromStorage(this.storage);
                if (r) try {
                    return await e.getCurrentDevice(r.player), !0
                } catch (t) {
                    return !1
                }
                return e.isLoaded()
            } catch (t) {
                return Dr("Ping failed:", t), !1
            }
        }
        getURL() {
            const t = Ur.fromStorage();
            if (!t) throw new Re("Configuration not found", _e.INVALID_CONFIGURATION);
            return t.iframeUrl
        }
        async setMessagePoster(t) {
            if (!t || "function" != typeof t.postMessage) throw new Re("Invalid message poster", _e.INVALID_CONFIGURATION);
            this.messagePoster = t, this.messenger && this.messenger.destroy(), this.iframeManager && this.iframeManager.destroy(), this.signer = null, this.signerPromise = null, this.iframeManager = null, this.iframeManagerPromise = null, this.messenger = null
        }
        async handleTokenRefreshed() {
            if (this.iframeManager) try {
                await this.iframeManager.updateAuthentication(), Dr("Updated IframeManager authentication after token refresh")
            } catch (t) {
                Dr("Failed to update IframeManager authentication:", t)
            } else Dr("IframeManager not initialized, skipping authentication update")
        }
        async handleLogout() {
            this.signer && await this.signer.disconnect(), this.provider = null, this.messenger = null, this.iframeManager = null, this.iframeManagerPromise = null, this.signer = null, this.signerPromise = null
        }
        async onMessage(t) {
            if (!t || "object" != typeof t) return void Dr("Invalid message received:", t);
            Dr("[HANDSHAKE DEBUG] EmbeddedWalletApi onMessage:", t);
            const e = "penpal" === t.namespace && "SYN" === t.type || t.penpal && "string" == typeof t.penpal;
            if (e && this.messenger && this.messagePoster) return Dr("[HANDSHAKE DEBUG] Passing message directly to existing ReactNativeMessenger"), void this.messenger.handleMessage(t);
            const r = await this.getIframeManager();
            Dr(`[HANDSHAKE DEBUG] IframeManager obtained, isLoaded: ${r.isLoaded()}`), e && !r.isLoaded() && Dr("[HANDSHAKE DEBUG] Received penpal message before connection initialized, setting up connection..."), Dr("[HANDSHAKE DEBUG] Calling iframeManager.onMessage"), await r.onMessage(t), Dr("[HANDSHAKE DEBUG] iframeManager.onMessage completed")
        }
        isReady() {
            return this.iframeManager?.isLoaded() || !1
        }
    }
    class vi {
        storage;
        authManager;
        validateAndRefreshToken;
        constructor(t, e, r) {
            this.storage = t, this.authManager = e, this.validateAndRefreshToken = r
        }
        async get() {
            await this.validateAndRefreshToken();
            const t = await Lr.fromStorage(this.storage);
            if (!t) throw new Re("No access token found", _e.NOT_LOGGED_IN_ERROR);
            return await this.authManager.getUser(t)
        }
    }
    class Ai {
        storage;
        backendApiClients;
        validateAndRefreshToken;
        ensureInitialized;
        getSignerSignFunction;
        constructor(t, e, r, n, i) {
            this.storage = t, this.backendApiClients = e, this.validateAndRefreshToken = r, this.ensureInitialized = n, this.getSignerSignFunction = i
        }
        async sendSignatureTransactionIntentRequest(t, e = null, r = null, n = !1) {
            if (await this.ensureInitialized(), !Ur.fromStorage()) throw new Re("Configuration not found", _e.INVALID_CONFIGURATION);
            await this.validateAndRefreshToken();
            let i = r;
            if (!i) {
                if (!e) throw new Re("No signableHash or signature provided", _e.OPERATION_NOT_SUPPORTED_ERROR);
                if (!this.getSignerSignFunction) throw new Re("In order to sign a transaction intent, a signer must be configured", _e.MISSING_SIGNER_ERROR);
                const t = await this.getSignerSignFunction();
                i = await t(e)
            }
            const s = {
                id: t,
                signatureRequest: {
                    signature: i,
                    optimistic: n
                }
            };
            return Te(async () => (await this.backendApiClients.transactionIntentsApi.signature(s)).data, {
                default: _e.INTERNAL_ERROR
            })
        }
        async sendSignatureSessionRequest(t, e, r) {
            await this.ensureInitialized();
            const n = {
                id: t,
                signatureRequest: {
                    signature: e,
                    optimistic: r
                }
            };
            return Te(async () => (await this.backendApiClients.sessionsApi.signatureSession(n)).data, {
                default: _e.INTERNAL_ERROR
            })
        }
    }
    class bi {
        storage;
        authManager;
        eventEmitter;
        constructor(t, e, r) {
            this.storage = t, this.authManager = e, this.eventEmitter = r
        }
        async getAccessToken() {
            return (await Lr.fromStorage(this.storage))?.token ?? null
        }
        async validateAndRefreshToken(t) {
            const e = await Lr.fromStorage(this.storage);
            if (!e) throw new Re("Must be logged in to validate and refresh token", _e.NOT_LOGGED_IN_ERROR);
            if ("jwt" !== e.type) return;
            let r;
            Dr("validating credentials...");
            try {
                r = await this.authManager.validateCredentials(e, t)
            } catch (t) {
                throw this.storage.remove(Je.AUTHENTICATION), this.eventEmitter.emit(ke.LOGGED_OUT), t
            }
            if (!r.player) throw new Re("No user found in credentials", _e.INTERNAL_ERROR);
            r.accessToken !== e.token && (Dr("tokens refreshed"), new Lr("jwt", r.accessToken, r.player, r.refreshToken).save(this.storage), this.eventEmitter.emit(ke.TOKEN_REFRESHED))
        }
    }
    window.Openfort = class {
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
            if (!this.authInstance) throw new Re("Openfort SDK not initialized. Please await waitForInitialization() before accessing auth.", _e.INVALID_CONFIGURATION);
            return this.authInstance
        }
        get embeddedWallet() {
            if (!this.embeddedWalletInstance) throw new Re("Openfort SDK not initialized. Please await waitForInitialization() before accessing embeddedWallet.", _e.INVALID_CONFIGURATION);
            return this.embeddedWalletInstance
        }
        get user() {
            if (!this.userInstance) throw new Re("Openfort SDK not initialized. Please await waitForInitialization() before accessing user.", _e.INVALID_CONFIGURATION);
            return this.userInstance
        }
        get proxy() {
            if (!this.proxyInstance) throw new Re("Openfort SDK not initialized. Please await waitForInitialization() before accessing proxy.", _e.INVALID_CONFIGURATION);
            return this.proxyInstance
        }
        initializeSynchronously() {
            try {
                this.iAuthManager = new Vn(this.storage), this.openfortInternal = new bi(this.storage, this.authManager, this.eventEmitter), this.authInstance = new Wn(this.storage, this.authManager, this.validateAndRefreshToken.bind(this), this.ensureInitialized.bind(this), this.eventEmitter), this.embeddedWalletInstance = new wi(this.storage, this.validateAndRefreshToken.bind(this), this.ensureInitialized.bind(this), this.eventEmitter), this.userInstance = new vi(this.storage, this.authManager, this.validateAndRefreshToken.bind(this)), this.proxyInstance = new Ai(this.storage, this.backendApiClients, this.validateAndRefreshToken.bind(this), this.ensureInitialized.bind(this), async () => {
                    if (!this.embeddedWalletInstance) throw new Re("Embedded wallet not initialized", _e.MISSING_SIGNER_ERROR);
                    const t = this.embeddedWalletInstance;
                    return e => t.signMessage(e, {
                        hashMessage: !0,
                        arrayifyMessage: !0
                    })
                })
            } catch (t) {
                throw new Re("Openfort SDK synchronous initialization failed", _e.INVALID_CONFIGURATION)
            }
        }
        constructor(t) {
            this.configuration = new Ur(t), this.storage = new Mn(this.configuration.storage), this.eventEmitter = new oi, qr.init({
                configuration: this.configuration
            }), this.initializeSynchronously(), this.initPromise = Promise.resolve()
        }
        async waitForInitialization() {
            await this.initPromise, await this.ensureAsyncInitialized()
        }
        async getAccessToken() {
            return await this.ensureInitialized(), this.openfortInternal.getAccessToken()
        }
        async validateAndRefreshToken(t) {
            return await this.ensureInitialized(), await this.openfortInternal.validateAndRefreshToken(t)
        }
        get backendApiClients() {
            return new Cn({
                basePath: this.configuration.backendUrl,
                accessToken: this.configuration.baseConfiguration.publishableKey
            })
        }
        get authManager() {
            if (!this.iAuthManager) throw new Re("AuthManager not initialized", _e.INTERNAL_ERROR);
            return this.iAuthManager
        }
        async initializeAsync() {
            try {
                if (!await Ur.isStorageAccessible(this.storage)) throw new Re("Storage is not accessible", _e.INVALID_CONFIGURATION);
                this.authManager.setBackendApiClients(this.backendApiClients, this.configuration.baseConfiguration.publishableKey)
            } catch (t) {
                throw new Re("Openfort SDK async initialization failed", _e.INTERNAL_ERROR)
            }
        }
        async ensureAsyncInitialized() {
            this.asyncInitPromise || (this.asyncInitPromise = this.initializeAsync()), await this.asyncInitPromise
        }
        async ensureInitialized() {
            await this.initPromise, await this.ensureAsyncInitialized()
        }
    };
    const Ei = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        _i = globalThis,
        Ri = "9.34.0";

    function Ti() {
        return Ii(_i), _i
    }

    function Ii(t) {
        const e = t.__SENTRY__ = t.__SENTRY__ || {};
        return e.version = e.version || Ri, e[Ri] = e[Ri] || {}
    }

    function ki(t, e, r = _i) {
        const n = r.__SENTRY__ = r.__SENTRY__ || {},
            i = n[Ri] = n[Ri] || {};
        return i[t] || (i[t] = e())
    }
    const Si = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        Ni = {};

    function Oi(t) {
        if (!("console" in _i)) return t();
        const e = _i.console,
            r = {},
            n = Object.keys(Ni);
        n.forEach(t => {
            const n = Ni[t];
            r[t] = e[t], e[t] = n
        });
        try {
            return t()
        } finally {
            n.forEach(t => {
                e[t] = r[t]
            })
        }
    }
    const Pi = ki("logger", function() {
            let t = !1;
            const e = {
                enable: () => {
                    t = !0
                },
                disable: () => {
                    t = !1
                },
                isEnabled: () => t
            };
            return Ei ? Si.forEach(r => {
                e[r] = (...e) => {
                    t && Oi(() => {
                        _i.console[r](`Sentry Logger [${r}]:`, ...e)
                    })
                }
            }) : Si.forEach(t => {
                e[t] = () => {}
            }), e
        }),
        Ci = "?",
        xi = /\(error: (.*)\)/,
        Mi = /captureMessage|captureException/;

    function Ui(t) {
        return t[t.length - 1] || {}
    }
    const Di = "<anonymous>";
    const Li = Object.prototype.toString;

    function Bi(t) {
        switch (Li.call(t)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
            case "[object WebAssembly.Exception]":
                return !0;
            default:
                return Wi(t, Error)
        }
    }

    function Fi(t, e) {
        return Li.call(t) === `[object ${e}]`
    }

    function qi(t) {
        return Fi(t, "ErrorEvent")
    }

    function Gi(t) {
        return Fi(t, "DOMError")
    }

    function ji(t) {
        return Fi(t, "String")
    }

    function Hi(t) {
        return "object" == typeof t && null !== t && "__sentry_template_string__" in t && "__sentry_template_values__" in t
    }

    function zi(t) {
        return Fi(t, "Object")
    }

    function Ki(t) {
        return "undefined" != typeof Event && Wi(t, Event)
    }

    function Vi(t) {
        return Boolean(t?.then && "function" == typeof t.then)
    }

    function Wi(t, e) {
        try {
            return t instanceof e
        } catch (t) {
            return !1
        }
    }
    const Ji = _i;

    function Yi(t, e) {
        const r = t,
            n = [];
        if (!r?.tagName) return "";
        if (Ji.HTMLElement && r instanceof HTMLElement && r.dataset) {
            if (r.dataset.sentryComponent) return r.dataset.sentryComponent;
            if (r.dataset.sentryElement) return r.dataset.sentryElement
        }
        n.push(r.tagName.toLowerCase());
        const i = e?.length ? e.filter(t => r.getAttribute(t)).map(t => [t, r.getAttribute(t)]) : null;
        if (i?.length) i.forEach(t => {
            n.push(`[${t[0]}="${t[1]}"]`)
        });
        else {
            r.id && n.push(`#${r.id}`);
            const t = r.className;
            if (t && ji(t)) {
                const e = t.split(/\s+/);
                for (const t of e) n.push(`.${t}`)
            }
        }
        const s = ["aria-label", "type", "name", "title", "alt"];
        for (const t of s) {
            const e = r.getAttribute(t);
            e && n.push(`[${t}="${e}"]`)
        }
        return n.join("")
    }

    function Qi(t, e = 0) {
        return "string" != typeof t || 0 === e || t.length <= e ? t : `${t.slice(0,e)}...`
    }

    function Xi(t, e, r) {
        try {
            Object.defineProperty(t, e, {
                value: r,
                writable: !0,
                configurable: !0
            })
        } catch (r) {
            Ei && Pi.log(`Failed to add non-enumerable property "${e}" to object`, t)
        }
    }

    function $i(t) {
        if (Bi(t)) return {
            message: t.message,
            name: t.name,
            stack: t.stack,
            ...ts(t)
        };
        if (Ki(t)) {
            const e = {
                type: t.type,
                target: Zi(t.target),
                currentTarget: Zi(t.currentTarget),
                ...ts(t)
            };
            return "undefined" != typeof CustomEvent && Wi(t, CustomEvent) && (e.detail = t.detail), e
        }
        return t
    }

    function Zi(t) {
        try {
            return e = t, "undefined" != typeof Element && Wi(e, Element) ? function(t, e = {}) {
                if (!t) return "<unknown>";
                try {
                    let r = t;
                    const n = 5,
                        i = [];
                    let s = 0,
                        o = 0;
                    const a = " > ",
                        c = a.length;
                    let u;
                    const h = Array.isArray(e) ? e : e.keyAttrs,
                        l = !Array.isArray(e) && e.maxStringLength || 80;
                    for (; r && s++ < n && (u = Yi(r, h), !("html" === u || s > 1 && o + i.length * c + u.length >= l));) i.push(u), o += u.length, r = r.parentNode;
                    return i.reverse().join(a)
                } catch (t) {
                    return "<unknown>"
                }
            }(t) : Object.prototype.toString.call(t)
        } catch (t) {
            return "<unknown>"
        }
        var e
    }

    function ts(t) {
        if ("object" == typeof t && null !== t) {
            const e = {};
            for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }
        return {}
    }

    function es(t = function() {
        const t = _i;
        return t.crypto || t.msCrypto
    }()) {
        let e = () => 16 * Math.random();
        try {
            if (t?.randomUUID) return t.randomUUID().replace(/-/g, "");
            t?.getRandomValues && (e = () => {
                const e = new Uint8Array(1);
                return t.getRandomValues(e), e[0]
            })
        } catch (t) {}
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, t => (t ^ (15 & e()) >> t / 4).toString(16))
    }

    function rs(t, e, r) {
        const n = t.exception = t.exception || {},
            i = n.values = n.values || [],
            s = i[0] = i[0] || {};
        s.value || (s.value = e || ""), s.type || (s.type = "Error")
    }

    function ns(t, e) {
        const r = function(t) {
            return t.exception?.values?.[0]
        }(t);
        if (!r) return;
        const n = r.mechanism;
        if (r.mechanism = {
                type: "generic",
                handled: !0,
                ...n,
                ...e
            }, e && "data" in e) {
            const t = {
                ...n?.data,
                ...e.data
            };
            r.mechanism.data = t
        }
    }

    function is(t) {
        if (function(t) {
                try {
                    return t.__sentry_captured__
                } catch {}
            }(t)) return !0;
        try {
            Xi(t, "__sentry_captured__", !0)
        } catch (t) {}
        return !1
    }

    function ss() {
        return Date.now() / 1e3
    }
    const os = function() {
        const {
            performance: t
        } = _i;
        if (!t?.now) return ss;
        const e = Date.now() - t.now(),
            r = null == t.timeOrigin ? e : t.timeOrigin;
        return () => (r + t.now()) / 1e3
    }();

    function as(t, e = {}) {
        if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), t.did || e.did || (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || os(), e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = 32 === e.sid.length ? e.sid : es()), void 0 !== e.init && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), "number" == typeof e.started && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
        else if ("number" == typeof e.duration) t.duration = e.duration;
        else {
            const e = t.timestamp - t.started;
            t.duration = e >= 0 ? e : 0
        }
        e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), "number" == typeof e.errors && (t.errors = e.errors), e.status && (t.status = e.status)
    }

    function cs(t, e, r = 2) {
        if (!e || "object" != typeof e || r <= 0) return e;
        if (t && 0 === Object.keys(e).length) return t;
        const n = {
            ...t
        };
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = cs(n[t], e[t], r - 1));
        return n
    }

    function us() {
        return es()
    }

    function hs() {
        return es().substring(16)
    }
    const ls = "_sentrySpan";

    function ds(t, e) {
        e ? Xi(t, ls, e) : delete t[ls]
    }

    function fs(t) {
        return t[ls]
    }
    class ps {
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
                traceId: us(),
                sampleRand: Math.random()
            }
        }
        clone() {
            const t = new ps;
            return t._breadcrumbs = [...this._breadcrumbs], t._tags = {
                ...this._tags
            }, t._extra = {
                ...this._extra
            }, t._contexts = {
                ...this._contexts
            }, this._contexts.flags && (t._contexts.flags = {
                values: [...this._contexts.flags.values]
            }), t._user = this._user, t._level = this._level, t._session = this._session, t._transactionName = this._transactionName, t._fingerprint = this._fingerprint, t._eventProcessors = [...this._eventProcessors], t._attachments = [...this._attachments], t._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata
            }, t._propagationContext = {
                ...this._propagationContext
            }, t._client = this._client, t._lastEventId = this._lastEventId, ds(t, fs(this)), t
        }
        setClient(t) {
            this._client = t
        }
        setLastEventId(t) {
            this._lastEventId = t
        }
        getClient() {
            return this._client
        }
        lastEventId() {
            return this._lastEventId
        }
        addScopeListener(t) {
            this._scopeListeners.push(t)
        }
        addEventProcessor(t) {
            return this._eventProcessors.push(t), this
        }
        setUser(t) {
            return this._user = t || {
                email: void 0,
                id: void 0,
                ip_address: void 0,
                username: void 0
            }, this._session && as(this._session, {
                user: t
            }), this._notifyScopeListeners(), this
        }
        getUser() {
            return this._user
        }
        setTags(t) {
            return this._tags = {
                ...this._tags,
                ...t
            }, this._notifyScopeListeners(), this
        }
        setTag(t, e) {
            return this._tags = {
                ...this._tags,
                [t]: e
            }, this._notifyScopeListeners(), this
        }
        setExtras(t) {
            return this._extra = {
                ...this._extra,
                ...t
            }, this._notifyScopeListeners(), this
        }
        setExtra(t, e) {
            return this._extra = {
                ...this._extra,
                [t]: e
            }, this._notifyScopeListeners(), this
        }
        setFingerprint(t) {
            return this._fingerprint = t, this._notifyScopeListeners(), this
        }
        setLevel(t) {
            return this._level = t, this._notifyScopeListeners(), this
        }
        setTransactionName(t) {
            return this._transactionName = t, this._notifyScopeListeners(), this
        }
        setContext(t, e) {
            return null === e ? delete this._contexts[t] : this._contexts[t] = e, this._notifyScopeListeners(), this
        }
        setSession(t) {
            return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
        }
        getSession() {
            return this._session
        }
        update(t) {
            if (!t) return this;
            const e = "function" == typeof t ? t(this) : t,
                r = e instanceof ps ? e.getScopeData() : zi(e) ? t : void 0,
                {
                    tags: n,
                    extra: i,
                    user: s,
                    contexts: o,
                    level: a,
                    fingerprint: c = [],
                    propagationContext: u
                } = r || {};
            return this._tags = {
                ...this._tags,
                ...n
            }, this._extra = {
                ...this._extra,
                ...i
            }, this._contexts = {
                ...this._contexts,
                ...o
            }, s && Object.keys(s).length && (this._user = s), a && (this._level = a), c.length && (this._fingerprint = c), u && (this._propagationContext = u), this
        }
        clear() {
            return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, ds(this, void 0), this._attachments = [], this.setPropagationContext({
                traceId: us(),
                sampleRand: Math.random()
            }), this._notifyScopeListeners(), this
        }
        addBreadcrumb(t, e) {
            const r = "number" == typeof e ? e : 100;
            if (r <= 0) return this;
            const n = {
                timestamp: ss(),
                ...t,
                message: t.message ? Qi(t.message, 2048) : t.message
            };
            return this._breadcrumbs.push(n), this._breadcrumbs.length > r && (this._breadcrumbs = this._breadcrumbs.slice(-r), this._client?.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this
        }
        getLastBreadcrumb() {
            return this._breadcrumbs[this._breadcrumbs.length - 1]
        }
        clearBreadcrumbs() {
            return this._breadcrumbs = [], this._notifyScopeListeners(), this
        }
        addAttachment(t) {
            return this._attachments.push(t), this
        }
        clearAttachments() {
            return this._attachments = [], this
        }
        getScopeData() {
            return {
                breadcrumbs: this._breadcrumbs,
                attachments: this._attachments,
                contexts: this._contexts,
                tags: this._tags,
                extra: this._extra,
                user: this._user,
                level: this._level,
                fingerprint: this._fingerprint || [],
                eventProcessors: this._eventProcessors,
                propagationContext: this._propagationContext,
                sdkProcessingMetadata: this._sdkProcessingMetadata,
                transactionName: this._transactionName,
                span: fs(this)
            }
        }
        setSDKProcessingMetadata(t) {
            return this._sdkProcessingMetadata = cs(this._sdkProcessingMetadata, t, 2), this
        }
        setPropagationContext(t) {
            return this._propagationContext = t, this
        }
        getPropagationContext() {
            return this._propagationContext
        }
        captureException(t, e) {
            const r = e?.event_id || es();
            if (!this._client) return Pi.warn("No client configured on scope - will not capture exception!"), r;
            const n = new Error("Sentry syntheticException");
            return this._client.captureException(t, {
                originalException: t,
                syntheticException: n,
                ...e,
                event_id: r
            }, this), r
        }
        captureMessage(t, e, r) {
            const n = r?.event_id || es();
            if (!this._client) return Pi.warn("No client configured on scope - will not capture message!"), n;
            const i = new Error(t);
            return this._client.captureMessage(t, e, {
                originalException: t,
                syntheticException: i,
                ...r,
                event_id: n
            }, this), n
        }
        captureEvent(t, e) {
            const r = e?.event_id || es();
            return this._client ? (this._client.captureEvent(t, {
                ...e,
                event_id: r
            }, this), r) : (Pi.warn("No client configured on scope - will not capture event!"), r)
        }
        _notifyScopeListeners() {
            this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
                t(this)
            }), this._notifyingListeners = !1)
        }
    }
    class ms {
        constructor(t, e) {
            let r, n;
            r = t || new ps, n = e || new ps, this._stack = [{
                scope: r
            }], this._isolationScope = n
        }
        withScope(t) {
            const e = this._pushScope();
            let r;
            try {
                r = t(e)
            } catch (t) {
                throw this._popScope(), t
            }
            return Vi(r) ? r.then(t => (this._popScope(), t), t => {
                throw this._popScope(), t
            }) : (this._popScope(), r)
        }
        getClient() {
            return this.getStackTop().client
        }
        getScope() {
            return this.getStackTop().scope
        }
        getIsolationScope() {
            return this._isolationScope
        }
        getStackTop() {
            return this._stack[this._stack.length - 1]
        }
        _pushScope() {
            const t = this.getScope().clone();
            return this._stack.push({
                client: this.getClient(),
                scope: t
            }), t
        }
        _popScope() {
            return !(this._stack.length <= 1) && !!this._stack.pop()
        }
    }

    function gs() {
        const t = Ii(Ti());
        return t.stack = t.stack || new ms(ki("defaultCurrentScope", () => new ps), ki("defaultIsolationScope", () => new ps))
    }

    function ys(t) {
        return gs().withScope(t)
    }

    function ws(t, e) {
        const r = gs();
        return r.withScope(() => (r.getStackTop().scope = t, e(t)))
    }

    function vs(t) {
        return gs().withScope(() => t(gs().getIsolationScope()))
    }

    function As(t) {
        const e = Ii(t);
        return e.acs ? e.acs : {
            withIsolationScope: vs,
            withScope: ys,
            withSetScope: ws,
            withSetIsolationScope: (t, e) => vs(e),
            getCurrentScope: () => gs().getScope(),
            getIsolationScope: () => gs().getIsolationScope()
        }
    }

    function bs() {
        return As(Ti()).getCurrentScope()
    }

    function Es() {
        return As(Ti()).getIsolationScope()
    }

    function _s() {
        return ki("globalScope", () => new ps)
    }

    function Rs() {
        return bs().getClient()
    }

    function Ts(t) {
        const e = t.getPropagationContext(),
            {
                traceId: r,
                parentSpanId: n,
                propagationSpanId: i
            } = e,
            s = {
                trace_id: r,
                span_id: i || hs()
            };
        return n && (s.parent_span_id = n), s
    }
    const Is = "sentry.source",
        ks = "sentry.sample_rate",
        Ss = "sentry.op",
        Ns = "sentry.origin",
        Os = "sentry.profile_id",
        Ps = "sentry.exclusive_time";

    function Cs(t) {
        return {
            scope: t._sentryScope,
            isolationScope: t._sentryIsolationScope
        }
    }
    const xs = /^sentry-/;

    function Ms(t) {
        const e = function(t) {
            if (!t || !ji(t) && !Array.isArray(t)) return;
            if (Array.isArray(t)) return t.reduce((t, e) => {
                const r = Us(e);
                return Object.entries(r).forEach(([e, r]) => {
                    t[e] = r
                }), t
            }, {});
            return Us(t)
        }(t);
        if (!e) return;
        const r = Object.entries(e).reduce((t, [e, r]) => {
            if (e.match(xs)) {
                t[e.slice(7)] = r
            }
            return t
        }, {});
        return Object.keys(r).length > 0 ? r : void 0
    }

    function Us(t) {
        return t.split(",").map(t => t.split("=").map(t => {
            try {
                return decodeURIComponent(t.trim())
            } catch {
                return
            }
        })).reduce((t, [e, r]) => (e && r && (t[e] = r), t), {})
    }
    let Ds = !1;

    function Ls(t) {
        const {
            spanId: e,
            traceId: r,
            isRemote: n
        } = t.spanContext(), i = n ? e : Gs(t).parent_span_id, s = Cs(t).scope;
        return {
            parent_span_id: i,
            span_id: n ? s?.getPropagationContext().propagationSpanId || hs() : e,
            trace_id: r
        }
    }

    function Bs(t) {
        return t && t.length > 0 ? t.map(({
            context: {
                spanId: t,
                traceId: e,
                traceFlags: r,
                ...n
            },
            attributes: i
        }) => ({
            span_id: t,
            trace_id: e,
            sampled: 1 === r,
            attributes: i,
            ...n
        })) : void 0
    }

    function Fs(t) {
        return "number" == typeof t ? qs(t) : Array.isArray(t) ? t[0] + t[1] / 1e9 : t instanceof Date ? qs(t.getTime()) : os()
    }

    function qs(t) {
        return t > 9999999999 ? t / 1e3 : t
    }

    function Gs(t) {
        if (function(t) {
                return "function" == typeof t.getSpanJSON
            }(t)) return t.getSpanJSON();
        const {
            spanId: e,
            traceId: r
        } = t.spanContext();
        if (function(t) {
                const e = t;
                return !!(e.attributes && e.startTime && e.name && e.endTime && e.status)
            }(t)) {
            const {
                attributes: n,
                startTime: i,
                name: s,
                endTime: o,
                status: a,
                links: c
            } = t;
            return {
                span_id: e,
                trace_id: r,
                data: n,
                description: s,
                parent_span_id: "parentSpanId" in t ? t.parentSpanId : "parentSpanContext" in t ? t.parentSpanContext?.spanId : void 0,
                start_timestamp: Fs(i),
                timestamp: Fs(o) || void 0,
                status: js(a),
                op: n[Ss],
                origin: n[Ns],
                links: Bs(c)
            }
        }
        return {
            span_id: e,
            trace_id: r,
            start_timestamp: 0,
            data: {}
        }
    }

    function js(t) {
        if (t && 0 !== t.code) return 1 === t.code ? "ok" : t.message || "unknown_error"
    }

    function Hs(t) {
        return t._sentryRootSpan || t
    }

    function zs() {
        Ds || (Oi(() => {
            console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly.")
        }), Ds = !0)
    }
    const Ks = "production",
        Vs = /^o(\d+)\./,
        Ws = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function Js(t, e = !1) {
        const {
            host: r,
            path: n,
            pass: i,
            port: s,
            projectId: o,
            protocol: a,
            publicKey: c
        } = t;
        return `${a}://${c}${e&&i?`:${i}`:""}@${r}${s?`:${s}`:""}/${n?`${n}/`:n}${o}`
    }

    function Ys(t) {
        return {
            protocol: t.protocol,
            publicKey: t.publicKey || "",
            pass: t.pass || "",
            host: t.host,
            port: t.port || "",
            path: t.path || "",
            projectId: t.projectId
        }
    }

    function Qs(t) {
        const e = "string" == typeof t ? function(t) {
            const e = Ws.exec(t);
            if (!e) return void Oi(() => {
                console.error(`Invalid Sentry Dsn: ${t}`)
            });
            const [r, n, i = "", s = "", o = "", a = ""] = e.slice(1);
            let c = "",
                u = a;
            const h = u.split("/");
            if (h.length > 1 && (c = h.slice(0, -1).join("/"), u = h.pop()), u) {
                const t = u.match(/^\d+/);
                t && (u = t[0])
            }
            return Ys({
                host: s,
                pass: i,
                path: c,
                projectId: u,
                port: o,
                protocol: r,
                publicKey: n
            })
        }(t) : Ys(t);
        if (e && function(t) {
                if (!Ei) return !0;
                const {
                    port: e,
                    projectId: r,
                    protocol: n
                } = t;
                return !(["protocol", "publicKey", "host", "projectId"].find(e => !t[e] && (Pi.error(`Invalid Sentry Dsn: ${e} missing`), !0)) || (r.match(/^\d+$/) ? function(t) {
                    return "http" === t || "https" === t
                }(n) ? e && isNaN(parseInt(e, 10)) && (Pi.error(`Invalid Sentry Dsn: Invalid port ${e}`), 1) : (Pi.error(`Invalid Sentry Dsn: Invalid protocol ${n}`), 1) : (Pi.error(`Invalid Sentry Dsn: Invalid projectId ${r}`), 1)))
            }(e)) return e
    }

    function Xs(t, e) {
        const r = e.getOptions(),
            {
                publicKey: n,
                host: i
            } = e.getDsn() || {};
        let s;
        r.orgId ? s = String(r.orgId) : i && (s = function(t) {
            const e = t.match(Vs);
            return e?.[1]
        }(i));
        const o = {
            environment: r.environment || Ks,
            release: r.release,
            public_key: n,
            trace_id: t,
            org_id: s
        };
        return e.emit("createDsc", o), o
    }

    function $s(t) {
        const e = Rs();
        if (!e) return {};
        const r = Hs(t),
            n = Gs(r),
            i = n.data,
            s = r.spanContext().traceState,
            o = s?.get("sentry.sample_rate") ?? i[ks] ?? i["sentry.previous_trace_sample_rate"];

        function a(t) {
            return "number" != typeof o && "string" != typeof o || (t.sample_rate = `${o}`), t
        }
        const c = r._frozenDsc;
        if (c) return a(c);
        const u = s?.get("sentry.dsc"),
            h = u && Ms(u);
        if (h) return a(h);
        const l = Xs(t.spanContext().traceId, e),
            d = i[Is],
            f = n.description;
        return "url" !== d && f && (l.transaction = f),
            function(t) {
                if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
                const e = t || Rs()?.getOptions();
                return !(!e || null == e.tracesSampleRate && !e.tracesSampler)
            }() && (l.sampled = String(function(t) {
                const {
                    traceFlags: e
                } = t.spanContext();
                return 1 === e
            }(r)), l.sample_rand = s?.get("sentry.sample_rand") ?? Cs(r).scope?.getPropagationContext().sampleRand.toString()), a(l), e.emit("createDsc", l, r), l
    }

    function Zs(t, e = 100, r = 1 / 0) {
        try {
            return eo("", t, e, r)
        } catch (t) {
            return {
                ERROR: `**non-serializable** (${t})`
            }
        }
    }

    function to(t, e = 3, r = 102400) {
        const n = Zs(t, e);
        return i = n,
            function(t) {
                return ~-encodeURI(t).split(/%..|./).length
            }(JSON.stringify(i)) > r ? to(t, e - 1, r) : n;
        var i
    }

    function eo(t, e, r = 1 / 0, n = 1 / 0, i = function() {
        const t = new WeakSet;

        function e(e) {
            return !!t.has(e) || (t.add(e), !1)
        }

        function r(e) {
            t.delete(e)
        }
        return [e, r]
    }()) {
        const [s, o] = i;
        if (null == e || ["boolean", "string"].includes(typeof e) || "number" == typeof e && Number.isFinite(e)) return e;
        const a = function(t, e) {
            try {
                if ("domain" === t && e && "object" == typeof e && e._events) return "[Domain]";
                if ("domainEmitter" === t) return "[DomainEmitter]";
                if ("undefined" != typeof global && e === global) return "[Global]";
                if ("undefined" != typeof window && e === window) return "[Window]";
                if ("undefined" != typeof document && e === document) return "[Document]";
                if ("object" == typeof(r = e) && null !== r && (r.__isVue || r._isVue)) return "[VueViewModel]";
                if (function(t) {
                        return zi(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
                    }(e)) return "[SyntheticEvent]";
                if ("number" == typeof e && !Number.isFinite(e)) return `[${e}]`;
                if ("function" == typeof e) return `[Function: ${function(t){try{return t&&"function"==typeof t&&t.name||Di}catch(t){return Di}}(e)}]`;
                if ("symbol" == typeof e) return `[${String(e)}]`;
                if ("bigint" == typeof e) return `[BigInt: ${String(e)}]`;
                const n = function(t) {
                    const e = Object.getPrototypeOf(t);
                    return e?.constructor ? e.constructor.name : "null prototype"
                }(e);
                return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`
            } catch (t) {
                return `**non-serializable** (${t})`
            }
            var r
        }(t, e);
        if (!a.startsWith("[object ")) return a;
        if (e.__sentry_skip_normalization__) return e;
        const c = "number" == typeof e.__sentry_override_normalization_depth__ ? e.__sentry_override_normalization_depth__ : r;
        if (0 === c) return a.replace("object ", "");
        if (s(e)) return "[Circular ~]";
        const u = e;
        if (u && "function" == typeof u.toJSON) try {
            return eo("", u.toJSON(), c - 1, n, i)
        } catch (t) {}
        const h = Array.isArray(e) ? [] : {};
        let l = 0;
        const d = $i(e);
        for (const t in d) {
            if (!Object.prototype.hasOwnProperty.call(d, t)) continue;
            if (l >= n) {
                h[t] = "[MaxProperties ~]";
                break
            }
            const e = d[t];
            h[t] = eo(t, e, c - 1, n, i), l++
        }
        return o(e), h
    }

    function ro(t, e = []) {
        return [t, e]
    }

    function no(t, e) {
        const [r, n] = t;
        return [r, [...n, e]]
    }

    function io(t, e) {
        const r = t[1];
        for (const t of r) {
            if (e(t, t[0].type)) return !0
        }
        return !1
    }

    function so(t) {
        const e = Ii(_i);
        return e.encodePolyfill ? e.encodePolyfill(t) : (new TextEncoder).encode(t)
    }

    function oo(t) {
        const [e, r] = t;
        let n = JSON.stringify(e);

        function i(t) {
            "string" == typeof n ? n = "string" == typeof t ? n + t : [so(n), t] : n.push("string" == typeof t ? so(t) : t)
        }
        for (const t of r) {
            const [e, r] = t;
            if (i(`\n${JSON.stringify(e)}\n`), "string" == typeof r || r instanceof Uint8Array) i(r);
            else {
                let t;
                try {
                    t = JSON.stringify(r)
                } catch (e) {
                    t = JSON.stringify(Zs(r))
                }
                i(t)
            }
        }
        return "string" == typeof n ? n : function(t) {
            const e = t.reduce((t, e) => t + e.length, 0),
                r = new Uint8Array(e);
            let n = 0;
            for (const e of t) r.set(e, n), n += e.length;
            return r
        }(n)
    }

    function ao(t) {
        const e = "string" == typeof t.data ? so(t.data) : t.data;
        return [{
            type: "attachment",
            length: e.length,
            filename: t.filename,
            content_type: t.contentType,
            attachment_type: t.attachmentType
        }, e]
    }
    const co = {
        session: "session",
        sessions: "session",
        attachment: "attachment",
        transaction: "transaction",
        event: "error",
        client_report: "internal",
        user_report: "default",
        profile: "profile",
        profile_chunk: "profile",
        replay_event: "replay",
        replay_recording: "replay",
        check_in: "monitor",
        feedback: "feedback",
        span: "span",
        raw_security: "security",
        log: "log_item"
    };

    function uo(t) {
        return co[t]
    }

    function ho(t) {
        if (!t?.sdk) return;
        const {
            name: e,
            version: r
        } = t.sdk;
        return {
            name: e,
            version: r
        }
    }

    function lo(t, e, r, n) {
        const i = ho(r),
            s = t.type && "replay_event" !== t.type ? t.type : "event";
        ! function(t, e) {
            e && (t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version = t.sdk.version || e.version, t.sdk.integrations = [...t.sdk.integrations || [], ...e.integrations || []], t.sdk.packages = [...t.sdk.packages || [], ...e.packages || []])
        }(t, r?.sdk);
        const o = function(t, e, r, n) {
            const i = t.sdkProcessingMetadata?.dynamicSamplingContext;
            return {
                event_id: t.event_id,
                sent_at: (new Date).toISOString(),
                ...e && {
                    sdk: e
                },
                ...!!r && n && {
                    dsn: Js(n)
                },
                ...i && {
                    trace: i
                }
            }
        }(t, i, n, e);
        delete t.sdkProcessingMetadata;
        return ro(o, [
            [{
                type: s
            }, t]
        ])
    }
    var fo;

    function po(t) {
        return new go(e => {
            e(t)
        })
    }

    function mo(t) {
        return new go((e, r) => {
            r(t)
        })
    }! function(t) {
        t[t.PENDING = 0] = "PENDING";
        t[t.RESOLVED = 1] = "RESOLVED";
        t[t.REJECTED = 2] = "REJECTED"
    }(fo || (fo = {}));
    class go {
        constructor(t) {
            this._state = fo.PENDING, this._handlers = [], this._runExecutor(t)
        }
        then(t, e) {
            return new go((r, n) => {
                this._handlers.push([!1, e => {
                    if (t) try {
                        r(t(e))
                    } catch (t) {
                        n(t)
                    } else r(e)
                }, t => {
                    if (e) try {
                        r(e(t))
                    } catch (t) {
                        n(t)
                    } else n(t)
                }]), this._executeHandlers()
            })
        } catch (t) {
            return this.then(t => t, t)
        } finally(t) {
            return new go((e, r) => {
                let n, i;
                return this.then(e => {
                    i = !1, n = e, t && t()
                }, e => {
                    i = !0, n = e, t && t()
                }).then(() => {
                    i ? r(n) : e(n)
                })
            })
        }
        _executeHandlers() {
            if (this._state === fo.PENDING) return;
            const t = this._handlers.slice();
            this._handlers = [], t.forEach(t => {
                t[0] || (this._state === fo.RESOLVED && t[1](this._value), this._state === fo.REJECTED && t[2](this._value), t[0] = !0)
            })
        }
        _runExecutor(t) {
            const e = (t, e) => {
                    this._state === fo.PENDING && (Vi(e) ? e.then(r, n) : (this._state = t, this._value = e, this._executeHandlers()))
                },
                r = t => {
                    e(fo.RESOLVED, t)
                },
                n = t => {
                    e(fo.REJECTED, t)
                };
            try {
                t(r, n)
            } catch (t) {
                n(t)
            }
        }
    }

    function yo(t, e, r, n = 0) {
        return new go((i, s) => {
            const o = t[n];
            if (null === e || "function" != typeof o) i(e);
            else {
                const a = o({
                    ...e
                }, r);
                Ei && o.id && null === a && Pi.log(`Event processor "${o.id}" dropped event`), Vi(a) ? a.then(e => yo(t, e, r, n + 1).then(i)).then(null, s) : yo(t, a, r, n + 1).then(i).then(null, s)
            }
        })
    }

    function wo(t, e) {
        const {
            fingerprint: r,
            span: n,
            breadcrumbs: i,
            sdkProcessingMetadata: s
        } = e;
        ! function(t, e) {
            const {
                extra: r,
                tags: n,
                user: i,
                contexts: s,
                level: o,
                transactionName: a
            } = e;
            Object.keys(r).length && (t.extra = {
                ...r,
                ...t.extra
            });
            Object.keys(n).length && (t.tags = {
                ...n,
                ...t.tags
            });
            Object.keys(i).length && (t.user = {
                ...i,
                ...t.user
            });
            Object.keys(s).length && (t.contexts = {
                ...s,
                ...t.contexts
            });
            o && (t.level = o);
            a && "transaction" !== t.type && (t.transaction = a)
        }(t, e), n && function(t, e) {
                t.contexts = {
                    trace: Ls(e),
                    ...t.contexts
                }, t.sdkProcessingMetadata = {
                    dynamicSamplingContext: $s(e),
                    ...t.sdkProcessingMetadata
                };
                const r = Hs(e),
                    n = Gs(r).description;
                n && !t.transaction && "transaction" === t.type && (t.transaction = n)
            }(t, n),
            function(t, e) {
                t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [], e && (t.fingerprint = t.fingerprint.concat(e));
                t.fingerprint.length || delete t.fingerprint
            }(t, r),
            function(t, e) {
                const r = [...t.breadcrumbs || [], ...e];
                t.breadcrumbs = r.length ? r : void 0
            }(t, i),
            function(t, e) {
                t.sdkProcessingMetadata = {
                    ...t.sdkProcessingMetadata,
                    ...e
                }
            }(t, s)
    }

    function vo(t, e) {
        const {
            extra: r,
            tags: n,
            user: i,
            contexts: s,
            level: o,
            sdkProcessingMetadata: a,
            breadcrumbs: c,
            fingerprint: u,
            eventProcessors: h,
            attachments: l,
            propagationContext: d,
            transactionName: f,
            span: p
        } = e;
        Ao(t, "extra", r), Ao(t, "tags", n), Ao(t, "user", i), Ao(t, "contexts", s), t.sdkProcessingMetadata = cs(t.sdkProcessingMetadata, a, 2), o && (t.level = o), f && (t.transactionName = f), p && (t.span = p), c.length && (t.breadcrumbs = [...t.breadcrumbs, ...c]), u.length && (t.fingerprint = [...t.fingerprint, ...u]), h.length && (t.eventProcessors = [...t.eventProcessors, ...h]), l.length && (t.attachments = [...t.attachments, ...l]), t.propagationContext = {
            ...t.propagationContext,
            ...d
        }
    }

    function Ao(t, e, r) {
        t[e] = cs(t[e], r, 1)
    }
    let bo, Eo, _o;

    function Ro(t, e, r, n, i, s) {
        const {
            normalizeDepth: o = 3,
            normalizeMaxBreadth: a = 1e3
        } = t, c = {
            ...e,
            event_id: e.event_id || r.event_id || es(),
            timestamp: e.timestamp || ss()
        }, u = r.integrations || t.integrations.map(t => t.name);
        ! function(t, e) {
            const {
                environment: r,
                release: n,
                dist: i,
                maxValueLength: s = 250
            } = e;
            t.environment = t.environment || r || Ks, !t.release && n && (t.release = n);
            !t.dist && i && (t.dist = i);
            const o = t.request;
            o?.url && (o.url = Qi(o.url, s))
        }(c, t),
        function(t, e) {
            e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [...t.sdk.integrations || [], ...e])
        }(c, u), i && i.emit("applyFrameMetadata", e), void 0 === e.type && function(t, e) {
            const r = function(t) {
                const e = _i._sentryDebugIds;
                if (!e) return {};
                const r = Object.keys(e);
                return _o && r.length === Eo || (Eo = r.length, _o = r.reduce((r, n) => {
                    bo || (bo = {});
                    const i = bo[n];
                    if (i) r[i[0]] = i[1];
                    else {
                        const i = t(n);
                        for (let t = i.length - 1; t >= 0; t--) {
                            const s = i[t],
                                o = s?.filename,
                                a = e[n];
                            if (o && a) {
                                r[o] = a, bo[n] = [o, a];
                                break
                            }
                        }
                    }
                    return r
                }, {})), _o
            }(e);
            t.exception?.values?.forEach(t => {
                t.stacktrace?.frames?.forEach(t => {
                    t.filename && (t.debug_id = r[t.filename])
                })
            })
        }(c, t.stackParser);
        const h = function(t, e) {
            if (!e) return t;
            const r = t ? t.clone() : new ps;
            return r.update(e), r
        }(n, r.captureContext);
        r.mechanism && ns(c, r.mechanism);
        const l = i ? i.getEventProcessors() : [],
            d = _s().getScopeData();
        if (s) {
            vo(d, s.getScopeData())
        }
        if (h) {
            vo(d, h.getScopeData())
        }
        const f = [...r.attachments || [], ...d.attachments];
        f.length && (r.attachments = f), wo(c, d);
        return yo([...l, ...d.eventProcessors], c, r).then(t => (t && function(t) {
            const e = {};
            if (t.exception?.values?.forEach(t => {
                    t.stacktrace?.frames?.forEach(t => {
                        t.debug_id && (t.abs_path ? e[t.abs_path] = t.debug_id : t.filename && (e[t.filename] = t.debug_id), delete t.debug_id)
                    })
                }), 0 === Object.keys(e).length) return;
            t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
            const r = t.debug_meta.images;
            Object.entries(e).forEach(([t, e]) => {
                r.push({
                    type: "sourcemap",
                    code_file: t,
                    debug_id: e
                })
            })
        }(t), "number" == typeof o && o > 0 ? function(t, e, r) {
            if (!t) return null;
            const n = {
                ...t,
                ...t.breadcrumbs && {
                    breadcrumbs: t.breadcrumbs.map(t => ({
                        ...t,
                        ...t.data && {
                            data: Zs(t.data, e, r)
                        }
                    }))
                },
                ...t.user && {
                    user: Zs(t.user, e, r)
                },
                ...t.contexts && {
                    contexts: Zs(t.contexts, e, r)
                },
                ...t.extra && {
                    extra: Zs(t.extra, e, r)
                }
            };
            t.contexts?.trace && n.contexts && (n.contexts.trace = t.contexts.trace, t.contexts.trace.data && (n.contexts.trace.data = Zs(t.contexts.trace.data, e, r)));
            t.spans && (n.spans = t.spans.map(t => ({
                ...t,
                ...t.data && {
                    data: Zs(t.data, e, r)
                }
            })));
            t.contexts?.flags && n.contexts && (n.contexts.flags = Zs(t.contexts.flags, 3, r));
            return n
        }(t, o, a) : t))
    }

    function To(t, e, r) {
        return e || `${function(t){return`${function(t){const e=t.protocol?`${t.protocol}:`:"",r=t.port?`:${t.port}`:"";return`${e}//${t.host}${r}${t.path?`/${t.path}`:""}/api/`}(t)}${t.projectId}/envelope/`}(t)}?${function(t,e){const r={sentry_version:"7"};return t.publicKey&&(r.sentry_key=t.publicKey),e&&(r.sentry_client=`
        $ {
            e.name
        }
        /${e.version}`),new URLSearchParams(r).toString()}(t,r)}`}const Io=[];function ko(t,e){for(const r of e)r?.afterAllSetup&&r.afterAllSetup(t)}function So(t,e,r){if(r[e.name])Ei&&Pi.log(`Integration skipped because it was already installed: ${e.name}`);else{if(r[e.name]=e,-1===Io.indexOf(e.name)&&"function"==typeof e.setupOnce&&(e.setupOnce(),Io.push(e.name)),e.setup&&"function"==typeof e.setup&&e.setup(t),"function"==typeof e.preprocessEvent){const r=e.preprocessEvent.bind(e);t.on("preprocessEvent",(e,n)=>r(e,n,t))}if("function"==typeof e.processEvent){const r=e.processEvent.bind(e),n=Object.assign((e,n)=>r(e,n,t),{id:e.name});t.addEventProcessor(n)}Ei&&Pi.log(`Integration installed: ${e.name}`)}}const No="Not capturing exception because it's already been captured.",Oo="Discarded session because of missing or non-string release",Po=Symbol.for("SentryInternalError"),Co=Symbol.for("SentryDoNotSendEventError");function xo(t){return{message:t,[Po]:!0}}function Mo(t){return{message:t,[Co]:!0}}function Uo(t){return!!t&&"object"==typeof t&&Po in t}function Do(t){return!!t&&"object"==typeof t&&Co in t}class Lo{constructor(t){if(this._options=t,this._integrations={},this._numProcessing=0,this._outcomes={},this._hooks={},this._eventProcessors=[],t.dsn?this._dsn=Qs(t.dsn):Ei&&Pi.warn("No DSN provided, client will not send events."),this._dsn){const e=To(this._dsn,t.tunnel,t._metadata?t._metadata.sdk:void 0);this._transport=t.transport({tunnel:this._options.tunnel,recordDroppedEvent:this.recordDroppedEvent.bind(this),...t.transportOptions,url:e})}}captureException(t,e,r){const n=es();if(is(t))return Ei&&Pi.log(No),n;const i={event_id:n,...e};return this._process(this.eventFromException(t,i).then(t=>this._captureEvent(t,i,r))),i.event_id}captureMessage(t,e,r,n){const i={event_id:es(),...r},s=Hi(t)?t:String(t),o=null===(a=t)||Hi(a)||"object"!=typeof a&&"function"!=typeof a?this.eventFromMessage(s,e,i):this.eventFromException(t,i);var a;return this._process(o.then(t=>this._captureEvent(t,i,n))),i.event_id}captureEvent(t,e,r){const n=es();if(e?.originalException&&is(e.originalException))return Ei&&Pi.log(No),n;const i={event_id:n,...e},s=t.sdkProcessingMetadata||{},o=s.capturedSpanScope,a=s.capturedSpanIsolationScope;return this._process(this._captureEvent(t,i,o||r,a)),i.event_id}captureSession(t){this.sendSession(t),as(t,{init:!1})}getDsn(){return this._dsn}getOptions(){return this._options}getSdkMetadata(){return this._options._metadata}getTransport(){return this._transport}flush(t){const e=this._transport;return e?(this.emit("flush"),this._isClientDoneProcessing(t).then(r=>e.flush(t).then(t=>r&&t))):po(!0)}close(t){return this.flush(t).then(t=>(this.getOptions().enabled=!1,this.emit("close"),t))}getEventProcessors(){return this._eventProcessors}addEventProcessor(t){this._eventProcessors.push(t)}init(){(this._isEnabled()||this._options.integrations.some(({name:t})=>t.startsWith("Spotlight")))&&this._setupIntegrations()}getIntegrationByName(t){return this._integrations[t]}addIntegration(t){const e=this._integrations[t.name];So(this,t,this._integrations),e||ko(this,[t])}sendEvent(t,e={}){this.emit("beforeSendEvent",t,e);let r=lo(t,this._dsn,this._options._metadata,this._options.tunnel);for(const t of e.attachments||[])r=no(r,ao(t));const n=this.sendEnvelope(r);n&&n.then(e=>this.emit("afterSendEvent",t,e),null)}sendSession(t){const{release:e,environment:r=Ks}=this._options;if("aggregates"in t){const n=t.attrs||{};if(!n.release&&!e)return void(Ei&&Pi.warn(Oo));n.release=n.release||e,n.environment=n.environment||r,t.attrs=n}else{if(!t.release&&!e)return void(Ei&&Pi.warn(Oo));t.release=t.release||e,t.environment=t.environment||r}this.emit("beforeSendSession",t);const n=function(t,e,r,n){const i=ho(r);return ro({sent_at:(new Date).toISOString(),...i&&{sdk:i},...!!n&&e&&{dsn:Js(e)}},["aggregates"in t?[{type:"sessions"},t]:[{type:"session"},t.toJSON()]])}(t,this._dsn,this._options._metadata,this._options.tunnel);this.sendEnvelope(n)}recordDroppedEvent(t,e,r=1){if(this._options.sendClientReports){const n=`${t}:${e}`;Ei&&Pi.log(`Recording outcome: "${n}"${r>1?` (${r} times)`:""}`),this._outcomes[n]=(this._outcomes[n]||0)+r}}on(t,e){const r=this._hooks[t]=this._hooks[t]||[];return r.push(e),()=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)}}emit(t,...e){const r=this._hooks[t];r&&r.forEach(t=>t(...e))}sendEnvelope(t){return this.emit("beforeEnvelope",t),this._isEnabled()&&this._transport?this._transport.send(t).then(null,t=>(Ei&&Pi.error("Error while sending envelope:",t),t)):(Ei&&Pi.error("Transport disabled"),po({}))}_setupIntegrations(){const{integrations:t}=this._options;this._integrations=function(t,e){const r={};return e.forEach(e=>{e&&So(t,e,r)}),r}(this,t),ko(this,t)}_updateSessionFromEvent(t,e){let r="fatal"===e.level,n=!1;const i=e.exception?.values;if(i){n=!0;for(const t of i){const e=t.mechanism;if(!1===e?.handled){r=!0;break}}}const s="ok"===t.status;(s&&0===t.errors||s&&r)&&(as(t,{...r&&{status:"crashed"},errors:t.errors||Number(n||r)}),this.captureSession(t))}_isClientDoneProcessing(t){return new go(e=>{let r=0;const n=setInterval(()=>{0==this._numProcessing?(clearInterval(n),e(!0)):(r+=1,t&&r>=t&&(clearInterval(n),e(!1)))},1)})}_isEnabled(){return!1!==this.getOptions().enabled&&void 0!==this._transport}_prepareEvent(t,e,r,n){const i=this.getOptions(),s=Object.keys(this._integrations);return!e.integrations&&s?.length&&(e.integrations=s),this.emit("preprocessEvent",t,e),t.type||n.setLastEventId(t.event_id||e.event_id),Ro(i,t,e,r,this,n).then(t=>{if(null===t)return t;this.emit("postprocessEvent",t,e),t.contexts={trace:Ts(r),...t.contexts};const n=function(t,e){const r=e.getPropagationContext();return r.dsc||Xs(r.traceId,t)}(this,r);return t.sdkProcessingMetadata={dynamicSamplingContext:n,...t.sdkProcessingMetadata},t})}_captureEvent(t,e={},r=bs(),n=Es()){return Ei&&Bo(t)&&Pi.log(`Captured error event \`${function(t){const e=[];t.message&&e.push(t.message);try{const r=t.exception.values[t.exception.values.length-1];r?.value&&(e.push(r.value),r.type&&e.push(`${r.type}: ${r.value}`))}catch(t){}return e}(t)[0]||"<unknown>"}\``),this._processEvent(t,e,r,n).then(t=>t.event_id,t=>{Ei&&(Do(t)?Pi.log(t.message):Uo(t)?Pi.warn(t.message):Pi.warn(t))})}_processEvent(t,e,r,n){const i=this.getOptions(),{sampleRate:s}=i,o=Fo(t),a=Bo(t),c=t.type||"error",u=`before send for type \`${c}\``,h=void 0===s?void 0:function(t){if("boolean"==typeof t)return Number(t);const e="string"==typeof t?parseFloat(t):t;return"number"!=typeof e||isNaN(e)||e<0||e>1?void 0:e}(s);if(a&&"number"==typeof h&&Math.random()>h)return this.recordDroppedEvent("sample_rate","error"),mo(Mo(`Discarding event because it's not included in the random sample (sampling rate = ${s})`));const l="replay_event"===c?"replay":c;return this._prepareEvent(t,e,r,n).then(t=>{if(null===t)throw this.recordDroppedEvent("event_processor",l),Mo("An event processor returned `null`, will not send event.");if(e.data&&!0===e.data.__sentry__)return t;const r=function(t,e,r,n){const{beforeSend:i,beforeSendTransaction:s,beforeSendSpan:o}=e;let a=r;if(Bo(a)&&i)return i(a,n);if(Fo(a)){if(o){const t=o(function(t){const{trace_id:e,parent_span_id:r,span_id:n,status:i,origin:s,data:o,op:a}=t.contexts?.trace??{};return{data:o??{},description:t.transaction,op:a,parent_span_id:r,span_id:n??"",start_timestamp:t.start_timestamp??0,status:i,timestamp:t.timestamp,trace_id:e??"",origin:s,profile_id:o?.[Os],exclusive_time:o?.[Ps],measurements:t.measurements,is_segment:!0}}(a));if(t?a=cs(r,{type:"transaction",timestamp:(c=t).timestamp,start_timestamp:c.start_timestamp,transaction:c.description,contexts:{trace:{trace_id:c.trace_id,span_id:c.span_id,parent_span_id:c.parent_span_id,op:c.op,status:c.status,origin:c.origin,data:{...c.data,...c.profile_id&&{[Os]:c.profile_id},...c.exclusive_time&&{[Ps]:c.exclusive_time}}}},measurements:c.measurements}):zs(),a.spans){const t=[];for(const e of a.spans){const r=o(e);r?t.push(r):(zs(),t.push(e))}a.spans=t}}if(s){if(a.spans){const t=a.spans.length;a.sdkProcessingMetadata={...r.sdkProcessingMetadata,spanCountBeforeProcessing:t}}return s(a,n)}}var c;return a}(0,i,t,e);return function(t,e){const r=`${e} must return \`null\` or a valid event.`;if(Vi(t))return t.then(t=>{if(!zi(t)&&null!==t)throw xo(r);return t},t=>{throw xo(`${e} rejected with ${t}`)});if(!zi(t)&&null!==t)throw xo(r);return t}(r,u)}).then(i=>{if(null===i){if(this.recordDroppedEvent("before_send",l),o){const e=1+(t.spans||[]).length;this.recordDroppedEvent("before_send","span",e)}throw Mo(`${u} returned \`null\`, will not send event.`)}const s=r.getSession()||n.getSession();if(a&&s&&this._updateSessionFromEvent(s,i),o){const t=(i.sdkProcessingMetadata?.spanCountBeforeProcessing||0)-(i.spans?i.spans.length:0);t>0&&this.recordDroppedEvent("before_send","span",t)}const c=i.transaction_info;if(o&&c&&i.transaction!==t.transaction){const t="custom";i.transaction_info={...c,source:t}}return this.sendEvent(i,e),i}).then(null,t=>{if(Do(t)||Uo(t))throw t;throw this.captureException(t,{data:{__sentry__:!0},originalException:t}),xo(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${t}`)})}_process(t){this._numProcessing++,t.then(t=>(this._numProcessing--,t),t=>(this._numProcessing--,t))}_clearOutcomes(){const t=this._outcomes;return this._outcomes={},Object.entries(t).map(([t,e])=>{const[r,n]=t.split(":");return{reason:r,category:n,quantity:e}})}_flushOutcomes(){Ei&&Pi.log("Flushing outcomes...");const t=this._clearOutcomes();if(0===t.length)return void(Ei&&Pi.log("No outcomes to send"));if(!this._dsn)return void(Ei&&Pi.log("No dsn provided, will not send outcomes"));Ei&&Pi.log("Sending outcomes:",t);const e=(r=t,ro((n=this._options.tunnel&&Js(this._dsn))?{dsn:n}:{},[[{type:"client_report"},{timestamp:ss(),discarded_events:r}]]));var r,n;this.sendEnvelope(e)}}function Bo(t){return void 0===t.type}function Fo(t){return"transaction"===t.type}function qo(t,e){const r=function(t){return _i._sentryClientToLogBufferMap?.get(t)}(t)??[];if(0===r.length)return;const n=t.getOptions(),i=function(t,e,r,n){const i={};return e?.sdk&&(i.sdk={name:e.sdk.name,version:e.sdk.version}),r&&n&&(i.dsn=Js(n)),ro(i,[(s=t,[{type:"log",item_count:s.length,content_type:"application/vnd.sentry.items.log+json"},{items:s}])]);var s}(r,n._metadata,n.tunnel,t.getDsn());_i._sentryClientToLogBufferMap?.set(t,[]),t.emit("flushLogs"),t.sendEnvelope(i)}_i._sentryClientToLogBufferMap=new WeakMap;const Go=Symbol.for("SentryBufferFullError");function jo(t){const e=[];function r(t){return e.splice(e.indexOf(t),1)[0]||Promise.resolve(void 0)}return{$:e,add:function(n){if(!(void 0===t||e.length<t))return mo(Go);const i=n();return-1===e.indexOf(i)&&e.push(i),i.then(()=>r(i)).then(null,()=>r(i).then(null,()=>{})),i},drain:function(t){return new go((r,n)=>{let i=e.length;if(!i)return r(!0);const s=setTimeout(()=>{t&&t>0&&r(!1)},t);e.forEach(t=>{po(t).then(()=>{--i||(clearTimeout(s),r(!0))},n)})})}}}function Ho(t,{statusCode:e,headers:r},n=Date.now()){const i={...t},s=r?.["x-sentry-rate-limits"],o=r?.["retry-after"];if(s)for(const t of s.trim().split(",")){const[e,r,,,s]=t.split(":",5),o=parseInt(e,10),a=1e3*(isNaN(o)?60:o);if(r)for(const t of r.split(";"))"metric_bucket"===t&&s&&!s.split(";").includes("custom")||(i[t]=n+a);else i.all=n+a}else o?i.all=n+function(t,e=Date.now()){const r=parseInt(`${t}`,10);if(!isNaN(r))return 1e3*r;const n=Date.parse(`${t}`);return isNaN(n)?6e4:n-e}(o,n):429===e&&(i.all=n+6e4);return i}function zo(t,e,r=jo(t.bufferSize||64)){let n={};return{send:function(i){const s=[];if(io(i,(e,r)=>{const i=uo(r);!function(t,e,r=Date.now()){return function(t,e){return t[e]||t.all||0}(t,e)>r}(n,i)?s.push(e):t.recordDroppedEvent("ratelimit_backoff",i)}),0===s.length)return po({});const o=ro(i[0],s),a=e=>{io(o,(r,n)=>{t.recordDroppedEvent(e,uo(n))})};return r.add(()=>e({body:oo(o)}).then(t=>(void 0!==t.statusCode&&(t.statusCode<200||t.statusCode>=300)&&Ei&&Pi.warn(`Sentry responded with status code ${t.statusCode} to sent event.`),n=Ho(n,t),t),t=>{throw a("network_error"),Ei&&Pi.error("Encountered error running transport request:",t),t})).then(t=>t,t=>{if(t===Go)return Ei&&Pi.error("Skipped sending event because buffer is full."),a("queue_overflow"),po({});throw t})},flush:t=>r.drain(t)}}function Ko(t){void 0===t.user?.ip_address&&(t.user={...t.user,ip_address:"{{auto}}"})}function Vo(t){"aggregates"in t?void 0===t.attrs?.ip_address&&(t.attrs={...t.attrs,ip_address:"{{auto}}"}):void 0===t.ipAddress&&(t.ipAddress="{{auto}}")}const Wo=_i;function Jo(t,e){const r=Xo(t,e),n={type:ta(e),value:ea(e)};return r.length&&(n.stacktrace={frames:r}),void 0===n.type&&""===n.value&&(n.value="Unrecoverable error caught"),n}function Yo(t,e,r,n){const i=Rs(),s=i?.getOptions().normalizeDepth,o=function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)){const r=t[e];if(r instanceof Error)return r}return}(e),a={__serialized__:to(e,s)};if(o)return{exception:{values:[Jo(t,o)]},extra:a};const c={exception:{values:[{type:Ki(e)?e.constructor.name:n?"UnhandledRejection":"Error",value:sa(e,{isUnhandledRejection:n})}]},extra:a};if(r){const e=Xo(t,r);e.length&&(c.exception.values[0].stacktrace={frames:e})}return c}function Qo(t,e){return{exception:{values:[Jo(t,e)]}}}function Xo(t,e){const r=e.stacktrace||e.stack||"",n=function(t){if(t&&$o.test(t.message))return 1;return 0}(e),i=function(t){if("number"==typeof t.framesToPop)return t.framesToPop;return 0}(e);try{return t(r,n,i)}catch(t){}return[]}const $o=/Minified
        React error #\ d + ;
        /i;function Zo(t){return"undefined"!=typeof WebAssembly&&void 0!==WebAssembly.Exception&&t instanceof WebAssembly.Exception}function ta(t){const e=t?.name;if(!e&&Zo(t)){return t.message&&Array.isArray(t.message)&&2==t.message.length?t.message[0]:"WebAssembly.Exception"}return e}function ea(t){const e=t?.message;return Zo(t)?Array.isArray(t.message)&&2==t.message.length?t.message[1]:"wasm exception":e?e.error&&"string"==typeof e.error.message?e.error.message:e:"No error message"}function ra(t,e,r,n){const i=function(t,e,r,n,i){let s;if(qi(e)&&e.error){return Qo(t,e.error)}if(Gi(e)||(o=e,Fi(o,"DOMException"))){const i=e;if("stack"in e)s=Qo(t,e);else{const e=i.name||(Gi(i)?"DOMError":"DOMException"),o=i.message?`${e}: ${i.message}`:e;s=ia(t,o,r,n),rs(s,o)}return"code"in i&&(s.tags={...s.tags,"DOMException.code":`${i.code}`}),s}var o;if(Bi(e))return Qo(t,e);if(zi(e)||Ki(e)){return s=Yo(t,e,r,i),ns(s,{synthetic:!0}),s}return s=ia(t,e,r,n),rs(s,`${e}`),ns(s,{synthetic:!0}),s}(t,e,r?.syntheticException||void 0,n);return ns(i),i.level="error",r?.event_id&&(i.event_id=r.event_id),po(i)}function na(t,e,r="info",n,i){const s=ia(t,e,n?.syntheticException||void 0,i);return s.level=r,n?.event_id&&(s.event_id=n.event_id),po(s)}function ia(t,e,r,n){const i={};if(n&&r){const n=Xo(t,r);n.length&&(i.exception={values:[{value:e,stacktrace:{frames:n}}]}),ns(i,{synthetic:!0})}if(Hi(e)){const{__sentry_template_string__:t,__sentry_template_values__:r}=e;return i.logentry={message:t,params:r},i}return i.message=e,i}function sa(t,{isUnhandledRejection:e}){const r=function(t,e=40){const r=Object.keys($i(t));r.sort();const n=r[0];if(!n)return"[object has no keys]";if(n.length>=e)return Qi(n,e);for(let t=r.length;t>0;t--){const n=r.slice(0,t).join(", ");if(!(n.length>e))return t===r.length?n:Qi(n,e)}return""}(t),n="exception";if(qi(t))return`Event \`ErrorEvent\` captured as ${n} with message \`${t.message}\``;if(Ki(t)){const e=function(t){try{const e=Object.getPrototypeOf(t);return e?e.constructor.name:void 0}catch(t){}}(t);return`Event \`${e}\` (type=${t.type}) captured as ${n}`}return`Object captured as ${n} with keys: ${r}`}const oa="undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__,aa=_i,ca={};function ua(t){ca[t]=void 0}function ha(t,e,r,n){const i={filename:t,function:"<anonymous>"===e?Ci:e,in_app:!0};return void 0!==r&&(i.lineno=r),void 0!==n&&(i.colno=n),i}const la=/ ^ \s * at(\S + ? )( ? ::(\d + ))( ? ::(\d + ))\ s * $ / i, da = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, fa = /\((\S*)(?::(\d+))(?::(\d+))\)/, pa = [30, t => {
            const e = la.exec(t);
            if (e) {
                const [, t, r, n] = e;
                return ha(t, Ci, +r, +n)
            }
            const r = da.exec(t);
            if (r) {
                if (r[2] && 0 === r[2].indexOf("eval")) {
                    const t = fa.exec(r[2]);
                    t && (r[2] = t[1], r[3] = t[2], r[4] = t[3])
                }
                const [t, e] = Aa(r[1] || Ci, r[2]);
                return ha(e, t, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0)
            }
        }], ma = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, ga = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, ya = [50, t => {
            const e = ma.exec(t);
            if (e) {
                if (e[3] && e[3].indexOf(" > eval") > -1) {
                    const t = ga.exec(e[3]);
                    t && (e[1] = e[1] || "eval", e[3] = t[1], e[4] = t[2], e[5] = "")
                }
                let t = e[3],
                    r = e[1] || Ci;
                return [r, t] = Aa(r, t), ha(t, r, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
            }
        }], wa = [pa, ya], va = function(...t) {
            const e = t.sort((t, e) => t[0] - e[0]).map(t => t[1]);
            return (t, r = 0, n = 0) => {
                const i = [],
                    s = t.split("\n");
                for (let t = r; t < s.length; t++) {
                    const r = s[t];
                    if (r.length > 1024) continue;
                    const o = xi.test(r) ? r.replace(xi, "$1") : r;
                    if (!o.match(/\S*Error: /)) {
                        for (const t of e) {
                            const e = t(o);
                            if (e) {
                                i.push(e);
                                break
                            }
                        }
                        if (i.length >= 50 + n) break
                    }
                }
                return function(t) {
                    if (!t.length) return [];
                    const e = Array.from(t);
                    /sentryWrapped/.test(Ui(e).function || "") && e.pop();
                    e.reverse(), Mi.test(Ui(e).function || "") && (e.pop(), Mi.test(Ui(e).function || "") && e.pop());
                    return e.slice(0, 50).map(t => ({
                        ...t,
                        filename: t.filename || Ui(e).filename,
                        function: t.function || Ci
                    }))
                }(i.slice(n))
            }
        }(...wa), Aa = (t, e) => {
            const r = -1 !== t.indexOf("safari-extension"),
                n = -1 !== t.indexOf("safari-web-extension");
            return r || n ? [-1 !== t.indexOf("@") ? t.split("@")[0] : Ci, r ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
        };
        var ba, Ea = Object.freeze({
                __proto__: null,
                BrowserClient: class extends Lo {
                    constructor(t) {
                        const e = (r = t, {
                            release: "string" == typeof __SENTRY_RELEASE__ ? __SENTRY_RELEASE__ : Wo.SENTRY_RELEASE?.id,
                            sendClientReports: !0,
                            parentSpanIsAlwaysRootSpan: !0,
                            ...r
                        });
                        var r;
                        ! function(t, e, r = [e], n = "npm") {
                            const i = t._metadata || {};
                            i.sdk || (i.sdk = {
                                name: `sentry.javascript.${e}`,
                                packages: r.map(t => ({
                                    name: `${n}:@sentry/${t}`,
                                    version: Ri
                                })),
                                version: Ri
                            }), t._metadata = i
                        }(e, "browser", ["browser"], Wo.SENTRY_SDK_SOURCE || "npm"), super(e);
                        const {
                            sendDefaultPii: n,
                            sendClientReports: i,
                            _experiments: s
                        } = this._options, o = s?.enableLogs;
                        Wo.document && (i || o) && Wo.document.addEventListener("visibilitychange", () => {
                            "hidden" === Wo.document.visibilityState && (i && this._flushOutcomes(), o && qo(this))
                        }), o && (this.on("flush", () => {
                            qo(this)
                        }), this.on("afterCaptureLog", () => {
                            this._logFlushIdleTimeout && clearTimeout(this._logFlushIdleTimeout), this._logFlushIdleTimeout = setTimeout(() => {
                                qo(this)
                            }, 5e3)
                        })), n && (this.on("postprocessEvent", Ko), this.on("beforeSendSession", Vo))
                    }
                    eventFromException(t, e) {
                        return ra(this._options.stackParser, t, e, this._options.attachStacktrace)
                    }
                    eventFromMessage(t, e = "info", r) {
                        return na(this._options.stackParser, t, e, r, this._options.attachStacktrace)
                    }
                    _prepareEvent(t, e, r, n) {
                        return t.platform = t.platform || "javascript", super._prepareEvent(t, e, r, n)
                    }
                },
                SDK_VERSION: Ri,
                SEMANTIC_ATTRIBUTE_SENTRY_OP: Ss,
                SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN: Ns,
                SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE: ks,
                SEMANTIC_ATTRIBUTE_SENTRY_SOURCE: Is,
                Scope: ps,
                WINDOW: Wo,
                chromeStackLineParser: pa,
                createTransport: zo,
                defaultStackLineParsers: wa,
                defaultStackParser: va,
                eventFromException: ra,
                eventFromMessage: na,
                exceptionFromError: Jo,
                geckoStackLineParser: ya,
                getClient: Rs,
                getCurrentScope: bs,
                getGlobalScope: _s,
                getIsolationScope: Es,
                getRootSpan: Hs,
                makeFetchTransport: function(t, e = function(t) {
                    const e = ca[t];
                    if (e) return e;
                    let r = aa[t];
                    if ((n = r) && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(n.toString())) return ca[t] = r.bind(aa);
                    var n;
                    const i = aa.document;
                    if (i && "function" == typeof i.createElement) try {
                        const e = i.createElement("iframe");
                        e.hidden = !0, i.head.appendChild(e);
                        const n = e.contentWindow;
                        n?.[t] && (r = n[t]), i.head.removeChild(e)
                    } catch (e) {
                        oa && Pi.warn(`Could not create sandbox iframe for ${t} check, bailing to window.${t}: `, e)
                    }
                    return r ? ca[t] = r.bind(aa) : r
                }("fetch")) {
                    let r = 0,
                        n = 0;
                    return zo(t, function(i) {
                        const s = i.body.length;
                        r += s, n++;
                        const o = {
                            body: i.body,
                            method: "POST",
                            referrerPolicy: "strict-origin",
                            headers: t.headers,
                            keepalive: r <= 6e4 && n < 15,
                            ...t.fetchOptions
                        };
                        if (!e) return ua("fetch"), mo("No fetch implementation available");
                        try {
                            return e(t.url, o).then(t => (r -= s, n--, {
                                statusCode: t.status,
                                headers: {
                                    "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
                                    "retry-after": t.headers.get("Retry-After")
                                }
                            }))
                        } catch (t) {
                            return ua("fetch"), r -= s, n--, mo(t)
                        }
                    })
                },
                spanToJSON: Gs
            }),
            _a = {
                exports: {}
            };
        var Ra, Ta = (ba || (ba = 1, Ra = _a, function() {
                var t = "input is invalid type",
                    e = "object" == typeof window,
                    r = e ? window : {};
                r.JS_SHA3_NO_WINDOW && (e = !1);
                var n = !e && "object" == typeof self;
                !r.JS_SHA3_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node ? r = Yr : n && (r = self);
                var i = !r.JS_SHA3_NO_COMMON_JS && Ra.exports,
                    s = !r.JS_SHA3_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
                    o = "0123456789abcdef".split(""),
                    a = [4, 1024, 262144, 67108864],
                    c = [0, 8, 16, 24],
                    u = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
                    h = [224, 256, 384, 512],
                    l = [128, 256],
                    d = ["hex", "buffer", "arrayBuffer", "array", "digest"],
                    f = {
                        128: 168,
                        256: 136
                    };
                !r.JS_SHA3_NO_NODE_JS && Array.isArray || (Array.isArray = function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }), !s || !r.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(t) {
                    return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
                });
                for (var p = function(t, e, r) {
                        return function(n) {
                            return new N(t, e, t).update(n)[r]()
                        }
                    }, m = function(t, e, r) {
                        return function(n, i) {
                            return new N(t, e, i).update(n)[r]()
                        }
                    }, g = function(t, e, r) {
                        return function(e, n, i, s) {
                            return b["cshake" + t].update(e, n, i, s)[r]()
                        }
                    }, y = function(t, e, r) {
                        return function(e, n, i, s) {
                            return b["kmac" + t].update(e, n, i, s)[r]()
                        }
                    }, w = function(t, e, r, n) {
                        for (var i = 0; i < d.length; ++i) {
                            var s = d[i];
                            t[s] = e(r, n, s)
                        }
                        return t
                    }, v = function(t, e) {
                        var r = p(t, e, "hex");
                        return r.create = function() {
                            return new N(t, e, t)
                        }, r.update = function(t) {
                            return r.create().update(t)
                        }, w(r, p, t, e)
                    }, A = [{
                        name: "keccak",
                        padding: [1, 256, 65536, 16777216],
                        bits: h,
                        createMethod: v
                    }, {
                        name: "sha3",
                        padding: [6, 1536, 393216, 100663296],
                        bits: h,
                        createMethod: v
                    }, {
                        name: "shake",
                        padding: [31, 7936, 2031616, 520093696],
                        bits: l,
                        createMethod: function(t, e) {
                            var r = m(t, e, "hex");
                            return r.create = function(r) {
                                return new N(t, e, r)
                            }, r.update = function(t, e) {
                                return r.create(e).update(t)
                            }, w(r, m, t, e)
                        }
                    }, {
                        name: "cshake",
                        padding: a,
                        bits: l,
                        createMethod: function(t, e) {
                            var r = f[t],
                                n = g(t, 0, "hex");
                            return n.create = function(n, i, s) {
                                return i || s ? new N(t, e, n).bytepad([i, s], r) : b["shake" + t].create(n)
                            }, n.update = function(t, e, r, i) {
                                return n.create(e, r, i).update(t)
                            }, w(n, g, t, e)
                        }
                    }, {
                        name: "kmac",
                        padding: a,
                        bits: l,
                        createMethod: function(t, e) {
                            var r = f[t],
                                n = y(t, 0, "hex");
                            return n.create = function(n, i, s) {
                                return new O(t, e, i).bytepad(["KMAC", s], r).bytepad([n], r)
                            }, n.update = function(t, e, r, i) {
                                return n.create(t, r, i).update(e)
                            }, w(n, y, t, e)
                        }
                    }], b = {}, E = [], _ = 0; _ < A.length; ++_)
                    for (var R = A[_], T = R.bits, I = 0; I < T.length; ++I) {
                        var k = R.name + "_" + T[I];
                        if (E.push(k), b[k] = R.createMethod(T[I], R.padding), "sha3" !== R.name) {
                            var S = R.name + T[I];
                            E.push(S), b[S] = b[k]
                        }
                    }

                function N(t, e, r) {
                    this.blocks = [], this.s = [], this.padding = e, this.outputBits = r, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (t << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
                    for (var n = 0; n < 50; ++n) this.s[n] = 0
                }

                function O(t, e, r) {
                    N.call(this, t, e, r)
                }
                N.prototype.update = function(e) {
                    if (this.finalized) throw new Error("finalize already called");
                    var r, n = typeof e;
                    if ("string" !== n) {
                        if ("object" !== n) throw new Error(t);
                        if (null === e) throw new Error(t);
                        if (s && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                        else if (!(Array.isArray(e) || s && ArrayBuffer.isView(e))) throw new Error(t);
                        r = !0
                    }
                    for (var i, o, a = this.blocks, u = this.byteCount, h = e.length, l = this.blockCount, d = 0, f = this.s; d < h;) {
                        if (this.reset)
                            for (this.reset = !1, a[0] = this.block, i = 1; i < l + 1; ++i) a[i] = 0;
                        if (r)
                            for (i = this.start; d < h && i < u; ++d) a[i >> 2] |= e[d] << c[3 & i++];
                        else
                            for (i = this.start; d < h && i < u; ++d)(o = e.charCodeAt(d)) < 128 ? a[i >> 2] |= o << c[3 & i++] : o < 2048 ? (a[i >> 2] |= (192 | o >> 6) << c[3 & i++], a[i >> 2] |= (128 | 63 & o) << c[3 & i++]) : o < 55296 || o >= 57344 ? (a[i >> 2] |= (224 | o >> 12) << c[3 & i++], a[i >> 2] |= (128 | o >> 6 & 63) << c[3 & i++], a[i >> 2] |= (128 | 63 & o) << c[3 & i++]) : (o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(++d)), a[i >> 2] |= (240 | o >> 18) << c[3 & i++], a[i >> 2] |= (128 | o >> 12 & 63) << c[3 & i++], a[i >> 2] |= (128 | o >> 6 & 63) << c[3 & i++], a[i >> 2] |= (128 | 63 & o) << c[3 & i++]);
                        if (this.lastByteIndex = i, i >= u) {
                            for (this.start = i - u, this.block = a[l], i = 0; i < l; ++i) f[i] ^= a[i];
                            P(f), this.reset = !0
                        } else this.start = i
                    }
                    return this
                }, N.prototype.encode = function(t, e) {
                    var r = 255 & t,
                        n = 1,
                        i = [r];
                    for (r = 255 & (t >>= 8); r > 0;) i.unshift(r), r = 255 & (t >>= 8), ++n;
                    return e ? i.push(n) : i.unshift(n), this.update(i), i.length
                }, N.prototype.encodeString = function(e) {
                    var r, n = typeof e;
                    if ("string" !== n) {
                        if ("object" !== n) throw new Error(t);
                        if (null === e) throw new Error(t);
                        if (s && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                        else if (!(Array.isArray(e) || s && ArrayBuffer.isView(e))) throw new Error(t);
                        r = !0
                    }
                    var i = 0,
                        o = e.length;
                    if (r) i = o;
                    else
                        for (var a = 0; a < e.length; ++a) {
                            var c = e.charCodeAt(a);
                            c < 128 ? i += 1 : c < 2048 ? i += 2 : c < 55296 || c >= 57344 ? i += 3 : (c = 65536 + ((1023 & c) << 10 | 1023 & e.charCodeAt(++a)), i += 4)
                        }
                    return i += this.encode(8 * i), this.update(e), i
                }, N.prototype.bytepad = function(t, e) {
                    for (var r = this.encode(e), n = 0; n < t.length; ++n) r += this.encodeString(t[n]);
                    var i = e - r % e,
                        s = [];
                    return s.length = i, this.update(s), this
                }, N.prototype.finalize = function() {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var t = this.blocks,
                            e = this.lastByteIndex,
                            r = this.blockCount,
                            n = this.s;
                        if (t[e >> 2] |= this.padding[3 & e], this.lastByteIndex === this.byteCount)
                            for (t[0] = t[r], e = 1; e < r + 1; ++e) t[e] = 0;
                        for (t[r - 1] |= 2147483648, e = 0; e < r; ++e) n[e] ^= t[e];
                        P(n)
                    }
                }, N.prototype.toString = N.prototype.hex = function() {
                    this.finalize();
                    for (var t, e = this.blockCount, r = this.s, n = this.outputBlocks, i = this.extraBytes, s = 0, a = 0, c = ""; a < n;) {
                        for (s = 0; s < e && a < n; ++s, ++a) t = r[s], c += o[t >> 4 & 15] + o[15 & t] + o[t >> 12 & 15] + o[t >> 8 & 15] + o[t >> 20 & 15] + o[t >> 16 & 15] + o[t >> 28 & 15] + o[t >> 24 & 15];
                        a % e === 0 && (P(r), s = 0)
                    }
                    return i && (t = r[s], c += o[t >> 4 & 15] + o[15 & t], i > 1 && (c += o[t >> 12 & 15] + o[t >> 8 & 15]), i > 2 && (c += o[t >> 20 & 15] + o[t >> 16 & 15])), c
                }, N.prototype.arrayBuffer = function() {
                    this.finalize();
                    var t, e = this.blockCount,
                        r = this.s,
                        n = this.outputBlocks,
                        i = this.extraBytes,
                        s = 0,
                        o = 0,
                        a = this.outputBits >> 3;
                    t = i ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(a);
                    for (var c = new Uint32Array(t); o < n;) {
                        for (s = 0; s < e && o < n; ++s, ++o) c[o] = r[s];
                        o % e === 0 && P(r)
                    }
                    return i && (c[s] = r[s], t = t.slice(0, a)), t
                }, N.prototype.buffer = N.prototype.arrayBuffer, N.prototype.digest = N.prototype.array = function() {
                    this.finalize();
                    for (var t, e, r = this.blockCount, n = this.s, i = this.outputBlocks, s = this.extraBytes, o = 0, a = 0, c = []; a < i;) {
                        for (o = 0; o < r && a < i; ++o, ++a) t = a << 2, e = n[o], c[t] = 255 & e, c[t + 1] = e >> 8 & 255, c[t + 2] = e >> 16 & 255, c[t + 3] = e >> 24 & 255;
                        a % r === 0 && P(n)
                    }
                    return s && (t = a << 2, e = n[o], c[t] = 255 & e, s > 1 && (c[t + 1] = e >> 8 & 255), s > 2 && (c[t + 2] = e >> 16 & 255)), c
                }, O.prototype = new N, O.prototype.finalize = function() {
                    return this.encode(this.outputBits, !0), N.prototype.finalize.call(this)
                };
                var P = function(t) {
                    var e, r, n, i, s, o, a, c, h, l, d, f, p, m, g, y, w, v, A, b, E, _, R, T, I, k, S, N, O, P, C, x, M, U, D, L, B, F, q, G, j, H, z, K, V, W, J, Y, Q, X, $, Z, tt, et, rt, nt, it, st, ot, at, ct, ut, ht;
                    for (n = 0; n < 48; n += 2) i = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], s = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], o = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], c = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], h = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], l = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], d = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], e = (f = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^ (o << 1 | a >>> 31), r = (p = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^ (a << 1 | o >>> 31), t[0] ^= e, t[1] ^= r, t[10] ^= e, t[11] ^= r, t[20] ^= e, t[21] ^= r, t[30] ^= e, t[31] ^= r, t[40] ^= e, t[41] ^= r, e = i ^ (c << 1 | h >>> 31), r = s ^ (h << 1 | c >>> 31), t[2] ^= e, t[3] ^= r, t[12] ^= e, t[13] ^= r, t[22] ^= e, t[23] ^= r, t[32] ^= e, t[33] ^= r, t[42] ^= e, t[43] ^= r, e = o ^ (l << 1 | d >>> 31), r = a ^ (d << 1 | l >>> 31), t[4] ^= e, t[5] ^= r, t[14] ^= e, t[15] ^= r, t[24] ^= e, t[25] ^= r, t[34] ^= e, t[35] ^= r, t[44] ^= e, t[45] ^= r, e = c ^ (f << 1 | p >>> 31), r = h ^ (p << 1 | f >>> 31), t[6] ^= e, t[7] ^= r, t[16] ^= e, t[17] ^= r, t[26] ^= e, t[27] ^= r, t[36] ^= e, t[37] ^= r, t[46] ^= e, t[47] ^= r, e = l ^ (i << 1 | s >>> 31), r = d ^ (s << 1 | i >>> 31), t[8] ^= e, t[9] ^= r, t[18] ^= e, t[19] ^= r, t[28] ^= e, t[29] ^= r, t[38] ^= e, t[39] ^= r, t[48] ^= e, t[49] ^= r, m = t[0], g = t[1], W = t[11] << 4 | t[10] >>> 28, J = t[10] << 4 | t[11] >>> 28, N = t[20] << 3 | t[21] >>> 29, O = t[21] << 3 | t[20] >>> 29, at = t[31] << 9 | t[30] >>> 23, ct = t[30] << 9 | t[31] >>> 23, H = t[40] << 18 | t[41] >>> 14, z = t[41] << 18 | t[40] >>> 14, U = t[2] << 1 | t[3] >>> 31, D = t[3] << 1 | t[2] >>> 31, y = t[13] << 12 | t[12] >>> 20, w = t[12] << 12 | t[13] >>> 20, Y = t[22] << 10 | t[23] >>> 22, Q = t[23] << 10 | t[22] >>> 22, P = t[33] << 13 | t[32] >>> 19, C = t[32] << 13 | t[33] >>> 19, ut = t[42] << 2 | t[43] >>> 30, ht = t[43] << 2 | t[42] >>> 30, et = t[5] << 30 | t[4] >>> 2, rt = t[4] << 30 | t[5] >>> 2, L = t[14] << 6 | t[15] >>> 26, B = t[15] << 6 | t[14] >>> 26, v = t[25] << 11 | t[24] >>> 21, A = t[24] << 11 | t[25] >>> 21, X = t[34] << 15 | t[35] >>> 17, $ = t[35] << 15 | t[34] >>> 17, x = t[45] << 29 | t[44] >>> 3, M = t[44] << 29 | t[45] >>> 3, T = t[6] << 28 | t[7] >>> 4, I = t[7] << 28 | t[6] >>> 4, nt = t[17] << 23 | t[16] >>> 9, it = t[16] << 23 | t[17] >>> 9, F = t[26] << 25 | t[27] >>> 7, q = t[27] << 25 | t[26] >>> 7, b = t[36] << 21 | t[37] >>> 11, E = t[37] << 21 | t[36] >>> 11, Z = t[47] << 24 | t[46] >>> 8, tt = t[46] << 24 | t[47] >>> 8, K = t[8] << 27 | t[9] >>> 5, V = t[9] << 27 | t[8] >>> 5, k = t[18] << 20 | t[19] >>> 12, S = t[19] << 20 | t[18] >>> 12, st = t[29] << 7 | t[28] >>> 25, ot = t[28] << 7 | t[29] >>> 25, G = t[38] << 8 | t[39] >>> 24, j = t[39] << 8 | t[38] >>> 24, _ = t[48] << 14 | t[49] >>> 18, R = t[49] << 14 | t[48] >>> 18, t[0] = m ^ ~y & v, t[1] = g ^ ~w & A, t[10] = T ^ ~k & N, t[11] = I ^ ~S & O, t[20] = U ^ ~L & F, t[21] = D ^ ~B & q, t[30] = K ^ ~W & Y, t[31] = V ^ ~J & Q, t[40] = et ^ ~nt & st, t[41] = rt ^ ~it & ot, t[2] = y ^ ~v & b, t[3] = w ^ ~A & E, t[12] = k ^ ~N & P, t[13] = S ^ ~O & C, t[22] = L ^ ~F & G, t[23] = B ^ ~q & j, t[32] = W ^ ~Y & X, t[33] = J ^ ~Q & $, t[42] = nt ^ ~st & at, t[43] = it ^ ~ot & ct, t[4] = v ^ ~b & _, t[5] = A ^ ~E & R, t[14] = N ^ ~P & x, t[15] = O ^ ~C & M, t[24] = F ^ ~G & H, t[25] = q ^ ~j & z, t[34] = Y ^ ~X & Z, t[35] = Q ^ ~$ & tt, t[44] = st ^ ~at & ut, t[45] = ot ^ ~ct & ht, t[6] = b ^ ~_ & m, t[7] = E ^ ~R & g, t[16] = P ^ ~x & T, t[17] = C ^ ~M & I, t[26] = G ^ ~H & U, t[27] = j ^ ~z & D, t[36] = X ^ ~Z & K, t[37] = $ ^ ~tt & V, t[46] = at ^ ~ut & et, t[47] = ct ^ ~ht & rt, t[8] = _ ^ ~m & y, t[9] = R ^ ~g & w, t[18] = x ^ ~T & k, t[19] = M ^ ~I & S, t[28] = H ^ ~U & L, t[29] = z ^ ~D & B, t[38] = Z ^ ~K & W, t[39] = tt ^ ~V & J, t[48] = ut ^ ~et & nt, t[49] = ht ^ ~rt & it, t[0] ^= u[n], t[1] ^= u[n + 1]
                };
                if (i) Ra.exports = b;
                else
                    for (_ = 0; _ < E.length; ++_) r[E[_]] = b[E[_]]
            }()), _a.exports),
            Ia = Qr(Ta);
        let ka = !1,
            Sa = !1;
        const Na = {
            debug: 1,
            default: 2,
            info: 2,
            warning: 3,
            error: 4,
            off: 5
        };
        let Oa = Na.default,
            Pa = null;
        const Ca = function() {
            try {
                const t = [];
                if (["NFD", "NFC", "NFKD", "NFKC"].forEach(e => {
                        try {
                            if ("test" !== "test".normalize(e)) throw new Error("bad normalize")
                        } catch (r) {
                            t.push(e)
                        }
                    }), t.length) throw new Error("missing " + t.join(", "));
                if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
            } catch (t) {
                return t.message
            }
            return null
        }();
        var xa, Ma;
        ! function(t) {
            t.DEBUG = "DEBUG", t.INFO = "INFO", t.WARNING = "WARNING", t.ERROR = "ERROR", t.OFF = "OFF"
        }(xa || (xa = {})),
        function(t) {
            t.UNKNOWN_ERROR = "UNKNOWN_ERROR", t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", t.NETWORK_ERROR = "NETWORK_ERROR", t.SERVER_ERROR = "SERVER_ERROR", t.TIMEOUT = "TIMEOUT", t.BUFFER_OVERRUN = "BUFFER_OVERRUN", t.NUMERIC_FAULT = "NUMERIC_FAULT", t.MISSING_NEW = "MISSING_NEW", t.INVALID_ARGUMENT = "INVALID_ARGUMENT", t.MISSING_ARGUMENT = "MISSING_ARGUMENT", t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", t.CALL_EXCEPTION = "CALL_EXCEPTION", t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", t.NONCE_EXPIRED = "NONCE_EXPIRED", t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", t.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", t.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", t.ACTION_REJECTED = "ACTION_REJECTED"
        }(Ma || (Ma = {}));
        const Ua = "0123456789abcdef";
        class Da {
            constructor(t) {
                Object.defineProperty(this, "version", {
                    enumerable: !0,
                    value: t,
                    writable: !1
                })
            }
            _log(t, e) {
                const r = t.toLowerCase();
                null == Na[r] && this.throwArgumentError("invalid log level name", "logLevel", t), Oa > Na[r] || console.log.apply(console, e)
            }
            debug(...t) {
                this._log(Da.levels.DEBUG, t)
            }
            info(...t) {
                this._log(Da.levels.INFO, t)
            }
            warn(...t) {
                this._log(Da.levels.WARNING, t)
            }
            makeError(t, e, r) {
                if (Sa) return this.makeError("censored error", e, {});
                e || (e = Da.errors.UNKNOWN_ERROR), r || (r = {});
                const n = [];
                Object.keys(r).forEach(t => {
                    const e = r[t];
                    try {
                        if (e instanceof Uint8Array) {
                            let r = "";
                            for (let t = 0; t < e.length; t++) r += Ua[e[t] >> 4], r += Ua[15 & e[t]];
                            n.push(t + "=Uint8Array(0x" + r + ")")
                        } else n.push(t + "=" + JSON.stringify(e))
                    } catch (e) {
                        n.push(t + "=" + JSON.stringify(r[t].toString()))
                    }
                }), n.push(`code=${e}`), n.push(`version=${this.version}`);
                const i = t;
                let s = "";
                switch (e) {
                    case Ma.NUMERIC_FAULT: {
                        s = "NUMERIC_FAULT";
                        const e = t;
                        switch (e) {
                            case "overflow":
                            case "underflow":
                            case "division-by-zero":
                                s += "-" + e;
                                break;
                            case "negative-power":
                            case "negative-width":
                                s += "-unsupported";
                                break;
                            case "unbound-bitwise-result":
                                s += "-unbound-result"
                        }
                        break
                    }
                    case Ma.CALL_EXCEPTION:
                    case Ma.INSUFFICIENT_FUNDS:
                    case Ma.MISSING_NEW:
                    case Ma.NONCE_EXPIRED:
                    case Ma.REPLACEMENT_UNDERPRICED:
                    case Ma.TRANSACTION_REPLACED:
                    case Ma.UNPREDICTABLE_GAS_LIMIT:
                        s = e
                }
                s && (t += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"), n.length && (t += " (" + n.join(", ") + ")");
                const o = new Error(t);
                return o.reason = i, o.code = e, Object.keys(r).forEach(function(t) {
                    o[t] = r[t]
                }), o
            }
            throwError(t, e, r) {
                throw this.makeError(t, e, r)
            }
            throwArgumentError(t, e, r) {
                return this.throwError(t, Da.errors.INVALID_ARGUMENT, {
                    argument: e,
                    value: r
                })
            }
            assert(t, e, r, n) {
                t || this.throwError(e, r, n)
            }
            assertArgument(t, e, r, n) {
                t || this.throwArgumentError(e, r, n)
            }
            checkNormalize(t) {
                Ca && this.throwError("platform missing String.prototype.normalize", Da.errors.UNSUPPORTED_OPERATION, {
                    operation: "String.prototype.normalize",
                    form: Ca
                })
            }
            checkSafeUint53(t, e) {
                "number" == typeof t && (null == e && (e = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(e, Da.errors.NUMERIC_FAULT, {
                    operation: "checkSafeInteger",
                    fault: "out-of-safe-range",
                    value: t
                }), t % 1 && this.throwError(e, Da.errors.NUMERIC_FAULT, {
                    operation: "checkSafeInteger",
                    fault: "non-integer",
                    value: t
                }))
            }
            checkArgumentCount(t, e, r) {
                r = r ? ": " + r : "", t < e && this.throwError("missing argument" + r, Da.errors.MISSING_ARGUMENT, {
                    count: t,
                    expectedCount: e
                }), t > e && this.throwError("too many arguments" + r, Da.errors.UNEXPECTED_ARGUMENT, {
                    count: t,
                    expectedCount: e
                })
            }
            checkNew(t, e) {
                t !== Object && null != t || this.throwError("missing new", Da.errors.MISSING_NEW, {
                    name: e.name
                })
            }
            checkAbstract(t, e) {
                t === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", Da.errors.UNSUPPORTED_OPERATION, {
                    name: t.name,
                    operation: "new"
                }) : t !== Object && null != t || this.throwError("missing new", Da.errors.MISSING_NEW, {
                    name: e.name
                })
            }
            static globalLogger() {
                return Pa || (Pa = new Da("logger/5.8.0")), Pa
            }
            static setCensorship(t, e) {
                if (!t && e && this.globalLogger().throwError("cannot permanently disable censorship", Da.errors.UNSUPPORTED_OPERATION, {
                        operation: "setCensorship"
                    }), ka) {
                    if (!t) return;
                    this.globalLogger().throwError("error censorship permanent", Da.errors.UNSUPPORTED_OPERATION, {
                        operation: "setCensorship"
                    })
                }
                Sa = !!t, ka = !!e
            }
            static setLogLevel(t) {
                const e = Na[t.toLowerCase()];
                null != e ? Oa = e : Da.globalLogger().warn("invalid log level - " + t)
            }
            static from(t) {
                return new Da(t)
            }
        }
        Da.errors = Ma, Da.levels = xa;
        const La = new Da("bytes/5.8.0");

        function Ba(t) {
            return !!t.toHexString
        }

        function Fa(t) {
            return t.slice || (t.slice = function() {
                const e = Array.prototype.slice.call(arguments);
                return Fa(new Uint8Array(Array.prototype.slice.apply(t, e)))
            }), t
        }

        function qa(t) {
            return Wa(t) && !(t.length % 2) || ja(t)
        }

        function Ga(t) {
            return "number" == typeof t && t == t && t % 1 == 0
        }

        function ja(t) {
            if (null == t) return !1;
            if (t.constructor === Uint8Array) return !0;
            if ("string" == typeof t) return !1;
            if (!Ga(t.length) || t.length < 0) return !1;
            for (let e = 0; e < t.length; e++) {
                const r = t[e];
                if (!Ga(r) || r < 0 || r >= 256) return !1
            }
            return !0
        }

        function Ha(t, e) {
            if (e || (e = {}), "number" == typeof t) {
                La.checkSafeUint53(t, "invalid arrayify value");
                const e = [];
                for (; t;) e.unshift(255 & t), t = parseInt(String(t / 256));
                return 0 === e.length && e.push(0), Fa(new Uint8Array(e))
            }
            if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), Ba(t) && (t = t.toHexString()), Wa(t)) {
                let r = t.substring(2);
                r.length % 2 && ("left" === e.hexPad ? r = "0" + r : "right" === e.hexPad ? r += "0" : La.throwArgumentError("hex data is odd-length", "value", t));
                const n = [];
                for (let t = 0; t < r.length; t += 2) n.push(parseInt(r.substring(t, t + 2), 16));
                return Fa(new Uint8Array(n))
            }
            return ja(t) ? Fa(new Uint8Array(t)) : La.throwArgumentError("invalid arrayify value", "value", t)
        }

        function za(t) {
            const e = t.map(t => Ha(t)),
                r = e.reduce((t, e) => t + e.length, 0),
                n = new Uint8Array(r);
            return e.reduce((t, e) => (n.set(e, t), t + e.length), 0), Fa(n)
        }

        function Ka(t) {
            let e = Ha(t);
            if (0 === e.length) return e;
            let r = 0;
            for (; r < e.length && 0 === e[r];) r++;
            return r && (e = e.slice(r)), e
        }

        function Va(t, e) {
            (t = Ha(t)).length > e && La.throwArgumentError("value out of range", "value", arguments[0]);
            const r = new Uint8Array(e);
            return r.set(t, e - t.length), Fa(r)
        }

        function Wa(t, e) {
            return !("string" != typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) && (!e || t.length === 2 + 2 * e)
        }
        const Ja = "0123456789abcdef";

        function Ya(t, e) {
            if (e || (e = {}), "number" == typeof t) {
                La.checkSafeUint53(t, "invalid hexlify value");
                let e = "";
                for (; t;) e = Ja[15 & t] + e, t = Math.floor(t / 16);
                return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00"
            }
            if ("bigint" == typeof t) return (t = t.toString(16)).length % 2 ? "0x0" + t : "0x" + t;
            if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), Ba(t)) return t.toHexString();
            if (Wa(t)) return t.length % 2 && ("left" === e.hexPad ? t = "0x0" + t.substring(2) : "right" === e.hexPad ? t += "0" : La.throwArgumentError("hex data is odd-length", "value", t)), t.toLowerCase();
            if (ja(t)) {
                let e = "0x";
                for (let r = 0; r < t.length; r++) {
                    let n = t[r];
                    e += Ja[(240 & n) >> 4] + Ja[15 & n]
                }
                return e
            }
            return La.throwArgumentError("invalid hexlify value", "value", t)
        }

        function Qa(t) {
            if ("string" != typeof t) t = Ya(t);
            else if (!Wa(t) || t.length % 2) return null;
            return (t.length - 2) / 2
        }

        function Xa(t, e, r) {
            return "string" != typeof t ? t = Ya(t) : (!Wa(t) || t.length % 2) && La.throwArgumentError("invalid hexData", "value", t), e = 2 + 2 * e, null != r ? "0x" + t.substring(e, 2 + 2 * r) : "0x" + t.substring(e)
        }

        function $a(t) {
            let e = "0x";
            return t.forEach(t => {
                e += Ya(t).substring(2)
            }), e
        }

        function Za(t) {
            const e = tc(Ya(t, {
                hexPad: "left"
            }));
            return "0x" === e ? "0x0" : e
        }

        function tc(t) {
            "string" != typeof t && (t = Ya(t)), Wa(t) || La.throwArgumentError("invalid hex string", "value", t), t = t.substring(2);
            let e = 0;
            for (; e < t.length && "0" === t[e];) e++;
            return "0x" + t.substring(e)
        }

        function ec(t, e) {
            for ("string" != typeof t ? t = Ya(t) : Wa(t) || La.throwArgumentError("invalid hex string", "value", t), t.length > 2 * e + 2 && La.throwArgumentError("value out of range", "value", arguments[1]); t.length < 2 * e + 2;) t = "0x0" + t.substring(2);
            return t
        }

        function rc(t) {
            const e = {
                r: "0x",
                s: "0x",
                _vs: "0x",
                recoveryParam: 0,
                v: 0,
                yParityAndS: "0x",
                compact: "0x"
            };
            if (qa(t)) {
                let r = Ha(t);
                64 === r.length ? (e.v = 27 + (r[32] >> 7), r[32] &= 127, e.r = Ya(r.slice(0, 32)), e.s = Ya(r.slice(32, 64))) : 65 === r.length ? (e.r = Ya(r.slice(0, 32)), e.s = Ya(r.slice(32, 64)), e.v = r[64]) : La.throwArgumentError("invalid signature string", "signature", t), e.v < 27 && (0 === e.v || 1 === e.v ? e.v += 27 : La.throwArgumentError("signature invalid v byte", "signature", t)), e.recoveryParam = 1 - e.v % 2, e.recoveryParam && (r[32] |= 128), e._vs = Ya(r.slice(32, 64))
            } else {
                if (e.r = t.r, e.s = t.s, e.v = t.v, e.recoveryParam = t.recoveryParam, e._vs = t._vs, null != e._vs) {
                    const r = Va(Ha(e._vs), 32);
                    e._vs = Ya(r);
                    const n = r[0] >= 128 ? 1 : 0;
                    null == e.recoveryParam ? e.recoveryParam = n : e.recoveryParam !== n && La.throwArgumentError("signature recoveryParam mismatch _vs", "signature", t), r[0] &= 127;
                    const i = Ya(r);
                    null == e.s ? e.s = i : e.s !== i && La.throwArgumentError("signature v mismatch _vs", "signature", t)
                }
                if (null == e.recoveryParam) null == e.v ? La.throwArgumentError("signature missing v and recoveryParam", "signature", t) : 0 === e.v || 1 === e.v ? e.recoveryParam = e.v : e.recoveryParam = 1 - e.v % 2;
                else if (null == e.v) e.v = 27 + e.recoveryParam;
                else {
                    const r = 0 === e.v || 1 === e.v ? e.v : 1 - e.v % 2;
                    e.recoveryParam !== r && La.throwArgumentError("signature recoveryParam mismatch v", "signature", t)
                }
                null != e.r && Wa(e.r) ? e.r = ec(e.r, 32) : La.throwArgumentError("signature missing or invalid r", "signature", t), null != e.s && Wa(e.s) ? e.s = ec(e.s, 32) : La.throwArgumentError("signature missing or invalid s", "signature", t);
                const r = Ha(e.s);
                r[0] >= 128 && La.throwArgumentError("signature s out of range", "signature", t), e.recoveryParam && (r[0] |= 128);
                const n = Ya(r);
                e._vs && (Wa(e._vs) || La.throwArgumentError("signature invalid _vs", "signature", t), e._vs = ec(e._vs, 32)), null == e._vs ? e._vs = n : e._vs !== n && La.throwArgumentError("signature _vs mismatch v and s", "signature", t)
            }
            return e.yParityAndS = e._vs, e.compact = e.r + e.yParityAndS.substring(2), e
        }
        var nc = Object.freeze({
            __proto__: null,
            arrayify: Ha,
            concat: za,
            hexConcat: $a,
            hexDataLength: Qa,
            hexDataSlice: Xa,
            hexStripZeros: tc,
            hexValue: Za,
            hexZeroPad: ec,
            hexlify: Ya,
            isBytes: ja,
            isBytesLike: qa,
            isHexString: Wa,
            splitSignature: rc,
            stripZeros: Ka,
            zeroPad: Va
        });

        function ic(t) {
            return "0x" + Ia.keccak_256(Ha(t))
        }
        var sc, oc = {
                exports: {}
            },
            ac = Xr(Object.freeze({
                __proto__: null,
                default: {}
            })),
            cc = oc.exports;
        var uc = (sc || (sc = 1, function(t) {
                ! function(t, e) {
                    function r(t, e) {
                        if (!t) throw new Error(e || "Assertion failed")
                    }

                    function n(t, e) {
                        t.super_ = e;
                        var r = function() {};
                        r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                    }

                    function i(t, e, r) {
                        if (i.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== e && "be" !== e || (r = e, e = 10), this._init(t || 0, e || 10, r || "be"))
                    }
                    var s;
                    "object" == typeof t ? t.exports = i : e.BN = i, i.BN = i, i.wordSize = 26;
                    try {
                        s = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : ac.Buffer
                    } catch (t) {}

                    function o(t, e) {
                        var n = t.charCodeAt(e);
                        return n >= 48 && n <= 57 ? n - 48 : n >= 65 && n <= 70 ? n - 55 : n >= 97 && n <= 102 ? n - 87 : void r(!1, "Invalid character in " + t)
                    }

                    function a(t, e, r) {
                        var n = o(t, r);
                        return r - 1 >= e && (n |= o(t, r - 1) << 4), n
                    }

                    function c(t, e, n, i) {
                        for (var s = 0, o = 0, a = Math.min(t.length, n), c = e; c < a; c++) {
                            var u = t.charCodeAt(c) - 48;
                            s *= i, o = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u, r(u >= 0 && o < i, "Invalid character"), s += o
                        }
                        return s
                    }

                    function u(t, e) {
                        t.words = e.words, t.length = e.length, t.negative = e.negative, t.red = e.red
                    }
                    if (i.isBN = function(t) {
                            return t instanceof i || null !== t && "object" == typeof t && t.constructor.wordSize === i.wordSize && Array.isArray(t.words)
                        }, i.max = function(t, e) {
                            return t.cmp(e) > 0 ? t : e
                        }, i.min = function(t, e) {
                            return t.cmp(e) < 0 ? t : e
                        }, i.prototype._init = function(t, e, n) {
                            if ("number" == typeof t) return this._initNumber(t, e, n);
                            if ("object" == typeof t) return this._initArray(t, e, n);
                            "hex" === e && (e = 16), r(e === (0 | e) && e >= 2 && e <= 36);
                            var i = 0;
                            "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (i++, this.negative = 1), i < t.length && (16 === e ? this._parseHex(t, i, n) : (this._parseBase(t, e, i), "le" === n && this._initArray(this.toArray(), e, n)))
                        }, i.prototype._initNumber = function(t, e, n) {
                            t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (r(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === n && this._initArray(this.toArray(), e, n)
                        }, i.prototype._initArray = function(t, e, n) {
                            if (r("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                            this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                            for (var i = 0; i < this.length; i++) this.words[i] = 0;
                            var s, o, a = 0;
                            if ("be" === n)
                                for (i = t.length - 1, s = 0; i >= 0; i -= 3) o = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[s] |= o << a & 67108863, this.words[s + 1] = o >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, s++);
                            else if ("le" === n)
                                for (i = 0, s = 0; i < t.length; i += 3) o = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[s] |= o << a & 67108863, this.words[s + 1] = o >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, s++);
                            return this._strip()
                        }, i.prototype._parseHex = function(t, e, r) {
                            this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
                            for (var n = 0; n < this.length; n++) this.words[n] = 0;
                            var i, s = 0,
                                o = 0;
                            if ("be" === r)
                                for (n = t.length - 1; n >= e; n -= 2) i = a(t, e, n) << s, this.words[o] |= 67108863 & i, s >= 18 ? (s -= 18, o += 1, this.words[o] |= i >>> 26) : s += 8;
                            else
                                for (n = (t.length - e) % 2 == 0 ? e + 1 : e; n < t.length; n += 2) i = a(t, e, n) << s, this.words[o] |= 67108863 & i, s >= 18 ? (s -= 18, o += 1, this.words[o] |= i >>> 26) : s += 8;
                            this._strip()
                        }, i.prototype._parseBase = function(t, e, r) {
                            this.words = [0], this.length = 1;
                            for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
                            n--, i = i / e | 0;
                            for (var s = t.length - r, o = s % n, a = Math.min(s, s - o) + r, u = 0, h = r; h < a; h += n) u = c(t, h, h + n, e), this.imuln(i), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
                            if (0 !== o) {
                                var l = 1;
                                for (u = c(t, h, t.length, e), h = 0; h < o; h++) l *= e;
                                this.imuln(l), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u)
                            }
                            this._strip()
                        }, i.prototype.copy = function(t) {
                            t.words = new Array(this.length);
                            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                            t.length = this.length, t.negative = this.negative, t.red = this.red
                        }, i.prototype._move = function(t) {
                            u(t, this)
                        }, i.prototype.clone = function() {
                            var t = new i(null);
                            return this.copy(t), t
                        }, i.prototype._expand = function(t) {
                            for (; this.length < t;) this.words[this.length++] = 0;
                            return this
                        }, i.prototype._strip = function() {
                            for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                            return this._normSign()
                        }, i.prototype._normSign = function() {
                            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                        }, "undefined" != typeof Symbol && "function" == typeof Symbol.for) try {
                        i.prototype[Symbol.for("nodejs.util.inspect.custom")] = h
                    } catch (t) {
                        i.prototype.inspect = h
                    } else i.prototype.inspect = h;

                    function h() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    }
                    var l = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        d = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        f = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                    function p(t, e, r) {
                        r.negative = e.negative ^ t.negative;
                        var n = t.length + e.length | 0;
                        r.length = n, n = n - 1 | 0;
                        var i = 0 | t.words[0],
                            s = 0 | e.words[0],
                            o = i * s,
                            a = 67108863 & o,
                            c = o / 67108864 | 0;
                        r.words[0] = a;
                        for (var u = 1; u < n; u++) {
                            for (var h = c >>> 26, l = 67108863 & c, d = Math.min(u, e.length - 1), f = Math.max(0, u - t.length + 1); f <= d; f++) {
                                var p = u - f | 0;
                                h += (o = (i = 0 | t.words[p]) * (s = 0 | e.words[f]) + l) / 67108864 | 0, l = 67108863 & o
                            }
                            r.words[u] = 0 | l, c = 0 | h
                        }
                        return 0 !== c ? r.words[u] = 0 | c : r.length--, r._strip()
                    }
                    i.prototype.toString = function(t, e) {
                        var n;
                        if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                            n = "";
                            for (var i = 0, s = 0, o = 0; o < this.length; o++) {
                                var a = this.words[o],
                                    c = (16777215 & (a << i | s)).toString(16);
                                s = a >>> 24 - i & 16777215, (i += 2) >= 26 && (i -= 26, o--), n = 0 !== s || o !== this.length - 1 ? l[6 - c.length] + c + n : c + n
                            }
                            for (0 !== s && (n = s.toString(16) + n); n.length % e !== 0;) n = "0" + n;
                            return 0 !== this.negative && (n = "-" + n), n
                        }
                        if (t === (0 | t) && t >= 2 && t <= 36) {
                            var u = d[t],
                                h = f[t];
                            n = "";
                            var p = this.clone();
                            for (p.negative = 0; !p.isZero();) {
                                var m = p.modrn(h).toString(t);
                                n = (p = p.idivn(h)).isZero() ? m + n : l[u - m.length] + m + n
                            }
                            for (this.isZero() && (n = "0" + n); n.length % e !== 0;) n = "0" + n;
                            return 0 !== this.negative && (n = "-" + n), n
                        }
                        r(!1, "Base should be between 2 and 36")
                    }, i.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, i.prototype.toJSON = function() {
                        return this.toString(16, 2)
                    }, s && (i.prototype.toBuffer = function(t, e) {
                        return this.toArrayLike(s, t, e)
                    }), i.prototype.toArray = function(t, e) {
                        return this.toArrayLike(Array, t, e)
                    }, i.prototype.toArrayLike = function(t, e, n) {
                        this._strip();
                        var i = this.byteLength(),
                            s = n || Math.max(1, i);
                        r(i <= s, "byte array longer than desired length"), r(s > 0, "Requested array length <= 0");
                        var o = function(t, e) {
                            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e)
                        }(t, s);
                        return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](o, i), o
                    }, i.prototype._toArrayLikeLE = function(t, e) {
                        for (var r = 0, n = 0, i = 0, s = 0; i < this.length; i++) {
                            var o = this.words[i] << s | n;
                            t[r++] = 255 & o, r < t.length && (t[r++] = o >> 8 & 255), r < t.length && (t[r++] = o >> 16 & 255), 6 === s ? (r < t.length && (t[r++] = o >> 24 & 255), n = 0, s = 0) : (n = o >>> 24, s += 2)
                        }
                        if (r < t.length)
                            for (t[r++] = n; r < t.length;) t[r++] = 0
                    }, i.prototype._toArrayLikeBE = function(t, e) {
                        for (var r = t.length - 1, n = 0, i = 0, s = 0; i < this.length; i++) {
                            var o = this.words[i] << s | n;
                            t[r--] = 255 & o, r >= 0 && (t[r--] = o >> 8 & 255), r >= 0 && (t[r--] = o >> 16 & 255), 6 === s ? (r >= 0 && (t[r--] = o >> 24 & 255), n = 0, s = 0) : (n = o >>> 24, s += 2)
                        }
                        if (r >= 0)
                            for (t[r--] = n; r >= 0;) t[r--] = 0
                    }, Math.clz32 ? i.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    } : i.prototype._countBits = function(t) {
                        var e = t,
                            r = 0;
                        return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, e >>>= 2), r + e
                    }, i.prototype._zeroBits = function(t) {
                        if (0 === t) return 26;
                        var e = t,
                            r = 0;
                        return 8191 & e || (r += 13, e >>>= 13), 127 & e || (r += 7, e >>>= 7), 15 & e || (r += 4, e >>>= 4), 3 & e || (r += 2, e >>>= 2), 1 & e || r++, r
                    }, i.prototype.bitLength = function() {
                        var t = this.words[this.length - 1],
                            e = this._countBits(t);
                        return 26 * (this.length - 1) + e
                    }, i.prototype.zeroBits = function() {
                        if (this.isZero()) return 0;
                        for (var t = 0, e = 0; e < this.length; e++) {
                            var r = this._zeroBits(this.words[e]);
                            if (t += r, 26 !== r) break
                        }
                        return t
                    }, i.prototype.byteLength = function() {
                        return Math.ceil(this.bitLength() / 8)
                    }, i.prototype.toTwos = function(t) {
                        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                    }, i.prototype.fromTwos = function(t) {
                        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                    }, i.prototype.isNeg = function() {
                        return 0 !== this.negative
                    }, i.prototype.neg = function() {
                        return this.clone().ineg()
                    }, i.prototype.ineg = function() {
                        return this.isZero() || (this.negative ^= 1), this
                    }, i.prototype.iuor = function(t) {
                        for (; this.length < t.length;) this.words[this.length++] = 0;
                        for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                        return this._strip()
                    }, i.prototype.ior = function(t) {
                        return r(0 === (this.negative | t.negative)), this.iuor(t)
                    }, i.prototype.or = function(t) {
                        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                    }, i.prototype.uor = function(t) {
                        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                    }, i.prototype.iuand = function(t) {
                        var e;
                        e = this.length > t.length ? t : this;
                        for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
                        return this.length = e.length, this._strip()
                    }, i.prototype.iand = function(t) {
                        return r(0 === (this.negative | t.negative)), this.iuand(t)
                    }, i.prototype.and = function(t) {
                        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                    }, i.prototype.uand = function(t) {
                        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                    }, i.prototype.iuxor = function(t) {
                        var e, r;
                        this.length > t.length ? (e = this, r = t) : (e = t, r = this);
                        for (var n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n];
                        if (this !== e)
                            for (; n < e.length; n++) this.words[n] = e.words[n];
                        return this.length = e.length, this._strip()
                    }, i.prototype.ixor = function(t) {
                        return r(0 === (this.negative | t.negative)), this.iuxor(t)
                    }, i.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, i.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, i.prototype.inotn = function(t) {
                        r("number" == typeof t && t >= 0);
                        var e = 0 | Math.ceil(t / 26),
                            n = t % 26;
                        this._expand(e), n > 0 && e--;
                        for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
                        return n > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - n), this._strip()
                    }, i.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, i.prototype.setn = function(t, e) {
                        r("number" == typeof t && t >= 0);
                        var n = t / 26 | 0,
                            i = t % 26;
                        return this._expand(n + 1), this.words[n] = e ? this.words[n] | 1 << i : this.words[n] & ~(1 << i), this._strip()
                    }, i.prototype.iadd = function(t) {
                        var e, r, n;
                        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                        this.length > t.length ? (r = this, n = t) : (r = t, n = this);
                        for (var i = 0, s = 0; s < n.length; s++) e = (0 | r.words[s]) + (0 | n.words[s]) + i, this.words[s] = 67108863 & e, i = e >>> 26;
                        for (; 0 !== i && s < r.length; s++) e = (0 | r.words[s]) + i, this.words[s] = 67108863 & e, i = e >>> 26;
                        if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;
                        else if (r !== this)
                            for (; s < r.length; s++) this.words[s] = r.words[s];
                        return this
                    }, i.prototype.add = function(t) {
                        var e;
                        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                    }, i.prototype.isub = function(t) {
                        if (0 !== t.negative) {
                            t.negative = 0;
                            var e = this.iadd(t);
                            return t.negative = 1, e._normSign()
                        }
                        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                        var r, n, i = this.cmp(t);
                        if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        i > 0 ? (r = this, n = t) : (r = t, n = this);
                        for (var s = 0, o = 0; o < n.length; o++) s = (e = (0 | r.words[o]) - (0 | n.words[o]) + s) >> 26, this.words[o] = 67108863 & e;
                        for (; 0 !== s && o < r.length; o++) s = (e = (0 | r.words[o]) + s) >> 26, this.words[o] = 67108863 & e;
                        if (0 === s && o < r.length && r !== this)
                            for (; o < r.length; o++) this.words[o] = r.words[o];
                        return this.length = Math.max(this.length, o), r !== this && (this.negative = 1), this._strip()
                    }, i.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var m = function(t, e, r) {
                        var n, i, s, o = t.words,
                            a = e.words,
                            c = r.words,
                            u = 0,
                            h = 0 | o[0],
                            l = 8191 & h,
                            d = h >>> 13,
                            f = 0 | o[1],
                            p = 8191 & f,
                            m = f >>> 13,
                            g = 0 | o[2],
                            y = 8191 & g,
                            w = g >>> 13,
                            v = 0 | o[3],
                            A = 8191 & v,
                            b = v >>> 13,
                            E = 0 | o[4],
                            _ = 8191 & E,
                            R = E >>> 13,
                            T = 0 | o[5],
                            I = 8191 & T,
                            k = T >>> 13,
                            S = 0 | o[6],
                            N = 8191 & S,
                            O = S >>> 13,
                            P = 0 | o[7],
                            C = 8191 & P,
                            x = P >>> 13,
                            M = 0 | o[8],
                            U = 8191 & M,
                            D = M >>> 13,
                            L = 0 | o[9],
                            B = 8191 & L,
                            F = L >>> 13,
                            q = 0 | a[0],
                            G = 8191 & q,
                            j = q >>> 13,
                            H = 0 | a[1],
                            z = 8191 & H,
                            K = H >>> 13,
                            V = 0 | a[2],
                            W = 8191 & V,
                            J = V >>> 13,
                            Y = 0 | a[3],
                            Q = 8191 & Y,
                            X = Y >>> 13,
                            $ = 0 | a[4],
                            Z = 8191 & $,
                            tt = $ >>> 13,
                            et = 0 | a[5],
                            rt = 8191 & et,
                            nt = et >>> 13,
                            it = 0 | a[6],
                            st = 8191 & it,
                            ot = it >>> 13,
                            at = 0 | a[7],
                            ct = 8191 & at,
                            ut = at >>> 13,
                            ht = 0 | a[8],
                            lt = 8191 & ht,
                            dt = ht >>> 13,
                            ft = 0 | a[9],
                            pt = 8191 & ft,
                            mt = ft >>> 13;
                        r.negative = t.negative ^ e.negative, r.length = 19;
                        var gt = (u + (n = Math.imul(l, G)) | 0) + ((8191 & (i = (i = Math.imul(l, j)) + Math.imul(d, G) | 0)) << 13) | 0;
                        u = ((s = Math.imul(d, j)) + (i >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, n = Math.imul(p, G), i = (i = Math.imul(p, j)) + Math.imul(m, G) | 0, s = Math.imul(m, j);
                        var yt = (u + (n = n + Math.imul(l, z) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, K) | 0) + Math.imul(d, z) | 0)) << 13) | 0;
                        u = ((s = s + Math.imul(d, K) | 0) + (i >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, n = Math.imul(y, G), i = (i = Math.imul(y, j)) + Math.imul(w, G) | 0, s = Math.imul(w, j), n = n + Math.imul(p, z) | 0, i = (i = i + Math.imul(p, K) | 0) + Math.imul(m, z) | 0, s = s + Math.imul(m, K) | 0;
                        var wt = (u + (n = n + Math.imul(l, W) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, J) | 0) + Math.imul(d, W) | 0)) << 13) | 0;
                        u = ((s = s + Math.imul(d, J) | 0) + (i >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, n = Math.imul(A, G), i = (i = Math.imul(A, j)) + Math.imul(b, G) | 0, s = Math.imul(b, j), n = n + Math.imul(y, z) | 0, i = (i = i + Math.imul(y, K) | 0) + Math.imul(w, z) | 0, s = s + Math.imul(w, K) | 0, n = n + Math.imul(p, W) | 0, i = (i = i + Math.imul(p, J) | 0) + Math.imul(m, W) | 0, s = s + Math.imul(m, J) | 0;
                        var vt = (u + (n = n + Math.imul(l, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, X) | 0) + Math.imul(d, Q) | 0)) << 13) | 0;
                        u = ((s = s + Math.imul(d, X) | 0) + (i >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, n = Math.imul(_, G), i = (i = Math.imul(_, j)) + Math.imul(R, G) | 0, s = Math.imul(R, j), n = n + Math.imul(A, z) | 0, i = (i = i + Math.imul(A, K) | 0) + Math.imul(b, z) | 0, s = s + Math.imul(b, K) | 0, n = n + Math.imul(y, W) | 0, i = (i = i + Math.imul(y, J) | 0) + Math.imul(w, W) | 0, s = s + Math.imul(w, J) | 0, n = n + Math.imul(p, Q) | 0, i = (i = i + Math.imul(p, X) | 0) + Math.imul(m, Q) | 0, s = s + Math.imul(m, X) | 0;
                        var At = (u + (n = n + Math.imul(l, Z) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, tt) | 0) + Math.imul(d, Z) | 0)) << 13) | 0;
                        u = ((s = s + Math.imul(d, tt) | 0) + (i >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n = Math.imul(I, G), i = (i = Math.imul(I, j)) + Math.imul(k, G) | 0, s = Math.imul(k, j), n = n + Math.imul(_, z) | 0, i = (i = i + Math.imul(_, K) | 0) + Math.imul(R, z) | 0, s = s + Math.imul(R, K) | 0, n = n + Math.imul(A, W) | 0, i = (i = i + Math.imul(A, J) | 0) + Math.imul(b, W) | 0, s = s + Math.imul(b, J) | 0, n = n + Math.imul(y, Q) | 0, i = (i = i + Math.imul(y, X) | 0) + Math.imul(w, Q) | 0, s = s + Math.imul(w, X) | 0, n = n + Math.imul(p, Z) | 0, i = (i = i + Math.imul(p, tt) | 0) + Math.imul(m, Z) | 0, s = s + Math.imul(m, tt) | 0;
                        var bt = (u + (n = n + Math.imul(l, rt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, nt) | 0) + Math.imul(d, rt) | 0)) << 13) | 0;
                        u = ((s = s + Math.imul(d, nt) | 0) + (i >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, n = Math.imul(N, G), i = (i = Math.imul(N, j)) + Math.imul(O, G) | 0, s = Math.imul(O, j), n = n + Math.imul(I, z) | 0, i = (i = i + Math.imul(I, K) | 0) + Math.imul(k, z) | 0, s = s + Math.imul(k, K) | 0, n = n + Math.imul(_, W) | 0, i = (i = i + Math.imul(_, J) | 0) + Math.imul(R, W) | 0, s = s + Math.imul(R, J) | 0, n = n + Math.imul(A, Q) | 0, i = (i = i + Math.imul(A, X) | 0) + Math.imul(b, Q) | 0, s = s + Math.imul(b, X) | 0, n = n + Math.imul(y, Z) | 0, i = (i = i + Math.imul(y, tt) | 0) + Math.imul(w, Z) | 0, s = s + Math.imul(w, tt) | 0, n = n + Math.imul(p, rt) | 0, i = (i = i + Math.imul(p, nt) | 0) + Math.imul(m, rt) | 0, s = s + Math.imul(m, nt) | 0;
                        var Et = (u + (n = n + Math.imul(l, st) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, ot) | 0) + Math.imul(d, st) | 0)) << 13) | 0;
                        u = ((s = s + Math.imul(d, ot) | 0) + (i >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n = Math.imul(C, G), i = (i = Math.imul(C, j)) + Math.imul(x, G) | 0, s = Math.imul(x, j), n = n + Math.imul(N, z) | 0, i = (i = i + Math.imul(N, K) | 0) + Math.imul(O, z) | 0, s = s + Math.imul(O, K) | 0, n = n + Math.imul(I, W) | 0, i = (i = i + Math.imul(I, J) | 0) + Math.imul(k, W) | 0, s = s + Math.imul(k, J) | 0, n = n + Math.imul(_, Q) | 0, i = (i = i + Math.imul(_, X) | 0) + Math.imul(R, Q) | 0, s = s + Math.imul(R, X) | 0, n = n + Math.imul(A, Z) | 0, i = (i = i + Math.imul(A, tt) | 0) + Math.imul(b, Z) | 0, s = s + Math.imul(b, tt) | 0, n = n + Math.imul(y, rt) | 0, i = (i = i + Math.imul(y, nt) | 0) + Math.imul(w, rt) | 0, s = s + Math.imul(w, nt) | 0, n = n + Math.imul(p, st) | 0, i = (i = i + Math.imul(p, ot) | 0) + Math.imul(m, st) | 0, s = s + Math.imul(m, ot) | 0;
                        var _t = (u + (n = n + Math.imul(l, ct) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, ut) | 0) + Math.imul(d, ct) | 0)) << 13) | 0;
                        u = ((s = s + Math.imul(d, ut) | 0) + (i >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, n = Math.imul(U, G), i = (i = Math.imul(U, j)) + Math.imul(D, G) | 0, s = Math.imul(D, j), n = n + Math.imul(C, z) | 0, i = (i = i + Math.imul(C, K) | 0) + Math.imul(x, z) | 0, s = s + Math.imul(x, K) | 0, n = n + Math.imul(N, W) | 0, i = (i = i + Math.imul(N, J) | 0) + Math.imul(O, W) | 0, s = s + Math.imul(O, J) | 0, n = n + Math.imul(I, Q) | 0, i = (i = i + Math.imul(I, X) | 0) + Math.imul(k, Q) | 0, s = s + Math.imul(k, X) | 0, n = n + Math.imul(_, Z) | 0, i = (i = i + Math.imul(_, tt) | 0) + Math.imul(R, Z) | 0, s = s + Math.imul(R, tt) | 0, n = n + Math.imul(A, rt) | 0, i = (i = i + Math.imul(A, nt) | 0) + Math.imul(b, rt) | 0, s = s + Math.imul(b, nt) | 0, n = n + Math.imul(y, st) | 0, i = (i = i + Math.imul(y, ot) | 0) + Math.imul(w, st) | 0, s = s + Math.imul(w, ot) | 0, n = n + Math.imul(p, ct) | 0, i = (i = i + Math.imul(p, ut) | 0) + Math.imul(m, ct) | 0, s = s + Math.imul(m, ut) | 0;
                        var Rt = (u + (n = n + Math.imul(l, lt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, dt) | 0) + Math.imul(d, lt) | 0)) << 13) | 0;
                        u = ((s = s + Math.imul(d, dt) | 0) + (i >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n = Math.imul(B, G), i = (i = Math.imul(B, j)) + Math.imul(F, G) | 0, s = Math.imul(F, j), n = n + Math.imul(U, z) | 0, i = (i = i + Math.imul(U, K) | 0) + Math.imul(D, z) | 0, s = s + Math.imul(D, K) | 0, n = n + Math.imul(C, W) | 0, i = (i = i + Math.imul(C, J) | 0) + Math.imul(x, W) | 0, s = s + Math.imul(x, J) | 0, n = n + Math.imul(N, Q) | 0, i = (i = i + Math.imul(N, X) | 0) + Math.imul(O, Q) | 0, s = s + Math.imul(O, X) | 0, n = n + Math.imul(I, Z) | 0, i = (i = i + Math.imul(I, tt) | 0) + Math.imul(k, Z) | 0, s = s + Math.imul(k, tt) | 0, n = n + Math.imul(_, rt) | 0, i = (i = i + Math.imul(_, nt) | 0) + Math.imul(R, rt) | 0, s = s + Math.imul(R, nt) | 0, n = n + Math.imul(A, st) | 0, i = (i = i + Math.imul(A, ot) | 0) + Math.imul(b, st) | 0, s = s + Math.imul(b, ot) | 0, n = n + Math.imul(y, ct) | 0, i = (i = i + Math.imul(y, ut) | 0) + Math.imul(w, ct) | 0, s = s + Math.imul(w, ut) | 0, n = n + Math.imul(p, lt) | 0, i = (i = i + Math.imul(p, dt) | 0) + Math.imul(m, lt) | 0, s = s + Math.imul(m, dt) | 0;
                        var Tt = (u + (n = n + Math.imul(l, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, mt) | 0) + Math.imul(d, pt) | 0)) << 13) | 0;
                        u = ((s = s + Math.imul(d, mt) | 0) + (i >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, n = Math.imul(B, z), i = (i = Math.imul(B, K)) + Math.imul(F, z) | 0, s = Math.imul(F, K), n = n + Math.imul(U, W) | 0, i = (i = i + Math.imul(U, J) | 0) + Math.imul(D, W) | 0, s = s + Math.imul(D, J) | 0, n = n + Math.imul(C, Q) | 0, i = (i = i + Math.imul(C, X) | 0) + Math.imul(x, Q) | 0, s = s + Math.imul(x, X) | 0, n = n + Math.imul(N, Z) | 0, i = (i = i + Math.imul(N, tt) | 0) + Math.imul(O, Z) | 0, s = s + Math.imul(O, tt) | 0, n = n + Math.imul(I, rt) | 0, i = (i = i + Math.imul(I, nt) | 0) + Math.imul(k, rt) | 0, s = s + Math.imul(k, nt) | 0, n = n + Math.imul(_, st) | 0, i = (i = i + Math.imul(_, ot) | 0) + Math.imul(R, st) | 0, s = s + Math.imul(R, ot) | 0, n = n + Math.imul(A, ct) | 0, i = (i = i + Math.imul(A, ut) | 0) + Math.imul(b, ct) | 0, s = s + Math.imul(b, ut) | 0, n = n + Math.imul(y, lt) | 0, i = (i = i + Math.imul(y, dt) | 0) + Math.imul(w, lt) | 0, s = s + Math.imul(w, dt) | 0;
                        var It = (u + (n = n + Math.imul(p, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, mt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
                        u = ((s = s + Math.imul(m, mt) | 0) + (i >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, n = Math.imul(B, W), i = (i = Math.imul(B, J)) + Math.imul(F, W) | 0, s = Math.imul(F, J), n = n + Math.imul(U, Q) | 0, i = (i = i + Math.imul(U, X) | 0) + Math.imul(D, Q) | 0, s = s + Math.imul(D, X) | 0, n = n + Math.imul(C, Z) | 0, i = (i = i + Math.imul(C, tt) | 0) + Math.imul(x, Z) | 0, s = s + Math.imul(x, tt) | 0, n = n + Math.imul(N, rt) | 0, i = (i = i + Math.imul(N, nt) | 0) + Math.imul(O, rt) | 0, s = s + Math.imul(O, nt) | 0, n = n + Math.imul(I, st) | 0, i = (i = i + Math.imul(I, ot) | 0) + Math.imul(k, st) | 0, s = s + Math.imul(k, ot) | 0, n = n + Math.imul(_, ct) | 0, i = (i = i + Math.imul(_, ut) | 0) + Math.imul(R, ct) | 0, s = s + Math.imul(R, ut) | 0, n = n + Math.imul(A, lt) | 0, i = (i = i + Math.imul(A, dt) | 0) + Math.imul(b, lt) | 0, s = s + Math.imul(b, dt) | 0;
                        var kt = (u + (n = n + Math.imul(y, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(y, mt) | 0) + Math.imul(w, pt) | 0)) << 13) | 0;
                        u = ((s = s + Math.imul(w, mt) | 0) + (i >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, n = Math.imul(B, Q), i = (i = Math.imul(B, X)) + Math.imul(F, Q) | 0, s = Math.imul(F, X), n = n + Math.imul(U, Z) | 0, i = (i = i + Math.imul(U, tt) | 0) + Math.imul(D, Z) | 0, s = s + Math.imul(D, tt) | 0, n = n + Math.imul(C, rt) | 0, i = (i = i + Math.imul(C, nt) | 0) + Math.imul(x, rt) | 0, s = s + Math.imul(x, nt) | 0, n = n + Math.imul(N, st) | 0, i = (i = i + Math.imul(N, ot) | 0) + Math.imul(O, st) | 0, s = s + Math.imul(O, ot) | 0, n = n + Math.imul(I, ct) | 0, i = (i = i + Math.imul(I, ut) | 0) + Math.imul(k, ct) | 0, s = s + Math.imul(k, ut) | 0, n = n + Math.imul(_, lt) | 0, i = (i = i + Math.imul(_, dt) | 0) + Math.imul(R, lt) | 0, s = s + Math.imul(R, dt) | 0;
                        var St = (u + (n = n + Math.imul(A, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(A, mt) | 0) + Math.imul(b, pt) | 0)) << 13) | 0;
                        u = ((s = s + Math.imul(b, mt) | 0) + (i >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n = Math.imul(B, Z), i = (i = Math.imul(B, tt)) + Math.imul(F, Z) | 0, s = Math.imul(F, tt), n = n + Math.imul(U, rt) | 0, i = (i = i + Math.imul(U, nt) | 0) + Math.imul(D, rt) | 0, s = s + Math.imul(D, nt) | 0, n = n + Math.imul(C, st) | 0, i = (i = i + Math.imul(C, ot) | 0) + Math.imul(x, st) | 0, s = s + Math.imul(x, ot) | 0, n = n + Math.imul(N, ct) | 0, i = (i = i + Math.imul(N, ut) | 0) + Math.imul(O, ct) | 0, s = s + Math.imul(O, ut) | 0, n = n + Math.imul(I, lt) | 0, i = (i = i + Math.imul(I, dt) | 0) + Math.imul(k, lt) | 0, s = s + Math.imul(k, dt) | 0;
                        var Nt = (u + (n = n + Math.imul(_, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(_, mt) | 0) + Math.imul(R, pt) | 0)) << 13) | 0;
                        u = ((s = s + Math.imul(R, mt) | 0) + (i >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, n = Math.imul(B, rt), i = (i = Math.imul(B, nt)) + Math.imul(F, rt) | 0, s = Math.imul(F, nt), n = n + Math.imul(U, st) | 0, i = (i = i + Math.imul(U, ot) | 0) + Math.imul(D, st) | 0, s = s + Math.imul(D, ot) | 0, n = n + Math.imul(C, ct) | 0, i = (i = i + Math.imul(C, ut) | 0) + Math.imul(x, ct) | 0, s = s + Math.imul(x, ut) | 0, n = n + Math.imul(N, lt) | 0, i = (i = i + Math.imul(N, dt) | 0) + Math.imul(O, lt) | 0, s = s + Math.imul(O, dt) | 0;
                        var Ot = (u + (n = n + Math.imul(I, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(I, mt) | 0) + Math.imul(k, pt) | 0)) << 13) | 0;
                        u = ((s = s + Math.imul(k, mt) | 0) + (i >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, n = Math.imul(B, st), i = (i = Math.imul(B, ot)) + Math.imul(F, st) | 0, s = Math.imul(F, ot), n = n + Math.imul(U, ct) | 0, i = (i = i + Math.imul(U, ut) | 0) + Math.imul(D, ct) | 0, s = s + Math.imul(D, ut) | 0, n = n + Math.imul(C, lt) | 0, i = (i = i + Math.imul(C, dt) | 0) + Math.imul(x, lt) | 0, s = s + Math.imul(x, dt) | 0;
                        var Pt = (u + (n = n + Math.imul(N, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(N, mt) | 0) + Math.imul(O, pt) | 0)) << 13) | 0;
                        u = ((s = s + Math.imul(O, mt) | 0) + (i >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, n = Math.imul(B, ct), i = (i = Math.imul(B, ut)) + Math.imul(F, ct) | 0, s = Math.imul(F, ut), n = n + Math.imul(U, lt) | 0, i = (i = i + Math.imul(U, dt) | 0) + Math.imul(D, lt) | 0, s = s + Math.imul(D, dt) | 0;
                        var Ct = (u + (n = n + Math.imul(C, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(C, mt) | 0) + Math.imul(x, pt) | 0)) << 13) | 0;
                        u = ((s = s + Math.imul(x, mt) | 0) + (i >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, n = Math.imul(B, lt), i = (i = Math.imul(B, dt)) + Math.imul(F, lt) | 0, s = Math.imul(F, dt);
                        var xt = (u + (n = n + Math.imul(U, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(U, mt) | 0) + Math.imul(D, pt) | 0)) << 13) | 0;
                        u = ((s = s + Math.imul(D, mt) | 0) + (i >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863;
                        var Mt = (u + (n = Math.imul(B, pt)) | 0) + ((8191 & (i = (i = Math.imul(B, mt)) + Math.imul(F, pt) | 0)) << 13) | 0;
                        return u = ((s = Math.imul(F, mt)) + (i >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, c[0] = gt, c[1] = yt, c[2] = wt, c[3] = vt, c[4] = At, c[5] = bt, c[6] = Et, c[7] = _t, c[8] = Rt, c[9] = Tt, c[10] = It, c[11] = kt, c[12] = St, c[13] = Nt, c[14] = Ot, c[15] = Pt, c[16] = Ct, c[17] = xt, c[18] = Mt, 0 !== u && (c[19] = u, r.length++), r
                    };

                    function g(t, e, r) {
                        r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
                        for (var n = 0, i = 0, s = 0; s < r.length - 1; s++) {
                            var o = i;
                            i = 0;
                            for (var a = 67108863 & n, c = Math.min(s, e.length - 1), u = Math.max(0, s - t.length + 1); u <= c; u++) {
                                var h = s - u,
                                    l = (0 | t.words[h]) * (0 | e.words[u]),
                                    d = 67108863 & l;
                                a = 67108863 & (d = d + a | 0), i += (o = (o = o + (l / 67108864 | 0) | 0) + (d >>> 26) | 0) >>> 26, o &= 67108863
                            }
                            r.words[s] = a, n = o, o = i
                        }
                        return 0 !== n ? r.words[s] = n : r.length--, r._strip()
                    }

                    function y(t, e, r) {
                        return g(t, e, r)
                    }
                    Math.imul || (m = p), i.prototype.mulTo = function(t, e) {
                        var r = this.length + t.length;
                        return 10 === this.length && 10 === t.length ? m(this, t, e) : r < 63 ? p(this, t, e) : r < 1024 ? g(this, t, e) : y(this, t, e)
                    }, i.prototype.mul = function(t) {
                        var e = new i(null);
                        return e.words = new Array(this.length + t.length), this.mulTo(t, e)
                    }, i.prototype.mulf = function(t) {
                        var e = new i(null);
                        return e.words = new Array(this.length + t.length), y(this, t, e)
                    }, i.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, i.prototype.imuln = function(t) {
                        var e = t < 0;
                        e && (t = -t), r("number" == typeof t), r(t < 67108864);
                        for (var n = 0, i = 0; i < this.length; i++) {
                            var s = (0 | this.words[i]) * t,
                                o = (67108863 & s) + (67108863 & n);
                            n >>= 26, n += s / 67108864 | 0, n += o >>> 26, this.words[i] = 67108863 & o
                        }
                        return 0 !== n && (this.words[i] = n, this.length++), this.length = 0 === t ? 1 : this.length, e ? this.ineg() : this
                    }, i.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, i.prototype.sqr = function() {
                        return this.mul(this)
                    }, i.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, i.prototype.pow = function(t) {
                        var e = function(t) {
                            for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                                var n = r / 26 | 0,
                                    i = r % 26;
                                e[r] = t.words[n] >>> i & 1
                            }
                            return e
                        }(t);
                        if (0 === e.length) return new i(1);
                        for (var r = this, n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr());
                        if (++n < e.length)
                            for (var s = r.sqr(); n < e.length; n++, s = s.sqr()) 0 !== e[n] && (r = r.mul(s));
                        return r
                    }, i.prototype.iushln = function(t) {
                        r("number" == typeof t && t >= 0);
                        var e, n = t % 26,
                            i = (t - n) / 26,
                            s = 67108863 >>> 26 - n << 26 - n;
                        if (0 !== n) {
                            var o = 0;
                            for (e = 0; e < this.length; e++) {
                                var a = this.words[e] & s,
                                    c = (0 | this.words[e]) - a << n;
                                this.words[e] = c | o, o = a >>> 26 - n
                            }
                            o && (this.words[e] = o, this.length++)
                        }
                        if (0 !== i) {
                            for (e = this.length - 1; e >= 0; e--) this.words[e + i] = this.words[e];
                            for (e = 0; e < i; e++) this.words[e] = 0;
                            this.length += i
                        }
                        return this._strip()
                    }, i.prototype.ishln = function(t) {
                        return r(0 === this.negative), this.iushln(t)
                    }, i.prototype.iushrn = function(t, e, n) {
                        var i;
                        r("number" == typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
                        var s = t % 26,
                            o = Math.min((t - s) / 26, this.length),
                            a = 67108863 ^ 67108863 >>> s << s,
                            c = n;
                        if (i -= o, i = Math.max(0, i), c) {
                            for (var u = 0; u < o; u++) c.words[u] = this.words[u];
                            c.length = o
                        }
                        if (0 === o);
                        else if (this.length > o)
                            for (this.length -= o, u = 0; u < this.length; u++) this.words[u] = this.words[u + o];
                        else this.words[0] = 0, this.length = 1;
                        var h = 0;
                        for (u = this.length - 1; u >= 0 && (0 !== h || u >= i); u--) {
                            var l = 0 | this.words[u];
                            this.words[u] = h << 26 - s | l >>> s, h = l & a
                        }
                        return c && 0 !== h && (c.words[c.length++] = h), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                    }, i.prototype.ishrn = function(t, e, n) {
                        return r(0 === this.negative), this.iushrn(t, e, n)
                    }, i.prototype.shln = function(t) {
                        return this.clone().ishln(t)
                    }, i.prototype.ushln = function(t) {
                        return this.clone().iushln(t)
                    }, i.prototype.shrn = function(t) {
                        return this.clone().ishrn(t)
                    }, i.prototype.ushrn = function(t) {
                        return this.clone().iushrn(t)
                    }, i.prototype.testn = function(t) {
                        r("number" == typeof t && t >= 0);
                        var e = t % 26,
                            n = (t - e) / 26,
                            i = 1 << e;
                        return !(this.length <= n || !(this.words[n] & i))
                    }, i.prototype.imaskn = function(t) {
                        r("number" == typeof t && t >= 0);
                        var e = t % 26,
                            n = (t - e) / 26;
                        if (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= n) return this;
                        if (0 !== e && n++, this.length = Math.min(n, this.length), 0 !== e) {
                            var i = 67108863 ^ 67108863 >>> e << e;
                            this.words[this.length - 1] &= i
                        }
                        return this._strip()
                    }, i.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }, i.prototype.iaddn = function(t) {
                        return r("number" == typeof t), r(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                    }, i.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                        return this.length = Math.max(this.length, e + 1), this
                    }, i.prototype.isubn = function(t) {
                        if (r("number" == typeof t), r(t < 67108864), t < 0) return this.iaddn(-t);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
                        return this._strip()
                    }, i.prototype.addn = function(t) {
                        return this.clone().iaddn(t)
                    }, i.prototype.subn = function(t) {
                        return this.clone().isubn(t)
                    }, i.prototype.iabs = function() {
                        return this.negative = 0, this
                    }, i.prototype.abs = function() {
                        return this.clone().iabs()
                    }, i.prototype._ishlnsubmul = function(t, e, n) {
                        var i, s, o = t.length + n;
                        this._expand(o);
                        var a = 0;
                        for (i = 0; i < t.length; i++) {
                            s = (0 | this.words[i + n]) + a;
                            var c = (0 | t.words[i]) * e;
                            a = ((s -= 67108863 & c) >> 26) - (c / 67108864 | 0), this.words[i + n] = 67108863 & s
                        }
                        for (; i < this.length - n; i++) a = (s = (0 | this.words[i + n]) + a) >> 26, this.words[i + n] = 67108863 & s;
                        if (0 === a) return this._strip();
                        for (r(-1 === a), a = 0, i = 0; i < this.length; i++) a = (s = -(0 | this.words[i]) + a) >> 26, this.words[i] = 67108863 & s;
                        return this.negative = 1, this._strip()
                    }, i.prototype._wordDiv = function(t, e) {
                        var r = (this.length, t.length),
                            n = this.clone(),
                            s = t,
                            o = 0 | s.words[s.length - 1];
                        0 != (r = 26 - this._countBits(o)) && (s = s.ushln(r), n.iushln(r), o = 0 | s.words[s.length - 1]);
                        var a, c = n.length - s.length;
                        if ("mod" !== e) {
                            (a = new i(null)).length = c + 1, a.words = new Array(a.length);
                            for (var u = 0; u < a.length; u++) a.words[u] = 0
                        }
                        var h = n.clone()._ishlnsubmul(s, 1, c);
                        0 === h.negative && (n = h, a && (a.words[c] = 1));
                        for (var l = c - 1; l >= 0; l--) {
                            var d = 67108864 * (0 | n.words[s.length + l]) + (0 | n.words[s.length + l - 1]);
                            for (d = Math.min(d / o | 0, 67108863), n._ishlnsubmul(s, d, l); 0 !== n.negative;) d--, n.negative = 0, n._ishlnsubmul(s, 1, l), n.isZero() || (n.negative ^= 1);
                            a && (a.words[l] = d)
                        }
                        return a && a._strip(), n._strip(), "div" !== e && 0 !== r && n.iushrn(r), {
                            div: a || null,
                            mod: n
                        }
                    }, i.prototype.divmod = function(t, e, n) {
                        return r(!t.isZero()), this.isZero() ? {
                            div: new i(0),
                            mod: new i(0)
                        } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, e), "mod" !== e && (s = a.div.neg()), "div" !== e && (o = a.mod.neg(), n && 0 !== o.negative && o.iadd(t)), {
                            div: s,
                            mod: o
                        }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), e), "mod" !== e && (s = a.div.neg()), {
                            div: s,
                            mod: a.mod
                        }) : 0 !== (this.negative & t.negative) ? (a = this.neg().divmod(t.neg(), e), "div" !== e && (o = a.mod.neg(), n && 0 !== o.negative && o.isub(t)), {
                            div: a.div,
                            mod: o
                        }) : t.length > this.length || this.cmp(t) < 0 ? {
                            div: new i(0),
                            mod: this
                        } : 1 === t.length ? "div" === e ? {
                            div: this.divn(t.words[0]),
                            mod: null
                        } : "mod" === e ? {
                            div: null,
                            mod: new i(this.modrn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new i(this.modrn(t.words[0]))
                        } : this._wordDiv(t, e);
                        var s, o, a
                    }, i.prototype.div = function(t) {
                        return this.divmod(t, "div", !1).div
                    }, i.prototype.mod = function(t) {
                        return this.divmod(t, "mod", !1).mod
                    }, i.prototype.umod = function(t) {
                        return this.divmod(t, "mod", !0).mod
                    }, i.prototype.divRound = function(t) {
                        var e = this.divmod(t);
                        if (e.mod.isZero()) return e.div;
                        var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                            n = t.ushrn(1),
                            i = t.andln(1),
                            s = r.cmp(n);
                        return s < 0 || 1 === i && 0 === s ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                    }, i.prototype.modrn = function(t) {
                        var e = t < 0;
                        e && (t = -t), r(t <= 67108863);
                        for (var n = (1 << 26) % t, i = 0, s = this.length - 1; s >= 0; s--) i = (n * i + (0 | this.words[s])) % t;
                        return e ? -i : i
                    }, i.prototype.modn = function(t) {
                        return this.modrn(t)
                    }, i.prototype.idivn = function(t) {
                        var e = t < 0;
                        e && (t = -t), r(t <= 67108863);
                        for (var n = 0, i = this.length - 1; i >= 0; i--) {
                            var s = (0 | this.words[i]) + 67108864 * n;
                            this.words[i] = s / t | 0, n = s % t
                        }
                        return this._strip(), e ? this.ineg() : this
                    }, i.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, i.prototype.egcd = function(t) {
                        r(0 === t.negative), r(!t.isZero());
                        var e = this,
                            n = t.clone();
                        e = 0 !== e.negative ? e.umod(t) : e.clone();
                        for (var s = new i(1), o = new i(0), a = new i(0), c = new i(1), u = 0; e.isEven() && n.isEven();) e.iushrn(1), n.iushrn(1), ++u;
                        for (var h = n.clone(), l = e.clone(); !e.isZero();) {
                            for (var d = 0, f = 1; 0 === (e.words[0] & f) && d < 26; ++d, f <<= 1);
                            if (d > 0)
                                for (e.iushrn(d); d-- > 0;)(s.isOdd() || o.isOdd()) && (s.iadd(h), o.isub(l)), s.iushrn(1), o.iushrn(1);
                            for (var p = 0, m = 1; 0 === (n.words[0] & m) && p < 26; ++p, m <<= 1);
                            if (p > 0)
                                for (n.iushrn(p); p-- > 0;)(a.isOdd() || c.isOdd()) && (a.iadd(h), c.isub(l)), a.iushrn(1), c.iushrn(1);
                            e.cmp(n) >= 0 ? (e.isub(n), s.isub(a), o.isub(c)) : (n.isub(e), a.isub(s), c.isub(o))
                        }
                        return {
                            a: a,
                            b: c,
                            gcd: n.iushln(u)
                        }
                    }, i.prototype._invmp = function(t) {
                        r(0 === t.negative), r(!t.isZero());
                        var e = this,
                            n = t.clone();
                        e = 0 !== e.negative ? e.umod(t) : e.clone();
                        for (var s, o = new i(1), a = new i(0), c = n.clone(); e.cmpn(1) > 0 && n.cmpn(1) > 0;) {
                            for (var u = 0, h = 1; 0 === (e.words[0] & h) && u < 26; ++u, h <<= 1);
                            if (u > 0)
                                for (e.iushrn(u); u-- > 0;) o.isOdd() && o.iadd(c), o.iushrn(1);
                            for (var l = 0, d = 1; 0 === (n.words[0] & d) && l < 26; ++l, d <<= 1);
                            if (l > 0)
                                for (n.iushrn(l); l-- > 0;) a.isOdd() && a.iadd(c), a.iushrn(1);
                            e.cmp(n) >= 0 ? (e.isub(n), o.isub(a)) : (n.isub(e), a.isub(o))
                        }
                        return (s = 0 === e.cmpn(1) ? o : a).cmpn(0) < 0 && s.iadd(t), s
                    }, i.prototype.gcd = function(t) {
                        if (this.isZero()) return t.abs();
                        if (t.isZero()) return this.abs();
                        var e = this.clone(),
                            r = t.clone();
                        e.negative = 0, r.negative = 0;
                        for (var n = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1);
                        for (;;) {
                            for (; e.isEven();) e.iushrn(1);
                            for (; r.isEven();) r.iushrn(1);
                            var i = e.cmp(r);
                            if (i < 0) {
                                var s = e;
                                e = r, r = s
                            } else if (0 === i || 0 === r.cmpn(1)) break;
                            e.isub(r)
                        }
                        return r.iushln(n)
                    }, i.prototype.invm = function(t) {
                        return this.egcd(t).a.umod(t)
                    }, i.prototype.isEven = function() {
                        return !(1 & this.words[0])
                    }, i.prototype.isOdd = function() {
                        return !(1 & ~this.words[0])
                    }, i.prototype.andln = function(t) {
                        return this.words[0] & t
                    }, i.prototype.bincn = function(t) {
                        r("number" == typeof t);
                        var e = t % 26,
                            n = (t - e) / 26,
                            i = 1 << e;
                        if (this.length <= n) return this._expand(n + 1), this.words[n] |= i, this;
                        for (var s = i, o = n; 0 !== s && o < this.length; o++) {
                            var a = 0 | this.words[o];
                            s = (a += s) >>> 26, a &= 67108863, this.words[o] = a
                        }
                        return 0 !== s && (this.words[o] = s, this.length++), this
                    }, i.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, i.prototype.cmpn = function(t) {
                        var e, n = t < 0;
                        if (0 !== this.negative && !n) return -1;
                        if (0 === this.negative && n) return 1;
                        if (this._strip(), this.length > 1) e = 1;
                        else {
                            n && (t = -t), r(t <= 67108863, "Number is too big");
                            var i = 0 | this.words[0];
                            e = i === t ? 0 : i < t ? -1 : 1
                        }
                        return 0 !== this.negative ? 0 | -e : e
                    }, i.prototype.cmp = function(t) {
                        if (0 !== this.negative && 0 === t.negative) return -1;
                        if (0 === this.negative && 0 !== t.negative) return 1;
                        var e = this.ucmp(t);
                        return 0 !== this.negative ? 0 | -e : e
                    }, i.prototype.ucmp = function(t) {
                        if (this.length > t.length) return 1;
                        if (this.length < t.length) return -1;
                        for (var e = 0, r = this.length - 1; r >= 0; r--) {
                            var n = 0 | this.words[r],
                                i = 0 | t.words[r];
                            if (n !== i) {
                                n < i ? e = -1 : n > i && (e = 1);
                                break
                            }
                        }
                        return e
                    }, i.prototype.gtn = function(t) {
                        return 1 === this.cmpn(t)
                    }, i.prototype.gt = function(t) {
                        return 1 === this.cmp(t)
                    }, i.prototype.gten = function(t) {
                        return this.cmpn(t) >= 0
                    }, i.prototype.gte = function(t) {
                        return this.cmp(t) >= 0
                    }, i.prototype.ltn = function(t) {
                        return -1 === this.cmpn(t)
                    }, i.prototype.lt = function(t) {
                        return -1 === this.cmp(t)
                    }, i.prototype.lten = function(t) {
                        return this.cmpn(t) <= 0
                    }, i.prototype.lte = function(t) {
                        return this.cmp(t) <= 0
                    }, i.prototype.eqn = function(t) {
                        return 0 === this.cmpn(t)
                    }, i.prototype.eq = function(t) {
                        return 0 === this.cmp(t)
                    }, i.red = function(t) {
                        return new R(t)
                    }, i.prototype.toRed = function(t) {
                        return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                    }, i.prototype.fromRed = function() {
                        return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, i.prototype._forceRed = function(t) {
                        return this.red = t, this
                    }, i.prototype.forceRed = function(t) {
                        return r(!this.red, "Already a number in reduction context"), this._forceRed(t)
                    }, i.prototype.redAdd = function(t) {
                        return r(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                    }, i.prototype.redIAdd = function(t) {
                        return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                    }, i.prototype.redSub = function(t) {
                        return r(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                    }, i.prototype.redISub = function(t) {
                        return r(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                    }, i.prototype.redShl = function(t) {
                        return r(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                    }, i.prototype.redMul = function(t) {
                        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                    }, i.prototype.redIMul = function(t) {
                        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                    }, i.prototype.redSqr = function() {
                        return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, i.prototype.redISqr = function() {
                        return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, i.prototype.redSqrt = function() {
                        return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, i.prototype.redInvm = function() {
                        return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, i.prototype.redNeg = function() {
                        return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, i.prototype.redPow = function(t) {
                        return r(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                    };
                    var w = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function v(t, e) {
                        this.name = t, this.p = new i(e, 16), this.n = this.p.bitLength(), this.k = new i(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function A() {
                        v.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function b() {
                        v.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function E() {
                        v.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function _() {
                        v.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function R(t) {
                        if ("string" == typeof t) {
                            var e = i._prime(t);
                            this.m = e.p, this.prime = e
                        } else r(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function T(t) {
                        R.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    v.prototype._tmp = function() {
                        var t = new i(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, v.prototype.ireduce = function(t) {
                        var e, r = t;
                        do {
                            this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                        } while (e > this.n);
                        var n = e < this.n ? -1 : r.ucmp(this.p);
                        return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                    }, v.prototype.split = function(t, e) {
                        t.iushrn(this.n, 0, e)
                    }, v.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, n(A, v), A.prototype.split = function(t, e) {
                        for (var r = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++) e.words[i] = t.words[i];
                        if (e.length = n, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                        var s = t.words[9];
                        for (e.words[e.length++] = s & r, i = 10; i < t.length; i++) {
                            var o = 0 | t.words[i];
                            t.words[i - 10] = (o & r) << 4 | s >>> 22, s = o
                        }
                        s >>>= 22, t.words[i - 10] = s, 0 === s && t.length > 10 ? t.length -= 10 : t.length -= 9
                    }, A.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var e = 0, r = 0; r < t.length; r++) {
                            var n = 0 | t.words[r];
                            e += 977 * n, t.words[r] = 67108863 & e, e = 64 * n + (e / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, n(b, v), n(E, v), n(_, v), _.prototype.imulK = function(t) {
                        for (var e = 0, r = 0; r < t.length; r++) {
                            var n = 19 * (0 | t.words[r]) + e,
                                i = 67108863 & n;
                            n >>>= 26, t.words[r] = i, e = n
                        }
                        return 0 !== e && (t.words[t.length++] = e), t
                    }, i._prime = function(t) {
                        if (w[t]) return w[t];
                        var e;
                        if ("k256" === t) e = new A;
                        else if ("p224" === t) e = new b;
                        else if ("p192" === t) e = new E;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            e = new _
                        }
                        return w[t] = e, e
                    }, R.prototype._verify1 = function(t) {
                        r(0 === t.negative, "red works only with positives"), r(t.red, "red works only with red numbers")
                    }, R.prototype._verify2 = function(t, e) {
                        r(0 === (t.negative | e.negative), "red works only with positives"), r(t.red && t.red === e.red, "red works only with red numbers")
                    }, R.prototype.imod = function(t) {
                        return this.prime ? this.prime.ireduce(t)._forceRed(this) : (u(t, t.umod(this.m)._forceRed(this)), t)
                    }, R.prototype.neg = function(t) {
                        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                    }, R.prototype.add = function(t, e) {
                        this._verify2(t, e);
                        var r = t.add(e);
                        return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                    }, R.prototype.iadd = function(t, e) {
                        this._verify2(t, e);
                        var r = t.iadd(e);
                        return r.cmp(this.m) >= 0 && r.isub(this.m), r
                    }, R.prototype.sub = function(t, e) {
                        this._verify2(t, e);
                        var r = t.sub(e);
                        return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
                    }, R.prototype.isub = function(t, e) {
                        this._verify2(t, e);
                        var r = t.isub(e);
                        return r.cmpn(0) < 0 && r.iadd(this.m), r
                    }, R.prototype.shl = function(t, e) {
                        return this._verify1(t), this.imod(t.ushln(e))
                    }, R.prototype.imul = function(t, e) {
                        return this._verify2(t, e), this.imod(t.imul(e))
                    }, R.prototype.mul = function(t, e) {
                        return this._verify2(t, e), this.imod(t.mul(e))
                    }, R.prototype.isqr = function(t) {
                        return this.imul(t, t.clone())
                    }, R.prototype.sqr = function(t) {
                        return this.mul(t, t)
                    }, R.prototype.sqrt = function(t) {
                        if (t.isZero()) return t.clone();
                        var e = this.m.andln(3);
                        if (r(e % 2 == 1), 3 === e) {
                            var n = this.m.add(new i(1)).iushrn(2);
                            return this.pow(t, n)
                        }
                        for (var s = this.m.subn(1), o = 0; !s.isZero() && 0 === s.andln(1);) o++, s.iushrn(1);
                        r(!s.isZero());
                        var a = new i(1).toRed(this),
                            c = a.redNeg(),
                            u = this.m.subn(1).iushrn(1),
                            h = this.m.bitLength();
                        for (h = new i(2 * h * h).toRed(this); 0 !== this.pow(h, u).cmp(c);) h.redIAdd(c);
                        for (var l = this.pow(h, s), d = this.pow(t, s.addn(1).iushrn(1)), f = this.pow(t, s), p = o; 0 !== f.cmp(a);) {
                            for (var m = f, g = 0; 0 !== m.cmp(a); g++) m = m.redSqr();
                            r(g < p);
                            var y = this.pow(l, new i(1).iushln(p - g - 1));
                            d = d.redMul(y), l = y.redSqr(), f = f.redMul(l), p = g
                        }
                        return d
                    }, R.prototype.invm = function(t) {
                        var e = t._invmp(this.m);
                        return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                    }, R.prototype.pow = function(t, e) {
                        if (e.isZero()) return new i(1).toRed(this);
                        if (0 === e.cmpn(1)) return t.clone();
                        var r = new Array(16);
                        r[0] = new i(1).toRed(this), r[1] = t;
                        for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
                        var s = r[0],
                            o = 0,
                            a = 0,
                            c = e.bitLength() % 26;
                        for (0 === c && (c = 26), n = e.length - 1; n >= 0; n--) {
                            for (var u = e.words[n], h = c - 1; h >= 0; h--) {
                                var l = u >> h & 1;
                                s !== r[0] && (s = this.sqr(s)), 0 !== l || 0 !== o ? (o <<= 1, o |= l, (4 === ++a || 0 === n && 0 === h) && (s = this.mul(s, r[o]), a = 0, o = 0)) : a = 0
                            }
                            c = 26
                        }
                        return s
                    }, R.prototype.convertTo = function(t) {
                        var e = t.umod(this.m);
                        return e === t ? e.clone() : e
                    }, R.prototype.convertFrom = function(t) {
                        var e = t.clone();
                        return e.red = null, e
                    }, i.mont = function(t) {
                        return new T(t)
                    }, n(T, R), T.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, T.prototype.convertFrom = function(t) {
                        var e = this.imod(t.mul(this.rinv));
                        return e.red = null, e
                    }, T.prototype.imul = function(t, e) {
                        if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                        var r = t.imul(e),
                            n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            i = r.isub(n).iushrn(this.shift),
                            s = i;
                        return i.cmp(this.m) >= 0 ? s = i.isub(this.m) : i.cmpn(0) < 0 && (s = i.iadd(this.m)), s._forceRed(this)
                    }, T.prototype.mul = function(t, e) {
                        if (t.isZero() || e.isZero()) return new i(0)._forceRed(this);
                        var r = t.mul(e),
                            n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            s = r.isub(n).iushrn(this.shift),
                            o = s;
                        return s.cmp(this.m) >= 0 ? o = s.isub(this.m) : s.cmpn(0) < 0 && (o = s.iadd(this.m)), o._forceRed(this)
                    }, T.prototype.invm = function(t) {
                        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, cc)
            }(oc)), oc.exports),
            hc = Qr(uc);
        var lc = hc.BN;
        const dc = new Da("bignumber/5.8.0"),
            fc = {},
            pc = 9007199254740991;
        let mc = !1;
        class gc {
            constructor(t, e) {
                t !== fc && dc.throwError("cannot call constructor directly; use BigNumber.from", Da.errors.UNSUPPORTED_OPERATION, {
                    operation: "new (BigNumber)"
                }), this._hex = e, this._isBigNumber = !0, Object.freeze(this)
            }
            fromTwos(t) {
                return wc(vc(this).fromTwos(t))
            }
            toTwos(t) {
                return wc(vc(this).toTwos(t))
            }
            abs() {
                return "-" === this._hex[0] ? gc.from(this._hex.substring(1)) : this
            }
            add(t) {
                return wc(vc(this).add(vc(t)))
            }
            sub(t) {
                return wc(vc(this).sub(vc(t)))
            }
            div(t) {
                return gc.from(t).isZero() && Ac("division-by-zero", "div"), wc(vc(this).div(vc(t)))
            }
            mul(t) {
                return wc(vc(this).mul(vc(t)))
            }
            mod(t) {
                const e = vc(t);
                return e.isNeg() && Ac("division-by-zero", "mod"), wc(vc(this).umod(e))
            }
            pow(t) {
                const e = vc(t);
                return e.isNeg() && Ac("negative-power", "pow"), wc(vc(this).pow(e))
            }
            and(t) {
                const e = vc(t);
                return (this.isNegative() || e.isNeg()) && Ac("unbound-bitwise-result", "and"), wc(vc(this).and(e))
            }
            or(t) {
                const e = vc(t);
                return (this.isNegative() || e.isNeg()) && Ac("unbound-bitwise-result", "or"), wc(vc(this).or(e))
            }
            xor(t) {
                const e = vc(t);
                return (this.isNegative() || e.isNeg()) && Ac("unbound-bitwise-result", "xor"), wc(vc(this).xor(e))
            }
            mask(t) {
                return (this.isNegative() || t < 0) && Ac("negative-width", "mask"), wc(vc(this).maskn(t))
            }
            shl(t) {
                return (this.isNegative() || t < 0) && Ac("negative-width", "shl"), wc(vc(this).shln(t))
            }
            shr(t) {
                return (this.isNegative() || t < 0) && Ac("negative-width", "shr"), wc(vc(this).shrn(t))
            }
            eq(t) {
                return vc(this).eq(vc(t))
            }
            lt(t) {
                return vc(this).lt(vc(t))
            }
            lte(t) {
                return vc(this).lte(vc(t))
            }
            gt(t) {
                return vc(this).gt(vc(t))
            }
            gte(t) {
                return vc(this).gte(vc(t))
            }
            isNegative() {
                return "-" === this._hex[0]
            }
            isZero() {
                return vc(this).isZero()
            }
            toNumber() {
                try {
                    return vc(this).toNumber()
                } catch (t) {
                    Ac("overflow", "toNumber", this.toString())
                }
                return null
            }
            toBigInt() {
                try {
                    return BigInt(this.toString())
                } catch (t) {}
                return dc.throwError("this platform does not support BigInt", Da.errors.UNSUPPORTED_OPERATION, {
                    value: this.toString()
                })
            }
            toString() {
                return arguments.length > 0 && (10 === arguments[0] ? mc || (mc = !0, dc.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? dc.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", Da.errors.UNEXPECTED_ARGUMENT, {}) : dc.throwError("BigNumber.toString does not accept parameters", Da.errors.UNEXPECTED_ARGUMENT, {})), vc(this).toString(10)
            }
            toHexString() {
                return this._hex
            }
            toJSON(t) {
                return {
                    type: "BigNumber",
                    hex: this.toHexString()
                }
            }
            static from(t) {
                if (t instanceof gc) return t;
                if ("string" == typeof t) return t.match(/^-?0x[0-9a-f]+$/i) ? new gc(fc, yc(t)) : t.match(/^-?[0-9]+$/) ? new gc(fc, yc(new lc(t))) : dc.throwArgumentError("invalid BigNumber string", "value", t);
                if ("number" == typeof t) return t % 1 && Ac("underflow", "BigNumber.from", t), (t >= pc || t <= -pc) && Ac("overflow", "BigNumber.from", t), gc.from(String(t));
                const e = t;
                if ("bigint" == typeof e) return gc.from(e.toString());
                if (ja(e)) return gc.from(Ya(e));
                if (e)
                    if (e.toHexString) {
                        const t = e.toHexString();
                        if ("string" == typeof t) return gc.from(t)
                    } else {
                        let t = e._hex;
                        if (null == t && "BigNumber" === e.type && (t = e.hex), "string" == typeof t && (Wa(t) || "-" === t[0] && Wa(t.substring(1)))) return gc.from(t)
                    } return dc.throwArgumentError("invalid BigNumber value", "value", t)
            }
            static isBigNumber(t) {
                return !(!t || !t._isBigNumber)
            }
        }

        function yc(t) {
            if ("string" != typeof t) return yc(t.toString(16));
            if ("-" === t[0]) return "-" === (t = t.substring(1))[0] && dc.throwArgumentError("invalid hex", "value", t), "0x00" === (t = yc(t)) ? t : "-" + t;
            if ("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t) return "0x00";
            for (t.length % 2 && (t = "0x0" + t.substring(2)); t.length > 4 && "0x00" === t.substring(0, 4);) t = "0x" + t.substring(4);
            return t
        }

        function wc(t) {
            return gc.from(yc(t))
        }

        function vc(t) {
            const e = gc.from(t).toHexString();
            return "-" === e[0] ? new lc("-" + e.substring(3), 16) : new lc(e.substring(2), 16)
        }

        function Ac(t, e, r) {
            const n = {
                fault: t,
                operation: e
            };
            return null != r && (n.value = r), dc.throwError(t, Da.errors.NUMERIC_FAULT, n)
        }
        const bc = gc.from(-1),
            Ec = gc.from(0),
            _c = gc.from(1),
            Rc = gc.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
            Tc = new Da("strings/5.8.0");
        var Ic, kc;

        function Sc(t, e, r, n, i) {
            if (t === kc.BAD_PREFIX || t === kc.UNEXPECTED_CONTINUE) {
                let t = 0;
                for (let n = e + 1; n < r.length && r[n] >> 6 == 2; n++) t++;
                return t
            }
            return t === kc.OVERRUN ? r.length - e - 1 : 0
        }! function(t) {
            t.current = "", t.NFC = "NFC", t.NFD = "NFD", t.NFKC = "NFKC", t.NFKD = "NFKD"
        }(Ic || (Ic = {})),
        function(t) {
            t.UNEXPECTED_CONTINUE = "unexpected continuation byte", t.BAD_PREFIX = "bad codepoint prefix", t.OVERRUN = "string overrun", t.MISSING_CONTINUE = "missing continuation byte", t.OUT_OF_RANGE = "out of UTF-8 range", t.UTF16_SURROGATE = "UTF-16 surrogate", t.OVERLONG = "overlong representation"
        }(kc || (kc = {}));
        const Nc = Object.freeze({
            error: function(t, e, r, n, i) {
                return Tc.throwArgumentError(`invalid codepoint at offset ${e}; ${t}`, "bytes", r)
            },
            ignore: Sc,
            replace: function(t, e, r, n, i) {
                return t === kc.OVERLONG ? (n.push(i), 0) : (n.push(65533), Sc(t, e, r))
            }
        });

        function Oc(t, e) {
            null == e && (e = Nc.error), t = Ha(t);
            const r = [];
            let n = 0;
            for (; n < t.length;) {
                const i = t[n++];
                if (!(i >> 7)) {
                    r.push(i);
                    continue
                }
                let s = null,
                    o = null;
                if (192 == (224 & i)) s = 1, o = 127;
                else if (224 == (240 & i)) s = 2, o = 2047;
                else {
                    if (240 != (248 & i)) {
                        n += e(128 == (192 & i) ? kc.UNEXPECTED_CONTINUE : kc.BAD_PREFIX, n - 1, t, r);
                        continue
                    }
                    s = 3, o = 65535
                }
                if (n - 1 + s >= t.length) {
                    n += e(kc.OVERRUN, n - 1, t, r);
                    continue
                }
                let a = i & (1 << 8 - s - 1) - 1;
                for (let i = 0; i < s; i++) {
                    let i = t[n];
                    if (128 != (192 & i)) {
                        n += e(kc.MISSING_CONTINUE, n, t, r), a = null;
                        break
                    }
                    a = a << 6 | 63 & i, n++
                }
                null !== a && (a > 1114111 ? n += e(kc.OUT_OF_RANGE, n - 1 - s, t, r, a) : a >= 55296 && a <= 57343 ? n += e(kc.UTF16_SURROGATE, n - 1 - s, t, r, a) : a <= o ? n += e(kc.OVERLONG, n - 1 - s, t, r, a) : r.push(a))
            }
            return r
        }

        function Pc(t, e = Ic.current) {
            e != Ic.current && (Tc.checkNormalize(), t = t.normalize(e));
            let r = [];
            for (let e = 0; e < t.length; e++) {
                const n = t.charCodeAt(e);
                if (n < 128) r.push(n);
                else if (n < 2048) r.push(n >> 6 | 192), r.push(63 & n | 128);
                else if (55296 == (64512 & n)) {
                    e++;
                    const i = t.charCodeAt(e);
                    if (e >= t.length || 56320 != (64512 & i)) throw new Error("invalid utf-8 string");
                    const s = 65536 + ((1023 & n) << 10) + (1023 & i);
                    r.push(s >> 18 | 240), r.push(s >> 12 & 63 | 128), r.push(s >> 6 & 63 | 128), r.push(63 & s | 128)
                } else r.push(n >> 12 | 224), r.push(n >> 6 & 63 | 128), r.push(63 & n | 128)
            }
            return Ha(r)
        }

        function Cc(t, e) {
            return Oc(t, e).map(t => t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode(55296 + (t >> 10 & 1023), 56320 + (1023 & t)))).join("")
        }

        function xc(t) {
            return ic(Pc(t))
        }
        const Mc = "hash/5.8.0";

        function Uc(t) {
            t = atob(t);
            const e = [];
            for (let r = 0; r < t.length; r++) e.push(t.charCodeAt(r));
            return Ha(e)
        }

        function Dc(t) {
            t = Ha(t);
            let e = "";
            for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
            return btoa(e)
        }

        function Lc(t, e) {
            null == e && (e = 1);
            const r = [],
                n = r.forEach,
                i = function(t, e) {
                    n.call(t, function(t) {
                        e > 0 && Array.isArray(t) ? i(t, e - 1) : r.push(t)
                    })
                };
            return i(t, e), r
        }

        function Bc(t) {
            return function(t) {
                let e = 0;
                return () => t[e++]
            }(function(t) {
                let e = 0;

                function r() {
                    return t[e++] << 8 | t[e++]
                }
                let n = r(),
                    i = 1,
                    s = [0, 1];
                for (let t = 1; t < n; t++) s.push(i += r());
                let o = r(),
                    a = e;
                e += o;
                let c = 0,
                    u = 0;

                function h() {
                    return 0 == c && (u = u << 8 | t[e++], c = 8), u >> --c & 1
                }
                const l = Math.pow(2, 31),
                    d = l >>> 1,
                    f = d >> 1,
                    p = l - 1;
                let m = 0;
                for (let t = 0; t < 31; t++) m = m << 1 | h();
                let g = [],
                    y = 0,
                    w = l;
                for (;;) {
                    let t = Math.floor(((m - y + 1) * i - 1) / w),
                        e = 0,
                        r = n;
                    for (; r - e > 1;) {
                        let n = e + r >>> 1;
                        t < s[n] ? r = n : e = n
                    }
                    if (0 == e) break;
                    g.push(e);
                    let o = y + Math.floor(w * s[e] / i),
                        a = y + Math.floor(w * s[e + 1] / i) - 1;
                    for (; 0 == ((o ^ a) & d);) m = m << 1 & p | h(), o = o << 1 & p, a = a << 1 & p | 1;
                    for (; o & ~a & f;) m = m & d | m << 1 & p >>> 1 | h(), o = o << 1 ^ d, a = (a ^ d) << 1 | d | 1;
                    y = o, w = 1 + a - o
                }
                let v = n - 4;
                return g.map(e => {
                    switch (e - v) {
                        case 3:
                            return v + 65792 + (t[a++] << 16 | t[a++] << 8 | t[a++]);
                        case 2:
                            return v + 256 + (t[a++] << 8 | t[a++]);
                        case 1:
                            return v + t[a++];
                        default:
                            return e - 1
                    }
                })
            }(t))
        }

        function Fc(t) {
            return 1 & t ? ~t >> 1 : t >> 1
        }

        function qc(t, e) {
            let r = Array(t);
            for (let n = 0, i = -1; n < t; n++) r[n] = i += 1 + e();
            return r
        }

        function Gc(t, e) {
            let r = Array(t);
            for (let n = 0, i = 0; n < t; n++) r[n] = i += Fc(e());
            return r
        }

        function jc(t, e) {
            let r = qc(t(), t),
                n = t(),
                i = qc(n, t),
                s = function(t, e) {
                    let r = Array(t);
                    for (let n = 0; n < t; n++) r[n] = 1 + e();
                    return r
                }(n, t);
            for (let t = 0; t < n; t++)
                for (let e = 0; e < s[t]; e++) r.push(i[t] + e);
            return e ? r.map(t => e[t]) : r
        }

        function Hc(t, e, r) {
            let n = Array(t).fill(void 0).map(() => []);
            for (let i = 0; i < e; i++) Gc(t, r).forEach((t, e) => n[e].push(t));
            return n
        }

        function zc(t, e) {
            let r = 1 + e(),
                n = e(),
                i = function(t) {
                    let e = [];
                    for (;;) {
                        let r = t();
                        if (0 == r) break;
                        e.push(r)
                    }
                    return e
                }(e);
            return Lc(Hc(i.length, 1 + t, e).map((t, e) => {
                const s = t[0],
                    o = t.slice(1);
                return Array(i[e]).fill(void 0).map((t, e) => {
                    let i = e * n;
                    return [s + e * r, o.map(t => t + i)]
                })
            }))
        }

        function Kc(t, e) {
            return Hc(1 + e(), 1 + t, e).map(t => [t[0], t.slice(1)])
        }
        const Vc = Bc(Uc("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA==")),
            Wc = new Set(jc(Vc)),
            Jc = new Set(jc(Vc)),
            Yc = function(t) {
                let e = [];
                for (;;) {
                    let r = t();
                    if (0 == r) break;
                    e.push(zc(r, t))
                }
                for (;;) {
                    let r = t() - 1;
                    if (r < 0) break;
                    e.push(Kc(r, t))
                }
                return function(t) {
                    const e = {};
                    for (let r = 0; r < t.length; r++) {
                        const n = t[r];
                        e[n[0]] = n[1]
                    }
                    return e
                }(Lc(e))
            }(Vc),
            Qc = function(t) {
                let e = jc(t).sort((t, e) => t - e);
                return function r() {
                    let n = [];
                    for (;;) {
                        let i = jc(t, e);
                        if (0 == i.length) break;
                        n.push({
                            set: new Set(i),
                            node: r()
                        })
                    }
                    n.sort((t, e) => e.set.size - t.set.size);
                    let i = t(),
                        s = i % 3;
                    i = i / 3 | 0;
                    let o = !!(1 & i);
                    return i >>= 1, {
                        branches: n,
                        valid: s,
                        fe0f: o,
                        save: 1 == i,
                        check: 2 == i
                    }
                }()
            }(Vc);

        function Xc(t) {
            return function(t, e = Ic.current) {
                return Oc(Pc(t, e))
            }(t)
        }

        function $c(t) {
            return t.filter(t => 65039 != t)
        }

        function Zc(t) {
            for (let e of t.split(".")) {
                let t = Xc(e);
                try {
                    for (let e = t.lastIndexOf(95) - 1; e >= 0; e--)
                        if (95 !== t[e]) throw new Error("underscore only allowed at start");
                    if (t.length >= 4 && t.every(t => t < 128) && 45 === t[2] && 45 === t[3]) throw new Error("invalid label extension")
                } catch (t) {
                    throw new Error(`Invalid label "${e}": ${t.message}`)
                }
            }
            return t
        }

        function tu(t) {
            return Zc(function(t, e) {
                let r = Xc(t).reverse(),
                    n = [];
                for (; r.length;) {
                    let t = eu(r);
                    if (t) {
                        n.push(...e(t));
                        continue
                    }
                    let i = r.pop();
                    if (Wc.has(i)) {
                        n.push(i);
                        continue
                    }
                    if (Jc.has(i)) continue;
                    let s = Yc[i];
                    if (!s) throw new Error(`Disallowed codepoint: 0x${i.toString(16).toUpperCase()}`);
                    n.push(...s)
                }
                return Zc(function(t) {
                    return t.normalize("NFC")
                }(String.fromCodePoint(...n)))
            }(t, $c))
        }

        function eu(t, e) {
            var r;
            let n, i, s = Qc,
                o = [],
                a = t.length;
            for (; a;) {
                let e = t[--a];
                if (s = null === (r = s.branches.find(t => t.set.has(e))) || void 0 === r ? void 0 : r.node, !s) break;
                if (s.save) i = e;
                else if (s.check && e === i) break;
                o.push(e), s.fe0f && (o.push(65039), a > 0 && 65039 == t[a - 1] && a--), s.valid && (n = o.slice(), 2 == s.valid && n.splice(1, 1), t.length = a)
            }
            return n
        }
        const ru = new Da(Mc),
            nu = new Uint8Array(32);

        function iu(t) {
            if (0 === t.length) throw new Error("invalid ENS name; empty component");
            return t
        }

        function su(t) {
            const e = Pc(tu(t)),
                r = [];
            if (0 === t.length) return r;
            let n = 0;
            for (let t = 0; t < e.length; t++) {
                46 === e[t] && (r.push(iu(e.slice(n, t))), n = t + 1)
            }
            if (n >= e.length) throw new Error("invalid ENS name; empty component");
            return r.push(iu(e.slice(n))), r
        }

        function ou(t) {
            "string" != typeof t && ru.throwArgumentError("invalid ENS name; not a string", "name", t);
            let e = nu;
            const r = su(t);
            for (; r.length;) e = ic(za([e, ic(r.pop())]));
            return Ya(e)
        }

        function au(t) {
            return Ya(za(su(t).map(t => {
                if (t.length > 63) throw new Error("invalid DNS encoded entry; length exceeds 63 bytes");
                const e = new Uint8Array(t.length + 1);
                return e.set(t, 1), e[0] = e.length - 1, e
            }))) + "00"
        }
        nu.fill(0);
        const cu = "Ethereum Signed Message:\n";
        const uu = new Da("rlp/5.8.0");

        function hu(t) {
            const e = [];
            for (; t;) e.unshift(255 & t), t >>= 8;
            return e
        }

        function lu(t, e, r) {
            let n = 0;
            for (let i = 0; i < r; i++) n = 256 * n + t[e + i];
            return n
        }

        function du(t) {
            if (Array.isArray(t)) {
                let e = [];
                if (t.forEach(function(t) {
                        e = e.concat(du(t))
                    }), e.length <= 55) return e.unshift(192 + e.length), e;
                const r = hu(e.length);
                return r.unshift(247 + r.length), r.concat(e)
            }
            qa(t) || uu.throwArgumentError("RLP object must be BytesLike", "object", t);
            const e = Array.prototype.slice.call(Ha(t));
            if (1 === e.length && e[0] <= 127) return e;
            if (e.length <= 55) return e.unshift(128 + e.length), e;
            const r = hu(e.length);
            return r.unshift(183 + r.length), r.concat(e)
        }

        function fu(t) {
            return Ya(du(t))
        }

        function pu(t, e, r, n) {
            const i = [];
            for (; r < e + 1 + n;) {
                const s = mu(t, r);
                i.push(s.result), (r += s.consumed) > e + 1 + n && uu.throwError("child data too short", Da.errors.BUFFER_OVERRUN, {})
            }
            return {
                consumed: 1 + n,
                result: i
            }
        }

        function mu(t, e) {
            if (0 === t.length && uu.throwError("data too short", Da.errors.BUFFER_OVERRUN, {}), t[e] >= 248) {
                const r = t[e] - 247;
                e + 1 + r > t.length && uu.throwError("data short segment too short", Da.errors.BUFFER_OVERRUN, {});
                const n = lu(t, e + 1, r);
                return e + 1 + r + n > t.length && uu.throwError("data long segment too short", Da.errors.BUFFER_OVERRUN, {}), pu(t, e, e + 1 + r, r + n)
            }
            if (t[e] >= 192) {
                const r = t[e] - 192;
                return e + 1 + r > t.length && uu.throwError("data array too short", Da.errors.BUFFER_OVERRUN, {}), pu(t, e, e + 1, r)
            }
            if (t[e] >= 184) {
                const r = t[e] - 183;
                e + 1 + r > t.length && uu.throwError("data array too short", Da.errors.BUFFER_OVERRUN, {});
                const n = lu(t, e + 1, r);
                e + 1 + r + n > t.length && uu.throwError("data array too short", Da.errors.BUFFER_OVERRUN, {});
                return {
                    consumed: 1 + r + n,
                    result: Ya(t.slice(e + 1 + r, e + 1 + r + n))
                }
            }
            if (t[e] >= 128) {
                const r = t[e] - 128;
                e + 1 + r > t.length && uu.throwError("data too short", Da.errors.BUFFER_OVERRUN, {});
                return {
                    consumed: 1 + r,
                    result: Ya(t.slice(e + 1, e + 1 + r))
                }
            }
            return {
                consumed: 1,
                result: Ya(t[e])
            }
        }

        function gu(t) {
            const e = Ha(t),
                r = mu(e, 0);
            return r.consumed !== e.length && uu.throwArgumentError("invalid rlp data", "data", t), r.result
        }
        const yu = new Da("address/5.8.0");

        function wu(t) {
            Wa(t, 20) || yu.throwArgumentError("invalid address", "address", t);
            const e = (t = t.toLowerCase()).substring(2).split(""),
                r = new Uint8Array(40);
            for (let t = 0; t < 40; t++) r[t] = e[t].charCodeAt(0);
            const n = Ha(ic(r));
            for (let t = 0; t < 40; t += 2) n[t >> 1] >> 4 >= 8 && (e[t] = e[t].toUpperCase()), (15 & n[t >> 1]) >= 8 && (e[t + 1] = e[t + 1].toUpperCase());
            return "0x" + e.join("")
        }
        const vu = {};
        for (let t = 0; t < 10; t++) vu[String(t)] = String(t);
        for (let t = 0; t < 26; t++) vu[String.fromCharCode(65 + t)] = String(10 + t);
        const Au = Math.floor((bu = 9007199254740991, Math.log10 ? Math.log10(bu) : Math.log(bu) / Math.LN10));
        var bu;

        function Eu(t) {
            let e = null;
            if ("string" != typeof t && yu.throwArgumentError("invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== t.substring(0, 2) && (t = "0x" + t), e = wu(t), t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== t && yu.throwArgumentError("bad address checksum", "address", t);
            else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                for (t.substring(2, 4) !== function(t) {
                        let e = (t = (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00").split("").map(t => vu[t]).join("");
                        for (; e.length >= Au;) {
                            let t = e.substring(0, Au);
                            e = parseInt(t, 10) % 97 + e.substring(t.length)
                        }
                        let r = String(98 - parseInt(e, 10) % 97);
                        for (; r.length < 2;) r = "0" + r;
                        return r
                    }(t) && yu.throwArgumentError("bad icap checksum", "address", t), r = t.substring(4), e = new lc(r, 36).toString(16); e.length < 40;) e = "0" + e;
                e = wu("0x" + e)
            } else yu.throwArgumentError("invalid address", "address", t);
            var r;
            return e
        }
        var _u = function(t, e, r, n) {
            return new(r || (r = Promise))(function(i, s) {
                function o(t) {
                    try {
                        c(n.next(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function a(t) {
                    try {
                        c(n.throw(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                        t(e)
                    })).then(o, a)
                }
                c((n = n.apply(t, e || [])).next())
            })
        };
        const Ru = new Da("properties/5.8.0");

        function Tu(t, e, r) {
            Object.defineProperty(t, e, {
                enumerable: !0,
                value: r,
                writable: !1
            })
        }

        function Iu(t, e) {
            for (let r = 0; r < 32; r++) {
                if (t[e]) return t[e];
                if (!t.prototype || "object" != typeof t.prototype) break;
                t = Object.getPrototypeOf(t.prototype).constructor
            }
            return null
        }

        function ku(t) {
            return _u(this, void 0, void 0, function*() {
                const e = Object.keys(t).map(e => {
                    const r = t[e];
                    return Promise.resolve(r).then(t => ({
                        key: e,
                        value: t
                    }))
                });
                return (yield Promise.all(e)).reduce((t, e) => (t[e.key] = e.value, t), {})
            })
        }

        function Su(t) {
            const e = {};
            for (const r in t) e[r] = t[r];
            return e
        }
        const Nu = {
            bigint: !0,
            boolean: !0,
            function: !0,
            number: !0,
            string: !0
        };

        function Ou(t) {
            if (null == t || Nu[typeof t]) return !0;
            if (Array.isArray(t) || "object" == typeof t) {
                if (!Object.isFrozen(t)) return !1;
                const e = Object.keys(t);
                for (let r = 0; r < e.length; r++) {
                    let n = null;
                    try {
                        n = t[e[r]]
                    } catch (t) {
                        continue
                    }
                    if (!Ou(n)) return !1
                }
                return !0
            }
            return Ru.throwArgumentError("Cannot deepCopy " + typeof t, "object", t)
        }

        function Pu(t) {
            if (Ou(t)) return t;
            if (Array.isArray(t)) return Object.freeze(t.map(t => Cu(t)));
            if ("object" == typeof t) {
                const e = {};
                for (const r in t) {
                    const n = t[r];
                    void 0 !== n && Tu(e, r, Cu(n))
                }
                return e
            }
            return Ru.throwArgumentError("Cannot deepCopy " + typeof t, "object", t)
        }

        function Cu(t) {
            return Pu(t)
        }
        class xu {
            constructor(t) {
                for (const e in t) this[e] = Cu(t[e])
            }
        }
        var Mu = function(t, e, r, n) {
            return new(r || (r = Promise))(function(i, s) {
                function o(t) {
                    try {
                        c(n.next(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function a(t) {
                    try {
                        c(n.throw(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                        t(e)
                    })).then(o, a)
                }
                c((n = n.apply(t, e || [])).next())
            })
        };
        const Uu = new Da(Mc),
            Du = new Uint8Array(32);
        Du.fill(0);
        const Lu = gc.from(-1),
            Bu = gc.from(0),
            Fu = gc.from(1),
            qu = gc.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
        const Gu = ec(Fu.toHexString(), 32),
            ju = ec(Bu.toHexString(), 32),
            Hu = {
                name: "string",
                version: "string",
                chainId: "uint256",
                verifyingContract: "address",
                salt: "bytes32"
            },
            zu = ["name", "version", "chainId", "verifyingContract", "salt"];

        function Ku(t) {
            return function(e) {
                return "string" != typeof e && Uu.throwArgumentError(`invalid domain value for ${JSON.stringify(t)}`, `domain.${t}`, e), e
            }
        }
        const Vu = {
            name: Ku("name"),
            version: Ku("version"),
            chainId: function(t) {
                try {
                    return gc.from(t).toString()
                } catch (t) {}
                return Uu.throwArgumentError('invalid domain value for "chainId"', "domain.chainId", t)
            },
            verifyingContract: function(t) {
                try {
                    return Eu(t).toLowerCase()
                } catch (t) {}
                return Uu.throwArgumentError('invalid domain value "verifyingContract"', "domain.verifyingContract", t)
            },
            salt: function(t) {
                try {
                    const e = Ha(t);
                    if (32 !== e.length) throw new Error("bad length");
                    return Ya(e)
                } catch (t) {}
                return Uu.throwArgumentError('invalid domain value "salt"', "domain.salt", t)
            }
        };

        function Wu(t) {
            {
                const e = t.match(/^(u?)int(\d*)$/);
                if (e) {
                    const r = "" === e[1],
                        n = parseInt(e[2] || "256");
                    (n % 8 != 0 || n > 256 || e[2] && e[2] !== String(n)) && Uu.throwArgumentError("invalid numeric width", "type", t);
                    const i = qu.mask(r ? n - 1 : n),
                        s = r ? i.add(Fu).mul(Lu) : Bu;
                    return function(e) {
                        const r = gc.from(e);
                        return (r.lt(s) || r.gt(i)) && Uu.throwArgumentError(`value out-of-bounds for ${t}`, "value", e), ec(r.toTwos(256).toHexString(), 32)
                    }
                }
            } {
                const e = t.match(/^bytes(\d+)$/);
                if (e) {
                    const r = parseInt(e[1]);
                    return (0 === r || r > 32 || e[1] !== String(r)) && Uu.throwArgumentError("invalid bytes width", "type", t),
                        function(e) {
                            return Ha(e).length !== r && Uu.throwArgumentError(`invalid length for ${t}`, "value", e),
                                function(t) {
                                    const e = Ha(t),
                                        r = e.length % 32;
                                    return r ? $a([e, Du.slice(r)]) : Ya(e)
                                }(e)
                        }
                }
            }
            switch (t) {
                case "address":
                    return function(t) {
                        return ec(Eu(t), 32)
                    };
                case "bool":
                    return function(t) {
                        return t ? Gu : ju
                    };
                case "bytes":
                    return function(t) {
                        return ic(t)
                    };
                case "string":
                    return function(t) {
                        return xc(t)
                    }
            }
            return null
        }

        function Ju(t, e) {
            return `${t}(${e.map(({name:t,type:e})=>e+" "+t).join(",")})`
        }
        class Yu {
            constructor(t) {
                Tu(this, "types", Object.freeze(Cu(t))), Tu(this, "_encoderCache", {}), Tu(this, "_types", {});
                const e = {},
                    r = {},
                    n = {};
                Object.keys(t).forEach(t => {
                    e[t] = {}, r[t] = [], n[t] = {}
                });
                for (const n in t) {
                    const i = {};
                    t[n].forEach(s => {
                        i[s.name] && Uu.throwArgumentError(`duplicate variable name ${JSON.stringify(s.name)} in ${JSON.stringify(n)}`, "types", t), i[s.name] = !0;
                        const o = s.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
                        o === n && Uu.throwArgumentError(`circular type reference to ${JSON.stringify(o)}`, "types", t);
                        Wu(o) || (r[o] || Uu.throwArgumentError(`unknown type ${JSON.stringify(o)}`, "types", t), r[o].push(n), e[n][o] = !0)
                    })
                }
                const i = Object.keys(r).filter(t => 0 === r[t].length);
                0 === i.length ? Uu.throwArgumentError("missing primary type", "types", t) : i.length > 1 && Uu.throwArgumentError(`ambiguous primary types or unused types: ${i.map(t=>JSON.stringify(t)).join(", ")}`, "types", t), Tu(this, "primaryType", i[0]),
                    function i(s, o) {
                        o[s] && Uu.throwArgumentError(`circular type reference to ${JSON.stringify(s)}`, "types", t), o[s] = !0, Object.keys(e[s]).forEach(t => {
                            r[t] && (i(t, o), Object.keys(o).forEach(e => {
                                n[e][t] = !0
                            }))
                        }), delete o[s]
                    }(this.primaryType, {});
                for (const e in n) {
                    const r = Object.keys(n[e]);
                    r.sort(), this._types[e] = Ju(e, t[e]) + r.map(e => Ju(e, t[e])).join("")
                }
            }
            getEncoder(t) {
                let e = this._encoderCache[t];
                return e || (e = this._encoderCache[t] = this._getEncoder(t)), e
            }
            _getEncoder(t) {
                {
                    const e = Wu(t);
                    if (e) return e
                }
                const e = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
                if (e) {
                    const t = e[1],
                        r = this.getEncoder(t),
                        n = parseInt(e[3]);
                    return e => {
                        n >= 0 && e.length !== n && Uu.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", e);
                        let i = e.map(r);
                        return this._types[t] && (i = i.map(ic)), ic($a(i))
                    }
                }
                const r = this.types[t];
                if (r) {
                    const e = xc(this._types[t]);
                    return t => {
                        const n = r.map(({
                            name: e,
                            type: r
                        }) => {
                            const n = this.getEncoder(r)(t[e]);
                            return this._types[r] ? ic(n) : n
                        });
                        return n.unshift(e), $a(n)
                    }
                }
                return Uu.throwArgumentError(`unknown type: ${t}`, "type", t)
            }
            encodeType(t) {
                const e = this._types[t];
                return e || Uu.throwArgumentError(`unknown type: ${JSON.stringify(t)}`, "name", t), e
            }
            encodeData(t, e) {
                return this.getEncoder(t)(e)
            }
            hashStruct(t, e) {
                return ic(this.encodeData(t, e))
            }
            encode(t) {
                return this.encodeData(this.primaryType, t)
            }
            hash(t) {
                return this.hashStruct(this.primaryType, t)
            }
            _visit(t, e, r) {
                if (Wu(t)) return r(t, e);
                const n = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
                if (n) {
                    const t = n[1],
                        i = parseInt(n[3]);
                    return i >= 0 && e.length !== i && Uu.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", e), e.map(e => this._visit(t, e, r))
                }
                const i = this.types[t];
                return i ? i.reduce((t, {
                    name: n,
                    type: i
                }) => (t[n] = this._visit(i, e[n], r), t), {}) : Uu.throwArgumentError(`unknown type: ${t}`, "type", t)
            }
            visit(t, e) {
                return this._visit(this.primaryType, t, e)
            }
            static from(t) {
                return new Yu(t)
            }
            static getPrimaryType(t) {
                return Yu.from(t).primaryType
            }
            static hashStruct(t, e, r) {
                return Yu.from(e).hashStruct(t, r)
            }
            static hashDomain(t) {
                const e = [];
                for (const r in t) {
                    const n = Hu[r];
                    n || Uu.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(r)}`, "domain", t), e.push({
                        name: r,
                        type: n
                    })
                }
                return e.sort((t, e) => zu.indexOf(t.name) - zu.indexOf(e.name)), Yu.hashStruct("EIP712Domain", {
                    EIP712Domain: e
                }, t)
            }
            static encode(t, e, r) {
                return $a(["0x1901", Yu.hashDomain(t), Yu.from(e).hash(r)])
            }
            static hash(t, e, r) {
                return ic(Yu.encode(t, e, r))
            }
            static resolveNames(t, e, r, n) {
                return Mu(this, void 0, void 0, function*() {
                    t = Su(t);
                    const i = {};
                    t.verifyingContract && !Wa(t.verifyingContract, 20) && (i[t.verifyingContract] = "0x");
                    const s = Yu.from(e);
                    s.visit(r, (t, e) => ("address" !== t || Wa(e, 20) || (i[e] = "0x"), e));
                    for (const t in i) i[t] = yield n(t);
                    return t.verifyingContract && i[t.verifyingContract] && (t.verifyingContract = i[t.verifyingContract]), r = s.visit(r, (t, e) => "address" === t && i[e] ? i[e] : e), {
                        domain: t,
                        value: r
                    }
                })
            }
            static getPayload(t, e, r) {
                Yu.hashDomain(t);
                const n = {},
                    i = [];
                zu.forEach(e => {
                    const r = t[e];
                    null != r && (n[e] = Vu[e](r), i.push({
                        name: e,
                        type: Hu[e]
                    }))
                });
                const s = Yu.from(e),
                    o = Su(e);
                return o.EIP712Domain ? Uu.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", e) : o.EIP712Domain = i, s.encode(r), {
                    types: o,
                    domain: n,
                    primaryType: s.primaryType,
                    message: s.visit(r, (t, e) => {
                        if (t.match(/^bytes(\d*)/)) return Ya(Ha(e));
                        if (t.match(/^u?int/)) return gc.from(e).toString();
                        switch (t) {
                            case "address":
                                return e.toLowerCase();
                            case "bool":
                                return !!e;
                            case "string":
                                return "string" != typeof e && Uu.throwArgumentError("invalid string", "value", e), e
                        }
                        return Uu.throwArgumentError("unsupported type", "type", t)
                    })
                }
            }
        }
        var Qu = Object.freeze({
            __proto__: null,
            _TypedDataEncoder: Yu,
            dnsEncode: au,
            hashMessage: function(t) {
                return "string" == typeof t && (t = Pc(t)), ic(za([Pc(cu), Pc(String(t.length)), t]))
            },
            id: xc,
            messagePrefix: cu,
            namehash: ou
        });
        const Xu = "abi/5.8.0",
            $u = new Da(Xu),
            Zu = {};
        let th = {
                calldata: !0,
                memory: !0,
                storage: !0
            },
            eh = {
                calldata: !0,
                memory: !0
            };

        function rh(t, e) {
            if ("bytes" === t || "string" === t) {
                if (th[e]) return !0
            } else if ("address" === t) {
                if ("payable" === e) return !0
            } else if ((t.indexOf("[") >= 0 || "tuple" === t) && eh[e]) return !0;
            return (th[e] || "payable" === e) && $u.throwArgumentError("invalid modifier", "name", e), !1
        }

        function nh(t, e) {
            for (let r in e) Tu(t, r, e[r])
        }
        const ih = Object.freeze({
                sighash: "sighash",
                minimal: "minimal",
                full: "full",
                json: "json"
            }),
            sh = new RegExp(/^(.*)\[([0-9]*)\]$/);
        class oh {
            constructor(t, e) {
                t !== Zu && $u.throwError("use fromString", Da.errors.UNSUPPORTED_OPERATION, {
                    operation: "new ParamType()"
                }), nh(this, e);
                let r = this.type.match(sh);
                nh(this, r ? {
                    arrayLength: parseInt(r[2] || "-1"),
                    arrayChildren: oh.fromObject({
                        type: r[1],
                        components: this.components
                    }),
                    baseType: "array"
                } : {
                    arrayLength: null,
                    arrayChildren: null,
                    baseType: null != this.components ? "tuple" : this.type
                }), this._isParamType = !0, Object.freeze(this)
            }
            format(t) {
                if (t || (t = ih.sighash), ih[t] || $u.throwArgumentError("invalid format type", "format", t), t === ih.json) {
                    let e = {
                        type: "tuple" === this.baseType ? "tuple" : this.type,
                        name: this.name || void 0
                    };
                    return "boolean" == typeof this.indexed && (e.indexed = this.indexed), this.components && (e.components = this.components.map(e => JSON.parse(e.format(t)))), JSON.stringify(e)
                }
                let e = "";
                return "array" === this.baseType ? (e += this.arrayChildren.format(t), e += "[" + (this.arrayLength < 0 ? "" : String(this.arrayLength)) + "]") : "tuple" === this.baseType ? (t !== ih.sighash && (e += this.type), e += "(" + this.components.map(e => e.format(t)).join(t === ih.full ? ", " : ",") + ")") : e += this.type, t !== ih.sighash && (!0 === this.indexed && (e += " indexed"), t === ih.full && this.name && (e += " " + this.name)), e
            }
            static from(t, e) {
                return "string" == typeof t ? oh.fromString(t, e) : oh.fromObject(t)
            }
            static fromObject(t) {
                return oh.isParamType(t) ? t : new oh(Zu, {
                    name: t.name || null,
                    type: ah(t.type),
                    indexed: null == t.indexed ? null : !!t.indexed,
                    components: t.components ? t.components.map(oh.fromObject) : null
                })
            }
            static fromString(t, e) {
                return r = function(t, e) {
                    let r = t;

                    function n(e) {
                        $u.throwArgumentError(`unexpected character at position ${e}`, "param", t)
                    }

                    function i(t) {
                        let r = {
                            type: "",
                            name: "",
                            parent: t,
                            state: {
                                allowType: !0
                            }
                        };
                        return e && (r.indexed = !1), r
                    }
                    t = t.replace(/\s/g, " ");
                    let s = {
                            type: "",
                            name: "",
                            state: {
                                allowType: !0
                            }
                        },
                        o = s;
                    for (let r = 0; r < t.length; r++) {
                        let s = t[r];
                        switch (s) {
                            case "(":
                                o.state.allowType && "" === o.type ? o.type = "tuple" : o.state.allowParams || n(r), o.state.allowType = !1, o.type = ah(o.type), o.components = [i(o)], o = o.components[0];
                                break;
                            case ")":
                                delete o.state, "indexed" === o.name && (e || n(r), o.indexed = !0, o.name = ""), rh(o.type, o.name) && (o.name = ""), o.type = ah(o.type);
                                let t = o;
                                o = o.parent, o || n(r), delete t.parent, o.state.allowParams = !1, o.state.allowName = !0, o.state.allowArray = !0;
                                break;
                            case ",":
                                delete o.state, "indexed" === o.name && (e || n(r), o.indexed = !0, o.name = ""), rh(o.type, o.name) && (o.name = ""), o.type = ah(o.type);
                                let a = i(o.parent);
                                o.parent.components.push(a), delete o.parent, o = a;
                                break;
                            case " ":
                                o.state.allowType && "" !== o.type && (o.type = ah(o.type), delete o.state.allowType, o.state.allowName = !0, o.state.allowParams = !0), o.state.allowName && "" !== o.name && ("indexed" === o.name ? (e || n(r), o.indexed && n(r), o.indexed = !0, o.name = "") : rh(o.type, o.name) ? o.name = "" : o.state.allowName = !1);
                                break;
                            case "[":
                                o.state.allowArray || n(r), o.type += s, o.state.allowArray = !1, o.state.allowName = !1, o.state.readArray = !0;
                                break;
                            case "]":
                                o.state.readArray || n(r), o.type += s, o.state.readArray = !1, o.state.allowArray = !0, o.state.allowName = !0;
                                break;
                            default:
                                o.state.allowType ? (o.type += s, o.state.allowParams = !0, o.state.allowArray = !0) : o.state.allowName ? (o.name += s, delete o.state.allowArray) : o.state.readArray ? o.type += s : n(r)
                        }
                    }
                    return o.parent && $u.throwArgumentError("unexpected eof", "param", t), delete s.state, "indexed" === o.name ? (e || n(r.length - 7), o.indexed && n(r.length - 7), o.indexed = !0, o.name = "") : rh(o.type, o.name) && (o.name = ""), s.type = ah(s.type), s
                }(t, !!e), oh.fromObject({
                    name: r.name,
                    type: r.type,
                    indexed: r.indexed,
                    components: r.components
                });
                var r
            }
            static isParamType(t) {
                return !(null == t || !t._isParamType)
            }
        }

        function ah(t) {
            return t.match(/^uint($|[^1-9])/) ? t = "uint256" + t.substring(4) : t.match(/^int($|[^1-9])/) && (t = "int256" + t.substring(3)), t
        }
        const ch = new Da(Xu);
        class uh {
            constructor(t, e, r, n) {
                this.name = t, this.type = e, this.localName = r, this.dynamic = n
            }
            _throwError(t, e) {
                ch.throwArgumentError(t, this.localName, e)
            }
        }
        class hh {
            constructor(t) {
                Tu(this, "wordSize", t || 32), this._data = [], this._dataLength = 0, this._padding = new Uint8Array(t)
            }
            get data() {
                return $a(this._data)
            }
            get length() {
                return this._dataLength
            }
            _writeData(t) {
                return this._data.push(t), this._dataLength += t.length, t.length
            }
            appendWriter(t) {
                return this._writeData(za(t._data))
            }
            writeBytes(t) {
                let e = Ha(t);
                const r = e.length % this.wordSize;
                return r && (e = za([e, this._padding.slice(r)])), this._writeData(e)
            }
            _getValue(t) {
                let e = Ha(gc.from(t));
                return e.length > this.wordSize && ch.throwError("value out-of-bounds", Da.errors.BUFFER_OVERRUN, {
                    length: this.wordSize,
                    offset: e.length
                }), e.length % this.wordSize && (e = za([this._padding.slice(e.length % this.wordSize), e])), e
            }
            writeValue(t) {
                return this._writeData(this._getValue(t))
            }
            writeUpdatableValue() {
                const t = this._data.length;
                return this._data.push(this._padding), this._dataLength += this.wordSize, e => {
                    this._data[t] = this._getValue(e)
                }
            }
        }
        class lh {
            constructor(t, e, r, n) {
                Tu(this, "_data", Ha(t)), Tu(this, "wordSize", e || 32), Tu(this, "_coerceFunc", r), Tu(this, "allowLoose", n), this._offset = 0
            }
            get data() {
                return Ya(this._data)
            }
            get consumed() {
                return this._offset
            }
            static coerce(t, e) {
                let r = t.match("^u?int([0-9]+)$");
                return r && parseInt(r[1]) <= 48 && (e = e.toNumber()), e
            }
            coerce(t, e) {
                return this._coerceFunc ? this._coerceFunc(t, e) : lh.coerce(t, e)
            }
            _peekBytes(t, e, r) {
                let n = Math.ceil(e / this.wordSize) * this.wordSize;
                return this._offset + n > this._data.length && (this.allowLoose && r && this._offset + e <= this._data.length ? n = e : ch.throwError("data out-of-bounds", Da.errors.BUFFER_OVERRUN, {
                    length: this._data.length,
                    offset: this._offset + n
                })), this._data.slice(this._offset, this._offset + n)
            }
            subReader(t) {
                return new lh(this._data.slice(this._offset + t), this.wordSize, this._coerceFunc, this.allowLoose)
            }
            readBytes(t, e) {
                let r = this._peekBytes(0, t, !!e);
                return this._offset += r.length, r.slice(0, t)
            }
            readValue() {
                return gc.from(this.readBytes(this.wordSize))
            }
        }
        class dh extends uh {
            constructor(t) {
                super("address", "address", t, !1)
            }
            defaultValue() {
                return "0x0000000000000000000000000000000000000000"
            }
            encode(t, e) {
                try {
                    e = Eu(e)
                } catch (t) {
                    this._throwError(t.message, e)
                }
                return t.writeValue(e)
            }
            decode(t) {
                return Eu(ec(t.readValue().toHexString(), 20))
            }
        }
        class fh extends uh {
            constructor(t) {
                super(t.name, t.type, void 0, t.dynamic), this.coder = t
            }
            defaultValue() {
                return this.coder.defaultValue()
            }
            encode(t, e) {
                return this.coder.encode(t, e)
            }
            decode(t) {
                return this.coder.decode(t)
            }
        }
        const ph = new Da(Xu);

        function mh(t, e, r) {
            let n = null;
            if (Array.isArray(r)) n = r;
            else if (r && "object" == typeof r) {
                let t = {};
                n = e.map(e => {
                    const n = e.localName;
                    return n || ph.throwError("cannot encode object for signature with missing names", Da.errors.INVALID_ARGUMENT, {
                        argument: "values",
                        coder: e,
                        value: r
                    }), t[n] && ph.throwError("cannot encode object for signature with duplicate names", Da.errors.INVALID_ARGUMENT, {
                        argument: "values",
                        coder: e,
                        value: r
                    }), t[n] = !0, r[n]
                })
            } else ph.throwArgumentError("invalid tuple value", "tuple", r);
            e.length !== n.length && ph.throwArgumentError("types/value length mismatch", "tuple", r);
            let i = new hh(t.wordSize),
                s = new hh(t.wordSize),
                o = [];
            e.forEach((t, e) => {
                let r = n[e];
                if (t.dynamic) {
                    let e = s.length;
                    t.encode(s, r);
                    let n = i.writeUpdatableValue();
                    o.push(t => {
                        n(t + e)
                    })
                } else t.encode(i, r)
            }), o.forEach(t => {
                t(i.length)
            });
            let a = t.appendWriter(i);
            return a += t.appendWriter(s), a
        }

        function gh(t, e) {
            let r = [],
                n = t.subReader(0);
            e.forEach(e => {
                let i = null;
                if (e.dynamic) {
                    let r = t.readValue(),
                        s = n.subReader(r.toNumber());
                    try {
                        i = e.decode(s)
                    } catch (t) {
                        if (t.code === Da.errors.BUFFER_OVERRUN) throw t;
                        i = t, i.baseType = e.name, i.name = e.localName, i.type = e.type
                    }
                } else try {
                    i = e.decode(t)
                } catch (t) {
                    if (t.code === Da.errors.BUFFER_OVERRUN) throw t;
                    i = t, i.baseType = e.name, i.name = e.localName, i.type = e.type
                }
                null != i && r.push(i)
            });
            const i = e.reduce((t, e) => {
                const r = e.localName;
                return r && (t[r] || (t[r] = 0), t[r]++), t
            }, {});
            e.forEach((t, e) => {
                let n = t.localName;
                if (!n || 1 !== i[n]) return;
                if ("length" === n && (n = "_length"), null != r[n]) return;
                const s = r[e];
                s instanceof Error ? Object.defineProperty(r, n, {
                    enumerable: !0,
                    get: () => {
                        throw s
                    }
                }) : r[n] = s
            });
            for (let t = 0; t < r.length; t++) {
                const e = r[t];
                e instanceof Error && Object.defineProperty(r, t, {
                    enumerable: !0,
                    get: () => {
                        throw e
                    }
                })
            }
            return Object.freeze(r)
        }
        class yh extends uh {
            constructor(t, e, r) {
                super("array", t.type + "[" + (e >= 0 ? e : "") + "]", r, -1 === e || t.dynamic), this.coder = t, this.length = e
            }
            defaultValue() {
                const t = this.coder.defaultValue(),
                    e = [];
                for (let r = 0; r < this.length; r++) e.push(t);
                return e
            }
            encode(t, e) {
                Array.isArray(e) || this._throwError("expected array value", e);
                let r = this.length; - 1 === r && (r = e.length, t.writeValue(e.length)), ph.checkArgumentCount(e.length, r, "coder array" + (this.localName ? " " + this.localName : ""));
                let n = [];
                for (let t = 0; t < e.length; t++) n.push(this.coder);
                return mh(t, n, e)
            }
            decode(t) {
                let e = this.length; - 1 === e && (e = t.readValue().toNumber(), 32 * e > t._data.length && ph.throwError("insufficient data length", Da.errors.BUFFER_OVERRUN, {
                    length: t._data.length,
                    count: e
                }));
                let r = [];
                for (let t = 0; t < e; t++) r.push(new fh(this.coder));
                return t.coerce(this.name, gh(t, r))
            }
        }
        class wh extends uh {
            constructor(t) {
                super("bool", "bool", t, !1)
            }
            defaultValue() {
                return !1
            }
            encode(t, e) {
                return t.writeValue(e ? 1 : 0)
            }
            decode(t) {
                return t.coerce(this.type, !t.readValue().isZero())
            }
        }
        class vh extends uh {
            constructor(t, e) {
                super(t, t, e, !0)
            }
            defaultValue() {
                return "0x"
            }
            encode(t, e) {
                e = Ha(e);
                let r = t.writeValue(e.length);
                return r += t.writeBytes(e), r
            }
            decode(t) {
                return t.readBytes(t.readValue().toNumber(), !0)
            }
        }
        class Ah extends vh {
            constructor(t) {
                super("bytes", t)
            }
            decode(t) {
                return t.coerce(this.name, Ya(super.decode(t)))
            }
        }
        class bh extends uh {
            constructor(t, e) {
                let r = "bytes" + String(t);
                super(r, r, e, !1), this.size = t
            }
            defaultValue() {
                return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + 2 * this.size)
            }
            encode(t, e) {
                let r = Ha(e);
                return r.length !== this.size && this._throwError("incorrect data length", e), t.writeBytes(r)
            }
            decode(t) {
                return t.coerce(this.name, Ya(t.readBytes(this.size)))
            }
        }
        class Eh extends uh {
            constructor(t) {
                super("null", "", t, !1)
            }
            defaultValue() {
                return null
            }
            encode(t, e) {
                return null != e && this._throwError("not null", e), t.writeBytes([])
            }
            decode(t) {
                return t.readBytes(0), t.coerce(this.name, null)
            }
        }
        class _h extends uh {
            constructor(t, e, r) {
                const n = (e ? "int" : "uint") + 8 * t;
                super(n, n, r, !1), this.size = t, this.signed = e
            }
            defaultValue() {
                return 0
            }
            encode(t, e) {
                let r = gc.from(e),
                    n = Rc.mask(8 * t.wordSize);
                if (this.signed) {
                    let t = n.mask(8 * this.size - 1);
                    (r.gt(t) || r.lt(t.add(_c).mul(bc))) && this._throwError("value out-of-bounds", e)
                } else(r.lt(Ec) || r.gt(n.mask(8 * this.size))) && this._throwError("value out-of-bounds", e);
                return r = r.toTwos(8 * this.size).mask(8 * this.size), this.signed && (r = r.fromTwos(8 * this.size).toTwos(8 * t.wordSize)), t.writeValue(r)
            }
            decode(t) {
                let e = t.readValue().mask(8 * this.size);
                return this.signed && (e = e.fromTwos(8 * this.size)), t.coerce(this.name, e)
            }
        }
        class Rh extends vh {
            constructor(t) {
                super("string", t)
            }
            defaultValue() {
                return ""
            }
            encode(t, e) {
                return super.encode(t, Pc(e))
            }
            decode(t) {
                return Cc(super.decode(t))
            }
        }
        class Th extends uh {
            constructor(t, e) {
                let r = !1;
                const n = [];
                t.forEach(t => {
                    t.dynamic && (r = !0), n.push(t.type)
                });
                super("tuple", "tuple(" + n.join(",") + ")", e, r), this.coders = t
            }
            defaultValue() {
                const t = [];
                this.coders.forEach(e => {
                    t.push(e.defaultValue())
                });
                const e = this.coders.reduce((t, e) => {
                    const r = e.localName;
                    return r && (t[r] || (t[r] = 0), t[r]++), t
                }, {});
                return this.coders.forEach((r, n) => {
                    let i = r.localName;
                    i && 1 === e[i] && ("length" === i && (i = "_length"), null == t[i] && (t[i] = t[n]))
                }), Object.freeze(t)
            }
            encode(t, e) {
                return mh(t, this.coders, e)
            }
            decode(t) {
                return t.coerce(this.name, gh(t, this.coders))
            }
        }
        const Ih = new Da(Xu),
            kh = new RegExp(/^bytes([0-9]*)$/),
            Sh = new RegExp(/^(u?int)([0-9]*)$/);
        class Nh {
            constructor(t) {
                Tu(this, "coerceFunc", t || null)
            }
            _getCoder(t) {
                switch (t.baseType) {
                    case "address":
                        return new dh(t.name);
                    case "bool":
                        return new wh(t.name);
                    case "string":
                        return new Rh(t.name);
                    case "bytes":
                        return new Ah(t.name);
                    case "array":
                        return new yh(this._getCoder(t.arrayChildren), t.arrayLength, t.name);
                    case "tuple":
                        return new Th((t.components || []).map(t => this._getCoder(t)), t.name);
                    case "":
                        return new Eh(t.name)
                }
                let e = t.type.match(Sh);
                if (e) {
                    let r = parseInt(e[2] || "256");
                    return (0 === r || r > 256 || r % 8 != 0) && Ih.throwArgumentError("invalid " + e[1] + " bit length", "param", t), new _h(r / 8, "int" === e[1], t.name)
                }
                if (e = t.type.match(kh), e) {
                    let r = parseInt(e[1]);
                    return (0 === r || r > 32) && Ih.throwArgumentError("invalid bytes length", "param", t), new bh(r, t.name)
                }
                return Ih.throwArgumentError("invalid type", "type", t.type)
            }
            _getWordSize() {
                return 32
            }
            _getReader(t, e) {
                return new lh(t, this._getWordSize(), this.coerceFunc, e)
            }
            _getWriter() {
                return new hh(this._getWordSize())
            }
            getDefaultValue(t) {
                const e = t.map(t => this._getCoder(oh.from(t)));
                return new Th(e, "_").defaultValue()
            }
            encode(t, e) {
                t.length !== e.length && Ih.throwError("types/values length mismatch", Da.errors.INVALID_ARGUMENT, {
                    count: {
                        types: t.length,
                        values: e.length
                    },
                    value: {
                        types: t,
                        values: e
                    }
                });
                const r = t.map(t => this._getCoder(oh.from(t))),
                    n = new Th(r, "_"),
                    i = this._getWriter();
                return n.encode(i, e), i.data
            }
            decode(t, e, r) {
                const n = t.map(t => this._getCoder(oh.from(t)));
                return new Th(n, "_").decode(this._getReader(Ha(e), r))
            }
        }
        const Oh = new Nh;
        var Ph = Object.freeze({
            __proto__: null,
            AbiCoder: Nh,
            FormatTypes: ih,
            ParamType: oh,
            defaultAbiCoder: Oh
        });
        var Ch = function(t, e, r, n) {
            return new(r || (r = Promise))(function(i, s) {
                function o(t) {
                    try {
                        c(n.next(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function a(t) {
                    try {
                        c(n.throw(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                        t(e)
                    })).then(o, a)
                }
                c((n = n.apply(t, e || [])).next())
            })
        };
        const xh = new Da("abstract-provider/5.8.0");
        class Mh extends xu {
            static isForkEvent(t) {
                return !(!t || !t._isForkEvent)
            }
        }
        class Uh {
            constructor() {
                xh.checkAbstract(new.target, Uh), Tu(this, "_isProvider", !0)
            }
            getFeeData() {
                return Ch(this, void 0, void 0, function*() {
                    const {
                        block: t,
                        gasPrice: e
                    } = yield ku({
                        block: this.getBlock("latest"),
                        gasPrice: this.getGasPrice().catch(t => null)
                    });
                    let r = null,
                        n = null,
                        i = null;
                    return t && t.baseFeePerGas && (r = t.baseFeePerGas, i = gc.from("1500000000"), n = t.baseFeePerGas.mul(2).add(i)), {
                        lastBaseFeePerGas: r,
                        maxFeePerGas: n,
                        maxPriorityFeePerGas: i,
                        gasPrice: e
                    }
                })
            }
            addListener(t, e) {
                return this.on(t, e)
            }
            removeListener(t, e) {
                return this.off(t, e)
            }
            static isProvider(t) {
                return !(!t || !t._isProvider)
            }
        }
        const Dh = new Da("networks/5.8.0");

        function Lh(t) {
            const e = function(e, r) {
                null == r && (r = {});
                const n = [];
                if (e.InfuraProvider && "-" !== r.infura) try {
                    n.push(new e.InfuraProvider(t, r.infura))
                } catch (t) {}
                if (e.EtherscanProvider && "-" !== r.etherscan) try {
                    n.push(new e.EtherscanProvider(t, r.etherscan))
                } catch (t) {}
                if (e.AlchemyProvider && "-" !== r.alchemy) try {
                    n.push(new e.AlchemyProvider(t, r.alchemy))
                } catch (t) {}
                if (e.PocketProvider && "-" !== r.pocket) {
                    const i = ["goerli", "ropsten", "rinkeby", "sepolia"];
                    try {
                        const s = new e.PocketProvider(t, r.pocket);
                        s.network && -1 === i.indexOf(s.network.name) && n.push(s)
                    } catch (t) {}
                }
                if (e.CloudflareProvider && "-" !== r.cloudflare) try {
                    n.push(new e.CloudflareProvider(t))
                } catch (t) {}
                if (e.AnkrProvider && "-" !== r.ankr) try {
                    const i = ["ropsten"],
                        s = new e.AnkrProvider(t, r.ankr);
                    s.network && -1 === i.indexOf(s.network.name) && n.push(s)
                } catch (t) {}
                if (e.QuickNodeProvider && "-" !== r.quicknode) try {
                    n.push(new e.QuickNodeProvider(t, r.quicknode))
                } catch (t) {}
                if (0 === n.length) return null;
                if (e.FallbackProvider) {
                    let i = 1;
                    return null != r.quorum ? i = r.quorum : "homestead" === t && (i = 2), new e.FallbackProvider(n, i)
                }
                return n[0]
            };
            return e.renetwork = function(t) {
                return Lh(t)
            }, e
        }

        function Bh(t, e) {
            const r = function(r, n) {
                return r.JsonRpcProvider ? new r.JsonRpcProvider(t, e) : null
            };
            return r.renetwork = function(e) {
                return Bh(t, e)
            }, r
        }
        const Fh = {
                chainId: 1,
                ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                name: "homestead",
                _defaultProvider: Lh("homestead")
            },
            qh = {
                chainId: 3,
                ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                name: "ropsten",
                _defaultProvider: Lh("ropsten")
            },
            Gh = {
                chainId: 63,
                name: "classicMordor",
                _defaultProvider: Bh("https://www.ethercluster.com/mordor", "classicMordor")
            },
            jh = {
                unspecified: {
                    chainId: 0,
                    name: "unspecified"
                },
                homestead: Fh,
                mainnet: Fh,
                morden: {
                    chainId: 2,
                    name: "morden"
                },
                ropsten: qh,
                testnet: qh,
                rinkeby: {
                    chainId: 4,
                    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                    name: "rinkeby",
                    _defaultProvider: Lh("rinkeby")
                },
                kovan: {
                    chainId: 42,
                    name: "kovan",
                    _defaultProvider: Lh("kovan")
                },
                goerli: {
                    chainId: 5,
                    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                    name: "goerli",
                    _defaultProvider: Lh("goerli")
                },
                kintsugi: {
                    chainId: 1337702,
                    name: "kintsugi"
                },
                sepolia: {
                    chainId: 11155111,
                    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                    name: "sepolia",
                    _defaultProvider: Lh("sepolia")
                },
                holesky: {
                    chainId: 17e3,
                    name: "holesky",
                    _defaultProvider: Lh("holesky")
                },
                classic: {
                    chainId: 61,
                    name: "classic",
                    _defaultProvider: Bh("https://www.ethercluster.com/etc", "classic")
                },
                classicMorden: {
                    chainId: 62,
                    name: "classicMorden"
                },
                classicMordor: Gh,
                classicTestnet: Gh,
                classicKotti: {
                    chainId: 6,
                    name: "classicKotti",
                    _defaultProvider: Bh("https://www.ethercluster.com/kotti", "classicKotti")
                },
                xdai: {
                    chainId: 100,
                    name: "xdai"
                },
                matic: {
                    chainId: 137,
                    name: "matic",
                    _defaultProvider: Lh("matic")
                },
                maticmum: {
                    chainId: 80001,
                    name: "maticmum",
                    _defaultProvider: Lh("maticmum")
                },
                optimism: {
                    chainId: 10,
                    name: "optimism",
                    _defaultProvider: Lh("optimism")
                },
                "optimism-kovan": {
                    chainId: 69,
                    name: "optimism-kovan"
                },
                "optimism-goerli": {
                    chainId: 420,
                    name: "optimism-goerli"
                },
                "optimism-sepolia": {
                    chainId: 11155420,
                    name: "optimism-sepolia"
                },
                arbitrum: {
                    chainId: 42161,
                    name: "arbitrum"
                },
                "arbitrum-rinkeby": {
                    chainId: 421611,
                    name: "arbitrum-rinkeby"
                },
                "arbitrum-goerli": {
                    chainId: 421613,
                    name: "arbitrum-goerli"
                },
                "arbitrum-sepolia": {
                    chainId: 421614,
                    name: "arbitrum-sepolia"
                },
                bnb: {
                    chainId: 56,
                    name: "bnb"
                },
                bnbt: {
                    chainId: 97,
                    name: "bnbt"
                }
            };

        function Hh(t) {
            if (null == t) return null;
            if ("number" == typeof t) {
                for (const e in jh) {
                    const r = jh[e];
                    if (r.chainId === t) return {
                        name: r.name,
                        chainId: r.chainId,
                        ensAddress: r.ensAddress || null,
                        _defaultProvider: r._defaultProvider || null
                    }
                }
                return {
                    chainId: t,
                    name: "unknown"
                }
            }
            if ("string" == typeof t) {
                const e = jh[t];
                return null == e ? null : {
                    name: e.name,
                    chainId: e.chainId,
                    ensAddress: e.ensAddress,
                    _defaultProvider: e._defaultProvider || null
                }
            }
            const e = jh[t.name];
            if (!e) return "number" != typeof t.chainId && Dh.throwArgumentError("invalid network chainId", "network", t), t;
            0 !== t.chainId && t.chainId !== e.chainId && Dh.throwArgumentError("network chainId mismatch", "network", t);
            let r = t._defaultProvider || null;
            var n;
            return null == r && e._defaultProvider && (r = (n = e._defaultProvider) && "function" == typeof n.renetwork ? e._defaultProvider.renetwork(t) : e._defaultProvider), {
                name: t.name,
                chainId: e.chainId,
                ensAddress: t.ensAddress || e.ensAddress || null,
                _defaultProvider: r
            }
        }
        class zh {
            constructor(t) {
                Tu(this, "alphabet", t), Tu(this, "base", t.length), Tu(this, "_alphabetMap", {}), Tu(this, "_leader", t.charAt(0));
                for (let e = 0; e < t.length; e++) this._alphabetMap[t.charAt(e)] = e
            }
            encode(t) {
                let e = Ha(t);
                if (0 === e.length) return "";
                let r = [0];
                for (let t = 0; t < e.length; ++t) {
                    let n = e[t];
                    for (let t = 0; t < r.length; ++t) n += r[t] << 8, r[t] = n % this.base, n = n / this.base | 0;
                    for (; n > 0;) r.push(n % this.base), n = n / this.base | 0
                }
                let n = "";
                for (let t = 0; 0 === e[t] && t < e.length - 1; ++t) n += this._leader;
                for (let t = r.length - 1; t >= 0; --t) n += this.alphabet[r[t]];
                return n
            }
            decode(t) {
                if ("string" != typeof t) throw new TypeError("Expected String");
                let e = [];
                if (0 === t.length) return new Uint8Array(e);
                e.push(0);
                for (let r = 0; r < t.length; r++) {
                    let n = this._alphabetMap[t[r]];
                    if (void 0 === n) throw new Error("Non-base" + this.base + " character");
                    let i = n;
                    for (let t = 0; t < e.length; ++t) i += e[t] * this.base, e[t] = 255 & i, i >>= 8;
                    for (; i > 0;) e.push(255 & i), i >>= 8
                }
                for (let r = 0; t[r] === this._leader && r < t.length - 1; ++r) e.push(0);
                return Ha(new Uint8Array(e.reverse()))
            }
        }
        new zh("abcdefghijklmnopqrstuvwxyz234567");
        const Kh = new zh("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
        var Vh, Wh, Jh = {},
            Yh = {};

        function Qh() {
            if (Wh) return Vh;

            function t(t, e) {
                if (!t) throw new Error(e || "Assertion failed")
            }
            return Wh = 1, Vh = t, t.equal = function(t, e, r) {
                if (t != e) throw new Error(r || "Assertion failed: " + t + " != " + e)
            }, Vh
        }
        var Xh, $h, Zh = {
            exports: {}
        };

        function tl() {
            if ($h) return Yh;
            $h = 1;
            var t = Qh(),
                e = (Xh || (Xh = 1, "function" == typeof Object.create ? Zh.exports = function(t, e) {
                    e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }))
                } : Zh.exports = function(t, e) {
                    if (e) {
                        t.super_ = e;
                        var r = function() {};
                        r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                    }
                }), Zh.exports);

            function r(t, e) {
                return 55296 == (64512 & t.charCodeAt(e)) && (!(e < 0 || e + 1 >= t.length) && 56320 == (64512 & t.charCodeAt(e + 1)))
            }

            function n(t) {
                return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (255 & t) << 24) >>> 0
            }

            function i(t) {
                return 1 === t.length ? "0" + t : t
            }

            function s(t) {
                return 7 === t.length ? "0" + t : 6 === t.length ? "00" + t : 5 === t.length ? "000" + t : 4 === t.length ? "0000" + t : 3 === t.length ? "00000" + t : 2 === t.length ? "000000" + t : 1 === t.length ? "0000000" + t : t
            }
            return Yh.inherits = e, Yh.toArray = function(t, e) {
                if (Array.isArray(t)) return t.slice();
                if (!t) return [];
                var n = [];
                if ("string" == typeof t)
                    if (e) {
                        if ("hex" === e)
                            for ((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t), s = 0; s < t.length; s += 2) n.push(parseInt(t[s] + t[s + 1], 16))
                    } else
                        for (var i = 0, s = 0; s < t.length; s++) {
                            var o = t.charCodeAt(s);
                            o < 128 ? n[i++] = o : o < 2048 ? (n[i++] = o >> 6 | 192, n[i++] = 63 & o | 128) : r(t, s) ? (o = 65536 + ((1023 & o) << 10) + (1023 & t.charCodeAt(++s)), n[i++] = o >> 18 | 240, n[i++] = o >> 12 & 63 | 128, n[i++] = o >> 6 & 63 | 128, n[i++] = 63 & o | 128) : (n[i++] = o >> 12 | 224, n[i++] = o >> 6 & 63 | 128, n[i++] = 63 & o | 128)
                        } else
                            for (s = 0; s < t.length; s++) n[s] = 0 | t[s];
                return n
            }, Yh.toHex = function(t) {
                for (var e = "", r = 0; r < t.length; r++) e += i(t[r].toString(16));
                return e
            }, Yh.htonl = n, Yh.toHex32 = function(t, e) {
                for (var r = "", i = 0; i < t.length; i++) {
                    var o = t[i];
                    "little" === e && (o = n(o)), r += s(o.toString(16))
                }
                return r
            }, Yh.zero2 = i, Yh.zero8 = s, Yh.join32 = function(e, r, n, i) {
                var s = n - r;
                t(s % 4 == 0);
                for (var o = new Array(s / 4), a = 0, c = r; a < o.length; a++, c += 4) {
                    var u;
                    u = "big" === i ? e[c] << 24 | e[c + 1] << 16 | e[c + 2] << 8 | e[c + 3] : e[c + 3] << 24 | e[c + 2] << 16 | e[c + 1] << 8 | e[c], o[a] = u >>> 0
                }
                return o
            }, Yh.split32 = function(t, e) {
                for (var r = new Array(4 * t.length), n = 0, i = 0; n < t.length; n++, i += 4) {
                    var s = t[n];
                    "big" === e ? (r[i] = s >>> 24, r[i + 1] = s >>> 16 & 255, r[i + 2] = s >>> 8 & 255, r[i + 3] = 255 & s) : (r[i + 3] = s >>> 24, r[i + 2] = s >>> 16 & 255, r[i + 1] = s >>> 8 & 255, r[i] = 255 & s)
                }
                return r
            }, Yh.rotr32 = function(t, e) {
                return t >>> e | t << 32 - e
            }, Yh.rotl32 = function(t, e) {
                return t << e | t >>> 32 - e
            }, Yh.sum32 = function(t, e) {
                return t + e >>> 0
            }, Yh.sum32_3 = function(t, e, r) {
                return t + e + r >>> 0
            }, Yh.sum32_4 = function(t, e, r, n) {
                return t + e + r + n >>> 0
            }, Yh.sum32_5 = function(t, e, r, n, i) {
                return t + e + r + n + i >>> 0
            }, Yh.sum64 = function(t, e, r, n) {
                var i = t[e],
                    s = n + t[e + 1] >>> 0,
                    o = (s < n ? 1 : 0) + r + i;
                t[e] = o >>> 0, t[e + 1] = s
            }, Yh.sum64_hi = function(t, e, r, n) {
                return (e + n >>> 0 < e ? 1 : 0) + t + r >>> 0
            }, Yh.sum64_lo = function(t, e, r, n) {
                return e + n >>> 0
            }, Yh.sum64_4_hi = function(t, e, r, n, i, s, o, a) {
                var c = 0,
                    u = e;
                return c += (u = u + n >>> 0) < e ? 1 : 0, c += (u = u + s >>> 0) < s ? 1 : 0, t + r + i + o + (c += (u = u + a >>> 0) < a ? 1 : 0) >>> 0
            }, Yh.sum64_4_lo = function(t, e, r, n, i, s, o, a) {
                return e + n + s + a >>> 0
            }, Yh.sum64_5_hi = function(t, e, r, n, i, s, o, a, c, u) {
                var h = 0,
                    l = e;
                return h += (l = l + n >>> 0) < e ? 1 : 0, h += (l = l + s >>> 0) < s ? 1 : 0, h += (l = l + a >>> 0) < a ? 1 : 0, t + r + i + o + c + (h += (l = l + u >>> 0) < u ? 1 : 0) >>> 0
            }, Yh.sum64_5_lo = function(t, e, r, n, i, s, o, a, c, u) {
                return e + n + s + a + u >>> 0
            }, Yh.rotr64_hi = function(t, e, r) {
                return (e << 32 - r | t >>> r) >>> 0
            }, Yh.rotr64_lo = function(t, e, r) {
                return (t << 32 - r | e >>> r) >>> 0
            }, Yh.shr64_hi = function(t, e, r) {
                return t >>> r
            }, Yh.shr64_lo = function(t, e, r) {
                return (t << 32 - r | e >>> r) >>> 0
            }, Yh
        }
        var el, rl = {};

        function nl() {
            if (el) return rl;
            el = 1;
            var t = tl(),
                e = Qh();

            function r() {
                this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
            }
            return rl.BlockHash = r, r.prototype.update = function(e, r) {
                if (e = t.toArray(e, r), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
                    var n = (e = this.pending).length % this._delta8;
                    this.pending = e.slice(e.length - n, e.length), 0 === this.pending.length && (this.pending = null), e = t.join32(e, 0, e.length - n, this.endian);
                    for (var i = 0; i < e.length; i += this._delta32) this._update(e, i, i + this._delta32)
                }
                return this
            }, r.prototype.digest = function(t) {
                return this.update(this._pad()), e(null === this.pending), this._digest(t)
            }, r.prototype._pad = function() {
                var t = this.pendingTotal,
                    e = this._delta8,
                    r = e - (t + this.padLength) % e,
                    n = new Array(r + this.padLength);
                n[0] = 128;
                for (var i = 1; i < r; i++) n[i] = 0;
                if (t <<= 3, "big" === this.endian) {
                    for (var s = 8; s < this.padLength; s++) n[i++] = 0;
                    n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = t >>> 24 & 255, n[i++] = t >>> 16 & 255, n[i++] = t >>> 8 & 255, n[i++] = 255 & t
                } else
                    for (n[i++] = 255 & t, n[i++] = t >>> 8 & 255, n[i++] = t >>> 16 & 255, n[i++] = t >>> 24 & 255, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, s = 8; s < this.padLength; s++) n[i++] = 0;
                return n
            }, rl
        }
        var il, sl, ol, al, cl, ul, hl, ll, dl, fl, pl, ml, gl = {},
            yl = {};

        function wl() {
            if (il) return yl;
            il = 1;
            var t = tl().rotr32;

            function e(t, e, r) {
                return t & e ^ ~t & r
            }

            function r(t, e, r) {
                return t & e ^ t & r ^ e & r
            }

            function n(t, e, r) {
                return t ^ e ^ r
            }
            return yl.ft_1 = function(t, i, s, o) {
                return 0 === t ? e(i, s, o) : 1 === t || 3 === t ? n(i, s, o) : 2 === t ? r(i, s, o) : void 0
            }, yl.ch32 = e, yl.maj32 = r, yl.p32 = n, yl.s0_256 = function(e) {
                return t(e, 2) ^ t(e, 13) ^ t(e, 22)
            }, yl.s1_256 = function(e) {
                return t(e, 6) ^ t(e, 11) ^ t(e, 25)
            }, yl.g0_256 = function(e) {
                return t(e, 7) ^ t(e, 18) ^ e >>> 3
            }, yl.g1_256 = function(e) {
                return t(e, 17) ^ t(e, 19) ^ e >>> 10
            }, yl
        }

        function vl() {
            if (cl) return al;
            cl = 1;
            var t = tl(),
                e = nl(),
                r = wl(),
                n = Qh(),
                i = t.sum32,
                s = t.sum32_4,
                o = t.sum32_5,
                a = r.ch32,
                c = r.maj32,
                u = r.s0_256,
                h = r.s1_256,
                l = r.g0_256,
                d = r.g1_256,
                f = e.BlockHash,
                p = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

            function m() {
                if (!(this instanceof m)) return new m;
                f.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = p, this.W = new Array(64)
            }
            return t.inherits(m, f), al = m, m.blockSize = 512, m.outSize = 256, m.hmacStrength = 192, m.padLength = 64, m.prototype._update = function(t, e) {
                for (var r = this.W, f = 0; f < 16; f++) r[f] = t[e + f];
                for (; f < r.length; f++) r[f] = s(d(r[f - 2]), r[f - 7], l(r[f - 15]), r[f - 16]);
                var p = this.h[0],
                    m = this.h[1],
                    g = this.h[2],
                    y = this.h[3],
                    w = this.h[4],
                    v = this.h[5],
                    A = this.h[6],
                    b = this.h[7];
                for (n(this.k.length === r.length), f = 0; f < r.length; f++) {
                    var E = o(b, h(w), a(w, v, A), this.k[f], r[f]),
                        _ = i(u(p), c(p, m, g));
                    b = A, A = v, v = w, w = i(y, E), y = g, g = m, m = p, p = i(E, _)
                }
                this.h[0] = i(this.h[0], p), this.h[1] = i(this.h[1], m), this.h[2] = i(this.h[2], g), this.h[3] = i(this.h[3], y), this.h[4] = i(this.h[4], w), this.h[5] = i(this.h[5], v), this.h[6] = i(this.h[6], A), this.h[7] = i(this.h[7], b)
            }, m.prototype._digest = function(e) {
                return "hex" === e ? t.toHex32(this.h, "big") : t.split32(this.h, "big")
            }, al
        }

        function Al() {
            if (dl) return ll;
            dl = 1;
            var t = tl(),
                e = nl(),
                r = Qh(),
                n = t.rotr64_hi,
                i = t.rotr64_lo,
                s = t.shr64_hi,
                o = t.shr64_lo,
                a = t.sum64,
                c = t.sum64_hi,
                u = t.sum64_lo,
                h = t.sum64_4_hi,
                l = t.sum64_4_lo,
                d = t.sum64_5_hi,
                f = t.sum64_5_lo,
                p = e.BlockHash,
                m = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

            function g() {
                if (!(this instanceof g)) return new g;
                p.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = m, this.W = new Array(160)
            }

            function y(t, e, r, n, i) {
                var s = t & r ^ ~t & i;
                return s < 0 && (s += 4294967296), s
            }

            function w(t, e, r, n, i, s) {
                var o = e & n ^ ~e & s;
                return o < 0 && (o += 4294967296), o
            }

            function v(t, e, r, n, i) {
                var s = t & r ^ t & i ^ r & i;
                return s < 0 && (s += 4294967296), s
            }

            function A(t, e, r, n, i, s) {
                var o = e & n ^ e & s ^ n & s;
                return o < 0 && (o += 4294967296), o
            }

            function b(t, e) {
                var r = n(t, e, 28) ^ n(e, t, 2) ^ n(e, t, 7);
                return r < 0 && (r += 4294967296), r
            }

            function E(t, e) {
                var r = i(t, e, 28) ^ i(e, t, 2) ^ i(e, t, 7);
                return r < 0 && (r += 4294967296), r
            }

            function _(t, e) {
                var r = n(t, e, 14) ^ n(t, e, 18) ^ n(e, t, 9);
                return r < 0 && (r += 4294967296), r
            }

            function R(t, e) {
                var r = i(t, e, 14) ^ i(t, e, 18) ^ i(e, t, 9);
                return r < 0 && (r += 4294967296), r
            }

            function T(t, e) {
                var r = n(t, e, 1) ^ n(t, e, 8) ^ s(t, e, 7);
                return r < 0 && (r += 4294967296), r
            }

            function I(t, e) {
                var r = i(t, e, 1) ^ i(t, e, 8) ^ o(t, e, 7);
                return r < 0 && (r += 4294967296), r
            }

            function k(t, e) {
                var r = n(t, e, 19) ^ n(e, t, 29) ^ s(t, e, 6);
                return r < 0 && (r += 4294967296), r
            }

            function S(t, e) {
                var r = i(t, e, 19) ^ i(e, t, 29) ^ o(t, e, 6);
                return r < 0 && (r += 4294967296), r
            }
            return t.inherits(g, p), ll = g, g.blockSize = 1024, g.outSize = 512, g.hmacStrength = 192, g.padLength = 128, g.prototype._prepareBlock = function(t, e) {
                for (var r = this.W, n = 0; n < 32; n++) r[n] = t[e + n];
                for (; n < r.length; n += 2) {
                    var i = k(r[n - 4], r[n - 3]),
                        s = S(r[n - 4], r[n - 3]),
                        o = r[n - 14],
                        a = r[n - 13],
                        c = T(r[n - 30], r[n - 29]),
                        u = I(r[n - 30], r[n - 29]),
                        d = r[n - 32],
                        f = r[n - 31];
                    r[n] = h(i, s, o, a, c, u, d, f), r[n + 1] = l(i, s, o, a, c, u, d, f)
                }
            }, g.prototype._update = function(t, e) {
                this._prepareBlock(t, e);
                var n = this.W,
                    i = this.h[0],
                    s = this.h[1],
                    o = this.h[2],
                    h = this.h[3],
                    l = this.h[4],
                    p = this.h[5],
                    m = this.h[6],
                    g = this.h[7],
                    T = this.h[8],
                    I = this.h[9],
                    k = this.h[10],
                    S = this.h[11],
                    N = this.h[12],
                    O = this.h[13],
                    P = this.h[14],
                    C = this.h[15];
                r(this.k.length === n.length);
                for (var x = 0; x < n.length; x += 2) {
                    var M = P,
                        U = C,
                        D = _(T, I),
                        L = R(T, I),
                        B = y(T, I, k, S, N),
                        F = w(T, I, k, S, N, O),
                        q = this.k[x],
                        G = this.k[x + 1],
                        j = n[x],
                        H = n[x + 1],
                        z = d(M, U, D, L, B, F, q, G, j, H),
                        K = f(M, U, D, L, B, F, q, G, j, H);
                    M = b(i, s), U = E(i, s), D = v(i, s, o, h, l), L = A(i, s, o, h, l, p);
                    var V = c(M, U, D, L),
                        W = u(M, U, D, L);
                    P = N, C = O, N = k, O = S, k = T, S = I, T = c(m, g, z, K), I = u(g, g, z, K), m = l, g = p, l = o, p = h, o = i, h = s, i = c(z, K, V, W), s = u(z, K, V, W)
                }
                a(this.h, 0, i, s), a(this.h, 2, o, h), a(this.h, 4, l, p), a(this.h, 6, m, g), a(this.h, 8, T, I), a(this.h, 10, k, S), a(this.h, 12, N, O), a(this.h, 14, P, C)
            }, g.prototype._digest = function(e) {
                return "hex" === e ? t.toHex32(this.h, "big") : t.split32(this.h, "big")
            }, ll
        }

        function bl() {
            return ml || (ml = 1, gl.sha1 = function() {
                if (ol) return sl;
                ol = 1;
                var t = tl(),
                    e = nl(),
                    r = wl(),
                    n = t.rotl32,
                    i = t.sum32,
                    s = t.sum32_5,
                    o = r.ft_1,
                    a = e.BlockHash,
                    c = [1518500249, 1859775393, 2400959708, 3395469782];

                function u() {
                    if (!(this instanceof u)) return new u;
                    a.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80)
                }
                return t.inherits(u, a), sl = u, u.blockSize = 512, u.outSize = 160, u.hmacStrength = 80, u.padLength = 64, u.prototype._update = function(t, e) {
                    for (var r = this.W, a = 0; a < 16; a++) r[a] = t[e + a];
                    for (; a < r.length; a++) r[a] = n(r[a - 3] ^ r[a - 8] ^ r[a - 14] ^ r[a - 16], 1);
                    var u = this.h[0],
                        h = this.h[1],
                        l = this.h[2],
                        d = this.h[3],
                        f = this.h[4];
                    for (a = 0; a < r.length; a++) {
                        var p = ~~(a / 20),
                            m = s(n(u, 5), o(p, h, l, d), f, r[a], c[p]);
                        f = d, d = l, l = n(h, 30), h = u, u = m
                    }
                    this.h[0] = i(this.h[0], u), this.h[1] = i(this.h[1], h), this.h[2] = i(this.h[2], l), this.h[3] = i(this.h[3], d), this.h[4] = i(this.h[4], f)
                }, u.prototype._digest = function(e) {
                    return "hex" === e ? t.toHex32(this.h, "big") : t.split32(this.h, "big")
                }, sl
            }(), gl.sha224 = function() {
                if (hl) return ul;
                hl = 1;
                var t = tl(),
                    e = vl();

                function r() {
                    if (!(this instanceof r)) return new r;
                    e.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
                }
                return t.inherits(r, e), ul = r, r.blockSize = 512, r.outSize = 224, r.hmacStrength = 192, r.padLength = 64, r.prototype._digest = function(e) {
                    return "hex" === e ? t.toHex32(this.h.slice(0, 7), "big") : t.split32(this.h.slice(0, 7), "big")
                }, ul
            }(), gl.sha256 = vl(), gl.sha384 = function() {
                if (pl) return fl;
                pl = 1;
                var t = tl(),
                    e = Al();

                function r() {
                    if (!(this instanceof r)) return new r;
                    e.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
                }
                return t.inherits(r, e), fl = r, r.blockSize = 1024, r.outSize = 384, r.hmacStrength = 192, r.padLength = 128, r.prototype._digest = function(e) {
                    return "hex" === e ? t.toHex32(this.h.slice(0, 12), "big") : t.split32(this.h.slice(0, 12), "big")
                }, fl
            }(), gl.sha512 = Al()), gl
        }
        var El, _l, Rl, Tl, Il = {};
        var kl = (Tl || (Tl = 1, function(t) {
                var e = t;
                e.utils = tl(), e.common = nl(), e.sha = bl(), e.ripemd = function() {
                    if (El) return Il;
                    El = 1;
                    var t = tl(),
                        e = nl(),
                        r = t.rotl32,
                        n = t.sum32,
                        i = t.sum32_3,
                        s = t.sum32_4,
                        o = e.BlockHash;

                    function a() {
                        if (!(this instanceof a)) return new a;
                        o.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
                    }

                    function c(t, e, r, n) {
                        return t <= 15 ? e ^ r ^ n : t <= 31 ? e & r | ~e & n : t <= 47 ? (e | ~r) ^ n : t <= 63 ? e & n | r & ~n : e ^ (r | ~n)
                    }

                    function u(t) {
                        return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838
                    }

                    function h(t) {
                        return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0
                    }
                    t.inherits(a, o), Il.ripemd160 = a, a.blockSize = 512, a.outSize = 160, a.hmacStrength = 192, a.padLength = 64, a.prototype._update = function(t, e) {
                        for (var o = this.h[0], a = this.h[1], m = this.h[2], g = this.h[3], y = this.h[4], w = o, v = a, A = m, b = g, E = y, _ = 0; _ < 80; _++) {
                            var R = n(r(s(o, c(_, a, m, g), t[l[_] + e], u(_)), f[_]), y);
                            o = y, y = g, g = r(m, 10), m = a, a = R, R = n(r(s(w, c(79 - _, v, A, b), t[d[_] + e], h(_)), p[_]), E), w = E, E = b, b = r(A, 10), A = v, v = R
                        }
                        R = i(this.h[1], m, b), this.h[1] = i(this.h[2], g, E), this.h[2] = i(this.h[3], y, w), this.h[3] = i(this.h[4], o, v), this.h[4] = i(this.h[0], a, A), this.h[0] = R
                    }, a.prototype._digest = function(e) {
                        return "hex" === e ? t.toHex32(this.h, "little") : t.split32(this.h, "little")
                    };
                    var l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                        d = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                        f = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                        p = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
                    return Il
                }(), e.hmac = function() {
                    if (Rl) return _l;
                    Rl = 1;
                    var t = tl(),
                        e = Qh();

                    function r(e, n, i) {
                        if (!(this instanceof r)) return new r(e, n, i);
                        this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(t.toArray(n, i))
                    }
                    return _l = r, r.prototype._init = function(t) {
                        t.length > this.blockSize && (t = (new this.Hash).update(t).digest()), e(t.length <= this.blockSize);
                        for (var r = t.length; r < this.blockSize; r++) t.push(0);
                        for (r = 0; r < t.length; r++) t[r] ^= 54;
                        for (this.inner = (new this.Hash).update(t), r = 0; r < t.length; r++) t[r] ^= 106;
                        this.outer = (new this.Hash).update(t)
                    }, r.prototype.update = function(t, e) {
                        return this.inner.update(t, e), this
                    }, r.prototype.digest = function(t) {
                        return this.outer.update(this.inner.digest()), this.outer.digest(t)
                    }, _l
                }(), e.sha1 = e.sha.sha1, e.sha256 = e.sha.sha256, e.sha224 = e.sha.sha224, e.sha384 = e.sha.sha384, e.sha512 = e.sha.sha512, e.ripemd160 = e.ripemd.ripemd160
            }(Jh)), Jh),
            Sl = Qr(kl);

        function Nl(t) {
            return "0x" + Sl.sha256().update(Ha(t)).digest("hex")
        }
        var Ol = function(t, e, r, n) {
            return new(r || (r = Promise))(function(i, s) {
                function o(t) {
                    try {
                        c(n.next(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function a(t) {
                    try {
                        c(n.throw(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                        t(e)
                    })).then(o, a)
                }
                c((n = n.apply(t, e || [])).next())
            })
        };

        function Pl(t, e) {
            return Ol(this, void 0, void 0, function*() {
                null == e && (e = {});
                const r = {
                    method: e.method || "GET",
                    headers: e.headers || {},
                    body: e.body || void 0
                };
                if (!0 !== e.skipFetchSetup && (r.mode = "cors", r.cache = "no-cache", r.credentials = "same-origin", r.redirect = "follow", r.referrer = "client"), null != e.fetchOptions) {
                    const t = e.fetchOptions;
                    t.mode && (r.mode = t.mode), t.cache && (r.cache = t.cache), t.credentials && (r.credentials = t.credentials), t.redirect && (r.redirect = t.redirect), t.referrer && (r.referrer = t.referrer)
                }
                const n = yield fetch(t, r), i = yield n.arrayBuffer(), s = {};
                return n.headers.forEach ? n.headers.forEach((t, e) => {
                    s[e.toLowerCase()] = t
                }) : n.headers.keys().forEach(t => {
                    s[t.toLowerCase()] = n.headers.get(t)
                }), {
                    headers: s,
                    statusCode: n.status,
                    statusMessage: n.statusText,
                    body: Ha(new Uint8Array(i))
                }
            })
        }
        var Cl = function(t, e, r, n) {
            return new(r || (r = Promise))(function(i, s) {
                function o(t) {
                    try {
                        c(n.next(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function a(t) {
                    try {
                        c(n.throw(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                        t(e)
                    })).then(o, a)
                }
                c((n = n.apply(t, e || [])).next())
            })
        };
        const xl = new Da("web/5.8.0");

        function Ml(t) {
            return new Promise(e => {
                setTimeout(e, t)
            })
        }

        function Ul(t, e) {
            if (null == t) return null;
            if ("string" == typeof t) return t;
            if (qa(t)) {
                if (e && ("text" === e.split("/")[0] || "application/json" === e.split(";")[0].trim())) try {
                    return Cc(t)
                } catch (t) {}
                return Ya(t)
            }
            return t
        }

        function Dl(t, e, r) {
            let n = null;
            if (null != e) {
                n = Pc(e);
                const r = "string" == typeof t ? {
                    url: t
                } : Su(t);
                if (r.headers) {
                    0 !== Object.keys(r.headers).filter(t => "content-type" === t.toLowerCase()).length || (r.headers = Su(r.headers), r.headers["content-type"] = "application/json")
                } else r.headers = {
                    "content-type": "application/json"
                };
                t = r
            }
            return function(t, e, r) {
                const n = "object" == typeof t && null != t.throttleLimit ? t.throttleLimit : 12;
                xl.assertArgument(n > 0 && n % 1 == 0, "invalid connection throttle limit", "connection.throttleLimit", n);
                const i = "object" == typeof t ? t.throttleCallback : null,
                    s = "object" == typeof t && "number" == typeof t.throttleSlotInterval ? t.throttleSlotInterval : 100;
                xl.assertArgument(s > 0 && s % 1 == 0, "invalid connection throttle slot interval", "connection.throttleSlotInterval", s);
                const o = "object" == typeof t && !!t.errorPassThrough,
                    a = {};
                let c = null;
                const u = {
                    method: "GET"
                };
                let h = !1,
                    l = 12e4;
                if ("string" == typeof t) c = t;
                else if ("object" == typeof t) {
                    if (null != t && null != t.url || xl.throwArgumentError("missing URL", "connection.url", t), c = t.url, "number" == typeof t.timeout && t.timeout > 0 && (l = t.timeout), t.headers)
                        for (const e in t.headers) a[e.toLowerCase()] = {
                            key: e,
                            value: String(t.headers[e])
                        }, ["if-none-match", "if-modified-since"].indexOf(e.toLowerCase()) >= 0 && (h = !0);
                    if (u.allowGzip = !!t.allowGzip, null != t.user && null != t.password) {
                        "https:" !== c.substring(0, 6) && !0 !== t.allowInsecureAuthentication && xl.throwError("basic authentication requires a secure https url", Da.errors.INVALID_ARGUMENT, {
                            argument: "url",
                            url: c,
                            user: t.user,
                            password: "[REDACTED]"
                        });
                        const e = t.user + ":" + t.password;
                        a.authorization = {
                            key: "Authorization",
                            value: "Basic " + Dc(Pc(e))
                        }
                    }
                    null != t.skipFetchSetup && (u.skipFetchSetup = !!t.skipFetchSetup), null != t.fetchOptions && (u.fetchOptions = Su(t.fetchOptions))
                }
                const d = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"),
                    f = c ? c.match(d) : null;
                if (f) try {
                    const t = {
                        statusCode: 200,
                        statusMessage: "OK",
                        headers: {
                            "content-type": f[1] || "text/plain"
                        },
                        body: f[2] ? Uc(f[3]) : (p = f[3], Pc(p.replace(/%([0-9a-f][0-9a-f])/gi, (t, e) => String.fromCharCode(parseInt(e, 16)))))
                    };
                    let e = t.body;
                    return r && (e = r(t.body, t)), Promise.resolve(e)
                } catch (t) {
                    xl.throwError("processing response error", Da.errors.SERVER_ERROR, {
                        body: Ul(f[1], f[2]),
                        error: t,
                        requestBody: null,
                        requestMethod: "GET",
                        url: c
                    })
                }
                var p;
                e && (u.method = "POST", u.body = e, null == a["content-type"] && (a["content-type"] = {
                    key: "Content-Type",
                    value: "application/octet-stream"
                }), null == a["content-length"] && (a["content-length"] = {
                    key: "Content-Length",
                    value: String(e.length)
                }));
                const m = {};
                Object.keys(a).forEach(t => {
                    const e = a[t];
                    m[e.key] = e.value
                }), u.headers = m;
                const g = function() {
                        let t = null;
                        return {
                            promise: new Promise(function(e, r) {
                                l && (t = setTimeout(() => {
                                    null != t && (t = null, r(xl.makeError("timeout", Da.errors.TIMEOUT, {
                                        requestBody: Ul(u.body, m["content-type"]),
                                        requestMethod: u.method,
                                        timeout: l,
                                        url: c
                                    })))
                                }, l))
                            }),
                            cancel: function() {
                                null != t && (clearTimeout(t), t = null)
                            }
                        }
                    }(),
                    y = function() {
                        return Cl(this, void 0, void 0, function*() {
                            for (let t = 0; t < n; t++) {
                                let e = null;
                                try {
                                    if (e = yield Pl(c, u), t < n)
                                        if (301 === e.statusCode || 302 === e.statusCode) {
                                            const t = e.headers.location || "";
                                            if ("GET" === u.method && t.match(/^https:/)) {
                                                c = e.headers.location;
                                                continue
                                            }
                                        } else if (429 === e.statusCode) {
                                        let r = !0;
                                        if (i && (r = yield i(t, c)), r) {
                                            let r = 0;
                                            const n = e.headers["retry-after"];
                                            r = "string" == typeof n && n.match(/^[1-9][0-9]*$/) ? 1e3 * parseInt(n) : s * parseInt(String(Math.random() * Math.pow(2, t))), yield Ml(r);
                                            continue
                                        }
                                    }
                                } catch (t) {
                                    e = t.response, null == e && (g.cancel(), xl.throwError("missing response", Da.errors.SERVER_ERROR, {
                                        requestBody: Ul(u.body, m["content-type"]),
                                        requestMethod: u.method,
                                        serverError: t,
                                        url: c
                                    }))
                                }
                                let a = e.body;
                                if (h && 304 === e.statusCode ? a = null : !o && (e.statusCode < 200 || e.statusCode >= 300) && (g.cancel(), xl.throwError("bad response", Da.errors.SERVER_ERROR, {
                                        status: e.statusCode,
                                        headers: e.headers,
                                        body: Ul(a, e.headers ? e.headers["content-type"] : null),
                                        requestBody: Ul(u.body, m["content-type"]),
                                        requestMethod: u.method,
                                        url: c
                                    })), r) try {
                                    const t = yield r(a, e);
                                    return g.cancel(), t
                                } catch (r) {
                                    if (r.throttleRetry && t < n) {
                                        let e = !0;
                                        if (i && (e = yield i(t, c)), e) {
                                            const e = s * parseInt(String(Math.random() * Math.pow(2, t)));
                                            yield Ml(e);
                                            continue
                                        }
                                    }
                                    g.cancel(), xl.throwError("processing response error", Da.errors.SERVER_ERROR, {
                                        body: Ul(a, e.headers ? e.headers["content-type"] : null),
                                        error: r,
                                        requestBody: Ul(u.body, m["content-type"]),
                                        requestMethod: u.method,
                                        url: c
                                    })
                                }
                                return g.cancel(), a
                            }
                            return xl.throwError("failed response", Da.errors.SERVER_ERROR, {
                                requestBody: Ul(u.body, m["content-type"]),
                                requestMethod: u.method,
                                url: c
                            })
                        })
                    }();
                return Promise.race([g.promise, y])
            }(t, n, (t, e) => {
                let n = null;
                if (null != t) try {
                    n = JSON.parse(Cc(t))
                } catch (e) {
                    xl.throwError("invalid JSON", Da.errors.SERVER_ERROR, {
                        body: t,
                        error: e
                    })
                }
                return r && (n = r(n, e)), n
            })
        }

        function Ll(t, e) {
            return e || (e = {}), null == (e = Su(e)).floor && (e.floor = 0), null == e.ceiling && (e.ceiling = 1e4), null == e.interval && (e.interval = 250), new Promise(function(r, n) {
                let i = null,
                    s = !1;
                const o = () => !s && (s = !0, i && clearTimeout(i), !0);
                e.timeout && (i = setTimeout(() => {
                    o() && n(new Error("timeout"))
                }, e.timeout));
                const a = e.retryLimit;
                let c = 0;
                ! function i() {
                    return t().then(function(t) {
                        if (void 0 !== t) o() && r(t);
                        else if (e.oncePoll) e.oncePoll.once("poll", i);
                        else if (e.onceBlock) e.onceBlock.once("block", i);
                        else if (!s) {
                            if (c++, c > a) return void(o() && n(new Error("retry limit reached")));
                            let t = e.interval * parseInt(String(Math.random() * Math.pow(2, c)));
                            t < e.floor && (t = e.floor), t > e.ceiling && (t = e.ceiling), setTimeout(i, t)
                        }
                        return null
                    }, function(t) {
                        o() && n(t)
                    })
                }()
            })
        }
        var Bl, Fl;
        var ql = function() {
                if (Fl) return Bl;
                Fl = 1;
                for (var t = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", e = {}, r = 0; r < 32; r++) {
                    var n = t.charAt(r);
                    if (void 0 !== e[n]) throw new TypeError(n + " is ambiguous");
                    e[n] = r
                }

                function i(t) {
                    var e = t >> 25;
                    return (33554431 & t) << 5 ^ 996825010 & -(1 & e) ^ 642813549 & -(e >> 1 & 1) ^ 513874426 & -(e >> 2 & 1) ^ 1027748829 & -(e >> 3 & 1) ^ 705979059 & -(e >> 4 & 1)
                }

                function s(t) {
                    for (var e = 1, r = 0; r < t.length; ++r) {
                        var n = t.charCodeAt(r);
                        if (n < 33 || n > 126) return "Invalid prefix (" + t + ")";
                        e = i(e) ^ n >> 5
                    }
                    for (e = i(e), r = 0; r < t.length; ++r) {
                        var s = t.charCodeAt(r);
                        e = i(e) ^ 31 & s
                    }
                    return e
                }

                function o(t, r) {
                    if (r = r || 90, t.length < 8) return t + " too short";
                    if (t.length > r) return "Exceeds length limit";
                    var n = t.toLowerCase(),
                        o = t.toUpperCase();
                    if (t !== n && t !== o) return "Mixed-case string " + t;
                    var a = (t = n).lastIndexOf("1");
                    if (-1 === a) return "No separator character for " + t;
                    if (0 === a) return "Missing prefix for " + t;
                    var c = t.slice(0, a),
                        u = t.slice(a + 1);
                    if (u.length < 6) return "Data too short";
                    var h = s(c);
                    if ("string" == typeof h) return h;
                    for (var l = [], d = 0; d < u.length; ++d) {
                        var f = u.charAt(d),
                            p = e[f];
                        if (void 0 === p) return "Unknown character " + f;
                        h = i(h) ^ p, d + 6 >= u.length || l.push(p)
                    }
                    return 1 !== h ? "Invalid checksum for " + t : {
                        prefix: c,
                        words: l
                    }
                }

                function a(t, e, r, n) {
                    for (var i = 0, s = 0, o = (1 << r) - 1, a = [], c = 0; c < t.length; ++c)
                        for (i = i << e | t[c], s += e; s >= r;) s -= r, a.push(i >> s & o);
                    if (n) s > 0 && a.push(i << r - s & o);
                    else {
                        if (s >= e) return "Excess padding";
                        if (i << r - s & o) return "Non-zero padding"
                    }
                    return a
                }
                return Bl = {
                    decodeUnsafe: function() {
                        var t = o.apply(null, arguments);
                        if ("object" == typeof t) return t
                    },
                    decode: function(t) {
                        var e = o.apply(null, arguments);
                        if ("object" == typeof e) return e;
                        throw new Error(e)
                    },
                    encode: function(e, r, n) {
                        if (n = n || 90, e.length + 7 + r.length > n) throw new TypeError("Exceeds length limit");
                        var o = s(e = e.toLowerCase());
                        if ("string" == typeof o) throw new Error(o);
                        for (var a = e + "1", c = 0; c < r.length; ++c) {
                            var u = r[c];
                            if (u >> 5) throw new Error("Non 5-bit word");
                            o = i(o) ^ u, a += t.charAt(u)
                        }
                        for (c = 0; c < 6; ++c) o = i(o);
                        for (o ^= 1, c = 0; c < 6; ++c) {
                            a += t.charAt(o >> 5 * (5 - c) & 31)
                        }
                        return a
                    },
                    toWordsUnsafe: function(t) {
                        var e = a(t, 8, 5, !0);
                        if (Array.isArray(e)) return e
                    },
                    toWords: function(t) {
                        var e = a(t, 8, 5, !0);
                        if (Array.isArray(e)) return e;
                        throw new Error(e)
                    },
                    fromWordsUnsafe: function(t) {
                        var e = a(t, 5, 8, !1);
                        if (Array.isArray(e)) return e
                    },
                    fromWords: function(t) {
                        var e = a(t, 5, 8, !1);
                        if (Array.isArray(e)) return e;
                        throw new Error(e)
                    }
                }, Bl
            }(),
            Gl = Qr(ql);
        const jl = "providers/5.8.0";

        function Hl(t, e, r) {
            return r = {
                path: e,
                exports: {},
                require: function(t, e) {
                    return function() {
                        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                    }(null == e && r.path)
                }
            }, t(r, r.exports), r.exports
        }
        var zl = Kl;

        function Kl(t, e) {
            if (!t) throw new Error(e || "Assertion failed")
        }
        Kl.equal = function(t, e, r) {
            if (t != e) throw new Error(r || "Assertion failed: " + t + " != " + e)
        };
        var Vl = Hl(function(t, e) {
                var r = e;

                function n(t) {
                    return 1 === t.length ? "0" + t : t
                }

                function i(t) {
                    for (var e = "", r = 0; r < t.length; r++) e += n(t[r].toString(16));
                    return e
                }
                r.toArray = function(t, e) {
                    if (Array.isArray(t)) return t.slice();
                    if (!t) return [];
                    var r = [];
                    if ("string" != typeof t) {
                        for (var n = 0; n < t.length; n++) r[n] = 0 | t[n];
                        return r
                    }
                    if ("hex" === e) {
                        (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t);
                        for (n = 0; n < t.length; n += 2) r.push(parseInt(t[n] + t[n + 1], 16))
                    } else
                        for (n = 0; n < t.length; n++) {
                            var i = t.charCodeAt(n),
                                s = i >> 8,
                                o = 255 & i;
                            s ? r.push(s, o) : r.push(o)
                        }
                    return r
                }, r.zero2 = n, r.toHex = i, r.encode = function(t, e) {
                    return "hex" === e ? i(t) : t
                }
            }),
            Wl = Hl(function(t, e) {
                var r = e;
                r.assert = zl, r.toArray = Vl.toArray, r.zero2 = Vl.zero2, r.toHex = Vl.toHex, r.encode = Vl.encode, r.getNAF = function(t, e, r) {
                    var n, i = new Array(Math.max(t.bitLength(), r) + 1);
                    for (n = 0; n < i.length; n += 1) i[n] = 0;
                    var s = 1 << e + 1,
                        o = t.clone();
                    for (n = 0; n < i.length; n++) {
                        var a, c = o.andln(s - 1);
                        o.isOdd() ? (a = c > (s >> 1) - 1 ? (s >> 1) - c : c, o.isubn(a)) : a = 0, i[n] = a, o.iushrn(1)
                    }
                    return i
                }, r.getJSF = function(t, e) {
                    var r = [
                        [],
                        []
                    ];
                    t = t.clone(), e = e.clone();
                    for (var n, i = 0, s = 0; t.cmpn(-i) > 0 || e.cmpn(-s) > 0;) {
                        var o, a, c = t.andln(3) + i & 3,
                            u = e.andln(3) + s & 3;
                        3 === c && (c = -1), 3 === u && (u = -1), o = 1 & c ? 3 !== (n = t.andln(7) + i & 7) && 5 !== n || 2 !== u ? c : -c : 0, r[0].push(o), a = 1 & u ? 3 !== (n = e.andln(7) + s & 7) && 5 !== n || 2 !== c ? u : -u : 0, r[1].push(a), 2 * i === o + 1 && (i = 1 - i), 2 * s === a + 1 && (s = 1 - s), t.iushrn(1), e.iushrn(1)
                    }
                    return r
                }, r.cachedProperty = function(t, e, r) {
                    var n = "_" + e;
                    t.prototype[e] = function() {
                        return void 0 !== this[n] ? this[n] : this[n] = r.call(this)
                    }
                }, r.parseBytes = function(t) {
                    return "string" == typeof t ? r.toArray(t, "hex") : t
                }, r.intFromLE = function(t) {
                    return new hc(t, "hex", "le")
                }
            }),
            Jl = Wl.getNAF,
            Yl = Wl.getJSF,
            Ql = Wl.assert;

        function Xl(t, e) {
            this.type = t, this.p = new hc(e.p, 16), this.red = e.prime ? hc.red(e.prime) : hc.mont(this.p), this.zero = new hc(0).toRed(this.red), this.one = new hc(1).toRed(this.red), this.two = new hc(2).toRed(this.red), this.n = e.n && new hc(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
            var r = this.n && this.p.div(this.n);
            !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
        }
        var $l = Xl;

        function Zl(t, e) {
            this.curve = t, this.type = e, this.precomputed = null
        }
        Xl.prototype.point = function() {
            throw new Error("Not implemented")
        }, Xl.prototype.validate = function() {
            throw new Error("Not implemented")
        }, Xl.prototype._fixedNafMul = function(t, e) {
            Ql(t.precomputed);
            var r = t._getDoubles(),
                n = Jl(e, 1, this._bitLength),
                i = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);
            i /= 3;
            var s, o, a = [];
            for (s = 0; s < n.length; s += r.step) {
                o = 0;
                for (var c = s + r.step - 1; c >= s; c--) o = (o << 1) + n[c];
                a.push(o)
            }
            for (var u = this.jpoint(null, null, null), h = this.jpoint(null, null, null), l = i; l > 0; l--) {
                for (s = 0; s < a.length; s++)(o = a[s]) === l ? h = h.mixedAdd(r.points[s]) : o === -l && (h = h.mixedAdd(r.points[s].neg()));
                u = u.add(h)
            }
            return u.toP()
        }, Xl.prototype._wnafMul = function(t, e) {
            var r = 4,
                n = t._getNAFPoints(r);
            r = n.wnd;
            for (var i = n.points, s = Jl(e, r, this._bitLength), o = this.jpoint(null, null, null), a = s.length - 1; a >= 0; a--) {
                for (var c = 0; a >= 0 && 0 === s[a]; a--) c++;
                if (a >= 0 && c++, o = o.dblp(c), a < 0) break;
                var u = s[a];
                Ql(0 !== u), o = "affine" === t.type ? u > 0 ? o.mixedAdd(i[u - 1 >> 1]) : o.mixedAdd(i[-u - 1 >> 1].neg()) : u > 0 ? o.add(i[u - 1 >> 1]) : o.add(i[-u - 1 >> 1].neg())
            }
            return "affine" === t.type ? o.toP() : o
        }, Xl.prototype._wnafMulAdd = function(t, e, r, n, i) {
            var s, o, a, c = this._wnafT1,
                u = this._wnafT2,
                h = this._wnafT3,
                l = 0;
            for (s = 0; s < n; s++) {
                var d = (a = e[s])._getNAFPoints(t);
                c[s] = d.wnd, u[s] = d.points
            }
            for (s = n - 1; s >= 1; s -= 2) {
                var f = s - 1,
                    p = s;
                if (1 === c[f] && 1 === c[p]) {
                    var m = [e[f], null, null, e[p]];
                    0 === e[f].y.cmp(e[p].y) ? (m[1] = e[f].add(e[p]), m[2] = e[f].toJ().mixedAdd(e[p].neg())) : 0 === e[f].y.cmp(e[p].y.redNeg()) ? (m[1] = e[f].toJ().mixedAdd(e[p]), m[2] = e[f].add(e[p].neg())) : (m[1] = e[f].toJ().mixedAdd(e[p]), m[2] = e[f].toJ().mixedAdd(e[p].neg()));
                    var g = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                        y = Yl(r[f], r[p]);
                    for (l = Math.max(y[0].length, l), h[f] = new Array(l), h[p] = new Array(l), o = 0; o < l; o++) {
                        var w = 0 | y[0][o],
                            v = 0 | y[1][o];
                        h[f][o] = g[3 * (w + 1) + (v + 1)], h[p][o] = 0, u[f] = m
                    }
                } else h[f] = Jl(r[f], c[f], this._bitLength), h[p] = Jl(r[p], c[p], this._bitLength), l = Math.max(h[f].length, l), l = Math.max(h[p].length, l)
            }
            var A = this.jpoint(null, null, null),
                b = this._wnafT4;
            for (s = l; s >= 0; s--) {
                for (var E = 0; s >= 0;) {
                    var _ = !0;
                    for (o = 0; o < n; o++) b[o] = 0 | h[o][s], 0 !== b[o] && (_ = !1);
                    if (!_) break;
                    E++, s--
                }
                if (s >= 0 && E++, A = A.dblp(E), s < 0) break;
                for (o = 0; o < n; o++) {
                    var R = b[o];
                    0 !== R && (R > 0 ? a = u[o][R - 1 >> 1] : R < 0 && (a = u[o][-R - 1 >> 1].neg()), A = "affine" === a.type ? A.mixedAdd(a) : A.add(a))
                }
            }
            for (s = 0; s < n; s++) u[s] = null;
            return i ? A : A.toP()
        }, Xl.BasePoint = Zl, Zl.prototype.eq = function() {
            throw new Error("Not implemented")
        }, Zl.prototype.validate = function() {
            return this.curve.validate(this)
        }, Xl.prototype.decodePoint = function(t, e) {
            t = Wl.toArray(t, e);
            var r = this.p.byteLength();
            if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * r) return 6 === t[0] ? Ql(t[t.length - 1] % 2 == 0) : 7 === t[0] && Ql(t[t.length - 1] % 2 == 1), this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r));
            if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r) return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
            throw new Error("Unknown point format")
        }, Zl.prototype.encodeCompressed = function(t) {
            return this.encode(t, !0)
        }, Zl.prototype._encode = function(t) {
            var e = this.curve.p.byteLength(),
                r = this.getX().toArray("be", e);
            return t ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", e))
        }, Zl.prototype.encode = function(t, e) {
            return Wl.encode(this._encode(e), t)
        }, Zl.prototype.precompute = function(t) {
            if (this.precomputed) return this;
            var e = {
                doubles: null,
                naf: null,
                beta: null
            };
            return e.naf = this._getNAFPoints(8), e.doubles = this._getDoubles(4, t), e.beta = this._getBeta(), this.precomputed = e, this
        }, Zl.prototype._hasDoubles = function(t) {
            if (!this.precomputed) return !1;
            var e = this.precomputed.doubles;
            return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
        }, Zl.prototype._getDoubles = function(t, e) {
            if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
            for (var r = [this], n = this, i = 0; i < e; i += t) {
                for (var s = 0; s < t; s++) n = n.dbl();
                r.push(n)
            }
            return {
                step: t,
                points: r
            }
        }, Zl.prototype._getNAFPoints = function(t) {
            if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
            for (var e = [this], r = (1 << t) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++) e[i] = e[i - 1].add(n);
            return {
                wnd: t,
                points: e
            }
        }, Zl.prototype._getBeta = function() {
            return null
        }, Zl.prototype.dblp = function(t) {
            for (var e = this, r = 0; r < t; r++) e = e.dbl();
            return e
        };
        var td = Hl(function(t) {
                "function" == typeof Object.create ? t.exports = function(t, e) {
                    e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }))
                } : t.exports = function(t, e) {
                    if (e) {
                        t.super_ = e;
                        var r = function() {};
                        r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                    }
                }
            }),
            ed = Wl.assert;

        function rd(t) {
            $l.call(this, "short", t), this.a = new hc(t.a, 16).toRed(this.red), this.b = new hc(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(t), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
        }
        td(rd, $l);
        var nd = rd;

        function id(t, e, r, n) {
            $l.BasePoint.call(this, t, "affine"), null === e && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new hc(e, 16), this.y = new hc(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
        }

        function sd(t, e, r, n) {
            $l.BasePoint.call(this, t, "jacobian"), null === e && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new hc(0)) : (this.x = new hc(e, 16), this.y = new hc(r, 16), this.z = new hc(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
        }
        rd.prototype._getEndomorphism = function(t) {
            if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                var e, r;
                if (t.beta) e = new hc(t.beta, 16).toRed(this.red);
                else {
                    var n = this._getEndoRoots(this.p);
                    e = (e = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red)
                }
                if (t.lambda) r = new hc(t.lambda, 16);
                else {
                    var i = this._getEndoRoots(this.n);
                    0 === this.g.mul(i[0]).x.cmp(this.g.x.redMul(e)) ? r = i[0] : (r = i[1], ed(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))))
                }
                return {
                    beta: e,
                    lambda: r,
                    basis: t.basis ? t.basis.map(function(t) {
                        return {
                            a: new hc(t.a, 16),
                            b: new hc(t.b, 16)
                        }
                    }) : this._getEndoBasis(r)
                }
            }
        }, rd.prototype._getEndoRoots = function(t) {
            var e = t === this.p ? this.red : hc.mont(t),
                r = new hc(2).toRed(e).redInvm(),
                n = r.redNeg(),
                i = new hc(3).toRed(e).redNeg().redSqrt().redMul(r);
            return [n.redAdd(i).fromRed(), n.redSub(i).fromRed()]
        }, rd.prototype._getEndoBasis = function(t) {
            for (var e, r, n, i, s, o, a, c, u, h = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), l = t, d = this.n.clone(), f = new hc(1), p = new hc(0), m = new hc(0), g = new hc(1), y = 0; 0 !== l.cmpn(0);) {
                var w = d.div(l);
                c = d.sub(w.mul(l)), u = m.sub(w.mul(f));
                var v = g.sub(w.mul(p));
                if (!n && c.cmp(h) < 0) e = a.neg(), r = f, n = c.neg(), i = u;
                else if (n && 2 === ++y) break;
                a = c, d = l, l = c, m = f, f = u, g = p, p = v
            }
            s = c.neg(), o = u;
            var A = n.sqr().add(i.sqr());
            return s.sqr().add(o.sqr()).cmp(A) >= 0 && (s = e, o = r), n.negative && (n = n.neg(), i = i.neg()), s.negative && (s = s.neg(), o = o.neg()), [{
                a: n,
                b: i
            }, {
                a: s,
                b: o
            }]
        }, rd.prototype._endoSplit = function(t) {
            var e = this.endo.basis,
                r = e[0],
                n = e[1],
                i = n.b.mul(t).divRound(this.n),
                s = r.b.neg().mul(t).divRound(this.n),
                o = i.mul(r.a),
                a = s.mul(n.a),
                c = i.mul(r.b),
                u = s.mul(n.b);
            return {
                k1: t.sub(o).sub(a),
                k2: c.add(u).neg()
            }
        }, rd.prototype.pointFromX = function(t, e) {
            (t = new hc(t, 16)).red || (t = t.toRed(this.red));
            var r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
                n = r.redSqrt();
            if (0 !== n.redSqr().redSub(r).cmp(this.zero)) throw new Error("invalid point");
            var i = n.fromRed().isOdd();
            return (e && !i || !e && i) && (n = n.redNeg()), this.point(t, n)
        }, rd.prototype.validate = function(t) {
            if (t.inf) return !0;
            var e = t.x,
                r = t.y,
                n = this.a.redMul(e),
                i = e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b);
            return 0 === r.redSqr().redISub(i).cmpn(0)
        }, rd.prototype._endoWnafMulAdd = function(t, e, r) {
            for (var n = this._endoWnafT1, i = this._endoWnafT2, s = 0; s < t.length; s++) {
                var o = this._endoSplit(e[s]),
                    a = t[s],
                    c = a._getBeta();
                o.k1.negative && (o.k1.ineg(), a = a.neg(!0)), o.k2.negative && (o.k2.ineg(), c = c.neg(!0)), n[2 * s] = a, n[2 * s + 1] = c, i[2 * s] = o.k1, i[2 * s + 1] = o.k2
            }
            for (var u = this._wnafMulAdd(1, n, i, 2 * s, r), h = 0; h < 2 * s; h++) n[h] = null, i[h] = null;
            return u
        }, td(id, $l.BasePoint), rd.prototype.point = function(t, e, r) {
            return new id(this, t, e, r)
        }, rd.prototype.pointFromJSON = function(t, e) {
            return id.fromJSON(this, t, e)
        }, id.prototype._getBeta = function() {
            if (this.curve.endo) {
                var t = this.precomputed;
                if (t && t.beta) return t.beta;
                var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                if (t) {
                    var r = this.curve,
                        n = function(t) {
                            return r.point(t.x.redMul(r.endo.beta), t.y)
                        };
                    t.beta = e, e.precomputed = {
                        beta: null,
                        naf: t.naf && {
                            wnd: t.naf.wnd,
                            points: t.naf.points.map(n)
                        },
                        doubles: t.doubles && {
                            step: t.doubles.step,
                            points: t.doubles.points.map(n)
                        }
                    }
                }
                return e
            }
        }, id.prototype.toJSON = function() {
            return this.precomputed ? [this.x, this.y, this.precomputed && {
                doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1)
                },
                naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1)
                }
            }] : [this.x, this.y]
        }, id.fromJSON = function(t, e, r) {
            "string" == typeof e && (e = JSON.parse(e));
            var n = t.point(e[0], e[1], r);
            if (!e[2]) return n;

            function i(e) {
                return t.point(e[0], e[1], r)
            }
            var s = e[2];
            return n.precomputed = {
                beta: null,
                doubles: s.doubles && {
                    step: s.doubles.step,
                    points: [n].concat(s.doubles.points.map(i))
                },
                naf: s.naf && {
                    wnd: s.naf.wnd,
                    points: [n].concat(s.naf.points.map(i))
                }
            }, n
        }, id.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
        }, id.prototype.isInfinity = function() {
            return this.inf
        }, id.prototype.add = function(t) {
            if (this.inf) return t;
            if (t.inf) return this;
            if (this.eq(t)) return this.dbl();
            if (this.neg().eq(t)) return this.curve.point(null, null);
            if (0 === this.x.cmp(t.x)) return this.curve.point(null, null);
            var e = this.y.redSub(t.y);
            0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
            var r = e.redSqr().redISub(this.x).redISub(t.x),
                n = e.redMul(this.x.redSub(r)).redISub(this.y);
            return this.curve.point(r, n)
        }, id.prototype.dbl = function() {
            if (this.inf) return this;
            var t = this.y.redAdd(this.y);
            if (0 === t.cmpn(0)) return this.curve.point(null, null);
            var e = this.curve.a,
                r = this.x.redSqr(),
                n = t.redInvm(),
                i = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(n),
                s = i.redSqr().redISub(this.x.redAdd(this.x)),
                o = i.redMul(this.x.redSub(s)).redISub(this.y);
            return this.curve.point(s, o)
        }, id.prototype.getX = function() {
            return this.x.fromRed()
        }, id.prototype.getY = function() {
            return this.y.fromRed()
        }, id.prototype.mul = function(t) {
            return t = new hc(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t)
        }, id.prototype.mulAdd = function(t, e, r) {
            var n = [this, e],
                i = [t, r];
            return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2)
        }, id.prototype.jmulAdd = function(t, e, r) {
            var n = [this, e],
                i = [t, r];
            return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0)
        }, id.prototype.eq = function(t) {
            return this === t || this.inf === t.inf && (this.inf || 0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))
        }, id.prototype.neg = function(t) {
            if (this.inf) return this;
            var e = this.curve.point(this.x, this.y.redNeg());
            if (t && this.precomputed) {
                var r = this.precomputed,
                    n = function(t) {
                        return t.neg()
                    };
                e.precomputed = {
                    naf: r.naf && {
                        wnd: r.naf.wnd,
                        points: r.naf.points.map(n)
                    },
                    doubles: r.doubles && {
                        step: r.doubles.step,
                        points: r.doubles.points.map(n)
                    }
                }
            }
            return e
        }, id.prototype.toJ = function() {
            return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
        }, td(sd, $l.BasePoint), rd.prototype.jpoint = function(t, e, r) {
            return new sd(this, t, e, r)
        }, sd.prototype.toP = function() {
            if (this.isInfinity()) return this.curve.point(null, null);
            var t = this.z.redInvm(),
                e = t.redSqr(),
                r = this.x.redMul(e),
                n = this.y.redMul(e).redMul(t);
            return this.curve.point(r, n)
        }, sd.prototype.neg = function() {
            return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
        }, sd.prototype.add = function(t) {
            if (this.isInfinity()) return t;
            if (t.isInfinity()) return this;
            var e = t.z.redSqr(),
                r = this.z.redSqr(),
                n = this.x.redMul(e),
                i = t.x.redMul(r),
                s = this.y.redMul(e.redMul(t.z)),
                o = t.y.redMul(r.redMul(this.z)),
                a = n.redSub(i),
                c = s.redSub(o);
            if (0 === a.cmpn(0)) return 0 !== c.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
            var u = a.redSqr(),
                h = u.redMul(a),
                l = n.redMul(u),
                d = c.redSqr().redIAdd(h).redISub(l).redISub(l),
                f = c.redMul(l.redISub(d)).redISub(s.redMul(h)),
                p = this.z.redMul(t.z).redMul(a);
            return this.curve.jpoint(d, f, p)
        }, sd.prototype.mixedAdd = function(t) {
            if (this.isInfinity()) return t.toJ();
            if (t.isInfinity()) return this;
            var e = this.z.redSqr(),
                r = this.x,
                n = t.x.redMul(e),
                i = this.y,
                s = t.y.redMul(e).redMul(this.z),
                o = r.redSub(n),
                a = i.redSub(s);
            if (0 === o.cmpn(0)) return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
            var c = o.redSqr(),
                u = c.redMul(o),
                h = r.redMul(c),
                l = a.redSqr().redIAdd(u).redISub(h).redISub(h),
                d = a.redMul(h.redISub(l)).redISub(i.redMul(u)),
                f = this.z.redMul(o);
            return this.curve.jpoint(l, d, f)
        }, sd.prototype.dblp = function(t) {
            if (0 === t) return this;
            if (this.isInfinity()) return this;
            if (!t) return this.dbl();
            var e;
            if (this.curve.zeroA || this.curve.threeA) {
                var r = this;
                for (e = 0; e < t; e++) r = r.dbl();
                return r
            }
            var n = this.curve.a,
                i = this.curve.tinv,
                s = this.x,
                o = this.y,
                a = this.z,
                c = a.redSqr().redSqr(),
                u = o.redAdd(o);
            for (e = 0; e < t; e++) {
                var h = s.redSqr(),
                    l = u.redSqr(),
                    d = l.redSqr(),
                    f = h.redAdd(h).redIAdd(h).redIAdd(n.redMul(c)),
                    p = s.redMul(l),
                    m = f.redSqr().redISub(p.redAdd(p)),
                    g = p.redISub(m),
                    y = f.redMul(g);
                y = y.redIAdd(y).redISub(d);
                var w = u.redMul(a);
                e + 1 < t && (c = c.redMul(d)), s = m, a = w, u = y
            }
            return this.curve.jpoint(s, u.redMul(i), a)
        }, sd.prototype.dbl = function() {
            return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
        }, sd.prototype._zeroDbl = function() {
            var t, e, r;
            if (this.zOne) {
                var n = this.x.redSqr(),
                    i = this.y.redSqr(),
                    s = i.redSqr(),
                    o = this.x.redAdd(i).redSqr().redISub(n).redISub(s);
                o = o.redIAdd(o);
                var a = n.redAdd(n).redIAdd(n),
                    c = a.redSqr().redISub(o).redISub(o),
                    u = s.redIAdd(s);
                u = (u = u.redIAdd(u)).redIAdd(u), t = c, e = a.redMul(o.redISub(c)).redISub(u), r = this.y.redAdd(this.y)
            } else {
                var h = this.x.redSqr(),
                    l = this.y.redSqr(),
                    d = l.redSqr(),
                    f = this.x.redAdd(l).redSqr().redISub(h).redISub(d);
                f = f.redIAdd(f);
                var p = h.redAdd(h).redIAdd(h),
                    m = p.redSqr(),
                    g = d.redIAdd(d);
                g = (g = g.redIAdd(g)).redIAdd(g), t = m.redISub(f).redISub(f), e = p.redMul(f.redISub(t)).redISub(g), r = (r = this.y.redMul(this.z)).redIAdd(r)
            }
            return this.curve.jpoint(t, e, r)
        }, sd.prototype._threeDbl = function() {
            var t, e, r;
            if (this.zOne) {
                var n = this.x.redSqr(),
                    i = this.y.redSqr(),
                    s = i.redSqr(),
                    o = this.x.redAdd(i).redSqr().redISub(n).redISub(s);
                o = o.redIAdd(o);
                var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
                    c = a.redSqr().redISub(o).redISub(o);
                t = c;
                var u = s.redIAdd(s);
                u = (u = u.redIAdd(u)).redIAdd(u), e = a.redMul(o.redISub(c)).redISub(u), r = this.y.redAdd(this.y)
            } else {
                var h = this.z.redSqr(),
                    l = this.y.redSqr(),
                    d = this.x.redMul(l),
                    f = this.x.redSub(h).redMul(this.x.redAdd(h));
                f = f.redAdd(f).redIAdd(f);
                var p = d.redIAdd(d),
                    m = (p = p.redIAdd(p)).redAdd(p);
                t = f.redSqr().redISub(m), r = this.y.redAdd(this.z).redSqr().redISub(l).redISub(h);
                var g = l.redSqr();
                g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g), e = f.redMul(p.redISub(t)).redISub(g)
            }
            return this.curve.jpoint(t, e, r)
        }, sd.prototype._dbl = function() {
            var t = this.curve.a,
                e = this.x,
                r = this.y,
                n = this.z,
                i = n.redSqr().redSqr(),
                s = e.redSqr(),
                o = r.redSqr(),
                a = s.redAdd(s).redIAdd(s).redIAdd(t.redMul(i)),
                c = e.redAdd(e),
                u = (c = c.redIAdd(c)).redMul(o),
                h = a.redSqr().redISub(u.redAdd(u)),
                l = u.redISub(h),
                d = o.redSqr();
            d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
            var f = a.redMul(l).redISub(d),
                p = r.redAdd(r).redMul(n);
            return this.curve.jpoint(h, f, p)
        }, sd.prototype.trpl = function() {
            if (!this.curve.zeroA) return this.dbl().add(this);
            var t = this.x.redSqr(),
                e = this.y.redSqr(),
                r = this.z.redSqr(),
                n = e.redSqr(),
                i = t.redAdd(t).redIAdd(t),
                s = i.redSqr(),
                o = this.x.redAdd(e).redSqr().redISub(t).redISub(n),
                a = (o = (o = (o = o.redIAdd(o)).redAdd(o).redIAdd(o)).redISub(s)).redSqr(),
                c = n.redIAdd(n);
            c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
            var u = i.redIAdd(o).redSqr().redISub(s).redISub(a).redISub(c),
                h = e.redMul(u);
            h = (h = h.redIAdd(h)).redIAdd(h);
            var l = this.x.redMul(a).redISub(h);
            l = (l = l.redIAdd(l)).redIAdd(l);
            var d = this.y.redMul(u.redMul(c.redISub(u)).redISub(o.redMul(a)));
            d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
            var f = this.z.redAdd(o).redSqr().redISub(r).redISub(a);
            return this.curve.jpoint(l, d, f)
        }, sd.prototype.mul = function(t, e) {
            return t = new hc(t, e), this.curve._wnafMul(this, t)
        }, sd.prototype.eq = function(t) {
            if ("affine" === t.type) return this.eq(t.toJ());
            if (this === t) return !0;
            var e = this.z.redSqr(),
                r = t.z.redSqr();
            if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0)) return !1;
            var n = e.redMul(this.z),
                i = r.redMul(t.z);
            return 0 === this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0)
        }, sd.prototype.eqXToP = function(t) {
            var e = this.z.redSqr(),
                r = t.toRed(this.curve.red).redMul(e);
            if (0 === this.x.cmp(r)) return !0;
            for (var n = t.clone(), i = this.curve.redN.redMul(e);;) {
                if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
                if (r.redIAdd(i), 0 === this.x.cmp(r)) return !0
            }
        }, sd.prototype.inspect = function() {
            return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
        }, sd.prototype.isInfinity = function() {
            return 0 === this.z.cmpn(0)
        };
        var od = Hl(function(t, e) {
                var r = e;
                r.base = $l, r.short = nd, r.mont = null, r.edwards = null
            }),
            ad = Hl(function(t, e) {
                var r, n = e,
                    i = Wl.assert;

                function s(t) {
                    "short" === t.type ? this.curve = new od.short(t) : "edwards" === t.type ? this.curve = new od.edwards(t) : this.curve = new od.mont(t), this.g = this.curve.g, this.n = this.curve.n, this.hash = t.hash, i(this.g.validate(), "Invalid curve"), i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
                }

                function o(t, e) {
                    Object.defineProperty(n, t, {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            var r = new s(e);
                            return Object.defineProperty(n, t, {
                                configurable: !0,
                                enumerable: !0,
                                value: r
                            }), r
                        }
                    })
                }
                n.PresetCurve = s, o("p192", {
                    type: "short",
                    prime: "p192",
                    p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                    a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                    b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                    n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                    hash: Sl.sha256,
                    gRed: !1,
                    g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
                }), o("p224", {
                    type: "short",
                    prime: "p224",
                    p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                    a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                    b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                    n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                    hash: Sl.sha256,
                    gRed: !1,
                    g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
                }), o("p256", {
                    type: "short",
                    prime: null,
                    p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                    a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                    b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                    n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                    hash: Sl.sha256,
                    gRed: !1,
                    g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
                }), o("p384", {
                    type: "short",
                    prime: null,
                    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                    a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                    b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                    n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                    hash: Sl.sha384,
                    gRed: !1,
                    g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
                }), o("p521", {
                    type: "short",
                    prime: null,
                    p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                    a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                    b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                    n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                    hash: Sl.sha512,
                    gRed: !1,
                    g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
                }), o("curve25519", {
                    type: "mont",
                    prime: "p25519",
                    p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                    a: "76d06",
                    b: "1",
                    n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                    hash: Sl.sha256,
                    gRed: !1,
                    g: ["9"]
                }), o("ed25519", {
                    type: "edwards",
                    prime: "p25519",
                    p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                    a: "-1",
                    c: "1",
                    d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                    n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                    hash: Sl.sha256,
                    gRed: !1,
                    g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
                });
                try {
                    r = null.crash()
                } catch (t) {
                    r = void 0
                }
                o("secp256k1", {
                    type: "short",
                    prime: "k256",
                    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                    a: "0",
                    b: "7",
                    n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                    h: "1",
                    hash: Sl.sha256,
                    beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                    lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                    basis: [{
                        a: "3086d221a7d46bcde86c90e49284eb15",
                        b: "-e4437ed6010e88286f547fa90abfe4c3"
                    }, {
                        a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                        b: "3086d221a7d46bcde86c90e49284eb15"
                    }],
                    gRed: !1,
                    g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", r]
                })
            });

        function cd(t) {
            if (!(this instanceof cd)) return new cd(t);
            this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
            var e = Vl.toArray(t.entropy, t.entropyEnc || "hex"),
                r = Vl.toArray(t.nonce, t.nonceEnc || "hex"),
                n = Vl.toArray(t.pers, t.persEnc || "hex");
            zl(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e, r, n)
        }
        var ud = cd;
        cd.prototype._init = function(t, e, r) {
            var n = t.concat(e).concat(r);
            this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
            for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
            this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656
        }, cd.prototype._hmac = function() {
            return new Sl.hmac(this.hash, this.K)
        }, cd.prototype._update = function(t) {
            var e = this._hmac().update(this.V).update([0]);
            t && (e = e.update(t)), this.K = e.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest())
        }, cd.prototype.reseed = function(t, e, r, n) {
            "string" != typeof e && (n = r, r = e, e = null), t = Vl.toArray(t, e), r = Vl.toArray(r, n), zl(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(r || [])), this._reseed = 1
        }, cd.prototype.generate = function(t, e, r, n) {
            if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
            "string" != typeof e && (n = r, r = e, e = null), r && (r = Vl.toArray(r, n || "hex"), this._update(r));
            for (var i = []; i.length < t;) this.V = this._hmac().update(this.V).digest(), i = i.concat(this.V);
            var s = i.slice(0, t);
            return this._update(r), this._reseed++, Vl.encode(s, e)
        };
        var hd = Wl.assert;

        function ld(t, e) {
            this.ec = t, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc)
        }
        var dd = ld;
        ld.fromPublic = function(t, e, r) {
            return e instanceof ld ? e : new ld(t, {
                pub: e,
                pubEnc: r
            })
        }, ld.fromPrivate = function(t, e, r) {
            return e instanceof ld ? e : new ld(t, {
                priv: e,
                privEnc: r
            })
        }, ld.prototype.validate = function() {
            var t = this.getPublic();
            return t.isInfinity() ? {
                result: !1,
                reason: "Invalid public key"
            } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {
                result: !0,
                reason: null
            } : {
                result: !1,
                reason: "Public key * N != O"
            } : {
                result: !1,
                reason: "Public key is not a point"
            }
        }, ld.prototype.getPublic = function(t, e) {
            return "string" == typeof t && (e = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), e ? this.pub.encode(e, t) : this.pub
        }, ld.prototype.getPrivate = function(t) {
            return "hex" === t ? this.priv.toString(16, 2) : this.priv
        }, ld.prototype._importPrivate = function(t, e) {
            this.priv = new hc(t, e || 16), this.priv = this.priv.umod(this.ec.curve.n)
        }, ld.prototype._importPublic = function(t, e) {
            if (t.x || t.y) return "mont" === this.ec.curve.type ? hd(t.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || hd(t.x && t.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(t.x, t.y));
            this.pub = this.ec.curve.decodePoint(t, e)
        }, ld.prototype.derive = function(t) {
            return t.validate() || hd(t.validate(), "public point not validated"), t.mul(this.priv).getX()
        }, ld.prototype.sign = function(t, e, r) {
            return this.ec.sign(t, this, e, r)
        }, ld.prototype.verify = function(t, e, r) {
            return this.ec.verify(t, e, this, void 0, r)
        }, ld.prototype.inspect = function() {
            return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
        };
        var fd = Wl.assert;

        function pd(t, e) {
            if (t instanceof pd) return t;
            this._importDER(t, e) || (fd(t.r && t.s, "Signature without r or s"), this.r = new hc(t.r, 16), this.s = new hc(t.s, 16), void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam)
        }
        var md = pd;

        function gd() {
            this.place = 0
        }

        function yd(t, e) {
            var r = t[e.place++];
            if (!(128 & r)) return r;
            var n = 15 & r;
            if (0 === n || n > 4) return !1;
            if (0 === t[e.place]) return !1;
            for (var i = 0, s = 0, o = e.place; s < n; s++, o++) i <<= 8, i |= t[o], i >>>= 0;
            return !(i <= 127) && (e.place = o, i)
        }

        function wd(t) {
            for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r;) e++;
            return 0 === e ? t : t.slice(e)
        }

        function vd(t, e) {
            if (e < 128) t.push(e);
            else {
                var r = 1 + (Math.log(e) / Math.LN2 >>> 3);
                for (t.push(128 | r); --r;) t.push(e >>> (r << 3) & 255);
                t.push(e)
            }
        }
        pd.prototype._importDER = function(t, e) {
            t = Wl.toArray(t, e);
            var r = new gd;
            if (48 !== t[r.place++]) return !1;
            var n = yd(t, r);
            if (!1 === n) return !1;
            if (n + r.place !== t.length) return !1;
            if (2 !== t[r.place++]) return !1;
            var i = yd(t, r);
            if (!1 === i) return !1;
            if (128 & t[r.place]) return !1;
            var s = t.slice(r.place, i + r.place);
            if (r.place += i, 2 !== t[r.place++]) return !1;
            var o = yd(t, r);
            if (!1 === o) return !1;
            if (t.length !== o + r.place) return !1;
            if (128 & t[r.place]) return !1;
            var a = t.slice(r.place, o + r.place);
            if (0 === s[0]) {
                if (!(128 & s[1])) return !1;
                s = s.slice(1)
            }
            if (0 === a[0]) {
                if (!(128 & a[1])) return !1;
                a = a.slice(1)
            }
            return this.r = new hc(s), this.s = new hc(a), this.recoveryParam = null, !0
        }, pd.prototype.toDER = function(t) {
            var e = this.r.toArray(),
                r = this.s.toArray();
            for (128 & e[0] && (e = [0].concat(e)), 128 & r[0] && (r = [0].concat(r)), e = wd(e), r = wd(r); !(r[0] || 128 & r[1]);) r = r.slice(1);
            var n = [2];
            vd(n, e.length), (n = n.concat(e)).push(2), vd(n, r.length);
            var i = n.concat(r),
                s = [48];
            return vd(s, i.length), s = s.concat(i), Wl.encode(s, t)
        };
        var Ad = function() {
                throw new Error("unsupported")
            },
            bd = Wl.assert;

        function Ed(t) {
            if (!(this instanceof Ed)) return new Ed(t);
            "string" == typeof t && (bd(Object.prototype.hasOwnProperty.call(ad, t), "Unknown curve " + t), t = ad[t]), t instanceof ad.PresetCurve && (t = {
                curve: t
            }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash
        }
        var _d = Ed;
        Ed.prototype.keyPair = function(t) {
            return new dd(this, t)
        }, Ed.prototype.keyFromPrivate = function(t, e) {
            return dd.fromPrivate(this, t, e)
        }, Ed.prototype.keyFromPublic = function(t, e) {
            return dd.fromPublic(this, t, e)
        }, Ed.prototype.genKeyPair = function(t) {
            t || (t = {});
            for (var e = new ud({
                    hash: this.hash,
                    pers: t.pers,
                    persEnc: t.persEnc || "utf8",
                    entropy: t.entropy || Ad(this.hash.hmacStrength),
                    entropyEnc: t.entropy && t.entropyEnc || "utf8",
                    nonce: this.n.toArray()
                }), r = this.n.byteLength(), n = this.n.sub(new hc(2));;) {
                var i = new hc(e.generate(r));
                if (!(i.cmp(n) > 0)) return i.iaddn(1), this.keyFromPrivate(i)
            }
        }, Ed.prototype._truncateToN = function(t, e, r) {
            var n;
            if (hc.isBN(t) || "number" == typeof t) n = (t = new hc(t, 16)).byteLength();
            else if ("object" == typeof t) n = t.length, t = new hc(t, 16);
            else {
                var i = t.toString();
                n = i.length + 1 >>> 1, t = new hc(i, 16)
            }
            "number" != typeof r && (r = 8 * n);
            var s = r - this.n.bitLength();
            return s > 0 && (t = t.ushrn(s)), !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
        }, Ed.prototype.sign = function(t, e, r, n) {
            if ("object" == typeof r && (n = r, r = null), n || (n = {}), "string" != typeof t && "number" != typeof t && !hc.isBN(t)) {
                bd("object" == typeof t && t && "number" == typeof t.length, "Expected message to be an array-like, a hex string, or a BN instance"), bd(t.length >>> 0 === t.length);
                for (var i = 0; i < t.length; i++) bd((255 & t[i]) === t[i])
            }
            e = this.keyFromPrivate(e, r), t = this._truncateToN(t, !1, n.msgBitLength), bd(!t.isNeg(), "Can not sign a negative message");
            var s = this.n.byteLength(),
                o = e.getPrivate().toArray("be", s),
                a = t.toArray("be", s);
            bd(new hc(a).eq(t), "Can not sign message");
            for (var c = new ud({
                    hash: this.hash,
                    entropy: o,
                    nonce: a,
                    pers: n.pers,
                    persEnc: n.persEnc || "utf8"
                }), u = this.n.sub(new hc(1)), h = 0;; h++) {
                var l = n.k ? n.k(h) : new hc(c.generate(this.n.byteLength()));
                if (!((l = this._truncateToN(l, !0)).cmpn(1) <= 0 || l.cmp(u) >= 0)) {
                    var d = this.g.mul(l);
                    if (!d.isInfinity()) {
                        var f = d.getX(),
                            p = f.umod(this.n);
                        if (0 !== p.cmpn(0)) {
                            var m = l.invm(this.n).mul(p.mul(e.getPrivate()).iadd(t));
                            if (0 !== (m = m.umod(this.n)).cmpn(0)) {
                                var g = (d.getY().isOdd() ? 1 : 0) | (0 !== f.cmp(p) ? 2 : 0);
                                return n.canonical && m.cmp(this.nh) > 0 && (m = this.n.sub(m), g ^= 1), new md({
                                    r: p,
                                    s: m,
                                    recoveryParam: g
                                })
                            }
                        }
                    }
                }
            }
        }, Ed.prototype.verify = function(t, e, r, n, i) {
            i || (i = {}), t = this._truncateToN(t, !1, i.msgBitLength), r = this.keyFromPublic(r, n);
            var s = (e = new md(e, "hex")).r,
                o = e.s;
            if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
            if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
            var a, c = o.invm(this.n),
                u = c.mul(t).umod(this.n),
                h = c.mul(s).umod(this.n);
            return this.curve._maxwellTrick ? !(a = this.g.jmulAdd(u, r.getPublic(), h)).isInfinity() && a.eqXToP(s) : !(a = this.g.mulAdd(u, r.getPublic(), h)).isInfinity() && 0 === a.getX().umod(this.n).cmp(s)
        }, Ed.prototype.recoverPubKey = function(t, e, r, n) {
            bd((3 & r) === r, "The recovery param is more than two bits"), e = new md(e, n);
            var i = this.n,
                s = new hc(t),
                o = e.r,
                a = e.s,
                c = 1 & r,
                u = r >> 1;
            if (o.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u) throw new Error("Unable to find sencond key candinate");
            o = u ? this.curve.pointFromX(o.add(this.curve.n), c) : this.curve.pointFromX(o, c);
            var h = e.r.invm(i),
                l = i.sub(s).mul(h).umod(i),
                d = a.mul(h).umod(i);
            return this.g.mulAdd(l, o, d)
        }, Ed.prototype.getKeyRecoveryParam = function(t, e, r, n) {
            if (null !== (e = new md(e, n)).recoveryParam) return e.recoveryParam;
            for (var i = 0; i < 4; i++) {
                var s;
                try {
                    s = this.recoverPubKey(t, e, i)
                } catch (t) {
                    continue
                }
                if (s.eq(r)) return i
            }
            throw new Error("Unable to find valid recovery factor")
        };
        var Rd = Hl(function(t, e) {
            var r = e;
            r.version = "6.6.1", r.utils = Wl, r.rand = function() {
                throw new Error("unsupported")
            }, r.curve = od, r.curves = ad, r.ec = _d, r.eddsa = null
        }).ec;
        const Td = new Da("signing-key/5.8.0");
        let Id = null;

        function kd() {
            return Id || (Id = new Rd("secp256k1")), Id
        }
        class Sd {
            constructor(t) {
                Tu(this, "curve", "secp256k1"), Tu(this, "privateKey", Ya(t)), 32 !== Qa(this.privateKey) && Td.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
                const e = kd().keyFromPrivate(Ha(this.privateKey));
                Tu(this, "publicKey", "0x" + e.getPublic(!1, "hex")), Tu(this, "compressedPublicKey", "0x" + e.getPublic(!0, "hex")), Tu(this, "_isSigningKey", !0)
            }
            _addPoint(t) {
                const e = kd().keyFromPublic(Ha(this.publicKey)),
                    r = kd().keyFromPublic(Ha(t));
                return "0x" + e.pub.add(r.pub).encodeCompressed("hex")
            }
            signDigest(t) {
                const e = kd().keyFromPrivate(Ha(this.privateKey)),
                    r = Ha(t);
                32 !== r.length && Td.throwArgumentError("bad digest length", "digest", t);
                const n = e.sign(r, {
                    canonical: !0
                });
                return rc({
                    recoveryParam: n.recoveryParam,
                    r: ec("0x" + n.r.toString(16), 32),
                    s: ec("0x" + n.s.toString(16), 32)
                })
            }
            computeSharedSecret(t) {
                const e = kd().keyFromPrivate(Ha(this.privateKey)),
                    r = kd().keyFromPublic(Ha(Nd(t)));
                return ec("0x" + e.derive(r.getPublic()).toString(16), 32)
            }
            static isSigningKey(t) {
                return !(!t || !t._isSigningKey)
            }
        }

        function Nd(t, e) {
            const r = Ha(t);
            if (32 === r.length) {
                return new Sd(r).publicKey
            }
            return 33 === r.length ? "0x" + kd().keyFromPublic(r).getPublic(!1, "hex") : 65 === r.length ? Ya(r) : Td.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
        }
        const Od = new Da("transactions/5.8.0");
        var Pd;

        function Cd(t) {
            return "0x" === t ? null : Eu(t)
        }

        function xd(t) {
            return "0x" === t ? Ec : gc.from(t)
        }

        function Md(t, e) {
            return function(t) {
                return Eu(Xa(ic(Xa(Nd(t), 1)), 12))
            }(function(t, e) {
                const r = rc(e),
                    n = {
                        r: Ha(r.r),
                        s: Ha(r.s)
                    };
                return "0x" + kd().recoverPubKey(Ha(t), n, r.recoveryParam).encode("hex", !1)
            }(Ha(t), e))
        }

        function Ud(t, e) {
            const r = Ka(gc.from(t).toHexString());
            return r.length > 32 && Od.throwArgumentError("invalid length for " + e, "transaction:" + e, t), r
        }

        function Dd(t, e) {
            return {
                address: Eu(t),
                storageKeys: (e || []).map((e, r) => (32 !== Qa(e) && Od.throwArgumentError("invalid access list storageKey", `accessList[${t}:${r}]`, e), e.toLowerCase()))
            }
        }

        function Ld(t) {
            if (Array.isArray(t)) return t.map((t, e) => Array.isArray(t) ? (t.length > 2 && Od.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${e}]`, t), Dd(t[0], t[1])) : Dd(t.address, t.storageKeys));
            const e = Object.keys(t).map(e => {
                const r = t[e].reduce((t, e) => (t[e] = !0, t), {});
                return Dd(e, Object.keys(r).sort())
            });
            return e.sort((t, e) => t.address.localeCompare(e.address)), e
        }

        function Bd(t) {
            return Ld(t).map(t => [t.address, t.storageKeys])
        }

        function Fd(t, e) {
            if (null != t.gasPrice) {
                const e = gc.from(t.gasPrice),
                    r = gc.from(t.maxFeePerGas || 0);
                e.eq(r) || Od.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", {
                    gasPrice: e,
                    maxFeePerGas: r
                })
            }
            const r = [Ud(t.chainId || 0, "chainId"), Ud(t.nonce || 0, "nonce"), Ud(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), Ud(t.maxFeePerGas || 0, "maxFeePerGas"), Ud(t.gasLimit || 0, "gasLimit"), null != t.to ? Eu(t.to) : "0x", Ud(t.value || 0, "value"), t.data || "0x", Bd(t.accessList || [])];
            if (e) {
                const t = rc(e);
                r.push(Ud(t.recoveryParam, "recoveryParam")), r.push(Ka(t.r)), r.push(Ka(t.s))
            }
            return $a(["0x02", fu(r)])
        }

        function qd(t, e) {
            const r = [Ud(t.chainId || 0, "chainId"), Ud(t.nonce || 0, "nonce"), Ud(t.gasPrice || 0, "gasPrice"), Ud(t.gasLimit || 0, "gasLimit"), null != t.to ? Eu(t.to) : "0x", Ud(t.value || 0, "value"), t.data || "0x", Bd(t.accessList || [])];
            if (e) {
                const t = rc(e);
                r.push(Ud(t.recoveryParam, "recoveryParam")), r.push(Ka(t.r)), r.push(Ka(t.s))
            }
            return $a(["0x01", fu(r)])
        }

        function Gd(t, e, r) {
            try {
                const r = xd(e[0]).toNumber();
                if (0 !== r && 1 !== r) throw new Error("bad recid");
                t.v = r
            } catch (t) {
                Od.throwArgumentError("invalid v for transaction type: 1", "v", e[0])
            }
            t.r = ec(e[1], 32), t.s = ec(e[2], 32);
            try {
                const e = ic(r(t));
                t.from = Md(e, {
                    r: t.r,
                    s: t.s,
                    recoveryParam: t.v
                })
            } catch (t) {}
        }

        function jd(t) {
            const e = Ha(t);
            if (e[0] > 127) return function(t) {
                const e = gu(t);
                9 !== e.length && 6 !== e.length && Od.throwArgumentError("invalid raw transaction", "rawTransaction", t);
                const r = {
                    nonce: xd(e[0]).toNumber(),
                    gasPrice: xd(e[1]),
                    gasLimit: xd(e[2]),
                    to: Cd(e[3]),
                    value: xd(e[4]),
                    data: e[5],
                    chainId: 0
                };
                if (6 === e.length) return r;
                try {
                    r.v = gc.from(e[6]).toNumber()
                } catch (t) {
                    return r
                }
                if (r.r = ec(e[7], 32), r.s = ec(e[8], 32), gc.from(r.r).isZero() && gc.from(r.s).isZero()) r.chainId = r.v, r.v = 0;
                else {
                    r.chainId = Math.floor((r.v - 35) / 2), r.chainId < 0 && (r.chainId = 0);
                    let n = r.v - 27;
                    const i = e.slice(0, 6);
                    0 !== r.chainId && (i.push(Ya(r.chainId)), i.push("0x"), i.push("0x"), n -= 2 * r.chainId + 8);
                    const s = ic(fu(i));
                    try {
                        r.from = Md(s, {
                            r: Ya(r.r),
                            s: Ya(r.s),
                            recoveryParam: n
                        })
                    } catch (t) {}
                    r.hash = ic(t)
                }
                return r.type = null, r
            }(e);
            switch (e[0]) {
                case 1:
                    return function(t) {
                        const e = gu(t.slice(1));
                        8 !== e.length && 11 !== e.length && Od.throwArgumentError("invalid component count for transaction type: 1", "payload", Ya(t));
                        const r = {
                            type: 1,
                            chainId: xd(e[0]).toNumber(),
                            nonce: xd(e[1]).toNumber(),
                            gasPrice: xd(e[2]),
                            gasLimit: xd(e[3]),
                            to: Cd(e[4]),
                            value: xd(e[5]),
                            data: e[6],
                            accessList: Ld(e[7])
                        };
                        return 8 === e.length || (r.hash = ic(t), Gd(r, e.slice(8), qd)), r
                    }(e);
                case 2:
                    return function(t) {
                        const e = gu(t.slice(1));
                        9 !== e.length && 12 !== e.length && Od.throwArgumentError("invalid component count for transaction type: 2", "payload", Ya(t));
                        const r = xd(e[2]),
                            n = xd(e[3]),
                            i = {
                                type: 2,
                                chainId: xd(e[0]).toNumber(),
                                nonce: xd(e[1]).toNumber(),
                                maxPriorityFeePerGas: r,
                                maxFeePerGas: n,
                                gasPrice: null,
                                gasLimit: xd(e[4]),
                                to: Cd(e[5]),
                                value: xd(e[6]),
                                data: e[7],
                                accessList: Ld(e[8])
                            };
                        return 9 === e.length || (i.hash = ic(t), Gd(i, e.slice(9), Fd)), i
                    }(e)
            }
            return Od.throwError(`unsupported transaction type: ${e[0]}`, Da.errors.UNSUPPORTED_OPERATION, {
                operation: "parseTransaction",
                transactionType: e[0]
            })
        }! function(t) {
            t[t.legacy = 0] = "legacy", t[t.eip2930 = 1] = "eip2930", t[t.eip1559 = 2] = "eip1559"
        }(Pd || (Pd = {}));
        const Hd = new Da(jl);
        class zd {
            constructor() {
                this.formats = this.getDefaultFormats()
            }
            getDefaultFormats() {
                const t = {},
                    e = this.address.bind(this),
                    r = this.bigNumber.bind(this),
                    n = this.blockTag.bind(this),
                    i = this.data.bind(this),
                    s = this.hash.bind(this),
                    o = this.hex.bind(this),
                    a = this.number.bind(this),
                    c = this.type.bind(this);
                return t.transaction = {
                    hash: s,
                    type: c,
                    accessList: zd.allowNull(this.accessList.bind(this), null),
                    blockHash: zd.allowNull(s, null),
                    blockNumber: zd.allowNull(a, null),
                    transactionIndex: zd.allowNull(a, null),
                    confirmations: zd.allowNull(a, null),
                    from: e,
                    gasPrice: zd.allowNull(r),
                    maxPriorityFeePerGas: zd.allowNull(r),
                    maxFeePerGas: zd.allowNull(r),
                    gasLimit: r,
                    to: zd.allowNull(e, null),
                    value: r,
                    nonce: a,
                    data: i,
                    r: zd.allowNull(this.uint256),
                    s: zd.allowNull(this.uint256),
                    v: zd.allowNull(a),
                    creates: zd.allowNull(e, null),
                    raw: zd.allowNull(i)
                }, t.transactionRequest = {
                    from: zd.allowNull(e),
                    nonce: zd.allowNull(a),
                    gasLimit: zd.allowNull(r),
                    gasPrice: zd.allowNull(r),
                    maxPriorityFeePerGas: zd.allowNull(r),
                    maxFeePerGas: zd.allowNull(r),
                    to: zd.allowNull(e),
                    value: zd.allowNull(r),
                    data: zd.allowNull(t => this.data(t, !0)),
                    type: zd.allowNull(a),
                    accessList: zd.allowNull(this.accessList.bind(this), null)
                }, t.receiptLog = {
                    transactionIndex: a,
                    blockNumber: a,
                    transactionHash: s,
                    address: e,
                    topics: zd.arrayOf(s),
                    data: i,
                    logIndex: a,
                    blockHash: s
                }, t.receipt = {
                    to: zd.allowNull(this.address, null),
                    from: zd.allowNull(this.address, null),
                    contractAddress: zd.allowNull(e, null),
                    transactionIndex: a,
                    root: zd.allowNull(o),
                    gasUsed: r,
                    logsBloom: zd.allowNull(i),
                    blockHash: s,
                    transactionHash: s,
                    logs: zd.arrayOf(this.receiptLog.bind(this)),
                    blockNumber: a,
                    confirmations: zd.allowNull(a, null),
                    cumulativeGasUsed: r,
                    effectiveGasPrice: zd.allowNull(r),
                    status: zd.allowNull(a),
                    type: c
                }, t.block = {
                    hash: zd.allowNull(s),
                    parentHash: s,
                    number: a,
                    timestamp: a,
                    nonce: zd.allowNull(o),
                    difficulty: this.difficulty.bind(this),
                    gasLimit: r,
                    gasUsed: r,
                    miner: zd.allowNull(e),
                    extraData: i,
                    transactions: zd.allowNull(zd.arrayOf(s)),
                    baseFeePerGas: zd.allowNull(r)
                }, t.blockWithTransactions = Su(t.block), t.blockWithTransactions.transactions = zd.allowNull(zd.arrayOf(this.transactionResponse.bind(this))), t.filter = {
                    fromBlock: zd.allowNull(n, void 0),
                    toBlock: zd.allowNull(n, void 0),
                    blockHash: zd.allowNull(s, void 0),
                    address: zd.allowNull(e, void 0),
                    topics: zd.allowNull(this.topics.bind(this), void 0)
                }, t.filterLog = {
                    blockNumber: zd.allowNull(a),
                    blockHash: zd.allowNull(s),
                    transactionIndex: a,
                    removed: zd.allowNull(this.boolean.bind(this)),
                    address: e,
                    data: zd.allowFalsish(i, "0x"),
                    topics: zd.arrayOf(s),
                    transactionHash: s,
                    logIndex: a
                }, t
            }
            accessList(t) {
                return Ld(t || [])
            }
            number(t) {
                return "0x" === t ? 0 : gc.from(t).toNumber()
            }
            type(t) {
                return "0x" === t || null == t ? 0 : gc.from(t).toNumber()
            }
            bigNumber(t) {
                return gc.from(t)
            }
            boolean(t) {
                if ("boolean" == typeof t) return t;
                if ("string" == typeof t) {
                    if ("true" === (t = t.toLowerCase())) return !0;
                    if ("false" === t) return !1
                }
                throw new Error("invalid boolean - " + t)
            }
            hex(t, e) {
                return "string" == typeof t && (e || "0x" === t.substring(0, 2) || (t = "0x" + t), Wa(t)) ? t.toLowerCase() : Hd.throwArgumentError("invalid hash", "value", t)
            }
            data(t, e) {
                const r = this.hex(t, e);
                if (r.length % 2 != 0) throw new Error("invalid data; odd-length - " + t);
                return r
            }
            address(t) {
                return Eu(t)
            }
            callAddress(t) {
                if (!Wa(t, 32)) return null;
                const e = Eu(Xa(t, 12));
                return "0x0000000000000000000000000000000000000000" === e ? null : e
            }
            contractAddress(t) {
                return function(t) {
                    let e = null;
                    try {
                        e = Eu(t.from)
                    } catch (e) {
                        yu.throwArgumentError("missing from address", "transaction", t)
                    }
                    return Eu(Xa(ic(fu([e, Ka(Ha(gc.from(t.nonce).toHexString()))])), 12))
                }(t)
            }
            blockTag(t) {
                if (null == t) return "latest";
                if ("earliest" === t) return "0x0";
                switch (t) {
                    case "earliest":
                        return "0x0";
                    case "latest":
                    case "pending":
                    case "safe":
                    case "finalized":
                        return t
                }
                if ("number" == typeof t || Wa(t)) return Za(t);
                throw new Error("invalid blockTag")
            }
            hash(t, e) {
                const r = this.hex(t, e);
                return 32 !== Qa(r) ? Hd.throwArgumentError("invalid hash", "value", t) : r
            }
            difficulty(t) {
                if (null == t) return null;
                const e = gc.from(t);
                try {
                    return e.toNumber()
                } catch (t) {}
                return null
            }
            uint256(t) {
                if (!Wa(t)) throw new Error("invalid uint256");
                return ec(t, 32)
            }
            _block(t, e) {
                null != t.author && null == t.miner && (t.miner = t.author);
                const r = null != t._difficulty ? t._difficulty : t.difficulty,
                    n = zd.check(e, t);
                return n._difficulty = null == r ? null : gc.from(r), n
            }
            block(t) {
                return this._block(t, this.formats.block)
            }
            blockWithTransactions(t) {
                return this._block(t, this.formats.blockWithTransactions)
            }
            transactionRequest(t) {
                return zd.check(this.formats.transactionRequest, t)
            }
            transactionResponse(t) {
                null != t.gas && null == t.gasLimit && (t.gasLimit = t.gas), t.to && gc.from(t.to).isZero() && (t.to = "0x0000000000000000000000000000000000000000"), null != t.input && null == t.data && (t.data = t.input), null == t.to && null == t.creates && (t.creates = this.contractAddress(t)), 1 !== t.type && 2 !== t.type || null != t.accessList || (t.accessList = []);
                const e = zd.check(this.formats.transaction, t);
                if (null != t.chainId) {
                    let r = t.chainId;
                    Wa(r) && (r = gc.from(r).toNumber()), e.chainId = r
                } else {
                    let r = t.networkId;
                    null == r && null == e.v && (r = t.chainId), Wa(r) && (r = gc.from(r).toNumber()), "number" != typeof r && null != e.v && (r = (e.v - 35) / 2, r < 0 && (r = 0), r = parseInt(r)), "number" != typeof r && (r = 0), e.chainId = r
                }
                return e.blockHash && "x" === e.blockHash.replace(/0/g, "") && (e.blockHash = null), e
            }
            transaction(t) {
                return jd(t)
            }
            receiptLog(t) {
                return zd.check(this.formats.receiptLog, t)
            }
            receipt(t) {
                const e = zd.check(this.formats.receipt, t);
                if (null != e.root)
                    if (e.root.length <= 4) {
                        const t = gc.from(e.root).toNumber();
                        0 === t || 1 === t ? (null != e.status && e.status !== t && Hd.throwArgumentError("alt-root-status/status mismatch", "value", {
                            root: e.root,
                            status: e.status
                        }), e.status = t, delete e.root) : Hd.throwArgumentError("invalid alt-root-status", "value.root", e.root)
                    } else 66 !== e.root.length && Hd.throwArgumentError("invalid root hash", "value.root", e.root);
                return null != e.status && (e.byzantium = !0), e
            }
            topics(t) {
                return Array.isArray(t) ? t.map(t => this.topics(t)) : null != t ? this.hash(t, !0) : null
            }
            filter(t) {
                return zd.check(this.formats.filter, t)
            }
            filterLog(t) {
                return zd.check(this.formats.filterLog, t)
            }
            static check(t, e) {
                const r = {};
                for (const n in t) try {
                    const i = t[n](e[n]);
                    void 0 !== i && (r[n] = i)
                } catch (t) {
                    throw t.checkKey = n, t.checkValue = e[n], t
                }
                return r
            }
            static allowNull(t, e) {
                return function(r) {
                    return null == r ? e : t(r)
                }
            }
            static allowFalsish(t, e) {
                return function(r) {
                    return r ? t(r) : e
                }
            }
            static arrayOf(t) {
                return function(e) {
                    if (!Array.isArray(e)) throw new Error("not an array");
                    const r = [];
                    return e.forEach(function(e) {
                        r.push(t(e))
                    }), r
                }
            }
        }

        function Kd(t) {
            return t && "function" == typeof t.isCommunityResource
        }

        function Vd(t) {
            return Kd(t) && t.isCommunityResource()
        }
        let Wd = !1;

        function Jd() {
            Wd || (Wd = !0, console.log("========= NOTICE ========="), console.log("Request-Rate Exceeded  (this message will not be repeated)"), console.log(""), console.log("The default API keys for each service are provided as a highly-throttled,"), console.log("community resource for low-traffic projects and early prototyping."), console.log(""), console.log("While your application will continue to function, we highly recommended"), console.log("signing up for your own API keys to improve performance, increase your"), console.log("request rate/limit and enable other perks, such as metrics and advanced APIs."), console.log(""), console.log("For more details: https://docs.ethers.io/api-keys/"), console.log("=========================="))
        }
        var Yd = function(t, e, r, n) {
            return new(r || (r = Promise))(function(i, s) {
                function o(t) {
                    try {
                        c(n.next(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function a(t) {
                    try {
                        c(n.throw(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                        t(e)
                    })).then(o, a)
                }
                c((n = n.apply(t, e || [])).next())
            })
        };
        const Qd = new Da(jl);

        function Xd(t) {
            return null == t ? "null" : (32 !== Qa(t) && Qd.throwArgumentError("invalid topic", "topic", t), t.toLowerCase())
        }

        function $d(t) {
            for (t = t.slice(); t.length > 0 && null == t[t.length - 1];) t.pop();
            return t.map(t => {
                if (Array.isArray(t)) {
                    const e = {};
                    t.forEach(t => {
                        e[Xd(t)] = !0
                    });
                    const r = Object.keys(e);
                    return r.sort(), r.join("|")
                }
                return Xd(t)
            }).join("&")
        }

        function Zd(t) {
            if ("string" == typeof t) {
                if (32 === Qa(t = t.toLowerCase())) return "tx:" + t;
                if (-1 === t.indexOf(":")) return t
            } else {
                if (Array.isArray(t)) return "filter:*:" + $d(t);
                if (Mh.isForkEvent(t)) throw Qd.warn("not implemented"), new Error("not implemented");
                if (t && "object" == typeof t) return "filter:" + (t.address || "*") + ":" + $d(t.topics || [])
            }
            throw new Error("invalid event - " + t)
        }

        function tf() {
            return (new Date).getTime()
        }

        function ef(t) {
            return new Promise(e => {
                setTimeout(e, t)
            })
        }
        const rf = ["block", "network", "pending", "poll"];
        let nf = class {
            constructor(t, e, r) {
                Tu(this, "tag", t), Tu(this, "listener", e), Tu(this, "once", r), this._lastBlockNumber = -2, this._inflight = !1
            }
            get event() {
                switch (this.type) {
                    case "tx":
                        return this.hash;
                    case "filter":
                        return this.filter
                }
                return this.tag
            }
            get type() {
                return this.tag.split(":")[0]
            }
            get hash() {
                const t = this.tag.split(":");
                return "tx" !== t[0] ? null : t[1]
            }
            get filter() {
                const t = this.tag.split(":");
                if ("filter" !== t[0]) return null;
                const e = t[1],
                    r = "" === (n = t[2]) ? [] : n.split(/&/g).map(t => {
                        if ("" === t) return [];
                        const e = t.split("|").map(t => "null" === t ? null : t);
                        return 1 === e.length ? e[0] : e
                    });
                var n;
                const i = {};
                return r.length > 0 && (i.topics = r), e && "*" !== e && (i.address = e), i
            }
            pollable() {
                return this.tag.indexOf(":") >= 0 || rf.indexOf(this.tag) >= 0
            }
        };
        const sf = {
            0: {
                symbol: "btc",
                p2pkh: 0,
                p2sh: 5,
                prefix: "bc"
            },
            2: {
                symbol: "ltc",
                p2pkh: 48,
                p2sh: 50,
                prefix: "ltc"
            },
            3: {
                symbol: "doge",
                p2pkh: 30,
                p2sh: 22
            },
            60: {
                symbol: "eth",
                ilk: "eth"
            },
            61: {
                symbol: "etc",
                ilk: "eth"
            },
            700: {
                symbol: "xdai",
                ilk: "eth"
            }
        };

        function of(t) {
            return ec(gc.from(t).toHexString(), 32)
        }

        function af(t) {
            return Kh.encode(za([t, Xa(Nl(Nl(t)), 0, 4)]))
        }
        const cf = new RegExp("^(ipfs)://(.*)$", "i"),
            uf = [new RegExp("^(https)://(.*)$", "i"), new RegExp("^(data):(.*)$", "i"), cf, new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")];

        function hf(t, e) {
            try {
                return Cc(lf(t, e))
            } catch (t) {}
            return null
        }

        function lf(t, e) {
            if ("0x" === t) return null;
            const r = gc.from(Xa(t, e, e + 32)).toNumber(),
                n = gc.from(Xa(t, r, r + 32)).toNumber();
            return Xa(t, r + 32, r + 32 + n)
        }

        function df(t) {
            return t.match(/^ipfs:\/\/ipfs\//i) ? t = t.substring(12) : t.match(/^ipfs:\/\//i) ? t = t.substring(7) : Qd.throwArgumentError("unsupported IPFS format", "link", t), `https://gateway.ipfs.io/ipfs/${t}`
        }

        function ff(t) {
            const e = Ha(t);
            if (e.length > 32) throw new Error("internal; should not happen");
            const r = new Uint8Array(32);
            return r.set(e, 32 - e.length), r
        }

        function pf(t) {
            if (t.length % 32 == 0) return t;
            const e = new Uint8Array(32 * Math.ceil(t.length / 32));
            return e.set(t), e
        }

        function mf(t) {
            const e = [];
            let r = 0;
            for (let n = 0; n < t.length; n++) e.push(null), r += 32;
            for (let n = 0; n < t.length; n++) {
                const i = Ha(t[n]);
                e[n] = ff(r), e.push(ff(i.length)), e.push(pf(i)), r += 32 + 32 * Math.ceil(i.length / 32)
            }
            return $a(e)
        }
        class gf {
            constructor(t, e, r, n) {
                Tu(this, "provider", t), Tu(this, "name", r), Tu(this, "address", t.formatter.address(e)), Tu(this, "_resolvedAddress", n)
            }
            supportsWildcard() {
                return this._supportsEip2544 || (this._supportsEip2544 = this.provider.call({
                    to: this.address,
                    data: "0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000"
                }).then(t => gc.from(t).eq(1)).catch(t => {
                    if (t.code === Da.errors.CALL_EXCEPTION) return !1;
                    throw this._supportsEip2544 = null, t
                })), this._supportsEip2544
            }
            _fetch(t, e) {
                return Yd(this, void 0, void 0, function*() {
                    const r = {
                        to: this.address,
                        ccipReadEnabled: !0,
                        data: $a([t, ou(this.name), e || "0x"])
                    };
                    let n = !1;
                    (yield this.supportsWildcard()) && (n = !0, r.data = $a(["0x9061b923", mf([au(this.name), r.data])]));
                    try {
                        let t = yield this.provider.call(r);
                        return Ha(t).length % 32 == 4 && Qd.throwError("resolver threw error", Da.errors.CALL_EXCEPTION, {
                            transaction: r,
                            data: t
                        }), n && (t = lf(t, 0)), t
                    } catch (t) {
                        if (t.code === Da.errors.CALL_EXCEPTION) return null;
                        throw t
                    }
                })
            }
            _fetchBytes(t, e) {
                return Yd(this, void 0, void 0, function*() {
                    const r = yield this._fetch(t, e);
                    return null != r ? lf(r, 0) : null
                })
            }
            _getAddress(t, e) {
                const r = sf[String(t)];
                if (null == r && Qd.throwError(`unsupported coin type: ${t}`, Da.errors.UNSUPPORTED_OPERATION, {
                        operation: `getAddress(${t})`
                    }), "eth" === r.ilk) return this.provider.formatter.address(e);
                const n = Ha(e);
                if (null != r.p2pkh) {
                    const t = e.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
                    if (t) {
                        const e = parseInt(t[1], 16);
                        if (t[2].length === 2 * e && e >= 1 && e <= 75) return af(za([
                            [r.p2pkh], "0x" + t[2]
                        ]))
                    }
                }
                if (null != r.p2sh) {
                    const t = e.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
                    if (t) {
                        const e = parseInt(t[1], 16);
                        if (t[2].length === 2 * e && e >= 1 && e <= 75) return af(za([
                            [r.p2sh], "0x" + t[2]
                        ]))
                    }
                }
                if (null != r.prefix) {
                    const t = n[1];
                    let e = n[0];
                    if (0 === e ? 20 !== t && 32 !== t && (e = -1) : e = -1, e >= 0 && n.length === 2 + t && t >= 1 && t <= 75) {
                        const t = Gl.toWords(n.slice(2));
                        return t.unshift(e), Gl.encode(r.prefix, t)
                    }
                }
                return null
            }
            getAddress(t) {
                return Yd(this, void 0, void 0, function*() {
                    if (null == t && (t = 60), 60 === t) try {
                        const t = yield this._fetch("0x3b3b57de");
                        return "0x" === t || "0x0000000000000000000000000000000000000000000000000000000000000000" === t ? null : this.provider.formatter.callAddress(t)
                    } catch (t) {
                        if (t.code === Da.errors.CALL_EXCEPTION) return null;
                        throw t
                    }
                    const e = yield this._fetchBytes("0xf1cb7e06", of(t));
                    if (null == e || "0x" === e) return null;
                    const r = this._getAddress(t, e);
                    return null == r && Qd.throwError("invalid or unsupported coin data", Da.errors.UNSUPPORTED_OPERATION, {
                        operation: `getAddress(${t})`,
                        coinType: t,
                        data: e
                    }), r
                })
            }
            getAvatar() {
                return Yd(this, void 0, void 0, function*() {
                    const t = [{
                        type: "name",
                        content: this.name
                    }];
                    try {
                        const e = yield this.getText("avatar");
                        if (null == e) return null;
                        for (let r = 0; r < uf.length; r++) {
                            const n = e.match(uf[r]);
                            if (null == n) continue;
                            const i = n[1].toLowerCase();
                            switch (i) {
                                case "https":
                                    return t.push({
                                        type: "url",
                                        content: e
                                    }), {
                                        linkage: t,
                                        url: e
                                    };
                                case "data":
                                    return t.push({
                                        type: "data",
                                        content: e
                                    }), {
                                        linkage: t,
                                        url: e
                                    };
                                case "ipfs":
                                    return t.push({
                                        type: "ipfs",
                                        content: e
                                    }), {
                                        linkage: t,
                                        url: df(e)
                                    };
                                case "erc721":
                                case "erc1155": {
                                    const r = "erc721" === i ? "0xc87b56dd" : "0x0e89341c";
                                    t.push({
                                        type: i,
                                        content: e
                                    });
                                    const s = this._resolvedAddress || (yield this.getAddress()),
                                        o = (n[2] || "").split("/");
                                    if (2 !== o.length) return null;
                                    const a = yield this.provider.formatter.address(o[0]), c = ec(gc.from(o[1]).toHexString(), 32);
                                    if ("erc721" === i) {
                                        const e = this.provider.formatter.callAddress(yield this.provider.call({
                                            to: a,
                                            data: $a(["0x6352211e", c])
                                        }));
                                        if (s !== e) return null;
                                        t.push({
                                            type: "owner",
                                            content: e
                                        })
                                    } else if ("erc1155" === i) {
                                        const e = gc.from(yield this.provider.call({
                                            to: a,
                                            data: $a(["0x00fdd58e", ec(s, 32), c])
                                        }));
                                        if (e.isZero()) return null;
                                        t.push({
                                            type: "balance",
                                            content: e.toString()
                                        })
                                    }
                                    const u = {
                                        to: this.provider.formatter.address(o[0]),
                                        data: $a([r, c])
                                    };
                                    let h = hf(yield this.provider.call(u), 0);
                                    if (null == h) return null;
                                    t.push({
                                        type: "metadata-url-base",
                                        content: h
                                    }), "erc1155" === i && (h = h.replace("{id}", c.substring(2)), t.push({
                                        type: "metadata-url-expanded",
                                        content: h
                                    })), h.match(/^ipfs:/i) && (h = df(h)), t.push({
                                        type: "metadata-url",
                                        content: h
                                    });
                                    const l = yield Dl(h);
                                    if (!l) return null;
                                    t.push({
                                        type: "metadata",
                                        content: JSON.stringify(l)
                                    });
                                    let d = l.image;
                                    if ("string" != typeof d) return null;
                                    if (d.match(/^(https:\/\/|data:)/i));
                                    else {
                                        if (null == d.match(cf)) return null;
                                        t.push({
                                            type: "url-ipfs",
                                            content: d
                                        }), d = df(d)
                                    }
                                    return t.push({
                                        type: "url",
                                        content: d
                                    }), {
                                        linkage: t,
                                        url: d
                                    }
                                }
                            }
                        }
                    } catch (t) {}
                    return null
                })
            }
            getContentHash() {
                return Yd(this, void 0, void 0, function*() {
                    const t = yield this._fetchBytes("0xbc1c58d1");
                    if (null == t || "0x" === t) return null;
                    const e = t.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
                    if (e) {
                        const t = parseInt(e[3], 16);
                        if (e[4].length === 2 * t) return "ipfs://" + Kh.encode("0x" + e[1])
                    }
                    const r = t.match(/^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
                    if (r) {
                        const t = parseInt(r[3], 16);
                        if (r[4].length === 2 * t) return "ipns://" + Kh.encode("0x" + r[1])
                    }
                    const n = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
                    if (n && 64 === n[1].length) return "bzz://" + n[1];
                    const i = t.match(/^0x90b2c605([0-9a-f]*)$/);
                    if (i && 68 === i[1].length) {
                        const t = {
                                "=": "",
                                "+": "-",
                                "/": "_"
                            },
                            e = Dc("0x" + i[1]).replace(/[=+\/]/g, e => t[e]);
                        return "sia://" + e
                    }
                    return Qd.throwError("invalid or unsupported content hash data", Da.errors.UNSUPPORTED_OPERATION, {
                        operation: "getContentHash()",
                        data: t
                    })
                })
            }
            getText(t) {
                return Yd(this, void 0, void 0, function*() {
                    let e = Pc(t);
                    e = za([of(64), of(e.length), e]), e.length % 32 != 0 && (e = za([e, ec("0x", 32 - t.length % 32)]));
                    const r = yield this._fetchBytes("0x59d1d43c", Ya(e));
                    return null == r || "0x" === r ? null : Cc(r)
                })
            }
        }
        let yf = null,
            wf = 1;
        class vf extends Uh {
            constructor(t) {
                if (super(), this._events = [], this._emitted = {
                        block: -2
                    }, this.disableCcipRead = !1, this.formatter = new.target.getFormatter(), Tu(this, "anyNetwork", "any" === t), this.anyNetwork && (t = this.detectNetwork()), t instanceof Promise) this._networkPromise = t, t.catch(t => {}), this._ready().catch(t => {});
                else {
                    const e = Iu(new.target, "getNetwork")(t);
                    e ? (Tu(this, "_network", e), this.emit("network", e, null)) : Qd.throwArgumentError("invalid network", "network", t)
                }
                this._maxInternalBlockNumber = -1024, this._lastBlockNumber = -2, this._maxFilterBlockRange = 10, this._pollingInterval = 4e3, this._fastQueryDate = 0
            }
            _ready() {
                return Yd(this, void 0, void 0, function*() {
                    if (null == this._network) {
                        let t = null;
                        if (this._networkPromise) try {
                            t = yield this._networkPromise
                        } catch (t) {}
                        null == t && (t = yield this.detectNetwork()), t || Qd.throwError("no network detected", Da.errors.UNKNOWN_ERROR, {}), null == this._network && (this.anyNetwork ? this._network = t : Tu(this, "_network", t), this.emit("network", t, null))
                    }
                    return this._network
                })
            }
            get ready() {
                return Ll(() => this._ready().then(t => t, t => {
                    if (t.code !== Da.errors.NETWORK_ERROR || "noNetwork" !== t.event) throw t
                }))
            }
            static getFormatter() {
                return null == yf && (yf = new zd), yf
            }
            static getNetwork(t) {
                return Hh(null == t ? "homestead" : t)
            }
            ccipReadFetch(t, e, r) {
                return Yd(this, void 0, void 0, function*() {
                    if (this.disableCcipRead || 0 === r.length) return null;
                    const n = t.to.toLowerCase(),
                        i = e.toLowerCase(),
                        s = [];
                    for (let t = 0; t < r.length; t++) {
                        const e = r[t],
                            o = e.replace("{sender}", n).replace("{data}", i),
                            a = e.indexOf("{data}") >= 0 ? null : JSON.stringify({
                                data: i,
                                sender: n
                            }),
                            c = yield Dl({
                                url: o,
                                errorPassThrough: !0
                            }, a, (t, e) => (t.status = e.statusCode, t));
                        if (c.data) return c.data;
                        const u = c.message || "unknown error";
                        if (c.status >= 400 && c.status < 500) return Qd.throwError(`response not found during CCIP fetch: ${u}`, Da.errors.SERVER_ERROR, {
                            url: e,
                            errorMessage: u
                        });
                        s.push(u)
                    }
                    return Qd.throwError(`error encountered during CCIP fetch: ${s.map(t=>JSON.stringify(t)).join(", ")}`, Da.errors.SERVER_ERROR, {
                        urls: r,
                        errorMessages: s
                    })
                })
            }
            _getInternalBlockNumber(t) {
                return Yd(this, void 0, void 0, function*() {
                    if (yield this._ready(), t > 0)
                        for (; this._internalBlockNumber;) {
                            const e = this._internalBlockNumber;
                            try {
                                const r = yield e;
                                if (tf() - r.respTime <= t) return r.blockNumber;
                                break
                            } catch (t) {
                                if (this._internalBlockNumber === e) break
                            }
                        }
                    const e = tf(),
                        r = ku({
                            blockNumber: this.perform("getBlockNumber", {}),
                            networkError: this.getNetwork().then(t => null, t => t)
                        }).then(({
                            blockNumber: t,
                            networkError: n
                        }) => {
                            if (n) throw this._internalBlockNumber === r && (this._internalBlockNumber = null), n;
                            const i = tf();
                            return (t = gc.from(t).toNumber()) < this._maxInternalBlockNumber && (t = this._maxInternalBlockNumber), this._maxInternalBlockNumber = t, this._setFastBlockNumber(t), {
                                blockNumber: t,
                                reqTime: e,
                                respTime: i
                            }
                        });
                    return this._internalBlockNumber = r, r.catch(t => {
                        this._internalBlockNumber === r && (this._internalBlockNumber = null)
                    }), (yield r).blockNumber
                })
            }
            poll() {
                return Yd(this, void 0, void 0, function*() {
                    const t = wf++,
                        e = [];
                    let r = null;
                    try {
                        r = yield this._getInternalBlockNumber(100 + this.pollingInterval / 2)
                    } catch (t) {
                        return void this.emit("error", t)
                    }
                    if (this._setFastBlockNumber(r), this.emit("poll", t, r), r !== this._lastBlockNumber) {
                        if (-2 === this._emitted.block && (this._emitted.block = r - 1), Math.abs(this._emitted.block - r) > 1e3) Qd.warn(`network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`), this.emit("error", Qd.makeError("network block skew detected", Da.errors.NETWORK_ERROR, {
                            blockNumber: r,
                            event: "blockSkew",
                            previousBlockNumber: this._emitted.block
                        })), this.emit("block", r);
                        else
                            for (let t = this._emitted.block + 1; t <= r; t++) this.emit("block", t);
                        this._emitted.block !== r && (this._emitted.block = r, Object.keys(this._emitted).forEach(t => {
                            if ("block" === t) return;
                            const e = this._emitted[t];
                            "pending" !== e && r - e > 12 && delete this._emitted[t]
                        })), -2 === this._lastBlockNumber && (this._lastBlockNumber = r - 1), this._events.forEach(t => {
                            switch (t.type) {
                                case "tx": {
                                    const r = t.hash;
                                    let n = this.getTransactionReceipt(r).then(t => t && null != t.blockNumber ? (this._emitted["t:" + r] = t.blockNumber, this.emit(r, t), null) : null).catch(t => {
                                        this.emit("error", t)
                                    });
                                    e.push(n);
                                    break
                                }
                                case "filter":
                                    if (!t._inflight) {
                                        t._inflight = !0, -2 === t._lastBlockNumber && (t._lastBlockNumber = r - 1);
                                        const n = t.filter;
                                        n.fromBlock = t._lastBlockNumber + 1, n.toBlock = r;
                                        const i = n.toBlock - this._maxFilterBlockRange;
                                        i > n.fromBlock && (n.fromBlock = i), n.fromBlock < 0 && (n.fromBlock = 0);
                                        const s = this.getLogs(n).then(e => {
                                            t._inflight = !1, 0 !== e.length && e.forEach(e => {
                                                e.blockNumber > t._lastBlockNumber && (t._lastBlockNumber = e.blockNumber), this._emitted["b:" + e.blockHash] = e.blockNumber, this._emitted["t:" + e.transactionHash] = e.blockNumber, this.emit(n, e)
                                            })
                                        }).catch(e => {
                                            this.emit("error", e), t._inflight = !1
                                        });
                                        e.push(s)
                                    }
                            }
                        }), this._lastBlockNumber = r, Promise.all(e).then(() => {
                            this.emit("didPoll", t)
                        }).catch(t => {
                            this.emit("error", t)
                        })
                    } else this.emit("didPoll", t)
                })
            }
            resetEventsBlock(t) {
                this._lastBlockNumber = t - 1, this.polling && this.poll()
            }
            get network() {
                return this._network
            }
            detectNetwork() {
                return Yd(this, void 0, void 0, function*() {
                    return Qd.throwError("provider does not support network detection", Da.errors.UNSUPPORTED_OPERATION, {
                        operation: "provider.detectNetwork"
                    })
                })
            }
            getNetwork() {
                return Yd(this, void 0, void 0, function*() {
                    const t = yield this._ready(), e = yield this.detectNetwork();
                    if (t.chainId !== e.chainId) {
                        if (this.anyNetwork) return this._network = e, this._lastBlockNumber = -2, this._fastBlockNumber = null, this._fastBlockNumberPromise = null, this._fastQueryDate = 0, this._emitted.block = -2, this._maxInternalBlockNumber = -1024, this._internalBlockNumber = null, this.emit("network", e, t), yield ef(0), this._network;
                        const r = Qd.makeError("underlying network changed", Da.errors.NETWORK_ERROR, {
                            event: "changed",
                            network: t,
                            detectedNetwork: e
                        });
                        throw this.emit("error", r), r
                    }
                    return t
                })
            }
            get blockNumber() {
                return this._getInternalBlockNumber(100 + this.pollingInterval / 2).then(t => {
                    this._setFastBlockNumber(t)
                }, t => {}), null != this._fastBlockNumber ? this._fastBlockNumber : -1
            }
            get polling() {
                return null != this._poller
            }
            set polling(t) {
                t && !this._poller ? (this._poller = setInterval(() => {
                    this.poll()
                }, this.pollingInterval), this._bootstrapPoll || (this._bootstrapPoll = setTimeout(() => {
                    this.poll(), this._bootstrapPoll = setTimeout(() => {
                        this._poller || this.poll(), this._bootstrapPoll = null
                    }, this.pollingInterval)
                }, 0))) : !t && this._poller && (clearInterval(this._poller), this._poller = null)
            }
            get pollingInterval() {
                return this._pollingInterval
            }
            set pollingInterval(t) {
                if ("number" != typeof t || t <= 0 || parseInt(String(t)) != t) throw new Error("invalid polling interval");
                this._pollingInterval = t, this._poller && (clearInterval(this._poller), this._poller = setInterval(() => {
                    this.poll()
                }, this._pollingInterval))
            }
            _getFastBlockNumber() {
                const t = tf();
                return t - this._fastQueryDate > 2 * this._pollingInterval && (this._fastQueryDate = t, this._fastBlockNumberPromise = this.getBlockNumber().then(t => ((null == this._fastBlockNumber || t > this._fastBlockNumber) && (this._fastBlockNumber = t), this._fastBlockNumber))), this._fastBlockNumberPromise
            }
            _setFastBlockNumber(t) {
                null != this._fastBlockNumber && t < this._fastBlockNumber || (this._fastQueryDate = tf(), (null == this._fastBlockNumber || t > this._fastBlockNumber) && (this._fastBlockNumber = t, this._fastBlockNumberPromise = Promise.resolve(t)))
            }
            waitForTransaction(t, e, r) {
                return Yd(this, void 0, void 0, function*() {
                    return this._waitForTransaction(t, null == e ? 1 : e, r || 0, null)
                })
            }
            _waitForTransaction(t, e, r, n) {
                return Yd(this, void 0, void 0, function*() {
                    const i = yield this.getTransactionReceipt(t);
                    return (i ? i.confirmations : 0) >= e ? i : new Promise((i, s) => {
                        const o = [];
                        let a = !1;
                        const c = function() {
                                return !!a || (a = !0, o.forEach(t => {
                                    t()
                                }), !1)
                            },
                            u = t => {
                                t.confirmations < e || c() || i(t)
                            };
                        if (this.on(t, u), o.push(() => {
                                this.removeListener(t, u)
                            }), n) {
                            let r = n.startBlock,
                                i = null;
                            const u = o => Yd(this, void 0, void 0, function*() {
                                a || (yield ef(1e3), this.getTransactionCount(n.from).then(h => Yd(this, void 0, void 0, function*() {
                                    if (!a) {
                                        if (h <= n.nonce) r = o;
                                        else {
                                            {
                                                const e = yield this.getTransaction(t);
                                                if (e && null != e.blockNumber) return
                                            }
                                            for (null == i && (i = r - 3, i < n.startBlock && (i = n.startBlock)); i <= o;) {
                                                if (a) return;
                                                const r = yield this.getBlockWithTransactions(i);
                                                for (let i = 0; i < r.transactions.length; i++) {
                                                    const o = r.transactions[i];
                                                    if (o.hash === t) return;
                                                    if (o.from === n.from && o.nonce === n.nonce) {
                                                        if (a) return;
                                                        const r = yield this.waitForTransaction(o.hash, e);
                                                        if (c()) return;
                                                        let i = "replaced";
                                                        return o.data === n.data && o.to === n.to && o.value.eq(n.value) ? i = "repriced" : "0x" === o.data && o.from === o.to && o.value.isZero() && (i = "cancelled"), void s(Qd.makeError("transaction was replaced", Da.errors.TRANSACTION_REPLACED, {
                                                            cancelled: "replaced" === i || "cancelled" === i,
                                                            reason: i,
                                                            replacement: this._wrapTransaction(o),
                                                            hash: t,
                                                            receipt: r
                                                        }))
                                                    }
                                                }
                                                i++
                                            }
                                        }
                                        a || this.once("block", u)
                                    }
                                }), t => {
                                    a || this.once("block", u)
                                }))
                            });
                            if (a) return;
                            this.once("block", u), o.push(() => {
                                this.removeListener("block", u)
                            })
                        }
                        if ("number" == typeof r && r > 0) {
                            const t = setTimeout(() => {
                                c() || s(Qd.makeError("timeout exceeded", Da.errors.TIMEOUT, {
                                    timeout: r
                                }))
                            }, r);
                            t.unref && t.unref(), o.push(() => {
                                clearTimeout(t)
                            })
                        }
                    })
                })
            }
            getBlockNumber() {
                return Yd(this, void 0, void 0, function*() {
                    return this._getInternalBlockNumber(0)
                })
            }
            getGasPrice() {
                return Yd(this, void 0, void 0, function*() {
                    yield this.getNetwork();
                    const t = yield this.perform("getGasPrice", {});
                    try {
                        return gc.from(t)
                    } catch (e) {
                        return Qd.throwError("bad result from backend", Da.errors.SERVER_ERROR, {
                            method: "getGasPrice",
                            result: t,
                            error: e
                        })
                    }
                })
            }
            getBalance(t, e) {
                return Yd(this, void 0, void 0, function*() {
                    yield this.getNetwork();
                    const r = yield ku({
                        address: this._getAddress(t),
                        blockTag: this._getBlockTag(e)
                    }), n = yield this.perform("getBalance", r);
                    try {
                        return gc.from(n)
                    } catch (t) {
                        return Qd.throwError("bad result from backend", Da.errors.SERVER_ERROR, {
                            method: "getBalance",
                            params: r,
                            result: n,
                            error: t
                        })
                    }
                })
            }
            getTransactionCount(t, e) {
                return Yd(this, void 0, void 0, function*() {
                    yield this.getNetwork();
                    const r = yield ku({
                        address: this._getAddress(t),
                        blockTag: this._getBlockTag(e)
                    }), n = yield this.perform("getTransactionCount", r);
                    try {
                        return gc.from(n).toNumber()
                    } catch (t) {
                        return Qd.throwError("bad result from backend", Da.errors.SERVER_ERROR, {
                            method: "getTransactionCount",
                            params: r,
                            result: n,
                            error: t
                        })
                    }
                })
            }
            getCode(t, e) {
                return Yd(this, void 0, void 0, function*() {
                    yield this.getNetwork();
                    const r = yield ku({
                        address: this._getAddress(t),
                        blockTag: this._getBlockTag(e)
                    }), n = yield this.perform("getCode", r);
                    try {
                        return Ya(n)
                    } catch (t) {
                        return Qd.throwError("bad result from backend", Da.errors.SERVER_ERROR, {
                            method: "getCode",
                            params: r,
                            result: n,
                            error: t
                        })
                    }
                })
            }
            getStorageAt(t, e, r) {
                return Yd(this, void 0, void 0, function*() {
                    yield this.getNetwork();
                    const n = yield ku({
                        address: this._getAddress(t),
                        blockTag: this._getBlockTag(r),
                        position: Promise.resolve(e).then(t => Za(t))
                    }), i = yield this.perform("getStorageAt", n);
                    try {
                        return Ya(i)
                    } catch (t) {
                        return Qd.throwError("bad result from backend", Da.errors.SERVER_ERROR, {
                            method: "getStorageAt",
                            params: n,
                            result: i,
                            error: t
                        })
                    }
                })
            }
            _wrapTransaction(t, e, r) {
                if (null != e && 32 !== Qa(e)) throw new Error("invalid response - sendTransaction");
                const n = t;
                return null != e && t.hash !== e && Qd.throwError("Transaction hash mismatch from Provider.sendTransaction.", Da.errors.UNKNOWN_ERROR, {
                    expectedHash: t.hash,
                    returnedHash: e
                }), n.wait = (e, n) => Yd(this, void 0, void 0, function*() {
                    let i;
                    null == e && (e = 1), null == n && (n = 0), 0 !== e && null != r && (i = {
                        data: t.data,
                        from: t.from,
                        nonce: t.nonce,
                        to: t.to,
                        value: t.value,
                        startBlock: r
                    });
                    const s = yield this._waitForTransaction(t.hash, e, n, i);
                    return null == s && 0 === e ? null : (this._emitted["t:" + t.hash] = s.blockNumber, 0 === s.status && Qd.throwError("transaction failed", Da.errors.CALL_EXCEPTION, {
                        transactionHash: t.hash,
                        transaction: t,
                        receipt: s
                    }), s)
                }), n
            }
            sendTransaction(t) {
                return Yd(this, void 0, void 0, function*() {
                    yield this.getNetwork();
                    const e = yield Promise.resolve(t).then(t => Ya(t)), r = this.formatter.transaction(t);
                    null == r.confirmations && (r.confirmations = 0);
                    const n = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                    try {
                        const t = yield this.perform("sendTransaction", {
                            signedTransaction: e
                        });
                        return this._wrapTransaction(r, t, n)
                    } catch (t) {
                        throw t.transaction = r, t.transactionHash = r.hash, t
                    }
                })
            }
            _getTransactionRequest(t) {
                return Yd(this, void 0, void 0, function*() {
                    const e = yield t, r = {};
                    return ["from", "to"].forEach(t => {
                        null != e[t] && (r[t] = Promise.resolve(e[t]).then(t => t ? this._getAddress(t) : null))
                    }), ["gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "value"].forEach(t => {
                        null != e[t] && (r[t] = Promise.resolve(e[t]).then(t => t ? gc.from(t) : null))
                    }), ["type"].forEach(t => {
                        null != e[t] && (r[t] = Promise.resolve(e[t]).then(t => null != t ? t : null))
                    }), e.accessList && (r.accessList = this.formatter.accessList(e.accessList)), ["data"].forEach(t => {
                        null != e[t] && (r[t] = Promise.resolve(e[t]).then(t => t ? Ya(t) : null))
                    }), this.formatter.transactionRequest(yield ku(r))
                })
            }
            _getFilter(t) {
                return Yd(this, void 0, void 0, function*() {
                    t = yield t;
                    const e = {};
                    return null != t.address && (e.address = this._getAddress(t.address)), ["blockHash", "topics"].forEach(r => {
                        null != t[r] && (e[r] = t[r])
                    }), ["fromBlock", "toBlock"].forEach(r => {
                        null != t[r] && (e[r] = this._getBlockTag(t[r]))
                    }), this.formatter.filter(yield ku(e))
                })
            }
            _call(t, e, r) {
                return Yd(this, void 0, void 0, function*() {
                    r >= 10 && Qd.throwError("CCIP read exceeded maximum redirections", Da.errors.SERVER_ERROR, {
                        redirects: r,
                        transaction: t
                    });
                    const n = t.to,
                        i = yield this.perform("call", {
                            transaction: t,
                            blockTag: e
                        });
                    if (r >= 0 && "latest" === e && null != n && "0x556f1830" === i.substring(0, 10) && Qa(i) % 32 == 4) try {
                        const s = Xa(i, 4),
                            o = Xa(s, 0, 32);
                        gc.from(o).eq(n) || Qd.throwError("CCIP Read sender did not match", Da.errors.CALL_EXCEPTION, {
                            name: "OffchainLookup",
                            signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                            transaction: t,
                            data: i
                        });
                        const a = [],
                            c = gc.from(Xa(s, 32, 64)).toNumber(),
                            u = gc.from(Xa(s, c, c + 32)).toNumber(),
                            h = Xa(s, c + 32);
                        for (let e = 0; e < u; e++) {
                            const r = hf(h, 32 * e);
                            null == r && Qd.throwError("CCIP Read contained corrupt URL string", Da.errors.CALL_EXCEPTION, {
                                name: "OffchainLookup",
                                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                transaction: t,
                                data: i
                            }), a.push(r)
                        }
                        const l = lf(s, 64);
                        gc.from(Xa(s, 100, 128)).isZero() || Qd.throwError("CCIP Read callback selector included junk", Da.errors.CALL_EXCEPTION, {
                            name: "OffchainLookup",
                            signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                            transaction: t,
                            data: i
                        });
                        const d = Xa(s, 96, 100),
                            f = lf(s, 128),
                            p = yield this.ccipReadFetch(t, l, a);
                        null == p && Qd.throwError("CCIP Read disabled or provided no URLs", Da.errors.CALL_EXCEPTION, {
                            name: "OffchainLookup",
                            signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                            transaction: t,
                            data: i
                        });
                        const m = {
                            to: n,
                            data: $a([d, mf([p, f])])
                        };
                        return this._call(m, e, r + 1)
                    } catch (t) {
                        if (t.code === Da.errors.SERVER_ERROR) throw t
                    }
                    try {
                        return Ya(i)
                    } catch (r) {
                        return Qd.throwError("bad result from backend", Da.errors.SERVER_ERROR, {
                            method: "call",
                            params: {
                                transaction: t,
                                blockTag: e
                            },
                            result: i,
                            error: r
                        })
                    }
                })
            }
            call(t, e) {
                return Yd(this, void 0, void 0, function*() {
                    yield this.getNetwork();
                    const r = yield ku({
                        transaction: this._getTransactionRequest(t),
                        blockTag: this._getBlockTag(e),
                        ccipReadEnabled: Promise.resolve(t.ccipReadEnabled)
                    });
                    return this._call(r.transaction, r.blockTag, r.ccipReadEnabled ? 0 : -1)
                })
            }
            estimateGas(t) {
                return Yd(this, void 0, void 0, function*() {
                    yield this.getNetwork();
                    const e = yield ku({
                        transaction: this._getTransactionRequest(t)
                    }), r = yield this.perform("estimateGas", e);
                    try {
                        return gc.from(r)
                    } catch (t) {
                        return Qd.throwError("bad result from backend", Da.errors.SERVER_ERROR, {
                            method: "estimateGas",
                            params: e,
                            result: r,
                            error: t
                        })
                    }
                })
            }
            _getAddress(t) {
                return Yd(this, void 0, void 0, function*() {
                    "string" != typeof(t = yield t) && Qd.throwArgumentError("invalid address or ENS name", "name", t);
                    const e = yield this.resolveName(t);
                    return null == e && Qd.throwError("ENS name not configured", Da.errors.UNSUPPORTED_OPERATION, {
                        operation: `resolveName(${JSON.stringify(t)})`
                    }), e
                })
            }
            _getBlock(t, e) {
                return Yd(this, void 0, void 0, function*() {
                    yield this.getNetwork(), t = yield t;
                    let r = -128;
                    const n = {
                        includeTransactions: !!e
                    };
                    if (Wa(t, 32)) n.blockHash = t;
                    else try {
                        n.blockTag = yield this._getBlockTag(t), Wa(n.blockTag) && (r = parseInt(n.blockTag.substring(2), 16))
                    } catch (e) {
                        Qd.throwArgumentError("invalid block hash or block tag", "blockHashOrBlockTag", t)
                    }
                    return Ll(() => Yd(this, void 0, void 0, function*() {
                        const t = yield this.perform("getBlock", n);
                        if (null == t) return null != n.blockHash && null == this._emitted["b:" + n.blockHash] || null != n.blockTag && r > this._emitted.block ? null : void 0;
                        if (e) {
                            let e = null;
                            for (let r = 0; r < t.transactions.length; r++) {
                                const n = t.transactions[r];
                                if (null == n.blockNumber) n.confirmations = 0;
                                else if (null == n.confirmations) {
                                    null == e && (e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval));
                                    let t = e - n.blockNumber + 1;
                                    t <= 0 && (t = 1), n.confirmations = t
                                }
                            }
                            const r = this.formatter.blockWithTransactions(t);
                            return r.transactions = r.transactions.map(t => this._wrapTransaction(t)), r
                        }
                        return this.formatter.block(t)
                    }), {
                        oncePoll: this
                    })
                })
            }
            getBlock(t) {
                return this._getBlock(t, !1)
            }
            getBlockWithTransactions(t) {
                return this._getBlock(t, !0)
            }
            getTransaction(t) {
                return Yd(this, void 0, void 0, function*() {
                    yield this.getNetwork(), t = yield t;
                    const e = {
                        transactionHash: this.formatter.hash(t, !0)
                    };
                    return Ll(() => Yd(this, void 0, void 0, function*() {
                        const r = yield this.perform("getTransaction", e);
                        if (null == r) return null == this._emitted["t:" + t] ? null : void 0;
                        const n = this.formatter.transactionResponse(r);
                        if (null == n.blockNumber) n.confirmations = 0;
                        else if (null == n.confirmations) {
                            let t = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - n.blockNumber + 1;
                            t <= 0 && (t = 1), n.confirmations = t
                        }
                        return this._wrapTransaction(n)
                    }), {
                        oncePoll: this
                    })
                })
            }
            getTransactionReceipt(t) {
                return Yd(this, void 0, void 0, function*() {
                    yield this.getNetwork(), t = yield t;
                    const e = {
                        transactionHash: this.formatter.hash(t, !0)
                    };
                    return Ll(() => Yd(this, void 0, void 0, function*() {
                        const r = yield this.perform("getTransactionReceipt", e);
                        if (null == r) return null == this._emitted["t:" + t] ? null : void 0;
                        if (null == r.blockHash) return;
                        const n = this.formatter.receipt(r);
                        if (null == n.blockNumber) n.confirmations = 0;
                        else if (null == n.confirmations) {
                            let t = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - n.blockNumber + 1;
                            t <= 0 && (t = 1), n.confirmations = t
                        }
                        return n
                    }), {
                        oncePoll: this
                    })
                })
            }
            getLogs(t) {
                return Yd(this, void 0, void 0, function*() {
                    yield this.getNetwork();
                    const e = yield ku({
                        filter: this._getFilter(t)
                    }), r = yield this.perform("getLogs", e);
                    return r.forEach(t => {
                        null == t.removed && (t.removed = !1)
                    }), zd.arrayOf(this.formatter.filterLog.bind(this.formatter))(r)
                })
            }
            getEtherPrice() {
                return Yd(this, void 0, void 0, function*() {
                    return yield this.getNetwork(), this.perform("getEtherPrice", {})
                })
            }
            _getBlockTag(t) {
                return Yd(this, void 0, void 0, function*() {
                    if ("number" == typeof(t = yield t) && t < 0) {
                        t % 1 && Qd.throwArgumentError("invalid BlockTag", "blockTag", t);
                        let e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                        return e += t, e < 0 && (e = 0), this.formatter.blockTag(e)
                    }
                    return this.formatter.blockTag(t)
                })
            }
            getResolver(t) {
                return Yd(this, void 0, void 0, function*() {
                    let e = t;
                    for (;;) {
                        if ("" === e || "." === e) return null;
                        if ("eth" !== t && "eth" === e) return null;
                        const r = yield this._getResolver(e, "getResolver");
                        if (null != r) {
                            const n = new gf(this, r, t);
                            return e === t || (yield n.supportsWildcard()) ? n : null
                        }
                        e = e.split(".").slice(1).join(".")
                    }
                })
            }
            _getResolver(t, e) {
                return Yd(this, void 0, void 0, function*() {
                    null == e && (e = "ENS");
                    const r = yield this.getNetwork();
                    r.ensAddress || Qd.throwError("network does not support ENS", Da.errors.UNSUPPORTED_OPERATION, {
                        operation: e,
                        network: r.name
                    });
                    try {
                        const e = yield this.call({
                            to: r.ensAddress,
                            data: "0x0178b8bf" + ou(t).substring(2)
                        });
                        return this.formatter.callAddress(e)
                    } catch (t) {}
                    return null
                })
            }
            resolveName(t) {
                return Yd(this, void 0, void 0, function*() {
                    t = yield t;
                    try {
                        return Promise.resolve(this.formatter.address(t))
                    } catch (e) {
                        if (Wa(t)) throw e
                    }
                    "string" != typeof t && Qd.throwArgumentError("invalid ENS name", "name", t);
                    const e = yield this.getResolver(t);
                    return e ? yield e.getAddress(): null
                })
            }
            lookupAddress(t) {
                return Yd(this, void 0, void 0, function*() {
                    t = yield t;
                    const e = (t = this.formatter.address(t)).substring(2).toLowerCase() + ".addr.reverse",
                        r = yield this._getResolver(e, "lookupAddress");
                    if (null == r) return null;
                    const n = hf(yield this.call({
                        to: r,
                        data: "0x691f3431" + ou(e).substring(2)
                    }), 0);
                    return (yield this.resolveName(n)) != t ? null : n
                })
            }
            getAvatar(t) {
                return Yd(this, void 0, void 0, function*() {
                    let e = null;
                    if (Wa(t)) {
                        const r = this.formatter.address(t).substring(2).toLowerCase() + ".addr.reverse",
                            n = yield this._getResolver(r, "getAvatar");
                        if (!n) return null;
                        e = new gf(this, n, r);
                        try {
                            const t = yield e.getAvatar();
                            if (t) return t.url
                        } catch (t) {
                            if (t.code !== Da.errors.CALL_EXCEPTION) throw t
                        }
                        try {
                            const t = hf(yield this.call({
                                to: n,
                                data: "0x691f3431" + ou(r).substring(2)
                            }), 0);
                            e = yield this.getResolver(t)
                        } catch (t) {
                            if (t.code !== Da.errors.CALL_EXCEPTION) throw t;
                            return null
                        }
                    } else if (e = yield this.getResolver(t), !e) return null;
                    const r = yield e.getAvatar();
                    return null == r ? null : r.url
                })
            }
            perform(t, e) {
                return Qd.throwError(t + " not implemented", Da.errors.NOT_IMPLEMENTED, {
                    operation: t
                })
            }
            _startEvent(t) {
                this.polling = this._events.filter(t => t.pollable()).length > 0
            }
            _stopEvent(t) {
                this.polling = this._events.filter(t => t.pollable()).length > 0
            }
            _addEventListener(t, e, r) {
                const n = new nf(Zd(t), e, r);
                return this._events.push(n), this._startEvent(n), this
            }
            on(t, e) {
                return this._addEventListener(t, e, !1)
            }
            once(t, e) {
                return this._addEventListener(t, e, !0)
            }
            emit(t, ...e) {
                let r = !1,
                    n = [],
                    i = Zd(t);
                return this._events = this._events.filter(t => t.tag !== i || (setTimeout(() => {
                    t.listener.apply(this, e)
                }, 0), r = !0, !t.once || (n.push(t), !1))), n.forEach(t => {
                    this._stopEvent(t)
                }), r
            }
            listenerCount(t) {
                if (!t) return this._events.length;
                let e = Zd(t);
                return this._events.filter(t => t.tag === e).length
            }
            listeners(t) {
                if (null == t) return this._events.map(t => t.listener);
                let e = Zd(t);
                return this._events.filter(t => t.tag === e).map(t => t.listener)
            }
            off(t, e) {
                if (null == e) return this.removeAllListeners(t);
                const r = [];
                let n = !1,
                    i = Zd(t);
                return this._events = this._events.filter(t => t.tag !== i || t.listener != e || (!!n || (n = !0, r.push(t), !1))), r.forEach(t => {
                    this._stopEvent(t)
                }), this
            }
            removeAllListeners(t) {
                let e = [];
                if (null == t) e = this._events, this._events = [];
                else {
                    const r = Zd(t);
                    this._events = this._events.filter(t => t.tag !== r || (e.push(t), !1))
                }
                return e.forEach(t => {
                    this._stopEvent(t)
                }), this
            }
        }
        var Af = function(t, e, r, n) {
            return new(r || (r = Promise))(function(i, s) {
                function o(t) {
                    try {
                        c(n.next(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function a(t) {
                    try {
                        c(n.throw(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                        t(e)
                    })).then(o, a)
                }
                c((n = n.apply(t, e || [])).next())
            })
        };
        const bf = new Da("abstract-signer/5.8.0"),
            Ef = ["accessList", "ccipReadEnabled", "chainId", "customData", "data", "from", "gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "type", "value"],
            _f = [Da.errors.INSUFFICIENT_FUNDS, Da.errors.NONCE_EXPIRED, Da.errors.REPLACEMENT_UNDERPRICED];
        class Rf {
            constructor() {
                bf.checkAbstract(new.target, Rf), Tu(this, "_isSigner", !0)
            }
            getBalance(t) {
                return Af(this, void 0, void 0, function*() {
                    return this._checkProvider("getBalance"), yield this.provider.getBalance(this.getAddress(), t)
                })
            }
            getTransactionCount(t) {
                return Af(this, void 0, void 0, function*() {
                    return this._checkProvider("getTransactionCount"), yield this.provider.getTransactionCount(this.getAddress(), t)
                })
            }
            estimateGas(t) {
                return Af(this, void 0, void 0, function*() {
                    this._checkProvider("estimateGas");
                    const e = yield ku(this.checkTransaction(t));
                    return yield this.provider.estimateGas(e)
                })
            }
            call(t, e) {
                return Af(this, void 0, void 0, function*() {
                    this._checkProvider("call");
                    const r = yield ku(this.checkTransaction(t));
                    return yield this.provider.call(r, e)
                })
            }
            sendTransaction(t) {
                return Af(this, void 0, void 0, function*() {
                    this._checkProvider("sendTransaction");
                    const e = yield this.populateTransaction(t), r = yield this.signTransaction(e);
                    return yield this.provider.sendTransaction(r)
                })
            }
            getChainId() {
                return Af(this, void 0, void 0, function*() {
                    this._checkProvider("getChainId");
                    return (yield this.provider.getNetwork()).chainId
                })
            }
            getGasPrice() {
                return Af(this, void 0, void 0, function*() {
                    return this._checkProvider("getGasPrice"), yield this.provider.getGasPrice()
                })
            }
            getFeeData() {
                return Af(this, void 0, void 0, function*() {
                    return this._checkProvider("getFeeData"), yield this.provider.getFeeData()
                })
            }
            resolveName(t) {
                return Af(this, void 0, void 0, function*() {
                    return this._checkProvider("resolveName"), yield this.provider.resolveName(t)
                })
            }
            checkTransaction(t) {
                for (const e in t) - 1 === Ef.indexOf(e) && bf.throwArgumentError("invalid transaction key: " + e, "transaction", t);
                const e = Su(t);
                return null == e.from ? e.from = this.getAddress() : e.from = Promise.all([Promise.resolve(e.from), this.getAddress()]).then(e => (e[0].toLowerCase() !== e[1].toLowerCase() && bf.throwArgumentError("from address mismatch", "transaction", t), e[0])), e
            }
            populateTransaction(t) {
                return Af(this, void 0, void 0, function*() {
                    const e = yield ku(this.checkTransaction(t));
                    null != e.to && (e.to = Promise.resolve(e.to).then(t => Af(this, void 0, void 0, function*() {
                        if (null == t) return null;
                        const e = yield this.resolveName(t);
                        return null == e && bf.throwArgumentError("provided ENS name resolves to null", "tx.to", t), e
                    })), e.to.catch(t => {}));
                    const r = null != e.maxFeePerGas || null != e.maxPriorityFeePerGas;
                    if (null == e.gasPrice || 2 !== e.type && !r ? 0 !== e.type && 1 !== e.type || !r || bf.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", t) : bf.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", t), 2 !== e.type && null != e.type || null == e.maxFeePerGas || null == e.maxPriorityFeePerGas)
                        if (0 === e.type || 1 === e.type) null == e.gasPrice && (e.gasPrice = this.getGasPrice());
                        else {
                            const t = yield this.getFeeData();
                            if (null == e.type)
                                if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas)
                                    if (e.type = 2, null != e.gasPrice) {
                                        const t = e.gasPrice;
                                        delete e.gasPrice, e.maxFeePerGas = t, e.maxPriorityFeePerGas = t
                                    } else null == e.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas), null == e.maxPriorityFeePerGas && (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas);
                            else null != t.gasPrice ? (r && bf.throwError("network does not support EIP-1559", Da.errors.UNSUPPORTED_OPERATION, {
                                operation: "populateTransaction"
                            }), null == e.gasPrice && (e.gasPrice = t.gasPrice), e.type = 0) : bf.throwError("failed to get consistent fee data", Da.errors.UNSUPPORTED_OPERATION, {
                                operation: "signer.getFeeData"
                            });
                            else 2 === e.type && (null == e.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas), null == e.maxPriorityFeePerGas && (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas))
                        }
                    else e.type = 2;
                    return null == e.nonce && (e.nonce = this.getTransactionCount("pending")), null == e.gasLimit && (e.gasLimit = this.estimateGas(e).catch(t => {
                        if (_f.indexOf(t.code) >= 0) throw t;
                        return bf.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", Da.errors.UNPREDICTABLE_GAS_LIMIT, {
                            error: t,
                            tx: e
                        })
                    })), null == e.chainId ? e.chainId = this.getChainId() : e.chainId = Promise.all([Promise.resolve(e.chainId), this.getChainId()]).then(e => (0 !== e[1] && e[0] !== e[1] && bf.throwArgumentError("chainId address mismatch", "transaction", t), e[0])), yield ku(e)
                })
            }
            _checkProvider(t) {
                this.provider || bf.throwError("missing provider", Da.errors.UNSUPPORTED_OPERATION, {
                    operation: t || "_checkProvider"
                })
            }
            static isSigner(t) {
                return !(!t || !t._isSigner)
            }
        }
        var Tf = function(t, e, r, n) {
            return new(r || (r = Promise))(function(i, s) {
                function o(t) {
                    try {
                        c(n.next(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function a(t) {
                    try {
                        c(n.throw(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                        t(e)
                    })).then(o, a)
                }
                c((n = n.apply(t, e || [])).next())
            })
        };
        const If = new Da(jl),
            kf = ["call", "estimateGas"];

        function Sf(t, e) {
            if (null == t) return null;
            if ("string" == typeof t.message && t.message.match("reverted")) {
                const r = Wa(t.data) ? t.data : null;
                if (!e || r) return {
                    message: t.message,
                    data: r
                }
            }
            if ("object" == typeof t) {
                for (const r in t) {
                    const n = Sf(t[r], e);
                    if (n) return n
                }
                return null
            }
            if ("string" == typeof t) try {
                return Sf(JSON.parse(t), e)
            } catch (t) {}
            return null
        }

        function Nf(t, e, r) {
            const n = r.transaction || r.signedTransaction;
            if ("call" === t) {
                const t = Sf(e, !0);
                if (t) return t.data;
                If.throwError("missing revert data in call exception; Transaction reverted without a reason string", Da.errors.CALL_EXCEPTION, {
                    data: "0x",
                    transaction: n,
                    error: e
                })
            }
            if ("estimateGas" === t) {
                let r = Sf(e.body, !1);
                null == r && (r = Sf(e, !1)), r && If.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", Da.errors.UNPREDICTABLE_GAS_LIMIT, {
                    reason: r.message,
                    method: t,
                    transaction: n,
                    error: e
                })
            }
            let i = e.message;
            throw e.code === Da.errors.SERVER_ERROR && e.error && "string" == typeof e.error.message ? i = e.error.message : "string" == typeof e.body ? i = e.body : "string" == typeof e.responseText && (i = e.responseText), i = (i || "").toLowerCase(), i.match(/insufficient funds|base fee exceeds gas limit|InsufficientFunds/i) && If.throwError("insufficient funds for intrinsic transaction cost", Da.errors.INSUFFICIENT_FUNDS, {
                error: e,
                method: t,
                transaction: n
            }), i.match(/nonce (is )?too low/i) && If.throwError("nonce has already been used", Da.errors.NONCE_EXPIRED, {
                error: e,
                method: t,
                transaction: n
            }), i.match(/replacement transaction underpriced|transaction gas price.*too low/i) && If.throwError("replacement fee too low", Da.errors.REPLACEMENT_UNDERPRICED, {
                error: e,
                method: t,
                transaction: n
            }), i.match(/only replay-protected/i) && If.throwError("legacy pre-eip-155 transactions not supported", Da.errors.UNSUPPORTED_OPERATION, {
                error: e,
                method: t,
                transaction: n
            }), kf.indexOf(t) >= 0 && i.match(/gas required exceeds allowance|always failing transaction|execution reverted|revert/) && If.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", Da.errors.UNPREDICTABLE_GAS_LIMIT, {
                error: e,
                method: t,
                transaction: n
            }), e
        }

        function Of(t) {
            return new Promise(function(e) {
                setTimeout(e, t)
            })
        }

        function Pf(t) {
            if (t.error) {
                const e = new Error(t.error.message);
                throw e.code = t.error.code, e.data = t.error.data, e
            }
            return t.result
        }

        function Cf(t) {
            return t ? t.toLowerCase() : t
        }
        const xf = {};
        class Mf extends Rf {
            constructor(t, e, r) {
                if (super(), t !== xf) throw new Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");
                Tu(this, "provider", e), null == r && (r = 0), "string" == typeof r ? (Tu(this, "_address", this.provider.formatter.address(r)), Tu(this, "_index", null)) : "number" == typeof r ? (Tu(this, "_index", r), Tu(this, "_address", null)) : If.throwArgumentError("invalid address or index", "addressOrIndex", r)
            }
            connect(t) {
                return If.throwError("cannot alter JSON-RPC Signer connection", Da.errors.UNSUPPORTED_OPERATION, {
                    operation: "connect"
                })
            }
            connectUnchecked() {
                return new Uf(xf, this.provider, this._address || this._index)
            }
            getAddress() {
                return this._address ? Promise.resolve(this._address) : this.provider.send("eth_accounts", []).then(t => (t.length <= this._index && If.throwError("unknown account #" + this._index, Da.errors.UNSUPPORTED_OPERATION, {
                    operation: "getAddress"
                }), this.provider.formatter.address(t[this._index])))
            }
            sendUncheckedTransaction(t) {
                t = Su(t);
                const e = this.getAddress().then(t => (t && (t = t.toLowerCase()), t));
                if (null == t.gasLimit) {
                    const r = Su(t);
                    r.from = e, t.gasLimit = this.provider.estimateGas(r)
                }
                return null != t.to && (t.to = Promise.resolve(t.to).then(t => Tf(this, void 0, void 0, function*() {
                    if (null == t) return null;
                    const e = yield this.provider.resolveName(t);
                    return null == e && If.throwArgumentError("provided ENS name resolves to null", "tx.to", t), e
                }))), ku({
                    tx: ku(t),
                    sender: e
                }).then(({
                    tx: e,
                    sender: r
                }) => {
                    null != e.from ? e.from.toLowerCase() !== r && If.throwArgumentError("from address mismatch", "transaction", t) : e.from = r;
                    const n = this.provider.constructor.hexlifyTransaction(e, {
                        from: !0
                    });
                    return this.provider.send("eth_sendTransaction", [n]).then(t => t, t => ("string" == typeof t.message && t.message.match(/user denied/i) && If.throwError("user rejected transaction", Da.errors.ACTION_REJECTED, {
                        action: "sendTransaction",
                        transaction: e
                    }), Nf("sendTransaction", t, n)))
                })
            }
            signTransaction(t) {
                return If.throwError("signing transactions is unsupported", Da.errors.UNSUPPORTED_OPERATION, {
                    operation: "signTransaction"
                })
            }
            sendTransaction(t) {
                return Tf(this, void 0, void 0, function*() {
                    const e = yield this.provider._getInternalBlockNumber(100 + 2 * this.provider.pollingInterval), r = yield this.sendUncheckedTransaction(t);
                    try {
                        return yield Ll(() => Tf(this, void 0, void 0, function*() {
                            const t = yield this.provider.getTransaction(r);
                            if (null !== t) return this.provider._wrapTransaction(t, r, e)
                        }), {
                            oncePoll: this.provider
                        })
                    } catch (t) {
                        throw t.transactionHash = r, t
                    }
                })
            }
            signMessage(t) {
                return Tf(this, void 0, void 0, function*() {
                    const e = "string" == typeof t ? Pc(t) : t,
                        r = yield this.getAddress();
                    try {
                        return yield this.provider.send("personal_sign", [Ya(e), r.toLowerCase()])
                    } catch (e) {
                        throw "string" == typeof e.message && e.message.match(/user denied/i) && If.throwError("user rejected signing", Da.errors.ACTION_REJECTED, {
                            action: "signMessage",
                            from: r,
                            messageData: t
                        }), e
                    }
                })
            }
            _legacySignMessage(t) {
                return Tf(this, void 0, void 0, function*() {
                    const e = "string" == typeof t ? Pc(t) : t,
                        r = yield this.getAddress();
                    try {
                        return yield this.provider.send("eth_sign", [r.toLowerCase(), Ya(e)])
                    } catch (e) {
                        throw "string" == typeof e.message && e.message.match(/user denied/i) && If.throwError("user rejected signing", Da.errors.ACTION_REJECTED, {
                            action: "_legacySignMessage",
                            from: r,
                            messageData: t
                        }), e
                    }
                })
            }
            _signTypedData(t, e, r) {
                return Tf(this, void 0, void 0, function*() {
                    const n = yield Yu.resolveNames(t, e, r, t => this.provider.resolveName(t)), i = yield this.getAddress();
                    try {
                        return yield this.provider.send("eth_signTypedData_v4", [i.toLowerCase(), JSON.stringify(Yu.getPayload(n.domain, e, n.value))])
                    } catch (t) {
                        throw "string" == typeof t.message && t.message.match(/user denied/i) && If.throwError("user rejected signing", Da.errors.ACTION_REJECTED, {
                            action: "_signTypedData",
                            from: i,
                            messageData: {
                                domain: n.domain,
                                types: e,
                                value: n.value
                            }
                        }), t
                    }
                })
            }
            unlock(t) {
                return Tf(this, void 0, void 0, function*() {
                    const e = this.provider,
                        r = yield this.getAddress();
                    return e.send("personal_unlockAccount", [r.toLowerCase(), t, null])
                })
            }
        }
        class Uf extends Mf {
            sendTransaction(t) {
                return this.sendUncheckedTransaction(t).then(t => ({
                    hash: t,
                    nonce: null,
                    gasLimit: null,
                    gasPrice: null,
                    data: null,
                    value: null,
                    chainId: null,
                    confirmations: 0,
                    from: null,
                    wait: e => this.provider.waitForTransaction(t, e)
                }))
            }
        }
        const Df = {
            chainId: !0,
            data: !0,
            gasLimit: !0,
            gasPrice: !0,
            nonce: !0,
            to: !0,
            value: !0,
            type: !0,
            accessList: !0,
            maxFeePerGas: !0,
            maxPriorityFeePerGas: !0
        };
        class Lf extends vf {
            constructor(t, e) {
                let r = e;
                null == r && (r = new Promise((t, e) => {
                    setTimeout(() => {
                        this.detectNetwork().then(e => {
                            t(e)
                        }, t => {
                            e(t)
                        })
                    }, 0)
                })), super(r), t || (t = Iu(this.constructor, "defaultUrl")()), Tu(this, "connection", "string" == typeof t ? Object.freeze({
                    url: t
                }) : Object.freeze(Su(t))), this._nextId = 42
            }
            get _cache() {
                return null == this._eventLoopCache && (this._eventLoopCache = {}), this._eventLoopCache
            }
            static defaultUrl() {
                return "http://localhost:8545"
            }
            detectNetwork() {
                return this._cache.detectNetwork || (this._cache.detectNetwork = this._uncachedDetectNetwork(), setTimeout(() => {
                    this._cache.detectNetwork = null
                }, 0)), this._cache.detectNetwork
            }
            _uncachedDetectNetwork() {
                return Tf(this, void 0, void 0, function*() {
                    yield Of(0);
                    let t = null;
                    try {
                        t = yield this.send("eth_chainId", [])
                    } catch (e) {
                        try {
                            t = yield this.send("net_version", [])
                        } catch (t) {}
                    }
                    if (null != t) {
                        const e = Iu(this.constructor, "getNetwork");
                        try {
                            return e(gc.from(t).toNumber())
                        } catch (e) {
                            return If.throwError("could not detect network", Da.errors.NETWORK_ERROR, {
                                chainId: t,
                                event: "invalidNetwork",
                                serverError: e
                            })
                        }
                    }
                    return If.throwError("could not detect network", Da.errors.NETWORK_ERROR, {
                        event: "noNetwork"
                    })
                })
            }
            getSigner(t) {
                return new Mf(xf, this, t)
            }
            getUncheckedSigner(t) {
                return this.getSigner(t).connectUnchecked()
            }
            listAccounts() {
                return this.send("eth_accounts", []).then(t => t.map(t => this.formatter.address(t)))
            }
            send(t, e) {
                const r = {
                    method: t,
                    params: e,
                    id: this._nextId++,
                    jsonrpc: "2.0"
                };
                this.emit("debug", {
                    action: "request",
                    request: Cu(r),
                    provider: this
                });
                const n = ["eth_chainId", "eth_blockNumber"].indexOf(t) >= 0;
                if (n && this._cache[t]) return this._cache[t];
                const i = Dl(this.connection, JSON.stringify(r), Pf).then(t => (this.emit("debug", {
                    action: "response",
                    request: r,
                    response: t,
                    provider: this
                }), t), t => {
                    throw this.emit("debug", {
                        action: "response",
                        error: t,
                        request: r,
                        provider: this
                    }), t
                });
                return n && (this._cache[t] = i, setTimeout(() => {
                    this._cache[t] = null
                }, 0)), i
            }
            prepareRequest(t, e) {
                switch (t) {
                    case "getBlockNumber":
                        return ["eth_blockNumber", []];
                    case "getGasPrice":
                        return ["eth_gasPrice", []];
                    case "getBalance":
                        return ["eth_getBalance", [Cf(e.address), e.blockTag]];
                    case "getTransactionCount":
                        return ["eth_getTransactionCount", [Cf(e.address), e.blockTag]];
                    case "getCode":
                        return ["eth_getCode", [Cf(e.address), e.blockTag]];
                    case "getStorageAt":
                        return ["eth_getStorageAt", [Cf(e.address), ec(e.position, 32), e.blockTag]];
                    case "sendTransaction":
                        return ["eth_sendRawTransaction", [e.signedTransaction]];
                    case "getBlock":
                        return e.blockTag ? ["eth_getBlockByNumber", [e.blockTag, !!e.includeTransactions]] : e.blockHash ? ["eth_getBlockByHash", [e.blockHash, !!e.includeTransactions]] : null;
                    case "getTransaction":
                        return ["eth_getTransactionByHash", [e.transactionHash]];
                    case "getTransactionReceipt":
                        return ["eth_getTransactionReceipt", [e.transactionHash]];
                    case "call":
                        return ["eth_call", [Iu(this.constructor, "hexlifyTransaction")(e.transaction, {
                            from: !0
                        }), e.blockTag]];
                    case "estimateGas":
                        return ["eth_estimateGas", [Iu(this.constructor, "hexlifyTransaction")(e.transaction, {
                            from: !0
                        })]];
                    case "getLogs":
                        return e.filter && null != e.filter.address && (e.filter.address = Cf(e.filter.address)), ["eth_getLogs", [e.filter]]
                }
                return null
            }
            perform(t, e) {
                return Tf(this, void 0, void 0, function*() {
                    if ("call" === t || "estimateGas" === t) {
                        const t = e.transaction;
                        if (t && null != t.type && gc.from(t.type).isZero() && null == t.maxFeePerGas && null == t.maxPriorityFeePerGas) {
                            const r = yield this.getFeeData();
                            null == r.maxFeePerGas && null == r.maxPriorityFeePerGas && ((e = Su(e)).transaction = Su(t), delete e.transaction.type)
                        }
                    }
                    const r = this.prepareRequest(t, e);
                    null == r && If.throwError(t + " not implemented", Da.errors.NOT_IMPLEMENTED, {
                        operation: t
                    });
                    try {
                        return yield this.send(r[0], r[1])
                    } catch (r) {
                        return Nf(t, r, e)
                    }
                })
            }
            _startEvent(t) {
                "pending" === t.tag && this._startPending(), super._startEvent(t)
            }
            _startPending() {
                if (null != this._pendingFilter) return;
                const t = this,
                    e = this.send("eth_newPendingTransactionFilter", []);
                this._pendingFilter = e, e.then(function(r) {
                    return function n() {
                        t.send("eth_getFilterChanges", [r]).then(function(r) {
                            if (t._pendingFilter != e) return null;
                            let n = Promise.resolve();
                            return r.forEach(function(e) {
                                t._emitted["t:" + e.toLowerCase()] = "pending", n = n.then(function() {
                                    return t.getTransaction(e).then(function(e) {
                                        return t.emit("pending", e), null
                                    })
                                })
                            }), n.then(function() {
                                return Of(1e3)
                            })
                        }).then(function() {
                            if (t._pendingFilter == e) return setTimeout(function() {
                                n()
                            }, 0), null;
                            t.send("eth_uninstallFilter", [r])
                        }).catch(t => {})
                    }(), r
                }).catch(t => {})
            }
            _stopEvent(t) {
                "pending" === t.tag && 0 === this.listenerCount("pending") && (this._pendingFilter = null), super._stopEvent(t)
            }
            static hexlifyTransaction(t, e) {
                const r = Su(Df);
                if (e)
                    for (const t in e) e[t] && (r[t] = !0);
                var n, i;
                i = r, (n = t) && "object" == typeof n || Ru.throwArgumentError("invalid object", "object", n), Object.keys(n).forEach(t => {
                    i[t] || Ru.throwArgumentError("invalid object key - " + t, "transaction:" + t, n)
                });
                const s = {};
                return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach(function(e) {
                    if (null == t[e]) return;
                    const r = Za(gc.from(t[e]));
                    "gasLimit" === e && (e = "gas"), s[e] = r
                }), ["from", "to", "data"].forEach(function(e) {
                    null != t[e] && (s[e] = Ya(t[e]))
                }), t.accessList && (s.accessList = Ld(t.accessList)), s
            }
        }
        let Bf = null;
        try {
            if (Bf = WebSocket, null == Bf) throw new Error("inject please")
        } catch (t) {
            const e = new Da(jl);
            Bf = function() {
                e.throwError("WebSockets not supported in this environment", Da.errors.UNSUPPORTED_OPERATION, {
                    operation: "new WebSocket()"
                })
            }
        }
        var Ff = function(t, e, r, n) {
            return new(r || (r = Promise))(function(i, s) {
                function o(t) {
                    try {
                        c(n.next(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function a(t) {
                    try {
                        c(n.throw(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                        t(e)
                    })).then(o, a)
                }
                c((n = n.apply(t, e || [])).next())
            })
        };
        const qf = new Da(jl);
        let Gf = 1;
        class jf extends Lf {
            constructor(t, e) {
                "any" === e && qf.throwError("WebSocketProvider does not support 'any' network yet", Da.errors.UNSUPPORTED_OPERATION, {
                    operation: "network:any"
                }), super("string" == typeof t ? t : "_websocket", e), this._pollingInterval = -1, this._wsReady = !1, Tu(this, "_websocket", "string" == typeof t ? new Bf(this.connection.url) : t), Tu(this, "_requests", {}), Tu(this, "_subs", {}), Tu(this, "_subIds", {}), Tu(this, "_detectNetwork", super.detectNetwork()), this.websocket.onopen = () => {
                    this._wsReady = !0, Object.keys(this._requests).forEach(t => {
                        this.websocket.send(this._requests[t].payload)
                    })
                }, this.websocket.onmessage = t => {
                    const e = t.data,
                        r = JSON.parse(e);
                    if (null != r.id) {
                        const t = String(r.id),
                            n = this._requests[t];
                        if (delete this._requests[t], void 0 !== r.result) n.callback(null, r.result), this.emit("debug", {
                            action: "response",
                            request: JSON.parse(n.payload),
                            response: r.result,
                            provider: this
                        });
                        else {
                            let t = null;
                            r.error ? (t = new Error(r.error.message || "unknown error"), Tu(t, "code", r.error.code || null), Tu(t, "response", e)) : t = new Error("unknown error"), n.callback(t, void 0), this.emit("debug", {
                                action: "response",
                                error: t,
                                request: JSON.parse(n.payload),
                                provider: this
                            })
                        }
                    } else if ("eth_subscription" === r.method) {
                        const t = this._subs[r.params.subscription];
                        t && t.processFunc(r.params.result)
                    } else console.warn("this should not happen")
                };
                const r = setInterval(() => {
                    this.emit("poll")
                }, 1e3);
                r.unref && r.unref()
            }
            get websocket() {
                return this._websocket
            }
            detectNetwork() {
                return this._detectNetwork
            }
            get pollingInterval() {
                return 0
            }
            resetEventsBlock(t) {
                qf.throwError("cannot reset events block on WebSocketProvider", Da.errors.UNSUPPORTED_OPERATION, {
                    operation: "resetEventBlock"
                })
            }
            set pollingInterval(t) {
                qf.throwError("cannot set polling interval on WebSocketProvider", Da.errors.UNSUPPORTED_OPERATION, {
                    operation: "setPollingInterval"
                })
            }
            poll() {
                return Ff(this, void 0, void 0, function*() {
                    return null
                })
            }
            set polling(t) {
                t && qf.throwError("cannot set polling on WebSocketProvider", Da.errors.UNSUPPORTED_OPERATION, {
                    operation: "setPolling"
                })
            }
            send(t, e) {
                const r = Gf++;
                return new Promise((n, i) => {
                    const s = JSON.stringify({
                        method: t,
                        params: e,
                        id: r,
                        jsonrpc: "2.0"
                    });
                    this.emit("debug", {
                        action: "request",
                        request: JSON.parse(s),
                        provider: this
                    }), this._requests[String(r)] = {
                        callback: function(t, e) {
                            return t ? i(t) : n(e)
                        },
                        payload: s
                    }, this._wsReady && this.websocket.send(s)
                })
            }
            static defaultUrl() {
                return "ws://localhost:8546"
            }
            _subscribe(t, e, r) {
                return Ff(this, void 0, void 0, function*() {
                    let n = this._subIds[t];
                    null == n && (n = Promise.all(e).then(t => this.send("eth_subscribe", t)), this._subIds[t] = n);
                    const i = yield n;
                    this._subs[i] = {
                        tag: t,
                        processFunc: r
                    }
                })
            }
            _startEvent(t) {
                switch (t.type) {
                    case "block":
                        this._subscribe("block", ["newHeads"], t => {
                            const e = gc.from(t.number).toNumber();
                            this._emitted.block = e, this.emit("block", e)
                        });
                        break;
                    case "pending":
                        this._subscribe("pending", ["newPendingTransactions"], t => {
                            this.emit("pending", t)
                        });
                        break;
                    case "filter":
                        this._subscribe(t.tag, ["logs", this._getFilter(t.filter)], e => {
                            null == e.removed && (e.removed = !1), this.emit(t.filter, this.formatter.filterLog(e))
                        });
                        break;
                    case "tx": {
                        const e = t => {
                            const e = t.hash;
                            this.getTransactionReceipt(e).then(t => {
                                t && this.emit(e, t)
                            })
                        };
                        e(t), this._subscribe("tx", ["newHeads"], t => {
                            this._events.filter(t => "tx" === t.type).forEach(e)
                        });
                        break
                    }
                    case "debug":
                    case "poll":
                    case "willPoll":
                    case "didPoll":
                    case "error":
                        break;
                    default:
                        console.log("unhandled:", t)
                }
            }
            _stopEvent(t) {
                let e = t.tag;
                if ("tx" === t.type) {
                    if (this._events.filter(t => "tx" === t.type).length) return;
                    e = "tx"
                } else if (this.listenerCount(t.event)) return;
                const r = this._subIds[e];
                r && (delete this._subIds[e], r.then(t => {
                    this._subs[t] && (delete this._subs[t], this.send("eth_unsubscribe", [t]))
                }))
            }
            destroy() {
                return Ff(this, void 0, void 0, function*() {
                    this.websocket.readyState === Bf.CONNECTING && (yield new Promise(t => {
                        this.websocket.onopen = function() {
                            t(!0)
                        }, this.websocket.onerror = function() {
                            t(!1)
                        }
                    })), this.websocket.close(1e3)
                })
            }
        }
        var Hf = function(t, e, r, n) {
            return new(r || (r = Promise))(function(i, s) {
                function o(t) {
                    try {
                        c(n.next(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function a(t) {
                    try {
                        c(n.throw(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                        t(e)
                    })).then(o, a)
                }
                c((n = n.apply(t, e || [])).next())
            })
        };
        const zf = new Da(jl);
        class Kf extends Lf {
            detectNetwork() {
                const t = Object.create(null, {
                    detectNetwork: {
                        get: () => super.detectNetwork
                    }
                });
                return Hf(this, void 0, void 0, function*() {
                    let e = this.network;
                    return null == e && (e = yield t.detectNetwork.call(this), e || zf.throwError("no network detected", Da.errors.UNKNOWN_ERROR, {}), null == this._network && (Tu(this, "_network", e), this.emit("network", e, null))), e
                })
            }
        }
        class Vf extends Kf {
            constructor(t, e) {
                zf.checkAbstract(new.target, Vf), t = Iu(new.target, "getNetwork")(t), e = Iu(new.target, "getApiKey")(e);
                super(Iu(new.target, "getUrl")(t, e), t), "string" == typeof e ? Tu(this, "apiKey", e) : null != e && Object.keys(e).forEach(t => {
                    Tu(this, t, e[t])
                })
            }
            _startPending() {
                zf.warn("WARNING: API provider does not support pending filters")
            }
            isCommunityResource() {
                return !1
            }
            getSigner(t) {
                return zf.throwError("API provider does not support signing", Da.errors.UNSUPPORTED_OPERATION, {
                    operation: "getSigner"
                })
            }
            listAccounts() {
                return Promise.resolve([])
            }
            static getApiKey(t) {
                return t
            }
            static getUrl(t, e) {
                return zf.throwError("not implemented; sub-classes must override getUrl", Da.errors.NOT_IMPLEMENTED, {
                    operation: "getUrl"
                })
            }
        }
        const Wf = new Da(jl),
            Jf = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";
        class Yf extends jf {
            constructor(t, e) {
                const r = new Qf(t, e);
                super(r.connection.url.replace(/^http/i, "ws").replace(".alchemyapi.", ".ws.alchemyapi."), r.network), Tu(this, "apiKey", r.apiKey)
            }
            isCommunityResource() {
                return this.apiKey === Jf
            }
        }
        class Qf extends Vf {
            static getWebSocketProvider(t, e) {
                return new Yf(t, e)
            }
            static getApiKey(t) {
                return null == t ? Jf : (t && "string" != typeof t && Wf.throwArgumentError("invalid apiKey", "apiKey", t), t)
            }
            static getUrl(t, e) {
                let r = null;
                switch (t.name) {
                    case "homestead":
                        r = "eth-mainnet.alchemyapi.io/v2/";
                        break;
                    case "goerli":
                        r = "eth-goerli.g.alchemy.com/v2/";
                        break;
                    case "sepolia":
                        r = "eth-sepolia.g.alchemy.com/v2/";
                        break;
                    case "matic":
                        r = "polygon-mainnet.g.alchemy.com/v2/";
                        break;
                    case "maticmum":
                        r = "polygon-mumbai.g.alchemy.com/v2/";
                        break;
                    case "arbitrum":
                        r = "arb-mainnet.g.alchemy.com/v2/";
                        break;
                    case "arbitrum-goerli":
                        r = "arb-goerli.g.alchemy.com/v2/";
                        break;
                    case "arbitrum-sepolia":
                        r = "arb-sepolia.g.alchemy.com/v2/";
                        break;
                    case "optimism":
                        r = "opt-mainnet.g.alchemy.com/v2/";
                        break;
                    case "optimism-goerli":
                        r = "opt-goerli.g.alchemy.com/v2/";
                        break;
                    case "optimism-sepolia":
                        r = "opt-sepolia.g.alchemy.com/v2/";
                        break;
                    default:
                        Wf.throwArgumentError("unsupported network", "network", arguments[0])
                }
                return {
                    allowGzip: !0,
                    url: "https://" + r + e,
                    throttleCallback: (t, r) => (e === Jf && Jd(), Promise.resolve(!0))
                }
            }
            isCommunityResource() {
                return this.apiKey === Jf
            }
        }
        const Xf = new Da(jl),
            $f = "9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972";

        function Zf(t) {
            switch (t) {
                case "homestead":
                    return "rpc.ankr.com/eth/";
                case "ropsten":
                    return "rpc.ankr.com/eth_ropsten/";
                case "rinkeby":
                    return "rpc.ankr.com/eth_rinkeby/";
                case "goerli":
                    return "rpc.ankr.com/eth_goerli/";
                case "sepolia":
                    return "rpc.ankr.com/eth_sepolia/";
                case "matic":
                    return "rpc.ankr.com/polygon/";
                case "maticmum":
                    return "rpc.ankr.com/polygon_mumbai/";
                case "optimism":
                    return "rpc.ankr.com/optimism/";
                case "optimism-goerli":
                    return "rpc.ankr.com/optimism_testnet/";
                case "optimism-sepolia":
                    return "rpc.ankr.com/optimism_sepolia/";
                case "arbitrum":
                    return "rpc.ankr.com/arbitrum/"
            }
            return Xf.throwArgumentError("unsupported network", "name", t)
        }
        class tp extends Vf {
            isCommunityResource() {
                return this.apiKey === $f
            }
            static getApiKey(t) {
                return null == t ? $f : t
            }
            static getUrl(t, e) {
                null == e && (e = $f);
                const r = {
                    allowGzip: !0,
                    url: "https://" + Zf(t.name) + e,
                    throttleCallback: (t, r) => (e.apiKey === $f && Jd(), Promise.resolve(!0))
                };
                return null != e.projectSecret && (r.user = "", r.password = e.projectSecret), r
            }
        }
        var ep = function(t, e, r, n) {
            return new(r || (r = Promise))(function(i, s) {
                function o(t) {
                    try {
                        c(n.next(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function a(t) {
                    try {
                        c(n.throw(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                        t(e)
                    })).then(o, a)
                }
                c((n = n.apply(t, e || [])).next())
            })
        };
        const rp = new Da(jl);
        class np extends Vf {
            static getApiKey(t) {
                return null != t && rp.throwArgumentError("apiKey not supported for cloudflare", "apiKey", t), null
            }
            static getUrl(t, e) {
                let r = null;
                if ("homestead" === t.name) r = "https://cloudflare-eth.com/";
                else rp.throwArgumentError("unsupported network", "network", arguments[0]);
                return r
            }
            perform(t, e) {
                const r = Object.create(null, {
                    perform: {
                        get: () => super.perform
                    }
                });
                return ep(this, void 0, void 0, function*() {
                    if ("getBlockNumber" === t) {
                        return (yield r.perform.call(this, "getBlock", {
                            blockTag: "latest"
                        })).number
                    }
                    return r.perform.call(this, t, e)
                })
            }
        }
        var ip = function(t, e, r, n) {
            return new(r || (r = Promise))(function(i, s) {
                function o(t) {
                    try {
                        c(n.next(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function a(t) {
                    try {
                        c(n.throw(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                        t(e)
                    })).then(o, a)
                }
                c((n = n.apply(t, e || [])).next())
            })
        };
        const sp = new Da(jl);

        function op(t) {
            const e = {};
            for (let r in t) {
                if (null == t[r]) continue;
                let n = t[r];
                "type" === r && 0 === n || (n = {
                    type: !0,
                    gasLimit: !0,
                    gasPrice: !0,
                    maxFeePerGs: !0,
                    maxPriorityFeePerGas: !0,
                    nonce: !0,
                    value: !0
                } [r] ? Za(Ya(n)) : "accessList" === r ? "[" + Ld(n).map(t => `{address:"${t.address}",storageKeys:["${t.storageKeys.join('","')}"]}`).join(",") + "]" : Ya(n), e[r] = n)
            }
            return e
        }

        function ap(t) {
            if (0 == t.status && ("No records found" === t.message || "No transactions found" === t.message)) return t.result;
            if (1 != t.status || "string" != typeof t.message || !t.message.match(/^OK/)) {
                const e = new Error("invalid response");
                throw e.result = JSON.stringify(t), (t.result || "").toLowerCase().indexOf("rate limit") >= 0 && (e.throttleRetry = !0), e
            }
            return t.result
        }

        function cp(t) {
            if (t && 0 == t.status && "NOTOK" == t.message && (t.result || "").toLowerCase().indexOf("rate limit") >= 0) {
                const e = new Error("throttled response");
                throw e.result = JSON.stringify(t), e.throttleRetry = !0, e
            }
            if ("2.0" != t.jsonrpc) {
                const e = new Error("invalid response");
                throw e.result = JSON.stringify(t), e
            }
            if (t.error) {
                const e = new Error(t.error.message || "unknown error");
                throw t.error.code && (e.code = t.error.code), t.error.data && (e.data = t.error.data), e
            }
            return t.result
        }

        function up(t) {
            if ("pending" === t) throw new Error("pending not supported");
            return "latest" === t ? t : parseInt(t.substring(2), 16)
        }

        function hp(t, e, r) {
            if ("call" === t && e.code === Da.errors.SERVER_ERROR) {
                const t = e.error;
                if (t && (t.message.match(/reverted/i) || t.message.match(/VM execution error/i))) {
                    let r = t.data;
                    if (r && (r = "0x" + r.replace(/^.*0x/i, "")), Wa(r)) return r;
                    sp.throwError("missing revert data in call exception", Da.errors.CALL_EXCEPTION, {
                        error: e,
                        data: "0x"
                    })
                }
            }
            let n = e.message;
            throw e.code === Da.errors.SERVER_ERROR && (e.error && "string" == typeof e.error.message ? n = e.error.message : "string" == typeof e.body ? n = e.body : "string" == typeof e.responseText && (n = e.responseText)), n = (n || "").toLowerCase(), n.match(/insufficient funds/) && sp.throwError("insufficient funds for intrinsic transaction cost", Da.errors.INSUFFICIENT_FUNDS, {
                error: e,
                method: t,
                transaction: r
            }), n.match(/same hash was already imported|transaction nonce is too low|nonce too low/) && sp.throwError("nonce has already been used", Da.errors.NONCE_EXPIRED, {
                error: e,
                method: t,
                transaction: r
            }), n.match(/another transaction with same nonce/) && sp.throwError("replacement fee too low", Da.errors.REPLACEMENT_UNDERPRICED, {
                error: e,
                method: t,
                transaction: r
            }), n.match(/execution failed due to an exception|execution reverted/) && sp.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", Da.errors.UNPREDICTABLE_GAS_LIMIT, {
                error: e,
                method: t,
                transaction: r
            }), e
        }
        class lp extends vf {
            constructor(t, e) {
                super(t), Tu(this, "baseUrl", this.getBaseUrl()), Tu(this, "apiKey", e || null)
            }
            getBaseUrl() {
                switch (this.network ? this.network.name : "invalid") {
                    case "homestead":
                        return "https://api.etherscan.io";
                    case "goerli":
                        return "https://api-goerli.etherscan.io";
                    case "sepolia":
                        return "https://api-sepolia.etherscan.io";
                    case "matic":
                        return "https://api.polygonscan.com";
                    case "maticmum":
                        return "https://api-testnet.polygonscan.com";
                    case "arbitrum":
                        return "https://api.arbiscan.io";
                    case "arbitrum-goerli":
                        return "https://api-goerli.arbiscan.io";
                    case "optimism":
                        return "https://api-optimistic.etherscan.io";
                    case "optimism-goerli":
                        return "https://api-goerli-optimistic.etherscan.io"
                }
                return sp.throwArgumentError("unsupported network", "network", this.network.name)
            }
            getUrl(t, e) {
                const r = Object.keys(e).reduce((t, r) => {
                        const n = e[r];
                        return null != n && (t += `&${r}=${n}`), t
                    }, ""),
                    n = this.apiKey ? `&apikey=${this.apiKey}` : "";
                return `${this.baseUrl}/api?module=${t}${r}${n}`
            }
            getPostUrl() {
                return `${this.baseUrl}/api`
            }
            getPostData(t, e) {
                return e.module = t, e.apikey = this.apiKey, e
            }
            fetch(t, e, r) {
                return ip(this, void 0, void 0, function*() {
                    const n = r ? this.getPostUrl() : this.getUrl(t, e),
                        i = r ? this.getPostData(t, e) : null,
                        s = "proxy" === t ? cp : ap;
                    this.emit("debug", {
                        action: "request",
                        request: n,
                        provider: this
                    });
                    const o = {
                        url: n,
                        throttleSlotInterval: 1e3,
                        throttleCallback: (t, e) => (this.isCommunityResource() && Jd(), Promise.resolve(!0))
                    };
                    let a = null;
                    i && (o.headers = {
                        "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                    }, a = Object.keys(i).map(t => `${t}=${i[t]}`).join("&"));
                    const c = yield Dl(o, a, s || cp);
                    return this.emit("debug", {
                        action: "response",
                        request: n,
                        response: Cu(c),
                        provider: this
                    }), c
                })
            }
            detectNetwork() {
                return ip(this, void 0, void 0, function*() {
                    return this.network
                })
            }
            perform(t, e) {
                const r = Object.create(null, {
                    perform: {
                        get: () => super.perform
                    }
                });
                return ip(this, void 0, void 0, function*() {
                    switch (t) {
                        case "getBlockNumber":
                            return this.fetch("proxy", {
                                action: "eth_blockNumber"
                            });
                        case "getGasPrice":
                            return this.fetch("proxy", {
                                action: "eth_gasPrice"
                            });
                        case "getBalance":
                            return this.fetch("account", {
                                action: "balance",
                                address: e.address,
                                tag: e.blockTag
                            });
                        case "getTransactionCount":
                            return this.fetch("proxy", {
                                action: "eth_getTransactionCount",
                                address: e.address,
                                tag: e.blockTag
                            });
                        case "getCode":
                            return this.fetch("proxy", {
                                action: "eth_getCode",
                                address: e.address,
                                tag: e.blockTag
                            });
                        case "getStorageAt":
                            return this.fetch("proxy", {
                                action: "eth_getStorageAt",
                                address: e.address,
                                position: e.position,
                                tag: e.blockTag
                            });
                        case "sendTransaction":
                            return this.fetch("proxy", {
                                action: "eth_sendRawTransaction",
                                hex: e.signedTransaction
                            }, !0).catch(t => hp("sendTransaction", t, e.signedTransaction));
                        case "getBlock":
                            if (e.blockTag) return this.fetch("proxy", {
                                action: "eth_getBlockByNumber",
                                tag: e.blockTag,
                                boolean: e.includeTransactions ? "true" : "false"
                            });
                            throw new Error("getBlock by blockHash not implemented");
                        case "getTransaction":
                            return this.fetch("proxy", {
                                action: "eth_getTransactionByHash",
                                txhash: e.transactionHash
                            });
                        case "getTransactionReceipt":
                            return this.fetch("proxy", {
                                action: "eth_getTransactionReceipt",
                                txhash: e.transactionHash
                            });
                        case "call": {
                            if ("latest" !== e.blockTag) throw new Error("EtherscanProvider does not support blockTag for call");
                            const t = op(e.transaction);
                            t.module = "proxy", t.action = "eth_call";
                            try {
                                return yield this.fetch("proxy", t, !0)
                            } catch (t) {
                                return hp("call", t, e.transaction)
                            }
                        }
                        case "estimateGas": {
                            const t = op(e.transaction);
                            t.module = "proxy", t.action = "eth_estimateGas";
                            try {
                                return yield this.fetch("proxy", t, !0)
                            } catch (t) {
                                return hp("estimateGas", t, e.transaction)
                            }
                        }
                        case "getLogs": {
                            const t = {
                                action: "getLogs"
                            };
                            if (e.filter.fromBlock && (t.fromBlock = up(e.filter.fromBlock)), e.filter.toBlock && (t.toBlock = up(e.filter.toBlock)), e.filter.address && (t.address = e.filter.address), e.filter.topics && e.filter.topics.length > 0 && (e.filter.topics.length > 1 && sp.throwError("unsupported topic count", Da.errors.UNSUPPORTED_OPERATION, {
                                    topics: e.filter.topics
                                }), 1 === e.filter.topics.length)) {
                                const r = e.filter.topics[0];
                                "string" == typeof r && 66 === r.length || sp.throwError("unsupported topic format", Da.errors.UNSUPPORTED_OPERATION, {
                                    topic0: r
                                }), t.topic0 = r
                            }
                            const r = yield this.fetch("logs", t);
                            let n = {};
                            for (let t = 0; t < r.length; t++) {
                                const e = r[t];
                                if (null == e.blockHash) {
                                    if (null == n[e.blockNumber]) {
                                        const t = yield this.getBlock(e.blockNumber);
                                        t && (n[e.blockNumber] = t.hash)
                                    }
                                    e.blockHash = n[e.blockNumber]
                                }
                            }
                            return r
                        }
                        case "getEtherPrice":
                            return "homestead" !== this.network.name ? 0 : parseFloat((yield this.fetch("stats", {
                                action: "ethprice"
                            })).ethusd)
                    }
                    return r.perform.call(this, t, e)
                })
            }
            getHistory(t, e, r) {
                return ip(this, void 0, void 0, function*() {
                    const n = {
                        action: "txlist",
                        address: yield this.resolveName(t),
                        startblock: null == e ? 0 : e,
                        endblock: null == r ? 99999999 : r,
                        sort: "asc"
                    };
                    return (yield this.fetch("account", n)).map(t => {
                        ["contractAddress", "to"].forEach(function(e) {
                            "" == t[e] && delete t[e]
                        }), null == t.creates && null != t.contractAddress && (t.creates = t.contractAddress);
                        const e = this.formatter.transactionResponse(t);
                        return t.timeStamp && (e.timestamp = parseInt(t.timeStamp)), e
                    })
                })
            }
            isCommunityResource() {
                return null == this.apiKey
            }
        }
        var dp = function(t, e, r, n) {
            return new(r || (r = Promise))(function(i, s) {
                function o(t) {
                    try {
                        c(n.next(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function a(t) {
                    try {
                        c(n.throw(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                        t(e)
                    })).then(o, a)
                }
                c((n = n.apply(t, e || [])).next())
            })
        };
        const fp = new Da(jl);

        function pp() {
            return (new Date).getTime()
        }

        function mp(t) {
            let e = null;
            for (let r = 0; r < t.length; r++) {
                const n = t[r];
                if (null == n) return null;
                e ? e.name === n.name && e.chainId === n.chainId && (e.ensAddress === n.ensAddress || null == e.ensAddress && null == n.ensAddress) || fp.throwArgumentError("provider mismatch", "networks", t) : e = n
            }
            return e
        }

        function gp(t, e) {
            t = t.slice().sort();
            const r = Math.floor(t.length / 2);
            if (t.length % 2) return t[r];
            const n = t[r - 1],
                i = t[r];
            return null != e && Math.abs(n - i) > e ? null : (n + i) / 2
        }

        function yp(t) {
            if (null === t) return "null";
            if ("number" == typeof t || "boolean" == typeof t) return JSON.stringify(t);
            if ("string" == typeof t) return t;
            if (gc.isBigNumber(t)) return t.toString();
            if (Array.isArray(t)) return JSON.stringify(t.map(t => yp(t)));
            if ("object" == typeof t) {
                const e = Object.keys(t);
                return e.sort(), "{" + e.map(e => {
                    let r = t[e];
                    return r = "function" == typeof r ? "[function]" : yp(r), JSON.stringify(e) + ":" + r
                }).join(",") + "}"
            }
            throw new Error("unknown value type: " + typeof t)
        }
        let wp = 1;

        function vp(t) {
            let e = null,
                r = null,
                n = new Promise(n => {
                    e = function() {
                        r && (clearTimeout(r), r = null), n()
                    }, r = setTimeout(e, t)
                });
            return {
                cancel: e,
                getPromise: function() {
                    return n
                },
                wait: t => (n = n.then(t), n)
            }
        }
        const Ap = [Da.errors.CALL_EXCEPTION, Da.errors.INSUFFICIENT_FUNDS, Da.errors.NONCE_EXPIRED, Da.errors.REPLACEMENT_UNDERPRICED, Da.errors.UNPREDICTABLE_GAS_LIMIT],
            bp = ["address", "args", "errorArgs", "errorSignature", "method", "transaction"];

        function Ep(t, e) {
            const r = {
                weight: t.weight
            };
            return Object.defineProperty(r, "provider", {
                get: () => t.provider
            }), t.start && (r.start = t.start), e && (r.duration = e - t.start), t.done && (t.error ? r.error = t.error : r.result = t.result || null), r
        }

        function _p(t, e, r) {
            let n = yp;
            switch (e) {
                case "getBlockNumber":
                    return function(e) {
                        const r = e.map(t => t.result);
                        let n = gp(e.map(t => t.result), 2);
                        if (null != n) return n = Math.ceil(n), r.indexOf(n + 1) >= 0 && n++, n >= t._highestBlockNumber && (t._highestBlockNumber = n), t._highestBlockNumber
                    };
                case "getGasPrice":
                    return function(t) {
                        const e = t.map(t => t.result);
                        return e.sort(), e[Math.floor(e.length / 2)]
                    };
                case "getEtherPrice":
                    return function(t) {
                        return gp(t.map(t => t.result))
                    };
                case "getBalance":
                case "getTransactionCount":
                case "getCode":
                case "getStorageAt":
                case "call":
                case "estimateGas":
                case "getLogs":
                    break;
                case "getTransaction":
                case "getTransactionReceipt":
                    n = function(t) {
                        return null == t ? null : ((t = Su(t)).confirmations = -1, yp(t))
                    };
                    break;
                case "getBlock":
                    n = r.includeTransactions ? function(t) {
                        return null == t ? null : ((t = Su(t)).transactions = t.transactions.map(t => ((t = Su(t)).confirmations = -1, t)), yp(t))
                    } : function(t) {
                        return null == t ? null : yp(t)
                    };
                    break;
                default:
                    throw new Error("unknown method: " + e)
            }
            return function(t, e) {
                return function(r) {
                    const n = {};
                    r.forEach(e => {
                        const r = t(e.result);
                        n[r] || (n[r] = {
                            count: 0,
                            result: e.result
                        }), n[r].count++
                    });
                    const i = Object.keys(n);
                    for (let t = 0; t < i.length; t++) {
                        const r = n[i[t]];
                        if (r.count >= e) return r.result
                    }
                }
            }(n, t.quorum)
        }

        function Rp(t, e) {
            return dp(this, void 0, void 0, function*() {
                const r = t.provider;
                return null != r.blockNumber && r.blockNumber >= e || -1 === e ? r : Ll(() => new Promise((n, i) => {
                    setTimeout(function() {
                        return r.blockNumber >= e ? n(r) : t.cancelled ? n(null) : n(void 0)
                    }, 0)
                }), {
                    oncePoll: r
                })
            })
        }

        function Tp(t, e, r, n) {
            return dp(this, void 0, void 0, function*() {
                let i = t.provider;
                switch (r) {
                    case "getBlockNumber":
                    case "getGasPrice":
                        return i[r]();
                    case "getEtherPrice":
                        if (i.getEtherPrice) return i.getEtherPrice();
                        break;
                    case "getBalance":
                    case "getTransactionCount":
                    case "getCode":
                        return n.blockTag && Wa(n.blockTag) && (i = yield Rp(t, e)), i[r](n.address, n.blockTag || "latest");
                    case "getStorageAt":
                        return n.blockTag && Wa(n.blockTag) && (i = yield Rp(t, e)), i.getStorageAt(n.address, n.position, n.blockTag || "latest");
                    case "getBlock":
                        return n.blockTag && Wa(n.blockTag) && (i = yield Rp(t, e)), i[n.includeTransactions ? "getBlockWithTransactions" : "getBlock"](n.blockTag || n.blockHash);
                    case "call":
                    case "estimateGas":
                        return n.blockTag && Wa(n.blockTag) && (i = yield Rp(t, e)), "call" === r && n.blockTag ? i[r](n.transaction, n.blockTag) : i[r](n.transaction);
                    case "getTransaction":
                    case "getTransactionReceipt":
                        return i[r](n.transactionHash);
                    case "getLogs": {
                        let r = n.filter;
                        return (r.fromBlock && Wa(r.fromBlock) || r.toBlock && Wa(r.toBlock)) && (i = yield Rp(t, e)), i.getLogs(r)
                    }
                }
                return fp.throwError("unknown method error", Da.errors.UNKNOWN_ERROR, {
                    method: r,
                    params: n
                })
            })
        }
        class Ip extends vf {
            constructor(t, e) {
                0 === t.length && fp.throwArgumentError("missing providers", "providers", t);
                const r = t.map((t, e) => {
                        if (Uh.isProvider(t)) {
                            const e = Vd(t) ? 2e3 : 750,
                                r = 1;
                            return Object.freeze({
                                provider: t,
                                weight: 1,
                                stallTimeout: e,
                                priority: r
                            })
                        }
                        const r = Su(t);
                        null == r.priority && (r.priority = 1), null == r.stallTimeout && (r.stallTimeout = Vd(t) ? 2e3 : 750), null == r.weight && (r.weight = 1);
                        const n = r.weight;
                        return (n % 1 || n > 512 || n < 1) && fp.throwArgumentError("invalid weight; must be integer in [1, 512]", `providers[${e}].weight`, n), Object.freeze(r)
                    }),
                    n = r.reduce((t, e) => t + e.weight, 0);
                null == e ? e = n / 2 : e > n && fp.throwArgumentError("quorum will always fail; larger than total weight", "quorum", e);
                let i = mp(r.map(t => t.provider.network));
                null == i && (i = new Promise((t, e) => {
                    setTimeout(() => {
                        this.detectNetwork().then(t, e)
                    }, 0)
                })), super(i), Tu(this, "providerConfigs", Object.freeze(r)), Tu(this, "quorum", e), this._highestBlockNumber = -1
            }
            detectNetwork() {
                return dp(this, void 0, void 0, function*() {
                    const t = yield Promise.all(this.providerConfigs.map(t => t.provider.getNetwork()));
                    return mp(t)
                })
            }
            perform(t, e) {
                return dp(this, void 0, void 0, function*() {
                    if ("sendTransaction" === t) {
                        const t = yield Promise.all(this.providerConfigs.map(t => t.provider.sendTransaction(e.signedTransaction).then(t => t.hash, t => t)));
                        for (let e = 0; e < t.length; e++) {
                            const r = t[e];
                            if ("string" == typeof r) return r
                        }
                        throw t[0]
                    } - 1 === this._highestBlockNumber && "getBlockNumber" !== t && (yield this.getBlockNumber());
                    const r = _p(this, t, e),
                        n = function(t) {
                            for (let e = (t = t.slice()).length - 1; e > 0; e--) {
                                const r = Math.floor(Math.random() * (e + 1)),
                                    n = t[e];
                                t[e] = t[r], t[r] = n
                            }
                            return t
                        }(this.providerConfigs.map(Su));
                    n.sort((t, e) => t.priority - e.priority);
                    const i = this._highestBlockNumber;
                    let s = 0,
                        o = !0;
                    for (;;) {
                        const a = pp();
                        let c = n.filter(t => t.runner && a - t.start < t.stallTimeout).reduce((t, e) => t + e.weight, 0);
                        for (; c < this.quorum && s < n.length;) {
                            const r = n[s++],
                                o = wp++;
                            r.start = pp(), r.staller = vp(r.stallTimeout), r.staller.wait(() => {
                                r.staller = null
                            }), r.runner = Tp(r, i, t, e).then(n => {
                                r.done = !0, r.result = n, this.listenerCount("debug") && this.emit("debug", {
                                    action: "request",
                                    rid: o,
                                    backend: Ep(r, pp()),
                                    request: {
                                        method: t,
                                        params: Cu(e)
                                    },
                                    provider: this
                                })
                            }, n => {
                                r.done = !0, r.error = n, this.listenerCount("debug") && this.emit("debug", {
                                    action: "request",
                                    rid: o,
                                    backend: Ep(r, pp()),
                                    request: {
                                        method: t,
                                        params: Cu(e)
                                    },
                                    provider: this
                                })
                            }), this.listenerCount("debug") && this.emit("debug", {
                                action: "request",
                                rid: o,
                                backend: Ep(r, null),
                                request: {
                                    method: t,
                                    params: Cu(e)
                                },
                                provider: this
                            }), c += r.weight
                        }
                        const u = [];
                        n.forEach(t => {
                            !t.done && t.runner && (u.push(t.runner), t.staller && u.push(t.staller.getPromise()))
                        }), u.length && (yield Promise.race(u));
                        const h = n.filter(t => t.done && null == t.error);
                        if (h.length >= this.quorum) {
                            const t = r(h);
                            if (void 0 !== t) return n.forEach(t => {
                                t.staller && t.staller.cancel(), t.cancelled = !0
                            }), t;
                            o || (yield vp(100).getPromise()), o = !1
                        }
                        const l = n.reduce((t, e) => {
                            if (!e.done || null == e.error) return t;
                            const r = e.error.code;
                            return Ap.indexOf(r) >= 0 && (t[r] || (t[r] = {
                                error: e.error,
                                weight: 0
                            }), t[r].weight += e.weight), t
                        }, {});
                        if (Object.keys(l).forEach(t => {
                                const e = l[t];
                                if (e.weight < this.quorum) return;
                                n.forEach(t => {
                                    t.staller && t.staller.cancel(), t.cancelled = !0
                                });
                                const r = e.error,
                                    i = {};
                                bp.forEach(t => {
                                    null != r[t] && (i[t] = r[t])
                                }), fp.throwError(r.reason || r.message, t, i)
                            }), 0 === n.filter(t => !t.done).length) break
                    }
                    return n.forEach(t => {
                        t.staller && t.staller.cancel(), t.cancelled = !0
                    }), fp.throwError("failed to meet quorum", Da.errors.SERVER_ERROR, {
                        method: t,
                        params: e,
                        results: n.map(t => Ep(t)),
                        provider: this
                    })
                })
            }
        }
        const kp = new Da(jl),
            Sp = "84842078b09946638c03157f83405213";
        class Np extends jf {
            constructor(t, e) {
                const r = new Op(t, e),
                    n = r.connection;
                n.password && kp.throwError("INFURA WebSocket project secrets unsupported", Da.errors.UNSUPPORTED_OPERATION, {
                    operation: "InfuraProvider.getWebSocketProvider()"
                });
                super(n.url.replace(/^http/i, "ws").replace("/v3/", "/ws/v3/"), t), Tu(this, "apiKey", r.projectId), Tu(this, "projectId", r.projectId), Tu(this, "projectSecret", r.projectSecret)
            }
            isCommunityResource() {
                return this.projectId === Sp
            }
        }
        class Op extends Vf {
            static getWebSocketProvider(t, e) {
                return new Np(t, e)
            }
            static getApiKey(t) {
                const e = {
                    apiKey: Sp,
                    projectId: Sp,
                    projectSecret: null
                };
                return null == t || ("string" == typeof t ? e.projectId = t : null != t.projectSecret ? (kp.assertArgument("string" == typeof t.projectId, "projectSecret requires a projectId", "projectId", t.projectId), kp.assertArgument("string" == typeof t.projectSecret, "invalid projectSecret", "projectSecret", "[REDACTED]"), e.projectId = t.projectId, e.projectSecret = t.projectSecret) : t.projectId && (e.projectId = t.projectId), e.apiKey = e.projectId), e
            }
            static getUrl(t, e) {
                let r = null;
                switch (t ? t.name : "unknown") {
                    case "homestead":
                        r = "mainnet.infura.io";
                        break;
                    case "goerli":
                        r = "goerli.infura.io";
                        break;
                    case "sepolia":
                        r = "sepolia.infura.io";
                        break;
                    case "matic":
                        r = "polygon-mainnet.infura.io";
                        break;
                    case "maticmum":
                        r = "polygon-mumbai.infura.io";
                        break;
                    case "optimism":
                        r = "optimism-mainnet.infura.io";
                        break;
                    case "optimism-goerli":
                        r = "optimism-goerli.infura.io";
                        break;
                    case "optimism-sepolia":
                        r = "optimism-sepolia.infura.io";
                        break;
                    case "arbitrum":
                        r = "arbitrum-mainnet.infura.io";
                        break;
                    case "arbitrum-goerli":
                        r = "arbitrum-goerli.infura.io";
                        break;
                    case "arbitrum-sepolia":
                        r = "arbitrum-sepolia.infura.io";
                        break;
                    default:
                        kp.throwError("unsupported network", Da.errors.INVALID_ARGUMENT, {
                            argument: "network",
                            value: t
                        })
                }
                const n = {
                    allowGzip: !0,
                    url: "https://" + r + "/v3/" + e.projectId,
                    throttleCallback: (t, r) => (e.projectId === Sp && Jd(), Promise.resolve(!0))
                };
                return null != e.projectSecret && (n.user = "", n.password = e.projectSecret), n
            }
            isCommunityResource() {
                return this.projectId === Sp
            }
        }
        const Pp = new Da(jl);
        class Cp extends Vf {
            static getApiKey(t) {
                return t && "string" != typeof t && Pp.throwArgumentError("invalid apiKey", "apiKey", t), t || "ETHERS_JS_SHARED"
            }
            static getUrl(t, e) {
                Pp.warn("NodeSmith will be discontinued on 2019-12-20; please migrate to another platform.");
                let r = null;
                switch (t.name) {
                    case "homestead":
                        r = "https://ethereum.api.nodesmith.io/v1/mainnet/jsonrpc";
                        break;
                    case "ropsten":
                        r = "https://ethereum.api.nodesmith.io/v1/ropsten/jsonrpc";
                        break;
                    case "rinkeby":
                        r = "https://ethereum.api.nodesmith.io/v1/rinkeby/jsonrpc";
                        break;
                    case "goerli":
                        r = "https://ethereum.api.nodesmith.io/v1/goerli/jsonrpc";
                        break;
                    case "kovan":
                        r = "https://ethereum.api.nodesmith.io/v1/kovan/jsonrpc";
                        break;
                    default:
                        Pp.throwArgumentError("unsupported network", "network", arguments[0])
                }
                return r + "?apiKey=" + e
            }
        }
        const xp = new Da(jl),
            Mp = "62e1ad51b37b8e00394bda3b";
        class Up extends Vf {
            static getApiKey(t) {
                const e = {
                    applicationId: null,
                    loadBalancer: !0,
                    applicationSecretKey: null
                };
                return null == t ? e.applicationId = Mp : "string" == typeof t ? e.applicationId = t : null != t.applicationSecretKey ? (e.applicationId = t.applicationId, e.applicationSecretKey = t.applicationSecretKey) : t.applicationId ? e.applicationId = t.applicationId : xp.throwArgumentError("unsupported PocketProvider apiKey", "apiKey", t), e
            }
            static getUrl(t, e) {
                let r = null;
                switch (t ? t.name : "unknown") {
                    case "goerli":
                        r = "eth-goerli.gateway.pokt.network";
                        break;
                    case "homestead":
                        r = "eth-mainnet.gateway.pokt.network";
                        break;
                    case "kovan":
                        r = "poa-kovan.gateway.pokt.network";
                        break;
                    case "matic":
                        r = "poly-mainnet.gateway.pokt.network";
                        break;
                    case "maticmum":
                        r = "polygon-mumbai-rpc.gateway.pokt.network";
                        break;
                    case "rinkeby":
                        r = "eth-rinkeby.gateway.pokt.network";
                        break;
                    case "ropsten":
                        r = "eth-ropsten.gateway.pokt.network";
                        break;
                    default:
                        xp.throwError("unsupported network", Da.errors.INVALID_ARGUMENT, {
                            argument: "network",
                            value: t
                        })
                }
                const n = {
                    headers: {},
                    url: `https://${r}/v1/lb/${e.applicationId}`
                };
                return null != e.applicationSecretKey && (n.user = "", n.password = e.applicationSecretKey), n
            }
            isCommunityResource() {
                return this.applicationId === Mp
            }
        }
        const Dp = new Da(jl);
        class Lp extends Vf {
            static getApiKey(t) {
                return t && "string" != typeof t && Dp.throwArgumentError("invalid apiKey", "apiKey", t), t || "919b412a057b5e9c9b6dce193c5a60242d6efadb"
            }
            static getUrl(t, e) {
                let r = null;
                switch (t.name) {
                    case "homestead":
                        r = "ethers.quiknode.pro";
                        break;
                    case "goerli":
                        r = "ethers.ethereum-goerli.quiknode.pro";
                        break;
                    case "sepolia":
                        r = "ethers.ethereum-sepolia.quiknode.pro";
                        break;
                    case "holesky":
                        r = "ethers.ethereum-holesky.quiknode.pro";
                        break;
                    case "arbitrum":
                        r = "ethers.arbitrum-mainnet.quiknode.pro";
                        break;
                    case "arbitrum-goerli":
                        r = "ethers.arbitrum-goerli.quiknode.pro";
                        break;
                    case "arbitrum-sepolia":
                        r = "ethers.arbitrum-sepolia.quiknode.pro";
                        break;
                    case "base":
                        r = "ethers.base-mainnet.quiknode.pro";
                        break;
                    case "base-goerli":
                        r = "ethers.base-goerli.quiknode.pro";
                        break;
                    case "base-spolia":
                        r = "ethers.base-sepolia.quiknode.pro";
                        break;
                    case "bnb":
                        r = "ethers.bsc.quiknode.pro";
                        break;
                    case "bnbt":
                        r = "ethers.bsc-testnet.quiknode.pro";
                        break;
                    case "matic":
                        r = "ethers.matic.quiknode.pro";
                        break;
                    case "maticmum":
                        r = "ethers.matic-testnet.quiknode.pro";
                        break;
                    case "optimism":
                        r = "ethers.optimism.quiknode.pro";
                        break;
                    case "optimism-goerli":
                        r = "ethers.optimism-goerli.quiknode.pro";
                        break;
                    case "optimism-sepolia":
                        r = "ethers.optimism-sepolia.quiknode.pro";
                        break;
                    case "xdai":
                        r = "ethers.xdai.quiknode.pro";
                        break;
                    default:
                        Dp.throwArgumentError("unsupported network", "network", arguments[0])
                }
                return "https://" + r + "/" + e
            }
        }
        const Bp = new Da(jl);
        let Fp = 1;

        function qp(t, e) {
            const r = "Web3LegacyFetcher";
            return function(t, n) {
                const i = {
                    method: t,
                    params: n,
                    id: Fp++,
                    jsonrpc: "2.0"
                };
                return new Promise((t, n) => {
                    this.emit("debug", {
                        action: "request",
                        fetcher: r,
                        request: Cu(i),
                        provider: this
                    }), e(i, (e, s) => {
                        if (e) return this.emit("debug", {
                            action: "response",
                            fetcher: r,
                            error: e,
                            request: i,
                            provider: this
                        }), n(e);
                        if (this.emit("debug", {
                                action: "response",
                                fetcher: r,
                                request: i,
                                response: s,
                                provider: this
                            }), s.error) {
                            const t = new Error(s.error.message);
                            return t.code = s.error.code, t.data = s.error.data, n(t)
                        }
                        t(s.result)
                    })
                })
            }
        }
        class Gp extends Lf {
            constructor(t, e) {
                null == t && Bp.throwArgumentError("missing provider", "provider", t);
                let r = null,
                    n = null,
                    i = null;
                "function" == typeof t ? (r = "unknown:", n = t) : (r = t.host || t.path || "", !r && t.isMetaMask && (r = "metamask"), i = t, t.request ? ("" === r && (r = "eip-1193:"), n = function(t) {
                    return function(e, r) {
                        null == r && (r = []);
                        const n = {
                            method: e,
                            params: r
                        };
                        return this.emit("debug", {
                            action: "request",
                            fetcher: "Eip1193Fetcher",
                            request: Cu(n),
                            provider: this
                        }), t.request(n).then(t => (this.emit("debug", {
                            action: "response",
                            fetcher: "Eip1193Fetcher",
                            request: n,
                            response: t,
                            provider: this
                        }), t), t => {
                            throw this.emit("debug", {
                                action: "response",
                                fetcher: "Eip1193Fetcher",
                                request: n,
                                error: t,
                                provider: this
                            }), t
                        })
                    }
                }(t)) : t.sendAsync ? n = qp(0, t.sendAsync.bind(t)) : t.send ? n = qp(0, t.send.bind(t)) : Bp.throwArgumentError("unsupported provider", "provider", t), r || (r = "unknown:")), super(r, e), Tu(this, "jsonRpcFetchFunc", n), Tu(this, "provider", i)
            }
            send(t, e) {
                return this.jsonRpcFetchFunc(t, e)
            }
        }
        const jp = new Da(jl);
        var Hp = Object.freeze({
            __proto__: null,
            AlchemyProvider: Qf,
            AlchemyWebSocketProvider: Yf,
            AnkrProvider: tp,
            BaseProvider: vf,
            CloudflareProvider: np,
            EtherscanProvider: lp,
            FallbackProvider: Ip,
            Formatter: zd,
            InfuraProvider: Op,
            InfuraWebSocketProvider: Np,
            IpcProvider: null,
            JsonRpcBatchProvider: class extends Lf {
                send(t, e) {
                    const r = {
                        method: t,
                        params: e,
                        id: this._nextId++,
                        jsonrpc: "2.0"
                    };
                    null == this._pendingBatch && (this._pendingBatch = []);
                    const n = {
                            request: r,
                            resolve: null,
                            reject: null
                        },
                        i = new Promise((t, e) => {
                            n.resolve = t, n.reject = e
                        });
                    return this._pendingBatch.push(n), this._pendingBatchAggregator || (this._pendingBatchAggregator = setTimeout(() => {
                        const t = this._pendingBatch;
                        this._pendingBatch = null, this._pendingBatchAggregator = null;
                        const e = t.map(t => t.request);
                        return this.emit("debug", {
                            action: "requestBatch",
                            request: Cu(e),
                            provider: this
                        }), Dl(this.connection, JSON.stringify(e)).then(r => {
                            this.emit("debug", {
                                action: "response",
                                request: e,
                                response: r,
                                provider: this
                            }), t.forEach((t, e) => {
                                const n = r[e];
                                if (n.error) {
                                    const e = new Error(n.error.message);
                                    e.code = n.error.code, e.data = n.error.data, t.reject(e)
                                } else t.resolve(n.result)
                            })
                        }, r => {
                            this.emit("debug", {
                                action: "response",
                                error: r,
                                request: e,
                                provider: this
                            }), t.forEach(t => {
                                t.reject(r)
                            })
                        })
                    }, 10)), i
                }
            },
            JsonRpcProvider: Lf,
            JsonRpcSigner: Mf,
            NodesmithProvider: Cp,
            PocketProvider: Up,
            Provider: Uh,
            QuickNodeProvider: Lp,
            Resolver: gf,
            StaticJsonRpcProvider: Kf,
            UrlJsonRpcProvider: Vf,
            Web3Provider: Gp,
            WebSocketProvider: jf,
            getDefaultProvider: function(t, e) {
                if (null == t && (t = "homestead"), "string" == typeof t) {
                    const e = t.match(/^(ws|http)s?:/i);
                    if (e) switch (e[1].toLowerCase()) {
                        case "http":
                        case "https":
                            return new Lf(t);
                        case "ws":
                        case "wss":
                            return new jf(t);
                        default:
                            jp.throwArgumentError("unsupported URL scheme", "network", t)
                    }
                }
                const r = Hh(t);
                return r && r._defaultProvider || jp.throwError("unsupported getDefaultProvider network", Da.errors.NETWORK_ERROR, {
                    operation: "getDefaultProvider",
                    network: t
                }), r._defaultProvider({
                    FallbackProvider: Ip,
                    AlchemyProvider: Qf,
                    AnkrProvider: tp,
                    CloudflareProvider: np,
                    EtherscanProvider: lp,
                    InfuraProvider: Op,
                    JsonRpcProvider: Lf,
                    NodesmithProvider: Cp,
                    PocketProvider: Up,
                    QuickNodeProvider: Lp,
                    Web3Provider: Gp,
                    IpcProvider: null
                }, e)
            },
            getNetwork: Hh,
            isCommunityResourcable: Kd,
            isCommunityResource: Vd,
            showThrottleMessage: Jd
        })
    }();
