// export default function RecentLeads() {
//   return (
//     <div className="rounded-xl border bg-white p-5 shadow-sm">

//       <h3 className="mb-4 font-semibold">
//         Recent Leads
//       </h3>

//       <div className="space-y-4">

//         <div className="flex items-center justify-between">
//           <span>Rahul Sharma</span>
//           <span className="text-sm text-muted-foreground">
//             Website Development
//           </span>
//         </div>

//         <div className="flex items-center justify-between">
//           <span>John Smith</span>
//           <span className="text-sm text-muted-foreground">
//             SEO Service
//           </span>
//         </div>

//         <div className="flex items-center justify-between">
//           <span>Aman Verma</span>
//           <span className="text-sm text-muted-foreground">
//             Maintenance
//           </span>
//         </div>

//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";

import { leadService } from "@/lib/services/leadService";

import { Lead } from "@/types/lead";

export default function RecentLeads() {
  const [leads, setLeads] =
    useState<Lead[]>([]);

  useEffect(() => {
    const loadLeads = async () => {
      const data =
        await leadService.getRecentLeads();

      setLeads(data);
    };

    loadLeads();
  }, []);

  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">

      <h3 className="mb-4 font-semibold">
        Recent Leads
      </h3>

      <div className="space-y-4">

        {leads.map((lead) => (
          <div
            key={lead.id}
            className="flex items-center justify-between"
          >
            <div>

              <p className="font-medium">
                {lead.name}
              </p>

              <p className="text-sm text-muted-foreground">
                {lead.service}
              </p>

            </div>

            <span className="text-xs text-blue-600">
              {lead.status || "New"}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}