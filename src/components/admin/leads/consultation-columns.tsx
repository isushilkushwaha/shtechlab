"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Lead } from "@/types/lead";

export const consultationColumns: ColumnDef<Lead>[] = [
  {
    accessorKey: "name",
    header: "Name",
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
    accessorKey: "businessName",
    header: "Business",
  },
  {
    accessorKey: "service",
    header: "Service",
  },
  {
    accessorKey: "preferredCallTime",
    header: "Call Time",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];