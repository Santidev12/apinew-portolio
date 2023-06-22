import { compare } from "bcrypt";
import usersRepository from "../repositories/users.repository.js";
import jwt from "jsonwebtoken";

async function login(req, res) {
  // obtener credenciales
  const credentials = req.body;
  const email = credentials.email;
  const password = credentials.password;

  // buscar usuario
  const user = await usersRepository.byEmail(email);
  if (!user) {
    return res.status(404).send("Usuario no encontrado");
  }

  // comparar contraseña
  const isValid = await compare(password, user.password);
  if (!isValid) {
    return res.status(401).send("Contraseña incorrecta!");
  }

  // crear el token // jsonwebtoken
  const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.status(201).json({ token });
}

export default { login };
