import { MongoClient } from "mongodb";

const mongoUrl = process.env.MONGODB_URL; 

async function getDatabase() {
  const client = new MongoClient(mongoUrl);
  await client.connect();

  const db = client.db("portfolio");

  return db;
}

async function all() {
  const db = await getDatabase();
  const collection = db.collection("projects");
  const result = collection.find();

  return result.toArray();
}

export default { all };
