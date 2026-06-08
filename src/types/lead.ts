export interface Lead {
  id: string;

  name: string;
  email: string;
  phone: string;

  company?: string;
  service?: string;
  budget?: string;
  message?: string;

  status?: string;

  createdAt?: {
    seconds: number;
  };
}