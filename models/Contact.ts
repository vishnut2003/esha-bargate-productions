import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const contactSchema = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    message: { type: String, trim: true },
  },
  { timestamps: true }
);

export type Contact = InferSchemaType<typeof contactSchema>;

// Guard against model recompilation during hot reloads.
export const ContactModel: Model<Contact> =
  (mongoose.models.Contact as Model<Contact>) ||
  mongoose.model<Contact>("Contact", contactSchema);
