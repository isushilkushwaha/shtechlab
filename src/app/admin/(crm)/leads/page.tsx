  "use client";

  import { useEffect, useState } from "react";

  import LeadTable from "@/components/admin/leads/LeadTable";

  import { leadService } from "@/lib/services/leadService";

  import { Lead } from "@/types/lead";

  export default function LeadsPage() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const loadLeads = async () => {
        try {
          const data =
            await leadService.fetchLeads();

          setLeads(data);
        } catch (error) {
          console.error(
            "Failed to load leads:",
            error
          );
        } finally {
          setLoading(false);
        }
      };

      loadLeads();
    }, []);

    return (
      <div className="space-y-6">

        {/* Page Header */}

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Leads
            </h1>

            <p className="text-muted-foreground">
              Manage and track all client enquiries.
            </p>
          </div>

          {/* Stats */}

          <div className="flex gap-3">

            <div className="rounded-lg border px-4 py-3">
              <p className="text-xs text-muted-foreground">
                Total Leads
              </p>

              <p className="text-2xl font-bold">
                {leads.length}
              </p>
            </div>

          </div>

        </div>

        {/* Loading State */}

        {loading ? (
          <div className="rounded-xl border p-10 text-center">
            <p className="text-muted-foreground">
              Loading leads...
            </p>
          </div>
        ) : (
          <LeadTable leads={leads} />
        )}

      </div>
    );
  }