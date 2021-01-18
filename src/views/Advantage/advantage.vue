<template>
  <div class="advantage-container">
    <div class="banner">
      <p>我们的优势主标题</p>
      <span>包罗万象，支持多格式数据提交</span>
    </div>
    <div class="advantage-box">
      <div class="appay-box">
        <div class="appay-dl">
          <dl>
            <dt><img src="../../assets/10.png" alt="" /></dt>
            <dd>
              <p>开放</p>
              <span>海纳百川，接受多行业优质内容</span>
            </dd>
          </dl>
          <dl>
            <dt><img src="../../assets/11.png" alt="" /></dt>
            <dd>
              <p>多样</p>
              <span>包罗万象，支持多格式数据提交</span>
            </dd>
          </dl>
          <dl>
            <dt><img src="../../assets/12.png" alt="" /></dt>
            <dd>
              <p>优质</p>
              <span>优胜劣汰，策略实现全自动阈值调控</span>
            </dd>
          </dl>
        </div>
      </div>
      <div class="advantage-txt">
        <p>技术世界领先</p>
        <span
          >采用领先国际的流式端到端语音语言一体化建模方法，近场中文普通话识别准确率达98%。</span
        >
        <p>服务稳定高效</p>
        <span
          >企业级稳定服务保障，专有集群承载大流量并发高效灵活，以及99.9%服务稳定性保障。</span
        >
        <p>模型自助优化</p>
        <span
          >中文输入法模型可在语音自训练平台上零代码自助训练，上传文本语料即可有效提升业务词汇的识别准确率5-25%。</span
        >
      </div>
    </div>
    <bottom-log />
  </div>
</template>

<script>
import BottomLog from "../Home/components/bottomLog";

export default {
  components: { BottomLog },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.advantage-container {
  .advantage-box {
    width: 100%;
    height: 740px;
    padding: 0 480px;
    background: #f3f6f9;
    display: flex;
    flex-direction: column;
    .advantage-txt {
      height: 340px;
      background: #fff;
      padding: 0 47px;
      p {
        height: 22px;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 600;
        color: #666666;
        line-height: 22px;
        margin-top: 40px;
      }
      span {
        margin-top: 8px;
        height: 22px;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        line-height: 22px;
      }
    }
    .appay-box {
      width: 100%;
      height: 250px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .appay-dl {
        width: 100%;
        flex: 250px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        dl {
          flex: 1;
          padding: 0;
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
            display: flex;
            flex-direction: column;
            justify-content: center;
            p {
              width: 100%;
              height: 20px;
              font-size: 20px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #333333;
              line-height: 20px;
              text-align: center;
            }
            span {
              margin-top: 5px;
              display: block;
              height: 60px;
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
  }
  .banner {
    height: 500px;
    width: 100%;
    background: url("~@/assets/wmdys.png") no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      width: 560px;
      height: 98px;
      font-size: 70px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #333333;
      line-height: 98px;
    }
    span {
      margin-top: 20px;
      height: 28px;
      font-size: 20px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      line-height: 28px;
    }
  }
}
</style>
