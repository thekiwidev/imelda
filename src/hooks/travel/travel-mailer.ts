import { useMutation } from "@tanstack/react-query";
import { travelApplicationMailer } from "../../api/travel";

export const useTravelMailer = () => {
  return useMutation({
    mutationFn: travelApplicationMailer,
    onError: (err: { error: string }) => {
      console.log(err);
    },
  });
};
