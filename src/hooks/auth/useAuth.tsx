import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { createAccount, signIn } from "../../api/auth";
import { parseError } from "../../utils";

export const useCreateAccount = () => {
  return useMutation({
    mutationFn: createAccount,
    onSuccess: (data) => data,
    onError: (error: AxiosError) => {
      if (error.response) {
        parseError(error.response.data as { message: string });
      } else {
        // Handle cases where response is undefined, like network errors
        console.error("Network error or no response received:", error.message);
      }
    },
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: signIn,
    onSuccess: (data) => data,
    onError: (error: AxiosError) => {
      if (error.response) {
        parseError(error.response.data as { message: string });
      } else {
        // Handle cases where response is undefined, like network errors
        console.error("Network error or no response received:", error.message);
      }
    },
  });
};
