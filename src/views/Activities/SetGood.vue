<template>
  <div>
    <a-page-header
      title="活动列表"
      @back="
        () => {
          this.$router.push('/activities/list');
        }
      "
    />
    <!-- {{ this.$route.query.id }} 设置商品 -->
    <div class="container">
      <span style="color: #303133"
        ><a-icon type="unordered-list" /> 活动商品</span
      >
      <a-button
        class="add-btn"
        @click="
          () => {
            this.$router.push('/goods/list');
          }
        "
      >
        <a-icon type="plus" /> 添加
      </a-button>
    </div>
    <!-- 活动商品列表 -->
    <a-table :columns="columns" :data-source="detail" rowKey="id">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="customTitle"><a-icon type="smile-o" /> Id</span>

      <span slot="action" slot-scope="text, record">
        <a-divider type="vertical" />
        <a @click="showConfirm(record)">Delete</a>
        <a-divider type="vertical" />
      </span>
    </a-table>
  </div>
</template>

<script>
import {
  bannerDetail,
  bannerProduct,
  deleteBannerProduct
} from "@/api/activities.js";
const columns = [
  {
    dataIndex: "id",
    key: "id",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "id" }
  },
  {
    title: "商品名称",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "价格",
    dataIndex: "price",
    key: "price"
  },
  {
    title: "简介",
    key: "details",
    dataIndex: "details"
  },
  {
    title: "操作",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];

export default {
  data() {
    return {
      columns,
      detail: null,
      products: null
    };
  },
  created() {
    bannerDetail({ bannerid: this.$route.query.id }).then(res => {
      this.detail = res.data.list;
      // console.log(this.detail);
    });
    bannerProduct().then(res => {
      this.products = res.data.page.list;
      // console.log(this.products);
    });
  },
  methods: {
    getList() {
      bannerDetail({ bannerid: this.$route.query.id }).then(res => {
        this.detail = res.data.list;
        // console.log(this.detail);
      });
    },
    // 删除活动商品
    showConfirm(record) {
      // console.log(this.products);
      var that = this;
      for (var item in this.products) {
        // console.log(item);
        // console.log(item.productid);
        // console.log(item.bannerid);
        // console.log(
        //   item.productid == record.id && item.bannerid == this.$route.query.id
        // );
        if (
          this.products[item].productid == record.id &&
          this.products[item].bannerid == this.$route.query.id
        ) {
          // console.log(item.id);
          record = this.products[item].id;
          break;
        }
      }
      this.$confirm({
        title: "确定删除该活动商品?",
        okText: "确认",
        cancelText: "取消",
        onOk() {
          console.log(record);
          // 删除活动商品
          deleteBannerProduct([record]).then(res => {
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
