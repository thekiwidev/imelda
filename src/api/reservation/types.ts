import { Application, applicationTypes } from "../../types";

export interface SpotReservationForm {
  // Basic Information
  fullName: string;
  email: string;
  phone?: string;
  location: string;

  //Passport Information
  passportType: string;
  passportNumber: string;
  passportBookletCount: number;
  passportIssuingCountry: string;
  passportIssuingCity: string;
  passportIssuingStateProvince: string;
  passportIssuingCountryRegion: string;
  passportIssuanceDate: string;
  passportExpirationDate: string;
  lostOrStolenPassport?: boolean;

  // Professional Information
  profession: string;
  qualifications: string[]; // Array of qualifications
  yearsOfExperience: number;
  skills: string[]; // Array of skills

  // Job Preferences
  desiredJobTitle?: string;
  desiredLocation?: string[]; // Array of preferred locations
  visaSponsorshipRequired: boolean;

  // Media Links
  resumeLink?: string;
  portfolioLink?: string;
  videoIntroductionLink?: string;
  additionalLinks?: string[]; // Array of additional links

  // Availability
  availabilityDate?: Date;
  preferredContactTime?: string;

  // Opportunity Matching
  opportunityType?: string; // e.g., "Full-Time", "Contract"
  industries?: string[]; // Array of preferred industries
  preferredCompanySize?: string;

  // Reservation Details
  reservationDate: Date;
  reservationStatus: "active" | "matched" | "pending" | "expired";
  matchedOpportunities?: string[]; // Array of matched opportunity IDs or details

  // Optional Extras
  notes?: string;
  referrerName?: string;
  referrerContact?: string;
}

export interface SpotReservationResponse
  extends Application<SpotReservationForm, applicationTypes.reservation> {
  id: string;
}
