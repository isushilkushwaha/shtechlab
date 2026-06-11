import { z } from "zod";

export const projectSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters"),

  email: z
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number is too long"),

  companyName: z
    .string()
    .min(2, "Company name is required"),

  projectType: z
    .string()
    .min(1, "Please select a project type"),

  budget: z
    .string()
    .min(1, "Please select a budget range"),

  timeline: z
    .string()
    .min(1, "Please select a timeline"),

  projectDescription: z
    .string()
    .min(
      20,
      "Project description must be at least 20 characters"
    )
    .max(2000, "Project description is too long"),
});

export type ProjectFormData = z.infer<
  typeof projectSchema
>;