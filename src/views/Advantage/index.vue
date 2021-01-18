<template>
  <div class="index-container">
    <div class="banner">
      <p>成功案例主标题</p>
      <span>创新解决方案，助力行业发展，挖掘新商机</span>
    </div>
    <div class="index-box">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部类别" name="1"></el-tab-pane>
        <el-tab-pane label="类别名称1" name="2"></el-tab-pane>
        <el-tab-pane label="类别名称2" name="3"></el-tab-pane>
        <el-tab-pane label="类别名称3" name="4"></el-tab-pane>
        <el-tab-pane label="类别名称4" name="5"></el-tab-pane>
        <el-tab-pane label="类别名称5" name="6"></el-tab-pane>
        <el-tab-pane label="类别名称6" name="7"></el-tab-pane>
        <el-tab-pane label="类别名称7" name="8"></el-tab-pane>
      </el-tabs>
      <div class="boxmin">
        <dl>
          <dt><img src="../../assets/photo.png" alt="" /></dt>
          <dd>
            <div class="boxmin-top">
              <p>智慧水务云平台</p>
              <span>类别名称</span>
            </div>
            <p>
              连接物业、居民、政府、媒体和社区服务提供方，形成“互联网+社区”一站式解决方案，打造智慧社区健康生态。连接物业、居民、政府、媒体和社区服务提供方，形成“互联网+社区”一站式解决方案，打造智慧社区健康生态。
              致力打造集“智能硬件+智慧社区+社交传播”三位一体的生态模型，赋能地产行业，改变未来人居环境。
            </p>
            <span> 了解更多 》 </span>
          </dd>
        </dl>
      </div>
      <div class="boxmin">
        <dl>
          <dt><img src="../../assets/photo1.png" alt="" /></dt>
          <dd>
            <div class="boxmin-top">
              <p>智慧水务云平台</p>
              <span>类别名称</span>
            </div>
            <p>
              连接物业、居民、政府、媒体和社区服务提供方，形成“互联网+社区”一站式解决方案，打造智慧社区健康生态。连接物业、居民、政府、媒体和社区服务提供方，形成“互联网+社区”一站式解决方案，打造智慧社区健康生态。
              致力打造集“智能硬件+智慧社区+社交传播”三位一体的生态模型，赋能地产行业，改变未来人居环境。
            </p>
            <span> 了解更多 》 </span>
          </dd>
        </dl>
      </div>
      <div class="boxmin">
        <dl>
          <dt><img src="../../assets/photo2.png" alt="" /></dt>
          <dd>
            <div class="boxmin-top">
              <p>校园生态节水平台</p>
              <span>类别名称</span>
            </div>
            <p>
              连接物业、居民、政府、媒体和社区服务提供方，形成“互联网+社区”一站式解决方案，打造智慧社区健康生态。连接物业、居民、政府、媒体和社区服务提供方，形成“互联网+社区”一站式解决方案，打造智慧社区健康生态。
              致力打造集“智能硬件+智慧社区+社交传播”三位一体的生态模型，赋能地产行业，改变未来人居环境。
            </p>
            <span> 了解更多 》 </span>
          </dd>
        </dl>
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
    return {
      activeName: "1",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="less" scoped>
.el-tabs__nav-wrap::after {
  position: relative;
  background-color: #f3f6f9 !important;
}
.index-container {
  .index-box {
    width: 100%;
    height: 1232px;
    background: #e4e7ed;
    padding: 0 480px;
    .boxmin {
      width: 100%;
      height: 296px;
      background: #fff;
      margin-top: 40px;
      dl {
        display: flex;
        width: 100%;
        height: 100%;
        dt {
          height: 100%;
          display: flex;
          align-items: center;
          padding-left: 38px;
          img {
            width: 300px;
            height: 220px;
          }
        }
        dd {
          flex: 1;
          padding: 0 28px;
          .boxmin-top {
            margin-top: 48px;
            display: flex;
            justify-content: space-between;
            p {
              font-size: 20px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #666666;
              line-height: 28px;
            }
            span {
              display: block;
              width: 85px;
              height: 28px;
              border-radius: 14px;
              border: 1px solid #979797;
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #666666;
              line-height: 28px;
              text-align: center;
            }
          }
          > p {
            margin-top: 15px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #666666;
            line-height: 20px;
          }
          > span {
            display: block;
            margin-top: 38px;
            height: 22px;
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #4685ff;
            line-height: 22px;
          }
        }
      }
    }
  }
  .banner {
    height: 500px;
    width: 100%;
    background: url("~@/assets/cgal.png") no-repeat;
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
      color: #fff;
      line-height: 98px;
    }
    span {
      margin-top: 20px;
      height: 28px;
      font-size: 20px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #eee;
      line-height: 28px;
    }
  }
}
</style>
