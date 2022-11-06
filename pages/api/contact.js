import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ messgae: "Ivalid input." });
      return;
    }

    // Store in db
    const newMessage = { email, name, message };

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://test-1:TsZ5FghMszIvyRpP@cluster1.1dcen9j.mongodb.net/my-site?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.idresult = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Saving message failed" });
      return;
    }

    client.close();

    res.status(201).json({ message: "Success.", message: newMessage });
  }
}

export default handler;
