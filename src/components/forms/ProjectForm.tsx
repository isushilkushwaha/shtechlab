// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// import {
//   projectSchema,
//   ProjectFormData,
// } from "@/lib/validations/projectSchema";

// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";

// import { leadService } from "@/lib/services/leadService";

// export default function ProjectForm() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm<ProjectFormData>({
//     resolver: zodResolver(
//       projectSchema
//     ),
//   });

//   const onSubmit = async (
//     data: ProjectFormData
//   ) => {
//     try {
//       await leadService.createLead({
//         type: "project",
//         ...data,
//         status: "new",
//       });

//       reset();

//       alert(
//         "Project request submitted successfully."
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
//           Company Name
//         </label>

//         <Input
//           {...register("companyName")}
//           placeholder="SH Tech Lab"
//         />

//         {errors.companyName && (
//           <p className="mt-1 text-sm text-red-500">
//             {errors.companyName.message}
//           </p>
//         )}
//       </div>

//       <div>
//         <label className="mb-2 block text-sm font-medium">
//           Project Type
//         </label>

//         <Input
//           {...register("projectType")}
//           placeholder="Business Website"
//         />

//         {errors.projectType && (
//           <p className="mt-1 text-sm text-red-500">
//             {errors.projectType.message}
//           </p>
//         )}
//       </div>

//       <div>
//         <label className="mb-2 block text-sm font-medium">
//           Budget
//         </label>

//         <Input
//           {...register("budget")}
//           placeholder="₹50,000 - ₹1,00,000"
//         />

//         {errors.budget && (
//           <p className="mt-1 text-sm text-red-500">
//             {errors.budget.message}
//           </p>
//         )}
//       </div>

//       <div>
//         <label className="mb-2 block text-sm font-medium">
//           Timeline
//         </label>

//         <Input
//           {...register("timeline")}
//           placeholder="1 Month"
//         />

//         {errors.timeline && (
//           <p className="mt-1 text-sm text-red-500">
//             {errors.timeline.message}
//           </p>
//         )}
//       </div>

//       <div>
//         <label className="mb-2 block text-sm font-medium">
//           Project Description
//         </label>

//         <Textarea
//           {...register(
//             "projectDescription"
//           )}
//           placeholder="Describe your project requirements..."
//         />

//         {errors.projectDescription && (
//           <p className="mt-1 text-sm text-red-500">
//             {
//               errors.projectDescription
//                 .message
//             }
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
//           : "Start Your Project"}
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
  Building2, 
  Layers, 
  DollarSign, 
  Calendar, 
  FileText, 
  Sparkles,
  Loader2, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";

import {
  projectSchema,
  ProjectFormData,
} from "@/lib/validations/projectSchema";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { leadService } from "@/lib/services/leadService";

export default function ProjectForm() {
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({ type: null, message: null });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      companyName: "",
      projectType: "",
      budget: "",
      timeline: "",
      projectDescription: "",
    },
  });

  const onSubmit = async (data: ProjectFormData) => {
    setSubmitStatus({ type: null, message: null });
    try {
      await leadService.createLead({
        type: "project",
        ...data,
        status: "new",
      });

      reset();
      setSubmitStatus({
        type: "success",
        message: "Your project proposal request has been received! Our team will review the scope and reach out shortly.",
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus({
        type: "error",
        message: "Failed to submit project request. Please check your network and try again.",
      });
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-5 sm:p-8 bg-card rounded-2xl border shadow-md backdrop-blur-sm transition-all duration-300">
      {/* Header section with an elegant badge aesthetic */}
      <div className="mb-8 text-center sm:text-left">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Estimate Scope
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Start Your Project
        </h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-xl">
          Tell us about your engineering, design, or business requirements. Let’s build something incredible together.
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
        {/* Row 1: Contact Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
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

          {/* Email Address */}
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

        {/* Row 2: Phone and Company Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Phone Number */}
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

          {/* Company Name */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Building2 className="w-3.5 h-3.5 text-primary/70" /> Company Name
            </label>
            <Input
              {...register("companyName")}
              placeholder="SH Tech Lab"
              className={`h-11 rounded-xl bg-muted/40 focus-visible:ring-2 transition-all ${
                errors.companyName ? "border-destructive focus-visible:ring-destructive/30" : ""
              }`}
            />
            {errors.companyName && (
              <p className="text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
                {errors.companyName.message}
              </p>
            )}
          </div>
        </div>

        {/* Row 3: Project Specifics Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Project Type */}
          <div className="space-y-2 sm:col-span-1">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-primary/70" /> Project Type
            </label>
            <Input
              {...register("projectType")}
              placeholder="Business Website"
              className={`h-11 rounded-xl bg-muted/40 focus-visible:ring-2 transition-all ${
                errors.projectType ? "border-destructive focus-visible:ring-destructive/30" : ""
              }`}
            />
            {errors.projectType && (
              <p className="text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
                {errors.projectType.message}
              </p>
            )}
          </div>

          {/* Budget Segment */}
          <div className="space-y-2 sm:col-span-1">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <DollarSign className="w-3.5 h-3.5 text-primary/70" /> Budget Range
            </label>
            <Input
              {...register("budget")}
              placeholder="₹50,000 - ₹1,00,000"
              className={`h-11 rounded-xl bg-muted/40 focus-visible:ring-2 transition-all ${
                errors.budget ? "border-destructive focus-visible:ring-destructive/30" : ""
              }`}
            />
            {errors.budget && (
              <p className="text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
                {errors.budget.message}
              </p>
            )}
          </div>

          {/* Expected Timeline */}
          <div className="space-y-2 sm:col-span-1">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-primary/70" /> Timeline
            </label>
            <Input
              {...register("timeline")}
              placeholder="e.g., 1 Month"
              className={`h-11 rounded-xl bg-muted/40 focus-visible:ring-2 transition-all ${
                errors.timeline ? "border-destructive focus-visible:ring-destructive/30" : ""
              }`}
            />
            {errors.timeline && (
              <p className="text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
                {errors.timeline.message}
              </p>
            )}
          </div>
        </div>

        {/* Row 4: Detailed Project Description */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
            <FileText className="w-3.5 h-3.5 text-primary/70" /> Project Description
          </label>
          <Textarea
            rows={5}
            {...register("projectDescription")}
            placeholder="Please detail your scope, requirements, feature sets, or reference links here..."
            className={`rounded-xl bg-muted/40 resize-none focus-visible:ring-2 transition-all p-3 sm:p-4 text-base sm:text-sm ${
              errors.projectDescription ? "border-destructive focus-visible:ring-destructive/30" : ""
            }`}
          />
          {errors.projectDescription && (
            <p className="text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
              {errors.projectDescription.message}
            </p>
          )}
        </div>

        {/* Call to Action Button Submission wrapper */}
        <Button
          type="submit"
          className="w-full h-12 rounded-xl text-base sm:text-sm font-semibold tracking-wide transition-all active:scale-[0.995] flex items-center justify-center gap-2 shadow-sm bg-primary hover:bg-primary/95 text-primary-foreground"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Initializing Request...</span>
            </>
          ) : (
            <>
              <span>Start Your Project</span>
            </>
          )}
        </Button>
      </form>
    </div>
  );
}