<template>
  <div class="nav-container clearfix">
    <private-menu class="menu fl" />
    <private-bar class="fr" />
  </div>
</template>

<script>
import PrivateMenu from './Menu'
import PrivateBar from './Bar'
export default {
  components: { PrivateMenu, PrivateBar }
}
</script>

<style lang="less">
.nav-container {
  background: #545c64;
  padding: 0 20px;
  .menu {
    border-bottom: none !important;
    .el-menu-item,
    .el-submenu__title {
      color: #fff;
      font-weight: bold;
    }
    .el-submenu__icon-arrow {
      position: static;    
      vertical-align: middle;
      margin-left: 12px;
      margin-top: 0px;
      color: #eee;
    }
  }
}
</style>
