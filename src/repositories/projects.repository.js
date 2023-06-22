import { MongoClient, ObjectId } from "mongodb";

async function getCollection() {
  const mongoUrl = process.env.MONGODB_URL;
  const client = new MongoClient(mongoUrl);
  await client.connect();

  const db = client.db("portfolio");

  return db.collection("projects");
}

async function all() {
  const collection = await getCollection();
  const result = collection.find();

  return result.toArray();
}

// one
async function one(id) {
  const collection = await getCollection();

  return await collection.findOne({ _id: new ObjectId(id) });
}

// create
async function create(project) {
  const collection = await getCollection();

  return await collection.insertOne(project);
}

// update
async function update(id, data) {
  const collection = await getCollection();

  return collection.updateOne({ _id: new ObjectId(id) }, { $set: data });
}

// delete
// db.projects.deleteOne({ _id: new ObjectId(id) })
async function remove(id) {
  const collection = await getCollection();

  return await collection.deleteOne({ _id: new ObjectId(id) });
}

export default { all, one, create, update, remove };
