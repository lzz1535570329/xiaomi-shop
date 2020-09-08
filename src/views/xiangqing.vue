<template>
  <div class="info">
    <van-nav-bar
      :fixed="true"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      class="op"
    />
    <div v-for="item in info" :key="item._id" class="product-info">
      <div class="item">
        <img :src="item.coverImg | dalImg" alt="" />
      </div>
      <div class="price">
        <span class="po">￥</span><span class="pt">{{ item.price }}</span>
      </div>
      <div class="name">
        <p>{{ item.name }}</p>
      </div>
      <div class="des">
        <p>「买赠十周年纪念帆布包」</p>
        <p>骁龙865旗舰平台，双模5G，用久了也不卡</p>
        <p>向往的生活同款手机，1亿像素8K电影相机</p>
        <p>对称式立体声，有声、有势，一听即知</p>
      </div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon
          icon="cart-o"
          text="购物车"
          @click="onClickIcon()"
        />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button
          type="danger"
          text="加入购物车"
          @click="onClickButton(item._id)"
        />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import { everyInfo } from "../services/everyInfo";
import { addCart } from "../services/addcarts";
import { Toast } from "vant";
export default {
  data() {
    return { id: "", info: [] };
  },
  created() {
    // let a = location.search;
    this.id = this.$route.query.id;
    console.log(this.id);
    this.Info(this.id);
  },
  methods: {
    async Info(a) {
      this.info = [];
      const res = await everyInfo(a);
      this.info.push(res);
    },
    onClickIcon() {
      Toast.success("进入购物车");
      setTimeout(() => {
        this.$router.push({ name: "cart" });
      }, 800);
    },
    onClickButton(id) {
      addCart(id).then((res) => console.log(res));
      Toast.success("加入购物车成功");
    },
    onClickLeft() {
      history.go(-1);
    },
  },
};
</script>

<style scoped>
.info {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
}
.op {
  background: rgba(255, 255, 255, 0.3);
}
.product-info {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.item {
  width: 100%;
  height: 4.12rem;
}
.item img {
  width: 100%;
  height: 100%;
}
.price {
  width: 100%;
  height: 0.3rem;
  color: #ff6700;
  font-size: 10px;
  font-weight: 600;
  margin-top: 0.08rem;
  margin-left: 0.12rem;
  overflow: hidden;
}
.price .po {
  display: block;
  float: left;
  font-size: 10px;
}
.price .pt {
  display: block;
  float: left;
  font-size: 26px;
  margin-left: 0.05rem;
}
.name {
  width: 100%;
  height: 0.24rem;
  padding: 0 0 0 0.12rem;
  margin-top: 0.1rem;
}
.name p {
  font-size: 0.16rem;
  font-weight: 600;
}
.des {
  margin-top: 0.08rem;
  margin-left: 0.12rem;
}
.des p {
  line-height: 20px;
}
</style>
