import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "../../api/utils";
import { AxiosError } from "axios";
import { parseError } from "../../utils";

export const useUploadFile = () => {
  return useMutation({
    mutationFn: uploadFile,
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
