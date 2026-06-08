"use client";

import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LeadFiltersProps {
  search: string;
  onSearchChange: (
    value: string
  ) => void;

  status: string;
  onStatusChange: (
    value: string
  ) => void;
}

export default function LeadFilters({
  search,
  onSearchChange,
  status,
  onStatusChange,
}: LeadFiltersProps) {
  return (
    <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

      <Input
        placeholder="Search leads..."
        value={search}
        onChange={(e) =>
          onSearchChange(
            e.target.value
          )
        }
        className="md:max-w-sm"
      />

      <Select
        value={status}
        onValueChange={
          onStatusChange
        }
      >
        <SelectTrigger className="w-[220px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>

        <SelectContent>

          <SelectItem value="all">
            All Statuses
          </SelectItem>

          <SelectItem value="New">
            New
          </SelectItem>

          <SelectItem value="Contacted">
            Contacted
          </SelectItem>

          <SelectItem value="Meeting Scheduled">
            Meeting Scheduled
          </SelectItem>

          <SelectItem value="Proposal Sent">
            Proposal Sent
          </SelectItem>

          <SelectItem value="Won">
            Won
          </SelectItem>

          <SelectItem value="Lost">
            Lost
          </SelectItem>

        </SelectContent>

      </Select>

    </div>
  );
}