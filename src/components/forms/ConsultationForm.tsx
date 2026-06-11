// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// import {
//   consultationSchema,
//   ConsultationFormData,
// } from "@/lib/validations/consultationSchema";

// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";

// import { leadService } from "@/lib/services/leadService";

// export default function ConsultationForm() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm<ConsultationFormData>({
//     resolver: zodResolver(
//       consultationSchema
//     ),
//   });

//   const onSubmit = async (
//     data: ConsultationFormData
//   ) => {
//     try {
//       await leadService.createLead({
//         type: "consultation",
//         ...data,
//         status: "new",
//       });

//       reset();

//       alert(
//         "Consultation request submitted successfully."
//       );
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="space-y-5"
//     >
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

//       <div>
//         <label className="mb-2 block text-sm font-medium">
//           Email
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

//       <div>
//         <label className="mb-2 block text-sm font-medium">
//           Business Name
//         </label>

//         <Input
//           {...register("businessName")}
//           placeholder="ABC Enterprises"
//         />

//         {errors.businessName && (
//           <p className="mt-1 text-sm text-red-500">
//             {errors.businessName.message}
//           </p>
//         )}
//       </div>

//       <div>
//         <label className="mb-2 block text-sm font-medium">
//           Service Required
//         </label>

//         <Input
//           {...register("service")}
//           placeholder="Website Development"
//         />

//         {errors.service && (
//           <p className="mt-1 text-sm text-red-500">
//             {errors.service.message}
//           </p>
//         )}
//       </div>

//       <div>
//         <label className="mb-2 block text-sm font-medium">
//           Preferred Call Time
//         </label>

//         <Input
//           {...register("preferredCallTime")}
//           placeholder="Morning / Afternoon / Evening"
//         />

//         {errors.preferredCallTime && (
//           <p className="mt-1 text-sm text-red-500">
//             {errors.preferredCallTime.message}
//           </p>
//         )}
//       </div>

//       <div>
//         <label className="mb-2 block text-sm font-medium">
//           Message
//         </label>

//         <Textarea
//           {...register("message")}
//           placeholder="Tell us about your business requirements..."
//         />

//         {errors.message && (
//           <p className="mt-1 text-sm text-red-500">
//             {errors.message.message}
//           </p>
//         )}
//       </div>

//       <Button
//         type="submit"
//         className="w-full"
//         disabled={isSubmitting}
//       >
//         {isSubmitting
//           ? "Submitting..."
//           : "Book Free Consultation"}
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
  Briefcase, 
  Wrench, 
  Clock, 
  MessageSquare, 
  Calendar , 
  CalendarCheck,
  Loader2, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";

import {
  consultationSchema,
  ConsultationFormData,
} from "@/lib/validations/consultationSchema";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { leadService } from "@/lib/services/leadService";

