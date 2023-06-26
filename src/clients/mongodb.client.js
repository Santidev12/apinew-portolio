import { MongoClient } from "mongodb";

let client;
async function getCollection(name) {
  const mongoUrl = process.env.MONGODB_URL;

  if (!client) {
    client = new MongoClient(mongoUrl);
  }

  await client.connect();

  const db = client.db("portfolio");

  return db.collection(name);
}

export { getCollection };
