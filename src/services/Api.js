import axios from 'axios';

const api = axios.create({
    baseURL : 'https://api-casinha-de-pet.herokuapp.com/',
    // baseURL: 'http://127.0.0.1:8000/',
});


export default api;