<template>
  <div>
    <a-page-header
      title="添加商品"
      @back="
        () => {
          this.$router.back();
        }
      "
    />
    <div class="container">
      <a-form v-bind="formItemLayout">
        <a-form-item label="商品名称">
          <a-input
            id="name"
            placeholder="请输入商品名称"
            v-model="goods.name"
          />
        </a-form-item>
        <a-form-item label="商品价格">
          <a-input
            id="price"
            placeholder="请输入商品价格"
            v-model="goods.price"
          />
        </a-form-item>
        <a-form-item label="商品类型">
          <a-select default-value="1" v-model="goods.typeid">
            <a-select-option
              v-for="item in goodsType"
              :key="item.id"
              :value="item.id"
            >
              {{ item.type }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="商品品牌">
          <a-select default-value="1" v-model="goods.brandid">
            <a-select-option
              v-for="item in brand"
              :key="item.id"
              :value="item.id"
            >
              {{ item.brand }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="商品库存">
          <a-input
            id="stock"
            placeholder="请输入商品库存"
            v-model="goods.stock"
          />
        </a-form-item>
        <a-form-item label="商品总量">
          <a-input
            id="total"
            placeholder="请输入商品总量"
            v-model="goods.total"
          />
        </a-form-item>
        <a-form-item label="是否上架">
          <a-radio-group name="racking" v-model="goods.racking">
            <a-radio value="1">
              是
            </a-radio>
            <a-radio value="0">
              否
            </a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="商品标签">
          <a-input placeholder="请输入商品标签" v-model="goods.label" />
        </a-form-item>
        <a-form-item label="商品简介">
          <a-textarea
            :rows="3"
            v-model="goods.details"
            placeholder="请输入商品简介"
          />
        </a-form-item>
        <a-form-item v-bind="tailFormItemLayout">
          <a-button type="primary" @click="addGoods(goods)">
            添加商品
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { insertGoods, getBrand, getType } from "@/api/goods.js";
export default {
  data() {
    return {
      goods: {
        name: "",
        price: "",
        stock: "",
        total: "",
        racking: "",
        typeid: "",
        brandid: "",
        label: "",
        details: ""
      },
      goodsType: [
        // {
        //   id: 1,
        //   type: "水果"
        // },
        // {
        //   id: 2,
        //   type: "零食"
        // },
        // {
        //   id: 3,
        //   type: "家具"
        // }
      ],
      brand: [],
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
  created() {
    getBrand().then(res => {
      // console.log(res.data.page.list);
      this.brand = res.data.page.list;
      // console.log(this.brand);
    });
    getType().then(res => {
      // console.log(res.data.page.list);
      this.goodsType = res.data.page.list;
    });
  },
  methods: {
    addGoods() {
      this.visible_add = false;
      this.goods.sales = 0;
      this.goods.rackingtime = new Date();
      insertGoods(this.goods).then(res => {
        if (res.data.code === 0) {
          this.$success({
            title: "添加成功"
            // JSX support
            // content: (
            //   <div>
            //     <p>some messages...some messages...</p>
            //     <p>some messages...some messages...</p>
            //   </div>
            // )
          });
          console.log("添加成功");
          this.goods = {};
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
