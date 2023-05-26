import { openBlock as _, createElementBlock as r, renderSlot as d } from "vue";
const i = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [s, u] of o)
    e[s] = u;
  return e;
}, l = {};
function f(t, o) {
  return _(), r("button", null, [
    d(t.$slots, "default", {}, void 0, !0)
  ]);
}
const n = /* @__PURE__ */ i(l, [["render", f], ["__scopeId", "data-v-c792b957"]]), c = function(t) {
  t.component("CustomButton", n);
};
typeof window < "u" && window.Vue && c(window.Vue);
const p = {
  version: "0.0.7",
  install: c,
  CustomButton: n,
  customButton: n
};
export {
  n as CustomButton,
  p as default
};
