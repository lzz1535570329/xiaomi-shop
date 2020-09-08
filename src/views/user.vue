<template>
  <div class="app">
    <header>
      <ul>
        <li>
          <van-icon
            class="logo"
            name="https://b.yzcdn.cn/vant/icon-demo-1126.png"
            size="50"
          />
        </li>
        <li>
          <p>
            <a @click="goLogin" style="color:#ffffff">{{
              isLogin ? username : "登录/注册"
            }}</a>
          </p>
        </li>
      </ul>
    </header>
    <section>
      <div style="border-bottom:1px solid #CCCCCC;background-color: #ffffff;">
        <div class="dingdan">
          <ul>
            <li>我的订单</li>
            <li>全部订单 <a href="#">></a></li>
          </ul>
        </div>
      </div>
      <div class="liebiao">
        <ul>
          <li>
            <van-icon name="balance-pay" size="30" />
            <p>待付款</p>
          </li>
          <li>
            <van-icon name="logistics" size="30" />
            <p>待收货</p>
          </li>
          <li>
            <van-icon name="setting-o" size="30" />
            <p>退修换</p>
          </li>
        </ul>
      </div>
      <div class="vip">
        <ul style="border-bottom:1px solid #cccccc;">
          <li>
            <van-icon name="gem" size="30" color="#ffff00" />
            <span style="margin-left:0.2rem;">会员中心</span>
          </li>
          <li style="margin-right:0.15rem;"><van-icon name="arrow" /></li>
        </ul>
        <ul>
          <li>
            <van-icon name="card" size="30" color="#3399FF" />
            <span style="margin-left:0.2rem;">我的优惠</span>
          </li>
          <li style="margin-right:0.15rem;"><van-icon name="arrow" /></li>
        </ul>
      </div>
      <div class="vip">
        <ul style="border-bottom:1px solid #cccccc;">
          <li>
            <van-icon name="smile" size="30" color="#CC3333" />
            <span style="margin-left:0.2rem;">服务中心</span>
          </li>
          <li style="margin-right:0.15rem;"><van-icon name="arrow" /></li>
        </ul>
        <ul>
          <li>
            <van-icon name="shop" size="30" color="#FF9900" />
            <span style="margin-left:0.2rem;">小米之家</span>
          </li>
          <li style="margin-right:0.15rem;"><van-icon name="arrow" /></li>
        </ul>
      </div>
      <div class="vip">
        <ul style="border-bottom:1px solid #cccccc;">
          <li>
            <van-icon name="underway" size="30" color="#FFCC00" />
            <span style="margin-left:0.2rem;">我的F码</span>
          </li>
          <li style="margin-right:0.15rem;"><van-icon name="arrow" /></li>
        </ul>
        <ul>
          <li>
            <van-icon name="gift" size="30" color="#CC9900" />
            <span style="margin-left:0.2rem;">礼品码兑换</span>
          </li>
          <li style="margin-right:0.15rem;"><van-icon name="arrow" /></li>
        </ul>
      </div>
      <div class="vip">
        <ul>
          <li>
            <van-icon name="setting" size="30" color="#333333" />
            <span style="margin-left:0.2rem;">设置</span>
          </li>
          <li style="margin-right:0.15rem;"><van-icon name="arrow" /></li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { getToken } from "../utils/auth";
export default {
  data() {
    return { username: "", isLogin: false };
  },
  created() {
    if (getToken()) {
      this.username = localStorage.getItem("username");
      this.isLogin = true;
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
  font-size: 16px;
}
header {
  width: 100%;
  height: 1rem;
  background-color: #f37d0f;
}
.logo {
  padding: 0.2rem;
}
header ul li {
  float: left;
}
header p {
  /* color: #ffffff; */
  margin-top: 0.4rem;
  font-size: 0.15rem;
}
.dingdan {
  width: 94%;
  margin: 0 auto;
  height: 0.3rem;
}
.dingdan ul {
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding-top: 0.05rem;
}
.liebiao {
  width: 100%;
  height: 1rem;
  background-color: #ffffff;
  /* background-color: aqua; */
}
.liebiao ul {
  width: 90%;
  height: 1rem;
  margin: 0 auto;
  display: flex;
  flex: 1;
  justify-content: space-between;
  /* background-color: aquamarine; */
}
.liebiao ul li {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.vip {
  width: 100%;
  height: 0.9rem;
  background-color: #ffffff;
  margin-top: 0.1rem;
  border-bottom: solid 1px #cccccc;
}
.vip ul {
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding-top: 0.1rem;
}
.vip ul li {
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction:column; */
}
</style>
