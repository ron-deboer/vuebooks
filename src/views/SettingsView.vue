<template>
    <div class="col-6">
        <form @submit.prevent="handleSubmit">
            <div class="row justify-content-md-center">
                <div class="col">
                    <form @submit.prevent="handleSubmit">
                        <div class="form-group">
                            <label>App Name</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Email"
                                v-model="control.appname"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label>GL Bank Account</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="GL Bank Account"
                                v-model="control.glbankaccount"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label>GL GST Account</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="GL GST Account"
                                v-model="control.glgstaccount"
                                required
                            />
                        </div>
                        <div class="row mt-4">
                            <div class="col-6">
                                <button type="submit" class="btn">Save</button>
                            </div>
                            <div class="col-6 text-end">
                                <RouterLink to="/" class="btn">Cancel</RouterLink>
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
import { useControlStore } from "@/stores/control";
import { storeToRefs } from "pinia";

import { useRoute } from "vue-router";
const route = useRoute();
const id = route.params.id;

const controlStore = useControlStore();
const { control } = storeToRefs(controlStore);
const { fetchControl } = controlStore;

onMounted(() => {
    fetchControl(id);
});

function handleSubmit() {
    error.value = validateForm();
    if (!error.value) {
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
