<template>
  <!-- <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel> -->

  <el-carousel
    trigger="click"
    :autoplay="false"
    type="card"
    height="400px"
    width="100%"
    ref="carousel"
  >
    <el-carousel-item v-for="item in images" :key="item.name" :name="item.name">
      <dl>
        <dt>
          <img src="../../../assets/lun1.png" />
        </dt>
        <dd>
          <p class="p">主机遥控系统VIR20-S</p>
          <p class="p1">
            用于在驾驶室和集控室远距离控制船舶动力装置按操纵手柄命令自动顺序执行，一种性能优良的主机遥控，具有完善的状态监测和报警功能。
          </p>
          <button>查看详情</button>
        </dd>
      </dl>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          name: "bigScreen01",
          url: "../../../assets/lun.jpg",
        },
        {
          name: "bigScreen02",
          url: "../../../assets/lun.jpg",
        },
        {
          name: "bigScreen03",
          url: "../../../assets/lun.jpg",
        },
        {
          name: "bigScreen05",
          url: "../../../assets/lun.jpg",
        },
        {
          name: "bigScreen06",
          url: "../../../assets/lun.jpg",
        },
        {
          name: "bigScreen07",
          url: "../../../assets/lun.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.el-carousel--horizontal {
  width: 100%;
  margin-top: 80px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #fff;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #fff;
}
dl {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 250px;
  dt {
    width: 100%;
    height: 190px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 350px;
      height: 159px;
    }
  }
  dd {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .p {
      text-align: center;
      height: 28px;
      font-size: 20px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #666666;
      line-height: 28px;
    }
    .p1 {
      height: 60px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      line-height: 20px;
      margin-top: 5px;
    }
    button {
      width: 120px;
      height: 30px;
      background: #4685ff;
      border: 0;
      border-radius: 4px;
      font-size: 14px;
      border: none;
      outline: none;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #ffffff;
    }
  }
}
</style>