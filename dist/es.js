import { openBlock as i, createElementBlock as d, createStaticVNode as r } from "vue";
const _ = (e, c) => {
  const t = e.__vccOpts || e;
  for (const [a, n] of c)
    t[a] = n;
  return t;
}, l = { class: "icon-picker-magic" }, p = /* @__PURE__ */ r('<div class="wrap" data-v-1d4fd200><section class="search" data-v-1d4fd200><input type="search" data-v-1d4fd200></section><section class="icon-list" data-v-1d4fd200><i class="las la-battery-three-quarters" data-v-1d4fd200></i><i class="las la-battery-three-quarters" data-v-1d4fd200></i></section></div>', 1), f = [
  p
], u = {
  __name: "IconPickerMagic",
  props: {},
  setup(e) {
    return console.log(document.styleSheets), (c, t) => (i(), d("section", l, f));
  }
}, s = /* @__PURE__ */ _(u, [["__scopeId", "data-v-1d4fd200"]]), o = function(e) {
  e.component("IconPickerMagic", s);
};
typeof window < "u" && window.Vue && o(window.Vue);
const h = {
  version: "0.0.7",
  install: o,
  IconPickerMagic: s
  // customButton: IconPickerMagic
};
export {
  s as IconPickerMagic,
  h as default
};
