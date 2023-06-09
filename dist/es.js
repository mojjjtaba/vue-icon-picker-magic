import { ref as h, openBlock as r, createElementBlock as l, createElementVNode as o, Fragment as d, renderList as f, normalizeClass as m, createCommentVNode as w, pushScopeId as v, popScopeId as g } from "vue";
const k = (c, t) => {
  const s = c.__vccOpts || c;
  for (const [_, e] of t)
    s[_] = e;
  return s;
}, x = (c) => (v("data-v-08858931"), c = c(), g(), c), I = { class: "icon-picker-magic" }, y = { class: "wrap" }, S = /* @__PURE__ */ x(() => /* @__PURE__ */ o("section", { class: "search" }, [
  /* @__PURE__ */ o("input", {
    type: "search",
    placeholder: "Search icon ..."
  })
], -1)), N = { class: "icon-list" }, M = { class: "wrapper" }, P = {
  key: 0,
  class: "icon-item"
}, V = {
  __name: "IconPickerMagic",
  props: {},
  setup(c) {
    const t = h([]);
    function s(e) {
      return fetch(e).then((n) => {
        if (!n.ok)
          throw new Error(`Failed to fetch ${e}`);
        return n.text();
      });
    }
    function _(e) {
      const n = /\.fa-[a-z0-9\-]+::before/g, i = [];
      let a;
      for (; (a = n.exec(e)) !== null; )
        i.push(a[0].slice(1, -8));
      return i;
    }
    return s("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.css").then((e) => {
      t.value = _(e), console.log(t);
    }).catch((e) => {
      console.error(e);
    }), (e, n) => (r(), l("section", I, [
      o("div", y, [
        S,
        o("section", N, [
          o("div", M, [
            (r(!0), l(d, null, f(t.value, (i, a) => (r(), l(d, null, [
              a < 10 ? (r(), l("div", P, [
                o("i", {
                  class: m(`fa-solid ${i}`)
                }, null, 2)
              ])) : w("", !0)
            ], 64))), 256))
          ])
        ])
      ])
    ]));
  }
}, p = /* @__PURE__ */ k(V, [["__scopeId", "data-v-08858931"]]), u = function(c) {
  c.component("IconPickerMagic", p);
};
typeof window < "u" && window.Vue && u(window.Vue);
const E = {
  version: "0.0.7",
  install: u,
  IconPickerMagic: p
  // customButton: IconPickerMagic
};
export {
  p as IconPickerMagic,
  E as default
};
