import { hash } from "bcrypt";
import { getCollection } from "../clients/mongodb.client.js";

async function register(data) {
  const collection = await getCollection("users");
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
  const collection = await getCollection("users");

  return await collection.findOne({ email });
}

export default { byEmail, register };
