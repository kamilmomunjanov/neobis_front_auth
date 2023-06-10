import ky from "ky";

const api = ky.create({
    prefixUrl: "http://35.234.124.146/",
    headers: {
        "content-type": "application/json",
        'Access-Control-Allow-Origin': '*'
    }})

// api.interceptors.request.use()

export default api;