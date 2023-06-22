import usersRepository from "../repositories/users.repository.js";

async function login(req, res) {
  // obtener credenciales
  const credentials = req.body;
  const email = credentials.email;

  // buscar usuario
  const user = await usersRepository.byEmail(email);
  console.log(user);

  // comparar contraseña // bcrypt
  // crear el token // jsonwebtoken

  res.send("Ok!");
}

export default { login };
