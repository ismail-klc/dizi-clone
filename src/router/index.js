import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: "Episode",
        path: "/dizi/:slug/sezon-:seasonId/bolum-:bolumId",
        component: () => import("../views/Episode.vue")
    },
    {
        name: "Detay",
        path: "/dizi/:slug",
        component: () => import("../views/Detail.vue")
    },
    {
        name: "Oyuncu",
        path: "/oyuncu/:slug",
        component: () => import("../views/People.vue")
    },
    {
        name: "Keşfet",
        path: "/kesfet",
        component: () => import("../views/DiscoverShows.vue")
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
    {
        name: "Home",
        path: "/",
        component: () => import("../views/Home.vue")
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router