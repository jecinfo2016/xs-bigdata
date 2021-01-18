<template>
  <div class="layout-container">
    <private-Nav />
    <router-view class="content" />
  </div>
</template>

<script>
import PrivateNav from './Nav'
export default {
  components: { PrivateNav }
}

</script>
<style lang="less" scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  widows: 100%;
  height: 100%;
  .content {
    flex: 1;
    min-height: 0;
  }
}
</style>

