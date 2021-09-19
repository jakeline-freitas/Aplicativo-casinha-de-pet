import axios from "axios";

const api = axios.create({
    baseURL : 'https://api-casinha-de-pet.herokuapp.com/',
});

export default api;