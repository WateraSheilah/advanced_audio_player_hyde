import connectToDatabase from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";
import { Server } from "socket.io";

let db;
let io;

async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(403).json({ message: "User must be logged in" });
    return;
  }
  if (res.socket.server.io) {
   
  } else {
   
    io = new Server(res.socket.server);
    res.socket.server.io = io;
  }

  const client = await connectToDatabase();
  db = (await client.connect()).db();
  if (!db) {
    return res.status(500).send("Database not connected");
  }
  const collection = db.collection("stream_targets");
  const usersCollection = db.collection("users");

  let changeStream;

  try {
    changeStream = collection.watch([], { fullDocument: "updateLookup" });
    // changeStream = collection.watch();
  } catch (err) {
    console.error("Error setting up change stream:", err);
    return res.status(500).send("Error setting up change stream");
  }

  changeStream.on("change", async (change) => {
    io.emit("message", change);
    // if (
    //   change.operationType === "insert" ||
    //   change.operationType === "update" ||
    //   change.operationType === "delete"
    // ) {
    //   const items = await usersCollection
    //     .aggregate([
    //       {
    //         $match: {
    //           email: session.user.email,
    //         },
    //       },
    //       {
    //         $lookup: {
    //           from: "stream_targets",
    //           localField: "target_ids",
    //           foreignField: "_id",
    //           as: "userTargets",
    //         },
    //       },
    //     ])
    //     .toArray();
    //   io.emit("message", items[0].userTargets);
    // }
  });
  changeStream.on("error", (err) => {
    res.status(500).send("Internal Server Error");
  });

  req.on("close", async () => {
    if (changeStream) changeStream.close();
    res.end();
    await client.close();
  });
}

export default handler;
