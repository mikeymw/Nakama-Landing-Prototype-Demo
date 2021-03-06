 import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "*",
        redirect: "/",
    }
]

const router = new VueRouter(
    {
        "mode": "history",
        "base": process.env.BASE_URL,
        routes
    }
);

export default router;
