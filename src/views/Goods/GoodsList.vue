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
          查询结果
        </a-button>
      </a-space>
      <a-form class="search-form">
        <a-row type="flex" justify="space-between">
          <a-col :span="6">
            <a-form-item label="商品名称">
              <a-input
                id="name"
                placeholder="请输入商品名称"
                v-model="searchGood.name"
              />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item label="商品类型">
              <a-select default-value="1" v-model="searchGood.typeid">
                <a-select-option
                  v-for="item in goodType"
                  :key="item.id"
                  :value="item.id"
                >
                  {{ item.type }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item label="上架状态">
              <a-select default-value="1" v-model="searchGood.racking">
                <a-select-option :value="1">
                  上架
                </a-select-option>
                <a-select-option :value="0">
                  下架
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <div class="container">
      <span style="color: #303133"
        ><a-icon type="unordered-list" /> 商品列表</span
      >
      <a-button class="add-btn" @click="showAddModal">
        <a-icon type="plus" /> 添加
      </a-button>
    </div>

    <a-table
      rowKey="id"
      :columns="columns"
      :data-source="this.data"
      :pagination="this.pagination"
    >
      <template v-slot:type="record">
        {{ goodType[record.typeid - 1].type }}
      </template>
      <template v-slot:brand="record">
        {{ brand[record.brandid - 1].brand }}
        <!-- {{ record.brandid - 1 }} -->
        <!-- {{ record }} -->
      </template>
      <template v-slot:racking="record">
        {{ record.racking ? "是" : "否" }}
      </template>
      <template v-slot:action="record">
        <a-button type="primary" size="small" @click="showEditModal(record)">
          编辑
        </a-button>
        <a-divider type="vertical" />
        <a-popconfirm
          title="  确定要删除商品吗 ?  "
          @confirm="() => onDelete(record.id)"
        >
          <a-button type="danger" size="small">
            删除
          </a-button>
        </a-popconfirm>
        <a-divider type="vertical" />
        <a-icon @click="showBannerModal(record)" type="plus-circle" />
      </template>
    </a-table>

    <!-- 添加商品 -->
    <a-modal
      title="添加商品"
      :visible="visible_add"
      @ok="addSubmit"
      @cancel="addCancel"
    >
      <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="商品名称">
          <a-input
            id="name"
            placeholder="请输入商品名称"
            v-model="addGood.name"
          />
        </a-form-item>
        <a-form-item label="商品价格">
          <a-input
            id="price"
            placeholder="请输入商品价格"
            v-model="addGood.price"
          />
        </a-form-item>
        <a-form-item label="商品类型">
          <a-select default-value="1" v-model="addGood.typeid">
            <a-select-option
              v-for="item in goodType"
              :key="item.id"
              :value="item.id"
            >
              {{ item.type }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="品牌">
          <a-select default-value="1" v-model="addGood.brandid">
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
            v-model="addGood.stock"
          />
        </a-form-item>
        <a-form-item label="商品总量">
          <a-input
            id="total"
            placeholder="请输入商品总量"
            v-model="addGood.total"
          />
        </a-form-item>
        <a-form-item label="是否上架">
          <a-radio-group name="racking" v-model="addGood.racking">
            <a-radio value="1">
              是
            </a-radio>
            <a-radio value="0">
              否
            </a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="商品简介">
          <a-textarea
            :rows="3"
            v-model="addGood.details"
            placeholder="请输入商品简介"
          />
        </a-form-item>
      </a-form>
    </a-modal>

    <!-- 修改商品 -->
    <a-modal
      title="信息修改"
      :visible="visible_edit"
      @ok="editSubmit"
      @cancel="editCancel"
    >
      <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="商品名称">
          <a-input id="name" v-model="editGood.name" />
        </a-form-item>
        <a-form-item label="商品价格">
          <a-input id="price" v-model="editGood.price" />
        </a-form-item>
        <a-form-item label="商品类型">
          <a-select v-model="editGood.typeid">
            <a-select-option
              v-for="item in goodType"
              :key="item.id"
              :value="item.id"
            >
              {{ item.type }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="商品品牌">
          <a-select v-model="editGood.brandid">
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
          <a-input id="stock" v-model="editGood.stock" />
        </a-form-item>
        <a-form-item label="商品总量">
          <a-input id="total" v-model="editGood.total" />
        </a-form-item>
        <a-form-item label="是否上架">
          <a-radio-group name="racking" v-model="editGood.racking">
            <a-radio :value="1">
              是
            </a-radio>
            <a-radio :value="0">
              否
            </a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="商品简介">
          <a-textarea :rows="3" v-model="editGood.details" />
        </a-form-item>
      </a-form>
    </a-modal>

    <!-- 加入到活动 -->
    <a-modal
      title="加入活动"
      :visible="visible_banner"
      @ok="bannerSubmit"
      @cancel="bannerCancel"
    >
      <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="选择活动">
          <a-select v-model="addToBanner.bannerid">
            <a-select-option
              v-for="item in banner"
              :key="item.id"
              :value="item.id"
            >
              {{ item.title }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
// import moment from 'moment';
import {
  selectAllGoods,
  deleteGoods,
  insertGoods,
  updateGoods,
  searchGoods,
  getBrand,
  getType,
  getBanner,
  addBannerGood
} from "@/api/goods.js";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "名称",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "价格",
    dataIndex: "price",
    key: "price"
  },
  {
    title: "类型",
    key: "typeid",
    // dataIndex: "typeid"
    scopedSlots: { customRender: "type" }
  },
  {
    title: "品牌",
    key: "brandid",
    // dataIndex: "brandid"
    scopedSlots: { customRender: "brand" }
  },
  {
    title: "库存",
    key: "stock",
    dataIndex: "stock"
  },
  {
    title: "总量",
    key: "total",
    dataIndex: "total"
  },
  {
    title: "是否上架",
    key: "racking",
    // dataIndex: "racking"
    scopedSlots: { customRender: "racking" }
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

const good = {
  name: "",
  price: "",
  stock: "",
  total: "",
  racking: "",
  typeid: "",
  details: ""
};

export default {
  data() {
    return {
      data: null,
      columns,
      visible_add: false,
      visible_edit: false,
      visible_banner: false,
      goodType: null,
      brand: null,
      banner: null,
      addToBanner: {},
      addGood: good,
      editGood: good,
      searchGood: {},
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
    getBrand().then(res => {
      // console.log(res.data.page.list);
      this.brand = res.data.page.list;
      // console.log(this.brand);
    });
    getType().then(res => {
      // console.log(res.data.page.list);
      this.goodType = res.data.page.list;
    });
    getBanner().then(res => {
      // console.log(res.data.page.list);
      this.banner = res.data.page.list;
      console.log(this.banner);
    });
  },
  mounted() {
    this.getList();
  },
  methods: {
    //获取商品
    getList() {
      selectAllGoods().then(res => {
        // console.log(res);
        // let time = this.$moment(res.data.page.list.rackingtime);
        // console.log(time);
        // time = this.$moment(time).format("YYYY-MM-DD");
        // console.log(time);
        let data = res.data.page.list;
        // console.log(data.typeid);
        // data.typeid = this.goodType[data.typeid];

        this.data = data;
      });
    },

    //删除商品
    onDelete(id) {
      let ids = [id];
      // let params = id;
      // console.log(params);
      console.log(ids);
      deleteGoods(ids).then(res => {
        if (res.data.code === 0) {
          console.log("删除成功");
          this.getList();
        }
      });
    },

    //新增商品对话框
    showAddModal() {
      this.visible_add = true;
    },

    // 添加到活动对话框
    showBannerModal(record) {
      this.addToBanner.productid = record.id;
      this.visible_banner = true;
    },

    //添加商品
    addSubmit() {
      this.visible_add = false;
      this.addGood.sales = 0;
      this.addGood.rackingtime = new Date();
      console.log(this.addGood);
      insertGoods(this.addGood).then(res => {
        if (res.data.code === 0) {
          console.log("添加成功");
          this.getList();
        }
      });
      this.addGood = {};
    },
    addCancel() {
      this.visible_add = false;
    },

    //编辑商品对话框
    showEditModal(record) {
      this.editGood = record;
      this.visible_edit = true;
    },

    // 修改商品信息
    editSubmit() {
      this.visible_edit = false;
      updateGoods(this.editGood).then(res => {
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

    // 添加到活动
    bannerSubmit() {
      console.log(this.addToBanner);
      addBannerGood(this.addToBanner).then(res => {
        if (res.data.code === 0) {
          this.$success({
            title: "添加成功"
          });
          console.log("添加成功");
          this.getList();
        }
      });
      this.addToBanner = {};
      this.visible_banner = false;
      // updateGoods(this.editGood).then(res => {
      //   if (res.data.code === 0) {
      //     console.log("编辑成功");
      //     this.getList();
      //   }
      // });
    },
    bannerCancel() {
      // this.getList();
      this.addToBanner = {};
      this.visible_banner = false;
    },

    //重置搜索
    reset() {
      this.searchGood = {};
      this.getList();
    },

    //搜索
    search() {
      console.log(this.searchGood);
      searchGoods(this.searchGood).then(res => {
        console.log(res);
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
.add-btn {
  float: right;
}
.search-form {
  margin: 0.5% 12% 0 4%;
}
</style>
