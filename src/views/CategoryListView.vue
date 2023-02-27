<template>
    <div class="row justify-content-md-center">
        <div class="row">
            <div class="col">
                <h2>Categories</h2>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <table class="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Type</th>
                            <th>
                                <RouterLink to="/category/0" class="btn">New</RouterLink>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="cat in categories" :key="cat.id">
                            <td>{{ cat.name }}</td>
                            <td>{{ cat.description }}</td>
                            <td>{{ cat.type }}</td>
                            <td>
                                <RouterLink :to="'/category/' + cat.id" class="btn">Edit</RouterLink>
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
import { useCategoryStore } from "@/stores/category";
import { storeToRefs } from "pinia";

const categoryStore = useCategoryStore();
const { categories } = storeToRefs(categoryStore);
const { fetchCategories } = categoryStore;

onMounted(() => {
    fetchCategories();
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
