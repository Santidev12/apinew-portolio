import userRepository from "./repositories/users.repository.js";

import { config } from "dotenv";
config();

async function seed() {
  console.log("Seed running...");

  await userRepository.register({
    name: "Admin user",
    email: "admin@miapp.com",
    password: "123qwe123",
  });

  console.log("Seed successful");
}

seed();
