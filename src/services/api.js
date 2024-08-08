import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
const instance = axios.create({
    baseURL:baseURL,
    header:{
        "content-Type": "application/json",
    },
});

export default instance;