import api from "..";
import { FileUploadPayload } from "./types";

export const uploadFile = async (payload: FileUploadPayload) => {
  const { file, reason } = payload;
  const res = await api.post(`/utils/upload-file/${reason}`, file, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};
