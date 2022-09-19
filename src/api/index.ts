import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

const {get} = axiosClient;

const API_ENDPOINTS = {
  products: ({signal}: {signal?: AbortSignal}) => get('/products', {signal}),
};

export default API_ENDPOINTS;
