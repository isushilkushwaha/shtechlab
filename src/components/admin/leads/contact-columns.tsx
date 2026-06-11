"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Lead } from "@/types/lead";

export const contactColumns: ColumnDef<Lead>[] = [
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
    accessorKey: "subject",
    header: "Subject",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];