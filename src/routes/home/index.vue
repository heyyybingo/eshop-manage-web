<template>
  <div class="eshop-home">
      <a-layout class="eshop-home-container">
           <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
            <div class="logo" />
                <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
                    <a-menu-item>
                            <a-icon type="pie-chart" />
                            <span>统计</span>
                    </a-menu-item>
                    <a-sub-menu >
                        <span slot="title">
                            <a-icon type="appstore" />
                            <span>商品管理</span>
                        </span>
                        <a-menu-item>商品列表</a-menu-item>
                        <a-menu-item>上架商品</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu >
                        <span slot="title">
                            <a-icon type="barcode" />
                            <span>订单管理</span>
                        </span>
                        <a-menu-item>订单列表</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu >
                        <span slot="title">
                            <a-icon type="schedule" />
                            <span>活动管理</span>
                        </span>
                        <a-menu-item>活动列表</a-menu-item>
                        <a-menu-item>新增活动</a-menu-item>
                    </a-sub-menu>
                     <a-sub-menu >
                        <span slot="title">
                            <a-icon type="team" />
                            <span>用户管理</span>
                        </span>
                        <a-menu-item>用户列表</a-menu-item>
                        <a-menu-item>添加用户</a-menu-item>
                    </a-sub-menu>

                </a-menu>
            </a-layout-sider>
            <a-layout>
                <a-layout-header style="display:flex;justify-content:space-between;align-items:center;background: #fff; padding: 0 24px;">
                    <a-icon
                    class="trigger"
                    :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                    @click="() => (collapsed = !collapsed)"
                    />
                    <div>
                        <a-icon type="user" />
                        <a-dropdown>
                            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                                    User
                            <a-icon type="down" />
                            </a>
                            <a-menu slot="overlay">
                            <a-menu-item>
                                <a href="javascript:;">1st menu item</a>
                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:;">2nd menu item</a>
                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:;">3rd menu item</a>
                            </a-menu-item>
                            </a-menu>
                        </a-dropdown>
                    </div>
                </a-layout-header>
                <a-layout-content
                    :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
                >
                    Content
                </a-layout-content>
            </a-layout>

      </a-layout>

  </div>
</template>

<script>
import {Layout,Menu,Icon,Dropdown} from 'ant-design-vue'
export default {
  name: 'Hello',
  data() {
    return {
        collapsed:false
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  components: {
      ALayout:Layout,
      ALayoutHeader:Layout.Header,
      ALayoutSider:Layout.Sider,
      ALayoutContent:Layout.Content,
      AMenu:Menu,
      AMenuItem:Menu.Item,
      ASubMenu:Menu.SubMenu,
      AIcon:Icon,
      ADropdown:Dropdown
  },
};
</script>

<style lang="less" scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.eshop-home{
    height:100%;
    width:100%;
}
.eshop-home-container{
    height:100%;
    width:100%;
}

</style>
