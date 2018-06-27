import vue from 'vue'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式

import router from "./router"

import main from "@/components/layout-main"
import { bussinessRouterMap } from "./router"

import store from "./store"


//进行路由转换
bussinessRouterMap.forEach((item, index) => {
    if (item.children && item.children.length > 0) return true;
    item = {
        name: item.name + "-index",
        path: "/main",
        component: main,
        redirect: item.path,
        icon:item.icon,
        children: [
            {
                name: item.name,
                path: item.path,
                component: item.component
            }
        ]
    }
    bussinessRouterMap[index] = item;
});
router.addRoutes(bussinessRouterMap);

router.beforeEach((to, from, next) => {
    if (!store.state.currentNav) {
        var name = to.matched[0].name;
        store.commit("SET_NAV", name);
    }
    NProgress.start();
    next();
})
router.afterEach(() => { NProgress.done(); })