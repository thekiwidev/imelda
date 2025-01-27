export interface PaymentData {
  status?: string;
  tx_ref?: string;
  transaction_id?: string;
  amount?: string;
}

export interface UserData {
  uid: string;
  email: string;
  password: string;
  createdAt: string;
  role: "user" | "admin" | "staff";
  hasPaidForReservation?: boolean;
  paymentData?: PaymentData;
}

// Define the Application interface with generics
export interface Application<T, G> {
  title: G;
  user: string;
  data: T;
  status: "submitted" | "processing" | "completed";
}

export enum applicationTypes {
  reservation = "Spot Reservation",
  travel = "Travel Visa Application",
  study = "Study Visa Application",
}
