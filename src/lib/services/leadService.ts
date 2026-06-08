// import { leadRepository } from "@/lib/repositories/leadRepository";

// import { Lead } from "@/types/lead";

// export const leadService = {
//   async fetchLeads(): Promise<Lead[]> {
//     return await leadRepository.getLeads();
//   },

//   async getLeadById(id: string) {
//     return await leadRepository.getLeadById(id);
//   },

//   async updateLeadStatus(
//     id: string,
//     status: string
//   ) {
//     return await leadRepository.updateLeadStatus(
//       id,
//       status
//     );
//   },

//   async deleteLead(id: string) {
//     return await leadRepository.deleteLead(id);
//   },

//   async convertLeadToClient(id: string) {
//     const lead =
//       await leadRepository.getLeadById(id);

//     if (!lead) {
//       throw new Error("Lead not found");
//     }

//     return lead;
//   },
// };

import { leadRepository } from "@/lib/repositories/leadRepository";

import { Lead } from "@/types/lead";

export const leadService = {
  async fetchLeads(): Promise<Lead[]> {
    return await leadRepository.getLeads();
  },

  async getLeadById(id: string) {
    return await leadRepository.getLeadById(id);
  },

  async updateLeadStatus(
    id: string,
    status: string
  ) {
    return await leadRepository.updateLeadStatus(
      id,
      status
    );
  },

  async deleteLead(id: string) {
    return await leadRepository.deleteLead(id);
  },

  async convertLeadToClient(id: string) {
    const lead =
      await leadRepository.getLeadById(id);

    if (!lead) {
      throw new Error("Lead not found");
    }

    return lead;
  },

  // Dashboard Analytics

  async getTotalLeads(): Promise<number> {
    return await leadRepository.getTotalLeads();
  },

  async getRecentLeads(
    limit = 5
  ): Promise<Lead[]> {
    return await leadRepository.getRecentLeads(
      limit
    );
  },

  async getNewLeadsCount(): Promise<number> {
    const leads =
      await leadRepository.getLeads();

    return leads.filter(
      (lead) =>
        !lead.status ||
        lead.status === "New"
    ).length;
  },

  async getWonLeadsCount(): Promise<number> {
    const leads =
      await leadRepository.getLeads();

    return leads.filter(
      (lead) =>
        lead.status === "Won"
    ).length;
  },

  async getLostLeadsCount(): Promise<number> {
    const leads =
      await leadRepository.getLeads();

    return leads.filter(
      (lead) =>
        lead.status === "Lost"
    ).length;
  },

  async getLeadConversionRate(): Promise<number> {
    const leads =
      await leadRepository.getLeads();

    const total = leads.length;

    const won = leads.filter(
      (lead) =>
        lead.status === "Won"
    ).length;

    if (total === 0) return 0;

    return Number(
      ((won / total) * 100).toFixed(1)
    );
  },
};