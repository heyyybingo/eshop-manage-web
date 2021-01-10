<template>
  <div>
    <a-page-header
      title="订单列表"
      @back="
        () => {
          this.$router.push('/orders/list');
        }
      "
    />
    <!-- {{ this.$route.query.id }} -->
    <Card v-if="this.detail != null">
      <DescriptionList
        size="large"
        title="基本信息"
        style="margin-bottom: 32px;"
      >
        <Description term="订单编号">{{ this.$route.query.id }}</Description>
        <Description term="用户账号">{{
          this.detail[0].accountname
        }}</Description>
        <Description term="交易时间">{{
          timeFormat(this.detail[0].rackingtime)
        }}</Description>
        <Description term="交易金额">{{
          "￥" + this.detail[0].orderingPrice
        }}</Description>
        <Description term="备注">无</Description>
      </DescriptionList>
      <Divider style="margin-bottom: 32px;" />
      <DescriptionList
        size="large"
        title="收货人信息"
        style="margin-bottom: 32px;"
      >
        <Description term="用户姓名">{{
          this.detail[0].orderingName
        }}</Description>
        <Description term="联系电话">{{
          this.detail[0].orderingPhone
        }}</Description>
        <Description term="取货地址">{{ this.detail[0].address }}</Description>
      </DescriptionList>
      <Divider style="margin-bottom: 32px;" />
      <DescriptionList
        size="large"
        title="订单明细"
        style="margin-bottom: 32px;"
      >
        <a-table
          :columns="columns"
          :data-source="detail"
          :pagination="false"
          rowKey="productName"
        >
          <template v-slot:action="record">
            {{ "￥" + record.productPrice * record.number }}
          </template>
        </a-table>
      </DescriptionList>
    </Card>
  </div>
</template>

<script>
import { orderDetail } from "@/api/orders.js";
import DescriptionList from "@/components/DescriptionList";
import { Divider, Card } from "ant-design-vue";
const { Description } = DescriptionList;

const columns = [
  {
    title: "商品名称",
    key: "productName",
    dataIndex: "productName"
  },
  {
    title: "商品类型",
    dataIndex: "typeid",
    key: "typeid"
  },
  {
    title: "价格",
    dataIndex: "productPrice",
    key: "productPrice"
  },
  {
    title: "数量",
    key: "number",
    dataIndex: "number"
  },
  {
    title: "小计",
    key: "sum",
    scopedSlots: { customRender: "action" }
  }
];

const data = [
  {
    key: "1",
    name: "苹果",
    type: "水果",
    price: 23,
    num: 2
  },
  {
    key: "2",
    name: "香蕉",
    type: "水果",
    price: 23,
    num: 3
  },
  {
    key: "3",
    name: "橙子",
    type: "水果",
    price: 23,
    num: 4
  }
];

export default {
  data() {
    return {
      data,
      columns,
      detail: null
    };
  },
  components: {
    DescriptionList,
    Description,
    Divider,
    Card
  },
  created() {
    console.log(this.$route.query.id);
    // let orderingid = this.$route.query.id;
    orderDetail({ orderingid: this.$route.query.id }).then(res => {
      this.detail = res.data.listOrder;
      console.log(res);
      console.log(this.detail);
    });
  },
  methods: {
    timeFormat(time) {
      return this.$moment(time).format("YYYY-MM-DD HH:mm:ss");
    }
  }
};
</script>

<style lang="less" scoped>
@import "~ant-design-vue/es/style/themes/default.less";

.title {
  color: @heading-color;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
}
</style>
