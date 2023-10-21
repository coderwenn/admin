import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: () => import("../pages/home/index.vue")
        },
        {
            path: "/index",
            component: () => import("../components/HelloWorld.vue")
        }
    ]
})

export default router
