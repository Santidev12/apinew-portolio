import { ObjectId } from "mongodb";
import { getCollection } from "../clients/mongodb.client.js";

async function all() {
  const collection = await getCollection('projects');
  const result = collection.find();

  return result.toArray();
}

// one
async function one(id) {
  const collection = await getCollection('projects');

  return await collection.findOne({ _id: new ObjectId(id) });
}

// create
async function create(project) {
  const collection = await getCollection('projects');

  return await collection.insertOne(project);
}

// update
async function update(id, data) {
  const collection = await getCollection('projects');

  return collection.updateOne({ _id: new ObjectId(id) }, { $set: data });
}

// delete
// db.projects.deleteOne({ _id: new ObjectId(id) })
async function remove(id) {
  const collection = await getCollection('projects');

  return await collection.deleteOne({ _id: new ObjectId(id) });
}

export default { all, one, create, update, remove };
