import toast from "react-hot-toast";

export const parseError = (error: { message: string }) => {
  const msg = error.message;
  if (msg) toast.error(msg);
  else toast.error(error.message);
};

export const getToken = (): string | null => {
  return localStorage.getItem("_user") || sessionStorage.getItem("_user");
};

export const getRefreshToken = (): string | null => {
  return localStorage.getItem("_rftoken") || sessionStorage.getItem("_rftoken");
};
