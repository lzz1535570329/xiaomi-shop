<template>
  <div
    style="width:100%;height:100%;position: absolute;top: 0;left: 0;z-index: 20;"
  >
    <van-nav-bar
      :fixed="true"
      title="购物车"
      @click-left="onClickLeft"
      class="op"
      style="color:'#80080'"
    >
      <template #left>
        <span
          class="iconfont icon-right-angle"
          style="font-size:0.22rem;color:#a1a1a1"
        ></span>
      </template>
      <template #right>
        <span
          class="iconfont icon-sousuo"
          style="font-size:0.22rem;color:#a1a1a1"
        ></span>
      </template>
    </van-nav-bar>
    <div style="width:100%;height:0.46rem"></div>
    <div
      style="width:100%;height:0.54rem;background:#fff"
      class="box"
      v-if="isShow"
    >
      <p class="fl">登陆后享受很多优惠</p>
      <p class="fr" @click="toLogin">去登录</p>
    </div>
    <div class="carts" v-if="isEnd">
      <p class="kkong">购物车空空的</p>
      <div class="gguang" @click="goHome">
        去逛逛
      </div>
    </div>
    <div v-if="!isEnd" style="width:100%;min-height:1rem;">
      <div
        v-for="item in cat"
        :key="item.product._id"
        style="width:100%;height:1.04rem;background:#fff;overflow:hidden;margin-top:0.05rem;"
      >
        <!-- 单选 -->
        <van-checkbox v-model="item.checked" class="onlySel"></van-checkbox>
        <van-card class="card" style="margin-top:-0.01rem;position:relative">
          <template #thumb>
            <img
              :src="item.product.coverImg | dalImg"
              alt=""
              style="width:0.86rem;height:0.86rem"
              @click="route(item.product._id)"
            />
          </template>
          <template #title>
            <p style="font-size:0.16rem" @click="route(item.product._id)">
              {{ item.product.name }}
            </p>
          </template>
          <template #desc>
            <p style="font-size:0.13rem;color:#b1b1b1">
              售价：{{ item.product.price }}元
            </p>
          </template>
          <template #price>
            <van-stepper v-model="item.quantity" style="margin-top:-0.3rem" />
          </template>
          <template #footer>
            <span
              class="iconfont icon-lj"
              style="display:inline-block;position:absolute;bottom:0.1rem;right:0.2rem;font-size:0.25rem;color:#b1b1b1"
              @click="delProducts(item._id)"
            ></span>
          </template>
        </van-card>
      </div>
    </div>
    <p
      v-if="!isEnd"
      style="width:100%;height:0.35rem;background:#fff;color:#a1a1a1;line-height:0.35rem;font-size:0.13rem;margin-top:0.08rem;text-align:center"
    >
      温馨提示：产品购买成功，以最终下单为准，请尽快结算
    </p>
    <p class="fav">猜你喜欢<span class="sp"></span></p>
    <fieldset class="bord">
      <legend class="leg">实时推荐你的心心念念</legend>
    </fieldset>
    <div class="fav-pro">
      <div
        v-for="item in list"
        :key="item._id"
        class="list"
        @click="route(item._id)"
      >
        <img :src="item.coverImg | dalImg" alt="" />
        <div class="tt">
          <h3>{{ item.name }}</h3>
          <p>￥{{ item.price }}元</p>
        </div>
      </div>
    </div>
    <!-- 全选 -->
    <van-submit-bar
      :fixed="false"
      :price="numCount() * 100"
      button-text="提交订单"
    >
      <van-checkbox v-model="checkAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { getProducts } from "../services/products";
