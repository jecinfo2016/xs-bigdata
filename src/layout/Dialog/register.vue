<template>
  <transition name="el-fade-in">
    <content-dialog
      v-if="visible"
      :visible.sync="visible"
      title="用户注册"
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
            <el-form-item prop="realname">
              <el-input v-model="form.realname" placeholder="请输入真实姓名">
                <i slot="prepend" class="el-icon-postcard" />
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="form.password" placeholder="请输入密码" show-password>
                <i slot="prepend" class="el-icon-lock" />
              </el-input>
            </el-form-item>
            <el-form-item prop="phone">
              <el-input v-model="form.phone" placeholder="请输入手机号码">
                <i slot="prepend" class="el-icon-mobile-phone" />
              </el-input>
            </el-form-item>
            <el-form-item style="text-align: right; margin-bottom: 2px;">
              <el-button :loading="loading" type="primary" @click="onSubmit">注册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </template>
    </content-dialog>
  </transition>
</template>

<script>
import ContentDialog from '@/components/Content/dialog'
import { register } from '@/api/user'
export default {
  components: { ContentDialog },
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    const username = (rule, value, callback) => {
      const patter = /^[a-zA-Z]\w{4,15}$/
      if (!patter.test(value)) {
        callback(new Error('必须以字母开头，字母、数字组成'))
      } else {
        callback()
      }
    }
    const realname = (rule, value, callback) => {
      const patter = /^(?:[\u4e00-\u9fa5·]{2,16})$/
      if (!patter.test(value)) {
        callback(new Error('请输入中文姓名'))
      } else {
        callback()
      }
    }
    const phone = (rule, value, callback) => {
      const patter = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
      if (!patter.test(value)) {
        callback(new Error('请输入手机号码'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      form: {
        username: '',
        password: '',
        realname: '',
        phone: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入', trigger: 'blur' },
          { validator: username, trigger: 'blur' },
          { min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入', trigger: 'blur' },
          { min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur' }
        ],
        realname: [
          { required: true, message: '请输入', trigger: 'blur' },
          { validator: realname, trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入', trigger: 'blur' },
          { validator: phone, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.register()
        } else {
          return false
        }
      })
    },
    register() {
      this.loading = true
      const params = this.form
      register(params)
        .then(res => {
          this.loading = false
          this.$message.success('注册成功！')
          this.close()
          this.$emit('openLogin')
        })
        .catch(e => {
          this.loading = false
        })
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
