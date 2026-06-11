  // "use client";

  // import { useEffect, useState } from "react";

  // import LeadTable from "@/components/admin/leads/LeadTable";

  // import { leadService } from "@/lib/services/leadService";

  // import { Lead } from "@/types/lead";

  // export default function LeadsPage() {
  //   const [leads, setLeads] = useState<Lead[]>([]);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     const loadLeads = async () => {
  //       try {
  //         const data =
  //           await leadService.fetchLeads();

  //         setLeads(data);
  //       } catch (error) {
  //         console.error(
  //           "Failed to load leads:",
  //           error
  //         );
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     loadLeads();
  //   }, []);

  //   return (
  //     <div className="space-y-6">

  //       {/* Page Header */}

  //       <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

  //         <div>
  //           <h1 className="text-3xl font-bold tracking-tight">
  //             Leads
  //           </h1>

  //           <p className="text-muted-foreground">
  //             Manage and track all client enquiries.
  //           </p>
  //         </div>

  //         {/* Stats */}

  //         <div className="flex gap-3">

  //           <div className="rounded-lg border px-4 py-3">
  //             <p className="text-xs text-muted-foreground">
  //               Total Leads
  //             </p>

  //             <p className="text-2xl font-bold">
  //               {leads.length}
  //             </p>
  //           </div>

  //         </div>

  //       </div>

  //       {/* Loading State */}

  //       {loading ? (
  //         <div className="rounded-xl border p-10 text-center">
  //           <p className="text-muted-foreground">
  //             Loading leads...
  //           </p>
  //         </div>
  //       ) : (
  //         <LeadTable leads={leads} />
  //       )}

  //     </div>
  //   );
  // }

  "use client";

import { useEffect, useState } from "react";

import LeadTable from "@/components/admin/leads/LeadTable";

import { leadService } from "@/lib/services/leadService";

import { Lead } from "@/types/lead";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,

} from "@/components/ui/tabs";

import { contactColumns } from "@/components/admin/leads/contact-columns";

import { consultationColumns } from "@/components/admin/leads/consultation-columns";

import { projectColumns } from "@/components/admin/leads/project-columns";

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

  const contactLeads = leads.filter(
    (lead) => lead.type === "contact"
  );

  const consultationLeads = leads.filter(
    (lead) => lead.type === "consultation"
  );

  const projectLeads = leads.filter(
    (lead) => lead.type === "project"
  );

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Leads
          </h1>

          <p className="text-muted-foreground">
            Manage and track all enquiries.
          </p>
        </div>

        <div className="rounded-lg border px-4 py-3">
          <p className="text-xs text-muted-foreground">
            Total Leads
          </p>

          <p className="text-2xl font-bold">
            {leads.length}
          </p>
        </div>

      </div>

      {/* Loading */}

      {loading ? (
        <div className="rounded-xl border p-10 text-center">
          <p className="text-muted-foreground">
            Loading leads...
          </p>
        </div>
      ) : (
        <Tabs
          defaultValue="contact"
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-3">

            <TabsTrigger value="contact">
              Contact
              ({contactLeads.length})
            </TabsTrigger>

            <TabsTrigger value="consultation">
              Consultation
              ({consultationLeads.length})
            </TabsTrigger>

            <TabsTrigger value="project">
              Project
              ({projectLeads.length})
            </TabsTrigger>

          </TabsList>

          {/* Contact */}

          <TabsContent value="contact">
            <LeadTable
              leads={contactLeads}
              columns={contactColumns}
            />
          </TabsContent>

          {/* Consultation */}

          <TabsContent value="consultation">
            <LeadTable
              leads={consultationLeads}
              columns={consultationColumns}
            />
          </TabsContent>

          {/* Project */}

          <TabsContent value="project">
            <LeadTable
              leads={projectLeads}
              columns={projectColumns}
            />
          </TabsContent>

        </Tabs>
      )}

    </div>
  );
}