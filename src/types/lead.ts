export interface Lead {
  id?: string;

  type:
    | "contact"
    | "consultation"
    | "project";

  name: string;
  email: string;
  phone: string;

  subject?: string;
  message?: string;

  businessName?: string;
  service?: string;
  preferredCallTime?: string;

  companyName?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  projectDescription?: string;

  status:
    | "new"
    | "contacted"
    | "qualified"
    | "proposal_sent"
    | "won"
    | "lost";

  createdAt?: any;
}