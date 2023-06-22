import { MongoClient, ObjectId } from "mongodb";

async function getDatabase() {
  const mongoUrl = process.env.MONGODB_URL;
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

// one
async function one(id) {
  const db = await getDatabase();
  const collection = db.collection("projects");

  const result = await collection.findOne({ _id: new ObjectId(id) });

  return result;
}

// create
// update
// delete

export default { all, one };
