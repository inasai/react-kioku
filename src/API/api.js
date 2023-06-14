import axios from "axios";

export const API_URL = 'https://6454ba85f803f345762f9c56.mockapi.io';

const handleSuccess = (res) => res.data;
const handleError = (err) => Promise.reject(err.message);

const Api = axios.create({
  baseURL: API_URL,
});

Api.interceptors.request.use(function (config) {
	let token;
	if (typeof window !== 'undefined') {
		token = localStorage.getItem("token");
	}
	if (token) {
		config.headers['Authorization'] = `Bearer ${token}`;
	}
	return config;
}, function (error) {
	return Promise.reject(error);
});

export const ApiCall = (method, url, data) => Api[method](url, data).then(handleSuccess).catch(handleError);