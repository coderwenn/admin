import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: () => import('@/pages/home/index.vue'),
            children: [
                {
                    path: '/user',
                    name: 'User',
                    component: () => import('@/pages/user/index.vue'),
                    meta: { title: '用户' },
                }
            ]
        },
        {
            path: "/login",
            component: () => import("@/pages/login/index.vue")
        },
        {
            path: "/index",
            component: () => import("@/components/HelloWorld.vue")
        }
    ]
})

const token = localStorage.getItem('code_token')
const limitsRouter = ['/login']

// token信息验证
router.beforeEach((to, from, next) => {
    next()
    // 无token走向管理页面
    // if(!limitsRouter.includes(to.path) && !token) {
    //     next('/login')
    // }
    // 无token走向登陆页面
    // if(limitsRouter.includes(to.path) && !token) {
    //     next()
    // }
    // 有token 登陆其他权限页面(待定)
    
})


export default router
