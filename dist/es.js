import { openBlock as s, createElementBlock as _, renderSlot as r } from "vue";
const u = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, c] of e)
    o[n] = c;
  return o;
}, l = {};
function a(t, e) {
  return s(), _("button", null, [
    r(t.$slots, "default", {}, void 0, !0)
  ]);
}
const d = /* @__PURE__ */ u(l, [["render", a], ["__scopeId", "data-v-c792b957"]]), f = {
  install: (t, e) => {
    t.component("CustomButton", d);
  }
};
export {
  f as default
};
