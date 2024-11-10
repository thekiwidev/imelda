import api from "../";
import { AuthPayload, LoginResponse, SignupResponse } from "./types";

export const createAccount = async (payload: AuthPayload) => {
  const response = await api.post<SignupResponse>("/auth/user/signup", payload);
  return response.data;
};

export const signIn = async (payload: AuthPayload) => {
  const response = await api.post<LoginResponse>("/auth/user/login", payload);
  return response.data;
};

export const clearToken = () => {
  localStorage.removeItem("_user");
  localStorage.removeItem("_rfToken");
  sessionStorage.removeItem("_user");
};
