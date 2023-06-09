import { ref as u, openBlock as l, createElementBlock as _, createElementVNode as n, Fragment as f, renderList as h, normalizeClass as m, pushScopeId as w, popScopeId as g } from "vue";
const v = (c, o) => {
  const s = c.__vccOpts || c;
  for (const [i, e] of o)
    s[i] = e;
  return s;
}, x = (c) => (w("data-v-fa4b5b18"), c = c(), g(), c), k = { class: "icon-picker-magic" }, I = { class: "wrap" }, b = /* @__PURE__ */ x(() => /* @__PURE__ */ n("section", { class: "search" }, [
  /* @__PURE__ */ n("input", {
    type: "search",
    placeholder: "Search icon ..."
  })
], -1)), S = { class: "icon-list" }, y = { class: "icon-item" }, M = {
  __name: "IconPickerMagic",
  props: {},
  setup(c) {
    const o = u([]);
    function s(e) {
      return fetch(e).then((t) => {
        if (!t.ok)
          throw new Error(`Failed to fetch ${e}`);
        return t.text();
      });
    }
    function i(e) {
      const t = /\.fa-[a-z0-9\-]+::before/g, a = [];
      let r;
      for (; (r = t.exec(e)) !== null; )
        a.push(r[0].slice(1, -8));
      return a;
    }
    return s("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.css").then((e) => {
      o.value = i(e), console.log(o);
    }).catch((e) => {
      console.error(e);
    }), (e, t) => (l(), _("section", k, [
      n("div", I, [
        b,
        n("section", S, [
          (l(!0), _(f, null, h(o.value, (a, r) => (l(), _("div", y, [
            n("i", {
              class: m(`fa-solid ${a}`)
            }, null, 2)
          ]))), 256))
        ])
      ])
    ]));
  }
}, d = /* @__PURE__ */ v(M, [["__scopeId", "data-v-fa4b5b18"]]), p = function(c) {
  c.component("IconPickerMagic", d);
};
typeof window < "u" && window.Vue && p(window.Vue);
const P = {
  version: "0.0.7",
  install: p,
  IconPickerMagic: d
  // customButton: IconPickerMagic
};
export {
  d as IconPickerMagic,
  P as default
};
