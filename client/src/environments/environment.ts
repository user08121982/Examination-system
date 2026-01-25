export const environment = {
    production: true,
    baseURL: (window.__env.revProxy ? "/api/" : "https://examination-system-backend.onrender.com/")
};