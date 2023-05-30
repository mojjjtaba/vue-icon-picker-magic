import { openBlock as t, createElementBlock as s, createElementVNode as c, Fragment as l, renderList as p, pushScopeId as u, popScopeId as h } from "vue";
const f = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [i, r] of n)
    o[i] = r;
  return o;
}, _ = (e) => (u("data-v-697e52f9"), e = e(), h(), e), m = { class: "icon-picker-magic" }, g = { class: "wrap" }, v = /* @__PURE__ */ _(() => /* @__PURE__ */ c("section", { class: "search" }, [
  /* @__PURE__ */ c("input", {
    type: "search",
    placeholder: "Search icon ..."
  })
], -1)), w = { class: "icon-list" }, k = { class: "icon-item" }, y = /* @__PURE__ */ _(() => /* @__PURE__ */ c("i", { class: "las la-battery-three-quarters" }, null, -1)), I = [
  y
], x = {
  __name: "IconPickerMagic",
  props: {},
  setup(e) {
    return console.log(document.styleSheets), (n, o) => (t(), s("section", m, [
      c("div", g, [
        v,
        c("section", w, [
          (t(!0), s(l, null, p(new Array(100), (i, r) => (t(), s("div", k, I))), 256))
        ])
      ])
    ]));
  }
}, a = /* @__PURE__ */ f(x, [["__scopeId", "data-v-697e52f9"]]), d = function(e) {
  e.component("IconPickerMagic", a);
};
typeof window < "u" && window.Vue && d(window.Vue);
const M = {
  version: "0.0.7",
  install: d,
  IconPickerMagic: a
  // customButton: IconPickerMagic
};
export {
  a as IconPickerMagic,
  M as default
};
