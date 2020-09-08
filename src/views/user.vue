<template>
  <div class="app">
    <header>
      <div class="avatar">
        <img src="../assets/123.png" alt="" />
      </div>
      <p class="uName">
        <a @click="goLogin" style="color:#fff">{{
          isLogin ? username : "登录/注册"
        }}</a>
      </p>
    </header>
    <div class="dingdan">
      <span
        style="float:left;line-height:0.43rem;font-size:15px;margin-left:0.15rem"
        >我的订单</span
      >
      <span
        style="float:right;line-height:0.43rem;font-size:13px;margin-right:0.25rem;position:relative"
        >全部订单<van-icon
          name="arrow "
          style=";line-height:0.43rem;font-size:16px;position:absolute;top:0;left:0.5rem"
        />
      </span>
    </div>
    <div class="money">
      <div>
        <van-grid :border="false">
          <van-grid-item icon="pending-payment" text="待付款" class="mo" />
          <van-grid-item icon="logistics" text="待收货" class="mt" />
          <van-grid-item icon="replay" text="退换修" class="mr" />
        </van-grid>
      </div>
    </div>
    <ul>
      <li>
        <span class="iconfont icon-huangguan" style="color:#ffa400"></span>
        <p style="border-bottom:1px solid #a1a1a1">会员中心</p>
      </li>
      <li>
        <span class="iconfont icon-qianbao" style="color:#2ca9e1"></span>
        <p>我的优惠</p>
      </li>
      <li style="margin-top: 0.1rem">
        <span class="iconfont icon-fuwu" style="color:#f05654"></span>
        <p style="border-bottom:1px solid #a1a1a1">服务中心</p>
      </li>
      <li>
        <span
          class="iconfont icon-chaoshi"
          style="color:#ff7500;font-size:0.25rem"
        ></span>
        <p>小米之家</p>
      </li>
      <li style="margin-top: 0.1rem">
        <span
          class="iconfont icon-icon8"
          style="color:#ffb61e;font-size:0.25rem"
        ></span>
        <p style="border-bottom:1px solid #a1a1a1">我的F码</p>
      </li>
      <li>
        <span class="iconfont icon-liwu" style="color:#ffb61e"></span>
        <p>礼物码兑换</p>
      </li>
      <li style="margin-top: 0.1rem;">
        <span
          class="iconfont icon-shezhi"
          style="color:#808080;font-size:0.25rem"
        ></span>
        <p>设置</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { getToken } from "../utils/auth";
import { userInfo } from "../services/userInfo";
import { ip } from "../utils/ip";
export default {
  data() {
    return {
      username: "",
      isLogin: false,
      imgUrl: "",
    };
  },
  created() {
    if (getToken()) {
      this.isLogin = true;
      userInfo().then((res) => {
        console.log(res);
        this.username = res.userName;
        this.imgUrl = ip + res.avatar;
      });
    }
  },
  methods: {
    goLogin() {
      if (getToken()) {
        return;
      } else {
        this.$router.push({ name: "login" });
      }
    },
  },
};
</script>

<style scoped>
.app {
  width: 100%;
  background-color: #f5f5f5;
  font-size: 14px;
}
header {
  width: 100%;
  height: 0.83rem;
  background-color: #f37d0f;
}
.avatar {
  width: 0.42rem;
  height: 0.42rem;
  float: left;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #000;
  margin: 0.16rem 0.1rem 0.16rem 0.2rem;
  background: #fff;
}
.avatar img {
  width: 100%;
  height: 100%;
}
.uName {
  float: left;
  font-size: 14px;
  line-height: 0.83rem;
}
.dingdan {
  width: 100%;
  height: 0.43rem;
  background: #fff;
  border-bottom: 1px solid #a1a1a1;
}
.money {
  width: 100%;
  min-height: 0.5rem;
  background-color: #fff;
  padding: 0 5%;
}
.money > div {
  width: 90%;
  /* background-color: red; */
}
.mt {
  margin: 0 0.42rem;
}
ul {
  width: 100%;
  min-height: 2rem;
  /* background: red; */
  margin-top: 0.1rem;
}
ul li {
  width: 100%;
  height: 0.54rem;
  background-color: #fff;
}
ul li p {
  width: 85%;
  height: 100%;
  /* background: red; */
  float: right;
  font-size: 16px;
  line-height: 0.54rem;
  position: relative;
}
ul li p::after {
  content: "";
  position: absolute;
  right: 0.15rem;
  top: 50%;
  width: 0.08rem;
  height: 0.08rem;
  border-left: 1px solid currentColor;
  border-top: 1px solid currentColor;
  transform: translate3d(0, -50%, 0) rotate(135deg);
}
ul li .iconfont {
  float: left;
  font-size: 0.2rem;
  line-height: 0.54rem;
  margin-left: 0.15rem;
}
</style>
