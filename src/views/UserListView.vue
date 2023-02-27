<template>
    <div class="row justify-content-md-center">
        <div class="row">
            <div class="col">
                <h2>Users</h2>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <table class="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col">Active</th>
                            <th>
                                <RouterLink to="/user/0" class="btn">New</RouterLink>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <td>{{ user.email }}</td>
                            <td>{{ user.role }}</td>
                            <td>{{ user.active }}</td>
                            <td>
                                <RouterLink :to="'/user/' + user.id" class="btn">Edit</RouterLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { users } = storeToRefs(userStore);
const { fetchUsers } = userStore;

onMounted(() => {
    fetchUsers();
});
</script>

<style scoped>
.btn {
    background: rgb(15, 116, 15);
    color: white;
    padding: 0;
    width: 70px;
    border-radius: 10px;
}
</style>
