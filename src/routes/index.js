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
            },
            {
                path: "add",
                name: "Add",
                component: () => import("../components/inputCard.vue")
            },
            {
                path: "edit/:id",
                name: "Edit",
                component: () => import("../components/inputCard.vue")
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router