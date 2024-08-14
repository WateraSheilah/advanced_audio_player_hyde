import connectToDatabase from "@/lib/db";
import { authOptions } from "../../auth/[...nextauth]";
import { getServerSession } from "next-auth";

async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(403).json({ message: "User must be logged in" });
    return;
  }

  const client = await connectToDatabase();

  try {
    if (req.method === "GET") {
      const db = client.db();
      const collection = db.collection("users");
      const response = await collection.findOne({ email: session.user.email });
      res.status(200).json(response);
    }
  } catch {
    res.status(500).json({ message: "Internal server error" });
  } finally {
    client.close();
  }
}

export default handler;
