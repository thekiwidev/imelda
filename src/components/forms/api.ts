// Mailer API calls, ported from the previous site (src/api). axios is kept on purpose: the travel
// form posts a plain object with `Content-Type: multipart/form-data`, and axios turns it into
// FormData (files, arrays, empty values) exactly as the API already expects.
import axios from 'axios';
import type { StudentApplicationForm, TravelApplicationForm } from './types';

const devURL = 'http://localhost:2024';
const prodURL = 'https://mailer-api-8dnv.onrender.com';
const baseURL = import.meta.env.PUBLIC_MAILER_API_URL || (import.meta.env.PROD ? prodURL : devURL);

const api = axios.create({ baseURL });

export const studentApplicationMailer = (payload: StudentApplicationForm) =>
  api.post<{ message: string }>('/api/mailer/student-application', payload);

export const travelApplicationMailer = (payload: TravelApplicationForm) =>
  api.post<{ message: string }>('/api/mailer/travel-application', payload, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
