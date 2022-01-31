import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: "Home",
        path: "/",
        component: () => import("../views/Home.vue")
    },
    {
        name: "Keşfet",
        path: "/kesfet",
        component: () => import("../views/Home.vue")
    },
    {
        name: "Dizi",
        path: "/dizi",
        component: () => import("../views/Home.vue")
    },
    {
        name: "Trend",
        path: "/trend",
        component: () => import("../views/Home.vue")
    },
    {
        name: "Oyuncular",
        path: "/oyuncular",
        component: () => import("../views/Home.vue")
    },
    {
        name: "Kanallar",
        path: "/kanal",
        component: () => import("../views/Home.vue")
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router