"use client";

import * as React from "react";

import {
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Input } from "@/components/ui/input";
import LeadFilters from "./LeadFilters";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";

import { Lead } from "@/types/lead";

import { columns } from "./columns";

interface LeadTableProps {
  leads: Lead[];
}

export default function LeadTable({
  leads,
}: LeadTableProps) {

  const [sorting, setSorting] =
    React.useState<SortingState>([]);

  const [columnFilters, setColumnFilters] =
    React.useState<ColumnFiltersState>([]);

  const [globalFilter, setGlobalFilter] =
    React.useState("");

  const table = useReactTable({
    data: leads,

    columns,

    getCoreRowModel:
      getCoreRowModel(),

    getPaginationRowModel:
      getPaginationRowModel(),

    getSortedRowModel:
      getSortedRowModel(),

    getFilteredRowModel:
      getFilteredRowModel(),

    onSortingChange: setSorting,

    onColumnFiltersChange:
      setColumnFilters,

    onGlobalFilterChange:
      setGlobalFilter,

    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
  });

  

  return (
    <div className="space-y-4">

      {/* Search */}

      <Input
        placeholder="Search leads..."
        value={globalFilter}
        onChange={(e) =>
          setGlobalFilter(e.target.value)
        }
        className="max-w-sm"
      />

      {/* Table */}

      <div className="rounded-md border">

        <Table>

          <TableHeader>

            {table
              .getHeaderGroups()
              .map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                >
                  {headerGroup.headers.map(
                    (header) => (
                      <TableHead
                        key={header.id}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column
                                .columnDef
                                .header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  )}
                </TableRow>
              ))}

          </TableHeader>

          <TableBody>

            {table.getRowModel().rows
              ?.length ? (
              table
                .getRowModel()
                .rows.map((row) => (
                  <TableRow
                    key={row.id}
                  >
                    {row
                      .getVisibleCells()
                      .map((cell) => (
                        <TableCell
                          key={cell.id}
                        >
                          {flexRender(
                            cell.column
                              .columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                  </TableRow>
                ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No Leads Found
                </TableCell>
              </TableRow>
            )}

          </TableBody>

        </Table>

      </div>

      {/* Pagination */}

      <div className="flex justify-end gap-2">

        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            table.previousPage()
          }
          disabled={
            !table.getCanPreviousPage()
          }
        >
          Previous
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            table.nextPage()
          }
          disabled={
            !table.getCanNextPage()
          }
        >
          Next
        </Button>

      </div>

    </div>
  );
}