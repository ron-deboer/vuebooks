import { defineStore } from "pinia";
import axios from "axios";

export const useControlStore = defineStore("controlStore", {
    state: () => ({
        control: {},
    }),
    actions: {
        async fetchControl(id) {
            try {
                const res = await axios.get("http://localhost:3000/control/" + id);
                this.control = res.data;
                console.log("control", this.control);
            } catch (err) {
                console.error(err);
            }
        },
    },
});
