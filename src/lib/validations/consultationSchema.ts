import { z } from "zod";

export const consultationSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters"),

  email: z
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number is too long"),

  businessName: z
    .string()
    .min(2, "Business name is required"),

  service: z
    .string()
    .min(1, "Please select a service"),

  preferredCallTime: z
    .string()
    .optional(),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

export type ConsultationFormData = z.infer<
  typeof consultationSchema
>;