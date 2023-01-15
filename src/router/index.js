import { createRouter, createWebHistory } from "vue-router";

const github = { template: '<div>github</div>'}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Index",
      component: () => import("@/views/Indexview.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/views/Dashboardview.vue"),
    },
    {
      path: "/tjkt",
      name: "tjkt",
      component: () => import("@/views/Tjkt/TjktView.vue"),
    },
   {
      path: "/tbsm",
      name: "tbsm",
      component: () => import("@/views/Tbsm/TbsmView.vue"),
    },
    {
      path: "/pplg",
      name: "pplg",
      component: () => import("@/views/Pplg/PplgView.vue"),
    },
    {
      path: "/dkv",
      name: "dkv",
      component: () => import("@/views/Dkv/DkvView.vue"),
    },
    {
      path: "/toi",
      name: "toi",
      component: () => import("@/views/Toi/ToiView.vue"),
    },

    {
      path: "/dkv10",
      name: "dkv10",
      component: () => import("@/views/Dkv/Kelas/Dkv10View.vue"),
    },

    {
      path: "/dkv11",
      name: "dkv11",
      component: () => import("@/views/Dkv/Kelas/Dkv11View.vue"),
    },

    {
      path: "/dkv12",
      name: "dkv12",
      component: () => import("@/views/Dkv/Kelas/Dkv12View.vue"),
    },

    {
      path: "/pplg10",
      name: "pplg10",
      component: () => import("@/views/Pplg/Kelas/Pplg10View.vue"),
    },

    {
      path: "/pplg11",
      name: "pplg11",
      component: () => import("@/views/Pplg/Kelas/Pplg11View.vue"),
    },

    {
      path: "/pplg12",
      name: "pplg12",
      component: () => import("@/views/Pplg/Kelas/Pplg12View.vue"),
    },

    {
      path: "/tbsm10",
      name: "tbsm10",
      component: () => import("@/views/Tbsm/Kelas/Tbsm10View.vue"),
    },

    {
      path: "/tbsm11",
      name: "tbsm11",
      component: () => import("@/views/Tbsm/Kelas/Tbsm11View.vue"),
    },

    {
      path: "/tbsm12",
      name: "tbsm12",
      component: () => import("@/views/Tbsm/Kelas/Tbsm12View.vue"),
    },

    {
      path: "/tjkt10",
      name: "tjkt10",
      component: () => import("@/views/Tjkt/Kelas/Tjkt10View.vue"),
    },

    {
      path: "/tjkt11",
      name: "tjkt11",
      component: () => import("@/views/Tjkt/Kelas/Tjkt11View.vue"),
    },

    {
      path: "/tjkt12",
      name: "tjkt12",
      component: () => import("@/views/Tjkt/Kelas/Tjkt12View.vue"),
    },

    {
      path: "/toi10",
      name: "toi10",
      component: () => import("@/views/Toi/Kelas/Toi10View.vue"),
    },

    {
      path: "/toi11",
      name: "toi11",
      component: () => import("@/views/Toi/Kelas/Toi11View.vue"),
    },

    {
      path: "/toi12",
      name: "toi12",
      component: () => import("@/views/Toi/Kelas/Toi12View.vue"),
    },

    { 
       path: '/github',
       beforeEnter() {location.href = 'http://github.com/RifkyPutraRamadhan'},
       component: github
     },
  ],
});

export default router;
