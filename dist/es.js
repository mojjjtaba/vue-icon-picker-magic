import { openBlock as a, createElementBlock as d, normalizeClass as i, renderSlot as s } from "vue";
const l = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [u, c] of e)
    o[u] = c;
  return o;
}, _ = {
  __name: "CustomButton",
  props: {
    hasBorder: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    return (e, o) => (a(), d("button", {
      style: { background: "beige", padding: "10px 30px" },
      class: i({ "has-border": t.hasBorder })
    }, [
      s(e.$slots, "emoji", { style: "margin-right: 20px" }, void 0, !0),
      s(e.$slots, "text", {}, void 0, !0)
    ], 2));
  }
}, n = /* @__PURE__ */ l(_, [["__scopeId", "data-v-f02c5c56"]]), r = function(t) {
  t.component("CustomButton", n);
};
typeof window < "u" && window.Vue && r(window.Vue);
const f = {
  version: "0.0.7",
  install: r,
  CustomButton: n,
  customButton: n
};
export {
  n as CustomButton,
  f as default
};
