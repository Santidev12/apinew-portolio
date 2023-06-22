import { MongoClient } from "mongodb";

async function getCollection() {
  const mongoUrl = process.env.MONGODB_URL;
  const client = new MongoClient(mongoUrl);
  await client.connect();

  const db = client.db("portfolio");

  return db.collection("users");
}

async function byEmail(email) {
  const collection = await getCollection();

  return await collection.findOne({ email });
}

export default { byEmail };
