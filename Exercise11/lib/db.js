import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI;

if (!MONGO_URI) throw new Error("⚠️ MONGODB_URI not set in environment");

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGO_URI, { dbName: "fedf_feedback" })
      .then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

const feedbackSchema = new mongoose.Schema(
  { text: String, createdAt: { type: Date, default: Date.now } },
  { collection: "feedbacks" }
);

export const Feedback =
  mongoose.models.Feedback || mongoose.model("Feedback", feedbackSchema);
