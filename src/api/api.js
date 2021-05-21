/* eslint-disable no-param-reassign */
import axios from 'axios';
// import * as SecureStore from 'expo-secure-store';

const instance = axios.create({
  baseURL: 'http://192.168.42.3:3000',
});

/*
instance.interceptors.request.use(
  async (config) => {
    const token = await SecureStore.getItemAsync('TOKEN');
    console.log(`token: ${token}`);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(config);
    return config;
  },
  (err) => Promise.reject(err),
);
*/

export default instance;
