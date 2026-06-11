import { leadRepository } from "@/lib/repositories/leadRepository";

import { Lead } from "@/types/lead";

export const leadService = {
  async createLead(
    leadData: Omit<Lead, "id">
  ): Promise<string> {
    return await leadRepository.createLead(
      leadData
    );
  },

  async fetchLeads(): Promise<Lead[]> {
    return await leadRepository.getLeads();
  },

  async getLeadById(id: string) {
    return await leadRepository.getLeadById(id);
  },

  async updateLeadStatus(
    id: string,
    status: Lead["status"]
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

    // Future:
    // clientRepository.createClient(lead)

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
        lead.status === "new"
    ).length;
  },

  async getWonLeadsCount(): Promise<number> {
    const leads =
      await leadRepository.getLeads();

    return leads.filter(
      (lead) =>
        lead.status === "won"
    ).length;
  },

  async getLostLeadsCount(): Promise<number> {
    const leads =
      await leadRepository.getLeads();

    return leads.filter(
      (lead) =>
        lead.status === "lost"
    ).length;
  },

  async getLeadConversionRate(): Promise<number> {
    const leads =
      await leadRepository.getLeads();

    const total = leads.length;

    const won = leads.filter(
      (lead) =>
        lead.status === "won"
    ).length;

    if (total === 0) {
      return 0;
    }

    return Number(
      ((won / total) * 100).toFixed(1)
    );
  },

  async getLeadsByType(
    type:
      | "contact"
      | "consultation"
      | "project"
  ): Promise<Lead[]> {
    const leads =
      await leadRepository.getLeads();

    return leads.filter(
      (lead) => lead.type === type
    );
  },
};