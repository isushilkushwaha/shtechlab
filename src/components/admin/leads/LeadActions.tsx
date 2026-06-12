

"use client";

import { useState } from "react";

import {
  MoreHorizontal,
  Eye,
  Trash2,
  UserPlus,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import LeadDetailsDialog from "./LeadDetailsDialog";

import { leadService } from "@/lib/services/leadService";

import { Lead } from "@/types/lead";

interface LeadActionsProps {
  lead: Lead;
}

export default function LeadActions({
  lead,
}: LeadActionsProps) {
  const [open, setOpen] =
    useState(false);

  const handleDelete = async () => {
    if (!lead.id) {
      alert("Lead ID not found");
      return;
    }

    const confirmed = window.confirm(
      "Delete this lead?"
    );

    if (!confirmed) return;

    try {
      await leadService.deleteLead(
        lead.id
      );

      window.location.reload();
    } catch (error) {
      console.error(
        "Failed to delete lead",
        error
      );
    }
  };

  const handleConvert =
    async () => {
      if (!lead.id) {
        alert("Lead ID not found");
        return;
      }

      try {
        await leadService.convertLeadToClient(
          lead.id
        );

        alert(
          "Lead converted successfully"
        );

        window.location.reload();
      } catch (error) {
        console.error(
          "Failed to convert lead",
          error
        );
      }
    };

  return (
    <>
      <DropdownMenu>

        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">

          <DropdownMenuItem
            onClick={() =>
              setOpen(true)
            }
          >
            <Eye className="mr-2 h-4 w-4" />
            View Details
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={handleConvert}
          >
            <UserPlus className="mr-2 h-4 w-4" />
            Convert To Client
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={handleDelete}
            className="text-red-500"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete Lead
          </DropdownMenuItem>

        </DropdownMenuContent>

      </DropdownMenu>

      <LeadDetailsDialog
        lead={lead}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}