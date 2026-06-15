import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Missing MONGODB_URI environment variable. Add it to .env.local"
  );
}

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

// Cache the connection across hot reloads in development so we don't open a new
// connection on every request.
const globalForMongoose = globalThis as unknown as {
  mongoose?: MongooseCache;
};

const cached: MongooseCache = globalForMongoose.mongoose ?? {
  conn: null,
  promise: null,
};

globalForMongoose.mongoose = cached;

export async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI as string, {
      dbName: process.env.DATABASE_NAME,
      bufferCommands: false,
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}
