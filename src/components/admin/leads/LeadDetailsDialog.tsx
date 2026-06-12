


"use client";

import { Lead } from "@/types/lead";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface LeadDetailsDialogProps {
  lead: Lead;
  open: boolean;
  onOpenChange: (
    open: boolean
  ) => void;
}

export default function LeadDetailsDialog({
  lead,
  open,
  onOpenChange,
}: LeadDetailsDialogProps) {
  const companyOrBusiness =
    lead.companyName ||
    lead.businessName ||
    "—";

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-4xl">

        <DialogHeader>
          <DialogTitle>
            Lead Details
          </DialogTitle>

          <DialogDescription>
            Complete lead information.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 grid gap-6 md:grid-cols-2">

          <div>
            <p className="text-sm text-muted-foreground">
              Name
            </p>

            <p className="font-medium">
              {lead.name}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Email
            </p>

            <p className="font-medium break-words">
              {lead.email}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Phone
            </p>

            <p className="font-medium">
              {lead.phone}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Lead Type
            </p>

            <p className="font-medium capitalize">
              {lead.type}
            </p>
          </div>

          {(lead.companyName ||
            lead.businessName) && (
            <div>
              <p className="text-sm text-muted-foreground">
                Company / Business
              </p>

              <p className="font-medium">
                {companyOrBusiness}
              </p>
            </div>
          )}

          {lead.subject && (
            <div>
              <p className="text-sm text-muted-foreground">
                Subject
              </p>

              <p className="font-medium">
                {lead.subject}
              </p>
            </div>
          )}

          {lead.service && (
            <div>
              <p className="text-sm text-muted-foreground">
                Service
              </p>

              <p className="font-medium">
                {lead.service}
              </p>
            </div>
          )}

          {lead.preferredCallTime && (
            <div>
              <p className="text-sm text-muted-foreground">
                Preferred Call Time
              </p>

              <p className="font-medium">
                {lead.preferredCallTime}
              </p>
            </div>
          )}

          {lead.projectType && (
            <div>
              <p className="text-sm text-muted-foreground">
                Project Type
              </p>

              <p className="font-medium">
                {lead.projectType}
              </p>
            </div>
          )}

          {lead.budget && (
            <div>
              <p className="text-sm text-muted-foreground">
                Budget
              </p>

              <p className="font-medium">
                {lead.budget}
              </p>
            </div>
          )}

          {lead.timeline && (
            <div>
              <p className="text-sm text-muted-foreground">
                Timeline
              </p>

              <p className="font-medium">
                {lead.timeline}
              </p>
            </div>
          )}

          <div>
            <p className="text-sm text-muted-foreground">
              Status
            </p>

            <p className="font-medium capitalize">
              {lead.status}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Created At
            </p>

            <p className="font-medium">
              {lead.createdAt?.seconds
                ? new Date(
                    lead.createdAt.seconds *
                      1000
                  ).toLocaleString()
                : "N/A"}
            </p>
          </div>

        </div>

        {lead.message && (
          <div className="mt-6">

            <p className="mb-2 text-sm text-muted-foreground">
              Message
            </p>

            <div className="min-h-[120px] whitespace-pre-wrap rounded-lg border bg-muted/20 p-4">
              {lead.message}
            </div>

          </div>
        )}

        {lead.projectDescription && (
          <div className="mt-6">

            <p className="mb-2 text-sm text-muted-foreground">
              Project Description
            </p>

            <div className="min-h-[120px] whitespace-pre-wrap rounded-lg border bg-muted/20 p-4">
              {lead.projectDescription}
            </div>

          </div>
        )}

      </DialogContent>
    </Dialog>
  );
}