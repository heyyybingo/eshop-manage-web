<template>
  <div>
    <a-page-header
      title="新增用户"
      @back="
        () => {
          this.$router.back();
        }
      "
    />
    <div class="container">
      <a-form>
        <a-form-item v-bind="formItemLayout" label="用户头像">
          <a-upload
            name="file"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          >
            <a-button> <a-icon type="upload" /> Click to Upload </a-button>
          </a-upload>
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="账号">
          <a-input placeholder="请输入账号..." v-model="user.accountname" />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="用户名">
          <a-input placeholder="请输入用户名..." v-model="user.username" />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="密码">
          <a-input
            type="password"
            placeholder="请输入密码..."
            v-model="user.password"
          />
        </a-form-item>

        <a-form-item v-bind="formItemLayout" label="手机">
          <a-input placeholder="请输入手机号..." v-model="user.phone" />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="邮箱">
          <a-input placeholder="请输入邮箱..." v-model="user.mail" />
        </a-form-item>
        <a-form-item v-bind="tailFormItemLayout">
          <a-button type="primary" @click="addSubmit(user)">
            添加用户
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { addUser } from "@/api/users.js";
export default {
  data() {
    return {
      user: {},
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        }
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 16,
            offset: 8
          }
        }
      }
    };
  },
  methods: {
    addSubmit(user) {
      user.avatar =
        "https://wx1.sinaimg.cn/mw690/0078MmVqly1gmha343japj302x02xt8v.jpg";
      console.log(user);
      addUser(user).then(res => {
        if (res.data.code === 0) {
          this.$success({
            title: "添加成功"
          });
          console.log("添加成功");
          this.user = {};
        }
      });
    }
  }
};
</script>

<style scoped>
.container {
  /* border: 1px solid #ebeef5; */
  width: 80%;
  margin: 0 auto;
}
</style>
