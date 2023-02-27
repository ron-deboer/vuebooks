<script setup>
import { ref } from "vue";
import router from "./router";
const sideNav = ref();

function navigateTo(route, event) {
    event.preventDefault();
    router.push(route);
    closeNav();
}
function openNav() {
    const sidenav = sideNav.value;
    sidenav.style.width = "250px";
    return false;
}
function closeNav() {
    const sidenav = sideNav.value;
    sidenav.style.width = "0";
    return false;
}
</script>

<template>
    <div ref="sideNav" class="sidenav">
        <a href="#" class="closebtn" @click="closeNav()">×</a>
        <a href="#" @click="navigateTo('/', $event)">Home</a>
        <a href="#" @click="navigateTo('/activity', $event)">Activity</a>
        <a href="#" @click="navigateTo('/settings/1', $event)">Banks/Cards</a>
        <a href="#" @click="navigateTo('/categories', $event)">Categories</a>
        <a href="#" @click="navigateTo('/users', $event)">Users</a>
        <a href="#" @click="navigateTo('/logout', $event)">Logout</a>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 text-center">
                <div class="row header">
                    <div class="col-1 text-start">
                        <span style="font-size: 30px; cursor: pointer" @click="openNav()">☰</span>
                    </div>
                    <div class="col text-center">
                        <span class="title align-middle">VUE BOOKS</span>
                    </div>
                    <div class="col-1">&nbsp;</div>
                </div>
            </div>
        </div>
    </div>
    <div class="container main">
        <router-view />
    </div>
</template>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.sidenav {
    background-color: #ccc;
    color: #444;
    height: 100%;
    left: 0;
    overflow-x: hidden;
    padding-top: 60px;
    position: fixed;
    top: 0;
    transition: 0.5s;
    width: 0;
    z-index: 1;
}
.sidenav a {
    color: #444;
    display: block;
    font-size: 25px;
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    transition: 0.3s;
}
.sidenav a:hover,
.offcanvas a:focus,
.offcanvas a:focus {
    color: crimson;
}
.sidenav .closebtn {
    font-size: 36px;
    margin-left: 50px;
    position: absolute;
    right: 25px;
    top: 0;
}
.title {
    font-size: 18px;
    color: #888;
}
.header {
    line-height: 30px;
}
.main {
    padding: 40px;
    background: #fff;
}
</style>
