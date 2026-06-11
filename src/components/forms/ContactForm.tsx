// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// import {
//   contactSchema,
//   ContactFormData,
// } from "@/lib/validations/contactSchema";

// import { leadService } from "@/lib/services/leadService";

// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";

// export default function ContactForm() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: {
//       errors,
//       isSubmitting,
//     },
//   } = useForm<ContactFormData>({
//     resolver: zodResolver(contactSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       phone: "",
//       subject: "",
//       message: "",
//     },
//   });

//   const onSubmit = async (
//     data: ContactFormData
//   ) => {
//     try {
//       await leadService.createLead({
//         type: "contact",
//         name: data.name,
//         email: data.email,
//         phone: data.phone,
//         subject: data.subject,
//         message: data.message,
//         status: "new",
//       });

//       reset();

//       alert(
//         "Your message has been submitted successfully."
//       );
//     } catch (error) {
//       console.error(error);

//       alert(
//         "Something went wrong. Please try again."
//       );
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="space-y-5"
//     >
//       {/* Name */}
//       <div>
//         <label className="mb-2 block text-sm font-medium">
//           Full Name
//         </label>

//         <Input
//           {...register("name")}
//           placeholder="John Doe"
//         />

//         {errors.name && (
//           <p className="mt-1 text-sm text-red-500">
//             {errors.name.message}
//           </p>
//         )}
//       </div>

//       {/* Email */}
//       <div>
//         <label className="mb-2 block text-sm font-medium">
//           Email Address
//         </label>

//         <Input
//           type="email"
//           {...register("email")}
//           placeholder="john@example.com"
//         />

//         {errors.email && (
//           <p className="mt-1 text-sm text-red-500">
//             {errors.email.message}
//           </p>
//         )}
//       </div>

//       {/* Phone */}
//       <div>
//         <label className="mb-2 block text-sm font-medium">
//           Phone Number
//         </label>

//         <Input
//           {...register("phone")}
//           placeholder="+91 9876543210"
//         />

//         {errors.phone && (
//           <p className="mt-1 text-sm text-red-500">
//             {errors.phone.message}
//           </p>
//         )}
//       </div>

//       {/* Subject */}
//       <div>
//         <label className="mb-2 block text-sm font-medium">
//           Subject
//         </label>

//         <Input
//           {...register("subject")}
//           placeholder="Website Development Inquiry"
//         />

//         {errors.subject && (
//           <p className="mt-1 text-sm text-red-500">
//             {errors.subject.message}
//           </p>
//         )}
//       </div>

//       {/* Message */}
//       <div>
//         <label className="mb-2 block text-sm font-medium">
//           Message
//         </label>

//         <Textarea
//           rows={5}
//           {...register("message")}
//           placeholder="Tell us about your requirements..."
//         />

//         {errors.message && (
//           <p className="mt-1 text-sm text-red-500">
//             {errors.message.message}
//           </p>
//         )}
//       </div>

//       {/* Submit Button */}
//       <Button
//         type="submit"
//         className="w-full"
//         disabled={isSubmitting}
//       >
//         {isSubmitting
//           ? "Submitting..."
//           : "Send Message"}
//       </Button>
//     </form>
//   );
// }


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
  AlertCircle 
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
  }>({ type: null, message: null });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus({ type: null, message: null });
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
        message: "Your message has been sent successfully! We'll get back to you soon.",
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again or email us directly.",
      });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-6 md:p-8 bg-card rounded-2xl border shadow-sm backdrop-blur-sm">
      {/* Form Header */}
      <div className="mb-6 text-center sm:text-left">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Get in Touch
        </h2>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Have questions or want to work together? Drop us a line.
        </p>
      </div>

      {/* Dynamic Status Notifications */}
      {submitStatus.type && (
        <div
          className={`mb-6 p-4 rounded-xl flex items-start gap-3 text-sm border transition-all ${
            submitStatus.type === "success"
              ? "bg-emerald-50/50 border-emerald-200 text-emerald-800 dark:bg-emerald-950/20 dark:border-emerald-900/50 dark:text-emerald-400"
              : "bg-destructive/5 border-destructive/20 text-destructive"
          }`}
        >
          {submitStatus.type === "success" ? (
            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
          )}
          <div>{submitStatus.message}</div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Responsive Grid Split for Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name */}
          <div className="space-y-2">
            <label className="text-xs font-semibold tracking-wide uppercase text-muted-foreground flex items-center gap-2">
              <User className="w-3.5 h-3.5" /> Full Name
            </label>
            <div className="relative">
              <Input
                {...register("name")}
                placeholder="John Doe"
                className={`h-11 rounded-xl bg-muted/30 focus-visible:ring-2 transition-all ${
                  errors.name ? "border-destructive focus-visible:ring-destructive/20" : ""
                }`}
              />
            </div>
            {errors.name && (
              <p className="text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-xs font-semibold tracking-wide uppercase text-muted-foreground flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" /> Email Address
            </label>
            <Input
              type="email"
              {...register("email")}
              placeholder="john@example.com"
              className={`h-11 rounded-xl bg-muted/30 focus-visible:ring-2 transition-all ${
                errors.email ? "border-destructive focus-visible:ring-destructive/20" : ""
              }`}
            />
            {errors.email && (
              <p className="text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Responsive Grid Split for Phone and Subject */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Phone */}
          <div className="space-y-2">
            <label className="text-xs font-semibold tracking-wide uppercase text-muted-foreground flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" /> Phone Number
            </label>
            <Input
              type="tel"
              {...register("phone")}
              placeholder="+1 (555) 000-0000"
              className={`h-11 rounded-xl bg-muted/30 focus-visible:ring-2 transition-all ${
                errors.phone ? "border-destructive focus-visible:ring-destructive/20" : ""
              }`}
            />
            {errors.phone && (
              <p className="text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <label className="text-xs font-semibold tracking-wide uppercase text-muted-foreground flex items-center gap-2">
              <Folder className="w-3.5 h-3.5" /> Subject
            </label>
            <Input
              {...register("subject")}
              placeholder="Project Inquiry"
              className={`h-11 rounded-xl bg-muted/30 focus-visible:ring-2 transition-all ${
                errors.subject ? "border-destructive focus-visible:ring-destructive/20" : ""
              }`}
            />
            {errors.subject && (
              <p className="text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
                {errors.subject.message}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="text-xs font-semibold tracking-wide uppercase text-muted-foreground flex items-center gap-2">
            <MessageSquare className="w-3.5 h-3.5" /> Message
          </label>
          <Textarea
            rows={4}
            {...register("message")}
            placeholder="Tell us about your requirements..."
            className={`rounded-xl bg-muted/30 resize-none focus-visible:ring-2 transition-all p-3 sm:p-4 text-base sm:text-sm ${
              errors.message ? "border-destructive focus-visible:ring-destructive/20" : ""
            }`}
          />
          {errors.message && (
            <p className="text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full h-12 rounded-xl text-base sm:text-sm font-semibold transition-all active:scale-[0.99] flex items-center justify-center gap-2 shadow-sm bg-primary hover:bg-primary/90 text-primary-foreground"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              <span>Send Message</span>
            </>
          )}
        </Button>
      </form>
    </div>
  );
}