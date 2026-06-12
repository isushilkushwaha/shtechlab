

"use client";

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { leadService } from "@/lib/services/leadService";

import { Lead } from "@/types/lead";

interface LeadStatusSelectProps {
  leadId: string;
  currentStatus?: Lead["status"];
}

const statuses: {
  value: Lead["status"];
  label: string;
}[] = [
  {
    value: "new",
    label: "New",
  },
  {
    value: "contacted",
    label: "Contacted",
  },
  {
    value: "qualified",
    label: "Qualified",
  },
  {
    value: "proposal_sent",
    label: "Proposal Sent",
  },
  {
    value: "won",
    label: "Won",
  },
  {
    value: "lost",
    label: "Lost",
  },
];

export default function LeadStatusSelect({
  leadId,
  currentStatus = "new",
}: LeadStatusSelectProps) {
  const [status, setStatus] =
    useState<Lead["status"]>(
      currentStatus
    );

  const handleChange = async (
    value: Lead["status"]
  ) => {
    try {
      setStatus(value);

      await leadService.updateLeadStatus(
        leadId,
        value
      );
    } catch (error) {
      console.error(
        "Failed to update lead status",
        error
      );
    }
  };

  return (
    <Select
      value={status}
      onValueChange={(value) =>
        handleChange(
          value as Lead["status"]
        )
      }
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        {statuses.map((item) => (
          <SelectItem
            key={item.value}
            value={item.value}
          >
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}