<template>
  <div id="app">
    <!-- <keep-alive> -->
    <router-view class="main" />
    <!-- </keep-alive> -->
    <van-tabbar :fixed="false" v-model="active" active-color="#ff7500" route>
      <van-tabbar-item icon="wap-home" :to="{ name: 'tuijian' }"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="search" :to="{ name: 'list' }"
        >分类</van-tabbar-item
      >
      <van-tabbar-item icon="shopping-cart" :to="{ name: 'cart' }" :badge="0"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="friends" :to="{ name: 'user' }"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      a: 0,
    };
  },
};
</script>
<style>
html {
  font-size: 26.666666vw;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #f2f2f2;
}
#app {
  display: flex;
  flex-direction: column;
  position: relative;
}
#app .main {
  /* flex: 1; */
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
