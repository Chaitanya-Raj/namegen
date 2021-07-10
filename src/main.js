import Vue from "vue";
import App from "./App.vue";
import Clipboard from "v-clipboard";
import Toasted from "vue-toasted";

Vue.use(Toasted, {
  position: "top-center",
  duration: "1000",
  fullWidth: true,
  singleton: true,
  className: "toast",
  theme: "outline",
});

Vue.use(Clipboard);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
