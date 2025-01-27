import api from "..";
import { StudentApplicationForm } from "./types";

export const studentApplicationMailer = async (
  payload: StudentApplicationForm
) => {
  return await api.post<{ message: string }>(
    "/api/mailer/student-application",
    payload
  );
};
