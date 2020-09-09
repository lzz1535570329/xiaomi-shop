<template>
  <div class="box0">
    <van-nav-bar
      :fixed="true"
      title="收货地址"
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
    <!-- 地址信息 -->
    <div style="margin-top:0.51rem;width:100%;min-height:2rem;0verflow:hidden">
      <div
        style="width:90%;height:1rem;margin:0.08rem auto 0;border:1px solid #f6f6f6"
        v-for="item in list"
        :key="item._id"
      >
        <div class="addheader">
          <p style="color:orange">{{ item.receiver }}</p>
          <p style="margin-left:0.3rem">
            {{ item.mobile }}
          </p>
          <p style="color:#999;float:right" @click="delAddress(item._id)">
            删除
          </p>
        </div>
        <div class="addfooter" @click="edit(item._id)">
          <p style="margin-top:0.08rem">{{ item.regions }}</p>
          <p>{{ item.address }}</p>
        </div>
      </div>
      <div style="width:100%;height:0.5rem"></div>
    </div>
    <button
      type="button"
      class="footer"
      style="background: #ff6700;color: #fff;display:block"
      @click="add"
    >
      新建地址
    </button>
  </div>
</template>

<script>
import { Toast } from "vant";
import { getAddressData, delAddressData } from "../services/addAddress";
export default {
  data() {
    return {
      regions: "河南省-郑州市-二七区",
      mobile: "",
      receiver: "",
      address: "航海路1290号",
      checked: false,
      list: [],
      aslists: [],
      index: "",
    };
  },
  created() {
    this.getAddress();
  },
  methods: {
    edit(id) {
      this.$router.push({ name: "editAddress", query: { id } });
    },
    add() {
      this.$router.push({ name: "addAddress" });
    },
    onClickLeft() {
      this.$router.push({ name: "setAddress" });
    },
    delAddress(id) {
      delAddressData(id).then((res) => {
        // console.log(res);
        this.index = this.list.findIndex((v) => v._id == res._id);
        this.list.splice(this.index, 1);
      });
    },
    getAddress() {
      getAddressData().then((res) => {
        this.aslists = res.addresses;
        this.list = this.aslists;
        // console.log(this.aslists);
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
  position: relative;
}
.addfooter p {
  font-size: 0.13rem;
  color: #3c3c3c;
}
.addfooter::after {
  content: "";
  position: absolute;
  right: 0.1rem;
  top: 35%;
  width: 0.07rem;
  height: 0.07rem;
  color: #a1a1a1;
  border-left: 1px solid currentColor;
  border-top: 1px solid currentColor;
  transform: translate3d(0, -50%, 0) rotate(135deg);
}
</style>
