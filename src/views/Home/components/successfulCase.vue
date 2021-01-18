<template>
  <div class="block">
    <div class="support">
      <div class="support-title">
        <p>SUCCESS</p>
        <span>成功案例</span>
        <div class="xian"></div>
      </div>
      <p>包罗万象,支持多格式数据提交。包罗万象,支持多格式数据提交</p>
      <div class="support-dl">
        <div>
          <dl>
            <dt><img src="../../../assets/a1.png" alt="" /></dt>
            <dd>
              <p>智慧水务云平台</p>
              <span
                >连接物业、居民、政府、媒体和社区服务提供方，形成“互联网+社区”一站式解决方案，打造智慧社区健康生态</span
              >
            </dd>
          </dl>
          <dl>
            <dt><img src="../../../assets/a2.png" alt="" /></dt>
            <dd>
              <p>嘉兴市生态环境“云管嘉”</p>
              <span
                >连接物业、居民、政府、媒体和社区服务提供方，形成“互联网+社区”一站式解决方案，打造智慧社区健康生态</span
              >
            </dd>
          </dl>
        </div>
        <div>
          <dl>
            <dt><img src="../../../assets/a3.png" alt="" /></dt>
            <dd>
              <p>校园生态节水平台</p>
              <span
                >连接物业、居民、政府、媒体和社区服务提供方，形成“互联网+社区”一站式解决方案，打造智慧社区健康生态</span
              >
            </dd>
          </dl>
          <dl>
            <dt><img src="../../../assets/a4.png" alt="" /></dt>
            <dd>
              <p class="support-kan">查看全部案例</p>
              <img  class="support-img" src="../../../assets/dian.png" alt="" />
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.support {
  width: 100%;
  height: 842px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  align-items: center;
  .support-title {
    position: relative;
    width: 288px;
    height: 84px;
    margin-top: 44px;
    p {
      font-size: 60px;
      line-height: 84px;
      text-align: center;
      color: #f3f6f9;
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
      left: 93px;
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
  .support-dl {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    dl {
      width: 475px;
      height: 285px;
      margin: 5px;
      float: left;
      background: #fff;
      position: relative;
      dt {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
          height: 100%;
        }
      }
      dd {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100px;
        padding: 0;
        margin: 0;
        p {
          margin-top: 195px;
          width: 100%;
          height: 28px;
          font-size: 20px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #ffffff;
          line-height: 28px;
          text-indent: 20px;
        }
        span {
          display: block;
          padding: 0 20px;
          margin-top: 6px;
          height: 40px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 20px;
        }
        .support-kan{
            margin-top: 79px;
            text-align: center;
        }
        .support-img{
            width: 40px;
            height: 49px;
            margin-top: 48px;
            margin-left: 217px;
        }
      }
    }
  }
}
</style>