import { MongoClient } from "mongodb";

async function getDatabase() {
  const url =
    "mongodb+srv://fullstack3r:fullstack3r@portfolio-cluster.uatwpbi.mongodb.net/";

  const client = new MongoClient(url);
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
