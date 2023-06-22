import { MongoClient } from "mongodb";
import { hash } from "bcrypt";

async function getCollection() {
  const mongoUrl = process.env.MONGODB_URL;
  const client = new MongoClient(mongoUrl);
  await client.connect();

  const db = client.db("portfolio");

  return db.collection("users");
}

async function register(data) {
  const collection = await getCollection();
  const exist = await byEmail(data.email);

  if (exist) {
    return;
  }

  const passwordHash = await hash(data.password, 10);
  const user = {
    email: data.email,
    name: data.name,
    password: passwordHash,
  };

  return await collection.insertOne(user);
}

async function byEmail(email) {
  const collection = await getCollection();

  return await collection.findOne({ email });
}

export default { byEmail, register };
