<template>
  <div class="app">
    <div class="header">
      <img
        src="https://account.xiaomi.com/static/res/11eb7d1/account-static/respassport/acc-2014/img/2018/milogo@2x.png"
        alt=""
      />
    </div>
    <p class="log">小米账号登录</p>
    <van-form @submit="onSubmit" class="forms">
      <van-field
        v-model="userName"
        name="userName"
        placeholder="小米ID"
        class="un"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="密码"
        class="pw"
      />
      <div style="margin: 0.2rem;">
        <van-button round block type="info" native-type="submit" class="btn">
          登录
        </van-button>
      </div>
    </van-form>
    <p class="reg-reset">
      <span style="margin-right:0.08rem" @click="goReg">立即注册</span
      ><span style="color:#000">|</span
      ><span style="margin-left:0.08rem">忘记密码</span>
    </p>
  </div>
</template>
<script>
import { login } from "../services/login";
import { setToken } from "../utils/auth";
import { Toast } from "vant";
export default {
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      let reg = /^[0-9]{6,7}$/;
      let reg1 = /^[a-z0-9A-Z]{3,6}$/;
      console.log(values);
      if (reg.test(values.userName) && reg1.test(values.password)) {
        login(values).then((res) => {
          console.log(res);
          if (res.code == "success") {
            Toast.success("登陆成功");
            setToken(res.token);
            this.$router.push({ name: "Home" });
          } else {
            Toast.fail("用户名不存在");
          }
        });
      } else {
        Toast.fail("ID/密码不正确");
      }
    },
    goReg() {
      this.$router.push({ name: "reg" });
    },
  },
};
</script>

<style scoped>
.app {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
}
.header {
  width: 0.48rem;
  height: 0.48rem;
  margin: 0.3rem auto 0.2rem;
}
.header img {
  width: 100%;
  height: 100%;
}
.log {
  width: 90%;
  height: 0.18rem;
  margin-left: 5%;
  margin-bottom: 0.2rem;
  font-size: 0.18rem;
  line-height: 0.18rem;
  text-align: center;
}
.pw,
.un {
  width: 90%;
  height: 0.52rem;
  border-bottom: 1px solid #a1a1a1;
  margin-left: 5%;
  font-size: 0.18rem;
  padding-left: 0;
}
.btn {
  background: #ff6700;
  border: 0;
  font-size: 0.18rem;
  font-weight: 600;
}
.reg-reset {
  text-align: center;
  font-size: 0.16rem;
  color: #a1a1a1;
}
</style>
