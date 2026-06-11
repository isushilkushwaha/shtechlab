"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Lead } from "@/types/lead";

export const projectColumns: ColumnDef<Lead>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "companyName",
    header: "Company",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "projectType",
    header: "Project Type",
  },
  {
    accessorKey: "budget",
    header: "Budget",
  },
  {
    accessorKey: "timeline",
    header: "Timeline",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];