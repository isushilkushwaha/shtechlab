"use client";

import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

interface Lead {
  id: string;

  name: string;
  email: string;
  phone: string;

  company?: string;
  service?: string;
  budget?: string;
  message?: string;

  status?: string;
  createdAt?: any;
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {

        // Fetch all leads
        const snapshot = await getDocs(
          collection(db, "contact_leads")
        );

        // Convert docs to array
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Lead[];

        console.log("Fetched Leads:", data);

        setLeads(data);

      } catch (error) {
        console.error("Firestore Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6">

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">
          SH Tech Lab Leads Dashboard
        </h1>

        <p className="text-zinc-400 mt-2">
          Manage all client enquiries from one place.
        </p>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="text-center py-20">
          <p className="text-zinc-400">
            Loading leads...
          </p>
        </div>
      ) : leads.length === 0 ? (

        /* No Data */
        <div className="text-center py-20 border border-zinc-800 rounded-2xl">
          <h2 className="text-2xl font-semibold">
            No Leads Found
          </h2>

          <p className="text-zinc-500 mt-2">
            Your contact form submissions will appear here.
          </p>
        </div>

      ) : (

        /* Table */
        <div className="overflow-x-auto rounded-2xl border border-zinc-800">

          <table className="w-full text-left min-w-[1200px]">

            {/* Table Head */}
            <thead className="bg-zinc-900">
              <tr>
                <th className="p-4 font-semibold">
                  Client Name
                </th>

                <th className="p-4 font-semibold">
                  Email
                </th>

                <th className="p-4 font-semibold">
                  Phone
                </th>

                <th className="p-4 font-semibold">
                  Company
                </th>

                <th className="p-4 font-semibold">
                  Service
                </th>

                <th className="p-4 font-semibold">
                  Budget
                </th>

                <th className="p-4 font-semibold">
                  Message
                </th>

                <th className="p-4 font-semibold">
                  Date
                </th>

                <th className="p-4 font-semibold">
                  Status
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>

              {leads.map((lead) => (

                <tr
                  key={lead.id}
                  className="border-t border-zinc-800 hover:bg-zinc-900/40 transition-all duration-300"
                >

                  {/* Name */}
                  <td className="p-4">
                    {lead.name || "—"}
                  </td>

                  {/* Email */}
                  <td className="p-4">
                    {lead.email || "—"}
                  </td>

                  {/* Phone */}
                  <td className="p-4">
                    {lead.phone || "—"}
                  </td>

                  {/* Company */}
                  <td className="p-4">
                    {lead.company || "—"}
                  </td>

                  {/* Service */}
                  <td className="p-4">
                    {lead.service || "—"}
                  </td>

                  {/* Budget */}
                  <td className="p-4">
                    {lead.budget || "—"}
                  </td>

                  {/* Message */}
                  <td className="p-4 max-w-xs">
                    <p className="line-clamp-2 text-zinc-300">
                      {lead.message || "—"}
                    </p>
                  </td>

                  {/* Date */}
                  <td className="p-4">
                    {lead.createdAt?.seconds
                      ? new Date(
                          lead.createdAt.seconds * 1000
                        ).toLocaleDateString()
                      : "N/A"}
                  </td>

                  {/* Status */}
                  <td className="p-4">

                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                      {lead.status || "New"}
                    </span>

                  </td>

                </tr>
              ))}

            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}