<template>
  <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">用户登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="loginForm.userName" auto-complete="off" placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import { requestLogin } from '@/api/api';
  export default {
    data() {
      return {
        logining: false,
        loginForm: {
          userName: '',
          password: ''
        },
        loginRules: {
          userName: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        },
        checked: true
      };
    },
    methods: {
      handleSubmit(ev) {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            this.logining = true;
            var loginParams = { userName: this.loginForm.userName, password: this.loginForm.password };
            requestLogin(loginParams).then(resp => {
              this.logining = false;
              let { message, code, data } = resp;
              if (code !== 200 || !data) {
                this.$message({
                  message: '登录失败, 请检查用户名和密码',
                  type: 'error'
                });
              } else {
                sessionStorage.setItem('user', JSON.stringify(this.loginForm.userName));
                this.$router.push({ path: '/home' });
              }
            });
          } else {
            return false;
          }
        });
      }
    }
  }

</script>

<style lang="scss" scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>