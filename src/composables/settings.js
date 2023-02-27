async function fetchSettings() {
    let error = null;
    let data = {};
    try {
        const resp = await fetch("http://localhost:3000/control");
        if (!resp.ok) {
            throw Error("Fetch Settings Error");
        }
        data = await resp.json();
    } catch (err) {
        error = err.message;
    }
    return {
        error,
        ...data,
    };
}

export { fetchSettings };
