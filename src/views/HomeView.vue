<template>
    <div class="logo">
        <img src="balancesheet.jpg" />
    </div>
    <LoginForm v-if="user" />
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import LoginForm from "../components/LoginForm.vue";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

console.log("111", user.value);
</script>

<style scoped>
.logo {
    margin: 2em 0;
    text-align: center;
}
.logo img {
    width: 7em;
}
</style>
