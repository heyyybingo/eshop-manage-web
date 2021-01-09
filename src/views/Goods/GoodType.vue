<template>
  <div>
    <div class="container">
      <span style="color: #303133"
        ><a-icon type="unordered-list" /> 数据列表</span
      >
      <a-button class="add-btn" @click="showAddModal">
        <a-icon type="plus" /> 添加
      </a-button>
    </div>
    <a-table :columns="columns" :data-source="this.data" rowKey="id">
      <span slot="action" slot-scope="text, record">
        <a @click="showEditModal(record)">Update</a>
        <a-divider type="vertical" />
        <a @click="showConfirm(record)">Delete</a>
      </span>
    </a-table>

    <!-- 添加类型 -->
    <a-modal
      title="添加类型"
      :visible="visible_add"
      @ok="addSubmit"
      @cancel="addCancel"
    >
      <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="类型名称">
          <a-input
            id="name"
            placeholder="请输入类型名称"
            v-model="addType.type"
          />
        </a-form-item>
      </a-form>
    </a-modal>

    <!-- 修改类型 -->
    <a-modal
      title="类型修改"
      :visible="visible_edit"
      @ok="editSubmit"
      @cancel="editCancel"
    >
      <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="类型名称">
          <a-input id="name" v-model="editType.type" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import { getType, addType, updateType, deleteType } from "@/api/goods.js";
const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type"
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];

export default {
  data() {
    return {
      data: null,
      columns,
      visible_add: false,
      visible_edit: false,
      editType: {},
      addType: {},
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
    getList() {
      getType().then(res => {
        let data = res.data.page.list;
        console.log(data);
        this.data = data;
      });
    },
    //添加商品
    addSubmit() {
      this.visible_add = false;
      console.log(this.addType);
      addType(this.addType).then(res => {
        if (res.data.code === 0) {
          console.log("添加成功");
          this.getList();
        }
      });
      this.addType = {};
    },
    addCancel() {
      this.visible_add = false;
    },
    showAddModal() {
      this.visible_add = true;
    },

    // 修改类型对话框
    showEditModal(record) {
      this.editType = record;
      this.visible_edit = true;
    },
    // 修改类型
    editSubmit() {
      this.visible_edit = false;
      updateType(this.editType).then(res => {
        if (res.data.code === 0) {
          console.log("编辑成功");
          this.getList();
        }
      });
    },
    editCancel() {
      this.getList();
      this.visible_edit = false;
    },
    // 删除类型
    showConfirm(record) {
      var that = this;
      this.$confirm({
        title: "确认注销该用户?",
        okText: "确认",
        cancelText: "取消",
        onOk() {
          console.log(record.type);
          // 删除用户
          deleteType([record.type]).then(res => {
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
.add-btn {
  float: right;
}
.search-form {
  margin: 0.5% 12% 0 4%;
}
</style>
