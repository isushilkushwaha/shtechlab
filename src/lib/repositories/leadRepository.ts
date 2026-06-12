

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { Lead } from "@/types/lead";

export const leadRepository = {
  async createLead(
    leadData: Omit<Lead, "id">
  ) {
    const docRef = await addDoc(
      collection(db, "leads"),
      {
        ...leadData,
        status: "new",
        createdAt: serverTimestamp(),
      }
    );

    return docRef.id;
  },

  async getLeads(): Promise<Lead[]> {
    const snapshot = await getDocs(
      collection(db, "leads")
    );

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Lead[];
  },

  async getLeadById(
    id: string
  ): Promise<Lead | null> {
    const docRef = doc(db, "leads", id);

    const snapshot =
      await getDoc(docRef);

    if (!snapshot.exists()) {
      return null;
    }

    return {
      id: snapshot.id,
      ...snapshot.data(),
    } as Lead;
  },

  async updateLeadStatus(
    id: string,
    status: string
  ) {
    await updateDoc(
      doc(db, "leads", id),
      {
        status,
      }
    );
  },

  async deleteLead(id: string) {
    await deleteDoc(
      doc(db, "leads", id)
    );
  },

  async getTotalLeads(): Promise<number> {
    const snapshot = await getDocs(
      collection(db, "leads")
    );

    return snapshot.size;
  },

  async getRecentLeads(
    limitCount = 5
  ): Promise<Lead[]> {
    const snapshot = await getDocs(
      collection(db, "leads")
    );

    const leads = snapshot.docs.map(
      (doc) => ({
        id: doc.id,
        ...doc.data(),
      })
    ) as Lead[];

    return leads
      .sort(
        (a, b) =>
          (b.createdAt?.seconds || 0) -
          (a.createdAt?.seconds || 0)
      )
      .slice(0, limitCount);
  },
};