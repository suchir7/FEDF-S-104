import { connectDB, Feedback } from "@/lib/db";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    const { text } = req.body;
    if (!text?.trim()) {
      return res.status(400).json({ error: "Text is required" });
    }
    const fb = await Feedback.create({ text });
    return res.status(201).json(fb);
  }

  if (req.method === "GET") {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    return res.status(200).json(feedbacks);
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
