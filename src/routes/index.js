import {  createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path : "/",
        name: "Dashboard",
        component:  () => import("../views/Main.vue"),
        children: [
            {
                path: "",
                name: "List",
                component: () => import("../components/List.vue")
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router