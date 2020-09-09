import Vue from "vue";
import VueRouter from "vue-router";
import { isLogined } from "../utils/auth.js";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "/",
        redirect: "/tuijian",
      },
      {
        path: "/tuijian",
        name: "tuijian",
        component: () => import("../views/tuijian.vue"),
      },
      {
        path: "/phone",
        name: "phone",
        component: () => import("../views/phone.vue"),
      },
      {
        path: "/zhineng",
        name: "zhineng",
        component: () => import("../views/zhineng.vue"),
      },
    ],
  },
  {
    path: "/list",
    name: "list",
    component: () => import("../views/list.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/reg",
    name: "reg",
    component: () => import("../views/reg.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/cart.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../views/user.vue"),
  },
  {
    path: "/xq",
    name: "xiangqing",
    component: () => import("../views/xiangqing.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    if (isLogined()) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    next();
  }
});
export default router;
