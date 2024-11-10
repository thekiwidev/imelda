// noinspection SpellCheckingInspection

import axios, {AxiosError, AxiosRequestHeaders, AxiosResponse, InternalAxiosRequestConfig,} from "axios";
import toast from "react-hot-toast";
import {getRefreshToken, getToken} from "../utils";
import {clearToken} from "./auth";

const isProd = import.meta.env.PROD;

const baseURL = isProd
	? `https://meldy-server.onrender.com`
	: "http://localhost:2024";

const api = axios.create({baseURL});

const refreshAccessToken = async (): Promise<string | null> => {
	
	try {
		const refreshToken = getRefreshToken();
		
		if (!refreshToken) {
			toast.error("No refresh token available, Logout and Login again!");
		}
		
		localStorage.removeItem("_user")
		
		const response = await api.post<{ token: string }>(`/auth/user/refresh-token`, {
			refreshToken,
		});
		
		const {token} = response.data;
		
		localStorage.setItem("_user", token);
		
		return token;
	} catch (error) {
		console.error("Failed to refresh access token:", error);
		return null;
	}
};

async function updateToken() {
	const refreshToken = getRefreshToken()
	
	if (!refreshToken) {
		toast.error("No Refresh Token available, Please Log out and log in again!")
	}
	
	if (localStorage.getItem("_user")) {
		try {
			const response = await axios.post<{ token: string }>("/auth/user/refresh-token", {refreshToken})
			
			if (response.status === 403 || response.status === 401) {
				toast.error("Your session has expired. Please log in again.")
				clearToken()
			}
			
			const {token} = response.data;
			
			localStorage.setItem("_user", token)
		} catch (err) {
			toast.error(`Error: ${err}`)
		}
	}
	
	if (sessionStorage.getItem("_user")) {
		try {
			const response = await axios.post<{ token: string }>("/auth/user/refresh-token", {refreshToken})
			const {token} = response.data;
			
			sessionStorage.setItem("_user", token)
		} catch (err) {
			toast.error(`Error: ${err}`)
		}
	}
}

// Interceptor to add the Authorization header
api.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		const authToken = getToken();
		
		const newConfig = {...config};
		
		if (authToken) {
			newConfig.headers = {
				Authorization: `Bearer ${authToken}`,
				...newConfig.headers,
			} as AxiosRequestHeaders;
		}
		
		return newConfig;
	},
	(error) => Promise.reject(error)
);

// Interceptor to handle responses and refresh token if needed
api.interceptors.response.use(
	(response: AxiosResponse) => response,
	async (error: AxiosError) => {
		const originalRequest = error.config;
		
		// Check if the error is due to an expired token (401 or 403 status)
		if (
			originalRequest &&
			error.response &&
			(error.response.status === 401 || error.response.status === 403)
		) {
			// const newAccessToken = await refreshAccessToken();
			await updateToken()
			await refreshAccessToken()
			const _token = getToken()
			
			console.log("token updated", _token);
			
			if (_token) {
				// Update the original request with the new access token
				originalRequest.headers = {
					...originalRequest.headers,
					Authorization: `Bearer ${_token}`,
				} as AxiosRequestHeaders;
				
				console.log("Request completed with new token")
				
				// Retry the original request with the new token
				return api(originalRequest as InternalAxiosRequestConfig);
			} else {
				// If no refresh token is available, prompt the user to log in
				toast.error("Your session has expired. Please log in again.");
			}
		}
		
		return Promise.reject(error);
	}
);

export default api;
