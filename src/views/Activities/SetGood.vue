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
    {{ this.$route.query.id }} 设置商品
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
    <a-table :columns="columns" :data-source="data">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
      <span slot="tags" slot-scope="tags">
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="
            tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'
          "
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
      <span slot="action" slot-scope="text, record">
        <a>Invite 一 {{ record.name }}</a>
        <a-divider type="vertical" />
        <a>Delete</a>
        <a-divider type="vertical" />
        <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
      </span>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    dataIndex: "name",
    key: "name",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "name" }
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    scopedSlots: { customRender: "tags" }
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];
export default {
  data() {
    return {
      data,
      columns
    };
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
