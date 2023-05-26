import CustomButton from "./components/CustomButton.vue";

// export default {
//   install: (app, options) => {
//     app.component("CustomButton", CustomButton);
//   }
// };

const install = function(Vue) {
  Vue.component('CustomButton', CustomButton);
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { CustomButton }

export default {
  version: '0.0.7',
  install,
  CustomButton,
  customButton: CustomButton
}