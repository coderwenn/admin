<script setup lang="ts">
import { reactive, ref } from "vue";
import { login } from "../../api";
import { UserInfo } from "../../types/login";

const LoginFormRef = ref();
const loginForm = reactive({
  userName: "",
  password: "",
  code: "",
});
// 表单效验
const rulesLogin = reactive({
  userName: [{ required: true, message: "请输入账号", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
});

// 登录
const loginSubmit = (LoginFormRef: {
  validate: (arg: (valid: any, fields: any) => void) => void;
}) => {
  LoginFormRef.validate(async (valid: any) => {
    if (valid) {
      let data: UserInfo = {
        userName: loginForm.userName,
        passWord: loginForm.password,
        code: loginForm.code,
      };
      const res = await login(data);
      console.log(res);
    }
  });
};
</script>
<template>
  <div class="login">
    <!-- <img src="@/assets/imgs/bj_login.jpg" alt="" /> -->
    <div class="login-form">
      <div class="form-subject">
        <p>login</p>
        <div class="form">
          <el-form
            label-width="100px"
            :model="loginForm"
            :rules="rulesLogin"
            ref="LoginFormRef"
            style="max-width: 400px"
          >
            <el-form-item label="账号" prop="userName">
              <el-input v-model="loginForm.userName" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                v-model="loginForm.password"
                text="password"
                show-password
              />
            </el-form-item>
            <el-form-item label="验证码" prop="code">
              <el-input
                v-model="loginForm.code"
                text="password"
                show-password
              />
            </el-form-item>
            <div class="code-img">
              <img src="/api/user/code" alt="" />
            </div>
            <el-form-item>
              <el-button type="success" @click="loginSubmit(LoginFormRef)"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  .code-img {
    width: 150px;
    height: 50px;
    position: relative;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 100px;
    }
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .login-form {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .form-subject {
      width: 500px;
      height: 240px;
      border-radius: 6px;
      background-color: rgb(240 248 255 / 21%);
      backdrop-filter: blur(30px);
      z-index: 1;

      p {
        line-height: 40px;
        font-size: 26px;
        margin-left: 30px;
        color: #567c7c;
      }

      .form {
        margin-top: 25px;
      }
    }
  }
}
</style>
