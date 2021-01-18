<template>
  <div class="bottomLog">
    <div class="bottom-top">
      <div class="Lowerleft">
        <p>
          <span>平台公告</span>
          <span>重要文档</span>
          <span>常见问题</span>
        </p>
        <div>
          <ul>
            <li>开放平台介绍</li>
            <li>最新改版公告</li>
            <li>平台规则</li>
          </ul>
          <ul>
            <li>ISV开发协议</li>
            <li>技术服务协议</li>
            <li>TAPD社区</li>
          </ul>
          <ul>
            <li>应用接入</li>
            <li>常见问题</li>
            <li>在线客服问答</li>
          </ul>
        </div>
      </div>
      <div class="Lowerright">
        <div>
          <img src="../../../assets/jkxx.png" alt="" />
          <span>嘉科信息</span>
        </div>
        <div>
          <img src="../../../assets/dsj.png" alt="" />
          <span>秀水大数据</span>
        </div>
      </div>
    </div>
    <div class="bottom-hr"></div>
    <div class="bottom-bottom">
      <div>
        <img src="../../../assets/weibo.png" alt="" />
        <img src="../../../assets/wechat.png" alt="" />
        <img src="../../../assets/twitter.png" alt="" />
        <span>关于我们</span>
        <span>返回旧版</span>
      </div>
      <div>&copy; 2020 嘉科信息科技有限公司</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.bottomLog {
  width: 100%;
  height: 260px;
  background: #2c2c2c;
  padding: 0 480px;
  // margin-top: 40px;
  display: flex;
  flex-direction: column;
}
.bottom-top {
  width: 100%;
  height: 200px;
  display: flex;
  .Lowerleft {
    width: 660px;
    height: 100%;
    > p {
      width: 100%;
      height: 62px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      span {
        flex: 1;
        display: block;
        text-indent: 17px;
      }
    }
    > div {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #b3b3b3;
      line-height: 20px;
      display: flex;
      ul {
        flex: 1;
        margin: 0;
        padding: 0;
        padding-left: 20px;
        padding-top: 19px;
        li {
          padding-top: 10px;
        }
      }
    }
  }
  .Lowerright {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    > div {
      margin-left: 50px;
      width: 90px;
      img {
        width: 90px;
        height: 90px;
      }
      span {
        display: block;
        text-align: center;

        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #b3b3b3;
        margin-top: 17px;
      }
    }
  }
}
.bottom-hr {
  width: 100%;
  height: 1px;
  background: #b3b3b3;
  opacity: 0.4;
}
.bottom-bottom {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 18px;
    height: 18px;
    margin-left: 8px;
  }
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #b3b3b3;
  > div {
    span {
      margin-left: 15px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #b3b3b3;
    }
  }
}
</style>