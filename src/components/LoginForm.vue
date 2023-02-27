<template>
    <div class="row justify-content-md-center">
        <div class="col-6">
            <h2>Login</h2>
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" placeholder="Email" v-model="email" required />
                </div>
                <div v-if="errors.length > 0">errors[0]</div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" placeholder="Password" v-model="password" required />
                </div>
                <button type="submit" class="btn btn-primary mt-4">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { userLogin } from "../composables/users.js";

const email = ref("user1@email.com");
const password = ref("abc123");
const errors = ref([]);

async function handleSubmit() {
    errors.value = await validateUser(email.value, password.value);
    if (errors.value.length > 0) {
        return;
    }
}

async function validateUser(email, password) {
    let errors = [];
    let { error, user } = await userLogin(email, password);
    console.log(user);
    if (error) {
        return [error];
    }
    return errors;
}
</script>
