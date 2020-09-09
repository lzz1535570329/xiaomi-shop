<template>
  <div class="box0">
    <van-nav-bar
      :fixed="true"
      title="新增地址"
      @click-left="onClickLeft"
      style="color:#80080;background:#f2f2f2"
    >
      <template #left>
        <span
          class="iconfont icon-right-angle"
          style="font-size:0.22rem;color:#a1a1a1"
        ></span>
      </template>
    </van-nav-bar>
    <!-- 新增地址 -->
    <div style="margin-top:0.46rem">
      <van-cell-group>
        <!-- 输入任意文本 -->
        <van-field v-model="receiver" label="收货人：" placeholder="真实姓名" />
        <van-field
          v-model="mobile"
          type="tel"
          label="手机号码："
          placeholder="手机号"
        />
        <van-field v-model="regions" type="text" label="所在地区：" />
        <van-field
          v-model="address"
          type="text"
          label="详细地址："
          placeholder="详细地址"
        />
        <van-cell title="设置为默认地址">
          <template>
            <van-checkbox v-model="checked" style="float:right"></van-checkbox>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <van-button
      class="footer"
      style="background: #ff6700;color: #fff;display:block"
      @click="save"
      >保存地址
    </van-button>
  </div>
</template>

<script>
import { Toast } from "vant";
import { addAddressData } from "../services/addAddress";
export default {
  data() {
    return {
      regions: "河南省-郑州市-二七区",
      mobile: "",
      receiver: "",
      address: "航海路1290号",
      checked: false,
      list: [],
      index: "",
    };
  },
  methods: {
    save() {
      // console.log(this.checked);
      addAddressData({
        receiver: this.receiver,
        mobile: this.mobile,
        address: this.address,
        regions: this.regions,
        isDefault: this.checked,
      }).then((res) => {
        // console.log(res);
        if (res.code == "success") {
          Toast.success("添加地址成功");
          setTimeout(() => {
            this.$router.push({ name: "address" });
          }, 500);
        }
      });
    },
    onClickLeft() {
      history.go(-1);
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

  position: fixed;
  bottom: 0;
  left: 0;
  border: 0;
  font-size: 0.16rem;
}
.addheader {
  width: 95%;
  height: 0.4rem;
  margin: 0 auto;
  border-bottom: 1px solid #f6f6f6;
}
.addheader p {
  float: left;
  line-height: 0.4rem;
  font-size: 0.14rem;
}
.addfooter {
  width: 95%;
  height: 0.6rem;
  margin: 0 auto;
}
.addfooter p {
  font-size: 0.13rem;
  color: #3c3c3c;
}
</style>
