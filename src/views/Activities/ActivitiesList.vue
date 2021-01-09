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
          查询活动
        </a-button>
      </a-space>
      <a-form
        class="search-form"
        :label-col="{ span: 2 }"
        :wrapper-col="{ span: 5 }"
      >
        <a-form-item label="活动名称">
          <a-input
            id="name"
            placeholder="活动名称"
            v-model="searchBanner.name"
          />
        </a-form-item>
      </a-form>
    </div>
    <div class="container">
      <span style="color: #303133"
        ><a-icon type="unordered-list" /> 活动列表</span
      >
    </div>
    <!-- 活动列表 -->
    <a-table
      rowKey="id"
      :columns="columns"
      :data-source="this.data"
      :pagination="this.pagination"
    >
      <template v-slot:pic="act">
        <img :src="act" width="100px" />
      </template>
      <template v-slot:start="starttime">
        {{ formatTime(starttime) }}
      </template>
      <template v-slot:end="endtime">
        {{ formatTime(endtime) }}
      </template>
      <template v-slot:action="record">
        <router-link :to="{ path: 'setgood', query: { id: record.id } }"
          >设置商品</router-link
        >
        <a-divider type="vertical" />
        <a @click="showEditModal(record)">编辑</a>
        <a-divider type="vertical" />
        <a @click="showConfirm(record)"> 删除</a>
      </template>
    </a-table>

    <!-- 编辑活动  -->
    <a-modal
      title="编辑活动"
      :visible="visible_edit"
      @ok="editSubmit"
      @cancel="editCancel"
    >
      <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="活动标题">
          <a-input v-model="editActivity.title" />
        </a-form-item>
        <a-form-item label="活动图片">
          <a-input v-model="editActivity.avator" />
        </a-form-item>
        <a-form-item label="开始时间">
          <a-date-picker
            :value="formatTime(editActivity.starttime)"
            :disabled-date="disabledStartDate"
            @change="startChange"
            show-time
            format="YYYY-MM-DD HH:mm:ss"
            placeholder="Start"
            @openChange="handleStartOpenChange"
          />
        </a-form-item>
        <a-form-item label="结束时间">
          <a-date-picker
            :value="formatTime(editActivity.endtime)"
            :disabled-date="disabledEndDate"
            @change="endChange"
            show-time
            format="YYYY-MM-DD HH:mm:ss"
            placeholder="End"
            :open="endOpen"
            @openChange="handleEndOpenChange"
          />
        </a-form-item>
        <a-form-item label="活动内容">
          <a-input type="textarea" v-model="editActivity.content" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import {
  selectAllActivities,
  deleteActivities,
  updateActivities
  // searchActivities
} from "@/api/activities.js";
// const moment = require("moment");
const columns = [
  {
    title: "编号",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "活动标题",
    dataIndex: "title",
    key: "title"
  },
  {
    title: "活动图片",
    dataIndex: "avator",
    key: "avator",
    scopedSlots: { customRender: "pic" }
  },
  {
    title: "开始时间",
    dataIndex: "starttime",
    key: "starttime",
    scopedSlots: { customRender: "start" }
  },
  {
    title: "结束时间",
    dataIndex: "endtime",
    key: "endtime",
    scopedSlots: { customRender: "end" }
  },
  // {
  //   title: "活动内容",
  //   key: "content",
  //   dataIndex: "content"
  // },
  {
    title: "操作",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];

// const data = [
//   {
//     id: "123",
//     title: "活动一",
//     avator:
//       "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=188100204,3828227675&fm=26&gp=0.jpg",
//     starttime: "2018-09-15 12:24:27",
//     endtime: "2018-09-15 12:24:27",
//     content: "content"
//   },
//   {
//     id: "124",
//     title: "活动二",
//     avator:
//       "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=188100204,3828227675&fm=26&gp=0.jpg",
//     starttime: "2018-09-15 12:24:27",
//     endtime: "2018-09-15 12:24:27",
//     content: "content"
//   },
//   {
//     id: "125",
//     title: "活动三",
//     avator:
//       "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=188100204,3828227675&fm=26&gp=0.jpg",
//     starttime: "2018-09-15 12:24:27",
//     endtime: "2018-09-15 12:24:27",
//     content: "content"
//   }
// ];
export default {
  data() {
    return {
      data: null,
      columns: columns,
      visible_edit: false,
      editActivity: {},
      searchBanner: {},
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
      },
      endOpen: false
    };
  },
  // watch: {
  //   editActivity(val) {
  //     console.log("startValue", val.starttime);
  //     console.log("endValue", val.endtime);
  //   }
  //   // editActivity(val) {
  //   //   console.log("endValue", val);
  //   // }
  // },
  created() {
    this.getList();
  },
  methods: {
    // 时间格式化
    formatTime(time) {
      return this.$moment(time).format("YYYY-MM-DD HH:mm:ss");
    },
    getList() {
      selectAllActivities().then(res => {
        this.data = res.data.page.list;
        console.log(this.data);
      });
    },
    //编辑活动对话框
    showEditModal(record) {
      // record.starttime = this.$moment(record.starttime);
      // console.log(record.starttime);
      // console.log(typeof record.starttime);
      this.editActivity = record;
      this.visible_edit = true;
    },
    // 编辑活动
    editSubmit() {
      console.log(this.editActivity);
      updateActivities(this.editActivity).then(res => {
        if (res.data.code === 0) {
          console.log("编辑成功");
          this.getList();
        }
      });
      this.visible_edit = false;
    },

    //取消编辑
    editCancel() {
      this.visible_edit = false;
    },

    // 删除活动
    showConfirm(record) {
      let that = this;
      this.$confirm({
        title: "确认删除该活动?",
        okText: "确认",
        cancelText: "取消",
        onOk() {
          console.log(record.id);
          // 删除活动
          deleteActivities([record.id]).then(res => {
            if (res.data.code === 0) {
              that.$success({
                title: "删除成功"
              });
              console.log("删除成功");
              that.getList();
            }
          });
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          }).catch(() => console.log("Oops errors!"));
        },
        onCancel() {}
      });
    },

    // 编辑活动时间
    disabledStartDate(startValue) {
      const endValue = this.editActivity.endtime;
      if (!startValue || !endValue) {
        return false;
      }
      return startValue.valueOf() > endValue.valueOf();
    },
    disabledEndDate(endValue) {
      const startValue = this.editActivity.starttime;
      if (!endValue || !startValue) {
        return false;
      }
      return startValue.valueOf() >= endValue.valueOf();
    },
    handleStartOpenChange(open) {
      if (!open) {
        this.endOpen = true;
      }
    },
    handleEndOpenChange(open) {
      this.endOpen = open;
    },
    startChange(date) {
      this.editActivity.starttime = date;
    },
    endChange(date) {
      this.editActivity.endtime = date;
    },
    search() {},
    reset() {}
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
