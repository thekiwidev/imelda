import { useMutation } from "@tanstack/react-query";
import { studentApplicationMailer } from "../../api/students";

export const useStudentApplicationMailer = () => {
  return useMutation({
    mutationFn: studentApplicationMailer,
    onSuccess: (data) => data.data,
    onError: (err: { error: string }) => {
      console.log(err);
    },
  });
};
