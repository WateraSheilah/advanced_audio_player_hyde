import { addStream } from "@/lib/addStream";
import connectToDatabase from "@/lib/db";
import { hashPassword } from "@/lib/password";

async function handler(req, res) {
  const data = req.body;

  try {
    if (req.method == "POST") {
    }
  } catch {
    res.status(500).json({ message: `Internal server error` });
  } finally {
  }
}

export default handler;
