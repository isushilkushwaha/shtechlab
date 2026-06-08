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

interface LeadStatusSelectProps {
  leadId: string;
  currentStatus?: string;
}

const statuses = [
  "New",
  "Contacted",
  "Meeting Scheduled",
  "Proposal Sent",
  "Won",
  "Lost",
];

export default function LeadStatusSelect({
  leadId,
  currentStatus,
}: LeadStatusSelectProps) {
  const [status, setStatus] = useState(
    currentStatus || "New"
  );

  const handleChange = async (
    value: string
  ) => {
    try {
      setStatus(value);

      await leadService.updateLeadStatus(
        leadId,
        value
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Select
      value={status}
      onValueChange={handleChange}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        {statuses.map((item) => (
          <SelectItem
            key={item}
            value={item}
          >
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}