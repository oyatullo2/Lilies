import axios from "axios";

const api = axios.create({
    baseURL: 'https://food-recipe-app-backend-aaka.onrender.com/api/auth'
})

export default api;