import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vant from "vant";
import "vant/lib/index.css";
import {} from "./views/xiangqing.vue";
import {} from "./views/tuijian.vue";

Vue.use(Vant);
Vue.config.productionTip = false;
const eventBus = new Vue();
Vue.prototype.eventBus = eventBus;

Vue.filter("dalImg", (img) => {
  if (img && img.startsWith("http")) {
    return img;
  }
  return "http://192.168.16.78:3009" + img;
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
