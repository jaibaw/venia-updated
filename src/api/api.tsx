import axios from "axios";

const api = axios.create({
    baseURL: 'https://fakestoreapi.com',
    timeout: 90000,
    headers: { "Content-Type": "application/json" }
});

api.interceptors.request.use(
    (    config: any) => {
        //config.headers.AppName = APP_NAME;
        //config.headers.AuthenticationToken = AUTH_TOKEN;

        return config;
    },
    (    err: any) => Promise.reject(err)
);

export default api;
