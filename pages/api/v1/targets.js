import connectToDatabase from "@/lib/db";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { addTarget } from "@/lib/addStreamTarget";

async function handler(req, res) {
  const client = await connectToDatabase();
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(403).json({ message: "User must be logged in" });
    return;
  }
  try {
    const db = (await client.connect()).db();
    const collection = db.collection("stream_targets");
    const usersCollection = db.collection("users");
    const currentUserId = await db
      .collection("users")
      .findOne({ email: session.user.email });

    if (req.method === "POST") {
      const data = req.body;
      const response = await collection.insertOne(data);
      if (response.acknowledged === true) {
        const userResponse = await usersCollection.updateOne(
          { email: session.user.email },
          { $push: { target_ids: response.insertedId } }
        );
        if (userResponse.modifiedCount === 1) {
          const items = await usersCollection
            .aggregate([
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
            ])
            .toArray();
          const tgts = items[0].userTargets.map((prev) => ({
            url: `${prev.url}${prev.streamKey}`,
            streamid: prev._id,
          }));
          const targetResponse = await addTarget(
            currentUserId._id.toString(),
            tgts.sort((a, b) => a.created_at - b.created_at)
          );
          res.json({
            message: targetResponse,
          });
        }
      }
    }
    if (req.method === "PUT") {
      const { id, disabled } = req.body;

      const dID = new ObjectId(id);
      const options = { upsert: false };
      const updateDoc = {
        $set: {
          disabled: disabled,
        },
      };

      const result = await collection.updateOne(
        { _id: dID },
        updateDoc,
        options
      );
      if (result.modifiedCount === 1) {
        const items = await usersCollection
          .aggregate([
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
          ])
          .toArray();
        const tgts = items[0].userTargets.map((prev) => ({
          url: `${prev.url}${prev.streamKey}`,
          disabled: !prev.disabled,
        }));
        const response = await addTarget(
          currentUserId._id.toString(),
          tgts.sort((a, b) => a.created_at - b.created_at)
        );
        res.status(200).json(response);
      }
    }
    if (req.method === "GET") {
      const items = await usersCollection
        .aggregate([
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
        ])
        .toArray();
      res
        .status(200)
        .json(items[0].userTargets.sort((a, b) => a.created_at - b.created_at));
    }
    if (req.method === "DELETE") {
      const { id } = req.body;
      const dID = new ObjectId(id);

      const result = await collection.deleteOne({ _id: dID });

      if (result.deletedCount === 1) {
        const response = await usersCollection.updateOne(
          { email: session.user.email },
          { $pull: { target_ids: dID } }
        );
        if (response.modifiedCount === 1 && response.matchedCount === 1) {
          const items = await usersCollection
            .aggregate([
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
            ])
            .toArray();
          const tgts = items[0].userTargets.map((prev) => ({
            url: `${prev.url}${prev.streamKey}`,
          }));
          const tgt = await addTarget(currentUserId._id.toString(), tgts);
          res.status(200).json({ tgt });
        }
      } else {
        res.status(404).json({ error: "Item not found" });
      }
    }
  } catch (error) {
    res.status(500).json({ error: "Unable to connect to database" });
  } finally {
    await client.close();
  }
}

export default handler;
