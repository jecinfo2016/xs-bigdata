<template>
  <div class="block">
    <el-carousel height="424px">
      <el-carousel-item v-for="item in 4" :key="item">
        <!-- <img src="../../../assets/bk.png" alt="" /> -->
        <!-- <h3 class="small">{{ item }}</h3> -->
        <div class="small">
          <p>开放商业思维 联结企业价值</p>
          <span
            >Open mind and innovation thinking, cooperation create more
            value.</span
          >
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="advantage">
      <div class="advantage-title">
        <p>ADVANTAGE</p>
        <span>我们的优势</span>
        <div class="xian"></div>
      </div>
      <p>包罗万象,支持多格式数据提交。包罗万象,支持多格式数据提交</p>
      <div class="advantage-dl">
        <dl>
          <dt><img src="../../../assets/10.png" alt="" /></dt>
          <dd>
            <p>开放</p>
            <span>海纳百川，接受多行业优质内容</span>
          </dd>
        </dl>
        <dl>
          <dt><img src="../../../assets/11.png" alt="" /></dt>
          <dd>
            <p>多样</p>
            <span>包罗万象，支持多格式数据提交</span>
          </dd>
        </dl>
        <dl>
          <dt><img src="../../../assets/12.png" alt="" /></dt>
          <dd>
            <p>优质</p>
            <span>优胜劣汰，策略实现全自动阈值调控</span>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.small {
  width: 100%;
  height: 100%;
  background: url("../../../assets/bk.png");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    height: 84px;
    font-size: 60px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 84px;
  }
  span {
    height: 28px;
    font-size: 20px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #eee;
    line-height: 28px;
  }
}
.advantage {
  width: 100%;
  height: 426px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .advantage-title {
    position: relative;
    width: 370px;
    height: 84px;
    margin-top: 44px;
    p {
      font-size: 60px;
      line-height: 84px;
      text-align: center;
      color: #f2f2f2;
    }
    span {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #333333;
    }
    div {
      position: absolute;
      top: 65px;
      left: 135px;
      width: 100px;
      height: 3px;
      background: #4685ff;
      border-radius: 2px;
    }
  }
  > p {
    width: 100%;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
    line-height: 20px;
    text-align: center;
  }
  .advantage-dl {
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    dl {
      width: 200px;
      height: 156px;
      margin: 0 70px;
      dt {
        width: 100%;
        height: 104px;
        display: flex;
        justify-content: center;
        img {
          width: auto;
          height: 100%;
        }
      }
      dd {
        width: 100%;
        padding: 0;
        margin: 0;
        p {
          width: 100%;
          height: 28px;
          font-size: 20px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #666666;
          line-height: 28px;
          text-align: center;
        }
        span {
          display: block;
          margin-top: 6px;
          width: 100%;
          height: 20px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666;
          line-height: 20px;
          text-align: center;
        }
      }
    }
  }
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>