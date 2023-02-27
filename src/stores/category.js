import { defineStore } from "pinia";
import axios from "axios";

export const useCategoryStore = defineStore("categoryStore", {
    state: () => ({
        categories: [],
        category: {},
    }),
    actions: {
        async fetchCategories() {
            try {
                const res = await axios.get("http://localhost:3000/categories");
                this.categories = res.data.sort((i1, i2) => i1.type < i2.type);
            } catch (err) {
                console.error(err);
            }
        },
        async fetchCategory(id) {
            try {
                const res = await axios.get("http://localhost:3000/categories/" + id);
                this.category = res.data;
            } catch (err) {
                console.error(err);
            }
        },
    },
});
