import { createRouter, createWebHistory } from "vue-router";
import store from "./../store/index.js";

const routes = [
    {
        path: "/",
        name: "Login",
        component: () =>
            import(/* webpackChunkName: "login" */ "../views/Login.vue"),
        meta: {
            guest: true,
        },
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () =>
            import(
                /* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"
            ),
        meta: {
            auth: true,
        },
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: {
            template: '<h2 style="text-align:center">Page Not Found</h2>',
        },
    },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    store.dispatch("systemInfo");
    if (
        (to.meta?.auth &&
        !to.meta?.guest &&
        store.state.user?.details === null) || store.state.user?.details?.is_admin === 1
    ) {
        next({ name: "Login" });
    } else next();
});

export default router;