# eshop-manage-web

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 规范
1.路由
    按照路由层级，再routes文件夹下以文件夹树的形式体现路由,index.vue为当前文件夹树的路由组件
    |
    |Login-index.vue        /login
    |
    |Home-index.vue         /home
        |
        |xxManage1-index.vue    /home/xxManage1
        |
        |xxManage2=index.vue    /home/xxManage2
2.css预处理器
    使用less
3.ui框架
    使用antd组件库
    注意这里使用按需导入且使用babel-plugin-import，因此组件注册使用以下方式
    /xxx.vue
    import {Button} from 'antd-design-vue
    使用template编译需要在组件中注册，注册AButton的命名（因为我们一般用a-button作为标签来编译组件）
    components：{
        AButton:Button
    }
    不建议使用render进行jsx，我也没用过，可能项目还需要添加jsx编译的依赖
4.关于异步请求
    1.不建议在子组件中进行网络操作，这里的子组件指的是页面分割的ui模块
    2.我们希望网络请求操作在容器级别的组件进行（也就是路由组件）
    3.建议独立出一个action.js文件编写接口，便于维护