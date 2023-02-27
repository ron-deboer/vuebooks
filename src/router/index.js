import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SettingsView from "../views/SettingsView.vue";
import UserListView from "../views/UserListView.vue";
import UserEditView from "../views/UserEditView.vue";
import CategoryListView from "../views/CategoryListView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/users",
        name: "users",
        component: UserListView,
    },
    {
        path: "/user/:id",
        name: "user",
        component: UserEditView,
    },
    {
        path: "/settings/:id",
        name: "settings",
        component: SettingsView,
    },
    {
        path: "/categories",
        name: "categories",
        component: CategoryListView,
    },
    {
        path: "/category/:id",
        name: "category",
        component: UserEditView,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
