<template>
  <div>
    <template v-if="realname">
      <a href="" style="padding-right:20px;"><img src="../../assets/kzt.png" @click="toConsole" alt="" /></a>

      <el-dropdown class="realname">
        <span class="el-dropdown-link">
          {{ realname }}<i class="el-icon-arrow-down el-icon--right" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="toConsole">控制台</el-dropdown-item>
          <el-dropdown-item divided @click.native="logout"
            >退出</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </template>
    <template v-else>
      <div class="btn" @click="openLogin">登录</div>
    </template>
    <dialog-login :visible.sync="visible.login" @openRegister="openRegister" />
    <dialog-register :visible.sync="visible.register" @openLogin="openLogin" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import DialogLogin from "../Dialog/login";
import DialogRegister from "../Dialog/register";
export default {
  components: { DialogLogin, DialogRegister },
  data() {
    return {
      visible: {
        login: false,
        register: false,
      },
    };
  },
  computed: {
    ...mapState("user", {
      realname: (state) => state.realname,
    }),
  },
  methods: {
    openLogin() {
      this.visible.login = true;
    },
    openRegister() {
      this.visible.register = true;
    },
    logout() {
      this.$store.dispatch("user/logout");
    },
    toConsole() {
      window.location.href = process.env.VUE_APP_CONSOLE_URL;
    },
  },
};
</script>

<style lang="less" scoped>
@line-height: 56px;
.realname {
  color: #fff;
  padding: 18px 0;
  .el-dropdown-link {
    cursor: pointer;
  }
}
.btn {
  color: #fff;
  font-weight: bold;
  line-height: @line-height;
  padding: 0 16px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: #434a50;
  }
}
</style>
