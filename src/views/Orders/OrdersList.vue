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
        <a-button type="primary" @click="search(searchOrder)">
          查询订单
        </a-button>
      </a-space>
      <a-form class="search-form">
        <a-row :gutter="24">
          <a-col :span="8">
            <a-form-item label="输入搜索">
              <a-input v-model="searchOrder.id" placeholder="订单编号" />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="收货人">
              <a-input
                v-model="searchOrder.userid"
                placeholder="收货人姓名/手机号码"
              />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="提交时间">
              <a-date-picker @change="onChange" placeholder="请选择时间" />
              <!-- <a-input v-model="searchOrder.id" placeholder="请选择时间" /> -->
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <div class="container">
      <span style="color: #303133"
        ><a-icon type="unordered-list" /> 订单列表</span
      >
    </div>
    <!-- 订单列表 -->
    <a-table
      rowKey="id"
      :columns="columns"
      :data-source="this.data"
      :pagination="this.pagination"
    >
      <template v-slot:time="time">
        {{ computedTime(time) }}
      </template>
      <template v-slot:price="price">
        {{ "￥" + price }}
      </template>
      <template v-slot:pay="pay">
        {{ pay ? "已支付" : "未支付" }}
      </template>
      <template v-slot:action="record">
        <router-link :to="{ path: 'detail', query: { id: record.id } }"
          >查看订单</router-link
        >
        <!-- <a
          @click="
            () => {
              record;
            }
          "
        >
          查看订单</a
        > -->
      </template>
    </a-table>
  </div>
</template>

<script>
import {
  selectAllOrders
  // searchOrders
} from "@/api/orders.js";

const columns = [
  {
    title: "订单编号",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "提交时间",
    dataIndex: "time",
    key: "time",
    scopedSlots: { customRender: "time" }
  },
  {
    title: "用户编号",
    dataIndex: "userid",
    key: "userid"
  },
  {
    title: "订单金额",
    key: "price",
    dataIndex: "price",
    scopedSlots: { customRender: "price" }
  },
  {
    title: "订单状态",
    key: "pay",
    dataIndex: "pay",
    scopedSlots: { customRender: "pay" }
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
//     userid: "1251656222",
//     time: "2018-09-15 12:24:27",
//     price: "180"
//   },
//   {
//     id: "124",
//     userid: "123456q",
//     time: "2018-09-15 12:24:27",
//     price: "180"
//   },
//   {
//     id: "125",
//     userid: "asdfv1214124",
//     time: "2018-09-15 12:24:27",
//     price: "180"
//   },
//   {
//     id: "126",
//     userid: "asdf56222",
//     time: "2018-09-15 12:24:27",
//     price: "180"
//   }
// ];
export default {
  data() {
    return {
      data: null,
      columns: columns,
      pagination: {
        defaultPageSize: 6
      },
      searchOrder: {}
    };
  },
  created() {
    this.getList();
  },
  // computed: {
  //   // 计算属性
  //   computedTime(time) {
  //     return this.$moment(time).format("YYYY-MM-DD");
  //   }
  // },
  methods: {
    computedTime(time) {
      return this.$moment(time).format("YYYY/MM/DD  HH:mm:ss");
    },
    // 获取用户列表
    getList() {
      selectAllOrders().then(res => {
        this.data = res.data.page.list;
      });
    },
    reset() {},
    search(searchOrder) {
      console.log(searchOrder);
    },
    onChange(date, dateString) {
      this.searchOrder.time = dateString;
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
  /* padding: 24px; */
  margin: 0.5% 12% 0 4%;
}

.search-form .ant-form-item {
  display: flex;
}
</style>
