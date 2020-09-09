<template>
  <div class="box0">
    <van-nav-bar
      :fixed="true"
      title="收获地址"
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
    <div v-if="isShow"></div>
    <!-- 新增地址 -->
    <div v-if="isEnd" style="margin-top:0.46rem">
      <van-address-edit
        :area-list="areaList"
        show-postal
        :show-delete="true"
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </div>
    <button
      v-if="isShow"
      type="button"
      class="footer"
      style="background: #ff6700;color: #fff;display:block"
      @click="add"
    >
      新建地址
    </button>
    <van-button
      v-if="isEnd"
      class="footer"
      style="background: #ff6700;color: #fff;display:block"
      @click="save"
      >保存地址
    </van-button>
  </div>
</template>

<script>
export default {
  data() {
    return { isShow: true, areaList: [], searchResult: [], isEnd: false };
  },
  methods: {
    add() {
      this.isShow = false;
      this.isEnd = true;
    },
    save() {
      this.isEnd = false;
      this.isShow = true;
    },
    onClickLeft() {
      history.go(-1);
    },
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
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
</style>
