import axios from "axios";

const BASE_URL = "htpp://localhost:3000/api/"
const TOKEN = "123456789"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token: `bearer ${TOKEN}`}
});