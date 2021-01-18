<template>
  <transition name="el-fade-in">
    <content-dialog
      v-if="visible"
      :visible.sync="visible"
      title="用户登录"
      width="400px"
      @close="close"
    >
      <template v-slot:content>
        <div class="form">
          <el-form ref="form" :model="form" :rules="rules">
            <el-form-item prop="username">
              <el-input v-model="form.username" placeholder="请输入用户名">
                <i slot="prepend" class="el-icon-user" />
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="form.password" placeholder="请输入密码" show-password>
                <i slot="prepend" class="el-icon-lock" />
              </el-input>
            </el-form-item>
            <el-form-item style="text-align: right; margin-bottom: 2px;">
              <el-button type="text" @click="openRegister">免费注册</el-button>
              <el-button type="primary" :loading="loading" @click="onSubmit">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </template>
    </content-dialog>
  </transition>
</template>

<script>
import ContentDialog from '@/components/Content/dialog'
import { login } from '@/api/user'
import { setToken } from '@/utils/auth'
export default {
  components: { ContentDialog },
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      loading: false,
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.login()
        } else {
          return false
        }
      })
    },
    login() {
      this.loading = true
      const params = this.form
      login(params)
        .then(res => {
          this.loading = false
          setToken(res.access_token)
          this.$store.dispatch('user/getInfo')
          this.close()
        })
        .catch(e => {
          this.loading = false
        })
    },
    openRegister() {
      this.close()
      this.$emit('openRegister')
    },
    close() {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="less" scoped>
.form {
  padding: 20px;
}
</style>
