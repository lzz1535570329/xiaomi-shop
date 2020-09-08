<template>
  <div class="app">
    <van-nav-bar title="分类">
      <template #left  @click-left="onClickLeft">
        <van-icon name="arrow-left" size="28" color="#333333" />
      </template>
      <template #right  @click-right="onClickRight">
        <van-icon name="search" size="28" color="#333333" />
      </template>
    </van-nav-bar>
    <van-sidebar v-model="activeKey">
  <van-sidebar-item title="小米手机" />
  <van-sidebar-item title="Redmi手" />
  <van-sidebar-item title="标签名称" />
  <van-sidebar-item title="标签名称" />
  <van-sidebar-item title="标签名称" />
  <van-sidebar-item title="标签名称" />
  <van-sidebar-item title="标签名称" />
  <van-sidebar-item title="标签名称" />
  <van-sidebar-item title="标签名称" />
  <van-sidebar-item title="标签名称" />
  <van-sidebar-item title="标签名称" />
</van-sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 0,
    };
  },
   methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
  },
};
</script>

<style scoped>
.app {
  width: 100%;
  height: 100%;
}
</style>
