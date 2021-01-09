import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(VueRouter);

// 解决路由地址重复的报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const routes = [
  {
    path: "/login",
    hideInMenu: true,
    component: () => import("./views/Admin/Login")
  },
  {
    path: "/admin",
    hideInMenu: true,
    // component: { render: h => h("router-view") },
    component: () =>
      import(/* webpackChunkName: "layout" */ "./layouts/LoginLayout"),
    children: [
      {
        path: "/admin",
        redirect: "/admin/login"
      },
      {
        path: "/admin/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/Admin/Login")
      },
      {
        path: "/admin/register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/Admin/Register")
      }
    ]
  },
  {
    path: "/",
    // breadcrumbName: "首页",
    component: () =>
      import(/* webpackChunkName: "layout" */ "./layouts/BasicLayout"),
    children: [
      // analysis
      {
        path: "/",
        redirect: "/login"
      },
      {
        path: "/analysis",
        name: "analysis",
        breadcrumbName: "统计",
        meta: { icon: "pie-chart", title: "统计" },
        component: () =>
          import(/* webpackChunkName: "analysis" */ "./views/Analysis/Analysis")
      },
      // goods
      {
        path: "/goods",
        name: "goods",
        breadcrumbName: "商品",
        meta: { icon: "appstore", title: "商品管理" },
        component: { render: h => h("router-view") },
        children: [
          {
            path: "/goods/list",
            name: "goodslist",
            breadcrumbName: "商品列表",
            meta: { title: "商品列表" },
            component: () =>
              import(/* webpackChunkName: "goods" */ "./views/Goods/GoodsList")
          },
          {
            path: "/goods/add",
            name: "addgoods",
            breadcrumbName: "添加商品",
            meta: { title: "添加商品" },
            component: () =>
              import(/* webpackChunkName: "goods" */ "./views/Goods/AddGoods")
          },
          {
            path: "/goods/type",
            name: "goodtype",
            breadcrumbName: "商品类型",
            meta: { title: "商品类型" },
            component: () =>
              import(/* webpackChunkName: "goods" */ "./views/Goods/GoodType")
          },
          {
            path: "/goods/brand",
            name: "goodbrand",
            breadcrumbName: "品牌管理",
            meta: { title: "品牌管理" },
            component: () =>
              import(/* webpackChunkName: "goods" */ "./views/Goods/GoodBrand")
          }
        ]
      },
      // Orders
      {
        path: "/orders",
        name: "orders",
        breadcrumbName: "订单",
        meta: { icon: "barcode", title: "订单管理" },
        component: { render: h => h("router-view") },
        children: [
          {
            path: "/orders/list",
            name: "orderslist",
            breadcrumbName: "订单列表",
            meta: { title: "订单列表" },
            component: () =>
              import(
                /* webpackChunkName: "orders" */ "./views/Orders/OrdersList"
              )
          },
          {
            path: "/orders/detail",
            name: "orderdetail",
            hideInMenu: true,
            meta: { title: "订单详情" },
            component: () =>
              import(
                /* webpackChunkName: "orders" */ "./views/Orders/OrderDetail"
              )
          }
        ]
      },
      // Activities
      {
        path: "/activities",
        name: "activities",
        breadcrumbName: "活动",
        meta: { icon: "schedule", title: "活动管理" },
        component: { render: h => h("router-view") },
        children: [
          {
            path: "/activities/list",
            name: "activitieslist",
            breadcrumbName: "活动列表",
            meta: { title: "活动列表" },
            component: () =>
              import(
                /* webpackChunkName: "activities" */ "./views/Activities/ActivitiesList"
              )
          },
          {
            path: "/activities/add",
            name: "addactivities",
            breadcrumbName: "新增活动",
            meta: { title: "新增活动" },
            component: () =>
              import(
                /* webpackChunkName: "activities" */ "./views/Activities/AddActivities"
              )
          },
          {
            path: "/activities/setgood",
            name: "setgood",
            hideInMenu: true,
            meta: { title: "设置商品" },
            component: () =>
              import(
                /* webpackChunkName: "orders" */ "./views/Activities/SetGood"
              )
          }
        ]
      },
      // Users
      {
        path: "/users",
        name: "users",
        breadcrumbName: "用户",
        meta: { icon: "team", title: "用户管理" },
        component: { render: h => h("router-view") },
        children: [
          {
            path: "/users/list",
            name: "userslist",
            breadcrumbName: "用户列表",
            meta: { title: "用户列表" },
            component: () =>
              import(/* webpackChunkName: "users" */ "./views/Users/UsersList")
          },
          {
            path: "/users/add",
            name: "addusers",
            breadcrumbName: "新增用户",
            meta: { title: "新增用户" },
            component: () =>
              import(/* webpackChunkName: "users" */ "./views/Users/AddUsers")
          }
        ]
      }
    ]
  },
  // Exception
  {
    path: "/403",
    name: "403",
    hideInMenu: true,
    component: () =>
      import(/* webpackChunkName: "exception" */ "@/views/Exception/403")
  },
  {
    path: "*",
    name: "404",
    hideInMenu: true,
    component: () =>
      import(/* webpackChunkName: "exception" */ "@/views/Exception/404")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path != from.path) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
