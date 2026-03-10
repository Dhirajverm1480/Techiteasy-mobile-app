import axios from "axios";

// const apiClient = axios.create({
//     baseURL: "http://localhost:8080",
//     timeout: 5000,
// });

 export const apiClient = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 5000,
});

export default apiClient;