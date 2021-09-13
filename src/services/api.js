import axios from "axios";

const api = axios.create({
    //baseURL: "http://localhost:3333",//Dev
    baseURL: "https://api-managerfx.herokuapp.com",//Heroku
    timeout: 10000,
});

export default api;
