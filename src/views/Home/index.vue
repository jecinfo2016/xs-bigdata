<template>
  <div class="home-container">
    <car-ousel :imgs="urlList" />
    <development-support />
    <successful-case />
    <presentation />
    <bottom-log />
  </div>
</template>

<script>
import CarOusel from "./components/carOusel.vue";
import DevelopmentSupport from "./components/developmentSupport";
import SuccessfulCase from "./components/successfulCase";
import presentation from "./components/presentation";
import BottomLog from "./components/bottomLog";
export default {
  components: {
    CarOusel,
    DevelopmentSupport,
    SuccessfulCase,
    presentation,
    BottomLog,
  },
  data() {
    return {
      urlList: [
        { url: "/static/video/video2.mp4", link: "/content1" },
        { url: "/static/video/video3.mp4", link: "/content2" },
        { url: "/static/video/video1.mp4", link: "/content2" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.home-container {
}
</style>
