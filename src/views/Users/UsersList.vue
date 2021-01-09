<template>
  <div>
    <div class="container">
      <span style="color: #303133"
        ><a-icon type="unordered-list" /> 筛选搜索</span
      >
      <a-space style="float:right">
        <a-button @click="reset">
          重置
        </a-button>
        <a-button type="primary" @click="search">
          查询用户
        </a-button>
      </a-space>
      <a-form
        class="search-form"
        :label-col="{ span: 2 }"
        :wrapper-col="{ span: 5 }"
      >
        <a-form-item label="输入搜索">
          <a-input
            id="name"
            placeholder="账号/姓名"
            v-model="searchUser.search"
          />
        </a-form-item>
      </a-form>
    </div>
    <div class="container">
      <span style="color: #303133"
        ><a-icon type="unordered-list" /> 用户列表</span
      >
    </div>
    <a-table
      rowKey="id"
      :columns="columns"
      :data-source="this.data"
      :pagination="this.pagination"
    >
      <template v-slot:pic="act">
        <img :src="act" width="50px" />
      </template>
      <template v-slot:action="record">
        <a @click="showEditModal(record)"> 编辑</a>
        <a-divider type="vertical" />
        <a @click="showConfirm(record)">注销用户</a>
      </template>
    </a-table>

    <!-- 编辑用户  -->
    <a-modal
      title="编辑用户"
      :visible="visible_edit"
      @ok="editSubmit"
      @cancel="editCancel"
    >
      <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="账号">
          <a-input id="accountname" v-model="editUser.accountname" />
        </a-form-item>
        <a-form-item label="姓名">
          <a-input id="username" v-model="editUser.username" />
        </a-form-item>
        <a-form-item label="头像">
          <a-input id="avatar" v-model="editUser.avatar" />
        </a-form-item>
        <a-form-item label="电话">
          <a-input id="phone" v-model="editUser.phone" />
        </a-form-item>
        <a-form-item label="邮箱">
          <a-input id="mail" v-model="editUser.mail" />
        </a-form-item>
        <a-form-item label="密码">
          <a-input type="password" id="password" v-model="editUser.password" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import {
  selectAllUsers,
  deleteUser,
  // addUser,
  updateUser,
  searchUsers
} from "@/api/users.js";
const columns = [
  {
    title: "id",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "头像",
    dataIndex: "avatar",
    key: "avatar",
    scopedSlots: { customRender: "pic" }
  },
  {
    title: "账号",
    dataIndex: "accountname",
    key: "accountname"
  },
  {
    title: "用户名",
    dataIndex: "username",
    key: "username"
  },
  {
    title: "电话",
    dataIndex: "phone",
    key: "phone"
  },
  {
    title: "邮箱",
    key: "mail",
    dataIndex: "mail"
  },
  {
    title: "操作",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];

// const data = [
//   {
//     id: "123",
//     name: "name",
//     phone: "13777886666",
//     password: "111111",
//     mail: "1234567@qq.com"
//   }
// ];
export default {
  data() {
    return {
      data: null,
      columns,
      visible_edit: false,
      editUser: {},
      searchUser: {},
      pagination: {
        defaultPageSize: 6
      },
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    // 获取用户列表
    getList() {
      selectAllUsers().then(res => {
        this.data = res.data.page.list;
      });
    },

    // 注销用户
    showConfirm(record) {
      var that = this;
      this.$confirm({
        title: "确认注销该用户?",
        okText: "确认",
        cancelText: "取消",
        onOk() {
          console.log(record.id);
          // 删除用户
          deleteUser([record.id]).then(res => {
            if (res.data.code === 0) {
              console.log("删除成功");
              that.getList();
            }
          });
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          }).catch(e => console.log(e));
        },
        onCancel() {}
      });
    },

    //编辑用户对话框
    showEditModal(record) {
      this.editUser = record;
      this.visible_edit = true;
    },

    // 编辑用户
    editSubmit() {
      this.visible_edit = false;
      console.log(this.editUser);
      updateUser(this.editUser).then(res => {
        if (res.data.code === 0) {
          console.log("编辑成功");
          this.getList();
        }
      });
    },

    //取消编辑
    editCancel() {
      this.visible_edit = false;
    },

    // 重置搜索
    reset() {
      this.searchUser = {};
      this.getList();
    },

    // 搜索
    search() {
      console.log(this.searchUser);
      searchUsers(this.searchUser).then(res => {
        this.data = res.data.page.list;
      });
    }
  }
};
</script>

<style scoped>
.container {
  border: 1px solid #ebeef5;
  margin-bottom: 12px;
  padding: 15px;
}

.search-form {
  margin: 1% 12% 0 2%;
}
</style>
