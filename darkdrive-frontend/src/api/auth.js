// auth.js
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND;
const API_URL = `${BACKEND_URL}/auth`;

export const logout = () => {
	localStorage.removeItem("userToken");
};

export const getToken = () => {
	return localStorage.getItem("userToken");
};

export const isAuthenticated = () => {
	return !!getToken();
};

axios.interceptors.request.use(
	(config) => {
		const token = getToken();
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

axios.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response?.status === 401) {
			logout();
			window.location.href = "/login";
		}
		return Promise.reject(error);
	}
);

export const loginUser = async (userData) => {
	try {
		const response = await axios.post(`${API_URL}/login`, userData);
		if (response.data) {
			localStorage.setItem("userToken", response.data);
		}
		return response.data;
	} catch (err) {
		throw err.response.data;
	}
};

export const signupUser = async (userData) => {
	try {
		const response = await axios.post(`${API_URL}/register`, userData);
		return response.data;
	} catch (err) {
		throw err.response.data;
	}
};
