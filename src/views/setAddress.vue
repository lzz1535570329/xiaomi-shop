<template>
  <div class="box0">
    <van-nav-bar
      :fixed="true"
      title="个人中心"
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
    <van-cell-group style="margin-top:0.46rem">
      <van-cell title="地址管理" is-link class="cell" to="address" />
      <van-cell title="经营证照" is-link class="cell" />
      <van-cell title="协议规则" is-link class="cell" />
      <van-cell title="小米商城用户协议" is-link class="cell" />
      <van-cell title="小米商城隐私政策" is-link class="cell" />
      <van-cell title="小米账号使用协议" is-link class="cell" />
      <van-cell title="小米账号隐私政策" is-link class="cell" />
    </van-cell-group>
    <van-button type="primary" block class="footer" @click="logInfo"
      >退出账号
    </van-button>
  </div>
</template>

<script>
import { removeToken } from "../utils/auth";
import { Dialog } from "vant";
export default {
  data() {
    return { isShow: true };
  },
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
  methods: {
    onClickLeft() {
      this.$router.push({ name: "user" });
    },
    logInfo() {
      Dialog.confirm({
        title: "确认退出账号",
      })
        .then(() => {
          console.log(123);
          removeToken();
          this.$router.push({ name: "tuijian" });
        })
        .catch(() => {
          // on cancel
        });
    },
  },
};
</script>

<style>
.box0 {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  background: #fff;
}
.footer {
  width: 100%;
  height: 0.5rem;
  background: #f2f2f2;
  color: #3c3c3c;
  position: fixed;
  bottom: 0;
  left: 0;
  border: 0;
  font-size: 0.16rem;
}
</style>
