'use client';
var b8 = Object.defineProperty;
var L8 = (r, n, e) => n in r ? b8(r, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[n] = e;
var x = (r, n, e) => L8(r, typeof n != "symbol" ? n + "" : n, e);
import * as N from "react";
import g, { useEffect as d5, useState as l3, useRef as k1, useCallback as c3, useLayoutEffect as u5, cloneElement as h5, createRef as v0, Component as v2, createElement as x3, createContext as _8, useContext as x8 } from "react";
import { ValidationMessage as M0, Label as h1, Spinner as J1, Tag as e4, Details as k8, DetailsSummary as Z8, DetailsContent as D8, Card as d3, Heading as a1, Fieldset as X0, Checkbox as S8, Radio as P8, Select as J0, Paragraph as g1, Divider as Q3, Field as y0, Input as t4, Button as H8, Textfield as k3, Tabs as y4, Link as T8, Table as B0, Avatar as O8 } from "@digdir/designsystemet-react";
export * from "@digdir/designsystemet-react";
import { EXPERIMENTAL_Suggestion as Nl } from "@digdir/designsystemet-react";
import * as E8 from "react-dom";
import I8 from "react-dom";
var u3 = { exports: {} }, v1 = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X3;
function N8() {
  if (X3) return v1;
  X3 = 1;
  var r = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function e(t, a, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), a.key !== void 0 && (i = "" + a.key), "key" in a) {
      s = {};
      for (var o in a)
        o !== "key" && (s[o] = a[o]);
    } else s = a;
    return a = s.ref, {
      $$typeof: r,
      type: t,
      key: i,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return v1.Fragment = n, v1.jsx = e, v1.jsxs = e, v1;
}
var M1 = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J3;
function F8() {
  return J3 || (J3 = 1, process.env.NODE_ENV !== "production" && function() {
    function r(M) {
      if (M == null) return null;
      if (typeof M == "function")
        return M.$$typeof === W ? null : M.displayName || M.name || null;
      if (typeof M == "string") return M;
      switch (M) {
        case m:
          return "Fragment";
        case y:
          return "Profiler";
        case w:
          return "StrictMode";
        case R:
          return "Suspense";
        case P:
          return "SuspenseList";
        case H:
          return "Activity";
      }
      if (typeof M == "object")
        switch (typeof M.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), M.$$typeof) {
          case v:
            return "Portal";
          case D:
            return M.displayName || "Context";
          case b:
            return (M._context.displayName || "Context") + ".Consumer";
          case S:
            var A = M.render;
            return M = M.displayName, M || (M = A.displayName || A.name || "", M = M !== "" ? "ForwardRef(" + M + ")" : "ForwardRef"), M;
          case L:
            return A = M.displayName || null, A !== null ? A : r(M.type) || "Memo";
          case k:
            A = M._payload, M = M._init;
            try {
              return r(M(A));
            } catch {
            }
        }
      return null;
    }
    function n(M) {
      return "" + M;
    }
    function e(M) {
      try {
        n(M);
        var A = !1;
      } catch {
        A = !0;
      }
      if (A) {
        A = console;
        var r2 = A.error, h2 = typeof Symbol == "function" && Symbol.toStringTag && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return r2.call(
          A,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          h2
        ), n(M);
      }
    }
    function t(M) {
      if (M === m) return "<>";
      if (typeof M == "object" && M !== null && M.$$typeof === k)
        return "<...>";
      try {
        var A = r(M);
        return A ? "<" + A + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var M = V.A;
      return M === null ? null : M.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(M) {
      if (z.call(M, "key")) {
        var A = Object.getOwnPropertyDescriptor(M, "key").get;
        if (A && A.isReactWarning) return !1;
      }
      return M.key !== void 0;
    }
    function o(M, A) {
      function r2() {
        T || (T = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          A
        ));
      }
      r2.isReactWarning = !0, Object.defineProperty(M, "key", {
        get: r2,
        configurable: !0
      });
    }
    function l() {
      var M = r(this.type);
      return F[M] || (F[M] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), M = this.props.ref, M !== void 0 ? M : null;
    }
    function c(M, A, r2, h2, I1, V4) {
      var C2 = r2.ref;
      return M = {
        $$typeof: p,
        type: M,
        key: A,
        props: r2,
        _owner: h2
      }, (C2 !== void 0 ? C2 : null) !== null ? Object.defineProperty(M, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(M, "ref", { enumerable: !1, value: null }), M._store = {}, Object.defineProperty(M._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(M, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(M, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I1
      }), Object.defineProperty(M, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: V4
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    }
    function d(M, A, r2, h2, I1, V4) {
      var C2 = A.children;
      if (C2 !== void 0)
        if (h2)
          if (q(C2)) {
            for (h2 = 0; h2 < C2.length; h2++)
              u(C2[h2]);
            Object.freeze && Object.freeze(C2);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else u(C2);
      if (z.call(A, "key")) {
        C2 = r(M);
        var W0 = Object.keys(A).filter(function(w8) {
          return w8 !== "key";
        });
        h2 = 0 < W0.length ? "{key: someKey, " + W0.join(": ..., ") + ": ...}" : "{key: someKey}", x2[C2 + h2] || (W0 = 0 < W0.length ? "{" + W0.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          h2,
          C2,
          W0,
          C2
        ), x2[C2 + h2] = !0);
      }
      if (C2 = null, r2 !== void 0 && (e(r2), C2 = "" + r2), i(A) && (e(A.key), C2 = "" + A.key), "key" in A) {
        r2 = {};
        for (var R4 in A)
          R4 !== "key" && (r2[R4] = A[R4]);
      } else r2 = A;
      return C2 && o(
        r2,
        typeof M == "function" ? M.displayName || M.name || "Unknown" : M
      ), c(
        M,
        C2,
        r2,
        a(),
        I1,
        V4
      );
    }
    function u(M) {
      C(M) ? M._store && (M._store.validated = 1) : typeof M == "object" && M !== null && M.$$typeof === k && (M._payload.status === "fulfilled" ? C(M._payload.value) && M._payload.value._store && (M._payload.value._store.validated = 1) : M._store && (M._store.validated = 1));
    }
    function C(M) {
      return typeof M == "object" && M !== null && M.$$typeof === p;
    }
    var f = g, p = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), D = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), W = Symbol.for("react.client.reference"), V = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = Object.prototype.hasOwnProperty, q = Array.isArray, U = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      react_stack_bottom_frame: function(M) {
        return M();
      }
    };
    var T, F = {}, E = f.react_stack_bottom_frame.bind(
      f,
      s
    )(), n2 = U(t(s)), x2 = {};
    M1.Fragment = m, M1.jsx = function(M, A, r2) {
      var h2 = 1e4 > V.recentlyCreatedOwnerStacks++;
      return d(
        M,
        A,
        r2,
        !1,
        h2 ? Error("react-stack-top-frame") : E,
        h2 ? U(t(M)) : n2
      );
    }, M1.jsxs = function(M, A, r2) {
      var h2 = 1e4 > V.recentlyCreatedOwnerStacks++;
      return d(
        M,
        A,
        r2,
        !0,
        h2 ? Error("react-stack-top-frame") : E,
        h2 ? U(t(M)) : n2
      );
    };
  }()), M1;
}
process.env.NODE_ENV === "production" ? u3.exports = N8() : u3.exports = F8();
var h = u3.exports;
const _o = ({ ...r }) => {
  const n = r.text ?? r.error, e = typeof n == "string" && n.length > 0;
  return /* @__PURE__ */ h.jsxs(e2, { gap: 4, children: [
    r.children && /* @__PURE__ */ h.jsx("div", { children: r.children }),
    e && /* @__PURE__ */ h.jsx(M0, { children: n })
  ] });
}, V8 = "_spacing_198sl_9", R8 = "_requiredStar_198sl_13", j8 = "_loading_198sl_19", A8 = "_content_198sl_24", z0 = {
  spacing: V8,
  requiredStar: R8,
  loading: j8,
  content: A8
}, xo = ({
  text: r,
  subText: n,
  loading: e = !1,
  optional: t = !1,
  required: a = !1,
  embedded: s = !1,
  children: i
}) => {
  if (!r && !i) return null;
  if (!r && i)
    return /* @__PURE__ */ h.jsx("label", { className: z0.content, children: /* @__PURE__ */ h.jsx("div", { children: i }) });
  const o = typeof a == "string" ? a : void 0, l = typeof t == "string" ? t : void 0;
  return /* @__PURE__ */ h.jsx("label", { className: z0.content, children: /* @__PURE__ */ h.jsxs(e2, { gap: 8, children: [
    /* @__PURE__ */ h.jsxs(e2, { gap: 0, mb: i || s ? 0 : 8, children: [
      /* @__PURE__ */ h.jsx(e2, { horizontal: !0, align: "center", children: /* @__PURE__ */ h.jsxs(h1, { children: [
        r,
        e && /* @__PURE__ */ h.jsx(J1, { "aria-label": "spinning", "data-size": "xs", className: z0.loading }),
        a && o && /* @__PURE__ */ h.jsx(e4, { className: z0.spacing, "data-color": "warning", children: o ?? "Må fylles ut" }),
        a && !o && /* @__PURE__ */ h.jsx("span", { className: z0.requiredStar, children: "*" }),
        t && /* @__PURE__ */ h.jsx(e4, { className: z0.spacing, children: l ?? "Valgfritt" })
      ] }) }),
      n && /* @__PURE__ */ h.jsx(f0, { size: "sm", children: n })
    ] }),
    i && /* @__PURE__ */ h.jsx("div", { children: i })
  ] }) });
}, ko = ({ summary: r, children: n, ...e }) => /* @__PURE__ */ h.jsxs(k8, { ...e, children: [
  /* @__PURE__ */ h.jsx(Z8, { suppressHydrationWarning: !0, children: r }),
  /* @__PURE__ */ h.jsx(D8, { children: n })
] }), B8 = "_icon_1tg5o_1", Y8 = {
  icon: B8
}, U8 = ({ title: r, icon: n, link: e, children: t, titleLevel: a = 2, ...s }) => r ? /* @__PURE__ */ h.jsxs(d3, { ...s, title: r, children: [
  r && /* @__PURE__ */ h.jsxs(e2, { horizontal: !0, justify: "between", mb: 8, children: [
    e ? /* @__PURE__ */ h.jsx(a1, { "data-size": "sm", level: a, children: /* @__PURE__ */ h.jsx("a", { className: "styrbord-card-link", href: e, children: r }) }) : /* @__PURE__ */ h.jsx(a1, { "data-size": "sm", level: a, children: r }),
    n && /* @__PURE__ */ h.jsx(c2, { material: n, className: Y8.icon })
  ] }),
  t
] }) : /* @__PURE__ */ h.jsx(d3, { ...s, children: t });
U8.Block = d3.Block;
const W8 = "_widthMd_3ykng_2", z8 = "_widthFull_3ykng_5", q8 = "_content_3ykng_9", $8 = "_icon_3ykng_16", G8 = "_closeButton_3ykng_20", K8 = "_warning_3ykng_43 _alertBox_3ykng_32", Q8 = "_error_3ykng_51 _alertBox_3ykng_32", X8 = "_ghost_3ykng_59 _alertBox_3ykng_32", J8 = "_info_3ykng_67 _alertBox_3ykng_32", ee = "_success_3ykng_75 _alertBox_3ykng_32", S2 = {
  widthMd: W8,
  widthFull: z8,
  content: q8,
  icon: $8,
  closeButton: G8,
  warning: K8,
  error: Q8,
  ghost: X8,
  info: J8,
  success: ee
}, te = "_label_opcdh_2", ne = "_body_opcdh_3", re = "_inline_opcdh_9", ae = "_accent_opcdh_109", T0 = {
  label: te,
  body: ne,
  inline: re,
  "body-xl": "_body-xl_opcdh_13",
  "body-lg": "_body-lg_opcdh_20",
  "body-md": "_body-md_opcdh_27",
  "body-sm": "_body-sm_opcdh_34",
  "body-xl-strong": "_body-xl-strong_opcdh_41 _body-xl_opcdh_13",
  "body-lg-strong": "_body-lg-strong_opcdh_46 _body-lg_opcdh_20",
  "body-md-strong": "_body-md-strong_opcdh_51 _body-md_opcdh_27",
  "body-sm-strong": "_body-sm-strong_opcdh_56 _body-sm_opcdh_34",
  "label-xl": "_label-xl_opcdh_61",
  "label-lg": "_label-lg_opcdh_68",
  "label-md": "_label-md_opcdh_75",
  "label-sm": "_label-sm_opcdh_82",
  "label-xl-strong": "_label-xl-strong_opcdh_89 _label-xl_opcdh_61",
  "label-lg-strong": "_label-lg-strong_opcdh_94 _label-lg_opcdh_68",
  "label-md-strong": "_label-md-strong_opcdh_99 _label-md_opcdh_75",
  "label-sm-strong": "_label-sm-strong_opcdh_104 _label-sm_opcdh_82",
  accent: ae,
  "accent-md": "_accent-md_opcdh_114 _accent_opcdh_109",
  "accent-sm": "_accent-sm_opcdh_122 _accent_opcdh_109",
  "accent-md-strong": "_accent-md-strong_opcdh_130 _accent-md_opcdh_114 _accent_opcdh_109",
  "accent-sm-strong": "_accent-sm-strong_opcdh_135 _accent-sm_opcdh_122 _accent_opcdh_109"
}, w4 = ({
  type: r,
  size: n = "md",
  strong: e = !1,
  inline: t = !1,
  className: a
}) => [
  T0[r],
  T0[`${r}-${n}${e ? "-strong" : ""}`],
  t ? T0.inline : "",
  a ?? ""
].join(" "), f0 = ({ inline: r, strong: n, size: e, className: t, children: a }) => {
  const s = w4({
    type: "body",
    size: e,
    strong: n,
    inline: r,
    className: t
  });
  return r ? /* @__PURE__ */ h.jsx("span", { className: `${s}`, children: a }) : /* @__PURE__ */ h.jsx("p", { className: s, children: a });
}, C5 = ({ strong: r, size: n = "md", className: e, children: t }) => {
  const a = w4({
    type: "accent",
    size: n,
    strong: r,
    className: e
  });
  return /* @__PURE__ */ h.jsx("span", { className: a, children: t });
}, se = ({ strong: r, size: n, className: e, children: t, inline: a = !1 }) => {
  let s = w4({
    type: "label",
    size: n,
    strong: r,
    className: e
  });
  return a && (s += ` ${T0.inline}`), /* @__PURE__ */ h.jsx("span", { className: s, children: t });
}, Zo = {
  Body: f0,
  Accent: C5,
  Label: se
}, ie = "_icon_zv10m_2", oe = "_filled_zv10m_7", e7 = {
  icon: ie,
  filled: oe
}, t7 = {
  "2xs": "14px",
  xs: "16px",
  sm: "18px",
  md: "21px",
  lg: "24px",
  xl: "32px",
  "2xl": "48px"
}, c2 = ({ material: r, filled: n = !1, className: e = "", size: t = "md" }) => {
  const a = [e7.icon, e, "material-symbols-outlined"], s = {};
  return n && a.push(e7.filled), s.fontSize = t7[t], s.height = t7[t], /* @__PURE__ */ h.jsx("span", { "aria-hidden": !0, style: s, className: a.join(" "), children: r });
}, le = (r) => {
  switch (r) {
    case "info":
    case "ghost":
      return /* @__PURE__ */ h.jsx(c2, { material: "info", filled: !0, className: S2.icon });
    case "warning":
      return /* @__PURE__ */ h.jsx(c2, { material: "warning", filled: !0, className: S2.icon });
    case "error":
      return /* @__PURE__ */ h.jsx(c2, { material: "error", filled: !0, className: S2.icon });
    case "success":
      return /* @__PURE__ */ h.jsx(c2, { material: "check_circle", filled: !0, className: S2.icon });
  }
}, ce = (r, n) => {
  const e = [];
  switch (r) {
    case "md":
      e.push(S2.widthMd);
      break;
    case "full":
      e.push(S2.widthFull);
      break;
  }
  switch (n) {
    case "ghost":
      e.push(S2.ghost);
      break;
    case "info":
      e.push(S2.info);
      break;
    case "success":
      e.push(S2.success);
      break;
    case "warning":
      e.push(S2.warning);
      break;
    case "error":
      e.push(S2.error);
      break;
  }
  return e.join(" ");
}, n7 = ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"], de = (r) => n7[n7.indexOf(r) - 1] || "2xs", ue = (r) => {
  switch (r) {
    case "sm":
      return T0.bodySm;
    case "md":
      return T0.bodySmStrong;
    case "lg":
      return T0.bodyLg;
  }
}, Do = ({
  level: r,
  size: n = "md",
  width: e = "md",
  title: t = void 0,
  text: a = void 0,
  className: s = "",
  ...i
}) => {
  const o = le(r);
  return /* @__PURE__ */ h.jsxs(e2, { horizontal: !0, justify: "between", p: 12, className: `${ce(e, r)} ${s}`, children: [
    /* @__PURE__ */ h.jsxs(e2, { horizontal: !0, children: [
      o,
      /* @__PURE__ */ h.jsxs(e2, { mx: 8, my: 0, gap: 4, className: S2.content, children: [
        t && /* @__PURE__ */ h.jsx(a1, { "data-size": de(n), children: /* @__PURE__ */ h.jsx("span", { role: i.role, children: t }) }),
        a && /* @__PURE__ */ h.jsx(f0, { size: n, children: a }),
        i.children && /* @__PURE__ */ h.jsx("div", { className: ue(n), children: i.children })
      ] })
    ] }),
    i.onDismiss ? /* @__PURE__ */ h.jsx("button", { className: S2.closeButton, onClick: i.onDismiss, children: /* @__PURE__ */ h.jsx(c2, { material: "close" }) }) : null
  ] });
}, he = "_box_jv17j_2", Ce = "_horizontal_jv17j_20", fe = "_show_jv17j_24", b2 = {
  box: he,
  horizontal: Ce,
  show: fe,
  "horizontal-screen-xxs": "_horizontal-screen-xxs_jv17j_33",
  "show-screen-xxs": "_show-screen-xxs_jv17j_36",
  "hide-screen-xxs": "_hide-screen-xxs_jv17j_39",
  "horizontal-screen-xs": "_horizontal-screen-xs_jv17j_45",
  "show-screen-xs": "_show-screen-xs_jv17j_48",
  "hide-screen-xs": "_hide-screen-xs_jv17j_51",
  "horizontal-screen-sm": "_horizontal-screen-sm_jv17j_57",
  "show-screen-sm": "_show-screen-sm_jv17j_60",
  "hide-screen-sm": "_hide-screen-sm_jv17j_63",
  "horizontal-screen-md": "_horizontal-screen-md_jv17j_69",
  "show-screen-md": "_show-screen-md_jv17j_72",
  "hide-screen-md": "_hide-screen-md_jv17j_75",
  "horizontal-screen-lg": "_horizontal-screen-lg_jv17j_81",
  "show-screen-lg": "_show-screen-lg_jv17j_84",
  "hide-screen-lg": "_hide-screen-lg_jv17j_87",
  "align-normal": "_align-normal_jv17j_92",
  "align-start": "_align-start_jv17j_96",
  "align-center": "_align-center_jv17j_100",
  "align-end": "_align-end_jv17j_104",
  "align-stretch": "_align-stretch_jv17j_108",
  "justify-center": "_justify-center_jv17j_112",
  "justify-start": "_justify-start_jv17j_116",
  "justify-end": "_justify-end_jv17j_120",
  "justify-between": "_justify-between_jv17j_124",
  "justify-stretch": "_justify-stretch_jv17j_128",
  "border-radius-none": "_border-radius-none_jv17j_132",
  "border-radius-sm": "_border-radius-sm_jv17j_136",
  "border-radius-md": "_border-radius-md_jv17j_140",
  "border-radius-lg": "_border-radius-lg_jv17j_144",
  "border-radius-xl": "_border-radius-xl_jv17j_148",
  "border-radius-full": "_border-radius-full_jv17j_152",
  "border-width-sm": "_border-width-sm_jv17j_156",
  "border-width-md": "_border-width-md_jv17j_160",
  "border-width-lg": "_border-width-lg_jv17j_164",
  "width-fit": "_width-fit_jv17j_168",
  "width-auto": "_width-auto_jv17j_172",
  "width-full": "_width-full_jv17j_176",
  "width-container": "_width-container_jv17j_180",
  "width-form": "_width-form_jv17j_185",
  "width-form-sidebar": "_width-form-sidebar_jv17j_190",
  "container-type-inline-size": "_container-type-inline-size_jv17j_195",
  "container-type-size": "_container-type-size_jv17j_199"
}, pe = {
  "color-primary-default": "_color-primary-default_1jz26_4",
  "color-primary-tinted": "_color-primary-tinted_1jz26_9",
  "color-primary-hover": "_color-primary-hover_1jz26_14",
  "color-primary-active": "_color-primary-active_1jz26_19",
  "color-neutral-default": "_color-neutral-default_1jz26_25",
  "color-neutral-tinted": "_color-neutral-tinted_1jz26_30",
  "color-neutral-hover": "_color-neutral-hover_1jz26_35",
  "color-neutral-active": "_color-neutral-active_1jz26_40",
  "color-info-default": "_color-info-default_1jz26_46",
  "color-info-tinted": "_color-info-tinted_1jz26_51",
  "color-info-hover": "_color-info-hover_1jz26_56",
  "color-info-active": "_color-info-active_1jz26_61",
  "color-success-default": "_color-success-default_1jz26_67",
  "color-success-tinted": "_color-success-tinted_1jz26_72",
  "color-success-hover": "_color-success-hover_1jz26_77",
  "color-success-active": "_color-success-active_1jz26_82",
  "color-danger-default": "_color-danger-default_1jz26_88",
  "color-danger-tinted": "_color-danger-tinted_1jz26_93",
  "color-danger-hover": "_color-danger-hover_1jz26_98",
  "color-danger-active": "_color-danger-active_1jz26_103",
  "color-warning-default": "_color-warning-default_1jz26_109",
  "color-warning-tinted": "_color-warning-tinted_1jz26_114",
  "color-warning-hover": "_color-warning-hover_1jz26_119",
  "color-warning-active": "_color-warning-active_1jz26_124",
  "color-navy-default": "_color-navy-default_1jz26_130",
  "color-navy-tinted": "_color-navy-tinted_1jz26_131",
  "color-navy-hover": "_color-navy-hover_1jz26_132",
  "color-navy-active": "_color-navy-active_1jz26_133",
  "color-white-default": "_color-white-default_1jz26_139",
  "color-white-tinted": "_color-white-tinted_1jz26_140",
  "color-white-hover": "_color-white-hover_1jz26_141",
  "color-white-active": "_color-white-active_1jz26_142"
}, me = ["default", "tinted", "hover", "active"], ge = ["p", "px", "py", "pt", "pb", "pl", "pr", "m", "mx", "my", "mt", "mb", "ml", "mr"], ve = {
  m: ["--box-ml", "--box-mr", "--box-mt", "--box-mb"],
  mb: ["--box-mb"],
  ml: ["--box-ml"],
  mr: ["--box-mr"],
  mt: ["--box-mt"],
  mx: ["--box-ml", "--box-mr"],
  my: ["--box-mt", "--box-mb"],
  p: ["--box-pl", "--box-pr", "--box-pt", "--box-pb"],
  pb: ["--box-pb"],
  pl: ["--box-pl"],
  pr: ["--box-pr"],
  pt: ["--box-pt"],
  px: ["--box-pl", "--box-pr"],
  py: ["--box-pt", "--box-pb"]
}, Me = (r, n) => n === void 0 ? {} : ve[r].reduce((t, a) => ({ ...t, [a]: `var(--spacing-${n})` }), {});
function ye(r) {
  return r === !0 ? "wrap" : r === !1 ? "nowrap" : r === "reverse" ? "wrap-reverse" : "nowrap";
}
function r7(r) {
  return r === !0 ? "1" : r ? r.toString() : "0";
}
const e2 = ({
  className: r = "",
  radius: n = void 0,
  width: e = void 0,
  gap: t = 0,
  wrap: a = !1,
  align: s = "normal",
  grow: i = 0,
  shrink: o = 1,
  basis: l = "auto",
  show: c = void 0,
  hide: d = void 0,
  container: u = void 0,
  children: C,
  ...f
}) => {
  const p = [b2.box], v = {
    "--box-gap": "var(--spacing-" + t + ")",
    "--box-flex-grow": r7(i),
    "--box-flex-shrink": r7(o),
    "--box-flex-basis": l
  };
  if (f.font && p.push(
    w4({
      type: f.font.base ?? "body",
      size: f.font.size ?? "md",
      strong: f.font.strong
    })
  ), v["--box-wrap"] = ye(a), u && p.push(b2[`container-type-${u}`]), f.horizontal && (f.horizontal === !0 ? p.push(b2.horizontal) : (p.push(b2[`horizontal-${f.horizontal}`]), p.push(b2[`justify-${f.justify ?? "start"}`])), p.push(b2[`justify-${f.justify ?? "start"}`])), c && (p.push(b2.show), p.push(b2[`show-${c}`])), d && (p.push(b2.hide), p.push(b2[`hide-${d}`])), e && p.push(b2[`width-${e}`]), n && p.push(b2[`border-radius-${n}`]), f.color) {
    const m = f.color.includes("/") ? f.color.replace("/", "-") : f.color + "-" + me[0];
    p.push(pe[`color-${m}`]), f.border && (p.push(b2["has-border"]), p.push(b2[`border-width-${f.border}`]));
  }
  return ge.forEach((m) => {
    Object.assign(v, Me(m, f[m]));
  }), p.push(b2[`align-${s}`]), p.push(r), /* @__PURE__ */ h.jsx("div", { style: v, className: p.join(" "), children: C });
}, we = "_step_11mqz_2", be = "_icon_11mqz_26", Le = "_divider_11mqz_60", _e = "_label_11mqz_66", c0 = {
  "step-outer-container": "_step-outer-container_11mqz_2",
  "step-container": "_step-container_11mqz_6",
  step: we,
  icon: be,
  "completed-step": "_completed-step_11mqz_37",
  "incomplete-step": "_incomplete-step_11mqz_38",
  "current-step": "_current-step_11mqz_51",
  divider: Le,
  label: _e
}, xe = ({ state: r, label: n, index: e }) => /* @__PURE__ */ h.jsxs("span", { className: c0.step + " " + c0[`${r}-step`], children: [
  /* @__PURE__ */ h.jsxs("span", { className: c0.icon, children: [
    r === "completed" && /* @__PURE__ */ h.jsx(c2, { material: "check" }),
    r !== "completed" && /* @__PURE__ */ h.jsx("span", { children: e })
  ] }),
  /* @__PURE__ */ h.jsx("span", { className: c0.label, children: n })
] }), ke = (r, n) => n < r ? "completed" : n > r ? "incomplete" : "current", So = ({ steps: r, step: n }) => /* @__PURE__ */ h.jsx("div", { className: c0["step-outer-container"], children: /* @__PURE__ */ h.jsx("div", { className: c0["step-container"], children: r.map((e, t) => ({
  ...e,
  index: t + 1,
  state: ke(n, t)
})).map((e, t) => /* @__PURE__ */ h.jsxs(g.Fragment, { children: [
  t > 0 && /* @__PURE__ */ h.jsx("span", { className: [c0.divider, c0[`${e.state}-divider`]].join(" ") }),
  /* @__PURE__ */ h.jsx(xe, { ...e })
] }, e.label)) }) }), Ze = "_spacing_42s09_9", De = "_requiredStar_42s09_13", Se = "_loading_42s09_19", Pe = "_tag_42s09_24", q0 = {
  spacing: Ze,
  requiredStar: De,
  loading: Se,
  tag: Pe
}, i0 = ({ text: r, loading: n = !1, optional: e = !1, required: t = !1 }) => {
  if (!r) return null;
  const a = typeof t == "string" ? t : void 0, s = typeof e == "string" ? e : void 0;
  return /* @__PURE__ */ h.jsxs("span", { children: [
    r,
    n && /* @__PURE__ */ h.jsx(J1, { "aria-label": "spinning", "data-size": "xs", className: q0.loading }),
    t && a && /* @__PURE__ */ h.jsx(e4, { className: `${q0.spacing} ${q0.tag}`, "data-color": "warning", children: a ?? "Må fylles ut" }),
    t && !a && /* @__PURE__ */ h.jsx("span", { className: q0.requiredStar, children: "*" }),
    e && /* @__PURE__ */ h.jsx(e4, { className: `${q0.spacing} ${q0.tag}`, children: s ?? "Valgfritt" })
  ] });
}, He = {}, Te = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M55.4005%2043.2246C55.6263%2047.4807%2053.9573%2051.4494%2050.9102%2054.0313C47.6818%2056.7664%2043.0051%2057.8643%2037.6434%2056.2448L38.1657%2054.3116C42.9682%2055.7815%2046.9425%2054.767%2049.6098%2052.5074C52.1752%2050.3339%2053.6204%2046.9364%2053.3915%2043.2246H55.4005Z'%20fill='%23000667'/%3e%3cpath%20d='M51.362%2043.2246C51.2954%2049.2324%2045.856%2054.3891%2038.6283%2052.5992L39.1496%2050.668C45.0227%2052.0967%2049.2905%2047.9944%2049.354%2043.2246H51.362Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M33.9861%2039.0818L25.5525%2045.8259L19.6736%2038.5221L28.1083%2031.778L33.9861%2039.0818ZM22.495%2038.8308L25.8622%2043.0136L31.1648%2038.7731L27.7986%2034.5903L22.495%2038.8308Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M43.9985%2031.0747L35.5639%2037.8198L29.686%2030.516L38.1196%2023.771L43.9985%2031.0747ZM32.5073%2030.8247L35.8736%2035.0075L41.1772%2030.767L37.81%2026.5833L32.5073%2030.8247Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M26.8421%2030.2053L18.4085%2036.9504L12.5296%2029.6466L20.9643%2022.9016L26.8421%2030.2053ZM15.351%2029.9553L18.7182%2034.1381L24.0208%2029.8967L20.6546%2025.7139L15.351%2029.9553Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M36.8535%2022.1992L28.4199%2028.9443L22.541%2021.6405L30.9757%2014.8955L36.8535%2022.1992ZM25.3624%2021.9492L28.7296%2026.132L34.0322%2021.8906L30.666%2017.7078L25.3624%2021.9492Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M53.4405%207.22049C53.8727%206.87484%2054.5048%206.94315%2054.8517%207.37385L56.7793%209.76904C57.126%2010.1999%2057.0567%2010.83%2056.6245%2011.1757L43.0156%2022.0576L50.3076%2031.1167C50.6543%2031.5476%2050.5849%2032.1767%2050.1527%2032.5224L25.6368%2052.1294C25.2045%2052.4749%2024.5724%2052.4058%2024.2256%2051.975L6.22058%2029.6046C6.05422%2029.3978%205.97702%2029.1335%206.00596%2028.87C6.03498%2028.6064%206.16796%2028.3649%206.37541%2028.1989L30.8914%208.59196C31.3236%208.24629%2031.9557%208.31553%2032.3025%208.7463L39.8326%2018.1024L53.4405%207.22049ZM8.41376%2029.1338L25.1634%2049.9432L48.1144%2031.5885L31.3647%2010.7791L8.41376%2029.1338ZM41.088%2019.6624L41.7602%2020.4966L54.5851%2010.2409L53.9139%209.40664L41.088%2019.6624Z'%20fill='%23000667'/%3e%3cpath%20d='M47.006%2043.2246C46.7949%2046.5928%2043.7254%2049.4327%2039.7072%2048.605L40.2295%2046.6699C42.878%2047.1472%2044.7979%2045.3586%2044.9971%2043.2246H47.006Z'%20fill='%23000667'/%3e%3c/svg%3e", Oe = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M30.2022%2013C31.6417%2013%2033.0647%2013.3108%2034.3731%2013.9111L48.5606%2020.4209C48.8613%2020.1105%2049.1913%2019.8737%2049.5518%2019.7178C50.1542%2019.4574%2050.7445%2019.4648%2051.252%2019.5938C52.482%2019.9065%2053.1337%2020.8236%2053.4307%2021.6914C53.6321%2022.2799%2053.6905%2022.8965%2053.668%2023.4219L55.6504%2025.1035C56.3733%2025.7166%2056.8552%2026.5668%2057.0098%2027.502L57.3408%2029.5098L58.2744%2031.0918C58.8273%2032.0283%2058.7996%2033.198%2058.2031%2034.1074C57.768%2034.7707%2057.0761%2035.223%2056.294%2035.3555L54.5137%2035.6572C53.8797%2035.7646%2053.2277%2035.6651%2052.6543%2035.374L48.1309%2033.0771L44.2217%2033.5732L48.7344%2048H55.8389V50H6.83889V48H13.6319C11.8695%2044.263%208.52575%2037.309%205.94045%2030.2012C4.20098%2025.4188%205.05388%2021.129%207.03518%2018.0312C8.98204%2014.9875%2012.0957%2013%2014.9512%2013H30.2022ZM14.9512%2015C12.9643%2015%2010.4123%2016.4632%208.71975%2019.1094C7.06183%2021.7017%206.30158%2025.342%207.82033%2029.5176C10.5779%2037.0991%2014.2104%2044.4998%2015.8428%2048H19.9414L21.9053%2038.4092L21.9453%2038.2676C22.0611%2037.9491%2022.3325%2037.7071%2022.6699%2037.6328L27.6504%2036.5391L27.751%2036.5225C27.9885%2036.4953%2028.2295%2036.5534%2028.4287%2036.6895C28.6563%2036.8449%2028.8097%2037.0881%2028.8526%2037.3604L30.5293%2048H34.3067L38.7422%2032.8594L38.794%2032.7217C38.9369%2032.4118%2039.231%2032.1923%2039.5762%2032.1484L48.1846%2031.0547C48.3832%2031.0295%2048.5852%2031.0646%2048.7637%2031.1553L53.5596%2033.5908C53.7507%2033.6879%2053.9684%2033.7204%2054.1797%2033.6846L55.96%2033.3838C56.1939%2033.3442%2056.4011%2033.2081%2056.5313%2033.0098C56.7094%2032.7379%2056.7179%2032.3883%2056.5528%2032.1084L55.5244%2030.3682C55.4617%2030.2618%2055.4196%2030.1443%2055.3994%2030.0225L55.0362%2027.8281C54.9589%2027.3605%2054.7179%2026.9355%2054.3565%2026.6289L51.5244%2024.2266L51.6387%2023.6504C51.6985%2023.3462%2051.6998%2022.8086%2051.5391%2022.3389C51.3877%2021.8966%2051.1426%2021.6288%2050.7588%2021.5312C50.6002%2021.491%2050.4722%2021.4986%2050.3447%2021.5537C50.2063%2021.6137%2049.973%2021.7729%2049.6895%2022.2051L49.2178%2022.9238L33.5391%2015.7295C32.4923%2015.2492%2031.3539%2015%2030.2022%2015H14.9512ZM23.7334%2039.4463L21.9834%2048H28.5049L27.042%2038.7197L23.7334%2039.4463ZM36.3897%2048H40.3711L37.6963%2043.54L36.3897%2048ZM40.4766%2034.0498L38.461%2040.9277L42.7031%2048H46.6397L42.2071%2033.8291L40.4766%2034.0498Z'%20fill='%23000667'/%3e%3c/svg%3e", Ee = "data:image/svg+xml,%3csvg%20width='65'%20height='64'%20viewBox='0%200%2065%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%2052.5C13.5%2054.7091%2015.2909%2056.5%2017.5%2056.5C19.7091%2056.5%2021.5%2054.7091%2021.5%2052.5H23.5C23.5%2054.7091%2025.2909%2056.5%2027.5%2056.5C29.7091%2056.5%2031.5%2054.7091%2031.5%2052.5H33.5C33.5%2054.7091%2035.2909%2056.5%2037.5%2056.5C39.7091%2056.5%2041.5%2054.7091%2041.5%2052.5H43.5C43.5%2054.7091%2045.2909%2056.5%2047.5%2056.5C49.7091%2056.5%2051.5%2054.7091%2051.5%2052.5H53.5C53.5%2055.8137%2050.8137%2058.5%2047.5%2058.5C45.4126%2058.5%2043.5748%2057.4336%2042.5%2055.8164C41.4252%2057.4336%2039.5874%2058.5%2037.5%2058.5C35.4126%2058.5%2033.5748%2057.4336%2032.5%2055.8164C31.4252%2057.4336%2029.5874%2058.5%2027.5%2058.5C25.4126%2058.5%2023.5748%2057.4336%2022.5%2055.8164C21.4252%2057.4336%2019.5874%2058.5%2017.5%2058.5C14.1863%2058.5%2011.5%2055.8137%2011.5%2052.5H13.5Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M46.5%2043.5H17.5V20.5H46.5V43.5ZM19.5%2036.5V41.5H26.5V36.5H19.5ZM28.5%2036.5V41.5H35.5V36.5H28.5ZM37.5%2041.5H44.5V29.5H37.5V41.5ZM19.5%2034.5H26.5V29.5H19.5V34.5ZM28.5%2034.5H35.5V29.5H28.5V34.5ZM19.5%2027.5H26.5V22.5H19.5V27.5ZM28.5%2027.5H35.5V22.5H28.5V27.5ZM37.5%2027.5H44.5V22.5H37.5V27.5Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M46.5%2018.5H17.5V9.5H46.5V18.5ZM19.5%2016.5H44.5V11.5H19.5V16.5Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M47.5%205.5C49.1569%205.5%2050.5%206.84315%2050.5%208.5V44.5C50.5%2046.1569%2049.1569%2047.5%2047.5%2047.5H16.5C14.8431%2047.5%2013.5%2046.1569%2013.5%2044.5V8.5C13.5%206.84315%2014.8431%205.5%2016.5%205.5H47.5ZM16.5%207.5C15.9477%207.5%2015.5%207.94772%2015.5%208.5V44.5C15.5%2045.0523%2015.9477%2045.5%2016.5%2045.5H47.5C48.0523%2045.5%2048.5%2045.0523%2048.5%2044.5V8.5C48.5%207.94772%2048.0523%207.5%2047.5%207.5H16.5Z'%20fill='%23000667'/%3e%3c/svg%3e", Ie = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M54%2056V58H10V56H54ZM56%2054V10C56%208.89543%2055.1046%208%2054%208H10C8.89543%208%208%208.89543%208%2010V54C8%2055.1046%208.89543%2056%2010%2056V58L9.79395%2057.9951C7.7488%2057.8913%206.10865%2056.2512%206.00488%2054.2061L6%2054V10C6%207.79086%207.79086%206%2010%206H54C56.2091%206%2058%207.79086%2058%2010V54C58%2056.14%2056.3194%2057.8879%2054.2061%2057.9951L54%2058V56C55.1046%2056%2056%2055.1046%2056%2054Z'%20fill='%23000667'/%3e%3cpath%20d='M24%2040.5877L25.8884%2038.0808C25.8884%2038.0808%2027.7768%2040.727%2031.2103%2040.727C34.0601%2040.727%2036.5322%2038.7423%2036.5322%2035.7479C36.5322%2032.7883%2034.1288%2030.6992%2031.0043%2030.6992C28.6352%2030.6992%2026.9185%2031.9178%2026.9185%2031.9178L24.9614%2031.1866L26.1631%2019H38.3863V21.9944H29.1159L28.5322%2027.1825C28.4979%2027.9137%2028.3605%2028.4708%2028.3605%2028.4708H28.4292C28.4292%2028.4708%2029.7682%2027.7047%2031.5536%2027.7047C36.6695%2027.7047%2040%2031.2911%2040%2035.7131C40%2040.4485%2036.3262%2044%2031.4163%2044C26.4378%2044%2024%2040.5877%2024%2040.5877Z'%20fill='%23000667'/%3e%3c/svg%3e", Ne = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%205.5C13.5523%205.5%2014%205.94772%2014%206.5V9H54V42H14V57.5C14%2058.0523%2013.5523%2058.5%2013%2058.5C12.4477%2058.5%2012%2058.0523%2012%2057.5V6.5C12%205.94771%2012.4477%205.5%2013%205.5ZM46.4141%2040H52V34.4141L46.4141%2040ZM39.4141%2040H43.5859L52%2031.5859V27.4141L39.4141%2040ZM34%2038.4141V40H36.5859L52%2024.5859V20.4141L34%2038.4141ZM14%2040H32V11H14V40ZM34%2031.4141V35.5859L52%2017.5859V13.4141L34%2031.4141ZM34%2024.4141V28.5859L51.5859%2011H47.4141L34%2024.4141ZM34%2017.4141V21.5859L44.5859%2011H40.4141L34%2017.4141ZM34%2014.5859L37.5859%2011H34V14.5859Z'%20fill='%23000667'/%3e%3c/svg%3e", Fe = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%2049C9%2051.7614%2011.2386%2054%2014%2054C16.7614%2054%2019%2051.7614%2019%2049H21C21%2051.7614%2023.2386%2054%2026%2054C28.7614%2054%2031%2051.7614%2031%2049H33C33%2051.7614%2035.2386%2054%2038%2054C40.7614%2054%2043%2051.7614%2043%2049H45C45%2051.7614%2047.2386%2054%2050%2054C52.7614%2054%2055%2051.7614%2055%2049H57C57%2052.866%2053.866%2056%2050%2056C47.453%2056%2045.2247%2054.6392%2044%2052.6055C42.7753%2054.6392%2040.547%2056%2038%2056C35.453%2056%2033.2247%2054.6392%2032%2052.6055C30.7753%2054.6392%2028.547%2056%2026%2056C23.453%2056%2021.2247%2054.6392%2020%2052.6055C18.7753%2054.6392%2016.547%2056%2014%2056C10.134%2056%207%2052.866%207%2049H9Z'%20fill='%23000667'/%3e%3cpath%20d='M9%2040C9%2042.7614%2011.2386%2045%2014%2045C16.7614%2045%2019%2042.7614%2019%2040H21C21%2042.7614%2023.2386%2045%2026%2045C28.7614%2045%2031%2042.7614%2031%2040H33C33%2042.7614%2035.2386%2045%2038%2045C40.7614%2045%2043%2042.7614%2043%2040H45C45%2042.7614%2047.2386%2045%2050%2045C52.7614%2045%2055%2042.7614%2055%2040H57C57%2043.866%2053.866%2047%2050%2047C47.453%2047%2045.2247%2045.6392%2044%2043.6055C42.7753%2045.6392%2040.547%2047%2038%2047C35.453%2047%2033.2247%2045.6392%2032%2043.6055C30.7753%2045.6392%2028.547%2047%2026%2047C23.453%2047%2021.2247%2045.6392%2020%2043.6055C18.7753%2045.6392%2016.547%2047%2014%2047C10.134%2047%207%2043.866%207%2040H9Z'%20fill='%23000667'/%3e%3cpath%20d='M37.5264%208C42.998%208.00001%2046.9128%209.9633%2049.4404%2013.0039C51.9432%2016.0147%2053%2019.9768%2053%2023.8574V26.6045C51.7966%2025.655%2050.7994%2023.1973%2049.0771%2021.5615C48.8387%2021.3244%2048.5756%2021.1051%2048.2842%2020.9131C47.4833%2020.3597%2046.5385%2020%2045.3818%2020C45.3578%2020%2045.3351%2020.0014%2045.3135%2020.0029C45.2336%2020.0001%2045.1528%2020%2045.0713%2020C42.5872%2020%2040%2022.1531%2040%2025.5C40%2028.8469%2042.5872%2031%2045.0713%2031H56V33H45.0713C41.4841%2033%2038%2029.9529%2038%2025.5C38%2021.6943%2040.5452%2018.9168%2043.5244%2018.1895C42.916%2018.0682%2042.2689%2018%2041.5791%2018C38.1901%2018%2035.9049%2019.5094%2034.4102%2022.0752C32.8744%2024.7116%2032.1582%2028.5055%2032.1582%2033H30.1582C30.1582%2028.3519%2030.8887%2024.1462%2032.6816%2021.0684C34.5158%2017.9199%2037.4418%2016%2041.5791%2016C45.802%2016.0001%2048.6835%2018.0562%2050.6504%2020.2861C50.2%2018.0491%2049.3043%2015.9688%2047.9023%2014.2822C45.7985%2011.7514%2042.4757%2010%2037.5264%2010C29.13%2010%2025.0472%2015.4051%2021.4424%2021.2402C19.6736%2024.1034%2017.9781%2027.1489%2015.9688%2029.4287C13.9184%2031.755%2011.4237%2033.4287%208%2033.4287V31.4287C10.6553%2031.4287%2012.6474%2030.173%2014.4688%2028.1064C16.3309%2025.9936%2017.8917%2023.1822%2019.7412%2020.1885C23.3732%2014.3093%2027.9754%208%2037.5264%208Z'%20fill='%23000667'/%3e%3c/svg%3e", f5 = "data:image/svg+xml,%3csvg%20width='65'%20height='64'%20viewBox='0%200%2065%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M54.9737%2025.1523C55.6257%2024.7584%2056.5%2025.2206%2056.5%2026.0215V53.9902C56.4999%2054.5478%2056.048%2054.9999%2055.4903%2055H9.50979C8.98717%2054.9998%208.55682%2054.6027%208.50491%2054.0938L8.50002%2053.9902V50.0039L8.50491%2049.9043C8.52787%2049.673%208.63029%2049.4557%208.79592%2049.29L20.7871%2037.2988L20.8526%2037.2393C21.1649%2036.9769%2021.606%2036.9278%2021.9678%2037.1162L22.044%2037.1611L32.4229%2043.7656L54.8467%2025.2422L54.9737%2025.1523ZM10.5%2050.4141V53H20.5V40.4131L10.5%2050.4141ZM22.5%2053H31.5V45.5488L22.5%2039.8203V53ZM33.5%2045.4707V53H42.5V38.0352L33.5%2045.4707ZM44.5%2036.3828V53H54.5V28.1221L44.5%2036.3828Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M55.5938%209.00488C56.1028%209.0568%2056.4999%209.48712%2056.5%2010.0098V18.9756C56.5%2019.8754%2055.4117%2020.3267%2054.7754%2019.6904L50.9883%2015.9033L33.1699%2031.7422C32.8327%2032.0419%2032.3376%2032.0818%2031.9571%2031.8398L21.6094%2025.2549L10.1758%2035.7373C9.76868%2036.1104%209.13587%2036.0829%208.76272%2035.6758C8.38966%2035.2687%208.41723%2034.6359%208.82424%2034.2627L20.8184%2023.2676C21.1551%2022.959%2021.6575%2022.9152%2022.043%2023.1602L32.3994%2029.751L49.5713%2014.4863L45.8096%2010.7246C45.1735%2010.0884%2045.6247%209.00011%2046.5244%209H55.4903L55.5938%209.00488ZM54.5%2016.585V11H48.9151L54.5%2016.585Z'%20fill='%23000667'/%3e%3c/svg%3e", Ve = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%2052C13%2054.2091%2014.7909%2056%2017%2056C19.2091%2056%2021%2054.2091%2021%2052H23C23%2054.2091%2024.7909%2056%2027%2056C29.2091%2056%2031%2054.2091%2031%2052H33C33%2054.2091%2034.7909%2056%2037%2056C39.2091%2056%2041%2054.2091%2041%2052H43C43%2054.2091%2044.7909%2056%2047%2056C49.2091%2056%2051%2054.2091%2051%2052H53C53%2055.3137%2050.3137%2058%2047%2058C44.9126%2058%2043.0748%2056.9336%2042%2055.3164C40.9252%2056.9336%2039.0874%2058%2037%2058C34.9126%2058%2033.0748%2056.9336%2032%2055.3164C30.9252%2056.9336%2029.0874%2058%2027%2058C24.9126%2058%2023.0748%2056.9336%2022%2055.3164C20.9252%2056.9336%2019.0874%2058%2017%2058C13.6863%2058%2011%2055.3137%2011%2052H13Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M32%2019C33.6569%2019%2035.0008%2020.3431%2035.001%2022C35.001%2023.309%2034.1612%2024.4192%2032.9922%2024.8291L38.958%2044.7129C39.1162%2045.2416%2038.8157%2045.7993%2038.2871%2045.958C37.7583%2046.1165%2037.2008%2045.8158%2037.042%2045.2871L32%2028.4805L26.958%2045.2871C26.7992%2045.8158%2026.2417%2046.1165%2025.7129%2045.958C25.1843%2045.7993%2024.8838%2045.2416%2025.042%2044.7129L31.0068%2024.8281C29.8387%2024.4177%2029%2023.3083%2029%2022C29.0002%2020.3432%2030.3432%2019.0002%2032%2019ZM32%2021C31.4479%2021.0002%2031.0002%2021.4479%2031%2022C31%2022.5522%2031.4478%2023.0008%2032%2023.001C32.5524%2023.001%2033.001%2022.5524%2033.001%2022C33.0008%2021.4478%2032.5522%2021%2032%2021Z'%20fill='%23000667'/%3e%3cpath%20d='M19.709%208.68945C15.3543%2011.7296%2012.9006%2016.5655%2012.9004%2021.5088C12.9004%2026.4262%2015.3303%2031.5831%2021%2035.2773L20.0068%2037C13.8338%2032.9777%2011%2027.2015%2011%2021.5088C11.0002%2015.8424%2013.8101%2010.39%2018.666%207L19.709%208.68945Z'%20fill='%23000667'/%3e%3cpath%20d='M45.334%207C50.1899%2010.39%2052.9998%2015.8424%2053%2021.5088C53%2027.2015%2050.1662%2032.9777%2043.9932%2037L43%2035.2773C48.6697%2031.5831%2051.0996%2026.4262%2051.0996%2021.5088C51.0994%2016.5655%2048.6457%2011.7296%2044.291%208.68945L45.334%207Z'%20fill='%23000667'/%3e%3cpath%20d='M24.0498%2012.6934C17.7808%2016.9212%2016.8545%2026.2052%2025%2031.332L23.8369%2033.0303C14.3736%2027.074%2015.4044%2016.0386%2022.8311%2011.0303L24.0498%2012.6934Z'%20fill='%23000667'/%3e%3cpath%20d='M41.1689%2011.0303C48.5956%2016.0386%2049.6264%2027.074%2040.1631%2033.0303L39%2031.332C47.1455%2026.2052%2046.2192%2016.9212%2039.9502%2012.6934L41.1689%2011.0303Z'%20fill='%23000667'/%3e%3cpath%20d='M27.5068%2017.2227C24.4251%2019.3974%2023.9558%2024.1753%2028%2026.8389L26.8457%2028.5498C21.5241%2025.0452%2022.0951%2018.5153%2026.2979%2015.5498L27.5068%2017.2227Z'%20fill='%23000667'/%3e%3cpath%20d='M37.7021%2015.5498C41.9049%2018.5153%2042.4759%2025.0452%2037.1543%2028.5498L36%2026.8389C40.0442%2024.1753%2039.5749%2019.3974%2036.4932%2017.2227L37.7021%2015.5498Z'%20fill='%23000667'/%3e%3c/svg%3e", Re = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.5%2056L15%2047H57V50.7059L54%2056H22.5Z'%20stroke='%23000667'%20stroke-width='2'%20stroke-linejoin='round'/%3e%3cpath%20d='M19%2047L26.8904%2037H50.0685L55%2047'%20stroke='%23000667'%20stroke-width='2'%20stroke-linejoin='round'/%3e%3cpath%20d='M31%2037L34.2941%2032H45.1176L47%2037'%20stroke='%23000667'%20stroke-width='2'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.5%2013.5H16'%20stroke='%23000667'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22.5%2013.5H21'%20stroke='%23000667'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M44.5%2042H43'%20stroke='%23000667'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M38.5%2042H37'%20stroke='%23000667'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M35.5%2017H7V19.5L9%2023H30L35.5%2017Z'%20stroke='%23000667'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8%2017L11.5714%2010H27.898L33%2017'%20stroke='%23000667'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M24%2010L21.7805%207H15.0301L14%2010'%20stroke='%23000667'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", je = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M32.1025%2022.0049H32.1064C33.1615%2022.0603%2034%2022.9312%2034%2024C34%2024.7398%2033.5971%2025.3835%2033%2025.7295V27C33%2027.5523%2032.5523%2028%2032%2028C31.4477%2028%2031%2027.5523%2031%2027V25.7295C30.4029%2025.3835%2030%2024.7398%2030%2024C30%2022.9315%2030.838%2022.0608%2031.8926%2022.0049C31.9278%2022.0012%2031.9637%2022%2032%2022L32.1025%2022.0049Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M32%2014C34.2091%2014%2036%2015.7909%2036%2018V19H39C39.5523%2019%2040%2019.4478%2040%2020V30C40%2030.5523%2039.5523%2031%2039%2031H25C24.4477%2031%2024%2030.5523%2024%2030V20C24%2019.4478%2024.4477%2019%2025%2019H28V18C28%2015.7909%2029.7909%2014%2032%2014ZM26%2029H38V21H26V29ZM32%2016C30.8954%2016%2030%2016.8955%2030%2018V19H34V18C34%2016.8955%2033.1046%2016%2032%2016Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M31.1133%206.10551C31.4449%205.93969%2031.8476%205.96953%2032.1533%206.19437L37.3281%2010H48C48.5523%2010%2049%2010.4478%2049%2011V17.5401L55.6123%2023.208C55.6909%2023.2688%2055.7615%2023.3429%2055.8213%2023.4287C55.8228%2023.4309%2055.8237%2023.4334%2055.8252%2023.4356C55.8332%2023.4473%2055.8401%2023.4597%2055.8477%2023.4717C55.9489%2023.6339%2055.9982%2023.8144%2055.999%2023.9942L56%2024V56.0147C55.9974%2056.2073%2055.9395%2056.4013%2055.8213%2056.5713C55.7902%2056.6159%2055.7543%2056.6555%2055.7178%2056.6934C55.7122%2056.6992%2055.7069%2056.7053%2055.7012%2056.711C55.662%2056.7497%2055.6203%2056.7843%2055.5762%2056.8155C55.5668%2056.8221%2055.5575%2056.8287%2055.5479%2056.835C55.5283%2056.8478%2055.5085%2056.8598%2055.4883%2056.8711C55.4827%2056.8743%2055.4773%2056.8779%2055.4717%2056.8809C55.4503%2056.8923%2055.4283%2056.9023%2055.4062%2056.9121C55.3968%2056.9164%2055.3875%2056.9209%2055.3779%2056.9248C55.3624%2056.9312%2055.3468%2056.9369%2055.3311%2056.9424C55.3146%2056.9482%2055.2981%2056.9541%2055.2812%2056.959C55.2648%2056.9638%2055.2481%2056.9678%2055.2314%2056.9717C55.2179%2056.9749%2055.2042%2056.9778%2055.1904%2056.9805C55.1726%2056.984%2055.1547%2056.9868%2055.1367%2056.9893C55.1218%2056.9913%2055.1069%2056.9938%2055.0918%2056.9952C55.07%2056.9972%2055.0482%2056.9975%2055.0264%2056.9981C55.0176%2056.9983%2055.0088%2057%2055%2057H9C8.99117%2057%208.98241%2056.9983%208.97363%2056.9981C8.95111%2056.9975%208.92865%2056.9973%208.90625%2056.9952C8.89211%2056.9938%208.87822%2056.9912%208.86426%2056.9893C8.84562%2056.9867%208.82706%2056.9841%208.80859%2056.9805C8.79481%2056.9778%208.78116%2056.975%208.76758%2056.9717C8.7509%2056.9677%208.73424%2056.9639%208.71777%2056.959C8.69694%2056.9529%208.6765%2056.9459%208.65625%2056.9385C8.64812%2056.9355%208.63989%2056.9329%208.63184%2056.9297C8.6139%2056.9226%208.59651%2056.9144%208.5791%2056.9063C8.56193%2056.8983%208.54507%2056.8898%208.52832%2056.8809C8.5224%2056.8777%208.51659%2056.8744%208.51074%2056.8711C8.4905%2056.8598%208.47068%2056.8478%208.45117%2056.835C8.44158%2056.8287%208.43221%2056.8221%208.42285%2056.8155C8.37881%2056.7843%208.33699%2056.7497%208.29785%2056.711C8.29211%2056.7053%208.28685%2056.6992%208.28125%2056.6934C8.24486%2056.6556%208.20963%2056.6158%208.17871%2056.5713C8.17578%2056.5671%208.17278%2056.5629%208.16992%2056.5586C8.16674%2056.5539%208.16423%2056.5488%208.16113%2056.544C8.05504%2056.3806%208.00248%2056.1973%208%2056.0147V23.9854C8.0026%2023.7927%208.06045%2023.5988%208.17871%2023.4287C8.23832%2023.3431%208.3083%2023.2688%208.38672%2023.208L15%2017.5401V11C15%2010.4478%2015.4477%2010%2016%2010H25.6777L30.9766%206.18851L31.1133%206.10551ZM12.1895%2055H51.8105L31.999%2041.2178L12.1895%2055ZM10%2054.085L30.2471%2039.9991L10%2025.9141V54.085ZM33.751%2039.9991L54%2054.085V25.9141L33.751%2039.9991ZM17%2028.3457L31.999%2038.7803L47%2028.3457V12H17V28.3457ZM10.6318%2023.9161L15%2026.9551V20.1729L10.6318%2023.9161ZM49%2026.9541L53.3672%2023.9161L49%2020.1729V26.9541ZM29.1025%2010H33.9521L31.5527%208.23637L29.1025%2010Z'%20fill='%23000667'/%3e%3c/svg%3e", Ae = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M32%205C33.1046%205%2034%205.89543%2034%207C34%209%2033%209%2033%2011V14.0273C37.2173%2014.2583%2041.0471%2015.9418%2044%2018.585L46.1426%2016.4434C47.5564%2015.0294%2046.8496%2014.3223%2048.2637%2012.9082L48.415%2012.7705C49.2006%2012.1297%2050.3595%2012.176%2051.0918%2012.9082C51.8728%2013.6892%2051.8728%2014.9553%2051.0918%2015.7363C49.6777%2017.1504%2048.9706%2016.4436%2047.5566%2017.8574L45.4141%2019.999C48.0578%2022.952%2049.7407%2026.7822%2049.9717%2031H53C55%2031%2055%2030%2057%2030L57.2041%2030.0107C58.2128%2030.113%2059%2030.9644%2059%2032C59%2033.0356%2058.2128%2033.887%2057.2041%2033.9893L57%2034L56.6475%2033.9893C54.9922%2033.8794%2054.875%2033%2053%2033H49.9717C49.7407%2037.2175%2048.0575%2041.0471%2045.4141%2044L47.5703%2046.1562C48.9751%2047.5517%2049.6823%2046.8542%2051.0918%2048.2637L51.2285%2048.415C51.8695%2049.2005%2051.824%2050.3594%2051.0918%2051.0918C50.3596%2051.824%2049.2006%2051.8701%2048.415%2051.2295L48.2637%2051.0918L48.0215%2050.835C46.9288%2049.5869%2047.4674%2048.8815%2046.1416%2047.5557L44%2045.4141C41.0471%2048.0575%2037.2175%2049.7407%2033%2049.9717V53L33.0117%2053.3525C33.1143%2054.8974%2033.8857%2055.1026%2033.9883%2056.6475L34%2057C34%2058.1046%2033.1046%2059%2032%2059C30.9643%2059%2030.113%2058.2128%2030.0107%2057.2041L30%2057L30.0107%2056.6475C30.1133%2055.1025%2030.8857%2054.8974%2030.9883%2053.3525L31%2053V49.9717C26.7822%2049.7407%2022.952%2048.0578%2019.999%2045.4141L17.8564%2047.5557L17.8584%2047.5566C16.4442%2048.9709%2017.1505%2049.6776%2015.7363%2051.0918C14.9553%2051.8727%2013.6892%2051.8728%2012.9082%2051.0918C12.176%2050.3596%2012.1298%2049.2006%2012.7705%2048.415L12.9082%2048.2637C14.3171%2046.8548%2015.0232%2047.5501%2016.4268%2046.1572L18.585%2044C15.9418%2041.0472%2014.2593%2037.2173%2014.0283%2033H11C9%2033%209%2034%207%2034C5.89543%2034%205%2033.1046%205%2032C5.00003%2030.8955%205.89545%2030%207%2030C9%2030%209%2031%2011%2031H14.0283C14.2593%2026.7825%2015.9415%2022.9519%2018.585%2019.999L16.4434%2017.8574C15.1176%2016.5319%2014.4132%2017.0705%2013.165%2015.9775L12.9082%2015.7363C12.1272%2014.9553%2012.1272%2013.6893%2012.9082%2012.9082C13.6403%2012.1763%2014.7985%2012.1302%2015.584%2012.7705L15.7363%2012.9082L15.9775%2013.165C17.0705%2014.4133%2016.5319%2015.1176%2017.8574%2016.4434L19.999%2018.585C22.952%2015.9415%2026.7825%2014.2583%2031%2014.0273V11C31%209%2030%209%2030%207C30%205.89543%2030.8954%205%2032%205ZM21.415%2043.998C24.0024%2046.2824%2027.3341%2047.7417%2031%2047.9678V37.915C30.088%2037.762%2029.2465%2037.4038%2028.5234%2036.8887L21.415%2043.998ZM35.4746%2036.8887C34.7518%2037.4033%2033.9114%2037.7621%2033%2037.915V47.9678C36.6654%2047.7417%2039.9958%2046.2818%2042.583%2043.998L35.4746%2036.8887ZM16.0322%2033C16.2583%2036.6654%2017.7171%2039.9968%2020.001%2042.584L27.1104%2035.4746C26.5959%2034.7519%2026.2379%2033.9112%2026.085%2033H16.0322ZM37.915%2033C37.7621%2033.9114%2037.4033%2034.7518%2036.8887%2035.4746L43.998%2042.584C46.2821%2039.9967%2047.7417%2036.6656%2047.9678%2033H37.915ZM32%2028C29.7909%2028%2028%2029.7909%2028%2032C28%2034.2091%2029.7909%2036%2032%2036C34.2091%2036%2036%2034.2091%2036%2032C36%2029.7909%2034.2091%2028%2032%2028ZM36.8887%2028.5234C37.4038%2029.2465%2037.762%2030.088%2037.915%2031H47.9678C47.7417%2027.3341%2046.2824%2024.0024%2043.998%2021.415L36.8887%2028.5234ZM20.001%2021.416C17.7171%2024.0032%2016.2583%2027.3346%2016.0322%2031H26.085C26.2379%2030.0885%2026.5956%2029.2472%2027.1104%2028.5244L20.001%2021.416ZM28.5234%2027.1094C29.2523%2026.5903%2030.1022%2026.2309%2031.0225%2026.0801C31.015%2026.0813%2031.0075%2026.0827%2031%2026.084V16.0312C27.3343%2016.2573%2024.0023%2017.7169%2021.415%2020.001L28.5234%2027.1094ZM33%2026.084C32.9922%2026.0827%2032.9844%2026.0814%2032.9766%2026.0801C33.8967%2026.2307%2034.7458%2026.5906%2035.4746%2027.1094L42.584%2020.001C39.9968%2017.7171%2036.6654%2016.2573%2033%2016.0312V26.084Z'%20fill='%23000667'/%3e%3c/svg%3e", Be = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%2053C13%2055.2091%2014.7909%2057%2017%2057C19.2091%2057%2021%2055.2091%2021%2053H23C23%2055.2091%2024.7909%2057%2027%2057C29.2091%2057%2031%2055.2091%2031%2053H33C33%2055.2091%2034.7909%2057%2037%2057C39.2091%2057%2041%2055.2091%2041%2053H43C43%2055.2091%2044.7909%2057%2047%2057C49.2091%2057%2051%2055.2091%2051%2053H53C53%2056.3137%2050.3137%2059%2047%2059C44.9126%2059%2043.0748%2057.9336%2042%2056.3164C40.9252%2057.9336%2039.0874%2059%2037%2059C34.9126%2059%2033.0748%2057.9336%2032%2056.3164C30.9252%2057.9336%2029.0874%2059%2027%2059C24.9126%2059%2023.0748%2057.9336%2022%2056.3164C20.9252%2057.9336%2019.0874%2059%2017%2059C13.6863%2059%2011%2056.3137%2011%2053H13Z'%20fill='%23000667'/%3e%3cpath%20d='M44%2028C44.5523%2028%2045%2028.4477%2045%2029C45%2029.5523%2044.5523%2030%2044%2030H22C21.4477%2030%2021%2029.5523%2021%2029C21%2028.4477%2021.4477%2028%2022%2028H44Z'%20fill='%23000667'/%3e%3cpath%20d='M44%2021C44.5523%2021%2045%2021.4477%2045%2022C45%2022.5523%2044.5523%2023%2044%2023H22C21.4477%2023%2021%2022.5523%2021%2022C21%2021.4477%2021.4477%2021%2022%2021H44Z'%20fill='%23000667'/%3e%3cpath%20d='M44.1025%2014.0049C44.6067%2014.0562%2045%2014.4823%2045%2015C45%2015.5177%2044.6067%2015.9438%2044.1025%2015.9951L44%2016H27C26.4477%2016%2026%2015.5523%2026%2015C26%2014.4477%2026.4477%2014%2027%2014H44L44.1025%2014.0049Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M50%2036.4395L49.6758%2036.7373L37.3887%2048H15V5H50V36.4395ZM17%2046H36V35H48V7H17V46ZM38%2044.7256L46.4287%2037H38V44.7256Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M24.5547%2032.7266C24.9233%2032.7266%2025.2668%2032.7756%2025.584%2032.875C25.9019%2032.9734%2026.1755%2033.1072%2026.4023%2033.2793C26.6282%2033.4442%2026.8053%2033.6297%2026.9297%2033.8379L27.0117%2033.9932C27.0826%2034.1489%2027.1201%2034.3083%2027.1201%2034.4707C27.1201%2034.6661%2027.032%2034.8341%2026.8789%2034.9697C26.7264%2035.1047%2026.5482%2035.1758%2026.3496%2035.1758C26.1744%2035.1758%2026.0166%2035.1339%2025.8945%2035.0322L25.8896%2035.0283C25.7985%2034.9451%2025.6768%2034.8115%2025.5273%2034.6328L25.5254%2034.6299C25.388%2034.4582%2025.2514%2034.3331%2025.1172%2034.25L25.1162%2034.249C24.999%2034.1747%2024.8334%2034.1309%2024.6084%2034.1309C24.3537%2034.1309%2024.1671%2034.1915%2024.0342%2034.2979C23.8984%2034.4095%2023.8448%2034.5262%2023.8447%2034.6504C23.8447%2034.7913%2023.8962%2034.9122%2024.0088%2035.0195L24.1221%2035.1133C24.2541%2035.213%2024.4418%2035.3302%2024.6895%2035.4648C25.026%2035.6458%2025.2551%2035.7735%2025.3691%2035.8457C25.6863%2036.0331%2025.9687%2036.2006%2026.2178%2036.3486L26.4092%2036.4629C26.5959%2036.5804%2026.7693%2036.7068%2026.9297%2036.8418L27.0869%2036.9854C27.2355%2037.1348%2027.3578%2037.3025%2027.4521%2037.4883C27.5846%2037.7382%2027.6475%2038.0272%2027.6475%2038.3506C27.6474%2038.7202%2027.5471%2039.0591%2027.3457%2039.3633L27.3447%2039.3643C27.1774%2039.6136%2026.9486%2039.8281%2026.6641%2040.0117C27.0814%2040.4132%2027.2998%2040.8848%2027.2998%2041.4248C27.2997%2041.7072%2027.2377%2041.9747%2027.1162%2042.2266L27.1172%2042.2275C26.9983%2042.4812%2026.8222%2042.704%2026.5928%2042.8945C26.3629%2043.0854%2026.0917%2043.2318%2025.7822%2043.335C25.4713%2043.4386%2025.1323%2043.4892%2024.7666%2043.4893C24.3289%2043.4893%2023.9372%2043.4298%2023.5947%2043.3066C23.2573%2043.1889%2022.9617%2043.0246%2022.7109%2042.8125L22.71%2042.8115C22.4664%2042.6022%2022.2804%2042.3769%2022.1572%2042.1348L22.1562%2042.1338C22.0395%2041.9003%2021.9776%2041.6704%2021.9775%2041.4463C21.9775%2041.2252%2022.0582%2041.0292%2022.2129%2040.8652C22.3724%2040.6924%2022.5766%2040.6055%2022.8135%2040.6055C22.9085%2040.6055%2023.0014%2040.6256%2023.0918%2040.6631L23.0967%2040.6641L23.1006%2040.666C23.1681%2040.6912%2023.2304%2040.7235%2023.2822%2040.7676L23.3311%2040.8174L23.333%2040.8193C23.4719%2040.9944%2023.5848%2041.1566%2023.6689%2041.3047L23.7432%2041.4482L23.7451%2041.4512C23.8408%2041.6706%2023.9691%2041.8269%2024.126%2041.9287C24.2829%2042.0304%2024.4794%2042.0849%2024.7227%2042.085C24.9884%2042.085%2025.1858%2042.0133%2025.3301%2041.8838L25.332%2041.8818C25.4853%2041.75%2025.5527%2041.6066%2025.5527%2041.4463C25.5527%2041.3394%2025.5156%2041.2356%2025.4326%2041.1318C25.3433%2041.024%2025.2092%2040.9061%2025.0254%2040.7812L25.0234%2040.7803C24.8385%2040.6522%2024.5511%2040.4694%2024.1602%2040.2305L24.1592%2040.2295C23.767%2039.9862%2023.3698%2039.7353%2022.9668%2039.4775L22.9639%2039.4766C22.8108%2039.3745%2022.6521%2039.2671%2022.4883%2039.1543L22.4873%2039.1523C22.3164%2039.0308%2022.1643%2038.8995%2022.0332%2038.7568C21.8977%2038.6093%2021.7909%2038.4397%2021.7119%2038.25L21.71%2038.2471C21.6329%2038.0482%2021.5967%2037.8198%2021.5967%2037.5664C21.5968%2036.8915%2021.9622%2036.3509%2022.6416%2035.9424C22.2833%2035.5789%2022.0977%2035.1538%2022.0977%2034.6719C22.0977%2034.3231%2022.1954%2033.999%2022.3887%2033.7031L22.4678%2033.5928C22.6611%2033.3427%2022.9214%2033.1425%2023.2441%2032.9912L23.3877%2032.9287C23.7303%2032.7927%2024.1206%2032.7266%2024.5547%2032.7266ZM23.6367%2036.752C23.2785%2036.9977%2023.1428%2037.2207%2023.1426%2037.4141C23.1426%2037.5234%2023.1802%2037.6279%2023.2646%2037.7305L23.3447%2037.8154C23.431%2037.9004%2023.5373%2037.9862%2023.666%2038.0713C23.8451%2038.1859%2024.1245%2038.3573%2024.5039%2038.585C24.6174%2038.6509%2024.7725%2038.7439%2024.9678%2038.8633C25.1329%2038.9611%2025.2964%2039.0523%2025.4561%2039.1396C25.6262%2039.0117%2025.7522%2038.8951%2025.8359%2038.7881C25.9317%2038.6657%2025.9657%2038.5681%2025.9658%2038.4922C25.9658%2038.393%2025.9377%2038.3028%2025.8789%2038.2188L25.877%2038.2168C25.8113%2038.1199%2025.7203%2038.0236%2025.5996%2037.9297C25.4755%2037.8331%2025.3173%2037.7282%2025.125%2037.6143L25.1221%2037.6123C25.0271%2037.5532%2024.9182%2037.4869%2024.7949%2037.4141L24.3818%2037.1748C24.1354%2037.0335%2023.9507%2036.9288%2023.8281%2036.8604L23.8252%2036.8584C23.7489%2036.8135%2023.6858%2036.7789%2023.6367%2036.752Z'%20fill='%23000667'/%3e%3c/svg%3e", Ye = "data:image/svg+xml,%3csvg%20width='65'%20height='64'%20viewBox='0%200%2065%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M34.445%2045C34.9985%2045.0003%2035.4476%2045.4479%2035.4476%2046C35.4476%2046.5521%2034.9985%2046.9997%2034.445%2047H32.9411C32.3874%2047%2031.9385%2046.5523%2031.9385%2046C31.9385%2045.4477%2032.3874%2045%2032.9411%2045H34.445Z'%20fill='%23000667'/%3e%3cpath%20d='M39.4581%2045C40.0116%2045.0003%2040.4607%2045.4479%2040.4607%2046C40.4607%2046.5521%2040.0116%2046.9997%2039.4581%2047H37.9542C37.4005%2047%2036.9516%2046.5523%2036.9516%2046C36.9516%2045.4477%2037.4005%2045%2037.9542%2045H39.4581Z'%20fill='%23000667'/%3e%3cpath%20d='M44.4712%2045C45.0247%2045.0003%2045.4738%2045.4479%2045.4738%2046C45.4738%2046.5521%2045.0247%2046.9997%2044.4712%2047H42.9673C42.4135%2047%2041.9647%2046.5523%2041.9647%2046C41.9647%2045.4477%2042.4135%2045%2042.9673%2045H44.4712Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M45.4738%2036C45.9164%2036.0002%2046.3071%2036.29%2046.4343%2036.7129L47.7238%2041H49.4833C49.8728%2041%2050.2272%2041.2252%2050.3919%2041.5771L53.6309%2048.5H54.4974C55.0509%2048.5002%2055.5%2048.9478%2055.5%2049.5V52.5C55.5%2052.674%2055.4543%2052.845%2055.3678%2052.9961L53.3626%2056.4961C53.1841%2056.8076%2052.8518%2056.9999%2052.4921%2057H27.928C27.6485%2057%2027.3815%2056.8834%2027.1917%2056.6787L21.176%2050.1787C20.9059%2049.8868%2020.8342%2049.4625%2020.9939%2049.0986C21.1537%2048.735%2021.5142%2048.5%2021.9123%2048.5H24.4365L30.1516%2041.375L30.228%2041.291C30.4146%2041.1059%2030.6686%2041.0001%2030.9349%2041H33.3758L36.0919%2036.4854L36.1663%2036.3779C36.355%2036.1411%2036.6435%2036%2036.9516%2036H45.4738ZM28.3666%2055H51.9105L53.4948%2052.2344V50.5H24.2025L28.3666%2055ZM27.0057%2048.5H51.4181L48.8449%2043H31.4176L27.0057%2048.5ZM35.7149%2041H45.6305L44.7277%2038H37.5195L35.7149%2041Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.7285%209.93066C20.0957%209.93093%2022.0156%2011.8451%2022.0161%2014.2061C22.0161%2016.5674%2020.096%2018.4822%2017.7285%2018.4824C15.3611%2018.4822%2013.4419%2016.5674%2013.4419%2014.2061C13.4424%2011.8451%2015.3613%209.93092%2017.7285%209.93066ZM17.7285%2011.9307C16.4688%2011.9309%2015.4476%2012.9497%2015.4472%2014.2061C15.4472%2015.4628%2016.4685%2016.4822%2017.7285%2016.4824C18.9885%2016.4822%2020.0108%2015.4628%2020.0108%2014.2061C20.0104%2012.9497%2018.9882%2011.9309%2017.7285%2011.9307Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.7285%206C22.2729%206.00007%2025.957%209.67453%2025.957%2014.207L25.9512%2014.5098C25.8318%2017.6378%2023.8935%2020.6931%2022.1218%2022.8818C21.4652%2023.6931%2020.808%2024.4098%2020.2341%2025H30.9359C33.7043%2025.0003%2035.9489%2027.2387%2035.9489%2030C35.9489%2032.7613%2033.7043%2034.9997%2030.9359%2035H17.9018C16.2406%2035%2014.894%2036.3431%2014.894%2038C14.894%2039.6569%2016.2406%2041%2017.9018%2041H26.9254C27.4789%2041.0003%2027.928%2041.4479%2027.928%2042C27.928%2042.5521%2027.4789%2042.9997%2026.9254%2043H17.9018C15.1332%2043%2012.8887%2040.7614%2012.8887%2038C12.8887%2035.2386%2015.1332%2033%2017.9018%2033H30.9359C32.5968%2032.9997%2033.9437%2031.6567%2033.9437%2030C33.9437%2028.3433%2032.5968%2027.0003%2030.9359%2027H17.9018C17.8656%2027%2017.8294%2026.9979%2017.7941%2026.9941C17.5432%2027.0105%2017.2876%2026.9369%2017.0833%2026.7656L17.1606%2026.6729L17.1596%2026.6719L17.0823%2026.7646L17.0803%2026.7637C17.0803%2026.7637%2017.0775%2026.7605%2017.0754%2026.7588C17.0711%2026.7551%2017.0646%2026.7497%2017.0568%2026.7432C17.0413%2026.7299%2017.0186%2026.7111%2016.9903%2026.6865C16.9333%2026.6373%2016.8516%2026.565%2016.7484%2026.4727C16.542%2026.2878%2016.249%2026.019%2015.8995%2025.6797C15.2019%2025.0023%2014.2697%2024.0363%2013.3352%2022.8818C11.5635%2020.6931%209.62527%2017.6379%209.50587%2014.5098L9.5%2014.207C9.5%209.67449%2013.1841%206%2017.7285%206ZM17.7285%208C14.2916%208%2011.5052%2010.7791%2011.5052%2014.207L11.5101%2014.4414C11.6059%2016.8755%2013.1675%2019.4897%2014.8959%2021.625C15.7676%2022.7018%2016.6416%2023.6091%2017.2987%2024.2471C17.4553%2024.3992%2017.5993%2024.5358%2017.7275%2024.6553C17.856%2024.5356%2018.0013%2024.3995%2018.1584%2024.2471C18.8154%2023.6091%2019.6895%2022.7018%2020.5611%2021.625C22.2895%2019.4897%2023.8512%2016.8755%2023.9469%2014.4414L23.9518%2014.207C23.9518%2010.7791%2021.1654%208.00007%2017.7285%208Z'%20fill='%23000667'/%3e%3c/svg%3e", Ue = "data:image/svg+xml,%3csvg%20width='65'%20height='64'%20viewBox='0%200%2065%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M31.5356%209.74316C31.8301%208.77242%2033.2696%208.80484%2033.4878%209.84082L34.1655%2013.0625C44.9874%2013.8726%2053.6262%2022.5113%2054.437%2033.333L57.6587%2034.0117L57.7563%2034.0361C58.7271%2034.3306%2058.6947%2035.7702%2057.6587%2035.9883L54.437%2036.666C53.6267%2047.4881%2044.9877%2056.1263%2034.1655%2056.9365L33.4878%2060.1592C33.2696%2061.1952%2031.8301%2061.2276%2031.5356%2060.2568L31.5112%2060.1592L30.8325%2056.9365C20.0111%2056.1256%2011.3723%2047.4876%2010.562%2036.666L7.34033%2035.9883C6.30472%2035.77%206.27233%2034.3307%207.24268%2034.0361L7.34033%2034.0117L10.562%2033.333C11.3727%2022.5119%2020.0114%2013.8734%2030.8325%2013.0625L31.5112%209.84082L31.5356%209.74316ZM32.4683%2054.999C32.4787%2054.999%2032.4891%2055%2032.4995%2055C32.5095%2055%2032.5198%2054.999%2032.5298%2054.999L35.1509%2042.5479C34.321%2042.8393%2033.429%2043%2032.4995%2043C31.5695%2043%2030.6774%2042.8387%2029.8472%2042.5469L32.4683%2054.999ZM12.6089%2037.0967C13.5851%2046.4673%2021.0314%2053.9128%2030.4019%2054.8896L27.5522%2041.3613L22.2065%2046.707L20.7925%2045.293L26.1382%2039.9453L12.6089%2037.0967ZM38.8589%2039.9443L44.2065%2045.293L42.7925%2046.707L37.4448%2041.3604L34.5962%2054.8896C43.9674%2053.9135%2051.4138%2046.4678%2052.3901%2037.0967L38.8589%2039.9443ZM32.4995%2029C29.186%2029.0002%2026.4995%2031.6864%2026.4995%2035C26.4995%2038.3136%2029.186%2040.9998%2032.4995%2041C35.8132%2041%2038.4995%2038.3137%2038.4995%2035C38.4995%2031.6863%2035.8132%2029%2032.4995%2029ZM12.4995%2034.9688V35.0303L24.9517%2037.6514C24.6602%2036.8214%2024.4995%2035.9295%2024.4995%2035C24.4995%2034.0701%2024.66%2033.1778%2024.9517%2032.3477L12.4995%2034.9688ZM40.0474%2032.3477C40.3391%2033.1779%2040.4995%2034.07%2040.4995%2035C40.4995%2035.9296%2040.3389%2036.8214%2040.0474%2037.6514L52.4985%2035.0303C52.4986%2035.0202%2052.4995%2035.0101%2052.4995%2035C52.4995%2034.9896%2052.4986%2034.9792%2052.4985%2034.9688L40.0474%2032.3477ZM30.4019%2015.1094C21.0317%2016.0862%2013.5855%2023.5321%2012.6089%2032.9023L26.1372%2030.0527L20.7925%2024.707L22.2065%2023.293L27.5522%2028.6377L30.4019%2015.1094ZM37.4448%2028.6387L42.7925%2023.293L44.2065%2024.707L38.8599%2030.0537L52.3901%2032.9023C51.4134%2023.5316%2043.9671%2016.0855%2034.5962%2015.1094L37.4448%2028.6387ZM29.8472%2027.4521C30.6774%2027.1604%2031.5696%2027%2032.4995%2027C33.4289%2027%2034.3211%2027.1598%2035.1509%2027.4512L32.5298%2015H32.4683L29.8472%2027.4521ZM18.4995%203C19.0518%203%2019.4995%203.44772%2019.4995%204C19.4995%204.55228%2019.0518%205%2018.4995%205C16.7777%205.00012%2015.1862%205.87843%2014.063%207.3584C13.0999%208.62748%2012.4995%2010.3219%2012.4995%2012.2012C12.4995%2014.2373%2013.2043%2016.0549%2014.3101%2017.3506C14.6686%2017.7707%2014.6188%2018.4022%2014.1987%2018.7607C13.7788%2019.1188%2013.148%2019.0691%2012.7896%2018.6494C11.3622%2016.9771%2010.4995%2014.6939%2010.4995%2012.2012C10.4995%209.89917%2011.2349%207.77724%2012.4702%206.14941C13.9112%204.2507%2016.0587%203.00012%2018.4995%203ZM46.4995%203C48.9404%203%2051.0877%204.25071%2052.5288%206.14941C53.7642%207.77727%2054.4995%209.89909%2054.4995%2012.2012C54.4995%2014.694%2053.6369%2016.977%2052.2095%2018.6494C51.8509%2019.069%2051.2202%2019.119%2050.8003%2018.7607C50.3805%2018.4022%2050.3306%2017.7706%2050.689%2017.3506C51.7948%2016.0549%2052.4995%2014.2374%2052.4995%2012.2012C52.4995%2010.3219%2051.8992%208.6275%2050.936%207.3584C49.8127%205.87843%2048.2214%205%2046.4995%205C45.9474%204.99981%2045.4995%204.55217%2045.4995%204C45.4995%203.44783%2045.9474%203.00019%2046.4995%203ZM20.4995%207C21.0518%207%2021.4995%207.44772%2021.4995%208C21.4995%208.55228%2021.0518%209%2020.4995%209C19.6699%209.00012%2018.8798%209.42206%2018.3062%2010.1777C17.8142%2010.8261%2017.4995%2011.7033%2017.4995%2012.6865C17.4996%2013.7522%2017.8691%2014.6909%2018.4321%2015.3506C18.7906%2015.7707%2018.7399%2016.4022%2018.3198%2016.7607C17.8998%2017.1187%2017.2691%2017.0691%2016.9106%2016.6494C16.0262%2015.6131%2015.4996%2014.2087%2015.4995%2012.6865C15.4995%2011.2805%2015.9482%209.97581%2016.7124%208.96875C17.6039%207.79408%2018.9508%207.00012%2020.4995%207ZM44.4995%207C46.0483%207%2047.395%207.79409%2048.2866%208.96875C49.0509%209.97583%2049.4995%2011.2804%2049.4995%2012.6865C49.4995%2014.2087%2048.9729%2015.6131%2048.0884%2016.6494C47.7299%2017.069%2047.0991%2017.1189%2046.6792%2016.7607C46.2594%2016.4022%2046.2087%2015.7706%2046.5669%2015.3506C47.13%2014.6909%2047.4995%2013.7523%2047.4995%2012.6865C47.4995%2011.7032%2047.1849%2010.8261%2046.6929%2010.1777C46.1191%209.42206%2045.3292%209%2044.4995%209C43.9474%208.99981%2043.4995%208.55217%2043.4995%208C43.4995%207.44783%2043.9474%207.00019%2044.4995%207Z'%20fill='%23000667'/%3e%3c/svg%3e", We = "data:image/svg+xml,%3csvg%20width='65'%20height='64'%20viewBox='0%200%2065%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M33.5%206.53027L39.1406%2011.2314C39.464%2011.501%2039.5837%2011.945%2039.4404%2012.3408C39.297%2012.7365%2038.9209%2013%2038.5%2013H37.5V15H39.5V21H37.6699L43.3545%2057H47.5V59H17.5V57H21.6455L27.3301%2021H25.5V15H27.5V13H26.5C26.0791%2013%2025.703%2012.7365%2025.5596%2012.3408C25.4163%2011.945%2025.536%2011.501%2025.8594%2011.2314L31.5%206.53027V5H33.5V6.53027ZM23.6699%2057H41.3301L39.5928%2046H25.4072L23.6699%2057ZM25.7227%2044H39.2773L38.6455%2040H26.3545L25.7227%2044ZM26.6699%2038H38.3301L37.6982%2034H27.3018L26.6699%2038ZM27.6172%2032H37.3828L35.6455%2021H29.3545L27.6172%2032ZM27.5%2019H37.5V17H27.5V19ZM29.5%2015H35.5V13H29.5V15ZM29.2627%2011H35.7373L32.5%208.30176L29.2627%2011Z'%20fill='%23000667'/%3e%3cpath%20d='M51.5%2029H49.5V27H51.5V29Z'%20fill='%23000667'/%3e%3cpath%20d='M51.5%2025.5H49.5V21H51.5V25.5Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M50.5%2017C54.9183%2017%2058.5%2020.5817%2058.5%2025C58.5%2029.4183%2054.9183%2033%2050.5%2033C46.0817%2033%2042.5%2029.4183%2042.5%2025C42.5%2020.5817%2046.0817%2017%2050.5%2017ZM50.5%2019C47.1863%2019%2044.5%2021.6863%2044.5%2025C44.5%2028.3137%2047.1863%2031%2050.5%2031C53.8137%2031%2056.5%2028.3137%2056.5%2025C56.5%2021.6863%2053.8137%2019%2050.5%2019Z'%20fill='%23000667'/%3e%3c/svg%3e", ze = "data:image/svg+xml,%3csvg%20width='65'%20height='64'%20viewBox='0%200%2065%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%209.5H53.5V42.5H49.5V45.4395L37.9971%2056H16.5V42.5H13.5V59H11.5V6H13.5V9.5ZM18.5%2054H36.5V44H47.5V16.5H18.5V54ZM38.5%2046V52.8232L45.9316%2046H38.5ZM13.5%2040.5H16.5V14.5H31.5V11.5H13.5V40.5ZM49.5%2036.9141V40.5H51.5V34.9141L49.5%2036.9141ZM44.5%2036C45.0523%2036%2045.5%2036.4477%2045.5%2037C45.5%2037.5523%2045.0523%2038%2044.5%2038H22.5C21.9477%2038%2021.5%2037.5523%2021.5%2037C21.5%2036.4477%2021.9477%2036%2022.5%2036H44.5ZM49.5%2029.9141V34.0859L51.5%2032.0859V27.9141L49.5%2029.9141ZM44.5%2029C45.0523%2029%2045.5%2029.4477%2045.5%2030C45.5%2030.5523%2045.0523%2031%2044.5%2031H22.5C21.9477%2031%2021.5%2030.5523%2021.5%2030C21.5%2029.4477%2021.9477%2029%2022.5%2029H44.5ZM49.5%2022.9141V27.0859L51.5%2025.0859V20.9141L49.5%2022.9141ZM44.5%2022C45.0523%2022%2045.5%2022.4477%2045.5%2023C45.5%2023.5523%2045.0523%2024%2044.5%2024H22.5C21.9477%2024%2021.5%2023.5523%2021.5%2023C21.5%2022.4477%2021.9477%2022%2022.5%2022H44.5ZM49.5%2015.9141V20.0859L51.5%2018.0859V13.9141L49.5%2015.9141ZM33.5%2014.5H34.0859L37.0859%2011.5H33.5V14.5ZM36.9141%2014.5H41.0859L44.0859%2011.5H39.9141L36.9141%2014.5ZM43.9141%2014.5H48.0859L51.0859%2011.5H46.9141L43.9141%2014.5Z'%20fill='%23000667'/%3e%3c/svg%3e", qe = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M35%2042H22V34H35V42ZM24%2040H33V36H24V40Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M38%2029C38.5523%2029%2039%2029.4477%2039%2030V43.1221C39.7066%2041.9574%2040.5524%2040.829%2041.499%2039.7656C40.8808%2038.2158%2040.8526%2036.7142%2041.3291%2035.3525C41.9408%2033.6046%2043.3289%2032.2366%2045.001%2031.332C48.313%2029.5404%2053.1377%2029.3612%2056.6064%2032.0068C56.9289%2032.2528%2057.0709%2032.6698%2056.9658%2033.0615C56.1398%2036.1413%2053.8267%2039.9177%2051.1338%2042.1162C49.7882%2043.2147%2048.2226%2044.0213%2046.6055%2044C45.0441%2043.9794%2043.6459%2043.1922%2042.5273%2041.6338C40.7925%2043.708%2039.5348%2045.9647%2039%2048.1211V54H40C40.5523%2054%2041%2054.4477%2041%2055V60C41%2060.5523%2040.5523%2061%2040%2061H17C16.4477%2061%2016%2060.5523%2016%2060V55C16%2054.4477%2016.4477%2054%2017%2054H18V30C18%2029.4477%2018.4477%2029%2019%2029H38ZM18%2059H39V56H18V59ZM20%2054H37V31H20V54ZM54.4961%2034.0947C51.2172%2034.7147%2047.8057%2036.5906%2044.9736%2039.1133C44.6086%2039.4385%2044.2551%2039.7731%2043.9141%2040.1152C43.9206%2040.1256%2043.927%2040.1361%2043.9336%2040.1465C44.823%2041.5535%2045.7645%2041.9885%2046.6318%2042C47.5778%2042.0124%2048.6934%2041.5262%2049.8691%2040.5664C51.7851%2039.0021%2053.5255%2036.4469%2054.4961%2034.0947ZM53.0049%2032.3838C50.6481%2031.6605%2047.9773%2031.9959%2045.9531%2033.0908C44.5912%2033.8276%2043.6227%2034.8565%2043.2178%2036.0137C42.9991%2036.6386%2042.9289%2037.3464%2043.0859%2038.1309C43.2693%2037.958%2043.4553%2037.7878%2043.6436%2037.6201C46.3654%2035.1956%2049.6591%2033.2603%2053.0049%2032.3838Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M28.5%208C30.9853%208%2033%2010.0147%2033%2012.5C33%2014.9853%2030.9853%2017%2028.5%2017C26.0147%2017%2024%2014.9853%2024%2012.5C24%2010.0147%2026.0147%208%2028.5%208ZM28.5%2010C27.1193%2010%2026%2011.1193%2026%2012.5C26%2013.8807%2027.1193%2015%2028.5%2015C29.8807%2015%2031%2013.8807%2031%2012.5C31%2011.1193%2029.8807%2010%2028.5%2010Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M28.5%204C33.1283%204%2037%207.51786%2037%2012C37%2015.507%2034.945%2018.9826%2033.0449%2021.4756C32.0774%2022.745%2031.1125%2023.8083%2030.3896%2024.5537C30.0279%2024.9267%2029.7254%2025.2216%2029.5117%2025.4248C29.4048%2025.5265%2029.3197%2025.606%2029.2607%2025.6602C29.2314%2025.6871%2029.2084%2025.7081%2029.1924%2025.7227C29.1846%2025.7297%2029.1783%2025.7352%2029.1738%2025.7393C29.1716%2025.7412%2029.168%2025.7441%2029.168%2025.7441L29.166%2025.7461L28.5%2025L29.165%2025.7471C28.786%2026.0845%2028.214%2026.0845%2027.835%2025.7471L28.5%2025L27.834%2025.7461L27.832%2025.7441C27.832%2025.7441%2027.8284%2025.7412%2027.8262%2025.7393C27.8217%2025.7352%2027.8154%2025.7297%2027.8076%2025.7227C27.7916%2025.7081%2027.7686%2025.6871%2027.7393%2025.6602C27.6803%2025.606%2027.5952%2025.5265%2027.4883%2025.4248C27.2746%2025.2216%2026.9721%2024.9267%2026.6104%2024.5537C25.8875%2023.8083%2024.9226%2022.745%2023.9551%2021.4756C22.055%2018.9826%2020%2015.507%2020%2012C20%207.51786%2023.8717%204%2028.5%204ZM28.5%206C24.844%206%2022%208.75015%2022%2012C22%2014.8124%2023.695%2017.8365%2025.5449%2020.2637C26.4524%2021.4543%2027.3625%2022.4565%2028.0459%2023.1611C28.2119%2023.3323%2028.3647%2023.4853%2028.5%2023.6191C28.6353%2023.4853%2028.7881%2023.3323%2028.9541%2023.1611C29.6375%2022.4565%2030.5476%2021.4543%2031.4551%2020.2637C33.305%2017.8365%2035%2014.8124%2035%2012C35%208.75015%2032.156%206%2028.5%206Z'%20fill='%23000667'/%3e%3c/svg%3e", $e = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30%2039C30.5523%2039%2031%2039.4477%2031%2040C31%2040.5523%2030.5523%2041%2030%2041H28C27.4477%2041%2027%2040.5523%2027%2040C27%2039.4477%2027.4477%2039%2028%2039H30Z'%20fill='%23000667'/%3e%3cpath%20d='M36%2039C36.5523%2039%2037%2039.4477%2037%2040C37%2040.5523%2036.5523%2041%2036%2041H34C33.4477%2041%2033%2040.5523%2033%2040C33%2039.4477%2033.4477%2039%2034%2039H36Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M34%2031C34.5523%2031%2035%2031.4477%2035%2032V35H40C40.5523%2035%2041%2035.4477%2041%2036V45.8525L44.2305%2047.2686L40.6514%2058.3086C40.5177%2058.7208%2040.1335%2058.9999%2039.7002%2059H24.2998C23.8665%2058.9999%2023.4823%2058.7208%2023.3486%2058.3086L19.7695%2047.2686L23%2045.8525V36C23%2035.4477%2023.4477%2035%2024%2035H29V32C29%2031.4477%2029.4477%2031%2030%2031H34ZM22.2305%2048.373L25.0264%2057H31V44.5293L22.2305%2048.373ZM33%2057H38.9736L41.7695%2048.373L33%2044.5293V57ZM25%2044.9756L31.5986%2042.084C31.613%2042.0777%2031.628%2042.073%2031.6426%2042.0674C31.6604%2042.0605%2031.6782%2042.0536%2031.6963%2042.0479C31.7166%2042.0414%2031.7372%2042.0364%2031.7578%2042.0312C31.7773%2042.0264%2031.7967%2042.0213%2031.8164%2042.0176C31.8372%2042.0137%2031.858%2042.0113%2031.8789%2042.0088C31.8978%2042.0065%2031.9166%2042.0042%2031.9355%2042.0029C31.9437%2042.0024%2031.9518%2042.0013%2031.96%2042.001H32.04C32.0479%2042.0013%2032.0556%2042.0024%2032.0635%2042.0029C32.0824%2042.0041%2032.1012%2042.0065%2032.1201%2042.0088C32.141%2042.0113%2032.1619%2042.0137%2032.1826%2042.0176C32.2023%2042.0213%2032.2217%2042.0264%2032.2412%2042.0312C32.2618%2042.0364%2032.2824%2042.0414%2032.3027%2042.0479C32.3209%2042.0536%2032.3386%2042.0606%2032.3564%2042.0674C32.3713%2042.0731%2032.3867%2042.0776%2032.4014%2042.084L39%2044.9756V37H25V44.9756ZM31%2035H33V33H31V35Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M24.5%205C26.3092%205%2027.9857%205.5687%2029.3633%206.53223C30.3465%206.18836%2031.4021%206%2032.5%206C35.8231%206%2038.7437%207.70774%2040.4404%2010.2881C41.096%2010.1013%2041.7868%2010%2042.5%2010C43.2879%2010%2044.0474%2010.1245%2044.7617%2010.3506C45.6448%208.94035%2047.2108%208%2049%208C51.7614%208%2054%2010.2386%2054%2013C54%2015.423%2052.2763%2017.4426%2049.9883%2017.9014C49.7797%2021.8569%2046.5075%2025%2042.5%2025C40.7327%2025%2039.1087%2024.3857%2037.8271%2023.3633C36.9608%2023.9509%2035.9923%2024.3988%2034.9531%2024.6758C34.9137%2024.7394%2034.8733%2024.8021%2034.832%2024.8643C34.9394%2025.2229%2035%2025.6037%2035%2026C35%2028.2091%2033.2091%2030%2031%2030C29.4455%2030%2028.1014%2029.1139%2027.4395%2027.8223C24.5242%2027.1581%2022.3008%2024.6778%2022.0283%2021.6318C18.54%2020.5729%2016%2017.3354%2016%2013.5C16%208.80558%2019.8056%205%2024.5%205ZM24.5%207C20.9101%207%2018%209.91015%2018%2013.5C18%2016.644%2020.2335%2019.2677%2023.2012%2019.8691L24.0234%2020.0361L24.0029%2020.874C24.0014%2020.9365%2024%2020.966%2024%2021C24%2023.4411%2025.7507%2025.474%2028.0654%2025.9111L28.292%2025.9482L28.9072%2026.0352L29.1016%2026.626C29.365%2027.4257%2030.1166%2028%2031%2028C32.1046%2028%2033%2027.1046%2033%2026C33%2025.6968%2032.9299%2025.408%2032.8047%2025.1445L32.5381%2024.583L32.9238%2024.0957C33.1116%2023.8581%2033.2772%2023.6042%2033.4189%2023.3369L33.6367%2022.9268L34.0918%2022.8281C35.2716%2022.5732%2036.348%2022.042%2037.25%2021.3027L37.9531%2020.7266L38.5938%2021.3721C39.5915%2022.3785%2040.9723%2023%2042.5%2023C45.5376%2023%2048%2020.5376%2048%2017.5C48%2017.3657%2047.9929%2017.226%2047.9814%2017.0752L47.8994%2015.9932L48.9834%2015.999C48.9909%2015.9991%2048.9984%2015.9989%2049.0049%2015.999C50.6595%2015.9964%2052%2014.6552%2052%2013C52%2011.3431%2050.6569%2010%2049%2010C47.7118%2010%2046.611%2010.8127%2046.1865%2011.957L45.8086%2012.9746L44.8252%2012.5156C44.1193%2012.1857%2043.3325%2012%2042.5%2012C41.7479%2012%2041.0334%2012.1499%2040.3838%2012.4209L39.5459%2012.7705L39.1172%2011.9697C37.8528%209.60533%2035.3635%208%2032.5%208C31.4672%208%2030.4854%208.20829%2029.5928%208.58398L29.042%208.81543L28.5771%208.44043C27.4609%207.53963%2026.0448%207%2024.5%207Z'%20fill='%23000667'/%3e%3c/svg%3e", Ge = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.1885%2050C13.1885%2052.2091%2014.9794%2054%2017.1885%2054C19.3976%2054%2021.1884%2052.2091%2021.1885%2050H23.1885L23.1934%2050.2061C23.3006%2052.3195%2025.0485%2054%2027.1885%2054C29.3976%2054%2031.1884%2052.2091%2031.1885%2050H33.1885L33.1934%2050.2061C33.3006%2052.3195%2035.0485%2054%2037.1885%2054C39.3976%2054%2041.1884%2052.2091%2041.1885%2050H43.1885L43.1934%2050.2061C43.3006%2052.3195%2045.0485%2054%2047.1885%2054C49.3976%2054%2051.1884%2052.2091%2051.1885%2050H53.1885C53.1884%2053.3137%2050.5022%2056%2047.1885%2056C45.1011%2056%2043.2633%2054.9337%2042.1885%2053.3165C41.1136%2054.9337%2039.2758%2056%2037.1885%2056C35.1011%2056%2033.2633%2054.9337%2032.1885%2053.3165C31.1136%2054.9337%2029.2758%2056%2027.1885%2056C25.1011%2056%2023.2633%2054.9337%2022.1885%2053.3165C21.1136%2054.9337%2019.2758%2056%2017.1885%2056C13.8748%2056%2011.1885%2053.3137%2011.1885%2050H13.1885Z'%20fill='%23000667'/%3e%3cpath%20d='M17.4277%2029.3946C16.5719%2034.509%2018.1835%2038.3886%2020.874%2040.7276C23.5842%2043.0834%2027.4879%2043.9646%2031.3818%2042.8692L31.9238%2044.795C27.4226%2046.0613%2022.8118%2045.0618%2019.5615%2042.2364C16.2922%2039.394%2014.4968%2034.7915%2015.4551%2029.0645L17.4277%2029.3946Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M20.4307%207.29302C20.8212%206.90249%2021.4552%206.90249%2021.8457%207.29302L32.4521%2017.8995L34.5732%2015.7784C34.9638%2015.3878%2035.5968%2015.3878%2035.9873%2015.7784L36.6943%2016.4854L38.8154%2014.3643C39.206%2013.9738%2039.8399%2013.9738%2040.2305%2014.3643L45.8867%2020.0206C46.2772%2020.411%2046.2771%2021.0441%2045.8867%2021.4346L43.7646%2023.5557L44.4727%2024.2637C44.863%2024.6543%2044.8631%2025.2873%2044.4727%2025.6778L42.3516%2027.7989L52.958%2038.4053C53.3484%2038.7957%2053.3482%2039.4288%2052.958%2039.8194L48.0078%2044.7696C47.6173%2045.16%2046.9842%2045.16%2046.5938%2044.7696L35.9873%2034.1631L35.2803%2034.8702C34.8898%2035.2606%2034.2567%2035.2605%2033.8662%2034.8702L25.3809%2026.3848C24.9904%2025.9943%2024.9904%2025.3613%2025.3809%2024.9707L26.0879%2024.2637L15.4814%2013.6573C15.0909%2013.2667%2015.0909%2012.6328%2015.4814%2012.2422L20.4307%207.29302ZM37.4014%2032.7491L47.3008%2042.6485L50.8369%2039.1124L40.9375%2029.2129L37.4014%2032.7491ZM27.502%2025.6778L34.5732%2032.7491L40.2295%2027.0918C40.2324%2027.089%2040.2354%2027.0859%2040.2383%2027.0831L42.3516%2024.9707L35.2803%2017.8995L27.502%2025.6778ZM17.6025%2012.9493L27.502%2022.8497L31.0381%2019.3135L21.1387%209.41411L17.6025%2012.9493ZM38.1084%2017.8995L42.3516%2022.1426L43.7656%2020.7276L39.5234%2016.4854L38.1084%2017.8995Z'%20fill='%23000667'/%3e%3cpath%20d='M21.1611%2029.6163C20.258%2036.2866%2025.7066%2040.1688%2030.8271%2038.9043L31.3076%2040.8467C24.8907%2042.4316%2018.0759%2037.4921%2019.1787%2029.3477L21.1611%2029.6163Z'%20fill='%23000667'/%3e%3cpath%20d='M25.2373%2030.0372C24.814%2033.3401%2027.5072%2035.2474%2030.0098%2034.6485L30.4756%2036.5928C26.6858%2037.5%2022.6427%2034.5485%2023.2539%2029.7823L25.2373%2030.0372Z'%20fill='%23000667'/%3e%3c/svg%3e", Ke = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M33%206.53027L38.6406%2011.2314C38.964%2011.501%2039.0837%2011.945%2038.9404%2012.3408C38.797%2012.7365%2038.4209%2013%2038%2013H37V15H39V21H37.1699L42.8545%2057H47V59H17V57H21.1455L26.8301%2021H25V15H27V13H26C25.5791%2013%2025.203%2012.7365%2025.0596%2012.3408C24.9163%2011.945%2025.036%2011.501%2025.3594%2011.2314L31%206.53027V5H33V6.53027ZM24.9072%2046L23.1699%2057H40.8301L39.0928%2046H24.9072ZM25.2227%2044H38.7773L38.1455%2040H25.8545L25.2227%2044ZM26.1699%2038H37.8301L37.1982%2034H26.8018L26.1699%2038ZM27.1172%2032H36.8828L35.1455%2021H28.8545L27.1172%2032ZM27%2019H37V17H27V19ZM29%2015H35V13H29V15ZM28.7627%2011H35.2373L32%208.30176L28.7627%2011Z'%20fill='%23000667'/%3e%3cpath%20d='M47%2013C47.5523%2013%2048%2013.4477%2048%2014C48%2014.5523%2047.5523%2015%2047%2015L43%2015C42.4477%2015%2042%2014.5523%2042%2014C42%2013.4477%2042.4477%2013%2043%2013L47%2013Z'%20fill='%23000667'/%3e%3cpath%20d='M41.293%2016.293C41.6835%2015.9024%2042.3165%2015.9024%2042.707%2016.293L45.707%2019.293C46.0976%2019.6835%2046.0976%2020.3165%2045.707%2020.707C45.3165%2021.0976%2044.6835%2021.0976%2044.293%2020.707L41.293%2017.707C40.9024%2017.3165%2040.9024%2016.6835%2041.293%2016.293Z'%20fill='%23000667'/%3e%3cpath%20d='M44.293%207.29297C44.6835%206.90244%2045.3165%206.90244%2045.707%207.29297C46.0976%207.68349%2046.0976%208.31651%2045.707%208.70703L42.707%2011.707C42.3165%2012.0976%2041.6835%2012.0976%2041.293%2011.707C40.9024%2011.3165%2040.9024%2010.6835%2041.293%2010.293L44.293%207.29297Z'%20fill='%23000667'/%3e%3c/svg%3e", Qe = "data:image/svg+xml,%3csvg%20width='65'%20height='64'%20viewBox='0%200%2065%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%2053C13.5%2055.2091%2015.2909%2057%2017.5%2057C19.7091%2057%2021.5%2055.2091%2021.5%2053H23.5C23.5%2055.2091%2025.2909%2057%2027.5%2057C29.7091%2057%2031.5%2055.2091%2031.5%2053H33.5C33.5%2055.2091%2035.2909%2057%2037.5%2057C39.7091%2057%2041.5%2055.2091%2041.5%2053H43.5C43.5%2055.2091%2045.2909%2057%2047.5%2057C49.7091%2057%2051.5%2055.2091%2051.5%2053H53.5C53.5%2056.3137%2050.8137%2059%2047.5%2059C45.4126%2059%2043.5748%2057.9336%2042.5%2056.3164C41.4252%2057.9336%2039.5874%2059%2037.5%2059C35.4126%2059%2033.5748%2057.9336%2032.5%2056.3164C31.4252%2057.9336%2029.5874%2059%2027.5%2059C25.4126%2059%2023.5748%2057.9336%2022.5%2056.3164C21.4252%2057.9336%2019.5874%2059%2017.5%2059C14.1863%2059%2011.5%2056.3137%2011.5%2053H13.5Z'%20fill='%23000667'/%3e%3cpath%20d='M13.5%2045C13.5%2047.2091%2015.2909%2049%2017.5%2049C19.7091%2049%2021.5%2047.2091%2021.5%2045H23.5C23.5%2047.2091%2025.2909%2049%2027.5%2049C29.7091%2049%2031.5%2047.2091%2031.5%2045H33.5C33.5%2047.2091%2035.2909%2049%2037.5%2049C39.7091%2049%2041.5%2047.2091%2041.5%2045H43.5C43.5%2047.2091%2045.2909%2049%2047.5%2049C49.7091%2049%2051.5%2047.2091%2051.5%2045H53.5C53.5%2048.3137%2050.8137%2051%2047.5%2051C45.4126%2051%2043.5748%2049.9336%2042.5%2048.3164C41.4252%2049.9336%2039.5874%2051%2037.5%2051C35.4126%2051%2033.5748%2049.9336%2032.5%2048.3164C31.4252%2049.9336%2029.5874%2051%2027.5%2051C25.4126%2051%2023.5748%2049.9336%2022.5%2048.3164C21.4252%2049.9336%2019.5874%2051%2017.5%2051C14.1863%2051%2011.5%2048.3137%2011.5%2045H13.5Z'%20fill='%23000667'/%3e%3cpath%20d='M29.5%2016C30.0523%2016%2030.5%2016.4477%2030.5%2017C30.5%2017.5523%2030.0523%2018%2029.5%2018H26.5C25.9477%2018%2025.5%2017.5523%2025.5%2017C25.5%2016.4477%2025.9477%2016%2026.5%2016H29.5Z'%20fill='%23000667'/%3e%3cpath%20d='M38.5%2016C39.0523%2016%2039.5%2016.4477%2039.5%2017C39.5%2017.5523%2039.0523%2018%2038.5%2018H35.5C34.9477%2018%2034.5%2017.5523%2034.5%2017C34.5%2016.4477%2034.9477%2016%2035.5%2016H38.5Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M35.5%205C36.0523%205%2036.5%205.44772%2036.5%206V12H43.5C44.0523%2012%2044.5%2012.4477%2044.5%2013V24.3027L48.7217%2026.2031L43.9531%2041.3008C43.8217%2041.7168%2043.4363%2042%2043%2042H22C21.5637%2042%2021.1783%2041.7168%2021.0469%2041.3008L16.2783%2026.2031L20.5%2024.3027V13C20.5%2012.4477%2020.9477%2012%2021.5%2012H28.5V6C28.5%205.44772%2028.9477%205%2029.5%205H35.5ZM18.7217%2027.2969L22.7324%2040H31.5V21.5459L18.7217%2027.2969ZM33.5%2040H42.2676L46.2783%2027.2969L33.5%2021.5459V40ZM22.5%2023.4033L32.0898%2019.0879C32.1048%2019.0811%2032.1205%2019.0763%2032.1357%2019.0703C32.1565%2019.0622%2032.1771%2019.0536%2032.1982%2019.0469C32.2121%2019.0425%2032.2262%2019.0389%2032.2402%2019.0352C32.2658%2019.0283%2032.2914%2019.0214%2032.3174%2019.0166C32.3378%2019.0128%2032.3584%2019.0113%2032.3789%2019.0088C32.3978%2019.0065%2032.4166%2019.0032%2032.4355%2019.002C32.4411%2019.0016%2032.4466%2019.0012%2032.4521%2019.001H32.5479C32.5531%2019.0012%2032.5583%2019.0016%2032.5635%2019.002C32.5825%2019.0032%2032.6012%2019.0065%2032.6201%2019.0088C32.6406%2019.0113%2032.6613%2019.0128%2032.6816%2019.0166C32.7076%2019.0214%2032.7332%2019.0283%2032.7588%2019.0352C32.7728%2019.0389%2032.7869%2019.0425%2032.8008%2019.0469C32.822%2019.0536%2032.8425%2019.0622%2032.8633%2019.0703C32.8788%2019.0764%2032.8949%2019.081%2032.9102%2019.0879L42.5%2023.4033V14H22.5V23.4033ZM30.5%2012H34.5V10.5H30.5V12ZM30.5%208.5H34.5V7H30.5V8.5Z'%20fill='%23000667'/%3e%3c/svg%3e", p5 = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M45.9999%2036C46.5521%2036.0001%2046.9999%2036.4478%2046.9999%2037C46.9999%2037.5522%2046.5521%2037.9999%2045.9999%2038H23.9999C23.4476%2038%2022.9999%2037.5523%2022.9999%2037C22.9999%2036.4477%2023.4476%2036%2023.9999%2036H45.9999Z'%20fill='%23000667'/%3e%3cpath%20d='M45.9999%2029C46.5521%2029.0001%2046.9999%2029.4478%2046.9999%2030C46.9999%2030.5522%2046.5521%2030.9999%2045.9999%2031H23.9999C23.4476%2031%2022.9999%2030.5523%2022.9999%2030C22.9999%2029.4477%2023.4476%2029%2023.9999%2029H45.9999Z'%20fill='%23000667'/%3e%3cpath%20d='M46.1024%2022.0049C46.6065%2022.0563%2046.9999%2022.4824%2046.9999%2023C46.9999%2023.5176%2046.6065%2023.9437%2046.1024%2023.9951L45.9999%2024H28.9999C28.4476%2024%2027.9999%2023.5523%2027.9999%2023C27.9999%2022.4477%2028.4476%2022%2028.9999%2022H45.9999L46.1024%2022.0049Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.9999%202C18.4224%202.0001%2018.8002%202.26613%2018.9423%202.66406L21.204%209H26.9999C27.4244%209.00009%2027.8027%209.26834%2027.9433%209.66895C28.0838%2010.0696%2027.9564%2010.516%2027.6249%2010.7812L24.8515%2013H51.9999V44.4395L51.6757%2044.7373L39.3886%2056H16.9999V18.8672L12.5546%2021.832C12.2058%2022.0644%2011.7486%2022.0546%2011.41%2021.8076C11.0717%2021.5604%2010.9239%2021.1285%2011.039%2020.7256L12.8544%2014.3652L8.37489%2010.7812C8.04327%2010.5159%207.91596%2010.0697%208.05653%209.66895C8.19716%209.26831%208.57527%209%208.99989%209H14.7958L17.0585%202.66406L17.122%202.52051C17.2951%202.20323%2017.6303%202.00008%2017.9999%202ZM24.9618%2020.7256C25.0767%2021.1285%2024.9281%2021.5605%2024.5897%2021.8076C24.2512%2022.0548%2023.794%2022.0645%2023.4452%2021.832L18.9999%2018.8672V54H37.9999V43H49.9999V15H23.3261L24.9618%2020.7256ZM39.9999%2045V52.7256L48.4286%2045H39.9999ZM16.4413%2010.3359C16.2992%2010.7338%2015.9224%2010.9999%2015.4999%2011H11.8515L14.6249%2013.2188C14.9394%2013.4705%2015.0723%2013.887%2014.9618%2014.2744L13.7089%2018.6582L17.4452%2016.168L17.5761%2016.0947C17.8893%2015.948%2018.2608%2015.9722%2018.5546%2016.168L22.2909%2018.6582L21.038%2014.2744C20.9274%2013.8869%2021.0602%2013.4705%2021.3749%2013.2188L24.1483%2011H20.4999C20.0773%2011%2019.7006%2010.7339%2019.5585%2010.3359L17.9999%205.97266L16.4413%2010.3359Z'%20fill='%23000667'/%3e%3c/svg%3e", Xe = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%2051.9997C13%2054.2088%2014.7909%2055.9997%2017%2055.9997C19.2091%2055.9997%2021%2054.2088%2021%2051.9997H23C23%2054.2088%2024.7909%2055.9997%2027%2055.9997C29.2091%2055.9997%2031%2054.2088%2031%2051.9997H33C33%2054.2088%2034.7909%2055.9997%2037%2055.9997C39.2091%2055.9997%2041%2054.2088%2041%2051.9997H43C43%2054.2088%2044.7909%2055.9997%2047%2055.9997C49.2091%2055.9997%2051%2054.2088%2051%2051.9997H53C53%2055.3134%2050.3137%2057.9997%2047%2057.9997C44.9125%2057.9997%2043.0748%2056.9334%2042%2055.3161C40.9252%2056.9334%2039.0875%2057.9997%2037%2057.9997C34.9125%2057.9997%2033.0748%2056.9334%2032%2055.3161C30.9252%2056.9334%2029.0875%2057.9997%2027%2057.9997C24.9125%2057.9997%2023.0748%2056.9334%2022%2055.3161C20.9252%2056.9334%2019.0875%2057.9997%2017%2057.9997C13.6863%2057.9997%2011%2055.3134%2011%2051.9997H13Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M31.8516%206.0104C32.1469%205.96615%2032.4469%206.05676%2032.6689%206.25649C37.8349%2010.9055%2044.9742%2021.1367%2045.9951%2035.4284C46.0179%2035.7479%2045.8859%2036.0592%2045.6406%2036.2653C45.3952%2036.4714%2045.0658%2036.5471%2044.7549%2036.4694C40.9582%2035.5203%2037.7404%2036.0199%2035.5117%2037.3571C35.1842%2037.5535%2034.7735%2037.5464%2034.4531%2037.3385C34.1329%2037.1307%2033.959%2036.7585%2034.0049%2036.3795C34.9906%2028.2567%2034.2527%2020.987%2033.2666%2015.7467C33.1798%2015.2855%2033.0896%2014.8405%2033%2014.4118V40.9997H51C51.4043%2040.9997%2051.769%2041.2434%2051.9238%2041.6168C52.0786%2041.9905%2051.9929%2042.4207%2051.707%2042.7067L45.707%2048.7067C45.5195%2048.8942%2045.2652%2048.9997%2045%2048.9997H17C16.8026%2048.9996%2016.6096%2048.9412%2016.4453%2048.8317L13.4453%2046.8317C13.2384%2046.6937%2013.0906%2046.4831%2013.0303%2046.2418L12.0303%2042.2418C11.9558%2041.9433%2012.0225%2041.627%2012.2119%2041.3844C12.4014%2041.1418%2012.6921%2040.9997%2013%2040.9997H31V37.4577C26.2381%2037.0103%2022.0736%2037.132%2019.0781%2037.3717C17.5398%2037.4948%2016.3117%2037.648%2015.4717%2037.7702C15.0518%2037.8313%2014.7286%2037.885%2014.5127%2037.9225C14.405%2037.9412%2014.3237%2037.9555%2014.2705%2037.9655C14.244%2037.9704%2014.2244%2037.9748%2014.2119%2037.9772C14.2058%2037.9784%2014.2009%2037.9796%2014.1982%2037.9801H14.1963L14.0508%2037.9987C13.7115%2038.016%2013.3822%2037.8589%2013.1826%2037.5758C12.9547%2037.2523%2012.939%2036.8244%2013.1426%2036.485L31.1426%206.48501L31.2051%206.39321C31.3618%206.1878%2031.5932%206.04917%2031.8516%206.0104ZM14.875%2045.3815L17.3027%2046.9997H44.5859L48.5859%2042.9997H14.2803L14.875%2045.3815ZM15.9541%2035.6862C16.7501%2035.5831%2017.7489%2035.4712%2018.9189%2035.3776C21.9641%2035.1339%2026.1771%2035.0089%2031%2035.4489V10.6081L15.9541%2035.6862ZM34.1865%2010.7223C34.5257%2012.0127%2034.894%2013.5794%2035.2324%2015.3776C36.1724%2020.3727%2036.8936%2027.1721%2036.1816%2034.817C38.3769%2033.9748%2041.0122%2033.7403%2043.8848%2034.2428C42.8267%2023.7324%2038.3385%2015.6569%2034.1865%2010.7223Z'%20fill='%23000667'/%3e%3c/svg%3e", Je = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.3542%2052C12.3543%2054.2089%2014.1735%2055.9998%2016.4172%2056C18.6611%2056%2020.4801%2054.209%2020.4802%2052H22.5117L22.5176%2052.206C22.6267%2054.3192%2024.4012%2055.9998%2026.5747%2056C28.8186%2056%2030.6376%2054.209%2030.6377%2052H32.6692L32.6752%2052.206C32.7842%2054.3192%2034.5587%2055.9998%2036.7322%2056C38.9761%2056%2040.7951%2054.209%2040.7952%2052H42.8267L42.8327%2052.206C42.9417%2054.3192%2044.7162%2055.9998%2046.8897%2056C49.1336%2056%2050.9526%2054.209%2050.9527%2052H52.9842C52.9841%2055.3136%2050.2556%2058%2046.8897%2058C44.7693%2057.9999%2042.9026%2056.933%2041.811%2055.3154C40.7193%2056.9329%2038.8527%2058%2036.7322%2058C34.6118%2057.9999%2032.7451%2056.933%2031.6535%2055.3154C30.5617%2056.9329%2028.6951%2058%2026.5747%2058C24.4543%2057.9999%2022.5876%2056.933%2021.4959%2055.3154C20.4042%2056.9329%2018.5376%2058%2016.4172%2058C13.0515%2057.9998%2010.3228%2055.3135%2010.3227%2052H12.3542Z'%20fill='%23000667'/%3e%3cpath%20d='M12.3542%2044C12.3543%2046.2089%2014.1735%2047.9998%2016.4172%2048C18.6611%2048%2020.4801%2046.209%2020.4802%2044H22.5117L22.5176%2044.206C22.6267%2046.3192%2024.4012%2047.9998%2026.5747%2048C28.8186%2048%2030.6376%2046.209%2030.6377%2044H32.6692L32.6752%2044.206C32.7842%2046.3192%2034.5587%2047.9998%2036.7322%2048C38.9761%2048%2040.7951%2046.209%2040.7952%2044H42.8267L42.8327%2044.206C42.9417%2046.3192%2044.7162%2047.9998%2046.8897%2048C49.1336%2048%2050.9526%2046.209%2050.9527%2044H52.9842C52.9841%2047.3136%2050.2556%2050%2046.8897%2050C44.7693%2049.9999%2042.9026%2048.9329%2041.811%2047.3154C40.7193%2048.9329%2038.8527%2050%2036.7322%2050C34.6118%2049.9999%2032.7451%2048.9329%2031.6535%2047.3154C30.5617%2048.9329%2028.6951%2050%2026.5747%2050C24.4543%2049.9999%2022.5876%2048.9329%2021.4959%2047.3154C20.4042%2048.9329%2018.5376%2050%2016.4172%2050C13.0515%2049.9998%2010.3228%2047.3135%2010.3227%2044H12.3542Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M44.5597%2029.2528L31.0881%2032.7216C31.1609%2032.8683%2031.2191%2033.0248%2031.2616%2033.1894L31.5662%2034.3671C31.9%2035.6613%2031.1061%2036.9802%2029.7926%2037.3134L24.6612%2038.6152C23.3477%2038.9482%2022.0117%2038.1691%2021.6775%2036.8749L21.3739%2035.6972C21.3348%2035.5453%2021.3116%2035.3931%2021.3025%2035.2421L18.3128%2036.0126C18.1585%2036.7002%2017.7051%2037.317%2017.0193%2037.6591L15.9371%2038.1992C14.7272%2038.8024%2013.2543%2038.3231%2012.6478%2037.1288L10.2602%2032.4267C9.65382%2031.2322%2010.1435%2029.7745%2011.3533%2029.1708L12.4355%2028.6308C13.0791%2028.3098%2013.7961%2028.2968%2014.4184%2028.5331L33.7296%2010.3895L44.5597%2029.2528ZM28.7788%2033.3876L23.6475%2034.6894C23.4209%2034.7471%2023.2838%2034.9748%2023.341%2035.1982L23.6455%2036.3759C23.7033%2036.5996%2023.9343%2036.7342%2024.1613%2036.6767L29.2926%2035.3749C29.5193%2035.3171%2029.6565%2035.0897%2029.5991%2034.8661L29.2946%2033.6884C29.2366%2033.4649%2029.0058%2033.3301%2028.7788%2033.3876ZM13.9125%2030.6044C13.8076%2030.3981%2013.5532%2030.3158%2013.3441%2030.4198L12.2619%2030.9599C12.0529%2031.0643%2011.9678%2031.3159%2012.0725%2031.5224L14.4601%2036.2245C14.565%2036.431%2014.8203%2036.5143%2015.0295%2036.4101L16.1117%2035.87C16.3205%2035.7655%2016.4049%2035.513%2016.3001%2035.3066L13.9125%2030.6044ZM15.8518%2029.9511L17.9299%2034.0448L41.4926%2027.9745L33.2445%2013.6102L15.8518%2029.9511Z'%20fill='%23000667'/%3e%3cpath%20d='M52.9842%2020.9999C53.5452%2020.9999%2054%2021.4476%2054%2021.9999C53.9999%2022.5521%2053.5452%2022.9999%2052.9842%2022.9999H44.8582C44.2975%2022.9997%2043.8426%2022.552%2043.8425%2021.9999C43.8425%2021.4477%2044.2974%2021%2044.8582%2020.9999H52.9842Z'%20fill='%23000667'/%3e%3cpath%20d='M50.5956%2013.0633C51.1208%2012.8695%2051.7069%2013.1314%2051.904%2013.6483C52.1009%2014.1653%2051.8349%2014.7424%2051.3098%2014.9364L43.1838%2017.9364C42.6588%2018.1301%2042.0725%2017.8682%2041.8755%2017.3514C41.6786%2016.8345%2041.9448%2016.2575%2042.4696%2016.0633L50.5956%2013.0633Z'%20fill='%23000667'/%3e%3cpath%20d='M44.0319%205.41878C44.358%204.96938%2044.992%204.86537%2045.4484%205.18636C45.9049%205.50737%2046.0106%206.13148%2045.6845%206.5809L40.6058%2013.5809C40.2797%2014.0302%2039.6457%2014.1343%2039.1893%2013.8133C38.7329%2013.4924%2038.6273%2012.8682%2038.9532%2012.4188L44.0319%205.41878Z'%20fill='%23000667'/%3e%3c/svg%3e", m5 = "data:image/svg+xml,%3csvg%20width='65'%20height='64'%20viewBox='0%200%2065%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.4998%2037C24.6043%2037.0001%2025.4998%2037.8955%2025.4998%2039C25.4998%2039.7397%2025.0969%2040.3835%2024.4998%2040.7295V46.8252C25.6643%2046.413%2026.4998%2045.3057%2026.4998%2044C26.4998%2043.4477%2026.9476%2043%2027.4998%2043C28.0521%2043.0001%2028.4998%2043.4478%2028.4998%2044C28.4998%2046.7614%2026.2612%2048.9999%2023.4998%2049C20.7384%2049%2018.4998%2046.7614%2018.4998%2044C18.4998%2043.4477%2018.9476%2043%2019.4998%2043C20.0521%2043.0001%2020.4998%2043.4478%2020.4998%2044C20.4998%2045.3058%2021.3352%2046.413%2022.4998%2046.8252V40.7295C21.9027%2040.3835%2021.4998%2039.7398%2021.4998%2039C21.4998%2037.8954%2022.3953%2037%2023.4998%2037Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M24.4998%2021C26.1566%2021.0001%2027.4998%2022.3432%2027.4998%2024C27.4998%2025.6568%2026.1566%2026.9999%2024.4998%2027C22.843%2027%2021.4998%2025.6569%2021.4998%2024C21.4998%2022.3431%2022.843%2021%2024.4998%2021ZM24.4998%2023C23.9476%2023%2023.4998%2023.4477%2023.4998%2024C23.4998%2024.5523%2023.9476%2025%2024.4998%2025C25.0521%2024.9999%2025.4998%2024.5522%2025.4998%2024C25.4998%2023.4478%2025.0521%2023.0001%2024.4998%2023Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M32.4998%2021C34.1566%2021.0001%2035.4998%2022.3432%2035.4998%2024C35.4998%2025.6568%2034.1566%2026.9999%2032.4998%2027C30.843%2027%2029.4998%2025.6569%2029.4998%2024C29.4998%2022.3431%2030.843%2021%2032.4998%2021ZM32.4998%2023C31.9476%2023%2031.4998%2023.4477%2031.4998%2024C31.4998%2024.5523%2031.9476%2025%2032.4998%2025C33.0521%2024.9999%2033.4998%2024.5522%2033.4998%2024C33.4998%2023.4478%2033.0521%2023.0001%2032.4998%2023Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M40.4998%2021C42.1566%2021.0001%2043.4998%2022.3432%2043.4998%2024C43.4998%2025.6568%2042.1566%2026.9999%2040.4998%2027C38.843%2027%2037.4998%2025.6569%2037.4998%2024C37.4998%2022.3431%2038.843%2021%2040.4998%2021ZM40.4998%2023C39.9476%2023%2039.4998%2023.4477%2039.4998%2024C39.4998%2024.5523%2039.9476%2025%2040.4998%2025C41.0521%2024.9999%2041.4998%2024.5522%2041.4998%2024C41.4998%2023.4478%2041.0521%2023.0001%2040.4998%2023Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M37.4998%206C38.0521%206.00009%2038.4998%206.44777%2038.4998%207V17H47.4998C48.0521%2017.0001%2048.4998%2017.4478%2048.4998%2018V34.7129L52.8914%2036.5801C53.3518%2036.7762%2053.5964%2037.283%2053.4637%2037.7656L47.9637%2057.7656C47.8442%2058.1993%2047.4497%2058.4999%2046.9998%2058.5H17.9998C17.5499%2058.5%2017.1555%2058.1994%2017.036%2057.7656L11.536%2037.7656C11.4032%2037.2829%2011.6476%2036.7761%2012.1082%2036.5801L16.4998%2034.7129V18C16.4998%2017.4477%2016.9476%2017%2017.4998%2017H26.4998V7C26.4998%206.44772%2026.9476%206%2027.4998%206H37.4998ZM13.6952%2038.0771L18.7616%2056.5H31.4998V30.5107L13.6952%2038.0771ZM33.4998%2056.5H46.2381L51.3036%2038.0771L33.4998%2030.5107V56.5ZM18.4998%2033.8633L32.0936%2028.0859C32.2177%2028.0307%2032.3553%2028%2032.4998%2028L32.6024%2028.0049C32.707%2028.0155%2032.8067%2028.0426%2032.8993%2028.083L46.4998%2033.8633V19H18.4998V33.8633ZM28.4998%2017H36.4998V13H28.4998V17ZM28.4998%2011H36.4998V8H28.4998V11Z'%20fill='%23000667'/%3e%3c/svg%3e", e6 = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%2052C13%2054.2091%2014.7909%2056%2017%2056C19.2091%2056%2021%2054.2091%2021%2052H23C23%2054.2091%2024.7909%2056%2027%2056C29.2091%2056%2031%2054.2091%2031%2052H33C33%2054.2091%2034.7909%2056%2037%2056C39.2091%2056%2041%2054.2091%2041%2052H43C43%2054.2091%2044.7909%2056%2047%2056C49.2091%2056%2051%2054.2091%2051%2052H53C53%2055.3137%2050.3137%2058%2047%2058C44.9126%2058%2043.0748%2056.9336%2042%2055.3164C40.9252%2056.9336%2039.0874%2058%2037%2058C34.9126%2058%2033.0748%2056.9336%2032%2055.3164C30.9252%2056.9336%2029.0874%2058%2027%2058C24.9126%2058%2023.0748%2056.9336%2022%2055.3164C20.9252%2056.9336%2019.0874%2058%2017%2058C13.6863%2058%2011%2055.3137%2011%2052H13ZM13%2043C13%2045.2091%2014.7909%2047%2017%2047C19.2091%2047%2021%2045.2091%2021%2043H23C23%2045.2091%2024.7909%2047%2027%2047C29.2091%2047%2031%2045.2091%2031%2043H33C33%2045.2091%2034.7909%2047%2037%2047C39.2091%2047%2041%2045.2091%2041%2043H43C43%2045.2091%2044.7909%2047%2047%2047C49.2091%2047%2051%2045.2091%2051%2043H53C53%2046.3137%2050.3137%2049%2047%2049C44.9126%2049%2043.0748%2047.9336%2042%2046.3164C40.9252%2047.9336%2039.0874%2049%2037%2049C34.9126%2049%2033.0748%2047.9336%2032%2046.3164C30.9252%2047.9336%2029.0874%2049%2027%2049C24.9126%2049%2023.0748%2047.9336%2022%2046.3164C20.9252%2047.9336%2019.0874%2049%2017%2049C13.6863%2049%2011%2046.3137%2011%2043H13ZM32%206C38.6274%206%2044%2011.3726%2044%2018C44%2022.7415%2041.0506%2027.4753%2038.2783%2030.9092C36.8719%2032.6512%2035.4675%2034.1111%2034.416%2035.1348C33.8899%2035.6469%2033.4502%2036.0512%2033.1406%2036.3291C32.9858%2036.4681%2032.8629%2036.576%2032.7783%2036.6494C32.7362%2036.686%2032.7034%2036.714%2032.6807%2036.7334C32.6694%2036.743%2032.6605%2036.7506%2032.6543%2036.7559C32.6513%2036.7584%2032.6492%2036.7612%2032.6475%2036.7627L32.6445%2036.7646C32.6445%2036.7646%2032.6436%2036.7654%2032%2036L32.6436%2036.7656C32.2716%2037.0783%2031.7284%2037.0783%2031.3564%2036.7656L32%2036L31.3555%2036.7646L31.3525%2036.7627C31.3508%2036.7612%2031.3487%2036.7584%2031.3457%2036.7559C31.3395%2036.7506%2031.3306%2036.743%2031.3193%2036.7334C31.2966%2036.714%2031.2638%2036.686%2031.2217%2036.6494C31.1371%2036.576%2031.0142%2036.4681%2030.8594%2036.3291C30.5498%2036.0512%2030.1101%2035.6469%2029.584%2035.1348C28.5325%2034.1111%2027.1281%2032.6512%2025.7217%2030.9092C22.9494%2027.4753%2020%2022.7415%2020%2018C20%2011.3726%2025.3726%206%2032%206ZM32%208C26.4772%208%2022%2012.4772%2022%2018C22%2022.0084%2024.5507%2026.2747%2027.2783%2029.6533C28.6217%2031.3173%2029.9676%2032.717%2030.9785%2033.7012C31.3793%2034.0913%2031.7279%2034.414%2032%2034.6621C32.2721%2034.414%2032.6207%2034.0913%2033.0215%2033.7012C34.0324%2032.717%2035.3783%2031.3173%2036.7217%2029.6533C39.4493%2026.2747%2042%2022.0084%2042%2018C42%2012.4772%2037.5228%208%2032%208ZM32%2012C35.3137%2012%2038%2014.6863%2038%2018C38%2021.3137%2035.3137%2024%2032%2024C28.6863%2024%2026%2021.3137%2026%2018C26%2014.6863%2028.6863%2012%2032%2012ZM32%2014C29.7909%2014%2028%2015.7909%2028%2018C28%2020.2091%2029.7909%2022%2032%2022C34.2091%2022%2036%2020.2091%2036%2018C36%2015.7909%2034.2091%2014%2032%2014Z'%20fill='%23000667'/%3e%3c/svg%3e", t6 = "data:image/svg+xml,%3csvg%20width='65'%20height='64'%20viewBox='0%200%2065%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%2053C13.5%2055.2091%2015.2909%2057%2017.5%2057C19.7091%2057%2021.5%2055.2091%2021.5%2053H23.5C23.5%2055.2091%2025.2909%2057%2027.5%2057C29.7091%2057%2031.5%2055.2091%2031.5%2053H33.5C33.5%2055.2091%2035.2909%2057%2037.5%2057C39.7091%2057%2041.5%2055.2091%2041.5%2053H43.5C43.5%2055.2091%2045.2909%2057%2047.5%2057C49.7091%2057%2051.5%2055.2091%2051.5%2053H53.5C53.5%2056.3137%2050.8137%2059%2047.5%2059C45.4126%2059%2043.5748%2057.9336%2042.5%2056.3164C41.4252%2057.9336%2039.5874%2059%2037.5%2059C35.4126%2059%2033.5748%2057.9336%2032.5%2056.3164C31.4252%2057.9336%2029.5874%2059%2027.5%2059C25.4126%2059%2023.5748%2057.9336%2022.5%2056.3164C21.4252%2057.9336%2019.5874%2059%2017.5%2059C14.1863%2059%2011.5%2056.3137%2011.5%2053H13.5ZM50.5%2036.4395L50.1758%2036.7373L37.8887%2048H15.5V5H50.5V36.4395ZM17.5%2046H36.5V35H48.5V7H17.5V46ZM38.5%2044.7256L46.9287%2037H38.5V44.7256ZM44.5%2028C45.0523%2028%2045.5%2028.4477%2045.5%2029C45.5%2029.5523%2045.0523%2030%2044.5%2030H22.5C21.9477%2030%2021.5%2029.5523%2021.5%2029C21.5%2028.4477%2021.9477%2028%2022.5%2028H44.5ZM44.5%2021C45.0523%2021%2045.5%2021.4477%2045.5%2022C45.5%2022.5523%2045.0523%2023%2044.5%2023H22.5C21.9477%2023%2021.5%2022.5523%2021.5%2022C21.5%2021.4477%2021.9477%2021%2022.5%2021H44.5ZM44.6025%2014.0049C45.1067%2014.0562%2045.5%2014.4823%2045.5%2015C45.5%2015.5177%2045.1067%2015.9438%2044.6025%2015.9951L44.5%2016H27.5C26.9477%2016%2026.5%2015.5523%2026.5%2015C26.5%2014.4477%2026.9477%2014%2027.5%2014H44.5L44.6025%2014.0049Z'%20fill='%23000667'/%3e%3c/svg%3e", n6 = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.2744%2020.8037L19.3604%2025.5869L15.8574%2022.6514L17.1426%2021.1191L19.0938%2022.7539L21.7256%2019.5381L23.2744%2020.8037Z'%20fill='%23000667'/%3e%3cpath%20d='M32.5%2023.1709H25.5V21.1709H32.5V23.1709Z'%20fill='%23000667'/%3e%3cpath%20d='M23.2744%2012.8037L19.3604%2017.5869L15.8574%2014.6514L17.1426%2013.1191L19.0938%2014.7539L21.7256%2011.5381L23.2744%2012.8037Z'%20fill='%23000667'/%3e%3cpath%20d='M38.5%2015.1709H25.5V13.1709H38.5V15.1709Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M46.5%205.1709C47.0523%205.1709%2047.5%205.61861%2047.5%206.1709V30.1709C47.4998%2030.5118%2047.329%2030.8128%2047.0684%2030.9932C47.1726%2031.1836%2047.2622%2031.3839%2047.3301%2031.5938C47.8263%2031.3239%2048.3954%2031.1709%2049%2031.1709C50.2532%2031.1709%2051.3515%2031.8303%2051.9697%2032.8203C52.5423%2032.4117%2053.243%2032.1709%2054%2032.1709C55.933%2032.1709%2057.5%2033.7379%2057.5%2035.6709V42.6123C57.4999%2045.7559%2056.856%2048.8666%2055.6084%2051.752L54.4561%2054.416V57.1709C54.4558%2057.723%2054.0082%2058.1709%2053.4561%2058.1709C52.9042%2058.1706%2052.4563%2057.7228%2052.4561%2057.1709V54.209C52.4561%2054.0728%2052.4851%2053.9376%2052.5391%2053.8125L53.7725%2050.958C54.9117%2048.3232%2055.4999%2045.4828%2055.5%2042.6123V35.6709C55.5%2034.8425%2054.8284%2034.1709%2054%2034.1709C53.1716%2034.1709%2052.5%2034.8425%2052.5%2035.6709V39.1709C52.4997%2039.723%2052.0521%2040.1709%2051.5%2040.1709C50.9479%2040.1709%2050.5003%2039.7229%2050.5%2039.1709V34.6709C50.5%2033.8425%2049.8284%2033.1709%2049%2033.1709C48.1716%2033.1709%2047.5%2033.8425%2047.5%2034.6709V39.1709C47.4997%2039.723%2047.0521%2040.1709%2046.5%2040.1709C45.9479%2040.1709%2045.5003%2039.7229%2045.5%2039.1709V32.6709C45.5%2031.8425%2044.8284%2031.1709%2044%2031.1709C43.1716%2031.1709%2042.5%2031.8425%2042.5%2032.6709V39.1709C42.4997%2039.723%2042.0521%2040.1709%2041.5%2040.1709C40.9479%2040.1709%2040.5003%2039.7229%2040.5%2039.1709V25.6709C40.5%2024.8425%2039.8284%2024.1709%2039%2024.1709C38.1716%2024.1709%2037.5%2024.8425%2037.5%2025.6709V44.1709C37.4998%2044.5916%2037.2364%2044.968%2036.8408%2045.1113C36.4451%2045.2545%2036.001%2045.1346%2035.7314%2044.8115L31.8789%2040.1875C31.554%2039.7976%2030.9869%2039.7148%2030.5645%2039.9961C30.1383%2040.2804%2029.9976%2040.8428%2030.2402%2041.2939L36.3809%2052.6973L36.4365%2052.8193L37.9365%2056.8193C38.1301%2057.3362%2037.8683%2057.9134%2037.3516%2058.1074C36.8347%2058.3011%2036.2576%2058.039%2036.0635%2057.5225L34.5859%2053.584L28.4795%2042.2422C27.7476%2040.8826%2028.1704%2039.1887%2029.4551%2038.332C30.7279%2037.4837%2032.4358%2037.7321%2033.415%2038.9072L35.5%2041.4082V31.1709H28.5V34.1709H33.5V36.1709H21.5V34.1709H26.5V31.1709H8.5C7.94788%2031.1709%207.50026%2030.723%207.5%2030.1709V6.1709C7.5%205.61861%207.94772%205.1709%208.5%205.1709H46.5ZM9.5%2029.1709H35.5V25.6709C35.5%2023.7379%2037.067%2022.1709%2039%2022.1709C40.933%2022.1709%2042.5%2023.7379%2042.5%2025.6709V29.1709H45.5V7.1709H9.5V29.1709Z'%20fill='%23000667'/%3e%3c/svg%3e", r6 = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.9996%2037.3058C13.5516%2037.306%2013.9994%2037.7538%2013.9996%2038.3058C13.9996%2038.8579%2013.5517%2039.3055%2012.9996%2039.3058H11.9996C11.4473%2039.3058%2010.9996%2038.8581%2010.9996%2038.3058C10.9997%2037.7536%2011.4474%2037.3058%2011.9996%2037.3058H12.9996Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.1285%2034.3136C17.4246%2034.3521%2017.6908%2034.5226%2017.8502%2034.7804C18.0322%2035.0751%2018.0489%2035.4432%2017.8941%2035.753L17.0591%2037.422L17.9029%2040.795L20.4136%2043.3058H43.7222L48.4849%2040.4484L48.5972%2040.3907C48.7121%2040.3403%2048.8364%2040.3115%2048.9625%2040.3068L58.9625%2039.9318C59.3228%2039.9185%2059.6623%2040.1002%2059.8511%2040.4073C60.04%2040.7147%2060.0485%2041.1006%2059.8736%2041.4161L56.9175%2046.7452L55.9468%2049.6251C55.8098%2050.0317%2055.4286%2050.3056%2054.9996%2050.3058H6.99957C6.54071%2050.3058%206.14114%2049.9931%206.02985%2049.548L4.02985%2041.548C3.9553%2041.2493%204.02205%2040.9332%204.21149%2040.6905C4.401%2040.448%204.69175%2040.3058%204.99957%2040.3058H6.27887L8.05133%2034.9894L8.11286%2034.8429C8.28312%2034.5168%208.62307%2034.3058%208.99957%2034.3058H16.9996L17.1285%2034.3136ZM49.2935%2042.295L44.5142%2045.1632C44.3589%2045.2564%2044.1807%2045.3057%2043.9996%2045.3058H19.9996C19.7344%2045.3058%2019.4801%2045.2003%2019.2925%2045.0128L16.5855%2042.3058H6.27985L7.77985%2048.3058H54.2818L55.0523%2046.0206L55.0845%2045.9357C55.0967%2045.9082%2055.111%2045.8809%2055.1256%2045.8546L57.2652%2041.9962L49.2935%2042.295ZM8.38629%2040.3058H15.7193L15.0298%2037.548C14.9721%2037.3165%2014.9983%2037.0719%2015.105%2036.8585L15.3814%2036.3058H9.72028L8.38629%2040.3058Z'%20fill='%23000667'/%3e%3cpath%20d='M30.9996%2042.3058H20.9996V40.3058H30.9996V42.3058Z'%20fill='%23000667'/%3e%3cpath%20d='M42.9996%2042.3058H32.9996V40.3058H42.9996V42.3058Z'%20fill='%23000667'/%3e%3cpath%20d='M30.9996%2039.3058H20.9996V37.3058H30.9996V39.3058Z'%20fill='%23000667'/%3e%3cpath%20d='M42.9996%2039.3058H32.9996V37.3058H42.9996V39.3058Z'%20fill='%23000667'/%3e%3cpath%20d='M31.8404%2024.7863C33.2566%2024.7815%2034.6503%2025.1471%2035.8756%2025.8458C37.1008%2026.5446%2038.1124%2027.5503%2038.8023%2028.7599L37.0416%2029.7091C36.5321%2028.8159%2035.7848%2028.0708%2034.8765%2027.5529C33.9679%2027.0347%2032.9304%2026.7622%2031.8726%2026.7657C30.8149%2026.7694%2029.776%2027.049%2028.8658%2027.5763C27.9557%2028.1037%2027.2088%2028.8587%2026.7027%2029.7609L24.9283%2028.7902C25.6064%2027.5812%2026.6061%2026.5732%2027.8209%2025.8693C29.0358%2025.1653%2030.4241%2024.7911%2031.8404%2024.7863Z'%20fill='%23000667'/%3e%3cpath%20d='M31.8179%2018.8575C34.3268%2018.849%2036.7948%2019.4954%2038.9625%2020.7316C41.13%2021.9677%2042.9178%2023.7476%2044.1373%2025.8859L42.3765%2026.8341C41.3374%2025.0121%2039.8131%2023.4939%2037.9625%2022.4386C36.1117%2021.3832%2034.0012%2020.8288%2031.8511%2020.8361C29.701%2020.8434%2027.5913%2021.4125%2025.7427%2022.4835C23.8941%2023.5546%2022.3764%2025.0884%2021.3472%2026.923L19.5728%2025.9523C20.7739%2023.8112%2022.5439%2022.0241%2024.6968%2020.7765C26.85%2019.5289%2029.3094%2018.8661%2031.8179%2018.8575Z'%20fill='%23000667'/%3e%3cpath%20d='M31.7974%2013.0001C35.3851%2012.988%2038.913%2013.9122%2042.0113%2015.6788C45.1097%2017.4457%2047.665%2019.9902%2049.4078%2023.046L47.647%2023.9952C46.0847%2021.2558%2043.7936%2018.974%2041.0123%2017.3878C38.2307%2015.8016%2035.0599%2014.9687%2031.8306%2014.9796C28.6012%2014.9906%2025.4324%2015.8441%2022.6568%2017.4523C19.8812%2019.0605%2017.6019%2021.3637%2016.0562%2024.1193L14.2828%2023.1486C16.0005%2020.0865%2018.5328%2017.5299%2021.6129%2015.7452C24.6928%2013.9608%2028.2099%2013.0123%2031.7974%2013.0001Z'%20fill='%23000667'/%3e%3c/svg%3e", a6 = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M47.506%206.02458C49.9825%205.71784%2051.7479%208.3431%2050.5056%2010.4852L44.8845%2020.1733C43.7654%2022.102%2040.9869%2022.1927%2039.7421%2020.3409L37.5372%2017.0615L32.9097%2020.1148V25.4506L38.1123%2028.0244L40.003%2024.7041C41.1059%2022.7662%2043.8832%2022.6531%2045.1435%2024.4945L51.4736%2033.7441C52.873%2035.7893%2051.3094%2038.5367%2048.8167%2038.4123L37.5431%2037.85C35.2985%2037.7379%2033.9566%2035.3283%2035.0595%2033.3904L37.1216%2029.766L32.9097%2027.6823V59H30.8929V20.0798H26.1572L26.8938%2023.673C27.3409%2025.8527%2025.3144%2027.7366%2023.1438%2027.16L12.2424%2024.2636C9.83179%2023.6231%209.19765%2020.5326%2011.1651%2019.0126L20.0634%2012.139C21.835%2010.7705%2024.4427%2011.7233%2024.8898%2013.903L25.7475%2018.0839H32.3524L36.4204%2015.3989L34.1624%2012.0406C32.9176%2010.1889%2034.0754%207.68778%2036.3052%207.41139L47.506%206.02458ZM43.4734%2025.6133C43.0531%2025%2042.1274%2025.0377%2041.7599%2025.6835L36.8163%2034.3698C36.4487%2035.0157%2036.8964%2035.8186%2037.6445%2035.856L48.9181%2036.4183C49.7491%2036.4598%2050.27%2035.5447%2049.8035%2034.8629L43.4734%2025.6133ZM22.9134%2014.2996C22.7643%2013.5732%2021.8947%2013.2559%2021.3042%2013.712L12.4069%2020.5865C11.751%2021.0932%2011.9618%2022.1224%2012.7653%2022.3359L23.6677%2025.2323C24.3909%2025.4241%2025.0661%2024.7969%2024.9174%2024.0706L22.9134%2014.2996ZM47.7561%208.0049L36.5563%209.39268C35.813%209.48475%2035.4264%2010.3182%2035.8414%2010.9354L41.4211%2019.2358C41.8361%2019.853%2042.7626%2019.8222%2043.1356%2019.1793L48.7557%209.49111C49.1696%208.77711%2048.5816%207.90266%2047.7561%208.0049Z'%20fill='%23000667'/%3e%3c/svg%3e", s6 = "data:image/svg+xml,%3csvg%20width='65'%20height='64'%20viewBox='0%200%2065%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.8101%2049.9487C13.8101%2052.1766%2015.5872%2053.9827%2017.7791%2053.9829C19.9711%2053.9829%2021.748%2052.1768%2021.748%2049.9487H23.7325C23.7325%2052.1766%2025.5097%2053.9827%2027.7015%2053.9829C29.8936%2053.9829%2031.6705%2052.1768%2031.6705%2049.9487H33.655C33.655%2052.1766%2035.4322%2053.9827%2037.624%2053.9829C39.816%2053.9829%2041.593%2052.1768%2041.593%2049.9487H43.5775C43.5775%2052.1766%2045.3547%2053.9827%2047.5465%2053.9829C49.7385%2053.9829%2051.5155%2052.1768%2051.5155%2049.9487H53.5C53.5%2053.2908%2050.8345%2056%2047.5465%2056C45.4751%2055.9998%2043.6516%2054.9239%2042.5853%2053.2925C41.5188%2054.9238%2039.6954%2056%2037.624%2056C35.5526%2055.9998%2033.7291%2054.9239%2032.6628%2053.2925C31.5963%2054.9238%2029.773%2056%2027.7015%2056C25.6301%2055.9998%2023.8066%2054.9239%2022.7403%2053.2925C21.6738%2054.9238%2019.8505%2056%2017.7791%2056C14.4912%2055.9998%2011.8256%2053.2906%2011.8256%2049.9487H13.8101Z'%20fill='%23000667'/%3e%3cpath%20d='M13.8101%2040.8719C13.8101%2043.0997%2015.5872%2044.9058%2017.7791%2044.906C19.9711%2044.906%2021.748%2043.0999%2021.748%2040.8719H23.7325C23.7325%2043.0997%2025.5097%2044.9058%2027.7015%2044.906C29.8936%2044.906%2031.6705%2043.0999%2031.6705%2040.8719H33.655C33.655%2043.0997%2035.4322%2044.9058%2037.624%2044.906C39.816%2044.906%2041.593%2043.0999%2041.593%2040.8719H43.5775C43.5775%2043.0997%2045.3547%2044.9058%2047.5465%2044.906C49.7385%2044.906%2051.5155%2043.0999%2051.5155%2040.8719H53.5C53.5%2044.2139%2050.8345%2046.9231%2047.5465%2046.9231C45.4751%2046.923%2043.6516%2045.8471%2042.5853%2044.2156C41.5188%2045.847%2039.6954%2046.9231%2037.624%2046.9231C35.5526%2046.923%2033.7291%2045.8471%2032.6628%2044.2156C31.5963%2045.847%2029.773%2046.9231%2027.7015%2046.9231C25.6301%2046.923%2023.8066%2045.8471%2022.7403%2044.2156C21.6738%2045.847%2019.8505%2046.9231%2017.7791%2046.9231C14.4912%2046.9229%2011.8256%2044.2137%2011.8256%2040.8719H13.8101Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M30.532%207.00005C30.5583%207.00039%2030.5843%207.00253%2030.6105%207.00497C30.6284%207.00666%2030.6467%207.00622%2030.6647%207.00891C30.6739%207.01029%2030.6828%207.0132%2030.6919%207.01482C30.7118%207.0184%2030.7313%207.02381%2030.751%207.02861C30.781%207.03593%2030.8103%207.04423%2030.8391%207.05422C30.8554%207.05985%2030.8716%207.06546%2030.8876%207.07195C30.9174%207.08409%2030.9465%207.09742%2030.9748%207.11233C30.9921%207.12143%2031.0093%207.13072%2031.0262%207.14089C31.0551%207.15839%2031.0826%207.17771%2031.1095%207.19802C31.1221%207.2075%2031.1351%207.21643%2031.1473%207.22658C31.173%207.24797%2031.1965%207.27165%2031.22%207.29552C31.2315%207.30724%2031.2448%207.31761%2031.2558%207.32999L42.4176%2019.8629L51.9903%2016.8087C52.3794%2016.6849%2052.8032%2016.816%2053.0591%2017.1386C53.315%2017.4615%2053.3503%2017.9111%2053.1483%2018.2713L43.5717%2035.3407L25.8614%2038.0186L11.811%2024.5225C11.5146%2024.2377%2011.4194%2023.7971%2011.5717%2023.4125C11.7242%2023.0279%2012.093%2022.7776%2012.5009%2022.7812L22.532%2022.8698L29.6221%207.5772C29.6255%207.56982%2029.6301%207.56281%2029.6337%207.55554C29.646%207.53052%2029.6601%207.50655%2029.6744%207.48265C29.6883%207.45956%2029.7016%207.43637%2029.717%207.41469C29.7315%207.39448%2029.7477%207.37571%2029.7636%207.35658C29.7812%207.33536%2029.7986%207.31408%2029.8178%207.29454C29.837%207.27498%2029.858%207.25737%2029.8789%207.23938C29.8977%207.22318%2029.9162%207.2068%2029.936%207.19211C29.9573%207.17634%2029.9802%207.16289%2030.0029%207.14877C30.0268%207.13392%2030.0506%207.11917%2030.0756%207.10642C30.0823%207.10297%2030.0891%207.09889%2030.0959%207.09559C30.1088%207.08939%2030.1226%207.08542%2030.1356%207.07983C30.165%207.06727%2030.1943%207.05502%2030.2248%207.04536C30.2463%207.03853%2030.268%207.03291%2030.2897%207.02763C30.3172%207.02094%2030.3449%207.01517%2030.3731%207.01088C30.3995%207.00686%2030.426%207.00483%2030.4525%207.003C30.4789%207.00118%2030.5053%206.99971%2030.532%207.00005ZM27.9729%2035.6598L40.875%2033.7087L33.1046%2025.6679L27.9729%2035.6598ZM25.9196%2035.2993L31.2287%2024.9647L15.0097%2024.8189L25.9196%2035.2993ZM34.6996%2024.4407L42.7355%2032.7563L50.1725%2019.5014L34.6996%2024.4407ZM24.75%2022.8206L31.7025%2022.9447L30.0203%2011.4498L24.75%2022.8206ZM33.6657%2022.6472L40.2829%2020.4716L31.9835%2011.1534L33.6657%2022.6472Z'%20fill='%23000667'/%3e%3c/svg%3e", i6 = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M64%2045.5746C64%2045.5297%2063.9776%2045.5072%2063.9326%2045.5072C63.9326%2045.4623%2063.9102%2045.4399%2063.8653%2045.4399H53.4905C53.4456%2045.4399%2053.4007%2045.4399%2053.3558%2045.4399C53.3558%2045.4399%2053.3333%2045.4399%2053.2884%2045.4399C53.1537%2045.4399%2052.9965%2045.4623%2052.8168%2045.5072C52.6821%2045.5072%2052.5249%2045.5297%2052.3453%2045.5746C52.1656%2045.5746%2051.986%2045.597%2051.8063%2045.642C51.6716%2045.642%2051.5368%2045.6869%2051.4021%2045.7767C50.8182%2045.9563%2050.2344%2046.1809%2049.6505%2046.4504C49.1116%2046.7199%2048.5502%2047.0342%2047.9663%2047.3935C47.4274%2047.663%2046.9558%2047.9325%2046.5516%2048.202C46.1474%2048.4265%2045.833%2048.6511%2045.6084%2048.8756C45.5186%2048.9206%2045.4288%2048.9879%2045.339%2049.0777C45.294%2049.1227%2045.2267%2049.19%2045.1368%2049.2799C45.047%2049.3248%2044.9797%2049.3472%2044.9347%2049.3472C44.8898%2049.3472%2044.8449%2049.3472%2044.8%2049.3472H18.0547L14.4842%2045.4399C14.4842%2045.4399%2014.4618%2045.4399%2014.4168%2045.4399C14.4168%2045.4399%2014.1249%2045.4399%2013.5411%2045.4399C13.0021%2045.4399%2012.1937%2045.4399%2011.1158%2045.4399C10.0379%2045.4399%209.00491%2045.4399%208.01684%2045.4399C7.02877%2045.4399%206.08561%2045.4399%205.18737%2045.4399C4.64842%2045.4399%204.15439%2045.4399%203.70526%2045.4399C3.30105%2045.4399%202.94175%2045.4399%202.62737%2045.4399C2.35789%2045.4399%202.13333%2045.4399%201.95368%2045.4399C1.81895%2045.4399%201.72912%2045.4399%201.68421%2045.4399H1.54947C1.19018%2045.4399%200.898246%2045.5072%200.673684%2045.642C0.449123%2045.7767%200.314386%2045.9563%200.269474%2046.1809C0.179649%2046.4055%200.112281%2046.5851%200.0673684%2046.7199C0.0224561%2046.8097%200%2046.8546%200%2046.8546L2.02105%2053.4567C2.02105%2053.5016%202.02105%2053.5465%202.02105%2053.5914C2.06597%2053.5914%202.08842%2053.5914%202.08842%2053.5914C2.13333%2053.5914%202.15579%2053.5914%202.15579%2053.5914H58.9474C58.9923%2053.5914%2059.0147%2053.5914%2059.0147%2053.5914C59.0147%2053.5465%2059.0147%2053.5016%2059.0147%2053.4567C59.0147%2053.4567%2059.0147%2053.4118%2059.0147%2053.322C59.0597%2053.2321%2059.1046%2053.0749%2059.1495%2052.8504C59.1944%2052.6707%2059.2393%2052.4911%2059.2842%2052.3114C59.374%2052.1318%2059.4863%2051.9746%2059.6211%2051.8399C59.8456%2051.5704%2060.0926%2051.2785%2060.3621%2050.9641C60.6765%2050.6497%2060.9909%2050.3128%2061.3053%2049.9535C61.6197%2049.5942%2061.934%2049.2125%2062.2484%2048.8083C62.6077%2048.3591%2062.9895%2047.8876%2063.3937%2047.3935C63.5733%2047.169%2063.7081%2046.9669%2063.7979%2046.7872C63.9326%2046.5627%2064%2046.3606%2064%2046.1809C64%2045.9563%2064%2045.7992%2064%2045.7093C64%2045.6195%2064%2045.5746%2064%2045.5746ZM32.4042%2048.2693H44.0589C44.1039%2048.2693%2044.1263%2048.2693%2044.1263%2048.2693C44.1712%2048.2693%2044.1937%2048.2693%2044.1937%2048.2693C44.1937%2048.2244%2044.1937%2048.202%2044.1937%2048.202C44.1937%2048.157%2044.1937%2048.1346%2044.1937%2048.1346V45.5746C44.1937%2045.5297%2044.1712%2045.5072%2044.1263%2045.5072C44.1263%2045.4623%2044.1039%2045.4399%2044.0589%2045.4399H32.4042C32.3593%2045.4399%2032.3144%2045.4623%2032.2695%2045.5072C32.2695%2045.5072%2032.2695%2045.5297%2032.2695%2045.5746V48.1346C32.2246%2048.1346%2032.2021%2048.157%2032.2021%2048.202C32.2021%2048.202%2032.2021%2048.2244%2032.2021%2048.2693C32.2021%2048.2693%2032.2246%2048.2693%2032.2695%2048.2693C32.3144%2048.2693%2032.3593%2048.2693%2032.4042%2048.2693ZM32.4042%2044.1599H44.0589C44.0589%2044.1149%2044.0589%2044.0925%2044.0589%2044.0925C44.0589%2044.0476%2044.0589%2044.0027%2044.0589%2043.9577V41.5999C44.0589%2041.5549%2044.0589%2041.5325%2044.0589%2041.5325C44.0589%2041.4876%2044.0589%2041.4651%2044.0589%2041.4651C44.0589%2041.4202%2044.0365%2041.3977%2043.9916%2041.3977C43.9916%2041.3977%2043.9691%2041.3977%2043.9242%2041.3977H32.4042C32.3593%2041.3977%2032.3144%2041.3977%2032.2695%2041.3977C32.2695%2041.3977%2032.2695%2041.4202%2032.2695%2041.4651V43.9577C32.2246%2044.0027%2032.2021%2044.0476%2032.2021%2044.0925C32.2021%2044.0925%2032.2021%2044.1149%2032.2021%2044.1599C32.2021%2044.1599%2032.2246%2044.1599%2032.2695%2044.1599C32.3144%2044.1599%2032.3593%2044.1599%2032.4042%2044.1599ZM19.1326%2048.2693H30.7874C30.8323%2048.2693%2030.8547%2048.2693%2030.8547%2048.2693C30.8547%2048.2244%2030.8547%2048.202%2030.8547%2048.202C30.8547%2048.157%2030.8547%2048.1346%2030.8547%2048.1346V45.5746C30.8547%2045.5297%2030.8547%2045.5072%2030.8547%2045.5072C30.8547%2045.4623%2030.8323%2045.4399%2030.7874%2045.4399H19.1326C19.0877%2045.4399%2019.0428%2045.4623%2018.9979%2045.5072C18.9979%2045.5072%2018.9979%2045.5297%2018.9979%2045.5746V48.1346C18.953%2048.1346%2018.9081%2048.157%2018.8632%2048.202C18.8632%2048.202%2018.8632%2048.2244%2018.8632%2048.2693C18.9081%2048.2693%2018.953%2048.2693%2018.9979%2048.2693C19.0428%2048.2693%2019.0877%2048.2693%2019.1326%2048.2693ZM19.1326%2044.1599H30.7874C30.8323%2044.1599%2030.8547%2044.1599%2030.8547%2044.1599C30.8547%2044.1149%2030.8547%2044.0925%2030.8547%2044.0925V41.5999C30.8547%2041.5549%2030.8547%2041.5325%2030.8547%2041.5325C30.8547%2041.4876%2030.8323%2041.4651%2030.7874%2041.4651H19.1326C19.0877%2041.4651%2019.0428%2041.4876%2018.9979%2041.5325C18.9979%2041.5325%2018.9979%2041.5549%2018.9979%2041.5999V44.0925C18.953%2044.0925%2018.9081%2044.0925%2018.8632%2044.0925C18.8632%2044.0925%2018.8632%2044.1149%2018.8632%2044.1599C18.9081%2044.1599%2018.953%2044.1599%2018.9979%2044.1599C19.0428%2044.1599%2019.0877%2044.1599%2019.1326%2044.1599ZM2.15579%2044.2946H14.2821C14.327%2044.2946%2014.3495%2044.2946%2014.3495%2044.2946C14.3944%2044.2946%2014.4168%2044.2946%2014.4168%2044.2946C14.4168%2044.2497%2014.4168%2044.2272%2014.4168%2044.2272C14.4168%2044.1823%2014.4168%2044.1599%2014.4168%2044.1599L13.0021%2039.7809L13.4737%2037.6925C13.4737%2037.6476%2013.4737%2037.6251%2013.4737%2037.6251C13.4737%2037.5802%2013.4737%2037.5577%2013.4737%2037.5577H4.98526C4.98526%2037.5577%204.96281%2037.5577%204.9179%2037.5577C4.9179%2037.5577%204.89544%2037.5577%204.85053%2037.5577C4.85053%2037.5577%204.85053%2037.5802%204.85053%2037.6251C4.85053%2037.6251%204.85053%2037.6476%204.85053%2037.6925L2.02105%2044.1599C2.02105%2044.1599%202.02105%2044.1823%202.02105%2044.2272C2.02105%2044.2272%202.02105%2044.2497%202.02105%2044.2946C2.06597%2044.2946%202.11088%2044.2946%202.15579%2044.2946ZM11.3179%2040.3872V41.6672H5.32211V40.3872H11.3179ZM31.9326%2012.4293C28.5642%2012.4293%2025.3081%2012.8784%2022.1642%2013.7767C19.0653%2014.63%2016.146%2015.8427%2013.4063%2017.4146L11.9916%2014.922C14.9558%2013.2153%2018.0996%2011.9128%2021.4232%2011.0146C24.7916%2010.0714%2028.2947%209.59985%2031.9326%209.59985C35.5705%209.59985%2039.0737%2010.0714%2042.4421%2011.0146C45.8554%2011.9577%2049.0442%2013.2827%2052.0084%2014.9893L50.5937%2017.482C47.854%2015.91%2044.9123%2014.6749%2041.7684%2013.7767C38.6246%2012.8784%2035.346%2012.4293%2031.9326%2012.4293ZM22.6358%2033.5156C24.0281%2032.7072%2025.5102%2032.1009%2027.0821%2031.6967C28.654%2031.2476%2030.2709%2031.023%2031.9326%2031.023C33.6393%2031.023%2035.2786%2031.2476%2036.8505%2031.6967C38.4674%2032.1458%2039.9719%2032.7746%2041.3642%2033.583L42.7789%2031.0904C41.1621%2030.1472%2039.433%2029.4286%2037.5916%2028.9346C35.7951%2028.3956%2033.9088%2028.1262%2031.9326%2028.1262C30.0014%2028.1262%2028.1151%2028.3956%2026.2737%2028.9346C24.4772%2029.4286%2022.793%2030.1248%2021.2211%2031.023L22.6358%2033.5156ZM18.0547%2025.4988C20.1207%2024.2862%2022.3214%2023.3655%2024.6568%2022.7367C26.9923%2022.063%2029.4175%2021.7262%2031.9326%2021.7262C34.4926%2021.7262%2036.9404%2022.063%2039.2758%2022.7367C41.6561%2023.4104%2043.8793%2024.3535%2045.9453%2025.5662L47.36%2023.0735C45.1144%2021.7262%2042.6891%2020.6932%2040.0842%2019.9746C37.4793%2019.256%2034.7621%2018.8967%2031.9326%2018.8967C29.1481%2018.8967%2026.4533%2019.256%2023.8484%2019.9746C21.2884%2020.6932%2018.8856%2021.7037%2016.64%2023.0062L18.0547%2025.4988Z'%20fill='%23000667'/%3e%3c/svg%3e", o6 = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M61.1019%2029.1019C60.6189%2029.1019%2059.8541%2029.3031%2058.8075%2029.7057C57.8415%2030.1082%2056.9157%2030.5509%2056.0302%2031.034H52.2868C52.1258%2028.5384%2051.5623%2026.2038%2050.5962%2024.0302C49.7107%2021.8566%2048.5031%2019.9245%2046.9736%2018.234L49.5094%2015.6981C50.395%2015.3761%2051.361%2015.0138%2052.4075%2014.6113C53.5346%2014.2088%2054.2591%2013.8063%2054.5811%2013.4038C55.1447%2012.8403%2055.4264%2012.156%2055.4264%2011.3509C55.4264%2010.5459%2055.1447%209.86164%2054.5811%209.29811C54.0176%208.73459%2053.3333%208.45283%2052.5283%208.45283C51.7233%208.45283%2051.039%208.73459%2050.4755%209.29811C50.1535%209.70063%2049.7912%2010.4252%2049.3887%2011.4717C48.9862%2012.4377%2048.6239%2013.3635%2048.3019%2014.2491L45.6453%2016.9057C43.9547%2015.3761%2042.0226%2014.1686%2039.8491%2013.283C37.6755%2012.317%2035.3409%2011.7937%2032.8453%2011.7132V8.09057C33.2478%207.28553%2033.6906%206.35975%2034.1736%205.31321C34.6566%204.18616%2034.8981%203.38113%2034.8981%202.89811C34.8981%202.09308%2034.6164%201.40881%2034.0528%200.845283C33.4893%200.281761%2032.805%200%2032%200C31.195%200%2030.5107%200.281761%2029.9472%200.845283C29.3836%201.40881%2029.1019%202.09308%2029.1019%202.89811C29.1019%203.38113%2029.3031%204.14591%2029.7057%205.19245C30.1887%206.15849%2030.6314%207.04403%2031.034%207.84906V11.7132C28.5384%2011.8742%2026.2038%2012.4377%2024.0302%2013.4038C21.8566%2014.2893%2019.9245%2015.4969%2018.234%2017.0264L15.6981%2014.4906C15.4566%2013.605%2015.0943%2012.639%2014.6113%2011.5925C14.2088%2010.4654%2013.8465%209.70063%2013.5245%209.29811C12.961%208.73459%2012.2767%208.45283%2011.4717%208.45283C10.6667%208.45283%209.98239%208.73459%209.41887%209.29811C8.85535%209.86164%208.57358%2010.5459%208.57358%2011.3509C8.57358%2012.156%208.85535%2012.8403%209.41887%2013.4038C9.74088%2013.8063%2010.3849%2014.2088%2011.3509%2014.6113C12.3975%2015.0138%2013.3635%2015.3358%2014.2491%2015.5774L17.0264%2018.3547C15.4969%2020.0453%2014.2491%2021.9774%2013.283%2024.1509C12.3975%2026.244%2011.8742%2028.5384%2011.7132%2031.034H7.96981C7.08428%2030.5509%206.11824%2030.1082%205.0717%2029.7057C4.10566%2029.3031%203.38113%2029.1019%202.89811%2029.1019C2.09308%2029.1019%201.40881%2029.3836%200.845283%2029.9472C0.281761%2030.5107%200%2031.195%200%2032C0%2032.805%200.281761%2033.4893%200.845283%2034.0528C1.40881%2034.6164%202.09308%2034.8981%202.89811%2034.8981C3.38113%2034.8981%204.14591%2034.6566%205.19245%2034.1736C6.3195%2033.6906%207.32579%2033.2478%208.21132%2032.8453H11.7132C11.8742%2035.2604%2012.3975%2037.5547%2013.283%2039.7283C14.2491%2041.9019%2015.4969%2043.8742%2017.0264%2045.6453L14.2491%2048.3019C13.3635%2048.6239%2012.3975%2048.9862%2011.3509%2049.3887C10.3849%2049.7912%209.74088%2050.1535%209.41887%2050.4755C8.85535%2051.039%208.57358%2051.7233%208.57358%2052.5283C8.57358%2053.3333%208.85535%2054.0176%209.41887%2054.5811C9.98239%2055.1447%2010.6667%2055.4264%2011.4717%2055.4264C12.2767%2055.4264%2012.961%2055.1447%2013.5245%2054.5811C13.8465%2054.2591%2014.2088%2053.5346%2014.6113%2052.4075C15.0943%2051.2805%2015.4566%2050.2742%2015.6981%2049.3887L18.234%2046.8528C19.9245%2048.4629%2021.8566%2049.7509%2024.0302%2050.717C26.2038%2051.6025%2028.5384%2052.0855%2031.034%2052.166V56.0302C30.6314%2056.8352%2030.1887%2057.761%2029.7057%2058.8075C29.3031%2059.8541%2029.1019%2060.6189%2029.1019%2061.1019C29.1019%2061.9069%2029.3836%2062.5912%2029.9472%2063.1547C30.5107%2063.7182%2031.195%2064%2032%2064C32.805%2064%2033.4893%2063.7182%2034.0528%2063.1547C34.6164%2062.5912%2034.8981%2061.9069%2034.8981%2061.1019C34.8981%2060.5384%2034.6566%2059.7333%2034.1736%2058.6868C33.6906%2057.6403%2033.2478%2056.6742%2032.8453%2055.7887V52.166C35.3409%2052.0855%2037.6755%2051.6025%2039.8491%2050.717C42.0226%2049.7509%2043.9547%2048.5031%2045.6453%2046.9736L48.3019%2049.6302C48.6239%2050.5157%2048.9862%2051.4818%2049.3887%2052.5283C49.7912%2053.5748%2050.1535%2054.2591%2050.4755%2054.5811C51.039%2055.1447%2051.7233%2055.4264%2052.5283%2055.4264C53.3333%2055.4264%2054.0176%2055.1447%2054.5811%2054.5811C55.1447%2054.0176%2055.4264%2053.3333%2055.4264%2052.5283C55.4264%2051.7233%2055.1447%2051.039%2054.5811%2050.4755C54.2591%2050.1535%2053.5346%2049.7912%2052.4075%2049.3887C51.361%2048.9057%2050.395%2048.5031%2049.5094%2048.1811L46.9736%2045.6453C48.5031%2043.9547%2049.7107%2042.0226%2050.5962%2039.8491C51.5623%2037.595%2052.1258%2035.2604%2052.2868%2032.8453H55.7887C56.6742%2033.2478%2057.6403%2033.6906%2058.6868%2034.1736C59.8138%2034.6566%2060.6189%2034.8981%2061.1019%2034.8981C61.9069%2034.8981%2062.5912%2034.6164%2063.1547%2034.0528C63.7182%2033.4893%2064%2032.805%2064%2032C64%2031.195%2063.7182%2030.5107%2063.1547%2029.9472C62.5912%2029.3836%2061.9069%2029.1019%2061.1019%2029.1019ZM19.683%2021.0113L26.566%2027.8943C26.244%2028.3774%2025.9623%2028.9006%2025.7208%2029.4642C25.5597%2029.9472%2025.439%2030.4704%2025.3585%2031.034H15.5774C15.7384%2029.1019%2016.1811%2027.2906%2016.9057%2025.6C17.6302%2023.9094%2018.556%2022.3799%2019.683%2021.0113ZM15.5774%2032.8453H25.3585C25.439%2033.4088%2025.5597%2033.9723%2025.7208%2034.5359C25.9623%2035.0189%2026.244%2035.5019%2026.566%2035.9849L19.683%2042.8679C18.556%2041.4994%2017.6302%2039.9698%2016.9057%2038.2792C16.1811%2036.5887%2015.7384%2034.7774%2015.5774%2032.8453ZM31.034%2048.3019C29.1019%2048.2214%2027.2906%2047.8189%2025.6%2047.0943C23.9094%2046.3698%2022.3799%2045.4038%2021.0113%2044.1962L27.8943%2037.3132C28.2969%2037.6352%2028.7799%2037.917%2029.3434%2038.1585C29.9069%2038.4%2030.4704%2038.561%2031.034%2038.6415V48.3019ZM31.034%2025.2377C30.4704%2025.3987%2029.9069%2025.6%2029.3434%2025.8415C28.7799%2026.0025%2028.2969%2026.2843%2027.8943%2026.6868L21.0113%2019.8038C22.3799%2018.5962%2023.9094%2017.6302%2025.6%2016.9057C27.2906%2016.1006%2029.1019%2015.6579%2031.034%2015.5774V25.2377ZM48.4226%2031.034H38.6415C38.561%2030.3899%2038.4%2029.8264%2038.1585%2029.3434C37.917%2028.7799%2037.6352%2028.2566%2037.3132%2027.7736L44.1962%2021.0113C45.4038%2022.2994%2046.3698%2023.8289%2047.0943%2025.6C47.8189%2027.2906%2048.2616%2029.1019%2048.4226%2031.034ZM42.8679%2019.683L35.9849%2026.566C35.5824%2026.244%2035.0994%2025.9623%2034.5359%2025.7208C33.9723%2025.4792%2033.4088%2025.3182%2032.8453%2025.2377V15.5774C34.7774%2015.6579%2036.5887%2016.0604%2038.2792%2016.7849C39.9698%2017.5094%2041.4994%2018.4755%2042.8679%2019.683ZM32.8453%2048.3019V38.6415C33.4088%2038.561%2033.9723%2038.4403%2034.5359%2038.2792C35.0994%2038.0377%2035.5824%2037.7157%2035.9849%2037.3132L42.8679%2044.1962C41.4994%2045.4038%2039.9698%2046.3698%2038.2792%2047.0943C36.5887%2047.8189%2034.7774%2048.2214%2032.8453%2048.3019ZM44.1962%2042.9887L37.3132%2036.1057C37.7157%2035.6226%2037.9975%2035.0994%2038.1585%2034.5359C38.4%2033.9723%2038.561%2033.4088%2038.6415%2032.8453H48.4226C48.2616%2034.7774%2047.8189%2036.6289%2047.0943%2038.4C46.3698%2040.0906%2045.4038%2041.6201%2044.1962%2042.9887Z'%20fill='%23000667'/%3e%3c/svg%3e", l6 = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M61.25%2023.925C60.25%2023.5084%2059.1667%2022.925%2058%2022.175C56.8333%2021.3417%2056%2020.5084%2055.5%2019.675C54.8333%2018.675%2053.9583%2017.8417%2052.875%2017.175C51.7917%2016.5084%2050.7917%2016.175%2049.875%2016.175C48.4583%2016.175%2047.375%2016.4667%2046.625%2017.05C45.875%2017.6334%2045.2917%2018.175%2044.875%2018.675C44.7917%2018.7584%2044.75%2018.8834%2044.75%2019.05C44.75%2019.1334%2044.7917%2019.2167%2044.875%2019.3C44.9583%2019.3834%2045.0417%2019.4667%2045.125%2019.55C45.2917%2019.55%2045.4167%2019.5084%2045.5%2019.425C45.75%2019.3417%2045.9583%2019.3%2046.125%2019.3C46.2917%2019.2167%2046.5%2019.175%2046.75%2019.175C47.1667%2019.175%2047.5%2019.3%2047.75%2019.55C48%2019.8%2048.2083%2020.0084%2048.375%2020.175C48.7083%2020.675%2048.875%2021.2167%2048.875%2021.8C48.875%2022.3834%2048.7083%2022.925%2048.375%2023.425C48.2917%2023.5917%2048.1667%2023.7584%2048%2023.925C47.8333%2024.0084%2047.6667%2024.0917%2047.5%2024.175C46.75%2024.5917%2045.7083%2024.8%2044.375%2024.8C43.125%2024.8%2041.9583%2024.5917%2040.875%2024.175C40.875%2024.175%2040.8333%2024.175%2040.75%2024.175C39.4167%2023.5917%2038.25%2022.925%2037.25%2022.175C36.3333%2021.425%2035.5417%2020.5917%2034.875%2019.675C34.0417%2018.5084%2033.125%2017.6334%2032.125%2017.05C31.2083%2016.4667%2030.25%2016.175%2029.25%2016.175C27.9167%2016.175%2026.875%2016.425%2026.125%2016.925C25.375%2017.3417%2024.875%2017.6334%2024.625%2017.8C24.4583%2017.9667%2024.3333%2018.1334%2024.25%2018.3C24.1667%2018.3834%2024.0833%2018.4667%2024%2018.55C23.9167%2018.6334%2023.9167%2018.7584%2024%2018.925C24.0833%2019.0084%2024.1667%2019.0917%2024.25%2019.175C24.25%2019.2584%2024.3333%2019.3%2024.5%2019.3C24.6667%2019.3%2024.75%2019.2584%2024.75%2019.175C25%2019.0084%2025.2083%2018.925%2025.375%2018.925C25.5417%2018.8417%2025.75%2018.8%2026%2018.8C26.5%2018.8%2026.875%2018.9667%2027.125%2019.3C27.4583%2019.55%2027.6667%2019.8%2027.75%2020.05C28%2020.6334%2028.125%2021.2167%2028.125%2021.8C28.125%2022.3834%2028%2022.925%2027.75%2023.425C27.6667%2023.5917%2027.5417%2023.7584%2027.375%2023.925C27.2083%2024.0084%2027.0417%2024.0917%2026.875%2024.175C26.625%2024.425%2026.2917%2024.5917%2025.875%2024.675C25.4583%2024.7584%2025%2024.8%2024.5%2024.8C23.9167%2024.8%2023.2917%2024.7584%2022.625%2024.675C22.0417%2024.5084%2021.5%2024.3417%2021%2024.175C21%2024.175%2020.9583%2024.175%2020.875%2024.175C20.875%2024.175%2020.875%2024.1334%2020.875%2024.05C20.7917%2024.05%2020.7083%2024.05%2020.625%2024.05C20.625%2023.9667%2020.5833%2023.925%2020.5%2023.925C19.25%2023.5084%2018%2022.8834%2016.75%2022.05C15.5%2021.1334%2014.5833%2020.2167%2014%2019.3C13.3333%2018.4667%2012.4583%2017.7584%2011.375%2017.175C10.2917%2016.5084%209.29167%2016.175%208.375%2016.175C6.95833%2016.175%205.79167%2016.5084%204.875%2017.175C3.95833%2017.7584%203.41667%2018.2584%203.25%2018.675C3.25%2018.7584%203.25%2018.8417%203.25%2018.925C3.25%2019.0084%203.29167%2019.0917%203.375%2019.175C3.45833%2019.2584%203.54167%2019.3%203.625%2019.3C3.70833%2019.3%203.83333%2019.3%204%2019.3C4.83333%2018.9667%205.58333%2018.8834%206.25%2019.05C7%2019.2167%207.5%2019.5917%207.75%2020.175C8%2020.675%208.08333%2021.2167%208%2021.8C7.91667%2022.3834%207.75%2022.925%207.5%2023.425C7.33333%2023.5917%207.16667%2023.7584%207%2023.925C6.83333%2024.0084%206.66667%2024.1334%206.5%2024.3C5.91667%2024.7167%205.20833%2024.9667%204.375%2025.05C3.54167%2025.1334%202.54167%2025.05%201.375%2024.8C1.29167%2024.8%201.20833%2024.8%201.125%2024.8C1.04167%2024.8%200.958333%2024.8417%200.875%2024.925C0.875%2024.925%200.833333%2024.9667%200.75%2025.05C0.75%2025.1334%200.75%2025.2167%200.75%2025.3V30.05C0.75%2030.2167%200.791667%2030.3417%200.875%2030.425C0.958333%2030.5084%201.08333%2030.55%201.25%2030.55C1.75%2030.7167%202.25%2030.925%202.75%2031.175C3.33333%2031.3417%203.95833%2031.5917%204.625%2031.925C5.625%2032.425%206.58333%2032.8834%207.5%2033.3C8.5%2033.6334%209.54167%2033.8%2010.625%2033.8C11.7083%2033.8%2012.75%2033.6334%2013.75%2033.3C14.75%2032.8834%2015.75%2032.425%2016.75%2031.925C17.5%2031.5084%2018.25%2031.175%2019%2030.925C19.75%2030.675%2020.4167%2030.55%2021%2030.55C21.5833%2030.55%2022.25%2030.7167%2023%2031.05C23.8333%2031.3834%2024.5833%2031.7167%2025.25%2032.05C26.25%2032.55%2027.2083%2033.0084%2028.125%2033.425C29.125%2033.7584%2030.2083%2033.925%2031.375%2033.925C31.875%2033.925%2032.375%2033.8834%2032.875%2033.8C33.375%2033.7167%2033.9167%2033.55%2034.5%2033.3C34.9167%2033.1334%2035.2917%2032.9667%2035.625%2032.8C36.0417%2032.6334%2036.5%2032.425%2037%2032.175L37.625%2031.925C38.375%2031.5084%2039.0833%2031.175%2039.75%2030.925C40.5%2030.675%2041.2083%2030.55%2041.875%2030.55C42.5417%2030.55%2043.2083%2030.7167%2043.875%2031.05C44.625%2031.3%2045.375%2031.5917%2046.125%2031.925C47.125%2032.425%2048.0833%2032.8834%2049%2033.3C50%2033.6334%2051.0417%2033.8%2052.125%2033.8C53.2083%2033.8%2054.25%2033.6334%2055.25%2033.3C56.25%2032.8834%2057.25%2032.425%2058.25%2031.925C58.6667%2031.675%2059.125%2031.4667%2059.625%2031.3C60.2083%2031.05%2060.75%2030.8417%2061.25%2030.675C61.3333%2030.675%2061.4167%2030.6334%2061.5%2030.55C61.6667%2030.4667%2061.75%2030.3834%2061.75%2030.3V24.3C61.6667%2024.2167%2061.5833%2024.1334%2061.5%2024.05C61.4167%2023.9667%2061.3333%2023.925%2061.25%2023.925ZM60.875%2045.05C60.125%2045.1334%2059.4167%2045.3417%2058.75%2045.675C58.1667%2045.925%2057.4583%2046.2584%2056.625%2046.675C55.7917%2047.0917%2055%2047.425%2054.25%2047.675C53.5833%2047.925%2052.9583%2048.05%2052.375%2048.05C51.7083%2048.05%2051%2047.925%2050.25%2047.675C49.5833%2047.3417%2048.8333%2047.0084%2048%2046.675H47.875C46.875%2046.2584%2045.875%2045.8417%2044.875%2045.425C43.875%2045.0084%2042.875%2044.8%2041.875%2044.8C40.7083%2044.8%2039.625%2045.0084%2038.625%2045.425C37.625%2045.8417%2036.625%2046.3%2035.625%2046.8C34.875%2047.2167%2034.125%2047.55%2033.375%2047.8C32.625%2048.05%2031.9583%2048.175%2031.375%2048.175C30.7083%2048.175%2030%2048.05%2029.25%2047.8C28.5833%2047.4667%2027.875%2047.1334%2027.125%2046.8L26.875%2047.3V46.675C25.9583%2046.2584%2025%2045.8417%2024%2045.425C23%2045.0084%2021.9583%2044.8%2020.875%2044.8C19.7083%2044.8%2018.625%2045.0084%2017.625%2045.425C16.625%2045.8417%2015.625%2046.2584%2014.625%2046.675L14.5%2046.55C13.75%2046.8834%2013%2047.2167%2012.25%2047.55C11.5%2047.8834%2010.8333%2048.05%2010.25%2048.05C9.58333%2048.05%208.875%2047.8834%208.125%2047.55C7.375%2047.2167%206.58333%2046.8834%205.75%2046.55C5.08333%2046.2167%204.375%2045.8834%203.625%2045.55C2.875%2045.2167%202.125%2044.9667%201.375%2044.8C1.29167%2044.8%201.20833%2044.8417%201.125%2044.925C1.04167%2044.925%200.958333%2044.9667%200.875%2045.05C0.875%2045.05%200.833333%2045.0917%200.75%2045.175C0.75%2045.175%200.75%2045.2167%200.75%2045.3V48.55C0.75%2048.6334%200.791667%2048.7167%200.875%2048.8C0.958333%2048.8834%201.04167%2048.925%201.125%2048.925C1.54167%2049.0917%201.95833%2049.3%202.375%2049.55C2.875%2049.7167%203.41667%2049.925%204%2050.175C5%2050.5917%206%2051.0084%207%2051.425C8%2051.8417%209%2052.05%2010%2052.05C11.1667%2052.05%2012.25%2051.8417%2013.25%2051.425C14.25%2051.0084%2015.25%2050.5917%2016.25%2050.175C17%2049.8417%2017.75%2049.5084%2018.5%2049.175C19.25%2048.8417%2020%2048.675%2020.75%2048.675C21.4167%2048.675%2022.125%2048.8417%2022.875%2049.175C23.625%2049.425%2024.375%2049.7584%2025.125%2050.175C26.125%2050.5917%2027.125%2051.0084%2028.125%2051.425C29.125%2051.8417%2030.2083%2052.05%2031.375%2052.05C32.4583%2052.05%2033.5%2051.8417%2034.5%2051.425C35.5833%2051.0084%2036.625%2050.5917%2037.625%2050.175C38.2917%2049.8417%2039%2049.5084%2039.75%2049.175C40.5833%2048.8417%2041.3333%2048.675%2042%2048.675C42.6667%2048.675%2043.375%2048.8417%2044.125%2049.175C44.875%2049.425%2045.625%2049.7584%2046.375%2050.175C47.375%2050.5917%2048.375%2051.0084%2049.375%2051.425C50.375%2051.8417%2051.4583%2052.05%2052.625%2052.05C53.7917%2052.05%2054.875%2051.8417%2055.875%2051.425C56.875%2051.0084%2057.875%2050.5917%2058.875%2050.175C59.2917%2049.925%2059.7083%2049.7167%2060.125%2049.55C60.625%2049.3834%2061.0833%2049.2167%2061.5%2049.05C61.5%2049.05%2061.5417%2049.0084%2061.625%2048.925C61.7083%2048.8417%2061.75%2048.7584%2061.75%2048.675V45.3C61.75%2045.2167%2061.75%2045.1334%2061.75%2045.05C61.75%2044.9667%2061.7083%2044.8834%2061.625%2044.8C61.4583%2044.8834%2061.2917%2044.925%2061.125%2044.925C61.0417%2044.925%2060.9583%2044.9667%2060.875%2045.05ZM60.875%2035.3C60.125%2035.4667%2059.4167%2035.7167%2058.75%2036.05C58.0833%2036.3%2057.4167%2036.5917%2056.75%2036.925H56.625C55.7917%2037.3417%2055%2037.675%2054.25%2037.925C53.5833%2038.175%2052.9583%2038.3%2052.375%2038.3C51.7083%2038.3%2051%2038.175%2050.25%2037.925C49.5833%2037.5917%2048.8333%2037.2584%2048%2036.925L47.875%2036.8C46.9583%2036.3%2046%2035.8834%2045%2035.55C44%2035.1334%2042.9583%2034.925%2041.875%2034.925C40.7917%2034.925%2039.7083%2035.1334%2038.625%2035.55C37.625%2035.8834%2036.625%2036.3%2035.625%2036.8H35.5C34.6667%2037.2167%2033.875%2037.55%2033.125%2037.8C32.4583%2038.05%2031.8333%2038.175%2031.25%2038.175C30.5833%2038.175%2029.875%2038.05%2029.125%2037.8C28.4583%2037.4667%2027.7083%2037.1334%2026.875%2036.8L26.625%2036.675C25.7083%2036.175%2024.75%2035.7584%2023.75%2035.425C22.75%2035.0084%2021.6667%2034.8%2020.5%2034.8C19.4167%2034.8%2018.3333%2035.0084%2017.25%2035.425C16.25%2035.7584%2015.2917%2036.175%2014.375%2036.675H14.125C13.375%2037.0084%2012.625%2037.3417%2011.875%2037.675C11.2083%2037.925%2010.5417%2038.05%209.875%2038.05C9.29167%2038.05%208.625%2037.8834%207.875%2037.55C7.125%2037.2167%206.375%2036.925%205.625%2036.675L5.375%2036.55C4.70833%2036.2167%204%2035.8834%203.25%2035.55C2.58333%2035.2167%201.875%2034.9667%201.125%2034.8C1.04167%2034.8%200.958333%2034.8%200.875%2034.8C0.791667%2034.8%200.708333%2034.8417%200.625%2034.925C0.541667%2035.0084%200.541667%2035.175%200.625%2035.425C0.708333%2035.5917%200.75%2035.675%200.75%2035.675V39.05C0.75%2039.2167%200.791667%2039.3417%200.875%2039.425C0.958333%2039.5084%201.04167%2039.55%201.125%2039.55C1.54167%2039.7167%201.95833%2039.925%202.375%2040.175C2.875%2040.3417%203.41667%2040.55%204%2040.8C5%2041.2167%206%2041.6334%207%2042.05C8%2042.3834%209%2042.55%2010%2042.55C11.1667%2042.55%2012.25%2042.3834%2013.25%2042.05C14.25%2041.6334%2015.25%2041.2167%2016.25%2040.8C17%2040.4667%2017.75%2040.1334%2018.5%2039.8C19.25%2039.3834%2020%2039.175%2020.75%2039.175C21.4167%2039.175%2022.125%2039.3417%2022.875%2039.675C23.625%2040.0084%2024.375%2040.3834%2025.125%2040.8C26.125%2041.2167%2027.125%2041.6334%2028.125%2042.05C29.125%2042.3834%2030.2083%2042.55%2031.375%2042.55C32.375%2042.55%2033.4167%2042.3834%2034.5%2042.05C35.5833%2041.6334%2036.625%2041.2167%2037.625%2040.8C38.2917%2040.4667%2039%2040.1334%2039.75%2039.8C40.5833%2039.3834%2041.3333%2039.175%2042%2039.175C42.6667%2039.175%2043.375%2039.3417%2044.125%2039.675C44.875%2040.0084%2045.625%2040.3834%2046.375%2040.8C47.375%2041.2167%2048.375%2041.6334%2049.375%2042.05C50.375%2042.3834%2051.4583%2042.55%2052.625%2042.55C53.7917%2042.55%2054.875%2042.3834%2055.875%2042.05C56.875%2041.6334%2057.875%2041.2167%2058.875%2040.8C59.2917%2040.55%2059.7083%2040.3417%2060.125%2040.175C60.5417%2040.0084%2061%2039.8417%2061.5%2039.675C61.5%2039.675%2061.5417%2039.6334%2061.625%2039.55C61.7083%2039.3834%2061.75%2039.2584%2061.75%2039.175V35.925C61.75%2035.8417%2061.75%2035.7584%2061.75%2035.675C61.75%2035.5917%2061.7083%2035.5084%2061.625%2035.425C61.4583%2035.3417%2061.2917%2035.3%2061.125%2035.3C61.0417%2035.3%2060.9583%2035.3%2060.875%2035.3Z'%20fill='%23000667'/%3e%3c/svg%3e", c6 = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M62.5%2049.0499C61.0833%2049.0499%2059.9583%2049.2166%2059.125%2049.5499C58.2917%2049.8833%2057.5417%2050.2583%2056.875%2050.6749C56.2917%2051.0083%2055.6667%2051.3416%2055%2051.6749C54.3333%2051.9249%2053.4167%2052.0499%2052.25%2052.0499C51.0833%2052.0499%2050.1667%2051.9249%2049.5%2051.6749C48.9167%2051.3416%2048.2917%2051.0083%2047.625%2050.6749C47.5417%2050.5916%2047.4167%2050.5499%2047.25%2050.5499C47.0833%2050.4666%2046.9583%2050.3833%2046.875%2050.2999V42.7999L43.875%2040.0499C44.0417%2040.0499%2044.1667%2040.0083%2044.25%2039.9249C44.3333%2039.7583%2044.4167%2039.5916%2044.5%2039.4249C44.75%2039.0083%2044.875%2038.5916%2044.875%2038.1749C44.875%2037.7583%2044.75%2037.3416%2044.5%2036.9249C44.5%2036.9249%2044.375%2036.7999%2044.125%2036.5499C43.875%2036.2166%2043.4167%2035.7166%2042.75%2035.0499L42.875%2032.6749C42.9583%2032.4249%2043.0417%2032.1749%2043.125%2031.9249C43.2083%2031.6749%2043.2917%2031.4666%2043.375%2031.2999C43.875%2031.2999%2044.4583%2031.3416%2045.125%2031.4249C45.875%2031.4249%2046.4583%2031.4249%2046.875%2031.4249C47.4583%2031.8416%2048.1667%2032.2999%2049%2032.7999C49.8333%2033.2999%2050.4167%2033.5916%2050.75%2033.6749C51%2033.7583%2051.2083%2033.8416%2051.375%2033.9249C51.625%2034.0083%2051.8333%2034.0499%2052%2034.0499C52.5833%2034.0499%2053.25%2033.8833%2054%2033.5499C54.75%2033.1333%2055.2917%2032.5916%2055.625%2031.9249C55.875%2031.5083%2055.9167%2031.0083%2055.75%2030.4249C55.5833%2029.7583%2055.0417%2028.8416%2054.125%2027.6749C54.125%2027.3416%2054.0833%2026.9666%2054%2026.5499C53.9167%2026.1333%2053.8333%2025.7999%2053.75%2025.5499C53.6667%2025.2999%2053.5%2025.0083%2053.25%2024.6749C53.0833%2024.3416%2052.9167%2024.0083%2052.75%2023.6749V23.4249C52.75%2023.0916%2052.7083%2022.7583%2052.625%2022.4249C52.625%2022.0083%2052.5%2021.5916%2052.25%2021.1749C52.0833%2020.8416%2051.7917%2020.5916%2051.375%2020.4249C51.0417%2020.2583%2050.6667%2020.1333%2050.25%2020.0499C50.1667%2020.0499%2050.0833%2020.0499%2050%2020.0499C50%2020.0499%2049.9583%2020.0499%2049.875%2020.0499C49.5417%2020.0499%2049.25%2020.0916%2049%2020.1749C48.8333%2020.1749%2048.6667%2020.2583%2048.5%2020.4249L46.5%2019.9249C45.75%2019.5083%2044.2083%2018.6333%2041.875%2017.2999C39.5417%2015.9666%2037.7083%2015.1333%2036.375%2014.7999C35.125%2014.4666%2033.2917%2014.2166%2030.875%2014.0499C28.5417%2013.8833%2026.4583%2013.7999%2024.625%2013.7999C20.9583%2013.8833%2018.4167%2014.4666%2017%2015.5499C15.6667%2016.5499%2014.7083%2017.5083%2014.125%2018.4249C13.375%2019.5916%2012.9167%2021.2583%2012.75%2023.4249C12.6667%2025.5083%2012.9583%2027.3416%2013.625%2028.9249C13.7917%2029.5083%2014.25%2030.4249%2015%2031.6749C15.75%2032.9249%2016.5417%2034.2999%2017.375%2035.7999C17.9583%2036.7999%2018.2083%2037.9666%2018.125%2039.2999C18.125%2040.6333%2018.5833%2041.5916%2019.5%2042.1749L18.75%2049.4249C18.1667%2049.5916%2017.6667%2049.7999%2017.25%2050.0499C16.8333%2050.2999%2016.4583%2050.5083%2016.125%2050.6749C15.5417%2051.0083%2014.9167%2051.3416%2014.25%2051.6749C13.5833%2051.9249%2012.6667%2052.0499%2011.5%2052.0499C10.4167%2052.0499%209.54167%2051.9249%208.875%2051.6749C8.20833%2051.3416%207.54167%2051.0083%206.875%2050.6749C6.29167%2050.2583%205.58333%2049.8833%204.75%2049.5499C3.91667%2049.2166%202.79167%2049.0499%201.375%2049.0499C1.125%2049.0499%200.875%2049.2166%200.625%2049.5499C0.458333%2049.7999%200.375%2050.0499%200.375%2050.2999C0.375%2050.5499%200.458333%2050.8416%200.625%2051.1749C0.791667%2051.4249%201%2051.5499%201.25%2051.5499C2.41667%2051.5499%203.29167%2051.7166%203.875%2052.0499C4.54167%2052.2999%205.20833%2052.5916%205.875%2052.9249C6.54167%2053.2583%207.29167%2053.6333%208.125%2054.0499C9.04167%2054.3833%2010.2083%2054.5499%2011.625%2054.5499C13.125%2054.5499%2014.25%2054.3833%2015%2054.0499C15.8333%2053.6333%2016.5833%2053.2583%2017.25%2052.9249C17.8333%2052.5916%2018.4583%2052.2999%2019.125%2052.0499C19.7917%2051.7166%2020.7083%2051.5499%2021.875%2051.5499C23.0417%2051.5499%2023.9583%2051.7166%2024.625%2052.0499C25.2917%2052.2999%2025.9167%2052.5916%2026.5%2052.9249C27.1667%2053.2583%2027.875%2053.6333%2028.625%2054.0499C29.4583%2054.3833%2030.5833%2054.5499%2032%2054.5499C33.5%2054.5499%2034.625%2054.3833%2035.375%2054.0499C36.2083%2053.6333%2036.9583%2053.2583%2037.625%2052.9249C38.2083%2052.5916%2038.8333%2052.2999%2039.5%2052.0499C40.1667%2051.7166%2041.0833%2051.5499%2042.25%2051.5499C43.4167%2051.5499%2044.2917%2051.7166%2044.875%2052.0499C45.5417%2052.2999%2046.2083%2052.5916%2046.875%2052.9249C47.5417%2053.2583%2048.25%2053.6333%2049%2054.0499C49.8333%2054.3833%2050.9583%2054.5499%2052.375%2054.5499C53.7917%2054.5499%2054.9167%2054.3833%2055.75%2054.0499C56.5833%2053.6333%2057.3333%2053.2583%2058%2052.9249C58.5833%2052.5916%2059.2083%2052.2999%2059.875%2052.0499C60.5417%2051.7166%2061.4583%2051.5499%2062.625%2051.5499C62.875%2051.5499%2063.0417%2051.3833%2063.125%2051.0499C63.2083%2050.7166%2063.25%2050.4666%2063.25%2050.2999C63.25%2050.0499%2063.1667%2049.7999%2063%2049.5499C62.9167%2049.2166%2062.75%2049.0499%2062.5%2049.0499ZM44.625%2049.2999C44.2917%2049.2166%2043.9167%2049.1749%2043.5%2049.1749C43.0833%2049.0916%2042.6667%2049.0499%2042.25%2049.0499C41.5833%2049.0499%2040.9583%2049.1333%2040.375%2049.2999C39.875%2049.3833%2039.4167%2049.5083%2039%2049.6749C38.5%2049.7583%2038.0417%2049.9249%2037.625%2050.1749C37.2917%2050.3416%2036.9583%2050.5083%2036.625%2050.6749C36.2917%2050.9249%2035.9583%2051.1333%2035.625%2051.2999C35.375%2051.3833%2035.0833%2051.5083%2034.75%2051.6749C34.4167%2051.7583%2034.0417%2051.8416%2033.625%2051.9249C33.2083%2052.0083%2032.7083%2052.0499%2032.125%2052.0499C31.0417%2052.0499%2030.1667%2051.9249%2029.5%2051.6749C28.8333%2051.3416%2028.2083%2051.0083%2027.625%2050.6749C26.875%2050.2583%2026.0833%2049.8833%2025.25%2049.5499C24.5%2049.2166%2023.4167%2049.0499%2022%2049.0499C21.9167%2049.0499%2021.8333%2049.0499%2021.75%2049.0499C21.6667%2049.0499%2021.5833%2049.0499%2021.5%2049.0499C21.3333%2049.0499%2021.3333%2048.1333%2021.5%2046.2999C21.75%2044.3833%2021.875%2043.4249%2021.875%2043.4249L41.875%2041.2999L44.875%2043.7999C44.7917%2043.7999%2044.75%2044.7166%2044.75%2046.5499C44.75%2048.3833%2044.7083%2049.2999%2044.625%2049.2999ZM26.75%2037.6749L27.25%2035.2999L28.875%2034.9249L30.375%2039.0499C30.375%2039.0499%2030.4583%2039.2166%2030.625%2039.5499C30.7917%2039.7999%2031.0833%2040.0916%2031.5%2040.4249L28.25%2040.6749C28.3333%2040.5083%2028.375%2040.3833%2028.375%2040.2999C28.375%2040.2166%2028.375%2040.0916%2028.375%2039.9249C28.375%2039.6749%2028.2083%2039.2999%2027.875%2038.7999C27.5417%2038.2166%2027.1667%2037.8416%2026.75%2037.6749ZM18.875%2033.7999C18.375%2033.1333%2017.875%2032.3416%2017.375%2031.4249C16.9583%2030.5083%2016.5833%2029.6749%2016.25%2028.9249C14.9167%2024.5083%2015.125%2021.3833%2016.875%2019.5499C18.625%2017.7166%2020.875%2016.6749%2023.625%2016.4249C25.4583%2016.4249%2027.5833%2016.4249%2030%2016.4249C32.5%2016.4249%2034.4167%2016.5916%2035.75%2016.9249C36.9167%2017.2583%2038.7917%2018.1333%2041.375%2019.5499C43.9583%2020.9666%2045.25%2021.6749%2045.25%2021.6749L48.375%2022.5499C48.375%2022.5499%2048.4583%2022.4666%2048.625%2022.2999C48.875%2022.0499%2049.125%2021.9666%2049.375%2022.0499C49.7083%2022.1333%2049.9583%2022.2583%2050.125%2022.4249C50.2917%2022.5916%2050.3333%2022.7999%2050.25%2023.0499C50.1667%2023.2166%2050.0833%2023.4666%2050%2023.7999C50%2024.0499%2050%2024.1749%2050%2024.1749C50%2024.1749%2050.2083%2024.4249%2050.625%2024.9249C51.0417%2025.3416%2051.2917%2025.6749%2051.375%2025.9249C51.375%2026.3416%2051.4167%2026.8416%2051.5%2027.4249C51.6667%2027.9249%2051.75%2028.1749%2051.75%2028.1749C51.75%2028.1749%2052%2028.5499%2052.5%2029.2999C53.0833%2030.0499%2053.3333%2030.5499%2053.25%2030.7999C53.1667%2030.9666%2052.875%2031.1749%2052.375%2031.4249C51.875%2031.6749%2051.4167%2031.7166%2051%2031.5499C50.6667%2031.3833%2049.9167%2030.9249%2048.75%2030.1749C47.6667%2029.4249%2047.125%2029.0499%2047.125%2029.0499C47.125%2029.0499%2046.3333%2029.0499%2044.75%2029.0499C43.1667%2028.9666%2042.25%2028.9249%2042%2028.9249C41.6667%2029.0083%2041.375%2029.5499%2041.125%2030.5499C40.875%2031.4666%2040.75%2031.9249%2040.75%2031.9249L40.5%2035.5499C40.5%2035.5499%2040.7917%2035.8416%2041.375%2036.4249C41.9583%2036.9249%2042.3333%2037.2999%2042.5%2037.5499C42.6667%2037.7999%2042.625%2038.0499%2042.375%2038.2999C42.2083%2038.4666%2042%2038.5916%2041.75%2038.6749C41.4167%2038.6749%2040.7917%2038.5499%2039.875%2038.2999C39.0417%2037.9666%2038.4167%2037.7166%2038%2037.5499C37.5833%2037.2999%2037.2917%2037.0083%2037.125%2036.6749C37.0417%2036.2583%2037%2036.0499%2037%2036.0499L36.25%2032.1749L35.125%2035.0499L36.125%2037.5499C36.125%2037.5499%2036.2083%2037.5916%2036.375%2037.6749C36.5417%2037.7583%2036.9167%2037.8833%2037.5%2038.0499C38.3333%2038.2999%2038.5%2038.6333%2038%2039.0499C37.5833%2039.3833%2037.25%2039.5916%2037%2039.6749C36.6667%2039.8416%2036.1667%2039.8833%2035.5%2039.7999C34.8333%2039.7166%2034.3333%2039.6749%2034%2039.6749C33.6667%2039.5916%2033.2917%2039.4249%2032.875%2039.1749C32.5417%2038.8416%2032.2917%2038.5083%2032.125%2038.1749C32.0417%2037.9249%2031.625%2036.9666%2030.875%2035.2999C30.125%2033.5499%2029.75%2032.6749%2029.75%2032.6749L24.875%2034.1749L24%2037.7999C24%2037.7999%2024.25%2037.9249%2024.75%2038.1749C25.25%2038.4249%2025.75%2038.7166%2026.25%2039.0499C26.6667%2039.3833%2026.75%2039.6749%2026.5%2039.9249C26.25%2040.1749%2026.125%2040.2999%2026.125%2040.2999L22.25%2040.4249C22.25%2040.4249%2021.9583%2040.4249%2021.375%2040.4249C20.875%2040.3416%2020.5833%2040.0083%2020.5%2039.4249C20.3333%2038.9249%2020.125%2038.0499%2019.875%2036.7999C19.7083%2035.5499%2019.375%2034.5499%2018.875%2033.7999Z'%20fill='%23000667'/%3e%3c/svg%3e", d6 = "data:image/svg+xml,%3csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15239_41247)'%3e%3cpath%20d='M6.17302%2036.0343H17.9294C18.2793%2036.0343%2018.5541%2036.3092%2018.5541%2036.659V43.4306C18.5541%2043.7804%2018.2793%2044.0552%2017.9294%2044.0552H6.17302C5.8232%2044.0552%205.54834%2043.7804%205.54834%2043.4306V36.659C5.54834%2036.3092%205.83569%2036.0343%206.17302%2036.0343Z'%20stroke='%2321255A'%20stroke-width='1.87404'%20stroke-miterlimit='10'/%3e%3cpath%20d='M50.9249%2038.5956H52.0618C52.2242%2038.5956%2052.3491%2038.7205%2052.3491%2038.8829V43.7929C52.3491%2043.9553%2052.2242%2044.0803%2052.0618%2044.0803H50.9249C50.7624%2044.0803%2050.6375%2043.9553%2050.6375%2043.7929V38.8829C50.625%2038.7205%2050.7624%2038.5956%2050.9249%2038.5956Z'%20stroke='%2321255A'%20stroke-width='1.3743'%20stroke-miterlimit='10'/%3e%3cpath%20d='M2%2044.0801C5.01096%2054%205.01096%2054%205.01096%2054H52.6865L58.9707%2044.0801H2Z'%20stroke='%2321255A'%20stroke-width='1.87404'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8.95898%2033.0359H10.4332V35.9969H8.95898V33.0359Z'%20stroke='%2321255A'%20stroke-width='1.3743'%20stroke-miterlimit='10'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M40.0556%2012.359C37.6318%2012.359%2035.8078%2014.2455%2035.6953%2016.6818C35.6953%2016.6943%2035.6953%2016.7068%2035.6953%2016.7193C35.6953%2019.218%2037.6693%2021.0795%2040.0556%2021.0795C42.4419%2021.0795%2044.4158%2019.218%2044.4158%2016.7193C44.4158%2014.2455%2042.4793%2012.3965%2040.118%2012.359H40.0556ZM37.4444%2016.7318C37.4569%2018.231%2038.6188%2019.3304%2040.0556%2019.3304C41.5048%2019.3304%2042.6667%2018.231%2042.6667%2016.7193C42.6667%2015.2075%2041.5048%2014.1081%2040.0556%2014.1081C38.6438%2014.0956%2037.5194%2015.1701%2037.4444%2016.7318Z'%20fill='%2321255A'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M40.1431%2035.4597C39.3935%2035.9719%2039.3935%2035.9719%2039.3935%2035.9719L39.0936%2035.5347C38.9062%2035.2598%2038.6314%2034.86%2038.294%2034.3728C37.6319%2033.3983%2036.7198%2032.0739%2035.7703%2030.6871C33.8838%2027.9136%2031.7974%2024.8526%2031.0977%2023.7532C29.5985%2021.4044%2029.2112%2019.5678%2029.2112%2017.0691C29.2112%2011.0847%2034.0587%206.13722%2040.1431%206.13722C46.14%206.13722%2050.9875%2010.9847%2050.9875%2016.9817C50.9875%2019.4804%2050.6002%2021.3045%2049.101%2023.6532C48.5138%2024.5903%2046.8521%2027.064%2045.153%2029.5877C45.0281%2029.7626%2044.9156%2029.9375%2044.7907%2030.1124C43.1915%2032.4862%2041.6173%2034.81%2040.8927%2035.9345C40.7303%2036.1968%2040.4429%2036.3467%2040.1431%2036.3467C39.8432%2036.3467%2039.5559%2036.1968%2039.381%2035.9469L40.1431%2035.4597ZM40.1431%207.9488C35.0707%207.9488%2031.0352%2012.0717%2031.0352%2017.0566C31.0352%2019.268%2031.3476%2020.7422%2032.6344%2022.7537C33.3216%2023.8282%2035.383%2026.8641%2037.282%2029.6502C38.2316%2031.037%2039.1311%2032.3613%2039.8058%2033.3358C39.9182%2033.5107%2040.0306%2033.6731%2040.1306%2033.8105C40.9552%2032.5612%2042.1171%2030.8371%2043.2915%2029.1005C43.4164%2028.9255%2043.5288%2028.7381%2043.6538%2028.5632C45.3654%2026.0145%2047.0146%2023.5783%2047.5643%2022.6787L47.5768%2022.6663C48.8636%2020.6548%2049.1759%2019.1805%2049.1759%2016.9692C49.1635%2011.9842%2045.128%207.9488%2040.1431%207.9488Z'%20fill='%2321255A'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15239_41247'%3e%3crect%20width='60'%20height='60'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", u6 = "data:image/svg+xml,%3csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15239_41229)'%3e%3cpath%20d='M32.7293%2038.8706C24.5416%2038.1558%2017.8701%2031.7227%2017.8701%2023.3494C17.8701%2023.2473%2018.0723%2023.1452%2018.4766%2023.1452C18.6788%2023.1452%2019.0831%2023.2473%2019.0831%2023.3494C19.4874%2031.11%2025.2492%2036.9305%2033.0326%2037.441C32.8304%2038.0537%2032.8304%2038.4622%2032.7293%2038.8706Z'%20fill='%2321255A'/%3e%3cpath%20d='M32.7293%2038.8706C24.5416%2038.1558%2017.8701%2031.7227%2017.8701%2023.3494C17.8701%2023.2473%2018.0723%2023.1452%2018.4766%2023.1452C18.6788%2023.1452%2019.0831%2023.2473%2019.0831%2023.3494C19.4874%2031.11%2025.2492%2036.9305%2033.0326%2037.441C32.8304%2038.0537%2032.8304%2038.4622%2032.7293%2038.8706Z'%20stroke='%2321255A'%20stroke-width='0.666667'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M33.1338%2034.5815C26.8666%2034.071%2022.6211%2029.2717%2022.2168%2022.9407C22.2168%2022.7364%2023.2276%2022.6343%2023.3287%2022.8386C23.5309%2028.0463%2027.6753%2033.4583%2033.2348%2033.2541C33.1338%2033.6625%2033.1338%2034.071%2033.1338%2034.5815Z'%20fill='%2321255A'/%3e%3cpath%20d='M33.1338%2034.5815C26.8666%2034.071%2022.6211%2029.2717%2022.2168%2022.9407C22.2168%2022.7364%2023.2276%2022.6343%2023.3287%2022.8386C23.5309%2028.0463%2027.6753%2033.4583%2033.2348%2033.2541C33.1338%2033.6625%2033.1338%2034.071%2033.1338%2034.5815Z'%20stroke='%2321255A'%20stroke-width='0.666667'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M33.336%2030.395C29.2927%2030.0887%2026.6646%2026.719%2026.5635%2022.5323C26.5635%2022.3281%2027.17%2022.3281%2027.2711%2022.4302C27.3721%2026.1063%2030.0003%2029.5781%2033.4371%2029.5781C33.4371%2029.7823%2033.4371%2030.0887%2033.336%2030.395Z'%20fill='%2321255A'/%3e%3cpath%20d='M33.336%2030.395C29.2927%2030.0887%2026.6646%2026.719%2026.5635%2022.5323C26.5635%2022.3281%2027.17%2022.3281%2027.2711%2022.4302C27.3721%2026.1063%2030.0003%2029.5781%2033.4371%2029.5781C33.4371%2029.7823%2033.4371%2030.0887%2033.336%2030.395Z'%20stroke='%2321255A'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M41.1192%209.97269L39.704%2011.4023C39.4008%2011.7086%2039.4008%2012.3213%2039.704%2012.6276L43.7473%2016.7121C44.0506%2017.0185%2044.6571%2017.0185%2044.9603%2016.7121L46.3755%2015.2826C46.6787%2014.9762%2046.6787%2014.3635%2046.3755%2014.0572L42.3322%209.97269C42.0289%209.56424%2041.5235%209.56424%2041.1192%209.97269Z'%20stroke='%2321255A'%20stroke-width='2.66667'%20stroke-miterlimit='10'/%3e%3cpath%20d='M29.7976%2017.3244L20.2958%207.72583C19.9925%207.41949%2019.9925%206.80681%2020.2958%206.50048L23.6315%203.13075C23.9348%202.82441%2024.5413%202.82441%2024.8445%203.13075L34.3463%2012.7294C34.6496%2013.0357%2034.6496%2013.6484%2034.3463%2013.9547L31.0106%2017.3244C30.7073%2017.6308%2030.1008%2017.6308%2029.7976%2017.3244Z'%20stroke='%2321255A'%20stroke-width='2.66667'%20stroke-miterlimit='10'/%3e%3cpath%20d='M48.8015%2036.3177L39.2997%2026.7191C38.9965%2026.4127%2038.9965%2025.8001%2039.2997%2025.4937L42.6354%2022.124C42.9387%2021.8177%2043.5452%2021.8177%2043.8484%2022.124L53.3502%2031.7226C53.6535%2032.0289%2053.6535%2032.6416%2053.3502%2032.948L50.0145%2036.3177C49.6102%2036.7261%2049.1048%2036.7261%2048.8015%2036.3177Z'%20stroke='%2321255A'%20stroke-width='2.66667'%20stroke-miterlimit='10'/%3e%3cpath%20d='M37.0758%2011.0958L29.0902%2019.1627C28.787%2019.469%2028.787%2020.0817%2029.0902%2020.388L36.065%2027.4338C36.3682%2027.7402%2036.9747%2027.7402%2037.278%2027.4338L45.2635%2019.3669C45.5668%2019.0606%2045.5668%2018.4479%2045.2635%2018.1415L38.2888%2011.0958C37.9855%2010.7894%2037.379%2010.7894%2037.0758%2011.0958Z'%20stroke='%2321255A'%20stroke-width='2.66667'%20stroke-miterlimit='10'/%3e%3cmask%20id='mask0_15239_41229'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='2'%20y='19'%20width='56'%20height='57'%3e%3cpath%20d='M2%2019.2648H58V75.9375H2V19.2648Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_15239_41229)'%3e%3cpath%20d='M6.75103%2040.6066H17.8702C18.1734%2040.6066%2018.4767%2040.9129%2018.4767%2041.2193V47.7545C18.4767%2048.0608%2018.1734%2048.3672%2017.8702%2048.3672H6.75103C6.44778%2048.3672%206.14453%2048.0608%206.14453%2047.7545V41.2193C6.14453%2040.9129%206.44778%2040.6066%206.75103%2040.6066Z'%20stroke='%2321255A'%20stroke-width='2.21773'%20stroke-miterlimit='10'/%3e%3cpath%20d='M49.2056%2043.3637H50.2164C50.3175%2043.3637%2050.5197%2043.4658%2050.5197%2043.67V48.0608C50.5197%2048.163%2050.4186%2048.3672%2050.2164%2048.3672H49.2056C49.1045%2048.3672%2048.9023%2048.2651%2048.9023%2048.0608V43.5679C48.9023%2043.4658%2049.0034%2043.3637%2049.2056%2043.3637Z'%20stroke='%2321255A'%20stroke-width='1.62627'%20stroke-miterlimit='10'/%3e%3cpath%20d='M2.80859%2048.3668L5.63892%2057.8633H50.823L56.7869%2048.3668H2.80859Z'%20stroke='%2321255A'%20stroke-width='2.21773'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.37891%2037.7473H10.7941V40.6064H9.37891V37.7473Z'%20stroke='%2321255A'%20stroke-width='1.62627'%20stroke-miterlimit='10'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15239_41229'%3e%3crect%20width='60'%20height='60'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", h6 = "data:image/svg+xml,%3csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.1208%2055.9879L15.7314%2019.741H23.0611L25.9729%2055.9879H13.1208Z'%20stroke='%2321255A'%20stroke-width='1.60651'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8%2055.9878H30.5916V59H8V55.9878Z'%20stroke='%2321255A'%20stroke-width='1.60651'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M36.616%2048.5579V41.7302H49.3676V48.5579'%20stroke='%2321255A'%20stroke-width='1.20488'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M33.5034%2049.7928L35.8831%2059.0001H49.8898C50.7533%2055.9277%2051.6168%2052.8552%2052.4703%2049.7928C49.2773%2048.8088%2046.0744%2047.8349%2042.8814%2046.8509L33.5034%2049.7928Z'%20stroke='%2321255A'%20stroke-width='1.60651'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M43.042%2046.8509V59.0001'%20stroke='%2321255A'%20stroke-width='1.60651'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M47.8918%205.45317L12.1971%2016.2971C11.5244%2014.0681%2012.7795%2011.7085%2015.0085%2011.0358L42.6305%202.64177C44.8595%201.96905%2047.209%203.22413%2047.8918%205.45317Z'%20stroke='%2321255A'%20stroke-width='1.60651'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M44.247%2027.6732H42.1384V8.84686C42.1384%207.8227%2042.9718%206.98933%2043.996%206.98933H44.247V27.6732Z'%20stroke='%2321255A'%20stroke-width='1.60651'%20stroke-miterlimit='10'/%3e%3cpath%20d='M19.5467%2014.9215C20.8776%2014.9215%2021.9565%2016.0004%2021.9565%2017.3313C21.9565%2018.6621%2020.8776%2019.741%2019.5467%2019.741C18.2158%2019.741%2017.137%2018.6621%2017.137%2017.3313C17.137%2016.0004%2018.2158%2014.9215%2019.5467%2014.9215Z'%20stroke='%2321255A'%20stroke-width='1.60651'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M47.7611%2036.3082H38.2224V31.7397C38.2224%2031.2075%2038.6542%2030.7858%2039.1763%2030.7858H46.9277C47.3896%2030.7858%2047.7611%2031.1573%2047.7611%2031.6192V36.3082Z'%20stroke='%2321255A'%20stroke-width='1.60651'%20stroke-miterlimit='10'/%3e%3cpath%20d='M43.2529%2027.7836C44.0791%2027.7836%2044.749%2028.4534%2044.749%2029.2797C44.749%2030.1059%2044.0791%2030.7758%2043.2529%2030.7758C42.4267%2030.7758%2041.7568%2030.1059%2041.7568%2029.2797C41.7568%2028.4534%2042.4267%2027.7836%2043.2529%2027.7836Z'%20stroke='%2321255A'%20stroke-width='1.4057'%20stroke-miterlimit='10'/%3e%3cpath%20d='M40.2305%2043.5374C40.8959%2043.5374%2041.4354%2044.0768%2041.4354%2044.7423C41.4354%2045.4077%2040.8959%2045.9472%2040.2305%2045.9472C39.5651%2045.9472%2039.0256%2045.4077%2039.0256%2044.7423C39.0256%2044.0768%2039.5651%2043.5374%2040.2305%2043.5374Z'%20stroke='%2321255A'%20stroke-width='1.00407'%20stroke-miterlimit='10'/%3e%3cpath%20d='M45.8533%2043.5374C46.5187%2043.5374%2047.0582%2044.0768%2047.0582%2044.7423C47.0582%2045.4077%2046.5187%2045.9472%2045.8533%2045.9472C45.1879%2045.9472%2044.6484%2045.4077%2044.6484%2044.7423C44.6484%2044.0768%2045.1879%2043.5374%2045.8533%2043.5374Z'%20stroke='%2321255A'%20stroke-width='1.00407'%20stroke-miterlimit='10'/%3e%3c/svg%3e", C6 = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16%2025C21.5228%2025%2026%2029.4772%2026%2035C26%2040.5228%2021.5228%2045%2016%2045C10.4772%2045%206%2040.5228%206%2035C6%2029.4772%2010.4772%2025%2016%2025ZM20.1504%2039.875C19.776%2039.5542%2019.224%2039.5542%2018.8496%2039.875L17.9521%2040.6436C16.8287%2041.6064%2015.1713%2041.6064%2014.0479%2040.6436L13.1504%2039.875C12.776%2039.5542%2012.224%2039.5542%2011.8496%2039.875L10.624%2040.9238C12.0444%2042.2136%2013.9302%2043%2016%2043C18.0695%2043%2019.9547%2042.2133%2021.375%2040.9238L20.1504%2039.875ZM20.1396%2035.4561C19.7401%2034.9827%2019.0099%2034.9827%2018.6104%2035.4561L18.293%2035.833C17.0944%2037.2535%2014.9056%2037.2535%2013.707%2035.833L13.3896%2035.4561C12.9901%2034.9827%2012.2599%2034.9827%2011.8604%2035.4561L11.543%2035.833C10.6872%2036.8472%209.32712%2037.1362%208.18262%2036.7021C8.39507%2037.6825%208.78761%2038.5951%209.32324%2039.4053L10.5479%2038.3564C11.6713%2037.3936%2013.3287%2037.3936%2014.4521%2038.3564L15.3496%2039.125C15.724%2039.4458%2016.276%2039.4458%2016.6504%2039.125L17.5479%2038.3564C18.6713%2037.3936%2020.3287%2037.3936%2021.4521%2038.3564L22.6758%2039.4053C23.2115%2038.595%2023.6039%2037.6826%2023.8164%2036.7021C22.6721%2037.1357%2021.3126%2036.847%2020.457%2035.833L20.1396%2035.4561ZM16%2027C11.9073%2027%208.53378%2030.0734%208.05859%2034.0381L8.48535%2034.5439C8.88486%2035.0173%209.61514%2035.0173%2010.0146%2034.5439L10.332%2034.167C11.5306%2032.7465%2013.7194%2032.7465%2014.918%2034.167L15.2354%2034.5439C15.6349%2035.0173%2016.3651%2035.0173%2016.7646%2034.5439L17.082%2034.167C18.2806%2032.7465%2020.4694%2032.7465%2021.668%2034.167L21.9854%2034.5439C22.3849%2035.0173%2023.1151%2035.0173%2023.5146%2034.5439L23.9404%2034.0381C23.4652%2030.0735%2020.0926%2027%2016%2027Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48%2025C53.5228%2025%2058%2029.4772%2058%2035C58%2040.5228%2053.5228%2045%2048%2045C42.4772%2045%2038%2040.5228%2038%2035C38%2029.4772%2042.4772%2025%2048%2025ZM52.1504%2039.875C51.776%2039.5542%2051.224%2039.5542%2050.8496%2039.875L49.9521%2040.6436C48.8287%2041.6064%2047.1713%2041.6064%2046.0479%2040.6436L45.1504%2039.875C44.776%2039.5542%2044.224%2039.5542%2043.8496%2039.875L42.624%2040.9238C44.0444%2042.2136%2045.9302%2043%2048%2043C50.0695%2043%2051.9547%2042.2133%2053.375%2040.9238L52.1504%2039.875ZM52.1396%2035.4561C51.7401%2034.9827%2051.0099%2034.9827%2050.6104%2035.4561L50.293%2035.833C49.0944%2037.2535%2046.9056%2037.2535%2045.707%2035.833L45.3896%2035.4561C44.9901%2034.9827%2044.2599%2034.9827%2043.8604%2035.4561L43.543%2035.833C42.6872%2036.8472%2041.3271%2037.1362%2040.1826%2036.7021C40.3951%2037.6825%2040.7876%2038.5951%2041.3232%2039.4053L42.5479%2038.3564C43.6713%2037.3936%2045.3287%2037.3936%2046.4521%2038.3564L47.3496%2039.125C47.724%2039.4458%2048.276%2039.4458%2048.6504%2039.125L49.5479%2038.3564C50.6713%2037.3936%2052.3287%2037.3936%2053.4521%2038.3564L54.6758%2039.4053C55.2115%2038.595%2055.6039%2037.6826%2055.8164%2036.7021C54.6721%2037.1357%2053.3126%2036.847%2052.457%2035.833L52.1396%2035.4561ZM48%2027C43.9073%2027%2040.5338%2030.0734%2040.0586%2034.0381L40.4854%2034.5439C40.8849%2035.0173%2041.6151%2035.0173%2042.0146%2034.5439L42.332%2034.167C43.5306%2032.7465%2045.7194%2032.7465%2046.918%2034.167L47.2354%2034.5439C47.6349%2035.0173%2048.3651%2035.0173%2048.7646%2034.5439L49.082%2034.167C50.2806%2032.7465%2052.4694%2032.7465%2053.668%2034.167L53.9854%2034.5439C54.3849%2035.0173%2055.1151%2035.0173%2055.5146%2034.5439L55.9404%2034.0381C55.4652%2030.0735%2052.0926%2027%2048%2027Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M22.5%2014.25C25.7609%2014.25%2029.5546%2016.7964%2029.9619%2021H34.0664C34.5969%2016.9458%2038.3043%2014.5%2041.5%2014.5C43.2113%2014.5%2044.6645%2015.0468%2045.6729%2015.5752C46.1799%2015.8409%2046.585%2016.1069%2046.8662%2016.3096C47.007%2016.411%2047.1173%2016.4976%2047.1953%2016.5605C47.2343%2016.592%2047.2656%2016.6177%2047.2881%2016.6367C47.2959%2016.6433%2047.3028%2016.6493%2047.3086%2016.6543L54.4395%2022.5664C58.9311%2024.8974%2062%2029.59%2062%2035C62%2042.732%2055.732%2049%2048%2049C40.6043%2049%2034.5489%2043.2652%2034.0361%2036H29.9639C29.4511%2043.2652%2023.3957%2049%2016%2049C8.26801%2049%202%2042.732%202%2035C2%2030.0759%204.54228%2025.7458%208.38574%2023.25L8.36621%2023.2266L16.6992%2016.3975C16.703%2016.3942%2016.7075%2016.3905%2016.7119%2016.3867C16.7344%2016.3677%2016.7658%2016.3419%2016.8047%2016.3105C16.8827%2016.2476%2016.9931%2016.1609%2017.1338%2016.0596C17.415%2015.8569%2017.8202%2015.5909%2018.3271%2015.3252C19.3355%2014.7968%2020.7887%2014.25%2022.5%2014.25ZM16%2023C9.37258%2023%204%2028.3726%204%2035C4%2041.6274%209.37258%2047%2016%2047C22.6274%2047%2028%2041.6274%2028%2035C28%2028.3726%2022.6274%2023%2016%2023ZM48%2023C41.3726%2023%2036%2028.3726%2036%2035C36%2041.6274%2041.3726%2047%2048%2047C54.6274%2047%2060%2041.6274%2060%2035C60%2030.3013%2057.2979%2026.2364%2053.3643%2024.2666L53.3623%2024.2695L53.3486%2024.2588C51.7378%2023.4551%2049.9225%2023%2048%2023ZM34%2030.6045C33.3996%2030.8597%2032.7131%2031%2032%2031C31.2869%2031%2030.6004%2030.8597%2030%2030.6045V34H34V30.6045ZM32%2027C31.3415%2027%2030.7907%2027.1799%2030.4336%2027.418C30.0695%2027.6607%2030%2027.8861%2030%2028C30%2028.1139%2030.0695%2028.3393%2030.4336%2028.582C30.7907%2028.8201%2031.3415%2029%2032%2029C32.6585%2029%2033.2093%2028.8201%2033.5664%2028.582C33.9305%2028.3393%2034%2028.1139%2034%2028C34%2027.8861%2033.9305%2027.6607%2033.5664%2027.418C33.2093%2027.1799%2032.6585%2027%2032%2027ZM22.5%2016.25C21.2113%2016.25%2020.0809%2016.6644%2019.2559%2017.0967C18.8466%2017.3112%2018.5223%2017.5251%2018.3037%2017.6826C18.1948%2017.7611%2018.1127%2017.8251%2018.0605%2017.8672C18.0346%2017.8882%2018.0156%2017.904%2018.0049%2017.9131C18.0017%2017.9158%2017.9988%2017.9184%2017.9971%2017.9199C17.9874%2017.9285%2017.9768%2017.9371%2017.9668%2017.9453L14.0771%2021.1309C14.7058%2021.0445%2015.3477%2021%2016%2021C21.0928%2021%2025.5502%2023.7194%2028%2027.7852V21.75C28%2018.3988%2025.0494%2016.25%2022.5%2016.25ZM41.5%2016.5C38.9506%2016.5%2036%2018.6488%2036%2022V27.7842C38.4499%2023.7188%2042.9075%2021%2048%2021C48.5121%2021%2049.0178%2021.0275%2049.5156%2021.0811L46.0283%2018.1914C46.0198%2018.1843%2046.0112%2018.1773%2046.0029%2018.1699C46.0012%2018.1684%2045.9983%2018.1658%2045.9951%2018.1631C45.9844%2018.154%2045.9655%2018.1382%2045.9395%2018.1172C45.8873%2018.0751%2045.8053%2018.0111%2045.6963%2017.9326C45.4776%2017.7751%2045.1535%2017.5612%2044.7441%2017.3467C43.9191%2016.9144%2042.7887%2016.5%2041.5%2016.5ZM30%2025.3945C30.6003%2025.1394%2031.287%2025%2032%2025C32.713%2025%2033.3997%2025.1394%2034%2025.3945V23H30V25.3945Z'%20fill='%23000667'/%3e%3c/svg%3e", f6 = "data:image/svg+xml,%3csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15239_41179)'%3e%3cpath%20d='M10.2898%2033.1486C15.2848%2025.1419%2020.3797%2017.1351%2025.3747%209.027C28.2718%2013.7905%2031.1689%2018.554%2034.066%2023.4189C35.4646%2021.0878%2036.7633%2018.6554%2038.1619%2016.3243C41.9581%2021.8986%2045.7543%2027.5743%2049.5505%2033.1486H10.2898Z'%20stroke='%2321255A'%20stroke-width='2.66667'%20stroke-miterlimit='10'%20stroke-linejoin='round'/%3e%3cpath%20d='M49.5505%2033.5541C45.7543%2038.0135%2041.9581%2042.0676%2038.1619%2046.527C36.7633%2044.8041%2035.4646%2042.777%2034.066%2041.0541C31.1689%2044.8041%2028.2718%2048.5541%2025.3747%2052C20.3797%2045.8176%2015.2848%2039.3311%2010.2898%2033.25L49.5505%2033.5541Z'%20fill='%2321255A'/%3e%3cpath%20d='M49.5505%2033.5541C45.7543%2038.0135%2041.9581%2042.0676%2038.1619%2046.527C36.7633%2044.8041%2035.4646%2042.777%2034.066%2041.0541C31.1689%2044.8041%2028.2718%2048.5541%2025.3747%2052C20.3797%2045.8176%2015.2848%2039.3311%2010.2898%2033.25L49.5505%2033.5541Z'%20stroke='%2321255A'%20stroke-width='2.66667'%20stroke-miterlimit='10'%20stroke-linejoin='round'/%3e%3cpath%20d='M0%2032.5405C2.0979%2032.5405%203.7962%2032.6419%204.7952%2032.6419C9.49051%2032.7432%2011.5884%2032.8446%2014.3856%2032.5405C15.8841%2032.4392%2016.5834%2032.3378%2017.4825%2032.1351C19.8801%2031.6284%2020.5794%2030.9189%2023.0769%2031.3243C25.7742%2031.8311%2026.3736%2032.9459%2029.0709%2033.1486C31.7682%2033.25%2032.6673%2032.1351%2035.4645%2031.527C38.4615%2030.8175%2039.2607%2031.7297%2041.958%2032.2365C42.4575%2032.3378%2043.0569%2032.4392%2045.7542%2032.5405C48.5514%2032.6419%2049.4505%2032.7432%2055.7443%2032.7432C56.7433%2032.7432%2058.2418%2032.7432%2059.9401%2032.6419'%20stroke='%2321255A'%20stroke-width='2.66667'%20stroke-miterlimit='10'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15239_41179'%3e%3crect%20width='60'%20height='60'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", p6 = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.1084%2048.2572C18.4226%2047.9744%2018.881%2047.9196%2019.2529%2048.1204L21.9395%2049.5706L25.1758%2050.5423C25.455%2050.6261%2025.6843%2050.8277%2025.8027%2051.0941L26.6504%2053.0003H28C28.5523%2053.0003%2029%2053.448%2029%2054.0003C28.9998%2054.5525%2028.5522%2055.0003%2028%2055.0003H14C13.4478%2055.0003%2013.0002%2054.5525%2013%2054.0003C13%2053.448%2013.4477%2053.0003%2014%2053.0003H15V51.5003C15%2051.2169%2015.1205%2050.9468%2015.3311%2050.7572L18.1084%2048.2572ZM17%2051.9447V53.0003H24.4619L24.1621%2052.3255L21.2686%2051.4583C21.2035%2051.4388%2021.1398%2051.4125%2021.0801%2051.3802L18.9229%2050.2142L17%2051.9447Z'%20fill='%23000667'/%3e%3cpath%20d='M52%2051.0003C52.5523%2051.0003%2053%2051.448%2053%2052.0003C52.9998%2052.5525%2052.5522%2053.0003%2052%2053.0003H46C45.4478%2053.0003%2045.0002%2052.5525%2045%2052.0003C45%2051.448%2045.4477%2051.0003%2046%2051.0003H52Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M42.1719%2040.1126C42.3777%2040.006%2042.6152%2039.9732%2042.8438%2040.0228L45.2627%2040.5482L47.6826%2040.0228L47.8467%2040.0013C48.2297%2039.9827%2048.5961%2040.1866%2048.7793%2040.5345L50.6035%2044.0003H52C52.5523%2044.0003%2053%2044.448%2053%2045.0003C52.9998%2045.5525%2052.5522%2046.0003%2052%2046.0003H38C37.4478%2046.0003%2037.0002%2045.5525%2037%2045.0003C37%2044.448%2037.4477%2044.0003%2038%2044.0003H39V42.7142L39.0078%2042.5892C39.0444%2042.2998%2039.2063%2042.0378%2039.4541%2041.8763L42.0859%2040.1624L42.1719%2040.1126ZM41%2043.2562V44.0003H48.3438L47.3633%2042.139L45.4756%2042.5492C45.3358%2042.5795%2045.1906%2042.5795%2045.0508%2042.5492L42.8271%2042.0658L41%2043.2562Z'%20fill='%23000667'/%3e%3cpath%20d='M19%2041.0003C19.5523%2041.0003%2020%2041.448%2020%2042.0003C19.9998%2042.5525%2019.5522%2043.0003%2019%2043.0003H9C8.44783%2043.0003%208.00019%2042.5525%208%2042.0003C8%2041.448%208.44772%2041.0003%209%2041.0003H19Z'%20fill='%23000667'/%3e%3cpath%20d='M29%2041.0003C29.5523%2041.0003%2030%2041.448%2030%2042.0003C29.9998%2042.5525%2029.5522%2043.0003%2029%2043.0003H24C23.4478%2043.0003%2023.0002%2042.5525%2023%2042.0003C23%2041.448%2023.4477%2041.0003%2024%2041.0003H29Z'%20fill='%23000667'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M35.0117%209.0013C35.2657%209.01044%2035.5058%209.11539%2035.6836%209.2933L35.7559%209.37337L40.3955%2015.1419L44.9834%2017.6781C45.1369%2017.7629%2045.2659%2017.8863%2045.3564%2018.0365L48.6963%2023.5716L51.8242%2024.1488C52.0841%2024.1967%2052.3132%2024.3447%2052.4629%2024.5589L52.5215%2024.6546L57.5957%2034.0003H61C61.5523%2034.0003%2062%2034.448%2062%2035.0003C61.9998%2035.5525%2061.5522%2036.0003%2061%2036.0003H3C2.44783%2036.0003%202.00019%2035.5525%202%2035.0003C2%2034.448%202.44772%2034.0003%203%2034.0003H6.51562L14.5488%2023.8529C14.7148%2023.6433%2014.9572%2023.5108%2015.2197%2023.4808L15.333%2023.474H18.4609L23.5205%2017.8822C23.6467%2017.7426%2023.8101%2017.6412%2023.9912%2017.5902L27.46%2016.6126L34.2441%209.31966C34.4418%209.1072%2034.7217%208.99099%2035.0117%209.0013ZM28.7324%2018.181C28.6075%2018.3152%2028.4479%2018.4135%2028.2715%2018.4632L26.1562%2019.0579L28.6582%2021.2474C28.7584%2021.3351%2028.8403%2021.4421%2028.8984%2021.5609L28.9482%2021.6839L30.3643%2025.93L34.6641%2029.7533C34.7817%2029.8579%2034.8734%2029.988%2034.9307%2030.1331L34.9766%2030.2835L35.8027%2034.0003H47.1914L46.1719%2030.262L41.1582%2028.4398C40.8243%2028.3183%2040.5803%2028.0286%2040.5166%2027.679L39.5967%2022.6136L35.9697%2020.348C35.7298%2020.1979%2035.5649%2019.9529%2035.5156%2019.6742L34.2119%2012.2894L28.7324%2018.181ZM37.4072%2018.888L41.0303%2021.1527C41.2389%2021.2832%2041.3915%2021.4852%2041.46%2021.7191L41.4834%2021.8216L42.3809%2026.7562L47.3418%2028.5609C47.6086%2028.658%2047.8199%2028.8629%2047.9258%2029.1224L47.9648%2029.2376L49.2637%2034.0003H55.3193L50.9922%2026.0286L47.8906%2025.4574C47.6092%2025.4055%2047.3627%2025.2355%2047.2148%2024.9906L43.7822%2019.2972L39.2549%2016.7962C39.1413%2016.7334%2039.0404%2016.6493%2038.959%2016.5482L36.4414%2013.4163L37.4072%2018.888ZM19.6465%2025.1449C19.4569%2025.3543%2019.1868%2025.474%2018.9043%2025.474H15.8174L9.06738%2034.0003H33.7529L33.0938%2031.0316L28.8359%2027.2474C28.7052%2027.1312%2028.6072%2026.9826%2028.5518%2026.8167L27.1387%2022.5745L24.2539%2020.0511L19.6465%2025.1449Z'%20fill='%23000667'/%3e%3c/svg%3e", I = ({ src: r, className: n = "", ...e }) => {
  const t = [He.svg, n || ""];
  return /* @__PURE__ */ h.jsx("img", { className: t.join(" "), src: r, ...e });
}, Po = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: Ve }), Ho = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: Te }), To = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: f5 }), Oo = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: Oe }), Eo = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: Ee }), Io = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: Ie }), No = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: Ne }), Fo = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: Fe }), Vo = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: d6 }), Ro = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: Ye }), jo = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: je }), Ao = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: p5 }), Bo = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: p5 }), Yo = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: Re }), Uo = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: Be }), Wo = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: f6 }), zo = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: p6 }), qo = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: C6 }), $o = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: f5 }), Go = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: e6 }), Ko = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: qe }), Qo = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: u6 }), Xo = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: h6 }), Jo = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: Ue }), el = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: Ae }), tl = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: Qe }), nl = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: ze }), rl = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: m5 }), al = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: Ke }), sl = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: We }), il = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: $e }), ol = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: Ge }), ll = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: Xe }), cl = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: Je }), dl = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: m5 }), ul = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: t6 }), hl = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: n6 }), Cl = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: r6 }), fl = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: a6 }), pl = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: s6 }), ml = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: i6 }), gl = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: o6 }), vl = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: l6 }), Ml = (r) => /* @__PURE__ */ h.jsx(I, { ...r, src: c6 }), m6 = "_toggleGroup_iaz77_2", H2 = {
  toggleGroup: m6,
  "is-readonly": "_is-readonly_iaz77_16",
  "is-on": "_is-on_iaz77_24"
}, yl = (r) => {
  const n = typeof r.error == "string" && r.error.length > 0 ? r.error : void 0, e = !!r.error, t = (a, s) => {
    if (!r.readonly) {
      if (r.onChanges && r.values) {
        const i = r.values.map((o) => o.key === a ? { ...o, value: s } : o);
        r.onChanges(i);
      }
      if (r.onChange && r.values) {
        const i = r.values.find((o) => o.key === a);
        if (!i)
          return;
        r.onChange({ ...i, value: s });
      }
    }
  };
  return r.values ? /* @__PURE__ */ h.jsx(e2, { container: "inline-size", children: /* @__PURE__ */ h.jsxs(
    X0,
    {
      disabled: r.disabled,
      className: H2.fieldset + (r.disabled ? " " + H2["is-disabled"] : r.readonly ? " " + H2["is-readonly"] : ""),
      children: [
        /* @__PURE__ */ h.jsx(X0.Legend, { children: /* @__PURE__ */ h.jsx(i0, { text: r.label, required: r.required, optional: r.optional }) }),
        r.description && /* @__PURE__ */ h.jsx(X0.Description, { children: r.description }),
        /* @__PURE__ */ h.jsx("div", { className: H2.toggleGroup, "data-color": e ? "danger" : "neutral", children: r.values.map((a) => /* @__PURE__ */ h.jsx(
          S8,
          {
            className: a.value ? H2["is-on"] : H2["is-off"],
            "data-color": e ? "danger" : "primary",
            readOnly: r.readonly,
            disabled: r.disabled,
            checked: a.value,
            label: a.label,
            onChange: (s) => {
              t(a.key ?? a.label, s.target.checked);
            },
            onBlur: () => {
              var s;
              (s = r.onBlur) == null || s.call(r);
            }
          },
          a.key ?? a.label
        )) }),
        n && /* @__PURE__ */ h.jsx(M0, { children: n })
      ]
    }
  ) }) : null;
}, wl = (r) => {
  const n = typeof r.error == "string" && r.error.length > 0 ? r.error : void 0, e = !!r.error;
  return /* @__PURE__ */ h.jsx(e2, { container: "inline-size", children: /* @__PURE__ */ h.jsxs(
    X0,
    {
      disabled: r.disabled,
      className: H2.fieldset + (r.disabled ? " " + H2["is-disabled"] : r.readonly ? " " + H2["is-readonly"] : ""),
      children: [
        /* @__PURE__ */ h.jsx(X0.Legend, { children: /* @__PURE__ */ h.jsx(i0, { text: r.label, required: r.required, optional: r.optional }) }),
        r.description && /* @__PURE__ */ h.jsx(X0.Description, { children: r.description }),
        /* @__PURE__ */ h.jsx("div", { className: H2.toggleGroup, "data-color": e ? "danger" : "neutral", children: r.options.map((t) => /* @__PURE__ */ h.jsx(
          P8,
          {
            className: t.value === r.value ? H2["is-on"] : H2["is-off"],
            "data-color": e ? "danger" : "primary",
            readOnly: r.readonly,
            disabled: r.disabled,
            checked: t.value === r.value,
            label: t.label,
            onChange: () => {
              var a;
              (a = r.onChange) == null || a.call(r, t.value);
            },
            onBlur: () => {
              var a;
              (a = r.onBlur) == null || a.call(r);
            }
          },
          t.label
        )) }),
        n && /* @__PURE__ */ h.jsx(M0, { children: n })
      ]
    }
  ) });
}, g6 = "_grid_1hmr8_2", v6 = "_heading_1hmr8_8", M6 = "_valueError_1hmr8_14", y6 = "_valueText_1hmr8_15", w6 = "_contentError_1hmr8_16", b6 = "_contentArea_1hmr8_17", L6 = "_title_1hmr8_21", _6 = "_valueLabel_1hmr8_38", x6 = "_contentLabel_1hmr8_67", k6 = "_editButton_1hmr8_88", z2 = {
  grid: g6,
  heading: v6,
  valueError: M6,
  valueText: y6,
  contentError: w6,
  contentArea: b6,
  title: L6,
  valueLabel: _6,
  contentLabel: x6,
  editButton: k6
}, Z6 = ({ title: r, editButton: n }) => /* @__PURE__ */ h.jsxs(e2, { className: z2.heading, horizontal: !0, justify: "between", align: "center", children: [
  /* @__PURE__ */ h.jsx(a1, { children: r }),
  /* @__PURE__ */ h.jsx("button", { className: z2.editButton, onClick: n.onClick, "aria-label": n.ariaLabel, children: n.label })
] }), D6 = ({ title: r }) => /* @__PURE__ */ h.jsx(C5, { className: z2.title, size: "sm", children: r }), S6 = ({ label: r, value: n, error: e = void 0 }) => /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
  /* @__PURE__ */ h.jsx(f0, { className: z2.valueLabel, strong: !0, size: "sm", children: r }),
  /* @__PURE__ */ h.jsx(f0, { className: z2.valueText, size: "sm", children: n }),
  e && /* @__PURE__ */ h.jsx(f0, { className: z2.valueError, size: "sm", children: e })
] }), P6 = ({ label: r, content: n, error: e = void 0 }) => /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
  /* @__PURE__ */ h.jsx(f0, { className: z2.contentLabel, strong: !0, size: "sm", children: r }),
  /* @__PURE__ */ h.jsx("div", { className: z2.contentArea, children: n }),
  e && /* @__PURE__ */ h.jsx(f0, { className: z2.contentError, size: "sm", children: e })
] }), H6 = (r) => "editButton" in r ? /* @__PURE__ */ h.jsx(Z6, { ...r }) : "title" in r ? /* @__PURE__ */ h.jsx(D6, { ...r }) : "value" in r ? /* @__PURE__ */ h.jsx(S6, { ...r }) : "content" in r ? /* @__PURE__ */ h.jsx(P6, { ...r }) : /* @__PURE__ */ h.jsx(h.Fragment, {}), bl = ({ rows: r }) => /* @__PURE__ */ h.jsx("div", { className: z2.grid, children: r.map((n, e) => /* @__PURE__ */ h.jsx(H6, { ...n }, e)) }), T6 = "data:image/svg+xml,%3csvg%20width='186'%20height='47'%20viewBox='0%200%20186%2047'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_7584_1130)'%3e%3cmask%20id='mask0_7584_1130'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='186'%20height='47'%3e%3cpath%20d='M185.714%200H0V46.71H185.714V0Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_7584_1130)'%3e%3cpath%20d='M0%2030.2983C0%2040.3595%208.81422%2044.8737%2014.0488%2046.6717L14.1258%2046.71L14.2028%2046.6717C16.7816%2045.7536%2020.5152%2044.0321%2023.4404%2041.2012C26.5966%2038.1407%2028.2132%2034.5064%2028.2132%2030.2983V4.82019V4.70543L28.0977%204.66717C23.5174%201.56847%2018.7831%200%2014.0873%200C9.39157%200%204.69578%201.56847%200.0769803%204.66717L0%204.70543V4.82019V30.2983ZM0.26943%204.97321C4.84974%201.91277%209.46856%200.382555%2014.0873%200.382555C18.7062%200.382555%2023.3634%201.91277%2027.9053%204.97321L27.8283%204.82019V30.2983C27.8283%2034.3917%2026.2502%2037.9495%2023.171%2040.9334C20.2842%2043.726%2016.5892%2045.4093%2014.0488%2046.3274H14.1643C9.00664%2044.6059%200.3849%2040.1683%200.3849%2030.3366V4.82019L0.26943%204.97321Z'%20fill='%23000667'/%3e%3cpath%20d='M8.23683%2010.7498C6.62027%2011.3619%205.54253%2012.0887%205.31159%2012.3183C4.81121%2012.7773%205.00367%2013.2364%205.00367%2013.2364H5.04216C5.04216%2013.2364%205.00367%2012.8921%205.46555%2012.4713C5.65799%2012.28%206.69721%2011.5914%208.35231%2010.941L8.23683%2010.7498Z'%20fill='%23000667'/%3e%3cpath%20d='M14.5108%209.60205C14.5108%209.60205%2014.3184%209.60205%2014.1644%209.60205C14.0105%209.60205%2013.7795%209.60205%2013.7795%209.60205C12.3554%209.67859%2010.4309%2010.0229%208.7373%2010.5967L8.81429%2010.788C10.4693%2010.2142%2012.3938%209.90814%2013.818%209.8316C13.818%209.8316%2013.972%209.8316%2014.1644%209.8316C14.3184%209.8316%2014.5108%209.8316%2014.5108%209.8316C15.935%209.90814%2017.821%2010.2524%2019.5145%2010.788L19.5915%2010.5967C17.8594%2010.0229%2015.935%209.67859%2014.5108%209.60205Z'%20fill='%23000667'/%3e%3cpath%20d='M20.0535%2010.7498C21.67%2011.3619%2022.7478%2012.0887%2022.9787%2012.3183C23.4791%2012.7773%2023.2866%2013.2364%2023.2866%2013.2364H23.2481C23.2481%2013.2364%2023.2866%2012.8921%2022.8247%2012.4713C22.6323%2012.28%2021.593%2011.5914%2019.938%2010.941L20.0535%2010.7498Z'%20fill='%23000667'/%3e%3cpath%20d='M24.826%2011.4C24.0177%2010.3289%2022.2472%209.94629%2020.5151%209.83154C20.4382%208.07182%2017.2435%207.95701%2014.8186%208.41606C14.5877%208.07182%2013.7409%208.11003%2013.5099%208.41606C11.0466%207.95701%207.89046%208.07182%207.81347%209.83154C6.04288%209.94629%204.27237%2010.3289%203.46408%2011.4C2.69428%2012.4712%204.23388%2013.5806%204.23388%2013.5806L4.58029%2013.2745C4.58029%2013.2745%202.00146%2011.1705%207.81347%2010.1376C8.08287%2010.9027%208.62172%2011.2852%208.62172%2011.2852L8.92967%2011.094C8.92967%2011.094%207.15914%207.80399%2013.4715%208.8369L13.8564%2010.1758C13.8564%2010.1758%2013.8564%2010.0993%2013.9719%2010.0993C13.9719%2010.0993%2013.8179%208.8369%2013.8564%208.72215C13.9334%208.53087%2014.3567%208.53087%2014.4337%208.72215C14.4722%208.8369%2014.3183%2010.0993%2014.3183%2010.0993C14.4722%2010.0993%2014.4337%2010.1758%2014.4337%2010.1758L14.8186%208.8369C21.131%207.80399%2019.3605%2011.094%2019.3605%2011.094L19.6683%2011.2852C19.6683%2011.2852%2020.2073%2010.9027%2020.4767%2010.1376C26.3272%2011.1705%2023.7098%2013.2745%2023.7098%2013.2745L24.0562%2013.5806C24.0562%2013.5806%2025.6343%2012.4712%2024.826%2011.4ZM4.34935%2013.2363C4.38784%2013.2745%204.38784%2013.2745%204.42633%2013.3128C4.42633%2013.3128%204.34935%2013.2745%204.27237%2013.3511C4.1569%2013.2745%204.04143%2013.1598%203.92596%2013.045C3.23314%2012.2417%202.73277%2010.4819%207.73648%2010.0611C2.34787%2010.9792%204.00294%2012.892%204.34935%2013.2363ZM8.77569%2011.0557C8.77569%2011.1322%208.62172%2011.0557%208.62172%2011.094C8.23684%2010.6732%208.04437%2010.2141%208.04437%209.79328C8.00588%208.76037%209.23756%207.88053%2012.5477%208.45433C12.6247%208.45433%2012.6632%208.45433%2012.7402%208.4926C12.7017%208.4926%2012.7017%208.4926%2012.6632%208.4926C12.8556%208.53087%2013.0866%208.56914%2013.3175%208.60735C7.39004%207.95701%208.54473%2010.4819%208.77569%2011.0557ZM19.7068%2011.1322C19.6683%2011.094%2019.6683%2011.1322%2019.6683%2011.1322C19.7068%2011.0175%2019.5144%2011.1705%2019.5144%2011.0557V11.0175V10.9792C19.7838%2010.4054%2020.9385%207.91874%2015.0111%208.60735C15.2035%208.56914%2015.396%208.53087%2015.5884%208.4926H15.6269C18.3597%207.95701%2019.7453%208.4926%2020.1303%209.29595C20.2457%209.48724%2020.2842%209.71679%2020.2457%209.94629C20.2073%2010.3671%2020.0148%2010.7879%2019.7068%2011.1322ZM24.0947%2013.3511C24.0562%2013.3511%2024.0562%2013.3511%2024.0562%2013.3511C24.0177%2013.3128%2023.9793%2013.3128%2023.9793%2013.3128H23.9408C23.9023%2013.3128%2023.9023%2013.3128%2023.8638%2013.3128C23.8638%2013.3128%2023.9023%2013.2745%2023.9408%2013.2363C24.0947%2013.0832%2024.4027%2012.739%2024.4796%2012.3181C24.5951%2011.5913%2023.9792%2010.6349%2020.6306%2010.0228C26.5581%2010.5201%2024.7875%2012.892%2024.0947%2013.3511Z'%20fill='%23000667'/%3e%3cpath%20d='M24.6615%2013.7882C24.6615%2013.7882%2024.469%2013.5969%2024.1226%2013.4439C22.352%2012.6405%2022.7754%2014.4385%2022.7754%2014.5915C22.6215%2014.1325%2021.5438%2013.4439%2021.2743%2014.7063C21.0049%2016.0453%2022.0826%2015.701%2022.275%2015.701C22.0056%2016.0835%2021.4668%2016.0835%2020.2736%2015.5862C18.9264%2015.0506%2018.6955%2014.6681%2019.0034%2014.0177C19.1189%2014.8211%2020.1196%2015.0124%2020.4275%2014.209C21.1588%2012.411%2019.6193%2012.9083%2019.4268%2012.9848C19.6578%2012.564%2020.0811%2012.3728%2020.0811%2011.8754C20.1196%2011.1103%2019.0034%2010.919%2018.657%2011.1868C18.0796%2011.6459%2018.4261%2012.6788%2018.4261%2012.7935C18.2721%2012.6405%2017.2329%2011.225%2016.8864%2013.1378C16.7325%2013.9795%2017.6563%2014.362%2018.2336%2013.7117C18.1181%2014.4002%2017.5408%2014.6298%2016.1551%2014.4002C14.0767%2014.0942%2014.5001%2013.0996%2014.5001%2013.0996C14.5386%2013.1378%2015.3084%2014.4002%2015.9627%2012.9466C16.6555%2011.3398%2014.8465%2011.8372%2014.5771%2012.1815C14.731%2011.4546%2015.4239%2011.0338%2015.0389%2010.5747C14.5386%209.96263%2013.5763%2010.0009%2013.1529%2010.5747C12.768%2011.072%2013.4224%2011.4546%2013.6148%2012.1815C13.3454%2011.8372%2011.4979%2011.3398%2012.2292%2012.9466C12.8835%2014.4002%2013.6533%2013.1378%2013.6918%2013.0996C13.6918%2013.0996%2014.1152%2014.0942%2012.0367%2014.4002C10.6511%2014.6298%2010.0737%2014.4002%209.95823%2013.7117C10.5356%2014.362%2011.4594%2013.9795%2011.3054%2013.1378C10.959%2011.225%209.91974%2012.6405%209.76582%2012.7935C9.76582%2012.6788%2010.1507%2011.6459%209.53486%2011.1868C9.14998%2010.919%208.03373%2011.1103%208.11072%2011.8754C8.14921%2012.3728%208.61113%2012.6023%208.76505%2012.9848C8.57264%2012.9083%207.03301%2012.3728%207.76433%2014.1707C8.07222%2014.9741%209.073%2014.7828%209.18848%2013.9795C9.49637%2014.6681%209.26541%2015.0124%207.9183%2015.548C6.72512%2016.007%206.18621%2016.0453%205.91681%2015.6627C6.07079%2015.6244%207.14849%2016.0453%206.91753%2014.6681C6.68663%2013.4056%205.5319%2014.0942%205.41644%2014.5533C5.41644%2014.4002%205.83982%2012.6022%204.06929%2013.4056C3.72287%2013.5587%203.53042%2013.7499%203.53042%2013.7499L3.45345%2013.8264L3.37646%2013.9029L6.45566%2018.1493C6.45566%2018.1493%209.073%2015.9687%2013.9997%2015.9687C18.9264%2015.9687%2021.5438%2018.1493%2021.5438%2018.1493L24.623%2013.9029L24.6615%2013.8264V13.7882ZM24.1995%2014.1325C23.8532%2014.5915%2021.6592%2017.5755%2021.6208%2017.6137L21.5438%2017.7285L21.4283%2017.652C20.3891%2017.0781%2017.6178%2015.701%2014.0382%2015.701C10.4971%2015.701%207.68734%2017.0399%206.64813%2017.652L6.57114%2017.7285L6.45566%2017.6137C6.41717%2017.5755%204.22324%2014.5915%203.87684%2014.1325L3.83835%2014.0942V14.0177C3.83835%2013.9795%203.87684%2013.8264%204.06929%2013.6734C4.49268%2013.4056%204.87758%2013.4821%204.99305%2013.5204C5.22398%2013.6734%205.1855%2014.6681%205.1855%2014.7828C5.37795%2014.5151%205.68585%2014.1325%206.03229%2014.1707C6.2632%2014.1707%206.41717%2014.3238%206.53265%2014.6298C6.72512%2015.1271%206.57114%2015.3949%206.41717%2015.5097C6.18621%2015.6627%205.83982%2015.6244%205.5704%2015.5097C5.60889%2015.6244%205.68585%2015.8157%205.80133%2015.8923C6.14777%2016.16%206.84054%2016.0835%207.64885%2015.8157C8.61113%2015.5097%209.22697%2015.0506%209.3039%2014.5533C9.38089%2014.2472%209.26541%2013.9412%209.073%2013.7499C8.95752%2014.0177%208.72656%2014.4768%208.41866%2014.5151C8.2262%2014.5151%208.03373%2014.4002%207.87981%2014.0942C7.64885%2013.6734%207.61036%2013.3674%207.80282%2013.1761C8.03373%2012.9083%208.84204%2013.0614%208.91902%2013.0996C9.0345%2013.1378%208.88053%2012.9466%208.80354%2012.9083C8.53414%2012.6023%208.30318%2012.3728%208.30318%2012.1049C8.30318%2011.8372%208.41866%2011.6459%208.61113%2011.5311C8.88053%2011.3781%209.26541%2011.4163%209.41938%2011.5693C9.57336%2011.7224%209.61185%2012.0284%209.49637%2012.7553C9.49637%2012.8318%209.38089%2013.1761%209.53486%2012.9848C9.68884%2012.8318%2010.3047%2012.2579%2010.6511%2012.411C10.882%2012.4875%2010.9975%2012.7553%2010.9975%2013.1761C10.9975%2013.4821%2010.9205%2013.6734%2010.728%2013.7882C10.4587%2013.9412%209.95824%2013.6734%209.72733%2013.5204C9.68884%2013.7117%209.72733%2013.9795%209.88125%2014.1707C10.1507%2014.5151%2010.8435%2014.7063%2011.7673%2014.6298C12.7295%2014.5151%2013.2684%2014.209%2013.5378%2013.8264C13.6918%2013.5969%2013.8457%2013.1378%2013.7303%2012.7553C13.5763%2012.9466%2013.0759%2013.3674%2012.845%2013.3674C12.6141%2013.3674%2012.4601%2013.1761%2012.3062%2012.8701C12.1907%2012.564%2012.1907%2012.2197%2012.3447%2012.0667C12.5756%2011.8372%2013.3069%2012.1815%2013.6918%2012.3345C13.6533%2012.1815%2013.6148%2012.0284%2013.5378%2011.8372C13.4994%2011.6841%2013.4224%2011.5311%2013.3839%2011.4546C13.3069%2011.3016%2013.1144%2011.072%2013.2299%2010.8425C13.3839%2010.5747%2013.6533%2010.4217%2013.9612%2010.4217C14.3076%2010.4217%2014.5771%2010.5747%2014.6925%2010.8425C14.808%2011.072%2014.654%2011.2633%2014.5386%2011.4546C14.5001%2011.5693%2014.4231%2011.6459%2014.3846%2011.8372C14.3076%2012.0284%2014.2691%2012.1815%2014.2306%2012.3345C14.5771%2012.1815%2015.3084%2011.8372%2015.5778%2012.0667C15.7318%2012.2197%2015.7318%2012.5258%2015.6163%2012.8701C15.4623%2013.2144%2015.3084%2013.3674%2015.0774%2013.3674C14.8465%2013.3674%2014.3076%2012.9466%2014.1922%2012.7553C14.1152%2013.3291%2014.3076%2013.6734%2014.3846%2013.8264C14.654%2014.209%2015.1929%2014.5533%2016.1551%2014.6298C17.0789%2014.7063%2017.7717%2014.5151%2018.0411%2014.1707C18.1951%2013.9795%2018.2336%2013.5969%2018.2336%2013.4056C18.0026%2013.5587%2017.5023%2013.9029%2017.1944%2013.7499C17.0019%2013.6734%2016.9249%2013.4439%2016.9249%2013.1378C16.9249%2012.6788%2017.0404%2012.4492%2017.2714%2012.3728C17.6178%2012.2197%2018.3491%2012.9848%2018.3876%2012.8701C18.4261%2012.7935%2018.3876%2012.6788%2018.3876%2012.6023C18.3491%2012.1432%2018.3106%2011.6076%2018.5415%2011.4929C18.734%2011.3398%2019.0804%2011.3398%2019.3113%2011.4546C19.5038%2011.5693%2019.6193%2011.7606%2019.6193%2012.0284C19.6193%2012.2962%2019.5038%2012.4492%2019.2343%2012.7935C19.1958%2012.8701%2018.8879%2013.0996%2019.0419%2013.0613C19.1958%2013.0231%2019.9272%2012.9083%2020.1196%2013.1761C20.2736%2013.3674%2020.2736%2013.6734%2020.0426%2014.0942C19.8887%2014.4002%2019.6962%2014.5151%2019.5038%2014.5151C19.1958%2014.4768%2019.0034%2013.9795%2018.8494%2013.7499C18.734%2013.9029%2018.5031%2014.2855%2018.58%2014.5915C18.6955%2015.0506%2019.3498%2015.548%2020.2736%2015.854C21.0818%2016.1218%2021.7362%2016.1983%2022.0826%2015.9305C22.2366%2015.8157%2022.3135%2015.6244%2022.352%2015.5097C22.0826%2015.6244%2021.7362%2015.6627%2021.4668%2015.548C21.3128%2015.4714%2021.1588%2015.2419%2021.3128%2014.6298C21.3898%2014.3238%2021.6208%2014.1707%2021.8132%2014.1707C22.1211%2014.1325%2022.429%2014.4385%2022.6215%2014.7063C22.6215%2014.5915%2022.66%2014.5151%2022.66%2014.4002C22.6215%2013.9795%2022.737%2013.6352%2022.9679%2013.5204C23.0833%2013.4439%2023.3528%2013.3674%2023.7762%2013.6352C24.0071%2013.7882%2024.0071%2013.9795%2024.0071%2013.9795V14.056L24.1995%2014.1325Z'%20fill='%23000667'/%3e%3cpath%20d='M14.1642%204.66711C13.2405%204.66711%2012.4707%205.43222%2012.4707%206.35037C12.4707%207.11545%2012.9711%207.72758%2013.6639%207.95708L13.7409%208.26311C13.8179%208.2249%2013.8564%208.2249%2013.9333%208.2249C13.9333%208.14836%2013.9333%208.07188%2013.8949%208.03361C13.9718%208.03361%2014.0488%208.03361%2014.0873%208.03361C14.1642%208.03361%2014.2412%208.03361%2014.2797%208.03361C14.2797%208.11009%2014.2797%208.18663%2014.2412%208.2249C14.3182%208.2249%2014.3952%208.26311%2014.4337%208.26311L14.5107%207.95708C15.2035%207.76579%2015.7039%207.11545%2015.7039%206.35037C15.8579%205.43222%2015.088%204.66711%2014.1642%204.66711ZM14.0488%204.97316C14.0488%204.97316%2014.0873%204.97316%2014.1642%204.97316C14.2412%204.97316%2014.2797%204.97316%2014.2797%204.97316V6.50338H14.0488V4.97316ZM12.7402%206.35037C12.7402%205.6235%2013.279%205.04967%2013.9718%204.97316V6.50338H12.7402C12.7402%206.42685%2012.7402%206.38863%2012.7402%206.35037ZM14.1642%207.72758C13.5484%207.72758%2013.048%207.34501%2012.8556%206.84769H15.4729C15.2804%207.34501%2014.7416%207.72758%2014.1642%207.72758ZM15.5114%206.6564C15.4729%206.73294%2015.4729%206.77115%2015.4729%206.77115H12.8171C12.8171%206.77115%2012.8171%206.73294%2012.7787%206.6564C12.7787%206.57986%2012.7402%206.54165%2012.7402%206.54165H15.5114C15.5499%206.54165%2015.5499%206.57986%2015.5114%206.6564ZM14.3567%206.46512V4.97316C15.0495%205.04967%2015.5884%205.66176%2015.5884%206.35037C15.5884%206.38863%2015.5884%206.42685%2015.5884%206.50338L14.3567%206.46512Z'%20fill='%23000667'/%3e%3cpath%20d='M14.549%202.83082V1.83618H13.7407V2.83082H12.6245V3.63419H13.7407V4.82011H13.8177C13.8177%204.82011%2014.0486%204.78185%2014.1641%204.78185C14.2796%204.78185%2014.472%204.82011%2014.472%204.82011H14.549V3.63419H15.6652V2.83082H14.549Z'%20fill='%23000667'/%3e%3cpath%20d='M8.39092%2025.4399L13.0098%2025.8225L13.2407%2025.2104L13.1637%2025.4782L8.39092%2025.2487C8.39092%2025.2487%208.12153%2025.2486%208.12153%2024.9426C8.12153%2024.6365%208.39092%2024.5983%208.39092%2024.5983L13.3946%2024.4452L13.7026%2020.7345C13.7026%2020.5815%2013.8566%2020.4667%2014.1644%2020.4667C14.4339%2020.4667%2014.5878%2020.5815%2014.5878%2020.7345L14.8958%2024.4452L19.938%2024.5983C19.938%2024.5983%2020.2074%2024.5983%2020.2074%2024.9426C20.2074%2025.2486%2019.938%2025.2487%2019.938%2025.2487L15.2037%2025.4782L15.3191%2025.8607L19.938%2025.4782C19.9765%2025.4782%2020.5153%2025.4399%2020.5153%2024.9808C20.5153%2024.4452%2020.1304%2024.407%2019.8995%2024.3688L15.2806%2024.1009C15.2421%2023.6419%2015.0882%2021.8056%2015.0497%2021.0023C15.0112%2020.2372%2014.5493%2020.0842%2014.3569%2020.0459C14.3569%2020.0459%2014.3184%2020.0459%2014.2414%2020.0459H14.2029H14.1644C14.1259%2020.0459%2014.049%2020.0459%2014.049%2020.0459C13.8566%2020.0842%2013.3946%2020.2372%2013.3561%2021.0023C13.3177%2021.7674%2013.1637%2023.6036%2013.1252%2024.1009L8.5064%2024.3688C8.2755%2024.3688%207.89056%2024.4452%207.89056%2024.9808C7.81358%2025.4017%208.31399%2025.4399%208.39092%2025.4399ZM20.0534%2033.3588L20.7847%2033.7031C20.7847%2033.7031%2020.2843%2034.6212%2018.4753%2036.1514L18.6293%2036.381C18.6293%2036.381%2018.6293%2036.381%2018.6678%2036.381C20.2074%2035.2715%2021.0542%2033.6266%2021.0542%2033.6266L20.3998%2033.3588L21.747%2032.8615C21.516%2033.5884%2020.9387%2035.3481%2018.9757%2036.7635C18.9372%2036.8018%2018.8987%2036.84%2018.8218%2036.8783L18.7833%2036.7253C18.7448%2036.7635%2018.6678%2036.8018%2018.6293%2036.84L18.7833%2036.9548C17.3976%2037.8347%2015.7041%2038.2555%2014.2029%2038.2555C12.6634%2038.2555%2010.9313%2037.7964%209.54567%2036.8783L9.6226%2036.7253C9.58417%2036.687%209.50718%2036.6488%209.46869%2036.6105L9.43019%2036.7635C9.3917%2036.7635%209.3917%2036.7253%209.3532%2036.7253C7.39021%2035.2715%206.77437%2033.5501%206.5434%2032.8232L7.89056%2033.3205L7.23623%2033.5501C7.23623%2033.5501%207.96755%2035.1568%209.54567%2036.2662L9.6611%2036.0367C7.85207%2034.5065%207.46719%2033.6648%207.46719%2033.6648L8.19851%2033.3205L6.3125%2032.5172C6.3125%2032.5172%206.69738%2035.1568%209.19923%2036.9931C10.7004%2038.1024%2012.4324%2038.7528%2014.0875%2038.7528C15.7811%2038.7528%2017.5131%2038.1024%2018.9757%2036.9931C21.5545%2035.1951%2021.9395%2032.5554%2021.9395%2032.5554L20.0534%2033.3588ZM15.2421%2037.4521C15.7426%2037.4521%2017.1667%2037.1843%2018.0135%2036.7253L18.2829%2036.5723L18.3598%2036.534L18.2444%2036.3045L17.898%2036.4957C17.0897%2036.9166%2015.7041%2037.1078%2015.3191%2037.1078C14.9728%2037.1078%2014.8573%2037.0313%2014.8573%2036.6488V33.9326L14.4339%2033.6648V33.7031L14.5878%2033.7796V36.8783C14.6263%2037.3756%2014.9728%2037.4521%2015.2421%2037.4521ZM13.0098%2037.1078C12.6634%2037.1078%2011.2777%2036.9548%2010.4309%2036.4957L10.0845%2036.3045L9.96905%2036.534L10.3154%2036.7253C11.1622%2037.1843%2012.5479%2037.4521%2013.0867%2037.4521C13.3561%2037.4521%2013.7026%2037.4139%2013.7026%2036.8783V33.7796L13.8566%2033.7031V33.6648L13.4331%2033.9326V36.6488C13.4331%2036.9931%2013.3561%2037.1078%2013.0098%2037.1078Z'%20fill='%23000667'/%3e%3cpath%20d='M21.8237%2027.9647H16.1272L14.2797%2022.762L14.1642%2022.3794L14.0488%2022.762L12.1243%2027.9647H6.42773L6.77412%2028.1942L11.2005%2031.3694L9.31447%2036.9547L14.1257%2033.5117L18.86%2036.993L17.0125%2031.3694L21.4773%2028.1942L21.8237%2027.9647ZM16.5891%2031.2164L16.5121%2031.1781V31.2164L16.5891%2031.2547V31.2164L18.3597%2036.2279L17.7823%2035.4245L17.8977%2035.7306L18.2827%2036.2662L14.2027%2033.0909V32.9379L14.1642%2032.8997L14.0872%2032.9379V33.0909L9.89181%2036.2662L10.3922%2035.5775L10.1613%2035.7306L10.1998%2035.5775L9.77633%2036.1131L11.5469%2031.1781L7.19755%2028.1942L7.81339%2028.3855L7.69791%2028.3472H7.89032L7.23604%2028.156L12.3167%2028.2708L12.3937%2028.3472H12.4322L12.3552%2028.309L14.0872%2023.0297V23.9096L14.1257%2023.7566L14.2027%2023.9478V22.9915L15.8578%2028.1942L15.7423%2028.3472H15.8578L15.9347%2028.2708L20.9384%2028.156L20.3226%2028.3472H20.4766L20.3226%2028.462L21.0539%2028.2325L16.5891%2031.2164Z'%20fill='%23000667'/%3e%3cpath%20d='M7.08203%2028.1942L14.1257%2030.5278L14.0872%2030.4895L18.3981%2036.4956L18.475%2036.4191L14.2027%2030.413H14.1642L7.12052%2028.1177L7.08203%2028.1942Z'%20fill='%23000667'/%3e%3cpath%20d='M9.77664%2036.4191L14.203%2030.4895L14.1645%2030.5277L21.3237%2028.1177L21.2852%2028.0411L14.126%2030.413H14.0875L9.69971%2036.3808L9.77664%2036.4191Z'%20fill='%23000667'/%3e%3cpath%20d='M14.0874%2022.9532V30.4513V33.1292H14.2025V30.4513V22.9532H14.0874Z'%20fill='%23000667'/%3e%3cpath%20d='M11.2392%2031.4077L14.1644%2030.5279H14.1259L16.9742%2031.4077L17.0127%2031.293L14.1644%2030.4131H14.1259L11.2007%2031.293L11.2392%2031.4077Z'%20fill='%23000667'/%3e%3cpath%20d='M12.0859%2027.9647L14.0874%2030.4896L14.1644%2030.5279L14.2029%2030.4896L16.1659%2027.9647L16.0889%2027.9265L14.0874%2030.4131H14.2029L12.1629%2027.9265L12.0859%2027.9647Z'%20fill='%23000667'/%3e%3cpath%20d='M7.85183%2037.5287C7.69792%2037.5287%207.50545%2037.5669%207.35147%2037.6051C7.38997%2037.6434%207.42846%2037.6817%207.46696%2037.72C7.58244%2037.6817%207.73641%2037.6434%207.85183%2037.6434C8.62165%2037.6434%209.19899%2038.2555%209.19899%2038.9824C9.19899%2039.0206%209.19899%2039.0589%209.19899%2039.0589C9.23749%2039.0589%209.27598%2039.0971%209.31447%2039.1354C9.31447%2039.0589%209.31447%2039.0206%209.31447%2038.9824C9.35297%2038.179%208.66014%2037.5287%207.85183%2037.5287ZM8.77562%2040.5126C8.50617%2040.6656%208.15978%2040.7804%207.85183%2040.7804C6.85112%2040.7804%206.0813%2039.977%206.0813%2039.0206C6.0813%2038.8676%206.1198%2038.6763%206.15829%2038.5233C6.1198%2038.5233%206.0813%2038.485%206.0813%2038.4468C6.04281%2038.4085%206.00431%2038.3703%206.00431%2038.332C5.92738%2038.5233%205.88889%2038.7911%205.88889%2039.0206C5.88889%2040.13%206.81262%2041.0099%207.89033%2041.0099C8.31376%2041.0099%208.69864%2040.8952%209.00658%2040.6656C9.00658%2040.6656%209.00658%2040.6656%208.96809%2040.6656C8.8911%2040.6273%208.81412%2040.5891%208.77562%2040.5126ZM5.35001%2025.8225C5.31152%2025.899%205.27303%2025.9755%205.23454%2025.9755C5.58095%2026.3198%205.73492%2026.7406%205.73492%2027.2379C5.73492%2028.1943%205.0036%2028.9594%204.04135%2028.9977C4.00286%2029.1124%203.96437%2029.189%203.96437%2029.2655C5.08058%2029.2655%205.96588%2028.3473%205.96588%2027.2762C5.96588%2026.7024%205.73492%2026.205%205.35001%2025.8225ZM4.07984%2025.2869C4.04135%2025.2869%204.00286%2025.2869%203.96437%2025.2869C2.84816%2025.2869%201.96289%2026.1668%201.96289%2027.2762C1.96289%2028.003%202.34779%2028.6151%202.88665%2028.9594C2.84816%2028.8447%202.84816%2028.7299%202.88665%2028.6534C2.46326%2028.3091%202.19383%2027.8118%202.19383%2027.2762C2.19383%2026.2815%203.00212%2025.5164%203.96437%2025.5164C3.96437%2025.4782%204.00286%2025.4399%204.00286%2025.4016C4.00286%2025.3634%204.04135%2025.3252%204.07984%2025.2869ZM7.85183%2037.0313C7.46696%2037.0313%207.12057%2037.1461%206.85112%2037.2991C6.9281%2037.3757%206.9666%2037.4139%207.00509%2037.4521C7.27449%2037.2991%207.54394%2037.2226%207.85183%2037.2226C8.85261%2037.2226%209.62242%2038.026%209.62242%2038.9824C9.62242%2039.1354%209.62242%2039.2884%209.58393%2039.4031V39.4414C9.62242%2039.4414%209.69935%2039.4797%209.81483%2039.5179C9.85333%2039.3649%209.89182%2039.1736%209.89182%2039.0206C9.89182%2037.9112%208.96809%2037.0313%207.85183%2037.0313ZM12.5476%2020.6963C12.4322%2020.6963%2012.3552%2020.6963%2012.3167%2020.6963C12.5092%2021.1553%2012.8555%2021.4996%2013.3175%2021.7291C13.3175%2021.6526%2013.3175%2021.5379%2013.3175%2021.4613C12.971%2021.2701%2012.7016%2021.0023%2012.5476%2020.6963ZM2.84816%2026.2815C2.61722%2026.5493%202.46326%2026.8936%202.46326%2027.2762C2.46326%2027.6205%202.57873%2027.9265%202.80967%2028.1943C2.80967%2028.1561%202.80967%2028.1178%202.84816%2028.0795C2.84816%2028.0795%202.84816%2028.0795%202.84816%2028.0413C2.6942%2027.8118%202.61722%2027.544%202.61722%2027.2762C2.61722%2026.6641%203.04061%2026.1285%203.65645%2025.9755C3.69494%2025.899%203.77192%2025.8225%203.8489%2025.7842C3.464%2025.8225%203.11759%2026.0138%202.84816%2026.2815ZM20.4381%2040.3978C20.2841%2040.3978%2020.1302%2040.3596%2019.9762%2040.3213C19.9377%2040.3596%2019.9377%2040.3596%2019.8992%2040.3978C20.0532%2040.4743%2020.2456%2040.5126%2020.4381%2040.5126C21.2464%2040.5126%2021.9392%2039.8623%2021.9392%2039.0206C21.9392%2038.8676%2021.9007%2038.7528%2021.8622%2038.5998C21.8237%2038.5998%2021.8237%2038.5998%2021.8237%2038.5998C21.8237%2038.5998%2021.8237%2038.7146%2021.7852%2038.8293C21.7852%2038.9058%2021.7852%2038.9824%2021.7852%2039.0206C21.7852%2039.7857%2021.1694%2040.3978%2020.4381%2040.3978ZM24.1331%2028.7299C24.1716%2028.7299%2024.1716%2028.7299%2024.1331%2028.7299C24.1716%2028.6917%2024.1331%2028.6534%2024.0946%2028.6151C23.4403%2028.5004%2022.9784%2027.9648%2022.9784%2027.2762C22.9784%2026.9701%2023.0939%2026.7024%2023.2479%2026.5111C23.2094%2026.4728%2023.2094%2026.4345%2023.1709%2026.3581C22.9784%2026.6258%2022.863%2026.9319%2022.863%2027.2379C22.8245%2028.003%2023.4018%2028.6534%2024.1331%2028.7299ZM4.04135%2028.7299C4.84964%2028.6917%205.46548%2028.0413%205.46548%2027.2379C5.46548%2026.9319%205.35001%2026.6258%205.19605%2026.3963C5.15756%2026.4345%205.15756%2026.4728%205.11907%2026.5111C5.27303%2026.7406%205.35001%2026.9701%205.35001%2027.2762C5.35001%2028.003%204.81115%2028.5768%204.07984%2028.6151C4.04135%2028.6917%204.04135%2028.7299%204.04135%2028.7299ZM7.85183%2040.4743C8.00581%2040.4743%208.15978%2040.4361%208.31376%2040.3978C8.27526%2040.3596%208.23677%2040.3596%208.23677%2040.3213C8.12129%2040.3596%208.00581%2040.3596%207.89033%2040.3596C7.12057%2040.3596%206.54322%2039.7474%206.54322%2039.0206V38.9824C6.46624%2038.9058%206.46624%2038.8293%206.42774%2038.7528C6.42774%2038.8293%206.38925%2038.9058%206.38925%2038.9824C6.38925%2039.824%207.04358%2040.4743%207.85183%2040.4743ZM12.971%2020.6197C12.894%2020.6197%2012.8555%2020.5815%2012.817%2020.5815C12.9325%2020.7727%2013.0865%2020.964%2013.3175%2021.117C13.3175%2021.0788%2013.3175%2021.0406%2013.3175%2021.0023C13.1635%2020.8875%2013.0865%2020.7727%2012.971%2020.6197ZM24.0946%2029.036C23.2094%2028.9211%2022.5166%2028.1943%2022.5166%2027.2762C22.5166%2026.7789%2022.709%2026.3198%2023.0554%2025.9755C23.0169%2025.9372%2022.9784%2025.8607%2022.9399%2025.7842C22.5166%2026.1668%2022.2856%2026.6641%2022.2856%2027.2762C22.2856%2028.3473%2023.1324%2029.2272%2024.1716%2029.2655C24.1716%2029.2272%2024.1331%2029.1507%2024.0946%2029.036ZM25.6728%2027.2762C25.6728%2027.6205%2025.5573%2027.9265%2025.3648%2028.1561C25.3648%2028.2325%2025.3648%2028.2708%2025.3648%2028.3091C25.6343%2028.0413%2025.8267%2027.6587%2025.8267%2027.2379C25.8267%2026.5111%2025.2878%2025.899%2024.5565%2025.7842C24.6335%2025.8225%2024.7105%2025.899%2024.749%2025.9755C25.2878%2026.1668%2025.6728%2026.7024%2025.6728%2027.2762ZM22.1316%2038.4468C22.2086%2038.6381%2022.2086%2038.8293%2022.2086%2038.9824C22.2086%2039.977%2021.4004%2040.7421%2020.4381%2040.7421C20.0917%2040.7421%2019.7068%2040.6273%2019.4374%2040.4361C19.3989%2040.4743%2019.3219%2040.5509%2019.2064%2040.5891C19.5528%2040.8569%2019.9762%2041.0099%2020.4381%2041.0099C21.5543%2041.0099%2022.4396%2040.13%2022.4396%2039.0206C22.4396%2038.7528%2022.3626%2038.485%2022.2856%2038.2173C22.2471%2038.332%2022.2086%2038.4085%2022.1316%2038.4468ZM25.2108%2028.5004C25.2493%2028.5004%2025.2493%2028.5004%2025.2108%2028.5004V28.5004ZM24.3256%2025.2869H24.2871C24.3256%2025.3252%2024.3256%2025.3634%2024.3641%2025.4016C24.3641%2025.4399%2024.4026%2025.4782%2024.4026%2025.5164C24.8644%2025.5164%2025.2878%2025.7077%2025.6343%2026.052C25.9806%2026.3963%2026.1346%2026.8171%2026.1346%2027.2762C26.1346%2027.85%2025.8652%2028.3856%2025.3648%2028.7299C25.3648%2028.8064%2025.3648%2028.9211%2025.2878%2029.0742C25.9422%2028.7299%2026.3656%2028.0795%2026.3656%2027.3144C26.3271%2026.205%2025.4418%2025.2869%2024.3256%2025.2869ZM15.3189%2019.2808C15.3959%2019.2808%2015.4344%2019.2808%2015.4729%2019.319C15.242%2018.7835%2014.7031%2018.4392%2014.1257%2018.4392C13.5099%2018.4392%2012.971%2018.8217%2012.7401%2019.3573C12.7786%2019.319%2012.8555%2019.2808%2012.9325%2019.2808C13.1635%2018.86%2013.6254%2018.5922%2014.1257%2018.5922C14.6646%2018.5539%2015.088%2018.86%2015.3189%2019.2808ZM15.4729%2020.6197C15.4344%2020.6197%2015.3574%2020.658%2015.2804%2020.658C15.2035%2020.7727%2015.088%2020.8875%2014.9725%2021.0023V21.0406C14.9725%2021.0788%2014.9725%2021.117%2014.9725%2021.1553C15.2035%2021.0023%2015.3574%2020.811%2015.4729%2020.6197ZM15.7808%2020.6963C15.6268%2021.0023%2015.3574%2021.2701%2015.0495%2021.4613C15.0495%2021.5379%2015.0495%2021.6144%2015.0495%2021.7291C15.4729%2021.5379%2015.8193%2021.1553%2016.0117%2020.7345C15.9732%2020.7345%2015.8962%2020.7345%2015.8578%2020.7345C15.8193%2020.6963%2015.7808%2020.6963%2015.7808%2020.6963ZM14.1257%2017.9036C13.125%2017.9036%2012.2782%2018.6304%2012.1243%2019.5868C12.2012%2019.5103%2012.2782%2019.4721%2012.3552%2019.4721V19.4338C12.5476%2018.6687%2013.279%2018.0948%2014.0872%2018.0948C14.8955%2018.0948%2015.6268%2018.6687%2015.8193%2019.4338C15.8962%2019.4338%2015.9732%2019.4721%2016.0887%2019.5103C15.9347%2018.6304%2015.1265%2017.9036%2014.1257%2017.9036ZM18.6291%2039.0206C18.6291%2038.026%2019.4374%2037.2608%2020.3996%2037.2608C20.669%2037.2608%2020.9384%2037.3374%2021.1694%2037.4139H21.2079C21.2464%2037.3756%2021.2849%2037.2991%2021.3619%2037.2608C21.0924%2037.1078%2020.746%2037.0313%2020.3996%2037.0313C19.2834%2037.0313%2018.3981%2037.9112%2018.3981%2039.0206C18.3981%2039.2119%2018.4366%2039.4031%2018.4751%2039.5944C18.5136%2039.5562%2018.5906%2039.5179%2018.6291%2039.4797C18.6676%2039.4797%2018.6676%2039.4414%2018.706%2039.4414V39.4031C18.6291%2039.2884%2018.6291%2039.1736%2018.6291%2039.0206ZM20.4381%2037.6817C20.5536%2037.6817%2020.6306%2037.6817%2020.746%2037.72C20.7845%2037.6817%2020.823%2037.6434%2020.8999%2037.6051C20.746%2037.5669%2020.6306%2037.5287%2020.4766%2037.5287C19.6683%2037.5287%2018.9754%2038.179%2018.9754%2039.0206C18.9754%2039.1354%2018.9755%2039.2501%2019.0139%2039.4031C19.0524%2039.3649%2019.0909%2039.3267%2019.1294%2039.2884C19.1294%2039.2119%2019.0909%2039.1354%2019.0909%2039.0589C19.0524%2038.2938%2019.6683%2037.6817%2020.4381%2037.6817Z'%20fill='%23000667'/%3e%3cpath%20d='M21.3236%2023.3358C21.3236%2023.3358%2021.3621%2023.5271%2021.5545%2023.7184C21.7085%2023.9097%2022.0164%2024.0244%2022.0164%2024.0244C22.0164%2024.0244%2022.0549%2024.2157%2022.1704%2024.4453C22.2858%2024.6747%2022.5938%2024.7895%2022.5938%2024.7895C22.5938%2024.7895%2022.6322%2025.0573%2022.7092%2025.1721C22.7862%2025.3251%2023.0172%2025.4781%2023.0172%2025.4781C23.0172%2025.4781%2022.9402%2025.5929%2022.9787%2025.7459C23.0557%2025.9372%2023.1327%2026.0137%2023.1327%2026.0137C23.0172%2026.4727%2023.4021%2026.6258%2023.4021%2026.6258C23.6715%2026.7788%2024.0949%2026.511%2024.0949%2026.511C24.0949%2026.511%2024.4798%2026.5493%2024.7107%2026.2432C24.9802%2025.8989%2024.4028%2025.7077%2024.4028%2025.7077C24.4028%2025.7077%2024.4798%2025.5929%2024.3643%2025.3634C24.2488%2025.1338%2023.9794%2025.0573%2023.9794%2025.0573C23.9794%2025.0573%2023.9794%2024.866%2023.9024%2024.5983C23.8255%2024.3304%2023.4405%2024.1392%2023.4405%2024.1392C23.4405%2024.1392%2023.479%2023.9861%2023.3636%2023.7566C23.2096%2023.4506%2022.8247%2023.2593%2022.8247%2023.2593C22.8247%2023.2593%2022.7477%2023.1063%2022.6322%2022.8768C22.3243%2022.5707%2021.978%2022.5707%2021.978%2022.5707C21.978%2022.5707%2021.901%2022.2264%2021.7855%2022.1116C21.593%2021.9204%2021.2081%2021.8438%2021.2081%2021.8438C21.2081%2021.8438%2021.1697%2021.6908%2020.9387%2021.4613C20.7463%2021.27%2020.2844%2021.2318%2020.2844%2021.2318C20.2844%2021.2318%2020.2459%2021.0405%2020.015%2020.8492C19.7455%2020.6579%2019.3606%2020.6962%2019.3606%2020.6962C19.3606%2020.6962%2019.3606%2020.5814%2019.0142%2020.3519C18.6678%2020.1223%2018.3598%2020.1989%2018.3598%2020.1989C18.3598%2020.1989%2018.2444%2020.0458%2018.0135%2019.9311C17.744%2019.778%2017.3591%2019.8546%2017.3591%2019.8546C17.3591%2019.8546%2017.2437%2019.7015%2016.8973%2019.5868C16.5508%2019.472%2016.2429%2019.625%2016.2429%2019.625C15.935%2019.3572%2015.6656%2019.5103%2015.6656%2019.5103C15.6656%2019.5103%2015.6271%2019.2425%2015.3191%2019.2807C14.7033%2019.3955%2014.8958%2019.8928%2014.8958%2019.8928C14.8958%2019.8928%2014.7803%2019.9693%2014.7418%2020.2371C14.7033%2020.5049%2014.8958%2020.6579%2015.0882%2020.6962C15.2422%2020.7345%2015.5501%2020.6196%2015.5501%2020.6196C15.5501%2020.6196%2015.6656%2020.7345%2015.8195%2020.7345C15.9735%2020.7345%2016.1659%2020.7345%2016.1659%2020.7345C16.1659%2020.7345%2016.2814%2020.8492%2016.5508%2020.9257C16.8203%2021.0022%2017.1282%2020.9257%2017.1282%2020.9257C17.1282%2020.9257%2017.1282%2021.0405%2017.3976%2021.1552C17.6671%2021.27%2017.9365%2021.1935%2017.9365%2021.1935C17.9365%2021.1935%2018.0905%2021.4231%2018.3598%2021.5761C18.5908%2021.6908%2018.8988%2021.6526%2018.8988%2021.6526C18.8988%2021.6526%2019.0527%2021.8438%2019.2836%2021.9969C19.4761%2022.1499%2019.8225%2022.1881%2019.8225%2022.1881C19.8225%2022.1881%2019.938%2022.4177%2020.0919%2022.5707C20.2459%2022.6855%2020.6308%2022.762%2020.6308%2022.762C20.6308%2022.762%2020.7847%2023.0298%2020.9002%2023.1445C20.9772%2023.1828%2021.3236%2023.3358%2021.3236%2023.3358ZM23.7485%2026.5875C23.71%2026.6258%2023.5175%2026.5875%2023.4405%2026.5493C23.3636%2026.511%2023.3251%2026.4345%2023.3251%2026.3963C23.3251%2026.358%2023.3251%2026.358%2023.3636%2026.3197C23.3636%2026.3197%2023.402%2026.3197%2023.4405%2026.3197C23.479%2026.358%2023.5175%2026.358%2023.5945%2026.3963C23.633%2026.3963%2023.6715%2026.4345%2023.71%2026.4345C23.7485%2026.4727%2023.787%2026.4727%2023.787%2026.511C23.787%2026.5493%2023.787%2026.5493%2023.7485%2026.5875ZM24.2488%2025.9754C24.3258%2026.0137%2024.4413%2026.0902%2024.4413%2026.205C24.4413%2026.2815%2024.4028%2026.358%2024.1719%2026.4345C23.787%2026.511%2023.4405%2026.2432%2023.3251%2026.052C23.2481%2025.9372%2023.2481%2025.8989%2023.2866%2025.8607C23.3251%2025.8224%2023.4405%2025.8224%2023.556%2025.8989C23.787%2026.0137%2023.9409%2026.0137%2024.0564%2025.9754C24.0949%2025.9372%2024.1719%2025.9372%2024.2488%2025.9754ZM23.9794%2025.4016C24.0179%2025.5929%2024.0179%2025.7077%2023.9409%2025.7459C23.9024%2025.7841%2023.8255%2025.7841%2023.6715%2025.7077H23.633C23.1711%2025.5929%2022.9787%2025.5164%2022.8632%2025.0573C22.8632%2025.019%2022.8632%2024.9425%2022.9017%2024.9425C22.9402%2024.9043%2023.0557%2024.9426%2023.1711%2024.9808C23.2481%2025.0191%2023.3251%2025.019%2023.4021%2025.0573C23.787%2025.1338%2023.9794%2025.2868%2023.9794%2025.4016ZM23.5175%2024.5983C23.5945%2024.7895%2023.5945%2024.9043%2023.556%2024.9425C23.5175%2024.9808%2023.4405%2024.9808%2023.2866%2024.9425H23.2096C22.6707%2024.7895%2022.4783%2024.7513%2022.2858%2024.2922C22.2858%2024.254%2022.2474%2024.2157%2022.2858%2024.1774C22.3243%2024.1392%2022.4398%2024.1774%2022.6322%2024.2157C22.7092%2024.254%2022.7862%2024.254%2022.8632%2024.2922C23.2866%2024.3304%2023.479%2024.4453%2023.5175%2024.5983ZM22.9402%2023.6801C23.0172%2023.8714%2023.0172%2023.9479%2022.9787%2024.0244C22.9402%2024.0627%2022.8632%2024.0627%2022.7092%2024.0627H22.6322C22.0934%2024.0244%2021.8625%2023.9861%2021.67%2023.5654C21.6315%2023.5271%2021.6315%2023.4888%2021.67%2023.4506C21.7085%2023.3741%2021.8625%2023.4123%2022.0164%2023.4506C22.0934%2023.4506%2022.1704%2023.4888%2022.2474%2023.4888C22.6707%2023.4888%2022.8632%2023.5654%2022.9402%2023.6801ZM22.2474%2022.9915C22.3243%2023.1063%2022.3628%2023.1828%2022.3243%2023.2211C22.2859%2023.2975%2022.2089%2023.2975%2022.0934%2023.2975C21.516%2023.2975%2021.2081%2023.1828%2021.0157%2022.915C20.9772%2022.8385%2020.9772%2022.8002%2020.9772%2022.762C21.0157%2022.6855%2021.1697%2022.6855%2021.3621%2022.6855C21.439%2022.6855%2021.5545%2022.6855%2021.6315%2022.6855C21.901%2022.7237%2022.1319%2022.8385%2022.2474%2022.9915ZM15.0497%2019.625C15.0497%2019.5485%2015.0882%2019.5103%2015.1652%2019.472C15.2422%2019.472%2015.2807%2019.472%2015.3191%2019.472L15.3576%2019.5103C15.3576%2019.5103%2015.2037%2019.5868%2015.1652%2019.6633C15.1267%2019.7015%2015.1267%2019.7015%2015.1267%2019.7015C15.0497%2019.7398%2015.0497%2019.7015%2015.0497%2019.625ZM15.3961%2020.3902C15.3961%2020.4284%2015.3961%2020.4666%2015.3576%2020.5049C15.2807%2020.5432%2015.1267%2020.5432%2015.0497%2020.4666C14.9728%2020.3901%2014.9343%2020.3136%2014.9728%2020.1989C14.9728%2020.1223%2015.0497%2020.0076%2015.2037%2019.8928C15.5116%2019.7015%2015.7426%2019.7398%2015.7426%2019.7398C15.7811%2019.7398%2015.7811%2019.778%2015.7811%2019.8163C15.7811%2019.8546%2015.7426%2019.8928%2015.6656%2019.9693C15.4731%2020.0458%2015.3576%2020.3136%2015.3961%2020.3902ZM15.7426%2020.4666C15.6656%2020.4284%2015.6271%2020.3519%2015.6271%2020.3136C15.6271%2020.1606%2015.858%2020.0076%2016.0505%2019.9311C16.3199%2019.778%2016.5123%2019.778%2016.6663%2019.8546C16.6663%2019.8546%2016.7048%2019.8546%2016.7048%2019.8928C16.7818%2019.9311%2016.8588%2019.9693%2016.8588%2020.0458C16.8588%2020.0841%2016.8203%2020.1606%2016.7048%2020.1989C16.5508%2020.2753%2016.3969%2020.3901%2016.3199%2020.4666C16.1275%2020.5432%2016.012%2020.6196%2015.7426%2020.4666ZM16.5508%2020.6196C16.5123%2020.5814%2016.4738%2020.5432%2016.5123%2020.5049C16.5508%2020.3901%2016.7433%2020.2753%2017.0897%2020.1606C17.3206%2020.0841%2017.5901%2020.0076%2017.744%2020.1223L17.7825%2020.1606C17.8595%2020.1989%2017.9365%2020.2753%2017.9365%2020.3519C17.9365%2020.3901%2017.8595%2020.4284%2017.7825%2020.4666C17.6286%2020.5049%2017.4746%2020.5814%2017.3591%2020.6196C17.0127%2020.7345%2016.7818%2020.8492%2016.5508%2020.6196ZM17.3976%2020.8875C17.3591%2020.8492%2017.3591%2020.8109%2017.3591%2020.8109C17.3976%2020.6579%2017.8595%2020.5432%2018.0135%2020.5049C18.2829%2020.4284%2018.5138%2020.3902%2018.6293%2020.5432C18.6293%2020.5432%2018.6678%2020.5814%2018.7063%2020.6196C18.7833%2020.6962%2018.8603%2020.7345%2018.8603%2020.8109C18.8603%2020.8492%2018.7833%2020.8875%2018.7063%2020.9257C18.5523%2020.9639%2018.4368%2021.0022%2018.3214%2021.0788C18.0135%2021.0788%2017.7825%2021.1935%2017.3976%2020.8875ZM19.2067%2021.4231C18.8988%2021.4995%2018.5908%2021.5378%2018.4368%2021.2318C18.3983%2021.1935%2018.3983%2021.117%2018.4368%2021.0788C18.5138%2020.9257%2018.8218%2020.9257%2019.1682%2020.8875H19.2067C19.5146%2020.8492%2019.6685%2020.9257%2019.784%2021.0405L19.8225%2021.0788C19.8995%2021.1552%2019.938%2021.2318%2019.8995%2021.27C19.861%2021.3083%2019.8225%2021.3465%2019.707%2021.3465C19.5146%2021.3848%2019.3606%2021.3848%2019.2067%2021.4231ZM19.3606%2021.7674C19.3221%2021.6908%2019.3221%2021.6526%2019.3221%2021.6143C19.3991%2021.4995%2019.6685%2021.4613%2019.8995%2021.4613C19.938%2021.4613%2019.9765%2021.4613%2020.015%2021.4613C20.3229%2021.4231%2020.4768%2021.4995%2020.5923%2021.6143L20.6308%2021.6526C20.7078%2021.7291%2020.7463%2021.8056%2020.7078%2021.8438C20.6693%2021.8821%2020.6308%2021.9204%2020.5153%2021.9204C20.3613%2021.9204%2020.2074%2021.9586%2020.0919%2021.9586C19.8225%2022.0351%2019.553%2022.0734%2019.3606%2021.7674ZM20.2074%2022.3412C20.1689%2022.2647%2020.1689%2022.2264%2020.1689%2022.1881C20.2074%2022.0734%2020.4383%2022.0734%2020.6308%2022.0734C20.7078%2022.0734%2020.7463%2022.0734%2020.7847%2022.0734C21.0927%2022.0351%2021.2466%2022.1116%2021.3621%2022.2264L21.4006%2022.2647C21.4775%2022.3412%2021.516%2022.4177%2021.4775%2022.4559C21.439%2022.4942%2021.4006%2022.5324%2021.2851%2022.5324C21.1312%2022.5324%2021.0157%2022.5707%2020.9002%2022.5707C20.6308%2022.6089%2020.4383%2022.6472%2020.2074%2022.3412ZM19.861%2039.6326C19.861%2039.6326%2019.938%2039.5179%2019.784%2039.2884C19.63%2039.0588%2019.4376%2039.0588%2019.2451%2039.1353C19.0912%2039.2118%2018.8988%2039.4796%2018.8988%2039.4796C18.8988%2039.4796%2018.7448%2039.4414%2018.6293%2039.5179C18.4753%2039.5944%2018.3598%2039.7092%2018.3598%2039.7092C18.3598%2039.7092%2018.2059%2039.6709%2017.9365%2039.7857C17.6671%2039.9004%2017.4746%2040.1299%2017.4746%2040.1299C17.4746%2040.1299%2017.3976%2040.0535%2017.0897%2040.0917C16.7818%2040.13%2016.6278%2040.3595%2016.6278%2040.3595C16.6278%2040.3595%2016.3584%2040.2448%2016.0505%2040.3212C15.8196%2040.3595%2015.5886%2040.5891%2015.5886%2040.5891C15.5886%2040.5891%2015.3576%2040.5125%2015.0882%2040.5508C14.8573%2040.5508%2014.5109%2040.7038%2014.5109%2040.7038C14.5109%2040.7038%2014.2799%2040.5508%2014.0875%2040.5508C13.8951%2040.5125%2013.5486%2040.7038%2013.5486%2040.7038C13.5486%2040.7038%2013.2407%2040.5508%2013.0867%2040.5508C12.9328%2040.5125%2012.5864%2040.6273%2012.5864%2040.6273C12.5864%2040.6273%2012.4324%2040.5125%2012.163%2040.436C11.8936%2040.3595%2011.6241%2040.436%2011.6241%2040.436C11.6241%2040.436%2011.4702%2040.283%2011.2392%2040.2065C11.0083%2040.0917%2010.7004%2040.1682%2010.7004%2040.1682C10.7004%2040.1682%2010.5464%2039.9769%2010.3924%2039.9004C10.2385%2039.8239%209.96905%2039.8239%209.96905%2039.8239C9.96905%2039.8239%209.96905%2039.6709%209.85357%2039.5944C9.66111%2039.4796%209.54568%2039.4414%209.54568%2039.4414C9.35321%2038.9823%208.96834%2039.0971%208.96834%2039.0971C8.66039%2039.1353%208.46792%2039.5944%208.46792%2039.5944C8.46792%2039.5944%208.16003%2039.7474%208.12153%2040.1682C8.12153%2040.5891%208.69888%2040.3978%208.69888%2040.3978C8.69888%2040.3978%208.69888%2040.5125%208.92984%2040.6273C9.12225%2040.7421%209.39171%2040.6655%209.39171%2040.6655C9.39171%2040.6655%209.50719%2040.8186%209.73809%2040.9716C9.96905%2041.1246%2010.3924%2041.0481%2010.3924%2041.0481C10.3924%2041.0481%2010.4694%2041.2011%2010.6619%2041.3159C10.9698%2041.4689%2011.3932%2041.3924%2011.3932%2041.3924C11.3932%2041.3924%2011.5471%2041.5072%2011.7781%2041.5837C12.2015%2041.7367%2012.4709%2041.5072%2012.4709%2041.5072C12.4709%2041.5072%2012.7019%2041.7367%2012.8943%2041.775C13.1637%2041.8132%2013.5486%2041.6602%2013.5486%2041.6602C13.5486%2041.6602%2013.7026%2041.775%2013.972%2041.8132C14.2414%2041.8515%2014.6648%2041.622%2014.6648%2041.622C14.6648%2041.622%2014.8188%2041.775%2015.1267%2041.775C15.4731%2041.775%2015.7811%2041.5454%2015.7811%2041.5454C15.7811%2041.5454%2015.858%2041.622%2016.2429%2041.622C16.6663%2041.622%2016.8588%2041.3541%2016.8588%2041.3541C16.8588%2041.3541%2017.0512%2041.4307%2017.3206%2041.3924C17.6286%2041.3541%2017.898%2041.0481%2017.898%2041.0481C17.898%2041.0481%2018.0905%2041.1246%2018.3983%2041.0098C18.7448%2040.8951%2018.8988%2040.5891%2018.8988%2040.5891C19.3221%2040.6273%2019.4376%2040.3595%2019.4376%2040.3595C19.4376%2040.3595%2019.63%2040.5508%2019.861%2040.3595C20.3613%2039.9387%2019.861%2039.6326%2019.861%2039.6326ZM8.73737%2039.4414C8.77587%2039.3649%208.92984%2039.2884%209.00683%2039.2884C9.08376%2039.2884%209.16075%2039.3266%209.16075%2039.3649C9.16075%2039.4031%209.19924%2039.4031%209.16075%2039.4414C9.16075%2039.4414%209.12225%2039.4796%209.08376%2039.4796C9.04527%2039.4796%208.96834%2039.4796%208.92984%2039.5179C8.89135%2039.5179%208.85285%2039.5561%208.77587%2039.5561C8.77587%2039.5179%208.77587%2039.4796%208.73737%2039.4414C8.73737%2039.4796%208.73737%2039.4796%208.73737%2039.4414ZM8.89135%2040.0917C8.85285%2040.13%208.77587%2040.1682%208.73737%2040.2065C8.66039%2040.2448%208.50641%2040.2065%208.46792%2040.1299C8.42943%2040.0917%208.39099%2039.9769%208.54491%2039.7857C8.81436%2039.4796%209.23773%2039.5179%209.46869%2039.5944C9.58418%2039.6326%209.62267%2039.6709%209.62267%2039.7474C9.62267%2039.8239%209.54568%2039.8622%209.35321%2039.9004C9.08376%2039.9004%208.96834%2040.0152%208.89135%2040.0917ZM9.23773%2040.5125C9.08376%2040.3595%209.04527%2040.283%209.04527%2040.2065C9.04527%2040.1299%209.12225%2040.1299%209.27623%2040.0535H9.31472C9.73809%2039.9004%209.96905%2039.8239%2010.3154%2040.1682C10.3539%2040.2065%2010.3924%2040.2448%2010.3539%2040.283C10.3539%2040.3595%2010.2385%2040.3978%2010.0845%2040.436C10.0075%2040.4743%209.93056%2040.4743%209.85357%2040.5125C9.58418%2040.5891%209.35321%2040.6273%209.23773%2040.5125ZM10.123%2040.9334C9.96905%2040.8186%209.89207%2040.7421%209.89207%2040.6655C9.89207%2040.5891%209.96905%2040.5891%2010.0845%2040.5125L10.1615%2040.4743C10.6619%2040.283%2010.8928%2040.2065%2011.2777%2040.4743C11.2777%2040.4743%2011.3547%2040.5125%2011.3547%2040.5891C11.3547%2040.6655%2011.2007%2040.7038%2011.0468%2040.7421C10.9698%2040.7803%2010.8928%2040.7803%2010.8159%2040.8186C10.4694%2040.9716%2010.2385%2041.0098%2010.123%2040.9334ZM11.7781%2041.1246C11.4702%2041.3159%2011.2392%2041.3541%2011.1237%2041.2777C10.9698%2041.1629%2010.8928%2041.1246%2010.8928%2041.0481C10.8928%2040.9716%2010.9698%2040.9334%2011.0853%2040.8951L11.1237%2040.8568C11.5856%2040.5891%2011.7781%2040.4743%2012.2015%2040.7038C12.2399%2040.7421%2012.2784%2040.7421%2012.2784%2040.7803C12.2784%2040.8568%2012.163%2040.9334%2012.009%2041.0098C11.9321%2041.0481%2011.8551%2041.0864%2011.7781%2041.1246ZM12.1245%2041.4689C12.009%2041.4307%2011.9321%2041.3541%2011.9321%2041.3159C11.9321%2041.2394%2011.9705%2041.1629%2012.086%2041.1246C12.5479%2040.7803%2012.8558%2040.6655%2013.1637%2040.8186C13.2407%2040.8568%2013.2792%2040.8951%2013.2792%2040.9334C13.2792%2041.0098%2013.1637%2041.0864%2013.0098%2041.2011C12.9328%2041.2394%2012.8558%2041.3159%2012.8173%2041.3541C12.5479%2041.4689%2012.2784%2041.5072%2012.1245%2041.4689ZM13.7796%2041.3924C13.5486%2041.5837%2013.3561%2041.6602%2013.2022%2041.5837C13.2022%2041.5837%2013.1637%2041.5837%2013.1252%2041.5837C13.0483%2041.5454%2012.9328%2041.5454%2012.9328%2041.4689C12.9328%2041.4307%2012.9713%2041.3541%2013.0483%2041.3159C13.1637%2041.2394%2013.2407%2041.1629%2013.3562%2041.0481C13.5871%2040.8186%2013.7796%2040.6655%2014.0875%2040.8186C14.1645%2040.8568%2014.2029%2040.8951%2014.2029%2040.9334C14.2029%2041.0481%2014.049%2041.1629%2013.8951%2041.2777C13.8566%2041.3159%2013.8181%2041.3541%2013.7796%2041.3924ZM14.7803%2041.3924C14.5494%2041.5837%2014.3569%2041.6602%2014.2029%2041.5837C14.2029%2041.5837%2014.1645%2041.5837%2014.126%2041.5837C14.049%2041.5454%2013.9335%2041.5454%2013.9335%2041.4689C13.9335%2041.4307%2013.972%2041.3541%2014.049%2041.3159C14.1645%2041.2011%2014.2799%2041.1246%2014.3569%2041.0098C14.5878%2040.7803%2014.7803%2040.5891%2015.0882%2040.7421C15.1652%2040.7803%2015.2037%2040.8186%2015.2037%2040.8568C15.2422%2041.0098%2015.0113%2041.1629%2014.8188%2041.3159C14.8573%2041.3541%2014.8188%2041.3924%2014.7803%2041.3924ZM15.858%2041.3159C15.5886%2041.5454%2015.3961%2041.622%2015.2422%2041.5454C15.2422%2041.5454%2015.2037%2041.5454%2015.1652%2041.5454C15.0882%2041.5072%2014.9728%2041.5072%2014.9728%2041.4307C14.9728%2041.3924%2015.0113%2041.3159%2015.0882%2041.2777C15.2422%2041.1629%2015.3191%2041.0481%2015.4346%2040.9716C15.6656%2040.7421%2015.858%2040.5125%2016.2044%2040.6655C16.2814%2040.7038%2016.2814%2040.7421%2016.3199%2040.7803C16.3584%2040.8951%2016.1275%2041.1246%2015.858%2041.3159ZM16.4738%2041.3541C16.4354%2041.3541%2016.3969%2041.3541%2016.3969%2041.3541C16.2814%2041.3541%2016.2044%2041.3541%2016.1659%2041.2777C16.1659%2041.2394%2016.1659%2041.1629%2016.2429%2041.1246C16.3584%2041.0098%2016.3969%2040.8951%2016.4738%2040.7803C16.6278%2040.5125%2016.7818%2040.3212%2017.2437%2040.3212C17.2821%2040.3212%2017.3206%2040.3595%2017.3206%2040.3595C17.3591%2040.5125%2017.0897%2040.8568%2016.9743%2041.0098C16.7818%2041.2394%2016.6278%2041.3924%2016.4738%2041.3541ZM17.9365%2040.7421C17.7825%2040.9334%2017.6286%2041.1629%2017.4361%2041.1629C17.4361%2041.1629%2017.3976%2041.1629%2017.3591%2041.1629C17.2821%2041.1629%2017.1667%2041.1629%2017.1282%2041.0864C17.0897%2041.0481%2017.1282%2040.9716%2017.2052%2040.8951C17.3206%2040.7421%2017.3976%2040.6273%2017.4746%2040.5125C17.6286%2040.2448%2017.744%2040.0535%2018.0905%2040.0535C18.1674%2040.0535%2018.2059%2040.0917%2018.2059%2040.1299C18.2829%2040.2065%2018.1674%2040.436%2017.9365%2040.7421ZM18.9372%2040.3595C18.7833%2040.6273%2018.6678%2040.7803%2018.5138%2040.7803C18.5138%2040.7803%2018.4753%2040.7803%2018.4368%2040.7803C18.3599%2040.7803%2018.2444%2040.8186%2018.2059%2040.7421C18.1674%2040.7038%2018.2059%2040.6273%2018.2444%2040.5508C18.3599%2040.3978%2018.3983%2040.2448%2018.3983%2040.0917C18.4753%2039.8622%2018.5138%2039.7092%2018.8218%2039.7092C18.8988%2039.7092%2018.9757%2039.7474%2019.0142%2039.7857C19.1297%2039.9004%2019.0527%2040.1682%2018.9372%2040.3595ZM19.63%2039.8239C19.5146%2040.1682%2019.2836%2040.2448%2019.2836%2040.2448C19.2451%2040.2448%2019.2067%2040.2448%2019.2067%2040.2065C19.1682%2040.1682%2019.2067%2040.0917%2019.2451%2040.0152C19.3606%2039.8239%2019.2836%2039.5561%2019.2067%2039.5179C19.1682%2039.4796%2019.1682%2039.4414%2019.1682%2039.4031C19.2067%2039.3266%2019.3221%2039.2501%2019.4376%2039.2501C19.553%2039.2501%2019.5915%2039.3266%2019.6685%2039.4031C19.6685%2039.5179%2019.707%2039.6326%2019.63%2039.8239ZM19.861%2040.1682C19.8225%2040.2065%2019.7455%2040.2448%2019.707%2040.2448C19.6685%2040.2448%2019.6685%2040.2448%2019.6685%2040.2448C19.6685%2040.2065%2019.7455%2040.0917%2019.7455%2040.0152C19.7455%2039.9769%2019.784%2039.9769%2019.784%2039.9769C19.8225%2039.9769%2019.861%2040.0152%2019.8995%2040.0535C19.938%2040.0152%2019.938%2040.0917%2019.861%2040.1682ZM8.50641%2022.1116C8.50641%2022.1116%208.85286%2022.0351%209.04527%2021.9204C9.23773%2021.7674%209.4302%2021.5761%209.4302%2021.5761C9.4302%2021.5761%209.73809%2021.6143%209.96905%2021.4995C10.2385%2021.3848%2010.3924%2021.117%2010.3924%2021.117C10.3924%2021.117%2010.6619%2021.1935%2010.9313%2021.0788C11.2007%2020.964%2011.2007%2020.8492%2011.2007%2020.8492C11.2007%2020.8492%2011.4702%2020.964%2011.7781%2020.8492C12.0475%2020.7727%2012.163%2020.6579%2012.163%2020.6579C12.163%2020.6579%2012.3554%2020.6579%2012.5094%2020.6579C12.6634%2020.6579%2012.7788%2020.5432%2012.7788%2020.5432C12.7788%2020.5432%2013.0867%2020.6579%2013.2407%2020.6196C13.4331%2020.5814%2013.6256%2020.4666%2013.5871%2020.1606C13.5486%2019.8928%2013.4331%2019.8163%2013.4331%2019.8163C13.4331%2019.8163%2013.6641%2019.319%2013.0098%2019.2042C12.7019%2019.2425%2012.6634%2019.5103%2012.6634%2019.5103C12.6634%2019.5103%2012.3939%2019.3572%2012.086%2019.625C12.086%2019.625%2011.7781%2019.472%2011.4317%2019.5868C11.0853%2019.7015%2010.9698%2019.8546%2010.9698%2019.8546C10.9698%2019.8546%2010.5849%2019.778%2010.3154%2019.9311C10.0845%2020.0458%209.96905%2020.1989%209.96905%2020.1989C9.96905%2020.1989%209.66111%2020.0841%209.31472%2020.3519C8.96834%2020.5814%208.96834%2020.6962%208.96834%2020.6962C8.96834%2020.6962%208.5834%2020.6579%208.314%2020.8492C8.08304%2021.0022%208.04455%2021.2318%208.04455%2021.2318C8.04455%2021.2318%207.58268%2021.27%207.39021%2021.4613C7.19775%2021.6526%207.12082%2021.8438%207.12082%2021.8438C7.12082%2021.8438%206.69739%2021.9204%206.54347%2022.1116C6.42799%2022.2647%206.351%2022.5707%206.351%2022.5707C6.351%2022.5707%206.00456%2022.5707%205.73516%2022.915C5.58119%2023.1445%205.5427%2023.2975%205.5427%2023.2975C5.5427%2023.2975%205.11931%2023.4888%205.00384%2023.7949C4.88837%2023.9861%204.92687%2024.1774%204.92687%2024.1774C4.92687%2024.1774%204.54197%2024.3304%204.46498%2024.6365C4.388%2024.9043%204.388%2025.0956%204.388%2025.0956C4.388%2025.0956%204.11858%2025.2103%204.0031%2025.4016C3.88763%2025.6311%203.96461%2025.7459%203.96461%2025.7459C3.96461%2025.7459%203.38726%2025.9372%203.65669%2026.2815C3.92613%2026.6258%204.27253%2026.5493%204.27253%2026.5493C4.27253%2026.5493%204.65743%2026.817%204.96535%2026.664C4.96535%2026.664%205.31176%2026.511%205.23479%2026.052C5.23479%2026.052%205.35026%2025.9754%205.38874%2025.7841C5.42723%2025.6694%205.35026%2025.5164%205.35026%2025.5164C5.35026%2025.5164%205.58119%2025.3634%205.65818%2025.2103C5.73516%2025.0573%205.77366%2024.8278%205.77366%2024.8278C5.77366%2024.8278%206.04305%2024.6747%206.19703%2024.4835C6.31251%2024.2922%206.351%2024.0627%206.351%2024.0627C6.351%2024.0627%206.6204%2023.9479%206.81287%2023.7566C6.96684%2023.5654%207.04383%2023.3741%207.04383%2023.3741C7.04383%2023.3741%207.39021%2023.2593%207.50569%2023.1445C7.62118%2023.0298%207.77515%2022.762%207.77515%2022.762C7.77515%2022.762%208.16003%2022.6855%208.314%2022.5707C8.39099%2022.3794%208.50641%2022.1116%208.50641%2022.1116ZM12.9713%2019.5485C13.0098%2019.472%2013.0867%2019.472%2013.1637%2019.5103C13.2407%2019.5103%2013.2792%2019.5868%2013.2792%2019.6633C13.2792%2019.7015%2013.2792%2019.778%2013.2407%2019.778C13.2407%2019.778%2013.2022%2019.778%2013.2022%2019.7398C13.1637%2019.6633%2013.0098%2019.5868%2012.9713%2019.5485ZM12.5864%2019.778C12.5864%2019.778%2012.8173%2019.7015%2013.1252%2019.9311C13.3177%2020.0458%2013.3562%2020.1606%2013.3562%2020.2371C13.3562%2020.3519%2013.3177%2020.4284%2013.2792%2020.5049C13.2022%2020.5814%2013.0483%2020.5814%2012.9713%2020.5432C12.9328%2020.5049%2012.8943%2020.4666%2012.9328%2020.4284C12.9713%2020.3519%2012.8558%2020.0841%2012.6634%2019.9693C12.5864%2019.9311%2012.5479%2019.8928%2012.5479%2019.8163C12.5479%2019.778%2012.5864%2019.778%2012.5864%2019.778ZM11.6626%2019.8546C11.7011%2019.8546%2011.7011%2019.8163%2011.7011%2019.8163C11.8551%2019.7398%2012.0475%2019.7398%2012.3169%2019.8928C12.5094%2020.0076%2012.7019%2020.1223%2012.7403%2020.2753C12.7403%2020.3519%2012.7019%2020.3902%2012.6249%2020.4284C12.3554%2020.6196%2012.2399%2020.5049%2012.0475%2020.3519C11.9321%2020.2753%2011.8166%2020.1606%2011.6626%2020.0841C11.5471%2020.0458%2011.5086%2020.0076%2011.5086%2019.9311C11.4702%2019.9311%2011.5856%2019.8928%2011.6626%2019.8546ZM10.5464%2020.1606L10.5849%2020.1223C10.7389%2020.0076%2011.0083%2020.0841%2011.2392%2020.1606C11.6241%2020.2753%2011.8166%2020.3901%2011.8166%2020.5049C11.8166%2020.5432%2011.8166%2020.5814%2011.7781%2020.6196C11.5086%2020.8492%2011.3162%2020.7345%2011.0083%2020.6196C10.8928%2020.5432%2010.7389%2020.5049%2010.5849%2020.4666C10.4694%2020.4284%2010.4309%2020.3901%2010.4309%2020.3519C10.4309%2020.2753%2010.4694%2020.2371%2010.5464%2020.1606ZM9.62267%2020.5814C9.66111%2020.5432%209.66111%2020.5432%209.6996%2020.5049C9.81508%2020.3519%2010.046%2020.4284%2010.3154%2020.4666C10.4694%2020.5049%2010.9313%2020.6196%2010.9698%2020.7727C10.9698%2020.8109%2010.9698%2020.8109%2010.9313%2020.8492C10.5464%2021.1552%2010.3539%2021.0788%2010.046%2020.964C9.93056%2020.9257%209.81508%2020.8492%209.66111%2020.8109C9.54568%2020.7727%209.50719%2020.7727%209.50719%2020.6962C9.46869%2020.6962%209.54568%2020.6196%209.62267%2020.5814ZM8.54491%2021.0788L8.5834%2021.0405C8.69888%2020.8875%208.85286%2020.8492%209.16075%2020.8875H9.23773C9.54568%2020.9257%209.89207%2020.964%209.96905%2021.0788C10.0075%2021.117%209.96905%2021.1935%209.96905%2021.2318C9.77659%2021.5378%209.50719%2021.4613%209.19924%2021.4231C9.04527%2021.3848%208.89135%2021.3848%208.73737%2021.3465C8.62189%2021.3465%208.5834%2021.3083%208.54491%2021.27C8.42943%2021.2318%208.50641%2021.1552%208.54491%2021.0788ZM4.88837%2026.5493C4.81139%2026.5875%204.61894%2026.6258%204.58045%2026.5875L4.54197%2026.5493C4.54197%2026.511%204.58045%2026.511%204.61894%2026.4727C4.65743%2026.4345%204.69592%2026.4345%204.73442%2026.4345C4.81139%2026.3963%204.84989%2026.3963%204.88837%2026.358C4.92686%2026.3197%204.92686%2026.358%204.96535%2026.358C5.00384%2026.358%205.00384%2026.3963%205.00384%2026.4345C5.00384%2026.4345%204.96535%2026.511%204.88837%2026.5493ZM5.04234%2026.052C4.92687%2026.2432%204.58045%2026.511%204.19555%2026.4345C3.96461%2026.3963%203.92613%2026.2815%203.92613%2026.205C3.92613%2026.0902%204.04159%2026.0137%204.11858%2025.9754C4.19555%2025.9372%204.27253%2025.9754%204.31102%2025.9754C4.4265%2025.9754%204.58045%2026.0137%204.81139%2025.8989C4.96535%2025.8224%205.04234%2025.8224%205.08082%2025.8607C5.11931%2025.8607%205.11931%2025.9754%205.04234%2026.052ZM5.42723%2025.0956C5.31176%2025.5546%205.11931%2025.6311%204.65743%2025.7459H4.61894C4.46498%2025.7841%204.388%2025.8224%204.34951%2025.7841C4.31102%2025.7459%204.31102%2025.6311%204.31102%2025.4399C4.34951%2025.2868%204.50347%2025.1721%204.84989%2025.0956C4.92687%2025.0573%205.00384%2025.0573%205.08082%2025.0191C5.23479%2024.9808%205.31176%2024.9426%205.35026%2024.9808C5.42723%2024.9808%205.46572%2025.0191%205.42723%2025.0956ZM6.00456%2024.254C5.81215%2024.713%205.61968%2024.7895%205.08082%2024.9043H5.00384C4.84989%2024.9425%204.7729%2024.9425%204.73442%2024.9043C4.69592%2024.866%204.69592%2024.7513%204.7729%2024.56C4.81139%2024.407%205.00384%2024.2922%205.38874%2024.2157C5.46573%2024.2157%205.54271%2024.1774%205.61968%2024.1392C5.77366%2024.1009%205.92763%2024.0244%205.96607%2024.1009C6.04305%2024.1774%206.00456%2024.2157%206.00456%2024.254ZM6.6204%2023.5271C6.42799%2023.9479%206.23552%2023.9861%205.65818%2024.0244H5.58119C5.42723%2024.0244%205.35026%2024.0627%205.31176%2023.9861C5.27327%2023.9479%205.31176%2023.8331%205.35026%2023.6418C5.38874%2023.4888%205.61968%2023.4123%205.96607%2023.3741C6.04305%2023.3741%206.12004%2023.3741%206.19703%2023.3358C6.3895%2023.2975%206.50498%2023.2975%206.54347%2023.3358C6.65889%2023.4506%206.65889%2023.4888%206.6204%2023.5271ZM7.35172%2022.9532C7.15931%2023.2211%206.85136%2023.3358%206.27402%2023.3358C6.15854%2023.3358%206.08155%2023.2975%206.04305%2023.2593C6.00456%2023.1828%206.04305%2023.1063%206.12004%2023.0298C6.23552%2022.8768%206.46648%2022.762%206.73588%2022.8002C6.81287%2022.8002%206.88985%2022.8002%207.00534%2022.8002C7.19775%2022.8002%207.35172%2022.8002%207.39021%2022.8768C7.39021%2022.8385%207.39021%2022.8768%207.35172%2022.9532ZM8.12153%2022.3412C7.92907%2022.6472%207.69816%2022.6089%207.39021%2022.5707C7.27473%2022.5707%207.15931%2022.5324%207.00534%2022.5324C6.88985%2022.5324%206.85136%2022.4942%206.81287%2022.4559C6.77437%2022.3794%206.85136%2022.3029%206.88986%2022.2647L6.92835%2022.2264C7.04383%2022.0734%207.19775%2022.0351%207.50569%2022.0734C7.54419%2022.0734%207.62118%2022.0734%207.65967%2022.0734C7.85208%2022.0734%208.08304%2022.0734%208.12153%2022.1881C8.16003%2022.2264%208.16003%2022.2647%208.12153%2022.3412ZM7.77515%2021.9204C7.65967%2021.9204%207.62118%2021.8821%207.58268%2021.8438C7.54419%2021.7674%207.62118%2021.6908%207.65967%2021.6526L7.69816%2021.6143C7.81359%2021.4613%207.96756%2021.4231%208.27551%2021.4613C8.314%2021.4613%208.3525%2021.4613%208.39099%2021.4613C8.62189%2021.4613%208.89135%2021.4995%208.96834%2021.6143C9.00683%2021.6526%208.96834%2021.7291%208.92984%2021.7674C8.73737%2022.0734%208.46792%2022.0351%208.16003%2021.9586C8.08304%2021.9586%207.92907%2021.9204%207.77515%2021.9204ZM7.04383%2037.4903C7.04383%2037.4903%207.00534%2037.3756%206.81287%2037.2608C6.69739%2037.1843%206.58191%2037.2226%206.58191%2037.2226C6.58191%2037.2226%206.46648%2036.9548%206.3895%2036.84C6.27402%2036.7252%206.04305%2036.6105%206.04305%2036.6105C6.04305%2036.6105%206.00456%2036.3044%205.85064%2036.1132C5.69667%2035.9219%205.50421%2035.8454%205.50421%2035.8454C5.50421%2035.8454%205.46573%2035.5393%205.35026%2035.3098C5.19629%2035.0803%205.04234%2034.9655%205.04234%2034.9655C5.04234%2034.9655%205.04234%2034.5829%204.92687%2034.4681C4.84989%2034.3534%204.61894%2034.1238%204.61894%2034.1238C4.61894%2034.1238%204.65743%2033.7413%204.58045%2033.5883C4.50347%2033.4353%204.31102%2033.244%204.31102%2033.244C4.31102%2033.244%204.34951%2032.8997%204.27253%2032.6701C4.19555%2032.4406%204.08008%2032.2111%204.08008%2032.2111C4.08008%2032.2111%204.19555%2031.9433%204.19555%2031.7138C4.15706%2031.446%203.96461%2031.2164%203.96461%2031.2164C3.96461%2031.2164%204.11858%2030.9869%204.08008%2030.6809C4.04159%2030.3748%203.92613%2030.3366%203.92613%2030.3366C3.92613%2030.3366%204.08008%2030.1071%204.11858%2029.801C4.11858%2029.4949%204.04159%2029.3802%204.04159%2029.3802C4.04159%2029.3802%204.11858%2029.2272%204.15706%2029.0359C4.19555%2028.8829%204.11858%2028.7681%204.11858%2028.7681C4.11858%2028.7681%204.31102%2028.5003%204.31102%2028.3473C4.34951%2028.156%204.27253%2027.9265%204.0031%2027.8882C3.73367%2027.85%203.61821%2027.9647%203.61821%2027.9647C3.61821%2027.9647%203.11784%2027.5439%202.8484%2028.1177C2.69445%2028.3855%202.96387%2028.5386%202.96387%2028.5386C2.96387%2028.5386%202.73293%2028.7298%202.92538%2029.1124C2.92538%2029.1124%202.69445%2029.3802%202.69445%2029.7245C2.69445%2030.0688%202.80992%2030.2218%202.80992%2030.2218C2.80992%2030.2218%202.61746%2030.5661%202.69445%2030.8721C2.77142%2031.1017%202.8484%2031.2929%202.8484%2031.2929C2.8484%2031.2929%202.65595%2031.5608%202.80992%2031.9433C2.92538%2032.3258%203.04085%2032.3641%203.04085%2032.3641C3.04085%2032.3641%202.8869%2032.7084%203.00237%2033.0527C3.11784%2033.3205%203.27179%2033.4353%203.27179%2033.4353C3.27179%2033.4353%203.15632%2033.8943%203.31029%2034.1238C3.46424%2034.3917%203.57971%2034.4681%203.57971%2034.4681C3.57971%2034.4681%203.54122%2034.889%203.65669%2035.1185C3.73367%2035.2715%204.04159%2035.4246%204.04159%2035.4246C4.04159%2035.4246%203.92613%2035.7689%204.19555%2036.1132C4.34951%2036.3044%204.50347%2036.4192%204.50347%2036.4192C4.50347%2036.4192%204.58045%2036.8783%204.81139%2037.1078C4.96535%2037.2608%205.1578%2037.299%205.1578%2037.299C5.1578%2037.299%205.19629%2037.7199%205.42723%2037.8729C5.65818%2038.0259%205.85064%2038.0642%205.85064%2038.0642C5.85064%2038.0642%205.85064%2038.3319%206.04305%2038.5232C6.23552%2038.6763%206.351%2038.638%206.351%2038.638C6.351%2038.638%206.3895%2039.2501%206.77437%2039.0971C7.15931%2038.9441%207.23624%2038.5998%207.23624%2038.5998C7.23624%2038.5998%207.62118%2038.2937%207.54419%2037.9876C7.54419%2037.9494%207.50569%2037.5669%207.04383%2037.4903ZM3.46424%2028.156C3.61821%2028.003%203.77216%2028.003%203.84914%2028.003C3.96461%2028.003%204.0031%2028.0795%204.08008%2028.156C4.11858%2028.2708%204.08008%2028.3855%204.0031%2028.462C3.96461%2028.5003%203.92613%2028.5003%203.88763%2028.462C3.81066%2028.4238%203.54122%2028.4238%203.38726%2028.5768C3.31029%2028.6533%203.27179%2028.6916%203.2333%2028.6533C3.19482%2028.6533%203.19482%2028.615%203.19482%2028.5768C3.15632%2028.6533%203.19482%2028.3855%203.46424%2028.156ZM3.07934%2028.0412C3.11784%2027.9647%203.19482%2027.9647%203.2333%2027.9647C3.27179%2027.9647%203.31029%2028.003%203.31029%2028.0412C3.31029%2028.0412%203.31029%2028.0795%203.27179%2028.0795C3.19482%2028.1177%203.07934%2028.2325%203.07934%2028.2325C3.07934%2028.2325%203.04085%2028.2325%203.04085%2028.1943C3.04085%2028.156%203.04085%2028.1177%203.07934%2028.0412ZM3.19482%2028.9976C3.34877%2028.8446%203.54122%2028.6916%203.69518%2028.7298C3.77216%2028.7298%203.81066%2028.8063%203.84914%2028.8829C3.96461%2029.1889%203.81066%2029.2654%203.61821%2029.3802C3.50274%2029.4567%203.38726%2029.5332%203.2333%2029.6862C3.15632%2029.7628%203.07934%2029.801%203.04085%2029.801C2.96387%2029.7628%202.96387%2029.6862%202.92538%2029.6097C2.92538%2029.5715%202.92538%2029.5715%202.92538%2029.5332C2.8869%2029.3419%202.96387%2029.1889%203.19482%2028.9976ZM2.92538%2030.6809C2.8484%2030.5278%203.00237%2030.2601%203.15632%2030.0688C3.38726%2029.7628%203.57971%2029.6097%203.65669%2029.6097C3.69518%2029.6097%203.73367%2029.648%203.77216%2029.6862C3.92613%2029.9923%203.73367%2030.1835%203.54122%2030.4131C3.46424%2030.5278%203.34877%2030.6426%203.27179%2030.7956C3.19482%2030.9104%203.15632%2030.9487%203.11783%2030.9487C3.04085%2030.9487%203.00237%2030.8339%202.96387%2030.7574C2.92538%2030.6809%202.92538%2030.6809%202.92538%2030.6809ZM3.00237%2031.6372C2.92538%2031.4842%203.04085%2031.2929%203.15632%2031.0634C3.2333%2030.9104%203.50274%2030.5278%203.65669%2030.5278C3.69518%2030.5278%203.69518%2030.5278%203.73367%2030.6044C3.92613%2031.0634%203.77216%2031.2164%203.57971%2031.4842C3.50274%2031.599%203.42576%2031.6755%203.34877%2031.8285C3.31029%2031.9051%203.2333%2031.9433%203.19482%2031.9433C3.11784%2031.9433%203.07934%2031.8285%203.04085%2031.752C3.04085%2031.7138%203.04085%2031.6755%203.00237%2031.6372ZM3.2333%2032.8997L3.19482%2032.8614C3.07934%2032.7084%203.07934%2032.5554%203.2333%2032.2494L3.27179%2032.2111C3.38726%2031.9051%203.54122%2031.6372%203.69518%2031.599C3.73368%2031.599%203.81066%2031.599%203.84914%2031.6755C4.08008%2031.9433%203.96461%2032.1728%203.77216%2032.4789C3.69518%2032.5937%203.61821%2032.7467%203.57971%2032.8997C3.54122%2033.0144%203.50274%2033.0527%203.46424%2033.0527C3.34877%2033.0527%203.27179%2032.938%203.2333%2032.8997ZM3.69518%2034.0474C3.61821%2034.0474%203.57971%2033.9708%203.54122%2033.8943L3.50274%2033.8561C3.38726%2033.7031%203.38726%2033.55%203.54122%2033.244C3.54122%2033.2057%203.57971%2033.1675%203.57971%2033.1292C3.65669%2032.8997%203.77216%2032.6701%203.88763%2032.6319C3.92613%2032.6319%204.0031%2032.6319%204.04159%2032.7084C4.27253%2032.9762%204.15706%2033.2057%204.0031%2033.4735C3.92613%2033.5883%203.88763%2033.7031%203.84914%2033.8561C3.77216%2033.9708%203.73368%2034.0474%203.69518%2034.0474ZM4.15706%2034.8124C4.11858%2034.9272%204.08008%2034.9655%204.04159%2034.9655C3.96461%2034.9655%203.92613%2034.889%203.88763%2034.8124L3.84914%2034.7742C3.73367%2034.6212%203.73368%2034.4681%203.88763%2034.1621C3.92613%2034.1239%203.92613%2034.0474%203.96461%2034.0091C4.04159%2033.8178%204.11858%2033.6265%204.19555%2033.5883C4.23405%2033.5883%204.27253%2033.5883%204.34951%2033.6648C4.58045%2033.9326%204.50347%2034.1621%204.34951%2034.4299C4.27253%2034.5447%204.23405%2034.6977%204.15706%2034.8124ZM4.54197%2035.9219C4.46498%2035.9219%204.388%2035.8836%204.31102%2035.7689C4.19555%2035.6159%204.15706%2035.3863%204.27253%2035.1185C4.31103%2035.042%204.31102%2034.9655%204.34951%2034.889C4.388%2034.6977%204.4265%2034.5447%204.50347%2034.5447C4.54197%2034.5447%204.58045%2034.5447%204.61894%2034.6212C4.84989%2034.889%204.84988%2035.195%204.65743%2035.7306C4.65743%2035.8454%204.61894%2035.9219%204.54197%2035.9219ZM5.23479%2036.4957V36.5722C5.19629%2036.7252%205.19629%2036.8017%205.11931%2036.8017C5.04234%2036.8017%204.96535%2036.7635%204.81139%2036.6487C4.69592%2036.5722%204.65743%2036.3427%204.73442%2035.9984C4.7729%2035.9219%204.7729%2035.8453%204.7729%2035.7689C4.81139%2035.5776%204.81139%2035.4628%204.88837%2035.4246C4.92686%2035.4246%204.96535%2035.4246%205.00384%2035.4628C5.35026%2035.7306%205.35026%2035.9601%205.23479%2036.4957ZM5.88914%2037.299V37.3756C5.88914%2037.5286%205.88914%2037.6051%205.81215%2037.6051C5.73516%2037.6433%205.65818%2037.5669%205.50421%2037.4521C5.35026%2037.3756%205.31176%2037.146%205.35026%2036.7635C5.35026%2036.687%205.35026%2036.6105%205.35026%2036.534C5.35026%2036.3427%205.35026%2036.2279%205.42723%2036.1897C5.46572%2036.1514%205.5427%2036.1897%205.5427%2036.2279C5.88914%2036.534%205.88914%2036.7635%205.88914%2037.299ZM6.54347%2037.9494C6.54347%2038.1407%206.54347%2038.2172%206.46648%2038.2555C6.3895%2038.2937%206.31251%2038.2555%206.12004%2038.1789C5.96607%2038.1025%205.92763%2037.9112%205.96607%2037.5669C5.96607%2037.4903%205.96607%2037.4138%205.96607%2037.3373C5.96607%2037.1843%205.96607%2037.1078%206.00456%2037.0695C6.04305%2037.0695%206.08155%2037.0695%206.12004%2037.0695C6.54347%2037.2608%206.58191%2037.4903%206.54347%2037.9494ZM7.08232%2038.5998C6.96684%2038.7911%206.85136%2038.7911%206.77437%2038.7911C6.65889%2038.7528%206.6204%2038.638%206.6204%2038.5615C6.6204%2038.485%206.65889%2038.4085%206.69739%2038.3702C6.73588%2038.2555%206.81287%2038.1407%206.77437%2037.8729C6.73588%2037.7199%206.77437%2037.6051%206.81287%2037.6051C6.85136%2037.5669%206.92835%2037.6051%207.00534%2037.7199C7.12082%2037.8729%207.23624%2038.2555%207.08232%2038.5998ZM7.35172%2038.2937C7.31323%2038.2937%207.31323%2038.2937%207.35172%2038.2937C7.27473%2038.2937%207.27473%2038.2555%207.27473%2038.2172C7.27473%2038.1789%207.27473%2038.1025%207.27473%2038.0642C7.27473%2037.9876%207.27473%2037.9494%207.23624%2037.9112C7.23624%2037.8729%207.23624%2037.8729%207.23624%2037.8346C7.23624%2037.8346%207.27473%2037.7964%207.31323%2037.8346C7.35172%2037.8346%207.42871%2037.8729%207.42871%2037.9876C7.42871%2038.0642%207.39021%2038.2555%207.35172%2038.2937ZM25.365%2030.1835C25.365%2030.1835%2025.4805%2030.0305%2025.4805%2029.6862C25.4805%2029.3419%2025.2496%2029.0741%2025.2496%2029.0741C25.442%2028.6916%2025.2111%2028.5003%2025.2111%2028.5003C25.2111%2028.5003%2025.4805%2028.3473%2025.3266%2028.0795C25.0572%2027.5057%2024.6337%2027.8882%2024.6337%2027.8882C24.6337%2027.8882%2024.5567%2027.8117%2024.2488%2027.8117C23.9794%2027.85%2023.9024%2028.0412%2023.9409%2028.2708C23.9409%2028.462%2024.1334%2028.6916%2024.1334%2028.6916C24.1334%2028.6916%2024.0564%2028.8063%2024.0949%2028.9593C24.1334%2029.1124%2024.2104%2029.3036%2024.2104%2029.3036C24.2104%2029.3036%2024.1334%2029.4567%2024.1334%2029.7245C24.1334%2030.0305%2024.3258%2030.2601%2024.3258%2030.2601C24.3258%2030.2601%2024.2104%2030.2983%2024.1719%2030.6044C24.1334%2030.9104%2024.2873%2031.1399%2024.2873%2031.1399C24.2873%2031.1399%2024.0949%2031.3695%2024.0564%2031.6372C24.0179%2031.8668%2024.1719%2032.1346%2024.1719%2032.1346C24.1719%2032.1346%2024.0179%2032.3258%2023.9794%2032.5937C23.9024%2032.8232%2023.9409%2033.1675%2023.9409%2033.1675C23.9409%2033.1675%2023.7485%2033.3587%2023.6715%2033.5118C23.5945%2033.6648%2023.633%2034.0474%2023.633%2034.0474C23.633%2034.0474%2023.4021%2034.2769%2023.3251%2034.3917C23.2481%2034.5064%2023.2096%2034.889%2023.2096%2034.889C23.2096%2034.889%2023.0557%2035.0037%2022.9017%2035.2333C22.7477%2035.4628%2022.7477%2035.7689%2022.7477%2035.7689C22.7477%2035.7689%2022.5553%2035.8454%2022.4013%2036.0366C22.2474%2036.2279%2022.2089%2036.534%2022.2089%2036.534C22.2089%2036.534%2021.978%2036.6487%2021.8625%2036.7635C21.747%2036.8783%2021.67%2037.146%2021.67%2037.146C21.67%2037.146%2021.516%2037.1078%2021.439%2037.1843C21.2466%2037.299%2021.2081%2037.4138%2021.2081%2037.4138C20.7463%2037.4521%2020.7078%2037.8346%2020.7078%2037.8346C20.6308%2038.1407%2021.0157%2038.4468%2021.0157%2038.4468C21.0157%2038.4468%2021.0927%2038.7911%2021.4775%2038.9441C21.8625%2039.0971%2021.901%2038.485%2021.901%2038.485C21.901%2038.485%2022.0164%2038.5232%2022.2089%2038.3702C22.4013%2038.2172%2022.4013%2037.9112%2022.4013%2037.9112C22.4013%2037.9112%2022.5938%2037.8346%2022.8247%2037.7199C23.0557%2037.5669%2023.0942%2037.146%2023.0942%2037.146C23.0942%2037.146%2023.2481%2037.1078%2023.4405%2036.9548C23.6715%2036.7252%2023.7485%2036.2662%2023.7485%2036.2662C23.7485%2036.2662%2023.9024%2036.1514%2024.0564%2035.9601C24.3258%2035.6159%2024.2104%2035.2715%2024.2104%2035.2715C24.2104%2035.2715%2024.5182%2035.1185%2024.5952%2034.9655C24.7492%2034.736%2024.6722%2034.3151%2024.6722%2034.3151C24.6722%2034.3151%2024.8262%2034.2004%2024.9417%2033.9708C25.0572%2033.7413%2024.9802%2033.2823%2024.9802%2033.2823C24.9802%2033.2823%2025.1726%2033.1675%2025.2496%2032.8997C25.365%2032.5554%2025.2111%2032.2111%2025.2111%2032.2111C25.2111%2032.2111%2025.2881%2032.1728%2025.4035%2031.7902C25.519%2031.4077%2025.365%2031.1399%2025.365%2031.1399C25.365%2031.1399%2025.4805%2030.9869%2025.519%2030.7191C25.5575%2030.5278%2025.365%2030.1835%2025.365%2030.1835ZM24.8647%2028.0412C24.8647%2028.003%2024.9032%2027.9647%2024.9417%2027.9647C25.0187%2027.9647%2025.0956%2027.9647%2025.0956%2028.0412C25.1341%2028.1177%2025.1341%2028.156%2025.1341%2028.1943C25.1341%2028.2325%2025.0956%2028.2325%2025.0956%2028.2325C25.0956%2028.2325%2024.9802%2028.1177%2024.9032%2028.0795C24.8647%2028.0795%2024.8647%2028.0412%2024.8647%2028.0412ZM24.1719%2028.5003C24.0949%2028.4238%2024.0564%2028.309%2024.0949%2028.1943C24.1334%2028.1177%2024.2104%2028.0412%2024.3258%2028.0412C24.4028%2028.0412%2024.5567%2028.0412%2024.7107%2028.1943C24.9802%2028.4238%2025.0187%2028.6533%2025.0187%2028.6533C25.0187%2028.6916%2025.0187%2028.7298%2024.9802%2028.7298C24.9417%2028.7298%2024.8647%2028.7298%2024.8262%2028.6533C24.6722%2028.5003%2024.4028%2028.5003%2024.3258%2028.5386C24.2873%2028.5386%2024.2104%2028.5386%2024.1719%2028.5003ZM24.3643%2028.8446C24.4028%2028.7681%2024.4413%2028.6916%2024.5182%2028.6916C24.6722%2028.6533%2024.8647%2028.8063%2025.0187%2028.9593C25.2111%2029.1506%2025.3266%2029.3419%2025.2881%2029.4949C25.2881%2029.4949%2025.2881%2029.5332%2025.2881%2029.5715C25.2881%2029.648%2025.2496%2029.7628%2025.1726%2029.7628C25.1341%2029.7628%2025.0572%2029.7245%2024.9802%2029.648C24.8647%2029.4949%2024.7107%2029.4185%2024.5952%2029.3419C24.3643%2029.2654%2024.2488%2029.1506%2024.3643%2028.8446ZM20.9772%2037.9112C20.9772%2037.9494%2020.9387%2038.0259%2020.9387%2038.0642C20.9387%2038.1025%2020.9387%2038.1407%2020.9387%2038.2172C20.9387%2038.2555%2020.9002%2038.2937%2020.9002%2038.2937H20.8617C20.8232%2038.2555%2020.7847%2038.0642%2020.7847%2037.9876C20.7847%2037.9112%2020.8617%2037.8729%2020.9002%2037.8346C20.9387%2037.8346%2020.9387%2037.8346%2020.9772%2037.8346C20.9772%2037.8729%2020.9772%2037.8729%2020.9772%2037.9112ZM21.4006%2038.7911C21.3236%2038.7911%2021.2466%2038.7911%2021.0927%2038.5998C20.9002%2038.2555%2021.0542%2037.8346%2021.2081%2037.6816C21.2851%2037.6051%2021.3621%2037.5286%2021.4006%2037.5669C21.4775%2037.6051%2021.4775%2037.6816%2021.439%2037.8346C21.4006%2038.1025%2021.439%2038.2172%2021.516%2038.332C21.5545%2038.4085%2021.5545%2038.4468%2021.593%2038.5232C21.5545%2038.638%2021.516%2038.7528%2021.4006%2038.7911ZM22.0164%2038.1407C21.824%2038.2172%2021.747%2038.2555%2021.67%2038.2172C21.593%2038.1789%2021.593%2038.1025%2021.593%2037.9494V37.9112C21.593%2037.4521%2021.593%2037.2226%2022.0164%2036.993C22.0549%2036.9548%2022.0934%2036.9548%2022.1319%2036.993C22.2089%2037.0313%2022.1704%2037.146%2022.1704%2037.2608C22.1704%2037.3373%2022.1704%2037.4138%2022.1704%2037.4903C22.2089%2037.8729%2022.1704%2038.1025%2022.0164%2038.1407ZM22.6707%2037.4903C22.5168%2037.6051%2022.4013%2037.6433%2022.3628%2037.6433C22.3243%2037.6051%2022.2858%2037.5286%2022.2858%2037.4138V37.3373C22.2474%2036.8017%2022.2474%2036.5722%2022.6322%2036.2662C22.6322%2036.2662%2022.7092%2036.2279%2022.7477%2036.2279C22.8247%2036.2662%2022.8247%2036.3809%2022.8247%2036.5722C22.8247%2036.6487%2022.8247%2036.7252%2022.8247%2036.8017C22.8632%2037.146%2022.8247%2037.4138%2022.6707%2037.4903ZM23.3636%2036.6487C23.2096%2036.7635%2023.1327%2036.8017%2023.0557%2036.8017C22.9787%2036.7635%2022.9787%2036.687%2022.9402%2036.5722V36.4957C22.8247%2035.9601%2022.7862%2035.7306%2023.1327%2035.4246C23.1711%2035.3863%2023.2096%2035.3863%2023.2481%2035.3863C23.3251%2035.4246%2023.3251%2035.5393%2023.3636%2035.7306C23.3636%2035.8071%2023.4021%2035.8836%2023.4021%2035.9601C23.479%2036.3427%2023.479%2036.5722%2023.3636%2036.6487ZM23.8255%2035.7689C23.7485%2035.8836%2023.6715%2035.9219%2023.5945%2035.9219C23.5175%2035.9219%2023.479%2035.8454%2023.4405%2035.7306C23.2481%2035.195%2023.2866%2034.8507%2023.479%2034.6212C23.5175%2034.5829%2023.556%2034.5447%2023.5945%2034.5447C23.6715%2034.5447%2023.71%2034.6977%2023.7485%2034.889C23.787%2034.9655%2023.787%2035.042%2023.8255%2035.1185C24.0179%2035.3863%2023.9409%2035.6541%2023.8255%2035.7689ZM24.3258%2034.7742L24.2873%2034.8124C24.2488%2034.889%2024.1719%2034.9655%2024.1334%2034.9655C24.0949%2034.9655%2024.0564%2034.889%2024.0179%2034.8124C23.9794%2034.6594%2023.9024%2034.5447%2023.8639%2034.4681C23.71%2034.1621%2023.633%2033.9708%2023.8639%2033.7031C23.9024%2033.6648%2023.9794%2033.6265%2024.0179%2033.6265C24.1334%2033.6648%2024.1719%2033.8178%2024.2488%2034.0474C24.2873%2034.1238%2024.2873%2034.1621%2024.3258%2034.2004C24.4028%2034.4681%2024.4413%2034.6594%2024.3258%2034.7742ZM24.6722%2033.8178L24.6337%2033.8561C24.5952%2033.9326%2024.5182%2034.0091%2024.4798%2034.0091C24.4413%2034.0091%2024.4028%2033.9326%2024.3643%2033.8561C24.3258%2033.7031%2024.2488%2033.5883%2024.2104%2033.4735C24.0564%2033.1675%2023.9409%2032.9762%2024.1719%2032.7084C24.2104%2032.6701%2024.2488%2032.6319%2024.3258%2032.6319C24.4798%2032.6701%2024.5567%2032.8997%2024.6337%2033.1292C24.6337%2033.1675%2024.6722%2033.2057%2024.6722%2033.244C24.7877%2033.5118%2024.7877%2033.703%2024.6722%2033.8178ZM24.9802%2032.8614L24.9417%2032.8997C24.9032%2032.9762%2024.8262%2033.0527%2024.7877%2033.0527C24.7492%2033.0527%2024.7107%2032.9762%2024.6722%2032.8997C24.6337%2032.7467%2024.5567%2032.5937%2024.4798%2032.4789C24.3258%2032.1728%2024.2104%2031.9433%2024.4028%2031.6755C24.4413%2031.6372%2024.4798%2031.599%2024.5567%2031.599C24.7107%2031.6372%2024.8647%2031.9815%2024.9802%2032.2111L25.0187%2032.2494C25.0572%2032.5171%2025.0572%2032.7084%2024.9802%2032.8614ZM25.1726%2031.6372C25.1726%2031.6755%2025.1341%2031.6755%2025.1341%2031.7138C25.0956%2031.7903%2025.0572%2031.9051%2024.9802%2031.9051C24.9417%2031.9051%2024.9032%2031.8668%2024.8262%2031.7902C24.7492%2031.6372%2024.6722%2031.5608%2024.5952%2031.446C24.4028%2031.2164%2024.2488%2030.9869%2024.4413%2030.5661C24.4798%2030.5278%2024.4798%2030.5278%2024.5182%2030.4896C24.6722%2030.4896%2024.9417%2030.8721%2025.0187%2031.0252C25.1341%2031.2929%2025.2496%2031.4842%2025.1726%2031.6372ZM25.2496%2030.6809C25.2496%2030.6809%2025.2496%2030.7191%2025.2111%2030.7191C25.1726%2030.7956%2025.1341%2030.8721%2025.0572%2030.9104C25.0187%2030.9104%2024.9417%2030.8721%2024.9032%2030.7574C24.8262%2030.6044%2024.7107%2030.4896%2024.6337%2030.3748C24.4413%2030.1453%2024.2873%2029.954%2024.4028%2029.648C24.4413%2029.6097%2024.4413%2029.5715%2024.5182%2029.5715C24.6337%2029.5715%2024.7877%2029.7245%2025.0187%2030.0305C25.1726%2030.2601%2025.3266%2030.4896%2025.2496%2030.6809Z'%20fill='%23000667'/%3e%3cpath%20d='M42.5317%2017.2915H44.8796V22.3795L49.075%2017.2915H51.9617L47.1505%2022.8768L52.1157%2029.1507H49.075L44.8796%2023.6419H44.8411V29.1507H42.4932V17.2915H42.5317Z'%20fill='%23000667'/%3e%3cpath%20d='M61.1606%2024.4453L56.9263%2017.2915H59.6591L62.3919%2022.2647L65.2018%2017.2915H67.6651L63.5084%2024.4453V29.1124H61.1606V24.4453Z'%20fill='%23000667'/%3e%3cpath%20d='M79.2512%2019.472C78.5196%2019.1277%2077.7115%2018.9364%2076.8645%2018.9364C76.0564%2018.9364%2075.017%2019.2807%2075.017%2020.5814C75.017%2022.6472%2080.1365%2021.7673%2080.1365%2025.7459C80.1365%2028.3473%2078.0964%2029.3419%2075.7486%2029.3419C74.4784%2029.3419%2073.901%2029.1889%2072.785%2028.8828L72.9775%2026.7405C73.7856%2027.1614%2074.6709%2027.4674%2075.5944%2027.4674C76.4796%2027.4674%2077.6732%2027.0084%2077.6732%2025.9372C77.6732%2023.6801%2072.5537%2024.5982%2072.5537%2020.6579C72.5537%2018.0183%2074.5938%2017.0237%2076.6338%2017.0237C77.6344%2017.0237%2078.5585%2017.1767%2079.4437%2017.4445L79.2512%2019.472Z'%20fill='%23000667'/%3e%3cpath%20d='M89.4505%2019.166H86.1021V17.2915H95.1086V19.166H91.7601V29.1507H89.4123V19.166H89.4505Z'%20fill='%23000667'/%3e%3cpath%20d='M100.497%2017.2915H102.999L105.963%2026.6258H106.001L108.965%2017.2915H111.274L107.348%2029.1507H104.462L100.497%2017.2915Z'%20fill='%23000667'/%3e%3cpath%20d='M117.625%2017.2915H124.515V19.166H119.973V22.0734H124.131V23.948H119.973V27.2762H124.554V29.1507H117.664V17.2915H117.625Z'%20fill='%23000667'/%3e%3cpath%20d='M131.982%2017.2914H134.522C137.024%2017.2914%20139.988%2017.2149%20139.988%2020.5049C139.988%2021.8821%20139.064%2023.068%20137.602%2023.2593V23.2975C138.217%2023.3358%20138.602%2023.9861%20138.833%2024.5217L140.72%2029.1506H138.102L136.717%2025.4398C136.37%2024.5599%20136.1%2024.2157%20135.1%2024.2157H134.33V29.1506H131.982V17.2914ZM134.33%2022.3412H135.1C136.254%2022.3412%20137.563%2022.1881%20137.563%2020.6962C137.563%2019.2807%20136.254%2019.1277%20135.1%2019.1277H134.33V22.3412Z'%20fill='%23000667'/%3e%3cpath%20d='M147.648%2017.2915H149.996V22.3795L154.19%2017.2915H157.077L152.266%2022.8768L157.232%2029.1507H154.19L149.996%2023.6419H149.957V29.1507H147.609L147.648%2017.2915Z'%20fill='%23000667'/%3e%3cpath%20d='M163.621%2017.2915H170.511V19.166H165.969V22.0734H170.126V23.948H165.969V27.2762H170.511V29.1507H163.621V17.2915Z'%20fill='%23000667'/%3e%3cpath%20d='M180.056%2019.166H176.708V17.2915H185.714V19.166H182.366V29.1507H180.018V19.166H180.056Z'%20fill='%23000667'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_7584_1130'%3e%3crect%20width='185.714'%20height='46.71'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", O6 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20589.46%2083'%3e%3cdefs%3e%3cclipPath%20id='clippath'%3e%3crect%20width='330'%20height='83'%20style='fill:%20none;'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20style='clip-path:%20url(%23clippath);'%3e%3cg%3e%3cpath%20d='M0,53.84c0,17.88,15.66,25.9,24.96,29.09l.14.07.14-.07c4.58-1.63,11.22-4.69,16.41-9.72,5.61-5.44,8.48-11.9,8.48-19.37V8.36l-.21-.07C41.79,2.79,33.38,0,25.03,0S8.34,2.79.14,8.29l-.14.07v45.48ZM.48,8.84C8.62,3.4,16.82.68,25.03.68s16.48,2.72,24.55,8.16l-.14-.27v45.27c0,7.27-2.8,13.6-8.28,18.9-5.13,4.96-11.7,7.95-16.21,9.58h.21c-9.16-3.06-24.48-10.94-24.48-28.41V8.57l-.21.27Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M14.64,19.1c-2.87,1.09-4.79,2.38-5.2,2.79-.89.82-.55,1.63-.55,1.63h.07s-.07-.61.75-1.36c.34-.34,2.19-1.56,5.13-2.72l-.21-.34Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M25.78,17.06h-1.3c-2.53.14-5.95.75-8.96,1.77l.14.34c2.94-1.02,6.36-1.56,8.89-1.7h1.23c2.53.14,5.88.75,8.89,1.7l.14-.34c-3.08-1.02-6.5-1.63-9.03-1.77Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M35.63,19.1c2.87,1.09,4.79,2.38,5.2,2.79.89.82.55,1.63.55,1.63h-.07s.07-.61-.75-1.36c-.34-.34-2.19-1.56-5.13-2.72l.21-.34Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M44.11,20.26c-1.44-1.9-4.58-2.58-7.66-2.79-.14-3.13-5.81-3.33-10.12-2.52-.41-.61-1.92-.54-2.33,0-4.38-.82-9.99-.61-10.12,2.52-3.15.2-6.29.88-7.73,2.79-1.37,1.9,1.37,3.87,1.37,3.87l.62-.54s-4.58-3.74,5.75-5.57c.48,1.36,1.44,2.04,1.44,2.04l.55-.34s-3.15-5.85,8.07-4.01l.68,2.38s0-.14.21-.14c0,0-.27-2.24-.21-2.45.14-.34.89-.34,1.03,0,.07.2-.21,2.45-.21,2.45.27,0,.21.14.21.14l.68-2.38c11.22-1.84,8.07,4.01,8.07,4.01l.55.34s.96-.68,1.44-2.04c10.4,1.84,5.75,5.57,5.75,5.57l.62.54s2.8-1.97,1.37-3.87ZM7.73,23.52q.07.07.14.14s-.14-.07-.27.07c-.21-.14-.41-.34-.62-.54-1.23-1.43-2.12-4.55,6.77-5.3-9.58,1.63-6.63,5.03-6.02,5.64ZM15.59,19.65c0,.14-.27,0-.27.07-.68-.75-1.03-1.56-1.03-2.31-.07-1.84,2.12-3.4,8-2.38.14,0,.21,0,.34.07h-.14c.34.07.75.14,1.16.2-10.53-1.16-8.48,3.33-8.07,4.35ZM35.02,19.78s0-.07,0,0c-.07-.07-.07,0-.07,0,.07-.2-.27.07-.27-.14v-.14c.48-1.02,2.53-5.44-8-4.21.34-.07.68-.14,1.03-.2h.07c4.86-.95,7.32,0,8,1.43.21.34.27.75.21,1.16-.07.75-.41,1.5-.96,2.11ZM42.81,23.72s0-.07,0,0h-.07c-.07-.07-.14-.07-.14-.07h-.21s.07-.07.14-.14c.07,0,0,0,0,0,.27-.27.82-.88.96-1.63.21-1.29-.89-2.99-6.84-4.08,10.53.88,7.39,5.1,6.16,5.91Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M43.82,24.5s-.34-.34-.96-.61c-3.15-1.43-2.39,1.77-2.39,2.04-.27-.82-2.19-2.04-2.67.2-.48,2.38,1.44,1.77,1.78,1.77-.48.68-1.44.68-3.56-.2-2.39-.95-2.8-1.63-2.26-2.79.21,1.43,1.98,1.77,2.53.34,1.3-3.19-1.44-2.31-1.78-2.18.41-.75,1.16-1.09,1.16-1.97.07-1.36-1.92-1.7-2.53-1.22-1.03.82-.41,2.65-.41,2.86-.27-.27-2.12-2.79-2.74.61-.27,1.5,1.37,2.18,2.39,1.02-.21,1.22-1.23,1.63-3.69,1.22-3.69-.54-2.94-2.31-2.94-2.31.07.07,1.44,2.31,2.6-.27,1.23-2.85-1.98-1.97-2.46-1.36.27-1.29,1.5-2.04.82-2.86-.89-1.09-2.6-1.02-3.35,0-.68.88.48,1.56.82,2.86-.48-.61-3.76-1.5-2.46,1.36,1.16,2.58,2.53.34,2.6.27,0,0,.75,1.77-2.94,2.31-2.46.41-3.49,0-3.69-1.22,1.03,1.16,2.67.48,2.39-1.02-.62-3.4-2.46-.88-2.74-.61,0-.2.68-2.04-.41-2.86-.68-.48-2.67-.14-2.53,1.22.07.88.89,1.29,1.16,1.97-.34-.14-3.08-1.09-1.78,2.11.55,1.43,2.33,1.09,2.53-.34.55,1.22.14,1.84-2.26,2.79-2.12.82-3.08.88-3.56.2.27-.07,2.19.68,1.78-1.77-.41-2.24-2.46-1.02-2.67-.2,0-.27.75-3.47-2.39-2.04-.62.27-.96.61-.96.61l-.14.14-.14.14,5.47,7.55s4.65-3.87,13.41-3.87,13.41,3.87,13.41,3.87l5.47-7.55.07-.14v-.07ZM43,25.11c-.62.82-4.51,6.12-4.58,6.19l-.14.2-.21-.14c-1.85-1.02-6.77-3.47-13.13-3.47s-11.29,2.38-13.13,3.47l-.14.14-.21-.2c-.07-.07-3.97-5.37-4.58-6.19l-.07-.07v-.14c0-.07.07-.34.41-.61.75-.48,1.44-.34,1.64-.27.41.27.34,2.04.34,2.24.34-.48.89-1.16,1.5-1.09.41,0,.68.27.89.82.34.88.07,1.36-.21,1.56-.41.27-1.03.2-1.5,0,.07.2.21.54.41.68.62.48,1.85.34,3.28-.14,1.71-.54,2.8-1.36,2.94-2.24.14-.54-.07-1.09-.41-1.43-.21.48-.62,1.29-1.16,1.36-.34,0-.68-.2-.96-.75-.41-.75-.48-1.29-.14-1.63.41-.48,1.85-.2,1.98-.14.21.07-.07-.27-.21-.34-.48-.54-.89-.95-.89-1.43s.21-.82.55-1.02c.48-.27,1.16-.2,1.44.07.27.27.34.82.14,2.11,0,.14-.21.75.07.41.27-.27,1.37-1.29,1.98-1.02.41.14.62.61.62,1.36,0,.54-.14.88-.48,1.09-.48.27-1.37-.2-1.78-.48-.07.34,0,.82.27,1.16.48.61,1.71.95,3.35.82,1.71-.2,2.67-.75,3.15-1.43.27-.41.55-1.22.34-1.9-.27.34-1.16,1.09-1.57,1.09s-.68-.34-.96-.88c-.21-.54-.21-1.16.07-1.43.41-.41,1.71.2,2.39.48-.07-.27-.14-.54-.27-.88-.07-.27-.21-.54-.27-.68-.14-.27-.48-.68-.27-1.09.27-.48.75-.75,1.3-.75.62,0,1.09.27,1.3.75.21.41-.07.75-.27,1.09-.07.2-.21.34-.27.68-.14.34-.21.61-.27.88.62-.27,1.92-.88,2.39-.48.27.27.27.82.07,1.43-.27.61-.55.88-.96.88s-1.37-.75-1.57-1.09c-.14,1.02.21,1.63.34,1.9.48.68,1.44,1.29,3.15,1.43,1.64.14,2.87-.2,3.35-.82.27-.34.34-1.02.34-1.36-.41.27-1.3.88-1.85.61-.34-.14-.48-.54-.48-1.09,0-.82.21-1.22.62-1.36.62-.27,1.92,1.09,1.98.88.07-.14,0-.34,0-.48-.07-.82-.14-1.77.27-1.97.34-.27.96-.27,1.37-.07.34.2.55.54.55,1.02s-.21.75-.68,1.36c-.07.14-.62.54-.34.48.27-.07,1.57-.27,1.92.2.27.34.27.88-.14,1.63-.27.54-.62.75-.96.75-.55-.07-.89-.95-1.16-1.36-.21.27-.62.95-.48,1.5.21.82,1.37,1.7,3.01,2.24,1.44.48,2.6.61,3.21.14.27-.2.41-.54.48-.75-.48.2-1.09.27-1.57.07-.27-.14-.55-.54-.27-1.63.14-.54.55-.82.89-.82.55-.07,1.09.48,1.44.95,0-.2.07-.34.07-.54-.07-.75.14-1.36.55-1.56.21-.14.68-.27,1.44.2.41.27.41.61.41.61v.14l.34.14Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M25.17,8.29c-1.64,0-3.01,1.36-3.01,2.99,0,1.36.89,2.45,2.12,2.86l.14.54c.14-.07.21-.07.34-.07,0-.14,0-.27-.07-.34h.68c0,.14,0,.27-.07.34.14,0,.27.07.34.07l.14-.54c1.23-.34,2.12-1.5,2.12-2.86.27-1.63-1.09-2.99-2.74-2.99ZM24.96,8.84h.41v2.72h-.41v-2.72ZM22.64,11.28c0-1.29.96-2.31,2.19-2.45v2.72h-2.19v-.27ZM25.17,13.73c-1.09,0-1.98-.68-2.33-1.56h4.65c-.34.88-1.3,1.56-2.33,1.56ZM27.56,11.83c-.07.14-.07.2-.07.2h-4.72s0-.07-.07-.2c0-.14-.07-.2-.07-.2h4.92c.07,0,.07.07,0,.2ZM25.51,11.49v-2.65c1.23.14,2.19,1.22,2.19,2.45v.27l-2.19-.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M25.85,5.03v-1.77h-1.44v1.77h-1.98v1.43h1.98v2.11h.14s.41-.07.62-.07.55.07.55.07h.14v-2.11h1.98v-1.43h-1.98Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M14.91,45.2l8.21.68.41-1.09-.14.48-8.48-.41s-.48,0-.48-.54.48-.61.48-.61l8.89-.27.55-6.59c0-.27.27-.48.82-.48.48,0,.75.2.75.48l.55,6.59,8.96.27s.48,0,.48.61c0,.54-.48.54-.48.54l-8.41.41.21.68,8.21-.68c.07,0,1.03-.07,1.03-.88,0-.95-.68-1.02-1.09-1.09l-8.21-.48c-.07-.82-.34-4.08-.41-5.51-.07-1.36-.89-1.63-1.23-1.7h-.55c-.34.07-1.16.34-1.23,1.7-.07,1.36-.34,4.62-.41,5.51l-8.21.48c-.41,0-1.09.14-1.09,1.09-.14.75.75.82.89.82ZM35.63,59.28l1.3.61s-.89,1.63-4.1,4.35l.27.41h.07c2.74-1.97,4.24-4.89,4.24-4.89l-1.16-.48,2.39-.88c-.41,1.29-1.44,4.42-4.92,6.93-.07.07-.14.14-.27.2l-.07-.27c-.07.07-.21.14-.27.2l.27.2c-2.46,1.56-5.47,2.31-8.14,2.31s-5.81-.82-8.28-2.45l.14-.27c-.07-.07-.21-.14-.27-.2l-.07.27c-.07,0-.07-.07-.14-.07-3.49-2.58-4.58-5.64-4.99-6.93l2.39.88-1.16.41s1.3,2.85,4.1,4.83l.21-.41c-3.21-2.72-3.9-4.21-3.9-4.21l1.3-.61-3.35-1.43s.68,4.69,5.13,7.95c2.67,1.97,5.75,3.13,8.69,3.13s6.09-1.16,8.69-3.13c4.58-3.19,5.27-7.89,5.27-7.89l-3.35,1.43ZM27.08,66.55c.89,0,3.42-.48,4.92-1.29l.48-.27.14-.07-.21-.41-.62.34c-1.44.75-3.9,1.09-4.58,1.09-.62,0-.82-.14-.82-.82v-4.83l-.75-.48v.07l.27.14v5.51c.07.88.68,1.02,1.16,1.02ZM23.12,65.94c-.62,0-3.08-.27-4.58-1.09l-.62-.34-.21.41.62.34c1.5.82,3.97,1.29,4.92,1.29.48,0,1.09-.07,1.09-1.02v-5.51l.27-.14v-.07l-.75.48v4.83c0,.61-.14.82-.75.82Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M38.78,49.69h-10.12l-3.28-9.24-.21-.68-.21.68-3.42,9.24h-10.12l.62.41,7.87,5.64-3.35,9.92,8.55-6.12,8.41,6.19-3.28-9.99,7.93-5.64.62-.41ZM29.48,55.47l-.14-.07v.07l.14.07v-.07l3.15,8.9-1.03-1.43.21.54.68.95-7.25-5.64v-.27l-.07-.07-.14.07v.27l-7.45,5.64.89-1.22-.41.27.07-.27-.75.95,3.15-8.77-7.73-5.3,1.09.34-.21-.07h.34l-1.16-.34,9.03.2.14.14h.07l-.14-.07,3.08-9.38v1.56l.07-.27.14.34v-1.7l2.94,9.24-.21.27h.21l.14-.14,8.89-.2-1.09.34h.27l-.27.2,1.3-.41-7.93,5.3Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M12.58,50.1l12.52,4.15-.07-.07,7.66,10.67.14-.14-7.59-10.67h-.07l-12.52-4.08-.07.14Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M17.37,64.71l7.87-10.54-.07.07,12.72-4.28-.07-.14-12.72,4.21h-.07l-7.8,10.6.14.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M25.03,40.79v18.08h.2v-18.08h-.2Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M19.97,55.81l5.2-1.56h-.07l5.06,1.56.07-.2-5.06-1.56h-.07l-5.2,1.56.07.2Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M21.48,49.69l3.56,4.49.14.07.07-.07,3.49-4.49-.14-.07-3.56,4.42h.21l-3.62-4.42-.14.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M13.95,66.69c-.27,0-.62.07-.89.14.07.07.14.14.21.2.21-.07.48-.14.68-.14,1.37,0,2.39,1.09,2.39,2.38v.14c.07,0,.14.07.21.14v-.27c.07-1.43-1.16-2.58-2.6-2.58ZM15.59,71.99c-.48.27-1.09.48-1.64.48-1.78,0-3.15-1.43-3.15-3.13,0-.27.07-.61.14-.88-.07,0-.14-.07-.14-.14-.07-.07-.14-.14-.14-.2-.14.34-.21.82-.21,1.22,0,1.97,1.64,3.53,3.56,3.53.75,0,1.44-.2,1.98-.61h-.07c-.14-.07-.27-.14-.34-.27ZM9.51,45.88c-.07.14-.14.27-.21.27.62.61.89,1.36.89,2.24,0,1.7-1.3,3.06-3.01,3.13-.07.2-.14.34-.14.48,1.98,0,3.56-1.63,3.56-3.53,0-1.02-.41-1.9-1.09-2.58ZM7.25,44.93h-.21c-1.98,0-3.56,1.56-3.56,3.53,0,1.29.68,2.38,1.64,2.99-.07-.2-.07-.41,0-.54-.75-.61-1.23-1.5-1.23-2.45,0-1.77,1.44-3.13,3.15-3.13,0-.07.07-.14.07-.2s.07-.14.14-.2ZM13.95,65.8c-.68,0-1.3.2-1.78.48.14.14.21.2.27.27.48-.27.96-.41,1.5-.41,1.78,0,3.15,1.43,3.15,3.13,0,.27,0,.54-.07.75v.07c.07,0,.21.07.41.14.07-.27.14-.61.14-.88,0-1.97-1.64-3.53-3.62-3.53ZM22.3,36.78h-.41c.34.82.96,1.43,1.78,1.84v-.48c-.62-.34-1.09-.82-1.37-1.36ZM5.06,46.7c-.41.48-.68,1.09-.68,1.77,0,.61.21,1.16.62,1.63,0-.07,0-.14.07-.2v-.07c-.27-.41-.41-.88-.41-1.36,0-1.09.75-2.04,1.85-2.31.07-.14.21-.27.34-.34-.68.07-1.3.41-1.78.88ZM36.32,71.78c-.27,0-.55-.07-.82-.14q-.07.07-.14.14c.27.14.62.2.96.2,1.44,0,2.67-1.16,2.67-2.65,0-.27-.07-.48-.14-.75h-.07s0,.2-.07.41v.34c0,1.36-1.09,2.45-2.39,2.45ZM42.88,51.05q.07,0,0,0c.07-.07,0-.14-.07-.2-1.16-.2-1.98-1.16-1.98-2.38,0-.54.21-1.02.48-1.36-.07-.07-.07-.14-.14-.27-.34.48-.55,1.02-.55,1.56-.07,1.36.96,2.52,2.26,2.65ZM7.18,51.05c1.44-.07,2.53-1.22,2.53-2.65,0-.54-.21-1.09-.48-1.5-.07.07-.07.14-.14.2.27.41.41.82.41,1.36,0,1.29-.96,2.31-2.26,2.38-.07.14-.07.2-.07.2ZM13.95,71.92c.27,0,.55-.07.82-.14-.07-.07-.14-.07-.14-.14-.21.07-.41.07-.62.07-1.37,0-2.39-1.09-2.39-2.38v-.07c-.14-.14-.14-.27-.21-.41,0,.14-.07.27-.07.41,0,1.5,1.16,2.65,2.6,2.65ZM23.05,36.64c-.14,0-.21-.07-.27-.07.21.34.48.68.89.95v-.2c-.27-.2-.41-.41-.62-.68ZM42.81,51.59c-1.57-.2-2.8-1.5-2.8-3.13,0-.88.34-1.7.96-2.31-.07-.07-.14-.2-.21-.34-.75.68-1.16,1.56-1.16,2.65,0,1.9,1.5,3.47,3.35,3.53,0-.07-.07-.2-.14-.41ZM45.62,48.47c0,.61-.21,1.16-.55,1.56v.27c.48-.48.82-1.16.82-1.9,0-1.29-.96-2.38-2.26-2.58.14.07.27.2.34.34.96.34,1.64,1.29,1.64,2.31ZM39.33,68.32c.14.34.14.68.14.95,0,1.77-1.44,3.13-3.15,3.13-.62,0-1.3-.2-1.78-.54-.07.07-.21.2-.41.27.62.48,1.37.75,2.19.75,1.98,0,3.56-1.56,3.56-3.53,0-.48-.14-.95-.27-1.43-.07.2-.14.34-.27.41ZM44.8,50.64q.07,0,0,0h0ZM43.22,44.93h-.07c.07.07.07.14.14.2,0,.07.07.14.07.2.82,0,1.57.34,2.19.95.62.61.89,1.36.89,2.18,0,1.02-.48,1.97-1.37,2.58,0,.14,0,.34-.14.61,1.16-.61,1.92-1.77,1.92-3.13-.07-1.97-1.64-3.6-3.62-3.6ZM27.22,34.26c.14,0,.21,0,.27.07-.41-.95-1.37-1.56-2.39-1.56-1.09,0-2.05.68-2.46,1.63.07-.07.21-.14.34-.14.41-.75,1.23-1.22,2.12-1.22.96-.07,1.71.48,2.12,1.22ZM27.49,36.64c-.07,0-.21.07-.34.07-.14.2-.34.41-.55.61v.27c.41-.27.68-.61.89-.95ZM28.04,36.78c-.27.54-.75,1.02-1.3,1.36v.48c.75-.34,1.37-1.02,1.71-1.77h-.27c-.07-.07-.14-.07-.14-.07ZM25.1,31.81c-1.78,0-3.28,1.29-3.56,2.99.14-.14.27-.2.41-.2v-.07c.34-1.36,1.64-2.38,3.08-2.38s2.74,1.02,3.08,2.38c.14,0,.27.07.48.14-.27-1.56-1.71-2.86-3.49-2.86ZM33.1,69.34c0-1.77,1.44-3.13,3.15-3.13.48,0,.96.14,1.37.27h.07c.07-.07.14-.2.27-.27-.48-.27-1.09-.41-1.71-.41-1.98,0-3.56,1.56-3.56,3.53,0,.34.07.68.14,1.02.07-.07.21-.14.27-.2.07,0,.07-.07.14-.07v-.07c-.14-.2-.14-.41-.14-.68ZM36.32,66.96c.21,0,.34,0,.55.07.07-.07.14-.14.27-.2-.27-.07-.48-.14-.75-.14-1.44,0-2.67,1.16-2.67,2.65,0,.2,0,.41.07.68.07-.07.14-.14.21-.2,0-.14-.07-.27-.07-.41-.07-1.36,1.03-2.45,2.39-2.45Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M37.89,41.47s.07.34.41.68c.27.34.82.54.82.54,0,0,.07.34.27.75.21.41.75.61.75.61,0,0,.07.48.21.68.14.27.55.54.55.54,0,0-.14.2-.07.48.14.34.27.48.27.48-.21.82.48,1.09.48,1.09.48.27,1.23-.2,1.23-.2,0,0,.68.07,1.09-.48.48-.61-.55-.95-.55-.95,0,0,.14-.2-.07-.61-.21-.41-.68-.54-.68-.54,0,0,0-.34-.14-.82-.14-.48-.82-.82-.82-.82,0,0,.07-.27-.14-.68-.27-.54-.96-.88-.96-.88,0,0-.14-.27-.34-.68-.55-.54-1.16-.54-1.16-.54,0,0-.14-.61-.34-.82-.34-.34-1.03-.48-1.03-.48,0,0-.07-.27-.48-.68-.34-.34-1.16-.41-1.16-.41,0,0-.07-.34-.48-.68-.48-.34-1.16-.27-1.16-.27,0,0,0-.2-.62-.61-.62-.41-1.16-.27-1.16-.27,0,0-.21-.27-.62-.48-.48-.27-1.16-.14-1.16-.14,0,0-.21-.27-.82-.48-.62-.2-1.16.07-1.16.07-.55-.48-1.03-.2-1.03-.2,0,0-.07-.48-.62-.41-1.09.2-.75,1.09-.75,1.09,0,0-.21.14-.27.61-.07.48.27.75.62.82.27.07.82-.14.82-.14,0,0,.21.2.48.2h.62s.21.2.68.34c.48.14,1.03,0,1.03,0,0,0,0,.2.48.41.48.2.96.07.96.07,0,0,.27.41.75.68.41.2.96.14.96.14,0,0,.27.34.68.61.34.27.96.34.96.34,0,0,.21.41.48.68.27.2.96.34.96.34,0,0,.27.48.48.68.14.07.75.34.75.34ZM42.2,47.24c-.07.07-.41,0-.55-.07-.14-.07-.21-.2-.21-.27s0-.07.07-.14h.14c.07.07.14.07.27.14.07,0,.14.07.21.07.07.07.14.07.14.14s0,.07-.07.14ZM43.09,46.16c.14.07.34.2.34.41,0,.14-.07.27-.48.41-.68.14-1.3-.34-1.5-.68-.14-.2-.14-.27-.07-.34s.27-.07.48.07c.41.2.68.2.89.14.07-.07.21-.07.34,0ZM42.61,45.14c.07.34.07.54-.07.61-.07.07-.21.07-.48-.07h-.07c-.82-.2-1.16-.34-1.37-1.16,0-.07,0-.2.07-.2.07-.07.27,0,.48.07.14.07.27.07.41.14.68.14,1.03.41,1.03.61ZM41.79,43.71c.14.34.14.54.07.61-.07.07-.21.07-.48,0h-.14c-.96-.27-1.3-.34-1.64-1.16,0-.07-.07-.14,0-.2.07-.07.27,0,.62.07.14.07.27.07.41.14.75.07,1.09.27,1.16.54ZM40.76,42.08c.14.34.14.48.07.61-.07.07-.21.07-.48.07h-.14c-.96-.07-1.37-.14-1.71-.88-.07-.07-.07-.14,0-.2.07-.14.34-.07.62,0,.14,0,.27.07.41.07.75,0,1.09.14,1.23.34ZM39.53,40.85c.14.2.21.34.14.41-.07.14-.21.14-.41.14-1.03,0-1.57-.2-1.92-.68-.07-.14-.07-.2-.07-.27.07-.14.34-.14.68-.14h.48c.48.07.89.27,1.09.54ZM26.74,34.87c0-.14.07-.2.21-.27h.27l.07.07s-.27.14-.34.27l-.07.07c-.14.07-.14,0-.14-.14ZM27.36,36.23c0,.07,0,.14-.07.2-.14.07-.41.07-.55-.07-.14-.14-.21-.27-.14-.48,0-.14.14-.34.41-.54.55-.34.96-.27.96-.27.07,0,.07.07.07.14s-.07.14-.21.27c-.34.14-.55.61-.48.75ZM27.97,36.37c-.14-.07-.21-.2-.21-.27,0-.27.41-.54.75-.68.48-.27.82-.27,1.09-.14,0,0,.07,0,.07.07.14.07.27.14.27.27,0,.07-.07.2-.27.27-.27.14-.55.34-.68.48-.34.14-.55.27-1.03,0ZM29.41,36.64c-.07-.07-.14-.14-.07-.2.07-.2.41-.41,1.03-.61.41-.14.89-.27,1.16-.07l.07.07c.14.07.27.2.27.34,0,.07-.14.14-.27.2-.27.07-.55.2-.75.27-.62.2-1.03.41-1.44,0ZM30.91,37.12c-.07-.07-.07-.14-.07-.14.07-.27.89-.48,1.16-.54.48-.14.89-.2,1.09.07,0,0,.07.07.14.14.14.14.27.2.27.34,0,.07-.14.14-.27.2-.27.07-.48.14-.68.27-.55,0-.96.2-1.64-.34ZM34.13,38.07c-.55.14-1.09.2-1.37-.34-.07-.07-.07-.2,0-.27.14-.27.68-.27,1.3-.34h.07c.55-.07.82.07,1.03.27l.07.07c.14.14.21.27.14.34-.07.07-.14.14-.34.14-.34.07-.62.07-.89.14ZM34.4,38.68c-.07-.14-.07-.2-.07-.27.14-.2.62-.27,1.03-.27h.21c.55-.07.82.07,1.03.27l.07.07c.14.14.21.27.14.34-.07.07-.14.14-.34.14-.27,0-.55.07-.75.07-.48.14-.96.2-1.3-.34ZM35.91,39.7c-.07-.14-.07-.2-.07-.27.07-.2.48-.2.82-.2h.27c.55-.07.82.07,1.03.27l.07.07c.14.14.21.27.14.34-.07.07-.14.14-.34.14-.27,0-.48.07-.68.07-.48.07-.82.14-1.23-.41ZM35.29,70.42s.14-.2-.14-.61c-.27-.41-.62-.41-.96-.27-.27.14-.62.61-.62.61,0,0-.27-.07-.48.07-.27.14-.48.34-.48.34,0,0-.27-.07-.75.14-.48.2-.82.61-.82.61,0,0-.14-.14-.68-.07-.55.07-.82.48-.82.48,0,0-.48-.2-1.03-.07-.41.07-.82.48-.82.48,0,0-.41-.14-.89-.07-.41,0-1.03.27-1.03.27,0,0-.41-.27-.75-.27-.34-.07-.96.27-.96.27,0,0-.55-.27-.82-.27-.27-.07-.89.14-.89.14,0,0-.27-.2-.75-.34-.48-.14-.96,0-.96,0,0,0-.27-.27-.68-.41-.41-.2-.96-.07-.96-.07,0,0-.27-.34-.55-.48-.27-.14-.75-.14-.75-.14,0,0,0-.27-.21-.41-.34-.2-.55-.27-.55-.27-.34-.82-1.03-.61-1.03-.61-.55.07-.89.88-.89.88,0,0-.55.27-.62,1.02,0,.75,1.03.41,1.03.41,0,0,0,.2.41.41.34.2.82.07.82.07,0,0,.21.27.62.54.41.27,1.16.14,1.16.14,0,0,.14.27.48.48.55.27,1.3.14,1.3.14,0,0,.27.2.68.34.75.27,1.23-.14,1.23-.14,0,0,.41.41.75.48.48.07,1.16-.2,1.16-.2,0,0,.27.2.75.27.48.07,1.23-.34,1.23-.34,0,0,.27.27.82.27.62,0,1.16-.41,1.16-.41,0,0,.14.14.82.14.75,0,1.09-.48,1.09-.48,0,0,.34.14.82.07.55-.07,1.03-.61,1.03-.61,0,0,.34.14.89-.07.62-.2.89-.75.89-.75.75.07.96-.41.96-.41,0,0,.34.34.75,0,.89-.75,0-1.29,0-1.29ZM15.53,70.08c.07-.14.34-.27.48-.27s.27.07.27.14.07.07,0,.14c0,0-.07.07-.14.07s-.21,0-.27.07c-.07,0-.14.07-.27.07,0-.07,0-.14-.07-.2q0,.07,0,0ZM15.8,71.24c-.07.07-.21.14-.27.2-.14.07-.41,0-.48-.14-.07-.07-.14-.27.14-.61.48-.54,1.23-.48,1.64-.34.21.07.27.14.27.27s-.14.2-.48.27c-.48,0-.68.2-.82.34ZM16.41,71.99c-.27-.27-.34-.41-.34-.54s.14-.14.41-.27h.07c.75-.27,1.16-.41,1.78.2.07.07.14.14.07.2,0,.14-.21.2-.48.27-.14.07-.27.07-.41.14-.48.14-.89.2-1.09,0ZM17.99,72.74c-.27-.2-.41-.34-.41-.48s.14-.14.34-.27l.14-.07c.89-.34,1.3-.48,1.98,0,0,0,.14.07.14.2s-.27.2-.55.27c-.14.07-.27.07-.41.14-.62.27-1.03.34-1.23.2ZM20.93,73.08c-.55.34-.96.41-1.16.27-.27-.2-.41-.27-.41-.41s.14-.2.34-.27l.07-.07c.82-.48,1.16-.68,1.91-.27.07.07.14.07.14.14,0,.14-.21.27-.48.41-.14.07-.27.14-.41.2ZM21.54,73.69c-.21-.07-.34-.2-.34-.27,0-.14.07-.27.27-.34.82-.61,1.37-.82,1.91-.54.14.07.21.14.21.2,0,.14-.21.27-.48.48-.14.07-.27.2-.34.27-.48.2-.96.27-1.23.2ZM24.49,73.55c-.41.34-.75.48-1.03.34h-.14c-.14-.07-.34-.07-.34-.2,0-.07.07-.2.21-.27.21-.14.34-.27.55-.48.41-.41.75-.68,1.3-.41.14.07.21.14.21.2,0,.2-.27.41-.55.61-.07.07-.14.14-.21.2ZM26.26,73.55c-.41.34-.75.48-1.03.34h-.14c-.14-.07-.34-.07-.34-.2,0-.07.07-.2.21-.27.21-.2.41-.34.55-.54.41-.41.75-.75,1.3-.48.14.07.21.14.21.2.07.27-.34.54-.68.82.07.07,0,.14-.07.14ZM28.18,73.42c-.48.41-.82.54-1.09.41h-.14c-.14-.07-.34-.07-.34-.2,0-.07.07-.2.21-.27.27-.2.41-.41.62-.54.41-.41.75-.82,1.37-.54.14.07.14.14.21.2.07.2-.34.61-.82.95ZM29.27,73.48h-.14c-.21,0-.34,0-.41-.14,0-.07,0-.2.14-.27.21-.2.27-.41.41-.61.27-.48.55-.82,1.37-.82.07,0,.14.07.14.07.07.27-.41.88-.62,1.16-.34.41-.62.68-.89.61ZM31.87,72.4c-.27.34-.55.75-.89.75h-.14c-.14,0-.34,0-.41-.14-.07-.07,0-.2.14-.34.21-.27.34-.48.48-.68.27-.48.48-.82,1.09-.82.14,0,.21.07.21.14.14.14-.07.54-.48,1.09ZM33.65,71.72c-.27.48-.48.75-.75.75h-.14c-.14,0-.34.07-.41-.07-.07-.07,0-.2.07-.34.21-.27.27-.54.27-.82.14-.41.21-.68.75-.68.14,0,.27.07.34.14.21.2.07.68-.14,1.02ZM34.88,70.76c-.21.61-.62.75-.62.75-.07,0-.14,0-.14-.07-.07-.07,0-.2.07-.34.21-.34.07-.82-.07-.88-.07-.07-.07-.14-.07-.2.07-.14.27-.27.48-.27s.27.14.41.27c0,.2.07.41-.07.75ZM35.29,71.38c-.07.07-.21.14-.27.14h-.07c0-.07.14-.27.14-.41,0-.07.07-.07.07-.07.07,0,.14.07.21.14.07-.07.07.07-.07.2ZM15.11,39.29s.62-.14.96-.34c.34-.27.68-.61.68-.61,0,0,.55.07.96-.14.48-.2.75-.68.75-.68,0,0,.48.14.96-.07.48-.2.48-.41.48-.41,0,0,.48.2,1.03,0,.48-.14.68-.34.68-.34h.62c.27,0,.48-.2.48-.2,0,0,.55.2.82.14.34-.07.68-.27.62-.82-.07-.48-.27-.61-.27-.61,0,0,.41-.88-.75-1.09-.55.07-.62.54-.62.54,0,0-.48-.27-1.03.2,0,0-.55-.27-1.16-.07-.62.2-.82.48-.82.48,0,0-.68-.14-1.16.14-.41.2-.62.48-.62.48,0,0-.55-.2-1.16.27-.62.41-.62.61-.62.61,0,0-.68-.07-1.16.27-.41.27-.48.68-.48.68,0,0-.82.07-1.16.41-.34.34-.48.68-.48.68,0,0-.75.14-1.03.48-.21.27-.34.82-.34.82,0,0-.62,0-1.09.61-.27.41-.34.68-.34.68,0,0-.75.34-.96.88-.21.34-.14.68-.14.68,0,0-.68.27-.82.82-.14.48-.14.82-.14.82,0,0-.48.2-.68.54-.21.41-.07.61-.07.61,0,0-1.03.34-.55.95.48.61,1.09.48,1.09.48,0,0,.68.48,1.23.2,0,0,.62-.27.48-1.09,0,0,.21-.14.27-.48.07-.2-.07-.48-.07-.48,0,0,.41-.27.55-.54.14-.27.21-.68.21-.68,0,0,.48-.27.75-.61.21-.34.27-.75.27-.75,0,0,.48-.2.82-.54.27-.34.41-.68.41-.68,0,0,.62-.2.82-.41.21-.2.48-.68.48-.68,0,0,.68-.14.96-.34.14-.34.34-.82.34-.82ZM23.05,34.74s.07-.07,0,0c.07-.14.21-.14.34-.07.14,0,.21.14.21.27,0,.07,0,.2-.07.2,0,0-.07,0-.07-.07-.07-.14-.34-.27-.41-.34ZM22.36,35.14s.41-.14.96.27c.34.2.41.41.41.54,0,.2-.07.34-.14.48-.14.14-.41.14-.55.07-.07-.07-.14-.14-.07-.2.07-.14-.14-.61-.48-.82-.14-.07-.21-.14-.21-.27,0-.07.07-.07.07-.07ZM20.72,35.28c.07,0,.07-.07.07-.07.27-.14.62-.14,1.09.14.34.2.68.41.75.68,0,.14-.07.2-.21.27-.48.34-.68.14-1.03-.14-.21-.14-.41-.34-.68-.48-.21-.07-.27-.14-.27-.27-.07,0,.14-.07.27-.14ZM18.74,35.82l.07-.07c.27-.2.75-.07,1.16.07.68.2,1.03.41,1.03.61,0,.07,0,.14-.07.2-.48.41-.82.2-1.37,0-.21-.14-.48-.2-.75-.27-.21-.07-.27-.14-.27-.2,0-.14.07-.2.21-.34ZM17.1,36.57q.07-.07.14-.14c.21-.27.62-.14,1.09-.07.27.07,1.09.27,1.16.54q0,.07-.07.14c-.68.54-1.03.41-1.57.2-.21-.07-.41-.2-.68-.27-.21-.07-.27-.07-.27-.2-.07,0,.07-.14.21-.2ZM15.18,37.46l.07-.07c.21-.27.48-.34,1.03-.27h.14c.55.07,1.16.14,1.3.34.07.07,0,.2,0,.27-.34.54-.82.41-1.37.34-.27-.07-.55-.07-.82-.14-.21,0-.27-.07-.34-.14-.21-.07-.07-.2,0-.34ZM8.69,47.18c-.14.07-.48.14-.55.07l-.07-.07c0-.07.07-.07.14-.14.07-.07.14-.07.21-.07.14-.07.21-.07.27-.14.07-.07.07,0,.14,0s.07.07.07.14c0,0-.07.14-.21.2ZM8.96,46.29c-.21.34-.82.82-1.5.68-.41-.07-.48-.27-.48-.41,0-.2.21-.34.34-.41.14-.07.27,0,.34,0,.21,0,.48.07.89-.14.27-.14.41-.14.48-.07.07,0,.07.2-.07.34ZM9.64,44.59c-.21.82-.55.95-1.37,1.16h-.07c-.27.07-.41.14-.48.07-.07-.07-.07-.27-.07-.61.07-.27.34-.48.96-.61.14-.07.27-.07.41-.14.27-.07.41-.14.48-.07.14,0,.21.07.14.2ZM10.67,43.1c-.34.82-.68.95-1.64,1.16h-.14c-.27.07-.41.07-.48,0-.07-.07-.07-.27.07-.61.07-.27.41-.48,1.09-.61.14,0,.27-.07.41-.14.27-.07.55-.2.62-.07.14.14.07.2.07.27ZM11.76,41.81c-.34.75-.68.82-1.71.88h-.14c-.27,0-.41.07-.48-.07-.07-.07,0-.27.07-.61.07-.27.48-.41,1.09-.48.14,0,.27,0,.41-.07.34-.07.55-.07.62,0,.21.2.21.27.14.34ZM13.06,40.79c-.34.48-.89.68-1.91.68-.21,0-.34-.07-.41-.14-.07-.14,0-.27.14-.41.21-.27.62-.48,1.09-.41h.48c.34,0,.62,0,.68.14,0-.07,0,0-.07.14ZM14.43,39.7c-.34.54-.75.48-1.3.41-.21,0-.41-.07-.68-.07-.21,0-.27-.07-.34-.14-.07-.14.07-.27.14-.34l.07-.07c.21-.27.48-.34,1.03-.27h.27c.34,0,.75,0,.82.2.07.07.07.14,0,.27ZM13.82,38.95c-.21,0-.27-.07-.34-.14-.07-.14.07-.27.14-.34l.07-.07c.21-.27.48-.34,1.03-.27h.21c.41,0,.89.07,1.03.27.07.07,0,.2-.07.27-.34.54-.82.48-1.37.34-.14,0-.41-.07-.68-.07ZM12.52,66.62s-.07-.2-.41-.41c-.21-.14-.41-.07-.41-.07,0,0-.21-.48-.34-.68-.21-.2-.62-.41-.62-.41,0,0-.07-.54-.34-.88-.27-.34-.62-.48-.62-.48,0,0-.07-.54-.27-.95-.27-.41-.55-.61-.55-.61,0,0,0-.68-.21-.88-.14-.2-.55-.61-.55-.61,0,0,.07-.68-.07-.95-.14-.27-.48-.61-.48-.61,0,0,.07-.61-.07-1.02-.14-.41-.34-.82-.34-.82,0,0,.21-.48.21-.88-.07-.48-.41-.88-.41-.88,0,0,.27-.41.21-.95-.07-.54-.27-.61-.27-.61,0,0,.27-.41.34-.95,0-.54-.14-.75-.14-.75,0,0,.14-.27.21-.61.07-.27-.07-.48-.07-.48,0,0,.34-.48.34-.75.07-.34-.07-.75-.55-.82-.48-.07-.68.14-.68.14,0,0-.89-.75-1.37.27-.27.48.21.75.21.75,0,0-.41.34-.07,1.02,0,0-.41.48-.41,1.09s.21.88.21.88c0,0-.34.61-.21,1.16.14.41.27.75.27.75,0,0-.34.48-.07,1.16.21.68.41.75.41.75,0,0-.27.61-.07,1.22.21.48.48.68.48.68,0,0-.21.82.07,1.22.27.48.48.61.48.61,0,0-.07.75.14,1.16.14.27.68.54.68.54,0,0-.21.61.27,1.22.27.34.55.54.55.54,0,0,.14.82.55,1.22.27.27.62.34.62.34,0,0,.07.75.48,1.02.41.27.75.34.75.34,0,0,0,.48.34.82.34.27.55.2.55.2,0,0,.07,1.09.75.82.68-.27.82-.88.82-.88,0,0,.68-.54.55-1.09,0-.07-.07-.75-.89-.88ZM6.16,50.03c.27-.27.55-.27.68-.27.21,0,.27.14.41.27.07.2,0,.41-.14.54-.07.07-.14.07-.21,0-.14-.07-.62-.07-.89.2-.14.14-.21.2-.27.14-.07,0-.07-.07-.07-.14-.07.14,0-.34.48-.75ZM5.47,49.83c.07-.14.21-.14.27-.14s.14.07.14.14c0,0,0,.07-.07.07-.14.07-.34.27-.34.27,0,0-.07,0-.07-.07s0-.14.07-.27ZM5.68,51.53c.27-.27.62-.54.89-.48.14,0,.21.14.27.27.21.54-.07.68-.41.88-.21.14-.41.27-.68.54-.14.14-.27.2-.34.2-.14-.07-.14-.2-.21-.34v-.14c-.07-.34.07-.61.48-.95ZM5.2,54.52c-.14-.27.14-.75.41-1.09.41-.54.75-.82.89-.82.07,0,.14.07.21.14.27.54-.07.88-.41,1.29-.14.2-.34.41-.48.68-.14.2-.21.27-.27.27-.14,0-.21-.2-.27-.34l-.07-.14ZM5.33,56.22c-.14-.27.07-.61.27-1.02.14-.27.62-.95.89-.95q.07,0,.14.14c.34.82.07,1.09-.27,1.56-.14.2-.27.34-.41.61-.07.14-.21.2-.27.2-.14,0-.21-.2-.27-.34,0-.07,0-.14-.07-.2ZM5.75,58.46l-.07-.07c-.21-.27-.21-.54.07-1.09l.07-.07c.21-.54.48-1.02.75-1.09.07,0,.21,0,.27.14.41.48.21.88-.14,1.43-.14.2-.27.48-.34.75-.07.2-.14.27-.21.27-.21,0-.34-.2-.41-.27ZM6.57,60.5c-.14,0-.21-.14-.27-.27l-.07-.07c-.21-.27-.21-.54.07-1.09,0-.07.07-.14.07-.2.14-.41.34-.82.55-.88.07,0,.21,0,.27.14.41.48.21.88-.07,1.36-.14.2-.21.41-.27.68-.14.2-.21.34-.27.34ZM7.39,61.86c-.07.2-.14.27-.21.27-.14,0-.21-.14-.27-.27l-.07-.07c-.21-.27-.21-.54.07-1.09.07-.07.07-.2.14-.27.14-.34.27-.68.41-.75.07,0,.14,0,.27.14.41.48.27.88,0,1.36-.14.2-.21.48-.34.68ZM8.07,63.83c-.14,0-.27-.07-.41-.27-.21-.27-.27-.68-.07-1.16.07-.14.07-.27.14-.41.07-.34.14-.61.27-.61.07,0,.14,0,.21.14.41.48.41,1.02.07,1.97,0,.2-.07.34-.21.34ZM9.3,64.85v.14c-.07.27-.07.41-.21.41s-.27-.07-.55-.27c-.21-.14-.27-.54-.14-1.16.07-.14.07-.27.07-.41.07-.34.07-.54.21-.61.07,0,.14,0,.21.07.62.48.62.88.41,1.84ZM10.46,66.28v.14c0,.27,0,.41-.14.41-.14.07-.27-.07-.55-.27-.27-.14-.34-.54-.27-1.22v-.41c0-.34,0-.54.14-.61.07-.07.21,0,.21.07.62.54.62.95.62,1.9ZM11.63,67.43c0,.34,0,.48-.14.54-.14.07-.27,0-.62-.14-.27-.14-.34-.48-.27-1.09v-.41c0-.27,0-.41.07-.48h.21c.75.34.82.75.75,1.56ZM12.58,68.59c-.21.34-.41.34-.55.34-.21-.07-.27-.27-.27-.41s.07-.27.14-.34c.07-.2.21-.41.14-.88-.07-.27,0-.48.07-.48.07-.07.21,0,.34.2.21.27.41.95.14,1.56ZM13.06,68.04q-.07,0,0,0c-.14,0-.14-.07-.14-.14v-.27c0-.14,0-.2-.07-.27v-.14s.07-.07.14,0c.07,0,.21.07.21.27,0,.14-.07.48-.14.54ZM45.07,53.63s.21-.27.21-.88-.41-1.09-.41-1.09c.34-.68-.07-1.02-.07-1.02,0,0,.48-.27.21-.75-.48-1.02-1.23-.34-1.23-.34,0,0-.14-.14-.68-.14-.48.07-.62.41-.55.82,0,.34.34.75.34.75,0,0-.14.2-.07.48.07.27.21.61.21.61,0,0-.14.27-.14.75,0,.54.34.95.34.95,0,0-.21.07-.27.61-.07.54.21.95.21.95,0,0-.34.41-.41.88-.07.41.21.88.21.88,0,0-.27.34-.34.82-.14.41-.07,1.02-.07,1.02,0,0-.34.34-.48.61-.14.27-.07.95-.07.95,0,0-.41.41-.55.61-.14.2-.21.88-.21.88,0,0-.27.2-.55.61-.27.41-.27.95-.27.95,0,0-.34.14-.62.48-.27.34-.34.88-.34.88,0,0-.41.2-.62.41-.21.2-.34.68-.34.68,0,0-.27-.07-.41.07-.34.2-.41.41-.41.41-.82.07-.89.75-.89.75-.14.54.55,1.09.55,1.09,0,0,.14.61.82.88.68.27.75-.82.75-.82,0,0,.21.07.55-.2.34-.27.34-.82.34-.82,0,0,.34-.14.75-.34.41-.27.48-1.02.48-1.02,0,0,.27-.07.62-.34.41-.41.55-1.22.55-1.22,0,0,.27-.2.55-.54.48-.61.27-1.22.27-1.22,0,0,.55-.27.68-.54.27-.41.14-1.16.14-1.16,0,0,.27-.2.48-.61.21-.41.07-1.22.07-1.22,0,0,.34-.2.48-.68.21-.61-.07-1.22-.07-1.22,0,0,.14-.07.34-.75.21-.68-.07-1.16-.07-1.16,0,0,.21-.27.27-.75.07-.34-.27-.95-.27-.95ZM44.18,49.83c0-.07.07-.14.14-.14.14,0,.27,0,.27.14.07.14.07.2.07.27s-.07.07-.07.07c0,0-.21-.2-.34-.27-.07,0-.07-.07-.07-.07ZM42.95,50.64c-.14-.14-.21-.34-.14-.54.07-.14.21-.27.41-.27.14,0,.41,0,.68.27.48.41.55.82.55.82,0,.07,0,.14-.07.14s-.21,0-.27-.14c-.27-.27-.75-.27-.89-.2-.07,0-.21,0-.27-.07ZM43.29,51.25c.07-.14.14-.27.27-.27.27-.07.62.2.89.48.34.34.55.68.48.95v.14c0,.14-.07.34-.21.34-.07,0-.21-.07-.34-.2-.21-.27-.48-.41-.68-.54-.41-.14-.62-.34-.41-.88ZM37.27,67.37c0,.07-.07.2-.07.27v.27c0,.07-.07.14-.07.14h-.07c-.07-.07-.14-.41-.14-.54s.14-.2.21-.27h.14v.14ZM38.03,68.93c-.14,0-.27,0-.55-.34-.34-.61-.07-1.36.21-1.63.14-.14.27-.27.34-.2.14.07.14.2.07.48-.07.48,0,.68.14.88.07.14.07.2.14.34-.07.2-.14.41-.34.48ZM39.12,67.77c-.34.14-.48.2-.62.14-.14-.07-.14-.2-.14-.48v-.07c0-.82,0-1.22.75-1.63.07-.07.14-.07.21,0,.14.07.07.27.07.48v.41c.07.68,0,1.09-.27,1.16ZM40.28,66.62c-.27.2-.48.27-.55.27-.07-.07-.14-.2-.14-.41v-.14c-.07-.95-.07-1.36.62-1.9,0,0,.14-.07.21-.07.14.07.14.27.14.61v.41c.07.61,0,1.09-.27,1.22ZM41.51,65.12c-.27.2-.41.27-.55.27-.14-.07-.14-.2-.21-.41v-.14c-.21-.95-.27-1.36.34-1.9.07-.07.14-.07.21-.07.14.07.14.27.21.61,0,.14.07.27.07.41.14.68.14,1.09-.07,1.22ZM42.34,63.56c-.14.2-.27.27-.41.27s-.21-.14-.27-.34c-.34-.95-.27-1.56.07-1.97.07-.07.14-.14.21-.14.14,0,.21.27.27.61.07.14.07.27.14.41.34.48.21.95,0,1.16ZM43.22,61.79l-.07.07c-.07.14-.21.27-.27.27s-.14-.14-.21-.27c-.07-.27-.21-.48-.27-.61-.27-.54-.41-.88,0-1.36.07-.07.21-.14.27-.14.21.07.27.34.41.75.07.14.07.2.14.27.14.48.21.82,0,1.02ZM43.84,60.09l-.07.07c-.07.14-.21.27-.27.27s-.14-.14-.21-.27c-.07-.27-.21-.48-.27-.68-.27-.54-.48-.88-.07-1.36.07-.07.14-.14.27-.14.27.07.41.48.55.88,0,.07.07.14.07.2.21.48.21.82,0,1.02ZM44.39,58.39l-.07.07c-.07.14-.21.27-.27.27s-.14-.14-.21-.27c-.07-.27-.21-.54-.34-.75-.27-.54-.48-.95-.14-1.43.07-.07.14-.14.27-.14.27.07.55.68.75,1.09l.07.07c.07.48.07.82-.07,1.09ZM44.73,56.22c0,.07-.07.07-.07.14-.07.14-.14.34-.27.34-.07,0-.14-.07-.27-.2-.14-.27-.27-.41-.41-.61-.34-.41-.62-.82-.27-1.56q.07-.07.14-.14c.27,0,.75.68.89.95.21.48.41.82.27,1.09ZM44.87,54.52s0,.07-.07.07c-.07.14-.14.27-.27.34-.07,0-.21-.07-.27-.27-.14-.27-.34-.48-.48-.68-.34-.41-.62-.75-.41-1.29.07-.07.07-.14.21-.14.21,0,.48.27.89.82.27.41.55.82.41,1.16Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M75.58,30.73h4.17v9.04l7.45-9.04h5.13l-8.55,9.92,8.82,11.15h-5.4l-7.45-9.79h-.07v9.79h-4.17v-21.07h.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M108.68,43.44l-7.52-12.71h4.86l4.86,8.84,4.99-8.84h4.38l-7.39,12.71v8.29h-4.17v-8.29Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M140.82,34.6c-1.3-.61-2.74-.95-4.24-.95s-3.28.61-3.28,2.92c0,3.67,9.1,2.11,9.1,9.18,0,4.62-3.62,6.39-7.8,6.39-2.26,0-3.28-.27-5.27-.82l.34-3.81c1.44.75,3.01,1.29,4.65,1.29s3.69-.82,3.69-2.72c0-4.01-9.1-2.38-9.1-9.38,0-4.69,3.62-6.46,7.25-6.46,1.78,0,3.42.27,4.99.75l-.34,3.6Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M158.95,34.06h-5.95v-3.33h16v3.33h-5.95v17.74h-4.17v-17.74h.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M178.58,30.73h4.45l5.27,16.59h.07l5.27-16.59h4.1l-6.98,21.07h-5.13l-7.04-21.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M209.01,30.73h12.24v3.33h-8.07v5.17h7.39v3.33h-7.39v5.91h8.14v3.33h-12.24v-21.07h-.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M234.52,30.73h4.51c4.45,0,9.71-.14,9.71,5.71,0,2.45-1.64,4.55-4.24,4.89v.07c1.09.07,1.78,1.22,2.19,2.18l3.35,8.23h-4.65l-2.46-6.59c-.62-1.56-1.1-2.18-2.87-2.18h-1.37v8.77h-4.17v-21.07ZM238.69,39.7h1.37c2.05,0,4.38-.27,4.38-2.92s-2.32-2.79-4.38-2.79h-1.37v5.71Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M262.36,30.73h4.17v9.04l7.45-9.04h5.13l-8.55,9.92,8.82,11.15h-5.4l-7.45-9.79h-.07v9.79h-4.17l.07-21.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M290.74,30.73h12.24v3.33h-8.07v5.17h7.39v3.33h-7.39v5.91h8.07v3.33h-12.24v-21.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M319.95,34.06h-5.95v-3.33h16v3.33h-5.95v17.74h-4.17v-17.74h.07Z'%20style='fill:%20%2300066d;'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3cpath%20d='M355.59,30.74h6.8c6.33,0,10.58,3.87,10.58,10.52s-4.26,10.55-10.58,10.55h-6.8v-21.08ZM362.18,49.95c5.19,0,8.63-3.06,8.63-8.69s-3.48-8.66-8.63-8.66h-4.53v17.36h4.53Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M391.35,45.1h-8.48l-2.4,6.72h-2.19l7.73-21.08h2.22l7.73,21.08h-2.19l-2.43-6.72ZM387.1,32.92s-.45,1.74-.81,2.73l-2.82,7.64h7.26l-2.76-7.64c-.36-.99-.81-2.73-.81-2.73h-.06Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M406.11,32.6h-7.59v-1.86h17.21v1.86h-7.56v19.22h-2.07v-19.22Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M431.35,45.1h-8.48l-2.4,6.72h-2.19l7.73-21.08h2.22l7.73,21.08h-2.19l-2.43-6.72ZM427.09,32.92s-.45,1.74-.81,2.73l-2.82,7.64h7.26l-2.76-7.64c-.36-.99-.81-2.73-.81-2.73h-.06Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M442.71,30.74h2.07v9.14h3.57l5.67-9.14h2.37l-6.3,9.95v.06l6.72,11.06h-2.43l-6.03-10.07h-3.57v10.07h-2.07v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M474.43,45.1h-8.48l-2.4,6.72h-2.19l7.73-21.08h2.22l7.73,21.08h-2.19l-2.43-6.72ZM470.17,32.92s-.45,1.74-.81,2.73l-2.82,7.64h7.25l-2.76-7.64c-.36-.99-.81-2.73-.81-2.73h-.06Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M489.18,32.6h-7.58v-1.86h17.21v1.86h-7.55v19.22h-2.07v-19.22Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M514.42,45.1h-8.48l-2.4,6.72h-2.19l7.73-21.08h2.22l7.73,21.08h-2.19l-2.43-6.72ZM510.17,32.92s-.45,1.74-.81,2.73l-2.82,7.64h7.25l-2.76-7.64c-.36-.99-.81-2.73-.81-2.73h-.06Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M525.79,30.74h2.07v19.22h9.77v1.86h-11.84v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M553.04,30.38c5.97,0,10.73,4.71,10.73,10.76s-4.77,11.03-10.73,11.03-10.73-4.86-10.73-11.03,4.77-10.76,10.73-10.76ZM553.04,50.25c4.74,0,8.57-3.96,8.57-9.11s-3.84-8.84-8.57-8.84-8.57,3.81-8.57,8.84,3.81,9.11,8.57,9.11Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M580.95,30.38c4.89,0,7.49,2.46,7.49,2.46l-1.11,1.56s-2.46-2.1-6.3-2.1c-5.1,0-8.54,3.93-8.54,8.93s3.57,9.02,8.36,9.02c4.11,0,6.63-3.09,6.63-3.09v-3.57h-3.6v-1.86h5.58v10.07h-1.92v-1.59c0-.45.03-.9.03-.9h-.06s-2.43,2.85-6.87,2.85c-5.76,0-10.31-4.65-10.31-10.91s4.56-10.88,10.61-10.88Z'%20style='fill:%20%2300066d;'/%3e%3c/g%3e%3c/svg%3e", E6 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20409.31%2083'%3e%3cdefs%3e%3cclipPath%20id='clippath'%3e%3crect%20width='330'%20height='83'%20style='fill:%20none;'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20style='clip-path:%20url(%23clippath);'%3e%3cg%3e%3cpath%20d='M0,53.84c0,17.88,15.66,25.9,24.96,29.09l.14.07.14-.07c4.58-1.63,11.22-4.69,16.41-9.72,5.61-5.44,8.48-11.9,8.48-19.37V8.36l-.21-.07C41.79,2.79,33.38,0,25.03,0S8.34,2.79.14,8.29l-.14.07v45.48ZM.48,8.84C8.62,3.4,16.82.68,25.03.68s16.48,2.72,24.55,8.16l-.14-.27v45.27c0,7.27-2.8,13.6-8.28,18.9-5.13,4.96-11.7,7.95-16.21,9.58h.21c-9.16-3.06-24.48-10.94-24.48-28.41V8.57l-.21.27Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M14.64,19.1c-2.87,1.09-4.79,2.38-5.2,2.79-.89.82-.55,1.63-.55,1.63h.07s-.07-.61.75-1.36c.34-.34,2.19-1.56,5.13-2.72l-.21-.34Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M25.78,17.06h-1.3c-2.53.14-5.95.75-8.96,1.77l.14.34c2.94-1.02,6.36-1.56,8.89-1.7h1.23c2.53.14,5.88.75,8.89,1.7l.14-.34c-3.08-1.02-6.5-1.63-9.03-1.77Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M35.63,19.1c2.87,1.09,4.79,2.38,5.2,2.79.89.82.55,1.63.55,1.63h-.07s.07-.61-.75-1.36c-.34-.34-2.19-1.56-5.13-2.72l.21-.34Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M44.11,20.26c-1.44-1.9-4.58-2.58-7.66-2.79-.14-3.13-5.81-3.33-10.12-2.52-.41-.61-1.92-.54-2.33,0-4.38-.82-9.99-.61-10.12,2.52-3.15.2-6.29.88-7.73,2.79-1.37,1.9,1.37,3.87,1.37,3.87l.62-.54s-4.58-3.74,5.75-5.57c.48,1.36,1.44,2.04,1.44,2.04l.55-.34s-3.15-5.85,8.07-4.01l.68,2.38s0-.14.21-.14c0,0-.27-2.24-.21-2.45.14-.34.89-.34,1.03,0,.07.2-.21,2.45-.21,2.45.27,0,.21.14.21.14l.68-2.38c11.22-1.84,8.07,4.01,8.07,4.01l.55.34s.96-.68,1.44-2.04c10.4,1.84,5.75,5.57,5.75,5.57l.62.54s2.8-1.97,1.37-3.87ZM7.73,23.52q.07.07.14.14s-.14-.07-.27.07c-.21-.14-.41-.34-.62-.54-1.23-1.43-2.12-4.55,6.77-5.3-9.58,1.63-6.63,5.03-6.02,5.64ZM15.59,19.65c0,.14-.27,0-.27.07-.68-.75-1.03-1.56-1.03-2.31-.07-1.84,2.12-3.4,8-2.38.14,0,.21,0,.34.07h-.14c.34.07.75.14,1.16.2-10.53-1.16-8.48,3.33-8.07,4.35ZM35.02,19.78s0-.07,0,0c-.07-.07-.07,0-.07,0,.07-.2-.27.07-.27-.14v-.14c.48-1.02,2.53-5.44-8-4.21.34-.07.68-.14,1.03-.2h.07c4.86-.95,7.32,0,8,1.43.21.34.27.75.21,1.16-.07.75-.41,1.5-.96,2.11ZM42.81,23.72s0-.07,0,0h-.07c-.07-.07-.14-.07-.14-.07h-.21s.07-.07.14-.14c.07,0,0,0,0,0,.27-.27.82-.88.96-1.63.21-1.29-.89-2.99-6.84-4.08,10.53.88,7.39,5.1,6.16,5.91Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M43.82,24.5s-.34-.34-.96-.61c-3.15-1.43-2.39,1.77-2.39,2.04-.27-.82-2.19-2.04-2.67.2-.48,2.38,1.44,1.77,1.78,1.77-.48.68-1.44.68-3.56-.2-2.39-.95-2.8-1.63-2.26-2.79.21,1.43,1.98,1.77,2.53.34,1.3-3.19-1.44-2.31-1.78-2.18.41-.75,1.16-1.09,1.16-1.97.07-1.36-1.92-1.7-2.53-1.22-1.03.82-.41,2.65-.41,2.86-.27-.27-2.12-2.79-2.74.61-.27,1.5,1.37,2.18,2.39,1.02-.21,1.22-1.23,1.63-3.69,1.22-3.69-.54-2.94-2.31-2.94-2.31.07.07,1.44,2.31,2.6-.27,1.23-2.85-1.98-1.97-2.46-1.36.27-1.29,1.5-2.04.82-2.86-.89-1.09-2.6-1.02-3.35,0-.68.88.48,1.56.82,2.86-.48-.61-3.76-1.5-2.46,1.36,1.16,2.58,2.53.34,2.6.27,0,0,.75,1.77-2.94,2.31-2.46.41-3.49,0-3.69-1.22,1.03,1.16,2.67.48,2.39-1.02-.62-3.4-2.46-.88-2.74-.61,0-.2.68-2.04-.41-2.86-.68-.48-2.67-.14-2.53,1.22.07.88.89,1.29,1.16,1.97-.34-.14-3.08-1.09-1.78,2.11.55,1.43,2.33,1.09,2.53-.34.55,1.22.14,1.84-2.26,2.79-2.12.82-3.08.88-3.56.2.27-.07,2.19.68,1.78-1.77-.41-2.24-2.46-1.02-2.67-.2,0-.27.75-3.47-2.39-2.04-.62.27-.96.61-.96.61l-.14.14-.14.14,5.47,7.55s4.65-3.87,13.41-3.87,13.41,3.87,13.41,3.87l5.47-7.55.07-.14v-.07ZM43,25.11c-.62.82-4.51,6.12-4.58,6.19l-.14.2-.21-.14c-1.85-1.02-6.77-3.47-13.13-3.47s-11.29,2.38-13.13,3.47l-.14.14-.21-.2c-.07-.07-3.97-5.37-4.58-6.19l-.07-.07v-.14c0-.07.07-.34.41-.61.75-.48,1.44-.34,1.64-.27.41.27.34,2.04.34,2.24.34-.48.89-1.16,1.5-1.09.41,0,.68.27.89.82.34.88.07,1.36-.21,1.56-.41.27-1.03.2-1.5,0,.07.2.21.54.41.68.62.48,1.85.34,3.28-.14,1.71-.54,2.8-1.36,2.94-2.24.14-.54-.07-1.09-.41-1.43-.21.48-.62,1.29-1.16,1.36-.34,0-.68-.2-.96-.75-.41-.75-.48-1.29-.14-1.63.41-.48,1.85-.2,1.98-.14.21.07-.07-.27-.21-.34-.48-.54-.89-.95-.89-1.43s.21-.82.55-1.02c.48-.27,1.16-.2,1.44.07.27.27.34.82.14,2.11,0,.14-.21.75.07.41.27-.27,1.37-1.29,1.98-1.02.41.14.62.61.62,1.36,0,.54-.14.88-.48,1.09-.48.27-1.37-.2-1.78-.48-.07.34,0,.82.27,1.16.48.61,1.71.95,3.35.82,1.71-.2,2.67-.75,3.15-1.43.27-.41.55-1.22.34-1.9-.27.34-1.16,1.09-1.57,1.09s-.68-.34-.96-.88c-.21-.54-.21-1.16.07-1.43.41-.41,1.71.2,2.39.48-.07-.27-.14-.54-.27-.88-.07-.27-.21-.54-.27-.68-.14-.27-.48-.68-.27-1.09.27-.48.75-.75,1.3-.75.62,0,1.09.27,1.3.75.21.41-.07.75-.27,1.09-.07.2-.21.34-.27.68-.14.34-.21.61-.27.88.62-.27,1.92-.88,2.39-.48.27.27.27.82.07,1.43-.27.61-.55.88-.96.88s-1.37-.75-1.57-1.09c-.14,1.02.21,1.63.34,1.9.48.68,1.44,1.29,3.15,1.43,1.64.14,2.87-.2,3.35-.82.27-.34.34-1.02.34-1.36-.41.27-1.3.88-1.85.61-.34-.14-.48-.54-.48-1.09,0-.82.21-1.22.62-1.36.62-.27,1.92,1.09,1.98.88.07-.14,0-.34,0-.48-.07-.82-.14-1.77.27-1.97.34-.27.96-.27,1.37-.07.34.2.55.54.55,1.02s-.21.75-.68,1.36c-.07.14-.62.54-.34.48.27-.07,1.57-.27,1.92.2.27.34.27.88-.14,1.63-.27.54-.62.75-.96.75-.55-.07-.89-.95-1.16-1.36-.21.27-.62.95-.48,1.5.21.82,1.37,1.7,3.01,2.24,1.44.48,2.6.61,3.21.14.27-.2.41-.54.48-.75-.48.2-1.09.27-1.57.07-.27-.14-.55-.54-.27-1.63.14-.54.55-.82.89-.82.55-.07,1.09.48,1.44.95,0-.2.07-.34.07-.54-.07-.75.14-1.36.55-1.56.21-.14.68-.27,1.44.2.41.27.41.61.41.61v.14l.34.14Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M25.17,8.29c-1.64,0-3.01,1.36-3.01,2.99,0,1.36.89,2.45,2.12,2.86l.14.54c.14-.07.21-.07.34-.07,0-.14,0-.27-.07-.34h.68c0,.14,0,.27-.07.34.14,0,.27.07.34.07l.14-.54c1.23-.34,2.12-1.5,2.12-2.86.27-1.63-1.09-2.99-2.74-2.99ZM24.96,8.84h.41v2.72h-.41v-2.72ZM22.64,11.28c0-1.29.96-2.31,2.19-2.45v2.72h-2.19v-.27ZM25.17,13.73c-1.09,0-1.98-.68-2.33-1.56h4.65c-.34.88-1.3,1.56-2.33,1.56ZM27.56,11.83c-.07.14-.07.2-.07.2h-4.72s0-.07-.07-.2c0-.14-.07-.2-.07-.2h4.92c.07,0,.07.07,0,.2ZM25.51,11.49v-2.65c1.23.14,2.19,1.22,2.19,2.45v.27l-2.19-.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M25.85,5.03v-1.77h-1.44v1.77h-1.98v1.43h1.98v2.11h.14s.41-.07.62-.07.55.07.55.07h.14v-2.11h1.98v-1.43h-1.98Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M14.91,45.2l8.21.68.41-1.09-.14.48-8.48-.41s-.48,0-.48-.54.48-.61.48-.61l8.89-.27.55-6.59c0-.27.27-.48.82-.48.48,0,.75.2.75.48l.55,6.59,8.96.27s.48,0,.48.61c0,.54-.48.54-.48.54l-8.41.41.21.68,8.21-.68c.07,0,1.03-.07,1.03-.88,0-.95-.68-1.02-1.09-1.09l-8.21-.48c-.07-.82-.34-4.08-.41-5.51-.07-1.36-.89-1.63-1.23-1.7h-.55c-.34.07-1.16.34-1.23,1.7-.07,1.36-.34,4.62-.41,5.51l-8.21.48c-.41,0-1.09.14-1.09,1.09-.14.75.75.82.89.82ZM35.63,59.28l1.3.61s-.89,1.63-4.1,4.35l.27.41h.07c2.74-1.97,4.24-4.89,4.24-4.89l-1.16-.48,2.39-.88c-.41,1.29-1.44,4.42-4.92,6.93-.07.07-.14.14-.27.2l-.07-.27c-.07.07-.21.14-.27.2l.27.2c-2.46,1.56-5.47,2.31-8.14,2.31s-5.81-.82-8.28-2.45l.14-.27c-.07-.07-.21-.14-.27-.2l-.07.27c-.07,0-.07-.07-.14-.07-3.49-2.58-4.58-5.64-4.99-6.93l2.39.88-1.16.41s1.3,2.85,4.1,4.83l.21-.41c-3.21-2.72-3.9-4.21-3.9-4.21l1.3-.61-3.35-1.43s.68,4.69,5.13,7.95c2.67,1.97,5.75,3.13,8.69,3.13s6.09-1.16,8.69-3.13c4.58-3.19,5.27-7.89,5.27-7.89l-3.35,1.43ZM27.08,66.55c.89,0,3.42-.48,4.92-1.29l.48-.27.14-.07-.21-.41-.62.34c-1.44.75-3.9,1.09-4.58,1.09-.62,0-.82-.14-.82-.82v-4.83l-.75-.48v.07l.27.14v5.51c.07.88.68,1.02,1.16,1.02ZM23.12,65.94c-.62,0-3.08-.27-4.58-1.09l-.62-.34-.21.41.62.34c1.5.82,3.97,1.29,4.92,1.29.48,0,1.09-.07,1.09-1.02v-5.51l.27-.14v-.07l-.75.48v4.83c0,.61-.14.82-.75.82Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M38.78,49.69h-10.12l-3.28-9.24-.21-.68-.21.68-3.42,9.24h-10.12l.62.41,7.87,5.64-3.35,9.92,8.55-6.12,8.41,6.19-3.28-9.99,7.93-5.64.62-.41ZM29.48,55.47l-.14-.07v.07l.14.07v-.07l3.15,8.9-1.03-1.43.21.54.68.95-7.25-5.64v-.27l-.07-.07-.14.07v.27l-7.45,5.64.89-1.22-.41.27.07-.27-.75.95,3.15-8.77-7.73-5.3,1.09.34-.21-.07h.34l-1.16-.34,9.03.2.14.14h.07l-.14-.07,3.08-9.38v1.56l.07-.27.14.34v-1.7l2.94,9.24-.21.27h.21l.14-.14,8.89-.2-1.09.34h.27l-.27.2,1.3-.41-7.93,5.3Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M12.58,50.1l12.52,4.15-.07-.07,7.66,10.67.14-.14-7.59-10.67h-.07l-12.52-4.08-.07.14Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M17.37,64.71l7.87-10.54-.07.07,12.72-4.28-.07-.14-12.72,4.21h-.07l-7.8,10.6.14.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M25.03,40.79v18.08h.2v-18.08h-.2Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M19.97,55.81l5.2-1.56h-.07l5.06,1.56.07-.2-5.06-1.56h-.07l-5.2,1.56.07.2Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M21.48,49.69l3.56,4.49.14.07.07-.07,3.49-4.49-.14-.07-3.56,4.42h.21l-3.62-4.42-.14.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M13.95,66.69c-.27,0-.62.07-.89.14.07.07.14.14.21.2.21-.07.48-.14.68-.14,1.37,0,2.39,1.09,2.39,2.38v.14c.07,0,.14.07.21.14v-.27c.07-1.43-1.16-2.58-2.6-2.58ZM15.59,71.99c-.48.27-1.09.48-1.64.48-1.78,0-3.15-1.43-3.15-3.13,0-.27.07-.61.14-.88-.07,0-.14-.07-.14-.14-.07-.07-.14-.14-.14-.2-.14.34-.21.82-.21,1.22,0,1.97,1.64,3.53,3.56,3.53.75,0,1.44-.2,1.98-.61h-.07c-.14-.07-.27-.14-.34-.27ZM9.51,45.88c-.07.14-.14.27-.21.27.62.61.89,1.36.89,2.24,0,1.7-1.3,3.06-3.01,3.13-.07.2-.14.34-.14.48,1.98,0,3.56-1.63,3.56-3.53,0-1.02-.41-1.9-1.09-2.58ZM7.25,44.93h-.21c-1.98,0-3.56,1.56-3.56,3.53,0,1.29.68,2.38,1.64,2.99-.07-.2-.07-.41,0-.54-.75-.61-1.23-1.5-1.23-2.45,0-1.77,1.44-3.13,3.15-3.13,0-.07.07-.14.07-.2s.07-.14.14-.2ZM13.95,65.8c-.68,0-1.3.2-1.78.48.14.14.21.2.27.27.48-.27.96-.41,1.5-.41,1.78,0,3.15,1.43,3.15,3.13,0,.27,0,.54-.07.75v.07c.07,0,.21.07.41.14.07-.27.14-.61.14-.88,0-1.97-1.64-3.53-3.62-3.53ZM22.3,36.78h-.41c.34.82.96,1.43,1.78,1.84v-.48c-.62-.34-1.09-.82-1.37-1.36ZM5.06,46.7c-.41.48-.68,1.09-.68,1.77,0,.61.21,1.16.62,1.63,0-.07,0-.14.07-.2v-.07c-.27-.41-.41-.88-.41-1.36,0-1.09.75-2.04,1.85-2.31.07-.14.21-.27.34-.34-.68.07-1.3.41-1.78.88ZM36.32,71.78c-.27,0-.55-.07-.82-.14q-.07.07-.14.14c.27.14.62.2.96.2,1.44,0,2.67-1.16,2.67-2.65,0-.27-.07-.48-.14-.75h-.07s0,.2-.07.41v.34c0,1.36-1.09,2.45-2.39,2.45ZM42.88,51.05q.07,0,0,0c.07-.07,0-.14-.07-.2-1.16-.2-1.98-1.16-1.98-2.38,0-.54.21-1.02.48-1.36-.07-.07-.07-.14-.14-.27-.34.48-.55,1.02-.55,1.56-.07,1.36.96,2.52,2.26,2.65ZM7.18,51.05c1.44-.07,2.53-1.22,2.53-2.65,0-.54-.21-1.09-.48-1.5-.07.07-.07.14-.14.2.27.41.41.82.41,1.36,0,1.29-.96,2.31-2.26,2.38-.07.14-.07.2-.07.2ZM13.95,71.92c.27,0,.55-.07.82-.14-.07-.07-.14-.07-.14-.14-.21.07-.41.07-.62.07-1.37,0-2.39-1.09-2.39-2.38v-.07c-.14-.14-.14-.27-.21-.41,0,.14-.07.27-.07.41,0,1.5,1.16,2.65,2.6,2.65ZM23.05,36.64c-.14,0-.21-.07-.27-.07.21.34.48.68.89.95v-.2c-.27-.2-.41-.41-.62-.68ZM42.81,51.59c-1.57-.2-2.8-1.5-2.8-3.13,0-.88.34-1.7.96-2.31-.07-.07-.14-.2-.21-.34-.75.68-1.16,1.56-1.16,2.65,0,1.9,1.5,3.47,3.35,3.53,0-.07-.07-.2-.14-.41ZM45.62,48.47c0,.61-.21,1.16-.55,1.56v.27c.48-.48.82-1.16.82-1.9,0-1.29-.96-2.38-2.26-2.58.14.07.27.2.34.34.96.34,1.64,1.29,1.64,2.31ZM39.33,68.32c.14.34.14.68.14.95,0,1.77-1.44,3.13-3.15,3.13-.62,0-1.3-.2-1.78-.54-.07.07-.21.2-.41.27.62.48,1.37.75,2.19.75,1.98,0,3.56-1.56,3.56-3.53,0-.48-.14-.95-.27-1.43-.07.2-.14.34-.27.41ZM44.8,50.64q.07,0,0,0h0ZM43.22,44.93h-.07c.07.07.07.14.14.2,0,.07.07.14.07.2.82,0,1.57.34,2.19.95.62.61.89,1.36.89,2.18,0,1.02-.48,1.97-1.37,2.58,0,.14,0,.34-.14.61,1.16-.61,1.92-1.77,1.92-3.13-.07-1.97-1.64-3.6-3.62-3.6ZM27.22,34.26c.14,0,.21,0,.27.07-.41-.95-1.37-1.56-2.39-1.56-1.09,0-2.05.68-2.46,1.63.07-.07.21-.14.34-.14.41-.75,1.23-1.22,2.12-1.22.96-.07,1.71.48,2.12,1.22ZM27.49,36.64c-.07,0-.21.07-.34.07-.14.2-.34.41-.55.61v.27c.41-.27.68-.61.89-.95ZM28.04,36.78c-.27.54-.75,1.02-1.3,1.36v.48c.75-.34,1.37-1.02,1.71-1.77h-.27c-.07-.07-.14-.07-.14-.07ZM25.1,31.81c-1.78,0-3.28,1.29-3.56,2.99.14-.14.27-.2.41-.2v-.07c.34-1.36,1.64-2.38,3.08-2.38s2.74,1.02,3.08,2.38c.14,0,.27.07.48.14-.27-1.56-1.71-2.86-3.49-2.86ZM33.1,69.34c0-1.77,1.44-3.13,3.15-3.13.48,0,.96.14,1.37.27h.07c.07-.07.14-.2.27-.27-.48-.27-1.09-.41-1.71-.41-1.98,0-3.56,1.56-3.56,3.53,0,.34.07.68.14,1.02.07-.07.21-.14.27-.2.07,0,.07-.07.14-.07v-.07c-.14-.2-.14-.41-.14-.68ZM36.32,66.96c.21,0,.34,0,.55.07.07-.07.14-.14.27-.2-.27-.07-.48-.14-.75-.14-1.44,0-2.67,1.16-2.67,2.65,0,.2,0,.41.07.68.07-.07.14-.14.21-.2,0-.14-.07-.27-.07-.41-.07-1.36,1.03-2.45,2.39-2.45Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M37.89,41.47s.07.34.41.68c.27.34.82.54.82.54,0,0,.07.34.27.75.21.41.75.61.75.61,0,0,.07.48.21.68.14.27.55.54.55.54,0,0-.14.2-.07.48.14.34.27.48.27.48-.21.82.48,1.09.48,1.09.48.27,1.23-.2,1.23-.2,0,0,.68.07,1.09-.48.48-.61-.55-.95-.55-.95,0,0,.14-.2-.07-.61-.21-.41-.68-.54-.68-.54,0,0,0-.34-.14-.82-.14-.48-.82-.82-.82-.82,0,0,.07-.27-.14-.68-.27-.54-.96-.88-.96-.88,0,0-.14-.27-.34-.68-.55-.54-1.16-.54-1.16-.54,0,0-.14-.61-.34-.82-.34-.34-1.03-.48-1.03-.48,0,0-.07-.27-.48-.68-.34-.34-1.16-.41-1.16-.41,0,0-.07-.34-.48-.68-.48-.34-1.16-.27-1.16-.27,0,0,0-.2-.62-.61-.62-.41-1.16-.27-1.16-.27,0,0-.21-.27-.62-.48-.48-.27-1.16-.14-1.16-.14,0,0-.21-.27-.82-.48-.62-.2-1.16.07-1.16.07-.55-.48-1.03-.2-1.03-.2,0,0-.07-.48-.62-.41-1.09.2-.75,1.09-.75,1.09,0,0-.21.14-.27.61-.07.48.27.75.62.82.27.07.82-.14.82-.14,0,0,.21.2.48.2h.62s.21.2.68.34c.48.14,1.03,0,1.03,0,0,0,0,.2.48.41.48.2.96.07.96.07,0,0,.27.41.75.68.41.2.96.14.96.14,0,0,.27.34.68.61.34.27.96.34.96.34,0,0,.21.41.48.68.27.2.96.34.96.34,0,0,.27.48.48.68.14.07.75.34.75.34ZM42.2,47.24c-.07.07-.41,0-.55-.07-.14-.07-.21-.2-.21-.27s0-.07.07-.14h.14c.07.07.14.07.27.14.07,0,.14.07.21.07.07.07.14.07.14.14s0,.07-.07.14ZM43.09,46.16c.14.07.34.2.34.41,0,.14-.07.27-.48.41-.68.14-1.3-.34-1.5-.68-.14-.2-.14-.27-.07-.34s.27-.07.48.07c.41.2.68.2.89.14.07-.07.21-.07.34,0ZM42.61,45.14c.07.34.07.54-.07.61-.07.07-.21.07-.48-.07h-.07c-.82-.2-1.16-.34-1.37-1.16,0-.07,0-.2.07-.2.07-.07.27,0,.48.07.14.07.27.07.41.14.68.14,1.03.41,1.03.61ZM41.79,43.71c.14.34.14.54.07.61-.07.07-.21.07-.48,0h-.14c-.96-.27-1.3-.34-1.64-1.16,0-.07-.07-.14,0-.2.07-.07.27,0,.62.07.14.07.27.07.41.14.75.07,1.09.27,1.16.54ZM40.76,42.08c.14.34.14.48.07.61-.07.07-.21.07-.48.07h-.14c-.96-.07-1.37-.14-1.71-.88-.07-.07-.07-.14,0-.2.07-.14.34-.07.62,0,.14,0,.27.07.41.07.75,0,1.09.14,1.23.34ZM39.53,40.85c.14.2.21.34.14.41-.07.14-.21.14-.41.14-1.03,0-1.57-.2-1.92-.68-.07-.14-.07-.2-.07-.27.07-.14.34-.14.68-.14h.48c.48.07.89.27,1.09.54ZM26.74,34.87c0-.14.07-.2.21-.27h.27l.07.07s-.27.14-.34.27l-.07.07c-.14.07-.14,0-.14-.14ZM27.36,36.23c0,.07,0,.14-.07.2-.14.07-.41.07-.55-.07-.14-.14-.21-.27-.14-.48,0-.14.14-.34.41-.54.55-.34.96-.27.96-.27.07,0,.07.07.07.14s-.07.14-.21.27c-.34.14-.55.61-.48.75ZM27.97,36.37c-.14-.07-.21-.2-.21-.27,0-.27.41-.54.75-.68.48-.27.82-.27,1.09-.14,0,0,.07,0,.07.07.14.07.27.14.27.27,0,.07-.07.2-.27.27-.27.14-.55.34-.68.48-.34.14-.55.27-1.03,0ZM29.41,36.64c-.07-.07-.14-.14-.07-.2.07-.2.41-.41,1.03-.61.41-.14.89-.27,1.16-.07l.07.07c.14.07.27.2.27.34,0,.07-.14.14-.27.2-.27.07-.55.2-.75.27-.62.2-1.03.41-1.44,0ZM30.91,37.12c-.07-.07-.07-.14-.07-.14.07-.27.89-.48,1.16-.54.48-.14.89-.2,1.09.07,0,0,.07.07.14.14.14.14.27.2.27.34,0,.07-.14.14-.27.2-.27.07-.48.14-.68.27-.55,0-.96.2-1.64-.34ZM34.13,38.07c-.55.14-1.09.2-1.37-.34-.07-.07-.07-.2,0-.27.14-.27.68-.27,1.3-.34h.07c.55-.07.82.07,1.03.27l.07.07c.14.14.21.27.14.34-.07.07-.14.14-.34.14-.34.07-.62.07-.89.14ZM34.4,38.68c-.07-.14-.07-.2-.07-.27.14-.2.62-.27,1.03-.27h.21c.55-.07.82.07,1.03.27l.07.07c.14.14.21.27.14.34-.07.07-.14.14-.34.14-.27,0-.55.07-.75.07-.48.14-.96.2-1.3-.34ZM35.91,39.7c-.07-.14-.07-.2-.07-.27.07-.2.48-.2.82-.2h.27c.55-.07.82.07,1.03.27l.07.07c.14.14.21.27.14.34-.07.07-.14.14-.34.14-.27,0-.48.07-.68.07-.48.07-.82.14-1.23-.41ZM35.29,70.42s.14-.2-.14-.61c-.27-.41-.62-.41-.96-.27-.27.14-.62.61-.62.61,0,0-.27-.07-.48.07-.27.14-.48.34-.48.34,0,0-.27-.07-.75.14-.48.2-.82.61-.82.61,0,0-.14-.14-.68-.07-.55.07-.82.48-.82.48,0,0-.48-.2-1.03-.07-.41.07-.82.48-.82.48,0,0-.41-.14-.89-.07-.41,0-1.03.27-1.03.27,0,0-.41-.27-.75-.27-.34-.07-.96.27-.96.27,0,0-.55-.27-.82-.27-.27-.07-.89.14-.89.14,0,0-.27-.2-.75-.34-.48-.14-.96,0-.96,0,0,0-.27-.27-.68-.41-.41-.2-.96-.07-.96-.07,0,0-.27-.34-.55-.48-.27-.14-.75-.14-.75-.14,0,0,0-.27-.21-.41-.34-.2-.55-.27-.55-.27-.34-.82-1.03-.61-1.03-.61-.55.07-.89.88-.89.88,0,0-.55.27-.62,1.02,0,.75,1.03.41,1.03.41,0,0,0,.2.41.41.34.2.82.07.82.07,0,0,.21.27.62.54.41.27,1.16.14,1.16.14,0,0,.14.27.48.48.55.27,1.3.14,1.3.14,0,0,.27.2.68.34.75.27,1.23-.14,1.23-.14,0,0,.41.41.75.48.48.07,1.16-.2,1.16-.2,0,0,.27.2.75.27.48.07,1.23-.34,1.23-.34,0,0,.27.27.82.27.62,0,1.16-.41,1.16-.41,0,0,.14.14.82.14.75,0,1.09-.48,1.09-.48,0,0,.34.14.82.07.55-.07,1.03-.61,1.03-.61,0,0,.34.14.89-.07.62-.2.89-.75.89-.75.75.07.96-.41.96-.41,0,0,.34.34.75,0,.89-.75,0-1.29,0-1.29ZM15.53,70.08c.07-.14.34-.27.48-.27s.27.07.27.14.07.07,0,.14c0,0-.07.07-.14.07s-.21,0-.27.07c-.07,0-.14.07-.27.07,0-.07,0-.14-.07-.2q0,.07,0,0ZM15.8,71.24c-.07.07-.21.14-.27.2-.14.07-.41,0-.48-.14-.07-.07-.14-.27.14-.61.48-.54,1.23-.48,1.64-.34.21.07.27.14.27.27s-.14.2-.48.27c-.48,0-.68.2-.82.34ZM16.41,71.99c-.27-.27-.34-.41-.34-.54s.14-.14.41-.27h.07c.75-.27,1.16-.41,1.78.2.07.07.14.14.07.2,0,.14-.21.2-.48.27-.14.07-.27.07-.41.14-.48.14-.89.2-1.09,0ZM17.99,72.74c-.27-.2-.41-.34-.41-.48s.14-.14.34-.27l.14-.07c.89-.34,1.3-.48,1.98,0,0,0,.14.07.14.2s-.27.2-.55.27c-.14.07-.27.07-.41.14-.62.27-1.03.34-1.23.2ZM20.93,73.08c-.55.34-.96.41-1.16.27-.27-.2-.41-.27-.41-.41s.14-.2.34-.27l.07-.07c.82-.48,1.16-.68,1.91-.27.07.07.14.07.14.14,0,.14-.21.27-.48.41-.14.07-.27.14-.41.2ZM21.54,73.69c-.21-.07-.34-.2-.34-.27,0-.14.07-.27.27-.34.82-.61,1.37-.82,1.91-.54.14.07.21.14.21.2,0,.14-.21.27-.48.48-.14.07-.27.2-.34.27-.48.2-.96.27-1.23.2ZM24.49,73.55c-.41.34-.75.48-1.03.34h-.14c-.14-.07-.34-.07-.34-.2,0-.07.07-.2.21-.27.21-.14.34-.27.55-.48.41-.41.75-.68,1.3-.41.14.07.21.14.21.2,0,.2-.27.41-.55.61-.07.07-.14.14-.21.2ZM26.26,73.55c-.41.34-.75.48-1.03.34h-.14c-.14-.07-.34-.07-.34-.2,0-.07.07-.2.21-.27.21-.2.41-.34.55-.54.41-.41.75-.75,1.3-.48.14.07.21.14.21.2.07.27-.34.54-.68.82.07.07,0,.14-.07.14ZM28.18,73.42c-.48.41-.82.54-1.09.41h-.14c-.14-.07-.34-.07-.34-.2,0-.07.07-.2.21-.27.27-.2.41-.41.62-.54.41-.41.75-.82,1.37-.54.14.07.14.14.21.2.07.2-.34.61-.82.95ZM29.27,73.48h-.14c-.21,0-.34,0-.41-.14,0-.07,0-.2.14-.27.21-.2.27-.41.41-.61.27-.48.55-.82,1.37-.82.07,0,.14.07.14.07.07.27-.41.88-.62,1.16-.34.41-.62.68-.89.61ZM31.87,72.4c-.27.34-.55.75-.89.75h-.14c-.14,0-.34,0-.41-.14-.07-.07,0-.2.14-.34.21-.27.34-.48.48-.68.27-.48.48-.82,1.09-.82.14,0,.21.07.21.14.14.14-.07.54-.48,1.09ZM33.65,71.72c-.27.48-.48.75-.75.75h-.14c-.14,0-.34.07-.41-.07-.07-.07,0-.2.07-.34.21-.27.27-.54.27-.82.14-.41.21-.68.75-.68.14,0,.27.07.34.14.21.2.07.68-.14,1.02ZM34.88,70.76c-.21.61-.62.75-.62.75-.07,0-.14,0-.14-.07-.07-.07,0-.2.07-.34.21-.34.07-.82-.07-.88-.07-.07-.07-.14-.07-.2.07-.14.27-.27.48-.27s.27.14.41.27c0,.2.07.41-.07.75ZM35.29,71.38c-.07.07-.21.14-.27.14h-.07c0-.07.14-.27.14-.41,0-.07.07-.07.07-.07.07,0,.14.07.21.14.07-.07.07.07-.07.2ZM15.11,39.29s.62-.14.96-.34c.34-.27.68-.61.68-.61,0,0,.55.07.96-.14.48-.2.75-.68.75-.68,0,0,.48.14.96-.07.48-.2.48-.41.48-.41,0,0,.48.2,1.03,0,.48-.14.68-.34.68-.34h.62c.27,0,.48-.2.48-.2,0,0,.55.2.82.14.34-.07.68-.27.62-.82-.07-.48-.27-.61-.27-.61,0,0,.41-.88-.75-1.09-.55.07-.62.54-.62.54,0,0-.48-.27-1.03.2,0,0-.55-.27-1.16-.07-.62.2-.82.48-.82.48,0,0-.68-.14-1.16.14-.41.2-.62.48-.62.48,0,0-.55-.2-1.16.27-.62.41-.62.61-.62.61,0,0-.68-.07-1.16.27-.41.27-.48.68-.48.68,0,0-.82.07-1.16.41-.34.34-.48.68-.48.68,0,0-.75.14-1.03.48-.21.27-.34.82-.34.82,0,0-.62,0-1.09.61-.27.41-.34.68-.34.68,0,0-.75.34-.96.88-.21.34-.14.68-.14.68,0,0-.68.27-.82.82-.14.48-.14.82-.14.82,0,0-.48.2-.68.54-.21.41-.07.61-.07.61,0,0-1.03.34-.55.95.48.61,1.09.48,1.09.48,0,0,.68.48,1.23.2,0,0,.62-.27.48-1.09,0,0,.21-.14.27-.48.07-.2-.07-.48-.07-.48,0,0,.41-.27.55-.54.14-.27.21-.68.21-.68,0,0,.48-.27.75-.61.21-.34.27-.75.27-.75,0,0,.48-.2.82-.54.27-.34.41-.68.41-.68,0,0,.62-.2.82-.41.21-.2.48-.68.48-.68,0,0,.68-.14.96-.34.14-.34.34-.82.34-.82ZM23.05,34.74s.07-.07,0,0c.07-.14.21-.14.34-.07.14,0,.21.14.21.27,0,.07,0,.2-.07.2,0,0-.07,0-.07-.07-.07-.14-.34-.27-.41-.34ZM22.36,35.14s.41-.14.96.27c.34.2.41.41.41.54,0,.2-.07.34-.14.48-.14.14-.41.14-.55.07-.07-.07-.14-.14-.07-.2.07-.14-.14-.61-.48-.82-.14-.07-.21-.14-.21-.27,0-.07.07-.07.07-.07ZM20.72,35.28c.07,0,.07-.07.07-.07.27-.14.62-.14,1.09.14.34.2.68.41.75.68,0,.14-.07.2-.21.27-.48.34-.68.14-1.03-.14-.21-.14-.41-.34-.68-.48-.21-.07-.27-.14-.27-.27-.07,0,.14-.07.27-.14ZM18.74,35.82l.07-.07c.27-.2.75-.07,1.16.07.68.2,1.03.41,1.03.61,0,.07,0,.14-.07.2-.48.41-.82.2-1.37,0-.21-.14-.48-.2-.75-.27-.21-.07-.27-.14-.27-.2,0-.14.07-.2.21-.34ZM17.1,36.57q.07-.07.14-.14c.21-.27.62-.14,1.09-.07.27.07,1.09.27,1.16.54q0,.07-.07.14c-.68.54-1.03.41-1.57.2-.21-.07-.41-.2-.68-.27-.21-.07-.27-.07-.27-.2-.07,0,.07-.14.21-.2ZM15.18,37.46l.07-.07c.21-.27.48-.34,1.03-.27h.14c.55.07,1.16.14,1.3.34.07.07,0,.2,0,.27-.34.54-.82.41-1.37.34-.27-.07-.55-.07-.82-.14-.21,0-.27-.07-.34-.14-.21-.07-.07-.2,0-.34ZM8.69,47.18c-.14.07-.48.14-.55.07l-.07-.07c0-.07.07-.07.14-.14.07-.07.14-.07.21-.07.14-.07.21-.07.27-.14.07-.07.07,0,.14,0s.07.07.07.14c0,0-.07.14-.21.2ZM8.96,46.29c-.21.34-.82.82-1.5.68-.41-.07-.48-.27-.48-.41,0-.2.21-.34.34-.41.14-.07.27,0,.34,0,.21,0,.48.07.89-.14.27-.14.41-.14.48-.07.07,0,.07.2-.07.34ZM9.64,44.59c-.21.82-.55.95-1.37,1.16h-.07c-.27.07-.41.14-.48.07-.07-.07-.07-.27-.07-.61.07-.27.34-.48.96-.61.14-.07.27-.07.41-.14.27-.07.41-.14.48-.07.14,0,.21.07.14.2ZM10.67,43.1c-.34.82-.68.95-1.64,1.16h-.14c-.27.07-.41.07-.48,0-.07-.07-.07-.27.07-.61.07-.27.41-.48,1.09-.61.14,0,.27-.07.41-.14.27-.07.55-.2.62-.07.14.14.07.2.07.27ZM11.76,41.81c-.34.75-.68.82-1.71.88h-.14c-.27,0-.41.07-.48-.07-.07-.07,0-.27.07-.61.07-.27.48-.41,1.09-.48.14,0,.27,0,.41-.07.34-.07.55-.07.62,0,.21.2.21.27.14.34ZM13.06,40.79c-.34.48-.89.68-1.91.68-.21,0-.34-.07-.41-.14-.07-.14,0-.27.14-.41.21-.27.62-.48,1.09-.41h.48c.34,0,.62,0,.68.14,0-.07,0,0-.07.14ZM14.43,39.7c-.34.54-.75.48-1.3.41-.21,0-.41-.07-.68-.07-.21,0-.27-.07-.34-.14-.07-.14.07-.27.14-.34l.07-.07c.21-.27.48-.34,1.03-.27h.27c.34,0,.75,0,.82.2.07.07.07.14,0,.27ZM13.82,38.95c-.21,0-.27-.07-.34-.14-.07-.14.07-.27.14-.34l.07-.07c.21-.27.48-.34,1.03-.27h.21c.41,0,.89.07,1.03.27.07.07,0,.2-.07.27-.34.54-.82.48-1.37.34-.14,0-.41-.07-.68-.07ZM12.52,66.62s-.07-.2-.41-.41c-.21-.14-.41-.07-.41-.07,0,0-.21-.48-.34-.68-.21-.2-.62-.41-.62-.41,0,0-.07-.54-.34-.88-.27-.34-.62-.48-.62-.48,0,0-.07-.54-.27-.95-.27-.41-.55-.61-.55-.61,0,0,0-.68-.21-.88-.14-.2-.55-.61-.55-.61,0,0,.07-.68-.07-.95-.14-.27-.48-.61-.48-.61,0,0,.07-.61-.07-1.02-.14-.41-.34-.82-.34-.82,0,0,.21-.48.21-.88-.07-.48-.41-.88-.41-.88,0,0,.27-.41.21-.95-.07-.54-.27-.61-.27-.61,0,0,.27-.41.34-.95,0-.54-.14-.75-.14-.75,0,0,.14-.27.21-.61.07-.27-.07-.48-.07-.48,0,0,.34-.48.34-.75.07-.34-.07-.75-.55-.82-.48-.07-.68.14-.68.14,0,0-.89-.75-1.37.27-.27.48.21.75.21.75,0,0-.41.34-.07,1.02,0,0-.41.48-.41,1.09s.21.88.21.88c0,0-.34.61-.21,1.16.14.41.27.75.27.75,0,0-.34.48-.07,1.16.21.68.41.75.41.75,0,0-.27.61-.07,1.22.21.48.48.68.48.68,0,0-.21.82.07,1.22.27.48.48.61.48.61,0,0-.07.75.14,1.16.14.27.68.54.68.54,0,0-.21.61.27,1.22.27.34.55.54.55.54,0,0,.14.82.55,1.22.27.27.62.34.62.34,0,0,.07.75.48,1.02.41.27.75.34.75.34,0,0,0,.48.34.82.34.27.55.2.55.2,0,0,.07,1.09.75.82.68-.27.82-.88.82-.88,0,0,.68-.54.55-1.09,0-.07-.07-.75-.89-.88ZM6.16,50.03c.27-.27.55-.27.68-.27.21,0,.27.14.41.27.07.2,0,.41-.14.54-.07.07-.14.07-.21,0-.14-.07-.62-.07-.89.2-.14.14-.21.2-.27.14-.07,0-.07-.07-.07-.14-.07.14,0-.34.48-.75ZM5.47,49.83c.07-.14.21-.14.27-.14s.14.07.14.14c0,0,0,.07-.07.07-.14.07-.34.27-.34.27,0,0-.07,0-.07-.07s0-.14.07-.27ZM5.68,51.53c.27-.27.62-.54.89-.48.14,0,.21.14.27.27.21.54-.07.68-.41.88-.21.14-.41.27-.68.54-.14.14-.27.2-.34.2-.14-.07-.14-.2-.21-.34v-.14c-.07-.34.07-.61.48-.95ZM5.2,54.52c-.14-.27.14-.75.41-1.09.41-.54.75-.82.89-.82.07,0,.14.07.21.14.27.54-.07.88-.41,1.29-.14.2-.34.41-.48.68-.14.2-.21.27-.27.27-.14,0-.21-.2-.27-.34l-.07-.14ZM5.33,56.22c-.14-.27.07-.61.27-1.02.14-.27.62-.95.89-.95q.07,0,.14.14c.34.82.07,1.09-.27,1.56-.14.2-.27.34-.41.61-.07.14-.21.2-.27.2-.14,0-.21-.2-.27-.34,0-.07,0-.14-.07-.2ZM5.75,58.46l-.07-.07c-.21-.27-.21-.54.07-1.09l.07-.07c.21-.54.48-1.02.75-1.09.07,0,.21,0,.27.14.41.48.21.88-.14,1.43-.14.2-.27.48-.34.75-.07.2-.14.27-.21.27-.21,0-.34-.2-.41-.27ZM6.57,60.5c-.14,0-.21-.14-.27-.27l-.07-.07c-.21-.27-.21-.54.07-1.09,0-.07.07-.14.07-.2.14-.41.34-.82.55-.88.07,0,.21,0,.27.14.41.48.21.88-.07,1.36-.14.2-.21.41-.27.68-.14.2-.21.34-.27.34ZM7.39,61.86c-.07.2-.14.27-.21.27-.14,0-.21-.14-.27-.27l-.07-.07c-.21-.27-.21-.54.07-1.09.07-.07.07-.2.14-.27.14-.34.27-.68.41-.75.07,0,.14,0,.27.14.41.48.27.88,0,1.36-.14.2-.21.48-.34.68ZM8.07,63.83c-.14,0-.27-.07-.41-.27-.21-.27-.27-.68-.07-1.16.07-.14.07-.27.14-.41.07-.34.14-.61.27-.61.07,0,.14,0,.21.14.41.48.41,1.02.07,1.97,0,.2-.07.34-.21.34ZM9.3,64.85v.14c-.07.27-.07.41-.21.41s-.27-.07-.55-.27c-.21-.14-.27-.54-.14-1.16.07-.14.07-.27.07-.41.07-.34.07-.54.21-.61.07,0,.14,0,.21.07.62.48.62.88.41,1.84ZM10.46,66.28v.14c0,.27,0,.41-.14.41-.14.07-.27-.07-.55-.27-.27-.14-.34-.54-.27-1.22v-.41c0-.34,0-.54.14-.61.07-.07.21,0,.21.07.62.54.62.95.62,1.9ZM11.63,67.43c0,.34,0,.48-.14.54-.14.07-.27,0-.62-.14-.27-.14-.34-.48-.27-1.09v-.41c0-.27,0-.41.07-.48h.21c.75.34.82.75.75,1.56ZM12.58,68.59c-.21.34-.41.34-.55.34-.21-.07-.27-.27-.27-.41s.07-.27.14-.34c.07-.2.21-.41.14-.88-.07-.27,0-.48.07-.48.07-.07.21,0,.34.2.21.27.41.95.14,1.56ZM13.06,68.04q-.07,0,0,0c-.14,0-.14-.07-.14-.14v-.27c0-.14,0-.2-.07-.27v-.14s.07-.07.14,0c.07,0,.21.07.21.27,0,.14-.07.48-.14.54ZM45.07,53.63s.21-.27.21-.88-.41-1.09-.41-1.09c.34-.68-.07-1.02-.07-1.02,0,0,.48-.27.21-.75-.48-1.02-1.23-.34-1.23-.34,0,0-.14-.14-.68-.14-.48.07-.62.41-.55.82,0,.34.34.75.34.75,0,0-.14.2-.07.48.07.27.21.61.21.61,0,0-.14.27-.14.75,0,.54.34.95.34.95,0,0-.21.07-.27.61-.07.54.21.95.21.95,0,0-.34.41-.41.88-.07.41.21.88.21.88,0,0-.27.34-.34.82-.14.41-.07,1.02-.07,1.02,0,0-.34.34-.48.61-.14.27-.07.95-.07.95,0,0-.41.41-.55.61-.14.2-.21.88-.21.88,0,0-.27.2-.55.61-.27.41-.27.95-.27.95,0,0-.34.14-.62.48-.27.34-.34.88-.34.88,0,0-.41.2-.62.41-.21.2-.34.68-.34.68,0,0-.27-.07-.41.07-.34.2-.41.41-.41.41-.82.07-.89.75-.89.75-.14.54.55,1.09.55,1.09,0,0,.14.61.82.88.68.27.75-.82.75-.82,0,0,.21.07.55-.2.34-.27.34-.82.34-.82,0,0,.34-.14.75-.34.41-.27.48-1.02.48-1.02,0,0,.27-.07.62-.34.41-.41.55-1.22.55-1.22,0,0,.27-.2.55-.54.48-.61.27-1.22.27-1.22,0,0,.55-.27.68-.54.27-.41.14-1.16.14-1.16,0,0,.27-.2.48-.61.21-.41.07-1.22.07-1.22,0,0,.34-.2.48-.68.21-.61-.07-1.22-.07-1.22,0,0,.14-.07.34-.75.21-.68-.07-1.16-.07-1.16,0,0,.21-.27.27-.75.07-.34-.27-.95-.27-.95ZM44.18,49.83c0-.07.07-.14.14-.14.14,0,.27,0,.27.14.07.14.07.2.07.27s-.07.07-.07.07c0,0-.21-.2-.34-.27-.07,0-.07-.07-.07-.07ZM42.95,50.64c-.14-.14-.21-.34-.14-.54.07-.14.21-.27.41-.27.14,0,.41,0,.68.27.48.41.55.82.55.82,0,.07,0,.14-.07.14s-.21,0-.27-.14c-.27-.27-.75-.27-.89-.2-.07,0-.21,0-.27-.07ZM43.29,51.25c.07-.14.14-.27.27-.27.27-.07.62.2.89.48.34.34.55.68.48.95v.14c0,.14-.07.34-.21.34-.07,0-.21-.07-.34-.2-.21-.27-.48-.41-.68-.54-.41-.14-.62-.34-.41-.88ZM37.27,67.37c0,.07-.07.2-.07.27v.27c0,.07-.07.14-.07.14h-.07c-.07-.07-.14-.41-.14-.54s.14-.2.21-.27h.14v.14ZM38.03,68.93c-.14,0-.27,0-.55-.34-.34-.61-.07-1.36.21-1.63.14-.14.27-.27.34-.2.14.07.14.2.07.48-.07.48,0,.68.14.88.07.14.07.2.14.34-.07.2-.14.41-.34.48ZM39.12,67.77c-.34.14-.48.2-.62.14-.14-.07-.14-.2-.14-.48v-.07c0-.82,0-1.22.75-1.63.07-.07.14-.07.21,0,.14.07.07.27.07.48v.41c.07.68,0,1.09-.27,1.16ZM40.28,66.62c-.27.2-.48.27-.55.27-.07-.07-.14-.2-.14-.41v-.14c-.07-.95-.07-1.36.62-1.9,0,0,.14-.07.21-.07.14.07.14.27.14.61v.41c.07.61,0,1.09-.27,1.22ZM41.51,65.12c-.27.2-.41.27-.55.27-.14-.07-.14-.2-.21-.41v-.14c-.21-.95-.27-1.36.34-1.9.07-.07.14-.07.21-.07.14.07.14.27.21.61,0,.14.07.27.07.41.14.68.14,1.09-.07,1.22ZM42.34,63.56c-.14.2-.27.27-.41.27s-.21-.14-.27-.34c-.34-.95-.27-1.56.07-1.97.07-.07.14-.14.21-.14.14,0,.21.27.27.61.07.14.07.27.14.41.34.48.21.95,0,1.16ZM43.22,61.79l-.07.07c-.07.14-.21.27-.27.27s-.14-.14-.21-.27c-.07-.27-.21-.48-.27-.61-.27-.54-.41-.88,0-1.36.07-.07.21-.14.27-.14.21.07.27.34.41.75.07.14.07.2.14.27.14.48.21.82,0,1.02ZM43.84,60.09l-.07.07c-.07.14-.21.27-.27.27s-.14-.14-.21-.27c-.07-.27-.21-.48-.27-.68-.27-.54-.48-.88-.07-1.36.07-.07.14-.14.27-.14.27.07.41.48.55.88,0,.07.07.14.07.2.21.48.21.82,0,1.02ZM44.39,58.39l-.07.07c-.07.14-.21.27-.27.27s-.14-.14-.21-.27c-.07-.27-.21-.54-.34-.75-.27-.54-.48-.95-.14-1.43.07-.07.14-.14.27-.14.27.07.55.68.75,1.09l.07.07c.07.48.07.82-.07,1.09ZM44.73,56.22c0,.07-.07.07-.07.14-.07.14-.14.34-.27.34-.07,0-.14-.07-.27-.2-.14-.27-.27-.41-.41-.61-.34-.41-.62-.82-.27-1.56q.07-.07.14-.14c.27,0,.75.68.89.95.21.48.41.82.27,1.09ZM44.87,54.52s0,.07-.07.07c-.07.14-.14.27-.27.34-.07,0-.21-.07-.27-.27-.14-.27-.34-.48-.48-.68-.34-.41-.62-.75-.41-1.29.07-.07.07-.14.21-.14.21,0,.48.27.89.82.27.41.55.82.41,1.16Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M75.58,30.73h4.17v9.04l7.45-9.04h5.13l-8.55,9.92,8.82,11.15h-5.4l-7.45-9.79h-.07v9.79h-4.17v-21.07h.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M108.68,43.44l-7.52-12.71h4.86l4.86,8.84,4.99-8.84h4.38l-7.39,12.71v8.29h-4.17v-8.29Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M140.82,34.6c-1.3-.61-2.74-.95-4.24-.95s-3.28.61-3.28,2.92c0,3.67,9.1,2.11,9.1,9.18,0,4.62-3.62,6.39-7.8,6.39-2.26,0-3.28-.27-5.27-.82l.34-3.81c1.44.75,3.01,1.29,4.65,1.29s3.69-.82,3.69-2.72c0-4.01-9.1-2.38-9.1-9.38,0-4.69,3.62-6.46,7.25-6.46,1.78,0,3.42.27,4.99.75l-.34,3.6Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M158.95,34.06h-5.95v-3.33h16v3.33h-5.95v17.74h-4.17v-17.74h.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M178.58,30.73h4.45l5.27,16.59h.07l5.27-16.59h4.1l-6.98,21.07h-5.13l-7.04-21.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M209.01,30.73h12.24v3.33h-8.07v5.17h7.39v3.33h-7.39v5.91h8.14v3.33h-12.24v-21.07h-.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M234.52,30.73h4.51c4.45,0,9.71-.14,9.71,5.71,0,2.45-1.64,4.55-4.24,4.89v.07c1.09.07,1.78,1.22,2.19,2.18l3.35,8.23h-4.65l-2.46-6.59c-.62-1.56-1.1-2.18-2.87-2.18h-1.37v8.77h-4.17v-21.07ZM238.69,39.7h1.37c2.05,0,4.38-.27,4.38-2.92s-2.32-2.79-4.38-2.79h-1.37v5.71Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M262.36,30.73h4.17v9.04l7.45-9.04h5.13l-8.55,9.92,8.82,11.15h-5.4l-7.45-9.79h-.07v9.79h-4.17l.07-21.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M290.74,30.73h12.24v3.33h-8.07v5.17h7.39v3.33h-7.39v5.91h8.07v3.33h-12.24v-21.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M319.95,34.06h-5.95v-3.33h16v3.33h-5.95v17.74h-4.17v-17.74h.07Z'%20style='fill:%20%2300066d;'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3cpath%20d='M355.59,31.1h11.09v1.86h-9.02v7.91h7.73v1.86h-7.73v9.44h-2.07v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M378.79,43.12l-7.1-12.02h2.37l4.47,7.64c.63,1.08,1.29,2.52,1.29,2.52h.06s.63-1.41,1.29-2.52l4.47-7.64h2.34l-7.07,12.02v9.05h-2.1v-9.05Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M394.8,31.1h6.24c2.16,0,3.12.21,3.96.57,1.98.87,3.18,2.88,3.18,5.43,0,2.85-1.62,5.04-3.99,5.7v.06s.21.27.54.84l4.59,8.48h-2.37l-4.77-8.87h-5.31v8.87h-2.07v-21.08ZM401.88,41.44c2.55,0,4.17-1.65,4.17-4.29,0-1.74-.69-3.03-1.92-3.69-.63-.33-1.38-.51-3-.51h-4.26v8.48h5.01Z'%20style='fill:%20%2300066d;'/%3e%3c/g%3e%3c/svg%3e", I6 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20591.26%2083'%3e%3cdefs%3e%3cclipPath%20id='clippath'%3e%3crect%20width='330'%20height='83'%20style='fill:%20none;'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20style='clip-path:%20url(%23clippath);'%3e%3cg%3e%3cpath%20d='M0,53.84c0,17.88,15.66,25.9,24.96,29.09l.14.07.14-.07c4.58-1.63,11.22-4.69,16.41-9.72,5.61-5.44,8.48-11.9,8.48-19.37V8.36l-.21-.07C41.79,2.79,33.38,0,25.03,0S8.34,2.79.14,8.29l-.14.07v45.48ZM.48,8.84C8.62,3.4,16.82.68,25.03.68s16.48,2.72,24.55,8.16l-.14-.27v45.27c0,7.27-2.8,13.6-8.28,18.9-5.13,4.96-11.7,7.95-16.21,9.58h.21c-9.16-3.06-24.48-10.94-24.48-28.41V8.57l-.21.27Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M14.64,19.1c-2.87,1.09-4.79,2.38-5.2,2.79-.89.82-.55,1.63-.55,1.63h.07s-.07-.61.75-1.36c.34-.34,2.19-1.56,5.13-2.72l-.21-.34Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M25.78,17.06h-1.3c-2.53.14-5.95.75-8.96,1.77l.14.34c2.94-1.02,6.36-1.56,8.89-1.7h1.23c2.53.14,5.88.75,8.89,1.7l.14-.34c-3.08-1.02-6.5-1.63-9.03-1.77Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M35.63,19.1c2.87,1.09,4.79,2.38,5.2,2.79.89.82.55,1.63.55,1.63h-.07s.07-.61-.75-1.36c-.34-.34-2.19-1.56-5.13-2.72l.21-.34Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M44.11,20.26c-1.44-1.9-4.58-2.58-7.66-2.79-.14-3.13-5.81-3.33-10.12-2.52-.41-.61-1.92-.54-2.33,0-4.38-.82-9.99-.61-10.12,2.52-3.15.2-6.29.88-7.73,2.79-1.37,1.9,1.37,3.87,1.37,3.87l.62-.54s-4.58-3.74,5.75-5.57c.48,1.36,1.44,2.04,1.44,2.04l.55-.34s-3.15-5.85,8.07-4.01l.68,2.38s0-.14.21-.14c0,0-.27-2.24-.21-2.45.14-.34.89-.34,1.03,0,.07.2-.21,2.45-.21,2.45.27,0,.21.14.21.14l.68-2.38c11.22-1.84,8.07,4.01,8.07,4.01l.55.34s.96-.68,1.44-2.04c10.4,1.84,5.75,5.57,5.75,5.57l.62.54s2.8-1.97,1.37-3.87ZM7.73,23.52q.07.07.14.14s-.14-.07-.27.07c-.21-.14-.41-.34-.62-.54-1.23-1.43-2.12-4.55,6.77-5.3-9.58,1.63-6.63,5.03-6.02,5.64ZM15.59,19.65c0,.14-.27,0-.27.07-.68-.75-1.03-1.56-1.03-2.31-.07-1.84,2.12-3.4,8-2.38.14,0,.21,0,.34.07h-.14c.34.07.75.14,1.16.2-10.53-1.16-8.48,3.33-8.07,4.35ZM35.02,19.78s0-.07,0,0c-.07-.07-.07,0-.07,0,.07-.2-.27.07-.27-.14v-.14c.48-1.02,2.53-5.44-8-4.21.34-.07.68-.14,1.03-.2h.07c4.86-.95,7.32,0,8,1.43.21.34.27.75.21,1.16-.07.75-.41,1.5-.96,2.11ZM42.81,23.72s0-.07,0,0h-.07c-.07-.07-.14-.07-.14-.07h-.21s.07-.07.14-.14c.07,0,0,0,0,0,.27-.27.82-.88.96-1.63.21-1.29-.89-2.99-6.84-4.08,10.53.88,7.39,5.1,6.16,5.91Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M43.82,24.5s-.34-.34-.96-.61c-3.15-1.43-2.39,1.77-2.39,2.04-.27-.82-2.19-2.04-2.67.2-.48,2.38,1.44,1.77,1.78,1.77-.48.68-1.44.68-3.56-.2-2.39-.95-2.8-1.63-2.26-2.79.21,1.43,1.98,1.77,2.53.34,1.3-3.19-1.44-2.31-1.78-2.18.41-.75,1.16-1.09,1.16-1.97.07-1.36-1.92-1.7-2.53-1.22-1.03.82-.41,2.65-.41,2.86-.27-.27-2.12-2.79-2.74.61-.27,1.5,1.37,2.18,2.39,1.02-.21,1.22-1.23,1.63-3.69,1.22-3.69-.54-2.94-2.31-2.94-2.31.07.07,1.44,2.31,2.6-.27,1.23-2.85-1.98-1.97-2.46-1.36.27-1.29,1.5-2.04.82-2.86-.89-1.09-2.6-1.02-3.35,0-.68.88.48,1.56.82,2.86-.48-.61-3.76-1.5-2.46,1.36,1.16,2.58,2.53.34,2.6.27,0,0,.75,1.77-2.94,2.31-2.46.41-3.49,0-3.69-1.22,1.03,1.16,2.67.48,2.39-1.02-.62-3.4-2.46-.88-2.74-.61,0-.2.68-2.04-.41-2.86-.68-.48-2.67-.14-2.53,1.22.07.88.89,1.29,1.16,1.97-.34-.14-3.08-1.09-1.78,2.11.55,1.43,2.33,1.09,2.53-.34.55,1.22.14,1.84-2.26,2.79-2.12.82-3.08.88-3.56.2.27-.07,2.19.68,1.78-1.77-.41-2.24-2.46-1.02-2.67-.2,0-.27.75-3.47-2.39-2.04-.62.27-.96.61-.96.61l-.14.14-.14.14,5.47,7.55s4.65-3.87,13.41-3.87,13.41,3.87,13.41,3.87l5.47-7.55.07-.14v-.07ZM43,25.11c-.62.82-4.51,6.12-4.58,6.19l-.14.2-.21-.14c-1.85-1.02-6.77-3.47-13.13-3.47s-11.29,2.38-13.13,3.47l-.14.14-.21-.2c-.07-.07-3.97-5.37-4.58-6.19l-.07-.07v-.14c0-.07.07-.34.41-.61.75-.48,1.44-.34,1.64-.27.41.27.34,2.04.34,2.24.34-.48.89-1.16,1.5-1.09.41,0,.68.27.89.82.34.88.07,1.36-.21,1.56-.41.27-1.03.2-1.5,0,.07.2.21.54.41.68.62.48,1.85.34,3.28-.14,1.71-.54,2.8-1.36,2.94-2.24.14-.54-.07-1.09-.41-1.43-.21.48-.62,1.29-1.16,1.36-.34,0-.68-.2-.96-.75-.41-.75-.48-1.29-.14-1.63.41-.48,1.85-.2,1.98-.14.21.07-.07-.27-.21-.34-.48-.54-.89-.95-.89-1.43s.21-.82.55-1.02c.48-.27,1.16-.2,1.44.07.27.27.34.82.14,2.11,0,.14-.21.75.07.41.27-.27,1.37-1.29,1.98-1.02.41.14.62.61.62,1.36,0,.54-.14.88-.48,1.09-.48.27-1.37-.2-1.78-.48-.07.34,0,.82.27,1.16.48.61,1.71.95,3.35.82,1.71-.2,2.67-.75,3.15-1.43.27-.41.55-1.22.34-1.9-.27.34-1.16,1.09-1.57,1.09s-.68-.34-.96-.88c-.21-.54-.21-1.16.07-1.43.41-.41,1.71.2,2.39.48-.07-.27-.14-.54-.27-.88-.07-.27-.21-.54-.27-.68-.14-.27-.48-.68-.27-1.09.27-.48.75-.75,1.3-.75.62,0,1.09.27,1.3.75.21.41-.07.75-.27,1.09-.07.2-.21.34-.27.68-.14.34-.21.61-.27.88.62-.27,1.92-.88,2.39-.48.27.27.27.82.07,1.43-.27.61-.55.88-.96.88s-1.37-.75-1.57-1.09c-.14,1.02.21,1.63.34,1.9.48.68,1.44,1.29,3.15,1.43,1.64.14,2.87-.2,3.35-.82.27-.34.34-1.02.34-1.36-.41.27-1.3.88-1.85.61-.34-.14-.48-.54-.48-1.09,0-.82.21-1.22.62-1.36.62-.27,1.92,1.09,1.98.88.07-.14,0-.34,0-.48-.07-.82-.14-1.77.27-1.97.34-.27.96-.27,1.37-.07.34.2.55.54.55,1.02s-.21.75-.68,1.36c-.07.14-.62.54-.34.48.27-.07,1.57-.27,1.92.2.27.34.27.88-.14,1.63-.27.54-.62.75-.96.75-.55-.07-.89-.95-1.16-1.36-.21.27-.62.95-.48,1.5.21.82,1.37,1.7,3.01,2.24,1.44.48,2.6.61,3.21.14.27-.2.41-.54.48-.75-.48.2-1.09.27-1.57.07-.27-.14-.55-.54-.27-1.63.14-.54.55-.82.89-.82.55-.07,1.09.48,1.44.95,0-.2.07-.34.07-.54-.07-.75.14-1.36.55-1.56.21-.14.68-.27,1.44.2.41.27.41.61.41.61v.14l.34.14Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M25.17,8.29c-1.64,0-3.01,1.36-3.01,2.99,0,1.36.89,2.45,2.12,2.86l.14.54c.14-.07.21-.07.34-.07,0-.14,0-.27-.07-.34h.68c0,.14,0,.27-.07.34.14,0,.27.07.34.07l.14-.54c1.23-.34,2.12-1.5,2.12-2.86.27-1.63-1.09-2.99-2.74-2.99ZM24.96,8.84h.41v2.72h-.41v-2.72ZM22.64,11.28c0-1.29.96-2.31,2.19-2.45v2.72h-2.19v-.27ZM25.17,13.73c-1.09,0-1.98-.68-2.33-1.56h4.65c-.34.88-1.3,1.56-2.33,1.56ZM27.56,11.83c-.07.14-.07.2-.07.2h-4.72s0-.07-.07-.2c0-.14-.07-.2-.07-.2h4.92c.07,0,.07.07,0,.2ZM25.51,11.49v-2.65c1.23.14,2.19,1.22,2.19,2.45v.27l-2.19-.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M25.85,5.03v-1.77h-1.44v1.77h-1.98v1.43h1.98v2.11h.14s.41-.07.62-.07.55.07.55.07h.14v-2.11h1.98v-1.43h-1.98Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M14.91,45.2l8.21.68.41-1.09-.14.48-8.48-.41s-.48,0-.48-.54.48-.61.48-.61l8.89-.27.55-6.59c0-.27.27-.48.82-.48.48,0,.75.2.75.48l.55,6.59,8.96.27s.48,0,.48.61c0,.54-.48.54-.48.54l-8.41.41.21.68,8.21-.68c.07,0,1.03-.07,1.03-.88,0-.95-.68-1.02-1.09-1.09l-8.21-.48c-.07-.82-.34-4.08-.41-5.51-.07-1.36-.89-1.63-1.23-1.7h-.55c-.34.07-1.16.34-1.23,1.7-.07,1.36-.34,4.62-.41,5.51l-8.21.48c-.41,0-1.09.14-1.09,1.09-.14.75.75.82.89.82ZM35.63,59.28l1.3.61s-.89,1.63-4.1,4.35l.27.41h.07c2.74-1.97,4.24-4.89,4.24-4.89l-1.16-.48,2.39-.88c-.41,1.29-1.44,4.42-4.92,6.93-.07.07-.14.14-.27.2l-.07-.27c-.07.07-.21.14-.27.2l.27.2c-2.46,1.56-5.47,2.31-8.14,2.31s-5.81-.82-8.28-2.45l.14-.27c-.07-.07-.21-.14-.27-.2l-.07.27c-.07,0-.07-.07-.14-.07-3.49-2.58-4.58-5.64-4.99-6.93l2.39.88-1.16.41s1.3,2.85,4.1,4.83l.21-.41c-3.21-2.72-3.9-4.21-3.9-4.21l1.3-.61-3.35-1.43s.68,4.69,5.13,7.95c2.67,1.97,5.75,3.13,8.69,3.13s6.09-1.16,8.69-3.13c4.58-3.19,5.27-7.89,5.27-7.89l-3.35,1.43ZM27.08,66.55c.89,0,3.42-.48,4.92-1.29l.48-.27.14-.07-.21-.41-.62.34c-1.44.75-3.9,1.09-4.58,1.09-.62,0-.82-.14-.82-.82v-4.83l-.75-.48v.07l.27.14v5.51c.07.88.68,1.02,1.16,1.02ZM23.12,65.94c-.62,0-3.08-.27-4.58-1.09l-.62-.34-.21.41.62.34c1.5.82,3.97,1.29,4.92,1.29.48,0,1.09-.07,1.09-1.02v-5.51l.27-.14v-.07l-.75.48v4.83c0,.61-.14.82-.75.82Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M38.78,49.69h-10.12l-3.28-9.24-.21-.68-.21.68-3.42,9.24h-10.12l.62.41,7.87,5.64-3.35,9.92,8.55-6.12,8.41,6.19-3.28-9.99,7.93-5.64.62-.41ZM29.48,55.47l-.14-.07v.07l.14.07v-.07l3.15,8.9-1.03-1.43.21.54.68.95-7.25-5.64v-.27l-.07-.07-.14.07v.27l-7.45,5.64.89-1.22-.41.27.07-.27-.75.95,3.15-8.77-7.73-5.3,1.09.34-.21-.07h.34l-1.16-.34,9.03.2.14.14h.07l-.14-.07,3.08-9.38v1.56l.07-.27.14.34v-1.7l2.94,9.24-.21.27h.21l.14-.14,8.89-.2-1.09.34h.27l-.27.2,1.3-.41-7.93,5.3Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M12.58,50.1l12.52,4.15-.07-.07,7.66,10.67.14-.14-7.59-10.67h-.07l-12.52-4.08-.07.14Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M17.37,64.71l7.87-10.54-.07.07,12.72-4.28-.07-.14-12.72,4.21h-.07l-7.8,10.6.14.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M25.03,40.79v18.08h.2v-18.08h-.2Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M19.97,55.81l5.2-1.56h-.07l5.06,1.56.07-.2-5.06-1.56h-.07l-5.2,1.56.07.2Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M21.48,49.69l3.56,4.49.14.07.07-.07,3.49-4.49-.14-.07-3.56,4.42h.21l-3.62-4.42-.14.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M13.95,66.69c-.27,0-.62.07-.89.14.07.07.14.14.21.2.21-.07.48-.14.68-.14,1.37,0,2.39,1.09,2.39,2.38v.14c.07,0,.14.07.21.14v-.27c.07-1.43-1.16-2.58-2.6-2.58ZM15.59,71.99c-.48.27-1.09.48-1.64.48-1.78,0-3.15-1.43-3.15-3.13,0-.27.07-.61.14-.88-.07,0-.14-.07-.14-.14-.07-.07-.14-.14-.14-.2-.14.34-.21.82-.21,1.22,0,1.97,1.64,3.53,3.56,3.53.75,0,1.44-.2,1.98-.61h-.07c-.14-.07-.27-.14-.34-.27ZM9.51,45.88c-.07.14-.14.27-.21.27.62.61.89,1.36.89,2.24,0,1.7-1.3,3.06-3.01,3.13-.07.2-.14.34-.14.48,1.98,0,3.56-1.63,3.56-3.53,0-1.02-.41-1.9-1.09-2.58ZM7.25,44.93h-.21c-1.98,0-3.56,1.56-3.56,3.53,0,1.29.68,2.38,1.64,2.99-.07-.2-.07-.41,0-.54-.75-.61-1.23-1.5-1.23-2.45,0-1.77,1.44-3.13,3.15-3.13,0-.07.07-.14.07-.2s.07-.14.14-.2ZM13.95,65.8c-.68,0-1.3.2-1.78.48.14.14.21.2.27.27.48-.27.96-.41,1.5-.41,1.78,0,3.15,1.43,3.15,3.13,0,.27,0,.54-.07.75v.07c.07,0,.21.07.41.14.07-.27.14-.61.14-.88,0-1.97-1.64-3.53-3.62-3.53ZM22.3,36.78h-.41c.34.82.96,1.43,1.78,1.84v-.48c-.62-.34-1.09-.82-1.37-1.36ZM5.06,46.7c-.41.48-.68,1.09-.68,1.77,0,.61.21,1.16.62,1.63,0-.07,0-.14.07-.2v-.07c-.27-.41-.41-.88-.41-1.36,0-1.09.75-2.04,1.85-2.31.07-.14.21-.27.34-.34-.68.07-1.3.41-1.78.88ZM36.32,71.78c-.27,0-.55-.07-.82-.14q-.07.07-.14.14c.27.14.62.2.96.2,1.44,0,2.67-1.16,2.67-2.65,0-.27-.07-.48-.14-.75h-.07s0,.2-.07.41v.34c0,1.36-1.09,2.45-2.39,2.45ZM42.88,51.05q.07,0,0,0c.07-.07,0-.14-.07-.2-1.16-.2-1.98-1.16-1.98-2.38,0-.54.21-1.02.48-1.36-.07-.07-.07-.14-.14-.27-.34.48-.55,1.02-.55,1.56-.07,1.36.96,2.52,2.26,2.65ZM7.18,51.05c1.44-.07,2.53-1.22,2.53-2.65,0-.54-.21-1.09-.48-1.5-.07.07-.07.14-.14.2.27.41.41.82.41,1.36,0,1.29-.96,2.31-2.26,2.38-.07.14-.07.2-.07.2ZM13.95,71.92c.27,0,.55-.07.82-.14-.07-.07-.14-.07-.14-.14-.21.07-.41.07-.62.07-1.37,0-2.39-1.09-2.39-2.38v-.07c-.14-.14-.14-.27-.21-.41,0,.14-.07.27-.07.41,0,1.5,1.16,2.65,2.6,2.65ZM23.05,36.64c-.14,0-.21-.07-.27-.07.21.34.48.68.89.95v-.2c-.27-.2-.41-.41-.62-.68ZM42.81,51.59c-1.57-.2-2.8-1.5-2.8-3.13,0-.88.34-1.7.96-2.31-.07-.07-.14-.2-.21-.34-.75.68-1.16,1.56-1.16,2.65,0,1.9,1.5,3.47,3.35,3.53,0-.07-.07-.2-.14-.41ZM45.62,48.47c0,.61-.21,1.16-.55,1.56v.27c.48-.48.82-1.16.82-1.9,0-1.29-.96-2.38-2.26-2.58.14.07.27.2.34.34.96.34,1.64,1.29,1.64,2.31ZM39.33,68.32c.14.34.14.68.14.95,0,1.77-1.44,3.13-3.15,3.13-.62,0-1.3-.2-1.78-.54-.07.07-.21.2-.41.27.62.48,1.37.75,2.19.75,1.98,0,3.56-1.56,3.56-3.53,0-.48-.14-.95-.27-1.43-.07.2-.14.34-.27.41ZM44.8,50.64q.07,0,0,0h0ZM43.22,44.93h-.07c.07.07.07.14.14.2,0,.07.07.14.07.2.82,0,1.57.34,2.19.95.62.61.89,1.36.89,2.18,0,1.02-.48,1.97-1.37,2.58,0,.14,0,.34-.14.61,1.16-.61,1.92-1.77,1.92-3.13-.07-1.97-1.64-3.6-3.62-3.6ZM27.22,34.26c.14,0,.21,0,.27.07-.41-.95-1.37-1.56-2.39-1.56-1.09,0-2.05.68-2.46,1.63.07-.07.21-.14.34-.14.41-.75,1.23-1.22,2.12-1.22.96-.07,1.71.48,2.12,1.22ZM27.49,36.64c-.07,0-.21.07-.34.07-.14.2-.34.41-.55.61v.27c.41-.27.68-.61.89-.95ZM28.04,36.78c-.27.54-.75,1.02-1.3,1.36v.48c.75-.34,1.37-1.02,1.71-1.77h-.27c-.07-.07-.14-.07-.14-.07ZM25.1,31.81c-1.78,0-3.28,1.29-3.56,2.99.14-.14.27-.2.41-.2v-.07c.34-1.36,1.64-2.38,3.08-2.38s2.74,1.02,3.08,2.38c.14,0,.27.07.48.14-.27-1.56-1.71-2.86-3.49-2.86ZM33.1,69.34c0-1.77,1.44-3.13,3.15-3.13.48,0,.96.14,1.37.27h.07c.07-.07.14-.2.27-.27-.48-.27-1.09-.41-1.71-.41-1.98,0-3.56,1.56-3.56,3.53,0,.34.07.68.14,1.02.07-.07.21-.14.27-.2.07,0,.07-.07.14-.07v-.07c-.14-.2-.14-.41-.14-.68ZM36.32,66.96c.21,0,.34,0,.55.07.07-.07.14-.14.27-.2-.27-.07-.48-.14-.75-.14-1.44,0-2.67,1.16-2.67,2.65,0,.2,0,.41.07.68.07-.07.14-.14.21-.2,0-.14-.07-.27-.07-.41-.07-1.36,1.03-2.45,2.39-2.45Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M37.89,41.47s.07.34.41.68c.27.34.82.54.82.54,0,0,.07.34.27.75.21.41.75.61.75.61,0,0,.07.48.21.68.14.27.55.54.55.54,0,0-.14.2-.07.48.14.34.27.48.27.48-.21.82.48,1.09.48,1.09.48.27,1.23-.2,1.23-.2,0,0,.68.07,1.09-.48.48-.61-.55-.95-.55-.95,0,0,.14-.2-.07-.61-.21-.41-.68-.54-.68-.54,0,0,0-.34-.14-.82-.14-.48-.82-.82-.82-.82,0,0,.07-.27-.14-.68-.27-.54-.96-.88-.96-.88,0,0-.14-.27-.34-.68-.55-.54-1.16-.54-1.16-.54,0,0-.14-.61-.34-.82-.34-.34-1.03-.48-1.03-.48,0,0-.07-.27-.48-.68-.34-.34-1.16-.41-1.16-.41,0,0-.07-.34-.48-.68-.48-.34-1.16-.27-1.16-.27,0,0,0-.2-.62-.61-.62-.41-1.16-.27-1.16-.27,0,0-.21-.27-.62-.48-.48-.27-1.16-.14-1.16-.14,0,0-.21-.27-.82-.48-.62-.2-1.16.07-1.16.07-.55-.48-1.03-.2-1.03-.2,0,0-.07-.48-.62-.41-1.09.2-.75,1.09-.75,1.09,0,0-.21.14-.27.61-.07.48.27.75.62.82.27.07.82-.14.82-.14,0,0,.21.2.48.2h.62s.21.2.68.34c.48.14,1.03,0,1.03,0,0,0,0,.2.48.41.48.2.96.07.96.07,0,0,.27.41.75.68.41.2.96.14.96.14,0,0,.27.34.68.61.34.27.96.34.96.34,0,0,.21.41.48.68.27.2.96.34.96.34,0,0,.27.48.48.68.14.07.75.34.75.34ZM42.2,47.24c-.07.07-.41,0-.55-.07-.14-.07-.21-.2-.21-.27s0-.07.07-.14h.14c.07.07.14.07.27.14.07,0,.14.07.21.07.07.07.14.07.14.14s0,.07-.07.14ZM43.09,46.16c.14.07.34.2.34.41,0,.14-.07.27-.48.41-.68.14-1.3-.34-1.5-.68-.14-.2-.14-.27-.07-.34s.27-.07.48.07c.41.2.68.2.89.14.07-.07.21-.07.34,0ZM42.61,45.14c.07.34.07.54-.07.61-.07.07-.21.07-.48-.07h-.07c-.82-.2-1.16-.34-1.37-1.16,0-.07,0-.2.07-.2.07-.07.27,0,.48.07.14.07.27.07.41.14.68.14,1.03.41,1.03.61ZM41.79,43.71c.14.34.14.54.07.61-.07.07-.21.07-.48,0h-.14c-.96-.27-1.3-.34-1.64-1.16,0-.07-.07-.14,0-.2.07-.07.27,0,.62.07.14.07.27.07.41.14.75.07,1.09.27,1.16.54ZM40.76,42.08c.14.34.14.48.07.61-.07.07-.21.07-.48.07h-.14c-.96-.07-1.37-.14-1.71-.88-.07-.07-.07-.14,0-.2.07-.14.34-.07.62,0,.14,0,.27.07.41.07.75,0,1.09.14,1.23.34ZM39.53,40.85c.14.2.21.34.14.41-.07.14-.21.14-.41.14-1.03,0-1.57-.2-1.92-.68-.07-.14-.07-.2-.07-.27.07-.14.34-.14.68-.14h.48c.48.07.89.27,1.09.54ZM26.74,34.87c0-.14.07-.2.21-.27h.27l.07.07s-.27.14-.34.27l-.07.07c-.14.07-.14,0-.14-.14ZM27.36,36.23c0,.07,0,.14-.07.2-.14.07-.41.07-.55-.07-.14-.14-.21-.27-.14-.48,0-.14.14-.34.41-.54.55-.34.96-.27.96-.27.07,0,.07.07.07.14s-.07.14-.21.27c-.34.14-.55.61-.48.75ZM27.97,36.37c-.14-.07-.21-.2-.21-.27,0-.27.41-.54.75-.68.48-.27.82-.27,1.09-.14,0,0,.07,0,.07.07.14.07.27.14.27.27,0,.07-.07.2-.27.27-.27.14-.55.34-.68.48-.34.14-.55.27-1.03,0ZM29.41,36.64c-.07-.07-.14-.14-.07-.2.07-.2.41-.41,1.03-.61.41-.14.89-.27,1.16-.07l.07.07c.14.07.27.2.27.34,0,.07-.14.14-.27.2-.27.07-.55.2-.75.27-.62.2-1.03.41-1.44,0ZM30.91,37.12c-.07-.07-.07-.14-.07-.14.07-.27.89-.48,1.16-.54.48-.14.89-.2,1.09.07,0,0,.07.07.14.14.14.14.27.2.27.34,0,.07-.14.14-.27.2-.27.07-.48.14-.68.27-.55,0-.96.2-1.64-.34ZM34.13,38.07c-.55.14-1.09.2-1.37-.34-.07-.07-.07-.2,0-.27.14-.27.68-.27,1.3-.34h.07c.55-.07.82.07,1.03.27l.07.07c.14.14.21.27.14.34-.07.07-.14.14-.34.14-.34.07-.62.07-.89.14ZM34.4,38.68c-.07-.14-.07-.2-.07-.27.14-.2.62-.27,1.03-.27h.21c.55-.07.82.07,1.03.27l.07.07c.14.14.21.27.14.34-.07.07-.14.14-.34.14-.27,0-.55.07-.75.07-.48.14-.96.2-1.3-.34ZM35.91,39.7c-.07-.14-.07-.2-.07-.27.07-.2.48-.2.82-.2h.27c.55-.07.82.07,1.03.27l.07.07c.14.14.21.27.14.34-.07.07-.14.14-.34.14-.27,0-.48.07-.68.07-.48.07-.82.14-1.23-.41ZM35.29,70.42s.14-.2-.14-.61c-.27-.41-.62-.41-.96-.27-.27.14-.62.61-.62.61,0,0-.27-.07-.48.07-.27.14-.48.34-.48.34,0,0-.27-.07-.75.14-.48.2-.82.61-.82.61,0,0-.14-.14-.68-.07-.55.07-.82.48-.82.48,0,0-.48-.2-1.03-.07-.41.07-.82.48-.82.48,0,0-.41-.14-.89-.07-.41,0-1.03.27-1.03.27,0,0-.41-.27-.75-.27-.34-.07-.96.27-.96.27,0,0-.55-.27-.82-.27-.27-.07-.89.14-.89.14,0,0-.27-.2-.75-.34-.48-.14-.96,0-.96,0,0,0-.27-.27-.68-.41-.41-.2-.96-.07-.96-.07,0,0-.27-.34-.55-.48-.27-.14-.75-.14-.75-.14,0,0,0-.27-.21-.41-.34-.2-.55-.27-.55-.27-.34-.82-1.03-.61-1.03-.61-.55.07-.89.88-.89.88,0,0-.55.27-.62,1.02,0,.75,1.03.41,1.03.41,0,0,0,.2.41.41.34.2.82.07.82.07,0,0,.21.27.62.54.41.27,1.16.14,1.16.14,0,0,.14.27.48.48.55.27,1.3.14,1.3.14,0,0,.27.2.68.34.75.27,1.23-.14,1.23-.14,0,0,.41.41.75.48.48.07,1.16-.2,1.16-.2,0,0,.27.2.75.27.48.07,1.23-.34,1.23-.34,0,0,.27.27.82.27.62,0,1.16-.41,1.16-.41,0,0,.14.14.82.14.75,0,1.09-.48,1.09-.48,0,0,.34.14.82.07.55-.07,1.03-.61,1.03-.61,0,0,.34.14.89-.07.62-.2.89-.75.89-.75.75.07.96-.41.96-.41,0,0,.34.34.75,0,.89-.75,0-1.29,0-1.29ZM15.53,70.08c.07-.14.34-.27.48-.27s.27.07.27.14.07.07,0,.14c0,0-.07.07-.14.07s-.21,0-.27.07c-.07,0-.14.07-.27.07,0-.07,0-.14-.07-.2q0,.07,0,0ZM15.8,71.24c-.07.07-.21.14-.27.2-.14.07-.41,0-.48-.14-.07-.07-.14-.27.14-.61.48-.54,1.23-.48,1.64-.34.21.07.27.14.27.27s-.14.2-.48.27c-.48,0-.68.2-.82.34ZM16.41,71.99c-.27-.27-.34-.41-.34-.54s.14-.14.41-.27h.07c.75-.27,1.16-.41,1.78.2.07.07.14.14.07.2,0,.14-.21.2-.48.27-.14.07-.27.07-.41.14-.48.14-.89.2-1.09,0ZM17.99,72.74c-.27-.2-.41-.34-.41-.48s.14-.14.34-.27l.14-.07c.89-.34,1.3-.48,1.98,0,0,0,.14.07.14.2s-.27.2-.55.27c-.14.07-.27.07-.41.14-.62.27-1.03.34-1.23.2ZM20.93,73.08c-.55.34-.96.41-1.16.27-.27-.2-.41-.27-.41-.41s.14-.2.34-.27l.07-.07c.82-.48,1.16-.68,1.91-.27.07.07.14.07.14.14,0,.14-.21.27-.48.41-.14.07-.27.14-.41.2ZM21.54,73.69c-.21-.07-.34-.2-.34-.27,0-.14.07-.27.27-.34.82-.61,1.37-.82,1.91-.54.14.07.21.14.21.2,0,.14-.21.27-.48.48-.14.07-.27.2-.34.27-.48.2-.96.27-1.23.2ZM24.49,73.55c-.41.34-.75.48-1.03.34h-.14c-.14-.07-.34-.07-.34-.2,0-.07.07-.2.21-.27.21-.14.34-.27.55-.48.41-.41.75-.68,1.3-.41.14.07.21.14.21.2,0,.2-.27.41-.55.61-.07.07-.14.14-.21.2ZM26.26,73.55c-.41.34-.75.48-1.03.34h-.14c-.14-.07-.34-.07-.34-.2,0-.07.07-.2.21-.27.21-.2.41-.34.55-.54.41-.41.75-.75,1.3-.48.14.07.21.14.21.2.07.27-.34.54-.68.82.07.07,0,.14-.07.14ZM28.18,73.42c-.48.41-.82.54-1.09.41h-.14c-.14-.07-.34-.07-.34-.2,0-.07.07-.2.21-.27.27-.2.41-.41.62-.54.41-.41.75-.82,1.37-.54.14.07.14.14.21.2.07.2-.34.61-.82.95ZM29.27,73.48h-.14c-.21,0-.34,0-.41-.14,0-.07,0-.2.14-.27.21-.2.27-.41.41-.61.27-.48.55-.82,1.37-.82.07,0,.14.07.14.07.07.27-.41.88-.62,1.16-.34.41-.62.68-.89.61ZM31.87,72.4c-.27.34-.55.75-.89.75h-.14c-.14,0-.34,0-.41-.14-.07-.07,0-.2.14-.34.21-.27.34-.48.48-.68.27-.48.48-.82,1.09-.82.14,0,.21.07.21.14.14.14-.07.54-.48,1.09ZM33.65,71.72c-.27.48-.48.75-.75.75h-.14c-.14,0-.34.07-.41-.07-.07-.07,0-.2.07-.34.21-.27.27-.54.27-.82.14-.41.21-.68.75-.68.14,0,.27.07.34.14.21.2.07.68-.14,1.02ZM34.88,70.76c-.21.61-.62.75-.62.75-.07,0-.14,0-.14-.07-.07-.07,0-.2.07-.34.21-.34.07-.82-.07-.88-.07-.07-.07-.14-.07-.2.07-.14.27-.27.48-.27s.27.14.41.27c0,.2.07.41-.07.75ZM35.29,71.38c-.07.07-.21.14-.27.14h-.07c0-.07.14-.27.14-.41,0-.07.07-.07.07-.07.07,0,.14.07.21.14.07-.07.07.07-.07.2ZM15.11,39.29s.62-.14.96-.34c.34-.27.68-.61.68-.61,0,0,.55.07.96-.14.48-.2.75-.68.75-.68,0,0,.48.14.96-.07.48-.2.48-.41.48-.41,0,0,.48.2,1.03,0,.48-.14.68-.34.68-.34h.62c.27,0,.48-.2.48-.2,0,0,.55.2.82.14.34-.07.68-.27.62-.82-.07-.48-.27-.61-.27-.61,0,0,.41-.88-.75-1.09-.55.07-.62.54-.62.54,0,0-.48-.27-1.03.2,0,0-.55-.27-1.16-.07-.62.2-.82.48-.82.48,0,0-.68-.14-1.16.14-.41.2-.62.48-.62.48,0,0-.55-.2-1.16.27-.62.41-.62.61-.62.61,0,0-.68-.07-1.16.27-.41.27-.48.68-.48.68,0,0-.82.07-1.16.41-.34.34-.48.68-.48.68,0,0-.75.14-1.03.48-.21.27-.34.82-.34.82,0,0-.62,0-1.09.61-.27.41-.34.68-.34.68,0,0-.75.34-.96.88-.21.34-.14.68-.14.68,0,0-.68.27-.82.82-.14.48-.14.82-.14.82,0,0-.48.2-.68.54-.21.41-.07.61-.07.61,0,0-1.03.34-.55.95.48.61,1.09.48,1.09.48,0,0,.68.48,1.23.2,0,0,.62-.27.48-1.09,0,0,.21-.14.27-.48.07-.2-.07-.48-.07-.48,0,0,.41-.27.55-.54.14-.27.21-.68.21-.68,0,0,.48-.27.75-.61.21-.34.27-.75.27-.75,0,0,.48-.2.82-.54.27-.34.41-.68.41-.68,0,0,.62-.2.82-.41.21-.2.48-.68.48-.68,0,0,.68-.14.96-.34.14-.34.34-.82.34-.82ZM23.05,34.74s.07-.07,0,0c.07-.14.21-.14.34-.07.14,0,.21.14.21.27,0,.07,0,.2-.07.2,0,0-.07,0-.07-.07-.07-.14-.34-.27-.41-.34ZM22.36,35.14s.41-.14.96.27c.34.2.41.41.41.54,0,.2-.07.34-.14.48-.14.14-.41.14-.55.07-.07-.07-.14-.14-.07-.2.07-.14-.14-.61-.48-.82-.14-.07-.21-.14-.21-.27,0-.07.07-.07.07-.07ZM20.72,35.28c.07,0,.07-.07.07-.07.27-.14.62-.14,1.09.14.34.2.68.41.75.68,0,.14-.07.2-.21.27-.48.34-.68.14-1.03-.14-.21-.14-.41-.34-.68-.48-.21-.07-.27-.14-.27-.27-.07,0,.14-.07.27-.14ZM18.74,35.82l.07-.07c.27-.2.75-.07,1.16.07.68.2,1.03.41,1.03.61,0,.07,0,.14-.07.2-.48.41-.82.2-1.37,0-.21-.14-.48-.2-.75-.27-.21-.07-.27-.14-.27-.2,0-.14.07-.2.21-.34ZM17.1,36.57q.07-.07.14-.14c.21-.27.62-.14,1.09-.07.27.07,1.09.27,1.16.54q0,.07-.07.14c-.68.54-1.03.41-1.57.2-.21-.07-.41-.2-.68-.27-.21-.07-.27-.07-.27-.2-.07,0,.07-.14.21-.2ZM15.18,37.46l.07-.07c.21-.27.48-.34,1.03-.27h.14c.55.07,1.16.14,1.3.34.07.07,0,.2,0,.27-.34.54-.82.41-1.37.34-.27-.07-.55-.07-.82-.14-.21,0-.27-.07-.34-.14-.21-.07-.07-.2,0-.34ZM8.69,47.18c-.14.07-.48.14-.55.07l-.07-.07c0-.07.07-.07.14-.14.07-.07.14-.07.21-.07.14-.07.21-.07.27-.14.07-.07.07,0,.14,0s.07.07.07.14c0,0-.07.14-.21.2ZM8.96,46.29c-.21.34-.82.82-1.5.68-.41-.07-.48-.27-.48-.41,0-.2.21-.34.34-.41.14-.07.27,0,.34,0,.21,0,.48.07.89-.14.27-.14.41-.14.48-.07.07,0,.07.2-.07.34ZM9.64,44.59c-.21.82-.55.95-1.37,1.16h-.07c-.27.07-.41.14-.48.07-.07-.07-.07-.27-.07-.61.07-.27.34-.48.96-.61.14-.07.27-.07.41-.14.27-.07.41-.14.48-.07.14,0,.21.07.14.2ZM10.67,43.1c-.34.82-.68.95-1.64,1.16h-.14c-.27.07-.41.07-.48,0-.07-.07-.07-.27.07-.61.07-.27.41-.48,1.09-.61.14,0,.27-.07.41-.14.27-.07.55-.2.62-.07.14.14.07.2.07.27ZM11.76,41.81c-.34.75-.68.82-1.71.88h-.14c-.27,0-.41.07-.48-.07-.07-.07,0-.27.07-.61.07-.27.48-.41,1.09-.48.14,0,.27,0,.41-.07.34-.07.55-.07.62,0,.21.2.21.27.14.34ZM13.06,40.79c-.34.48-.89.68-1.91.68-.21,0-.34-.07-.41-.14-.07-.14,0-.27.14-.41.21-.27.62-.48,1.09-.41h.48c.34,0,.62,0,.68.14,0-.07,0,0-.07.14ZM14.43,39.7c-.34.54-.75.48-1.3.41-.21,0-.41-.07-.68-.07-.21,0-.27-.07-.34-.14-.07-.14.07-.27.14-.34l.07-.07c.21-.27.48-.34,1.03-.27h.27c.34,0,.75,0,.82.2.07.07.07.14,0,.27ZM13.82,38.95c-.21,0-.27-.07-.34-.14-.07-.14.07-.27.14-.34l.07-.07c.21-.27.48-.34,1.03-.27h.21c.41,0,.89.07,1.03.27.07.07,0,.2-.07.27-.34.54-.82.48-1.37.34-.14,0-.41-.07-.68-.07ZM12.52,66.62s-.07-.2-.41-.41c-.21-.14-.41-.07-.41-.07,0,0-.21-.48-.34-.68-.21-.2-.62-.41-.62-.41,0,0-.07-.54-.34-.88-.27-.34-.62-.48-.62-.48,0,0-.07-.54-.27-.95-.27-.41-.55-.61-.55-.61,0,0,0-.68-.21-.88-.14-.2-.55-.61-.55-.61,0,0,.07-.68-.07-.95-.14-.27-.48-.61-.48-.61,0,0,.07-.61-.07-1.02-.14-.41-.34-.82-.34-.82,0,0,.21-.48.21-.88-.07-.48-.41-.88-.41-.88,0,0,.27-.41.21-.95-.07-.54-.27-.61-.27-.61,0,0,.27-.41.34-.95,0-.54-.14-.75-.14-.75,0,0,.14-.27.21-.61.07-.27-.07-.48-.07-.48,0,0,.34-.48.34-.75.07-.34-.07-.75-.55-.82-.48-.07-.68.14-.68.14,0,0-.89-.75-1.37.27-.27.48.21.75.21.75,0,0-.41.34-.07,1.02,0,0-.41.48-.41,1.09s.21.88.21.88c0,0-.34.61-.21,1.16.14.41.27.75.27.75,0,0-.34.48-.07,1.16.21.68.41.75.41.75,0,0-.27.61-.07,1.22.21.48.48.68.48.68,0,0-.21.82.07,1.22.27.48.48.61.48.61,0,0-.07.75.14,1.16.14.27.68.54.68.54,0,0-.21.61.27,1.22.27.34.55.54.55.54,0,0,.14.82.55,1.22.27.27.62.34.62.34,0,0,.07.75.48,1.02.41.27.75.34.75.34,0,0,0,.48.34.82.34.27.55.2.55.2,0,0,.07,1.09.75.82.68-.27.82-.88.82-.88,0,0,.68-.54.55-1.09,0-.07-.07-.75-.89-.88ZM6.16,50.03c.27-.27.55-.27.68-.27.21,0,.27.14.41.27.07.2,0,.41-.14.54-.07.07-.14.07-.21,0-.14-.07-.62-.07-.89.2-.14.14-.21.2-.27.14-.07,0-.07-.07-.07-.14-.07.14,0-.34.48-.75ZM5.47,49.83c.07-.14.21-.14.27-.14s.14.07.14.14c0,0,0,.07-.07.07-.14.07-.34.27-.34.27,0,0-.07,0-.07-.07s0-.14.07-.27ZM5.68,51.53c.27-.27.62-.54.89-.48.14,0,.21.14.27.27.21.54-.07.68-.41.88-.21.14-.41.27-.68.54-.14.14-.27.2-.34.2-.14-.07-.14-.2-.21-.34v-.14c-.07-.34.07-.61.48-.95ZM5.2,54.52c-.14-.27.14-.75.41-1.09.41-.54.75-.82.89-.82.07,0,.14.07.21.14.27.54-.07.88-.41,1.29-.14.2-.34.41-.48.68-.14.2-.21.27-.27.27-.14,0-.21-.2-.27-.34l-.07-.14ZM5.33,56.22c-.14-.27.07-.61.27-1.02.14-.27.62-.95.89-.95q.07,0,.14.14c.34.82.07,1.09-.27,1.56-.14.2-.27.34-.41.61-.07.14-.21.2-.27.2-.14,0-.21-.2-.27-.34,0-.07,0-.14-.07-.2ZM5.75,58.46l-.07-.07c-.21-.27-.21-.54.07-1.09l.07-.07c.21-.54.48-1.02.75-1.09.07,0,.21,0,.27.14.41.48.21.88-.14,1.43-.14.2-.27.48-.34.75-.07.2-.14.27-.21.27-.21,0-.34-.2-.41-.27ZM6.57,60.5c-.14,0-.21-.14-.27-.27l-.07-.07c-.21-.27-.21-.54.07-1.09,0-.07.07-.14.07-.2.14-.41.34-.82.55-.88.07,0,.21,0,.27.14.41.48.21.88-.07,1.36-.14.2-.21.41-.27.68-.14.2-.21.34-.27.34ZM7.39,61.86c-.07.2-.14.27-.21.27-.14,0-.21-.14-.27-.27l-.07-.07c-.21-.27-.21-.54.07-1.09.07-.07.07-.2.14-.27.14-.34.27-.68.41-.75.07,0,.14,0,.27.14.41.48.27.88,0,1.36-.14.2-.21.48-.34.68ZM8.07,63.83c-.14,0-.27-.07-.41-.27-.21-.27-.27-.68-.07-1.16.07-.14.07-.27.14-.41.07-.34.14-.61.27-.61.07,0,.14,0,.21.14.41.48.41,1.02.07,1.97,0,.2-.07.34-.21.34ZM9.3,64.85v.14c-.07.27-.07.41-.21.41s-.27-.07-.55-.27c-.21-.14-.27-.54-.14-1.16.07-.14.07-.27.07-.41.07-.34.07-.54.21-.61.07,0,.14,0,.21.07.62.48.62.88.41,1.84ZM10.46,66.28v.14c0,.27,0,.41-.14.41-.14.07-.27-.07-.55-.27-.27-.14-.34-.54-.27-1.22v-.41c0-.34,0-.54.14-.61.07-.07.21,0,.21.07.62.54.62.95.62,1.9ZM11.63,67.43c0,.34,0,.48-.14.54-.14.07-.27,0-.62-.14-.27-.14-.34-.48-.27-1.09v-.41c0-.27,0-.41.07-.48h.21c.75.34.82.75.75,1.56ZM12.58,68.59c-.21.34-.41.34-.55.34-.21-.07-.27-.27-.27-.41s.07-.27.14-.34c.07-.2.21-.41.14-.88-.07-.27,0-.48.07-.48.07-.07.21,0,.34.2.21.27.41.95.14,1.56ZM13.06,68.04q-.07,0,0,0c-.14,0-.14-.07-.14-.14v-.27c0-.14,0-.2-.07-.27v-.14s.07-.07.14,0c.07,0,.21.07.21.27,0,.14-.07.48-.14.54ZM45.07,53.63s.21-.27.21-.88-.41-1.09-.41-1.09c.34-.68-.07-1.02-.07-1.02,0,0,.48-.27.21-.75-.48-1.02-1.23-.34-1.23-.34,0,0-.14-.14-.68-.14-.48.07-.62.41-.55.82,0,.34.34.75.34.75,0,0-.14.2-.07.48.07.27.21.61.21.61,0,0-.14.27-.14.75,0,.54.34.95.34.95,0,0-.21.07-.27.61-.07.54.21.95.21.95,0,0-.34.41-.41.88-.07.41.21.88.21.88,0,0-.27.34-.34.82-.14.41-.07,1.02-.07,1.02,0,0-.34.34-.48.61-.14.27-.07.95-.07.95,0,0-.41.41-.55.61-.14.2-.21.88-.21.88,0,0-.27.2-.55.61-.27.41-.27.95-.27.95,0,0-.34.14-.62.48-.27.34-.34.88-.34.88,0,0-.41.2-.62.41-.21.2-.34.68-.34.68,0,0-.27-.07-.41.07-.34.2-.41.41-.41.41-.82.07-.89.75-.89.75-.14.54.55,1.09.55,1.09,0,0,.14.61.82.88.68.27.75-.82.75-.82,0,0,.21.07.55-.2.34-.27.34-.82.34-.82,0,0,.34-.14.75-.34.41-.27.48-1.02.48-1.02,0,0,.27-.07.62-.34.41-.41.55-1.22.55-1.22,0,0,.27-.2.55-.54.48-.61.27-1.22.27-1.22,0,0,.55-.27.68-.54.27-.41.14-1.16.14-1.16,0,0,.27-.2.48-.61.21-.41.07-1.22.07-1.22,0,0,.34-.2.48-.68.21-.61-.07-1.22-.07-1.22,0,0,.14-.07.34-.75.21-.68-.07-1.16-.07-1.16,0,0,.21-.27.27-.75.07-.34-.27-.95-.27-.95ZM44.18,49.83c0-.07.07-.14.14-.14.14,0,.27,0,.27.14.07.14.07.2.07.27s-.07.07-.07.07c0,0-.21-.2-.34-.27-.07,0-.07-.07-.07-.07ZM42.95,50.64c-.14-.14-.21-.34-.14-.54.07-.14.21-.27.41-.27.14,0,.41,0,.68.27.48.41.55.82.55.82,0,.07,0,.14-.07.14s-.21,0-.27-.14c-.27-.27-.75-.27-.89-.2-.07,0-.21,0-.27-.07ZM43.29,51.25c.07-.14.14-.27.27-.27.27-.07.62.2.89.48.34.34.55.68.48.95v.14c0,.14-.07.34-.21.34-.07,0-.21-.07-.34-.2-.21-.27-.48-.41-.68-.54-.41-.14-.62-.34-.41-.88ZM37.27,67.37c0,.07-.07.2-.07.27v.27c0,.07-.07.14-.07.14h-.07c-.07-.07-.14-.41-.14-.54s.14-.2.21-.27h.14v.14ZM38.03,68.93c-.14,0-.27,0-.55-.34-.34-.61-.07-1.36.21-1.63.14-.14.27-.27.34-.2.14.07.14.2.07.48-.07.48,0,.68.14.88.07.14.07.2.14.34-.07.2-.14.41-.34.48ZM39.12,67.77c-.34.14-.48.2-.62.14-.14-.07-.14-.2-.14-.48v-.07c0-.82,0-1.22.75-1.63.07-.07.14-.07.21,0,.14.07.07.27.07.48v.41c.07.68,0,1.09-.27,1.16ZM40.28,66.62c-.27.2-.48.27-.55.27-.07-.07-.14-.2-.14-.41v-.14c-.07-.95-.07-1.36.62-1.9,0,0,.14-.07.21-.07.14.07.14.27.14.61v.41c.07.61,0,1.09-.27,1.22ZM41.51,65.12c-.27.2-.41.27-.55.27-.14-.07-.14-.2-.21-.41v-.14c-.21-.95-.27-1.36.34-1.9.07-.07.14-.07.21-.07.14.07.14.27.21.61,0,.14.07.27.07.41.14.68.14,1.09-.07,1.22ZM42.34,63.56c-.14.2-.27.27-.41.27s-.21-.14-.27-.34c-.34-.95-.27-1.56.07-1.97.07-.07.14-.14.21-.14.14,0,.21.27.27.61.07.14.07.27.14.41.34.48.21.95,0,1.16ZM43.22,61.79l-.07.07c-.07.14-.21.27-.27.27s-.14-.14-.21-.27c-.07-.27-.21-.48-.27-.61-.27-.54-.41-.88,0-1.36.07-.07.21-.14.27-.14.21.07.27.34.41.75.07.14.07.2.14.27.14.48.21.82,0,1.02ZM43.84,60.09l-.07.07c-.07.14-.21.27-.27.27s-.14-.14-.21-.27c-.07-.27-.21-.48-.27-.68-.27-.54-.48-.88-.07-1.36.07-.07.14-.14.27-.14.27.07.41.48.55.88,0,.07.07.14.07.2.21.48.21.82,0,1.02ZM44.39,58.39l-.07.07c-.07.14-.21.27-.27.27s-.14-.14-.21-.27c-.07-.27-.21-.54-.34-.75-.27-.54-.48-.95-.14-1.43.07-.07.14-.14.27-.14.27.07.55.68.75,1.09l.07.07c.07.48.07.82-.07,1.09ZM44.73,56.22c0,.07-.07.07-.07.14-.07.14-.14.34-.27.34-.07,0-.14-.07-.27-.2-.14-.27-.27-.41-.41-.61-.34-.41-.62-.82-.27-1.56q.07-.07.14-.14c.27,0,.75.68.89.95.21.48.41.82.27,1.09ZM44.87,54.52s0,.07-.07.07c-.07.14-.14.27-.27.34-.07,0-.21-.07-.27-.27-.14-.27-.34-.48-.48-.68-.34-.41-.62-.75-.41-1.29.07-.07.07-.14.21-.14.21,0,.48.27.89.82.27.41.55.82.41,1.16Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M75.58,30.73h4.17v9.04l7.45-9.04h5.13l-8.55,9.92,8.82,11.15h-5.4l-7.45-9.79h-.07v9.79h-4.17v-21.07h.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M108.68,43.44l-7.52-12.71h4.86l4.86,8.84,4.99-8.84h4.38l-7.39,12.71v8.29h-4.17v-8.29Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M140.82,34.6c-1.3-.61-2.74-.95-4.24-.95s-3.28.61-3.28,2.92c0,3.67,9.1,2.11,9.1,9.18,0,4.62-3.62,6.39-7.8,6.39-2.26,0-3.28-.27-5.27-.82l.34-3.81c1.44.75,3.01,1.29,4.65,1.29s3.69-.82,3.69-2.72c0-4.01-9.1-2.38-9.1-9.38,0-4.69,3.62-6.46,7.25-6.46,1.78,0,3.42.27,4.99.75l-.34,3.6Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M158.95,34.06h-5.95v-3.33h16v3.33h-5.95v17.74h-4.17v-17.74h.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M178.58,30.73h4.45l5.27,16.59h.07l5.27-16.59h4.1l-6.98,21.07h-5.13l-7.04-21.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M209.01,30.73h12.24v3.33h-8.07v5.17h7.39v3.33h-7.39v5.91h8.14v3.33h-12.24v-21.07h-.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M234.52,30.73h4.51c4.45,0,9.71-.14,9.71,5.71,0,2.45-1.64,4.55-4.24,4.89v.07c1.09.07,1.78,1.22,2.19,2.18l3.35,8.23h-4.65l-2.46-6.59c-.62-1.56-1.1-2.18-2.87-2.18h-1.37v8.77h-4.17v-21.07ZM238.69,39.7h1.37c2.05,0,4.38-.27,4.38-2.92s-2.32-2.79-4.38-2.79h-1.37v5.71Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M262.36,30.73h4.17v9.04l7.45-9.04h5.13l-8.55,9.92,8.82,11.15h-5.4l-7.45-9.79h-.07v9.79h-4.17l.07-21.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M290.74,30.73h12.24v3.33h-8.07v5.17h7.39v3.33h-7.39v5.91h8.07v3.33h-12.24v-21.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M319.95,34.06h-5.95v-3.33h16v3.33h-5.95v17.74h-4.17v-17.74h.07Z'%20style='fill:%20%2300066d;'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3cpath%20d='M355.59,30.74h2.07v9.59h12.23v-9.59h2.07v21.08h-2.07v-9.62h-12.23v9.62h-2.07v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M381.37,30.74h2.07v21.08h-2.07v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M392.52,47.89s2.19,2.31,5.52,2.31c2.31,0,4.2-1.38,4.2-3.66,0-5.31-10.52-3.96-10.52-10.49,0-3.03,2.67-5.67,6.57-5.67,3.66,0,5.64,2.04,5.64,2.04l-1.02,1.74s-1.86-1.8-4.62-1.8-4.44,1.77-4.44,3.63c0,5.01,10.52,3.57,10.52,10.49,0,3.15-2.43,5.7-6.39,5.7-4.32,0-6.69-2.7-6.69-2.7l1.23-1.59Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M417.02,32.6h-7.59v-1.86h17.21v1.86h-7.56v19.22h-2.07v-19.22Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M442.08,30.38c5.97,0,10.73,4.71,10.73,10.76s-4.77,11.03-10.73,11.03-10.73-4.86-10.73-11.03,4.77-10.76,10.73-10.76ZM442.08,50.25c4.74,0,8.57-3.96,8.57-9.11s-3.84-8.84-8.57-8.84-8.57,3.81-8.57,8.84,3.81,9.11,8.57,9.11Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M460.79,30.74h6.24c2.16,0,3.12.21,3.96.57,1.98.87,3.18,2.88,3.18,5.43,0,2.85-1.62,5.04-3.99,5.7v.06s.21.27.54.84l4.59,8.48h-2.37l-4.77-8.87h-5.31v8.87h-2.07v-21.08ZM467.86,41.08c2.55,0,4.17-1.65,4.17-4.29,0-1.74-.69-3.03-1.92-3.69-.63-.33-1.38-.51-3-.51h-4.26v8.48h5.01Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M482.91,30.74h2.07v21.08h-2.07v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M494.07,47.89s2.19,2.31,5.52,2.31c2.31,0,4.2-1.38,4.2-3.66,0-5.31-10.52-3.96-10.52-10.49,0-3.03,2.67-5.67,6.57-5.67,3.66,0,5.64,2.04,5.64,2.04l-1.02,1.74s-1.86-1.8-4.62-1.8-4.44,1.77-4.44,3.63c0,5.01,10.52,3.57,10.52,10.49,0,3.15-2.43,5.7-6.39,5.7-4.32,0-6.69-2.7-6.69-2.7l1.23-1.59Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M513.82,30.74h2.07v9.14h3.57l5.67-9.14h2.37l-6.3,9.95v.06l6.72,11.06h-2.43l-6.03-10.07h-3.57v10.07h-2.07v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M556.9,45.1h-8.48l-2.4,6.72h-2.19l7.73-21.08h2.22l7.73,21.08h-2.19l-2.43-6.72ZM552.65,32.92s-.45,1.74-.81,2.73l-2.82,7.64h7.25l-2.76-7.64c-.36-.99-.81-2.73-.81-2.73h-.06Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M568.27,30.74h2.07v21.08h-2.07v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M579.42,47.89s2.19,2.31,5.52,2.31c2.31,0,4.2-1.38,4.2-3.66,0-5.31-10.52-3.96-10.52-10.49,0-3.03,2.67-5.67,6.57-5.67,3.66,0,5.64,2.04,5.64,2.04l-1.02,1.74s-1.86-1.8-4.62-1.8-4.44,1.77-4.44,3.63c0,5.01,10.52,3.57,10.52,10.49,0,3.15-2.43,5.7-6.39,5.7-4.32,0-6.69-2.7-6.69-2.7l1.23-1.59Z'%20style='fill:%20%2300066d;'/%3e%3c/g%3e%3c/svg%3e", N6 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20642.62%2083'%3e%3cdefs%3e%3cclipPath%20id='clippath'%3e%3crect%20width='330'%20height='83'%20style='fill:%20none;'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20style='clip-path:%20url(%23clippath);'%3e%3cg%3e%3cpath%20d='M0,53.84c0,17.88,15.66,25.9,24.96,29.09l.14.07.14-.07c4.58-1.63,11.22-4.69,16.41-9.72,5.61-5.44,8.48-11.9,8.48-19.37V8.36l-.21-.07C41.79,2.79,33.38,0,25.03,0S8.34,2.79.14,8.29l-.14.07v45.48ZM.48,8.84C8.62,3.4,16.82.68,25.03.68s16.48,2.72,24.55,8.16l-.14-.27v45.27c0,7.27-2.8,13.6-8.28,18.9-5.13,4.96-11.7,7.95-16.21,9.58h.21c-9.16-3.06-24.48-10.94-24.48-28.41V8.57l-.21.27Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M14.64,19.1c-2.87,1.09-4.79,2.38-5.2,2.79-.89.82-.55,1.63-.55,1.63h.07s-.07-.61.75-1.36c.34-.34,2.19-1.56,5.13-2.72l-.21-.34Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M25.78,17.06h-1.3c-2.53.14-5.95.75-8.96,1.77l.14.34c2.94-1.02,6.36-1.56,8.89-1.7h1.23c2.53.14,5.88.75,8.89,1.7l.14-.34c-3.08-1.02-6.5-1.63-9.03-1.77Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M35.63,19.1c2.87,1.09,4.79,2.38,5.2,2.79.89.82.55,1.63.55,1.63h-.07s.07-.61-.75-1.36c-.34-.34-2.19-1.56-5.13-2.72l.21-.34Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M44.11,20.26c-1.44-1.9-4.58-2.58-7.66-2.79-.14-3.13-5.81-3.33-10.12-2.52-.41-.61-1.92-.54-2.33,0-4.38-.82-9.99-.61-10.12,2.52-3.15.2-6.29.88-7.73,2.79-1.37,1.9,1.37,3.87,1.37,3.87l.62-.54s-4.58-3.74,5.75-5.57c.48,1.36,1.44,2.04,1.44,2.04l.55-.34s-3.15-5.85,8.07-4.01l.68,2.38s0-.14.21-.14c0,0-.27-2.24-.21-2.45.14-.34.89-.34,1.03,0,.07.2-.21,2.45-.21,2.45.27,0,.21.14.21.14l.68-2.38c11.22-1.84,8.07,4.01,8.07,4.01l.55.34s.96-.68,1.44-2.04c10.4,1.84,5.75,5.57,5.75,5.57l.62.54s2.8-1.97,1.37-3.87ZM7.73,23.52q.07.07.14.14s-.14-.07-.27.07c-.21-.14-.41-.34-.62-.54-1.23-1.43-2.12-4.55,6.77-5.3-9.58,1.63-6.63,5.03-6.02,5.64ZM15.59,19.65c0,.14-.27,0-.27.07-.68-.75-1.03-1.56-1.03-2.31-.07-1.84,2.12-3.4,8-2.38.14,0,.21,0,.34.07h-.14c.34.07.75.14,1.16.2-10.53-1.16-8.48,3.33-8.07,4.35ZM35.02,19.78s0-.07,0,0c-.07-.07-.07,0-.07,0,.07-.2-.27.07-.27-.14v-.14c.48-1.02,2.53-5.44-8-4.21.34-.07.68-.14,1.03-.2h.07c4.86-.95,7.32,0,8,1.43.21.34.27.75.21,1.16-.07.75-.41,1.5-.96,2.11ZM42.81,23.72s0-.07,0,0h-.07c-.07-.07-.14-.07-.14-.07h-.21s.07-.07.14-.14c.07,0,0,0,0,0,.27-.27.82-.88.96-1.63.21-1.29-.89-2.99-6.84-4.08,10.53.88,7.39,5.1,6.16,5.91Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M43.82,24.5s-.34-.34-.96-.61c-3.15-1.43-2.39,1.77-2.39,2.04-.27-.82-2.19-2.04-2.67.2-.48,2.38,1.44,1.77,1.78,1.77-.48.68-1.44.68-3.56-.2-2.39-.95-2.8-1.63-2.26-2.79.21,1.43,1.98,1.77,2.53.34,1.3-3.19-1.44-2.31-1.78-2.18.41-.75,1.16-1.09,1.16-1.97.07-1.36-1.92-1.7-2.53-1.22-1.03.82-.41,2.65-.41,2.86-.27-.27-2.12-2.79-2.74.61-.27,1.5,1.37,2.18,2.39,1.02-.21,1.22-1.23,1.63-3.69,1.22-3.69-.54-2.94-2.31-2.94-2.31.07.07,1.44,2.31,2.6-.27,1.23-2.85-1.98-1.97-2.46-1.36.27-1.29,1.5-2.04.82-2.86-.89-1.09-2.6-1.02-3.35,0-.68.88.48,1.56.82,2.86-.48-.61-3.76-1.5-2.46,1.36,1.16,2.58,2.53.34,2.6.27,0,0,.75,1.77-2.94,2.31-2.46.41-3.49,0-3.69-1.22,1.03,1.16,2.67.48,2.39-1.02-.62-3.4-2.46-.88-2.74-.61,0-.2.68-2.04-.41-2.86-.68-.48-2.67-.14-2.53,1.22.07.88.89,1.29,1.16,1.97-.34-.14-3.08-1.09-1.78,2.11.55,1.43,2.33,1.09,2.53-.34.55,1.22.14,1.84-2.26,2.79-2.12.82-3.08.88-3.56.2.27-.07,2.19.68,1.78-1.77-.41-2.24-2.46-1.02-2.67-.2,0-.27.75-3.47-2.39-2.04-.62.27-.96.61-.96.61l-.14.14-.14.14,5.47,7.55s4.65-3.87,13.41-3.87,13.41,3.87,13.41,3.87l5.47-7.55.07-.14v-.07ZM43,25.11c-.62.82-4.51,6.12-4.58,6.19l-.14.2-.21-.14c-1.85-1.02-6.77-3.47-13.13-3.47s-11.29,2.38-13.13,3.47l-.14.14-.21-.2c-.07-.07-3.97-5.37-4.58-6.19l-.07-.07v-.14c0-.07.07-.34.41-.61.75-.48,1.44-.34,1.64-.27.41.27.34,2.04.34,2.24.34-.48.89-1.16,1.5-1.09.41,0,.68.27.89.82.34.88.07,1.36-.21,1.56-.41.27-1.03.2-1.5,0,.07.2.21.54.41.68.62.48,1.85.34,3.28-.14,1.71-.54,2.8-1.36,2.94-2.24.14-.54-.07-1.09-.41-1.43-.21.48-.62,1.29-1.16,1.36-.34,0-.68-.2-.96-.75-.41-.75-.48-1.29-.14-1.63.41-.48,1.85-.2,1.98-.14.21.07-.07-.27-.21-.34-.48-.54-.89-.95-.89-1.43s.21-.82.55-1.02c.48-.27,1.16-.2,1.44.07.27.27.34.82.14,2.11,0,.14-.21.75.07.41.27-.27,1.37-1.29,1.98-1.02.41.14.62.61.62,1.36,0,.54-.14.88-.48,1.09-.48.27-1.37-.2-1.78-.48-.07.34,0,.82.27,1.16.48.61,1.71.95,3.35.82,1.71-.2,2.67-.75,3.15-1.43.27-.41.55-1.22.34-1.9-.27.34-1.16,1.09-1.57,1.09s-.68-.34-.96-.88c-.21-.54-.21-1.16.07-1.43.41-.41,1.71.2,2.39.48-.07-.27-.14-.54-.27-.88-.07-.27-.21-.54-.27-.68-.14-.27-.48-.68-.27-1.09.27-.48.75-.75,1.3-.75.62,0,1.09.27,1.3.75.21.41-.07.75-.27,1.09-.07.2-.21.34-.27.68-.14.34-.21.61-.27.88.62-.27,1.92-.88,2.39-.48.27.27.27.82.07,1.43-.27.61-.55.88-.96.88s-1.37-.75-1.57-1.09c-.14,1.02.21,1.63.34,1.9.48.68,1.44,1.29,3.15,1.43,1.64.14,2.87-.2,3.35-.82.27-.34.34-1.02.34-1.36-.41.27-1.3.88-1.85.61-.34-.14-.48-.54-.48-1.09,0-.82.21-1.22.62-1.36.62-.27,1.92,1.09,1.98.88.07-.14,0-.34,0-.48-.07-.82-.14-1.77.27-1.97.34-.27.96-.27,1.37-.07.34.2.55.54.55,1.02s-.21.75-.68,1.36c-.07.14-.62.54-.34.48.27-.07,1.57-.27,1.92.2.27.34.27.88-.14,1.63-.27.54-.62.75-.96.75-.55-.07-.89-.95-1.16-1.36-.21.27-.62.95-.48,1.5.21.82,1.37,1.7,3.01,2.24,1.44.48,2.6.61,3.21.14.27-.2.41-.54.48-.75-.48.2-1.09.27-1.57.07-.27-.14-.55-.54-.27-1.63.14-.54.55-.82.89-.82.55-.07,1.09.48,1.44.95,0-.2.07-.34.07-.54-.07-.75.14-1.36.55-1.56.21-.14.68-.27,1.44.2.41.27.41.61.41.61v.14l.34.14Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M25.17,8.29c-1.64,0-3.01,1.36-3.01,2.99,0,1.36.89,2.45,2.12,2.86l.14.54c.14-.07.21-.07.34-.07,0-.14,0-.27-.07-.34h.68c0,.14,0,.27-.07.34.14,0,.27.07.34.07l.14-.54c1.23-.34,2.12-1.5,2.12-2.86.27-1.63-1.09-2.99-2.74-2.99ZM24.96,8.84h.41v2.72h-.41v-2.72ZM22.64,11.28c0-1.29.96-2.31,2.19-2.45v2.72h-2.19v-.27ZM25.17,13.73c-1.09,0-1.98-.68-2.33-1.56h4.65c-.34.88-1.3,1.56-2.33,1.56ZM27.56,11.83c-.07.14-.07.2-.07.2h-4.72s0-.07-.07-.2c0-.14-.07-.2-.07-.2h4.92c.07,0,.07.07,0,.2ZM25.51,11.49v-2.65c1.23.14,2.19,1.22,2.19,2.45v.27l-2.19-.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M25.85,5.03v-1.77h-1.44v1.77h-1.98v1.43h1.98v2.11h.14s.41-.07.62-.07.55.07.55.07h.14v-2.11h1.98v-1.43h-1.98Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M14.91,45.2l8.21.68.41-1.09-.14.48-8.48-.41s-.48,0-.48-.54.48-.61.48-.61l8.89-.27.55-6.59c0-.27.27-.48.82-.48.48,0,.75.2.75.48l.55,6.59,8.96.27s.48,0,.48.61c0,.54-.48.54-.48.54l-8.41.41.21.68,8.21-.68c.07,0,1.03-.07,1.03-.88,0-.95-.68-1.02-1.09-1.09l-8.21-.48c-.07-.82-.34-4.08-.41-5.51-.07-1.36-.89-1.63-1.23-1.7h-.55c-.34.07-1.16.34-1.23,1.7-.07,1.36-.34,4.62-.41,5.51l-8.21.48c-.41,0-1.09.14-1.09,1.09-.14.75.75.82.89.82ZM35.63,59.28l1.3.61s-.89,1.63-4.1,4.35l.27.41h.07c2.74-1.97,4.24-4.89,4.24-4.89l-1.16-.48,2.39-.88c-.41,1.29-1.44,4.42-4.92,6.93-.07.07-.14.14-.27.2l-.07-.27c-.07.07-.21.14-.27.2l.27.2c-2.46,1.56-5.47,2.31-8.14,2.31s-5.81-.82-8.28-2.45l.14-.27c-.07-.07-.21-.14-.27-.2l-.07.27c-.07,0-.07-.07-.14-.07-3.49-2.58-4.58-5.64-4.99-6.93l2.39.88-1.16.41s1.3,2.85,4.1,4.83l.21-.41c-3.21-2.72-3.9-4.21-3.9-4.21l1.3-.61-3.35-1.43s.68,4.69,5.13,7.95c2.67,1.97,5.75,3.13,8.69,3.13s6.09-1.16,8.69-3.13c4.58-3.19,5.27-7.89,5.27-7.89l-3.35,1.43ZM27.08,66.55c.89,0,3.42-.48,4.92-1.29l.48-.27.14-.07-.21-.41-.62.34c-1.44.75-3.9,1.09-4.58,1.09-.62,0-.82-.14-.82-.82v-4.83l-.75-.48v.07l.27.14v5.51c.07.88.68,1.02,1.16,1.02ZM23.12,65.94c-.62,0-3.08-.27-4.58-1.09l-.62-.34-.21.41.62.34c1.5.82,3.97,1.29,4.92,1.29.48,0,1.09-.07,1.09-1.02v-5.51l.27-.14v-.07l-.75.48v4.83c0,.61-.14.82-.75.82Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M38.78,49.69h-10.12l-3.28-9.24-.21-.68-.21.68-3.42,9.24h-10.12l.62.41,7.87,5.64-3.35,9.92,8.55-6.12,8.41,6.19-3.28-9.99,7.93-5.64.62-.41ZM29.48,55.47l-.14-.07v.07l.14.07v-.07l3.15,8.9-1.03-1.43.21.54.68.95-7.25-5.64v-.27l-.07-.07-.14.07v.27l-7.45,5.64.89-1.22-.41.27.07-.27-.75.95,3.15-8.77-7.73-5.3,1.09.34-.21-.07h.34l-1.16-.34,9.03.2.14.14h.07l-.14-.07,3.08-9.38v1.56l.07-.27.14.34v-1.7l2.94,9.24-.21.27h.21l.14-.14,8.89-.2-1.09.34h.27l-.27.2,1.3-.41-7.93,5.3Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M12.58,50.1l12.52,4.15-.07-.07,7.66,10.67.14-.14-7.59-10.67h-.07l-12.52-4.08-.07.14Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M17.37,64.71l7.87-10.54-.07.07,12.72-4.28-.07-.14-12.72,4.21h-.07l-7.8,10.6.14.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M25.03,40.79v18.08h.2v-18.08h-.2Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M19.97,55.81l5.2-1.56h-.07l5.06,1.56.07-.2-5.06-1.56h-.07l-5.2,1.56.07.2Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M21.48,49.69l3.56,4.49.14.07.07-.07,3.49-4.49-.14-.07-3.56,4.42h.21l-3.62-4.42-.14.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M13.95,66.69c-.27,0-.62.07-.89.14.07.07.14.14.21.2.21-.07.48-.14.68-.14,1.37,0,2.39,1.09,2.39,2.38v.14c.07,0,.14.07.21.14v-.27c.07-1.43-1.16-2.58-2.6-2.58ZM15.59,71.99c-.48.27-1.09.48-1.64.48-1.78,0-3.15-1.43-3.15-3.13,0-.27.07-.61.14-.88-.07,0-.14-.07-.14-.14-.07-.07-.14-.14-.14-.2-.14.34-.21.82-.21,1.22,0,1.97,1.64,3.53,3.56,3.53.75,0,1.44-.2,1.98-.61h-.07c-.14-.07-.27-.14-.34-.27ZM9.51,45.88c-.07.14-.14.27-.21.27.62.61.89,1.36.89,2.24,0,1.7-1.3,3.06-3.01,3.13-.07.2-.14.34-.14.48,1.98,0,3.56-1.63,3.56-3.53,0-1.02-.41-1.9-1.09-2.58ZM7.25,44.93h-.21c-1.98,0-3.56,1.56-3.56,3.53,0,1.29.68,2.38,1.64,2.99-.07-.2-.07-.41,0-.54-.75-.61-1.23-1.5-1.23-2.45,0-1.77,1.44-3.13,3.15-3.13,0-.07.07-.14.07-.2s.07-.14.14-.2ZM13.95,65.8c-.68,0-1.3.2-1.78.48.14.14.21.2.27.27.48-.27.96-.41,1.5-.41,1.78,0,3.15,1.43,3.15,3.13,0,.27,0,.54-.07.75v.07c.07,0,.21.07.41.14.07-.27.14-.61.14-.88,0-1.97-1.64-3.53-3.62-3.53ZM22.3,36.78h-.41c.34.82.96,1.43,1.78,1.84v-.48c-.62-.34-1.09-.82-1.37-1.36ZM5.06,46.7c-.41.48-.68,1.09-.68,1.77,0,.61.21,1.16.62,1.63,0-.07,0-.14.07-.2v-.07c-.27-.41-.41-.88-.41-1.36,0-1.09.75-2.04,1.85-2.31.07-.14.21-.27.34-.34-.68.07-1.3.41-1.78.88ZM36.32,71.78c-.27,0-.55-.07-.82-.14q-.07.07-.14.14c.27.14.62.2.96.2,1.44,0,2.67-1.16,2.67-2.65,0-.27-.07-.48-.14-.75h-.07s0,.2-.07.41v.34c0,1.36-1.09,2.45-2.39,2.45ZM42.88,51.05q.07,0,0,0c.07-.07,0-.14-.07-.2-1.16-.2-1.98-1.16-1.98-2.38,0-.54.21-1.02.48-1.36-.07-.07-.07-.14-.14-.27-.34.48-.55,1.02-.55,1.56-.07,1.36.96,2.52,2.26,2.65ZM7.18,51.05c1.44-.07,2.53-1.22,2.53-2.65,0-.54-.21-1.09-.48-1.5-.07.07-.07.14-.14.2.27.41.41.82.41,1.36,0,1.29-.96,2.31-2.26,2.38-.07.14-.07.2-.07.2ZM13.95,71.92c.27,0,.55-.07.82-.14-.07-.07-.14-.07-.14-.14-.21.07-.41.07-.62.07-1.37,0-2.39-1.09-2.39-2.38v-.07c-.14-.14-.14-.27-.21-.41,0,.14-.07.27-.07.41,0,1.5,1.16,2.65,2.6,2.65ZM23.05,36.64c-.14,0-.21-.07-.27-.07.21.34.48.68.89.95v-.2c-.27-.2-.41-.41-.62-.68ZM42.81,51.59c-1.57-.2-2.8-1.5-2.8-3.13,0-.88.34-1.7.96-2.31-.07-.07-.14-.2-.21-.34-.75.68-1.16,1.56-1.16,2.65,0,1.9,1.5,3.47,3.35,3.53,0-.07-.07-.2-.14-.41ZM45.62,48.47c0,.61-.21,1.16-.55,1.56v.27c.48-.48.82-1.16.82-1.9,0-1.29-.96-2.38-2.26-2.58.14.07.27.2.34.34.96.34,1.64,1.29,1.64,2.31ZM39.33,68.32c.14.34.14.68.14.95,0,1.77-1.44,3.13-3.15,3.13-.62,0-1.3-.2-1.78-.54-.07.07-.21.2-.41.27.62.48,1.37.75,2.19.75,1.98,0,3.56-1.56,3.56-3.53,0-.48-.14-.95-.27-1.43-.07.2-.14.34-.27.41ZM44.8,50.64q.07,0,0,0h0ZM43.22,44.93h-.07c.07.07.07.14.14.2,0,.07.07.14.07.2.82,0,1.57.34,2.19.95.62.61.89,1.36.89,2.18,0,1.02-.48,1.97-1.37,2.58,0,.14,0,.34-.14.61,1.16-.61,1.92-1.77,1.92-3.13-.07-1.97-1.64-3.6-3.62-3.6ZM27.22,34.26c.14,0,.21,0,.27.07-.41-.95-1.37-1.56-2.39-1.56-1.09,0-2.05.68-2.46,1.63.07-.07.21-.14.34-.14.41-.75,1.23-1.22,2.12-1.22.96-.07,1.71.48,2.12,1.22ZM27.49,36.64c-.07,0-.21.07-.34.07-.14.2-.34.41-.55.61v.27c.41-.27.68-.61.89-.95ZM28.04,36.78c-.27.54-.75,1.02-1.3,1.36v.48c.75-.34,1.37-1.02,1.71-1.77h-.27c-.07-.07-.14-.07-.14-.07ZM25.1,31.81c-1.78,0-3.28,1.29-3.56,2.99.14-.14.27-.2.41-.2v-.07c.34-1.36,1.64-2.38,3.08-2.38s2.74,1.02,3.08,2.38c.14,0,.27.07.48.14-.27-1.56-1.71-2.86-3.49-2.86ZM33.1,69.34c0-1.77,1.44-3.13,3.15-3.13.48,0,.96.14,1.37.27h.07c.07-.07.14-.2.27-.27-.48-.27-1.09-.41-1.71-.41-1.98,0-3.56,1.56-3.56,3.53,0,.34.07.68.14,1.02.07-.07.21-.14.27-.2.07,0,.07-.07.14-.07v-.07c-.14-.2-.14-.41-.14-.68ZM36.32,66.96c.21,0,.34,0,.55.07.07-.07.14-.14.27-.2-.27-.07-.48-.14-.75-.14-1.44,0-2.67,1.16-2.67,2.65,0,.2,0,.41.07.68.07-.07.14-.14.21-.2,0-.14-.07-.27-.07-.41-.07-1.36,1.03-2.45,2.39-2.45Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M37.89,41.47s.07.34.41.68c.27.34.82.54.82.54,0,0,.07.34.27.75.21.41.75.61.75.61,0,0,.07.48.21.68.14.27.55.54.55.54,0,0-.14.2-.07.48.14.34.27.48.27.48-.21.82.48,1.09.48,1.09.48.27,1.23-.2,1.23-.2,0,0,.68.07,1.09-.48.48-.61-.55-.95-.55-.95,0,0,.14-.2-.07-.61-.21-.41-.68-.54-.68-.54,0,0,0-.34-.14-.82-.14-.48-.82-.82-.82-.82,0,0,.07-.27-.14-.68-.27-.54-.96-.88-.96-.88,0,0-.14-.27-.34-.68-.55-.54-1.16-.54-1.16-.54,0,0-.14-.61-.34-.82-.34-.34-1.03-.48-1.03-.48,0,0-.07-.27-.48-.68-.34-.34-1.16-.41-1.16-.41,0,0-.07-.34-.48-.68-.48-.34-1.16-.27-1.16-.27,0,0,0-.2-.62-.61-.62-.41-1.16-.27-1.16-.27,0,0-.21-.27-.62-.48-.48-.27-1.16-.14-1.16-.14,0,0-.21-.27-.82-.48-.62-.2-1.16.07-1.16.07-.55-.48-1.03-.2-1.03-.2,0,0-.07-.48-.62-.41-1.09.2-.75,1.09-.75,1.09,0,0-.21.14-.27.61-.07.48.27.75.62.82.27.07.82-.14.82-.14,0,0,.21.2.48.2h.62s.21.2.68.34c.48.14,1.03,0,1.03,0,0,0,0,.2.48.41.48.2.96.07.96.07,0,0,.27.41.75.68.41.2.96.14.96.14,0,0,.27.34.68.61.34.27.96.34.96.34,0,0,.21.41.48.68.27.2.96.34.96.34,0,0,.27.48.48.68.14.07.75.34.75.34ZM42.2,47.24c-.07.07-.41,0-.55-.07-.14-.07-.21-.2-.21-.27s0-.07.07-.14h.14c.07.07.14.07.27.14.07,0,.14.07.21.07.07.07.14.07.14.14s0,.07-.07.14ZM43.09,46.16c.14.07.34.2.34.41,0,.14-.07.27-.48.41-.68.14-1.3-.34-1.5-.68-.14-.2-.14-.27-.07-.34s.27-.07.48.07c.41.2.68.2.89.14.07-.07.21-.07.34,0ZM42.61,45.14c.07.34.07.54-.07.61-.07.07-.21.07-.48-.07h-.07c-.82-.2-1.16-.34-1.37-1.16,0-.07,0-.2.07-.2.07-.07.27,0,.48.07.14.07.27.07.41.14.68.14,1.03.41,1.03.61ZM41.79,43.71c.14.34.14.54.07.61-.07.07-.21.07-.48,0h-.14c-.96-.27-1.3-.34-1.64-1.16,0-.07-.07-.14,0-.2.07-.07.27,0,.62.07.14.07.27.07.41.14.75.07,1.09.27,1.16.54ZM40.76,42.08c.14.34.14.48.07.61-.07.07-.21.07-.48.07h-.14c-.96-.07-1.37-.14-1.71-.88-.07-.07-.07-.14,0-.2.07-.14.34-.07.62,0,.14,0,.27.07.41.07.75,0,1.09.14,1.23.34ZM39.53,40.85c.14.2.21.34.14.41-.07.14-.21.14-.41.14-1.03,0-1.57-.2-1.92-.68-.07-.14-.07-.2-.07-.27.07-.14.34-.14.68-.14h.48c.48.07.89.27,1.09.54ZM26.74,34.87c0-.14.07-.2.21-.27h.27l.07.07s-.27.14-.34.27l-.07.07c-.14.07-.14,0-.14-.14ZM27.36,36.23c0,.07,0,.14-.07.2-.14.07-.41.07-.55-.07-.14-.14-.21-.27-.14-.48,0-.14.14-.34.41-.54.55-.34.96-.27.96-.27.07,0,.07.07.07.14s-.07.14-.21.27c-.34.14-.55.61-.48.75ZM27.97,36.37c-.14-.07-.21-.2-.21-.27,0-.27.41-.54.75-.68.48-.27.82-.27,1.09-.14,0,0,.07,0,.07.07.14.07.27.14.27.27,0,.07-.07.2-.27.27-.27.14-.55.34-.68.48-.34.14-.55.27-1.03,0ZM29.41,36.64c-.07-.07-.14-.14-.07-.2.07-.2.41-.41,1.03-.61.41-.14.89-.27,1.16-.07l.07.07c.14.07.27.2.27.34,0,.07-.14.14-.27.2-.27.07-.55.2-.75.27-.62.2-1.03.41-1.44,0ZM30.91,37.12c-.07-.07-.07-.14-.07-.14.07-.27.89-.48,1.16-.54.48-.14.89-.2,1.09.07,0,0,.07.07.14.14.14.14.27.2.27.34,0,.07-.14.14-.27.2-.27.07-.48.14-.68.27-.55,0-.96.2-1.64-.34ZM34.13,38.07c-.55.14-1.09.2-1.37-.34-.07-.07-.07-.2,0-.27.14-.27.68-.27,1.3-.34h.07c.55-.07.82.07,1.03.27l.07.07c.14.14.21.27.14.34-.07.07-.14.14-.34.14-.34.07-.62.07-.89.14ZM34.4,38.68c-.07-.14-.07-.2-.07-.27.14-.2.62-.27,1.03-.27h.21c.55-.07.82.07,1.03.27l.07.07c.14.14.21.27.14.34-.07.07-.14.14-.34.14-.27,0-.55.07-.75.07-.48.14-.96.2-1.3-.34ZM35.91,39.7c-.07-.14-.07-.2-.07-.27.07-.2.48-.2.82-.2h.27c.55-.07.82.07,1.03.27l.07.07c.14.14.21.27.14.34-.07.07-.14.14-.34.14-.27,0-.48.07-.68.07-.48.07-.82.14-1.23-.41ZM35.29,70.42s.14-.2-.14-.61c-.27-.41-.62-.41-.96-.27-.27.14-.62.61-.62.61,0,0-.27-.07-.48.07-.27.14-.48.34-.48.34,0,0-.27-.07-.75.14-.48.2-.82.61-.82.61,0,0-.14-.14-.68-.07-.55.07-.82.48-.82.48,0,0-.48-.2-1.03-.07-.41.07-.82.48-.82.48,0,0-.41-.14-.89-.07-.41,0-1.03.27-1.03.27,0,0-.41-.27-.75-.27-.34-.07-.96.27-.96.27,0,0-.55-.27-.82-.27-.27-.07-.89.14-.89.14,0,0-.27-.2-.75-.34-.48-.14-.96,0-.96,0,0,0-.27-.27-.68-.41-.41-.2-.96-.07-.96-.07,0,0-.27-.34-.55-.48-.27-.14-.75-.14-.75-.14,0,0,0-.27-.21-.41-.34-.2-.55-.27-.55-.27-.34-.82-1.03-.61-1.03-.61-.55.07-.89.88-.89.88,0,0-.55.27-.62,1.02,0,.75,1.03.41,1.03.41,0,0,0,.2.41.41.34.2.82.07.82.07,0,0,.21.27.62.54.41.27,1.16.14,1.16.14,0,0,.14.27.48.48.55.27,1.3.14,1.3.14,0,0,.27.2.68.34.75.27,1.23-.14,1.23-.14,0,0,.41.41.75.48.48.07,1.16-.2,1.16-.2,0,0,.27.2.75.27.48.07,1.23-.34,1.23-.34,0,0,.27.27.82.27.62,0,1.16-.41,1.16-.41,0,0,.14.14.82.14.75,0,1.09-.48,1.09-.48,0,0,.34.14.82.07.55-.07,1.03-.61,1.03-.61,0,0,.34.14.89-.07.62-.2.89-.75.89-.75.75.07.96-.41.96-.41,0,0,.34.34.75,0,.89-.75,0-1.29,0-1.29ZM15.53,70.08c.07-.14.34-.27.48-.27s.27.07.27.14.07.07,0,.14c0,0-.07.07-.14.07s-.21,0-.27.07c-.07,0-.14.07-.27.07,0-.07,0-.14-.07-.2q0,.07,0,0ZM15.8,71.24c-.07.07-.21.14-.27.2-.14.07-.41,0-.48-.14-.07-.07-.14-.27.14-.61.48-.54,1.23-.48,1.64-.34.21.07.27.14.27.27s-.14.2-.48.27c-.48,0-.68.2-.82.34ZM16.41,71.99c-.27-.27-.34-.41-.34-.54s.14-.14.41-.27h.07c.75-.27,1.16-.41,1.78.2.07.07.14.14.07.2,0,.14-.21.2-.48.27-.14.07-.27.07-.41.14-.48.14-.89.2-1.09,0ZM17.99,72.74c-.27-.2-.41-.34-.41-.48s.14-.14.34-.27l.14-.07c.89-.34,1.3-.48,1.98,0,0,0,.14.07.14.2s-.27.2-.55.27c-.14.07-.27.07-.41.14-.62.27-1.03.34-1.23.2ZM20.93,73.08c-.55.34-.96.41-1.16.27-.27-.2-.41-.27-.41-.41s.14-.2.34-.27l.07-.07c.82-.48,1.16-.68,1.91-.27.07.07.14.07.14.14,0,.14-.21.27-.48.41-.14.07-.27.14-.41.2ZM21.54,73.69c-.21-.07-.34-.2-.34-.27,0-.14.07-.27.27-.34.82-.61,1.37-.82,1.91-.54.14.07.21.14.21.2,0,.14-.21.27-.48.48-.14.07-.27.2-.34.27-.48.2-.96.27-1.23.2ZM24.49,73.55c-.41.34-.75.48-1.03.34h-.14c-.14-.07-.34-.07-.34-.2,0-.07.07-.2.21-.27.21-.14.34-.27.55-.48.41-.41.75-.68,1.3-.41.14.07.21.14.21.2,0,.2-.27.41-.55.61-.07.07-.14.14-.21.2ZM26.26,73.55c-.41.34-.75.48-1.03.34h-.14c-.14-.07-.34-.07-.34-.2,0-.07.07-.2.21-.27.21-.2.41-.34.55-.54.41-.41.75-.75,1.3-.48.14.07.21.14.21.2.07.27-.34.54-.68.82.07.07,0,.14-.07.14ZM28.18,73.42c-.48.41-.82.54-1.09.41h-.14c-.14-.07-.34-.07-.34-.2,0-.07.07-.2.21-.27.27-.2.41-.41.62-.54.41-.41.75-.82,1.37-.54.14.07.14.14.21.2.07.2-.34.61-.82.95ZM29.27,73.48h-.14c-.21,0-.34,0-.41-.14,0-.07,0-.2.14-.27.21-.2.27-.41.41-.61.27-.48.55-.82,1.37-.82.07,0,.14.07.14.07.07.27-.41.88-.62,1.16-.34.41-.62.68-.89.61ZM31.87,72.4c-.27.34-.55.75-.89.75h-.14c-.14,0-.34,0-.41-.14-.07-.07,0-.2.14-.34.21-.27.34-.48.48-.68.27-.48.48-.82,1.09-.82.14,0,.21.07.21.14.14.14-.07.54-.48,1.09ZM33.65,71.72c-.27.48-.48.75-.75.75h-.14c-.14,0-.34.07-.41-.07-.07-.07,0-.2.07-.34.21-.27.27-.54.27-.82.14-.41.21-.68.75-.68.14,0,.27.07.34.14.21.2.07.68-.14,1.02ZM34.88,70.76c-.21.61-.62.75-.62.75-.07,0-.14,0-.14-.07-.07-.07,0-.2.07-.34.21-.34.07-.82-.07-.88-.07-.07-.07-.14-.07-.2.07-.14.27-.27.48-.27s.27.14.41.27c0,.2.07.41-.07.75ZM35.29,71.38c-.07.07-.21.14-.27.14h-.07c0-.07.14-.27.14-.41,0-.07.07-.07.07-.07.07,0,.14.07.21.14.07-.07.07.07-.07.2ZM15.11,39.29s.62-.14.96-.34c.34-.27.68-.61.68-.61,0,0,.55.07.96-.14.48-.2.75-.68.75-.68,0,0,.48.14.96-.07.48-.2.48-.41.48-.41,0,0,.48.2,1.03,0,.48-.14.68-.34.68-.34h.62c.27,0,.48-.2.48-.2,0,0,.55.2.82.14.34-.07.68-.27.62-.82-.07-.48-.27-.61-.27-.61,0,0,.41-.88-.75-1.09-.55.07-.62.54-.62.54,0,0-.48-.27-1.03.2,0,0-.55-.27-1.16-.07-.62.2-.82.48-.82.48,0,0-.68-.14-1.16.14-.41.2-.62.48-.62.48,0,0-.55-.2-1.16.27-.62.41-.62.61-.62.61,0,0-.68-.07-1.16.27-.41.27-.48.68-.48.68,0,0-.82.07-1.16.41-.34.34-.48.68-.48.68,0,0-.75.14-1.03.48-.21.27-.34.82-.34.82,0,0-.62,0-1.09.61-.27.41-.34.68-.34.68,0,0-.75.34-.96.88-.21.34-.14.68-.14.68,0,0-.68.27-.82.82-.14.48-.14.82-.14.82,0,0-.48.2-.68.54-.21.41-.07.61-.07.61,0,0-1.03.34-.55.95.48.61,1.09.48,1.09.48,0,0,.68.48,1.23.2,0,0,.62-.27.48-1.09,0,0,.21-.14.27-.48.07-.2-.07-.48-.07-.48,0,0,.41-.27.55-.54.14-.27.21-.68.21-.68,0,0,.48-.27.75-.61.21-.34.27-.75.27-.75,0,0,.48-.2.82-.54.27-.34.41-.68.41-.68,0,0,.62-.2.82-.41.21-.2.48-.68.48-.68,0,0,.68-.14.96-.34.14-.34.34-.82.34-.82ZM23.05,34.74s.07-.07,0,0c.07-.14.21-.14.34-.07.14,0,.21.14.21.27,0,.07,0,.2-.07.2,0,0-.07,0-.07-.07-.07-.14-.34-.27-.41-.34ZM22.36,35.14s.41-.14.96.27c.34.2.41.41.41.54,0,.2-.07.34-.14.48-.14.14-.41.14-.55.07-.07-.07-.14-.14-.07-.2.07-.14-.14-.61-.48-.82-.14-.07-.21-.14-.21-.27,0-.07.07-.07.07-.07ZM20.72,35.28c.07,0,.07-.07.07-.07.27-.14.62-.14,1.09.14.34.2.68.41.75.68,0,.14-.07.2-.21.27-.48.34-.68.14-1.03-.14-.21-.14-.41-.34-.68-.48-.21-.07-.27-.14-.27-.27-.07,0,.14-.07.27-.14ZM18.74,35.82l.07-.07c.27-.2.75-.07,1.16.07.68.2,1.03.41,1.03.61,0,.07,0,.14-.07.2-.48.41-.82.2-1.37,0-.21-.14-.48-.2-.75-.27-.21-.07-.27-.14-.27-.2,0-.14.07-.2.21-.34ZM17.1,36.57q.07-.07.14-.14c.21-.27.62-.14,1.09-.07.27.07,1.09.27,1.16.54q0,.07-.07.14c-.68.54-1.03.41-1.57.2-.21-.07-.41-.2-.68-.27-.21-.07-.27-.07-.27-.2-.07,0,.07-.14.21-.2ZM15.18,37.46l.07-.07c.21-.27.48-.34,1.03-.27h.14c.55.07,1.16.14,1.3.34.07.07,0,.2,0,.27-.34.54-.82.41-1.37.34-.27-.07-.55-.07-.82-.14-.21,0-.27-.07-.34-.14-.21-.07-.07-.2,0-.34ZM8.69,47.18c-.14.07-.48.14-.55.07l-.07-.07c0-.07.07-.07.14-.14.07-.07.14-.07.21-.07.14-.07.21-.07.27-.14.07-.07.07,0,.14,0s.07.07.07.14c0,0-.07.14-.21.2ZM8.96,46.29c-.21.34-.82.82-1.5.68-.41-.07-.48-.27-.48-.41,0-.2.21-.34.34-.41.14-.07.27,0,.34,0,.21,0,.48.07.89-.14.27-.14.41-.14.48-.07.07,0,.07.2-.07.34ZM9.64,44.59c-.21.82-.55.95-1.37,1.16h-.07c-.27.07-.41.14-.48.07-.07-.07-.07-.27-.07-.61.07-.27.34-.48.96-.61.14-.07.27-.07.41-.14.27-.07.41-.14.48-.07.14,0,.21.07.14.2ZM10.67,43.1c-.34.82-.68.95-1.64,1.16h-.14c-.27.07-.41.07-.48,0-.07-.07-.07-.27.07-.61.07-.27.41-.48,1.09-.61.14,0,.27-.07.41-.14.27-.07.55-.2.62-.07.14.14.07.2.07.27ZM11.76,41.81c-.34.75-.68.82-1.71.88h-.14c-.27,0-.41.07-.48-.07-.07-.07,0-.27.07-.61.07-.27.48-.41,1.09-.48.14,0,.27,0,.41-.07.34-.07.55-.07.62,0,.21.2.21.27.14.34ZM13.06,40.79c-.34.48-.89.68-1.91.68-.21,0-.34-.07-.41-.14-.07-.14,0-.27.14-.41.21-.27.62-.48,1.09-.41h.48c.34,0,.62,0,.68.14,0-.07,0,0-.07.14ZM14.43,39.7c-.34.54-.75.48-1.3.41-.21,0-.41-.07-.68-.07-.21,0-.27-.07-.34-.14-.07-.14.07-.27.14-.34l.07-.07c.21-.27.48-.34,1.03-.27h.27c.34,0,.75,0,.82.2.07.07.07.14,0,.27ZM13.82,38.95c-.21,0-.27-.07-.34-.14-.07-.14.07-.27.14-.34l.07-.07c.21-.27.48-.34,1.03-.27h.21c.41,0,.89.07,1.03.27.07.07,0,.2-.07.27-.34.54-.82.48-1.37.34-.14,0-.41-.07-.68-.07ZM12.52,66.62s-.07-.2-.41-.41c-.21-.14-.41-.07-.41-.07,0,0-.21-.48-.34-.68-.21-.2-.62-.41-.62-.41,0,0-.07-.54-.34-.88-.27-.34-.62-.48-.62-.48,0,0-.07-.54-.27-.95-.27-.41-.55-.61-.55-.61,0,0,0-.68-.21-.88-.14-.2-.55-.61-.55-.61,0,0,.07-.68-.07-.95-.14-.27-.48-.61-.48-.61,0,0,.07-.61-.07-1.02-.14-.41-.34-.82-.34-.82,0,0,.21-.48.21-.88-.07-.48-.41-.88-.41-.88,0,0,.27-.41.21-.95-.07-.54-.27-.61-.27-.61,0,0,.27-.41.34-.95,0-.54-.14-.75-.14-.75,0,0,.14-.27.21-.61.07-.27-.07-.48-.07-.48,0,0,.34-.48.34-.75.07-.34-.07-.75-.55-.82-.48-.07-.68.14-.68.14,0,0-.89-.75-1.37.27-.27.48.21.75.21.75,0,0-.41.34-.07,1.02,0,0-.41.48-.41,1.09s.21.88.21.88c0,0-.34.61-.21,1.16.14.41.27.75.27.75,0,0-.34.48-.07,1.16.21.68.41.75.41.75,0,0-.27.61-.07,1.22.21.48.48.68.48.68,0,0-.21.82.07,1.22.27.48.48.61.48.61,0,0-.07.75.14,1.16.14.27.68.54.68.54,0,0-.21.61.27,1.22.27.34.55.54.55.54,0,0,.14.82.55,1.22.27.27.62.34.62.34,0,0,.07.75.48,1.02.41.27.75.34.75.34,0,0,0,.48.34.82.34.27.55.2.55.2,0,0,.07,1.09.75.82.68-.27.82-.88.82-.88,0,0,.68-.54.55-1.09,0-.07-.07-.75-.89-.88ZM6.16,50.03c.27-.27.55-.27.68-.27.21,0,.27.14.41.27.07.2,0,.41-.14.54-.07.07-.14.07-.21,0-.14-.07-.62-.07-.89.2-.14.14-.21.2-.27.14-.07,0-.07-.07-.07-.14-.07.14,0-.34.48-.75ZM5.47,49.83c.07-.14.21-.14.27-.14s.14.07.14.14c0,0,0,.07-.07.07-.14.07-.34.27-.34.27,0,0-.07,0-.07-.07s0-.14.07-.27ZM5.68,51.53c.27-.27.62-.54.89-.48.14,0,.21.14.27.27.21.54-.07.68-.41.88-.21.14-.41.27-.68.54-.14.14-.27.2-.34.2-.14-.07-.14-.2-.21-.34v-.14c-.07-.34.07-.61.48-.95ZM5.2,54.52c-.14-.27.14-.75.41-1.09.41-.54.75-.82.89-.82.07,0,.14.07.21.14.27.54-.07.88-.41,1.29-.14.2-.34.41-.48.68-.14.2-.21.27-.27.27-.14,0-.21-.2-.27-.34l-.07-.14ZM5.33,56.22c-.14-.27.07-.61.27-1.02.14-.27.62-.95.89-.95q.07,0,.14.14c.34.82.07,1.09-.27,1.56-.14.2-.27.34-.41.61-.07.14-.21.2-.27.2-.14,0-.21-.2-.27-.34,0-.07,0-.14-.07-.2ZM5.75,58.46l-.07-.07c-.21-.27-.21-.54.07-1.09l.07-.07c.21-.54.48-1.02.75-1.09.07,0,.21,0,.27.14.41.48.21.88-.14,1.43-.14.2-.27.48-.34.75-.07.2-.14.27-.21.27-.21,0-.34-.2-.41-.27ZM6.57,60.5c-.14,0-.21-.14-.27-.27l-.07-.07c-.21-.27-.21-.54.07-1.09,0-.07.07-.14.07-.2.14-.41.34-.82.55-.88.07,0,.21,0,.27.14.41.48.21.88-.07,1.36-.14.2-.21.41-.27.68-.14.2-.21.34-.27.34ZM7.39,61.86c-.07.2-.14.27-.21.27-.14,0-.21-.14-.27-.27l-.07-.07c-.21-.27-.21-.54.07-1.09.07-.07.07-.2.14-.27.14-.34.27-.68.41-.75.07,0,.14,0,.27.14.41.48.27.88,0,1.36-.14.2-.21.48-.34.68ZM8.07,63.83c-.14,0-.27-.07-.41-.27-.21-.27-.27-.68-.07-1.16.07-.14.07-.27.14-.41.07-.34.14-.61.27-.61.07,0,.14,0,.21.14.41.48.41,1.02.07,1.97,0,.2-.07.34-.21.34ZM9.3,64.85v.14c-.07.27-.07.41-.21.41s-.27-.07-.55-.27c-.21-.14-.27-.54-.14-1.16.07-.14.07-.27.07-.41.07-.34.07-.54.21-.61.07,0,.14,0,.21.07.62.48.62.88.41,1.84ZM10.46,66.28v.14c0,.27,0,.41-.14.41-.14.07-.27-.07-.55-.27-.27-.14-.34-.54-.27-1.22v-.41c0-.34,0-.54.14-.61.07-.07.21,0,.21.07.62.54.62.95.62,1.9ZM11.63,67.43c0,.34,0,.48-.14.54-.14.07-.27,0-.62-.14-.27-.14-.34-.48-.27-1.09v-.41c0-.27,0-.41.07-.48h.21c.75.34.82.75.75,1.56ZM12.58,68.59c-.21.34-.41.34-.55.34-.21-.07-.27-.27-.27-.41s.07-.27.14-.34c.07-.2.21-.41.14-.88-.07-.27,0-.48.07-.48.07-.07.21,0,.34.2.21.27.41.95.14,1.56ZM13.06,68.04q-.07,0,0,0c-.14,0-.14-.07-.14-.14v-.27c0-.14,0-.2-.07-.27v-.14s.07-.07.14,0c.07,0,.21.07.21.27,0,.14-.07.48-.14.54ZM45.07,53.63s.21-.27.21-.88-.41-1.09-.41-1.09c.34-.68-.07-1.02-.07-1.02,0,0,.48-.27.21-.75-.48-1.02-1.23-.34-1.23-.34,0,0-.14-.14-.68-.14-.48.07-.62.41-.55.82,0,.34.34.75.34.75,0,0-.14.2-.07.48.07.27.21.61.21.61,0,0-.14.27-.14.75,0,.54.34.95.34.95,0,0-.21.07-.27.61-.07.54.21.95.21.95,0,0-.34.41-.41.88-.07.41.21.88.21.88,0,0-.27.34-.34.82-.14.41-.07,1.02-.07,1.02,0,0-.34.34-.48.61-.14.27-.07.95-.07.95,0,0-.41.41-.55.61-.14.2-.21.88-.21.88,0,0-.27.2-.55.61-.27.41-.27.95-.27.95,0,0-.34.14-.62.48-.27.34-.34.88-.34.88,0,0-.41.2-.62.41-.21.2-.34.68-.34.68,0,0-.27-.07-.41.07-.34.2-.41.41-.41.41-.82.07-.89.75-.89.75-.14.54.55,1.09.55,1.09,0,0,.14.61.82.88.68.27.75-.82.75-.82,0,0,.21.07.55-.2.34-.27.34-.82.34-.82,0,0,.34-.14.75-.34.41-.27.48-1.02.48-1.02,0,0,.27-.07.62-.34.41-.41.55-1.22.55-1.22,0,0,.27-.2.55-.54.48-.61.27-1.22.27-1.22,0,0,.55-.27.68-.54.27-.41.14-1.16.14-1.16,0,0,.27-.2.48-.61.21-.41.07-1.22.07-1.22,0,0,.34-.2.48-.68.21-.61-.07-1.22-.07-1.22,0,0,.14-.07.34-.75.21-.68-.07-1.16-.07-1.16,0,0,.21-.27.27-.75.07-.34-.27-.95-.27-.95ZM44.18,49.83c0-.07.07-.14.14-.14.14,0,.27,0,.27.14.07.14.07.2.07.27s-.07.07-.07.07c0,0-.21-.2-.34-.27-.07,0-.07-.07-.07-.07ZM42.95,50.64c-.14-.14-.21-.34-.14-.54.07-.14.21-.27.41-.27.14,0,.41,0,.68.27.48.41.55.82.55.82,0,.07,0,.14-.07.14s-.21,0-.27-.14c-.27-.27-.75-.27-.89-.2-.07,0-.21,0-.27-.07ZM43.29,51.25c.07-.14.14-.27.27-.27.27-.07.62.2.89.48.34.34.55.68.48.95v.14c0,.14-.07.34-.21.34-.07,0-.21-.07-.34-.2-.21-.27-.48-.41-.68-.54-.41-.14-.62-.34-.41-.88ZM37.27,67.37c0,.07-.07.2-.07.27v.27c0,.07-.07.14-.07.14h-.07c-.07-.07-.14-.41-.14-.54s.14-.2.21-.27h.14v.14ZM38.03,68.93c-.14,0-.27,0-.55-.34-.34-.61-.07-1.36.21-1.63.14-.14.27-.27.34-.2.14.07.14.2.07.48-.07.48,0,.68.14.88.07.14.07.2.14.34-.07.2-.14.41-.34.48ZM39.12,67.77c-.34.14-.48.2-.62.14-.14-.07-.14-.2-.14-.48v-.07c0-.82,0-1.22.75-1.63.07-.07.14-.07.21,0,.14.07.07.27.07.48v.41c.07.68,0,1.09-.27,1.16ZM40.28,66.62c-.27.2-.48.27-.55.27-.07-.07-.14-.2-.14-.41v-.14c-.07-.95-.07-1.36.62-1.9,0,0,.14-.07.21-.07.14.07.14.27.14.61v.41c.07.61,0,1.09-.27,1.22ZM41.51,65.12c-.27.2-.41.27-.55.27-.14-.07-.14-.2-.21-.41v-.14c-.21-.95-.27-1.36.34-1.9.07-.07.14-.07.21-.07.14.07.14.27.21.61,0,.14.07.27.07.41.14.68.14,1.09-.07,1.22ZM42.34,63.56c-.14.2-.27.27-.41.27s-.21-.14-.27-.34c-.34-.95-.27-1.56.07-1.97.07-.07.14-.14.21-.14.14,0,.21.27.27.61.07.14.07.27.14.41.34.48.21.95,0,1.16ZM43.22,61.79l-.07.07c-.07.14-.21.27-.27.27s-.14-.14-.21-.27c-.07-.27-.21-.48-.27-.61-.27-.54-.41-.88,0-1.36.07-.07.21-.14.27-.14.21.07.27.34.41.75.07.14.07.2.14.27.14.48.21.82,0,1.02ZM43.84,60.09l-.07.07c-.07.14-.21.27-.27.27s-.14-.14-.21-.27c-.07-.27-.21-.48-.27-.68-.27-.54-.48-.88-.07-1.36.07-.07.14-.14.27-.14.27.07.41.48.55.88,0,.07.07.14.07.2.21.48.21.82,0,1.02ZM44.39,58.39l-.07.07c-.07.14-.21.27-.27.27s-.14-.14-.21-.27c-.07-.27-.21-.54-.34-.75-.27-.54-.48-.95-.14-1.43.07-.07.14-.14.27-.14.27.07.55.68.75,1.09l.07.07c.07.48.07.82-.07,1.09ZM44.73,56.22c0,.07-.07.07-.07.14-.07.14-.14.34-.27.34-.07,0-.14-.07-.27-.2-.14-.27-.27-.41-.41-.61-.34-.41-.62-.82-.27-1.56q.07-.07.14-.14c.27,0,.75.68.89.95.21.48.41.82.27,1.09ZM44.87,54.52s0,.07-.07.07c-.07.14-.14.27-.27.34-.07,0-.21-.07-.27-.27-.14-.27-.34-.48-.48-.68-.34-.41-.62-.75-.41-1.29.07-.07.07-.14.21-.14.21,0,.48.27.89.82.27.41.55.82.41,1.16Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M75.58,30.73h4.17v9.04l7.45-9.04h5.13l-8.55,9.92,8.82,11.15h-5.4l-7.45-9.79h-.07v9.79h-4.17v-21.07h.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M108.68,43.44l-7.52-12.71h4.86l4.86,8.84,4.99-8.84h4.38l-7.39,12.71v8.29h-4.17v-8.29Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M140.82,34.6c-1.3-.61-2.74-.95-4.24-.95s-3.28.61-3.28,2.92c0,3.67,9.1,2.11,9.1,9.18,0,4.62-3.62,6.39-7.8,6.39-2.26,0-3.28-.27-5.27-.82l.34-3.81c1.44.75,3.01,1.29,4.65,1.29s3.69-.82,3.69-2.72c0-4.01-9.1-2.38-9.1-9.38,0-4.69,3.62-6.46,7.25-6.46,1.78,0,3.42.27,4.99.75l-.34,3.6Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M158.95,34.06h-5.95v-3.33h16v3.33h-5.95v17.74h-4.17v-17.74h.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M178.58,30.73h4.45l5.27,16.59h.07l5.27-16.59h4.1l-6.98,21.07h-5.13l-7.04-21.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M209.01,30.73h12.24v3.33h-8.07v5.17h7.39v3.33h-7.39v5.91h8.14v3.33h-12.24v-21.07h-.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M234.52,30.73h4.51c4.45,0,9.71-.14,9.71,5.71,0,2.45-1.64,4.55-4.24,4.89v.07c1.09.07,1.78,1.22,2.19,2.18l3.35,8.23h-4.65l-2.46-6.59c-.62-1.56-1.1-2.18-2.87-2.18h-1.37v8.77h-4.17v-21.07ZM238.69,39.7h1.37c2.05,0,4.38-.27,4.38-2.92s-2.32-2.79-4.38-2.79h-1.37v5.71Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M262.36,30.73h4.17v9.04l7.45-9.04h5.13l-8.55,9.92,8.82,11.15h-5.4l-7.45-9.79h-.07v9.79h-4.17l.07-21.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M290.74,30.73h12.24v3.33h-8.07v5.17h7.39v3.33h-7.39v5.91h8.07v3.33h-12.24v-21.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M319.95,34.06h-5.95v-3.33h16v3.33h-5.95v17.74h-4.17v-17.74h.07Z'%20style='fill:%20%2300066d;'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3cpath%20d='M357.27,30.74h2.16l5.52,12.38c.48,1.08,1.02,2.58,1.02,2.58h.06s.57-1.5,1.05-2.58l5.52-12.38h2.13l1.68,21.08h-2.07l-1.17-14.75c-.09-1.14-.06-2.94-.06-2.94h-.06s-.63,1.86-1.11,2.94l-4.95,10.82h-1.95l-4.95-10.82c-.48-1.05-1.14-3-1.14-3h-.06s.03,1.86-.06,3l-1.17,14.75h-2.07l1.68-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M395.55,45.1h-8.48l-2.4,6.72h-2.19l7.73-21.08h2.22l7.73,21.08h-2.19l-2.43-6.72ZM391.29,32.92s-.45,1.74-.81,2.73l-2.82,7.64h7.26l-2.76-7.64c-.36-.99-.81-2.73-.81-2.73h-.06Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M406.91,30.74h6.24c2.16,0,3.12.21,3.96.57,1.98.87,3.18,2.88,3.18,5.43,0,2.85-1.62,5.04-3.99,5.7v.06s.21.27.54.84l4.59,8.48h-2.37l-4.77-8.87h-5.31v8.87h-2.07v-21.08ZM413.99,41.08c2.55,0,4.17-1.65,4.17-4.29,0-1.74-.69-3.03-1.92-3.69-.63-.33-1.38-.51-3-.51h-4.26v8.48h5.01Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M429.04,30.74h2.07v21.08h-2.07v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M445.26,32.6h-7.59v-1.86h17.21v1.86h-7.55v19.22h-2.07v-19.22Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M461.45,30.74h2.07v21.08h-2.07v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M473.95,30.74h2.16l5.52,12.38c.48,1.08,1.02,2.58,1.02,2.58h.06s.57-1.5,1.05-2.58l5.52-12.38h2.13l1.68,21.08h-2.07l-1.17-14.75c-.09-1.14-.06-2.94-.06-2.94h-.06s-.63,1.86-1.11,2.94l-4.95,10.82h-1.95l-4.95-10.82c-.48-1.05-1.14-3-1.14-3h-.06s.03,1.86-.06,3l-1.17,14.75h-2.07l1.68-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M512.86,47.89s2.19,2.31,5.52,2.31c2.31,0,4.2-1.38,4.2-3.66,0-5.31-10.52-3.96-10.52-10.49,0-3.03,2.67-5.67,6.57-5.67,3.66,0,5.64,2.04,5.64,2.04l-1.02,1.74s-1.86-1.8-4.62-1.8-4.44,1.77-4.44,3.63c0,5.01,10.52,3.57,10.52,10.49,0,3.15-2.43,5.7-6.39,5.7-4.32,0-6.69-2.7-6.69-2.7l1.23-1.59Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M532.62,30.74h2.07v21.08h-2.07v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M544.1,30.74h2.07v9.14h3.57l5.67-9.14h2.37l-6.3,9.95v.06l6.72,11.06h-2.43l-6.03-10.07h-3.57v10.07h-2.07v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M565.42,30.74h6.24c2.16,0,3.12.21,3.96.57,1.98.87,3.18,2.88,3.18,5.43,0,2.85-1.62,5.04-3.99,5.7v.06s.21.27.54.84l4.59,8.48h-2.37l-4.77-8.87h-5.31v8.87h-2.07v-21.08ZM572.49,41.08c2.55,0,4.17-1.65,4.17-4.29,0-1.74-.69-3.03-1.92-3.69-.63-.33-1.38-.51-3-.51h-4.26v8.48h5.01Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M587.54,30.74h2.07v21.08h-2.07v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M599.03,30.74h2.01l10.76,15.17c.72,1.05,1.74,2.85,1.74,2.85h.06s-.18-1.74-.18-2.85v-15.17h2.07v21.08h-2.01l-10.76-15.17c-.72-1.05-1.74-2.85-1.74-2.85h-.06s.18,1.74.18,2.85v15.17h-2.07v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M634.1,30.38c4.89,0,7.49,2.46,7.49,2.46l-1.11,1.56s-2.46-2.1-6.3-2.1c-5.1,0-8.54,3.93-8.54,8.93s3.57,9.02,8.36,9.02c4.11,0,6.63-3.09,6.63-3.09v-3.57h-3.6v-1.86h5.58v10.07h-1.92v-1.59c0-.45.03-.9.03-.9h-.06s-2.43,2.85-6.87,2.85c-5.76,0-10.31-4.65-10.31-10.91s4.56-10.88,10.61-10.88Z'%20style='fill:%20%2300066d;'/%3e%3c/g%3e%3c/svg%3e", F6 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20654.37%2083'%3e%3cdefs%3e%3cclipPath%20id='clippath'%3e%3crect%20width='330'%20height='83'%20style='fill:%20none;'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%3e%3cpath%20d='M356.82,47.89s2.19,2.31,5.52,2.31c2.31,0,4.2-1.38,4.2-3.66,0-5.31-10.52-3.96-10.52-10.49,0-3.03,2.67-5.67,6.57-5.67,3.66,0,5.64,2.04,5.64,2.04l-1.02,1.74s-1.86-1.8-4.62-1.8-4.44,1.77-4.44,3.63c0,5.01,10.52,3.57,10.52,10.49,0,3.15-2.43,5.7-6.39,5.7-4.32,0-6.69-2.7-6.69-2.7l1.23-1.59Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M386.98,45.1h-8.48l-2.4,6.72h-2.19l7.73-21.08h2.22l7.73,21.08h-2.19l-2.43-6.72ZM382.72,32.92s-.45,1.74-.81,2.73l-2.82,7.64h7.26l-2.76-7.64c-.36-.99-.81-2.73-.81-2.73h-.06Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M398.34,30.74h2.07v9.14h3.57l5.67-9.14h2.37l-6.3,9.95v.06l6.72,11.06h-2.43l-6.03-10.07h-3.57v10.07h-2.07v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M419.33,47.89s2.19,2.31,5.52,2.31c2.31,0,4.2-1.38,4.2-3.66,0-5.31-10.52-3.96-10.52-10.49,0-3.03,2.67-5.67,6.57-5.67,3.66,0,5.64,2.04,5.64,2.04l-1.02,1.74s-1.86-1.8-4.62-1.8-4.44,1.77-4.44,3.63c0,5.01,10.52,3.57,10.52,10.49,0,3.15-2.43,5.7-6.39,5.7-4.32,0-6.69-2.7-6.69-2.7l1.23-1.59Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M439.08,30.74h7.19c3.33,0,5.7,2.01,5.7,5.31,0,2.19-1.05,3.78-2.67,4.59v.06c2.16.6,3.54,2.67,3.54,5.22,0,3.75-2.79,5.91-6.33,5.91h-7.43v-21.08ZM446.28,39.88c2.13,0,3.57-1.5,3.57-3.69s-1.35-3.6-3.6-3.6h-5.1v7.29h5.13ZM446.55,49.95c2.55,0,4.14-1.59,4.14-4.11s-1.71-4.17-4.17-4.17h-5.37v8.27h5.4Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M461.15,30.74h11.87v1.86h-9.8v7.67h8v1.86h-8v7.82h10.34v1.86h-12.41v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M481.56,30.74h2.07v9.59h12.23v-9.59h2.07v21.08h-2.07v-9.62h-12.23v9.62h-2.07v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M517.75,45.1h-8.48l-2.4,6.72h-2.19l7.73-21.08h2.22l7.73,21.08h-2.19l-2.43-6.72ZM513.49,32.92s-.45,1.74-.81,2.73l-2.82,7.64h7.25l-2.76-7.64c-.36-.99-.81-2.73-.81-2.73h-.06Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M529.11,30.74h2.01l10.76,15.17c.72,1.05,1.74,2.85,1.74,2.85h.06s-.18-1.74-.18-2.85v-15.17h2.07v21.08h-2.01l-10.76-15.17c-.72-1.05-1.74-2.85-1.74-2.85h-.06s.18,1.74.18,2.85v15.17h-2.07v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M554.99,30.74h6.81c6.33,0,10.58,3.87,10.58,10.52s-4.26,10.55-10.58,10.55h-6.81v-21.08ZM561.58,49.95c5.19,0,8.63-3.06,8.63-8.69s-3.48-8.66-8.63-8.66h-4.53v17.36h4.53Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M580.47,30.74h2.07v19.22h9.77v1.86h-11.84v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M599.3,30.74h2.07v21.08h-2.07v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M610.78,30.74h2.01l10.76,15.17c.72,1.05,1.74,2.85,1.74,2.85h.06s-.18-1.74-.18-2.85v-15.17h2.07v21.08h-2.01l-10.76-15.17c-.72-1.05-1.74-2.85-1.74-2.85h-.06s.18,1.74.18,2.85v15.17h-2.07v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M645.86,30.38c4.89,0,7.49,2.46,7.49,2.46l-1.11,1.56s-2.46-2.1-6.3-2.1c-5.1,0-8.54,3.93-8.54,8.93s3.57,9.02,8.36,9.02c4.11,0,6.63-3.09,6.63-3.09v-3.57h-3.6v-1.86h5.58v10.07h-1.92v-1.59c0-.45.03-.9.03-.9h-.06s-2.43,2.85-6.87,2.85c-5.76,0-10.31-4.65-10.31-10.91s4.56-10.88,10.61-10.88Z'%20style='fill:%20%2300066d;'/%3e%3c/g%3e%3cg%20style='clip-path:%20url(%23clippath);'%3e%3cg%3e%3cpath%20d='M0,53.84c0,17.88,15.66,25.9,24.96,29.09l.14.07.14-.07c4.58-1.63,11.22-4.69,16.41-9.72,5.61-5.44,8.48-11.9,8.48-19.37V8.36l-.21-.07C41.79,2.79,33.38,0,25.03,0S8.34,2.79.14,8.29l-.14.07v45.48ZM.48,8.84C8.62,3.4,16.82.68,25.03.68s16.48,2.72,24.55,8.16l-.14-.27v45.27c0,7.27-2.8,13.6-8.28,18.9-5.13,4.96-11.7,7.95-16.21,9.58h.21c-9.16-3.06-24.48-10.94-24.48-28.41V8.57l-.21.27Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M14.64,19.1c-2.87,1.09-4.79,2.38-5.2,2.79-.89.82-.55,1.63-.55,1.63h.07s-.07-.61.75-1.36c.34-.34,2.19-1.56,5.13-2.72l-.21-.34Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M25.78,17.06h-1.3c-2.53.14-5.95.75-8.96,1.77l.14.34c2.94-1.02,6.36-1.56,8.89-1.7h1.23c2.53.14,5.88.75,8.89,1.7l.14-.34c-3.08-1.02-6.5-1.63-9.03-1.77Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M35.63,19.1c2.87,1.09,4.79,2.38,5.2,2.79.89.82.55,1.63.55,1.63h-.07s.07-.61-.75-1.36c-.34-.34-2.19-1.56-5.13-2.72l.21-.34Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M44.11,20.26c-1.44-1.9-4.58-2.58-7.66-2.79-.14-3.13-5.81-3.33-10.12-2.52-.41-.61-1.92-.54-2.33,0-4.38-.82-9.99-.61-10.12,2.52-3.15.2-6.29.88-7.73,2.79-1.37,1.9,1.37,3.87,1.37,3.87l.62-.54s-4.58-3.74,5.75-5.57c.48,1.36,1.44,2.04,1.44,2.04l.55-.34s-3.15-5.85,8.07-4.01l.68,2.38s0-.14.21-.14c0,0-.27-2.24-.21-2.45.14-.34.89-.34,1.03,0,.07.2-.21,2.45-.21,2.45.27,0,.21.14.21.14l.68-2.38c11.22-1.84,8.07,4.01,8.07,4.01l.55.34s.96-.68,1.44-2.04c10.4,1.84,5.75,5.57,5.75,5.57l.62.54s2.8-1.97,1.37-3.87ZM7.73,23.52q.07.07.14.14s-.14-.07-.27.07c-.21-.14-.41-.34-.62-.54-1.23-1.43-2.12-4.55,6.77-5.3-9.58,1.63-6.63,5.03-6.02,5.64ZM15.59,19.65c0,.14-.27,0-.27.07-.68-.75-1.03-1.56-1.03-2.31-.07-1.84,2.12-3.4,8-2.38.14,0,.21,0,.34.07h-.14c.34.07.75.14,1.16.2-10.53-1.16-8.48,3.33-8.07,4.35ZM35.02,19.78s0-.07,0,0c-.07-.07-.07,0-.07,0,.07-.2-.27.07-.27-.14v-.14c.48-1.02,2.53-5.44-8-4.21.34-.07.68-.14,1.03-.2h.07c4.86-.95,7.32,0,8,1.43.21.34.27.75.21,1.16-.07.75-.41,1.5-.96,2.11ZM42.81,23.72s0-.07,0,0h-.07c-.07-.07-.14-.07-.14-.07h-.21s.07-.07.14-.14c.07,0,0,0,0,0,.27-.27.82-.88.96-1.63.21-1.29-.89-2.99-6.84-4.08,10.53.88,7.39,5.1,6.16,5.91Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M43.82,24.5s-.34-.34-.96-.61c-3.15-1.43-2.39,1.77-2.39,2.04-.27-.82-2.19-2.04-2.67.2-.48,2.38,1.44,1.77,1.78,1.77-.48.68-1.44.68-3.56-.2-2.39-.95-2.8-1.63-2.26-2.79.21,1.43,1.98,1.77,2.53.34,1.3-3.19-1.44-2.31-1.78-2.18.41-.75,1.16-1.09,1.16-1.97.07-1.36-1.92-1.7-2.53-1.22-1.03.82-.41,2.65-.41,2.86-.27-.27-2.12-2.79-2.74.61-.27,1.5,1.37,2.18,2.39,1.02-.21,1.22-1.23,1.63-3.69,1.22-3.69-.54-2.94-2.31-2.94-2.31.07.07,1.44,2.31,2.6-.27,1.23-2.85-1.98-1.97-2.46-1.36.27-1.29,1.5-2.04.82-2.86-.89-1.09-2.6-1.02-3.35,0-.68.88.48,1.56.82,2.86-.48-.61-3.76-1.5-2.46,1.36,1.16,2.58,2.53.34,2.6.27,0,0,.75,1.77-2.94,2.31-2.46.41-3.49,0-3.69-1.22,1.03,1.16,2.67.48,2.39-1.02-.62-3.4-2.46-.88-2.74-.61,0-.2.68-2.04-.41-2.86-.68-.48-2.67-.14-2.53,1.22.07.88.89,1.29,1.16,1.97-.34-.14-3.08-1.09-1.78,2.11.55,1.43,2.33,1.09,2.53-.34.55,1.22.14,1.84-2.26,2.79-2.12.82-3.08.88-3.56.2.27-.07,2.19.68,1.78-1.77-.41-2.24-2.46-1.02-2.67-.2,0-.27.75-3.47-2.39-2.04-.62.27-.96.61-.96.61l-.14.14-.14.14,5.47,7.55s4.65-3.87,13.41-3.87,13.41,3.87,13.41,3.87l5.47-7.55.07-.14v-.07ZM43,25.11c-.62.82-4.51,6.12-4.58,6.19l-.14.2-.21-.14c-1.85-1.02-6.77-3.47-13.13-3.47s-11.29,2.38-13.13,3.47l-.14.14-.21-.2c-.07-.07-3.97-5.37-4.58-6.19l-.07-.07v-.14c0-.07.07-.34.41-.61.75-.48,1.44-.34,1.64-.27.41.27.34,2.04.34,2.24.34-.48.89-1.16,1.5-1.09.41,0,.68.27.89.82.34.88.07,1.36-.21,1.56-.41.27-1.03.2-1.5,0,.07.2.21.54.41.68.62.48,1.85.34,3.28-.14,1.71-.54,2.8-1.36,2.94-2.24.14-.54-.07-1.09-.41-1.43-.21.48-.62,1.29-1.16,1.36-.34,0-.68-.2-.96-.75-.41-.75-.48-1.29-.14-1.63.41-.48,1.85-.2,1.98-.14.21.07-.07-.27-.21-.34-.48-.54-.89-.95-.89-1.43s.21-.82.55-1.02c.48-.27,1.16-.2,1.44.07.27.27.34.82.14,2.11,0,.14-.21.75.07.41.27-.27,1.37-1.29,1.98-1.02.41.14.62.61.62,1.36,0,.54-.14.88-.48,1.09-.48.27-1.37-.2-1.78-.48-.07.34,0,.82.27,1.16.48.61,1.71.95,3.35.82,1.71-.2,2.67-.75,3.15-1.43.27-.41.55-1.22.34-1.9-.27.34-1.16,1.09-1.57,1.09s-.68-.34-.96-.88c-.21-.54-.21-1.16.07-1.43.41-.41,1.71.2,2.39.48-.07-.27-.14-.54-.27-.88-.07-.27-.21-.54-.27-.68-.14-.27-.48-.68-.27-1.09.27-.48.75-.75,1.3-.75.62,0,1.09.27,1.3.75.21.41-.07.75-.27,1.09-.07.2-.21.34-.27.68-.14.34-.21.61-.27.88.62-.27,1.92-.88,2.39-.48.27.27.27.82.07,1.43-.27.61-.55.88-.96.88s-1.37-.75-1.57-1.09c-.14,1.02.21,1.63.34,1.9.48.68,1.44,1.29,3.15,1.43,1.64.14,2.87-.2,3.35-.82.27-.34.34-1.02.34-1.36-.41.27-1.3.88-1.85.61-.34-.14-.48-.54-.48-1.09,0-.82.21-1.22.62-1.36.62-.27,1.92,1.09,1.98.88.07-.14,0-.34,0-.48-.07-.82-.14-1.77.27-1.97.34-.27.96-.27,1.37-.07.34.2.55.54.55,1.02s-.21.75-.68,1.36c-.07.14-.62.54-.34.48.27-.07,1.57-.27,1.92.2.27.34.27.88-.14,1.63-.27.54-.62.75-.96.75-.55-.07-.89-.95-1.16-1.36-.21.27-.62.95-.48,1.5.21.82,1.37,1.7,3.01,2.24,1.44.48,2.6.61,3.21.14.27-.2.41-.54.48-.75-.48.2-1.09.27-1.57.07-.27-.14-.55-.54-.27-1.63.14-.54.55-.82.89-.82.55-.07,1.09.48,1.44.95,0-.2.07-.34.07-.54-.07-.75.14-1.36.55-1.56.21-.14.68-.27,1.44.2.41.27.41.61.41.61v.14l.34.14Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M25.17,8.29c-1.64,0-3.01,1.36-3.01,2.99,0,1.36.89,2.45,2.12,2.86l.14.54c.14-.07.21-.07.34-.07,0-.14,0-.27-.07-.34h.68c0,.14,0,.27-.07.34.14,0,.27.07.34.07l.14-.54c1.23-.34,2.12-1.5,2.12-2.86.27-1.63-1.09-2.99-2.74-2.99ZM24.96,8.84h.41v2.72h-.41v-2.72ZM22.64,11.28c0-1.29.96-2.31,2.19-2.45v2.72h-2.19v-.27ZM25.17,13.73c-1.09,0-1.98-.68-2.33-1.56h4.65c-.34.88-1.3,1.56-2.33,1.56ZM27.56,11.83c-.07.14-.07.2-.07.2h-4.72s0-.07-.07-.2c0-.14-.07-.2-.07-.2h4.92c.07,0,.07.07,0,.2ZM25.51,11.49v-2.65c1.23.14,2.19,1.22,2.19,2.45v.27l-2.19-.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M25.85,5.03v-1.77h-1.44v1.77h-1.98v1.43h1.98v2.11h.14s.41-.07.62-.07.55.07.55.07h.14v-2.11h1.98v-1.43h-1.98Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M14.91,45.2l8.21.68.41-1.09-.14.48-8.48-.41s-.48,0-.48-.54.48-.61.48-.61l8.89-.27.55-6.59c0-.27.27-.48.82-.48.48,0,.75.2.75.48l.55,6.59,8.96.27s.48,0,.48.61c0,.54-.48.54-.48.54l-8.41.41.21.68,8.21-.68c.07,0,1.03-.07,1.03-.88,0-.95-.68-1.02-1.09-1.09l-8.21-.48c-.07-.82-.34-4.08-.41-5.51-.07-1.36-.89-1.63-1.23-1.7h-.55c-.34.07-1.16.34-1.23,1.7-.07,1.36-.34,4.62-.41,5.51l-8.21.48c-.41,0-1.09.14-1.09,1.09-.14.75.75.82.89.82ZM35.63,59.28l1.3.61s-.89,1.63-4.1,4.35l.27.41h.07c2.74-1.97,4.24-4.89,4.24-4.89l-1.16-.48,2.39-.88c-.41,1.29-1.44,4.42-4.92,6.93-.07.07-.14.14-.27.2l-.07-.27c-.07.07-.21.14-.27.2l.27.2c-2.46,1.56-5.47,2.31-8.14,2.31s-5.81-.82-8.28-2.45l.14-.27c-.07-.07-.21-.14-.27-.2l-.07.27c-.07,0-.07-.07-.14-.07-3.49-2.58-4.58-5.64-4.99-6.93l2.39.88-1.16.41s1.3,2.85,4.1,4.83l.21-.41c-3.21-2.72-3.9-4.21-3.9-4.21l1.3-.61-3.35-1.43s.68,4.69,5.13,7.95c2.67,1.97,5.75,3.13,8.69,3.13s6.09-1.16,8.69-3.13c4.58-3.19,5.27-7.89,5.27-7.89l-3.35,1.43ZM27.08,66.55c.89,0,3.42-.48,4.92-1.29l.48-.27.14-.07-.21-.41-.62.34c-1.44.75-3.9,1.09-4.58,1.09-.62,0-.82-.14-.82-.82v-4.83l-.75-.48v.07l.27.14v5.51c.07.88.68,1.02,1.16,1.02ZM23.12,65.94c-.62,0-3.08-.27-4.58-1.09l-.62-.34-.21.41.62.34c1.5.82,3.97,1.29,4.92,1.29.48,0,1.09-.07,1.09-1.02v-5.51l.27-.14v-.07l-.75.48v4.83c0,.61-.14.82-.75.82Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M38.78,49.69h-10.12l-3.28-9.24-.21-.68-.21.68-3.42,9.24h-10.12l.62.41,7.87,5.64-3.35,9.92,8.55-6.12,8.41,6.19-3.28-9.99,7.93-5.64.62-.41ZM29.48,55.47l-.14-.07v.07l.14.07v-.07l3.15,8.9-1.03-1.43.21.54.68.95-7.25-5.64v-.27l-.07-.07-.14.07v.27l-7.45,5.64.89-1.22-.41.27.07-.27-.75.95,3.15-8.77-7.73-5.3,1.09.34-.21-.07h.34l-1.16-.34,9.03.2.14.14h.07l-.14-.07,3.08-9.38v1.56l.07-.27.14.34v-1.7l2.94,9.24-.21.27h.21l.14-.14,8.89-.2-1.09.34h.27l-.27.2,1.3-.41-7.93,5.3Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M12.58,50.1l12.52,4.15-.07-.07,7.66,10.67.14-.14-7.59-10.67h-.07l-12.52-4.08-.07.14Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M17.37,64.71l7.87-10.54-.07.07,12.72-4.28-.07-.14-12.72,4.21h-.07l-7.8,10.6.14.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M25.03,40.79v18.08h.2v-18.08h-.2Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M19.97,55.81l5.2-1.56h-.07l5.06,1.56.07-.2-5.06-1.56h-.07l-5.2,1.56.07.2Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M21.48,49.69l3.56,4.49.14.07.07-.07,3.49-4.49-.14-.07-3.56,4.42h.21l-3.62-4.42-.14.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M13.95,66.69c-.27,0-.62.07-.89.14.07.07.14.14.21.2.21-.07.48-.14.68-.14,1.37,0,2.39,1.09,2.39,2.38v.14c.07,0,.14.07.21.14v-.27c.07-1.43-1.16-2.58-2.6-2.58ZM15.59,71.99c-.48.27-1.09.48-1.64.48-1.78,0-3.15-1.43-3.15-3.13,0-.27.07-.61.14-.88-.07,0-.14-.07-.14-.14-.07-.07-.14-.14-.14-.2-.14.34-.21.82-.21,1.22,0,1.97,1.64,3.53,3.56,3.53.75,0,1.44-.2,1.98-.61h-.07c-.14-.07-.27-.14-.34-.27ZM9.51,45.88c-.07.14-.14.27-.21.27.62.61.89,1.36.89,2.24,0,1.7-1.3,3.06-3.01,3.13-.07.2-.14.34-.14.48,1.98,0,3.56-1.63,3.56-3.53,0-1.02-.41-1.9-1.09-2.58ZM7.25,44.93h-.21c-1.98,0-3.56,1.56-3.56,3.53,0,1.29.68,2.38,1.64,2.99-.07-.2-.07-.41,0-.54-.75-.61-1.23-1.5-1.23-2.45,0-1.77,1.44-3.13,3.15-3.13,0-.07.07-.14.07-.2s.07-.14.14-.2ZM13.95,65.8c-.68,0-1.3.2-1.78.48.14.14.21.2.27.27.48-.27.96-.41,1.5-.41,1.78,0,3.15,1.43,3.15,3.13,0,.27,0,.54-.07.75v.07c.07,0,.21.07.41.14.07-.27.14-.61.14-.88,0-1.97-1.64-3.53-3.62-3.53ZM22.3,36.78h-.41c.34.82.96,1.43,1.78,1.84v-.48c-.62-.34-1.09-.82-1.37-1.36ZM5.06,46.7c-.41.48-.68,1.09-.68,1.77,0,.61.21,1.16.62,1.63,0-.07,0-.14.07-.2v-.07c-.27-.41-.41-.88-.41-1.36,0-1.09.75-2.04,1.85-2.31.07-.14.21-.27.34-.34-.68.07-1.3.41-1.78.88ZM36.32,71.78c-.27,0-.55-.07-.82-.14q-.07.07-.14.14c.27.14.62.2.96.2,1.44,0,2.67-1.16,2.67-2.65,0-.27-.07-.48-.14-.75h-.07s0,.2-.07.41v.34c0,1.36-1.09,2.45-2.39,2.45ZM42.88,51.05q.07,0,0,0c.07-.07,0-.14-.07-.2-1.16-.2-1.98-1.16-1.98-2.38,0-.54.21-1.02.48-1.36-.07-.07-.07-.14-.14-.27-.34.48-.55,1.02-.55,1.56-.07,1.36.96,2.52,2.26,2.65ZM7.18,51.05c1.44-.07,2.53-1.22,2.53-2.65,0-.54-.21-1.09-.48-1.5-.07.07-.07.14-.14.2.27.41.41.82.41,1.36,0,1.29-.96,2.31-2.26,2.38-.07.14-.07.2-.07.2ZM13.95,71.92c.27,0,.55-.07.82-.14-.07-.07-.14-.07-.14-.14-.21.07-.41.07-.62.07-1.37,0-2.39-1.09-2.39-2.38v-.07c-.14-.14-.14-.27-.21-.41,0,.14-.07.27-.07.41,0,1.5,1.16,2.65,2.6,2.65ZM23.05,36.64c-.14,0-.21-.07-.27-.07.21.34.48.68.89.95v-.2c-.27-.2-.41-.41-.62-.68ZM42.81,51.59c-1.57-.2-2.8-1.5-2.8-3.13,0-.88.34-1.7.96-2.31-.07-.07-.14-.2-.21-.34-.75.68-1.16,1.56-1.16,2.65,0,1.9,1.5,3.47,3.35,3.53,0-.07-.07-.2-.14-.41ZM45.62,48.47c0,.61-.21,1.16-.55,1.56v.27c.48-.48.82-1.16.82-1.9,0-1.29-.96-2.38-2.26-2.58.14.07.27.2.34.34.96.34,1.64,1.29,1.64,2.31ZM39.33,68.32c.14.34.14.68.14.95,0,1.77-1.44,3.13-3.15,3.13-.62,0-1.3-.2-1.78-.54-.07.07-.21.2-.41.27.62.48,1.37.75,2.19.75,1.98,0,3.56-1.56,3.56-3.53,0-.48-.14-.95-.27-1.43-.07.2-.14.34-.27.41ZM44.8,50.64q.07,0,0,0h0ZM43.22,44.93h-.07c.07.07.07.14.14.2,0,.07.07.14.07.2.82,0,1.57.34,2.19.95.62.61.89,1.36.89,2.18,0,1.02-.48,1.97-1.37,2.58,0,.14,0,.34-.14.61,1.16-.61,1.92-1.77,1.92-3.13-.07-1.97-1.64-3.6-3.62-3.6ZM27.22,34.26c.14,0,.21,0,.27.07-.41-.95-1.37-1.56-2.39-1.56-1.09,0-2.05.68-2.46,1.63.07-.07.21-.14.34-.14.41-.75,1.23-1.22,2.12-1.22.96-.07,1.71.48,2.12,1.22ZM27.49,36.64c-.07,0-.21.07-.34.07-.14.2-.34.41-.55.61v.27c.41-.27.68-.61.89-.95ZM28.04,36.78c-.27.54-.75,1.02-1.3,1.36v.48c.75-.34,1.37-1.02,1.71-1.77h-.27c-.07-.07-.14-.07-.14-.07ZM25.1,31.81c-1.78,0-3.28,1.29-3.56,2.99.14-.14.27-.2.41-.2v-.07c.34-1.36,1.64-2.38,3.08-2.38s2.74,1.02,3.08,2.38c.14,0,.27.07.48.14-.27-1.56-1.71-2.86-3.49-2.86ZM33.1,69.34c0-1.77,1.44-3.13,3.15-3.13.48,0,.96.14,1.37.27h.07c.07-.07.14-.2.27-.27-.48-.27-1.09-.41-1.71-.41-1.98,0-3.56,1.56-3.56,3.53,0,.34.07.68.14,1.02.07-.07.21-.14.27-.2.07,0,.07-.07.14-.07v-.07c-.14-.2-.14-.41-.14-.68ZM36.32,66.96c.21,0,.34,0,.55.07.07-.07.14-.14.27-.2-.27-.07-.48-.14-.75-.14-1.44,0-2.67,1.16-2.67,2.65,0,.2,0,.41.07.68.07-.07.14-.14.21-.2,0-.14-.07-.27-.07-.41-.07-1.36,1.03-2.45,2.39-2.45Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M37.89,41.47s.07.34.41.68c.27.34.82.54.82.54,0,0,.07.34.27.75.21.41.75.61.75.61,0,0,.07.48.21.68.14.27.55.54.55.54,0,0-.14.2-.07.48.14.34.27.48.27.48-.21.82.48,1.09.48,1.09.48.27,1.23-.2,1.23-.2,0,0,.68.07,1.09-.48.48-.61-.55-.95-.55-.95,0,0,.14-.2-.07-.61-.21-.41-.68-.54-.68-.54,0,0,0-.34-.14-.82-.14-.48-.82-.82-.82-.82,0,0,.07-.27-.14-.68-.27-.54-.96-.88-.96-.88,0,0-.14-.27-.34-.68-.55-.54-1.16-.54-1.16-.54,0,0-.14-.61-.34-.82-.34-.34-1.03-.48-1.03-.48,0,0-.07-.27-.48-.68-.34-.34-1.16-.41-1.16-.41,0,0-.07-.34-.48-.68-.48-.34-1.16-.27-1.16-.27,0,0,0-.2-.62-.61-.62-.41-1.16-.27-1.16-.27,0,0-.21-.27-.62-.48-.48-.27-1.16-.14-1.16-.14,0,0-.21-.27-.82-.48-.62-.2-1.16.07-1.16.07-.55-.48-1.03-.2-1.03-.2,0,0-.07-.48-.62-.41-1.09.2-.75,1.09-.75,1.09,0,0-.21.14-.27.61-.07.48.27.75.62.82.27.07.82-.14.82-.14,0,0,.21.2.48.2h.62s.21.2.68.34c.48.14,1.03,0,1.03,0,0,0,0,.2.48.41.48.2.96.07.96.07,0,0,.27.41.75.68.41.2.96.14.96.14,0,0,.27.34.68.61.34.27.96.34.96.34,0,0,.21.41.48.68.27.2.96.34.96.34,0,0,.27.48.48.68.14.07.75.34.75.34ZM42.2,47.24c-.07.07-.41,0-.55-.07-.14-.07-.21-.2-.21-.27s0-.07.07-.14h.14c.07.07.14.07.27.14.07,0,.14.07.21.07.07.07.14.07.14.14s0,.07-.07.14ZM43.09,46.16c.14.07.34.2.34.41,0,.14-.07.27-.48.41-.68.14-1.3-.34-1.5-.68-.14-.2-.14-.27-.07-.34s.27-.07.48.07c.41.2.68.2.89.14.07-.07.21-.07.34,0ZM42.61,45.14c.07.34.07.54-.07.61-.07.07-.21.07-.48-.07h-.07c-.82-.2-1.16-.34-1.37-1.16,0-.07,0-.2.07-.2.07-.07.27,0,.48.07.14.07.27.07.41.14.68.14,1.03.41,1.03.61ZM41.79,43.71c.14.34.14.54.07.61-.07.07-.21.07-.48,0h-.14c-.96-.27-1.3-.34-1.64-1.16,0-.07-.07-.14,0-.2.07-.07.27,0,.62.07.14.07.27.07.41.14.75.07,1.09.27,1.16.54ZM40.76,42.08c.14.34.14.48.07.61-.07.07-.21.07-.48.07h-.14c-.96-.07-1.37-.14-1.71-.88-.07-.07-.07-.14,0-.2.07-.14.34-.07.62,0,.14,0,.27.07.41.07.75,0,1.09.14,1.23.34ZM39.53,40.85c.14.2.21.34.14.41-.07.14-.21.14-.41.14-1.03,0-1.57-.2-1.92-.68-.07-.14-.07-.2-.07-.27.07-.14.34-.14.68-.14h.48c.48.07.89.27,1.09.54ZM26.74,34.87c0-.14.07-.2.21-.27h.27l.07.07s-.27.14-.34.27l-.07.07c-.14.07-.14,0-.14-.14ZM27.36,36.23c0,.07,0,.14-.07.2-.14.07-.41.07-.55-.07-.14-.14-.21-.27-.14-.48,0-.14.14-.34.41-.54.55-.34.96-.27.96-.27.07,0,.07.07.07.14s-.07.14-.21.27c-.34.14-.55.61-.48.75ZM27.97,36.37c-.14-.07-.21-.2-.21-.27,0-.27.41-.54.75-.68.48-.27.82-.27,1.09-.14,0,0,.07,0,.07.07.14.07.27.14.27.27,0,.07-.07.2-.27.27-.27.14-.55.34-.68.48-.34.14-.55.27-1.03,0ZM29.41,36.64c-.07-.07-.14-.14-.07-.2.07-.2.41-.41,1.03-.61.41-.14.89-.27,1.16-.07l.07.07c.14.07.27.2.27.34,0,.07-.14.14-.27.2-.27.07-.55.2-.75.27-.62.2-1.03.41-1.44,0ZM30.91,37.12c-.07-.07-.07-.14-.07-.14.07-.27.89-.48,1.16-.54.48-.14.89-.2,1.09.07,0,0,.07.07.14.14.14.14.27.2.27.34,0,.07-.14.14-.27.2-.27.07-.48.14-.68.27-.55,0-.96.2-1.64-.34ZM34.13,38.07c-.55.14-1.09.2-1.37-.34-.07-.07-.07-.2,0-.27.14-.27.68-.27,1.3-.34h.07c.55-.07.82.07,1.03.27l.07.07c.14.14.21.27.14.34-.07.07-.14.14-.34.14-.34.07-.62.07-.89.14ZM34.4,38.68c-.07-.14-.07-.2-.07-.27.14-.2.62-.27,1.03-.27h.21c.55-.07.82.07,1.03.27l.07.07c.14.14.21.27.14.34-.07.07-.14.14-.34.14-.27,0-.55.07-.75.07-.48.14-.96.2-1.3-.34ZM35.91,39.7c-.07-.14-.07-.2-.07-.27.07-.2.48-.2.82-.2h.27c.55-.07.82.07,1.03.27l.07.07c.14.14.21.27.14.34-.07.07-.14.14-.34.14-.27,0-.48.07-.68.07-.48.07-.82.14-1.23-.41ZM35.29,70.42s.14-.2-.14-.61c-.27-.41-.62-.41-.96-.27-.27.14-.62.61-.62.61,0,0-.27-.07-.48.07-.27.14-.48.34-.48.34,0,0-.27-.07-.75.14-.48.2-.82.61-.82.61,0,0-.14-.14-.68-.07-.55.07-.82.48-.82.48,0,0-.48-.2-1.03-.07-.41.07-.82.48-.82.48,0,0-.41-.14-.89-.07-.41,0-1.03.27-1.03.27,0,0-.41-.27-.75-.27-.34-.07-.96.27-.96.27,0,0-.55-.27-.82-.27-.27-.07-.89.14-.89.14,0,0-.27-.2-.75-.34-.48-.14-.96,0-.96,0,0,0-.27-.27-.68-.41-.41-.2-.96-.07-.96-.07,0,0-.27-.34-.55-.48-.27-.14-.75-.14-.75-.14,0,0,0-.27-.21-.41-.34-.2-.55-.27-.55-.27-.34-.82-1.03-.61-1.03-.61-.55.07-.89.88-.89.88,0,0-.55.27-.62,1.02,0,.75,1.03.41,1.03.41,0,0,0,.2.41.41.34.2.82.07.82.07,0,0,.21.27.62.54.41.27,1.16.14,1.16.14,0,0,.14.27.48.48.55.27,1.3.14,1.3.14,0,0,.27.2.68.34.75.27,1.23-.14,1.23-.14,0,0,.41.41.75.48.48.07,1.16-.2,1.16-.2,0,0,.27.2.75.27.48.07,1.23-.34,1.23-.34,0,0,.27.27.82.27.62,0,1.16-.41,1.16-.41,0,0,.14.14.82.14.75,0,1.09-.48,1.09-.48,0,0,.34.14.82.07.55-.07,1.03-.61,1.03-.61,0,0,.34.14.89-.07.62-.2.89-.75.89-.75.75.07.96-.41.96-.41,0,0,.34.34.75,0,.89-.75,0-1.29,0-1.29ZM15.53,70.08c.07-.14.34-.27.48-.27s.27.07.27.14.07.07,0,.14c0,0-.07.07-.14.07s-.21,0-.27.07c-.07,0-.14.07-.27.07,0-.07,0-.14-.07-.2q0,.07,0,0ZM15.8,71.24c-.07.07-.21.14-.27.2-.14.07-.41,0-.48-.14-.07-.07-.14-.27.14-.61.48-.54,1.23-.48,1.64-.34.21.07.27.14.27.27s-.14.2-.48.27c-.48,0-.68.2-.82.34ZM16.41,71.99c-.27-.27-.34-.41-.34-.54s.14-.14.41-.27h.07c.75-.27,1.16-.41,1.78.2.07.07.14.14.07.2,0,.14-.21.2-.48.27-.14.07-.27.07-.41.14-.48.14-.89.2-1.09,0ZM17.99,72.74c-.27-.2-.41-.34-.41-.48s.14-.14.34-.27l.14-.07c.89-.34,1.3-.48,1.98,0,0,0,.14.07.14.2s-.27.2-.55.27c-.14.07-.27.07-.41.14-.62.27-1.03.34-1.23.2ZM20.93,73.08c-.55.34-.96.41-1.16.27-.27-.2-.41-.27-.41-.41s.14-.2.34-.27l.07-.07c.82-.48,1.16-.68,1.91-.27.07.07.14.07.14.14,0,.14-.21.27-.48.41-.14.07-.27.14-.41.2ZM21.54,73.69c-.21-.07-.34-.2-.34-.27,0-.14.07-.27.27-.34.82-.61,1.37-.82,1.91-.54.14.07.21.14.21.2,0,.14-.21.27-.48.48-.14.07-.27.2-.34.27-.48.2-.96.27-1.23.2ZM24.49,73.55c-.41.34-.75.48-1.03.34h-.14c-.14-.07-.34-.07-.34-.2,0-.07.07-.2.21-.27.21-.14.34-.27.55-.48.41-.41.75-.68,1.3-.41.14.07.21.14.21.2,0,.2-.27.41-.55.61-.07.07-.14.14-.21.2ZM26.26,73.55c-.41.34-.75.48-1.03.34h-.14c-.14-.07-.34-.07-.34-.2,0-.07.07-.2.21-.27.21-.2.41-.34.55-.54.41-.41.75-.75,1.3-.48.14.07.21.14.21.2.07.27-.34.54-.68.82.07.07,0,.14-.07.14ZM28.18,73.42c-.48.41-.82.54-1.09.41h-.14c-.14-.07-.34-.07-.34-.2,0-.07.07-.2.21-.27.27-.2.41-.41.62-.54.41-.41.75-.82,1.37-.54.14.07.14.14.21.2.07.2-.34.61-.82.95ZM29.27,73.48h-.14c-.21,0-.34,0-.41-.14,0-.07,0-.2.14-.27.21-.2.27-.41.41-.61.27-.48.55-.82,1.37-.82.07,0,.14.07.14.07.07.27-.41.88-.62,1.16-.34.41-.62.68-.89.61ZM31.87,72.4c-.27.34-.55.75-.89.75h-.14c-.14,0-.34,0-.41-.14-.07-.07,0-.2.14-.34.21-.27.34-.48.48-.68.27-.48.48-.82,1.09-.82.14,0,.21.07.21.14.14.14-.07.54-.48,1.09ZM33.65,71.72c-.27.48-.48.75-.75.75h-.14c-.14,0-.34.07-.41-.07-.07-.07,0-.2.07-.34.21-.27.27-.54.27-.82.14-.41.21-.68.75-.68.14,0,.27.07.34.14.21.2.07.68-.14,1.02ZM34.88,70.76c-.21.61-.62.75-.62.75-.07,0-.14,0-.14-.07-.07-.07,0-.2.07-.34.21-.34.07-.82-.07-.88-.07-.07-.07-.14-.07-.2.07-.14.27-.27.48-.27s.27.14.41.27c0,.2.07.41-.07.75ZM35.29,71.38c-.07.07-.21.14-.27.14h-.07c0-.07.14-.27.14-.41,0-.07.07-.07.07-.07.07,0,.14.07.21.14.07-.07.07.07-.07.2ZM15.11,39.29s.62-.14.96-.34c.34-.27.68-.61.68-.61,0,0,.55.07.96-.14.48-.2.75-.68.75-.68,0,0,.48.14.96-.07.48-.2.48-.41.48-.41,0,0,.48.2,1.03,0,.48-.14.68-.34.68-.34h.62c.27,0,.48-.2.48-.2,0,0,.55.2.82.14.34-.07.68-.27.62-.82-.07-.48-.27-.61-.27-.61,0,0,.41-.88-.75-1.09-.55.07-.62.54-.62.54,0,0-.48-.27-1.03.2,0,0-.55-.27-1.16-.07-.62.2-.82.48-.82.48,0,0-.68-.14-1.16.14-.41.2-.62.48-.62.48,0,0-.55-.2-1.16.27-.62.41-.62.61-.62.61,0,0-.68-.07-1.16.27-.41.27-.48.68-.48.68,0,0-.82.07-1.16.41-.34.34-.48.68-.48.68,0,0-.75.14-1.03.48-.21.27-.34.82-.34.82,0,0-.62,0-1.09.61-.27.41-.34.68-.34.68,0,0-.75.34-.96.88-.21.34-.14.68-.14.68,0,0-.68.27-.82.82-.14.48-.14.82-.14.82,0,0-.48.2-.68.54-.21.41-.07.61-.07.61,0,0-1.03.34-.55.95.48.61,1.09.48,1.09.48,0,0,.68.48,1.23.2,0,0,.62-.27.48-1.09,0,0,.21-.14.27-.48.07-.2-.07-.48-.07-.48,0,0,.41-.27.55-.54.14-.27.21-.68.21-.68,0,0,.48-.27.75-.61.21-.34.27-.75.27-.75,0,0,.48-.2.82-.54.27-.34.41-.68.41-.68,0,0,.62-.2.82-.41.21-.2.48-.68.48-.68,0,0,.68-.14.96-.34.14-.34.34-.82.34-.82ZM23.05,34.74s.07-.07,0,0c.07-.14.21-.14.34-.07.14,0,.21.14.21.27,0,.07,0,.2-.07.2,0,0-.07,0-.07-.07-.07-.14-.34-.27-.41-.34ZM22.36,35.14s.41-.14.96.27c.34.2.41.41.41.54,0,.2-.07.34-.14.48-.14.14-.41.14-.55.07-.07-.07-.14-.14-.07-.2.07-.14-.14-.61-.48-.82-.14-.07-.21-.14-.21-.27,0-.07.07-.07.07-.07ZM20.72,35.28c.07,0,.07-.07.07-.07.27-.14.62-.14,1.09.14.34.2.68.41.75.68,0,.14-.07.2-.21.27-.48.34-.68.14-1.03-.14-.21-.14-.41-.34-.68-.48-.21-.07-.27-.14-.27-.27-.07,0,.14-.07.27-.14ZM18.74,35.82l.07-.07c.27-.2.75-.07,1.16.07.68.2,1.03.41,1.03.61,0,.07,0,.14-.07.2-.48.41-.82.2-1.37,0-.21-.14-.48-.2-.75-.27-.21-.07-.27-.14-.27-.2,0-.14.07-.2.21-.34ZM17.1,36.57q.07-.07.14-.14c.21-.27.62-.14,1.09-.07.27.07,1.09.27,1.16.54q0,.07-.07.14c-.68.54-1.03.41-1.57.2-.21-.07-.41-.2-.68-.27-.21-.07-.27-.07-.27-.2-.07,0,.07-.14.21-.2ZM15.18,37.46l.07-.07c.21-.27.48-.34,1.03-.27h.14c.55.07,1.16.14,1.3.34.07.07,0,.2,0,.27-.34.54-.82.41-1.37.34-.27-.07-.55-.07-.82-.14-.21,0-.27-.07-.34-.14-.21-.07-.07-.2,0-.34ZM8.69,47.18c-.14.07-.48.14-.55.07l-.07-.07c0-.07.07-.07.14-.14.07-.07.14-.07.21-.07.14-.07.21-.07.27-.14.07-.07.07,0,.14,0s.07.07.07.14c0,0-.07.14-.21.2ZM8.96,46.29c-.21.34-.82.82-1.5.68-.41-.07-.48-.27-.48-.41,0-.2.21-.34.34-.41.14-.07.27,0,.34,0,.21,0,.48.07.89-.14.27-.14.41-.14.48-.07.07,0,.07.2-.07.34ZM9.64,44.59c-.21.82-.55.95-1.37,1.16h-.07c-.27.07-.41.14-.48.07-.07-.07-.07-.27-.07-.61.07-.27.34-.48.96-.61.14-.07.27-.07.41-.14.27-.07.41-.14.48-.07.14,0,.21.07.14.2ZM10.67,43.1c-.34.82-.68.95-1.64,1.16h-.14c-.27.07-.41.07-.48,0-.07-.07-.07-.27.07-.61.07-.27.41-.48,1.09-.61.14,0,.27-.07.41-.14.27-.07.55-.2.62-.07.14.14.07.2.07.27ZM11.76,41.81c-.34.75-.68.82-1.71.88h-.14c-.27,0-.41.07-.48-.07-.07-.07,0-.27.07-.61.07-.27.48-.41,1.09-.48.14,0,.27,0,.41-.07.34-.07.55-.07.62,0,.21.2.21.27.14.34ZM13.06,40.79c-.34.48-.89.68-1.91.68-.21,0-.34-.07-.41-.14-.07-.14,0-.27.14-.41.21-.27.62-.48,1.09-.41h.48c.34,0,.62,0,.68.14,0-.07,0,0-.07.14ZM14.43,39.7c-.34.54-.75.48-1.3.41-.21,0-.41-.07-.68-.07-.21,0-.27-.07-.34-.14-.07-.14.07-.27.14-.34l.07-.07c.21-.27.48-.34,1.03-.27h.27c.34,0,.75,0,.82.2.07.07.07.14,0,.27ZM13.82,38.95c-.21,0-.27-.07-.34-.14-.07-.14.07-.27.14-.34l.07-.07c.21-.27.48-.34,1.03-.27h.21c.41,0,.89.07,1.03.27.07.07,0,.2-.07.27-.34.54-.82.48-1.37.34-.14,0-.41-.07-.68-.07ZM12.52,66.62s-.07-.2-.41-.41c-.21-.14-.41-.07-.41-.07,0,0-.21-.48-.34-.68-.21-.2-.62-.41-.62-.41,0,0-.07-.54-.34-.88-.27-.34-.62-.48-.62-.48,0,0-.07-.54-.27-.95-.27-.41-.55-.61-.55-.61,0,0,0-.68-.21-.88-.14-.2-.55-.61-.55-.61,0,0,.07-.68-.07-.95-.14-.27-.48-.61-.48-.61,0,0,.07-.61-.07-1.02-.14-.41-.34-.82-.34-.82,0,0,.21-.48.21-.88-.07-.48-.41-.88-.41-.88,0,0,.27-.41.21-.95-.07-.54-.27-.61-.27-.61,0,0,.27-.41.34-.95,0-.54-.14-.75-.14-.75,0,0,.14-.27.21-.61.07-.27-.07-.48-.07-.48,0,0,.34-.48.34-.75.07-.34-.07-.75-.55-.82-.48-.07-.68.14-.68.14,0,0-.89-.75-1.37.27-.27.48.21.75.21.75,0,0-.41.34-.07,1.02,0,0-.41.48-.41,1.09s.21.88.21.88c0,0-.34.61-.21,1.16.14.41.27.75.27.75,0,0-.34.48-.07,1.16.21.68.41.75.41.75,0,0-.27.61-.07,1.22.21.48.48.68.48.68,0,0-.21.82.07,1.22.27.48.48.61.48.61,0,0-.07.75.14,1.16.14.27.68.54.68.54,0,0-.21.61.27,1.22.27.34.55.54.55.54,0,0,.14.82.55,1.22.27.27.62.34.62.34,0,0,.07.75.48,1.02.41.27.75.34.75.34,0,0,0,.48.34.82.34.27.55.2.55.2,0,0,.07,1.09.75.82.68-.27.82-.88.82-.88,0,0,.68-.54.55-1.09,0-.07-.07-.75-.89-.88ZM6.16,50.03c.27-.27.55-.27.68-.27.21,0,.27.14.41.27.07.2,0,.41-.14.54-.07.07-.14.07-.21,0-.14-.07-.62-.07-.89.2-.14.14-.21.2-.27.14-.07,0-.07-.07-.07-.14-.07.14,0-.34.48-.75ZM5.47,49.83c.07-.14.21-.14.27-.14s.14.07.14.14c0,0,0,.07-.07.07-.14.07-.34.27-.34.27,0,0-.07,0-.07-.07s0-.14.07-.27ZM5.68,51.53c.27-.27.62-.54.89-.48.14,0,.21.14.27.27.21.54-.07.68-.41.88-.21.14-.41.27-.68.54-.14.14-.27.2-.34.2-.14-.07-.14-.2-.21-.34v-.14c-.07-.34.07-.61.48-.95ZM5.2,54.52c-.14-.27.14-.75.41-1.09.41-.54.75-.82.89-.82.07,0,.14.07.21.14.27.54-.07.88-.41,1.29-.14.2-.34.41-.48.68-.14.2-.21.27-.27.27-.14,0-.21-.2-.27-.34l-.07-.14ZM5.33,56.22c-.14-.27.07-.61.27-1.02.14-.27.62-.95.89-.95q.07,0,.14.14c.34.82.07,1.09-.27,1.56-.14.2-.27.34-.41.61-.07.14-.21.2-.27.2-.14,0-.21-.2-.27-.34,0-.07,0-.14-.07-.2ZM5.75,58.46l-.07-.07c-.21-.27-.21-.54.07-1.09l.07-.07c.21-.54.48-1.02.75-1.09.07,0,.21,0,.27.14.41.48.21.88-.14,1.43-.14.2-.27.48-.34.75-.07.2-.14.27-.21.27-.21,0-.34-.2-.41-.27ZM6.57,60.5c-.14,0-.21-.14-.27-.27l-.07-.07c-.21-.27-.21-.54.07-1.09,0-.07.07-.14.07-.2.14-.41.34-.82.55-.88.07,0,.21,0,.27.14.41.48.21.88-.07,1.36-.14.2-.21.41-.27.68-.14.2-.21.34-.27.34ZM7.39,61.86c-.07.2-.14.27-.21.27-.14,0-.21-.14-.27-.27l-.07-.07c-.21-.27-.21-.54.07-1.09.07-.07.07-.2.14-.27.14-.34.27-.68.41-.75.07,0,.14,0,.27.14.41.48.27.88,0,1.36-.14.2-.21.48-.34.68ZM8.07,63.83c-.14,0-.27-.07-.41-.27-.21-.27-.27-.68-.07-1.16.07-.14.07-.27.14-.41.07-.34.14-.61.27-.61.07,0,.14,0,.21.14.41.48.41,1.02.07,1.97,0,.2-.07.34-.21.34ZM9.3,64.85v.14c-.07.27-.07.41-.21.41s-.27-.07-.55-.27c-.21-.14-.27-.54-.14-1.16.07-.14.07-.27.07-.41.07-.34.07-.54.21-.61.07,0,.14,0,.21.07.62.48.62.88.41,1.84ZM10.46,66.28v.14c0,.27,0,.41-.14.41-.14.07-.27-.07-.55-.27-.27-.14-.34-.54-.27-1.22v-.41c0-.34,0-.54.14-.61.07-.07.21,0,.21.07.62.54.62.95.62,1.9ZM11.63,67.43c0,.34,0,.48-.14.54-.14.07-.27,0-.62-.14-.27-.14-.34-.48-.27-1.09v-.41c0-.27,0-.41.07-.48h.21c.75.34.82.75.75,1.56ZM12.58,68.59c-.21.34-.41.34-.55.34-.21-.07-.27-.27-.27-.41s.07-.27.14-.34c.07-.2.21-.41.14-.88-.07-.27,0-.48.07-.48.07-.07.21,0,.34.2.21.27.41.95.14,1.56ZM13.06,68.04q-.07,0,0,0c-.14,0-.14-.07-.14-.14v-.27c0-.14,0-.2-.07-.27v-.14s.07-.07.14,0c.07,0,.21.07.21.27,0,.14-.07.48-.14.54ZM45.07,53.63s.21-.27.21-.88-.41-1.09-.41-1.09c.34-.68-.07-1.02-.07-1.02,0,0,.48-.27.21-.75-.48-1.02-1.23-.34-1.23-.34,0,0-.14-.14-.68-.14-.48.07-.62.41-.55.82,0,.34.34.75.34.75,0,0-.14.2-.07.48.07.27.21.61.21.61,0,0-.14.27-.14.75,0,.54.34.95.34.95,0,0-.21.07-.27.61-.07.54.21.95.21.95,0,0-.34.41-.41.88-.07.41.21.88.21.88,0,0-.27.34-.34.82-.14.41-.07,1.02-.07,1.02,0,0-.34.34-.48.61-.14.27-.07.95-.07.95,0,0-.41.41-.55.61-.14.2-.21.88-.21.88,0,0-.27.2-.55.61-.27.41-.27.95-.27.95,0,0-.34.14-.62.48-.27.34-.34.88-.34.88,0,0-.41.2-.62.41-.21.2-.34.68-.34.68,0,0-.27-.07-.41.07-.34.2-.41.41-.41.41-.82.07-.89.75-.89.75-.14.54.55,1.09.55,1.09,0,0,.14.61.82.88.68.27.75-.82.75-.82,0,0,.21.07.55-.2.34-.27.34-.82.34-.82,0,0,.34-.14.75-.34.41-.27.48-1.02.48-1.02,0,0,.27-.07.62-.34.41-.41.55-1.22.55-1.22,0,0,.27-.2.55-.54.48-.61.27-1.22.27-1.22,0,0,.55-.27.68-.54.27-.41.14-1.16.14-1.16,0,0,.27-.2.48-.61.21-.41.07-1.22.07-1.22,0,0,.34-.2.48-.68.21-.61-.07-1.22-.07-1.22,0,0,.14-.07.34-.75.21-.68-.07-1.16-.07-1.16,0,0,.21-.27.27-.75.07-.34-.27-.95-.27-.95ZM44.18,49.83c0-.07.07-.14.14-.14.14,0,.27,0,.27.14.07.14.07.2.07.27s-.07.07-.07.07c0,0-.21-.2-.34-.27-.07,0-.07-.07-.07-.07ZM42.95,50.64c-.14-.14-.21-.34-.14-.54.07-.14.21-.27.41-.27.14,0,.41,0,.68.27.48.41.55.82.55.82,0,.07,0,.14-.07.14s-.21,0-.27-.14c-.27-.27-.75-.27-.89-.2-.07,0-.21,0-.27-.07ZM43.29,51.25c.07-.14.14-.27.27-.27.27-.07.62.2.89.48.34.34.55.68.48.95v.14c0,.14-.07.34-.21.34-.07,0-.21-.07-.34-.2-.21-.27-.48-.41-.68-.54-.41-.14-.62-.34-.41-.88ZM37.27,67.37c0,.07-.07.2-.07.27v.27c0,.07-.07.14-.07.14h-.07c-.07-.07-.14-.41-.14-.54s.14-.2.21-.27h.14v.14ZM38.03,68.93c-.14,0-.27,0-.55-.34-.34-.61-.07-1.36.21-1.63.14-.14.27-.27.34-.2.14.07.14.2.07.48-.07.48,0,.68.14.88.07.14.07.2.14.34-.07.2-.14.41-.34.48ZM39.12,67.77c-.34.14-.48.2-.62.14-.14-.07-.14-.2-.14-.48v-.07c0-.82,0-1.22.75-1.63.07-.07.14-.07.21,0,.14.07.07.27.07.48v.41c.07.68,0,1.09-.27,1.16ZM40.28,66.62c-.27.2-.48.27-.55.27-.07-.07-.14-.2-.14-.41v-.14c-.07-.95-.07-1.36.62-1.9,0,0,.14-.07.21-.07.14.07.14.27.14.61v.41c.07.61,0,1.09-.27,1.22ZM41.51,65.12c-.27.2-.41.27-.55.27-.14-.07-.14-.2-.21-.41v-.14c-.21-.95-.27-1.36.34-1.9.07-.07.14-.07.21-.07.14.07.14.27.21.61,0,.14.07.27.07.41.14.68.14,1.09-.07,1.22ZM42.34,63.56c-.14.2-.27.27-.41.27s-.21-.14-.27-.34c-.34-.95-.27-1.56.07-1.97.07-.07.14-.14.21-.14.14,0,.21.27.27.61.07.14.07.27.14.41.34.48.21.95,0,1.16ZM43.22,61.79l-.07.07c-.07.14-.21.27-.27.27s-.14-.14-.21-.27c-.07-.27-.21-.48-.27-.61-.27-.54-.41-.88,0-1.36.07-.07.21-.14.27-.14.21.07.27.34.41.75.07.14.07.2.14.27.14.48.21.82,0,1.02ZM43.84,60.09l-.07.07c-.07.14-.21.27-.27.27s-.14-.14-.21-.27c-.07-.27-.21-.48-.27-.68-.27-.54-.48-.88-.07-1.36.07-.07.14-.14.27-.14.27.07.41.48.55.88,0,.07.07.14.07.2.21.48.21.82,0,1.02ZM44.39,58.39l-.07.07c-.07.14-.21.27-.27.27s-.14-.14-.21-.27c-.07-.27-.21-.54-.34-.75-.27-.54-.48-.95-.14-1.43.07-.07.14-.14.27-.14.27.07.55.68.75,1.09l.07.07c.07.48.07.82-.07,1.09ZM44.73,56.22c0,.07-.07.07-.07.14-.07.14-.14.34-.27.34-.07,0-.14-.07-.27-.2-.14-.27-.27-.41-.41-.61-.34-.41-.62-.82-.27-1.56q.07-.07.14-.14c.27,0,.75.68.89.95.21.48.41.82.27,1.09ZM44.87,54.52s0,.07-.07.07c-.07.14-.14.27-.27.34-.07,0-.21-.07-.27-.27-.14-.27-.34-.48-.48-.68-.34-.41-.62-.75-.41-1.29.07-.07.07-.14.21-.14.21,0,.48.27.89.82.27.41.55.82.41,1.16Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M75.58,30.73h4.17v9.04l7.45-9.04h5.13l-8.55,9.92,8.82,11.15h-5.4l-7.45-9.79h-.07v9.79h-4.17v-21.07h.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M108.68,43.44l-7.52-12.71h4.86l4.86,8.84,4.99-8.84h4.38l-7.39,12.71v8.29h-4.17v-8.29Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M140.82,34.6c-1.3-.61-2.74-.95-4.24-.95s-3.28.61-3.28,2.92c0,3.67,9.1,2.11,9.1,9.18,0,4.62-3.62,6.39-7.8,6.39-2.26,0-3.28-.27-5.27-.82l.34-3.81c1.44.75,3.01,1.29,4.65,1.29s3.69-.82,3.69-2.72c0-4.01-9.1-2.38-9.1-9.38,0-4.69,3.62-6.46,7.25-6.46,1.78,0,3.42.27,4.99.75l-.34,3.6Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M158.95,34.06h-5.95v-3.33h16v3.33h-5.95v17.74h-4.17v-17.74h.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M178.58,30.73h4.45l5.27,16.59h.07l5.27-16.59h4.1l-6.98,21.07h-5.13l-7.04-21.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M209.01,30.73h12.24v3.33h-8.07v5.17h7.39v3.33h-7.39v5.91h8.14v3.33h-12.24v-21.07h-.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M234.52,30.73h4.51c4.45,0,9.71-.14,9.71,5.71,0,2.45-1.64,4.55-4.24,4.89v.07c1.09.07,1.78,1.22,2.19,2.18l3.35,8.23h-4.65l-2.46-6.59c-.62-1.56-1.1-2.18-2.87-2.18h-1.37v8.77h-4.17v-21.07ZM238.69,39.7h1.37c2.05,0,4.38-.27,4.38-2.92s-2.32-2.79-4.38-2.79h-1.37v5.71Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M262.36,30.73h4.17v9.04l7.45-9.04h5.13l-8.55,9.92,8.82,11.15h-5.4l-7.45-9.79h-.07v9.79h-4.17l.07-21.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M290.74,30.73h12.24v3.33h-8.07v5.17h7.39v3.33h-7.39v5.91h8.07v3.33h-12.24v-21.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M319.95,34.06h-5.95v-3.33h16v3.33h-5.95v17.74h-4.17v-17.74h.07Z'%20style='fill:%20%2300066d;'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", V6 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20618.36%2083'%3e%3cdefs%3e%3cclipPath%20id='clippath'%3e%3crect%20y='0'%20width='330'%20height='83'%20style='fill:%20none;'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20style='clip-path:%20url(%23clippath);'%3e%3cg%3e%3cpath%20d='M0,53.84c0,17.88,15.66,25.9,24.96,29.09l.14.07.14-.07c4.58-1.63,11.22-4.69,16.41-9.72,5.61-5.44,8.48-11.9,8.48-19.37V8.36l-.21-.07C41.79,2.79,33.38,0,25.03,0S8.34,2.79.14,8.29l-.14.07v45.48ZM.48,8.84C8.62,3.4,16.82.68,25.03.68s16.48,2.72,24.55,8.16l-.14-.27v45.27c0,7.27-2.8,13.6-8.28,18.9-5.13,4.96-11.7,7.95-16.21,9.58h.21c-9.16-3.06-24.48-10.94-24.48-28.41V8.57l-.21.27Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M14.64,19.1c-2.87,1.09-4.79,2.38-5.2,2.79-.89.82-.55,1.63-.55,1.63h.07s-.07-.61.75-1.36c.34-.34,2.19-1.56,5.13-2.72l-.21-.34Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M25.78,17.06h-1.3c-2.53.14-5.95.75-8.96,1.77l.14.34c2.94-1.02,6.36-1.56,8.89-1.7h1.23c2.53.14,5.88.75,8.89,1.7l.14-.34c-3.08-1.02-6.5-1.63-9.03-1.77Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M35.63,19.1c2.87,1.09,4.79,2.38,5.2,2.79.89.82.55,1.63.55,1.63h-.07s.07-.61-.75-1.36c-.34-.34-2.19-1.56-5.13-2.72l.21-.34Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M44.11,20.26c-1.44-1.9-4.58-2.58-7.66-2.79-.14-3.13-5.81-3.33-10.12-2.52-.41-.61-1.92-.54-2.33,0-4.38-.82-9.99-.61-10.12,2.52-3.15.2-6.29.88-7.73,2.79-1.37,1.9,1.37,3.87,1.37,3.87l.62-.54s-4.58-3.74,5.75-5.57c.48,1.36,1.44,2.04,1.44,2.04l.55-.34s-3.15-5.85,8.07-4.01l.68,2.38s0-.14.21-.14c0,0-.27-2.24-.21-2.45.14-.34.89-.34,1.03,0,.07.2-.21,2.45-.21,2.45.27,0,.21.14.21.14l.68-2.38c11.22-1.84,8.07,4.01,8.07,4.01l.55.34s.96-.68,1.44-2.04c10.4,1.84,5.75,5.57,5.75,5.57l.62.54s2.8-1.97,1.37-3.87ZM7.73,23.52q.07.07.14.14s-.14-.07-.27.07c-.21-.14-.41-.34-.62-.54-1.23-1.43-2.12-4.55,6.77-5.3-9.58,1.63-6.63,5.03-6.02,5.64ZM15.59,19.65c0,.14-.27,0-.27.07-.68-.75-1.03-1.56-1.03-2.31-.07-1.84,2.12-3.4,8-2.38.14,0,.21,0,.34.07h-.14c.34.07.75.14,1.16.2-10.53-1.16-8.48,3.33-8.07,4.35ZM35.02,19.78s0-.07,0,0c-.07-.07-.07,0-.07,0,.07-.2-.27.07-.27-.14v-.14c.48-1.02,2.53-5.44-8-4.21.34-.07.68-.14,1.03-.2h.07c4.86-.95,7.32,0,8,1.43.21.34.27.75.21,1.16-.07.75-.41,1.5-.96,2.11ZM42.81,23.72s0-.07,0,0h-.07c-.07-.07-.14-.07-.14-.07h-.21s.07-.07.14-.14c.07,0,0,0,0,0,.27-.27.82-.88.96-1.63.21-1.29-.89-2.99-6.84-4.08,10.53.88,7.39,5.1,6.16,5.91Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M43.82,24.5s-.34-.34-.96-.61c-3.15-1.43-2.39,1.77-2.39,2.04-.27-.82-2.19-2.04-2.67.2-.48,2.38,1.44,1.77,1.78,1.77-.48.68-1.44.68-3.56-.2-2.39-.95-2.8-1.63-2.26-2.79.21,1.43,1.98,1.77,2.53.34,1.3-3.19-1.44-2.31-1.78-2.18.41-.75,1.16-1.09,1.16-1.97.07-1.36-1.92-1.7-2.53-1.22-1.03.82-.41,2.65-.41,2.86-.27-.27-2.12-2.79-2.74.61-.27,1.5,1.37,2.18,2.39,1.02-.21,1.22-1.23,1.63-3.69,1.22-3.69-.54-2.94-2.31-2.94-2.31.07.07,1.44,2.31,2.6-.27,1.23-2.85-1.98-1.97-2.46-1.36.27-1.29,1.5-2.04.82-2.86-.89-1.09-2.6-1.02-3.35,0-.68.88.48,1.56.82,2.86-.48-.61-3.76-1.5-2.46,1.36,1.16,2.58,2.53.34,2.6.27,0,0,.75,1.77-2.94,2.31-2.46.41-3.49,0-3.69-1.22,1.03,1.16,2.67.48,2.39-1.02-.62-3.4-2.46-.88-2.74-.61,0-.2.68-2.04-.41-2.86-.68-.48-2.67-.14-2.53,1.22.07.88.89,1.29,1.16,1.97-.34-.14-3.08-1.09-1.78,2.11.55,1.43,2.33,1.09,2.53-.34.55,1.22.14,1.84-2.26,2.79-2.12.82-3.08.88-3.56.2.27-.07,2.19.68,1.78-1.77-.41-2.24-2.46-1.02-2.67-.2,0-.27.75-3.47-2.39-2.04-.62.27-.96.61-.96.61l-.14.14-.14.14,5.47,7.55s4.65-3.87,13.41-3.87,13.41,3.87,13.41,3.87l5.47-7.55.07-.14v-.07ZM43,25.11c-.62.82-4.51,6.12-4.58,6.19l-.14.2-.21-.14c-1.85-1.02-6.77-3.47-13.13-3.47s-11.29,2.38-13.13,3.47l-.14.14-.21-.2c-.07-.07-3.97-5.37-4.58-6.19l-.07-.07v-.14c0-.07.07-.34.41-.61.75-.48,1.44-.34,1.64-.27.41.27.34,2.04.34,2.24.34-.48.89-1.16,1.5-1.09.41,0,.68.27.89.82.34.88.07,1.36-.21,1.56-.41.27-1.03.2-1.5,0,.07.2.21.54.41.68.62.48,1.85.34,3.28-.14,1.71-.54,2.8-1.36,2.94-2.24.14-.54-.07-1.09-.41-1.43-.21.48-.62,1.29-1.16,1.36-.34,0-.68-.2-.96-.75-.41-.75-.48-1.29-.14-1.63.41-.48,1.85-.2,1.98-.14.21.07-.07-.27-.21-.34-.48-.54-.89-.95-.89-1.43s.21-.82.55-1.02c.48-.27,1.16-.2,1.44.07.27.27.34.82.14,2.11,0,.14-.21.75.07.41.27-.27,1.37-1.29,1.98-1.02.41.14.62.61.62,1.36,0,.54-.14.88-.48,1.09-.48.27-1.37-.2-1.78-.48-.07.34,0,.82.27,1.16.48.61,1.71.95,3.35.82,1.71-.2,2.67-.75,3.15-1.43.27-.41.55-1.22.34-1.9-.27.34-1.16,1.09-1.57,1.09s-.68-.34-.96-.88c-.21-.54-.21-1.16.07-1.43.41-.41,1.71.2,2.39.48-.07-.27-.14-.54-.27-.88-.07-.27-.21-.54-.27-.68-.14-.27-.48-.68-.27-1.09.27-.48.75-.75,1.3-.75.62,0,1.09.27,1.3.75.21.41-.07.75-.27,1.09-.07.2-.21.34-.27.68-.14.34-.21.61-.27.88.62-.27,1.92-.88,2.39-.48.27.27.27.82.07,1.43-.27.61-.55.88-.96.88s-1.37-.75-1.57-1.09c-.14,1.02.21,1.63.34,1.9.48.68,1.44,1.29,3.15,1.43,1.64.14,2.87-.2,3.35-.82.27-.34.34-1.02.34-1.36-.41.27-1.3.88-1.85.61-.34-.14-.48-.54-.48-1.09,0-.82.21-1.22.62-1.36.62-.27,1.92,1.09,1.98.88.07-.14,0-.34,0-.48-.07-.82-.14-1.77.27-1.97.34-.27.96-.27,1.37-.07.34.2.55.54.55,1.02s-.21.75-.68,1.36c-.07.14-.62.54-.34.48.27-.07,1.57-.27,1.92.2.27.34.27.88-.14,1.63-.27.54-.62.75-.96.75-.55-.07-.89-.95-1.16-1.36-.21.27-.62.95-.48,1.5.21.82,1.37,1.7,3.01,2.24,1.44.48,2.6.61,3.21.14.27-.2.41-.54.48-.75-.48.2-1.09.27-1.57.07-.27-.14-.55-.54-.27-1.63.14-.54.55-.82.89-.82.55-.07,1.09.48,1.44.95,0-.2.07-.34.07-.54-.07-.75.14-1.36.55-1.56.21-.14.68-.27,1.44.2.41.27.41.61.41.61v.14l.34.14Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M25.17,8.29c-1.64,0-3.01,1.36-3.01,2.99,0,1.36.89,2.45,2.12,2.86l.14.54c.14-.07.21-.07.34-.07,0-.14,0-.27-.07-.34h.68c0,.14,0,.27-.07.34.14,0,.27.07.34.07l.14-.54c1.23-.34,2.12-1.5,2.12-2.86.27-1.63-1.09-2.99-2.74-2.99ZM24.96,8.84h.41v2.72h-.41v-2.72ZM22.64,11.28c0-1.29.96-2.31,2.19-2.45v2.72h-2.19v-.27ZM25.17,13.73c-1.09,0-1.98-.68-2.33-1.56h4.65c-.34.88-1.3,1.56-2.33,1.56ZM27.56,11.83c-.07.14-.07.2-.07.2h-4.72s0-.07-.07-.2c0-.14-.07-.2-.07-.2h4.92c.07,0,.07.07,0,.2ZM25.51,11.49v-2.65c1.23.14,2.19,1.22,2.19,2.45v.27l-2.19-.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M25.85,5.03v-1.77h-1.44v1.77h-1.98v1.43h1.98v2.11h.14s.41-.07.62-.07.55.07.55.07h.14v-2.11h1.98v-1.43h-1.98Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M14.91,45.2l8.21.68.41-1.09-.14.48-8.48-.41s-.48,0-.48-.54.48-.61.48-.61l8.89-.27.55-6.59c0-.27.27-.48.82-.48.48,0,.75.2.75.48l.55,6.59,8.96.27s.48,0,.48.61c0,.54-.48.54-.48.54l-8.41.41.21.68,8.21-.68c.07,0,1.03-.07,1.03-.88,0-.95-.68-1.02-1.09-1.09l-8.21-.48c-.07-.82-.34-4.08-.41-5.51-.07-1.36-.89-1.63-1.23-1.7h-.55c-.34.07-1.16.34-1.23,1.7-.07,1.36-.34,4.62-.41,5.51l-8.21.48c-.41,0-1.09.14-1.09,1.09-.14.75.75.82.89.82ZM35.63,59.28l1.3.61s-.89,1.63-4.1,4.35l.27.41h.07c2.74-1.97,4.24-4.89,4.24-4.89l-1.16-.48,2.39-.88c-.41,1.29-1.44,4.42-4.92,6.93-.07.07-.14.14-.27.2l-.07-.27c-.07.07-.21.14-.27.2l.27.2c-2.46,1.56-5.47,2.31-8.14,2.31s-5.81-.82-8.28-2.45l.14-.27c-.07-.07-.21-.14-.27-.2l-.07.27c-.07,0-.07-.07-.14-.07-3.49-2.58-4.58-5.64-4.99-6.93l2.39.88-1.16.41s1.3,2.85,4.1,4.83l.21-.41c-3.21-2.72-3.9-4.21-3.9-4.21l1.3-.61-3.35-1.43s.68,4.69,5.13,7.95c2.67,1.97,5.75,3.13,8.69,3.13s6.09-1.16,8.69-3.13c4.58-3.19,5.27-7.89,5.27-7.89l-3.35,1.43ZM27.08,66.55c.89,0,3.42-.48,4.92-1.29l.48-.27.14-.07-.21-.41-.62.34c-1.44.75-3.9,1.09-4.58,1.09-.62,0-.82-.14-.82-.82v-4.83l-.75-.48v.07l.27.14v5.51c.07.88.68,1.02,1.16,1.02ZM23.12,65.94c-.62,0-3.08-.27-4.58-1.09l-.62-.34-.21.41.62.34c1.5.82,3.97,1.29,4.92,1.29.48,0,1.09-.07,1.09-1.02v-5.51l.27-.14v-.07l-.75.48v4.83c0,.61-.14.82-.75.82Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M38.78,49.69h-10.12l-3.28-9.24-.21-.68-.21.68-3.42,9.24h-10.12l.62.41,7.87,5.64-3.35,9.92,8.55-6.12,8.41,6.19-3.28-9.99,7.93-5.64.62-.41ZM29.48,55.47l-.14-.07v.07l.14.07v-.07l3.15,8.9-1.03-1.43.21.54.68.95-7.25-5.64v-.27l-.07-.07-.14.07v.27l-7.45,5.64.89-1.22-.41.27.07-.27-.75.95,3.15-8.77-7.73-5.3,1.09.34-.21-.07h.34l-1.16-.34,9.03.2.14.14h.07l-.14-.07,3.08-9.38v1.56l.07-.27.14.34v-1.7l2.94,9.24-.21.27h.21l.14-.14,8.89-.2-1.09.34h.27l-.27.2,1.3-.41-7.93,5.3Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M12.58,50.1l12.52,4.15-.07-.07,7.66,10.67.14-.14-7.59-10.67h-.07l-12.52-4.08-.07.14Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M17.37,64.71l7.87-10.54-.07.07,12.72-4.28-.07-.14-12.72,4.21h-.07l-7.8,10.6.14.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M25.03,40.79v18.08h.2v-18.08h-.2Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M19.97,55.81l5.2-1.56h-.07l5.06,1.56.07-.2-5.06-1.56h-.07l-5.2,1.56.07.2Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M21.48,49.69l3.56,4.49.14.07.07-.07,3.49-4.49-.14-.07-3.56,4.42h.21l-3.62-4.42-.14.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M13.95,66.69c-.27,0-.62.07-.89.14.07.07.14.14.21.2.21-.07.48-.14.68-.14,1.37,0,2.39,1.09,2.39,2.38v.14c.07,0,.14.07.21.14v-.27c.07-1.43-1.16-2.58-2.6-2.58ZM15.59,71.99c-.48.27-1.09.48-1.64.48-1.78,0-3.15-1.43-3.15-3.13,0-.27.07-.61.14-.88-.07,0-.14-.07-.14-.14-.07-.07-.14-.14-.14-.2-.14.34-.21.82-.21,1.22,0,1.97,1.64,3.53,3.56,3.53.75,0,1.44-.2,1.98-.61h-.07c-.14-.07-.27-.14-.34-.27ZM9.51,45.88c-.07.14-.14.27-.21.27.62.61.89,1.36.89,2.24,0,1.7-1.3,3.06-3.01,3.13-.07.2-.14.34-.14.48,1.98,0,3.56-1.63,3.56-3.53,0-1.02-.41-1.9-1.09-2.58ZM7.25,44.93h-.21c-1.98,0-3.56,1.56-3.56,3.53,0,1.29.68,2.38,1.64,2.99-.07-.2-.07-.41,0-.54-.75-.61-1.23-1.5-1.23-2.45,0-1.77,1.44-3.13,3.15-3.13,0-.07.07-.14.07-.2s.07-.14.14-.2ZM13.95,65.8c-.68,0-1.3.2-1.78.48.14.14.21.2.27.27.48-.27.96-.41,1.5-.41,1.78,0,3.15,1.43,3.15,3.13,0,.27,0,.54-.07.75v.07c.07,0,.21.07.41.14.07-.27.14-.61.14-.88,0-1.97-1.64-3.53-3.62-3.53ZM22.3,36.78h-.41c.34.82.96,1.43,1.78,1.84v-.48c-.62-.34-1.09-.82-1.37-1.36ZM5.06,46.7c-.41.48-.68,1.09-.68,1.77,0,.61.21,1.16.62,1.63,0-.07,0-.14.07-.2v-.07c-.27-.41-.41-.88-.41-1.36,0-1.09.75-2.04,1.85-2.31.07-.14.21-.27.34-.34-.68.07-1.3.41-1.78.88ZM36.32,71.78c-.27,0-.55-.07-.82-.14q-.07.07-.14.14c.27.14.62.2.96.2,1.44,0,2.67-1.16,2.67-2.65,0-.27-.07-.48-.14-.75h-.07s0,.2-.07.41v.34c0,1.36-1.09,2.45-2.39,2.45ZM42.88,51.05q.07,0,0,0c.07-.07,0-.14-.07-.2-1.16-.2-1.98-1.16-1.98-2.38,0-.54.21-1.02.48-1.36-.07-.07-.07-.14-.14-.27-.34.48-.55,1.02-.55,1.56-.07,1.36.96,2.52,2.26,2.65ZM7.18,51.05c1.44-.07,2.53-1.22,2.53-2.65,0-.54-.21-1.09-.48-1.5-.07.07-.07.14-.14.2.27.41.41.82.41,1.36,0,1.29-.96,2.31-2.26,2.38-.07.14-.07.2-.07.2ZM13.95,71.92c.27,0,.55-.07.82-.14-.07-.07-.14-.07-.14-.14-.21.07-.41.07-.62.07-1.37,0-2.39-1.09-2.39-2.38v-.07c-.14-.14-.14-.27-.21-.41,0,.14-.07.27-.07.41,0,1.5,1.16,2.65,2.6,2.65ZM23.05,36.64c-.14,0-.21-.07-.27-.07.21.34.48.68.89.95v-.2c-.27-.2-.41-.41-.62-.68ZM42.81,51.59c-1.57-.2-2.8-1.5-2.8-3.13,0-.88.34-1.7.96-2.31-.07-.07-.14-.2-.21-.34-.75.68-1.16,1.56-1.16,2.65,0,1.9,1.5,3.47,3.35,3.53,0-.07-.07-.2-.14-.41ZM45.62,48.47c0,.61-.21,1.16-.55,1.56v.27c.48-.48.82-1.16.82-1.9,0-1.29-.96-2.38-2.26-2.58.14.07.27.2.34.34.96.34,1.64,1.29,1.64,2.31ZM39.33,68.32c.14.34.14.68.14.95,0,1.77-1.44,3.13-3.15,3.13-.62,0-1.3-.2-1.78-.54-.07.07-.21.2-.41.27.62.48,1.37.75,2.19.75,1.98,0,3.56-1.56,3.56-3.53,0-.48-.14-.95-.27-1.43-.07.2-.14.34-.27.41ZM44.8,50.64q.07,0,0,0h0ZM43.22,44.93h-.07c.07.07.07.14.14.2,0,.07.07.14.07.2.82,0,1.57.34,2.19.95.62.61.89,1.36.89,2.18,0,1.02-.48,1.97-1.37,2.58,0,.14,0,.34-.14.61,1.16-.61,1.92-1.77,1.92-3.13-.07-1.97-1.64-3.6-3.62-3.6ZM27.22,34.26c.14,0,.21,0,.27.07-.41-.95-1.37-1.56-2.39-1.56-1.09,0-2.05.68-2.46,1.63.07-.07.21-.14.34-.14.41-.75,1.23-1.22,2.12-1.22.96-.07,1.71.48,2.12,1.22ZM27.49,36.64c-.07,0-.21.07-.34.07-.14.2-.34.41-.55.61v.27c.41-.27.68-.61.89-.95ZM28.04,36.78c-.27.54-.75,1.02-1.3,1.36v.48c.75-.34,1.37-1.02,1.71-1.77h-.27c-.07-.07-.14-.07-.14-.07ZM25.1,31.81c-1.78,0-3.28,1.29-3.56,2.99.14-.14.27-.2.41-.2v-.07c.34-1.36,1.64-2.38,3.08-2.38s2.74,1.02,3.08,2.38c.14,0,.27.07.48.14-.27-1.56-1.71-2.86-3.49-2.86ZM33.1,69.34c0-1.77,1.44-3.13,3.15-3.13.48,0,.96.14,1.37.27h.07c.07-.07.14-.2.27-.27-.48-.27-1.09-.41-1.71-.41-1.98,0-3.56,1.56-3.56,3.53,0,.34.07.68.14,1.02.07-.07.21-.14.27-.2.07,0,.07-.07.14-.07v-.07c-.14-.2-.14-.41-.14-.68ZM36.32,66.96c.21,0,.34,0,.55.07.07-.07.14-.14.27-.2-.27-.07-.48-.14-.75-.14-1.44,0-2.67,1.16-2.67,2.65,0,.2,0,.41.07.68.07-.07.14-.14.21-.2,0-.14-.07-.27-.07-.41-.07-1.36,1.03-2.45,2.39-2.45Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M37.89,41.47s.07.34.41.68c.27.34.82.54.82.54,0,0,.07.34.27.75.21.41.75.61.75.61,0,0,.07.48.21.68.14.27.55.54.55.54,0,0-.14.2-.07.48.14.34.27.48.27.48-.21.82.48,1.09.48,1.09.48.27,1.23-.2,1.23-.2,0,0,.68.07,1.09-.48.48-.61-.55-.95-.55-.95,0,0,.14-.2-.07-.61-.21-.41-.68-.54-.68-.54,0,0,0-.34-.14-.82-.14-.48-.82-.82-.82-.82,0,0,.07-.27-.14-.68-.27-.54-.96-.88-.96-.88,0,0-.14-.27-.34-.68-.55-.54-1.16-.54-1.16-.54,0,0-.14-.61-.34-.82-.34-.34-1.03-.48-1.03-.48,0,0-.07-.27-.48-.68-.34-.34-1.16-.41-1.16-.41,0,0-.07-.34-.48-.68-.48-.34-1.16-.27-1.16-.27,0,0,0-.2-.62-.61-.62-.41-1.16-.27-1.16-.27,0,0-.21-.27-.62-.48-.48-.27-1.16-.14-1.16-.14,0,0-.21-.27-.82-.48-.62-.2-1.16.07-1.16.07-.55-.48-1.03-.2-1.03-.2,0,0-.07-.48-.62-.41-1.09.2-.75,1.09-.75,1.09,0,0-.21.14-.27.61-.07.48.27.75.62.82.27.07.82-.14.82-.14,0,0,.21.2.48.2h.62s.21.2.68.34c.48.14,1.03,0,1.03,0,0,0,0,.2.48.41.48.2.96.07.96.07,0,0,.27.41.75.68.41.2.96.14.96.14,0,0,.27.34.68.61.34.27.96.34.96.34,0,0,.21.41.48.68.27.2.96.34.96.34,0,0,.27.48.48.68.14.07.75.34.75.34ZM42.2,47.24c-.07.07-.41,0-.55-.07-.14-.07-.21-.2-.21-.27s0-.07.07-.14h.14c.07.07.14.07.27.14.07,0,.14.07.21.07.07.07.14.07.14.14s0,.07-.07.14ZM43.09,46.16c.14.07.34.2.34.41,0,.14-.07.27-.48.41-.68.14-1.3-.34-1.5-.68-.14-.2-.14-.27-.07-.34s.27-.07.48.07c.41.2.68.2.89.14.07-.07.21-.07.34,0ZM42.61,45.14c.07.34.07.54-.07.61-.07.07-.21.07-.48-.07h-.07c-.82-.2-1.16-.34-1.37-1.16,0-.07,0-.2.07-.2.07-.07.27,0,.48.07.14.07.27.07.41.14.68.14,1.03.41,1.03.61ZM41.79,43.71c.14.34.14.54.07.61-.07.07-.21.07-.48,0h-.14c-.96-.27-1.3-.34-1.64-1.16,0-.07-.07-.14,0-.2.07-.07.27,0,.62.07.14.07.27.07.41.14.75.07,1.09.27,1.16.54ZM40.76,42.08c.14.34.14.48.07.61-.07.07-.21.07-.48.07h-.14c-.96-.07-1.37-.14-1.71-.88-.07-.07-.07-.14,0-.2.07-.14.34-.07.62,0,.14,0,.27.07.41.07.75,0,1.09.14,1.23.34ZM39.53,40.85c.14.2.21.34.14.41-.07.14-.21.14-.41.14-1.03,0-1.57-.2-1.92-.68-.07-.14-.07-.2-.07-.27.07-.14.34-.14.68-.14h.48c.48.07.89.27,1.09.54ZM26.74,34.87c0-.14.07-.2.21-.27h.27l.07.07s-.27.14-.34.27l-.07.07c-.14.07-.14,0-.14-.14ZM27.36,36.23c0,.07,0,.14-.07.2-.14.07-.41.07-.55-.07-.14-.14-.21-.27-.14-.48,0-.14.14-.34.41-.54.55-.34.96-.27.96-.27.07,0,.07.07.07.14s-.07.14-.21.27c-.34.14-.55.61-.48.75ZM27.97,36.37c-.14-.07-.21-.2-.21-.27,0-.27.41-.54.75-.68.48-.27.82-.27,1.09-.14,0,0,.07,0,.07.07.14.07.27.14.27.27,0,.07-.07.2-.27.27-.27.14-.55.34-.68.48-.34.14-.55.27-1.03,0ZM29.41,36.64c-.07-.07-.14-.14-.07-.2.07-.2.41-.41,1.03-.61.41-.14.89-.27,1.16-.07l.07.07c.14.07.27.2.27.34,0,.07-.14.14-.27.2-.27.07-.55.2-.75.27-.62.2-1.03.41-1.44,0ZM30.91,37.12c-.07-.07-.07-.14-.07-.14.07-.27.89-.48,1.16-.54.48-.14.89-.2,1.09.07,0,0,.07.07.14.14.14.14.27.2.27.34,0,.07-.14.14-.27.2-.27.07-.48.14-.68.27-.55,0-.96.2-1.64-.34ZM34.13,38.07c-.55.14-1.09.2-1.37-.34-.07-.07-.07-.2,0-.27.14-.27.68-.27,1.3-.34h.07c.55-.07.82.07,1.03.27l.07.07c.14.14.21.27.14.34-.07.07-.14.14-.34.14-.34.07-.62.07-.89.14ZM34.4,38.68c-.07-.14-.07-.2-.07-.27.14-.2.62-.27,1.03-.27h.21c.55-.07.82.07,1.03.27l.07.07c.14.14.21.27.14.34-.07.07-.14.14-.34.14-.27,0-.55.07-.75.07-.48.14-.96.2-1.3-.34ZM35.91,39.7c-.07-.14-.07-.2-.07-.27.07-.2.48-.2.82-.2h.27c.55-.07.82.07,1.03.27l.07.07c.14.14.21.27.14.34-.07.07-.14.14-.34.14-.27,0-.48.07-.68.07-.48.07-.82.14-1.23-.41ZM35.29,70.42s.14-.2-.14-.61c-.27-.41-.62-.41-.96-.27-.27.14-.62.61-.62.61,0,0-.27-.07-.48.07-.27.14-.48.34-.48.34,0,0-.27-.07-.75.14-.48.2-.82.61-.82.61,0,0-.14-.14-.68-.07-.55.07-.82.48-.82.48,0,0-.48-.2-1.03-.07-.41.07-.82.48-.82.48,0,0-.41-.14-.89-.07-.41,0-1.03.27-1.03.27,0,0-.41-.27-.75-.27-.34-.07-.96.27-.96.27,0,0-.55-.27-.82-.27-.27-.07-.89.14-.89.14,0,0-.27-.2-.75-.34-.48-.14-.96,0-.96,0,0,0-.27-.27-.68-.41-.41-.2-.96-.07-.96-.07,0,0-.27-.34-.55-.48-.27-.14-.75-.14-.75-.14,0,0,0-.27-.21-.41-.34-.2-.55-.27-.55-.27-.34-.82-1.03-.61-1.03-.61-.55.07-.89.88-.89.88,0,0-.55.27-.62,1.02,0,.75,1.03.41,1.03.41,0,0,0,.2.41.41.34.2.82.07.82.07,0,0,.21.27.62.54.41.27,1.16.14,1.16.14,0,0,.14.27.48.48.55.27,1.3.14,1.3.14,0,0,.27.2.68.34.75.27,1.23-.14,1.23-.14,0,0,.41.41.75.48.48.07,1.16-.2,1.16-.2,0,0,.27.2.75.27.48.07,1.23-.34,1.23-.34,0,0,.27.27.82.27.62,0,1.16-.41,1.16-.41,0,0,.14.14.82.14.75,0,1.09-.48,1.09-.48,0,0,.34.14.82.07.55-.07,1.03-.61,1.03-.61,0,0,.34.14.89-.07.62-.2.89-.75.89-.75.75.07.96-.41.96-.41,0,0,.34.34.75,0,.89-.75,0-1.29,0-1.29ZM15.53,70.08c.07-.14.34-.27.48-.27s.27.07.27.14.07.07,0,.14c0,0-.07.07-.14.07s-.21,0-.27.07c-.07,0-.14.07-.27.07,0-.07,0-.14-.07-.2q0,.07,0,0ZM15.8,71.24c-.07.07-.21.14-.27.2-.14.07-.41,0-.48-.14-.07-.07-.14-.27.14-.61.48-.54,1.23-.48,1.64-.34.21.07.27.14.27.27s-.14.2-.48.27c-.48,0-.68.2-.82.34ZM16.41,71.99c-.27-.27-.34-.41-.34-.54s.14-.14.41-.27h.07c.75-.27,1.16-.41,1.78.2.07.07.14.14.07.2,0,.14-.21.2-.48.27-.14.07-.27.07-.41.14-.48.14-.89.2-1.09,0ZM17.99,72.74c-.27-.2-.41-.34-.41-.48s.14-.14.34-.27l.14-.07c.89-.34,1.3-.48,1.98,0,0,0,.14.07.14.2s-.27.2-.55.27c-.14.07-.27.07-.41.14-.62.27-1.03.34-1.23.2ZM20.93,73.08c-.55.34-.96.41-1.16.27-.27-.2-.41-.27-.41-.41s.14-.2.34-.27l.07-.07c.82-.48,1.16-.68,1.91-.27.07.07.14.07.14.14,0,.14-.21.27-.48.41-.14.07-.27.14-.41.2ZM21.54,73.69c-.21-.07-.34-.2-.34-.27,0-.14.07-.27.27-.34.82-.61,1.37-.82,1.91-.54.14.07.21.14.21.2,0,.14-.21.27-.48.48-.14.07-.27.2-.34.27-.48.2-.96.27-1.23.2ZM24.49,73.55c-.41.34-.75.48-1.03.34h-.14c-.14-.07-.34-.07-.34-.2,0-.07.07-.2.21-.27.21-.14.34-.27.55-.48.41-.41.75-.68,1.3-.41.14.07.21.14.21.2,0,.2-.27.41-.55.61-.07.07-.14.14-.21.2ZM26.26,73.55c-.41.34-.75.48-1.03.34h-.14c-.14-.07-.34-.07-.34-.2,0-.07.07-.2.21-.27.21-.2.41-.34.55-.54.41-.41.75-.75,1.3-.48.14.07.21.14.21.2.07.27-.34.54-.68.82.07.07,0,.14-.07.14ZM28.18,73.42c-.48.41-.82.54-1.09.41h-.14c-.14-.07-.34-.07-.34-.2,0-.07.07-.2.21-.27.27-.2.41-.41.62-.54.41-.41.75-.82,1.37-.54.14.07.14.14.21.2.07.2-.34.61-.82.95ZM29.27,73.48h-.14c-.21,0-.34,0-.41-.14,0-.07,0-.2.14-.27.21-.2.27-.41.41-.61.27-.48.55-.82,1.37-.82.07,0,.14.07.14.07.07.27-.41.88-.62,1.16-.34.41-.62.68-.89.61ZM31.87,72.4c-.27.34-.55.75-.89.75h-.14c-.14,0-.34,0-.41-.14-.07-.07,0-.2.14-.34.21-.27.34-.48.48-.68.27-.48.48-.82,1.09-.82.14,0,.21.07.21.14.14.14-.07.54-.48,1.09ZM33.65,71.72c-.27.48-.48.75-.75.75h-.14c-.14,0-.34.07-.41-.07-.07-.07,0-.2.07-.34.21-.27.27-.54.27-.82.14-.41.21-.68.75-.68.14,0,.27.07.34.14.21.2.07.68-.14,1.02ZM34.88,70.76c-.21.61-.62.75-.62.75-.07,0-.14,0-.14-.07-.07-.07,0-.2.07-.34.21-.34.07-.82-.07-.88-.07-.07-.07-.14-.07-.2.07-.14.27-.27.48-.27s.27.14.41.27c0,.2.07.41-.07.75ZM35.29,71.38c-.07.07-.21.14-.27.14h-.07c0-.07.14-.27.14-.41,0-.07.07-.07.07-.07.07,0,.14.07.21.14.07-.07.07.07-.07.2ZM15.11,39.29s.62-.14.96-.34c.34-.27.68-.61.68-.61,0,0,.55.07.96-.14.48-.2.75-.68.75-.68,0,0,.48.14.96-.07.48-.2.48-.41.48-.41,0,0,.48.2,1.03,0,.48-.14.68-.34.68-.34h.62c.27,0,.48-.2.48-.2,0,0,.55.2.82.14.34-.07.68-.27.62-.82-.07-.48-.27-.61-.27-.61,0,0,.41-.88-.75-1.09-.55.07-.62.54-.62.54,0,0-.48-.27-1.03.2,0,0-.55-.27-1.16-.07-.62.2-.82.48-.82.48,0,0-.68-.14-1.16.14-.41.2-.62.48-.62.48,0,0-.55-.2-1.16.27-.62.41-.62.61-.62.61,0,0-.68-.07-1.16.27-.41.27-.48.68-.48.68,0,0-.82.07-1.16.41-.34.34-.48.68-.48.68,0,0-.75.14-1.03.48-.21.27-.34.82-.34.82,0,0-.62,0-1.09.61-.27.41-.34.68-.34.68,0,0-.75.34-.96.88-.21.34-.14.68-.14.68,0,0-.68.27-.82.82-.14.48-.14.82-.14.82,0,0-.48.2-.68.54-.21.41-.07.61-.07.61,0,0-1.03.34-.55.95.48.61,1.09.48,1.09.48,0,0,.68.48,1.23.2,0,0,.62-.27.48-1.09,0,0,.21-.14.27-.48.07-.2-.07-.48-.07-.48,0,0,.41-.27.55-.54.14-.27.21-.68.21-.68,0,0,.48-.27.75-.61.21-.34.27-.75.27-.75,0,0,.48-.2.82-.54.27-.34.41-.68.41-.68,0,0,.62-.2.82-.41.21-.2.48-.68.48-.68,0,0,.68-.14.96-.34.14-.34.34-.82.34-.82ZM23.05,34.74s.07-.07,0,0c.07-.14.21-.14.34-.07.14,0,.21.14.21.27,0,.07,0,.2-.07.2,0,0-.07,0-.07-.07-.07-.14-.34-.27-.41-.34ZM22.36,35.14s.41-.14.96.27c.34.2.41.41.41.54,0,.2-.07.34-.14.48-.14.14-.41.14-.55.07-.07-.07-.14-.14-.07-.2.07-.14-.14-.61-.48-.82-.14-.07-.21-.14-.21-.27,0-.07.07-.07.07-.07ZM20.72,35.28c.07,0,.07-.07.07-.07.27-.14.62-.14,1.09.14.34.2.68.41.75.68,0,.14-.07.2-.21.27-.48.34-.68.14-1.03-.14-.21-.14-.41-.34-.68-.48-.21-.07-.27-.14-.27-.27-.07,0,.14-.07.27-.14ZM18.74,35.82l.07-.07c.27-.2.75-.07,1.16.07.68.2,1.03.41,1.03.61,0,.07,0,.14-.07.2-.48.41-.82.2-1.37,0-.21-.14-.48-.2-.75-.27-.21-.07-.27-.14-.27-.2,0-.14.07-.2.21-.34ZM17.1,36.57q.07-.07.14-.14c.21-.27.62-.14,1.09-.07.27.07,1.09.27,1.16.54q0,.07-.07.14c-.68.54-1.03.41-1.57.2-.21-.07-.41-.2-.68-.27-.21-.07-.27-.07-.27-.2-.07,0,.07-.14.21-.2ZM15.18,37.46l.07-.07c.21-.27.48-.34,1.03-.27h.14c.55.07,1.16.14,1.3.34.07.07,0,.2,0,.27-.34.54-.82.41-1.37.34-.27-.07-.55-.07-.82-.14-.21,0-.27-.07-.34-.14-.21-.07-.07-.2,0-.34ZM8.69,47.18c-.14.07-.48.14-.55.07l-.07-.07c0-.07.07-.07.14-.14.07-.07.14-.07.21-.07.14-.07.21-.07.27-.14.07-.07.07,0,.14,0s.07.07.07.14c0,0-.07.14-.21.2ZM8.96,46.29c-.21.34-.82.82-1.5.68-.41-.07-.48-.27-.48-.41,0-.2.21-.34.34-.41.14-.07.27,0,.34,0,.21,0,.48.07.89-.14.27-.14.41-.14.48-.07.07,0,.07.2-.07.34ZM9.64,44.59c-.21.82-.55.95-1.37,1.16h-.07c-.27.07-.41.14-.48.07-.07-.07-.07-.27-.07-.61.07-.27.34-.48.96-.61.14-.07.27-.07.41-.14.27-.07.41-.14.48-.07.14,0,.21.07.14.2ZM10.67,43.1c-.34.82-.68.95-1.64,1.16h-.14c-.27.07-.41.07-.48,0-.07-.07-.07-.27.07-.61.07-.27.41-.48,1.09-.61.14,0,.27-.07.41-.14.27-.07.55-.2.62-.07.14.14.07.2.07.27ZM11.76,41.81c-.34.75-.68.82-1.71.88h-.14c-.27,0-.41.07-.48-.07-.07-.07,0-.27.07-.61.07-.27.48-.41,1.09-.48.14,0,.27,0,.41-.07.34-.07.55-.07.62,0,.21.2.21.27.14.34ZM13.06,40.79c-.34.48-.89.68-1.91.68-.21,0-.34-.07-.41-.14-.07-.14,0-.27.14-.41.21-.27.62-.48,1.09-.41h.48c.34,0,.62,0,.68.14,0-.07,0,0-.07.14ZM14.43,39.7c-.34.54-.75.48-1.3.41-.21,0-.41-.07-.68-.07-.21,0-.27-.07-.34-.14-.07-.14.07-.27.14-.34l.07-.07c.21-.27.48-.34,1.03-.27h.27c.34,0,.75,0,.82.2.07.07.07.14,0,.27ZM13.82,38.95c-.21,0-.27-.07-.34-.14-.07-.14.07-.27.14-.34l.07-.07c.21-.27.48-.34,1.03-.27h.21c.41,0,.89.07,1.03.27.07.07,0,.2-.07.27-.34.54-.82.48-1.37.34-.14,0-.41-.07-.68-.07ZM12.52,66.62s-.07-.2-.41-.41c-.21-.14-.41-.07-.41-.07,0,0-.21-.48-.34-.68-.21-.2-.62-.41-.62-.41,0,0-.07-.54-.34-.88-.27-.34-.62-.48-.62-.48,0,0-.07-.54-.27-.95-.27-.41-.55-.61-.55-.61,0,0,0-.68-.21-.88-.14-.2-.55-.61-.55-.61,0,0,.07-.68-.07-.95-.14-.27-.48-.61-.48-.61,0,0,.07-.61-.07-1.02-.14-.41-.34-.82-.34-.82,0,0,.21-.48.21-.88-.07-.48-.41-.88-.41-.88,0,0,.27-.41.21-.95-.07-.54-.27-.61-.27-.61,0,0,.27-.41.34-.95,0-.54-.14-.75-.14-.75,0,0,.14-.27.21-.61.07-.27-.07-.48-.07-.48,0,0,.34-.48.34-.75.07-.34-.07-.75-.55-.82-.48-.07-.68.14-.68.14,0,0-.89-.75-1.37.27-.27.48.21.75.21.75,0,0-.41.34-.07,1.02,0,0-.41.48-.41,1.09s.21.88.21.88c0,0-.34.61-.21,1.16.14.41.27.75.27.75,0,0-.34.48-.07,1.16.21.68.41.75.41.75,0,0-.27.61-.07,1.22.21.48.48.68.48.68,0,0-.21.82.07,1.22.27.48.48.61.48.61,0,0-.07.75.14,1.16.14.27.68.54.68.54,0,0-.21.61.27,1.22.27.34.55.54.55.54,0,0,.14.82.55,1.22.27.27.62.34.62.34,0,0,.07.75.48,1.02.41.27.75.34.75.34,0,0,0,.48.34.82.34.27.55.2.55.2,0,0,.07,1.09.75.82.68-.27.82-.88.82-.88,0,0,.68-.54.55-1.09,0-.07-.07-.75-.89-.88ZM6.16,50.03c.27-.27.55-.27.68-.27.21,0,.27.14.41.27.07.2,0,.41-.14.54-.07.07-.14.07-.21,0-.14-.07-.62-.07-.89.2-.14.14-.21.2-.27.14-.07,0-.07-.07-.07-.14-.07.14,0-.34.48-.75ZM5.47,49.83c.07-.14.21-.14.27-.14s.14.07.14.14c0,0,0,.07-.07.07-.14.07-.34.27-.34.27,0,0-.07,0-.07-.07s0-.14.07-.27ZM5.68,51.53c.27-.27.62-.54.89-.48.14,0,.21.14.27.27.21.54-.07.68-.41.88-.21.14-.41.27-.68.54-.14.14-.27.2-.34.2-.14-.07-.14-.2-.21-.34v-.14c-.07-.34.07-.61.48-.95ZM5.2,54.52c-.14-.27.14-.75.41-1.09.41-.54.75-.82.89-.82.07,0,.14.07.21.14.27.54-.07.88-.41,1.29-.14.2-.34.41-.48.68-.14.2-.21.27-.27.27-.14,0-.21-.2-.27-.34l-.07-.14ZM5.33,56.22c-.14-.27.07-.61.27-1.02.14-.27.62-.95.89-.95q.07,0,.14.14c.34.82.07,1.09-.27,1.56-.14.2-.27.34-.41.61-.07.14-.21.2-.27.2-.14,0-.21-.2-.27-.34,0-.07,0-.14-.07-.2ZM5.75,58.46l-.07-.07c-.21-.27-.21-.54.07-1.09l.07-.07c.21-.54.48-1.02.75-1.09.07,0,.21,0,.27.14.41.48.21.88-.14,1.43-.14.2-.27.48-.34.75-.07.2-.14.27-.21.27-.21,0-.34-.2-.41-.27ZM6.57,60.5c-.14,0-.21-.14-.27-.27l-.07-.07c-.21-.27-.21-.54.07-1.09,0-.07.07-.14.07-.2.14-.41.34-.82.55-.88.07,0,.21,0,.27.14.41.48.21.88-.07,1.36-.14.2-.21.41-.27.68-.14.2-.21.34-.27.34ZM7.39,61.86c-.07.2-.14.27-.21.27-.14,0-.21-.14-.27-.27l-.07-.07c-.21-.27-.21-.54.07-1.09.07-.07.07-.2.14-.27.14-.34.27-.68.41-.75.07,0,.14,0,.27.14.41.48.27.88,0,1.36-.14.2-.21.48-.34.68ZM8.07,63.83c-.14,0-.27-.07-.41-.27-.21-.27-.27-.68-.07-1.16.07-.14.07-.27.14-.41.07-.34.14-.61.27-.61.07,0,.14,0,.21.14.41.48.41,1.02.07,1.97,0,.2-.07.34-.21.34ZM9.3,64.85v.14c-.07.27-.07.41-.21.41s-.27-.07-.55-.27c-.21-.14-.27-.54-.14-1.16.07-.14.07-.27.07-.41.07-.34.07-.54.21-.61.07,0,.14,0,.21.07.62.48.62.88.41,1.84ZM10.46,66.28v.14c0,.27,0,.41-.14.41-.14.07-.27-.07-.55-.27-.27-.14-.34-.54-.27-1.22v-.41c0-.34,0-.54.14-.61.07-.07.21,0,.21.07.62.54.62.95.62,1.9ZM11.63,67.43c0,.34,0,.48-.14.54-.14.07-.27,0-.62-.14-.27-.14-.34-.48-.27-1.09v-.41c0-.27,0-.41.07-.48h.21c.75.34.82.75.75,1.56ZM12.58,68.59c-.21.34-.41.34-.55.34-.21-.07-.27-.27-.27-.41s.07-.27.14-.34c.07-.2.21-.41.14-.88-.07-.27,0-.48.07-.48.07-.07.21,0,.34.2.21.27.41.95.14,1.56ZM13.06,68.04q-.07,0,0,0c-.14,0-.14-.07-.14-.14v-.27c0-.14,0-.2-.07-.27v-.14s.07-.07.14,0c.07,0,.21.07.21.27,0,.14-.07.48-.14.54ZM45.07,53.63s.21-.27.21-.88-.41-1.09-.41-1.09c.34-.68-.07-1.02-.07-1.02,0,0,.48-.27.21-.75-.48-1.02-1.23-.34-1.23-.34,0,0-.14-.14-.68-.14-.48.07-.62.41-.55.82,0,.34.34.75.34.75,0,0-.14.2-.07.48.07.27.21.61.21.61,0,0-.14.27-.14.75,0,.54.34.95.34.95,0,0-.21.07-.27.61-.07.54.21.95.21.95,0,0-.34.41-.41.88-.07.41.21.88.21.88,0,0-.27.34-.34.82-.14.41-.07,1.02-.07,1.02,0,0-.34.34-.48.61-.14.27-.07.95-.07.95,0,0-.41.41-.55.61-.14.2-.21.88-.21.88,0,0-.27.2-.55.61-.27.41-.27.95-.27.95,0,0-.34.14-.62.48-.27.34-.34.88-.34.88,0,0-.41.2-.62.41-.21.2-.34.68-.34.68,0,0-.27-.07-.41.07-.34.2-.41.41-.41.41-.82.07-.89.75-.89.75-.14.54.55,1.09.55,1.09,0,0,.14.61.82.88.68.27.75-.82.75-.82,0,0,.21.07.55-.2.34-.27.34-.82.34-.82,0,0,.34-.14.75-.34.41-.27.48-1.02.48-1.02,0,0,.27-.07.62-.34.41-.41.55-1.22.55-1.22,0,0,.27-.2.55-.54.48-.61.27-1.22.27-1.22,0,0,.55-.27.68-.54.27-.41.14-1.16.14-1.16,0,0,.27-.2.48-.61.21-.41.07-1.22.07-1.22,0,0,.34-.2.48-.68.21-.61-.07-1.22-.07-1.22,0,0,.14-.07.34-.75.21-.68-.07-1.16-.07-1.16,0,0,.21-.27.27-.75.07-.34-.27-.95-.27-.95ZM44.18,49.83c0-.07.07-.14.14-.14.14,0,.27,0,.27.14.07.14.07.2.07.27s-.07.07-.07.07c0,0-.21-.2-.34-.27-.07,0-.07-.07-.07-.07ZM42.95,50.64c-.14-.14-.21-.34-.14-.54.07-.14.21-.27.41-.27.14,0,.41,0,.68.27.48.41.55.82.55.82,0,.07,0,.14-.07.14s-.21,0-.27-.14c-.27-.27-.75-.27-.89-.2-.07,0-.21,0-.27-.07ZM43.29,51.25c.07-.14.14-.27.27-.27.27-.07.62.2.89.48.34.34.55.68.48.95v.14c0,.14-.07.34-.21.34-.07,0-.21-.07-.34-.2-.21-.27-.48-.41-.68-.54-.41-.14-.62-.34-.41-.88ZM37.27,67.37c0,.07-.07.2-.07.27v.27c0,.07-.07.14-.07.14h-.07c-.07-.07-.14-.41-.14-.54s.14-.2.21-.27h.14v.14ZM38.03,68.93c-.14,0-.27,0-.55-.34-.34-.61-.07-1.36.21-1.63.14-.14.27-.27.34-.2.14.07.14.2.07.48-.07.48,0,.68.14.88.07.14.07.2.14.34-.07.2-.14.41-.34.48ZM39.12,67.77c-.34.14-.48.2-.62.14-.14-.07-.14-.2-.14-.48v-.07c0-.82,0-1.22.75-1.63.07-.07.14-.07.21,0,.14.07.07.27.07.48v.41c.07.68,0,1.09-.27,1.16ZM40.28,66.62c-.27.2-.48.27-.55.27-.07-.07-.14-.2-.14-.41v-.14c-.07-.95-.07-1.36.62-1.9,0,0,.14-.07.21-.07.14.07.14.27.14.61v.41c.07.61,0,1.09-.27,1.22ZM41.51,65.12c-.27.2-.41.27-.55.27-.14-.07-.14-.2-.21-.41v-.14c-.21-.95-.27-1.36.34-1.9.07-.07.14-.07.21-.07.14.07.14.27.21.61,0,.14.07.27.07.41.14.68.14,1.09-.07,1.22ZM42.34,63.56c-.14.2-.27.27-.41.27s-.21-.14-.27-.34c-.34-.95-.27-1.56.07-1.97.07-.07.14-.14.21-.14.14,0,.21.27.27.61.07.14.07.27.14.41.34.48.21.95,0,1.16ZM43.22,61.79l-.07.07c-.07.14-.21.27-.27.27s-.14-.14-.21-.27c-.07-.27-.21-.48-.27-.61-.27-.54-.41-.88,0-1.36.07-.07.21-.14.27-.14.21.07.27.34.41.75.07.14.07.2.14.27.14.48.21.82,0,1.02ZM43.84,60.09l-.07.07c-.07.14-.21.27-.27.27s-.14-.14-.21-.27c-.07-.27-.21-.48-.27-.68-.27-.54-.48-.88-.07-1.36.07-.07.14-.14.27-.14.27.07.41.48.55.88,0,.07.07.14.07.2.21.48.21.82,0,1.02ZM44.39,58.39l-.07.07c-.07.14-.21.27-.27.27s-.14-.14-.21-.27c-.07-.27-.21-.54-.34-.75-.27-.54-.48-.95-.14-1.43.07-.07.14-.14.27-.14.27.07.55.68.75,1.09l.07.07c.07.48.07.82-.07,1.09ZM44.73,56.22c0,.07-.07.07-.07.14-.07.14-.14.34-.27.34-.07,0-.14-.07-.27-.2-.14-.27-.27-.41-.41-.61-.34-.41-.62-.82-.27-1.56q.07-.07.14-.14c.27,0,.75.68.89.95.21.48.41.82.27,1.09ZM44.87,54.52s0,.07-.07.07c-.07.14-.14.27-.27.34-.07,0-.21-.07-.27-.27-.14-.27-.34-.48-.48-.68-.34-.41-.62-.75-.41-1.29.07-.07.07-.14.21-.14.21,0,.48.27.89.82.27.41.55.82.41,1.16Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M75.58,30.73h4.17v9.04l7.45-9.04h5.13l-8.55,9.92,8.82,11.15h-5.4l-7.45-9.79h-.07v9.79h-4.17v-21.07h.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M108.68,43.44l-7.52-12.71h4.86l4.86,8.84,4.99-8.84h4.38l-7.39,12.71v8.29h-4.17v-8.29Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M140.82,34.6c-1.3-.61-2.74-.95-4.24-.95s-3.28.61-3.28,2.92c0,3.67,9.1,2.11,9.1,9.18,0,4.62-3.62,6.39-7.8,6.39-2.26,0-3.28-.27-5.27-.82l.34-3.81c1.44.75,3.01,1.29,4.65,1.29s3.69-.82,3.69-2.72c0-4.01-9.1-2.38-9.1-9.38,0-4.69,3.62-6.46,7.25-6.46,1.78,0,3.42.27,4.99.75l-.34,3.6Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M158.95,34.06h-5.95v-3.33h16v3.33h-5.95v17.74h-4.17v-17.74h.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M178.58,30.73h4.45l5.27,16.59h.07l5.27-16.59h4.1l-6.98,21.07h-5.13l-7.04-21.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M209.01,30.73h12.24v3.33h-8.07v5.17h7.39v3.33h-7.39v5.91h8.14v3.33h-12.24v-21.07h-.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M234.52,30.73h4.51c4.45,0,9.71-.14,9.71,5.71,0,2.45-1.64,4.55-4.24,4.89v.07c1.09.07,1.78,1.22,2.19,2.18l3.35,8.23h-4.65l-2.46-6.59c-.62-1.56-1.1-2.18-2.87-2.18h-1.37v8.77h-4.17v-21.07ZM238.69,39.7h1.37c2.05,0,4.38-.27,4.38-2.92s-2.32-2.79-4.38-2.79h-1.37v5.71Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M262.36,30.73h4.17v9.04l7.45-9.04h5.13l-8.55,9.92,8.82,11.15h-5.4l-7.45-9.79h-.07v9.79h-4.17l.07-21.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M290.74,30.73h12.24v3.33h-8.07v5.17h7.39v3.33h-7.39v5.91h8.07v3.33h-12.24v-21.07Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M319.95,34.06h-5.95v-3.33h16v3.33h-5.95v17.74h-4.17v-17.74h.07Z'%20style='fill:%20%2300066d;'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3cpath%20d='M356.82,47.88s2.19,2.31,5.52,2.31c2.31,0,4.2-1.38,4.2-3.66,0-5.31-10.52-3.96-10.52-10.49,0-3.03,2.67-5.67,6.57-5.67,3.66,0,5.64,2.04,5.64,2.04l-1.02,1.74s-1.86-1.8-4.62-1.8-4.44,1.77-4.44,3.63c0,5.01,10.52,3.57,10.52,10.49,0,3.15-2.43,5.7-6.39,5.7-4.32,0-6.69-2.7-6.69-2.7l1.23-1.59Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M376.57,30.74h11.87v1.86h-9.8v7.68h8v1.86h-8v7.82h10.34v1.86h-12.41v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M396.99,30.74h2.07v19.22h9.77v1.86h-11.84v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M411.38,30.74h2.22l5.85,16.01c.39,1.08.81,2.73.81,2.73h.06s.42-1.65.81-2.73l5.85-16.01h2.22l-7.83,21.08h-2.16l-7.83-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M435.91,30.74h7.2c3.33,0,5.7,2.01,5.7,5.31,0,2.19-1.05,3.78-2.67,4.59v.06c2.16.6,3.54,2.67,3.54,5.22,0,3.75-2.79,5.91-6.33,5.91h-7.44v-21.08ZM443.1,39.88c2.13,0,3.57-1.5,3.57-3.69s-1.35-3.6-3.6-3.6h-5.1v7.29h5.13ZM443.37,49.95c2.55,0,4.14-1.59,4.14-4.11s-1.71-4.17-4.17-4.17h-5.37v8.27h5.4Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M457.97,30.74h11.87v1.86h-9.8v7.68h8v1.86h-8v7.82h10.34v1.86h-12.41v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M483.13,32.6h-7.58v-1.86h17.21v1.86h-7.55v19.22h-2.07v-19.22Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M496.29,45.07h2.07v.78c0,3.24,1.95,4.41,3.87,4.41s3.84-1.08,3.84-4.35v-13.31h-5.16v-1.86h7.23v15.17c0,4.56-3.03,6.27-5.94,6.27s-5.91-1.74-5.91-6.27v-.84Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M517.3,30.74h11.87v1.86h-9.8v7.68h8v1.86h-8v7.82h10.34v1.86h-12.41v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M537.72,30.74h2.01l10.76,15.17c.72,1.05,1.74,2.85,1.74,2.85h.06s-.18-1.74-.18-2.85v-15.17h2.07v21.08h-2.01l-10.76-15.17c-.72-1.05-1.74-2.85-1.74-2.85h-.06s.18,1.74.18,2.85v15.17h-2.07v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M563.59,30.74h2.07v21.08h-2.07v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M575.08,30.74h2.01l10.76,15.17c.72,1.05,1.74,2.85,1.74,2.85h.06s-.18-1.74-.18-2.85v-15.17h2.07v21.08h-2.01l-10.76-15.17c-.72-1.05-1.74-2.85-1.74-2.85h-.06s.18,1.74.18,2.85v15.17h-2.07v-21.08Z'%20style='fill:%20%2300066d;'/%3e%3cpath%20d='M610.15,30.38c4.89,0,7.49,2.46,7.49,2.46l-1.11,1.56s-2.46-2.1-6.3-2.1c-5.1,0-8.54,3.93-8.54,8.93s3.57,9.02,8.36,9.02c4.11,0,6.63-3.09,6.63-3.09v-3.57h-3.6v-1.86h5.58v10.07h-1.92v-1.59c0-.45.03-.9.03-.9h-.06s-2.43,2.85-6.87,2.85c-5.76,0-10.31-4.65-10.31-10.91s4.56-10.88,10.61-10.88Z'%20style='fill:%20%2300066d;'/%3e%3c/g%3e%3c/svg%3e", R6 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='152'%20height='110'%20fill='none'%3e%3cg%20clip-path='url(%23a)'%3e%3cmask%20id='b'%20width='152'%20height='110'%20x='0'%20y='0'%20maskUnits='userSpaceOnUse'%20style='mask-type:luminance'%3e%3cpath%20fill='%23fff'%20d='M152%200H0v109.662h152z'/%3e%3c/mask%3e%3cg%20fill='%23fff'%20mask='url(%23b)'%3e%3cpath%20d='M50.674%2054.655c.022%2018.174%2015.822%2026.29%2025.226%2029.51l.11.044.111-.043c4.67-1.676%2011.33-4.743%2016.641-9.86%205.687-5.491%208.563-12.086%208.563-19.651V8.514l-.154-.089C92.939%202.823%2084.464%200%2076.011%200%2067.58%200%2059.105%202.823%2050.829%208.425l-.155.089v46.141m.509-45.7C59.37%203.44%2067.713.662%2076.01.662c8.32%200%2016.662%202.8%2024.828%208.315l-.155-.265v45.965c0%207.366-2.81%2013.807-8.365%2019.167-5.222%205.05-11.816%208.072-16.419%209.726h.221c-9.25-3.154-24.761-11.116-24.783-28.893V8.712z'/%3e%3cpath%20d='M65.478%2019.41c-2.898%201.102-4.868%202.425-5.288%202.8-.908.86-.554%201.633-.554%201.677h.089s-.044-.64.73-1.39c.332-.33%202.213-1.61%205.156-2.735zM76.764%2017.336s-.376-.022-.642-.022c-.265%200-.664.022-.664.022-2.589.132-6.04.75-9.072%201.764l.11.353c2.988-1.014%206.418-1.61%208.962-1.742%200%200%20.31-.022.642-.022.31%200%20.642.022.642.022%202.567.132%205.975.728%208.984%201.742l.11-.353c-3.031-1.036-6.483-1.632-9.072-1.764M86.744%2019.41c2.898%201.102%204.868%202.425%205.289%202.8.907.86.553%201.633.553%201.677h-.089s.044-.64-.73-1.39c-.332-.33-2.213-1.61-5.156-2.735z'/%3e%3cpath%20d='M95.33%2020.556c-1.44-1.963-4.626-2.625-7.746-2.823-.154-3.154-5.864-3.375-10.268-2.537-.442-.595-1.903-.573-2.367%200-4.404-.838-10.135-.64-10.268%202.537-3.12.176-6.306.86-7.745%202.823-1.416%201.941%201.372%203.904%201.372%203.904l.62-.53s-4.67-3.77%205.842-5.646c.509%201.39%201.482%202.052%201.482%202.052l.532-.375s-3.165-5.933%208.165-4.059l.686%202.426s-.023-.132.221-.11c0%200-.31-2.25-.221-2.492.132-.331.885-.331%201.018%200%20.088.22-.222%202.492-.222%202.492.244%200%20.222.11.222.11l.686-2.426c11.33-1.874%208.165%204.059%208.165%204.059l.531.375s.974-.662%201.483-2.052c10.489%201.875%205.842%205.647%205.842%205.647l.62.529c-.045%200%202.765-1.963%201.35-3.904m-36.867%203.308.11.11v.023c-.021%200-.11-.088-.287.044-.199-.132-.442-.33-.642-.573-1.239-1.434-2.168-4.61%206.86-5.404-9.626%201.72-6.66%205.183-6.04%205.8m8.01-3.925q0%20.033%200%200c0%20.132-.243-.023-.243.088v.022c-.686-.75-1.062-1.566-1.062-2.316-.044-1.875%202.124-3.419%208.077-2.448.11.022.221.022.332.044h-.11c.376.066.774.132%201.194.22-10.71-1.213-8.652%203.353-8.187%204.39m19.607.132c0-.022%200-.066-.022-.066a.3.3%200%200%200-.067.088c.044-.177-.287.044-.244-.132%200-.022.022-.045.022-.067-.022-.022-.022-.044-.022-.066.465-1.036%202.59-5.492-8.098-4.256a21%2021%200%200%201%201.017-.221h-.022.045c4.89-.949%207.39.022%208.099%201.478.199.352.266.772.221%201.169%200%20.705-.354%201.433-.93%202.073m7.943%203.97c-.021%200-.021-.022-.043-.022-.023%200-.023.022-.045.022-.067-.044-.11-.066-.155-.066-.022%200-.044.022-.044.022l.022-.022c-.066%200-.089.022-.11.022l.11-.11c.022%200%20.067.022%200%200%20.265-.265.863-.883.996-1.677.177-1.323-.93-3.065-6.948-4.146%2010.643.926%207.457%205.183%206.217%205.977'/%3e%3cpath%20d='M95.196%2024.637c-.022-.023-.354-.375-.973-.64-3.187-1.434-2.413%201.786-2.435%202.051-.243-.816-2.213-2.095-2.7.199-.508%202.426%201.483%201.764%201.77%201.808-.464.684-1.46.684-3.584-.176-2.434-.993-2.854-1.632-2.3-2.846.22%201.456%201.99%201.81%202.566.375%201.305-3.22-1.438-2.315-1.815-2.183.443-.728%201.173-1.125%201.195-1.985.044-1.39-1.903-1.72-2.567-1.235-1.04.794-.398%202.669-.398%202.867-.244-.309-2.125-2.823-2.766.618-.288%201.521%201.394%202.205%202.412%201.014-.177%201.213-1.239%201.632-3.74%201.235-3.717-.573-2.987-2.36-2.987-2.36.044.066%201.46%202.338%202.611-.264%201.261-2.868-2.036-1.985-2.523-1.346.288-1.323%201.505-2.051.797-2.911-.885-1.08-2.611-1.015-3.364%200-.664.904.51%201.588.797%202.911-.465-.64-3.784-1.522-2.523%201.346%201.151%202.602%202.567.33%202.612.264%200%200%20.73%201.787-2.988%202.36-2.5.397-3.562-.022-3.74-1.235%201.04%201.191%202.7.507%202.413-1.014-.642-3.441-2.523-.927-2.766-.618%200-.198.663-2.073-.399-2.867-.664-.485-2.677-.155-2.567%201.235.089.904.93%201.323%201.195%202.029-.376-.11-3.12-1.08-1.814%202.14.575%201.433%202.345%201.08%202.567-.375.553%201.213.132%201.852-2.302%202.845-2.124.86-3.12.882-3.584.176.287-.066%202.235.662%201.77-1.808-.42-2.294-2.479-1.037-2.7-.221%200-.265.752-3.485-2.434-2.051-.62.287-.952.64-.974.64l-.11.11.088.132%205.554%207.654s4.692-3.904%2013.543-3.904%2013.542%203.904%2013.542%203.904l5.555-7.654.088-.132zm-.84.64c-.643.837-4.581%206.219-4.626%206.263l-.155.198-.221-.132c-1.859-1.037-6.86-3.485-13.254-3.507-6.396.022-11.397%202.448-13.255%203.507l-.222.132-.155-.198c-.044-.044-3.983-5.426-4.625-6.264l-.066-.088v-.11c0-.044.044-.375.443-.64.73-.507%201.438-.375%201.66-.243.42.243.331%202.074.353%202.25.354-.485.93-1.147%201.505-1.103.398.022.708.31.93.838.354.905.044%201.39-.222%201.566-.42.243-1.04.199-1.527.022.089.199.2.53.42.706.62.485%201.86.353%203.298-.132%201.704-.574%202.81-1.412%202.987-2.25a1.79%201.79%200%200%200-.398-1.478c-.221.464-.642%201.324-1.173%201.368-.376.022-.708-.22-.996-.75-.398-.75-.464-1.28-.155-1.632.399-.463%201.837-.199%201.992-.133.177.067-.089-.264-.177-.374-.465-.574-.907-.97-.907-1.478%200-.463.199-.838.553-1.037.465-.264%201.173-.22%201.483.066.287.265.331.86.132%202.162-.022.132-.199.728.044.397.244-.309%201.416-1.28%202.014-1.037.398.155.62.618.62%201.412%200%20.551-.155.904-.487%201.08-.51.243-1.372-.198-1.792-.463-.045.331%200%20.794.287%201.191.487.618%201.704.949%203.364.794%201.725-.176%202.721-.727%203.208-1.433.31-.441.554-1.213.355-1.897-.244.353-1.151%201.103-1.594%201.08-.398-.021-.708-.33-.951-.926-.222-.573-.2-1.169.066-1.433.442-.397%201.748.22%202.39.485-.067-.287-.155-.53-.266-.882a3%203%200%200%200-.287-.684c-.155-.309-.465-.684-.244-1.08.244-.464.73-.729%201.328-.729.597%200%201.084.265%201.328.728.221.397-.089.772-.244%201.081a6%206%200%200%200-.287.684c-.11.353-.2.595-.266.882.642-.265%201.947-.904%202.39-.485.288.242.31.838.066%201.433-.243.596-.553.927-.951.927-.443.022-1.35-.728-1.616-1.081-.154%201.059.222%201.676.354%201.897.51.706%201.483%201.279%203.21%201.433%201.659.155%202.876-.176%203.362-.794.288-.375.377-1.036.332-1.345-.442.265-1.328.882-1.836.64-.332-.155-.487-.53-.487-1.081.022-.794.222-1.257.62-1.412.597-.242%201.903%201.125%202.014.927.044-.11-.023-.331-.023-.463-.088-.86-.11-1.765.265-2.03.355-.242.952-.308%201.417-.044.354.199.553.552.553%201.037%200%20.507-.221.772-.708%201.345-.089.11-.597.53-.354.463.265-.066%201.57-.286%201.97.177.31.353.265.882-.155%201.632-.288.53-.62.772-.996.75-.531-.044-.93-.948-1.151-1.412-.22.31-.597.949-.487%201.5.177.838%201.35%201.698%203.054%202.272%201.438.485%202.633.595%203.275.132.243-.176.398-.551.487-.75-.487.177-1.129.243-1.594.088-.31-.11-.553-.529-.243-1.632.155-.551.531-.816.93-.838.553-.044%201.106.508%201.46.993q.034-.265.066-.53c-.088-.771.111-1.345.532-1.588.221-.132.708-.286%201.46.221.398.287.443.618.443.64v.11zM76.123%208.425a3.03%203.03%200%200%200-3.032%203.022c0%201.367.907%202.514%202.168%202.89l.155.573a1.7%201.7%200%200%201%20.354-.088c-.022-.133-.022-.265-.044-.375.133.022.265.022.376.022.133%200%20.265%200%20.377-.022%200%20.11-.023.242-.045.375.11.022.244.044.354.088l.155-.552a3.01%203.01%200%200%200%202.169-2.889c.043-1.698-1.328-3.044-2.987-3.044m-.2.508s.088-.022.2-.022c.11%200%20.22.022.22.022v2.757h-.42zM73.6%2011.425c0-1.28.951-2.338%202.19-2.492v2.735H73.6zm2.523%202.514a2.48%202.48%200%200%201-2.346-1.61h4.713c-.376.927-1.306%201.61-2.367%201.61M78.578%2012a1.4%201.4%200%200%201-.066.198h-4.78s-.022-.044-.066-.199c-.022-.132-.044-.176-.044-.176h5c0-.022%200%20.044-.044.176m-2.124-.332V8.956a2.51%202.51%200%200%201%202.19%202.492c0%20.088%200%20.154-.022.243z'/%3e%3cpath%20d='M76.83%205.117V3.308h-1.439v1.787h-2.013v1.434h2.013V8.69l.134-.022s.398-.044.597-.044c.2%200%20.553.044.553.044l.133.022V6.529h2.013V5.095zM65.744%2045.899l8.298.661.398-1.103h-.022l-.155.463-8.52-.419s-.464%200-.464-.573c0-.551.465-.595.465-.595l8.984-.287.575-6.683c.022-.309.31-.507.819-.507.465%200%20.752.198.774.507l.553%206.683%209.073.287s.465.022.465.595c0%20.552-.465.574-.465.574l-8.541.418.22.662%208.299-.662c.089%200%201.018-.066%201.018-.904%200-.948-.708-1.058-1.129-1.08l-8.32-.464c-.067-.86-.376-4.146-.443-5.558-.066-1.345-.885-1.632-1.239-1.698%200%200-.088-.022-.177-.022h-.177c-.088%200-.177.022-.177.022-.354.066-1.173.353-1.24%201.698-.065%201.39-.353%204.698-.441%205.558l-8.32.463c-.443.023-1.13.133-1.13%201.081%200%20.816.93.883%201.019.883m21%2014.248%201.327.595s-.907%201.676-4.138%204.39l.244.396c.022%200%20.022-.022.043-.022%202.79-2.007%204.272-4.962%204.272-4.962l-1.151-.397%202.39-.927c-.399%201.28-1.46%204.456-5.001%207.058-.089.066-.155.11-.244.177l-.089-.31c-.088.067-.198.133-.287.2l.266.198c-2.479%201.588-5.532%202.338-8.255%202.338-2.765-.022-5.885-.794-8.386-2.47l.244-.177c-.089-.066-.177-.11-.244-.176l-.066.242a.4.4%200%200%201-.11-.088c-3.541-2.603-4.67-5.757-5.068-7.014l2.39.927-1.151.397s1.328%202.889%204.138%204.896l.221-.419c-3.23-2.735-3.939-4.279-3.939-4.279l1.328-.595-3.408-1.434s.708%204.786%205.2%208.072c2.678%201.986%205.798%203.154%208.808%203.177h.044c3.031-.023%206.13-1.191%208.807-3.177%204.47-3.286%205.178-8.072%205.178-8.072zm-8.675%207.344c.93%200%203.452-.463%204.957-1.279l.487-.287.11-.066-.22-.419-.62.353c-1.46.772-3.962%201.08-4.603%201.08-.642%200-.797-.154-.797-.793l.023-4.919-.775-.463v.066l.287.133v5.58c.022.926.687%201.014%201.151%201.014m-4.027-.617c-.642%200-3.143-.287-4.603-1.081l-.642-.353-.221.42h.022l.62.352c1.504.816%204.027%201.28%204.957%201.28.464%200%201.128-.089%201.128-1.015v-5.603l.288-.132v-.044l-.775.463.022%204.919c0%20.64-.155.794-.796.794'/%3e%3cpath%20d='M89.908%2050.398H79.663l-3.32-9.374-.22-.684-.222.684-3.453%209.374H62.204l.62.419%208.01%205.734-3.363%2010.102%208.652-6.176%208.52%206.264-3.364-10.19%208.01-5.734zm-9.383%205.889-.154-.044.022.088.154.044v-.022l3.142%208.999-1.04-1.456.178.552.708.992-7.325-5.757v-.286l-.088-.066-.11.066v.286l-7.524%205.69.907-1.234-.42.309.088-.243-.73.992%203.186-8.888h-.022l-7.811-5.36%201.106.353-.243-.176h.332l-1.151-.375%209.095.22.132.155h.045l-.088-.11%203.12-9.485v1.588l.088-.264.11.33v-1.698l2.966%209.352-.2.265h.2l.11-.155%209.029-.22-1.129.375h.266l-.288.198%201.306-.419z'/%3e%3cpath%20d='m63.398%2050.839%2012.68%204.169-.044-.044%207.722%2010.807.155-.088-7.723-10.83-.022-.022h-.021l-12.68-4.168z'/%3e%3cpath%20d='m68.266%2065.683%207.922-10.72-.044.044%2012.834-4.278-.066-.177-12.834%204.28h-.023l-.022.021-7.922%2010.72z'/%3e%3cpath%20d='M76.01%2041.355v18.373h.2V41.355z'/%3e%3cpath%20d='m70.856%2056.618%205.289-1.61H76.1l5.112%201.61.044-.177-5.111-1.61-.022-.022-.023.022-5.288%201.61z'/%3e%3cpath%20d='m72.383%2050.442%203.65%204.521.09.11.065-.11%203.541-4.521-.155-.11-3.54%204.521h.154l-3.65-4.521zM64.815%2067.668c-.31%200-.62.044-.908.154a.6.6%200%200%201%20.2.22%202.5%202.5%200%200%201%20.708-.11%202.46%202.46%200%200%201%202.456%202.448v.155c.066.022.133.044.2.11%200-.11.021-.198.021-.286%200-1.5-1.217-2.691-2.677-2.691m1.66%205.403a3.2%203.2%200%200%201-1.682.464%203.206%203.206%200%200%201-3.21-3.198c0-.287.045-.596.134-.883a.7.7%200%200%201-.155-.11.6.6%200%200%201-.155-.176%203.7%203.7%200%200%200-.221%201.212c0%201.985%201.637%203.618%203.629%203.618.752%200%201.438-.22%202.013-.618-.022%200-.022-.022-.044-.022a1.3%201.3%200%200%201-.31-.287m-6.197-26.489a1%201%200%200%201-.199.309v.022c.598.596.93%201.39.93%202.25a3.204%203.204%200%200%201-3.054%203.198c-.044.176-.11.353-.133.463%201.992-.022%203.607-1.632%203.607-3.617a3.58%203.58%200%200%200-1.15-2.625m-2.301-.97H57.8a3.625%203.625%200%200%200-3.63%203.617c0%201.28.665%202.404%201.66%203.044-.066-.22-.066-.42-.022-.552l-.022-.022a3.17%203.17%200%200%201-1.217-2.492%203.206%203.206%200%200%201%203.209-3.198h.022l.066-.199a.43.43%200%200%201%20.111-.198m6.838%2021.151c-.664%200-1.284.177-1.815.486.133.11.221.198.266.286h.022a3.35%203.35%200%200%201%201.527-.397%203.206%203.206%200%200%201%203.208%203.199c0%20.264-.022.53-.088.771v.045c.066.021.221.043.398.154.089-.287.133-.618.133-.927a3.66%203.66%200%200%200-3.651-3.617m8.408-29.444h-.044c-.133.022-.287.022-.398.022a3.58%203.58%200%200%200%201.77%201.83c.022-.154.022-.33.022-.485l-.022-.022a3%203%200%200%201-1.328-1.345M55.808%2047.376a2.67%202.67%200%200%200-.708%201.787c0%20.617.222%201.19.598%201.676q0-.099.066-.198c0-.023.022-.023.022-.045a2.36%202.36%200%200%201-.442-1.39c0-1.124.774-2.094%201.836-2.36.067-.131.222-.242.355-.33a2.7%202.7%200%200%200-1.727.86m31.578%2025.43c-.288%200-.576-.044-.841-.153-.045.043-.066.088-.11.131l-.023.023c.31.132.642.176.974.176a2.67%202.67%200%200%200%202.678-2.669%202.8%202.8%200%200%200-.111-.75h-.067s0%20.2-.088.42c.022.132.022.242.022.375.022%201.367-1.084%202.448-2.434%202.448m6.66-20.996h.044c.023-.023.023-.045.023-.045s-.045-.066-.11-.154a2.445%202.445%200%200%201-2.037-2.404c0-.53.177-1.015.465-1.412a2%202%200%200%201-.133-.242%202.68%202.68%200%200%200-.553%201.61%202.615%202.615%200%200%200%202.301%202.647m-36.113.021h.022a2.683%202.683%200%200%200%202.523-2.668%202.65%202.65%200%200%200-.487-1.522.8.8%200%200%201-.155.22c.265.397.42.86.42%201.346%200%201.28-.995%202.338-2.257%202.426a.5.5%200%200%201-.088.132s0%20.044.022.066m6.882%2021.174c.265%200%20.53-.044.796-.11-.066-.044-.133-.088-.155-.154-.199.043-.398.088-.62.088a2.46%202.46%200%200%201-2.455-2.449v-.066c-.111-.11-.155-.264-.2-.397-.022.155-.044.287-.044.442%200%201.455%201.195%202.646%202.678%202.646m9.205-35.797c-.11-.022-.199-.044-.288-.066.2.375.51.706.886.97v-.242a2.8%202.8%200%200%201-.598-.662m20.004%2015.13a3.184%203.184%200%200%201-2.832-3.175c0-.882.354-1.699.995-2.316-.044-.066-.132-.177-.199-.33a3.608%203.608%200%200%200%202.213%206.286c-.066-.09-.133-.266-.177-.464m2.832-3.131c0%20.595-.22%201.147-.575%201.566a.6.6%200%200%201%200%20.286c.51-.507.797-1.19.797-1.896a2.7%202.7%200%200%200-2.28-2.647c.134.088.266.199.333.353.995.33%201.725%201.257%201.725%202.338M90.44%2069.344a3.206%203.206%200%200%201-3.054%204.19%203.16%203.16%200%200%201-1.815-.573.84.84%200%200%201-.42.243%203.625%203.625%200%200%200%205.864-2.845c0-.508-.111-.993-.31-1.434a.85.85%200%200%201-.265.419m5.576-17.976c.022.022.022.022.022%200zM94.4%2045.612h-.088c.044.044.067.11.11.176l.067.199h.022c.84.022%201.615.375%202.213.97.597.596.907%201.39.907%202.228%200%201.036-.509%202.029-1.372%202.624h-.022c.022.155%200%20.353-.11.596a3.62%203.62%200%200%200%201.925-3.198c-.023-1.985-1.66-3.595-3.652-3.595M78.246%2034.738a.4.4%200%200%201%20.288.044%202.7%202.7%200%200%200-2.434-1.566c-1.084%200-2.08.662-2.478%201.676a.46.46%200%200%201%20.332-.132%202.45%202.45%200%200%201%202.146-1.257%202.39%202.39%200%200%201%202.146%201.235m.266%202.404a4%204%200%200%201-.332.066c-.154.221-.332.442-.553.596v.265c.377-.22.664-.552.885-.927m.509.177a3.17%203.17%200%200%201-1.328%201.367h-.022c0%20.155.022.287.022.463a3.62%203.62%200%200%200%201.726-1.808c-.088%200-.199%200-.31-.022zm-2.92-5.007a3.634%203.634%200%200%200-3.585%203.022c.154-.11.287-.177.42-.199.022-.022.022-.044.022-.044.376-1.39%201.682-2.382%203.142-2.382%201.438%200%202.744%201.015%203.12%202.426h-.022c.133%200%20.288.044.465.155-.332-1.72-1.793-2.978-3.563-2.978m8.054%2038.025a3.206%203.206%200%200%201%204.58-2.89l.044.022c.067-.066.156-.176.288-.264a3.7%203.7%200%200%200-1.703-.42%203.625%203.625%200%200%200-3.63%203.618c0%20.353.045.705.155%201.036.089-.066.177-.132.266-.176.044-.022.067-.044.11-.044v-.045a4%204%200%200%201-.11-.837m3.23-2.405c.178%200%20.377.022.554.067.066-.067.133-.155.244-.199a2.3%202.3%200%200%200-.775-.11%202.67%202.67%200%200%200-2.678%202.669c0%20.22.022.44.088.661a1.5%201.5%200%200%201%20.178-.198%202.433%202.433%200%200%201%202.39-2.89'/%3e%3cpath%20d='M89%2042.06s.09.332.399.706c.31.375.819.574.819.574s.066.375.287.75.752.617.752.617.067.464.2.706c.132.265.553.574.553.574s-.133.22-.045.463c.133.375.31.507.31.507-.177.86.465%201.103.465%201.103.51.287%201.217-.199%201.217-.199s.664.089%201.107-.507c.464-.595-.576-.97-.576-.97s.11-.199-.066-.596c-.177-.397-.664-.573-.664-.573s0-.331-.132-.816c-.134-.486-.864-.794-.864-.794s.044-.31-.133-.684c-.265-.551-.996-.882-.996-.882s-.11-.31-.376-.706c-.443-.64-1.084-.618-1.084-.618s-.132-.595-.332-.816c-.332-.353-1.062-.485-1.062-.485s-.088-.309-.465-.684c-.353-.353-1.195-.419-1.195-.419s-.088-.375-.486-.684c-.51-.375-1.195-.308-1.195-.308s-.023-.177-.62-.596c-.598-.419-1.151-.264-1.151-.264s-.2-.287-.597-.508c-.51-.287-1.195-.132-1.195-.132s-.2-.309-.797-.485c-.62-.177-1.194.088-1.194.088-.554-.507-1.019-.22-1.019-.22s-.088-.508-.62-.42c-1.128.177-.73%201.081-.73%201.081s-.199.11-.287.596c-.089.485.243.727.62.793.31.067.863-.11.863-.11s.177.199.464.22c.288.023.62%200%20.62%200s.2.2.708.332c.51.132%201.018-.022%201.018-.022s.022.198.509.419.974.088.974.088.31.44.774.661c.42.177.952.11.952.11s.287.332.663.596c.376.265.996.375.996.375s.2.441.465.684c.243.22.951.33.951.33s.288.508.465.707c.089.176.73.419.73.419m4.404%205.846c-.089.066-.443.022-.575-.067a.32.32%200%200%201-.177-.264c0-.044.022-.089.066-.11.022%200%20.066-.023.11.021.067.045.156.089.288.133.067.022.133.066.221.088.09.044.11.066.11.11-.02.044-.02.066-.043.089m.84-1.103c.155.044.332.22.332.419%200%20.11-.066.309-.486.397-.686.132-1.306-.331-1.55-.662-.11-.176-.154-.309-.088-.375.066-.088.243-.066.51.066.442.22.685.177.906.155.134-.022.244-.022.377%200m-.464-.97c.044.352.044.529-.044.617-.089.066-.222.044-.487-.044l-.066-.022c-.797-.22-1.173-.375-1.35-1.191-.022-.088%200-.177.044-.199.088-.088.265-.022.509.066.132.044.288.088.42.133.62.154.952.375.974.64m-.796-1.5c.11.352.154.529.066.617-.066.088-.221.044-.465-.022l-.11-.022c-.974-.243-1.328-.353-1.66-1.191-.022-.044-.044-.132%200-.199.088-.088.31-.022.642.067.132.044.288.088.442.11.642.154.996.353%201.085.64m-1.085-1.61c.11.33.155.485.088.595-.065.088-.22.066-.464.044h-.11c-.996-.088-1.372-.154-1.705-.926q-.065-.133%200-.199c.089-.11.333-.066.642-.022.155.022.288.044.443.044.641.066%201.017.199%201.106.463m-1.261-1.302c.133.199.176.33.133.441-.045.11-.177.155-.399.155-1.04.022-1.571-.177-1.925-.684-.067-.11-.088-.177-.044-.243.066-.132.354-.132.708-.11.155%200%20.332.022.465%200%20.465-.044.885.199%201.062.441M77.737%2035.4c.022-.133.088-.22.2-.243.132-.022.22-.022.287.022.022.022.044.044.044.066v.023l-.022.021s-.265.155-.332.265c-.044.044-.089.044-.089.044-.066-.022-.088-.11-.088-.198m.62%201.367c.022.088-.022.155-.09.22a.47.47%200%200%201-.552-.065.52.52%200%200%201-.155-.463c.022-.155.11-.375.42-.574.531-.353.952-.265.974-.243.044.022.089.067.089.133%200%20.088-.067.154-.222.242-.354.155-.509.596-.464.75m.597.11c-.133-.088-.199-.198-.177-.308.022-.265.398-.53.73-.706.487-.265.819-.309%201.085-.154.022.022.066.022.088.044.133.066.288.154.288.286%200%20.089-.089.177-.266.243-.31.132-.531.33-.708.463-.332.287-.553.463-1.04.133m1.46.331c-.088-.088-.11-.154-.088-.22.044-.199.398-.42%201.062-.64.42-.132.908-.264%201.173-.044.022.022.044.044.088.066.133.089.266.199.244.331-.022.088-.11.154-.31.199-.287.088-.553.198-.775.286-.53.22-.929.397-1.393.022m1.571.442c-.066-.045-.066-.11-.066-.155.066-.265.885-.485%201.173-.551.487-.11.885-.199%201.107.044.022.022.066.066.132.11.133.11.266.22.244.33-.022.09-.111.133-.288.177a4.4%204.4%200%200%200-.708.243c-.509.176-.93.353-1.594-.198m3.209.97c-.575.11-1.084.199-1.416-.33a.23.23%200%200%201-.022-.266c.132-.242.686-.308%201.283-.374h.089c.531-.045.863.044%201.04.286a.3.3%200%200%201%20.066.088c.11.11.222.265.155.375-.044.089-.155.133-.354.133-.288%200-.575.044-.841.088m.288.617c-.067-.11-.067-.198-.044-.264.11-.22.597-.243%201.04-.287.066%200%20.155%200%20.22-.022.532-.044.864.044%201.041.287.022.022.044.044.066.088.111.11.221.265.155.375-.044.088-.155.132-.353.132-.288%200-.554.044-.775.089-.553.088-1.018.154-1.35-.398m1.55%201.037c-.067-.11-.09-.198-.045-.264.088-.177.464-.199.84-.199.111%200%20.222%200%20.31-.022.531-.044.863.044%201.04.287.022.022.045.044.067.088.11.11.221.264.155.375-.045.088-.155.132-.354.132-.266%200-.488.044-.708.066-.553.044-.952.088-1.306-.463m-.643%2031.21s.11-.2-.11-.64c-.222-.442-.62-.442-.974-.287-.288.132-.62.596-.62.596s-.266-.067-.508.088c-.244.154-.51.375-.51.375s-.287-.044-.774.132c-.51.176-.819.618-.819.618s-.132-.155-.664-.044c-.531.11-.84.507-.84.507s-.51-.176-1.019-.088c-.442.088-.84.463-.84.463s-.443-.11-.886-.088c-.442%200-1.017.286-1.017.286s-.443-.242-.775-.287-.974.265-.974.265-.53-.242-.796-.309c-.266-.066-.908.133-.908.133s-.265-.221-.752-.331c-.464-.11-.995.022-.995.022s-.266-.265-.665-.44c-.398-.178-.973-.067-.973-.067s-.31-.33-.576-.464c-.265-.132-.774-.132-.774-.132s-.022-.264-.221-.397c-.332-.22-.553-.242-.553-.242-.377-.794-1.018-.618-1.018-.618-.576.066-.886.882-.886.882s-.575.309-.597%201.059%201.04.441%201.04.441.022.22.398.441c.377.22.863.066.863.066s.2.287.598.574c.398.308%201.172.154%201.172.154s.155.287.51.463c.553.287%201.327.133%201.327.133s.266.198.709.353c.73.243%201.239-.133%201.239-.133s.442.397.774.464c.487.088%201.15-.221%201.15-.221s.245.198.775.287c.487.088%201.217-.353%201.217-.353s.31.264.797.264c.62.023%201.15-.441%201.15-.441s.133.132.863.11c.73%200%201.085-.463%201.085-.463s.332.11.796.066c.576-.066%201.063-.595%201.063-.595s.354.132.93-.066c.618-.22.929-.772.929-.772.73.088.973-.42.973-.42s.377.376.753-.021c.796-.817-.067-1.324-.067-1.324m-19.982-.376c.044-.11.332-.286.51-.286.154-.023.243.044.287.11.022.044.044.088.022.133%200%20.021-.044.043-.11.043-.09%200-.178.022-.31.045a.8.8%200%200%201-.244.043c-.088.023-.133%200-.155-.021q-.033%200%200-.067m.244%201.17a1.1%201.1%200%200%201-.31.22c-.155.066-.398.022-.51-.132-.066-.089-.132-.287.156-.596.487-.53%201.261-.507%201.637-.375.2.067.31.155.288.265%200%20.11-.155.199-.465.242-.442.067-.642.243-.796.375m.663.75c-.243-.265-.354-.398-.331-.53.022-.11.154-.154.42-.265l.066-.022c.775-.287%201.173-.397%201.793.177.066.066.11.132.088.176-.022.11-.199.177-.464.243-.133.044-.288.088-.42.154-.576.243-.974.265-1.151.066m1.527.749c-.31-.22-.442-.353-.42-.463s.155-.154.376-.264l.11-.045c.93-.375%201.284-.485%202.037-.022.022.022.132.088.11.177-.022.132-.243.198-.553.308-.133.044-.288.089-.42.155-.598.264-.996.309-1.24.154m2.987.376c-.553.33-.951.44-1.172.286-.288-.198-.42-.309-.42-.42s.132-.175.353-.308l.089-.066c.863-.507%201.195-.662%201.925-.265.089.044.111.088.111.155%200%20.132-.221.242-.51.397-.11.066-.242.154-.376.22m.62.595c-.221-.067-.354-.177-.376-.287s.067-.243.244-.375c.84-.618%201.371-.794%201.969-.573.11.044.177.11.199.176.022.155-.221.309-.487.507-.132.088-.266.177-.376.265-.398.33-.863.375-1.173.287m2.987-.133c-.398.353-.73.486-1.017.375-.022%200-.067-.022-.111-.022-.155-.044-.332-.088-.354-.199-.022-.088.044-.176.2-.308q.297-.23.53-.463c.42-.397.73-.684%201.328-.441q.166.066.199.198c.022.199-.266.419-.553.64-.045.088-.133.154-.222.22m1.837.044c-.398.353-.73.486-1.018.376-.022%200-.066-.023-.11-.023-.155-.044-.332-.088-.355-.198-.022-.088.045-.176.2-.309a4.5%204.5%200%200%200%20.575-.53c.42-.418.73-.727%201.328-.485.11.045.177.11.177.199.044.243-.332.552-.664.838zm1.925-.154-.066.066c-.398.353-.73.485-1.018.376-.022%200-.067-.023-.11-.023-.156-.044-.333-.088-.355-.198-.021-.088.044-.177.2-.31.243-.175.442-.396.62-.572.42-.42.774-.794%201.35-.574.11.044.154.11.176.198.067.265-.354.662-.797%201.037m1.084.066h-.154c-.177%200-.354%200-.399-.11-.022-.066%200-.177.134-.308.177-.199.309-.42.442-.596.31-.486.531-.86%201.394-.794.088%200%20.11.044.133.088.088.242-.443.926-.62%201.147-.354.353-.62.64-.93.573m2.656-1.124c-.243.352-.575.75-.93.727h-.11c-.155%200-.332%200-.398-.11-.045-.088%200-.199.132-.353.2-.243.332-.485.465-.706.266-.485.487-.86%201.107-.816.132%200%20.177.067.199.11.11.177-.044.574-.465%201.148m1.815-.706c-.244.485-.487.727-.775.75-.022%200-.066%200-.11.022-.156.022-.333.044-.398-.045-.045-.066-.023-.198.066-.353.177-.308.243-.573.309-.793.111-.398.178-.684.752-.684.156%200%20.266.044.333.154.132.177-.022.618-.177.949m1.239-.927c-.222.596-.62.772-.641.772-.045%200-.112%200-.156-.044-.044-.066-.022-.176.044-.33.177-.332.045-.795-.088-.905-.066-.044-.089-.132-.044-.22.066-.155.287-.31.486-.265.177.022.31.132.399.264.066.133.132.376%200%20.728m.42.574c-.088.088-.177.154-.243.154-.045%200-.066-.022-.066-.022l-.022-.022.022-.022c.021-.066.11-.287.11-.419%200-.067.045-.088.067-.088.066-.022.132.044.177.11.066.088.043.22-.045.309M65.942%2039.899s.62-.11.996-.375c.376-.264.664-.595.664-.595s.531.066.952-.11c.464-.2.774-.662.774-.662s.487.132.974-.088c.487-.221.509-.42.509-.42s.509.177%201.017.023c.51-.133.709-.331.709-.331s.332.022.62%200a.75.75%200%200%200%20.464-.22s.531.176.863.11c.376-.089.708-.31.62-.795-.09-.485-.288-.595-.288-.595s.398-.904-.73-1.08c-.554-.089-.62.418-.62.418s-.487-.287-1.018.22c0%200-.575-.264-1.195-.087-.597.176-.796.485-.796.485s-.686-.155-1.195.132c-.399.22-.598.507-.598.507s-.553-.176-1.15.265c-.598.42-.62.596-.62.596s-.708-.067-1.195.308c-.398.31-.487.684-.487.684s-.863.088-1.195.42c-.376.374-.464.683-.464.683s-.73.132-1.062.485c-.222.243-.332.816-.332.816s-.642-.022-1.085.618c-.265.397-.376.706-.376.706s-.73.33-.996.882c-.177.375-.133.684-.133.684s-.708.308-.863.794c-.132.485-.132.816-.132.816s-.487.176-.664.573-.066.596-.066.596-1.018.375-.576.97c.465.596%201.107.507%201.107.507s.708.486%201.217.199c0%200%20.62-.243.464-1.103%200%200%20.177-.132.31-.507.066-.22-.044-.463-.044-.463s.398-.31.553-.574c.133-.264.2-.706.2-.706s.508-.264.752-.617c.22-.375.287-.75.287-.75s.51-.199.82-.574.397-.705.397-.705.62-.22.797-.42c.177-.198.465-.705.465-.705s.708-.11.951-.331c.2-.243.398-.684.398-.684m8.078-4.654c0-.022.022-.044.043-.066.045-.044.156-.044.288-.022.11.022.2.11.2.243%200%20.066-.023.176-.067.198-.022%200-.066.022-.088-.044-.09-.11-.333-.265-.333-.265l-.021-.022zm-.687.397c.022%200%20.443-.11.996.243.332.199.42.441.42.574a.6.6%200%200%201-.154.463.48.48%200%200%201-.553.066c-.09-.044-.133-.133-.09-.22.045-.155-.11-.618-.463-.795-.156-.088-.222-.154-.222-.242-.022-.044.044-.089.066-.089m-1.704.133c.045-.022.067-.044.089-.044.266-.155.598-.11%201.084.154.332.177.708.441.73.706%200%20.11-.043.22-.177.309-.464.33-.708.154-1.017-.11a2.6%202.6%200%200%200-.709-.464c-.177-.088-.265-.154-.265-.242-.044-.155.11-.243.265-.31m-1.969.595c.022-.022.067-.044.088-.066.266-.22.753-.088%201.173.044.664.22%201.018.441%201.063.64%200%20.044%200%20.132-.089.22-.465.397-.863.22-1.372-.022a3.5%203.5%200%200%200-.775-.286c-.199-.044-.287-.11-.31-.199-.044-.132.09-.242.222-.33m-1.704.728c.044-.044.089-.066.133-.11.221-.243.597-.155%201.106-.044.288.066%201.107.308%201.173.551%200%20.044%200%20.088-.066.155-.664.55-1.062.397-1.593.176a4.4%204.4%200%200%200-.709-.243c-.177-.044-.265-.088-.287-.176-.044-.11.11-.22.243-.309m-1.903.926c.022-.022.044-.066.067-.088.177-.242.508-.33%201.04-.286h.088c.575.044%201.15.11%201.283.374.045.089.023.177-.022.265-.332.53-.84.441-1.416.33a8%208%200%200%200-.84-.11c-.2%200-.31-.043-.355-.132-.066-.088.067-.22.155-.353m-6.572%209.815c-.155.089-.487.11-.575.067-.023-.023-.045-.045-.045-.067%200-.044.045-.066.111-.11.088-.044.155-.066.221-.088.11-.044.2-.088.288-.132.044-.045.088-.023.11-.023a.12.12%200%200%201%20.067.11c0%20.067-.044.177-.177.243m.265-.882c-.22.331-.863.794-1.549.662-.42-.088-.486-.287-.486-.397%200-.199.177-.375.332-.42.132-.043.243-.021.376%200%20.221.023.465.067.907-.154.266-.132.443-.154.509-.066.066.066.022.22-.089.375m.709-1.742c-.177.816-.553.97-1.35%201.19l-.066.023c-.266.066-.399.11-.487.044-.089-.088-.089-.265-.045-.618.045-.264.354-.485.974-.617.155-.044.31-.089.42-.133.244-.088.42-.154.51-.066.044%200%20.066.067.044.177m.995-1.5c-.332.816-.686.948-1.66%201.19l-.11.023c-.243.066-.398.088-.465.022-.066-.088-.044-.265.067-.618.088-.264.442-.485%201.084-.617.133-.022.288-.066.443-.11.31-.089.553-.177.641-.067.067.045.022.133%200%20.177m1.129-1.28c-.332.75-.708.839-1.704.927h-.11c-.266.022-.399.044-.465-.044-.067-.088-.022-.265.088-.596.089-.264.465-.419%201.107-.463.155%200%20.287-.022.442-.044.332-.044.576-.088.642.022q.066.066%200%20.199m1.283-1.08c-.354.507-.885.706-1.925.684-.221%200-.354-.067-.398-.155-.044-.11-.022-.264.133-.44.177-.244.597-.486%201.106-.442.133.022.31%200%20.465%200%20.332-.022.62-.022.708.11a.53.53%200%200%201-.089.243m1.395-1.08c-.355.55-.753.507-1.328.44-.2-.022-.443-.044-.708-.066-.2%200-.31-.044-.354-.132-.045-.11.066-.243.155-.375.022-.022.044-.066.066-.088.177-.243.509-.331%201.04-.287.088%200%20.2.022.31.022.354.022.73.022.84.198.067.089.045.177-.022.287m-.598-.729c-.2%200-.31-.044-.354-.132-.044-.11.066-.243.155-.375.022-.022.044-.066.066-.088.177-.243.51-.331%201.04-.287.067%200%20.133%200%20.222.022.442.022.929.066%201.04.287.044.088.022.176-.045.264-.332.53-.796.464-1.372.375-.199-.022-.464-.066-.752-.066m-1.35%2028.078s-.088-.221-.398-.442c-.2-.132-.443-.088-.443-.088s-.177-.463-.376-.683-.62-.398-.62-.398-.088-.573-.376-.882c-.287-.33-.62-.485-.62-.485s-.044-.551-.309-.948c-.266-.397-.553-.596-.553-.596s-.022-.662-.177-.882c-.133-.22-.553-.64-.553-.64s.088-.706-.045-.992c-.155-.31-.509-.64-.509-.64s.067-.64-.066-1.059a3.8%203.8%200%200%200-.376-.794s.221-.485.177-.926c-.067-.507-.398-.926-.398-.926s.287-.42.199-.949c-.067-.53-.266-.617-.266-.617s.31-.441.332-.97c.022-.53-.11-.773-.11-.773s.132-.308.176-.595c.067-.287-.088-.508-.088-.508s.332-.463.354-.772c.044-.374-.089-.771-.575-.838-.487-.066-.664.11-.664.11s-.753-.639-1.261.376c-.244.485.22.727.22.727s-.42.376-.088%201.037c0%200-.42.463-.442%201.125%200%20.618.22.904.22.904s-.353.618-.22%201.191c.11.441.31.728.31.728s-.333.463-.09%201.17c.222.705.4.771.4.771s-.266.64-.045%201.235c.177.463.509.662.509.662s-.177.838.044%201.257c.244.463.51.64.51.64s-.09.727.154%201.147c.155.264.686.573.686.573s-.221.618.265%201.213c.288.375.554.551.554.551s.11.794.553%201.214c.31.286.62.33.62.33s.088.772.508%201.06c.421.286.753.374.753.374s.022.507.354.794.553.22.553.22.044%201.081.752.84c.709-.266.82-.905.82-.905s.663-.53.552-1.103c.023-.067-.022-.75-.907-.838m-6.417-16.83c.288-.242.531-.264.686-.242.177.022.31.133.398.287a.5.5%200%200%201-.11.551c-.067.066-.155.089-.222.023-.132-.089-.62-.067-.885.198-.11.132-.221.176-.288.154s-.088-.088-.088-.132c-.022%200%200-.441.509-.838m-.686-.22a.27.27%200%200%201%20.288-.132c.066.022.155.066.155.132%200%20.022%200%20.067-.067.089-.133.044-.354.242-.354.242l-.022.022-.022-.022c-.022%200-.044-.022-.044-.066q-.034-.099.066-.265m.2%201.677c.265-.265.619-.552.884-.486.111.022.2.11.244.265.177.551-.067.706-.42.926-.2.133-.421.287-.665.552-.132.154-.243.198-.331.176-.111-.044-.155-.198-.178-.353%200-.044-.022-.066-.022-.11-.044-.287.111-.595.487-.97m-.466%203.043c-.132-.308.133-.75.399-1.102.42-.574.73-.839.93-.817.043%200%20.132.045.176.155.244.573-.044.882-.42%201.301-.155.177-.354.397-.51.662-.11.176-.198.242-.287.242-.133-.022-.177-.176-.243-.33-.022-.067-.045-.089-.045-.11m.155%201.765c-.155-.287.045-.618.288-1.059.155-.242.62-.97.885-.948.044%200%20.089.022.133.11.332.794.044%201.125-.31%201.566-.133.176-.288.375-.442.596-.089.154-.178.22-.244.22-.11%200-.177-.176-.243-.33-.022-.067-.044-.111-.067-.155m.399%202.25c-.023-.023-.045-.067-.067-.089-.177-.242-.177-.573.044-1.08l.045-.089c.221-.529.465-1.058.73-1.102.088-.023.177.022.243.11.399.463.177.926-.11%201.456-.11.22-.244.485-.354.771-.067.199-.133.287-.222.287-.11%200-.22-.154-.31-.264m.818%202.05c-.132.023-.22-.132-.31-.264-.022-.022-.044-.066-.066-.088-.177-.243-.177-.574.044-1.08a.8.8%200%200%201%20.089-.2c.155-.396.332-.86.575-.904.089-.022.177.022.244.11.42.486.221.883-.044%201.412-.111.199-.222.441-.31.706-.067.198-.133.309-.222.309m.863%201.412c-.066.199-.132.287-.22.287-.134.022-.222-.132-.31-.265-.023-.022-.045-.066-.067-.088-.177-.242-.177-.573.044-1.08.044-.089.067-.2.11-.287.111-.331.244-.706.443-.728.089-.022.155.022.244.11.42.485.265.882.022%201.39q-.133.297-.266.661m.664%201.963c-.11.022-.243-.066-.398-.242-.2-.243-.288-.706-.089-1.191.045-.133.089-.287.133-.442.089-.33.155-.595.31-.64.066-.021.155.023.221.133.399.485.42%201.059.089%202.03-.044.242-.133.352-.266.352m1.24%201.059-.023.11c-.044.265-.088.397-.199.441-.11.044-.265-.044-.53-.242-.222-.155-.267-.552-.112-1.191a2.6%202.6%200%200%200%20.089-.441c.044-.331.088-.574.221-.618.044-.022.11%200%20.177.066.62.53.576.905.376%201.875m1.172%201.478v.11c-.022.265-.022.397-.11.441-.111.044-.266-.044-.576-.243-.243-.154-.332-.573-.265-1.213.022-.154.022-.308.022-.44%200-.332%200-.574.11-.618.09-.044.177.022.2.044.664.551.664.926.62%201.919m1.217%201.124v.067c0%20.264%200%20.419-.11.485s-.288%200-.598-.154c-.243-.11-.354-.486-.31-1.103v-.441c0-.265-.022-.441.089-.508.044-.022.11-.022.2.022.73.397.752.816.73%201.632m.908%201.213c-.2.375-.42.375-.532.354-.177-.045-.31-.265-.287-.442%200-.132.044-.242.11-.352.089-.199.2-.42.111-.905-.044-.309-.022-.463.089-.507.088-.044.22.022.332.198.243.31.509%201.037.177%201.654m.486-.573c-.022.022-.044.022-.066.022-.044-.022-.066-.066-.066-.154-.022-.088-.022-.177-.022-.243-.023-.132-.023-.22-.045-.309-.022-.066%200-.088.022-.11.023-.022.067-.044.133-.022a.29.29%200%200%201%20.2.243c0%20.154-.067.485-.156.573m32.44-14.6s.222-.288.222-.905c0-.64-.443-1.125-.443-1.125.332-.662-.088-1.037-.088-1.037s.464-.242.221-.727c-.51-1.015-1.261-.375-1.261-.375s-.155-.155-.664-.11c-.487.065-.62.44-.575.837.022.331.354.772.354.772s-.133.22-.089.508c.066.286.177.595.177.595s-.133.243-.11.772c.022.53.332.97.332.97s-.178.089-.266.618c-.067.53.2.948.2.948s-.332.42-.4.927c-.044.441.178.926.178.926s-.244.375-.376.794c-.133.42-.067%201.059-.067%201.059s-.376.33-.509.64c-.132.286-.044.992-.044.992s-.399.42-.553.64c-.133.22-.177.882-.177.882s-.31.176-.553.595c-.266.42-.31.949-.31.949s-.332.154-.62.485c-.287.33-.376.882-.376.882s-.42.199-.62.397c-.199.22-.376.684-.376.684s-.243-.044-.442.088c-.332.22-.398.441-.398.441-.864.089-.93.772-.93.772-.11.574.553%201.103.553%201.103s.11.64.82.904c.707.265.752-.838.752-.838s.22.044.553-.22c.332-.287.354-.794.354-.794s.332-.11.752-.375c.42-.287.509-1.059.509-1.059s.31-.044.62-.33c.442-.42.553-1.214.553-1.214s.265-.176.553-.551c.464-.596.265-1.213.265-1.213s.532-.287.687-.574c.243-.419.154-1.147.154-1.147s.266-.176.51-.64c.22-.44.044-1.256.044-1.256s.331-.199.508-.662c.222-.596-.043-1.235-.043-1.235s.154-.089.376-.772c.22-.706-.09-1.17-.09-1.17s.222-.286.31-.727c.177-.507-.177-1.125-.177-1.125m-.951-3.883c0-.066.089-.11.155-.132.133-.022.243.022.288.132q.1.166.066.265c-.022.044-.044.044-.044.066l-.022.022-.022-.022s-.222-.198-.355-.242c-.066-.023-.066-.067-.066-.089m-1.217.838a.49.49%200%200%201-.11-.551.54.54%200%200%201%20.398-.287c.154-.022.398-.022.686.243.486.419.531.838.531.86%200%20.044-.022.11-.089.132-.066.023-.177-.022-.287-.154-.266-.265-.753-.287-.885-.199-.067.045-.156.023-.244-.044m.31.64c.044-.154.132-.243.243-.265.266-.066.62.22.885.486.376.375.531.683.465.97%200%20.022-.022.066-.022.11-.022.155-.067.331-.177.353-.089.022-.199-.044-.332-.176-.221-.265-.465-.42-.664-.552-.332-.22-.575-.375-.398-.926M88.38%2068.351c-.021.089-.043.177-.043.31%200%20.065-.023.154-.023.242-.022.088-.044.132-.066.154-.022%200-.045%200-.067-.022-.088-.066-.154-.419-.11-.573a.29.29%200%200%201%20.2-.243c.043-.022.088%200%20.132.022-.023.022%200%20.044-.023.11m.775%201.61c-.11.022-.31.022-.53-.353-.333-.617-.068-1.345.176-1.676.133-.154.244-.242.332-.198.11.044.133.22.089.507-.067.485.022.706.11.904.044.11.089.221.111.353%200%20.199-.111.397-.288.464m1.085-1.168c-.333.154-.51.22-.598.154-.11-.066-.11-.199-.11-.485v-.067c-.023-.816%200-1.235.73-1.632.088-.044.155-.066.198-.022.112.067.09.243.09.508v.44c.044.618-.045.993-.31%201.104m1.217-1.214c-.31.221-.465.31-.576.243-.088-.044-.11-.198-.11-.441v-.11c-.067-.993-.045-1.368.641-1.92.022-.021.111-.087.2-.043.11.066.11.286.11.617%200%20.155%200%20.309.023.441.043.64-.045%201.059-.288%201.213m1.217-1.5c-.288.2-.42.287-.532.243-.11-.044-.132-.176-.199-.44l-.021-.111c-.222-.97-.244-1.346.376-1.897.066-.066.132-.088.177-.066.132.044.154.287.22.617.023.155.045.287.09.442.132.661.11%201.058-.111%201.213m.863-1.587c-.155.198-.266.264-.399.242q-.165-.033-.265-.33c-.332-.993-.31-1.567.088-2.03.09-.088.155-.132.222-.132.154.022.221.309.31.617.044.155.088.31.133.442.22.485.11.948-.09%201.19m.885-1.787a.3.3%200%200%200-.066.088c-.09.133-.177.287-.31.265-.089-.022-.155-.11-.222-.287a6%206%200%200%200-.265-.64c-.244-.529-.399-.904.022-1.389.088-.088.177-.132.243-.11.2.044.31.375.443.728.044.11.066.198.11.308.2.464.222.816.045%201.037m.62-1.698a.3.3%200%200%200-.067.088c-.088.132-.177.287-.31.265-.089-.022-.155-.11-.221-.287a4%204%200%200%200-.31-.706c-.266-.53-.465-.926-.044-1.411.089-.089.155-.133.243-.11.243.043.421.507.576.904.022.066.043.132.088.198.221.485.244.838.044%201.059m.508-1.787a.3.3%200%200%200-.066.089c-.089.132-.177.286-.31.264-.088-.022-.155-.11-.222-.287a3.5%203.5%200%200%200-.353-.772c-.266-.529-.51-.97-.11-1.455.066-.088.154-.11.243-.11.287.044.553.683.73%201.102l.044.088c.221.486.221.839.044%201.081m.354-2.161c-.021.044-.044.088-.066.154-.066.154-.11.331-.243.331-.089%200-.155-.066-.244-.22a2.6%202.6%200%200%200-.442-.596c-.354-.441-.642-.794-.31-1.566.044-.088.088-.088.133-.11.265-.022.73.706.885.948.243.441.443.794.287%201.059m.156-1.765c-.023.022-.023.066-.045.089-.044.154-.11.308-.243.33-.089%200-.178-.066-.288-.242-.155-.265-.354-.463-.51-.662-.353-.419-.64-.75-.42-1.301.044-.088.089-.155.178-.155.199-.022.509.243.93.816.264.375.552.817.398%201.125M0%2096.826h2.478v5.426l4.47-5.426h3.054l-5.09%205.955%205.29%206.683H6.97l-4.447-5.867h-.045v5.867H0zM19.783%20104.457l-4.514-7.631h2.898l2.921%205.293%202.988-5.293h2.61l-4.425%207.631v4.985h-2.478zM38.99%2099.142a6.1%206.1%200%200%200-2.522-.551c-.841%200-1.948.374-1.948%201.764%200%202.183%205.422%201.257%205.422%205.491%200%202.78-2.147%203.816-4.647%203.816-1.35%200-1.947-.176-3.165-.485l.222-2.272c.84.463%201.814.772%202.788.772.93%200%202.19-.485%202.19-1.632%200-2.404-5.42-1.411-5.42-5.602%200-2.823%202.146-3.86%204.314-3.86%201.062%200%202.058.154%202.965.463zM49.811%2098.81h-3.54v-1.984h9.559v1.985h-3.54v10.631H49.81zM61.517%2096.826h2.655l3.164%209.925h.045l3.142-9.925h2.456l-4.16%2012.616h-3.054zM79.729%2096.826h7.302v1.985h-4.824v3.11h4.403v1.985h-4.403v3.551h4.846v1.985h-7.324zM94.953%2096.826h2.678c2.655%200%205.82-.089%205.82%203.418%200%201.478-.974%202.714-2.546%202.934v.044c.665.044%201.063.75%201.307%201.301l1.991%204.941h-2.766l-1.483-3.948c-.354-.949-.664-1.301-1.726-1.301h-.796v5.249h-2.479zm2.479%205.381h.819c1.216%200%202.611-.176%202.611-1.764%200-1.522-1.372-1.654-2.611-1.654h-.82zM111.571%2096.826h2.479v5.426l4.47-5.426h3.053l-5.089%205.955%205.289%206.683h-3.231l-4.448-5.867h-.044v5.867h-2.479zM128.521%2096.826h7.303v1.985H131v3.11h4.403v1.985H131v3.551h4.846v1.985h-7.325zM145.981%2098.81h-3.541v-1.984H152v1.985h-3.541v10.631h-2.478z'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M0%200h152v109.662H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", j6 = "data:image/svg+xml,%3csvg%20width='186'%20height='47'%20viewBox='0%200%20186%2047'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_7584_1130)'%3e%3cmask%20id='mask0_7584_1130'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='186'%20height='47'%3e%3cpath%20d='M185.714%200H0V46.71H185.714V0Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_7584_1130)'%3e%3cpath%20d='M0%2030.2983C0%2040.3595%208.81422%2044.8737%2014.0488%2046.6717L14.1258%2046.71L14.2028%2046.6717C16.7816%2045.7536%2020.5152%2044.0321%2023.4404%2041.2012C26.5966%2038.1407%2028.2132%2034.5064%2028.2132%2030.2983V4.82019V4.70543L28.0977%204.66717C23.5174%201.56847%2018.7831%200%2014.0873%200C9.39157%200%204.69578%201.56847%200.0769803%204.66717L0%204.70543V4.82019V30.2983ZM0.26943%204.97321C4.84974%201.91277%209.46856%200.382555%2014.0873%200.382555C18.7062%200.382555%2023.3634%201.91277%2027.9053%204.97321L27.8283%204.82019V30.2983C27.8283%2034.3917%2026.2502%2037.9495%2023.171%2040.9334C20.2842%2043.726%2016.5892%2045.4093%2014.0488%2046.3274H14.1643C9.00664%2044.6059%200.3849%2040.1683%200.3849%2030.3366V4.82019L0.26943%204.97321Z'%20fill='%23FFFFFF'/%3e%3cpath%20d='M8.23683%2010.7498C6.62027%2011.3619%205.54253%2012.0887%205.31159%2012.3183C4.81121%2012.7773%205.00367%2013.2364%205.00367%2013.2364H5.04216C5.04216%2013.2364%205.00367%2012.8921%205.46555%2012.4713C5.65799%2012.28%206.69721%2011.5914%208.35231%2010.941L8.23683%2010.7498Z'%20fill='%23FFFFFF'/%3e%3cpath%20d='M14.5108%209.60205C14.5108%209.60205%2014.3184%209.60205%2014.1644%209.60205C14.0105%209.60205%2013.7795%209.60205%2013.7795%209.60205C12.3554%209.67859%2010.4309%2010.0229%208.7373%2010.5967L8.81429%2010.788C10.4693%2010.2142%2012.3938%209.90814%2013.818%209.8316C13.818%209.8316%2013.972%209.8316%2014.1644%209.8316C14.3184%209.8316%2014.5108%209.8316%2014.5108%209.8316C15.935%209.90814%2017.821%2010.2524%2019.5145%2010.788L19.5915%2010.5967C17.8594%2010.0229%2015.935%209.67859%2014.5108%209.60205Z'%20fill='%23FFFFFF'/%3e%3cpath%20d='M20.0535%2010.7498C21.67%2011.3619%2022.7478%2012.0887%2022.9787%2012.3183C23.4791%2012.7773%2023.2866%2013.2364%2023.2866%2013.2364H23.2481C23.2481%2013.2364%2023.2866%2012.8921%2022.8247%2012.4713C22.6323%2012.28%2021.593%2011.5914%2019.938%2010.941L20.0535%2010.7498Z'%20fill='%23FFFFFF'/%3e%3cpath%20d='M24.826%2011.4C24.0177%2010.3289%2022.2472%209.94629%2020.5151%209.83154C20.4382%208.07182%2017.2435%207.95701%2014.8186%208.41606C14.5877%208.07182%2013.7409%208.11003%2013.5099%208.41606C11.0466%207.95701%207.89046%208.07182%207.81347%209.83154C6.04288%209.94629%204.27237%2010.3289%203.46408%2011.4C2.69428%2012.4712%204.23388%2013.5806%204.23388%2013.5806L4.58029%2013.2745C4.58029%2013.2745%202.00146%2011.1705%207.81347%2010.1376C8.08287%2010.9027%208.62172%2011.2852%208.62172%2011.2852L8.92967%2011.094C8.92967%2011.094%207.15914%207.80399%2013.4715%208.8369L13.8564%2010.1758C13.8564%2010.1758%2013.8564%2010.0993%2013.9719%2010.0993C13.9719%2010.0993%2013.8179%208.8369%2013.8564%208.72215C13.9334%208.53087%2014.3567%208.53087%2014.4337%208.72215C14.4722%208.8369%2014.3183%2010.0993%2014.3183%2010.0993C14.4722%2010.0993%2014.4337%2010.1758%2014.4337%2010.1758L14.8186%208.8369C21.131%207.80399%2019.3605%2011.094%2019.3605%2011.094L19.6683%2011.2852C19.6683%2011.2852%2020.2073%2010.9027%2020.4767%2010.1376C26.3272%2011.1705%2023.7098%2013.2745%2023.7098%2013.2745L24.0562%2013.5806C24.0562%2013.5806%2025.6343%2012.4712%2024.826%2011.4ZM4.34935%2013.2363C4.38784%2013.2745%204.38784%2013.2745%204.42633%2013.3128C4.42633%2013.3128%204.34935%2013.2745%204.27237%2013.3511C4.1569%2013.2745%204.04143%2013.1598%203.92596%2013.045C3.23314%2012.2417%202.73277%2010.4819%207.73648%2010.0611C2.34787%2010.9792%204.00294%2012.892%204.34935%2013.2363ZM8.77569%2011.0557C8.77569%2011.1322%208.62172%2011.0557%208.62172%2011.094C8.23684%2010.6732%208.04437%2010.2141%208.04437%209.79328C8.00588%208.76037%209.23756%207.88053%2012.5477%208.45433C12.6247%208.45433%2012.6632%208.45433%2012.7402%208.4926C12.7017%208.4926%2012.7017%208.4926%2012.6632%208.4926C12.8556%208.53087%2013.0866%208.56914%2013.3175%208.60735C7.39004%207.95701%208.54473%2010.4819%208.77569%2011.0557ZM19.7068%2011.1322C19.6683%2011.094%2019.6683%2011.1322%2019.6683%2011.1322C19.7068%2011.0175%2019.5144%2011.1705%2019.5144%2011.0557V11.0175V10.9792C19.7838%2010.4054%2020.9385%207.91874%2015.0111%208.60735C15.2035%208.56914%2015.396%208.53087%2015.5884%208.4926H15.6269C18.3597%207.95701%2019.7453%208.4926%2020.1303%209.29595C20.2457%209.48724%2020.2842%209.71679%2020.2457%209.94629C20.2073%2010.3671%2020.0148%2010.7879%2019.7068%2011.1322ZM24.0947%2013.3511C24.0562%2013.3511%2024.0562%2013.3511%2024.0562%2013.3511C24.0177%2013.3128%2023.9793%2013.3128%2023.9793%2013.3128H23.9408C23.9023%2013.3128%2023.9023%2013.3128%2023.8638%2013.3128C23.8638%2013.3128%2023.9023%2013.2745%2023.9408%2013.2363C24.0947%2013.0832%2024.4027%2012.739%2024.4796%2012.3181C24.5951%2011.5913%2023.9792%2010.6349%2020.6306%2010.0228C26.5581%2010.5201%2024.7875%2012.892%2024.0947%2013.3511Z'%20fill='%23FFFFFF'/%3e%3cpath%20d='M24.6615%2013.7882C24.6615%2013.7882%2024.469%2013.5969%2024.1226%2013.4439C22.352%2012.6405%2022.7754%2014.4385%2022.7754%2014.5915C22.6215%2014.1325%2021.5438%2013.4439%2021.2743%2014.7063C21.0049%2016.0453%2022.0826%2015.701%2022.275%2015.701C22.0056%2016.0835%2021.4668%2016.0835%2020.2736%2015.5862C18.9264%2015.0506%2018.6955%2014.6681%2019.0034%2014.0177C19.1189%2014.8211%2020.1196%2015.0124%2020.4275%2014.209C21.1588%2012.411%2019.6193%2012.9083%2019.4268%2012.9848C19.6578%2012.564%2020.0811%2012.3728%2020.0811%2011.8754C20.1196%2011.1103%2019.0034%2010.919%2018.657%2011.1868C18.0796%2011.6459%2018.4261%2012.6788%2018.4261%2012.7935C18.2721%2012.6405%2017.2329%2011.225%2016.8864%2013.1378C16.7325%2013.9795%2017.6563%2014.362%2018.2336%2013.7117C18.1181%2014.4002%2017.5408%2014.6298%2016.1551%2014.4002C14.0767%2014.0942%2014.5001%2013.0996%2014.5001%2013.0996C14.5386%2013.1378%2015.3084%2014.4002%2015.9627%2012.9466C16.6555%2011.3398%2014.8465%2011.8372%2014.5771%2012.1815C14.731%2011.4546%2015.4239%2011.0338%2015.0389%2010.5747C14.5386%209.96263%2013.5763%2010.0009%2013.1529%2010.5747C12.768%2011.072%2013.4224%2011.4546%2013.6148%2012.1815C13.3454%2011.8372%2011.4979%2011.3398%2012.2292%2012.9466C12.8835%2014.4002%2013.6533%2013.1378%2013.6918%2013.0996C13.6918%2013.0996%2014.1152%2014.0942%2012.0367%2014.4002C10.6511%2014.6298%2010.0737%2014.4002%209.95823%2013.7117C10.5356%2014.362%2011.4594%2013.9795%2011.3054%2013.1378C10.959%2011.225%209.91974%2012.6405%209.76582%2012.7935C9.76582%2012.6788%2010.1507%2011.6459%209.53486%2011.1868C9.14998%2010.919%208.03373%2011.1103%208.11072%2011.8754C8.14921%2012.3728%208.61113%2012.6023%208.76505%2012.9848C8.57264%2012.9083%207.03301%2012.3728%207.76433%2014.1707C8.07222%2014.9741%209.073%2014.7828%209.18848%2013.9795C9.49637%2014.6681%209.26541%2015.0124%207.9183%2015.548C6.72512%2016.007%206.18621%2016.0453%205.91681%2015.6627C6.07079%2015.6244%207.14849%2016.0453%206.91753%2014.6681C6.68663%2013.4056%205.5319%2014.0942%205.41644%2014.5533C5.41644%2014.4002%205.83982%2012.6022%204.06929%2013.4056C3.72287%2013.5587%203.53042%2013.7499%203.53042%2013.7499L3.45345%2013.8264L3.37646%2013.9029L6.45566%2018.1493C6.45566%2018.1493%209.073%2015.9687%2013.9997%2015.9687C18.9264%2015.9687%2021.5438%2018.1493%2021.5438%2018.1493L24.623%2013.9029L24.6615%2013.8264V13.7882ZM24.1995%2014.1325C23.8532%2014.5915%2021.6592%2017.5755%2021.6208%2017.6137L21.5438%2017.7285L21.4283%2017.652C20.3891%2017.0781%2017.6178%2015.701%2014.0382%2015.701C10.4971%2015.701%207.68734%2017.0399%206.64813%2017.652L6.57114%2017.7285L6.45566%2017.6137C6.41717%2017.5755%204.22324%2014.5915%203.87684%2014.1325L3.83835%2014.0942V14.0177C3.83835%2013.9795%203.87684%2013.8264%204.06929%2013.6734C4.49268%2013.4056%204.87758%2013.4821%204.99305%2013.5204C5.22398%2013.6734%205.1855%2014.6681%205.1855%2014.7828C5.37795%2014.5151%205.68585%2014.1325%206.03229%2014.1707C6.2632%2014.1707%206.41717%2014.3238%206.53265%2014.6298C6.72512%2015.1271%206.57114%2015.3949%206.41717%2015.5097C6.18621%2015.6627%205.83982%2015.6244%205.5704%2015.5097C5.60889%2015.6244%205.68585%2015.8157%205.80133%2015.8923C6.14777%2016.16%206.84054%2016.0835%207.64885%2015.8157C8.61113%2015.5097%209.22697%2015.0506%209.3039%2014.5533C9.38089%2014.2472%209.26541%2013.9412%209.073%2013.7499C8.95752%2014.0177%208.72656%2014.4768%208.41866%2014.5151C8.2262%2014.5151%208.03373%2014.4002%207.87981%2014.0942C7.64885%2013.6734%207.61036%2013.3674%207.80282%2013.1761C8.03373%2012.9083%208.84204%2013.0614%208.91902%2013.0996C9.0345%2013.1378%208.88053%2012.9466%208.80354%2012.9083C8.53414%2012.6023%208.30318%2012.3728%208.30318%2012.1049C8.30318%2011.8372%208.41866%2011.6459%208.61113%2011.5311C8.88053%2011.3781%209.26541%2011.4163%209.41938%2011.5693C9.57336%2011.7224%209.61185%2012.0284%209.49637%2012.7553C9.49637%2012.8318%209.38089%2013.1761%209.53486%2012.9848C9.68884%2012.8318%2010.3047%2012.2579%2010.6511%2012.411C10.882%2012.4875%2010.9975%2012.7553%2010.9975%2013.1761C10.9975%2013.4821%2010.9205%2013.6734%2010.728%2013.7882C10.4587%2013.9412%209.95824%2013.6734%209.72733%2013.5204C9.68884%2013.7117%209.72733%2013.9795%209.88125%2014.1707C10.1507%2014.5151%2010.8435%2014.7063%2011.7673%2014.6298C12.7295%2014.5151%2013.2684%2014.209%2013.5378%2013.8264C13.6918%2013.5969%2013.8457%2013.1378%2013.7303%2012.7553C13.5763%2012.9466%2013.0759%2013.3674%2012.845%2013.3674C12.6141%2013.3674%2012.4601%2013.1761%2012.3062%2012.8701C12.1907%2012.564%2012.1907%2012.2197%2012.3447%2012.0667C12.5756%2011.8372%2013.3069%2012.1815%2013.6918%2012.3345C13.6533%2012.1815%2013.6148%2012.0284%2013.5378%2011.8372C13.4994%2011.6841%2013.4224%2011.5311%2013.3839%2011.4546C13.3069%2011.3016%2013.1144%2011.072%2013.2299%2010.8425C13.3839%2010.5747%2013.6533%2010.4217%2013.9612%2010.4217C14.3076%2010.4217%2014.5771%2010.5747%2014.6925%2010.8425C14.808%2011.072%2014.654%2011.2633%2014.5386%2011.4546C14.5001%2011.5693%2014.4231%2011.6459%2014.3846%2011.8372C14.3076%2012.0284%2014.2691%2012.1815%2014.2306%2012.3345C14.5771%2012.1815%2015.3084%2011.8372%2015.5778%2012.0667C15.7318%2012.2197%2015.7318%2012.5258%2015.6163%2012.8701C15.4623%2013.2144%2015.3084%2013.3674%2015.0774%2013.3674C14.8465%2013.3674%2014.3076%2012.9466%2014.1922%2012.7553C14.1152%2013.3291%2014.3076%2013.6734%2014.3846%2013.8264C14.654%2014.209%2015.1929%2014.5533%2016.1551%2014.6298C17.0789%2014.7063%2017.7717%2014.5151%2018.0411%2014.1707C18.1951%2013.9795%2018.2336%2013.5969%2018.2336%2013.4056C18.0026%2013.5587%2017.5023%2013.9029%2017.1944%2013.7499C17.0019%2013.6734%2016.9249%2013.4439%2016.9249%2013.1378C16.9249%2012.6788%2017.0404%2012.4492%2017.2714%2012.3728C17.6178%2012.2197%2018.3491%2012.9848%2018.3876%2012.8701C18.4261%2012.7935%2018.3876%2012.6788%2018.3876%2012.6023C18.3491%2012.1432%2018.3106%2011.6076%2018.5415%2011.4929C18.734%2011.3398%2019.0804%2011.3398%2019.3113%2011.4546C19.5038%2011.5693%2019.6193%2011.7606%2019.6193%2012.0284C19.6193%2012.2962%2019.5038%2012.4492%2019.2343%2012.7935C19.1958%2012.8701%2018.8879%2013.0996%2019.0419%2013.0613C19.1958%2013.0231%2019.9272%2012.9083%2020.1196%2013.1761C20.2736%2013.3674%2020.2736%2013.6734%2020.0426%2014.0942C19.8887%2014.4002%2019.6962%2014.5151%2019.5038%2014.5151C19.1958%2014.4768%2019.0034%2013.9795%2018.8494%2013.7499C18.734%2013.9029%2018.5031%2014.2855%2018.58%2014.5915C18.6955%2015.0506%2019.3498%2015.548%2020.2736%2015.854C21.0818%2016.1218%2021.7362%2016.1983%2022.0826%2015.9305C22.2366%2015.8157%2022.3135%2015.6244%2022.352%2015.5097C22.0826%2015.6244%2021.7362%2015.6627%2021.4668%2015.548C21.3128%2015.4714%2021.1588%2015.2419%2021.3128%2014.6298C21.3898%2014.3238%2021.6208%2014.1707%2021.8132%2014.1707C22.1211%2014.1325%2022.429%2014.4385%2022.6215%2014.7063C22.6215%2014.5915%2022.66%2014.5151%2022.66%2014.4002C22.6215%2013.9795%2022.737%2013.6352%2022.9679%2013.5204C23.0833%2013.4439%2023.3528%2013.3674%2023.7762%2013.6352C24.0071%2013.7882%2024.0071%2013.9795%2024.0071%2013.9795V14.056L24.1995%2014.1325Z'%20fill='%23FFFFFF'/%3e%3cpath%20d='M14.1642%204.66711C13.2405%204.66711%2012.4707%205.43222%2012.4707%206.35037C12.4707%207.11545%2012.9711%207.72758%2013.6639%207.95708L13.7409%208.26311C13.8179%208.2249%2013.8564%208.2249%2013.9333%208.2249C13.9333%208.14836%2013.9333%208.07188%2013.8949%208.03361C13.9718%208.03361%2014.0488%208.03361%2014.0873%208.03361C14.1642%208.03361%2014.2412%208.03361%2014.2797%208.03361C14.2797%208.11009%2014.2797%208.18663%2014.2412%208.2249C14.3182%208.2249%2014.3952%208.26311%2014.4337%208.26311L14.5107%207.95708C15.2035%207.76579%2015.7039%207.11545%2015.7039%206.35037C15.8579%205.43222%2015.088%204.66711%2014.1642%204.66711ZM14.0488%204.97316C14.0488%204.97316%2014.0873%204.97316%2014.1642%204.97316C14.2412%204.97316%2014.2797%204.97316%2014.2797%204.97316V6.50338H14.0488V4.97316ZM12.7402%206.35037C12.7402%205.6235%2013.279%205.04967%2013.9718%204.97316V6.50338H12.7402C12.7402%206.42685%2012.7402%206.38863%2012.7402%206.35037ZM14.1642%207.72758C13.5484%207.72758%2013.048%207.34501%2012.8556%206.84769H15.4729C15.2804%207.34501%2014.7416%207.72758%2014.1642%207.72758ZM15.5114%206.6564C15.4729%206.73294%2015.4729%206.77115%2015.4729%206.77115H12.8171C12.8171%206.77115%2012.8171%206.73294%2012.7787%206.6564C12.7787%206.57986%2012.7402%206.54165%2012.7402%206.54165H15.5114C15.5499%206.54165%2015.5499%206.57986%2015.5114%206.6564ZM14.3567%206.46512V4.97316C15.0495%205.04967%2015.5884%205.66176%2015.5884%206.35037C15.5884%206.38863%2015.5884%206.42685%2015.5884%206.50338L14.3567%206.46512Z'%20fill='%23FFFFFF'/%3e%3cpath%20d='M14.549%202.83082V1.83618H13.7407V2.83082H12.6245V3.63419H13.7407V4.82011H13.8177C13.8177%204.82011%2014.0486%204.78185%2014.1641%204.78185C14.2796%204.78185%2014.472%204.82011%2014.472%204.82011H14.549V3.63419H15.6652V2.83082H14.549Z'%20fill='%23FFFFFF'/%3e%3cpath%20d='M8.39092%2025.4399L13.0098%2025.8225L13.2407%2025.2104L13.1637%2025.4782L8.39092%2025.2487C8.39092%2025.2487%208.12153%2025.2486%208.12153%2024.9426C8.12153%2024.6365%208.39092%2024.5983%208.39092%2024.5983L13.3946%2024.4452L13.7026%2020.7345C13.7026%2020.5815%2013.8566%2020.4667%2014.1644%2020.4667C14.4339%2020.4667%2014.5878%2020.5815%2014.5878%2020.7345L14.8958%2024.4452L19.938%2024.5983C19.938%2024.5983%2020.2074%2024.5983%2020.2074%2024.9426C20.2074%2025.2486%2019.938%2025.2487%2019.938%2025.2487L15.2037%2025.4782L15.3191%2025.8607L19.938%2025.4782C19.9765%2025.4782%2020.5153%2025.4399%2020.5153%2024.9808C20.5153%2024.4452%2020.1304%2024.407%2019.8995%2024.3688L15.2806%2024.1009C15.2421%2023.6419%2015.0882%2021.8056%2015.0497%2021.0023C15.0112%2020.2372%2014.5493%2020.0842%2014.3569%2020.0459C14.3569%2020.0459%2014.3184%2020.0459%2014.2414%2020.0459H14.2029H14.1644C14.1259%2020.0459%2014.049%2020.0459%2014.049%2020.0459C13.8566%2020.0842%2013.3946%2020.2372%2013.3561%2021.0023C13.3177%2021.7674%2013.1637%2023.6036%2013.1252%2024.1009L8.5064%2024.3688C8.2755%2024.3688%207.89056%2024.4452%207.89056%2024.9808C7.81358%2025.4017%208.31399%2025.4399%208.39092%2025.4399ZM20.0534%2033.3588L20.7847%2033.7031C20.7847%2033.7031%2020.2843%2034.6212%2018.4753%2036.1514L18.6293%2036.381C18.6293%2036.381%2018.6293%2036.381%2018.6678%2036.381C20.2074%2035.2715%2021.0542%2033.6266%2021.0542%2033.6266L20.3998%2033.3588L21.747%2032.8615C21.516%2033.5884%2020.9387%2035.3481%2018.9757%2036.7635C18.9372%2036.8018%2018.8987%2036.84%2018.8218%2036.8783L18.7833%2036.7253C18.7448%2036.7635%2018.6678%2036.8018%2018.6293%2036.84L18.7833%2036.9548C17.3976%2037.8347%2015.7041%2038.2555%2014.2029%2038.2555C12.6634%2038.2555%2010.9313%2037.7964%209.54567%2036.8783L9.6226%2036.7253C9.58417%2036.687%209.50718%2036.6488%209.46869%2036.6105L9.43019%2036.7635C9.3917%2036.7635%209.3917%2036.7253%209.3532%2036.7253C7.39021%2035.2715%206.77437%2033.5501%206.5434%2032.8232L7.89056%2033.3205L7.23623%2033.5501C7.23623%2033.5501%207.96755%2035.1568%209.54567%2036.2662L9.6611%2036.0367C7.85207%2034.5065%207.46719%2033.6648%207.46719%2033.6648L8.19851%2033.3205L6.3125%2032.5172C6.3125%2032.5172%206.69738%2035.1568%209.19923%2036.9931C10.7004%2038.1024%2012.4324%2038.7528%2014.0875%2038.7528C15.7811%2038.7528%2017.5131%2038.1024%2018.9757%2036.9931C21.5545%2035.1951%2021.9395%2032.5554%2021.9395%2032.5554L20.0534%2033.3588ZM15.2421%2037.4521C15.7426%2037.4521%2017.1667%2037.1843%2018.0135%2036.7253L18.2829%2036.5723L18.3598%2036.534L18.2444%2036.3045L17.898%2036.4957C17.0897%2036.9166%2015.7041%2037.1078%2015.3191%2037.1078C14.9728%2037.1078%2014.8573%2037.0313%2014.8573%2036.6488V33.9326L14.4339%2033.6648V33.7031L14.5878%2033.7796V36.8783C14.6263%2037.3756%2014.9728%2037.4521%2015.2421%2037.4521ZM13.0098%2037.1078C12.6634%2037.1078%2011.2777%2036.9548%2010.4309%2036.4957L10.0845%2036.3045L9.96905%2036.534L10.3154%2036.7253C11.1622%2037.1843%2012.5479%2037.4521%2013.0867%2037.4521C13.3561%2037.4521%2013.7026%2037.4139%2013.7026%2036.8783V33.7796L13.8566%2033.7031V33.6648L13.4331%2033.9326V36.6488C13.4331%2036.9931%2013.3561%2037.1078%2013.0098%2037.1078Z'%20fill='%23FFFFFF'/%3e%3cpath%20d='M21.8237%2027.9647H16.1272L14.2797%2022.762L14.1642%2022.3794L14.0488%2022.762L12.1243%2027.9647H6.42773L6.77412%2028.1942L11.2005%2031.3694L9.31447%2036.9547L14.1257%2033.5117L18.86%2036.993L17.0125%2031.3694L21.4773%2028.1942L21.8237%2027.9647ZM16.5891%2031.2164L16.5121%2031.1781V31.2164L16.5891%2031.2547V31.2164L18.3597%2036.2279L17.7823%2035.4245L17.8977%2035.7306L18.2827%2036.2662L14.2027%2033.0909V32.9379L14.1642%2032.8997L14.0872%2032.9379V33.0909L9.89181%2036.2662L10.3922%2035.5775L10.1613%2035.7306L10.1998%2035.5775L9.77633%2036.1131L11.5469%2031.1781L7.19755%2028.1942L7.81339%2028.3855L7.69791%2028.3472H7.89032L7.23604%2028.156L12.3167%2028.2708L12.3937%2028.3472H12.4322L12.3552%2028.309L14.0872%2023.0297V23.9096L14.1257%2023.7566L14.2027%2023.9478V22.9915L15.8578%2028.1942L15.7423%2028.3472H15.8578L15.9347%2028.2708L20.9384%2028.156L20.3226%2028.3472H20.4766L20.3226%2028.462L21.0539%2028.2325L16.5891%2031.2164Z'%20fill='%23FFFFFF'/%3e%3cpath%20d='M7.08203%2028.1942L14.1257%2030.5278L14.0872%2030.4895L18.3981%2036.4956L18.475%2036.4191L14.2027%2030.413H14.1642L7.12052%2028.1177L7.08203%2028.1942Z'%20fill='%23FFFFFF'/%3e%3cpath%20d='M9.77664%2036.4191L14.203%2030.4895L14.1645%2030.5277L21.3237%2028.1177L21.2852%2028.0411L14.126%2030.413H14.0875L9.69971%2036.3808L9.77664%2036.4191Z'%20fill='%23FFFFFF'/%3e%3cpath%20d='M14.0874%2022.9532V30.4513V33.1292H14.2025V30.4513V22.9532H14.0874Z'%20fill='%23FFFFFF'/%3e%3cpath%20d='M11.2392%2031.4077L14.1644%2030.5279H14.1259L16.9742%2031.4077L17.0127%2031.293L14.1644%2030.4131H14.1259L11.2007%2031.293L11.2392%2031.4077Z'%20fill='%23FFFFFF'/%3e%3cpath%20d='M12.0859%2027.9647L14.0874%2030.4896L14.1644%2030.5279L14.2029%2030.4896L16.1659%2027.9647L16.0889%2027.9265L14.0874%2030.4131H14.2029L12.1629%2027.9265L12.0859%2027.9647Z'%20fill='%23FFFFFF'/%3e%3cpath%20d='M7.85183%2037.5287C7.69792%2037.5287%207.50545%2037.5669%207.35147%2037.6051C7.38997%2037.6434%207.42846%2037.6817%207.46696%2037.72C7.58244%2037.6817%207.73641%2037.6434%207.85183%2037.6434C8.62165%2037.6434%209.19899%2038.2555%209.19899%2038.9824C9.19899%2039.0206%209.19899%2039.0589%209.19899%2039.0589C9.23749%2039.0589%209.27598%2039.0971%209.31447%2039.1354C9.31447%2039.0589%209.31447%2039.0206%209.31447%2038.9824C9.35297%2038.179%208.66014%2037.5287%207.85183%2037.5287ZM8.77562%2040.5126C8.50617%2040.6656%208.15978%2040.7804%207.85183%2040.7804C6.85112%2040.7804%206.0813%2039.977%206.0813%2039.0206C6.0813%2038.8676%206.1198%2038.6763%206.15829%2038.5233C6.1198%2038.5233%206.0813%2038.485%206.0813%2038.4468C6.04281%2038.4085%206.00431%2038.3703%206.00431%2038.332C5.92738%2038.5233%205.88889%2038.7911%205.88889%2039.0206C5.88889%2040.13%206.81262%2041.0099%207.89033%2041.0099C8.31376%2041.0099%208.69864%2040.8952%209.00658%2040.6656C9.00658%2040.6656%209.00658%2040.6656%208.96809%2040.6656C8.8911%2040.6273%208.81412%2040.5891%208.77562%2040.5126ZM5.35001%2025.8225C5.31152%2025.899%205.27303%2025.9755%205.23454%2025.9755C5.58095%2026.3198%205.73492%2026.7406%205.73492%2027.2379C5.73492%2028.1943%205.0036%2028.9594%204.04135%2028.9977C4.00286%2029.1124%203.96437%2029.189%203.96437%2029.2655C5.08058%2029.2655%205.96588%2028.3473%205.96588%2027.2762C5.96588%2026.7024%205.73492%2026.205%205.35001%2025.8225ZM4.07984%2025.2869C4.04135%2025.2869%204.00286%2025.2869%203.96437%2025.2869C2.84816%2025.2869%201.96289%2026.1668%201.96289%2027.2762C1.96289%2028.003%202.34779%2028.6151%202.88665%2028.9594C2.84816%2028.8447%202.84816%2028.7299%202.88665%2028.6534C2.46326%2028.3091%202.19383%2027.8118%202.19383%2027.2762C2.19383%2026.2815%203.00212%2025.5164%203.96437%2025.5164C3.96437%2025.4782%204.00286%2025.4399%204.00286%2025.4016C4.00286%2025.3634%204.04135%2025.3252%204.07984%2025.2869ZM7.85183%2037.0313C7.46696%2037.0313%207.12057%2037.1461%206.85112%2037.2991C6.9281%2037.3757%206.9666%2037.4139%207.00509%2037.4521C7.27449%2037.2991%207.54394%2037.2226%207.85183%2037.2226C8.85261%2037.2226%209.62242%2038.026%209.62242%2038.9824C9.62242%2039.1354%209.62242%2039.2884%209.58393%2039.4031V39.4414C9.62242%2039.4414%209.69935%2039.4797%209.81483%2039.5179C9.85333%2039.3649%209.89182%2039.1736%209.89182%2039.0206C9.89182%2037.9112%208.96809%2037.0313%207.85183%2037.0313ZM12.5476%2020.6963C12.4322%2020.6963%2012.3552%2020.6963%2012.3167%2020.6963C12.5092%2021.1553%2012.8555%2021.4996%2013.3175%2021.7291C13.3175%2021.6526%2013.3175%2021.5379%2013.3175%2021.4613C12.971%2021.2701%2012.7016%2021.0023%2012.5476%2020.6963ZM2.84816%2026.2815C2.61722%2026.5493%202.46326%2026.8936%202.46326%2027.2762C2.46326%2027.6205%202.57873%2027.9265%202.80967%2028.1943C2.80967%2028.1561%202.80967%2028.1178%202.84816%2028.0795C2.84816%2028.0795%202.84816%2028.0795%202.84816%2028.0413C2.6942%2027.8118%202.61722%2027.544%202.61722%2027.2762C2.61722%2026.6641%203.04061%2026.1285%203.65645%2025.9755C3.69494%2025.899%203.77192%2025.8225%203.8489%2025.7842C3.464%2025.8225%203.11759%2026.0138%202.84816%2026.2815ZM20.4381%2040.3978C20.2841%2040.3978%2020.1302%2040.3596%2019.9762%2040.3213C19.9377%2040.3596%2019.9377%2040.3596%2019.8992%2040.3978C20.0532%2040.4743%2020.2456%2040.5126%2020.4381%2040.5126C21.2464%2040.5126%2021.9392%2039.8623%2021.9392%2039.0206C21.9392%2038.8676%2021.9007%2038.7528%2021.8622%2038.5998C21.8237%2038.5998%2021.8237%2038.5998%2021.8237%2038.5998C21.8237%2038.5998%2021.8237%2038.7146%2021.7852%2038.8293C21.7852%2038.9058%2021.7852%2038.9824%2021.7852%2039.0206C21.7852%2039.7857%2021.1694%2040.3978%2020.4381%2040.3978ZM24.1331%2028.7299C24.1716%2028.7299%2024.1716%2028.7299%2024.1331%2028.7299C24.1716%2028.6917%2024.1331%2028.6534%2024.0946%2028.6151C23.4403%2028.5004%2022.9784%2027.9648%2022.9784%2027.2762C22.9784%2026.9701%2023.0939%2026.7024%2023.2479%2026.5111C23.2094%2026.4728%2023.2094%2026.4345%2023.1709%2026.3581C22.9784%2026.6258%2022.863%2026.9319%2022.863%2027.2379C22.8245%2028.003%2023.4018%2028.6534%2024.1331%2028.7299ZM4.04135%2028.7299C4.84964%2028.6917%205.46548%2028.0413%205.46548%2027.2379C5.46548%2026.9319%205.35001%2026.6258%205.19605%2026.3963C5.15756%2026.4345%205.15756%2026.4728%205.11907%2026.5111C5.27303%2026.7406%205.35001%2026.9701%205.35001%2027.2762C5.35001%2028.003%204.81115%2028.5768%204.07984%2028.6151C4.04135%2028.6917%204.04135%2028.7299%204.04135%2028.7299ZM7.85183%2040.4743C8.00581%2040.4743%208.15978%2040.4361%208.31376%2040.3978C8.27526%2040.3596%208.23677%2040.3596%208.23677%2040.3213C8.12129%2040.3596%208.00581%2040.3596%207.89033%2040.3596C7.12057%2040.3596%206.54322%2039.7474%206.54322%2039.0206V38.9824C6.46624%2038.9058%206.46624%2038.8293%206.42774%2038.7528C6.42774%2038.8293%206.38925%2038.9058%206.38925%2038.9824C6.38925%2039.824%207.04358%2040.4743%207.85183%2040.4743ZM12.971%2020.6197C12.894%2020.6197%2012.8555%2020.5815%2012.817%2020.5815C12.9325%2020.7727%2013.0865%2020.964%2013.3175%2021.117C13.3175%2021.0788%2013.3175%2021.0406%2013.3175%2021.0023C13.1635%2020.8875%2013.0865%2020.7727%2012.971%2020.6197ZM24.0946%2029.036C23.2094%2028.9211%2022.5166%2028.1943%2022.5166%2027.2762C22.5166%2026.7789%2022.709%2026.3198%2023.0554%2025.9755C23.0169%2025.9372%2022.9784%2025.8607%2022.9399%2025.7842C22.5166%2026.1668%2022.2856%2026.6641%2022.2856%2027.2762C22.2856%2028.3473%2023.1324%2029.2272%2024.1716%2029.2655C24.1716%2029.2272%2024.1331%2029.1507%2024.0946%2029.036ZM25.6728%2027.2762C25.6728%2027.6205%2025.5573%2027.9265%2025.3648%2028.1561C25.3648%2028.2325%2025.3648%2028.2708%2025.3648%2028.3091C25.6343%2028.0413%2025.8267%2027.6587%2025.8267%2027.2379C25.8267%2026.5111%2025.2878%2025.899%2024.5565%2025.7842C24.6335%2025.8225%2024.7105%2025.899%2024.749%2025.9755C25.2878%2026.1668%2025.6728%2026.7024%2025.6728%2027.2762ZM22.1316%2038.4468C22.2086%2038.6381%2022.2086%2038.8293%2022.2086%2038.9824C22.2086%2039.977%2021.4004%2040.7421%2020.4381%2040.7421C20.0917%2040.7421%2019.7068%2040.6273%2019.4374%2040.4361C19.3989%2040.4743%2019.3219%2040.5509%2019.2064%2040.5891C19.5528%2040.8569%2019.9762%2041.0099%2020.4381%2041.0099C21.5543%2041.0099%2022.4396%2040.13%2022.4396%2039.0206C22.4396%2038.7528%2022.3626%2038.485%2022.2856%2038.2173C22.2471%2038.332%2022.2086%2038.4085%2022.1316%2038.4468ZM25.2108%2028.5004C25.2493%2028.5004%2025.2493%2028.5004%2025.2108%2028.5004V28.5004ZM24.3256%2025.2869H24.2871C24.3256%2025.3252%2024.3256%2025.3634%2024.3641%2025.4016C24.3641%2025.4399%2024.4026%2025.4782%2024.4026%2025.5164C24.8644%2025.5164%2025.2878%2025.7077%2025.6343%2026.052C25.9806%2026.3963%2026.1346%2026.8171%2026.1346%2027.2762C26.1346%2027.85%2025.8652%2028.3856%2025.3648%2028.7299C25.3648%2028.8064%2025.3648%2028.9211%2025.2878%2029.0742C25.9422%2028.7299%2026.3656%2028.0795%2026.3656%2027.3144C26.3271%2026.205%2025.4418%2025.2869%2024.3256%2025.2869ZM15.3189%2019.2808C15.3959%2019.2808%2015.4344%2019.2808%2015.4729%2019.319C15.242%2018.7835%2014.7031%2018.4392%2014.1257%2018.4392C13.5099%2018.4392%2012.971%2018.8217%2012.7401%2019.3573C12.7786%2019.319%2012.8555%2019.2808%2012.9325%2019.2808C13.1635%2018.86%2013.6254%2018.5922%2014.1257%2018.5922C14.6646%2018.5539%2015.088%2018.86%2015.3189%2019.2808ZM15.4729%2020.6197C15.4344%2020.6197%2015.3574%2020.658%2015.2804%2020.658C15.2035%2020.7727%2015.088%2020.8875%2014.9725%2021.0023V21.0406C14.9725%2021.0788%2014.9725%2021.117%2014.9725%2021.1553C15.2035%2021.0023%2015.3574%2020.811%2015.4729%2020.6197ZM15.7808%2020.6963C15.6268%2021.0023%2015.3574%2021.2701%2015.0495%2021.4613C15.0495%2021.5379%2015.0495%2021.6144%2015.0495%2021.7291C15.4729%2021.5379%2015.8193%2021.1553%2016.0117%2020.7345C15.9732%2020.7345%2015.8962%2020.7345%2015.8578%2020.7345C15.8193%2020.6963%2015.7808%2020.6963%2015.7808%2020.6963ZM14.1257%2017.9036C13.125%2017.9036%2012.2782%2018.6304%2012.1243%2019.5868C12.2012%2019.5103%2012.2782%2019.4721%2012.3552%2019.4721V19.4338C12.5476%2018.6687%2013.279%2018.0948%2014.0872%2018.0948C14.8955%2018.0948%2015.6268%2018.6687%2015.8193%2019.4338C15.8962%2019.4338%2015.9732%2019.4721%2016.0887%2019.5103C15.9347%2018.6304%2015.1265%2017.9036%2014.1257%2017.9036ZM18.6291%2039.0206C18.6291%2038.026%2019.4374%2037.2608%2020.3996%2037.2608C20.669%2037.2608%2020.9384%2037.3374%2021.1694%2037.4139H21.2079C21.2464%2037.3756%2021.2849%2037.2991%2021.3619%2037.2608C21.0924%2037.1078%2020.746%2037.0313%2020.3996%2037.0313C19.2834%2037.0313%2018.3981%2037.9112%2018.3981%2039.0206C18.3981%2039.2119%2018.4366%2039.4031%2018.4751%2039.5944C18.5136%2039.5562%2018.5906%2039.5179%2018.6291%2039.4797C18.6676%2039.4797%2018.6676%2039.4414%2018.706%2039.4414V39.4031C18.6291%2039.2884%2018.6291%2039.1736%2018.6291%2039.0206ZM20.4381%2037.6817C20.5536%2037.6817%2020.6306%2037.6817%2020.746%2037.72C20.7845%2037.6817%2020.823%2037.6434%2020.8999%2037.6051C20.746%2037.5669%2020.6306%2037.5287%2020.4766%2037.5287C19.6683%2037.5287%2018.9754%2038.179%2018.9754%2039.0206C18.9754%2039.1354%2018.9755%2039.2501%2019.0139%2039.4031C19.0524%2039.3649%2019.0909%2039.3267%2019.1294%2039.2884C19.1294%2039.2119%2019.0909%2039.1354%2019.0909%2039.0589C19.0524%2038.2938%2019.6683%2037.6817%2020.4381%2037.6817Z'%20fill='%23FFFFFF'/%3e%3cpath%20d='M21.3236%2023.3358C21.3236%2023.3358%2021.3621%2023.5271%2021.5545%2023.7184C21.7085%2023.9097%2022.0164%2024.0244%2022.0164%2024.0244C22.0164%2024.0244%2022.0549%2024.2157%2022.1704%2024.4453C22.2858%2024.6747%2022.5938%2024.7895%2022.5938%2024.7895C22.5938%2024.7895%2022.6322%2025.0573%2022.7092%2025.1721C22.7862%2025.3251%2023.0172%2025.4781%2023.0172%2025.4781C23.0172%2025.4781%2022.9402%2025.5929%2022.9787%2025.7459C23.0557%2025.9372%2023.1327%2026.0137%2023.1327%2026.0137C23.0172%2026.4727%2023.4021%2026.6258%2023.4021%2026.6258C23.6715%2026.7788%2024.0949%2026.511%2024.0949%2026.511C24.0949%2026.511%2024.4798%2026.5493%2024.7107%2026.2432C24.9802%2025.8989%2024.4028%2025.7077%2024.4028%2025.7077C24.4028%2025.7077%2024.4798%2025.5929%2024.3643%2025.3634C24.2488%2025.1338%2023.9794%2025.0573%2023.9794%2025.0573C23.9794%2025.0573%2023.9794%2024.866%2023.9024%2024.5983C23.8255%2024.3304%2023.4405%2024.1392%2023.4405%2024.1392C23.4405%2024.1392%2023.479%2023.9861%2023.3636%2023.7566C23.2096%2023.4506%2022.8247%2023.2593%2022.8247%2023.2593C22.8247%2023.2593%2022.7477%2023.1063%2022.6322%2022.8768C22.3243%2022.5707%2021.978%2022.5707%2021.978%2022.5707C21.978%2022.5707%2021.901%2022.2264%2021.7855%2022.1116C21.593%2021.9204%2021.2081%2021.8438%2021.2081%2021.8438C21.2081%2021.8438%2021.1697%2021.6908%2020.9387%2021.4613C20.7463%2021.27%2020.2844%2021.2318%2020.2844%2021.2318C20.2844%2021.2318%2020.2459%2021.0405%2020.015%2020.8492C19.7455%2020.6579%2019.3606%2020.6962%2019.3606%2020.6962C19.3606%2020.6962%2019.3606%2020.5814%2019.0142%2020.3519C18.6678%2020.1223%2018.3598%2020.1989%2018.3598%2020.1989C18.3598%2020.1989%2018.2444%2020.0458%2018.0135%2019.9311C17.744%2019.778%2017.3591%2019.8546%2017.3591%2019.8546C17.3591%2019.8546%2017.2437%2019.7015%2016.8973%2019.5868C16.5508%2019.472%2016.2429%2019.625%2016.2429%2019.625C15.935%2019.3572%2015.6656%2019.5103%2015.6656%2019.5103C15.6656%2019.5103%2015.6271%2019.2425%2015.3191%2019.2807C14.7033%2019.3955%2014.8958%2019.8928%2014.8958%2019.8928C14.8958%2019.8928%2014.7803%2019.9693%2014.7418%2020.2371C14.7033%2020.5049%2014.8958%2020.6579%2015.0882%2020.6962C15.2422%2020.7345%2015.5501%2020.6196%2015.5501%2020.6196C15.5501%2020.6196%2015.6656%2020.7345%2015.8195%2020.7345C15.9735%2020.7345%2016.1659%2020.7345%2016.1659%2020.7345C16.1659%2020.7345%2016.2814%2020.8492%2016.5508%2020.9257C16.8203%2021.0022%2017.1282%2020.9257%2017.1282%2020.9257C17.1282%2020.9257%2017.1282%2021.0405%2017.3976%2021.1552C17.6671%2021.27%2017.9365%2021.1935%2017.9365%2021.1935C17.9365%2021.1935%2018.0905%2021.4231%2018.3598%2021.5761C18.5908%2021.6908%2018.8988%2021.6526%2018.8988%2021.6526C18.8988%2021.6526%2019.0527%2021.8438%2019.2836%2021.9969C19.4761%2022.1499%2019.8225%2022.1881%2019.8225%2022.1881C19.8225%2022.1881%2019.938%2022.4177%2020.0919%2022.5707C20.2459%2022.6855%2020.6308%2022.762%2020.6308%2022.762C20.6308%2022.762%2020.7847%2023.0298%2020.9002%2023.1445C20.9772%2023.1828%2021.3236%2023.3358%2021.3236%2023.3358ZM23.7485%2026.5875C23.71%2026.6258%2023.5175%2026.5875%2023.4405%2026.5493C23.3636%2026.511%2023.3251%2026.4345%2023.3251%2026.3963C23.3251%2026.358%2023.3251%2026.358%2023.3636%2026.3197C23.3636%2026.3197%2023.402%2026.3197%2023.4405%2026.3197C23.479%2026.358%2023.5175%2026.358%2023.5945%2026.3963C23.633%2026.3963%2023.6715%2026.4345%2023.71%2026.4345C23.7485%2026.4727%2023.787%2026.4727%2023.787%2026.511C23.787%2026.5493%2023.787%2026.5493%2023.7485%2026.5875ZM24.2488%2025.9754C24.3258%2026.0137%2024.4413%2026.0902%2024.4413%2026.205C24.4413%2026.2815%2024.4028%2026.358%2024.1719%2026.4345C23.787%2026.511%2023.4405%2026.2432%2023.3251%2026.052C23.2481%2025.9372%2023.2481%2025.8989%2023.2866%2025.8607C23.3251%2025.8224%2023.4405%2025.8224%2023.556%2025.8989C23.787%2026.0137%2023.9409%2026.0137%2024.0564%2025.9754C24.0949%2025.9372%2024.1719%2025.9372%2024.2488%2025.9754ZM23.9794%2025.4016C24.0179%2025.5929%2024.0179%2025.7077%2023.9409%2025.7459C23.9024%2025.7841%2023.8255%2025.7841%2023.6715%2025.7077H23.633C23.1711%2025.5929%2022.9787%2025.5164%2022.8632%2025.0573C22.8632%2025.019%2022.8632%2024.9425%2022.9017%2024.9425C22.9402%2024.9043%2023.0557%2024.9426%2023.1711%2024.9808C23.2481%2025.0191%2023.3251%2025.019%2023.4021%2025.0573C23.787%2025.1338%2023.9794%2025.2868%2023.9794%2025.4016ZM23.5175%2024.5983C23.5945%2024.7895%2023.5945%2024.9043%2023.556%2024.9425C23.5175%2024.9808%2023.4405%2024.9808%2023.2866%2024.9425H23.2096C22.6707%2024.7895%2022.4783%2024.7513%2022.2858%2024.2922C22.2858%2024.254%2022.2474%2024.2157%2022.2858%2024.1774C22.3243%2024.1392%2022.4398%2024.1774%2022.6322%2024.2157C22.7092%2024.254%2022.7862%2024.254%2022.8632%2024.2922C23.2866%2024.3304%2023.479%2024.4453%2023.5175%2024.5983ZM22.9402%2023.6801C23.0172%2023.8714%2023.0172%2023.9479%2022.9787%2024.0244C22.9402%2024.0627%2022.8632%2024.0627%2022.7092%2024.0627H22.6322C22.0934%2024.0244%2021.8625%2023.9861%2021.67%2023.5654C21.6315%2023.5271%2021.6315%2023.4888%2021.67%2023.4506C21.7085%2023.3741%2021.8625%2023.4123%2022.0164%2023.4506C22.0934%2023.4506%2022.1704%2023.4888%2022.2474%2023.4888C22.6707%2023.4888%2022.8632%2023.5654%2022.9402%2023.6801ZM22.2474%2022.9915C22.3243%2023.1063%2022.3628%2023.1828%2022.3243%2023.2211C22.2859%2023.2975%2022.2089%2023.2975%2022.0934%2023.2975C21.516%2023.2975%2021.2081%2023.1828%2021.0157%2022.915C20.9772%2022.8385%2020.9772%2022.8002%2020.9772%2022.762C21.0157%2022.6855%2021.1697%2022.6855%2021.3621%2022.6855C21.439%2022.6855%2021.5545%2022.6855%2021.6315%2022.6855C21.901%2022.7237%2022.1319%2022.8385%2022.2474%2022.9915ZM15.0497%2019.625C15.0497%2019.5485%2015.0882%2019.5103%2015.1652%2019.472C15.2422%2019.472%2015.2807%2019.472%2015.3191%2019.472L15.3576%2019.5103C15.3576%2019.5103%2015.2037%2019.5868%2015.1652%2019.6633C15.1267%2019.7015%2015.1267%2019.7015%2015.1267%2019.7015C15.0497%2019.7398%2015.0497%2019.7015%2015.0497%2019.625ZM15.3961%2020.3902C15.3961%2020.4284%2015.3961%2020.4666%2015.3576%2020.5049C15.2807%2020.5432%2015.1267%2020.5432%2015.0497%2020.4666C14.9728%2020.3901%2014.9343%2020.3136%2014.9728%2020.1989C14.9728%2020.1223%2015.0497%2020.0076%2015.2037%2019.8928C15.5116%2019.7015%2015.7426%2019.7398%2015.7426%2019.7398C15.7811%2019.7398%2015.7811%2019.778%2015.7811%2019.8163C15.7811%2019.8546%2015.7426%2019.8928%2015.6656%2019.9693C15.4731%2020.0458%2015.3576%2020.3136%2015.3961%2020.3902ZM15.7426%2020.4666C15.6656%2020.4284%2015.6271%2020.3519%2015.6271%2020.3136C15.6271%2020.1606%2015.858%2020.0076%2016.0505%2019.9311C16.3199%2019.778%2016.5123%2019.778%2016.6663%2019.8546C16.6663%2019.8546%2016.7048%2019.8546%2016.7048%2019.8928C16.7818%2019.9311%2016.8588%2019.9693%2016.8588%2020.0458C16.8588%2020.0841%2016.8203%2020.1606%2016.7048%2020.1989C16.5508%2020.2753%2016.3969%2020.3901%2016.3199%2020.4666C16.1275%2020.5432%2016.012%2020.6196%2015.7426%2020.4666ZM16.5508%2020.6196C16.5123%2020.5814%2016.4738%2020.5432%2016.5123%2020.5049C16.5508%2020.3901%2016.7433%2020.2753%2017.0897%2020.1606C17.3206%2020.0841%2017.5901%2020.0076%2017.744%2020.1223L17.7825%2020.1606C17.8595%2020.1989%2017.9365%2020.2753%2017.9365%2020.3519C17.9365%2020.3901%2017.8595%2020.4284%2017.7825%2020.4666C17.6286%2020.5049%2017.4746%2020.5814%2017.3591%2020.6196C17.0127%2020.7345%2016.7818%2020.8492%2016.5508%2020.6196ZM17.3976%2020.8875C17.3591%2020.8492%2017.3591%2020.8109%2017.3591%2020.8109C17.3976%2020.6579%2017.8595%2020.5432%2018.0135%2020.5049C18.2829%2020.4284%2018.5138%2020.3902%2018.6293%2020.5432C18.6293%2020.5432%2018.6678%2020.5814%2018.7063%2020.6196C18.7833%2020.6962%2018.8603%2020.7345%2018.8603%2020.8109C18.8603%2020.8492%2018.7833%2020.8875%2018.7063%2020.9257C18.5523%2020.9639%2018.4368%2021.0022%2018.3214%2021.0788C18.0135%2021.0788%2017.7825%2021.1935%2017.3976%2020.8875ZM19.2067%2021.4231C18.8988%2021.4995%2018.5908%2021.5378%2018.4368%2021.2318C18.3983%2021.1935%2018.3983%2021.117%2018.4368%2021.0788C18.5138%2020.9257%2018.8218%2020.9257%2019.1682%2020.8875H19.2067C19.5146%2020.8492%2019.6685%2020.9257%2019.784%2021.0405L19.8225%2021.0788C19.8995%2021.1552%2019.938%2021.2318%2019.8995%2021.27C19.861%2021.3083%2019.8225%2021.3465%2019.707%2021.3465C19.5146%2021.3848%2019.3606%2021.3848%2019.2067%2021.4231ZM19.3606%2021.7674C19.3221%2021.6908%2019.3221%2021.6526%2019.3221%2021.6143C19.3991%2021.4995%2019.6685%2021.4613%2019.8995%2021.4613C19.938%2021.4613%2019.9765%2021.4613%2020.015%2021.4613C20.3229%2021.4231%2020.4768%2021.4995%2020.5923%2021.6143L20.6308%2021.6526C20.7078%2021.7291%2020.7463%2021.8056%2020.7078%2021.8438C20.6693%2021.8821%2020.6308%2021.9204%2020.5153%2021.9204C20.3613%2021.9204%2020.2074%2021.9586%2020.0919%2021.9586C19.8225%2022.0351%2019.553%2022.0734%2019.3606%2021.7674ZM20.2074%2022.3412C20.1689%2022.2647%2020.1689%2022.2264%2020.1689%2022.1881C20.2074%2022.0734%2020.4383%2022.0734%2020.6308%2022.0734C20.7078%2022.0734%2020.7463%2022.0734%2020.7847%2022.0734C21.0927%2022.0351%2021.2466%2022.1116%2021.3621%2022.2264L21.4006%2022.2647C21.4775%2022.3412%2021.516%2022.4177%2021.4775%2022.4559C21.439%2022.4942%2021.4006%2022.5324%2021.2851%2022.5324C21.1312%2022.5324%2021.0157%2022.5707%2020.9002%2022.5707C20.6308%2022.6089%2020.4383%2022.6472%2020.2074%2022.3412ZM19.861%2039.6326C19.861%2039.6326%2019.938%2039.5179%2019.784%2039.2884C19.63%2039.0588%2019.4376%2039.0588%2019.2451%2039.1353C19.0912%2039.2118%2018.8988%2039.4796%2018.8988%2039.4796C18.8988%2039.4796%2018.7448%2039.4414%2018.6293%2039.5179C18.4753%2039.5944%2018.3598%2039.7092%2018.3598%2039.7092C18.3598%2039.7092%2018.2059%2039.6709%2017.9365%2039.7857C17.6671%2039.9004%2017.4746%2040.1299%2017.4746%2040.1299C17.4746%2040.1299%2017.3976%2040.0535%2017.0897%2040.0917C16.7818%2040.13%2016.6278%2040.3595%2016.6278%2040.3595C16.6278%2040.3595%2016.3584%2040.2448%2016.0505%2040.3212C15.8196%2040.3595%2015.5886%2040.5891%2015.5886%2040.5891C15.5886%2040.5891%2015.3576%2040.5125%2015.0882%2040.5508C14.8573%2040.5508%2014.5109%2040.7038%2014.5109%2040.7038C14.5109%2040.7038%2014.2799%2040.5508%2014.0875%2040.5508C13.8951%2040.5125%2013.5486%2040.7038%2013.5486%2040.7038C13.5486%2040.7038%2013.2407%2040.5508%2013.0867%2040.5508C12.9328%2040.5125%2012.5864%2040.6273%2012.5864%2040.6273C12.5864%2040.6273%2012.4324%2040.5125%2012.163%2040.436C11.8936%2040.3595%2011.6241%2040.436%2011.6241%2040.436C11.6241%2040.436%2011.4702%2040.283%2011.2392%2040.2065C11.0083%2040.0917%2010.7004%2040.1682%2010.7004%2040.1682C10.7004%2040.1682%2010.5464%2039.9769%2010.3924%2039.9004C10.2385%2039.8239%209.96905%2039.8239%209.96905%2039.8239C9.96905%2039.8239%209.96905%2039.6709%209.85357%2039.5944C9.66111%2039.4796%209.54568%2039.4414%209.54568%2039.4414C9.35321%2038.9823%208.96834%2039.0971%208.96834%2039.0971C8.66039%2039.1353%208.46792%2039.5944%208.46792%2039.5944C8.46792%2039.5944%208.16003%2039.7474%208.12153%2040.1682C8.12153%2040.5891%208.69888%2040.3978%208.69888%2040.3978C8.69888%2040.3978%208.69888%2040.5125%208.92984%2040.6273C9.12225%2040.7421%209.39171%2040.6655%209.39171%2040.6655C9.39171%2040.6655%209.50719%2040.8186%209.73809%2040.9716C9.96905%2041.1246%2010.3924%2041.0481%2010.3924%2041.0481C10.3924%2041.0481%2010.4694%2041.2011%2010.6619%2041.3159C10.9698%2041.4689%2011.3932%2041.3924%2011.3932%2041.3924C11.3932%2041.3924%2011.5471%2041.5072%2011.7781%2041.5837C12.2015%2041.7367%2012.4709%2041.5072%2012.4709%2041.5072C12.4709%2041.5072%2012.7019%2041.7367%2012.8943%2041.775C13.1637%2041.8132%2013.5486%2041.6602%2013.5486%2041.6602C13.5486%2041.6602%2013.7026%2041.775%2013.972%2041.8132C14.2414%2041.8515%2014.6648%2041.622%2014.6648%2041.622C14.6648%2041.622%2014.8188%2041.775%2015.1267%2041.775C15.4731%2041.775%2015.7811%2041.5454%2015.7811%2041.5454C15.7811%2041.5454%2015.858%2041.622%2016.2429%2041.622C16.6663%2041.622%2016.8588%2041.3541%2016.8588%2041.3541C16.8588%2041.3541%2017.0512%2041.4307%2017.3206%2041.3924C17.6286%2041.3541%2017.898%2041.0481%2017.898%2041.0481C17.898%2041.0481%2018.0905%2041.1246%2018.3983%2041.0098C18.7448%2040.8951%2018.8988%2040.5891%2018.8988%2040.5891C19.3221%2040.6273%2019.4376%2040.3595%2019.4376%2040.3595C19.4376%2040.3595%2019.63%2040.5508%2019.861%2040.3595C20.3613%2039.9387%2019.861%2039.6326%2019.861%2039.6326ZM8.73737%2039.4414C8.77587%2039.3649%208.92984%2039.2884%209.00683%2039.2884C9.08376%2039.2884%209.16075%2039.3266%209.16075%2039.3649C9.16075%2039.4031%209.19924%2039.4031%209.16075%2039.4414C9.16075%2039.4414%209.12225%2039.4796%209.08376%2039.4796C9.04527%2039.4796%208.96834%2039.4796%208.92984%2039.5179C8.89135%2039.5179%208.85285%2039.5561%208.77587%2039.5561C8.77587%2039.5179%208.77587%2039.4796%208.73737%2039.4414C8.73737%2039.4796%208.73737%2039.4796%208.73737%2039.4414ZM8.89135%2040.0917C8.85285%2040.13%208.77587%2040.1682%208.73737%2040.2065C8.66039%2040.2448%208.50641%2040.2065%208.46792%2040.1299C8.42943%2040.0917%208.39099%2039.9769%208.54491%2039.7857C8.81436%2039.4796%209.23773%2039.5179%209.46869%2039.5944C9.58418%2039.6326%209.62267%2039.6709%209.62267%2039.7474C9.62267%2039.8239%209.54568%2039.8622%209.35321%2039.9004C9.08376%2039.9004%208.96834%2040.0152%208.89135%2040.0917ZM9.23773%2040.5125C9.08376%2040.3595%209.04527%2040.283%209.04527%2040.2065C9.04527%2040.1299%209.12225%2040.1299%209.27623%2040.0535H9.31472C9.73809%2039.9004%209.96905%2039.8239%2010.3154%2040.1682C10.3539%2040.2065%2010.3924%2040.2448%2010.3539%2040.283C10.3539%2040.3595%2010.2385%2040.3978%2010.0845%2040.436C10.0075%2040.4743%209.93056%2040.4743%209.85357%2040.5125C9.58418%2040.5891%209.35321%2040.6273%209.23773%2040.5125ZM10.123%2040.9334C9.96905%2040.8186%209.89207%2040.7421%209.89207%2040.6655C9.89207%2040.5891%209.96905%2040.5891%2010.0845%2040.5125L10.1615%2040.4743C10.6619%2040.283%2010.8928%2040.2065%2011.2777%2040.4743C11.2777%2040.4743%2011.3547%2040.5125%2011.3547%2040.5891C11.3547%2040.6655%2011.2007%2040.7038%2011.0468%2040.7421C10.9698%2040.7803%2010.8928%2040.7803%2010.8159%2040.8186C10.4694%2040.9716%2010.2385%2041.0098%2010.123%2040.9334ZM11.7781%2041.1246C11.4702%2041.3159%2011.2392%2041.3541%2011.1237%2041.2777C10.9698%2041.1629%2010.8928%2041.1246%2010.8928%2041.0481C10.8928%2040.9716%2010.9698%2040.9334%2011.0853%2040.8951L11.1237%2040.8568C11.5856%2040.5891%2011.7781%2040.4743%2012.2015%2040.7038C12.2399%2040.7421%2012.2784%2040.7421%2012.2784%2040.7803C12.2784%2040.8568%2012.163%2040.9334%2012.009%2041.0098C11.9321%2041.0481%2011.8551%2041.0864%2011.7781%2041.1246ZM12.1245%2041.4689C12.009%2041.4307%2011.9321%2041.3541%2011.9321%2041.3159C11.9321%2041.2394%2011.9705%2041.1629%2012.086%2041.1246C12.5479%2040.7803%2012.8558%2040.6655%2013.1637%2040.8186C13.2407%2040.8568%2013.2792%2040.8951%2013.2792%2040.9334C13.2792%2041.0098%2013.1637%2041.0864%2013.0098%2041.2011C12.9328%2041.2394%2012.8558%2041.3159%2012.8173%2041.3541C12.5479%2041.4689%2012.2784%2041.5072%2012.1245%2041.4689ZM13.7796%2041.3924C13.5486%2041.5837%2013.3561%2041.6602%2013.2022%2041.5837C13.2022%2041.5837%2013.1637%2041.5837%2013.1252%2041.5837C13.0483%2041.5454%2012.9328%2041.5454%2012.9328%2041.4689C12.9328%2041.4307%2012.9713%2041.3541%2013.0483%2041.3159C13.1637%2041.2394%2013.2407%2041.1629%2013.3562%2041.0481C13.5871%2040.8186%2013.7796%2040.6655%2014.0875%2040.8186C14.1645%2040.8568%2014.2029%2040.8951%2014.2029%2040.9334C14.2029%2041.0481%2014.049%2041.1629%2013.8951%2041.2777C13.8566%2041.3159%2013.8181%2041.3541%2013.7796%2041.3924ZM14.7803%2041.3924C14.5494%2041.5837%2014.3569%2041.6602%2014.2029%2041.5837C14.2029%2041.5837%2014.1645%2041.5837%2014.126%2041.5837C14.049%2041.5454%2013.9335%2041.5454%2013.9335%2041.4689C13.9335%2041.4307%2013.972%2041.3541%2014.049%2041.3159C14.1645%2041.2011%2014.2799%2041.1246%2014.3569%2041.0098C14.5878%2040.7803%2014.7803%2040.5891%2015.0882%2040.7421C15.1652%2040.7803%2015.2037%2040.8186%2015.2037%2040.8568C15.2422%2041.0098%2015.0113%2041.1629%2014.8188%2041.3159C14.8573%2041.3541%2014.8188%2041.3924%2014.7803%2041.3924ZM15.858%2041.3159C15.5886%2041.5454%2015.3961%2041.622%2015.2422%2041.5454C15.2422%2041.5454%2015.2037%2041.5454%2015.1652%2041.5454C15.0882%2041.5072%2014.9728%2041.5072%2014.9728%2041.4307C14.9728%2041.3924%2015.0113%2041.3159%2015.0882%2041.2777C15.2422%2041.1629%2015.3191%2041.0481%2015.4346%2040.9716C15.6656%2040.7421%2015.858%2040.5125%2016.2044%2040.6655C16.2814%2040.7038%2016.2814%2040.7421%2016.3199%2040.7803C16.3584%2040.8951%2016.1275%2041.1246%2015.858%2041.3159ZM16.4738%2041.3541C16.4354%2041.3541%2016.3969%2041.3541%2016.3969%2041.3541C16.2814%2041.3541%2016.2044%2041.3541%2016.1659%2041.2777C16.1659%2041.2394%2016.1659%2041.1629%2016.2429%2041.1246C16.3584%2041.0098%2016.3969%2040.8951%2016.4738%2040.7803C16.6278%2040.5125%2016.7818%2040.3212%2017.2437%2040.3212C17.2821%2040.3212%2017.3206%2040.3595%2017.3206%2040.3595C17.3591%2040.5125%2017.0897%2040.8568%2016.9743%2041.0098C16.7818%2041.2394%2016.6278%2041.3924%2016.4738%2041.3541ZM17.9365%2040.7421C17.7825%2040.9334%2017.6286%2041.1629%2017.4361%2041.1629C17.4361%2041.1629%2017.3976%2041.1629%2017.3591%2041.1629C17.2821%2041.1629%2017.1667%2041.1629%2017.1282%2041.0864C17.0897%2041.0481%2017.1282%2040.9716%2017.2052%2040.8951C17.3206%2040.7421%2017.3976%2040.6273%2017.4746%2040.5125C17.6286%2040.2448%2017.744%2040.0535%2018.0905%2040.0535C18.1674%2040.0535%2018.2059%2040.0917%2018.2059%2040.1299C18.2829%2040.2065%2018.1674%2040.436%2017.9365%2040.7421ZM18.9372%2040.3595C18.7833%2040.6273%2018.6678%2040.7803%2018.5138%2040.7803C18.5138%2040.7803%2018.4753%2040.7803%2018.4368%2040.7803C18.3599%2040.7803%2018.2444%2040.8186%2018.2059%2040.7421C18.1674%2040.7038%2018.2059%2040.6273%2018.2444%2040.5508C18.3599%2040.3978%2018.3983%2040.2448%2018.3983%2040.0917C18.4753%2039.8622%2018.5138%2039.7092%2018.8218%2039.7092C18.8988%2039.7092%2018.9757%2039.7474%2019.0142%2039.7857C19.1297%2039.9004%2019.0527%2040.1682%2018.9372%2040.3595ZM19.63%2039.8239C19.5146%2040.1682%2019.2836%2040.2448%2019.2836%2040.2448C19.2451%2040.2448%2019.2067%2040.2448%2019.2067%2040.2065C19.1682%2040.1682%2019.2067%2040.0917%2019.2451%2040.0152C19.3606%2039.8239%2019.2836%2039.5561%2019.2067%2039.5179C19.1682%2039.4796%2019.1682%2039.4414%2019.1682%2039.4031C19.2067%2039.3266%2019.3221%2039.2501%2019.4376%2039.2501C19.553%2039.2501%2019.5915%2039.3266%2019.6685%2039.4031C19.6685%2039.5179%2019.707%2039.6326%2019.63%2039.8239ZM19.861%2040.1682C19.8225%2040.2065%2019.7455%2040.2448%2019.707%2040.2448C19.6685%2040.2448%2019.6685%2040.2448%2019.6685%2040.2448C19.6685%2040.2065%2019.7455%2040.0917%2019.7455%2040.0152C19.7455%2039.9769%2019.784%2039.9769%2019.784%2039.9769C19.8225%2039.9769%2019.861%2040.0152%2019.8995%2040.0535C19.938%2040.0152%2019.938%2040.0917%2019.861%2040.1682ZM8.50641%2022.1116C8.50641%2022.1116%208.85286%2022.0351%209.04527%2021.9204C9.23773%2021.7674%209.4302%2021.5761%209.4302%2021.5761C9.4302%2021.5761%209.73809%2021.6143%209.96905%2021.4995C10.2385%2021.3848%2010.3924%2021.117%2010.3924%2021.117C10.3924%2021.117%2010.6619%2021.1935%2010.9313%2021.0788C11.2007%2020.964%2011.2007%2020.8492%2011.2007%2020.8492C11.2007%2020.8492%2011.4702%2020.964%2011.7781%2020.8492C12.0475%2020.7727%2012.163%2020.6579%2012.163%2020.6579C12.163%2020.6579%2012.3554%2020.6579%2012.5094%2020.6579C12.6634%2020.6579%2012.7788%2020.5432%2012.7788%2020.5432C12.7788%2020.5432%2013.0867%2020.6579%2013.2407%2020.6196C13.4331%2020.5814%2013.6256%2020.4666%2013.5871%2020.1606C13.5486%2019.8928%2013.4331%2019.8163%2013.4331%2019.8163C13.4331%2019.8163%2013.6641%2019.319%2013.0098%2019.2042C12.7019%2019.2425%2012.6634%2019.5103%2012.6634%2019.5103C12.6634%2019.5103%2012.3939%2019.3572%2012.086%2019.625C12.086%2019.625%2011.7781%2019.472%2011.4317%2019.5868C11.0853%2019.7015%2010.9698%2019.8546%2010.9698%2019.8546C10.9698%2019.8546%2010.5849%2019.778%2010.3154%2019.9311C10.0845%2020.0458%209.96905%2020.1989%209.96905%2020.1989C9.96905%2020.1989%209.66111%2020.0841%209.31472%2020.3519C8.96834%2020.5814%208.96834%2020.6962%208.96834%2020.6962C8.96834%2020.6962%208.5834%2020.6579%208.314%2020.8492C8.08304%2021.0022%208.04455%2021.2318%208.04455%2021.2318C8.04455%2021.2318%207.58268%2021.27%207.39021%2021.4613C7.19775%2021.6526%207.12082%2021.8438%207.12082%2021.8438C7.12082%2021.8438%206.69739%2021.9204%206.54347%2022.1116C6.42799%2022.2647%206.351%2022.5707%206.351%2022.5707C6.351%2022.5707%206.00456%2022.5707%205.73516%2022.915C5.58119%2023.1445%205.5427%2023.2975%205.5427%2023.2975C5.5427%2023.2975%205.11931%2023.4888%205.00384%2023.7949C4.88837%2023.9861%204.92687%2024.1774%204.92687%2024.1774C4.92687%2024.1774%204.54197%2024.3304%204.46498%2024.6365C4.388%2024.9043%204.388%2025.0956%204.388%2025.0956C4.388%2025.0956%204.11858%2025.2103%204.0031%2025.4016C3.88763%2025.6311%203.96461%2025.7459%203.96461%2025.7459C3.96461%2025.7459%203.38726%2025.9372%203.65669%2026.2815C3.92613%2026.6258%204.27253%2026.5493%204.27253%2026.5493C4.27253%2026.5493%204.65743%2026.817%204.96535%2026.664C4.96535%2026.664%205.31176%2026.511%205.23479%2026.052C5.23479%2026.052%205.35026%2025.9754%205.38874%2025.7841C5.42723%2025.6694%205.35026%2025.5164%205.35026%2025.5164C5.35026%2025.5164%205.58119%2025.3634%205.65818%2025.2103C5.73516%2025.0573%205.77366%2024.8278%205.77366%2024.8278C5.77366%2024.8278%206.04305%2024.6747%206.19703%2024.4835C6.31251%2024.2922%206.351%2024.0627%206.351%2024.0627C6.351%2024.0627%206.6204%2023.9479%206.81287%2023.7566C6.96684%2023.5654%207.04383%2023.3741%207.04383%2023.3741C7.04383%2023.3741%207.39021%2023.2593%207.50569%2023.1445C7.62118%2023.0298%207.77515%2022.762%207.77515%2022.762C7.77515%2022.762%208.16003%2022.6855%208.314%2022.5707C8.39099%2022.3794%208.50641%2022.1116%208.50641%2022.1116ZM12.9713%2019.5485C13.0098%2019.472%2013.0867%2019.472%2013.1637%2019.5103C13.2407%2019.5103%2013.2792%2019.5868%2013.2792%2019.6633C13.2792%2019.7015%2013.2792%2019.778%2013.2407%2019.778C13.2407%2019.778%2013.2022%2019.778%2013.2022%2019.7398C13.1637%2019.6633%2013.0098%2019.5868%2012.9713%2019.5485ZM12.5864%2019.778C12.5864%2019.778%2012.8173%2019.7015%2013.1252%2019.9311C13.3177%2020.0458%2013.3562%2020.1606%2013.3562%2020.2371C13.3562%2020.3519%2013.3177%2020.4284%2013.2792%2020.5049C13.2022%2020.5814%2013.0483%2020.5814%2012.9713%2020.5432C12.9328%2020.5049%2012.8943%2020.4666%2012.9328%2020.4284C12.9713%2020.3519%2012.8558%2020.0841%2012.6634%2019.9693C12.5864%2019.9311%2012.5479%2019.8928%2012.5479%2019.8163C12.5479%2019.778%2012.5864%2019.778%2012.5864%2019.778ZM11.6626%2019.8546C11.7011%2019.8546%2011.7011%2019.8163%2011.7011%2019.8163C11.8551%2019.7398%2012.0475%2019.7398%2012.3169%2019.8928C12.5094%2020.0076%2012.7019%2020.1223%2012.7403%2020.2753C12.7403%2020.3519%2012.7019%2020.3902%2012.6249%2020.4284C12.3554%2020.6196%2012.2399%2020.5049%2012.0475%2020.3519C11.9321%2020.2753%2011.8166%2020.1606%2011.6626%2020.0841C11.5471%2020.0458%2011.5086%2020.0076%2011.5086%2019.9311C11.4702%2019.9311%2011.5856%2019.8928%2011.6626%2019.8546ZM10.5464%2020.1606L10.5849%2020.1223C10.7389%2020.0076%2011.0083%2020.0841%2011.2392%2020.1606C11.6241%2020.2753%2011.8166%2020.3901%2011.8166%2020.5049C11.8166%2020.5432%2011.8166%2020.5814%2011.7781%2020.6196C11.5086%2020.8492%2011.3162%2020.7345%2011.0083%2020.6196C10.8928%2020.5432%2010.7389%2020.5049%2010.5849%2020.4666C10.4694%2020.4284%2010.4309%2020.3901%2010.4309%2020.3519C10.4309%2020.2753%2010.4694%2020.2371%2010.5464%2020.1606ZM9.62267%2020.5814C9.66111%2020.5432%209.66111%2020.5432%209.6996%2020.5049C9.81508%2020.3519%2010.046%2020.4284%2010.3154%2020.4666C10.4694%2020.5049%2010.9313%2020.6196%2010.9698%2020.7727C10.9698%2020.8109%2010.9698%2020.8109%2010.9313%2020.8492C10.5464%2021.1552%2010.3539%2021.0788%2010.046%2020.964C9.93056%2020.9257%209.81508%2020.8492%209.66111%2020.8109C9.54568%2020.7727%209.50719%2020.7727%209.50719%2020.6962C9.46869%2020.6962%209.54568%2020.6196%209.62267%2020.5814ZM8.54491%2021.0788L8.5834%2021.0405C8.69888%2020.8875%208.85286%2020.8492%209.16075%2020.8875H9.23773C9.54568%2020.9257%209.89207%2020.964%209.96905%2021.0788C10.0075%2021.117%209.96905%2021.1935%209.96905%2021.2318C9.77659%2021.5378%209.50719%2021.4613%209.19924%2021.4231C9.04527%2021.3848%208.89135%2021.3848%208.73737%2021.3465C8.62189%2021.3465%208.5834%2021.3083%208.54491%2021.27C8.42943%2021.2318%208.50641%2021.1552%208.54491%2021.0788ZM4.88837%2026.5493C4.81139%2026.5875%204.61894%2026.6258%204.58045%2026.5875L4.54197%2026.5493C4.54197%2026.511%204.58045%2026.511%204.61894%2026.4727C4.65743%2026.4345%204.69592%2026.4345%204.73442%2026.4345C4.81139%2026.3963%204.84989%2026.3963%204.88837%2026.358C4.92686%2026.3197%204.92686%2026.358%204.96535%2026.358C5.00384%2026.358%205.00384%2026.3963%205.00384%2026.4345C5.00384%2026.4345%204.96535%2026.511%204.88837%2026.5493ZM5.04234%2026.052C4.92687%2026.2432%204.58045%2026.511%204.19555%2026.4345C3.96461%2026.3963%203.92613%2026.2815%203.92613%2026.205C3.92613%2026.0902%204.04159%2026.0137%204.11858%2025.9754C4.19555%2025.9372%204.27253%2025.9754%204.31102%2025.9754C4.4265%2025.9754%204.58045%2026.0137%204.81139%2025.8989C4.96535%2025.8224%205.04234%2025.8224%205.08082%2025.8607C5.11931%2025.8607%205.11931%2025.9754%205.04234%2026.052ZM5.42723%2025.0956C5.31176%2025.5546%205.11931%2025.6311%204.65743%2025.7459H4.61894C4.46498%2025.7841%204.388%2025.8224%204.34951%2025.7841C4.31102%2025.7459%204.31102%2025.6311%204.31102%2025.4399C4.34951%2025.2868%204.50347%2025.1721%204.84989%2025.0956C4.92687%2025.0573%205.00384%2025.0573%205.08082%2025.0191C5.23479%2024.9808%205.31176%2024.9426%205.35026%2024.9808C5.42723%2024.9808%205.46572%2025.0191%205.42723%2025.0956ZM6.00456%2024.254C5.81215%2024.713%205.61968%2024.7895%205.08082%2024.9043H5.00384C4.84989%2024.9425%204.7729%2024.9425%204.73442%2024.9043C4.69592%2024.866%204.69592%2024.7513%204.7729%2024.56C4.81139%2024.407%205.00384%2024.2922%205.38874%2024.2157C5.46573%2024.2157%205.54271%2024.1774%205.61968%2024.1392C5.77366%2024.1009%205.92763%2024.0244%205.96607%2024.1009C6.04305%2024.1774%206.00456%2024.2157%206.00456%2024.254ZM6.6204%2023.5271C6.42799%2023.9479%206.23552%2023.9861%205.65818%2024.0244H5.58119C5.42723%2024.0244%205.35026%2024.0627%205.31176%2023.9861C5.27327%2023.9479%205.31176%2023.8331%205.35026%2023.6418C5.38874%2023.4888%205.61968%2023.4123%205.96607%2023.3741C6.04305%2023.3741%206.12004%2023.3741%206.19703%2023.3358C6.3895%2023.2975%206.50498%2023.2975%206.54347%2023.3358C6.65889%2023.4506%206.65889%2023.4888%206.6204%2023.5271ZM7.35172%2022.9532C7.15931%2023.2211%206.85136%2023.3358%206.27402%2023.3358C6.15854%2023.3358%206.08155%2023.2975%206.04305%2023.2593C6.00456%2023.1828%206.04305%2023.1063%206.12004%2023.0298C6.23552%2022.8768%206.46648%2022.762%206.73588%2022.8002C6.81287%2022.8002%206.88985%2022.8002%207.00534%2022.8002C7.19775%2022.8002%207.35172%2022.8002%207.39021%2022.8768C7.39021%2022.8385%207.39021%2022.8768%207.35172%2022.9532ZM8.12153%2022.3412C7.92907%2022.6472%207.69816%2022.6089%207.39021%2022.5707C7.27473%2022.5707%207.15931%2022.5324%207.00534%2022.5324C6.88985%2022.5324%206.85136%2022.4942%206.81287%2022.4559C6.77437%2022.3794%206.85136%2022.3029%206.88986%2022.2647L6.92835%2022.2264C7.04383%2022.0734%207.19775%2022.0351%207.50569%2022.0734C7.54419%2022.0734%207.62118%2022.0734%207.65967%2022.0734C7.85208%2022.0734%208.08304%2022.0734%208.12153%2022.1881C8.16003%2022.2264%208.16003%2022.2647%208.12153%2022.3412ZM7.77515%2021.9204C7.65967%2021.9204%207.62118%2021.8821%207.58268%2021.8438C7.54419%2021.7674%207.62118%2021.6908%207.65967%2021.6526L7.69816%2021.6143C7.81359%2021.4613%207.96756%2021.4231%208.27551%2021.4613C8.314%2021.4613%208.3525%2021.4613%208.39099%2021.4613C8.62189%2021.4613%208.89135%2021.4995%208.96834%2021.6143C9.00683%2021.6526%208.96834%2021.7291%208.92984%2021.7674C8.73737%2022.0734%208.46792%2022.0351%208.16003%2021.9586C8.08304%2021.9586%207.92907%2021.9204%207.77515%2021.9204ZM7.04383%2037.4903C7.04383%2037.4903%207.00534%2037.3756%206.81287%2037.2608C6.69739%2037.1843%206.58191%2037.2226%206.58191%2037.2226C6.58191%2037.2226%206.46648%2036.9548%206.3895%2036.84C6.27402%2036.7252%206.04305%2036.6105%206.04305%2036.6105C6.04305%2036.6105%206.00456%2036.3044%205.85064%2036.1132C5.69667%2035.9219%205.50421%2035.8454%205.50421%2035.8454C5.50421%2035.8454%205.46573%2035.5393%205.35026%2035.3098C5.19629%2035.0803%205.04234%2034.9655%205.04234%2034.9655C5.04234%2034.9655%205.04234%2034.5829%204.92687%2034.4681C4.84989%2034.3534%204.61894%2034.1238%204.61894%2034.1238C4.61894%2034.1238%204.65743%2033.7413%204.58045%2033.5883C4.50347%2033.4353%204.31102%2033.244%204.31102%2033.244C4.31102%2033.244%204.34951%2032.8997%204.27253%2032.6701C4.19555%2032.4406%204.08008%2032.2111%204.08008%2032.2111C4.08008%2032.2111%204.19555%2031.9433%204.19555%2031.7138C4.15706%2031.446%203.96461%2031.2164%203.96461%2031.2164C3.96461%2031.2164%204.11858%2030.9869%204.08008%2030.6809C4.04159%2030.3748%203.92613%2030.3366%203.92613%2030.3366C3.92613%2030.3366%204.08008%2030.1071%204.11858%2029.801C4.11858%2029.4949%204.04159%2029.3802%204.04159%2029.3802C4.04159%2029.3802%204.11858%2029.2272%204.15706%2029.0359C4.19555%2028.8829%204.11858%2028.7681%204.11858%2028.7681C4.11858%2028.7681%204.31102%2028.5003%204.31102%2028.3473C4.34951%2028.156%204.27253%2027.9265%204.0031%2027.8882C3.73367%2027.85%203.61821%2027.9647%203.61821%2027.9647C3.61821%2027.9647%203.11784%2027.5439%202.8484%2028.1177C2.69445%2028.3855%202.96387%2028.5386%202.96387%2028.5386C2.96387%2028.5386%202.73293%2028.7298%202.92538%2029.1124C2.92538%2029.1124%202.69445%2029.3802%202.69445%2029.7245C2.69445%2030.0688%202.80992%2030.2218%202.80992%2030.2218C2.80992%2030.2218%202.61746%2030.5661%202.69445%2030.8721C2.77142%2031.1017%202.8484%2031.2929%202.8484%2031.2929C2.8484%2031.2929%202.65595%2031.5608%202.80992%2031.9433C2.92538%2032.3258%203.04085%2032.3641%203.04085%2032.3641C3.04085%2032.3641%202.8869%2032.7084%203.00237%2033.0527C3.11784%2033.3205%203.27179%2033.4353%203.27179%2033.4353C3.27179%2033.4353%203.15632%2033.8943%203.31029%2034.1238C3.46424%2034.3917%203.57971%2034.4681%203.57971%2034.4681C3.57971%2034.4681%203.54122%2034.889%203.65669%2035.1185C3.73367%2035.2715%204.04159%2035.4246%204.04159%2035.4246C4.04159%2035.4246%203.92613%2035.7689%204.19555%2036.1132C4.34951%2036.3044%204.50347%2036.4192%204.50347%2036.4192C4.50347%2036.4192%204.58045%2036.8783%204.81139%2037.1078C4.96535%2037.2608%205.1578%2037.299%205.1578%2037.299C5.1578%2037.299%205.19629%2037.7199%205.42723%2037.8729C5.65818%2038.0259%205.85064%2038.0642%205.85064%2038.0642C5.85064%2038.0642%205.85064%2038.3319%206.04305%2038.5232C6.23552%2038.6763%206.351%2038.638%206.351%2038.638C6.351%2038.638%206.3895%2039.2501%206.77437%2039.0971C7.15931%2038.9441%207.23624%2038.5998%207.23624%2038.5998C7.23624%2038.5998%207.62118%2038.2937%207.54419%2037.9876C7.54419%2037.9494%207.50569%2037.5669%207.04383%2037.4903ZM3.46424%2028.156C3.61821%2028.003%203.77216%2028.003%203.84914%2028.003C3.96461%2028.003%204.0031%2028.0795%204.08008%2028.156C4.11858%2028.2708%204.08008%2028.3855%204.0031%2028.462C3.96461%2028.5003%203.92613%2028.5003%203.88763%2028.462C3.81066%2028.4238%203.54122%2028.4238%203.38726%2028.5768C3.31029%2028.6533%203.27179%2028.6916%203.2333%2028.6533C3.19482%2028.6533%203.19482%2028.615%203.19482%2028.5768C3.15632%2028.6533%203.19482%2028.3855%203.46424%2028.156ZM3.07934%2028.0412C3.11784%2027.9647%203.19482%2027.9647%203.2333%2027.9647C3.27179%2027.9647%203.31029%2028.003%203.31029%2028.0412C3.31029%2028.0412%203.31029%2028.0795%203.27179%2028.0795C3.19482%2028.1177%203.07934%2028.2325%203.07934%2028.2325C3.07934%2028.2325%203.04085%2028.2325%203.04085%2028.1943C3.04085%2028.156%203.04085%2028.1177%203.07934%2028.0412ZM3.19482%2028.9976C3.34877%2028.8446%203.54122%2028.6916%203.69518%2028.7298C3.77216%2028.7298%203.81066%2028.8063%203.84914%2028.8829C3.96461%2029.1889%203.81066%2029.2654%203.61821%2029.3802C3.50274%2029.4567%203.38726%2029.5332%203.2333%2029.6862C3.15632%2029.7628%203.07934%2029.801%203.04085%2029.801C2.96387%2029.7628%202.96387%2029.6862%202.92538%2029.6097C2.92538%2029.5715%202.92538%2029.5715%202.92538%2029.5332C2.8869%2029.3419%202.96387%2029.1889%203.19482%2028.9976ZM2.92538%2030.6809C2.8484%2030.5278%203.00237%2030.2601%203.15632%2030.0688C3.38726%2029.7628%203.57971%2029.6097%203.65669%2029.6097C3.69518%2029.6097%203.73367%2029.648%203.77216%2029.6862C3.92613%2029.9923%203.73367%2030.1835%203.54122%2030.4131C3.46424%2030.5278%203.34877%2030.6426%203.27179%2030.7956C3.19482%2030.9104%203.15632%2030.9487%203.11783%2030.9487C3.04085%2030.9487%203.00237%2030.8339%202.96387%2030.7574C2.92538%2030.6809%202.92538%2030.6809%202.92538%2030.6809ZM3.00237%2031.6372C2.92538%2031.4842%203.04085%2031.2929%203.15632%2031.0634C3.2333%2030.9104%203.50274%2030.5278%203.65669%2030.5278C3.69518%2030.5278%203.69518%2030.5278%203.73367%2030.6044C3.92613%2031.0634%203.77216%2031.2164%203.57971%2031.4842C3.50274%2031.599%203.42576%2031.6755%203.34877%2031.8285C3.31029%2031.9051%203.2333%2031.9433%203.19482%2031.9433C3.11784%2031.9433%203.07934%2031.8285%203.04085%2031.752C3.04085%2031.7138%203.04085%2031.6755%203.00237%2031.6372ZM3.2333%2032.8997L3.19482%2032.8614C3.07934%2032.7084%203.07934%2032.5554%203.2333%2032.2494L3.27179%2032.2111C3.38726%2031.9051%203.54122%2031.6372%203.69518%2031.599C3.73368%2031.599%203.81066%2031.599%203.84914%2031.6755C4.08008%2031.9433%203.96461%2032.1728%203.77216%2032.4789C3.69518%2032.5937%203.61821%2032.7467%203.57971%2032.8997C3.54122%2033.0144%203.50274%2033.0527%203.46424%2033.0527C3.34877%2033.0527%203.27179%2032.938%203.2333%2032.8997ZM3.69518%2034.0474C3.61821%2034.0474%203.57971%2033.9708%203.54122%2033.8943L3.50274%2033.8561C3.38726%2033.7031%203.38726%2033.55%203.54122%2033.244C3.54122%2033.2057%203.57971%2033.1675%203.57971%2033.1292C3.65669%2032.8997%203.77216%2032.6701%203.88763%2032.6319C3.92613%2032.6319%204.0031%2032.6319%204.04159%2032.7084C4.27253%2032.9762%204.15706%2033.2057%204.0031%2033.4735C3.92613%2033.5883%203.88763%2033.7031%203.84914%2033.8561C3.77216%2033.9708%203.73368%2034.0474%203.69518%2034.0474ZM4.15706%2034.8124C4.11858%2034.9272%204.08008%2034.9655%204.04159%2034.9655C3.96461%2034.9655%203.92613%2034.889%203.88763%2034.8124L3.84914%2034.7742C3.73367%2034.6212%203.73368%2034.4681%203.88763%2034.1621C3.92613%2034.1239%203.92613%2034.0474%203.96461%2034.0091C4.04159%2033.8178%204.11858%2033.6265%204.19555%2033.5883C4.23405%2033.5883%204.27253%2033.5883%204.34951%2033.6648C4.58045%2033.9326%204.50347%2034.1621%204.34951%2034.4299C4.27253%2034.5447%204.23405%2034.6977%204.15706%2034.8124ZM4.54197%2035.9219C4.46498%2035.9219%204.388%2035.8836%204.31102%2035.7689C4.19555%2035.6159%204.15706%2035.3863%204.27253%2035.1185C4.31103%2035.042%204.31102%2034.9655%204.34951%2034.889C4.388%2034.6977%204.4265%2034.5447%204.50347%2034.5447C4.54197%2034.5447%204.58045%2034.5447%204.61894%2034.6212C4.84989%2034.889%204.84988%2035.195%204.65743%2035.7306C4.65743%2035.8454%204.61894%2035.9219%204.54197%2035.9219ZM5.23479%2036.4957V36.5722C5.19629%2036.7252%205.19629%2036.8017%205.11931%2036.8017C5.04234%2036.8017%204.96535%2036.7635%204.81139%2036.6487C4.69592%2036.5722%204.65743%2036.3427%204.73442%2035.9984C4.7729%2035.9219%204.7729%2035.8453%204.7729%2035.7689C4.81139%2035.5776%204.81139%2035.4628%204.88837%2035.4246C4.92686%2035.4246%204.96535%2035.4246%205.00384%2035.4628C5.35026%2035.7306%205.35026%2035.9601%205.23479%2036.4957ZM5.88914%2037.299V37.3756C5.88914%2037.5286%205.88914%2037.6051%205.81215%2037.6051C5.73516%2037.6433%205.65818%2037.5669%205.50421%2037.4521C5.35026%2037.3756%205.31176%2037.146%205.35026%2036.7635C5.35026%2036.687%205.35026%2036.6105%205.35026%2036.534C5.35026%2036.3427%205.35026%2036.2279%205.42723%2036.1897C5.46572%2036.1514%205.5427%2036.1897%205.5427%2036.2279C5.88914%2036.534%205.88914%2036.7635%205.88914%2037.299ZM6.54347%2037.9494C6.54347%2038.1407%206.54347%2038.2172%206.46648%2038.2555C6.3895%2038.2937%206.31251%2038.2555%206.12004%2038.1789C5.96607%2038.1025%205.92763%2037.9112%205.96607%2037.5669C5.96607%2037.4903%205.96607%2037.4138%205.96607%2037.3373C5.96607%2037.1843%205.96607%2037.1078%206.00456%2037.0695C6.04305%2037.0695%206.08155%2037.0695%206.12004%2037.0695C6.54347%2037.2608%206.58191%2037.4903%206.54347%2037.9494ZM7.08232%2038.5998C6.96684%2038.7911%206.85136%2038.7911%206.77437%2038.7911C6.65889%2038.7528%206.6204%2038.638%206.6204%2038.5615C6.6204%2038.485%206.65889%2038.4085%206.69739%2038.3702C6.73588%2038.2555%206.81287%2038.1407%206.77437%2037.8729C6.73588%2037.7199%206.77437%2037.6051%206.81287%2037.6051C6.85136%2037.5669%206.92835%2037.6051%207.00534%2037.7199C7.12082%2037.8729%207.23624%2038.2555%207.08232%2038.5998ZM7.35172%2038.2937C7.31323%2038.2937%207.31323%2038.2937%207.35172%2038.2937C7.27473%2038.2937%207.27473%2038.2555%207.27473%2038.2172C7.27473%2038.1789%207.27473%2038.1025%207.27473%2038.0642C7.27473%2037.9876%207.27473%2037.9494%207.23624%2037.9112C7.23624%2037.8729%207.23624%2037.8729%207.23624%2037.8346C7.23624%2037.8346%207.27473%2037.7964%207.31323%2037.8346C7.35172%2037.8346%207.42871%2037.8729%207.42871%2037.9876C7.42871%2038.0642%207.39021%2038.2555%207.35172%2038.2937ZM25.365%2030.1835C25.365%2030.1835%2025.4805%2030.0305%2025.4805%2029.6862C25.4805%2029.3419%2025.2496%2029.0741%2025.2496%2029.0741C25.442%2028.6916%2025.2111%2028.5003%2025.2111%2028.5003C25.2111%2028.5003%2025.4805%2028.3473%2025.3266%2028.0795C25.0572%2027.5057%2024.6337%2027.8882%2024.6337%2027.8882C24.6337%2027.8882%2024.5567%2027.8117%2024.2488%2027.8117C23.9794%2027.85%2023.9024%2028.0412%2023.9409%2028.2708C23.9409%2028.462%2024.1334%2028.6916%2024.1334%2028.6916C24.1334%2028.6916%2024.0564%2028.8063%2024.0949%2028.9593C24.1334%2029.1124%2024.2104%2029.3036%2024.2104%2029.3036C24.2104%2029.3036%2024.1334%2029.4567%2024.1334%2029.7245C24.1334%2030.0305%2024.3258%2030.2601%2024.3258%2030.2601C24.3258%2030.2601%2024.2104%2030.2983%2024.1719%2030.6044C24.1334%2030.9104%2024.2873%2031.1399%2024.2873%2031.1399C24.2873%2031.1399%2024.0949%2031.3695%2024.0564%2031.6372C24.0179%2031.8668%2024.1719%2032.1346%2024.1719%2032.1346C24.1719%2032.1346%2024.0179%2032.3258%2023.9794%2032.5937C23.9024%2032.8232%2023.9409%2033.1675%2023.9409%2033.1675C23.9409%2033.1675%2023.7485%2033.3587%2023.6715%2033.5118C23.5945%2033.6648%2023.633%2034.0474%2023.633%2034.0474C23.633%2034.0474%2023.4021%2034.2769%2023.3251%2034.3917C23.2481%2034.5064%2023.2096%2034.889%2023.2096%2034.889C23.2096%2034.889%2023.0557%2035.0037%2022.9017%2035.2333C22.7477%2035.4628%2022.7477%2035.7689%2022.7477%2035.7689C22.7477%2035.7689%2022.5553%2035.8454%2022.4013%2036.0366C22.2474%2036.2279%2022.2089%2036.534%2022.2089%2036.534C22.2089%2036.534%2021.978%2036.6487%2021.8625%2036.7635C21.747%2036.8783%2021.67%2037.146%2021.67%2037.146C21.67%2037.146%2021.516%2037.1078%2021.439%2037.1843C21.2466%2037.299%2021.2081%2037.4138%2021.2081%2037.4138C20.7463%2037.4521%2020.7078%2037.8346%2020.7078%2037.8346C20.6308%2038.1407%2021.0157%2038.4468%2021.0157%2038.4468C21.0157%2038.4468%2021.0927%2038.7911%2021.4775%2038.9441C21.8625%2039.0971%2021.901%2038.485%2021.901%2038.485C21.901%2038.485%2022.0164%2038.5232%2022.2089%2038.3702C22.4013%2038.2172%2022.4013%2037.9112%2022.4013%2037.9112C22.4013%2037.9112%2022.5938%2037.8346%2022.8247%2037.7199C23.0557%2037.5669%2023.0942%2037.146%2023.0942%2037.146C23.0942%2037.146%2023.2481%2037.1078%2023.4405%2036.9548C23.6715%2036.7252%2023.7485%2036.2662%2023.7485%2036.2662C23.7485%2036.2662%2023.9024%2036.1514%2024.0564%2035.9601C24.3258%2035.6159%2024.2104%2035.2715%2024.2104%2035.2715C24.2104%2035.2715%2024.5182%2035.1185%2024.5952%2034.9655C24.7492%2034.736%2024.6722%2034.3151%2024.6722%2034.3151C24.6722%2034.3151%2024.8262%2034.2004%2024.9417%2033.9708C25.0572%2033.7413%2024.9802%2033.2823%2024.9802%2033.2823C24.9802%2033.2823%2025.1726%2033.1675%2025.2496%2032.8997C25.365%2032.5554%2025.2111%2032.2111%2025.2111%2032.2111C25.2111%2032.2111%2025.2881%2032.1728%2025.4035%2031.7902C25.519%2031.4077%2025.365%2031.1399%2025.365%2031.1399C25.365%2031.1399%2025.4805%2030.9869%2025.519%2030.7191C25.5575%2030.5278%2025.365%2030.1835%2025.365%2030.1835ZM24.8647%2028.0412C24.8647%2028.003%2024.9032%2027.9647%2024.9417%2027.9647C25.0187%2027.9647%2025.0956%2027.9647%2025.0956%2028.0412C25.1341%2028.1177%2025.1341%2028.156%2025.1341%2028.1943C25.1341%2028.2325%2025.0956%2028.2325%2025.0956%2028.2325C25.0956%2028.2325%2024.9802%2028.1177%2024.9032%2028.0795C24.8647%2028.0795%2024.8647%2028.0412%2024.8647%2028.0412ZM24.1719%2028.5003C24.0949%2028.4238%2024.0564%2028.309%2024.0949%2028.1943C24.1334%2028.1177%2024.2104%2028.0412%2024.3258%2028.0412C24.4028%2028.0412%2024.5567%2028.0412%2024.7107%2028.1943C24.9802%2028.4238%2025.0187%2028.6533%2025.0187%2028.6533C25.0187%2028.6916%2025.0187%2028.7298%2024.9802%2028.7298C24.9417%2028.7298%2024.8647%2028.7298%2024.8262%2028.6533C24.6722%2028.5003%2024.4028%2028.5003%2024.3258%2028.5386C24.2873%2028.5386%2024.2104%2028.5386%2024.1719%2028.5003ZM24.3643%2028.8446C24.4028%2028.7681%2024.4413%2028.6916%2024.5182%2028.6916C24.6722%2028.6533%2024.8647%2028.8063%2025.0187%2028.9593C25.2111%2029.1506%2025.3266%2029.3419%2025.2881%2029.4949C25.2881%2029.4949%2025.2881%2029.5332%2025.2881%2029.5715C25.2881%2029.648%2025.2496%2029.7628%2025.1726%2029.7628C25.1341%2029.7628%2025.0572%2029.7245%2024.9802%2029.648C24.8647%2029.4949%2024.7107%2029.4185%2024.5952%2029.3419C24.3643%2029.2654%2024.2488%2029.1506%2024.3643%2028.8446ZM20.9772%2037.9112C20.9772%2037.9494%2020.9387%2038.0259%2020.9387%2038.0642C20.9387%2038.1025%2020.9387%2038.1407%2020.9387%2038.2172C20.9387%2038.2555%2020.9002%2038.2937%2020.9002%2038.2937H20.8617C20.8232%2038.2555%2020.7847%2038.0642%2020.7847%2037.9876C20.7847%2037.9112%2020.8617%2037.8729%2020.9002%2037.8346C20.9387%2037.8346%2020.9387%2037.8346%2020.9772%2037.8346C20.9772%2037.8729%2020.9772%2037.8729%2020.9772%2037.9112ZM21.4006%2038.7911C21.3236%2038.7911%2021.2466%2038.7911%2021.0927%2038.5998C20.9002%2038.2555%2021.0542%2037.8346%2021.2081%2037.6816C21.2851%2037.6051%2021.3621%2037.5286%2021.4006%2037.5669C21.4775%2037.6051%2021.4775%2037.6816%2021.439%2037.8346C21.4006%2038.1025%2021.439%2038.2172%2021.516%2038.332C21.5545%2038.4085%2021.5545%2038.4468%2021.593%2038.5232C21.5545%2038.638%2021.516%2038.7528%2021.4006%2038.7911ZM22.0164%2038.1407C21.824%2038.2172%2021.747%2038.2555%2021.67%2038.2172C21.593%2038.1789%2021.593%2038.1025%2021.593%2037.9494V37.9112C21.593%2037.4521%2021.593%2037.2226%2022.0164%2036.993C22.0549%2036.9548%2022.0934%2036.9548%2022.1319%2036.993C22.2089%2037.0313%2022.1704%2037.146%2022.1704%2037.2608C22.1704%2037.3373%2022.1704%2037.4138%2022.1704%2037.4903C22.2089%2037.8729%2022.1704%2038.1025%2022.0164%2038.1407ZM22.6707%2037.4903C22.5168%2037.6051%2022.4013%2037.6433%2022.3628%2037.6433C22.3243%2037.6051%2022.2858%2037.5286%2022.2858%2037.4138V37.3373C22.2474%2036.8017%2022.2474%2036.5722%2022.6322%2036.2662C22.6322%2036.2662%2022.7092%2036.2279%2022.7477%2036.2279C22.8247%2036.2662%2022.8247%2036.3809%2022.8247%2036.5722C22.8247%2036.6487%2022.8247%2036.7252%2022.8247%2036.8017C22.8632%2037.146%2022.8247%2037.4138%2022.6707%2037.4903ZM23.3636%2036.6487C23.2096%2036.7635%2023.1327%2036.8017%2023.0557%2036.8017C22.9787%2036.7635%2022.9787%2036.687%2022.9402%2036.5722V36.4957C22.8247%2035.9601%2022.7862%2035.7306%2023.1327%2035.4246C23.1711%2035.3863%2023.2096%2035.3863%2023.2481%2035.3863C23.3251%2035.4246%2023.3251%2035.5393%2023.3636%2035.7306C23.3636%2035.8071%2023.4021%2035.8836%2023.4021%2035.9601C23.479%2036.3427%2023.479%2036.5722%2023.3636%2036.6487ZM23.8255%2035.7689C23.7485%2035.8836%2023.6715%2035.9219%2023.5945%2035.9219C23.5175%2035.9219%2023.479%2035.8454%2023.4405%2035.7306C23.2481%2035.195%2023.2866%2034.8507%2023.479%2034.6212C23.5175%2034.5829%2023.556%2034.5447%2023.5945%2034.5447C23.6715%2034.5447%2023.71%2034.6977%2023.7485%2034.889C23.787%2034.9655%2023.787%2035.042%2023.8255%2035.1185C24.0179%2035.3863%2023.9409%2035.6541%2023.8255%2035.7689ZM24.3258%2034.7742L24.2873%2034.8124C24.2488%2034.889%2024.1719%2034.9655%2024.1334%2034.9655C24.0949%2034.9655%2024.0564%2034.889%2024.0179%2034.8124C23.9794%2034.6594%2023.9024%2034.5447%2023.8639%2034.4681C23.71%2034.1621%2023.633%2033.9708%2023.8639%2033.7031C23.9024%2033.6648%2023.9794%2033.6265%2024.0179%2033.6265C24.1334%2033.6648%2024.1719%2033.8178%2024.2488%2034.0474C24.2873%2034.1238%2024.2873%2034.1621%2024.3258%2034.2004C24.4028%2034.4681%2024.4413%2034.6594%2024.3258%2034.7742ZM24.6722%2033.8178L24.6337%2033.8561C24.5952%2033.9326%2024.5182%2034.0091%2024.4798%2034.0091C24.4413%2034.0091%2024.4028%2033.9326%2024.3643%2033.8561C24.3258%2033.7031%2024.2488%2033.5883%2024.2104%2033.4735C24.0564%2033.1675%2023.9409%2032.9762%2024.1719%2032.7084C24.2104%2032.6701%2024.2488%2032.6319%2024.3258%2032.6319C24.4798%2032.6701%2024.5567%2032.8997%2024.6337%2033.1292C24.6337%2033.1675%2024.6722%2033.2057%2024.6722%2033.244C24.7877%2033.5118%2024.7877%2033.703%2024.6722%2033.8178ZM24.9802%2032.8614L24.9417%2032.8997C24.9032%2032.9762%2024.8262%2033.0527%2024.7877%2033.0527C24.7492%2033.0527%2024.7107%2032.9762%2024.6722%2032.8997C24.6337%2032.7467%2024.5567%2032.5937%2024.4798%2032.4789C24.3258%2032.1728%2024.2104%2031.9433%2024.4028%2031.6755C24.4413%2031.6372%2024.4798%2031.599%2024.5567%2031.599C24.7107%2031.6372%2024.8647%2031.9815%2024.9802%2032.2111L25.0187%2032.2494C25.0572%2032.5171%2025.0572%2032.7084%2024.9802%2032.8614ZM25.1726%2031.6372C25.1726%2031.6755%2025.1341%2031.6755%2025.1341%2031.7138C25.0956%2031.7903%2025.0572%2031.9051%2024.9802%2031.9051C24.9417%2031.9051%2024.9032%2031.8668%2024.8262%2031.7902C24.7492%2031.6372%2024.6722%2031.5608%2024.5952%2031.446C24.4028%2031.2164%2024.2488%2030.9869%2024.4413%2030.5661C24.4798%2030.5278%2024.4798%2030.5278%2024.5182%2030.4896C24.6722%2030.4896%2024.9417%2030.8721%2025.0187%2031.0252C25.1341%2031.2929%2025.2496%2031.4842%2025.1726%2031.6372ZM25.2496%2030.6809C25.2496%2030.6809%2025.2496%2030.7191%2025.2111%2030.7191C25.1726%2030.7956%2025.1341%2030.8721%2025.0572%2030.9104C25.0187%2030.9104%2024.9417%2030.8721%2024.9032%2030.7574C24.8262%2030.6044%2024.7107%2030.4896%2024.6337%2030.3748C24.4413%2030.1453%2024.2873%2029.954%2024.4028%2029.648C24.4413%2029.6097%2024.4413%2029.5715%2024.5182%2029.5715C24.6337%2029.5715%2024.7877%2029.7245%2025.0187%2030.0305C25.1726%2030.2601%2025.3266%2030.4896%2025.2496%2030.6809Z'%20fill='%23FFFFFF'/%3e%3cpath%20d='M42.5317%2017.2915H44.8796V22.3795L49.075%2017.2915H51.9617L47.1505%2022.8768L52.1157%2029.1507H49.075L44.8796%2023.6419H44.8411V29.1507H42.4932V17.2915H42.5317Z'%20fill='%23FFFFFF'/%3e%3cpath%20d='M61.1606%2024.4453L56.9263%2017.2915H59.6591L62.3919%2022.2647L65.2018%2017.2915H67.6651L63.5084%2024.4453V29.1124H61.1606V24.4453Z'%20fill='%23FFFFFF'/%3e%3cpath%20d='M79.2512%2019.472C78.5196%2019.1277%2077.7115%2018.9364%2076.8645%2018.9364C76.0564%2018.9364%2075.017%2019.2807%2075.017%2020.5814C75.017%2022.6472%2080.1365%2021.7673%2080.1365%2025.7459C80.1365%2028.3473%2078.0964%2029.3419%2075.7486%2029.3419C74.4784%2029.3419%2073.901%2029.1889%2072.785%2028.8828L72.9775%2026.7405C73.7856%2027.1614%2074.6709%2027.4674%2075.5944%2027.4674C76.4796%2027.4674%2077.6732%2027.0084%2077.6732%2025.9372C77.6732%2023.6801%2072.5537%2024.5982%2072.5537%2020.6579C72.5537%2018.0183%2074.5938%2017.0237%2076.6338%2017.0237C77.6344%2017.0237%2078.5585%2017.1767%2079.4437%2017.4445L79.2512%2019.472Z'%20fill='%23FFFFFF'/%3e%3cpath%20d='M89.4505%2019.166H86.1021V17.2915H95.1086V19.166H91.7601V29.1507H89.4123V19.166H89.4505Z'%20fill='%23FFFFFF'/%3e%3cpath%20d='M100.497%2017.2915H102.999L105.963%2026.6258H106.001L108.965%2017.2915H111.274L107.348%2029.1507H104.462L100.497%2017.2915Z'%20fill='%23FFFFFF'/%3e%3cpath%20d='M117.625%2017.2915H124.515V19.166H119.973V22.0734H124.131V23.948H119.973V27.2762H124.554V29.1507H117.664V17.2915H117.625Z'%20fill='%23FFFFFF'/%3e%3cpath%20d='M131.982%2017.2914H134.522C137.024%2017.2914%20139.988%2017.2149%20139.988%2020.5049C139.988%2021.8821%20139.064%2023.068%20137.602%2023.2593V23.2975C138.217%2023.3358%20138.602%2023.9861%20138.833%2024.5217L140.72%2029.1506H138.102L136.717%2025.4398C136.37%2024.5599%20136.1%2024.2157%20135.1%2024.2157H134.33V29.1506H131.982V17.2914ZM134.33%2022.3412H135.1C136.254%2022.3412%20137.563%2022.1881%20137.563%2020.6962C137.563%2019.2807%20136.254%2019.1277%20135.1%2019.1277H134.33V22.3412Z'%20fill='%23FFFFFF'/%3e%3cpath%20d='M147.648%2017.2915H149.996V22.3795L154.19%2017.2915H157.077L152.266%2022.8768L157.232%2029.1507H154.19L149.996%2023.6419H149.957V29.1507H147.609L147.648%2017.2915Z'%20fill='%23FFFFFF'/%3e%3cpath%20d='M163.621%2017.2915H170.511V19.166H165.969V22.0734H170.126V23.948H165.969V27.2762H170.511V29.1507H163.621V17.2915Z'%20fill='%23FFFFFF'/%3e%3cpath%20d='M180.056%2019.166H176.708V17.2915H185.714V19.166H182.366V29.1507H180.018V19.166H180.056Z'%20fill='%23FFFFFF'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_7584_1130'%3e%3crect%20width='185.714'%20height='46.71'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", j4 = {
  "blue-horizontal": { image: T6, width: 186, height: 47 },
  datakatalog: { image: O6, width: 589, height: 83 },
  fyr: { image: E6, width: 409, height: 83 },
  hais: { image: I6, width: 591, height: 83 },
  pfsa: { image: N6, width: 643, height: 83 },
  saksbehandling: { image: F6, width: 654, height: 83 },
  selvbetjening: { image: V6, width: 618, height: 83 },
  "white-vertical": { image: R6, width: 152, height: 110 },
  "white-horizontal": { image: j6, width: 221, height: 55.25 }
};
function g5({ className: r, variant: n = "blue-horizontal", alt: e = "Til forsiden", height: t, width: a }) {
  let s = j4[n].height, i = j4[n].width;
  const o = i / s;
  return t && a ? (s = t, i = a) : t && !a ? (i = t * o, s = t) : a && !t && (i = a, s = a / o), /* @__PURE__ */ h.jsx("img", { className: r, src: j4[n].image, alt: e, height: s, width: i });
}
const A6 = "_footer_wjdmy_2", B6 = "_footerContainer_wjdmy_10", Y6 = "_linksContainer_wjdmy_18", U6 = "_linksAndContactsContainer_wjdmy_19", W6 = "_footerContentContainer_wjdmy_20", z6 = "_linkList_wjdmy_34", q6 = "_link_wjdmy_18", $6 = "_icon_wjdmy_57", G6 = "_textContainer_wjdmy_60", K6 = "_extraText_wjdmy_66", Q6 = "_copyrightText_wjdmy_73", X6 = "_logoContainer_wjdmy_80", J6 = "_logoContainerInner_wjdmy_89", e9 = "_select_wjdmy_96", t9 = "_selectOption_wjdmy_113", m2 = {
  footer: A6,
  footerContainer: B6,
  linksContainer: Y6,
  linksAndContactsContainer: U6,
  footerContentContainer: W6,
  linkList: z6,
  link: q6,
  icon: $6,
  textContainer: G6,
  extraText: K6,
  copyrightText: Q6,
  logoContainer: X6,
  logoContainerInner: J6,
  select: e9,
  selectOption: t9
}, n9 = "Kystverket", r9 = "Organisasjonsnummer", a9 = "Sentralbord", s9 = "Kontakt Kystverket", i9 = {
  "header-alt-text": "Til forsiden",
  kystverket: n9,
  organisasjonsnummer: r9,
  sentralbord: a9,
  kontakt: s9
}, o9 = "Kystverket", l9 = "Organisasjonsnummer", c9 = "Sentralbord", d9 = "Kontakt Kystverket", u9 = {
  "header-alt-text": "Til framsida",
  kystverket: o9,
  organisasjonsnummer: l9,
  sentralbord: c9,
  kontakt: d9
}, h9 = "Norwegian coastal administration", C9 = "Organization number", f9 = "Switchboard", p9 = "Contact us", m9 = {
  "header-alt-text": "To the front page",
  kystverket: h9,
  organisasjonsnummer: C9,
  sentralbord: f9,
  kontakt: p9
}, a7 = {
  "nb-NO": i9,
  "nn-NO": u9,
  "en-US": m9
};
function s7(r, n) {
  if (r && r[n])
    return r[n];
}
function g9(r, n) {
  const e = s7(a7[r], n);
  if (e)
    return e;
  const t = s7(a7["nb-NO"], n);
  return t || n;
}
function v5(r) {
  return g9.bind(null, r);
}
const v9 = [
  {
    text: "Kontakt Kystverket",
    url: "https://www.kystverket.no/kontakt-oss/"
  },
  { text: "Lostjenesten", url: "https://www.kystverket.no/kontakt-oss/los/" },
  { text: "Kontakt farledsbevistjenesten", url: "https://www.kystverket.no/kontakt-oss/farledsbevistjenesten/" },
  { text: "Sjøtrafikksentralen", url: "https://www.kystverket.no/kontakt-oss/sjotrafikksentralene/" },
  { text: "Presse", url: "https://www.kystverket.no/kontakt-oss/presse/" },
  { text: "Arealplanlegging", url: "https://www.kystverket.no/kontakt-oss/arealplan/" }
];
function M9({ links: r }) {
  return !r || r.length === 0 ? null : /* @__PURE__ */ h.jsx("div", { className: m2.linkList, children: r.map((n, e) => /* @__PURE__ */ h.jsxs(y8, { href: n.url, style: { textDecoration: "none" }, className: m2.link, children: [
    /* @__PURE__ */ h.jsx(c2, { material: "arrow_forward", "aria-hidden": !0, className: m2.icon }),
    /* @__PURE__ */ h.jsx("span", { children: n.text })
  ] }, e)) });
}
function Ll({
  language: r,
  additionalLogo: n,
  text: e = "",
  copyright: t = "",
  contacts: a = v9,
  links: s = []
}) {
  const i = v5(r), o = (/* @__PURE__ */ new Date()).getFullYear();
  return t || (t = `Opphavsrett Kystverket © ${o}`), /* @__PURE__ */ h.jsx("div", { className: m2.footer, children: /* @__PURE__ */ h.jsx("div", { className: m2.footerContainer, children: /* @__PURE__ */ h.jsxs("div", { className: m2.footerContentContainer, children: [
    /* @__PURE__ */ h.jsxs("div", { className: m2.logoContainer, children: [
      /* @__PURE__ */ h.jsxs("div", { className: m2.logoContainerInner, children: [
        /* @__PURE__ */ h.jsx(g5, { alt: i("kystverket"), variant: "white-horizontal", width: 220, height: 55.25 }),
        n
      ] }),
      !e && /* @__PURE__ */ h.jsx("div", { className: m2.textContainer, children: /* @__PURE__ */ h.jsx("span", { className: m2.copyrightText, children: t }) })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: m2.linksAndContactsContainer, children: [
      /* @__PURE__ */ h.jsxs("div", { className: m2.linksContainer, children: [
        e && /* @__PURE__ */ h.jsxs("div", { className: m2.linkList, children: [
          /* @__PURE__ */ h.jsx("span", { className: m2.extraText, children: e }),
          /* @__PURE__ */ h.jsx("span", { className: m2.copyrightText, children: t })
        ] }),
        s.map((l, c) => /* @__PURE__ */ h.jsx(M9, { links: Array.isArray(l) ? l : [l] }, c))
      ] }),
      a.length > 0 && /* @__PURE__ */ h.jsxs(
        J0,
        {
          "aria-label": i("kontakt"),
          defaultValue: "",
          className: m2.select,
          width: "full",
          onChange: (l) => {
            l.preventDefault(), window.location.href = l.target.value;
          },
          children: [
            /* @__PURE__ */ h.jsx(J0.Option, { disabled: !0, value: "", "aria-hidden": "true", hidden: !0, children: i("kontakt") }),
            a.map((l, c) => /* @__PURE__ */ h.jsx(J0.Option, { value: l.url, className: m2.selectOption, children: l.text }, c))
          ]
        }
      )
    ] })
  ] }) }) });
}
const y9 = "_headerContainer_1qheq_5", w9 = "_headerFlex_1qheq_16", b9 = "_logoLink_1qheq_23", L9 = "_titleText_1qheq_36", _9 = "_relativeUntilMobile_1qheq_49", x9 = "_profileMenu_1qheq_53", k9 = "_profileContainer_1qheq_70", Z9 = "_profileMenuName_1qheq_76", D9 = "_profileMenuDepartment_1qheq_81", S9 = "_profileName_1qheq_86", P9 = "_profileNameShort_1qheq_92", H9 = "_profileTextContainer_1qheq_96", T9 = "_profileLogOutButton_1qheq_101", O9 = "_EllipsisOnOverflow_1qheq_112", E9 = "_buttonsContainer_1qheq_123", I9 = "_headerButton_1qheq_128", N9 = "_menuButton_1qheq_142", F9 = "_menuDropdown_1qheq_163", V9 = "_avatarShowOnSmallHeader_1qheq_173", R9 = "_avatarShowOnWideHeader_1qheq_186", j9 = "_disappearBelowTablet_1qheq_190", A9 = "_disappearBelowPhone_1qheq_203", B9 = "_logo_1qheq_23", Y9 = "_disappearAbovePhone_1qheq_244", $ = {
  headerContainer: y9,
  headerFlex: w9,
  logoLink: b9,
  titleText: L9,
  relativeUntilMobile: _9,
  profileMenu: x9,
  profileContainer: k9,
  profileMenuName: Z9,
  profileMenuDepartment: D9,
  profileName: S9,
  profileNameShort: P9,
  profileTextContainer: H9,
  profileLogOutButton: T9,
  EllipsisOnOverflow: O9,
  buttonsContainer: E9,
  headerButton: I9,
  menuButton: N9,
  menuDropdown: F9,
  avatarShowOnSmallHeader: V9,
  avatarShowOnWideHeader: R9,
  disappearBelowTablet: j9,
  disappearBelowPhone: A9,
  logo: B9,
  disappearAbovePhone: Y9
};
function U9(r, n) {
  d5(() => {
    function e(a) {
      !r.current || r.current.contains(a.target) || n();
    }
    function t(a) {
      a.key === "Escape" && n();
    }
    return document.addEventListener("click", e), document.addEventListener("touchstart", e), document.addEventListener("keydown", t), () => {
      document.removeEventListener("click", e), document.removeEventListener("touchstart", e), document.removeEventListener("keydown", t);
    };
  }, [r, n]);
}
function _l({
  children: r = void 0,
  language: n,
  logo: { title: e = void 0, variant: t = "blue-horizontal", url: a },
  links: s,
  profile: i,
  linkComponent: o = y8
}) {
  var w;
  const l = v5(n), [c, d] = l3(!1), [u, C] = l3(!1), f = k1(null), p = c3(() => {
    d((y) => (y || C(!1), !y));
  }, [d, C]), v = c3(() => {
    C((y) => (y || d(!1), !y));
  }, [C, d]), m = () => C(!1);
  return U9(f, m), /* @__PURE__ */ h.jsxs(e2, { horizontal: !0, justify: "center", align: "center", className: $.headerContainer, children: [
    /* @__PURE__ */ h.jsxs(e2, { className: $.headerFlex, px: 16, width: "container", children: [
      /* @__PURE__ */ h.jsx(e2, { horizontal: !0, align: "center", gap: 16, children: /* @__PURE__ */ h.jsxs(o, { className: $.logoLink, href: a, children: [
        /* @__PURE__ */ h.jsx(g5, { className: $.logo, variant: t, height: 47, alt: l("header-alt-text") }),
        e && /* @__PURE__ */ h.jsx(h1, { className: $.titleText, children: e })
      ] }) }),
      /* @__PURE__ */ h.jsxs(e2, { horizontal: !0, gap: 16, children: [
        s && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
          s.map((y, b) => /* @__PURE__ */ h.jsxs(
            o,
            {
              href: y.url,
              className: `${$.headerButton} ${$.disappearBelowPhone}`,
              children: [
                /* @__PURE__ */ h.jsx(c2, { material: y.icon }),
                /* @__PURE__ */ h.jsx(g1, { children: y.label })
              ]
            },
            b
          )),
          /* @__PURE__ */ h.jsxs(
            a3,
            {
              onClick: p,
              variant: "ghost",
              className: `${$.disappearAbovePhone} ${$.headerButton}`,
              children: [
                /* @__PURE__ */ h.jsx(c2, { material: "menu" }),
                "Meny"
              ]
            }
          )
        ] }),
        (i == null ? void 0 : i.name) && /* @__PURE__ */ h.jsxs("div", { className: $.relativeUntilMobile, ref: f, children: [
          /* @__PURE__ */ h.jsxs(a3, { variant: "ghost", onClick: v, className: `${$.headerButton}`, children: [
            /* @__PURE__ */ h.jsx(
              o3,
              {
                className: $.avatarShowOnWideHeader,
                "aria-label": `${i.name} profile picture`,
                "data-color": "primary",
                "data-size": "2xs",
                initials: i.initials
              }
            ),
            /* @__PURE__ */ h.jsx(
              o3,
              {
                className: $.avatarShowOnSmallHeader,
                "aria-label": `${i.name} profile picture`,
                "data-color": "primary",
                "data-size": "3xs",
                initials: i.initials
              }
            ),
            /* @__PURE__ */ h.jsxs(g1, { className: $.profileName, children: [
              /* @__PURE__ */ h.jsx("span", { className: $.disappearBelowTablet, children: i.name }),
              /* @__PURE__ */ h.jsx("span", { className: $.profileNameShort, children: (w = i.name) == null ? void 0 : w.split(" ")[0] })
            ] }),
            /* @__PURE__ */ h.jsx(
              c2,
              {
                material: u ? "keyboard_arrow_up" : "keyboard_arrow_down",
                className: $.disappearBelowTablet
              }
            )
          ] }),
          u && /* @__PURE__ */ h.jsxs(e2, { className: $.profileMenu, children: [
            /* @__PURE__ */ h.jsxs(e2, { horizontal: !0, className: $.profileContainer, children: [
              /* @__PURE__ */ h.jsx(
                o3,
                {
                  "aria-label": `${i.name} profile picture`,
                  "data-color": "primary",
                  "data-size": "2xs",
                  initials: i.initials
                }
              ),
              /* @__PURE__ */ h.jsxs(e2, { className: $.profileTextContainer, children: [
                /* @__PURE__ */ h.jsx(g1, { className: `${$.profileMenuName} ${$.EllipsisOnOverflow}`, children: i.name }),
                /* @__PURE__ */ h.jsx(g1, { className: `${$.profileMenuDepartment} ${$.EllipsisOnOverflow}`, children: i.department })
              ] })
            ] }),
            /* @__PURE__ */ h.jsx(Q3, {}),
            (i == null ? void 0 : i.links) && (i == null ? void 0 : i.links.map((y, b) => /* @__PURE__ */ h.jsxs(
              o,
              {
                href: y.url,
                className: `${$.headerButton} ${$.disappearBelowPhone}`,
                onClick: m,
                children: [
                  /* @__PURE__ */ h.jsx(c2, { material: y.icon }),
                  /* @__PURE__ */ h.jsx(g1, { children: y.label })
                ]
              },
              b
            ))),
            (i == null ? void 0 : i.links) && /* @__PURE__ */ h.jsx(Q3, {}),
            /* @__PURE__ */ h.jsxs(a3, { onClick: () => i.logoutHandler(), className: `${$.profileLogOutButton}`, children: [
              /* @__PURE__ */ h.jsx(c2, { material: "logout" }),
              "Logg ut"
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ h.jsxs(e2, { className: $.buttonsContainer, children: [
      s && c && /* @__PURE__ */ h.jsx(e2, { justify: "start", className: `${$.menuDropdown} ${$.disappearAbovePhone}`, children: s.map((y, b) => /* @__PURE__ */ h.jsxs(o, { href: y.url, className: `${$.menuButton}`, children: [
        /* @__PURE__ */ h.jsx(c2, { material: y.icon }),
        y.label
      ] }, b)) }),
      r
    ] })
  ] });
}
function M5(r) {
  var n, e, t = "";
  if (typeof r == "string" || typeof r == "number") t += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var a = r.length;
    for (n = 0; n < a; n++) r[n] && (e = M5(r[n])) && (t && (t += " "), t += e);
  } else for (e in r) r[e] && (t && (t += " "), t += e);
  return t;
}
function g2() {
  for (var r, n, e = 0, t = "", a = arguments.length; e < a; e++) (r = arguments[e]) && (n = M5(r)) && (t && (t += " "), t += n);
  return t;
}
const y5 = 6048e5, W9 = 864e5, b4 = 6e4, L4 = 36e5, z9 = 1e3, i7 = Symbol.for("constructDateFrom");
function X(r, n) {
  return typeof r == "function" ? r(n) : r && typeof r == "object" && i7 in r ? r[i7](n) : r instanceof Date ? new r.constructor(n) : new Date(n);
}
function Z(r, n) {
  return X(n || r, r);
}
function I2(r, n, e) {
  const t = Z(r, e == null ? void 0 : e.in);
  return isNaN(n) ? X((e == null ? void 0 : e.in) || r, NaN) : (n && t.setDate(t.getDate() + n), t);
}
function N2(r, n, e) {
  const t = Z(r, e == null ? void 0 : e.in);
  if (isNaN(n)) return X(r, NaN);
  if (!n)
    return t;
  const a = t.getDate(), s = X(r, t.getTime());
  s.setMonth(t.getMonth() + n + 1, 0);
  const i = s.getDate();
  return a >= i ? s : (t.setFullYear(
    s.getFullYear(),
    s.getMonth(),
    a
  ), t);
}
function w5(r, n, e) {
  return X(r, +Z(r) + n);
}
function q9(r, n, e) {
  return w5(r, n * L4);
}
let $9 = {};
function Y0() {
  return $9;
}
function s0(r, n) {
  var o, l, c, d;
  const e = Y0(), t = (n == null ? void 0 : n.weekStartsOn) ?? ((l = (o = n == null ? void 0 : n.locale) == null ? void 0 : o.options) == null ? void 0 : l.weekStartsOn) ?? e.weekStartsOn ?? ((d = (c = e.locale) == null ? void 0 : c.options) == null ? void 0 : d.weekStartsOn) ?? 0, a = Z(r, n == null ? void 0 : n.in), s = a.getDay(), i = (s < t ? 7 : 0) + s - t;
  return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
}
function s1(r, n) {
  return s0(r, { ...n, weekStartsOn: 1 });
}
function b5(r, n) {
  const e = Z(r, n == null ? void 0 : n.in), t = e.getFullYear(), a = X(e, 0);
  a.setFullYear(t + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const s = s1(a), i = X(e, 0);
  i.setFullYear(t, 0, 4), i.setHours(0, 0, 0, 0);
  const o = s1(i);
  return e.getTime() >= s.getTime() ? t + 1 : e.getTime() >= o.getTime() ? t : t - 1;
}
function n4(r) {
  const n = Z(r), e = new Date(
    Date.UTC(
      n.getFullYear(),
      n.getMonth(),
      n.getDate(),
      n.getHours(),
      n.getMinutes(),
      n.getSeconds(),
      n.getMilliseconds()
    )
  );
  return e.setUTCFullYear(n.getFullYear()), +r - +e;
}
function o0(r, ...n) {
  const e = X.bind(
    null,
    n.find((t) => typeof t == "object")
  );
  return n.map(e);
}
function N0(r, n) {
  const e = Z(r, n == null ? void 0 : n.in);
  return e.setHours(0, 0, 0, 0), e;
}
function i1(r, n, e) {
  const [t, a] = o0(
    e == null ? void 0 : e.in,
    r,
    n
  ), s = N0(t), i = N0(a), o = +s - n4(s), l = +i - n4(i);
  return Math.round((o - l) / W9);
}
function G9(r, n) {
  const e = b5(r, n), t = X(r, 0);
  return t.setFullYear(e, 0, 4), t.setHours(0, 0, 0, 0), s1(t);
}
function h3(r, n, e) {
  const t = Z(r, e == null ? void 0 : e.in);
  return t.setTime(t.getTime() + n * b4), t;
}
function Z3(r, n, e) {
  return N2(r, n * 3, e);
}
function K9(r, n, e) {
  return w5(r, n * 1e3);
}
function r4(r, n, e) {
  return I2(r, n * 7, e);
}
function e0(r, n, e) {
  return N2(r, n * 12, e);
}
function o7(r, n) {
  let e, t = n == null ? void 0 : n.in;
  return r.forEach((a) => {
    !t && typeof a == "object" && (t = X.bind(null, a));
    const s = Z(a, t);
    (!e || e < s || isNaN(+s)) && (e = s);
  }), X(t, e || NaN);
}
function l7(r, n) {
  let e, t = n == null ? void 0 : n.in;
  return r.forEach((a) => {
    !t && typeof a == "object" && (t = X.bind(null, a));
    const s = Z(a, t);
    (!e || e > s || isNaN(+s)) && (e = s);
  }), X(t, e || NaN);
}
function Q9(r, n, e) {
  const [t, a] = o0(
    e == null ? void 0 : e.in,
    r,
    n
  );
  return +N0(t) == +N0(a);
}
function t0(r) {
  return r instanceof Date || typeof r == "object" && Object.prototype.toString.call(r) === "[object Date]";
}
function a4(r) {
  return !(!t0(r) && typeof r != "number" || isNaN(+Z(r)));
}
function s4(r, n, e) {
  const [t, a] = o0(
    e == null ? void 0 : e.in,
    r,
    n
  ), s = t.getFullYear() - a.getFullYear(), i = t.getMonth() - a.getMonth();
  return s * 12 + i;
}
function O0(r, n) {
  const e = Z(r, n == null ? void 0 : n.in);
  return Math.trunc(e.getMonth() / 3) + 1;
}
function i4(r, n, e) {
  const [t, a] = o0(
    e == null ? void 0 : e.in,
    r,
    n
  ), s = t.getFullYear() - a.getFullYear(), i = O0(t) - O0(a);
  return s * 4 + i;
}
function o4(r, n, e) {
  const [t, a] = o0(
    e == null ? void 0 : e.in,
    r,
    n
  );
  return t.getFullYear() - a.getFullYear();
}
function X9(r, n, e) {
  const [t, a] = o0(
    e == null ? void 0 : e.in,
    r,
    n
  ), s = c7(t, a), i = Math.abs(
    i1(t, a)
  );
  t.setDate(t.getDate() - s * i);
  const o = +(c7(t, a) === -s), l = s * (i - o);
  return l === 0 ? 0 : l;
}
function c7(r, n) {
  const e = r.getFullYear() - n.getFullYear() || r.getMonth() - n.getMonth() || r.getDate() - n.getDate() || r.getHours() - n.getHours() || r.getMinutes() - n.getMinutes() || r.getSeconds() - n.getSeconds() || r.getMilliseconds() - n.getMilliseconds();
  return e < 0 ? -1 : e > 0 ? 1 : e;
}
function L5(r, n) {
  const e = Z(r, n == null ? void 0 : n.in);
  return e.setHours(23, 59, 59, 999), e;
}
function _5(r, n) {
  const e = Z(r, n == null ? void 0 : n.in), t = e.getMonth();
  return e.setFullYear(e.getFullYear(), t + 1, 0), e.setHours(23, 59, 59, 999), e;
}
function C3(r, n) {
  const e = Z(r, n == null ? void 0 : n.in), t = e.getMonth(), a = t - t % 3;
  return e.setMonth(a, 1), e.setHours(0, 0, 0, 0), e;
}
function x5(r, n) {
  const e = Z(r, n == null ? void 0 : n.in);
  return e.setDate(1), e.setHours(0, 0, 0, 0), e;
}
function k5(r, n) {
  const e = Z(r, n == null ? void 0 : n.in), t = e.getFullYear();
  return e.setFullYear(t + 1, 0, 0), e.setHours(23, 59, 59, 999), e;
}
function _4(r, n) {
  const e = Z(r, n == null ? void 0 : n.in);
  return e.setFullYear(e.getFullYear(), 0, 1), e.setHours(0, 0, 0, 0), e;
}
function J9(r, n) {
  var o, l;
  const e = Y0(), t = e.weekStartsOn ?? ((l = (o = e.locale) == null ? void 0 : o.options) == null ? void 0 : l.weekStartsOn) ?? 0, a = Z(r, n == null ? void 0 : n.in), s = a.getDay(), i = (s < t ? -7 : 0) + 6 - (s - t);
  return a.setDate(a.getDate() + i), a.setHours(23, 59, 59, 999), a;
}
const et = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, tt = (r, n, e) => {
  let t;
  const a = et[r];
  return typeof a == "string" ? t = a : n === 1 ? t = a.one : t = a.other.replace("{{count}}", n.toString()), e != null && e.addSuffix ? e.comparison && e.comparison > 0 ? "in " + t : t + " ago" : t;
};
function e1(r) {
  return (n = {}) => {
    const e = n.width ? String(n.width) : r.defaultWidth;
    return r.formats[e] || r.formats[r.defaultWidth];
  };
}
const nt = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, rt = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, at = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, st = {
  date: e1({
    formats: nt,
    defaultWidth: "full"
  }),
  time: e1({
    formats: rt,
    defaultWidth: "full"
  }),
  dateTime: e1({
    formats: at,
    defaultWidth: "full"
  })
}, it = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, ot = (r, n, e, t) => it[r];
function j2(r) {
  return (n, e) => {
    const t = e != null && e.context ? String(e.context) : "standalone";
    let a;
    if (t === "formatting" && r.formattingValues) {
      const i = r.defaultFormattingWidth || r.defaultWidth, o = e != null && e.width ? String(e.width) : i;
      a = r.formattingValues[o] || r.formattingValues[i];
    } else {
      const i = r.defaultWidth, o = e != null && e.width ? String(e.width) : r.defaultWidth;
      a = r.values[o] || r.values[i];
    }
    const s = r.argumentCallback ? r.argumentCallback(n) : n;
    return a[s];
  };
}
const lt = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ct = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, dt = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, ut = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, ht = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Ct = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, ft = (r, n) => {
  const e = Number(r), t = e % 100;
  if (t > 20 || t < 10)
    switch (t % 10) {
      case 1:
        return e + "st";
      case 2:
        return e + "nd";
      case 3:
        return e + "rd";
    }
  return e + "th";
}, pt = {
  ordinalNumber: ft,
  era: j2({
    values: lt,
    defaultWidth: "wide"
  }),
  quarter: j2({
    values: ct,
    defaultWidth: "wide",
    argumentCallback: (r) => r - 1
  }),
  month: j2({
    values: dt,
    defaultWidth: "wide"
  }),
  day: j2({
    values: ut,
    defaultWidth: "wide"
  }),
  dayPeriod: j2({
    values: ht,
    defaultWidth: "wide",
    formattingValues: Ct,
    defaultFormattingWidth: "wide"
  })
};
function A2(r) {
  return (n, e = {}) => {
    const t = e.width, a = t && r.matchPatterns[t] || r.matchPatterns[r.defaultMatchWidth], s = n.match(a);
    if (!s)
      return null;
    const i = s[0], o = t && r.parsePatterns[t] || r.parsePatterns[r.defaultParseWidth], l = Array.isArray(o) ? gt(o, (u) => u.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      mt(o, (u) => u.test(i))
    );
    let c;
    c = r.valueCallback ? r.valueCallback(l) : l, c = e.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      e.valueCallback(c)
    ) : c;
    const d = n.slice(i.length);
    return { value: c, rest: d };
  };
}
function mt(r, n) {
  for (const e in r)
    if (Object.prototype.hasOwnProperty.call(r, e) && n(r[e]))
      return e;
}
function gt(r, n) {
  for (let e = 0; e < r.length; e++)
    if (n(r[e]))
      return e;
}
function Z5(r) {
  return (n, e = {}) => {
    const t = n.match(r.matchPattern);
    if (!t) return null;
    const a = t[0], s = n.match(r.parsePattern);
    if (!s) return null;
    let i = r.valueCallback ? r.valueCallback(s[0]) : s[0];
    i = e.valueCallback ? e.valueCallback(i) : i;
    const o = n.slice(a.length);
    return { value: i, rest: o };
  };
}
const vt = /^(\d+)(th|st|nd|rd)?/i, Mt = /\d+/i, yt = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, wt = {
  any: [/^b/i, /^(a|c)/i]
}, bt = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Lt = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, _t = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, xt = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, kt = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Zt = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Dt = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, St = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Pt = {
  ordinalNumber: Z5({
    matchPattern: vt,
    parsePattern: Mt,
    valueCallback: (r) => parseInt(r, 10)
  }),
  era: A2({
    matchPatterns: yt,
    defaultMatchWidth: "wide",
    parsePatterns: wt,
    defaultParseWidth: "any"
  }),
  quarter: A2({
    matchPatterns: bt,
    defaultMatchWidth: "wide",
    parsePatterns: Lt,
    defaultParseWidth: "any",
    valueCallback: (r) => r + 1
  }),
  month: A2({
    matchPatterns: _t,
    defaultMatchWidth: "wide",
    parsePatterns: xt,
    defaultParseWidth: "any"
  }),
  day: A2({
    matchPatterns: kt,
    defaultMatchWidth: "wide",
    parsePatterns: Zt,
    defaultParseWidth: "any"
  }),
  dayPeriod: A2({
    matchPatterns: Dt,
    defaultMatchWidth: "any",
    parsePatterns: St,
    defaultParseWidth: "any"
  })
}, D5 = {
  code: "en-US",
  formatDistance: tt,
  formatLong: st,
  formatRelative: ot,
  localize: pt,
  match: Pt,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Ht(r, n) {
  const e = Z(r, n == null ? void 0 : n.in);
  return i1(e, _4(e)) + 1;
}
function D3(r, n) {
  const e = Z(r, n == null ? void 0 : n.in), t = +s1(e) - +G9(e);
  return Math.round(t / y5) + 1;
}
function S3(r, n) {
  var d, u, C, f;
  const e = Z(r, n == null ? void 0 : n.in), t = e.getFullYear(), a = Y0(), s = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((u = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((f = (C = a.locale) == null ? void 0 : C.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, i = X((n == null ? void 0 : n.in) || r, 0);
  i.setFullYear(t + 1, 0, s), i.setHours(0, 0, 0, 0);
  const o = s0(i, n), l = X((n == null ? void 0 : n.in) || r, 0);
  l.setFullYear(t, 0, s), l.setHours(0, 0, 0, 0);
  const c = s0(l, n);
  return +e >= +o ? t + 1 : +e >= +c ? t : t - 1;
}
function Tt(r, n) {
  var o, l, c, d;
  const e = Y0(), t = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((l = (o = n == null ? void 0 : n.locale) == null ? void 0 : o.options) == null ? void 0 : l.firstWeekContainsDate) ?? e.firstWeekContainsDate ?? ((d = (c = e.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, a = S3(r, n), s = X((n == null ? void 0 : n.in) || r, 0);
  return s.setFullYear(a, 0, t), s.setHours(0, 0, 0, 0), s0(s, n);
}
function S5(r, n) {
  const e = Z(r, n == null ? void 0 : n.in), t = +s0(e, n) - +Tt(e, n);
  return Math.round(t / y5) + 1;
}
function Q(r, n) {
  const e = r < 0 ? "-" : "", t = Math.abs(r).toString().padStart(n, "0");
  return e + t;
}
const l0 = {
  // Year
  y(r, n) {
    const e = r.getFullYear(), t = e > 0 ? e : 1 - e;
    return Q(n === "yy" ? t % 100 : t, n.length);
  },
  // Month
  M(r, n) {
    const e = r.getMonth();
    return n === "M" ? String(e + 1) : Q(e + 1, 2);
  },
  // Day of the month
  d(r, n) {
    return Q(r.getDate(), n.length);
  },
  // AM or PM
  a(r, n) {
    const e = r.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return e.toUpperCase();
      case "aaa":
        return e;
      case "aaaaa":
        return e[0];
      case "aaaa":
      default:
        return e === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(r, n) {
    return Q(r.getHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H(r, n) {
    return Q(r.getHours(), n.length);
  },
  // Minute
  m(r, n) {
    return Q(r.getMinutes(), n.length);
  },
  // Second
  s(r, n) {
    return Q(r.getSeconds(), n.length);
  },
  // Fraction of second
  S(r, n) {
    const e = n.length, t = r.getMilliseconds(), a = Math.trunc(
      t * Math.pow(10, e - 3)
    );
    return Q(a, n.length);
  }
}, $0 = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, d7 = {
  // Era
  G: function(r, n, e) {
    const t = r.getFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return e.era(t, { width: "abbreviated" });
      case "GGGGG":
        return e.era(t, { width: "narrow" });
      case "GGGG":
      default:
        return e.era(t, { width: "wide" });
    }
  },
  // Year
  y: function(r, n, e) {
    if (n === "yo") {
      const t = r.getFullYear(), a = t > 0 ? t : 1 - t;
      return e.ordinalNumber(a, { unit: "year" });
    }
    return l0.y(r, n);
  },
  // Local week-numbering year
  Y: function(r, n, e, t) {
    const a = S3(r, t), s = a > 0 ? a : 1 - a;
    if (n === "YY") {
      const i = s % 100;
      return Q(i, 2);
    }
    return n === "Yo" ? e.ordinalNumber(s, { unit: "year" }) : Q(s, n.length);
  },
  // ISO week-numbering year
  R: function(r, n) {
    const e = b5(r);
    return Q(e, n.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(r, n) {
    const e = r.getFullYear();
    return Q(e, n.length);
  },
  // Quarter
  Q: function(r, n, e) {
    const t = Math.ceil((r.getMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(t);
      case "QQ":
        return Q(t, 2);
      case "Qo":
        return e.ordinalNumber(t, { unit: "quarter" });
      case "QQQ":
        return e.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return e.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return e.quarter(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(r, n, e) {
    const t = Math.ceil((r.getMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(t);
      case "qq":
        return Q(t, 2);
      case "qo":
        return e.ordinalNumber(t, { unit: "quarter" });
      case "qqq":
        return e.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return e.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return e.quarter(t, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(r, n, e) {
    const t = r.getMonth();
    switch (n) {
      case "M":
      case "MM":
        return l0.M(r, n);
      case "Mo":
        return e.ordinalNumber(t + 1, { unit: "month" });
      case "MMM":
        return e.month(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return e.month(t, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return e.month(t, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(r, n, e) {
    const t = r.getMonth();
    switch (n) {
      case "L":
        return String(t + 1);
      case "LL":
        return Q(t + 1, 2);
      case "Lo":
        return e.ordinalNumber(t + 1, { unit: "month" });
      case "LLL":
        return e.month(t, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return e.month(t, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return e.month(t, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(r, n, e, t) {
    const a = S5(r, t);
    return n === "wo" ? e.ordinalNumber(a, { unit: "week" }) : Q(a, n.length);
  },
  // ISO week of year
  I: function(r, n, e) {
    const t = D3(r);
    return n === "Io" ? e.ordinalNumber(t, { unit: "week" }) : Q(t, n.length);
  },
  // Day of the month
  d: function(r, n, e) {
    return n === "do" ? e.ordinalNumber(r.getDate(), { unit: "date" }) : l0.d(r, n);
  },
  // Day of year
  D: function(r, n, e) {
    const t = Ht(r);
    return n === "Do" ? e.ordinalNumber(t, { unit: "dayOfYear" }) : Q(t, n.length);
  },
  // Day of week
  E: function(r, n, e) {
    const t = r.getDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return e.day(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return e.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return e.day(t, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return e.day(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(r, n, e, t) {
    const a = r.getDay(), s = (a - t.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(s);
      case "ee":
        return Q(s, 2);
      case "eo":
        return e.ordinalNumber(s, { unit: "day" });
      case "eee":
        return e.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return e.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return e.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return e.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(r, n, e, t) {
    const a = r.getDay(), s = (a - t.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(s);
      case "cc":
        return Q(s, n.length);
      case "co":
        return e.ordinalNumber(s, { unit: "day" });
      case "ccc":
        return e.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return e.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return e.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return e.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(r, n, e) {
    const t = r.getDay(), a = t === 0 ? 7 : t;
    switch (n) {
      case "i":
        return String(a);
      case "ii":
        return Q(a, n.length);
      case "io":
        return e.ordinalNumber(a, { unit: "day" });
      case "iii":
        return e.day(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return e.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return e.day(t, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return e.day(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(r, n, e) {
    const a = r.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return e.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return e.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(r, n, e) {
    const t = r.getHours();
    let a;
    switch (t === 12 ? a = $0.noon : t === 0 ? a = $0.midnight : a = t / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return e.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return e.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(r, n, e) {
    const t = r.getHours();
    let a;
    switch (t >= 17 ? a = $0.evening : t >= 12 ? a = $0.afternoon : t >= 4 ? a = $0.morning : a = $0.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return e.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return e.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(r, n, e) {
    if (n === "ho") {
      let t = r.getHours() % 12;
      return t === 0 && (t = 12), e.ordinalNumber(t, { unit: "hour" });
    }
    return l0.h(r, n);
  },
  // Hour [0-23]
  H: function(r, n, e) {
    return n === "Ho" ? e.ordinalNumber(r.getHours(), { unit: "hour" }) : l0.H(r, n);
  },
  // Hour [0-11]
  K: function(r, n, e) {
    const t = r.getHours() % 12;
    return n === "Ko" ? e.ordinalNumber(t, { unit: "hour" }) : Q(t, n.length);
  },
  // Hour [1-24]
  k: function(r, n, e) {
    let t = r.getHours();
    return t === 0 && (t = 24), n === "ko" ? e.ordinalNumber(t, { unit: "hour" }) : Q(t, n.length);
  },
  // Minute
  m: function(r, n, e) {
    return n === "mo" ? e.ordinalNumber(r.getMinutes(), { unit: "minute" }) : l0.m(r, n);
  },
  // Second
  s: function(r, n, e) {
    return n === "so" ? e.ordinalNumber(r.getSeconds(), { unit: "second" }) : l0.s(r, n);
  },
  // Fraction of second
  S: function(r, n) {
    return l0.S(r, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(r, n, e) {
    const t = r.getTimezoneOffset();
    if (t === 0)
      return "Z";
    switch (n) {
      case "X":
        return h7(t);
      case "XXXX":
      case "XX":
        return x0(t);
      case "XXXXX":
      case "XXX":
      default:
        return x0(t, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(r, n, e) {
    const t = r.getTimezoneOffset();
    switch (n) {
      case "x":
        return h7(t);
      case "xxxx":
      case "xx":
        return x0(t);
      case "xxxxx":
      case "xxx":
      default:
        return x0(t, ":");
    }
  },
  // Timezone (GMT)
  O: function(r, n, e) {
    const t = r.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + u7(t, ":");
      case "OOOO":
      default:
        return "GMT" + x0(t, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(r, n, e) {
    const t = r.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + u7(t, ":");
      case "zzzz":
      default:
        return "GMT" + x0(t, ":");
    }
  },
  // Seconds timestamp
  t: function(r, n, e) {
    const t = Math.trunc(+r / 1e3);
    return Q(t, n.length);
  },
  // Milliseconds timestamp
  T: function(r, n, e) {
    return Q(+r, n.length);
  }
};
function u7(r, n = "") {
  const e = r > 0 ? "-" : "+", t = Math.abs(r), a = Math.trunc(t / 60), s = t % 60;
  return s === 0 ? e + String(a) : e + String(a) + n + Q(s, 2);
}
function h7(r, n) {
  return r % 60 === 0 ? (r > 0 ? "-" : "+") + Q(Math.abs(r) / 60, 2) : x0(r, n);
}
function x0(r, n = "") {
  const e = r > 0 ? "-" : "+", t = Math.abs(r), a = Q(Math.trunc(t / 60), 2), s = Q(t % 60, 2);
  return e + a + n + s;
}
const C7 = (r, n) => {
  switch (r) {
    case "P":
      return n.date({ width: "short" });
    case "PP":
      return n.date({ width: "medium" });
    case "PPP":
      return n.date({ width: "long" });
    case "PPPP":
    default:
      return n.date({ width: "full" });
  }
}, P5 = (r, n) => {
  switch (r) {
    case "p":
      return n.time({ width: "short" });
    case "pp":
      return n.time({ width: "medium" });
    case "ppp":
      return n.time({ width: "long" });
    case "pppp":
    default:
      return n.time({ width: "full" });
  }
}, Ot = (r, n) => {
  const e = r.match(/(P+)(p+)?/) || [], t = e[1], a = e[2];
  if (!a)
    return C7(r, n);
  let s;
  switch (t) {
    case "P":
      s = n.dateTime({ width: "short" });
      break;
    case "PP":
      s = n.dateTime({ width: "medium" });
      break;
    case "PPP":
      s = n.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      s = n.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", C7(t, n)).replace("{{time}}", P5(a, n));
}, f3 = {
  p: P5,
  P: Ot
}, Et = /^D+$/, It = /^Y+$/, Nt = ["D", "DD", "YY", "YYYY"];
function Ft(r) {
  return Et.test(r);
}
function Vt(r) {
  return It.test(r);
}
function Rt(r, n, e) {
  const t = jt(r, n, e);
  if (console.warn(t), Nt.includes(r)) throw new RangeError(t);
}
function jt(r, n, e) {
  const t = r[0] === "Y" ? "years" : "days of the month";
  return `Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${n}\`) for formatting ${t} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const At = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Bt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Yt = /^'([^]*?)'?$/, Ut = /''/g, Wt = /[a-zA-Z]/;
function f7(r, n, e) {
  var d, u, C, f, p, v, m, w;
  const t = Y0(), a = (e == null ? void 0 : e.locale) ?? t.locale ?? D5, s = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((u = (d = e == null ? void 0 : e.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((f = (C = t.locale) == null ? void 0 : C.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, i = (e == null ? void 0 : e.weekStartsOn) ?? ((v = (p = e == null ? void 0 : e.locale) == null ? void 0 : p.options) == null ? void 0 : v.weekStartsOn) ?? t.weekStartsOn ?? ((w = (m = t.locale) == null ? void 0 : m.options) == null ? void 0 : w.weekStartsOn) ?? 0, o = Z(r, e == null ? void 0 : e.in);
  if (!a4(o))
    throw new RangeError("Invalid time value");
  let l = n.match(Bt).map((y) => {
    const b = y[0];
    if (b === "p" || b === "P") {
      const D = f3[b];
      return D(y, a.formatLong);
    }
    return y;
  }).join("").match(At).map((y) => {
    if (y === "''")
      return { isToken: !1, value: "'" };
    const b = y[0];
    if (b === "'")
      return { isToken: !1, value: zt(y) };
    if (d7[b])
      return { isToken: !0, value: y };
    if (b.match(Wt))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + b + "`"
      );
    return { isToken: !1, value: y };
  });
  a.localize.preprocessor && (l = a.localize.preprocessor(o, l));
  const c = {
    firstWeekContainsDate: s,
    weekStartsOn: i,
    locale: a
  };
  return l.map((y) => {
    if (!y.isToken) return y.value;
    const b = y.value;
    (!(e != null && e.useAdditionalWeekYearTokens) && Vt(b) || !(e != null && e.useAdditionalDayOfYearTokens) && Ft(b)) && Rt(b, n, String(r));
    const D = d7[b[0]];
    return D(o, b, a.localize, c);
  }).join("");
}
function zt(r) {
  const n = r.match(Yt);
  return n ? n[1].replace(Ut, "'") : r;
}
function p7(r, n) {
  return Z(r, n == null ? void 0 : n.in).getDate();
}
function qt(r, n) {
  return Z(r, n == null ? void 0 : n.in).getDay();
}
function $t(r, n) {
  const e = Z(r, n == null ? void 0 : n.in), t = e.getFullYear(), a = e.getMonth(), s = X(e, 0);
  return s.setFullYear(t, a + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
}
function Gt() {
  return Object.assign({}, Y0());
}
function n0(r, n) {
  return Z(r, n == null ? void 0 : n.in).getHours();
}
function Kt(r, n) {
  const e = Z(r, n == null ? void 0 : n.in).getDay();
  return e === 0 ? 7 : e;
}
function r0(r, n) {
  return Z(r, n == null ? void 0 : n.in).getMinutes();
}
function y2(r, n) {
  return Z(r, n == null ? void 0 : n.in).getMonth();
}
function p0(r) {
  return Z(r).getSeconds();
}
function p3(r) {
  return +Z(r);
}
function j(r, n) {
  return Z(r, n == null ? void 0 : n.in).getFullYear();
}
function w0(r, n) {
  return +Z(r) > +Z(n);
}
function U2(r, n) {
  return +Z(r) < +Z(n);
}
function Qt(r, n) {
  return +Z(r) == +Z(n);
}
function Xt(r, n) {
  const e = Jt(n) ? new n(0) : X(n, 0);
  return e.setFullYear(r.getFullYear(), r.getMonth(), r.getDate()), e.setHours(
    r.getHours(),
    r.getMinutes(),
    r.getSeconds(),
    r.getMilliseconds()
  ), e;
}
function Jt(r) {
  var n;
  return typeof r == "function" && ((n = r.prototype) == null ? void 0 : n.constructor) === r;
}
const en = 10;
class H5 {
  constructor() {
    x(this, "subPriority", 0);
  }
  validate(n, e) {
    return !0;
  }
}
class tn extends H5 {
  constructor(n, e, t, a, s) {
    super(), this.value = n, this.validateValue = e, this.setValue = t, this.priority = a, s && (this.subPriority = s);
  }
  validate(n, e) {
    return this.validateValue(n, this.value, e);
  }
  set(n, e, t) {
    return this.setValue(n, e, this.value, t);
  }
}
class nn extends H5 {
  constructor(e, t) {
    super();
    x(this, "priority", en);
    x(this, "subPriority", -1);
    this.context = e || ((a) => X(t, a));
  }
  set(e, t) {
    return t.timestampIsSet ? e : X(e, Xt(e, this.context));
  }
}
class G {
  run(n, e, t, a) {
    const s = this.parse(n, e, t, a);
    return s ? {
      setter: new tn(
        s.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: s.rest
    } : null;
  }
  validate(n, e, t) {
    return !0;
  }
}
class rn extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 140);
    x(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return a.era(e, { width: "abbreviated" }) || a.era(e, { width: "narrow" });
      case "GGGGG":
        return a.era(e, { width: "narrow" });
      case "GGGG":
      default:
        return a.era(e, { width: "wide" }) || a.era(e, { width: "abbreviated" }) || a.era(e, { width: "narrow" });
    }
  }
  set(e, t, a) {
    return t.era = a, e.setFullYear(a, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
const i2 = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, B2 = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function o2(r, n) {
  return r && {
    value: n(r.value),
    rest: r.rest
  };
}
function t2(r, n) {
  const e = n.match(r);
  return e ? {
    value: parseInt(e[0], 10),
    rest: n.slice(e[0].length)
  } : null;
}
function Y2(r, n) {
  const e = n.match(r);
  if (!e)
    return null;
  if (e[0] === "Z")
    return {
      value: 0,
      rest: n.slice(1)
    };
  const t = e[1] === "+" ? 1 : -1, a = e[2] ? parseInt(e[2], 10) : 0, s = e[3] ? parseInt(e[3], 10) : 0, i = e[5] ? parseInt(e[5], 10) : 0;
  return {
    value: t * (a * L4 + s * b4 + i * z9),
    rest: n.slice(e[0].length)
  };
}
function T5(r) {
  return t2(i2.anyDigitsSigned, r);
}
function s2(r, n) {
  switch (r) {
    case 1:
      return t2(i2.singleDigit, n);
    case 2:
      return t2(i2.twoDigits, n);
    case 3:
      return t2(i2.threeDigits, n);
    case 4:
      return t2(i2.fourDigits, n);
    default:
      return t2(new RegExp("^\\d{1," + r + "}"), n);
  }
}
function l4(r, n) {
  switch (r) {
    case 1:
      return t2(i2.singleDigitSigned, n);
    case 2:
      return t2(i2.twoDigitsSigned, n);
    case 3:
      return t2(i2.threeDigitsSigned, n);
    case 4:
      return t2(i2.fourDigitsSigned, n);
    default:
      return t2(new RegExp("^-?\\d{1," + r + "}"), n);
  }
}
function P3(r) {
  switch (r) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function O5(r, n) {
  const e = n > 0, t = e ? n : 1 - n;
  let a;
  if (t <= 50)
    a = r || 100;
  else {
    const s = t + 50, i = Math.trunc(s / 100) * 100, o = r >= s % 100;
    a = r + i - (o ? 100 : 0);
  }
  return e ? a : 1 - a;
}
function E5(r) {
  return r % 400 === 0 || r % 4 === 0 && r % 100 !== 0;
}
class an extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 130);
    x(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(e, t, a) {
    const s = (i) => ({
      year: i,
      isTwoDigitYear: t === "yy"
    });
    switch (t) {
      case "y":
        return o2(s2(4, e), s);
      case "yo":
        return o2(
          a.ordinalNumber(e, {
            unit: "year"
          }),
          s
        );
      default:
        return o2(s2(t.length, e), s);
    }
  }
  validate(e, t) {
    return t.isTwoDigitYear || t.year > 0;
  }
  set(e, t, a) {
    const s = e.getFullYear();
    if (a.isTwoDigitYear) {
      const o = O5(
        a.year,
        s
      );
      return e.setFullYear(o, 0, 1), e.setHours(0, 0, 0, 0), e;
    }
    const i = !("era" in t) || t.era === 1 ? a.year : 1 - a.year;
    return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class sn extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 130);
    x(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    const s = (i) => ({
      year: i,
      isTwoDigitYear: t === "YY"
    });
    switch (t) {
      case "Y":
        return o2(s2(4, e), s);
      case "Yo":
        return o2(
          a.ordinalNumber(e, {
            unit: "year"
          }),
          s
        );
      default:
        return o2(s2(t.length, e), s);
    }
  }
  validate(e, t) {
    return t.isTwoDigitYear || t.year > 0;
  }
  set(e, t, a, s) {
    const i = S3(e, s);
    if (a.isTwoDigitYear) {
      const l = O5(
        a.year,
        i
      );
      return e.setFullYear(
        l,
        0,
        s.firstWeekContainsDate
      ), e.setHours(0, 0, 0, 0), s0(e, s);
    }
    const o = !("era" in t) || t.era === 1 ? a.year : 1 - a.year;
    return e.setFullYear(o, 0, s.firstWeekContainsDate), e.setHours(0, 0, 0, 0), s0(e, s);
  }
}
class on extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 130);
    x(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t) {
    return l4(t === "R" ? 4 : t.length, e);
  }
  set(e, t, a) {
    const s = X(e, 0);
    return s.setFullYear(a, 0, 4), s.setHours(0, 0, 0, 0), s1(s);
  }
}
class ln extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 130);
    x(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(e, t) {
    return l4(t === "u" ? 4 : t.length, e);
  }
  set(e, t, a) {
    return e.setFullYear(a, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class cn extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 120);
    x(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    switch (t) {
      case "Q":
      case "QQ":
        return s2(t.length, e);
      case "Qo":
        return a.ordinalNumber(e, { unit: "quarter" });
      case "QQQ":
        return a.quarter(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQQ":
        return a.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return a.quarter(e, {
          width: "wide",
          context: "formatting"
        }) || a.quarter(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 4;
  }
  set(e, t, a) {
    return e.setMonth((a - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class dn extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 120);
    x(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    switch (t) {
      case "q":
      case "qq":
        return s2(t.length, e);
      case "qo":
        return a.ordinalNumber(e, { unit: "quarter" });
      case "qqq":
        return a.quarter(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqqq":
        return a.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return a.quarter(e, {
          width: "wide",
          context: "standalone"
        }) || a.quarter(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 4;
  }
  set(e, t, a) {
    return e.setMonth((a - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class un extends G {
  constructor() {
    super(...arguments);
    x(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    x(this, "priority", 110);
  }
  parse(e, t, a) {
    const s = (i) => i - 1;
    switch (t) {
      case "M":
        return o2(
          t2(i2.month, e),
          s
        );
      case "MM":
        return o2(s2(2, e), s);
      case "Mo":
        return o2(
          a.ordinalNumber(e, {
            unit: "month"
          }),
          s
        );
      case "MMM":
        return a.month(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(e, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return a.month(e, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return a.month(e, { width: "wide", context: "formatting" }) || a.month(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, a) {
    return e.setMonth(a, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class hn extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 110);
    x(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    const s = (i) => i - 1;
    switch (t) {
      case "L":
        return o2(
          t2(i2.month, e),
          s
        );
      case "LL":
        return o2(s2(2, e), s);
      case "Lo":
        return o2(
          a.ordinalNumber(e, {
            unit: "month"
          }),
          s
        );
      case "LLL":
        return a.month(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(e, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return a.month(e, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return a.month(e, { width: "wide", context: "standalone" }) || a.month(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(e, { width: "narrow", context: "standalone" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, a) {
    return e.setMonth(a, 1), e.setHours(0, 0, 0, 0), e;
  }
}
function Cn(r, n, e) {
  const t = Z(r, e == null ? void 0 : e.in), a = S5(t, e) - n;
  return t.setDate(t.getDate() - a * 7), Z(t, e == null ? void 0 : e.in);
}
class fn extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 100);
    x(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    switch (t) {
      case "w":
        return t2(i2.week, e);
      case "wo":
        return a.ordinalNumber(e, { unit: "week" });
      default:
        return s2(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 53;
  }
  set(e, t, a, s) {
    return s0(Cn(e, a, s), s);
  }
}
function pn(r, n, e) {
  const t = Z(r, e == null ? void 0 : e.in), a = D3(t, e) - n;
  return t.setDate(t.getDate() - a * 7), t;
}
class mn extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 100);
    x(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    switch (t) {
      case "I":
        return t2(i2.week, e);
      case "Io":
        return a.ordinalNumber(e, { unit: "week" });
      default:
        return s2(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 53;
  }
  set(e, t, a) {
    return s1(pn(e, a));
  }
}
const gn = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], vn = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class Mn extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 90);
    x(this, "subPriority", 1);
    x(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    switch (t) {
      case "d":
        return t2(i2.date, e);
      case "do":
        return a.ordinalNumber(e, { unit: "date" });
      default:
        return s2(t.length, e);
    }
  }
  validate(e, t) {
    const a = e.getFullYear(), s = E5(a), i = e.getMonth();
    return s ? t >= 1 && t <= vn[i] : t >= 1 && t <= gn[i];
  }
  set(e, t, a) {
    return e.setDate(a), e.setHours(0, 0, 0, 0), e;
  }
}
class yn extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 90);
    x(this, "subpriority", 1);
    x(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    switch (t) {
      case "D":
      case "DD":
        return t2(i2.dayOfYear, e);
      case "Do":
        return a.ordinalNumber(e, { unit: "date" });
      default:
        return s2(t.length, e);
    }
  }
  validate(e, t) {
    const a = e.getFullYear();
    return E5(a) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
  }
  set(e, t, a) {
    return e.setMonth(0, a), e.setHours(0, 0, 0, 0), e;
  }
}
function H3(r, n, e) {
  var u, C, f, p;
  const t = Y0(), a = (e == null ? void 0 : e.weekStartsOn) ?? ((C = (u = e == null ? void 0 : e.locale) == null ? void 0 : u.options) == null ? void 0 : C.weekStartsOn) ?? t.weekStartsOn ?? ((p = (f = t.locale) == null ? void 0 : f.options) == null ? void 0 : p.weekStartsOn) ?? 0, s = Z(r, e == null ? void 0 : e.in), i = s.getDay(), l = (n % 7 + 7) % 7, c = 7 - a, d = n < 0 || n > 6 ? n - (i + c) % 7 : (l + c) % 7 - (i + c) % 7;
  return I2(s, d, e);
}
class wn extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 90);
    x(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return a.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return a.day(e, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
      case "EEEE":
      default:
        return a.day(e, { width: "wide", context: "formatting" }) || a.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, a, s) {
    return e = H3(e, a, s), e.setHours(0, 0, 0, 0), e;
  }
}
class bn extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 90);
    x(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a, s) {
    const i = (o) => {
      const l = Math.floor((o - 1) / 7) * 7;
      return (o + s.weekStartsOn + 6) % 7 + l;
    };
    switch (t) {
      case "e":
      case "ee":
        return o2(s2(t.length, e), i);
      case "eo":
        return o2(
          a.ordinalNumber(e, {
            unit: "day"
          }),
          i
        );
      case "eee":
        return a.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
      case "eeeee":
        return a.day(e, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
      case "eeee":
      default:
        return a.day(e, { width: "wide", context: "formatting" }) || a.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, a, s) {
    return e = H3(e, a, s), e.setHours(0, 0, 0, 0), e;
  }
}
class Ln extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 90);
    x(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(e, t, a, s) {
    const i = (o) => {
      const l = Math.floor((o - 1) / 7) * 7;
      return (o + s.weekStartsOn + 6) % 7 + l;
    };
    switch (t) {
      case "c":
      case "cc":
        return o2(s2(t.length, e), i);
      case "co":
        return o2(
          a.ordinalNumber(e, {
            unit: "day"
          }),
          i
        );
      case "ccc":
        return a.day(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(e, { width: "short", context: "standalone" }) || a.day(e, { width: "narrow", context: "standalone" });
      case "ccccc":
        return a.day(e, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return a.day(e, { width: "short", context: "standalone" }) || a.day(e, { width: "narrow", context: "standalone" });
      case "cccc":
      default:
        return a.day(e, { width: "wide", context: "standalone" }) || a.day(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(e, { width: "short", context: "standalone" }) || a.day(e, { width: "narrow", context: "standalone" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, a, s) {
    return e = H3(e, a, s), e.setHours(0, 0, 0, 0), e;
  }
}
function _n(r, n, e) {
  const t = Z(r, e == null ? void 0 : e.in), a = Kt(t, e), s = n - a;
  return I2(t, s, e);
}
class xn extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 90);
    x(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    const s = (i) => i === 0 ? 7 : i;
    switch (t) {
      case "i":
      case "ii":
        return s2(t.length, e);
      case "io":
        return a.ordinalNumber(e, { unit: "day" });
      case "iii":
        return o2(
          a.day(e, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(e, {
            width: "short",
            context: "formatting"
          }) || a.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      case "iiiii":
        return o2(
          a.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      case "iiiiii":
        return o2(
          a.day(e, {
            width: "short",
            context: "formatting"
          }) || a.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      case "iiii":
      default:
        return o2(
          a.day(e, {
            width: "wide",
            context: "formatting"
          }) || a.day(e, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(e, {
            width: "short",
            context: "formatting"
          }) || a.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 7;
  }
  set(e, t, a) {
    return e = _n(e, a), e.setHours(0, 0, 0, 0), e;
  }
}
class kn extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 80);
    x(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "a":
      case "aa":
      case "aaa":
        return a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return a.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, t, a) {
    return e.setHours(P3(a), 0, 0, 0), e;
  }
}
class Zn extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 80);
    x(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "b":
      case "bb":
      case "bbb":
        return a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return a.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, t, a) {
    return e.setHours(P3(a), 0, 0, 0), e;
  }
}
class Dn extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 80);
    x(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "B":
      case "BB":
      case "BBB":
        return a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return a.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, t, a) {
    return e.setHours(P3(a), 0, 0, 0), e;
  }
}
class Sn extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 70);
    x(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "h":
        return t2(i2.hour12h, e);
      case "ho":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return s2(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 12;
  }
  set(e, t, a) {
    const s = e.getHours() >= 12;
    return s && a < 12 ? e.setHours(a + 12, 0, 0, 0) : !s && a === 12 ? e.setHours(0, 0, 0, 0) : e.setHours(a, 0, 0, 0), e;
  }
}
class Pn extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 70);
    x(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "H":
        return t2(i2.hour23h, e);
      case "Ho":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return s2(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 23;
  }
  set(e, t, a) {
    return e.setHours(a, 0, 0, 0), e;
  }
}
class Hn extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 70);
    x(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "K":
        return t2(i2.hour11h, e);
      case "Ko":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return s2(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, a) {
    return e.getHours() >= 12 && a < 12 ? e.setHours(a + 12, 0, 0, 0) : e.setHours(a, 0, 0, 0), e;
  }
}
class Tn extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 70);
    x(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "k":
        return t2(i2.hour24h, e);
      case "ko":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return s2(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 24;
  }
  set(e, t, a) {
    const s = a <= 24 ? a % 24 : a;
    return e.setHours(s, 0, 0, 0), e;
  }
}
class On extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 60);
    x(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "m":
        return t2(i2.minute, e);
      case "mo":
        return a.ordinalNumber(e, { unit: "minute" });
      default:
        return s2(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 59;
  }
  set(e, t, a) {
    return e.setMinutes(a, 0, 0), e;
  }
}
class En extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 50);
    x(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "s":
        return t2(i2.second, e);
      case "so":
        return a.ordinalNumber(e, { unit: "second" });
      default:
        return s2(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 59;
  }
  set(e, t, a) {
    return e.setSeconds(a, 0), e;
  }
}
class In extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 30);
    x(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, t) {
    const a = (s) => Math.trunc(s * Math.pow(10, -t.length + 3));
    return o2(s2(t.length, e), a);
  }
  set(e, t, a) {
    return e.setMilliseconds(a), e;
  }
}
class Nn extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 10);
    x(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(e, t) {
    switch (t) {
      case "X":
        return Y2(
          B2.basicOptionalMinutes,
          e
        );
      case "XX":
        return Y2(B2.basic, e);
      case "XXXX":
        return Y2(
          B2.basicOptionalSeconds,
          e
        );
      case "XXXXX":
        return Y2(
          B2.extendedOptionalSeconds,
          e
        );
      case "XXX":
      default:
        return Y2(B2.extended, e);
    }
  }
  set(e, t, a) {
    return t.timestampIsSet ? e : X(
      e,
      e.getTime() - n4(e) - a
    );
  }
}
class Fn extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 10);
    x(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(e, t) {
    switch (t) {
      case "x":
        return Y2(
          B2.basicOptionalMinutes,
          e
        );
      case "xx":
        return Y2(B2.basic, e);
      case "xxxx":
        return Y2(
          B2.basicOptionalSeconds,
          e
        );
      case "xxxxx":
        return Y2(
          B2.extendedOptionalSeconds,
          e
        );
      case "xxx":
      default:
        return Y2(B2.extended, e);
    }
  }
  set(e, t, a) {
    return t.timestampIsSet ? e : X(
      e,
      e.getTime() - n4(e) - a
    );
  }
}
class Vn extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 40);
    x(this, "incompatibleTokens", "*");
  }
  parse(e) {
    return T5(e);
  }
  set(e, t, a) {
    return [X(e, a * 1e3), { timestampIsSet: !0 }];
  }
}
class Rn extends G {
  constructor() {
    super(...arguments);
    x(this, "priority", 20);
    x(this, "incompatibleTokens", "*");
  }
  parse(e) {
    return T5(e);
  }
  set(e, t, a) {
    return [X(e, a), { timestampIsSet: !0 }];
  }
}
const jn = {
  G: new rn(),
  y: new an(),
  Y: new sn(),
  R: new on(),
  u: new ln(),
  Q: new cn(),
  q: new dn(),
  M: new un(),
  L: new hn(),
  w: new fn(),
  I: new mn(),
  d: new Mn(),
  D: new yn(),
  E: new wn(),
  e: new bn(),
  c: new Ln(),
  i: new xn(),
  a: new kn(),
  b: new Zn(),
  B: new Dn(),
  h: new Sn(),
  H: new Pn(),
  K: new Hn(),
  k: new Tn(),
  m: new On(),
  s: new En(),
  S: new In(),
  X: new Nn(),
  x: new Fn(),
  t: new Vn(),
  T: new Rn()
}, An = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Bn = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Yn = /^'([^]*?)'?$/, Un = /''/g, Wn = /\S/, zn = /[a-zA-Z]/;
function qn(r, n, e, t) {
  var m, w, y, b, D, S, R, P;
  const a = () => X((t == null ? void 0 : t.in) || e, NaN), s = Gt(), i = (t == null ? void 0 : t.locale) ?? s.locale ?? D5, o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((w = (m = t == null ? void 0 : t.locale) == null ? void 0 : m.options) == null ? void 0 : w.firstWeekContainsDate) ?? s.firstWeekContainsDate ?? ((b = (y = s.locale) == null ? void 0 : y.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, l = (t == null ? void 0 : t.weekStartsOn) ?? ((S = (D = t == null ? void 0 : t.locale) == null ? void 0 : D.options) == null ? void 0 : S.weekStartsOn) ?? s.weekStartsOn ?? ((P = (R = s.locale) == null ? void 0 : R.options) == null ? void 0 : P.weekStartsOn) ?? 0;
  if (!n)
    return r ? a() : Z(e, t == null ? void 0 : t.in);
  const c = {
    firstWeekContainsDate: o,
    weekStartsOn: l,
    locale: i
  }, d = [new nn(t == null ? void 0 : t.in, e)], u = n.match(Bn).map((L) => {
    const k = L[0];
    if (k in f3) {
      const H = f3[k];
      return H(L, i.formatLong);
    }
    return L;
  }).join("").match(An), C = [];
  for (let L of u) {
    const k = L[0], H = jn[k];
    if (H) {
      const { incompatibleTokens: W } = H;
      if (Array.isArray(W)) {
        const z = C.find(
          (q) => W.includes(q.token) || q.token === k
        );
        if (z)
          throw new RangeError(
            `The format string mustn't contain \`${z.fullToken}\` and \`${L}\` at the same time`
          );
      } else if (H.incompatibleTokens === "*" && C.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${L}\` and any other token at the same time`
        );
      C.push({ token: k, fullToken: L });
      const V = H.run(
        r,
        L,
        i.match,
        c
      );
      if (!V)
        return a();
      d.push(V.setter), r = V.rest;
    } else {
      if (k.match(zn))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + k + "`"
        );
      if (L === "''" ? L = "'" : k === "'" && (L = $n(L)), r.indexOf(L) === 0)
        r = r.slice(L.length);
      else
        return a();
    }
  }
  if (r.length > 0 && Wn.test(r))
    return a();
  const f = d.map((L) => L.priority).sort((L, k) => k - L).filter((L, k, H) => H.indexOf(L) === k).map(
    (L) => d.filter((k) => k.priority === L).sort((k, H) => H.subPriority - k.subPriority)
  ).map((L) => L[0]);
  let p = Z(e, t == null ? void 0 : t.in);
  if (isNaN(+p)) return a();
  const v = {};
  for (const L of f) {
    if (!L.validate(p, c))
      return a();
    const k = L.set(p, v, c);
    Array.isArray(k) ? (p = k[0], Object.assign(v, k[1])) : p = k;
  }
  return p;
}
function $n(r) {
  return r.match(Yn)[1].replace(Un, "'");
}
function Gn(r, n, e) {
  const [t, a] = o0(
    e == null ? void 0 : e.in,
    r,
    n
  );
  return t.getFullYear() === a.getFullYear() && t.getMonth() === a.getMonth();
}
function Kn(r, n, e) {
  const [t, a] = o0(
    e == null ? void 0 : e.in,
    r,
    n
  );
  return +C3(t) == +C3(a);
}
function Qn(r, n, e) {
  const [t, a] = o0(
    e == null ? void 0 : e.in,
    r,
    n
  );
  return t.getFullYear() === a.getFullYear();
}
function Z1(r, n, e) {
  const t = +Z(r, e == null ? void 0 : e.in), [a, s] = [
    +Z(n.start, e == null ? void 0 : e.in),
    +Z(n.end, e == null ? void 0 : e.in)
  ].sort((i, o) => i - o);
  return t >= a && t <= s;
}
function Xn(r, n, e) {
  return I2(r, -1, e);
}
function Jn(r, n) {
  const e = () => X(n == null ? void 0 : n.in, NaN), a = rr(r);
  let s;
  if (a.date) {
    const c = ar(a.date, 2);
    s = sr(c.restDateString, c.year);
  }
  if (!s || isNaN(+s)) return e();
  const i = +s;
  let o = 0, l;
  if (a.time && (o = ir(a.time), isNaN(o)))
    return e();
  if (a.timezone) {
    if (l = or(a.timezone), isNaN(l)) return e();
  } else {
    const c = new Date(i + o), d = Z(0, n == null ? void 0 : n.in);
    return d.setFullYear(
      c.getUTCFullYear(),
      c.getUTCMonth(),
      c.getUTCDate()
    ), d.setHours(
      c.getUTCHours(),
      c.getUTCMinutes(),
      c.getUTCSeconds(),
      c.getUTCMilliseconds()
    ), d;
  }
  return Z(i + o + l, n == null ? void 0 : n.in);
}
const N1 = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, er = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, tr = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, nr = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function rr(r) {
  const n = {}, e = r.split(N1.dateTimeDelimiter);
  let t;
  if (e.length > 2)
    return n;
  if (/:/.test(e[0]) ? t = e[0] : (n.date = e[0], t = e[1], N1.timeZoneDelimiter.test(n.date) && (n.date = r.split(N1.timeZoneDelimiter)[0], t = r.substr(
    n.date.length,
    r.length
  ))), t) {
    const a = N1.timezone.exec(t);
    a ? (n.time = t.replace(a[1], ""), n.timezone = a[1]) : n.time = t;
  }
  return n;
}
function ar(r, n) {
  const e = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + n) + "})|(\\d{2}|[+-]\\d{" + (2 + n) + "})$)"
  ), t = r.match(e);
  if (!t) return { year: NaN, restDateString: "" };
  const a = t[1] ? parseInt(t[1]) : null, s = t[2] ? parseInt(t[2]) : null;
  return {
    year: s === null ? a : s * 100,
    restDateString: r.slice((t[1] || t[2]).length)
  };
}
function sr(r, n) {
  if (n === null) return /* @__PURE__ */ new Date(NaN);
  const e = r.match(er);
  if (!e) return /* @__PURE__ */ new Date(NaN);
  const t = !!e[4], a = y1(e[1]), s = y1(e[2]) - 1, i = y1(e[3]), o = y1(e[4]), l = y1(e[5]) - 1;
  if (t)
    return hr(n, o, l) ? lr(n, o, l) : /* @__PURE__ */ new Date(NaN);
  {
    const c = /* @__PURE__ */ new Date(0);
    return !dr(n, s, i) || !ur(n, a) ? /* @__PURE__ */ new Date(NaN) : (c.setUTCFullYear(n, s, Math.max(a, i)), c);
  }
}
function y1(r) {
  return r ? parseInt(r) : 1;
}
function ir(r) {
  const n = r.match(tr);
  if (!n) return NaN;
  const e = A4(n[1]), t = A4(n[2]), a = A4(n[3]);
  return Cr(e, t, a) ? e * L4 + t * b4 + a * 1e3 : NaN;
}
function A4(r) {
  return r && parseFloat(r.replace(",", ".")) || 0;
}
function or(r) {
  if (r === "Z") return 0;
  const n = r.match(nr);
  if (!n) return 0;
  const e = n[1] === "+" ? -1 : 1, t = parseInt(n[2]), a = n[3] && parseInt(n[3]) || 0;
  return fr(t, a) ? e * (t * L4 + a * b4) : NaN;
}
function lr(r, n, e) {
  const t = /* @__PURE__ */ new Date(0);
  t.setUTCFullYear(r, 0, 4);
  const a = t.getUTCDay() || 7, s = (n - 1) * 7 + e + 1 - a;
  return t.setUTCDate(t.getUTCDate() + s), t;
}
const cr = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function I5(r) {
  return r % 400 === 0 || r % 4 === 0 && r % 100 !== 0;
}
function dr(r, n, e) {
  return n >= 0 && n <= 11 && e >= 1 && e <= (cr[n] || (I5(r) ? 29 : 28));
}
function ur(r, n) {
  return n >= 1 && n <= (I5(r) ? 366 : 365);
}
function hr(r, n, e) {
  return n >= 1 && n <= 53 && e >= 0 && e <= 6;
}
function Cr(r, n, e) {
  return r === 24 ? n === 0 && e === 0 : e >= 0 && e < 60 && n >= 0 && n < 60 && r >= 0 && r < 25;
}
function fr(r, n) {
  return n >= 0 && n <= 59;
}
function D2(r, n, e) {
  const t = Z(r, e == null ? void 0 : e.in), a = t.getFullYear(), s = t.getDate(), i = X(r, 0);
  i.setFullYear(a, n, 15), i.setHours(0, 0, 0, 0);
  const o = $t(i);
  return t.setMonth(n, Math.min(s, o)), t;
}
function z1(r, n, e) {
  const t = Z(r, e == null ? void 0 : e.in);
  return t.setHours(n), t;
}
function q1(r, n, e) {
  const t = Z(r, e == null ? void 0 : e.in);
  return t.setMinutes(n), t;
}
function Q0(r, n, e) {
  const t = Z(r, e == null ? void 0 : e.in), a = Math.trunc(t.getMonth() / 3) + 1, s = n - a;
  return D2(t, t.getMonth() + s * 3);
}
function $1(r, n, e) {
  const t = Z(r, e == null ? void 0 : e.in);
  return t.setSeconds(n), t;
}
function V2(r, n, e) {
  const t = Z(r, e == null ? void 0 : e.in);
  return isNaN(+t) ? X(r, NaN) : (t.setFullYear(n), t);
}
function E0(r, n, e) {
  return N2(r, -n, e);
}
function N5(r, n, e) {
  return Z3(r, -1, e);
}
function m7(r, n, e) {
  return r4(r, -1, e);
}
function o1(r, n, e) {
  return e0(r, -n, e);
}
function x4() {
  return typeof window < "u";
}
function C1(r) {
  return F5(r) ? (r.nodeName || "").toLowerCase() : "#document";
}
function P2(r) {
  var n;
  return (r == null || (n = r.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function K2(r) {
  var n;
  return (n = (F5(r) ? r.ownerDocument : r.document) || window.document) == null ? void 0 : n.documentElement;
}
function F5(r) {
  return x4() ? r instanceof Node || r instanceof P2(r).Node : !1;
}
function w2(r) {
  return x4() ? r instanceof Element || r instanceof P2(r).Element : !1;
}
function $2(r) {
  return x4() ? r instanceof HTMLElement || r instanceof P2(r).HTMLElement : !1;
}
function g7(r) {
  return !x4() || typeof ShadowRoot > "u" ? !1 : r instanceof ShadowRoot || r instanceof P2(r).ShadowRoot;
}
const pr = /* @__PURE__ */ new Set(["inline", "contents"]);
function H1(r) {
  const {
    overflow: n,
    overflowX: e,
    overflowY: t,
    display: a
  } = O2(r);
  return /auto|scroll|overlay|hidden|clip/.test(n + t + e) && !pr.has(a);
}
const mr = /* @__PURE__ */ new Set(["table", "td", "th"]);
function gr(r) {
  return mr.has(C1(r));
}
const vr = [":popover-open", ":modal"];
function k4(r) {
  return vr.some((n) => {
    try {
      return r.matches(n);
    } catch {
      return !1;
    }
  });
}
const Mr = ["transform", "translate", "scale", "rotate", "perspective"], yr = ["transform", "translate", "scale", "rotate", "perspective", "filter"], wr = ["paint", "layout", "strict", "content"];
function T3(r) {
  const n = O3(), e = w2(r) ? O2(r) : r;
  return Mr.some((t) => e[t] ? e[t] !== "none" : !1) || (e.containerType ? e.containerType !== "normal" : !1) || !n && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !n && (e.filter ? e.filter !== "none" : !1) || yr.some((t) => (e.willChange || "").includes(t)) || wr.some((t) => (e.contain || "").includes(t));
}
function br(r) {
  let n = b0(r);
  for (; $2(n) && !l1(n); ) {
    if (T3(n))
      return n;
    if (k4(n))
      return null;
    n = b0(n);
  }
  return null;
}
function O3() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Lr = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function l1(r) {
  return Lr.has(C1(r));
}
function O2(r) {
  return P2(r).getComputedStyle(r);
}
function Z4(r) {
  return w2(r) ? {
    scrollLeft: r.scrollLeft,
    scrollTop: r.scrollTop
  } : {
    scrollLeft: r.scrollX,
    scrollTop: r.scrollY
  };
}
function b0(r) {
  if (C1(r) === "html")
    return r;
  const n = (
    // Step into the shadow DOM of the parent of a slotted node.
    r.assignedSlot || // DOM Element detected.
    r.parentNode || // ShadowRoot detected.
    g7(r) && r.host || // Fallback.
    K2(r)
  );
  return g7(n) ? n.host : n;
}
function V5(r) {
  const n = b0(r);
  return l1(n) ? r.ownerDocument ? r.ownerDocument.body : r.body : $2(n) && H1(n) ? n : V5(n);
}
function D1(r, n, e) {
  var t;
  n === void 0 && (n = []), e === void 0 && (e = !0);
  const a = V5(r), s = a === ((t = r.ownerDocument) == null ? void 0 : t.body), i = P2(a);
  if (s) {
    const o = m3(i);
    return n.concat(i, i.visualViewport || [], H1(a) ? a : [], o && e ? D1(o) : []);
  }
  return n.concat(a, D1(a, [], e));
}
function m3(r) {
  return r.parent && Object.getPrototypeOf(r.parent) ? r.frameElement : null;
}
const c1 = Math.min, I0 = Math.max, c4 = Math.round, F1 = Math.floor, q2 = (r) => ({
  x: r,
  y: r
}), _r = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, xr = {
  start: "end",
  end: "start"
};
function kr(r, n, e) {
  return I0(r, c1(n, e));
}
function D4(r, n) {
  return typeof r == "function" ? r(n) : r;
}
function d1(r) {
  return r.split("-")[0];
}
function T1(r) {
  return r.split("-")[1];
}
function Zr(r) {
  return r === "x" ? "y" : "x";
}
function E3(r) {
  return r === "y" ? "height" : "width";
}
const Dr = /* @__PURE__ */ new Set(["top", "bottom"]);
function Z0(r) {
  return Dr.has(d1(r)) ? "y" : "x";
}
function I3(r) {
  return Zr(Z0(r));
}
function Sr(r, n, e) {
  e === void 0 && (e = !1);
  const t = T1(r), a = I3(r), s = E3(a);
  let i = a === "x" ? t === (e ? "end" : "start") ? "right" : "left" : t === "start" ? "bottom" : "top";
  return n.reference[s] > n.floating[s] && (i = d4(i)), [i, d4(i)];
}
function Pr(r) {
  const n = d4(r);
  return [g3(r), n, g3(n)];
}
function g3(r) {
  return r.replace(/start|end/g, (n) => xr[n]);
}
const v7 = ["left", "right"], M7 = ["right", "left"], Hr = ["top", "bottom"], Tr = ["bottom", "top"];
function Or(r, n, e) {
  switch (r) {
    case "top":
    case "bottom":
      return e ? n ? M7 : v7 : n ? v7 : M7;
    case "left":
    case "right":
      return n ? Hr : Tr;
    default:
      return [];
  }
}
function Er(r, n, e, t) {
  const a = T1(r);
  let s = Or(d1(r), e === "start", t);
  return a && (s = s.map((i) => i + "-" + a), n && (s = s.concat(s.map(g3)))), s;
}
function d4(r) {
  return r.replace(/left|right|bottom|top/g, (n) => _r[n]);
}
function Ir(r) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...r
  };
}
function R5(r) {
  return typeof r != "number" ? Ir(r) : {
    top: r,
    right: r,
    bottom: r,
    left: r
  };
}
function u4(r) {
  const {
    x: n,
    y: e,
    width: t,
    height: a
  } = r;
  return {
    width: t,
    height: a,
    top: e,
    left: n,
    right: n + t,
    bottom: e + a,
    x: n,
    y: e
  };
}
var Nr = typeof document < "u", Fr = function() {
}, h4 = Nr ? u5 : Fr;
const Vr = {
  ...N
}, Rr = Vr.useInsertionEffect, jr = Rr || ((r) => r());
function Ar(r) {
  const n = N.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return jr(() => {
    n.current = r;
  }), N.useCallback(function() {
    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
      t[a] = arguments[a];
    return n.current == null ? void 0 : n.current(...t);
  }, []);
}
function y7(r, n, e) {
  let {
    reference: t,
    floating: a
  } = r;
  const s = Z0(n), i = I3(n), o = E3(i), l = d1(n), c = s === "y", d = t.x + t.width / 2 - a.width / 2, u = t.y + t.height / 2 - a.height / 2, C = t[o] / 2 - a[o] / 2;
  let f;
  switch (l) {
    case "top":
      f = {
        x: d,
        y: t.y - a.height
      };
      break;
    case "bottom":
      f = {
        x: d,
        y: t.y + t.height
      };
      break;
    case "right":
      f = {
        x: t.x + t.width,
        y: u
      };
      break;
    case "left":
      f = {
        x: t.x - a.width,
        y: u
      };
      break;
    default:
      f = {
        x: t.x,
        y: t.y
      };
  }
  switch (T1(n)) {
    case "start":
      f[i] -= C * (e && c ? -1 : 1);
      break;
    case "end":
      f[i] += C * (e && c ? -1 : 1);
      break;
  }
  return f;
}
const Br = async (r, n, e) => {
  const {
    placement: t = "bottom",
    strategy: a = "absolute",
    middleware: s = [],
    platform: i
  } = e, o = s.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(n));
  let c = await i.getElementRects({
    reference: r,
    floating: n,
    strategy: a
  }), {
    x: d,
    y: u
  } = y7(c, t, l), C = t, f = {}, p = 0;
  for (let v = 0; v < o.length; v++) {
    const {
      name: m,
      fn: w
    } = o[v], {
      x: y,
      y: b,
      data: D,
      reset: S
    } = await w({
      x: d,
      y: u,
      initialPlacement: t,
      placement: C,
      strategy: a,
      middlewareData: f,
      rects: c,
      platform: i,
      elements: {
        reference: r,
        floating: n
      }
    });
    d = y ?? d, u = b ?? u, f = {
      ...f,
      [m]: {
        ...f[m],
        ...D
      }
    }, S && p <= 50 && (p++, typeof S == "object" && (S.placement && (C = S.placement), S.rects && (c = S.rects === !0 ? await i.getElementRects({
      reference: r,
      floating: n,
      strategy: a
    }) : S.rects), {
      x: d,
      y: u
    } = y7(c, C, l)), v = -1);
  }
  return {
    x: d,
    y: u,
    placement: C,
    strategy: a,
    middlewareData: f
  };
};
async function Yr(r, n) {
  var e;
  n === void 0 && (n = {});
  const {
    x: t,
    y: a,
    platform: s,
    rects: i,
    elements: o,
    strategy: l
  } = r, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: C = !1,
    padding: f = 0
  } = D4(n, r), p = R5(f), m = o[C ? u === "floating" ? "reference" : "floating" : u], w = u4(await s.getClippingRect({
    element: (e = await (s.isElement == null ? void 0 : s.isElement(m))) == null || e ? m : m.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(o.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), y = u === "floating" ? {
    x: t,
    y: a,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(o.floating)), D = await (s.isElement == null ? void 0 : s.isElement(b)) ? await (s.getScale == null ? void 0 : s.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = u4(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: o,
    rect: y,
    offsetParent: b,
    strategy: l
  }) : y);
  return {
    top: (w.top - S.top + p.top) / D.y,
    bottom: (S.bottom - w.bottom + p.bottom) / D.y,
    left: (w.left - S.left + p.left) / D.x,
    right: (S.right - w.right + p.right) / D.x
  };
}
const Ur = (r) => ({
  name: "arrow",
  options: r,
  async fn(n) {
    const {
      x: e,
      y: t,
      placement: a,
      rects: s,
      platform: i,
      elements: o,
      middlewareData: l
    } = n, {
      element: c,
      padding: d = 0
    } = D4(r, n) || {};
    if (c == null)
      return {};
    const u = R5(d), C = {
      x: e,
      y: t
    }, f = I3(a), p = E3(f), v = await i.getDimensions(c), m = f === "y", w = m ? "top" : "left", y = m ? "bottom" : "right", b = m ? "clientHeight" : "clientWidth", D = s.reference[p] + s.reference[f] - C[f] - s.floating[p], S = C[f] - s.reference[f], R = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let P = R ? R[b] : 0;
    (!P || !await (i.isElement == null ? void 0 : i.isElement(R))) && (P = o.floating[b] || s.floating[p]);
    const L = D / 2 - S / 2, k = P / 2 - v[p] / 2 - 1, H = c1(u[w], k), W = c1(u[y], k), V = H, z = P - v[p] - W, q = P / 2 - v[p] / 2 + L, U = kr(V, q, z), T = !l.arrow && T1(a) != null && q !== U && s.reference[p] / 2 - (q < V ? H : W) - v[p] / 2 < 0, F = T ? q < V ? q - V : q - z : 0;
    return {
      [f]: C[f] + F,
      data: {
        [f]: U,
        centerOffset: q - U - F,
        ...T && {
          alignmentOffset: F
        }
      },
      reset: T
    };
  }
}), Wr = function(r) {
  return r === void 0 && (r = {}), {
    name: "flip",
    options: r,
    async fn(n) {
      var e, t;
      const {
        placement: a,
        middlewareData: s,
        rects: i,
        initialPlacement: o,
        platform: l,
        elements: c
      } = n, {
        mainAxis: d = !0,
        crossAxis: u = !0,
        fallbackPlacements: C,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: v = !0,
        ...m
      } = D4(r, n);
      if ((e = s.arrow) != null && e.alignmentOffset)
        return {};
      const w = d1(a), y = Z0(o), b = d1(o) === o, D = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), S = C || (b || !v ? [d4(o)] : Pr(o)), R = p !== "none";
      !C && R && S.push(...Er(o, v, p, D));
      const P = [o, ...S], L = await Yr(n, m), k = [];
      let H = ((t = s.flip) == null ? void 0 : t.overflows) || [];
      if (d && k.push(L[w]), u) {
        const q = Sr(a, i, D);
        k.push(L[q[0]], L[q[1]]);
      }
      if (H = [...H, {
        placement: a,
        overflows: k
      }], !k.every((q) => q <= 0)) {
        var W, V;
        const q = (((W = s.flip) == null ? void 0 : W.index) || 0) + 1, U = P[q];
        if (U && (!(u === "alignment" ? y !== Z0(U) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        H.every((E) => Z0(E.placement) === y ? E.overflows[0] > 0 : !0)))
          return {
            data: {
              index: q,
              overflows: H
            },
            reset: {
              placement: U
            }
          };
        let T = (V = H.filter((F) => F.overflows[0] <= 0).sort((F, E) => F.overflows[1] - E.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!T)
          switch (f) {
            case "bestFit": {
              var z;
              const F = (z = H.filter((E) => {
                if (R) {
                  const n2 = Z0(E.placement);
                  return n2 === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  n2 === "y";
                }
                return !0;
              }).map((E) => [E.placement, E.overflows.filter((n2) => n2 > 0).reduce((n2, x2) => n2 + x2, 0)]).sort((E, n2) => E[1] - n2[1])[0]) == null ? void 0 : z[0];
              F && (T = F);
              break;
            }
            case "initialPlacement":
              T = o;
              break;
          }
        if (a !== T)
          return {
            reset: {
              placement: T
            }
          };
      }
      return {};
    }
  };
}, zr = /* @__PURE__ */ new Set(["left", "top"]);
async function qr(r, n) {
  const {
    placement: e,
    platform: t,
    elements: a
  } = r, s = await (t.isRTL == null ? void 0 : t.isRTL(a.floating)), i = d1(e), o = T1(e), l = Z0(e) === "y", c = zr.has(i) ? -1 : 1, d = s && l ? -1 : 1, u = D4(n, r);
  let {
    mainAxis: C,
    crossAxis: f,
    alignmentAxis: p
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return o && typeof p == "number" && (f = o === "end" ? p * -1 : p), l ? {
    x: f * d,
    y: C * c
  } : {
    x: C * c,
    y: f * d
  };
}
const $r = function(r) {
  return r === void 0 && (r = 0), {
    name: "offset",
    options: r,
    async fn(n) {
      var e, t;
      const {
        x: a,
        y: s,
        placement: i,
        middlewareData: o
      } = n, l = await qr(n, r);
      return i === ((e = o.offset) == null ? void 0 : e.placement) && (t = o.arrow) != null && t.alignmentOffset ? {} : {
        x: a + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
};
function j5(r) {
  const n = O2(r);
  let e = parseFloat(n.width) || 0, t = parseFloat(n.height) || 0;
  const a = $2(r), s = a ? r.offsetWidth : e, i = a ? r.offsetHeight : t, o = c4(e) !== s || c4(t) !== i;
  return o && (e = s, t = i), {
    width: e,
    height: t,
    $: o
  };
}
function N3(r) {
  return w2(r) ? r : r.contextElement;
}
function t1(r) {
  const n = N3(r);
  if (!$2(n))
    return q2(1);
  const e = n.getBoundingClientRect(), {
    width: t,
    height: a,
    $: s
  } = j5(n);
  let i = (s ? c4(e.width) : e.width) / t, o = (s ? c4(e.height) : e.height) / a;
  return (!i || !Number.isFinite(i)) && (i = 1), (!o || !Number.isFinite(o)) && (o = 1), {
    x: i,
    y: o
  };
}
const Gr = /* @__PURE__ */ q2(0);
function A5(r) {
  const n = P2(r);
  return !O3() || !n.visualViewport ? Gr : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function Kr(r, n, e) {
  return n === void 0 && (n = !1), !e || n && e !== P2(r) ? !1 : n;
}
function F0(r, n, e, t) {
  n === void 0 && (n = !1), e === void 0 && (e = !1);
  const a = r.getBoundingClientRect(), s = N3(r);
  let i = q2(1);
  n && (t ? w2(t) && (i = t1(t)) : i = t1(r));
  const o = Kr(s, e, t) ? A5(s) : q2(0);
  let l = (a.left + o.x) / i.x, c = (a.top + o.y) / i.y, d = a.width / i.x, u = a.height / i.y;
  if (s) {
    const C = P2(s), f = t && w2(t) ? P2(t) : t;
    let p = C, v = m3(p);
    for (; v && t && f !== p; ) {
      const m = t1(v), w = v.getBoundingClientRect(), y = O2(v), b = w.left + (v.clientLeft + parseFloat(y.paddingLeft)) * m.x, D = w.top + (v.clientTop + parseFloat(y.paddingTop)) * m.y;
      l *= m.x, c *= m.y, d *= m.x, u *= m.y, l += b, c += D, p = P2(v), v = m3(p);
    }
  }
  return u4({
    width: d,
    height: u,
    x: l,
    y: c
  });
}
function S4(r, n) {
  const e = Z4(r).scrollLeft;
  return n ? n.left + e : F0(K2(r)).left + e;
}
function B5(r, n) {
  const e = r.getBoundingClientRect(), t = e.left + n.scrollLeft - S4(r, e), a = e.top + n.scrollTop;
  return {
    x: t,
    y: a
  };
}
function Qr(r) {
  let {
    elements: n,
    rect: e,
    offsetParent: t,
    strategy: a
  } = r;
  const s = a === "fixed", i = K2(t), o = n ? k4(n.floating) : !1;
  if (t === i || o && s)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = q2(1);
  const d = q2(0), u = $2(t);
  if ((u || !u && !s) && ((C1(t) !== "body" || H1(i)) && (l = Z4(t)), $2(t))) {
    const f = F0(t);
    c = t1(t), d.x = f.x + t.clientLeft, d.y = f.y + t.clientTop;
  }
  const C = i && !u && !s ? B5(i, l) : q2(0);
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + d.x + C.x,
    y: e.y * c.y - l.scrollTop * c.y + d.y + C.y
  };
}
function Xr(r) {
  return Array.from(r.getClientRects());
}
function Jr(r) {
  const n = K2(r), e = Z4(r), t = r.ownerDocument.body, a = I0(n.scrollWidth, n.clientWidth, t.scrollWidth, t.clientWidth), s = I0(n.scrollHeight, n.clientHeight, t.scrollHeight, t.clientHeight);
  let i = -e.scrollLeft + S4(r);
  const o = -e.scrollTop;
  return O2(t).direction === "rtl" && (i += I0(n.clientWidth, t.clientWidth) - a), {
    width: a,
    height: s,
    x: i,
    y: o
  };
}
const w7 = 25;
function ea(r, n) {
  const e = P2(r), t = K2(r), a = e.visualViewport;
  let s = t.clientWidth, i = t.clientHeight, o = 0, l = 0;
  if (a) {
    s = a.width, i = a.height;
    const d = O3();
    (!d || d && n === "fixed") && (o = a.offsetLeft, l = a.offsetTop);
  }
  const c = S4(t);
  if (c <= 0) {
    const d = t.ownerDocument, u = d.body, C = getComputedStyle(u), f = d.compatMode === "CSS1Compat" && parseFloat(C.marginLeft) + parseFloat(C.marginRight) || 0, p = Math.abs(t.clientWidth - u.clientWidth - f);
    p <= w7 && (s -= p);
  } else c <= w7 && (s += c);
  return {
    width: s,
    height: i,
    x: o,
    y: l
  };
}
const ta = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function na(r, n) {
  const e = F0(r, !0, n === "fixed"), t = e.top + r.clientTop, a = e.left + r.clientLeft, s = $2(r) ? t1(r) : q2(1), i = r.clientWidth * s.x, o = r.clientHeight * s.y, l = a * s.x, c = t * s.y;
  return {
    width: i,
    height: o,
    x: l,
    y: c
  };
}
function b7(r, n, e) {
  let t;
  if (n === "viewport")
    t = ea(r, e);
  else if (n === "document")
    t = Jr(K2(r));
  else if (w2(n))
    t = na(n, e);
  else {
    const a = A5(r);
    t = {
      x: n.x - a.x,
      y: n.y - a.y,
      width: n.width,
      height: n.height
    };
  }
  return u4(t);
}
function Y5(r, n) {
  const e = b0(r);
  return e === n || !w2(e) || l1(e) ? !1 : O2(e).position === "fixed" || Y5(e, n);
}
function ra(r, n) {
  const e = n.get(r);
  if (e)
    return e;
  let t = D1(r, [], !1).filter((o) => w2(o) && C1(o) !== "body"), a = null;
  const s = O2(r).position === "fixed";
  let i = s ? b0(r) : r;
  for (; w2(i) && !l1(i); ) {
    const o = O2(i), l = T3(i);
    !l && o.position === "fixed" && (a = null), (s ? !l && !a : !l && o.position === "static" && !!a && ta.has(a.position) || H1(i) && !l && Y5(r, i)) ? t = t.filter((d) => d !== i) : a = o, i = b0(i);
  }
  return n.set(r, t), t;
}
function aa(r) {
  let {
    element: n,
    boundary: e,
    rootBoundary: t,
    strategy: a
  } = r;
  const i = [...e === "clippingAncestors" ? k4(n) ? [] : ra(n, this._c) : [].concat(e), t], o = i[0], l = i.reduce((c, d) => {
    const u = b7(n, d, a);
    return c.top = I0(u.top, c.top), c.right = c1(u.right, c.right), c.bottom = c1(u.bottom, c.bottom), c.left = I0(u.left, c.left), c;
  }, b7(n, o, a));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function sa(r) {
  const {
    width: n,
    height: e
  } = j5(r);
  return {
    width: n,
    height: e
  };
}
function ia(r, n, e) {
  const t = $2(n), a = K2(n), s = e === "fixed", i = F0(r, !0, s, n);
  let o = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = q2(0);
  function c() {
    l.x = S4(a);
  }
  if (t || !t && !s)
    if ((C1(n) !== "body" || H1(a)) && (o = Z4(n)), t) {
      const f = F0(n, !0, s, n);
      l.x = f.x + n.clientLeft, l.y = f.y + n.clientTop;
    } else a && c();
  s && !t && a && c();
  const d = a && !t && !s ? B5(a, o) : q2(0), u = i.left + o.scrollLeft - l.x - d.x, C = i.top + o.scrollTop - l.y - d.y;
  return {
    x: u,
    y: C,
    width: i.width,
    height: i.height
  };
}
function B4(r) {
  return O2(r).position === "static";
}
function L7(r, n) {
  if (!$2(r) || O2(r).position === "fixed")
    return null;
  if (n)
    return n(r);
  let e = r.offsetParent;
  return K2(r) === e && (e = e.ownerDocument.body), e;
}
function U5(r, n) {
  const e = P2(r);
  if (k4(r))
    return e;
  if (!$2(r)) {
    let a = b0(r);
    for (; a && !l1(a); ) {
      if (w2(a) && !B4(a))
        return a;
      a = b0(a);
    }
    return e;
  }
  let t = L7(r, n);
  for (; t && gr(t) && B4(t); )
    t = L7(t, n);
  return t && l1(t) && B4(t) && !T3(t) ? e : t || br(r) || e;
}
const oa = async function(r) {
  const n = this.getOffsetParent || U5, e = this.getDimensions, t = await e(r.floating);
  return {
    reference: ia(r.reference, await n(r.floating), r.strategy),
    floating: {
      x: 0,
      y: 0,
      width: t.width,
      height: t.height
    }
  };
};
function la(r) {
  return O2(r).direction === "rtl";
}
const ca = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Qr,
  getDocumentElement: K2,
  getClippingRect: aa,
  getOffsetParent: U5,
  getElementRects: oa,
  getClientRects: Xr,
  getDimensions: sa,
  getScale: t1,
  isElement: w2,
  isRTL: la
};
function W5(r, n) {
  return r.x === n.x && r.y === n.y && r.width === n.width && r.height === n.height;
}
function da(r, n) {
  let e = null, t;
  const a = K2(r);
  function s() {
    var o;
    clearTimeout(t), (o = e) == null || o.disconnect(), e = null;
  }
  function i(o, l) {
    o === void 0 && (o = !1), l === void 0 && (l = 1), s();
    const c = r.getBoundingClientRect(), {
      left: d,
      top: u,
      width: C,
      height: f
    } = c;
    if (o || n(), !C || !f)
      return;
    const p = F1(u), v = F1(a.clientWidth - (d + C)), m = F1(a.clientHeight - (u + f)), w = F1(d), b = {
      rootMargin: -p + "px " + -v + "px " + -m + "px " + -w + "px",
      threshold: I0(0, c1(1, l)) || 1
    };
    let D = !0;
    function S(R) {
      const P = R[0].intersectionRatio;
      if (P !== l) {
        if (!D)
          return i();
        P ? i(!1, P) : t = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      P === 1 && !W5(c, r.getBoundingClientRect()) && i(), D = !1;
    }
    try {
      e = new IntersectionObserver(S, {
        ...b,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      e = new IntersectionObserver(S, b);
    }
    e.observe(r);
  }
  return i(!0), s;
}
function ua(r, n, e, t) {
  t === void 0 && (t = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: o = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = t, c = N3(r), d = a || s ? [...c ? D1(c) : [], ...D1(n)] : [];
  d.forEach((w) => {
    a && w.addEventListener("scroll", e, {
      passive: !0
    }), s && w.addEventListener("resize", e);
  });
  const u = c && o ? da(c, e) : null;
  let C = -1, f = null;
  i && (f = new ResizeObserver((w) => {
    let [y] = w;
    y && y.target === c && f && (f.unobserve(n), cancelAnimationFrame(C), C = requestAnimationFrame(() => {
      var b;
      (b = f) == null || b.observe(n);
    })), e();
  }), c && !l && f.observe(c), f.observe(n));
  let p, v = l ? F0(r) : null;
  l && m();
  function m() {
    const w = F0(r);
    v && !W5(v, w) && e(), v = w, p = requestAnimationFrame(m);
  }
  return e(), () => {
    var w;
    d.forEach((y) => {
      a && y.removeEventListener("scroll", e), s && y.removeEventListener("resize", e);
    }), u == null || u(), (w = f) == null || w.disconnect(), f = null, l && cancelAnimationFrame(p);
  };
}
const ha = $r, Ca = Wr, _7 = Ur, fa = (r, n, e) => {
  const t = /* @__PURE__ */ new Map(), a = {
    platform: ca,
    ...e
  }, s = {
    ...a.platform,
    _c: t
  };
  return Br(r, n, {
    ...a,
    platform: s
  });
};
var pa = typeof document < "u", ma = function() {
}, G1 = pa ? u5 : ma;
function C4(r, n) {
  if (r === n)
    return !0;
  if (typeof r != typeof n)
    return !1;
  if (typeof r == "function" && r.toString() === n.toString())
    return !0;
  let e, t, a;
  if (r && n && typeof r == "object") {
    if (Array.isArray(r)) {
      if (e = r.length, e !== n.length) return !1;
      for (t = e; t-- !== 0; )
        if (!C4(r[t], n[t]))
          return !1;
      return !0;
    }
    if (a = Object.keys(r), e = a.length, e !== Object.keys(n).length)
      return !1;
    for (t = e; t-- !== 0; )
      if (!{}.hasOwnProperty.call(n, a[t]))
        return !1;
    for (t = e; t-- !== 0; ) {
      const s = a[t];
      if (!(s === "_owner" && r.$$typeof) && !C4(r[s], n[s]))
        return !1;
    }
    return !0;
  }
  return r !== r && n !== n;
}
function z5(r) {
  return typeof window > "u" ? 1 : (r.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function x7(r, n) {
  const e = z5(r);
  return Math.round(n * e) / e;
}
function Y4(r) {
  const n = N.useRef(r);
  return G1(() => {
    n.current = r;
  }), n;
}
function ga(r) {
  r === void 0 && (r = {});
  const {
    placement: n = "bottom",
    strategy: e = "absolute",
    middleware: t = [],
    platform: a,
    elements: {
      reference: s,
      floating: i
    } = {},
    transform: o = !0,
    whileElementsMounted: l,
    open: c
  } = r, [d, u] = N.useState({
    x: 0,
    y: 0,
    strategy: e,
    placement: n,
    middlewareData: {},
    isPositioned: !1
  }), [C, f] = N.useState(t);
  C4(C, t) || f(t);
  const [p, v] = N.useState(null), [m, w] = N.useState(null), y = N.useCallback((E) => {
    E !== R.current && (R.current = E, v(E));
  }, []), b = N.useCallback((E) => {
    E !== P.current && (P.current = E, w(E));
  }, []), D = s || p, S = i || m, R = N.useRef(null), P = N.useRef(null), L = N.useRef(d), k = l != null, H = Y4(l), W = Y4(a), V = Y4(c), z = N.useCallback(() => {
    if (!R.current || !P.current)
      return;
    const E = {
      placement: n,
      strategy: e,
      middleware: C
    };
    W.current && (E.platform = W.current), fa(R.current, P.current, E).then((n2) => {
      const x2 = {
        ...n2,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: V.current !== !1
      };
      q.current && !C4(L.current, x2) && (L.current = x2, E8.flushSync(() => {
        u(x2);
      }));
    });
  }, [C, n, e, W, V]);
  G1(() => {
    c === !1 && L.current.isPositioned && (L.current.isPositioned = !1, u((E) => ({
      ...E,
      isPositioned: !1
    })));
  }, [c]);
  const q = N.useRef(!1);
  G1(() => (q.current = !0, () => {
    q.current = !1;
  }), []), G1(() => {
    if (D && (R.current = D), S && (P.current = S), D && S) {
      if (H.current)
        return H.current(D, S, z);
      z();
    }
  }, [D, S, z, H, k]);
  const U = N.useMemo(() => ({
    reference: R,
    floating: P,
    setReference: y,
    setFloating: b
  }), [y, b]), T = N.useMemo(() => ({
    reference: D,
    floating: S
  }), [D, S]), F = N.useMemo(() => {
    const E = {
      position: e,
      left: 0,
      top: 0
    };
    if (!T.floating)
      return E;
    const n2 = x7(T.floating, d.x), x2 = x7(T.floating, d.y);
    return o ? {
      ...E,
      transform: "translate(" + n2 + "px, " + x2 + "px)",
      ...z5(T.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: e,
      left: n2,
      top: x2
    };
  }, [e, o, T.floating, d.x, d.y]);
  return N.useMemo(() => ({
    ...d,
    update: z,
    refs: U,
    elements: T,
    floatingStyles: F
  }), [d, z, U, T, F]);
}
const va = (r) => {
  function n(e) {
    return {}.hasOwnProperty.call(e, "current");
  }
  return {
    name: "arrow",
    options: r,
    fn(e) {
      const {
        element: t,
        padding: a
      } = typeof r == "function" ? r(e) : r;
      return t && n(t) ? t.current != null ? _7({
        element: t.current,
        padding: a
      }).fn(e) : {} : t ? _7({
        element: t,
        padding: a
      }).fn(e) : {};
    }
  };
}, Ma = (r, n) => ({
  ...ha(r),
  options: [r, n]
}), ya = (r, n) => ({
  ...Ca(r),
  options: [r, n]
}), wa = (r, n) => ({
  ...va(r),
  options: [r, n]
}), ba = {
  ...N
};
let k7 = !1, La = 0;
const Z7 = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + La++
);
function _a() {
  const [r, n] = N.useState(() => k7 ? Z7() : void 0);
  return h4(() => {
    r == null && n(Z7());
  }, []), N.useEffect(() => {
    k7 = !0;
  }, []), r;
}
const xa = ba.useId, q5 = xa || _a;
let S1;
process.env.NODE_ENV !== "production" && (S1 = /* @__PURE__ */ new Set());
function ka() {
  for (var r, n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  const a = "Floating UI: " + e.join(" ");
  if (!((r = S1) != null && r.has(a))) {
    var s;
    (s = S1) == null || s.add(a), console.warn(a);
  }
}
function Za() {
  for (var r, n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  const a = "Floating UI: " + e.join(" ");
  if (!((r = S1) != null && r.has(a))) {
    var s;
    (s = S1) == null || s.add(a), console.error(a);
  }
}
const Da = /* @__PURE__ */ N.forwardRef(function(n, e) {
  const {
    context: {
      placement: t,
      elements: {
        floating: a
      },
      middlewareData: {
        arrow: s,
        shift: i
      }
    },
    width: o = 14,
    height: l = 7,
    tipRadius: c = 0,
    strokeWidth: d = 0,
    staticOffset: u,
    stroke: C,
    d: f,
    style: {
      transform: p,
      ...v
    } = {},
    ...m
  } = n;
  process.env.NODE_ENV !== "production" && (e || ka("The `ref` prop is required for `FloatingArrow`."));
  const w = q5(), [y, b] = N.useState(!1);
  if (h4(() => {
    if (!a) return;
    O2(a).direction === "rtl" && b(!0);
  }, [a]), !a)
    return null;
  const [D, S] = t.split("-"), R = D === "top" || D === "bottom";
  let P = u;
  (R && i != null && i.x || !R && i != null && i.y) && (P = null);
  const L = d * 2, k = L / 2, H = o / 2 * (c / -8 + 1), W = l / 2 * c / 4, V = !!f, z = P && S === "end" ? "bottom" : "top";
  let q = P && S === "end" ? "right" : "left";
  P && y && (q = S === "end" ? "left" : "right");
  const U = (s == null ? void 0 : s.x) != null ? P || s.x : "", T = (s == null ? void 0 : s.y) != null ? P || s.y : "", F = f || "M0,0" + (" H" + o) + (" L" + (o - H) + "," + (l - W)) + (" Q" + o / 2 + "," + l + " " + H + "," + (l - W)) + " Z", E = {
    top: V ? "rotate(180deg)" : "",
    left: V ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: V ? "" : "rotate(180deg)",
    right: V ? "rotate(-90deg)" : "rotate(90deg)"
  }[D];
  return /* @__PURE__ */ h.jsxs("svg", {
    ...m,
    "aria-hidden": !0,
    ref: e,
    width: V ? o : o + L,
    height: o,
    viewBox: "0 0 " + o + " " + (l > o ? l : o),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [q]: U,
      [z]: T,
      [D]: R || V ? "100%" : "calc(100% - " + L / 2 + "px)",
      transform: [E, p].filter((n2) => !!n2).join(" "),
      ...v
    },
    children: [L > 0 && /* @__PURE__ */ h.jsx("path", {
      clipPath: "url(#" + w + ")",
      fill: "none",
      stroke: C,
      strokeWidth: L + (f ? 0 : 1),
      d: F
    }), /* @__PURE__ */ h.jsx("path", {
      stroke: L && !f ? m.fill : "none",
      d: F
    }), /* @__PURE__ */ h.jsx("clipPath", {
      id: w,
      children: /* @__PURE__ */ h.jsx("rect", {
        x: -k,
        y: k * (V ? -1 : 1),
        width: o + L,
        height: o
      })
    })]
  });
});
function Sa() {
  const r = /* @__PURE__ */ new Map();
  return {
    emit(n, e) {
      var t;
      (t = r.get(n)) == null || t.forEach((a) => a(e));
    },
    on(n, e) {
      r.has(n) || r.set(n, /* @__PURE__ */ new Set()), r.get(n).add(e);
    },
    off(n, e) {
      var t;
      (t = r.get(n)) == null || t.delete(e);
    }
  };
}
const Pa = /* @__PURE__ */ N.createContext(null), Ha = /* @__PURE__ */ N.createContext(null), Ta = () => {
  var r;
  return ((r = N.useContext(Pa)) == null ? void 0 : r.id) || null;
}, Oa = () => N.useContext(Ha);
function Ea(r) {
  const {
    open: n = !1,
    onOpenChange: e,
    elements: t
  } = r, a = q5(), s = N.useRef({}), [i] = N.useState(() => Sa()), o = Ta() != null;
  if (process.env.NODE_ENV !== "production") {
    const f = t.reference;
    f && !w2(f) && Za("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [l, c] = N.useState(t.reference), d = Ar((f, p, v) => {
    s.current.openEvent = f ? p : void 0, i.emit("openchange", {
      open: f,
      event: p,
      reason: v,
      nested: o
    }), e == null || e(f, p, v);
  }), u = N.useMemo(() => ({
    setPositionReference: c
  }), []), C = N.useMemo(() => ({
    reference: l || t.reference || null,
    floating: t.floating || null,
    domReference: t.reference
  }), [l, t.reference, t.floating]);
  return N.useMemo(() => ({
    dataRef: s,
    open: n,
    onOpenChange: d,
    elements: C,
    events: i,
    floatingId: a,
    refs: u
  }), [n, d, C, i, a, u]);
}
function Ia(r) {
  r === void 0 && (r = {});
  const {
    nodeId: n
  } = r, e = Ea({
    ...r,
    elements: {
      reference: null,
      floating: null,
      ...r.elements
    }
  }), t = r.rootContext || e, a = t.elements, [s, i] = N.useState(null), [o, l] = N.useState(null), d = (a == null ? void 0 : a.domReference) || s, u = N.useRef(null), C = Oa();
  h4(() => {
    d && (u.current = d);
  }, [d]);
  const f = ga({
    ...r,
    elements: {
      ...a,
      ...o && {
        reference: o
      }
    }
  }), p = N.useCallback((b) => {
    const D = w2(b) ? {
      getBoundingClientRect: () => b.getBoundingClientRect(),
      getClientRects: () => b.getClientRects(),
      contextElement: b
    } : b;
    l(D), f.refs.setReference(D);
  }, [f.refs]), v = N.useCallback((b) => {
    (w2(b) || b === null) && (u.current = b, i(b)), (w2(f.refs.reference.current) || f.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    b !== null && !w2(b)) && f.refs.setReference(b);
  }, [f.refs]), m = N.useMemo(() => ({
    ...f.refs,
    setReference: v,
    setPositionReference: p,
    domReference: u
  }), [f.refs, v, p]), w = N.useMemo(() => ({
    ...f.elements,
    domReference: d
  }), [f.elements, d]), y = N.useMemo(() => ({
    ...f,
    ...t,
    refs: m,
    elements: w,
    nodeId: n
  }), [f, m, w, n, t]);
  return h4(() => {
    t.dataRef.current.floatingContext = y;
    const b = C == null ? void 0 : C.nodesRef.current.find((D) => D.id === n);
    b && (b.context = y);
  }), N.useMemo(() => ({
    ...f,
    context: y,
    refs: m,
    elements: w
  }), [f, m, w, y]);
}
/*!
  react-datepicker v8.8.0
  https://github.com/Hacker0x01/react-datepicker
  Released under the MIT License.
*/
var v3 = function(n, e) {
  return v3 = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(t, a) {
    t.__proto__ = a;
  } || function(t, a) {
    for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (t[s] = a[s]);
  }, v3(n, e);
};
function M2(r, n) {
  if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
  v3(r, n);
  function e() {
    this.constructor = r;
  }
  r.prototype = n === null ? Object.create(n) : (e.prototype = n.prototype, new e());
}
var Y = function() {
  return Y = Object.assign || function(e) {
    for (var t, a = 1, s = arguments.length; a < s; a++) {
      t = arguments[a];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Y.apply(this, arguments);
};
function W2(r, n, e) {
  if (e || arguments.length === 2) for (var t = 0, a = n.length, s; t < a; t++)
    (s || !(t in n)) && (s || (s = Array.prototype.slice.call(n, 0, t)), s[t] = n[t]);
  return r.concat(s || Array.prototype.slice.call(n));
}
var Na = function(r) {
  var n = r.showTimeSelectOnly, e = n === void 0 ? !1 : n, t = r.showTime, a = t === void 0 ? !1 : t, s = r.className, i = r.children, o = e ? "Choose Time" : "Choose Date".concat(a ? " and Time" : "");
  return g.createElement("div", { className: s, role: "dialog", "aria-label": o, "aria-modal": "true" }, i);
}, Fa = function(r, n) {
  var e = k1(null), t = k1(r);
  t.current = r;
  var a = c3(function(s) {
    var i, o = s.composed && s.composedPath && s.composedPath().find(function(l) {
      return l instanceof Node;
    }) || s.target;
    e.current && !e.current.contains(o) && (n && o instanceof HTMLElement && o.classList.contains(n) || (i = t.current) === null || i === void 0 || i.call(t, s));
  }, [n]);
  return d5(function() {
    return document.addEventListener("mousedown", a), function() {
      document.removeEventListener("mousedown", a);
    };
  }, [a]), e;
}, P4 = function(r) {
  var n = r.children, e = r.onClickOutside, t = r.className, a = r.containerRef, s = r.style, i = r.ignoreClass, o = Fa(e, i);
  return g.createElement("div", { className: t, style: s, ref: function(l) {
    o.current = l, a && (a.current = l);
  } }, n);
}, _;
(function(r) {
  r.ArrowUp = "ArrowUp", r.ArrowDown = "ArrowDown", r.ArrowLeft = "ArrowLeft", r.ArrowRight = "ArrowRight", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Home = "Home", r.End = "End", r.Enter = "Enter", r.Space = " ", r.Tab = "Tab", r.Escape = "Escape", r.Backspace = "Backspace", r.X = "x";
})(_ || (_ = {}));
function F3() {
  var r = typeof window < "u" ? window : globalThis;
  return r;
}
var O1 = 12;
function K(r) {
  if (r == null)
    return /* @__PURE__ */ new Date();
  var n = typeof r == "string" ? Jn(r) : Z(r);
  return H4(n) ? n : /* @__PURE__ */ new Date();
}
function U4(r, n, e, t, a) {
  a === void 0 && (a = K());
  for (var s = u1(e) || u1(V3()), i = Array.isArray(n) ? n : [n], o = 0, l = i; o < l.length; o++) {
    var c = l[o], d = qn(r, c, a, {
      locale: s
    });
    if (H4(d) && (!t || r === J(d, c, e)))
      return d;
  }
  return null;
}
function H4(r, n) {
  return a4(r) && !U2(r, /* @__PURE__ */ new Date("1/1/1800"));
}
function J(r, n, e) {
  if (e === "en")
    return f7(r, n, {
      useAdditionalWeekYearTokens: !0,
      useAdditionalDayOfYearTokens: !0
    });
  var t = e ? u1(e) : void 0;
  return e && !t && console.warn('A locale object was not found for the provided string ["'.concat(e, '"].')), t = t || u1(V3()), f7(r, n, {
    locale: t,
    useAdditionalWeekYearTokens: !0,
    useAdditionalDayOfYearTokens: !0
  });
}
function Z2(r, n) {
  var e = n.dateFormat, t = n.locale, a = Array.isArray(e) && e.length > 0 ? e[0] : e;
  return r && J(r, a, t) || "";
}
var $5 = " - ";
function Va(r, n, e) {
  if (!r && !n)
    return "";
  var t = r ? Z2(r, e) : "", a = n ? Z2(n, e) : "", s = e.rangeSeparator || $5;
  return "".concat(t).concat(s).concat(a);
}
function Ra(r, n) {
  if (!(r != null && r.length))
    return "";
  var e = r[0] ? Z2(r[0], n) : "";
  if (r.length === 1)
    return e;
  if (r.length === 2 && r[1]) {
    var t = Z2(r[1], n);
    return "".concat(e, ", ").concat(t);
  }
  var a = r.length - 1;
  return "".concat(e, " (+").concat(a, ")");
}
function W4(r, n) {
  var e = n.hour, t = e === void 0 ? 0 : e, a = n.minute, s = a === void 0 ? 0 : a, i = n.second, o = i === void 0 ? 0 : i;
  return z1(q1($1(r, o), s), t);
}
function ja(r) {
  return D3(r);
}
function Aa(r, n) {
  return J(r, "ddd", n);
}
function K1(r) {
  return N0(r);
}
function m0(r, n, e) {
  var t = u1(n || V3());
  return s0(r, {
    locale: t,
    weekStartsOn: e
  });
}
function a0(r) {
  return x5(r);
}
function _1(r) {
  return _4(r);
}
function D7(r) {
  return C3(r);
}
function S7() {
  return N0(K());
}
function P7(r) {
  return L5(r);
}
function Ba(r) {
  return J9(r);
}
function Ya(r) {
  return _5(r);
}
function R2(r, n) {
  return r && n ? Qn(r, n) : !r && !n;
}
function _2(r, n) {
  return r && n ? Gn(r, n) : !r && !n;
}
function f4(r, n) {
  return r && n ? Kn(r, n) : !r && !n;
}
function B(r, n) {
  return r && n ? Q9(r, n) : !r && !n;
}
function D0(r, n) {
  return r && n ? Qt(r, n) : !r && !n;
}
function k0(r, n, e) {
  var t, a = N0(n), s = L5(e);
  try {
    t = Z1(r, { start: a, end: s });
  } catch {
    t = !1;
  }
  return t;
}
function G5(r, n) {
  var e = F3();
  e.__localeData__ || (e.__localeData__ = {}), e.__localeData__[r] = n;
}
function V3() {
  var r = F3();
  return r.__localeId__;
}
function u1(r) {
  if (typeof r == "string") {
    var n = F3();
    return n.__localeData__ ? n.__localeData__[r] : void 0;
  } else
    return r;
}
function Ua(r, n, e) {
  return n(J(r, "EEEE", e));
}
function Wa(r, n) {
  return J(r, "EEEEEE", n);
}
function za(r, n) {
  return J(r, "EEE", n);
}
function R3(r, n) {
  return J(D2(K(), r), "LLLL", n);
}
function K5(r, n) {
  return J(D2(K(), r), "LLL", n);
}
function qa(r, n) {
  return J(Q0(K(), r), "QQQ", n);
}
function T2(r, n) {
  var e = n === void 0 ? {} : n, t = e.minDate, a = e.maxDate, s = e.excludeDates, i = e.excludeDateIntervals, o = e.includeDates, l = e.includeDateIntervals, c = e.filterDate, d = e.disabled;
  return d ? !0 : E1(r, { minDate: t, maxDate: a }) || s && s.some(function(u) {
    return u instanceof Date ? B(r, u) : B(r, u.date);
  }) || i && i.some(function(u) {
    var C = u.start, f = u.end;
    return Z1(r, { start: C, end: f });
  }) || o && !o.some(function(u) {
    return B(r, u);
  }) || l && !l.some(function(u) {
    var C = u.start, f = u.end;
    return Z1(r, { start: C, end: f });
  }) || c && !c(K(r)) || !1;
}
function j3(r, n) {
  var e = n === void 0 ? {} : n, t = e.excludeDates, a = e.excludeDateIntervals;
  return a && a.length > 0 ? a.some(function(s) {
    var i = s.start, o = s.end;
    return Z1(r, { start: i, end: o });
  }) : t && t.some(function(s) {
    var i;
    return s instanceof Date ? B(r, s) : B(r, (i = s.date) !== null && i !== void 0 ? i : /* @__PURE__ */ new Date());
  }) || !1;
}
function Q5(r, n) {
  var e = n === void 0 ? {} : n, t = e.minDate, a = e.maxDate, s = e.excludeDates, i = e.includeDates, o = e.filterDate;
  return E1(r, {
    minDate: t ? x5(t) : void 0,
    maxDate: a ? _5(a) : void 0
  }) || (s == null ? void 0 : s.some(function(l) {
    return _2(r, l instanceof Date ? l : l.date);
  })) || i && !i.some(function(l) {
    return _2(r, l);
  }) || o && !o(K(r)) || !1;
}
function V1(r, n, e, t) {
  var a = j(r), s = y2(r), i = j(n), o = y2(n), l = j(t);
  return a === i && a === l ? s <= e && e <= o : a < i ? l === a && s <= e || l === i && o >= e || l < i && l > a : !1;
}
function $a(r, n) {
  var e = n === void 0 ? {} : n, t = e.minDate, a = e.maxDate, s = e.excludeDates, i = e.includeDates;
  return E1(r, { minDate: t, maxDate: a }) || s && s.some(function(o) {
    return _2(o instanceof Date ? o : o.date, r);
  }) || i && !i.some(function(o) {
    return _2(o, r);
  }) || !1;
}
function R1(r, n) {
  var e = n === void 0 ? {} : n, t = e.minDate, a = e.maxDate, s = e.excludeDates, i = e.includeDates, o = e.filterDate, l = e.disabled;
  return l ? !0 : E1(r, { minDate: t, maxDate: a }) || (s == null ? void 0 : s.some(function(c) {
    return f4(r, c instanceof Date ? c : c.date);
  })) || i && !i.some(function(c) {
    return f4(r, c);
  }) || o && !o(K(r)) || !1;
}
function j1(r, n, e) {
  if (!n || !e || !a4(n) || !a4(e))
    return !1;
  var t = j(n), a = j(e);
  return t <= r && a >= r;
}
function Q1(r, n) {
  var e = n === void 0 ? {} : n, t = e.minDate, a = e.maxDate, s = e.excludeDates, i = e.includeDates, o = e.filterDate, l = e.disabled;
  if (l)
    return !0;
  var c = new Date(r, 0, 1);
  return E1(c, {
    minDate: t ? _4(t) : void 0,
    maxDate: a ? k5(a) : void 0
  }) || (s == null ? void 0 : s.some(function(d) {
    return R2(c, d instanceof Date ? d : d.date);
  })) || i && !i.some(function(d) {
    return R2(c, d);
  }) || o && !o(K(c)) || !1;
}
function A1(r, n, e, t) {
  var a = j(r), s = O0(r), i = j(n), o = O0(n), l = j(t);
  return a === i && a === l ? s <= e && e <= o : a < i ? l === a && s <= e || l === i && o >= e || l < i && l > a : !1;
}
function E1(r, n) {
  var e, t = n === void 0 ? {} : n, a = t.minDate, s = t.maxDate;
  return (e = a && i1(r, a) < 0 || s && i1(r, s) > 0) !== null && e !== void 0 ? e : !1;
}
function H7(r, n) {
  return n.some(function(e) {
    return n0(e) === n0(r) && r0(e) === r0(r) && p0(e) === p0(r);
  });
}
function T7(r, n) {
  var e = n === void 0 ? {} : n, t = e.excludeTimes, a = e.includeTimes, s = e.filterTime;
  return t && H7(r, t) || a && !H7(r, a) || s && !s(r) || !1;
}
function O7(r, n) {
  var e = n.minTime, t = n.maxTime;
  if (!e || !t)
    throw new Error("Both minTime and maxTime props required");
  var a = K();
  a = z1(a, n0(r)), a = q1(a, r0(r)), a = $1(a, p0(r));
  var s = K();
  s = z1(s, n0(e)), s = q1(s, r0(e)), s = $1(s, p0(e));
  var i = K();
  i = z1(i, n0(t)), i = q1(i, r0(t)), i = $1(i, p0(t));
  var o;
  try {
    o = !Z1(a, { start: s, end: i });
  } catch {
    o = !1;
  }
  return o;
}
function E7(r, n) {
  var e = n === void 0 ? {} : n, t = e.minDate, a = e.includeDates, s = E0(r, 1);
  return t && s4(t, s) > 0 || a && a.every(function(i) {
    return s4(i, s) > 0;
  }) || !1;
}
function I7(r, n) {
  var e = n === void 0 ? {} : n, t = e.maxDate, a = e.includeDates, s = N2(r, 1);
  return t && s4(s, t) > 0 || a && a.every(function(i) {
    return s4(s, i) > 0;
  }) || !1;
}
function Ga(r, n) {
  var e = n === void 0 ? {} : n, t = e.minDate, a = e.includeDates, s = _4(r), i = N5(s);
  return t && i4(t, i) > 0 || a && a.every(function(o) {
    return i4(o, i) > 0;
  }) || !1;
}
function Ka(r, n) {
  var e = n === void 0 ? {} : n, t = e.maxDate, a = e.includeDates, s = k5(r), i = Z3(s, 1);
  return t && i4(i, t) > 0 || a && a.every(function(o) {
    return i4(i, o) > 0;
  }) || !1;
}
function N7(r, n) {
  var e = n === void 0 ? {} : n, t = e.minDate, a = e.includeDates, s = o1(r, 1);
  return t && o4(t, s) > 0 || a && a.every(function(i) {
    return o4(i, s) > 0;
  }) || !1;
}
function Qa(r, n) {
  var e = n === void 0 ? {} : n, t = e.minDate, a = e.yearItemNumber, s = a === void 0 ? O1 : a, i = _1(o1(r, s)), o = J2(i, s).endPeriod, l = t && j(t);
  return l && l > o || !1;
}
function F7(r, n) {
  var e = n === void 0 ? {} : n, t = e.maxDate, a = e.includeDates, s = e0(r, 1);
  return t && o4(s, t) > 0 || a && a.every(function(i) {
    return o4(s, i) > 0;
  }) || !1;
}
function Xa(r, n) {
  var e = n === void 0 ? {} : n, t = e.maxDate, a = e.yearItemNumber, s = a === void 0 ? O1 : a, i = e0(r, s), o = J2(i, s).startPeriod, l = t && j(t);
  return l && l < o || !1;
}
function X5(r) {
  var n = r.minDate, e = r.includeDates;
  if (e && n) {
    var t = e.filter(function(a) {
      return i1(a, n) >= 0;
    });
    return l7(t);
  } else return e ? l7(e) : n;
}
function J5(r) {
  var n = r.maxDate, e = r.includeDates;
  if (e && n) {
    var t = e.filter(function(a) {
      return i1(a, n) <= 0;
    });
    return o7(t);
  } else return e ? o7(e) : n;
}
function V7(r, n) {
  var e;
  r === void 0 && (r = []), n === void 0 && (n = "react-datepicker__day--highlighted");
  for (var t = /* @__PURE__ */ new Map(), a = 0, s = r.length; a < s; a++) {
    var i = r[a];
    if (t0(i)) {
      var o = J(i, "MM.dd.yyyy"), l = t.get(o) || [];
      l.includes(n) || (l.push(n), t.set(o, l));
    } else if (typeof i == "object") {
      var c = Object.keys(i), d = (e = c[0]) !== null && e !== void 0 ? e : "", u = i[d];
      if (typeof d == "string" && Array.isArray(u))
        for (var C = 0, f = u.length; C < f; C++) {
          var p = u[C];
          if (p) {
            var o = J(p, "MM.dd.yyyy"), l = t.get(o) || [];
            l.includes(d) || (l.push(d), t.set(o, l));
          }
        }
    }
  }
  return t;
}
function Ja(r, n) {
  return r.length !== n.length ? !1 : r.every(function(e, t) {
    return e === n[t];
  });
}
function es(r, n) {
  r === void 0 && (r = []), n === void 0 && (n = "react-datepicker__day--holidays");
  var e = /* @__PURE__ */ new Map();
  return r.forEach(function(t) {
    var a = t.date, s = t.holidayName;
    if (t0(a)) {
      var i = J(a, "MM.dd.yyyy"), o = e.get(i) || {
        className: "",
        holidayNames: []
      };
      if (!("className" in o && o.className === n && Ja(o.holidayNames, [s]))) {
        o.className = n;
        var l = o.holidayNames;
        o.holidayNames = l ? W2(W2([], l, !0), [s], !1) : [s], e.set(i, o);
      }
    }
  }), e;
}
function ts(r, n, e, t, a) {
  for (var s = a.length, i = [], o = 0; o < s; o++) {
    var l = r, c = a[o];
    c && (l = q9(l, n0(c)), l = h3(l, r0(c)), l = K9(l, p0(c)));
    var d = h3(r, (e + 1) * t);
    w0(l, n) && U2(l, d) && c != null && i.push(c);
  }
  return i;
}
function R7(r) {
  return r < 10 ? "0".concat(r) : "".concat(r);
}
function J2(r, n) {
  n === void 0 && (n = O1);
  var e = Math.ceil(j(r) / n) * n, t = e - (n - 1);
  return { startPeriod: t, endPeriod: e };
}
function ns(r) {
  var n = new Date(r.getFullYear(), r.getMonth(), r.getDate()), e = new Date(r.getFullYear(), r.getMonth(), r.getDate(), 24);
  return Math.round((+e - +n) / 36e5);
}
function j7(r) {
  var n = r.getSeconds(), e = r.getMilliseconds();
  return Z(r.getTime() - n * 1e3 - e);
}
function rs(r, n) {
  return j7(r).getTime() === j7(n).getTime();
}
function A7(r) {
  if (!t0(r))
    throw new Error("Invalid date");
  var n = new Date(r);
  return n.setHours(0, 0, 0, 0), n;
}
function z4(r, n) {
  if (!t0(r) || !t0(n))
    throw new Error("Invalid date received");
  var e = A7(r), t = A7(n);
  return U2(e, t);
}
function e8(r) {
  return r.key === _.Space;
}
var as = (
  /** @class */
  function(r) {
    M2(n, r);
    function n(e) {
      var t = r.call(this, e) || this;
      return t.inputRef = g.createRef(), t.onTimeChange = function(a) {
        var s, i;
        t.setState({ time: a });
        var o = t.props.date, l = o instanceof Date && !isNaN(+o), c = l ? o : /* @__PURE__ */ new Date();
        if (a != null && a.includes(":")) {
          var d = a.split(":"), u = d[0], C = d[1];
          c.setHours(Number(u)), c.setMinutes(Number(C));
        }
        (i = (s = t.props).onChange) === null || i === void 0 || i.call(s, c);
      }, t.renderTimeInput = function() {
        var a = t.state.time, s = t.props, i = s.date, o = s.timeString, l = s.customTimeInput;
        return l ? h5(l, {
          date: i,
          value: a,
          onChange: t.onTimeChange
        }) : g.createElement("input", { type: "time", className: "react-datepicker-time__input", placeholder: "Time", name: "time-input", ref: t.inputRef, onClick: function() {
          var c;
          (c = t.inputRef.current) === null || c === void 0 || c.focus();
        }, required: !0, value: a, onChange: function(c) {
          t.onTimeChange(c.target.value || o);
        } });
      }, t.state = {
        time: t.props.timeString
      }, t;
    }
    return n.getDerivedStateFromProps = function(e, t) {
      return e.timeString !== t.time ? {
        time: e.timeString
      } : null;
    }, n.prototype.render = function() {
      return g.createElement(
        "div",
        { className: "react-datepicker__input-time-container" },
        g.createElement("div", { className: "react-datepicker-time__caption" }, this.props.timeInputLabel),
        g.createElement(
          "div",
          { className: "react-datepicker-time__input-container" },
          g.createElement("div", { className: "react-datepicker-time__input" }, this.renderTimeInput())
        )
      );
    }, n;
  }(v2)
), ss = (
  /** @class */
  function(r) {
    M2(n, r);
    function n() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.dayEl = v0(), e.handleClick = function(t) {
        !e.isDisabled() && e.props.onClick && e.props.onClick(t);
      }, e.handleMouseEnter = function(t) {
        !e.isDisabled() && e.props.onMouseEnter && e.props.onMouseEnter(t);
      }, e.handleOnKeyDown = function(t) {
        var a, s, i = t.key;
        i === _.Space && (t.preventDefault(), t.key = _.Enter), (s = (a = e.props).handleOnKeyDown) === null || s === void 0 || s.call(a, t);
      }, e.isSameDay = function(t) {
        return B(e.props.day, t);
      }, e.isKeyboardSelected = function() {
        var t;
        if (e.props.disabledKeyboardNavigation)
          return !1;
        var a = e.props.selectsMultiple ? (t = e.props.selectedDates) === null || t === void 0 ? void 0 : t.some(function(i) {
          return e.isSameDayOrWeek(i);
        }) : e.isSameDayOrWeek(e.props.selected), s = e.props.preSelection && e.isDisabled(e.props.preSelection);
        return !a && e.isSameDayOrWeek(e.props.preSelection) && !s;
      }, e.isDisabled = function(t) {
        return t === void 0 && (t = e.props.day), T2(t, {
          minDate: e.props.minDate,
          maxDate: e.props.maxDate,
          excludeDates: e.props.excludeDates,
          excludeDateIntervals: e.props.excludeDateIntervals,
          includeDateIntervals: e.props.includeDateIntervals,
          includeDates: e.props.includeDates,
          filterDate: e.props.filterDate,
          disabled: e.props.disabled
        });
      }, e.isExcluded = function() {
        return j3(e.props.day, {
          excludeDates: e.props.excludeDates,
          excludeDateIntervals: e.props.excludeDateIntervals
        });
      }, e.isStartOfWeek = function() {
        return B(e.props.day, m0(e.props.day, e.props.locale, e.props.calendarStartDay));
      }, e.isSameWeek = function(t) {
        return e.props.showWeekPicker && B(t, m0(e.props.day, e.props.locale, e.props.calendarStartDay));
      }, e.isSameDayOrWeek = function(t) {
        return e.isSameDay(t) || e.isSameWeek(t);
      }, e.getHighLightedClass = function() {
        var t = e.props, a = t.day, s = t.highlightDates;
        if (!s)
          return !1;
        var i = J(a, "MM.dd.yyyy");
        return s.get(i);
      }, e.getHolidaysClass = function() {
        var t, a = e.props, s = a.day, i = a.holidays;
        if (!i)
          return [void 0];
        var o = J(s, "MM.dd.yyyy");
        return i.has(o) ? [(t = i.get(o)) === null || t === void 0 ? void 0 : t.className] : [void 0];
      }, e.isInRange = function() {
        var t = e.props, a = t.day, s = t.startDate, i = t.endDate;
        return !s || !i ? !1 : k0(a, s, i);
      }, e.isInSelectingRange = function() {
        var t, a = e.props, s = a.day, i = a.selectsStart, o = a.selectsEnd, l = a.selectsRange, c = a.selectsDisabledDaysInRange, d = a.startDate, u = a.swapRange, C = a.endDate, f = (t = e.props.selectingDate) !== null && t !== void 0 ? t : e.props.preSelection;
        if (!(i || o || l) || !f || !c && e.isDisabled())
          return !1;
        if (i && C && (U2(f, C) || D0(f, C)))
          return k0(s, f, C);
        if (o && d && (w0(f, d) || D0(f, d)))
          return k0(s, d, f);
        if (l && d && !C) {
          if (D0(f, d) || w0(f, d))
            return k0(s, d, f);
          if (u && U2(f, d))
            return k0(s, f, d);
        }
        return !1;
      }, e.isSelectingRangeStart = function() {
        var t;
        if (!e.isInSelectingRange())
          return !1;
        var a = e.props, s = a.day, i = a.startDate, o = a.selectsStart, l = a.swapRange, c = a.selectsRange, d = (t = e.props.selectingDate) !== null && t !== void 0 ? t : e.props.preSelection;
        return o ? B(s, d) : c && l && i && d ? B(s, U2(d, i) ? d : i) : B(s, i);
      }, e.isSelectingRangeEnd = function() {
        var t;
        if (!e.isInSelectingRange())
          return !1;
        var a = e.props, s = a.day, i = a.endDate, o = a.selectsEnd, l = a.selectsRange, c = a.swapRange, d = a.startDate, u = (t = e.props.selectingDate) !== null && t !== void 0 ? t : e.props.preSelection;
        return o ? B(s, u) : l && c && d && u ? B(s, U2(u, d) ? d : u) : l ? B(s, u) : B(s, i);
      }, e.isRangeStart = function() {
        var t = e.props, a = t.day, s = t.startDate, i = t.endDate;
        return !s || !i ? !1 : B(s, a);
      }, e.isRangeEnd = function() {
        var t = e.props, a = t.day, s = t.startDate, i = t.endDate;
        return !s || !i ? !1 : B(i, a);
      }, e.isWeekend = function() {
        var t = qt(e.props.day);
        return t === 0 || t === 6;
      }, e.isAfterMonth = function() {
        return e.props.month !== void 0 && (e.props.month + 1) % 12 === y2(e.props.day);
      }, e.isBeforeMonth = function() {
        return e.props.month !== void 0 && (y2(e.props.day) + 1) % 12 === e.props.month;
      }, e.isCurrentDay = function() {
        return e.isSameDay(K());
      }, e.isSelected = function() {
        var t;
        return e.props.selectsMultiple ? (t = e.props.selectedDates) === null || t === void 0 ? void 0 : t.some(function(a) {
          return e.isSameDayOrWeek(a);
        }) : e.isSameDayOrWeek(e.props.selected);
      }, e.getClassNames = function(t) {
        var a = e.props.dayClassName ? e.props.dayClassName(t) : void 0;
        return g2("react-datepicker__day", a, "react-datepicker__day--" + Aa(e.props.day), {
          "react-datepicker__day--disabled": e.isDisabled(),
          "react-datepicker__day--excluded": e.isExcluded(),
          "react-datepicker__day--selected": e.isSelected(),
          "react-datepicker__day--keyboard-selected": e.isKeyboardSelected(),
          "react-datepicker__day--range-start": e.isRangeStart(),
          "react-datepicker__day--range-end": e.isRangeEnd(),
          "react-datepicker__day--in-range": e.isInRange(),
          "react-datepicker__day--in-selecting-range": e.isInSelectingRange(),
          "react-datepicker__day--selecting-range-start": e.isSelectingRangeStart(),
          "react-datepicker__day--selecting-range-end": e.isSelectingRangeEnd(),
          "react-datepicker__day--today": e.isCurrentDay(),
          "react-datepicker__day--weekend": e.isWeekend(),
          "react-datepicker__day--outside-month": e.isAfterMonth() || e.isBeforeMonth()
        }, e.getHighLightedClass(), e.getHolidaysClass());
      }, e.getAriaLabel = function() {
        var t = e.props, a = t.day, s = t.ariaLabelPrefixWhenEnabled, i = s === void 0 ? "Choose" : s, o = t.ariaLabelPrefixWhenDisabled, l = o === void 0 ? "Not available" : o, c = e.isDisabled() || e.isExcluded() ? l : i;
        return "".concat(c, " ").concat(J(a, "PPPP", e.props.locale));
      }, e.getTitle = function() {
        var t = e.props, a = t.day, s = t.holidays, i = s === void 0 ? /* @__PURE__ */ new Map() : s, o = t.excludeDates, l = J(a, "MM.dd.yyyy"), c = [];
        return i.has(l) && c.push.apply(c, i.get(l).holidayNames), e.isExcluded() && c.push(o == null ? void 0 : o.filter(function(d) {
          return d instanceof Date ? B(d, a) : B(d == null ? void 0 : d.date, a);
        }).map(function(d) {
          if (!(d instanceof Date))
            return d == null ? void 0 : d.message;
        })), c.join(", ");
      }, e.getTabIndex = function() {
        var t = e.props.selected, a = e.props.preSelection, s = !(e.props.showWeekPicker && (e.props.showWeekNumber || !e.isStartOfWeek())) && (e.isKeyboardSelected() || e.isSameDay(t) && B(a, t)) ? 0 : -1;
        return s;
      }, e.handleFocusDay = function() {
        var t;
        e.shouldFocusDay() && ((t = e.dayEl.current) === null || t === void 0 || t.focus({ preventScroll: !0 }));
      }, e.renderDayContents = function() {
        return e.props.monthShowsDuplicateDaysEnd && e.isAfterMonth() || e.props.monthShowsDuplicateDaysStart && e.isBeforeMonth() ? null : e.props.renderDayContents ? e.props.renderDayContents(p7(e.props.day), e.props.day) : p7(e.props.day);
      }, e.render = function() {
        return (
          // TODO: Use <option> instead of the "option" role to ensure accessibility across all devices.
          g.createElement(
            "div",
            { ref: e.dayEl, className: e.getClassNames(e.props.day), onKeyDown: e.handleOnKeyDown, onClick: e.handleClick, onMouseEnter: e.props.usePointerEvent ? void 0 : e.handleMouseEnter, onPointerEnter: e.props.usePointerEvent ? e.handleMouseEnter : void 0, tabIndex: e.getTabIndex(), "aria-label": e.getAriaLabel(), role: "gridcell", title: e.getTitle(), "aria-disabled": e.isDisabled(), "aria-current": e.isCurrentDay() ? "date" : void 0, "aria-selected": e.isSelected() || e.isInRange() },
            e.renderDayContents(),
            e.getTitle() !== "" && g.createElement("span", { className: "overlay" }, e.getTitle())
          )
        );
      }, e;
    }
    return n.prototype.componentDidMount = function() {
      this.handleFocusDay();
    }, n.prototype.componentDidUpdate = function() {
      this.handleFocusDay();
    }, n.prototype.shouldFocusDay = function() {
      var e = !1;
      return this.getTabIndex() === 0 && this.isSameDay(this.props.preSelection) && ((!document.activeElement || document.activeElement === document.body) && (e = !0), this.props.inline && !this.props.shouldFocusDayInline && (e = !1), this.isDayActiveElement() && (e = !0), this.isDuplicateDay() && (e = !1)), e;
    }, n.prototype.isDayActiveElement = function() {
      var e, t, a;
      return ((t = (e = this.props.containerRef) === null || e === void 0 ? void 0 : e.current) === null || t === void 0 ? void 0 : t.contains(document.activeElement)) && ((a = document.activeElement) === null || a === void 0 ? void 0 : a.classList.contains("react-datepicker__day"));
    }, n.prototype.isDuplicateDay = function() {
      return (
        //day is one of the non rendered duplicate days
        this.props.monthShowsDuplicateDaysEnd && this.isAfterMonth() || this.props.monthShowsDuplicateDaysStart && this.isBeforeMonth()
      );
    }, n;
  }(v2)
), is = (
  /** @class */
  function(r) {
    M2(n, r);
    function n() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.weekNumberEl = v0(), e.handleClick = function(t) {
        e.props.onClick && e.props.onClick(t);
      }, e.handleOnKeyDown = function(t) {
        var a, s, i = t.key;
        i === _.Space && (t.preventDefault(), t.key = _.Enter), (s = (a = e.props).handleOnKeyDown) === null || s === void 0 || s.call(a, t);
      }, e.isKeyboardSelected = function() {
        return !e.props.disabledKeyboardNavigation && !B(e.props.date, e.props.selected) && B(e.props.date, e.props.preSelection);
      }, e.getTabIndex = function() {
        return e.props.showWeekPicker && e.props.showWeekNumber && (e.isKeyboardSelected() || B(e.props.date, e.props.selected) && B(e.props.preSelection, e.props.selected)) ? 0 : -1;
      }, e.handleFocusWeekNumber = function(t) {
        var a = !1;
        e.getTabIndex() === 0 && !(t != null && t.isInputFocused) && B(e.props.date, e.props.preSelection) && ((!document.activeElement || document.activeElement === document.body) && (a = !0), e.props.inline && !e.props.shouldFocusDayInline && (a = !1), e.props.containerRef && e.props.containerRef.current && e.props.containerRef.current.contains(document.activeElement) && document.activeElement && document.activeElement.classList.contains("react-datepicker__week-number") && (a = !0)), a && e.weekNumberEl.current && e.weekNumberEl.current.focus({ preventScroll: !0 });
      }, e;
    }
    return Object.defineProperty(n, "defaultProps", {
      get: function() {
        return {
          ariaLabelPrefix: "week "
        };
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.componentDidMount = function() {
      this.handleFocusWeekNumber();
    }, n.prototype.componentDidUpdate = function(e) {
      this.handleFocusWeekNumber(e);
    }, n.prototype.render = function() {
      var e = this.props, t = e.weekNumber, a = e.isWeekDisabled, s = e.ariaLabelPrefix, i = s === void 0 ? n.defaultProps.ariaLabelPrefix : s, o = e.onClick, l = {
        "react-datepicker__week-number": !0,
        "react-datepicker__week-number--clickable": !!o && !a,
        "react-datepicker__week-number--selected": !!o && B(this.props.date, this.props.selected)
      };
      return g.createElement("div", { ref: this.weekNumberEl, className: g2(l), "aria-label": "".concat(i, " ").concat(this.props.weekNumber), onClick: this.handleClick, onKeyDown: this.handleOnKeyDown, tabIndex: this.getTabIndex(), role: "gridcell" }, t);
    }, n;
  }(v2)
), os = (
  /** @class */
  function(r) {
    M2(n, r);
    function n() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.isDisabled = function(t) {
        return T2(t, {
          minDate: e.props.minDate,
          maxDate: e.props.maxDate,
          excludeDates: e.props.excludeDates,
          excludeDateIntervals: e.props.excludeDateIntervals,
          includeDateIntervals: e.props.includeDateIntervals,
          includeDates: e.props.includeDates,
          filterDate: e.props.filterDate
        });
      }, e.handleDayClick = function(t, a) {
        e.props.onDayClick && e.props.onDayClick(t, a);
      }, e.handleDayMouseEnter = function(t) {
        e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
      }, e.handleWeekClick = function(t, a, s) {
        for (var i, o, l, c = new Date(t), d = 0; d < 7; d++) {
          var u = new Date(t);
          u.setDate(u.getDate() + d);
          var C = !e.isDisabled(u);
          if (C) {
            c = u;
            break;
          }
        }
        typeof e.props.onWeekSelect == "function" && e.props.onWeekSelect(c, a, s), e.props.showWeekPicker && e.handleDayClick(c, s), ((i = e.props.shouldCloseOnSelect) !== null && i !== void 0 ? i : n.defaultProps.shouldCloseOnSelect) && ((l = (o = e.props).setOpen) === null || l === void 0 || l.call(o, !1));
      }, e.formatWeekNumber = function(t) {
        return e.props.formatWeekNumber ? e.props.formatWeekNumber(t) : ja(t);
      }, e.isWeekDisabled = function() {
        for (var t = e.startOfWeek(), a = I2(t, 6), s = new Date(t); s <= a; ) {
          if (!e.isDisabled(s))
            return !1;
          s = I2(s, 1);
        }
        return !0;
      }, e.renderDays = function() {
        var t = e.startOfWeek(), a = [], s = e.formatWeekNumber(t);
        if (e.props.showWeekNumber) {
          var i = e.props.onWeekSelect || e.props.showWeekPicker ? e.handleWeekClick.bind(e, t, s) : void 0;
          a.push(g.createElement(is, Y({ key: "W" }, n.defaultProps, e.props, { weekNumber: s, isWeekDisabled: e.isWeekDisabled(), date: t, onClick: i })));
        }
        return a.concat([0, 1, 2, 3, 4, 5, 6].map(function(o) {
          var l = I2(t, o);
          return g.createElement(ss, Y({}, n.defaultProps, e.props, { ariaLabelPrefixWhenEnabled: e.props.chooseDayAriaLabelPrefix, ariaLabelPrefixWhenDisabled: e.props.disabledDayAriaLabelPrefix, key: l.valueOf(), day: l, onClick: e.handleDayClick.bind(e, l), onMouseEnter: e.handleDayMouseEnter.bind(e, l) }));
        }));
      }, e.startOfWeek = function() {
        return m0(e.props.day, e.props.locale, e.props.calendarStartDay);
      }, e.isKeyboardSelected = function() {
        return !e.props.disabledKeyboardNavigation && !B(e.startOfWeek(), e.props.selected) && B(e.startOfWeek(), e.props.preSelection);
      }, e;
    }
    return Object.defineProperty(n, "defaultProps", {
      get: function() {
        return {
          shouldCloseOnSelect: !0
        };
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.render = function() {
      var e = {
        "react-datepicker__week": !0,
        "react-datepicker__week--selected": B(this.startOfWeek(), this.props.selected),
        "react-datepicker__week--keyboard-selected": this.isKeyboardSelected()
      }, t = this.props.weekClassName ? this.props.weekClassName(this.startOfWeek()) : void 0;
      return g.createElement("div", { className: g2(e, t), role: "row" }, this.renderDays());
    }, n;
  }(v2)
), w1, ls = 6, n1 = {
  TWO_COLUMNS: "two_columns",
  THREE_COLUMNS: "three_columns",
  FOUR_COLUMNS: "four_columns"
}, q4 = (w1 = {}, w1[n1.TWO_COLUMNS] = {
  grid: [
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [10, 11]
  ],
  verticalNavigationOffset: 2
}, w1[n1.THREE_COLUMNS] = {
  grid: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9, 10, 11]
  ],
  verticalNavigationOffset: 3
}, w1[n1.FOUR_COLUMNS] = {
  grid: [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11]
  ],
  verticalNavigationOffset: 4
}, w1), B1 = 1;
function B7(r, n) {
  return r ? n1.FOUR_COLUMNS : n ? n1.TWO_COLUMNS : n1.THREE_COLUMNS;
}
var cs = (
  /** @class */
  function(r) {
    M2(n, r);
    function n() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.MONTH_REFS = W2([], Array(12), !0).map(function() {
        return v0();
      }), e.QUARTER_REFS = W2([], Array(4), !0).map(function() {
        return v0();
      }), e.isDisabled = function(t) {
        return T2(t, {
          minDate: e.props.minDate,
          maxDate: e.props.maxDate,
          excludeDates: e.props.excludeDates,
          excludeDateIntervals: e.props.excludeDateIntervals,
          includeDateIntervals: e.props.includeDateIntervals,
          includeDates: e.props.includeDates,
          filterDate: e.props.filterDate,
          disabled: e.props.disabled
        });
      }, e.isExcluded = function(t) {
        return j3(t, {
          excludeDates: e.props.excludeDates,
          excludeDateIntervals: e.props.excludeDateIntervals
        });
      }, e.handleDayClick = function(t, a) {
        var s, i;
        (i = (s = e.props).onDayClick) === null || i === void 0 || i.call(s, t, a, e.props.orderInDisplay);
      }, e.handleDayMouseEnter = function(t) {
        var a, s;
        (s = (a = e.props).onDayMouseEnter) === null || s === void 0 || s.call(a, t);
      }, e.handleMouseLeave = function() {
        var t, a;
        (a = (t = e.props).onMouseLeave) === null || a === void 0 || a.call(t);
      }, e.isRangeStartMonth = function(t) {
        var a = e.props, s = a.day, i = a.startDate, o = a.endDate;
        return !i || !o ? !1 : _2(D2(s, t), i);
      }, e.isRangeStartQuarter = function(t) {
        var a = e.props, s = a.day, i = a.startDate, o = a.endDate;
        return !i || !o ? !1 : f4(Q0(s, t), i);
      }, e.isRangeEndMonth = function(t) {
        var a = e.props, s = a.day, i = a.startDate, o = a.endDate;
        return !i || !o ? !1 : _2(D2(s, t), o);
      }, e.isRangeEndQuarter = function(t) {
        var a = e.props, s = a.day, i = a.startDate, o = a.endDate;
        return !i || !o ? !1 : f4(Q0(s, t), o);
      }, e.isInSelectingRangeMonth = function(t) {
        var a, s = e.props, i = s.day, o = s.selectsStart, l = s.selectsEnd, c = s.selectsRange, d = s.startDate, u = s.endDate, C = (a = e.props.selectingDate) !== null && a !== void 0 ? a : e.props.preSelection;
        return !(o || l || c) || !C ? !1 : o && u ? V1(C, u, t, i) : l && d || c && d && !u ? V1(d, C, t, i) : !1;
      }, e.isSelectingMonthRangeStart = function(t) {
        var a;
        if (!e.isInSelectingRangeMonth(t))
          return !1;
        var s = e.props, i = s.day, o = s.startDate, l = s.selectsStart, c = D2(i, t), d = (a = e.props.selectingDate) !== null && a !== void 0 ? a : e.props.preSelection;
        return l ? _2(c, d) : _2(c, o);
      }, e.isSelectingMonthRangeEnd = function(t) {
        var a;
        if (!e.isInSelectingRangeMonth(t))
          return !1;
        var s = e.props, i = s.day, o = s.endDate, l = s.selectsEnd, c = s.selectsRange, d = D2(i, t), u = (a = e.props.selectingDate) !== null && a !== void 0 ? a : e.props.preSelection;
        return l || c ? _2(d, u) : _2(d, o);
      }, e.isInSelectingRangeQuarter = function(t) {
        var a, s = e.props, i = s.day, o = s.selectsStart, l = s.selectsEnd, c = s.selectsRange, d = s.startDate, u = s.endDate, C = (a = e.props.selectingDate) !== null && a !== void 0 ? a : e.props.preSelection;
        return !(o || l || c) || !C ? !1 : o && u ? A1(C, u, t, i) : l && d || c && d && !u ? A1(d, C, t, i) : !1;
      }, e.isWeekInMonth = function(t) {
        var a = e.props.day, s = I2(t, 6);
        return _2(t, a) || _2(s, a);
      }, e.isCurrentMonth = function(t, a) {
        return j(t) === j(K()) && a === y2(K());
      }, e.isCurrentQuarter = function(t, a) {
        return j(t) === j(K()) && a === O0(K());
      }, e.isSelectedMonth = function(t, a, s) {
        return y2(s) === a && j(t) === j(s);
      }, e.isSelectMonthInList = function(t, a, s) {
        return s.some(function(i) {
          return e.isSelectedMonth(t, a, i);
        });
      }, e.isSelectedQuarter = function(t, a, s) {
        return O0(t) === a && j(t) === j(s);
      }, e.isMonthSelected = function() {
        var t = e.props, a = t.day, s = t.selected, i = t.selectedDates, o = t.selectsMultiple, l = y2(a);
        return o ? i == null ? void 0 : i.some(function(c) {
          return e.isSelectedMonth(a, l, c);
        }) : !!s && e.isSelectedMonth(a, l, s);
      }, e.renderWeeks = function() {
        for (var t = [], a = e.props.fixedHeight, s = 0, i = !1, o = m0(a0(e.props.day), e.props.locale, e.props.calendarStartDay), l = function(p) {
          return e.props.showWeekPicker ? m0(p, e.props.locale, e.props.calendarStartDay) : e.props.preSelection;
        }, c = function(p) {
          return e.props.showWeekPicker ? m0(p, e.props.locale, e.props.calendarStartDay) : e.props.selected;
        }, d = e.props.selected ? c(e.props.selected) : void 0, u = e.props.preSelection ? l(e.props.preSelection) : void 0; t.push(g.createElement(os, Y({}, e.props, { ariaLabelPrefix: e.props.weekAriaLabelPrefix, key: s, day: o, month: y2(e.props.day), onDayClick: e.handleDayClick, onDayMouseEnter: e.handleDayMouseEnter, selected: d, preSelection: u, showWeekNumber: e.props.showWeekNumbers }))), !i; ) {
          s++, o = r4(o, 1);
          var C = a && s >= ls, f = !a && !e.isWeekInMonth(o);
          if (C || f)
            if (e.props.peekNextMonth)
              i = !0;
            else
              break;
        }
        return t;
      }, e.onMonthClick = function(t, a) {
        var s = e.isMonthDisabledForLabelDate(a), i = s.isDisabled, o = s.labelDate;
        i || e.handleDayClick(a0(o), t);
      }, e.onMonthMouseEnter = function(t) {
        var a = e.isMonthDisabledForLabelDate(t), s = a.isDisabled, i = a.labelDate;
        s || e.handleDayMouseEnter(a0(i));
      }, e.handleMonthNavigation = function(t, a) {
        var s, i, o, l;
        (i = (s = e.props).setPreSelection) === null || i === void 0 || i.call(s, a), (l = (o = e.MONTH_REFS[t]) === null || o === void 0 ? void 0 : o.current) === null || l === void 0 || l.focus();
      }, e.handleKeyboardNavigation = function(t, a, s) {
        var i, o = e.props, l = o.selected, c = o.preSelection, d = o.setPreSelection, u = o.minDate, C = o.maxDate, f = o.showFourColumnMonthYearPicker, p = o.showTwoColumnMonthYearPicker;
        if (c) {
          var v = B7(f, p), m = e.getVerticalOffset(v), w = (i = q4[v]) === null || i === void 0 ? void 0 : i.grid, y = function(P, L, k) {
            var H, W, V = L, z = k;
            switch (P) {
              case _.ArrowRight:
                V = N2(L, B1), z = k === 11 ? 0 : k + B1;
                break;
              case _.ArrowLeft:
                V = E0(L, B1), z = k === 0 ? 11 : k - B1;
                break;
              case _.ArrowUp:
                V = E0(L, m), z = !((H = w == null ? void 0 : w[0]) === null || H === void 0) && H.includes(k) ? k + 12 - m : k - m;
                break;
              case _.ArrowDown:
                V = N2(L, m), z = !((W = w == null ? void 0 : w[w.length - 1]) === null || W === void 0) && W.includes(k) ? k - 12 + m : k + m;
                break;
            }
            return { newCalculatedDate: V, newCalculatedMonth: z };
          }, b = function(P, L, k) {
            for (var H = 40, W = P, V = !1, z = 0, q = y(W, L, k), U = q.newCalculatedDate, T = q.newCalculatedMonth; !V; ) {
              if (z >= H) {
                U = L, T = k;
                break;
              }
              if (u && U < u) {
                W = _.ArrowRight;
                var F = y(W, U, T);
                U = F.newCalculatedDate, T = F.newCalculatedMonth;
              }
              if (C && U > C) {
                W = _.ArrowLeft;
                var F = y(W, U, T);
                U = F.newCalculatedDate, T = F.newCalculatedMonth;
              }
              if ($a(U, e.props)) {
                var F = y(W, U, T);
                U = F.newCalculatedDate, T = F.newCalculatedMonth;
              } else
                V = !0;
              z++;
            }
            return { newCalculatedDate: U, newCalculatedMonth: T };
          };
          if (a === _.Enter) {
            e.isMonthDisabled(s) || (e.onMonthClick(t, s), d == null || d(l));
            return;
          }
          var D = b(a, c, s), S = D.newCalculatedDate, R = D.newCalculatedMonth;
          switch (a) {
            case _.ArrowRight:
            case _.ArrowLeft:
            case _.ArrowUp:
            case _.ArrowDown:
              e.handleMonthNavigation(R, S);
              break;
          }
        }
      }, e.getVerticalOffset = function(t) {
        var a, s;
        return (s = (a = q4[t]) === null || a === void 0 ? void 0 : a.verticalNavigationOffset) !== null && s !== void 0 ? s : 0;
      }, e.onMonthKeyDown = function(t, a) {
        var s = e.props, i = s.disabledKeyboardNavigation, o = s.handleOnMonthKeyDown, l = t.key;
        l !== _.Tab && t.preventDefault(), i || e.handleKeyboardNavigation(t, l, a), o && o(t);
      }, e.onQuarterClick = function(t, a) {
        var s = Q0(e.props.day, a);
        R1(s, e.props) || e.handleDayClick(D7(s), t);
      }, e.onQuarterMouseEnter = function(t) {
        var a = Q0(e.props.day, t);
        R1(a, e.props) || e.handleDayMouseEnter(D7(a));
      }, e.handleQuarterNavigation = function(t, a) {
        var s, i, o, l;
        e.isDisabled(a) || e.isExcluded(a) || ((i = (s = e.props).setPreSelection) === null || i === void 0 || i.call(s, a), (l = (o = e.QUARTER_REFS[t - 1]) === null || o === void 0 ? void 0 : o.current) === null || l === void 0 || l.focus());
      }, e.onQuarterKeyDown = function(t, a) {
        var s, i, o = t.key;
        if (!e.props.disabledKeyboardNavigation)
          switch (o) {
            case _.Enter:
              e.onQuarterClick(t, a), (i = (s = e.props).setPreSelection) === null || i === void 0 || i.call(s, e.props.selected);
              break;
            case _.ArrowRight:
              if (!e.props.preSelection)
                break;
              e.handleQuarterNavigation(a === 4 ? 1 : a + 1, Z3(e.props.preSelection, 1));
              break;
            case _.ArrowLeft:
              if (!e.props.preSelection)
                break;
              e.handleQuarterNavigation(a === 1 ? 4 : a - 1, N5(e.props.preSelection));
              break;
          }
      }, e.isMonthDisabledForLabelDate = function(t) {
        var a, s = e.props, i = s.day, o = s.disabled, l = s.minDate, c = s.maxDate, d = s.excludeDates, u = s.includeDates, C = D2(i, t);
        return o ? {
          isDisabled: !0,
          labelDate: D2(i, t)
        } : {
          isDisabled: (a = (l || c || d || u) && Q5(C, e.props)) !== null && a !== void 0 ? a : !1,
          labelDate: C
        };
      }, e.isMonthDisabled = function(t) {
        var a = e.isMonthDisabledForLabelDate(t).isDisabled;
        return a;
      }, e.getMonthClassNames = function(t) {
        var a = e.props, s = a.day, i = a.startDate, o = a.endDate, l = a.preSelection, c = a.monthClassName, d = c ? c(D2(s, t)) : void 0, u = e.getSelection();
        return g2("react-datepicker__month-text", "react-datepicker__month-".concat(t), d, {
          "react-datepicker__month-text--disabled": e.isMonthDisabled(t),
          "react-datepicker__month-text--selected": u ? e.isSelectMonthInList(s, t, u) : void 0,
          "react-datepicker__month-text--keyboard-selected": !e.props.disabledKeyboardNavigation && l && e.isSelectedMonth(s, t, l) && !e.isMonthSelected() && !e.isMonthDisabled(t),
          "react-datepicker__month-text--in-selecting-range": e.isInSelectingRangeMonth(t),
          "react-datepicker__month-text--in-range": i && o ? V1(i, o, t, s) : void 0,
          "react-datepicker__month-text--range-start": e.isRangeStartMonth(t),
          "react-datepicker__month-text--range-end": e.isRangeEndMonth(t),
          "react-datepicker__month-text--selecting-range-start": e.isSelectingMonthRangeStart(t),
          "react-datepicker__month-text--selecting-range-end": e.isSelectingMonthRangeEnd(t),
          "react-datepicker__month-text--today": e.isCurrentMonth(s, t)
        });
      }, e.getTabIndex = function(t) {
        if (e.props.preSelection == null)
          return "-1";
        var a = y2(e.props.preSelection), s = e.isMonthDisabledForLabelDate(a).isDisabled, i = t === a && !(s || e.props.disabledKeyboardNavigation) ? "0" : "-1";
        return i;
      }, e.getQuarterTabIndex = function(t) {
        if (e.props.preSelection == null)
          return "-1";
        var a = O0(e.props.preSelection), s = R1(e.props.day, e.props), i = t === a && !(s || e.props.disabledKeyboardNavigation) ? "0" : "-1";
        return i;
      }, e.getAriaLabel = function(t) {
        var a = e.props, s = a.chooseDayAriaLabelPrefix, i = s === void 0 ? "Choose" : s, o = a.disabledDayAriaLabelPrefix, l = o === void 0 ? "Not available" : o, c = a.day, d = a.locale, u = D2(c, t), C = e.isDisabled(u) || e.isExcluded(u) ? l : i;
        return "".concat(C, " ").concat(J(u, "MMMM yyyy", d));
      }, e.getQuarterClassNames = function(t) {
        var a = e.props, s = a.day, i = a.startDate, o = a.endDate, l = a.selected, c = a.minDate, d = a.maxDate, u = a.excludeDates, C = a.includeDates, f = a.filterDate, p = a.preSelection, v = a.disabledKeyboardNavigation, m = a.disabled, w = (c || d || u || C || f || m) && R1(Q0(s, t), e.props);
        return g2("react-datepicker__quarter-text", "react-datepicker__quarter-".concat(t), {
          "react-datepicker__quarter-text--disabled": w,
          "react-datepicker__quarter-text--selected": l ? e.isSelectedQuarter(s, t, l) : void 0,
          "react-datepicker__quarter-text--keyboard-selected": !v && p && e.isSelectedQuarter(s, t, p) && !w,
          "react-datepicker__quarter-text--in-selecting-range": e.isInSelectingRangeQuarter(t),
          "react-datepicker__quarter-text--in-range": i && o ? A1(i, o, t, s) : void 0,
          "react-datepicker__quarter-text--range-start": e.isRangeStartQuarter(t),
          "react-datepicker__quarter-text--range-end": e.isRangeEndQuarter(t),
          "react-datepicker__quarter-text--today": e.isCurrentQuarter(s, t)
        });
      }, e.getMonthContent = function(t) {
        var a = e.props, s = a.showFullMonthYearPicker, i = a.renderMonthContent, o = a.locale, l = a.day, c = K5(t, o), d = R3(t, o);
        return i ? i(t, c, d, l) : s ? d : c;
      }, e.getQuarterContent = function(t) {
        var a, s = e.props, i = s.renderQuarterContent, o = s.locale, l = qa(t, o);
        return (a = i == null ? void 0 : i(t, l)) !== null && a !== void 0 ? a : l;
      }, e.renderMonths = function() {
        var t, a = e.props, s = a.showTwoColumnMonthYearPicker, i = a.showFourColumnMonthYearPicker, o = a.day, l = a.selected, c = (t = q4[B7(i, s)]) === null || t === void 0 ? void 0 : t.grid;
        return c == null ? void 0 : c.map(function(d, u) {
          return g.createElement("div", { className: "react-datepicker__month-wrapper", key: u }, d.map(function(C, f) {
            return g.createElement("div", { ref: e.MONTH_REFS[C], key: f, onClick: function(p) {
              e.onMonthClick(p, C);
            }, onKeyDown: function(p) {
              e8(p) && (p.preventDefault(), p.key = _.Enter), e.onMonthKeyDown(p, C);
            }, onMouseEnter: e.props.usePointerEvent ? void 0 : function() {
              return e.onMonthMouseEnter(C);
            }, onPointerEnter: e.props.usePointerEvent ? function() {
              return e.onMonthMouseEnter(C);
            } : void 0, tabIndex: Number(e.getTabIndex(C)), className: e.getMonthClassNames(C), "aria-disabled": e.isMonthDisabled(C), role: "option", "aria-label": e.getAriaLabel(C), "aria-current": e.isCurrentMonth(o, C) ? "date" : void 0, "aria-selected": l ? e.isSelectedMonth(o, C, l) : void 0 }, e.getMonthContent(C));
          }));
        });
      }, e.renderQuarters = function() {
        var t = e.props, a = t.day, s = t.selected, i = [1, 2, 3, 4];
        return g.createElement("div", { className: "react-datepicker__quarter-wrapper" }, i.map(function(o, l) {
          return g.createElement("div", { key: l, ref: e.QUARTER_REFS[l], role: "option", onClick: function(c) {
            e.onQuarterClick(c, o);
          }, onKeyDown: function(c) {
            e.onQuarterKeyDown(c, o);
          }, onMouseEnter: e.props.usePointerEvent ? void 0 : function() {
            return e.onQuarterMouseEnter(o);
          }, onPointerEnter: e.props.usePointerEvent ? function() {
            return e.onQuarterMouseEnter(o);
          } : void 0, className: e.getQuarterClassNames(o), "aria-selected": s ? e.isSelectedQuarter(a, o, s) : void 0, tabIndex: Number(e.getQuarterTabIndex(o)), "aria-current": e.isCurrentQuarter(a, o) ? "date" : void 0 }, e.getQuarterContent(o));
        }));
      }, e.getClassNames = function() {
        var t = e.props, a = t.selectingDate, s = t.selectsStart, i = t.selectsEnd, o = t.showMonthYearPicker, l = t.showQuarterYearPicker, c = t.showWeekPicker;
        return g2("react-datepicker__month", {
          "react-datepicker__month--selecting-range": a && (s || i)
        }, { "react-datepicker__monthPicker": o }, { "react-datepicker__quarterPicker": l }, { "react-datepicker__weekPicker": c });
      }, e;
    }
    return n.prototype.getSelection = function() {
      var e = this.props, t = e.selected, a = e.selectedDates, s = e.selectsMultiple;
      if (s)
        return a;
      if (t)
        return [t];
    }, n.prototype.render = function() {
      var e = this.props, t = e.showMonthYearPicker, a = e.showQuarterYearPicker, s = e.day, i = e.ariaLabelPrefix, o = i === void 0 ? "Month " : i, l = o ? o.trim() + " " : "", c = t || a;
      return c ? g.createElement("div", { className: this.getClassNames(), onMouseLeave: this.props.usePointerEvent ? void 0 : this.handleMouseLeave, onPointerLeave: this.props.usePointerEvent ? this.handleMouseLeave : void 0, "aria-label": "".concat(l).concat(J(s, "MMMM, yyyy", this.props.locale)), role: "listbox" }, t ? this.renderMonths() : this.renderQuarters()) : g.createElement(
        "div",
        { role: "table" },
        this.props.dayNamesHeader && g.createElement("div", { role: "rowgroup" }, this.props.dayNamesHeader),
        g.createElement("div", { className: this.getClassNames(), onMouseLeave: this.props.usePointerEvent ? void 0 : this.handleMouseLeave, onPointerLeave: this.props.usePointerEvent ? this.handleMouseLeave : void 0, "aria-label": "".concat(l).concat(J(s, "MMMM, yyyy", this.props.locale)), role: "rowgroup" }, this.renderWeeks())
      );
    }, n;
  }(v2)
), ds = (
  /** @class */
  function(r) {
    M2(n, r);
    function n() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.monthOptionButtonsRef = {}, e.isSelectedMonth = function(t) {
        return e.props.month === t;
      }, e.handleOptionKeyDown = function(t, a) {
        var s;
        switch (a.key) {
          case "Enter":
            a.preventDefault(), e.onChange(t);
            break;
          case "Escape":
            a.preventDefault(), e.props.onCancel();
            break;
          case "ArrowUp":
          case "ArrowDown": {
            a.preventDefault();
            var i = (t + (a.key === "ArrowUp" ? -1 : 1) + e.props.monthNames.length) % e.props.monthNames.length;
            (s = e.monthOptionButtonsRef[i]) === null || s === void 0 || s.focus();
            break;
          }
        }
      }, e.renderOptions = function() {
        return e.monthOptionButtonsRef = {}, e.props.monthNames.map(function(t, a) {
          return g.createElement(
            "div",
            { ref: function(s) {
              e.monthOptionButtonsRef[a] = s, e.isSelectedMonth(a) && (s == null || s.focus());
            }, role: "button", tabIndex: 0, className: e.isSelectedMonth(a) ? "react-datepicker__month-option react-datepicker__month-option--selected_month" : "react-datepicker__month-option", key: t, onClick: e.onChange.bind(e, a), onKeyDown: e.handleOptionKeyDown.bind(e, a), "aria-selected": e.isSelectedMonth(a) ? "true" : void 0 },
            e.isSelectedMonth(a) ? g.createElement("span", { className: "react-datepicker__month-option--selected" }, "✓") : "",
            t
          );
        });
      }, e.onChange = function(t) {
        return e.props.onChange(t);
      }, e.handleClickOutside = function() {
        return e.props.onCancel();
      }, e;
    }
    return n.prototype.render = function() {
      return g.createElement(P4, { className: "react-datepicker__month-dropdown", onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, n;
  }(v2)
), us = (
  /** @class */
  function(r) {
    M2(n, r);
    function n() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.state = {
        dropdownVisible: !1
      }, e.renderSelectOptions = function(t) {
        return t.map(function(a, s) {
          return g.createElement("option", { key: a, value: s }, a);
        });
      }, e.renderSelectMode = function(t) {
        return g.createElement("select", { value: e.props.month, className: "react-datepicker__month-select", onChange: function(a) {
          return e.onChange(parseInt(a.target.value));
        } }, e.renderSelectOptions(t));
      }, e.renderReadView = function(t, a) {
        return g.createElement(
          "button",
          { key: "read", type: "button", style: { visibility: t ? "visible" : "hidden" }, className: "react-datepicker__month-read-view", onClick: e.toggleDropdown },
          g.createElement("span", { className: "react-datepicker__month-read-view--down-arrow" }),
          g.createElement("span", { className: "react-datepicker__month-read-view--selected-month" }, a[e.props.month])
        );
      }, e.renderDropdown = function(t) {
        return g.createElement(ds, Y({ key: "dropdown" }, e.props, { monthNames: t, onChange: e.onChange, onCancel: e.toggleDropdown }));
      }, e.renderScrollMode = function(t) {
        var a = e.state.dropdownVisible, s = [e.renderReadView(!a, t)];
        return a && s.unshift(e.renderDropdown(t)), s;
      }, e.onChange = function(t) {
        e.toggleDropdown(), t !== e.props.month && e.props.onChange(t);
      }, e.toggleDropdown = function() {
        return e.setState({
          dropdownVisible: !e.state.dropdownVisible
        });
      }, e;
    }
    return n.prototype.render = function() {
      var e = this, t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(this.props.useShortMonthInDropdown ? function(s) {
        return K5(s, e.props.locale);
      } : function(s) {
        return R3(s, e.props.locale);
      }), a;
      switch (this.props.dropdownMode) {
        case "scroll":
          a = this.renderScrollMode(t);
          break;
        case "select":
          a = this.renderSelectMode(t);
          break;
      }
      return g.createElement("div", { className: "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(this.props.dropdownMode) }, a);
    }, n;
  }(v2)
);
function hs(r, n) {
  for (var e = [], t = a0(r), a = a0(n); !w0(t, a); )
    e.push(K(t)), t = N2(t, 1);
  return e;
}
var Cs = (
  /** @class */
  function(r) {
    M2(n, r);
    function n(e) {
      var t = r.call(this, e) || this;
      return t.renderOptions = function() {
        return t.state.monthYearsList.map(function(a) {
          var s = p3(a), i = R2(t.props.date, a) && _2(t.props.date, a);
          return g.createElement(
            "div",
            { className: i ? "react-datepicker__month-year-option--selected_month-year" : "react-datepicker__month-year-option", key: s, onClick: t.onChange.bind(t, s), "aria-selected": i ? "true" : void 0 },
            i ? g.createElement("span", { className: "react-datepicker__month-year-option--selected" }, "✓") : "",
            J(a, t.props.dateFormat, t.props.locale)
          );
        });
      }, t.onChange = function(a) {
        return t.props.onChange(a);
      }, t.handleClickOutside = function() {
        t.props.onCancel();
      }, t.state = {
        monthYearsList: hs(t.props.minDate, t.props.maxDate)
      }, t;
    }
    return n.prototype.render = function() {
      var e = g2({
        "react-datepicker__month-year-dropdown": !0,
        "react-datepicker__month-year-dropdown--scrollable": this.props.scrollableMonthYearDropdown
      });
      return g.createElement(P4, { className: e, onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, n;
  }(v2)
), fs = (
  /** @class */
  function(r) {
    M2(n, r);
    function n() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.state = {
        dropdownVisible: !1
      }, e.renderSelectOptions = function() {
        for (var t = a0(e.props.minDate), a = a0(e.props.maxDate), s = []; !w0(t, a); ) {
          var i = p3(t);
          s.push(g.createElement("option", { key: i, value: i }, J(t, e.props.dateFormat, e.props.locale))), t = N2(t, 1);
        }
        return s;
      }, e.onSelectChange = function(t) {
        e.onChange(parseInt(t.target.value));
      }, e.renderSelectMode = function() {
        return g.createElement("select", { value: p3(a0(e.props.date)), className: "react-datepicker__month-year-select", onChange: e.onSelectChange }, e.renderSelectOptions());
      }, e.renderReadView = function(t) {
        var a = J(e.props.date, e.props.dateFormat, e.props.locale);
        return g.createElement(
          "div",
          { key: "read", style: { visibility: t ? "visible" : "hidden" }, className: "react-datepicker__month-year-read-view", onClick: e.toggleDropdown },
          g.createElement("span", { className: "react-datepicker__month-year-read-view--down-arrow" }),
          g.createElement("span", { className: "react-datepicker__month-year-read-view--selected-month-year" }, a)
        );
      }, e.renderDropdown = function() {
        return g.createElement(Cs, Y({ key: "dropdown" }, e.props, { onChange: e.onChange, onCancel: e.toggleDropdown }));
      }, e.renderScrollMode = function() {
        var t = e.state.dropdownVisible, a = [e.renderReadView(!t)];
        return t && a.unshift(e.renderDropdown()), a;
      }, e.onChange = function(t) {
        e.toggleDropdown();
        var a = K(t);
        R2(e.props.date, a) && _2(e.props.date, a) || e.props.onChange(a);
      }, e.toggleDropdown = function() {
        return e.setState({
          dropdownVisible: !e.state.dropdownVisible
        });
      }, e;
    }
    return n.prototype.render = function() {
      var e;
      switch (this.props.dropdownMode) {
        case "scroll":
          e = this.renderScrollMode();
          break;
        case "select":
          e = this.renderSelectMode();
          break;
      }
      return g.createElement("div", { className: "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(this.props.dropdownMode) }, e);
    }, n;
  }(v2)
), ps = (
  /** @class */
  function(r) {
    M2(n, r);
    function n() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.state = {
        height: null
      }, e.scrollToTheSelectedTime = function() {
        requestAnimationFrame(function() {
          var t, a, s;
          e.list && (e.list.scrollTop = (s = e.centerLi && n.calcCenterPosition(e.props.monthRef ? e.props.monthRef.clientHeight - ((a = (t = e.header) === null || t === void 0 ? void 0 : t.clientHeight) !== null && a !== void 0 ? a : 0) : e.list.clientHeight, e.centerLi)) !== null && s !== void 0 ? s : 0);
        });
      }, e.handleClick = function(t) {
        var a, s;
        (e.props.minTime || e.props.maxTime) && O7(t, e.props) || (e.props.excludeTimes || e.props.includeTimes || e.props.filterTime) && T7(t, e.props) || (s = (a = e.props).onChange) === null || s === void 0 || s.call(a, t);
      }, e.isSelectedTime = function(t) {
        return e.props.selected && rs(e.props.selected, t);
      }, e.isDisabledTime = function(t) {
        return (e.props.minTime || e.props.maxTime) && O7(t, e.props) || (e.props.excludeTimes || e.props.includeTimes || e.props.filterTime) && T7(t, e.props);
      }, e.liClasses = function(t) {
        var a, s = [
          "react-datepicker__time-list-item",
          e.props.timeClassName ? e.props.timeClassName(t) : void 0
        ];
        return e.isSelectedTime(t) && s.push("react-datepicker__time-list-item--selected"), e.isDisabledTime(t) && s.push("react-datepicker__time-list-item--disabled"), e.props.injectTimes && (n0(t) * 3600 + r0(t) * 60 + p0(t)) % (((a = e.props.intervals) !== null && a !== void 0 ? a : n.defaultProps.intervals) * 60) !== 0 && s.push("react-datepicker__time-list-item--injected"), s.join(" ");
      }, e.handleOnKeyDown = function(t, a) {
        var s, i;
        t.key === _.Space && (t.preventDefault(), t.key = _.Enter), (t.key === _.ArrowUp || t.key === _.ArrowLeft) && t.target instanceof HTMLElement && t.target.previousSibling && (t.preventDefault(), t.target.previousSibling instanceof HTMLElement && t.target.previousSibling.focus()), (t.key === _.ArrowDown || t.key === _.ArrowRight) && t.target instanceof HTMLElement && t.target.nextSibling && (t.preventDefault(), t.target.nextSibling instanceof HTMLElement && t.target.nextSibling.focus()), t.key === _.Enter && e.handleClick(a), (i = (s = e.props).handleOnKeyDown) === null || i === void 0 || i.call(s, t);
      }, e.renderTimes = function() {
        for (var t, a = [], s = typeof e.props.format == "string" ? e.props.format : "p", i = (t = e.props.intervals) !== null && t !== void 0 ? t : n.defaultProps.intervals, o = e.props.selected || e.props.openToDate || K(), l = K1(o), c = e.props.injectTimes && e.props.injectTimes.sort(function(m, w) {
          return m.getTime() - w.getTime();
        }), d = 60 * ns(o), u = d / i, C = 0; C < u; C++) {
          var f = h3(l, C * i);
          if (a.push(f), c) {
            var p = ts(l, f, C, i, c);
            a = a.concat(p);
          }
        }
        var v = a.reduce(function(m, w) {
          return w.getTime() <= o.getTime() ? w : m;
        }, a[0]);
        return a.map(function(m) {
          return g.createElement("li", { key: m.valueOf(), onClick: e.handleClick.bind(e, m), className: e.liClasses(m), ref: function(w) {
            m === v && (e.centerLi = w);
          }, onKeyDown: function(w) {
            e.handleOnKeyDown(w, m);
          }, tabIndex: m === v ? 0 : -1, role: "option", "aria-selected": e.isSelectedTime(m) ? "true" : void 0, "aria-disabled": e.isDisabledTime(m) ? "true" : void 0 }, J(m, s, e.props.locale));
        });
      }, e.renderTimeCaption = function() {
        return e.props.showTimeCaption === !1 ? g.createElement(g.Fragment, null) : g.createElement(
          "div",
          { className: "react-datepicker__header react-datepicker__header--time ".concat(e.props.showTimeSelectOnly ? "react-datepicker__header--time--only" : ""), ref: function(t) {
            e.header = t;
          } },
          g.createElement("div", { className: "react-datepicker-time__header" }, e.props.timeCaption)
        );
      }, e;
    }
    return Object.defineProperty(n, "defaultProps", {
      get: function() {
        return {
          intervals: 30,
          todayButton: null,
          timeCaption: "Time",
          showTimeCaption: !0
        };
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.componentDidMount = function() {
      this.scrollToTheSelectedTime(), this.observeDatePickerHeightChanges();
    }, n.prototype.componentWillUnmount = function() {
      var e;
      (e = this.resizeObserver) === null || e === void 0 || e.disconnect();
    }, n.prototype.observeDatePickerHeightChanges = function() {
      var e = this, t = this.props.monthRef;
      this.updateContainerHeight(), t && (this.resizeObserver = new ResizeObserver(function() {
        e.updateContainerHeight();
      }), this.resizeObserver.observe(t));
    }, n.prototype.updateContainerHeight = function() {
      this.props.monthRef && this.header && this.setState({
        height: this.props.monthRef.clientHeight - this.header.clientHeight
      });
    }, n.prototype.render = function() {
      var e = this, t, a = this.state.height;
      return g.createElement(
        "div",
        { className: "react-datepicker__time-container ".concat(((t = this.props.todayButton) !== null && t !== void 0 ? t : n.defaultProps.todayButton) ? "react-datepicker__time-container--with-today-button" : "") },
        this.renderTimeCaption(),
        g.createElement(
          "div",
          { className: "react-datepicker__time" },
          g.createElement(
            "div",
            { className: "react-datepicker__time-box" },
            g.createElement("ul", { className: "react-datepicker__time-list", ref: function(s) {
              e.list = s;
            }, style: a ? { height: a } : {}, role: "listbox", "aria-label": this.props.timeCaption }, this.renderTimes())
          )
        )
      );
    }, n.calcCenterPosition = function(e, t) {
      return t.offsetTop - (e / 2 - t.clientHeight / 2);
    }, n;
  }(v2)
), Y7 = 3, ms = (
  /** @class */
  function(r) {
    M2(n, r);
    function n(e) {
      var t = r.call(this, e) || this;
      return t.YEAR_REFS = W2([], Array(t.props.yearItemNumber), !0).map(function() {
        return v0();
      }), t.isDisabled = function(a) {
        return T2(a, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.isExcluded = function(a) {
        return j3(a, {
          excludeDates: t.props.excludeDates
        });
      }, t.selectingDate = function() {
        var a;
        return (a = t.props.selectingDate) !== null && a !== void 0 ? a : t.props.preSelection;
      }, t.updateFocusOnPaginate = function(a) {
        var s = function() {
          var i, o;
          (o = (i = t.YEAR_REFS[a]) === null || i === void 0 ? void 0 : i.current) === null || o === void 0 || o.focus();
        };
        window.requestAnimationFrame(s);
      }, t.handleYearClick = function(a, s) {
        t.props.onDayClick && t.props.onDayClick(a, s);
      }, t.handleYearNavigation = function(a, s) {
        var i, o, l, c, d = t.props, u = d.date, C = d.yearItemNumber;
        if (!(u === void 0 || C === void 0)) {
          var f = J2(u, C).startPeriod;
          t.isDisabled(s) || t.isExcluded(s) || ((o = (i = t.props).setPreSelection) === null || o === void 0 || o.call(i, s), a - f < 0 ? t.updateFocusOnPaginate(C - (f - a)) : a - f >= C ? t.updateFocusOnPaginate(Math.abs(C - (a - f))) : (c = (l = t.YEAR_REFS[a - f]) === null || l === void 0 ? void 0 : l.current) === null || c === void 0 || c.focus());
        }
      }, t.isSameDay = function(a, s) {
        return B(a, s);
      }, t.isCurrentYear = function(a) {
        return a === j(K());
      }, t.isRangeStart = function(a) {
        return t.props.startDate && t.props.endDate && R2(V2(K(), a), t.props.startDate);
      }, t.isRangeEnd = function(a) {
        return t.props.startDate && t.props.endDate && R2(V2(K(), a), t.props.endDate);
      }, t.isInRange = function(a) {
        return j1(a, t.props.startDate, t.props.endDate);
      }, t.isInSelectingRange = function(a) {
        var s = t.props, i = s.selectsStart, o = s.selectsEnd, l = s.selectsRange, c = s.startDate, d = s.endDate;
        return !(i || o || l) || !t.selectingDate() ? !1 : i && d ? j1(a, t.selectingDate(), d) : o && c || l && c && !d ? j1(a, c, t.selectingDate()) : !1;
      }, t.isSelectingRangeStart = function(a) {
        var s;
        if (!t.isInSelectingRange(a))
          return !1;
        var i = t.props, o = i.startDate, l = i.selectsStart, c = V2(K(), a);
        return l ? R2(c, (s = t.selectingDate()) !== null && s !== void 0 ? s : null) : R2(c, o ?? null);
      }, t.isSelectingRangeEnd = function(a) {
        var s;
        if (!t.isInSelectingRange(a))
          return !1;
        var i = t.props, o = i.endDate, l = i.selectsEnd, c = i.selectsRange, d = V2(K(), a);
        return l || c ? R2(d, (s = t.selectingDate()) !== null && s !== void 0 ? s : null) : R2(d, o ?? null);
      }, t.isKeyboardSelected = function(a) {
        if (!(t.props.disabledKeyboardNavigation || t.props.date === void 0 || t.props.preSelection == null)) {
          var s = t.props, i = s.minDate, o = s.maxDate, l = s.excludeDates, c = s.includeDates, d = s.filterDate, u = s.selected, C = _1(V2(t.props.date, a)), f = (i || o || l || c || d) && Q1(a, t.props), p = !!u && B(C, _1(u)), v = B(C, _1(t.props.preSelection));
          return !t.props.inline && !p && v && !f;
        }
      }, t.isSelectedYear = function(a) {
        var s = t.props, i = s.selectsMultiple, o = s.selected, l = s.selectedDates;
        return i ? l == null ? void 0 : l.some(function(c) {
          return a === j(c);
        }) : !!o && a === j(o);
      }, t.onYearClick = function(a, s) {
        var i = t.props.date;
        i !== void 0 && t.handleYearClick(_1(V2(i, s)), a);
      }, t.onYearKeyDown = function(a, s) {
        var i, o, l = a.key, c = t.props, d = c.date, u = c.yearItemNumber, C = c.handleOnKeyDown;
        if (l !== _.Tab && a.preventDefault(), !t.props.disabledKeyboardNavigation)
          switch (l) {
            case _.Enter:
              if (t.props.selected == null)
                break;
              t.onYearClick(a, s), (o = (i = t.props).setPreSelection) === null || o === void 0 || o.call(i, t.props.selected);
              break;
            case _.ArrowRight:
              if (t.props.preSelection == null)
                break;
              t.handleYearNavigation(s + 1, e0(t.props.preSelection, 1));
              break;
            case _.ArrowLeft:
              if (t.props.preSelection == null)
                break;
              t.handleYearNavigation(s - 1, o1(t.props.preSelection, 1));
              break;
            case _.ArrowUp: {
              if (d === void 0 || u === void 0 || t.props.preSelection == null)
                break;
              var f = J2(d, u).startPeriod, p = Y7, v = s - p;
              if (v < f) {
                var m = u % p;
                s >= f && s < f + m ? p = m : p += m, v = s - p;
              }
              t.handleYearNavigation(v, o1(t.props.preSelection, p));
              break;
            }
            case _.ArrowDown: {
              if (d === void 0 || u === void 0 || t.props.preSelection == null)
                break;
              var w = J2(d, u).endPeriod, p = Y7, v = s + p;
              if (v > w) {
                var m = u % p;
                s <= w && s > w - m ? p = m : p += m, v = s + p;
              }
              t.handleYearNavigation(v, e0(t.props.preSelection, p));
              break;
            }
          }
        C && C(a);
      }, t.getYearClassNames = function(a) {
        var s = t.props, i = s.date, o = s.disabled, l = s.minDate, c = s.maxDate, d = s.excludeDates, u = s.includeDates, C = s.filterDate, f = s.yearClassName;
        return g2("react-datepicker__year-text", "react-datepicker__year-".concat(a), i ? f == null ? void 0 : f(V2(i, a)) : void 0, {
          "react-datepicker__year-text--selected": t.isSelectedYear(a),
          "react-datepicker__year-text--disabled": (l || c || d || u || C || o) && Q1(a, t.props),
          "react-datepicker__year-text--keyboard-selected": t.isKeyboardSelected(a),
          "react-datepicker__year-text--range-start": t.isRangeStart(a),
          "react-datepicker__year-text--range-end": t.isRangeEnd(a),
          "react-datepicker__year-text--in-range": t.isInRange(a),
          "react-datepicker__year-text--in-selecting-range": t.isInSelectingRange(a),
          "react-datepicker__year-text--selecting-range-start": t.isSelectingRangeStart(a),
          "react-datepicker__year-text--selecting-range-end": t.isSelectingRangeEnd(a),
          "react-datepicker__year-text--today": t.isCurrentYear(a)
        });
      }, t.getYearTabIndex = function(a) {
        if (t.props.disabledKeyboardNavigation || t.props.preSelection == null)
          return "-1";
        var s = j(t.props.preSelection), i = Q1(a, t.props);
        return a === s && !i ? "0" : "-1";
      }, t.getYearContent = function(a) {
        return t.props.renderYearContent ? t.props.renderYearContent(a) : a;
      }, t;
    }
    return n.prototype.render = function() {
      var e = this, t = [], a = this.props, s = a.date, i = a.yearItemNumber, o = a.onYearMouseEnter, l = a.onYearMouseLeave;
      if (s === void 0)
        return null;
      for (var c = J2(s, i), d = c.startPeriod, u = c.endPeriod, C = function(v) {
        t.push(g.createElement("div", { ref: f.YEAR_REFS[v - d], onClick: function(m) {
          e.onYearClick(m, v);
        }, onKeyDown: function(m) {
          e8(m) && (m.preventDefault(), m.key = _.Enter), e.onYearKeyDown(m, v);
        }, tabIndex: Number(f.getYearTabIndex(v)), className: f.getYearClassNames(v), onMouseEnter: f.props.usePointerEvent ? void 0 : function(m) {
          return o(m, v);
        }, onPointerEnter: f.props.usePointerEvent ? function(m) {
          return o(m, v);
        } : void 0, onMouseLeave: f.props.usePointerEvent ? void 0 : function(m) {
          return l(m, v);
        }, onPointerLeave: f.props.usePointerEvent ? function(m) {
          return l(m, v);
        } : void 0, key: v, "aria-current": f.isCurrentYear(v) ? "date" : void 0 }, f.getYearContent(v)));
      }, f = this, p = d; p <= u; p++)
        C(p);
      return g.createElement(
        "div",
        { className: "react-datepicker__year" },
        g.createElement("div", { className: "react-datepicker__year-wrapper", onMouseLeave: this.props.usePointerEvent ? void 0 : this.props.clearSelectingDate, onPointerLeave: this.props.usePointerEvent ? this.props.clearSelectingDate : void 0 }, t)
      );
    }, n;
  }(v2)
);
function gs(r, n, e, t) {
  for (var a = [], s = 0; s < 2 * n + 1; s++) {
    var i = r + n - s, o = !0;
    e && (o = j(e) <= i), t && o && (o = j(t) >= i), o && a.push(i);
  }
  return a;
}
var vs = (
  /** @class */
  function(r) {
    M2(n, r);
    function n(e) {
      var t = r.call(this, e) || this;
      t.yearOptionButtonsRef = {}, t.handleOptionKeyDown = function(o, l) {
        var c;
        switch (l.key) {
          case "Enter":
            l.preventDefault(), t.onChange(o);
            break;
          case "Escape":
            l.preventDefault(), t.props.onCancel();
            break;
          case "ArrowUp":
          case "ArrowDown": {
            l.preventDefault();
            var d = o + (l.key === "ArrowUp" ? 1 : -1);
            t.yearOptionButtonsRef[d] && ((c = t.yearOptionButtonsRef[d]) === null || c === void 0 || c.focus());
            break;
          }
        }
      }, t.renderOptions = function() {
        t.yearOptionButtonsRef = {};
        var o = t.props.year, l = t.state.yearsList.map(function(u) {
          return g.createElement(
            "div",
            { ref: function(C) {
              t.yearOptionButtonsRef[u] = C, u === o && (C == null || C.focus());
            }, role: "button", tabIndex: 0, className: o === u ? "react-datepicker__year-option react-datepicker__year-option--selected_year" : "react-datepicker__year-option", key: u, onClick: t.onChange.bind(t, u), onKeyDown: t.handleOptionKeyDown.bind(t, u), "aria-selected": o === u ? "true" : void 0 },
            o === u ? g.createElement("span", { className: "react-datepicker__year-option--selected" }, "✓") : "",
            u
          );
        }), c = t.props.minDate ? j(t.props.minDate) : null, d = t.props.maxDate ? j(t.props.maxDate) : null;
        return (!d || !t.state.yearsList.find(function(u) {
          return u === d;
        })) && l.unshift(g.createElement(
          "div",
          { className: "react-datepicker__year-option", key: "upcoming", onClick: t.incrementYears },
          g.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming" })
        )), (!c || !t.state.yearsList.find(function(u) {
          return u === c;
        })) && l.push(g.createElement(
          "div",
          { className: "react-datepicker__year-option", key: "previous", onClick: t.decrementYears },
          g.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous" })
        )), l;
      }, t.onChange = function(o) {
        t.props.onChange(o);
      }, t.handleClickOutside = function() {
        t.props.onCancel();
      }, t.shiftYears = function(o) {
        var l = t.state.yearsList.map(function(c) {
          return c + o;
        });
        t.setState({
          yearsList: l
        });
      }, t.incrementYears = function() {
        return t.shiftYears(1);
      }, t.decrementYears = function() {
        return t.shiftYears(-1);
      };
      var a = e.yearDropdownItemNumber, s = e.scrollableYearDropdown, i = a || (s ? 10 : 5);
      return t.state = {
        yearsList: gs(t.props.year, i, t.props.minDate, t.props.maxDate)
      }, t.dropdownRef = v0(), t;
    }
    return n.prototype.componentDidMount = function() {
      var e = this.dropdownRef.current;
      if (e) {
        var t = e.children ? Array.from(e.children) : null, a = t ? t.find(function(s) {
          return s.ariaSelected;
        }) : null;
        e.scrollTop = a && a instanceof HTMLElement ? a.offsetTop + (a.clientHeight - e.clientHeight) / 2 : (e.scrollHeight - e.clientHeight) / 2;
      }
    }, n.prototype.render = function() {
      var e = g2({
        "react-datepicker__year-dropdown": !0,
        "react-datepicker__year-dropdown--scrollable": this.props.scrollableYearDropdown
      });
      return g.createElement(P4, { className: e, containerRef: this.dropdownRef, onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, n;
  }(v2)
), Ms = (
  /** @class */
  function(r) {
    M2(n, r);
    function n() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.state = {
        dropdownVisible: !1
      }, e.renderSelectOptions = function() {
        for (var t = e.props.minDate ? j(e.props.minDate) : 1900, a = e.props.maxDate ? j(e.props.maxDate) : 2100, s = [], i = t; i <= a; i++)
          s.push(g.createElement("option", { key: i, value: i }, i));
        return s;
      }, e.onSelectChange = function(t) {
        e.onChange(parseInt(t.target.value));
      }, e.renderSelectMode = function() {
        return g.createElement("select", { value: e.props.year, className: "react-datepicker__year-select", onChange: e.onSelectChange }, e.renderSelectOptions());
      }, e.renderReadView = function(t) {
        return g.createElement(
          "button",
          { key: "read", type: "button", style: { visibility: t ? "visible" : "hidden" }, className: "react-datepicker__year-read-view", onClick: e.toggleDropdown },
          g.createElement("span", { className: "react-datepicker__year-read-view--down-arrow" }),
          g.createElement("span", { className: "react-datepicker__year-read-view--selected-year" }, e.props.year)
        );
      }, e.renderDropdown = function() {
        return g.createElement(vs, Y({ key: "dropdown" }, e.props, { onChange: e.onChange, onCancel: e.toggleDropdown }));
      }, e.renderScrollMode = function() {
        var t = e.state.dropdownVisible, a = [e.renderReadView(!t)];
        return t && a.unshift(e.renderDropdown()), a;
      }, e.onChange = function(t) {
        e.toggleDropdown(), t !== e.props.year && e.props.onChange(t);
      }, e.toggleDropdown = function(t) {
        e.setState({
          dropdownVisible: !e.state.dropdownVisible
        }, function() {
          e.props.adjustDateOnChange && e.handleYearChange(e.props.date, t);
        });
      }, e.handleYearChange = function(t, a) {
        var s;
        (s = e.onSelect) === null || s === void 0 || s.call(e, t, a), e.setOpen();
      }, e.onSelect = function(t, a) {
        var s, i;
        (i = (s = e.props).onSelect) === null || i === void 0 || i.call(s, t, a);
      }, e.setOpen = function() {
        var t, a;
        (a = (t = e.props).setOpen) === null || a === void 0 || a.call(t, !0);
      }, e;
    }
    return n.prototype.render = function() {
      var e;
      switch (this.props.dropdownMode) {
        case "scroll":
          e = this.renderScrollMode();
          break;
        case "select":
          e = this.renderSelectMode();
          break;
      }
      return g.createElement("div", { className: "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(this.props.dropdownMode) }, e);
    }, n;
  }(v2)
), ys = [
  "react-datepicker__year-select",
  "react-datepicker__month-select",
  "react-datepicker__month-year-select"
], t8 = "react-datepicker-ignore-onclickoutside", ws = function(r) {
  var n = (r.className || "").split(/\s+/);
  return ys.some(function(e) {
    return n.indexOf(e) >= 0;
  });
}, bs = (
  /** @class */
  function(r) {
    M2(n, r);
    function n(e) {
      var t = r.call(this, e) || this;
      return t.monthContainer = void 0, t.handleClickOutside = function(a) {
        t.props.onClickOutside(a);
      }, t.setClickOutsideRef = function() {
        return t.containerRef.current;
      }, t.handleDropdownFocus = function(a) {
        var s, i;
        ws(a.target) && ((i = (s = t.props).onDropdownFocus) === null || i === void 0 || i.call(s, a));
      }, t.getDateInView = function() {
        var a = t.props, s = a.preSelection, i = a.selected, o = a.openToDate, l = X5(t.props), c = J5(t.props), d = K(), u = o || i || s;
        return u || (l && U2(d, l) ? l : c && w0(d, c) ? c : d);
      }, t.increaseMonth = function() {
        t.setState(function(a) {
          var s = a.date;
          return {
            date: N2(s, 1)
          };
        }, function() {
          return t.handleMonthChange(t.state.date);
        });
      }, t.decreaseMonth = function() {
        t.setState(function(a) {
          var s = a.date;
          return {
            date: E0(s, 1)
          };
        }, function() {
          return t.handleMonthChange(t.state.date);
        });
      }, t.handleDayClick = function(a, s, i) {
        t.props.onSelect(a, s, i), t.props.setPreSelection && t.props.setPreSelection(a);
      }, t.handleDayMouseEnter = function(a) {
        t.setState({ selectingDate: a }), t.props.onDayMouseEnter && t.props.onDayMouseEnter(a);
      }, t.handleMonthMouseLeave = function() {
        t.setState({ selectingDate: void 0 }), t.props.onMonthMouseLeave && t.props.onMonthMouseLeave();
      }, t.handleYearMouseEnter = function(a, s) {
        t.setState({ selectingDate: V2(K(), s) }), t.props.onYearMouseEnter && t.props.onYearMouseEnter(a, s);
      }, t.handleYearMouseLeave = function(a, s) {
        t.props.onYearMouseLeave && t.props.onYearMouseLeave(a, s);
      }, t.handleYearChange = function(a) {
        var s, i, o, l;
        (i = (s = t.props).onYearChange) === null || i === void 0 || i.call(s, a), t.setState({ isRenderAriaLiveMessage: !0 }), t.props.adjustDateOnChange && (t.props.onSelect(a), (l = (o = t.props).setOpen) === null || l === void 0 || l.call(o, !0)), t.props.setPreSelection && t.props.setPreSelection(a);
      }, t.getEnabledPreSelectionDateForMonth = function(a) {
        if (!T2(a, t.props))
          return a;
        for (var s = a0(a), i = Ya(a), o = X9(i, s), l = null, c = 0; c <= o; c++) {
          var d = I2(s, c);
          if (!T2(d, t.props)) {
            l = d;
            break;
          }
        }
        return l;
      }, t.handleMonthChange = function(a) {
        var s, i, o, l = (s = t.getEnabledPreSelectionDateForMonth(a)) !== null && s !== void 0 ? s : a;
        t.handleCustomMonthChange(l), t.props.adjustDateOnChange && (t.props.onSelect(l), (o = (i = t.props).setOpen) === null || o === void 0 || o.call(i, !0)), t.props.setPreSelection && t.props.setPreSelection(l);
      }, t.handleCustomMonthChange = function(a) {
        var s, i;
        (i = (s = t.props).onMonthChange) === null || i === void 0 || i.call(s, a), t.setState({ isRenderAriaLiveMessage: !0 });
      }, t.handleMonthYearChange = function(a) {
        t.handleYearChange(a), t.handleMonthChange(a);
      }, t.changeYear = function(a) {
        t.setState(function(s) {
          var i = s.date;
          return {
            date: V2(i, Number(a))
          };
        }, function() {
          return t.handleYearChange(t.state.date);
        });
      }, t.changeMonth = function(a) {
        t.setState(function(s) {
          var i = s.date;
          return {
            date: D2(i, Number(a))
          };
        }, function() {
          return t.handleMonthChange(t.state.date);
        });
      }, t.changeMonthYear = function(a) {
        t.setState(function(s) {
          var i = s.date;
          return {
            date: V2(D2(i, y2(a)), j(a))
          };
        }, function() {
          return t.handleMonthYearChange(t.state.date);
        });
      }, t.header = function(a) {
        a === void 0 && (a = t.state.date);
        var s = t.props.disabled, i = m0(a, t.props.locale, t.props.calendarStartDay), o = [];
        return t.props.showWeekNumbers && o.push(g.createElement(
          "div",
          { key: "W", className: "react-datepicker__day-name ".concat(s ? "react-datepicker__day-name--disabled" : ""), role: "columnheader" },
          g.createElement("span", { className: "react-datepicker__sr-only" }, "Week number"),
          g.createElement("span", { "aria-hidden": "true" }, t.props.weekLabel || "#")
        )), o.concat([0, 1, 2, 3, 4, 5, 6].map(function(l) {
          var c = I2(i, l), d = t.formatWeekday(c, t.props.locale), u = t.props.weekDayClassName ? t.props.weekDayClassName(c) : void 0;
          return g.createElement(
            "div",
            { key: l, role: "columnheader", className: g2("react-datepicker__day-name", u, s ? "react-datepicker__day-name--disabled" : "") },
            g.createElement("span", { className: "react-datepicker__sr-only" }, J(c, "EEEE", t.props.locale)),
            g.createElement("span", { "aria-hidden": "true" }, d)
          );
        }));
      }, t.formatWeekday = function(a, s) {
        return t.props.formatWeekDay ? Ua(a, t.props.formatWeekDay, s) : t.props.useWeekdaysShort ? za(a, s) : Wa(a, s);
      }, t.decreaseYear = function() {
        t.setState(function(a) {
          var s, i = a.date;
          return {
            date: o1(i, t.props.showYearPicker ? (s = t.props.yearItemNumber) !== null && s !== void 0 ? s : n.defaultProps.yearItemNumber : 1)
          };
        }, function() {
          return t.handleYearChange(t.state.date);
        });
      }, t.clearSelectingDate = function() {
        t.setState({ selectingDate: void 0 });
      }, t.renderPreviousButton = function() {
        var a, s, i;
        if (!t.props.renderCustomHeader) {
          var o = (a = t.props.monthsShown) !== null && a !== void 0 ? a : n.defaultProps.monthsShown, l = t.props.showPreviousMonths ? o - 1 : 0, c = (s = t.props.monthSelectedIn) !== null && s !== void 0 ? s : l, d = E0(t.state.date, c), u;
          switch (!0) {
            case t.props.disabled:
              u = !0;
              break;
            case t.props.showMonthYearPicker:
              u = N7(t.state.date, t.props);
              break;
            case t.props.showYearPicker:
              u = Qa(t.state.date, t.props);
              break;
            case t.props.showQuarterYearPicker:
              u = Ga(t.state.date, t.props);
              break;
            default:
              u = E7(d, t.props);
              break;
          }
          if (!(!((i = t.props.forceShowMonthNavigation) !== null && i !== void 0 ? i : n.defaultProps.forceShowMonthNavigation) && !t.props.showDisabledMonthNavigation && u || t.props.showTimeSelectOnly)) {
            var C = [
              "react-datepicker__navigation-icon",
              "react-datepicker__navigation-icon--previous"
            ], f = [
              "react-datepicker__navigation",
              "react-datepicker__navigation--previous"
            ], p = t.decreaseMonth;
            (t.props.showMonthYearPicker || t.props.showQuarterYearPicker || t.props.showYearPicker) && (p = t.decreaseYear), u && t.props.showDisabledMonthNavigation && (f.push("react-datepicker__navigation--previous--disabled"), p = void 0);
            var v = t.props.showMonthYearPicker || t.props.showQuarterYearPicker || t.props.showYearPicker, m = t.props, w = m.previousMonthButtonLabel, y = w === void 0 ? n.defaultProps.previousMonthButtonLabel : w, b = m.previousYearButtonLabel, D = b === void 0 ? n.defaultProps.previousYearButtonLabel : b, S = t.props, R = S.previousMonthAriaLabel, P = R === void 0 ? typeof y == "string" ? y : "Previous Month" : R, L = S.previousYearAriaLabel, k = L === void 0 ? typeof D == "string" ? D : "Previous Year" : L;
            return g.createElement(
              "button",
              { type: "button", className: f.join(" "), onClick: p, onKeyDown: t.props.handleOnKeyDown, "aria-label": v ? k : P },
              g.createElement("span", { className: C.join(" ") }, v ? D : y)
            );
          }
        }
      }, t.increaseYear = function() {
        t.setState(function(a) {
          var s, i = a.date;
          return {
            date: e0(i, t.props.showYearPicker ? (s = t.props.yearItemNumber) !== null && s !== void 0 ? s : n.defaultProps.yearItemNumber : 1)
          };
        }, function() {
          return t.handleYearChange(t.state.date);
        });
      }, t.renderNextButton = function() {
        var a;
        if (!t.props.renderCustomHeader) {
          var s;
          switch (!0) {
            case t.props.disabled:
              s = !0;
              break;
            case t.props.showMonthYearPicker:
              s = F7(t.state.date, t.props);
              break;
            case t.props.showYearPicker:
              s = Xa(t.state.date, t.props);
              break;
            case t.props.showQuarterYearPicker:
              s = Ka(t.state.date, t.props);
              break;
            default:
              s = I7(t.state.date, t.props);
              break;
          }
          if (!(!((a = t.props.forceShowMonthNavigation) !== null && a !== void 0 ? a : n.defaultProps.forceShowMonthNavigation) && !t.props.showDisabledMonthNavigation && s || t.props.showTimeSelectOnly)) {
            var i = [
              "react-datepicker__navigation",
              "react-datepicker__navigation--next"
            ], o = [
              "react-datepicker__navigation-icon",
              "react-datepicker__navigation-icon--next"
            ];
            t.props.showTimeSelect && i.push("react-datepicker__navigation--next--with-time"), t.props.todayButton && i.push("react-datepicker__navigation--next--with-today-button");
            var l = t.increaseMonth;
            (t.props.showMonthYearPicker || t.props.showQuarterYearPicker || t.props.showYearPicker) && (l = t.increaseYear), s && t.props.showDisabledMonthNavigation && (i.push("react-datepicker__navigation--next--disabled"), l = void 0);
            var c = t.props.showMonthYearPicker || t.props.showQuarterYearPicker || t.props.showYearPicker, d = t.props, u = d.nextMonthButtonLabel, C = u === void 0 ? n.defaultProps.nextMonthButtonLabel : u, f = d.nextYearButtonLabel, p = f === void 0 ? n.defaultProps.nextYearButtonLabel : f, v = t.props, m = v.nextMonthAriaLabel, w = m === void 0 ? typeof C == "string" ? C : "Next Month" : m, y = v.nextYearAriaLabel, b = y === void 0 ? typeof p == "string" ? p : "Next Year" : y;
            return g.createElement(
              "button",
              { type: "button", className: i.join(" "), onClick: l, onKeyDown: t.props.handleOnKeyDown, "aria-label": c ? b : w },
              g.createElement("span", { className: o.join(" ") }, c ? p : C)
            );
          }
        }
      }, t.renderCurrentMonth = function(a) {
        a === void 0 && (a = t.state.date);
        var s = ["react-datepicker__current-month"];
        return t.props.showYearDropdown && s.push("react-datepicker__current-month--hasYearDropdown"), t.props.showMonthDropdown && s.push("react-datepicker__current-month--hasMonthDropdown"), t.props.showMonthYearDropdown && s.push("react-datepicker__current-month--hasMonthYearDropdown"), g.createElement("h2", { className: s.join(" ") }, J(a, t.props.dateFormat, t.props.locale));
      }, t.renderYearDropdown = function(a) {
        if (a === void 0 && (a = !1), !(!t.props.showYearDropdown || a))
          return g.createElement(Ms, Y({}, n.defaultProps, t.props, { date: t.state.date, onChange: t.changeYear, year: j(t.state.date) }));
      }, t.renderMonthDropdown = function(a) {
        if (a === void 0 && (a = !1), !(!t.props.showMonthDropdown || a))
          return g.createElement(us, Y({}, n.defaultProps, t.props, { month: y2(t.state.date), onChange: t.changeMonth }));
      }, t.renderMonthYearDropdown = function(a) {
        if (a === void 0 && (a = !1), !(!t.props.showMonthYearDropdown || a))
          return g.createElement(fs, Y({}, n.defaultProps, t.props, { date: t.state.date, onChange: t.changeMonthYear }));
      }, t.handleTodayButtonClick = function(a) {
        t.props.onSelect(S7(), a), t.props.setPreSelection && t.props.setPreSelection(S7());
      }, t.renderTodayButton = function() {
        if (!(!t.props.todayButton || t.props.showTimeSelectOnly))
          return g.createElement("div", { className: "react-datepicker__today-button", onClick: t.handleTodayButtonClick }, t.props.todayButton);
      }, t.renderDayNamesHeader = function(a) {
        return g.createElement("div", { className: "react-datepicker__day-names", role: "row" }, t.header(a));
      }, t.renderDefaultHeader = function(a) {
        var s = a.monthDate, i = a.i;
        return g.createElement(
          "div",
          { className: "react-datepicker__header ".concat(t.props.showTimeSelect ? "react-datepicker__header--has-time-select" : "") },
          t.renderCurrentMonth(s),
          g.createElement(
            "div",
            { className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(t.props.dropdownMode), onFocus: t.handleDropdownFocus },
            t.renderMonthDropdown(i !== 0),
            t.renderMonthYearDropdown(i !== 0),
            t.renderYearDropdown(i !== 0)
          )
        );
      }, t.renderCustomHeader = function(a) {
        var s, i, o = a.monthDate, l = a.i;
        if (t.props.showTimeSelect && !t.state.monthContainer || t.props.showTimeSelectOnly)
          return null;
        var c = t.props, d = c.showYearPicker, u = c.yearItemNumber, C;
        if (d) {
          var f = J2(o, u), p = f.startPeriod, v = f.endPeriod;
          C = {
            startYear: p,
            endYear: v
          };
        }
        var m = E7(t.state.date, t.props), w = I7(t.state.date, t.props), y = N7(t.state.date, t.props), b = F7(t.state.date, t.props);
        return g.createElement("div", { className: "react-datepicker__header react-datepicker__header--custom", onFocus: t.props.onDropdownFocus }, (i = (s = t.props).renderCustomHeader) === null || i === void 0 ? void 0 : i.call(s, Y(Y(Y({}, t.state), d && { visibleYearsRange: C }), { customHeaderCount: l, monthDate: o, changeMonth: t.changeMonth, changeYear: t.changeYear, decreaseMonth: t.decreaseMonth, increaseMonth: t.increaseMonth, decreaseYear: t.decreaseYear, increaseYear: t.increaseYear, prevMonthButtonDisabled: m, nextMonthButtonDisabled: w, prevYearButtonDisabled: y, nextYearButtonDisabled: b })));
      }, t.renderYearHeader = function(a) {
        var s = a.monthDate, i = t.props, o = i.showYearPicker, l = i.yearItemNumber, c = l === void 0 ? n.defaultProps.yearItemNumber : l, d = J2(s, c), u = d.startPeriod, C = d.endPeriod;
        return g.createElement("div", { className: "react-datepicker__header react-datepicker-year-header" }, o ? "".concat(u, " - ").concat(C) : j(s));
      }, t.renderHeader = function(a) {
        var s = a.monthDate, i = a.i, o = i === void 0 ? 0 : i, l = { monthDate: s, i: o };
        switch (!0) {
          case t.props.renderCustomHeader !== void 0:
            return t.renderCustomHeader(l);
          case (t.props.showMonthYearPicker || t.props.showQuarterYearPicker || t.props.showYearPicker):
            return t.renderYearHeader(l);
          default:
            return t.renderDefaultHeader(l);
        }
      }, t.renderMonths = function() {
        var a, s;
        if (!(t.props.showTimeSelectOnly || t.props.showYearPicker)) {
          for (var i = [], o = (a = t.props.monthsShown) !== null && a !== void 0 ? a : n.defaultProps.monthsShown, l = t.props.showPreviousMonths ? o - 1 : 0, c = t.props.showMonthYearPicker || t.props.showQuarterYearPicker ? e0(t.state.date, l) : E0(t.state.date, l), d = (s = t.props.monthSelectedIn) !== null && s !== void 0 ? s : l, u = 0; u < o; ++u) {
            var C = u - d + l, f = t.props.showMonthYearPicker || t.props.showQuarterYearPicker ? e0(c, C) : N2(c, C), p = "month-".concat(u), v = u < o - 1, m = u > 0;
            i.push(g.createElement(
              "div",
              { key: p, ref: function(w) {
                t.monthContainer = w ?? void 0;
              }, className: "react-datepicker__month-container" },
              t.renderHeader({ monthDate: f, i: u }),
              g.createElement(cs, Y({}, n.defaultProps, t.props, { containerRef: t.containerRef, ariaLabelPrefix: t.props.monthAriaLabelPrefix, day: f, onDayClick: t.handleDayClick, handleOnKeyDown: t.props.handleOnDayKeyDown, handleOnMonthKeyDown: t.props.handleOnKeyDown, onDayMouseEnter: t.handleDayMouseEnter, onMouseLeave: t.handleMonthMouseLeave, orderInDisplay: u, selectingDate: t.state.selectingDate, monthShowsDuplicateDaysEnd: v, monthShowsDuplicateDaysStart: m, dayNamesHeader: t.renderDayNamesHeader(f) }))
            ));
          }
          return i;
        }
      }, t.renderYears = function() {
        if (!t.props.showTimeSelectOnly && t.props.showYearPicker)
          return g.createElement(
            "div",
            { className: "react-datepicker__year--container" },
            t.renderHeader({ monthDate: t.state.date }),
            g.createElement(ms, Y({}, n.defaultProps, t.props, { selectingDate: t.state.selectingDate, date: t.state.date, onDayClick: t.handleDayClick, clearSelectingDate: t.clearSelectingDate, onYearMouseEnter: t.handleYearMouseEnter, onYearMouseLeave: t.handleYearMouseLeave }))
          );
      }, t.renderTimeSection = function() {
        if (t.props.showTimeSelect && (t.state.monthContainer || t.props.showTimeSelectOnly))
          return g.createElement(ps, Y({}, n.defaultProps, t.props, { onChange: t.props.onTimeChange, format: t.props.timeFormat, intervals: t.props.timeIntervals, monthRef: t.state.monthContainer }));
      }, t.renderInputTimeSection = function() {
        var a = t.props.selected ? new Date(t.props.selected) : void 0, s = a && H4(a) && !!t.props.selected, i = s ? "".concat(R7(a.getHours()), ":").concat(R7(a.getMinutes())) : "";
        if (t.props.showTimeInput)
          return g.createElement(as, Y({}, n.defaultProps, t.props, { date: a, timeString: i, onChange: t.props.onTimeChange }));
      }, t.renderAriaLiveRegion = function() {
        var a, s = J2(t.state.date, (a = t.props.yearItemNumber) !== null && a !== void 0 ? a : n.defaultProps.yearItemNumber), i = s.startPeriod, o = s.endPeriod, l;
        return t.props.showYearPicker ? l = "".concat(i, " - ").concat(o) : t.props.showMonthYearPicker || t.props.showQuarterYearPicker ? l = j(t.state.date) : l = "".concat(R3(y2(t.state.date), t.props.locale), " ").concat(j(t.state.date)), g.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, t.state.isRenderAriaLiveMessage && l);
      }, t.renderChildren = function() {
        if (t.props.children)
          return g.createElement("div", { className: "react-datepicker__children-container" }, t.props.children);
      }, t.containerRef = v0(), t.state = {
        date: t.getDateInView(),
        selectingDate: void 0,
        monthContainer: void 0,
        isRenderAriaLiveMessage: !1
      }, t;
    }
    return Object.defineProperty(n, "defaultProps", {
      get: function() {
        return {
          monthsShown: 1,
          forceShowMonthNavigation: !1,
          outsideClickIgnoreClass: t8,
          timeCaption: "Time",
          previousYearButtonLabel: "Previous Year",
          nextYearButtonLabel: "Next Year",
          previousMonthButtonLabel: "Previous Month",
          nextMonthButtonLabel: "Next Month",
          yearItemNumber: O1
        };
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.componentDidMount = function() {
      var e = this;
      this.props.showTimeSelect && (this.assignMonthContainer = function() {
        e.setState({ monthContainer: e.monthContainer });
      }());
    }, n.prototype.componentDidUpdate = function(e) {
      var t = this;
      if (this.props.preSelection && (!B(this.props.preSelection, e.preSelection) || this.props.monthSelectedIn !== e.monthSelectedIn)) {
        var a = !_2(this.state.date, this.props.preSelection);
        this.setState({
          date: this.props.preSelection
        }, function() {
          return a && t.handleCustomMonthChange(t.state.date);
        });
      } else this.props.openToDate && !B(this.props.openToDate, e.openToDate) && this.setState({
        date: this.props.openToDate
      });
    }, n.prototype.render = function() {
      var e = this.props.container || Na;
      return g.createElement(
        P4,
        { onClickOutside: this.handleClickOutside, style: { display: "contents" }, ignoreClass: this.props.outsideClickIgnoreClass },
        g.createElement(
          "div",
          { style: { display: "contents" }, ref: this.containerRef },
          g.createElement(
            e,
            { className: g2("react-datepicker", this.props.className, {
              "react-datepicker--time-only": this.props.showTimeSelectOnly
            }), showTime: this.props.showTimeSelect || this.props.showTimeInput, showTimeSelectOnly: this.props.showTimeSelectOnly },
            this.renderAriaLiveRegion(),
            this.renderPreviousButton(),
            this.renderNextButton(),
            this.renderMonths(),
            this.renderYears(),
            this.renderTodayButton(),
            this.renderTimeSection(),
            this.renderInputTimeSection(),
            this.renderChildren()
          )
        )
      );
    }, n;
  }(v2)
), Ls = function(r) {
  var n = r.icon, e = r.className, t = e === void 0 ? "" : e, a = r.onClick, s = "react-datepicker__calendar-icon";
  if (typeof n == "string")
    return g.createElement("i", { className: "".concat(s, " ").concat(n, " ").concat(t), "aria-hidden": "true", onClick: a });
  if (g.isValidElement(n)) {
    var i = n;
    return g.cloneElement(i, {
      className: "".concat(i.props.className || "", " ").concat(s, " ").concat(t),
      onClick: function(o) {
        typeof i.props.onClick == "function" && i.props.onClick(o), typeof a == "function" && a(o);
      }
    });
  }
  return g.createElement(
    "svg",
    { className: "".concat(s, " ").concat(t), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", onClick: a },
    g.createElement("path", { d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" })
  );
}, n8 = (
  /** @class */
  function(r) {
    M2(n, r);
    function n(e) {
      var t = r.call(this, e) || this;
      return t.portalRoot = null, t.el = document.createElement("div"), t;
    }
    return n.prototype.componentDidMount = function() {
      this.portalRoot = (this.props.portalHost || document).getElementById(this.props.portalId), this.portalRoot || (this.portalRoot = document.createElement("div"), this.portalRoot.setAttribute("id", this.props.portalId), (this.props.portalHost || document.body).appendChild(this.portalRoot)), this.portalRoot.appendChild(this.el);
    }, n.prototype.componentWillUnmount = function() {
      this.portalRoot && this.portalRoot.removeChild(this.el);
    }, n.prototype.render = function() {
      return I8.createPortal(this.props.children, this.el);
    }, n;
  }(v2)
), _s = "[tabindex], a, button, input, select, textarea", xs = function(r) {
  return (r instanceof HTMLAnchorElement || !r.disabled) && r.tabIndex !== -1;
}, r8 = (
  /** @class */
  function(r) {
    M2(n, r);
    function n(e) {
      var t = r.call(this, e) || this;
      return t.getTabChildren = function() {
        var a;
        return Array.prototype.slice.call((a = t.tabLoopRef.current) === null || a === void 0 ? void 0 : a.querySelectorAll(_s), 1, -1).filter(xs);
      }, t.handleFocusStart = function() {
        var a = t.getTabChildren();
        a && a.length > 1 && a[a.length - 1].focus();
      }, t.handleFocusEnd = function() {
        var a = t.getTabChildren();
        a && a.length > 1 && a[0].focus();
      }, t.tabLoopRef = v0(), t;
    }
    return n.prototype.render = function() {
      var e;
      return ((e = this.props.enableTabLoop) !== null && e !== void 0 ? e : n.defaultProps.enableTabLoop) ? g.createElement(
        "div",
        { className: "react-datepicker__tab-loop", ref: this.tabLoopRef },
        g.createElement("div", { className: "react-datepicker__tab-loop__start", tabIndex: 0, onFocus: this.handleFocusStart }),
        this.props.children,
        g.createElement("div", { className: "react-datepicker__tab-loop__end", tabIndex: 0, onFocus: this.handleFocusEnd })
      ) : this.props.children;
    }, n.defaultProps = {
      enableTabLoop: !0
    }, n;
  }(v2)
);
function ks(r) {
  function n(e) {
    var t, a = typeof e.hidePopper == "boolean" ? e.hidePopper : !0, s = k1(null), i = Ia(Y({ open: !a, whileElementsMounted: ua, placement: e.popperPlacement, middleware: W2([
      ya({ padding: 15 }),
      Ma(10),
      wa({ element: s })
    ], (t = e.popperModifiers) !== null && t !== void 0 ? t : [], !0) }, e.popperProps)), o = Y(Y({}, e), { hidePopper: a, popperProps: Y(Y({}, i), { arrowRef: s }) });
    return g.createElement(r, Y({}, o));
  }
  return n.displayName = "withFloating(".concat(r.displayName || r.name || "Component", ")"), n;
}
var Zs = function(r) {
  var n = r.className, e = r.wrapperClassName, t = r.hidePopper, a = t === void 0 ? !0 : t, s = r.popperComponent, i = r.targetComponent, o = r.enableTabLoop, l = r.popperOnKeyDown, c = r.portalId, d = r.portalHost, u = r.popperProps, C = r.showArrow, f = void 0;
  if (!a) {
    var p = g2("react-datepicker-popper", n);
    f = g.createElement(
      r8,
      { enableTabLoop: o },
      g.createElement(
        "div",
        { ref: u.refs.setFloating, style: u.floatingStyles, className: p, "data-placement": u.placement, onKeyDown: l },
        s,
        C && g.createElement(Da, { ref: u.arrowRef, context: u.context, fill: "currentColor", strokeWidth: 1, height: 8, width: 16, style: { transform: "translateY(-1px)" }, className: "react-datepicker__triangle" })
      )
    );
  }
  r.popperContainer && (f = x3(r.popperContainer, {}, f)), c && !a && (f = g.createElement(n8, { portalId: c, portalHost: d }, f));
  var v = g2("react-datepicker-wrapper", e);
  return g.createElement(
    g.Fragment,
    null,
    g.createElement("div", { ref: u.refs.setReference, className: v }, i),
    f
  );
}, Ds = ks(Zs);
function Ss(r, n) {
  return r && n ? y2(r) !== y2(n) || j(r) !== j(n) : r !== n;
}
var $4 = "Date input not valid.", a8 = (
  /** @class */
  function(r) {
    M2(n, r);
    function n(e) {
      var t = r.call(this, e) || this;
      return t.calendar = null, t.input = null, t.getPreSelection = function() {
        return t.props.openToDate ? t.props.openToDate : t.props.selectsEnd && t.props.startDate ? t.props.startDate : t.props.selectsStart && t.props.endDate ? t.props.endDate : K();
      }, t.modifyHolidays = function() {
        var a;
        return (a = t.props.holidays) === null || a === void 0 ? void 0 : a.reduce(function(s, i) {
          var o = new Date(i.date);
          return H4(o) ? W2(W2([], s, !0), [Y(Y({}, i), { date: o })], !1) : s;
        }, []);
      }, t.calcInitialState = function() {
        var a, s = t.getPreSelection(), i = X5(t.props), o = J5(t.props), l = i && U2(s, K1(i)) ? i : o && w0(s, P7(o)) ? o : s;
        return {
          open: t.props.startOpen || !1,
          preventFocus: !1,
          inputValue: null,
          preSelection: (a = t.props.selectsRange ? t.props.startDate : t.props.selected) !== null && a !== void 0 ? a : l,
          // transforming highlighted days (perhaps nested array)
          // to flat Map for faster access in day.jsx
          highlightDates: V7(t.props.highlightDates),
          focused: !1,
          // used to focus day in inline version after month has changed, but not on
          // initial render
          shouldFocusDayInline: !1,
          isRenderAriaLiveMessage: !1,
          wasHidden: !1
        };
      }, t.getInputValue = function() {
        var a, s = t.props, i = s.locale, o = s.startDate, l = s.endDate, c = s.rangeSeparator, d = s.selected, u = s.selectedDates, C = s.selectsMultiple, f = s.selectsRange, p = s.value, v = (a = t.props.dateFormat) !== null && a !== void 0 ? a : n.defaultProps.dateFormat, m = t.state.inputValue;
        return typeof p == "string" ? p : typeof m == "string" ? m : f ? Va(o, l, {
          dateFormat: v,
          locale: i,
          rangeSeparator: c
        }) : C ? Ra(u ?? [], {
          dateFormat: v,
          locale: i
        }) : Z2(d, {
          dateFormat: v,
          locale: i
        });
      }, t.resetHiddenStatus = function() {
        t.setState(Y(Y({}, t.state), { wasHidden: !1 }));
      }, t.setHiddenStatus = function() {
        t.setState(Y(Y({}, t.state), { wasHidden: !0 }));
      }, t.setHiddenStateOnVisibilityHidden = function() {
        document.visibilityState === "hidden" && t.setHiddenStatus();
      }, t.clearPreventFocusTimeout = function() {
        t.preventFocusTimeout && clearTimeout(t.preventFocusTimeout);
      }, t.setFocus = function() {
        var a, s;
        (s = (a = t.input) === null || a === void 0 ? void 0 : a.focus) === null || s === void 0 || s.call(a, { preventScroll: !0 });
      }, t.setBlur = function() {
        var a, s;
        (s = (a = t.input) === null || a === void 0 ? void 0 : a.blur) === null || s === void 0 || s.call(a), t.cancelFocusInput();
      }, t.deferBlur = function() {
        requestAnimationFrame(function() {
          t.setBlur();
        });
      }, t.setOpen = function(a, s) {
        s === void 0 && (s = !1), t.setState({
          open: a,
          preSelection: a && t.state.open ? t.state.preSelection : t.calcInitialState().preSelection,
          lastPreSelectChange: G4
        }, function() {
          a || t.setState(function(i) {
            return {
              focused: s ? i.focused : !1
            };
          }, function() {
            !s && t.deferBlur(), t.setState({ inputValue: null });
          });
        });
      }, t.inputOk = function() {
        return t0(t.state.preSelection);
      }, t.isCalendarOpen = function() {
        return t.props.open === void 0 ? t.state.open && !t.props.disabled && !t.props.readOnly : t.props.open;
      }, t.handleFocus = function(a) {
        var s, i, o = t.state.wasHidden, l = o ? t.state.open : !0;
        o && t.resetHiddenStatus(), t.state.preventFocus || ((i = (s = t.props).onFocus) === null || i === void 0 || i.call(s, a), l && !t.props.preventOpenOnFocus && !t.props.readOnly && t.setOpen(!0)), t.setState({ focused: !0 });
      }, t.sendFocusBackToInput = function() {
        t.preventFocusTimeout && t.clearPreventFocusTimeout(), t.setState({ preventFocus: !0 }, function() {
          t.preventFocusTimeout = setTimeout(function() {
            t.setFocus(), t.setState({ preventFocus: !1 });
          });
        });
      }, t.cancelFocusInput = function() {
        clearTimeout(t.inputFocusTimeout), t.inputFocusTimeout = void 0;
      }, t.deferFocusInput = function() {
        t.cancelFocusInput(), t.inputFocusTimeout = setTimeout(function() {
          return t.setFocus();
        }, 1);
      }, t.handleDropdownFocus = function() {
        t.cancelFocusInput();
      }, t.resetInputValue = function() {
        t.setState(Y(Y({}, t.state), { inputValue: null }));
      }, t.handleBlur = function(a) {
        var s, i;
        (!t.state.open || t.props.withPortal || t.props.showTimeInput) && ((i = (s = t.props).onBlur) === null || i === void 0 || i.call(s, a)), t.resetInputValue(), t.state.open && t.props.open === !1 && t.setOpen(!1), t.setState({ focused: !1 });
      }, t.handleCalendarClickOutside = function(a) {
        var s, i;
        t.props.inline || t.setOpen(!1), (i = (s = t.props).onClickOutside) === null || i === void 0 || i.call(s, a), t.props.withPortal && a.preventDefault();
      }, t.handleChange = function() {
        for (var a, s, i, o, l, c = [], d = 0; d < arguments.length; d++)
          c[d] = arguments[d];
        var u = c[0];
        if (!(t.props.onChangeRaw && (t.props.onChangeRaw.apply(t, c), !u || typeof u.isDefaultPrevented != "function" || u.isDefaultPrevented()))) {
          t.setState({
            inputValue: (u == null ? void 0 : u.target) instanceof HTMLInputElement ? u.target.value : null,
            lastPreSelectChange: Ps
          });
          var C = t.props, f = C.selectsRange, p = C.startDate, v = C.endDate, m = (a = t.props.dateFormat) !== null && a !== void 0 ? a : n.defaultProps.dateFormat, w = (s = t.props.strictParsing) !== null && s !== void 0 ? s : n.defaultProps.strictParsing, y = (u == null ? void 0 : u.target) instanceof HTMLInputElement ? u.target.value : "";
          if (f) {
            var b = t.props.rangeSeparator, D = b.trim(), S = y.split(m.includes(D) ? b : D, 2).map(function(z) {
              return z.trim();
            }), R = S[0], P = S[1], L = U4(R ?? "", m, t.props.locale, w), k = L ? U4(P ?? "", m, t.props.locale, w) : null, H = (p == null ? void 0 : p.getTime()) !== (L == null ? void 0 : L.getTime()), W = (v == null ? void 0 : v.getTime()) !== (k == null ? void 0 : k.getTime());
            if (!H && !W || L && T2(L, t.props) || k && T2(k, t.props))
              return;
            (o = (i = t.props).onChange) === null || o === void 0 || o.call(i, [L, k], u);
          } else {
            var V = U4(y, m, t.props.locale, w, (l = t.props.selected) !== null && l !== void 0 ? l : void 0);
            (V || !y) && t.setSelected(V, u, !0);
          }
        }
      }, t.handleSelect = function(a, s, i) {
        var o;
        if (!t.props.readOnly) {
          var l = t.props, c = l.selectsRange, d = l.startDate, u = l.endDate, C = l.locale, f = l.swapRange, p = (o = t.props.dateFormat) !== null && o !== void 0 ? o : n.defaultProps.dateFormat, v = !c || d && !u && (f || !z4(a, d));
          if (t.props.shouldCloseOnSelect && !t.props.showTimeSelect && v && t.sendFocusBackToInput(), t.props.onChangeRaw) {
            var m = Z2(a, {
              dateFormat: p,
              locale: C
            });
            t.props.onChangeRaw(s, { date: a, formattedDate: m });
          }
          t.setSelected(a, s, !1, i), t.props.showDateSelect && t.setState({ isRenderAriaLiveMessage: !0 }), !t.props.shouldCloseOnSelect || t.props.showTimeSelect ? t.setPreSelection(a) : v && t.setOpen(!1);
        }
      }, t.setSelected = function(a, s, i, o) {
        var l, c, d = a;
        if (t.props.showYearPicker) {
          if (d !== null && Q1(j(d), t.props))
            return;
        } else if (t.props.showMonthYearPicker) {
          if (d !== null && Q5(d, t.props))
            return;
        } else if (d !== null && T2(d, t.props))
          return;
        var u = t.props, C = u.onChange, f = u.selectsRange, p = u.startDate, v = u.endDate, m = u.selectsMultiple, w = u.selectedDates, y = u.minTime, b = u.swapRange;
        if (!D0(t.props.selected, d) || t.props.allowSameDay || f || m)
          if (d !== null && (t.props.selected && (!i || !t.props.showTimeSelect && !t.props.showTimeSelectOnly && !t.props.showTimeInput) && (d = W4(d, {
            hour: n0(t.props.selected),
            minute: r0(t.props.selected),
            second: p0(t.props.selected)
          })), !i && (t.props.showTimeSelect || t.props.showTimeSelectOnly) && y && (d = W4(d, {
            hour: y.getHours(),
            minute: y.getMinutes(),
            second: y.getSeconds()
          })), t.props.inline || t.setState({
            preSelection: d
          }), t.props.focusSelectedMonth || t.setState({ monthSelectedIn: o })), f) {
            var D = !p && !v, S = p && !v, R = !p && !!v, P = p && v;
            D ? C == null || C([d, null], s) : S ? d === null ? C == null || C([null, null], s) : z4(d, p) ? b ? C == null || C([d, p], s) : C == null || C([d, null], s) : C == null || C([p, d], s) : R && (d && z4(d, v) ? C == null || C([d, v], s) : C == null || C([d, null], s)), P && (C == null || C([d, null], s));
          } else if (m) {
            if (d !== null)
              if (!(w != null && w.length))
                C == null || C([d], s);
              else {
                var L = w.some(function(H) {
                  return B(H, d);
                });
                if (L) {
                  var k = w.filter(function(H) {
                    return !B(H, d);
                  });
                  C == null || C(k, s);
                } else
                  C == null || C(W2(W2([], w, !0), [d], !1), s);
              }
          } else
            C == null || C(d, s);
        i || ((c = (l = t.props).onSelect) === null || c === void 0 || c.call(l, d, s), t.setState({ inputValue: null }));
      }, t.setPreSelection = function(a) {
        if (!t.props.readOnly) {
          var s = t0(t.props.minDate), i = t0(t.props.maxDate), o = !0;
          if (a) {
            var l = K1(a);
            if (s && i)
              o = k0(a, t.props.minDate, t.props.maxDate);
            else if (s) {
              var c = K1(t.props.minDate);
              o = w0(a, c) || D0(l, c);
            } else if (i) {
              var d = P7(t.props.maxDate);
              o = U2(a, d) || D0(l, d);
            }
          }
          o && t.setState({
            preSelection: a
          });
        }
      }, t.toggleCalendar = function() {
        t.setOpen(!t.state.open);
      }, t.handleTimeChange = function(a) {
        var s, i;
        if (!(t.props.selectsRange || t.props.selectsMultiple)) {
          var o = t.props.selected ? t.props.selected : t.getPreSelection(), l = t.props.selected ? a : W4(o, {
            hour: n0(a),
            minute: r0(a)
          });
          t.setState({
            preSelection: l
          }), (i = (s = t.props).onChange) === null || i === void 0 || i.call(s, l), t.props.shouldCloseOnSelect && !t.props.showTimeInput && (t.sendFocusBackToInput(), t.setOpen(!1)), t.props.showTimeInput && t.setOpen(!0), (t.props.showTimeSelectOnly || t.props.showTimeSelect) && t.setState({ isRenderAriaLiveMessage: !0 }), t.setState({ inputValue: null });
        }
      }, t.onInputClick = function() {
        var a, s;
        !t.props.disabled && !t.props.readOnly && t.setOpen(!0), (s = (a = t.props).onInputClick) === null || s === void 0 || s.call(a);
      }, t.onInputKeyDown = function(a) {
        var s, i, o, l, c, d;
        (i = (s = t.props).onKeyDown) === null || i === void 0 || i.call(s, a);
        var u = a.key;
        if (!t.state.open && !t.props.inline && !t.props.preventOpenOnFocus) {
          (u === _.ArrowDown || u === _.ArrowUp || u === _.Enter) && ((o = t.onInputClick) === null || o === void 0 || o.call(t));
          return;
        }
        if (t.state.open) {
          if (u === _.ArrowDown || u === _.ArrowUp) {
            a.preventDefault();
            var C = t.props.showTimeSelectOnly ? ".react-datepicker__time-list-item[tabindex='0']" : t.props.showWeekPicker && t.props.showWeekNumbers ? '.react-datepicker__week-number[tabindex="0"]' : t.props.showFullMonthYearPicker || t.props.showMonthYearPicker ? '.react-datepicker__month-text[tabindex="0"]' : '.react-datepicker__day[tabindex="0"]', f = ((l = t.calendar) === null || l === void 0 ? void 0 : l.containerRef.current) instanceof Element && t.calendar.containerRef.current.querySelector(C);
            f instanceof HTMLElement && f.focus({ preventScroll: !0 });
            return;
          }
          var p = K(t.state.preSelection);
          u === _.Enter ? (a.preventDefault(), a.target.blur(), t.inputOk() && t.state.lastPreSelectChange === G4 ? (t.handleSelect(p, a), !t.props.shouldCloseOnSelect && t.setPreSelection(p)) : t.setOpen(!1)) : u === _.Escape ? (a.preventDefault(), a.target.blur(), t.sendFocusBackToInput(), t.setOpen(!1)) : u === _.Tab && t.setOpen(!1), t.inputOk() || (d = (c = t.props).onInputError) === null || d === void 0 || d.call(c, { code: 1, msg: $4 });
        }
      }, t.onPortalKeyDown = function(a) {
        var s = a.key;
        s === _.Escape && (a.preventDefault(), t.setState({
          preventFocus: !0
        }, function() {
          t.setOpen(!1), setTimeout(function() {
            t.setFocus(), t.setState({ preventFocus: !1 });
          });
        }));
      }, t.onDayKeyDown = function(a) {
        var s, i, o, l, c, d, u = t.props, C = u.minDate, f = u.maxDate, p = u.disabledKeyboardNavigation, v = u.showWeekPicker, m = u.shouldCloseOnSelect, w = u.locale, y = u.calendarStartDay, b = u.adjustDateOnChange, D = u.inline;
        if ((i = (s = t.props).onKeyDown) === null || i === void 0 || i.call(s, a), !p) {
          var S = a.key, R = a.shiftKey, P = K(t.state.preSelection), L = function(U, T) {
            var F = T;
            switch (U) {
              case _.ArrowRight:
                F = v ? r4(T, 1) : I2(T, 1);
                break;
              case _.ArrowLeft:
                F = v ? m7(T) : Xn(T);
                break;
              case _.ArrowUp:
                F = m7(T);
                break;
              case _.ArrowDown:
                F = r4(T, 1);
                break;
              case _.PageUp:
                F = R ? o1(T, 1) : E0(T, 1);
                break;
              case _.PageDown:
                F = R ? e0(T, 1) : N2(T, 1);
                break;
              case _.Home:
                F = m0(T, w, y);
                break;
              case _.End:
                F = Ba(T);
                break;
            }
            return F;
          }, k = function(U, T) {
            for (var F = 40, E = U, n2 = !1, x2 = 0, M = L(U, T); !n2; ) {
              if (x2 >= F) {
                M = T;
                break;
              }
              C && M < C && (E = _.ArrowRight, M = T2(C, t.props) ? L(E, M) : C), f && M > f && (E = _.ArrowLeft, M = T2(f, t.props) ? L(E, M) : f), T2(M, t.props) ? ((E === _.PageUp || E === _.Home) && (E = _.ArrowRight), (E === _.PageDown || E === _.End) && (E = _.ArrowLeft), M = L(E, M)) : n2 = !0, x2++;
            }
            return M;
          };
          if (S === _.Enter) {
            a.preventDefault(), t.handleSelect(P, a), !m && t.setPreSelection(P);
            return;
          } else if (S === _.Escape) {
            a.preventDefault(), t.setOpen(!1), t.inputOk() || (l = (o = t.props).onInputError) === null || l === void 0 || l.call(o, { code: 1, msg: $4 });
            return;
          }
          var H = null;
          switch (S) {
            case _.ArrowLeft:
            case _.ArrowRight:
            case _.ArrowUp:
            case _.ArrowDown:
            case _.PageUp:
            case _.PageDown:
            case _.Home:
            case _.End:
              H = k(S, P);
              break;
          }
          if (!H) {
            (d = (c = t.props).onInputError) === null || d === void 0 || d.call(c, { code: 1, msg: $4 });
            return;
          }
          if (a.preventDefault(), t.setState({ lastPreSelectChange: G4 }), b && t.setSelected(H), t.setPreSelection(H), D) {
            var W = y2(P), V = y2(H), z = j(P), q = j(H);
            W !== V || z !== q ? t.setState({ shouldFocusDayInline: !0 }) : t.setState({ shouldFocusDayInline: !1 });
          }
        }
      }, t.onPopperKeyDown = function(a) {
        var s = a.key;
        s === _.Escape && (a.preventDefault(), t.sendFocusBackToInput(), t.setOpen(!1));
      }, t.onClearClick = function(a) {
        a && a.preventDefault && a.preventDefault(), t.sendFocusBackToInput();
        var s = t.props, i = s.selectsRange, o = s.onChange;
        i ? o == null || o([null, null], a) : o == null || o(null, a), t.setState({ inputValue: null });
      }, t.clear = function() {
        t.onClearClick();
      }, t.onScroll = function(a) {
        typeof t.props.closeOnScroll == "boolean" && t.props.closeOnScroll ? (a.target === document || a.target === document.documentElement || a.target === document.body) && t.setOpen(!1) : typeof t.props.closeOnScroll == "function" && t.props.closeOnScroll(a) && t.setOpen(!1);
      }, t.renderCalendar = function() {
        var a, s;
        return !t.props.inline && !t.isCalendarOpen() ? null : g.createElement(bs, Y({ showMonthYearDropdown: void 0, ref: function(i) {
          t.calendar = i;
        } }, t.props, t.state, { setOpen: t.setOpen, dateFormat: (a = t.props.dateFormatCalendar) !== null && a !== void 0 ? a : n.defaultProps.dateFormatCalendar, onSelect: t.handleSelect, onClickOutside: t.handleCalendarClickOutside, holidays: es(t.modifyHolidays()), outsideClickIgnoreClass: t.props.outsideClickIgnoreClass, onDropdownFocus: t.handleDropdownFocus, onTimeChange: t.handleTimeChange, className: t.props.calendarClassName, container: t.props.calendarContainer, handleOnKeyDown: t.props.onKeyDown, handleOnDayKeyDown: t.onDayKeyDown, setPreSelection: t.setPreSelection, dropdownMode: (s = t.props.dropdownMode) !== null && s !== void 0 ? s : n.defaultProps.dropdownMode }), t.props.children);
      }, t.renderAriaLiveRegion = function() {
        var a, s = t.props.locale, i = (a = t.props.dateFormat) !== null && a !== void 0 ? a : n.defaultProps.dateFormat, o = t.props.showTimeInput || t.props.showTimeSelect, l = o ? "PPPPp" : "PPPP", c;
        return t.props.selectsRange ? c = "Selected start date: ".concat(Z2(t.props.startDate, {
          dateFormat: l,
          locale: s
        }), ". ").concat(t.props.endDate ? "End date: " + Z2(t.props.endDate, {
          dateFormat: l,
          locale: s
        }) : "") : t.props.showTimeSelectOnly ? c = "Selected time: ".concat(Z2(t.props.selected, { dateFormat: i, locale: s })) : t.props.showYearPicker ? c = "Selected year: ".concat(Z2(t.props.selected, { dateFormat: "yyyy", locale: s })) : t.props.showMonthYearPicker ? c = "Selected month: ".concat(Z2(t.props.selected, { dateFormat: "MMMM yyyy", locale: s })) : t.props.showQuarterYearPicker ? c = "Selected quarter: ".concat(Z2(t.props.selected, {
          dateFormat: "yyyy, QQQ",
          locale: s
        })) : c = "Selected date: ".concat(Z2(t.props.selected, {
          dateFormat: l,
          locale: s
        })), g.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, c);
      }, t.renderDateInput = function() {
        var a, s, i = g2(t.props.className, (a = {}, a[t.props.outsideClickIgnoreClass || n.defaultProps.outsideClickIgnoreClass] = t.state.open, a)), o = t.props.customInput || g.createElement("input", { type: "text" }), l = t.props.customInputRef || "ref";
        return h5(o, (s = {}, s[l] = function(c) {
          t.input = c;
        }, s.value = t.getInputValue(), s.onBlur = t.handleBlur, s.onChange = t.handleChange, s.onClick = t.onInputClick, s.onFocus = t.handleFocus, s.onKeyDown = t.onInputKeyDown, s.id = t.props.id, s.name = t.props.name, s.form = t.props.form, s.autoFocus = t.props.autoFocus, s.placeholder = t.props.placeholderText, s.disabled = t.props.disabled, s.autoComplete = t.props.autoComplete, s.className = g2(o.props.className, i), s.title = t.props.title, s.readOnly = t.props.readOnly, s.required = t.props.required, s.tabIndex = t.props.tabIndex, s["aria-describedby"] = t.props.ariaDescribedBy, s["aria-invalid"] = t.props.ariaInvalid, s["aria-labelledby"] = t.props.ariaLabelledBy, s["aria-required"] = t.props.ariaRequired, s));
      }, t.renderClearButton = function() {
        var a = t.props, s = a.isClearable, i = a.disabled, o = a.selected, l = a.startDate, c = a.endDate, d = a.clearButtonTitle, u = a.clearButtonClassName, C = u === void 0 ? "" : u, f = a.ariaLabelClose, p = f === void 0 ? "Close" : f, v = a.selectedDates, m = a.readOnly;
        return s && !m && (o != null || l != null || c != null || v != null && v.length) ? g.createElement("button", { type: "button", className: g2("react-datepicker__close-icon", C, { "react-datepicker__close-icon--disabled": i }), disabled: i, "aria-label": p, onClick: t.onClearClick, title: d, tabIndex: -1 }) : null;
      }, t.state = t.calcInitialState(), t.preventFocusTimeout = void 0, t;
    }
    return Object.defineProperty(n, "defaultProps", {
      get: function() {
        return {
          allowSameDay: !1,
          dateFormat: "MM/dd/yyyy",
          dateFormatCalendar: "LLLL yyyy",
          disabled: !1,
          disabledKeyboardNavigation: !1,
          dropdownMode: "scroll",
          preventOpenOnFocus: !1,
          monthsShown: 1,
          outsideClickIgnoreClass: t8,
          readOnly: !1,
          rangeSeparator: $5,
          withPortal: !1,
          selectsDisabledDaysInRange: !1,
          shouldCloseOnSelect: !0,
          showTimeSelect: !1,
          showTimeInput: !1,
          showPreviousMonths: !1,
          showMonthYearPicker: !1,
          showFullMonthYearPicker: !1,
          showTwoColumnMonthYearPicker: !1,
          showFourColumnMonthYearPicker: !1,
          showYearPicker: !1,
          showQuarterYearPicker: !1,
          showWeekPicker: !1,
          strictParsing: !1,
          swapRange: !1,
          timeIntervals: 30,
          timeCaption: "Time",
          previousMonthAriaLabel: "Previous Month",
          previousMonthButtonLabel: "Previous Month",
          nextMonthAriaLabel: "Next Month",
          nextMonthButtonLabel: "Next Month",
          previousYearAriaLabel: "Previous Year",
          previousYearButtonLabel: "Previous Year",
          nextYearAriaLabel: "Next Year",
          nextYearButtonLabel: "Next Year",
          timeInputLabel: "Time",
          enableTabLoop: !0,
          yearItemNumber: O1,
          focusSelectedMonth: !1,
          showPopperArrow: !0,
          excludeScrollbar: !0,
          customTimeInput: null,
          calendarStartDay: void 0,
          toggleCalendarOnIconClick: !1,
          usePointerEvent: !1
        };
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.componentDidMount = function() {
      window.addEventListener("scroll", this.onScroll, !0), document.addEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    }, n.prototype.componentDidUpdate = function(e, t) {
      var a, s, i, o;
      e.inline && Ss(e.selected, this.props.selected) && this.setPreSelection(this.props.selected), this.state.monthSelectedIn !== void 0 && e.monthsShown !== this.props.monthsShown && this.setState({ monthSelectedIn: 0 }), e.highlightDates !== this.props.highlightDates && this.setState({
        highlightDates: V7(this.props.highlightDates)
      }), !t.focused && !D0(e.selected, this.props.selected) && this.setState({ inputValue: null }), t.open !== this.state.open && (t.open === !1 && this.state.open === !0 && ((s = (a = this.props).onCalendarOpen) === null || s === void 0 || s.call(a)), t.open === !0 && this.state.open === !1 && ((o = (i = this.props).onCalendarClose) === null || o === void 0 || o.call(i)));
    }, n.prototype.componentWillUnmount = function() {
      this.clearPreventFocusTimeout(), window.removeEventListener("scroll", this.onScroll, !0), document.removeEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    }, n.prototype.renderInputContainer = function() {
      var e = this.props, t = e.showIcon, a = e.icon, s = e.calendarIconClassname, i = e.calendarIconClassName, o = e.toggleCalendarOnIconClick, l = this.state.open;
      return s && console.warn("calendarIconClassname props is deprecated. should use calendarIconClassName props."), g.createElement(
        "div",
        { className: "react-datepicker__input-container".concat(t ? " react-datepicker__view-calendar-icon" : "") },
        t && g.createElement(Ls, Y({ icon: a, className: g2(i, !i && s, l && "react-datepicker-ignore-onclickoutside") }, o ? {
          onClick: this.toggleCalendar
        } : null)),
        this.state.isRenderAriaLiveMessage && this.renderAriaLiveRegion(),
        this.renderDateInput(),
        this.renderClearButton()
      );
    }, n.prototype.render = function() {
      var e = this.renderCalendar();
      if (this.props.inline)
        return e;
      if (this.props.withPortal) {
        var t = this.state.open ? g.createElement(
          r8,
          { enableTabLoop: this.props.enableTabLoop },
          g.createElement("div", { className: "react-datepicker__portal", tabIndex: -1, onKeyDown: this.onPortalKeyDown }, e)
        ) : null;
        return this.state.open && this.props.portalId && (t = g.createElement(n8, Y({ portalId: this.props.portalId }, this.props), t)), g.createElement(
          "div",
          null,
          this.renderInputContainer(),
          t
        );
      }
      return g.createElement(Ds, Y({}, this.props, { className: this.props.popperClassName, hidePopper: !this.isCalendarOpen(), targetComponent: this.renderInputContainer(), popperComponent: e, popperOnKeyDown: this.onPopperKeyDown, showArrow: this.props.showPopperArrow }));
    }, n;
  }(v2)
), Ps = "input", G4 = "navigate";
const Hs = "_inputWrapper_1pw38_1", Ts = "_inputIcon_1pw38_7", U7 = {
  inputWrapper: Hs,
  inputIcon: Ts
}, Os = {
  lessThanXSeconds: {
    one: "mindre enn ett sekund",
    other: "mindre enn {{count}} sekunder"
  },
  xSeconds: {
    one: "ett sekund",
    other: "{{count}} sekunder"
  },
  halfAMinute: "et halvt minutt",
  lessThanXMinutes: {
    one: "mindre enn ett minutt",
    other: "mindre enn {{count}} minutter"
  },
  xMinutes: {
    one: "ett minutt",
    other: "{{count}} minutter"
  },
  aboutXHours: {
    one: "omtrent en time",
    other: "omtrent {{count}} timer"
  },
  xHours: {
    one: "en time",
    other: "{{count}} timer"
  },
  xDays: {
    one: "en dag",
    other: "{{count}} dager"
  },
  aboutXWeeks: {
    one: "omtrent en uke",
    other: "omtrent {{count}} uker"
  },
  xWeeks: {
    one: "en uke",
    other: "{{count}} uker"
  },
  aboutXMonths: {
    one: "omtrent en måned",
    other: "omtrent {{count}} måneder"
  },
  xMonths: {
    one: "en måned",
    other: "{{count}} måneder"
  },
  aboutXYears: {
    one: "omtrent ett år",
    other: "omtrent {{count}} år"
  },
  xYears: {
    one: "ett år",
    other: "{{count}} år"
  },
  overXYears: {
    one: "over ett år",
    other: "over {{count}} år"
  },
  almostXYears: {
    one: "nesten ett år",
    other: "nesten {{count}} år"
  }
}, Es = (r, n, e) => {
  let t;
  const a = Os[r];
  return typeof a == "string" ? t = a : n === 1 ? t = a.one : t = a.other.replace("{{count}}", String(n)), e != null && e.addSuffix ? e.comparison && e.comparison > 0 ? "om " + t : t + " siden" : t;
}, Is = {
  full: "EEEE d. MMMM y",
  long: "d. MMMM y",
  medium: "d. MMM y",
  short: "dd.MM.y"
}, Ns = {
  full: "'kl'. HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, Fs = {
  full: "{{date}} 'kl.' {{time}}",
  long: "{{date}} 'kl.' {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, Vs = {
  date: e1({
    formats: Is,
    defaultWidth: "full"
  }),
  time: e1({
    formats: Ns,
    defaultWidth: "full"
  }),
  dateTime: e1({
    formats: Fs,
    defaultWidth: "full"
  })
}, Rs = {
  lastWeek: "'forrige' eeee 'kl.' p",
  yesterday: "'i går kl.' p",
  today: "'i dag kl.' p",
  tomorrow: "'i morgen kl.' p",
  nextWeek: "EEEE 'kl.' p",
  other: "P"
}, js = (r, n, e, t) => Rs[r], As = {
  narrow: ["f.Kr.", "e.Kr."],
  abbreviated: ["f.Kr.", "e.Kr."],
  wide: ["før Kristus", "etter Kristus"]
}, Bs = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]
}, Ys = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "jan.",
    "feb.",
    "mars",
    "apr.",
    "mai",
    "juni",
    "juli",
    "aug.",
    "sep.",
    "okt.",
    "nov.",
    "des."
  ],
  wide: [
    "januar",
    "februar",
    "mars",
    "april",
    "mai",
    "juni",
    "juli",
    "august",
    "september",
    "oktober",
    "november",
    "desember"
  ]
}, Us = {
  narrow: ["S", "M", "T", "O", "T", "F", "L"],
  short: ["sø", "ma", "ti", "on", "to", "fr", "lø"],
  abbreviated: ["søn", "man", "tir", "ons", "tor", "fre", "lør"],
  wide: [
    "søndag",
    "mandag",
    "tirsdag",
    "onsdag",
    "torsdag",
    "fredag",
    "lørdag"
  ]
}, Ws = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morg.",
    afternoon: "på etterm.",
    evening: "på kvelden",
    night: "på natten"
  },
  abbreviated: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morg.",
    afternoon: "på etterm.",
    evening: "på kvelden",
    night: "på natten"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morgenen",
    afternoon: "på ettermiddagen",
    evening: "på kvelden",
    night: "på natten"
  }
}, zs = (r, n) => Number(r) + ".", qs = {
  ordinalNumber: zs,
  era: j2({
    values: As,
    defaultWidth: "wide"
  }),
  quarter: j2({
    values: Bs,
    defaultWidth: "wide",
    argumentCallback: (r) => r - 1
  }),
  month: j2({
    values: Ys,
    defaultWidth: "wide"
  }),
  day: j2({
    values: Us,
    defaultWidth: "wide"
  }),
  dayPeriod: j2({
    values: Ws,
    defaultWidth: "wide"
  })
}, $s = /^(\d+)\.?/i, Gs = /\d+/i, Ks = {
  narrow: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,
  abbreviated: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,
  wide: /^(før Kristus|før vår tid|etter Kristus|vår tid)/i
}, Qs = {
  any: [/^f/i, /^e/i]
}, Xs = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](\.)? kvartal/i
}, Js = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, ei = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,
  wide: /^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i
}, ti = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^mai/i,
    /^jun/i,
    /^jul/i,
    /^aug/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, ni = {
  narrow: /^[smtofl]/i,
  short: /^(sø|ma|ti|on|to|fr|lø)/i,
  abbreviated: /^(søn|man|tir|ons|tor|fre|lør)/i,
  wide: /^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i
}, ri = {
  any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i]
}, ai = {
  narrow: /^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,
  any: /^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i
}, si = {
  any: {
    am: /^a(\.?\s?m\.?)?$/i,
    pm: /^p(\.?\s?m\.?)?$/i,
    midnight: /^midn/i,
    noon: /^midd/i,
    morning: /morgen/i,
    afternoon: /ettermiddag/i,
    evening: /kveld/i,
    night: /natt/i
  }
}, ii = {
  ordinalNumber: Z5({
    matchPattern: $s,
    parsePattern: Gs,
    valueCallback: (r) => parseInt(r, 10)
  }),
  era: A2({
    matchPatterns: Ks,
    defaultMatchWidth: "wide",
    parsePatterns: Qs,
    defaultParseWidth: "any"
  }),
  quarter: A2({
    matchPatterns: Xs,
    defaultMatchWidth: "wide",
    parsePatterns: Js,
    defaultParseWidth: "any",
    valueCallback: (r) => r + 1
  }),
  month: A2({
    matchPatterns: ei,
    defaultMatchWidth: "wide",
    parsePatterns: ti,
    defaultParseWidth: "any"
  }),
  day: A2({
    matchPatterns: ni,
    defaultMatchWidth: "wide",
    parsePatterns: ri,
    defaultParseWidth: "any"
  }),
  dayPeriod: A2({
    matchPatterns: ai,
    defaultMatchWidth: "any",
    parsePatterns: si,
    defaultParseWidth: "any"
  })
}, s8 = {
  code: "nb",
  formatDistance: Es,
  formatLong: Vs,
  formatRelative: js,
  localize: qs,
  match: ii,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
G5("nb", s8);
const oi = (r) => {
  const { showCalendarIcon: n, ...e } = r;
  return n ? /* @__PURE__ */ h.jsxs("div", { className: U7.inputWrapper, children: [
    /* @__PURE__ */ h.jsx(t4, { ...e, inputMode: "numeric", type: "text" }),
    /* @__PURE__ */ h.jsx(c2, { className: U7.inputIcon, material: "calendar_month", "aria-hidden": "true" })
  ] }) : /* @__PURE__ */ h.jsx(t4, { ...e, inputMode: "numeric", type: "text" });
}, xl = ({
  value: r,
  onChange: n,
  dateFormat: e = "dd.MM.yyyy",
  showCalendarIcon: t = !0,
  minDate: a,
  maxDate: s,
  ...i
}) => /* @__PURE__ */ h.jsxs(y0, { children: [
  /* @__PURE__ */ h.jsx(h1, { style: { display: "block", width: "fit-content" }, children: /* @__PURE__ */ h.jsx(i0, { text: i.label, required: i.required, optional: i.optional }) }),
  i.description && /* @__PURE__ */ h.jsx(y0.Description, { children: i.description }),
  /* @__PURE__ */ h.jsx(
    a8,
    {
      locale: "nb",
      selected: r,
      dateFormat: e,
      placeholderText: "dd.mm.åååå",
      onChange: (o) => n == null ? void 0 : n(o ?? void 0),
      customInput: x3(oi, { showCalendarIcon: t }),
      minDate: a,
      maxDate: s,
      onBlur: i.onBlur
    }
  ),
  i.error && /* @__PURE__ */ h.jsx(M0, { children: i.error })
] }), li = "_input_7ewse_2", ci = "_inputWrapper_7ewse_12", di = "_inputIcon_7ewse_18", M3 = {
  input: li,
  inputWrapper: ci,
  inputIcon: di
};
G5("nb", s8);
const ui = (r) => {
  const { showCalendarIcon: n, ...e } = r;
  return n ? /* @__PURE__ */ h.jsxs("div", { className: M3.inputWrapper, children: [
    /* @__PURE__ */ h.jsx(t4, { ...e, inputMode: "numeric", type: "text" }),
    /* @__PURE__ */ h.jsx(c2, { className: M3.inputIcon, material: "calendar_month", "aria-hidden": "true" })
  ] }) : /* @__PURE__ */ h.jsx(t4, { ...e, inputMode: "numeric", type: "text" });
}, kl = ({
  value: r,
  onChange: n,
  dateTimeFormat: e = "dd.MM.yyyy, HH:mm",
  timeInputLabel: t = "Time: ",
  showCalendarIcon: a = !0,
  minDate: s,
  maxDate: i,
  ...o
}) => /* @__PURE__ */ h.jsxs(y0, { className: M3.input, children: [
  /* @__PURE__ */ h.jsx(h1, { style: { display: "block", width: "fit-content" }, children: /* @__PURE__ */ h.jsx(i0, { text: o.label, required: o.required, optional: o.optional }) }),
  o.description && /* @__PURE__ */ h.jsx(y0.Description, { children: o.description }),
  /* @__PURE__ */ h.jsx(
    a8,
    {
      locale: "nb",
      selected: r,
      dateFormat: e,
      onChange: (l) => n == null ? void 0 : n(l ?? void 0),
      customInput: x3(ui, { showCalendarIcon: a }),
      showTimeInput: !0,
      placeholderText: "dd.mm.åååå, tt:mm",
      timeInputLabel: t,
      minDate: s,
      maxDate: i,
      onBlur: o.onBlur
    }
  ),
  o.error && /* @__PURE__ */ h.jsx(M0, { children: o.error })
] }), hi = "_uploadButton_w83xe_2", Ci = "_uploadInformation_w83xe_3", fi = "_fileList_w83xe_22", pi = "_fileItem_w83xe_29", mi = "_removeButton_w83xe_42", G0 = {
  uploadButton: hi,
  uploadInformation: Ci,
  fileList: fi,
  fileItem: pi,
  removeButton: mi
};
var T4 = typeof self < "u" ? self : global;
const P1 = typeof navigator < "u", gi = P1 && typeof HTMLImageElement > "u", p4 = !(typeof global > "u" || typeof process > "u" || !process.versions || !process.versions.node), O4 = T4.Buffer, Y1 = T4.BigInt, E4 = !!O4, vi = (r) => r;
function m4(r, n = vi) {
  if (p4) try {
    return typeof require == "function" ? Promise.resolve(n(require(r))) : import(
      /* webpackIgnore: true */
      r
    ).then(n);
  } catch {
    console.warn(`Couldn't load ${r}`);
  }
}
let A3 = T4.fetch;
const Mi = (r) => A3 = r;
if (!T4.fetch) {
  const r = m4("http", (t) => t), n = m4("https", (t) => t), e = (t, { headers: a } = {}) => new Promise(async (s, i) => {
    let { port: o, hostname: l, pathname: c, protocol: d, search: u } = new URL(t);
    const C = { method: "GET", hostname: l, path: encodeURI(c) + u, headers: a };
    o !== "" && (C.port = Number(o));
    const f = (d === "https:" ? await n : await r).request(C, (p) => {
      if (p.statusCode === 301 || p.statusCode === 302) {
        let v = new URL(p.headers.location, t).toString();
        return e(v, { headers: a }).then(s).catch(i);
      }
      s({ status: p.statusCode, arrayBuffer: () => new Promise((v) => {
        let m = [];
        p.on("data", (w) => m.push(w)), p.on("end", () => v(Buffer.concat(m)));
      }) });
    });
    f.on("error", i), f.end();
  });
  Mi(e);
}
function O(r, n, e) {
  return n in r ? Object.defineProperty(r, n, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : r[n] = e, r;
}
const g4 = (r) => i8(r) ? void 0 : r, yi = (r) => r !== void 0;
function i8(r) {
  return r === void 0 || (r instanceof Map ? r.size === 0 : Object.values(r).filter(yi).length === 0);
}
function u2(r) {
  let n = new Error(r);
  throw delete n.stack, n;
}
function S0(r) {
  return (r = function(n) {
    for (; n.endsWith("\0"); ) n = n.slice(0, -1);
    return n;
  }(r).trim()) === "" ? void 0 : r;
}
function y3(r) {
  let n = function(e) {
    let t = 0;
    return e.ifd0.enabled && (t += 1024), e.exif.enabled && (t += 2048), e.makerNote && (t += 2048), e.userComment && (t += 1024), e.gps.enabled && (t += 512), e.interop.enabled && (t += 100), e.ifd1.enabled && (t += 1024), t + 2048;
  }(r);
  return r.jfif.enabled && (n += 50), r.xmp.enabled && (n += 2e4), r.iptc.enabled && (n += 14e3), r.icc.enabled && (n += 6e3), n;
}
const w3 = (r) => String.fromCharCode.apply(null, r), W7 = typeof TextDecoder < "u" ? new TextDecoder("utf-8") : void 0;
function o8(r) {
  return W7 ? W7.decode(r) : E4 ? Buffer.from(r).toString("utf8") : decodeURIComponent(escape(w3(r)));
}
class k2 {
  static from(n, e) {
    return n instanceof this && n.le === e ? n : new k2(n, void 0, void 0, e);
  }
  constructor(n, e = 0, t, a) {
    if (typeof a == "boolean" && (this.le = a), Array.isArray(n) && (n = new Uint8Array(n)), n === 0) this.byteOffset = 0, this.byteLength = 0;
    else if (n instanceof ArrayBuffer) {
      t === void 0 && (t = n.byteLength - e);
      let s = new DataView(n, e, t);
      this._swapDataView(s);
    } else if (n instanceof Uint8Array || n instanceof DataView || n instanceof k2) {
      t === void 0 && (t = n.byteLength - e), (e += n.byteOffset) + t > n.byteOffset + n.byteLength && u2("Creating view outside of available memory in ArrayBuffer");
      let s = new DataView(n.buffer, e, t);
      this._swapDataView(s);
    } else if (typeof n == "number") {
      let s = new DataView(new ArrayBuffer(n));
      this._swapDataView(s);
    } else u2("Invalid input argument for BufferView: " + n);
  }
  _swapArrayBuffer(n) {
    this._swapDataView(new DataView(n));
  }
  _swapBuffer(n) {
    this._swapDataView(new DataView(n.buffer, n.byteOffset, n.byteLength));
  }
  _swapDataView(n) {
    this.dataView = n, this.buffer = n.buffer, this.byteOffset = n.byteOffset, this.byteLength = n.byteLength;
  }
  _lengthToEnd(n) {
    return this.byteLength - n;
  }
  set(n, e, t = k2) {
    return n instanceof DataView || n instanceof k2 ? n = new Uint8Array(n.buffer, n.byteOffset, n.byteLength) : n instanceof ArrayBuffer && (n = new Uint8Array(n)), n instanceof Uint8Array || u2("BufferView.set(): Invalid data argument."), this.toUint8().set(n, e), new t(this, e, n.byteLength);
  }
  subarray(n, e) {
    return e = e || this._lengthToEnd(n), new k2(this, n, e);
  }
  toUint8() {
    return new Uint8Array(this.buffer, this.byteOffset, this.byteLength);
  }
  getUint8Array(n, e) {
    return new Uint8Array(this.buffer, this.byteOffset + n, e);
  }
  getString(n = 0, e = this.byteLength) {
    return o8(this.getUint8Array(n, e));
  }
  getLatin1String(n = 0, e = this.byteLength) {
    let t = this.getUint8Array(n, e);
    return w3(t);
  }
  getUnicodeString(n = 0, e = this.byteLength) {
    const t = [];
    for (let a = 0; a < e && n + a < this.byteLength; a += 2) t.push(this.getUint16(n + a));
    return w3(t);
  }
  getInt8(n) {
    return this.dataView.getInt8(n);
  }
  getUint8(n) {
    return this.dataView.getUint8(n);
  }
  getInt16(n, e = this.le) {
    return this.dataView.getInt16(n, e);
  }
  getInt32(n, e = this.le) {
    return this.dataView.getInt32(n, e);
  }
  getUint16(n, e = this.le) {
    return this.dataView.getUint16(n, e);
  }
  getUint32(n, e = this.le) {
    return this.dataView.getUint32(n, e);
  }
  getFloat32(n, e = this.le) {
    return this.dataView.getFloat32(n, e);
  }
  getFloat64(n, e = this.le) {
    return this.dataView.getFloat64(n, e);
  }
  getFloat(n, e = this.le) {
    return this.dataView.getFloat32(n, e);
  }
  getDouble(n, e = this.le) {
    return this.dataView.getFloat64(n, e);
  }
  getUintBytes(n, e, t) {
    switch (e) {
      case 1:
        return this.getUint8(n, t);
      case 2:
        return this.getUint16(n, t);
      case 4:
        return this.getUint32(n, t);
      case 8:
        return this.getUint64 && this.getUint64(n, t);
    }
  }
  getUint(n, e, t) {
    switch (e) {
      case 8:
        return this.getUint8(n, t);
      case 16:
        return this.getUint16(n, t);
      case 32:
        return this.getUint32(n, t);
      case 64:
        return this.getUint64 && this.getUint64(n, t);
    }
  }
  toString(n) {
    return this.dataView.toString(n, this.constructor.name);
  }
  ensureChunk() {
  }
}
function b3(r, n) {
  u2(`${r} '${n}' was not loaded, try using full build of exifr.`);
}
class B3 extends Map {
  constructor(n) {
    super(), this.kind = n;
  }
  get(n, e) {
    return this.has(n) || b3(this.kind, n), e && (n in e || function(t, a) {
      u2(`Unknown ${t} '${a}'.`);
    }(this.kind, n), e[n].enabled || b3(this.kind, n)), super.get(n);
  }
  keyList() {
    return Array.from(this.keys());
  }
}
var G2 = new B3("file parser"), d2 = new B3("segment parser"), Q2 = new B3("file reader");
function wi(r, n) {
  return typeof r == "string" ? z7(r, n) : P1 && !gi && r instanceof HTMLImageElement ? z7(r.src, n) : r instanceof Uint8Array || r instanceof ArrayBuffer || r instanceof DataView ? new k2(r) : P1 && r instanceof Blob ? L3(r, n, "blob", R0) : void u2("Invalid input argument");
}
function z7(r, n) {
  return (e = r).startsWith("data:") || e.length > 1e4 ? _3(r, n, "base64") : p4 && r.includes("://") ? L3(r, n, "url", V0) : p4 ? _3(r, n, "fs") : P1 ? L3(r, n, "url", V0) : void u2("Invalid input argument");
  var e;
}
async function L3(r, n, e, t) {
  return Q2.has(e) ? _3(r, n, e) : t ? async function(a, s) {
    let i = await s(a);
    return new k2(i);
  }(r, t) : void u2(`Parser ${e} is not loaded`);
}
async function _3(r, n, e) {
  let t = new (Q2.get(e))(r, n);
  return await t.read(), t;
}
const V0 = (r) => A3(r).then((n) => n.arrayBuffer()), R0 = (r) => new Promise((n, e) => {
  let t = new FileReader();
  t.onloadend = () => n(t.result || new ArrayBuffer()), t.onerror = e, t.readAsArrayBuffer(r);
});
class bi extends Map {
  get tagKeys() {
    return this.allKeys || (this.allKeys = Array.from(this.keys())), this.allKeys;
  }
  get tagValues() {
    return this.allValues || (this.allValues = Array.from(this.values())), this.allValues;
  }
}
function l2(r, n, e) {
  let t = new bi();
  for (let [a, s] of e) t.set(a, s);
  if (Array.isArray(n)) for (let a of n) r.set(a, t);
  else r.set(n, t);
  return t;
}
function j0(r, n, e) {
  let t, a = r.get(n);
  for (t of e) a.set(t[0], t[1]);
}
const f2 = /* @__PURE__ */ new Map(), F2 = /* @__PURE__ */ new Map(), g0 = /* @__PURE__ */ new Map(), d0 = ["chunked", "firstChunkSize", "firstChunkSizeNode", "firstChunkSizeBrowser", "chunkSize", "chunkLimit"], f1 = ["jfif", "xmp", "icc", "iptc", "ihdr"], A0 = ["tiff", ...f1], a2 = ["ifd0", "ifd1", "exif", "gps", "interop"], u0 = [...A0, ...a2], h0 = ["makerNote", "userComment"], p1 = ["translateKeys", "translateValues", "reviveValues", "multiSegment"], C0 = [...p1, "sanitize", "mergeOutput", "silentErrors"];
class l8 {
  get translate() {
    return this.translateKeys || this.translateValues || this.reviveValues;
  }
}
class b1 extends l8 {
  get needed() {
    return this.enabled || this.deps.size > 0;
  }
  constructor(n, e, t, a) {
    if (super(), O(this, "enabled", !1), O(this, "skip", /* @__PURE__ */ new Set()), O(this, "pick", /* @__PURE__ */ new Set()), O(this, "deps", /* @__PURE__ */ new Set()), O(this, "translateKeys", !1), O(this, "translateValues", !1), O(this, "reviveValues", !1), this.key = n, this.enabled = e, this.parse = this.enabled, this.applyInheritables(a), this.canBeFiltered = a2.includes(n), this.canBeFiltered && (this.dict = f2.get(n)), t !== void 0) if (Array.isArray(t)) this.parse = this.enabled = !0, this.canBeFiltered && t.length > 0 && this.translateTagSet(t, this.pick);
    else if (typeof t == "object") {
      if (this.enabled = !0, this.parse = t.parse !== !1, this.canBeFiltered) {
        let { pick: s, skip: i } = t;
        s && s.length > 0 && this.translateTagSet(s, this.pick), i && i.length > 0 && this.translateTagSet(i, this.skip);
      }
      this.applyInheritables(t);
    } else t === !0 || t === !1 ? this.parse = this.enabled = t : u2(`Invalid options argument: ${t}`);
  }
  applyInheritables(n) {
    let e, t;
    for (e of p1) t = n[e], t !== void 0 && (this[e] = t);
  }
  translateTagSet(n, e) {
    if (this.dict) {
      let t, a, { tagKeys: s, tagValues: i } = this.dict;
      for (t of n) typeof t == "string" ? (a = i.indexOf(t), a === -1 && (a = s.indexOf(Number(t))), a !== -1 && e.add(Number(s[a]))) : e.add(t);
    } else for (let t of n) e.add(t);
  }
  finalizeFilters() {
    !this.enabled && this.deps.size > 0 ? (this.enabled = !0, v4(this.pick, this.deps)) : this.enabled && this.pick.size > 0 && v4(this.pick, this.deps);
  }
}
var L2 = { jfif: !1, tiff: !0, xmp: !1, icc: !1, iptc: !1, ifd0: !0, ifd1: !1, exif: !0, gps: !0, interop: !1, ihdr: void 0, makerNote: !1, userComment: !1, multiSegment: !1, skip: [], pick: [], translateKeys: !0, translateValues: !0, reviveValues: !0, sanitize: !0, mergeOutput: !0, silentErrors: !0, chunked: !0, firstChunkSize: void 0, firstChunkSizeNode: 512, firstChunkSizeBrowser: 65536, chunkSize: 65536, chunkLimit: 5 }, q7 = /* @__PURE__ */ new Map();
class U0 extends l8 {
  static useCached(n) {
    let e = q7.get(n);
    return e !== void 0 || (e = new this(n), q7.set(n, e)), e;
  }
  constructor(n) {
    super(), n === !0 ? this.setupFromTrue() : n === void 0 ? this.setupFromUndefined() : Array.isArray(n) ? this.setupFromArray(n) : typeof n == "object" ? this.setupFromObject(n) : u2(`Invalid options argument ${n}`), this.firstChunkSize === void 0 && (this.firstChunkSize = P1 ? this.firstChunkSizeBrowser : this.firstChunkSizeNode), this.mergeOutput && (this.ifd1.enabled = !1), this.filterNestedSegmentTags(), this.traverseTiffDependencyTree(), this.checkLoadedPlugins();
  }
  setupFromUndefined() {
    let n;
    for (n of d0) this[n] = L2[n];
    for (n of C0) this[n] = L2[n];
    for (n of h0) this[n] = L2[n];
    for (n of u0) this[n] = new b1(n, L2[n], void 0, this);
  }
  setupFromTrue() {
    let n;
    for (n of d0) this[n] = L2[n];
    for (n of C0) this[n] = L2[n];
    for (n of h0) this[n] = !0;
    for (n of u0) this[n] = new b1(n, !0, void 0, this);
  }
  setupFromArray(n) {
    let e;
    for (e of d0) this[e] = L2[e];
    for (e of C0) this[e] = L2[e];
    for (e of h0) this[e] = L2[e];
    for (e of u0) this[e] = new b1(e, !1, void 0, this);
    this.setupGlobalFilters(n, void 0, a2);
  }
  setupFromObject(n) {
    let e;
    for (e of (a2.ifd0 = a2.ifd0 || a2.image, a2.ifd1 = a2.ifd1 || a2.thumbnail, Object.assign(this, n), d0)) this[e] = K4(n[e], L2[e]);
    for (e of C0) this[e] = K4(n[e], L2[e]);
    for (e of h0) this[e] = K4(n[e], L2[e]);
    for (e of A0) this[e] = new b1(e, L2[e], n[e], this);
    for (e of a2) this[e] = new b1(e, L2[e], n[e], this.tiff);
    this.setupGlobalFilters(n.pick, n.skip, a2, u0), n.tiff === !0 ? this.batchEnableWithBool(a2, !0) : n.tiff === !1 ? this.batchEnableWithUserValue(a2, n) : Array.isArray(n.tiff) ? this.setupGlobalFilters(n.tiff, void 0, a2) : typeof n.tiff == "object" && this.setupGlobalFilters(n.tiff.pick, n.tiff.skip, a2);
  }
  batchEnableWithBool(n, e) {
    for (let t of n) this[t].enabled = e;
  }
  batchEnableWithUserValue(n, e) {
    for (let t of n) {
      let a = e[t];
      this[t].enabled = a !== !1 && a !== void 0;
    }
  }
  setupGlobalFilters(n, e, t, a = t) {
    if (n && n.length) {
      for (let i of a) this[i].enabled = !1;
      let s = $7(n, t);
      for (let [i, o] of s) v4(this[i].pick, o), this[i].enabled = !0;
    } else if (e && e.length) {
      let s = $7(e, t);
      for (let [i, o] of s) v4(this[i].skip, o);
    }
  }
  filterNestedSegmentTags() {
    let { ifd0: n, exif: e, xmp: t, iptc: a, icc: s } = this;
    this.makerNote ? e.deps.add(37500) : e.skip.add(37500), this.userComment ? e.deps.add(37510) : e.skip.add(37510), t.enabled || n.skip.add(700), a.enabled || n.skip.add(33723), s.enabled || n.skip.add(34675);
  }
  traverseTiffDependencyTree() {
    let { ifd0: n, exif: e, gps: t, interop: a } = this;
    a.needed && (e.deps.add(40965), n.deps.add(40965)), e.needed && n.deps.add(34665), t.needed && n.deps.add(34853), this.tiff.enabled = a2.some((s) => this[s].enabled === !0) || this.makerNote || this.userComment;
    for (let s of a2) this[s].finalizeFilters();
  }
  get onlyTiff() {
    return !f1.map((n) => this[n].enabled).some((n) => n === !0) && this.tiff.enabled;
  }
  checkLoadedPlugins() {
    for (let n of A0) this[n].enabled && !d2.has(n) && b3("segment parser", n);
  }
}
function $7(r, n) {
  let e, t, a, s, i = [];
  for (a of n) {
    for (s of (e = f2.get(a), t = [], e)) (r.includes(s[0]) || r.includes(s[1])) && t.push(s[0]);
    t.length && i.push([a, t]);
  }
  return i;
}
function K4(r, n) {
  return r !== void 0 ? r : n !== void 0 ? n : void 0;
}
function v4(r, n) {
  for (let e of n) r.add(e);
}
O(U0, "default", L2);
class L0 {
  constructor(n) {
    O(this, "parsers", {}), O(this, "output", {}), O(this, "errors", []), O(this, "pushToErrors", (e) => this.errors.push(e)), this.options = U0.useCached(n);
  }
  async read(n) {
    this.file = await wi(n, this.options);
  }
  setup() {
    if (this.fileParser) return;
    let { file: n } = this, e = n.getUint16(0);
    for (let [t, a] of G2) if (a.canHandle(n, e)) return this.fileParser = new a(this.options, this.file, this.parsers), n[t] = !0;
    this.file.close && this.file.close(), u2("Unknown file format");
  }
  async parse() {
    let { output: n, errors: e } = this;
    return this.setup(), this.options.silentErrors ? (await this.executeParsers().catch(this.pushToErrors), e.push(...this.fileParser.errors)) : await this.executeParsers(), this.file.close && this.file.close(), this.options.silentErrors && e.length > 0 && (n.errors = e), g4(n);
  }
  async executeParsers() {
    let { output: n } = this;
    await this.fileParser.parse();
    let e = Object.values(this.parsers).map(async (t) => {
      let a = await t.parse();
      t.assignToOutput(n, a);
    });
    this.options.silentErrors && (e = e.map((t) => t.catch(this.pushToErrors))), await Promise.all(e);
  }
  async extractThumbnail() {
    this.setup();
    let { options: n, file: e } = this, t = d2.get("tiff", n);
    var a;
    if (e.tiff ? a = { start: 0, type: "tiff" } : e.jpeg && (a = await this.fileParser.getOrFindSegment("tiff")), a === void 0) return;
    let s = await this.fileParser.ensureSegmentChunk(a), i = this.parsers.tiff = new t(s, n, e), o = await i.extractThumbnail();
    return e.close && e.close(), o;
  }
}
async function I4(r, n) {
  let e = new L0(n);
  return await e.read(r), e.parse();
}
var Li = Object.freeze({ __proto__: null, parse: I4, Exifr: L0, fileParsers: G2, segmentParsers: d2, fileReaders: Q2, tagKeys: f2, tagValues: F2, tagRevivers: g0, createDictionary: l2, extendDictionary: j0, fetchUrlAsArrayBuffer: V0, readBlobAsArrayBuffer: R0, chunkedProps: d0, otherSegments: f1, segments: A0, tiffBlocks: a2, segmentsAndBlocks: u0, tiffExtractables: h0, inheritables: p1, allFormatters: C0, Options: U0 });
class N4 {
  constructor(n, e, t) {
    O(this, "errors", []), O(this, "ensureSegmentChunk", async (a) => {
      let s = a.start, i = a.size || 65536;
      if (this.file.chunked) if (this.file.available(s, i)) a.chunk = this.file.subarray(s, i);
      else try {
        a.chunk = await this.file.readChunk(s, i);
      } catch (o) {
        u2(`Couldn't read segment: ${JSON.stringify(a)}. ${o.message}`);
      }
      else this.file.byteLength > s + i ? a.chunk = this.file.subarray(s, i) : a.size === void 0 ? a.chunk = this.file.subarray(s) : u2("Segment unreachable: " + JSON.stringify(a));
      return a.chunk;
    }), this.extendOptions && this.extendOptions(n), this.options = n, this.file = e, this.parsers = t;
  }
  injectSegment(n, e) {
    this.options[n].enabled && this.createParser(n, e);
  }
  createParser(n, e) {
    let t = new (d2.get(n))(e, this.options, this.file);
    return this.parsers[n] = t;
  }
  createParsers(n) {
    for (let e of n) {
      let { type: t, chunk: a } = e, s = this.options[t];
      if (s && s.enabled) {
        let i = this.parsers[t];
        i && i.append || i || this.createParser(t, a);
      }
    }
  }
  async readSegments(n) {
    let e = n.map(this.ensureSegmentChunk);
    await Promise.all(e);
  }
}
class E2 {
  static findPosition(n, e) {
    let t = n.getUint16(e + 2) + 2, a = typeof this.headerLength == "function" ? this.headerLength(n, e, t) : this.headerLength, s = e + a, i = t - a;
    return { offset: e, length: t, headerLength: a, start: s, size: i, end: s + i };
  }
  static parse(n, e = {}) {
    return new this(n, new U0({ [this.type]: e }), n).parse();
  }
  normalizeInput(n) {
    return n instanceof k2 ? n : new k2(n);
  }
  constructor(n, e = {}, t) {
    O(this, "errors", []), O(this, "raw", /* @__PURE__ */ new Map()), O(this, "handleError", (a) => {
      if (!this.options.silentErrors) throw a;
      this.errors.push(a.message);
    }), this.chunk = this.normalizeInput(n), this.file = t, this.type = this.constructor.type, this.globalOptions = this.options = e, this.localOptions = e[this.type], this.canTranslate = this.localOptions && this.localOptions.translate;
  }
  translate() {
    this.canTranslate && (this.translated = this.translateBlock(this.raw, this.type));
  }
  get output() {
    return this.translated ? this.translated : this.raw ? Object.fromEntries(this.raw) : void 0;
  }
  translateBlock(n, e) {
    let t = g0.get(e), a = F2.get(e), s = f2.get(e), i = this.options[e], o = i.reviveValues && !!t, l = i.translateValues && !!a, c = i.translateKeys && !!s, d = {};
    for (let [u, C] of n) o && t.has(u) ? C = t.get(u)(C) : l && a.has(u) && (C = this.translateValue(C, a.get(u))), c && s.has(u) && (u = s.get(u) || u), d[u] = C;
    return d;
  }
  translateValue(n, e) {
    return e[n] || e.DEFAULT || n;
  }
  assignToOutput(n, e) {
    this.assignObjectToOutput(n, this.constructor.type, e);
  }
  assignObjectToOutput(n, e, t) {
    if (this.globalOptions.mergeOutput) return Object.assign(n, t);
    n[e] ? Object.assign(n[e], t) : n[e] = t;
  }
}
O(E2, "headerLength", 4), O(E2, "type", void 0), O(E2, "multiSegment", !1), O(E2, "canHandle", () => !1);
function _i(r) {
  return r === 192 || r === 194 || r === 196 || r === 219 || r === 221 || r === 218 || r === 254;
}
function xi(r) {
  return r >= 224 && r <= 239;
}
function ki(r, n, e) {
  for (let [t, a] of d2) if (a.canHandle(r, n, e)) return t;
}
class G7 extends N4 {
  constructor(...n) {
    super(...n), O(this, "appSegments", []), O(this, "jpegSegments", []), O(this, "unknownSegments", []);
  }
  static canHandle(n, e) {
    return e === 65496;
  }
  async parse() {
    await this.findAppSegments(), await this.readSegments(this.appSegments), this.mergeMultiSegments(), this.createParsers(this.mergedAppSegments || this.appSegments);
  }
  setupSegmentFinderArgs(n) {
    n === !0 ? (this.findAll = !0, this.wanted = new Set(d2.keyList())) : (n = n === void 0 ? d2.keyList().filter((e) => this.options[e].enabled) : n.filter((e) => this.options[e].enabled && d2.has(e)), this.findAll = !1, this.remaining = new Set(n), this.wanted = new Set(n)), this.unfinishedMultiSegment = !1;
  }
  async findAppSegments(n = 0, e) {
    this.setupSegmentFinderArgs(e);
    let { file: t, findAll: a, wanted: s, remaining: i } = this;
    if (!a && this.file.chunked && (a = Array.from(s).some((o) => {
      let l = d2.get(o), c = this.options[o];
      return l.multiSegment && c.multiSegment;
    }), a && await this.file.readWhole()), n = this.findAppSegmentsInRange(n, t.byteLength), !this.options.onlyTiff && t.chunked) {
      let o = !1;
      for (; i.size > 0 && !o && (t.canReadNextChunk || this.unfinishedMultiSegment); ) {
        let { nextChunkOffset: l } = t, c = this.appSegments.some((d) => !this.file.available(d.offset || d.start, d.length || d.size));
        if (o = n > l && !c ? !await t.readNextChunk(n) : !await t.readNextChunk(l), (n = this.findAppSegmentsInRange(n, t.byteLength)) === void 0) return;
      }
    }
  }
  findAppSegmentsInRange(n, e) {
    e -= 2;
    let t, a, s, i, o, l, { file: c, findAll: d, wanted: u, remaining: C, options: f } = this;
    for (; n < e; n++) if (c.getUint8(n) === 255) {
      if (t = c.getUint8(n + 1), xi(t)) {
        if (a = c.getUint16(n + 2), s = ki(c, n, a), s && u.has(s) && (i = d2.get(s), o = i.findPosition(c, n), l = f[s], o.type = s, this.appSegments.push(o), !d && (i.multiSegment && l.multiSegment ? (this.unfinishedMultiSegment = o.chunkNumber < o.chunkCount, this.unfinishedMultiSegment || C.delete(s)) : C.delete(s), C.size === 0))) break;
        f.recordUnknownSegments && (o = E2.findPosition(c, n), o.marker = t, this.unknownSegments.push(o)), n += a + 1;
      } else if (_i(t)) {
        if (a = c.getUint16(n + 2), t === 218 && f.stopAfterSos !== !1) return;
        f.recordJpegSegments && this.jpegSegments.push({ offset: n, length: a, marker: t }), n += a + 1;
      }
    }
    return n;
  }
  mergeMultiSegments() {
    if (!this.appSegments.some((e) => e.multiSegment)) return;
    let n = function(e, t) {
      let a, s, i, o = /* @__PURE__ */ new Map();
      for (let l = 0; l < e.length; l++) a = e[l], s = a[t], o.has(s) ? i = o.get(s) : o.set(s, i = []), i.push(a);
      return Array.from(o);
    }(this.appSegments, "type");
    this.mergedAppSegments = n.map(([e, t]) => {
      let a = d2.get(e, this.options);
      return a.handleMultiSegments ? { type: e, chunk: a.handleMultiSegments(t) } : t[0];
    });
  }
  getSegment(n) {
    return this.appSegments.find((e) => e.type === n);
  }
  async getOrFindSegment(n) {
    let e = this.getSegment(n);
    return e === void 0 && (await this.findAppSegments(0, [n]), e = this.getSegment(n)), e;
  }
}
O(G7, "type", "jpeg"), G2.set("jpeg", G7);
const Zi = [void 0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, 4];
class Di extends E2 {
  parseHeader() {
    var n = this.chunk.getUint16();
    n === 18761 ? this.le = !0 : n === 19789 && (this.le = !1), this.chunk.le = this.le, this.headerParsed = !0;
  }
  parseTags(n, e, t = /* @__PURE__ */ new Map()) {
    let { pick: a, skip: s } = this.options[e];
    a = new Set(a);
    let i = a.size > 0, o = s.size === 0, l = this.chunk.getUint16(n);
    n += 2;
    for (let c = 0; c < l; c++) {
      let d = this.chunk.getUint16(n);
      if (i) {
        if (a.has(d) && (t.set(d, this.parseTag(n, d, e)), a.delete(d), a.size === 0)) break;
      } else !o && s.has(d) || t.set(d, this.parseTag(n, d, e));
      n += 12;
    }
    return t;
  }
  parseTag(n, e, t) {
    let { chunk: a } = this, s = a.getUint16(n + 2), i = a.getUint32(n + 4), o = Zi[s];
    if (o * i <= 4 ? n += 8 : n = a.getUint32(n + 8), (s < 1 || s > 13) && u2(`Invalid TIFF value type. block: ${t.toUpperCase()}, tag: ${e.toString(16)}, type: ${s}, offset ${n}`), n > a.byteLength && u2(`Invalid TIFF value offset. block: ${t.toUpperCase()}, tag: ${e.toString(16)}, type: ${s}, offset ${n} is outside of chunk size ${a.byteLength}`), s === 1) return a.getUint8Array(n, i);
    if (s === 2) return S0(a.getString(n, i));
    if (s === 7) return a.getUint8Array(n, i);
    if (i === 1) return this.parseTagValue(s, n);
    {
      let l = new (function(d) {
        switch (d) {
          case 1:
            return Uint8Array;
          case 3:
            return Uint16Array;
          case 4:
            return Uint32Array;
          case 5:
            return Array;
          case 6:
            return Int8Array;
          case 8:
            return Int16Array;
          case 9:
            return Int32Array;
          case 10:
            return Array;
          case 11:
            return Float32Array;
          case 12:
            return Float64Array;
          default:
            return Array;
        }
      }(s))(i), c = o;
      for (let d = 0; d < i; d++) l[d] = this.parseTagValue(s, n), n += c;
      return l;
    }
  }
  parseTagValue(n, e) {
    let { chunk: t } = this;
    switch (n) {
      case 1:
        return t.getUint8(e);
      case 3:
        return t.getUint16(e);
      case 4:
        return t.getUint32(e);
      case 5:
        return t.getUint32(e) / t.getUint32(e + 4);
      case 6:
        return t.getInt8(e);
      case 8:
        return t.getInt16(e);
      case 9:
        return t.getInt32(e);
      case 10:
        return t.getInt32(e) / t.getInt32(e + 4);
      case 11:
        return t.getFloat(e);
      case 12:
        return t.getDouble(e);
      case 13:
        return t.getUint32(e);
      default:
        u2(`Invalid tiff type ${n}`);
    }
  }
}
class Q4 extends Di {
  static canHandle(n, e) {
    return n.getUint8(e + 1) === 225 && n.getUint32(e + 4) === 1165519206 && n.getUint16(e + 8) === 0;
  }
  async parse() {
    this.parseHeader();
    let { options: n } = this;
    return n.ifd0.enabled && await this.parseIfd0Block(), n.exif.enabled && await this.safeParse("parseExifBlock"), n.gps.enabled && await this.safeParse("parseGpsBlock"), n.interop.enabled && await this.safeParse("parseInteropBlock"), n.ifd1.enabled && await this.safeParse("parseThumbnailBlock"), this.createOutput();
  }
  safeParse(n) {
    let e = this[n]();
    return e.catch !== void 0 && (e = e.catch(this.handleError)), e;
  }
  findIfd0Offset() {
    this.ifd0Offset === void 0 && (this.ifd0Offset = this.chunk.getUint32(4));
  }
  findIfd1Offset() {
    if (this.ifd1Offset === void 0) {
      this.findIfd0Offset();
      let n = this.chunk.getUint16(this.ifd0Offset), e = this.ifd0Offset + 2 + 12 * n;
      this.ifd1Offset = this.chunk.getUint32(e);
    }
  }
  parseBlock(n, e) {
    let t = /* @__PURE__ */ new Map();
    return this[e] = t, this.parseTags(n, e, t), t;
  }
  async parseIfd0Block() {
    if (this.ifd0) return;
    let { file: n } = this;
    this.findIfd0Offset(), this.ifd0Offset < 8 && u2("Malformed EXIF data"), !n.chunked && this.ifd0Offset > n.byteLength && u2(`IFD0 offset points to outside of file.
this.ifd0Offset: ${this.ifd0Offset}, file.byteLength: ${n.byteLength}`), n.tiff && await n.ensureChunk(this.ifd0Offset, y3(this.options));
    let e = this.parseBlock(this.ifd0Offset, "ifd0");
    return e.size !== 0 ? (this.exifOffset = e.get(34665), this.interopOffset = e.get(40965), this.gpsOffset = e.get(34853), this.xmp = e.get(700), this.iptc = e.get(33723), this.icc = e.get(34675), this.options.sanitize && (e.delete(34665), e.delete(40965), e.delete(34853), e.delete(700), e.delete(33723), e.delete(34675)), e) : void 0;
  }
  async parseExifBlock() {
    if (this.exif || (this.ifd0 || await this.parseIfd0Block(), this.exifOffset === void 0)) return;
    this.file.tiff && await this.file.ensureChunk(this.exifOffset, y3(this.options));
    let n = this.parseBlock(this.exifOffset, "exif");
    return this.interopOffset || (this.interopOffset = n.get(40965)), this.makerNote = n.get(37500), this.userComment = n.get(37510), this.options.sanitize && (n.delete(40965), n.delete(37500), n.delete(37510)), this.unpack(n, 41728), this.unpack(n, 41729), n;
  }
  unpack(n, e) {
    let t = n.get(e);
    t && t.length === 1 && n.set(e, t[0]);
  }
  async parseGpsBlock() {
    if (this.gps || (this.ifd0 || await this.parseIfd0Block(), this.gpsOffset === void 0)) return;
    let n = this.parseBlock(this.gpsOffset, "gps");
    return n && n.has(2) && n.has(4) && (n.set("latitude", K7(...n.get(2), n.get(1))), n.set("longitude", K7(...n.get(4), n.get(3)))), n;
  }
  async parseInteropBlock() {
    if (!this.interop && (this.ifd0 || await this.parseIfd0Block(), this.interopOffset !== void 0 || this.exif || await this.parseExifBlock(), this.interopOffset !== void 0)) return this.parseBlock(this.interopOffset, "interop");
  }
  async parseThumbnailBlock(n = !1) {
    if (!this.ifd1 && !this.ifd1Parsed && (!this.options.mergeOutput || n)) return this.findIfd1Offset(), this.ifd1Offset > 0 && (this.parseBlock(this.ifd1Offset, "ifd1"), this.ifd1Parsed = !0), this.ifd1;
  }
  async extractThumbnail() {
    if (this.headerParsed || this.parseHeader(), this.ifd1Parsed || await this.parseThumbnailBlock(!0), this.ifd1 === void 0) return;
    let n = this.ifd1.get(513), e = this.ifd1.get(514);
    return this.chunk.getUint8Array(n, e);
  }
  get image() {
    return this.ifd0;
  }
  get thumbnail() {
    return this.ifd1;
  }
  createOutput() {
    let n, e, t, a = {};
    for (e of a2) if (n = this[e], !i8(n)) if (t = this.canTranslate ? this.translateBlock(n, e) : Object.fromEntries(n), this.options.mergeOutput) {
      if (e === "ifd1") continue;
      Object.assign(a, t);
    } else a[e] = t;
    return this.makerNote && (a.makerNote = this.makerNote), this.userComment && (a.userComment = this.userComment), a;
  }
  assignToOutput(n, e) {
    if (this.globalOptions.mergeOutput) Object.assign(n, e);
    else for (let [t, a] of Object.entries(e)) this.assignObjectToOutput(n, t, a);
  }
}
function K7(r, n, e, t) {
  var a = r + n / 60 + e / 3600;
  return t !== "S" && t !== "W" || (a *= -1), a;
}
O(Q4, "type", "tiff"), O(Q4, "headerLength", 10), d2.set("tiff", Q4);
var Si = Object.freeze({ __proto__: null, default: Li, Exifr: L0, fileParsers: G2, segmentParsers: d2, fileReaders: Q2, tagKeys: f2, tagValues: F2, tagRevivers: g0, createDictionary: l2, extendDictionary: j0, fetchUrlAsArrayBuffer: V0, readBlobAsArrayBuffer: R0, chunkedProps: d0, otherSegments: f1, segments: A0, tiffBlocks: a2, segmentsAndBlocks: u0, tiffExtractables: h0, inheritables: p1, allFormatters: C0, Options: U0, parse: I4 });
const Y3 = { ifd0: !1, ifd1: !1, exif: !1, gps: !1, interop: !1, sanitize: !1, reviveValues: !0, translateKeys: !1, translateValues: !1, mergeOutput: !1 }, U3 = Object.assign({}, Y3, { firstChunkSize: 4e4, gps: [1, 2, 3, 4] });
async function c8(r) {
  let n = new L0(U3);
  await n.read(r);
  let e = await n.parse();
  if (e && e.gps) {
    let { latitude: t, longitude: a } = e.gps;
    return { latitude: t, longitude: a };
  }
}
const W3 = Object.assign({}, Y3, { tiff: !1, ifd1: !0, mergeOutput: !1 });
async function d8(r) {
  let n = new L0(W3);
  await n.read(r);
  let e = await n.extractThumbnail();
  return e && E4 ? O4.from(e) : e;
}
async function u8(r) {
  let n = await this.thumbnail(r);
  if (n !== void 0) {
    let e = new Blob([n]);
    return URL.createObjectURL(e);
  }
}
const z3 = Object.assign({}, Y3, { firstChunkSize: 4e4, ifd0: [274] });
async function q3(r) {
  let n = new L0(z3);
  await n.read(r);
  let e = await n.parse();
  if (e && e.ifd0) return e.ifd0[274];
}
const $3 = Object.freeze({ 1: { dimensionSwapped: !1, scaleX: 1, scaleY: 1, deg: 0, rad: 0 }, 2: { dimensionSwapped: !1, scaleX: -1, scaleY: 1, deg: 0, rad: 0 }, 3: { dimensionSwapped: !1, scaleX: 1, scaleY: 1, deg: 180, rad: 180 * Math.PI / 180 }, 4: { dimensionSwapped: !1, scaleX: -1, scaleY: 1, deg: 180, rad: 180 * Math.PI / 180 }, 5: { dimensionSwapped: !0, scaleX: 1, scaleY: -1, deg: 90, rad: 90 * Math.PI / 180 }, 6: { dimensionSwapped: !0, scaleX: 1, scaleY: 1, deg: 90, rad: 90 * Math.PI / 180 }, 7: { dimensionSwapped: !0, scaleX: 1, scaleY: -1, deg: 270, rad: 270 * Math.PI / 180 }, 8: { dimensionSwapped: !0, scaleX: 1, scaleY: 1, deg: 270, rad: 270 * Math.PI / 180 } });
let P0 = !0, H0 = !0;
if (typeof navigator == "object") {
  let r = navigator.userAgent;
  if (r.includes("iPad") || r.includes("iPhone")) {
    let n = r.match(/OS (\d+)_(\d+)/);
    if (n) {
      let [, e, t] = n;
      P0 = Number(e) + 0.1 * Number(t) < 13.4, H0 = !1;
    }
  } else if (r.includes("OS X 10")) {
    let [, n] = r.match(/OS X 10[_.](\d+)/);
    P0 = H0 = Number(n) < 15;
  }
  if (r.includes("Chrome/")) {
    let [, n] = r.match(/Chrome\/(\d+)/);
    P0 = H0 = Number(n) < 81;
  } else if (r.includes("Firefox/")) {
    let [, n] = r.match(/Firefox\/(\d+)/);
    P0 = H0 = Number(n) < 77;
  }
}
async function h8(r) {
  let n = await q3(r);
  return Object.assign({ canvas: P0, css: H0 }, $3[n]);
}
class Pi extends k2 {
  constructor(...n) {
    super(...n), O(this, "ranges", new Hi()), this.byteLength !== 0 && this.ranges.add(0, this.byteLength);
  }
  _tryExtend(n, e, t) {
    if (n === 0 && this.byteLength === 0 && t) {
      let a = new DataView(t.buffer || t, t.byteOffset, t.byteLength);
      this._swapDataView(a);
    } else {
      let a = n + e;
      if (a > this.byteLength) {
        let { dataView: s } = this._extend(a);
        this._swapDataView(s);
      }
    }
  }
  _extend(n) {
    let e;
    e = E4 ? O4.allocUnsafe(n) : new Uint8Array(n);
    let t = new DataView(e.buffer, e.byteOffset, e.byteLength);
    return e.set(new Uint8Array(this.buffer, this.byteOffset, this.byteLength), 0), { uintView: e, dataView: t };
  }
  subarray(n, e, t = !1) {
    return e = e || this._lengthToEnd(n), t && this._tryExtend(n, e), this.ranges.add(n, e), super.subarray(n, e);
  }
  set(n, e, t = !1) {
    t && this._tryExtend(e, n.byteLength, n);
    let a = super.set(n, e);
    return this.ranges.add(e, a.byteLength), a;
  }
  async ensureChunk(n, e) {
    this.chunked && (this.ranges.available(n, e) || await this.readChunk(n, e));
  }
  available(n, e) {
    return this.ranges.available(n, e);
  }
}
class Hi {
  constructor() {
    O(this, "list", []);
  }
  get length() {
    return this.list.length;
  }
  add(n, e, t = 0) {
    let a = n + e, s = this.list.filter((i) => Q7(n, i.offset, a) || Q7(n, i.end, a));
    if (s.length > 0) {
      n = Math.min(n, ...s.map((o) => o.offset)), a = Math.max(a, ...s.map((o) => o.end)), e = a - n;
      let i = s.shift();
      i.offset = n, i.length = e, i.end = a, this.list = this.list.filter((o) => !s.includes(o));
    } else this.list.push({ offset: n, length: e, end: a });
  }
  available(n, e) {
    let t = n + e;
    return this.list.some((a) => a.offset <= n && t <= a.end);
  }
}
function Q7(r, n, e) {
  return r <= n && n <= e;
}
class F4 extends Pi {
  constructor(n, e) {
    super(0), O(this, "chunksRead", 0), this.input = n, this.options = e;
  }
  async readWhole() {
    this.chunked = !1, await this.readChunk(this.nextChunkOffset);
  }
  async readChunked() {
    this.chunked = !0, await this.readChunk(0, this.options.firstChunkSize);
  }
  async readNextChunk(n = this.nextChunkOffset) {
    if (this.fullyRead) return this.chunksRead++, !1;
    let e = this.options.chunkSize, t = await this.readChunk(n, e);
    return !!t && t.byteLength === e;
  }
  async readChunk(n, e) {
    if (this.chunksRead++, (e = this.safeWrapAddress(n, e)) !== 0) return this._readChunk(n, e);
  }
  safeWrapAddress(n, e) {
    return this.size !== void 0 && n + e > this.size ? Math.max(0, this.size - n) : e;
  }
  get nextChunkOffset() {
    if (this.ranges.list.length !== 0) return this.ranges.list[0].length;
  }
  get canReadNextChunk() {
    return this.chunksRead < this.options.chunkLimit;
  }
  get fullyRead() {
    return this.size !== void 0 && this.nextChunkOffset === this.size;
  }
  read() {
    return this.options.chunked ? this.readChunked() : this.readWhole();
  }
  close() {
  }
}
Q2.set("blob", class extends F4 {
  async readWhole() {
    this.chunked = !1;
    let r = await R0(this.input);
    this._swapArrayBuffer(r);
  }
  readChunked() {
    return this.chunked = !0, this.size = this.input.size, super.readChunked();
  }
  async _readChunk(r, n) {
    let e = n ? r + n : void 0, t = this.input.slice(r, e), a = await R0(t);
    return this.set(a, r, !0);
  }
});
var Ti = Object.freeze({ __proto__: null, default: Si, Exifr: L0, fileParsers: G2, segmentParsers: d2, fileReaders: Q2, tagKeys: f2, tagValues: F2, tagRevivers: g0, createDictionary: l2, extendDictionary: j0, fetchUrlAsArrayBuffer: V0, readBlobAsArrayBuffer: R0, chunkedProps: d0, otherSegments: f1, segments: A0, tiffBlocks: a2, segmentsAndBlocks: u0, tiffExtractables: h0, inheritables: p1, allFormatters: C0, Options: U0, parse: I4, gpsOnlyOptions: U3, gps: c8, thumbnailOnlyOptions: W3, thumbnail: d8, thumbnailUrl: u8, orientationOnlyOptions: z3, orientation: q3, rotations: $3, get rotateCanvas() {
  return P0;
}, get rotateCss() {
  return H0;
}, rotation: h8 });
Q2.set("url", class extends F4 {
  async readWhole() {
    this.chunked = !1;
    let r = await V0(this.input);
    r instanceof ArrayBuffer ? this._swapArrayBuffer(r) : r instanceof Uint8Array && this._swapBuffer(r);
  }
  async _readChunk(r, n) {
    let e = n ? r + n - 1 : void 0, t = this.options.httpHeaders || {};
    (r || e) && (t.range = `bytes=${[r, e].join("-")}`);
    let a = await A3(this.input, { headers: t }), s = await a.arrayBuffer(), i = s.byteLength;
    if (a.status !== 416) return i !== n && (this.size = r + i), this.set(s, r, !0);
  }
});
k2.prototype.getUint64 = function(r) {
  let n = this.getUint32(r), e = this.getUint32(r + 4);
  return n < 1048575 ? n << 32 | e : typeof Y1 !== void 0 ? (console.warn("Using BigInt because of type 64uint but JS can only handle 53b numbers."), Y1(n) << Y1(32) | Y1(e)) : void u2("Trying to read 64b value but JS can only handle 53b numbers.");
};
class Oi extends N4 {
  parseBoxes(n = 0) {
    let e = [];
    for (; n < this.file.byteLength - 4; ) {
      let t = this.parseBoxHead(n);
      if (e.push(t), t.length === 0) break;
      n += t.length;
    }
    return e;
  }
  parseSubBoxes(n) {
    n.boxes = this.parseBoxes(n.start);
  }
  findBox(n, e) {
    return n.boxes === void 0 && this.parseSubBoxes(n), n.boxes.find((t) => t.kind === e);
  }
  parseBoxHead(n) {
    let e = this.file.getUint32(n), t = this.file.getString(n + 4, 4), a = n + 8;
    return e === 1 && (e = this.file.getUint64(n + 8), a += 8), { offset: n, length: e, kind: t, start: a };
  }
  parseBoxFullHead(n) {
    if (n.version !== void 0) return;
    let e = this.file.getUint32(n.start);
    n.version = e >> 24, n.start += 4;
  }
}
class C8 extends Oi {
  static canHandle(n, e) {
    if (e !== 0) return !1;
    let t = n.getUint16(2);
    if (t > 50) return !1;
    let a = 16, s = [];
    for (; a < t; ) s.push(n.getString(a, 4)), a += 4;
    return s.includes(this.type);
  }
  async parse() {
    let n = this.file.getUint32(0), e = this.parseBoxHead(n);
    for (; e.kind !== "meta"; ) n += e.length, await this.file.ensureChunk(n, 16), e = this.parseBoxHead(n);
    await this.file.ensureChunk(e.offset, e.length), this.parseBoxFullHead(e), this.parseSubBoxes(e), this.options.icc.enabled && await this.findIcc(e), this.options.tiff.enabled && await this.findExif(e);
  }
  async registerSegment(n, e, t) {
    await this.file.ensureChunk(e, t);
    let a = this.file.subarray(e, t);
    this.createParser(n, a);
  }
  async findIcc(n) {
    let e = this.findBox(n, "iprp");
    if (e === void 0) return;
    let t = this.findBox(e, "ipco");
    if (t === void 0) return;
    let a = this.findBox(t, "colr");
    a !== void 0 && await this.registerSegment("icc", a.offset + 12, a.length);
  }
  async findExif(n) {
    let e = this.findBox(n, "iinf");
    if (e === void 0) return;
    let t = this.findBox(n, "iloc");
    if (t === void 0) return;
    let a = this.findExifLocIdInIinf(e), s = this.findExtentInIloc(t, a);
    if (s === void 0) return;
    let [i, o] = s;
    await this.file.ensureChunk(i, o);
    let l = 4 + this.file.getUint32(i);
    i += l, o -= l, await this.registerSegment("tiff", i, o);
  }
  findExifLocIdInIinf(n) {
    this.parseBoxFullHead(n);
    let e, t, a, s, i = n.start, o = this.file.getUint16(i);
    for (i += 2; o--; ) {
      if (e = this.parseBoxHead(i), this.parseBoxFullHead(e), t = e.start, e.version >= 2 && (a = e.version === 3 ? 4 : 2, s = this.file.getString(t + a + 2, 4), s === "Exif")) return this.file.getUintBytes(t, a);
      i += e.length;
    }
  }
  get8bits(n) {
    let e = this.file.getUint8(n);
    return [e >> 4, 15 & e];
  }
  findExtentInIloc(n, e) {
    this.parseBoxFullHead(n);
    let t = n.start, [a, s] = this.get8bits(t++), [i, o] = this.get8bits(t++), l = n.version === 2 ? 4 : 2, c = n.version === 1 || n.version === 2 ? 2 : 0, d = o + a + s, u = n.version === 2 ? 4 : 2, C = this.file.getUintBytes(t, u);
    for (t += u; C--; ) {
      let f = this.file.getUintBytes(t, l);
      t += l + c + 2 + i;
      let p = this.file.getUint16(t);
      if (t += 2, f === e) return p > 1 && console.warn(`ILOC box has more than one extent but we're only processing one
Please create an issue at https://github.com/MikeKovarik/exifr with this file`), [this.file.getUintBytes(t + o, a), this.file.getUintBytes(t + o + a, s)];
      t += p * d;
    }
  }
}
class f8 extends C8 {
}
O(f8, "type", "heic");
class X7 extends C8 {
}
O(X7, "type", "avif"), G2.set("heic", f8), G2.set("avif", X7), l2(f2, ["ifd0", "ifd1"], [[256, "ImageWidth"], [257, "ImageHeight"], [258, "BitsPerSample"], [259, "Compression"], [262, "PhotometricInterpretation"], [270, "ImageDescription"], [271, "Make"], [272, "Model"], [273, "StripOffsets"], [274, "Orientation"], [277, "SamplesPerPixel"], [278, "RowsPerStrip"], [279, "StripByteCounts"], [282, "XResolution"], [283, "YResolution"], [284, "PlanarConfiguration"], [296, "ResolutionUnit"], [301, "TransferFunction"], [305, "Software"], [306, "ModifyDate"], [315, "Artist"], [316, "HostComputer"], [317, "Predictor"], [318, "WhitePoint"], [319, "PrimaryChromaticities"], [513, "ThumbnailOffset"], [514, "ThumbnailLength"], [529, "YCbCrCoefficients"], [530, "YCbCrSubSampling"], [531, "YCbCrPositioning"], [532, "ReferenceBlackWhite"], [700, "ApplicationNotes"], [33432, "Copyright"], [33723, "IPTC"], [34665, "ExifIFD"], [34675, "ICC"], [34853, "GpsIFD"], [330, "SubIFD"], [40965, "InteropIFD"], [40091, "XPTitle"], [40092, "XPComment"], [40093, "XPAuthor"], [40094, "XPKeywords"], [40095, "XPSubject"]]), l2(f2, "exif", [[33434, "ExposureTime"], [33437, "FNumber"], [34850, "ExposureProgram"], [34852, "SpectralSensitivity"], [34855, "ISO"], [34858, "TimeZoneOffset"], [34859, "SelfTimerMode"], [34864, "SensitivityType"], [34865, "StandardOutputSensitivity"], [34866, "RecommendedExposureIndex"], [34867, "ISOSpeed"], [34868, "ISOSpeedLatitudeyyy"], [34869, "ISOSpeedLatitudezzz"], [36864, "ExifVersion"], [36867, "DateTimeOriginal"], [36868, "CreateDate"], [36873, "GooglePlusUploadCode"], [36880, "OffsetTime"], [36881, "OffsetTimeOriginal"], [36882, "OffsetTimeDigitized"], [37121, "ComponentsConfiguration"], [37122, "CompressedBitsPerPixel"], [37377, "ShutterSpeedValue"], [37378, "ApertureValue"], [37379, "BrightnessValue"], [37380, "ExposureCompensation"], [37381, "MaxApertureValue"], [37382, "SubjectDistance"], [37383, "MeteringMode"], [37384, "LightSource"], [37385, "Flash"], [37386, "FocalLength"], [37393, "ImageNumber"], [37394, "SecurityClassification"], [37395, "ImageHistory"], [37396, "SubjectArea"], [37500, "MakerNote"], [37510, "UserComment"], [37520, "SubSecTime"], [37521, "SubSecTimeOriginal"], [37522, "SubSecTimeDigitized"], [37888, "AmbientTemperature"], [37889, "Humidity"], [37890, "Pressure"], [37891, "WaterDepth"], [37892, "Acceleration"], [37893, "CameraElevationAngle"], [40960, "FlashpixVersion"], [40961, "ColorSpace"], [40962, "ExifImageWidth"], [40963, "ExifImageHeight"], [40964, "RelatedSoundFile"], [41483, "FlashEnergy"], [41486, "FocalPlaneXResolution"], [41487, "FocalPlaneYResolution"], [41488, "FocalPlaneResolutionUnit"], [41492, "SubjectLocation"], [41493, "ExposureIndex"], [41495, "SensingMethod"], [41728, "FileSource"], [41729, "SceneType"], [41730, "CFAPattern"], [41985, "CustomRendered"], [41986, "ExposureMode"], [41987, "WhiteBalance"], [41988, "DigitalZoomRatio"], [41989, "FocalLengthIn35mmFormat"], [41990, "SceneCaptureType"], [41991, "GainControl"], [41992, "Contrast"], [41993, "Saturation"], [41994, "Sharpness"], [41996, "SubjectDistanceRange"], [42016, "ImageUniqueID"], [42032, "OwnerName"], [42033, "SerialNumber"], [42034, "LensInfo"], [42035, "LensMake"], [42036, "LensModel"], [42037, "LensSerialNumber"], [42080, "CompositeImage"], [42081, "CompositeImageCount"], [42082, "CompositeImageExposureTimes"], [42240, "Gamma"], [59932, "Padding"], [59933, "OffsetSchema"], [65e3, "OwnerName"], [65001, "SerialNumber"], [65002, "Lens"], [65100, "RawFile"], [65101, "Converter"], [65102, "WhiteBalance"], [65105, "Exposure"], [65106, "Shadows"], [65107, "Brightness"], [65108, "Contrast"], [65109, "Saturation"], [65110, "Sharpness"], [65111, "Smoothness"], [65112, "MoireFilter"], [40965, "InteropIFD"]]), l2(f2, "gps", [[0, "GPSVersionID"], [1, "GPSLatitudeRef"], [2, "GPSLatitude"], [3, "GPSLongitudeRef"], [4, "GPSLongitude"], [5, "GPSAltitudeRef"], [6, "GPSAltitude"], [7, "GPSTimeStamp"], [8, "GPSSatellites"], [9, "GPSStatus"], [10, "GPSMeasureMode"], [11, "GPSDOP"], [12, "GPSSpeedRef"], [13, "GPSSpeed"], [14, "GPSTrackRef"], [15, "GPSTrack"], [16, "GPSImgDirectionRef"], [17, "GPSImgDirection"], [18, "GPSMapDatum"], [19, "GPSDestLatitudeRef"], [20, "GPSDestLatitude"], [21, "GPSDestLongitudeRef"], [22, "GPSDestLongitude"], [23, "GPSDestBearingRef"], [24, "GPSDestBearing"], [25, "GPSDestDistanceRef"], [26, "GPSDestDistance"], [27, "GPSProcessingMethod"], [28, "GPSAreaInformation"], [29, "GPSDateStamp"], [30, "GPSDifferential"], [31, "GPSHPositioningError"]]), l2(F2, ["ifd0", "ifd1"], [[274, { 1: "Horizontal (normal)", 2: "Mirror horizontal", 3: "Rotate 180", 4: "Mirror vertical", 5: "Mirror horizontal and rotate 270 CW", 6: "Rotate 90 CW", 7: "Mirror horizontal and rotate 90 CW", 8: "Rotate 270 CW" }], [296, { 1: "None", 2: "inches", 3: "cm" }]]);
let x1 = l2(F2, "exif", [[34850, { 0: "Not defined", 1: "Manual", 2: "Normal program", 3: "Aperture priority", 4: "Shutter priority", 5: "Creative program", 6: "Action program", 7: "Portrait mode", 8: "Landscape mode" }], [37121, { 0: "-", 1: "Y", 2: "Cb", 3: "Cr", 4: "R", 5: "G", 6: "B" }], [37383, { 0: "Unknown", 1: "Average", 2: "CenterWeightedAverage", 3: "Spot", 4: "MultiSpot", 5: "Pattern", 6: "Partial", 255: "Other" }], [37384, { 0: "Unknown", 1: "Daylight", 2: "Fluorescent", 3: "Tungsten (incandescent light)", 4: "Flash", 9: "Fine weather", 10: "Cloudy weather", 11: "Shade", 12: "Daylight fluorescent (D 5700 - 7100K)", 13: "Day white fluorescent (N 4600 - 5400K)", 14: "Cool white fluorescent (W 3900 - 4500K)", 15: "White fluorescent (WW 3200 - 3700K)", 17: "Standard light A", 18: "Standard light B", 19: "Standard light C", 20: "D55", 21: "D65", 22: "D75", 23: "D50", 24: "ISO studio tungsten", 255: "Other" }], [37385, { 0: "Flash did not fire", 1: "Flash fired", 5: "Strobe return light not detected", 7: "Strobe return light detected", 9: "Flash fired, compulsory flash mode", 13: "Flash fired, compulsory flash mode, return light not detected", 15: "Flash fired, compulsory flash mode, return light detected", 16: "Flash did not fire, compulsory flash mode", 24: "Flash did not fire, auto mode", 25: "Flash fired, auto mode", 29: "Flash fired, auto mode, return light not detected", 31: "Flash fired, auto mode, return light detected", 32: "No flash function", 65: "Flash fired, red-eye reduction mode", 69: "Flash fired, red-eye reduction mode, return light not detected", 71: "Flash fired, red-eye reduction mode, return light detected", 73: "Flash fired, compulsory flash mode, red-eye reduction mode", 77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected", 79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected", 89: "Flash fired, auto mode, red-eye reduction mode", 93: "Flash fired, auto mode, return light not detected, red-eye reduction mode", 95: "Flash fired, auto mode, return light detected, red-eye reduction mode" }], [41495, { 1: "Not defined", 2: "One-chip color area sensor", 3: "Two-chip color area sensor", 4: "Three-chip color area sensor", 5: "Color sequential area sensor", 7: "Trilinear sensor", 8: "Color sequential linear sensor" }], [41728, { 1: "Film Scanner", 2: "Reflection Print Scanner", 3: "Digital Camera" }], [41729, { 1: "Directly photographed" }], [41985, { 0: "Normal", 1: "Custom", 2: "HDR (no original saved)", 3: "HDR (original saved)", 4: "Original (for HDR)", 6: "Panorama", 7: "Portrait HDR", 8: "Portrait" }], [41986, { 0: "Auto", 1: "Manual", 2: "Auto bracket" }], [41987, { 0: "Auto", 1: "Manual" }], [41990, { 0: "Standard", 1: "Landscape", 2: "Portrait", 3: "Night", 4: "Other" }], [41991, { 0: "None", 1: "Low gain up", 2: "High gain up", 3: "Low gain down", 4: "High gain down" }], [41996, { 0: "Unknown", 1: "Macro", 2: "Close", 3: "Distant" }], [42080, { 0: "Unknown", 1: "Not a Composite Image", 2: "General Composite Image", 3: "Composite Image Captured While Shooting" }]]);
const J7 = { 1: "No absolute unit of measurement", 2: "Inch", 3: "Centimeter" };
x1.set(37392, J7), x1.set(41488, J7);
const X4 = { 0: "Normal", 1: "Low", 2: "High" };
function e5(r) {
  return typeof r == "object" && r.length !== void 0 ? r[0] : r;
}
function t5(r) {
  let n = Array.from(r).slice(1);
  return n[1] > 15 && (n = n.map((e) => String.fromCharCode(e))), n[2] !== "0" && n[2] !== 0 || n.pop(), n.join(".");
}
function J4(r) {
  if (typeof r == "string") {
    var [n, e, t, a, s, i] = r.trim().split(/[-: ]/g).map(Number), o = new Date(n, e - 1, t);
    return Number.isNaN(a) || Number.isNaN(s) || Number.isNaN(i) || (o.setHours(a), o.setMinutes(s), o.setSeconds(i)), Number.isNaN(+o) ? r : o;
  }
}
function L1(r) {
  if (typeof r == "string") return r;
  let n = [];
  if (r[1] === 0 && r[r.length - 1] === 0) for (let e = 0; e < r.length; e += 2) n.push(n5(r[e + 1], r[e]));
  else for (let e = 0; e < r.length; e += 2) n.push(n5(r[e], r[e + 1]));
  return S0(String.fromCodePoint(...n));
}
function n5(r, n) {
  return r << 8 | n;
}
x1.set(41992, X4), x1.set(41993, X4), x1.set(41994, X4), l2(g0, ["ifd0", "ifd1"], [[50827, function(r) {
  return typeof r != "string" ? o8(r) : r;
}], [306, J4], [40091, L1], [40092, L1], [40093, L1], [40094, L1], [40095, L1]]), l2(g0, "exif", [[40960, t5], [36864, t5], [36867, J4], [36868, J4], [40962, e5], [40963, e5]]), l2(g0, "gps", [[0, (r) => Array.from(r).join(".")], [7, (r) => Array.from(r).join(":")]]);
class e3 extends E2 {
  static canHandle(n, e) {
    return n.getUint8(e + 1) === 225 && n.getUint32(e + 4) === 1752462448 && n.getString(e + 4, 20) === "http://ns.adobe.com/";
  }
  static headerLength(n, e) {
    return n.getString(e + 4, 34) === "http://ns.adobe.com/xmp/extension/" ? 79 : 33;
  }
  static findPosition(n, e) {
    let t = super.findPosition(n, e);
    return t.multiSegment = t.extended = t.headerLength === 79, t.multiSegment ? (t.chunkCount = n.getUint8(e + 72), t.chunkNumber = n.getUint8(e + 76), n.getUint8(e + 77) !== 0 && t.chunkNumber++) : (t.chunkCount = 1 / 0, t.chunkNumber = -1), t;
  }
  static handleMultiSegments(n) {
    return n.map((e) => e.chunk.getString()).join("");
  }
  normalizeInput(n) {
    return typeof n == "string" ? n : k2.from(n).getString();
  }
  parse(n = this.chunk) {
    if (!this.localOptions.parse) return n;
    n = function(s) {
      let i = {}, o = {};
      for (let l of v8) i[l] = [], o[l] = 0;
      return s.replace(Fi, (l, c, d) => {
        if (c === "<") {
          let u = ++o[d];
          return i[d].push(u), `${l}#${u}`;
        }
        return `${l}#${i[d].pop()}`;
      });
    }(n);
    let e = r1.findAll(n, "rdf", "Description");
    e.length === 0 && e.push(new r1("rdf", "Description", void 0, n));
    let t, a = {};
    for (let s of e) for (let i of s.properties) t = Ni(i.ns, a), p8(i, t);
    return function(s) {
      let i;
      for (let o in s) i = s[o] = g4(s[o]), i === void 0 && delete s[o];
      return g4(s);
    }(a);
  }
  assignToOutput(n, e) {
    if (this.localOptions.parse) for (let [t, a] of Object.entries(e)) switch (t) {
      case "tiff":
        this.assignObjectToOutput(n, "ifd0", a);
        break;
      case "exif":
        this.assignObjectToOutput(n, "exif", a);
        break;
      case "xmlns":
        break;
      default:
        this.assignObjectToOutput(n, t, a);
    }
    else n.xmp = e;
  }
}
O(e3, "type", "xmp"), O(e3, "multiSegment", !0), d2.set("xmp", e3);
class M4 {
  static findAll(n) {
    return m8(n, /([a-zA-Z0-9-]+):([a-zA-Z0-9-]+)=("[^"]*"|'[^']*')/gm).map(M4.unpackMatch);
  }
  static unpackMatch(n) {
    let e = n[1], t = n[2], a = n[3].slice(1, -1);
    return a = g8(a), new M4(e, t, a);
  }
  constructor(n, e, t) {
    this.ns = n, this.name = e, this.value = t;
  }
  serialize() {
    return this.value;
  }
}
class r1 {
  static findAll(n, e, t) {
    if (e !== void 0 || t !== void 0) {
      e = e || "[\\w\\d-]+", t = t || "[\\w\\d-]+";
      var a = new RegExp(`<(${e}):(${t})(#\\d+)?((\\s+?[\\w\\d-:]+=("[^"]*"|'[^']*'))*\\s*)(\\/>|>([\\s\\S]*?)<\\/\\1:\\2\\3>)`, "gm");
    } else a = /<([\w\d-]+):([\w\d-]+)(#\d+)?((\s+?[\w\d-:]+=("[^"]*"|'[^']*'))*\s*)(\/>|>([\s\S]*?)<\/\1:\2\3>)/gm;
    return m8(n, a).map(r1.unpackMatch);
  }
  static unpackMatch(n) {
    let e = n[1], t = n[2], a = n[4], s = n[8];
    return new r1(e, t, a, s);
  }
  constructor(n, e, t, a) {
    this.ns = n, this.name = e, this.attrString = t, this.innerXml = a, this.attrs = M4.findAll(t), this.children = r1.findAll(a), this.value = this.children.length === 0 ? g8(a) : void 0, this.properties = [...this.attrs, ...this.children];
  }
  get isPrimitive() {
    return this.value !== void 0 && this.attrs.length === 0 && this.children.length === 0;
  }
  get isListContainer() {
    return this.children.length === 1 && this.children[0].isList;
  }
  get isList() {
    let { ns: n, name: e } = this;
    return n === "rdf" && (e === "Seq" || e === "Bag" || e === "Alt");
  }
  get isListItem() {
    return this.ns === "rdf" && this.name === "li";
  }
  serialize() {
    if (this.properties.length === 0 && this.value === void 0) return;
    if (this.isPrimitive) return this.value;
    if (this.isListContainer) return this.children[0].serialize();
    if (this.isList) return Ii(this.children.map(Ei));
    if (this.isListItem && this.children.length === 1 && this.attrs.length === 0) return this.children[0].serialize();
    let n = {};
    for (let e of this.properties) p8(e, n);
    return this.value !== void 0 && (n.value = this.value), g4(n);
  }
}
function p8(r, n) {
  let e = r.serialize();
  e !== void 0 && (n[r.name] = e);
}
var Ei = (r) => r.serialize(), Ii = (r) => r.length === 1 ? r[0] : r, Ni = (r, n) => n[r] ? n[r] : n[r] = {};
function m8(r, n) {
  let e, t = [];
  if (!r) return t;
  for (; (e = n.exec(r)) !== null; ) t.push(e);
  return t;
}
function g8(r) {
  if (function(t) {
    return t == null || t === "null" || t === "undefined" || t === "" || t.trim() === "";
  }(r)) return;
  let n = Number(r);
  if (!Number.isNaN(n)) return n;
  let e = r.toLowerCase();
  return e === "true" || e !== "false" && r.trim();
}
const v8 = ["rdf:li", "rdf:Seq", "rdf:Bag", "rdf:Alt", "rdf:Description"], Fi = new RegExp(`(<|\\/)(${v8.join("|")})`, "g");
var Vi = Object.freeze({ __proto__: null, default: Ti, Exifr: L0, fileParsers: G2, segmentParsers: d2, fileReaders: Q2, tagKeys: f2, tagValues: F2, tagRevivers: g0, createDictionary: l2, extendDictionary: j0, fetchUrlAsArrayBuffer: V0, readBlobAsArrayBuffer: R0, chunkedProps: d0, otherSegments: f1, segments: A0, tiffBlocks: a2, segmentsAndBlocks: u0, tiffExtractables: h0, inheritables: p1, allFormatters: C0, Options: U0, parse: I4, gpsOnlyOptions: U3, gps: c8, thumbnailOnlyOptions: W3, thumbnail: d8, thumbnailUrl: u8, orientationOnlyOptions: z3, orientation: q3, rotations: $3, get rotateCanvas() {
  return P0;
}, get rotateCss() {
  return H0;
}, rotation: h8 });
let r5 = m4("fs", (r) => r.promises);
Q2.set("fs", class extends F4 {
  async readWhole() {
    this.chunked = !1, this.fs = await r5;
    let r = await this.fs.readFile(this.input);
    this._swapBuffer(r);
  }
  async readChunked() {
    this.chunked = !0, this.fs = await r5, await this.open(), await this.readChunk(0, this.options.firstChunkSize);
  }
  async open() {
    this.fh === void 0 && (this.fh = await this.fs.open(this.input, "r"), this.size = (await this.fh.stat(this.input)).size);
  }
  async _readChunk(r, n) {
    this.fh === void 0 && await this.open(), r + n > this.size && (n = this.size - r);
    var e = this.subarray(r, n, !0);
    return await this.fh.read(e.dataView, 0, n, r), e;
  }
  async close() {
    if (this.fh) {
      let r = this.fh;
      this.fh = void 0, await r.close();
    }
  }
});
Q2.set("base64", class extends F4 {
  constructor(...r) {
    super(...r), this.input = this.input.replace(/^data:([^;]+);base64,/gim, ""), this.size = this.input.length / 4 * 3, this.input.endsWith("==") ? this.size -= 2 : this.input.endsWith("=") && (this.size -= 1);
  }
  async _readChunk(r, n) {
    let e, t, a = this.input;
    r === void 0 ? (r = 0, e = 0, t = 0) : (e = 4 * Math.floor(r / 3), t = r - e / 4 * 3), n === void 0 && (n = this.size);
    let s = r + n, i = e + 4 * Math.ceil(s / 3);
    a = a.slice(e, i);
    let o = Math.min(n, this.size - r);
    if (E4) {
      let l = O4.from(a, "base64").slice(t, t + o);
      return this.set(l, r, !0);
    }
    {
      let l = this.subarray(r, o, !0), c = atob(a), d = l.toUint8();
      for (let u = 0; u < o; u++) d[u] = c.charCodeAt(t + u);
      return l;
    }
  }
});
class a5 extends N4 {
  static canHandle(n, e) {
    return e === 18761 || e === 19789;
  }
  extendOptions(n) {
    let { ifd0: e, xmp: t, iptc: a, icc: s } = n;
    t.enabled && e.deps.add(700), a.enabled && e.deps.add(33723), s.enabled && e.deps.add(34675), e.finalizeFilters();
  }
  async parse() {
    let { tiff: n, xmp: e, iptc: t, icc: a } = this.options;
    if (n.enabled || e.enabled || t.enabled || a.enabled) {
      let s = Math.max(y3(this.options), this.options.chunkSize);
      await this.file.ensureChunk(0, s), this.createParser("tiff", this.file), this.parsers.tiff.parseHeader(), await this.parsers.tiff.parseIfd0Block(), this.adaptTiffPropAsSegment("xmp"), this.adaptTiffPropAsSegment("iptc"), this.adaptTiffPropAsSegment("icc");
    }
  }
  adaptTiffPropAsSegment(n) {
    if (this.parsers.tiff[n]) {
      let e = this.parsers.tiff[n];
      this.injectSegment(n, e);
    }
  }
}
O(a5, "type", "tiff"), G2.set("tiff", a5);
let Ri = m4("zlib");
const ji = ["ihdr", "iccp", "text", "itxt", "exif"];
class s5 extends N4 {
  constructor(...n) {
    super(...n), O(this, "catchError", (e) => this.errors.push(e)), O(this, "metaChunks", []), O(this, "unknownChunks", []);
  }
  static canHandle(n, e) {
    return e === 35152 && n.getUint32(0) === 2303741511 && n.getUint32(4) === 218765834;
  }
  async parse() {
    let { file: n } = this;
    await this.findPngChunksInRange(8, n.byteLength), await this.readSegments(this.metaChunks), this.findIhdr(), this.parseTextChunks(), await this.findExif().catch(this.catchError), await this.findXmp().catch(this.catchError), await this.findIcc().catch(this.catchError);
  }
  async findPngChunksInRange(n, e) {
    let { file: t } = this;
    for (; n < e; ) {
      let a = t.getUint32(n), s = t.getUint32(n + 4), i = t.getString(n + 4, 4).toLowerCase(), o = a + 4 + 4 + 4, l = { type: i, offset: n, length: o, start: n + 4 + 4, size: a, marker: s };
      ji.includes(i) ? this.metaChunks.push(l) : this.unknownChunks.push(l), n += o;
    }
  }
  parseTextChunks() {
    let n = this.metaChunks.filter((e) => e.type === "text");
    for (let e of n) {
      let [t, a] = this.file.getString(e.start, e.size).split("\0");
      this.injectKeyValToIhdr(t, a);
    }
  }
  injectKeyValToIhdr(n, e) {
    let t = this.parsers.ihdr;
    t && t.raw.set(n, e);
  }
  findIhdr() {
    let n = this.metaChunks.find((e) => e.type === "ihdr");
    n && this.options.ihdr.enabled !== !1 && this.createParser("ihdr", n.chunk);
  }
  async findExif() {
    let n = this.metaChunks.find((e) => e.type === "exif");
    n && this.injectSegment("tiff", n.chunk);
  }
  async findXmp() {
    let n = this.metaChunks.filter((e) => e.type === "itxt");
    for (let e of n)
      e.chunk.getString(0, 17) === "XML:com.adobe.xmp" && this.injectSegment("xmp", e.chunk);
  }
  async findIcc() {
    let n = this.metaChunks.find((o) => o.type === "iccp");
    if (!n) return;
    let { chunk: e } = n, t = e.getUint8Array(0, 81), a = 0;
    for (; a < 80 && t[a] !== 0; ) a++;
    let s = a + 2, i = e.getString(0, a);
    if (this.injectKeyValToIhdr("ProfileName", i), p4) {
      let o = await Ri, l = e.getUint8Array(s);
      l = o.inflateSync(l), this.injectSegment("icc", l);
    }
  }
}
O(s5, "type", "png"), G2.set("png", s5), l2(f2, "interop", [[1, "InteropIndex"], [2, "InteropVersion"], [4096, "RelatedImageFileFormat"], [4097, "RelatedImageWidth"], [4098, "RelatedImageHeight"]]), j0(f2, "ifd0", [[11, "ProcessingSoftware"], [254, "SubfileType"], [255, "OldSubfileType"], [263, "Thresholding"], [264, "CellWidth"], [265, "CellLength"], [266, "FillOrder"], [269, "DocumentName"], [280, "MinSampleValue"], [281, "MaxSampleValue"], [285, "PageName"], [286, "XPosition"], [287, "YPosition"], [290, "GrayResponseUnit"], [297, "PageNumber"], [321, "HalftoneHints"], [322, "TileWidth"], [323, "TileLength"], [332, "InkSet"], [337, "TargetPrinter"], [18246, "Rating"], [18249, "RatingPercent"], [33550, "PixelScale"], [34264, "ModelTransform"], [34377, "PhotoshopSettings"], [50706, "DNGVersion"], [50707, "DNGBackwardVersion"], [50708, "UniqueCameraModel"], [50709, "LocalizedCameraModel"], [50736, "DNGLensInfo"], [50739, "ShadowScale"], [50740, "DNGPrivateData"], [33920, "IntergraphMatrix"], [33922, "ModelTiePoint"], [34118, "SEMInfo"], [34735, "GeoTiffDirectory"], [34736, "GeoTiffDoubleParams"], [34737, "GeoTiffAsciiParams"], [50341, "PrintIM"], [50721, "ColorMatrix1"], [50722, "ColorMatrix2"], [50723, "CameraCalibration1"], [50724, "CameraCalibration2"], [50725, "ReductionMatrix1"], [50726, "ReductionMatrix2"], [50727, "AnalogBalance"], [50728, "AsShotNeutral"], [50729, "AsShotWhiteXY"], [50730, "BaselineExposure"], [50731, "BaselineNoise"], [50732, "BaselineSharpness"], [50734, "LinearResponseLimit"], [50735, "CameraSerialNumber"], [50741, "MakerNoteSafety"], [50778, "CalibrationIlluminant1"], [50779, "CalibrationIlluminant2"], [50781, "RawDataUniqueID"], [50827, "OriginalRawFileName"], [50828, "OriginalRawFileData"], [50831, "AsShotICCProfile"], [50832, "AsShotPreProfileMatrix"], [50833, "CurrentICCProfile"], [50834, "CurrentPreProfileMatrix"], [50879, "ColorimetricReference"], [50885, "SRawType"], [50898, "PanasonicTitle"], [50899, "PanasonicTitle2"], [50931, "CameraCalibrationSig"], [50932, "ProfileCalibrationSig"], [50933, "ProfileIFD"], [50934, "AsShotProfileName"], [50936, "ProfileName"], [50937, "ProfileHueSatMapDims"], [50938, "ProfileHueSatMapData1"], [50939, "ProfileHueSatMapData2"], [50940, "ProfileToneCurve"], [50941, "ProfileEmbedPolicy"], [50942, "ProfileCopyright"], [50964, "ForwardMatrix1"], [50965, "ForwardMatrix2"], [50966, "PreviewApplicationName"], [50967, "PreviewApplicationVersion"], [50968, "PreviewSettingsName"], [50969, "PreviewSettingsDigest"], [50970, "PreviewColorSpace"], [50971, "PreviewDateTime"], [50972, "RawImageDigest"], [50973, "OriginalRawFileDigest"], [50981, "ProfileLookTableDims"], [50982, "ProfileLookTableData"], [51043, "TimeCodes"], [51044, "FrameRate"], [51058, "TStop"], [51081, "ReelName"], [51089, "OriginalDefaultFinalSize"], [51090, "OriginalBestQualitySize"], [51091, "OriginalDefaultCropSize"], [51105, "CameraLabel"], [51107, "ProfileHueSatMapEncoding"], [51108, "ProfileLookTableEncoding"], [51109, "BaselineExposureOffset"], [51110, "DefaultBlackRender"], [51111, "NewRawImageDigest"], [51112, "RawToPreviewGain"]]);
let i5 = [[273, "StripOffsets"], [279, "StripByteCounts"], [288, "FreeOffsets"], [289, "FreeByteCounts"], [291, "GrayResponseCurve"], [292, "T4Options"], [293, "T6Options"], [300, "ColorResponseUnit"], [320, "ColorMap"], [324, "TileOffsets"], [325, "TileByteCounts"], [326, "BadFaxLines"], [327, "CleanFaxData"], [328, "ConsecutiveBadFaxLines"], [330, "SubIFD"], [333, "InkNames"], [334, "NumberofInks"], [336, "DotRange"], [338, "ExtraSamples"], [339, "SampleFormat"], [340, "SMinSampleValue"], [341, "SMaxSampleValue"], [342, "TransferRange"], [343, "ClipPath"], [344, "XClipPathUnits"], [345, "YClipPathUnits"], [346, "Indexed"], [347, "JPEGTables"], [351, "OPIProxy"], [400, "GlobalParametersIFD"], [401, "ProfileType"], [402, "FaxProfile"], [403, "CodingMethods"], [404, "VersionYear"], [405, "ModeNumber"], [433, "Decode"], [434, "DefaultImageColor"], [435, "T82Options"], [437, "JPEGTables"], [512, "JPEGProc"], [515, "JPEGRestartInterval"], [517, "JPEGLosslessPredictors"], [518, "JPEGPointTransforms"], [519, "JPEGQTables"], [520, "JPEGDCTables"], [521, "JPEGACTables"], [559, "StripRowCounts"], [999, "USPTOMiscellaneous"], [18247, "XP_DIP_XML"], [18248, "StitchInfo"], [28672, "SonyRawFileType"], [28688, "SonyToneCurve"], [28721, "VignettingCorrection"], [28722, "VignettingCorrParams"], [28724, "ChromaticAberrationCorrection"], [28725, "ChromaticAberrationCorrParams"], [28726, "DistortionCorrection"], [28727, "DistortionCorrParams"], [29895, "SonyCropTopLeft"], [29896, "SonyCropSize"], [32781, "ImageID"], [32931, "WangTag1"], [32932, "WangAnnotation"], [32933, "WangTag3"], [32934, "WangTag4"], [32953, "ImageReferencePoints"], [32954, "RegionXformTackPoint"], [32955, "WarpQuadrilateral"], [32956, "AffineTransformMat"], [32995, "Matteing"], [32996, "DataType"], [32997, "ImageDepth"], [32998, "TileDepth"], [33300, "ImageFullWidth"], [33301, "ImageFullHeight"], [33302, "TextureFormat"], [33303, "WrapModes"], [33304, "FovCot"], [33305, "MatrixWorldToScreen"], [33306, "MatrixWorldToCamera"], [33405, "Model2"], [33421, "CFARepeatPatternDim"], [33422, "CFAPattern2"], [33423, "BatteryLevel"], [33424, "KodakIFD"], [33445, "MDFileTag"], [33446, "MDScalePixel"], [33447, "MDColorTable"], [33448, "MDLabName"], [33449, "MDSampleInfo"], [33450, "MDPrepDate"], [33451, "MDPrepTime"], [33452, "MDFileUnits"], [33589, "AdventScale"], [33590, "AdventRevision"], [33628, "UIC1Tag"], [33629, "UIC2Tag"], [33630, "UIC3Tag"], [33631, "UIC4Tag"], [33918, "IntergraphPacketData"], [33919, "IntergraphFlagRegisters"], [33921, "INGRReserved"], [34016, "Site"], [34017, "ColorSequence"], [34018, "IT8Header"], [34019, "RasterPadding"], [34020, "BitsPerRunLength"], [34021, "BitsPerExtendedRunLength"], [34022, "ColorTable"], [34023, "ImageColorIndicator"], [34024, "BackgroundColorIndicator"], [34025, "ImageColorValue"], [34026, "BackgroundColorValue"], [34027, "PixelIntensityRange"], [34028, "TransparencyIndicator"], [34029, "ColorCharacterization"], [34030, "HCUsage"], [34031, "TrapIndicator"], [34032, "CMYKEquivalent"], [34152, "AFCP_IPTC"], [34232, "PixelMagicJBIGOptions"], [34263, "JPLCartoIFD"], [34306, "WB_GRGBLevels"], [34310, "LeafData"], [34687, "TIFF_FXExtensions"], [34688, "MultiProfiles"], [34689, "SharedData"], [34690, "T88Options"], [34732, "ImageLayer"], [34750, "JBIGOptions"], [34856, "Opto-ElectricConvFactor"], [34857, "Interlace"], [34908, "FaxRecvParams"], [34909, "FaxSubAddress"], [34910, "FaxRecvTime"], [34929, "FedexEDR"], [34954, "LeafSubIFD"], [37387, "FlashEnergy"], [37388, "SpatialFrequencyResponse"], [37389, "Noise"], [37390, "FocalPlaneXResolution"], [37391, "FocalPlaneYResolution"], [37392, "FocalPlaneResolutionUnit"], [37397, "ExposureIndex"], [37398, "TIFF-EPStandardID"], [37399, "SensingMethod"], [37434, "CIP3DataFile"], [37435, "CIP3Sheet"], [37436, "CIP3Side"], [37439, "StoNits"], [37679, "MSDocumentText"], [37680, "MSPropertySetStorage"], [37681, "MSDocumentTextPosition"], [37724, "ImageSourceData"], [40965, "InteropIFD"], [40976, "SamsungRawPointersOffset"], [40977, "SamsungRawPointersLength"], [41217, "SamsungRawByteOrder"], [41218, "SamsungRawUnknown"], [41484, "SpatialFrequencyResponse"], [41485, "Noise"], [41489, "ImageNumber"], [41490, "SecurityClassification"], [41491, "ImageHistory"], [41494, "TIFF-EPStandardID"], [41995, "DeviceSettingDescription"], [42112, "GDALMetadata"], [42113, "GDALNoData"], [44992, "ExpandSoftware"], [44993, "ExpandLens"], [44994, "ExpandFilm"], [44995, "ExpandFilterLens"], [44996, "ExpandScanner"], [44997, "ExpandFlashLamp"], [46275, "HasselbladRawImage"], [48129, "PixelFormat"], [48130, "Transformation"], [48131, "Uncompressed"], [48132, "ImageType"], [48256, "ImageWidth"], [48257, "ImageHeight"], [48258, "WidthResolution"], [48259, "HeightResolution"], [48320, "ImageOffset"], [48321, "ImageByteCount"], [48322, "AlphaOffset"], [48323, "AlphaByteCount"], [48324, "ImageDataDiscard"], [48325, "AlphaDataDiscard"], [50215, "OceScanjobDesc"], [50216, "OceApplicationSelector"], [50217, "OceIDNumber"], [50218, "OceImageLogic"], [50255, "Annotations"], [50459, "HasselbladExif"], [50547, "OriginalFileName"], [50560, "USPTOOriginalContentType"], [50656, "CR2CFAPattern"], [50710, "CFAPlaneColor"], [50711, "CFALayout"], [50712, "LinearizationTable"], [50713, "BlackLevelRepeatDim"], [50714, "BlackLevel"], [50715, "BlackLevelDeltaH"], [50716, "BlackLevelDeltaV"], [50717, "WhiteLevel"], [50718, "DefaultScale"], [50719, "DefaultCropOrigin"], [50720, "DefaultCropSize"], [50733, "BayerGreenSplit"], [50737, "ChromaBlurRadius"], [50738, "AntiAliasStrength"], [50752, "RawImageSegmentation"], [50780, "BestQualityScale"], [50784, "AliasLayerMetadata"], [50829, "ActiveArea"], [50830, "MaskedAreas"], [50935, "NoiseReductionApplied"], [50974, "SubTileBlockSize"], [50975, "RowInterleaveFactor"], [51008, "OpcodeList1"], [51009, "OpcodeList2"], [51022, "OpcodeList3"], [51041, "NoiseProfile"], [51114, "CacheVersion"], [51125, "DefaultUserCrop"], [51157, "NikonNEFInfo"], [65024, "KdcIFD"]];
j0(f2, "ifd0", i5), j0(f2, "exif", i5), l2(F2, "gps", [[23, { M: "Magnetic North", T: "True North" }], [25, { K: "Kilometers", M: "Miles", N: "Nautical Miles" }]]);
class t3 extends E2 {
  static canHandle(n, e) {
    return n.getUint8(e + 1) === 224 && n.getUint32(e + 4) === 1246120262 && n.getUint8(e + 8) === 0;
  }
  parse() {
    return this.parseTags(), this.translate(), this.output;
  }
  parseTags() {
    this.raw = /* @__PURE__ */ new Map([[0, this.chunk.getUint16(0)], [2, this.chunk.getUint8(2)], [3, this.chunk.getUint16(3)], [5, this.chunk.getUint16(5)], [7, this.chunk.getUint8(7)], [8, this.chunk.getUint8(8)]]);
  }
}
O(t3, "type", "jfif"), O(t3, "headerLength", 9), d2.set("jfif", t3), l2(f2, "jfif", [[0, "JFIFVersion"], [2, "ResolutionUnit"], [3, "XResolution"], [5, "YResolution"], [7, "ThumbnailWidth"], [8, "ThumbnailHeight"]]);
class o5 extends E2 {
  parse() {
    return this.parseTags(), this.translate(), this.output;
  }
  parseTags() {
    this.raw = new Map([[0, this.chunk.getUint32(0)], [4, this.chunk.getUint32(4)], [8, this.chunk.getUint8(8)], [9, this.chunk.getUint8(9)], [10, this.chunk.getUint8(10)], [11, this.chunk.getUint8(11)], [12, this.chunk.getUint8(12)], ...Array.from(this.raw)]);
  }
}
O(o5, "type", "ihdr"), d2.set("ihdr", o5), l2(f2, "ihdr", [[0, "ImageWidth"], [4, "ImageHeight"], [8, "BitDepth"], [9, "ColorType"], [10, "Compression"], [11, "Filter"], [12, "Interlace"]]), l2(F2, "ihdr", [[9, { 0: "Grayscale", 2: "RGB", 3: "Palette", 4: "Grayscale with Alpha", 6: "RGB with Alpha", DEFAULT: "Unknown" }], [10, { 0: "Deflate/Inflate", DEFAULT: "Unknown" }], [11, { 0: "Adaptive", DEFAULT: "Unknown" }], [12, { 0: "Noninterlaced", 1: "Adam7 Interlace", DEFAULT: "Unknown" }]]);
class X1 extends E2 {
  static canHandle(n, e) {
    return n.getUint8(e + 1) === 226 && n.getUint32(e + 4) === 1229144927;
  }
  static findPosition(n, e) {
    let t = super.findPosition(n, e);
    return t.chunkNumber = n.getUint8(e + 16), t.chunkCount = n.getUint8(e + 17), t.multiSegment = t.chunkCount > 1, t;
  }
  static handleMultiSegments(n) {
    return function(e) {
      let t = function(a) {
        let s = a[0].constructor, i = 0;
        for (let c of a) i += c.length;
        let o = new s(i), l = 0;
        for (let c of a) o.set(c, l), l += c.length;
        return o;
      }(e.map((a) => a.chunk.toUint8()));
      return new k2(t);
    }(n);
  }
  parse() {
    return this.raw = /* @__PURE__ */ new Map(), this.parseHeader(), this.parseTags(), this.translate(), this.output;
  }
  parseHeader() {
    let { raw: n } = this;
    this.chunk.byteLength < 84 && u2("ICC header is too short");
    for (let [e, t] of Object.entries(Ai)) {
      e = parseInt(e, 10);
      let a = t(this.chunk, e);
      a !== "\0\0\0\0" && n.set(e, a);
    }
  }
  parseTags() {
    let n, e, t, a, s, { raw: i } = this, o = this.chunk.getUint32(128), l = 132, c = this.chunk.byteLength;
    for (; o--; ) {
      if (n = this.chunk.getString(l, 4), e = this.chunk.getUint32(l + 4), t = this.chunk.getUint32(l + 8), a = this.chunk.getString(e, 4), e + t > c) return void console.warn("reached the end of the first ICC chunk. Enable options.tiff.multiSegment to read all ICC segments.");
      s = this.parseTag(a, e, t), s !== void 0 && s !== "\0\0\0\0" && i.set(n, s), l += 12;
    }
  }
  parseTag(n, e, t) {
    switch (n) {
      case "desc":
        return this.parseDesc(e);
      case "mluc":
        return this.parseMluc(e);
      case "text":
        return this.parseText(e, t);
      case "sig ":
        return this.parseSig(e);
    }
    if (!(e + t > this.chunk.byteLength)) return this.chunk.getUint8Array(e, t);
  }
  parseDesc(n) {
    let e = this.chunk.getUint32(n + 8) - 1;
    return S0(this.chunk.getString(n + 12, e));
  }
  parseText(n, e) {
    return S0(this.chunk.getString(n + 8, e - 8));
  }
  parseSig(n) {
    return S0(this.chunk.getString(n + 8, 4));
  }
  parseMluc(n) {
    let { chunk: e } = this, t = e.getUint32(n + 8), a = e.getUint32(n + 12), s = n + 16, i = [];
    for (let o = 0; o < t; o++) {
      let l = e.getString(s + 0, 2), c = e.getString(s + 2, 2), d = e.getUint32(s + 4), u = e.getUint32(s + 8) + n, C = S0(e.getUnicodeString(u, d));
      i.push({ lang: l, country: c, text: C }), s += a;
    }
    return t === 1 ? i[0].text : i;
  }
  translateValue(n, e) {
    return typeof n == "string" ? e[n] || e[n.toLowerCase()] || n : e[n] || n;
  }
}
O(X1, "type", "icc"), O(X1, "multiSegment", !0), O(X1, "headerLength", 18);
const Ai = { 4: X2, 8: function(r, n) {
  return [r.getUint8(n), r.getUint8(n + 1) >> 4, r.getUint8(n + 1) % 16].map((e) => e.toString(10)).join(".");
}, 12: X2, 16: X2, 20: X2, 24: function(r, n) {
  const e = r.getUint16(n), t = r.getUint16(n + 2) - 1, a = r.getUint16(n + 4), s = r.getUint16(n + 6), i = r.getUint16(n + 8), o = r.getUint16(n + 10);
  return new Date(Date.UTC(e, t, a, s, i, o));
}, 36: X2, 40: X2, 48: X2, 52: X2, 64: (r, n) => r.getUint32(n), 80: X2 };
function X2(r, n) {
  return S0(r.getString(n, 4));
}
d2.set("icc", X1), l2(f2, "icc", [[4, "ProfileCMMType"], [8, "ProfileVersion"], [12, "ProfileClass"], [16, "ColorSpaceData"], [20, "ProfileConnectionSpace"], [24, "ProfileDateTime"], [36, "ProfileFileSignature"], [40, "PrimaryPlatform"], [44, "CMMFlags"], [48, "DeviceManufacturer"], [52, "DeviceModel"], [56, "DeviceAttributes"], [64, "RenderingIntent"], [68, "ConnectionSpaceIlluminant"], [80, "ProfileCreator"], [84, "ProfileID"], ["Header", "ProfileHeader"], ["MS00", "WCSProfiles"], ["bTRC", "BlueTRC"], ["bXYZ", "BlueMatrixColumn"], ["bfd", "UCRBG"], ["bkpt", "MediaBlackPoint"], ["calt", "CalibrationDateTime"], ["chad", "ChromaticAdaptation"], ["chrm", "Chromaticity"], ["ciis", "ColorimetricIntentImageState"], ["clot", "ColorantTableOut"], ["clro", "ColorantOrder"], ["clrt", "ColorantTable"], ["cprt", "ProfileCopyright"], ["crdi", "CRDInfo"], ["desc", "ProfileDescription"], ["devs", "DeviceSettings"], ["dmdd", "DeviceModelDesc"], ["dmnd", "DeviceMfgDesc"], ["dscm", "ProfileDescriptionML"], ["fpce", "FocalPlaneColorimetryEstimates"], ["gTRC", "GreenTRC"], ["gXYZ", "GreenMatrixColumn"], ["gamt", "Gamut"], ["kTRC", "GrayTRC"], ["lumi", "Luminance"], ["meas", "Measurement"], ["meta", "Metadata"], ["mmod", "MakeAndModel"], ["ncl2", "NamedColor2"], ["ncol", "NamedColor"], ["ndin", "NativeDisplayInfo"], ["pre0", "Preview0"], ["pre1", "Preview1"], ["pre2", "Preview2"], ["ps2i", "PS2RenderingIntent"], ["ps2s", "PostScript2CSA"], ["psd0", "PostScript2CRD0"], ["psd1", "PostScript2CRD1"], ["psd2", "PostScript2CRD2"], ["psd3", "PostScript2CRD3"], ["pseq", "ProfileSequenceDesc"], ["psid", "ProfileSequenceIdentifier"], ["psvm", "PS2CRDVMSize"], ["rTRC", "RedTRC"], ["rXYZ", "RedMatrixColumn"], ["resp", "OutputResponse"], ["rhoc", "ReflectionHardcopyOrigColorimetry"], ["rig0", "PerceptualRenderingIntentGamut"], ["rig2", "SaturationRenderingIntentGamut"], ["rpoc", "ReflectionPrintOutputColorimetry"], ["sape", "SceneAppearanceEstimates"], ["scoe", "SceneColorimetryEstimates"], ["scrd", "ScreeningDesc"], ["scrn", "Screening"], ["targ", "CharTarget"], ["tech", "Technology"], ["vcgt", "VideoCardGamma"], ["view", "ViewingConditions"], ["vued", "ViewingCondDesc"], ["wtpt", "MediaWhitePoint"]]);
const U1 = { "4d2p": "Erdt Systems", AAMA: "Aamazing Technologies", ACER: "Acer", ACLT: "Acolyte Color Research", ACTI: "Actix Sytems", ADAR: "Adara Technology", ADBE: "Adobe", ADI: "ADI Systems", AGFA: "Agfa Graphics", ALMD: "Alps Electric", ALPS: "Alps Electric", ALWN: "Alwan Color Expertise", AMTI: "Amiable Technologies", AOC: "AOC International", APAG: "Apago", APPL: "Apple Computer", AST: "AST", "AT&T": "AT&T", BAEL: "BARBIERI electronic", BRCO: "Barco NV", BRKP: "Breakpoint", BROT: "Brother", BULL: "Bull", BUS: "Bus Computer Systems", "C-IT": "C-Itoh", CAMR: "Intel", CANO: "Canon", CARR: "Carroll Touch", CASI: "Casio", CBUS: "Colorbus PL", CEL: "Crossfield", CELx: "Crossfield", CGS: "CGS Publishing Technologies International", CHM: "Rochester Robotics", CIGL: "Colour Imaging Group, London", CITI: "Citizen", CL00: "Candela", CLIQ: "Color IQ", CMCO: "Chromaco", CMiX: "CHROMiX", COLO: "Colorgraphic Communications", COMP: "Compaq", COMp: "Compeq/Focus Technology", CONR: "Conrac Display Products", CORD: "Cordata Technologies", CPQ: "Compaq", CPRO: "ColorPro", CRN: "Cornerstone", CTX: "CTX International", CVIS: "ColorVision", CWC: "Fujitsu Laboratories", DARI: "Darius Technology", DATA: "Dataproducts", DCP: "Dry Creek Photo", DCRC: "Digital Contents Resource Center, Chung-Ang University", DELL: "Dell Computer", DIC: "Dainippon Ink and Chemicals", DICO: "Diconix", DIGI: "Digital", "DL&C": "Digital Light & Color", DPLG: "Doppelganger", DS: "Dainippon Screen", DSOL: "DOOSOL", DUPN: "DuPont", EPSO: "Epson", ESKO: "Esko-Graphics", ETRI: "Electronics and Telecommunications Research Institute", EVER: "Everex Systems", EXAC: "ExactCODE", Eizo: "Eizo", FALC: "Falco Data Products", FF: "Fuji Photo Film", FFEI: "FujiFilm Electronic Imaging", FNRD: "Fnord Software", FORA: "Fora", FORE: "Forefront Technology", FP: "Fujitsu", FPA: "WayTech Development", FUJI: "Fujitsu", FX: "Fuji Xerox", GCC: "GCC Technologies", GGSL: "Global Graphics Software", GMB: "Gretagmacbeth", GMG: "GMG", GOLD: "GoldStar Technology", GOOG: "Google", GPRT: "Giantprint", GTMB: "Gretagmacbeth", GVC: "WayTech Development", GW2K: "Sony", HCI: "HCI", HDM: "Heidelberger Druckmaschinen", HERM: "Hermes", HITA: "Hitachi America", HP: "Hewlett-Packard", HTC: "Hitachi", HiTi: "HiTi Digital", IBM: "IBM", IDNT: "Scitex", IEC: "Hewlett-Packard", IIYA: "Iiyama North America", IKEG: "Ikegami Electronics", IMAG: "Image Systems", IMI: "Ingram Micro", INTC: "Intel", INTL: "N/A (INTL)", INTR: "Intra Electronics", IOCO: "Iocomm International Technology", IPS: "InfoPrint Solutions Company", IRIS: "Scitex", ISL: "Ichikawa Soft Laboratory", ITNL: "N/A (ITNL)", IVM: "IVM", IWAT: "Iwatsu Electric", Idnt: "Scitex", Inca: "Inca Digital Printers", Iris: "Scitex", JPEG: "Joint Photographic Experts Group", JSFT: "Jetsoft Development", JVC: "JVC Information Products", KART: "Scitex", KFC: "KFC Computek Components", KLH: "KLH Computers", KMHD: "Konica Minolta", KNCA: "Konica", KODA: "Kodak", KYOC: "Kyocera", Kart: "Scitex", LCAG: "Leica", LCCD: "Leeds Colour", LDAK: "Left Dakota", LEAD: "Leading Technology", LEXM: "Lexmark International", LINK: "Link Computer", LINO: "Linotronic", LITE: "Lite-On", Leaf: "Leaf", Lino: "Linotronic", MAGC: "Mag Computronic", MAGI: "MAG Innovision", MANN: "Mannesmann", MICN: "Micron Technology", MICR: "Microtek", MICV: "Microvitec", MINO: "Minolta", MITS: "Mitsubishi Electronics America", MITs: "Mitsuba", MNLT: "Minolta", MODG: "Modgraph", MONI: "Monitronix", MONS: "Monaco Systems", MORS: "Morse Technology", MOTI: "Motive Systems", MSFT: "Microsoft", MUTO: "MUTOH INDUSTRIES", Mits: "Mitsubishi Electric", NANA: "NANAO", NEC: "NEC", NEXP: "NexPress Solutions", NISS: "Nissei Sangyo America", NKON: "Nikon", NONE: "none", OCE: "Oce Technologies", OCEC: "OceColor", OKI: "Oki", OKID: "Okidata", OKIP: "Okidata", OLIV: "Olivetti", OLYM: "Olympus", ONYX: "Onyx Graphics", OPTI: "Optiquest", PACK: "Packard Bell", PANA: "Matsushita Electric Industrial", PANT: "Pantone", PBN: "Packard Bell", PFU: "PFU", PHIL: "Philips Consumer Electronics", PNTX: "HOYA", POne: "Phase One A/S", PREM: "Premier Computer Innovations", PRIN: "Princeton Graphic Systems", PRIP: "Princeton Publishing Labs", QLUX: "Hong Kong", QMS: "QMS", QPCD: "QPcard AB", QUAD: "QuadLaser", QUME: "Qume", RADI: "Radius", RDDx: "Integrated Color Solutions", RDG: "Roland DG", REDM: "REDMS Group", RELI: "Relisys", RGMS: "Rolf Gierling Multitools", RICO: "Ricoh", RNLD: "Edmund Ronald", ROYA: "Royal", RPC: "Ricoh Printing Systems", RTL: "Royal Information Electronics", SAMP: "Sampo", SAMS: "Samsung", SANT: "Jaime Santana Pomares", SCIT: "Scitex", SCRN: "Dainippon Screen", SDP: "Scitex", SEC: "Samsung", SEIK: "Seiko Instruments", SEIk: "Seikosha", SGUY: "ScanGuy.com", SHAR: "Sharp Laboratories", SICC: "International Color Consortium", SONY: "Sony", SPCL: "SpectraCal", STAR: "Star", STC: "Sampo Technology", Scit: "Scitex", Sdp: "Scitex", Sony: "Sony", TALO: "Talon Technology", TAND: "Tandy", TATU: "Tatung", TAXA: "TAXAN America", TDS: "Tokyo Denshi Sekei", TECO: "TECO Information Systems", TEGR: "Tegra", TEKT: "Tektronix", TI: "Texas Instruments", TMKR: "TypeMaker", TOSB: "Toshiba", TOSH: "Toshiba", TOTK: "TOTOKU ELECTRIC", TRIU: "Triumph", TSBT: "Toshiba", TTX: "TTX Computer Products", TVM: "TVM Professional Monitor", TW: "TW Casper", ULSX: "Ulead Systems", UNIS: "Unisys", UTZF: "Utz Fehlau & Sohn", VARI: "Varityper", VIEW: "Viewsonic", VISL: "Visual communication", VIVO: "Vivo Mobile Communication", WANG: "Wang", WLBR: "Wilbur Imaging", WTG2: "Ware To Go", WYSE: "WYSE Technology", XERX: "Xerox", XRIT: "X-Rite", ZRAN: "Zoran", Zebr: "Zebra Technologies", appl: "Apple Computer", bICC: "basICColor", berg: "bergdesign", ceyd: "Integrated Color Solutions", clsp: "MacDermid ColorSpan", ds: "Dainippon Screen", dupn: "DuPont", ffei: "FujiFilm Electronic Imaging", flux: "FluxData", iris: "Scitex", kart: "Scitex", lcms: "Little CMS", lino: "Linotronic", none: "none", ob4d: "Erdt Systems", obic: "Medigraph", quby: "Qubyx Sarl", scit: "Scitex", scrn: "Dainippon Screen", sdp: "Scitex", siwi: "SIWI GRAFIKA", yxym: "YxyMaster" }, l5 = { scnr: "Scanner", mntr: "Monitor", prtr: "Printer", link: "Device Link", abst: "Abstract", spac: "Color Space Conversion Profile", nmcl: "Named Color", cenc: "ColorEncodingSpace profile", mid: "MultiplexIdentification profile", mlnk: "MultiplexLink profile", mvis: "MultiplexVisualization profile", nkpf: "Nikon Input Device Profile (NON-STANDARD!)" };
l2(F2, "icc", [[4, U1], [12, l5], [40, Object.assign({}, U1, l5)], [48, U1], [80, U1], [64, { 0: "Perceptual", 1: "Relative Colorimetric", 2: "Saturation", 3: "Absolute Colorimetric" }], ["tech", { amd: "Active Matrix Display", crt: "Cathode Ray Tube Display", kpcd: "Photo CD", pmd: "Passive Matrix Display", dcam: "Digital Camera", dcpj: "Digital Cinema Projector", dmpc: "Digital Motion Picture Camera", dsub: "Dye Sublimation Printer", epho: "Electrophotographic Printer", esta: "Electrostatic Printer", flex: "Flexography", fprn: "Film Writer", fscn: "Film Scanner", grav: "Gravure", ijet: "Ink Jet Printer", imgs: "Photo Image Setter", mpfr: "Motion Picture Film Recorder", mpfs: "Motion Picture Film Scanner", offs: "Offset Lithography", pjtv: "Projection Television", rpho: "Photographic Paper Printer", rscn: "Reflective Scanner", silk: "Silkscreen", twax: "Thermal Wax Printer", vidc: "Video Camera", vidm: "Video Monitor" }]]);
class W1 extends E2 {
  static canHandle(n, e, t) {
    return n.getUint8(e + 1) === 237 && n.getString(e + 4, 9) === "Photoshop" && this.containsIptc8bim(n, e, t) !== void 0;
  }
  static headerLength(n, e, t) {
    let a, s = this.containsIptc8bim(n, e, t);
    if (s !== void 0) return a = n.getUint8(e + s + 7), a % 2 != 0 && (a += 1), a === 0 && (a = 4), s + 8 + a;
  }
  static containsIptc8bim(n, e, t) {
    for (let a = 0; a < t; a++) if (this.isIptcSegmentHead(n, e + a)) return a;
  }
  static isIptcSegmentHead(n, e) {
    return n.getUint8(e) === 56 && n.getUint32(e) === 943868237 && n.getUint16(e + 4) === 1028;
  }
  parse() {
    let { raw: n } = this, e = this.chunk.byteLength - 1, t = !1;
    for (let a = 0; a < e; a++) if (this.chunk.getUint8(a) === 28 && this.chunk.getUint8(a + 1) === 2) {
      t = !0;
      let s = this.chunk.getUint16(a + 3), i = this.chunk.getUint8(a + 2), o = this.chunk.getLatin1String(a + 5, s);
      n.set(i, this.pluralizeValue(n.get(i), o)), a += 4 + s;
    } else if (t) break;
    return this.translate(), this.output;
  }
  pluralizeValue(n, e) {
    return n !== void 0 ? n instanceof Array ? (n.push(e), n) : [n, e] : e;
  }
}
O(W1, "type", "iptc"), O(W1, "translateValues", !1), O(W1, "reviveValues", !1), d2.set("iptc", W1), l2(f2, "iptc", [[0, "ApplicationRecordVersion"], [3, "ObjectTypeReference"], [4, "ObjectAttributeReference"], [5, "ObjectName"], [7, "EditStatus"], [8, "EditorialUpdate"], [10, "Urgency"], [12, "SubjectReference"], [15, "Category"], [20, "SupplementalCategories"], [22, "FixtureIdentifier"], [25, "Keywords"], [26, "ContentLocationCode"], [27, "ContentLocationName"], [30, "ReleaseDate"], [35, "ReleaseTime"], [37, "ExpirationDate"], [38, "ExpirationTime"], [40, "SpecialInstructions"], [42, "ActionAdvised"], [45, "ReferenceService"], [47, "ReferenceDate"], [50, "ReferenceNumber"], [55, "DateCreated"], [60, "TimeCreated"], [62, "DigitalCreationDate"], [63, "DigitalCreationTime"], [65, "OriginatingProgram"], [70, "ProgramVersion"], [75, "ObjectCycle"], [80, "Byline"], [85, "BylineTitle"], [90, "City"], [92, "Sublocation"], [95, "State"], [100, "CountryCode"], [101, "Country"], [103, "OriginalTransmissionReference"], [105, "Headline"], [110, "Credit"], [115, "Source"], [116, "CopyrightNotice"], [118, "Contact"], [120, "Caption"], [121, "LocalCaption"], [122, "Writer"], [125, "RasterizedCaption"], [130, "ImageType"], [131, "ImageOrientation"], [135, "LanguageIdentifier"], [150, "AudioType"], [151, "AudioSamplingRate"], [152, "AudioSamplingResolution"], [153, "AudioDuration"], [154, "AudioOutcue"], [184, "JobID"], [185, "MasterDocumentID"], [186, "ShortDocumentID"], [187, "UniqueDocumentID"], [188, "OwnerID"], [200, "ObjectPreviewFileFormat"], [201, "ObjectPreviewFileVersion"], [202, "ObjectPreviewData"], [221, "Prefs"], [225, "ClassifyState"], [228, "SimilarityIndex"], [230, "DocumentNotes"], [231, "DocumentHistory"], [232, "ExifCameraInfo"], [255, "CatalogSets"]]), l2(F2, "iptc", [[10, { 0: "0 (reserved)", 1: "1 (most urgent)", 2: "2", 3: "3", 4: "4", 5: "5 (normal urgency)", 6: "6", 7: "7", 8: "8 (least urgent)", 9: "9 (user-defined priority)" }], [75, { a: "Morning", b: "Both Morning and Evening", p: "Evening" }], [131, { L: "Landscape", P: "Portrait", S: "Square" }]]);
const p2 = [];
for (let r = 0; r < 256; ++r)
  p2.push((r + 256).toString(16).slice(1));
function Bi(r, n = 0) {
  return (p2[r[n + 0]] + p2[r[n + 1]] + p2[r[n + 2]] + p2[r[n + 3]] + "-" + p2[r[n + 4]] + p2[r[n + 5]] + "-" + p2[r[n + 6]] + p2[r[n + 7]] + "-" + p2[r[n + 8]] + p2[r[n + 9]] + "-" + p2[r[n + 10]] + p2[r[n + 11]] + p2[r[n + 12]] + p2[r[n + 13]] + p2[r[n + 14]] + p2[r[n + 15]]).toLowerCase();
}
let n3;
const Yi = new Uint8Array(16);
function Ui() {
  if (!n3) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    n3 = crypto.getRandomValues.bind(crypto);
  }
  return n3(Yi);
}
const Wi = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), c5 = { randomUUID: Wi };
function M8(r, n, e) {
  var a;
  if (c5.randomUUID && !r)
    return c5.randomUUID();
  r = r || {};
  const t = r.random ?? ((a = r.rng) == null ? void 0 : a.call(r)) ?? Ui();
  if (t.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return t[6] = t[6] & 15 | 64, t[8] = t[8] & 63 | 128, Bi(t);
}
const zi = async () => new Promise((r) => {
  setTimeout(() => {
    r(M8());
  }, 2500);
}), qi = async () => new Promise((r) => {
  setTimeout(() => {
    r();
  }, 2500);
}), $i = _8({
  uploadFile: zi,
  deleteFile: qi
}), Gi = (r) => {
  if (r)
    return {
      latitude: r.latitude,
      longitude: r.longitude
    };
}, Ki = [".pdf", ".jpg", ".jpeg", ".png"], Zl = ({
  label: r,
  required: n,
  optional: e,
  buttonLabel: t,
  description: a = "",
  error: s = null,
  multiple: i = !0,
  files: o = [],
  maxFiles: l,
  onChange: c,
  allowedFileTypes: d = Ki
}) => {
  const u = x8($i), C = k1(null), f = (y) => {
    Promise.all(
      y.map(async (b) => {
        try {
          return { file: b, exif: Gi(await Vi.parse(b)) };
        } catch (D) {
          return console.log("Error when parsing exif data, assuming image does not have any", D), { file: b };
        }
      })
    ).then((b) => {
      Qi(b, o, u.uploadFile, c);
    });
  }, p = (y) => {
    c(o.filter((b) => b.contextId !== y.contextId));
  }, v = o.some((y) => y.status === "uploading"), m = !v && l && o.length >= l, w = !m && !v;
  return /* @__PURE__ */ h.jsxs(y0, { children: [
    /* @__PURE__ */ h.jsx(h1, { style: { pointerEvents: "none" }, children: /* @__PURE__ */ h.jsx(i0, { text: r, required: n, optional: e }) }),
    a && /* @__PURE__ */ h.jsx(y0.Description, { children: a }),
    /* @__PURE__ */ h.jsx(
      "input",
      {
        type: "file",
        style: { display: "none" },
        ref: C,
        id: "fileUploadButton",
        name: "fileUploadButton",
        accept: d.join(","),
        multiple: i,
        onChange: (y) => {
          const b = y.target;
          b.files && b.files.length > 0 && (f(Array.from(b.files)), b.value = "");
        }
      }
    ),
    w && /* @__PURE__ */ h.jsx("button", { className: G0.uploadButton, onClick: () => {
      var y;
      return (y = C.current) == null ? void 0 : y.click();
    }, children: t }),
    m && /* @__PURE__ */ h.jsxs("div", { className: G0.uploadInformation, children: [
      /* @__PURE__ */ h.jsx(c2, { material: "info" }),
      /* @__PURE__ */ h.jsx("span", { children: "Maksimalt antall filer er lastet opp." })
    ] }),
    v && /* @__PURE__ */ h.jsxs("div", { className: G0.uploadInformation, children: [
      /* @__PURE__ */ h.jsx(J1, { "aria-label": "Laster opp", "data-size": "2xs", "data-color": "neutral" }),
      /* @__PURE__ */ h.jsx("span", { children: "Vennligst vent med å velge flere filer før alle filene er lastet opp" })
    ] }),
    o && o.length > 0 && /* @__PURE__ */ h.jsx("div", { className: G0.fileList, children: o.map((y) => /* @__PURE__ */ h.jsxs("div", { className: G0.fileItem, children: [
      /* @__PURE__ */ h.jsxs(e2, { children: [
        /* @__PURE__ */ h.jsxs(e2, { horizontal: !0, align: "center", gap: 8, children: [
          /* @__PURE__ */ h.jsx("span", { children: y.fileName }),
          y.status === "uploading" && /* @__PURE__ */ h.jsx(J1, { "aria-label": "Laster opp", "data-size": "2xs", "data-color": "neutral" })
        ] }),
        y.status === "error" && /* @__PURE__ */ h.jsx(M0, { children: y.error })
      ] }),
      /* @__PURE__ */ h.jsx(
        "button",
        {
          className: G0.removeButton,
          onClick: () => {
            p(y);
          },
          "aria-label": "Remove file",
          children: /* @__PURE__ */ h.jsx(c2, { material: "close" })
        }
      )
    ] }, y.contextId)) }),
    s && /* @__PURE__ */ h.jsx(M0, { children: s })
  ] });
}, Qi = (r, n, e, t) => {
  console.log("onFilesChanged", r, n);
  const a = [...n], s = {};
  r.forEach((i) => {
    const o = M8();
    a.push({
      contextId: o,
      fileName: i.file.name,
      status: "uploading",
      contentType: i.file.type,
      exif: i.exif
    }), s[o] = i.file;
  }), t(a), Object.keys(s).forEach(async (i) => {
    try {
      const o = a.find((d) => d.contextId === i);
      if (!o)
        return;
      const l = new FormData();
      l.append("file", s[i], o.fileName);
      const c = await e(l);
      o.storageId = c, o.status = "uploaded", delete o.error, t([...a]);
    } catch (o) {
      console.error("Error when uploading", o);
      const l = a.find((c) => c.contextId === i);
      if (!l)
        return;
      l.status = "error", l.error = "Failed to upload file", t([...a]);
    }
  });
}, Xi = "_icon_1tg5o_1", Ji = {
  icon: Xi
}, Dl = ({ icon: r, href: n, children: e, level: t = 2, size: a = "sm" }) => /* @__PURE__ */ h.jsxs(e2, { horizontal: !0, justify: "between", children: [
  n ? /* @__PURE__ */ h.jsx(a1, { "data-size": a, level: t, children: /* @__PURE__ */ h.jsx("a", { className: "styrbord-card-link", href: n, children: e }) }) : /* @__PURE__ */ h.jsx(a1, { "data-size": a, level: t, children: e }),
  r && /* @__PURE__ */ h.jsx(c2, { material: r, className: Ji.icon })
] }), eo = "_href_1dstk_1", to = "_dashed_1dstk_5", no = "_subtle_1dstk_15", r3 = {
  href: eo,
  dashed: to,
  subtle: no
}, a3 = ({
  variant: r = "outline",
  color: n = void 0,
  size: e = "md",
  text: t = void 0,
  href: a = void 0,
  target: s = "_blank",
  ...i
}) => {
  const o = { ...i };
  switch (r) {
    case "filled":
      o.variant = "primary";
      break;
    case "outline":
      o.variant = "secondary";
      break;
    case "ghost":
      o.variant = "tertiary";
      break;
    case "subtle":
      o.variant = "primary", o.className = [o.className, r3.subtle].join(" ");
      break;
    case "dashed":
      o.variant = "secondary", o.className = [o.className, r3.dashed].join(" ");
      break;
  }
  return o["data-color"] = n, o["data-size"] = e, a && (o.className = [o.className, r3.href].join(" ")), t && a ? (o.children = /* @__PURE__ */ h.jsx("a", { href: a, target: s, rel: "noreferrer", children: t }), o.asChild = !0) : t ? o.children = t : a && (o.children = /* @__PURE__ */ h.jsx("a", { href: a, target: s, rel: "noreferrer", children: o.children }), o.asChild = !0), /* @__PURE__ */ h.jsx(H8, { ...o });
}, ro = "_sizeXxs_18dzk_2", ao = "_sizeXs_18dzk_7", so = "_sizeSm_18dzk_12", io = "_sizeMd_18dzk_16", oo = "_sizeLg_18dzk_21", lo = "_sizeFull_18dzk_26", co = "_sizeFit_18dzk_30", _0 = {
  sizeXxs: ro,
  sizeXs: ao,
  sizeSm: so,
  sizeMd: io,
  sizeLg: oo,
  sizeFull: lo,
  sizeFit: co
}, G3 = (r) => {
  switch (r) {
    case "2xs":
      return _0.sizeXxs;
    case "xs":
      return _0.sizeXs;
    case "sm":
      return _0.sizeSm;
    case "md":
      return _0.sizeMd;
    case "lg":
      return _0.sizeLg;
    case "full":
      return _0.sizeFull;
    case "fit":
      return _0.sizeFit;
  }
}, Sl = ({ autoComplete: r, size: n = "full", type: e = "text", className: t, ...a }) => /* @__PURE__ */ h.jsx(
  k3,
  {
    className: `${t} ${G3(n)}`,
    label: /* @__PURE__ */ h.jsx(i0, { text: a.label, loading: a.loading, required: a.required, optional: a.optional }),
    description: a.description,
    readOnly: a.readOnly,
    autoComplete: r,
    placeholder: a.placeholder,
    disabled: a.disabled,
    value: a.value ?? "",
    onBlur: a.onBlur,
    onChange: (s) => {
      var i;
      (i = a.onChange) == null || i.call(a, s.target.value);
    },
    inputMode: a.inputMode,
    error: a.error,
    prefix: a.prefix,
    suffix: a.suffix,
    type: e
  }
), uo = {
  "align-right": "_align-right_dttaq_1"
}, Pl = ({
  size: r = "full",
  inputMode: n = "numeric",
  className: e,
  align: t = "left",
  ...a
}) => {
  var o;
  const [s, i] = l3((o = a.value) == null ? void 0 : o.toString());
  return /* @__PURE__ */ h.jsx(
    k3,
    {
      className: [e, G3(r), uo["align-" + t]].join(" "),
      label: /* @__PURE__ */ h.jsx(i0, { text: a.label, required: a.required, optional: a.optional }),
      description: a.description,
      readOnly: a.readOnly,
      placeholder: a.placeholder,
      disabled: a.disabled,
      value: s ?? "",
      onBlur: a.onBlur,
      onChange: (l) => {
        var d;
        const c = l.target.value.replace(",", ".").replace(/[^0-9.,-]/g, "");
        [",", "."].includes(c[c.length - 1]) ? i(c) : c.length > 0 ? i(parseFloat(c).toString()) : i(""), (d = a.onChange) == null || d.call(a, c ? parseFloat(c) : void 0);
      },
      inputMode: n,
      error: a.error,
      prefix: a.prefix,
      suffix: a.suffix,
      type: "text",
      min: a.min,
      max: a.max
    }
  );
}, Hl = ({ size: r = "full", className: n, ...e }) => /* @__PURE__ */ h.jsx(
  k3,
  {
    className: `${n} ${G3(r)}`,
    label: /* @__PURE__ */ h.jsx(i0, { text: e.label, required: e.required, optional: e.optional }),
    description: e.description,
    readOnly: e.readOnly,
    placeholder: e.placeholder,
    disabled: e.disabled,
    value: e.value ?? "",
    onBlur: e.onBlur,
    onChange: (t) => {
      var a;
      (a = e.onChange) == null || a.call(e, t.target.value);
    },
    inputMode: e.inputMode,
    error: e.error,
    multiline: !0,
    counter: e.maxLength
  }
), Tl = ({ ...r }) => {
  var e;
  const n = r.value ? { value: r.value } : { defaultValue: "" };
  return /* @__PURE__ */ h.jsxs(y0, { children: [
    /* @__PURE__ */ h.jsx(h1, { children: /* @__PURE__ */ h.jsx(i0, { text: r.label, required: r.required, optional: r.optional }) }),
    r.description && /* @__PURE__ */ h.jsx(y0.Description, { children: r.description }),
    /* @__PURE__ */ h.jsxs(
      J0,
      {
        className: r.className,
        width: "full",
        onChange: (t) => {
          var a;
          return (a = r.onChange) == null ? void 0 : a.call(r, t.target.value);
        },
        onBlur: () => {
          var t;
          (t = r.onBlur) == null || t.call(r);
        },
        ...n,
        children: [
          r.placeholder && /* @__PURE__ */ h.jsx(J0.Option, { disabled: !0, value: "", children: r.placeholder }),
          (e = r.options) == null ? void 0 : e.map((t) => /* @__PURE__ */ h.jsx(J0.Option, { value: t.value, children: t.label ?? t.value }, t.value))
        ]
      }
    ),
    r.error && /* @__PURE__ */ h.jsx(M0, { children: r.error })
  ] });
}, ho = "_notUnderlined_jhlgm_1", Co = {
  notUnderlined: ho
}, K3 = ({ underlined: r = !0, className: n = "", ...e }) => {
  const t = [n];
  return r || t.push(Co.notUnderlined), /* @__PURE__ */ h.jsx(y4, { className: t.join(""), ...e });
};
K3.List = y4.List;
K3.Tab = y4.Tab;
K3.Panel = y4.Panel;
const K0 = {
  "with-icon": "_with-icon_1cp54_2",
  "link-icon": "_link-icon_1cp54_8",
  "with-underline": "_with-underline_1cp54_12",
  "link-icon-text": "_link-icon-text_1cp54_12",
  "without-underline": "_without-underline_1cp54_16",
  "without-icon": "_without-icon_1cp54_20"
}, y8 = ({ underline: r, className: n, children: e, ...t }) => {
  const a = [n];
  return r === void 0 || r === !0 ? a.push(K0["with-underline"]) : a.push(K0["without-underline"]), t.icon ? (a.push(K0["with-icon"]), e = /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    /* @__PURE__ */ h.jsx(c2, { material: t.icon, size: "sm", className: K0["link-icon"] }),
    /* @__PURE__ */ h.jsx("span", { className: K0["link-icon-text"], children: e })
  ] })) : a.push(K0["without-icon"]), /* @__PURE__ */ h.jsx(T8, { className: a.join(" "), ...t, children: e });
}, fo = "_opaqueHeader_75ts1_1", po = "_table_75ts1_6", mo = "_whiteBody_75ts1_10", s3 = {
  opaqueHeader: fo,
  table: po,
  whiteBody: mo
}, m1 = ({ header: r = "transparent", body: n = "transparent", className: e = "", ...t }) => {
  t["data-color"] || (t["data-color"] = "neutral");
  const a = [e, s3.table];
  return r && r !== "transparent" && a.push(s3.opaqueHeader), n && n === "white" && a.push(s3.whiteBody), /* @__PURE__ */ h.jsx(B0, { className: a.join(" "), ...t });
};
m1.Cell = B0.Cell;
m1.HeaderCell = B0.HeaderCell;
m1.Head = B0.Head;
m1.Body = B0.Body;
m1.Row = B0.Row;
m1.Foot = B0.Foot;
const go = "_size2xs_1wuvk_1", vo = "_size3xs_1wuvk_8", Mo = "_surfaceTinted_1wuvk_15", i3 = {
  size2xs: go,
  size3xs: vo,
  surfaceTinted: Mo
}, o3 = ({
  "data-size": r = "md",
  "data-color-variant": n = "base",
  className: e,
  ...t
}) => {
  const a = [e];
  return r === "2xs" ? a.push(i3.size2xs) : r === "3xs" && a.push(i3.size3xs), n === "surface-tinted" && a.push(i3.surfaceTinted), /* @__PURE__ */ h.jsx(O8, { "data-size": r, className: a.join(" "), ...t });
};
export {
  C5 as Accent,
  Do as Alert,
  o3 as Avatar,
  f0 as Body,
  wl as BorderedRadioGroup,
  yl as BorderedToggleGroup,
  e2 as Box,
  a3 as Button,
  Dl as CardTitle,
  kl as DateTimePicker,
  xl as Datepicker,
  U8 as DeprecatedCard,
  ko as DeprecatedDetails,
  _o as DeprecatedErrorLabel,
  xo as DeprecatedInputLabel,
  Zl as FileUploader,
  $i as FileUploaderContext,
  Ll as Footer,
  _l as Header,
  c2 as Icon,
  I as Image,
  Ho as ImageAisSat,
  Oo as ImageArcticInfo,
  Eo as ImageAvgiftskalkulator,
  Io as ImageBaatfartMarine,
  No as ImageBestilleLos,
  Fo as ImageBoelgevarsel,
  Ml as ImageBwArcticinfo,
  vl as ImageBwBoelgevarsel,
  ml as ImageBwNais,
  gl as ImageBwOhoi,
  To as ImageDatakatalog,
  Vo as ImageDgps,
  al as ImageDigitaleFyrbesoek,
  Ro as ImageDigitaleReferanseruter,
  jo as ImageEDialog,
  Ao as ImageFarledsbevis,
  pl as ImageForespoerselSendt,
  Po as ImageHais,
  Yo as ImageHavbase,
  Uo as ImageHavnOgFarvannsloven,
  zo as ImageIsmelding,
  Wo as ImageIstjeneste,
  qo as ImageKikkert,
  $o as ImageKystdatahuset,
  Go as ImageKystinfoKart,
  ll as ImageKystreise,
  fl as ImageKystvaer,
  Ko as ImageLavutslipp,
  Qo as ImageLrit,
  il as ImageMarU,
  cl as ImageMegafon,
  Cl as ImageNais,
  Xo as ImageNasjonalHavneoversikt,
  ol as ImageNavarea,
  Jo as ImageNavigasjonsvarsler,
  el as ImageOhoi,
  tl as ImageRegistrerteSeilaser,
  dl as ImageSafeSeaNet,
  nl as ImageSeLosbestilling,
  ul as ImageSelvbetjening,
  hl as ImageSelvbetjeningRso,
  rl as ImageSkipsrapportering,
  sl as ImageSlukkedeFyrlys,
  Bo as ImageSoeknadOmFarledsbevis,
  i0 as LabelContent,
  y8 as Link,
  g5 as Logo,
  Pl as NumberInput,
  Tl as Select,
  So as Stepper,
  Nl as Suggestion,
  bl as Summary,
  m1 as Table,
  K3 as Tabs,
  Hl as TextArea,
  Sl as TextInput,
  Zo as Typography
};
