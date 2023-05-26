import CustomButton from "./components/CustomButton.vue";

export default {
  install: (app, options) => {
    app.component("CustomButton", CustomButton);
  },
  CustomButton
};