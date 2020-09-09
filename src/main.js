import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vant from "vant";
import Vuex from "vuex";

import "vant/lib/index.css";
import "./views/xiangqing.vue";
import "./views/tuijian.vue";
import "./views/cart.vue";

import "../src/assets/font_hsy8p53mokl/iconfont.css";
import "../src/assets/font_wwr61yhcmdf/iconfont.css";

Vue.use(Vant);
Vue.use(Vuex);

Vue.config.productionTip = false;

const eventBus = new Vue();
Vue.prototype.eventBus = eventBus;

const store = new Vuex.Store({
  state: {
    amount: 0,
  },
  mutations: {
    // mutations 接收两个数据
    // 第一个参数 表示原始数据
    // 第二个参数 表示提交mutation是传递的数据
    addNum(state, step) {
      state.amount += step; //修改数据的记录会被开发工具记录，建议使用
    },
  },
});
Vue.filter("dalImg", (img) => {
  if (img && img.startsWith("http")) {
    return img;
  }
  return "http://192.168.16.78:3009" + img;
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
