export type ApplicationStatus =
  | "Applied"
  | "Interview"
  | "Offer"
  | "Rejected";

export interface Application {
  id: string;
  company: string;
  position: string;
  status: ApplicationStatus;
  applicationDate: string;
  notes: string;
}