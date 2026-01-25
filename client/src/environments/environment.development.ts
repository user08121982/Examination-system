export const environment = {
    production: false,
    baseURL: (window.__env.revProxy ? "/api/" : "http://localhost:8000/")
};