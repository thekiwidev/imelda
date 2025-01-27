import { UserData } from "../../types";

export interface AuthPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  token: string;
  refreshToken: string;
  userData: UserData;
}

export interface SignupResponse {
  message: string;
}
