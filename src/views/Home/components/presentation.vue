<template>
  <div class="block">
    <div class="presentation">
      <div class="presentation-title">
        <p>PRODUCT</p>
        <span>产品介绍</span>
        <div class="xian"></div>
      </div>
      <p>包罗万象,支持多格式数据提交。包罗万象,支持多格式数据提交</p>
      <case-rotations />
    </div>
  </div>
</template>
<script>
import CaseRotations from "./caseRotations";
export default {
  components: { CaseRotations },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.presentation {
  width: 100%;
  height: 710px;
  display: flex;
  flex-direction: column;
  background: #4685ff;
  align-items: center;
  .presentation-title {
    position: relative;
    width: 288px;
    height: 84px;
    margin-top: 44px;
    p {
      font-size: 60px;
      line-height: 84px;
      text-align: center;
      color: #5891ff;
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
      color: #fff;
    }
    div {
      position: absolute;
      top: 65px;
      left: 93px;
      width: 100px;
      height: 3px;
      background: #ecad4a;
      border-radius: 2px;
    }
  }
  > p {
    width: 100%;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
}
</style>