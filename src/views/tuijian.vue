<template>
  <div id="box">
    <van-swipe
      class="my-swipe"
      indicator-color="white"
      :loop="true"
      :autoplay="2000"
    >
      <van-swipe-item
        ><img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b9b4c018d186fe33cd72a0a11e1c5391.jpg?thumb=1&w=720&h=360"
          alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d8a4f1364467a62af0ea7a0e686fbdc.jpg?thumb=1&w=720&h=360"
          alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/222a7c88144d66f53a62a988aada9d37.jpg?thumb=1&w=720&h=360"
          alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/386fc144cb48e644e8f59af7a35810b2.jpg?thumb=1&w=720&h=360"
          alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03ff022009a635262d53451d532518ed.jpg?thumb=1&w=720&h=360"
          alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/14879bffb504952d1d92b20d6e5f8e26.jpeg?thumb=1&w=720&h=360"
          alt=""
      /></van-swipe-item>
    </van-swipe>
    <div class="table">
      <table>
        <tr>
          <td>
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?w=216&h=228&bg=FDF1E6"
              alt=""
            />
          </td>
          <td>
            <img
              src="https://i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp?w=216&h=228&bg=EAF6FD"
              alt=""
            />
          </td>
          <td>
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d436f30612651fffe1d6c5aaa3fdb816.png?f=webp&w=216&h=228&bg=FFFFFF"
              alt=""
            />
          </td>
          <td>
            <img
              src="https://i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp?w=216&h=228&bg=FDEFDE"
              alt=""
            />
          </td>
          <td>
            <img
              src="https://i8.mifile.cn/v1/a1/7dbcbf87-6a58-adb6-2f3f-bb3dae3e9c80.webp?w=216&h=228&bg=E5F4FC"
              alt=""
            />
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/64f3988b6216e4c1ab62a7f50df3e816.png?f=webp&w=216&h=228&bg=FFFFFF"
              alt=""
            />
          </td>
          <td>
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?w=216&h=228&bg=FCEAEA"
              alt=""
            />
          </td>
          <td>
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?w=216&h=228&bg=FDF5E5"
              alt=""
            />
          </td>
          <td>
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9425031cdd7af22d9a23a5ae16d1f57c.jpg?f=webp&w=216&h=228&bg=FFFFFF"
              alt=""
            />
          </td>
          <td>
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?w=216&h=228&bg=FDEDE8"
              alt=""
            />
          </td>
        </tr>
      </table>
    </div>
    <div class="k30">
      <div class="fls">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d692a30ee3d586c4274575eec255d3c5.jpg?f=webp&w=537&h=762&bg=C1DDE9"
          alt=""
        />
      </div>
      <div class="frs">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/827a686678f39b1bbdc99c6e6b6a13c8.jpg?f=webp&w=537&h=378&bg=DAECFA"
          alt=""
        />
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/267e988a99b5cf4e960747e8aa5fa831.jpg?f=webp&w=537&h=378&bg=EDFBFC"
          alt=""
        />
      </div>
    </div>
    <div class="mi10-search">
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/189acdf7e9b807cfc22d394df87c1958.jpg?f=webp&w=1080&h=420&bg=FEFEFE"
        alt=""
      />
    </div>
    <div class="every-sel">
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0c08e3519b4c98ae53734a405143ffee.jpg?f=webp&w=1080&h=660&bg=FFFFFF"
        alt=""
      />
    </div>
    <div style="width:100%;min-height:2rem;background:#fff;overflow:hidden">
      <div
        v-for="item in datas"
        :key="item._id"
        class="data-info"
        @click="route(item._id)"
      >
        <img :src="item.coverImg | dalImg" alt="" />
        <h3 style="text-align:center;margin-top:0.05rem;font-size:15px">
          {{ item.name }}
        </h3>
        <p style="text-align:center;margin-top:0.05rem;color:#a1a1a1">
          {{ item.descriptions }}
        </p>
        <p
          style="color:#ea625b;text-align:center;margin-top:0.05rem;font-size:15px"
        >
          ￥{{ item.price }}
        </p>
        <button class="btn">立即购买</button>
      </div>
      <div
        style="width:100%;height:0.5rem;float:left;border-top:1px solid #a1a1a1"
      >
        <p
          style="text-align:center;line-height:0.5rem;font-size:0.15rem;color:#00000099"
        >
          更多小米手机产品&nbsp;&gt;
        </p>
      </div>
    </div>
    <div class="every-sel">
      <img
        src="https://i8.mifile.cn/v1/a1/34cc562e-8dd3-61e9-0209-395edb9237a1.webp?w=1080&h=660&bg=B2C5D1"
        alt=""
      />
    </div>
    <div style="width:100%;min-height:2rem;background:#fff;overflow:hidden">
      <div v-for="item in datas" :key="item._id" class="data-info">
        <img :src="item.coverImg | dalImg" alt="" />
        <h3 style="text-align:center;margin-top:0.05rem;font-size:15px">
          {{ item.name }}
        </h3>
        <p style="text-align:center;margin-top:0.05rem;color:#a1a1a1">
          {{ item.descriptions }}
        </p>
        <p
          style="color:#ea625b;text-align:center;margin-top:0.05rem;font-size:15px"
        >
          ￥{{ item.price }}
        </p>
        <button class="btn">立即购买</button>
      </div>
      <div
        style="width:100%;height:0.5rem;float:left;border-top:1px solid #a1a1a1"
      >
        <p
          style="text-align:center;line-height:0.5rem;font-size:0.15rem;color:#00000099"
        >
          更多小米电视产品&nbsp;&gt;
        </p>
      </div>
    </div>
    <div class="xingzuo12">
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/067047e99bc9517e85bbc5d2d854779a.jpg?f=webp&w=1080&h=420&bg=241941"
        alt=""
      />
    </div>
    <div class="every-sel">
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c226d76d6036e165523338e63f6d2da4.jpg?f=webp&w=1080&h=660&bg=F9FDFE"
        alt=""
      />
    </div>
    <div style="width:100%;min-height:2rem;background:#fff;overflow:hidden">
      <div v-for="item in com" :key="item._id" class="data-info">
        <img :src="item.coverImg | dalImg" alt="" />
        <h3 style="text-align:center;margin-top:0.05rem;font-size:15px">
          {{ item.name }}
        </h3>
        <p style="text-align:center;margin-top:0.05rem;color:#a1a1a1">
          {{ item.descriptions }}
        </p>
        <p
          style="color:#ea625b;text-align:center;margin-top:0.05rem;font-size:15px"
        >
          ￥{{ item.price }}
        </p>
        <button class="btn">立即购买</button>
      </div>
      <div
        style="width:100%;height:0.5rem;float:left;border-top:1px solid #a1a1a1"
      >
        <p
          style="text-align:center;line-height:0.5rem;font-size:0.15rem;color:#00000099"
        >
          更多小米笔记本产品&nbsp;&gt;
        </p>
      </div>
    </div>
    <div class="xingzuo12">
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85ea26a99c704861af8e29bf7f249fed.jpg?f=webp&w=1080&h=420&bg=E5E9EA"
        alt=""
      />
    </div>
    <div class="every-sel">
      <img
        src="https://i8.mifile.cn/v1/a1/3466df89-e534-a68c-6504-2b6e0a704307.webp?w=1080&h=660&bg=E9EDF1"
        alt=""
      />
    </div>
    <div style="width:100%;min-height:2rem;background:#fff;overflow:hidden">
      <div v-for="item in datas" :key="item._id" class="data-info">
        <img :src="item.coverImg | dalImg" alt="" />
        <h3 style="margin-top:0.05rem;font-size:15px;text-indent:0.1rem">
          {{ item.name }}
        </h3>
        <p style="margin-top:0.05rem;color:#a1a1a1;text-indent:0.1rem">
          {{ item.descriptions }}
        </p>
        <p
          style="color:#ea625b;margin-top:0.05rem;font-size:15px;text-indent:0.1rem"
        >
          ￥{{ item.price }}
        </p>
      </div>
      <div
        style="width:100%;height:0.5rem;float:left;border-top:1px solid #a1a1a1"
      >
        <p
          style="text-align:center;line-height:0.5rem;font-size:0.15rem;color:#00000099"
        >
          更多米家家电产品&nbsp;&gt;
        </p>
      </div>
    </div>
    <div class="xingzuo12">
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a56394373382e7d98a395b25c709cfcb.jpg?w=1080&h=420&bg=D2D4E9"
        alt=""
      />
    </div>
    <div class="every-sel">
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/df9f0ec1b502e3f7ca36779c7596c7c4.jpg?f=webp&w=1080&h=660&bg=FFFFFF"
        alt=""
      />
    </div>
    <div class="mi-zhineng">
      <div class="mi-zhineng-one" style="margin-top:0.05rem">
        <div class="mi-zhineng-fl">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360"
            alt=""
          />
        </div>
        <div class="mi-zhineng-fl mi-zhineng-fr">
          <h3 style="font-size:15px;margin-top:0.33rem;margin-left:0.16rem">
            米家直流变频落地扇1X
          </h3>
          <p style="color:#a1a1a1;margin-left:0.16rem">
            模拟自然风算法&nbsp;支持AI语音
          </p>
          <p
            style="color:#ea625b;font-size:15px;;margin-left:0.16rem;margin-top:0.1rem"
          >
            ￥279
          </p>
        </div>
      </div>
      <div class="mi-zhineng-two">
        <div class="mi-zhineng-fl mi-zhineng-fr">
          <h3 style="font-size:15px;margin-top:0.33rem;margin-left:0.16rem">
            小爱音箱万能遥控板
          </h3>
          <p style="color:#a1a1a1;margin-left:0.16rem">传桶家电秒变智能</p>
          <p
            style="color:#ea625b;font-size:15px;margin-left:0.16rem;margin-top:0.1rem"
          >
            ￥149
          </p>
        </div>
        <div class="mi-zhineng-fl">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c33f008a86c151a1500d44d599351256.jpg?thumb=1&w=360&h=360"
            alt=""
          />
        </div>
      </div>
      <div class="mi-zhineng-three">
        <div class="mi-zhineng-fl mi-zhineng-fr">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/739c1321d2a05d48c0b8b86cd459c4d4.jpg?thumb=1&w=360&h=360"
            alt=""
          />
        </div>
        <div class="mi-zhineng-fl">
          <h3 style="font-size:15px;margin-top:0.33rem;margin-left:0.16rem">
            米家照片打印机
          </h3>
          <p style="color:#a1a1a1;margin-left:0.16rem">手机即拍即印</p>
          <p
            style="color:#ea625b;font-size:15px;margin-left:0.16rem;margin-top:0.1rem"
          >
            ￥499
          </p>
        </div>
      </div>
      <div
        style="width:100%;height:0.5rem;float:left;border-top:1px solid #a1a1a1"
      >
        <p
          style="text-align:center;line-height:0.5rem;font-size:0.15rem;color:#00000099"
        >
          更多米家智能产品&nbsp;&gt;
        </p>
      </div>
    </div>
    <div style="width:100%;min-height:2rem;margin:0.08rem 0;overflow:hidden">
      <div class="footer">
        <img
          src="https://i8.mifile.cn/v1/a1/46c44f3e-479d-a999-dd2d-98fb39b51e17.webp?w=537&h=720&bg=C0A491"
          alt=""
        />
      </div>
      <div class="footer a1">
        <img
          src="https://i8.mifile.cn/v1/a1/b79cb907-3ae4-2a35-6756-b243b386a95a.webp?w=537&h=720&bg=E8CFCB"
          alt=""
        />
      </div>
      <div class="footer">
        <img
          src="https://i8.mifile.cn/v1/a1/b883172b-5aa3-7855-678f-c615109ee0a7.webp?w=537&h=720&bg=878F9B"
          alt=""
        />
      </div>
      <div class="footer a1">
        <img
          src="https://i8.mifile.cn/v1/a1/8cfcd654-4af5-9ae6-c6cc-1ba9d28be8e8.webp?w=537&h=720&bg=9BB5C4"
          alt=""
        />
      </div>
      <div class="footer">
        <img
          src="https://i8.mifile.cn/v1/a1/52866372-7fe5-76c2-29a0-9ae32d07b8ff.webp?w=537&h=720&bg=D9D8C3"
          alt=""
        />
      </div>
      <div class="footer a1">
        <img
          src="https://i8.mifile.cn/v1/a1/ad91499a-59ab-adc3-8fd5-98aefc1c43b4.webp?w=537&h=720&bg=B5C5BE"
          alt=""
        />
      </div>
    </div>
    <div class="xingzuo12">
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4c4a11536a720ee0f1b516e53e4d868.jpg?f=webp&w=1080&h=420&bg=873FFA"
        alt=""
      />
    </div>
    <div
      style="width:100%;height:0.5rem;float:left;background:#fff;margin:0.08rem 0"
    >
      <p
        style="text-align:center;line-height:0.5rem;font-size:0.16rem;color:#b1b1b1;font-weight:500"
      >
        了 解 小 米
      </p>
    </div>
    <img src="../assets/回到顶部.png" alt="" id="img-1" v-show="isShow" />
  </div>
