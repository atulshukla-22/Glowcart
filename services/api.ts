import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 10000,
});

export const fetchProducts = async () => {
  const res = await api.get('/products');
  return res.data.products;
};
