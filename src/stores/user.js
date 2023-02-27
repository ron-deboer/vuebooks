import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("userStore", {
    state: () => ({
        users: [],
        user: {},
    }),
    actions: {
        async fetchUsers() {
            try {
                const res = await axios.get("http://localhost:3000/users");
                this.users = res.data;
                // console.log("users", this.users);
            } catch (err) {
                console.error(err);
            }
        },
        async fetchUser(id) {
            try {
                const res = await axios.get("http://localhost:3000/users/" + id);
                this.user = res.data;
                console.log("user", this.user);
            } catch (err) {
                console.error(err);
            }
        },
        async saveUser(id, data) {
            const headers = {
                "Content-Type": "application/json",
            };
            console.log(id, data);
            if (id === 0) {
                try {
                    const res = await axios.post("http://localhost:3000/users/", data, headers);
                } catch (err) {
                    console.error(err);
                }
            } else {
                try {
                    const res = await axios.put("http://localhost:3000/users/" + id, data, headers);
                } catch (err) {
                    console.error(err);
                }
            }
        },
    },
});
