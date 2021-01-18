<template>
  <el-menu
    :default-active="activeMenu"
    :collapse-transition="false"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#fff"
    mode="horizontal"
  >
    <div class="login-title">
      <span>秀水大数据开放平台</span>
    </div>
    <sidebar-item
      v-for="route in routes"
      :key="route.path"
      :item="route"
      :base-path="route.path"
    />
  </el-menu>
</template>

<script>
import SidebarItem from "./SidebarItem";
export default {
  components: { SidebarItem },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
  },
};
</script>

<style  lang="less" scoped>
.el-menu--horizontal {
  display: flex;
}
.login-title {
  display: flex;
  align-items: center;
  color: #fff !important;
  // margin-left: 450px;
  font-weight: 700;
  font-size: 14px;
  margin-right: 50px;
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>