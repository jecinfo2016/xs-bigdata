<template>
  <div class="Introduce">
    <div class="intr-top">
      <div class="left-1">
        <h5>产品类型</h5>
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-menu-item index="1">
            <span slot="title">类型名称1</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">类型名称2</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">类型名称3</span>
          </el-menu-item>
          <el-menu-item index="4">
            <span slot="title">类型名称4</span>
          </el-menu-item>
          <el-menu-item index="5">
            <span slot="title">类型名称5</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="right-1">
        <case-rotations />
        <div class="Introduce-box">
          <div class="Introduce-title">
            <span>产品介绍</span>
            <div class="xian"></div>
          </div>
          <p>标题一标题一标题一标题一标题一标题一标题一</p>
          <span
            >产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品
            介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文F</span
          >
          <p>标题二标题二标题二标题二标题二标题二标题二</p>
          <span>
            产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍
            文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品</span
          >
        </div>
        <div class="appay-box">
          <div class="appay-title">
            <span>应用场景</span>
            <div class="xian"></div>
          </div>
          <div class="appay-dl">
            <dl>
              <dt><img src="../../assets/10.png" alt="" /></dt>
              <dd>
                <p>标题一标题一标题一</p>
                <span
                  >产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案</span
                >
              </dd>
            </dl>
            <dl>
              <dt><img src="../../assets/11.png" alt="" /></dt>
              <dd>
                <p>标题一标题一标题一</p>
                <span
                  >产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案</span
                >
              </dd>
            </dl>
            <dl>
              <dt><img src="../../assets/12.png" alt="" /></dt>
              <dd>
                <p>标题一标题一标题一</p>
                <span
                  >产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案</span
                >
              </dd>
            </dl>
            <dl>
              <dt><img src="../../assets/12.png" alt="" /></dt>
              <dd>
                <p>标题一标题一标题一</p>
                <span
                  >产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案产品介绍文案</span
                >
              </dd>
            </dl>
          </div>
        </div>
        <div class="developer-box">
          <div class="developer-title">
            <span>开发者资源</span>
            <div class="xian"></div>
          </div>
          <div class="developer-dl">
            <dl>
              <dt>Android</dt>
              <dd>SDK文档</dd>
            </dl>
            <dl>
              <dt>Android</dt>
              <dd>SDK文档</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
    <div class="intr-boot">
      <bottom-log />
    </div>
  </div>
</template>
<script>
import CaseRotations from "../Home/components/caseRotations";
import BottomLog from "../Home/components/bottomLog";

export default {
  components: { CaseRotations, BottomLog },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.developer-box {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 240px;
  p {
    width: 294px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 600;
    color: #333333;
    line-height: 20px;
    margin-top: 20px;
  }
  > span {
    margin-top: 10px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
    line-height: 20px;
  }
  .developer-dl {
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    dl {
      // width: 200px;
      height: 100px;
      // margin: 0 70px;
      dt {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
      }
      dd {
        width: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        height: 20px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #4685ff;
        line-height: 20px;
      }
    }
  }
  .developer-title {
    position: relative;
    width: 288px;
    height: 84px;
    margin-top: 44px;
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
      color: #000;
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
}
.Introduce-box {
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 240px;
  p {
    width: 294px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 600;
    color: #333333;
    line-height: 20px;
    margin-top: 20px;
  }
  > span {
    margin-top: 10px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
    line-height: 20px;
  }
  .Introduce-title {
    position: relative;
    width: 288px;
    height: 84px;
    margin-top: 44px;
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
      color: #000;
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
}
.appay-box {
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .appay-title {
    position: relative;
    width: 288px;
    height: 84px;
    margin-top: 44px;
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
      color: #000;
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
  .appay-dl {
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
          height: 20px;
          font-size: 14px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #333333;
          line-height: 20px;
          text-align: center;
        }
        span {
          margin-top: 5px;
          display: block;
          width: 201px;
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
//   width: 100%;
//   height: 450px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 0 240px;
//   p {
//     width: 294px;
//     height: 20px;
//     font-size: 14px;
//     font-family: PingFangSC-Medium, PingFang SC;
//     font-weight: 600;
//     color: #333333;
//     line-height: 20px;
//     margin-top: 20px;
//   }
//   > span {
//     margin-top: 10px;
//     font-size: 14px;
//     font-family: PingFangSC-Regular, PingFang SC;
//     font-weight: 400;
//     color: #666666;
//     line-height: 20px;
//   }
//   .appay-dl {
//     width: 100%;
//     flex: 1;
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     }
//   }
//   .appay-title {
//     position: relative;
//     width: 288px;
//     height: 84px;
//     margin-top: 44px;
//     span {
//       position: absolute;
//       top: 0;
//       width: 100%;
//       height: 100%;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       font-size: 30px;
//       font-family: PingFangSC-Semibold, PingFang SC;
//       font-weight: 600;
//       color: #000;
//     }
//     div {
//       position: absolute;
//       top: 65px;
//       left: 93px;
//       width: 100px;
//       height: 3px;
//       background: #4685ff;
//       border-radius: 2px;
//     }
//   }
// }
.Introduce {
  width: 100%;
  // height: 100%;
  .intr-top {
    display: flex;
    width: 100%;
    // height: 100%;
  }
  .left-1 {
    width: 240px;
    height: auto;
    background: #f3f6f9;
    > h5 {
      height: 60px;
      line-height: 60px;
      margin-left: 20px;
      font-size: 18px;
      font-weight: 700;
    }
    span {
      margin-left: 30px;
    }
  }
  .right-1 {
    flex: 1;
  }
}
.el-menu {
  border: 0;
  background: #f3f6f9;
}
</style>