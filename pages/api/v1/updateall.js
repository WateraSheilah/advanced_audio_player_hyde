import connectToDatabase from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

async function handler(req, res) {
  const client = await connectToDatabase();
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(403).json({ message: "User must be logged in" });
    return;
  }
  try {
    const db = (await client.connect()).db();
    const usersCollection = db.collection("users");

    if (req.method === "PUT") {
      const items = await usersCollection
        .aggregate(
          [
            {
              $match: {
                email: session.user.email,
              },
            },
            {
              $lookup: {
                from: "stream_targets",
                localField: "target_ids",
                foreignField: "_id",
                as: "userTargets",
              },
            },
          ],
          {}
        )
        .toArray();
      res.status(200).json(items[0].userTargets);
    }
  } catch (error) {
    res.status(500).json({ error: "Unable to connect to database" });
  } finally {
    await client.close();
  }
}

export default handler;
