import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),

  email: z
    .email("Please enter a valid email address")
    .max(255, "Email is too long"),

  phone: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number is too long")
    .regex(
      /^[0-9+\-\s()]+$/,
      "Please enter a valid phone number"
    ),

  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .max(150, "Subject is too long"),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

export type ContactFormData = z.infer<
  typeof contactSchema
>;  