function S0(e, t) {
    for (var r = 0; r < t.length; r++) {
        const n = t[r];
        if (typeof n != "string" && !Array.isArray(n)) {
            for (const o in n)
                if (o !== "default" && !(o in e)) {
                    const a = Object.getOwnPropertyDescriptor(n, o);
                    a && Object.defineProperty(e, o, a.get ? a : {
                        enumerable: !0,
                        get: () => n[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        n(o);
    new MutationObserver(o => {
        for (const a of o)
            if (a.type === "childList")
                for (const i of a.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && n(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(o) {
        const a = {};
        return o.integrity && (a.integrity = o.integrity),
        o.referrerPolicy && (a.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? a.credentials = "include" : o.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin",
        a
    }
    function n(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const a = r(o);
        fetch(o.href, a)
    }
}
)();
var Ts = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function zu(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function ar(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if (typeof t == "function") {
        var r = function n() {
            return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        r.prototype = t.prototype
    } else
        r = {};
    return Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach(function(n) {
        var o = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(r, n, o.get ? o : {
            enumerable: !0,
            get: function() {
                return e[n]
            }
        })
    }),
    r
}
var Lm = {
    exports: {}
}
  , xi = {}
  , $m = {
    exports: {}
}
  , K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gs = Symbol.for("react.element")
  , C0 = Symbol.for("react.portal")
  , O0 = Symbol.for("react.fragment")
  , _0 = Symbol.for("react.strict_mode")
  , P0 = Symbol.for("react.profiler")
  , I0 = Symbol.for("react.provider")
  , E0 = Symbol.for("react.context")
  , T0 = Symbol.for("react.forward_ref")
  , A0 = Symbol.for("react.suspense")
  , R0 = Symbol.for("react.memo")
  , L0 = Symbol.for("react.lazy")
  , lh = Symbol.iterator;
function $0(e) {
    return e === null || typeof e != "object" ? null : (e = lh && e[lh] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Mm = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , zm = Object.assign
  , Dm = {};
function oo(e, t, r) {
    this.props = e,
    this.context = t,
    this.refs = Dm,
    this.updater = r || Mm
}
oo.prototype.isReactComponent = {};
oo.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
oo.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Wm() {}
Wm.prototype = oo.prototype;
function Du(e, t, r) {
    this.props = e,
    this.context = t,
    this.refs = Dm,
    this.updater = r || Mm
}
var Wu = Du.prototype = new Wm;
Wu.constructor = Du;
zm(Wu, oo.prototype);
Wu.isPureReactComponent = !0;
var ch = Array.isArray
  , Bm = Object.prototype.hasOwnProperty
  , Bu = {
    current: null
}
  , Fm = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Hm(e, t, r) {
    var n, o = {}, a = null, i = null;
    if (t != null)
        for (n in t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (a = "" + t.key),
        t)
            Bm.call(t, n) && !Fm.hasOwnProperty(n) && (o[n] = t[n]);
    var l = arguments.length - 2;
    if (l === 1)
        o.children = r;
    else if (1 < l) {
        for (var c = Array(l), u = 0; u < l; u++)
            c[u] = arguments[u + 2];
        o.children = c
    }
    if (e && e.defaultProps)
        for (n in l = e.defaultProps,
        l)
            o[n] === void 0 && (o[n] = l[n]);
    return {
        $$typeof: gs,
        type: e,
        key: a,
        ref: i,
        props: o,
        _owner: Bu.current
    }
}
function M0(e, t) {
    return {
        $$typeof: gs,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Fu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === gs
}
function z0(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(r) {
        return t[r]
    })
}
var uh = /\/+/g;
function Nl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? z0("" + e.key) : t.toString(36)
}
function ta(e, t, r, n, o) {
    var a = typeof e;
    (a === "undefined" || a === "boolean") && (e = null);
    var i = !1;
    if (e === null)
        i = !0;
    else
        switch (a) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case gs:
            case C0:
                i = !0
            }
        }
    if (i)
        return i = e,
        o = o(i),
        e = n === "" ? "." + Nl(i, 0) : n,
        ch(o) ? (r = "",
        e != null && (r = e.replace(uh, "$&/") + "/"),
        ta(o, t, r, "", function(u) {
            return u
        })) : o != null && (Fu(o) && (o = M0(o, r + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(uh, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (i = 0,
    n = n === "" ? "." : n + ":",
    ch(e))
        for (var l = 0; l < e.length; l++) {
            a = e[l];
            var c = n + Nl(a, l);
            i += ta(a, t, r, c, o)
        }
    else if (c = $0(e),
    typeof c == "function")
        for (e = c.call(e),
        l = 0; !(a = e.next()).done; )
            a = a.value,
            c = n + Nl(a, l++),
            i += ta(a, t, r, c, o);
    else if (a === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}
function As(e, t, r) {
    if (e == null)
        return e;
    var n = []
      , o = 0;
    return ta(e, n, "", "", function(a) {
        return t.call(r, a, o++)
    }),
    n
}
function D0(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(r) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = r)
        }, function(r) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = r)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var qe = {
    current: null
}
  , ra = {
    transition: null
}
  , W0 = {
    ReactCurrentDispatcher: qe,
    ReactCurrentBatchConfig: ra,
    ReactCurrentOwner: Bu
};
function Um() {
    throw Error("act(...) is not supported in production builds of React.")
}
K.Children = {
    map: As,
    forEach: function(e, t, r) {
        As(e, function() {
            t.apply(this, arguments)
        }, r)
    },
    count: function(e) {
        var t = 0;
        return As(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return As(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Fu(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
K.Component = oo;
K.Fragment = O0;
K.Profiler = P0;
K.PureComponent = Du;
K.StrictMode = _0;
K.Suspense = A0;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W0;
K.act = Um;
K.cloneElement = function(e, t, r) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var n = zm({}, e.props)
      , o = e.key
      , a = e.ref
      , i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (a = t.ref,
        i = Bu.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (c in t)
            Bm.call(t, c) && !Fm.hasOwnProperty(c) && (n[c] = t[c] === void 0 && l !== void 0 ? l[c] : t[c])
    }
    var c = arguments.length - 2;
    if (c === 1)
        n.children = r;
    else if (1 < c) {
        l = Array(c);
        for (var u = 0; u < c; u++)
            l[u] = arguments[u + 2];
        n.children = l
    }
    return {
        $$typeof: gs,
        type: e.type,
        key: o,
        ref: a,
        props: n,
        _owner: i
    }
}
;
K.createContext = function(e) {
    return e = {
        $$typeof: E0,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: I0,
        _context: e
    },
    e.Consumer = e
}
;
K.createElement = Hm;
K.createFactory = function(e) {
    var t = Hm.bind(null, e);
    return t.type = e,
    t
}
;
K.createRef = function() {
    return {
        current: null
    }
}
;
K.forwardRef = function(e) {
    return {
        $$typeof: T0,
        render: e
    }
}
;
K.isValidElement = Fu;
K.lazy = function(e) {
    return {
        $$typeof: L0,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: D0
    }
}
;
K.memo = function(e, t) {
    return {
        $$typeof: R0,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
K.startTransition = function(e) {
    var t = ra.transition;
    ra.transition = {};
    try {
        e()
    } finally {
        ra.transition = t
    }
}
;
K.unstable_act = Um;
K.useCallback = function(e, t) {
    return qe.current.useCallback(e, t)
}
;
K.useContext = function(e) {
    return qe.current.useContext(e)
}
;
K.useDebugValue = function() {}
;
K.useDeferredValue = function(e) {
    return qe.current.useDeferredValue(e)
}
;
K.useEffect = function(e, t) {
    return qe.current.useEffect(e, t)
}
;
K.useId = function() {
    return qe.current.useId()
}
;
K.useImperativeHandle = function(e, t, r) {
    return qe.current.useImperativeHandle(e, t, r)
}
;
K.useInsertionEffect = function(e, t) {
    return qe.current.useInsertionEffect(e, t)
}
;
K.useLayoutEffect = function(e, t) {
    return qe.current.useLayoutEffect(e, t)
}
;
K.useMemo = function(e, t) {
    return qe.current.useMemo(e, t)
}
;
K.useReducer = function(e, t, r) {
    return qe.current.useReducer(e, t, r)
}
;
K.useRef = function(e) {
    return qe.current.useRef(e)
}
;
K.useState = function(e) {
    return qe.current.useState(e)
}
;
K.useSyncExternalStore = function(e, t, r) {
    return qe.current.useSyncExternalStore(e, t, r)
}
;
K.useTransition = function() {
    return qe.current.useTransition()
}
;
K.version = "18.3.1";
$m.exports = K;
var E = $m.exports;
const Ge = zu(E)
  , gc = S0({
    __proto__: null,
    default: Ge
}, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var B0 = E
  , F0 = Symbol.for("react.element")
  , H0 = Symbol.for("react.fragment")
  , U0 = Object.prototype.hasOwnProperty
  , G0 = B0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , V0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Gm(e, t, r) {
    var n, o = {}, a = null, i = null;
    r !== void 0 && (a = "" + r),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
    for (n in t)
        U0.call(t, n) && !V0.hasOwnProperty(n) && (o[n] = t[n]);
    if (e && e.defaultProps)
        for (n in t = e.defaultProps,
        t)
            o[n] === void 0 && (o[n] = t[n]);
    return {
        $$typeof: F0,
        type: e,
        key: a,
        ref: i,
        props: o,
        _owner: G0.current
    }
}
xi.Fragment = H0;
xi.jsx = Gm;
xi.jsxs = Gm;
Lm.exports = xi;
var s = Lm.exports
  , xc = {}
  , Vm = {
    exports: {}
}
  , pt = {}
  , Ym = {
    exports: {}
}
  , Qm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(S, A) {
        var M = S.length;
        S.push(A);
        e: for (; 0 < M; ) {
            var H = M - 1 >>> 1
              , G = S[H];
            if (0 < o(G, A))
                S[H] = A,
                S[M] = G,
                M = H;
            else
                break e
        }
    }
    function r(S) {
        return S.length === 0 ? null : S[0]
    }
    function n(S) {
        if (S.length === 0)
            return null;
        var A = S[0]
          , M = S.pop();
        if (M !== A) {
            S[0] = M;
            e: for (var H = 0, G = S.length, q = G >>> 1; H < q; ) {
                var re = 2 * (H + 1) - 1
                  , Re = S[re]
                  , We = re + 1
                  , Ze = S[We];
                if (0 > o(Re, M))
                    We < G && 0 > o(Ze, Re) ? (S[H] = Ze,
                    S[We] = M,
                    H = We) : (S[H] = Re,
                    S[re] = M,
                    H = re);
                else if (We < G && 0 > o(Ze, M))
                    S[H] = Ze,
                    S[We] = M,
                    H = We;
                else
                    break e
            }
        }
        return A
    }
    function o(S, A) {
        var M = S.sortIndex - A.sortIndex;
        return M !== 0 ? M : S.id - A.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var a = performance;
        e.unstable_now = function() {
            return a.now()
        }
    } else {
        var i = Date
          , l = i.now();
        e.unstable_now = function() {
            return i.now() - l
        }
    }
    var c = []
      , u = []
      , h = 1
      , d = null
      , m = 3
      , v = !1
      , y = !1
      , x = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , p = typeof clearTimeout == "function" ? clearTimeout : null
      , f = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function g(S) {
        for (var A = r(u); A !== null; ) {
            if (A.callback === null)
                n(u);
            else if (A.startTime <= S)
                n(u),
                A.sortIndex = A.expirationTime,
                t(c, A);
            else
                break;
            A = r(u)
        }
    }
    function b(S) {
        if (x = !1,
        g(S),
        !y)
            if (r(c) !== null)
                y = !0,
                _(j);
            else {
                var A = r(u);
                A !== null && T(b, A.startTime - S)
            }
    }
    function j(S, A) {
        y = !1,
        x && (x = !1,
        p(L),
        L = -1),
        v = !0;
        var M = m;
        try {
            for (g(A),
            d = r(c); d !== null && (!(d.expirationTime > A) || S && !B()); ) {
                var H = d.callback;
                if (typeof H == "function") {
                    d.callback = null,
                    m = d.priorityLevel;
                    var G = H(d.expirationTime <= A);
                    A = e.unstable_now(),
                    typeof G == "function" ? d.callback = G : d === r(c) && n(c),
                    g(A)
                } else
                    n(c);
                d = r(c)
            }
            if (d !== null)
                var q = !0;
            else {
                var re = r(u);
                re !== null && T(b, re.startTime - A),
                q = !1
            }
            return q
        } finally {
            d = null,
            m = M,
            v = !1
        }
    }
    var k = !1
      , N = null
      , L = -1
      , P = 5
      , I = -1;
    function B() {
        return !(e.unstable_now() - I < P)
    }
    function D() {
        if (N !== null) {
            var S = e.unstable_now();
            I = S;
            var A = !0;
            try {
                A = N(!0, S)
            } finally {
                A ? F() : (k = !1,
                N = null)
            }
        } else
            k = !1
    }
    var F;
    if (typeof f == "function")
        F = function() {
            f(D)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var C = new MessageChannel
          , O = C.port2;
        C.port1.onmessage = D,
        F = function() {
            O.postMessage(null)
        }
    } else
        F = function() {
            w(D, 0)
        }
        ;
    function _(S) {
        N = S,
        k || (k = !0,
        F())
    }
    function T(S, A) {
        L = w(function() {
            S(e.unstable_now())
        }, A)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(S) {
        S.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        y || v || (y = !0,
        _(j))
    }
    ,
    e.unstable_forceFrameRate = function(S) {
        0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < S ? Math.floor(1e3 / S) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return m
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return r(c)
    }
    ,
    e.unstable_next = function(S) {
        switch (m) {
        case 1:
        case 2:
        case 3:
            var A = 3;
            break;
        default:
            A = m
        }
        var M = m;
        m = A;
        try {
            return S()
        } finally {
            m = M
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(S, A) {
        switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            S = 3
        }
        var M = m;
        m = S;
        try {
            return A()
        } finally {
            m = M
        }
    }
    ,
    e.unstable_scheduleCallback = function(S, A, M) {
        var H = e.unstable_now();
        switch (typeof M == "object" && M !== null ? (M = M.delay,
        M = typeof M == "number" && 0 < M ? H + M : H) : M = H,
        S) {
        case 1:
            var G = -1;
            break;
        case 2:
            G = 250;
            break;
        case 5:
            G = 1073741823;
            break;
        case 4:
            G = 1e4;
            break;
        default:
            G = 5e3
        }
        return G = M + G,
        S = {
            id: h++,
            callback: A,
            priorityLevel: S,
            startTime: M,
            expirationTime: G,
            sortIndex: -1
        },
        M > H ? (S.sortIndex = M,
        t(u, S),
        r(c) === null && S === r(u) && (x ? (p(L),
        L = -1) : x = !0,
        T(b, M - H))) : (S.sortIndex = G,
        t(c, S),
        y || v || (y = !0,
        _(j))),
        S
    }
    ,
    e.unstable_shouldYield = B,
    e.unstable_wrapCallback = function(S) {
        var A = m;
        return function() {
            var M = m;
            m = A;
            try {
                return S.apply(this, arguments)
            } finally {
                m = M
            }
        }
    }
}
)(Qm);
Ym.exports = Qm;
var Y0 = Ym.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Q0 = E
  , mt = Y0;
function R(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)
        t += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Km = new Set
  , Ho = {};
function on(e, t) {
    Dn(e, t),
    Dn(e + "Capture", t)
}
function Dn(e, t) {
    for (Ho[e] = t,
    e = 0; e < t.length; e++)
        Km.add(t[e])
}
var tr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , yc = Object.prototype.hasOwnProperty
  , K0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , dh = {}
  , hh = {};
function q0(e) {
    return yc.call(hh, e) ? !0 : yc.call(dh, e) ? !1 : K0.test(e) ? hh[e] = !0 : (dh[e] = !0,
    !1)
}
function X0(e, t, r, n) {
    if (r !== null && r.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return n ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Z0(e, t, r, n) {
    if (t === null || typeof t > "u" || X0(e, t, r, n))
        return !0;
    if (n)
        return !1;
    if (r !== null)
        switch (r.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Xe(e, t, r, n, o, a, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = n,
    this.attributeNamespace = o,
    this.mustUseProperty = r,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = a,
    this.removeEmptyString = i
}
var De = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    De[e] = new Xe(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    De[t] = new Xe(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    De[e] = new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    De[e] = new Xe(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    De[e] = new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    De[e] = new Xe(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    De[e] = new Xe(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    De[e] = new Xe(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    De[e] = new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Hu = /[\-:]([a-z])/g;
function Uu(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Hu, Uu);
    De[t] = new Xe(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Hu, Uu);
    De[t] = new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Hu, Uu);
    De[t] = new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    De[e] = new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)
});
De.xlinkHref = new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    De[e] = new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Gu(e, t, r, n) {
    var o = De.hasOwnProperty(t) ? De[t] : null;
    (o !== null ? o.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Z0(t, r, o, n) && (r = null),
    n || o === null ? q0(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : o.mustUseProperty ? e[o.propertyName] = r === null ? o.type === 3 ? !1 : "" : r : (t = o.attributeName,
    n = o.attributeNamespace,
    r === null ? e.removeAttribute(t) : (o = o.type,
    r = o === 3 || o === 4 && r === !0 ? "" : "" + r,
    n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
}
var ir = Q0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Rs = Symbol.for("react.element")
  , pn = Symbol.for("react.portal")
  , gn = Symbol.for("react.fragment")
  , Vu = Symbol.for("react.strict_mode")
  , vc = Symbol.for("react.profiler")
  , qm = Symbol.for("react.provider")
  , Xm = Symbol.for("react.context")
  , Yu = Symbol.for("react.forward_ref")
  , bc = Symbol.for("react.suspense")
  , wc = Symbol.for("react.suspense_list")
  , Qu = Symbol.for("react.memo")
  , fr = Symbol.for("react.lazy")
  , Zm = Symbol.for("react.offscreen")
  , fh = Symbol.iterator;
function mo(e) {
    return e === null || typeof e != "object" ? null : (e = fh && e[fh] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ge = Object.assign, Sl;
function So(e) {
    if (Sl === void 0)
        try {
            throw Error()
        } catch (r) {
            var t = r.stack.trim().match(/\n( *(at )?)/);
            Sl = t && t[1] || ""
        }
    return `
` + Sl + e
}
var Cl = !1;
function Ol(e, t) {
    if (!e || Cl)
        return "";
    Cl = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var n = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    n = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                n = u
            }
            e()
        }
    } catch (u) {
        if (u && n && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), a = n.stack.split(`
`), i = o.length - 1, l = a.length - 1; 1 <= i && 0 <= l && o[i] !== a[l]; )
                l--;
            for (; 1 <= i && 0 <= l; i--,
            l--)
                if (o[i] !== a[l]) {
                    if (i !== 1 || l !== 1)
                        do
                            if (i--,
                            l--,
                            0 > l || o[i] !== a[l]) {
                                var c = `
` + o[i].replace(" at new ", " at ");
                                return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)),
                                c
                            }
                        while (1 <= i && 0 <= l);
                    break
                }
        }
    } finally {
        Cl = !1,
        Error.prepareStackTrace = r
    }
    return (e = e ? e.displayName || e.name : "") ? So(e) : ""
}
function J0(e) {
    switch (e.tag) {
    case 5:
        return So(e.type);
    case 16:
        return So("Lazy");
    case 13:
        return So("Suspense");
    case 19:
        return So("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Ol(e.type, !1),
        e;
    case 11:
        return e = Ol(e.type.render, !1),
        e;
    case 1:
        return e = Ol(e.type, !0),
        e;
    default:
        return ""
    }
}
function jc(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case gn:
        return "Fragment";
    case pn:
        return "Portal";
    case vc:
        return "Profiler";
    case Vu:
        return "StrictMode";
    case bc:
        return "Suspense";
    case wc:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Xm:
            return (e.displayName || "Context") + ".Consumer";
        case qm:
            return (e._context.displayName || "Context") + ".Provider";
        case Yu:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Qu:
            return t = e.displayName || null,
            t !== null ? t : jc(e.type) || "Memo";
        case fr:
            t = e._payload,
            e = e._init;
            try {
                return jc(e(t))
            } catch {}
        }
    return null
}
function ev(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return jc(t);
    case 8:
        return t === Vu ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Er(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Jm(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function tv(e) {
    var t = Jm(e) ? "checked" : "value"
      , r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , n = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
        var o = r.get
          , a = r.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(i) {
                n = "" + i,
                a.call(this, i)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: r.enumerable
        }),
        {
            getValue: function() {
                return n
            },
            setValue: function(i) {
                n = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Ls(e) {
    e._valueTracker || (e._valueTracker = tv(e))
}
function ep(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var r = t.getValue()
      , n = "";
    return e && (n = Jm(e) ? e.checked ? "true" : "false" : e.value),
    e = n,
    e !== r ? (t.setValue(e),
    !0) : !1
}
function Sa(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function kc(e, t) {
    var r = t.checked;
    return ge({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r ?? e._wrapperState.initialChecked
    })
}
function mh(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue
      , n = t.checked != null ? t.checked : t.defaultChecked;
    r = Er(t.value != null ? t.value : r),
    e._wrapperState = {
        initialChecked: n,
        initialValue: r,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function tp(e, t) {
    t = t.checked,
    t != null && Gu(e, "checked", t, !1)
}
function Nc(e, t) {
    tp(e, t);
    var r = Er(t.value)
      , n = t.type;
    if (r != null)
        n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
    else if (n === "submit" || n === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Sc(e, t.type, r) : t.hasOwnProperty("defaultValue") && Sc(e, t.type, Er(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function ph(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var n = t.type;
        if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        r || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    r = e.name,
    r !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    r !== "" && (e.name = r)
}
function Sc(e, t, r) {
    (t !== "number" || Sa(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r))
}
var Co = Array.isArray;
function _n(e, t, r, n) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < r.length; o++)
            t["$" + r[o]] = !0;
        for (r = 0; r < e.length; r++)
            o = t.hasOwnProperty("$" + e[r].value),
            e[r].selected !== o && (e[r].selected = o),
            o && n && (e[r].defaultSelected = !0)
    } else {
        for (r = "" + Er(r),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === r) {
                e[o].selected = !0,
                n && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function Cc(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(R(91));
    return ge({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function gh(e, t) {
    var r = t.value;
    if (r == null) {
        if (r = t.children,
        t = t.defaultValue,
        r != null) {
            if (t != null)
                throw Error(R(92));
            if (Co(r)) {
                if (1 < r.length)
                    throw Error(R(93));
                r = r[0]
            }
            t = r
        }
        t == null && (t = ""),
        r = t
    }
    e._wrapperState = {
        initialValue: Er(r)
    }
}
function rp(e, t) {
    var r = Er(t.value)
      , n = Er(t.defaultValue);
    r != null && (r = "" + r,
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n)
}
function xh(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function np(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Oc(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? np(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var $s, op = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, r, n, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for ($s = $s || document.createElement("div"),
        $s.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = $s.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Uo(e, t) {
    if (t) {
        var r = e.firstChild;
        if (r && r === e.lastChild && r.nodeType === 3) {
            r.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Io = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , rv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Io).forEach(function(e) {
    rv.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Io[t] = Io[e]
    })
});
function sp(e, t, r) {
    return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || Io.hasOwnProperty(e) && Io[e] ? ("" + t).trim() : t + "px"
}
function ap(e, t) {
    e = e.style;
    for (var r in t)
        if (t.hasOwnProperty(r)) {
            var n = r.indexOf("--") === 0
              , o = sp(r, t[r], n);
            r === "float" && (r = "cssFloat"),
            n ? e.setProperty(r, o) : e[r] = o
        }
}
var nv = ge({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function _c(e, t) {
    if (t) {
        if (nv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(R(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(R(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(R(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(R(62))
    }
}
function Pc(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Ic = null;
function Ku(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Ec = null
  , Pn = null
  , In = null;
function yh(e) {
    if (e = vs(e)) {
        if (typeof Ec != "function")
            throw Error(R(280));
        var t = e.stateNode;
        t && (t = ji(t),
        Ec(e.stateNode, e.type, t))
    }
}
function ip(e) {
    Pn ? In ? In.push(e) : In = [e] : Pn = e
}
function lp() {
    if (Pn) {
        var e = Pn
          , t = In;
        if (In = Pn = null,
        yh(e),
        t)
            for (e = 0; e < t.length; e++)
                yh(t[e])
    }
}
function cp(e, t) {
    return e(t)
}
function up() {}
var _l = !1;
function dp(e, t, r) {
    if (_l)
        return e(t, r);
    _l = !0;
    try {
        return cp(e, t, r)
    } finally {
        _l = !1,
        (Pn !== null || In !== null) && (up(),
        lp())
    }
}
function Go(e, t) {
    var r = e.stateNode;
    if (r === null)
        return null;
    var n = ji(r);
    if (n === null)
        return null;
    r = n[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (n = !n.disabled) || (e = e.type,
        n = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !n;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (r && typeof r != "function")
        throw Error(R(231, t, typeof r));
    return r
}
var Tc = !1;
if (tr)
    try {
        var po = {};
        Object.defineProperty(po, "passive", {
            get: function() {
                Tc = !0
            }
        }),
        window.addEventListener("test", po, po),
        window.removeEventListener("test", po, po)
    } catch {
        Tc = !1
    }
function ov(e, t, r, n, o, a, i, l, c) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(r, u)
    } catch (h) {
        this.onError(h)
    }
}
var Eo = !1
  , Ca = null
  , Oa = !1
  , Ac = null
  , sv = {
    onError: function(e) {
        Eo = !0,
        Ca = e
    }
};
function av(e, t, r, n, o, a, i, l, c) {
    Eo = !1,
    Ca = null,
    ov.apply(sv, arguments)
}
function iv(e, t, r, n, o, a, i, l, c) {
    if (av.apply(this, arguments),
    Eo) {
        if (Eo) {
            var u = Ca;
            Eo = !1,
            Ca = null
        } else
            throw Error(R(198));
        Oa || (Oa = !0,
        Ac = u)
    }
}
function sn(e) {
    var t = e
      , r = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (r = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? r : null
}
function hp(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function vh(e) {
    if (sn(e) !== e)
        throw Error(R(188))
}
function lv(e) {
    var t = e.alternate;
    if (!t) {
        if (t = sn(e),
        t === null)
            throw Error(R(188));
        return t !== e ? null : e
    }
    for (var r = e, n = t; ; ) {
        var o = r.return;
        if (o === null)
            break;
        var a = o.alternate;
        if (a === null) {
            if (n = o.return,
            n !== null) {
                r = n;
                continue
            }
            break
        }
        if (o.child === a.child) {
            for (a = o.child; a; ) {
                if (a === r)
                    return vh(o),
                    e;
                if (a === n)
                    return vh(o),
                    t;
                a = a.sibling
            }
            throw Error(R(188))
        }
        if (r.return !== n.return)
            r = o,
            n = a;
        else {
            for (var i = !1, l = o.child; l; ) {
                if (l === r) {
                    i = !0,
                    r = o,
                    n = a;
                    break
                }
                if (l === n) {
                    i = !0,
                    n = o,
                    r = a;
                    break
                }
                l = l.sibling
            }
            if (!i) {
                for (l = a.child; l; ) {
                    if (l === r) {
                        i = !0,
                        r = a,
                        n = o;
                        break
                    }
                    if (l === n) {
                        i = !0,
                        n = a,
                        r = o;
                        break
                    }
                    l = l.sibling
                }
                if (!i)
                    throw Error(R(189))
            }
        }
        if (r.alternate !== n)
            throw Error(R(190))
    }
    if (r.tag !== 3)
        throw Error(R(188));
    return r.stateNode.current === r ? e : t
}
function fp(e) {
    return e = lv(e),
    e !== null ? mp(e) : null
}
function mp(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = mp(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var pp = mt.unstable_scheduleCallback
  , bh = mt.unstable_cancelCallback
  , cv = mt.unstable_shouldYield
  , uv = mt.unstable_requestPaint
  , we = mt.unstable_now
  , dv = mt.unstable_getCurrentPriorityLevel
  , qu = mt.unstable_ImmediatePriority
  , gp = mt.unstable_UserBlockingPriority
  , _a = mt.unstable_NormalPriority
  , hv = mt.unstable_LowPriority
  , xp = mt.unstable_IdlePriority
  , yi = null
  , Gt = null;
function fv(e) {
    if (Gt && typeof Gt.onCommitFiberRoot == "function")
        try {
            Gt.onCommitFiberRoot(yi, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Rt = Math.clz32 ? Math.clz32 : gv
  , mv = Math.log
  , pv = Math.LN2;
function gv(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (mv(e) / pv | 0) | 0
}
var Ms = 64
  , zs = 4194304;
function Oo(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Pa(e, t) {
    var r = e.pendingLanes;
    if (r === 0)
        return 0;
    var n = 0
      , o = e.suspendedLanes
      , a = e.pingedLanes
      , i = r & 268435455;
    if (i !== 0) {
        var l = i & ~o;
        l !== 0 ? n = Oo(l) : (a &= i,
        a !== 0 && (n = Oo(a)))
    } else
        i = r & ~o,
        i !== 0 ? n = Oo(i) : a !== 0 && (n = Oo(a));
    if (n === 0)
        return 0;
    if (t !== 0 && t !== n && !(t & o) && (o = n & -n,
    a = t & -t,
    o >= a || o === 16 && (a & 4194240) !== 0))
        return t;
    if (n & 4 && (n |= r & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= n; 0 < t; )
            r = 31 - Rt(t),
            o = 1 << r,
            n |= e[r],
            t &= ~o;
    return n
}
function xv(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function yv(e, t) {
    for (var r = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
        var i = 31 - Rt(a)
          , l = 1 << i
          , c = o[i];
        c === -1 ? (!(l & r) || l & n) && (o[i] = xv(l, t)) : c <= t && (e.expiredLanes |= l),
        a &= ~l
    }
}
function Rc(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function yp() {
    var e = Ms;
    return Ms <<= 1,
    !(Ms & 4194240) && (Ms = 64),
    e
}
function Pl(e) {
    for (var t = [], r = 0; 31 > r; r++)
        t.push(e);
    return t
}
function xs(e, t, r) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Rt(t),
    e[t] = r
}
function vv(e, t) {
    var r = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var n = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
        var o = 31 - Rt(r)
          , a = 1 << o;
        t[o] = 0,
        n[o] = -1,
        e[o] = -1,
        r &= ~a
    }
}
function Xu(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r; ) {
        var n = 31 - Rt(r)
          , o = 1 << n;
        o & t | e[n] & t && (e[n] |= t),
        r &= ~o
    }
}
var ne = 0;
function vp(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var bp, Zu, wp, jp, kp, Lc = !1, Ds = [], jr = null, kr = null, Nr = null, Vo = new Map, Yo = new Map, gr = [], bv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function wh(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        jr = null;
        break;
    case "dragenter":
    case "dragleave":
        kr = null;
        break;
    case "mouseover":
    case "mouseout":
        Nr = null;
        break;
    case "pointerover":
    case "pointerout":
        Vo.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Yo.delete(t.pointerId)
    }
}
function go(e, t, r, n, o, a) {
    return e === null || e.nativeEvent !== a ? (e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: a,
        targetContainers: [o]
    },
    t !== null && (t = vs(t),
    t !== null && Zu(t)),
    e) : (e.eventSystemFlags |= n,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function wv(e, t, r, n, o) {
    switch (t) {
    case "focusin":
        return jr = go(jr, e, t, r, n, o),
        !0;
    case "dragenter":
        return kr = go(kr, e, t, r, n, o),
        !0;
    case "mouseover":
        return Nr = go(Nr, e, t, r, n, o),
        !0;
    case "pointerover":
        var a = o.pointerId;
        return Vo.set(a, go(Vo.get(a) || null, e, t, r, n, o)),
        !0;
    case "gotpointercapture":
        return a = o.pointerId,
        Yo.set(a, go(Yo.get(a) || null, e, t, r, n, o)),
        !0
    }
    return !1
}
function Np(e) {
    var t = Hr(e.target);
    if (t !== null) {
        var r = sn(t);
        if (r !== null) {
            if (t = r.tag,
            t === 13) {
                if (t = hp(r),
                t !== null) {
                    e.blockedOn = t,
                    kp(e.priority, function() {
                        wp(r)
                    });
                    return
                }
            } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function na(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var r = $c(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (r === null) {
            r = e.nativeEvent;
            var n = new r.constructor(r.type,r);
            Ic = n,
            r.target.dispatchEvent(n),
            Ic = null
        } else
            return t = vs(r),
            t !== null && Zu(t),
            e.blockedOn = r,
            !1;
        t.shift()
    }
    return !0
}
function jh(e, t, r) {
    na(e) && r.delete(t)
}
function jv() {
    Lc = !1,
    jr !== null && na(jr) && (jr = null),
    kr !== null && na(kr) && (kr = null),
    Nr !== null && na(Nr) && (Nr = null),
    Vo.forEach(jh),
    Yo.forEach(jh)
}
function xo(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Lc || (Lc = !0,
    mt.unstable_scheduleCallback(mt.unstable_NormalPriority, jv)))
}
function Qo(e) {
    function t(o) {
        return xo(o, e)
    }
    if (0 < Ds.length) {
        xo(Ds[0], e);
        for (var r = 1; r < Ds.length; r++) {
            var n = Ds[r];
            n.blockedOn === e && (n.blockedOn = null)
        }
    }
    for (jr !== null && xo(jr, e),
    kr !== null && xo(kr, e),
    Nr !== null && xo(Nr, e),
    Vo.forEach(t),
    Yo.forEach(t),
    r = 0; r < gr.length; r++)
        n = gr[r],
        n.blockedOn === e && (n.blockedOn = null);
    for (; 0 < gr.length && (r = gr[0],
    r.blockedOn === null); )
        Np(r),
        r.blockedOn === null && gr.shift()
}
var En = ir.ReactCurrentBatchConfig
  , Ia = !0;
function kv(e, t, r, n) {
    var o = ne
      , a = En.transition;
    En.transition = null;
    try {
        ne = 1,
        Ju(e, t, r, n)
    } finally {
        ne = o,
        En.transition = a
    }
}
function Nv(e, t, r, n) {
    var o = ne
      , a = En.transition;
    En.transition = null;
    try {
        ne = 4,
        Ju(e, t, r, n)
    } finally {
        ne = o,
        En.transition = a
    }
}
function Ju(e, t, r, n) {
    if (Ia) {
        var o = $c(e, t, r, n);
        if (o === null)
            Dl(e, t, n, Ea, r),
            wh(e, n);
        else if (wv(o, e, t, r, n))
            n.stopPropagation();
        else if (wh(e, n),
        t & 4 && -1 < bv.indexOf(e)) {
            for (; o !== null; ) {
                var a = vs(o);
                if (a !== null && bp(a),
                a = $c(e, t, r, n),
                a === null && Dl(e, t, n, Ea, r),
                a === o)
                    break;
                o = a
            }
            o !== null && n.stopPropagation()
        } else
            Dl(e, t, n, null, r)
    }
}
var Ea = null;
function $c(e, t, r, n) {
    if (Ea = null,
    e = Ku(n),
    e = Hr(e),
    e !== null)
        if (t = sn(e),
        t === null)
            e = null;
        else if (r = t.tag,
        r === 13) {
            if (e = hp(t),
            e !== null)
                return e;
            e = null
        } else if (r === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Ea = e,
    null
}
function Sp(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (dv()) {
        case qu:
            return 1;
        case gp:
            return 4;
        case _a:
        case hv:
            return 16;
        case xp:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var vr = null
  , ed = null
  , oa = null;
function Cp() {
    if (oa)
        return oa;
    var e, t = ed, r = t.length, n, o = "value"in vr ? vr.value : vr.textContent, a = o.length;
    for (e = 0; e < r && t[e] === o[e]; e++)
        ;
    var i = r - e;
    for (n = 1; n <= i && t[r - n] === o[a - n]; n++)
        ;
    return oa = o.slice(e, 1 < n ? 1 - n : void 0)
}
function sa(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Ws() {
    return !0
}
function kh() {
    return !1
}
function gt(e) {
    function t(r, n, o, a, i) {
        this._reactName = r,
        this._targetInst = o,
        this.type = n,
        this.nativeEvent = a,
        this.target = i,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (r = e[l],
            this[l] = r ? r(a) : a[l]);
        return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Ws : kh,
        this.isPropagationStopped = kh,
        this
    }
    return ge(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var r = this.nativeEvent;
            r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            this.isDefaultPrevented = Ws)
        },
        stopPropagation: function() {
            var r = this.nativeEvent;
            r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            this.isPropagationStopped = Ws)
        },
        persist: function() {},
        isPersistent: Ws
    }),
    t
}
var so = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, td = gt(so), ys = ge({}, so, {
    view: 0,
    detail: 0
}), Sv = gt(ys), Il, El, yo, vi = ge({}, ys, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: rd,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== yo && (yo && e.type === "mousemove" ? (Il = e.screenX - yo.screenX,
        El = e.screenY - yo.screenY) : El = Il = 0,
        yo = e),
        Il)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : El
    }
}), Nh = gt(vi), Cv = ge({}, vi, {
    dataTransfer: 0
}), Ov = gt(Cv), _v = ge({}, ys, {
    relatedTarget: 0
}), Tl = gt(_v), Pv = ge({}, so, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Iv = gt(Pv), Ev = ge({}, so, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Tv = gt(Ev), Av = ge({}, so, {
    data: 0
}), Sh = gt(Av), Rv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Lv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, $v = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Mv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = $v[e]) ? !!t[e] : !1
}
function rd() {
    return Mv
}
var zv = ge({}, ys, {
    key: function(e) {
        if (e.key) {
            var t = Rv[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = sa(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Lv[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: rd,
    charCode: function(e) {
        return e.type === "keypress" ? sa(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? sa(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Dv = gt(zv)
  , Wv = ge({}, vi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Ch = gt(Wv)
  , Bv = ge({}, ys, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: rd
})
  , Fv = gt(Bv)
  , Hv = ge({}, so, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Uv = gt(Hv)
  , Gv = ge({}, vi, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Vv = gt(Gv)
  , Yv = [9, 13, 27, 32]
  , nd = tr && "CompositionEvent"in window
  , To = null;
tr && "documentMode"in document && (To = document.documentMode);
var Qv = tr && "TextEvent"in window && !To
  , Op = tr && (!nd || To && 8 < To && 11 >= To)
  , Oh = " "
  , _h = !1;
function _p(e, t) {
    switch (e) {
    case "keyup":
        return Yv.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Pp(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var xn = !1;
function Kv(e, t) {
    switch (e) {
    case "compositionend":
        return Pp(t);
    case "keypress":
        return t.which !== 32 ? null : (_h = !0,
        Oh);
    case "textInput":
        return e = t.data,
        e === Oh && _h ? null : e;
    default:
        return null
    }
}
function qv(e, t) {
    if (xn)
        return e === "compositionend" || !nd && _p(e, t) ? (e = Cp(),
        oa = ed = vr = null,
        xn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Op && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Xv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Ph(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Xv[e.type] : t === "textarea"
}
function Ip(e, t, r, n) {
    ip(n),
    t = Ta(t, "onChange"),
    0 < t.length && (r = new td("onChange","change",null,r,n),
    e.push({
        event: r,
        listeners: t
    }))
}
var Ao = null
  , Ko = null;
function Zv(e) {
    Bp(e, 0)
}
function bi(e) {
    var t = bn(e);
    if (ep(t))
        return e
}
function Jv(e, t) {
    if (e === "change")
        return t
}
var Ep = !1;
if (tr) {
    var Al;
    if (tr) {
        var Rl = "oninput"in document;
        if (!Rl) {
            var Ih = document.createElement("div");
            Ih.setAttribute("oninput", "return;"),
            Rl = typeof Ih.oninput == "function"
        }
        Al = Rl
    } else
        Al = !1;
    Ep = Al && (!document.documentMode || 9 < document.documentMode)
}
function Eh() {
    Ao && (Ao.detachEvent("onpropertychange", Tp),
    Ko = Ao = null)
}
function Tp(e) {
    if (e.propertyName === "value" && bi(Ko)) {
        var t = [];
        Ip(t, Ko, e, Ku(e)),
        dp(Zv, t)
    }
}
function eb(e, t, r) {
    e === "focusin" ? (Eh(),
    Ao = t,
    Ko = r,
    Ao.attachEvent("onpropertychange", Tp)) : e === "focusout" && Eh()
}
function tb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return bi(Ko)
}
function rb(e, t) {
    if (e === "click")
        return bi(t)
}
function nb(e, t) {
    if (e === "input" || e === "change")
        return bi(t)
}
function ob(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Mt = typeof Object.is == "function" ? Object.is : ob;
function qo(e, t) {
    if (Mt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var r = Object.keys(e)
      , n = Object.keys(t);
    if (r.length !== n.length)
        return !1;
    for (n = 0; n < r.length; n++) {
        var o = r[n];
        if (!yc.call(t, o) || !Mt(e[o], t[o]))
            return !1
    }
    return !0
}
function Th(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Ah(e, t) {
    var r = Th(e);
    e = 0;
    for (var n; r; ) {
        if (r.nodeType === 3) {
            if (n = e + r.textContent.length,
            e <= t && n >= t)
                return {
                    node: r,
                    offset: t - e
                };
            e = n
        }
        e: {
            for (; r; ) {
                if (r.nextSibling) {
                    r = r.nextSibling;
                    break e
                }
                r = r.parentNode
            }
            r = void 0
        }
        r = Th(r)
    }
}
function Ap(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ap(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Rp() {
    for (var e = window, t = Sa(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var r = typeof t.contentWindow.location.href == "string"
        } catch {
            r = !1
        }
        if (r)
            e = t.contentWindow;
        else
            break;
        t = Sa(e.document)
    }
    return t
}
function od(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function sb(e) {
    var t = Rp()
      , r = e.focusedElem
      , n = e.selectionRange;
    if (t !== r && r && r.ownerDocument && Ap(r.ownerDocument.documentElement, r)) {
        if (n !== null && od(r)) {
            if (t = n.start,
            e = n.end,
            e === void 0 && (e = t),
            "selectionStart"in r)
                r.selectionStart = t,
                r.selectionEnd = Math.min(e, r.value.length);
            else if (e = (t = r.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = r.textContent.length
                  , a = Math.min(n.start, o);
                n = n.end === void 0 ? a : Math.min(n.end, o),
                !e.extend && a > n && (o = n,
                n = a,
                a = o),
                o = Ah(r, a);
                var i = Ah(r, n);
                o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                a > n ? (e.addRange(t),
                e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = r; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof r.focus == "function" && r.focus(),
        r = 0; r < t.length; r++)
            e = t[r],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var ab = tr && "documentMode"in document && 11 >= document.documentMode
  , yn = null
  , Mc = null
  , Ro = null
  , zc = !1;
function Rh(e, t, r) {
    var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    zc || yn == null || yn !== Sa(n) || (n = yn,
    "selectionStart"in n && od(n) ? n = {
        start: n.selectionStart,
        end: n.selectionEnd
    } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(),
    n = {
        anchorNode: n.anchorNode,
        anchorOffset: n.anchorOffset,
        focusNode: n.focusNode,
        focusOffset: n.focusOffset
    }),
    Ro && qo(Ro, n) || (Ro = n,
    n = Ta(Mc, "onSelect"),
    0 < n.length && (t = new td("onSelect","select",null,t,r),
    e.push({
        event: t,
        listeners: n
    }),
    t.target = yn)))
}
function Bs(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(),
    r["Webkit" + e] = "webkit" + t,
    r["Moz" + e] = "moz" + t,
    r
}
var vn = {
    animationend: Bs("Animation", "AnimationEnd"),
    animationiteration: Bs("Animation", "AnimationIteration"),
    animationstart: Bs("Animation", "AnimationStart"),
    transitionend: Bs("Transition", "TransitionEnd")
}
  , Ll = {}
  , Lp = {};
tr && (Lp = document.createElement("div").style,
"AnimationEvent"in window || (delete vn.animationend.animation,
delete vn.animationiteration.animation,
delete vn.animationstart.animation),
"TransitionEvent"in window || delete vn.transitionend.transition);
function wi(e) {
    if (Ll[e])
        return Ll[e];
    if (!vn[e])
        return e;
    var t = vn[e], r;
    for (r in t)
        if (t.hasOwnProperty(r) && r in Lp)
            return Ll[e] = t[r];
    return e
}
var $p = wi("animationend")
  , Mp = wi("animationiteration")
  , zp = wi("animationstart")
  , Dp = wi("transitionend")
  , Wp = new Map
  , Lh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ar(e, t) {
    Wp.set(e, t),
    on(t, [e])
}
for (var $l = 0; $l < Lh.length; $l++) {
    var Ml = Lh[$l]
      , ib = Ml.toLowerCase()
      , lb = Ml[0].toUpperCase() + Ml.slice(1);
    Ar(ib, "on" + lb)
}
Ar($p, "onAnimationEnd");
Ar(Mp, "onAnimationIteration");
Ar(zp, "onAnimationStart");
Ar("dblclick", "onDoubleClick");
Ar("focusin", "onFocus");
Ar("focusout", "onBlur");
Ar(Dp, "onTransitionEnd");
Dn("onMouseEnter", ["mouseout", "mouseover"]);
Dn("onMouseLeave", ["mouseout", "mouseover"]);
Dn("onPointerEnter", ["pointerout", "pointerover"]);
Dn("onPointerLeave", ["pointerout", "pointerover"]);
on("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
on("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
on("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
on("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
on("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
on("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var _o = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , cb = new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));
function $h(e, t, r) {
    var n = e.type || "unknown-event";
    e.currentTarget = r,
    iv(n, t, void 0, e),
    e.currentTarget = null
}
function Bp(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
        var n = e[r]
          , o = n.event;
        n = n.listeners;
        e: {
            var a = void 0;
            if (t)
                for (var i = n.length - 1; 0 <= i; i--) {
                    var l = n[i]
                      , c = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    c !== a && o.isPropagationStopped())
                        break e;
                    $h(o, l, u),
                    a = c
                }
            else
                for (i = 0; i < n.length; i++) {
                    if (l = n[i],
                    c = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    c !== a && o.isPropagationStopped())
                        break e;
                    $h(o, l, u),
                    a = c
                }
        }
    }
    if (Oa)
        throw e = Ac,
        Oa = !1,
        Ac = null,
        e
}
function ie(e, t) {
    var r = t[Hc];
    r === void 0 && (r = t[Hc] = new Set);
    var n = e + "__bubble";
    r.has(n) || (Fp(t, e, 2, !1),
    r.add(n))
}
function zl(e, t, r) {
    var n = 0;
    t && (n |= 4),
    Fp(r, e, n, t)
}
var Fs = "_reactListening" + Math.random().toString(36).slice(2);
function Xo(e) {
    if (!e[Fs]) {
        e[Fs] = !0,
        Km.forEach(function(r) {
            r !== "selectionchange" && (cb.has(r) || zl(r, !1, e),
            zl(r, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Fs] || (t[Fs] = !0,
        zl("selectionchange", !1, t))
    }
}
function Fp(e, t, r, n) {
    switch (Sp(t)) {
    case 1:
        var o = kv;
        break;
    case 4:
        o = Nv;
        break;
    default:
        o = Ju
    }
    r = o.bind(null, t, r, e),
    o = void 0,
    !Tc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    n ? o !== void 0 ? e.addEventListener(t, r, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, r, !0) : o !== void 0 ? e.addEventListener(t, r, {
        passive: o
    }) : e.addEventListener(t, r, !1)
}
function Dl(e, t, r, n, o) {
    var a = n;
    if (!(t & 1) && !(t & 2) && n !== null)
        e: for (; ; ) {
            if (n === null)
                return;
            var i = n.tag;
            if (i === 3 || i === 4) {
                var l = n.stateNode.containerInfo;
                if (l === o || l.nodeType === 8 && l.parentNode === o)
                    break;
                if (i === 4)
                    for (i = n.return; i !== null; ) {
                        var c = i.tag;
                        if ((c === 3 || c === 4) && (c = i.stateNode.containerInfo,
                        c === o || c.nodeType === 8 && c.parentNode === o))
                            return;
                        i = i.return
                    }
                for (; l !== null; ) {
                    if (i = Hr(l),
                    i === null)
                        return;
                    if (c = i.tag,
                    c === 5 || c === 6) {
                        n = a = i;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            n = n.return
        }
    dp(function() {
        var u = a
          , h = Ku(r)
          , d = [];
        e: {
            var m = Wp.get(e);
            if (m !== void 0) {
                var v = td
                  , y = e;
                switch (e) {
                case "keypress":
                    if (sa(r) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    v = Dv;
                    break;
                case "focusin":
                    y = "focus",
                    v = Tl;
                    break;
                case "focusout":
                    y = "blur",
                    v = Tl;
                    break;
                case "beforeblur":
                case "afterblur":
                    v = Tl;
                    break;
                case "click":
                    if (r.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    v = Nh;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    v = Ov;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    v = Fv;
                    break;
                case $p:
                case Mp:
                case zp:
                    v = Iv;
                    break;
                case Dp:
                    v = Uv;
                    break;
                case "scroll":
                    v = Sv;
                    break;
                case "wheel":
                    v = Vv;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    v = Tv;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    v = Ch
                }
                var x = (t & 4) !== 0
                  , w = !x && e === "scroll"
                  , p = x ? m !== null ? m + "Capture" : null : m;
                x = [];
                for (var f = u, g; f !== null; ) {
                    g = f;
                    var b = g.stateNode;
                    if (g.tag === 5 && b !== null && (g = b,
                    p !== null && (b = Go(f, p),
                    b != null && x.push(Zo(f, b, g)))),
                    w)
                        break;
                    f = f.return
                }
                0 < x.length && (m = new v(m,y,null,r,h),
                d.push({
                    event: m,
                    listeners: x
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover",
                v = e === "mouseout" || e === "pointerout",
                m && r !== Ic && (y = r.relatedTarget || r.fromElement) && (Hr(y) || y[rr]))
                    break e;
                if ((v || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window,
                v ? (y = r.relatedTarget || r.toElement,
                v = u,
                y = y ? Hr(y) : null,
                y !== null && (w = sn(y),
                y !== w || y.tag !== 5 && y.tag !== 6) && (y = null)) : (v = null,
                y = u),
                v !== y)) {
                    if (x = Nh,
                    b = "onMouseLeave",
                    p = "onMouseEnter",
                    f = "mouse",
                    (e === "pointerout" || e === "pointerover") && (x = Ch,
                    b = "onPointerLeave",
                    p = "onPointerEnter",
                    f = "pointer"),
                    w = v == null ? m : bn(v),
                    g = y == null ? m : bn(y),
                    m = new x(b,f + "leave",v,r,h),
                    m.target = w,
                    m.relatedTarget = g,
                    b = null,
                    Hr(h) === u && (x = new x(p,f + "enter",y,r,h),
                    x.target = g,
                    x.relatedTarget = w,
                    b = x),
                    w = b,
                    v && y)
                        t: {
                            for (x = v,
                            p = y,
                            f = 0,
                            g = x; g; g = ln(g))
                                f++;
                            for (g = 0,
                            b = p; b; b = ln(b))
                                g++;
                            for (; 0 < f - g; )
                                x = ln(x),
                                f--;
                            for (; 0 < g - f; )
                                p = ln(p),
                                g--;
                            for (; f--; ) {
                                if (x === p || p !== null && x === p.alternate)
                                    break t;
                                x = ln(x),
                                p = ln(p)
                            }
                            x = null
                        }
                    else
                        x = null;
                    v !== null && Mh(d, m, v, x, !1),
                    y !== null && w !== null && Mh(d, w, y, x, !0)
                }
            }
            e: {
                if (m = u ? bn(u) : window,
                v = m.nodeName && m.nodeName.toLowerCase(),
                v === "select" || v === "input" && m.type === "file")
                    var j = Jv;
                else if (Ph(m))
                    if (Ep)
                        j = nb;
                    else {
                        j = tb;
                        var k = eb
                    }
                else
                    (v = m.nodeName) && v.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (j = rb);
                if (j && (j = j(e, u))) {
                    Ip(d, j, r, h);
                    break e
                }
                k && k(e, m, u),
                e === "focusout" && (k = m._wrapperState) && k.controlled && m.type === "number" && Sc(m, "number", m.value)
            }
            switch (k = u ? bn(u) : window,
            e) {
            case "focusin":
                (Ph(k) || k.contentEditable === "true") && (yn = k,
                Mc = u,
                Ro = null);
                break;
            case "focusout":
                Ro = Mc = yn = null;
                break;
            case "mousedown":
                zc = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                zc = !1,
                Rh(d, r, h);
                break;
            case "selectionchange":
                if (ab)
                    break;
            case "keydown":
            case "keyup":
                Rh(d, r, h)
            }
            var N;
            if (nd)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var L = "onCompositionStart";
                        break e;
                    case "compositionend":
                        L = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        L = "onCompositionUpdate";
                        break e
                    }
                    L = void 0
                }
            else
                xn ? _p(e, r) && (L = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (L = "onCompositionStart");
            L && (Op && r.locale !== "ko" && (xn || L !== "onCompositionStart" ? L === "onCompositionEnd" && xn && (N = Cp()) : (vr = h,
            ed = "value"in vr ? vr.value : vr.textContent,
            xn = !0)),
            k = Ta(u, L),
            0 < k.length && (L = new Sh(L,e,null,r,h),
            d.push({
                event: L,
                listeners: k
            }),
            N ? L.data = N : (N = Pp(r),
            N !== null && (L.data = N)))),
            (N = Qv ? Kv(e, r) : qv(e, r)) && (u = Ta(u, "onBeforeInput"),
            0 < u.length && (h = new Sh("onBeforeInput","beforeinput",null,r,h),
            d.push({
                event: h,
                listeners: u
            }),
            h.data = N))
        }
        Bp(d, t)
    })
}
function Zo(e, t, r) {
    return {
        instance: e,
        listener: t,
        currentTarget: r
    }
}
function Ta(e, t) {
    for (var r = t + "Capture", n = []; e !== null; ) {
        var o = e
          , a = o.stateNode;
        o.tag === 5 && a !== null && (o = a,
        a = Go(e, r),
        a != null && n.unshift(Zo(e, a, o)),
        a = Go(e, t),
        a != null && n.push(Zo(e, a, o))),
        e = e.return
    }
    return n
}
function ln(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Mh(e, t, r, n, o) {
    for (var a = t._reactName, i = []; r !== null && r !== n; ) {
        var l = r
          , c = l.alternate
          , u = l.stateNode;
        if (c !== null && c === n)
            break;
        l.tag === 5 && u !== null && (l = u,
        o ? (c = Go(r, a),
        c != null && i.unshift(Zo(r, c, l))) : o || (c = Go(r, a),
        c != null && i.push(Zo(r, c, l)))),
        r = r.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var ub = /\r\n?/g
  , db = /\u0000|\uFFFD/g;
function zh(e) {
    return (typeof e == "string" ? e : "" + e).replace(ub, `
`).replace(db, "")
}
function Hs(e, t, r) {
    if (t = zh(t),
    zh(e) !== t && r)
        throw Error(R(425))
}
function Aa() {}
var Dc = null
  , Wc = null;
function Bc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Fc = typeof setTimeout == "function" ? setTimeout : void 0
  , hb = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Dh = typeof Promise == "function" ? Promise : void 0
  , fb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Dh < "u" ? function(e) {
    return Dh.resolve(null).then(e).catch(mb)
}
: Fc;
function mb(e) {
    setTimeout(function() {
        throw e
    })
}
function Wl(e, t) {
    var r = t
      , n = 0;
    do {
        var o = r.nextSibling;
        if (e.removeChild(r),
        o && o.nodeType === 8)
            if (r = o.data,
            r === "/$") {
                if (n === 0) {
                    e.removeChild(o),
                    Qo(t);
                    return
                }
                n--
            } else
                r !== "$" && r !== "$?" && r !== "$!" || n++;
        r = o
    } while (r);
    Qo(t)
}
function Sr(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Wh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var r = e.data;
            if (r === "$" || r === "$!" || r === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                r === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var ao = Math.random().toString(36).slice(2)
  , Ut = "__reactFiber$" + ao
  , Jo = "__reactProps$" + ao
  , rr = "__reactContainer$" + ao
  , Hc = "__reactEvents$" + ao
  , pb = "__reactListeners$" + ao
  , gb = "__reactHandles$" + ao;
function Hr(e) {
    var t = e[Ut];
    if (t)
        return t;
    for (var r = e.parentNode; r; ) {
        if (t = r[rr] || r[Ut]) {
            if (r = t.alternate,
            t.child !== null || r !== null && r.child !== null)
                for (e = Wh(e); e !== null; ) {
                    if (r = e[Ut])
                        return r;
                    e = Wh(e)
                }
            return t
        }
        e = r,
        r = e.parentNode
    }
    return null
}
function vs(e) {
    return e = e[Ut] || e[rr],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function bn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(R(33))
}
function ji(e) {
    return e[Jo] || null
}
var Uc = []
  , wn = -1;
function Rr(e) {
    return {
        current: e
    }
}
function ce(e) {
    0 > wn || (e.current = Uc[wn],
    Uc[wn] = null,
    wn--)
}
function ae(e, t) {
    wn++,
    Uc[wn] = e.current,
    e.current = t
}
var Tr = {}
  , Ve = Rr(Tr)
  , nt = Rr(!1)
  , Xr = Tr;
function Wn(e, t) {
    var r = e.type.contextTypes;
    if (!r)
        return Tr;
    var n = e.stateNode;
    if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
        return n.__reactInternalMemoizedMaskedChildContext;
    var o = {}, a;
    for (a in r)
        o[a] = t[a];
    return n && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function ot(e) {
    return e = e.childContextTypes,
    e != null
}
function Ra() {
    ce(nt),
    ce(Ve)
}
function Bh(e, t, r) {
    if (Ve.current !== Tr)
        throw Error(R(168));
    ae(Ve, t),
    ae(nt, r)
}
function Hp(e, t, r) {
    var n = e.stateNode;
    if (t = t.childContextTypes,
    typeof n.getChildContext != "function")
        return r;
    n = n.getChildContext();
    for (var o in n)
        if (!(o in t))
            throw Error(R(108, ev(e) || "Unknown", o));
    return ge({}, r, n)
}
function La(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Tr,
    Xr = Ve.current,
    ae(Ve, e),
    ae(nt, nt.current),
    !0
}
function Fh(e, t, r) {
    var n = e.stateNode;
    if (!n)
        throw Error(R(169));
    r ? (e = Hp(e, t, Xr),
    n.__reactInternalMemoizedMergedChildContext = e,
    ce(nt),
    ce(Ve),
    ae(Ve, e)) : ce(nt),
    ae(nt, r)
}
var Xt = null
  , ki = !1
  , Bl = !1;
function Up(e) {
    Xt === null ? Xt = [e] : Xt.push(e)
}
function xb(e) {
    ki = !0,
    Up(e)
}
function Lr() {
    if (!Bl && Xt !== null) {
        Bl = !0;
        var e = 0
          , t = ne;
        try {
            var r = Xt;
            for (ne = 1; e < r.length; e++) {
                var n = r[e];
                do
                    n = n(!0);
                while (n !== null)
            }
            Xt = null,
            ki = !1
        } catch (o) {
            throw Xt !== null && (Xt = Xt.slice(e + 1)),
            pp(qu, Lr),
            o
        } finally {
            ne = t,
            Bl = !1
        }
    }
    return null
}
var jn = []
  , kn = 0
  , $a = null
  , Ma = 0
  , vt = []
  , bt = 0
  , Zr = null
  , Zt = 1
  , Jt = "";
function Br(e, t) {
    jn[kn++] = Ma,
    jn[kn++] = $a,
    $a = e,
    Ma = t
}
function Gp(e, t, r) {
    vt[bt++] = Zt,
    vt[bt++] = Jt,
    vt[bt++] = Zr,
    Zr = e;
    var n = Zt;
    e = Jt;
    var o = 32 - Rt(n) - 1;
    n &= ~(1 << o),
    r += 1;
    var a = 32 - Rt(t) + o;
    if (30 < a) {
        var i = o - o % 5;
        a = (n & (1 << i) - 1).toString(32),
        n >>= i,
        o -= i,
        Zt = 1 << 32 - Rt(t) + o | r << o | n,
        Jt = a + e
    } else
        Zt = 1 << a | r << o | n,
        Jt = e
}
function sd(e) {
    e.return !== null && (Br(e, 1),
    Gp(e, 1, 0))
}
function ad(e) {
    for (; e === $a; )
        $a = jn[--kn],
        jn[kn] = null,
        Ma = jn[--kn],
        jn[kn] = null;
    for (; e === Zr; )
        Zr = vt[--bt],
        vt[bt] = null,
        Jt = vt[--bt],
        vt[bt] = null,
        Zt = vt[--bt],
        vt[bt] = null
}
var ht = null
  , dt = null
  , he = !1
  , At = null;
function Vp(e, t) {
    var r = jt(5, null, null, 0);
    r.elementType = "DELETED",
    r.stateNode = t,
    r.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [r],
    e.flags |= 16) : t.push(r)
}
function Hh(e, t) {
    switch (e.tag) {
    case 5:
        var r = e.type;
        return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        ht = e,
        dt = Sr(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        ht = e,
        dt = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (r = Zr !== null ? {
            id: Zt,
            overflow: Jt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: r,
            retryLane: 1073741824
        },
        r = jt(18, null, null, 0),
        r.stateNode = t,
        r.return = e,
        e.child = r,
        ht = e,
        dt = null,
        !0) : !1;
    default:
        return !1
    }
}
function Gc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Vc(e) {
    if (he) {
        var t = dt;
        if (t) {
            var r = t;
            if (!Hh(e, t)) {
                if (Gc(e))
                    throw Error(R(418));
                t = Sr(r.nextSibling);
                var n = ht;
                t && Hh(e, t) ? Vp(n, r) : (e.flags = e.flags & -4097 | 2,
                he = !1,
                ht = e)
            }
        } else {
            if (Gc(e))
                throw Error(R(418));
            e.flags = e.flags & -4097 | 2,
            he = !1,
            ht = e
        }
    }
}
function Uh(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    ht = e
}
function Us(e) {
    if (e !== ht)
        return !1;
    if (!he)
        return Uh(e),
        he = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Bc(e.type, e.memoizedProps)),
    t && (t = dt)) {
        if (Gc(e))
            throw Yp(),
            Error(R(418));
        for (; t; )
            Vp(e, t),
            t = Sr(t.nextSibling)
    }
    if (Uh(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(R(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var r = e.data;
                    if (r === "/$") {
                        if (t === 0) {
                            dt = Sr(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        r !== "$" && r !== "$!" && r !== "$?" || t++
                }
                e = e.nextSibling
            }
            dt = null
        }
    } else
        dt = ht ? Sr(e.stateNode.nextSibling) : null;
    return !0
}
function Yp() {
    for (var e = dt; e; )
        e = Sr(e.nextSibling)
}
function Bn() {
    dt = ht = null,
    he = !1
}
function id(e) {
    At === null ? At = [e] : At.push(e)
}
var yb = ir.ReactCurrentBatchConfig;
function vo(e, t, r) {
    if (e = r.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (r._owner) {
            if (r = r._owner,
            r) {
                if (r.tag !== 1)
                    throw Error(R(309));
                var n = r.stateNode
            }
            if (!n)
                throw Error(R(147, e));
            var o = n
              , a = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(i) {
                var l = o.refs;
                i === null ? delete l[a] : l[a] = i
            }
            ,
            t._stringRef = a,
            t)
        }
        if (typeof e != "string")
            throw Error(R(284));
        if (!r._owner)
            throw Error(R(290, e))
    }
    return e
}
function Gs(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Gh(e) {
    var t = e._init;
    return t(e._payload)
}
function Qp(e) {
    function t(p, f) {
        if (e) {
            var g = p.deletions;
            g === null ? (p.deletions = [f],
            p.flags |= 16) : g.push(f)
        }
    }
    function r(p, f) {
        if (!e)
            return null;
        for (; f !== null; )
            t(p, f),
            f = f.sibling;
        return null
    }
    function n(p, f) {
        for (p = new Map; f !== null; )
            f.key !== null ? p.set(f.key, f) : p.set(f.index, f),
            f = f.sibling;
        return p
    }
    function o(p, f) {
        return p = Pr(p, f),
        p.index = 0,
        p.sibling = null,
        p
    }
    function a(p, f, g) {
        return p.index = g,
        e ? (g = p.alternate,
        g !== null ? (g = g.index,
        g < f ? (p.flags |= 2,
        f) : g) : (p.flags |= 2,
        f)) : (p.flags |= 1048576,
        f)
    }
    function i(p) {
        return e && p.alternate === null && (p.flags |= 2),
        p
    }
    function l(p, f, g, b) {
        return f === null || f.tag !== 6 ? (f = Ql(g, p.mode, b),
        f.return = p,
        f) : (f = o(f, g),
        f.return = p,
        f)
    }
    function c(p, f, g, b) {
        var j = g.type;
        return j === gn ? h(p, f, g.props.children, b, g.key) : f !== null && (f.elementType === j || typeof j == "object" && j !== null && j.$$typeof === fr && Gh(j) === f.type) ? (b = o(f, g.props),
        b.ref = vo(p, f, g),
        b.return = p,
        b) : (b = ha(g.type, g.key, g.props, null, p.mode, b),
        b.ref = vo(p, f, g),
        b.return = p,
        b)
    }
    function u(p, f, g, b) {
        return f === null || f.tag !== 4 || f.stateNode.containerInfo !== g.containerInfo || f.stateNode.implementation !== g.implementation ? (f = Kl(g, p.mode, b),
        f.return = p,
        f) : (f = o(f, g.children || []),
        f.return = p,
        f)
    }
    function h(p, f, g, b, j) {
        return f === null || f.tag !== 7 ? (f = Qr(g, p.mode, b, j),
        f.return = p,
        f) : (f = o(f, g),
        f.return = p,
        f)
    }
    function d(p, f, g) {
        if (typeof f == "string" && f !== "" || typeof f == "number")
            return f = Ql("" + f, p.mode, g),
            f.return = p,
            f;
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
            case Rs:
                return g = ha(f.type, f.key, f.props, null, p.mode, g),
                g.ref = vo(p, null, f),
                g.return = p,
                g;
            case pn:
                return f = Kl(f, p.mode, g),
                f.return = p,
                f;
            case fr:
                var b = f._init;
                return d(p, b(f._payload), g)
            }
            if (Co(f) || mo(f))
                return f = Qr(f, p.mode, g, null),
                f.return = p,
                f;
            Gs(p, f)
        }
        return null
    }
    function m(p, f, g, b) {
        var j = f !== null ? f.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return j !== null ? null : l(p, f, "" + g, b);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case Rs:
                return g.key === j ? c(p, f, g, b) : null;
            case pn:
                return g.key === j ? u(p, f, g, b) : null;
            case fr:
                return j = g._init,
                m(p, f, j(g._payload), b)
            }
            if (Co(g) || mo(g))
                return j !== null ? null : h(p, f, g, b, null);
            Gs(p, g)
        }
        return null
    }
    function v(p, f, g, b, j) {
        if (typeof b == "string" && b !== "" || typeof b == "number")
            return p = p.get(g) || null,
            l(f, p, "" + b, j);
        if (typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
            case Rs:
                return p = p.get(b.key === null ? g : b.key) || null,
                c(f, p, b, j);
            case pn:
                return p = p.get(b.key === null ? g : b.key) || null,
                u(f, p, b, j);
            case fr:
                var k = b._init;
                return v(p, f, g, k(b._payload), j)
            }
            if (Co(b) || mo(b))
                return p = p.get(g) || null,
                h(f, p, b, j, null);
            Gs(f, b)
        }
        return null
    }
    function y(p, f, g, b) {
        for (var j = null, k = null, N = f, L = f = 0, P = null; N !== null && L < g.length; L++) {
            N.index > L ? (P = N,
            N = null) : P = N.sibling;
            var I = m(p, N, g[L], b);
            if (I === null) {
                N === null && (N = P);
                break
            }
            e && N && I.alternate === null && t(p, N),
            f = a(I, f, L),
            k === null ? j = I : k.sibling = I,
            k = I,
            N = P
        }
        if (L === g.length)
            return r(p, N),
            he && Br(p, L),
            j;
        if (N === null) {
            for (; L < g.length; L++)
                N = d(p, g[L], b),
                N !== null && (f = a(N, f, L),
                k === null ? j = N : k.sibling = N,
                k = N);
            return he && Br(p, L),
            j
        }
        for (N = n(p, N); L < g.length; L++)
            P = v(N, p, L, g[L], b),
            P !== null && (e && P.alternate !== null && N.delete(P.key === null ? L : P.key),
            f = a(P, f, L),
            k === null ? j = P : k.sibling = P,
            k = P);
        return e && N.forEach(function(B) {
            return t(p, B)
        }),
        he && Br(p, L),
        j
    }
    function x(p, f, g, b) {
        var j = mo(g);
        if (typeof j != "function")
            throw Error(R(150));
        if (g = j.call(g),
        g == null)
            throw Error(R(151));
        for (var k = j = null, N = f, L = f = 0, P = null, I = g.next(); N !== null && !I.done; L++,
        I = g.next()) {
            N.index > L ? (P = N,
            N = null) : P = N.sibling;
            var B = m(p, N, I.value, b);
            if (B === null) {
                N === null && (N = P);
                break
            }
            e && N && B.alternate === null && t(p, N),
            f = a(B, f, L),
            k === null ? j = B : k.sibling = B,
            k = B,
            N = P
        }
        if (I.done)
            return r(p, N),
            he && Br(p, L),
            j;
        if (N === null) {
            for (; !I.done; L++,
            I = g.next())
                I = d(p, I.value, b),
                I !== null && (f = a(I, f, L),
                k === null ? j = I : k.sibling = I,
                k = I);
            return he && Br(p, L),
            j
        }
        for (N = n(p, N); !I.done; L++,
        I = g.next())
            I = v(N, p, L, I.value, b),
            I !== null && (e && I.alternate !== null && N.delete(I.key === null ? L : I.key),
            f = a(I, f, L),
            k === null ? j = I : k.sibling = I,
            k = I);
        return e && N.forEach(function(D) {
            return t(p, D)
        }),
        he && Br(p, L),
        j
    }
    function w(p, f, g, b) {
        if (typeof g == "object" && g !== null && g.type === gn && g.key === null && (g = g.props.children),
        typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case Rs:
                e: {
                    for (var j = g.key, k = f; k !== null; ) {
                        if (k.key === j) {
                            if (j = g.type,
                            j === gn) {
                                if (k.tag === 7) {
                                    r(p, k.sibling),
                                    f = o(k, g.props.children),
                                    f.return = p,
                                    p = f;
                                    break e
                                }
                            } else if (k.elementType === j || typeof j == "object" && j !== null && j.$$typeof === fr && Gh(j) === k.type) {
                                r(p, k.sibling),
                                f = o(k, g.props),
                                f.ref = vo(p, k, g),
                                f.return = p,
                                p = f;
                                break e
                            }
                            r(p, k);
                            break
                        } else
                            t(p, k);
                        k = k.sibling
                    }
                    g.type === gn ? (f = Qr(g.props.children, p.mode, b, g.key),
                    f.return = p,
                    p = f) : (b = ha(g.type, g.key, g.props, null, p.mode, b),
                    b.ref = vo(p, f, g),
                    b.return = p,
                    p = b)
                }
                return i(p);
            case pn:
                e: {
                    for (k = g.key; f !== null; ) {
                        if (f.key === k)
                            if (f.tag === 4 && f.stateNode.containerInfo === g.containerInfo && f.stateNode.implementation === g.implementation) {
                                r(p, f.sibling),
                                f = o(f, g.children || []),
                                f.return = p,
                                p = f;
                                break e
                            } else {
                                r(p, f);
                                break
                            }
                        else
                            t(p, f);
                        f = f.sibling
                    }
                    f = Kl(g, p.mode, b),
                    f.return = p,
                    p = f
                }
                return i(p);
            case fr:
                return k = g._init,
                w(p, f, k(g._payload), b)
            }
            if (Co(g))
                return y(p, f, g, b);
            if (mo(g))
                return x(p, f, g, b);
            Gs(p, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g,
        f !== null && f.tag === 6 ? (r(p, f.sibling),
        f = o(f, g),
        f.return = p,
        p = f) : (r(p, f),
        f = Ql(g, p.mode, b),
        f.return = p,
        p = f),
        i(p)) : r(p, f)
    }
    return w
}
var Fn = Qp(!0)
  , Kp = Qp(!1)
  , za = Rr(null)
  , Da = null
  , Nn = null
  , ld = null;
function cd() {
    ld = Nn = Da = null
}
function ud(e) {
    var t = za.current;
    ce(za),
    e._currentValue = t
}
function Yc(e, t, r) {
    for (; e !== null; ) {
        var n = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
        e === r)
            break;
        e = e.return
    }
}
function Tn(e, t) {
    Da = e,
    ld = Nn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (tt = !0),
    e.firstContext = null)
}
function Nt(e) {
    var t = e._currentValue;
    if (ld !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Nn === null) {
            if (Da === null)
                throw Error(R(308));
            Nn = e,
            Da.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Nn = Nn.next = e;
    return t
}
var Ur = null;
function dd(e) {
    Ur === null ? Ur = [e] : Ur.push(e)
}
function qp(e, t, r, n) {
    var o = t.interleaved;
    return o === null ? (r.next = r,
    dd(t)) : (r.next = o.next,
    o.next = r),
    t.interleaved = r,
    nr(e, n)
}
function nr(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t),
    r = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        r = e.alternate,
        r !== null && (r.childLanes |= t),
        r = e,
        e = e.return;
    return r.tag === 3 ? r.stateNode : null
}
var mr = !1;
function hd(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Xp(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function er(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Cr(e, t, r) {
    var n = e.updateQueue;
    if (n === null)
        return null;
    if (n = n.shared,
    X & 2) {
        var o = n.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        n.pending = t,
        nr(e, r)
    }
    return o = n.interleaved,
    o === null ? (t.next = t,
    dd(n)) : (t.next = o.next,
    o.next = t),
    n.interleaved = t,
    nr(e, r)
}
function aa(e, t, r) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (r & 4194240) !== 0)) {
        var n = t.lanes;
        n &= e.pendingLanes,
        r |= n,
        t.lanes = r,
        Xu(e, r)
    }
}
function Vh(e, t) {
    var r = e.updateQueue
      , n = e.alternate;
    if (n !== null && (n = n.updateQueue,
    r === n)) {
        var o = null
          , a = null;
        if (r = r.firstBaseUpdate,
        r !== null) {
            do {
                var i = {
                    eventTime: r.eventTime,
                    lane: r.lane,
                    tag: r.tag,
                    payload: r.payload,
                    callback: r.callback,
                    next: null
                };
                a === null ? o = a = i : a = a.next = i,
                r = r.next
            } while (r !== null);
            a === null ? o = a = t : a = a.next = t
        } else
            o = a = t;
        r = {
            baseState: n.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: a,
            shared: n.shared,
            effects: n.effects
        },
        e.updateQueue = r;
        return
    }
    e = r.lastBaseUpdate,
    e === null ? r.firstBaseUpdate = t : e.next = t,
    r.lastBaseUpdate = t
}
function Wa(e, t, r, n) {
    var o = e.updateQueue;
    mr = !1;
    var a = o.firstBaseUpdate
      , i = o.lastBaseUpdate
      , l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var c = l
          , u = c.next;
        c.next = null,
        i === null ? a = u : i.next = u,
        i = c;
        var h = e.alternate;
        h !== null && (h = h.updateQueue,
        l = h.lastBaseUpdate,
        l !== i && (l === null ? h.firstBaseUpdate = u : l.next = u,
        h.lastBaseUpdate = c))
    }
    if (a !== null) {
        var d = o.baseState;
        i = 0,
        h = u = c = null,
        l = a;
        do {
            var m = l.lane
              , v = l.eventTime;
            if ((n & m) === m) {
                h !== null && (h = h.next = {
                    eventTime: v,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var y = e
                      , x = l;
                    switch (m = t,
                    v = r,
                    x.tag) {
                    case 1:
                        if (y = x.payload,
                        typeof y == "function") {
                            d = y.call(v, d, m);
                            break e
                        }
                        d = y;
                        break e;
                    case 3:
                        y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = x.payload,
                        m = typeof y == "function" ? y.call(v, d, m) : y,
                        m == null)
                            break e;
                        d = ge({}, d, m);
                        break e;
                    case 2:
                        mr = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                m = o.effects,
                m === null ? o.effects = [l] : m.push(l))
            } else
                v = {
                    eventTime: v,
                    lane: m,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                h === null ? (u = h = v,
                c = d) : h = h.next = v,
                i |= m;
            if (l = l.next,
            l === null) {
                if (l = o.shared.pending,
                l === null)
                    break;
                m = l,
                l = m.next,
                m.next = null,
                o.lastBaseUpdate = m,
                o.shared.pending = null
            }
        } while (!0);
        if (h === null && (c = d),
        o.baseState = c,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = h,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                i |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            a === null && (o.shared.lanes = 0);
        en |= i,
        e.lanes = i,
        e.memoizedState = d
    }
}
function Yh(e, t, r) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var n = e[t]
              , o = n.callback;
            if (o !== null) {
                if (n.callback = null,
                n = r,
                typeof o != "function")
                    throw Error(R(191, o));
                o.call(n)
            }
        }
}
var bs = {}
  , Vt = Rr(bs)
  , es = Rr(bs)
  , ts = Rr(bs);
function Gr(e) {
    if (e === bs)
        throw Error(R(174));
    return e
}
function fd(e, t) {
    switch (ae(ts, t),
    ae(es, e),
    ae(Vt, bs),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Oc(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Oc(t, e)
    }
    ce(Vt),
    ae(Vt, t)
}
function Hn() {
    ce(Vt),
    ce(es),
    ce(ts)
}
function Zp(e) {
    Gr(ts.current);
    var t = Gr(Vt.current)
      , r = Oc(t, e.type);
    t !== r && (ae(es, e),
    ae(Vt, r))
}
function md(e) {
    es.current === e && (ce(Vt),
    ce(es))
}
var me = Rr(0);
function Ba(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var r = t.memoizedState;
            if (r !== null && (r = r.dehydrated,
            r === null || r.data === "$?" || r.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Fl = [];
function pd() {
    for (var e = 0; e < Fl.length; e++)
        Fl[e]._workInProgressVersionPrimary = null;
    Fl.length = 0
}
var ia = ir.ReactCurrentDispatcher
  , Hl = ir.ReactCurrentBatchConfig
  , Jr = 0
  , pe = null
  , _e = null
  , Ie = null
  , Fa = !1
  , Lo = !1
  , rs = 0
  , vb = 0;
function Be() {
    throw Error(R(321))
}
function gd(e, t) {
    if (t === null)
        return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
        if (!Mt(e[r], t[r]))
            return !1;
    return !0
}
function xd(e, t, r, n, o, a) {
    if (Jr = a,
    pe = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    ia.current = e === null || e.memoizedState === null ? kb : Nb,
    e = r(n, o),
    Lo) {
        a = 0;
        do {
            if (Lo = !1,
            rs = 0,
            25 <= a)
                throw Error(R(301));
            a += 1,
            Ie = _e = null,
            t.updateQueue = null,
            ia.current = Sb,
            e = r(n, o)
        } while (Lo)
    }
    if (ia.current = Ha,
    t = _e !== null && _e.next !== null,
    Jr = 0,
    Ie = _e = pe = null,
    Fa = !1,
    t)
        throw Error(R(300));
    return e
}
function yd() {
    var e = rs !== 0;
    return rs = 0,
    e
}
function Wt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ie === null ? pe.memoizedState = Ie = e : Ie = Ie.next = e,
    Ie
}
function St() {
    if (_e === null) {
        var e = pe.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = _e.next;
    var t = Ie === null ? pe.memoizedState : Ie.next;
    if (t !== null)
        Ie = t,
        _e = e;
    else {
        if (e === null)
            throw Error(R(310));
        _e = e,
        e = {
            memoizedState: _e.memoizedState,
            baseState: _e.baseState,
            baseQueue: _e.baseQueue,
            queue: _e.queue,
            next: null
        },
        Ie === null ? pe.memoizedState = Ie = e : Ie = Ie.next = e
    }
    return Ie
}
function ns(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Ul(e) {
    var t = St()
      , r = t.queue;
    if (r === null)
        throw Error(R(311));
    r.lastRenderedReducer = e;
    var n = _e
      , o = n.baseQueue
      , a = r.pending;
    if (a !== null) {
        if (o !== null) {
            var i = o.next;
            o.next = a.next,
            a.next = i
        }
        n.baseQueue = o = a,
        r.pending = null
    }
    if (o !== null) {
        a = o.next,
        n = n.baseState;
        var l = i = null
          , c = null
          , u = a;
        do {
            var h = u.lane;
            if ((Jr & h) === h)
                c !== null && (c = c.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                n = u.hasEagerState ? u.eagerState : e(n, u.action);
            else {
                var d = {
                    lane: h,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                c === null ? (l = c = d,
                i = n) : c = c.next = d,
                pe.lanes |= h,
                en |= h
            }
            u = u.next
        } while (u !== null && u !== a);
        c === null ? i = n : c.next = l,
        Mt(n, t.memoizedState) || (tt = !0),
        t.memoizedState = n,
        t.baseState = i,
        t.baseQueue = c,
        r.lastRenderedState = n
    }
    if (e = r.interleaved,
    e !== null) {
        o = e;
        do
            a = o.lane,
            pe.lanes |= a,
            en |= a,
            o = o.next;
        while (o !== e)
    } else
        o === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch]
}
function Gl(e) {
    var t = St()
      , r = t.queue;
    if (r === null)
        throw Error(R(311));
    r.lastRenderedReducer = e;
    var n = r.dispatch
      , o = r.pending
      , a = t.memoizedState;
    if (o !== null) {
        r.pending = null;
        var i = o = o.next;
        do
            a = e(a, i.action),
            i = i.next;
        while (i !== o);
        Mt(a, t.memoizedState) || (tt = !0),
        t.memoizedState = a,
        t.baseQueue === null && (t.baseState = a),
        r.lastRenderedState = a
    }
    return [a, n]
}
function Jp() {}
function eg(e, t) {
    var r = pe
      , n = St()
      , o = t()
      , a = !Mt(n.memoizedState, o);
    if (a && (n.memoizedState = o,
    tt = !0),
    n = n.queue,
    vd(ng.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || a || Ie !== null && Ie.memoizedState.tag & 1) {
        if (r.flags |= 2048,
        os(9, rg.bind(null, r, n, o, t), void 0, null),
        Te === null)
            throw Error(R(349));
        Jr & 30 || tg(r, t, o)
    }
    return o
}
function tg(e, t, r) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: r
    },
    t = pe.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    pe.updateQueue = t,
    t.stores = [e]) : (r = t.stores,
    r === null ? t.stores = [e] : r.push(e))
}
function rg(e, t, r, n) {
    t.value = r,
    t.getSnapshot = n,
    og(t) && sg(e)
}
function ng(e, t, r) {
    return r(function() {
        og(t) && sg(e)
    })
}
function og(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var r = t();
        return !Mt(e, r)
    } catch {
        return !0
    }
}
function sg(e) {
    var t = nr(e, 1);
    t !== null && Lt(t, e, 1, -1)
}
function Qh(e) {
    var t = Wt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ns,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = jb.bind(null, pe, e),
    [t.memoizedState, e]
}
function os(e, t, r, n) {
    return e = {
        tag: e,
        create: t,
        destroy: r,
        deps: n,
        next: null
    },
    t = pe.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    pe.updateQueue = t,
    t.lastEffect = e.next = e) : (r = t.lastEffect,
    r === null ? t.lastEffect = e.next = e : (n = r.next,
    r.next = e,
    e.next = n,
    t.lastEffect = e)),
    e
}
function ag() {
    return St().memoizedState
}
function la(e, t, r, n) {
    var o = Wt();
    pe.flags |= e,
    o.memoizedState = os(1 | t, r, void 0, n === void 0 ? null : n)
}
function Ni(e, t, r, n) {
    var o = St();
    n = n === void 0 ? null : n;
    var a = void 0;
    if (_e !== null) {
        var i = _e.memoizedState;
        if (a = i.destroy,
        n !== null && gd(n, i.deps)) {
            o.memoizedState = os(t, r, a, n);
            return
        }
    }
    pe.flags |= e,
    o.memoizedState = os(1 | t, r, a, n)
}
function Kh(e, t) {
    return la(8390656, 8, e, t)
}
function vd(e, t) {
    return Ni(2048, 8, e, t)
}
function ig(e, t) {
    return Ni(4, 2, e, t)
}
function lg(e, t) {
    return Ni(4, 4, e, t)
}
function cg(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function ug(e, t, r) {
    return r = r != null ? r.concat([e]) : null,
    Ni(4, 4, cg.bind(null, t, e), r)
}
function bd() {}
function dg(e, t) {
    var r = St();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && gd(t, n[1]) ? n[0] : (r.memoizedState = [e, t],
    e)
}
function hg(e, t) {
    var r = St();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && gd(t, n[1]) ? n[0] : (e = e(),
    r.memoizedState = [e, t],
    e)
}
function fg(e, t, r) {
    return Jr & 21 ? (Mt(r, t) || (r = yp(),
    pe.lanes |= r,
    en |= r,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    tt = !0),
    e.memoizedState = r)
}
function bb(e, t) {
    var r = ne;
    ne = r !== 0 && 4 > r ? r : 4,
    e(!0);
    var n = Hl.transition;
    Hl.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ne = r,
        Hl.transition = n
    }
}
function mg() {
    return St().memoizedState
}
function wb(e, t, r) {
    var n = _r(e);
    if (r = {
        lane: n,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    pg(e))
        gg(t, r);
    else if (r = qp(e, t, r, n),
    r !== null) {
        var o = Ke();
        Lt(r, e, n, o),
        xg(r, t, n)
    }
}
function jb(e, t, r) {
    var n = _r(e)
      , o = {
        lane: n,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (pg(e))
        gg(t, o);
    else {
        var a = e.alternate;
        if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer,
        a !== null))
            try {
                var i = t.lastRenderedState
                  , l = a(i, r);
                if (o.hasEagerState = !0,
                o.eagerState = l,
                Mt(l, i)) {
                    var c = t.interleaved;
                    c === null ? (o.next = o,
                    dd(t)) : (o.next = c.next,
                    c.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        r = qp(e, t, o, n),
        r !== null && (o = Ke(),
        Lt(r, e, n, o),
        xg(r, t, n))
    }
}
function pg(e) {
    var t = e.alternate;
    return e === pe || t !== null && t === pe
}
function gg(e, t) {
    Lo = Fa = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next,
    r.next = t),
    e.pending = t
}
function xg(e, t, r) {
    if (r & 4194240) {
        var n = t.lanes;
        n &= e.pendingLanes,
        r |= n,
        t.lanes = r,
        Xu(e, r)
    }
}
var Ha = {
    readContext: Nt,
    useCallback: Be,
    useContext: Be,
    useEffect: Be,
    useImperativeHandle: Be,
    useInsertionEffect: Be,
    useLayoutEffect: Be,
    useMemo: Be,
    useReducer: Be,
    useRef: Be,
    useState: Be,
    useDebugValue: Be,
    useDeferredValue: Be,
    useTransition: Be,
    useMutableSource: Be,
    useSyncExternalStore: Be,
    useId: Be,
    unstable_isNewReconciler: !1
}
  , kb = {
    readContext: Nt,
    useCallback: function(e, t) {
        return Wt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Nt,
    useEffect: Kh,
    useImperativeHandle: function(e, t, r) {
        return r = r != null ? r.concat([e]) : null,
        la(4194308, 4, cg.bind(null, t, e), r)
    },
    useLayoutEffect: function(e, t) {
        return la(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return la(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var r = Wt();
        return t = t === void 0 ? null : t,
        e = e(),
        r.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, r) {
        var n = Wt();
        return t = r !== void 0 ? r(t) : t,
        n.memoizedState = n.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        n.queue = e,
        e = e.dispatch = wb.bind(null, pe, e),
        [n.memoizedState, e]
    },
    useRef: function(e) {
        var t = Wt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Qh,
    useDebugValue: bd,
    useDeferredValue: function(e) {
        return Wt().memoizedState = e
    },
    useTransition: function() {
        var e = Qh(!1)
          , t = e[0];
        return e = bb.bind(null, e[1]),
        Wt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, r) {
        var n = pe
          , o = Wt();
        if (he) {
            if (r === void 0)
                throw Error(R(407));
            r = r()
        } else {
            if (r = t(),
            Te === null)
                throw Error(R(349));
            Jr & 30 || tg(n, t, r)
        }
        o.memoizedState = r;
        var a = {
            value: r,
            getSnapshot: t
        };
        return o.queue = a,
        Kh(ng.bind(null, n, a, e), [e]),
        n.flags |= 2048,
        os(9, rg.bind(null, n, a, r, t), void 0, null),
        r
    },
    useId: function() {
        var e = Wt()
          , t = Te.identifierPrefix;
        if (he) {
            var r = Jt
              , n = Zt;
            r = (n & ~(1 << 32 - Rt(n) - 1)).toString(32) + r,
            t = ":" + t + "R" + r,
            r = rs++,
            0 < r && (t += "H" + r.toString(32)),
            t += ":"
        } else
            r = vb++,
            t = ":" + t + "r" + r.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Nb = {
    readContext: Nt,
    useCallback: dg,
    useContext: Nt,
    useEffect: vd,
    useImperativeHandle: ug,
    useInsertionEffect: ig,
    useLayoutEffect: lg,
    useMemo: hg,
    useReducer: Ul,
    useRef: ag,
    useState: function() {
        return Ul(ns)
    },
    useDebugValue: bd,
    useDeferredValue: function(e) {
        var t = St();
        return fg(t, _e.memoizedState, e)
    },
    useTransition: function() {
        var e = Ul(ns)[0]
          , t = St().memoizedState;
        return [e, t]
    },
    useMutableSource: Jp,
    useSyncExternalStore: eg,
    useId: mg,
    unstable_isNewReconciler: !1
}
  , Sb = {
    readContext: Nt,
    useCallback: dg,
    useContext: Nt,
    useEffect: vd,
    useImperativeHandle: ug,
    useInsertionEffect: ig,
    useLayoutEffect: lg,
    useMemo: hg,
    useReducer: Gl,
    useRef: ag,
    useState: function() {
        return Gl(ns)
    },
    useDebugValue: bd,
    useDeferredValue: function(e) {
        var t = St();
        return _e === null ? t.memoizedState = e : fg(t, _e.memoizedState, e)
    },
    useTransition: function() {
        var e = Gl(ns)[0]
          , t = St().memoizedState;
        return [e, t]
    },
    useMutableSource: Jp,
    useSyncExternalStore: eg,
    useId: mg,
    unstable_isNewReconciler: !1
};
function Et(e, t) {
    if (e && e.defaultProps) {
        t = ge({}, t),
        e = e.defaultProps;
        for (var r in e)
            t[r] === void 0 && (t[r] = e[r]);
        return t
    }
    return t
}
function Qc(e, t, r, n) {
    t = e.memoizedState,
    r = r(n, t),
    r = r == null ? t : ge({}, t, r),
    e.memoizedState = r,
    e.lanes === 0 && (e.updateQueue.baseState = r)
}
var Si = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? sn(e) === e : !1
    },
    enqueueSetState: function(e, t, r) {
        e = e._reactInternals;
        var n = Ke()
          , o = _r(e)
          , a = er(n, o);
        a.payload = t,
        r != null && (a.callback = r),
        t = Cr(e, a, o),
        t !== null && (Lt(t, e, o, n),
        aa(t, e, o))
    },
    enqueueReplaceState: function(e, t, r) {
        e = e._reactInternals;
        var n = Ke()
          , o = _r(e)
          , a = er(n, o);
        a.tag = 1,
        a.payload = t,
        r != null && (a.callback = r),
        t = Cr(e, a, o),
        t !== null && (Lt(t, e, o, n),
        aa(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var r = Ke()
          , n = _r(e)
          , o = er(r, n);
        o.tag = 2,
        t != null && (o.callback = t),
        t = Cr(e, o, n),
        t !== null && (Lt(t, e, n, r),
        aa(t, e, n))
    }
};
function qh(e, t, r, n, o, a, i) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, a, i) : t.prototype && t.prototype.isPureReactComponent ? !qo(r, n) || !qo(o, a) : !0
}
function yg(e, t, r) {
    var n = !1
      , o = Tr
      , a = t.contextType;
    return typeof a == "object" && a !== null ? a = Nt(a) : (o = ot(t) ? Xr : Ve.current,
    n = t.contextTypes,
    a = (n = n != null) ? Wn(e, o) : Tr),
    t = new t(r,a),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Si,
    e.stateNode = t,
    t._reactInternals = e,
    n && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = a),
    t
}
function Xh(e, t, r, n) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && Si.enqueueReplaceState(t, t.state, null)
}
function Kc(e, t, r, n) {
    var o = e.stateNode;
    o.props = r,
    o.state = e.memoizedState,
    o.refs = {},
    hd(e);
    var a = t.contextType;
    typeof a == "object" && a !== null ? o.context = Nt(a) : (a = ot(t) ? Xr : Ve.current,
    o.context = Wn(e, a)),
    o.state = e.memoizedState,
    a = t.getDerivedStateFromProps,
    typeof a == "function" && (Qc(e, t, a, r),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && Si.enqueueReplaceState(o, o.state, null),
    Wa(e, r, o, n),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function Un(e, t) {
    try {
        var r = ""
          , n = t;
        do
            r += J0(n),
            n = n.return;
        while (n);
        var o = r
    } catch (a) {
        o = `
Error generating stack: ` + a.message + `
` + a.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function Vl(e, t, r) {
    return {
        value: e,
        source: null,
        stack: r ?? null,
        digest: t ?? null
    }
}
function qc(e, t) {
    try {
        console.error(t.value)
    } catch (r) {
        setTimeout(function() {
            throw r
        })
    }
}
var Cb = typeof WeakMap == "function" ? WeakMap : Map;
function vg(e, t, r) {
    r = er(-1, r),
    r.tag = 3,
    r.payload = {
        element: null
    };
    var n = t.value;
    return r.callback = function() {
        Ga || (Ga = !0,
        au = n),
        qc(e, t)
    }
    ,
    r
}
function bg(e, t, r) {
    r = er(-1, r),
    r.tag = 3;
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
        var o = t.value;
        r.payload = function() {
            return n(o)
        }
        ,
        r.callback = function() {
            qc(e, t)
        }
    }
    var a = e.stateNode;
    return a !== null && typeof a.componentDidCatch == "function" && (r.callback = function() {
        qc(e, t),
        typeof n != "function" && (Or === null ? Or = new Set([this]) : Or.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }
    ),
    r
}
function Zh(e, t, r) {
    var n = e.pingCache;
    if (n === null) {
        n = e.pingCache = new Cb;
        var o = new Set;
        n.set(t, o)
    } else
        o = n.get(t),
        o === void 0 && (o = new Set,
        n.set(t, o));
    o.has(r) || (o.add(r),
    e = Wb.bind(null, e, t, r),
    t.then(e, e))
}
function Jh(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function ef(e, t, r, n, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    r.flags |= 131072,
    r.flags &= -52805,
    r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = er(-1, 1),
    t.tag = 2,
    Cr(r, t, 1))),
    r.lanes |= 1),
    e)
}
var Ob = ir.ReactCurrentOwner
  , tt = !1;
function Qe(e, t, r, n) {
    t.child = e === null ? Kp(t, null, r, n) : Fn(t, e.child, r, n)
}
function tf(e, t, r, n, o) {
    r = r.render;
    var a = t.ref;
    return Tn(t, o),
    n = xd(e, t, r, n, a, o),
    r = yd(),
    e !== null && !tt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    or(e, t, o)) : (he && r && sd(t),
    t.flags |= 1,
    Qe(e, t, n, o),
    t.child)
}
function rf(e, t, r, n, o) {
    if (e === null) {
        var a = r.type;
        return typeof a == "function" && !_d(a) && a.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15,
        t.type = a,
        wg(e, t, a, n, o)) : (e = ha(r.type, null, n, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (a = e.child,
    !(e.lanes & o)) {
        var i = a.memoizedProps;
        if (r = r.compare,
        r = r !== null ? r : qo,
        r(i, n) && e.ref === t.ref)
            return or(e, t, o)
    }
    return t.flags |= 1,
    e = Pr(a, n),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function wg(e, t, r, n, o) {
    if (e !== null) {
        var a = e.memoizedProps;
        if (qo(a, n) && e.ref === t.ref)
            if (tt = !1,
            t.pendingProps = n = a,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (tt = !0);
            else
                return t.lanes = e.lanes,
                or(e, t, o)
    }
    return Xc(e, t, r, n, o)
}
function jg(e, t, r) {
    var n = t.pendingProps
      , o = n.children
      , a = e !== null ? e.memoizedState : null;
    if (n.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ae(Cn, ct),
            ct |= r;
        else {
            if (!(r & 1073741824))
                return e = a !== null ? a.baseLanes | r : r,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ae(Cn, ct),
                ct |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            n = a !== null ? a.baseLanes : r,
            ae(Cn, ct),
            ct |= n
        }
    else
        a !== null ? (n = a.baseLanes | r,
        t.memoizedState = null) : n = r,
        ae(Cn, ct),
        ct |= n;
    return Qe(e, t, o, r),
    t.child
}
function kg(e, t) {
    var r = t.ref;
    (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Xc(e, t, r, n, o) {
    var a = ot(r) ? Xr : Ve.current;
    return a = Wn(t, a),
    Tn(t, o),
    r = xd(e, t, r, n, a, o),
    n = yd(),
    e !== null && !tt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    or(e, t, o)) : (he && n && sd(t),
    t.flags |= 1,
    Qe(e, t, r, o),
    t.child)
}
function nf(e, t, r, n, o) {
    if (ot(r)) {
        var a = !0;
        La(t)
    } else
        a = !1;
    if (Tn(t, o),
    t.stateNode === null)
        ca(e, t),
        yg(t, r, n),
        Kc(t, r, n, o),
        n = !0;
    else if (e === null) {
        var i = t.stateNode
          , l = t.memoizedProps;
        i.props = l;
        var c = i.context
          , u = r.contextType;
        typeof u == "object" && u !== null ? u = Nt(u) : (u = ot(r) ? Xr : Ve.current,
        u = Wn(t, u));
        var h = r.getDerivedStateFromProps
          , d = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (l !== n || c !== u) && Xh(t, i, n, u),
        mr = !1;
        var m = t.memoizedState;
        i.state = m,
        Wa(t, n, i, o),
        c = t.memoizedState,
        l !== n || m !== c || nt.current || mr ? (typeof h == "function" && (Qc(t, r, h, n),
        c = t.memoizedState),
        (l = mr || qh(t, r, l, n, m, c, u)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = n,
        t.memoizedState = c),
        i.props = n,
        i.state = c,
        i.context = u,
        n = l) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        n = !1)
    } else {
        i = t.stateNode,
        Xp(e, t),
        l = t.memoizedProps,
        u = t.type === t.elementType ? l : Et(t.type, l),
        i.props = u,
        d = t.pendingProps,
        m = i.context,
        c = r.contextType,
        typeof c == "object" && c !== null ? c = Nt(c) : (c = ot(r) ? Xr : Ve.current,
        c = Wn(t, c));
        var v = r.getDerivedStateFromProps;
        (h = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (l !== d || m !== c) && Xh(t, i, n, c),
        mr = !1,
        m = t.memoizedState,
        i.state = m,
        Wa(t, n, i, o);
        var y = t.memoizedState;
        l !== d || m !== y || nt.current || mr ? (typeof v == "function" && (Qc(t, r, v, n),
        y = t.memoizedState),
        (u = mr || qh(t, r, u, n, m, y, c) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, y, c),
        typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(n, y, c)),
        typeof i.componentDidUpdate == "function" && (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = n,
        t.memoizedState = y),
        i.props = n,
        i.state = y,
        i.context = c,
        n = u) : (typeof i.componentDidUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        n = !1)
    }
    return Zc(e, t, r, n, a, o)
}
function Zc(e, t, r, n, o, a) {
    kg(e, t);
    var i = (t.flags & 128) !== 0;
    if (!n && !i)
        return o && Fh(t, r, !1),
        or(e, t, a);
    n = t.stateNode,
    Ob.current = t;
    var l = i && typeof r.getDerivedStateFromError != "function" ? null : n.render();
    return t.flags |= 1,
    e !== null && i ? (t.child = Fn(t, e.child, null, a),
    t.child = Fn(t, null, l, a)) : Qe(e, t, l, a),
    t.memoizedState = n.state,
    o && Fh(t, r, !0),
    t.child
}
function Ng(e) {
    var t = e.stateNode;
    t.pendingContext ? Bh(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Bh(e, t.context, !1),
    fd(e, t.containerInfo)
}
function of(e, t, r, n, o) {
    return Bn(),
    id(o),
    t.flags |= 256,
    Qe(e, t, r, n),
    t.child
}
var Jc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function eu(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Sg(e, t, r) {
    var n = t.pendingProps, o = me.current, a = !1, i = (t.flags & 128) !== 0, l;
    if ((l = i) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l ? (a = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    ae(me, o & 1),
    e === null)
        return Vc(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (i = n.children,
        e = n.fallback,
        a ? (n = t.mode,
        a = t.child,
        i = {
            mode: "hidden",
            children: i
        },
        !(n & 1) && a !== null ? (a.childLanes = 0,
        a.pendingProps = i) : a = _i(i, n, 0, null),
        e = Qr(e, n, r, null),
        a.return = t,
        e.return = t,
        a.sibling = e,
        t.child = a,
        t.child.memoizedState = eu(r),
        t.memoizedState = Jc,
        e) : wd(t, i));
    if (o = e.memoizedState,
    o !== null && (l = o.dehydrated,
    l !== null))
        return _b(e, t, i, n, l, o, r);
    if (a) {
        a = n.fallback,
        i = t.mode,
        o = e.child,
        l = o.sibling;
        var c = {
            mode: "hidden",
            children: n.children
        };
        return !(i & 1) && t.child !== o ? (n = t.child,
        n.childLanes = 0,
        n.pendingProps = c,
        t.deletions = null) : (n = Pr(o, c),
        n.subtreeFlags = o.subtreeFlags & 14680064),
        l !== null ? a = Pr(l, a) : (a = Qr(a, i, r, null),
        a.flags |= 2),
        a.return = t,
        n.return = t,
        n.sibling = a,
        t.child = n,
        n = a,
        a = t.child,
        i = e.child.memoizedState,
        i = i === null ? eu(r) : {
            baseLanes: i.baseLanes | r,
            cachePool: null,
            transitions: i.transitions
        },
        a.memoizedState = i,
        a.childLanes = e.childLanes & ~r,
        t.memoizedState = Jc,
        n
    }
    return a = e.child,
    e = a.sibling,
    n = Pr(a, {
        mode: "visible",
        children: n.children
    }),
    !(t.mode & 1) && (n.lanes = r),
    n.return = t,
    n.sibling = null,
    e !== null && (r = t.deletions,
    r === null ? (t.deletions = [e],
    t.flags |= 16) : r.push(e)),
    t.child = n,
    t.memoizedState = null,
    n
}
function wd(e, t) {
    return t = _i({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Vs(e, t, r, n) {
    return n !== null && id(n),
    Fn(t, e.child, null, r),
    e = wd(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function _b(e, t, r, n, o, a, i) {
    if (r)
        return t.flags & 256 ? (t.flags &= -257,
        n = Vl(Error(R(422))),
        Vs(e, t, i, n)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (a = n.fallback,
        o = t.mode,
        n = _i({
            mode: "visible",
            children: n.children
        }, o, 0, null),
        a = Qr(a, o, i, null),
        a.flags |= 2,
        n.return = t,
        a.return = t,
        n.sibling = a,
        t.child = n,
        t.mode & 1 && Fn(t, e.child, null, i),
        t.child.memoizedState = eu(i),
        t.memoizedState = Jc,
        a);
    if (!(t.mode & 1))
        return Vs(e, t, i, null);
    if (o.data === "$!") {
        if (n = o.nextSibling && o.nextSibling.dataset,
        n)
            var l = n.dgst;
        return n = l,
        a = Error(R(419)),
        n = Vl(a, n, void 0),
        Vs(e, t, i, n)
    }
    if (l = (i & e.childLanes) !== 0,
    tt || l) {
        if (n = Te,
        n !== null) {
            switch (i & -i) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (n.suspendedLanes | i) ? 0 : o,
            o !== 0 && o !== a.retryLane && (a.retryLane = o,
            nr(e, o),
            Lt(n, e, o, -1))
        }
        return Od(),
        n = Vl(Error(R(421))),
        Vs(e, t, i, n)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Bb.bind(null, e),
    o._reactRetry = t,
    null) : (e = a.treeContext,
    dt = Sr(o.nextSibling),
    ht = t,
    he = !0,
    At = null,
    e !== null && (vt[bt++] = Zt,
    vt[bt++] = Jt,
    vt[bt++] = Zr,
    Zt = e.id,
    Jt = e.overflow,
    Zr = t),
    t = wd(t, n.children),
    t.flags |= 4096,
    t)
}
function sf(e, t, r) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t),
    Yc(e.return, t, r)
}
function Yl(e, t, r, n, o) {
    var a = e.memoizedState;
    a === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: o
    } : (a.isBackwards = t,
    a.rendering = null,
    a.renderingStartTime = 0,
    a.last = n,
    a.tail = r,
    a.tailMode = o)
}
function Cg(e, t, r) {
    var n = t.pendingProps
      , o = n.revealOrder
      , a = n.tail;
    if (Qe(e, t, n.children, r),
    n = me.current,
    n & 2)
        n = n & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && sf(e, r, t);
                else if (e.tag === 19)
                    sf(e, r, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        n &= 1
    }
    if (ae(me, n),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (r = t.child,
            o = null; r !== null; )
                e = r.alternate,
                e !== null && Ba(e) === null && (o = r),
                r = r.sibling;
            r = o,
            r === null ? (o = t.child,
            t.child = null) : (o = r.sibling,
            r.sibling = null),
            Yl(t, !1, o, r, a);
            break;
        case "backwards":
            for (r = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && Ba(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = r,
                r = o,
                o = e
            }
            Yl(t, !0, r, null, a);
            break;
        case "together":
            Yl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function ca(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function or(e, t, r) {
    if (e !== null && (t.dependencies = e.dependencies),
    en |= t.lanes,
    !(r & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(R(153));
    if (t.child !== null) {
        for (e = t.child,
        r = Pr(e, e.pendingProps),
        t.child = r,
        r.return = t; e.sibling !== null; )
            e = e.sibling,
            r = r.sibling = Pr(e, e.pendingProps),
            r.return = t;
        r.sibling = null
    }
    return t.child
}
function Pb(e, t, r) {
    switch (t.tag) {
    case 3:
        Ng(t),
        Bn();
        break;
    case 5:
        Zp(t);
        break;
    case 1:
        ot(t.type) && La(t);
        break;
    case 4:
        fd(t, t.stateNode.containerInfo);
        break;
    case 10:
        var n = t.type._context
          , o = t.memoizedProps.value;
        ae(za, n._currentValue),
        n._currentValue = o;
        break;
    case 13:
        if (n = t.memoizedState,
        n !== null)
            return n.dehydrated !== null ? (ae(me, me.current & 1),
            t.flags |= 128,
            null) : r & t.child.childLanes ? Sg(e, t, r) : (ae(me, me.current & 1),
            e = or(e, t, r),
            e !== null ? e.sibling : null);
        ae(me, me.current & 1);
        break;
    case 19:
        if (n = (r & t.childLanes) !== 0,
        e.flags & 128) {
            if (n)
                return Cg(e, t, r);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        ae(me, me.current),
        n)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        jg(e, t, r)
    }
    return or(e, t, r)
}
var Og, tu, _g, Pg;
Og = function(e, t) {
    for (var r = t.child; r !== null; ) {
        if (r.tag === 5 || r.tag === 6)
            e.appendChild(r.stateNode);
        else if (r.tag !== 4 && r.child !== null) {
            r.child.return = r,
            r = r.child;
            continue
        }
        if (r === t)
            break;
        for (; r.sibling === null; ) {
            if (r.return === null || r.return === t)
                return;
            r = r.return
        }
        r.sibling.return = r.return,
        r = r.sibling
    }
}
;
tu = function() {}
;
_g = function(e, t, r, n) {
    var o = e.memoizedProps;
    if (o !== n) {
        e = t.stateNode,
        Gr(Vt.current);
        var a = null;
        switch (r) {
        case "input":
            o = kc(e, o),
            n = kc(e, n),
            a = [];
            break;
        case "select":
            o = ge({}, o, {
                value: void 0
            }),
            n = ge({}, n, {
                value: void 0
            }),
            a = [];
            break;
        case "textarea":
            o = Cc(e, o),
            n = Cc(e, n),
            a = [];
            break;
        default:
            typeof o.onClick != "function" && typeof n.onClick == "function" && (e.onclick = Aa)
        }
        _c(r, n);
        var i;
        r = null;
        for (u in o)
            if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var l = o[u];
                    for (i in l)
                        l.hasOwnProperty(i) && (r || (r = {}),
                        r[i] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ho.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null));
        for (u in n) {
            var c = n[u];
            if (l = o != null ? o[u] : void 0,
            n.hasOwnProperty(u) && c !== l && (c != null || l != null))
                if (u === "style")
                    if (l) {
                        for (i in l)
                            !l.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (r || (r = {}),
                            r[i] = "");
                        for (i in c)
                            c.hasOwnProperty(i) && l[i] !== c[i] && (r || (r = {}),
                            r[i] = c[i])
                    } else
                        r || (a || (a = []),
                        a.push(u, r)),
                        r = c;
                else
                    u === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0,
                    l = l ? l.__html : void 0,
                    c != null && l !== c && (a = a || []).push(u, c)) : u === "children" ? typeof c != "string" && typeof c != "number" || (a = a || []).push(u, "" + c) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ho.hasOwnProperty(u) ? (c != null && u === "onScroll" && ie("scroll", e),
                    a || l === c || (a = [])) : (a = a || []).push(u, c))
        }
        r && (a = a || []).push("style", r);
        var u = a;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
Pg = function(e, t, r, n) {
    r !== n && (t.flags |= 4)
}
;
function bo(e, t) {
    if (!he)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var r = null; t !== null; )
                t.alternate !== null && (r = t),
                t = t.sibling;
            r === null ? e.tail = null : r.sibling = null;
            break;
        case "collapsed":
            r = e.tail;
            for (var n = null; r !== null; )
                r.alternate !== null && (n = r),
                r = r.sibling;
            n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null
        }
}
function Fe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , r = 0
      , n = 0;
    if (t)
        for (var o = e.child; o !== null; )
            r |= o.lanes | o.childLanes,
            n |= o.subtreeFlags & 14680064,
            n |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            r |= o.lanes | o.childLanes,
            n |= o.subtreeFlags,
            n |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= n,
    e.childLanes = r,
    t
}
function Ib(e, t, r) {
    var n = t.pendingProps;
    switch (ad(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Fe(t),
        null;
    case 1:
        return ot(t.type) && Ra(),
        Fe(t),
        null;
    case 3:
        return n = t.stateNode,
        Hn(),
        ce(nt),
        ce(Ve),
        pd(),
        n.pendingContext && (n.context = n.pendingContext,
        n.pendingContext = null),
        (e === null || e.child === null) && (Us(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        At !== null && (cu(At),
        At = null))),
        tu(e, t),
        Fe(t),
        null;
    case 5:
        md(t);
        var o = Gr(ts.current);
        if (r = t.type,
        e !== null && t.stateNode != null)
            _g(e, t, r, n, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!n) {
                if (t.stateNode === null)
                    throw Error(R(166));
                return Fe(t),
                null
            }
            if (e = Gr(Vt.current),
            Us(t)) {
                n = t.stateNode,
                r = t.type;
                var a = t.memoizedProps;
                switch (n[Ut] = t,
                n[Jo] = a,
                e = (t.mode & 1) !== 0,
                r) {
                case "dialog":
                    ie("cancel", n),
                    ie("close", n);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ie("load", n);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < _o.length; o++)
                        ie(_o[o], n);
                    break;
                case "source":
                    ie("error", n);
                    break;
                case "img":
                case "image":
                case "link":
                    ie("error", n),
                    ie("load", n);
                    break;
                case "details":
                    ie("toggle", n);
                    break;
                case "input":
                    mh(n, a),
                    ie("invalid", n);
                    break;
                case "select":
                    n._wrapperState = {
                        wasMultiple: !!a.multiple
                    },
                    ie("invalid", n);
                    break;
                case "textarea":
                    gh(n, a),
                    ie("invalid", n)
                }
                _c(r, a),
                o = null;
                for (var i in a)
                    if (a.hasOwnProperty(i)) {
                        var l = a[i];
                        i === "children" ? typeof l == "string" ? n.textContent !== l && (a.suppressHydrationWarning !== !0 && Hs(n.textContent, l, e),
                        o = ["children", l]) : typeof l == "number" && n.textContent !== "" + l && (a.suppressHydrationWarning !== !0 && Hs(n.textContent, l, e),
                        o = ["children", "" + l]) : Ho.hasOwnProperty(i) && l != null && i === "onScroll" && ie("scroll", n)
                    }
                switch (r) {
                case "input":
                    Ls(n),
                    ph(n, a, !0);
                    break;
                case "textarea":
                    Ls(n),
                    xh(n);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof a.onClick == "function" && (n.onclick = Aa)
                }
                n = o,
                t.updateQueue = n,
                n !== null && (t.flags |= 4)
            } else {
                i = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = np(r)),
                e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = i.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = i.createElement(r, {
                    is: n.is
                }) : (e = i.createElement(r),
                r === "select" && (i = e,
                n.multiple ? i.multiple = !0 : n.size && (i.size = n.size))) : e = i.createElementNS(e, r),
                e[Ut] = t,
                e[Jo] = n,
                Og(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (i = Pc(r, n),
                    r) {
                    case "dialog":
                        ie("cancel", e),
                        ie("close", e),
                        o = n;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ie("load", e),
                        o = n;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < _o.length; o++)
                            ie(_o[o], e);
                        o = n;
                        break;
                    case "source":
                        ie("error", e),
                        o = n;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ie("error", e),
                        ie("load", e),
                        o = n;
                        break;
                    case "details":
                        ie("toggle", e),
                        o = n;
                        break;
                    case "input":
                        mh(e, n),
                        o = kc(e, n),
                        ie("invalid", e);
                        break;
                    case "option":
                        o = n;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!n.multiple
                        },
                        o = ge({}, n, {
                            value: void 0
                        }),
                        ie("invalid", e);
                        break;
                    case "textarea":
                        gh(e, n),
                        o = Cc(e, n),
                        ie("invalid", e);
                        break;
                    default:
                        o = n
                    }
                    _c(r, o),
                    l = o;
                    for (a in l)
                        if (l.hasOwnProperty(a)) {
                            var c = l[a];
                            a === "style" ? ap(e, c) : a === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0,
                            c != null && op(e, c)) : a === "children" ? typeof c == "string" ? (r !== "textarea" || c !== "") && Uo(e, c) : typeof c == "number" && Uo(e, "" + c) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Ho.hasOwnProperty(a) ? c != null && a === "onScroll" && ie("scroll", e) : c != null && Gu(e, a, c, i))
                        }
                    switch (r) {
                    case "input":
                        Ls(e),
                        ph(e, n, !1);
                        break;
                    case "textarea":
                        Ls(e),
                        xh(e);
                        break;
                    case "option":
                        n.value != null && e.setAttribute("value", "" + Er(n.value));
                        break;
                    case "select":
                        e.multiple = !!n.multiple,
                        a = n.value,
                        a != null ? _n(e, !!n.multiple, a, !1) : n.defaultValue != null && _n(e, !!n.multiple, n.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = Aa)
                    }
                    switch (r) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        n = !!n.autoFocus;
                        break e;
                    case "img":
                        n = !0;
                        break e;
                    default:
                        n = !1
                    }
                }
                n && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Fe(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Pg(e, t, e.memoizedProps, n);
        else {
            if (typeof n != "string" && t.stateNode === null)
                throw Error(R(166));
            if (r = Gr(ts.current),
            Gr(Vt.current),
            Us(t)) {
                if (n = t.stateNode,
                r = t.memoizedProps,
                n[Ut] = t,
                (a = n.nodeValue !== r) && (e = ht,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Hs(n.nodeValue, r, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Hs(n.nodeValue, r, (e.mode & 1) !== 0)
                    }
                a && (t.flags |= 4)
            } else
                n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n),
                n[Ut] = t,
                t.stateNode = n
        }
        return Fe(t),
        null;
    case 13:
        if (ce(me),
        n = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (he && dt !== null && t.mode & 1 && !(t.flags & 128))
                Yp(),
                Bn(),
                t.flags |= 98560,
                a = !1;
            else if (a = Us(t),
            n !== null && n.dehydrated !== null) {
                if (e === null) {
                    if (!a)
                        throw Error(R(318));
                    if (a = t.memoizedState,
                    a = a !== null ? a.dehydrated : null,
                    !a)
                        throw Error(R(317));
                    a[Ut] = t
                } else
                    Bn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Fe(t),
                a = !1
            } else
                At !== null && (cu(At),
                At = null),
                a = !0;
            if (!a)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = r,
        t) : (n = n !== null,
        n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || me.current & 1 ? Pe === 0 && (Pe = 3) : Od())),
        t.updateQueue !== null && (t.flags |= 4),
        Fe(t),
        null);
    case 4:
        return Hn(),
        tu(e, t),
        e === null && Xo(t.stateNode.containerInfo),
        Fe(t),
        null;
    case 10:
        return ud(t.type._context),
        Fe(t),
        null;
    case 17:
        return ot(t.type) && Ra(),
        Fe(t),
        null;
    case 19:
        if (ce(me),
        a = t.memoizedState,
        a === null)
            return Fe(t),
            null;
        if (n = (t.flags & 128) !== 0,
        i = a.rendering,
        i === null)
            if (n)
                bo(a, !1);
            else {
                if (Pe !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (i = Ba(e),
                        i !== null) {
                            for (t.flags |= 128,
                            bo(a, !1),
                            n = i.updateQueue,
                            n !== null && (t.updateQueue = n,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            n = r,
                            r = t.child; r !== null; )
                                a = r,
                                e = n,
                                a.flags &= 14680066,
                                i = a.alternate,
                                i === null ? (a.childLanes = 0,
                                a.lanes = e,
                                a.child = null,
                                a.subtreeFlags = 0,
                                a.memoizedProps = null,
                                a.memoizedState = null,
                                a.updateQueue = null,
                                a.dependencies = null,
                                a.stateNode = null) : (a.childLanes = i.childLanes,
                                a.lanes = i.lanes,
                                a.child = i.child,
                                a.subtreeFlags = 0,
                                a.deletions = null,
                                a.memoizedProps = i.memoizedProps,
                                a.memoizedState = i.memoizedState,
                                a.updateQueue = i.updateQueue,
                                a.type = i.type,
                                e = i.dependencies,
                                a.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                r = r.sibling;
                            return ae(me, me.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                a.tail !== null && we() > Gn && (t.flags |= 128,
                n = !0,
                bo(a, !1),
                t.lanes = 4194304)
            }
        else {
            if (!n)
                if (e = Ba(i),
                e !== null) {
                    if (t.flags |= 128,
                    n = !0,
                    r = e.updateQueue,
                    r !== null && (t.updateQueue = r,
                    t.flags |= 4),
                    bo(a, !0),
                    a.tail === null && a.tailMode === "hidden" && !i.alternate && !he)
                        return Fe(t),
                        null
                } else
                    2 * we() - a.renderingStartTime > Gn && r !== 1073741824 && (t.flags |= 128,
                    n = !0,
                    bo(a, !1),
                    t.lanes = 4194304);
            a.isBackwards ? (i.sibling = t.child,
            t.child = i) : (r = a.last,
            r !== null ? r.sibling = i : t.child = i,
            a.last = i)
        }
        return a.tail !== null ? (t = a.tail,
        a.rendering = t,
        a.tail = t.sibling,
        a.renderingStartTime = we(),
        t.sibling = null,
        r = me.current,
        ae(me, n ? r & 1 | 2 : r & 1),
        t) : (Fe(t),
        null);
    case 22:
    case 23:
        return Cd(),
        n = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== n && (t.flags |= 8192),
        n && t.mode & 1 ? ct & 1073741824 && (Fe(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Fe(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(R(156, t.tag))
}
function Eb(e, t) {
    switch (ad(t),
    t.tag) {
    case 1:
        return ot(t.type) && Ra(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Hn(),
        ce(nt),
        ce(Ve),
        pd(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return md(t),
        null;
    case 13:
        if (ce(me),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(R(340));
            Bn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ce(me),
        null;
    case 4:
        return Hn(),
        null;
    case 10:
        return ud(t.type._context),
        null;
    case 22:
    case 23:
        return Cd(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Ys = !1
  , Ue = !1
  , Tb = typeof WeakSet == "function" ? WeakSet : Set
  , W = null;
function Sn(e, t) {
    var r = e.ref;
    if (r !== null)
        if (typeof r == "function")
            try {
                r(null)
            } catch (n) {
                ve(e, t, n)
            }
        else
            r.current = null
}
function ru(e, t, r) {
    try {
        r()
    } catch (n) {
        ve(e, t, n)
    }
}
var af = !1;
function Ab(e, t) {
    if (Dc = Ia,
    e = Rp(),
    od(e)) {
        if ("selectionStart"in e)
            var r = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                r = (r = e.ownerDocument) && r.defaultView || window;
                var n = r.getSelection && r.getSelection();
                if (n && n.rangeCount !== 0) {
                    r = n.anchorNode;
                    var o = n.anchorOffset
                      , a = n.focusNode;
                    n = n.focusOffset;
                    try {
                        r.nodeType,
                        a.nodeType
                    } catch {
                        r = null;
                        break e
                    }
                    var i = 0
                      , l = -1
                      , c = -1
                      , u = 0
                      , h = 0
                      , d = e
                      , m = null;
                    t: for (; ; ) {
                        for (var v; d !== r || o !== 0 && d.nodeType !== 3 || (l = i + o),
                        d !== a || n !== 0 && d.nodeType !== 3 || (c = i + n),
                        d.nodeType === 3 && (i += d.nodeValue.length),
                        (v = d.firstChild) !== null; )
                            m = d,
                            d = v;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (m === r && ++u === o && (l = i),
                            m === a && ++h === n && (c = i),
                            (v = d.nextSibling) !== null)
                                break;
                            d = m,
                            m = d.parentNode
                        }
                        d = v
                    }
                    r = l === -1 || c === -1 ? null : {
                        start: l,
                        end: c
                    }
                } else
                    r = null
            }
        r = r || {
            start: 0,
            end: 0
        }
    } else
        r = null;
    for (Wc = {
        focusedElem: e,
        selectionRange: r
    },
    Ia = !1,
    W = t; W !== null; )
        if (t = W,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            W = e;
        else
            for (; W !== null; ) {
                t = W;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var x = y.memoizedProps
                                  , w = y.memoizedState
                                  , p = t.stateNode
                                  , f = p.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Et(t.type, x), w);
                                p.__reactInternalSnapshotBeforeUpdate = f
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(R(163))
                        }
                } catch (b) {
                    ve(t, t.return, b)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    W = e;
                    break
                }
                W = t.return
            }
    return y = af,
    af = !1,
    y
}
function $o(e, t, r) {
    var n = t.updateQueue;
    if (n = n !== null ? n.lastEffect : null,
    n !== null) {
        var o = n = n.next;
        do {
            if ((o.tag & e) === e) {
                var a = o.destroy;
                o.destroy = void 0,
                a !== void 0 && ru(t, r, a)
            }
            o = o.next
        } while (o !== n)
    }
}
function Ci(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var r = t = t.next;
        do {
            if ((r.tag & e) === e) {
                var n = r.create;
                r.destroy = n()
            }
            r = r.next
        } while (r !== t)
    }
}
function nu(e) {
    var t = e.ref;
    if (t !== null) {
        var r = e.stateNode;
        switch (e.tag) {
        case 5:
            e = r;
            break;
        default:
            e = r
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Ig(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Ig(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Ut],
    delete t[Jo],
    delete t[Hc],
    delete t[pb],
    delete t[gb])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Eg(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function lf(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Eg(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function ou(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6)
        e = e.stateNode,
        t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode,
        t.insertBefore(e, r)) : (t = r,
        t.appendChild(e)),
        r = r._reactRootContainer,
        r != null || t.onclick !== null || (t.onclick = Aa));
    else if (n !== 4 && (e = e.child,
    e !== null))
        for (ou(e, t, r),
        e = e.sibling; e !== null; )
            ou(e, t, r),
            e = e.sibling
}
function su(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6)
        e = e.stateNode,
        t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (n !== 4 && (e = e.child,
    e !== null))
        for (su(e, t, r),
        e = e.sibling; e !== null; )
            su(e, t, r),
            e = e.sibling
}
var Le = null
  , Tt = !1;
function dr(e, t, r) {
    for (r = r.child; r !== null; )
        Tg(e, t, r),
        r = r.sibling
}
function Tg(e, t, r) {
    if (Gt && typeof Gt.onCommitFiberUnmount == "function")
        try {
            Gt.onCommitFiberUnmount(yi, r)
        } catch {}
    switch (r.tag) {
    case 5:
        Ue || Sn(r, t);
    case 6:
        var n = Le
          , o = Tt;
        Le = null,
        dr(e, t, r),
        Le = n,
        Tt = o,
        Le !== null && (Tt ? (e = Le,
        r = r.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : Le.removeChild(r.stateNode));
        break;
    case 18:
        Le !== null && (Tt ? (e = Le,
        r = r.stateNode,
        e.nodeType === 8 ? Wl(e.parentNode, r) : e.nodeType === 1 && Wl(e, r),
        Qo(e)) : Wl(Le, r.stateNode));
        break;
    case 4:
        n = Le,
        o = Tt,
        Le = r.stateNode.containerInfo,
        Tt = !0,
        dr(e, t, r),
        Le = n,
        Tt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ue && (n = r.updateQueue,
        n !== null && (n = n.lastEffect,
        n !== null))) {
            o = n = n.next;
            do {
                var a = o
                  , i = a.destroy;
                a = a.tag,
                i !== void 0 && (a & 2 || a & 4) && ru(r, t, i),
                o = o.next
            } while (o !== n)
        }
        dr(e, t, r);
        break;
    case 1:
        if (!Ue && (Sn(r, t),
        n = r.stateNode,
        typeof n.componentWillUnmount == "function"))
            try {
                n.props = r.memoizedProps,
                n.state = r.memoizedState,
                n.componentWillUnmount()
            } catch (l) {
                ve(r, t, l)
            }
        dr(e, t, r);
        break;
    case 21:
        dr(e, t, r);
        break;
    case 22:
        r.mode & 1 ? (Ue = (n = Ue) || r.memoizedState !== null,
        dr(e, t, r),
        Ue = n) : dr(e, t, r);
        break;
    default:
        dr(e, t, r)
    }
}
function cf(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var r = e.stateNode;
        r === null && (r = e.stateNode = new Tb),
        t.forEach(function(n) {
            var o = Fb.bind(null, e, n);
            r.has(n) || (r.add(n),
            n.then(o, o))
        })
    }
}
function It(e, t) {
    var r = t.deletions;
    if (r !== null)
        for (var n = 0; n < r.length; n++) {
            var o = r[n];
            try {
                var a = e
                  , i = t
                  , l = i;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        Le = l.stateNode,
                        Tt = !1;
                        break e;
                    case 3:
                        Le = l.stateNode.containerInfo,
                        Tt = !0;
                        break e;
                    case 4:
                        Le = l.stateNode.containerInfo,
                        Tt = !0;
                        break e
                    }
                    l = l.return
                }
                if (Le === null)
                    throw Error(R(160));
                Tg(a, i, o),
                Le = null,
                Tt = !1;
                var c = o.alternate;
                c !== null && (c.return = null),
                o.return = null
            } catch (u) {
                ve(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Ag(t, e),
            t = t.sibling
}
function Ag(e, t) {
    var r = e.alternate
      , n = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (It(t, e),
        Dt(e),
        n & 4) {
            try {
                $o(3, e, e.return),
                Ci(3, e)
            } catch (x) {
                ve(e, e.return, x)
            }
            try {
                $o(5, e, e.return)
            } catch (x) {
                ve(e, e.return, x)
            }
        }
        break;
    case 1:
        It(t, e),
        Dt(e),
        n & 512 && r !== null && Sn(r, r.return);
        break;
    case 5:
        if (It(t, e),
        Dt(e),
        n & 512 && r !== null && Sn(r, r.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Uo(o, "")
            } catch (x) {
                ve(e, e.return, x)
            }
        }
        if (n & 4 && (o = e.stateNode,
        o != null)) {
            var a = e.memoizedProps
              , i = r !== null ? r.memoizedProps : a
              , l = e.type
              , c = e.updateQueue;
            if (e.updateQueue = null,
            c !== null)
                try {
                    l === "input" && a.type === "radio" && a.name != null && tp(o, a),
                    Pc(l, i);
                    var u = Pc(l, a);
                    for (i = 0; i < c.length; i += 2) {
                        var h = c[i]
                          , d = c[i + 1];
                        h === "style" ? ap(o, d) : h === "dangerouslySetInnerHTML" ? op(o, d) : h === "children" ? Uo(o, d) : Gu(o, h, d, u)
                    }
                    switch (l) {
                    case "input":
                        Nc(o, a);
                        break;
                    case "textarea":
                        rp(o, a);
                        break;
                    case "select":
                        var m = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!a.multiple;
                        var v = a.value;
                        v != null ? _n(o, !!a.multiple, v, !1) : m !== !!a.multiple && (a.defaultValue != null ? _n(o, !!a.multiple, a.defaultValue, !0) : _n(o, !!a.multiple, a.multiple ? [] : "", !1))
                    }
                    o[Jo] = a
                } catch (x) {
                    ve(e, e.return, x)
                }
        }
        break;
    case 6:
        if (It(t, e),
        Dt(e),
        n & 4) {
            if (e.stateNode === null)
                throw Error(R(162));
            o = e.stateNode,
            a = e.memoizedProps;
            try {
                o.nodeValue = a
            } catch (x) {
                ve(e, e.return, x)
            }
        }
        break;
    case 3:
        if (It(t, e),
        Dt(e),
        n & 4 && r !== null && r.memoizedState.isDehydrated)
            try {
                Qo(t.containerInfo)
            } catch (x) {
                ve(e, e.return, x)
            }
        break;
    case 4:
        It(t, e),
        Dt(e);
        break;
    case 13:
        It(t, e),
        Dt(e),
        o = e.child,
        o.flags & 8192 && (a = o.memoizedState !== null,
        o.stateNode.isHidden = a,
        !a || o.alternate !== null && o.alternate.memoizedState !== null || (Nd = we())),
        n & 4 && cf(e);
        break;
    case 22:
        if (h = r !== null && r.memoizedState !== null,
        e.mode & 1 ? (Ue = (u = Ue) || h,
        It(t, e),
        Ue = u) : It(t, e),
        Dt(e),
        n & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !h && e.mode & 1)
                for (W = e,
                h = e.child; h !== null; ) {
                    for (d = W = h; W !== null; ) {
                        switch (m = W,
                        v = m.child,
                        m.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            $o(4, m, m.return);
                            break;
                        case 1:
                            Sn(m, m.return);
                            var y = m.stateNode;
                            if (typeof y.componentWillUnmount == "function") {
                                n = m,
                                r = m.return;
                                try {
                                    t = n,
                                    y.props = t.memoizedProps,
                                    y.state = t.memoizedState,
                                    y.componentWillUnmount()
                                } catch (x) {
                                    ve(n, r, x)
                                }
                            }
                            break;
                        case 5:
                            Sn(m, m.return);
                            break;
                        case 22:
                            if (m.memoizedState !== null) {
                                df(d);
                                continue
                            }
                        }
                        v !== null ? (v.return = m,
                        W = v) : df(d)
                    }
                    h = h.sibling
                }
            e: for (h = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (h === null) {
                        h = d;
                        try {
                            o = d.stateNode,
                            u ? (a = o.style,
                            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (l = d.stateNode,
                            c = d.memoizedProps.style,
                            i = c != null && c.hasOwnProperty("display") ? c.display : null,
                            l.style.display = sp("display", i))
                        } catch (x) {
                            ve(e, e.return, x)
                        }
                    }
                } else if (d.tag === 6) {
                    if (h === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (x) {
                            ve(e, e.return, x)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    h === d && (h = null),
                    d = d.return
                }
                h === d && (h = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        It(t, e),
        Dt(e),
        n & 4 && cf(e);
        break;
    case 21:
        break;
    default:
        It(t, e),
        Dt(e)
    }
}
function Dt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var r = e.return; r !== null; ) {
                    if (Eg(r)) {
                        var n = r;
                        break e
                    }
                    r = r.return
                }
                throw Error(R(160))
            }
            switch (n.tag) {
            case 5:
                var o = n.stateNode;
                n.flags & 32 && (Uo(o, ""),
                n.flags &= -33);
                var a = lf(e);
                su(e, a, o);
                break;
            case 3:
            case 4:
                var i = n.stateNode.containerInfo
                  , l = lf(e);
                ou(e, l, i);
                break;
            default:
                throw Error(R(161))
            }
        } catch (c) {
            ve(e, e.return, c)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Rb(e, t, r) {
    W = e,
    Rg(e)
}
function Rg(e, t, r) {
    for (var n = (e.mode & 1) !== 0; W !== null; ) {
        var o = W
          , a = o.child;
        if (o.tag === 22 && n) {
            var i = o.memoizedState !== null || Ys;
            if (!i) {
                var l = o.alternate
                  , c = l !== null && l.memoizedState !== null || Ue;
                l = Ys;
                var u = Ue;
                if (Ys = i,
                (Ue = c) && !u)
                    for (W = o; W !== null; )
                        i = W,
                        c = i.child,
                        i.tag === 22 && i.memoizedState !== null ? hf(o) : c !== null ? (c.return = i,
                        W = c) : hf(o);
                for (; a !== null; )
                    W = a,
                    Rg(a),
                    a = a.sibling;
                W = o,
                Ys = l,
                Ue = u
            }
            uf(e)
        } else
            o.subtreeFlags & 8772 && a !== null ? (a.return = o,
            W = a) : uf(e)
    }
}
function uf(e) {
    for (; W !== null; ) {
        var t = W;
        if (t.flags & 8772) {
            var r = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ue || Ci(5, t);
                        break;
                    case 1:
                        var n = t.stateNode;
                        if (t.flags & 4 && !Ue)
                            if (r === null)
                                n.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? r.memoizedProps : Et(t.type, r.memoizedProps);
                                n.componentDidUpdate(o, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                            }
                        var a = t.updateQueue;
                        a !== null && Yh(t, a, n);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (r = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    r = t.child.stateNode;
                                    break;
                                case 1:
                                    r = t.child.stateNode
                                }
                            Yh(t, i, r)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (r === null && t.flags & 4) {
                            r = l;
                            var c = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                c.autoFocus && r.focus();
                                break;
                            case "img":
                                c.src && (r.src = c.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var h = u.memoizedState;
                                if (h !== null) {
                                    var d = h.dehydrated;
                                    d !== null && Qo(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(R(163))
                    }
                Ue || t.flags & 512 && nu(t)
            } catch (m) {
                ve(t, t.return, m)
            }
        }
        if (t === e) {
            W = null;
            break
        }
        if (r = t.sibling,
        r !== null) {
            r.return = t.return,
            W = r;
            break
        }
        W = t.return
    }
}
function df(e) {
    for (; W !== null; ) {
        var t = W;
        if (t === e) {
            W = null;
            break
        }
        var r = t.sibling;
        if (r !== null) {
            r.return = t.return,
            W = r;
            break
        }
        W = t.return
    }
}
function hf(e) {
    for (; W !== null; ) {
        var t = W;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var r = t.return;
                try {
                    Ci(4, t)
                } catch (c) {
                    ve(t, r, c)
                }
                break;
            case 1:
                var n = t.stateNode;
                if (typeof n.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        n.componentDidMount()
                    } catch (c) {
                        ve(t, o, c)
                    }
                }
                var a = t.return;
                try {
                    nu(t)
                } catch (c) {
                    ve(t, a, c)
                }
                break;
            case 5:
                var i = t.return;
                try {
                    nu(t)
                } catch (c) {
                    ve(t, i, c)
                }
            }
        } catch (c) {
            ve(t, t.return, c)
        }
        if (t === e) {
            W = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            W = l;
            break
        }
        W = t.return
    }
}
var Lb = Math.ceil
  , Ua = ir.ReactCurrentDispatcher
  , jd = ir.ReactCurrentOwner
  , kt = ir.ReactCurrentBatchConfig
  , X = 0
  , Te = null
  , Ce = null
  , ze = 0
  , ct = 0
  , Cn = Rr(0)
  , Pe = 0
  , ss = null
  , en = 0
  , Oi = 0
  , kd = 0
  , Mo = null
  , et = null
  , Nd = 0
  , Gn = 1 / 0
  , Kt = null
  , Ga = !1
  , au = null
  , Or = null
  , Qs = !1
  , br = null
  , Va = 0
  , zo = 0
  , iu = null
  , ua = -1
  , da = 0;
function Ke() {
    return X & 6 ? we() : ua !== -1 ? ua : ua = we()
}
function _r(e) {
    return e.mode & 1 ? X & 2 && ze !== 0 ? ze & -ze : yb.transition !== null ? (da === 0 && (da = yp()),
    da) : (e = ne,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Sp(e.type)),
    e) : 1
}
function Lt(e, t, r, n) {
    if (50 < zo)
        throw zo = 0,
        iu = null,
        Error(R(185));
    xs(e, r, n),
    (!(X & 2) || e !== Te) && (e === Te && (!(X & 2) && (Oi |= r),
    Pe === 4 && xr(e, ze)),
    st(e, n),
    r === 1 && X === 0 && !(t.mode & 1) && (Gn = we() + 500,
    ki && Lr()))
}
function st(e, t) {
    var r = e.callbackNode;
    yv(e, t);
    var n = Pa(e, e === Te ? ze : 0);
    if (n === 0)
        r !== null && bh(r),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = n & -n,
    e.callbackPriority !== t) {
        if (r != null && bh(r),
        t === 1)
            e.tag === 0 ? xb(ff.bind(null, e)) : Up(ff.bind(null, e)),
            fb(function() {
                !(X & 6) && Lr()
            }),
            r = null;
        else {
            switch (vp(n)) {
            case 1:
                r = qu;
                break;
            case 4:
                r = gp;
                break;
            case 16:
                r = _a;
                break;
            case 536870912:
                r = xp;
                break;
            default:
                r = _a
            }
            r = Fg(r, Lg.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = r
    }
}
function Lg(e, t) {
    if (ua = -1,
    da = 0,
    X & 6)
        throw Error(R(327));
    var r = e.callbackNode;
    if (An() && e.callbackNode !== r)
        return null;
    var n = Pa(e, e === Te ? ze : 0);
    if (n === 0)
        return null;
    if (n & 30 || n & e.expiredLanes || t)
        t = Ya(e, n);
    else {
        t = n;
        var o = X;
        X |= 2;
        var a = Mg();
        (Te !== e || ze !== t) && (Kt = null,
        Gn = we() + 500,
        Yr(e, t));
        do
            try {
                zb();
                break
            } catch (l) {
                $g(e, l)
            }
        while (!0);
        cd(),
        Ua.current = a,
        X = o,
        Ce !== null ? t = 0 : (Te = null,
        ze = 0,
        t = Pe)
    }
    if (t !== 0) {
        if (t === 2 && (o = Rc(e),
        o !== 0 && (n = o,
        t = lu(e, o))),
        t === 1)
            throw r = ss,
            Yr(e, 0),
            xr(e, n),
            st(e, we()),
            r;
        if (t === 6)
            xr(e, n);
        else {
            if (o = e.current.alternate,
            !(n & 30) && !$b(o) && (t = Ya(e, n),
            t === 2 && (a = Rc(e),
            a !== 0 && (n = a,
            t = lu(e, a))),
            t === 1))
                throw r = ss,
                Yr(e, 0),
                xr(e, n),
                st(e, we()),
                r;
            switch (e.finishedWork = o,
            e.finishedLanes = n,
            t) {
            case 0:
            case 1:
                throw Error(R(345));
            case 2:
                Fr(e, et, Kt);
                break;
            case 3:
                if (xr(e, n),
                (n & 130023424) === n && (t = Nd + 500 - we(),
                10 < t)) {
                    if (Pa(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & n) !== n) {
                        Ke(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = Fc(Fr.bind(null, e, et, Kt), t);
                    break
                }
                Fr(e, et, Kt);
                break;
            case 4:
                if (xr(e, n),
                (n & 4194240) === n)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < n; ) {
                    var i = 31 - Rt(n);
                    a = 1 << i,
                    i = t[i],
                    i > o && (o = i),
                    n &= ~a
                }
                if (n = o,
                n = we() - n,
                n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Lb(n / 1960)) - n,
                10 < n) {
                    e.timeoutHandle = Fc(Fr.bind(null, e, et, Kt), n);
                    break
                }
                Fr(e, et, Kt);
                break;
            case 5:
                Fr(e, et, Kt);
                break;
            default:
                throw Error(R(329))
            }
        }
    }
    return st(e, we()),
    e.callbackNode === r ? Lg.bind(null, e) : null
}
function lu(e, t) {
    var r = Mo;
    return e.current.memoizedState.isDehydrated && (Yr(e, t).flags |= 256),
    e = Ya(e, t),
    e !== 2 && (t = et,
    et = r,
    t !== null && cu(t)),
    e
}
function cu(e) {
    et === null ? et = e : et.push.apply(et, e)
}
function $b(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var r = t.updateQueue;
            if (r !== null && (r = r.stores,
            r !== null))
                for (var n = 0; n < r.length; n++) {
                    var o = r[n]
                      , a = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Mt(a(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (r = t.child,
        t.subtreeFlags & 16384 && r !== null)
            r.return = t,
            t = r;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function xr(e, t) {
    for (t &= ~kd,
    t &= ~Oi,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var r = 31 - Rt(t)
          , n = 1 << r;
        e[r] = -1,
        t &= ~n
    }
}
function ff(e) {
    if (X & 6)
        throw Error(R(327));
    An();
    var t = Pa(e, 0);
    if (!(t & 1))
        return st(e, we()),
        null;
    var r = Ya(e, t);
    if (e.tag !== 0 && r === 2) {
        var n = Rc(e);
        n !== 0 && (t = n,
        r = lu(e, n))
    }
    if (r === 1)
        throw r = ss,
        Yr(e, 0),
        xr(e, t),
        st(e, we()),
        r;
    if (r === 6)
        throw Error(R(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Fr(e, et, Kt),
    st(e, we()),
    null
}
function Sd(e, t) {
    var r = X;
    X |= 1;
    try {
        return e(t)
    } finally {
        X = r,
        X === 0 && (Gn = we() + 500,
        ki && Lr())
    }
}
function tn(e) {
    br !== null && br.tag === 0 && !(X & 6) && An();
    var t = X;
    X |= 1;
    var r = kt.transition
      , n = ne;
    try {
        if (kt.transition = null,
        ne = 1,
        e)
            return e()
    } finally {
        ne = n,
        kt.transition = r,
        X = t,
        !(X & 6) && Lr()
    }
}
function Cd() {
    ct = Cn.current,
    ce(Cn)
}
function Yr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var r = e.timeoutHandle;
    if (r !== -1 && (e.timeoutHandle = -1,
    hb(r)),
    Ce !== null)
        for (r = Ce.return; r !== null; ) {
            var n = r;
            switch (ad(n),
            n.tag) {
            case 1:
                n = n.type.childContextTypes,
                n != null && Ra();
                break;
            case 3:
                Hn(),
                ce(nt),
                ce(Ve),
                pd();
                break;
            case 5:
                md(n);
                break;
            case 4:
                Hn();
                break;
            case 13:
                ce(me);
                break;
            case 19:
                ce(me);
                break;
            case 10:
                ud(n.type._context);
                break;
            case 22:
            case 23:
                Cd()
            }
            r = r.return
        }
    if (Te = e,
    Ce = e = Pr(e.current, null),
    ze = ct = t,
    Pe = 0,
    ss = null,
    kd = Oi = en = 0,
    et = Mo = null,
    Ur !== null) {
        for (t = 0; t < Ur.length; t++)
            if (r = Ur[t],
            n = r.interleaved,
            n !== null) {
                r.interleaved = null;
                var o = n.next
                  , a = r.pending;
                if (a !== null) {
                    var i = a.next;
                    a.next = o,
                    n.next = i
                }
                r.pending = n
            }
        Ur = null
    }
    return e
}
function $g(e, t) {
    do {
        var r = Ce;
        try {
            if (cd(),
            ia.current = Ha,
            Fa) {
                for (var n = pe.memoizedState; n !== null; ) {
                    var o = n.queue;
                    o !== null && (o.pending = null),
                    n = n.next
                }
                Fa = !1
            }
            if (Jr = 0,
            Ie = _e = pe = null,
            Lo = !1,
            rs = 0,
            jd.current = null,
            r === null || r.return === null) {
                Pe = 1,
                ss = t,
                Ce = null;
                break
            }
            e: {
                var a = e
                  , i = r.return
                  , l = r
                  , c = t;
                if (t = ze,
                l.flags |= 32768,
                c !== null && typeof c == "object" && typeof c.then == "function") {
                    var u = c
                      , h = l
                      , d = h.tag;
                    if (!(h.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var m = h.alternate;
                        m ? (h.updateQueue = m.updateQueue,
                        h.memoizedState = m.memoizedState,
                        h.lanes = m.lanes) : (h.updateQueue = null,
                        h.memoizedState = null)
                    }
                    var v = Jh(i);
                    if (v !== null) {
                        v.flags &= -257,
                        ef(v, i, l, a, t),
                        v.mode & 1 && Zh(a, u, t),
                        t = v,
                        c = u;
                        var y = t.updateQueue;
                        if (y === null) {
                            var x = new Set;
                            x.add(c),
                            t.updateQueue = x
                        } else
                            y.add(c);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Zh(a, u, t),
                            Od();
                            break e
                        }
                        c = Error(R(426))
                    }
                } else if (he && l.mode & 1) {
                    var w = Jh(i);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        ef(w, i, l, a, t),
                        id(Un(c, l));
                        break e
                    }
                }
                a = c = Un(c, l),
                Pe !== 4 && (Pe = 2),
                Mo === null ? Mo = [a] : Mo.push(a),
                a = i;
                do {
                    switch (a.tag) {
                    case 3:
                        a.flags |= 65536,
                        t &= -t,
                        a.lanes |= t;
                        var p = vg(a, c, t);
                        Vh(a, p);
                        break e;
                    case 1:
                        l = c;
                        var f = a.type
                          , g = a.stateNode;
                        if (!(a.flags & 128) && (typeof f.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Or === null || !Or.has(g)))) {
                            a.flags |= 65536,
                            t &= -t,
                            a.lanes |= t;
                            var b = bg(a, l, t);
                            Vh(a, b);
                            break e
                        }
                    }
                    a = a.return
                } while (a !== null)
            }
            Dg(r)
        } catch (j) {
            t = j,
            Ce === r && r !== null && (Ce = r = r.return);
            continue
        }
        break
    } while (!0)
}
function Mg() {
    var e = Ua.current;
    return Ua.current = Ha,
    e === null ? Ha : e
}
function Od() {
    (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
    Te === null || !(en & 268435455) && !(Oi & 268435455) || xr(Te, ze)
}
function Ya(e, t) {
    var r = X;
    X |= 2;
    var n = Mg();
    (Te !== e || ze !== t) && (Kt = null,
    Yr(e, t));
    do
        try {
            Mb();
            break
        } catch (o) {
            $g(e, o)
        }
    while (!0);
    if (cd(),
    X = r,
    Ua.current = n,
    Ce !== null)
        throw Error(R(261));
    return Te = null,
    ze = 0,
    Pe
}
function Mb() {
    for (; Ce !== null; )
        zg(Ce)
}
function zb() {
    for (; Ce !== null && !cv(); )
        zg(Ce)
}
function zg(e) {
    var t = Bg(e.alternate, e, ct);
    e.memoizedProps = e.pendingProps,
    t === null ? Dg(e) : Ce = t,
    jd.current = null
}
function Dg(e) {
    var t = e;
    do {
        var r = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (r = Eb(r, t),
            r !== null) {
                r.flags &= 32767,
                Ce = r;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Pe = 6,
                Ce = null;
                return
            }
        } else if (r = Ib(r, t, ct),
        r !== null) {
            Ce = r;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Ce = t;
            return
        }
        Ce = t = e
    } while (t !== null);
    Pe === 0 && (Pe = 5)
}
function Fr(e, t, r) {
    var n = ne
      , o = kt.transition;
    try {
        kt.transition = null,
        ne = 1,
        Db(e, t, r, n)
    } finally {
        kt.transition = o,
        ne = n
    }
    return null
}
function Db(e, t, r, n) {
    do
        An();
    while (br !== null);
    if (X & 6)
        throw Error(R(327));
    r = e.finishedWork;
    var o = e.finishedLanes;
    if (r === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    r === e.current)
        throw Error(R(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var a = r.lanes | r.childLanes;
    if (vv(e, a),
    e === Te && (Ce = Te = null,
    ze = 0),
    !(r.subtreeFlags & 2064) && !(r.flags & 2064) || Qs || (Qs = !0,
    Fg(_a, function() {
        return An(),
        null
    })),
    a = (r.flags & 15990) !== 0,
    r.subtreeFlags & 15990 || a) {
        a = kt.transition,
        kt.transition = null;
        var i = ne;
        ne = 1;
        var l = X;
        X |= 4,
        jd.current = null,
        Ab(e, r),
        Ag(r, e),
        sb(Wc),
        Ia = !!Dc,
        Wc = Dc = null,
        e.current = r,
        Rb(r),
        uv(),
        X = l,
        ne = i,
        kt.transition = a
    } else
        e.current = r;
    if (Qs && (Qs = !1,
    br = e,
    Va = o),
    a = e.pendingLanes,
    a === 0 && (Or = null),
    fv(r.stateNode),
    st(e, we()),
    t !== null)
        for (n = e.onRecoverableError,
        r = 0; r < t.length; r++)
            o = t[r],
            n(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (Ga)
        throw Ga = !1,
        e = au,
        au = null,
        e;
    return Va & 1 && e.tag !== 0 && An(),
    a = e.pendingLanes,
    a & 1 ? e === iu ? zo++ : (zo = 0,
    iu = e) : zo = 0,
    Lr(),
    null
}
function An() {
    if (br !== null) {
        var e = vp(Va)
          , t = kt.transition
          , r = ne;
        try {
            if (kt.transition = null,
            ne = 16 > e ? 16 : e,
            br === null)
                var n = !1;
            else {
                if (e = br,
                br = null,
                Va = 0,
                X & 6)
                    throw Error(R(331));
                var o = X;
                for (X |= 4,
                W = e.current; W !== null; ) {
                    var a = W
                      , i = a.child;
                    if (W.flags & 16) {
                        var l = a.deletions;
                        if (l !== null) {
                            for (var c = 0; c < l.length; c++) {
                                var u = l[c];
                                for (W = u; W !== null; ) {
                                    var h = W;
                                    switch (h.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        $o(8, h, a)
                                    }
                                    var d = h.child;
                                    if (d !== null)
                                        d.return = h,
                                        W = d;
                                    else
                                        for (; W !== null; ) {
                                            h = W;
                                            var m = h.sibling
                                              , v = h.return;
                                            if (Ig(h),
                                            h === u) {
                                                W = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = v,
                                                W = m;
                                                break
                                            }
                                            W = v
                                        }
                                }
                            }
                            var y = a.alternate;
                            if (y !== null) {
                                var x = y.child;
                                if (x !== null) {
                                    y.child = null;
                                    do {
                                        var w = x.sibling;
                                        x.sibling = null,
                                        x = w
                                    } while (x !== null)
                                }
                            }
                            W = a
                        }
                    }
                    if (a.subtreeFlags & 2064 && i !== null)
                        i.return = a,
                        W = i;
                    else
                        e: for (; W !== null; ) {
                            if (a = W,
                            a.flags & 2048)
                                switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    $o(9, a, a.return)
                                }
                            var p = a.sibling;
                            if (p !== null) {
                                p.return = a.return,
                                W = p;
                                break e
                            }
                            W = a.return
                        }
                }
                var f = e.current;
                for (W = f; W !== null; ) {
                    i = W;
                    var g = i.child;
                    if (i.subtreeFlags & 2064 && g !== null)
                        g.return = i,
                        W = g;
                    else
                        e: for (i = f; W !== null; ) {
                            if (l = W,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ci(9, l)
                                    }
                                } catch (j) {
                                    ve(l, l.return, j)
                                }
                            if (l === i) {
                                W = null;
                                break e
                            }
                            var b = l.sibling;
                            if (b !== null) {
                                b.return = l.return,
                                W = b;
                                break e
                            }
                            W = l.return
                        }
                }
                if (X = o,
                Lr(),
                Gt && typeof Gt.onPostCommitFiberRoot == "function")
                    try {
                        Gt.onPostCommitFiberRoot(yi, e)
                    } catch {}
                n = !0
            }
            return n
        } finally {
            ne = r,
            kt.transition = t
        }
    }
    return !1
}
function mf(e, t, r) {
    t = Un(r, t),
    t = vg(e, t, 1),
    e = Cr(e, t, 1),
    t = Ke(),
    e !== null && (xs(e, 1, t),
    st(e, t))
}
function ve(e, t, r) {
    if (e.tag === 3)
        mf(e, e, r);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                mf(t, e, r);
                break
            } else if (t.tag === 1) {
                var n = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Or === null || !Or.has(n))) {
                    e = Un(r, e),
                    e = bg(t, e, 1),
                    t = Cr(t, e, 1),
                    e = Ke(),
                    t !== null && (xs(t, 1, e),
                    st(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Wb(e, t, r) {
    var n = e.pingCache;
    n !== null && n.delete(t),
    t = Ke(),
    e.pingedLanes |= e.suspendedLanes & r,
    Te === e && (ze & r) === r && (Pe === 4 || Pe === 3 && (ze & 130023424) === ze && 500 > we() - Nd ? Yr(e, 0) : kd |= r),
    st(e, t)
}
function Wg(e, t) {
    t === 0 && (e.mode & 1 ? (t = zs,
    zs <<= 1,
    !(zs & 130023424) && (zs = 4194304)) : t = 1);
    var r = Ke();
    e = nr(e, t),
    e !== null && (xs(e, t, r),
    st(e, r))
}
function Bb(e) {
    var t = e.memoizedState
      , r = 0;
    t !== null && (r = t.retryLane),
    Wg(e, r)
}
function Fb(e, t) {
    var r = 0;
    switch (e.tag) {
    case 13:
        var n = e.stateNode
          , o = e.memoizedState;
        o !== null && (r = o.retryLane);
        break;
    case 19:
        n = e.stateNode;
        break;
    default:
        throw Error(R(314))
    }
    n !== null && n.delete(t),
    Wg(e, r)
}
var Bg;
Bg = function(e, t, r) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || nt.current)
            tt = !0;
        else {
            if (!(e.lanes & r) && !(t.flags & 128))
                return tt = !1,
                Pb(e, t, r);
            tt = !!(e.flags & 131072)
        }
    else
        tt = !1,
        he && t.flags & 1048576 && Gp(t, Ma, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var n = t.type;
        ca(e, t),
        e = t.pendingProps;
        var o = Wn(t, Ve.current);
        Tn(t, r),
        o = xd(null, t, n, e, o, r);
        var a = yd();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        ot(n) ? (a = !0,
        La(t)) : a = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        hd(t),
        o.updater = Si,
        t.stateNode = o,
        o._reactInternals = t,
        Kc(t, n, e, r),
        t = Zc(null, t, n, !0, a, r)) : (t.tag = 0,
        he && a && sd(t),
        Qe(null, t, o, r),
        t = t.child),
        t;
    case 16:
        n = t.elementType;
        e: {
            switch (ca(e, t),
            e = t.pendingProps,
            o = n._init,
            n = o(n._payload),
            t.type = n,
            o = t.tag = Ub(n),
            e = Et(n, e),
            o) {
            case 0:
                t = Xc(null, t, n, e, r);
                break e;
            case 1:
                t = nf(null, t, n, e, r);
                break e;
            case 11:
                t = tf(null, t, n, e, r);
                break e;
            case 14:
                t = rf(null, t, n, Et(n.type, e), r);
                break e
            }
            throw Error(R(306, n, ""))
        }
        return t;
    case 0:
        return n = t.type,
        o = t.pendingProps,
        o = t.elementType === n ? o : Et(n, o),
        Xc(e, t, n, o, r);
    case 1:
        return n = t.type,
        o = t.pendingProps,
        o = t.elementType === n ? o : Et(n, o),
        nf(e, t, n, o, r);
    case 3:
        e: {
            if (Ng(t),
            e === null)
                throw Error(R(387));
            n = t.pendingProps,
            a = t.memoizedState,
            o = a.element,
            Xp(e, t),
            Wa(t, n, null, r);
            var i = t.memoizedState;
            if (n = i.element,
            a.isDehydrated)
                if (a = {
                    element: n,
                    isDehydrated: !1,
                    cache: i.cache,
                    pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                    transitions: i.transitions
                },
                t.updateQueue.baseState = a,
                t.memoizedState = a,
                t.flags & 256) {
                    o = Un(Error(R(423)), t),
                    t = of(e, t, n, r, o);
                    break e
                } else if (n !== o) {
                    o = Un(Error(R(424)), t),
                    t = of(e, t, n, r, o);
                    break e
                } else
                    for (dt = Sr(t.stateNode.containerInfo.firstChild),
                    ht = t,
                    he = !0,
                    At = null,
                    r = Kp(t, null, n, r),
                    t.child = r; r; )
                        r.flags = r.flags & -3 | 4096,
                        r = r.sibling;
            else {
                if (Bn(),
                n === o) {
                    t = or(e, t, r);
                    break e
                }
                Qe(e, t, n, r)
            }
            t = t.child
        }
        return t;
    case 5:
        return Zp(t),
        e === null && Vc(t),
        n = t.type,
        o = t.pendingProps,
        a = e !== null ? e.memoizedProps : null,
        i = o.children,
        Bc(n, o) ? i = null : a !== null && Bc(n, a) && (t.flags |= 32),
        kg(e, t),
        Qe(e, t, i, r),
        t.child;
    case 6:
        return e === null && Vc(t),
        null;
    case 13:
        return Sg(e, t, r);
    case 4:
        return fd(t, t.stateNode.containerInfo),
        n = t.pendingProps,
        e === null ? t.child = Fn(t, null, n, r) : Qe(e, t, n, r),
        t.child;
    case 11:
        return n = t.type,
        o = t.pendingProps,
        o = t.elementType === n ? o : Et(n, o),
        tf(e, t, n, o, r);
    case 7:
        return Qe(e, t, t.pendingProps, r),
        t.child;
    case 8:
        return Qe(e, t, t.pendingProps.children, r),
        t.child;
    case 12:
        return Qe(e, t, t.pendingProps.children, r),
        t.child;
    case 10:
        e: {
            if (n = t.type._context,
            o = t.pendingProps,
            a = t.memoizedProps,
            i = o.value,
            ae(za, n._currentValue),
            n._currentValue = i,
            a !== null)
                if (Mt(a.value, i)) {
                    if (a.children === o.children && !nt.current) {
                        t = or(e, t, r);
                        break e
                    }
                } else
                    for (a = t.child,
                    a !== null && (a.return = t); a !== null; ) {
                        var l = a.dependencies;
                        if (l !== null) {
                            i = a.child;
                            for (var c = l.firstContext; c !== null; ) {
                                if (c.context === n) {
                                    if (a.tag === 1) {
                                        c = er(-1, r & -r),
                                        c.tag = 2;
                                        var u = a.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var h = u.pending;
                                            h === null ? c.next = c : (c.next = h.next,
                                            h.next = c),
                                            u.pending = c
                                        }
                                    }
                                    a.lanes |= r,
                                    c = a.alternate,
                                    c !== null && (c.lanes |= r),
                                    Yc(a.return, r, t),
                                    l.lanes |= r;
                                    break
                                }
                                c = c.next
                            }
                        } else if (a.tag === 10)
                            i = a.type === t.type ? null : a.child;
                        else if (a.tag === 18) {
                            if (i = a.return,
                            i === null)
                                throw Error(R(341));
                            i.lanes |= r,
                            l = i.alternate,
                            l !== null && (l.lanes |= r),
                            Yc(i, r, t),
                            i = a.sibling
                        } else
                            i = a.child;
                        if (i !== null)
                            i.return = a;
                        else
                            for (i = a; i !== null; ) {
                                if (i === t) {
                                    i = null;
                                    break
                                }
                                if (a = i.sibling,
                                a !== null) {
                                    a.return = i.return,
                                    i = a;
                                    break
                                }
                                i = i.return
                            }
                        a = i
                    }
            Qe(e, t, o.children, r),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        n = t.pendingProps.children,
        Tn(t, r),
        o = Nt(o),
        n = n(o),
        t.flags |= 1,
        Qe(e, t, n, r),
        t.child;
    case 14:
        return n = t.type,
        o = Et(n, t.pendingProps),
        o = Et(n.type, o),
        rf(e, t, n, o, r);
    case 15:
        return wg(e, t, t.type, t.pendingProps, r);
    case 17:
        return n = t.type,
        o = t.pendingProps,
        o = t.elementType === n ? o : Et(n, o),
        ca(e, t),
        t.tag = 1,
        ot(n) ? (e = !0,
        La(t)) : e = !1,
        Tn(t, r),
        yg(t, n, o),
        Kc(t, n, o, r),
        Zc(null, t, n, !0, e, r);
    case 19:
        return Cg(e, t, r);
    case 22:
        return jg(e, t, r)
    }
    throw Error(R(156, t.tag))
}
;
function Fg(e, t) {
    return pp(e, t)
}
function Hb(e, t, r, n) {
    this.tag = e,
    this.key = r,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = n,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function jt(e, t, r, n) {
    return new Hb(e,t,r,n)
}
function _d(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Ub(e) {
    if (typeof e == "function")
        return _d(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Yu)
            return 11;
        if (e === Qu)
            return 14
    }
    return 2
}
function Pr(e, t) {
    var r = e.alternate;
    return r === null ? (r = jt(e.tag, t, e.key, e.mode),
    r.elementType = e.elementType,
    r.type = e.type,
    r.stateNode = e.stateNode,
    r.alternate = e,
    e.alternate = r) : (r.pendingProps = t,
    r.type = e.type,
    r.flags = 0,
    r.subtreeFlags = 0,
    r.deletions = null),
    r.flags = e.flags & 14680064,
    r.childLanes = e.childLanes,
    r.lanes = e.lanes,
    r.child = e.child,
    r.memoizedProps = e.memoizedProps,
    r.memoizedState = e.memoizedState,
    r.updateQueue = e.updateQueue,
    t = e.dependencies,
    r.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    r.sibling = e.sibling,
    r.index = e.index,
    r.ref = e.ref,
    r
}
function ha(e, t, r, n, o, a) {
    var i = 2;
    if (n = e,
    typeof e == "function")
        _d(e) && (i = 1);
    else if (typeof e == "string")
        i = 5;
    else
        e: switch (e) {
        case gn:
            return Qr(r.children, o, a, t);
        case Vu:
            i = 8,
            o |= 8;
            break;
        case vc:
            return e = jt(12, r, t, o | 2),
            e.elementType = vc,
            e.lanes = a,
            e;
        case bc:
            return e = jt(13, r, t, o),
            e.elementType = bc,
            e.lanes = a,
            e;
        case wc:
            return e = jt(19, r, t, o),
            e.elementType = wc,
            e.lanes = a,
            e;
        case Zm:
            return _i(r, o, a, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case qm:
                    i = 10;
                    break e;
                case Xm:
                    i = 9;
                    break e;
                case Yu:
                    i = 11;
                    break e;
                case Qu:
                    i = 14;
                    break e;
                case fr:
                    i = 16,
                    n = null;
                    break e
                }
            throw Error(R(130, e == null ? e : typeof e, ""))
        }
    return t = jt(i, r, t, o),
    t.elementType = e,
    t.type = n,
    t.lanes = a,
    t
}
function Qr(e, t, r, n) {
    return e = jt(7, e, n, t),
    e.lanes = r,
    e
}
function _i(e, t, r, n) {
    return e = jt(22, e, n, t),
    e.elementType = Zm,
    e.lanes = r,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Ql(e, t, r) {
    return e = jt(6, e, null, t),
    e.lanes = r,
    e
}
function Kl(e, t, r) {
    return t = jt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = r,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Gb(e, t, r, n, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Pl(0),
    this.expirationTimes = Pl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Pl(0),
    this.identifierPrefix = n,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Pd(e, t, r, n, o, a, i, l, c) {
    return e = new Gb(e,t,r,l,c),
    t === 1 ? (t = 1,
    a === !0 && (t |= 8)) : t = 0,
    a = jt(3, null, null, t),
    e.current = a,
    a.stateNode = e,
    a.memoizedState = {
        element: n,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    hd(a),
    e
}
function Vb(e, t, r) {
    var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: pn,
        key: n == null ? null : "" + n,
        children: e,
        containerInfo: t,
        implementation: r
    }
}
function Hg(e) {
    if (!e)
        return Tr;
    e = e._reactInternals;
    e: {
        if (sn(e) !== e || e.tag !== 1)
            throw Error(R(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (ot(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(R(171))
    }
    if (e.tag === 1) {
        var r = e.type;
        if (ot(r))
            return Hp(e, r, t)
    }
    return t
}
function Ug(e, t, r, n, o, a, i, l, c) {
    return e = Pd(r, n, !0, e, o, a, i, l, c),
    e.context = Hg(null),
    r = e.current,
    n = Ke(),
    o = _r(r),
    a = er(n, o),
    a.callback = t ?? null,
    Cr(r, a, o),
    e.current.lanes = o,
    xs(e, o, n),
    st(e, n),
    e
}
function Pi(e, t, r, n) {
    var o = t.current
      , a = Ke()
      , i = _r(o);
    return r = Hg(r),
    t.context === null ? t.context = r : t.pendingContext = r,
    t = er(a, i),
    t.payload = {
        element: e
    },
    n = n === void 0 ? null : n,
    n !== null && (t.callback = n),
    e = Cr(o, t, i),
    e !== null && (Lt(e, o, i, a),
    aa(e, o, i)),
    i
}
function Qa(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function pf(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var r = e.retryLane;
        e.retryLane = r !== 0 && r < t ? r : t
    }
}
function Id(e, t) {
    pf(e, t),
    (e = e.alternate) && pf(e, t)
}
function Yb() {
    return null
}
var Gg = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Ed(e) {
    this._internalRoot = e
}
Ii.prototype.render = Ed.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(R(409));
    Pi(e, t, null, null)
}
;
Ii.prototype.unmount = Ed.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        tn(function() {
            Pi(null, e, null, null)
        }),
        t[rr] = null
    }
}
;
function Ii(e) {
    this._internalRoot = e
}
Ii.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = jp();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var r = 0; r < gr.length && t !== 0 && t < gr[r].priority; r++)
            ;
        gr.splice(r, 0, e),
        r === 0 && Np(e)
    }
}
;
function Td(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Ei(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function gf() {}
function Qb(e, t, r, n, o) {
    if (o) {
        if (typeof n == "function") {
            var a = n;
            n = function() {
                var u = Qa(i);
                a.call(u)
            }
        }
        var i = Ug(t, n, e, 0, null, !1, !1, "", gf);
        return e._reactRootContainer = i,
        e[rr] = i.current,
        Xo(e.nodeType === 8 ? e.parentNode : e),
        tn(),
        i
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof n == "function") {
        var l = n;
        n = function() {
            var u = Qa(c);
            l.call(u)
        }
    }
    var c = Pd(e, 0, !1, null, null, !1, !1, "", gf);
    return e._reactRootContainer = c,
    e[rr] = c.current,
    Xo(e.nodeType === 8 ? e.parentNode : e),
    tn(function() {
        Pi(t, c, r, n)
    }),
    c
}
function Ti(e, t, r, n, o) {
    var a = r._reactRootContainer;
    if (a) {
        var i = a;
        if (typeof o == "function") {
            var l = o;
            o = function() {
                var c = Qa(i);
                l.call(c)
            }
        }
        Pi(t, i, e, o)
    } else
        i = Qb(r, t, e, o, n);
    return Qa(i)
}
bp = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var r = Oo(t.pendingLanes);
            r !== 0 && (Xu(t, r | 1),
            st(t, we()),
            !(X & 6) && (Gn = we() + 500,
            Lr()))
        }
        break;
    case 13:
        tn(function() {
            var n = nr(e, 1);
            if (n !== null) {
                var o = Ke();
                Lt(n, e, 1, o)
            }
        }),
        Id(e, 1)
    }
}
;
Zu = function(e) {
    if (e.tag === 13) {
        var t = nr(e, 134217728);
        if (t !== null) {
            var r = Ke();
            Lt(t, e, 134217728, r)
        }
        Id(e, 134217728)
    }
}
;
wp = function(e) {
    if (e.tag === 13) {
        var t = _r(e)
          , r = nr(e, t);
        if (r !== null) {
            var n = Ke();
            Lt(r, e, t, n)
        }
        Id(e, t)
    }
}
;
jp = function() {
    return ne
}
;
kp = function(e, t) {
    var r = ne;
    try {
        return ne = e,
        t()
    } finally {
        ne = r
    }
}
;
Ec = function(e, t, r) {
    switch (t) {
    case "input":
        if (Nc(e, r),
        t = r.name,
        r.type === "radio" && t != null) {
            for (r = e; r.parentNode; )
                r = r.parentNode;
            for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < r.length; t++) {
                var n = r[t];
                if (n !== e && n.form === e.form) {
                    var o = ji(n);
                    if (!o)
                        throw Error(R(90));
                    ep(n),
                    Nc(n, o)
                }
            }
        }
        break;
    case "textarea":
        rp(e, r);
        break;
    case "select":
        t = r.value,
        t != null && _n(e, !!r.multiple, t, !1)
    }
}
;
cp = Sd;
up = tn;
var Kb = {
    usingClientEntryPoint: !1,
    Events: [vs, bn, ji, ip, lp, Sd]
}
  , wo = {
    findFiberByHostInstance: Hr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , qb = {
    bundleType: wo.bundleType,
    version: wo.version,
    rendererPackageName: wo.rendererPackageName,
    rendererConfig: wo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ir.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = fp(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: wo.findFiberByHostInstance || Yb,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ks = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ks.isDisabled && Ks.supportsFiber)
        try {
            yi = Ks.inject(qb),
            Gt = Ks
        } catch {}
}
pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kb;
pt.createPortal = function(e, t) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Td(t))
        throw Error(R(200));
    return Vb(e, t, null, r)
}
;
pt.createRoot = function(e, t) {
    if (!Td(e))
        throw Error(R(299));
    var r = !1
      , n = ""
      , o = Gg;
    return t != null && (t.unstable_strictMode === !0 && (r = !0),
    t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Pd(e, 1, !1, null, null, r, !1, n, o),
    e[rr] = t.current,
    Xo(e.nodeType === 8 ? e.parentNode : e),
    new Ed(t)
}
;
pt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","),
        Error(R(268, e)));
    return e = fp(t),
    e = e === null ? null : e.stateNode,
    e
}
;
pt.flushSync = function(e) {
    return tn(e)
}
;
pt.hydrate = function(e, t, r) {
    if (!Ei(t))
        throw Error(R(200));
    return Ti(null, e, t, !0, r)
}
;
pt.hydrateRoot = function(e, t, r) {
    if (!Td(e))
        throw Error(R(405));
    var n = r != null && r.hydratedSources || null
      , o = !1
      , a = ""
      , i = Gg;
    if (r != null && (r.unstable_strictMode === !0 && (o = !0),
    r.identifierPrefix !== void 0 && (a = r.identifierPrefix),
    r.onRecoverableError !== void 0 && (i = r.onRecoverableError)),
    t = Ug(t, null, e, 1, r ?? null, o, !1, a, i),
    e[rr] = t.current,
    Xo(e),
    n)
        for (e = 0; e < n.length; e++)
            r = n[e],
            o = r._getVersion,
            o = o(r._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, o] : t.mutableSourceEagerHydrationData.push(r, o);
    return new Ii(t)
}
;
pt.render = function(e, t, r) {
    if (!Ei(t))
        throw Error(R(200));
    return Ti(null, e, t, !1, r)
}
;
pt.unmountComponentAtNode = function(e) {
    if (!Ei(e))
        throw Error(R(40));
    return e._reactRootContainer ? (tn(function() {
        Ti(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[rr] = null
        })
    }),
    !0) : !1
}
;
pt.unstable_batchedUpdates = Sd;
pt.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
    if (!Ei(r))
        throw Error(R(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(R(38));
    return Ti(e, t, r, !1, n)
}
;
pt.version = "18.3.1-next-f1338f8080-20240426";
function Vg() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vg)
        } catch (e) {
            console.error(e)
        }
}
Vg(),
Vm.exports = pt;
var Xb = Vm.exports
  , xf = Xb;
xc.createRoot = xf.createRoot,
xc.hydrateRoot = xf.hydrateRoot;
function te() {
    return te = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    te.apply(null, arguments)
}
function yr(e) {
    if (typeof e != "object" || e === null)
        return !1;
    const t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
function Yg(e) {
    if (!yr(e))
        return e;
    const t = {};
    return Object.keys(e).forEach(r => {
        t[r] = Yg(e[r])
    }
    ),
    t
}
function Yt(e, t, r={
    clone: !0
}) {
    const n = r.clone ? te({}, e) : e;
    return yr(e) && yr(t) && Object.keys(t).forEach(o => {
        o !== "__proto__" && (yr(t[o]) && o in e && yr(e[o]) ? n[o] = Yt(e[o], t[o], r) : r.clone ? n[o] = yr(t[o]) ? Yg(t[o]) : t[o] : n[o] = t[o])
    }
    ),
    n
}
const Zb = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Yt,
    isPlainObject: yr
}, Symbol.toStringTag, {
    value: "Module"
}));
function as(e) {
    let t = "https://mui.com/production-error/?code=" + e;
    for (let r = 1; r < arguments.length; r += 1)
        t += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified MUI error #" + e + "; visit " + t + " for the full message."
}
const Jb = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: as
}, Symbol.toStringTag, {
    value: "Module"
}));
var Qg = {
    exports: {}
}
  , oe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ad = Symbol.for("react.element"), Rd = Symbol.for("react.portal"), Ai = Symbol.for("react.fragment"), Ri = Symbol.for("react.strict_mode"), Li = Symbol.for("react.profiler"), $i = Symbol.for("react.provider"), Mi = Symbol.for("react.context"), ew = Symbol.for("react.server_context"), zi = Symbol.for("react.forward_ref"), Di = Symbol.for("react.suspense"), Wi = Symbol.for("react.suspense_list"), Bi = Symbol.for("react.memo"), Fi = Symbol.for("react.lazy"), tw = Symbol.for("react.offscreen"), Kg;
Kg = Symbol.for("react.module.reference");
function _t(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
        case Ad:
            switch (e = e.type,
            e) {
            case Ai:
            case Li:
            case Ri:
            case Di:
            case Wi:
                return e;
            default:
                switch (e = e && e.$$typeof,
                e) {
                case ew:
                case Mi:
                case zi:
                case Fi:
                case Bi:
                case $i:
                    return e;
                default:
                    return t
                }
            }
        case Rd:
            return t
        }
    }
}
oe.ContextConsumer = Mi;
oe.ContextProvider = $i;
oe.Element = Ad;
oe.ForwardRef = zi;
oe.Fragment = Ai;
oe.Lazy = Fi;
oe.Memo = Bi;
oe.Portal = Rd;
oe.Profiler = Li;
oe.StrictMode = Ri;
oe.Suspense = Di;
oe.SuspenseList = Wi;
oe.isAsyncMode = function() {
    return !1
}
;
oe.isConcurrentMode = function() {
    return !1
}
;
oe.isContextConsumer = function(e) {
    return _t(e) === Mi
}
;
oe.isContextProvider = function(e) {
    return _t(e) === $i
}
;
oe.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ad
}
;
oe.isForwardRef = function(e) {
    return _t(e) === zi
}
;
oe.isFragment = function(e) {
    return _t(e) === Ai
}
;
oe.isLazy = function(e) {
    return _t(e) === Fi
}
;
oe.isMemo = function(e) {
    return _t(e) === Bi
}
;
oe.isPortal = function(e) {
    return _t(e) === Rd
}
;
oe.isProfiler = function(e) {
    return _t(e) === Li
}
;
oe.isStrictMode = function(e) {
    return _t(e) === Ri
}
;
oe.isSuspense = function(e) {
    return _t(e) === Di
}
;
oe.isSuspenseList = function(e) {
    return _t(e) === Wi
}
;
oe.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Ai || e === Li || e === Ri || e === Di || e === Wi || e === tw || typeof e == "object" && e !== null && (e.$$typeof === Fi || e.$$typeof === Bi || e.$$typeof === $i || e.$$typeof === Mi || e.$$typeof === zi || e.$$typeof === Kg || e.getModuleId !== void 0)
}
;
oe.typeOf = _t;
Qg.exports = oe;
var yf = Qg.exports;
const rw = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function qg(e) {
    const t = `${e}`.match(rw);
    return t && t[1] || ""
}
function Xg(e, t="") {
    return e.displayName || e.name || qg(e) || t
}
function vf(e, t, r) {
    const n = Xg(t);
    return e.displayName || (n !== "" ? `${r}(${n})` : r)
}
function nw(e) {
    if (e != null) {
        if (typeof e == "string")
            return e;
        if (typeof e == "function")
            return Xg(e, "Component");
        if (typeof e == "object")
            switch (e.$$typeof) {
            case yf.ForwardRef:
                return vf(e, e.render, "ForwardRef");
            case yf.Memo:
                return vf(e, e.type, "memo");
            default:
                return
            }
    }
}
const ow = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: nw,
    getFunctionName: qg
}, Symbol.toStringTag, {
    value: "Module"
}));
function rn(e) {
    if (typeof e != "string")
        throw new Error(as(7));
    return e.charAt(0).toUpperCase() + e.slice(1)
}
const sw = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: rn
}, Symbol.toStringTag, {
    value: "Module"
}));
function Zg(e, t) {
    const r = te({}, t);
    return Object.keys(e).forEach(n => {
        if (n.toString().match(/^(components|slots)$/))
            r[n] = te({}, e[n], r[n]);
        else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
            const o = e[n] || {}
              , a = t[n];
            r[n] = {},
            !a || !Object.keys(a) ? r[n] = o : !o || !Object.keys(o) ? r[n] = a : (r[n] = te({}, a),
            Object.keys(o).forEach(i => {
                r[n][i] = Zg(o[i], a[i])
            }
            ))
        } else
            r[n] === void 0 && (r[n] = e[n])
    }
    ),
    r
}
function aw(e, t, r=void 0) {
    const n = {};
    return Object.keys(e).forEach(o => {
        n[o] = e[o].reduce( (a, i) => {
            if (i) {
                const l = t(i);
                l !== "" && a.push(l),
                r && r[i] && a.push(r[i])
            }
            return a
        }
        , []).join(" ")
    }
    ),
    n
}
const bf = e => e
  , iw = () => {
    let e = bf;
    return {
        configure(t) {
            e = t
        },
        generate(t) {
            return e(t)
        },
        reset() {
            e = bf
        }
    }
}
  , Jg = iw()
  , lw = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected"
};
function ex(e, t, r="Mui") {
    const n = lw[t];
    return n ? `${r}-${n}` : `${Jg.generate(e)}-${t}`
}
function tx(e, t, r="Mui") {
    const n = {};
    return t.forEach(o => {
        n[o] = ex(e, o, r)
    }
    ),
    n
}
function cw(e, t=Number.MIN_SAFE_INTEGER, r=Number.MAX_SAFE_INTEGER) {
    return Math.max(t, Math.min(e, r))
}
const uw = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: cw
}, Symbol.toStringTag, {
    value: "Module"
}));
function lr(e, t) {
    if (e == null)
        return {};
    var r = {};
    for (var n in e)
        if ({}.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0)
                continue;
            r[n] = e[n]
        }
    return r
}
function rx(e) {
    var t, r, n = "";
    if (typeof e == "string" || typeof e == "number")
        n += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (r = rx(e[t])) && (n && (n += " "),
                n += r)
        } else
            for (r in e)
                e[r] && (n && (n += " "),
                n += r);
    return n
}
function nx() {
    for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
        (e = arguments[r]) && (t = rx(e)) && (n && (n += " "),
        n += t);
    return n
}
function dw(e) {
    const {theme: t, name: r, props: n} = e;
    return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : Zg(t.components[r].defaultProps, n)
}
const hw = ["values", "unit", "step"]
  , fw = e => {
    const t = Object.keys(e).map(r => ({
        key: r,
        val: e[r]
    })) || [];
    return t.sort( (r, n) => r.val - n.val),
    t.reduce( (r, n) => te({}, r, {
        [n.key]: n.val
    }), {})
}
;
function ox(e) {
    const {values: t={
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536
    }, unit: r="px", step: n=5} = e
      , o = lr(e, hw)
      , a = fw(t)
      , i = Object.keys(a);
    function l(m) {
        return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r})`
    }
    function c(m) {
        return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - n / 100}${r})`
    }
    function u(m, v) {
        const y = i.indexOf(v);
        return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r}) and (max-width:${(y !== -1 && typeof t[i[y]] == "number" ? t[i[y]] : v) - n / 100}${r})`
    }
    function h(m) {
        return i.indexOf(m) + 1 < i.length ? u(m, i[i.indexOf(m) + 1]) : l(m)
    }
    function d(m) {
        const v = i.indexOf(m);
        return v === 0 ? l(i[1]) : v === i.length - 1 ? c(i[v]) : u(m, i[i.indexOf(m) + 1]).replace("@media", "@media not all and")
    }
    return te({
        keys: i,
        values: a,
        up: l,
        down: c,
        between: u,
        only: h,
        not: d,
        unit: r
    }, o)
}
const mw = {
    borderRadius: 4
};
function Do(e, t) {
    return t ? Yt(e, t, {
        clone: !1
    }) : e
}
const Ld = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
}
  , wf = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: e => `@media (min-width:${Ld[e]}px)`
};
function sr(e, t, r) {
    const n = e.theme || {};
    if (Array.isArray(t)) {
        const a = n.breakpoints || wf;
        return t.reduce( (i, l, c) => (i[a.up(a.keys[c])] = r(t[c]),
        i), {})
    }
    if (typeof t == "object") {
        const a = n.breakpoints || wf;
        return Object.keys(t).reduce( (i, l) => {
            if (Object.keys(a.values || Ld).indexOf(l) !== -1) {
                const c = a.up(l);
                i[c] = r(t[l], l)
            } else {
                const c = l;
                i[c] = t[c]
            }
            return i
        }
        , {})
    }
    return r(t)
}
function pw(e={}) {
    var t;
    return ((t = e.keys) == null ? void 0 : t.reduce( (n, o) => {
        const a = e.up(o);
        return n[a] = {},
        n
    }
    , {})) || {}
}
function gw(e, t) {
    return e.reduce( (r, n) => {
        const o = r[n];
        return (!o || Object.keys(o).length === 0) && delete r[n],
        r
    }
    , t)
}
function Hi(e, t, r=!0) {
    if (!t || typeof t != "string")
        return null;
    if (e && e.vars && r) {
        const n = `vars.${t}`.split(".").reduce( (o, a) => o && o[a] ? o[a] : null, e);
        if (n != null)
            return n
    }
    return t.split(".").reduce( (n, o) => n && n[o] != null ? n[o] : null, e)
}
function Ka(e, t, r, n=r) {
    let o;
    return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Hi(e, r) || n,
    t && (o = t(o, n, e)),
    o
}
function je(e) {
    const {prop: t, cssProperty: r=e.prop, themeKey: n, transform: o} = e
      , a = i => {
        if (i[t] == null)
            return null;
        const l = i[t]
          , c = i.theme
          , u = Hi(c, n) || {};
        return sr(i, l, d => {
            let m = Ka(u, o, d);
            return d === m && typeof d == "string" && (m = Ka(u, o, `${t}${d === "default" ? "" : rn(d)}`, d)),
            r === !1 ? m : {
                [r]: m
            }
        }
        )
    }
    ;
    return a.propTypes = {},
    a.filterProps = [t],
    a
}
function xw(e) {
    const t = {};
    return r => (t[r] === void 0 && (t[r] = e(r)),
    t[r])
}
const yw = {
    m: "margin",
    p: "padding"
}
  , vw = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"]
}
  , jf = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
}
  , bw = xw(e => {
    if (e.length > 2)
        if (jf[e])
            e = jf[e];
        else
            return [e];
    const [t,r] = e.split("")
      , n = yw[t]
      , o = vw[r] || "";
    return Array.isArray(o) ? o.map(a => n + a) : [n + o]
}
)
  , $d = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]
  , Md = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...$d, ...Md];
function ws(e, t, r, n) {
    var o;
    const a = (o = Hi(e, t, !1)) != null ? o : r;
    return typeof a == "number" ? i => typeof i == "string" ? i : a * i : Array.isArray(a) ? i => typeof i == "string" ? i : a[i] : typeof a == "function" ? a : () => {}
}
function sx(e) {
    return ws(e, "spacing", 8)
}
function js(e, t) {
    if (typeof t == "string" || t == null)
        return t;
    const r = Math.abs(t)
      , n = e(r);
    return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`
}
function ww(e, t) {
    return r => e.reduce( (n, o) => (n[o] = js(t, r),
    n), {})
}
function jw(e, t, r, n) {
    if (t.indexOf(r) === -1)
        return null;
    const o = bw(r)
      , a = ww(o, n)
      , i = e[r];
    return sr(e, i, a)
}
function ax(e, t) {
    const r = sx(e.theme);
    return Object.keys(e).map(n => jw(e, t, n, r)).reduce(Do, {})
}
function xe(e) {
    return ax(e, $d)
}
xe.propTypes = {};
xe.filterProps = $d;
function ye(e) {
    return ax(e, Md)
}
ye.propTypes = {};
ye.filterProps = Md;
function kw(e=8) {
    if (e.mui)
        return e;
    const t = sx({
        spacing: e
    })
      , r = (...n) => (n.length === 0 ? [1] : n).map(a => {
        const i = t(a);
        return typeof i == "number" ? `${i}px` : i
    }
    ).join(" ");
    return r.mui = !0,
    r
}
function Ui(...e) {
    const t = e.reduce( (n, o) => (o.filterProps.forEach(a => {
        n[a] = o
    }
    ),
    n), {})
      , r = n => Object.keys(n).reduce( (o, a) => t[a] ? Do(o, t[a](n)) : o, {});
    return r.propTypes = {},
    r.filterProps = e.reduce( (n, o) => n.concat(o.filterProps), []),
    r
}
function wt(e) {
    return typeof e != "number" ? e : `${e}px solid`
}
function Pt(e, t) {
    return je({
        prop: e,
        themeKey: "borders",
        transform: t
    })
}
const Nw = Pt("border", wt)
  , Sw = Pt("borderTop", wt)
  , Cw = Pt("borderRight", wt)
  , Ow = Pt("borderBottom", wt)
  , _w = Pt("borderLeft", wt)
  , Pw = Pt("borderColor")
  , Iw = Pt("borderTopColor")
  , Ew = Pt("borderRightColor")
  , Tw = Pt("borderBottomColor")
  , Aw = Pt("borderLeftColor")
  , Rw = Pt("outline", wt)
  , Lw = Pt("outlineColor")
  , Gi = e => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
        const t = ws(e.theme, "shape.borderRadius", 4)
          , r = n => ({
            borderRadius: js(t, n)
        });
        return sr(e, e.borderRadius, r)
    }
    return null
}
;
Gi.propTypes = {};
Gi.filterProps = ["borderRadius"];
Ui(Nw, Sw, Cw, Ow, _w, Pw, Iw, Ew, Tw, Aw, Gi, Rw, Lw);
const Vi = e => {
    if (e.gap !== void 0 && e.gap !== null) {
        const t = ws(e.theme, "spacing", 8)
          , r = n => ({
            gap: js(t, n)
        });
        return sr(e, e.gap, r)
    }
    return null
}
;
Vi.propTypes = {};
Vi.filterProps = ["gap"];
const Yi = e => {
    if (e.columnGap !== void 0 && e.columnGap !== null) {
        const t = ws(e.theme, "spacing", 8)
          , r = n => ({
            columnGap: js(t, n)
        });
        return sr(e, e.columnGap, r)
    }
    return null
}
;
Yi.propTypes = {};
Yi.filterProps = ["columnGap"];
const Qi = e => {
    if (e.rowGap !== void 0 && e.rowGap !== null) {
        const t = ws(e.theme, "spacing", 8)
          , r = n => ({
            rowGap: js(t, n)
        });
        return sr(e, e.rowGap, r)
    }
    return null
}
;
Qi.propTypes = {};
Qi.filterProps = ["rowGap"];
const $w = je({
    prop: "gridColumn"
})
  , Mw = je({
    prop: "gridRow"
})
  , zw = je({
    prop: "gridAutoFlow"
})
  , Dw = je({
    prop: "gridAutoColumns"
})
  , Ww = je({
    prop: "gridAutoRows"
})
  , Bw = je({
    prop: "gridTemplateColumns"
})
  , Fw = je({
    prop: "gridTemplateRows"
})
  , Hw = je({
    prop: "gridTemplateAreas"
})
  , Uw = je({
    prop: "gridArea"
});
Ui(Vi, Yi, Qi, $w, Mw, zw, Dw, Ww, Bw, Fw, Hw, Uw);
function Rn(e, t) {
    return t === "grey" ? t : e
}
const Gw = je({
    prop: "color",
    themeKey: "palette",
    transform: Rn
})
  , Vw = je({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Rn
})
  , Yw = je({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: Rn
});
Ui(Gw, Vw, Yw);
function ut(e) {
    return e <= 1 && e !== 0 ? `${e * 100}%` : e
}
const Qw = je({
    prop: "width",
    transform: ut
})
  , zd = e => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
        const t = r => {
            var n, o;
            const a = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[r]) || Ld[r];
            return a ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
                maxWidth: `${a}${e.theme.breakpoints.unit}`
            } : {
                maxWidth: a
            } : {
                maxWidth: ut(r)
            }
        }
        ;
        return sr(e, e.maxWidth, t)
    }
    return null
}
;
zd.filterProps = ["maxWidth"];
const Kw = je({
    prop: "minWidth",
    transform: ut
})
  , qw = je({
    prop: "height",
    transform: ut
})
  , Xw = je({
    prop: "maxHeight",
    transform: ut
})
  , Zw = je({
    prop: "minHeight",
    transform: ut
});
je({
    prop: "size",
    cssProperty: "width",
    transform: ut
});
je({
    prop: "size",
    cssProperty: "height",
    transform: ut
});
const Jw = je({
    prop: "boxSizing"
});
Ui(Qw, zd, Kw, qw, Xw, Zw, Jw);
const ks = {
    border: {
        themeKey: "borders",
        transform: wt
    },
    borderTop: {
        themeKey: "borders",
        transform: wt
    },
    borderRight: {
        themeKey: "borders",
        transform: wt
    },
    borderBottom: {
        themeKey: "borders",
        transform: wt
    },
    borderLeft: {
        themeKey: "borders",
        transform: wt
    },
    borderColor: {
        themeKey: "palette"
    },
    borderTopColor: {
        themeKey: "palette"
    },
    borderRightColor: {
        themeKey: "palette"
    },
    borderBottomColor: {
        themeKey: "palette"
    },
    borderLeftColor: {
        themeKey: "palette"
    },
    outline: {
        themeKey: "borders",
        transform: wt
    },
    outlineColor: {
        themeKey: "palette"
    },
    borderRadius: {
        themeKey: "shape.borderRadius",
        style: Gi
    },
    color: {
        themeKey: "palette",
        transform: Rn
    },
    bgcolor: {
        themeKey: "palette",
        cssProperty: "backgroundColor",
        transform: Rn
    },
    backgroundColor: {
        themeKey: "palette",
        transform: Rn
    },
    p: {
        style: ye
    },
    pt: {
        style: ye
    },
    pr: {
        style: ye
    },
    pb: {
        style: ye
    },
    pl: {
        style: ye
    },
    px: {
        style: ye
    },
    py: {
        style: ye
    },
    padding: {
        style: ye
    },
    paddingTop: {
        style: ye
    },
    paddingRight: {
        style: ye
    },
    paddingBottom: {
        style: ye
    },
    paddingLeft: {
        style: ye
    },
    paddingX: {
        style: ye
    },
    paddingY: {
        style: ye
    },
    paddingInline: {
        style: ye
    },
    paddingInlineStart: {
        style: ye
    },
    paddingInlineEnd: {
        style: ye
    },
    paddingBlock: {
        style: ye
    },
    paddingBlockStart: {
        style: ye
    },
    paddingBlockEnd: {
        style: ye
    },
    m: {
        style: xe
    },
    mt: {
        style: xe
    },
    mr: {
        style: xe
    },
    mb: {
        style: xe
    },
    ml: {
        style: xe
    },
    mx: {
        style: xe
    },
    my: {
        style: xe
    },
    margin: {
        style: xe
    },
    marginTop: {
        style: xe
    },
    marginRight: {
        style: xe
    },
    marginBottom: {
        style: xe
    },
    marginLeft: {
        style: xe
    },
    marginX: {
        style: xe
    },
    marginY: {
        style: xe
    },
    marginInline: {
        style: xe
    },
    marginInlineStart: {
        style: xe
    },
    marginInlineEnd: {
        style: xe
    },
    marginBlock: {
        style: xe
    },
    marginBlockStart: {
        style: xe
    },
    marginBlockEnd: {
        style: xe
    },
    displayPrint: {
        cssProperty: !1,
        transform: e => ({
            "@media print": {
                display: e
            }
        })
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: {
        style: Vi
    },
    rowGap: {
        style: Qi
    },
    columnGap: {
        style: Yi
    },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: {
        themeKey: "zIndex"
    },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: {
        themeKey: "shadows"
    },
    width: {
        transform: ut
    },
    maxWidth: {
        style: zd
    },
    minWidth: {
        transform: ut
    },
    height: {
        transform: ut
    },
    maxHeight: {
        transform: ut
    },
    minHeight: {
        transform: ut
    },
    boxSizing: {},
    fontFamily: {
        themeKey: "typography"
    },
    fontSize: {
        themeKey: "typography"
    },
    fontStyle: {
        themeKey: "typography"
    },
    fontWeight: {
        themeKey: "typography"
    },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: {
        cssProperty: !1,
        themeKey: "typography"
    }
};
function e1(...e) {
    const t = e.reduce( (n, o) => n.concat(Object.keys(o)), [])
      , r = new Set(t);
    return e.every(n => r.size === Object.keys(n).length)
}
function t1(e, t) {
    return typeof e == "function" ? e(t) : e
}
function ix() {
    function e(r, n, o, a) {
        const i = {
            [r]: n,
            theme: o
        }
          , l = a[r];
        if (!l)
            return {
                [r]: n
            };
        const {cssProperty: c=r, themeKey: u, transform: h, style: d} = l;
        if (n == null)
            return null;
        if (u === "typography" && n === "inherit")
            return {
                [r]: n
            };
        const m = Hi(o, u) || {};
        return d ? d(i) : sr(i, n, y => {
            let x = Ka(m, h, y);
            return y === x && typeof y == "string" && (x = Ka(m, h, `${r}${y === "default" ? "" : rn(y)}`, y)),
            c === !1 ? x : {
                [c]: x
            }
        }
        )
    }
    function t(r) {
        var n;
        const {sx: o, theme: a={}} = r || {};
        if (!o)
            return null;
        const i = (n = a.unstable_sxConfig) != null ? n : ks;
        function l(c) {
            let u = c;
            if (typeof c == "function")
                u = c(a);
            else if (typeof c != "object")
                return c;
            if (!u)
                return null;
            const h = pw(a.breakpoints)
              , d = Object.keys(h);
            let m = h;
            return Object.keys(u).forEach(v => {
                const y = t1(u[v], a);
                if (y != null)
                    if (typeof y == "object")
                        if (i[v])
                            m = Do(m, e(v, y, a, i));
                        else {
                            const x = sr({
                                theme: a
                            }, y, w => ({
                                [v]: w
                            }));
                            e1(x, y) ? m[v] = t({
                                sx: y,
                                theme: a
                            }) : m = Do(m, x)
                        }
                    else
                        m = Do(m, e(v, y, a, i))
            }
            ),
            gw(d, m)
        }
        return Array.isArray(o) ? o.map(l) : l(o)
    }
    return t
}
const Ns = ix();
Ns.filterProps = ["sx"];
function lx(e, t) {
    const r = this;
    return r.vars && typeof r.getColorSchemeSelector == "function" ? {
        [r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
    } : r.palette.mode === e ? t : {}
}
const r1 = ["breakpoints", "palette", "spacing", "shape"];
function Dd(e={}, ...t) {
    const {breakpoints: r={}, palette: n={}, spacing: o, shape: a={}} = e
      , i = lr(e, r1)
      , l = ox(r)
      , c = kw(o);
    let u = Yt({
        breakpoints: l,
        direction: "ltr",
        components: {},
        palette: te({
            mode: "light"
        }, n),
        spacing: c,
        shape: te({}, mw, a)
    }, i);
    return u.applyStyles = lx,
    u = t.reduce( (h, d) => Yt(h, d), u),
    u.unstable_sxConfig = te({}, ks, i == null ? void 0 : i.unstable_sxConfig),
    u.unstable_sx = function(d) {
        return Ns({
            sx: d,
            theme: this
        })
    }
    ,
    u
}
const n1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Dd,
    private_createBreakpoints: ox,
    unstable_applyStyles: lx
}, Symbol.toStringTag, {
    value: "Module"
}));
function cx(e) {
    var t = Object.create(null);
    return function(r) {
        return t[r] === void 0 && (t[r] = e(r)),
        t[r]
    }
}
var o1 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/
  , s1 = cx(function(e) {
    return o1.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91
});
function a1(e) {
    if (e.sheet)
        return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
        if (document.styleSheets[t].ownerNode === e)
            return document.styleSheets[t]
}
function i1(e) {
    var t = document.createElement("style");
    return t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
}
var l1 = function() {
    function e(r) {
        var n = this;
        this._insertTag = function(o) {
            var a;
            n.tags.length === 0 ? n.insertionPoint ? a = n.insertionPoint.nextSibling : n.prepend ? a = n.container.firstChild : a = n.before : a = n.tags[n.tags.length - 1].nextSibling,
            n.container.insertBefore(o, a),
            n.tags.push(o)
        }
        ,
        this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy,
        this.tags = [],
        this.ctr = 0,
        this.nonce = r.nonce,
        this.key = r.key,
        this.container = r.container,
        this.prepend = r.prepend,
        this.insertionPoint = r.insertionPoint,
        this.before = null
    }
    var t = e.prototype;
    return t.hydrate = function(n) {
        n.forEach(this._insertTag)
    }
    ,
    t.insert = function(n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(i1(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
            var a = a1(o);
            try {
                a.insertRule(n, a.cssRules.length)
            } catch {}
        } else
            o.appendChild(document.createTextNode(n));
        this.ctr++
    }
    ,
    t.flush = function() {
        this.tags.forEach(function(n) {
            return n.parentNode && n.parentNode.removeChild(n)
        }),
        this.tags = [],
        this.ctr = 0
    }
    ,
    e
}()
  , He = "-ms-"
  , qa = "-moz-"
  , Z = "-webkit-"
  , ux = "comm"
  , Wd = "rule"
  , Bd = "decl"
  , c1 = "@import"
  , dx = "@keyframes"
  , u1 = "@layer"
  , d1 = Math.abs
  , Ki = String.fromCharCode
  , h1 = Object.assign;
function f1(e, t) {
    return $e(e, 0) ^ 45 ? (((t << 2 ^ $e(e, 0)) << 2 ^ $e(e, 1)) << 2 ^ $e(e, 2)) << 2 ^ $e(e, 3) : 0
}
function hx(e) {
    return e.trim()
}
function m1(e, t) {
    return (e = t.exec(e)) ? e[0] : e
}
function J(e, t, r) {
    return e.replace(t, r)
}
function uu(e, t) {
    return e.indexOf(t)
}
function $e(e, t) {
    return e.charCodeAt(t) | 0
}
function is(e, t, r) {
    return e.slice(t, r)
}
function Bt(e) {
    return e.length
}
function Fd(e) {
    return e.length
}
function qs(e, t) {
    return t.push(e),
    e
}
function p1(e, t) {
    return e.map(t).join("")
}
var qi = 1
  , Vn = 1
  , fx = 0
  , at = 0
  , Ne = 0
  , io = "";
function Xi(e, t, r, n, o, a, i) {
    return {
        value: e,
        root: t,
        parent: r,
        type: n,
        props: o,
        children: a,
        line: qi,
        column: Vn,
        length: i,
        return: ""
    }
}
function jo(e, t) {
    return h1(Xi("", null, null, "", null, null, 0), e, {
        length: -e.length
    }, t)
}
function g1() {
    return Ne
}
function x1() {
    return Ne = at > 0 ? $e(io, --at) : 0,
    Vn--,
    Ne === 10 && (Vn = 1,
    qi--),
    Ne
}
function ft() {
    return Ne = at < fx ? $e(io, at++) : 0,
    Vn++,
    Ne === 10 && (Vn = 1,
    qi++),
    Ne
}
function Qt() {
    return $e(io, at)
}
function fa() {
    return at
}
function Ss(e, t) {
    return is(io, e, t)
}
function ls(e) {
    switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
        return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
        return 4;
    case 58:
        return 3;
    case 34:
    case 39:
    case 40:
    case 91:
        return 2;
    case 41:
    case 93:
        return 1
    }
    return 0
}
function mx(e) {
    return qi = Vn = 1,
    fx = Bt(io = e),
    at = 0,
    []
}
function px(e) {
    return io = "",
    e
}
function ma(e) {
    return hx(Ss(at - 1, du(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function y1(e) {
    for (; (Ne = Qt()) && Ne < 33; )
        ft();
    return ls(e) > 2 || ls(Ne) > 3 ? "" : " "
}
function v1(e, t) {
    for (; --t && ft() && !(Ne < 48 || Ne > 102 || Ne > 57 && Ne < 65 || Ne > 70 && Ne < 97); )
        ;
    return Ss(e, fa() + (t < 6 && Qt() == 32 && ft() == 32))
}
function du(e) {
    for (; ft(); )
        switch (Ne) {
        case e:
            return at;
        case 34:
        case 39:
            e !== 34 && e !== 39 && du(Ne);
            break;
        case 40:
            e === 41 && du(e);
            break;
        case 92:
            ft();
            break
        }
    return at
}
function b1(e, t) {
    for (; ft() && e + Ne !== 57; )
        if (e + Ne === 84 && Qt() === 47)
            break;
    return "/*" + Ss(t, at - 1) + "*" + Ki(e === 47 ? e : ft())
}
function w1(e) {
    for (; !ls(Qt()); )
        ft();
    return Ss(e, at)
}
function j1(e) {
    return px(pa("", null, null, null, [""], e = mx(e), 0, [0], e))
}
function pa(e, t, r, n, o, a, i, l, c) {
    for (var u = 0, h = 0, d = i, m = 0, v = 0, y = 0, x = 1, w = 1, p = 1, f = 0, g = "", b = o, j = a, k = n, N = g; w; )
        switch (y = f,
        f = ft()) {
        case 40:
            if (y != 108 && $e(N, d - 1) == 58) {
                uu(N += J(ma(f), "&", "&\f"), "&\f") != -1 && (p = -1);
                break
            }
        case 34:
        case 39:
        case 91:
            N += ma(f);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            N += y1(y);
            break;
        case 92:
            N += v1(fa() - 1, 7);
            continue;
        case 47:
            switch (Qt()) {
            case 42:
            case 47:
                qs(k1(b1(ft(), fa()), t, r), c);
                break;
            default:
                N += "/"
            }
            break;
        case 123 * x:
            l[u++] = Bt(N) * p;
        case 125 * x:
        case 59:
        case 0:
            switch (f) {
            case 0:
            case 125:
                w = 0;
            case 59 + h:
                p == -1 && (N = J(N, /\f/g, "")),
                v > 0 && Bt(N) - d && qs(v > 32 ? Nf(N + ";", n, r, d - 1) : Nf(J(N, " ", "") + ";", n, r, d - 2), c);
                break;
            case 59:
                N += ";";
            default:
                if (qs(k = kf(N, t, r, u, h, o, l, g, b = [], j = [], d), a),
                f === 123)
                    if (h === 0)
                        pa(N, t, k, k, b, a, d, l, j);
                    else
                        switch (m === 99 && $e(N, 3) === 110 ? 100 : m) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                            pa(e, k, k, n && qs(kf(e, k, k, 0, 0, o, l, g, o, b = [], d), j), o, j, d, l, n ? b : j);
                            break;
                        default:
                            pa(N, k, k, k, [""], j, 0, l, j)
                        }
            }
            u = h = v = 0,
            x = p = 1,
            g = N = "",
            d = i;
            break;
        case 58:
            d = 1 + Bt(N),
            v = y;
        default:
            if (x < 1) {
                if (f == 123)
                    --x;
                else if (f == 125 && x++ == 0 && x1() == 125)
                    continue
            }
            switch (N += Ki(f),
            f * x) {
            case 38:
                p = h > 0 ? 1 : (N += "\f",
                -1);
                break;
            case 44:
                l[u++] = (Bt(N) - 1) * p,
                p = 1;
                break;
            case 64:
                Qt() === 45 && (N += ma(ft())),
                m = Qt(),
                h = d = Bt(g = N += w1(fa())),
                f++;
                break;
            case 45:
                y === 45 && Bt(N) == 2 && (x = 0)
            }
        }
    return a
}
function kf(e, t, r, n, o, a, i, l, c, u, h) {
    for (var d = o - 1, m = o === 0 ? a : [""], v = Fd(m), y = 0, x = 0, w = 0; y < n; ++y)
        for (var p = 0, f = is(e, d + 1, d = d1(x = i[y])), g = e; p < v; ++p)
            (g = hx(x > 0 ? m[p] + " " + f : J(f, /&\f/g, m[p]))) && (c[w++] = g);
    return Xi(e, t, r, o === 0 ? Wd : l, c, u, h)
}
function k1(e, t, r) {
    return Xi(e, t, r, ux, Ki(g1()), is(e, 2, -2), 0)
}
function Nf(e, t, r, n) {
    return Xi(e, t, r, Bd, is(e, 0, n), is(e, n + 1, -1), n)
}
function Ln(e, t) {
    for (var r = "", n = Fd(e), o = 0; o < n; o++)
        r += t(e[o], o, e, t) || "";
    return r
}
function N1(e, t, r, n) {
    switch (e.type) {
    case u1:
        if (e.children.length)
            break;
    case c1:
    case Bd:
        return e.return = e.return || e.value;
    case ux:
        return "";
    case dx:
        return e.return = e.value + "{" + Ln(e.children, n) + "}";
    case Wd:
        e.value = e.props.join(",")
    }
    return Bt(r = Ln(e.children, n)) ? e.return = e.value + "{" + r + "}" : ""
}
function S1(e) {
    var t = Fd(e);
    return function(r, n, o, a) {
        for (var i = "", l = 0; l < t; l++)
            i += e[l](r, n, o, a) || "";
        return i
    }
}
function C1(e) {
    return function(t) {
        t.root || (t = t.return) && e(t)
    }
}
var O1 = function(t, r, n) {
    for (var o = 0, a = 0; o = a,
    a = Qt(),
    o === 38 && a === 12 && (r[n] = 1),
    !ls(a); )
        ft();
    return Ss(t, at)
}
  , _1 = function(t, r) {
    var n = -1
      , o = 44;
    do
        switch (ls(o)) {
        case 0:
            o === 38 && Qt() === 12 && (r[n] = 1),
            t[n] += O1(at - 1, r, n);
            break;
        case 2:
            t[n] += ma(o);
            break;
        case 4:
            if (o === 44) {
                t[++n] = Qt() === 58 ? "&\f" : "",
                r[n] = t[n].length;
                break
            }
        default:
            t[n] += Ki(o)
        }
    while (o = ft());
    return t
}
  , P1 = function(t, r) {
    return px(_1(mx(t), r))
}
  , Sf = new WeakMap
  , I1 = function(t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
        for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
            if (n = n.parent,
            !n)
                return;
        if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Sf.get(n)) && !o) {
            Sf.set(t, !0);
            for (var a = [], i = P1(r, a), l = n.props, c = 0, u = 0; c < i.length; c++)
                for (var h = 0; h < l.length; h++,
                u++)
                    t.props[u] = a[c] ? i[c].replace(/&\f/g, l[h]) : l[h] + " " + i[c]
        }
    }
}
  , E1 = function(t) {
    if (t.type === "decl") {
        var r = t.value;
        r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && (t.return = "",
        t.value = "")
    }
};
function gx(e, t) {
    switch (f1(e, t)) {
    case 5103:
        return Z + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
        return Z + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
        return Z + e + qa + e + He + e + e;
    case 6828:
    case 4268:
        return Z + e + He + e + e;
    case 6165:
        return Z + e + He + "flex-" + e + e;
    case 5187:
        return Z + e + J(e, /(\w+).+(:[^]+)/, Z + "box-$1$2" + He + "flex-$1$2") + e;
    case 5443:
        return Z + e + He + "flex-item-" + J(e, /flex-|-self/, "") + e;
    case 4675:
        return Z + e + He + "flex-line-pack" + J(e, /align-content|flex-|-self/, "") + e;
    case 5548:
        return Z + e + He + J(e, "shrink", "negative") + e;
    case 5292:
        return Z + e + He + J(e, "basis", "preferred-size") + e;
    case 6060:
        return Z + "box-" + J(e, "-grow", "") + Z + e + He + J(e, "grow", "positive") + e;
    case 4554:
        return Z + J(e, /([^-])(transform)/g, "$1" + Z + "$2") + e;
    case 6187:
        return J(J(J(e, /(zoom-|grab)/, Z + "$1"), /(image-set)/, Z + "$1"), e, "") + e;
    case 5495:
    case 3959:
        return J(e, /(image-set\([^]*)/, Z + "$1$`$1");
    case 4968:
        return J(J(e, /(.+:)(flex-)?(.*)/, Z + "box-pack:$3" + He + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Z + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
        return J(e, /(.+)-inline(.+)/, Z + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
        if (Bt(e) - 1 - t > 6)
            switch ($e(e, t + 1)) {
            case 109:
                if ($e(e, t + 4) !== 45)
                    break;
            case 102:
                return J(e, /(.+:)(.+)-([^]+)/, "$1" + Z + "$2-$3$1" + qa + ($e(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
            case 115:
                return ~uu(e, "stretch") ? gx(J(e, "stretch", "fill-available"), t) + e : e
            }
        break;
    case 4949:
        if ($e(e, t + 1) !== 115)
            break;
    case 6444:
        switch ($e(e, Bt(e) - 3 - (~uu(e, "!important") && 10))) {
        case 107:
            return J(e, ":", ":" + Z) + e;
        case 101:
            return J(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Z + ($e(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Z + "$2$3$1" + He + "$2box$3") + e
        }
        break;
    case 5936:
        switch ($e(e, t + 11)) {
        case 114:
            return Z + e + He + J(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
            return Z + e + He + J(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
            return Z + e + He + J(e, /[svh]\w+-[tblr]{2}/, "lr") + e
        }
        return Z + e + He + e + e
    }
    return e
}
var T1 = function(t, r, n, o) {
    if (t.length > -1 && !t.return)
        switch (t.type) {
        case Bd:
            t.return = gx(t.value, t.length);
            break;
        case dx:
            return Ln([jo(t, {
                value: J(t.value, "@", "@" + Z)
            })], o);
        case Wd:
            if (t.length)
                return p1(t.props, function(a) {
                    switch (m1(a, /(::plac\w+|:read-\w+)/)) {
                    case ":read-only":
                    case ":read-write":
                        return Ln([jo(t, {
                            props: [J(a, /:(read-\w+)/, ":" + qa + "$1")]
                        })], o);
                    case "::placeholder":
                        return Ln([jo(t, {
                            props: [J(a, /:(plac\w+)/, ":" + Z + "input-$1")]
                        }), jo(t, {
                            props: [J(a, /:(plac\w+)/, ":" + qa + "$1")]
                        }), jo(t, {
                            props: [J(a, /:(plac\w+)/, He + "input-$1")]
                        })], o)
                    }
                    return ""
                })
        }
}
  , A1 = [T1]
  , xx = function(t) {
    var r = t.key;
    if (r === "css") {
        var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(n, function(x) {
            var w = x.getAttribute("data-emotion");
            w.indexOf(" ") !== -1 && (document.head.appendChild(x),
            x.setAttribute("data-s", ""))
        })
    }
    var o = t.stylisPlugins || A1, a = {}, i, l = [];
    i = t.container || document.head,
    Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + r + ' "]'), function(x) {
        for (var w = x.getAttribute("data-emotion").split(" "), p = 1; p < w.length; p++)
            a[w[p]] = !0;
        l.push(x)
    });
    var c, u = [I1, E1];
    {
        var h, d = [N1, C1(function(x) {
            h.insert(x)
        })], m = S1(u.concat(o, d)), v = function(w) {
            return Ln(j1(w), m)
        };
        c = function(w, p, f, g) {
            h = f,
            v(w ? w + "{" + p.styles + "}" : p.styles),
            g && (y.inserted[p.name] = !0)
        }
    }
    var y = {
        key: r,
        sheet: new l1({
            key: r,
            container: i,
            nonce: t.nonce,
            speedy: t.speedy,
            prepend: t.prepend,
            insertionPoint: t.insertionPoint
        }),
        nonce: t.nonce,
        inserted: a,
        registered: {},
        insert: c
    };
    return y.sheet.hydrate(l),
    y
}
  , yx = {
    exports: {}
}
  , se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae = typeof Symbol == "function" && Symbol.for
  , Hd = Ae ? Symbol.for("react.element") : 60103
  , Ud = Ae ? Symbol.for("react.portal") : 60106
  , Zi = Ae ? Symbol.for("react.fragment") : 60107
  , Ji = Ae ? Symbol.for("react.strict_mode") : 60108
  , el = Ae ? Symbol.for("react.profiler") : 60114
  , tl = Ae ? Symbol.for("react.provider") : 60109
  , rl = Ae ? Symbol.for("react.context") : 60110
  , Gd = Ae ? Symbol.for("react.async_mode") : 60111
  , nl = Ae ? Symbol.for("react.concurrent_mode") : 60111
  , ol = Ae ? Symbol.for("react.forward_ref") : 60112
  , sl = Ae ? Symbol.for("react.suspense") : 60113
  , R1 = Ae ? Symbol.for("react.suspense_list") : 60120
  , al = Ae ? Symbol.for("react.memo") : 60115
  , il = Ae ? Symbol.for("react.lazy") : 60116
  , L1 = Ae ? Symbol.for("react.block") : 60121
  , $1 = Ae ? Symbol.for("react.fundamental") : 60117
  , M1 = Ae ? Symbol.for("react.responder") : 60118
  , z1 = Ae ? Symbol.for("react.scope") : 60119;
function xt(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
        case Hd:
            switch (e = e.type,
            e) {
            case Gd:
            case nl:
            case Zi:
            case el:
            case Ji:
            case sl:
                return e;
            default:
                switch (e = e && e.$$typeof,
                e) {
                case rl:
                case ol:
                case il:
                case al:
                case tl:
                    return e;
                default:
                    return t
                }
            }
        case Ud:
            return t
        }
    }
}
function vx(e) {
    return xt(e) === nl
}
se.AsyncMode = Gd;
se.ConcurrentMode = nl;
se.ContextConsumer = rl;
se.ContextProvider = tl;
se.Element = Hd;
se.ForwardRef = ol;
se.Fragment = Zi;
se.Lazy = il;
se.Memo = al;
se.Portal = Ud;
se.Profiler = el;
se.StrictMode = Ji;
se.Suspense = sl;
se.isAsyncMode = function(e) {
    return vx(e) || xt(e) === Gd
}
;
se.isConcurrentMode = vx;
se.isContextConsumer = function(e) {
    return xt(e) === rl
}
;
se.isContextProvider = function(e) {
    return xt(e) === tl
}
;
se.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Hd
}
;
se.isForwardRef = function(e) {
    return xt(e) === ol
}
;
se.isFragment = function(e) {
    return xt(e) === Zi
}
;
se.isLazy = function(e) {
    return xt(e) === il
}
;
se.isMemo = function(e) {
    return xt(e) === al
}
;
se.isPortal = function(e) {
    return xt(e) === Ud
}
;
se.isProfiler = function(e) {
    return xt(e) === el
}
;
se.isStrictMode = function(e) {
    return xt(e) === Ji
}
;
se.isSuspense = function(e) {
    return xt(e) === sl
}
;
se.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Zi || e === nl || e === el || e === Ji || e === sl || e === R1 || typeof e == "object" && e !== null && (e.$$typeof === il || e.$$typeof === al || e.$$typeof === tl || e.$$typeof === rl || e.$$typeof === ol || e.$$typeof === $1 || e.$$typeof === M1 || e.$$typeof === z1 || e.$$typeof === L1)
}
;
se.typeOf = xt;
yx.exports = se;
var D1 = yx.exports
  , bx = D1
  , W1 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
}
  , B1 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
}
  , wx = {};
wx[bx.ForwardRef] = W1;
wx[bx.Memo] = B1;
var F1 = !0;
function H1(e, t, r) {
    var n = "";
    return r.split(" ").forEach(function(o) {
        e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " "
    }),
    n
}
var jx = function(t, r, n) {
    var o = t.key + "-" + r.name;
    (n === !1 || F1 === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles)
}
  , kx = function(t, r, n) {
    jx(t, r, n);
    var o = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
        var a = r;
        do
            t.insert(r === a ? "." + o : "", a, t.sheet, !0),
            a = a.next;
        while (a !== void 0)
    }
};
function U1(e) {
    for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n,
    o -= 4)
        r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24,
        r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16),
        r ^= r >>> 24,
        t = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    switch (o) {
    case 3:
        t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
        t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
        t ^= e.charCodeAt(n) & 255,
        t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16)
    }
    return t ^= t >>> 13,
    t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16),
    ((t ^ t >>> 15) >>> 0).toString(36)
}
var Nx = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
}
  , G1 = /[A-Z]|^ms/g
  , V1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g
  , Sx = function(t) {
    return t.charCodeAt(1) === 45
}
  , Cf = function(t) {
    return t != null && typeof t != "boolean"
}
  , ql = cx(function(e) {
    return Sx(e) ? e : e.replace(G1, "-$&").toLowerCase()
})
  , Of = function(t, r) {
    switch (t) {
    case "animation":
    case "animationName":
        if (typeof r == "string")
            return r.replace(V1, function(n, o, a) {
                return Ft = {
                    name: o,
                    styles: a,
                    next: Ft
                },
                o
            })
    }
    return Nx[t] !== 1 && !Sx(t) && typeof r == "number" && r !== 0 ? r + "px" : r
};
function cs(e, t, r) {
    if (r == null)
        return "";
    if (r.__emotion_styles !== void 0)
        return r;
    switch (typeof r) {
    case "boolean":
        return "";
    case "object":
        {
            if (r.anim === 1)
                return Ft = {
                    name: r.name,
                    styles: r.styles,
                    next: Ft
                },
                r.name;
            if (r.styles !== void 0) {
                var n = r.next;
                if (n !== void 0)
                    for (; n !== void 0; )
                        Ft = {
                            name: n.name,
                            styles: n.styles,
                            next: Ft
                        },
                        n = n.next;
                var o = r.styles + ";";
                return o
            }
            return Y1(e, t, r)
        }
    case "function":
        {
            if (e !== void 0) {
                var a = Ft
                  , i = r(e);
                return Ft = a,
                cs(e, t, i)
            }
            break
        }
    }
    if (t == null)
        return r;
    var l = t[r];
    return l !== void 0 ? l : r
}
function Y1(e, t, r) {
    var n = "";
    if (Array.isArray(r))
        for (var o = 0; o < r.length; o++)
            n += cs(e, t, r[o]) + ";";
    else
        for (var a in r) {
            var i = r[a];
            if (typeof i != "object")
                t != null && t[i] !== void 0 ? n += a + "{" + t[i] + "}" : Cf(i) && (n += ql(a) + ":" + Of(a, i) + ";");
            else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
                for (var l = 0; l < i.length; l++)
                    Cf(i[l]) && (n += ql(a) + ":" + Of(a, i[l]) + ";");
            else {
                var c = cs(e, t, i);
                switch (a) {
                case "animation":
                case "animationName":
                    {
                        n += ql(a) + ":" + c + ";";
                        break
                    }
                default:
                    n += a + "{" + c + "}"
                }
            }
        }
    return n
}
var _f = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Ft, Vd = function(t, r, n) {
    if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
        return t[0];
    var o = !0
      , a = "";
    Ft = void 0;
    var i = t[0];
    i == null || i.raw === void 0 ? (o = !1,
    a += cs(n, r, i)) : a += i[0];
    for (var l = 1; l < t.length; l++)
        a += cs(n, r, t[l]),
        o && (a += i[l]);
    _f.lastIndex = 0;
    for (var c = "", u; (u = _f.exec(a)) !== null; )
        c += "-" + u[1];
    var h = U1(a) + c;
    return {
        name: h,
        styles: a,
        next: Ft
    }
}, Q1 = function(t) {
    return t()
}, Cx = gc.useInsertionEffect ? gc.useInsertionEffect : !1, K1 = Cx || Q1, Pf = Cx || E.useLayoutEffect, Ox = E.createContext(typeof HTMLElement < "u" ? xx({
    key: "css"
}) : null), q1 = Ox.Provider, _x = function(t) {
    return E.forwardRef(function(r, n) {
        var o = E.useContext(Ox);
        return t(r, o, n)
    })
}, ll = E.createContext({}), Xl = {
    exports: {}
}, If;
function Px() {
    return If || (If = 1,
    function(e) {
        function t() {
            return e.exports = t = Object.assign ? Object.assign.bind() : function(r) {
                for (var n = 1; n < arguments.length; n++) {
                    var o = arguments[n];
                    for (var a in o)
                        ({}).hasOwnProperty.call(o, a) && (r[a] = o[a])
                }
                return r
            }
            ,
            e.exports.__esModule = !0,
            e.exports.default = e.exports,
            t.apply(null, arguments)
        }
        e.exports = t,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    }(Xl)),
    Xl.exports
}
Px();
var X1 = _x(function(e, t) {
    var r = e.styles
      , n = Vd([r], void 0, E.useContext(ll))
      , o = E.useRef();
    return Pf(function() {
        var a = t.key + "-global"
          , i = new t.sheet.constructor({
            key: a,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy
        })
          , l = !1
          , c = document.querySelector('style[data-emotion="' + a + " " + n.name + '"]');
        return t.sheet.tags.length && (i.before = t.sheet.tags[0]),
        c !== null && (l = !0,
        c.setAttribute("data-emotion", a),
        i.hydrate([c])),
        o.current = [i, l],
        function() {
            i.flush()
        }
    }, [t]),
    Pf(function() {
        var a = o.current
          , i = a[0]
          , l = a[1];
        if (l) {
            a[1] = !1;
            return
        }
        if (n.next !== void 0 && kx(t, n.next, !0),
        i.tags.length) {
            var c = i.tags[i.tags.length - 1].nextElementSibling;
            i.before = c,
            i.flush()
        }
        t.insert("", n, i, !1)
    }, [t, n.name]),
    null
});
function Ix() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
    return Vd(t)
}
var Z1 = function() {
    var t = Ix.apply(void 0, arguments)
      , r = "animation-" + t.name;
    return {
        name: r,
        styles: "@keyframes " + r + "{" + t.styles + "}",
        anim: 1,
        toString: function() {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
        }
    }
}
  , J1 = s1
  , e2 = function(t) {
    return t !== "theme"
}
  , Ef = function(t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? J1 : e2
}
  , Tf = function(t, r, n) {
    var o;
    if (r) {
        var a = r.shouldForwardProp;
        o = t.__emotion_forwardProp && a ? function(i) {
            return t.__emotion_forwardProp(i) && a(i)
        }
        : a
    }
    return typeof o != "function" && n && (o = t.__emotion_forwardProp),
    o
}
  , t2 = function(t) {
    var r = t.cache
      , n = t.serialized
      , o = t.isStringTag;
    return jx(r, n, o),
    K1(function() {
        return kx(r, n, o)
    }),
    null
}
  , r2 = function e(t, r) {
    var n = t.__emotion_real === t, o = n && t.__emotion_base || t, a, i;
    r !== void 0 && (a = r.label,
    i = r.target);
    var l = Tf(t, r, n)
      , c = l || Ef(o)
      , u = !c("as");
    return function() {
        var h = arguments
          , d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
        if (a !== void 0 && d.push("label:" + a + ";"),
        h[0] == null || h[0].raw === void 0)
            d.push.apply(d, h);
        else {
            d.push(h[0][0]);
            for (var m = h.length, v = 1; v < m; v++)
                d.push(h[v], h[0][v])
        }
        var y = _x(function(x, w, p) {
            var f = u && x.as || o
              , g = ""
              , b = []
              , j = x;
            if (x.theme == null) {
                j = {};
                for (var k in x)
                    j[k] = x[k];
                j.theme = E.useContext(ll)
            }
            typeof x.className == "string" ? g = H1(w.registered, b, x.className) : x.className != null && (g = x.className + " ");
            var N = Vd(d.concat(b), w.registered, j);
            g += w.key + "-" + N.name,
            i !== void 0 && (g += " " + i);
            var L = u && l === void 0 ? Ef(f) : c
              , P = {};
            for (var I in x)
                u && I === "as" || L(I) && (P[I] = x[I]);
            return P.className = g,
            P.ref = p,
            E.createElement(E.Fragment, null, E.createElement(t2, {
                cache: w,
                serialized: N,
                isStringTag: typeof f == "string"
            }), E.createElement(f, P))
        });
        return y.displayName = a !== void 0 ? a : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")",
        y.defaultProps = t.defaultProps,
        y.__emotion_real = y,
        y.__emotion_base = o,
        y.__emotion_styles = d,
        y.__emotion_forwardProp = l,
        Object.defineProperty(y, "toString", {
            value: function() {
                return "." + i
            }
        }),
        y.withComponent = function(x, w) {
            return e(x, te({}, r, w, {
                shouldForwardProp: Tf(y, w, !0)
            })).apply(void 0, d)
        }
        ,
        y
    }
}
  , n2 = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]
  , hu = r2.bind();
n2.forEach(function(e) {
    hu[e] = hu(e)
});
let fu;
typeof document == "object" && (fu = xx({
    key: "css",
    prepend: !0
}));
function o2(e) {
    const {injectFirst: t, children: r} = e;
    return t && fu ? s.jsx(q1, {
        value: fu,
        children: r
    }) : r
}
function s2(e) {
    return e == null || Object.keys(e).length === 0
}
function a2(e) {
    const {styles: t, defaultTheme: r={}} = e
      , n = typeof t == "function" ? o => t(s2(o) ? r : o) : t;
    return s.jsx(X1, {
        styles: n
    })
}
function Ex(e, t) {
    return hu(e, t)
}
const i2 = (e, t) => {
    Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles))
}
  , l2 = Object.freeze(Object.defineProperty({
    __proto__: null,
    GlobalStyles: a2,
    StyledEngineProvider: o2,
    ThemeContext: ll,
    css: Ix,
    default: Ex,
    internal_processStyles: i2,
    keyframes: Z1
}, Symbol.toStringTag, {
    value: "Module"
}));
function c2(e) {
    return Object.keys(e).length === 0
}
function u2(e=null) {
    const t = E.useContext(ll);
    return !t || c2(t) ? e : t
}
const d2 = Dd();
function Tx(e=d2) {
    return u2(e)
}
function h2({props: e, name: t, defaultTheme: r, themeId: n}) {
    let o = Tx(r);
    return n && (o = o[n] || o),
    dw({
        theme: o,
        name: t,
        props: e
    })
}
const f2 = ["sx"]
  , m2 = e => {
    var t, r;
    const n = {
        systemProps: {},
        otherProps: {}
    }
      , o = (t = e == null || (r = e.theme) == null ? void 0 : r.unstable_sxConfig) != null ? t : ks;
    return Object.keys(e).forEach(a => {
        o[a] ? n.systemProps[a] = e[a] : n.otherProps[a] = e[a]
    }
    ),
    n
}
;
function Ax(e) {
    const {sx: t} = e
      , r = lr(e, f2)
      , {systemProps: n, otherProps: o} = m2(r);
    let a;
    return Array.isArray(t) ? a = [n, ...t] : typeof t == "function" ? a = (...i) => {
        const l = t(...i);
        return yr(l) ? te({}, n, l) : n
    }
    : a = te({}, n, t),
    te({}, o, {
        sx: a
    })
}
const p2 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ns,
    extendSxProp: Ax,
    unstable_createStyleFunctionSx: ix,
    unstable_defaultSxConfig: ks
}, Symbol.toStringTag, {
    value: "Module"
}));
function g2(e, t) {
    return te({
        toolbar: {
            minHeight: 56,
            [e.up("xs")]: {
                "@media (orientation: landscape)": {
                    minHeight: 48
                }
            },
            [e.up("sm")]: {
                minHeight: 64
            }
        }
    }, t)
}
var ke = {}
  , Rx = {
    exports: {}
};
(function(e) {
    function t(r) {
        return r && r.__esModule ? r : {
            default: r
        }
    }
    e.exports = t,
    e.exports.__esModule = !0,
    e.exports.default = e.exports
}
)(Rx);
var Lx = Rx.exports;
const x2 = ar(Jb)
  , y2 = ar(uw);
var $x = Lx;
Object.defineProperty(ke, "__esModule", {
    value: !0
});
ke.alpha = Wx;
ke.blend = E2;
ke.colorChannel = void 0;
var v2 = ke.darken = Qd;
ke.decomposeColor = Ct;
ke.emphasize = Bx;
var b2 = ke.getContrastRatio = C2;
ke.getLuminance = Xa;
ke.hexToRgb = Mx;
ke.hslToRgb = Dx;
var w2 = ke.lighten = Kd;
ke.private_safeAlpha = O2;
ke.private_safeColorChannel = void 0;
ke.private_safeDarken = _2;
ke.private_safeEmphasize = I2;
ke.private_safeLighten = P2;
ke.recomposeColor = lo;
ke.rgbToHex = S2;
var Af = $x(x2)
  , j2 = $x(y2);
function Yd(e, t=0, r=1) {
    return (0,
    j2.default)(e, t, r)
}
function Mx(e) {
    e = e.slice(1);
    const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`,"g");
    let r = e.match(t);
    return r && r[0].length === 1 && (r = r.map(n => n + n)),
    r ? `rgb${r.length === 4 ? "a" : ""}(${r.map( (n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : ""
}
function k2(e) {
    const t = e.toString(16);
    return t.length === 1 ? `0${t}` : t
}
function Ct(e) {
    if (e.type)
        return e;
    if (e.charAt(0) === "#")
        return Ct(Mx(e));
    const t = e.indexOf("(")
      , r = e.substring(0, t);
    if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
        throw new Error((0,
        Af.default)(9, e));
    let n = e.substring(t + 1, e.length - 1), o;
    if (r === "color") {
        if (n = n.split(" "),
        o = n.shift(),
        n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)),
        ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
            throw new Error((0,
            Af.default)(10, o))
    } else
        n = n.split(",");
    return n = n.map(a => parseFloat(a)),
    {
        type: r,
        values: n,
        colorSpace: o
    }
}
const zx = e => {
    const t = Ct(e);
    return t.values.slice(0, 3).map( (r, n) => t.type.indexOf("hsl") !== -1 && n !== 0 ? `${r}%` : r).join(" ")
}
;
ke.colorChannel = zx;
const N2 = (e, t) => {
    try {
        return zx(e)
    } catch {
        return e
    }
}
;
ke.private_safeColorChannel = N2;
function lo(e) {
    const {type: t, colorSpace: r} = e;
    let {values: n} = e;
    return t.indexOf("rgb") !== -1 ? n = n.map( (o, a) => a < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`,
    n[2] = `${n[2]}%`),
    t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`,
    `${t}(${n})`
}
function S2(e) {
    if (e.indexOf("#") === 0)
        return e;
    const {values: t} = Ct(e);
    return `#${t.map( (r, n) => k2(n === 3 ? Math.round(255 * r) : r)).join("")}`
}
function Dx(e) {
    e = Ct(e);
    const {values: t} = e
      , r = t[0]
      , n = t[1] / 100
      , o = t[2] / 100
      , a = n * Math.min(o, 1 - o)
      , i = (u, h=(u + r / 30) % 12) => o - a * Math.max(Math.min(h - 3, 9 - h, 1), -1);
    let l = "rgb";
    const c = [Math.round(i(0) * 255), Math.round(i(8) * 255), Math.round(i(4) * 255)];
    return e.type === "hsla" && (l += "a",
    c.push(t[3])),
    lo({
        type: l,
        values: c
    })
}
function Xa(e) {
    e = Ct(e);
    let t = e.type === "hsl" || e.type === "hsla" ? Ct(Dx(e)).values : e.values;
    return t = t.map(r => (e.type !== "color" && (r /= 255),
    r <= .03928 ? r / 12.92 : ((r + .055) / 1.055) ** 2.4)),
    Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3))
}
function C2(e, t) {
    const r = Xa(e)
      , n = Xa(t);
    return (Math.max(r, n) + .05) / (Math.min(r, n) + .05)
}
function Wx(e, t) {
    return e = Ct(e),
    t = Yd(t),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t,
    lo(e)
}
function O2(e, t, r) {
    try {
        return Wx(e, t)
    } catch {
        return e
    }
}
function Qd(e, t) {
    if (e = Ct(e),
    t = Yd(t),
    e.type.indexOf("hsl") !== -1)
        e.values[2] *= 1 - t;
    else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
        for (let r = 0; r < 3; r += 1)
            e.values[r] *= 1 - t;
    return lo(e)
}
function _2(e, t, r) {
    try {
        return Qd(e, t)
    } catch {
        return e
    }
}
function Kd(e, t) {
    if (e = Ct(e),
    t = Yd(t),
    e.type.indexOf("hsl") !== -1)
        e.values[2] += (100 - e.values[2]) * t;
    else if (e.type.indexOf("rgb") !== -1)
        for (let r = 0; r < 3; r += 1)
            e.values[r] += (255 - e.values[r]) * t;
    else if (e.type.indexOf("color") !== -1)
        for (let r = 0; r < 3; r += 1)
            e.values[r] += (1 - e.values[r]) * t;
    return lo(e)
}
function P2(e, t, r) {
    try {
        return Kd(e, t)
    } catch {
        return e
    }
}
function Bx(e, t=.15) {
    return Xa(e) > .5 ? Qd(e, t) : Kd(e, t)
}
function I2(e, t, r) {
    try {
        return Bx(e, t)
    } catch {
        return e
    }
}
function E2(e, t, r, n=1) {
    const o = (c, u) => Math.round((c ** (1 / n) * (1 - r) + u ** (1 / n) * r) ** n)
      , a = Ct(e)
      , i = Ct(t)
      , l = [o(a.values[0], i.values[0]), o(a.values[1], i.values[1]), o(a.values[2], i.values[2])];
    return lo({
        type: "rgb",
        values: l
    })
}
const us = {
    black: "#000",
    white: "#fff"
}
  , T2 = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161"
}
  , cn = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff"
}
  , un = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000"
}
  , ko = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00"
}
  , dn = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff"
}
  , hn = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea"
}
  , fn = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853"
}
  , A2 = ["mode", "contrastThreshold", "tonalOffset"]
  , Rf = {
    text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)"
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
        paper: us.white,
        default: us.white
    },
    action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.04)",
        hoverOpacity: .04,
        selected: "rgba(0, 0, 0, 0.08)",
        selectedOpacity: .08,
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledOpacity: .38,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: .12,
        activatedOpacity: .12
    }
}
  , Zl = {
    text: {
        primary: us.white,
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
        paper: "#121212",
        default: "#121212"
    },
    action: {
        active: us.white,
        hover: "rgba(255, 255, 255, 0.08)",
        hoverOpacity: .08,
        selected: "rgba(255, 255, 255, 0.16)",
        selectedOpacity: .16,
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        disabledOpacity: .38,
        focus: "rgba(255, 255, 255, 0.12)",
        focusOpacity: .12,
        activatedOpacity: .24
    }
};
function Lf(e, t, r, n) {
    const o = n.light || n
      , a = n.dark || n * 1.5;
    e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = w2(e.main, o) : t === "dark" && (e.dark = v2(e.main, a)))
}
function R2(e="light") {
    return e === "dark" ? {
        main: dn[200],
        light: dn[50],
        dark: dn[400]
    } : {
        main: dn[700],
        light: dn[400],
        dark: dn[800]
    }
}
function L2(e="light") {
    return e === "dark" ? {
        main: cn[200],
        light: cn[50],
        dark: cn[400]
    } : {
        main: cn[500],
        light: cn[300],
        dark: cn[700]
    }
}
function $2(e="light") {
    return e === "dark" ? {
        main: un[500],
        light: un[300],
        dark: un[700]
    } : {
        main: un[700],
        light: un[400],
        dark: un[800]
    }
}
function M2(e="light") {
    return e === "dark" ? {
        main: hn[400],
        light: hn[300],
        dark: hn[700]
    } : {
        main: hn[700],
        light: hn[500],
        dark: hn[900]
    }
}
function z2(e="light") {
    return e === "dark" ? {
        main: fn[400],
        light: fn[300],
        dark: fn[700]
    } : {
        main: fn[800],
        light: fn[500],
        dark: fn[900]
    }
}
function D2(e="light") {
    return e === "dark" ? {
        main: ko[400],
        light: ko[300],
        dark: ko[700]
    } : {
        main: "#ed6c02",
        light: ko[500],
        dark: ko[900]
    }
}
function W2(e) {
    const {mode: t="light", contrastThreshold: r=3, tonalOffset: n=.2} = e
      , o = lr(e, A2)
      , a = e.primary || R2(t)
      , i = e.secondary || L2(t)
      , l = e.error || $2(t)
      , c = e.info || M2(t)
      , u = e.success || z2(t)
      , h = e.warning || D2(t);
    function d(x) {
        return b2(x, Zl.text.primary) >= r ? Zl.text.primary : Rf.text.primary
    }
    const m = ({color: x, name: w, mainShade: p=500, lightShade: f=300, darkShade: g=700}) => {
        if (x = te({}, x),
        !x.main && x[p] && (x.main = x[p]),
        !x.hasOwnProperty("main"))
            throw new Error(as(11, w ? ` (${w})` : "", p));
        if (typeof x.main != "string")
            throw new Error(as(12, w ? ` (${w})` : "", JSON.stringify(x.main)));
        return Lf(x, "light", f, n),
        Lf(x, "dark", g, n),
        x.contrastText || (x.contrastText = d(x.main)),
        x
    }
      , v = {
        dark: Zl,
        light: Rf
    };
    return Yt(te({
        common: te({}, us),
        mode: t,
        primary: m({
            color: a,
            name: "primary"
        }),
        secondary: m({
            color: i,
            name: "secondary",
            mainShade: "A400",
            lightShade: "A200",
            darkShade: "A700"
        }),
        error: m({
            color: l,
            name: "error"
        }),
        warning: m({
            color: h,
            name: "warning"
        }),
        info: m({
            color: c,
            name: "info"
        }),
        success: m({
            color: u,
            name: "success"
        }),
        grey: T2,
        contrastThreshold: r,
        getContrastText: d,
        augmentColor: m,
        tonalOffset: n
    }, v[t]), o)
}
const B2 = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function F2(e) {
    return Math.round(e * 1e5) / 1e5
}
const $f = {
    textTransform: "uppercase"
}
  , Mf = '"Roboto", "Helvetica", "Arial", sans-serif';
function H2(e, t) {
    const r = typeof t == "function" ? t(e) : t
      , {fontFamily: n=Mf, fontSize: o=14, fontWeightLight: a=300, fontWeightRegular: i=400, fontWeightMedium: l=500, fontWeightBold: c=700, htmlFontSize: u=16, allVariants: h, pxToRem: d} = r
      , m = lr(r, B2)
      , v = o / 14
      , y = d || (p => `${p / u * v}rem`)
      , x = (p, f, g, b, j) => te({
        fontFamily: n,
        fontWeight: p,
        fontSize: y(f),
        lineHeight: g
    }, n === Mf ? {
        letterSpacing: `${F2(b / f)}em`
    } : {}, j, h)
      , w = {
        h1: x(a, 96, 1.167, -1.5),
        h2: x(a, 60, 1.2, -.5),
        h3: x(i, 48, 1.167, 0),
        h4: x(i, 34, 1.235, .25),
        h5: x(i, 24, 1.334, 0),
        h6: x(l, 20, 1.6, .15),
        subtitle1: x(i, 16, 1.75, .15),
        subtitle2: x(l, 14, 1.57, .1),
        body1: x(i, 16, 1.5, .15),
        body2: x(i, 14, 1.43, .15),
        button: x(l, 14, 1.75, .4, $f),
        caption: x(i, 12, 1.66, .4),
        overline: x(i, 12, 2.66, 1, $f),
        inherit: {
            fontFamily: "inherit",
            fontWeight: "inherit",
            fontSize: "inherit",
            lineHeight: "inherit",
            letterSpacing: "inherit"
        }
    };
    return Yt(te({
        htmlFontSize: u,
        pxToRem: y,
        fontFamily: n,
        fontSize: o,
        fontWeightLight: a,
        fontWeightRegular: i,
        fontWeightMedium: l,
        fontWeightBold: c
    }, w), m, {
        clone: !1
    })
}
const U2 = .2
  , G2 = .14
  , V2 = .12;
function ue(...e) {
    return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${U2})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${G2})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${V2})`].join(",")
}
const Y2 = ["none", ue(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ue(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ue(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ue(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ue(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ue(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ue(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ue(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ue(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ue(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ue(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ue(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ue(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ue(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ue(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ue(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ue(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ue(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ue(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ue(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ue(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ue(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ue(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ue(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)]
  , Q2 = ["duration", "easing", "delay"]
  , K2 = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}
  , q2 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
};
function zf(e) {
    return `${Math.round(e)}ms`
}
function X2(e) {
    if (!e)
        return 0;
    const t = e / 36;
    return Math.round((4 + 15 * t ** .25 + t / 5) * 10)
}
function Z2(e) {
    const t = te({}, K2, e.easing)
      , r = te({}, q2, e.duration);
    return te({
        getAutoHeightDuration: X2,
        create: (o=["all"], a={}) => {
            const {duration: i=r.standard, easing: l=t.easeInOut, delay: c=0} = a;
            return lr(a, Q2),
            (Array.isArray(o) ? o : [o]).map(u => `${u} ${typeof i == "string" ? i : zf(i)} ${l} ${typeof c == "string" ? c : zf(c)}`).join(",")
        }
    }, e, {
        easing: t,
        duration: r
    })
}
const J2 = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
}
  , ej = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Fx(e={}, ...t) {
    const {mixins: r={}, palette: n={}, transitions: o={}, typography: a={}} = e
      , i = lr(e, ej);
    if (e.vars)
        throw new Error(as(18));
    const l = W2(n)
      , c = Dd(e);
    let u = Yt(c, {
        mixins: g2(c.breakpoints, r),
        palette: l,
        shadows: Y2.slice(),
        typography: H2(l, a),
        transitions: Z2(o),
        zIndex: te({}, J2)
    });
    return u = Yt(u, i),
    u = t.reduce( (h, d) => Yt(h, d), u),
    u.unstable_sxConfig = te({}, ks, i == null ? void 0 : i.unstable_sxConfig),
    u.unstable_sx = function(d) {
        return Ns({
            sx: d,
            theme: this
        })
    }
    ,
    u
}
const Hx = Fx()
  , qd = "$$material";
function tj({props: e, name: t}) {
    return h2({
        props: e,
        name: t,
        defaultTheme: Hx,
        themeId: qd
    })
}
var Cs = {}, Jl = {
    exports: {}
}, Df;
function rj() {
    return Df || (Df = 1,
    function(e) {
        function t(r, n) {
            if (r == null)
                return {};
            var o = {};
            for (var a in r)
                if ({}.hasOwnProperty.call(r, a)) {
                    if (n.indexOf(a) >= 0)
                        continue;
                    o[a] = r[a]
                }
            return o
        }
        e.exports = t,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    }(Jl)),
    Jl.exports
}
const nj = ar(l2)
  , oj = ar(Zb)
  , sj = ar(sw)
  , aj = ar(ow)
  , ij = ar(n1)
  , lj = ar(p2);
var co = Lx;
Object.defineProperty(Cs, "__esModule", {
    value: !0
});
var cj = Cs.default = jj;
Cs.shouldForwardProp = ga;
Cs.systemDefaultTheme = void 0;
var yt = co(Px())
  , mu = co(rj())
  , Wf = gj(nj)
  , uj = oj;
co(sj);
co(aj);
var dj = co(ij)
  , hj = co(lj);
const fj = ["ownerState"]
  , mj = ["variants"]
  , pj = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Ux(e) {
    if (typeof WeakMap != "function")
        return null;
    var t = new WeakMap
      , r = new WeakMap;
    return (Ux = function(n) {
        return n ? r : t
    }
    )(e)
}
function gj(e, t) {
    if (e && e.__esModule)
        return e;
    if (e === null || typeof e != "object" && typeof e != "function")
        return {
            default: e
        };
    var r = Ux(t);
    if (r && r.has(e))
        return r.get(e);
    var n = {
        __proto__: null
    }
      , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a in e)
        if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
            i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
        }
    return n.default = e,
    r && r.set(e, n),
    n
}
function xj(e) {
    return Object.keys(e).length === 0
}
function yj(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96
}
function ga(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as"
}
const vj = Cs.systemDefaultTheme = (0,
dj.default)()
  , bj = e => e && e.charAt(0).toLowerCase() + e.slice(1);
function Xs({defaultTheme: e, theme: t, themeId: r}) {
    return xj(t) ? e : t[r] || t
}
function wj(e) {
    return e ? (t, r) => r[e] : null
}
function xa(e, t) {
    let {ownerState: r} = t
      , n = (0,
    mu.default)(t, fj);
    const o = typeof e == "function" ? e((0,
    yt.default)({
        ownerState: r
    }, n)) : e;
    if (Array.isArray(o))
        return o.flatMap(a => xa(a, (0,
        yt.default)({
            ownerState: r
        }, n)));
    if (o && typeof o == "object" && Array.isArray(o.variants)) {
        const {variants: a=[]} = o;
        let l = (0,
        mu.default)(o, mj);
        return a.forEach(c => {
            let u = !0;
            typeof c.props == "function" ? u = c.props((0,
            yt.default)({
                ownerState: r
            }, n, r)) : Object.keys(c.props).forEach(h => {
                (r == null ? void 0 : r[h]) !== c.props[h] && n[h] !== c.props[h] && (u = !1)
            }
            ),
            u && (Array.isArray(l) || (l = [l]),
            l.push(typeof c.style == "function" ? c.style((0,
            yt.default)({
                ownerState: r
            }, n, r)) : c.style))
        }
        ),
        l
    }
    return o
}
function jj(e={}) {
    const {themeId: t, defaultTheme: r=vj, rootShouldForwardProp: n=ga, slotShouldForwardProp: o=ga} = e
      , a = i => (0,
    hj.default)((0,
    yt.default)({}, i, {
        theme: Xs((0,
        yt.default)({}, i, {
            defaultTheme: r,
            themeId: t
        }))
    }));
    return a.__mui_systemSx = !0,
    (i, l={}) => {
        (0,
        Wf.internal_processStyles)(i, j => j.filter(k => !(k != null && k.__mui_systemSx)));
        const {name: c, slot: u, skipVariantsResolver: h, skipSx: d, overridesResolver: m=wj(bj(u))} = l
          , v = (0,
        mu.default)(l, pj)
          , y = h !== void 0 ? h : u && u !== "Root" && u !== "root" || !1
          , x = d || !1;
        let w, p = ga;
        u === "Root" || u === "root" ? p = n : u ? p = o : yj(i) && (p = void 0);
        const f = (0,
        Wf.default)(i, (0,
        yt.default)({
            shouldForwardProp: p,
            label: w
        }, v))
          , g = j => typeof j == "function" && j.__emotion_real !== j || (0,
        uj.isPlainObject)(j) ? k => xa(j, (0,
        yt.default)({}, k, {
            theme: Xs({
                theme: k.theme,
                defaultTheme: r,
                themeId: t
            })
        })) : j
          , b = (j, ...k) => {
            let N = g(j);
            const L = k ? k.map(g) : [];
            c && m && L.push(B => {
                const D = Xs((0,
                yt.default)({}, B, {
                    defaultTheme: r,
                    themeId: t
                }));
                if (!D.components || !D.components[c] || !D.components[c].styleOverrides)
                    return null;
                const F = D.components[c].styleOverrides
                  , C = {};
                return Object.entries(F).forEach( ([O,_]) => {
                    C[O] = xa(_, (0,
                    yt.default)({}, B, {
                        theme: D
                    }))
                }
                ),
                m(B, C)
            }
            ),
            c && !y && L.push(B => {
                var D;
                const F = Xs((0,
                yt.default)({}, B, {
                    defaultTheme: r,
                    themeId: t
                }))
                  , C = F == null || (D = F.components) == null || (D = D[c]) == null ? void 0 : D.variants;
                return xa({
                    variants: C
                }, (0,
                yt.default)({}, B, {
                    theme: F
                }))
            }
            ),
            x || L.push(a);
            const P = L.length - k.length;
            if (Array.isArray(j) && P > 0) {
                const B = new Array(P).fill("");
                N = [...j, ...B],
                N.raw = [...j.raw, ...B]
            }
            const I = f(N, ...L);
            return i.muiName && (I.muiName = i.muiName),
            I
        }
        ;
        return f.withConfig && (b.withConfig = f.withConfig),
        b
    }
}
function kj(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as"
}
const Nj = e => kj(e) && e !== "classes"
  , Sj = cj({
    themeId: qd,
    defaultTheme: Hx,
    rootShouldForwardProp: Nj
});
function Cj(e) {
    return ex("MuiSvgIcon", e)
}
tx("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Oj = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"]
  , _j = e => {
    const {color: t, fontSize: r, classes: n} = e
      , o = {
        root: ["root", t !== "inherit" && `color${rn(t)}`, `fontSize${rn(r)}`]
    };
    return aw(o, Cj, n)
}
  , Pj = Sj("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
        const {ownerState: r} = e;
        return [t.root, r.color !== "inherit" && t[`color${rn(r.color)}`], t[`fontSize${rn(r.fontSize)}`]]
    }
})( ({theme: e, ownerState: t}) => {
    var r, n, o, a, i, l, c, u, h, d, m, v, y;
    return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        fill: t.hasSvgAsChild ? void 0 : "currentColor",
        flexShrink: 0,
        transition: (r = e.transitions) == null || (n = r.create) == null ? void 0 : n.call(r, "fill", {
            duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter
        }),
        fontSize: {
            inherit: "inherit",
            small: ((a = e.typography) == null || (i = a.pxToRem) == null ? void 0 : i.call(a, 20)) || "1.25rem",
            medium: ((l = e.typography) == null || (c = l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem",
            large: ((u = e.typography) == null || (h = u.pxToRem) == null ? void 0 : h.call(u, 35)) || "2.1875rem"
        }[t.fontSize],
        color: (d = (m = (e.vars || e).palette) == null || (m = m[t.color]) == null ? void 0 : m.main) != null ? d : {
            action: (v = (e.vars || e).palette) == null || (v = v.action) == null ? void 0 : v.active,
            disabled: (y = (e.vars || e).palette) == null || (y = y.action) == null ? void 0 : y.disabled,
            inherit: void 0
        }[t.color]
    }
}
)
  , pu = E.forwardRef(function(t, r) {
    const n = tj({
        props: t,
        name: "MuiSvgIcon"
    })
      , {children: o, className: a, color: i="inherit", component: l="svg", fontSize: c="medium", htmlColor: u, inheritViewBox: h=!1, titleAccess: d, viewBox: m="0 0 24 24"} = n
      , v = lr(n, Oj)
      , y = E.isValidElement(o) && o.type === "svg"
      , x = te({}, n, {
        color: i,
        component: l,
        fontSize: c,
        instanceFontSize: t.fontSize,
        inheritViewBox: h,
        viewBox: m,
        hasSvgAsChild: y
    })
      , w = {};
    h || (w.viewBox = m);
    const p = _j(x);
    return s.jsxs(Pj, te({
        as: l,
        className: nx(p.root, a),
        focusable: "false",
        color: u,
        "aria-hidden": d ? void 0 : !0,
        role: d ? "img" : void 0,
        ref: r
    }, w, v, y && o.props, {
        ownerState: x,
        children: [y ? o.props.children : o, d ? s.jsx("title", {
            children: d
        }) : null]
    }))
});
pu.muiName = "SvgIcon";
function $r(e, t) {
    function r(n, o) {
        return s.jsx(pu, te({
            "data-testid": `${t}Icon`,
            ref: o
        }, n, {
            children: e
        }))
    }
    return r.muiName = pu.muiName,
    E.memo(E.forwardRef(r))
}
const No = $r(s.jsx("path", {
    d: "M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
}), "ArrowRightAlt")
  , Ij = $r(s.jsx("path", {
    d: "m18 7-1.41-1.41-6.34 6.34 1.41 1.41zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12zM.41 13.41 6 19l1.41-1.41L1.83 12z"
}), "DoneAll")
  , Bf = $r(s.jsx("path", {
    d: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
}), "Facebook")
  , Wo = $r(s.jsx("path", {
    d: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
}), "Instagram")
  , Ff = $r(s.jsx("path", {
    d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
}), "LinkedIn")
  , Hf = $r(s.jsx("path", {
    d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z"
}), "Phone")
  , Uf = $r(s.jsx("path", {
    d: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
}), "Twitter")
  , Gf = $r(s.jsx("path", {
    d: "M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"
}), "WhatsApp")
  , Ej = ["className", "component"];
function Tj(e={}) {
    const {themeId: t, defaultTheme: r, defaultClassName: n="MuiBox-root", generateClassName: o} = e
      , a = Ex("div", {
        shouldForwardProp: l => l !== "theme" && l !== "sx" && l !== "as"
    })(Ns);
    return E.forwardRef(function(c, u) {
        const h = Tx(r)
          , d = Ax(c)
          , {className: m, component: v="div"} = d
          , y = lr(d, Ej);
        return s.jsx(a, te({
            as: v,
            ref: u,
            className: nx(m, o ? o(n) : n),
            theme: t && h[t] || h
        }, y))
    })
}
const Aj = tx("MuiBox", ["root"])
  , Rj = Fx()
  , Vf = Tj({
    themeId: qd,
    defaultTheme: Rj,
    defaultClassName: Aj.root,
    generateClassName: Jg.generate
});
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ds() {
    return ds = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    ds.apply(this, arguments)
}
var wr;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(wr || (wr = {}));
const Yf = "popstate";
function Lj(e) {
    e === void 0 && (e = {});
    function t(n, o) {
        let {pathname: a, search: i, hash: l} = n.location;
        return gu("", {
            pathname: a,
            search: i,
            hash: l
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function r(n, o) {
        return typeof o == "string" ? o : Za(o)
    }
    return Mj(t, r, null, e)
}
function be(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Gx(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function $j() {
    return Math.random().toString(36).substr(2, 8)
}
function Qf(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function gu(e, t, r, n) {
    return r === void 0 && (r = null),
    ds({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? uo(t) : t, {
        state: r,
        key: t && t.key || n || $j()
    })
}
function Za(e) {
    let {pathname: t="/", search: r="", hash: n=""} = e;
    return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
}
function uo(e) {
    let t = {};
    if (e) {
        let r = e.indexOf("#");
        r >= 0 && (t.hash = e.substr(r),
        e = e.substr(0, r));
        let n = e.indexOf("?");
        n >= 0 && (t.search = e.substr(n),
        e = e.substr(0, n)),
        e && (t.pathname = e)
    }
    return t
}
function Mj(e, t, r, n) {
    n === void 0 && (n = {});
    let {window: o=document.defaultView, v5Compat: a=!1} = n
      , i = o.history
      , l = wr.Pop
      , c = null
      , u = h();
    u == null && (u = 0,
    i.replaceState(ds({}, i.state, {
        idx: u
    }), ""));
    function h() {
        return (i.state || {
            idx: null
        }).idx
    }
    function d() {
        l = wr.Pop;
        let w = h()
          , p = w == null ? null : w - u;
        u = w,
        c && c({
            action: l,
            location: x.location,
            delta: p
        })
    }
    function m(w, p) {
        l = wr.Push;
        let f = gu(x.location, w, p);
        u = h() + 1;
        let g = Qf(f, u)
          , b = x.createHref(f);
        try {
            i.pushState(g, "", b)
        } catch (j) {
            if (j instanceof DOMException && j.name === "DataCloneError")
                throw j;
            o.location.assign(b)
        }
        a && c && c({
            action: l,
            location: x.location,
            delta: 1
        })
    }
    function v(w, p) {
        l = wr.Replace;
        let f = gu(x.location, w, p);
        u = h();
        let g = Qf(f, u)
          , b = x.createHref(f);
        i.replaceState(g, "", b),
        a && c && c({
            action: l,
            location: x.location,
            delta: 0
        })
    }
    function y(w) {
        let p = o.location.origin !== "null" ? o.location.origin : o.location.href
          , f = typeof w == "string" ? w : Za(w);
        return f = f.replace(/ $/, "%20"),
        be(p, "No window.location.(origin|href) available to create URL for href: " + f),
        new URL(f,p)
    }
    let x = {
        get action() {
            return l
        },
        get location() {
            return e(o, i)
        },
        listen(w) {
            if (c)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(Yf, d),
            c = w,
            () => {
                o.removeEventListener(Yf, d),
                c = null
            }
        },
        createHref(w) {
            return t(o, w)
        },
        createURL: y,
        encodeLocation(w) {
            let p = y(w);
            return {
                pathname: p.pathname,
                search: p.search,
                hash: p.hash
            }
        },
        push: m,
        replace: v,
        go(w) {
            return i.go(w)
        }
    };
    return x
}
var Kf;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(Kf || (Kf = {}));
function zj(e, t, r) {
    r === void 0 && (r = "/");
    let n = typeof t == "string" ? uo(t) : t
      , o = Yn(n.pathname || "/", r);
    if (o == null)
        return null;
    let a = Vx(e);
    Dj(a);
    let i = null;
    for (let l = 0; i == null && l < a.length; ++l) {
        let c = qj(o);
        i = Qj(a[l], c)
    }
    return i
}
function Vx(e, t, r, n) {
    t === void 0 && (t = []),
    r === void 0 && (r = []),
    n === void 0 && (n = "");
    let o = (a, i, l) => {
        let c = {
            relativePath: l === void 0 ? a.path || "" : l,
            caseSensitive: a.caseSensitive === !0,
            childrenIndex: i,
            route: a
        };
        c.relativePath.startsWith("/") && (be(c.relativePath.startsWith(n), 'Absolute route path "' + c.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        c.relativePath = c.relativePath.slice(n.length));
        let u = Ir([n, c.relativePath])
          , h = r.concat(c);
        a.children && a.children.length > 0 && (be(a.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Vx(a.children, t, h, u)),
        !(a.path == null && !a.index) && t.push({
            path: u,
            score: Vj(u, a.index),
            routesMeta: h
        })
    }
    ;
    return e.forEach( (a, i) => {
        var l;
        if (a.path === "" || !((l = a.path) != null && l.includes("?")))
            o(a, i);
        else
            for (let c of Yx(a.path))
                o(a, i, c)
    }
    ),
    t
}
function Yx(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[r,...n] = t
      , o = r.endsWith("?")
      , a = r.replace(/\?$/, "");
    if (n.length === 0)
        return o ? [a, ""] : [a];
    let i = Yx(n.join("/"))
      , l = [];
    return l.push(...i.map(c => c === "" ? a : [a, c].join("/"))),
    o && l.push(...i),
    l.map(c => e.startsWith("/") && c === "" ? "/" : c)
}
function Dj(e) {
    e.sort( (t, r) => t.score !== r.score ? r.score - t.score : Yj(t.routesMeta.map(n => n.childrenIndex), r.routesMeta.map(n => n.childrenIndex)))
}
const Wj = /^:[\w-]+$/
  , Bj = 3
  , Fj = 2
  , Hj = 1
  , Uj = 10
  , Gj = -2
  , qf = e => e === "*";
function Vj(e, t) {
    let r = e.split("/")
      , n = r.length;
    return r.some(qf) && (n += Gj),
    t && (n += Fj),
    r.filter(o => !qf(o)).reduce( (o, a) => o + (Wj.test(a) ? Bj : a === "" ? Hj : Uj), n)
}
function Yj(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (n, o) => n === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function Qj(e, t) {
    let {routesMeta: r} = e
      , n = {}
      , o = "/"
      , a = [];
    for (let i = 0; i < r.length; ++i) {
        let l = r[i]
          , c = i === r.length - 1
          , u = o === "/" ? t : t.slice(o.length) || "/"
          , h = xu({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: c
        }, u);
        if (!h)
            return null;
        Object.assign(n, h.params);
        let d = l.route;
        a.push({
            params: n,
            pathname: Ir([o, h.pathname]),
            pathnameBase: ek(Ir([o, h.pathnameBase])),
            route: d
        }),
        h.pathnameBase !== "/" && (o = Ir([o, h.pathnameBase]))
    }
    return a
}
function xu(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[r,n] = Kj(e.path, e.caseSensitive, e.end)
      , o = t.match(r);
    if (!o)
        return null;
    let a = o[0]
      , i = a.replace(/(.)\/+$/, "$1")
      , l = o.slice(1);
    return {
        params: n.reduce( (u, h, d) => {
            let {paramName: m, isOptional: v} = h;
            if (m === "*") {
                let x = l[d] || "";
                i = a.slice(0, a.length - x.length).replace(/(.)\/+$/, "$1")
            }
            const y = l[d];
            return v && !y ? u[m] = void 0 : u[m] = (y || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: a,
        pathnameBase: i,
        pattern: e
    }
}
function Kj(e, t, r) {
    t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    Gx(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let n = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, l, c) => (n.push({
        paramName: l,
        isOptional: c != null
    }),
    c ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (n.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), n]
}
function qj(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Gx(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function Yn(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let r = t.endsWith("/") ? t.length - 1 : t.length
      , n = e.charAt(r);
    return n && n !== "/" ? null : e.slice(r) || "/"
}
function Xj(e, t) {
    t === void 0 && (t = "/");
    let {pathname: r, search: n="", hash: o=""} = typeof e == "string" ? uo(e) : e;
    return {
        pathname: r ? r.startsWith("/") ? r : Zj(r, t) : t,
        search: tk(n),
        hash: rk(o)
    }
}
function Zj(e, t) {
    let r = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o)
    }
    ),
    r.length > 1 ? r.join("/") : "/"
}
function ec(e, t, r, n) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function Jj(e) {
    return e.filter( (t, r) => r === 0 || t.route.path && t.route.path.length > 0)
}
function Qx(e, t) {
    let r = Jj(e);
    return t ? r.map( (n, o) => o === e.length - 1 ? n.pathname : n.pathnameBase) : r.map(n => n.pathnameBase)
}
function Kx(e, t, r, n) {
    n === void 0 && (n = !1);
    let o;
    typeof e == "string" ? o = uo(e) : (o = ds({}, e),
    be(!o.pathname || !o.pathname.includes("?"), ec("?", "pathname", "search", o)),
    be(!o.pathname || !o.pathname.includes("#"), ec("#", "pathname", "hash", o)),
    be(!o.search || !o.search.includes("#"), ec("#", "search", "hash", o)));
    let a = e === "" || o.pathname === "", i = a ? "/" : o.pathname, l;
    if (i == null)
        l = r;
    else {
        let d = t.length - 1;
        if (!n && i.startsWith("..")) {
            let m = i.split("/");
            for (; m[0] === ".."; )
                m.shift(),
                d -= 1;
            o.pathname = m.join("/")
        }
        l = d >= 0 ? t[d] : "/"
    }
    let c = Xj(o, l)
      , u = i && i !== "/" && i.endsWith("/")
      , h = (a || i === ".") && r.endsWith("/");
    return !c.pathname.endsWith("/") && (u || h) && (c.pathname += "/"),
    c
}
const Ir = e => e.join("/").replace(/\/\/+/g, "/")
  , ek = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , tk = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , rk = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function nk(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const qx = ["post", "put", "patch", "delete"];
new Set(qx);
const ok = ["get", ...qx];
new Set(ok);
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function hs() {
    return hs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    hs.apply(this, arguments)
}
const cl = E.createContext(null)
  , Xx = E.createContext(null)
  , Mr = E.createContext(null)
  , ul = E.createContext(null)
  , an = E.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Zx = E.createContext(null);
function sk(e, t) {
    let {relative: r} = t === void 0 ? {} : t;
    Os() || be(!1);
    let {basename: n, navigator: o} = E.useContext(Mr)
      , {hash: a, pathname: i, search: l} = dl(e, {
        relative: r
    })
      , c = i;
    return n !== "/" && (c = i === "/" ? n : Ir([n, i])),
    o.createHref({
        pathname: c,
        search: l,
        hash: a
    })
}
function Os() {
    return E.useContext(ul) != null
}
function ho() {
    return Os() || be(!1),
    E.useContext(ul).location
}
function Jx(e) {
    E.useContext(Mr).static || E.useLayoutEffect(e)
}
function ak() {
    let {isDataRoute: e} = E.useContext(an);
    return e ? vk() : ik()
}
function ik() {
    Os() || be(!1);
    let e = E.useContext(cl)
      , {basename: t, future: r, navigator: n} = E.useContext(Mr)
      , {matches: o} = E.useContext(an)
      , {pathname: a} = ho()
      , i = JSON.stringify(Qx(o, r.v7_relativeSplatPath))
      , l = E.useRef(!1);
    return Jx( () => {
        l.current = !0
    }
    ),
    E.useCallback(function(u, h) {
        if (h === void 0 && (h = {}),
        !l.current)
            return;
        if (typeof u == "number") {
            n.go(u);
            return
        }
        let d = Kx(u, JSON.parse(i), a, h.relative === "path");
        e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : Ir([t, d.pathname])),
        (h.replace ? n.replace : n.push)(d, h.state, h)
    }, [t, n, i, a, e])
}
function dl(e, t) {
    let {relative: r} = t === void 0 ? {} : t
      , {future: n} = E.useContext(Mr)
      , {matches: o} = E.useContext(an)
      , {pathname: a} = ho()
      , i = JSON.stringify(Qx(o, n.v7_relativeSplatPath));
    return E.useMemo( () => Kx(e, JSON.parse(i), a, r === "path"), [e, i, a, r])
}
function lk(e, t) {
    return ck(e, t)
}
function ck(e, t, r, n) {
    Os() || be(!1);
    let {navigator: o} = E.useContext(Mr)
      , {matches: a} = E.useContext(an)
      , i = a[a.length - 1]
      , l = i ? i.params : {};
    i && i.pathname;
    let c = i ? i.pathnameBase : "/";
    i && i.route;
    let u = ho(), h;
    if (t) {
        var d;
        let w = typeof t == "string" ? uo(t) : t;
        c === "/" || (d = w.pathname) != null && d.startsWith(c) || be(!1),
        h = w
    } else
        h = u;
    let m = h.pathname || "/"
      , v = m;
    if (c !== "/") {
        let w = c.replace(/^\//, "").split("/");
        v = "/" + m.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let y = zj(e, {
        pathname: v
    })
      , x = mk(y && y.map(w => Object.assign({}, w, {
        params: Object.assign({}, l, w.params),
        pathname: Ir([c, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? c : Ir([c, o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), a, r, n);
    return t && x ? E.createElement(ul.Provider, {
        value: {
            location: hs({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, h),
            navigationType: wr.Pop
        }
    }, x) : x
}
function uk() {
    let e = yk()
      , t = nk(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , r = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return E.createElement(E.Fragment, null, E.createElement("h2", null, "Unexpected Application Error!"), E.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), r ? E.createElement("pre", {
        style: o
    }, r) : null, null)
}
const dk = E.createElement(uk, null);
class hk extends E.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, r) {
        return r.location !== t.location || r.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : r.error,
            location: r.location,
            revalidation: t.revalidation || r.revalidation
        }
    }
    componentDidCatch(t, r) {
        console.error("React Router caught the following error during render", t, r)
    }
    render() {
        return this.state.error !== void 0 ? E.createElement(an.Provider, {
            value: this.props.routeContext
        }, E.createElement(Zx.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function fk(e) {
    let {routeContext: t, match: r, children: n} = e
      , o = E.useContext(cl);
    return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id),
    E.createElement(an.Provider, {
        value: t
    }, n)
}
function mk(e, t, r, n) {
    var o;
    if (t === void 0 && (t = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    e == null) {
        var a;
        if ((a = r) != null && a.errors)
            e = r.matches;
        else
            return null
    }
    let i = e
      , l = (o = r) == null ? void 0 : o.errors;
    if (l != null) {
        let h = i.findIndex(d => d.route.id && (l == null ? void 0 : l[d.route.id]) !== void 0);
        h >= 0 || be(!1),
        i = i.slice(0, Math.min(i.length, h + 1))
    }
    let c = !1
      , u = -1;
    if (r && n && n.v7_partialHydration)
        for (let h = 0; h < i.length; h++) {
            let d = i[h];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = h),
            d.route.id) {
                let {loaderData: m, errors: v} = r
                  , y = d.route.loader && m[d.route.id] === void 0 && (!v || v[d.route.id] === void 0);
                if (d.route.lazy || y) {
                    c = !0,
                    u >= 0 ? i = i.slice(0, u + 1) : i = [i[0]];
                    break
                }
            }
        }
    return i.reduceRight( (h, d, m) => {
        let v, y = !1, x = null, w = null;
        r && (v = l && d.route.id ? l[d.route.id] : void 0,
        x = d.route.errorElement || dk,
        c && (u < 0 && m === 0 ? (y = !0,
        w = null) : u === m && (y = !0,
        w = d.route.hydrateFallbackElement || null)));
        let p = t.concat(i.slice(0, m + 1))
          , f = () => {
            let g;
            return v ? g = x : y ? g = w : d.route.Component ? g = E.createElement(d.route.Component, null) : d.route.element ? g = d.route.element : g = h,
            E.createElement(fk, {
                match: d,
                routeContext: {
                    outlet: h,
                    matches: p,
                    isDataRoute: r != null
                },
                children: g
            })
        }
        ;
        return r && (d.route.ErrorBoundary || d.route.errorElement || m === 0) ? E.createElement(hk, {
            location: r.location,
            revalidation: r.revalidation,
            component: x,
            error: v,
            children: f(),
            routeContext: {
                outlet: null,
                matches: p,
                isDataRoute: !0
            }
        }) : f()
    }
    , null)
}
var ey = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(ey || {})
  , Ja = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Ja || {});
function pk(e) {
    let t = E.useContext(cl);
    return t || be(!1),
    t
}
function gk(e) {
    let t = E.useContext(Xx);
    return t || be(!1),
    t
}
function xk(e) {
    let t = E.useContext(an);
    return t || be(!1),
    t
}
function ty(e) {
    let t = xk()
      , r = t.matches[t.matches.length - 1];
    return r.route.id || be(!1),
    r.route.id
}
function yk() {
    var e;
    let t = E.useContext(Zx)
      , r = gk(Ja.UseRouteError)
      , n = ty(Ja.UseRouteError);
    return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n]
}
function vk() {
    let {router: e} = pk(ey.UseNavigateStable)
      , t = ty(Ja.UseNavigateStable)
      , r = E.useRef(!1);
    return Jx( () => {
        r.current = !0
    }
    ),
    E.useCallback(function(o, a) {
        a === void 0 && (a = {}),
        r.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, hs({
            fromRouteId: t
        }, a)))
    }, [e, t])
}
function it(e) {
    be(!1)
}
function bk(e) {
    let {basename: t="/", children: r=null, location: n, navigationType: o=wr.Pop, navigator: a, static: i=!1, future: l} = e;
    Os() && be(!1);
    let c = t.replace(/^\/*/, "/")
      , u = E.useMemo( () => ({
        basename: c,
        navigator: a,
        static: i,
        future: hs({
            v7_relativeSplatPath: !1
        }, l)
    }), [c, l, a, i]);
    typeof n == "string" && (n = uo(n));
    let {pathname: h="/", search: d="", hash: m="", state: v=null, key: y="default"} = n
      , x = E.useMemo( () => {
        let w = Yn(h, c);
        return w == null ? null : {
            location: {
                pathname: w,
                search: d,
                hash: m,
                state: v,
                key: y
            },
            navigationType: o
        }
    }
    , [c, h, d, m, v, y, o]);
    return x == null ? null : E.createElement(Mr.Provider, {
        value: u
    }, E.createElement(ul.Provider, {
        children: r,
        value: x
    }))
}
function wk(e) {
    let {children: t, location: r} = e;
    return lk(yu(t), r)
}
new Promise( () => {}
);
function yu(e, t) {
    t === void 0 && (t = []);
    let r = [];
    return E.Children.forEach(e, (n, o) => {
        if (!E.isValidElement(n))
            return;
        let a = [...t, o];
        if (n.type === E.Fragment) {
            r.push.apply(r, yu(n.props.children, a));
            return
        }
        n.type !== it && be(!1),
        !n.props.index || !n.props.children || be(!1);
        let i = {
            id: n.props.id || a.join("-"),
            caseSensitive: n.props.caseSensitive,
            element: n.props.element,
            Component: n.props.Component,
            index: n.props.index,
            path: n.props.path,
            loader: n.props.loader,
            action: n.props.action,
            errorElement: n.props.errorElement,
            ErrorBoundary: n.props.ErrorBoundary,
            hasErrorBoundary: n.props.ErrorBoundary != null || n.props.errorElement != null,
            shouldRevalidate: n.props.shouldRevalidate,
            handle: n.props.handle,
            lazy: n.props.lazy
        };
        n.props.children && (i.children = yu(n.props.children, a)),
        r.push(i)
    }
    ),
    r
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ei() {
    return ei = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    ei.apply(this, arguments)
}
function ry(e, t) {
    if (e == null)
        return {};
    var r = {}, n = Object.keys(e), o, a;
    for (a = 0; a < n.length; a++)
        o = n[a],
        !(t.indexOf(o) >= 0) && (r[o] = e[o]);
    return r
}
function jk(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function kk(e, t) {
    return e.button === 0 && (!t || t === "_self") && !jk(e)
}
const Nk = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"]
  , Sk = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"]
  , Ck = "6";
try {
    window.__reactRouterVersion = Ck
} catch {}
const Ok = E.createContext({
    isTransitioning: !1
})
  , _k = "startTransition"
  , Xf = gc[_k];
function Pk(e) {
    let {basename: t, children: r, future: n, window: o} = e
      , a = E.useRef();
    a.current == null && (a.current = Lj({
        window: o,
        v5Compat: !0
    }));
    let i = a.current
      , [l,c] = E.useState({
        action: i.action,
        location: i.location
    })
      , {v7_startTransition: u} = n || {}
      , h = E.useCallback(d => {
        u && Xf ? Xf( () => c(d)) : c(d)
    }
    , [c, u]);
    return E.useLayoutEffect( () => i.listen(h), [i, h]),
    E.createElement(bk, {
        basename: t,
        children: r,
        location: l.location,
        navigationType: l.action,
        navigator: i,
        future: n
    })
}
const Ik = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , Ek = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , z = E.forwardRef(function(t, r) {
    let {onClick: n, relative: o, reloadDocument: a, replace: i, state: l, target: c, to: u, preventScrollReset: h, unstable_viewTransition: d} = t, m = ry(t, Nk), {basename: v} = E.useContext(Mr), y, x = !1;
    if (typeof u == "string" && Ek.test(u) && (y = u,
    Ik))
        try {
            let g = new URL(window.location.href)
              , b = u.startsWith("//") ? new URL(g.protocol + u) : new URL(u)
              , j = Yn(b.pathname, v);
            b.origin === g.origin && j != null ? u = j + b.search + b.hash : x = !0
        } catch {}
    let w = sk(u, {
        relative: o
    })
      , p = Ak(u, {
        replace: i,
        state: l,
        target: c,
        preventScrollReset: h,
        relative: o,
        unstable_viewTransition: d
    });
    function f(g) {
        n && n(g),
        g.defaultPrevented || p(g)
    }
    return E.createElement("a", ei({}, m, {
        href: y || w,
        onClick: x || a ? n : f,
        ref: r,
        target: c
    }))
})
  , fs = E.forwardRef(function(t, r) {
    let {"aria-current": n="page", caseSensitive: o=!1, className: a="", end: i=!1, style: l, to: c, unstable_viewTransition: u, children: h} = t
      , d = ry(t, Sk)
      , m = dl(c, {
        relative: d.relative
    })
      , v = ho()
      , y = E.useContext(Xx)
      , {navigator: x, basename: w} = E.useContext(Mr)
      , p = y != null && Rk(m) && u === !0
      , f = x.encodeLocation ? x.encodeLocation(m).pathname : m.pathname
      , g = v.pathname
      , b = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
    o || (g = g.toLowerCase(),
    b = b ? b.toLowerCase() : null,
    f = f.toLowerCase()),
    b && w && (b = Yn(b, w) || b);
    const j = f !== "/" && f.endsWith("/") ? f.length - 1 : f.length;
    let k = g === f || !i && g.startsWith(f) && g.charAt(j) === "/", N = b != null && (b === f || !i && b.startsWith(f) && b.charAt(f.length) === "/"), L = {
        isActive: k,
        isPending: N,
        isTransitioning: p
    }, P = k ? n : void 0, I;
    typeof a == "function" ? I = a(L) : I = [a, k ? "active" : null, N ? "pending" : null, p ? "transitioning" : null].filter(Boolean).join(" ");
    let B = typeof l == "function" ? l(L) : l;
    return E.createElement(z, ei({}, d, {
        "aria-current": P,
        className: I,
        ref: r,
        style: B,
        to: c,
        unstable_viewTransition: u
    }), typeof h == "function" ? h(L) : h)
});
var vu;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(vu || (vu = {}));
var Zf;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Zf || (Zf = {}));
function Tk(e) {
    let t = E.useContext(cl);
    return t || be(!1),
    t
}
function Ak(e, t) {
    let {target: r, replace: n, state: o, preventScrollReset: a, relative: i, unstable_viewTransition: l} = t === void 0 ? {} : t
      , c = ak()
      , u = ho()
      , h = dl(e, {
        relative: i
    });
    return E.useCallback(d => {
        if (kk(d, r)) {
            d.preventDefault();
            let m = n !== void 0 ? n : Za(u) === Za(h);
            c(e, {
                replace: m,
                state: o,
                preventScrollReset: a,
                relative: i,
                unstable_viewTransition: l
            })
        }
    }
    , [u, c, h, n, o, r, e, a, i, l])
}
function Rk(e, t) {
    t === void 0 && (t = {});
    let r = E.useContext(Ok);
    r == null && be(!1);
    let {basename: n} = Tk(vu.useViewTransitionState)
      , o = dl(e, {
        relative: t.relative
    });
    if (!r.isTransitioning)
        return !1;
    let a = Yn(r.currentLocation.pathname, n) || r.currentLocation.pathname
      , i = Yn(r.nextLocation.pathname, n) || r.nextLocation.pathname;
    return xu(o.pathname, i) != null || xu(o.pathname, a) != null
}
const Lk = "/assets/logo-CWPIrz0C.png";
var ny = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
  , Jf = Ge.createContext && Ge.createContext(ny)
  , $k = ["attr", "size", "title"];
function Mk(e, t) {
    if (e == null)
        return {};
    var r = zk(e, t), n, o;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (o = 0; o < a.length; o++)
            n = a[o],
            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}
function zk(e, t) {
    if (e == null)
        return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0)
                continue;
            r[n] = e[n]
        }
    return r
}
function ti() {
    return ti = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    ti.apply(this, arguments)
}
function em(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function ri(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? em(Object(r), !0).forEach(function(n) {
            Dk(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : em(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function Dk(e, t, r) {
    return t = Wk(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function Wk(e) {
    var t = Bk(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
function Bk(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (typeof n != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function oy(e) {
    return e && e.map( (t, r) => Ge.createElement(t.tag, ri({
        key: r
    }, t.attr), oy(t.child)))
}
function zr(e) {
    return t => Ge.createElement(Fk, ti({
        attr: ri({}, e.attr)
    }, t), oy(e.child))
}
function Fk(e) {
    var t = r => {
        var {attr: n, size: o, title: a} = e, i = Mk(e, $k), l = o || r.size || "1em", c;
        return r.className && (c = r.className),
        e.className && (c = (c ? c + " " : "") + e.className),
        Ge.createElement("svg", ti({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, r.attr, n, i, {
            className: c,
            style: ri(ri({
                color: e.color || r.color
            }, r.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg"
        }), a && Ge.createElement("title", null, a), e.children)
    }
    ;
    return Jf !== void 0 ? Ge.createElement(Jf.Consumer, null, r => t(r)) : t(ny)
}
function Hk(e) {
    return zr({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "g",
            attr: {
                id: "Menu_Fries"
            },
            child: [{
                tag: "path",
                attr: {
                    d: "M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z"
                },
                child: []
            }, {
                tag: "path",
                attr: {
                    d: "M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z"
                },
                child: []
            }, {
                tag: "path",
                attr: {
                    d: "M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z"
                },
                child: []
            }]
        }]
    })(e)
}
function Uk(e) {
    return zr({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32",
                d: "M368 368 144 144m224 0L144 368"
            },
            child: []
        }]
    })(e)
}
const Gk = "/assets/logoIcon-xgZ7uG42.png";
var rt = function() {
    return rt = Object.assign || function(t) {
        for (var r, n = 1, o = arguments.length; n < o; n++) {
            r = arguments[n];
            for (var a in r)
                Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a])
        }
        return t
    }
    ,
    rt.apply(this, arguments)
};
function ni(e, t, r) {
    if (r || arguments.length === 2)
        for (var n = 0, o = t.length, a; n < o; n++)
            (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)),
            a[n] = t[n]);
    return e.concat(a || Array.prototype.slice.call(t))
}
var le = "-ms-"
  , Bo = "-moz-"
  , ee = "-webkit-"
  , sy = "comm"
  , hl = "rule"
  , Xd = "decl"
  , Vk = "@import"
  , ay = "@keyframes"
  , Yk = "@layer"
  , iy = Math.abs
  , Zd = String.fromCharCode
  , bu = Object.assign;
function Qk(e, t) {
    return Ee(e, 0) ^ 45 ? (((t << 2 ^ Ee(e, 0)) << 2 ^ Ee(e, 1)) << 2 ^ Ee(e, 2)) << 2 ^ Ee(e, 3) : 0
}
function ly(e) {
    return e.trim()
}
function qt(e, t) {
    return (e = t.exec(e)) ? e[0] : e
}
function V(e, t, r) {
    return e.replace(t, r)
}
function ya(e, t, r) {
    return e.indexOf(t, r)
}
function Ee(e, t) {
    return e.charCodeAt(t) | 0
}
function Qn(e, t, r) {
    return e.slice(t, r)
}
function Ht(e) {
    return e.length
}
function cy(e) {
    return e.length
}
function Po(e, t) {
    return t.push(e),
    e
}
function Kk(e, t) {
    return e.map(t).join("")
}
function tm(e, t) {
    return e.filter(function(r) {
        return !qt(r, t)
    })
}
var fl = 1
  , Kn = 1
  , uy = 0
  , Ot = 0
  , Se = 0
  , fo = "";
function ml(e, t, r, n, o, a, i, l) {
    return {
        value: e,
        root: t,
        parent: r,
        type: n,
        props: o,
        children: a,
        line: fl,
        column: Kn,
        length: i,
        return: "",
        siblings: l
    }
}
function hr(e, t) {
    return bu(ml("", null, null, "", null, null, 0, e.siblings), e, {
        length: -e.length
    }, t)
}
function mn(e) {
    for (; e.root; )
        e = hr(e.root, {
            children: [e]
        });
    Po(e, e.siblings)
}
function qk() {
    return Se
}
function Xk() {
    return Se = Ot > 0 ? Ee(fo, --Ot) : 0,
    Kn--,
    Se === 10 && (Kn = 1,
    fl--),
    Se
}
function $t() {
    return Se = Ot < uy ? Ee(fo, Ot++) : 0,
    Kn++,
    Se === 10 && (Kn = 1,
    fl++),
    Se
}
function Kr() {
    return Ee(fo, Ot)
}
function va() {
    return Ot
}
function pl(e, t) {
    return Qn(fo, e, t)
}
function wu(e) {
    switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
        return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
        return 4;
    case 58:
        return 3;
    case 34:
    case 39:
    case 40:
    case 91:
        return 2;
    case 41:
    case 93:
        return 1
    }
    return 0
}
function Zk(e) {
    return fl = Kn = 1,
    uy = Ht(fo = e),
    Ot = 0,
    []
}
function Jk(e) {
    return fo = "",
    e
}
function tc(e) {
    return ly(pl(Ot - 1, ju(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function eN(e) {
    for (; (Se = Kr()) && Se < 33; )
        $t();
    return wu(e) > 2 || wu(Se) > 3 ? "" : " "
}
function tN(e, t) {
    for (; --t && $t() && !(Se < 48 || Se > 102 || Se > 57 && Se < 65 || Se > 70 && Se < 97); )
        ;
    return pl(e, va() + (t < 6 && Kr() == 32 && $t() == 32))
}
function ju(e) {
    for (; $t(); )
        switch (Se) {
        case e:
            return Ot;
        case 34:
        case 39:
            e !== 34 && e !== 39 && ju(Se);
            break;
        case 40:
            e === 41 && ju(e);
            break;
        case 92:
            $t();
            break
        }
    return Ot
}
function rN(e, t) {
    for (; $t() && e + Se !== 57; )
        if (e + Se === 84 && Kr() === 47)
            break;
    return "/*" + pl(t, Ot - 1) + "*" + Zd(e === 47 ? e : $t())
}
function nN(e) {
    for (; !wu(Kr()); )
        $t();
    return pl(e, Ot)
}
function oN(e) {
    return Jk(ba("", null, null, null, [""], e = Zk(e), 0, [0], e))
}
function ba(e, t, r, n, o, a, i, l, c) {
    for (var u = 0, h = 0, d = i, m = 0, v = 0, y = 0, x = 1, w = 1, p = 1, f = 0, g = "", b = o, j = a, k = n, N = g; w; )
        switch (y = f,
        f = $t()) {
        case 40:
            if (y != 108 && Ee(N, d - 1) == 58) {
                ya(N += V(tc(f), "&", "&\f"), "&\f", iy(u ? l[u - 1] : 0)) != -1 && (p = -1);
                break
            }
        case 34:
        case 39:
        case 91:
            N += tc(f);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            N += eN(y);
            break;
        case 92:
            N += tN(va() - 1, 7);
            continue;
        case 47:
            switch (Kr()) {
            case 42:
            case 47:
                Po(sN(rN($t(), va()), t, r, c), c);
                break;
            default:
                N += "/"
            }
            break;
        case 123 * x:
            l[u++] = Ht(N) * p;
        case 125 * x:
        case 59:
        case 0:
            switch (f) {
            case 0:
            case 125:
                w = 0;
            case 59 + h:
                p == -1 && (N = V(N, /\f/g, "")),
                v > 0 && Ht(N) - d && Po(v > 32 ? nm(N + ";", n, r, d - 1, c) : nm(V(N, " ", "") + ";", n, r, d - 2, c), c);
                break;
            case 59:
                N += ";";
            default:
                if (Po(k = rm(N, t, r, u, h, o, l, g, b = [], j = [], d, a), a),
                f === 123)
                    if (h === 0)
                        ba(N, t, k, k, b, a, d, l, j);
                    else
                        switch (m === 99 && Ee(N, 3) === 110 ? 100 : m) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                            ba(e, k, k, n && Po(rm(e, k, k, 0, 0, o, l, g, o, b = [], d, j), j), o, j, d, l, n ? b : j);
                            break;
                        default:
                            ba(N, k, k, k, [""], j, 0, l, j)
                        }
            }
            u = h = v = 0,
            x = p = 1,
            g = N = "",
            d = i;
            break;
        case 58:
            d = 1 + Ht(N),
            v = y;
        default:
            if (x < 1) {
                if (f == 123)
                    --x;
                else if (f == 125 && x++ == 0 && Xk() == 125)
                    continue
            }
            switch (N += Zd(f),
            f * x) {
            case 38:
                p = h > 0 ? 1 : (N += "\f",
                -1);
                break;
            case 44:
                l[u++] = (Ht(N) - 1) * p,
                p = 1;
                break;
            case 64:
                Kr() === 45 && (N += tc($t())),
                m = Kr(),
                h = d = Ht(g = N += nN(va())),
                f++;
                break;
            case 45:
                y === 45 && Ht(N) == 2 && (x = 0)
            }
        }
    return a
}
function rm(e, t, r, n, o, a, i, l, c, u, h, d) {
    for (var m = o - 1, v = o === 0 ? a : [""], y = cy(v), x = 0, w = 0, p = 0; x < n; ++x)
        for (var f = 0, g = Qn(e, m + 1, m = iy(w = i[x])), b = e; f < y; ++f)
            (b = ly(w > 0 ? v[f] + " " + g : V(g, /&\f/g, v[f]))) && (c[p++] = b);
    return ml(e, t, r, o === 0 ? hl : l, c, u, h, d)
}
function sN(e, t, r, n) {
    return ml(e, t, r, sy, Zd(qk()), Qn(e, 2, -2), 0, n)
}
function nm(e, t, r, n, o) {
    return ml(e, t, r, Xd, Qn(e, 0, n), Qn(e, n + 1, -1), n, o)
}
function dy(e, t, r) {
    switch (Qk(e, t)) {
    case 5103:
        return ee + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
        return ee + e + e;
    case 4789:
        return Bo + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
        return ee + e + Bo + e + le + e + e;
    case 5936:
        switch (Ee(e, t + 11)) {
        case 114:
            return ee + e + le + V(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
            return ee + e + le + V(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
            return ee + e + le + V(e, /[svh]\w+-[tblr]{2}/, "lr") + e
        }
    case 6828:
    case 4268:
    case 2903:
        return ee + e + le + e + e;
    case 6165:
        return ee + e + le + "flex-" + e + e;
    case 5187:
        return ee + e + V(e, /(\w+).+(:[^]+)/, ee + "box-$1$2" + le + "flex-$1$2") + e;
    case 5443:
        return ee + e + le + "flex-item-" + V(e, /flex-|-self/g, "") + (qt(e, /flex-|baseline/) ? "" : le + "grid-row-" + V(e, /flex-|-self/g, "")) + e;
    case 4675:
        return ee + e + le + "flex-line-pack" + V(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
        return ee + e + le + V(e, "shrink", "negative") + e;
    case 5292:
        return ee + e + le + V(e, "basis", "preferred-size") + e;
    case 6060:
        return ee + "box-" + V(e, "-grow", "") + ee + e + le + V(e, "grow", "positive") + e;
    case 4554:
        return ee + V(e, /([^-])(transform)/g, "$1" + ee + "$2") + e;
    case 6187:
        return V(V(V(e, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), e, "") + e;
    case 5495:
    case 3959:
        return V(e, /(image-set\([^]*)/, ee + "$1$`$1");
    case 4968:
        return V(V(e, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + le + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + e + e;
    case 4200:
        if (!qt(e, /flex-|baseline/))
            return le + "grid-column-align" + Qn(e, t) + e;
        break;
    case 2592:
    case 3360:
        return le + V(e, "template-", "") + e;
    case 4384:
    case 3616:
        return r && r.some(function(n, o) {
            return t = o,
            qt(n.props, /grid-\w+-end/)
        }) ? ~ya(e + (r = r[t].value), "span", 0) ? e : le + V(e, "-start", "") + e + le + "grid-row-span:" + (~ya(r, "span", 0) ? qt(r, /\d+/) : +qt(r, /\d+/) - +qt(e, /\d+/)) + ";" : le + V(e, "-start", "") + e;
    case 4896:
    case 4128:
        return r && r.some(function(n) {
            return qt(n.props, /grid-\w+-start/)
        }) ? e : le + V(V(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
        return V(e, /(.+)-inline(.+)/, ee + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
        if (Ht(e) - 1 - t > 6)
            switch (Ee(e, t + 1)) {
            case 109:
                if (Ee(e, t + 4) !== 45)
                    break;
            case 102:
                return V(e, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + Bo + (Ee(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
            case 115:
                return ~ya(e, "stretch", 0) ? dy(V(e, "stretch", "fill-available"), t, r) + e : e
            }
        break;
    case 5152:
    case 5920:
        return V(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, a, i, l, c, u) {
            return le + o + ":" + a + u + (i ? le + o + "-span:" + (l ? c : +c - +a) + u : "") + e
        });
    case 4949:
        if (Ee(e, t + 6) === 121)
            return V(e, ":", ":" + ee) + e;
        break;
    case 6444:
        switch (Ee(e, Ee(e, 14) === 45 ? 18 : 11)) {
        case 120:
            return V(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ee + (Ee(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + le + "$2box$3") + e;
        case 100:
            return V(e, ":", ":" + le) + e
        }
        break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
        return V(e, "scroll-", "scroll-snap-") + e
    }
    return e
}
function oi(e, t) {
    for (var r = "", n = 0; n < e.length; n++)
        r += t(e[n], n, e, t) || "";
    return r
}
function aN(e, t, r, n) {
    switch (e.type) {
    case Yk:
        if (e.children.length)
            break;
    case Vk:
    case Xd:
        return e.return = e.return || e.value;
    case sy:
        return "";
    case ay:
        return e.return = e.value + "{" + oi(e.children, n) + "}";
    case hl:
        if (!Ht(e.value = e.props.join(",")))
            return ""
    }
    return Ht(r = oi(e.children, n)) ? e.return = e.value + "{" + r + "}" : ""
}
function iN(e) {
    var t = cy(e);
    return function(r, n, o, a) {
        for (var i = "", l = 0; l < t; l++)
            i += e[l](r, n, o, a) || "";
        return i
    }
}
function lN(e) {
    return function(t) {
        t.root || (t = t.return) && e(t)
    }
}
function cN(e, t, r, n) {
    if (e.length > -1 && !e.return)
        switch (e.type) {
        case Xd:
            e.return = dy(e.value, e.length, r);
            return;
        case ay:
            return oi([hr(e, {
                value: V(e.value, "@", "@" + ee)
            })], n);
        case hl:
            if (e.length)
                return Kk(r = e.props, function(o) {
                    switch (qt(o, n = /(::plac\w+|:read-\w+)/)) {
                    case ":read-only":
                    case ":read-write":
                        mn(hr(e, {
                            props: [V(o, /:(read-\w+)/, ":" + Bo + "$1")]
                        })),
                        mn(hr(e, {
                            props: [o]
                        })),
                        bu(e, {
                            props: tm(r, n)
                        });
                        break;
                    case "::placeholder":
                        mn(hr(e, {
                            props: [V(o, /:(plac\w+)/, ":" + ee + "input-$1")]
                        })),
                        mn(hr(e, {
                            props: [V(o, /:(plac\w+)/, ":" + Bo + "$1")]
                        })),
                        mn(hr(e, {
                            props: [V(o, /:(plac\w+)/, le + "input-$1")]
                        })),
                        mn(hr(e, {
                            props: [o]
                        })),
                        bu(e, {
                            props: tm(r, n)
                        });
                        break
                    }
                    return ""
                })
        }
}
var lt = {}
  , qn = typeof process < "u" && lt !== void 0 && (lt.REACT_APP_SC_ATTR || lt.SC_ATTR) || "data-styled"
  , hy = "active"
  , fy = "data-styled-version"
  , gl = "6.1.11"
  , Jd = `/*!sc*/
`
  , eh = typeof window < "u" && "HTMLElement"in window
  , uN = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && lt !== void 0 && lt.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && lt.REACT_APP_SC_DISABLE_SPEEDY !== "" ? lt.REACT_APP_SC_DISABLE_SPEEDY !== "false" && lt.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && lt !== void 0 && lt.SC_DISABLE_SPEEDY !== void 0 && lt.SC_DISABLE_SPEEDY !== "" && lt.SC_DISABLE_SPEEDY !== "false" && lt.SC_DISABLE_SPEEDY)
  , xl = Object.freeze([])
  , Xn = Object.freeze({});
function dN(e, t, r) {
    return r === void 0 && (r = Xn),
    e.theme !== r.theme && e.theme || t || r.theme
}
var my = new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"])
  , hN = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g
  , fN = /(^-|-$)/g;
function om(e) {
    return e.replace(hN, "-").replace(fN, "")
}
var mN = /(a)(d)/gi
  , Zs = 52
  , sm = function(e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97))
};
function ku(e) {
    var t, r = "";
    for (t = Math.abs(e); t > Zs; t = t / Zs | 0)
        r = sm(t % Zs) + r;
    return (sm(t % Zs) + r).replace(mN, "$1-$2")
}
var rc, py = 5381, On = function(e, t) {
    for (var r = t.length; r; )
        e = 33 * e ^ t.charCodeAt(--r);
    return e
}, gy = function(e) {
    return On(py, e)
};
function pN(e) {
    return ku(gy(e) >>> 0)
}
function gN(e) {
    return e.displayName || e.name || "Component"
}
function nc(e) {
    return typeof e == "string" && !0
}
var xy = typeof Symbol == "function" && Symbol.for
  , yy = xy ? Symbol.for("react.memo") : 60115
  , xN = xy ? Symbol.for("react.forward_ref") : 60112
  , yN = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
}
  , vN = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
}
  , vy = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
}
  , bN = ((rc = {})[xN] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
},
rc[yy] = vy,
rc);
function am(e) {
    return ("type"in (t = e) && t.type.$$typeof) === yy ? vy : "$$typeof"in e ? bN[e.$$typeof] : yN;
    var t
}
var wN = Object.defineProperty
  , jN = Object.getOwnPropertyNames
  , im = Object.getOwnPropertySymbols
  , kN = Object.getOwnPropertyDescriptor
  , NN = Object.getPrototypeOf
  , lm = Object.prototype;
function by(e, t, r) {
    if (typeof t != "string") {
        if (lm) {
            var n = NN(t);
            n && n !== lm && by(e, n, r)
        }
        var o = jN(t);
        im && (o = o.concat(im(t)));
        for (var a = am(e), i = am(t), l = 0; l < o.length; ++l) {
            var c = o[l];
            if (!(c in vN || r && r[c] || i && c in i || a && c in a)) {
                var u = kN(t, c);
                try {
                    wN(e, c, u)
                } catch {}
            }
        }
    }
    return e
}
function Zn(e) {
    return typeof e == "function"
}
function th(e) {
    return typeof e == "object" && "styledComponentId"in e
}
function Vr(e, t) {
    return e && t ? "".concat(e, " ").concat(t) : e || t || ""
}
function cm(e, t) {
    if (e.length === 0)
        return "";
    for (var r = e[0], n = 1; n < e.length; n++)
        r += e[n];
    return r
}
function ms(e) {
    return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props"in e && e.$$typeof)
}
function Nu(e, t, r) {
    if (r === void 0 && (r = !1),
    !r && !ms(e) && !Array.isArray(e))
        return t;
    if (Array.isArray(t))
        for (var n = 0; n < t.length; n++)
            e[n] = Nu(e[n], t[n]);
    else if (ms(t))
        for (var n in t)
            e[n] = Nu(e[n], t[n]);
    return e
}
function rh(e, t) {
    Object.defineProperty(e, "toString", {
        value: t
    })
}
function _s(e) {
    for (var t = [], r = 1; r < arguments.length; r++)
        t[r - 1] = arguments[r];
    return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""))
}
var SN = function() {
    function e(t) {
        this.groupSizes = new Uint32Array(512),
        this.length = 512,
        this.tag = t
    }
    return e.prototype.indexOfGroup = function(t) {
        for (var r = 0, n = 0; n < t; n++)
            r += this.groupSizes[n];
        return r
    }
    ,
    e.prototype.insertRules = function(t, r) {
        if (t >= this.groupSizes.length) {
            for (var n = this.groupSizes, o = n.length, a = o; t >= a; )
                if ((a <<= 1) < 0)
                    throw _s(16, "".concat(t));
            this.groupSizes = new Uint32Array(a),
            this.groupSizes.set(n),
            this.length = a;
            for (var i = o; i < a; i++)
                this.groupSizes[i] = 0
        }
        for (var l = this.indexOfGroup(t + 1), c = (i = 0,
        r.length); i < c; i++)
            this.tag.insertRule(l, r[i]) && (this.groupSizes[t]++,
            l++)
    }
    ,
    e.prototype.clearGroup = function(t) {
        if (t < this.length) {
            var r = this.groupSizes[t]
              , n = this.indexOfGroup(t)
              , o = n + r;
            this.groupSizes[t] = 0;
            for (var a = n; a < o; a++)
                this.tag.deleteRule(n)
        }
    }
    ,
    e.prototype.getGroup = function(t) {
        var r = "";
        if (t >= this.length || this.groupSizes[t] === 0)
            return r;
        for (var n = this.groupSizes[t], o = this.indexOfGroup(t), a = o + n, i = o; i < a; i++)
            r += "".concat(this.tag.getRule(i)).concat(Jd);
        return r
    }
    ,
    e
}()
  , wa = new Map
  , si = new Map
  , ja = 1
  , Js = function(e) {
    if (wa.has(e))
        return wa.get(e);
    for (; si.has(ja); )
        ja++;
    var t = ja++;
    return wa.set(e, t),
    si.set(t, e),
    t
}
  , CN = function(e, t) {
    ja = t + 1,
    wa.set(e, t),
    si.set(t, e)
}
  , ON = "style[".concat(qn, "][").concat(fy, '="').concat(gl, '"]')
  , _N = new RegExp("^".concat(qn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'))
  , PN = function(e, t, r) {
    for (var n, o = r.split(","), a = 0, i = o.length; a < i; a++)
        (n = o[a]) && e.registerName(t, n)
}
  , IN = function(e, t) {
    for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(Jd), o = [], a = 0, i = n.length; a < i; a++) {
        var l = n[a].trim();
        if (l) {
            var c = l.match(_N);
            if (c) {
                var u = 0 | parseInt(c[1], 10)
                  , h = c[2];
                u !== 0 && (CN(h, u),
                PN(e, h, c[3]),
                e.getTag().insertRules(u, o)),
                o.length = 0
            } else
                o.push(l)
        }
    }
};
function EN() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null
}
var wy = function(e) {
    var t = document.head
      , r = e || t
      , n = document.createElement("style")
      , o = function(l) {
        var c = Array.from(l.querySelectorAll("style[".concat(qn, "]")));
        return c[c.length - 1]
    }(r)
      , a = o !== void 0 ? o.nextSibling : null;
    n.setAttribute(qn, hy),
    n.setAttribute(fy, gl);
    var i = EN();
    return i && n.setAttribute("nonce", i),
    r.insertBefore(n, a),
    n
}
  , TN = function() {
    function e(t) {
        this.element = wy(t),
        this.element.appendChild(document.createTextNode("")),
        this.sheet = function(r) {
            if (r.sheet)
                return r.sheet;
            for (var n = document.styleSheets, o = 0, a = n.length; o < a; o++) {
                var i = n[o];
                if (i.ownerNode === r)
                    return i
            }
            throw _s(17)
        }(this.element),
        this.length = 0
    }
    return e.prototype.insertRule = function(t, r) {
        try {
            return this.sheet.insertRule(r, t),
            this.length++,
            !0
        } catch {
            return !1
        }
    }
    ,
    e.prototype.deleteRule = function(t) {
        this.sheet.deleteRule(t),
        this.length--
    }
    ,
    e.prototype.getRule = function(t) {
        var r = this.sheet.cssRules[t];
        return r && r.cssText ? r.cssText : ""
    }
    ,
    e
}()
  , AN = function() {
    function e(t) {
        this.element = wy(t),
        this.nodes = this.element.childNodes,
        this.length = 0
    }
    return e.prototype.insertRule = function(t, r) {
        if (t <= this.length && t >= 0) {
            var n = document.createTextNode(r);
            return this.element.insertBefore(n, this.nodes[t] || null),
            this.length++,
            !0
        }
        return !1
    }
    ,
    e.prototype.deleteRule = function(t) {
        this.element.removeChild(this.nodes[t]),
        this.length--
    }
    ,
    e.prototype.getRule = function(t) {
        return t < this.length ? this.nodes[t].textContent : ""
    }
    ,
    e
}()
  , RN = function() {
    function e(t) {
        this.rules = [],
        this.length = 0
    }
    return e.prototype.insertRule = function(t, r) {
        return t <= this.length && (this.rules.splice(t, 0, r),
        this.length++,
        !0)
    }
    ,
    e.prototype.deleteRule = function(t) {
        this.rules.splice(t, 1),
        this.length--
    }
    ,
    e.prototype.getRule = function(t) {
        return t < this.length ? this.rules[t] : ""
    }
    ,
    e
}()
  , um = eh
  , LN = {
    isServer: !eh,
    useCSSOMInjection: !uN
}
  , jy = function() {
    function e(t, r, n) {
        t === void 0 && (t = Xn),
        r === void 0 && (r = {});
        var o = this;
        this.options = rt(rt({}, LN), t),
        this.gs = r,
        this.names = new Map(n),
        this.server = !!t.isServer,
        !this.server && eh && um && (um = !1,
        function(a) {
            for (var i = document.querySelectorAll(ON), l = 0, c = i.length; l < c; l++) {
                var u = i[l];
                u && u.getAttribute(qn) !== hy && (IN(a, u),
                u.parentNode && u.parentNode.removeChild(u))
            }
        }(this)),
        rh(this, function() {
            return function(a) {
                for (var i = a.getTag(), l = i.length, c = "", u = function(d) {
                    var m = function(p) {
                        return si.get(p)
                    }(d);
                    if (m === void 0)
                        return "continue";
                    var v = a.names.get(m)
                      , y = i.getGroup(d);
                    if (v === void 0 || y.length === 0)
                        return "continue";
                    var x = "".concat(qn, ".g").concat(d, '[id="').concat(m, '"]')
                      , w = "";
                    v !== void 0 && v.forEach(function(p) {
                        p.length > 0 && (w += "".concat(p, ","))
                    }),
                    c += "".concat(y).concat(x, '{content:"').concat(w, '"}').concat(Jd)
                }, h = 0; h < l; h++)
                    u(h);
                return c
            }(o)
        })
    }
    return e.registerId = function(t) {
        return Js(t)
    }
    ,
    e.prototype.reconstructWithOptions = function(t, r) {
        return r === void 0 && (r = !0),
        new e(rt(rt({}, this.options), t),this.gs,r && this.names || void 0)
    }
    ,
    e.prototype.allocateGSInstance = function(t) {
        return this.gs[t] = (this.gs[t] || 0) + 1
    }
    ,
    e.prototype.getTag = function() {
        return this.tag || (this.tag = (t = function(r) {
            var n = r.useCSSOMInjection
              , o = r.target;
            return r.isServer ? new RN(o) : n ? new TN(o) : new AN(o)
        }(this.options),
        new SN(t)));
        var t
    }
    ,
    e.prototype.hasNameForId = function(t, r) {
        return this.names.has(t) && this.names.get(t).has(r)
    }
    ,
    e.prototype.registerName = function(t, r) {
        if (Js(t),
        this.names.has(t))
            this.names.get(t).add(r);
        else {
            var n = new Set;
            n.add(r),
            this.names.set(t, n)
        }
    }
    ,
    e.prototype.insertRules = function(t, r, n) {
        this.registerName(t, r),
        this.getTag().insertRules(Js(t), n)
    }
    ,
    e.prototype.clearNames = function(t) {
        this.names.has(t) && this.names.get(t).clear()
    }
    ,
    e.prototype.clearRules = function(t) {
        this.getTag().clearGroup(Js(t)),
        this.clearNames(t)
    }
    ,
    e.prototype.clearTag = function() {
        this.tag = void 0
    }
    ,
    e
}()
  , $N = /&/g
  , MN = /^\s*\/\/.*$/gm;
function ky(e, t) {
    return e.map(function(r) {
        return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value),
        r.value = r.value.replaceAll(",", ",".concat(t, " ")),
        r.props = r.props.map(function(n) {
            return "".concat(t, " ").concat(n)
        })),
        Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = ky(r.children, t)),
        r
    })
}
function zN(e) {
    var t, r, n, o = Xn, a = o.options, i = a === void 0 ? Xn : a, l = o.plugins, c = l === void 0 ? xl : l, u = function(m, v, y) {
        return y.startsWith(r) && y.endsWith(r) && y.replaceAll(r, "").length > 0 ? ".".concat(t) : m
    }, h = c.slice();
    h.push(function(m) {
        m.type === hl && m.value.includes("&") && (m.props[0] = m.props[0].replace($N, r).replace(n, u))
    }),
    i.prefix && h.push(cN),
    h.push(aN);
    var d = function(m, v, y, x) {
        v === void 0 && (v = ""),
        y === void 0 && (y = ""),
        x === void 0 && (x = "&"),
        t = x,
        r = v,
        n = new RegExp("\\".concat(r, "\\b"),"g");
        var w = m.replace(MN, "")
          , p = oN(y || v ? "".concat(y, " ").concat(v, " { ").concat(w, " }") : w);
        i.namespace && (p = ky(p, i.namespace));
        var f = [];
        return oi(p, iN(h.concat(lN(function(g) {
            return f.push(g)
        })))),
        f
    };
    return d.hash = c.length ? c.reduce(function(m, v) {
        return v.name || _s(15),
        On(m, v.name)
    }, py).toString() : "",
    d
}
var DN = new jy
  , Su = zN()
  , Ny = Ge.createContext({
    shouldForwardProp: void 0,
    styleSheet: DN,
    stylis: Su
});
Ny.Consumer;
Ge.createContext(void 0);
function dm() {
    return E.useContext(Ny)
}
var WN = function() {
    function e(t, r) {
        var n = this;
        this.inject = function(o, a) {
            a === void 0 && (a = Su);
            var i = n.name + a.hash;
            o.hasNameForId(n.id, i) || o.insertRules(n.id, i, a(n.rules, i, "@keyframes"))
        }
        ,
        this.name = t,
        this.id = "sc-keyframes-".concat(t),
        this.rules = r,
        rh(this, function() {
            throw _s(12, String(n.name))
        })
    }
    return e.prototype.getName = function(t) {
        return t === void 0 && (t = Su),
        this.name + t.hash
    }
    ,
    e
}()
  , BN = function(e) {
    return e >= "A" && e <= "Z"
};
function hm(e) {
    for (var t = "", r = 0; r < e.length; r++) {
        var n = e[r];
        if (r === 1 && n === "-" && e[0] === "-")
            return e;
        BN(n) ? t += "-" + n.toLowerCase() : t += n
    }
    return t.startsWith("ms-") ? "-" + t : t
}
var Sy = function(e) {
    return e == null || e === !1 || e === ""
}
  , Cy = function(e) {
    var t, r, n = [];
    for (var o in e) {
        var a = e[o];
        e.hasOwnProperty(o) && !Sy(a) && (Array.isArray(a) && a.isCss || Zn(a) ? n.push("".concat(hm(o), ":"), a, ";") : ms(a) ? n.push.apply(n, ni(ni(["".concat(o, " {")], Cy(a), !1), ["}"], !1)) : n.push("".concat(hm(o), ": ").concat((t = o,
        (r = a) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in Nx || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")))
    }
    return n
};
function qr(e, t, r, n) {
    if (Sy(e))
        return [];
    if (th(e))
        return [".".concat(e.styledComponentId)];
    if (Zn(e)) {
        if (!Zn(a = e) || a.prototype && a.prototype.isReactComponent || !t)
            return [e];
        var o = e(t);
        return qr(o, t, r, n)
    }
    var a;
    return e instanceof WN ? r ? (e.inject(r, n),
    [e.getName(n)]) : [e] : ms(e) ? Cy(e) : Array.isArray(e) ? Array.prototype.concat.apply(xl, e.map(function(i) {
        return qr(i, t, r, n)
    })) : [e.toString()]
}
function FN(e) {
    for (var t = 0; t < e.length; t += 1) {
        var r = e[t];
        if (Zn(r) && !th(r))
            return !1
    }
    return !0
}
var HN = gy(gl)
  , UN = function() {
    function e(t, r, n) {
        this.rules = t,
        this.staticRulesId = "",
        this.isStatic = (n === void 0 || n.isStatic) && FN(t),
        this.componentId = r,
        this.baseHash = On(HN, r),
        this.baseStyle = n,
        jy.registerId(r)
    }
    return e.prototype.generateAndInjectStyles = function(t, r, n) {
        var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
        if (this.isStatic && !n.hash)
            if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId))
                o = Vr(o, this.staticRulesId);
            else {
                var a = cm(qr(this.rules, t, r, n))
                  , i = ku(On(this.baseHash, a) >>> 0);
                if (!r.hasNameForId(this.componentId, i)) {
                    var l = n(a, ".".concat(i), void 0, this.componentId);
                    r.insertRules(this.componentId, i, l)
                }
                o = Vr(o, i),
                this.staticRulesId = i
            }
        else {
            for (var c = On(this.baseHash, n.hash), u = "", h = 0; h < this.rules.length; h++) {
                var d = this.rules[h];
                if (typeof d == "string")
                    u += d;
                else if (d) {
                    var m = cm(qr(d, t, r, n));
                    c = On(c, m + h),
                    u += m
                }
            }
            if (u) {
                var v = ku(c >>> 0);
                r.hasNameForId(this.componentId, v) || r.insertRules(this.componentId, v, n(u, ".".concat(v), void 0, this.componentId)),
                o = Vr(o, v)
            }
        }
        return o
    }
    ,
    e
}()
  , Oy = Ge.createContext(void 0);
Oy.Consumer;
var oc = {};
function GN(e, t, r) {
    var n = th(e)
      , o = e
      , a = !nc(e)
      , i = t.attrs
      , l = i === void 0 ? xl : i
      , c = t.componentId
      , u = c === void 0 ? function(b, j) {
        var k = typeof b != "string" ? "sc" : om(b);
        oc[k] = (oc[k] || 0) + 1;
        var N = "".concat(k, "-").concat(pN(gl + k + oc[k]));
        return j ? "".concat(j, "-").concat(N) : N
    }(t.displayName, t.parentComponentId) : c
      , h = t.displayName
      , d = h === void 0 ? function(b) {
        return nc(b) ? "styled.".concat(b) : "Styled(".concat(gN(b), ")")
    }(e) : h
      , m = t.displayName && t.componentId ? "".concat(om(t.displayName), "-").concat(t.componentId) : t.componentId || u
      , v = n && o.attrs ? o.attrs.concat(l).filter(Boolean) : l
      , y = t.shouldForwardProp;
    if (n && o.shouldForwardProp) {
        var x = o.shouldForwardProp;
        if (t.shouldForwardProp) {
            var w = t.shouldForwardProp;
            y = function(b, j) {
                return x(b, j) && w(b, j)
            }
        } else
            y = x
    }
    var p = new UN(r,m,n ? o.componentStyle : void 0);
    function f(b, j) {
        return function(k, N, L) {
            var P = k.attrs
              , I = k.componentStyle
              , B = k.defaultProps
              , D = k.foldedComponentIds
              , F = k.styledComponentId
              , C = k.target
              , O = Ge.useContext(Oy)
              , _ = dm()
              , T = k.shouldForwardProp || _.shouldForwardProp
              , S = dN(N, O, B) || Xn
              , A = function(Re, We, Ze) {
                for (var cr, Wr = rt(rt({}, We), {
                    className: void 0,
                    theme: Ze
                }), kl = 0; kl < Re.length; kl += 1) {
                    var Es = Zn(cr = Re[kl]) ? cr(Wr) : cr;
                    for (var ur in Es)
                        Wr[ur] = ur === "className" ? Vr(Wr[ur], Es[ur]) : ur === "style" ? rt(rt({}, Wr[ur]), Es[ur]) : Es[ur]
                }
                return We.className && (Wr.className = Vr(Wr.className, We.className)),
                Wr
            }(P, N, S)
              , M = A.as || C
              , H = {};
            for (var G in A)
                A[G] === void 0 || G[0] === "$" || G === "as" || G === "theme" && A.theme === S || (G === "forwardedAs" ? H.as = A.forwardedAs : T && !T(G, M) || (H[G] = A[G]));
            var q = function(Re, We) {
                var Ze = dm()
                  , cr = Re.generateAndInjectStyles(We, Ze.styleSheet, Ze.stylis);
                return cr
            }(I, A)
              , re = Vr(D, F);
            return q && (re += " " + q),
            A.className && (re += " " + A.className),
            H[nc(M) && !my.has(M) ? "class" : "className"] = re,
            H.ref = L,
            E.createElement(M, H)
        }(g, b, j)
    }
    f.displayName = d;
    var g = Ge.forwardRef(f);
    return g.attrs = v,
    g.componentStyle = p,
    g.displayName = d,
    g.shouldForwardProp = y,
    g.foldedComponentIds = n ? Vr(o.foldedComponentIds, o.styledComponentId) : "",
    g.styledComponentId = m,
    g.target = n ? o.target : e,
    Object.defineProperty(g, "defaultProps", {
        get: function() {
            return this._foldedDefaultProps
        },
        set: function(b) {
            this._foldedDefaultProps = n ? function(j) {
                for (var k = [], N = 1; N < arguments.length; N++)
                    k[N - 1] = arguments[N];
                for (var L = 0, P = k; L < P.length; L++)
                    Nu(j, P[L], !0);
                return j
            }({}, o.defaultProps, b) : b
        }
    }),
    rh(g, function() {
        return ".".concat(g.styledComponentId)
    }),
    a && by(g, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0
    }),
    g
}
function fm(e, t) {
    for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1)
        r.push(t[n], e[n + 1]);
    return r
}
var mm = function(e) {
    return Object.assign(e, {
        isCss: !0
    })
};
function VN(e) {
    for (var t = [], r = 1; r < arguments.length; r++)
        t[r - 1] = arguments[r];
    if (Zn(e) || ms(e))
        return mm(qr(fm(xl, ni([e], t, !0))));
    var n = e;
    return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? qr(n) : mm(qr(fm(n, t)))
}
function Cu(e, t, r) {
    if (r === void 0 && (r = Xn),
    !t)
        throw _s(1, t);
    var n = function(o) {
        for (var a = [], i = 1; i < arguments.length; i++)
            a[i - 1] = arguments[i];
        return e(t, r, VN.apply(void 0, ni([o], a, !1)))
    };
    return n.attrs = function(o) {
        return Cu(e, t, rt(rt({}, r), {
            attrs: Array.prototype.concat(r.attrs, o).filter(Boolean)
        }))
    }
    ,
    n.withConfig = function(o) {
        return Cu(e, t, rt(rt({}, r), o))
    }
    ,
    n
}
var _y = function(e) {
    return Cu(GN, e)
}
  , zt = _y;
my.forEach(function(e) {
    zt[e] = _y(e)
});
const YN = zt.nav`
  grid-template-columns: 20% 70% 10%;
  position: relative;
  background-color: #fff;
  color: #343434;
  z-index: 10;
  position: sticky;
  top: 0;
  display: grid;
  align-items: center;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 1.5rem 2rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
  @media (max-width: 400px) {
    padding: 1rem;
  }
`
  , QN = zt.img`
  display: flex;
  margin-right: auto;

  @media (max-width: 821px) {
  }

  @media (max-width: 600px) {
    display: none;
  }
`
  , KN = zt.img`
  display: none;
  margin: auto 0;

  @media (max-width: 600px) {
    display: block;
    width: 4rem;
  }
  @media (max-width: 400px) {
    display: block;
    width: 2.5rem;
  }
`
  , qN = zt.div`
  display: flex;
  gap: 2rem;
  margin: auto;
  position: relative;
  @media (max-width: 1100px) {
    gap: 1rem;
  }

  @media (max-width: 1000px) {
    display: ${e => e.active ? "flex" : "none"};
    flex-direction: column;
    text-align: center;
    padding: 2rem 0;
    margin-right: auto;
  }
`
  , XN = zt(fs)`
  color: #343434;
  font-weight: 500;
  transition: 0.2s;
  //   &.${e => e.activeclassname} {
  //     color: #ef0909;
  //   }
  &:hover {
    color: #ef0909;
  }
  @media (max-width: 1000px) {
    display: block;
    padding-top: 2rem;
    font-size: 1.5rem;
    text-align: center;
  }
  @media (max-width: 800px) {
    padding: 1rem;
  }
`;
zt.button`
  @media (max-width: 600px) {
    height: 4.5rem;
    width: 13rem;
  }
  @media (max-width: 400px) {
  }
`;
const ZN = zt.div`
  display: ${e => e.open ? "block" : "none"};
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 100%;
  left: 0;
  width: 15rem;
  border-radius: 10px;
  padding: 1rem 1rem;
  @media (max-width: 600px) {
    position: relative;
  }
`
  , JN = zt(z)`
  color: #343434;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: 200ms ease-in-out;
  &:hover {
    background-color: #ddd;
  }
  @media (max-width: 1000px) {
    text-align: left;
  }
`
  , eS = zt.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  z-index: 100;
  background-color: #ef0909;
  padding: 2rem 1rem;
  border-radius: 50px;
  transition: 300ms ease-in-out;

  &:hover {
    box-shadow: 2px 6px 20px -1px rgba(240, 0, 0, 0.36);
  }
  @media (max-width: 821px) {
    grid-template-columns: repeat(4, 1fr);
    top: 93%;
    border-radius: 20px;
    padding: 1rem 3rem;
  }
  @media (max-width: 600px) {
    padding: 1rem 2rem;
  }
  @media (max-width: 400px) {
    padding: 1rem 1.5rem;
  }
`;
zt(z)`
  color: #fefefe;
  transition: 200ms ease-in-out;
`;
const tS = () => {
    const [e,t] = E.useState(!1)
      , [r,n] = E.useState(!1)
      , [o,a] = E.useState(!1)
      , i = E.useRef(null)
      , l = E.useRef(null)
      , c = ho();
    E.useEffect( () => {
        const d = m => {
            i.current && !i.current.contains(m.target) && n(!1),
            l.current && !l.current.contains(m.target) && a(!1)
        }
        ;
        return document.addEventListener("mousedown", d),
        () => {
            document.removeEventListener("mousedown", d)
        }
    }
    , []),
    E.useEffect( () => {
        window.scrollTo(0, 0)
    }
    , [c]);
    const u = () => {
        t(!1),
        n(!1),
        a(!1)
    }
      , h = [{
        page: "Home",
        href: "/"
    }, {
        page: "Services",
        href: "#",
        dropdown: [{
            page: "Book Writing & Editing",
            href: "/editing"
        }, {
            page: "Content Writing",
            href: "/contentWriting"
        }, {
            page: "Coaching For Writers",
            href: "/coachingForWriters"
        }]
    }, {
        page: "About",
        href: "/about"
    }, {
        page: "Subscriptions",
        href: "#",
        dropdown: [{
            page: "Guidance For Solopreneurs",
            href: "/guidianceForSolopreneur"
        }, {
            page: "Coaching For Authors",
            href: "/coachingForAuthors"
        }]
    }, {
        page: "Books",
        href: "/book"
    }, {
        page: "Blog",
        href: "https://my-blog-pi-two.vercel.app/"
    }, {
        page: "Community",
        href: "/community"
    }];
    return s.jsx(s.Fragment, {
        children: s.jsxs(YN, {
            id: "nav",
            className: "px-12 py-2 drop-shadow-md",
            children: [s.jsxs("div", {
                children: [s.jsx(fs, {
                    to: "/",
                    onClick: u,
                    children: s.jsx(QN, {
                        className: "w-[11rem]",
                        src: Lk
                    })
                }), s.jsx(fs, {
                    to: "/",
                    onClick: u,
                    children: s.jsx(KN, {
                        className: "",
                        src: Gk,
                        alt: ""
                    })
                })]
            }), e ? s.jsx(Uk, {
                className: "md:hidden xx:block absolute sm:top-[50px] sm:right-[30px] ss:top-[45px] ss:right-[30px] xs:top-[50px] xs:right-[30px] xx:top-[30px] xx:right-[20px] xx:text-[1.4rem] xs:text-[2rem] text-accent",
                onClick: () => t(!e)
            }) : s.jsx(Hk, {
                className: "md:hidden xx:block absolute sm:top-[50px] sm:right-[30px] ss:top-[45px] ss:right-[30px] xs:top-[50px] xs:right-[30px] xx:top-[30px] xx:right-[20px] xx:text-[1.4rem] xs:text-[2rem] text-accent",
                onClick: () => t(!e)
            }), s.jsx(qN, {
                active: e,
                children: h.map(d => s.jsxs("div", {
                    className: "relative",
                    children: [s.jsx(XN, {
                        to: d.href,
                        className: "text-base font-semibold",
                        onClick: m => {
                            d.page === "Services" || d.page === "Subscriptions" ? (m.preventDefault(),
                            d.page === "Services" && n(!r),
                            d.page === "Subscriptions" && a(!o)) : u()
                        }
                        ,
                        children: d.page
                    }), d.dropdown && s.jsx(ZN, {
                        className: "absolute top-full left-0",
                        open: d.page === "Services" && r || d.page === "Subscriptions" && o,
                        ref: d.page === "Services" ? i : l,
                        children: d.dropdown.map(m => s.jsx(JN, {
                            to: m.href,
                            className: "block px-4 py-2 text-sm",
                            onClick: u,
                            children: m.page
                        }, m.page))
                    })]
                }, d.page))
            })]
        })
    })
}
;
function rS(e) {
    return zr({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
            },
            child: []
        }]
    })(e)
}
function nS(e) {
    return zr({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
            },
            child: []
        }]
    })(e)
}
function oS(e) {
    return zr({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            },
            child: []
        }]
    })(e)
}
function sS(e) {
    return zr({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
            },
            child: []
        }]
    })(e)
}
const aS = () => s.jsx(s.Fragment, {
    children: s.jsxs(eS, {
        id: "socials",
        children: [s.jsx(z, {
            to: "https://wa.me/message/DOCQNYXAEPVDH1",
            children: s.jsx(sS, {
                className: "ss:text-base xx:text-sm text-primary"
            })
        }), s.jsx(z, {
            to: "https://wa.me/message/DOCQNYXAEPVDH1",
            children: s.jsx(rS, {
                className: "ss:text-base xx:text-sm text-primary"
            })
        }), s.jsx(z, {
            to: "https://instagram.com/contents_by_brownpatience?utm_medium=copy_link",
            children: s.jsx(oS, {
                className: "ss:text-base xx:text-sm text-primary"
            })
        }), s.jsx(z, {
            to: "https://www.facebook.com/Compelling_Storywriter?mibextid=ZbWKwL",
            children: s.jsx(nS, {
                className: "ss:text-base xx:text-sm text-primary "
            })
        })]
    })
})
  , iS = () => s.jsx(s.Fragment, {
    children: s.jsx("section", {
        id: "hero",
        "aria-labelledby": "hero-heading",
        children: s.jsx("div", {
            className: "lg:pb-32 xs:pb-12 ss:pb-16 ss:px-0 lg:px-12 bg-extraClr dark:bg-secondary",
            children: s.jsx("div", {
                className: "m-auto px-6 xx:pt-8 pt-24 ss:py-12 md:px-12 lg:pt-[4.8rem] lg:px-7",
                children: s.jsxs("div", {
                    className: "grid lg:grid-cols-2 sm:grid-cols-1 items-center gap-12 px-2 md:px-0",
                    children: [s.jsx("div", {
                        className: "col-span-1",
                        children: s.jsx("div", {
                            className: "relative w-full",
                            children: s.jsx("img", {
                                src: "https://i.postimg.cc/YSMKgSpT/untitled-1082-01-jpeg.jpg",
                                alt: "Miss Brown Patience ",
                                loading: "lazy",
                                style: {
                                    borderRadius: "10px",
                                    boxShadow: "-12px 7px 31px 8px rgba(0,0,0,0.45)"
                                },
                                className: "sm:m-auto ss:m-auto"
                            })
                        })
                    }), s.jsxs("div", {
                        className: "lg:text-left xx:mt-8 xs:mt-6 sm:text-center sm:mt-12 place-self-center lg:col-span-1",
                        role: "region",
                        "aria-labelledby": "hero-heading",
                        children: [s.jsx("h1", {
                            id: "hero-heading",
                            className: "max-w-2xl sm:leading-[1.3] mb-8 font-extrabold tracking-tight ss:text-3xl xx:text-2xl sm:text-5xl dark:text-white",
                            children: "Get the help you need to write your book, to share your message — clearly, compellingly."
                        }), s.jsx(z, {
                            to: "https://wa.me/message/DOCQNYXAEPVDH1",
                            children: s.jsx("button", {
                                className: "btn-one ss:mt-6 inline-flex items-center xx:mb-6 justify-center xx:px-5 xx:py-3 xx:mr-0 px-6 py-4 mr-3 xs:text-sm xx:text-xs text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900",
                                "aria-label": "Message me on WhatsApp",
                                children: "MESSAGE ME"
                            })
                        })]
                    })]
                })
            })
        })
    })
})
  , lS = () => s.jsx(s.Fragment, {
    children: s.jsx("div", {
        id: "my-story",
        "aria-labelledby": "my-story-heading",
        children: s.jsx("section", {
            className: "bg-extraClr dark:bg-[rgba(0,0,0,0.61)] xx:px-6 xs:px-6 px-12",
            children: s.jsxs("div", {
                className: "gap-8 items-center py-24 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6",
                children: [s.jsx("h4", {
                    id: "my-story-heading",
                    style: {
                        paddingBottom: "1rem"
                    },
                    className: "ss:mb-24 xs:mb-12 xx:mb-12 text-secondary xs:inline-block xx:inline-block ss:hidden dark:text-primary border-b-4 border-solid border-b-secondary dark:border-b-primary font-light",
                    children: "My Story"
                }), s.jsx("div", {
                    className: "m-auto py-6 grid place-content-center",
                    children: s.jsx("img", {
                        className: "justify-self-start lg:mr-12 md:mr-0",
                        src: "https://i.postimg.cc/dQpzFDWb/20240511-231906.jpg",
                        alt: "Brown Patience",
                        style: {
                            borderRadius: "10px",
                            boxShadow: " -8px 7px 31px 8px rgba(0,0,0,0.51)"
                        }
                    })
                }), s.jsxs("div", {
                    className: "mt-4 md:mt-0 text-center",
                    children: [s.jsx("h4", {
                        style: {
                            paddingBottom: "1rem"
                        },
                        className: "ss:my-12 xs:mb-12 text-secondary xs:hidden xx:hidden ss:inline-block dark:text-primary ss:text-secondary border-b-4 border-solid border-b-secondary dark:border-b-primary font-light",
                        children: "My Story"
                    }), s.jsx("h2", {
                        className: "mb-12 xx:my-12 ss:text-4xl ss:text-center xx:text-2xl xx:text-left tracking-tight font-extrabold text-accent dark:text-white",
                        children: "Meet Brown Patience"
                    }), s.jsx("p", {
                        className: "mb-6 font-light xx:text-left text-secondary xs:text-base md:text-lg dark:text-primary",
                        children: "As a teen, I wrote for fun. I wrote to relieve boredom. I could be sitting in a place and mentally remove myself from there by scribbling a letter to an imaginary cousin in Vienna. Nevermind that I had no idea if Vienna was actually a place. Writing was how I went to places I wished I could be."
                    }), s.jsx("p", {
                        className: "mt-4 font-light xx:text-left text-secondary xs:text-base md:text-lg dark:text-primary",
                        children: "As soon as the English Language teacher said, “Write a letter to your uncle in London,” it was my lucky day! All these should have told me writing was the path for me, but I couldn't have known. I said I'd be a banker when I grew up; I set my mind on pursuing accounting in college. And that's precisely what I did. Yet purpose can and will find you."
                    }), s.jsx("div", {
                        className: "xx:grid xx:place-content-start mt-6",
                        children: s.jsx(z, {
                            to: "/about",
                            title: "Learn more about Brown Patience's story",
                            "aria-label": "Learn more about Brown Patience's story",
                            children: s.jsx("div", {
                                className: "btn-two-container",
                                children: s.jsx("button", {
                                    className: "text-xl font-extrabold btn-two mt-3 w-[9.375rem] h-[3.125rem]",
                                    children: "KNOW MORE"
                                })
                            })
                        })
                    })]
                })]
            })
        })
    })
})
  , cS = () => s.jsx(s.Fragment, {
    children: s.jsx("section", {
        id: "service-sect",
        "aria-labelledby": "services-heading",
        children: s.jsx("div", {
            className: "py-24 xx:py-12 xx:px-6 xs:py-16 xs:px-8 px-12 grid place-content-center dark:bg-[#111] bg-primary",
            children: s.jsxs("div", {
                className: "m-auto space-y-12 grid",
                children: [s.jsxs("div", {
                    className: "text-center",
                    children: [s.jsx("h2", {
                        id: "services-heading",
                        style: {
                            display: "inline-block",
                            paddingBottom: "1rem"
                        },
                        className: "border-b-4 border-solid border-b-secondary dark:border-b-primary mb-12 xs:mb-8 text-center text-2xl xs:text-2xl font-bold text-secondary dark:text-primary md:text-4xl",
                        children: "My Services"
                    }), s.jsx("p", {
                        className: "text-secondary dark:text-primary",
                        children: "“If you have a great message or story to share. . . reach Brown Patience.” — Timi Oshinowo."
                    })]
                }), s.jsxs("div", {
                    className: "mt-16 grid place-self-center gap-8 sm:w-2/3 md:w-full md:grid-cols-2 md:-mx-8 lg:grid-cols-3",
                    children: [s.jsx("div", {
                        style: {
                            boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.75)"
                        },
                        className: "p-6 py-12 sm:p-12 rounded-3xl dark:bg-secondary dark:shadow-none",
                        children: s.jsxs("div", {
                            className: "space-y-12 text-center",
                            children: [s.jsx(z, {
                                to: "/editing",
                                title: "Book Writing & Editing",
                                className: "text-xs",
                                children: s.jsx("img", {
                                    src: "https://i.postimg.cc/bvvgbxc4/pencil.png",
                                    className: "w-20 xs:w-16 mx-auto",
                                    width: "512",
                                    height: "512",
                                    alt: "Pencil icon representing book writing and editing services"
                                })
                            }), s.jsxs("div", {
                                className: "space-y-6",
                                children: [s.jsx("h3", {
                                    className: "text-2xl font-semibold text-secondary transition dark:text-white",
                                    children: "Book Writing & Editing"
                                }), s.jsx("p", {
                                    className: "text-secondary dark:text-primary",
                                    children: "Have professional eyes go through your manuscript or get help putting your thoughts together to create a book."
                                }), s.jsx(z, {
                                    to: "/editing",
                                    className: "group relative flex mx-auto h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-primary before:bg-primary before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-secondary dark:before:bg-secondary",
                                    "aria-label": "Learn more about book writing and editing services",
                                    children: s.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        className: "relative w-5 h-5 text-secondary dark:text-white transition duration-300 group-hover:translate-x-1",
                                        children: s.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z",
                                            clipRule: "evenodd"
                                        })
                                    })
                                })]
                            })]
                        })
                    }), s.jsx("div", {
                        style: {
                            boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.75)"
                        },
                        className: "p-6 py-12 sm:p-12 rounded-3xl dark:bg-secondary",
                        children: s.jsxs("div", {
                            className: "space-y-12 text-center",
                            children: [s.jsx(z, {
                                to: "/contentWriting",
                                title: "Content Writing Services",
                                className: "text-xs",
                                children: s.jsx("img", {
                                    src: "https://i.postimg.cc/52XnRN1p/web-design.png",
                                    className: "w-20 xs:w-16 mx-auto",
                                    width: "512",
                                    height: "512",
                                    alt: "Icon representing content writing services"
                                })
                            }), s.jsxs("div", {
                                className: "space-y-6",
                                children: [s.jsx("h3", {
                                    className: "text-2xl font-semibold text-secondary transition dark:text-white",
                                    children: "Content Writing"
                                }), s.jsx("p", {
                                    className: "text-secondary dark:text-primary",
                                    children: "Social media content, web copies, newsletters, blog posts — tell me what you need, and you’ll get it."
                                }), s.jsx(z, {
                                    to: "/contentWriting",
                                    className: "group relative flex mx-auto h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-secondary dark:before:bg-secondary",
                                    "aria-label": "Learn more about content writing services",
                                    children: s.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        className: "relative w-5 h-5 text-secondary dark:text-white transition duration-300 group-hover:translate-x-1",
                                        children: s.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z",
                                            clipRule: "evenodd"
                                        })
                                    })
                                })]
                            })]
                        })
                    }), s.jsx("div", {
                        style: {
                            boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.75)"
                        },
                        className: "p-6 py-12 sm:p-12 rounded-3xl dark:bg-secondary dark:shadow-none",
                        children: s.jsxs("div", {
                            className: "space-y-12 text-center",
                            children: [s.jsx(z, {
                                to: "/coachingForWriters",
                                title: "Coaching for Writers",
                                className: "text-xs",
                                children: s.jsx("img", {
                                    src: "https://i.postimg.cc/8zfmbKB0/training.png",
                                    className: "w-20 xx:w-16 xs:w-16 mx-auto",
                                    width: "512",
                                    height: "512",
                                    alt: "Icon representing coaching for writers"
                                })
                            }), s.jsxs("div", {
                                className: "space-y-6",
                                children: [s.jsx("h3", {
                                    className: "text-2xl font-semibold text-secondary transition dark:text-white",
                                    children: "Coaching For Writers"
                                }), s.jsx("p", {
                                    className: "text-secondary dark:text-primary",
                                    children: "Learn to tell compelling stories that keep people hooked through our writing class."
                                }), s.jsx(z, {
                                    to: "/coachingForWriters",
                                    className: "group relative flex mx-auto h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-primary before:bg-primary before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-secondary dark:before:bg-secondary",
                                    "aria-label": "Learn more about coaching for writers",
                                    children: s.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        className: "relative w-5 h-5 text-gray-600 dark:text-white transition duration-300 group-hover:translate-x-1",
                                        children: s.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z",
                                            clipRule: "evenodd"
                                        })
                                    })
                                })]
                            })]
                        })
                    })]
                })]
            })
        })
    })
});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Ou = function() {
    return Ou = Object.assign || function(t) {
        for (var r, n = 1, o = arguments.length; n < o; n++) {
            r = arguments[n];
            for (var a in r)
                Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a])
        }
        return t
    }
    ,
    Ou.apply(this, arguments)
};
function uS(e, t) {
    var r = {};
    for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
            t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
}
var $n = ""
  , Fo = null
  , ka = null
  , Py = null;
function nh() {
    $n = "",
    Fo !== null && Fo.disconnect(),
    ka !== null && (window.clearTimeout(ka),
    ka = null)
}
function pm(e) {
    var t = ["BUTTON", "INPUT", "SELECT", "TEXTAREA"]
      , r = ["A", "AREA"];
    return t.includes(e.tagName) && !e.hasAttribute("disabled") || r.includes(e.tagName) && e.hasAttribute("href")
}
function gm() {
    var e = null;
    if ($n === "#")
        e = document.body;
    else {
        var t = $n.replace("#", "");
        e = document.getElementById(t),
        e === null && $n === "#top" && (e = document.body)
    }
    if (e !== null) {
        Py(e);
        var r = e.getAttribute("tabindex");
        return r === null && !pm(e) && e.setAttribute("tabindex", -1),
        e.focus({
            preventScroll: !0
        }),
        r === null && !pm(e) && (e.blur(),
        e.removeAttribute("tabindex")),
        nh(),
        !0
    }
    return !1
}
function dS(e) {
    window.setTimeout(function() {
        gm() === !1 && (Fo === null && (Fo = new MutationObserver(gm)),
        Fo.observe(document, {
            attributes: !0,
            childList: !0,
            subtree: !0
        }),
        ka = window.setTimeout(function() {
            nh()
        }, e || 1e4))
    }, 0)
}
function Iy(e) {
    return Ge.forwardRef(function(t, r) {
        var n = "";
        typeof t.to == "string" && t.to.includes("#") ? n = "#" + t.to.split("#").slice(1).join("#") : typeof t.to == "object" && typeof t.to.hash == "string" && (n = t.to.hash);
        var o = {};
        e === fs && (o.isActive = function(l, c) {
            return l && l.isExact && c.hash === n
        }
        );
        function a(l) {
            nh(),
            $n = t.elementId ? "#" + t.elementId : n,
            t.onClick && t.onClick(l),
            $n !== "" && !l.defaultPrevented && l.button === 0 && (!t.target || t.target === "_self") && !(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey) && (Py = t.scroll || function(c) {
                return t.smooth ? c.scrollIntoView({
                    behavior: "smooth"
                }) : c.scrollIntoView()
            }
            ,
            dS(t.timeout))
        }
        var i = uS(t, ["scroll", "smooth", "timeout", "elementId"]);
        return Ge.createElement(e, Ou({}, o, i, {
            onClick: a,
            ref: r
        }), t.children)
    })
}
var Oe = Iy(z);
Iy(fs);
const hS = () => s.jsx(s.Fragment, {
    children: s.jsx("div", {
        id: "my-book",
        children: s.jsxs("section", {
            className: "ss:py-24 xx:py-12 bg-primary dark:bg-secondary xx:px-0 ss:px-12",
            "aria-labelledby": "books-worked-on-heading",
            children: [s.jsxs("div", {
                className: "mx-auto px-6 mb-8 md:px-12",
                children: [s.jsx("div", {
                    className: "text-center",
                    children: s.jsx("h2", {
                        id: "books-worked-on-heading",
                        className: "mb-12 text-center text-2xl xx:hidden ss:inline-block font-bold text-secondary dark:text-white md:text-4xl",
                        style: {
                            borderBottom: "2px solid #343434",
                            paddingBottom: "1rem"
                        },
                        children: "Books I've Worked On"
                    })
                }), s.jsxs("div", {
                    className: "grid gap-6 ss:px-4 xx:px-0 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3",
                    children: [s.jsxs("div", {
                        className: "group relative rounded-3xl xx:w-full ss:space-y-6 overflow-hidden",
                        children: [s.jsx("img", {
                            className: "mx-auto h-full w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0",
                            src: "https://i.postimg.cc/wjLvVbsj/20240218-134019.jpg",
                            alt: "Book by Precious Ayomikun",
                            loading: "lazy",
                            width: "640",
                            height: "805"
                        }), s.jsxs("div", {
                            className: "absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-accent dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0",
                            children: [s.jsx("div", {
                                children: s.jsx("h4", {
                                    className: "text-xl xx:mb-2 ss:mb-4 font-semibold dark:text-gray-700 text-white",
                                    children: "Precious Ayomikun"
                                })
                            }), s.jsxs("p", {
                                className: "mt-2 text-primary dark:text-gray-600 text-base xs:text-sm xx:text-xs",
                                children: ["Precious Ayomikun carries the girl child in her thoughts — in things she does, with the projects she embarks on, and the places she volunteers in...", s.jsx(Oe, {
                                    smooth: !0,
                                    to: "/editing#a-gift-to-deborah",
                                    "aria-label": "Learn more about A Gift to Deborah by Precious Ayomikun",
                                    children: s.jsx("span", {
                                        className: "text-semibold text-primary",
                                        children: "See More"
                                    })
                                })]
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "group relative rounded-3xl space-y-6 overflow-hidden",
                        children: [s.jsx("img", {
                            className: "mx-auto h-full w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0",
                            src: "https://i.postimg.cc/xCxTCwBt/20240218-134201.jpg",
                            alt: "Book by Stephen Akintayo",
                            loading: "lazy",
                            width: "640",
                            height: "805"
                        }), s.jsxs("div", {
                            className: "absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-accent dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0",
                            children: [s.jsx("div", {
                                children: s.jsx("h4", {
                                    className: "text-xl xx:mb-2 ss:mb-4 font-semibold dark:text-gray-700 text-white",
                                    children: "Stephen Akintayo"
                                })
                            }), s.jsxs("p", {
                                className: "mt-2 text-primary dark:text-gray-600 text-base xs:text-sm xx:text-xs",
                                children: ["The personnel in charge of getting Dr. Stephen Akintayo's Billionaire Codes edited sought an editor who could cut out repetitions, tighten every chapter, and sharpen the message...", s.jsx(Oe, {
                                    smooth: !0,
                                    to: "/editing#billionaire-codes",
                                    "aria-label": "Learn more about Billionaire Codes by Stephen Akintayo",
                                    children: s.jsx("span", {
                                        className: "text-semibold text-primary",
                                        children: "See More"
                                    })
                                })]
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "group relative rounded-3xl space-y-6 overflow-hidden",
                        children: [s.jsx("img", {
                            className: "mx-auto h-full w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0",
                            src: "https://i.postimg.cc/j2Bx6zxf/20240218-134232.jpg",
                            alt: "Book by Mayowa Owolabi",
                            loading: "lazy",
                            width: "640",
                            height: "805"
                        }), s.jsxs("div", {
                            className: "absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-accent dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0",
                            children: [s.jsx("div", {
                                children: s.jsx("h4", {
                                    className: "text-xl xx:mb-2 ss:mb-4 font-semibold dark:text-gray-700 text-white",
                                    children: "Mayowa Owolabi"
                                })
                            }), s.jsxs("p", {
                                className: "text-primary dark:text-gray-600 text-base xs:text-sm xx:text-xs",
                                children: ["When this manuscript got to me, I was told it had been edited already. I'll never be caught putting down another person's work, but this manuscript surprised me...", s.jsx(Oe, {
                                    smooth: !0,
                                    to: "/editing#edusell",
                                    "aria-label": "Learn more about Edusell by Mayowa Owolabi",
                                    children: s.jsx("span", {
                                        className: "text-semibold text-primary",
                                        children: "See More"
                                    })
                                })]
                            })]
                        })]
                    })]
                })]
            }), s.jsxs("div", {
                className: "mx-auto px-6 md:px-12",
                children: [s.jsxs("div", {
                    className: "my-16 items-center grid ss:grid-cols-2 xx:grid-cols-1",
                    children: [s.jsx("h4", {
                        className: "text-2xl ss:block xx:hidden font-bold text-secondary dark:text-white md:text-2xl",
                        id: "my-books-heading",
                        children: "MY BOOKS"
                    }), s.jsx("div", {
                        className: "ss:justify-self-end xx:justify-self-center",
                        children: s.jsx(z, {
                            to: "/book",
                            "aria-label": "See all books",
                            children: s.jsx("button", {
                                className: "relative ss:ml-6 xx:ml-0 ss:px-6 py-4 xx:px-16 text-secondary text-base font-bold rounded-full overflow-hidden bg-extraClr transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0",
                                children: "ALL BOOKS"
                            })
                        })
                    })]
                }), s.jsxs("div", {
                    className: "grid gap-6 ss:px-4 xx:px-0 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3",
                    children: [s.jsxs("div", {
                        className: "group relative rounded-3xl xx:w-full ss:space-y-6 overflow-hidden",
                        children: [s.jsx("img", {
                            className: "mx-auto h-full w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0",
                            src: "https://i.postimg.cc/X7HmPYNM/IMG-20220917-WA0018.webp",
                            alt: "Book cover by Brown Patience",
                            loading: "lazy",
                            width: "640",
                            height: "805"
                        }), s.jsxs("div", {
                            className: "absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-accent dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0",
                            children: [s.jsx("div", {
                                children: s.jsx("h4", {
                                    className: "text-xl xx:mb-2 ss:mb-6 font-semibold dark:text-gray-700 text-white",
                                    children: "Brown Patience"
                                })
                            }), s.jsxs("p", {
                                className: "text-primary dark:text-gray-600 text-base xs:text-sm xx:text-xs",
                                children: ["This is a book about porn addiction and the darkness that persists even after you've stopped viewing it...", s.jsx(Oe, {
                                    smooth: !0,
                                    to: "/book#so-he-taught-me-no",
                                    "aria-label": "Learn more about So He Taught Me No by Brown Patience",
                                    children: s.jsx("span", {
                                        className: "text-semibold text-primary",
                                        children: "See More"
                                    })
                                })]
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "group relative rounded-3xl space-y-6 overflow-hidden",
                        children: [s.jsx("img", {
                            className: "mx-auto h-full w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0",
                            src: "https://i.postimg.cc/hGS5HP4L/20240207-064730.jpg",
                            alt: "Book cover by Brown Patience",
                            loading: "lazy",
                            width: "640",
                            height: "805"
                        }), s.jsxs("div", {
                            className: "absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-accent dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0",
                            children: [s.jsx("div", {
                                children: s.jsx("h4", {
                                    className: "text-xl xx:mb-2 ss:mb-6 font-semibold dark:text-gray-700 text-white",
                                    children: "Brown Patience"
                                })
                            }), s.jsxs("p", {
                                className: "mt-2 text-primary dark:text-gray-600 text-base xs:text-sm xx:text-xs",
                                children: ["This book builds on years of struggle and triumph over the sinful stronghold of pornography, lust, and its attendant evils...", s.jsx(Oe, {
                                    smooth: !0,
                                    to: "/book#so-he-taught-me-no",
                                    "aria-label": "Learn more about the book So He Taught Me No by Brown Patience",
                                    children: s.jsx("span", {
                                        className: "text-semibold text-primary",
                                        children: "See More"
                                    })
                                })]
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "group relative rounded-3xl  space-y-6 overflow-hidden",
                        children: [s.jsx("img", {
                            className: "mx-auto h-full w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0",
                            src: "https://i.postimg.cc/HxnPkZyj/20240207-064011.jpg",
                            alt: "woman",
                            loading: "lazy",
                            width: "640",
                            height: "805"
                        }), s.jsxs("div", {
                            className: "absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-accent dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0",
                            children: [s.jsx("div", {
                                children: s.jsx("h4", {
                                    className: "text-xl  xx:mb-2  ss:mb-4  font-semibold dark:text-gray-700 text-white",
                                    children: "Brown Patience"
                                })
                            }), s.jsxs("p", {
                                className: " text-primary  dark:text-gray-600 text-base xs:text-sm xx:text-xs",
                                children: ["Fantasy is about the sexual mental struggles we face. Those steamy thoughts that feel like you're engaging in a porn .....", s.jsx(Oe, {
                                    smooth: !0,
                                    to: "/book#fantasy",
                                    children: s.jsx("span", {
                                        className: "text-semibold text-primary",
                                        children: "See More"
                                    })
                                })]
                            })]
                        })]
                    })]
                })]
            })]
        })
    })
})
  , fS = () => s.jsx("section", {
    id: "sub-sect",
    "aria-labelledby": "subscription-heading",
    children: s.jsx("div", {
        className: "py-16 xx:pt-0 dark:bg-[#111]",
        children: s.jsx("div", {
            className: "m-auto px-6 text-primary xx:px-0 md:px-12 lg:px-20",
            children: s.jsxs("div", {
                className: "justify-center gap-6 text-center md:flex md:text-left lg:items-center lg:gap-16",
                children: [s.jsxs("div", {
                    className: "order-last mb-6 rounded-lg shadow-[#343434] bg-accent dark:bg-secondary md:mb-0 md:w-6/12 lg:w-6/12 p-12 xx:px-6",
                    role: "region",
                    "aria-labelledby": "subscription-heading",
                    children: [s.jsx("div", {
                        className: "mb-6",
                        children: s.jsx("h2", {
                            id: "subscription-heading",
                            className: "font-bold mb-6 xx:text-2xl xs:text-3xl text-primary md:text-5xl dark:text-white",
                            children: "Monthly Subscription Packages"
                        })
                    }), s.jsx("div", {
                        className: "mt-12 xx:mb-4",
                        children: s.jsxs("ul", {
                            className: "list-disc mt-4",
                            children: [s.jsxs("li", {
                                className: "text-xl mb-8 xx:text-lg xx:text-left xs:text-left ss:text-left text-primary",
                                children: [s.jsx("strong", {
                                    className: "pl-2",
                                    children: "Guidance for Writing Solopreneurs -"
                                }), s.jsx("del", {
                                    className: "ml-2",
                                    children: "N"
                                }), "15,000 / month", s.jsx("div", {
                                    className: "p-6 rounded mt-2 ml-6 bg-primary text-sm font-semibold text-secondary",
                                    children: s.jsxs("p", {
                                        className: "mt-4",
                                        children: ["With this package, you get proofreading, editing, and necessary revisions to your Christian content.", s.jsx(z, {
                                            to: "/guidianceForSolopreneur",
                                            "aria-label": "Learn more about Guidance for Writing Solopreneurs",
                                            children: s.jsx("i", {
                                                className: "font-bold ml-2 text-accent",
                                                children: "Learn More"
                                            })
                                        })]
                                    })
                                })]
                            }), s.jsxs("li", {
                                className: "text-xl xx:text-lg mb-4 xx:text-left xs:text-left ss:text-left text-primary",
                                children: [s.jsx("strong", {
                                    className: "pl-2",
                                    children: "Coaching For Authors -"
                                }), s.jsx("del", {
                                    className: "ml-2",
                                    children: "N"
                                }), "25,000 / month", s.jsx("div", {
                                    className: "p-6 rounded mt-2 ml-6 bg-primary text-sm font-semibold text-secondary",
                                    children: s.jsxs("p", {
                                        children: ["The coaching package where I guide you as you author your book, chapter by chapter.", s.jsx(z, {
                                            to: "/coachingForAuthors",
                                            "aria-label": "Learn more about Coaching for Authors",
                                            children: s.jsx("i", {
                                                className: "font-bold ml-2 text-accent",
                                                children: "Learn More"
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })
                    })]
                }), s.jsx("div", {
                    className: "grid md:w-5/12 lg:w-6/12",
                    children: s.jsx("div", {
                        className: "py-6",
                        children: s.jsx("img", {
                            src: "https://i.postimg.cc/4NhcQSxY/C4A-5.png",
                            className: "rounded-lg inline-block xx:hidden md:block",
                            width: "640",
                            height: "960",
                            alt: "Profile of Brown Patience guiding solopreneurs",
                            style: {
                                borderRadius: "10px",
                                boxShadow: "-8px 7px 31px 8px rgba(0,0,0,0.51)"
                            }
                        })
                    })
                })]
            })
        })
    })
});
var Ey = {}
  , Ty = {}
  , yl = {}
  , Ay = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = void 0;
    var t = {
        animating: !1,
        autoplaying: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        dragging: !1,
        edgeDragged: !1,
        initialized: !1,
        lazyLoadedList: [],
        listHeight: null,
        listWidth: null,
        scrolling: !1,
        slideCount: null,
        slideHeight: null,
        slideWidth: null,
        swipeLeft: null,
        swiped: !1,
        swiping: !1,
        touchObject: {
            startX: 0,
            startY: 0,
            curX: 0,
            curY: 0
        },
        trackStyle: {},
        trackWidth: 0,
        targetSlide: 0
    };
    e.default = t
}
)(Ay);
var mS = "Expected a function"
  , xm = NaN
  , pS = "[object Symbol]"
  , gS = /^\s+|\s+$/g
  , xS = /^[-+]0x[0-9a-f]+$/i
  , yS = /^0b[01]+$/i
  , vS = /^0o[0-7]+$/i
  , bS = parseInt
  , wS = typeof Ts == "object" && Ts && Ts.Object === Object && Ts
  , jS = typeof self == "object" && self && self.Object === Object && self
  , kS = wS || jS || Function("return this")()
  , NS = Object.prototype
  , SS = NS.toString
  , CS = Math.max
  , OS = Math.min
  , sc = function() {
    return kS.Date.now()
};
function _S(e, t, r) {
    var n, o, a, i, l, c, u = 0, h = !1, d = !1, m = !0;
    if (typeof e != "function")
        throw new TypeError(mS);
    t = ym(t) || 0,
    _u(r) && (h = !!r.leading,
    d = "maxWait"in r,
    a = d ? CS(ym(r.maxWait) || 0, t) : a,
    m = "trailing"in r ? !!r.trailing : m);
    function v(k) {
        var N = n
          , L = o;
        return n = o = void 0,
        u = k,
        i = e.apply(L, N),
        i
    }
    function y(k) {
        return u = k,
        l = setTimeout(p, t),
        h ? v(k) : i
    }
    function x(k) {
        var N = k - c
          , L = k - u
          , P = t - N;
        return d ? OS(P, a - L) : P
    }
    function w(k) {
        var N = k - c
          , L = k - u;
        return c === void 0 || N >= t || N < 0 || d && L >= a
    }
    function p() {
        var k = sc();
        if (w(k))
            return f(k);
        l = setTimeout(p, x(k))
    }
    function f(k) {
        return l = void 0,
        m && n ? v(k) : (n = o = void 0,
        i)
    }
    function g() {
        l !== void 0 && clearTimeout(l),
        u = 0,
        n = c = o = l = void 0
    }
    function b() {
        return l === void 0 ? i : f(sc())
    }
    function j() {
        var k = sc()
          , N = w(k);
        if (n = arguments,
        o = this,
        c = k,
        N) {
            if (l === void 0)
                return y(c);
            if (d)
                return l = setTimeout(p, t),
                v(c)
        }
        return l === void 0 && (l = setTimeout(p, t)),
        i
    }
    return j.cancel = g,
    j.flush = b,
    j
}
function _u(e) {
    var t = typeof e;
    return !!e && (t == "object" || t == "function")
}
function PS(e) {
    return !!e && typeof e == "object"
}
function IS(e) {
    return typeof e == "symbol" || PS(e) && SS.call(e) == pS
}
function ym(e) {
    if (typeof e == "number")
        return e;
    if (IS(e))
        return xm;
    if (_u(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = _u(t) ? t + "" : t
    }
    if (typeof e != "string")
        return e === 0 ? e : +e;
    e = e.replace(gS, "");
    var r = yS.test(e);
    return r || vS.test(e) ? bS(e.slice(2), r ? 2 : 8) : xS.test(e) ? xm : +e
}
var ES = _S
  , Ry = {
    exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
    (function() {
        var t = {}.hasOwnProperty;
        function r() {
            for (var a = "", i = 0; i < arguments.length; i++) {
                var l = arguments[i];
                l && (a = o(a, n(l)))
            }
            return a
        }
        function n(a) {
            if (typeof a == "string" || typeof a == "number")
                return a;
            if (typeof a != "object")
                return "";
            if (Array.isArray(a))
                return r.apply(null, a);
            if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
                return a.toString();
            var i = "";
            for (var l in a)
                t.call(a, l) && a[l] && (i = o(i, l));
            return i
        }
        function o(a, i) {
            return i ? a ? a + " " + i : a + i : a
        }
        e.exports ? (r.default = r,
        e.exports = r) : window.classNames = r
    }
    )()
}
)(Ry);
var vl = Ry.exports
  , $ = {}
  , oh = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = void 0;
    var t = r(E);
    function r(o) {
        return o && o.__esModule ? o : {
            default: o
        }
    }
    var n = {
        accessibility: !0,
        adaptiveHeight: !1,
        afterChange: null,
        appendDots: function(a) {
            return t.default.createElement("ul", {
                style: {
                    display: "block"
                }
            }, a)
        },
        arrows: !0,
        autoplay: !1,
        autoplaySpeed: 3e3,
        beforeChange: null,
        centerMode: !1,
        centerPadding: "50px",
        className: "",
        cssEase: "ease",
        customPaging: function(a) {
            return t.default.createElement("button", null, a + 1)
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: null,
        nextArrow: null,
        onEdge: null,
        onInit: null,
        onLazyLoadError: null,
        onReInit: null,
        pauseOnDotsHover: !1,
        pauseOnFocus: !1,
        pauseOnHover: !0,
        prevArrow: null,
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "div",
        slidesPerRow: 1,
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 500,
        swipe: !0,
        swipeEvent: null,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        waitForAnimate: !0,
        asNavFor: null
    };
    e.default = n
}
)(oh);
Object.defineProperty($, "__esModule", {
    value: !0
});
$.checkSpecKeys = $.checkNavigable = $.changeSlide = $.canUseDOM = $.canGoNext = void 0;
$.clamp = $y;
$.extractObject = void 0;
$.filterSettings = VS;
$.validSettings = $.swipeStart = $.swipeMove = $.swipeEnd = $.slidesOnRight = $.slidesOnLeft = $.slideHandler = $.siblingDirection = $.safePreventDefault = $.lazyStartIndex = $.lazySlidesOnRight = $.lazySlidesOnLeft = $.lazyEndIndex = $.keyHandler = $.initializedState = $.getWidth = $.getTrackLeft = $.getTrackCSS = $.getTrackAnimateCSS = $.getTotalSlides = $.getSwipeDirection = $.getSlideCount = $.getRequiredLazySlides = $.getPreClones = $.getPostClones = $.getOnDemandLazySlides = $.getNavigableIndexes = $.getHeight = void 0;
var TS = Ly(E)
  , AS = Ly(oh);
function Ly(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function ps(e) {
    "@babel/helpers - typeof";
    return ps = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    ps(e)
}
function vm(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function de(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? vm(Object(r), !0).forEach(function(n) {
            RS(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vm(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function RS(e, t, r) {
    return t = LS(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function LS(e) {
    var t = $S(e, "string");
    return ps(t) == "symbol" ? t : String(t)
}
function $S(e, t) {
    if (ps(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (ps(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function $y(e, t, r) {
    return Math.max(t, Math.min(e, r))
}
var Mn = $.safePreventDefault = function(t) {
    var r = ["onTouchStart", "onTouchMove", "onWheel"];
    r.includes(t._reactName) || t.preventDefault()
}
  , My = $.getOnDemandLazySlides = function(t) {
    for (var r = [], n = zy(t), o = Dy(t), a = n; a < o; a++)
        t.lazyLoadedList.indexOf(a) < 0 && r.push(a);
    return r
}
;
$.getRequiredLazySlides = function(t) {
    for (var r = [], n = zy(t), o = Dy(t), a = n; a < o; a++)
        r.push(a);
    return r
}
;
var zy = $.lazyStartIndex = function(t) {
    return t.currentSlide - MS(t)
}
  , Dy = $.lazyEndIndex = function(t) {
    return t.currentSlide + zS(t)
}
  , MS = $.lazySlidesOnLeft = function(t) {
    return t.centerMode ? Math.floor(t.slidesToShow / 2) + (parseInt(t.centerPadding) > 0 ? 1 : 0) : 0
}
  , zS = $.lazySlidesOnRight = function(t) {
    return t.centerMode ? Math.floor((t.slidesToShow - 1) / 2) + 1 + (parseInt(t.centerPadding) > 0 ? 1 : 0) : t.slidesToShow
}
  , Pu = $.getWidth = function(t) {
    return t && t.offsetWidth || 0
}
  , Wy = $.getHeight = function(t) {
    return t && t.offsetHeight || 0
}
  , By = $.getSwipeDirection = function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n, o, a, i;
    return n = t.startX - t.curX,
    o = t.startY - t.curY,
    a = Math.atan2(o, n),
    i = Math.round(a * 180 / Math.PI),
    i < 0 && (i = 360 - Math.abs(i)),
    i <= 45 && i >= 0 || i <= 360 && i >= 315 ? "left" : i >= 135 && i <= 225 ? "right" : r === !0 ? i >= 35 && i <= 135 ? "up" : "down" : "vertical"
}
  , Fy = $.canGoNext = function(t) {
    var r = !0;
    return t.infinite || (t.centerMode && t.currentSlide >= t.slideCount - 1 || t.slideCount <= t.slidesToShow || t.currentSlide >= t.slideCount - t.slidesToShow) && (r = !1),
    r
}
;
$.extractObject = function(t, r) {
    var n = {};
    return r.forEach(function(o) {
        return n[o] = t[o]
    }),
    n
}
;
$.initializedState = function(t) {
    var r = TS.default.Children.count(t.children), n = t.listRef, o = Math.ceil(Pu(n)), a = t.trackRef && t.trackRef.node, i = Math.ceil(Pu(a)), l;
    if (t.vertical)
        l = o;
    else {
        var c = t.centerMode && parseInt(t.centerPadding) * 2;
        typeof t.centerPadding == "string" && t.centerPadding.slice(-1) === "%" && (c *= o / 100),
        l = Math.ceil((o - c) / t.slidesToShow)
    }
    var u = n && Wy(n.querySelector('[data-index="0"]'))
      , h = u * t.slidesToShow
      , d = t.currentSlide === void 0 ? t.initialSlide : t.currentSlide;
    t.rtl && t.currentSlide === void 0 && (d = r - 1 - t.initialSlide);
    var m = t.lazyLoadedList || []
      , v = My(de(de({}, t), {}, {
        currentSlide: d,
        lazyLoadedList: m
    }));
    m = m.concat(v);
    var y = {
        slideCount: r,
        slideWidth: l,
        listWidth: o,
        trackWidth: i,
        currentSlide: d,
        slideHeight: u,
        listHeight: h,
        lazyLoadedList: m
    };
    return t.autoplaying === null && t.autoplay && (y.autoplaying = "playing"),
    y
}
;
$.slideHandler = function(t) {
    var r = t.waitForAnimate
      , n = t.animating
      , o = t.fade
      , a = t.infinite
      , i = t.index
      , l = t.slideCount
      , c = t.lazyLoad
      , u = t.currentSlide
      , h = t.centerMode
      , d = t.slidesToScroll
      , m = t.slidesToShow
      , v = t.useCSS
      , y = t.lazyLoadedList;
    if (r && n)
        return {};
    var x = i, w, p, f, g = {}, b = {}, j = a ? i : $y(i, 0, l - 1);
    if (o) {
        if (!a && (i < 0 || i >= l))
            return {};
        i < 0 ? x = i + l : i >= l && (x = i - l),
        c && y.indexOf(x) < 0 && (y = y.concat(x)),
        g = {
            animating: !0,
            currentSlide: x,
            lazyLoadedList: y,
            targetSlide: x
        },
        b = {
            animating: !1,
            targetSlide: x
        }
    } else
        w = x,
        x < 0 ? (w = x + l,
        a ? l % d !== 0 && (w = l - l % d) : w = 0) : !Fy(t) && x > u ? x = w = u : h && x >= l ? (x = a ? l : l - 1,
        w = a ? 0 : l - 1) : x >= l && (w = x - l,
        a ? l % d !== 0 && (w = 0) : w = l - m),
        !a && x + m >= l && (w = l - m),
        p = ii(de(de({}, t), {}, {
            slideIndex: x
        })),
        f = ii(de(de({}, t), {}, {
            slideIndex: w
        })),
        a || (p === f && (x = w),
        p = f),
        c && (y = y.concat(My(de(de({}, t), {}, {
            currentSlide: x
        })))),
        v ? (g = {
            animating: !0,
            currentSlide: w,
            trackStyle: Hy(de(de({}, t), {}, {
                left: p
            })),
            lazyLoadedList: y,
            targetSlide: j
        },
        b = {
            animating: !1,
            currentSlide: w,
            trackStyle: ai(de(de({}, t), {}, {
                left: f
            })),
            swipeLeft: null,
            targetSlide: j
        }) : g = {
            currentSlide: w,
            trackStyle: ai(de(de({}, t), {}, {
                left: f
            })),
            lazyLoadedList: y,
            targetSlide: j
        };
    return {
        state: g,
        nextState: b
    }
}
;
$.changeSlide = function(t, r) {
    var n, o, a, i, l, c = t.slidesToScroll, u = t.slidesToShow, h = t.slideCount, d = t.currentSlide, m = t.targetSlide, v = t.lazyLoad, y = t.infinite;
    if (i = h % c !== 0,
    n = i ? 0 : (h - d) % c,
    r.message === "previous")
        a = n === 0 ? c : u - n,
        l = d - a,
        v && !y && (o = d - a,
        l = o === -1 ? h - 1 : o),
        y || (l = m - c);
    else if (r.message === "next")
        a = n === 0 ? c : n,
        l = d + a,
        v && !y && (l = (d + c) % h + n),
        y || (l = m + c);
    else if (r.message === "dots")
        l = r.index * r.slidesToScroll;
    else if (r.message === "children") {
        if (l = r.index,
        y) {
            var x = FS(de(de({}, t), {}, {
                targetSlide: l
            }));
            l > r.currentSlide && x === "left" ? l = l - h : l < r.currentSlide && x === "right" && (l = l + h)
        }
    } else
        r.message === "index" && (l = Number(r.index));
    return l
}
;
$.keyHandler = function(t, r, n) {
    return t.target.tagName.match("TEXTAREA|INPUT|SELECT") || !r ? "" : t.keyCode === 37 ? n ? "next" : "previous" : t.keyCode === 39 ? n ? "previous" : "next" : ""
}
;
$.swipeStart = function(t, r, n) {
    return t.target.tagName === "IMG" && Mn(t),
    !r || !n && t.type.indexOf("mouse") !== -1 ? "" : {
        dragging: !0,
        touchObject: {
            startX: t.touches ? t.touches[0].pageX : t.clientX,
            startY: t.touches ? t.touches[0].pageY : t.clientY,
            curX: t.touches ? t.touches[0].pageX : t.clientX,
            curY: t.touches ? t.touches[0].pageY : t.clientY
        }
    }
}
;
$.swipeMove = function(t, r) {
    var n = r.scrolling
      , o = r.animating
      , a = r.vertical
      , i = r.swipeToSlide
      , l = r.verticalSwiping
      , c = r.rtl
      , u = r.currentSlide
      , h = r.edgeFriction
      , d = r.edgeDragged
      , m = r.onEdge
      , v = r.swiped
      , y = r.swiping
      , x = r.slideCount
      , w = r.slidesToScroll
      , p = r.infinite
      , f = r.touchObject
      , g = r.swipeEvent
      , b = r.listHeight
      , j = r.listWidth;
    if (!n) {
        if (o)
            return Mn(t);
        a && i && l && Mn(t);
        var k, N = {}, L = ii(r);
        f.curX = t.touches ? t.touches[0].pageX : t.clientX,
        f.curY = t.touches ? t.touches[0].pageY : t.clientY,
        f.swipeLength = Math.round(Math.sqrt(Math.pow(f.curX - f.startX, 2)));
        var P = Math.round(Math.sqrt(Math.pow(f.curY - f.startY, 2)));
        if (!l && !y && P > 10)
            return {
                scrolling: !0
            };
        l && (f.swipeLength = P);
        var I = (c ? -1 : 1) * (f.curX > f.startX ? 1 : -1);
        l && (I = f.curY > f.startY ? 1 : -1);
        var B = Math.ceil(x / w)
          , D = By(r.touchObject, l)
          , F = f.swipeLength;
        return p || (u === 0 && (D === "right" || D === "down") || u + 1 >= B && (D === "left" || D === "up") || !Fy(r) && (D === "left" || D === "up")) && (F = f.swipeLength * h,
        d === !1 && m && (m(D),
        N.edgeDragged = !0)),
        !v && g && (g(D),
        N.swiped = !0),
        a ? k = L + F * (b / j) * I : c ? k = L - F * I : k = L + F * I,
        l && (k = L + F * I),
        N = de(de({}, N), {}, {
            touchObject: f,
            swipeLeft: k,
            trackStyle: ai(de(de({}, r), {}, {
                left: k
            }))
        }),
        Math.abs(f.curX - f.startX) < Math.abs(f.curY - f.startY) * .8 || f.swipeLength > 10 && (N.swiping = !0,
        Mn(t)),
        N
    }
}
;
$.swipeEnd = function(t, r) {
    var n = r.dragging
      , o = r.swipe
      , a = r.touchObject
      , i = r.listWidth
      , l = r.touchThreshold
      , c = r.verticalSwiping
      , u = r.listHeight
      , h = r.swipeToSlide
      , d = r.scrolling
      , m = r.onSwipe
      , v = r.targetSlide
      , y = r.currentSlide
      , x = r.infinite;
    if (!n)
        return o && Mn(t),
        {};
    var w = c ? u / l : i / l
      , p = By(a, c)
      , f = {
        dragging: !1,
        edgeDragged: !1,
        scrolling: !1,
        swiping: !1,
        swiped: !1,
        swipeLeft: null,
        touchObject: {}
    };
    if (d || !a.swipeLength)
        return f;
    if (a.swipeLength > w) {
        Mn(t),
        m && m(p);
        var g, b, j = x ? y : v;
        switch (p) {
        case "left":
        case "up":
            b = j + wm(r),
            g = h ? bm(r, b) : b,
            f.currentDirection = 0;
            break;
        case "right":
        case "down":
            b = j - wm(r),
            g = h ? bm(r, b) : b,
            f.currentDirection = 1;
            break;
        default:
            g = j
        }
        f.triggerSlideHandler = g
    } else {
        var k = ii(r);
        f.trackStyle = Hy(de(de({}, r), {}, {
            left: k
        }))
    }
    return f
}
;
var DS = $.getNavigableIndexes = function(t) {
    for (var r = t.infinite ? t.slideCount * 2 : t.slideCount, n = t.infinite ? t.slidesToShow * -1 : 0, o = t.infinite ? t.slidesToShow * -1 : 0, a = []; n < r; )
        a.push(n),
        n = o + t.slidesToScroll,
        o += Math.min(t.slidesToScroll, t.slidesToShow);
    return a
}
  , bm = $.checkNavigable = function(t, r) {
    var n = DS(t)
      , o = 0;
    if (r > n[n.length - 1])
        r = n[n.length - 1];
    else
        for (var a in n) {
            if (r < n[a]) {
                r = o;
                break
            }
            o = n[a]
        }
    return r
}
  , wm = $.getSlideCount = function(t) {
    var r = t.centerMode ? t.slideWidth * Math.floor(t.slidesToShow / 2) : 0;
    if (t.swipeToSlide) {
        var n, o = t.listRef, a = o.querySelectorAll && o.querySelectorAll(".slick-slide") || [];
        if (Array.from(a).every(function(c) {
            if (t.vertical) {
                if (c.offsetTop + Wy(c) / 2 > t.swipeLeft * -1)
                    return n = c,
                    !1
            } else if (c.offsetLeft - r + Pu(c) / 2 > t.swipeLeft * -1)
                return n = c,
                !1;
            return !0
        }),
        !n)
            return 0;
        var i = t.rtl === !0 ? t.slideCount - t.currentSlide : t.currentSlide
          , l = Math.abs(n.dataset.index - i) || 1;
        return l
    } else
        return t.slidesToScroll
}
  , sh = $.checkSpecKeys = function(t, r) {
    return r.reduce(function(n, o) {
        return n && t.hasOwnProperty(o)
    }, !0) ? null : console.error("Keys Missing:", t)
}
  , ai = $.getTrackCSS = function(t) {
    sh(t, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
    var r, n, o = t.slideCount + 2 * t.slidesToShow;
    t.vertical ? n = o * t.slideHeight : r = BS(t) * t.slideWidth;
    var a = {
        opacity: 1,
        transition: "",
        WebkitTransition: ""
    };
    if (t.useTransform) {
        var i = t.vertical ? "translate3d(0px, " + t.left + "px, 0px)" : "translate3d(" + t.left + "px, 0px, 0px)"
          , l = t.vertical ? "translate3d(0px, " + t.left + "px, 0px)" : "translate3d(" + t.left + "px, 0px, 0px)"
          , c = t.vertical ? "translateY(" + t.left + "px)" : "translateX(" + t.left + "px)";
        a = de(de({}, a), {}, {
            WebkitTransform: i,
            transform: l,
            msTransform: c
        })
    } else
        t.vertical ? a.top = t.left : a.left = t.left;
    return t.fade && (a = {
        opacity: 1
    }),
    r && (a.width = r),
    n && (a.height = n),
    window && !window.addEventListener && window.attachEvent && (t.vertical ? a.marginTop = t.left + "px" : a.marginLeft = t.left + "px"),
    a
}
  , Hy = $.getTrackAnimateCSS = function(t) {
    sh(t, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
    var r = ai(t);
    return t.useTransform ? (r.WebkitTransition = "-webkit-transform " + t.speed + "ms " + t.cssEase,
    r.transition = "transform " + t.speed + "ms " + t.cssEase) : t.vertical ? r.transition = "top " + t.speed + "ms " + t.cssEase : r.transition = "left " + t.speed + "ms " + t.cssEase,
    r
}
  , ii = $.getTrackLeft = function(t) {
    if (t.unslick)
        return 0;
    sh(t, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
    var r = t.slideIndex, n = t.trackRef, o = t.infinite, a = t.centerMode, i = t.slideCount, l = t.slidesToShow, c = t.slidesToScroll, u = t.slideWidth, h = t.listWidth, d = t.variableWidth, m = t.slideHeight, v = t.fade, y = t.vertical, x = 0, w, p, f = 0;
    if (v || t.slideCount === 1)
        return 0;
    var g = 0;
    if (o ? (g = -Na(t),
    i % c !== 0 && r + c > i && (g = -(r > i ? l - (r - i) : i % c)),
    a && (g += parseInt(l / 2))) : (i % c !== 0 && r + c > i && (g = l - i % c),
    a && (g = parseInt(l / 2))),
    x = g * u,
    f = g * m,
    y ? w = r * m * -1 + f : w = r * u * -1 + x,
    d === !0) {
        var b, j = n && n.node;
        if (b = r + Na(t),
        p = j && j.childNodes[b],
        w = p ? p.offsetLeft * -1 : 0,
        a === !0) {
            b = o ? r + Na(t) : r,
            p = j && j.children[b],
            w = 0;
            for (var k = 0; k < b; k++)
                w -= j && j.children[k] && j.children[k].offsetWidth;
            w -= parseInt(t.centerPadding),
            w += p && (h - p.offsetWidth) / 2
        }
    }
    return w
}
  , Na = $.getPreClones = function(t) {
    return t.unslick || !t.infinite ? 0 : t.variableWidth ? t.slideCount : t.slidesToShow + (t.centerMode ? 1 : 0)
}
  , WS = $.getPostClones = function(t) {
    return t.unslick || !t.infinite ? 0 : t.slideCount
}
  , BS = $.getTotalSlides = function(t) {
    return t.slideCount === 1 ? 1 : Na(t) + t.slideCount + WS(t)
}
  , FS = $.siblingDirection = function(t) {
    return t.targetSlide > t.currentSlide ? t.targetSlide > t.currentSlide + HS(t) ? "left" : "right" : t.targetSlide < t.currentSlide - US(t) ? "right" : "left"
}
  , HS = $.slidesOnRight = function(t) {
    var r = t.slidesToShow
      , n = t.centerMode
      , o = t.rtl
      , a = t.centerPadding;
    if (n) {
        var i = (r - 1) / 2 + 1;
        return parseInt(a) > 0 && (i += 1),
        o && r % 2 === 0 && (i += 1),
        i
    }
    return o ? 0 : r - 1
}
  , US = $.slidesOnLeft = function(t) {
    var r = t.slidesToShow
      , n = t.centerMode
      , o = t.rtl
      , a = t.centerPadding;
    if (n) {
        var i = (r - 1) / 2 + 1;
        return parseInt(a) > 0 && (i += 1),
        !o && r % 2 === 0 && (i += 1),
        i
    }
    return o ? r - 1 : 0
}
;
$.canUseDOM = function() {
    return !!(typeof window < "u" && window.document && window.document.createElement)
}
;
var GS = $.validSettings = Object.keys(AS.default);
function VS(e) {
    return GS.reduce(function(t, r) {
        return e.hasOwnProperty(r) && (t[r] = e[r]),
        t
    }, {})
}
var bl = {};
Object.defineProperty(bl, "__esModule", {
    value: !0
});
bl.Track = void 0;
var pr = Uy(E)
  , ac = Uy(vl)
  , ic = $;
function Uy(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function Jn(e) {
    "@babel/helpers - typeof";
    return Jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    Jn(e)
}
function Iu() {
    return Iu = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Iu.apply(this, arguments)
}
function YS(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function QS(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, Vy(n.key), n)
    }
}
function KS(e, t, r) {
    return t && QS(e.prototype, t),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function qS(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && Eu(e, t)
}
function Eu(e, t) {
    return Eu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
        return n.__proto__ = o,
        n
    }
    ,
    Eu(e, t)
}
function XS(e) {
    var t = Gy();
    return function() {
        var n = li(e), o;
        if (t) {
            var a = li(this).constructor;
            o = Reflect.construct(n, arguments, a)
        } else
            o = n.apply(this, arguments);
        return ZS(this, o)
    }
}
function ZS(e, t) {
    if (t && (Jn(t) === "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return Tu(e)
}
function Tu(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function Gy() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Gy = function() {
        return !!e
    }
    )()
}
function li(e) {
    return li = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }
    ,
    li(e)
}
function jm(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function Je(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? jm(Object(r), !0).forEach(function(n) {
            Au(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jm(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function Au(e, t, r) {
    return t = Vy(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function Vy(e) {
    var t = JS(e, "string");
    return Jn(t) == "symbol" ? t : String(t)
}
function JS(e, t) {
    if (Jn(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Jn(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var lc = function(t) {
    var r, n, o, a, i;
    t.rtl ? i = t.slideCount - 1 - t.index : i = t.index,
    o = i < 0 || i >= t.slideCount,
    t.centerMode ? (a = Math.floor(t.slidesToShow / 2),
    n = (i - t.currentSlide) % t.slideCount === 0,
    i > t.currentSlide - a - 1 && i <= t.currentSlide + a && (r = !0)) : r = t.currentSlide <= i && i < t.currentSlide + t.slidesToShow;
    var l;
    t.targetSlide < 0 ? l = t.targetSlide + t.slideCount : t.targetSlide >= t.slideCount ? l = t.targetSlide - t.slideCount : l = t.targetSlide;
    var c = i === l;
    return {
        "slick-slide": !0,
        "slick-active": r,
        "slick-center": n,
        "slick-cloned": o,
        "slick-current": c
    }
}
  , e4 = function(t) {
    var r = {};
    return (t.variableWidth === void 0 || t.variableWidth === !1) && (r.width = t.slideWidth),
    t.fade && (r.position = "relative",
    t.vertical ? r.top = -t.index * parseInt(t.slideHeight) : r.left = -t.index * parseInt(t.slideWidth),
    r.opacity = t.currentSlide === t.index ? 1 : 0,
    r.zIndex = t.currentSlide === t.index ? 999 : 998,
    t.useCSS && (r.transition = "opacity " + t.speed + "ms " + t.cssEase + ", visibility " + t.speed + "ms " + t.cssEase)),
    r
}
  , cc = function(t, r) {
    return t.key || r
}
  , t4 = function(t) {
    var r, n = [], o = [], a = [], i = pr.default.Children.count(t.children), l = (0,
    ic.lazyStartIndex)(t), c = (0,
    ic.lazyEndIndex)(t);
    return pr.default.Children.forEach(t.children, function(u, h) {
        var d, m = {
            message: "children",
            index: h,
            slidesToScroll: t.slidesToScroll,
            currentSlide: t.currentSlide
        };
        !t.lazyLoad || t.lazyLoad && t.lazyLoadedList.indexOf(h) >= 0 ? d = u : d = pr.default.createElement("div", null);
        var v = e4(Je(Je({}, t), {}, {
            index: h
        }))
          , y = d.props.className || ""
          , x = lc(Je(Je({}, t), {}, {
            index: h
        }));
        if (n.push(pr.default.cloneElement(d, {
            key: "original" + cc(d, h),
            "data-index": h,
            className: (0,
            ac.default)(x, y),
            tabIndex: "-1",
            "aria-hidden": !x["slick-active"],
            style: Je(Je({
                outline: "none"
            }, d.props.style || {}), v),
            onClick: function(f) {
                d.props && d.props.onClick && d.props.onClick(f),
                t.focusOnSelect && t.focusOnSelect(m)
            }
        })),
        t.infinite && t.fade === !1) {
            var w = i - h;
            w <= (0,
            ic.getPreClones)(t) && (r = -w,
            r >= l && (d = u),
            x = lc(Je(Je({}, t), {}, {
                index: r
            })),
            o.push(pr.default.cloneElement(d, {
                key: "precloned" + cc(d, r),
                "data-index": r,
                tabIndex: "-1",
                className: (0,
                ac.default)(x, y),
                "aria-hidden": !x["slick-active"],
                style: Je(Je({}, d.props.style || {}), v),
                onClick: function(f) {
                    d.props && d.props.onClick && d.props.onClick(f),
                    t.focusOnSelect && t.focusOnSelect(m)
                }
            }))),
            r = i + h,
            r < c && (d = u),
            x = lc(Je(Je({}, t), {}, {
                index: r
            })),
            a.push(pr.default.cloneElement(d, {
                key: "postcloned" + cc(d, r),
                "data-index": r,
                tabIndex: "-1",
                className: (0,
                ac.default)(x, y),
                "aria-hidden": !x["slick-active"],
                style: Je(Je({}, d.props.style || {}), v),
                onClick: function(f) {
                    d.props && d.props.onClick && d.props.onClick(f),
                    t.focusOnSelect && t.focusOnSelect(m)
                }
            }))
        }
    }),
    t.rtl ? o.concat(n, a).reverse() : o.concat(n, a)
};
bl.Track = function(e) {
    qS(r, e);
    var t = XS(r);
    function r() {
        var n;
        YS(this, r);
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
            a[i] = arguments[i];
        return n = t.call.apply(t, [this].concat(a)),
        Au(Tu(n), "node", null),
        Au(Tu(n), "handleRef", function(l) {
            n.node = l
        }),
        n
    }
    return KS(r, [{
        key: "render",
        value: function() {
            var o = t4(this.props)
              , a = this.props
              , i = a.onMouseEnter
              , l = a.onMouseOver
              , c = a.onMouseLeave
              , u = {
                onMouseEnter: i,
                onMouseOver: l,
                onMouseLeave: c
            };
            return pr.default.createElement("div", Iu({
                ref: this.handleRef,
                className: "slick-track",
                style: this.props.trackStyle
            }, u), o)
        }
    }]),
    r
}(pr.default.PureComponent);
var wl = {};
function eo(e) {
    "@babel/helpers - typeof";
    return eo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    eo(e)
}
Object.defineProperty(wl, "__esModule", {
    value: !0
});
wl.Dots = void 0;
var ea = Yy(E)
  , r4 = Yy(vl)
  , km = $;
function Yy(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function Nm(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function n4(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Nm(Object(r), !0).forEach(function(n) {
            o4(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nm(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function o4(e, t, r) {
    return t = Qy(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function s4(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function a4(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, Qy(n.key), n)
    }
}
function i4(e, t, r) {
    return t && a4(e.prototype, t),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function Qy(e) {
    var t = l4(e, "string");
    return eo(t) == "symbol" ? t : String(t)
}
function l4(e, t) {
    if (eo(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (eo(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function c4(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && Ru(e, t)
}
function Ru(e, t) {
    return Ru = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
        return n.__proto__ = o,
        n
    }
    ,
    Ru(e, t)
}
function u4(e) {
    var t = Ky();
    return function() {
        var n = ci(e), o;
        if (t) {
            var a = ci(this).constructor;
            o = Reflect.construct(n, arguments, a)
        } else
            o = n.apply(this, arguments);
        return d4(this, o)
    }
}
function d4(e, t) {
    if (t && (eo(t) === "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return h4(e)
}
function h4(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function Ky() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Ky = function() {
        return !!e
    }
    )()
}
function ci(e) {
    return ci = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }
    ,
    ci(e)
}
var f4 = function(t) {
    var r;
    return t.infinite ? r = Math.ceil(t.slideCount / t.slidesToScroll) : r = Math.ceil((t.slideCount - t.slidesToShow) / t.slidesToScroll) + 1,
    r
};
wl.Dots = function(e) {
    c4(r, e);
    var t = u4(r);
    function r() {
        return s4(this, r),
        t.apply(this, arguments)
    }
    return i4(r, [{
        key: "clickHandler",
        value: function(o, a) {
            a.preventDefault(),
            this.props.clickHandler(o)
        }
    }, {
        key: "render",
        value: function() {
            for (var o = this.props, a = o.onMouseEnter, i = o.onMouseOver, l = o.onMouseLeave, c = o.infinite, u = o.slidesToScroll, h = o.slidesToShow, d = o.slideCount, m = o.currentSlide, v = f4({
                slideCount: d,
                slidesToScroll: u,
                slidesToShow: h,
                infinite: c
            }), y = {
                onMouseEnter: a,
                onMouseOver: i,
                onMouseLeave: l
            }, x = [], w = 0; w < v; w++) {
                var p = (w + 1) * u - 1
                  , f = c ? p : (0,
                km.clamp)(p, 0, d - 1)
                  , g = f - (u - 1)
                  , b = c ? g : (0,
                km.clamp)(g, 0, d - 1)
                  , j = (0,
                r4.default)({
                    "slick-active": c ? m >= b && m <= f : m === b
                })
                  , k = {
                    message: "dots",
                    index: w,
                    slidesToScroll: u,
                    currentSlide: m
                }
                  , N = this.clickHandler.bind(this, k);
                x = x.concat(ea.default.createElement("li", {
                    key: w,
                    className: j
                }, ea.default.cloneElement(this.props.customPaging(w), {
                    onClick: N
                })))
            }
            return ea.default.cloneElement(this.props.appendDots(x), n4({
                className: this.props.dotsClass
            }, y))
        }
    }]),
    r
}(ea.default.PureComponent);
var to = {};
function ro(e) {
    "@babel/helpers - typeof";
    return ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    ro(e)
}
Object.defineProperty(to, "__esModule", {
    value: !0
});
to.PrevArrow = to.NextArrow = void 0;
var zn = Xy(E)
  , qy = Xy(vl)
  , m4 = $;
function Xy(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function ui() {
    return ui = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    ui.apply(this, arguments)
}
function Sm(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function di(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Sm(Object(r), !0).forEach(function(n) {
            p4(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sm(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function p4(e, t, r) {
    return t = e0(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function Zy(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function g4(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, e0(n.key), n)
    }
}
function Jy(e, t, r) {
    return t && g4(e.prototype, t),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function e0(e) {
    var t = x4(e, "string");
    return ro(t) == "symbol" ? t : String(t)
}
function x4(e, t) {
    if (ro(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (ro(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function t0(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && Lu(e, t)
}
function Lu(e, t) {
    return Lu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
        return n.__proto__ = o,
        n
    }
    ,
    Lu(e, t)
}
function r0(e) {
    var t = n0();
    return function() {
        var n = hi(e), o;
        if (t) {
            var a = hi(this).constructor;
            o = Reflect.construct(n, arguments, a)
        } else
            o = n.apply(this, arguments);
        return y4(this, o)
    }
}
function y4(e, t) {
    if (t && (ro(t) === "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return v4(e)
}
function v4(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function n0() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (n0 = function() {
        return !!e
    }
    )()
}
function hi(e) {
    return hi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }
    ,
    hi(e)
}
to.PrevArrow = function(e) {
    t0(r, e);
    var t = r0(r);
    function r() {
        return Zy(this, r),
        t.apply(this, arguments)
    }
    return Jy(r, [{
        key: "clickHandler",
        value: function(o, a) {
            a && a.preventDefault(),
            this.props.clickHandler(o, a)
        }
    }, {
        key: "render",
        value: function() {
            var o = {
                "slick-arrow": !0,
                "slick-prev": !0
            }
              , a = this.clickHandler.bind(this, {
                message: "previous"
            });
            !this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow) && (o["slick-disabled"] = !0,
            a = null);
            var i = {
                key: "0",
                "data-role": "none",
                className: (0,
                qy.default)(o),
                style: {
                    display: "block"
                },
                onClick: a
            }, l = {
                currentSlide: this.props.currentSlide,
                slideCount: this.props.slideCount
            }, c;
            return this.props.prevArrow ? c = zn.default.cloneElement(this.props.prevArrow, di(di({}, i), l)) : c = zn.default.createElement("button", ui({
                key: "0",
                type: "button"
            }, i), " ", "Previous"),
            c
        }
    }]),
    r
}(zn.default.PureComponent);
to.NextArrow = function(e) {
    t0(r, e);
    var t = r0(r);
    function r() {
        return Zy(this, r),
        t.apply(this, arguments)
    }
    return Jy(r, [{
        key: "clickHandler",
        value: function(o, a) {
            a && a.preventDefault(),
            this.props.clickHandler(o, a)
        }
    }, {
        key: "render",
        value: function() {
            var o = {
                "slick-arrow": !0,
                "slick-next": !0
            }
              , a = this.clickHandler.bind(this, {
                message: "next"
            });
            (0,
            m4.canGoNext)(this.props) || (o["slick-disabled"] = !0,
            a = null);
            var i = {
                key: "1",
                "data-role": "none",
                className: (0,
                qy.default)(o),
                style: {
                    display: "block"
                },
                onClick: a
            }, l = {
                currentSlide: this.props.currentSlide,
                slideCount: this.props.slideCount
            }, c;
            return this.props.nextArrow ? c = zn.default.cloneElement(this.props.nextArrow, di(di({}, i), l)) : c = zn.default.createElement("button", ui({
                key: "1",
                type: "button"
            }, i), " ", "Next"),
            c
        }
    }]),
    r
}(zn.default.PureComponent);
var o0 = function() {
    if (typeof Map < "u")
        return Map;
    function e(t, r) {
        var n = -1;
        return t.some(function(o, a) {
            return o[0] === r ? (n = a,
            !0) : !1
        }),
        n
    }
    return function() {
        function t() {
            this.__entries__ = []
        }
        return Object.defineProperty(t.prototype, "size", {
            get: function() {
                return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.get = function(r) {
            var n = e(this.__entries__, r)
              , o = this.__entries__[n];
            return o && o[1]
        }
        ,
        t.prototype.set = function(r, n) {
            var o = e(this.__entries__, r);
            ~o ? this.__entries__[o][1] = n : this.__entries__.push([r, n])
        }
        ,
        t.prototype.delete = function(r) {
            var n = this.__entries__
              , o = e(n, r);
            ~o && n.splice(o, 1)
        }
        ,
        t.prototype.has = function(r) {
            return !!~e(this.__entries__, r)
        }
        ,
        t.prototype.clear = function() {
            this.__entries__.splice(0)
        }
        ,
        t.prototype.forEach = function(r, n) {
            n === void 0 && (n = null);
            for (var o = 0, a = this.__entries__; o < a.length; o++) {
                var i = a[o];
                r.call(n, i[1], i[0])
            }
        }
        ,
        t
    }()
}()
  , $u = typeof window < "u" && typeof document < "u" && window.document === document
  , fi = function() {
    return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")()
}()
  , b4 = function() {
    return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(fi) : function(e) {
        return setTimeout(function() {
            return e(Date.now())
        }, 1e3 / 60)
    }
}()
  , w4 = 2;
function j4(e, t) {
    var r = !1
      , n = !1
      , o = 0;
    function a() {
        r && (r = !1,
        e()),
        n && l()
    }
    function i() {
        b4(a)
    }
    function l() {
        var c = Date.now();
        if (r) {
            if (c - o < w4)
                return;
            n = !0
        } else
            r = !0,
            n = !1,
            setTimeout(i, t);
        o = c
    }
    return l
}
var k4 = 20
  , N4 = ["top", "right", "bottom", "left", "width", "height", "size", "weight"]
  , S4 = typeof MutationObserver < "u"
  , C4 = function() {
    function e() {
        this.connected_ = !1,
        this.mutationEventsAdded_ = !1,
        this.mutationsObserver_ = null,
        this.observers_ = [],
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this),
        this.refresh = j4(this.refresh.bind(this), k4)
    }
    return e.prototype.addObserver = function(t) {
        ~this.observers_.indexOf(t) || this.observers_.push(t),
        this.connected_ || this.connect_()
    }
    ,
    e.prototype.removeObserver = function(t) {
        var r = this.observers_
          , n = r.indexOf(t);
        ~n && r.splice(n, 1),
        !r.length && this.connected_ && this.disconnect_()
    }
    ,
    e.prototype.refresh = function() {
        var t = this.updateObservers_();
        t && this.refresh()
    }
    ,
    e.prototype.updateObservers_ = function() {
        var t = this.observers_.filter(function(r) {
            return r.gatherActive(),
            r.hasActive()
        });
        return t.forEach(function(r) {
            return r.broadcastActive()
        }),
        t.length > 0
    }
    ,
    e.prototype.connect_ = function() {
        !$u || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_),
        window.addEventListener("resize", this.refresh),
        S4 ? (this.mutationsObserver_ = new MutationObserver(this.refresh),
        this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        })) : (document.addEventListener("DOMSubtreeModified", this.refresh),
        this.mutationEventsAdded_ = !0),
        this.connected_ = !0)
    }
    ,
    e.prototype.disconnect_ = function() {
        !$u || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_),
        window.removeEventListener("resize", this.refresh),
        this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
        this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh),
        this.mutationsObserver_ = null,
        this.mutationEventsAdded_ = !1,
        this.connected_ = !1)
    }
    ,
    e.prototype.onTransitionEnd_ = function(t) {
        var r = t.propertyName
          , n = r === void 0 ? "" : r
          , o = N4.some(function(a) {
            return !!~n.indexOf(a)
        });
        o && this.refresh()
    }
    ,
    e.getInstance = function() {
        return this.instance_ || (this.instance_ = new e),
        this.instance_
    }
    ,
    e.instance_ = null,
    e
}()
  , s0 = function(e, t) {
    for (var r = 0, n = Object.keys(t); r < n.length; r++) {
        var o = n[r];
        Object.defineProperty(e, o, {
            value: t[o],
            enumerable: !1,
            writable: !1,
            configurable: !0
        })
    }
    return e
}
  , no = function(e) {
    var t = e && e.ownerDocument && e.ownerDocument.defaultView;
    return t || fi
}
  , a0 = jl(0, 0, 0, 0);
function mi(e) {
    return parseFloat(e) || 0
}
function Cm(e) {
    for (var t = [], r = 1; r < arguments.length; r++)
        t[r - 1] = arguments[r];
    return t.reduce(function(n, o) {
        var a = e["border-" + o + "-width"];
        return n + mi(a)
    }, 0)
}
function O4(e) {
    for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, o = t; n < o.length; n++) {
        var a = o[n]
          , i = e["padding-" + a];
        r[a] = mi(i)
    }
    return r
}
function _4(e) {
    var t = e.getBBox();
    return jl(0, 0, t.width, t.height)
}
function P4(e) {
    var t = e.clientWidth
      , r = e.clientHeight;
    if (!t && !r)
        return a0;
    var n = no(e).getComputedStyle(e)
      , o = O4(n)
      , a = o.left + o.right
      , i = o.top + o.bottom
      , l = mi(n.width)
      , c = mi(n.height);
    if (n.boxSizing === "border-box" && (Math.round(l + a) !== t && (l -= Cm(n, "left", "right") + a),
    Math.round(c + i) !== r && (c -= Cm(n, "top", "bottom") + i)),
    !E4(e)) {
        var u = Math.round(l + a) - t
          , h = Math.round(c + i) - r;
        Math.abs(u) !== 1 && (l -= u),
        Math.abs(h) !== 1 && (c -= h)
    }
    return jl(o.left, o.top, l, c)
}
var I4 = function() {
    return typeof SVGGraphicsElement < "u" ? function(e) {
        return e instanceof no(e).SVGGraphicsElement
    }
    : function(e) {
        return e instanceof no(e).SVGElement && typeof e.getBBox == "function"
    }
}();
function E4(e) {
    return e === no(e).document.documentElement
}
function T4(e) {
    return $u ? I4(e) ? _4(e) : P4(e) : a0
}
function A4(e) {
    var t = e.x
      , r = e.y
      , n = e.width
      , o = e.height
      , a = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object
      , i = Object.create(a.prototype);
    return s0(i, {
        x: t,
        y: r,
        width: n,
        height: o,
        top: r,
        right: t + n,
        bottom: o + r,
        left: t
    }),
    i
}
function jl(e, t, r, n) {
    return {
        x: e,
        y: t,
        width: r,
        height: n
    }
}
var R4 = function() {
    function e(t) {
        this.broadcastWidth = 0,
        this.broadcastHeight = 0,
        this.contentRect_ = jl(0, 0, 0, 0),
        this.target = t
    }
    return e.prototype.isActive = function() {
        var t = T4(this.target);
        return this.contentRect_ = t,
        t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
    }
    ,
    e.prototype.broadcastRect = function() {
        var t = this.contentRect_;
        return this.broadcastWidth = t.width,
        this.broadcastHeight = t.height,
        t
    }
    ,
    e
}()
  , L4 = function() {
    function e(t, r) {
        var n = A4(r);
        s0(this, {
            target: t,
            contentRect: n
        })
    }
    return e
}()
  , $4 = function() {
    function e(t, r, n) {
        if (this.activeObservations_ = [],
        this.observations_ = new o0,
        typeof t != "function")
            throw new TypeError("The callback provided as parameter 1 is not a function.");
        this.callback_ = t,
        this.controller_ = r,
        this.callbackCtx_ = n
    }
    return e.prototype.observe = function(t) {
        if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
            if (!(t instanceof no(t).Element))
                throw new TypeError('parameter 1 is not of type "Element".');
            var r = this.observations_;
            r.has(t) || (r.set(t, new R4(t)),
            this.controller_.addObserver(this),
            this.controller_.refresh())
        }
    }
    ,
    e.prototype.unobserve = function(t) {
        if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
            if (!(t instanceof no(t).Element))
                throw new TypeError('parameter 1 is not of type "Element".');
            var r = this.observations_;
            r.has(t) && (r.delete(t),
            r.size || this.controller_.removeObserver(this))
        }
    }
    ,
    e.prototype.disconnect = function() {
        this.clearActive(),
        this.observations_.clear(),
        this.controller_.removeObserver(this)
    }
    ,
    e.prototype.gatherActive = function() {
        var t = this;
        this.clearActive(),
        this.observations_.forEach(function(r) {
            r.isActive() && t.activeObservations_.push(r)
        })
    }
    ,
    e.prototype.broadcastActive = function() {
        if (this.hasActive()) {
            var t = this.callbackCtx_
              , r = this.activeObservations_.map(function(n) {
                return new L4(n.target,n.broadcastRect())
            });
            this.callback_.call(t, r, t),
            this.clearActive()
        }
    }
    ,
    e.prototype.clearActive = function() {
        this.activeObservations_.splice(0)
    }
    ,
    e.prototype.hasActive = function() {
        return this.activeObservations_.length > 0
    }
    ,
    e
}()
  , i0 = typeof WeakMap < "u" ? new WeakMap : new o0
  , l0 = function() {
    function e(t) {
        if (!(this instanceof e))
            throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
        var r = C4.getInstance()
          , n = new $4(t,r,this);
        i0.set(this, n)
    }
    return e
}();
["observe", "unobserve", "disconnect"].forEach(function(e) {
    l0.prototype[e] = function() {
        var t;
        return (t = i0.get(this))[e].apply(t, arguments)
    }
});
var M4 = function() {
    return typeof fi.ResizeObserver < "u" ? fi.ResizeObserver : l0
}();
const z4 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: M4
}, Symbol.toStringTag, {
    value: "Module"
}))
  , D4 = ar(z4);
Object.defineProperty(yl, "__esModule", {
    value: !0
});
yl.InnerSlider = void 0;
var Ye = Ps(E)
  , W4 = Ps(Ay)
  , B4 = Ps(ES)
  , F4 = Ps(vl)
  , fe = $
  , H4 = bl
  , U4 = wl
  , Om = to
  , G4 = Ps(D4);
function Ps(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function nn(e) {
    "@babel/helpers - typeof";
    return nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    nn(e)
}
function pi() {
    return pi = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    pi.apply(this, arguments)
}
function V4(e, t) {
    if (e == null)
        return {};
    var r = Y4(e, t), n, o;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (o = 0; o < a.length; o++)
            n = a[o],
            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}
function Y4(e, t) {
    if (e == null)
        return {};
    var r = {}, n = Object.keys(e), o, a;
    for (a = 0; a < n.length; a++)
        o = n[a],
        !(t.indexOf(o) >= 0) && (r[o] = e[o]);
    return r
}
function _m(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function U(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? _m(Object(r), !0).forEach(function(n) {
            Q(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _m(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function Q4(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function K4(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, u0(n.key), n)
    }
}
function q4(e, t, r) {
    return t && K4(e.prototype, t),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function X4(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && Mu(e, t)
}
function Mu(e, t) {
    return Mu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
        return n.__proto__ = o,
        n
    }
    ,
    Mu(e, t)
}
function Z4(e) {
    var t = c0();
    return function() {
        var n = gi(e), o;
        if (t) {
            var a = gi(this).constructor;
            o = Reflect.construct(n, arguments, a)
        } else
            o = n.apply(this, arguments);
        return J4(this, o)
    }
}
function J4(e, t) {
    if (t && (nn(t) === "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return Y(e)
}
function Y(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function c0() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (c0 = function() {
        return !!e
    }
    )()
}
function gi(e) {
    return gi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }
    ,
    gi(e)
}
function Q(e, t, r) {
    return t = u0(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function u0(e) {
    var t = e3(e, "string");
    return nn(t) == "symbol" ? t : String(t)
}
function e3(e, t) {
    if (nn(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (nn(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
yl.InnerSlider = function(e) {
    X4(r, e);
    var t = Z4(r);
    function r(n) {
        var o;
        Q4(this, r),
        o = t.call(this, n),
        Q(Y(o), "listRefHandler", function(i) {
            return o.list = i
        }),
        Q(Y(o), "trackRefHandler", function(i) {
            return o.track = i
        }),
        Q(Y(o), "adaptHeight", function() {
            if (o.props.adaptiveHeight && o.list) {
                var i = o.list.querySelector('[data-index="'.concat(o.state.currentSlide, '"]'));
                o.list.style.height = (0,
                fe.getHeight)(i) + "px"
            }
        }),
        Q(Y(o), "componentDidMount", function() {
            if (o.props.onInit && o.props.onInit(),
            o.props.lazyLoad) {
                var i = (0,
                fe.getOnDemandLazySlides)(U(U({}, o.props), o.state));
                i.length > 0 && (o.setState(function(c) {
                    return {
                        lazyLoadedList: c.lazyLoadedList.concat(i)
                    }
                }),
                o.props.onLazyLoad && o.props.onLazyLoad(i))
            }
            var l = U({
                listRef: o.list,
                trackRef: o.track
            }, o.props);
            o.updateState(l, !0, function() {
                o.adaptHeight(),
                o.props.autoplay && o.autoPlay("update")
            }),
            o.props.lazyLoad === "progressive" && (o.lazyLoadTimer = setInterval(o.progressiveLazyLoad, 1e3)),
            o.ro = new G4.default(function() {
                o.state.animating ? (o.onWindowResized(!1),
                o.callbackTimers.push(setTimeout(function() {
                    return o.onWindowResized()
                }, o.props.speed))) : o.onWindowResized()
            }
            ),
            o.ro.observe(o.list),
            document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(c) {
                c.onfocus = o.props.pauseOnFocus ? o.onSlideFocus : null,
                c.onblur = o.props.pauseOnFocus ? o.onSlideBlur : null
            }),
            window.addEventListener ? window.addEventListener("resize", o.onWindowResized) : window.attachEvent("onresize", o.onWindowResized)
        }),
        Q(Y(o), "componentWillUnmount", function() {
            o.animationEndCallback && clearTimeout(o.animationEndCallback),
            o.lazyLoadTimer && clearInterval(o.lazyLoadTimer),
            o.callbackTimers.length && (o.callbackTimers.forEach(function(i) {
                return clearTimeout(i)
            }),
            o.callbackTimers = []),
            window.addEventListener ? window.removeEventListener("resize", o.onWindowResized) : window.detachEvent("onresize", o.onWindowResized),
            o.autoplayTimer && clearInterval(o.autoplayTimer),
            o.ro.disconnect()
        }),
        Q(Y(o), "componentDidUpdate", function(i) {
            if (o.checkImagesLoad(),
            o.props.onReInit && o.props.onReInit(),
            o.props.lazyLoad) {
                var l = (0,
                fe.getOnDemandLazySlides)(U(U({}, o.props), o.state));
                l.length > 0 && (o.setState(function(h) {
                    return {
                        lazyLoadedList: h.lazyLoadedList.concat(l)
                    }
                }),
                o.props.onLazyLoad && o.props.onLazyLoad(l))
            }
            o.adaptHeight();
            var c = U(U({
                listRef: o.list,
                trackRef: o.track
            }, o.props), o.state)
              , u = o.didPropsChange(i);
            u && o.updateState(c, u, function() {
                o.state.currentSlide >= Ye.default.Children.count(o.props.children) && o.changeSlide({
                    message: "index",
                    index: Ye.default.Children.count(o.props.children) - o.props.slidesToShow,
                    currentSlide: o.state.currentSlide
                }),
                o.props.autoplay ? o.autoPlay("update") : o.pause("paused")
            })
        }),
        Q(Y(o), "onWindowResized", function(i) {
            o.debouncedResize && o.debouncedResize.cancel(),
            o.debouncedResize = (0,
            B4.default)(function() {
                return o.resizeWindow(i)
            }, 50),
            o.debouncedResize()
        }),
        Q(Y(o), "resizeWindow", function() {
            var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0
              , l = !!(o.track && o.track.node);
            if (l) {
                var c = U(U({
                    listRef: o.list,
                    trackRef: o.track
                }, o.props), o.state);
                o.updateState(c, i, function() {
                    o.props.autoplay ? o.autoPlay("update") : o.pause("paused")
                }),
                o.setState({
                    animating: !1
                }),
                clearTimeout(o.animationEndCallback),
                delete o.animationEndCallback
            }
        }),
        Q(Y(o), "updateState", function(i, l, c) {
            var u = (0,
            fe.initializedState)(i);
            i = U(U(U({}, i), u), {}, {
                slideIndex: u.currentSlide
            });
            var h = (0,
            fe.getTrackLeft)(i);
            i = U(U({}, i), {}, {
                left: h
            });
            var d = (0,
            fe.getTrackCSS)(i);
            (l || Ye.default.Children.count(o.props.children) !== Ye.default.Children.count(i.children)) && (u.trackStyle = d),
            o.setState(u, c)
        }),
        Q(Y(o), "ssrInit", function() {
            if (o.props.variableWidth) {
                var i = 0
                  , l = 0
                  , c = []
                  , u = (0,
                fe.getPreClones)(U(U(U({}, o.props), o.state), {}, {
                    slideCount: o.props.children.length
                }))
                  , h = (0,
                fe.getPostClones)(U(U(U({}, o.props), o.state), {}, {
                    slideCount: o.props.children.length
                }));
                o.props.children.forEach(function(N) {
                    c.push(N.props.style.width),
                    i += N.props.style.width
                });
                for (var d = 0; d < u; d++)
                    l += c[c.length - 1 - d],
                    i += c[c.length - 1 - d];
                for (var m = 0; m < h; m++)
                    i += c[m];
                for (var v = 0; v < o.state.currentSlide; v++)
                    l += c[v];
                var y = {
                    width: i + "px",
                    left: -l + "px"
                };
                if (o.props.centerMode) {
                    var x = "".concat(c[o.state.currentSlide], "px");
                    y.left = "calc(".concat(y.left, " + (100% - ").concat(x, ") / 2 ) ")
                }
                return {
                    trackStyle: y
                }
            }
            var w = Ye.default.Children.count(o.props.children)
              , p = U(U(U({}, o.props), o.state), {}, {
                slideCount: w
            })
              , f = (0,
            fe.getPreClones)(p) + (0,
            fe.getPostClones)(p) + w
              , g = 100 / o.props.slidesToShow * f
              , b = 100 / f
              , j = -b * ((0,
            fe.getPreClones)(p) + o.state.currentSlide) * g / 100;
            o.props.centerMode && (j += (100 - b * g / 100) / 2);
            var k = {
                width: g + "%",
                left: j + "%"
            };
            return {
                slideWidth: b + "%",
                trackStyle: k
            }
        }),
        Q(Y(o), "checkImagesLoad", function() {
            var i = o.list && o.list.querySelectorAll && o.list.querySelectorAll(".slick-slide img") || []
              , l = i.length
              , c = 0;
            Array.prototype.forEach.call(i, function(u) {
                var h = function() {
                    return ++c && c >= l && o.onWindowResized()
                };
                if (!u.onclick)
                    u.onclick = function() {
                        return u.parentNode.focus()
                    }
                    ;
                else {
                    var d = u.onclick;
                    u.onclick = function(m) {
                        d(m),
                        u.parentNode.focus()
                    }
                }
                u.onload || (o.props.lazyLoad ? u.onload = function() {
                    o.adaptHeight(),
                    o.callbackTimers.push(setTimeout(o.onWindowResized, o.props.speed))
                }
                : (u.onload = h,
                u.onerror = function() {
                    h(),
                    o.props.onLazyLoadError && o.props.onLazyLoadError()
                }
                ))
            })
        }),
        Q(Y(o), "progressiveLazyLoad", function() {
            for (var i = [], l = U(U({}, o.props), o.state), c = o.state.currentSlide; c < o.state.slideCount + (0,
            fe.getPostClones)(l); c++)
                if (o.state.lazyLoadedList.indexOf(c) < 0) {
                    i.push(c);
                    break
                }
            for (var u = o.state.currentSlide - 1; u >= -(0,
            fe.getPreClones)(l); u--)
                if (o.state.lazyLoadedList.indexOf(u) < 0) {
                    i.push(u);
                    break
                }
            i.length > 0 ? (o.setState(function(h) {
                return {
                    lazyLoadedList: h.lazyLoadedList.concat(i)
                }
            }),
            o.props.onLazyLoad && o.props.onLazyLoad(i)) : o.lazyLoadTimer && (clearInterval(o.lazyLoadTimer),
            delete o.lazyLoadTimer)
        }),
        Q(Y(o), "slideHandler", function(i) {
            var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
              , c = o.props
              , u = c.asNavFor
              , h = c.beforeChange
              , d = c.onLazyLoad
              , m = c.speed
              , v = c.afterChange
              , y = o.state.currentSlide
              , x = (0,
            fe.slideHandler)(U(U(U({
                index: i
            }, o.props), o.state), {}, {
                trackRef: o.track,
                useCSS: o.props.useCSS && !l
            }))
              , w = x.state
              , p = x.nextState;
            if (w) {
                h && h(y, w.currentSlide);
                var f = w.lazyLoadedList.filter(function(g) {
                    return o.state.lazyLoadedList.indexOf(g) < 0
                });
                d && f.length > 0 && d(f),
                !o.props.waitForAnimate && o.animationEndCallback && (clearTimeout(o.animationEndCallback),
                v && v(y),
                delete o.animationEndCallback),
                o.setState(w, function() {
                    u && o.asNavForIndex !== i && (o.asNavForIndex = i,
                    u.innerSlider.slideHandler(i)),
                    p && (o.animationEndCallback = setTimeout(function() {
                        var g = p.animating
                          , b = V4(p, ["animating"]);
                        o.setState(b, function() {
                            o.callbackTimers.push(setTimeout(function() {
                                return o.setState({
                                    animating: g
                                })
                            }, 10)),
                            v && v(w.currentSlide),
                            delete o.animationEndCallback
                        })
                    }, m))
                })
            }
        }),
        Q(Y(o), "changeSlide", function(i) {
            var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
              , c = U(U({}, o.props), o.state)
              , u = (0,
            fe.changeSlide)(c, i);
            if (!(u !== 0 && !u) && (l === !0 ? o.slideHandler(u, l) : o.slideHandler(u),
            o.props.autoplay && o.autoPlay("update"),
            o.props.focusOnSelect)) {
                var h = o.list.querySelectorAll(".slick-current");
                h[0] && h[0].focus()
            }
        }),
        Q(Y(o), "clickHandler", function(i) {
            o.clickable === !1 && (i.stopPropagation(),
            i.preventDefault()),
            o.clickable = !0
        }),
        Q(Y(o), "keyHandler", function(i) {
            var l = (0,
            fe.keyHandler)(i, o.props.accessibility, o.props.rtl);
            l !== "" && o.changeSlide({
                message: l
            })
        }),
        Q(Y(o), "selectHandler", function(i) {
            o.changeSlide(i)
        }),
        Q(Y(o), "disableBodyScroll", function() {
            var i = function(c) {
                c = c || window.event,
                c.preventDefault && c.preventDefault(),
                c.returnValue = !1
            };
            window.ontouchmove = i
        }),
        Q(Y(o), "enableBodyScroll", function() {
            window.ontouchmove = null
        }),
        Q(Y(o), "swipeStart", function(i) {
            o.props.verticalSwiping && o.disableBodyScroll();
            var l = (0,
            fe.swipeStart)(i, o.props.swipe, o.props.draggable);
            l !== "" && o.setState(l)
        }),
        Q(Y(o), "swipeMove", function(i) {
            var l = (0,
            fe.swipeMove)(i, U(U(U({}, o.props), o.state), {}, {
                trackRef: o.track,
                listRef: o.list,
                slideIndex: o.state.currentSlide
            }));
            l && (l.swiping && (o.clickable = !1),
            o.setState(l))
        }),
        Q(Y(o), "swipeEnd", function(i) {
            var l = (0,
            fe.swipeEnd)(i, U(U(U({}, o.props), o.state), {}, {
                trackRef: o.track,
                listRef: o.list,
                slideIndex: o.state.currentSlide
            }));
            if (l) {
                var c = l.triggerSlideHandler;
                delete l.triggerSlideHandler,
                o.setState(l),
                c !== void 0 && (o.slideHandler(c),
                o.props.verticalSwiping && o.enableBodyScroll())
            }
        }),
        Q(Y(o), "touchEnd", function(i) {
            o.swipeEnd(i),
            o.clickable = !0
        }),
        Q(Y(o), "slickPrev", function() {
            o.callbackTimers.push(setTimeout(function() {
                return o.changeSlide({
                    message: "previous"
                })
            }, 0))
        }),
        Q(Y(o), "slickNext", function() {
            o.callbackTimers.push(setTimeout(function() {
                return o.changeSlide({
                    message: "next"
                })
            }, 0))
        }),
        Q(Y(o), "slickGoTo", function(i) {
            var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
            if (i = Number(i),
            isNaN(i))
                return "";
            o.callbackTimers.push(setTimeout(function() {
                return o.changeSlide({
                    message: "index",
                    index: i,
                    currentSlide: o.state.currentSlide
                }, l)
            }, 0))
        }),
        Q(Y(o), "play", function() {
            var i;
            if (o.props.rtl)
                i = o.state.currentSlide - o.props.slidesToScroll;
            else if ((0,
            fe.canGoNext)(U(U({}, o.props), o.state)))
                i = o.state.currentSlide + o.props.slidesToScroll;
            else
                return !1;
            o.slideHandler(i)
        }),
        Q(Y(o), "autoPlay", function(i) {
            o.autoplayTimer && clearInterval(o.autoplayTimer);
            var l = o.state.autoplaying;
            if (i === "update") {
                if (l === "hovered" || l === "focused" || l === "paused")
                    return
            } else if (i === "leave") {
                if (l === "paused" || l === "focused")
                    return
            } else if (i === "blur" && (l === "paused" || l === "hovered"))
                return;
            o.autoplayTimer = setInterval(o.play, o.props.autoplaySpeed + 50),
            o.setState({
                autoplaying: "playing"
            })
        }),
        Q(Y(o), "pause", function(i) {
            o.autoplayTimer && (clearInterval(o.autoplayTimer),
            o.autoplayTimer = null);
            var l = o.state.autoplaying;
            i === "paused" ? o.setState({
                autoplaying: "paused"
            }) : i === "focused" ? (l === "hovered" || l === "playing") && o.setState({
                autoplaying: "focused"
            }) : l === "playing" && o.setState({
                autoplaying: "hovered"
            })
        }),
        Q(Y(o), "onDotsOver", function() {
            return o.props.autoplay && o.pause("hovered")
        }),
        Q(Y(o), "onDotsLeave", function() {
            return o.props.autoplay && o.state.autoplaying === "hovered" && o.autoPlay("leave")
        }),
        Q(Y(o), "onTrackOver", function() {
            return o.props.autoplay && o.pause("hovered")
        }),
        Q(Y(o), "onTrackLeave", function() {
            return o.props.autoplay && o.state.autoplaying === "hovered" && o.autoPlay("leave")
        }),
        Q(Y(o), "onSlideFocus", function() {
            return o.props.autoplay && o.pause("focused")
        }),
        Q(Y(o), "onSlideBlur", function() {
            return o.props.autoplay && o.state.autoplaying === "focused" && o.autoPlay("blur")
        }),
        Q(Y(o), "render", function() {
            var i = (0,
            F4.default)("slick-slider", o.props.className, {
                "slick-vertical": o.props.vertical,
                "slick-initialized": !0
            })
              , l = U(U({}, o.props), o.state)
              , c = (0,
            fe.extractObject)(l, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"])
              , u = o.props.pauseOnHover;
            c = U(U({}, c), {}, {
                onMouseEnter: u ? o.onTrackOver : null,
                onMouseLeave: u ? o.onTrackLeave : null,
                onMouseOver: u ? o.onTrackOver : null,
                focusOnSelect: o.props.focusOnSelect && o.clickable ? o.selectHandler : null
            });
            var h;
            if (o.props.dots === !0 && o.state.slideCount >= o.props.slidesToShow) {
                var d = (0,
                fe.extractObject)(l, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"])
                  , m = o.props.pauseOnDotsHover;
                d = U(U({}, d), {}, {
                    clickHandler: o.changeSlide,
                    onMouseEnter: m ? o.onDotsLeave : null,
                    onMouseOver: m ? o.onDotsOver : null,
                    onMouseLeave: m ? o.onDotsLeave : null
                }),
                h = Ye.default.createElement(U4.Dots, d)
            }
            var v, y, x = (0,
            fe.extractObject)(l, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
            x.clickHandler = o.changeSlide,
            o.props.arrows && (v = Ye.default.createElement(Om.PrevArrow, x),
            y = Ye.default.createElement(Om.NextArrow, x));
            var w = null;
            o.props.vertical && (w = {
                height: o.state.listHeight
            });
            var p = null;
            o.props.vertical === !1 ? o.props.centerMode === !0 && (p = {
                padding: "0px " + o.props.centerPadding
            }) : o.props.centerMode === !0 && (p = {
                padding: o.props.centerPadding + " 0px"
            });
            var f = U(U({}, w), p)
              , g = o.props.touchMove
              , b = {
                className: "slick-list",
                style: f,
                onClick: o.clickHandler,
                onMouseDown: g ? o.swipeStart : null,
                onMouseMove: o.state.dragging && g ? o.swipeMove : null,
                onMouseUp: g ? o.swipeEnd : null,
                onMouseLeave: o.state.dragging && g ? o.swipeEnd : null,
                onTouchStart: g ? o.swipeStart : null,
                onTouchMove: o.state.dragging && g ? o.swipeMove : null,
                onTouchEnd: g ? o.touchEnd : null,
                onTouchCancel: o.state.dragging && g ? o.swipeEnd : null,
                onKeyDown: o.props.accessibility ? o.keyHandler : null
            }
              , j = {
                className: i,
                dir: "ltr",
                style: o.props.style
            };
            return o.props.unslick && (b = {
                className: "slick-list"
            },
            j = {
                className: i
            }),
            Ye.default.createElement("div", j, o.props.unslick ? "" : v, Ye.default.createElement("div", pi({
                ref: o.listRefHandler
            }, b), Ye.default.createElement(H4.Track, pi({
                ref: o.trackRefHandler
            }, c), o.props.children)), o.props.unslick ? "" : y, o.props.unslick ? "" : h)
        }),
        o.list = null,
        o.track = null,
        o.state = U(U({}, W4.default), {}, {
            currentSlide: o.props.initialSlide,
            targetSlide: o.props.initialSlide ? o.props.initialSlide : 0,
            slideCount: Ye.default.Children.count(o.props.children)
        }),
        o.callbackTimers = [],
        o.clickable = !0,
        o.debouncedResize = null;
        var a = o.ssrInit();
        return o.state = U(U({}, o.state), a),
        o
    }
    return q4(r, [{
        key: "didPropsChange",
        value: function(o) {
            for (var a = !1, i = 0, l = Object.keys(this.props); i < l.length; i++) {
                var c = l[i];
                if (!o.hasOwnProperty(c)) {
                    a = !0;
                    break
                }
                if (!(nn(o[c]) === "object" || typeof o[c] == "function" || isNaN(o[c])) && o[c] !== this.props[c]) {
                    a = !0;
                    break
                }
            }
            return a || Ye.default.Children.count(this.props.children) !== Ye.default.Children.count(o.children)
        }
    }]),
    r
}(Ye.default.Component);
var t3 = function(e) {
    return e.replace(/[A-Z]/g, function(t) {
        return "-" + t.toLowerCase()
    }).toLowerCase()
}, r3 = t3, n3 = r3, o3 = function(e) {
    var t = /[height|width]$/;
    return t.test(e)
}, Pm = function(e) {
    var t = ""
      , r = Object.keys(e);
    return r.forEach(function(n, o) {
        var a = e[n];
        n = n3(n),
        o3(n) && typeof a == "number" && (a = a + "px"),
        a === !0 ? t += n : a === !1 ? t += "not " + n : t += "(" + n + ": " + a + ")",
        o < r.length - 1 && (t += " and ")
    }),
    t
}, s3 = function(e) {
    var t = "";
    return typeof e == "string" ? e : e instanceof Array ? (e.forEach(function(r, n) {
        t += Pm(r),
        n < e.length - 1 && (t += ", ")
    }),
    t) : Pm(e)
}, a3 = s3, uc, Im;
function i3() {
    if (Im)
        return uc;
    Im = 1;
    function e(t) {
        this.options = t,
        !t.deferSetup && this.setup()
    }
    return e.prototype = {
        constructor: e,
        setup: function() {
            this.options.setup && this.options.setup(),
            this.initialised = !0
        },
        on: function() {
            !this.initialised && this.setup(),
            this.options.match && this.options.match()
        },
        off: function() {
            this.options.unmatch && this.options.unmatch()
        },
        destroy: function() {
            this.options.destroy ? this.options.destroy() : this.off()
        },
        equals: function(t) {
            return this.options === t || this.options.match === t
        }
    },
    uc = e,
    uc
}
var dc, Em;
function d0() {
    if (Em)
        return dc;
    Em = 1;
    function e(n, o) {
        var a = 0, i = n.length, l;
        for (a; a < i && (l = o(n[a], a),
        l !== !1); a++)
            ;
    }
    function t(n) {
        return Object.prototype.toString.apply(n) === "[object Array]"
    }
    function r(n) {
        return typeof n == "function"
    }
    return dc = {
        isFunction: r,
        isArray: t,
        each: e
    },
    dc
}
var hc, Tm;
function l3() {
    if (Tm)
        return hc;
    Tm = 1;
    var e = i3()
      , t = d0().each;
    function r(n, o) {
        this.query = n,
        this.isUnconditional = o,
        this.handlers = [],
        this.mql = window.matchMedia(n);
        var a = this;
        this.listener = function(i) {
            a.mql = i.currentTarget || i,
            a.assess()
        }
        ,
        this.mql.addListener(this.listener)
    }
    return r.prototype = {
        constuctor: r,
        addHandler: function(n) {
            var o = new e(n);
            this.handlers.push(o),
            this.matches() && o.on()
        },
        removeHandler: function(n) {
            var o = this.handlers;
            t(o, function(a, i) {
                if (a.equals(n))
                    return a.destroy(),
                    !o.splice(i, 1)
            })
        },
        matches: function() {
            return this.mql.matches || this.isUnconditional
        },
        clear: function() {
            t(this.handlers, function(n) {
                n.destroy()
            }),
            this.mql.removeListener(this.listener),
            this.handlers.length = 0
        },
        assess: function() {
            var n = this.matches() ? "on" : "off";
            t(this.handlers, function(o) {
                o[n]()
            })
        }
    },
    hc = r,
    hc
}
var fc, Am;
function c3() {
    if (Am)
        return fc;
    Am = 1;
    var e = l3()
      , t = d0()
      , r = t.each
      , n = t.isFunction
      , o = t.isArray;
    function a() {
        if (!window.matchMedia)
            throw new Error("matchMedia not present, legacy browsers require a polyfill");
        this.queries = {},
        this.browserIsIncapable = !window.matchMedia("only all").matches
    }
    return a.prototype = {
        constructor: a,
        register: function(i, l, c) {
            var u = this.queries
              , h = c && this.browserIsIncapable;
            return u[i] || (u[i] = new e(i,h)),
            n(l) && (l = {
                match: l
            }),
            o(l) || (l = [l]),
            r(l, function(d) {
                n(d) && (d = {
                    match: d
                }),
                u[i].addHandler(d)
            }),
            this
        },
        unregister: function(i, l) {
            var c = this.queries[i];
            return c && (l ? c.removeHandler(l) : (c.clear(),
            delete this.queries[i])),
            this
        }
    },
    fc = a,
    fc
}
var mc, Rm;
function u3() {
    if (Rm)
        return mc;
    Rm = 1;
    var e = c3();
    return mc = new e,
    mc
}
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = void 0;
    var t = i(E)
      , r = yl
      , n = i(a3)
      , o = i(oh)
      , a = $;
    function i(P) {
        return P && P.__esModule ? P : {
            default: P
        }
    }
    function l(P) {
        "@babel/helpers - typeof";
        return l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(I) {
            return typeof I
        }
        : function(I) {
            return I && typeof Symbol == "function" && I.constructor === Symbol && I !== Symbol.prototype ? "symbol" : typeof I
        }
        ,
        l(P)
    }
    function c() {
        return c = Object.assign ? Object.assign.bind() : function(P) {
            for (var I = 1; I < arguments.length; I++) {
                var B = arguments[I];
                for (var D in B)
                    Object.prototype.hasOwnProperty.call(B, D) && (P[D] = B[D])
            }
            return P
        }
        ,
        c.apply(this, arguments)
    }
    function u(P, I) {
        var B = Object.keys(P);
        if (Object.getOwnPropertySymbols) {
            var D = Object.getOwnPropertySymbols(P);
            I && (D = D.filter(function(F) {
                return Object.getOwnPropertyDescriptor(P, F).enumerable
            })),
            B.push.apply(B, D)
        }
        return B
    }
    function h(P) {
        for (var I = 1; I < arguments.length; I++) {
            var B = arguments[I] != null ? arguments[I] : {};
            I % 2 ? u(Object(B), !0).forEach(function(D) {
                j(P, D, B[D])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(P, Object.getOwnPropertyDescriptors(B)) : u(Object(B)).forEach(function(D) {
                Object.defineProperty(P, D, Object.getOwnPropertyDescriptor(B, D))
            })
        }
        return P
    }
    function d(P, I) {
        if (!(P instanceof I))
            throw new TypeError("Cannot call a class as a function")
    }
    function m(P, I) {
        for (var B = 0; B < I.length; B++) {
            var D = I[B];
            D.enumerable = D.enumerable || !1,
            D.configurable = !0,
            "value"in D && (D.writable = !0),
            Object.defineProperty(P, k(D.key), D)
        }
    }
    function v(P, I, B) {
        return I && m(P.prototype, I),
        Object.defineProperty(P, "prototype", {
            writable: !1
        }),
        P
    }
    function y(P, I) {
        if (typeof I != "function" && I !== null)
            throw new TypeError("Super expression must either be null or a function");
        P.prototype = Object.create(I && I.prototype, {
            constructor: {
                value: P,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(P, "prototype", {
            writable: !1
        }),
        I && x(P, I)
    }
    function x(P, I) {
        return x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(D, F) {
            return D.__proto__ = F,
            D
        }
        ,
        x(P, I)
    }
    function w(P) {
        var I = g();
        return function() {
            var D = b(P), F;
            if (I) {
                var C = b(this).constructor;
                F = Reflect.construct(D, arguments, C)
            } else
                F = D.apply(this, arguments);
            return p(this, F)
        }
    }
    function p(P, I) {
        if (I && (l(I) === "object" || typeof I == "function"))
            return I;
        if (I !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return f(P)
    }
    function f(P) {
        if (P === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return P
    }
    function g() {
        try {
            var P = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch {}
        return (g = function() {
            return !!P
        }
        )()
    }
    function b(P) {
        return b = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(B) {
            return B.__proto__ || Object.getPrototypeOf(B)
        }
        ,
        b(P)
    }
    function j(P, I, B) {
        return I = k(I),
        I in P ? Object.defineProperty(P, I, {
            value: B,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : P[I] = B,
        P
    }
    function k(P) {
        var I = N(P, "string");
        return l(I) == "symbol" ? I : String(I)
    }
    function N(P, I) {
        if (l(P) != "object" || !P)
            return P;
        var B = P[Symbol.toPrimitive];
        if (B !== void 0) {
            var D = B.call(P, I || "default");
            if (l(D) != "object")
                return D;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (I === "string" ? String : Number)(P)
    }
    var L = (0,
    a.canUseDOM)() && u3();
    e.default = function(P) {
        y(B, P);
        var I = w(B);
        function B(D) {
            var F;
            return d(this, B),
            F = I.call(this, D),
            j(f(F), "innerSliderRefHandler", function(C) {
                return F.innerSlider = C
            }),
            j(f(F), "slickPrev", function() {
                return F.innerSlider.slickPrev()
            }),
            j(f(F), "slickNext", function() {
                return F.innerSlider.slickNext()
            }),
            j(f(F), "slickGoTo", function(C) {
                var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                return F.innerSlider.slickGoTo(C, O)
            }),
            j(f(F), "slickPause", function() {
                return F.innerSlider.pause("paused")
            }),
            j(f(F), "slickPlay", function() {
                return F.innerSlider.autoPlay("play")
            }),
            F.state = {
                breakpoint: null
            },
            F._responsiveMediaHandlers = [],
            F
        }
        return v(B, [{
            key: "media",
            value: function(F, C) {
                L.register(F, C),
                this._responsiveMediaHandlers.push({
                    query: F,
                    handler: C
                })
            }
        }, {
            key: "componentDidMount",
            value: function() {
                var F = this;
                if (this.props.responsive) {
                    var C = this.props.responsive.map(function(_) {
                        return _.breakpoint
                    });
                    C.sort(function(_, T) {
                        return _ - T
                    }),
                    C.forEach(function(_, T) {
                        var S;
                        T === 0 ? S = (0,
                        n.default)({
                            minWidth: 0,
                            maxWidth: _
                        }) : S = (0,
                        n.default)({
                            minWidth: C[T - 1] + 1,
                            maxWidth: _
                        }),
                        (0,
                        a.canUseDOM)() && F.media(S, function() {
                            F.setState({
                                breakpoint: _
                            })
                        })
                    });
                    var O = (0,
                    n.default)({
                        minWidth: C.slice(-1)[0]
                    });
                    (0,
                    a.canUseDOM)() && this.media(O, function() {
                        F.setState({
                            breakpoint: null
                        })
                    })
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this._responsiveMediaHandlers.forEach(function(F) {
                    L.unregister(F.query, F.handler)
                })
            }
        }, {
            key: "render",
            value: function() {
                var F = this, C, O;
                this.state.breakpoint ? (O = this.props.responsive.filter(function(Re) {
                    return Re.breakpoint === F.state.breakpoint
                }),
                C = O[0].settings === "unslick" ? "unslick" : h(h(h({}, o.default), this.props), O[0].settings)) : C = h(h({}, o.default), this.props),
                C.centerMode && (C.slidesToScroll > 1,
                C.slidesToScroll = 1),
                C.fade && (C.slidesToShow > 1,
                C.slidesToScroll > 1,
                C.slidesToShow = 1,
                C.slidesToScroll = 1);
                var _ = t.default.Children.toArray(this.props.children);
                _ = _.filter(function(Re) {
                    return typeof Re == "string" ? !!Re.trim() : !!Re
                }),
                C.variableWidth && (C.rows > 1 || C.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),
                C.variableWidth = !1);
                for (var T = [], S = null, A = 0; A < _.length; A += C.rows * C.slidesPerRow) {
                    for (var M = [], H = A; H < A + C.rows * C.slidesPerRow; H += C.slidesPerRow) {
                        for (var G = [], q = H; q < H + C.slidesPerRow && (C.variableWidth && _[q].props.style && (S = _[q].props.style.width),
                        !(q >= _.length)); q += 1)
                            G.push(t.default.cloneElement(_[q], {
                                key: 100 * A + 10 * H + q,
                                tabIndex: -1,
                                style: {
                                    width: "".concat(100 / C.slidesPerRow, "%"),
                                    display: "inline-block"
                                }
                            }));
                        M.push(t.default.createElement("div", {
                            key: 10 * A + H
                        }, G))
                    }
                    C.variableWidth ? T.push(t.default.createElement("div", {
                        key: A,
                        style: {
                            width: S
                        }
                    }, M)) : T.push(t.default.createElement("div", {
                        key: A
                    }, M))
                }
                if (C === "unslick") {
                    var re = "regular slider " + (this.props.className || "");
                    return t.default.createElement("div", {
                        className: re
                    }, _)
                } else
                    T.length <= C.slidesToShow && !C.infinite && (C.unslick = !0);
                return t.default.createElement(r.InnerSlider, c({
                    style: this.props.style,
                    ref: this.innerSliderRefHandler
                }, (0,
                a.filterSettings)(C)), T)
            }
        }]),
        B
    }(t.default.Component)
}
)(Ty);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = void 0;
    var t = r(Ty);
    function r(n) {
        return n && n.__esModule ? n : {
            default: n
        }
    }
    e.default = t.default
}
)(Ey);
const d3 = zu(Ey)
  , ah = () => {
    function e(n) {
        const {className: o, style: a, onClick: i} = n;
        return s.jsx("div", {
            className: o,
            style: {
                ...a,
                display: "absolute",
                borderRadius: "100%"
            },
            onClick: i
        })
    }
    function t(n) {
        const {className: o, style: a, onClick: i} = n;
        return s.jsx("div", {
            className: o,
            style: {
                ...a,
                display: "absolute"
            },
            onClick: i
        })
    }
    const r = {
        dots: !1,
        infinite: !0,
        nextArrow: s.jsx(e, {}),
        prevArrow: s.jsx(t, {}),
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: !0
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: !0
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        }, {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    };
    return s.jsx(s.Fragment, {
        children: s.jsx("div", {
            style: {
                cursor: "grab"
            },
            id: "testimonial",
            children: s.jsx("section", {
                className: "py-16 bg-extraClr dark:bg-secondary xx:px-0 md:px-12",
                children: s.jsxs("div", {
                    className: " m-auto  text-secondary dark:text-gray-300 xx:px-6 md:px-12 xl:px-6",
                    children: [s.jsxs("div", {
                        className: "mb-20 space-y-4 ss:px-6 md:px-0",
                        children: [s.jsx("h2", {
                            className: "text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl",
                            children: "Writing Can Save Lives"
                        }), s.jsx("p", {
                            className: " text-gray-800 dark:text-white text-center",
                            children: "If you’re wondering why you should go ahead and write, here’s your writing fire! Books can save lives. These are real people testifying of real impact."
                        })]
                    }), s.jsx("div", {
                        className: " relative slider-container",
                        children: s.jsxs(d3, {
                            ...r,
                            children: [s.jsxs("div", {
                                id: "Oluwakemi-O.",
                                className: "aspect-auto ss:p-8 xx:p-2 border h-full  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl",
                                children: [s.jsxs("div", {
                                    className: "flex gap-4",
                                    children: [s.jsx("img", {
                                        className: "w-12 h-12 rounded-full",
                                        src: "https://i.postimg.cc/t4wVD9bk/41044-1.jpg",
                                        alt: "",
                                        width: "",
                                        height: "",
                                        loading: "lazy"
                                    }), s.jsxs("div", {
                                        children: [s.jsx("h6", {
                                            className: "text-lg font-medium text-gray-700 dark:text-white",
                                            children: "Oluwakemi O."
                                        }), s.jsx("p", {
                                            className: "text-sm text-gray-500 dark:text-gray-400",
                                            children: "..."
                                        })]
                                    })]
                                }), s.jsxs("div", {
                                    className: "mt-8 bg-white  dark:bg-secondary ss:p-8 xx:p-4 rounded-lg content  ",
                                    children: [s.jsx("p", {
                                        className: " ss:line-clamp-4 xx:line-clamp-4",
                                        children: '"“I read ‘Love, the Way to Victory’ by Kenneth E. Hagin and it taught me what love really means. I learnt that Love is a person and I can become that person. It changed my perspective on how I see people. It taught me that there’s a better way to dispense love to people—including people who have hurt me.”",'
                                    }), s.jsx(Oe, {
                                        to: "/testimonialPg#Oluwakemi-O.",
                                        children: s.jsx("span", {
                                            className: "text-accent",
                                            children: "See More..."
                                        })
                                    })]
                                })]
                            }), s.jsxs("div", {
                                id: "Brown-P.",
                                className: "aspect-auto ss:p-8 xx:p-2 border h-full  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl",
                                children: [s.jsxs("div", {
                                    className: "flex gap-4",
                                    children: [s.jsx("img", {
                                        className: "w-12 h-12 rounded-full",
                                        src: "https://i.postimg.cc/tgMtZ79N/2151100151-1.jpg",
                                        alt: "",
                                        width: "",
                                        height: "",
                                        loading: "lazy"
                                    }), s.jsxs("div", {
                                        children: [s.jsx("h6", {
                                            className: "text-lg font-medium text-gray-700 dark:text-white",
                                            children: "Brown P."
                                        }), s.jsx("p", {
                                            className: "text-sm text-gray-500 dark:text-gray-400",
                                            children: "..."
                                        })]
                                    })]
                                }), s.jsxs("div", {
                                    className: "mt-8 bg-white  dark:bg-secondary ss:p-8 xx:p-4 rounded-lg content  ",
                                    children: [s.jsx("p", {
                                        className: " ss:line-clamp-4 xx:line-clamp-5",
                                        children: "“It took reading ‘Created to be His Helpmeet’ by Debi Pearl for me to see and understand God’s instruction on the role of wives in marriage. It’s a big book; it sent me to the Bible. And through that book, God prepared me for the next phase of my life—which I didn’t even know was around the corner!”"
                                    }), s.jsx(Oe, {
                                        to: "/testimonialPg#Brown-P.",
                                        children: s.jsx("span", {
                                            className: "text-accent",
                                            children: "See More..."
                                        })
                                    })]
                                })]
                            }), s.jsxs("div", {
                                id: "Omodolapo-L.",
                                className: "aspect-auto ss:p-8 xx:p-2 border h-full  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl",
                                children: [s.jsxs("div", {
                                    className: "flex gap-4",
                                    children: [s.jsx("img", {
                                        className: "w-12 h-12 rounded-full",
                                        src: "https://i.postimg.cc/t4wVD9bk/41044-1.jpg",
                                        alt: "",
                                        width: "",
                                        height: "",
                                        loading: "lazy"
                                    }), s.jsxs("div", {
                                        children: [s.jsx("h6", {
                                            className: "text-lg font-medium text-gray-700 dark:text-white",
                                            children: "Omodolapo L."
                                        }), s.jsx("p", {
                                            className: "text-sm text-gray-500 dark:text-gray-400",
                                            children: "..."
                                        })]
                                    })]
                                }), s.jsxs("div", {
                                    className: "mt-8 bg-white  dark:bg-secondary ss:p-8 xx:p-4 rounded-lg content  ",
                                    children: [s.jsx("p", {
                                        className: " ss:line-clamp-4 xx:line-clamp-5",
                                        children: '"“In reading ‘Atomic Habits’ by James Clear, I was able to learn about bad behaviors and principle steps to adopting good ones. I got to understand why small habits can make a big difference. I got to learn the importance of habit tracking and how to build healthy habits. I also learnt the importance of accountability. This particular one was an amazing reminder for me.”",'
                                    }), s.jsx(Oe, {
                                        to: "/testimonialPg#Omodolapo-L.",
                                        children: s.jsx("span", {
                                            className: "text-accent",
                                            children: "See More..."
                                        })
                                    })]
                                })]
                            }), s.jsxs("div", {
                                id: "Clementina-O.",
                                className: "aspect-auto ss:p-8 xx:p-2 border h-full  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl",
                                children: [s.jsxs("div", {
                                    className: "flex gap-4",
                                    children: [s.jsx("img", {
                                        className: "w-12 h-12 rounded-full",
                                        src: "https://i.postimg.cc/Pxvbmhxs/2150797626-1.jpg",
                                        alt: "",
                                        width: "",
                                        height: "",
                                        loading: "lazy"
                                    }), s.jsxs("div", {
                                        children: [s.jsx("h6", {
                                            className: "text-lg font-medium text-gray-700 dark:text-white",
                                            children: "Clementina O."
                                        }), s.jsx("p", {
                                            className: "text-sm text-gray-500 dark:text-gray-400",
                                            children: "..."
                                        })]
                                    })]
                                }), s.jsxs("div", {
                                    className: "mt-8 bg-white  dark:bg-secondary ss:p-8 xx:p-4 rounded-lg content  ",
                                    children: [s.jsx("p", {
                                        className: " ss:line-clamp-4 xx:line-clamp-5",
                                        children: `"“If you have an assignment that has to do with destiny, just ensure the people who work closest with you are those who know, understand, and are familiar with your Source, the well you drink from and the Originator of the idea. I'd never even thought I’d work with Brown Patience and what I can say is phew! She understands. I don’t even have to explain too much.” “Reading ‘Chimamanda’ by Brown Patience, I have seen that I might have developed walls around my heart, and how the Lord tenderly brings down those bricks one after the other. Without these walls being brought down, I definitely cannot enjoy the many blessings around me. I have seen that closing my heart to pain means closing my heart to healing and beauty.”"`
                                    }), s.jsx(Oe, {
                                        to: "/testimonialPg#Clementina-O.",
                                        children: s.jsx("span", {
                                            className: "text-accent",
                                            children: "See More..."
                                        })
                                    })]
                                })]
                            }), s.jsxs("div", {
                                id: "Ireoluwa-O.",
                                className: "aspect-auto ss:p-8 xx:p-2 border h-full  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl",
                                children: [s.jsxs("div", {
                                    className: "flex gap-4",
                                    children: [s.jsx("img", {
                                        className: "w-12 h-12 rounded-full",
                                        src: "https://i.postimg.cc/c1V9kkyB/2151100221-1.jpg",
                                        alt: "",
                                        width: "",
                                        height: "",
                                        loading: "lazy"
                                    }), s.jsxs("div", {
                                        children: [s.jsx("h6", {
                                            className: "text-lg font-medium text-gray-700 dark:text-white",
                                            children: "Ireoluwa O."
                                        }), s.jsx("p", {
                                            className: "text-sm text-gray-500 dark:text-gray-400",
                                            children: "..."
                                        })]
                                    })]
                                }), s.jsxs("div", {
                                    className: "mt-8 bg-white  dark:bg-secondary ss:p-8 xx:p-4 rounded-lg content  ",
                                    children: [s.jsx("p", {
                                        className: " ss:line-clamp-4 xx:line-clamp-5",
                                        children: '"“One of the books I really love is Francine Rivers’ ‘The Scarlet Thread’. It’s a combination of two stories that are somehow linked but I only read one. I learned how to let go. Ah! I’m still learning it, but that’s where l started the learning process from. The woman had to let her cheating husband go for God to fix her and fix their marriage. She really grew, as she went through God’s dealings with her. I think about her sometimes when it’s difficult for me to let something go. If Sierra (that’s her name) can do it, I can.'
                                    }), s.jsx(Oe, {
                                        to: "/testimonialPg#Ireoluwa-O.",
                                        children: s.jsx("span", {
                                            className: "text-accent",
                                            children: "See More..."
                                        })
                                    })]
                                })]
                            }), s.jsxs("div", {
                                id: "Tobiloba-O.",
                                className: "aspect-auto ss:p-8 xx:p-2 border h-full  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl",
                                children: [s.jsxs("div", {
                                    className: "flex gap-4",
                                    children: [s.jsx("img", {
                                        className: "w-12 h-12 rounded-full",
                                        src: "https://i.postimg.cc/h47Mm8zz/2150709932-1.jpg",
                                        alt: "",
                                        width: "",
                                        height: "",
                                        loading: "lazy"
                                    }), s.jsxs("div", {
                                        children: [s.jsx("h6", {
                                            className: "text-lg font-medium text-gray-700 dark:text-white",
                                            children: "Tobiloba O."
                                        }), s.jsx("p", {
                                            className: "text-sm text-gray-500 dark:text-gray-400",
                                            children: "..."
                                        })]
                                    })]
                                }), s.jsxs("div", {
                                    className: "mt-8 bg-white  dark:bg-secondary ss:p-8 xx:p-4 rounded-lg content  ",
                                    children: [s.jsx("p", {
                                        className: " ss:line-clamp-4 xx:line-clamp-5",
                                        children: '"“I once hit rock bottom emotionally. It seemed like nothing was working and even the days rolled by hopelessly. On one of the hopeless days, I was led by God’s Spirit to read a particular chapter of a book l had inherited from my sister. That particular chapter addressed my situation at the time and literally spoke to my soul, reassuring me that there are lots of feats to attain whether situations around seem like it or not. In tears, I kept reading till my whole being accepted the message of the book. That book was ‘Break Out’ by Joel Osteen.”"'
                                    }), s.jsx(Oe, {
                                        to: "/testimonialPg#Tobiloba-O.",
                                        children: s.jsx("span", {
                                            className: "text-accent",
                                            children: "See More..."
                                        })
                                    })]
                                })]
                            }), s.jsxs("div", {
                                id: "Brown-P.2",
                                className: "aspect-auto ss:p-8 xx:p-2 border h-full  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl",
                                children: [s.jsxs("div", {
                                    className: "flex gap-4",
                                    children: [s.jsx("img", {
                                        className: "w-12 h-12 rounded-full",
                                        src: "https://i.postimg.cc/tgMtZ79N/2151100151-1.jpg",
                                        alt: "",
                                        width: "",
                                        height: "",
                                        loading: "lazy"
                                    }), s.jsxs("div", {
                                        children: [s.jsx("h6", {
                                            className: "text-lg font-medium text-gray-700 dark:text-white",
                                            children: "Brown P."
                                        }), s.jsx("p", {
                                            className: "text-sm text-gray-500 dark:text-gray-400",
                                            children: "..."
                                        })]
                                    })]
                                }), s.jsxs("div", {
                                    className: "mt-8 bg-white  dark:bg-secondary ss:p-8 xx:p-4 rounded-lg content  ",
                                    children: [s.jsx("p", {
                                        className: " ss:line-clamp-4 xx:line-clamp-5",
                                        children: '"“I read Francine River’s ‘Atonement Child’ for the second time and the emotions l’d been feeling just around that time came into perspective. Yeah, I was confused quite alright; confused because I was letting my emotions take the lead. I knew what God had told me to do but it didn’t add up. Instead of walking in faith, I succumbed to despair. It morphed into other things and sank me into a pit so deep l believed I wouldn’t even be able to describe it. Reading that book helped me make sense of the chaos. It also encouraged me to turn back to and stand firm in faith. As Joe said in one chapter, God knows what’s best for me. It’s alright to trust, and follow.”'
                                    }), s.jsx(Oe, {
                                        to: "/testimonialPg#Brown-P.2",
                                        children: s.jsx("span", {
                                            className: "text-accent",
                                            children: "See More..."
                                        })
                                    })]
                                })]
                            }), s.jsxs("div", {
                                id: "David-I.",
                                className: "aspect-auto ss:p-8 xx:p-2 border h-full  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl",
                                children: [s.jsxs("div", {
                                    className: "flex gap-4",
                                    children: [s.jsx("img", {
                                        className: "w-12 h-12 rounded-full",
                                        src: "https://i.postimg.cc/h47Mm8zz/2150709932-1.jpg",
                                        alt: "",
                                        width: "",
                                        height: "",
                                        loading: "lazy"
                                    }), s.jsxs("div", {
                                        children: [s.jsx("h6", {
                                            className: "text-lg font-medium text-gray-700 dark:text-white",
                                            children: "David I."
                                        }), s.jsx("p", {
                                            className: "text-sm text-gray-500 dark:text-gray-400",
                                            children: "..."
                                        })]
                                    })]
                                }), s.jsxs("div", {
                                    className: "mt-8 bg-white  dark:bg-secondary ss:p-8 xx:p-4 rounded-lg content  ",
                                    children: [s.jsx("p", {
                                        className: " ss:line-clamp-4 xx:line-clamp-5",
                                        children: '"“Atomic Habits’ by James Clears would be top of the list of the books that have heavily impacted me. Made me become more intentional about how I spend my time and the new habits I’m tryna build.”"'
                                    }), s.jsx(Oe, {
                                        to: "/testimonialPg#David-I.",
                                        children: s.jsx("span", {
                                            className: "text-accent",
                                            children: "See More..."
                                        })
                                    })]
                                })]
                            }), s.jsxs("div", {
                                id: "Omodolapo-L.2",
                                className: "aspect-auto ss:p-8 xx:p-2 border h-full  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl",
                                children: [s.jsxs("div", {
                                    className: "flex gap-4",
                                    children: [s.jsx("img", {
                                        className: "w-12 h-12 rounded-full",
                                        src: "https://i.postimg.cc/t4wVD9bk/41044-1.jpg",
                                        alt: "",
                                        width: "",
                                        height: "",
                                        loading: "lazy"
                                    }), s.jsxs("div", {
                                        children: [s.jsx("h6", {
                                            className: "text-lg font-medium text-gray-700 dark:text-white",
                                            children: "Omodolapo L."
                                        }), s.jsx("p", {
                                            className: "text-sm text-gray-500 dark:text-gray-400",
                                            children: "..."
                                        })]
                                    })]
                                }), s.jsxs("div", {
                                    className: "mt-8 bg-white  dark:bg-secondary ss:p-8 xx:p-4 rounded-lg content  ",
                                    children: [s.jsx("p", {
                                        className: " ss:line-clamp-4 xx:line-clamp-5",
                                        children: '"“Reading John C. Maxwell’s ‘The Power of Your Leadership’, I got to understand how to combine personal passion and leadership without one affecting the other. I got to understand the 5 levels of leadership which are Position, Permission, Production, People Development, and Pinnacle. I learnt how they can be applied in our daily lives.”"'
                                    }), s.jsx(Oe, {
                                        to: "/testimonialPg#Omodolapo-L.2",
                                        children: s.jsx("span", {
                                            className: "text-accent",
                                            children: "See More..."
                                        })
                                    })]
                                })]
                            }), s.jsxs("div", {
                                id: "Ireoluwa-O.2",
                                className: "aspect-auto ss:p-8 xx:p-2 border h-full  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl",
                                children: [s.jsxs("div", {
                                    className: "flex gap-4",
                                    children: [s.jsx("img", {
                                        className: "w-12 h-12 rounded-full",
                                        src: "https://i.postimg.cc/c1V9kkyB/2151100221-1.jpg",
                                        alt: "",
                                        width: "",
                                        height: "",
                                        loading: "lazy"
                                    }), s.jsxs("div", {
                                        children: [s.jsx("h6", {
                                            className: "text-lg font-medium text-gray-700 dark:text-white",
                                            children: "Ireoluwa O."
                                        }), s.jsx("p", {
                                            className: "text-sm text-gray-500 dark:text-gray-400",
                                            children: "..."
                                        })]
                                    })]
                                }), s.jsxs("div", {
                                    className: "mt-8 bg-white  dark:bg-secondary ss:p-8 xx:p-4 rounded-lg content  ",
                                    children: [s.jsx("p", {
                                        className: " ss:line-clamp-4 xx:line-clamp-5",
                                        children: '"“Your patience and consistency in making sure my book was properly and thoroughly put together was very encouraging and highly inspiring. Thank you.”“Several books have impacted me. When I read a book—any book—I relate with at least one of the characters, or more than one. I put myself in their shoes and personalize their experiences. It’s what makes reading very real to me I think a lot of my favorite books are written by Francine Rivers. One of her books is titled ‘The Masterpiece’. I learned quite a lot from it. Grace, one of the main characters, had a tough life. I could relate to that. But it didn’t shake her faith in God, not at all. I also learned assertiveness from her. Before reading the book, I would see something I didn’t like and I still wouldn’t say anything. But I learned to stand against things that don’t align to my values.”"'
                                    }), s.jsx(Oe, {
                                        to: "/testimonialPg#Ireoluwa-O.2",
                                        children: s.jsx("span", {
                                            className: "text-accent",
                                            children: "See More..."
                                        })
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            })
        })
    })
}
  , h3 = () => {
    const [e,t] = E.useState(!1)
      , [r,n] = E.useState(0)
      , [o,a] = E.useState(0)
      , i = E.useRef(null);
    return E.useEffect( () => {
        const l = i.current
          , c = d => {
            t(!0),
            n(d.pageX - l.offsetLeft),
            a(l.scrollLeft)
        }
          , u = () => {
            t(!1)
        }
          , h = d => {
            if (!e)
                return;
            d.preventDefault();
            const v = (d.pageX - l.offsetLeft - r) * 3;
            l.scrollLeft = o - v
        }
        ;
        return l.addEventListener("mousedown", c),
        l.addEventListener("mouseup", u),
        l.addEventListener("mousemove", h),
        () => {
            l.removeEventListener("mousedown", c),
            l.removeEventListener("mouseup", u),
            l.removeEventListener("mousemove", h)
        }
    }
    , [e, r, o]),
    s.jsx("div", {
        style: {
            cursor: "pointer"
        },
        id: "testimonial",
        children: s.jsx("section", {
            id: "mySlider",
            className: "py-16 ss:px-12 xx:px-6",
            children: s.jsxs("div", {
                className: "relative",
                children: [s.jsx("div", {
                    className: "",
                    children: s.jsx("h2", {
                        className: "text-center text-2xl mb-12 font-bold text-gray-800 dark:text-white md:text-4xl",
                        children: "Writing Can Save Lives"
                    })
                }), s.jsxs("div", {
                    id: "slider-container",
                    ref: i,
                    children: [s.jsxs("div", {
                        id: "Oluwakemi-O.",
                        className: "relative bg-primary rounded shadow-md dark:bg-black xx:p-2 ss:p-4",
                        children: [s.jsxs("div", {
                            className: "flex gap-4",
                            children: [s.jsx("img", {
                                className: "w-12 h-12 rounded-full",
                                src: "https://i.postimg.cc/t4wVD9bk/41044-1.jpg",
                                alt: "",
                                width: "",
                                height: "",
                                loading: "lazy"
                            }), s.jsxs("div", {
                                className: "mb-2",
                                children: [s.jsx("h6", {
                                    className: "text-secondary dark:text-primary",
                                    children: "Oluwakemi O."
                                }), s.jsx("p", {
                                    className: "text-secondary dark:text-primary",
                                    children: "..."
                                })]
                            })]
                        }), s.jsx("div", {
                            className: "",
                            children: s.jsx("p", {
                                className: "text-secondary dark:text-primary",
                                children: '"“I read ‘Love, the Way to Victory’ by Kenneth E. Hagin and it taught me what love really means. I learnt that Love is a person and I can become that person. It changed my perspective on how I see people. It taught me that there’s a better way to dispense love to people—including people who have hurt me.”",'
                            })
                        })]
                    }), s.jsxs("div", {
                        id: "Brown-P.",
                        className: "relative bg-primary rounded shadow-md dark:bg-black xx:p-2 ss:p-4",
                        children: [s.jsxs("div", {
                            className: "flex gap-4",
                            children: [s.jsx("img", {
                                className: "w-12 h-12 rounded-full",
                                src: "https://i.postimg.cc/tgMtZ79N/2151100151-1.jpg",
                                alt: "",
                                width: "",
                                height: "",
                                loading: "lazy"
                            }), s.jsxs("div", {
                                className: "mb-2",
                                children: [s.jsx("h6", {
                                    className: "text-secondary dark:text-primary",
                                    children: "Brown P."
                                }), s.jsx("p", {
                                    className: "text-secondary dark:text-primary",
                                    children: "..."
                                })]
                            })]
                        }), s.jsx("div", {
                            className: "",
                            children: s.jsx("p", {
                                className: "text-secondary dark:text-primary",
                                children: '"“It took reading ‘Created to be His Helpmeet’ by Debi Pearl for me to see and understand God’s instruction on the role of wives in marriage. It’s a big book; it sent me to the Bible. And through that book, God prepared me for the next phase of my life—which I didn’t even know was around the corner!”",'
                            })
                        })]
                    }), s.jsxs("div", {
                        id: "Omodolapo-L.",
                        className: "relative bg-primary rounded shadow-md dark:bg-black xx:p-2 ss:p-4",
                        children: [s.jsxs("div", {
                            className: "flex gap-4",
                            children: [s.jsx("img", {
                                className: "w-12 h-12 rounded-full",
                                src: "https://i.postimg.cc/t4wVD9bk/41044-1.jpg",
                                alt: "",
                                width: "",
                                height: "",
                                loading: "lazy"
                            }), s.jsxs("div", {
                                className: "mb-2",
                                children: [s.jsx("h6", {
                                    className: "text-secondary dark:text-primary",
                                    children: "Omodolapo L."
                                }), s.jsx("p", {
                                    className: "text-secondary dark:text-primary",
                                    children: "..."
                                })]
                            })]
                        }), s.jsxs("div", {
                            className: "text-secondary dark:text-primary",
                            children: [s.jsx("p", {
                                className: "mb-4",
                                children: '"“In reading ‘Atomic Habits’ by James Clear, I was able to learn about bad behaviors and principle steps to adopting good ones. I got to understand why small habits can make a big difference. I got to learn the importance of habit tracking and how to build healthy habits. I also learnt the importance of accountability. This particular one was an amazing reminder for me.”",'
                            }), s.jsx("p", {
                                className: "mb-4",
                                children: 'I got to learn the importance of habit tracking and how to build healthy habits. I also learnt the importance of accountability. This particular one was an amazing reminder for me.”",'
                            })]
                        })]
                    }), s.jsxs("div", {
                        id: "Clementina-O.",
                        className: "relative bg-primary rounded shadow-md dark:bg-black xx:p-2 ss:p-4",
                        children: [s.jsxs("div", {
                            className: "flex gap-4",
                            children: [s.jsx("img", {
                                className: "w-12 h-12 rounded-full",
                                src: "https://i.postimg.cc/t4wVD9bk/41044-1.jpg",
                                alt: "",
                                width: "",
                                height: "",
                                loading: "lazy"
                            }), s.jsxs("div", {
                                className: "mb-2",
                                children: [s.jsx("h6", {
                                    className: "text-secondary dark:text-primary",
                                    children: "Clementina O."
                                }), s.jsx("p", {
                                    className: "text-secondary dark:text-primary",
                                    children: "..."
                                })]
                            })]
                        }), s.jsxs("div", {
                            className: "text-secondary dark:text-primary",
                            children: [s.jsx("p", {
                                className: "mb-4",
                                children: '"“If you have an assignment that has to do with destiny, just ensure the people who work closest with you are those who know, understand, and are familiar with your Source, the well you drink from and the Originator of the idea.'
                            }), s.jsx("p", {
                                className: "mb-4",
                                children: "I'd never even thought I’d work with Brown Patience and what I can say is phew! She understands. I don’t even have to explain too much.”"
                            }), s.jsx("p", {
                                className: "mb-4",
                                children: '“Reading ‘Chimamanda’ by Brown Patience, I have seen that I might have developed walls around my heart, and how the Lord tenderly brings down those bricks one after the other. Without these walls being brought down, I definitely cannot enjoy the many blessings around me. I have seen that closing my heart to pain means closing my heart to healing and beauty.”"'
                            })]
                        })]
                    }), s.jsxs("div", {
                        id: "Ireoluwa-O.",
                        className: "relative bg-primary rounded shadow-md dark:bg-black xx:p-2 ss:p-4",
                        children: [s.jsxs("div", {
                            className: "flex gap-4",
                            children: [s.jsx("img", {
                                className: "w-12 h-12 rounded-full",
                                src: "https://i.postimg.cc/c1V9kkyB/2151100221-1.jpg",
                                alt: "",
                                width: "",
                                height: "",
                                loading: "lazy"
                            }), s.jsxs("div", {
                                className: "mb-2",
                                children: [s.jsx("h6", {
                                    className: "text-secondary dark:text-primary",
                                    children: "Ireoluwa O."
                                }), s.jsx("p", {
                                    className: "text-secondary dark:text-primary",
                                    children: "..."
                                })]
                            })]
                        }), s.jsxs("div", {
                            className: "text-secondary dark:text-primary",
                            children: [s.jsx("p", {
                                className: "mb-4",
                                children: '"“One of the books I really love is Francine Rivers’ ‘The Scarlet Thread’. It’s a combination of two stories that are somehow linked but I only read one. I learned how to let go. Ah! I’m still learning it, but that’s where l started the learning process from.'
                            }), s.jsx("p", {
                                className: "mb-4",
                                children: "The woman had to let her cheating husband go for God to fix her and fix their marriage. She really grew, as she went through God’s dealings with her. I think about her sometimes when it’s difficult for me to let something go. If Sierra (that’s her name) can do it, I can."
                            })]
                        })]
                    }), s.jsxs("div", {
                        id: "Tobiloba-O.",
                        className: "relative bg-primary rounded shadow-md dark:bg-black xx:p-2 ss:p-4",
                        children: [s.jsxs("div", {
                            className: "flex gap-4",
                            children: [s.jsx("img", {
                                className: "w-12 h-12 rounded-full",
                                src: "https://i.postimg.cc/h47Mm8zz/2150709932-1.jpg",
                                alt: "",
                                width: "",
                                height: "",
                                loading: "lazy"
                            }), s.jsxs("div", {
                                className: "mb-2",
                                children: [s.jsx("h6", {
                                    className: "text-secondary dark:text-primary",
                                    children: "Tobiloba O."
                                }), s.jsx("p", {
                                    className: "text-secondary dark:text-primary",
                                    children: "..."
                                })]
                            })]
                        }), s.jsxs("div", {
                            className: "text-secondary dark:text-primary",
                            children: [s.jsx("p", {
                                className: "mb-4",
                                children: '"“I once hit rock bottom emotionally. It seemed like nothing was working and even the days rolled by hopelessly. On one of the hopeless days, I was led by God’s Spirit to read a particular chapter of a book l had inherited from my sister.'
                            }), s.jsx("p", {
                                className: "mb-4",
                                children: "That particular chapter addressed my situation at the time and literally spoke to my soul, reassuring me that there are lots of feats to attain whether situations around seem like it or not. In tears, I kept reading till my whole being accepted the message of the book. That book was ‘Break Out’ by Joel Osteen.”"
                            })]
                        })]
                    }), s.jsxs("div", {
                        id: "Brown-P.2",
                        className: "relative bg-primary rounded shadow-md dark:bg-black xx:p-2 ss:p-4",
                        children: [s.jsxs("div", {
                            className: "flex gap-4",
                            children: [s.jsx("img", {
                                className: "w-12 h-12 rounded-full",
                                src: "https://i.postimg.cc/t4wVD9bk/41044-1.jpg",
                                alt: "",
                                width: "",
                                height: "",
                                loading: "lazy"
                            }), s.jsxs("div", {
                                className: "mb-2",
                                children: [s.jsx("h6", {
                                    className: "text-secondary dark:text-primary",
                                    children: "Brown P."
                                }), s.jsx("p", {
                                    className: "text-secondary dark:text-primary",
                                    children: "..."
                                })]
                            })]
                        }), s.jsxs("div", {
                            className: "text-secondary dark:text-primary",
                            children: [s.jsx("p", {
                                className: "mb-4",
                                children: '"“I read Francine River’s ‘Atonement Child’ for the second time and the emotions l’d been feeling just around that time came into perspective. Yeah, I was confused quite alright; confused because I was letting my emotions take the lead. I knew what God had told me to do but it didn’t add up. Instead of walking in faith, I succumbed to despair.'
                            }), s.jsx("p", {
                                className: "mb-4",
                                children: "It morphed into other things and sank me into a pit so deep l believed I wouldn’t even be able to describe it. Reading that book helped me make sense of the chaos."
                            }), s.jsx("p", {
                                className: "mb-4",
                                children: "It also encouraged me to turn back to and stand firm in faith. As Joe said in one chapter, God knows what’s best for me. It’s alright to trust, and follow.”"
                            })]
                        })]
                    }), s.jsxs("div", {
                        id: "David-I.",
                        className: "relative bg-primary rounded shadow-md dark:bg-black xx:p-2 ss:p-4",
                        children: [s.jsxs("div", {
                            className: "flex gap-4",
                            children: [s.jsx("img", {
                                className: "w-12 h-12 rounded-full",
                                src: "https://i.postimg.cc/h47Mm8zz/2150709932-1.jpg",
                                alt: "",
                                width: "",
                                height: "",
                                loading: "lazy"
                            }), s.jsxs("div", {
                                className: "mb-2",
                                children: [s.jsx("h6", {
                                    className: "text-secondary dark:text-primary",
                                    children: "David I"
                                }), s.jsx("p", {
                                    className: "text-secondary dark:text-primary",
                                    children: "..."
                                })]
                            })]
                        }), s.jsx("div", {
                            className: "text-secondary dark:text-primary",
                            children: s.jsx("p", {
                                className: "mb-4",
                                children: "“Atomic Habits’ by James Clears would be top of the list of the books that have heavily impacted me. Made me become more intentional about how I spend my time and the new habits I’m tryna build.”"
                            })
                        })]
                    }), s.jsxs("div", {
                        id: "Omodolapo-L.2",
                        className: "relative bg-primary rounded shadow-md dark:bg-black xx:p-2 ss:p-4",
                        children: [s.jsxs("div", {
                            className: "flex gap-4",
                            children: [s.jsx("img", {
                                className: "w-12 h-12 rounded-full",
                                src: "https://i.postimg.cc/t4wVD9bk/41044-1.jpg",
                                alt: "",
                                width: "",
                                height: "",
                                loading: "lazy"
                            }), s.jsxs("div", {
                                className: "mb-2",
                                children: [s.jsx("h6", {
                                    className: "text-secondary dark:text-primary",
                                    children: "Omodolapo L."
                                }), s.jsx("p", {
                                    className: "text-secondary dark:text-primary",
                                    children: "..."
                                })]
                            })]
                        }), s.jsxs("div", {
                            className: "text-secondary dark:text-primary",
                            children: [s.jsx("p", {
                                className: "mb-4",
                                children: '"“Reading John C. Maxwell’s ‘The Power of Your Leadership’, I got to understand how to combine personal passion and leadership without one affecting the other.'
                            }), s.jsx("p", {
                                className: "mb-4",
                                children: 'I got to understand the 5 levels of leadership which are Position, Permission, Production, People Development, and Pinnacle. I learnt how they can be applied in our daily lives.”"'
                            })]
                        })]
                    }), s.jsxs("div", {
                        id: "Ireoluwa-O.2",
                        className: "relative bg-primary rounded shadow-md dark:bg-black xx:p-2 ss:p-4",
                        children: [s.jsxs("div", {
                            className: "flex gap-4",
                            children: [s.jsx("img", {
                                className: "w-12 h-12 rounded-full",
                                src: "https://i.postimg.cc/c1V9kkyB/2151100221-1.jpg",
                                alt: "",
                                width: "",
                                height: "",
                                loading: "lazy"
                            }), s.jsxs("div", {
                                className: "mb-2",
                                children: [s.jsx("h6", {
                                    className: "text-secondary dark:text-primary",
                                    children: "Ireoluwa O."
                                }), s.jsx("p", {
                                    className: "text-secondary dark:text-primary",
                                    children: "..."
                                })]
                            })]
                        }), s.jsxs("div", {
                            className: "text-secondary dark:text-primary",
                            children: [s.jsx("p", {
                                className: "mb-4",
                                children: '"“Your patience and consistency in making sure my book was properly and thoroughly put together was very encouraging and highly inspiring. Thank you.”“Several books have impacted me. When I read a book—any book—I relate with at least one of the characters, or more than one.'
                            }), s.jsx("p", {
                                className: "mb-4",
                                children: "I put myself in their shoes and personalize their experiences. It’s what makes reading very real to me I think a lot of my favorite books are written by Francine Rivers. One of her books is titled ‘The Masterpiece’."
                            }), s.jsx("p", {
                                className: "mb-4",
                                children: 'I learned quite a lot from it. Grace, one of the main characters, had a tough life. I could relate to that. But it didn’t shake her faith in God, not at all. I also learned assertiveness from her. Before reading the book, I would see something I didn’t like and I still wouldn’t say anything. But I learned to stand against things that don’t align to my values.”"'
                            })]
                        })]
                    })]
                })]
            })
        })
    })
}
  , f3 = [{
    id: 1,
    name: "Timilehin Oshinowo.",
    title: "...",
    img: "https://i.postimg.cc/tR1dcyQb/user.png",
    content: "“Working with Brown Patience on the book ‘Peace by the Flute’ was a seamless exercise because Patience made it easy, and her ability to expand on ideas and make the story come alive is really incredible. I'm glad I worked with her. I'm glad we were able to successfully write the book. She did so well putting her talents to valuable use on the book. She made it come alive and I really appreciate her work. I appreciate her efforts. I appreciate everything she does. She’s amazing!”"
}, {
    id: 2,
    name: "Oyindamola Alabi",
    title: "...",
    img: "https://i.postimg.cc/tR1dcyQb/user.png",
    content: "“Thank you so much for the excellent, amazing, wonderful work. I still read Envision sometimes and it feels new. It’s like the Bible. You know, when you read the Bible, you get a new perspective. The last time I read it, which was about two weeks ago, it still felt new to me like ‘Am I the one that wrote this book?’ I don’t know how to explain it but thank you for your divine touch on Envision. Thank you for making it such a beautiful book to read. Thank you for the flow.”"
}, {
    id: 3,
    name: "Oyindamola Alabi",
    title: "...",
    img: "https://i.postimg.cc/tR1dcyQb/user.png",
    content: "“Working with Brown Patience was such a seamless journey. Thank you for taking me through the process. It was evidently shown in my book Envision. Your keen attention to details, all the questions you asked me during the consultation phase were so apt. It made me reflect on how excellent my book turned out. Like I always refer to you as the ‘Queen of Editing’. Thank you for your amazing work.“It wasn’t like you were just taking the job; you were passionate, intentional about it; you wanted to know exactly what was in my mind and that was how Envision could come out looking perfect in its way. So, thank you so much, Patience, my Queen of Editing. Keep on doing the good work.”"
}, {
    id: 4,
    name: "Olamide Aholu",
    title: "...",
    img: "https://i.postimg.cc/tR1dcyQb/user.png",
    content: "“If you have an assignment that has to do with destiny, just ensure the people who work closest with you are those who know, understand, and are familiar with your Source, the well you drink from and the Originator of the idea. I'd never even thought I’d work with Brown Patience and what I can say is phew! She understands. I don’t even have to explain too much.” "
}, {
    id: 5,
    name: "Olamide Aholu",
    title: "...",
    img: "https://i.postimg.cc/tR1dcyQb/user.png",
    content: "“I literally went to sleep the moment Patience started working on my book. She understood the assignment. She didn’t just edit my book, she found the words that were hanging in my mind and gave them life. With my experience with Patience, I can say there is editing and there is editing that introduces life.”"
}, {
    id: 6,
    name: "David Dakarabor",
    title: "...",
    img: "https://i.postimg.cc/tR1dcyQb/user.png",
    content: "“Working with Brown Patience has been a great opportunity. She spiced up my book and brought a greater light of impact to every line and every thought. It has been a great privilege to work with her. She did an excellent job—with creativity, excellence, and diligence. She's wonderful. I wish to work with her again.”"
}, {
    id: 7,
    name: "Harry O. A. Silk",
    title: "...",
    img: "https://i.postimg.cc/tR1dcyQb/user.png",
    content: "“Your voice was the missing piece in making ‘The Book of Barvadus’ more human and relatable. You helped me better elaborate what the voice in my head was trying to tell me in a simple form that every reader would understand.”"
}, {
    id: 8,
    name: "Emmanuel E. Robert",
    title: "...",
    img: "https://i.postimg.cc/tR1dcyQb/user.png",
    content: "“Working with Brown Patience was a pleasurable experience. She transformed my write-up and made it easier to read. She captured my voice to my generation. I love the way she made the work easy for me. Thank you Pat!!”"
}, {
    id: 9,
    name: "Precious A. Oriyomi",
    title: "...",
    img: "https://i.postimg.cc/tR1dcyQb/user.png",
    content: "“Working with Brown Patience was an absolute delight!! She is the most patient and thoughtful editor anyone can have. Asides editing, she’s your go-to encourager and friend. I totally recommend, and I’d work with her over and again.”"
}, {
    id: 10,
    name: "Tioluwaniyin Adetunji",
    title: "...",
    img: "https://i.postimg.cc/tR1dcyQb/user.png",
    content: "“Your patience and consistency in making sure my book was properly and thoroughly put together was very encouraging and highly inspiring. Thank you.”"
}]
  , m3 = () => {
    const [e,t] = E.useState(0)
      , [r,n] = E.useState(!1)
      , [o,a] = E.useState(0)
      , [i,l] = E.useState(0)
      , c = E.useRef(null);
    E.useEffect( () => {
        const h = c.current
          , d = y => {
            n(!0),
            a(y.pageX - h.offsetLeft),
            l(h.scrollLeft)
        }
          , m = () => {
            n(!1)
        }
          , v = y => {
            if (!r)
                return;
            y.preventDefault();
            const w = (y.pageX - h.offsetLeft - o) * 3;
            h.scrollLeft = i - w
        }
        ;
        return h.addEventListener("mousedown", d),
        h.addEventListener("mouseup", m),
        h.addEventListener("mousemove", v),
        () => {
            h.removeEventListener("mousedown", d),
            h.removeEventListener("mouseup", m),
            h.removeEventListener("mousemove", v)
        }
    }
    , [r, o, i]);
    const u = h => {
        t(h)
    }
    ;
    return s.jsx("div", {
        style: {
            cursor: "pointer"
        },
        id: "testimonial",
        children: s.jsx("section", {
            id: "mySlider",
            className: "py-16  xs:px-6 xx:px-2",
            children: s.jsxs("div", {
                className: "relative",
                children: [s.jsx("div", {
                    className: "",
                    children: s.jsx("h2", {
                        className: "text-center text-2xl mb-12 font-bold text-gray-800 dark:text-white md:text-4xl",
                        children: "What My Clients Have To Say"
                    })
                }), s.jsx("div", {
                    id: "slider-container",
                    ref: c,
                    children: f3.map( (h, d) => s.jsxs("div", {
                        className: `slide ${d === e ? "active" : ""} relative bg-primary rounded dark:bg-secondary`,
                        onClick: () => u(d),
                        children: [s.jsxs("div", {
                            className: "flex gap-4",
                            children: [s.jsx("img", {
                                className: "w-12 h-12 rounded-full",
                                src: h.img,
                                alt: "",
                                width: "",
                                height: "",
                                loading: "lazy"
                            }), s.jsxs("div", {
                                className: "mb-2",
                                children: [s.jsx("h6", {
                                    className: "",
                                    children: h.name
                                }), s.jsx("p", {
                                    className: "",
                                    children: h.title
                                })]
                            })]
                        }), s.jsx("p", {
                            className: "",
                            children: h.content
                        })]
                    }, h.id))
                })]
            })
        })
    })
}
  , p3 = () => s.jsx(s.Fragment, {});
class Is {
    constructor(t=0, r="Network Error") {
        this.status = t,
        this.text = r
    }
}
const g3 = () => {
    if (!(typeof localStorage > "u"))
        return {
            get: e => Promise.resolve(localStorage.getItem(e)),
            set: (e, t) => Promise.resolve(localStorage.setItem(e, t)),
            remove: e => Promise.resolve(localStorage.removeItem(e))
        }
}
  , Me = {
    origin: "https://api.emailjs.com",
    blockHeadless: !1,
    storageProvider: g3()
}
  , ih = e => e ? typeof e == "string" ? {
    publicKey: e
} : e.toString() === "[object Object]" ? e : {} : {}
  , x3 = (e, t="https://api.emailjs.com") => {
    if (!e)
        return;
    const r = ih(e);
    Me.publicKey = r.publicKey,
    Me.blockHeadless = r.blockHeadless,
    Me.storageProvider = r.storageProvider,
    Me.blockList = r.blockList,
    Me.limitRate = r.limitRate,
    Me.origin = r.origin || t
}
  , h0 = async (e, t, r={}) => {
    const n = await fetch(Me.origin + e, {
        method: "POST",
        headers: r,
        body: t
    })
      , o = await n.text()
      , a = new Is(n.status,o);
    if (n.ok)
        return a;
    throw a
}
  , f0 = (e, t, r) => {
    if (!e || typeof e != "string")
        throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!t || typeof t != "string")
        throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!r || typeof r != "string")
        throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"
}
  , y3 = e => {
    if (e && e.toString() !== "[object Object]")
        throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"
}
  , m0 = e => e.webdriver || !e.languages || e.languages.length === 0
  , p0 = () => new Is(451,"Unavailable For Headless Browser")
  , v3 = (e, t) => {
    if (!Array.isArray(e))
        throw "The BlockList list has to be an array";
    if (typeof t != "string")
        throw "The BlockList watchVariable has to be a string"
}
  , b3 = e => {
    var t;
    return !((t = e.list) != null && t.length) || !e.watchVariable
}
  , w3 = (e, t) => e instanceof FormData ? e.get(t) : e[t]
  , g0 = (e, t) => {
    if (b3(e))
        return !1;
    v3(e.list, e.watchVariable);
    const r = w3(t, e.watchVariable);
    return typeof r != "string" ? !1 : e.list.includes(r)
}
  , x0 = () => new Is(403,"Forbidden")
  , j3 = (e, t) => {
    if (typeof e != "number" || e < 0)
        throw "The LimitRate throttle has to be a positive number";
    if (t && typeof t != "string")
        throw "The LimitRate ID has to be a string"
}
  , k3 = async (e, t, r) => {
    const n = Number(await r.get(e) || 0);
    return t - Date.now() + n
}
  , y0 = async (e, t, r) => {
    if (!t.throttle || !r)
        return !1;
    j3(t.throttle, t.id);
    const n = t.id || e;
    return await k3(n, t.throttle, r) > 0 ? !0 : (await r.set(n, Date.now().toString()),
    !1)
}
  , v0 = () => new Is(429,"Too Many Requests")
  , N3 = async (e, t, r, n) => {
    const o = ih(n)
      , a = o.publicKey || Me.publicKey
      , i = o.blockHeadless || Me.blockHeadless
      , l = Me.storageProvider || o.storageProvider
      , c = {
        ...Me.blockList,
        ...o.blockList
    }
      , u = {
        ...Me.limitRate,
        ...o.limitRate
    };
    return i && m0(navigator) ? Promise.reject(p0()) : (f0(a, e, t),
    y3(r),
    r && g0(c, r) ? Promise.reject(x0()) : await y0(location.pathname, u, l) ? Promise.reject(v0()) : h0("/api/v1.0/email/send", JSON.stringify({
        lib_version: "4.3.3",
        user_id: a,
        service_id: e,
        template_id: t,
        template_params: r
    }), {
        "Content-type": "application/json"
    }))
}
  , S3 = e => {
    if (!e || e.nodeName !== "FORM")
        throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form"
}
  , C3 = e => typeof e == "string" ? document.querySelector(e) : e
  , O3 = async (e, t, r, n) => {
    const o = ih(n)
      , a = o.publicKey || Me.publicKey
      , i = o.blockHeadless || Me.blockHeadless
      , l = Me.storageProvider || o.storageProvider
      , c = {
        ...Me.blockList,
        ...o.blockList
    }
      , u = {
        ...Me.limitRate,
        ...o.limitRate
    };
    if (i && m0(navigator))
        return Promise.reject(p0());
    const h = C3(r);
    f0(a, e, t),
    S3(h);
    const d = new FormData(h);
    return g0(c, d) ? Promise.reject(x0()) : await y0(location.pathname, u, l) ? Promise.reject(v0()) : (d.append("lib_version", "4.3.3"),
    d.append("service_id", e),
    d.append("template_id", t),
    d.append("user_id", a),
    h0("/api/v1.0/email/send-form", d))
}
  , _3 = {
    init: x3,
    send: N3,
    sendForm: O3,
    EmailJSResponseStatus: Is
}
  , Dr = () => {
    const e = E.useRef()
      , t = r => {
        r.preventDefault(),
        _3.sendForm("service_2ssvj8v", "template_ot9cojd", e.current, {
            publicKey: "DrGxZErRzpGHXckOa"
        }).then( () => {
            console.log("SUCCESS!")
        }
        , n => {
            console.log("FAILED...", n.text)
        }
        )
    }
    ;
    return s.jsx(s.Fragment, {
        children: s.jsx("div", {
            id: "email",
            children: s.jsx("div", {
                className: "bg-accent ss:mx-12 xx:mx-6 my-16 rounded-lg",
                children: s.jsxs("div", {
                    className: "py-8 lg:py-16 px-4 mx-auto ",
                    children: [s.jsx("h2", {
                        className: "mb-12 ss:text-4xl xx:text-2xl tracking-tight font-extrabold text-center text-primary",
                        children: "Ask Your Questions"
                    }), s.jsxs("form", {
                        action: "#",
                        className: "space-y-8",
                        ref: e,
                        onSubmit: t,
                        children: [s.jsxs("div", {
                            children: [s.jsx("label", {
                                htmlFor: "email",
                                className: "block mb-2 text-lg font-semibold text-primary",
                                children: "Your Email"
                            }), s.jsx("input", {
                                type: "email",
                                id: "email",
                                className: "shadow-sm bg-gray-50 border border-gray-300 text-primary text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-secondary dark:border-secondary dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",
                                placeholder: "mail@gmail.com",
                                required: !0,
                                name: "from_email"
                            })]
                        }), s.jsxs("div", {
                            className: "",
                            children: [s.jsx("label", {
                                htmlFor: "name",
                                className: "block mb-2 text-lg font-semibold text-primary",
                                children: "Your Name"
                            }), s.jsx("input", {
                                type: "text",
                                id: "subject",
                                className: "block p-3 w-full text-base text-primary bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary dark:border-secondary dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",
                                placeholder: "Name",
                                required: !0,
                                name: "from_name"
                            })]
                        }), s.jsxs("div", {
                            className: "sm:col-span-2",
                            children: [s.jsx("label", {
                                htmlFor: "message",
                                className: "block mb-2 text-lg font-semibold text-primary dark:text-primary",
                                children: "Your Message"
                            }), s.jsx("textarea", {
                                id: "message",
                                rows: "6",
                                className: "block p-2.5 w-full text-base text-secondary bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary dark:border-secondary dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                                placeholder: "Leave a comment...",
                                name: "message"
                            })]
                        }), s.jsx("button", {
                            type: "submit",
                            className: "bg-primary hover:text-secondary  py-3 px-5 text-base font-medium text-center text-accent rounded-lg  sm:w-fit  focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
                            children: s.jsx("input", {
                                type: "submit",
                                value: "SEND MESSAGE"
                            })
                        })]
                    })]
                })
            })
        })
    })
}
  , P3 = () => s.jsx(s.Fragment, {
    children: s.jsx("div", {
        id: "footer",
        children: s.jsx("footer", {
            className: "w-full bg-extraClr dark:bg-[#111] xx:py-12 py-24 xx:px-0 px-12 ",
            children: s.jsx("div", {
                className: "ss:px-12 xx:px-6 lg:px-28",
                children: s.jsxs("div", {
                    className: " m-auto space-y-6 text-secondary dark:text-primary",
                    children: [s.jsxs("div", {
                        className: "relative z-1 mb-12",
                        children: [s.jsx(z, {
                            to: "/",
                            className: "",
                            "aria-label": "logo",
                            children: s.jsx("h3", {
                                className: "text-accent text-center xx:text-2xl ss:text-4xl ",
                                children: "The Brown Patience Company"
                            })
                        }), s.jsx("p", {
                            className: "text-md xx:text-base xx:text-center ss:text-center ss:w-[75%] mx-auto pt-6 text-secondary dark:text-primary",
                            children: "Get your message to the people in need of it. The Brown Patience Company exists to provide you all the help you need to share the message you need to share."
                        })]
                    }), s.jsxs("ul", {
                        className: "flex flex-col items-center justify-center gap-4 py-6 sm:flex-row sm:gap-8",
                        children: [s.jsx("li", {
                            children: s.jsx(z, {
                                to: "/",
                                className: "hover:text-accent dark:text-primary font-bold font-xl",
                                children: "Home"
                            })
                        }), s.jsx("li", {
                            children: s.jsx(z, {
                                to: "/editing",
                                className: "hover:text-accent dark:text-primary font-bold font-xl",
                                children: "Services"
                            })
                        }), s.jsx("li", {
                            children: s.jsx(z, {
                                to: "/about",
                                className: "hover:text-accent dark:text-primary font-bold font-xl",
                                children: "About me"
                            })
                        }), s.jsx("li", {
                            children: s.jsx(z, {
                                to: "/book",
                                className: "hover:text-accent dark:text-primary font-bold font-xl",
                                children: "Books"
                            })
                        }), s.jsx("li", {
                            children: s.jsx(z, {
                                to: "/subs",
                                className: "hover:text-accent dark:text-primary font-bold font-xl",
                                children: "Subscription"
                            })
                        }), s.jsx("li", {
                            children: s.jsx(z, {
                                to: "/community",
                                className: "hover:text-accent dark:text-primary font-bold font-xl",
                                children: "Community"
                            })
                        })]
                    }), s.jsx("div", {
                        className: "dark:block hidden",
                        children: s.jsxs(Vf, {
                            className: "f-icon  pb-12 m-auto flex w-max items-center justify-between space-x-4",
                            children: [s.jsx(z, {
                                to: "tel:+243996660436",
                                "aria-label": "call",
                                children: s.jsx(Hf, {
                                    sx: {
                                        color: "#fff"
                                    }
                                })
                            }), s.jsx(z, {
                                to: "https://wa.me/message/DOCQNYXAEPVDH1",
                                children: s.jsx(Gf, {
                                    sx: {
                                        color: "#fff"
                                    }
                                })
                            }), s.jsx(z, {
                                to: "https://www.facebook.com/Compelling_Storywriter?mibextid=ZbWKwL",
                                title: "facebook",
                                target: "blank",
                                "aria-label": "facebook",
                                children: s.jsx(Bf, {
                                    sx: {
                                        color: "#fff"
                                    }
                                })
                            }), s.jsx(z, {
                                to: "https://www.linkedin.com/in/patience-brown-3430ba17a",
                                title: "linkedin",
                                "aria-label": "linkedin",
                                children: s.jsx(Ff, {
                                    sx: {
                                        color: "#fff"
                                    }
                                })
                            }), s.jsx(z, {
                                to: "https://instagram.com/contents_by_brownpatience?utm_medium=copy_link",
                                title: "instagram",
                                "aria-label": "instagram",
                                children: s.jsx(Wo, {
                                    sx: {
                                        color: "#fff"
                                    }
                                })
                            }), s.jsx(z, {
                                to: "https://twitter.com/ContentsbyBrown?s=09",
                                title: "X",
                                "aria-label": "X",
                                children: s.jsx(Uf, {
                                    sx: {
                                        color: "#fff"
                                    }
                                })
                            })]
                        })
                    }), s.jsx("div", {
                        className: "dark:hidden block",
                        children: s.jsxs(Vf, {
                            className: "f-icon  pb-12 m-auto flex w-max items-center justify-between space-x-4",
                            children: [s.jsx(z, {
                                to: "tel:+243996660436",
                                "aria-label": "call",
                                children: s.jsx(Hf, {})
                            }), s.jsx(z, {
                                to: "https://wa.me/message/DOCQNYXAEPVDH1",
                                children: s.jsx(Gf, {})
                            }), s.jsx(z, {
                                to: "https://www.facebook.com/Compelling_Storywriter?mibextid=ZbWKwL",
                                title: "facebook",
                                target: "blank",
                                "aria-label": "facebook",
                                children: s.jsx(Bf, {})
                            }), s.jsx(z, {
                                to: "https://www.linkedin.com/in/patience-brown-3430ba17a",
                                title: "linkedin",
                                "aria-label": "linkedin",
                                children: s.jsx(Ff, {})
                            }), s.jsx(z, {
                                to: "https://instagram.com/contents_by_brownpatience?utm_medium=copy_link",
                                title: "instagram",
                                "aria-label": "instagram",
                                children: s.jsx(Wo, {})
                            }), s.jsx(z, {
                                to: "https://twitter.com/ContentsbyBrown?s=09",
                                title: "X",
                                "aria-label": "X",
                                children: s.jsx(Uf, {})
                            })]
                        })
                    }), s.jsx("div", {
                        className: "text-center",
                        children: s.jsxs("span", {
                            className: " text-sm tracking-wide",
                            children: ["Copyright © 2024 ", s.jsx("span", {
                                id: "year"
                            })]
                        })
                    })]
                })
            })
        })
    })
})
  , I3 = () => s.jsx(s.Fragment, {
    children: s.jsx("div", {
        className: " ",
        id: "blog-content",
        children: s.jsx("div", {
            className: "grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-4 text-secondary",
            children: s.jsxs("div", {
                className: "bg-primary rounded-lg overflow-hidden drop-shadow-md ",
                children: [s.jsx("img", {
                    className: "h-56 w-full object-cover",
                    src: "https://i.postimg.cc/ryd3Q9BD/Whats-App-Image-2024-07-12-at-08-26-21-1.jpg",
                    alt: ""
                }), s.jsxs("div", {
                    className: "xs:p-8 xx:p-4",
                    children: [s.jsx("h3", {
                        className: "font-bold text-2xl text-accent my-1",
                        children: "Coaching for Authors"
                    }), s.jsx("h6", {
                        className: "text-xl my-6",
                        children: "Will you write that book this second half? If yes, you should plan how you'll do it from today..."
                    })]
                }), s.jsx(z, {
                    className: "",
                    to: "/blogContentPg",
                    children: s.jsx("button", {
                        className: "relative xs:m-8 xx:m-4 px-6 py-4 text-secondary text-base font-bold nded-full overflow-hidden bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0",
                        children: "View blog"
                    })
                })]
            })
        })
    })
})
  , E3 = () => s.jsx(s.Fragment, {
    children: s.jsxs("div", {
        id: "home",
        children: [s.jsx(iS, {}), s.jsx(cS, {}), s.jsx(lS, {}), s.jsx(fS, {}), s.jsx(hS, {}), s.jsx(ah, {})]
    })
})
  , T3 = () => s.jsx(s.Fragment, {
    children: s.jsxs("div", {
        id: "about",
        className: "",
        children: [s.jsxs("section", {
            className: "grid py-24 text-center img ss:px-12 xx:px-6 ",
            children: [s.jsx("h1", {
                className: "sm:text-6xl xx:text-4xl font-extrabold text-white  py-6",
                children: "About Me"
            }), s.jsx("p", {
                className: "text-2xl md:w-[50%] ss:w-[75%] xx:w-full mx-auto text-white  py-6 ",
                children: "“I'll run the course you lay out for me if you'll just show me how. God, teach me lessons for living so I can stay the course. Give me insight so I can do what you tell me—my whole life one long, obedient response.” ( Psalms 119:32-34, MSG )."
            })]
        }), s.jsxs("section", {
            className: " dark:bg-secondary py-16 xx:px-6 ss:px-12",
            children: [s.jsxs("div", {
                className: "bg-primary dark:bg-secondary gap-8 items-center ss:py-24 xx:py-12 mx-auto max-w-screen-xl xl:gap-16 grid md:grid-cols-2 sm:py-16 lg:px-6",
                children: [s.jsxs("div", {
                    className: "mt-4 md:mt-0 text-left",
                    children: [s.jsx("h4", {
                        className: "lg:mb-6 font-light text-secondary dark:text-accent",
                        children: "Where It Began For"
                    }), s.jsx("h2", {
                        className: "mb-12 text-4xl tracking-tight font-extrabold text-accent dark:text-white",
                        children: "Brown Patience"
                    }), s.jsxs("p", {
                        className: "mb-6 font-light text-secondary md:text-lg dark:text-primary",
                        children: [`I remember having this 40 or 60-leaves book back in secondary school. That was 2014. I was in SS2 "if you're unfamiliar with Nigeria's education system, SS2 is one class away from highschool graduation". I wrote stories in that notebook. A few friends read them and I was so proud of those stories. Then the book got missing. It was painful. So painful that I haven't forgotten the feeling. Still in that 2014, I won a national essay writing competition. The way the newspapers put it, they were shocked a public school pupil had come out tops. I still giggle when I read that headline.`, s.jsx("p", {
                            className: "mt-4",
                            children: "As a teen, I wrote for fun. I wrote to relieve boredom. I could be sitting in a place and mentally remove myself from there by scribbling a letter to an imaginary cousin in Vienna. Nevermind that I had no idea if Vienna was actually a place. Writing was how I went to places I wished I could be. As soon as the English Language teacher said, “Write a letter to your uncle in London,” it was my lucky day! All these should have told me writing was the path for me, but I couldn't have known. I said I'd be a banker when I grew up; I set my mind on pursuing accounting in college. And that's precisely what I did. Yet purpose can and will find you."
                        })]
                    })]
                }), s.jsx("div", {
                    className: "grid",
                    children: s.jsx("img", {
                        className: "justify-self-end mb-auto lg:mr-12 md:mr-0 md:w-[32rem] md:h-[40rem] w-0",
                        src: "https://i.postimg.cc/6qKm3ZP8/untitled-1027-01-jpeg.webp",
                        alt: "brown patience",
                        style: {
                            borderRadius: "10px",
                            boxShadow: " -8px 7px 31px 8px rgba(0,0,0,0.51)"
                        }
                    })
                })]
            }), s.jsxs("div", {
                className: "",
                children: [s.jsx("h4", {
                    className: "my-6  text-secondary dark:text-primary",
                    children: "The Epiphany"
                }), s.jsx("p", {
                    className: "mb-6 text-secondary dark:text-primary",
                    children: "I wasn't bad at accounting as an undergrad. In fact, I gained a reputation in my set as one of the people with the most explanatory course notes. You want a person that can write down everything the lecturer dictated or explained? Brown Patience is one of them! Still, it didn't click. Writing didn't take preeminence in my pursuits. Not yet. I was in my finals at the University of Lagos when the pandemic sent us home for 9 months. 2020, yeah. In those 9 months, I had nothing to do but read. And write. And pray. I worried too. Worried about what I was supposed to do to make ends meet. When we resumed, accounting was no longer looking like the road for me. During those 9 months when I did a lot of reading and writing, worrying and praying, I got an answer."
                }), s.jsx("p", {
                    className: "mb-6 text-secondary dark:text-primary",
                    children: "I like to tell my friends that the pandemic slowed us down long enough to find ourselves. We slowed down long enough to hear our own thoughts, to find what we'd rather pursue. It had always been there — on the inside of us — but we had always been busy with the tasks at hand, excelling at whatever we found to do, almost never giving passion a thought. I have friends who returned from the pandemic and made U-turns. I was one of those who slowed down long enough to realize I wanted to write. God finally got through to me. I began giving writing a good look. It came when I asked, “God, what should I be doing?”"
                }), s.jsx("p", {
                    className: "mb-6 text-secondary dark:text-primary",
                    children: "So if you ask me what my motivation is, what my reason is, I'll say “God.” A thousand times over. Outside God, without God's leading, there's nothing to Brown Patience. Had God not led me here, I wouldn't be here. In the last quarter of 2021, the Lord had simply said to me, “I want you to teach story writing.” Look where we are now. I'm a Christian! You may have figured that out by now. I follow Jesus. I want to keep following Jesus. One of my favourite parts of Scripture reads: “I'll run the course you lay out for me if you'll just show me how. God, teach me lessons for living so I can stay the course. Give me insight so I can do what you tell me — my whole life one long, obedient response” (Psalm 119:32-35, MSG). I have no other plan for my life but to follow God's plan."
                }), s.jsxs("p", {
                    className: "my-4  text-secondary dark:text-primary",
                    children: ["It seems like it started in Apapa, Lagos. In a public primary school where I discovered I really liked comprehension passages, where I represented my school in Spelling Bee competitions. And then a public secondary school where my English Language teacher encouraged me to write, where I found out that words were easy to piece together, that my imagination could run with dizzying speed, that I could forge stories only from wanting to. But even before those, it started with God's", s.jsx("b", {
                        className: "font-bold  text-secondary dark:text-primary",
                        children: "gift"
                    }), ". He gave me this talent; He's been leading me on how to put it to fruit-bearing use. Over my life, He'll reap much harvest. And I'll be able to say, like Jesus, “I have brought you glory on earth by finishing the work you gave me to do” (John 17:4, NIV)."]
                })]
            }), s.jsxs("section", {
                className: "bg-white dark:bg-secondary gap-8 items-center ss:py-24 xx:py-12 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6",
                children: [s.jsx("div", {
                    className: "m-auto grid place-content-start",
                    children: s.jsx("img", {
                        className: "justify-self-start mb-6 lg:mr-12 md:mr-0  ",
                        src: "https://i.postimg.cc/ncz1xMZ4/untitled-1082-01-jpeg.jpg",
                        alt: "brown patience",
                        style: {
                            borderRadius: "10px",
                            boxShadow: " -8px 7px 31px 8px rgba(0,0,0,0.51)"
                        }
                    })
                }), s.jsxs("div", {
                    className: "mt-4 md:mt-0 text-left",
                    children: [s.jsx("h4", {
                        className: "lg:mb-6 font-light dark:text-accent text-secondary",
                        children: "The Story Of"
                    }), s.jsx("h2", {
                        className: "mb-12 text-4xl tracking-tight font-extrabold text-accent dark:text-white",
                        children: "Brown Patience"
                    }), s.jsx("p", {
                        className: "mb-6 font-light text-secondary md:text-lg dark:text-primary",
                        children: "I consider writing a change-provoking art. Books have molded my life and the lives of many before now. Every person who has ever had anything to say has encouraged us to glean the wisdom in books. So I encourage others to write. I help them write. I poke them unrelentingly, supporting them to go ahead and share their message. My writing students, my book writing or editing clients, the clients that run blogs and newsletters, I'm their chief cheerleader! “You've got a message to share? please go ahead and share it.” It's my anthem! Writing is a change-provoking art. It's why we read. It's why we write. It's why The Brown Patience Company exists. To ensure you have all the help you need to share the message you need to share — clearly, compellingly. And then the harvest! We wait for the harvest in the lives of people. For surely, the harvest comes."
                    }), s.jsxs("div", {
                        style: {
                            display: "inline-block"
                        },
                        className: "py-6  mt-12 border-solid border-t-2 border-t-accent border-b-accent  dark:border-t-primary border-b-2 dark:border-b-primary ",
                        children: [s.jsxs("div", {
                            className: " inline-block border-solid border-r-2 border-r-accent dark:border-r-2 dark:border-r-primary ",
                            children: [s.jsx("h2", {
                                className: "inline-block ss:text-7xl xx:text-5xl text-accent  ",
                                children: "06"
                            }), s.jsxs("p", {
                                className: "inline-block pl-6 xs:pr-12 xx:pr-6 xs:text-base xx:text-xs dark:text-primary ",
                                children: ["Books ", s.jsx("br", {}), "Published"]
                            })]
                        }), s.jsxs("div", {
                            className: "inline-block  ",
                            children: [s.jsx("h2", {
                                className: "inline-block xs:pl-12 xx:pl-6 pr-6 ss:text-7xl xx:text-5xl text-accent ",
                                children: "06"
                            }), s.jsxs("p", {
                                className: "inline-block xs:text-base xx:text-xs dark:text-primary  ",
                                children: ["Best ", s.jsx("br", {}), "Selling"]
                            })]
                        })]
                    })]
                })]
            })]
        }), s.jsx("div", {
            className: "",
            children: s.jsx(Dr, {})
        })]
    })
})
  , A3 = () => s.jsx(s.Fragment, {
    children: s.jsx("div", {
        id: "blog",
        children: s.jsx("div", {
            className: "w-full bg-extraClr dark:bg-secondary py-24",
            children: s.jsx("div", {
                className: "max-w-[1240px] mx-auto",
                children: s.jsx(I3, {})
            })
        })
    })
})
  , R3 = () => s.jsx(s.Fragment, {
    children: s.jsxs("div", {
        id: "book",
        children: [s.jsx("section", {
            className: "hero",
            children: s.jsxs("div", {
                className: "grid ss:py-40 xx:py-32 text-center img ss:px-12 xx:px-6 ",
                children: [s.jsx("h1", {
                    className: "sm:text-6xl xx:text-3xl sm:font-extrabold xx:font-bold text-white xx:py-3  ss:py-6",
                    children: "My BOOKS"
                }), s.jsx("p", {
                    className: "sm:text-2xl xx:text-xl xx:w-full ss:w-[75%] mx-auto  text-white xx:py-3  ss:py-6 ",
                    children: "Some of these books have been described as brutally honest—with regard to the I'll-tell-it-as-it-is description of addiction. Reviews have been utterly intimate, held safe in my heart."
                }), s.jsx(z, {
                    to: "https://wa.me/message/DOCQNYXAEPVDH1",
                    children: s.jsx("button", {
                        className: "w-[11rem] py-5 px-7 mx-auto  bg-white h-[4rem] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:text-white before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-lightAccent before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#343434]",
                        children: "CONTACT ME"
                    })
                })]
            })
        }), s.jsxs("section", {
            id: "book-body",
            className: "",
            children: [s.jsxs("div", {
                id: "fantasy",
                className: " lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-extraClr dark:bg-[#111] ",
                children: [s.jsx("div", {
                    className: "   md:px-0  grid  place-self-center",
                    children: s.jsxs("div", {
                        className: "mb-0 lg:pr-8 xl:pr-6 lg:text-left p-6",
                        children: [s.jsx("h2", {
                            className: "mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center",
                            children: s.jsx("strong", {
                                children: "Fantasy"
                            })
                        }), s.jsx("div", {
                            className: "bg xx:grid place-content-center sm:hidden",
                            children: s.jsx("div", {
                                style: {
                                    boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)"
                                },
                                className: "img1  ss:w-[32rem] ss:h-[40rem] xs:w-[24rem] xs:h-[32rem] xx:w-[20rem] xx:h-[28rem] my-8  sm:w-0 rounded-lg"
                            })
                        }), s.jsxs("div", {
                            className: "",
                            children: [s.jsx("p", {
                                className: "mb-6 font-medium xx:text-base  lg:text-lg text-secondary  dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: "Fantasy is about the sexual mental struggles we face. Those steamy thoughts that feel like you're engaging in a porn video production. Fantasy is for the young woman who'd like her thoughts to honor God, who'd like to bring her thoughts under the Holy Spirit's control."
                            }), s.jsx("p", {
                                className: "mb-12 xx:text-base font-medium lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: "It won't just be that you're not having premarital sex, but were we to play the content of your mind on a screen, you'd have no cause to be ashamed. That is the “why” of this book. Written by a girl to another girl."
                            })]
                        }), s.jsx("div", {
                            className: "mb-10 grid place-content-start  md:mb-16 lg:mb-12",
                            children: s.jsx(z, {
                                to: "https://selar.co/FANTASY",
                                children: s.jsx("div", {
                                    className: "btn-two-container ",
                                    children: s.jsx("button", {
                                        className: "text-xl font-extrabold btn-two mt-3 w-[11rem] h-[4rem]",
                                        children: "GET YOUR COPY"
                                    })
                                })
                            })
                        })]
                    })
                }), s.jsx("div", {
                    className: "bg sm:grid place-content-end xx:hidden",
                    children: s.jsx("div", {
                        style: {
                            boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)"
                        },
                        className: "img1  sm:w-[24rem] sm:h-[32rem]  lg:w-[32rem] lg:h-[40rem] rounded-lg"
                    })
                })]
            }), s.jsxs("div", {
                id: "chimamanda",
                className: " lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-12 sm:px-12 bg-white dark:bg-secondary ",
                children: [s.jsx("div", {
                    className: "bg sm:grid xx:hidden place-content-start",
                    children: s.jsx("div", {
                        style: {
                            boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)"
                        },
                        className: "img2  sm:w-[24rem] sm:h-[32rem]   lg:w-[32rem] lg:h-[40rem] rounded-lg"
                    })
                }), s.jsx("div", {
                    className: "   md:px-0  grid   place-self-center",
                    children: s.jsxs("div", {
                        className: "mb-0 lg:pr-8 p-6 xl:pr-6 lg:text-left ",
                        children: [s.jsx("h2", {
                            className: "mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center",
                            children: s.jsx("strong", {
                                children: "Chimamanda"
                            })
                        }), s.jsx("div", {
                            className: "bg sm:hidden xx:grid place-content-center",
                            children: s.jsx("div", {
                                style: {
                                    boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)"
                                },
                                className: "img2 ss:w-[32rem] ss:h-[40rem] xs:w-[24rem] xs:h-[32rem] xx:w-[20rem] xx:h-[28rem] my-8  sm:w-0  rounded-lg"
                            })
                        }), s.jsxs("div", {
                            className: "",
                            children: [s.jsx("p", {
                                className: "mb-6 font-medium  lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: "Born to a man without warmth, Chimamanda is married off early to a man she dreads just as much as her father. But her walls are in place; she is safe — as long as she stays strong."
                            }), s.jsx("p", {
                                className: "mb-12 font-medium lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: "She would have been content living as she had always lived. But God has His way of squeezing out what life you thought you had so He can give you true life. So He can heal and make you free."
                            })]
                        }), s.jsx("div", {
                            className: "mb-10 grid place-content-start  md:mb-16 lg:mb-12",
                            children: s.jsx(z, {
                                to: "https://selar.co/chimamanda_BPM",
                                children: s.jsx("div", {
                                    className: "btn-two-container ",
                                    children: s.jsx("button", {
                                        className: "text-xl font-extrabold btn-two mt-3 w-[11rem] h-[4rem]",
                                        children: "GET YOUR COPY"
                                    })
                                })
                            })
                        })]
                    })
                })]
            }), s.jsxs("div", {
                id: "choose-your-thoughts",
                className: " lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-extraClr  dark:bg-[#111]  ",
                children: [s.jsx("div", {
                    className: "   md:px-0  grid  place-self-center",
                    children: s.jsxs("div", {
                        className: "mb-0 lg:pr-8 xl:pr-6 p-6 lg:text-left ",
                        children: [s.jsx("h2", {
                            className: "mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center",
                            children: s.jsx("strong", {
                                children: "Choose your Thoughts"
                            })
                        }), s.jsx("div", {
                            className: "bg sm:hidden xx:grid place-content-center",
                            children: s.jsx("div", {
                                style: {
                                    boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)"
                                },
                                className: "img3   ss:w-[32rem] ss:h-[40rem] xs:w-[24rem] xs:h-[32rem] xx:w-[20rem] xx:h-[28rem] my-8  sm:w-0 rounded-lg"
                            })
                        }), s.jsxs("div", {
                            className: "",
                            children: [s.jsx("p", {
                                className: "mb-6 font-medium  lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: "What you do with your mind will turn and do you. I should know. If you brood and ruminate on depressing thoughts, you'll be depressed. I should know. Because on Tuesday, April 5, 2023, I was contemplating suicide. Thoughts, thoughts led me there."
                            }), s.jsx("p", {
                                className: "mb-12 font-medium lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: "I do an awful lot of cooking—mental cooking. You do too. Now, here's a chance to be sure you're cooking the right things. If you change your mind, it will change your life. As literally as you'll see in this book."
                            })]
                        }), s.jsx("div", {
                            className: "mb-10 grid place-content-start  md:mb-16 lg:mb-12",
                            children: s.jsx(z, {
                                to: "https://selar.co/ChooseYourThoughts",
                                children: s.jsx("div", {
                                    className: "btn-two-container ",
                                    children: s.jsx("button", {
                                        className: "text-xl font-extrabold btn-two mt-3 w-[11rem] h-[4rem]",
                                        children: "GET YOUR COPY"
                                    })
                                })
                            })
                        })]
                    })
                }), s.jsx("div", {
                    className: "bg xx:hidden sm:grid place-content-end",
                    children: s.jsx("div", {
                        style: {
                            boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)"
                        },
                        className: "img3  sm:w-[24rem] sm:h-[32rem]  lg:w-[32rem] lg:h-[40rem] rounded-lg"
                    })
                })]
            }), s.jsxs("div", {
                id: "so-he-taught-me-no",
                className: " lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-12 sm:px-12 bg-white dark:bg-secondary ",
                children: [s.jsx("div", {
                    className: "bg sm:grid xx:hidden place-content-start",
                    children: s.jsx("div", {
                        style: {
                            boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)"
                        },
                        className: "img4  sm:w-[24rem] sm:h-[32rem]  lg:w-[32rem] lg:h-[40rem] rounded-lg"
                    })
                }), s.jsx("div", {
                    className: "   md:px-0  grid  place-self-center",
                    children: s.jsxs("div", {
                        className: "mb-0 lg:pr-8 p-6 xl:pr-6 lg:text-left ",
                        children: [s.jsx("h2", {
                            className: "mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center",
                            children: s.jsx("strong", {
                                children: "So He Taught Me 'No' "
                            })
                        }), s.jsx("div", {
                            className: "bg sm:hidden xx:grid place-content-center",
                            children: s.jsx("div", {
                                style: {
                                    boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)"
                                },
                                className: "img4   ss:w-[32rem] ss:h-[40rem] xs:w-[24rem] xs:h-[32rem] xx:w-[20rem] xx:h-[28rem] my-8  sm:w-0 rounded-lg"
                            })
                        }), s.jsxs("div", {
                            className: "",
                            children: [s.jsx("p", {
                                className: "mb-6 font-medium  lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: "This is a book about porn addiction. About the darkness that persists even after you've stopped viewing it. All based on true experience. It's a book about mind renewal. A book about how the Holy Spirit teaches you to say “No” to ungodliness — no matter how strong the mental stronghold."
                            }), s.jsx("p", {
                                className: "mb-12 font-medium lg:text-lg text-secondary lg:text-left md:text-lg md:text-center",
                                children: "It shows you that addictions are not stronger than the God who sets free."
                            })]
                        }), s.jsx("div", {
                            className: "mb-10 grid place-content-start  md:mb-16 lg:mb-12",
                            children: s.jsx(z, {
                                to: "https://selar.co/SHTM-NO",
                                children: s.jsx("div", {
                                    className: "btn-two-container ",
                                    children: s.jsx("button", {
                                        className: "text-xl font-extrabold btn-two mt-3 w-[11rem] h-[4rem]",
                                        children: "GET YOUR COPY"
                                    })
                                })
                            })
                        })]
                    })
                })]
            }), s.jsxs("div", {
                id: "priye",
                className: " lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-extraClr dark:bg-[#111] ",
                children: [s.jsx("div", {
                    className: "   md:px-0  grid  place-self-center",
                    children: s.jsxs("div", {
                        className: "mb-0 lg:pr-8 p-6 xl:pr-6 lg:text-left ",
                        children: [s.jsx("h2", {
                            className: "mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center",
                            children: s.jsx("strong", {
                                children: "Priye"
                            })
                        }), s.jsx("div", {
                            className: "bg sm:hidden xx:grid place-content-center",
                            children: s.jsx("div", {
                                style: {
                                    boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)"
                                },
                                className: "img5    ss:w-[32rem] ss:h-[40rem] xs:w-[24rem] xs:h-[32rem] xx:w-[20rem] xx:h-[28rem] my-8  sm:w-0 rounded-lg"
                            })
                        }), s.jsxs("div", {
                            className: "",
                            children: [s.jsx("p", {
                                className: "mb-6 font-medium  lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: "Priye is another bright high school student. Never had it been heard that students so young and privileged could be involved in such vices. But they weren't just involved, they were drowning."
                            }), s.jsx("p", {
                                className: "mb-12 font-medium lg:text-lg text-secondary dark:text-primary  lg:text-left md:text-lg md:text-center",
                                children: "This is a tale of the burdens words cannot describe, the one that feels like it's crushing your chest. It's a tale about the rest that is found in surrender. The rest Jesus gives."
                            })]
                        }), s.jsx("div", {
                            className: "mb-10 grid place-content-start  md:mb-16 lg:mb-12",
                            children: s.jsx(z, {
                                to: "https://selar.co/Priye",
                                children: s.jsx("div", {
                                    className: "btn-two-container ",
                                    children: s.jsx("button", {
                                        className: "text-xl font-extrabold btn-two mt-3 w-[11rem] h-[4rem]",
                                        children: "GET YOUR COPY"
                                    })
                                })
                            })
                        })]
                    })
                }), s.jsx("div", {
                    className: "bg sm:grid xx:hidden place-content-end",
                    children: s.jsx("div", {
                        style: {
                            boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)"
                        },
                        className: "img5  sm:w-[24rem] sm:h-[32rem]  lg:w-[32rem] lg:h-[40rem] rounded-lg"
                    })
                })]
            }), s.jsxs("div", {
                id: "so-he-taught-me-no",
                className: " lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-12 sm:px-12 bg-white dark:bg-secondary ",
                children: [s.jsx("div", {
                    className: "bg sm:grid xx:hidden place-content-start",
                    children: s.jsx("div", {
                        style: {
                            boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                            background: 'url("https://i.postimg.cc/5NdjwyCH/IMG-20240630-WA0018.jpg") no-repeat center center/cover'
                        },
                        className: "sm:w-[24rem] sm:h-[32rem]  lg:w-[32rem] lg:h-[40rem] rounded-lg"
                    })
                }), s.jsx("div", {
                    className: "   md:px-0  grid  place-self-center",
                    children: s.jsxs("div", {
                        className: "mb-0 lg:pr-8 p-6 xl:pr-6 lg:text-left ",
                        children: [s.jsx("h2", {
                            className: "mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center",
                            children: s.jsx("strong", {
                                children: "Adeni - A StrongHold Broken "
                            })
                        }), s.jsx("div", {
                            className: "bg sm:hidden xx:grid place-content-center",
                            children: s.jsx("div", {
                                style: {
                                    boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)"
                                },
                                className: "img4   ss:w-[32rem] ss:h-[40rem] xs:w-[24rem] xs:h-[32rem] xx:w-[20rem] xx:h-[28rem] my-8  sm:w-0 rounded-lg"
                            })
                        }), s.jsxs("div", {
                            className: "",
                            children: [s.jsx("p", {
                                className: "mb-6 font-medium  lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: "Raised in a markedly dysfunctional background, Adeni learned to cope, to survive, to be strong for the ones who needed her. And like a fortified city, she built a wall around herself. It kept the pain away."
                            }), s.jsx("p", {
                                className: "mb-12 font-medium lg:text-lg text-secondary lg:text-left md:text-lg md:text-center",
                                children: "Yet little by little, a seemingly losing battle, light is seeping into this walled city. Despite the resistance of unbelief, beyond the panic of change, freedom dawns."
                            })]
                        }), s.jsx("div", {
                            className: "mb-10 grid place-content-start  md:mb-16 lg:mb-12",
                            children: s.jsx(z, {
                                to: "https://selar.co/SHTM-NO",
                                children: s.jsx("div", {
                                    className: "btn-two-container ",
                                    children: s.jsx("button", {
                                        className: "text-xl font-extrabold btn-two mt-3 w-[11rem] h-[4rem]",
                                        children: "GET YOUR COPY"
                                    })
                                })
                            })
                        })]
                    })
                })]
            })]
        }), s.jsx("div", {
            className: "",
            children: s.jsx(Dr, {})
        })]
    })
})
  , L3 = () => s.jsx(s.Fragment, {
    children: s.jsxs("div", {
        id: " subs",
        children: [s.jsxs("div", {
            className: "relative grid gap-8 lg:py-24 xx:py-12 lg:px-12 xx:p-6 lg:pt-0 ss:grid-cols-2 lg:pb-0",
            children: [s.jsx("div", {
                className: "flex flex-col items-start w-full ss:px-0 sm:px-4 mx-auto lg:px-8 lg:max-w-screen-xl",
                children: s.jsx("div", {
                    className: "mb-16 lg:my-40 xx:my-auto lg:max-w-lg lg:pr-5",
                    children: s.jsxs("div", {
                        className: "lg:max-w-xl  lg:mb-6 xx:my-auto",
                        children: [s.jsx("h2", {
                            className: "max-w-xl mb-6 font-sans lg:text-5xl font-bold tracking-tight text-accent ss:text-left xx:text-center ss:text-3xl sm:text-4xl sm:leading-none",
                            children: "Guidance for Writing Solopreneurs"
                        }), s.jsxs("h5", {
                            className: "sm:text-base ss:text-sm mt-8 text-secondary dark:text-primary md:text-lg  ss:text-left xx:text-center",
                            children: [s.jsx("h5", {
                                className: "mb-4",
                                children: "Christian content writer?"
                            }), " Now you can have an editor to help you ensure your content is well written, piercing, and life-giving."]
                        }), s.jsx("div", {
                            className: " grid ss:place-content-start xx:place-content-center",
                            children: s.jsx(z, {
                                to: "https://wa.me/message/DOCQNYXAEPVDH1",
                                children: s.jsx("button", {
                                    className: "w-[11rem] py-5 px-7   ss:mt-6 xx:mt-8 bg-white h-[4rem] my-3 rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:text-white before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-lightAccent before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#343434]",
                                    children: "CONTACT ME"
                                })
                            })
                        })]
                    })
                })
            }), s.jsx("div", {
                className: "w-full max-w-xl  ss:px-0 sm:px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:max-w-full xl:px-0",
                children: s.jsx("img", {
                    className: "object-cover w-[32rem]  rounded  lg:rounded-none lg:shadow-none sm:h-[24rem] lg:h-full",
                    src: "https://i.postimg.cc/FHzfL9r3/Blog-post-bro.png",
                    alt: ""
                })
            })]
        }), s.jsxs("section", {
            className: "solopreneur",
            children: [s.jsxs("div", {
                className: " lg:py-24 xx:py-12 grid lg:grid-cols-2 gap-4 ss:px-12 xx:px-6 lg:px-24 bg-extraClr ",
                children: [s.jsx("div", {
                    className: "   grid  place-self-center",
                    children: s.jsxs("div", {
                        className: "mb-0 lg:pr-8 xl:pr-6 lg:text-left ",
                        children: [s.jsx("div", {
                            className: " grid place-content-center mx-auto",
                            children: s.jsx(z, {
                                to: "",
                                children: s.jsx("button", {
                                    style: {
                                        boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.35)"
                                    },
                                    className: "relative tracking-wide mb-12 ss:ml-6 xx:px-6 ss:px-12 py-4 text-secondary text-xl font-bold  overflow-hidden bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0",
                                    children: "Guidance for Writing Solopreneurs"
                                })
                            })
                        }), s.jsxs("div", {
                            className: "",
                            children: [s.jsx("p", {
                                className: "mb-6 font-medium  ss:text-lg text-secondary text-left xx:text-base ",
                                children: "Are you a follower of Jesus with something to say? Has the Holy Spirit been prompting you? Are you holding back due to uncertainty in your writing skills? Do you need an editor, coach, or encourager? Brown Patience offers help from writing to publishing with the Guidance for Writing Solopreneurs package."
                            }), s.jsx("h4", {
                                className: "ss:text-2xl xx:text-xl",
                                children: "Who is a Writing Solopreneur?"
                            }), s.jsx("p", {
                                className: "my-6 font-medium  ss:text-lg text-secondary text-left xx:text-base ",
                                children: "Writing solopreneurs wield influence with their pens, impacting culture through faith-based writing, including blogs, newsletters, articles, social media, and stories. They have a burning message for the world and know how to scatter their seeds to attract those in need."
                            }), s.jsx("h4", {
                                className: "ss:text-2xl xx:text-xl",
                                children: "Who is this Guidance for?"
                            }), s.jsx("p", {
                                className: "my-6 font-medium  ss:text-lg text-secondary text-left xx:text-base ",
                                children: "Guidance for Writing Solopreneurs is for budding and experienced writers needing expert help to refine their work. It offers someone who understands compelling writing to provide opinions, editing, and fine-tuning, ensuring your story is clear, correct, and polished enough to be told."
                            })]
                        }), s.jsx("div", {
                            className: "  grid place-content-start  mt-12",
                            children: s.jsx(z, {
                                to: "https://wa.me/message/DOCQNYXAEPVDH1",
                                children: s.jsx("div", {
                                    className: "btn-two-container ",
                                    children: s.jsx("button", {
                                        className: "text-xl font-extrabold btn-two mt-3 w-[10rem] h-[3.5rem]",
                                        children: "SUBSCRIBE"
                                    })
                                })
                            })
                        })]
                    })
                }), s.jsx("div", {
                    className: "bg grid lg:place-content-top xx:place-content-center",
                    children: s.jsx("div", {
                        style: {
                            boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                            background: 'url("https://i.postimg.cc/5ym0JHbQ/BROWN_PATIENCE2-1_1.jpg") no-repeat center center/cover'
                        },
                        className: "img lg:ml-auto lg:w-[32rem] lg:h-[40rem] lg:my-0 xx:my-6 md:w-[40rem] md:h-[48rem] ss:w-[32rem] ss:h-[40rem] xs:w-[24rem] xs:h-[32rem] xx:w-[20rem] xx:h-[28rem] rounded-lg"
                    })
                })]
            }), s.jsxs("div", {
                className: " py-12 mx-auto md:max-w-full lg:max-w-screen-xl md:px-24 xx:px-6 ss:px-12 lg:py-20",
                children: [s.jsxs("div", {
                    className: "grid gap-8 row-gap-5 sm:grid-cols-2",
                    children: [s.jsxs("div", {
                        className: "relative  bg-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl",
                        children: [s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsx("div", {
                            className: "absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsxs("div", {
                            className: "relative p-5 rounded-sm",
                            children: [s.jsx("div", {
                                className: "flex flex-col mb-2 lg:items-center lg:flex-row",
                                children: s.jsx("h6", {
                                    className: "font-semibold mb-6 leading-5",
                                    children: "What does this Guidance entail?"
                                })
                            }), s.jsx("p", {
                                className: "mb-2 text-sm text-secondary",
                                children: s.jsxs("ul", {
                                    className: "ml-4 list-disc",
                                    children: [s.jsxs("li", {
                                        className: " mb-4 text-base",
                                        children: [s.jsx("b", {
                                            children: " Editing:"
                                        }), " Making it relatable and practical to your readers."]
                                    }), s.jsxs("li", {
                                        className: " mb-4 text-base",
                                        children: [s.jsx("b", {
                                            children: "Posting Guidance: "
                                        }), " How do you package it? Social media? A blog? Newsletters? Where's your audience? Do they prefer long or short-form content?"]
                                    }), s.jsxs("li", {
                                        className: " mb-4 text-base",
                                        children: [s.jsx("b", {
                                            children: "Critical Feeback On Your Writing "
                                        }), " So you'll know what to do better and where you're already doing great."]
                                    })]
                                })
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "relative bg-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl",
                        children: [s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsx("div", {
                            className: "absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsxs("div", {
                            className: "relative p-5 rounded-sm",
                            children: [s.jsx("div", {
                                className: "flex flex-col mb-2 lg:items-center lg:flex-row",
                                children: s.jsx("h6", {
                                    className: "font-semibold leading-5 mb-6",
                                    children: "What categories of content does the Guidance cover?"
                                })
                            }), s.jsx("p", {
                                className: "mb-2 text-base text-secondary",
                                children: "With this subscription, you get proofreading, editing, and necessary revisions to:"
                            }), s.jsx("p", {
                                className: "mb-2  text-secondary",
                                children: s.jsxs("ul", {
                                    className: "ml-4 list-disc",
                                    children: [s.jsx("li", {
                                        className: " mb-4 text-base",
                                        children: "Your blog posts"
                                    }), s.jsx("li", {
                                        className: " mb-4 text-base",
                                        children: "Your articles"
                                    }), s.jsx("li", {
                                        className: " mb-4 text-base",
                                        children: "Your newsletters"
                                    }), s.jsx("li", {
                                        className: " mb-4 text-base",
                                        children: "Your social media content"
                                    }), s.jsx("li", {
                                        className: " mb-4 text-base",
                                        children: "Your fictional/non-fictional stories."
                                    })]
                                })
                            })]
                        })]
                    })]
                }), s.jsxs("div", {
                    className: "grid gap-8 my-12 row-gap-5 ss:grid-cols-2 lg:grid-cols-4",
                    children: [s.jsxs("div", {
                        className: "relative  bg-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl",
                        children: [s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsx("div", {
                            className: "absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsxs("div", {
                            className: "relative p-5 rounded-sm",
                            children: [s.jsx("div", {
                                className: "flex flex-col mb-2 lg:items-center lg:flex-row",
                                children: s.jsx("h6", {
                                    className: "font-semibold mb-6 leading-5",
                                    children: "Am I still in control?"
                                })
                            }), s.jsx("p", {
                                className: "mb-2 text-sm text-secondary",
                                children: s.jsx("ul", {
                                    className: "ml-4 list-disc",
                                    children: s.jsx("li", {
                                        className: " mb-4 text-base",
                                        children: "Yes. How much revision your write-up undergoes is up to you. I make the suggestions; you reserve the right to approve or reject them."
                                    })
                                })
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "relative bg-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl",
                        children: [s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsx("div", {
                            className: "absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsxs("div", {
                            className: "relative p-5 rounded-sm",
                            children: [s.jsx("div", {
                                className: "flex flex-col mb-2 lg:items-center lg:flex-row",
                                children: s.jsx("h6", {
                                    className: "font-semibold leading-5 mb-6",
                                    children: "How do we communicate?"
                                })
                            }), s.jsx("p", {
                                className: "mb-2  text-secondary",
                                children: s.jsx("ul", {
                                    className: "ml-4 list-disc",
                                    children: s.jsx("li", {
                                        className: " mb-4 text-base",
                                        children: "We communicate using collaborative technologies such as Google docs and Dropbox. And if WhatsApp will be easier for you, it works perfectly for me. Through these technologies, you can track my suggestions and changes and get to approve them."
                                    })
                                })
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "relative bg-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl",
                        children: [s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsx("div", {
                            className: "absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsxs("div", {
                            className: "relative p-5 rounded-sm",
                            children: [s.jsx("div", {
                                className: "flex flex-col mb-2 lg:items-center lg:flex-row",
                                children: s.jsx("h6", {
                                    className: "font-semibold leading-5 mb-6",
                                    children: "How much is the subscription?"
                                })
                            }), s.jsx("p", {
                                className: "mb-2  text-secondary",
                                children: s.jsxs("ul", {
                                    className: "ml-4 list-disc",
                                    children: [s.jsx("li", {
                                        className: " mb-4 text-base",
                                        children: "15,000 naira per month."
                                    }), s.jsx("li", {
                                        className: " mb-4 text-base",
                                        children: "12,000 naira per month when you pay a full year's subscription at once."
                                    })]
                                })
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "relative bg-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl",
                        children: [s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsx("div", {
                            className: "absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsxs("div", {
                            className: "relative p-5 rounded-sm",
                            children: [s.jsx("div", {
                                className: "flex flex-col mb-2 lg:items-center lg:flex-row",
                                children: s.jsx("h6", {
                                    className: "font-semibold leading-5 mb-6",
                                    children: "How do we communicate?"
                                })
                            }), s.jsx("p", {
                                className: "mb-2  text-secondary",
                                children: s.jsx("ul", {
                                    className: "ml-4 list-disc",
                                    children: s.jsx("li", {
                                        className: " mb-4 text-base",
                                        children: "We communicate using collaborative technologies such as Google docs and Dropbox. And if WhatsApp will be easier for you, it works perfectly for me. Through these technologies, you can track my suggestions and changes and get to approve them."
                                    })
                                })
                            })]
                        })]
                    })]
                })]
            }), s.jsxs("div", {
                className: " bg-extraClr dark:bg-black py-12 mx-auto md:max-w-full lg:max-w-screen-xl md:px-24 xx:px-6 ss:px-12 lg:py-20",
                children: [s.jsxs("div", {
                    className: "grid gap-8 my-12 row-gap-5 ss:grid-cols-2 lg:grid-cols-3",
                    children: [s.jsxs("div", {
                        className: "relative  bg-primary dark:bg-secondary text-secondary dark:text-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl",
                        children: [s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsx("div", {
                            className: "absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsxs("div", {
                            className: "relative p-5 rounded-sm",
                            children: [s.jsx("div", {
                                className: "flex flex-col mb-2 lg:items-center lg:flex-row",
                                children: s.jsx("h6", {
                                    className: "font-semibold mb-6 leading-5",
                                    children: "Is there a limit to the number of write-ups I can send?"
                                })
                            }), s.jsx("p", {
                                className: "mb-2 text-sm",
                                children: s.jsx("ul", {
                                    className: "ml-4 list-disc",
                                    children: s.jsx("li", {
                                        className: " mb-4 text-base",
                                        children: "You can send up to 20 write-ups in a month (blog posts, newsletters, articles, social media content, fictional/non-fictional stories). If you need to have me edit more than 20 write-ups, you will be charged a slight premium."
                                    })
                                })
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "relative bg-primary dark:bg-secondary text-secondary dark:text-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl",
                        children: [s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsx("div", {
                            className: "absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsxs("div", {
                            className: "relative p-5 rounded-sm",
                            children: [s.jsx("div", {
                                className: "flex flex-col mb-2 lg:items-center lg:flex-row",
                                children: s.jsx("h6", {
                                    className: "font-semibold leading-5 mb-6",
                                    children: "Can I get a refund of my monthly subscription?"
                                })
                            }), s.jsx("p", {
                                className: "mb-2 ",
                                children: s.jsx("ul", {
                                    className: "ml-4 list-disc",
                                    children: s.jsx("li", {
                                        className: " mb-4 text-base",
                                        children: "No you can't"
                                    })
                                })
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "relative bg-primary dark:bg-secondary text-secondary dark:text-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl",
                        children: [s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsx("div", {
                            className: "absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsxs("div", {
                            className: "relative p-5 rounded-sm",
                            children: [s.jsx("div", {
                                className: "flex flex-col mb-2 lg:items-center lg:flex-row",
                                children: s.jsx("h6", {
                                    className: "font-semibold leading-5 mb-6",
                                    children: "What if I want you to ghostwrite for me?"
                                })
                            }), s.jsx("p", {
                                className: "mb-2 ",
                                children: s.jsx("ul", {
                                    className: "ml-4 list-disc",
                                    children: s.jsx("li", {
                                        className: " mb-4 text-base",
                                        children: "We'd need to discuss it outside this package. This Guidance package doesn't cover ghostwriting. It only covers the editing of the writing you've already done."
                                    })
                                })
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "relative  bg-primary dark:bg-secondary text-secondary dark:text-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl",
                        children: [s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsx("div", {
                            className: "absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsxs("div", {
                            className: "relative p-5 rounded-sm",
                            children: [s.jsx("div", {
                                className: "flex flex-col mb-2 lg:items-center lg:flex-row",
                                children: s.jsx("h6", {
                                    className: "font-semibold leading-5 mb-6",
                                    children: "Can a friend use this service based on my subscription?"
                                })
                            }), s.jsx("p", {
                                className: "mb-2 ",
                                children: s.jsx("ul", {
                                    className: "ml-4 list-disc",
                                    children: s.jsx("li", {
                                        className: " mb-4 text-base",
                                        children: "No. Once a month is gone, the subscription for that month expires, and the unused slots also expire."
                                    })
                                })
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "relative bg-primary dark:bg-secondary text-secondary dark:text-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl",
                        children: [s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsx("div", {
                            className: "absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsxs("div", {
                            className: "relative p-5 rounded-sm",
                            children: [s.jsx("div", {
                                className: "flex flex-col mb-2 lg:items-center lg:flex-row",
                                children: s.jsx("h6", {
                                    className: "font-semibold leading-5 mb-6",
                                    children: "This package is only for Christian writers?"
                                })
                            }), s.jsx("p", {
                                className: "mb-2 ",
                                children: s.jsx("ul", {
                                    className: "ml-4 list-disc",
                                    children: s.jsx("li", {
                                        className: " mb-4 text-base",
                                        children: "Yes. This very one is a faith-based package."
                                    })
                                })
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "relative bg-primary dark:bg-secondary text-secondary dark:text-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl",
                        children: [s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsx("div", {
                            className: "absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsxs("div", {
                            className: "relative p-5 rounded-sm",
                            children: [s.jsx("div", {
                                className: "flex flex-col mb-2 lg:items-center lg:flex-row",
                                children: s.jsx("h6", {
                                    className: "font-semibold leading-5 mb-6",
                                    children: "Can you post my write-ups for me after editing them?"
                                })
                            }), s.jsx("p", {
                                className: "mb-2 ",
                                children: s.jsx("ul", {
                                    className: "ml-4 list-disc",
                                    children: s.jsx("li", {
                                        className: " mb-4 text-base",
                                        children: "No. This Guidance package doesn't include social media, blog, website, or newsletter management. It focuses on ensuring your write-up is clean, sharp, and ready to run. You or someone else will handle the posting or uploads."
                                    })
                                })
                            })]
                        })]
                    })]
                }), s.jsxs("div", {
                    className: "grid gap-8 row-gap-5 sm:grid-cols-2",
                    children: [s.jsxs("div", {
                        className: "relative  bg-primary dark:bg-secondary text-secondary dark:text-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl",
                        children: [s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsx("div", {
                            className: "absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsxs("div", {
                            className: "relative p-5 rounded-sm",
                            children: [s.jsx("div", {
                                className: "flex flex-col mb-2 lg:items-center lg:flex-row",
                                children: s.jsx("h6", {
                                    className: "font-semibold mb-6 leading-5",
                                    children: "Do I gain extra points for referring someone?"
                                })
                            }), s.jsx("p", {
                                className: "mb-2 text-sm",
                                children: s.jsx("ul", {
                                    className: "ml-4 list-disc",
                                    children: s.jsx("li", {
                                        className: " mb-4 text-base",
                                        children: "Yes. You get 5 extra write-up slots (in a month) for every person you refer."
                                    })
                                })
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "relative bg-primary dark:bg-secondary text-secondary dark:text-extraClr p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl",
                        children: [s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsx("div", {
                            className: "absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsxs("div", {
                            className: "relative p-5 rounded-sm",
                            children: [s.jsx("div", {
                                className: "flex flex-col mb-2 lg:items-center lg:flex-row",
                                children: s.jsx("h6", {
                                    className: "font-semibold leading-5 mb-6",
                                    children: "Is there a discount on the monthly subscription?"
                                })
                            }), s.jsx("p", {
                                className: "mb-2 ",
                                children: s.jsx("ul", {
                                    className: "ml-4 list-disc",
                                    children: s.jsx("li", {
                                        className: " mb-4 text-base",
                                        children: "Yes. You get a 20% discount if you take out an annual subscription at once. This is obtainable from July 1st, 2024, where instead of paying 15,000 naira a month for a year's subscription, you pay 12,000 naira a month instead."
                                    })
                                })
                            })]
                        })]
                    })]
                })]
            })]
        }), s.jsx("div", {
            className: "",
            children: s.jsx(Dr, {})
        })]
    })
})
  , $3 = () => s.jsx(s.Fragment, {
    children: s.jsxs("div", {
        id: "subs",
        children: [s.jsxs("div", {
            className: "relative grid gap-8 lg:py-24 xx:py-12 lg:px-12 xx:p-6 lg:pt-0 ss:grid-cols-2 lg:pb-0",
            children: [s.jsx("div", {
                className: "flex flex-col items-start w-full ss:px-0 sm:px-4 mx-auto lg:px-8 lg:max-w-screen-xl",
                children: s.jsx("div", {
                    className: "mb-16 lg:my-40 xx:my-auto lg:max-w-lg lg:pr-5",
                    children: s.jsxs("div", {
                        className: "lg:max-w-xl  lg:mb-6 xx:my-auto",
                        children: [s.jsx("h2", {
                            className: "max-w-lg  mb-6 font-sans lg:text-5xl font-bold tracking-tight text-accent ss:text-left xx:text-center ss:text-3xl sm:text-4xl sm:leading-none",
                            children: "Coaching For Authors"
                        }), s.jsx("h5", {
                            className: "sm:text-base xx:text-sm mt-8 text-secondary dark:text-primary md:text-lg  ss:text-left xx:text-center",
                            children: "Struggling to put your book together? Let's do it chapter by chapter, you and I."
                        }), s.jsx("div", {
                            className: " grid ss:place-content-start xx:place-content-center",
                            children: s.jsx(z, {
                                to: "https://wa.me/message/DOCQNYXAEPVDH1",
                                children: s.jsx("button", {
                                    className: "w-[11rem] py-5 px-7   ss:mt-6 xx:mt-8 bg-white h-[4rem] my-3 rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:text-white before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-lightAccent before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#343434]",
                                    children: "CONTACT ME"
                                })
                            })
                        })]
                    })
                })
            }), s.jsx("div", {
                className: "w-full max-w-xl  ss:px-0 sm:px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:max-w-full xl:px-0",
                children: s.jsx("img", {
                    className: "object-cover w-[32rem]  rounded  lg:rounded-none lg:shadow-none sm:h-[24rem] lg:h-full",
                    src: "https://i.postimg.cc/FHzfL9r3/Blog-post-bro.png",
                    alt: ""
                })
            })]
        }), s.jsxs("section", {
            className: "authors",
            children: [s.jsxs("div", {
                className: " lg:py-12 grid lg:grid-cols-2 gap-4 xx:p-6 sm:px-12 lg:px-24 bg-extraClr ",
                children: [s.jsx("div", {
                    className: "   md:px-0  grid  place-self-center",
                    children: s.jsxs("div", {
                        className: "mb-0 lg:pr-8 xl:pr-6 text-left ",
                        children: [s.jsx("div", {
                            className: " grid place-content-center mx-auto",
                            children: s.jsx(z, {
                                to: "",
                                children: s.jsx("button", {
                                    style: {
                                        boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.35)"
                                    },
                                    className: "relative tracking-wide mb-12 ss:ml-6 ss:px-12 xx:px-6 py-4 text-secondary ss:text-xl xx:text-lg font-bold  overflow-hidden bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0",
                                    children: "COACHING FOR AUTHORS"
                                })
                            })
                        }), s.jsxs("div", {
                            className: "",
                            children: [s.jsx("h4", {
                                className: "ss:text-2xl xx:text-xl",
                                children: "What's this about?"
                            }), s.jsx("p", {
                                className: "my-6 font-medium  ss:text-lg text-secondary text-left xx:text-base",
                                children: "This package is where I get to coach you stage by stage on how to write your book. You'll be gaining two things: you'll be learning to write better while authoring your book at the same time. I'm an author, ghostwriter, editor, and a writing coach. These mean I know how to write. I know how to write for people. I know how to enrich what people have written. And I sure know how to help you write (by yourself!) what you need to write."
                            }), s.jsx("h4", {
                                className: "ss:text-2xl xx:text-xl",
                                children: "Where do we begin?"
                            }), s.jsxs("p", {
                                className: "my-6 font-medium  ss:text-lg text-secondary text-left xx:text-base",
                                children: ["Every book on the earth has a purpose. Yours does too. And that's where we'll begin — by defining your book's purpose, zeroing in on its audience, and answering the big question: Why? Why are you writing this book? What do you want your reader to take away from it?", s.jsxs("ul", {
                                    className: "m-4 list-disc",
                                    children: [s.jsx("li", {
                                        className: " mb-2 text-base",
                                        children: "Then we brainstorm on the chapters."
                                    }), s.jsx("li", {
                                        className: " mb-2 text-base",
                                        children: "What will Chapter One say?"
                                    }), s.jsx("li", {
                                        className: " mb-2 text-base",
                                        children: "What will Chapter Two contain?"
                                    }), s.jsx("li", {
                                        className: " mb-2 text-base",
                                        children: "Should the book be broken into parts or sections?"
                                    })]
                                })]
                            })]
                        })]
                    })
                }), s.jsx("div", {
                    className: "bg grid lg:place-content-top xx:place-content-center",
                    children: s.jsx("div", {
                        style: {
                            boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)"
                        },
                        className: "img lg:ml-auto lg:w-[32rem] lg:h-[40rem] lg:my-0 xx:my-6 md:w-[40rem] md:h-[48rem] ss:w-[32rem] ss:h-[40rem] xs:w-[24rem] xs:h-[32rem] xx:w-[20rem] xx:h-[28rem] rounded-lg"
                    })
                })]
            }), s.jsxs("div", {
                className: " bg-extraClr py-12 sm:px-12 xx:px-6 lg:px-24",
                children: [s.jsxs("div", {
                    className: "",
                    children: [s.jsx("p", {
                        className: "my-6 font-medium  ss:text-lg text-secondary text-left xx:text-base",
                        children: "That, you see, is what this Coaching for Authors package is about. I'll be the person that helps you share your message, the one that helps you tell your story — so your readers will hear precisely what you've been wanting them to hear, the message that's been burning in your heart. I got this vision from an author named Luke. The guy was a meticulous physician who brought that very care to his writing. Right from the start of the book, he stated its purpose. His reader was named Theophilus. And this author wanted Theophilus to know the truth. So he wrote chapter after chapter, explaining in gripping detail, employing the kind of storytelling that renders you immersed. Everything drove towards that goal — so Theophilus would know the truth. Centuries later, we're also learning the truth from the book Luke wrote."
                    }), s.jsx("p", {
                        className: "my-6 font-medium  ss:text-lg text-secondary text-left xx:text-base",
                        children: "That's what books do; they embody truth. In the kind of format that lasts forever. Long after the author has breathed their last, the truth lives on. Do you know why you're so drawn to write this book? Because people need this truth—the very one beating in your chest; the one making you interested in this package. It's also why I'll help you. You're Luke, writing to your Theophilus. I'll be your helpmeet. I'll be the one who ensures Theophilus hears precisely what Luke wants to say."
                    }), s.jsx("h4", {
                        className: "ss:text-2xl xx:text-xl",
                        children: "What's the modality of this coaching? How do we do it?"
                    }), s.jsx("p", {
                        className: "my-6 font-medium  ss:text-lg text-secondary text-left xx:text-base",
                        children: s.jsxs("ol", {
                            className: "list-decimal",
                            children: [s.jsxs("li", {
                                className: "ml-6 mb-4",
                                children: ["We start by talking about the Big W's? Why are you writing this book? Where did the drive to write it come from? Who are you writing to? What do you want your reader to take away from it? We could do this over a call, emails, or via chats. ", s.jsx("br", {}), "There are H questions too: How far have you gone with the book or the planning of the book? How best do you think I can help you through this writing phase?"]
                            }), s.jsx("li", {
                                className: "ml-6 mb-4",
                                children: "After I've understood your passion for the book, you and I will draw out an outline that works with your schedule (to be frank, you might need to make your schedule work with the outline or you may never find the time)."
                            }), s.jsx("li", {
                                className: "ml-6 mb-4",
                                children: "You begin writing. And you send a chapter (or more) a week."
                            }), s.jsxs("li", {
                                className: "ml-6 mb-4",
                                children: ["As you send me the chapters, we talk about it. I tell you what I noticed, if it's all good or how much better it can get, how you can modify things, how to stick to appropriate tenses, punctuations, where a subtopic is necessary, where an illustration would aid understanding, and the repeated things that must be cut out. ", s.jsx("br", {}), " As your editor, I would have done these for you, but this Coaching package ensures you learn to do them yourself, so you can grow more confident in your writing and attack your subsequent writing or books with experience and more knowledge."]
                            }), s.jsx("li", {
                                className: "ml-6 mb-4",
                                children: "Bit by bit, as sure as the dawn, you'll complete your book."
                            })]
                        })
                    }), s.jsx("p", {
                        className: "my-6 font-medium  lg:text-lg text-secondary lg:text-left md:text-lg md:text-center"
                    })]
                }), s.jsxs("div", {
                    className: "grid gap-8 row-gap-5 ss:grid-cols-2 lg:grid-cols-3",
                    children: [s.jsxs("div", {
                        className: "relative bg-primary p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl",
                        children: [s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsx("div", {
                            className: "absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsxs("div", {
                            className: "relative p-5 rounded-sm",
                            children: [s.jsx("div", {
                                className: "flex flex-col mb-2 lg:items-center lg:flex-row",
                                children: s.jsx("h6", {
                                    className: "font-semibold text-accent leading-5 mb-6",
                                    children: "WARNING!!!"
                                })
                            }), s.jsx("p", {
                                className: "mb-2 text-base text-secondary",
                                children: "As you write, you may find your book taking a different, deeper turn. You may find a certain point becoming so important that you keep expanding on it. Thing is: When you 'start' writing, beautiful things happen. And I'll fan the flame; I'll encourage you to ease up on the outline and allow yourself just write. Thoughts, when they're given expression, grow. You'll be amazed at the things flowing out of you."
                            }), s.jsx("p", {
                                className: "mb-2 text-base text-secondary",
                                children: "But no, we won't allow wordiness dilute the message. Unnecessary things will be mercilessly shown the door. There is a time to use a comma; there is a time to put a full stop. I'll be your guide."
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "relative  bg-primary p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl",
                        children: [s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsx("div", {
                            className: "absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsxs("div", {
                            className: "relative p-5 rounded-sm",
                            children: [s.jsx("div", {
                                className: "flex flex-col mb-2 lg:items-center lg:flex-row",
                                children: s.jsx("h6", {
                                    className: "font-semibold mb-6 text-accent leading-5",
                                    children: "What's payment like?"
                                })
                            }), s.jsxs("p", {
                                className: "mb-2 text-base  text-secondary",
                                children: [s.jsxs("ul", {
                                    className: "ml-4 list-disc",
                                    children: [s.jsx("li", {
                                        className: " mb-4 text-base",
                                        children: "Payment is on a monthly basis."
                                    }), s.jsx("li", {
                                        className: " mb-4 text-base",
                                        children: "25,000 naira a month is the coaching fee."
                                    })]
                                }), "No limit on chapters. You may send in a chapter a week, or send in three chapters a week and get my feedback. But once a month is over, you'll have to renew your subscription for the new month. ", s.jsx("br", {}), "It's like this because I want you to be encouraged to start and not slow down. If you know your monthly subscription is counting, it should motivate you to get on with the book. Why let it take ten months when it could have taken three?"]
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "relative bg-primary p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl",
                        children: [s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsx("div", {
                            className: "absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
                        }), s.jsx("div", {
                            className: "absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
                        }), s.jsxs("div", {
                            className: "relative p-5 rounded-sm",
                            children: [s.jsx("div", {
                                className: "flex flex-col mb-2 lg:items-center lg:flex-row",
                                children: s.jsx("h6", {
                                    className: "font-semibold text-accent leading-5 mb-6",
                                    children: "Can we start right now?"
                                })
                            }), s.jsx("p", {
                                className: "mb-2 text-base text-secondary",
                                children: "Of course. Send a message to subscribe. Then we can start with those W questions: Why? Why is this book necessary? What will it say?"
                            })]
                        })]
                    })]
                }), s.jsx("div", {
                    className: "  grid ss:place-content-center xx:place-content-start  mt-12",
                    children: s.jsx(z, {
                        to: "https://wa.me/message/DOCQNYXAEPVDH1",
                        children: s.jsx("div", {
                            className: "btn-two-container ",
                            children: s.jsx("button", {
                                className: "text-xl font-extrabold btn-two mt-3 w-[10rem] h-[3.5rem]",
                                children: "SUBSCRIBE"
                            })
                        })
                    })
                })]
            }), s.jsx(ah, {})]
        }), s.jsx("div", {
            className: "",
            children: s.jsx(Dr, {})
        })]
    })
});
function M3(e) {
    return zr({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M387.581 139.712L356.755 109 216.913 248.319l30.831 30.719 139.837-139.326zM481.172 109L247.744 340.469l-91.39-91.051-30.827 30.715L247.744 403 512 139.712 481.172 109zM0 280.133L123.321 403l30.829-30.713L31.934 249.418 0 280.133z"
            },
            child: []
        }]
    })(e)
}
function pc(e) {
    return zr({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
            },
            child: []
        }]
    })(e)
}
const z3 = () => s.jsx(s.Fragment, {
    children: s.jsxs("div", {
        id: "service",
        children: [s.jsx("section", {
            id: "hero",
            className: " hero",
            children: s.jsxs("div", {
                className: "grid ss:py-40 xx:py-32 text-center img ss:px-12 xx:px-6 ",
                children: [s.jsx("h1", {
                    className: "sm:text-6xl xx:text-3xl sm:font-extrabold xx:font-bold text-white xx:py-3  ss:py-6",
                    children: "Book Writing and Editing"
                }), s.jsx("p", {
                    className: "sm:text-2xl xx:text-xl xx:w-full ss:w-[75%] mx-auto  text-white xx:py-3  ss:py-6 ",
                    children: "You know it's important to have pair of professional eyes go through your manuscript. Or you need someone to help you put your thoughts together, to help you make a book. . ."
                }), s.jsx(z, {
                    to: "https://wa.me/message/DOCQNYXAEPVDH1",
                    children: s.jsx("button", {
                        className: "w-[11rem] py-5 px-7 mx-auto  bg-white h-[4rem] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:text-white before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-lightAccent before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#343434]",
                        children: "CONTACT ME"
                    })
                })]
            })
        }), s.jsx("section", {
            className: "ss:py-24 xx:py-16 grid place-content-center bg-primary dark:bg-secondary",
            children: s.jsxs("div", {
                className: "  m-auto space-y-12 grid  ",
                children: [s.jsxs("div", {
                    className: "ss:px-12  xx:px-6  grid justify-center",
                    children: [s.jsx("div", {
                        className: " inline-block mx-auto",
                        children: s.jsx(z, {
                            to: "",
                            children: s.jsx("button", {
                                style: {
                                    boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.35)"
                                },
                                className: "relative tracking-wide mb-12 ss:ml-6 px-12 py-4 text-secondary  text-xl font-bold  overflow-hidden bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0",
                                children: "BOOK WRITING AND EDITING"
                            })
                        })
                    }), s.jsx("p", {
                        className: "text-secondary mt-4 mb-12 inline-block mx-auto ss:w-[75%] xx:w-full text-center text-lg dark:text-primary",
                        children: `"If you have a great message or story to share, and will like to put it out in book format, reach Brown Patience. She's got really great skills in books writing, editing and finishing. Her services are superb." — Timi Oshinowo`
                    })]
                }), s.jsx("div", {
                    className: "py-16 my-12",
                    children: s.jsxs("div", {
                        className: " m-auto  bg-accent rounded-lg py-12 text-primary ss:px-12 xx:px-0",
                        children: [s.jsx("h2", {
                            className: "ss:text-3xl xx:text-xl text-center mb-16 font-semibold",
                            children: "Who can benefit from this book writing and editing service?"
                        }), s.jsxs("div", {
                            className: "mx-auto grid gap-4 md:w-3/4 xx:w-full lg:w-full ss:grid-cols-2 lg:grid-cols-4",
                            children: [s.jsxs("div", {
                                style: {
                                    boxShadow: " 2px 2px 25px 0px rgba(255,255,255,0.36)"
                                },
                                className: "border xx:rounded-none ss:rounded-xl text-accent bg-white dark:bg-secondary xx:p-6 sm:py-12  sm:px-12 lg:px-8",
                                children: [s.jsxs("div", {
                                    className: "mb-12 h-[12rem] space-y-4",
                                    children: [s.jsx("h3", {
                                        className: "sm:text-2xl xx:text-xl mb-6 font-light",
                                        children: "Experienced Professionals, Coaches & Speakers"
                                    }), s.jsx("p", {
                                        className: "mb-6 text-gray-600 dark:text-gray-300",
                                        children: "Make your powerful speeches and wealth of experience into life-changing books that further testify of your authority in your field, reaching even more people."
                                    })]
                                }), s.jsx("img", {
                                    src: "https://i.postimg.cc/L4N4dSjf/2150951395-1.jpg",
                                    className: "mx-auto w-full",
                                    alt: "illustration",
                                    style: {
                                        borderRadius: "10px",
                                        boxShadow: " 2px 2px 39px 0px rgba(240,0,0,0.36)"
                                    }
                                })]
                            }), s.jsxs("div", {
                                style: {
                                    boxShadow: " 2px 2px 25px 0px rgba(255,255,255,0.36)"
                                },
                                className: "border rounded-xl xx:rounded-none ss:rounded-xl text-accent bg-white dark:bg-secondary xx:p-6 sm:py-12  sm:px-12 lg:px-8",
                                children: [s.jsxs("div", {
                                    className: "mb-12 h-[12rem] space-y-4",
                                    children: [s.jsx("h3", {
                                        className: "sm:text-2xl xx:text-xl mb-6 font-light",
                                        children: "Visionaries & Change Agents"
                                    }), s.jsx("p", {
                                        className: "mb-6 text-gray-600 dark:text-gray-300",
                                        children: "Turn your burning message into a compelling call to action. Sell your great vision to those who will be willing to run with it. Get support for your cause."
                                    })]
                                }), s.jsx("img", {
                                    src: "https://i.postimg.cc/63V34G71/2150697440-1.jpg",
                                    className: "mx-auto w-full",
                                    alt: "illustration",
                                    style: {
                                        borderRadius: "10px",
                                        boxShadow: " 2px 2px 39px 0px rgba(240,0,0,0.36)"
                                    }
                                })]
                            }), s.jsxs("div", {
                                style: {
                                    boxShadow: " 2px 2px 25px 0px rgba(255,255,255,0.36)"
                                },
                                className: "border rounded-xl xx:rounded-none ss:rounded-xl text-accent bg-white dark:bg-secondary xx:p-6 sm:py-12  sm:px-12 lg:px-8",
                                children: [s.jsxs("div", {
                                    className: "mb-12 h-[12rem] space-y-4",
                                    children: [s.jsx("h3", {
                                        className: "sm:text-2xl xx:text-xl mb-6 font-light",
                                        children: "Empaths & Survivors"
                                    }), s.jsx("p", {
                                        className: "mb-6 text-gray-600 dark:text-gray-300",
                                        children: "Share your experience with those who are currently where you've been. Show them how you got through it all. Show them how to get through it too."
                                    })]
                                }), s.jsx("img", {
                                    src: "https://i.postimg.cc/Hx1nLtLy/2151438401-1.jpg",
                                    className: "mx-auto w-full",
                                    alt: "illustration",
                                    style: {
                                        borderRadius: "10px",
                                        boxShadow: " 2px 2px 39px 0px rgba(240,0,0,0.36)"
                                    }
                                })]
                            }), s.jsxs("div", {
                                style: {
                                    boxShadow: " 2px 2px 25px 0px rgba(255,255,255,0.36)"
                                },
                                className: "border rounded-xl xx:rounded-none ss:rounded-xl text-accent bg-white dark:bg-secondary xx:p-6 sm:py-12  sm:px-12 lg:px-8",
                                children: [s.jsxs("div", {
                                    className: "mb-12 h-[12rem] space-y-4",
                                    children: [s.jsx("h3", {
                                        className: "sm:text-2xl xx:text-xl mb-6 font-light",
                                        children: "Authors Who Need Assistance"
                                    }), s.jsx("p", {
                                        className: "mb-6 text-gray-600 dark:text-gray-300",
                                        children: "You've been writing for a while but it's been feeling flat. Inject the necessary impact into your voice; rebrand your writing; make your subsequent books sharp and provoking, as they should be."
                                    })]
                                }), s.jsx("img", {
                                    src: "https://i.postimg.cc/0QCkyR3T/2151186173-1.jpg",
                                    className: "mx-auto w-full",
                                    alt: "illustration",
                                    style: {
                                        borderRadius: "10px",
                                        boxShadow: " 2px 2px 39px 0px rgba(240,0,0,0.36)"
                                    }
                                })]
                            })]
                        })]
                    })
                })]
            })
        }), s.jsxs("section", {
            className: "",
            children: [s.jsx("div", {
                className: "text-center my-12",
                children: s.jsx("h2", {
                    style: {
                        borderBottom: "2px solid #343434",
                        paddingBottom: "1rem"
                    },
                    className: " mb-12 text-center text-2xl xx:hidden ss:inline-block font-bold text-secondary dark:text-white md:text-4xl",
                    children: "What Service Do You Need?"
                })
            }), s.jsxs("div", {
                id: "editing",
                className: " lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-extraClr  dark:bg-[#111]  ",
                children: [s.jsx("div", {
                    className: "   md:px-0  grid  place-self-center",
                    children: s.jsxs("div", {
                        className: "mb-0 lg:pr-8 xl:pr-6 p-6 lg:text-left ",
                        children: [s.jsx("h2", {
                            className: "mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center",
                            children: s.jsx("strong", {
                                children: "Editing"
                            })
                        }), s.jsx("div", {
                            className: " sm:hidden xx:grid place-content-center",
                            children: s.jsx("img", {
                                src: "https://i.postimg.cc/YSZBhqfs/Editing_body_text-bro_(1).png",
                                alt: "",
                                className: " ss:w-[32rem]  xs:w-[24rem]  xx:w-[20rem]  shadow-md"
                            })
                        }), s.jsx("div", {
                            className: "",
                            children: s.jsx("p", {
                                className: "my-6 font-medium  lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: "You need me to dot your I’s, cross your T’s and ensure no grammatical or typographic errors survive. As your editor, I serve as a professional pair of eyes who will iron out mistakes and polish your writing until it glimmers."
                            })
                        }), s.jsx("div", {
                            className: "mb-10 grid place-content-start  md:mb-16 lg:mb-12",
                            children: s.jsx(z, {
                                to: "https://wa.me/message/DOCQNYXAEPVDH1",
                                children: s.jsx("div", {
                                    className: "btn-two-container ",
                                    children: s.jsx("button", {
                                        className: "text-xl font-extrabold btn-two mt-3 w-[11rem] h-[4rem]",
                                        children: "CONTACT ME"
                                    })
                                })
                            })
                        })]
                    })
                }), s.jsx("div", {
                    className: "bg xx:hidden sm:grid place-content-end",
                    children: s.jsx("img", {
                        src: "https://i.postimg.cc/YSZBhqfs/Editing_body_text-bro_(1).png",
                        alt: "",
                        className: " sm:w-[24rem] lg:w-[32rem] rounded-lg  shadow-md"
                    })
                })]
            }), s.jsxs("div", {
                id: "ghost-writing",
                className: " lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-primary  dark:bg-black  ",
                children: [s.jsx("div", {
                    className: "   md:px-0  grid  place-self-center",
                    children: s.jsxs("div", {
                        className: "mb-0 lg:pr-8 xl:pr-6 p-6 lg:text-left ",
                        children: [s.jsx("h2", {
                            className: "mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center",
                            children: s.jsx("strong", {
                                children: "Ghost Writing"
                            })
                        }), s.jsx("div", {
                            className: " sm:hidden xx:grid place-content-center",
                            children: s.jsx("img", {
                                src: "https://i.postimg.cc/W4hPNJrZ/Notes-bro_(1).png",
                                alt: "",
                                className: " ss:w-[32rem]  xs:w-[24rem]  xx:w-[20rem]  shadow-md"
                            })
                        }), s.jsxs("div", {
                            className: "",
                            children: [s.jsx("p", {
                                className: "my-6 font-medium  lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: "You know what you want to write, but you probably only have the skeletal framework. It’s still in your head, scribbled on several notepads, or scattered round your laptop. I come around to understand precisely what you want to write and write it out for you."
                            }), s.jsx("p", {
                                className: "mb-12 font-medium lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: "It could be that you just don’t have the time to write. Therefore, you share your dream with me and I reproduce it on paper. Clearly, compellingly."
                            })]
                        }), s.jsx("div", {
                            className: "mb-10 grid place-content-start  md:mb-16 lg:mb-12",
                            children: s.jsx(z, {
                                to: "https://wa.me/message/DOCQNYXAEPVDH1",
                                children: s.jsx("div", {
                                    className: "btn-two-container ",
                                    children: s.jsx("button", {
                                        className: "text-xl font-extrabold btn-two mt-3 w-[11rem] h-[4rem]",
                                        children: "CONTACT ME"
                                    })
                                })
                            })
                        })]
                    })
                }), s.jsx("div", {
                    className: "bg xx:hidden sm:grid place-content-end",
                    children: s.jsx("img", {
                        src: "https://i.postimg.cc/W4hPNJrZ/Notes-bro_(1).png",
                        alt: "",
                        className: " sm:w-[24rem] lg:w-[32rem] rounded-lg  shadow-md"
                    })
                })]
            }), s.jsxs("div", {
                id: "collaboration",
                className: " lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-extraClr  dark:bg-secondary  ",
                children: [s.jsx("div", {
                    className: "bg xx:hidden sm:grid place-content-start",
                    children: s.jsx("img", {
                        src: "https://i.postimg.cc/W19vc7Dj/Collaboration-amico_(1).png",
                        alt: "",
                        className: " sm:w-[24rem] lg:w-[32rem] rounded-lg  shadow-md"
                    })
                }), s.jsx("div", {
                    className: "   md:px-0  grid  place-self-center",
                    children: s.jsxs("div", {
                        className: "mb-0 lg:pr-8 xl:pr-6 p-6 lg:text-left ",
                        children: [s.jsx("h2", {
                            className: "mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center",
                            children: s.jsx("strong", {
                                children: "Collaboration"
                            })
                        }), s.jsx("div", {
                            className: " sm:hidden xx:grid place-content-center",
                            children: s.jsx("img", {
                                src: "https://i.postimg.cc/W19vc7Dj/Collaboration-amico_(1).png",
                                alt: "",
                                className: " ss:w-[32rem]  xs:w-[24rem]  xx:w-[20rem]  shadow-md"
                            })
                        }), s.jsxs("div", {
                            className: "",
                            children: [s.jsx("p", {
                                className: "my-6 font-medium  lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: "You have an existing piece of work. With collaboration, a paragraph could be redone or deleted altogether. A better introduction could be added, repetitions removed, and the message better explained. Collaboration is when I join with you to make your message as rich as it should be. It’s a partnership."
                            }), s.jsx("p", {
                                className: "my-6 font-medium lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: "With collaboration, you could send me 30 pages and I send you 75. Of course, I won’t go adding things to your book or redoing things unless we’ve discussed it. And I show you the work at each step. You get to vet everything. If you say, “Bravo! Carry on!” I carry on."
                            }), s.jsx("p", {
                                className: "my-6 font-medium lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: "This was from a client I collaborated with: “Thank you for the work done so far and making the book more interesting to read. I love the way you rearranged the chapters into parts. I am currently vetting the major additions; I will let you know once I am done.” That’s how it goes."
                            })]
                        }), s.jsx("div", {
                            className: "mb-10 grid place-content-start  md:mb-16 lg:mb-12",
                            children: s.jsx(z, {
                                to: "https://wa.me/message/DOCQNYXAEPVDH1",
                                children: s.jsx("div", {
                                    className: "btn-two-container ",
                                    children: s.jsx("button", {
                                        className: "text-xl font-extrabold btn-two mt-3 w-[11rem] h-[4rem]",
                                        children: "CONTACT ME"
                                    })
                                })
                            })
                        })]
                    })
                })]
            }), s.jsxs("div", {
                id: "transcription",
                className: " lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-primary  dark:bg-secondary ",
                children: [s.jsx("div", {
                    className: "bg xx:hidden sm:grid place-content-start",
                    children: s.jsx("img", {
                        src: "https://i.postimg.cc/Qt7G5Gfx/Translator-bro_(1).png",
                        alt: "",
                        className: " sm:w-[24rem] lg:w-[32rem] rounded-lg  shadow-md"
                    })
                }), s.jsx("div", {
                    className: "   md:px-0  grid  place-self-center",
                    children: s.jsxs("div", {
                        className: "mb-0 lg:pr-8 xl:pr-6 p-6 lg:text-left ",
                        children: [s.jsx("h2", {
                            className: "mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center",
                            children: s.jsx("strong", {
                                children: "Transcription"
                            })
                        }), s.jsx("div", {
                            className: " sm:hidden xx:grid place-content-center",
                            children: s.jsx("img", {
                                src: "https://i.postimg.cc/Qt7G5Gfx/Translator-bro_(1).png",
                                alt: "",
                                className: " ss:w-[32rem]  xs:w-[24rem]  xx:w-[20rem]  shadow-md"
                            })
                        }), s.jsxs("div", {
                            className: "",
                            children: [s.jsx("p", {
                                className: "my-6 font-medium  lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: "What you have is a recording—audio or video recording—and you want that recording made into a book. First, I transcribe that recording, and then I take it from there, making it into a book. It’s perfect for people who’d rather “talk” their thoughts or message than sit to type it out."
                            }), s.jsx("p", {
                                className: "my-6 font-medium lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: "Some of us are just better off verbally explaining things than writing them. So, if you think you’d do better sending me a recording of your story, speech, or training than attempting to write it, transcription covers all of it."
                            }), s.jsxs("p", {
                                className: "mb-6 font-medium lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: ["Mine is to ensure you write that important book, that you share that necessary message. And the ways I help you are editing, collaboration, ghostwriting, and transcription.", s.jsx("i", {
                                    className: " mx-2",
                                    children: "“Okay, I’m in. how do we do this?”"
                                }), "I hear you ask."]
                            })]
                        }), s.jsx("div", {
                            className: "mb-10 grid place-content-start  md:mb-16 lg:mb-12",
                            children: s.jsx(z, {
                                to: "https://wa.me/message/DOCQNYXAEPVDH1",
                                children: s.jsx("div", {
                                    className: "btn-two-container ",
                                    children: s.jsx("button", {
                                        className: "text-xl font-extrabold btn-two mt-3 w-[11rem] h-[4rem]",
                                        children: "CONTACT ME"
                                    })
                                })
                            })
                        })]
                    })
                })]
            })]
        }), s.jsxs("div", {
            className: "ss:px-12 xx:px-6 mt-12 py-16 mb-12 mx-auto ",
            children: [s.jsx("div", {
                className: "mb-12 md:mx-auto text-center",
                children: s.jsx("h2", {
                    className: " pb-6  ss:text-3xl xx:text-2xl font-bold leading-none tracking-tight text-secondary dark:text-primary md:mx-auto",
                    children: "The 4-step process to get your book, your voice, your message out there:"
                })
            }), s.jsxs("div", {
                className: "grid  gap-10 lg:grid-cols-2 sm:grid-cols-1",
                children: [s.jsxs("div", {
                    className: "bg-secondary dark:bg-accent p-6 rounded-lg",
                    children: [s.jsxs("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [s.jsx("p", {
                            className: "text-2xl font-bold text-white",
                            children: "Meeting You & the Vision:"
                        }), s.jsx(pc, {
                            style: {
                                color: "#fff"
                            }
                        })]
                    }), s.jsx("p", {
                        className: " text-white",
                        children: "This is the very first interaction where you and I get to talk. You send me your draft for editing or collaboration, audio or video files for transcription, or explain what you want to write if you need the ghostwriting service."
                    }), s.jsx("p", {
                        className: " text-white mt-4",
                        children: "As we talk over the phone or interact via text, you help me understand who you are and what you want to say, what service you need, and how soon you want it done. It’s really that easy."
                    })]
                }), s.jsxs("div", {
                    className: "bg-extraClr p-6 rounded-lg",
                    children: [s.jsxs("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [s.jsx("p", {
                            className: "text-2xl font-bold",
                            children: "Finding Clarity:"
                        }), s.jsx(pc, {
                            style: {
                                color: "#343434"
                            }
                        })]
                    }), s.jsx("p", {
                        className: " text-secondary",
                        children: "I’ll ask questions as we talk so we can clearly articulate your message, define your audience, and see if there is a need to return to the drawing board."
                    }), s.jsx("p", {
                        className: " text-secondary mt-4",
                        children: "Reviewing your manuscript or listening as you explain what you want to write gives us a chance to determine just how defined your message is. It may take a work-back:"
                    }), s.jsxs("ul", {
                        className: "list-disc mt-6",
                        children: [s.jsx("li", {
                            children: "To whom are you writing?"
                        }), s.jsx("li", {
                            children: "Why are you writing to them?"
                        }), s.jsx("li", {
                            children: "Now, what do you want to say to them? What are they supposed to take away from reading your book?"
                        })]
                    }), s.jsxs("p", {
                        className: " text-secondary mt-4",
                        children: ["A clarity session may have you noting, just like this dear client, “Thank you for the correction. Everybody has been telling me how amazing the book is. No one pointed out these to me. I listened to your voice note thrice; it makes sense to me now. I knew something was missing.”", s.jsx("br", {}), "This clarity session will take a phone conversation or like most of my clients, a string of WhatsApp messages."]
                    })]
                }), s.jsxs("div", {
                    className: "bg-extraClr p-6 rounded-lg",
                    children: [s.jsxs("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [s.jsx("p", {
                            className: "text-2xl font-bold",
                            children: "Writing & Editing "
                        }), s.jsx(pc, {
                            style: {
                                color: "#343434"
                            }
                        })]
                    }), s.jsx("p", {
                        className: " text-secondary",
                        children: "When we’re clear on precisely what you want, work will commence. This phase is where the actual writing takes place. Using an outline we designed, your book will come together seamlessly, with you reserving the right to monitor each milestone, ensuring it captures your voice and your “Why?” You get to approve the work as we go. If you like how it’s going, we carry on."
                    }), s.jsx("p", {
                        className: " text-secondary mt-4",
                        children: "Editing is the polishing phase. No, we can’t afford to let a comma be in the wrong place."
                    })]
                }), s.jsxs("div", {
                    className: "bg-extraClr p-6 rounded-lg",
                    children: [s.jsxs("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [s.jsx("p", {
                            className: "text-2xl font-bold",
                            children: "Completion & Approval "
                        }), s.jsx(M3, {
                            style: {
                                color: "#343434"
                            }
                        })]
                    }), s.jsx("p", {
                        className: " text-secondary",
                        children: "Now it’s all done. When the work is completed and approved, your book, or any other written project, is fully yours. You hold in your hand the very thing you’ve been longing to write. This is the point where you happily promise to refer me to everyone who’ll need this service or like one of my clients, you say to me, “We will do big things together, Patience.” Cheers to that!"
                    }), s.jsx("p", {
                        className: "  mt-4 text-lg  text-accent font-semibold",
                        children: "Get started now!"
                    }), s.jsxs("p", {
                        className: " text-secondary mt-4",
                        children: ["Let’s talk. Tell me about the book you’ve been desiring to write, the message you’ve been yearning to share. Let me ensure you share that message. ", s.jsx("br", {}), " Together, we will:"]
                    }), s.jsxs("ul", {
                        className: "list-disc mt-6",
                        children: [s.jsx("li", {
                            children: "Define your audience and clarify your message."
                        }), s.jsx("li", {
                            children: "Organize your thoughts into a logical, well-flowing outline."
                        }), s.jsx("li", {
                            children: "Communicate your message clearly, compellingly."
                        })]
                    })]
                })]
            }), s.jsx("div", {
                className: "  grid place-content-center  ss:mt-12 xx:mt-6",
                children: s.jsx(z, {
                    to: "https://wa.me/message/DOCQNYXAEPVDH1",
                    children: s.jsx("div", {
                        className: "btn-two-container ",
                        children: s.jsx("button", {
                            className: "text-xl xx:text-lg font-extrabold btn-two mt-3 w-[16rem] h-[4rem]",
                            children: "SEND ME A MESSAGE"
                        })
                    })
                })
            })]
        }), s.jsxs("section", {
            id: "",
            className: "",
            children: [s.jsx("div", {
                className: "text-center my-12",
                children: s.jsx("h2", {
                    style: {
                        borderBottom: "2px solid #343434",
                        paddingBottom: "1rem"
                    },
                    className: " mb-12 text-center text-2xl xx:hidden ss:inline-block font-bold text-secondary dark:text-white md:text-4xl",
                    children: "Few Books I've Worked On"
                })
            }), s.jsxs("div", {
                id: "edusell",
                className: " lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-extraClr dark:bg-[#111] ",
                children: [s.jsx("div", {
                    className: "   md:px-0  grid  place-self-center",
                    children: s.jsxs("div", {
                        className: "mb-0 lg:pr-8 xl:pr-6 lg:text-left p-6",
                        children: [s.jsx("h2", {
                            className: "mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center",
                            children: s.jsx("strong", {
                                children: "Edusell"
                            })
                        }), s.jsx("div", {
                            className: "bg xx:grid place-content-center sm:hidden",
                            children: s.jsx("div", {
                                style: {
                                    boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                                    background: 'url("https://i.postimg.cc/j2Bx6zxf/20240218-134232.jpg") no-repeat center center/cover'
                                },
                                className: "img1  ss:w-[32rem]  sm:h-[40rem] xs:w-[24rem] xs:h-[32rem]  xx:w-[20rem] xx:h-[24rem]  my-8  sm:w-0 rounded-lg"
                            })
                        }), s.jsx("div", {
                            className: "",
                            children: s.jsxs("p", {
                                className: "mb-6 font-medium xx:text-base  lg:text-lg text-secondary  dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: [s.jsx("p", {
                                    className: "mb-4",
                                    children: "When this manuscript got to me, I was told it had been edited already. I'll never be caught putting down another person's work but to be professionally fair, this manuscript, supposedly edited before getting to me, surprised me."
                                }), s.jsx("p", {
                                    className: "",
                                    children: "I was glad it hadn't been published in that state. Cause it “needed” work."
                                }), s.jsxs("ul", {
                                    className: " my-4 list-none",
                                    children: [s.jsx("li", {
                                        className: " mb-4 text-base",
                                        children: "— Grouping of similar parts into sections."
                                    }), s.jsx("li", {
                                        className: " mb-4 text-base",
                                        children: "— Rearranging the chapters so concepts could flow into one another."
                                    }), s.jsx("li", {
                                        className: " mb-4 text-base",
                                        children: "— Renaming of chapters for clarity."
                                    }), s.jsx("li", {
                                        className: " mb-4 text-base",
                                        children: "— Lots of necessary deletions."
                                    }), s.jsx("li", {
                                        className: " mb-4 text-base",
                                        children: "— and ensuring the book's message rang out."
                                    })]
                                }), s.jsxs("p", {
                                    className: "",
                                    children: ["It was like clearing away so much debris to unveil the diamond beneath. ", s.jsx("br", {}), " At the end of my editing, my client was also glad the manuscript hadn't been published in its former state. ", s.jsx("br", {}), " When you need your manuscript to shine—saying precisely what you intended it to say—please send me a message. I'm an editor that can do just that."]
                                })]
                            })
                        })]
                    })
                }), s.jsx("div", {
                    className: "bg sm:grid place-content-end mb-auto xx:hidden",
                    children: s.jsx("div", {
                        style: {
                            boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                            background: 'url("https://i.postimg.cc/j2Bx6zxf/20240218-134232.jpg") no-repeat center center/cover'
                        },
                        className: "img1  sm:w-[24rem] sm:h-[24rem]  lg:w-[32rem] lg:h-[32rem] rounded-lg"
                    })
                })]
            }), s.jsxs("div", {
                id: "a-gift-to-deborah",
                className: " lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-extraClr dark:bg-[#111] ",
                children: [s.jsx("div", {
                    className: "   md:px-0  grid  place-self-center",
                    children: s.jsxs("div", {
                        className: "mb-0 lg:pr-8 xl:pr-6 lg:text-left p-6",
                        children: [s.jsx("h2", {
                            className: "mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center",
                            children: s.jsx("strong", {
                                children: "A Gift To Deborah"
                            })
                        }), s.jsx("div", {
                            className: "bg xx:grid place-content-center sm:hidden",
                            children: s.jsx("div", {
                                style: {
                                    boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                                    background: 'url("https://i.postimg.cc/wjLvVbsj/20240218-134019.jpg") no-repeat center center/cover'
                                },
                                className: "img1  ss:w-[32rem]  sm:h-[40rem] xs:w-[24rem] xs:h-[32rem]  xx:w-[20rem] xx:h-[24rem]  my-8  sm:w-0 rounded-lg"
                            })
                        }), s.jsx("div", {
                            className: "",
                            children: s.jsxs("p", {
                                className: "mb-6 font-medium xx:text-base  lg:text-lg text-secondary  dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: [s.jsx("p", {
                                    className: "mb-4",
                                    children: "Precious Ayomikun carries the girl child in her thoughts — in things she does, with the projects she embarks on, and the places she volunteers in."
                                }), s.jsx("p", {
                                    className: "mb-4",
                                    children: "So when she decided to write a book for young women, a book detailing her own stroll through the corridors of depression and inadequacy, I was glad (oh so glad) to collaborate with her & make it the sincere, vulnerable, I-understand-what-it's-like letter she wanted to write."
                                }), s.jsx("p", {
                                    className: "",
                                    children: "Wherever a young woman finds this book, it'll be a gift indeed."
                                })]
                            })
                        })]
                    })
                }), s.jsx("div", {
                    className: "bg sm:grid place-content-end mb-auto xx:hidden",
                    children: s.jsx("div", {
                        style: {
                            boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                            background: 'url("https://i.postimg.cc/wjLvVbsj/20240218-134019.jpg") no-repeat center center/cover'
                        },
                        className: "img1  sm:w-[24rem] sm:h-[24rem]  lg:w-[32rem] lg:h-[32rem] rounded-lg"
                    })
                })]
            }), s.jsxs("div", {
                id: "envision",
                className: " lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-primary dark:bg-secondary ",
                children: [s.jsx("div", {
                    className: "bg sm:grid place-content-start mb-auto xx:hidden",
                    children: s.jsx("div", {
                        style: {
                            boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                            background: 'url("https://i.postimg.cc/LsVsdYDd/20240218-134117.jpg") no-repeat center center/cover'
                        },
                        className: "img1  sm:w-[24rem] sm:h-[24rem]  lg:w-[32rem] lg:h-[32rem] rounded-lg"
                    })
                }), s.jsx("div", {
                    className: "   md:px-0  grid  place-self-center",
                    children: s.jsxs("div", {
                        className: "mb-0 lg:pr-8 xl:pr-6 lg:text-left p-6",
                        children: [s.jsx("h2", {
                            className: "mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center",
                            children: s.jsx("strong", {
                                children: "Envision"
                            })
                        }), s.jsx("div", {
                            className: "bg xx:grid place-content-center sm:hidden",
                            children: s.jsx("div", {
                                style: {
                                    boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                                    background: 'url("https://i.postimg.cc/LsVsdYDd/20240218-134117.jpg") no-repeat center center/cover'
                                },
                                className: "img1  ss:w-[32rem]  sm:h-[40rem] xs:w-[24rem] xs:h-[32rem]  xx:w-[20rem] xx:h-[24rem]  my-8  sm:w-0 rounded-lg"
                            })
                        }), s.jsx("div", {
                            className: "",
                            children: s.jsxs("p", {
                                className: "mb-6 font-medium xx:text-base  lg:text-lg text-secondary  dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: [s.jsx("p", {
                                    className: "mb-4",
                                    children: "This Nigerian-born medical doctor could have been prescribing medication only for the body, but she decided to craft medicine for the mind as well."
                                }), s.jsx("p", {
                                    className: "mb-4",
                                    children: "Doctor Oyindamola wrote a short, precise, and sharp book targeted at the ones who want to live purposefully. And she needed a ghostwriter to collaborate with her on it, to make the book the pointed, read-it-all-in-one-sitting force it now is."
                                }), s.jsx("p", {
                                    className: "",
                                    children: "Glad to have aided her quest!"
                                })]
                            })
                        })]
                    })
                })]
            }), s.jsxs("div", {
                id: "on-point",
                className: " lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-primary dark:bg-secondary ",
                children: [s.jsx("div", {
                    className: "bg sm:grid place-content-start mb-auto xx:hidden",
                    children: s.jsx("div", {
                        style: {
                            boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                            background: 'url("https://i.postimg.cc/kMHgddQ5/20240218-134712.jpg") no-repeat center center/cover'
                        },
                        className: "img1  sm:w-[24rem] sm:h-[24rem]  lg:w-[32rem] lg:h-[32rem] rounded-lg"
                    })
                }), s.jsx("div", {
                    className: "   md:px-0  grid  place-self-center",
                    children: s.jsxs("div", {
                        className: "mb-0 lg:pr-8 xl:pr-6 lg:text-left p-6",
                        children: [s.jsx("h2", {
                            className: "mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center",
                            children: s.jsx("strong", {
                                children: "On Point"
                            })
                        }), s.jsx("div", {
                            className: "bg xx:grid place-content-center sm:hidden",
                            children: s.jsx("div", {
                                style: {
                                    boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                                    background: 'url("https://i.postimg.cc/kMHgddQ5/20240218-134712.jpg") no-repeat center center/cover'
                                },
                                className: "img1  ss:w-[32rem]  sm:h-[40rem] xs:w-[24rem] xs:h-[32rem]  xx:w-[20rem] xx:h-[24rem]  my-8  sm:w-0 rounded-lg"
                            })
                        }), s.jsx("div", {
                            className: "",
                            children: s.jsxs("p", {
                                className: "mb-6 font-medium xx:text-base  lg:text-lg text-secondary  dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: [s.jsx("p", {
                                    className: "mb-4",
                                    children: "Days after its author released this pointed missive into the world, the number of downloads and reviews assured me afresh of what I'd known since I saw the manuscript: Olamide wrote a necessary book."
                                }), s.jsx("p", {
                                    className: "mb-4",
                                    children: "It was short, precise, and put goal setting in a different, blessed light. I was honored to help make On Point as rich as it was."
                                }), s.jsx("p", {
                                    className: "",
                                    children: "And Olamide says it's only the brief instalment of what's to come. A bigger book will soon be here. Cheers to that!"
                                })]
                            })
                        })]
                    })
                })]
            }), s.jsxs("div", {
                id: "billionaire-codes",
                className: " lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-extraClr dark:bg-[#111] ",
                children: [s.jsx("div", {
                    className: "   md:px-0  grid  place-self-center",
                    children: s.jsxs("div", {
                        className: "mb-0 lg:pr-8 xl:pr-6 lg:text-left p-6",
                        children: [s.jsx("h2", {
                            className: "mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center",
                            children: s.jsx("strong", {
                                children: "Billionaire Codes"
                            })
                        }), s.jsx("div", {
                            className: "bg xx:grid place-content-center sm:hidden",
                            children: s.jsx("div", {
                                style: {
                                    boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                                    background: 'url("https://i.postimg.cc/xCxTCwBt/20240218-134201.jpg") no-repeat center center/cover'
                                },
                                className: "img1  ss:w-[32rem]  sm:h-[40rem] xs:w-[24rem] xs:h-[32rem]  xx:w-[20rem] xx:h-[24rem]  my-8  sm:w-0 rounded-lg"
                            })
                        }), s.jsx("div", {
                            className: "",
                            children: s.jsx("p", {
                                className: "mb-6 font-medium xx:text-base  lg:text-lg text-secondary  dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: s.jsx("p", {
                                    className: "mb-4",
                                    children: "The personnel in charge of getting Dr. Stephen Akintayo's Billionaire Codes edited sought an editor who could cut out repetitions, tighten every chapter, and sharpen the message. It was my honor to serve as the editor they needed."
                                })
                            })
                        })]
                    })
                }), s.jsx("div", {
                    className: "bg sm:grid place-content-end mb-auto xx:hidden",
                    children: s.jsx("div", {
                        style: {
                            boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                            background: 'url("https://i.postimg.cc/xCxTCwBt/20240218-134201.jpg") no-repeat center center/cover'
                        },
                        className: "img1  sm:w-[24rem] sm:h-[24rem]  lg:w-[32rem] lg:h-[32rem] rounded-lg"
                    })
                })]
            }), s.jsxs("div", {
                id: "7-battles-every-trader-must-figh-to-win",
                className: " lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-extraClr dark:bg-[#111] ",
                children: [s.jsx("div", {
                    className: "   md:px-0  grid  place-self-center",
                    children: s.jsxs("div", {
                        className: "mb-0 lg:pr-8 xl:pr-6 lg:text-left p-6",
                        children: [s.jsx("h2", {
                            className: "mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center",
                            children: s.jsx("strong", {
                                children: "7 Battles Every Trader Must Fight to Win"
                            })
                        }), s.jsx("div", {
                            className: "bg xx:grid place-content-center sm:hidden",
                            children: s.jsx("div", {
                                style: {
                                    boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                                    background: 'url("https://i.postimg.cc/kg0R6XyD/20240218_134317.jpg") no-repeat center center/cover'
                                },
                                className: "img1  ss:w-[32rem]  sm:h-[40rem] xs:w-[24rem] xs:h-[32rem]  xx:w-[20rem] xx:h-[24rem]  my-8  sm:w-0 rounded-lg"
                            })
                        }), s.jsx("div", {
                            className: "",
                            children: s.jsx("p", {
                                className: "mb-6 font-medium xx:text-base  lg:text-lg text-secondary  dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: s.jsx("p", {
                                    className: "mb-4",
                                    children: "A cryptocurrency expert, a coach to many, Mayowa Owolabi certainly knows the struggles of traders. And when he needed the videos from his coaching sessions transcribed into this book, I was glad to make the dream a hardcover reality."
                                })
                            })
                        })]
                    })
                }), s.jsx("div", {
                    className: "bg sm:grid place-content-end mb-auto xx:hidden",
                    children: s.jsx("div", {
                        style: {
                            boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                            background: 'url("https://i.postimg.cc/kg0R6XyD/20240218_134317.jpg") no-repeat center center/cover'
                        },
                        className: "img1  sm:w-[24rem] sm:h-[24rem]  lg:w-[32rem] lg:h-[32rem] rounded-lg"
                    })
                })]
            }), s.jsxs("div", {
                id: "100-money-mistakes-people-make",
                className: " lg:py-20 grid sm:grid-cols-2 gap-4 lg:px-24 sm:px-12 bg-primary dark:bg-secondary ",
                children: [s.jsx("div", {
                    className: "bg sm:grid place-content-start mb-auto xx:hidden",
                    children: s.jsx("div", {
                        style: {
                            boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                            background: 'url("https://i.postimg.cc/yN0gF4fj/20240304_104847.jpg") no-repeat center center/cover'
                        },
                        className: "img1  sm:w-[24rem] sm:h-[32rem]  lg:w-[32rem] lg:h-[40rem] rounded-lg"
                    })
                }), s.jsx("div", {
                    className: "   md:px-0  grid  place-self-center",
                    children: s.jsxs("div", {
                        className: "mb-0 lg:pr-8 xl:pr-6 lg:text-left p-6",
                        children: [s.jsx("h2", {
                            className: "mb-12 font-sans text-3xl lg:text-left font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:text-center",
                            children: s.jsx("strong", {
                                children: "100 Money Mistakes People Make "
                            })
                        }), s.jsx("div", {
                            className: "bg xx:grid place-content-center sm:hidden",
                            children: s.jsx("div", {
                                style: {
                                    boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)",
                                    background: 'url("https://i.postimg.cc/yN0gF4fj/20240304_104847.jpg") no-repeat center center/cover'
                                },
                                className: "img1  ss:w-[32rem]  sm:h-[40rem] xs:w-[24rem] xs:h-[32rem]  xx:w-[20rem] xx:h-[24rem]  my-8  sm:w-0 rounded-lg"
                            })
                        }), s.jsx("div", {
                            className: "",
                            children: s.jsxs("p", {
                                className: "mb-6 font-medium xx:text-base  lg:text-lg text-secondary  dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: [s.jsx("p", {
                                    className: "mb-4",
                                    children: "This project started as a series of coaching sessions. Then Dr. Mayowa Owolabi decided to share bullet points of a few money mistakes on social media. The demand grew so large that he decided to compile the coaching sessions into a book."
                                }), s.jsx("p", {
                                    className: "mb-4",
                                    children: "That's where I came in. I transcribed those video sessions into this very book. Now, his teachings reach more people."
                                }), s.jsx("p", {
                                    className: "",
                                    children: "If you could “talk your book” and have someone transcribe your words, would that quicken your journey to authoring that book in your heart?"
                                })]
                            })
                        })]
                    })
                })]
            })]
        }), s.jsx("div", {
            style: {
                cursor: "grab"
            },
            id: "testimonial",
            children: s.jsx("section", {
                className: "py-16 bg-extraClr dark:bg-black xx:px-0  md:px-12",
                children: s.jsx("div", {
                    className: " m-auto  text-secondary dark:text-gray-300 xx:px-2 md:px-12 xl:px-6",
                    children: s.jsx("div", {
                        className: "mb-20 space-y-4 px-0",
                        children: s.jsx(m3, {})
                    })
                })
            })
        }), s.jsx("div", {
            className: "",
            children: s.jsx(Dr, {})
        })]
    })
})
  , D3 = () => s.jsx(s.Fragment, {
    children: s.jsxs("div", {
        id: "service",
        children: [s.jsx("section", {
            className: " hero",
            children: s.jsxs("div", {
                style: {
                    background: 'url("https://i.postimg.cc/K8XNPK0r/Untitled-design-21.jpg") no-repeat center center/cover;'
                },
                className: "grid ss:py-40 xx:py-32 text-center img ss:px-12 xx:px-6 ",
                children: [s.jsx("h1", {
                    className: "sm:text-6xl xx:text-3xl sm:font-extrabold xx:font-bold text-white xx:py-3  ss:py-6",
                    children: "Content Writing"
                }), s.jsx("p", {
                    className: "sm:text-2xl xx:text-xl xx:w-full ss:w-[75%] mx-auto  text-white xx:py-3  ss:py-6 ",
                    children: "You tell me you need content and I ask, “Which kind?” Social media content? Web copies? Newsletters? Blog posts? If you can just tell me what you need, you’ll get it."
                }), s.jsx(z, {
                    to: "https://wa.me/message/DOCQNYXAEPVDH1",
                    children: s.jsx("button", {
                        className: "w-[11rem] py-5 px-7 mx-auto  bg-white h-[4rem] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:text-white before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-lightAccent before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#343434]",
                        children: "CONTACT ME"
                    })
                })]
            })
        }), s.jsxs("section", {
            className: "content-writing py-12",
            children: [s.jsxs("div", {
                className: "  grid sm:grid-cols-2 xx:grid-cols-1 gap-4 xx:px-6 ss:px-12 dark:py-12 bg-white dark:bg-[#111]",
                children: [s.jsx("div", {
                    className: "bg  grid ss:place-content-start",
                    children: s.jsx("div", {
                        style: {
                            boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)"
                        },
                        className: "img lg:w-[32rem] lg:h-[40rem] sm:w-[24rem]  xx:h-[32rem] xx:w-full xx:mb-6 sm:mb-0  rounded-lg"
                    })
                }), s.jsx("div", {
                    className: "pb-20   md:px-0  grid  place-self-center",
                    children: s.jsxs("div", {
                        className: "mb-0 lg:pr-8 xl:pr-6 lg:text-left ",
                        children: [s.jsx("div", {
                            className: " grid place-content-center mx-auto",
                            children: s.jsx(z, {
                                to: "",
                                children: s.jsx("button", {
                                    style: {
                                        boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.35)"
                                    },
                                    className: "relative tracking-wide xx:mx-auto mb-12 ml-6 xx:px-6 ss:px-12 py-4 text-secondary dar text-xl font-bold  overflow-hidden bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0",
                                    children: "CONTENT WRITING"
                                })
                            })
                        }), s.jsxs("div", {
                            className: "",
                            children: [s.jsx("p", {
                                className: "mb-6 font-medium  lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: "Content shouldn't trouble you. Outsource the writing of the newsletter, the blog, the website content, including the existing web content you'd like to edit. Carry on with your key tasks; the content writer will handle the words."
                            }), s.jsx("p", {
                                className: "mb-12 font-medium lg:text-lg text-secondary dark:text-primary lg:text-left md:text-lg md:text-center",
                                children: "Whether in South Africa, down in London, or anywhere in the world, people want to read interesting pieces. So I take the important message you want to get out there and transform it into an interesting piece—the one that keeps the reader reading, the one that clearly communicates the message, the one that gets your reader to where you intended."
                            })]
                        }), s.jsx("div", {
                            className: "mb-10 grid place-content-start  md:mb-16 lg:mb-12",
                            children: s.jsx(z, {
                                to: "https://wa.me/message/DOCQNYXAEPVDH1",
                                children: s.jsx("div", {
                                    className: "btn-two-container ",
                                    children: s.jsx("button", {
                                        className: "text-xl font-extrabold btn-two mt-3 w-[15rem] h-[4rem] ",
                                        children: "SEND ME A MESSAGE"
                                    })
                                })
                            })
                        })]
                    })
                })]
            }), s.jsxs("div", {
                className: "sm:px-12  xx:px-6 mt-12 py-16 mb-12 mx-auto ",
                children: [s.jsx("div", {
                    className: "mb-12 md:mx-auto text-center",
                    children: s.jsx("h2", {
                        className: " pb-6  ss:text-3xl xx:text-2xl font-bold leading-none tracking-tight text-secondary dark:text-primary md:mx-auto",
                        children: "How do I become your content writer?"
                    })
                }), s.jsxs("div", {
                    className: "grid  gap-4 lg:grid-cols-6 sm:grid-cols-3 ss:grid-cols-2",
                    children: [s.jsxs("div", {
                        className: "bg-secondary dark:bg-accent p-6 rounded-lg",
                        children: [s.jsxs("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [s.jsx("p", {
                                className: "text-2xl font-bold text-white",
                                children: "Step 1"
                            }), s.jsx(No, {
                                sx: {
                                    color: "#fff"
                                }
                            })]
                        }), s.jsx("p", {
                            className: " text-white",
                            children: "You send me a message telling me what you want me to write for you. What's the subject? Is it a newsletter? Is it a blog? A landing page? Product description?"
                        })]
                    }), s.jsxs("div", {
                        className: "bg-extraClr p-6 rounded-lg",
                        children: [s.jsxs("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [s.jsx("p", {
                                className: "text-2xl font-bold",
                                children: "Step 2"
                            }), s.jsx(No, {
                                sx: {
                                    color: "#343434"
                                }
                            })]
                        }), s.jsx("p", {
                            className: "text-secondary",
                            children: "A few questions run in-between. If you have samples of the kind of content you want me to create, great. If not, no worries."
                        })]
                    }), s.jsxs("div", {
                        className: "bg-extraClr p-6 rounded-lg",
                        children: [s.jsxs("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [s.jsx("p", {
                                className: "text-2xl font-bold",
                                children: "Step 3"
                            }), s.jsx(No, {
                                sx: {
                                    color: "#343434"
                                }
                            })]
                        }), s.jsx("p", {
                            className: "text-secondary",
                            children: "We settle on a price. This is mostly based on word count."
                        })]
                    }), s.jsxs("div", {
                        className: "bg-extraClr p-6 rounded-lg",
                        children: [s.jsxs("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [s.jsx("p", {
                                className: "text-2xl font-bold",
                                children: "Step 4"
                            }), s.jsx(No, {
                                sx: {
                                    color: "#343434"
                                }
                            })]
                        }), s.jsx("p", {
                            className: "text-secondary",
                            children: "I send you the content."
                        })]
                    }), s.jsxs("div", {
                        className: "bg-extraClr p-6 rounded-lg",
                        children: [s.jsxs("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [s.jsx("p", {
                                className: "text-2xl font-bold",
                                children: "Step 5"
                            }), s.jsx(No, {
                                sx: {
                                    color: "#343434"
                                }
                            })]
                        }), s.jsx("p", {
                            className: "text-secondary",
                            children: "You approve the content or point out the changes you need. They get done."
                        })]
                    }), s.jsxs("div", {
                        className: "bg-extraClr p-6 rounded-lg",
                        children: [s.jsxs("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [s.jsx("p", {
                                className: "text-2xl font-bold",
                                children: "Success"
                            }), s.jsx(Ij, {
                                sx: {
                                    color: "#343434"
                                }
                            })]
                        }), s.jsx("p", {
                            className: "text-secondary",
                            children: "We do it again and again."
                        })]
                    })]
                }), s.jsx("div", {
                    className: "  grid place-content-center  ss:mt-12 xx:mt-6",
                    children: s.jsx(z, {
                        to: "https://wa.me/message/DOCQNYXAEPVDH1",
                        children: s.jsx("div", {
                            className: "btn-two-container ",
                            children: s.jsx("button", {
                                className: "text-xl xx:text-lg font-extrabold btn-two mt-3 w-[16rem] h-[4rem]",
                                children: "SEND ME A MESSAGE"
                            })
                        })
                    })
                })]
            })]
        }), s.jsx(ah, {}), s.jsx("div", {
            className: "",
            children: s.jsx(Dr, {})
        })]
    })
})
  , W3 = () => s.jsx("div", {
    style: {
        cursor: "pointer"
    },
    id: "section2",
    children: s.jsx("section", {
        id: "mySlider",
        className: "py-16 ss:px-12 xs:px-6 xx:px-2",
        children: s.jsxs("div", {
            className: "relative",
            children: [s.jsx("div", {
                className: "",
                children: s.jsx("h2", {
                    className: "text-center text-2xl mb-12 font-bold text-gray-800 dark:text-white md:text-4xl",
                    children: "Testimonial From Students"
                })
            }), s.jsxs("div", {
                id: " ",
                children: [s.jsxs("div", {
                    id: " Sarah-Sesi-Godonu",
                    className: "relative p-4 ",
                    children: [s.jsx("div", {
                        className: "flex gap-4",
                        children: s.jsxs("div", {
                            className: "mb-2",
                            children: [s.jsx("h6", {
                                className: "text-secondary text-xl font-semibold dark:text-primary",
                                children: "Sarah-Sesi-Godonu"
                            }), s.jsx("p", {
                                className: "text-secondary dark:text-primary",
                                children: "..."
                            })]
                        })
                    }), s.jsxs("div", {
                        className: "text-secondary dark:text-primary",
                        children: [s.jsx("p", {
                            className: "mb-4",
                            children: '"I never knew I would need to sharpen my writing skills. It had never crossed my mind to take a writing class because I thought it was for only aspiring writers. That fateful week, Coach Brown reached out to me, because she felt led to send the information to me when the scholarship application was ongoing. I searched my heart, and I remembered that that same week I was to help my sister reply to her client. I noticed her choice of words and searched my heart again. Then I found out that I really needed to sharpen my writing and communication skills.'
                        }), s.jsx("p", {
                            className: "mb-4",
                            children: "The Course began February 12, 2024. My expectations were to learn the Art, Style and Discipline of writings that can pass an accurate and captivating information to my clients and mentees. And also to be able to communicate better with people, learning how to use the right expressions from my mind and thoughts. And also stun my world with beautiful write-ups. After the course: March 9, 2024. When she started this class with us, she began to introduce us to the elements of writing a story."
                        }), s.jsxs("p", {
                            className: "mb-4",
                            children: [" ", "From our Audience, to Attention, to Focus, to Emotions, Illustrations, Relatability, Finding a story, SMS method, CTA. Then she gave us submissions alongside to help us practice. At a point when I saw the submissions, I would faint and wake up again encouraging myself that I needed this skill. 😂 I am into the Fashion Business. And I discovered that this class was helping me also in paying attention to intrinsic details of my clients’ preferences. So, as the classes went on, I found out that it was helping me also to pay close attention to sketches and shapes."]
                        }), s.jsx("p", {
                            className: "mb-4",
                            children: "I know this has nothing to do with write-ups, but it did something to my sight. Along the line, I discovered that I used to have one passion that had been discarded for a long time — to write books and share my life experiences with stories. As we went deeper in the classes, the passion came back. Especially the day we were taught about 'Emotions'. There's one particular line I hold dearly from this class: Inside you is the most authentic story no one else can write. So I have decided not to hold all of these stories back to myself. No one is ever going to hear them until I write them out."
                        }), s.jsxs("p", {
                            className: "mb-4",
                            children: [" ", "When we started our LIRI journey, I realized how bad my sentence construction was. Thank God! I first wrote the chapter by pen in my book, then I typed it again. I knew it was a tedious work for me, but I had to do it that way. Because I know it will improve my writing. And it actually did! Doing my resubmissions, my eyes were following all the wrong things I had been doing in my write-ups, especially my punctuation marks. It was so bad. But now it has changed."]
                        }), s.jsx("p", {
                            className: "mb-4",
                            children: `Talking about being able to make write-ups that can stun my world, the cheat code I have been using for any write-up task is just to pay attention to the events around me. Writing it the way it played out! No emotions held back. I've found out that every day is a story! Thank you, Coach Brown Patience, for introducing me into this class. Thank you for pouring your all to see that we all attained the goals for which we signed up for this class. And not to discard this, thank you for being patient with us all.“Come and take all my flowers in the garden” like you normally say.",`
                        })]
                    })]
                }), s.jsx("div", {
                    className: "border-t-accent border-t-8 border-dotted xs:w-[10%] xx:w-[5%] ss:my-12 xx:my-6 mx-auto h-0"
                }), s.jsxs("div", {
                    id: " Bukola-Adewuyi.",
                    className: "relative p-4",
                    children: [s.jsx("div", {
                        className: "flex gap-4",
                        children: s.jsxs("div", {
                            className: "mb-2",
                            children: [s.jsx("h6", {
                                className: "text-secondary text-xl font-semibold dark:text-primary",
                                children: "Bukola Adewuyi."
                            }), s.jsx("p", {
                                className: "text-secondary dark:text-primary",
                                children: "..."
                            })]
                        })
                    }), s.jsxs("div", {
                        className: "text-secondary dark:text-primary",
                        children: [s.jsx("p", {
                            className: "mb-4",
                            children: `"The course began Feb 12, 2024. My expectation was that the class will take me a step further in fulfilling God's plan for my life by making me a great story teller. After the course: 19th April, 2024. I make bold to see that my expectations have been met and surpassed.`
                        }), s.jsx("p", {
                            className: "mb-4",
                            children: `I say this because not only have I learnt to be a great storyteller, I've also been taught to *believe* in me and my message. Before I took the class, I was struggling with putting out the things I was writing. I just didn't see the need to share them with anyone. But now I know better. I've learnt that the world needs to hear the message I have to share. I've learnt to share my message, with courage.",`
                        })]
                    })]
                }), s.jsx("div", {
                    className: "border-t-accent border-t-8 border-dotted xs:w-[10%] xx:w-[5%] ss:my-12 xx:my-6 mx-auto h-0"
                }), s.jsxs("div", {
                    id: " Olamilekan-Adenus",
                    className: "relative p-4",
                    children: [s.jsx("div", {
                        className: "flex gap-4",
                        children: s.jsxs("div", {
                            className: "mb-2",
                            children: [s.jsx("h6", {
                                className: "text-secondary text-xl font-semibold dark:text-primary",
                                children: "Olamilekan Adenus"
                            }), s.jsx("p", {
                                className: "text-secondary dark:text-primary",
                                children: "..."
                            })]
                        })
                    }), s.jsxs("div", {
                        className: "text-secondary dark:text-primary",
                        children: [s.jsx("p", {
                            className: "mb-4",
                            children: `"The Course began February 12, 2024. And I was expecting to learn how to effectively pen down all that my mind saw, pondered, and reflected upon. I had no idea what you would be teaching us when I started this course—except that I should know how to write compelling stories in the end. It's April 15.`
                        }), s.jsx("p", {
                            className: "mb-4",
                            children: "And I've learnt so much that I now feel confident when writing—although the impersonating Lekan occasionally resurfaces. But I feel different. I feel like a writer. I'm beginning to think more like a writer. And henceforth, I won't just write. But I'll pay attention to what I write: my emotions; my choice of illustrations; my punctuations; my paragraphs."
                        }), s.jsx("p", {
                            className: "mb-4",
                            children: `I'll also be more observant. And with more deliberate practice, and with time, I'll hone this art. I'll be better at it. Like you, I'd also inspire others. I'd be very good at this thing.So, yes! This course has served me well. Even beyond my expectations. And I have you to thank for that.",`
                        })]
                    })]
                }), s.jsx("div", {
                    className: "border-t-accent border-t-8 border-dotted xs:w-[10%] xx:w-[5%] ss:my-12 xx:my-6 mx-auto h-0"
                }), s.jsxs("div", {
                    id: " Mercy-Adegbenro.",
                    className: "relative p-4",
                    children: [s.jsx("div", {
                        className: "flex gap-4",
                        children: s.jsxs("div", {
                            className: "mb-2",
                            children: [s.jsx("h6", {
                                className: "text-secondary text-xl font-semibold dark:text-primary",
                                children: "Mercy Adegbenro."
                            }), s.jsx("p", {
                                className: "text-secondary dark:text-primary",
                                children: "..."
                            })]
                        })
                    }), s.jsxs("div", {
                        className: "text-secondary dark:text-primary",
                        children: [s.jsx("p", {
                            className: "mb-4",
                            children: '"The course began February 12, 2024. My expectation was to be able to express myself better through writing and also that it reflects in my oral communication. After the course: March 9, 2024. I have surpassed my expectations.'
                        }), s.jsx("p", {
                            className: "mb-4",
                            children: "Coach did not stop at helping me express myself better through writing but broke things down and made me understand why I am writing the story, who my audience is, the feelings and emotions put into writing, what makes the story catchy and keeps the reader going and so on."
                        }), s.jsx("p", {
                            className: "mb-4",
                            children: 'The depth of the lectures would definitely keep me going for a long time. A big shout out to Coach Patience and my one and only partner, Sarah. Thanks for the support so far, and I do hope to write contents that will make you a proud Coach in the nearest future. Gracias.",'
                        })]
                    })]
                }), s.jsx("div", {
                    className: "border-t-accent border-t-8 border-dotted xs:w-[10%] xx:w-[5%] ss:my-12 xx:my-6 mx-auto h-0"
                }), s.jsxs("div", {
                    id: " Timilehin-Oyinloye.",
                    className: "relative p-4",
                    children: [s.jsx("div", {
                        className: "flex gap-4",
                        children: s.jsxs("div", {
                            className: "mb-2",
                            children: [s.jsx("h6", {
                                className: "text-secondary text-xl font-semibold dark:text-primary",
                                children: "Timilehin Oyinloye."
                            }), s.jsx("p", {
                                className: "text-secondary dark:text-primary",
                                children: "..."
                            })]
                        })
                    }), s.jsxs("div", {
                        className: "text-secondary dark:text-primary",
                        children: [s.jsx("p", {
                            className: "mb-4",
                            children: `"April 30, 2023. At first, when I enrolled into this class, I didn’t really have any purpose of joining then. I knew I was lacking in one aspect or the other in terms of punctuations and the rest. Thank God, now I can say that I'm better. Before I joined this class, I knew I needed to work on myself on the use of exclamation marks.`
                        }), s.jsx("p", {
                            className: "mb-4",
                            children: "So I was actually looking for a way I could learn it. Thank God for Aanu. Though, by the time she was telling me about this class, I wasn't really getting the full concept of the course, but I saw it as a way to improve myself. So I joined since I knew that I'd gain something plus keep myself busy and add value to my life during my first semester holiday."
                        }), s.jsx("p", {
                            className: "mb-4",
                            children: `When I joined this class, you were able to open my eyes to the use of commas, letting me know the places where I was using them unnecessarily. Then you taught me the use of exclamation marks. So I can say that I'm better at the use of exclamation marks and also the use of commas.",`
                        })]
                    })]
                }), s.jsx("div", {
                    className: "border-t-accent border-t-8 border-dotted xs:w-[10%] xx:w-[5%] ss:my-12 xx:my-6 mx-auto h-0"
                }), s.jsxs("div", {
                    id: " Surprise-Zihlavski",
                    className: "relative p-4",
                    children: [s.jsx("div", {
                        className: "flex gap-4",
                        children: s.jsxs("div", {
                            className: "mb-2",
                            children: [s.jsx("h6", {
                                className: "text-secondary text-xl font-semibold dark:text-primary",
                                children: "Surprise Zihlavski"
                            }), s.jsx("p", {
                                className: "text-secondary dark:text-primary",
                                children: "..."
                            })]
                        })
                    }), s.jsx("div", {
                        className: "text-secondary dark:text-primary",
                        children: s.jsx("p", {
                            className: "mb-4",
                            children: '"By the end of the course, I had hoped to gather enough courage to pursue my dream of becoming an author. I am happy to say that I have achieved more than that. Now, I not only have the courage but also the knowledge to begin my journey. I used to believe I lacked the creativity to write a fictional book, but now, with all I have learned, the only limit is myself. ",'
                        })
                    })]
                }), s.jsx("div", {
                    className: "border-t-accent border-t-8 border-dotted xs:w-[10%] xx:w-[5%] ss:my-12 xx:my-6 mx-auto h-0"
                }), s.jsxs("div", {
                    id: " Kehinde-Adedoyin.",
                    className: "relative p-4",
                    children: [s.jsx("div", {
                        className: "flex gap-4",
                        children: s.jsxs("div", {
                            className: "mb-2",
                            children: [s.jsx("h6", {
                                className: "text-secondary text-xl font-semibold dark:text-primary",
                                children: "Kehinde Adedoyin."
                            }), s.jsx("p", {
                                className: "text-secondary dark:text-primary",
                                children: "..."
                            })]
                        })
                    }), s.jsxs("div", {
                        className: "text-secondary dark:text-primary",
                        children: [s.jsx("p", {
                            className: "mb-4",
                            children: `"The course began February 12, 2024. My expectations was to be able to express my thoughts through writing freely, appropriately and effectively. After the course: March 9, 2024. Wow! This experience has exceeded all my expectations—it's been truly amazing! Rewriting Priye has opened my eyes to the importance of punctuation and paragraphing. I've gained extensive knowledge in writing and editing. The class has also helped me enhance my writing skills.`
                        }), s.jsx("p", {
                            className: "mb-4",
                            children: `Now, whenever I write or respond to messages, I put everything I've learned into practice. I'm able to clearly express my thoughts in writing while keeping in mind the audience I'm addressing. These past few weeks have been incredible, and I've noticed a significant improvement in my writing abilities.Thank you, dear coach, for instilling in us such valuable wisdom and insight. God bless you!",`
                        })]
                    })]
                }), s.jsx("div", {
                    className: "border-t-accent border-t-8 border-dotted xs:w-[10%] xx:w-[5%] ss:my-12 xx:my-6 mx-auto h-0"
                }), s.jsxs("div", {
                    id: " Precious-Emakwu",
                    className: "relative p-4",
                    children: [s.jsx("div", {
                        className: "flex gap-4",
                        children: s.jsxs("div", {
                            className: "mb-2",
                            children: [s.jsx("h6", {
                                className: "text-secondary text-xl font-semibold dark:text-primary",
                                children: "Precious Emakwu"
                            }), s.jsx("p", {
                                className: "text-secondary dark:text-primary",
                                children: "..."
                            })]
                        })
                    }), s.jsxs("div", {
                        className: "text-secondary dark:text-primary",
                        children: [s.jsx("p", {
                            className: "mb-4",
                            children: `"At the beginning of the class, I remember how I mentioned that I expected to get better at writing. As of today, I must say that I'm getting better because the class taught me the power of storytelling. Storytelling is that powerful to get your readers to feel the emotions you felt while writing or the emotions you want them to feel(that's if you want them to 'feel' those emotions). I understood vividly the power of telling a story to capture the attention of your audience.`
                        }), s.jsx("p", {
                            className: "mb-4",
                            children: `Although one could have written based on what the person knows how to but to get consistent, I understood that there's always inspiration to write. It's not far-fetched. Inspiration is all around me. Lastly, as compelling as the class and stories being shared during the class have been, I've started paying rapt attention to punctuation. As every element of writing does matter, punctuations matter too.",`
                        })]
                    })]
                }), s.jsx("div", {
                    className: "border-t-accent border-t-8 border-dotted xs:w-[10%] xx:w-[5%] ss:my-12 xx:my-6 mx-auto h-0"
                }), s.jsxs("div", {
                    id: " Chimamanda-Okoye",
                    className: "relative p-4",
                    children: [s.jsx("div", {
                        className: "flex gap-4",
                        children: s.jsxs("div", {
                            className: "mb-2",
                            children: [s.jsx("h6", {
                                className: "text-secondary text-xl font-semibold dark:text-primary",
                                children: "Chimamanda Okoye"
                            }), s.jsx("p", {
                                className: "text-secondary dark:text-primary",
                                children: "..."
                            })]
                        })
                    }), s.jsxs("div", {
                        className: "text-secondary dark:text-primary",
                        children: [s.jsx("p", {
                            className: "mb-4",
                            children: '"My expectations for the class that started on October 2nd, 2023, was to be a good writer, to know my audience, and to know more about how to use punctuation marks when writing. After the class which ended on October 28, now I can say this course exceeded my expectations.'
                        }), s.jsx("p", {
                            className: "mb-4",
                            children: 'I was able to learn how to understand my audience and the way they feel. I was able to learn how to use proper punctuation marks and how to use paragraph accordingly. I learnt a lot of things from the class. Thank you Brown Patience for hosting this class.",'
                        })]
                    })]
                }), s.jsx("div", {
                    className: "border-t-accent border-t-8 border-dotted xs:w-[10%] xx:w-[5%] ss:my-12 xx:my-6 mx-auto h-0"
                }), s.jsxs("div", {
                    id: " Sharon-Akintade",
                    className: "relative p-4",
                    children: [s.jsx("div", {
                        className: "flex gap-4",
                        children: s.jsxs("div", {
                            className: "mb-2",
                            children: [s.jsx("h6", {
                                className: "text-secondary text-xl font-semibold dark:text-primary",
                                children: "Sharon Akintade"
                            }), s.jsx("p", {
                                className: "text-secondary dark:text-primary",
                                children: "..."
                            })]
                        })
                    }), s.jsxs("div", {
                        className: "text-secondary dark:text-primary",
                        children: [s.jsx("p", {
                            className: "mb-4",
                            children: '"On Saturday, September 30, 2023, we were asked our expectations of the course and what we hoped to achieve, and here was my response- The reason I signed up for “The Art of Writing Compelling Stories” is to be able to deliver the plenty things in my head in a way people understand.'
                        }), s.jsx("p", {
                            className: "mb-4",
                            children: `After the course, which ended 28th October 2023, I can say this course exceeded my expectations. I've gotten an understanding of how to tailor a particular message to different audiences without losing the essence of the message. Definitely got more value than expected. Thank you, Coach Patience.",`
                        })]
                    })]
                }), s.jsx("div", {
                    className: "border-t-accent border-t-8 border-dotted xs:w-[10%] xx:w-[5%] ss:my-12 xx:my-6 mx-auto h-0"
                }), s.jsxs("div", {
                    id: " Onyinyechi-CeeCee",
                    className: "relative p-4",
                    children: [s.jsx("div", {
                        className: "flex gap-4",
                        children: s.jsxs("div", {
                            className: "mb-2",
                            children: [s.jsx("h6", {
                                className: "text-secondary text-xl font-semibold dark:text-primary",
                                children: "Onyinyechi CeeCee"
                            }), s.jsx("p", {
                                className: "text-secondary dark:text-primary",
                                children: "..."
                            })]
                        })
                    }), s.jsxs("div", {
                        className: "text-secondary dark:text-primary",
                        children: [s.jsx("p", {
                            className: "mb-4",
                            children: '"The Course began October 2, 2023. My expectations was to be able to write exceptionally about whatever I set my mind to. After the course: October 28, 2023. Ah! I have met my expectations. The rigorous training and consistent writing, all through the period of training made it possible. It was indeed a value packed training.'
                        }), s.jsx("p", {
                            className: "mb-4",
                            children: `There was a mind shift, which made it very much easier. I've learnt a lot and I intend to keep practicing, to be the best of myself. You have showed me how to take this game to the next level. And that, I intend to do. I can never appreciate you enough, coach. Thank you so much and God bless you abundantly.",`
                        })]
                    })]
                }), s.jsx("div", {
                    className: "border-t-accent border-t-8 border-dotted xs:w-[10%] xx:w-[5%] ss:my-12 xx:my-6 mx-auto h-0"
                }), s.jsxs("div", {
                    id: " Emmanuel-Orimogunje",
                    className: "relative p-4",
                    children: [s.jsx("div", {
                        className: "flex gap-4",
                        children: s.jsxs("div", {
                            className: "mb-2",
                            children: [s.jsx("h6", {
                                className: "text-secondary text-xl font-semibold dark:text-primary",
                                children: "Emmanuel Orimogunje"
                            }), s.jsx("p", {
                                className: "text-secondary dark:text-primary",
                                children: "..."
                            })]
                        })
                    }), s.jsxs("div", {
                        className: "text-secondary dark:text-primary",
                        children: [s.jsx("p", {
                            className: "mb-4",
                            children: "“The Course began October 2, 2023. My expectations were to:"
                        }), s.jsx("p", {
                            className: "mb-4",
                            children: s.jsxs("ul", {
                                className: "",
                                children: [s.jsx("li", {
                                    children: "1. Be able to get the Gospel message across more effectively and report the impact of my NGO using relatable stories."
                                }), s.jsx("p", {
                                    className: "my-4",
                                    children: "— To be very honest, a lot of things have changed for me concerning my job. Even my boss noticed it and I had to confirm to him that I’d signed up for a storytelling class. Reporting now feels intimate because I use stories."
                                }), s.jsx("li", {
                                    children: "2. The second reason I signed up was to be able to build a community of friends, telling them stories that keep our hearts locked together."
                                })]
                            })
                        }), s.jsx("p", {
                            className: "mb-4",
                            children: "— Somehow, as a result of the class, storytelling has found its way into every of my conversations. Now I’m sensitive to my environment; I pay attention to my experiences; and I share them with my WhatsApp community using stories. I am super charged to get back to writing letters to my email community again.”"
                        })]
                    })]
                }), s.jsx("div", {
                    className: "border-t-accent border-t-8 border-dotted xs:w-[10%] xx:w-[5%] ss:my-12 xx:my-6 mx-auto h-0"
                }), s.jsxs("div", {
                    id: " Lily-Josiah",
                    className: "relative p-4",
                    children: [s.jsx("div", {
                        className: "flex gap-4",
                        children: s.jsxs("div", {
                            className: "mb-2",
                            children: [s.jsx("h6", {
                                className: "text-secondary text-xl font-semibold dark:text-primary",
                                children: "Lily-Josiah"
                            }), s.jsx("p", {
                                className: "text-secondary dark:text-primary",
                                children: "..."
                            })]
                        })
                    }), s.jsxs("div", {
                        className: "text-secondary dark:text-primary",
                        children: [s.jsxs("p", {
                            className: "mb-4",
                            children: ['"The course began October 2, 2023 My expectations were to:', s.jsxs("ul", {
                                className: "my-2 list-decimal ml-6",
                                children: [s.jsx("li", {
                                    className: "my-2",
                                    children: "Become more creative and expressive in my writing. The course had shown me many ways to do that and be more."
                                }), s.jsx("li", {
                                    className: "",
                                    children: "Sharpen my writing skills and learn more."
                                })]
                            })]
                        }), s.jsx("p", {
                            className: "mb-4",
                            children: 'The course has not only refreshed me on what good writing and storytelling, it has also shown me valuable emphases that I need to make in order to communicate effectively through my writing. The course has been revelatory, in-depth, comprehensive and thorough. It speaks diligence and encourages me to be a diligent writer.",'
                        })]
                    })]
                }), s.jsx("div", {
                    className: "border-t-accent border-t-8 border-dotted xs:w-[10%] xx:w-[5%] ss:my-12 xx:my-6 mx-auto h-0"
                }), s.jsxs("div", {
                    id: " Oreoluwa-Dawodu",
                    className: "relative p-4",
                    children: [s.jsx("div", {
                        className: "flex gap-4",
                        children: s.jsxs("div", {
                            className: "mb-2",
                            children: [s.jsx("h6", {
                                className: "text-secondary text-xl font-semibold dark:text-primary",
                                children: "Oreoluwa Dawodu"
                            }), s.jsx("p", {
                                className: "text-secondary dark:text-primary",
                                children: "..."
                            })]
                        })
                    }), s.jsxs("div", {
                        className: "text-secondary dark:text-primary",
                        children: [s.jsxs("p", {
                            className: "mb-4",
                            children: [`"My expectation from this class was to be able to communicate better. So I'm a terrible communicator, the class made me know how to communicate better. This class made me pay attention to little details around me and draw stories from them. `, s.jsx("br", {}), "This class also made me learn that I have to understand what my audience likes and understand the kind of audience I’m talking to."]
                        }), s.jsx("p", {
                            className: "mb-4",
                            children: `I learnt different ways to write the same story to pass the same information. I learnt that my write up must change a person's thoughts. I must speak to people’s hearts; change their mentality about a topic.",`
                        })]
                    })]
                })]
            })]
        })
    })
})
  , B3 = () => s.jsx(s.Fragment, {
    children: s.jsxs("div", {
        id: "service",
        children: [s.jsx("section", {
            className: " hero",
            children: s.jsxs("div", {
                style: {
                    background: `url("https://i.postimg.cc/XqF4Bn6Q/Untitled-design-20.jpg")
    no-repeat center center/cover`
                },
                className: "grid ss:py-40 xx:py-32 text-center  ss:px-12 xx:px-6 ",
                children: [s.jsx("h1", {
                    className: "sm:text-6xl xx:text-3xl sm:font-extrabold xx:font-bold text-white xx:py-3  ss:py-6",
                    children: "Coaching For Writers"
                }), s.jsx("p", {
                    className: "sm:text-2xl xx:text-xl xx:w-full ss:w-[75%] mx-auto  text-white xx:py-3  ss:py-6 ",
                    children: "The sure fire way to get attention with your writing is to tell a story. Because stories keep people hooked. And this writing class teaches you to tell compelling stories in your writing."
                }), s.jsx(z, {
                    to: "https://wa.me/message/DOCQNYXAEPVDH1",
                    children: s.jsx("button", {
                        className: "w-[11rem] py-5 px-7 mx-auto  bg-white h-[4rem] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:text-white before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-lightAccent before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#343434]",
                        children: "CONTACT ME"
                    })
                })]
            })
        }), s.jsxs("section", {
            className: "story-writing-coaching ",
            children: [s.jsxs("div", {
                className: " py-24 grid sm:grid-cols-2 xx:grid-cols-1 xx:px-6   sm:gap-4 ss:px-12 bg-extraClr ",
                children: [s.jsxs("div", {
                    className: "   md:px-0 grid place-self-center",
                    children: [s.jsx("div", {
                        className: "  place-content-center xx:grid sm:hidden ",
                        children: s.jsx(z, {
                            to: "",
                            children: s.jsx("button", {
                                style: {
                                    boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.35)"
                                },
                                className: "relative  tracking-wide mb-12  xs:px-12 xx:px-6  py-4 text-secondary text-lg  font-bold  overflow-hidden bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0",
                                children: "STORY WRITING COACHING"
                            })
                        })
                    }), s.jsxs("div", {
                        className: "mb-0 lg:pr-8 xl:pr-6 lg:text-left ",
                        children: [s.jsx("div", {
                            className: " grid place-content-center  xx:hidden sm:block mx-auto",
                            children: s.jsx(z, {
                                to: "",
                                children: s.jsx("button", {
                                    style: {
                                        boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.35)"
                                    },
                                    className: "relative tracking-wide mb-12 ml-6 lg:px-12 sm:px-8 py-4 text-secondary lg:text-xl sm:text-lg font-bold  overflow-hidden bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0",
                                    children: "STORY WRITING COACHING"
                                })
                            })
                        }), s.jsxs("div", {
                            className: "",
                            children: [s.jsx("p", {
                                className: "mb-6 font-medium  lg:text-lg text-secondary lg:text-left sm:text-base md:text-center",
                                children: "Stories. We love them. We read them. We pay attention to them. And if you can tell a compelling story, you can get our attention, and you can move us. You can move us to give attention to our families, to protect the environment, to buy a product, to save our own lives. I am a story writing coach who teaches you to tell stories that move. In a 4-week course called The Art of Writing Compelling Stories."
                            }), s.jsx("h5", {
                                className: "mb-6  text-accent lg:text-left md:text-center ss:text-2xl xx:text-xl",
                                children: "Course Objective:"
                            }), s.jsx("p", {
                                className: "mb-6 font-medium  lg:text-lg text-secondary lg:text-left sm:text-base md:text-center",
                                children: "At the end of this Course, you would have learnt how to craft stories that grab the attention of your audience, sustain that attention, and communicate your message. In addition, you'll learn to give them something that remains with them a long time. In short, you would have learnt to leave lasting impressions on your reader, causing them to remember, spurring them to action."
                            }), s.jsx("p", {
                                className: "mb-6 font-medium  lg:text-lg text-secondary lg:text-left sm:text-base md:text-center",
                                children: "At the end of this 4-week course, you'll be a better writer. You'll come to recognize just how good writers write. Your eyes will be opened to note what makes their writing so effective. It'll be like looking at a slice of cake and finally saying, “Hey, I know how you baked that!”"
                            })]
                        })]
                    })]
                }), s.jsx("div", {
                    className: "bg ss:grid place-content-top xx:hidden",
                    children: s.jsx("div", {
                        style: {
                            boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.50)"
                        },
                        className: "img ml-auto lg:w-[32rem] lg:h-[40rem] sm:w-[24rem] sm:h-[32rem] rounded-lg"
                    })
                }), s.jsxs("div", {
                    className: " col-span-2 ",
                    children: [s.jsx("h5", {
                        className: "mb-6 ss:text-2xl xx:text-xl xx:mt-6 ss:mt-12  text-accent lg:text-left md:text-center",
                        children: "Why though? Why should you learn to communicate with stories?"
                    }), s.jsx("p", {
                        className: "my-6 font-medium  ss:text-lg text-secondary text-left xx:text-base",
                        children: "As Bukola Adewuyi, a gifted student of the course, wisely observed: “I learnt that the basic tactic to present my message is with a STORY. Stories just have a way of keeping people hooked. No wonder I can spend a whole day reading a 428-page Christian fiction book and yet start yawning the moment I pick up a research article.”"
                    }), s.jsx("p", {
                        className: "my-6 font-medium  ss:text-lg text-secondary text-left xx:text-base",
                        children: "We love stories. We read them. We pay attention to them. If you want to tell us something, tell us through a story. You'll get our attention. And if you can tell a compelling story, you can move us. You can move us to give attention to our families, to protect the environment, to buy a product, to save our own lives. I am a story writing coach who teaches you to tell stories that move"
                    }), s.jsx("p", {
                        className: "my-6 font-medium  ss:text-lg text-secondary text-left xx:text-base",
                        children: "That's what this writing class, The Art of Writing Compelling Stories , is about."
                    }), s.jsx("h5", {
                        className: "ss:text-2xl xx:text-xl text-accent",
                        children: "What do we do in this writing class?"
                    }), s.jsx("div", {
                        className: "my-6 font-medium  ss:text-lg text-secondary text-left xx:text-base",
                        children: s.jsxs("ol", {
                            className: "list-disc",
                            children: [s.jsx("li", {
                                className: "ml-6 mb-4",
                                children: "Teach you to put your thoughts together and communicate them clearly, compellingly."
                            }), s.jsx("li", {
                                className: "ml-6 mb-4",
                                children: "Teach you to write correctly, observing necessary punctuation marks."
                            }), s.jsx("li", {
                                className: "ml-6 mb-4",
                                children: "Teach you how to use stories to pass across your message."
                            }), s.jsx("li", {
                                className: "ml-6 mb-4",
                                children: "Teach you how to take a message and tailor it to your specific audience."
                            }), s.jsx("li", {
                                className: "ml-6 mb-4",
                                children: "Teach you how to take the most serious of topics and make them interesting to read—whether in blog posts, newsletters, articles, essays, and more."
                            }), s.jsx("li", {
                                className: "ml-6 mb-4",
                                children: "Teach you to grab attention with your writing."
                            }), s.jsx("li", {
                                className: "ml-6 mb-4",
                                children: "Teach you to write like the writers you admire."
                            })]
                        })
                    }), s.jsx("p", {
                        className: "my-6 font-medium  ss:text-lg text-secondary text-left xx:text-base",
                        children: "The 4-week online writing class began in 2021, and there are more testimonials than I can possibly upload. You'll find a small percentage below."
                    }), s.jsx("p", {
                        className: "my-6 font-medium  lg:text-lg text-secondary lg:text-left md:text-lg md:text-center"
                    }), s.jsx("div", {
                        className: "  grid place-content-start  mt-12",
                        children: s.jsx(z, {
                            to: "https://wa.me/message/DOCQNYXAEPVDH1",
                            children: s.jsx("div", {
                                className: "btn-two-container ",
                                children: s.jsx("button", {
                                    className: "text-xl font-extrabold btn-two mt-3 w-[16rem] h-[4rem]",
                                    children: "SEND ME A MESSAGE"
                                })
                            })
                        })
                    })]
                })]
            }), s.jsx("div", {
                className: "bg-primary dark:bg-secondary xx:px-6 ss:px-12",
                children: s.jsxs("div", {
                    className: "gap-8 items-center py-24 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6",
                    children: [s.jsxs("div", {
                        className: "mt-4 md:mt-0 text-left",
                        children: [s.jsx("h2", {
                            className: "mb-12 text-center xx:text-2xl ss:text-4xl tracking-tight font-extrabold text-accent dark:text-primary",
                            children: "How do classes hold?"
                        }), s.jsxs("div", {
                            className: " dark:text-primary",
                            children: [s.jsx("p", {
                                className: "mb-6 font-light text-secondary md:text-lg dark:text-primary",
                                children: "Classes hold entirely online. On a WhatsApp Course Page. Each class is followed by writing submissions (assignments)."
                            }), s.jsx("h5", {
                                className: "font-semibold mb-2",
                                children: "Classes hold thrice a week:"
                            }), s.jsxs("ul", {
                                className: "list-disc mb-6",
                                children: [s.jsx("li", {
                                    children: "- Mondays. Wednesdays. Saturdays."
                                }), s.jsx("li", {
                                    children: "- 8 PM to 9 PM each day."
                                }), s.jsx("li", {
                                    children: "- For 4 weeks. "
                                })]
                            }), s.jsx("p", {
                                className: "mb-6 font-light text-secondary md:text-lg  dark:text-primary",
                                children: "Classes are arranged such that if a student is unable to attend class by 8 PM, he or she can go to the Course Page later, read up, and attempt the submissions. Questions, of course, will be attended to. And where a student needs more clarity, it will be provided."
                            }), s.jsx("p", {
                                className: "mb-6 font-light text-secondary md:text-lg  dark:text-primary",
                                children: "After 4 weeks, students who have completed the course work (their writing submissions) will be certified. And mentorship follows from there. Mentorship means that students can continue to relate with the Coach, ask questions, seek her input, and count on her guidance in their writing journey."
                            }), s.jsx("h5", {
                                className: "font-semibold mb-2",
                                children: "How do you join the story writing class?"
                            }), s.jsxs("ul", {
                                className: "list-disc mb-6",
                                children: [s.jsx("li", {
                                    children: "- ⦁ Find out when the next edition begins. "
                                }), s.jsx("li", {
                                    children: "- ⦁ Pay the course fee. "
                                }), s.jsx("li", {
                                    children: "- ⦁ Get ready for class. "
                                })]
                            }), s.jsxs("p", {
                                className: "mb-6 font-light text-secondary md:text-lg  dark:text-primary",
                                children: ["Want to know when the next edition begins? Please send a message", s.jsx(z, {
                                    to: "https://wa.me/message/DOCQNYXAEPVDH1",
                                    children: s.jsx("strong", {
                                        className: "text-accent ml-1",
                                        children: "here"
                                    })
                                })]
                            })]
                        })]
                    }), s.jsx("div", {
                        className: " grid",
                        children: s.jsx("img", {
                            className: "lg:justify-self-end md:justify-self-center ss:block  xx:hidden xx:my-6 md:my-0 lg:mr-12 md:mr-0",
                            src: "https://i.postimg.cc/dQpzFDWb/20240511-231906.jpg",
                            alt: "brown patience",
                            style: {
                                borderRadius: "10px",
                                boxShadow: " -8px 7px 31px 8px rgba(0,0,0,0.51)"
                            }
                        })
                    }), s.jsx("div", {
                        className: " grid",
                        children: s.jsx("img", {
                            className: "lg:justify-self-end md:justify-self-center xx:my-6 ss:hidden  xx:block md:my-0 lg:mr-12 md:mr-0",
                            src: "https://i.postimg.cc/vmW76GpB/20231213-074326.jpg",
                            alt: "brown patience",
                            style: {
                                borderRadius: "10px",
                                boxShadow: " -8px 7px 31px 8px rgba(0,0,0,0.51)"
                            }
                        })
                    })]
                })
            })]
        }), s.jsx("div", {
            style: {
                cursor: "grab"
            },
            id: "testimonial",
            children: s.jsx("section", {
                className: "py-16 bg-extraClr dark:bg-black xx:px-0  md:px-12",
                children: s.jsx("div", {
                    className: "  m-auto  text-secondary dark:text-gray-300 xx:px-2 md:px-12 xl:px-6",
                    children: s.jsx("div", {
                        className: "mb-20 space-y-4  md:px-0",
                        children: s.jsx(W3, {})
                    })
                })
            })
        }), s.jsx("div", {
            className: "",
            children: s.jsx(Dr, {})
        })]
    })
})
  , F3 = () => s.jsxs("div", {
    children: [s.jsx(h3, {}), s.jsx("div", {
        className: "",
        children: s.jsx(Dr, {})
    })]
})
  , H3 = () => s.jsx(s.Fragment, {
    children: s.jsxs("div", {
        className: "",
        id: "community",
        children: [s.jsxs("div", {
            className: "  xx:hidden sm:flex flex-col gap-0 sm:pt-0 sm:flex-row ",
            children: [s.jsx("div", {
                className: "flex basis-1/2 bg-extraClr flex-col items-start w-full  mx-auto md:px-12 ss:px-6  py-16 sm:max-w-screen-xl",
                children: s.jsxs("div", {
                    className: "mb-16 lg:my-40  lg:pr-5 ",
                    children: [s.jsxs("div", {
                        className: " text-center mb-6",
                        children: [s.jsx("h1", {
                            className: "max-w-xl mb-12 font-sans lg:text-6xl font-bold tracking-tight text-green sm:text-4xl sm:leading-none",
                            children: "Welcome To Oasis"
                        }), s.jsxs("p", {
                            className: "text-2xl max-w-xl  text-secondary ss:text-base md:text-lg",
                            children: ["You don't like what happens in your thoughts. You'd like to change that. This is an ", s.jsx("strong", {
                                children: "Oasis"
                            }), " of Purifying Water & directions for use."]
                        })]
                    }), s.jsx("div", {
                        className: " grid place-content-center mx-auto",
                        children: s.jsx(z, {
                            to: "https://www.instagram.com/theoasis.network?igsh=aWJ6YnhoazB6bDIy",
                            children: s.jsxs("button", {
                                className: "md:w-[15rem]  md:h-[5rem] ss:w-[13rem]  ss:h-[4.7rem] ss:px-6   py-5 md:px-7 mx-auto gap-4  bg-white my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:text-white before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-secondary before:to-green before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#343434]",
                                children: [s.jsx("span", {
                                    className: "",
                                    children: "LEARN MORE"
                                }), " ", s.jsx(Wo, {})]
                            })
                        })
                    })]
                })
            }), s.jsx("div", {
                className: "  basis-1/2 right-0 w-full   mx-auto  sm:mb-0 sm:mx-0  sm:max-w-full  xl:px-0",
                children: s.jsx("img", {
                    className: "object-cover w-full     sm:h-full",
                    src: " https://i.postimg.cc/KYztsxg0/IMG-20220621-WA0003.jpg",
                    alt: ""
                })
            })]
        }), s.jsx("section", {
            className: " hero    ",
            children: s.jsxs("div", {
                className: " xx:grid img2  ss:h-[40rem] xs:h-[32rem] gap-y-12  sm:hidden text-center ",
                children: [s.jsx("h1", {
                    className: "ss:text-6xl xs:text-5xl xx:text-4xl text-primary  inline-block py-0 ss:mt-[8rem] xs:mt-[6rem] xx:mt-[4rem]  mx-auto  rounded-lg  sm:font-extrabold xx:font-bold ",
                    children: "Welcome To"
                }), s.jsx("div", {
                    className: " grid place-content-center mt-[12rem] mx-auto",
                    children: s.jsx(z, {
                        to: "https://www.instagram.com/theoasis.network?igsh=aWJ6YnhoazB6bDIy",
                        children: s.jsxs("button", {
                            className: "ss:w-[15rem]   ss:h-[5rem] xs:w-[13rem]  xs:h-[4rem]  xx:w-[11rem]  xx:h-[3.5rem]  mx-auto gap-4  bg-white my-12 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:text-white before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-secondary before:to-green before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#343434]",
                            children: [s.jsx("span", {
                                className: "",
                                children: "LEARN MORE"
                            }), " ", s.jsx(Wo, {})]
                        })
                    })
                })]
            })
        }), s.jsx("section", {
            className: "   ss:mx-12 py-12 sm:rounded-lg  xx:px-0 bg-green my-12 sm:px-8 sm:py-20",
            children: s.jsxs("div", {
                className: "flex flex-col justify-center md:pr-8 xl:pr-0 ",
                children: [s.jsxs("div", {
                    className: " mb-6",
                    children: [s.jsx("h2", {
                        className: "mb-12 ss:text-3xl xx:text-2xl font-bold tracking-tight text-center text-white sm:text-4xl sm:leading-none",
                        children: "How The Oasis Came About"
                    }), s.jsxs("div", {
                        className: " sm:px-12 xx:px-6 ",
                        children: [s.jsx("p", {
                            className: "mb-6 font-medium  lg:text-lg text-primary lg:text-left md:text-lg md:text-center",
                            children: "Pornography found me early in primary school. Primary school is that time when you're around 10 years old. Yeah, that's when pornography found me. Or maybe I found it. And it held me tight till I turned to Jesus at 15. But turning to Jesus didn't give me a mind wipe. All the porn stored in my mind, my memory, did not disappear. So though I stopped watching more porn videos, my mind still had its memories, its archive. It still knew how to create its own series, to make its own fantasies. Even though I was now a Believer."
                        }), s.jsx("p", {
                            className: "mb-6 font-medium  lg:text-lg text-primary lg:text-left md:text-lg md:text-center",
                            children: "I didn't know how to stop them, how to quit thinking dirty, pulse-increasing thoughts! And I was desperate to be free. “Oh God, will I think these kinds of thoughts forever?”"
                        }), s.jsx("p", {
                            className: "mb-6 font-medium  lg:text-lg text-primary lg:text-left md:text-lg md:text-center",
                            children: "Hell no! He taught me to tell them “No!” It's what His Word said He'd do in Titus 2:11 & 12 — literally, word for word! “For the grace of God has appeared that offers salvation to all people. It TEACHES us to say 'No' to ungodliness and worldly passions, and to live self-controlled, upright and godly lives in this present age. . .”"
                        }), s.jsx("p", {
                            className: "mb-6 font-medium  lg:text-lg text-primary lg:text-left md:text-lg md:text-center",
                            children: "That's precisely what the Holy Spirit taught me to do — to tell ungodly thoughts “No!” to take control of my thoughts, to have my mind renewed by His Word. And He can teach you too! Oh, He can make you free. So free that you'd struggle to remember what used to be compulsions."
                        }), s.jsx("p", {
                            className: "mb-12 font-medium lg:text-lg text-primary lg:text-left md:text-lg md:text-center",
                            children: "Totally without planning to, I chronicled my experience in the book So He Taught Me 'No'. “Weren't you ashamed to write about these things?” Not one bit! Cause it's so much more important to have my freedom replicated in the lives of my brothers and sisters in Christ than to present a perfect image of myself."
                        }), s.jsxs("p", {
                            className: "mb-12 font-medium lg:text-lg text-primary lg:text-left md:text-lg md:text-center",
                            children: ["And that's how the Oasis came about. ", s.jsx("br", {}), " An Oasis, by definition, is a body of water in a desert. God's Word is an Oasis. It refreshes. It washes clean. No matter the dirt our minds have been covered in, no matter the level of vile in our thoughts, no matter the depth of our addictions, God's Word can wash that mind so clean, make it so new that its past becomes a fading memory."]
                        }), s.jsx("p", {
                            className: "mb-12 font-medium lg:text-lg text-primary lg:text-left md:text-lg md:text-center",
                            children: "Oasis is a mind renewal centre. It focuses on thoughts, the mind, and the God who can renew. You can download these mind books for free:"
                        })]
                    })]
                }), s.jsx("div", {
                    className: " grid place-content-center mx-auto",
                    children: s.jsx(z, {
                        to: "https://www.instagram.com/theoasis.network?igsh=aWJ6YnhoazB6bDIy",
                        children: s.jsxs("button", {
                            className: "w-[15rem] py-5 px-7 mx-auto gap-4  bg-white h-[5rem] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:text-white before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-secondary before:to-green before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#343434]",
                            children: [s.jsx("span", {
                                className: "",
                                children: "LEARN MORE"
                            }), " ", s.jsx(Wo, {})]
                        })
                    })
                })]
            })
        }), s.jsxs("section", {
            className: "  mx-auto px-6 py-6 md:px-12",
            children: [s.jsx("div", {
                className: "text-center",
                children: s.jsx("h2", {
                    style: {
                        borderBottom: "2px solid #343434",
                        paddingBottom: "1rem"
                    },
                    className: " mb-12 text-center text-2xl xx:hidden ss:inline-block font-bold text-secondary dark:text-white md:text-4xl",
                    children: "Recommended Books"
                })
            }), s.jsxs("div", {
                className: "grid gap-6 ss:px-4 xx:px-0 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3",
                children: [s.jsxs("div", {
                    className: "group relative rounded-3xl xx:w-full ss:space-y-6 overflow-hidden",
                    children: [s.jsx("img", {
                        className: "mx-auto h-full w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0",
                        src: "https://i.postimg.cc/X7HmPYNM/IMG-20220917-WA0018.webp",
                        alt: "woman",
                        loading: "lazy",
                        width: "640",
                        height: "805"
                    }), s.jsxs("div", {
                        className: "absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-green dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0",
                        children: [s.jsx("div", {
                            children: s.jsx("h4", {
                                className: "text-xl   xx:mb-2  ss:mb-6  font-semibold dark:text-gray-700 text-white",
                                children: "Brown Patience"
                            })
                        }), s.jsxs("p", {
                            className: "mt-2 text-primary dark:text-gray-600",
                            children: ["This is a book about porn addiction. About the darkness that persists even after you've stopped viewing it. All based on true experience...", s.jsx(Oe, {
                                smooth: !0,
                                to: "/book#so-he-taught-me-no",
                                children: s.jsx("span", {
                                    className: "text-semibold text-primary dark:text-secondary",
                                    children: "See More"
                                })
                            })]
                        })]
                    })]
                }), s.jsxs("div", {
                    className: "group relative rounded-3xl  space-y-6 overflow-hidden",
                    children: [s.jsx("img", {
                        className: "mx-auto h-full w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0",
                        src: "https://i.postimg.cc/dQByTBQ2/20240507-073747.jpg",
                        alt: "Book cover",
                        loading: "lazy",
                        width: "640",
                        height: "805"
                    }), s.jsxs("div", {
                        className: "absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-green dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0",
                        children: [s.jsx("div", {
                            children: s.jsx("h4", {
                                className: "text-xl   xx:mb-2  ss:mb-6  font-semibold dark:text-gray-700 text-white",
                                children: "Brown Patience"
                            })
                        }), s.jsxs("p", {
                            className: "mt-2 text-primary dark:text-gray-600",
                            children: ["What you do with your mind will turn and do you. I should know. If you brood and ruminate on depressing thoughts...", s.jsx(Oe, {
                                smooth: !0,
                                to: "/book#choose-your-thoughts",
                                children: s.jsx("span", {
                                    className: "text-semibold text-primary dark:text-secondary",
                                    children: "See More"
                                })
                            })]
                        })]
                    })]
                }), s.jsxs("div", {
                    className: "group relative rounded-3xl  space-y-6 overflow-hidden",
                    children: [s.jsx("img", {
                        className: "mx-auto h-full w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0",
                        src: "https://i.postimg.cc/HxnPkZyj/20240207-064011.jpg",
                        alt: "woman",
                        loading: "lazy",
                        width: "640",
                        height: "805"
                    }), s.jsxs("div", {
                        className: "absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-green dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0",
                        children: [s.jsx("div", {
                            children: s.jsx("h4", {
                                className: "text-xl   xx:mb-2  ss:mb-6  font-semibold dark:text-gray-700 text-white",
                                children: "Brown Patience"
                            })
                        }), s.jsxs("p", {
                            className: "mt-2 text-primary dark:text-gray-600",
                            children: ["Fantasy is about the sexual mental struggles we face. Those steamy thoughts that feel like you're engaging in a porn video production...", s.jsx(Oe, {
                                smooth: !0,
                                to: "/book#fantasy",
                                children: s.jsx("span", {
                                    className: "text-semibold text-primary dark:text-secondary ",
                                    children: "See More"
                                })
                            })]
                        })]
                    })]
                })]
            })]
        })]
    })
})
  , U3 = () => s.jsx(s.Fragment, {
    children: s.jsx("div", {
        className: "",
        id: "blog-content",
        children: s.jsx("div", {
            className: "w-full text-secondary bg-primary py-24",
            children: s.jsx("div", {
                className: "max-w-[1240px] mx-auto",
                children: s.jsxs("div", {
                    className: "grid lg:grid-cols-3 xx:grid-cols-1 xx:gap-y-4 ss:gap-y-8 lg:place-items-start ss:place-items-start xx:place-items-center lg:gap-8 xs:px-4 xx:px-2 text-secondary",
                    children: [s.jsxs("div", {
                        className: "bg-primary shadow-lg rounded-lg col-span-2 overflow-hidden drop-shadow-md ",
                        children: [s.jsx("img", {
                            className: "h-[30rem] w-full object-cover",
                            src: "https://i.postimg.cc/ryd3Q9BD/Whats-App-Image-2024-07-12-at-08-26-21-1.jpg",
                            alt: ""
                        }), s.jsxs("div", {
                            className: "ss:p-8 xx:px-4",
                            children: [s.jsx("h3", {
                                className: "font-bold text-accent text-2xl my-1",
                                children: "Coaching for Authors"
                            }), s.jsxs("div", {
                                className: "my-6",
                                children: [s.jsx("p", {
                                    className: "mb-4",
                                    children: "Will you write that book this second half? If yes, you should plan how you'll do it from today."
                                }), s.jsxs("ul", {
                                    className: "mb-4 pl-4 list-disc",
                                    children: [s.jsx("li", {
                                        className: "",
                                        children: " At least a chapter a week."
                                    }), s.jsx("li", {
                                        className: "",
                                        children: "Getting yourself an accountability partner (I volunteer to be your accountability partner)."
                                    }), s.jsx("li", {
                                        className: "",
                                        children: "Scheduling some weekends where you'll go away and do nothing but write."
                                    }), s.jsx("li", {
                                        className: "",
                                        children: "Taking a two-week vacation somewhere in this second half to enable your write at length."
                                    }), s.jsx("li", {
                                        className: "",
                                        children: "Contacting a ghostwriter or writing coach."
                                    })]
                                }), s.jsx("p", {
                                    className: "mb-4",
                                    children: "When desire finally becomes reality, it is fulfilling. May that fulfilment be yours this second half."
                                }), s.jsxs("p", {
                                    className: "mb-4",
                                    children: ["The ", s.jsx("strong", {
                                        children: ' "Coaching for Authors"'
                                    }), " package may be the boost you need. It's where you write your book, with me as your guide, chapter by chapter."]
                                }), s.jsxs("ul", {
                                    className: "mb-4 pl-4 list-disc",
                                    children: [s.jsx("li", {
                                        className: "",
                                        children: " We draw out a plan."
                                    }), s.jsx("li", {
                                        className: "",
                                        children: " You start writing."
                                    }), s.jsx("li", {
                                        className: "",
                                        children: "I go through it, make adjustments if necessary."
                                    }), s.jsx("li", {
                                        className: "",
                                        children: " You send the next chapter."
                                    }), s.jsx("li", {
                                        className: "",
                                        children: " I go through it. . ."
                                    })]
                                }), s.jsxs(z, {
                                    to: "https://wa.me/p/7815273445160700/2348140170221",
                                    className: "mb-4",
                                    children: ["Learn more about it", s.jsx("strong", {
                                        className: "text-accent ml-1 underline",
                                        children: "here"
                                    })]
                                }), s.jsx("p", {
                                    className: "my-4",
                                    children: "With love, Brown Patience. "
                                })]
                            })]
                        })]
                    }), s.jsx("div", {
                        className: "lg:w-full w-fit rounded-lg overflow-hidden sm-mx-auto bg-primary py-5 drop-shadow-md xs:max-h-[17.625rem] xx:max-h-[18.625rem] ",
                        children: s.jsxs("div", {
                            className: "",
                            children: [s.jsx("img", {
                                src: "https://i.postimg.cc/t4wVD9bk/41044-1.jpg",
                                alt: "Author",
                                className: "p-2 xs:w-32 xs:h-32 xx:w-24 xx:h-24 rounded-full object-cover mx-auto"
                            }), s.jsx("h1", {
                                className: "text-center xs:text-2xl xx:text-xl font-bold mt-3",
                                children: "Brown Patience"
                            }), s.jsx("p", {
                                className: "text-center  p-4 m-4 bg-accent rounded-lg text-primary xs:text-lg xx:text-base  font-medium mt-3",
                                children: "Ghostwriter. Editor. Writing Coach."
                            })]
                        })
                    })]
                })
            })
        })
    })
});
function G3() {
    const [e,t] = E.useState("light")
      , r = document.documentElement
      , n = [{
        icon: "sunny-outline",
        text: "light"
    }, {
        icon: "moon-outline",
        text: "dark"
    }];
    return E.useEffect( () => {
        switch (e) {
        case "dark":
            r.classList.add("dark"),
            localStorage.setItem("theme", "dark");
            break;
        case "light":
            r.classList.remove("dark"),
            localStorage.setItem("theme", "light");
            break;
        default:
            localStorage.removeItem("theme");
            break
        }
    }
    , [r.classList, e]),
    s.jsx(Pk, {
        children: s.jsxs("div", {
            className: "app relative dark:bg-secondary  duration-100",
            children: [s.jsx("div", {
                id: "",
                className: "fixed lg:top-5 lg:right-10 xs:top-[45px] xs:right-[90px]  xx:top-[21px] xx:right-[60px]  z-20  duration-100  bg-transparent rounded",
                children: n == null ? void 0 : n.map(o => s.jsx("button", {
                    onClick: () => t(o.text),
                    className: `w-8 h-8 leading-9 text-xl rounded-full m-1 ${e === o.text && "  text-accent"}`,
                    children: s.jsx("ion-icon", {
                        name: o.icon
                    })
                }, o.text))
            }), s.jsx(p3, {}), s.jsx(tS, {}), s.jsx(aS, {}), s.jsxs(wk, {
                children: [s.jsx(it, {
                    path: "/",
                    element: s.jsx(E3, {})
                }), s.jsx(it, {
                    path: "/about",
                    element: s.jsx(T3, {})
                }), s.jsx(it, {
                    path: "https://my-blog-pi-two.vercel.app/",
                    element: s.jsx(A3, {})
                }), s.jsx(it, {
                    path: "/book",
                    element: s.jsx(R3, {})
                }), s.jsx(it, {
                    path: "/guidianceForSolopreneur",
                    element: s.jsx(L3, {})
                }), s.jsx(it, {
                    path: "/coachingForAuthors",
                    element: s.jsx($3, {})
                }), s.jsx(it, {
                    path: "/editing",
                    element: s.jsx(z3, {})
                }), s.jsx(it, {
                    path: "/contentWriting",
                    element: s.jsx(D3, {})
                }), s.jsx(it, {
                    path: "/coachingForWriters",
                    element: s.jsx(B3, {})
                }), s.jsx(it, {
                    path: "/testimonialPg",
                    element: s.jsx(F3, {})
                }), s.jsx(it, {
                    path: "/community",
                    element: s.jsx(H3, {})
                }), s.jsx(it, {
                    path: "/blogContentPg",
                    element: s.jsx(U3, {})
                })]
            }), s.jsx(P3, {})]
        })
    })
}
var b0 = {}
  , w0 = {}
  , j0 = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = void 0;
    var t = function() {
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
            a[i] = arguments[i];
        if (typeof window < "u") {
            var l;
            typeof window.gtag > "u" && (window.dataLayer = window.dataLayer || [],
            window.gtag = function() {
                window.dataLayer.push(arguments)
            }
            ),
            (l = window).gtag.apply(l, a)
        }
    }
      , r = t;
    e.default = r
}
)(j0);
var k0 = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = i;
    var t = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
    function r(l) {
        return l.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(c, u, h) {
            return u > 0 && u + c.length !== h.length && c.search(t) > -1 && h.charAt(u - 2) !== ":" && (h.charAt(u + c.length) !== "-" || h.charAt(u - 1) === "-") && h.charAt(u - 1).search(/[^\s-]/) < 0 ? c.toLowerCase() : c.substr(1).search(/[A-Z]|\../) > -1 ? c : c.charAt(0).toUpperCase() + c.substr(1)
        })
    }
    function n(l) {
        return typeof l == "string" && l.indexOf("@") !== -1
    }
    var o = "REDACTED (Potential Email Address)";
    function a(l) {
        return n(l) ? (console.warn("This arg looks like an email address, redacting."),
        o) : l
    }
    function i() {
        var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ""
          , c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
          , u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0
          , h = l || "";
        return c && (h = r(l)),
        u && (h = a(h)),
        h
    }
}
)(k0);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = e.GA4 = void 0;
    var t = i(j0)
      , r = i(k0)
      , n = ["eventCategory", "eventAction", "eventLabel", "eventValue", "hitType"]
      , o = ["title", "location"]
      , a = ["page", "hitType"];
    function i(C) {
        return C && C.__esModule ? C : {
            default: C
        }
    }
    function l(C, O) {
        if (C == null)
            return {};
        var _ = c(C, O), T, S;
        if (Object.getOwnPropertySymbols) {
            var A = Object.getOwnPropertySymbols(C);
            for (S = 0; S < A.length; S++)
                T = A[S],
                !(O.indexOf(T) >= 0) && Object.prototype.propertyIsEnumerable.call(C, T) && (_[T] = C[T])
        }
        return _
    }
    function c(C, O) {
        if (C == null)
            return {};
        var _ = {}, T = Object.keys(C), S, A;
        for (A = 0; A < T.length; A++)
            S = T[A],
            !(O.indexOf(S) >= 0) && (_[S] = C[S]);
        return _
    }
    function u(C) {
        "@babel/helpers - typeof";
        return u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(O) {
            return typeof O
        }
        : function(O) {
            return O && typeof Symbol == "function" && O.constructor === Symbol && O !== Symbol.prototype ? "symbol" : typeof O
        }
        ,
        u(C)
    }
    function h(C) {
        return v(C) || m(C) || f(C) || d()
    }
    function d() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    function m(C) {
        if (typeof Symbol < "u" && C[Symbol.iterator] != null || C["@@iterator"] != null)
            return Array.from(C)
    }
    function v(C) {
        if (Array.isArray(C))
            return g(C)
    }
    function y(C, O) {
        var _ = Object.keys(C);
        if (Object.getOwnPropertySymbols) {
            var T = Object.getOwnPropertySymbols(C);
            O && (T = T.filter(function(S) {
                return Object.getOwnPropertyDescriptor(C, S).enumerable
            })),
            _.push.apply(_, T)
        }
        return _
    }
    function x(C) {
        for (var O = 1; O < arguments.length; O++) {
            var _ = arguments[O] != null ? arguments[O] : {};
            O % 2 ? y(Object(_), !0).forEach(function(T) {
                P(C, T, _[T])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(_)) : y(Object(_)).forEach(function(T) {
                Object.defineProperty(C, T, Object.getOwnPropertyDescriptor(_, T))
            })
        }
        return C
    }
    function w(C, O) {
        return j(C) || b(C, O) || f(C, O) || p()
    }
    function p() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    function f(C, O) {
        if (C) {
            if (typeof C == "string")
                return g(C, O);
            var _ = Object.prototype.toString.call(C).slice(8, -1);
            if (_ === "Object" && C.constructor && (_ = C.constructor.name),
            _ === "Map" || _ === "Set")
                return Array.from(C);
            if (_ === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))
                return g(C, O)
        }
    }
    function g(C, O) {
        (O == null || O > C.length) && (O = C.length);
        for (var _ = 0, T = new Array(O); _ < O; _++)
            T[_] = C[_];
        return T
    }
    function b(C, O) {
        var _ = C == null ? null : typeof Symbol < "u" && C[Symbol.iterator] || C["@@iterator"];
        if (_ != null) {
            var T, S, A, M, H = [], G = !0, q = !1;
            try {
                if (A = (_ = _.call(C)).next,
                O !== 0)
                    for (; !(G = (T = A.call(_)).done) && (H.push(T.value),
                    H.length !== O); G = !0)
                        ;
            } catch (re) {
                q = !0,
                S = re
            } finally {
                try {
                    if (!G && _.return != null && (M = _.return(),
                    Object(M) !== M))
                        return
                } finally {
                    if (q)
                        throw S
                }
            }
            return H
        }
    }
    function j(C) {
        if (Array.isArray(C))
            return C
    }
    function k(C, O) {
        if (!(C instanceof O))
            throw new TypeError("Cannot call a class as a function")
    }
    function N(C, O) {
        for (var _ = 0; _ < O.length; _++) {
            var T = O[_];
            T.enumerable = T.enumerable || !1,
            T.configurable = !0,
            "value"in T && (T.writable = !0),
            Object.defineProperty(C, I(T.key), T)
        }
    }
    function L(C, O, _) {
        return O && N(C.prototype, O),
        Object.defineProperty(C, "prototype", {
            writable: !1
        }),
        C
    }
    function P(C, O, _) {
        return O = I(O),
        O in C ? Object.defineProperty(C, O, {
            value: _,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : C[O] = _,
        C
    }
    function I(C) {
        var O = B(C, "string");
        return u(O) === "symbol" ? O : String(O)
    }
    function B(C, O) {
        if (u(C) !== "object" || C === null)
            return C;
        var _ = C[Symbol.toPrimitive];
        if (_ !== void 0) {
            var T = _.call(C, O || "default");
            if (u(T) !== "object")
                return T;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (O === "string" ? String : Number)(C)
    }
    var D = function() {
        function C() {
            var O = this;
            k(this, C),
            P(this, "reset", function() {
                O.isInitialized = !1,
                O._testMode = !1,
                O._currentMeasurementId,
                O._hasLoadedGA = !1,
                O._isQueuing = !1,
                O._queueGtag = []
            }),
            P(this, "_gtag", function() {
                for (var _ = arguments.length, T = new Array(_), S = 0; S < _; S++)
                    T[S] = arguments[S];
                O._testMode || O._isQueuing ? O._queueGtag.push(T) : t.default.apply(void 0, T)
            }),
            P(this, "_loadGA", function(_, T) {
                var S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "https://www.googletagmanager.com/gtag/js";
                if (!(typeof window > "u" || typeof document > "u") && !O._hasLoadedGA) {
                    var A = document.createElement("script");
                    A.async = !0,
                    A.src = "".concat(S, "?id=").concat(_),
                    T && A.setAttribute("nonce", T),
                    document.body.appendChild(A),
                    window.dataLayer = window.dataLayer || [],
                    window.gtag = function() {
                        window.dataLayer.push(arguments)
                    }
                    ,
                    O._hasLoadedGA = !0
                }
            }),
            P(this, "_toGtagOptions", function(_) {
                if (_) {
                    var T = {
                        cookieUpdate: "cookie_update",
                        cookieExpires: "cookie_expires",
                        cookieDomain: "cookie_domain",
                        cookieFlags: "cookie_flags",
                        userId: "user_id",
                        clientId: "client_id",
                        anonymizeIp: "anonymize_ip",
                        contentGroup1: "content_group1",
                        contentGroup2: "content_group2",
                        contentGroup3: "content_group3",
                        contentGroup4: "content_group4",
                        contentGroup5: "content_group5",
                        allowAdFeatures: "allow_google_signals",
                        allowAdPersonalizationSignals: "allow_ad_personalization_signals",
                        nonInteraction: "non_interaction",
                        page: "page_path",
                        hitCallback: "event_callback"
                    }
                      , S = Object.entries(_).reduce(function(A, M) {
                        var H = w(M, 2)
                          , G = H[0]
                          , q = H[1];
                        return T[G] ? A[T[G]] = q : A[G] = q,
                        A
                    }, {});
                    return S
                }
            }),
            P(this, "initialize", function(_) {
                var T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                if (!_)
                    throw new Error("Require GA_MEASUREMENT_ID");
                var S = typeof _ == "string" ? [{
                    trackingId: _
                }] : _;
                O._currentMeasurementId = S[0].trackingId;
                var A = T.gaOptions
                  , M = T.gtagOptions
                  , H = T.nonce
                  , G = T.testMode
                  , q = G === void 0 ? !1 : G
                  , re = T.gtagUrl;
                if (O._testMode = q,
                q || O._loadGA(O._currentMeasurementId, H, re),
                O.isInitialized || (O._gtag("js", new Date),
                S.forEach(function(Ze) {
                    var cr = x(x(x({}, O._toGtagOptions(x(x({}, A), Ze.gaOptions))), M), Ze.gtagOptions);
                    Object.keys(cr).length ? O._gtag("config", Ze.trackingId, cr) : O._gtag("config", Ze.trackingId)
                })),
                O.isInitialized = !0,
                !q) {
                    var Re = h(O._queueGtag);
                    for (O._queueGtag = [],
                    O._isQueuing = !1; Re.length; ) {
                        var We = Re.shift();
                        O._gtag.apply(O, h(We)),
                        We[0] === "get" && (O._isQueuing = !0)
                    }
                }
            }),
            P(this, "set", function(_) {
                if (!_) {
                    console.warn("`fieldsObject` is required in .set()");
                    return
                }
                if (u(_) !== "object") {
                    console.warn("Expected `fieldsObject` arg to be an Object");
                    return
                }
                Object.keys(_).length === 0 && console.warn("empty `fieldsObject` given to .set()"),
                O._gaCommand("set", _)
            }),
            P(this, "_gaCommandSendEvent", function(_, T, S, A, M) {
                O._gtag("event", T, x(x({
                    event_category: _,
                    event_label: S,
                    value: A
                }, M && {
                    non_interaction: M.nonInteraction
                }), O._toGtagOptions(M)))
            }),
            P(this, "_gaCommandSendEventParameters", function() {
                for (var _ = arguments.length, T = new Array(_), S = 0; S < _; S++)
                    T[S] = arguments[S];
                if (typeof T[0] == "string")
                    O._gaCommandSendEvent.apply(O, h(T.slice(1)));
                else {
                    var A = T[0]
                      , M = A.eventCategory
                      , H = A.eventAction
                      , G = A.eventLabel
                      , q = A.eventValue;
                    A.hitType;
                    var re = l(A, n);
                    O._gaCommandSendEvent(M, H, G, q, re)
                }
            }),
            P(this, "_gaCommandSendTiming", function(_, T, S, A) {
                O._gtag("event", "timing_complete", {
                    name: T,
                    value: S,
                    event_category: _,
                    event_label: A
                })
            }),
            P(this, "_gaCommandSendPageview", function(_, T) {
                if (T && Object.keys(T).length) {
                    var S = O._toGtagOptions(T)
                      , A = S.title
                      , M = S.location
                      , H = l(S, o);
                    O._gtag("event", "page_view", x(x(x(x({}, _ && {
                        page_path: _
                    }), A && {
                        page_title: A
                    }), M && {
                        page_location: M
                    }), H))
                } else
                    _ ? O._gtag("event", "page_view", {
                        page_path: _
                    }) : O._gtag("event", "page_view")
            }),
            P(this, "_gaCommandSendPageviewParameters", function() {
                for (var _ = arguments.length, T = new Array(_), S = 0; S < _; S++)
                    T[S] = arguments[S];
                if (typeof T[0] == "string")
                    O._gaCommandSendPageview.apply(O, h(T.slice(1)));
                else {
                    var A = T[0]
                      , M = A.page;
                    A.hitType;
                    var H = l(A, a);
                    O._gaCommandSendPageview(M, H)
                }
            }),
            P(this, "_gaCommandSend", function() {
                for (var _ = arguments.length, T = new Array(_), S = 0; S < _; S++)
                    T[S] = arguments[S];
                var A = typeof T[0] == "string" ? T[0] : T[0].hitType;
                switch (A) {
                case "event":
                    O._gaCommandSendEventParameters.apply(O, T);
                    break;
                case "pageview":
                    O._gaCommandSendPageviewParameters.apply(O, T);
                    break;
                case "timing":
                    O._gaCommandSendTiming.apply(O, h(T.slice(1)));
                    break;
                case "screenview":
                case "transaction":
                case "item":
                case "social":
                case "exception":
                    console.warn("Unsupported send command: ".concat(A));
                    break;
                default:
                    console.warn("Send command doesn't exist: ".concat(A))
                }
            }),
            P(this, "_gaCommandSet", function() {
                for (var _ = arguments.length, T = new Array(_), S = 0; S < _; S++)
                    T[S] = arguments[S];
                typeof T[0] == "string" && (T[0] = P({}, T[0], T[1])),
                O._gtag("set", O._toGtagOptions(T[0]))
            }),
            P(this, "_gaCommand", function(_) {
                for (var T = arguments.length, S = new Array(T > 1 ? T - 1 : 0), A = 1; A < T; A++)
                    S[A - 1] = arguments[A];
                switch (_) {
                case "send":
                    O._gaCommandSend.apply(O, S);
                    break;
                case "set":
                    O._gaCommandSet.apply(O, S);
                    break;
                default:
                    console.warn("Command doesn't exist: ".concat(_))
                }
            }),
            P(this, "ga", function() {
                for (var _ = arguments.length, T = new Array(_), S = 0; S < _; S++)
                    T[S] = arguments[S];
                if (typeof T[0] == "string")
                    O._gaCommand.apply(O, T);
                else {
                    var A = T[0];
                    O._gtag("get", O._currentMeasurementId, "client_id", function(M) {
                        O._isQueuing = !1;
                        var H = O._queueGtag;
                        for (A({
                            get: function(re) {
                                return re === "clientId" ? M : re === "trackingId" ? O._currentMeasurementId : re === "apiVersion" ? "1" : void 0
                            }
                        }); H.length; ) {
                            var G = H.shift();
                            O._gtag.apply(O, h(G))
                        }
                    }),
                    O._isQueuing = !0
                }
                return O.ga
            }),
            P(this, "event", function(_, T) {
                if (typeof _ == "string")
                    O._gtag("event", _, O._toGtagOptions(T));
                else {
                    var S = _.action
                      , A = _.category
                      , M = _.label
                      , H = _.value
                      , G = _.nonInteraction
                      , q = _.transport;
                    if (!A || !S) {
                        console.warn("args.category AND args.action are required in event()");
                        return
                    }
                    var re = {
                        hitType: "event",
                        eventCategory: (0,
                        r.default)(A),
                        eventAction: (0,
                        r.default)(S)
                    };
                    M && (re.eventLabel = (0,
                    r.default)(M)),
                    typeof H < "u" && (typeof H != "number" ? console.warn("Expected `args.value` arg to be a Number.") : re.eventValue = H),
                    typeof G < "u" && (typeof G != "boolean" ? console.warn("`args.nonInteraction` must be a boolean.") : re.nonInteraction = G),
                    typeof q < "u" && (typeof q != "string" ? console.warn("`args.transport` must be a string.") : (["beacon", "xhr", "image"].indexOf(q) === -1 && console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),
                    re.transport = q)),
                    O._gaCommand("send", re)
                }
            }),
            P(this, "send", function(_) {
                O._gaCommand("send", _)
            }),
            this.reset()
        }
        return L(C, [{
            key: "gtag",
            value: function() {
                this._gtag.apply(this, arguments)
            }
        }]),
        C
    }();
    e.GA4 = D;
    var F = new D;
    e.default = F
}
)(w0);
(function(e) {
    function t(l) {
        "@babel/helpers - typeof";
        return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(c) {
            return typeof c
        }
        : function(c) {
            return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c
        }
        ,
        t(l)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = e.ReactGAImplementation = void 0;
    var r = o(w0);
    function n(l) {
        if (typeof WeakMap != "function")
            return null;
        var c = new WeakMap
          , u = new WeakMap;
        return (n = function(d) {
            return d ? u : c
        }
        )(l)
    }
    function o(l, c) {
        if (l && l.__esModule)
            return l;
        if (l === null || t(l) !== "object" && typeof l != "function")
            return {
                default: l
            };
        var u = n(c);
        if (u && u.has(l))
            return u.get(l);
        var h = {}
          , d = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var m in l)
            if (m !== "default" && Object.prototype.hasOwnProperty.call(l, m)) {
                var v = d ? Object.getOwnPropertyDescriptor(l, m) : null;
                v && (v.get || v.set) ? Object.defineProperty(h, m, v) : h[m] = l[m]
            }
        return h.default = l,
        u && u.set(l, h),
        h
    }
    var a = r.GA4;
    e.ReactGAImplementation = a;
    var i = r.default;
    e.default = i
}
)(b0);
const N0 = zu(b0);
N0.initialize("G-S6Z0N681DP");
N0.send({
    hitType: "pageview",
    page: window.location.pathname
});
xc.createRoot(document.getElementById("root")).render(s.jsx(Ge.StrictMode, {
    children: s.jsx(G3, {})
}));
