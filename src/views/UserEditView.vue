<template>
    <div class="col-6">
        <form @submit.prevent="handleSubmit">
            <div class="row justify-content-md-center">
                <div class="col">
                    <form @submit.prevent="handleSubmit">
                        <div class="form-group">
                            <label>Email address</label>
                            <input
                                type="email"
                                class="form-control"
                                placeholder="Email"
                                v-model="user.email"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Password"
                                v-model="user.password"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label>Role</label>
                            <select class="form-control" v-model="user.role">
                                <option value="A">Admin</option>
                                <option value="U">User</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Active</label>
                            <select class="form-control" v-model="user.active">
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>
                        <div class="row mt-4">
                            <div class="col-6">
                                <button type="submit" class="btn">Save</button>
                            </div>
                            <div class="col-6 text-end">
                                <RouterLink to="/users" class="btn">Cancel</RouterLink>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

import { useRoute } from "vue-router";
const route = useRoute();
const id = route.params.id;

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const { fetchUser, saveUser } = userStore;

onMounted(() => {
    if (id > 0) {
        fetchUser(id);
    } else {
        user.value = {
            id: 0,
            email: "iii@email.com",
            password: "xxxyyyzzz",
            role: "U",
            active: true,
        };
    }
});

function handleSubmit() {
    const errors = validateForm();
    console.log(user.value.id);
    if (!errors) {
        let data = Object.assign({}, user.value);
        delete data.id;
        saveUser(user.value.id, data);
        return;
    }
}

function validateForm() {
    let errors = [];
    return errors.length == 0 ? null : errors.join(", ");
}
</script>

<style scoped>
.btn {
    background: rgb(67, 15, 116);
    color: white;
    padding: 3px 0;
    width: 80px;
    border-radius: 10px;
}
</style>
