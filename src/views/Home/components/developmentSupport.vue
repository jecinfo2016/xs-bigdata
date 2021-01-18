<template>
  <div class="block">
    <div class="develop">
      <div class="develop-title">
        <p>SUPPORT</p>
        <span>开发支持</span>
        <div class="xian"></div>
      </div>
      <p>包罗万象,支持多格式数据提交。包罗万象,支持多格式数据提交</p>
      <div class="develop-dl">
        <div>
          <dl>
            <dt><img src="../../../assets/w1.png" alt="" /></dt>
            <dd>
              <p>开发支持一</p>
              <span
                >漏洞扫描和安全众测。可获得体系化的安全检测、安全防御服务（服务器安全、web应用防火墙等）。</span
              >
            </dd>
          </dl>
          <dl>
            <dt><img src="../../../assets/w2.png" alt="" /></dt>
            <dd>
              <p>开发支持二</p>
              <span
                >漏洞扫描和安全众测。可获得体系化的安全检测、安全防御服务（服务器安全、web应用防火墙等）。</span
              >
            </dd>
          </dl>
          <dl>
            <dt><img src="../../../assets/w3.png" alt="" /></dt>
            <dd>
              <p>开发支持三</p>
              <span
                >漏洞扫描和安全众测。可获得体系化的安全检测、安全防御服务（服务器安全、web应用防火墙等）。</span
              >
            </dd>
          </dl>
        </div>
        <div>
          <dl>
            <dt><img src="../../../assets/w4.png" alt="" /></dt>
            <dd>
              <p>开发支持四</p>
              <span
                >漏洞扫描和安全众测。可获得体系化的安全检测、安全防御服务（服务器安全、web应用防火墙等）。</span
              >
            </dd>
          </dl>
          <dl>
            <dt><img src="../../../assets/w5.png" alt="" /></dt>
            <dd>
              <p>开发支持五</p>
              <span
                >漏洞扫描和安全众测。可获得体系化的安全检测、安全防御服务（服务器安全、web应用防火墙等）。</span
              >
            </dd>
          </dl>
          <dl>
            <dt><img src="../../../assets/w6.png" alt="" /></dt>
            <dd>
              <p>开发支持六</p>
              <span
                >漏洞扫描和安全众测。可获得体系化的安全检测、安全防御服务（服务器安全、web应用防火墙等）。</span
              >
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.develop {
  width: 100%;
  height: 920px;
  display: flex;
  flex-direction: column;
  background: #f3f6f9;
  align-items: center;
  .develop-title {
    position: relative;
    width: 288px;
    height: 84px;
    margin-top: 44px;
    p {
      font-size: 60px;
      line-height: 84px;
      text-align: center;
      color: #fff;
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
  .develop-dl {
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
      width: 300px;
      height: 300px;
      margin: 15px 10px;
      float: left;
      background: #fff;

      dt {
        width: 100%;
        height: 180px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 260px;
          height: 132px;
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
          text-indent: 25px;
        }
        span {
          display: block;
          padding: 0 2em;
          margin-top: 6px;
          width: 100%;
          height: 60px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666;
          line-height: 20px;
        }
      }
    }
  }
}
</style>