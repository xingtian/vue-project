import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import full from "@/components/layout-LR"


//固定模块注册
export const constantRouterMap = [{
    name: "Pages",
    path: "/pages",
    redirect: "/pages/404",
    component: {
        render: c => c("router-view")
    },
    children: [{
        name: "Page404",
        path: "404",
        component: () =>
            import("views/errorPages/Page404")
    }, {
        name: "Page500",
        path: "500",
        component: () =>
            import("views/errorPages/Page500")
    }]
}, { path: '*', redirect: '/pages/404', hidden: true }];

//业务模块注册
export const bussinessRouterMap = [{
    name: "首页",
    path: "/",
    icon: "fa fa-home",
    component: full,
    redirect: "/modules",
    children: [
        {
            name: "功能集合",
            path: 'modules',
            icon: "fa fa-table",
            component: () => import("views/modules")
        },
        {
            name: "身份验证",
            path: 'auth',
            icon: "fa fa-user",
            component: () => import("views/auth/auth"),
            children: [{
                name: "QQ登陆验证",
                path: "qq",
                component: () => import("views/auth/qq")
            },
            {
                name: "4A验证",
                path: "4a",
                component: () => import("views/auth/4a")
            },
            {
                name: "Form验证",
                path: "form",
                component: () => import("views/auth/form")
            }
            ]
        },
        {
            name: "设备查询",
            icon: "fa fa-search",
            path: 'search',
            component: () => import("views/search")
        }
    ]
},
{
    name: "概览",
    path: "/introduction",
    component: () => import("views/introduction")
},
{
    name: "空间分析",
    path: "/geoAnalysis",
    component: () => import("views/geoAnalysis")
},
{
    name: "拓扑分析",
    path: "/topoAnalysis",
    component: () => import("views/topoAnalysis")
},
{
    name: "专题图",
    path: "/SpecMap",
    component: () => import("views/SpecMap")
},
{
    name: "应用服务",
    icon: "fa fa-globe",
    path: "/forService",
    component: () => import("views/forService")
}
]


let allRouter = constantRouterMap;

export default new Router({
    mode: 'hash',
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: allRouter
})