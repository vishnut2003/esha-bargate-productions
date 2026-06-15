import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const subscriberSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export type Subscriber = InferSchemaType<typeof subscriberSchema>;

// Guard against model recompilation during hot reloads.
export const SubscriberModel: Model<Subscriber> =
  (mongoose.models.Subscriber as Model<Subscriber>) ||
  mongoose.model<Subscriber>("Subscriber", subscriberSchema);
