import {
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

import { Lead } from "@/types/lead";

export const leadRepository = {
  async getLeads(): Promise<Lead[]> {
    const snapshot = await getDocs(
      collection(db, "contact_leads")
    );

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Lead[];
  },

  async getLeadById(id: string) {
    const docRef = doc(
      db,
      "contact_leads",
      id
    );

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
    const docRef = doc(
      db,
      "contact_leads",
      id
    );

    await updateDoc(docRef, {
      status,
    });
  },

  async deleteLead(id: string) {
    const docRef = doc(
      db,
      "contact_leads",
      id
    );

    await deleteDoc(docRef);
  },


  async getTotalLeads(): Promise<number> {
  const snapshot = await getDocs(
    collection(db, "contact_leads")
  );

  return snapshot.size;
},

async getRecentLeads(
  limitCount = 5
): Promise<Lead[]> {

  const snapshot = await getDocs(
    collection(db, "contact_leads")
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