export default function ConsultationForm() {
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({ type: null, message: null });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      businessName: "",
      service: "",
      preferredCallTime: "",
      message: "",
    },
  });

  const onSubmit = async (data: ConsultationFormData) => {
    setSubmitStatus({ type: null, message: null });
    try {
      await leadService.createLead({
        type: "consultation",
        ...data,
        status: "new",
      });

      reset();
      setSubmitStatus({
        type: "success",
        message: "Consultation request submitted successfully! We will contact you soon.",
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus({
        type: "error",
        message: "Something went wrong while sending your request. Please try again.",
      });
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-5 sm:p-8 bg-card rounded-2xl border shadow-md backdrop-blur-sm transition-all duration-300">
      {/* Header section with an elegant badge aesthetic */}
      <div className="mb-8 text-center sm:text-left">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
          <CalendarCheck className="w-3.5 h-3.5" /> Strategy Session
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Book a Free Consultation
        </h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-xl">
          Let’s talk about your project goals. Fill out the details below and our team will get in touch to schedule a call.
        </p>
      </div>

      {/* Modern Top-of-Form Status Messages */}
      {submitStatus.type && (
        <div
          className={`mb-6 p-4 rounded-xl flex items-start gap-3 text-sm border transition-all duration-300 ${
            submitStatus.type === "success"
              ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
              : "bg-destructive/10 border-destructive/20 text-destructive"
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

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Row 1: Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-primary/70" /> Full Name
            </label>
            <Input
              {...register("name")}
              placeholder="John Doe"
              className={`h-11 rounded-xl bg-muted/40 focus-visible:ring-2 transition-all ${
                errors.name ? "border-destructive focus-visible:ring-destructive/30" : ""
              }`}
            />
            {errors.name && (
              <p className="text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-primary/70" /> Email Address
            </label>
            <Input
              type="email"
              {...register("email")}
              placeholder="john@example.com"
              className={`h-11 rounded-xl bg-muted/40 focus-visible:ring-2 transition-all ${
                errors.email ? "border-destructive focus-visible:ring-destructive/30" : ""
              }`}
            />
            {errors.email && (
              <p className="text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Phone and Business Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-primary/70" /> Phone Number
            </label>
            <Input
              type="tel"
              {...register("phone")}
              placeholder="+91 9876543210"
              className={`h-11 rounded-xl bg-muted/40 focus-visible:ring-2 transition-all ${
                errors.phone ? "border-destructive focus-visible:ring-destructive/30" : ""
              }`}
            />
            {errors.phone && (
              <p className="text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-primary/70" /> Business Name
            </label>
            <Input
              {...register("businessName")}
              placeholder="ABC Enterprises"
              className={`h-11 rounded-xl bg-muted/40 focus-visible:ring-2 transition-all ${
                errors.businessName ? "border-destructive focus-visible:ring-destructive/30" : ""
              }`}
            />
            {errors.businessName && (
              <p className="text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
                {errors.businessName.message}
              </p>
            )}
          </div>
        </div>

        {/* Row 3: Service Required and Preferred Call Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Wrench className="w-3.5 h-3.5 text-primary/70" /> Service Required
            </label>
            <Input
              {...register("service")}
              placeholder="e.g., Website Development"
              className={`h-11 rounded-xl bg-muted/40 focus-visible:ring-2 transition-all ${
                errors.service ? "border-destructive focus-visible:ring-destructive/30" : ""
              }`}
            />
            {errors.service && (
              <p className="text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
                {errors.service.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-primary/70" /> Preferred Call Time
            </label>
            <Input
              {...register("preferredCallTime")}
              placeholder="e.g., Morning / Afternoon"
              className={`h-11 rounded-xl bg-muted/40 focus-visible:ring-2 transition-all ${
                errors.preferredCallTime ? "border-destructive focus-visible:ring-destructive/30" : ""
              }`}
            />
            {errors.preferredCallTime && (
              <p className="text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
                {errors.preferredCallTime.message}
              </p>
            )}
          </div>
        </div>

        {/* Row 4: Full-width Message Block */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
            <MessageSquare className="w-3.5 h-3.5 text-primary/70" /> Project Brief / Requirements
          </label>
          <Textarea
            rows={4}
            {...register("message")}
            placeholder="Provide a short description of your project scope or objectives..."
            className={`rounded-xl bg-muted/40 resize-none focus-visible:ring-2 transition-all p-3 sm:p-4 text-base sm:text-sm ${
              errors.message ? "border-destructive focus-visible:ring-destructive/30" : ""
            }`}
          />
          {errors.message && (
            <p className="text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Professional Submission Action Button */}
        <Button
          type="submit"
          className="w-full h-12 rounded-xl text-base sm:text-sm font-semibold tracking-wide transition-all active:scale-[0.995] flex items-center justify-center gap-2 shadow-sm bg-primary hover:bg-primary/95 text-primary-foreground"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Processing Request...</span>
            </>
          ) : (
            <>
              <span>Book Free Consultation</span>
            </>
          )}
        </Button>
      </form>
    </div>
  );
}