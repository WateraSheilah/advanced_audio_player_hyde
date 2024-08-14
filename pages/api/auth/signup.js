import { addStream } from "@/lib/addStream";
import connectToDatabase from "@/lib/db";
import { hashPassword } from "@/lib/password";

async function handler(req, res) {
  const data = req.body;
  const client = await connectToDatabase();

  try {
    if (req.method == "POST") {
      const { email, password, username } = data;
      if (!email) {
        res.status(442).json({ message: "Email not provided" });
        client.close();
        return;
      }
      if (!email.includes("@")) {
        res.status(442).json({ message: "Email badly formated" });
        client.close();
        return;
      }
      if (!password) {
        res.status(442).json({ message: "No password provided" });
        client.close();
        return;
      }
      if (password.trim().length < 7) {
        res.status(442).json({ message: "Provide a longer password" });
        client.close();
        return;
      }
      const db = (await client.connect()).db();
      const collection = db.collection("users");
      const existingUser = await collection.findOne({ email: email });
      if (existingUser) {
        res.status(422).json({ message: "User Already Exists" });
        client.close();
        return;
      }
      const hashedPassword = await hashPassword(password);
      const result = await db.collection("users").insertOne({
        name: username,
        email: email,
        password: hashedPassword,
        userLevel: 2,
        contact: Number("0755558432"),
        country: "Uganda",
        timeZone: 0,
        currentIp: "",
        previousIps: [{ time: Date.now, ip: "", duration: Number("") }],
        accountStatus: "active",
        isActivated: false,
        createdAt: Date.now,
        updatedAt: Date.now,
        apiAccess: false,
        stream_ids: [],
        target_ids: [],
      });

      const stream = await addStream({
        title: result.insertedId.toString(),
        name: result.insertedId.toString(),
        id: result.insertedId.toString(),
        password: hashedPassword,
        flussonic_user: "hyde",
        flussonic_pass: "An0ther12",
      });
      res.status(200).json({ message: `Created user : ${stream}` });
    }
  } catch {
    res.status(500).json({ message: `Internal server error` });
  } finally {
    client.close();
  }
}

export default handler;
