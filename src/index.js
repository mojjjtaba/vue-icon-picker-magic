import IconPickerMagic from "./components/IconPickerMagic.vue";

// export default {
//   install: (app, options) => {
//     app.component("CustomButton", CustomButton);
//   }
// };

const install = function(Vue) {
  Vue.component('IconPickerMagic', IconPickerMagic);
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { IconPickerMagic }

export default {
  version: '0.0.7',
  install,
  IconPickerMagic
}