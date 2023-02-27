import { md5 } from "../composables/md5.js";

async function userLogin(email, password) {
    console.log(email);
    let error = null;
    let user = {};
    try {
        const resp = await fetch("http://localhost:3000/users");
        if (!resp.ok) {
            throw Error("Fetch Users Error");
        }
        const data = await resp.json();
        const users = data.filter((item) => {
            return item.email === email;
        });
        if (users.length == 0) {
            throw Error("Email not found");
        }
        user = users[0];
        if (user.password !== md5(password)) {
            throw Error("Invalid Password");
        }
    } catch (err) {
        error = err.message;
    }
    return {
        error,
        user,
    };
}

async function getUsers() {
    let error = null;
    let users = [];
    try {
        const resp = await fetch("http://localhost:3000/users");
        if (!resp.ok) {
            throw Error("Fetch Users Error");
        }
        users = await resp.json();
    } catch (err) {
        error = err.message;
    }
    return {
        error,
        users,
    };
}

async function getUser(id) {
    console.log(id);
    let error = null;
    let user = {};
    try {
        const resp = await fetch("http://localhost:3000/user/" + id);
        if (!resp.ok) {
            throw Error("Fetch User Error");
        }
        user = await resp.json();
    } catch (err) {
        error = err.message;
    }
    return {
        error,
        user,
    };
}
export { userLogin, getUsers, getUser };
