/*! For license information please see main.33e6e5bd.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      4: (e, t, n) => {
        var r = n(853),
          a = n(43),
          o = n(950);
        function l(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function i(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function u(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              (0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return));
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function s(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function c(e) {
          if (u(e) !== e) throw Error(l(188));
        }
        function d(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e;
          for (e = e.child; null !== e; ) {
            if (null !== (t = d(e))) return t;
            e = e.sibling;
          }
          return null;
        }
        var f = Object.assign,
          p = Symbol.for("react.element"),
          m = Symbol.for("react.transitional.element"),
          h = Symbol.for("react.portal"),
          g = Symbol.for("react.fragment"),
          y = Symbol.for("react.strict_mode"),
          v = Symbol.for("react.profiler"),
          b = Symbol.for("react.provider"),
          w = Symbol.for("react.consumer"),
          k = Symbol.for("react.context"),
          x = Symbol.for("react.forward_ref"),
          S = Symbol.for("react.suspense"),
          _ = Symbol.for("react.suspense_list"),
          E = Symbol.for("react.memo"),
          C = Symbol.for("react.lazy");
        Symbol.for("react.scope");
        var N = Symbol.for("react.activity");
        (Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker"));
        var j = Symbol.for("react.memo_cache_sentinel");
        Symbol.for("react.view_transition");
        var P = Symbol.iterator;
        function T(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (P && e[P]) || e["@@iterator"])
              ? e
              : null;
        }
        var O = Symbol.for("react.client.reference");
        function z(e) {
          if (null == e) return null;
          if ("function" === typeof e)
            return e.$$typeof === O ? null : e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case g:
              return "Fragment";
            case v:
              return "Profiler";
            case y:
              return "StrictMode";
            case S:
              return "Suspense";
            case _:
              return "SuspenseList";
            case N:
              return "Activity";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case h:
                return "Portal";
              case k:
                return (e.displayName || "Context") + ".Provider";
              case w:
                return (e._context.displayName || "Context") + ".Consumer";
              case x:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case E:
                return null !== (t = e.displayName || null)
                  ? t
                  : z(e.type) || "Memo";
              case C:
                ((t = e._payload), (e = e._init));
                try {
                  return z(e(t));
                } catch (n) {}
            }
          return null;
        }
        var L = Array.isArray,
          R = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          A = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          F = { pending: !1, data: null, method: null, action: null },
          M = [],
          D = -1;
        function I(e) {
          return { current: e };
        }
        function U(e) {
          0 > D || ((e.current = M[D]), (M[D] = null), D--);
        }
        function H(e, t) {
          (D++, (M[D] = e.current), (e.current = t));
        }
        var B = I(null),
          $ = I(null),
          V = I(null),
          W = I(null);
        function q(e, t) {
          switch ((H(V, t), H($, e), H(B, null), t.nodeType)) {
            case 9:
            case 11:
              e = (e = t.documentElement) && (e = e.namespaceURI) ? ad(e) : 0;
              break;
            default:
              if (((e = t.tagName), (t = t.namespaceURI)))
                e = od((t = ad(t)), e);
              else
                switch (e) {
                  case "svg":
                    e = 1;
                    break;
                  case "math":
                    e = 2;
                    break;
                  default:
                    e = 0;
                }
          }
          (U(B), H(B, e));
        }
        function Q() {
          (U(B), U($), U(V));
        }
        function K(e) {
          null !== e.memoizedState && H(W, e);
          var t = B.current,
            n = od(t, e.type);
          t !== n && (H($, e), H(B, n));
        }
        function X(e) {
          ($.current === e && (U(B), U($)),
            W.current === e && (U(W), (Kd._currentValue = F)));
        }
        var Y = Object.prototype.hasOwnProperty,
          G = r.unstable_scheduleCallback,
          J = r.unstable_cancelCallback,
          Z = r.unstable_shouldYield,
          ee = r.unstable_requestPaint,
          te = r.unstable_now,
          ne = r.unstable_getCurrentPriorityLevel,
          re = r.unstable_ImmediatePriority,
          ae = r.unstable_UserBlockingPriority,
          oe = r.unstable_NormalPriority,
          le = r.unstable_LowPriority,
          ie = r.unstable_IdlePriority,
          ue = r.log,
          se = r.unstable_setDisableYieldValue,
          ce = null,
          de = null;
        function fe(e) {
          if (
            ("function" === typeof ue && se(e),
            de && "function" === typeof de.setStrictMode)
          )
            try {
              de.setStrictMode(ce, e);
            } catch (t) {}
        }
        var pe = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((me(e) / he) | 0)) | 0;
              },
          me = Math.log,
          he = Math.LN2;
        var ge = 256,
          ye = 4194304;
        function ve(e) {
          var t = 42 & e;
          if (0 !== t) return t;
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
              return 64;
            case 128:
              return 128;
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
              return 4194048 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              return 62914560 & e;
            case 67108864:
              return 67108864;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 0;
            default:
              return e;
          }
        }
        function be(e, t, n) {
          var r = e.pendingLanes;
          if (0 === r) return 0;
          var a = 0,
            o = e.suspendedLanes,
            l = e.pingedLanes;
          e = e.warmLanes;
          var i = 134217727 & r;
          return (
            0 !== i
              ? 0 !== (r = i & ~o)
                ? (a = ve(r))
                : 0 !== (l &= i)
                  ? (a = ve(l))
                  : n || (0 !== (n = i & ~e) && (a = ve(n)))
              : 0 !== (i = r & ~o)
                ? (a = ve(i))
                : 0 !== l
                  ? (a = ve(l))
                  : n || (0 !== (n = r & ~e) && (a = ve(n))),
            0 === a
              ? 0
              : 0 !== t &&
                  t !== a &&
                  0 === (t & o) &&
                  ((o = a & -a) >= (n = t & -t) ||
                    (32 === o && 0 !== (4194048 & n)))
                ? t
                : a
          );
        }
        function we(e, t) {
          return (
            0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t)
          );
        }
        function ke(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
              return t + 250;
            case 16:
            case 32:
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
            default:
              return -1;
          }
        }
        function xe() {
          var e = ge;
          return (0 === (4194048 & (ge <<= 1)) && (ge = 256), e);
        }
        function Se() {
          var e = ye;
          return (0 === (62914560 & (ye <<= 1)) && (ye = 4194304), e);
        }
        function _e(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Ee(e, t) {
          ((e.pendingLanes |= t),
            268435456 !== t &&
              ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
        }
        function Ce(e, t, n) {
          ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
          var r = 31 - pe(t);
          ((e.entangledLanes |= t),
            (e.entanglements[r] =
              1073741824 | e.entanglements[r] | (4194090 & n)));
        }
        function Ne(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - pe(n),
              a = 1 << r;
            ((a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a));
          }
        }
        function je(e) {
          switch (e) {
            case 2:
              e = 1;
              break;
            case 8:
              e = 4;
              break;
            case 32:
              e = 16;
              break;
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
              e = 128;
              break;
            case 268435456:
              e = 134217728;
              break;
            default:
              e = 0;
          }
          return e;
        }
        function Pe(e) {
          return 2 < (e &= -e)
            ? 8 < e
              ? 0 !== (134217727 & e)
                ? 32
                : 268435456
              : 8
            : 2;
        }
        function Te() {
          var e = A.p;
          return 0 !== e ? e : void 0 === (e = window.event) ? 32 : cf(e.type);
        }
        var Oe = Math.random().toString(36).slice(2),
          ze = "__reactFiber$" + Oe,
          Le = "__reactProps$" + Oe,
          Re = "__reactContainer$" + Oe,
          Ae = "__reactEvents$" + Oe,
          Fe = "__reactListeners$" + Oe,
          Me = "__reactHandles$" + Oe,
          De = "__reactResources$" + Oe,
          Ie = "__reactMarker$" + Oe;
        function Ue(e) {
          (delete e[ze],
            delete e[Le],
            delete e[Ae],
            delete e[Fe],
            delete e[Me]);
        }
        function He(e) {
          var t = e[ze];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[Re] || n[ze])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = bd(e); null !== e; ) {
                  if ((n = e[ze])) return n;
                  e = bd(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function Be(e) {
          if ((e = e[ze] || e[Re])) {
            var t = e.tag;
            if (
              5 === t ||
              6 === t ||
              13 === t ||
              26 === t ||
              27 === t ||
              3 === t
            )
              return e;
          }
          return null;
        }
        function $e(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
          throw Error(l(33));
        }
        function Ve(e) {
          var t = e[De];
          return (
            t ||
              (t = e[De] =
                { hoistableStyles: new Map(), hoistableScripts: new Map() }),
            t
          );
        }
        function We(e) {
          e[Ie] = !0;
        }
        var qe = new Set(),
          Qe = {};
        function Ke(e, t) {
          (Xe(e, t), Xe(e + "Capture", t));
        }
        function Xe(e, t) {
          for (Qe[e] = t, e = 0; e < t.length; e++) qe.add(t[e]);
        }
        var Ye,
          Ge,
          Je = RegExp(
            "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
          ),
          Ze = {},
          et = {};
        function tt(e, t, n) {
          if (
            ((a = t),
            Y.call(et, a) ||
              (!Y.call(Ze, a) &&
                (Je.test(a) ? (et[a] = !0) : ((Ze[a] = !0), 0))))
          )
            if (null === n) e.removeAttribute(t);
            else {
              switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                  return void e.removeAttribute(t);
                case "boolean":
                  var r = t.toLowerCase().slice(0, 5);
                  if ("data-" !== r && "aria-" !== r)
                    return void e.removeAttribute(t);
              }
              e.setAttribute(t, "" + n);
            }
          var a;
        }
        function nt(e, t, n) {
          if (null === n) e.removeAttribute(t);
          else {
            switch (typeof n) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(t);
            }
            e.setAttribute(t, "" + n);
          }
        }
        function rt(e, t, n, r) {
          if (null === r) e.removeAttribute(n);
          else {
            switch (typeof r) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(n);
            }
            e.setAttributeNS(t, n, "" + r);
          }
        }
        function at(e) {
          if (void 0 === Ye)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              ((Ye = (t && t[1]) || ""),
                (Ge =
                  -1 < n.stack.indexOf("\n    at")
                    ? " (<anonymous>)"
                    : -1 < n.stack.indexOf("@")
                      ? "@unknown:0:0"
                      : ""));
            }
          return "\n" + Ye + e + Ge;
        }
        var ot = !1;
        function lt(e, t) {
          if (!e || ot) return "";
          ot = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            var r = {
              DetermineComponentFrameRoot: function () {
                try {
                  if (t) {
                    var n = function () {
                      throw Error();
                    };
                    if (
                      (Object.defineProperty(n.prototype, "props", {
                        set: function () {
                          throw Error();
                        },
                      }),
                      "object" === typeof Reflect && Reflect.construct)
                    ) {
                      try {
                        Reflect.construct(n, []);
                      } catch (a) {
                        var r = a;
                      }
                      Reflect.construct(e, [], n);
                    } else {
                      try {
                        n.call();
                      } catch (o) {
                        r = o;
                      }
                      e.call(n.prototype);
                    }
                  } else {
                    try {
                      throw Error();
                    } catch (l) {
                      r = l;
                    }
                    (n = e()) &&
                      "function" === typeof n.catch &&
                      n.catch(function () {});
                  }
                } catch (i) {
                  if (i && r && "string" === typeof i.stack)
                    return [i.stack, r.stack];
                }
                return [null, null];
              },
            };
            r.DetermineComponentFrameRoot.displayName =
              "DetermineComponentFrameRoot";
            var a = Object.getOwnPropertyDescriptor(
              r.DetermineComponentFrameRoot,
              "name",
            );
            a &&
              a.configurable &&
              Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot",
              });
            var o = r.DetermineComponentFrameRoot(),
              l = o[0],
              i = o[1];
            if (l && i) {
              var u = l.split("\n"),
                s = i.split("\n");
              for (
                a = r = 0;
                r < u.length && !u[r].includes("DetermineComponentFrameRoot");

              )
                r++;
              for (
                ;
                a < s.length && !s[a].includes("DetermineComponentFrameRoot");

              )
                a++;
              if (r === u.length || a === s.length)
                for (
                  r = u.length - 1, a = s.length - 1;
                  1 <= r && 0 <= a && u[r] !== s[a];

                )
                  a--;
              for (; 1 <= r && 0 <= a; r--, a--)
                if (u[r] !== s[a]) {
                  if (1 !== r || 1 !== a)
                    do {
                      if ((r--, 0 > --a || u[r] !== s[a])) {
                        var c = "\n" + u[r].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            c.includes("<anonymous>") &&
                            (c = c.replace("<anonymous>", e.displayName)),
                          c
                        );
                      }
                    } while (1 <= r && 0 <= a);
                  break;
                }
            }
          } finally {
            ((ot = !1), (Error.prepareStackTrace = n));
          }
          return (n = e ? e.displayName || e.name : "") ? at(n) : "";
        }
        function it(e) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              return at(e.type);
            case 16:
              return at("Lazy");
            case 13:
              return at("Suspense");
            case 19:
              return at("SuspenseList");
            case 0:
            case 15:
              return lt(e.type, !1);
            case 11:
              return lt(e.type.render, !1);
            case 1:
              return lt(e.type, !0);
            case 31:
              return at("Activity");
            default:
              return "";
          }
        }
        function ut(e) {
          try {
            var t = "";
            do {
              ((t += it(e)), (e = e.return));
            } while (e);
            return t;
          } catch (n) {
            return "\nError generating stack: " + n.message + "\n" + n.stack;
          }
        }
        function st(e) {
          switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function ct(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function dt(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = ct(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      ((r = "" + e), o.call(this, e));
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      ((e._valueTracker = null), delete e[t]);
                    },
                  }
                );
              }
            })(e));
        }
        function ft(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = ct(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function pt(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        var mt = /[\n"\\]/g;
        function ht(e) {
          return e.replace(mt, function (e) {
            return "\\" + e.charCodeAt(0).toString(16) + " ";
          });
        }
        function gt(e, t, n, r, a, o, l, i) {
          ((e.name = ""),
            null != l &&
            "function" !== typeof l &&
            "symbol" !== typeof l &&
            "boolean" !== typeof l
              ? (e.type = l)
              : e.removeAttribute("type"),
            null != t
              ? "number" === l
                ? ((0 === t && "" === e.value) || e.value != t) &&
                  (e.value = "" + st(t))
                : e.value !== "" + st(t) && (e.value = "" + st(t))
              : ("submit" !== l && "reset" !== l) || e.removeAttribute("value"),
            null != t
              ? vt(e, l, st(t))
              : null != n
                ? vt(e, l, st(n))
                : null != r && e.removeAttribute("value"),
            null == a && null != o && (e.defaultChecked = !!o),
            null != a &&
              (e.checked =
                a && "function" !== typeof a && "symbol" !== typeof a),
            null != i &&
            "function" !== typeof i &&
            "symbol" !== typeof i &&
            "boolean" !== typeof i
              ? (e.name = "" + st(i))
              : e.removeAttribute("name"));
        }
        function yt(e, t, n, r, a, o, l, i) {
          if (
            (null != o &&
              "function" !== typeof o &&
              "symbol" !== typeof o &&
              "boolean" !== typeof o &&
              (e.type = o),
            null != t || null != n)
          ) {
            if (
              !(
                ("submit" !== o && "reset" !== o) ||
                (void 0 !== t && null !== t)
              )
            )
              return;
            ((n = null != n ? "" + st(n) : ""),
              (t = null != t ? "" + st(t) : n),
              i || t === e.value || (e.value = t),
              (e.defaultValue = t));
          }
          ((r =
            "function" !== typeof (r = null != r ? r : a) &&
            "symbol" !== typeof r &&
            !!r),
            (e.checked = i ? e.checked : !!r),
            (e.defaultChecked = !!r),
            null != l &&
              "function" !== typeof l &&
              "symbol" !== typeof l &&
              "boolean" !== typeof l &&
              (e.name = l));
        }
        function vt(e, t, n) {
          ("number" === t && pt(e.ownerDocument) === e) ||
            e.defaultValue === "" + n ||
            (e.defaultValue = "" + n);
        }
        function bt(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              ((a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0));
          } else {
            for (n = "" + st(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0),
                  void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function wt(e, t, n) {
          null == t ||
          ((t = "" + st(t)) !== e.value && (e.value = t), null != n)
            ? (e.defaultValue = null != n ? "" + st(n) : "")
            : e.defaultValue !== t && (e.defaultValue = t);
        }
        function kt(e, t, n, r) {
          if (null == t) {
            if (null != r) {
              if (null != n) throw Error(l(92));
              if (L(r)) {
                if (1 < r.length) throw Error(l(93));
                r = r[0];
              }
              n = r;
            }
            (null == n && (n = ""), (t = n));
          }
          ((n = st(t)),
            (e.defaultValue = n),
            (r = e.textContent) === n &&
              "" !== r &&
              null !== r &&
              (e.value = r));
        }
        function xt(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var St = new Set(
          "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
            " ",
          ),
        );
        function _t(e, t, n) {
          var r = 0 === t.indexOf("--");
          null == n || "boolean" === typeof n || "" === n
            ? r
              ? e.setProperty(t, "")
              : "float" === t
                ? (e.cssFloat = "")
                : (e[t] = "")
            : r
              ? e.setProperty(t, n)
              : "number" !== typeof n || 0 === n || St.has(t)
                ? "float" === t
                  ? (e.cssFloat = n)
                  : (e[t] = ("" + n).trim())
                : (e[t] = n + "px");
        }
        function Et(e, t, n) {
          if (null != t && "object" !== typeof t) throw Error(l(62));
          if (((e = e.style), null != n)) {
            for (var r in n)
              !n.hasOwnProperty(r) ||
                (null != t && t.hasOwnProperty(r)) ||
                (0 === r.indexOf("--")
                  ? e.setProperty(r, "")
                  : "float" === r
                    ? (e.cssFloat = "")
                    : (e[r] = ""));
            for (var a in t)
              ((r = t[a]), t.hasOwnProperty(a) && n[a] !== r && _t(e, a, r));
          } else for (var o in t) t.hasOwnProperty(o) && _t(e, o, t[o]);
        }
        function Ct(e) {
          if (-1 === e.indexOf("-")) return !1;
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
              return !0;
          }
        }
        var Nt = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"],
          ]),
          jt =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function Pt(e) {
          return jt.test("" + e)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : e;
        }
        var Tt = null;
        function Ot(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var zt = null,
          Lt = null;
        function Rt(e) {
          var t = Be(e);
          if (t && (e = t.stateNode)) {
            var n = e[Le] || null;
            e: switch (((e = t.stateNode), t.type)) {
              case "input":
                if (
                  (gt(
                    e,
                    n.value,
                    n.defaultValue,
                    n.defaultValue,
                    n.checked,
                    n.defaultChecked,
                    n.type,
                    n.name,
                  ),
                  (t = n.name),
                  "radio" === n.type && null != t)
                ) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name="' + ht("" + t) + '"][type="radio"]',
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = r[Le] || null;
                      if (!a) throw Error(l(90));
                      gt(
                        r,
                        a.value,
                        a.defaultValue,
                        a.defaultValue,
                        a.checked,
                        a.defaultChecked,
                        a.type,
                        a.name,
                      );
                    }
                  }
                  for (t = 0; t < n.length; t++)
                    (r = n[t]).form === e.form && ft(r);
                }
                break e;
              case "textarea":
                wt(e, n.value, n.defaultValue);
                break e;
              case "select":
                null != (t = n.value) && bt(e, !!n.multiple, t, !1);
            }
          }
        }
        var At = !1;
        function Ft(e, t, n) {
          if (At) return e(t, n);
          At = !0;
          try {
            return e(t);
          } finally {
            if (
              ((At = !1),
              (null !== zt || null !== Lt) &&
                (Hs(), zt && ((t = zt), (e = Lt), (Lt = zt = null), Rt(t), e)))
            )
              for (t = 0; t < e.length; t++) Rt(e[t]);
          }
        }
        function Mt(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = n[Le] || null;
          if (null === r) return null;
          n = r[t];
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
              ((r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r));
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(l(231, t, typeof n));
          return n;
        }
        var Dt = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          It = !1;
        if (Dt)
          try {
            var Ut = {};
            (Object.defineProperty(Ut, "passive", {
              get: function () {
                It = !0;
              },
            }),
              window.addEventListener("test", Ut, Ut),
              window.removeEventListener("test", Ut, Ut));
          } catch (Rf) {
            It = !1;
          }
        var Ht = null,
          Bt = null,
          $t = null;
        function Vt() {
          if ($t) return $t;
          var e,
            t,
            n = Bt,
            r = n.length,
            a = "value" in Ht ? Ht.value : Ht.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var l = r - e;
          for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
          return ($t = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function Wt(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function qt() {
          return !0;
        }
        function Qt() {
          return !1;
        }
        function Kt(e) {
          function t(t, n, r, a, o) {
            for (var l in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? qt
                : Qt),
              (this.isPropagationStopped = Qt),
              this
            );
          }
          return (
            f(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = qt));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = qt));
              },
              persist: function () {},
              isPersistent: qt,
            }),
            t
          );
        }
        var Xt,
          Yt,
          Gt,
          Jt = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          Zt = Kt(Jt),
          en = f({}, Jt, { view: 0, detail: 0 }),
          tn = Kt(en),
          nn = f({}, en, {
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
            getModifierState: mn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== Gt &&
                    (Gt && "mousemove" === e.type
                      ? ((Xt = e.screenX - Gt.screenX),
                        (Yt = e.screenY - Gt.screenY))
                      : (Yt = Xt = 0),
                    (Gt = e)),
                  Xt);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : Yt;
            },
          }),
          rn = Kt(nn),
          an = Kt(f({}, nn, { dataTransfer: 0 })),
          on = Kt(f({}, en, { relatedTarget: 0 })),
          ln = Kt(
            f({}, Jt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          un = Kt(
            f({}, Jt, {
              clipboardData: function (e) {
                return "clipboardData" in e
                  ? e.clipboardData
                  : window.clipboardData;
              },
            }),
          ),
          sn = Kt(f({}, Jt, { data: 0 })),
          cn = {
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
            MozPrintableKey: "Unidentified",
          },
          dn = {
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
            224: "Meta",
          },
          fn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function pn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = fn[e]) && !!t[e];
        }
        function mn() {
          return pn;
        }
        var hn = Kt(
            f({}, en, {
              key: function (e) {
                if (e.key) {
                  var t = cn[e.key] || e.key;
                  if ("Unidentified" !== t) return t;
                }
                return "keypress" === e.type
                  ? 13 === (e = Wt(e))
                    ? "Enter"
                    : String.fromCharCode(e)
                  : "keydown" === e.type || "keyup" === e.type
                    ? dn[e.keyCode] || "Unidentified"
                    : "";
              },
              code: 0,
              location: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              repeat: 0,
              locale: 0,
              getModifierState: mn,
              charCode: function (e) {
                return "keypress" === e.type ? Wt(e) : 0;
              },
              keyCode: function (e) {
                return "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
              which: function (e) {
                return "keypress" === e.type
                  ? Wt(e)
                  : "keydown" === e.type || "keyup" === e.type
                    ? e.keyCode
                    : 0;
              },
            }),
          ),
          gn = Kt(
            f({}, nn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          yn = Kt(
            f({}, en, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: mn,
            }),
          ),
          vn = Kt(
            f({}, Jt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          bn = Kt(
            f({}, nn, {
              deltaX: function (e) {
                return "deltaX" in e
                  ? e.deltaX
                  : "wheelDeltaX" in e
                    ? -e.wheelDeltaX
                    : 0;
              },
              deltaY: function (e) {
                return "deltaY" in e
                  ? e.deltaY
                  : "wheelDeltaY" in e
                    ? -e.wheelDeltaY
                    : "wheelDelta" in e
                      ? -e.wheelDelta
                      : 0;
              },
              deltaZ: 0,
              deltaMode: 0,
            }),
          ),
          wn = Kt(f({}, Jt, { newState: 0, oldState: 0 })),
          kn = [9, 13, 27, 32],
          xn = Dt && "CompositionEvent" in window,
          Sn = null;
        Dt && "documentMode" in document && (Sn = document.documentMode);
        var _n = Dt && "TextEvent" in window && !Sn,
          En = Dt && (!xn || (Sn && 8 < Sn && 11 >= Sn)),
          Cn = String.fromCharCode(32),
          Nn = !1;
        function jn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== kn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Pn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Tn = !1;
        var On = {
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
          week: !0,
        };
        function zn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!On[e.type] : "textarea" === t;
        }
        function Ln(e, t, n, r) {
          (zt ? (Lt ? Lt.push(r) : (Lt = [r])) : (zt = r),
            0 < (t = Vc(t, "onChange")).length &&
              ((n = new Zt("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t })));
        }
        var Rn = null,
          An = null;
        function Fn(e) {
          Fc(e, 0);
        }
        function Mn(e) {
          if (ft($e(e))) return e;
        }
        function Dn(e, t) {
          if ("change" === e) return t;
        }
        var In = !1;
        if (Dt) {
          var Un;
          if (Dt) {
            var Hn = "oninput" in document;
            if (!Hn) {
              var Bn = document.createElement("div");
              (Bn.setAttribute("oninput", "return;"),
                (Hn = "function" === typeof Bn.oninput));
            }
            Un = Hn;
          } else Un = !1;
          In = Un && (!document.documentMode || 9 < document.documentMode);
        }
        function $n() {
          Rn && (Rn.detachEvent("onpropertychange", Vn), (An = Rn = null));
        }
        function Vn(e) {
          if ("value" === e.propertyName && Mn(An)) {
            var t = [];
            (Ln(t, An, e, Ot(e)), Ft(Fn, t));
          }
        }
        function Wn(e, t, n) {
          "focusin" === e
            ? ($n(), (An = n), (Rn = t).attachEvent("onpropertychange", Vn))
            : "focusout" === e && $n();
        }
        function qn(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Mn(An);
        }
        function Qn(e, t) {
          if ("click" === e) return Mn(t);
        }
        function Kn(e, t) {
          if ("input" === e || "change" === e) return Mn(t);
        }
        var Xn =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function Yn(e, t) {
          if (Xn(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!Y.call(t, a) || !Xn(e[a], t[a])) return !1;
          }
          return !0;
        }
        function Gn(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function Jn(e, t) {
          var n,
            r = Gn(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = Gn(r);
          }
        }
        function Zn(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? Zn(e, t.parentNode)
                  : "contains" in e
                    ? e.contains(t)
                    : !!e.compareDocumentPosition &&
                      !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function er(e) {
          for (
            var t = pt(
              (e =
                null != e &&
                null != e.ownerDocument &&
                null != e.ownerDocument.defaultView
                  ? e.ownerDocument.defaultView
                  : window).document,
            );
            t instanceof e.HTMLIFrameElement;

          ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = pt((e = t.contentWindow).document);
          }
          return t;
        }
        function tr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var nr =
            Dt && "documentMode" in document && 11 >= document.documentMode,
          rr = null,
          ar = null,
          or = null,
          lr = !1;
        function ir(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
                ? n
                : n.ownerDocument;
          lr ||
            null == rr ||
            rr !== pt(r) ||
            ("selectionStart" in (r = rr) && tr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (or && Yn(or, r)) ||
              ((or = r),
              0 < (r = Vc(ar, "onSelect")).length &&
                ((t = new Zt("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = rr))));
        }
        function ur(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var sr = {
            animationend: ur("Animation", "AnimationEnd"),
            animationiteration: ur("Animation", "AnimationIteration"),
            animationstart: ur("Animation", "AnimationStart"),
            transitionrun: ur("Transition", "TransitionRun"),
            transitionstart: ur("Transition", "TransitionStart"),
            transitioncancel: ur("Transition", "TransitionCancel"),
            transitionend: ur("Transition", "TransitionEnd"),
          },
          cr = {},
          dr = {};
        function fr(e) {
          if (cr[e]) return cr[e];
          if (!sr[e]) return e;
          var t,
            n = sr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in dr) return (cr[e] = n[t]);
          return e;
        }
        Dt &&
          ((dr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete sr.animationend.animation,
            delete sr.animationiteration.animation,
            delete sr.animationstart.animation),
          "TransitionEvent" in window || delete sr.transitionend.transition);
        var pr = fr("animationend"),
          mr = fr("animationiteration"),
          hr = fr("animationstart"),
          gr = fr("transitionrun"),
          yr = fr("transitionstart"),
          vr = fr("transitioncancel"),
          br = fr("transitionend"),
          wr = new Map(),
          kr =
            "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " ",
            );
        function xr(e, t) {
          (wr.set(e, t), Ke(t, [e]));
        }
        kr.push("scrollEnd");
        var Sr = new WeakMap();
        function _r(e, t) {
          if ("object" === typeof e && null !== e) {
            var n = Sr.get(e);
            return void 0 !== n
              ? n
              : ((t = { value: e, source: t, stack: ut(t) }), Sr.set(e, t), t);
          }
          return { value: e, source: t, stack: ut(t) };
        }
        var Er = [],
          Cr = 0,
          Nr = 0;
        function jr() {
          for (var e = Cr, t = (Nr = Cr = 0); t < e; ) {
            var n = Er[t];
            Er[t++] = null;
            var r = Er[t];
            Er[t++] = null;
            var a = Er[t];
            Er[t++] = null;
            var o = Er[t];
            if (((Er[t++] = null), null !== r && null !== a)) {
              var l = r.pending;
              (null === l ? (a.next = a) : ((a.next = l.next), (l.next = a)),
                (r.pending = a));
            }
            0 !== o && zr(n, a, o);
          }
        }
        function Pr(e, t, n, r) {
          ((Er[Cr++] = e),
            (Er[Cr++] = t),
            (Er[Cr++] = n),
            (Er[Cr++] = r),
            (Nr |= r),
            (e.lanes |= r),
            null !== (e = e.alternate) && (e.lanes |= r));
        }
        function Tr(e, t, n, r) {
          return (Pr(e, t, n, r), Lr(e));
        }
        function Or(e, t) {
          return (Pr(e, null, null, t), Lr(e));
        }
        function zr(e, t, n) {
          e.lanes |= n;
          var r = e.alternate;
          null !== r && (r.lanes |= n);
          for (var a = !1, o = e.return; null !== o; )
            ((o.childLanes |= n),
              null !== (r = o.alternate) && (r.childLanes |= n),
              22 === o.tag &&
                (null === (e = o.stateNode) || 1 & e._visibility || (a = !0)),
              (e = o),
              (o = o.return));
          return 3 === e.tag
            ? ((o = e.stateNode),
              a &&
                null !== t &&
                ((a = 31 - pe(n)),
                null === (r = (e = o.hiddenUpdates)[a])
                  ? (e[a] = [t])
                  : r.push(t),
                (t.lane = 536870912 | n)),
              o)
            : null;
        }
        function Lr(e) {
          if (50 < zs) throw ((zs = 0), (Ls = null), Error(l(185)));
          for (var t = e.return; null !== t; ) t = (e = t).return;
          return 3 === e.tag ? e.stateNode : null;
        }
        var Rr = {};
        function Ar(e, t, n, r) {
          ((this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null));
        }
        function Fr(e, t, n, r) {
          return new Ar(e, t, n, r);
        }
        function Mr(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Dr(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Fr(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 65011712 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            (n.refCleanup = e.refCleanup),
            n
          );
        }
        function Ir(e, t) {
          e.flags &= 65011714;
          var n = e.alternate;
          return (
            null === n
              ? ((e.childLanes = 0),
                (e.lanes = t),
                (e.child = null),
                (e.subtreeFlags = 0),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.updateQueue = null),
                (e.dependencies = null),
                (e.stateNode = null))
              : ((e.childLanes = n.childLanes),
                (e.lanes = n.lanes),
                (e.child = n.child),
                (e.subtreeFlags = 0),
                (e.deletions = null),
                (e.memoizedProps = n.memoizedProps),
                (e.memoizedState = n.memoizedState),
                (e.updateQueue = n.updateQueue),
                (e.type = n.type),
                (t = n.dependencies),
                (e.dependencies =
                  null === t
                    ? null
                    : { lanes: t.lanes, firstContext: t.firstContext })),
            e
          );
        }
        function Ur(e, t, n, r, a, o) {
          var i = 0;
          if (((r = e), "function" === typeof e)) Mr(e) && (i = 1);
          else if ("string" === typeof e)
            i = (function (e, t, n) {
              if (1 === n || null != t.itemProp) return !1;
              switch (e) {
                case "meta":
                case "title":
                  return !0;
                case "style":
                  if (
                    "string" !== typeof t.precedence ||
                    "string" !== typeof t.href ||
                    "" === t.href
                  )
                    break;
                  return !0;
                case "link":
                  if (
                    "string" !== typeof t.rel ||
                    "string" !== typeof t.href ||
                    "" === t.href ||
                    t.onLoad ||
                    t.onError
                  )
                    break;
                  return (
                    "stylesheet" !== t.rel ||
                    ((e = t.disabled),
                    "string" === typeof t.precedence && null == e)
                  );
                case "script":
                  if (
                    t.async &&
                    "function" !== typeof t.async &&
                    "symbol" !== typeof t.async &&
                    !t.onLoad &&
                    !t.onError &&
                    t.src &&
                    "string" === typeof t.src
                  )
                    return !0;
              }
              return !1;
            })(e, n, B.current)
              ? 26
              : "html" === e || "head" === e || "body" === e
                ? 27
                : 5;
          else
            e: switch (e) {
              case N:
                return (
                  ((e = Fr(31, n, t, a)).elementType = N),
                  (e.lanes = o),
                  e
                );
              case g:
                return Hr(n.children, a, o, t);
              case y:
                ((i = 8), (a |= 24));
                break;
              case v:
                return (
                  ((e = Fr(12, n, t, 2 | a)).elementType = v),
                  (e.lanes = o),
                  e
                );
              case S:
                return (
                  ((e = Fr(13, n, t, a)).elementType = S),
                  (e.lanes = o),
                  e
                );
              case _:
                return (
                  ((e = Fr(19, n, t, a)).elementType = _),
                  (e.lanes = o),
                  e
                );
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case b:
                    case k:
                      i = 10;
                      break e;
                    case w:
                      i = 9;
                      break e;
                    case x:
                      i = 11;
                      break e;
                    case E:
                      i = 14;
                      break e;
                    case C:
                      ((i = 16), (r = null));
                      break e;
                  }
                ((i = 29),
                  (n = Error(l(130, null === e ? "null" : typeof e, ""))),
                  (r = null));
            }
          return (
            ((t = Fr(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Hr(e, t, n, r) {
          return (((e = Fr(7, e, r, t)).lanes = n), e);
        }
        function Br(e, t, n) {
          return (((e = Fr(6, e, null, t)).lanes = n), e);
        }
        function $r(e, t, n) {
          return (
            ((t = Fr(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t,
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        var Vr = [],
          Wr = 0,
          qr = null,
          Qr = 0,
          Kr = [],
          Xr = 0,
          Yr = null,
          Gr = 1,
          Jr = "";
        function Zr(e, t) {
          ((Vr[Wr++] = Qr), (Vr[Wr++] = qr), (qr = e), (Qr = t));
        }
        function ea(e, t, n) {
          ((Kr[Xr++] = Gr), (Kr[Xr++] = Jr), (Kr[Xr++] = Yr), (Yr = e));
          var r = Gr;
          e = Jr;
          var a = 32 - pe(r) - 1;
          ((r &= ~(1 << a)), (n += 1));
          var o = 32 - pe(t) + a;
          if (30 < o) {
            var l = a - (a % 5);
            ((o = (r & ((1 << l) - 1)).toString(32)),
              (r >>= l),
              (a -= l),
              (Gr = (1 << (32 - pe(t) + a)) | (n << a) | r),
              (Jr = o + e));
          } else ((Gr = (1 << o) | (n << a) | r), (Jr = e));
        }
        function ta(e) {
          null !== e.return && (Zr(e, 1), ea(e, 1, 0));
        }
        function na(e) {
          for (; e === qr; )
            ((qr = Vr[--Wr]),
              (Vr[Wr] = null),
              (Qr = Vr[--Wr]),
              (Vr[Wr] = null));
          for (; e === Yr; )
            ((Yr = Kr[--Xr]),
              (Kr[Xr] = null),
              (Jr = Kr[--Xr]),
              (Kr[Xr] = null),
              (Gr = Kr[--Xr]),
              (Kr[Xr] = null));
        }
        var ra = null,
          aa = null,
          oa = !1,
          la = null,
          ia = !1,
          ua = Error(l(519));
        function sa(e) {
          throw (ha(_r(Error(l(418, "")), e)), ua);
        }
        function ca(e) {
          var t = e.stateNode,
            n = e.type,
            r = e.memoizedProps;
          switch (((t[ze] = e), (t[Le] = r), n)) {
            case "dialog":
              (Mc("cancel", t), Mc("close", t));
              break;
            case "iframe":
            case "object":
            case "embed":
              Mc("load", t);
              break;
            case "video":
            case "audio":
              for (n = 0; n < Rc.length; n++) Mc(Rc[n], t);
              break;
            case "source":
              Mc("error", t);
              break;
            case "img":
            case "image":
            case "link":
              (Mc("error", t), Mc("load", t));
              break;
            case "details":
              Mc("toggle", t);
              break;
            case "input":
              (Mc("invalid", t),
                yt(
                  t,
                  r.value,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name,
                  !0,
                ),
                dt(t));
              break;
            case "select":
              Mc("invalid", t);
              break;
            case "textarea":
              (Mc("invalid", t),
                kt(t, r.value, r.defaultValue, r.children),
                dt(t));
          }
          (("string" !== typeof (n = r.children) &&
            "number" !== typeof n &&
            "bigint" !== typeof n) ||
          t.textContent === "" + n ||
          !0 === r.suppressHydrationWarning ||
          Yc(t.textContent, n)
            ? (null != r.popover && (Mc("beforetoggle", t), Mc("toggle", t)),
              null != r.onScroll && Mc("scroll", t),
              null != r.onScrollEnd && Mc("scrollend", t),
              null != r.onClick && (t.onclick = Gc),
              (t = !0))
            : (t = !1),
            t || sa(e));
        }
        function da(e) {
          for (ra = e.return; ra; )
            switch (ra.tag) {
              case 5:
              case 13:
                return void (ia = !1);
              case 27:
              case 3:
                return void (ia = !0);
              default:
                ra = ra.return;
            }
        }
        function fa(e) {
          if (e !== ra) return !1;
          if (!oa) return (da(e), (oa = !0), !1);
          var t,
            n = e.tag;
          if (
            ((t = 3 !== n && 27 !== n) &&
              ((t = 5 === n) &&
                (t =
                  !("form" !== (t = e.type) && "button" !== t) ||
                  ld(e.type, e.memoizedProps)),
              (t = !t)),
            t && aa && sa(e),
            da(e),
            13 === n)
          ) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317));
            e: {
              for (e = e.nextSibling, n = 0; e; ) {
                if (8 === e.nodeType)
                  if ("/$" === (t = e.data)) {
                    if (0 === n) {
                      aa = yd(e.nextSibling);
                      break e;
                    }
                    n--;
                  } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
                e = e.nextSibling;
              }
              aa = null;
            }
          } else
            27 === n
              ? ((n = aa),
                pd(e.type) ? ((e = vd), (vd = null), (aa = e)) : (aa = n))
              : (aa = ra ? yd(e.stateNode.nextSibling) : null);
          return !0;
        }
        function pa() {
          ((aa = ra = null), (oa = !1));
        }
        function ma() {
          var e = la;
          return (
            null !== e &&
              (null === bs ? (bs = e) : bs.push.apply(bs, e), (la = null)),
            e
          );
        }
        function ha(e) {
          null === la ? (la = [e]) : la.push(e);
        }
        var ga = I(null),
          ya = null,
          va = null;
        function ba(e, t, n) {
          (H(ga, t._currentValue), (t._currentValue = n));
        }
        function wa(e) {
          ((e._currentValue = ga.current), U(ga));
        }
        function ka(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function xa(e, t, n, r) {
          var a = e.child;
          for (null !== a && (a.return = e); null !== a; ) {
            var o = a.dependencies;
            if (null !== o) {
              var i = a.child;
              o = o.firstContext;
              e: for (; null !== o; ) {
                var u = o;
                o = a;
                for (var s = 0; s < t.length; s++)
                  if (u.context === t[s]) {
                    ((o.lanes |= n),
                      null !== (u = o.alternate) && (u.lanes |= n),
                      ka(o.return, n, e),
                      r || (i = null));
                    break e;
                  }
                o = u.next;
              }
            } else if (18 === a.tag) {
              if (null === (i = a.return)) throw Error(l(341));
              ((i.lanes |= n),
                null !== (o = i.alternate) && (o.lanes |= n),
                ka(i, n, e),
                (i = null));
            } else i = a.child;
            if (null !== i) i.return = a;
            else
              for (i = a; null !== i; ) {
                if (i === e) {
                  i = null;
                  break;
                }
                if (null !== (a = i.sibling)) {
                  ((a.return = i.return), (i = a));
                  break;
                }
                i = i.return;
              }
            a = i;
          }
        }
        function Sa(e, t, n, r) {
          e = null;
          for (var a = t, o = !1; null !== a; ) {
            if (!o)
              if (0 !== (524288 & a.flags)) o = !0;
              else if (0 !== (262144 & a.flags)) break;
            if (10 === a.tag) {
              var i = a.alternate;
              if (null === i) throw Error(l(387));
              if (null !== (i = i.memoizedProps)) {
                var u = a.type;
                Xn(a.pendingProps.value, i.value) ||
                  (null !== e ? e.push(u) : (e = [u]));
              }
            } else if (a === W.current) {
              if (null === (i = a.alternate)) throw Error(l(387));
              i.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
                (null !== e ? e.push(Kd) : (e = [Kd]));
            }
            a = a.return;
          }
          (null !== e && xa(t, e, n, r), (t.flags |= 262144));
        }
        function _a(e) {
          for (e = e.firstContext; null !== e; ) {
            if (!Xn(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
          }
          return !1;
        }
        function Ea(e) {
          ((ya = e),
            (va = null),
            null !== (e = e.dependencies) && (e.firstContext = null));
        }
        function Ca(e) {
          return ja(ya, e);
        }
        function Na(e, t) {
          return (null === ya && Ea(e), ja(e, t));
        }
        function ja(e, t) {
          var n = t._currentValue;
          if (
            ((t = { context: t, memoizedValue: n, next: null }), null === va)
          ) {
            if (null === e) throw Error(l(308));
            ((va = t),
              (e.dependencies = { lanes: 0, firstContext: t }),
              (e.flags |= 524288));
          } else va = va.next = t;
          return n;
        }
        var Pa =
            "undefined" !== typeof AbortController
              ? AbortController
              : function () {
                  var e = [],
                    t = (this.signal = {
                      aborted: !1,
                      addEventListener: function (t, n) {
                        e.push(n);
                      },
                    });
                  this.abort = function () {
                    ((t.aborted = !0),
                      e.forEach(function (e) {
                        return e();
                      }));
                  };
                },
          Ta = r.unstable_scheduleCallback,
          Oa = r.unstable_NormalPriority,
          za = {
            $$typeof: k,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
          };
        function La() {
          return { controller: new Pa(), data: new Map(), refCount: 0 };
        }
        function Ra(e) {
          (e.refCount--,
            0 === e.refCount &&
              Ta(Oa, function () {
                e.controller.abort();
              }));
        }
        var Aa = null,
          Fa = 0,
          Ma = 0,
          Da = null;
        function Ia() {
          if (0 === --Fa && null !== Aa) {
            null !== Da && (Da.status = "fulfilled");
            var e = Aa;
            ((Aa = null), (Ma = 0), (Da = null));
            for (var t = 0; t < e.length; t++) (0, e[t])();
          }
        }
        var Ua = R.S;
        R.S = function (e, t) {
          ("object" === typeof t &&
            null !== t &&
            "function" === typeof t.then &&
            (function (e, t) {
              if (null === Aa) {
                var n = (Aa = []);
                ((Fa = 0),
                  (Ma = Pc()),
                  (Da = {
                    status: "pending",
                    value: void 0,
                    then: function (e) {
                      n.push(e);
                    },
                  }));
              }
              (Fa++, t.then(Ia, Ia));
            })(0, t),
            null !== Ua && Ua(e, t));
        };
        var Ha = I(null);
        function Ba() {
          var e = Ha.current;
          return null !== e ? e : rs.pooledCache;
        }
        function $a(e, t) {
          H(Ha, null === t ? Ha.current : t.pool);
        }
        function Va() {
          var e = Ba();
          return null === e ? null : { parent: za._currentValue, pool: e };
        }
        var Wa = Error(l(460)),
          qa = Error(l(474)),
          Qa = Error(l(542)),
          Ka = { then: function () {} };
        function Xa(e) {
          return "fulfilled" === (e = e.status) || "rejected" === e;
        }
        function Ya() {}
        function Ga(e, t, n) {
          switch (
            (void 0 === (n = e[n])
              ? e.push(t)
              : n !== t && (t.then(Ya, Ya), (t = n)),
            t.status)
          ) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw (eo((e = t.reason)), e);
            default:
              if ("string" === typeof t.status) t.then(Ya, Ya);
              else {
                if (null !== (e = rs) && 100 < e.shellSuspendCounter)
                  throw Error(l(482));
                (((e = t).status = "pending"),
                  e.then(
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        ((n.status = "fulfilled"), (n.value = e));
                      }
                    },
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        ((n.status = "rejected"), (n.reason = e));
                      }
                    },
                  ));
              }
              switch (t.status) {
                case "fulfilled":
                  return t.value;
                case "rejected":
                  throw (eo((e = t.reason)), e);
              }
              throw ((Ja = t), Wa);
          }
        }
        var Ja = null;
        function Za() {
          if (null === Ja) throw Error(l(459));
          var e = Ja;
          return ((Ja = null), e);
        }
        function eo(e) {
          if (e === Wa || e === Qa) throw Error(l(483));
        }
        var to = !1;
        function no(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
          };
        }
        function ro(e, t) {
          ((e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null,
              }));
        }
        function ao(e) {
          return { lane: e, tag: 0, payload: null, callback: null, next: null };
        }
        function oo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & ns))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              (t = Lr(e)),
              zr(e, null, n),
              t
            );
          }
          return (Pr(e, r, t, n), Lr(e));
        }
        function lo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194048 & n))
          ) {
            var r = t.lanes;
            ((n |= r &= e.pendingLanes), (t.lanes = n), Ne(e, n));
          }
        }
        function io(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var l = {
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: null,
                  next: null,
                };
                (null === o ? (a = o = l) : (o = o.next = l), (n = n.next));
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                callbacks: r.callbacks,
              }),
              void (e.updateQueue = n)
            );
          }
          (null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t));
        }
        var uo = !1;
        function so() {
          if (uo) {
            if (null !== Da) throw Da;
          }
        }
        function co(e, t, n, r) {
          uo = !1;
          var a = e.updateQueue;
          to = !1;
          var o = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var u = i,
              s = u.next;
            ((u.next = null), null === l ? (o = s) : (l.next = s), (l = u));
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== l &&
              (null === i ? (c.firstBaseUpdate = s) : (i.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== o) {
            var d = a.baseState;
            for (l = 0, c = s = u = null, i = o; ; ) {
              var p = -536870913 & i.lane,
                m = p !== i.lane;
              if (m ? (os & p) === p : (r & p) === p) {
                (0 !== p && p === Ma && (uo = !0),
                  null !== c &&
                    (c = c.next =
                      {
                        lane: 0,
                        tag: i.tag,
                        payload: i.payload,
                        callback: null,
                        next: null,
                      }));
                e: {
                  var h = e,
                    g = i;
                  p = t;
                  var y = n;
                  switch (g.tag) {
                    case 1:
                      if ("function" === typeof (h = g.payload)) {
                        d = h.call(y, d, p);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (p =
                            "function" === typeof (h = g.payload)
                              ? h.call(y, d, p)
                              : h) ||
                        void 0 === p
                      )
                        break e;
                      d = f({}, d, p);
                      break e;
                    case 2:
                      to = !0;
                  }
                }
                null !== (p = i.callback) &&
                  ((e.flags |= 64),
                  m && (e.flags |= 8192),
                  null === (m = a.callbacks) ? (a.callbacks = [p]) : m.push(p));
              } else
                ((m = {
                  lane: p,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((s = c = m), (u = d)) : (c = c.next = m),
                  (l |= p));
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                ((i = (m = i).next),
                  (m.next = null),
                  (a.lastBaseUpdate = m),
                  (a.shared.pending = null));
              }
            }
            (null === c && (u = d),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null === o && (a.shared.lanes = 0),
              (ps |= l),
              (e.lanes = l),
              (e.memoizedState = d));
          }
        }
        function fo(e, t) {
          if ("function" !== typeof e) throw Error(l(191, e));
          e.call(t);
        }
        function po(e, t) {
          var n = e.callbacks;
          if (null !== n)
            for (e.callbacks = null, e = 0; e < n.length; e++) fo(n[e], t);
        }
        var mo = I(null),
          ho = I(0);
        function go(e, t) {
          (H(ho, (e = ds)), H(mo, t), (ds = e | t.baseLanes));
        }
        function yo() {
          (H(ho, ds), H(mo, mo.current));
        }
        function vo() {
          ((ds = ho.current), U(mo), U(ho));
        }
        var bo = 0,
          wo = null,
          ko = null,
          xo = null,
          So = !1,
          _o = !1,
          Eo = !1,
          Co = 0,
          No = 0,
          jo = null,
          Po = 0;
        function To() {
          throw Error(l(321));
        }
        function Oo(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!Xn(e[n], t[n])) return !1;
          return !0;
        }
        function zo(e, t, n, r, a, o) {
          return (
            (bo = o),
            (wo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (R.H = null === e || null === e.memoizedState ? ql : Ql),
            (Eo = !1),
            (o = n(r, a)),
            (Eo = !1),
            _o && (o = Ro(t, n, r, a)),
            Lo(e),
            o
          );
        }
        function Lo(e) {
          R.H = Wl;
          var t = null !== ko && null !== ko.next;
          if (
            ((bo = 0),
            (xo = ko = wo = null),
            (So = !1),
            (No = 0),
            (jo = null),
            t)
          )
            throw Error(l(300));
          null === e ||
            Ni ||
            (null !== (e = e.dependencies) && _a(e) && (Ni = !0));
        }
        function Ro(e, t, n, r) {
          wo = e;
          var a = 0;
          do {
            if ((_o && (jo = null), (No = 0), (_o = !1), 25 <= a))
              throw Error(l(301));
            if (((a += 1), (xo = ko = null), null != e.updateQueue)) {
              var o = e.updateQueue;
              ((o.lastEffect = null),
                (o.events = null),
                (o.stores = null),
                null != o.memoCache && (o.memoCache.index = 0));
            }
            ((R.H = Kl), (o = t(n, r)));
          } while (_o);
          return o;
        }
        function Ao() {
          var e = R.H,
            t = e.useState()[0];
          return (
            (t = "function" === typeof t.then ? Ho(t) : t),
            (e = e.useState()[0]),
            (null !== ko ? ko.memoizedState : null) !== e && (wo.flags |= 1024),
            t
          );
        }
        function Fo() {
          var e = 0 !== Co;
          return ((Co = 0), e);
        }
        function Mo(e, t, n) {
          ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~n));
        }
        function Do(e) {
          if (So) {
            for (e = e.memoizedState; null !== e; ) {
              var t = e.queue;
              (null !== t && (t.pending = null), (e = e.next));
            }
            So = !1;
          }
          ((bo = 0),
            (xo = ko = wo = null),
            (_o = !1),
            (No = Co = 0),
            (jo = null));
        }
        function Io() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === xo ? (wo.memoizedState = xo = e) : (xo = xo.next = e),
            xo
          );
        }
        function Uo() {
          if (null === ko) {
            var e = wo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ko.next;
          var t = null === xo ? wo.memoizedState : xo.next;
          if (null !== t) ((xo = t), (ko = e));
          else {
            if (null === e) {
              if (null === wo.alternate) throw Error(l(467));
              throw Error(l(310));
            }
            ((e = {
              memoizedState: (ko = e).memoizedState,
              baseState: ko.baseState,
              baseQueue: ko.baseQueue,
              queue: ko.queue,
              next: null,
            }),
              null === xo ? (wo.memoizedState = xo = e) : (xo = xo.next = e));
          }
          return xo;
        }
        function Ho(e) {
          var t = No;
          return (
            (No += 1),
            null === jo && (jo = []),
            (e = Ga(jo, e, t)),
            (t = wo),
            null === (null === xo ? t.memoizedState : xo.next) &&
              ((t = t.alternate),
              (R.H = null === t || null === t.memoizedState ? ql : Ql)),
            e
          );
        }
        function Bo(e) {
          if (null !== e && "object" === typeof e) {
            if ("function" === typeof e.then) return Ho(e);
            if (e.$$typeof === k) return Ca(e);
          }
          throw Error(l(438, String(e)));
        }
        function $o(e) {
          var t = null,
            n = wo.updateQueue;
          if ((null !== n && (t = n.memoCache), null == t)) {
            var r = wo.alternate;
            null !== r &&
              null !== (r = r.updateQueue) &&
              null != (r = r.memoCache) &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              });
          }
          if (
            (null == t && (t = { data: [], index: 0 }),
            null === n &&
              ((n = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (wo.updateQueue = n)),
            (n.memoCache = t),
            void 0 === (n = t.data[t.index]))
          )
            for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = j;
          return (t.index++, n);
        }
        function Vo(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Wo(e) {
          return qo(Uo(), ko, e);
        }
        function qo(e, t, n) {
          var r = e.queue;
          if (null === r) throw Error(l(311));
          r.lastRenderedReducer = n;
          var a = e.baseQueue,
            o = r.pending;
          if (null !== o) {
            if (null !== a) {
              var i = a.next;
              ((a.next = o.next), (o.next = i));
            }
            ((t.baseQueue = a = o), (r.pending = null));
          }
          if (((o = e.baseState), null === a)) e.memoizedState = o;
          else {
            var u = (i = null),
              s = null,
              c = (t = a.next),
              d = !1;
            do {
              var f = -536870913 & c.lane;
              if (f !== c.lane ? (os & f) === f : (bo & f) === f) {
                var p = c.revertLane;
                if (0 === p)
                  (null !== s &&
                    (s = s.next =
                      {
                        lane: 0,
                        revertLane: 0,
                        action: c.action,
                        hasEagerState: c.hasEagerState,
                        eagerState: c.eagerState,
                        next: null,
                      }),
                    f === Ma && (d = !0));
                else {
                  if ((bo & p) === p) {
                    ((c = c.next), p === Ma && (d = !0));
                    continue;
                  }
                  ((f = {
                    lane: 0,
                    revertLane: c.revertLane,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                  }),
                    null === s ? ((u = s = f), (i = o)) : (s = s.next = f),
                    (wo.lanes |= p),
                    (ps |= p));
                }
                ((f = c.action),
                  Eo && n(o, f),
                  (o = c.hasEagerState ? c.eagerState : n(o, f)));
              } else
                ((p = {
                  lane: f,
                  revertLane: c.revertLane,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                }),
                  null === s ? ((u = s = p), (i = o)) : (s = s.next = p),
                  (wo.lanes |= f),
                  (ps |= f));
              c = c.next;
            } while (null !== c && c !== t);
            if (
              (null === s ? (i = o) : (s.next = u),
              !Xn(o, e.memoizedState) && ((Ni = !0), d && null !== (n = Da)))
            )
              throw n;
            ((e.memoizedState = o),
              (e.baseState = i),
              (e.baseQueue = s),
              (r.lastRenderedState = o));
          }
          return (null === a && (r.lanes = 0), [e.memoizedState, r.dispatch]);
        }
        function Qo(e) {
          var t = Uo(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              ((o = e(o, i.action)), (i = i.next));
            } while (i !== a);
            (Xn(o, t.memoizedState) || (Ni = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o));
          }
          return [o, r];
        }
        function Ko(e, t, n) {
          var r = wo,
            a = Uo(),
            o = oa;
          if (o) {
            if (void 0 === n) throw Error(l(407));
            n = n();
          } else n = t();
          var i = !Xn((ko || a).memoizedState, n);
          if (
            (i && ((a.memoizedState = n), (Ni = !0)),
            (a = a.queue),
            yl(2048, 8, Go.bind(null, r, a, e), [e]),
            a.getSnapshot !== t ||
              i ||
              (null !== xo && 1 & xo.memoizedState.tag))
          ) {
            if (
              ((r.flags |= 2048),
              ml(
                9,
                { destroy: void 0, resource: void 0 },
                Yo.bind(null, r, a, n, t),
                null,
              ),
              null === rs)
            )
              throw Error(l(349));
            o || 0 !== (124 & bo) || Xo(r, t, n);
          }
          return n;
        }
        function Xo(e, t, n) {
          ((e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = wo.updateQueue)
              ? ((t = {
                  lastEffect: null,
                  events: null,
                  stores: null,
                  memoCache: null,
                }),
                (wo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e));
        }
        function Yo(e, t, n, r) {
          ((t.value = n), (t.getSnapshot = r), Jo(t) && Zo(e));
        }
        function Go(e, t, n) {
          return n(function () {
            Jo(t) && Zo(e);
          });
        }
        function Jo(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !Xn(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Zo(e) {
          var t = Or(e, 2);
          null !== t && Fs(t, e, 2);
        }
        function el(e) {
          var t = Io();
          if ("function" === typeof e) {
            var n = e;
            if (((e = n()), Eo)) {
              fe(!0);
              try {
                n();
              } finally {
                fe(!1);
              }
            }
          }
          return (
            (t.memoizedState = t.baseState = e),
            (t.queue = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Vo,
              lastRenderedState: e,
            }),
            t
          );
        }
        function tl(e, t, n, r) {
          return (
            (e.baseState = n),
            qo(e, ko, "function" === typeof r ? r : Vo)
          );
        }
        function nl(e, t, n, r, a) {
          if (Bl(e)) throw Error(l(485));
          if (null !== (e = t.action)) {
            var o = {
              payload: a,
              action: e,
              next: null,
              isTransition: !0,
              status: "pending",
              value: null,
              reason: null,
              listeners: [],
              then: function (e) {
                o.listeners.push(e);
              },
            };
            (null !== R.T ? n(!0) : (o.isTransition = !1),
              r(o),
              null === (n = t.pending)
                ? ((o.next = t.pending = o), rl(t, o))
                : ((o.next = n.next), (t.pending = n.next = o)));
          }
        }
        function rl(e, t) {
          var n = t.action,
            r = t.payload,
            a = e.state;
          if (t.isTransition) {
            var o = R.T,
              l = {};
            R.T = l;
            try {
              var i = n(a, r),
                u = R.S;
              (null !== u && u(l, i), al(e, t, i));
            } catch (s) {
              ll(e, t, s);
            } finally {
              R.T = o;
            }
          } else
            try {
              al(e, t, (o = n(a, r)));
            } catch (c) {
              ll(e, t, c);
            }
        }
        function al(e, t, n) {
          null !== n && "object" === typeof n && "function" === typeof n.then
            ? n.then(
                function (n) {
                  ol(e, t, n);
                },
                function (n) {
                  return ll(e, t, n);
                },
              )
            : ol(e, t, n);
        }
        function ol(e, t, n) {
          ((t.status = "fulfilled"),
            (t.value = n),
            il(t),
            (e.state = n),
            null !== (t = e.pending) &&
              ((n = t.next) === t
                ? (e.pending = null)
                : ((n = n.next), (t.next = n), rl(e, n))));
        }
        function ll(e, t, n) {
          var r = e.pending;
          if (((e.pending = null), null !== r)) {
            r = r.next;
            do {
              ((t.status = "rejected"), (t.reason = n), il(t), (t = t.next));
            } while (t !== r);
          }
          e.action = null;
        }
        function il(e) {
          e = e.listeners;
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
        function ul(e, t) {
          return t;
        }
        function sl(e, t) {
          if (oa) {
            var n = rs.formState;
            if (null !== n) {
              e: {
                var r = wo;
                if (oa) {
                  if (aa) {
                    t: {
                      for (var a = aa, o = ia; 8 !== a.nodeType; ) {
                        if (!o) {
                          a = null;
                          break t;
                        }
                        if (null === (a = yd(a.nextSibling))) {
                          a = null;
                          break t;
                        }
                      }
                      a = "F!" === (o = a.data) || "F" === o ? a : null;
                    }
                    if (a) {
                      ((aa = yd(a.nextSibling)), (r = "F!" === a.data));
                      break e;
                    }
                  }
                  sa(r);
                }
                r = !1;
              }
              r && (t = n[0]);
            }
          }
          return (
            ((n = Io()).memoizedState = n.baseState = t),
            (r = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: ul,
              lastRenderedState: t,
            }),
            (n.queue = r),
            (n = Il.bind(null, wo, r)),
            (r.dispatch = n),
            (r = el(!1)),
            (o = Hl.bind(null, wo, !1, r.queue)),
            (a = { state: t, dispatch: null, action: e, pending: null }),
            ((r = Io()).queue = a),
            (n = nl.bind(null, wo, a, o, n)),
            (a.dispatch = n),
            (r.memoizedState = e),
            [t, n, !1]
          );
        }
        function cl(e) {
          return dl(Uo(), ko, e);
        }
        function dl(e, t, n) {
          if (
            ((t = qo(e, t, ul)[0]),
            (e = Wo(Vo)[0]),
            "object" === typeof t && null !== t && "function" === typeof t.then)
          )
            try {
              var r = Ho(t);
            } catch (l) {
              if (l === Wa) throw Qa;
              throw l;
            }
          else r = t;
          var a = (t = Uo()).queue,
            o = a.dispatch;
          return (
            n !== t.memoizedState &&
              ((wo.flags |= 2048),
              ml(
                9,
                { destroy: void 0, resource: void 0 },
                fl.bind(null, a, n),
                null,
              )),
            [r, o, e]
          );
        }
        function fl(e, t) {
          e.action = t;
        }
        function pl(e) {
          var t = Uo(),
            n = ko;
          if (null !== n) return dl(t, n, e);
          (Uo(), (t = t.memoizedState));
          var r = (n = Uo()).queue.dispatch;
          return ((n.memoizedState = e), [t, r, !1]);
        }
        function ml(e, t, n, r) {
          return (
            (e = { tag: e, create: n, deps: r, inst: t, next: null }),
            null === (t = wo.updateQueue) &&
              ((t = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (wo.updateQueue = t)),
            null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function hl() {
          return Uo().memoizedState;
        }
        function gl(e, t, n, r) {
          var a = Io();
          ((r = void 0 === r ? null : r),
            (wo.flags |= e),
            (a.memoizedState = ml(
              1 | t,
              { destroy: void 0, resource: void 0 },
              n,
              r,
            )));
        }
        function yl(e, t, n, r) {
          var a = Uo();
          r = void 0 === r ? null : r;
          var o = a.memoizedState.inst;
          null !== ko && null !== r && Oo(r, ko.memoizedState.deps)
            ? (a.memoizedState = ml(t, o, n, r))
            : ((wo.flags |= e), (a.memoizedState = ml(1 | t, o, n, r)));
        }
        function vl(e, t) {
          gl(8390656, 8, e, t);
        }
        function bl(e, t) {
          yl(2048, 8, e, t);
        }
        function wl(e, t) {
          return yl(4, 2, e, t);
        }
        function kl(e, t) {
          return yl(4, 4, e, t);
        }
        function xl(e, t) {
          if ("function" === typeof t) {
            e = e();
            var n = t(e);
            return function () {
              "function" === typeof n ? n() : t(null);
            };
          }
          if (null !== t && void 0 !== t)
            return (
              (e = e()),
              (t.current = e),
              function () {
                t.current = null;
              }
            );
        }
        function Sl(e, t, n) {
          ((n = null !== n && void 0 !== n ? n.concat([e]) : null),
            yl(4, 4, xl.bind(null, t, e), n));
        }
        function _l() {}
        function El(e, t) {
          var n = Uo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== t && Oo(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Cl(e, t) {
          var n = Uo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          if (null !== t && Oo(t, r[1])) return r[0];
          if (((r = e()), Eo)) {
            fe(!0);
            try {
              e();
            } finally {
              fe(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        }
        function Nl(e, t, n) {
          return void 0 === n || 0 !== (1073741824 & bo)
            ? (e.memoizedState = t)
            : ((e.memoizedState = n),
              (e = As()),
              (wo.lanes |= e),
              (ps |= e),
              n);
        }
        function jl(e, t, n, r) {
          return Xn(n, t)
            ? n
            : null !== mo.current
              ? ((e = Nl(e, n, r)), Xn(e, t) || (Ni = !0), e)
              : 0 === (42 & bo)
                ? ((Ni = !0), (e.memoizedState = n))
                : ((e = As()), (wo.lanes |= e), (ps |= e), t);
        }
        function Pl(e, t, n, r, a) {
          var o = A.p;
          A.p = 0 !== o && 8 > o ? o : 8;
          var l = R.T,
            i = {};
          ((R.T = i), Hl(e, !1, t, n));
          try {
            var u = a(),
              s = R.S;
            if (
              (null !== s && s(i, u),
              null !== u &&
                "object" === typeof u &&
                "function" === typeof u.then)
            )
              Ul(
                e,
                t,
                (function (e, t) {
                  var n = [],
                    r = {
                      status: "pending",
                      value: null,
                      reason: null,
                      then: function (e) {
                        n.push(e);
                      },
                    };
                  return (
                    e.then(
                      function () {
                        ((r.status = "fulfilled"), (r.value = t));
                        for (var e = 0; e < n.length; e++) (0, n[e])(t);
                      },
                      function (e) {
                        for (
                          r.status = "rejected", r.reason = e, e = 0;
                          e < n.length;
                          e++
                        )
                          (0, n[e])(void 0);
                      },
                    ),
                    r
                  );
                })(u, r),
                Rs(),
              );
            else Ul(e, t, r, Rs());
          } catch (c) {
            Ul(
              e,
              t,
              { then: function () {}, status: "rejected", reason: c },
              Rs(),
            );
          } finally {
            ((A.p = o), (R.T = l));
          }
        }
        function Tl() {}
        function Ol(e, t, n, r) {
          if (5 !== e.tag) throw Error(l(476));
          var a = zl(e).queue;
          Pl(
            e,
            a,
            t,
            F,
            null === n
              ? Tl
              : function () {
                  return (Ll(e), n(r));
                },
          );
        }
        function zl(e) {
          var t = e.memoizedState;
          if (null !== t) return t;
          var n = {};
          return (
            ((t = {
              memoizedState: F,
              baseState: F,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Vo,
                lastRenderedState: F,
              },
              next: null,
            }).next = {
              memoizedState: n,
              baseState: n,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Vo,
                lastRenderedState: n,
              },
              next: null,
            }),
            (e.memoizedState = t),
            null !== (e = e.alternate) && (e.memoizedState = t),
            t
          );
        }
        function Ll(e) {
          Ul(e, zl(e).next.queue, {}, Rs());
        }
        function Rl() {
          return Ca(Kd);
        }
        function Al() {
          return Uo().memoizedState;
        }
        function Fl() {
          return Uo().memoizedState;
        }
        function Ml(e) {
          for (var t = e.return; null !== t; ) {
            switch (t.tag) {
              case 24:
              case 3:
                var n = Rs(),
                  r = oo(t, (e = ao(n)), n);
                return (
                  null !== r && (Fs(r, t, n), lo(r, t, n)),
                  (t = { cache: La() }),
                  void (e.payload = t)
                );
            }
            t = t.return;
          }
        }
        function Dl(e, t, n) {
          var r = Rs();
          ((n = {
            lane: r,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            Bl(e)
              ? $l(t, n)
              : null !== (n = Tr(e, t, n, r)) && (Fs(n, e, r), Vl(n, t, r)));
        }
        function Il(e, t, n) {
          Ul(e, t, n, Rs());
        }
        function Ul(e, t, n, r) {
          var a = {
            lane: r,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          };
          if (Bl(e)) $l(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  i = o(l, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), Xn(i, l)))
                  return (Pr(e, t, a, 0), null === rs && jr(), !1);
              } catch (u) {}
            if (null !== (n = Tr(e, t, a, r)))
              return (Fs(n, e, r), Vl(n, t, r), !0);
          }
          return !1;
        }
        function Hl(e, t, n, r) {
          if (
            ((r = {
              lane: 2,
              revertLane: Pc(),
              action: r,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Bl(e))
          ) {
            if (t) throw Error(l(479));
          } else null !== (t = Tr(e, n, r, 2)) && Fs(t, e, 2);
        }
        function Bl(e) {
          var t = e.alternate;
          return e === wo || (null !== t && t === wo);
        }
        function $l(e, t) {
          _o = So = !0;
          var n = e.pending;
          (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t));
        }
        function Vl(e, t, n) {
          if (0 !== (4194048 & n)) {
            var r = t.lanes;
            ((n |= r &= e.pendingLanes), (t.lanes = n), Ne(e, n));
          }
        }
        var Wl = {
            readContext: Ca,
            use: Bo,
            useCallback: To,
            useContext: To,
            useEffect: To,
            useImperativeHandle: To,
            useLayoutEffect: To,
            useInsertionEffect: To,
            useMemo: To,
            useReducer: To,
            useRef: To,
            useState: To,
            useDebugValue: To,
            useDeferredValue: To,
            useTransition: To,
            useSyncExternalStore: To,
            useId: To,
            useHostTransitionStatus: To,
            useFormState: To,
            useActionState: To,
            useOptimistic: To,
            useMemoCache: To,
            useCacheRefresh: To,
          },
          ql = {
            readContext: Ca,
            use: Bo,
            useCallback: function (e, t) {
              return ((Io().memoizedState = [e, void 0 === t ? null : t]), e);
            },
            useContext: Ca,
            useEffect: vl,
            useImperativeHandle: function (e, t, n) {
              ((n = null !== n && void 0 !== n ? n.concat([e]) : null),
                gl(4194308, 4, xl.bind(null, t, e), n));
            },
            useLayoutEffect: function (e, t) {
              return gl(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              gl(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Io();
              t = void 0 === t ? null : t;
              var r = e();
              if (Eo) {
                fe(!0);
                try {
                  e();
                } finally {
                  fe(!1);
                }
              }
              return ((n.memoizedState = [r, t]), r);
            },
            useReducer: function (e, t, n) {
              var r = Io();
              if (void 0 !== n) {
                var a = n(t);
                if (Eo) {
                  fe(!0);
                  try {
                    n(t);
                  } finally {
                    fe(!1);
                  }
                }
              } else a = t;
              return (
                (r.memoizedState = r.baseState = a),
                (e = {
                  pending: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: a,
                }),
                (r.queue = e),
                (e = e.dispatch = Dl.bind(null, wo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return ((e = { current: e }), (Io().memoizedState = e));
            },
            useState: function (e) {
              var t = (e = el(e)).queue,
                n = Il.bind(null, wo, t);
              return ((t.dispatch = n), [e.memoizedState, n]);
            },
            useDebugValue: _l,
            useDeferredValue: function (e, t) {
              return Nl(Io(), e, t);
            },
            useTransition: function () {
              var e = el(!1);
              return (
                (e = Pl.bind(null, wo, e.queue, !0, !1)),
                (Io().memoizedState = e),
                [!1, e]
              );
            },
            useSyncExternalStore: function (e, t, n) {
              var r = wo,
                a = Io();
              if (oa) {
                if (void 0 === n) throw Error(l(407));
                n = n();
              } else {
                if (((n = t()), null === rs)) throw Error(l(349));
                0 !== (124 & os) || Xo(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                vl(Go.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                ml(
                  9,
                  { destroy: void 0, resource: void 0 },
                  Yo.bind(null, r, o, n, t),
                  null,
                ),
                n
              );
            },
            useId: function () {
              var e = Io(),
                t = rs.identifierPrefix;
              if (oa) {
                var n = Jr;
                ((t =
                  "\xab" +
                  t +
                  "R" +
                  (n = (Gr & ~(1 << (32 - pe(Gr) - 1))).toString(32) + n)),
                  0 < (n = Co++) && (t += "H" + n.toString(32)),
                  (t += "\xbb"));
              } else t = "\xab" + t + "r" + (n = Po++).toString(32) + "\xbb";
              return (e.memoizedState = t);
            },
            useHostTransitionStatus: Rl,
            useFormState: sl,
            useActionState: sl,
            useOptimistic: function (e) {
              var t = Io();
              t.memoizedState = t.baseState = e;
              var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null,
              };
              return (
                (t.queue = n),
                (t = Hl.bind(null, wo, !0, n)),
                (n.dispatch = t),
                [e, t]
              );
            },
            useMemoCache: $o,
            useCacheRefresh: function () {
              return (Io().memoizedState = Ml.bind(null, wo));
            },
          },
          Ql = {
            readContext: Ca,
            use: Bo,
            useCallback: El,
            useContext: Ca,
            useEffect: bl,
            useImperativeHandle: Sl,
            useInsertionEffect: wl,
            useLayoutEffect: kl,
            useMemo: Cl,
            useReducer: Wo,
            useRef: hl,
            useState: function () {
              return Wo(Vo);
            },
            useDebugValue: _l,
            useDeferredValue: function (e, t) {
              return jl(Uo(), ko.memoizedState, e, t);
            },
            useTransition: function () {
              var e = Wo(Vo)[0],
                t = Uo().memoizedState;
              return ["boolean" === typeof e ? e : Ho(e), t];
            },
            useSyncExternalStore: Ko,
            useId: Al,
            useHostTransitionStatus: Rl,
            useFormState: cl,
            useActionState: cl,
            useOptimistic: function (e, t) {
              return tl(Uo(), 0, e, t);
            },
            useMemoCache: $o,
            useCacheRefresh: Fl,
          },
          Kl = {
            readContext: Ca,
            use: Bo,
            useCallback: El,
            useContext: Ca,
            useEffect: bl,
            useImperativeHandle: Sl,
            useInsertionEffect: wl,
            useLayoutEffect: kl,
            useMemo: Cl,
            useReducer: Qo,
            useRef: hl,
            useState: function () {
              return Qo(Vo);
            },
            useDebugValue: _l,
            useDeferredValue: function (e, t) {
              var n = Uo();
              return null === ko ? Nl(n, e, t) : jl(n, ko.memoizedState, e, t);
            },
            useTransition: function () {
              var e = Qo(Vo)[0],
                t = Uo().memoizedState;
              return ["boolean" === typeof e ? e : Ho(e), t];
            },
            useSyncExternalStore: Ko,
            useId: Al,
            useHostTransitionStatus: Rl,
            useFormState: pl,
            useActionState: pl,
            useOptimistic: function (e, t) {
              var n = Uo();
              return null !== ko
                ? tl(n, 0, e, t)
                : ((n.baseState = e), [e, n.queue.dispatch]);
            },
            useMemoCache: $o,
            useCacheRefresh: Fl,
          },
          Xl = null,
          Yl = 0;
        function Gl(e) {
          var t = Yl;
          return ((Yl += 1), null === Xl && (Xl = []), Ga(Xl, e, t));
        }
        function Jl(e, t) {
          ((t = t.props.ref), (e.ref = void 0 !== t ? t : null));
        }
        function Zl(e, t) {
          if (t.$$typeof === p) throw Error(l(525));
          throw (
            (e = Object.prototype.toString.call(t)),
            Error(
              l(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e,
              ),
            )
          );
        }
        function ei(e) {
          return (0, e._init)(e._payload);
        }
        function ti(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) (t(n, r), (r = r.sibling));
            return null;
          }
          function r(e) {
            for (var t = new Map(); null !== e; )
              (null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
                (e = e.sibling));
            return t;
          }
          function a(e, t) {
            return (((e = Dr(e, t)).index = 0), (e.sibling = null), e);
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 67108866), n)
                    : r
                  : ((t.flags |= 67108866), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return (e && null === t.alternate && (t.flags |= 67108866), t);
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Br(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var o = n.type;
            return o === g
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                  (t.elementType === o ||
                    ("object" === typeof o &&
                      null !== o &&
                      o.$$typeof === C &&
                      ei(o) === t.type))
                ? (Jl((t = a(t, n.props)), n), (t.return = e), t)
                : (Jl((t = Ur(n.type, n.key, n.props, null, e.mode, r)), n),
                  (t.return = e),
                  t);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = $r(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Hr(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (
              ("string" === typeof t && "" !== t) ||
              "number" === typeof t ||
              "bigint" === typeof t
            )
              return (((t = Br("" + t, e.mode, n)).return = e), t);
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case m:
                  return (
                    Jl((n = Ur(t.type, t.key, t.props, null, e.mode, n)), t),
                    (n.return = e),
                    n
                  );
                case h:
                  return (((t = $r(t, e.mode, n)).return = e), t);
                case C:
                  return f(e, (t = (0, t._init)(t._payload)), n);
              }
              if (L(t) || T(t))
                return (((t = Hr(t, e.mode, n, null)).return = e), t);
              if ("function" === typeof t.then) return f(e, Gl(t), n);
              if (t.$$typeof === k) return f(e, Na(e, t), n);
              Zl(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (
              ("string" === typeof n && "" !== n) ||
              "number" === typeof n ||
              "bigint" === typeof n
            )
              return null !== a ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case m:
                  return n.key === a ? s(e, t, n, r) : null;
                case h:
                  return n.key === a ? c(e, t, n, r) : null;
                case C:
                  return p(e, t, (n = (a = n._init)(n._payload)), r);
              }
              if (L(n) || T(n)) return null !== a ? null : d(e, t, n, r, null);
              if ("function" === typeof n.then) return p(e, t, Gl(n), r);
              if (n.$$typeof === k) return p(e, t, Na(e, n), r);
              Zl(e, n);
            }
            return null;
          }
          function y(e, t, n, r, a) {
            if (
              ("string" === typeof r && "" !== r) ||
              "number" === typeof r ||
              "bigint" === typeof r
            )
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case m:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case h:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case C:
                  return y(e, t, n, (r = (0, r._init)(r._payload)), a);
              }
              if (L(r) || T(r)) return d(t, (e = e.get(n) || null), r, a, null);
              if ("function" === typeof r.then) return y(e, t, n, Gl(r), a);
              if (r.$$typeof === k) return y(e, t, n, Na(t, r), a);
              Zl(t, r);
            }
            return null;
          }
          function v(u, s, c, d) {
            if (
              ("object" === typeof c &&
                null !== c &&
                c.type === g &&
                null === c.key &&
                (c = c.props.children),
              "object" === typeof c && null !== c)
            ) {
              switch (c.$$typeof) {
                case m:
                  e: {
                    for (var b = c.key; null !== s; ) {
                      if (s.key === b) {
                        if ((b = c.type) === g) {
                          if (7 === s.tag) {
                            (n(u, s.sibling),
                              ((d = a(s, c.props.children)).return = u),
                              (u = d));
                            break e;
                          }
                        } else if (
                          s.elementType === b ||
                          ("object" === typeof b &&
                            null !== b &&
                            b.$$typeof === C &&
                            ei(b) === s.type)
                        ) {
                          (n(u, s.sibling),
                            Jl((d = a(s, c.props)), c),
                            (d.return = u),
                            (u = d));
                          break e;
                        }
                        n(u, s);
                        break;
                      }
                      (t(u, s), (s = s.sibling));
                    }
                    c.type === g
                      ? (((d = Hr(c.props.children, u.mode, d, c.key)).return =
                          u),
                        (u = d))
                      : (Jl(
                          (d = Ur(c.type, c.key, c.props, null, u.mode, d)),
                          c,
                        ),
                        (d.return = u),
                        (u = d));
                  }
                  return i(u);
                case h:
                  e: {
                    for (b = c.key; null !== s; ) {
                      if (s.key === b) {
                        if (
                          4 === s.tag &&
                          s.stateNode.containerInfo === c.containerInfo &&
                          s.stateNode.implementation === c.implementation
                        ) {
                          (n(u, s.sibling),
                            ((d = a(s, c.children || [])).return = u),
                            (u = d));
                          break e;
                        }
                        n(u, s);
                        break;
                      }
                      (t(u, s), (s = s.sibling));
                    }
                    (((d = $r(c, u.mode, d)).return = u), (u = d));
                  }
                  return i(u);
                case C:
                  return v(u, s, (c = (b = c._init)(c._payload)), d);
              }
              if (L(c))
                return (function (a, l, i, u) {
                  for (
                    var s = null, c = null, d = l, m = (l = 0), h = null;
                    null !== d && m < i.length;
                    m++
                  ) {
                    d.index > m ? ((h = d), (d = null)) : (h = d.sibling);
                    var g = p(a, d, i[m], u);
                    if (null === g) {
                      null === d && (d = h);
                      break;
                    }
                    (e && d && null === g.alternate && t(a, d),
                      (l = o(g, l, m)),
                      null === c ? (s = g) : (c.sibling = g),
                      (c = g),
                      (d = h));
                  }
                  if (m === i.length) return (n(a, d), oa && Zr(a, m), s);
                  if (null === d) {
                    for (; m < i.length; m++)
                      null !== (d = f(a, i[m], u)) &&
                        ((l = o(d, l, m)),
                        null === c ? (s = d) : (c.sibling = d),
                        (c = d));
                    return (oa && Zr(a, m), s);
                  }
                  for (d = r(d); m < i.length; m++)
                    null !== (h = y(d, a, m, i[m], u)) &&
                      (e &&
                        null !== h.alternate &&
                        d.delete(null === h.key ? m : h.key),
                      (l = o(h, l, m)),
                      null === c ? (s = h) : (c.sibling = h),
                      (c = h));
                  return (
                    e &&
                      d.forEach(function (e) {
                        return t(a, e);
                      }),
                    oa && Zr(a, m),
                    s
                  );
                })(u, s, c, d);
              if (T(c)) {
                if ("function" !== typeof (b = T(c))) throw Error(l(150));
                return (function (a, i, u, s) {
                  if (null == u) throw Error(l(151));
                  for (
                    var c = null,
                      d = null,
                      m = i,
                      h = (i = 0),
                      g = null,
                      v = u.next();
                    null !== m && !v.done;
                    h++, v = u.next()
                  ) {
                    m.index > h ? ((g = m), (m = null)) : (g = m.sibling);
                    var b = p(a, m, v.value, s);
                    if (null === b) {
                      null === m && (m = g);
                      break;
                    }
                    (e && m && null === b.alternate && t(a, m),
                      (i = o(b, i, h)),
                      null === d ? (c = b) : (d.sibling = b),
                      (d = b),
                      (m = g));
                  }
                  if (v.done) return (n(a, m), oa && Zr(a, h), c);
                  if (null === m) {
                    for (; !v.done; h++, v = u.next())
                      null !== (v = f(a, v.value, s)) &&
                        ((i = o(v, i, h)),
                        null === d ? (c = v) : (d.sibling = v),
                        (d = v));
                    return (oa && Zr(a, h), c);
                  }
                  for (m = r(m); !v.done; h++, v = u.next())
                    null !== (v = y(m, a, h, v.value, s)) &&
                      (e &&
                        null !== v.alternate &&
                        m.delete(null === v.key ? h : v.key),
                      (i = o(v, i, h)),
                      null === d ? (c = v) : (d.sibling = v),
                      (d = v));
                  return (
                    e &&
                      m.forEach(function (e) {
                        return t(a, e);
                      }),
                    oa && Zr(a, h),
                    c
                  );
                })(u, s, (c = b.call(c)), d);
              }
              if ("function" === typeof c.then) return v(u, s, Gl(c), d);
              if (c.$$typeof === k) return v(u, s, Na(u, c), d);
              Zl(u, c);
            }
            return ("string" === typeof c && "" !== c) ||
              "number" === typeof c ||
              "bigint" === typeof c
              ? ((c = "" + c),
                null !== s && 6 === s.tag
                  ? (n(u, s.sibling), ((d = a(s, c)).return = u), (u = d))
                  : (n(u, s), ((d = Br(c, u.mode, d)).return = u), (u = d)),
                i(u))
              : n(u, s);
          }
          return function (e, t, n, r) {
            try {
              Yl = 0;
              var a = v(e, t, n, r);
              return ((Xl = null), a);
            } catch (l) {
              if (l === Wa || l === Qa) throw l;
              var o = Fr(29, l, null, e.mode);
              return ((o.lanes = r), (o.return = e), o);
            }
          };
        }
        var ni = ti(!0),
          ri = ti(!1),
          ai = I(null),
          oi = null;
        function li(e) {
          var t = e.alternate;
          (H(ci, 1 & ci.current),
            H(ai, e),
            null === oi &&
              (null === t || null !== mo.current || null !== t.memoizedState) &&
              (oi = e));
        }
        function ii(e) {
          if (22 === e.tag) {
            if ((H(ci, ci.current), H(ai, e), null === oi)) {
              var t = e.alternate;
              null !== t && null !== t.memoizedState && (oi = e);
            }
          } else ui();
        }
        function ui() {
          (H(ci, ci.current), H(ai, ai.current));
        }
        function si(e) {
          (U(ai), oi === e && (oi = null), U(ci));
        }
        var ci = I(0);
        function di(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) || "$?" === n.data || gd(n))
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            ((t.sibling.return = t.return), (t = t.sibling));
          }
          return null;
        }
        function fi(e, t, n, r) {
          ((n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : f({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n));
        }
        var pi = {
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Rs(),
              a = ao(r);
            ((a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = oo(e, a, r)) && (Fs(t, e, r), lo(t, e, r)));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Rs(),
              a = ao(r);
            ((a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = oo(e, a, r)) && (Fs(t, e, r), lo(t, e, r)));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Rs(),
              r = ao(n);
            ((r.tag = 2),
              void 0 !== t && null !== t && (r.callback = t),
              null !== (t = oo(e, r, n)) && (Fs(t, e, n), lo(t, e, n)));
          },
        };
        function mi(e, t, n, r, a, o, l) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, l)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !Yn(n, r) ||
                !Yn(a, o);
        }
        function hi(e, t, n, r) {
          ((e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && pi.enqueueReplaceState(t, t.state, null));
        }
        function gi(e, t) {
          var n = t;
          if ("ref" in t)
            for (var r in ((n = {}), t)) "ref" !== r && (n[r] = t[r]);
          if ((e = e.defaultProps))
            for (var a in (n === t && (n = f({}, n)), e))
              void 0 === n[a] && (n[a] = e[a]);
          return n;
        }
        var yi =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                if (
                  "object" === typeof window &&
                  "function" === typeof window.ErrorEvent
                ) {
                  var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message:
                      "object" === typeof e &&
                      null !== e &&
                      "string" === typeof e.message
                        ? String(e.message)
                        : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if (
                  "object" === typeof process &&
                  "function" === typeof process.emit
                )
                  return void process.emit("uncaughtException", e);
                console.error(e);
              };
        function vi(e) {
          yi(e);
        }
        function bi(e) {
          console.error(e);
        }
        function wi(e) {
          yi(e);
        }
        function ki(e, t) {
          try {
            (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        function xi(e, t, n) {
          try {
            (0, e.onCaughtError)(n.value, {
              componentStack: n.stack,
              errorBoundary: 1 === t.tag ? t.stateNode : null,
            });
          } catch (r) {
            setTimeout(function () {
              throw r;
            });
          }
        }
        function Si(e, t, n) {
          return (
            ((n = ao(n)).tag = 3),
            (n.payload = { element: null }),
            (n.callback = function () {
              ki(e, t);
            }),
            n
          );
        }
        function _i(e) {
          return (((e = ao(e)).tag = 3), e);
        }
        function Ei(e, t, n, r) {
          var a = n.type.getDerivedStateFromError;
          if ("function" === typeof a) {
            var o = r.value;
            ((e.payload = function () {
              return a(o);
            }),
              (e.callback = function () {
                xi(t, n, r);
              }));
          }
          var l = n.stateNode;
          null !== l &&
            "function" === typeof l.componentDidCatch &&
            (e.callback = function () {
              (xi(t, n, r),
                "function" !== typeof a &&
                  (null === _s ? (_s = new Set([this])) : _s.add(this)));
              var e = r.stack;
              this.componentDidCatch(r.value, {
                componentStack: null !== e ? e : "",
              });
            });
        }
        var Ci = Error(l(461)),
          Ni = !1;
        function ji(e, t, n, r) {
          t.child = null === e ? ri(t, null, n, r) : ni(t, e.child, n, r);
        }
        function Pi(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          if ("ref" in r) {
            var l = {};
            for (var i in r) "ref" !== i && (l[i] = r[i]);
          } else l = r;
          return (
            Ea(t),
            (r = zo(e, t, n, l, o, a)),
            (i = Fo()),
            null === e || Ni
              ? (oa && i && ta(t), (t.flags |= 1), ji(e, t, r, a), t.child)
              : (Mo(e, t, a), Xi(e, t, a))
          );
        }
        function Ti(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Mr(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare
              ? (((e = Ur(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Oi(e, t, o, r, a));
          }
          if (((o = e.child), !Yi(e, a))) {
            var l = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : Yn)(l, r) &&
              e.ref === t.ref
            )
              return Xi(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Dr(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Oi(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (Yn(o, r) && e.ref === t.ref) {
              if (((Ni = !1), (t.pendingProps = r = o), !Yi(e, a)))
                return ((t.lanes = e.lanes), Xi(e, t, a));
              0 !== (131072 & e.flags) && (Ni = !0);
            }
          }
          return Ai(e, t, n, r, a);
        }
        function zi(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode) {
            if (0 !== (128 & t.flags)) {
              if (((r = null !== o ? o.baseLanes | n : n), null !== e)) {
                for (a = t.child = e.child, o = 0; null !== a; )
                  ((o = o | a.lanes | a.childLanes), (a = a.sibling));
                t.childLanes = o & ~r;
              } else ((t.childLanes = 0), (t.child = null));
              return Li(e, t, r, n);
            }
            if (0 === (536870912 & n))
              return (
                (t.lanes = t.childLanes = 536870912),
                Li(e, t, null !== o ? o.baseLanes | n : n, n)
              );
            ((t.memoizedState = { baseLanes: 0, cachePool: null }),
              null !== e && $a(0, null !== o ? o.cachePool : null),
              null !== o ? go(t, o) : yo(),
              ii(t));
          } else
            null !== o
              ? ($a(0, o.cachePool), go(t, o), ui(), (t.memoizedState = null))
              : (null !== e && $a(0, null), yo(), ui());
          return (ji(e, t, a, n), t.child);
        }
        function Li(e, t, n, r) {
          var a = Ba();
          return (
            (a = null === a ? null : { parent: za._currentValue, pool: a }),
            (t.memoizedState = { baseLanes: n, cachePool: a }),
            null !== e && $a(0, null),
            yo(),
            ii(t),
            null !== e && Sa(e, t, r, !0),
            null
          );
        }
        function Ri(e, t) {
          var n = t.ref;
          if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
          else {
            if ("function" !== typeof n && "object" !== typeof n)
              throw Error(l(284));
            (null !== e && e.ref === n) || (t.flags |= 4194816);
          }
        }
        function Ai(e, t, n, r, a) {
          return (
            Ea(t),
            (n = zo(e, t, n, r, void 0, a)),
            (r = Fo()),
            null === e || Ni
              ? (oa && r && ta(t), (t.flags |= 1), ji(e, t, n, a), t.child)
              : (Mo(e, t, a), Xi(e, t, a))
          );
        }
        function Fi(e, t, n, r, a, o) {
          return (
            Ea(t),
            (t.updateQueue = null),
            (n = Ro(t, r, n, a)),
            Lo(e),
            (r = Fo()),
            null === e || Ni
              ? (oa && r && ta(t), (t.flags |= 1), ji(e, t, n, o), t.child)
              : (Mo(e, t, o), Xi(e, t, o))
          );
        }
        function Mi(e, t, n, r, a) {
          if ((Ea(t), null === t.stateNode)) {
            var o = Rr,
              l = n.contextType;
            ("object" === typeof l && null !== l && (o = Ca(l)),
              (o = new n(r, o)),
              (t.memoizedState =
                null !== o.state && void 0 !== o.state ? o.state : null),
              (o.updater = pi),
              (t.stateNode = o),
              (o._reactInternals = t),
              ((o = t.stateNode).props = r),
              (o.state = t.memoizedState),
              (o.refs = {}),
              no(t),
              (l = n.contextType),
              (o.context = "object" === typeof l && null !== l ? Ca(l) : Rr),
              (o.state = t.memoizedState),
              "function" === typeof (l = n.getDerivedStateFromProps) &&
                (fi(t, n, l, r), (o.state = t.memoizedState)),
              "function" === typeof n.getDerivedStateFromProps ||
                "function" === typeof o.getSnapshotBeforeUpdate ||
                ("function" !== typeof o.UNSAFE_componentWillMount &&
                  "function" !== typeof o.componentWillMount) ||
                ((l = o.state),
                "function" === typeof o.componentWillMount &&
                  o.componentWillMount(),
                "function" === typeof o.UNSAFE_componentWillMount &&
                  o.UNSAFE_componentWillMount(),
                l !== o.state && pi.enqueueReplaceState(o, o.state, null),
                co(t, r, o, a),
                so(),
                (o.state = t.memoizedState)),
              "function" === typeof o.componentDidMount && (t.flags |= 4194308),
              (r = !0));
          } else if (null === e) {
            o = t.stateNode;
            var i = t.memoizedProps,
              u = gi(n, i);
            o.props = u;
            var s = o.context,
              c = n.contextType;
            ((l = Rr), "object" === typeof c && null !== c && (l = Ca(c)));
            var d = n.getDerivedStateFromProps;
            ((c =
              "function" === typeof d ||
              "function" === typeof o.getSnapshotBeforeUpdate),
              (i = t.pendingProps !== i),
              c ||
                ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                  "function" !== typeof o.componentWillReceiveProps) ||
                ((i || s !== l) && hi(t, o, r, l)),
              (to = !1));
            var f = t.memoizedState;
            ((o.state = f),
              co(t, r, o, a),
              so(),
              (s = t.memoizedState),
              i || f !== s || to
                ? ("function" === typeof d &&
                    (fi(t, n, d, r), (s = t.memoizedState)),
                  (u = to || mi(t, n, u, r, f, s, l))
                    ? (c ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (o.props = r),
                  (o.state = s),
                  (o.context = l),
                  (r = u))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1)));
          } else {
            ((o = t.stateNode),
              ro(e, t),
              (c = gi(n, (l = t.memoizedProps))),
              (o.props = c),
              (d = t.pendingProps),
              (f = o.context),
              (s = n.contextType),
              (u = Rr),
              "object" === typeof s && null !== s && (u = Ca(s)),
              (s =
                "function" === typeof (i = n.getDerivedStateFromProps) ||
                "function" === typeof o.getSnapshotBeforeUpdate) ||
                ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                  "function" !== typeof o.componentWillReceiveProps) ||
                ((l !== d || f !== u) && hi(t, o, r, u)),
              (to = !1),
              (f = t.memoizedState),
              (o.state = f),
              co(t, r, o, a),
              so());
            var p = t.memoizedState;
            l !== d ||
            f !== p ||
            to ||
            (null !== e && null !== e.dependencies && _a(e.dependencies))
              ? ("function" === typeof i &&
                  (fi(t, n, i, r), (p = t.memoizedState)),
                (c =
                  to ||
                  mi(t, n, c, r, f, p, u) ||
                  (null !== e && null !== e.dependencies && _a(e.dependencies)))
                  ? (s ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, p, u),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, p, u)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (o.props = r),
                (o.state = p),
                (o.context = u),
                (r = c))
              : ("function" !== typeof o.componentDidUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return (
            (o = r),
            Ri(e, t),
            (r = 0 !== (128 & t.flags)),
            o || r
              ? ((o = t.stateNode),
                (n =
                  r && "function" !== typeof n.getDerivedStateFromError
                    ? null
                    : o.render()),
                (t.flags |= 1),
                null !== e && r
                  ? ((t.child = ni(t, e.child, null, a)),
                    (t.child = ni(t, null, n, a)))
                  : ji(e, t, n, a),
                (t.memoizedState = o.state),
                (e = t.child))
              : (e = Xi(e, t, a)),
            e
          );
        }
        function Di(e, t, n, r) {
          return (pa(), (t.flags |= 256), ji(e, t, n, r), t.child);
        }
        var Ii = {
          dehydrated: null,
          treeContext: null,
          retryLane: 0,
          hydrationErrors: null,
        };
        function Ui(e) {
          return { baseLanes: e, cachePool: Va() };
        }
        function Hi(e, t, n) {
          return ((e = null !== e ? e.childLanes & ~n : 0), t && (e |= gs), e);
        }
        function Bi(e, t, n) {
          var r,
            a = t.pendingProps,
            o = !1,
            i = 0 !== (128 & t.flags);
          if (
            ((r = i) ||
              (r =
                (null === e || null !== e.memoizedState) &&
                0 !== (2 & ci.current)),
            r && ((o = !0), (t.flags &= -129)),
            (r = 0 !== (32 & t.flags)),
            (t.flags &= -33),
            null === e)
          ) {
            if (oa) {
              if ((o ? li(t) : ui(), oa)) {
                var u,
                  s = aa;
                if ((u = s)) {
                  e: {
                    for (u = s, s = ia; 8 !== u.nodeType; ) {
                      if (!s) {
                        s = null;
                        break e;
                      }
                      if (null === (u = yd(u.nextSibling))) {
                        s = null;
                        break e;
                      }
                    }
                    s = u;
                  }
                  null !== s
                    ? ((t.memoizedState = {
                        dehydrated: s,
                        treeContext:
                          null !== Yr ? { id: Gr, overflow: Jr } : null,
                        retryLane: 536870912,
                        hydrationErrors: null,
                      }),
                      ((u = Fr(18, null, null, 0)).stateNode = s),
                      (u.return = t),
                      (t.child = u),
                      (ra = t),
                      (aa = null),
                      (u = !0))
                    : (u = !1);
                }
                u || sa(t);
              }
              if (null !== (s = t.memoizedState) && null !== (s = s.dehydrated))
                return (gd(s) ? (t.lanes = 32) : (t.lanes = 536870912), null);
              si(t);
            }
            return (
              (s = a.children),
              (a = a.fallback),
              o
                ? (ui(),
                  (s = Vi({ mode: "hidden", children: s }, (o = t.mode))),
                  (a = Hr(a, o, n, null)),
                  (s.return = t),
                  (a.return = t),
                  (s.sibling = a),
                  (t.child = s),
                  ((o = t.child).memoizedState = Ui(n)),
                  (o.childLanes = Hi(e, r, n)),
                  (t.memoizedState = Ii),
                  a)
                : (li(t), $i(t, s))
            );
          }
          if (null !== (u = e.memoizedState) && null !== (s = u.dehydrated)) {
            if (i)
              256 & t.flags
                ? (li(t), (t.flags &= -257), (t = Wi(e, t, n)))
                : null !== t.memoizedState
                  ? (ui(), (t.child = e.child), (t.flags |= 128), (t = null))
                  : (ui(),
                    (o = a.fallback),
                    (s = t.mode),
                    (a = Vi({ mode: "visible", children: a.children }, s)),
                    ((o = Hr(o, s, n, null)).flags |= 2),
                    (a.return = t),
                    (o.return = t),
                    (a.sibling = o),
                    (t.child = a),
                    ni(t, e.child, null, n),
                    ((a = t.child).memoizedState = Ui(n)),
                    (a.childLanes = Hi(e, r, n)),
                    (t.memoizedState = Ii),
                    (t = o));
            else if ((li(t), gd(s))) {
              if ((r = s.nextSibling && s.nextSibling.dataset)) var c = r.dgst;
              ((r = c),
                ((a = Error(l(419))).stack = ""),
                (a.digest = r),
                ha({ value: a, source: null, stack: null }),
                (t = Wi(e, t, n)));
            } else if (
              (Ni || Sa(e, t, n, !1), (r = 0 !== (n & e.childLanes)), Ni || r)
            ) {
              if (
                null !== (r = rs) &&
                0 !==
                  (a =
                    0 !==
                    ((a = 0 !== (42 & (a = n & -n)) ? 1 : je(a)) &
                      (r.suspendedLanes | n))
                      ? 0
                      : a) &&
                a !== u.retryLane
              )
                throw ((u.retryLane = a), Or(e, a), Fs(r, e, a), Ci);
              ("$?" === s.data || Qs(), (t = Wi(e, t, n)));
            } else
              "$?" === s.data
                ? ((t.flags |= 192), (t.child = e.child), (t = null))
                : ((e = u.treeContext),
                  (aa = yd(s.nextSibling)),
                  (ra = t),
                  (oa = !0),
                  (la = null),
                  (ia = !1),
                  null !== e &&
                    ((Kr[Xr++] = Gr),
                    (Kr[Xr++] = Jr),
                    (Kr[Xr++] = Yr),
                    (Gr = e.id),
                    (Jr = e.overflow),
                    (Yr = t)),
                  ((t = $i(t, a.children)).flags |= 4096));
            return t;
          }
          return o
            ? (ui(),
              (o = a.fallback),
              (s = t.mode),
              (c = (u = e.child).sibling),
              ((a = Dr(u, {
                mode: "hidden",
                children: a.children,
              })).subtreeFlags = 65011712 & u.subtreeFlags),
              null !== c
                ? (o = Dr(c, o))
                : ((o = Hr(o, s, n, null)).flags |= 2),
              (o.return = t),
              (a.return = t),
              (a.sibling = o),
              (t.child = a),
              (a = o),
              (o = t.child),
              null === (s = e.child.memoizedState)
                ? (s = Ui(n))
                : (null !== (u = s.cachePool)
                    ? ((c = za._currentValue),
                      (u = u.parent !== c ? { parent: c, pool: c } : u))
                    : (u = Va()),
                  (s = { baseLanes: s.baseLanes | n, cachePool: u })),
              (o.memoizedState = s),
              (o.childLanes = Hi(e, r, n)),
              (t.memoizedState = Ii),
              a)
            : (li(t),
              (e = (n = e.child).sibling),
              ((n = Dr(n, { mode: "visible", children: a.children })).return =
                t),
              (n.sibling = null),
              null !== e &&
                (null === (r = t.deletions)
                  ? ((t.deletions = [e]), (t.flags |= 16))
                  : r.push(e)),
              (t.child = n),
              (t.memoizedState = null),
              n);
        }
        function $i(e, t) {
          return (
            ((t = Vi({ mode: "visible", children: t }, e.mode)).return = e),
            (e.child = t)
          );
        }
        function Vi(e, t) {
          return (
            ((e = Fr(22, e, null, t)).lanes = 0),
            (e.stateNode = {
              _visibility: 1,
              _pendingMarkers: null,
              _retryCache: null,
              _transitions: null,
            }),
            e
          );
        }
        function Wi(e, t, n) {
          return (
            ni(t, e.child, null, n),
            ((e = $i(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function qi(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          (null !== r && (r.lanes |= t), ka(e.return, t, n));
        }
        function Qi(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Ki(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((ji(e, t, r.children, n), 0 !== (2 & (r = ci.current))))
            ((r = (1 & r) | 2), (t.flags |= 128));
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && qi(e, n, t);
                else if (19 === e.tag) qi(e, n, t);
                else if (null !== e.child) {
                  ((e.child.return = e), (e = e.child));
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                ((e.sibling.return = e.return), (e = e.sibling));
              }
            r &= 1;
          }
          switch ((H(ci, r), a)) {
            case "forwards":
              for (n = t.child, a = null; null !== n; )
                (null !== (e = n.alternate) && null === di(e) && (a = n),
                  (n = n.sibling));
              (null === (n = a)
                ? ((a = t.child), (t.child = null))
                : ((a = n.sibling), (n.sibling = null)),
                Qi(t, !1, a, n, o));
              break;
            case "backwards":
              for (n = null, a = t.child, t.child = null; null !== a; ) {
                if (null !== (e = a.alternate) && null === di(e)) {
                  t.child = a;
                  break;
                }
                ((e = a.sibling), (a.sibling = n), (n = a), (a = e));
              }
              Qi(t, !0, n, null, o);
              break;
            case "together":
              Qi(t, !1, null, null, void 0);
              break;
            default:
              t.memoizedState = null;
          }
          return t.child;
        }
        function Xi(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (ps |= t.lanes),
            0 === (n & t.childLanes))
          ) {
            if (null === e) return null;
            if ((Sa(e, t, n, !1), 0 === (n & t.childLanes))) return null;
          }
          if (null !== e && t.child !== e.child) throw Error(l(153));
          if (null !== t.child) {
            for (
              n = Dr((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              ((e = e.sibling),
                ((n = n.sibling = Dr(e, e.pendingProps)).return = t));
            n.sibling = null;
          }
          return t.child;
        }
        function Yi(e, t) {
          return (
            0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !_a(e))
          );
        }
        function Gi(e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps) Ni = !0;
            else {
              if (!Yi(e, n) && 0 === (128 & t.flags))
                return (
                  (Ni = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        (q(t, t.stateNode.containerInfo),
                          ba(0, za, e.memoizedState.cache),
                          pa());
                        break;
                      case 27:
                      case 5:
                        K(t);
                        break;
                      case 4:
                        q(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        ba(0, t.type, t.memoizedProps.value);
                        break;
                      case 13:
                        var r = t.memoizedState;
                        if (null !== r)
                          return null !== r.dehydrated
                            ? (li(t), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                              ? Bi(e, t, n)
                              : (li(t),
                                null !== (e = Xi(e, t, n)) ? e.sibling : null);
                        li(t);
                        break;
                      case 19:
                        var a = 0 !== (128 & e.flags);
                        if (
                          ((r = 0 !== (n & t.childLanes)) ||
                            (Sa(e, t, n, !1), (r = 0 !== (n & t.childLanes))),
                          a)
                        ) {
                          if (r) return Ki(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          H(ci, ci.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return ((t.lanes = 0), zi(e, t, n));
                      case 24:
                        ba(0, za, e.memoizedState.cache);
                    }
                    return Xi(e, t, n);
                  })(e, t, n)
                );
              Ni = 0 !== (131072 & e.flags);
            }
          else
            ((Ni = !1), oa && 0 !== (1048576 & t.flags) && ea(t, Qr, t.index));
          switch (((t.lanes = 0), t.tag)) {
            case 16:
              e: {
                e = t.pendingProps;
                var r = t.elementType,
                  a = r._init;
                if (
                  ((r = a(r._payload)), (t.type = r), "function" !== typeof r)
                ) {
                  if (void 0 !== r && null !== r) {
                    if ((a = r.$$typeof) === x) {
                      ((t.tag = 11), (t = Pi(null, t, r, e, n)));
                      break e;
                    }
                    if (a === E) {
                      ((t.tag = 14), (t = Ti(null, t, r, e, n)));
                      break e;
                    }
                  }
                  throw ((t = z(r) || r), Error(l(306, t, "")));
                }
                Mr(r)
                  ? ((e = gi(r, e)), (t.tag = 1), (t = Mi(null, t, r, e, n)))
                  : ((t.tag = 0), (t = Ai(null, t, r, e, n)));
              }
              return t;
            case 0:
              return Ai(e, t, t.type, t.pendingProps, n);
            case 1:
              return Mi(e, t, (r = t.type), (a = gi(r, t.pendingProps)), n);
            case 3:
              e: {
                if ((q(t, t.stateNode.containerInfo), null === e))
                  throw Error(l(387));
                r = t.pendingProps;
                var o = t.memoizedState;
                ((a = o.element), ro(e, t), co(t, r, null, n));
                var i = t.memoizedState;
                if (
                  ((r = i.cache),
                  ba(0, za, r),
                  r !== o.cache && xa(t, [za], n, !0),
                  so(),
                  (r = i.element),
                  o.isDehydrated)
                ) {
                  if (
                    ((o = { element: r, isDehydrated: !1, cache: i.cache }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Di(e, t, r, n);
                    break e;
                  }
                  if (r !== a) {
                    (ha((a = _r(Error(l(424)), t))), (t = Di(e, t, r, n)));
                    break e;
                  }
                  if (9 === (e = t.stateNode.containerInfo).nodeType)
                    e = e.body;
                  else e = "HTML" === e.nodeName ? e.ownerDocument.body : e;
                  for (
                    aa = yd(e.firstChild),
                      ra = t,
                      oa = !0,
                      la = null,
                      ia = !0,
                      n = ri(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                  if ((pa(), r === a)) {
                    t = Xi(e, t, n);
                    break e;
                  }
                  ji(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 26:
              return (
                Ri(e, t),
                null === e
                  ? (n = jd(t.type, null, t.pendingProps, null))
                    ? (t.memoizedState = n)
                    : oa ||
                      ((n = t.type),
                      (e = t.pendingProps),
                      ((r = rd(V.current).createElement(n))[ze] = t),
                      (r[Le] = e),
                      ed(r, n, e),
                      We(r),
                      (t.stateNode = r))
                  : (t.memoizedState = jd(
                      t.type,
                      e.memoizedProps,
                      t.pendingProps,
                      e.memoizedState,
                    )),
                null
              );
            case 27:
              return (
                K(t),
                null === e &&
                  oa &&
                  ((r = t.stateNode = wd(t.type, t.pendingProps, V.current)),
                  (ra = t),
                  (ia = !0),
                  (a = aa),
                  pd(t.type) ? ((vd = a), (aa = yd(r.firstChild))) : (aa = a)),
                ji(e, t, t.pendingProps.children, n),
                Ri(e, t),
                null === e && (t.flags |= 4194304),
                t.child
              );
            case 5:
              return (
                null === e &&
                  oa &&
                  ((a = r = aa) &&
                    (null !==
                    (r = (function (e, t, n, r) {
                      for (; 1 === e.nodeType; ) {
                        var a = n;
                        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                          if (
                            !r &&
                            ("INPUT" !== e.nodeName || "hidden" !== e.type)
                          )
                            break;
                        } else if (r) {
                          if (!e[Ie])
                            switch (t) {
                              case "meta":
                                if (!e.hasAttribute("itemprop")) break;
                                return e;
                              case "link":
                                if (
                                  "stylesheet" ===
                                    (o = e.getAttribute("rel")) &&
                                  e.hasAttribute("data-precedence")
                                )
                                  break;
                                if (
                                  o !== a.rel ||
                                  e.getAttribute("href") !==
                                    (null == a.href || "" === a.href
                                      ? null
                                      : a.href) ||
                                  e.getAttribute("crossorigin") !==
                                    (null == a.crossOrigin
                                      ? null
                                      : a.crossOrigin) ||
                                  e.getAttribute("title") !==
                                    (null == a.title ? null : a.title)
                                )
                                  break;
                                return e;
                              case "style":
                                if (e.hasAttribute("data-precedence")) break;
                                return e;
                              case "script":
                                if (
                                  ((o = e.getAttribute("src")) !==
                                    (null == a.src ? null : a.src) ||
                                    e.getAttribute("type") !==
                                      (null == a.type ? null : a.type) ||
                                    e.getAttribute("crossorigin") !==
                                      (null == a.crossOrigin
                                        ? null
                                        : a.crossOrigin)) &&
                                  o &&
                                  e.hasAttribute("async") &&
                                  !e.hasAttribute("itemprop")
                                )
                                  break;
                                return e;
                              default:
                                return e;
                            }
                        } else {
                          if ("input" !== t || "hidden" !== e.type) return e;
                          var o = null == a.name ? null : "" + a.name;
                          if (
                            "hidden" === a.type &&
                            e.getAttribute("name") === o
                          )
                            return e;
                        }
                        if (null === (e = yd(e.nextSibling))) break;
                      }
                      return null;
                    })(r, t.type, t.pendingProps, ia))
                      ? ((t.stateNode = r),
                        (ra = t),
                        (aa = yd(r.firstChild)),
                        (ia = !1),
                        (a = !0))
                      : (a = !1)),
                  a || sa(t)),
                K(t),
                (a = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (r = o.children),
                ld(a, o)
                  ? (r = null)
                  : null !== i && ld(a, i) && (t.flags |= 32),
                null !== t.memoizedState &&
                  ((a = zo(e, t, Ao, null, null, n)), (Kd._currentValue = a)),
                Ri(e, t),
                ji(e, t, r, n),
                t.child
              );
            case 6:
              return (
                null === e &&
                  oa &&
                  ((e = n = aa) &&
                    (null !==
                    (n = (function (e, t, n) {
                      if ("" === t) return null;
                      for (; 3 !== e.nodeType; ) {
                        if (
                          (1 !== e.nodeType ||
                            "INPUT" !== e.nodeName ||
                            "hidden" !== e.type) &&
                          !n
                        )
                          return null;
                        if (null === (e = yd(e.nextSibling))) return null;
                      }
                      return e;
                    })(n, t.pendingProps, ia))
                      ? ((t.stateNode = n), (ra = t), (aa = null), (e = !0))
                      : (e = !1)),
                  e || sa(t)),
                null
              );
            case 13:
              return Bi(e, t, n);
            case 4:
              return (
                q(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = ni(t, null, r, n)) : ji(e, t, r, n),
                t.child
              );
            case 11:
              return Pi(e, t, t.type, t.pendingProps, n);
            case 7:
              return (ji(e, t, t.pendingProps, n), t.child);
            case 8:
            case 12:
              return (ji(e, t, t.pendingProps.children, n), t.child);
            case 10:
              return (
                (r = t.pendingProps),
                ba(0, t.type, r.value),
                ji(e, t, r.children, n),
                t.child
              );
            case 9:
              return (
                (a = t.type._context),
                (r = t.pendingProps.children),
                Ea(t),
                (r = r((a = Ca(a)))),
                (t.flags |= 1),
                ji(e, t, r, n),
                t.child
              );
            case 14:
              return Ti(e, t, t.type, t.pendingProps, n);
            case 15:
              return Oi(e, t, t.type, t.pendingProps, n);
            case 19:
              return Ki(e, t, n);
            case 31:
              return (
                (r = t.pendingProps),
                (n = t.mode),
                (r = { mode: r.mode, children: r.children }),
                null === e
                  ? (((n = Vi(r, n)).ref = t.ref),
                    (t.child = n),
                    (n.return = t),
                    (t = n))
                  : (((n = Dr(e.child, r)).ref = t.ref),
                    (t.child = n),
                    (n.return = t),
                    (t = n)),
                t
              );
            case 22:
              return zi(e, t, n);
            case 24:
              return (
                Ea(t),
                (r = Ca(za)),
                null === e
                  ? (null === (a = Ba()) &&
                      ((a = rs),
                      (o = La()),
                      (a.pooledCache = o),
                      o.refCount++,
                      null !== o && (a.pooledCacheLanes |= n),
                      (a = o)),
                    (t.memoizedState = { parent: r, cache: a }),
                    no(t),
                    ba(0, za, a))
                  : (0 !== (e.lanes & n) &&
                      (ro(e, t), co(t, null, null, n), so()),
                    (a = e.memoizedState),
                    (o = t.memoizedState),
                    a.parent !== r
                      ? ((a = { parent: r, cache: r }),
                        (t.memoizedState = a),
                        0 === t.lanes &&
                          (t.memoizedState = t.updateQueue.baseState = a),
                        ba(0, za, r))
                      : ((r = o.cache),
                        ba(0, za, r),
                        r !== a.cache && xa(t, [za], n, !0))),
                ji(e, t, t.pendingProps.children, n),
                t.child
              );
            case 29:
              throw t.pendingProps;
          }
          throw Error(l(156, t.tag));
        }
        function Ji(e) {
          e.flags |= 4;
        }
        function Zi(e, t) {
          if ("stylesheet" !== t.type || 0 !== (4 & t.state.loading))
            e.flags &= -16777217;
          else if (((e.flags |= 16777216), !Hd(t))) {
            if (
              null !== (t = ai.current) &&
              ((4194048 & os) === os
                ? null !== oi
                : ((62914560 & os) !== os && 0 === (536870912 & os)) ||
                  t !== oi)
            )
              throw ((Ja = Ka), qa);
            e.flags |= 8192;
          }
        }
        function eu(e, t) {
          (null !== t && (e.flags |= 4),
            16384 & e.flags &&
              ((t = 22 !== e.tag ? Se() : 536870912),
              (e.lanes |= t),
              (ys |= t)));
        }
        function tu(e, t) {
          if (!oa)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  (null !== t.alternate && (n = t), (t = t.sibling));
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  (null !== n.alternate && (r = n), (n = n.sibling));
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function nu(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              ((n |= a.lanes | a.childLanes),
                (r |= 65011712 & a.subtreeFlags),
                (r |= 65011712 & a.flags),
                (a.return = e),
                (a = a.sibling));
          else
            for (a = e.child; null !== a; )
              ((n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling));
          return ((e.subtreeFlags |= r), (e.childLanes = n), t);
        }
        function ru(e, t, n) {
          var r = t.pendingProps;
          switch ((na(t), t.tag)) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
            case 1:
              return (nu(t), null);
            case 3:
              return (
                (n = t.stateNode),
                (r = null),
                null !== e && (r = e.memoizedState.cache),
                t.memoizedState.cache !== r && (t.flags |= 2048),
                wa(za),
                Q(),
                n.pendingContext &&
                  ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fa(t)
                    ? Ji(t)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024), ma())),
                nu(t),
                null
              );
            case 26:
              return (
                (n = t.memoizedState),
                null === e
                  ? (Ji(t),
                    null !== n
                      ? (nu(t), Zi(t, n))
                      : (nu(t), (t.flags &= -16777217)))
                  : n
                    ? n !== e.memoizedState
                      ? (Ji(t), nu(t), Zi(t, n))
                      : (nu(t), (t.flags &= -16777217))
                    : (e.memoizedProps !== r && Ji(t),
                      nu(t),
                      (t.flags &= -16777217)),
                null
              );
            case 27:
              (X(t), (n = V.current));
              var a = t.type;
              if (null !== e && null != t.stateNode)
                e.memoizedProps !== r && Ji(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return (nu(t), null);
                }
                ((e = B.current),
                  fa(t)
                    ? ca(t)
                    : ((e = wd(a, r, n)), (t.stateNode = e), Ji(t)));
              }
              return (nu(t), null);
            case 5:
              if ((X(t), (n = t.type), null !== e && null != t.stateNode))
                e.memoizedProps !== r && Ji(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return (nu(t), null);
                }
                if (((e = B.current), fa(t))) ca(t);
                else {
                  switch (((a = rd(V.current)), e)) {
                    case 1:
                      e = a.createElementNS("http://www.w3.org/2000/svg", n);
                      break;
                    case 2:
                      e = a.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        n,
                      );
                      break;
                    default:
                      switch (n) {
                        case "svg":
                          e = a.createElementNS(
                            "http://www.w3.org/2000/svg",
                            n,
                          );
                          break;
                        case "math":
                          e = a.createElementNS(
                            "http://www.w3.org/1998/Math/MathML",
                            n,
                          );
                          break;
                        case "script":
                          (((e = a.createElement("div")).innerHTML =
                            "<script><\/script>"),
                            (e = e.removeChild(e.firstChild)));
                          break;
                        case "select":
                          ((e =
                            "string" === typeof r.is
                              ? a.createElement("select", { is: r.is })
                              : a.createElement("select")),
                            r.multiple
                              ? (e.multiple = !0)
                              : r.size && (e.size = r.size));
                          break;
                        default:
                          e =
                            "string" === typeof r.is
                              ? a.createElement(n, { is: r.is })
                              : a.createElement(n);
                      }
                  }
                  ((e[ze] = t), (e[Le] = r));
                  e: for (a = t.child; null !== a; ) {
                    if (5 === a.tag || 6 === a.tag) e.appendChild(a.stateNode);
                    else if (4 !== a.tag && 27 !== a.tag && null !== a.child) {
                      ((a.child.return = a), (a = a.child));
                      continue;
                    }
                    if (a === t) break e;
                    for (; null === a.sibling; ) {
                      if (null === a.return || a.return === t) break e;
                      a = a.return;
                    }
                    ((a.sibling.return = a.return), (a = a.sibling));
                  }
                  t.stateNode = e;
                  e: switch ((ed(e, n, r), n)) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      e = !!r.autoFocus;
                      break e;
                    case "img":
                      e = !0;
                      break e;
                    default:
                      e = !1;
                  }
                  e && Ji(t);
                }
              }
              return (nu(t), (t.flags &= -16777217), null);
            case 6:
              if (e && null != t.stateNode) e.memoizedProps !== r && Ji(t);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(l(166));
                if (((e = V.current), fa(t))) {
                  if (
                    ((e = t.stateNode),
                    (n = t.memoizedProps),
                    (r = null),
                    null !== (a = ra))
                  )
                    switch (a.tag) {
                      case 27:
                      case 5:
                        r = a.memoizedProps;
                    }
                  ((e[ze] = t),
                    (e = !!(
                      e.nodeValue === n ||
                      (null !== r && !0 === r.suppressHydrationWarning) ||
                      Yc(e.nodeValue, n)
                    )) || sa(t));
                } else
                  (((e = rd(e).createTextNode(r))[ze] = t), (t.stateNode = e));
              }
              return (nu(t), null);
            case 13:
              if (
                ((r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (((a = fa(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!a) throw Error(l(318));
                    if (
                      !(a =
                        null !== (a = t.memoizedState) ? a.dehydrated : null)
                    )
                      throw Error(l(317));
                    a[ze] = t;
                  } else
                    (pa(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4));
                  (nu(t), (a = !1));
                } else
                  ((a = ma()),
                    null !== e &&
                      null !== e.memoizedState &&
                      (e.memoizedState.hydrationErrors = a),
                    (a = !0));
                if (!a) return 256 & t.flags ? (si(t), t) : (si(t), null);
              }
              if ((si(t), 0 !== (128 & t.flags))) return ((t.lanes = n), t);
              if (
                ((n = null !== r),
                (e = null !== e && null !== e.memoizedState),
                n)
              ) {
                ((a = null),
                  null !== (r = t.child).alternate &&
                    null !== r.alternate.memoizedState &&
                    null !== r.alternate.memoizedState.cachePool &&
                    (a = r.alternate.memoizedState.cachePool.pool));
                var o = null;
                (null !== r.memoizedState &&
                  null !== r.memoizedState.cachePool &&
                  (o = r.memoizedState.cachePool.pool),
                  o !== a && (r.flags |= 2048));
              }
              return (
                n !== e && n && (t.child.flags |= 8192),
                eu(t, t.updateQueue),
                nu(t),
                null
              );
            case 4:
              return (
                Q(),
                null === e && Uc(t.stateNode.containerInfo),
                nu(t),
                null
              );
            case 10:
              return (wa(t.type), nu(t), null);
            case 19:
              if ((U(ci), null === (a = t.memoizedState))) return (nu(t), null);
              if (((r = 0 !== (128 & t.flags)), null === (o = a.rendering)))
                if (r) tu(a, !1);
                else {
                  if (0 !== fs || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (o = di(e))) {
                        for (
                          t.flags |= 128,
                            tu(a, !1),
                            e = o.updateQueue,
                            t.updateQueue = e,
                            eu(t, e),
                            t.subtreeFlags = 0,
                            e = n,
                            n = t.child;
                          null !== n;

                        )
                          (Ir(n, e), (n = n.sibling));
                        return (H(ci, (1 & ci.current) | 2), t.child);
                      }
                      e = e.sibling;
                    }
                  null !== a.tail &&
                    te() > xs &&
                    ((t.flags |= 128),
                    (r = !0),
                    tu(a, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = di(o))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      (e = e.updateQueue),
                      (t.updateQueue = e),
                      eu(t, e),
                      tu(a, !0),
                      null === a.tail &&
                        "hidden" === a.tailMode &&
                        !o.alternate &&
                        !oa)
                    )
                      return (nu(t), null);
                  } else
                    2 * te() - a.renderingStartTime > xs &&
                      536870912 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      tu(a, !1),
                      (t.lanes = 4194304));
                a.isBackwards
                  ? ((o.sibling = t.child), (t.child = o))
                  : (null !== (e = a.last) ? (e.sibling = o) : (t.child = o),
                    (a.last = o));
              }
              return null !== a.tail
                ? ((t = a.tail),
                  (a.rendering = t),
                  (a.tail = t.sibling),
                  (a.renderingStartTime = te()),
                  (t.sibling = null),
                  (e = ci.current),
                  H(ci, r ? (1 & e) | 2 : 1 & e),
                  t)
                : (nu(t), null);
            case 22:
            case 23:
              return (
                si(t),
                vo(),
                (r = null !== t.memoizedState),
                null !== e
                  ? (null !== e.memoizedState) !== r && (t.flags |= 8192)
                  : r && (t.flags |= 8192),
                r
                  ? 0 !== (536870912 & n) &&
                    0 === (128 & t.flags) &&
                    (nu(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : nu(t),
                null !== (n = t.updateQueue) && eu(t, n.retryQueue),
                (n = null),
                null !== e &&
                  null !== e.memoizedState &&
                  null !== e.memoizedState.cachePool &&
                  (n = e.memoizedState.cachePool.pool),
                (r = null),
                null !== t.memoizedState &&
                  null !== t.memoizedState.cachePool &&
                  (r = t.memoizedState.cachePool.pool),
                r !== n && (t.flags |= 2048),
                null !== e && U(Ha),
                null
              );
            case 24:
              return (
                (n = null),
                null !== e && (n = e.memoizedState.cache),
                t.memoizedState.cache !== n && (t.flags |= 2048),
                wa(za),
                nu(t),
                null
              );
            case 25:
            case 30:
              return null;
          }
          throw Error(l(156, t.tag));
        }
        function au(e, t) {
          switch ((na(t), t.tag)) {
            case 1:
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 3:
              return (
                wa(za),
                Q(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 26:
            case 27:
            case 5:
              return (X(t), null);
            case 13:
              if (
                (si(t), null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(l(340));
                pa();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return (U(ci), null);
            case 4:
              return (Q(), null);
            case 10:
              return (wa(t.type), null);
            case 22:
            case 23:
              return (
                si(t),
                vo(),
                null !== e && U(Ha),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 24:
              return (wa(za), null);
            default:
              return null;
          }
        }
        function ou(e, t) {
          switch ((na(t), t.tag)) {
            case 3:
              (wa(za), Q());
              break;
            case 26:
            case 27:
            case 5:
              X(t);
              break;
            case 4:
              Q();
              break;
            case 13:
              si(t);
              break;
            case 19:
              U(ci);
              break;
            case 10:
              wa(t.type);
              break;
            case 22:
            case 23:
              (si(t), vo(), null !== e && U(Ha));
              break;
            case 24:
              wa(za);
          }
        }
        function lu(e, t) {
          try {
            var n = t.updateQueue,
              r = null !== n ? n.lastEffect : null;
            if (null !== r) {
              var a = r.next;
              n = a;
              do {
                if ((n.tag & e) === e) {
                  r = void 0;
                  var o = n.create,
                    l = n.inst;
                  ((r = o()), (l.destroy = r));
                }
                n = n.next;
              } while (n !== a);
            }
          } catch (i) {
            cc(t, t.return, i);
          }
        }
        function iu(e, t, n) {
          try {
            var r = t.updateQueue,
              a = null !== r ? r.lastEffect : null;
            if (null !== a) {
              var o = a.next;
              r = o;
              do {
                if ((r.tag & e) === e) {
                  var l = r.inst,
                    i = l.destroy;
                  if (void 0 !== i) {
                    ((l.destroy = void 0), (a = t));
                    var u = n,
                      s = i;
                    try {
                      s();
                    } catch (c) {
                      cc(a, u, c);
                    }
                  }
                }
                r = r.next;
              } while (r !== o);
            }
          } catch (c) {
            cc(t, t.return, c);
          }
        }
        function uu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            var n = e.stateNode;
            try {
              po(t, n);
            } catch (r) {
              cc(e, e.return, r);
            }
          }
        }
        function su(e, t, n) {
          ((n.props = gi(e.type, e.memoizedProps)),
            (n.state = e.memoizedState));
          try {
            n.componentWillUnmount();
          } catch (r) {
            cc(e, t, r);
          }
        }
        function cu(e, t) {
          try {
            var n = e.ref;
            if (null !== n) {
              switch (e.tag) {
                case 26:
                case 27:
                case 5:
                  var r = e.stateNode;
                  break;
                default:
                  r = e.stateNode;
              }
              "function" === typeof n ? (e.refCleanup = n(r)) : (n.current = r);
            }
          } catch (a) {
            cc(e, t, a);
          }
        }
        function du(e, t) {
          var n = e.ref,
            r = e.refCleanup;
          if (null !== n)
            if ("function" === typeof r)
              try {
                r();
              } catch (a) {
                cc(e, t, a);
              } finally {
                ((e.refCleanup = null),
                  null != (e = e.alternate) && (e.refCleanup = null));
              }
            else if ("function" === typeof n)
              try {
                n(null);
              } catch (o) {
                cc(e, t, o);
              }
            else n.current = null;
        }
        function fu(e) {
          var t = e.type,
            n = e.memoizedProps,
            r = e.stateNode;
          try {
            e: switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n.autoFocus && r.focus();
                break e;
              case "img":
                n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
            }
          } catch (a) {
            cc(e, e.return, a);
          }
        }
        function pu(e, t, n) {
          try {
            var r = e.stateNode;
            (!(function (e, t, n, r) {
              switch (t) {
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                  break;
                case "input":
                  var a = null,
                    o = null,
                    i = null,
                    u = null,
                    s = null,
                    c = null,
                    d = null;
                  for (m in n) {
                    var f = n[m];
                    if (n.hasOwnProperty(m) && null != f)
                      switch (m) {
                        case "checked":
                        case "value":
                          break;
                        case "defaultValue":
                          s = f;
                        default:
                          r.hasOwnProperty(m) || Jc(e, t, m, null, r, f);
                      }
                  }
                  for (var p in r) {
                    var m = r[p];
                    if (
                      ((f = n[p]),
                      r.hasOwnProperty(p) && (null != m || null != f))
                    )
                      switch (p) {
                        case "type":
                          o = m;
                          break;
                        case "name":
                          a = m;
                          break;
                        case "checked":
                          c = m;
                          break;
                        case "defaultChecked":
                          d = m;
                          break;
                        case "value":
                          i = m;
                          break;
                        case "defaultValue":
                          u = m;
                          break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != m) throw Error(l(137, t));
                          break;
                        default:
                          m !== f && Jc(e, t, p, m, r, f);
                      }
                  }
                  return void gt(e, i, u, s, c, d, o, a);
                case "select":
                  for (o in ((m = i = u = p = null), n))
                    if (((s = n[o]), n.hasOwnProperty(o) && null != s))
                      switch (o) {
                        case "value":
                          break;
                        case "multiple":
                          m = s;
                        default:
                          r.hasOwnProperty(o) || Jc(e, t, o, null, r, s);
                      }
                  for (a in r)
                    if (
                      ((o = r[a]),
                      (s = n[a]),
                      r.hasOwnProperty(a) && (null != o || null != s))
                    )
                      switch (a) {
                        case "value":
                          p = o;
                          break;
                        case "defaultValue":
                          u = o;
                          break;
                        case "multiple":
                          i = o;
                        default:
                          o !== s && Jc(e, t, a, o, r, s);
                      }
                  return (
                    (t = u),
                    (n = i),
                    (r = m),
                    void (null != p
                      ? bt(e, !!n, p, !1)
                      : !!r !== !!n &&
                        (null != t
                          ? bt(e, !!n, t, !0)
                          : bt(e, !!n, n ? [] : "", !1)))
                  );
                case "textarea":
                  for (u in ((m = p = null), n))
                    if (
                      ((a = n[u]),
                      n.hasOwnProperty(u) && null != a && !r.hasOwnProperty(u))
                    )
                      switch (u) {
                        case "value":
                        case "children":
                          break;
                        default:
                          Jc(e, t, u, null, r, a);
                      }
                  for (i in r)
                    if (
                      ((a = r[i]),
                      (o = n[i]),
                      r.hasOwnProperty(i) && (null != a || null != o))
                    )
                      switch (i) {
                        case "value":
                          p = a;
                          break;
                        case "defaultValue":
                          m = a;
                          break;
                        case "children":
                          break;
                        case "dangerouslySetInnerHTML":
                          if (null != a) throw Error(l(91));
                          break;
                        default:
                          a !== o && Jc(e, t, i, a, r, o);
                      }
                  return void wt(e, p, m);
                case "option":
                  for (var h in n)
                    if (
                      ((p = n[h]),
                      n.hasOwnProperty(h) && null != p && !r.hasOwnProperty(h))
                    )
                      if ("selected" === h) e.selected = !1;
                      else Jc(e, t, h, null, r, p);
                  for (s in r)
                    if (
                      ((p = r[s]),
                      (m = n[s]),
                      r.hasOwnProperty(s) &&
                        p !== m &&
                        (null != p || null != m))
                    )
                      if ("selected" === s)
                        e.selected =
                          p && "function" !== typeof p && "symbol" !== typeof p;
                      else Jc(e, t, s, p, r, m);
                  return;
                case "img":
                case "link":
                case "area":
                case "base":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                case "menuitem":
                  for (var g in n)
                    ((p = n[g]),
                      n.hasOwnProperty(g) &&
                        null != p &&
                        !r.hasOwnProperty(g) &&
                        Jc(e, t, g, null, r, p));
                  for (c in r)
                    if (
                      ((p = r[c]),
                      (m = n[c]),
                      r.hasOwnProperty(c) &&
                        p !== m &&
                        (null != p || null != m))
                    )
                      switch (c) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != p) throw Error(l(137, t));
                          break;
                        default:
                          Jc(e, t, c, p, r, m);
                      }
                  return;
                default:
                  if (Ct(t)) {
                    for (var y in n)
                      ((p = n[y]),
                        n.hasOwnProperty(y) &&
                          void 0 !== p &&
                          !r.hasOwnProperty(y) &&
                          Zc(e, t, y, void 0, r, p));
                    for (d in r)
                      ((p = r[d]),
                        (m = n[d]),
                        !r.hasOwnProperty(d) ||
                          p === m ||
                          (void 0 === p && void 0 === m) ||
                          Zc(e, t, d, p, r, m));
                    return;
                  }
              }
              for (var v in n)
                ((p = n[v]),
                  n.hasOwnProperty(v) &&
                    null != p &&
                    !r.hasOwnProperty(v) &&
                    Jc(e, t, v, null, r, p));
              for (f in r)
                ((p = r[f]),
                  (m = n[f]),
                  !r.hasOwnProperty(f) ||
                    p === m ||
                    (null == p && null == m) ||
                    Jc(e, t, f, p, r, m));
            })(r, e.type, n, t),
              (r[Le] = t));
          } catch (a) {
            cc(e, e.return, a);
          }
        }
        function mu(e) {
          return (
            5 === e.tag ||
            3 === e.tag ||
            26 === e.tag ||
            (27 === e.tag && pd(e.type)) ||
            4 === e.tag
          );
        }
        function hu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || mu(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (27 === e.tag && pd(e.type)) continue e;
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              ((e.child.return = e), (e = e.child));
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function gu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            ((e = e.stateNode),
              t
                ? (9 === n.nodeType
                    ? n.body
                    : "HTML" === n.nodeName
                      ? n.ownerDocument.body
                      : n
                  ).insertBefore(e, t)
                : ((t =
                    9 === n.nodeType
                      ? n.body
                      : "HTML" === n.nodeName
                        ? n.ownerDocument.body
                        : n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Gc)));
          else if (
            4 !== r &&
            (27 === r && pd(e.type) && ((n = e.stateNode), (t = null)),
            null !== (e = e.child))
          )
            for (gu(e, t, n), e = e.sibling; null !== e; )
              (gu(e, t, n), (e = e.sibling));
        }
        function yu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
          else if (
            4 !== r &&
            (27 === r && pd(e.type) && (n = e.stateNode),
            null !== (e = e.child))
          )
            for (yu(e, t, n), e = e.sibling; null !== e; )
              (yu(e, t, n), (e = e.sibling));
        }
        function vu(e) {
          var t = e.stateNode,
            n = e.memoizedProps;
          try {
            for (var r = e.type, a = t.attributes; a.length; )
              t.removeAttributeNode(a[0]);
            (ed(t, r, n), (t[ze] = e), (t[Le] = n));
          } catch (o) {
            cc(e, e.return, o);
          }
        }
        var bu = !1,
          wu = !1,
          ku = !1,
          xu = "function" === typeof WeakSet ? WeakSet : Set,
          Su = null;
        function _u(e, t, n) {
          var r = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              (Mu(e, n), 4 & r && lu(5, n));
              break;
            case 1:
              if ((Mu(e, n), 4 & r))
                if (((e = n.stateNode), null === t))
                  try {
                    e.componentDidMount();
                  } catch (l) {
                    cc(n, n.return, l);
                  }
                else {
                  var a = gi(n.type, t.memoizedProps);
                  t = t.memoizedState;
                  try {
                    e.componentDidUpdate(
                      a,
                      t,
                      e.__reactInternalSnapshotBeforeUpdate,
                    );
                  } catch (i) {
                    cc(n, n.return, i);
                  }
                }
              (64 & r && uu(n), 512 & r && cu(n, n.return));
              break;
            case 3:
              if ((Mu(e, n), 64 & r && null !== (e = n.updateQueue))) {
                if (((t = null), null !== n.child))
                  switch (n.child.tag) {
                    case 27:
                    case 5:
                    case 1:
                      t = n.child.stateNode;
                  }
                try {
                  po(e, t);
                } catch (l) {
                  cc(n, n.return, l);
                }
              }
              break;
            case 27:
              null === t && 4 & r && vu(n);
            case 26:
            case 5:
              (Mu(e, n),
                null === t && 4 & r && fu(n),
                512 & r && cu(n, n.return));
              break;
            case 12:
              Mu(e, n);
              break;
            case 13:
              (Mu(e, n),
                4 & r && Tu(e, n),
                64 & r &&
                  null !== (e = n.memoizedState) &&
                  null !== (e = e.dehydrated) &&
                  (function (e, t) {
                    var n = e.ownerDocument;
                    if ("$?" !== e.data || "complete" === n.readyState) t();
                    else {
                      var r = function () {
                        (t(), n.removeEventListener("DOMContentLoaded", r));
                      };
                      (n.addEventListener("DOMContentLoaded", r),
                        (e._reactRetry = r));
                    }
                  })(e, (n = mc.bind(null, n))));
              break;
            case 22:
              if (!(r = null !== n.memoizedState || bu)) {
                ((t = (null !== t && null !== t.memoizedState) || wu),
                  (a = bu));
                var o = wu;
                ((bu = r),
                  (wu = t) && !o
                    ? Iu(e, n, 0 !== (8772 & n.subtreeFlags))
                    : Mu(e, n),
                  (bu = a),
                  (wu = o));
              }
              break;
            case 30:
              break;
            default:
              Mu(e, n);
          }
        }
        function Eu(e) {
          var t = e.alternate;
          (null !== t && ((e.alternate = null), Eu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag && null !== (t = e.stateNode) && Ue(t),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null));
        }
        var Cu = null,
          Nu = !1;
        function ju(e, t, n) {
          for (n = n.child; null !== n; ) (Pu(e, t, n), (n = n.sibling));
        }
        function Pu(e, t, n) {
          if (de && "function" === typeof de.onCommitFiberUnmount)
            try {
              de.onCommitFiberUnmount(ce, n);
            } catch (o) {}
          switch (n.tag) {
            case 26:
              (wu || du(n, t),
                ju(e, t, n),
                n.memoizedState
                  ? n.memoizedState.count--
                  : n.stateNode && (n = n.stateNode).parentNode.removeChild(n));
              break;
            case 27:
              wu || du(n, t);
              var r = Cu,
                a = Nu;
              (pd(n.type) && ((Cu = n.stateNode), (Nu = !1)),
                ju(e, t, n),
                kd(n.stateNode),
                (Cu = r),
                (Nu = a));
              break;
            case 5:
              wu || du(n, t);
            case 6:
              if (
                ((r = Cu),
                (a = Nu),
                (Cu = null),
                ju(e, t, n),
                (Nu = a),
                null !== (Cu = r))
              )
                if (Nu)
                  try {
                    (9 === Cu.nodeType
                      ? Cu.body
                      : "HTML" === Cu.nodeName
                        ? Cu.ownerDocument.body
                        : Cu
                    ).removeChild(n.stateNode);
                  } catch (l) {
                    cc(n, t, l);
                  }
                else
                  try {
                    Cu.removeChild(n.stateNode);
                  } catch (l) {
                    cc(n, t, l);
                  }
              break;
            case 18:
              null !== Cu &&
                (Nu
                  ? (md(
                      9 === (e = Cu).nodeType
                        ? e.body
                        : "HTML" === e.nodeName
                          ? e.ownerDocument.body
                          : e,
                      n.stateNode,
                    ),
                    jf(e))
                  : md(Cu, n.stateNode));
              break;
            case 4:
              ((r = Cu),
                (a = Nu),
                (Cu = n.stateNode.containerInfo),
                (Nu = !0),
                ju(e, t, n),
                (Cu = r),
                (Nu = a));
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              (wu || iu(2, n, t), wu || iu(4, n, t), ju(e, t, n));
              break;
            case 1:
              (wu ||
                (du(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount &&
                  su(n, t, r)),
                ju(e, t, n));
              break;
            case 21:
              ju(e, t, n);
              break;
            case 22:
              ((wu = (r = wu) || null !== n.memoizedState),
                ju(e, t, n),
                (wu = r));
              break;
            default:
              ju(e, t, n);
          }
        }
        function Tu(e, t) {
          if (
            null === t.memoizedState &&
            null !== (e = t.alternate) &&
            null !== (e = e.memoizedState) &&
            null !== (e = e.dehydrated)
          )
            try {
              jf(e);
            } catch (n) {
              cc(t, t.return, n);
            }
        }
        function Ou(e, t) {
          var n = (function (e) {
            switch (e.tag) {
              case 13:
              case 19:
                var t = e.stateNode;
                return (null === t && (t = e.stateNode = new xu()), t);
              case 22:
                return (
                  null === (t = (e = e.stateNode)._retryCache) &&
                    (t = e._retryCache = new xu()),
                  t
                );
              default:
                throw Error(l(435, e.tag));
            }
          })(e);
          t.forEach(function (t) {
            var r = hc.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          });
        }
        function zu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r],
                o = e,
                i = t,
                u = i;
              e: for (; null !== u; ) {
                switch (u.tag) {
                  case 27:
                    if (pd(u.type)) {
                      ((Cu = u.stateNode), (Nu = !1));
                      break e;
                    }
                    break;
                  case 5:
                    ((Cu = u.stateNode), (Nu = !1));
                    break e;
                  case 3:
                  case 4:
                    ((Cu = u.stateNode.containerInfo), (Nu = !0));
                    break e;
                }
                u = u.return;
              }
              if (null === Cu) throw Error(l(160));
              (Pu(o, i, a),
                (Cu = null),
                (Nu = !1),
                null !== (o = a.alternate) && (o.return = null),
                (a.return = null));
            }
          if (13878 & t.subtreeFlags)
            for (t = t.child; null !== t; ) (Ru(t, e), (t = t.sibling));
        }
        var Lu = null;
        function Ru(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              (zu(t, e),
                Au(e),
                4 & r && (iu(3, e, e.return), lu(3, e), iu(5, e, e.return)));
              break;
            case 1:
              (zu(t, e),
                Au(e),
                512 & r && (wu || null === n || du(n, n.return)),
                64 & r &&
                  bu &&
                  null !== (e = e.updateQueue) &&
                  null !== (r = e.callbacks) &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = null === n ? r : n.concat(r))));
              break;
            case 26:
              var a = Lu;
              if (
                (zu(t, e),
                Au(e),
                512 & r && (wu || null === n || du(n, n.return)),
                4 & r)
              ) {
                var o = null !== n ? n.memoizedState : null;
                if (((r = e.memoizedState), null === n))
                  if (null === r)
                    if (null === e.stateNode) {
                      e: {
                        ((r = e.type),
                          (n = e.memoizedProps),
                          (a = a.ownerDocument || a));
                        t: switch (r) {
                          case "title":
                            ((!(o = a.getElementsByTagName("title")[0]) ||
                              o[Ie] ||
                              o[ze] ||
                              "http://www.w3.org/2000/svg" === o.namespaceURI ||
                              o.hasAttribute("itemprop")) &&
                              ((o = a.createElement(r)),
                              a.head.insertBefore(
                                o,
                                a.querySelector("head > title"),
                              )),
                              ed(o, r, n),
                              (o[ze] = e),
                              We(o),
                              (r = o));
                            break e;
                          case "link":
                            var i = Id("link", "href", a).get(
                              r + (n.href || ""),
                            );
                            if (i)
                              for (var u = 0; u < i.length; u++)
                                if (
                                  (o = i[u]).getAttribute("href") ===
                                    (null == n.href || "" === n.href
                                      ? null
                                      : n.href) &&
                                  o.getAttribute("rel") ===
                                    (null == n.rel ? null : n.rel) &&
                                  o.getAttribute("title") ===
                                    (null == n.title ? null : n.title) &&
                                  o.getAttribute("crossorigin") ===
                                    (null == n.crossOrigin
                                      ? null
                                      : n.crossOrigin)
                                ) {
                                  i.splice(u, 1);
                                  break t;
                                }
                            (ed((o = a.createElement(r)), r, n),
                              a.head.appendChild(o));
                            break;
                          case "meta":
                            if (
                              (i = Id("meta", "content", a).get(
                                r + (n.content || ""),
                              ))
                            )
                              for (u = 0; u < i.length; u++)
                                if (
                                  (o = i[u]).getAttribute("content") ===
                                    (null == n.content
                                      ? null
                                      : "" + n.content) &&
                                  o.getAttribute("name") ===
                                    (null == n.name ? null : n.name) &&
                                  o.getAttribute("property") ===
                                    (null == n.property ? null : n.property) &&
                                  o.getAttribute("http-equiv") ===
                                    (null == n.httpEquiv
                                      ? null
                                      : n.httpEquiv) &&
                                  o.getAttribute("charset") ===
                                    (null == n.charSet ? null : n.charSet)
                                ) {
                                  i.splice(u, 1);
                                  break t;
                                }
                            (ed((o = a.createElement(r)), r, n),
                              a.head.appendChild(o));
                            break;
                          default:
                            throw Error(l(468, r));
                        }
                        ((o[ze] = e), We(o), (r = o));
                      }
                      e.stateNode = r;
                    } else Ud(a, e.type, e.stateNode);
                  else e.stateNode = Rd(a, r, e.memoizedProps);
                else
                  o !== r
                    ? (null === o
                        ? null !== n.stateNode &&
                          (n = n.stateNode).parentNode.removeChild(n)
                        : o.count--,
                      null === r
                        ? Ud(a, e.type, e.stateNode)
                        : Rd(a, r, e.memoizedProps))
                    : null === r &&
                      null !== e.stateNode &&
                      pu(e, e.memoizedProps, n.memoizedProps);
              }
              break;
            case 27:
              (zu(t, e),
                Au(e),
                512 & r && (wu || null === n || du(n, n.return)),
                null !== n && 4 & r && pu(e, e.memoizedProps, n.memoizedProps));
              break;
            case 5:
              if (
                (zu(t, e),
                Au(e),
                512 & r && (wu || null === n || du(n, n.return)),
                32 & e.flags)
              ) {
                a = e.stateNode;
                try {
                  xt(a, "");
                } catch (m) {
                  cc(e, e.return, m);
                }
              }
              (4 & r &&
                null != e.stateNode &&
                pu(e, (a = e.memoizedProps), null !== n ? n.memoizedProps : a),
                1024 & r && (ku = !0));
              break;
            case 6:
              if ((zu(t, e), Au(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                ((r = e.memoizedProps), (n = e.stateNode));
                try {
                  n.nodeValue = r;
                } catch (m) {
                  cc(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                ((Dd = null),
                (a = Lu),
                (Lu = _d(t.containerInfo)),
                zu(t, e),
                (Lu = a),
                Au(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  jf(t.containerInfo);
                } catch (m) {
                  cc(e, e.return, m);
                }
              ku && ((ku = !1), Fu(e));
              break;
            case 4:
              ((r = Lu),
                (Lu = _d(e.stateNode.containerInfo)),
                zu(t, e),
                Au(e),
                (Lu = r));
              break;
            case 12:
            default:
              (zu(t, e), Au(e));
              break;
            case 13:
              (zu(t, e),
                Au(e),
                8192 & e.child.flags &&
                  (null !== e.memoizedState) !==
                    (null !== n && null !== n.memoizedState) &&
                  (ks = te()),
                4 & r &&
                  null !== (r = e.updateQueue) &&
                  ((e.updateQueue = null), Ou(e, r)));
              break;
            case 22:
              a = null !== e.memoizedState;
              var s = null !== n && null !== n.memoizedState,
                c = bu,
                d = wu;
              if (
                ((bu = c || a),
                (wu = d || s),
                zu(t, e),
                (wu = d),
                (bu = c),
                Au(e),
                8192 & r)
              )
                e: for (
                  t = e.stateNode,
                    t._visibility = a ? -2 & t._visibility : 1 | t._visibility,
                    a && (null === n || s || bu || wu || Du(e)),
                    n = null,
                    t = e;
                  ;

                ) {
                  if (5 === t.tag || 26 === t.tag) {
                    if (null === n) {
                      s = n = t;
                      try {
                        if (((o = s.stateNode), a))
                          "function" === typeof (i = o.style).setProperty
                            ? i.setProperty("display", "none", "important")
                            : (i.display = "none");
                        else {
                          u = s.stateNode;
                          var f = s.memoizedProps.style,
                            p =
                              void 0 !== f &&
                              null !== f &&
                              f.hasOwnProperty("display")
                                ? f.display
                                : null;
                          u.style.display =
                            null == p || "boolean" === typeof p
                              ? ""
                              : ("" + p).trim();
                        }
                      } catch (m) {
                        cc(s, s.return, m);
                      }
                    }
                  } else if (6 === t.tag) {
                    if (null === n) {
                      s = t;
                      try {
                        s.stateNode.nodeValue = a ? "" : s.memoizedProps;
                      } catch (m) {
                        cc(s, s.return, m);
                      }
                    }
                  } else if (
                    ((22 !== t.tag && 23 !== t.tag) ||
                      null === t.memoizedState ||
                      t === e) &&
                    null !== t.child
                  ) {
                    ((t.child.return = t), (t = t.child));
                    continue;
                  }
                  if (t === e) break e;
                  for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e) break e;
                    (n === t && (n = null), (t = t.return));
                  }
                  (n === t && (n = null),
                    (t.sibling.return = t.return),
                    (t = t.sibling));
                }
              4 & r &&
                null !== (r = e.updateQueue) &&
                null !== (n = r.retryQueue) &&
                ((r.retryQueue = null), Ou(e, n));
              break;
            case 19:
              (zu(t, e),
                Au(e),
                4 & r &&
                  null !== (r = e.updateQueue) &&
                  ((e.updateQueue = null), Ou(e, r)));
            case 30:
            case 21:
          }
        }
        function Au(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              for (var n, r = e.return; null !== r; ) {
                if (mu(r)) {
                  n = r;
                  break;
                }
                r = r.return;
              }
              if (null == n) throw Error(l(160));
              switch (n.tag) {
                case 27:
                  var a = n.stateNode;
                  yu(e, hu(e), a);
                  break;
                case 5:
                  var o = n.stateNode;
                  (32 & n.flags && (xt(o, ""), (n.flags &= -33)),
                    yu(e, hu(e), o));
                  break;
                case 3:
                case 4:
                  var i = n.stateNode.containerInfo;
                  gu(e, hu(e), i);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (u) {
              cc(e, e.return, u);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function Fu(e) {
          if (1024 & e.subtreeFlags)
            for (e = e.child; null !== e; ) {
              var t = e;
              (Fu(t),
                5 === t.tag && 1024 & t.flags && t.stateNode.reset(),
                (e = e.sibling));
            }
        }
        function Mu(e, t) {
          if (8772 & t.subtreeFlags)
            for (t = t.child; null !== t; )
              (_u(e, t.alternate, t), (t = t.sibling));
        }
        function Du(e) {
          for (e = e.child; null !== e; ) {
            var t = e;
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                (iu(4, t, t.return), Du(t));
                break;
              case 1:
                du(t, t.return);
                var n = t.stateNode;
                ("function" === typeof n.componentWillUnmount &&
                  su(t, t.return, n),
                  Du(t));
                break;
              case 27:
                kd(t.stateNode);
              case 26:
              case 5:
                (du(t, t.return), Du(t));
                break;
              case 22:
                null === t.memoizedState && Du(t);
                break;
              default:
                Du(t);
            }
            e = e.sibling;
          }
        }
        function Iu(e, t, n) {
          for (
            n = n && 0 !== (8772 & t.subtreeFlags), t = t.child;
            null !== t;

          ) {
            var r = t.alternate,
              a = e,
              o = t,
              l = o.flags;
            switch (o.tag) {
              case 0:
              case 11:
              case 15:
                (Iu(a, o, n), lu(4, o));
                break;
              case 1:
                if (
                  (Iu(a, o, n),
                  "function" ===
                    typeof (a = (r = o).stateNode).componentDidMount)
                )
                  try {
                    a.componentDidMount();
                  } catch (s) {
                    cc(r, r.return, s);
                  }
                if (null !== (a = (r = o).updateQueue)) {
                  var i = r.stateNode;
                  try {
                    var u = a.shared.hiddenCallbacks;
                    if (null !== u)
                      for (
                        a.shared.hiddenCallbacks = null, a = 0;
                        a < u.length;
                        a++
                      )
                        fo(u[a], i);
                  } catch (s) {
                    cc(r, r.return, s);
                  }
                }
                (n && 64 & l && uu(o), cu(o, o.return));
                break;
              case 27:
                vu(o);
              case 26:
              case 5:
                (Iu(a, o, n),
                  n && null === r && 4 & l && fu(o),
                  cu(o, o.return));
                break;
              case 12:
                Iu(a, o, n);
                break;
              case 13:
                (Iu(a, o, n), n && 4 & l && Tu(a, o));
                break;
              case 22:
                (null === o.memoizedState && Iu(a, o, n), cu(o, o.return));
                break;
              case 30:
                break;
              default:
                Iu(a, o, n);
            }
            t = t.sibling;
          }
        }
        function Uu(e, t) {
          var n = null;
          (null !== e &&
            null !== e.memoizedState &&
            null !== e.memoizedState.cachePool &&
            (n = e.memoizedState.cachePool.pool),
            (e = null),
            null !== t.memoizedState &&
              null !== t.memoizedState.cachePool &&
              (e = t.memoizedState.cachePool.pool),
            e !== n && (null != e && e.refCount++, null != n && Ra(n)));
        }
        function Hu(e, t) {
          ((e = null),
            null !== t.alternate && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache) !== e &&
              (t.refCount++, null != e && Ra(e)));
        }
        function Bu(e, t, n, r) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) ($u(e, t, n, r), (t = t.sibling));
        }
        function $u(e, t, n, r) {
          var a = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              (Bu(e, t, n, r), 2048 & a && lu(9, t));
              break;
            case 1:
            case 13:
            default:
              Bu(e, t, n, r);
              break;
            case 3:
              (Bu(e, t, n, r),
                2048 & a &&
                  ((e = null),
                  null !== t.alternate && (e = t.alternate.memoizedState.cache),
                  (t = t.memoizedState.cache) !== e &&
                    (t.refCount++, null != e && Ra(e))));
              break;
            case 12:
              if (2048 & a) {
                (Bu(e, t, n, r), (e = t.stateNode));
                try {
                  var o = t.memoizedProps,
                    l = o.id,
                    i = o.onPostCommit;
                  "function" === typeof i &&
                    i(
                      l,
                      null === t.alternate ? "mount" : "update",
                      e.passiveEffectDuration,
                      -0,
                    );
                } catch (u) {
                  cc(t, t.return, u);
                }
              } else Bu(e, t, n, r);
              break;
            case 23:
              break;
            case 22:
              ((o = t.stateNode),
                (l = t.alternate),
                null !== t.memoizedState
                  ? 2 & o._visibility
                    ? Bu(e, t, n, r)
                    : Wu(e, t)
                  : 2 & o._visibility
                    ? Bu(e, t, n, r)
                    : ((o._visibility |= 2),
                      Vu(e, t, n, r, 0 !== (10256 & t.subtreeFlags))),
                2048 & a && Uu(l, t));
              break;
            case 24:
              (Bu(e, t, n, r), 2048 & a && Hu(t.alternate, t));
          }
        }
        function Vu(e, t, n, r, a) {
          for (
            a = a && 0 !== (10256 & t.subtreeFlags), t = t.child;
            null !== t;

          ) {
            var o = e,
              l = t,
              i = n,
              u = r,
              s = l.flags;
            switch (l.tag) {
              case 0:
              case 11:
              case 15:
                (Vu(o, l, i, u, a), lu(8, l));
                break;
              case 23:
                break;
              case 22:
                var c = l.stateNode;
                (null !== l.memoizedState
                  ? 2 & c._visibility
                    ? Vu(o, l, i, u, a)
                    : Wu(o, l)
                  : ((c._visibility |= 2), Vu(o, l, i, u, a)),
                  a && 2048 & s && Uu(l.alternate, l));
                break;
              case 24:
                (Vu(o, l, i, u, a), a && 2048 & s && Hu(l.alternate, l));
                break;
              default:
                Vu(o, l, i, u, a);
            }
            t = t.sibling;
          }
        }
        function Wu(e, t) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) {
              var n = e,
                r = t,
                a = r.flags;
              switch (r.tag) {
                case 22:
                  (Wu(n, r), 2048 & a && Uu(r.alternate, r));
                  break;
                case 24:
                  (Wu(n, r), 2048 & a && Hu(r.alternate, r));
                  break;
                default:
                  Wu(n, r);
              }
              t = t.sibling;
            }
        }
        var qu = 8192;
        function Qu(e) {
          if (e.subtreeFlags & qu)
            for (e = e.child; null !== e; ) (Ku(e), (e = e.sibling));
        }
        function Ku(e) {
          switch (e.tag) {
            case 26:
              (Qu(e),
                e.flags & qu &&
                  null !== e.memoizedState &&
                  (function (e, t, n) {
                    if (null === Bd) throw Error(l(475));
                    var r = Bd;
                    if (
                      "stylesheet" === t.type &&
                      ("string" !== typeof n.media ||
                        !1 !== matchMedia(n.media).matches) &&
                      0 === (4 & t.state.loading)
                    ) {
                      if (null === t.instance) {
                        var a = Pd(n.href),
                          o = e.querySelector(Td(a));
                        if (o)
                          return (
                            null !== (e = o._p) &&
                              "object" === typeof e &&
                              "function" === typeof e.then &&
                              (r.count++, (r = Vd.bind(r)), e.then(r, r)),
                            (t.state.loading |= 4),
                            (t.instance = o),
                            void We(o)
                          );
                        ((o = e.ownerDocument || e),
                          (n = Od(n)),
                          (a = xd.get(a)) && Fd(n, a),
                          We((o = o.createElement("link"))));
                        var i = o;
                        ((i._p = new Promise(function (e, t) {
                          ((i.onload = e), (i.onerror = t));
                        })),
                          ed(o, "link", n),
                          (t.instance = o));
                      }
                      (null === r.stylesheets && (r.stylesheets = new Map()),
                        r.stylesheets.set(t, e),
                        (e = t.state.preload) &&
                          0 === (3 & t.state.loading) &&
                          (r.count++,
                          (t = Vd.bind(r)),
                          e.addEventListener("load", t),
                          e.addEventListener("error", t)));
                    }
                  })(Lu, e.memoizedState, e.memoizedProps));
              break;
            case 5:
            default:
              Qu(e);
              break;
            case 3:
            case 4:
              var t = Lu;
              ((Lu = _d(e.stateNode.containerInfo)), Qu(e), (Lu = t));
              break;
            case 22:
              null === e.memoizedState &&
                (null !== (t = e.alternate) && null !== t.memoizedState
                  ? ((t = qu), (qu = 16777216), Qu(e), (qu = t))
                  : Qu(e));
          }
        }
        function Xu(e) {
          var t = e.alternate;
          if (null !== t && null !== (e = t.child)) {
            t.child = null;
            do {
              ((t = e.sibling), (e.sibling = null), (e = t));
            } while (null !== e);
          }
        }
        function Yu(e) {
          var t = e.deletions;
          if (0 !== (16 & e.flags)) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                ((Su = r), Zu(r, e));
              }
            Xu(e);
          }
          if (10256 & e.subtreeFlags)
            for (e = e.child; null !== e; ) (Gu(e), (e = e.sibling));
        }
        function Gu(e) {
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              (Yu(e), 2048 & e.flags && iu(9, e, e.return));
              break;
            case 3:
            case 12:
            default:
              Yu(e);
              break;
            case 22:
              var t = e.stateNode;
              null !== e.memoizedState &&
              2 & t._visibility &&
              (null === e.return || 13 !== e.return.tag)
                ? ((t._visibility &= -3), Ju(e))
                : Yu(e);
          }
        }
        function Ju(e) {
          var t = e.deletions;
          if (0 !== (16 & e.flags)) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                ((Su = r), Zu(r, e));
              }
            Xu(e);
          }
          for (e = e.child; null !== e; ) {
            switch ((t = e).tag) {
              case 0:
              case 11:
              case 15:
                (iu(8, t, t.return), Ju(t));
                break;
              case 22:
                2 & (n = t.stateNode)._visibility &&
                  ((n._visibility &= -3), Ju(t));
                break;
              default:
                Ju(t);
            }
            e = e.sibling;
          }
        }
        function Zu(e, t) {
          for (; null !== Su; ) {
            var n = Su;
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                iu(8, n, t);
                break;
              case 23:
              case 22:
                if (
                  null !== n.memoizedState &&
                  null !== n.memoizedState.cachePool
                ) {
                  var r = n.memoizedState.cachePool.pool;
                  null != r && r.refCount++;
                }
                break;
              case 24:
                Ra(n.memoizedState.cache);
            }
            if (null !== (r = n.child)) ((r.return = n), (Su = r));
            else
              e: for (n = e; null !== Su; ) {
                var a = (r = Su).sibling,
                  o = r.return;
                if ((Eu(r), r === n)) {
                  Su = null;
                  break e;
                }
                if (null !== a) {
                  ((a.return = o), (Su = a));
                  break e;
                }
                Su = o;
              }
          }
        }
        var es = {
            getCacheForType: function (e) {
              var t = Ca(za),
                n = t.data.get(e);
              return (void 0 === n && ((n = e()), t.data.set(e, n)), n);
            },
          },
          ts = "function" === typeof WeakMap ? WeakMap : Map,
          ns = 0,
          rs = null,
          as = null,
          os = 0,
          ls = 0,
          is = null,
          us = !1,
          ss = !1,
          cs = !1,
          ds = 0,
          fs = 0,
          ps = 0,
          ms = 0,
          hs = 0,
          gs = 0,
          ys = 0,
          vs = null,
          bs = null,
          ws = !1,
          ks = 0,
          xs = 1 / 0,
          Ss = null,
          _s = null,
          Es = 0,
          Cs = null,
          Ns = null,
          js = 0,
          Ps = 0,
          Ts = null,
          Os = null,
          zs = 0,
          Ls = null;
        function Rs() {
          if (0 !== (2 & ns) && 0 !== os) return os & -os;
          if (null !== R.T) {
            return 0 !== Ma ? Ma : Pc();
          }
          return Te();
        }
        function As() {
          0 === gs && (gs = 0 === (536870912 & os) || oa ? xe() : 536870912);
          var e = ai.current;
          return (null !== e && (e.flags |= 32), gs);
        }
        function Fs(e, t, n) {
          (((e !== rs || (2 !== ls && 9 !== ls)) &&
            null === e.cancelPendingCommit) ||
            ($s(e, 0), Us(e, os, gs, !1)),
            Ee(e, n),
            (0 !== (2 & ns) && e === rs) ||
              (e === rs &&
                (0 === (2 & ns) && (ms |= n), 4 === fs && Us(e, os, gs, !1)),
              xc(e)));
        }
        function Ms(e, t, n) {
          if (0 !== (6 & ns)) throw Error(l(327));
          for (
            var r =
                (!n && 0 === (124 & t) && 0 === (t & e.expiredLanes)) ||
                we(e, t),
              a = r
                ? (function (e, t) {
                    var n = ns;
                    ns |= 2;
                    var r = Ws(),
                      a = qs();
                    rs !== e || os !== t
                      ? ((Ss = null), (xs = te() + 500), $s(e, t))
                      : (ss = we(e, t));
                    e: for (;;)
                      try {
                        if (0 !== ls && null !== as) {
                          t = as;
                          var o = is;
                          t: switch (ls) {
                            case 1:
                              ((ls = 0), (is = null), Zs(e, t, o, 1));
                              break;
                            case 2:
                            case 9:
                              if (Xa(o)) {
                                ((ls = 0), (is = null), Js(t));
                                break;
                              }
                              ((t = function () {
                                ((2 !== ls && 9 !== ls) || rs !== e || (ls = 7),
                                  xc(e));
                              }),
                                o.then(t, t));
                              break e;
                            case 3:
                              ls = 7;
                              break e;
                            case 4:
                              ls = 5;
                              break e;
                            case 7:
                              Xa(o)
                                ? ((ls = 0), (is = null), Js(t))
                                : ((ls = 0), (is = null), Zs(e, t, o, 7));
                              break;
                            case 5:
                              var i = null;
                              switch (as.tag) {
                                case 26:
                                  i = as.memoizedState;
                                case 5:
                                case 27:
                                  var u = as;
                                  if (!i || Hd(i)) {
                                    ((ls = 0), (is = null));
                                    var s = u.sibling;
                                    if (null !== s) as = s;
                                    else {
                                      var c = u.return;
                                      null !== c
                                        ? ((as = c), ec(c))
                                        : (as = null);
                                    }
                                    break t;
                                  }
                              }
                              ((ls = 0), (is = null), Zs(e, t, o, 5));
                              break;
                            case 6:
                              ((ls = 0), (is = null), Zs(e, t, o, 6));
                              break;
                            case 8:
                              (Bs(), (fs = 6));
                              break e;
                            default:
                              throw Error(l(462));
                          }
                        }
                        Ys();
                        break;
                      } catch (d) {
                        Vs(e, d);
                      }
                    return (
                      (va = ya = null),
                      (R.H = r),
                      (R.A = a),
                      (ns = n),
                      null !== as ? 0 : ((rs = null), (os = 0), jr(), fs)
                    );
                  })(e, t)
                : Ks(e, t, !0),
              o = r;
            ;

          ) {
            if (0 === a) {
              ss && !r && Us(e, t, 0, !1);
              break;
            }
            if (((n = e.current.alternate), !o || Is(n))) {
              if (2 === a) {
                if (((o = t), e.errorRecoveryDisabledLanes & o)) var i = 0;
                else
                  i =
                    0 !== (i = -536870913 & e.pendingLanes)
                      ? i
                      : 536870912 & i
                        ? 536870912
                        : 0;
                if (0 !== i) {
                  t = i;
                  e: {
                    var u = e;
                    a = vs;
                    var s = u.current.memoizedState.isDehydrated;
                    if (
                      (s && ($s(u, i).flags |= 256), 2 !== (i = Ks(u, i, !1)))
                    ) {
                      if (cs && !s) {
                        ((u.errorRecoveryDisabledLanes |= o),
                          (ms |= o),
                          (a = 4));
                        break e;
                      }
                      ((o = bs),
                        (bs = a),
                        null !== o &&
                          (null === bs ? (bs = o) : bs.push.apply(bs, o)));
                    }
                    a = i;
                  }
                  if (((o = !1), 2 !== a)) continue;
                }
              }
              if (1 === a) {
                ($s(e, 0), Us(e, t, 0, !0));
                break;
              }
              e: {
                switch (((r = e), (o = a))) {
                  case 0:
                  case 1:
                    throw Error(l(345));
                  case 4:
                    if ((4194048 & t) !== t) break;
                  case 6:
                    Us(r, t, gs, !us);
                    break e;
                  case 2:
                    bs = null;
                    break;
                  case 3:
                  case 5:
                    break;
                  default:
                    throw Error(l(329));
                }
                if ((62914560 & t) === t && 10 < (a = ks + 300 - te())) {
                  if ((Us(r, t, gs, !us), 0 !== be(r, 0, !0))) break e;
                  r.timeoutHandle = ud(
                    Ds.bind(
                      null,
                      r,
                      n,
                      bs,
                      Ss,
                      ws,
                      t,
                      gs,
                      ms,
                      ys,
                      us,
                      o,
                      2,
                      -0,
                      0,
                    ),
                    a,
                  );
                } else Ds(r, n, bs, Ss, ws, t, gs, ms, ys, us, o, 0, -0, 0);
              }
              break;
            }
            ((a = Ks(e, t, !1)), (o = !1));
          }
          xc(e);
        }
        function Ds(e, t, n, r, a, o, i, u, s, c, d, f, p, m) {
          if (
            ((e.timeoutHandle = -1),
            (8192 & (f = t.subtreeFlags) || 16785408 === (16785408 & f)) &&
              ((Bd = { stylesheets: null, count: 0, unsuspend: $d }),
              Ku(t),
              null !==
                (f = (function () {
                  if (null === Bd) throw Error(l(475));
                  var e = Bd;
                  return (
                    e.stylesheets && 0 === e.count && qd(e, e.stylesheets),
                    0 < e.count
                      ? function (t) {
                          var n = setTimeout(function () {
                            if (
                              (e.stylesheets && qd(e, e.stylesheets),
                              e.unsuspend)
                            ) {
                              var t = e.unsuspend;
                              ((e.unsuspend = null), t());
                            }
                          }, 6e4);
                          return (
                            (e.unsuspend = t),
                            function () {
                              ((e.unsuspend = null), clearTimeout(n));
                            }
                          );
                        }
                      : null
                  );
                })())))
          )
            return (
              (e.cancelPendingCommit = f(
                nc.bind(null, e, t, o, n, r, a, i, u, s, d, 1, p, m),
              )),
              void Us(e, o, i, !c)
            );
          nc(e, t, o, n, r, a, i, u, s);
        }
        function Is(e) {
          for (var t = e; ; ) {
            var n = t.tag;
            if (
              (0 === n || 11 === n || 15 === n) &&
              16384 & t.flags &&
              null !== (n = t.updateQueue) &&
              null !== (n = n.stores)
            )
              for (var r = 0; r < n.length; r++) {
                var a = n[r],
                  o = a.getSnapshot;
                a = a.value;
                try {
                  if (!Xn(o(), a)) return !1;
                } catch (l) {
                  return !1;
                }
              }
            if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
              ((n.return = t), (t = n));
            else {
              if (t === e) break;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) return !0;
                t = t.return;
              }
              ((t.sibling.return = t.return), (t = t.sibling));
            }
          }
          return !0;
        }
        function Us(e, t, n, r) {
          ((t &= ~hs),
            (t &= ~ms),
            (e.suspendedLanes |= t),
            (e.pingedLanes &= ~t),
            r && (e.warmLanes |= t),
            (r = e.expirationTimes));
          for (var a = t; 0 < a; ) {
            var o = 31 - pe(a),
              l = 1 << o;
            ((r[o] = -1), (a &= ~l));
          }
          0 !== n && Ce(e, n, t);
        }
        function Hs() {
          return 0 !== (6 & ns) || (Sc(0, !1), !1);
        }
        function Bs() {
          if (null !== as) {
            if (0 === ls) var e = as.return;
            else
              ((va = ya = null), Do((e = as)), (Xl = null), (Yl = 0), (e = as));
            for (; null !== e; ) (ou(e.alternate, e), (e = e.return));
            as = null;
          }
        }
        function $s(e, t) {
          var n = e.timeoutHandle;
          (-1 !== n && ((e.timeoutHandle = -1), sd(n)),
            null !== (n = e.cancelPendingCommit) &&
              ((e.cancelPendingCommit = null), n()),
            Bs(),
            (rs = e),
            (as = n = Dr(e.current, null)),
            (os = t),
            (ls = 0),
            (is = null),
            (us = !1),
            (ss = we(e, t)),
            (cs = !1),
            (ys = gs = hs = ms = ps = fs = 0),
            (bs = vs = null),
            (ws = !1),
            0 !== (8 & t) && (t |= 32 & t));
          var r = e.entangledLanes;
          if (0 !== r)
            for (e = e.entanglements, r &= t; 0 < r; ) {
              var a = 31 - pe(r),
                o = 1 << a;
              ((t |= e[a]), (r &= ~o));
            }
          return ((ds = t), jr(), n);
        }
        function Vs(e, t) {
          ((wo = null),
            (R.H = Wl),
            t === Wa || t === Qa
              ? ((t = Za()), (ls = 3))
              : t === qa
                ? ((t = Za()), (ls = 4))
                : (ls =
                    t === Ci
                      ? 8
                      : null !== t &&
                          "object" === typeof t &&
                          "function" === typeof t.then
                        ? 6
                        : 1),
            (is = t),
            null === as && ((fs = 1), ki(e, _r(t, e.current))));
        }
        function Ws() {
          var e = R.H;
          return ((R.H = Wl), null === e ? Wl : e);
        }
        function qs() {
          var e = R.A;
          return ((R.A = es), e);
        }
        function Qs() {
          ((fs = 4),
            us || ((4194048 & os) !== os && null !== ai.current) || (ss = !0),
            (0 === (134217727 & ps) && 0 === (134217727 & ms)) ||
              null === rs ||
              Us(rs, os, gs, !1));
        }
        function Ks(e, t, n) {
          var r = ns;
          ns |= 2;
          var a = Ws(),
            o = qs();
          ((rs === e && os === t) || ((Ss = null), $s(e, t)), (t = !1));
          var l = fs;
          e: for (;;)
            try {
              if (0 !== ls && null !== as) {
                var i = as,
                  u = is;
                switch (ls) {
                  case 8:
                    (Bs(), (l = 6));
                    break e;
                  case 3:
                  case 2:
                  case 9:
                  case 6:
                    null === ai.current && (t = !0);
                    var s = ls;
                    if (((ls = 0), (is = null), Zs(e, i, u, s), n && ss)) {
                      l = 0;
                      break e;
                    }
                    break;
                  default:
                    ((s = ls), (ls = 0), (is = null), Zs(e, i, u, s));
                }
              }
              (Xs(), (l = fs));
              break;
            } catch (c) {
              Vs(e, c);
            }
          return (
            t && e.shellSuspendCounter++,
            (va = ya = null),
            (ns = r),
            (R.H = a),
            (R.A = o),
            null === as && ((rs = null), (os = 0), jr()),
            l
          );
        }
        function Xs() {
          for (; null !== as; ) Gs(as);
        }
        function Ys() {
          for (; null !== as && !Z(); ) Gs(as);
        }
        function Gs(e) {
          var t = Gi(e.alternate, e, ds);
          ((e.memoizedProps = e.pendingProps), null === t ? ec(e) : (as = t));
        }
        function Js(e) {
          var t = e,
            n = t.alternate;
          switch (t.tag) {
            case 15:
            case 0:
              t = Fi(n, t, t.pendingProps, t.type, void 0, os);
              break;
            case 11:
              t = Fi(n, t, t.pendingProps, t.type.render, t.ref, os);
              break;
            case 5:
              Do(t);
            default:
              (ou(n, t), (t = Gi(n, (t = as = Ir(t, ds)), ds)));
          }
          ((e.memoizedProps = e.pendingProps), null === t ? ec(e) : (as = t));
        }
        function Zs(e, t, n, r) {
          ((va = ya = null), Do(t), (Xl = null), (Yl = 0));
          var a = t.return;
          try {
            if (
              (function (e, t, n, r, a) {
                if (
                  ((n.flags |= 32768),
                  null !== r &&
                    "object" === typeof r &&
                    "function" === typeof r.then)
                ) {
                  if (
                    (null !== (t = n.alternate) && Sa(t, n, a, !0),
                    null !== (n = ai.current))
                  ) {
                    switch (n.tag) {
                      case 13:
                        return (
                          null === oi
                            ? Qs()
                            : null === n.alternate && 0 === fs && (fs = 3),
                          (n.flags &= -257),
                          (n.flags |= 65536),
                          (n.lanes = a),
                          r === Ka
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? (n.updateQueue = new Set([r]))
                                : t.add(r),
                              dc(e, r, a)),
                          !1
                        );
                      case 22:
                        return (
                          (n.flags |= 65536),
                          r === Ka
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? ((t = {
                                    transitions: null,
                                    markerInstances: null,
                                    retryQueue: new Set([r]),
                                  }),
                                  (n.updateQueue = t))
                                : null === (n = t.retryQueue)
                                  ? (t.retryQueue = new Set([r]))
                                  : n.add(r),
                              dc(e, r, a)),
                          !1
                        );
                    }
                    throw Error(l(435, n.tag));
                  }
                  return (dc(e, r, a), Qs(), !1);
                }
                if (oa)
                  return (
                    null !== (t = ai.current)
                      ? (0 === (65536 & t.flags) && (t.flags |= 256),
                        (t.flags |= 65536),
                        (t.lanes = a),
                        r !== ua &&
                          ha(_r((e = Error(l(422), { cause: r })), n)))
                      : (r !== ua &&
                          ha(_r((t = Error(l(423), { cause: r })), n)),
                        ((e = e.current.alternate).flags |= 65536),
                        (a &= -a),
                        (e.lanes |= a),
                        (r = _r(r, n)),
                        io(e, (a = Si(e.stateNode, r, a))),
                        4 !== fs && (fs = 2)),
                    !1
                  );
                var o = Error(l(520), { cause: r });
                if (
                  ((o = _r(o, n)),
                  null === vs ? (vs = [o]) : vs.push(o),
                  4 !== fs && (fs = 2),
                  null === t)
                )
                  return !0;
                ((r = _r(r, n)), (n = t));
                do {
                  switch (n.tag) {
                    case 3:
                      return (
                        (n.flags |= 65536),
                        (e = a & -a),
                        (n.lanes |= e),
                        io(n, (e = Si(n.stateNode, r, e))),
                        !1
                      );
                    case 1:
                      if (
                        ((t = n.type),
                        (o = n.stateNode),
                        0 === (128 & n.flags) &&
                          ("function" === typeof t.getDerivedStateFromError ||
                            (null !== o &&
                              "function" === typeof o.componentDidCatch &&
                              (null === _s || !_s.has(o)))))
                      )
                        return (
                          (n.flags |= 65536),
                          (a &= -a),
                          (n.lanes |= a),
                          Ei((a = _i(a)), e, n, r),
                          io(n, a),
                          !1
                        );
                  }
                  n = n.return;
                } while (null !== n);
                return !1;
              })(e, a, t, n, os)
            )
              return ((fs = 1), ki(e, _r(n, e.current)), void (as = null));
          } catch (o) {
            if (null !== a) throw ((as = a), o);
            return ((fs = 1), ki(e, _r(n, e.current)), void (as = null));
          }
          32768 & t.flags
            ? (oa || 1 === r
                ? (e = !0)
                : ss || 0 !== (536870912 & os)
                  ? (e = !1)
                  : ((us = e = !0),
                    (2 === r || 9 === r || 3 === r || 6 === r) &&
                      null !== (r = ai.current) &&
                      13 === r.tag &&
                      (r.flags |= 16384)),
              tc(t, e))
            : ec(t);
        }
        function ec(e) {
          var t = e;
          do {
            if (0 !== (32768 & t.flags)) return void tc(t, us);
            e = t.return;
            var n = ru(t.alternate, t, ds);
            if (null !== n) return void (as = n);
            if (null !== (t = t.sibling)) return void (as = t);
            as = t = e;
          } while (null !== t);
          0 === fs && (fs = 5);
        }
        function tc(e, t) {
          do {
            var n = au(e.alternate, e);
            if (null !== n) return ((n.flags &= 32767), void (as = n));
            if (
              (null !== (n = e.return) &&
                ((n.flags |= 32768),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
              !t && null !== (e = e.sibling))
            )
              return void (as = e);
            as = e = n;
          } while (null !== e);
          ((fs = 6), (as = null));
        }
        function nc(e, t, n, r, a, o, i, u, s) {
          e.cancelPendingCommit = null;
          do {
            ic();
          } while (0 !== Es);
          if (0 !== (6 & ns)) throw Error(l(327));
          if (null !== t) {
            if (t === e.current) throw Error(l(177));
            if (
              ((o = t.lanes | t.childLanes),
              (function (e, t, n, r, a, o) {
                var l = e.pendingLanes;
                ((e.pendingLanes = n),
                  (e.suspendedLanes = 0),
                  (e.pingedLanes = 0),
                  (e.warmLanes = 0),
                  (e.expiredLanes &= n),
                  (e.entangledLanes &= n),
                  (e.errorRecoveryDisabledLanes &= n),
                  (e.shellSuspendCounter = 0));
                var i = e.entanglements,
                  u = e.expirationTimes,
                  s = e.hiddenUpdates;
                for (n = l & ~n; 0 < n; ) {
                  var c = 31 - pe(n),
                    d = 1 << c;
                  ((i[c] = 0), (u[c] = -1));
                  var f = s[c];
                  if (null !== f)
                    for (s[c] = null, c = 0; c < f.length; c++) {
                      var p = f[c];
                      null !== p && (p.lane &= -536870913);
                    }
                  n &= ~d;
                }
                (0 !== r && Ce(e, r, 0),
                  0 !== o &&
                    0 === a &&
                    0 !== e.tag &&
                    (e.suspendedLanes |= o & ~(l & ~t)));
              })(e, n, (o |= Nr), i, u, s),
              e === rs && ((as = rs = null), (os = 0)),
              (Ns = t),
              (Cs = e),
              (js = n),
              (Ps = o),
              (Ts = a),
              (Os = r),
              0 !== (10256 & t.subtreeFlags) || 0 !== (10256 & t.flags)
                ? ((e.callbackNode = null),
                  (e.callbackPriority = 0),
                  G(oe, function () {
                    return (uc(), null);
                  }))
                : ((e.callbackNode = null), (e.callbackPriority = 0)),
              (r = 0 !== (13878 & t.flags)),
              0 !== (13878 & t.subtreeFlags) || r)
            ) {
              ((r = R.T),
                (R.T = null),
                (a = A.p),
                (A.p = 2),
                (i = ns),
                (ns |= 4));
              try {
                !(function (e, t) {
                  if (((e = e.containerInfo), (td = nf), tr((e = er(e))))) {
                    if ("selectionStart" in e)
                      var n = { start: e.selectionStart, end: e.selectionEnd };
                    else
                      e: {
                        var r =
                          (n =
                            ((n = e.ownerDocument) && n.defaultView) || window)
                            .getSelection && n.getSelection();
                        if (r && 0 !== r.rangeCount) {
                          n = r.anchorNode;
                          var a = r.anchorOffset,
                            o = r.focusNode;
                          r = r.focusOffset;
                          try {
                            (n.nodeType, o.nodeType);
                          } catch (g) {
                            n = null;
                            break e;
                          }
                          var i = 0,
                            u = -1,
                            s = -1,
                            c = 0,
                            d = 0,
                            f = e,
                            p = null;
                          t: for (;;) {
                            for (
                              var m;
                              f !== n ||
                                (0 !== a && 3 !== f.nodeType) ||
                                (u = i + a),
                                f !== o ||
                                  (0 !== r && 3 !== f.nodeType) ||
                                  (s = i + r),
                                3 === f.nodeType && (i += f.nodeValue.length),
                                null !== (m = f.firstChild);

                            )
                              ((p = f), (f = m));
                            for (;;) {
                              if (f === e) break t;
                              if (
                                (p === n && ++c === a && (u = i),
                                p === o && ++d === r && (s = i),
                                null !== (m = f.nextSibling))
                              )
                                break;
                              p = (f = p).parentNode;
                            }
                            f = m;
                          }
                          n =
                            -1 === u || -1 === s ? null : { start: u, end: s };
                        } else n = null;
                      }
                    n = n || { start: 0, end: 0 };
                  } else n = null;
                  for (
                    nd = { focusedElem: e, selectionRange: n }, nf = !1, Su = t;
                    null !== Su;

                  )
                    if (
                      ((e = (t = Su).child),
                      0 !== (1024 & t.subtreeFlags) && null !== e)
                    )
                      ((e.return = t), (Su = e));
                    else
                      for (; null !== Su; ) {
                        switch (
                          ((o = (t = Su).alternate), (e = t.flags), t.tag)
                        ) {
                          case 0:
                          case 11:
                          case 15:
                          case 5:
                          case 26:
                          case 27:
                          case 6:
                          case 4:
                          case 17:
                            break;
                          case 1:
                            if (0 !== (1024 & e) && null !== o) {
                              ((e = void 0),
                                (n = t),
                                (a = o.memoizedProps),
                                (o = o.memoizedState),
                                (r = n.stateNode));
                              try {
                                var h = gi(n.type, a, (n.elementType, n.type));
                                ((e = r.getSnapshotBeforeUpdate(h, o)),
                                  (r.__reactInternalSnapshotBeforeUpdate = e));
                              } catch (y) {
                                cc(n, n.return, y);
                              }
                            }
                            break;
                          case 3:
                            if (0 !== (1024 & e))
                              if (
                                9 ===
                                (n = (e = t.stateNode.containerInfo).nodeType)
                              )
                                hd(e);
                              else if (1 === n)
                                switch (e.nodeName) {
                                  case "HEAD":
                                  case "HTML":
                                  case "BODY":
                                    hd(e);
                                    break;
                                  default:
                                    e.textContent = "";
                                }
                            break;
                          default:
                            if (0 !== (1024 & e)) throw Error(l(163));
                        }
                        if (null !== (e = t.sibling)) {
                          ((e.return = t.return), (Su = e));
                          break;
                        }
                        Su = t.return;
                      }
                })(e, t);
              } finally {
                ((ns = i), (A.p = a), (R.T = r));
              }
            }
            ((Es = 1), rc(), ac(), oc());
          }
        }
        function rc() {
          if (1 === Es) {
            Es = 0;
            var e = Cs,
              t = Ns,
              n = 0 !== (13878 & t.flags);
            if (0 !== (13878 & t.subtreeFlags) || n) {
              ((n = R.T), (R.T = null));
              var r = A.p;
              A.p = 2;
              var a = ns;
              ns |= 4;
              try {
                Ru(t, e);
                var o = nd,
                  l = er(e.containerInfo),
                  i = o.focusedElem,
                  u = o.selectionRange;
                if (
                  l !== i &&
                  i &&
                  i.ownerDocument &&
                  Zn(i.ownerDocument.documentElement, i)
                ) {
                  if (null !== u && tr(i)) {
                    var s = u.start,
                      c = u.end;
                    if ((void 0 === c && (c = s), "selectionStart" in i))
                      ((i.selectionStart = s),
                        (i.selectionEnd = Math.min(c, i.value.length)));
                    else {
                      var d = i.ownerDocument || document,
                        f = (d && d.defaultView) || window;
                      if (f.getSelection) {
                        var p = f.getSelection(),
                          m = i.textContent.length,
                          h = Math.min(u.start, m),
                          g = void 0 === u.end ? h : Math.min(u.end, m);
                        !p.extend && h > g && ((l = g), (g = h), (h = l));
                        var y = Jn(i, h),
                          v = Jn(i, g);
                        if (
                          y &&
                          v &&
                          (1 !== p.rangeCount ||
                            p.anchorNode !== y.node ||
                            p.anchorOffset !== y.offset ||
                            p.focusNode !== v.node ||
                            p.focusOffset !== v.offset)
                        ) {
                          var b = d.createRange();
                          (b.setStart(y.node, y.offset),
                            p.removeAllRanges(),
                            h > g
                              ? (p.addRange(b), p.extend(v.node, v.offset))
                              : (b.setEnd(v.node, v.offset), p.addRange(b)));
                        }
                      }
                    }
                  }
                  for (d = [], p = i; (p = p.parentNode); )
                    1 === p.nodeType &&
                      d.push({
                        element: p,
                        left: p.scrollLeft,
                        top: p.scrollTop,
                      });
                  for (
                    "function" === typeof i.focus && i.focus(), i = 0;
                    i < d.length;
                    i++
                  ) {
                    var w = d[i];
                    ((w.element.scrollLeft = w.left),
                      (w.element.scrollTop = w.top));
                  }
                }
                ((nf = !!td), (nd = td = null));
              } finally {
                ((ns = a), (A.p = r), (R.T = n));
              }
            }
            ((e.current = t), (Es = 2));
          }
        }
        function ac() {
          if (2 === Es) {
            Es = 0;
            var e = Cs,
              t = Ns,
              n = 0 !== (8772 & t.flags);
            if (0 !== (8772 & t.subtreeFlags) || n) {
              ((n = R.T), (R.T = null));
              var r = A.p;
              A.p = 2;
              var a = ns;
              ns |= 4;
              try {
                _u(e, t.alternate, t);
              } finally {
                ((ns = a), (A.p = r), (R.T = n));
              }
            }
            Es = 3;
          }
        }
        function oc() {
          if (4 === Es || 3 === Es) {
            ((Es = 0), ee());
            var e = Cs,
              t = Ns,
              n = js,
              r = Os;
            0 !== (10256 & t.subtreeFlags) || 0 !== (10256 & t.flags)
              ? (Es = 5)
              : ((Es = 0), (Ns = Cs = null), lc(e, e.pendingLanes));
            var a = e.pendingLanes;
            if (
              (0 === a && (_s = null),
              Pe(n),
              (t = t.stateNode),
              de && "function" === typeof de.onCommitFiberRoot)
            )
              try {
                de.onCommitFiberRoot(
                  ce,
                  t,
                  void 0,
                  128 === (128 & t.current.flags),
                );
              } catch (u) {}
            if (null !== r) {
              ((t = R.T), (a = A.p), (A.p = 2), (R.T = null));
              try {
                for (var o = e.onRecoverableError, l = 0; l < r.length; l++) {
                  var i = r[l];
                  o(i.value, { componentStack: i.stack });
                }
              } finally {
                ((R.T = t), (A.p = a));
              }
            }
            (0 !== (3 & js) && ic(),
              xc(e),
              (a = e.pendingLanes),
              0 !== (4194090 & n) && 0 !== (42 & a)
                ? e === Ls
                  ? zs++
                  : ((zs = 0), (Ls = e))
                : (zs = 0),
              Sc(0, !1));
          }
        }
        function lc(e, t) {
          0 === (e.pooledCacheLanes &= t) &&
            null != (t = e.pooledCache) &&
            ((e.pooledCache = null), Ra(t));
        }
        function ic(e) {
          return (rc(), ac(), oc(), uc());
        }
        function uc() {
          if (5 !== Es) return !1;
          var e = Cs,
            t = Ps;
          Ps = 0;
          var n = Pe(js),
            r = R.T,
            a = A.p;
          try {
            ((A.p = 32 > n ? 32 : n), (R.T = null), (n = Ts), (Ts = null));
            var o = Cs,
              i = js;
            if (((Es = 0), (Ns = Cs = null), (js = 0), 0 !== (6 & ns)))
              throw Error(l(331));
            var u = ns;
            if (
              ((ns |= 4),
              Gu(o.current),
              $u(o, o.current, i, n),
              (ns = u),
              Sc(0, !1),
              de && "function" === typeof de.onPostCommitFiberRoot)
            )
              try {
                de.onPostCommitFiberRoot(ce, o);
              } catch (s) {}
            return !0;
          } finally {
            ((A.p = a), (R.T = r), lc(e, t));
          }
        }
        function sc(e, t, n) {
          ((t = _r(n, t)),
            null !== (e = oo(e, (t = Si(e.stateNode, t, 2)), 2)) &&
              (Ee(e, 2), xc(e)));
        }
        function cc(e, t, n) {
          if (3 === e.tag) sc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                sc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === _s || !_s.has(r)))
                ) {
                  ((e = _r(n, e)),
                    null !== (r = oo(t, (n = _i(2)), 2)) &&
                      (Ei(n, r, t, e), Ee(r, 2), xc(r)));
                  break;
                }
              }
              t = t.return;
            }
        }
        function dc(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new ts();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) ||
            ((cs = !0), a.add(n), (e = fc.bind(null, e, t, n)), t.then(e, e));
        }
        function fc(e, t, n) {
          var r = e.pingCache;
          (null !== r && r.delete(t),
            (e.pingedLanes |= e.suspendedLanes & n),
            (e.warmLanes &= ~n),
            rs === e &&
              (os & n) === n &&
              (4 === fs ||
              (3 === fs && (62914560 & os) === os && 300 > te() - ks)
                ? 0 === (2 & ns) && $s(e, 0)
                : (hs |= n),
              ys === os && (ys = 0)),
            xc(e));
        }
        function pc(e, t) {
          (0 === t && (t = Se()), null !== (e = Or(e, t)) && (Ee(e, t), xc(e)));
        }
        function mc(e) {
          var t = e.memoizedState,
            n = 0;
          (null !== t && (n = t.retryLane), pc(e, n));
        }
        function hc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            case 22:
              r = e.stateNode._retryCache;
              break;
            default:
              throw Error(l(314));
          }
          (null !== r && r.delete(t), pc(e, n));
        }
        var gc = null,
          yc = null,
          vc = !1,
          bc = !1,
          wc = !1,
          kc = 0;
        function xc(e) {
          (e !== yc &&
            null === e.next &&
            (null === yc ? (gc = yc = e) : (yc = yc.next = e)),
            (bc = !0),
            vc ||
              ((vc = !0),
              dd(function () {
                0 !== (6 & ns) ? G(re, _c) : Ec();
              })));
        }
        function Sc(e, t) {
          if (!wc && bc) {
            wc = !0;
            do {
              for (var n = !1, r = gc; null !== r; ) {
                if (!t)
                  if (0 !== e) {
                    var a = r.pendingLanes;
                    if (0 === a) var o = 0;
                    else {
                      var l = r.suspendedLanes,
                        i = r.pingedLanes;
                      ((o = (1 << (31 - pe(42 | e) + 1)) - 1),
                        (o =
                          201326741 & (o &= a & ~(l & ~i))
                            ? (201326741 & o) | 1
                            : o
                              ? 2 | o
                              : 0));
                    }
                    0 !== o && ((n = !0), jc(r, o));
                  } else
                    ((o = os),
                      0 ===
                        (3 &
                          (o = be(
                            r,
                            r === rs ? o : 0,
                            null !== r.cancelPendingCommit ||
                              -1 !== r.timeoutHandle,
                          ))) ||
                        we(r, o) ||
                        ((n = !0), jc(r, o)));
                r = r.next;
              }
            } while (n);
            wc = !1;
          }
        }
        function _c() {
          Ec();
        }
        function Ec() {
          bc = vc = !1;
          var e = 0;
          0 !== kc &&
            ((function () {
              var e = window.event;
              if (e && "popstate" === e.type) return e !== id && ((id = e), !0);
              return ((id = null), !1);
            })() && (e = kc),
            (kc = 0));
          for (var t = te(), n = null, r = gc; null !== r; ) {
            var a = r.next,
              o = Cc(r, t);
            (0 === o
              ? ((r.next = null),
                null === n ? (gc = a) : (n.next = a),
                null === a && (yc = n))
              : ((n = r), (0 !== e || 0 !== (3 & o)) && (bc = !0)),
              (r = a));
          }
          Sc(e, !1);
        }
        function Cc(e, t) {
          for (
            var n = e.suspendedLanes,
              r = e.pingedLanes,
              a = e.expirationTimes,
              o = -62914561 & e.pendingLanes;
            0 < o;

          ) {
            var l = 31 - pe(o),
              i = 1 << l,
              u = a[l];
            (-1 === u
              ? (0 !== (i & n) && 0 === (i & r)) || (a[l] = ke(i, t))
              : u <= t && (e.expiredLanes |= i),
              (o &= ~i));
          }
          if (
            ((n = os),
            (n = be(
              e,
              e === (t = rs) ? n : 0,
              null !== e.cancelPendingCommit || -1 !== e.timeoutHandle,
            )),
            (r = e.callbackNode),
            0 === n ||
              (e === t && (2 === ls || 9 === ls)) ||
              null !== e.cancelPendingCommit)
          )
            return (
              null !== r && null !== r && J(r),
              (e.callbackNode = null),
              (e.callbackPriority = 0)
            );
          if (0 === (3 & n) || we(e, n)) {
            if ((t = n & -n) === e.callbackPriority) return t;
            switch ((null !== r && J(r), Pe(n))) {
              case 2:
              case 8:
                n = ae;
                break;
              case 32:
              default:
                n = oe;
                break;
              case 268435456:
                n = ie;
            }
            return (
              (r = Nc.bind(null, e)),
              (n = G(n, r)),
              (e.callbackPriority = t),
              (e.callbackNode = n),
              t
            );
          }
          return (
            null !== r && null !== r && J(r),
            (e.callbackPriority = 2),
            (e.callbackNode = null),
            2
          );
        }
        function Nc(e, t) {
          if (0 !== Es && 5 !== Es)
            return ((e.callbackNode = null), (e.callbackPriority = 0), null);
          var n = e.callbackNode;
          if (ic() && e.callbackNode !== n) return null;
          var r = os;
          return 0 ===
            (r = be(
              e,
              e === rs ? r : 0,
              null !== e.cancelPendingCommit || -1 !== e.timeoutHandle,
            ))
            ? null
            : (Ms(e, r, t),
              Cc(e, te()),
              null != e.callbackNode && e.callbackNode === n
                ? Nc.bind(null, e)
                : null);
        }
        function jc(e, t) {
          if (ic()) return null;
          Ms(e, t, !0);
        }
        function Pc() {
          return (0 === kc && (kc = xe()), kc);
        }
        function Tc(e) {
          return null == e || "symbol" === typeof e || "boolean" === typeof e
            ? null
            : "function" === typeof e
              ? e
              : Pt("" + e);
        }
        function Oc(e, t) {
          var n = t.ownerDocument.createElement("input");
          return (
            (n.name = t.name),
            (n.value = t.value),
            e.id && n.setAttribute("form", e.id),
            t.parentNode.insertBefore(n, t),
            (e = new FormData(e)),
            n.parentNode.removeChild(n),
            e
          );
        }
        for (var zc = 0; zc < kr.length; zc++) {
          var Lc = kr[zc];
          xr(Lc.toLowerCase(), "on" + (Lc[0].toUpperCase() + Lc.slice(1)));
        }
        (xr(pr, "onAnimationEnd"),
          xr(mr, "onAnimationIteration"),
          xr(hr, "onAnimationStart"),
          xr("dblclick", "onDoubleClick"),
          xr("focusin", "onFocus"),
          xr("focusout", "onBlur"),
          xr(gr, "onTransitionRun"),
          xr(yr, "onTransitionStart"),
          xr(vr, "onTransitionCancel"),
          xr(br, "onTransitionEnd"),
          Xe("onMouseEnter", ["mouseout", "mouseover"]),
          Xe("onMouseLeave", ["mouseout", "mouseover"]),
          Xe("onPointerEnter", ["pointerout", "pointerover"]),
          Xe("onPointerLeave", ["pointerout", "pointerover"]),
          Ke(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " ",
            ),
          ),
          Ke(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " ",
            ),
          ),
          Ke("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          Ke(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          Ke(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          Ke(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ));
        var Rc =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " ",
            ),
          Ac = new Set(
            "beforetoggle cancel close invalid load scroll scrollend toggle"
              .split(" ")
              .concat(Rc),
          );
        function Fc(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                  var i = r[l],
                    u = i.instance,
                    s = i.currentTarget;
                  if (((i = i.listener), u !== o && a.isPropagationStopped()))
                    break e;
                  ((o = i), (a.currentTarget = s));
                  try {
                    o(a);
                  } catch (c) {
                    yi(c);
                  }
                  ((a.currentTarget = null), (o = u));
                }
              else
                for (l = 0; l < r.length; l++) {
                  if (
                    ((u = (i = r[l]).instance),
                    (s = i.currentTarget),
                    (i = i.listener),
                    u !== o && a.isPropagationStopped())
                  )
                    break e;
                  ((o = i), (a.currentTarget = s));
                  try {
                    o(a);
                  } catch (c) {
                    yi(c);
                  }
                  ((a.currentTarget = null), (o = u));
                }
            }
          }
        }
        function Mc(e, t) {
          var n = t[Ae];
          void 0 === n && (n = t[Ae] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Hc(t, e, 2, !1), n.add(r));
        }
        function Dc(e, t, n) {
          var r = 0;
          (t && (r |= 4), Hc(n, e, r, t));
        }
        var Ic = "_reactListening" + Math.random().toString(36).slice(2);
        function Uc(e) {
          if (!e[Ic]) {
            ((e[Ic] = !0),
              qe.forEach(function (t) {
                "selectionchange" !== t &&
                  (Ac.has(t) || Dc(t, !1, e), Dc(t, !0, e));
              }));
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Ic] || ((t[Ic] = !0), Dc("selectionchange", !1, t));
          }
        }
        function Hc(e, t, n, r) {
          switch (cf(t)) {
            case 2:
              var a = rf;
              break;
            case 8:
              a = af;
              break;
            default:
              a = of;
          }
          ((n = a.bind(null, t, n, e)),
            (a = void 0),
            !It ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
                ? e.addEventListener(t, n, { passive: a })
                : e.addEventListener(t, n, !1));
        }
        function Bc(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var l = r.tag;
              if (3 === l || 4 === l) {
                var i = r.stateNode.containerInfo;
                if (i === a) break;
                if (4 === l)
                  for (l = r.return; null !== l; ) {
                    var s = l.tag;
                    if ((3 === s || 4 === s) && l.stateNode.containerInfo === a)
                      return;
                    l = l.return;
                  }
                for (; null !== i; ) {
                  if (null === (l = He(i))) return;
                  if (5 === (s = l.tag) || 6 === s || 26 === s || 27 === s) {
                    r = o = l;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          Ft(function () {
            var r = o,
              a = Ot(n),
              l = [];
            e: {
              var i = wr.get(e);
              if (void 0 !== i) {
                var s = Zt,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === Wt(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = hn;
                    break;
                  case "focusin":
                    ((c = "focus"), (s = on));
                    break;
                  case "focusout":
                    ((c = "blur"), (s = on));
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = on;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = rn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = an;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = yn;
                    break;
                  case pr:
                  case mr:
                  case hr:
                    s = ln;
                    break;
                  case br:
                    s = vn;
                    break;
                  case "scroll":
                  case "scrollend":
                    s = tn;
                    break;
                  case "wheel":
                    s = bn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = un;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = gn;
                    break;
                  case "toggle":
                  case "beforetoggle":
                    s = wn;
                }
                var d = 0 !== (4 & t),
                  f = !d && ("scroll" === e || "scrollend" === e),
                  p = d ? (null !== i ? i + "Capture" : null) : i;
                d = [];
                for (var m, h = r; null !== h; ) {
                  var g = h;
                  if (
                    ((m = g.stateNode),
                    (5 !== (g = g.tag) && 26 !== g && 27 !== g) ||
                      null === m ||
                      null === p ||
                      (null != (g = Mt(h, p)) && d.push($c(h, g, m))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < d.length &&
                  ((i = new s(i, c, null, n, a)),
                  l.push({ event: i, listeners: d }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  n === Tt ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!He(c) && !c[Re])) &&
                  (s || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                        ? i.defaultView || i.parentWindow
                        : window),
                  s
                    ? ((s = r),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? He(c)
                          : null) &&
                        ((f = u(c)),
                        (d = c.tag),
                        c !== f || (5 !== d && 27 !== d && 6 !== d)) &&
                        (c = null))
                    : ((s = null), (c = r)),
                  s !== c))
              ) {
                if (
                  ((d = rn),
                  (g = "onMouseLeave"),
                  (p = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((d = gn),
                    (g = "onPointerLeave"),
                    (p = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == s ? i : $e(s)),
                  (m = null == c ? i : $e(c)),
                  ((i = new d(g, h + "leave", s, n, a)).target = f),
                  (i.relatedTarget = m),
                  (g = null),
                  He(a) === r &&
                    (((d = new d(p, h + "enter", c, n, a)).target = m),
                    (d.relatedTarget = f),
                    (g = d)),
                  (f = g),
                  s && c)
                )
                  e: {
                    for (p = c, h = 0, m = d = s; m; m = Wc(m)) h++;
                    for (m = 0, g = p; g; g = Wc(g)) m++;
                    for (; 0 < h - m; ) ((d = Wc(d)), h--);
                    for (; 0 < m - h; ) ((p = Wc(p)), m--);
                    for (; h--; ) {
                      if (d === p || (null !== p && d === p.alternate)) break e;
                      ((d = Wc(d)), (p = Wc(p)));
                    }
                    d = null;
                  }
                else d = null;
                (null !== s && qc(l, i, s, d, !1),
                  null !== c && null !== f && qc(l, f, c, d, !0));
              }
              if (
                "select" ===
                  (s =
                    (i = r ? $e(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === s && "file" === i.type)
              )
                var y = Dn;
              else if (zn(i))
                if (In) y = Kn;
                else {
                  y = qn;
                  var v = Wn;
                }
              else
                !(s = i.nodeName) ||
                "input" !== s.toLowerCase() ||
                ("checkbox" !== i.type && "radio" !== i.type)
                  ? r && Ct(r.elementType) && (y = Dn)
                  : (y = Qn);
              switch (
                (y && (y = y(e, r))
                  ? Ln(l, y, n, a)
                  : (v && v(e, i, r),
                    "focusout" === e &&
                      r &&
                      "number" === i.type &&
                      null != r.memoizedProps.value &&
                      vt(i, "number", i.value)),
                (v = r ? $e(r) : window),
                e)
              ) {
                case "focusin":
                  (zn(v) || "true" === v.contentEditable) &&
                    ((rr = v), (ar = r), (or = null));
                  break;
                case "focusout":
                  or = ar = rr = null;
                  break;
                case "mousedown":
                  lr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  ((lr = !1), ir(l, n, a));
                  break;
                case "selectionchange":
                  if (nr) break;
                case "keydown":
                case "keyup":
                  ir(l, n, a);
              }
              var b;
              if (xn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var w = "onCompositionStart";
                      break e;
                    case "compositionend":
                      w = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      w = "onCompositionUpdate";
                      break e;
                  }
                  w = void 0;
                }
              else
                Tn
                  ? jn(e, n) && (w = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (w = "onCompositionStart");
              (w &&
                (En &&
                  "ko" !== n.locale &&
                  (Tn || "onCompositionStart" !== w
                    ? "onCompositionEnd" === w && Tn && (b = Vt())
                    : ((Bt = "value" in (Ht = a) ? Ht.value : Ht.textContent),
                      (Tn = !0))),
                0 < (v = Vc(r, w)).length &&
                  ((w = new sn(w, e, null, n, a)),
                  l.push({ event: w, listeners: v }),
                  b ? (w.data = b) : null !== (b = Pn(n)) && (w.data = b))),
                (b = _n
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Pn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Nn = !0), Cn);
                        case "textInput":
                          return (e = t.data) === Cn && Nn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Tn)
                        return "compositionend" === e || (!xn && jn(e, t))
                          ? ((e = Vt()), ($t = Bt = Ht = null), (Tn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return En && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (w = Vc(r, "onBeforeInput")).length &&
                  ((v = new sn("onBeforeInput", "beforeinput", null, n, a)),
                  l.push({ event: v, listeners: w }),
                  (v.data = b)),
                (function (e, t, n, r, a) {
                  if ("submit" === t && n && n.stateNode === a) {
                    var o = Tc((a[Le] || null).action),
                      l = r.submitter;
                    l &&
                      null !==
                        (t = (t = l[Le] || null)
                          ? Tc(t.formAction)
                          : l.getAttribute("formAction")) &&
                      ((o = t), (l = null));
                    var i = new Zt("action", "action", null, r, a);
                    e.push({
                      event: i,
                      listeners: [
                        {
                          instance: null,
                          listener: function () {
                            if (r.defaultPrevented) {
                              if (0 !== kc) {
                                var e = l ? Oc(a, l) : new FormData(a);
                                Ol(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: a.method,
                                    action: o,
                                  },
                                  null,
                                  e,
                                );
                              }
                            } else
                              "function" === typeof o &&
                                (i.preventDefault(),
                                (e = l ? Oc(a, l) : new FormData(a)),
                                Ol(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: a.method,
                                    action: o,
                                  },
                                  o,
                                  e,
                                ));
                          },
                          currentTarget: a,
                        },
                      ],
                    });
                  }
                })(l, e, r, n, a));
            }
            Fc(l, t);
          });
        }
        function $c(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Vc(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            if (
              ((5 !== (a = a.tag) && 26 !== a && 27 !== a) ||
                null === o ||
                (null != (a = Mt(e, n)) && r.unshift($c(e, a, o)),
                null != (a = Mt(e, t)) && r.push($c(e, a, o))),
              3 === e.tag)
            )
              return r;
            e = e.return;
          }
          return [];
        }
        function Wc(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag && 27 !== e.tag);
          return e || null;
        }
        function qc(e, t, n, r, a) {
          for (var o = t._reactName, l = []; null !== n && n !== r; ) {
            var i = n,
              u = i.alternate,
              s = i.stateNode;
            if (((i = i.tag), null !== u && u === r)) break;
            ((5 !== i && 26 !== i && 27 !== i) ||
              null === s ||
              ((u = s),
              a
                ? null != (s = Mt(n, o)) && l.unshift($c(n, s, u))
                : a || (null != (s = Mt(n, o)) && l.push($c(n, s, u)))),
              (n = n.return));
          }
          0 !== l.length && e.push({ event: t, listeners: l });
        }
        var Qc = /\r\n?/g,
          Kc = /\u0000|\uFFFD/g;
        function Xc(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Qc, "\n")
            .replace(Kc, "");
        }
        function Yc(e, t) {
          return ((t = Xc(t)), Xc(e) === t);
        }
        function Gc() {}
        function Jc(e, t, n, r, a, o) {
          switch (n) {
            case "children":
              "string" === typeof r
                ? "body" === t || ("textarea" === t && "" === r) || xt(e, r)
                : ("number" === typeof r || "bigint" === typeof r) &&
                  "body" !== t &&
                  xt(e, "" + r);
              break;
            case "className":
              nt(e, "class", r);
              break;
            case "tabIndex":
              nt(e, "tabindex", r);
              break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
              nt(e, n, r);
              break;
            case "style":
              Et(e, r, o);
              break;
            case "data":
              if ("object" !== t) {
                nt(e, "data", r);
                break;
              }
            case "src":
            case "href":
              if ("" === r && ("a" !== t || "href" !== n)) {
                e.removeAttribute(n);
                break;
              }
              if (
                null == r ||
                "function" === typeof r ||
                "symbol" === typeof r ||
                "boolean" === typeof r
              ) {
                e.removeAttribute(n);
                break;
              }
              ((r = Pt("" + r)), e.setAttribute(n, r));
              break;
            case "action":
            case "formAction":
              if ("function" === typeof r) {
                e.setAttribute(
                  n,
                  "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
                );
                break;
              }
              if (
                ("function" === typeof o &&
                  ("formAction" === n
                    ? ("input" !== t && Jc(e, t, "name", a.name, a, null),
                      Jc(e, t, "formEncType", a.formEncType, a, null),
                      Jc(e, t, "formMethod", a.formMethod, a, null),
                      Jc(e, t, "formTarget", a.formTarget, a, null))
                    : (Jc(e, t, "encType", a.encType, a, null),
                      Jc(e, t, "method", a.method, a, null),
                      Jc(e, t, "target", a.target, a, null))),
                null == r || "symbol" === typeof r || "boolean" === typeof r)
              ) {
                e.removeAttribute(n);
                break;
              }
              ((r = Pt("" + r)), e.setAttribute(n, r));
              break;
            case "onClick":
              null != r && (e.onclick = Gc);
              break;
            case "onScroll":
              null != r && Mc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Mc("scrollend", e);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" !== typeof r || !("__html" in r))
                  throw Error(l(61));
                if (null != (n = r.__html)) {
                  if (null != a.children) throw Error(l(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "multiple":
              e.multiple =
                r && "function" !== typeof r && "symbol" !== typeof r;
              break;
            case "muted":
              e.muted = r && "function" !== typeof r && "symbol" !== typeof r;
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
            case "autoFocus":
              break;
            case "xlinkHref":
              if (
                null == r ||
                "function" === typeof r ||
                "boolean" === typeof r ||
                "symbol" === typeof r
              ) {
                e.removeAttribute("xlink:href");
                break;
              }
              ((n = Pt("" + r)),
                e.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "xlink:href",
                  n,
                ));
              break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
              null != r && "function" !== typeof r && "symbol" !== typeof r
                ? e.setAttribute(n, "" + r)
                : e.removeAttribute(n);
              break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
              r && "function" !== typeof r && "symbol" !== typeof r
                ? e.setAttribute(n, "")
                : e.removeAttribute(n);
              break;
            case "capture":
            case "download":
              !0 === r
                ? e.setAttribute(n, "")
                : !1 !== r &&
                    null != r &&
                    "function" !== typeof r &&
                    "symbol" !== typeof r
                  ? e.setAttribute(n, r)
                  : e.removeAttribute(n);
              break;
            case "cols":
            case "rows":
            case "size":
            case "span":
              null != r &&
              "function" !== typeof r &&
              "symbol" !== typeof r &&
              !isNaN(r) &&
              1 <= r
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
              break;
            case "rowSpan":
            case "start":
              null == r ||
              "function" === typeof r ||
              "symbol" === typeof r ||
              isNaN(r)
                ? e.removeAttribute(n)
                : e.setAttribute(n, r);
              break;
            case "popover":
              (Mc("beforetoggle", e), Mc("toggle", e), tt(e, "popover", r));
              break;
            case "xlinkActuate":
              rt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
              break;
            case "xlinkArcrole":
              rt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
              break;
            case "xlinkRole":
              rt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
              break;
            case "xlinkShow":
              rt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
              break;
            case "xlinkTitle":
              rt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
              break;
            case "xlinkType":
              rt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
              break;
            case "xmlBase":
              rt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
              break;
            case "xmlLang":
              rt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
              break;
            case "xmlSpace":
              rt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
              break;
            case "is":
              tt(e, "is", r);
              break;
            case "innerText":
            case "textContent":
              break;
            default:
              (!(2 < n.length) ||
                ("o" !== n[0] && "O" !== n[0]) ||
                ("n" !== n[1] && "N" !== n[1])) &&
                tt(e, (n = Nt.get(n) || n), r);
          }
        }
        function Zc(e, t, n, r, a, o) {
          switch (n) {
            case "style":
              Et(e, r, o);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" !== typeof r || !("__html" in r))
                  throw Error(l(61));
                if (null != (n = r.__html)) {
                  if (null != a.children) throw Error(l(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "children":
              "string" === typeof r
                ? xt(e, r)
                : ("number" === typeof r || "bigint" === typeof r) &&
                  xt(e, "" + r);
              break;
            case "onScroll":
              null != r && Mc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Mc("scrollend", e);
              break;
            case "onClick":
              null != r && (e.onclick = Gc);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
            case "innerText":
            case "textContent":
              break;
            default:
              Qe.hasOwnProperty(n) ||
                ("o" !== n[0] ||
                "n" !== n[1] ||
                ((a = n.endsWith("Capture")),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                "function" ===
                  typeof (o = null != (o = e[Le] || null) ? o[n] : null) &&
                  e.removeEventListener(t, o, a),
                "function" !== typeof r)
                  ? n in e
                    ? (e[n] = r)
                    : !0 === r
                      ? e.setAttribute(n, "")
                      : tt(e, n, r)
                  : ("function" !== typeof o &&
                      null !== o &&
                      (n in e
                        ? (e[n] = null)
                        : e.hasAttribute(n) && e.removeAttribute(n)),
                    e.addEventListener(t, r, a)));
          }
        }
        function ed(e, t, n) {
          switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
              break;
            case "img":
              (Mc("error", e), Mc("load", e));
              var r,
                a = !1,
                o = !1;
              for (r in n)
                if (n.hasOwnProperty(r)) {
                  var i = n[r];
                  if (null != i)
                    switch (r) {
                      case "src":
                        a = !0;
                        break;
                      case "srcSet":
                        o = !0;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        throw Error(l(137, t));
                      default:
                        Jc(e, t, r, i, n, null);
                    }
                }
              return (
                o && Jc(e, t, "srcSet", n.srcSet, n, null),
                void (a && Jc(e, t, "src", n.src, n, null))
              );
            case "input":
              Mc("invalid", e);
              var u = (r = i = o = null),
                s = null,
                c = null;
              for (a in n)
                if (n.hasOwnProperty(a)) {
                  var d = n[a];
                  if (null != d)
                    switch (a) {
                      case "name":
                        o = d;
                        break;
                      case "type":
                        i = d;
                        break;
                      case "checked":
                        s = d;
                        break;
                      case "defaultChecked":
                        c = d;
                        break;
                      case "value":
                        r = d;
                        break;
                      case "defaultValue":
                        u = d;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        if (null != d) throw Error(l(137, t));
                        break;
                      default:
                        Jc(e, t, a, d, n, null);
                    }
                }
              return (yt(e, r, u, s, c, i, o, !1), void dt(e));
            case "select":
              for (o in (Mc("invalid", e), (a = i = r = null), n))
                if (n.hasOwnProperty(o) && null != (u = n[o]))
                  switch (o) {
                    case "value":
                      r = u;
                      break;
                    case "defaultValue":
                      i = u;
                      break;
                    case "multiple":
                      a = u;
                    default:
                      Jc(e, t, o, u, n, null);
                  }
              return (
                (t = r),
                (n = i),
                (e.multiple = !!a),
                void (null != t
                  ? bt(e, !!a, t, !1)
                  : null != n && bt(e, !!a, n, !0))
              );
            case "textarea":
              for (i in (Mc("invalid", e), (r = o = a = null), n))
                if (n.hasOwnProperty(i) && null != (u = n[i]))
                  switch (i) {
                    case "value":
                      a = u;
                      break;
                    case "defaultValue":
                      o = u;
                      break;
                    case "children":
                      r = u;
                      break;
                    case "dangerouslySetInnerHTML":
                      if (null != u) throw Error(l(91));
                      break;
                    default:
                      Jc(e, t, i, u, n, null);
                  }
              return (kt(e, a, o, r), void dt(e));
            case "option":
              for (s in n)
                if (n.hasOwnProperty(s) && null != (a = n[s]))
                  if ("selected" === s)
                    e.selected =
                      a && "function" !== typeof a && "symbol" !== typeof a;
                  else Jc(e, t, s, a, n, null);
              return;
            case "dialog":
              (Mc("beforetoggle", e),
                Mc("toggle", e),
                Mc("cancel", e),
                Mc("close", e));
              break;
            case "iframe":
            case "object":
              Mc("load", e);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Rc.length; a++) Mc(Rc[a], e);
              break;
            case "image":
              (Mc("error", e), Mc("load", e));
              break;
            case "details":
              Mc("toggle", e);
              break;
            case "embed":
            case "source":
            case "link":
              (Mc("error", e), Mc("load", e));
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
              for (c in n)
                if (n.hasOwnProperty(c) && null != (a = n[c]))
                  switch (c) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(l(137, t));
                    default:
                      Jc(e, t, c, a, n, null);
                  }
              return;
            default:
              if (Ct(t)) {
                for (d in n)
                  n.hasOwnProperty(d) &&
                    void 0 !== (a = n[d]) &&
                    Zc(e, t, d, a, n, void 0);
                return;
              }
          }
          for (u in n)
            n.hasOwnProperty(u) &&
              null != (a = n[u]) &&
              Jc(e, t, u, a, n, null);
        }
        var td = null,
          nd = null;
        function rd(e) {
          return 9 === e.nodeType ? e : e.ownerDocument;
        }
        function ad(e) {
          switch (e) {
            case "http://www.w3.org/2000/svg":
              return 1;
            case "http://www.w3.org/1998/Math/MathML":
              return 2;
            default:
              return 0;
          }
        }
        function od(e, t) {
          if (0 === e)
            switch (t) {
              case "svg":
                return 1;
              case "math":
                return 2;
              default:
                return 0;
            }
          return 1 === e && "foreignObject" === t ? 0 : e;
        }
        function ld(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            "bigint" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var id = null;
        var ud = "function" === typeof setTimeout ? setTimeout : void 0,
          sd = "function" === typeof clearTimeout ? clearTimeout : void 0,
          cd = "function" === typeof Promise ? Promise : void 0,
          dd =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof cd
                ? function (e) {
                    return cd.resolve(null).then(e).catch(fd);
                  }
                : ud;
        function fd(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function pd(e) {
          return "head" === e;
        }
        function md(e, t) {
          var n = t,
            r = 0,
            a = 0;
          do {
            var o = n.nextSibling;
            if ((e.removeChild(n), o && 8 === o.nodeType))
              if ("/$" === (n = o.data)) {
                if (0 < r && 8 > r) {
                  n = r;
                  var l = e.ownerDocument;
                  if (
                    (1 & n && kd(l.documentElement), 2 & n && kd(l.body), 4 & n)
                  )
                    for (kd((n = l.head)), l = n.firstChild; l; ) {
                      var i = l.nextSibling,
                        u = l.nodeName;
                      (l[Ie] ||
                        "SCRIPT" === u ||
                        "STYLE" === u ||
                        ("LINK" === u &&
                          "stylesheet" === l.rel.toLowerCase()) ||
                        n.removeChild(l),
                        (l = i));
                    }
                }
                if (0 === a) return (e.removeChild(o), void jf(t));
                a--;
              } else
                "$" === n || "$?" === n || "$!" === n
                  ? a++
                  : (r = n.charCodeAt(0) - 48);
            else r = 0;
            n = o;
          } while (n);
          jf(t);
        }
        function hd(e) {
          var t = e.firstChild;
          for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
            var n = t;
            switch (((t = t.nextSibling), n.nodeName)) {
              case "HTML":
              case "HEAD":
              case "BODY":
                (hd(n), Ue(n));
                continue;
              case "SCRIPT":
              case "STYLE":
                continue;
              case "LINK":
                if ("stylesheet" === n.rel.toLowerCase()) continue;
            }
            e.removeChild(n);
          }
        }
        function gd(e) {
          return (
            "$!" === e.data ||
            ("$?" === e.data && "complete" === e.ownerDocument.readyState)
          );
        }
        function yd(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if (
                "$" === (t = e.data) ||
                "$!" === t ||
                "$?" === t ||
                "F!" === t ||
                "F" === t
              )
                break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        var vd = null;
        function bd(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        function wd(e, t, n) {
          switch (((t = rd(n)), e)) {
            case "html":
              if (!(e = t.documentElement)) throw Error(l(452));
              return e;
            case "head":
              if (!(e = t.head)) throw Error(l(453));
              return e;
            case "body":
              if (!(e = t.body)) throw Error(l(454));
              return e;
            default:
              throw Error(l(451));
          }
        }
        function kd(e) {
          for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
          Ue(e);
        }
        var xd = new Map(),
          Sd = new Set();
        function _d(e) {
          return "function" === typeof e.getRootNode
            ? e.getRootNode()
            : 9 === e.nodeType
              ? e
              : e.ownerDocument;
        }
        var Ed = A.d;
        A.d = {
          f: function () {
            var e = Ed.f(),
              t = Hs();
            return e || t;
          },
          r: function (e) {
            var t = Be(e);
            null !== t && 5 === t.tag && "form" === t.type ? Ll(t) : Ed.r(e);
          },
          D: function (e) {
            (Ed.D(e), Nd("dns-prefetch", e, null));
          },
          C: function (e, t) {
            (Ed.C(e, t), Nd("preconnect", e, t));
          },
          L: function (e, t, n) {
            Ed.L(e, t, n);
            var r = Cd;
            if (r && e && t) {
              var a = 'link[rel="preload"][as="' + ht(t) + '"]';
              "image" === t && n && n.imageSrcSet
                ? ((a += '[imagesrcset="' + ht(n.imageSrcSet) + '"]'),
                  "string" === typeof n.imageSizes &&
                    (a += '[imagesizes="' + ht(n.imageSizes) + '"]'))
                : (a += '[href="' + ht(e) + '"]');
              var o = a;
              switch (t) {
                case "style":
                  o = Pd(e);
                  break;
                case "script":
                  o = zd(e);
              }
              xd.has(o) ||
                ((e = f(
                  {
                    rel: "preload",
                    href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                    as: t,
                  },
                  n,
                )),
                xd.set(o, e),
                null !== r.querySelector(a) ||
                  ("style" === t && r.querySelector(Td(o))) ||
                  ("script" === t && r.querySelector(Ld(o))) ||
                  (ed((t = r.createElement("link")), "link", e),
                  We(t),
                  r.head.appendChild(t)));
            }
          },
          m: function (e, t) {
            Ed.m(e, t);
            var n = Cd;
            if (n && e) {
              var r = t && "string" === typeof t.as ? t.as : "script",
                a =
                  'link[rel="modulepreload"][as="' +
                  ht(r) +
                  '"][href="' +
                  ht(e) +
                  '"]',
                o = a;
              switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                  o = zd(e);
              }
              if (
                !xd.has(o) &&
                ((e = f({ rel: "modulepreload", href: e }, t)),
                xd.set(o, e),
                null === n.querySelector(a))
              ) {
                switch (r) {
                  case "audioworklet":
                  case "paintworklet":
                  case "serviceworker":
                  case "sharedworker":
                  case "worker":
                  case "script":
                    if (n.querySelector(Ld(o))) return;
                }
                (ed((r = n.createElement("link")), "link", e),
                  We(r),
                  n.head.appendChild(r));
              }
            }
          },
          X: function (e, t) {
            Ed.X(e, t);
            var n = Cd;
            if (n && e) {
              var r = Ve(n).hoistableScripts,
                a = zd(e),
                o = r.get(a);
              o ||
                ((o = n.querySelector(Ld(a))) ||
                  ((e = f({ src: e, async: !0 }, t)),
                  (t = xd.get(a)) && Md(e, t),
                  We((o = n.createElement("script"))),
                  ed(o, "link", e),
                  n.head.appendChild(o)),
                (o = { type: "script", instance: o, count: 1, state: null }),
                r.set(a, o));
            }
          },
          S: function (e, t, n) {
            Ed.S(e, t, n);
            var r = Cd;
            if (r && e) {
              var a = Ve(r).hoistableStyles,
                o = Pd(e);
              t = t || "default";
              var l = a.get(o);
              if (!l) {
                var i = { loading: 0, preload: null };
                if ((l = r.querySelector(Td(o)))) i.loading = 5;
                else {
                  ((e = f(
                    { rel: "stylesheet", href: e, "data-precedence": t },
                    n,
                  )),
                    (n = xd.get(o)) && Fd(e, n));
                  var u = (l = r.createElement("link"));
                  (We(u),
                    ed(u, "link", e),
                    (u._p = new Promise(function (e, t) {
                      ((u.onload = e), (u.onerror = t));
                    })),
                    u.addEventListener("load", function () {
                      i.loading |= 1;
                    }),
                    u.addEventListener("error", function () {
                      i.loading |= 2;
                    }),
                    (i.loading |= 4),
                    Ad(l, t, r));
                }
                ((l = { type: "stylesheet", instance: l, count: 1, state: i }),
                  a.set(o, l));
              }
            }
          },
          M: function (e, t) {
            Ed.M(e, t);
            var n = Cd;
            if (n && e) {
              var r = Ve(n).hoistableScripts,
                a = zd(e),
                o = r.get(a);
              o ||
                ((o = n.querySelector(Ld(a))) ||
                  ((e = f({ src: e, async: !0, type: "module" }, t)),
                  (t = xd.get(a)) && Md(e, t),
                  We((o = n.createElement("script"))),
                  ed(o, "link", e),
                  n.head.appendChild(o)),
                (o = { type: "script", instance: o, count: 1, state: null }),
                r.set(a, o));
            }
          },
        };
        var Cd = "undefined" === typeof document ? null : document;
        function Nd(e, t, n) {
          var r = Cd;
          if (r && "string" === typeof t && t) {
            var a = ht(t);
            ((a = 'link[rel="' + e + '"][href="' + a + '"]'),
              "string" === typeof n && (a += '[crossorigin="' + n + '"]'),
              Sd.has(a) ||
                (Sd.add(a),
                (e = { rel: e, crossOrigin: n, href: t }),
                null === r.querySelector(a) &&
                  (ed((t = r.createElement("link")), "link", e),
                  We(t),
                  r.head.appendChild(t))));
          }
        }
        function jd(e, t, n, r) {
          var a,
            o,
            i,
            u,
            s = (s = V.current) ? _d(s) : null;
          if (!s) throw Error(l(446));
          switch (e) {
            case "meta":
            case "title":
              return null;
            case "style":
              return "string" === typeof n.precedence &&
                "string" === typeof n.href
                ? ((t = Pd(n.href)),
                  (r = (n = Ve(s).hoistableStyles).get(t)) ||
                    ((r = {
                      type: "style",
                      instance: null,
                      count: 0,
                      state: null,
                    }),
                    n.set(t, r)),
                  r)
                : { type: "void", instance: null, count: 0, state: null };
            case "link":
              if (
                "stylesheet" === n.rel &&
                "string" === typeof n.href &&
                "string" === typeof n.precedence
              ) {
                e = Pd(n.href);
                var c = Ve(s).hoistableStyles,
                  d = c.get(e);
                if (
                  (d ||
                    ((s = s.ownerDocument || s),
                    (d = {
                      type: "stylesheet",
                      instance: null,
                      count: 0,
                      state: { loading: 0, preload: null },
                    }),
                    c.set(e, d),
                    (c = s.querySelector(Td(e))) &&
                      !c._p &&
                      ((d.instance = c), (d.state.loading = 5)),
                    xd.has(e) ||
                      ((n = {
                        rel: "preload",
                        as: "style",
                        href: n.href,
                        crossOrigin: n.crossOrigin,
                        integrity: n.integrity,
                        media: n.media,
                        hrefLang: n.hrefLang,
                        referrerPolicy: n.referrerPolicy,
                      }),
                      xd.set(e, n),
                      c ||
                        ((a = s),
                        (o = e),
                        (i = n),
                        (u = d.state),
                        a.querySelector(
                          'link[rel="preload"][as="style"][' + o + "]",
                        )
                          ? (u.loading = 1)
                          : ((o = a.createElement("link")),
                            (u.preload = o),
                            o.addEventListener("load", function () {
                              return (u.loading |= 1);
                            }),
                            o.addEventListener("error", function () {
                              return (u.loading |= 2);
                            }),
                            ed(o, "link", i),
                            We(o),
                            a.head.appendChild(o))))),
                  t && null === r)
                )
                  throw Error(l(528, ""));
                return d;
              }
              if (t && null !== r) throw Error(l(529, ""));
              return null;
            case "script":
              return (
                (t = n.async),
                "string" === typeof (n = n.src) &&
                t &&
                "function" !== typeof t &&
                "symbol" !== typeof t
                  ? ((t = zd(n)),
                    (r = (n = Ve(s).hoistableScripts).get(t)) ||
                      ((r = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null,
                      }),
                      n.set(t, r)),
                    r)
                  : { type: "void", instance: null, count: 0, state: null }
              );
            default:
              throw Error(l(444, e));
          }
        }
        function Pd(e) {
          return 'href="' + ht(e) + '"';
        }
        function Td(e) {
          return 'link[rel="stylesheet"][' + e + "]";
        }
        function Od(e) {
          return f({}, e, {
            "data-precedence": e.precedence,
            precedence: null,
          });
        }
        function zd(e) {
          return '[src="' + ht(e) + '"]';
        }
        function Ld(e) {
          return "script[async]" + e;
        }
        function Rd(e, t, n) {
          if ((t.count++, null === t.instance))
            switch (t.type) {
              case "style":
                var r = e.querySelector(
                  'style[data-href~="' + ht(n.href) + '"]',
                );
                if (r) return ((t.instance = r), We(r), r);
                var a = f({}, n, {
                  "data-href": n.href,
                  "data-precedence": n.precedence,
                  href: null,
                  precedence: null,
                });
                return (
                  We((r = (e.ownerDocument || e).createElement("style"))),
                  ed(r, "style", a),
                  Ad(r, n.precedence, e),
                  (t.instance = r)
                );
              case "stylesheet":
                a = Pd(n.href);
                var o = e.querySelector(Td(a));
                if (o)
                  return ((t.state.loading |= 4), (t.instance = o), We(o), o);
                ((r = Od(n)),
                  (a = xd.get(a)) && Fd(r, a),
                  We((o = (e.ownerDocument || e).createElement("link"))));
                var i = o;
                return (
                  (i._p = new Promise(function (e, t) {
                    ((i.onload = e), (i.onerror = t));
                  })),
                  ed(o, "link", r),
                  (t.state.loading |= 4),
                  Ad(o, n.precedence, e),
                  (t.instance = o)
                );
              case "script":
                return (
                  (o = zd(n.src)),
                  (a = e.querySelector(Ld(o)))
                    ? ((t.instance = a), We(a), a)
                    : ((r = n),
                      (a = xd.get(o)) && Md((r = f({}, n)), a),
                      We(
                        (a = (e = e.ownerDocument || e).createElement(
                          "script",
                        )),
                      ),
                      ed(a, "link", r),
                      e.head.appendChild(a),
                      (t.instance = a))
                );
              case "void":
                return null;
              default:
                throw Error(l(443, t.type));
            }
          else
            "stylesheet" === t.type &&
              0 === (4 & t.state.loading) &&
              ((r = t.instance),
              (t.state.loading |= 4),
              Ad(r, n.precedence, e));
          return t.instance;
        }
        function Ad(e, t, n) {
          for (
            var r = n.querySelectorAll(
                'link[rel="stylesheet"][data-precedence],style[data-precedence]',
              ),
              a = r.length ? r[r.length - 1] : null,
              o = a,
              l = 0;
            l < r.length;
            l++
          ) {
            var i = r[l];
            if (i.dataset.precedence === t) o = i;
            else if (o !== a) break;
          }
          o
            ? o.parentNode.insertBefore(e, o.nextSibling)
            : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
        }
        function Fd(e, t) {
          (null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.title && (e.title = t.title));
        }
        function Md(e, t) {
          (null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.integrity && (e.integrity = t.integrity));
        }
        var Dd = null;
        function Id(e, t, n) {
          if (null === Dd) {
            var r = new Map(),
              a = (Dd = new Map());
            a.set(n, r);
          } else (r = (a = Dd).get(n)) || ((r = new Map()), a.set(n, r));
          if (r.has(e)) return r;
          for (
            r.set(e, null), n = n.getElementsByTagName(e), a = 0;
            a < n.length;
            a++
          ) {
            var o = n[a];
            if (
              !(
                o[Ie] ||
                o[ze] ||
                ("link" === e && "stylesheet" === o.getAttribute("rel"))
              ) &&
              "http://www.w3.org/2000/svg" !== o.namespaceURI
            ) {
              var l = o.getAttribute(t) || "";
              l = e + l;
              var i = r.get(l);
              i ? i.push(o) : r.set(l, [o]);
            }
          }
          return r;
        }
        function Ud(e, t, n) {
          (e = e.ownerDocument || e).head.insertBefore(
            n,
            "title" === t ? e.querySelector("head > title") : null,
          );
        }
        function Hd(e) {
          return "stylesheet" !== e.type || 0 !== (3 & e.state.loading);
        }
        var Bd = null;
        function $d() {}
        function Vd() {
          if ((this.count--, 0 === this.count))
            if (this.stylesheets) qd(this, this.stylesheets);
            else if (this.unsuspend) {
              var e = this.unsuspend;
              ((this.unsuspend = null), e());
            }
        }
        var Wd = null;
        function qd(e, t) {
          ((e.stylesheets = null),
            null !== e.unsuspend &&
              (e.count++,
              (Wd = new Map()),
              t.forEach(Qd, e),
              (Wd = null),
              Vd.call(e)));
        }
        function Qd(e, t) {
          if (!(4 & t.state.loading)) {
            var n = Wd.get(e);
            if (n) var r = n.get(null);
            else {
              ((n = new Map()), Wd.set(e, n));
              for (
                var a = e.querySelectorAll(
                    "link[data-precedence],style[data-precedence]",
                  ),
                  o = 0;
                o < a.length;
                o++
              ) {
                var l = a[o];
                ("LINK" !== l.nodeName &&
                  "not all" === l.getAttribute("media")) ||
                  (n.set(l.dataset.precedence, l), (r = l));
              }
              r && n.set(null, r);
            }
            ((l = (a = t.instance).getAttribute("data-precedence")),
              (o = n.get(l) || r) === r && n.set(null, a),
              n.set(l, a),
              this.count++,
              (r = Vd.bind(this)),
              a.addEventListener("load", r),
              a.addEventListener("error", r),
              o
                ? o.parentNode.insertBefore(a, o.nextSibling)
                : (e = 9 === e.nodeType ? e.head : e).insertBefore(
                    a,
                    e.firstChild,
                  ),
              (t.state.loading |= 4));
          }
        }
        var Kd = {
          $$typeof: k,
          Provider: null,
          Consumer: null,
          _currentValue: F,
          _currentValue2: F,
          _threadCount: 0,
        };
        function Xd(e, t, n, r, a, o, l, i) {
          ((this.tag = 1),
            (this.containerInfo = e),
            (this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode =
              this.next =
              this.pendingContext =
              this.context =
              this.cancelPendingCommit =
                null),
            (this.callbackPriority = 0),
            (this.expirationTimes = _e(-1)),
            (this.entangledLanes =
              this.shellSuspendCounter =
              this.errorRecoveryDisabledLanes =
              this.expiredLanes =
              this.warmLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = _e(0)),
            (this.hiddenUpdates = _e(null)),
            (this.identifierPrefix = r),
            (this.onUncaughtError = a),
            (this.onCaughtError = o),
            (this.onRecoverableError = l),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = i),
            (this.incompleteTransitions = new Map()));
        }
        function Yd(e, t, n, r, a, o, l, i, u, s, c, d) {
          return (
            (e = new Xd(e, t, n, l, i, u, s, d)),
            (t = 1),
            !0 === o && (t |= 24),
            (o = Fr(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (t = La()).refCount++,
            (e.pooledCache = t),
            t.refCount++,
            (o.memoizedState = { element: r, isDehydrated: n, cache: t }),
            no(o),
            e
          );
        }
        function Gd(e) {
          return e ? (e = Rr) : Rr;
        }
        function Jd(e, t, n, r, a, o) {
          ((a = Gd(a)),
            null === r.context ? (r.context = a) : (r.pendingContext = a),
            ((r = ao(t)).payload = { element: n }),
            null !== (o = void 0 === o ? null : o) && (r.callback = o),
            null !== (n = oo(e, r, t)) && (Fs(n, 0, t), lo(n, e, t)));
        }
        function Zd(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function ef(e, t) {
          (Zd(e, t), (e = e.alternate) && Zd(e, t));
        }
        function tf(e) {
          if (13 === e.tag) {
            var t = Or(e, 67108864);
            (null !== t && Fs(t, 0, 67108864), ef(e, 67108864));
          }
        }
        var nf = !0;
        function rf(e, t, n, r) {
          var a = R.T;
          R.T = null;
          var o = A.p;
          try {
            ((A.p = 2), of(e, t, n, r));
          } finally {
            ((A.p = o), (R.T = a));
          }
        }
        function af(e, t, n, r) {
          var a = R.T;
          R.T = null;
          var o = A.p;
          try {
            ((A.p = 8), of(e, t, n, r));
          } finally {
            ((A.p = o), (R.T = a));
          }
        }
        function of(e, t, n, r) {
          if (nf) {
            var a = lf(r);
            if (null === a) (Bc(e, t, r, uf, n), bf(e, r));
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return ((ff = wf(ff, e, t, n, r, a)), !0);
                  case "dragenter":
                    return ((pf = wf(pf, e, t, n, r, a)), !0);
                  case "mouseover":
                    return ((mf = wf(mf, e, t, n, r, a)), !0);
                  case "pointerover":
                    var o = a.pointerId;
                    return (
                      hf.set(o, wf(hf.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      gf.set(o, wf(gf.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((bf(e, r), 4 & t && -1 < vf.indexOf(e))) {
              for (; null !== a; ) {
                var o = Be(a);
                if (null !== o)
                  switch (o.tag) {
                    case 3:
                      if (
                        (o = o.stateNode).current.memoizedState.isDehydrated
                      ) {
                        var l = ve(o.pendingLanes);
                        if (0 !== l) {
                          var i = o;
                          for (
                            i.pendingLanes |= 2, i.entangledLanes |= 2;
                            l;

                          ) {
                            var u = 1 << (31 - pe(l));
                            ((i.entanglements[1] |= u), (l &= ~u));
                          }
                          (xc(o),
                            0 === (6 & ns) && ((xs = te() + 500), Sc(0, !1)));
                        }
                      }
                      break;
                    case 13:
                      (null !== (i = Or(o, 2)) && Fs(i, 0, 2), Hs(), ef(o, 2));
                  }
                if ((null === (o = lf(r)) && Bc(e, t, r, uf, n), o === a))
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Bc(e, t, r, null, n);
          }
        }
        function lf(e) {
          return sf((e = Ot(e)));
        }
        var uf = null;
        function sf(e) {
          if (((uf = null), null !== (e = He(e)))) {
            var t = u(e);
            if (null === t) e = null;
            else {
              var n = t.tag;
              if (13 === n) {
                if (null !== (e = s(t))) return e;
                e = null;
              } else if (3 === n) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                  return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
              } else t !== e && (e = null);
            }
          }
          return ((uf = e), null);
        }
        function cf(e) {
          switch (e) {
            case "beforetoggle":
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
            case "toggle":
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
              return 2;
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
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 8;
            case "message":
              switch (ne()) {
                case re:
                  return 2;
                case ae:
                  return 8;
                case oe:
                case le:
                  return 32;
                case ie:
                  return 268435456;
                default:
                  return 32;
              }
            default:
              return 32;
          }
        }
        var df = !1,
          ff = null,
          pf = null,
          mf = null,
          hf = new Map(),
          gf = new Map(),
          yf = [],
          vf =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
              " ",
            );
        function bf(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              ff = null;
              break;
            case "dragenter":
            case "dragleave":
              pf = null;
              break;
            case "mouseover":
            case "mouseout":
              mf = null;
              break;
            case "pointerover":
            case "pointerout":
              hf.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              gf.delete(t.pointerId);
          }
        }
        function wf(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = Be(t)) && tf(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function kf(e) {
          var t = He(e.target);
          if (null !== t) {
            var n = u(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = s(n)))
                  return (
                    (e.blockedOn = t),
                    void (function (e, t) {
                      var n = A.p;
                      try {
                        return ((A.p = e), t());
                      } finally {
                        A.p = n;
                      }
                    })(e.priority, function () {
                      if (13 === n.tag) {
                        var e = Rs();
                        e = je(e);
                        var t = Or(n, e);
                        (null !== t && Fs(t, 0, e), ef(n, e));
                      }
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function xf(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = lf(e.nativeEvent);
            if (null !== n)
              return (null !== (t = Be(n)) && tf(t), (e.blockedOn = n), !1);
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            ((Tt = r), n.target.dispatchEvent(r), (Tt = null), t.shift());
          }
          return !0;
        }
        function Sf(e, t, n) {
          xf(e) && n.delete(t);
        }
        function _f() {
          ((df = !1),
            null !== ff && xf(ff) && (ff = null),
            null !== pf && xf(pf) && (pf = null),
            null !== mf && xf(mf) && (mf = null),
            hf.forEach(Sf),
            gf.forEach(Sf));
        }
        function Ef(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            df ||
              ((df = !0),
              r.unstable_scheduleCallback(r.unstable_NormalPriority, _f)));
        }
        var Cf = null;
        function Nf(e) {
          Cf !== e &&
            ((Cf = e),
            r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
              Cf === e && (Cf = null);
              for (var t = 0; t < e.length; t += 3) {
                var n = e[t],
                  r = e[t + 1],
                  a = e[t + 2];
                if ("function" !== typeof r) {
                  if (null === sf(r || n)) continue;
                  break;
                }
                var o = Be(n);
                null !== o &&
                  (e.splice(t, 3),
                  (t -= 3),
                  Ol(
                    o,
                    { pending: !0, data: a, method: n.method, action: r },
                    r,
                    a,
                  ));
              }
            }));
        }
        function jf(e) {
          function t(t) {
            return Ef(t, e);
          }
          (null !== ff && Ef(ff, e),
            null !== pf && Ef(pf, e),
            null !== mf && Ef(mf, e),
            hf.forEach(t),
            gf.forEach(t));
          for (var n = 0; n < yf.length; n++) {
            var r = yf[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
          for (; 0 < yf.length && null === (n = yf[0]).blockedOn; )
            (kf(n), null === n.blockedOn && yf.shift());
          if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
            for (r = 0; r < n.length; r += 3) {
              var a = n[r],
                o = n[r + 1],
                l = a[Le] || null;
              if ("function" === typeof o) l || Nf(n);
              else if (l) {
                var i = null;
                if (o && o.hasAttribute("formAction")) {
                  if (((a = o), (l = o[Le] || null))) i = l.formAction;
                  else if (null !== sf(a)) continue;
                } else i = l.action;
                ("function" === typeof i
                  ? (n[r + 1] = i)
                  : (n.splice(r, 3), (r -= 3)),
                  Nf(n));
              }
            }
        }
        function Pf(e) {
          this._internalRoot = e;
        }
        function Tf(e) {
          this._internalRoot = e;
        }
        ((Tf.prototype.render = Pf.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(l(409));
            Jd(t.current, Rs(), e, t, null, null);
          }),
          (Tf.prototype.unmount = Pf.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                (Jd(e.current, 2, null, e, null, null), Hs(), (t[Re] = null));
              }
            }),
          (Tf.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Te();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < yf.length && 0 !== t && t < yf[n].priority;
                n++
              );
              (yf.splice(n, 0, e), 0 === n && kf(e));
            }
          }));
        var Of = a.version;
        if ("19.1.0" !== Of) throw Error(l(527, Of, "19.1.0"));
        A.findDOMNode = function (e) {
          var t = e._reactInternals;
          if (void 0 === t) {
            if ("function" === typeof e.render) throw Error(l(188));
            throw ((e = Object.keys(e).join(",")), Error(l(268, e)));
          }
          return (
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = u(e))) throw Error(l(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return (c(a), e);
                    if (o === r) return (c(a), t);
                    o = o.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) ((n = a), (r = o));
                else {
                  for (var i = !1, s = a.child; s; ) {
                    if (s === n) {
                      ((i = !0), (n = a), (r = o));
                      break;
                    }
                    if (s === r) {
                      ((i = !0), (r = a), (n = o));
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!i) {
                    for (s = o.child; s; ) {
                      if (s === n) {
                        ((i = !0), (n = o), (r = a));
                        break;
                      }
                      if (s === r) {
                        ((i = !0), (r = o), (n = a));
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!i) throw Error(l(189));
                  }
                }
                if (n.alternate !== r) throw Error(l(190));
              }
              if (3 !== n.tag) throw Error(l(188));
              return n.stateNode.current === n ? e : t;
            })(t)),
            (e = null === (e = null !== e ? d(e) : null) ? null : e.stateNode)
          );
        };
        var zf = {
          bundleType: 0,
          version: "19.1.0",
          rendererPackageName: "react-dom",
          currentDispatcherRef: R,
          reconcilerVersion: "19.1.0",
        };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var Lf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!Lf.isDisabled && Lf.supportsFiber)
            try {
              ((ce = Lf.inject(zf)), (de = Lf));
            } catch (Af) {}
        }
        ((t.createRoot = function (e, t) {
          if (!i(e)) throw Error(l(299));
          var n = !1,
            r = "",
            a = vi,
            o = bi,
            u = wi;
          return (
            null !== t &&
              void 0 !== t &&
              (!0 === t.unstable_strictMode && (n = !0),
              void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
              void 0 !== t.onUncaughtError && (a = t.onUncaughtError),
              void 0 !== t.onCaughtError && (o = t.onCaughtError),
              void 0 !== t.onRecoverableError && (u = t.onRecoverableError),
              void 0 !== t.unstable_transitionCallbacks &&
                t.unstable_transitionCallbacks),
            (t = Yd(e, 1, !1, null, 0, n, r, a, o, u, 0, null)),
            (e[Re] = t.current),
            Uc(e),
            new Pf(t)
          );
        }),
          (t.hydrateRoot = function (e, t, n) {
            if (!i(e)) throw Error(l(299));
            var r = !1,
              a = "",
              o = vi,
              u = bi,
              s = wi,
              c = null;
            return (
              null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (r = !0),
                void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
                void 0 !== n.onUncaughtError && (o = n.onUncaughtError),
                void 0 !== n.onCaughtError && (u = n.onCaughtError),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError),
                void 0 !== n.unstable_transitionCallbacks &&
                  n.unstable_transitionCallbacks,
                void 0 !== n.formState && (c = n.formState)),
              ((t = Yd(e, 1, !0, t, 0, r, a, o, u, s, 0, c)).context =
                Gd(null)),
              (n = t.current),
              ((a = ao((r = je((r = Rs()))))).callback = null),
              oo(n, a, r),
              (n = r),
              (t.current.lanes = n),
              Ee(t, n),
              xc(t),
              (e[Re] = t.current),
              Uc(e),
              new Tf(t)
            );
          }),
          (t.version = "19.1.0"));
      },
      43: (e, t, n) => {
        e.exports = n(288);
      },
      237: (e, t, n) => {
        e.exports = n(365);
      },
      288: (e, t) => {
        var n = Symbol.for("react.transitional.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          l = Symbol.for("react.profiler"),
          i = Symbol.for("react.consumer"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          g = {};
        function y(e, t, n) {
          ((this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || m));
        }
        function v() {}
        function b(e, t, n) {
          ((this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || m));
        }
        ((y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = y.prototype));
        var w = (b.prototype = new v());
        ((w.constructor = b), h(w, y.prototype), (w.isPureReactComponent = !0));
        var k = Array.isArray,
          x = { H: null, A: null, T: null, S: null, V: null },
          S = Object.prototype.hasOwnProperty;
        function _(e, t, r, a, o, l) {
          return (
            (r = l.ref),
            {
              $$typeof: n,
              type: e,
              key: t,
              ref: void 0 !== r ? r : null,
              props: l,
            }
          );
        }
        function E(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var C = /\/+/g;
        function N(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function j() {}
        function P(e, t, a, o, l) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var u,
            s,
            c = !1;
          if (null === e) c = !0;
          else
            switch (i) {
              case "bigint":
              case "string":
              case "number":
                c = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    c = !0;
                    break;
                  case f:
                    return P((c = e._init)(e._payload), t, a, o, l);
                }
            }
          if (c)
            return (
              (l = l(e)),
              (c = "" === o ? "." + N(e, 0) : o),
              k(l)
                ? ((a = ""),
                  null != c && (a = c.replace(C, "$&/") + "/"),
                  P(l, t, a, "", function (e) {
                    return e;
                  }))
                : null != l &&
                  (E(l) &&
                    ((u = l),
                    (s =
                      a +
                      (null == l.key || (e && e.key === l.key)
                        ? ""
                        : ("" + l.key).replace(C, "$&/") + "/") +
                      c),
                    (l = _(u.type, s, void 0, 0, 0, u.props))),
                  t.push(l)),
              1
            );
          c = 0;
          var d,
            m = "" === o ? "." : o + ":";
          if (k(e))
            for (var h = 0; h < e.length; h++)
              c += P((o = e[h]), t, a, (i = m + N(o, h)), l);
          else if (
            "function" ===
            typeof (h =
              null === (d = e) || "object" !== typeof d
                ? null
                : "function" === typeof (d = (p && d[p]) || d["@@iterator"])
                  ? d
                  : null)
          )
            for (e = h.call(e), h = 0; !(o = e.next()).done; )
              c += P((o = o.value), t, a, (i = m + N(o, h++)), l);
          else if ("object" === i) {
            if ("function" === typeof e.then)
              return P(
                (function (e) {
                  switch (e.status) {
                    case "fulfilled":
                      return e.value;
                    case "rejected":
                      throw e.reason;
                    default:
                      switch (
                        ("string" === typeof e.status
                          ? e.then(j, j)
                          : ((e.status = "pending"),
                            e.then(
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "fulfilled"), (e.value = t));
                              },
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "rejected"), (e.reason = t));
                              },
                            )),
                        e.status)
                      ) {
                        case "fulfilled":
                          return e.value;
                        case "rejected":
                          throw e.reason;
                      }
                  }
                  throw e;
                })(e),
                t,
                a,
                o,
                l,
              );
            throw (
              (t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead.",
              )
            );
          }
          return c;
        }
        function T(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            P(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function O(e) {
          if (-1 === e._status) {
            var t = e._result;
            ((t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t)));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var z =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                if (
                  "object" === typeof window &&
                  "function" === typeof window.ErrorEvent
                ) {
                  var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message:
                      "object" === typeof e &&
                      null !== e &&
                      "string" === typeof e.message
                        ? String(e.message)
                        : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if (
                  "object" === typeof process &&
                  "function" === typeof process.emit
                )
                  return void process.emit("uncaughtException", e);
                console.error(e);
              };
        function L() {}
        ((t.Children = {
          map: T,
          forEach: function (e, t, n) {
            T(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              T(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              T(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!E(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = a),
          (t.Profiler = l),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
            x),
          (t.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function (e) {
              return x.H.useMemoCache(e);
            },
          }),
          (t.cache = function (e) {
            return function () {
              return e.apply(null, arguments);
            };
          }),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e)
              throw Error(
                "The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var r = h({}, e.props),
              a = e.key;
            if (null != t)
              for (o in (void 0 !== t.ref && void 0,
              void 0 !== t.key && (a = "" + t.key),
              t))
                !S.call(t, o) ||
                  "key" === o ||
                  "__self" === o ||
                  "__source" === o ||
                  ("ref" === o && void 0 === t.ref) ||
                  (r[o] = t[o]);
            var o = arguments.length - 2;
            if (1 === o) r.children = n;
            else if (1 < o) {
              for (var l = Array(o), i = 0; i < o; i++) l[i] = arguments[i + 2];
              r.children = l;
            }
            return _(e.type, a, void 0, 0, 0, r);
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = e),
              (e.Consumer = { $$typeof: i, _context: e }),
              e
            );
          }),
          (t.createElement = function (e, t, n) {
            var r,
              a = {},
              o = null;
            if (null != t)
              for (r in (void 0 !== t.key && (o = "" + t.key), t))
                S.call(t, r) &&
                  "key" !== r &&
                  "__self" !== r &&
                  "__source" !== r &&
                  (a[r] = t[r]);
            var l = arguments.length - 2;
            if (1 === l) a.children = n;
            else if (1 < l) {
              for (var i = Array(l), u = 0; u < l; u++) i[u] = arguments[u + 2];
              a.children = i;
            }
            if (e && e.defaultProps)
              for (r in (l = e.defaultProps)) void 0 === a[r] && (a[r] = l[r]);
            return _(e, o, void 0, 0, 0, a);
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = E),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: O,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = x.T,
              n = {};
            x.T = n;
            try {
              var r = e(),
                a = x.S;
              (null !== a && a(n, r),
                "object" === typeof r &&
                  null !== r &&
                  "function" === typeof r.then &&
                  r.then(L, z));
            } catch (o) {
              z(o);
            } finally {
              x.T = t;
            }
          }),
          (t.unstable_useCacheRefresh = function () {
            return x.H.useCacheRefresh();
          }),
          (t.use = function (e) {
            return x.H.use(e);
          }),
          (t.useActionState = function (e, t, n) {
            return x.H.useActionState(e, t, n);
          }),
          (t.useCallback = function (e, t) {
            return x.H.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return x.H.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e, t) {
            return x.H.useDeferredValue(e, t);
          }),
          (t.useEffect = function (e, t, n) {
            var r = x.H;
            if ("function" === typeof n)
              throw Error(
                "useEffect CRUD overload is not enabled in this build of React.",
              );
            return r.useEffect(e, t);
          }),
          (t.useId = function () {
            return x.H.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return x.H.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return x.H.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return x.H.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return x.H.useMemo(e, t);
          }),
          (t.useOptimistic = function (e, t) {
            return x.H.useOptimistic(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return x.H.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return x.H.useRef(e);
          }),
          (t.useState = function (e) {
            return x.H.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return x.H.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return x.H.useTransition();
          }),
          (t.version = "19.1.0"));
      },
      358: (e, t) => {
        const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
          r = /^[\u0021-\u003A\u003C-\u007E]*$/,
          a =
            /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
          o = /^[\u0020-\u003A\u003D-\u007E]*$/,
          l = Object.prototype.toString,
          i = (() => {
            const e = function () {};
            return ((e.prototype = Object.create(null)), e);
          })();
        function u(e, t, n) {
          do {
            const n = e.charCodeAt(t);
            if (32 !== n && 9 !== n) return t;
          } while (++t < n);
          return n;
        }
        function s(e, t, n) {
          for (; t > n; ) {
            const n = e.charCodeAt(--t);
            if (32 !== n && 9 !== n) return t + 1;
          }
          return n;
        }
        function c(e) {
          if (-1 === e.indexOf("%")) return e;
          try {
            return decodeURIComponent(e);
          } catch (t) {
            return e;
          }
        }
      },
      365: (e, t, n) => {
        var r = n(43);
        var a =
            "function" === typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e === 1 / t)) ||
                    (e !== e && t !== t)
                  );
                },
          o = r.useSyncExternalStore,
          l = r.useRef,
          i = r.useEffect,
          u = r.useMemo,
          s = r.useDebugValue;
        t.useSyncExternalStoreWithSelector = function (e, t, n, r, c) {
          var d = l(null);
          if (null === d.current) {
            var f = { hasValue: !1, value: null };
            d.current = f;
          } else f = d.current;
          d = u(
            function () {
              function e(e) {
                if (!i) {
                  if (
                    ((i = !0), (o = e), (e = r(e)), void 0 !== c && f.hasValue)
                  ) {
                    var t = f.value;
                    if (c(t, e)) return (l = t);
                  }
                  return (l = e);
                }
                if (((t = l), a(o, e))) return t;
                var n = r(e);
                return void 0 !== c && c(t, n)
                  ? ((o = e), t)
                  : ((o = e), (l = n));
              }
              var o,
                l,
                i = !1,
                u = void 0 === n ? null : n;
              return [
                function () {
                  return e(t());
                },
                null === u
                  ? void 0
                  : function () {
                      return e(u());
                    },
              ];
            },
            [t, n, r, c],
          );
          var p = o(e, d[0], d[1]);
          return (
            i(
              function () {
                ((f.hasValue = !0), (f.value = p));
              },
              [p],
            ),
            s(p),
            p
          );
        };
      },
      391: (e, t, n) => {
        (!(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(4)));
      },
      579: (e, t, n) => {
        e.exports = n(799);
      },
      672: (e, t, n) => {
        var r = n(43);
        function a(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function o() {}
        var l = {
            d: {
              f: o,
              r: function () {
                throw Error(a(522));
              },
              D: o,
              C: o,
              L: o,
              m: o,
              X: o,
              S: o,
              M: o,
            },
            p: 0,
            findDOMNode: null,
          },
          i = Symbol.for("react.portal");
        var u =
          r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function s(e, t) {
          return "font" === e
            ? ""
            : "string" === typeof t
              ? "use-credentials" === t
                ? t
                : ""
              : void 0;
        }
        ((t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (
              !t ||
              (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)
            )
              throw Error(a(299));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: i,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.flushSync = function (e) {
            var t = u.T,
              n = l.p;
            try {
              if (((u.T = null), (l.p = 2), e)) return e();
            } finally {
              ((u.T = t), (l.p = n), l.d.f());
            }
          }),
          (t.preconnect = function (e, t) {
            "string" === typeof e &&
              (t
                ? (t =
                    "string" === typeof (t = t.crossOrigin)
                      ? "use-credentials" === t
                        ? t
                        : ""
                      : void 0)
                : (t = null),
              l.d.C(e, t));
          }),
          (t.prefetchDNS = function (e) {
            "string" === typeof e && l.d.D(e);
          }),
          (t.preinit = function (e, t) {
            if ("string" === typeof e && t && "string" === typeof t.as) {
              var n = t.as,
                r = s(n, t.crossOrigin),
                a = "string" === typeof t.integrity ? t.integrity : void 0,
                o =
                  "string" === typeof t.fetchPriority
                    ? t.fetchPriority
                    : void 0;
              "style" === n
                ? l.d.S(
                    e,
                    "string" === typeof t.precedence ? t.precedence : void 0,
                    { crossOrigin: r, integrity: a, fetchPriority: o },
                  )
                : "script" === n &&
                  l.d.X(e, {
                    crossOrigin: r,
                    integrity: a,
                    fetchPriority: o,
                    nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                  });
            }
          }),
          (t.preinitModule = function (e, t) {
            if ("string" === typeof e)
              if ("object" === typeof t && null !== t) {
                if (null == t.as || "script" === t.as) {
                  var n = s(t.as, t.crossOrigin);
                  l.d.M(e, {
                    crossOrigin: n,
                    integrity:
                      "string" === typeof t.integrity ? t.integrity : void 0,
                    nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                  });
                }
              } else null == t && l.d.M(e);
          }),
          (t.preload = function (e, t) {
            if (
              "string" === typeof e &&
              "object" === typeof t &&
              null !== t &&
              "string" === typeof t.as
            ) {
              var n = t.as,
                r = s(n, t.crossOrigin);
              l.d.L(e, n, {
                crossOrigin: r,
                integrity:
                  "string" === typeof t.integrity ? t.integrity : void 0,
                nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                type: "string" === typeof t.type ? t.type : void 0,
                fetchPriority:
                  "string" === typeof t.fetchPriority
                    ? t.fetchPriority
                    : void 0,
                referrerPolicy:
                  "string" === typeof t.referrerPolicy
                    ? t.referrerPolicy
                    : void 0,
                imageSrcSet:
                  "string" === typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                imageSizes:
                  "string" === typeof t.imageSizes ? t.imageSizes : void 0,
                media: "string" === typeof t.media ? t.media : void 0,
              });
            }
          }),
          (t.preloadModule = function (e, t) {
            if ("string" === typeof e)
              if (t) {
                var n = s(t.as, t.crossOrigin);
                l.d.m(e, {
                  as:
                    "string" === typeof t.as && "script" !== t.as
                      ? t.as
                      : void 0,
                  crossOrigin: n,
                  integrity:
                    "string" === typeof t.integrity ? t.integrity : void 0,
                });
              } else l.d.m(e);
          }),
          (t.requestFormReset = function (e) {
            l.d.r(e);
          }),
          (t.unstable_batchedUpdates = function (e, t) {
            return e(t);
          }),
          (t.useFormState = function (e, t, n) {
            return u.H.useFormState(e, t, n);
          }),
          (t.useFormStatus = function () {
            return u.H.useHostTransitionStatus();
          }),
          (t.version = "19.1.0"));
      },
      799: (e, t) => {
        var n = Symbol.for("react.transitional.element"),
          r = Symbol.for("react.fragment");
        function a(e, t, r) {
          var a = null;
          if (
            (void 0 !== r && (a = "" + r),
            void 0 !== t.key && (a = "" + t.key),
            "key" in t)
          )
            for (var o in ((r = {}), t)) "key" !== o && (r[o] = t[o]);
          else r = t;
          return (
            (t = r.ref),
            {
              $$typeof: n,
              type: e,
              key: a,
              ref: void 0 !== t ? t : null,
              props: r,
            }
          );
        }
        ((t.Fragment = r), (t.jsx = a), (t.jsxs = a));
      },
      853: (e, t, n) => {
        e.exports = n(896);
      },
      896: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            ((e[r] = t), (e[n] = a), (n = r));
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                s = i + 1,
                c = e[s];
              if (0 > o(u, n))
                s < a && 0 > o(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[i] = n), (r = i));
              else {
                if (!(s < a && 0 > o(c, n))) break e;
                ((e[r] = c), (e[s] = n), (r = s));
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          ((t.unstable_now = void 0),
          "object" === typeof performance &&
            "function" === typeof performance.now)
        ) {
          var l = performance;
          t.unstable_now = function () {
            return l.now();
          };
        } else {
          var i = Date,
            u = i.now();
          t.unstable_now = function () {
            return i.now() - u;
          };
        }
        var s = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          m = !1,
          h = !1,
          g = !1,
          y = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          b = "function" === typeof clearTimeout ? clearTimeout : null,
          w = "undefined" !== typeof setImmediate ? setImmediate : null;
        function k(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              (a(c), (t.sortIndex = t.expirationTime), n(s, t));
            }
            t = r(c);
          }
        }
        function x(e) {
          if (((g = !1), k(e), !h))
            if (null !== r(s)) ((h = !0), _ || ((_ = !0), S()));
            else {
              var t = r(c);
              null !== t && z(x, t.startTime - e);
            }
        }
        var S,
          _ = !1,
          E = -1,
          C = 5,
          N = -1;
        function j() {
          return !!y || !(t.unstable_now() - N < C);
        }
        function P() {
          if (((y = !1), _)) {
            var e = t.unstable_now();
            N = e;
            var n = !0;
            try {
              e: {
                ((h = !1), g && ((g = !1), b(E), (E = -1)), (m = !0));
                var o = p;
                try {
                  t: {
                    for (
                      k(e), f = r(s);
                      null !== f && !(f.expirationTime > e && j());

                    ) {
                      var l = f.callback;
                      if ("function" === typeof l) {
                        ((f.callback = null), (p = f.priorityLevel));
                        var i = l(f.expirationTime <= e);
                        if (((e = t.unstable_now()), "function" === typeof i)) {
                          ((f.callback = i), k(e), (n = !0));
                          break t;
                        }
                        (f === r(s) && a(s), k(e));
                      } else a(s);
                      f = r(s);
                    }
                    if (null !== f) n = !0;
                    else {
                      var u = r(c);
                      (null !== u && z(x, u.startTime - e), (n = !1));
                    }
                  }
                  break e;
                } finally {
                  ((f = null), (p = o), (m = !1));
                }
                n = void 0;
              }
            } finally {
              n ? S() : (_ = !1);
            }
          }
        }
        if ("function" === typeof w)
          S = function () {
            w(P);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var T = new MessageChannel(),
            O = T.port2;
          ((T.port1.onmessage = P),
            (S = function () {
              O.postMessage(null);
            }));
        } else
          S = function () {
            v(P, 0);
          };
        function z(e, n) {
          E = v(function () {
            e(t.unstable_now());
          }, n);
        }
        ((t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_requestPaint = function () {
            y = !0;
          }),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var l = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? l + o : l)
                : (o = l),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (i = o + i),
                sortIndex: -1,
              }),
              o > l
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (g ? (b(E), (E = -1)) : (g = !0), z(x, o - l)))
                : ((e.sortIndex = i),
                  n(s, e),
                  h || m || ((h = !0), _ || ((_ = !0), S()))),
              e
            );
          }),
          (t.unstable_shouldYield = j),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          }));
      },
      950: (e, t, n) => {
        (!(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(672)));
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return (e[r](o, o.exports, n), o.exports);
  }
  ((n.m = e),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => "static/js/" + e + ".7dd78835.chunk.js"),
    (n.miniCssF = (e) => {}),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "sapataria-capacita-brasil-react:";
      n.l = (r, a, o, l) => {
        if (e[r]) e[r].push(a);
        else {
          var i, u;
          if (void 0 !== o)
            for (
              var s = document.getElementsByTagName("script"), c = 0;
              c < s.length;
              c++
            ) {
              var d = s[c];
              if (
                d.getAttribute("src") == r ||
                d.getAttribute("data-webpack") == t + o
              ) {
                i = d;
                break;
              }
            }
          (i ||
            ((u = !0),
            ((i = document.createElement("script")).charset = "utf-8"),
            (i.timeout = 120),
            n.nc && i.setAttribute("nonce", n.nc),
            i.setAttribute("data-webpack", t + o),
            (i.src = r)),
            (e[r] = [a]));
          var f = (t, n) => {
              ((i.onerror = i.onload = null), clearTimeout(p));
              var a = e[r];
              if (
                (delete e[r],
                i.parentNode && i.parentNode.removeChild(i),
                a && a.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              f.bind(null, void 0, { type: "timeout", target: i }),
              12e4,
            );
          ((i.onerror = f.bind(null, i.onerror)),
            (i.onload = f.bind(null, i.onload)),
            u && document.head.appendChild(i));
        }
      };
    })(),
    (n.r = (e) => {
      ("undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (n.p = "/"),
    (() => {
      var e = { 792: 0 };
      n.f.j = (t, r) => {
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var o = new Promise((n, r) => (a = e[t] = [n, r]));
            r.push((a[2] = o));
            var l = n.p + n.u(t),
              i = new Error();
            n.l(
              l,
              (r) => {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    l = r && r.target && r.target.src;
                  ((i.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + l + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = o),
                    (i.request = l),
                    a[1](i));
                }
              },
              "chunk-" + t,
              t,
            );
          }
      };
      var t = (t, r) => {
          var a,
            o,
            l = r[0],
            i = r[1],
            u = r[2],
            s = 0;
          if (l.some((t) => 0 !== e[t])) {
            for (a in i) n.o(i, a) && (n.m[a] = i[a]);
            if (u) u(n);
          }
          for (t && t(r); s < l.length; s++)
            ((o = l[s]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0));
        },
        r = (self.webpackChunksapataria_capacita_brasil_react =
          self.webpackChunksapataria_capacita_brasil_react || []);
      (r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r))));
    })());
  var r = n(43),
    a = n(391);
  function o(e, t) {
    if (null == e) return {};
    var n,
      r,
      a = (function (e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
          if ({}.hasOwnProperty.call(e, r)) {
            if (-1 !== t.indexOf(r)) continue;
            n[r] = e[r];
          }
        return n;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (r = 0; r < o.length; r++)
        ((n = o[r]),
          -1 === t.indexOf(n) &&
            {}.propertyIsEnumerable.call(e, n) &&
            (a[n] = e[n]));
    }
    return a;
  }
  function l(e) {
    return (
      (l =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      l(e)
    );
  }
  function i(e) {
    var t = (function (e, t) {
      if ("object" != l(e) || !e) return e;
      var n = e[Symbol.toPrimitive];
      if (void 0 !== n) {
        var r = n.call(e, t || "default");
        if ("object" != l(r)) return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" == l(t) ? t : t + "";
  }
  function u(e, t, n) {
    return (
      (t = i(t)) in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r));
    }
    return n;
  }
  function c(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? s(Object(n), !0).forEach(function (t) {
            u(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : s(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t),
              );
            });
    }
    return e;
  }
  n(358);
  const d = ["sri"],
    f = ["page"],
    p = ["page", "matches"],
    m = [
      "onClick",
      "discover",
      "prefetch",
      "relative",
      "reloadDocument",
      "replace",
      "state",
      "target",
      "to",
      "preventScrollReset",
      "viewTransition",
    ],
    h = [
      "aria-current",
      "caseSensitive",
      "className",
      "end",
      "style",
      "to",
      "viewTransition",
      "children",
    ],
    g = [
      "discover",
      "fetcherKey",
      "navigate",
      "reloadDocument",
      "replace",
      "state",
      "method",
      "action",
      "onSubmit",
      "relative",
      "preventScrollReset",
      "viewTransition",
    ];
  var y = "popstate";
  function v() {
    return E(
      function (e, t) {
        let { pathname: n, search: r, hash: a } = e.location;
        return x(
          "",
          { pathname: n, search: r, hash: a },
          (t.state && t.state.usr) || null,
          (t.state && t.state.key) || "default",
        );
      },
      function (e, t) {
        return "string" === typeof t ? t : S(t);
      },
      null,
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    );
  }
  function b(e, t) {
    if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t);
  }
  function w(e, t) {
    if (!e) {
      "undefined" !== typeof console && console.warn(t);
      try {
        throw new Error(t);
      } catch (n) {}
    }
  }
  function k(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function x(e, t) {
    let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      r = arguments.length > 3 ? arguments[3] : void 0;
    return c(
      c(
        {
          pathname: "string" === typeof e ? e : e.pathname,
          search: "",
          hash: "",
        },
        "string" === typeof t ? _(t) : t,
      ),
      {},
      {
        state: n,
        key: (t && t.key) || r || Math.random().toString(36).substring(2, 10),
      },
    );
  }
  function S(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
      n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
      r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
      t
    );
  }
  function _(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
      let r = e.indexOf("?");
      (r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
        e && (t.pathname = e));
    }
    return t;
  }
  function E(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
      { window: a = document.defaultView, v5Compat: o = !1 } = r,
      l = a.history,
      i = "POP",
      u = null,
      s = d();
    function d() {
      return (l.state || { idx: null }).idx;
    }
    function f() {
      i = "POP";
      let e = d(),
        t = null == e ? null : e - s;
      ((s = e), u && u({ action: i, location: m.location, delta: t }));
    }
    function p(e) {
      return C(e);
    }
    null == s &&
      ((s = 0), l.replaceState(c(c({}, l.state), {}, { idx: s }), ""));
    let m = {
      get action() {
        return i;
      },
      get location() {
        return e(a, l);
      },
      listen(e) {
        if (u) throw new Error("A history only accepts one active listener");
        return (
          a.addEventListener(y, f),
          (u = e),
          () => {
            (a.removeEventListener(y, f), (u = null));
          }
        );
      },
      createHref: (e) => t(a, e),
      createURL: p,
      encodeLocation(e) {
        let t = p(e);
        return { pathname: t.pathname, search: t.search, hash: t.hash };
      },
      push: function (e, t) {
        i = "PUSH";
        let r = x(m.location, e, t);
        (n && n(r, e), (s = d() + 1));
        let c = k(r, s),
          f = m.createHref(r);
        try {
          l.pushState(c, "", f);
        } catch (p) {
          if (p instanceof DOMException && "DataCloneError" === p.name) throw p;
          a.location.assign(f);
        }
        o && u && u({ action: i, location: m.location, delta: 1 });
      },
      replace: function (e, t) {
        i = "REPLACE";
        let r = x(m.location, e, t);
        (n && n(r, e), (s = d()));
        let a = k(r, s),
          c = m.createHref(r);
        (l.replaceState(a, "", c),
          o && u && u({ action: i, location: m.location, delta: 0 }));
      },
      go: (e) => l.go(e),
    };
    return m;
  }
  function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = "http://localhost";
    ("undefined" !== typeof window &&
      (n =
        "null" !== window.location.origin
          ? window.location.origin
          : window.location.href),
      b(n, "No window.location.(origin|href) available to create URL"));
    let r = "string" === typeof e ? e : S(e);
    return (
      (r = r.replace(/ $/, "%20")),
      !t && r.startsWith("//") && (r = n + r),
      new URL(r, n)
    );
  }
  new WeakMap();
  function N(e, t) {
    return j(
      e,
      t,
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/",
      !1,
    );
  }
  function j(e, t, n, r) {
    let a = $(("string" === typeof t ? _(t) : t).pathname || "/", n);
    if (null == a) return null;
    let o = P(e);
    !(function (e) {
      e.sort((e, t) =>
        e.score !== t.score
          ? t.score - e.score
          : (function (e, t) {
              let n =
                e.length === t.length &&
                e.slice(0, -1).every((e, n) => e === t[n]);
              return n ? e[e.length - 1] - t[t.length - 1] : 0;
            })(
              e.routesMeta.map((e) => e.childrenIndex),
              t.routesMeta.map((e) => e.childrenIndex),
            ),
      );
    })(o);
    let l = null;
    for (let i = 0; null == l && i < o.length; ++i) {
      let e = B(a);
      l = I(o[i], e, r);
    }
    return l;
  }
  function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
      r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
      a = (e, a, o) => {
        let l = {
          relativePath: void 0 === o ? e.path || "" : o,
          caseSensitive: !0 === e.caseSensitive,
          childrenIndex: a,
          route: e,
        };
        l.relativePath.startsWith("/") &&
          (b(
            l.relativePath.startsWith(r),
            'Absolute route path "'
              .concat(l.relativePath, '" nested under path "')
              .concat(
                r,
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
              ),
          ),
          (l.relativePath = l.relativePath.slice(r.length)));
        let i = K([r, l.relativePath]),
          u = n.concat(l);
        (e.children &&
          e.children.length > 0 &&
          (b(
            !0 !== e.index,
            'Index routes must not have child routes. Please remove all child routes from route path "'.concat(
              i,
              '".',
            ),
          ),
          P(e.children, t, u, i)),
          (null != e.path || e.index) &&
            t.push({ path: i, score: D(i, e.index), routesMeta: u }));
      };
    return (
      e.forEach((e, t) => {
        var n;
        if (
          "" !== e.path &&
          null !== (n = e.path) &&
          void 0 !== n &&
          n.includes("?")
        )
          for (let r of T(e.path)) a(e, t, r);
        else a(e, t);
      }),
      t
    );
  }
  function T(e) {
    let t = e.split("/");
    if (0 === t.length) return [];
    let [n, ...r] = t,
      a = n.endsWith("?"),
      o = n.replace(/\?$/, "");
    if (0 === r.length) return a ? [o, ""] : [o];
    let l = T(r.join("/")),
      i = [];
    return (
      i.push(...l.map((e) => ("" === e ? o : [o, e].join("/")))),
      a && i.push(...l),
      i.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
    );
  }
  var O = /^:[\w-]+$/,
    z = 3,
    L = 2,
    R = 1,
    A = 10,
    F = -2,
    M = (e) => "*" === e;
  function D(e, t) {
    let n = e.split("/"),
      r = n.length;
    return (
      n.some(M) && (r += F),
      t && (r += L),
      n
        .filter((e) => !M(e))
        .reduce((e, t) => e + (O.test(t) ? z : "" === t ? R : A), r)
    );
  }
  function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      { routesMeta: r } = e,
      a = {},
      o = "/",
      l = [];
    for (let i = 0; i < r.length; ++i) {
      let e = r[i],
        u = i === r.length - 1,
        s = "/" === o ? t : t.slice(o.length) || "/",
        c = U(
          { path: e.relativePath, caseSensitive: e.caseSensitive, end: u },
          s,
        ),
        d = e.route;
      if (
        (!c &&
          u &&
          n &&
          !r[r.length - 1].route.index &&
          (c = U(
            { path: e.relativePath, caseSensitive: e.caseSensitive, end: !1 },
            s,
          )),
        !c)
      )
        return null;
      (Object.assign(a, c.params),
        l.push({
          params: a,
          pathname: K([o, c.pathname]),
          pathnameBase: X(K([o, c.pathnameBase])),
          route: d,
        }),
        "/" !== c.pathnameBase && (o = K([o, c.pathnameBase])));
    }
    return l;
  }
  function U(e, t) {
    "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = H(e.path, e.caseSensitive, e.end),
      a = t.match(n);
    if (!a) return null;
    let o = a[0],
      l = o.replace(/(.)\/+$/, "$1"),
      i = a.slice(1);
    return {
      params: r.reduce((e, t, n) => {
        let { paramName: r, isOptional: a } = t;
        if ("*" === r) {
          let e = i[n] || "";
          l = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1");
        }
        const u = i[n];
        return ((e[r] = a && !u ? void 0 : (u || "").replace(/%2F/g, "/")), e);
      }, {}),
      pathname: o,
      pathnameBase: l,
      pattern: e,
    };
  }
  function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
    w(
      "*" === e || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "'
        .concat(e, '" will be treated as if it were "')
        .concat(
          e.replace(/\*$/, "/*"),
          '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "',
        )
        .concat(e.replace(/\*$/, "/*"), '".'),
    );
    let r = [],
      a =
        "^" +
        e
          .replace(/\/*\*?$/, "")
          .replace(/^\/*/, "/")
          .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
          .replace(
            /\/:([\w-]+)(\?)?/g,
            (e, t, n) => (
              r.push({ paramName: t, isOptional: null != n }),
              n ? "/?([^\\/]+)?" : "/([^\\/]+)"
            ),
          );
    return (
      e.endsWith("*")
        ? (r.push({ paramName: "*" }),
          (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
        : n
          ? (a += "\\/*$")
          : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))"),
      [new RegExp(a, t ? void 0 : "i"), r]
    );
  }
  function B(e) {
    try {
      return e
        .split("/")
        .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
        .join("/");
    } catch (t) {
      return (
        w(
          !1,
          'The URL path "'
            .concat(
              e,
              '" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (',
            )
            .concat(t, ")."),
        ),
        e
      );
    }
  }
  function $(e, t) {
    if ("/" === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && "/" !== r ? null : e.slice(n) || "/";
  }
  function V(e, t, n, r) {
    return "Cannot include a '"
      .concat(e, "' character in a manually specified `to.")
      .concat(t, "` field [")
      .concat(JSON.stringify(r), "].  Please separate it out to the `to.")
      .concat(
        n,
        '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.',
      );
  }
  function W(e) {
    return e.filter(
      (e, t) => 0 === t || (e.route.path && e.route.path.length > 0),
    );
  }
  function q(e) {
    let t = W(e);
    return t.map((e, n) => (n === t.length - 1 ? e.pathname : e.pathnameBase));
  }
  function Q(e, t, n) {
    let r,
      a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    "string" === typeof e
      ? (r = _(e))
      : ((r = c({}, e)),
        b(
          !r.pathname || !r.pathname.includes("?"),
          V("?", "pathname", "search", r),
        ),
        b(
          !r.pathname || !r.pathname.includes("#"),
          V("#", "pathname", "hash", r),
        ),
        b(!r.search || !r.search.includes("#"), V("#", "search", "hash", r)));
    let o,
      l = "" === e || "" === r.pathname,
      i = l ? "/" : r.pathname;
    if (null == i) o = n;
    else {
      let e = t.length - 1;
      if (!a && i.startsWith("..")) {
        let t = i.split("/");
        for (; ".." === t[0]; ) (t.shift(), (e -= 1));
        r.pathname = t.join("/");
      }
      o = e >= 0 ? t[e] : "/";
    }
    let u = (function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "/",
          {
            pathname: n,
            search: r = "",
            hash: a = "",
          } = "string" === typeof e ? _(e) : e,
          o = n
            ? n.startsWith("/")
              ? n
              : (function (e, t) {
                  let n = t.replace(/\/+$/, "").split("/");
                  return (
                    e.split("/").forEach((e) => {
                      ".." === e
                        ? n.length > 1 && n.pop()
                        : "." !== e && n.push(e);
                    }),
                    n.length > 1 ? n.join("/") : "/"
                  );
                })(n, t)
            : t;
        return { pathname: o, search: Y(r), hash: G(a) };
      })(r, o),
      s = i && "/" !== i && i.endsWith("/"),
      d = (l || "." === i) && n.endsWith("/");
    return (u.pathname.endsWith("/") || (!s && !d) || (u.pathname += "/"), u);
  }
  var K = (e) => e.join("/").replace(/\/\/+/g, "/"),
    X = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Y = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
    G = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
  function J(e) {
    return (
      null != e &&
      "number" === typeof e.status &&
      "string" === typeof e.statusText &&
      "boolean" === typeof e.internal &&
      "data" in e
    );
  }
  var Z = ["POST", "PUT", "PATCH", "DELETE"],
    ee = (new Set(Z), ["GET", ...Z]);
  (new Set(ee), Symbol("ResetLoaderData"));
  var te = r.createContext(null);
  te.displayName = "DataRouter";
  var ne = r.createContext(null);
  ne.displayName = "DataRouterState";
  var re = r.createContext({ isTransitioning: !1 });
  re.displayName = "ViewTransition";
  var ae = r.createContext(new Map());
  ae.displayName = "Fetchers";
  var oe = r.createContext(null);
  oe.displayName = "Await";
  var le = r.createContext(null);
  le.displayName = "Navigation";
  var ie = r.createContext(null);
  ie.displayName = "Location";
  var ue = r.createContext({ outlet: null, matches: [], isDataRoute: !1 });
  ue.displayName = "Route";
  var se = r.createContext(null);
  se.displayName = "RouteError";
  function ce() {
    return null != r.useContext(ie);
  }
  function de() {
    return (
      b(
        ce(),
        "useLocation() may be used only in the context of a <Router> component.",
      ),
      r.useContext(ie).location
    );
  }
  var fe =
    "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
  function pe(e) {
    r.useContext(le).static || r.useLayoutEffect(e);
  }
  function me() {
    let { isDataRoute: e } = r.useContext(ue);
    return e
      ? (function () {
          let { router: e } = _e("useNavigate"),
            t = Ce("useNavigate"),
            n = r.useRef(!1);
          pe(() => {
            n.current = !0;
          });
          let a = r.useCallback(
            async function (r) {
              let a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              (w(n.current, fe),
                n.current &&
                  ("number" === typeof r
                    ? e.navigate(r)
                    : await e.navigate(r, c({ fromRouteId: t }, a))));
            },
            [e, t],
          );
          return a;
        })()
      : (function () {
          b(
            ce(),
            "useNavigate() may be used only in the context of a <Router> component.",
          );
          let e = r.useContext(te),
            { basename: t, navigator: n } = r.useContext(le),
            { matches: a } = r.useContext(ue),
            { pathname: o } = de(),
            l = JSON.stringify(q(a)),
            i = r.useRef(!1);
          pe(() => {
            i.current = !0;
          });
          let u = r.useCallback(
            function (r) {
              let a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if ((w(i.current, fe), !i.current)) return;
              if ("number" === typeof r) return void n.go(r);
              let u = Q(r, JSON.parse(l), o, "path" === a.relative);
              (null == e &&
                "/" !== t &&
                (u.pathname = "/" === u.pathname ? t : K([t, u.pathname])),
                (a.replace ? n.replace : n.push)(u, a.state, a));
            },
            [t, n, l, o, e],
          );
          return u;
        })();
  }
  r.createContext(null);
  function he() {
    let { matches: e } = r.useContext(ue),
      t = e[e.length - 1];
    return t ? t.params : {};
  }
  function ge(e) {
    let { relative: t } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      { matches: n } = r.useContext(ue),
      { pathname: a } = de(),
      o = JSON.stringify(q(n));
    return r.useMemo(() => Q(e, JSON.parse(o), a, "path" === t), [e, o, a, t]);
  }
  function ye(e, t, n, a) {
    b(
      ce(),
      "useRoutes() may be used only in the context of a <Router> component.",
    );
    let { navigator: o } = r.useContext(le),
      { matches: l } = r.useContext(ue),
      i = l[l.length - 1],
      u = i ? i.params : {},
      s = i ? i.pathname : "/",
      d = i ? i.pathnameBase : "/",
      f = i && i.route;
    {
      let e = (f && f.path) || "";
      Pe(
        s,
        !f || e.endsWith("*") || e.endsWith("*?"),
        'You rendered descendant <Routes> (or called `useRoutes()`) at "'
          .concat(s, '" (under <Route path="')
          .concat(
            e,
            '">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won\'t match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="',
          )
          .concat(e, '"> to <Route path="')
          .concat("/" === e ? "*" : "".concat(e, "/*"), '">.'),
      );
    }
    let p,
      m = de();
    if (t) {
      var h;
      let e = "string" === typeof t ? _(t) : t;
      (b(
        "/" === d ||
          (null === (h = e.pathname) || void 0 === h
            ? void 0
            : h.startsWith(d)),
        'When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "'
          .concat(d, '" but pathname "')
          .concat(e.pathname, '" was given in the `location` prop.'),
      ),
        (p = e));
    } else p = m;
    let g = p.pathname || "/",
      y = g;
    if ("/" !== d) {
      let e = d.replace(/^\//, "").split("/");
      y = "/" + g.replace(/^\//, "").split("/").slice(e.length).join("/");
    }
    let v = N(e, { pathname: y });
    (w(
      f || null != v,
      'No routes matched location "'
        .concat(p.pathname)
        .concat(p.search)
        .concat(p.hash, '" '),
    ),
      w(
        null == v ||
          void 0 !== v[v.length - 1].route.element ||
          void 0 !== v[v.length - 1].route.Component ||
          void 0 !== v[v.length - 1].route.lazy,
        'Matched leaf route at location "'
          .concat(p.pathname)
          .concat(p.search)
          .concat(
            p.hash,
            '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.',
          ),
      ));
    let k = xe(
      v &&
        v.map((e) =>
          Object.assign({}, e, {
            params: Object.assign({}, u, e.params),
            pathname: K([
              d,
              o.encodeLocation
                ? o.encodeLocation(e.pathname).pathname
                : e.pathname,
            ]),
            pathnameBase:
              "/" === e.pathnameBase
                ? d
                : K([
                    d,
                    o.encodeLocation
                      ? o.encodeLocation(e.pathnameBase).pathname
                      : e.pathnameBase,
                  ]),
          }),
        ),
      l,
      n,
      a,
    );
    return t && k
      ? r.createElement(
          ie.Provider,
          {
            value: {
              location: c(
                {
                  pathname: "/",
                  search: "",
                  hash: "",
                  state: null,
                  key: "default",
                },
                p,
              ),
              navigationType: "POP",
            },
          },
          k,
        )
      : k;
  }
  function ve() {
    let e = Ne(),
      t = J(e)
        ? "".concat(e.status, " ").concat(e.statusText)
        : e instanceof Error
          ? e.message
          : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      a = "rgba(200,200,200, 0.5)",
      o = { padding: "0.5rem", backgroundColor: a },
      l = { padding: "2px 4px", backgroundColor: a },
      i = null;
    return (
      console.error("Error handled by React Router default ErrorBoundary:", e),
      (i = r.createElement(
        r.Fragment,
        null,
        r.createElement("p", null, "\ud83d\udcbf Hey developer \ud83d\udc4b"),
        r.createElement(
          "p",
          null,
          "You can provide a way better UX than this when your app throws errors by providing your own ",
          r.createElement("code", { style: l }, "ErrorBoundary"),
          " or",
          " ",
          r.createElement("code", { style: l }, "errorElement"),
          " prop on your route.",
        ),
      )),
      r.createElement(
        r.Fragment,
        null,
        r.createElement("h2", null, "Unexpected Application Error!"),
        r.createElement("h3", { style: { fontStyle: "italic" } }, t),
        n ? r.createElement("pre", { style: o }, n) : null,
        i,
      )
    );
  }
  var be = r.createElement(ve, null),
    we = class extends r.Component {
      constructor(e) {
        (super(e),
          (this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error,
          }));
      }
      static getDerivedStateFromError(e) {
        return { error: e };
      }
      static getDerivedStateFromProps(e, t) {
        return t.location !== e.location ||
          ("idle" !== t.revalidation && "idle" === e.revalidation)
          ? {
              error: e.error,
              location: e.location,
              revalidation: e.revalidation,
            }
          : {
              error: void 0 !== e.error ? e.error : t.error,
              location: t.location,
              revalidation: e.revalidation || t.revalidation,
            };
      }
      componentDidCatch(e, t) {
        console.error(
          "React Router caught the following error during render",
          e,
          t,
        );
      }
      render() {
        return void 0 !== this.state.error
          ? r.createElement(
              ue.Provider,
              { value: this.props.routeContext },
              r.createElement(se.Provider, {
                value: this.state.error,
                children: this.props.component,
              }),
            )
          : this.props.children;
      }
    };
  function ke(e) {
    let { routeContext: t, match: n, children: a } = e,
      o = r.useContext(te);
    return (
      o &&
        o.static &&
        o.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (o.staticContext._deepestRenderedBoundaryId = n.route.id),
      r.createElement(ue.Provider, { value: t }, a)
    );
  }
  function xe(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (null == e) {
      if (!n) return null;
      if (n.errors) e = n.matches;
      else {
        if (0 !== t.length || n.initialized || !(n.matches.length > 0))
          return null;
        e = n.matches;
      }
    }
    let a = e,
      o = null === n || void 0 === n ? void 0 : n.errors;
    if (null != o) {
      let e = a.findIndex(
        (e) =>
          e.route.id &&
          void 0 !== (null === o || void 0 === o ? void 0 : o[e.route.id]),
      );
      (b(
        e >= 0,
        "Could not find a matching route for errors on route IDs: ".concat(
          Object.keys(o).join(","),
        ),
      ),
        (a = a.slice(0, Math.min(a.length, e + 1))));
    }
    let l = !1,
      i = -1;
    if (n)
      for (let r = 0; r < a.length; r++) {
        let e = a[r];
        if (
          ((e.route.HydrateFallback || e.route.hydrateFallbackElement) &&
            (i = r),
          e.route.id)
        ) {
          let { loaderData: t, errors: r } = n,
            o =
              e.route.loader &&
              !t.hasOwnProperty(e.route.id) &&
              (!r || void 0 === r[e.route.id]);
          if (e.route.lazy || o) {
            ((l = !0), (a = i >= 0 ? a.slice(0, i + 1) : [a[0]]));
            break;
          }
        }
      }
    return a.reduceRight((e, u, s) => {
      let c,
        d = !1,
        f = null,
        p = null;
      n &&
        ((c = o && u.route.id ? o[u.route.id] : void 0),
        (f = u.route.errorElement || be),
        l &&
          (i < 0 && 0 === s
            ? (Pe(
                "route-fallback",
                !1,
                "No `HydrateFallback` element provided to render during initial hydration",
              ),
              (d = !0),
              (p = null))
            : i === s &&
              ((d = !0), (p = u.route.hydrateFallbackElement || null))));
      let m = t.concat(a.slice(0, s + 1)),
        h = () => {
          let t;
          return (
            (t = c
              ? f
              : d
                ? p
                : u.route.Component
                  ? r.createElement(u.route.Component, null)
                  : u.route.element
                    ? u.route.element
                    : e),
            r.createElement(ke, {
              match: u,
              routeContext: { outlet: e, matches: m, isDataRoute: null != n },
              children: t,
            })
          );
        };
      return n && (u.route.ErrorBoundary || u.route.errorElement || 0 === s)
        ? r.createElement(we, {
            location: n.location,
            revalidation: n.revalidation,
            component: f,
            error: c,
            children: h(),
            routeContext: { outlet: null, matches: m, isDataRoute: !0 },
          })
        : h();
    }, null);
  }
  function Se(e) {
    return "".concat(
      e,
      " must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.",
    );
  }
  function _e(e) {
    let t = r.useContext(te);
    return (b(t, Se(e)), t);
  }
  function Ee(e) {
    let t = r.useContext(ne);
    return (b(t, Se(e)), t);
  }
  function Ce(e) {
    let t = (function (e) {
        let t = r.useContext(ue);
        return (b(t, Se(e)), t);
      })(e),
      n = t.matches[t.matches.length - 1];
    return (
      b(
        n.route.id,
        "".concat(e, ' can only be used on routes that contain a unique "id"'),
      ),
      n.route.id
    );
  }
  function Ne() {
    var e;
    let t = r.useContext(se),
      n = Ee("useRouteError"),
      a = Ce("useRouteError");
    return void 0 !== t
      ? t
      : null === (e = n.errors) || void 0 === e
        ? void 0
        : e[a];
  }
  var je = {};
  function Pe(e, t, n) {
    t || je[e] || ((je[e] = !0), w(!1, n));
  }
  r.memo(function (e) {
    let { routes: t, future: n, state: r } = e;
    return ye(t, void 0, r, n);
  });
  function Te(e) {
    b(
      !1,
      "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
    );
  }
  function Oe(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: a,
      navigationType: o = "POP",
      navigator: l,
      static: i = !1,
    } = e;
    b(
      !ce(),
      "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
    );
    let u = t.replace(/^\/*/, "/"),
      s = r.useMemo(
        () => ({ basename: u, navigator: l, static: i, future: {} }),
        [u, l, i],
      );
    "string" === typeof a && (a = _(a));
    let {
        pathname: c = "/",
        search: d = "",
        hash: f = "",
        state: p = null,
        key: m = "default",
      } = a,
      h = r.useMemo(() => {
        let e = $(c, u);
        return null == e
          ? null
          : {
              location: { pathname: e, search: d, hash: f, state: p, key: m },
              navigationType: o,
            };
      }, [u, c, d, f, p, m, o]);
    return (
      w(
        null != h,
        '<Router basename="'
          .concat(u, '"> is not able to match the URL "')
          .concat(c)
          .concat(d)
          .concat(
            f,
            "\" because it does not start with the basename, so the <Router> won't render anything.",
          ),
      ),
      null == h
        ? null
        : r.createElement(
            le.Provider,
            { value: s },
            r.createElement(ie.Provider, { children: n, value: h }),
          )
    );
  }
  function ze(e) {
    let { children: t, location: n } = e;
    return ye(Le(t), n);
  }
  r.Component;
  function Le(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = [];
    return (
      r.Children.forEach(e, (e, a) => {
        if (!r.isValidElement(e)) return;
        let o = [...t, a];
        if (e.type === r.Fragment)
          return void n.push.apply(n, Le(e.props.children, o));
        (b(
          e.type === Te,
          "[".concat(
            "string" === typeof e.type ? e.type : e.type.name,
            "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>",
          ),
        ),
          b(
            !e.props.index || !e.props.children,
            "An index route cannot have child routes.",
          ));
        let l = {
          id: e.props.id || o.join("-"),
          caseSensitive: e.props.caseSensitive,
          element: e.props.element,
          Component: e.props.Component,
          index: e.props.index,
          path: e.props.path,
          loader: e.props.loader,
          action: e.props.action,
          hydrateFallbackElement: e.props.hydrateFallbackElement,
          HydrateFallback: e.props.HydrateFallback,
          errorElement: e.props.errorElement,
          ErrorBoundary: e.props.ErrorBoundary,
          hasErrorBoundary:
            !0 === e.props.hasErrorBoundary ||
            null != e.props.ErrorBoundary ||
            null != e.props.errorElement,
          shouldRevalidate: e.props.shouldRevalidate,
          handle: e.props.handle,
          lazy: e.props.lazy,
        };
        (e.props.children && (l.children = Le(e.props.children, o)), n.push(l));
      }),
      n
    );
  }
  var Re = "get",
    Ae = "application/x-www-form-urlencoded";
  function Fe(e) {
    return null != e && "string" === typeof e.tagName;
  }
  function Me() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return new URLSearchParams(
      "string" === typeof e || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, n) => {
            let r = e[n];
            return t.concat(Array.isArray(r) ? r.map((e) => [n, e]) : [[n, r]]);
          }, []),
    );
  }
  var De = null;
  var Ie = new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain",
  ]);
  function Ue(e) {
    return null == e || Ie.has(e)
      ? e
      : (w(
          !1,
          '"'
            .concat(
              e,
              '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` and will default to "',
            )
            .concat(Ae, '"'),
        ),
        null);
  }
  function He(e, t) {
    let n, r, a, o, l;
    if (Fe((i = e)) && "form" === i.tagName.toLowerCase()) {
      let l = e.getAttribute("action");
      ((r = l ? $(l, t) : null),
        (n = e.getAttribute("method") || Re),
        (a = Ue(e.getAttribute("enctype")) || Ae),
        (o = new FormData(e)));
    } else if (
      (function (e) {
        return Fe(e) && "button" === e.tagName.toLowerCase();
      })(e) ||
      ((function (e) {
        return Fe(e) && "input" === e.tagName.toLowerCase();
      })(e) &&
        ("submit" === e.type || "image" === e.type))
    ) {
      let l = e.form;
      if (null == l)
        throw new Error(
          'Cannot submit a <button> or <input type="submit"> without a <form>',
        );
      let i = e.getAttribute("formaction") || l.getAttribute("action");
      if (
        ((r = i ? $(i, t) : null),
        (n = e.getAttribute("formmethod") || l.getAttribute("method") || Re),
        (a =
          Ue(e.getAttribute("formenctype")) ||
          Ue(l.getAttribute("enctype")) ||
          Ae),
        (o = new FormData(l, e)),
        !(function () {
          if (null === De)
            try {
              (new FormData(document.createElement("form"), 0), (De = !1));
            } catch (e) {
              De = !0;
            }
          return De;
        })())
      ) {
        let { name: t, type: n, value: r } = e;
        if ("image" === n) {
          let e = t ? "".concat(t, ".") : "";
          (o.append("".concat(e, "x"), "0"), o.append("".concat(e, "y"), "0"));
        } else t && o.append(t, r);
      }
    } else {
      if (Fe(e))
        throw new Error(
          'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
        );
      ((n = Re), (r = null), (a = Ae), (l = e));
    }
    var i;
    return (
      o && "text/plain" === a && ((l = o), (o = void 0)),
      { action: r, method: n.toLowerCase(), encType: a, formData: o, body: l }
    );
  }
  function Be(e, t) {
    if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t);
  }
  async function $e(e, t) {
    if (e.id in t) return t[e.id];
    try {
      let n = await import(e.module);
      return ((t[e.id] = n), n);
    } catch (n) {
      return (
        console.error(
          "Error loading route module `".concat(
            e.module,
            "`, reloading page...",
          ),
        ),
        console.error(n),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise(() => {})
      );
    }
  }
  function Ve(e) {
    return null != e && "string" === typeof e.page;
  }
  function We(e) {
    return (
      null != e &&
      (null == e.href
        ? "preload" === e.rel &&
          "string" === typeof e.imageSrcSet &&
          "string" === typeof e.imageSizes
        : "string" === typeof e.rel && "string" === typeof e.href)
    );
  }
  function qe(e, t, n, r, a, o) {
    let l = (e, t) => !n[t] || e.route.id !== n[t].route.id,
      i = (e, t) => {
        var r;
        return (
          n[t].pathname !== e.pathname ||
          ((null === (r = n[t].route.path) || void 0 === r
            ? void 0
            : r.endsWith("*")) &&
            n[t].params["*"] !== e.params["*"])
        );
      };
    return "assets" === o
      ? t.filter((e, t) => l(e, t) || i(e, t))
      : "data" === o
        ? t.filter((t, o) => {
            let u = r.routes[t.route.id];
            if (!u || !u.hasLoader) return !1;
            if (l(t, o) || i(t, o)) return !0;
            if (t.route.shouldRevalidate) {
              var s;
              let r = t.route.shouldRevalidate({
                currentUrl: new URL(
                  a.pathname + a.search + a.hash,
                  window.origin,
                ),
                currentParams:
                  (null === (s = n[0]) || void 0 === s ? void 0 : s.params) ||
                  {},
                nextUrl: new URL(e, window.origin),
                nextParams: t.params,
                defaultShouldRevalidate: !0,
              });
              if ("boolean" === typeof r) return r;
            }
            return !0;
          })
        : [];
  }
  function Qe(e, t) {
    let { includeHydrateFallback: n } =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return (
      (r = e
        .map((e) => {
          let r = t.routes[e.route.id];
          if (!r) return [];
          let a = [r.module];
          return (
            r.clientActionModule && (a = a.concat(r.clientActionModule)),
            r.clientLoaderModule && (a = a.concat(r.clientLoaderModule)),
            n &&
              r.hydrateFallbackModule &&
              (a = a.concat(r.hydrateFallbackModule)),
            r.imports && (a = a.concat(r.imports)),
            a
          );
        })
        .flat(1)),
      [...new Set(r)]
    );
    var r;
  }
  function Ke(e, t) {
    let n = new Set(),
      r = new Set(t);
    return e.reduce((e, a) => {
      if (t && !Ve(a) && "script" === a.as && a.href && r.has(a.href)) return e;
      let o = JSON.stringify(
        (function (e) {
          let t = {},
            n = Object.keys(e).sort();
          for (let r of n) t[r] = e[r];
          return t;
        })(a),
      );
      return (n.has(o) || (n.add(o), e.push({ key: o, link: a })), e);
    }, []);
  }
  function Xe(e) {
    return { __html: e };
  }
  Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  "undefined" !== typeof window
    ? window
    : "undefined" !== typeof globalThis && globalThis;
  Symbol("SingleFetchRedirect");
  var Ye = new Set([100, 101, 204, 205]);
  function Ge(e, t) {
    let n =
      "string" === typeof e
        ? new URL(
            e,
            "undefined" === typeof window
              ? "server://singlefetch/"
              : window.location.origin,
          )
        : e;
    return (
      "/" === n.pathname
        ? (n.pathname = "_root.data")
        : t && "/" === $(n.pathname, t)
          ? (n.pathname = "".concat(t.replace(/\/$/, ""), "/_root.data"))
          : (n.pathname = "".concat(n.pathname.replace(/\/$/, ""), ".data")),
      n
    );
  }
  r.Component;
  function Je(e) {
    let { error: t, isOutsideRemixApp: n } = e;
    console.error(t);
    let a,
      o = r.createElement("script", {
        dangerouslySetInnerHTML: {
          __html:
            '\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      ',
        },
      });
    if (J(t))
      return r.createElement(
        Ze,
        { title: "Unhandled Thrown Response!" },
        r.createElement(
          "h1",
          { style: { fontSize: "24px" } },
          t.status,
          " ",
          t.statusText,
        ),
        o,
      );
    if (t instanceof Error) a = t;
    else {
      let e =
        null == t
          ? "Unknown Error"
          : "object" === typeof t && "toString" in t
            ? t.toString()
            : JSON.stringify(t);
      a = new Error(e);
    }
    return r.createElement(
      Ze,
      { title: "Application Error!", isOutsideRemixApp: n },
      r.createElement(
        "h1",
        { style: { fontSize: "24px" } },
        "Application Error",
      ),
      r.createElement(
        "pre",
        {
          style: {
            padding: "2rem",
            background: "hsla(10, 50%, 50%, 0.1)",
            color: "red",
            overflow: "auto",
          },
        },
        a.stack,
      ),
      o,
    );
  }
  function Ze(e) {
    var t;
    let { title: n, renderScripts: a, isOutsideRemixApp: o, children: l } = e,
      { routeModules: i } = at();
    return null !== (t = i.root) && void 0 !== t && t.Layout && !o
      ? l
      : r.createElement(
          "html",
          { lang: "en" },
          r.createElement(
            "head",
            null,
            r.createElement("meta", { charSet: "utf-8" }),
            r.createElement("meta", {
              name: "viewport",
              content: "width=device-width,initial-scale=1,viewport-fit=cover",
            }),
            r.createElement("title", null, n),
          ),
          r.createElement(
            "body",
            null,
            r.createElement(
              "main",
              {
                style: { fontFamily: "system-ui, sans-serif", padding: "2rem" },
              },
              l,
              a ? r.createElement(dt, null) : null,
            ),
          ),
        );
  }
  function et(e, t) {
    return "lazy" === e.mode && !0 === t;
  }
  function tt() {
    let e = r.useContext(te);
    return (
      Be(
        e,
        "You must render this element inside a <DataRouterContext.Provider> element",
      ),
      e
    );
  }
  function nt() {
    let e = r.useContext(ne);
    return (
      Be(
        e,
        "You must render this element inside a <DataRouterStateContext.Provider> element",
      ),
      e
    );
  }
  var rt = r.createContext(void 0);
  function at() {
    let e = r.useContext(rt);
    return (
      Be(e, "You must render this element inside a <HydratedRouter> element"),
      e
    );
  }
  function ot(e, t) {
    return (n) => {
      (e && e(n), n.defaultPrevented || t(n));
    };
  }
  function lt(e, t, n) {
    if (n && !ct) return [e[0]];
    if (t) {
      let n = e.findIndex((e) => void 0 !== t[e.route.id]);
      return e.slice(0, n + 1);
    }
    return e;
  }
  function it(e) {
    let { page: t } = e,
      n = o(e, f),
      { router: a } = tt(),
      l = r.useMemo(
        () => N(a.routes, t, a.basename),
        [a.routes, t, a.basename],
      );
    return l ? r.createElement(st, c({ page: t, matches: l }, n)) : null;
  }
  function ut(e) {
    let { manifest: t, routeModules: n } = at(),
      [a, o] = r.useState([]);
    return (
      r.useEffect(() => {
        let r = !1;
        return (
          (async function (e, t, n) {
            return Ke(
              (
                await Promise.all(
                  e.map(async (e) => {
                    let r = t.routes[e.route.id];
                    if (r) {
                      let e = await $e(r, n);
                      return e.links ? e.links() : [];
                    }
                    return [];
                  }),
                )
              )
                .flat(1)
                .filter(We)
                .filter((e) => "stylesheet" === e.rel || "preload" === e.rel)
                .map((e) =>
                  "stylesheet" === e.rel
                    ? c(c({}, e), {}, { rel: "prefetch", as: "style" })
                    : c(c({}, e), {}, { rel: "prefetch" }),
                ),
            );
          })(e, t, n).then((e) => {
            r || o(e);
          }),
          () => {
            r = !0;
          }
        );
      }, [e, t, n]),
      a
    );
  }
  function st(e) {
    let { page: t, matches: n } = e,
      a = o(e, p),
      l = de(),
      { manifest: i, routeModules: u } = at(),
      { basename: s } = tt(),
      { loaderData: d, matches: f } = nt(),
      m = r.useMemo(() => qe(t, n, f, i, l, "data"), [t, n, f, i, l]),
      h = r.useMemo(() => qe(t, n, f, i, l, "assets"), [t, n, f, i, l]),
      g = r.useMemo(() => {
        if (t === l.pathname + l.search + l.hash) return [];
        let e = new Set(),
          r = !1;
        if (
          (n.forEach((t) => {
            var n;
            let a = i.routes[t.route.id];
            a &&
              a.hasLoader &&
              ((!m.some((e) => e.route.id === t.route.id) &&
                t.route.id in d &&
                null !== (n = u[t.route.id]) &&
                void 0 !== n &&
                n.shouldRevalidate) ||
              a.hasClientLoader
                ? (r = !0)
                : e.add(t.route.id));
          }),
          0 === e.size)
        )
          return [];
        let a = Ge(t, s);
        return (
          r &&
            e.size > 0 &&
            a.searchParams.set(
              "_routes",
              n
                .filter((t) => e.has(t.route.id))
                .map((e) => e.route.id)
                .join(","),
            ),
          [a.pathname + a.search]
        );
      }, [s, d, l, i, m, n, t, u]),
      y = r.useMemo(() => Qe(h, i), [h, i]),
      v = ut(h);
    return r.createElement(
      r.Fragment,
      null,
      g.map((e) =>
        r.createElement(
          "link",
          c({ key: e, rel: "prefetch", as: "fetch", href: e }, a),
        ),
      ),
      y.map((e) =>
        r.createElement(
          "link",
          c({ key: e, rel: "modulepreload", href: e }, a),
        ),
      ),
      v.map((e) => {
        let { key: t, link: n } = e;
        return r.createElement("link", c({ key: t }, n));
      }),
    );
  }
  rt.displayName = "FrameworkContext";
  var ct = !1;
  function dt(e) {
    let {
        manifest: t,
        serverHandoffString: n,
        isSpaMode: a,
        renderMeta: l,
        routeDiscovery: i,
        ssr: u,
      } = at(),
      { router: s, static: f, staticContext: p } = tt(),
      { matches: m } = nt(),
      h = et(i, u);
    l && (l.didRenderScripts = !0);
    let g = lt(m, null, a);
    r.useEffect(() => {
      ct = !0;
    }, []);
    let y = r.useMemo(() => {
        var a;
        let l = p
            ? "window.__reactRouterContext = "
                .concat(n, ";")
                .concat(
                  "window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());",
                )
            : " ",
          i = f
            ? ""
                .concat(
                  null !== (a = t.hmr) && void 0 !== a && a.runtime
                    ? "import ".concat(JSON.stringify(t.hmr.runtime), ";")
                    : "",
                )
                .concat(h ? "" : "import ".concat(JSON.stringify(t.url)), ";\n")
                .concat(
                  g
                    .map((e, n) => {
                      let r = "route".concat(n),
                        a = t.routes[e.route.id];
                      Be(
                        a,
                        "Route ".concat(e.route.id, " not found in manifest"),
                      );
                      let {
                          clientActionModule: o,
                          clientLoaderModule: l,
                          clientMiddlewareModule: i,
                          hydrateFallbackModule: u,
                          module: s,
                        } = a,
                        c = [
                          ...(o
                            ? [
                                {
                                  module: o,
                                  varName: "".concat(r, "_clientAction"),
                                },
                              ]
                            : []),
                          ...(l
                            ? [
                                {
                                  module: l,
                                  varName: "".concat(r, "_clientLoader"),
                                },
                              ]
                            : []),
                          ...(i
                            ? [
                                {
                                  module: i,
                                  varName: "".concat(r, "_clientMiddleware"),
                                },
                              ]
                            : []),
                          ...(u
                            ? [
                                {
                                  module: u,
                                  varName: "".concat(r, "_HydrateFallback"),
                                },
                              ]
                            : []),
                          { module: s, varName: "".concat(r, "_main") },
                        ];
                      return 1 === c.length
                        ? "import * as "
                            .concat(r, " from ")
                            .concat(JSON.stringify(s), ";")
                        : [
                            c
                              .map((e) =>
                                "import * as "
                                  .concat(e.varName, ' from "')
                                  .concat(e.module, '";'),
                              )
                              .join("\n"),
                            "const "
                              .concat(r, " = {")
                              .concat(
                                c.map((e) => "...".concat(e.varName)).join(","),
                                "};",
                              ),
                          ].join("\n");
                    })
                    .join("\n"),
                  "\n  ",
                )
                .concat(
                  h
                    ? "window.__reactRouterManifest = ".concat(
                        JSON.stringify(
                          (function (e, t) {
                            let { sri: n } = e,
                              r = o(e, d),
                              a = new Set(
                                t.state.matches.map((e) => e.route.id),
                              ),
                              l = t.state.location.pathname
                                .split("/")
                                .filter(Boolean),
                              i = ["/"];
                            for (l.pop(); l.length > 0; )
                              (i.push("/".concat(l.join("/"))), l.pop());
                            i.forEach((e) => {
                              let n = N(t.routes, e, t.basename);
                              n && n.forEach((e) => a.add(e.route.id));
                            });
                            let u = [...a].reduce(
                              (e, t) => Object.assign(e, { [t]: r.routes[t] }),
                              {},
                            );
                            return c(
                              c({}, r),
                              {},
                              { routes: u, sri: !!n || void 0 },
                            );
                          })(t, s),
                          null,
                          2,
                        ),
                        ";",
                      )
                    : "",
                  "\n  window.__reactRouterRouteModules = {",
                )
                .concat(
                  g
                    .map((e, t) =>
                      "".concat(JSON.stringify(e.route.id), ":route").concat(t),
                    )
                    .join(","),
                  "};\n\nimport(",
                )
                .concat(JSON.stringify(t.entry.module), ");")
            : " ";
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "script",
            c(
              c({}, e),
              {},
              {
                suppressHydrationWarning: !0,
                dangerouslySetInnerHTML: Xe(l),
                type: void 0,
              },
            ),
          ),
          r.createElement(
            "script",
            c(
              c({}, e),
              {},
              {
                suppressHydrationWarning: !0,
                dangerouslySetInnerHTML: Xe(i),
                type: "module",
                async: !0,
              },
            ),
          ),
        );
      }, []),
      v = ct
        ? []
        : ((b = t.entry.imports.concat(
            Qe(g, t, { includeHydrateFallback: !0 }),
          )),
          [...new Set(b)]);
    var b;
    let w = "object" === typeof t.sri ? t.sri : {};
    return ct
      ? null
      : r.createElement(
          r.Fragment,
          null,
          "object" === typeof t.sri
            ? r.createElement("script", {
                "rr-importmap": "",
                type: "importmap",
                suppressHydrationWarning: !0,
                dangerouslySetInnerHTML: {
                  __html: JSON.stringify({ integrity: w }),
                },
              })
            : null,
          h
            ? null
            : r.createElement("link", {
                rel: "modulepreload",
                href: t.url,
                crossOrigin: e.crossOrigin,
                integrity: w[t.url],
                suppressHydrationWarning: !0,
              }),
          r.createElement("link", {
            rel: "modulepreload",
            href: t.entry.module,
            crossOrigin: e.crossOrigin,
            integrity: w[t.entry.module],
            suppressHydrationWarning: !0,
          }),
          v.map((t) =>
            r.createElement("link", {
              key: t,
              rel: "modulepreload",
              href: t,
              crossOrigin: e.crossOrigin,
              integrity: w[t],
              suppressHydrationWarning: !0,
            }),
          ),
          y,
        );
  }
  function ft() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return (e) => {
      t.forEach((t) => {
        "function" === typeof t ? t(e) : null != t && (t.current = e);
      });
    };
  }
  var pt =
    "undefined" !== typeof window &&
    "undefined" !== typeof window.document &&
    "undefined" !== typeof window.document.createElement;
  try {
    pt && (window.__reactRouterVersion = "7.6.3");
  } catch (yl) {}
  function mt(e) {
    let { basename: t, children: n, window: a } = e,
      o = r.useRef();
    null == o.current && (o.current = v({ window: a, v5Compat: !0 }));
    let l = o.current,
      [i, u] = r.useState({ action: l.action, location: l.location }),
      s = r.useCallback(
        (e) => {
          r.startTransition(() => u(e));
        },
        [u],
      );
    return (
      r.useLayoutEffect(() => l.listen(s), [l, s]),
      r.createElement(Oe, {
        basename: t,
        children: n,
        location: i.location,
        navigationType: i.action,
        navigator: l,
      })
    );
  }
  var ht = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    gt = r.forwardRef(function (e, t) {
      let n,
        {
          onClick: a,
          discover: l = "render",
          prefetch: i = "none",
          relative: u,
          reloadDocument: s,
          replace: d,
          state: f,
          target: p,
          to: h,
          preventScrollReset: g,
          viewTransition: y,
        } = e,
        v = o(e, m),
        { basename: k } = r.useContext(le),
        x = "string" === typeof h && ht.test(h),
        _ = !1;
      if ("string" === typeof h && x && ((n = h), pt))
        try {
          let e = new URL(window.location.href),
            t = h.startsWith("//") ? new URL(e.protocol + h) : new URL(h),
            n = $(t.pathname, k);
          t.origin === e.origin && null != n
            ? (h = n + t.search + t.hash)
            : (_ = !0);
        } catch (yl) {
          w(
            !1,
            '<Link to="'.concat(
              h,
              '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.',
            ),
          );
        }
      let E = (function (e) {
          let { relative: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          b(
            ce(),
            "useHref() may be used only in the context of a <Router> component.",
          );
          let { basename: n, navigator: a } = r.useContext(le),
            { hash: o, pathname: l, search: i } = ge(e, { relative: t }),
            u = l;
          return (
            "/" !== n && (u = "/" === l ? n : K([n, l])),
            a.createHref({ pathname: u, search: i, hash: o })
          );
        })(h, { relative: u }),
        [C, N, j] = (function (e, t) {
          let n = r.useContext(rt),
            [a, o] = r.useState(!1),
            [l, i] = r.useState(!1),
            {
              onFocus: u,
              onBlur: s,
              onMouseEnter: c,
              onMouseLeave: d,
              onTouchStart: f,
            } = t,
            p = r.useRef(null);
          (r.useEffect(() => {
            if (("render" === e && i(!0), "viewport" === e)) {
              let e = new IntersectionObserver(
                (e) => {
                  e.forEach((e) => {
                    i(e.isIntersecting);
                  });
                },
                { threshold: 0.5 },
              );
              return (
                p.current && e.observe(p.current),
                () => {
                  e.disconnect();
                }
              );
            }
          }, [e]),
            r.useEffect(() => {
              if (a) {
                let e = setTimeout(() => {
                  i(!0);
                }, 100);
                return () => {
                  clearTimeout(e);
                };
              }
            }, [a]));
          let m = () => {
              o(!0);
            },
            h = () => {
              (o(!1), i(!1));
            };
          return n
            ? "intent" !== e
              ? [l, p, {}]
              : [
                  l,
                  p,
                  {
                    onFocus: ot(u, m),
                    onBlur: ot(s, h),
                    onMouseEnter: ot(c, m),
                    onMouseLeave: ot(d, h),
                    onTouchStart: ot(f, m),
                  },
                ]
            : [!1, p, {}];
        })(i, v),
        P = (function (e) {
          let {
              target: t,
              replace: n,
              state: a,
              preventScrollReset: o,
              relative: l,
              viewTransition: i,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            u = me(),
            s = de(),
            c = ge(e, { relative: l });
          return r.useCallback(
            (r) => {
              if (
                (function (e, t) {
                  return (
                    0 === e.button &&
                    (!t || "_self" === t) &&
                    !(function (e) {
                      return !!(
                        e.metaKey ||
                        e.altKey ||
                        e.ctrlKey ||
                        e.shiftKey
                      );
                    })(e)
                  );
                })(r, t)
              ) {
                r.preventDefault();
                let t = void 0 !== n ? n : S(s) === S(c);
                u(e, {
                  replace: t,
                  state: a,
                  preventScrollReset: o,
                  relative: l,
                  viewTransition: i,
                });
              }
            },
            [s, u, c, n, a, t, e, o, l, i],
          );
        })(h, {
          replace: d,
          state: f,
          target: p,
          preventScrollReset: g,
          relative: u,
          viewTransition: y,
        });
      let T = r.createElement(
        "a",
        c(
          c(c({}, v), j),
          {},
          {
            href: n || E,
            onClick:
              _ || s
                ? a
                : function (e) {
                    (a && a(e), e.defaultPrevented || P(e));
                  },
            ref: ft(t, N),
            target: p,
            "data-discover": x || "render" !== l ? void 0 : "true",
          },
        ),
      );
      return C && !x
        ? r.createElement(r.Fragment, null, T, r.createElement(it, { page: E }))
        : T;
    });
  gt.displayName = "Link";
  var yt = r.forwardRef(function (e, t) {
    let {
        "aria-current": n = "page",
        caseSensitive: a = !1,
        className: l = "",
        end: i = !1,
        style: u,
        to: s,
        viewTransition: d,
        children: f,
      } = e,
      p = o(e, h),
      m = ge(s, { relative: p.relative }),
      g = de(),
      y = r.useContext(ne),
      { navigator: v, basename: w } = r.useContext(le),
      k =
        null != y &&
        (function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = r.useContext(re);
          b(
            null != n,
            "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
          );
          let { basename: a } = wt("useViewTransitionState"),
            o = ge(e, { relative: t.relative });
          if (!n.isTransitioning) return !1;
          let l =
              $(n.currentLocation.pathname, a) || n.currentLocation.pathname,
            i = $(n.nextLocation.pathname, a) || n.nextLocation.pathname;
          return null != U(o.pathname, i) || null != U(o.pathname, l);
        })(m) &&
        !0 === d,
      x = v.encodeLocation ? v.encodeLocation(m).pathname : m.pathname,
      S = g.pathname,
      _ =
        y && y.navigation && y.navigation.location
          ? y.navigation.location.pathname
          : null;
    (a ||
      ((S = S.toLowerCase()),
      (_ = _ ? _.toLowerCase() : null),
      (x = x.toLowerCase())),
      _ && w && (_ = $(_, w) || _));
    const E = "/" !== x && x.endsWith("/") ? x.length - 1 : x.length;
    let C,
      N = S === x || (!i && S.startsWith(x) && "/" === S.charAt(E)),
      j =
        null != _ &&
        (_ === x || (!i && _.startsWith(x) && "/" === _.charAt(x.length))),
      P = { isActive: N, isPending: j, isTransitioning: k },
      T = N ? n : void 0;
    C =
      "function" === typeof l
        ? l(P)
        : [
            l,
            N ? "active" : null,
            j ? "pending" : null,
            k ? "transitioning" : null,
          ]
            .filter(Boolean)
            .join(" ");
    let O = "function" === typeof u ? u(P) : u;
    return r.createElement(
      gt,
      c(
        c({}, p),
        {},
        {
          "aria-current": T,
          className: C,
          ref: t,
          style: O,
          to: s,
          viewTransition: d,
        },
      ),
      "function" === typeof f ? f(P) : f,
    );
  });
  yt.displayName = "NavLink";
  var vt = r.forwardRef((e, t) => {
    let {
        discover: n = "render",
        fetcherKey: a,
        navigate: l,
        reloadDocument: i,
        replace: u,
        state: s,
        method: d = Re,
        action: f,
        onSubmit: p,
        relative: m,
        preventScrollReset: h,
        viewTransition: y,
      } = e,
      v = o(e, g),
      w = _t(),
      k = (function (e) {
        let { relative: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { basename: n } = r.useContext(le),
          a = r.useContext(ue);
        b(a, "useFormAction must be used inside a RouteContext");
        let [o] = a.matches.slice(-1),
          l = c({}, ge(e || ".", { relative: t })),
          i = de();
        if (null == e) {
          l.search = i.search;
          let e = new URLSearchParams(l.search),
            t = e.getAll("index");
          if (t.some((e) => "" === e)) {
            (e.delete("index"),
              t.filter((e) => e).forEach((t) => e.append("index", t)));
            let n = e.toString();
            l.search = n ? "?".concat(n) : "";
          }
        }
        (e && "." !== e) ||
          !o.route.index ||
          (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index");
        "/" !== n && (l.pathname = "/" === l.pathname ? n : K([n, l.pathname]));
        return S(l);
      })(f, { relative: m }),
      x = "get" === d.toLowerCase() ? "get" : "post",
      _ = "string" === typeof f && ht.test(f);
    return r.createElement(
      "form",
      c(
        c(
          {
            ref: t,
            method: x,
            action: k,
            onSubmit: i
              ? p
              : (e) => {
                  if ((p && p(e), e.defaultPrevented)) return;
                  e.preventDefault();
                  let t = e.nativeEvent.submitter,
                    n =
                      (null === t || void 0 === t
                        ? void 0
                        : t.getAttribute("formmethod")) || d;
                  w(t || e.currentTarget, {
                    fetcherKey: a,
                    method: n,
                    navigate: l,
                    replace: u,
                    state: s,
                    relative: m,
                    preventScrollReset: h,
                    viewTransition: y,
                  });
                },
          },
          v,
        ),
        {},
        { "data-discover": _ || "render" !== n ? void 0 : "true" },
      ),
    );
  });
  function bt(e) {
    return "".concat(
      e,
      " must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.",
    );
  }
  function wt(e) {
    let t = r.useContext(te);
    return (b(t, bt(e)), t);
  }
  function kt(e) {
    w(
      "undefined" !== typeof URLSearchParams,
      "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.",
    );
    let t = r.useRef(Me(e)),
      n = r.useRef(!1),
      a = de(),
      o = r.useMemo(
        () =>
          (function (e, t) {
            let n = Me(e);
            return (
              t &&
                t.forEach((e, r) => {
                  n.has(r) ||
                    t.getAll(r).forEach((e) => {
                      n.append(r, e);
                    });
                }),
              n
            );
          })(a.search, n.current ? null : t.current),
        [a.search],
      ),
      l = me(),
      i = r.useCallback(
        (e, t) => {
          const r = Me("function" === typeof e ? e(o) : e);
          ((n.current = !0), l("?" + r, t));
        },
        [l, o],
      );
    return [o, i];
  }
  vt.displayName = "Form";
  var xt = 0,
    St = () => "__".concat(String(++xt), "__");
  function _t() {
    let { router: e } = wt("useSubmit"),
      { basename: t } = r.useContext(le),
      n = Ce("useRouteId");
    return r.useCallback(
      async function (r) {
        let a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { action: o, method: l, encType: i, formData: u, body: s } = He(r, t);
        if (!1 === a.navigate) {
          let t = a.fetcherKey || St();
          await e.fetch(t, n, a.action || o, {
            preventScrollReset: a.preventScrollReset,
            formData: u,
            body: s,
            formMethod: a.method || l,
            formEncType: a.encType || i,
            flushSync: a.flushSync,
          });
        } else
          await e.navigate(a.action || o, {
            preventScrollReset: a.preventScrollReset,
            formData: u,
            body: s,
            formMethod: a.method || l,
            formEncType: a.encType || i,
            replace: a.replace,
            state: a.state,
            fromRouteId: n,
            flushSync: a.flushSync,
            viewTransition: a.viewTransition,
          });
      },
      [e, t, n],
    );
  }
  const Et = "Header_header__p6PsI",
    Ct = "Header_container__czfez",
    Nt = "Header_logo__UgUGM",
    jt = "Header_logoImage__OE2g4",
    Pt = "Header_navDesktop__1dE9G",
    Tt = "Header_actions__k5ox3",
    Ot = "Header_icon__I+E7U",
    zt = "Header_menuToggle__MioZ1",
    Lt = "Header_navMobile__1VXUl",
    Rt = "Header_open__8dHnp",
    At = "Header_mobileIcons__GVpGT",
    Ft = "Header_cartWrapper__5pE6Y",
    Mt = "Header_cartBadge__2dTlb",
    Dt = "Header_desktopOnly__z9NvD",
    It = "Header_mobileOnly__81AZx",
    Ut = (e) => {
      const t = ((e) =>
        e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
          n ? n.toUpperCase() : t.toLowerCase(),
        ))(e);
      return t.charAt(0).toUpperCase() + t.slice(1);
    },
    Ht = function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return t
        .filter(
          (e, t, n) => Boolean(e) && "" !== e.trim() && n.indexOf(e) === t,
        )
        .join(" ")
        .trim();
    };
  var Bt = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  const $t = [
      "color",
      "size",
      "strokeWidth",
      "absoluteStrokeWidth",
      "className",
      "children",
      "iconNode",
    ],
    Vt = (0, r.forwardRef)((e, t) => {
      let {
          color: n = "currentColor",
          size: a = 24,
          strokeWidth: l = 2,
          absoluteStrokeWidth: i,
          className: u = "",
          children: s,
          iconNode: d,
        } = e,
        f = o(e, $t);
      return (0, r.createElement)(
        "svg",
        c(
          c(
            c({ ref: t }, Bt),
            {},
            {
              width: a,
              height: a,
              stroke: n,
              strokeWidth: i ? (24 * Number(l)) / Number(a) : l,
              className: Ht("lucide", u),
            },
            !s &&
              !((e) => {
                for (const t in e)
                  if (t.startsWith("aria-") || "role" === t || "title" === t)
                    return !0;
              })(f) && { "aria-hidden": "true" },
          ),
          f,
        ),
        [
          ...d.map((e) => {
            let [t, n] = e;
            return (0, r.createElement)(t, n);
          }),
          ...(Array.isArray(s) ? s : [s]),
        ],
      );
    }),
    Wt = ["className"],
    qt = (e, t) => {
      const n = (0, r.forwardRef)((n, a) => {
        let { className: l } = n,
          i = o(n, Wt);
        return (0, r.createElement)(
          Vt,
          c(
            {
              ref: a,
              iconNode: t,
              className: Ht(
                "lucide-".concat(
                  ((u = Ut(e)),
                  u.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()),
                ),
                "lucide-".concat(e),
                l,
              ),
            },
            i,
          ),
        );
        var u;
      });
      return ((n.displayName = Ut(e)), n);
    },
    Qt = qt("search", [
      ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ]),
    Kt = qt("user", [
      [
        "path",
        { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" },
      ],
      ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
    ]),
    Xt = qt("x", [
      ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
      ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
    ]),
    Yt = qt("menu", [
      ["path", { d: "M4 12h16", key: "1lakjw" }],
      ["path", { d: "M4 18h16", key: "19g7jn" }],
      ["path", { d: "M4 6h16", key: "1o0s65" }],
    ]),
    Gt = n.p + "static/media/logo-sapataria.bdce9cf16f900a26161d.png",
    Jt = qt("shopping-cart", [
      ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
      ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
      [
        "path",
        {
          d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
          key: "9zh506",
        },
      ],
    ]);
  var Zt = n(237);
  function en(e) {
    e();
  }
  var tn = { notify() {}, get: () => [] };
  function nn(e, t) {
    let n,
      r = tn,
      a = 0,
      o = !1;
    function l() {
      s.onStateChange && s.onStateChange();
    }
    function i() {
      (a++,
        n ||
          ((n = t ? t.addNestedSub(l) : e.subscribe(l)),
          (r = (function () {
            let e = null,
              t = null;
            return {
              clear() {
                ((e = null), (t = null));
              },
              notify() {
                en(() => {
                  let t = e;
                  for (; t; ) (t.callback(), (t = t.next));
                });
              },
              get() {
                const t = [];
                let n = e;
                for (; n; ) (t.push(n), (n = n.next));
                return t;
              },
              subscribe(n) {
                let r = !0;
                const a = (t = { callback: n, next: null, prev: t });
                return (
                  a.prev ? (a.prev.next = a) : (e = a),
                  function () {
                    r &&
                      null !== e &&
                      ((r = !1),
                      a.next ? (a.next.prev = a.prev) : (t = a.prev),
                      a.prev ? (a.prev.next = a.next) : (e = a.next));
                  }
                );
              },
            };
          })())));
    }
    function u() {
      (a--, n && 0 === a && (n(), (n = void 0), r.clear(), (r = tn)));
    }
    const s = {
      addNestedSub: function (e) {
        i();
        const t = r.subscribe(e);
        let n = !1;
        return () => {
          n || ((n = !0), t(), u());
        };
      },
      notifyNestedSubs: function () {
        r.notify();
      },
      handleChangeWrapper: l,
      isSubscribed: function () {
        return o;
      },
      trySubscribe: function () {
        o || ((o = !0), i());
      },
      tryUnsubscribe: function () {
        o && ((o = !1), u());
      },
      getListeners: () => r,
    };
    return s;
  }
  var rn = (() =>
      !(
        "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        "undefined" === typeof window.document.createElement
      ))(),
    an = (() =>
      "undefined" !== typeof navigator &&
      "ReactNative" === navigator.product)(),
    on = (() => (rn || an ? r.useLayoutEffect : r.useEffect))();
  (Object.defineProperty,
    Object.getOwnPropertyNames,
    Object.getOwnPropertySymbols,
    Object.getOwnPropertyDescriptor,
    Object.getPrototypeOf,
    Object.prototype);
  var ln = Symbol.for("react-redux-context"),
    un = "undefined" !== typeof globalThis ? globalThis : {};
  function sn() {
    var e;
    if (!r.createContext) return {};
    const t = null !== (e = un[ln]) && void 0 !== e ? e : (un[ln] = new Map());
    let n = t.get(r.createContext);
    return (n || ((n = r.createContext(null)), t.set(r.createContext, n)), n);
  }
  var cn = sn();
  var dn = function (e) {
    const { children: t, context: n, serverState: a, store: o } = e,
      l = r.useMemo(() => {
        const e = nn(o);
        return {
          store: o,
          subscription: e,
          getServerState: a ? () => a : void 0,
        };
      }, [o, a]),
      i = r.useMemo(() => o.getState(), [o]);
    on(() => {
      const { subscription: e } = l;
      return (
        (e.onStateChange = e.notifyNestedSubs),
        e.trySubscribe(),
        i !== o.getState() && e.notifyNestedSubs(),
        () => {
          (e.tryUnsubscribe(), (e.onStateChange = void 0));
        }
      );
    }, [l, i]);
    const u = n || cn;
    return r.createElement(u.Provider, { value: l }, t);
  };
  function fn() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cn;
    return function () {
      return r.useContext(e);
    };
  }
  var pn = fn();
  function mn() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cn;
    const t = e === cn ? pn : fn(e),
      n = () => {
        const { store: e } = t();
        return e;
      };
    return (Object.assign(n, { withTypes: () => n }), n);
  }
  var hn = mn();
  function gn() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cn;
    const t = e === cn ? hn : mn(e),
      n = () => t().dispatch;
    return (Object.assign(n, { withTypes: () => n }), n);
  }
  var yn = gn(),
    vn = (e, t) => e === t;
  function bn() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cn;
    const t = e === cn ? pn : fn(e),
      n = function (e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { equalityFn: a = vn } =
          "function" === typeof n ? { equalityFn: n } : n;
        const o = t(),
          { store: l, subscription: i, getServerState: u } = o,
          s =
            (r.useRef(!0),
            r.useCallback({ [e.name]: (t) => e(t) }[e.name], [e])),
          c = (0, Zt.useSyncExternalStoreWithSelector)(
            i.addNestedSub,
            l.getState,
            u || l.getState,
            s,
            a,
          );
        return (r.useDebugValue(c), c);
      };
    return (Object.assign(n, { withTypes: () => n }), n);
  }
  var wn = bn(),
    kn = n(579);
  function xn(e) {
    let { isMobile: t } = e;
    const n = wn((e) => e.cart.items).reduce((e, t) => e + t.quantity, 0),
      r = t ? It : Dt;
    return (0, kn.jsxs)(gt, {
      to: "/carrinho",
      className: "".concat(Ft, " ").concat(r),
      children: [
        (0, kn.jsx)(Jt, { className: Ot }),
        n > 0 && (0, kn.jsx)("span", { className: Mt, children: n }),
      ],
    });
  }
  const Sn = "SearchBar_searchBar__rQ3TG",
    _n = "SearchBar_form__KdyXL",
    En = "SearchBar_input__yjVuy",
    Cn = "SearchBar_searchBtn__OgOSf",
    Nn = "SearchBar_closeBtn__ofShU",
    jn = "SearchBar_resultadosContainer__lNix8",
    Pn = "SearchBar_cardResultado__G2XQ-",
    Tn = "SearchBar_cardImagem__1AVWs",
    On = "SearchBar_cardInfo__hSbaM",
    zn = "SearchBar_cardNome__IUf+n",
    Ln = "SearchBar_cardPreco__6QgRa",
    Rn = "SearchBar_semResultado__bqTRN";
  function An(e) {
    let { onClose: t } = e;
    const [n, a] = (0, r.useState)(""),
      [o, l] = (0, r.useState)([]),
      [i, u] = (0, r.useState)([]),
      s = me();
    ((0, r.useEffect)(() => {
      (async () => {
        try {
          const e = await fetch("/data/sapatos.json"),
            t = await e.json();
          l(t);
        } catch (yl) {
          console.error("Erro ao buscar sapatos:", yl);
        }
      })();
    }, []),
      (0, r.useEffect)(() => {
        const e = o.filter((e) =>
          e.nome.toLowerCase().includes(n.toLowerCase()),
        );
        u(e);
      }, [n, o]));
    return (0, kn.jsxs)("div", {
      className: Sn,
      children: [
        (0, kn.jsxs)("form", {
          onSubmit: (e) => {
            (e.preventDefault(),
              "" !== n.trim() &&
                (s("/produtos?q=".concat(encodeURIComponent(n))), t()));
          },
          className: _n,
          children: [
            (0, kn.jsx)("input", {
              type: "text",
              placeholder: "Pesquisar produto...",
              value: n,
              onChange: (e) => a(e.target.value),
              className: En,
              autoFocus: !0,
            }),
            (0, kn.jsx)("button", {
              type: "submit",
              className: Cn,
              children: "Buscar",
            }),
            (0, kn.jsx)("button", {
              type: "button",
              onClick: t,
              className: Nn,
              children: "\u2716",
            }),
          ],
        }),
        n &&
          i.length > 0 &&
          (0, kn.jsx)("div", {
            className: jn,
            children: i.slice(0, 5).map((e) =>
              (0, kn.jsxs)(
                "div",
                {
                  className: Pn,
                  onClick: () => {
                    return ((n = e.id), s("/produtos/".concat(n)), void t());
                    var n;
                  },
                  children: [
                    (0, kn.jsx)("img", {
                      src: e.imagens[0],
                      alt: e.nome,
                      className: Tn,
                    }),
                    (0, kn.jsxs)("div", {
                      className: On,
                      children: [
                        (0, kn.jsx)("p", { className: zn, children: e.nome }),
                        (0, kn.jsxs)("p", {
                          className: Ln,
                          children: [
                            "R$ ",
                            e.preco.aVista.toFixed(2).replace(".", ","),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                e.id,
              ),
            ),
          }),
        n &&
          0 === i.length &&
          (0, kn.jsx)("div", {
            className: Rn,
            children: "Nenhum produto encontrado",
          }),
      ],
    });
  }
  function Fn() {
    const [e, t] = (0, r.useState)(!1),
      [n, a] = (0, r.useState)(!1),
      [o, l] = (0, r.useState)([]);
    return (
      (0, r.useEffect)(() => {
        const e = window.matchMedia("(min-width: 769px)"),
          n = () => {
            e.matches && t(!1);
          };
        return (
          e.addEventListener("change", n),
          () => {
            e.removeEventListener("change", n);
          }
        );
      }, []),
      (0, kn.jsxs)("header", {
        className: Et,
        children: [
          (0, kn.jsxs)("div", {
            className: Ct,
            children: [
              (0, kn.jsx)(gt, {
                to: "/",
                className: Nt,
                children: (0, kn.jsx)("img", {
                  src: Gt,
                  alt: "Sapataria Capacita Logo",
                  className: jt,
                }),
              }),
              (0, kn.jsxs)("nav", {
                className: Pt,
                children: [
                  (0, kn.jsx)(gt, { to: "/", children: "In\xedcio" }),
                  (0, kn.jsx)(gt, { to: "/sobre", children: "Sobre" }),
                  (0, kn.jsx)(gt, { to: "/produtos", children: "Produtos" }),
                ],
              }),
              (0, kn.jsxs)("div", {
                className: Tt,
                children: [
                  (0, kn.jsx)(Qt, {
                    className: "".concat(Ot, " ").concat(Dt),
                    onClick: () => a(!n),
                    style: { cursor: "pointer" },
                  }),
                  (0, kn.jsx)(Kt, { className: "".concat(Ot, " ").concat(Dt) }),
                  (0, kn.jsx)(gt, {
                    to: "/carrinho",
                    onClick: () => t(!1),
                    children: (0, kn.jsx)(xn, { isMobile: !1 }),
                  }),
                  (0, kn.jsx)("button", {
                    onClick: () => t(!e),
                    className: zt,
                    "aria-label": "Abrir menu",
                    children: e
                      ? (0, kn.jsx)(Xt, { className: Ot })
                      : (0, kn.jsx)(Yt, { className: Ot }),
                  }),
                ],
              }),
            ],
          }),
          (0, kn.jsxs)("div", {
            className: "".concat(Lt, " ").concat(e ? Rt : ""),
            children: [
              (0, kn.jsx)(gt, {
                to: "/",
                onClick: () => t(!1),
                children: "In\xedcio",
              }),
              (0, kn.jsx)(gt, {
                to: "/sobre",
                onClick: () => t(!1),
                children: "Sobre",
              }),
              (0, kn.jsx)(gt, {
                to: "/produtos",
                onClick: () => t(!1),
                children: "Produtos",
              }),
              (0, kn.jsxs)("div", {
                className: At,
                children: [
                  (0, kn.jsx)(Qt, { className: Ot }),
                  (0, kn.jsx)(Kt, { className: Ot }),
                  (0, kn.jsx)(gt, {
                    to: "/carrinho",
                    onClick: () => t(!1),
                    children: (0, kn.jsx)(xn, { className: Ot }),
                  }),
                ],
              }),
            ],
          }),
          n &&
            (0, kn.jsx)(An, { onClose: () => a(!1), onResults: (e) => l(e) }),
        ],
      })
    );
  }
  const Mn = "Banner_bannerCarousel__suEdN",
    Dn = "Banner_bannerSlides__c1JbX",
    In = "Banner_bannerImg__IxJ7P",
    Un = "Banner_ativo__vCjLf",
    Hn = "Banner_bannerBtn__wk3RV",
    Bn = "Banner_prev__mlE0T",
    $n = "Banner_next__dHPPA",
    Vn = "Banner_bannerIndicadores__vQ8hJ",
    Wn = "Banner_indicador__Sye77";
  function qn(e) {
    let { imagens: t } = e;
    const [n, a] = (0, r.useState)(0),
      o = () => {
        a((e) => (e + 1) % t.length);
      };
    return (
      (0, r.useEffect)(() => {
        const e = setInterval(() => {
          o();
        }, 5e3);
        return () => clearInterval(e);
      }, [t.length]),
      (0, kn.jsxs)("div", {
        className: Mn,
        children: [
          (0, kn.jsx)("div", {
            className: Dn,
            children: t.map((e, t) =>
              (0, kn.jsx)(
                "img",
                {
                  src: e,
                  alt: "Slide ".concat(t + 1),
                  className: "".concat(In, " ").concat(t === n ? Un : ""),
                },
                t,
              ),
            ),
          }),
          (0, kn.jsx)("button", {
            className: "".concat(Hn, " ").concat(Bn),
            onClick: () => {
              a((e) => (e - 1 + t.length) % t.length);
            },
            children: "\u276e",
          }),
          (0, kn.jsx)("button", {
            className: "".concat(Hn, " ").concat($n),
            onClick: o,
            children: "\u276f",
          }),
          (0, kn.jsx)("div", {
            className: Vn,
            children: t.map((e, t) =>
              (0, kn.jsx)(
                "span",
                {
                  className: "".concat(Wn, " ").concat(t === n ? Un : ""),
                  onClick: () =>
                    ((e) => {
                      a(e);
                    })(t),
                },
                t,
              ),
            ),
          }),
        ],
      })
    );
  }
  const Qn = ["title", "variant", "onPress", "type", "disabled"];
  function Kn(e) {
    let {
        title: t,
        variant: n = "primary",
        onPress: r,
        type: a = "button",
        disabled: l = !1,
      } = e,
      i = o(e, Qn);
    return (0, kn.jsx)(
      "button",
      c(
        c(
          {
            className: "button button--".concat(n),
            onClick: r,
            type: a,
            disabled: l,
          },
          i,
        ),
        {},
        { children: t },
      ),
    );
  }
  const Xn = function (e) {
    let { rating: t, size: n = "medium" } = e;
    const r = {
        small: "star-small",
        medium: "star-medium",
        large: "star-large",
      },
      a = r[n] || r.medium;
    return (0, kn.jsx)("div", {
      className: "stars-container ".concat(a),
      children: [1, 2, 3, 4, 5].map((e) => {
        const n = 100 * Math.max(0, Math.min(1, t - e + 1));
        return (0, kn.jsxs)(
          "div",
          {
            className: "star-container",
            children: [
              (0, kn.jsx)("div", {
                className: "star-empty",
                children: "\u2605",
              }),
              (0, kn.jsx)("div", {
                className: "star-filled",
                style: { width: "".concat(n, "%") },
                children: "\u2605",
              }),
            ],
          },
          e,
        );
      }),
    });
  };
  const Yn = function (e) {
    let { produto: t } = e;
    const [n, a] = (0, r.useState)(!1),
      o = t.imagens[0],
      l = t.imagens[1] || o,
      i = t.preco;
    return (0, kn.jsxs)(gt, {
      type: "none",
      to: "/produtos/".concat(t.id),
      className: "produto-card",
      onMouseEnter: () => a(!0),
      onMouseLeave: () => a(!1),
      children: [
        (0, kn.jsxs)("div", {
          className: "produto-imagem-container",
          children: [
            (0, kn.jsx)("img", {
              src: o,
              alt: t.nome,
              className: "produto-imagem ".concat(n ? "fade-out" : "fade-in"),
            }),
            l &&
              (0, kn.jsx)("img", {
                src: l,
                alt: t.nome,
                className: "produto-imagem ".concat(n ? "fade-in" : "fade-out"),
              }),
          ],
        }),
        (0, kn.jsxs)("div", {
          className: "produto-informacoes",
          children: [
            (0, kn.jsx)("h3", { className: "produto-nome", children: t.nome }),
            (0, kn.jsx)(Xn, { rating: t.stars, size: "medium" }),
            (0, kn.jsxs)("p", {
              className: "produto-preco-sem-desconto",
              children: ["R$ ", i.semDesconto.toFixed(2)],
            }),
            (0, kn.jsxs)("div", {
              className: "produto-opcoes-pagamento",
              children: [
                (0, kn.jsxs)("p", {
                  className: "produto-parcelado",
                  children: [
                    i.parcelado[0].parcelas,
                    "x de R$ ",
                    i.parcelado[0].valor.toFixed(2),
                    " sem juros",
                  ],
                }),
                (0, kn.jsxs)("p", {
                  className: "produto-a-vista",
                  children: [
                    "ou R$ ",
                    i.aVista.toFixed(2),
                    " \xe0 vista (5% de desconto) no Pix",
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, kn.jsx)(Kn, { title: "Comprar", variant: "primary" }),
      ],
    });
  };
  async function Gn() {
    try {
      const e = await fetch("/data/sapatos.json");
      if (!e.ok) throw new Error("Erro ao carregar o JSON");
      return await e.json();
    } catch (e) {
      return (console.error("Erro ao buscar sapatos:", e), []);
    }
  }
  const Jn = "Home_homeProdutos__vaAc0",
    Zn = "Home_gridHomeProdutos__-9LFW",
    er = "Home_btnVerTodos__ankY3",
    tr = "Home_whatsappButton__5kmXl",
    nr = "ApresentaLoja_apresentacaoLoja__y+j5M",
    rr = "ApresentaLoja_logoImage__nkvzc",
    ar = "ApresentaLoja_textoContainer__SSxkV",
    or = "ApresentaLoja_titulo__ai6IG",
    lr = "ApresentaLoja_texto__Ilh3D",
    ir = n.p + "static/media/Sapataria Sobre.5f3e5dcb2d745ba323fa.png";
  function ur() {
    return (0, kn.jsx)("section", {
      className: nr,
      children: (0, kn.jsxs)("div", {
        className: ar,
        children: [
          (0, kn.jsx)("img", {
            src: ir,
            alt: "Logo Sapataria Capacita",
            className: rr,
          }),
          (0, kn.jsxs)("div", {
            className: lr,
            children: [
              (0, kn.jsx)("h1", {
                className: or,
                children: "Sobre a Sapataria Capacita",
              }),
              (0, kn.jsxs)("p", {
                className: lr,
                children: [
                  "A ",
                  (0, kn.jsx)("strong", { children: "Sapataria Capacita" }),
                  " nasceu com o prop\xf3sito de unir estilo, inclus\xe3o e capacita\xe7\xe3o profissional. Mais do que uma marca de cal\xe7ados, somos um projeto social que acredita no poder da moda como ferramenta de transforma\xe7\xe3o. Trabalhamos com materiais de qualidade, design acess\xedvel e um compromisso com a forma\xe7\xe3o de pessoas. Cada par de sapatos conta uma hist\xf3ria de supera\xe7\xe3o, aprendizado e oportunidade. Aqui, cada passo tem significado.",
                ],
              }),
            ],
          }),
        ],
      }),
    });
  }
  function sr() {
    const [e, t] = (0, r.useState)([]),
      [n, a] = (0, r.useState)(!0);
    (0, r.useEffect)(() => {
      !(async function () {
        const e = await Gn();
        (t(e.slice(0, 3)), a(!1));
      })();
    }, []);
    return (0, kn.jsxs)("div", {
      children: [
        (0, kn.jsx)(qn, {
          imagens: [
            "https://blog.brooksfield.com.br/wp-content/uploads/2023/10/SEO_Banner_1903-500_DESK-6.jpg",
            "https://blog.brooksfield.com.br/wp-content/uploads/2023/06/SEO_Banner_1903-500_DESK.jpg",
            "https://blog.voraxacessorios.com.br/wp-content/uploads/2023/09/Como_usC3A1-los.jpg",
            "https://blog.voraxacessorios.com.br/wp-content/uploads/2023/09/Como_usar_Oxfords_masculinos.jpg",
            "https://down-br.img.susercontent.com/file/sg-11134201-7req1-m82u70vwy4r507",
          ],
        }),
        (0, kn.jsx)(ur, {}),
        (0, kn.jsxs)("section", {
          className: Jn,
          children: [
            (0, kn.jsx)("h2", { children: "Destaques da Cole\xe7\xe3o" }),
            (0, kn.jsx)("div", {
              className: Zn,
              children: e.map((e) => (0, kn.jsx)(Yn, { produto: e }, e.id)),
            }),
            (0, kn.jsx)(gt, {
              to: "/produtos",
              className: er,
              children: "Ver todos os produtos",
            }),
          ],
        }),
        (0, kn.jsx)("a", {
          href: "https://wa.me/5599999999999",
          className: tr,
          target: "_blank",
          rel: "noopener noreferrer",
          children: (0, kn.jsx)("img", {
            src: "https://cdn-icons-png.flaticon.com/512/124/124034.png",
            alt: "whatsapp",
          }),
        }),
      ],
    });
  }
  function cr(e) {
    let { tipos: t, filtros: n, setFiltros: r } = e;
    return (0, kn.jsxs)("div", {
      className: "filtro-secao",
      children: [
        (0, kn.jsx)("h3", { className: "filtro-titulo", children: "Tipo" }),
        (0, kn.jsx)("div", {
          className: "opcoes-container",
          children: t.map((e) =>
            (0, kn.jsxs)(
              "label",
              {
                className: "opcao-item",
                children: [
                  (0, kn.jsx)("input", {
                    type: "checkbox",
                    checked: n.tipo.includes(e),
                    onChange: () =>
                      ((e) => {
                        const t = n.tipo.includes(e);
                        r((n) =>
                          c(
                            c({}, n),
                            {},
                            {
                              tipo: t
                                ? n.tipo.filter((t) => t !== e)
                                : [...n.tipo, e],
                            },
                          ),
                        );
                      })(e),
                    className: "opcao-checkbox",
                  }),
                  (0, kn.jsx)("span", {
                    className: "opcao-texto",
                    children: e,
                  }),
                ],
              },
              e,
            ),
          ),
        }),
      ],
    });
  }
  function dr(e) {
    let { cores: t, filtros: n, setFiltros: r } = e;
    return (0, kn.jsxs)("div", {
      className: "filtro-secao",
      children: [
        (0, kn.jsx)("h3", { className: "filtro-titulo", children: "Cor" }),
        (0, kn.jsx)("div", {
          className: "opcoes-container opcoes-cor",
          children: t.map((e) =>
            (0, kn.jsxs)(
              "label",
              {
                className: "opcao-item",
                children: [
                  (0, kn.jsx)("input", {
                    type: "checkbox",
                    checked: n.cor.includes(e),
                    onChange: () =>
                      ((e) => {
                        const t = n.cor.includes(e);
                        r((n) =>
                          c(
                            c({}, n),
                            {},
                            {
                              cor: t
                                ? n.cor.filter((t) => t !== e)
                                : [...n.cor, e],
                            },
                          ),
                        );
                      })(e),
                    className: "opcao-checkbox",
                  }),
                  (0, kn.jsx)("span", {
                    className: "opcao-texto",
                    children: e,
                  }),
                ],
              },
              e,
            ),
          ),
        }),
      ],
    });
  }
  function fr(e) {
    let { filtros: t, setFiltros: n } = e;
    return (0, kn.jsxs)("div", {
      className: "filtro-secao",
      children: [
        (0, kn.jsx)("h3", {
          className: "filtro-titulo",
          children: "Faixa de Pre\xe7o",
        }),
        (0, kn.jsxs)("div", {
          className: "range-container",
          children: [
            (0, kn.jsxs)("div", {
              className: "range-inputs",
              children: [
                (0, kn.jsx)("input", {
                  type: "range",
                  min: "200",
                  max: "2000",
                  step: "50",
                  value: t.precoMin,
                  onChange: (e) => {
                    const r = Number(e.target.value);
                    r <= t.precoMax &&
                      n((e) => c(c({}, e), {}, { precoMin: r }));
                  },
                  className: "range-slider",
                }),
                (0, kn.jsx)("input", {
                  type: "range",
                  min: "200",
                  max: "2000",
                  step: "50",
                  value: t.precoMax,
                  onChange: (e) => {
                    const r = Number(e.target.value);
                    r >= t.precoMin &&
                      n((e) => c(c({}, e), {}, { precoMax: r }));
                  },
                  className: "range-slider",
                }),
              ],
            }),
            (0, kn.jsxs)("p", {
              className: "range-valores",
              children: [
                "R$ ",
                (0, kn.jsx)("span", {
                  className: "valor-destaque",
                  children: t.precoMin,
                }),
                " at\xe9 R$ ",
                (0, kn.jsx)("span", {
                  className: "valor-destaque",
                  children: t.precoMax,
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  function pr(e) {
    let { filtros: t, setFiltros: n, opcoes: r, aberto: a, setAberto: o } = e;
    return (0, kn.jsxs)("aside", {
      className: "filtro-lateral ".concat(a ? "aberto" : ""),
      children: [
        (0, kn.jsx)("button", {
          className: "fechar-filtro",
          onClick: () => o(!1),
          children: "\xd7",
        }),
        (0, kn.jsx)("h2", { children: "Filtros" }),
        (0, kn.jsx)(fr, { filtros: t, setFiltros: n }),
        (0, kn.jsx)(cr, { tipos: r.tipos, filtros: t, setFiltros: n }),
        (0, kn.jsx)(dr, { cores: r.cores, filtros: t, setFiltros: n }),
      ],
    });
  }
  const mr = function () {
      const [e, t] = (0, r.useState)([]),
        [n, a] = (0, r.useState)(15),
        [o, l] = (0, r.useState)({
          nome: "",
          tipo: [],
          cor: [],
          precoMin: 200,
          precoMax: 2e3,
        }),
        [i, u] = (0, r.useState)(!1),
        [s] = kt(),
        [d, f] = (0, r.useState)(s.get("q") || "");
      ((0, r.useEffect)(() => {
        !(async function () {
          const e = await Gn();
          t(e);
        })();
      }, []),
        (0, r.useEffect)(() => {
          const e = setTimeout(() => {
            l((e) => c(c({}, e), {}, { nome: d }));
          }, 500);
          return () => clearTimeout(e);
        }, [d]),
        (0, r.useEffect)(() => {
          const e = s.get("q") || "";
          e !== d && (f(e), l((t) => c(c({}, t), {}, { nome: e })));
        }, [s]));
      const p = e.filter((e) => {
          var t;
          const n =
              !o.nome || e.nome.toLowerCase().includes(o.nome.toLowerCase()),
            r = 0 === o.tipo.length || o.tipo.includes(e.tipo),
            a = 0 === o.cor.length || o.cor.includes(e.cor || ""),
            l =
              (null === (t = e.preco) || void 0 === t ? void 0 : t.aVista) || 0,
            i = l >= o.precoMin && l <= o.precoMax;
          return n && r && a && i;
        }),
        m = [...new Set(p.map((e) => e.tipo))],
        h = [...new Set(p.map((e) => e.cor).filter(Boolean))],
        g = n < p.length;
      return (0, kn.jsxs)("div", {
        className: "produtos-container",
        children: [
          (0, kn.jsxs)("div", {
            className: "produtos-area",
            children: [
              (0, kn.jsx)(Kn, {
                title: "Abrir filtro",
                onClick: () => u(!0),
                variant: "abrir-filtro",
                children: "Abrir Filtros",
              }),
              (0, kn.jsx)("h1", {
                className: "titulo-pagina",
                children: "Todos os Produtos",
              }),
              (0, kn.jsx)("div", {
                className: "grid-produtos",
                children: p
                  .slice(0, n)
                  .map((e) => (0, kn.jsx)(Yn, { produto: e }, e.id)),
              }),
              g &&
                (0, kn.jsx)(Kn, {
                  onPress: () => {
                    a((e) => e + 15);
                  },
                  variant: "primary",
                  title: "Carregar mais produtos",
                }),
            ],
          }),
          (0, kn.jsx)(pr, {
            aberto: i,
            setAberto: u,
            filtros: o,
            setFiltros: l,
            opcoes: { tipos: m, cores: h },
            nomeInput: d,
            setNomeInput: f,
          }),
        ],
      });
    },
    hr = "Time_timeSection__L7ykm",
    gr = "Time_title__PL5Ku",
    yr = "Time_cardsContainer__wZ8cn",
    vr = "Time_card__kgJsE",
    br = "Time_foto__6CluZ",
    wr = "Time_nome__HE650",
    kr = "Time_cargo__sKEsB",
    xr = [
      {
        nome: "Isac Dias",
        cargo: "Desenvolvedor Full Stack",
        foto: "https://avatars.githubusercontent.com/u/87917139?v=4",
      },
      {
        nome: "Beatriz Castro",
        cargo: "Desenvolvedora Full Stack",
        foto: "https://avatars.githubusercontent.com/u/136024712?v=4",
      },
      {
        nome: "Bruno Erick",
        cargo: "Desenvolvedor Full Stack",
        foto: "https://avatars.githubusercontent.com/u/141072611?v=4",
      },
      {
        nome: "Ramiro Dantas",
        cargo: "Desenvolvedor Full Stack",
        foto: "https://avatars.githubusercontent.com/u/58824534?v=4",
      },
      {
        nome: "Jos\xe9 Cleudiano",
        cargo: "Desenvolvedor Full Stack",
        foto: "https://avatars.githubusercontent.com/u/202461120?v=4",
      },
      {
        nome: "Adison",
        cargo: "Desenvolvedor Full Stack",
        foto: "https://avatars.githubusercontent.com/u/208545833?v=4",
      },
    ];
  function Sr() {
    return (0, kn.jsxs)("section", {
      className: hr,
      children: [
        (0, kn.jsx)("h2", { className: gr, children: "Nosso Time" }),
        (0, kn.jsx)("div", {
          className: yr,
          children: xr.map((e, t) =>
            (0, kn.jsxs)(
              "div",
              {
                className: vr,
                children: [
                  (0, kn.jsx)("img", {
                    src: e.foto,
                    alt: e.nome,
                    className: br,
                  }),
                  (0, kn.jsx)("h3", { className: wr, children: e.nome }),
                  (0, kn.jsx)("p", { className: kr, children: e.cargo }),
                ],
              },
              t,
            ),
          ),
        }),
      ],
    });
  }
  const _r = { sobre: "Sobre_sobre__1xvDV" };
  function Er() {
    return (0, kn.jsx)("section", {
      className: _r.sobre,
      children: (0, kn.jsxs)("div", {
        className: _r.equipeContainer,
        children: [(0, kn.jsx)(ur, {}), (0, kn.jsx)(Sr, {})],
      }),
    });
  }
  const Cr = "Footer_footer__7s8MZ",
    Nr = "Footer_grid__6ux2o",
    jr = "Footer_brand__NsJRB",
    Pr = "Footer_slogan__A0kWu",
    Tr = "Footer_title__lNlzU",
    Or = "Footer_list__7gmdE",
    zr = "Footer_text__RCAXu",
    Lr = "Footer_form__FN6GT",
    Rr = "Footer_bottom__HBLxk",
    Ar = "Footer_social__jDmDw",
    Fr = "Footer_icon__OtadJ";
  function Mr() {
    return (0, kn.jsxs)("footer", {
      className: Cr,
      children: [
        (0, kn.jsxs)("div", {
          className: Nr,
          children: [
            (0, kn.jsxs)("div", {
              children: [
                (0, kn.jsx)("h2", {
                  className: jr,
                  children: "Sapataria Capacita",
                }),
                (0, kn.jsx)("p", {
                  className: Pr,
                  children: "Eleg\xe2ncia em cada passo.",
                }),
              ],
            }),
            (0, kn.jsxs)("div", {
              children: [
                (0, kn.jsx)("h3", {
                  className: Tr,
                  children: "Links R\xe1pidos",
                }),
                (0, kn.jsxs)("ul", {
                  className: Or,
                  children: [
                    (0, kn.jsx)("li", {
                      children: (0, kn.jsx)(gt, {
                        to: "/",
                        children: "Inicio",
                      }),
                    }),
                    (0, kn.jsx)("li", {
                      children: (0, kn.jsx)(gt, {
                        to: "/sobre",
                        children: "Sobre",
                      }),
                    }),
                    (0, kn.jsx)("li", {
                      children: (0, kn.jsx)(gt, {
                        to: "/produtos",
                        children: "Produtos",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, kn.jsxs)("div", {
              children: [
                (0, kn.jsx)("h3", { className: Tr, children: "Newsletter" }),
                (0, kn.jsx)("p", {
                  className: zr,
                  children:
                    "Assine para receber novidades e ofertas exclusivas.",
                }),
                (0, kn.jsxs)("form", {
                  className: Lr,
                  children: [
                    (0, kn.jsx)("input", {
                      type: "email",
                      placeholder: "Seu email",
                    }),
                    (0, kn.jsx)("button", {
                      type: "submit",
                      children: "Assinar",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, kn.jsxs)("div", {
          className: Rr,
          children: [
            (0, kn.jsx)("p", {
              children:
                "\xa9 2025 Sapataria Capacita. Todos os direitos reservados.",
            }),
            (0, kn.jsxs)("div", {
              className: Ar,
              children: [
                (0, kn.jsx)("img", {
                  src: "/assets/RedeSociais/instagram.png",
                  alt: "Instagram",
                  className: Fr,
                }),
                (0, kn.jsx)("img", {
                  src: "/assets/RedeSociais/twitter.png",
                  alt: "Twitter",
                  className: Fr,
                }),
                (0, kn.jsx)("img", {
                  src: "/assets/RedeSociais/facebook.png",
                  alt: "Facebook",
                  className: Fr,
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  function Dr(e) {
    return "Minified Redux error #"
      .concat(e, "; visit https://redux.js.org/Errors?code=")
      .concat(
        e,
        " for the full message or use the non-minified dev environment for full errors. ",
      );
  }
  var Ir = (() =>
      ("function" === typeof Symbol && Symbol.observable) || "@@observable")(),
    Ur = () => Math.random().toString(36).substring(7).split("").join("."),
    Hr = {
      INIT: "@@redux/INIT".concat(Ur()),
      REPLACE: "@@redux/REPLACE".concat(Ur()),
      PROBE_UNKNOWN_ACTION: () => "@@redux/PROBE_UNKNOWN_ACTION".concat(Ur()),
    };
  function Br(e) {
    if ("object" !== typeof e || null === e) return !1;
    let t = e;
    for (; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t || null === Object.getPrototypeOf(e);
  }
  function $r(e, t, n) {
    if ("function" !== typeof e) throw new Error(Dr(2));
    if (
      ("function" === typeof t && "function" === typeof n) ||
      ("function" === typeof n && "function" === typeof arguments[3])
    )
      throw new Error(Dr(0));
    if (
      ("function" === typeof t &&
        "undefined" === typeof n &&
        ((n = t), (t = void 0)),
      "undefined" !== typeof n)
    ) {
      if ("function" !== typeof n) throw new Error(Dr(1));
      return n($r)(e, t);
    }
    let r = e,
      a = t,
      o = new Map(),
      l = o,
      i = 0,
      u = !1;
    function s() {
      l === o &&
        ((l = new Map()),
        o.forEach((e, t) => {
          l.set(t, e);
        }));
    }
    function c() {
      if (u) throw new Error(Dr(3));
      return a;
    }
    function d(e) {
      if ("function" !== typeof e) throw new Error(Dr(4));
      if (u) throw new Error(Dr(5));
      let t = !0;
      s();
      const n = i++;
      return (
        l.set(n, e),
        function () {
          if (t) {
            if (u) throw new Error(Dr(6));
            ((t = !1), s(), l.delete(n), (o = null));
          }
        }
      );
    }
    function f(e) {
      if (!Br(e)) throw new Error(Dr(7));
      if ("undefined" === typeof e.type) throw new Error(Dr(8));
      if ("string" !== typeof e.type) throw new Error(Dr(17));
      if (u) throw new Error(Dr(9));
      try {
        ((u = !0), (a = r(a, e)));
      } finally {
        u = !1;
      }
      return (
        (o = l).forEach((e) => {
          e();
        }),
        e
      );
    }
    f({ type: Hr.INIT });
    return {
      dispatch: f,
      subscribe: d,
      getState: c,
      replaceReducer: function (e) {
        if ("function" !== typeof e) throw new Error(Dr(10));
        ((r = e), f({ type: Hr.REPLACE }));
      },
      [Ir]: function () {
        const e = d;
        return {
          subscribe(t) {
            if ("object" !== typeof t || null === t) throw new Error(Dr(11));
            function n() {
              const e = t;
              e.next && e.next(c());
            }
            n();
            return { unsubscribe: e(n) };
          },
          [Ir]() {
            return this;
          },
        };
      },
    };
  }
  function Vr(e) {
    const t = Object.keys(e),
      n = {};
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      (0, "function" === typeof e[r] && (n[r] = e[r]));
    }
    const r = Object.keys(n);
    let a;
    try {
      !(function (e) {
        Object.keys(e).forEach((t) => {
          const n = e[t];
          if ("undefined" === typeof n(void 0, { type: Hr.INIT }))
            throw new Error(Dr(12));
          if (
            "undefined" ===
            typeof n(void 0, { type: Hr.PROBE_UNKNOWN_ACTION() })
          )
            throw new Error(Dr(13));
        });
      })(n);
    } catch (yl) {
      a = yl;
    }
    return function () {
      let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 ? arguments[1] : void 0;
      if (a) throw a;
      let o = !1;
      const l = {};
      for (let a = 0; a < r.length; a++) {
        const i = r[a],
          u = n[i],
          s = e[i],
          c = u(s, t);
        if ("undefined" === typeof c) {
          t && t.type;
          throw new Error(Dr(14));
        }
        ((l[i] = c), (o = o || c !== s));
      }
      return ((o = o || r.length !== Object.keys(e).length), o ? l : e);
    };
  }
  function Wr() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return 0 === t.length
      ? (e) => e
      : 1 === t.length
        ? t[0]
        : t.reduce(
            (e, t) =>
              function () {
                return e(t(...arguments));
              },
          );
  }
  function qr(e) {
    return (t) => {
      let { dispatch: n, getState: r } = t;
      return (t) => (a) => ("function" === typeof a ? a(n, r, e) : t(a));
    };
  }
  var Qr = qr(),
    Kr = qr,
    Xr = Symbol.for("immer-nothing"),
    Yr = Symbol.for("immer-draftable"),
    Gr = Symbol.for("immer-state");
  function Jr(e) {
    throw new Error(
      "[Immer] minified error nr: ".concat(
        e,
        ". Full error at: https://bit.ly/3cXEKWf",
      ),
    );
  }
  var Zr = Object.getPrototypeOf;
  function ea(e) {
    return !!e && !!e[Gr];
  }
  function ta(e) {
    var t;
    return (
      !!e &&
      (ra(e) ||
        Array.isArray(e) ||
        !!e[Yr] ||
        !(null === (t = e.constructor) || void 0 === t || !t[Yr]) ||
        ua(e) ||
        sa(e))
    );
  }
  var na = Object.prototype.constructor.toString();
  function ra(e) {
    if (!e || "object" !== typeof e) return !1;
    const t = Zr(e);
    if (null === t) return !0;
    const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return (
      n === Object ||
      ("function" == typeof n && Function.toString.call(n) === na)
    );
  }
  function aa(e, t) {
    0 === oa(e)
      ? Reflect.ownKeys(e).forEach((n) => {
          t(n, e[n], e);
        })
      : e.forEach((n, r) => t(r, n, e));
  }
  function oa(e) {
    const t = e[Gr];
    return t ? t.type_ : Array.isArray(e) ? 1 : ua(e) ? 2 : sa(e) ? 3 : 0;
  }
  function la(e, t) {
    return 2 === oa(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
  }
  function ia(e, t, n) {
    const r = oa(e);
    2 === r ? e.set(t, n) : 3 === r ? e.add(n) : (e[t] = n);
  }
  function ua(e) {
    return e instanceof Map;
  }
  function sa(e) {
    return e instanceof Set;
  }
  function ca(e) {
    return e.copy_ || e.base_;
  }
  function da(e, t) {
    if (ua(e)) return new Map(e);
    if (sa(e)) return new Set(e);
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    const n = ra(e);
    if (!0 === t || ("class_only" === t && !n)) {
      const t = Object.getOwnPropertyDescriptors(e);
      delete t[Gr];
      let n = Reflect.ownKeys(t);
      for (let r = 0; r < n.length; r++) {
        const a = n[r],
          o = t[a];
        (!1 === o.writable && ((o.writable = !0), (o.configurable = !0)),
          (o.get || o.set) &&
            (t[a] = {
              configurable: !0,
              writable: !0,
              enumerable: o.enumerable,
              value: e[a],
            }));
      }
      return Object.create(Zr(e), t);
    }
    {
      const t = Zr(e);
      if (null !== t && n) return c({}, e);
      const r = Object.create(t);
      return Object.assign(r, e);
    }
  }
  function fa(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (
      ma(e) ||
        ea(e) ||
        !ta(e) ||
        (oa(e) > 1 && (e.set = e.add = e.clear = e.delete = pa),
        Object.freeze(e),
        t &&
          Object.entries(e).forEach((e) => {
            let [t, n] = e;
            return fa(n, !0);
          })),
      e
    );
  }
  function pa() {
    Jr(2);
  }
  function ma(e) {
    return Object.isFrozen(e);
  }
  var ha,
    ga = {};
  function ya(e) {
    const t = ga[e];
    return (t || Jr(0), t);
  }
  function va() {
    return ha;
  }
  function ba(e, t) {
    t &&
      (ya("Patches"),
      (e.patches_ = []),
      (e.inversePatches_ = []),
      (e.patchListener_ = t));
  }
  function wa(e) {
    (ka(e), e.drafts_.forEach(Sa), (e.drafts_ = null));
  }
  function ka(e) {
    e === ha && (ha = e.parent_);
  }
  function xa(e) {
    return (ha = {
      drafts_: [],
      parent_: ha,
      immer_: e,
      canAutoFreeze_: !0,
      unfinalizedDrafts_: 0,
    });
  }
  function Sa(e) {
    const t = e[Gr];
    0 === t.type_ || 1 === t.type_ ? t.revoke_() : (t.revoked_ = !0);
  }
  function _a(e, t) {
    t.unfinalizedDrafts_ = t.drafts_.length;
    const n = t.drafts_[0];
    return (
      void 0 !== e && e !== n
        ? (n[Gr].modified_ && (wa(t), Jr(4)),
          ta(e) && ((e = Ea(t, e)), t.parent_ || Na(t, e)),
          t.patches_ &&
            ya("Patches").generateReplacementPatches_(
              n[Gr].base_,
              e,
              t.patches_,
              t.inversePatches_,
            ))
        : (e = Ea(t, n, [])),
      wa(t),
      t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
      e !== Xr ? e : void 0
    );
  }
  function Ea(e, t, n) {
    if (ma(t)) return t;
    const r = t[Gr];
    if (!r) return (aa(t, (a, o) => Ca(e, r, t, a, o, n)), t);
    if (r.scope_ !== e) return t;
    if (!r.modified_) return (Na(e, r.base_, !0), r.base_);
    if (!r.finalized_) {
      ((r.finalized_ = !0), r.scope_.unfinalizedDrafts_--);
      const t = r.copy_;
      let a = t,
        o = !1;
      (3 === r.type_ && ((a = new Set(t)), t.clear(), (o = !0)),
        aa(a, (a, l) => Ca(e, r, t, a, l, n, o)),
        Na(e, t, !1),
        n &&
          e.patches_ &&
          ya("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_));
    }
    return r.copy_;
  }
  function Ca(e, t, n, r, a, o, l) {
    if (ea(a)) {
      const l = Ea(
        e,
        a,
        o && t && 3 !== t.type_ && !la(t.assigned_, r) ? o.concat(r) : void 0,
      );
      if ((ia(n, r, l), !ea(l))) return;
      e.canAutoFreeze_ = !1;
    } else l && n.add(a);
    if (ta(a) && !ma(a)) {
      if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
      (Ea(e, a),
        (t && t.scope_.parent_) ||
          "symbol" === typeof r ||
          !Object.prototype.propertyIsEnumerable.call(n, r) ||
          Na(e, a));
    }
  }
  function Na(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && fa(t, n);
  }
  var ja = {
      get(e, t) {
        if (t === Gr) return e;
        const n = ca(e);
        if (!la(n, t))
          return (function (e, t, n) {
            var r;
            const a = Oa(t, n);
            return a
              ? "value" in a
                ? a.value
                : null === (r = a.get) || void 0 === r
                  ? void 0
                  : r.call(e.draft_)
              : void 0;
          })(e, n, t);
        const r = n[t];
        return e.finalized_ || !ta(r)
          ? r
          : r === Ta(e.base_, t)
            ? (La(e), (e.copy_[t] = Ra(r, e)))
            : r;
      },
      has: (e, t) => t in ca(e),
      ownKeys: (e) => Reflect.ownKeys(ca(e)),
      set(e, t, n) {
        const r = Oa(ca(e), t);
        if (null !== r && void 0 !== r && r.set)
          return (r.set.call(e.draft_, n), !0);
        if (!e.modified_) {
          const r = Ta(ca(e), t),
            l = null === r || void 0 === r ? void 0 : r[Gr];
          if (l && l.base_ === n)
            return ((e.copy_[t] = n), (e.assigned_[t] = !1), !0);
          if (
            ((a = n) === (o = r)
              ? 0 !== a || 1 / a === 1 / o
              : a !== a && o !== o) &&
            (void 0 !== n || la(e.base_, t))
          )
            return !0;
          (La(e), za(e));
        }
        var a, o;
        return (
          (e.copy_[t] === n && (void 0 !== n || t in e.copy_)) ||
            (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
            ((e.copy_[t] = n), (e.assigned_[t] = !0)),
          !0
        );
      },
      deleteProperty: (e, t) => (
        void 0 !== Ta(e.base_, t) || t in e.base_
          ? ((e.assigned_[t] = !1), La(e), za(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      ),
      getOwnPropertyDescriptor(e, t) {
        const n = ca(e),
          r = Reflect.getOwnPropertyDescriptor(n, t);
        return r
          ? {
              writable: !0,
              configurable: 1 !== e.type_ || "length" !== t,
              enumerable: r.enumerable,
              value: n[t],
            }
          : r;
      },
      defineProperty() {
        Jr(11);
      },
      getPrototypeOf: (e) => Zr(e.base_),
      setPrototypeOf() {
        Jr(12);
      },
    },
    Pa = {};
  function Ta(e, t) {
    const n = e[Gr];
    return (n ? ca(n) : e)[t];
  }
  function Oa(e, t) {
    if (!(t in e)) return;
    let n = Zr(e);
    for (; n; ) {
      const e = Object.getOwnPropertyDescriptor(n, t);
      if (e) return e;
      n = Zr(n);
    }
  }
  function za(e) {
    e.modified_ || ((e.modified_ = !0), e.parent_ && za(e.parent_));
  }
  function La(e) {
    e.copy_ || (e.copy_ = da(e.base_, e.scope_.immer_.useStrictShallowCopy_));
  }
  (aa(ja, (e, t) => {
    Pa[e] = function () {
      return ((arguments[0] = arguments[0][0]), t.apply(this, arguments));
    };
  }),
    (Pa.deleteProperty = function (e, t) {
      return Pa.set.call(this, e, t, void 0);
    }),
    (Pa.set = function (e, t, n) {
      return ja.set.call(this, e[0], t, n, e[0]);
    }));
  function Ra(e, t) {
    const n = ua(e)
      ? ya("MapSet").proxyMap_(e, t)
      : sa(e)
        ? ya("MapSet").proxySet_(e, t)
        : (function (e, t) {
            const n = Array.isArray(e),
              r = {
                type_: n ? 1 : 0,
                scope_: t ? t.scope_ : va(),
                modified_: !1,
                finalized_: !1,
                assigned_: {},
                parent_: t,
                base_: e,
                draft_: null,
                copy_: null,
                revoke_: null,
                isManual_: !1,
              };
            let a = r,
              o = ja;
            n && ((a = [r]), (o = Pa));
            const { revoke: l, proxy: i } = Proxy.revocable(a, o);
            return ((r.draft_ = i), (r.revoke_ = l), i);
          })(e, t);
    return ((t ? t.scope_ : va()).drafts_.push(n), n);
  }
  function Aa(e) {
    if (!ta(e) || ma(e)) return e;
    const t = e[Gr];
    let n;
    if (t) {
      if (!t.modified_) return t.base_;
      ((t.finalized_ = !0), (n = da(e, t.scope_.immer_.useStrictShallowCopy_)));
    } else n = da(e, !0);
    return (
      aa(n, (e, t) => {
        ia(n, e, Aa(t));
      }),
      t && (t.finalized_ = !1),
      n
    );
  }
  var Fa = new (class {
      constructor(e) {
        var t = this;
        ((this.autoFreeze_ = !0),
          (this.useStrictShallowCopy_ = !1),
          (this.produce = (e, t, n) => {
            if ("function" === typeof e && "function" !== typeof t) {
              const n = t;
              t = e;
              const r = this;
              return function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : n;
                for (
                  var a = arguments.length,
                    o = new Array(a > 1 ? a - 1 : 0),
                    l = 1;
                  l < a;
                  l++
                )
                  o[l - 1] = arguments[l];
                return r.produce(e, (e) => t.call(this, e, ...o));
              };
            }
            let r;
            if (
              ("function" !== typeof t && Jr(6),
              void 0 !== n && "function" !== typeof n && Jr(7),
              ta(e))
            ) {
              const a = xa(this),
                o = Ra(e, void 0);
              let l = !0;
              try {
                ((r = t(o)), (l = !1));
              } finally {
                l ? wa(a) : ka(a);
              }
              return (ba(a, n), _a(r, a));
            }
            if (!e || "object" !== typeof e) {
              if (
                ((r = t(e)),
                void 0 === r && (r = e),
                r === Xr && (r = void 0),
                this.autoFreeze_ && fa(r, !0),
                n)
              ) {
                const t = [],
                  a = [];
                (ya("Patches").generateReplacementPatches_(e, r, t, a),
                  n(t, a));
              }
              return r;
            }
            Jr(1);
          }),
          (this.produceWithPatches = (e, n) => {
            if ("function" === typeof e)
              return function (n) {
                for (
                  var r = arguments.length,
                    a = new Array(r > 1 ? r - 1 : 0),
                    o = 1;
                  o < r;
                  o++
                )
                  a[o - 1] = arguments[o];
                return t.produceWithPatches(n, (t) => e(t, ...a));
              };
            let r, a;
            return [
              this.produce(e, n, (e, t) => {
                ((r = e), (a = t));
              }),
              r,
              a,
            ];
          }),
          "boolean" ===
            typeof (null === e || void 0 === e ? void 0 : e.autoFreeze) &&
            this.setAutoFreeze(e.autoFreeze),
          "boolean" ===
            typeof (null === e || void 0 === e
              ? void 0
              : e.useStrictShallowCopy) &&
            this.setUseStrictShallowCopy(e.useStrictShallowCopy));
      }
      createDraft(e) {
        (ta(e) || Jr(8),
          ea(e) &&
            (e = (function (e) {
              ea(e) || Jr(10);
              return Aa(e);
            })(e)));
        const t = xa(this),
          n = Ra(e, void 0);
        return ((n[Gr].isManual_ = !0), ka(t), n);
      }
      finishDraft(e, t) {
        const n = e && e[Gr];
        (n && n.isManual_) || Jr(9);
        const { scope_: r } = n;
        return (ba(r, t), _a(void 0, r));
      }
      setAutoFreeze(e) {
        this.autoFreeze_ = e;
      }
      setUseStrictShallowCopy(e) {
        this.useStrictShallowCopy_ = e;
      }
      applyPatches(e, t) {
        let n;
        for (n = t.length - 1; n >= 0; n--) {
          const r = t[n];
          if (0 === r.path.length && "replace" === r.op) {
            e = r.value;
            break;
          }
        }
        n > -1 && (t = t.slice(n + 1));
        const r = ya("Patches").applyPatches_;
        return ea(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
      }
    })(),
    Ma = Fa.produce;
  (Fa.produceWithPatches.bind(Fa),
    Fa.setAutoFreeze.bind(Fa),
    Fa.setUseStrictShallowCopy.bind(Fa),
    Fa.applyPatches.bind(Fa),
    Fa.createDraft.bind(Fa),
    Fa.finishDraft.bind(Fa));
  const Da = ["reducerPath"];
  var Ia =
    "undefined" !== typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (0 !== arguments.length)
            return "object" === typeof arguments[0]
              ? Wr
              : Wr.apply(null, arguments);
        };
  "undefined" !== typeof window &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__;
  function Ua(e, t) {
    function n() {
      if (t) {
        let n = t(...arguments);
        if (!n) throw new Error(io(0));
        return c(
          c({ type: e, payload: n.payload }, "meta" in n && { meta: n.meta }),
          "error" in n && { error: n.error },
        );
      }
      return {
        type: e,
        payload: arguments.length <= 0 ? void 0 : arguments[0],
      };
    }
    return (
      (n.toString = () => "".concat(e)),
      (n.type = e),
      (n.match = (t) =>
        (function (e) {
          return Br(e) && "type" in e && "string" === typeof e.type;
        })(t) && t.type === e),
      n
    );
  }
  var Ha = class e extends Array {
    constructor() {
      (super(...arguments), Object.setPrototypeOf(this, e.prototype));
    }
    static get [Symbol.species]() {
      return e;
    }
    concat() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return super.concat.apply(this, t);
    }
    prepend() {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      return 1 === n.length && Array.isArray(n[0])
        ? new e(...n[0].concat(this))
        : new e(...n.concat(this));
    }
  };
  function Ba(e) {
    return ta(e) ? Ma(e, () => {}) : e;
  }
  function $a(e, t, n) {
    return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
  }
  var Va = "RTK_autoBatch",
    Wa = (e) => (t) => {
      setTimeout(t, e);
    },
    qa = (e) =>
      function (t) {
        const { autoBatch: n = !0 } = null !== t && void 0 !== t ? t : {};
        let r = new Ha(e);
        return (
          n &&
            r.push(
              (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : { type: "raf" };
                return (t) =>
                  function () {
                    const n = t(...arguments);
                    let r = !0,
                      a = !1,
                      o = !1;
                    const l = new Set(),
                      i =
                        "tick" === e.type
                          ? queueMicrotask
                          : "raf" === e.type
                            ? "undefined" !== typeof window &&
                              window.requestAnimationFrame
                              ? window.requestAnimationFrame
                              : Wa(10)
                            : "callback" === e.type
                              ? e.queueNotification
                              : Wa(e.timeout),
                      u = () => {
                        ((o = !1), a && ((a = !1), l.forEach((e) => e())));
                      };
                    return Object.assign({}, n, {
                      subscribe(e) {
                        const t = n.subscribe(() => r && e());
                        return (
                          l.add(e),
                          () => {
                            (t(), l.delete(e));
                          }
                        );
                      },
                      dispatch(e) {
                        try {
                          var t;
                          return (
                            (r = !(
                              null !== e &&
                              void 0 !== e &&
                              null !== (t = e.meta) &&
                              void 0 !== t &&
                              t[Va]
                            )),
                            (a = !r),
                            a && (o || ((o = !0), i(u))),
                            n.dispatch(e)
                          );
                        } finally {
                          r = !0;
                        }
                      },
                    });
                  };
              })("object" === typeof n ? n : void 0),
            ),
          r
        );
      };
  function Qa(e) {
    const t = {},
      n = [];
    let r;
    const a = {
      addCase(e, n) {
        const r = "string" === typeof e ? e : e.type;
        if (!r) throw new Error(io(28));
        if (r in t) throw new Error(io(29));
        return ((t[r] = n), a);
      },
      addMatcher: (e, t) => (n.push({ matcher: e, reducer: t }), a),
      addDefaultCase: (e) => ((r = e), a),
    };
    return (e(a), [t, n, r]);
  }
  var Ka = Symbol.for("rtk-slice-createasyncthunk");
  function Xa(e, t) {
    return "".concat(e, "/").concat(t);
  }
  function Ya() {
    var e;
    let { creators: t } =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const n =
      null === t || void 0 === t || null === (e = t.asyncThunk) || void 0 === e
        ? void 0
        : e[Ka];
    return function (e) {
      const { name: t, reducerPath: r = t } = e;
      if (!t) throw new Error(io(11));
      const a =
          ("function" === typeof e.reducers
            ? e.reducers(
                (function () {
                  function e(e, t) {
                    return c(
                      {
                        _reducerDefinitionType: "asyncThunk",
                        payloadCreator: e,
                      },
                      t,
                    );
                  }
                  return (
                    (e.withTypes = () => e),
                    {
                      reducer: (e) =>
                        Object.assign(
                          {
                            [e.name]() {
                              return e(...arguments);
                            },
                          }[e.name],
                          { _reducerDefinitionType: "reducer" },
                        ),
                      preparedReducer: (e, t) => ({
                        _reducerDefinitionType: "reducerWithPrepare",
                        prepare: e,
                        reducer: t,
                      }),
                      asyncThunk: e,
                    }
                  );
                })(),
              )
            : e.reducers) || {},
        l = Object.keys(a),
        i = {
          sliceCaseReducersByName: {},
          sliceCaseReducersByType: {},
          actionCreators: {},
          sliceMatchers: [],
        },
        u = {
          addCase(e, t) {
            const n = "string" === typeof e ? e : e.type;
            if (!n) throw new Error(io(12));
            if (n in i.sliceCaseReducersByType) throw new Error(io(13));
            return ((i.sliceCaseReducersByType[n] = t), u);
          },
          addMatcher: (e, t) => (
            i.sliceMatchers.push({ matcher: e, reducer: t }),
            u
          ),
          exposeAction: (e, t) => ((i.actionCreators[e] = t), u),
          exposeCaseReducer: (e, t) => ((i.sliceCaseReducersByName[e] = t), u),
        };
      function s() {
        const [t = {}, n = [], r] =
            "function" === typeof e.extraReducers
              ? Qa(e.extraReducers)
              : [e.extraReducers],
          a = c(c({}, t), i.sliceCaseReducersByType);
        return (function (e, t) {
          let n,
            [r, a, o] = Qa(t);
          if ("function" === typeof e) n = () => Ba(e());
          else {
            const t = Ba(e);
            n = () => t;
          }
          function l() {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : n(),
              t = arguments.length > 1 ? arguments[1] : void 0,
              l = [
                r[t.type],
                ...a
                  .filter((e) => {
                    let { matcher: n } = e;
                    return n(t);
                  })
                  .map((e) => {
                    let { reducer: t } = e;
                    return t;
                  }),
              ];
            return (
              0 === l.filter((e) => !!e).length && (l = [o]),
              l.reduce((e, n) => {
                if (n) {
                  if (ea(e)) {
                    const r = n(e, t);
                    return void 0 === r ? e : r;
                  }
                  if (ta(e)) return Ma(e, (e) => n(e, t));
                  {
                    const r = n(e, t);
                    if (void 0 === r) {
                      if (null === e) return e;
                      throw Error(
                        "A case reducer on a non-draftable value must not return undefined",
                      );
                    }
                    return r;
                  }
                }
                return e;
              }, e)
            );
          }
          return ((l.getInitialState = n), l);
        })(e.initialState, (e) => {
          for (let t in a) e.addCase(t, a[t]);
          for (let t of i.sliceMatchers) e.addMatcher(t.matcher, t.reducer);
          for (let t of n) e.addMatcher(t.matcher, t.reducer);
          r && e.addDefaultCase(r);
        });
      }
      l.forEach((r) => {
        const o = a[r],
          l = {
            reducerName: r,
            type: Xa(t, r),
            createNotation: "function" === typeof e.reducers,
          };
        !(function (e) {
          return "asyncThunk" === e._reducerDefinitionType;
        })(o)
          ? (function (e, t, n) {
              let r,
                a,
                { type: o, reducerName: l, createNotation: i } = e;
              if ("reducer" in t) {
                if (
                  i &&
                  !(function (e) {
                    return "reducerWithPrepare" === e._reducerDefinitionType;
                  })(t)
                )
                  throw new Error(io(17));
                ((r = t.reducer), (a = t.prepare));
              } else r = t;
              n.addCase(o, r)
                .exposeCaseReducer(l, r)
                .exposeAction(l, a ? Ua(o, a) : Ua(o));
            })(l, o, u)
          : (function (e, t, n, r) {
              let { type: a, reducerName: o } = e;
              if (!r) throw new Error(io(18));
              const {
                  payloadCreator: l,
                  fulfilled: i,
                  pending: u,
                  rejected: s,
                  settled: c,
                  options: d,
                } = t,
                f = r(a, l, d);
              (n.exposeAction(o, f), i && n.addCase(f.fulfilled, i));
              u && n.addCase(f.pending, u);
              s && n.addCase(f.rejected, s);
              c && n.addMatcher(f.settled, c);
              n.exposeCaseReducer(o, {
                fulfilled: i || Za,
                pending: u || Za,
                rejected: s || Za,
                settled: c || Za,
              });
            })(l, o, u, n);
      });
      const d = (e) => e,
        f = new Map(),
        p = new WeakMap();
      let m;
      function h(e, t) {
        return (m || (m = s()), m(e, t));
      }
      function g() {
        return (m || (m = s()), m.getInitialState());
      }
      function y(t) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        function r(e) {
          let a = e[t];
          return ("undefined" === typeof a && n && (a = $a(p, r, g)), a);
        }
        function a() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d;
          const r = $a(f, n, () => new WeakMap());
          return $a(r, t, () => {
            const r = {};
            for (const [o, l] of Object.entries(
              null !== (a = e.selectors) && void 0 !== a ? a : {},
            )) {
              var a;
              r[o] = Ga(l, t, () => $a(p, t, g), n);
            }
            return r;
          });
        }
        return {
          reducerPath: t,
          getSelectors: a,
          get selectors() {
            return a(r);
          },
          selectSlice: r,
        };
      }
      const v = c(
        c(
          {
            name: t,
            reducer: h,
            actions: i.actionCreators,
            caseReducers: i.sliceCaseReducersByName,
            getInitialState: g,
          },
          y(r),
        ),
        {},
        {
          injectInto(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { reducerPath: n } = t,
              a = o(t, Da);
            const l = null !== n && void 0 !== n ? n : r;
            return (
              e.inject({ reducerPath: l, reducer: h }, a),
              c(c({}, v), y(l, !0))
            );
          },
        },
      );
      return v;
    };
  }
  function Ga(e, t, n, r) {
    function a(a) {
      let o = t(a);
      "undefined" === typeof o && r && (o = n());
      for (
        var l = arguments.length, i = new Array(l > 1 ? l - 1 : 0), u = 1;
        u < l;
        u++
      )
        i[u - 1] = arguments[u];
      return e(o, ...i);
    }
    return ((a.unwrapped = e), a);
  }
  var Ja = Ya();
  function Za() {}
  var eo = "listener",
    to = "completed",
    no = "cancelled";
  ("task-".concat(no),
    "task-".concat(to),
    "".concat(eo, "-").concat(no),
    "".concat(eo, "-").concat(to));
  var { assign: ro } = Object,
    ao = "listenerMiddleware",
    oo = ro(Ua("".concat(ao, "/add")), { withTypes: () => oo }),
    lo =
      ("".concat(ao, "/removeAll"),
      ro(Ua("".concat(ao, "/remove")), { withTypes: () => lo }));
  Symbol.for("rtk-state-proxy-original");
  function io(e) {
    return "Minified Redux Toolkit error #"
      .concat(e, "; visit https://redux-toolkit.js.org/Errors?code=")
      .concat(
        e,
        " for the full message or use the non-minified dev environment for full errors. ",
      );
  }
  const uo = (e) => e.reduce((e, t) => e + t.price * t.quantity, 0),
    so = Ja({
      name: "cart",
      initialState: { items: [], total: 0 },
      reducers: {
        addItem: (e, t) => {
          const { id: n, size: r, image: a } = t.payload,
            o = e.items.find((e) => e.id === n && e.size === r);
          (o
            ? (o.quantity += t.payload.quantity || 1)
            : e.items.push({
                id: t.payload.id,
                name: t.payload.name,
                price: t.payload.price,
                image: t.payload.image,
                size: t.payload.size,
                quantity: t.payload.quantity || 1,
              }),
            (e.total = uo(e.items)));
        },
        removeItem: (e, t) => {
          ((e.items = e.items.filter(
            (e) => !(e.id === t.payload.id && e.size === t.payload.size),
          )),
            (e.total = uo(e.items)));
        },
        updateQuantity: (e, t) => {
          const { id: n, size: r, quantity: a } = t.payload,
            o = e.items.findIndex((e) => e.id === n && e.size === r);
          -1 !== o &&
            (a <= 0 ? e.items.splice(o, 1) : (e.items[o].quantity = a),
            (e.total = uo(e.items)));
        },
        clearCart: (e) => {
          ((e.items = []), (e.total = 0));
        },
      },
    }),
    {
      addItem: co,
      removeItem: fo,
      updateQuantity: po,
      clearCart: mo,
    } = so.actions,
    ho = so.reducer;
  const go = function (e) {
    let { item: t } = e;
    const n = yn(),
      r = (e) => {
        e >= 1 &&
          e <= (t.maxQuantity || 10) &&
          n(po({ id: t.id, size: t.size, quantity: e }));
      };
    return (0, kn.jsxs)("div", {
      className: "cart-item",
      children: [
        (0, kn.jsxs)("div", {
          className: "cart-item__product",
          children: [
            (0, kn.jsx)("img", {
              src: t.image,
              alt: t.name,
              className: "cart-item__image",
            }),
            (0, kn.jsxs)("div", {
              children: [
                (0, kn.jsx)("h3", {
                  className: "cart-item__name",
                  children: t.name,
                }),
                (0, kn.jsxs)("p", {
                  className: "cart-item__size",
                  children: ["Tamanho: ", t.size],
                }),
              ],
            }),
          ],
        }),
        (0, kn.jsxs)("div", {
          className: "cart-item__price",
          children: ["$", t.price.toFixed(2)],
        }),
        (0, kn.jsxs)("div", {
          className: "cart-item__quantity",
          children: [
            (0, kn.jsx)("button", {
              onClick: () => r(t.quantity - 1),
              disabled: t.quantity <= 1,
              className: "cart-item__quantity-button",
              children: "-",
            }),
            (0, kn.jsx)("span", {
              className: "cart-item__quantity-value",
              children: t.quantity,
            }),
            (0, kn.jsx)("button", {
              onClick: () => r(t.quantity + 1),
              disabled: t.quantity >= (t.maxQuantity || 10),
              className: "cart-item__quantity-button",
              children: "+",
            }),
          ],
        }),
        (0, kn.jsxs)("div", {
          className: "cart-item__subtotal",
          children: ["$", (t.price * t.quantity).toFixed(2)],
        }),
        (0, kn.jsx)("button", {
          className: "cart-item__remove",
          onClick: () => {
            n(fo({ id: t.id, size: t.size }));
          },
          children: "Remover",
        }),
      ],
    });
  };
  const yo = function () {
      const e = wn((e) => e.cart.items),
        t = me();
      return (0, kn.jsxs)("div", {
        className: "cart-list",
        children: [
          (0, kn.jsxs)("div", {
            className: "cart-list__header",
            children: [
              (0, kn.jsx)("div", { children: "PRODUTO" }),
              (0, kn.jsx)("div", { children: "PRE\xc7O" }),
              (0, kn.jsx)("div", { children: "QUANTIDADE" }),
              (0, kn.jsx)("div", { children: "SUBTOTAL" }),
              (0, kn.jsx)("div", {}),
            ],
          }),
          e.length > 0
            ? (0, kn.jsx)(kn.Fragment, {
                children: e.map((e) =>
                  (0, kn.jsx)(
                    go,
                    { item: e },
                    "".concat(e.id, "-").concat(e.size),
                  ),
                ),
              })
            : (0, kn.jsxs)("div", {
                className: "cart-empty",
                children: [
                  (0, kn.jsx)("p", { children: "Seu carrinho est\xe1 vazio" }),
                  (0, kn.jsx)(Kn, {
                    title: "Voltar \xe0s Compras",
                    variant: "primary",
                    onPress: function () {
                      t("/produtos");
                    },
                  }),
                ],
              }),
        ],
      });
    },
    vo = () => {
      const e = wn((e) => e.cart.items),
        t = wn((e) => e.cart.total),
        n = t + 0,
        r = me();
      return (0, kn.jsxs)("div", {
        className: "resumo-compra",
        children: [
          (0, kn.jsx)("h2", { children: "Resumo da Compra" }),
          (0, kn.jsxs)("div", {
            className: "linha",
            children: [
              (0, kn.jsx)("span", { children: "Subtotal" }),
              (0, kn.jsxs)("span", { children: ["$", t.toFixed(2)] }),
            ],
          }),
          (0, kn.jsxs)("div", {
            className: "linha",
            children: [
              (0, kn.jsx)("span", { children: "Frete" }),
              (0, kn.jsx)("span", { children: "Gr\xe1tis" }),
            ],
          }),
          (0, kn.jsxs)("div", {
            className: "linha total",
            children: [
              (0, kn.jsx)("strong", { children: "Total" }),
              (0, kn.jsxs)("strong", { children: ["$", n.toFixed(2)] }),
            ],
          }),
          (0, kn.jsx)(Kn, {
            title: "Finalizar Compra",
            variant: "primary",
            onPress: () => {
              r("/checkout");
            },
            disabled: 0 === e.length,
          }),
          (0, kn.jsx)(Kn, {
            title: "Continuar Comprando",
            variant: "secondary",
            onPress: () => {
              r("/produtos");
            },
          }),
        ],
      });
    };
  function bo() {
    const e = wn((e) => e.cart.items);
    return (0, kn.jsx)("div", {
      className: "carrinho",
      children: (0, kn.jsxs)("section", {
        className: "container",
        children: [
          (0, kn.jsx)("h2", { children: "Carrinho de Compras" }),
          (0, kn.jsx)(yo, {}),
          e.length > 0 && (0, kn.jsx)(vo, {}),
        ],
      }),
    });
  }
  function wo(e) {
    let { sizes: t, onSelect: n } = e;
    const [a, o] = (0, r.useState)(null);
    return (0, kn.jsx)("div", {
      className: "tamanhos",
      children: t.map((e) =>
        (0, kn.jsx)(
          "button",
          {
            className: "tamanho ".concat(a === e ? "selecionado" : ""),
            onClick: () =>
              ((e) => {
                (o(e), n(e));
              })(e),
            children: e,
          },
          e,
        ),
      ),
    });
  }
  function ko(e) {
    let { min: t = 1, max: n = 10, onChange: a } = e;
    const [o, l] = (0, r.useState)(t);
    return (0, kn.jsxs)("div", {
      className: "quantidade-container",
      children: [
        (0, kn.jsx)("button", {
          className: "btn-quantidade",
          onClick: () => {
            if (o > t) {
              const e = o - 1;
              (l(e), null === a || void 0 === a || a(e));
            }
          },
          children: "\u2212",
        }),
        (0, kn.jsx)("span", { className: "quantidade", children: o }),
        (0, kn.jsx)("button", {
          className: "btn-quantidade",
          onClick: () => {
            if (o < n) {
              const e = o + 1;
              (l(e), null === a || void 0 === a || a(e));
            }
          },
          children: "+",
        }),
      ],
    });
  }
  const xo = r.memo((e) => {
      let { onClick: t, disabled: n } = e;
      return (0, kn.jsx)("button", {
        className: "embla__button embla__button--prev",
        onClick: t,
        disabled: n,
        children: "\u2039",
      });
    }),
    So = r.memo((e) => {
      let { onClick: t, disabled: n } = e;
      return (0, kn.jsx)("button", {
        className: "embla__button embla__button--next",
        onClick: t,
        disabled: n,
        children: "\u203a",
      });
    });
  function _o(e) {
    return (
      (function (e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      })(e) || Array.isArray(e)
    );
  }
  function Eo(e, t) {
    const n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    return (
      JSON.stringify(Object.keys(e.breakpoints || {})) ===
        JSON.stringify(Object.keys(t.breakpoints || {})) &&
      n.every((n) => {
        const r = e[n],
          a = t[n];
        return "function" === typeof r
          ? "".concat(r) === "".concat(a)
          : _o(r) && _o(a)
            ? Eo(r, a)
            : r === a;
      })
    );
  }
  function Co(e) {
    return e
      .concat()
      .sort((e, t) => (e.name > t.name ? 1 : -1))
      .map((e) => e.options);
  }
  function No(e) {
    return "number" === typeof e;
  }
  function jo(e) {
    return "string" === typeof e;
  }
  function Po(e) {
    return "boolean" === typeof e;
  }
  function To(e) {
    return "[object Object]" === Object.prototype.toString.call(e);
  }
  function Oo(e) {
    return Math.abs(e);
  }
  function zo(e) {
    return Math.sign(e);
  }
  function Lo(e, t) {
    return Oo(e - t);
  }
  function Ro(e) {
    return Io(e).map(Number);
  }
  function Ao(e) {
    return e[Fo(e)];
  }
  function Fo(e) {
    return Math.max(0, e.length - 1);
  }
  function Mo(e, t) {
    return t === Fo(e);
  }
  function Do(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return Array.from(Array(e), (e, n) => t + n);
  }
  function Io(e) {
    return Object.keys(e);
  }
  function Uo(e, t) {
    return [e, t].reduce(
      (e, t) => (
        Io(t).forEach((n) => {
          const r = e[n],
            a = t[n],
            o = To(r) && To(a);
          e[n] = o ? Uo(r, a) : a;
        }),
        e
      ),
      {},
    );
  }
  function Ho(e, t) {
    return "undefined" !== typeof t.MouseEvent && e instanceof t.MouseEvent;
  }
  function Bo() {
    let e = [];
    const t = {
      add: function (n, r, a) {
        let o,
          l =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : { passive: !0 };
        if ("addEventListener" in n)
          (n.addEventListener(r, a, l),
            (o = () => n.removeEventListener(r, a, l)));
        else {
          const e = n;
          (e.addListener(a), (o = () => e.removeListener(a)));
        }
        return (e.push(o), t);
      },
      clear: function () {
        e = e.filter((e) => e());
      },
    };
    return t;
  }
  function $o(e, t, n, r) {
    const a = Bo(),
      o = 1e3 / 60;
    let l = null,
      i = 0,
      u = 0;
    function s(e) {
      if (!u) return;
      l || ((l = e), n(), n());
      const a = e - l;
      for (l = e, i += a; i >= o; ) (n(), (i -= o));
      (r(i / o), u && (u = t.requestAnimationFrame(s)));
    }
    function c() {
      (t.cancelAnimationFrame(u), (l = null), (i = 0), (u = 0));
    }
    return {
      init: function () {
        a.add(e, "visibilitychange", () => {
          e.hidden && ((l = null), (i = 0));
        });
      },
      destroy: function () {
        (c(), a.clear());
      },
      start: function () {
        u || (u = t.requestAnimationFrame(s));
      },
      stop: c,
      update: n,
      render: r,
    };
  }
  function Vo() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    const n = Oo(e - t);
    function r(t) {
      return t < e;
    }
    function a(e) {
      return e > t;
    }
    function o(e) {
      return r(e) || a(e);
    }
    return {
      length: n,
      max: t,
      min: e,
      constrain: function (n) {
        return o(n) ? (r(n) ? e : t) : n;
      },
      reachedAny: o,
      reachedMax: a,
      reachedMin: r,
      removeOffset: function (e) {
        return n ? e - n * Math.ceil((e - t) / n) : e;
      },
    };
  }
  function Wo(e, t, n) {
    const { constrain: r } = Vo(0, e),
      a = e + 1;
    let o = l(t);
    function l(e) {
      return n ? Oo((a + e) % a) : r(e);
    }
    function i() {
      return o;
    }
    function u() {
      return Wo(e, i(), n);
    }
    const s = {
      get: i,
      set: function (e) {
        return ((o = l(e)), s);
      },
      add: function (e) {
        return u().set(i() + e);
      },
      clone: u,
    };
    return s;
  }
  function qo(e, t, n, r, a, o, l, i, u, s, c, d, f, p, m, h, g, y, v) {
    const { cross: b, direction: w } = e,
      k = ["INPUT", "SELECT", "TEXTAREA"],
      x = { passive: !1 },
      S = Bo(),
      _ = Bo(),
      E = Vo(50, 225).constrain(p.measure(20)),
      C = { mouse: 300, touch: 400 },
      N = { mouse: 500, touch: 600 },
      j = m ? 43 : 25;
    let P = !1,
      T = 0,
      O = 0,
      z = !1,
      L = !1,
      R = !1,
      A = !1;
    function F(e) {
      if (!Ho(e, r) && e.touches.length >= 2) return M(e);
      const t = o.readPoint(e),
        n = o.readPoint(e, b),
        l = Lo(t, T),
        u = Lo(n, O);
      if (!L && !A) {
        if (!e.cancelable) return M(e);
        if (((L = l > u), !L)) return M(e);
      }
      const c = o.pointerMove(e);
      (l > h && (R = !0),
        s.useFriction(0.3).useDuration(0.75),
        i.start(),
        a.add(w(c)),
        e.preventDefault());
    }
    function M(e) {
      const t = c.byDistance(0, !1).index !== d.get(),
        n = o.pointerUp(e) * (m ? N : C)[A ? "mouse" : "touch"],
        r = (function (e, t) {
          const n = d.add(-1 * zo(e)),
            r = c.byDistance(e, !m).distance;
          return m || Oo(e) < E
            ? r
            : g && t
              ? 0.5 * r
              : c.byIndex(n.get(), 0).distance;
        })(w(n), t),
        a = (function (e, t) {
          if (0 === e || 0 === t) return 0;
          if (Oo(e) <= Oo(t)) return 0;
          const n = Lo(Oo(e), Oo(t));
          return Oo(n / e);
        })(n, r),
        l = j - 10 * a,
        i = y + a / 50;
      ((L = !1),
        (z = !1),
        _.clear(),
        s.useDuration(l).useFriction(i),
        u.distance(r, !m),
        (A = !1),
        f.emit("pointerUp"));
    }
    function D(e) {
      R && (e.stopPropagation(), e.preventDefault(), (R = !1));
    }
    return {
      init: function (e) {
        if (!v) return;
        function i(i) {
          (Po(v) || v(e, i)) &&
            (function (e) {
              const i = Ho(e, r);
              if (
                ((A = i),
                (R = m && i && !e.buttons && P),
                (P = Lo(a.get(), l.get()) >= 2),
                i && 0 !== e.button)
              )
                return;
              if (
                (function (e) {
                  const t = e.nodeName || "";
                  return k.includes(t);
                })(e.target)
              )
                return;
              ((z = !0),
                o.pointerDown(e),
                s.useFriction(0).useDuration(0),
                a.set(l),
                (function () {
                  const e = A ? n : t;
                  _.add(e, "touchmove", F, x)
                    .add(e, "touchend", M)
                    .add(e, "mousemove", F, x)
                    .add(e, "mouseup", M);
                })(),
                (T = o.readPoint(e)),
                (O = o.readPoint(e, b)),
                f.emit("pointerDown"));
            })(i);
        }
        const u = t;
        S.add(u, "dragstart", (e) => e.preventDefault(), x)
          .add(u, "touchmove", () => {}, x)
          .add(u, "touchend", () => {})
          .add(u, "touchstart", i)
          .add(u, "mousedown", i)
          .add(u, "touchcancel", M)
          .add(u, "contextmenu", M)
          .add(u, "click", D, !0);
      },
      destroy: function () {
        (S.clear(), _.clear());
      },
      pointerDown: function () {
        return z;
      },
    };
  }
  function Qo(e, t) {
    let n, r;
    function a(e) {
      return e.timeStamp;
    }
    function o(n, r) {
      const a = r || e.scroll,
        o = "client".concat("x" === a ? "X" : "Y");
      return (Ho(n, t) ? n : n.touches[0])[o];
    }
    return {
      pointerDown: function (e) {
        return ((n = e), (r = e), o(e));
      },
      pointerMove: function (e) {
        const t = o(e) - o(r),
          l = a(e) - a(n) > 170;
        return ((r = e), l && (n = e), t);
      },
      pointerUp: function (e) {
        if (!n || !r) return 0;
        const t = o(r) - o(n),
          l = a(e) - a(n),
          i = a(e) - a(r) > 170,
          u = t / l;
        return l && !i && Oo(u) > 0.1 ? u : 0;
      },
      readPoint: o,
    };
  }
  function Ko(e, t, n, r, a, o, l) {
    const i = [e].concat(r);
    let u,
      s,
      c = [],
      d = !1;
    function f(e) {
      return a.measureSize(l.measure(e));
    }
    return {
      init: function (a) {
        o &&
          ((s = f(e)),
          (c = r.map(f)),
          (u = new ResizeObserver((n) => {
            (Po(o) || o(a, n)) &&
              (function (n) {
                for (const o of n) {
                  if (d) return;
                  const n = o.target === e,
                    l = r.indexOf(o.target),
                    i = n ? s : c[l];
                  if (Oo(f(n ? e : r[l]) - i) >= 0.5) {
                    (a.reInit(), t.emit("resize"));
                    break;
                  }
                }
              })(n);
          })),
          n.requestAnimationFrame(() => {
            i.forEach((e) => u.observe(e));
          }));
      },
      destroy: function () {
        ((d = !0), u && u.disconnect());
      },
    };
  }
  function Xo(e, t, n, r, a) {
    const o = a.measure(10),
      l = a.measure(50),
      i = Vo(0.1, 0.99);
    let u = !1;
    function s() {
      return !u && !!e.reachedAny(n.get()) && !!e.reachedAny(t.get());
    }
    return {
      shouldConstrain: s,
      constrain: function (a) {
        if (!s()) return;
        const u = e.reachedMin(t.get()) ? "min" : "max",
          c = Oo(e[u] - t.get()),
          d = n.get() - t.get(),
          f = i.constrain(c / l);
        (n.subtract(d * f),
          !a &&
            Oo(d) < o &&
            (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction()));
      },
      toggleActive: function (e) {
        u = !e;
      },
    };
  }
  function Yo(e, t, n, r) {
    const a = t.min + 0.1,
      o = t.max + 0.1,
      { reachedMin: l, reachedMax: i } = Vo(a, o);
    return {
      loop: function (t) {
        if (
          !(function (e) {
            return 1 === e ? i(n.get()) : -1 === e && l(n.get());
          })(t)
        )
          return;
        const a = e * (-1 * t);
        r.forEach((e) => e.add(a));
      },
    };
  }
  function Go(e, t, n, r, a) {
    const { reachedAny: o, removeOffset: l, constrain: i } = r;
    function u(e) {
      return e.concat().sort((e, t) => Oo(e) - Oo(t))[0];
    }
    function s(t, r) {
      const a = [t, t + n, t - n];
      if (!e) return t;
      if (!r) return u(a);
      const o = a.filter((e) => zo(e) === r);
      return o.length ? u(o) : Ao(a) - n;
    }
    return {
      byDistance: function (n, r) {
        const u = a.get() + n,
          { index: c, distance: d } = (function (n) {
            const r = e ? l(n) : i(n),
              a = t
                .map((e, t) => ({ diff: s(e - r, 0), index: t }))
                .sort((e, t) => Oo(e.diff) - Oo(t.diff)),
              { index: o } = a[0];
            return { index: o, distance: r };
          })(u),
          f = !e && o(u);
        return !r || f
          ? { index: c, distance: n }
          : { index: c, distance: n + s(t[c] - d, 0) };
      },
      byIndex: function (e, n) {
        return { index: e, distance: s(t[e] - a.get(), n) };
      },
      shortcut: s,
    };
  }
  function Jo(e, t, n, r, a, o, l, i) {
    const u = { passive: !0, capture: !0 };
    let s = 0;
    function c(e) {
      "Tab" === e.code && (s = new Date().getTime());
    }
    return {
      init: function (d) {
        i &&
          (o.add(document, "keydown", c, !1),
          t.forEach((t, c) => {
            o.add(
              t,
              "focus",
              (t) => {
                (Po(i) || i(d, t)) &&
                  (function (t) {
                    if (new Date().getTime() - s > 10) return;
                    (l.emit("slideFocusStart"), (e.scrollLeft = 0));
                    const o = n.findIndex((e) => e.includes(t));
                    No(o) &&
                      (a.useDuration(0), r.index(o, 0), l.emit("slideFocus"));
                  })(c);
              },
              u,
            );
          }));
      },
    };
  }
  function Zo(e) {
    let t = e;
    function n(e) {
      return No(e) ? e : e.get();
    }
    return {
      get: function () {
        return t;
      },
      set: function (e) {
        t = n(e);
      },
      add: function (e) {
        t += n(e);
      },
      subtract: function (e) {
        t -= n(e);
      },
    };
  }
  function el(e, t) {
    const n =
        "x" === e.scroll
          ? function (e) {
              return "translate3d(".concat(e, "px,0px,0px)");
            }
          : function (e) {
              return "translate3d(0px,".concat(e, "px,0px)");
            },
      r = t.style;
    let a = null,
      o = !1;
    return {
      clear: function () {
        o ||
          ((r.transform = ""),
          t.getAttribute("style") || t.removeAttribute("style"));
      },
      to: function (t) {
        if (o) return;
        const l = ((i = e.direction(t)), Math.round(100 * i) / 100);
        var i;
        l !== a && ((r.transform = n(l)), (a = l));
      },
      toggleActive: function (e) {
        o = !e;
      },
    };
  }
  function tl(e, t, n, r, a, o, l, i, u) {
    const s = Ro(a),
      c = Ro(a).reverse(),
      d = (function () {
        const e = l[0];
        return m(p(c, e), n, !1);
      })().concat(
        (function () {
          const e = t - l[0] - 1;
          return m(p(s, e), -n, !0);
        })(),
      );
    function f(e, t) {
      return e.reduce((e, t) => e - a[t], t);
    }
    function p(e, t) {
      return e.reduce((e, n) => (f(e, t) > 0 ? e.concat([n]) : e), []);
    }
    function m(a, l, s) {
      const c = (function (e) {
        return o.map((n, a) => ({
          start: n - r[a] + 0.5 + e,
          end: n + t - 0.5 + e,
        }));
      })(l);
      return a.map((t) => {
        const r = s ? 0 : -n,
          a = s ? n : 0,
          o = s ? "end" : "start",
          l = c[t][o];
        return {
          index: t,
          loopPoint: l,
          slideLocation: Zo(-1),
          translate: el(e, u[t]),
          target: () => (i.get() > l ? r : a),
        };
      });
    }
    return {
      canLoop: function () {
        return d.every((e) => {
          let { index: n } = e;
          return (
            f(
              s.filter((e) => e !== n),
              t,
            ) <= 0.1
          );
        });
      },
      clear: function () {
        d.forEach((e) => e.translate.clear());
      },
      loop: function () {
        d.forEach((e) => {
          const { target: t, translate: n, slideLocation: r } = e,
            a = t();
          a !== r.get() && (n.to(a), r.set(a));
        });
      },
      loopPoints: d,
    };
  }
  function nl(e, t, n) {
    let r,
      a = !1;
    return {
      init: function (o) {
        n &&
          ((r = new MutationObserver((e) => {
            a ||
              ((Po(n) || n(o, e)) &&
                (function (e) {
                  for (const n of e)
                    if ("childList" === n.type) {
                      (o.reInit(), t.emit("slidesChanged"));
                      break;
                    }
                })(e));
          })),
          r.observe(e, { childList: !0 }));
      },
      destroy: function () {
        (r && r.disconnect(), (a = !0));
      },
    };
  }
  function rl(e, t, n, r) {
    const a = {};
    let o,
      l = null,
      i = null,
      u = !1;
    const s = {
      init: function () {
        ((o = new IntersectionObserver(
          (e) => {
            u ||
              (e.forEach((e) => {
                const n = t.indexOf(e.target);
                a[n] = e;
              }),
              (l = null),
              (i = null),
              n.emit("slidesInView"));
          },
          { root: e.parentElement, threshold: r },
        )),
          t.forEach((e) => o.observe(e)));
      },
      destroy: function () {
        (o && o.disconnect(), (u = !0));
      },
      get: function () {
        let e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (e && l) return l;
        if (!e && i) return i;
        const t = (function (e) {
          return Io(a).reduce((t, n) => {
            const r = parseInt(n),
              { isIntersecting: o } = a[r];
            return (((e && o) || (!e && !o)) && t.push(r), t);
          }, []);
        })(e);
        return (e && (l = t), e || (i = t), t);
      },
    };
    return s;
  }
  function al(e, t, n, r, a, o, l, i, u) {
    const { startEdge: s, endEdge: c, direction: d } = e,
      f = No(n);
    return {
      groupSlides: function (e) {
        return f
          ? (function (e, t) {
              return Ro(e)
                .filter((e) => e % t === 0)
                .map((n) => e.slice(n, n + t));
            })(e, n)
          : (function (e) {
              return e.length
                ? Ro(e)
                    .reduce((n, f, p) => {
                      const m = Ao(n) || 0,
                        h = 0 === m,
                        g = f === Fo(e),
                        y = a[s] - o[m][s],
                        v = a[s] - o[f][c],
                        b = !r && h ? d(l) : 0,
                        w = Oo(v - (!r && g ? d(i) : 0) - (y + b));
                      return (
                        p && w > t + u && n.push(f),
                        g && n.push(e.length),
                        n
                      );
                    }, [])
                    .map((t, n, r) => {
                      const a = Math.max(r[n - 1] || 0);
                      return e.slice(a, t);
                    })
                : [];
            })(e);
      },
    };
  }
  function ol(e, t, n, r, a, o, l) {
    const {
        align: i,
        axis: u,
        direction: s,
        startIndex: c,
        loop: d,
        duration: f,
        dragFree: p,
        dragThreshold: m,
        inViewThreshold: h,
        slidesToScroll: g,
        skipSnaps: y,
        containScroll: v,
        watchResize: b,
        watchSlides: w,
        watchDrag: k,
        watchFocus: x,
      } = o,
      S = {
        measure: function (e) {
          const {
            offsetTop: t,
            offsetLeft: n,
            offsetWidth: r,
            offsetHeight: a,
          } = e;
          return {
            top: t,
            right: n + r,
            bottom: t + a,
            left: n,
            width: r,
            height: a,
          };
        },
      },
      _ = S.measure(t),
      E = n.map(S.measure),
      C = (function (e, t) {
        const n = "rtl" === t,
          r = "y" === e,
          a = !r && n ? -1 : 1;
        return {
          scroll: r ? "y" : "x",
          cross: r ? "x" : "y",
          startEdge: r ? "top" : n ? "right" : "left",
          endEdge: r ? "bottom" : n ? "left" : "right",
          measureSize: function (e) {
            const { height: t, width: n } = e;
            return r ? t : n;
          },
          direction: function (e) {
            return e * a;
          },
        };
      })(u, s),
      N = C.measureSize(_),
      j = (function (e) {
        return {
          measure: function (t) {
            return e * (t / 100);
          },
        };
      })(N),
      P = (function (e, t) {
        const n = {
          start: function () {
            return 0;
          },
          center: function (e) {
            return r(e) / 2;
          },
          end: r,
        };
        function r(e) {
          return t - e;
        }
        return {
          measure: function (r, a) {
            return jo(e) ? n[e](r) : e(t, r, a);
          },
        };
      })(i, N),
      T = !d && !!v,
      O = d || !!v,
      {
        slideSizes: z,
        slideSizesWithGaps: L,
        startGap: R,
        endGap: A,
      } = (function (e, t, n, r, a, o) {
        const { measureSize: l, startEdge: i, endEdge: u } = e,
          s = n[0] && a,
          c = (function () {
            if (!s) return 0;
            const e = n[0];
            return Oo(t[i] - e[i]);
          })(),
          d = (function () {
            if (!s) return 0;
            const e = o.getComputedStyle(Ao(r));
            return parseFloat(e.getPropertyValue("margin-".concat(u)));
          })(),
          f = n.map(l),
          p = n
            .map((e, t, n) => {
              const r = !t,
                a = Mo(n, t);
              return r ? f[t] + c : a ? f[t] + d : n[t + 1][i] - e[i];
            })
            .map(Oo);
        return { slideSizes: f, slideSizesWithGaps: p, startGap: c, endGap: d };
      })(C, _, E, n, O, a),
      F = al(C, N, g, d, _, E, R, A, 2),
      { snaps: M, snapsAligned: D } = (function (e, t, n, r, a) {
        const { startEdge: o, endEdge: l } = e,
          { groupSlides: i } = a,
          u = i(r)
            .map((e) => Ao(e)[l] - e[0][o])
            .map(Oo)
            .map(t.measure),
          s = r.map((e) => n[o] - e[o]).map((e) => -Oo(e)),
          c = i(s)
            .map((e) => e[0])
            .map((e, t) => e + u[t]);
        return { snaps: s, snapsAligned: c };
      })(C, P, _, E, F),
      I = -Ao(M) + Ao(L),
      { snapsContained: U, scrollContainLimit: H } = (function (e, t, n, r, a) {
        const o = Vo(-t + e, 0),
          l = n
            .map((e, t) => {
              const { min: r, max: a } = o,
                l = o.constrain(e),
                i = !t,
                s = Mo(n, t);
              return i ? a : s || u(r, l) ? r : u(a, l) ? a : l;
            })
            .map((e) => parseFloat(e.toFixed(3))),
          i = (function () {
            const e = l[0],
              t = Ao(l);
            return Vo(l.lastIndexOf(e), l.indexOf(t) + 1);
          })();
        function u(e, t) {
          return Lo(e, t) <= 1;
        }
        return {
          snapsContained: (function () {
            if (t <= e + a) return [o.max];
            if ("keepSnaps" === r) return l;
            const { min: n, max: u } = i;
            return l.slice(n, u);
          })(),
          scrollContainLimit: i,
        };
      })(N, I, D, v, 2),
      B = T ? U : D,
      { limit: $ } = (function (e, t, n) {
        const r = t[0];
        return { limit: Vo(n ? r - e : Ao(t), r) };
      })(I, B, d),
      V = Wo(Fo(B), c, d),
      W = V.clone(),
      q = Ro(n),
      Q = $o(
        r,
        a,
        () =>
          ((e) => {
            let {
              dragHandler: t,
              scrollBody: n,
              scrollBounds: r,
              options: { loop: a },
            } = e;
            (a || r.constrain(t.pointerDown()), n.seek());
          })(ie),
        (e) =>
          ((e, t) => {
            let {
              scrollBody: n,
              translate: r,
              location: a,
              offsetLocation: o,
              previousLocation: l,
              scrollLooper: i,
              slideLooper: u,
              dragHandler: s,
              animation: c,
              eventHandler: d,
              scrollBounds: f,
              options: { loop: p },
            } = e;
            const m = n.settled(),
              h = !f.shouldConstrain(),
              g = p ? m : m && h,
              y = g && !s.pointerDown();
            y && c.stop();
            const v = a.get() * t + l.get() * (1 - t);
            (o.set(v),
              p && (i.loop(n.direction()), u.loop()),
              r.to(o.get()),
              y && d.emit("settle"),
              g || d.emit("scroll"));
          })(ie, e),
      ),
      K = B[V.get()],
      X = Zo(K),
      Y = Zo(K),
      G = Zo(K),
      J = Zo(K),
      Z = (function (e, t, n, r, a, o) {
        let l = 0,
          i = 0,
          u = a,
          s = o,
          c = e.get(),
          d = 0;
        function f(e) {
          return ((u = e), m);
        }
        function p(e) {
          return ((s = e), m);
        }
        const m = {
          direction: function () {
            return i;
          },
          duration: function () {
            return u;
          },
          velocity: function () {
            return l;
          },
          seek: function () {
            const t = r.get() - e.get();
            let a = 0;
            return (
              u
                ? (n.set(e),
                  (l += t / u),
                  (l *= s),
                  (c += l),
                  e.add(l),
                  (a = c - d))
                : ((l = 0), n.set(r), e.set(r), (a = t)),
              (i = zo(a)),
              (d = c),
              m
            );
          },
          settled: function () {
            return Oo(r.get() - t.get()) < 0.001;
          },
          useBaseFriction: function () {
            return p(o);
          },
          useBaseDuration: function () {
            return f(a);
          },
          useFriction: p,
          useDuration: f,
        };
        return m;
      })(X, G, Y, J, f, 0.68),
      ee = Go(d, B, I, $, J),
      te = (function (e, t, n, r, a, o, l) {
        function i(a) {
          const i = a.distance,
            u = a.index !== t.get();
          (o.add(i),
            i &&
              (r.duration()
                ? e.start()
                : (e.update(), e.render(1), e.update())),
            u && (n.set(t.get()), t.set(a.index), l.emit("select")));
        }
        return {
          distance: function (e, t) {
            i(a.byDistance(e, t));
          },
          index: function (e, n) {
            const r = t.clone().set(e);
            i(a.byIndex(r.get(), n));
          },
        };
      })(Q, V, W, Z, ee, J, l),
      ne = (function (e) {
        const { max: t, length: n } = e;
        return {
          get: function (e) {
            return n ? (e - t) / -n : 0;
          },
        };
      })($),
      re = Bo(),
      ae = rl(t, n, l, h),
      { slideRegistry: oe } = (function (e, t, n, r, a, o) {
        const { groupSlides: l } = a,
          { min: i, max: u } = r;
        return {
          slideRegistry: (function () {
            const r = l(o),
              a = !e || "keepSnaps" === t;
            return 1 === n.length
              ? [o]
              : a
                ? r
                : r.slice(i, u).map((e, t, n) => {
                    const r = !t,
                      a = Mo(n, t);
                    return r
                      ? Do(Ao(n[0]) + 1)
                      : a
                        ? Do(Fo(o) - Ao(n)[0] + 1, Ao(n)[0])
                        : e;
                  });
          })(),
        };
      })(T, v, B, H, F, q),
      le = Jo(e, n, oe, te, Z, re, l, x),
      ie = {
        ownerDocument: r,
        ownerWindow: a,
        eventHandler: l,
        containerRect: _,
        slideRects: E,
        animation: Q,
        axis: C,
        dragHandler: qo(
          C,
          e,
          r,
          a,
          J,
          Qo(C, a),
          X,
          Q,
          te,
          Z,
          ee,
          V,
          l,
          j,
          p,
          m,
          y,
          0.68,
          k,
        ),
        eventStore: re,
        percentOfView: j,
        index: V,
        indexPrevious: W,
        limit: $,
        location: X,
        offsetLocation: G,
        previousLocation: Y,
        options: o,
        resizeHandler: Ko(t, l, a, n, C, b, S),
        scrollBody: Z,
        scrollBounds: Xo($, G, J, Z, j),
        scrollLooper: Yo(I, $, G, [X, G, Y, J]),
        scrollProgress: ne,
        scrollSnapList: B.map(ne.get),
        scrollSnaps: B,
        scrollTarget: ee,
        scrollTo: te,
        slideLooper: tl(C, N, I, z, L, M, B, G, n),
        slideFocus: le,
        slidesHandler: nl(t, l, w),
        slidesInView: ae,
        slideIndexes: q,
        slideRegistry: oe,
        slidesToScroll: F,
        target: J,
        translate: el(C, t),
      };
    return ie;
  }
  const ll = {
    align: "center",
    axis: "x",
    container: null,
    slides: null,
    containScroll: "trimSnaps",
    direction: "ltr",
    slidesToScroll: 1,
    inViewThreshold: 0,
    breakpoints: {},
    dragFree: !1,
    dragThreshold: 10,
    loop: !1,
    skipSnaps: !1,
    duration: 25,
    startIndex: 0,
    active: !0,
    watchDrag: !0,
    watchResize: !0,
    watchSlides: !0,
    watchFocus: !0,
  };
  function il(e) {
    function t(e, t) {
      return Uo(e, t || {});
    }
    const n = {
      mergeOptions: t,
      optionsAtMedia: function (n) {
        const r = n.breakpoints || {},
          a = Io(r)
            .filter((t) => e.matchMedia(t).matches)
            .map((e) => r[e])
            .reduce((e, n) => t(e, n), {});
        return t(n, a);
      },
      optionsMediaQueries: function (t) {
        return t
          .map((e) => Io(e.breakpoints || {}))
          .reduce((e, t) => e.concat(t), [])
          .map(e.matchMedia);
      },
    };
    return n;
  }
  function ul(e, t, n) {
    const r = e.ownerDocument,
      a = r.defaultView,
      o = il(a),
      l = (function (e) {
        let t = [];
        const n = {
          init: function (n, r) {
            return (
              (t = r.filter((t) => {
                let { options: n } = t;
                return !1 !== e.optionsAtMedia(n).active;
              })),
              t.forEach((t) => t.init(n, e)),
              r.reduce((e, t) => Object.assign(e, { [t.name]: t }), {})
            );
          },
          destroy: function () {
            t = t.filter((e) => e.destroy());
          },
        };
        return n;
      })(o),
      i = Bo(),
      u = (function () {
        let e,
          t = {};
        function n(e) {
          return t[e] || [];
        }
        const r = {
          init: function (t) {
            e = t;
          },
          emit: function (t) {
            return (n(t).forEach((n) => n(e, t)), r);
          },
          off: function (e, a) {
            return ((t[e] = n(e).filter((e) => e !== a)), r);
          },
          on: function (e, a) {
            return ((t[e] = n(e).concat([a])), r);
          },
          clear: function () {
            t = {};
          },
        };
        return r;
      })(),
      { mergeOptions: s, optionsAtMedia: c, optionsMediaQueries: d } = o,
      { on: f, off: p, emit: m } = u,
      h = C;
    let g,
      y,
      v,
      b,
      w = !1,
      k = s(ll, ul.globalOptions),
      x = s(k),
      S = [];
    function _(t) {
      const n = ol(e, v, b, r, a, t, u);
      if (t.loop && !n.slideLooper.canLoop()) {
        return _(Object.assign({}, t, { loop: !1 }));
      }
      return n;
    }
    function E(t, n) {
      w ||
        ((k = s(k, t)),
        (x = c(k)),
        (S = n || S),
        (function () {
          const { container: t, slides: n } = x,
            r = jo(t) ? e.querySelector(t) : t;
          v = r || e.children[0];
          const a = jo(n) ? v.querySelectorAll(n) : n;
          b = [].slice.call(a || v.children);
        })(),
        (g = _(x)),
        d([
          k,
          ...S.map((e) => {
            let { options: t } = e;
            return t;
          }),
        ]).forEach((e) => i.add(e, "change", C)),
        x.active &&
          (g.translate.to(g.location.get()),
          g.animation.init(),
          g.slidesInView.init(),
          g.slideFocus.init(T),
          g.eventHandler.init(T),
          g.resizeHandler.init(T),
          g.slidesHandler.init(T),
          g.options.loop && g.slideLooper.loop(),
          v.offsetParent && b.length && g.dragHandler.init(T),
          (y = l.init(T, S))));
    }
    function C(e, t) {
      const n = P();
      (N(), E(s({ startIndex: n }, e), t), u.emit("reInit"));
    }
    function N() {
      (g.dragHandler.destroy(),
        g.eventStore.clear(),
        g.translate.clear(),
        g.slideLooper.clear(),
        g.resizeHandler.destroy(),
        g.slidesHandler.destroy(),
        g.slidesInView.destroy(),
        g.animation.destroy(),
        l.destroy(),
        i.clear());
    }
    function j(e, t, n) {
      x.active &&
        !w &&
        (g.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : x.duration),
        g.scrollTo.index(e, n || 0));
    }
    function P() {
      return g.index.get();
    }
    const T = {
      canScrollNext: function () {
        return g.index.add(1).get() !== P();
      },
      canScrollPrev: function () {
        return g.index.add(-1).get() !== P();
      },
      containerNode: function () {
        return v;
      },
      internalEngine: function () {
        return g;
      },
      destroy: function () {
        w || ((w = !0), i.clear(), N(), u.emit("destroy"), u.clear());
      },
      off: p,
      on: f,
      emit: m,
      plugins: function () {
        return y;
      },
      previousScrollSnap: function () {
        return g.indexPrevious.get();
      },
      reInit: h,
      rootNode: function () {
        return e;
      },
      scrollNext: function (e) {
        j(g.index.add(1).get(), e, -1);
      },
      scrollPrev: function (e) {
        j(g.index.add(-1).get(), e, 1);
      },
      scrollProgress: function () {
        return g.scrollProgress.get(g.offsetLocation.get());
      },
      scrollSnapList: function () {
        return g.scrollSnapList;
      },
      scrollTo: j,
      selectedScrollSnap: P,
      slideNodes: function () {
        return b;
      },
      slidesInView: function () {
        return g.slidesInView.get();
      },
      slidesNotInView: function () {
        return g.slidesInView.get(!1);
      },
    };
    return (E(t, n), setTimeout(() => u.emit("init"), 0), T);
  }
  function sl() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    const n = (0, r.useRef)(e),
      a = (0, r.useRef)(t),
      [o, l] = (0, r.useState)(),
      [i, u] = (0, r.useState)(),
      s = (0, r.useCallback)(() => {
        o && o.reInit(n.current, a.current);
      }, [o]);
    return (
      (0, r.useEffect)(() => {
        Eo(n.current, e) || ((n.current = e), s());
      }, [e, s]),
      (0, r.useEffect)(() => {
        (function (e, t) {
          if (e.length !== t.length) return !1;
          const n = Co(e),
            r = Co(t);
          return n.every((e, t) => Eo(e, r[t]));
        })(a.current, t) || ((a.current = t), s());
      }, [t, s]),
      (0, r.useEffect)(() => {
        if (
          "undefined" !== typeof window &&
          window.document &&
          window.document.createElement &&
          i
        ) {
          ul.globalOptions = sl.globalOptions;
          const e = ul(i, n.current, a.current);
          return (l(e), () => e.destroy());
        }
        l(void 0);
      }, [i, l]),
      [u, o]
    );
  }
  ((ul.globalOptions = void 0), (sl.globalOptions = void 0));
  const cl = (e) => {
    let { images: t, selectedIndex: n, onThumbnailClick: a } = e;
    const [o, l] = sl({ align: "start", dragFree: !0 }),
      {
        prevBtnDisabled: i,
        nextBtnDisabled: u,
        onPrevButtonClick: s,
        onNextButtonClick: c,
      } = ((e) => {
        const [t, n] = r.useState(!0),
          [a, o] = r.useState(!0),
          l = r.useCallback(() => {
            e && e.scrollPrev();
          }, [e]),
          i = r.useCallback(() => {
            e && e.scrollNext();
          }, [e]);
        return (
          r.useEffect(() => {
            if (!e) return;
            const t = () => {
              (n(!e.canScrollPrev()), o(!e.canScrollNext()));
            };
            return (
              e.on("init", t),
              e.on("reInit", t),
              e.on("select", t),
              () => {
                (e.off("init", t), e.off("reInit", t), e.off("select", t));
              }
            );
          }, [e]),
          {
            prevBtnDisabled: t,
            nextBtnDisabled: a,
            onPrevButtonClick: l,
            onNextButtonClick: i,
          }
        );
      })(l);
    return (
      r.useEffect(() => {
        l && l.scrollTo(n);
      }, [l, n]),
      (0, kn.jsxs)("div", {
        className: "product-thumbnails",
        children: [
          (0, kn.jsx)("div", {
            className: "product-thumbnails__viewport",
            ref: o,
            children: (0, kn.jsx)("div", {
              className: "product-thumbnails__container",
              children: t.map((e, t) =>
                (0, kn.jsx)(
                  "div",
                  {
                    className: "product-thumbnails__slide",
                    children: (0, kn.jsx)("img", {
                      src: e,
                      alt: "Thumbnail ".concat(t + 1),
                      className: "product-thumbnails__img ".concat(
                        n === t ? "is-active" : "",
                      ),
                      onClick: () => a(t),
                    }),
                  },
                  t,
                ),
              ),
            }),
          }),
          (!i || !u) &&
            (0, kn.jsxs)("div", {
              className: "product-thumbnails__controls",
              children: [
                (0, kn.jsx)(xo, { onClick: s, disabled: i }),
                (0, kn.jsx)(So, { onClick: c, disabled: u }),
              ],
            }),
        ],
      })
    );
  };
  function dl() {
    const [e, t] = (0, r.useState)([]),
      [n, a] = (0, r.useState)(!0),
      [o, l] = (0, r.useState)(""),
      [i, u] = (0, r.useState)(0),
      [s, c] = (0, r.useState)(1),
      [d, f] = (0, r.useState)(null),
      [p, m] = (0, r.useState)(null),
      { id: h } = he(),
      g = yn(),
      y = me(),
      v = e.find((e) => e.id === parseInt(h));
    if (
      ((0, r.useEffect)(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, [h]),
      (0, r.useEffect)(() => {
        Gn()
          .then((e) => t(e))
          .catch(() => l("Erro ao carregar os produtos."))
          .finally(() => a(!1));
      }, []),
      (0, r.useEffect)(
        () => (
          document.body.classList.toggle("body-no-scroll", !!p),
          () => document.body.classList.remove("body-no-scroll")
        ),
        [p],
      ),
      n)
    )
      return (0, kn.jsx)("div", {
        className: "ProdutoDetalhe",
        children: (0, kn.jsx)("p", { children: "Carregando produto..." }),
      });
    if (o || !v || !Array.isArray(v.imagens))
      return (0, kn.jsx)("div", {
        className: "ProdutoDetalhe",
        children: (0, kn.jsx)("p", {
          children: o || "Produto n\xe3o encontrado ou sem imagens.",
        }),
      });
    const b =
        v.preco.parcelado && v.preco.parcelado.length > 0
          ? v.preco.parcelado[0]
          : null,
      w = 0.95 * v.preco.aVista,
      k = ((x = e.filter((e) => e.tipo === v.tipo && e.id !== v.id)),
      [...x].sort(() => 0.5 - Math.random())).slice(0, 3);
    var x;
    return (0, kn.jsxs)("div", {
      className: "ProdutoDetalhe",
      children: [
        (0, kn.jsxs)("div", {
          className: "produto-container",
          children: [
            (0, kn.jsxs)("section", {
              className: "produto-imagens",
              children: [
                (0, kn.jsxs)("div", {
                  className: "carrossel-container",
                  children: [
                    (0, kn.jsx)("button", {
                      onClick: () => {
                        if (!v || !v.imagens) return;
                        const e = 0 === i ? v.imagens.length - 1 : i - 1;
                        u(e);
                      },
                      className: "carrossel-btn btn-anterior",
                      "aria-label": "Imagem anterior",
                      children: "\u2039",
                    }),
                    (0, kn.jsx)("div", {
                      className: "carrossel-viewport",
                      children: (0, kn.jsx)("div", {
                        className: "carrossel-wrapper",
                        style: {
                          transform: "translateX(-".concat(100 * i, "%)"),
                        },
                        children: v.imagens.map((e, t) =>
                          (0, kn.jsx)(
                            "img",
                            {
                              src: e,
                              alt: ""
                                .concat(v.nome, " - Imagem ")
                                .concat(t + 1),
                              className: "carrossel-imagem",
                              onClick: () => ((e) => m(e))(e),
                            },
                            t,
                          ),
                        ),
                      }),
                    }),
                    (0, kn.jsx)("button", {
                      onClick: () => {
                        if (!v || !v.imagens) return;
                        const e = i === v.imagens.length - 1;
                        u(e ? 0 : i + 1);
                      },
                      className: "carrossel-btn btn-proximo",
                      "aria-label": "Pr\xf3xima imagem",
                      children: "\u203a",
                    }),
                  ],
                }),
                (0, kn.jsx)(cl, {
                  images: v.imagens,
                  selectedIndex: i,
                  onThumbnailClick: u,
                }),
              ],
            }),
            (0, kn.jsxs)("section", {
              className: "produto-info",
              children: [
                (0, kn.jsx)("h1", { children: v.nome }),
                (0, kn.jsxs)("div", {
                  className: "avaliacoes",
                  children: [
                    (0, kn.jsx)(Xn, { rating: v.stars || 4.5 }),
                    (0, kn.jsx)("a", {
                      href: "#avaliar",
                      children: "Avaliar este produto",
                    }),
                    (0, kn.jsxs)("a", {
                      href: "#avaliacoes",
                      children: [v.reviews || 0, " avalia\xe7\xf5es"],
                    }),
                  ],
                }),
                (0, kn.jsxs)("p", {
                  className: "preco-principal",
                  children: [
                    "R$ ",
                    v.preco.aVista.toFixed(2).replace(".", ","),
                  ],
                }),
                (0, kn.jsxs)("div", {
                  className: "opcoes-pagamento",
                  children: [
                    b &&
                      (0, kn.jsxs)("p", {
                        children: [
                          "em at\xe9",
                          " ",
                          (0, kn.jsxs)("strong", {
                            children: [
                              b.parcelas,
                              "x de R$",
                              " ",
                              b.valor.toFixed(2).replace(".", ","),
                            ],
                          }),
                          " ",
                          "sem juros",
                        ],
                      }),
                    (0, kn.jsxs)("p", {
                      children: [
                        "ou ",
                        (0, kn.jsxs)("strong", {
                          children: ["R$ ", w.toFixed(2).replace(".", ",")],
                        }),
                        " \xe0 vista com 5% no Pix",
                      ],
                    }),
                  ],
                }),
                (0, kn.jsx)("p", {
                  className: "cal\xe7ados-tipo",
                  children: "Cal\xe7ados Adulto",
                }),
                (0, kn.jsx)(wo, { sizes: v.tamanhos, onSelect: f }),
                (0, kn.jsx)("div", {
                  className: "descricao-material-container",
                  children: (0, kn.jsx)("p", { children: v.descricao }),
                }),
                (0, kn.jsx)(ko, { onChange: c }),
                (0, kn.jsx)(Kn, {
                  title: "Comprar",
                  variant: "primary",
                  onPress: () => {
                    d
                      ? (g(
                          co({
                            id: v.id,
                            name: v.nome,
                            price: v.preco.aVista,
                            image: v.imagens[0],
                            size: d,
                            quantity: s,
                            maxQuantity: v.quantidadeEstoque || 10,
                          }),
                        ),
                        y("/carrinho"))
                      : alert("Por favor, selecione um tamanho");
                  },
                }),
                (0, kn.jsxs)("div", {
                  className: "calculadora-frete",
                  children: [
                    (0, kn.jsx)("p", {
                      children: "Calcule prazos e pre\xe7os",
                    }),
                    (0, kn.jsxs)("div", {
                      className: "input-grupo",
                      children: [
                        (0, kn.jsx)("input", {
                          type: "text",
                          placeholder: "Digite seu CEP",
                        }),
                        (0, kn.jsx)("button", {
                          className: "btn-consultar",
                          children: "Consultar",
                        }),
                      ],
                    }),
                    (0, kn.jsx)("a", {
                      href: "#naoseimeucep",
                      className: "link-cep",
                      children: "N\xe3o sei meu CEP",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, kn.jsxs)("section", {
          className: "relacionados-container",
          children: [
            (0, kn.jsx)("h3", { children: "Voc\xea tamb\xe9m pode gostar" }),
            (0, kn.jsx)("div", {
              className: "relacionados-grid",
              children:
                0 === k.length
                  ? (0, kn.jsx)("p", {
                      children: "Nenhum produto relacionado encontrado.",
                    })
                  : k.map((e) => (0, kn.jsx)(Yn, { produto: e }, e.id)),
            }),
          ],
        }),
        p &&
          (0, kn.jsxs)("div", {
            className: "lightbox-overlay",
            onClick: () => m(null),
            children: [
              (0, kn.jsx)("button", {
                className: "lightbox-fechar",
                "aria-label": "Fechar",
                children: "\xd7",
              }),
              (0, kn.jsx)("img", {
                src: p,
                alt: "Imagem ampliada",
                className: "lightbox-imagem",
                onClick: (e) => e.stopPropagation(),
              }),
            ],
          }),
      ],
    });
  }
  const fl = (function (e) {
    const t = function (e) {
        const {
          thunk: t = !0,
          immutableCheck: n = !0,
          serializableCheck: r = !0,
          actionCreatorCheck: a = !0,
        } = null !== e && void 0 !== e ? e : {};
        let o = new Ha();
        return (
          t &&
            ("boolean" === typeof t ? o.push(Qr) : o.push(Kr(t.extraArgument))),
          o
        );
      },
      {
        reducer: n,
        middleware: r,
        devTools: a = !0,
        duplicateMiddlewareCheck: o = !0,
        preloadedState: l,
        enhancers: i,
      } = e || {};
    let u, s;
    if ("function" === typeof n) u = n;
    else {
      if (!Br(n)) throw new Error(io(1));
      u = Vr(n);
    }
    s = "function" === typeof r ? r(t) : t();
    let d = Wr;
    a && (d = Ia(c({ trace: !1 }, "object" === typeof a && a)));
    const f = (function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (e) => (n, r) => {
          const a = e(n, r);
          let o = () => {
            throw new Error(Dr(15));
          };
          const l = {
              getState: a.getState,
              dispatch: function (e) {
                for (
                  var t = arguments.length,
                    n = new Array(t > 1 ? t - 1 : 0),
                    r = 1;
                  r < t;
                  r++
                )
                  n[r - 1] = arguments[r];
                return o(e, ...n);
              },
            },
            i = t.map((e) => e(l));
          return ((o = Wr(...i)(a.dispatch)), c(c({}, a), {}, { dispatch: o }));
        };
      })(...s),
      p = qa(f);
    return $r(u, l, d(...("function" === typeof i ? i(p) : p())));
  })({ reducer: { cart: ho } });
  function pl(e) {
    let { onConfirm: t } = e;
    const n = wn((e) => e.cart.items),
      r = wn((e) => e.cart.total),
      a = r + 0,
      o = me();
    return (0, kn.jsxs)("div", {
      className: "resumo-compra-checkout",
      children: [
        (0, kn.jsx)("h2", { children: "Resumo da Compra" }),
        (0, kn.jsx)("ul", {
          className: "produtos-lista",
          children: n.map((e) =>
            (0, kn.jsxs)(
              "li",
              {
                className: "produto-item",
                children: [
                  (0, kn.jsx)("img", { src: e.image, alt: e.name }),
                  (0, kn.jsxs)("div", {
                    className: "info",
                    children: [
                      (0, kn.jsx)("p", { children: e.name }),
                      (0, kn.jsxs)("strong", {
                        children: ["$", (e.price * e.quantity).toFixed(2)],
                      }),
                    ],
                  }),
                ],
              },
              "".concat(e.id, "-").concat(e.size),
            ),
          ),
        }),
        (0, kn.jsxs)("div", {
          className: "linha",
          children: [
            (0, kn.jsx)("span", { children: "Subtotal" }),
            (0, kn.jsxs)("span", { children: ["$", r.toFixed(2)] }),
          ],
        }),
        (0, kn.jsxs)("div", {
          className: "linha",
          children: [
            (0, kn.jsx)("span", { children: "Frete" }),
            (0, kn.jsxs)("span", { children: ["$", (0).toFixed(2)] }),
          ],
        }),
        (0, kn.jsxs)("div", {
          className: "linha total",
          children: [
            (0, kn.jsx)("strong", { children: "Total" }),
            (0, kn.jsxs)("strong", { children: ["$", a.toFixed(2)] }),
          ],
        }),
        (0, kn.jsx)(Kn, {
          title: "Confirmar Pedido",
          variant: "primary",
          onPress: () => {
            t && (t(n, a), o("/"), window.scrollTo(0, 0));
          },
          disabled: 0 === n.length,
        }),
      ],
    });
  }
  function ml() {
    const e = (0, r.useRef)(),
      t = yn();
    return (0, kn.jsx)("div", {
      className: "checkout-page",
      children: (0, kn.jsxs)("div", {
        className: "checkout-container",
        children: [
          (0, kn.jsxs)("form", {
            className: "checkout-form",
            ref: e,
            children: [
              (0, kn.jsx)("h2", { children: "Checkout" }),
              (0, kn.jsxs)("section", {
                className: "form-section",
                children: [
                  (0, kn.jsx)("h3", { children: "Informa\xe7\xf5es Pessoais" }),
                  (0, kn.jsxs)("div", {
                    className: "form-grid",
                    children: [
                      (0, kn.jsxs)("div", {
                        className: "form-grid-full",
                        children: [
                          (0, kn.jsx)("label", { children: "Nome Completo" }),
                          (0, kn.jsx)("input", {
                            type: "text",
                            name: "name",
                            required: !0,
                          }),
                        ],
                      }),
                      (0, kn.jsxs)("div", {
                        children: [
                          (0, kn.jsx)("label", { children: "Email" }),
                          (0, kn.jsx)("input", {
                            type: "email",
                            name: "email",
                            required: !0,
                          }),
                        ],
                      }),
                      (0, kn.jsxs)("div", {
                        children: [
                          (0, kn.jsx)("label", { children: "Telefone" }),
                          (0, kn.jsx)("input", {
                            type: "tel",
                            name: "phone",
                            required: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, kn.jsxs)("section", {
                className: "form-section",
                children: [
                  (0, kn.jsx)("h3", { children: "Endere\xe7o de Entrega" }),
                  (0, kn.jsxs)("div", {
                    className: "form-grid",
                    children: [
                      (0, kn.jsxs)("div", {
                        className: "form-grid-full",
                        children: [
                          (0, kn.jsx)("label", { children: "Endere\xe7o" }),
                          (0, kn.jsx)("input", {
                            type: "text",
                            name: "address",
                            required: !0,
                          }),
                        ],
                      }),
                      (0, kn.jsxs)("div", {
                        children: [
                          (0, kn.jsx)("label", { children: "Cidade" }),
                          (0, kn.jsx)("input", {
                            type: "text",
                            name: "city",
                            required: !0,
                          }),
                        ],
                      }),
                      (0, kn.jsxs)("div", {
                        children: [
                          (0, kn.jsx)("label", { children: "Estado" }),
                          (0, kn.jsx)("input", {
                            type: "text",
                            name: "state",
                            required: !0,
                          }),
                        ],
                      }),
                      (0, kn.jsxs)("div", {
                        children: [
                          (0, kn.jsx)("label", { children: "CEP" }),
                          (0, kn.jsx)("input", {
                            type: "text",
                            name: "zip",
                            required: !0,
                          }),
                        ],
                      }),
                      (0, kn.jsxs)("div", {
                        className: "form-grid-full",
                        children: [
                          (0, kn.jsx)("label", { children: "Pa\xeds" }),
                          (0, kn.jsx)("input", {
                            type: "text",
                            name: "country",
                            required: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, kn.jsxs)("section", {
                className: "form-section",
                children: [
                  (0, kn.jsx)("h3", { children: "M\xe9todo de Pagamento" }),
                  (0, kn.jsxs)("div", {
                    className: "form-grid",
                    children: [
                      (0, kn.jsxs)("div", {
                        className: "form-grid-full",
                        children: [
                          (0, kn.jsxs)("label", {
                            children: [
                              (0, kn.jsx)("input", {
                                type: "radio",
                                name: "payment",
                                value: "credit",
                                defaultChecked: !0,
                              }),
                              "Cart\xe3o de Cr\xe9dito",
                            ],
                          }),
                          (0, kn.jsxs)("label", {
                            children: [
                              (0, kn.jsx)("input", {
                                type: "radio",
                                name: "payment",
                                value: "paypal",
                              }),
                              "PayPal",
                            ],
                          }),
                        ],
                      }),
                      (0, kn.jsxs)("div", {
                        className: "form-grid-full",
                        children: [
                          (0, kn.jsx)("label", {
                            children: "N\xfamero do Cart\xe3o",
                          }),
                          (0, kn.jsx)("input", {
                            type: "text",
                            name: "cardNumber",
                          }),
                        ],
                      }),
                      (0, kn.jsxs)("div", {
                        children: [
                          (0, kn.jsx)("label", {
                            children: "Data de Validade",
                          }),
                          (0, kn.jsx)("input", {
                            type: "text",
                            name: "expiry",
                            placeholder: "MM/YY",
                          }),
                        ],
                      }),
                      (0, kn.jsxs)("div", {
                        children: [
                          (0, kn.jsx)("label", { children: "CVV" }),
                          (0, kn.jsx)("input", { type: "text", name: "cvv" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, kn.jsx)(pl, {
            onConfirm: (n, r) =>
              ((n, r) => {
                const a = new FormData(e.current),
                  o = Object.fromEntries(a.entries()),
                  l = {
                    cliente: {
                      nome: o.name,
                      email: o.email,
                      telefone: o.phone,
                      endereco: {
                        rua: o.address,
                        cidade: o.city,
                        estado: o.state,
                        cep: o.zip,
                        pais: o.country,
                      },
                    },
                    pagamento: {
                      metodo: o.payment,
                      cartao: {
                        numero: o.cardNumber,
                        validade: o.expiry,
                        cvv: o.cvv,
                      },
                    },
                    itens: n,
                    total: r,
                  };
                (console.log("Pedido Finalizado:", l),
                  alert("Pedido confirmado!"),
                  t(mo()));
              })(n, r),
          }),
        ],
      }),
    });
  }
  const hl = function () {
      return (0, kn.jsx)(dn, {
        store: fl,
        children: (0, kn.jsx)(mt, {
          children: (0, kn.jsxs)("div", {
            className: "App",
            children: [
              (0, kn.jsx)(Fn, {}),
              (0, kn.jsxs)(ze, {
                children: [
                  (0, kn.jsx)(Te, { path: "/", element: (0, kn.jsx)(sr, {}) }),
                  (0, kn.jsx)(Te, {
                    path: "/produtos",
                    element: (0, kn.jsx)(mr, {}),
                  }),
                  (0, kn.jsx)(Te, {
                    path: "/sobre",
                    element: (0, kn.jsx)(Er, {}),
                  }),
                  (0, kn.jsx)(Te, {
                    path: "/produtos/:id",
                    element: (0, kn.jsx)(dl, {}),
                  }),
                  (0, kn.jsx)(Te, {
                    path: "/carrinho",
                    element: (0, kn.jsx)(bo, {}),
                  }),
                  (0, kn.jsx)(Te, {
                    path: "/checkout",
                    element: (0, kn.jsx)(ml, {}),
                  }),
                  " ",
                ],
              }),
              (0, kn.jsx)(Mr, {}),
            ],
          }),
        }),
      });
    },
    gl = (e) => {
      e &&
        e instanceof Function &&
        n
          .e(453)
          .then(n.bind(n, 453))
          .then((t) => {
            let { getCLS: n, getFID: r, getFCP: a, getLCP: o, getTTFB: l } = t;
            (n(e), r(e), a(e), o(e), l(e));
          });
    };
  (a
    .createRoot(document.getElementById("root"))
    .render((0, kn.jsx)(r.StrictMode, { children: (0, kn.jsx)(hl, {}) })),
    gl());
})();
//# sourceMappingURL=main.33e6e5bd.js.map
