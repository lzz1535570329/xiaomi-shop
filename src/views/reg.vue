<template>
  <div class="app">
    <h1>注册小米账号</h1>

    <van-form @submit="onSubmit" class="forms">
      <van-uploader
        v-model="filelist"
        multiple
        :max-count="1"
        class="files"
        :after-read="afterRead"
      />
      <van-field
        v-model="userName"
        name="userName"
        type="text"
        placeholder="小米ID"
        class="un"
      />
      <van-field
        v-model="nickName"
        type="text"
        name="nickName"
        placeholder="用户昵称"
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
          注册
        </van-button>
      </div>
    </van-form>
    <p class="reg-reset">
      <span style="margin-right:0.08rem" @click="goLogin">有账号？去登陆</span>
    </p>
  </div>
</template>

<script>
import { reg } from "../services/reg";
import { load } from "../services/upload";
import { Toast } from "vant";
export default {
  data() {
    return {
      password: "",
      userName: "",
      nickName: "",
      isShow: false,
      avatar: "",
      imgUrl: "",
      filelist: [],
    };
  },
  methods: {
    goLogin() {
      this.$router.push({ name: "login" });
    },
    onSubmit(values) {
      let reg0 = /^[0-9]{6,7}$/;
      let reg1 = /^[a-z0-9A-Z]{3,6}$/;
      console.log(values);
      values.avatar = this.imgUrl;
      let flag = reg0.test(values.userName);

      let flat = reg1.test(values.password);
      console.log(flag);
      console.log(flat);
      if (flag && flat && values.nickName) {
        this.isShow = false;
        reg(values).then((res) => {
          console.log(res);
          if (res.code == "success") {
            Toast.success("注册成功,跳转至登录界面");
            this.$router.push({ name: "login" });
          } else {
            Toast.fail("注册失败，用户名已存在");
          }
        });
      } else {
        Toast.fail("ID/用户名不正确");
      }
    },
    afterRead(file) {
      // console.log(file);
      const formData = new FormData();
      formData.append("file", file.file);
      load(formData).then((res) => {
        console.log(res);
        this.imgUrl = res.info;
      });
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
.app h1 {
  font-size: 0.3rem;
  font-weight: 300;
  text-align: center;
  margin-top: 0.35rem;
}
.files {
  margin-top: 0.3rem;
  margin-left: 1.47rem;
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
