

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  User,
  Mail,
  Phone,
  Folder,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import {
  contactSchema,
  ContactFormData,
} from "@/lib/validations/contactSchema";

import { leadService } from "@/lib/services/leadService";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({
    type: null,
    message: null,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (
    data: ContactFormData
  ) => {
    setSubmitStatus({
      type: null,
      message: null,
    });

    try {
      await leadService.createLead({
        type: "contact",
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
        status: "new",
      });

      reset();

      setSubmitStatus({
        type: "success",
        message:
          "Your message has been sent successfully. We'll get back to you soon.",
      });
    } catch (error) {
      console.error(error);

      setSubmitStatus({
        type: "error",
        message:
          "Something went wrong. Please try again later.",
      });
    }
  };

  const onInvalid = () => {
    setSubmitStatus({
      type: "error",
      message:
        "Please fill all required fields correctly.",
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl border bg-background p-6 shadow-sm md:p-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">
          Get in Touch
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Have questions or want to work together?
          Send us a message.
        </p>
      </div>

      {submitStatus.type && (
        <div
          className={`mb-6 flex items-start gap-3 rounded-xl border p-4 text-sm ${
            submitStatus.type === "success"
              ? "border-green-200 bg-green-50 text-green-700"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {submitStatus.type === "success" ? (
            <CheckCircle2 className="h-5 w-5 shrink-0" />
          ) : (
            <AlertCircle className="h-5 w-5 shrink-0" />
          )}

          <p>{submitStatus.message}</p>
        </div>
      )}

      <form
        noValidate
        onSubmit={handleSubmit(
          onSubmit,
          onInvalid
        )}
        className="space-y-5"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium">
              <User className="h-4 w-4" />
              Full Name
            </label>

            <Input
              {...register("name")}
              placeholder="John Doe"
              className={
                errors.name
                  ? "border-red-500 focus-visible:ring-red-500"
                  : ""
              }
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium">
              <Mail className="h-4 w-4" />
              Email
            </label>

            <Input
              type="email"
              {...register("email")}
              placeholder="john@example.com"
              className={
                errors.email
                  ? "border-red-500 focus-visible:ring-red-500"
                  : ""
              }
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium">
              <Phone className="h-4 w-4" />
              Phone Number
            </label>

            <Input
              {...register("phone")}
              placeholder="+91 9876543210"
              className={
                errors.phone
                  ? "border-red-500 focus-visible:ring-red-500"
                  : ""
              }
            />

            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium">
              <Folder className="h-4 w-4" />
              Subject
            </label>

            <Input
              {...register("subject")}
              placeholder="Project Inquiry"
              className={
                errors.subject
                  ? "border-red-500 focus-visible:ring-red-500"
                  : ""
              }
            />

            {errors.subject && (
              <p className="mt-1 text-sm text-red-500">
                {errors.subject.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium">
            <MessageSquare className="h-4 w-4" />
            Message
          </label>

          <Textarea
            rows={5}
            {...register("message")}
            placeholder="Tell us about your project..."
            className={
              errors.message
                ? "border-red-500 focus-visible:ring-red-500"
                : ""
            }
          />

          {errors.message && (
            <p className="mt-1 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
}