import { cartInfo } from "../services/cartInfo";
import { delCart } from "../services/delData";
import { getToken } from "../utils/auth";
export default {
  data() {
    return { list: [], cat: [], isShow: true, isEnd: true, index: "" };
  },
  created() {
    getProducts().then((res) => {
      // console.log(res);
      this.list = res.products.splice(0, 8);
    });
    if (getToken()) {
      this.isShow = false;
      this.cartInfos();
    }
  },
  methods: {
    onClickLeft() {
      history.go(-1);
    },
    toLogin() {
      this.$router.push({ name: "login" });
    },
    goHome() {
      this.$router.push({ name: "tuijian" });
    },
    cartInfos() {
      cartInfo().then((res) => {
        if (res.length > 0) {
          res.forEach((v) => {
            v.checked = false;
          });
          // console.log(res);
          this.cat = res;
          this.isEnd = false;
          this.isShow = false;
        } else {
          this.isEnd = true;
        }
      });
    },
    numCount() {
      return this.cat
        .filter((item) => item.checked)
        .reduce((pre, cur) => {
          return pre + cur.product.price * cur.quantity;
        }, 0);
    },
    delProducts(a) {
      this.index = this.cat.findIndex((v) => (v._id = a));
      this.cat.splice(this.index, 1);
      delCart(a).then((res) => {
        console.log(res);
        this.$store.commit("addNum", -res.quantity);
        // console.log();
        if (this.cat.length == 0) {
          this.isEnd = true;
        }
      });
    },
    route(id) {
      this.$router.push({ name: "xiangqing", query: { id } });
    },
  },
  computed: {
    checkAll: {
      get() {
        if (this.cat.length > 0) {
          return this.cat.every((item) => item.checked === true);
        }
      },
      set(v) {
        this.cat.forEach((item) => (item.checked = v));
      },
    },
  },
};
</script>

<style>
.op {
  background: #f2f2f2;
}
.box {
  position: relative;
}
.fl {
  font-size: 0.16rem;
  line-height: 0.54rem;
  margin-left: 0.2rem;
}
.fr {
  font-size: 0.13rem;
  line-height: 0.54rem;
  color: #a1a1a1;
  margin-right: 0.3rem;
}
.box::after {
  content: "";
  position: absolute;
  right: 0.2rem;
  top: 50%;
  width: 0.1rem;
  height: 0.1rem;
  border-left: 1px solid currentColor;
  border-top: 1px solid currentColor;
  transform: translate3d(0, -50%, 0) rotate(135deg);
}
.carts {
  width: 100%;
  height: 0.64rem;
  background: #ebebeb;
}
.kkong {
  float: left;
  font-size: 0.14rem;
  color: #a1a1a1;
  line-height: 0.64rem;
  margin-left: 1.3rem;
}
.gguang {
  float: left;
  width: 0.54rem;
  height: 0.2rem;
  border: 1px solid #a1a1a1;
  text-align: center;
  line-height: 0.2rem;
  margin-top: 0.22rem;
  margin-left: 0.1rem;
}
.fav {
  position: relative;
  text-align: center;
  font-size: 15px;
  color: orange;
  margin-top: 0.2rem;
}
.fav::after {
  content: "";
  position: absolute;
  right: 1.4rem;
  top: 50%;
  width: 0.04rem;
  height: 0.15rem;
  background: coral;
  border-radius: 0.02rem;
  transform: translate3d(0, -50%, 0) rotate(-140deg);
}
.sp::after {
  content: "";
  position: absolute;
  right: 1.3rem;
  top: 50%;
  width: 0.04rem;
  height: 0.15rem;
  background: coral;
  border-radius: 0.02rem;
  transform: translate3d(0, -50%, 0) rotate(-140deg);
}
.fav::before {
  content: "";
  position: absolute;
  left: 1.4rem;
  top: 50%;
  width: 0.04rem;
  height: 0.15rem;
  background: coral;
  border-radius: 0.02rem;
  transform: translate3d(0, -50%, 0) rotate(-140deg);
}
.sp::before {
  content: "";
  position: absolute;
  left: 1.3rem;
  top: 50%;
  width: 0.04rem;
  height: 0.15rem;
  background: coral;
  border-radius: 0.02rem;
  transform: translate3d(0, -50%, 0) rotate(-140deg);
}
.fav-pro {
  width: 100%;
  min-height: 2rem;
  background: #fff;
  margin-top: 0.2rem;
  overflow: hidden;
}
.bord {
  width: 80%;
  border-color: #a1a1a1;
  border-bottom: 0;
  border-left: 0;
  border-right: 0;
  margin-left: 10%;
  border-width: 1px;
}
.leg {
  font-size: 14px;
  color: #a1a1a1;
  margin: 0.05rem auto;
}
.list {
  width: 49%;
  min-height: 1rem;
  float: left;
  margin: 0.05rem 0.015rem;
}
.list img {
  width: 100%;
  height: 1.5rem;
}
.onlySel {
  float: left;
  margin-top: 0.41rem;
  margin-left: 0.05rem;
}
.card {
  width: 90%;
  background-color: #fff;
  float: right;
}
</style>
