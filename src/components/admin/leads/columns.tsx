

"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Lead } from "@/types/lead";

import LeadActions from "./LeadActions";
import LeadStatusSelect from "./LeadStatusSelect";

export const columns: ColumnDef<Lead>[] = [
  {
    accessorKey: "name",

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() =>
          column.toggleSorting(
            column.getIsSorted() === "asc"
          )
        }
      >
        Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },

  {
    accessorKey: "email",
    header: "Email",
  },

  {
    accessorKey: "phone",
    header: "Phone",
  },

  {
    accessorKey: "createdAt",

    header: "Date",

    cell: ({ row }) => {
      const createdAt =
        row.original.createdAt;

      if (!createdAt?.seconds)
        return "N/A";

      return new Date(
        createdAt.seconds * 1000
      ).toLocaleDateString();
    },
  },

  {
    accessorKey: "status",

    header: "Status",

    cell: ({ row }) => (
      <LeadStatusSelect
        leadId={row.original.id}
        currentStatus={
          row.original.status
        }
      />
    ),
  },

  {
    id: "actions",

    header: "Actions",

    cell: ({ row }) => (
      <LeadActions
        lead={row.original}
      />
    ),
  },
];