<template>
  <div>
    <div class="header">
      <img src="../assets/xiaomi.png" alt="" class="img-1" />
      <div class="txt">
        <img src="../assets/搜索.png" alt="" />
        <p>搜索商品名称</p>
      </div>
      <img src="../assets/wode.png" alt="" class="img-2" />
    </div>
    <div class="nav-list">
      <ul>
        <li @click="colorChange(0)" style="border-bottom:4px solid orange">
          <router-link class="ft" :to="{ name: 'tuijian' }" res="hh"
            >推荐</router-link
          >
        </li>
        <li @click="colorChange(1)">
          <router-link class="ft" :to="{ name: 'phone' }" res="hh"
            >手机</router-link
          >
        </li>
        <li @click="colorChange(2)">
          <router-link class="ft" :to="{ name: 'zhineng' }">智能</router-link>
        </li>
        <li @click="colorChange(3)">
          <router-link class="ft" :to="{ name: 'phone' }">电视</router-link>
        </li>
        <li @click="colorChange(4)">
          <router-link class="ft" :to="{ name: 'zhineng' }">笔记本</router-link>
        </li>
        <li @click="colorChange(5)">
          <router-link class="ft" :to="{ name: 'phone' }">家电</router-link>
        </li>
        <li @click="colorChange(6)">
          <router-link class="ft" :to="{ name: 'zhineng' }"
            >生活周边</router-link
          >
        </li>
      </ul>
      <div class="xiala">
        <img src="../assets/大于号.png" alt="" />
      </div>
    </div>
    <router-view class="main" />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return { arr: [], brr: [] };
  },
  methods: {
    colorChange(a) {
      this.arr = document.querySelectorAll("li");
      this.brr = document.querySelectorAll(".ft");
      this.arr.forEach((v) => {
        v.style.borderBottom = "none";
      });
      this.brr.forEach((v) => {
        v.style.color = "#747474";
      });
      this.arr[a].style.borderBottom = "4px solid orange";
      this.brr[a].style.color = "orange";
    },
  },
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 0.45rem;
  background: #f2f2f2;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
.header > img {
  width: 0.25rem;
  float: left;
  margin: 0.07rem 0.13rem 0;
}
.header .txt {
  width: 2.7rem;
  height: 0.3rem;
  float: left;
  background: #fff;
  margin-top: 0.07rem;
}
.header .txt img {
  height: 0.2rem;
  float: left;
  margin-left: 0.1rem;
  margin-top: 0.05rem;
}
.header .txt p {
  float: left;
  font-size: 16px;
  color: #a1a1a1;
  line-height: 0.3rem;
  margin-left: 0.1rem;
}
.nav-list {
  width: 100%;
  height: 0.3rem;
  background: #f2f2f2;
  position: fixed;
  top: 0.4rem;
  left: 0;
  z-index: 2;
  overflow: hidden;
}
.nav-list ul {
  width: 3.35rem;
  height: 0.3rem;
  float: left;
  display: flex;
  align-items: center;
  overflow-x: auto;
}
.nav-list ul li {
  float: left;
  flex-shrink: 0;
  margin: 0 0.13rem;
}
.nav-list ul li .ft {
  color: #747474;
  font-size: 0.14rem;
  line-height: 0.3rem;
}
ul::-webkit-scrollbar {
  display: none;
}
.main {
  margin-top: 0.35rem;
}
.nav-list .xiala {
  width: 0.4rem;
  height: 0.3rem;
  float: right;
}
.nav-list .xiala img {
  width: 0.14rem;
  margin-top: 0.09rem;
  margin-left: 0.14rem;
}
.nav-list ul li:visited {
  border-bottom: 0.02rem solid orange;
}
</style>
