import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: () => import('@/pages/home/index.vue')
        },
        {
            path: "/login",
            component: () => import("../pages/login/index.vue")
        },
        {
            path: "/index",
            component: () => import("../components/HelloWorld.vue")
        }
    ]
})

export default router
