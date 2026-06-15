"use server";

import { connectDB } from "@/config/mongodb";
import { ContactModel } from "@/models/Contact";

export type ContactFormState = {
  ok: boolean;
  error?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const firstName = (formData.get("firstName") as string | null)?.trim() ?? "";
  const lastName = (formData.get("lastName") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  if (!firstName || !lastName || !email) {
    return { ok: false, error: "Please fill in all required fields." };
  }

  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  try {
    await connectDB();
    await ContactModel.create({ firstName, lastName, email, message });
    return { ok: true };
  } catch (error) {
    console.error("Failed to save contact submission:", error);
    return {
      ok: false,
      error: "Something went wrong. Please try again later.",
    };
  }
}
