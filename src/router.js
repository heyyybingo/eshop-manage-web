import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes=[
    {path:'/login',component:()=>import('./routes/login/index.vue')},
    {path:'/home',component:()=>import('./routes/home/index.vue')}

]

const router=new VueRouter({
    routes
})


export default router