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

export default router
