<template>
  <div class="eshop-home">
    <a-layout class="eshop-home-container" style="min-height: 100vh">
      <a-layout-sider :trigger="null" v-model="collapsed" collapsible>
        <!-- <div class="logo">
          Eshop
        </div> -->
        <SiderMenu :collapsed="collapsed" />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="collapsed = !collapsed"
          />
          <!-- <span>
            <a-breadcrumb style="display:inline">
              <a-breadcrumb-item>首页</a-breadcrumb-item>
              <a-breadcrumb-item>{{ $route.breadcrumbName }}</a-breadcrumb-item>
            </a-breadcrumb>
          </span> -->
          <Header />
        </a-layout-header>
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff'
          }"
        >
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SiderMenu from "./SiderMenu";
export default {
  data() {
    return {
      collapsed: false,
      routes: [
        {
          path: "index",
          breadcrumbName: "home"
        },
        {
          path: "first",
          breadcrumbName: "first",
          children: [
            {
              path: "/general",
              breadcrumbName: "General"
            },
            {
              path: "/layout",
              breadcrumbName: "Layout"
            },
            {
              path: "/navigation",
              breadcrumbName: "Navigation"
            }
          ]
        },
        {
          path: "second",
          breadcrumbName: "second"
        }
      ]
    };
  },
  components: {
    Header,
    Footer,
    SiderMenu
  }
};
</script>

<style scoped lang="less">
.trigger {
  padding: 0 16px;
  line-height: 64px;
  font-size: 16px;
}

.trigger:hover {
  background: #eeeeee;
}

.logo {
  height: 64px;
  line-height: 64px;
  text-align: center;
  overflow: hidden;
  color: #ffffff;
}

/* .eshop-home {
  min-height: 100%;
  width: 100%;
}
.eshop-home-container {
  min-height: 100%;
  width: 100%;
} */
</style>
