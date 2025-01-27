import api from "..";
import { TravelApplicationForm } from "./types";

export const travelApplicationMailer = async (
  payload: TravelApplicationForm
) => {
  return await api.post<{ message: string }>(
    "/api/mailer/travel-application",
    payload
  );
};
