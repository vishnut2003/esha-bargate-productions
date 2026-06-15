"use server";

import { connectDB } from "@/config/mongodb";
import { SubscriberModel } from "@/models/Subscriber";

export type SubscribeFormState = {
  ok: boolean;
  error?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function subscribe(
  _prevState: SubscribeFormState,
  formData: FormData
): Promise<SubscribeFormState> {
  const email = (formData.get("email") as string | null)?.trim() ?? "";

  if (!email) {
    return { ok: false, error: "Please enter your email address." };
  }

  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  try {
    await connectDB();
    await SubscriberModel.create({ email });
    return { ok: true };
  } catch (error) {
    // Already subscribed — treat as success so we don't alarm the user.
    if (
      typeof error === "object" &&
      error !== null &&
      (error as { code?: number }).code === 11000
    ) {
      return { ok: true };
    }

    console.error("Failed to save subscriber:", error);
    return {
      ok: false,
      error: "Something went wrong. Please try again later.",
    };
  }
}
