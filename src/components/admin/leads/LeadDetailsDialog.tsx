


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
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-3xl">

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
              {lead.name || "—"}
            </p>
          </div>

          <div>
  <p className="text-sm text-muted-foreground">
    Email
  </p>

  <p className="font-medium break-words">
    {lead.email || "—"}
  </p>
</div>

          <div>
            <p className="text-sm text-muted-foreground">
              Phone
            </p>

            <p className="font-medium">
              {lead.phone || "—"}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Company
            </p>

            <p className="font-medium">
              {lead.company || "—"}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Service
            </p>

            <p className="font-medium">
              {lead.service || "—"}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Budget
            </p>

            <p className="font-medium">
              {lead.budget || "—"}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Status
            </p>

            <p className="font-medium">
              {lead.status || "New"}
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

        <div className="mt-6">

          <p className="mb-2 text-sm text-muted-foreground">
            Message
          </p>

          <div className="rounded-lg border bg-muted/20 p-4 min-h-[120px] whitespace-pre-wrap">
            {lead.message ||
              "No message provided."}
          </div>

        </div>

      </DialogContent>
    </Dialog>
  );
}