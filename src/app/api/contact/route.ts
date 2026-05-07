import { NextResponse } from "next/server";

import { adminDb } from "@/lib/firebase-admin";
import { contactSchema } from "@/lib/validations";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate Form Data
    const validatedFields = contactSchema.safeParse(body);

    if (!validatedFields.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validatedFields.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      phone,
      company,
      service,
      budget,
      message,
    } = validatedFields.data;

    // Save To Firestore
    await adminDb.collection("contact_leads").add({
      name,
      email,
      phone,
      company: company || "",
      service,
      budget,
      message,

      status: "new",
      source: "website",

      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.error("CONTACT_FORM_ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}