</template>

<script>
import { getProducts } from "../services/products";
export default {
  data() {
    return {
      datas: [],
      com: [],
      isShow: false,
    };
  },
  created() {
    this.phoneInfo();
  },
  methods: {
    async phoneInfo() {
      const res = await getProducts(1);
      console.log(res);
      this.datas = res.products.splice(0, 6);
      this.com = res.products.splice(0, 2);
      console.log(this.datas);
    },
    route(id) {
      this.$router.push({ name: "xiangqing", query: { id } });
    },
  },
};
</script>

<style>
.van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
.van-swipe-item img {
  width: 100%;
  height: 100%;
}
.table {
  background: #fff;
}
table {
  width: 100%;
  height: 1.6rem;
  border-spacing: 0;
}
table tr {
  width: 100%;
  height: 0.8rem;
}
table tr td {
  width: 20%;
  height: 100%;
}
table tr td img {
  width: 100%;
}
.mi10-search {
  margin-top: 0.08rem;
}
.k30 {
  width: 100%;
  height: 2.64rem;
  margin-top: 0.05rem;
  overflow: hidden;
}
.k30 .fls {
  float: left;
  width: 49.5%;
  height: 100%;
}
.k30 .frs {
  float: left;
  width: 49.5%;
  height: 100%;
}
.k30 .fl img {
  float: left;
  width: 100%;
  height: 100%;
}
.k30 .fr img {
  width: 100%;
  height: 50%;
}
.every-sel {
  width: 100%;
  height: 2.3rem;
  margin-top: 0.08rem;
}
.every-sel img {
  width: 100%;
  height: 100%;
}
.data-info {
  width: 1.8rem;
  height: 2.86rem;
  float: left;
  margin: 0.1rem 0.035rem;
}
.data-info img {
  width: 180px;
  height: 180px;
}
.data-info .btn {
  width: 1rem;
  height: 0.3rem;
  border: none;
  background: #ea625b;
  color: #fff;
  font-size: 14px;
  border-radius: 5px;
  margin-left: 0.45rem;
  margin-top: 0.05rem;
}
.xingzuo12 {
  width: 100%;
  height: 1.46rem;
  margin: 0.08rem 0 0 0;
}
.xingzuo12 img {
  width: 100%;
  height: 100%;
}
.mi-zhineng {
  width: 100%;
  min-height: 2rem;
  background: #fff;
  overflow: hidden;
}
.mi-zhineng-one,
.mi-zhineng-two,
.mi-zhineng-three {
  width: 100%;
  min-height: 1rem;
  overflow: hidden;
}
.mi-zhineng-fl {
  width: 50%;
  float: left;
}
.footer {
  width: 49.5%;
  height: 2.5rem;
  float: left;
}
.a1 {
  margin-left: 1%;
}
.footer img {
  width: 100%;
  height: 100%;
}
#img-1 {
  width: 0.36rem;
  height: 0.36rem;
  position: fixed;
  right: 0.25rem;
  bottom: 0.75rem;
  z-index: 2;
  opacity: 0.9;
}
</style>
