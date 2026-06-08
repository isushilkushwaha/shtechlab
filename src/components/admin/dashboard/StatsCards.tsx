// import {
//   Users,
//   Building2,
//   FolderKanban,
//   IndianRupee,
// } from "lucide-react";

// const stats = [
//   {
//     title: "Total Leads",
//     value: "48",
//     icon: Users,
//   },
//   {
//     title: "Clients",
//     value: "12",
//     icon: Building2,
//   },
//   {
//     title: "Projects",
//     value: "8",
//     icon: FolderKanban,
//   },
//   {
//     title: "Revenue",
//     value: "₹2.4L",
//     icon: IndianRupee,
//   },
// ];

// export default function StatsCards() {
//   return (
//     <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

//       {stats.map((stat) => (
//         <div
//           key={stat.title}
//           className="
//             rounded-xl
//             border
//             bg-white
//             p-5
//             shadow-sm
//           "
//         >
//           <div className="flex items-center justify-between">

//             <div>
//               <p className="text-sm text-muted-foreground">
//                 {stat.title}
//               </p>

//               <h3 className="mt-2 text-3xl font-bold">
//                 {stat.value}
//               </h3>
//             </div>

//             <stat.icon className="h-8 w-8 text-blue-600" />

//           </div>
//         </div>
//       ))}

//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";

import {
  Users,
  Building2,
  FolderKanban,
  IndianRupee,
} from "lucide-react";

import { leadService } from "@/lib/services/leadService";

export default function StatsCards() {
  const [totalLeads, setTotalLeads] =
    useState(0);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const total =
          await leadService.getTotalLeads();

        setTotalLeads(total);
      } catch (error) {
        console.error(
          "Failed to load dashboard stats",
          error
        );
      }
    };

    loadStats();
  }, []);

  const stats = [
    {
      title: "Total Leads",
      value: totalLeads,
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Clients",
      value: 0,
      icon: Building2,
      color: "text-green-600",
    },
    {
      title: "Projects",
      value: 0,
      icon: FolderKanban,
      color: "text-purple-600",
    },
    {
      title: "Revenue",
      value: "₹0",
      icon: IndianRupee,
      color: "text-orange-600",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

      {stats.map((stat) => (
        <div
          key={stat.title}
          className="
            rounded-xl
            border
            bg-white
            p-5
            shadow-sm
            transition-all
            hover:shadow-md
          "
        >
          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-muted-foreground">
                {stat.title}
              </p>

              <h3 className="mt-2 text-3xl font-bold">
                {stat.value}
              </h3>

            </div>

            <stat.icon
              className={`h-8 w-8 ${stat.color}`}
            />

          </div>

        </div>
      ))}

    </div>
  );
}