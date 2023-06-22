import express from "express";
import projectsRouter from "./routes/projects.routes.js";
import { config } from "dotenv";

config();

const PORT = process.env.PORT;

const app = express();

// añade middleware express.json
app.use(express.json());

// añade las rutas de projects.js
app.use("/", express.static("public"));
app.use("/projects", projectsRouter);

// Empezar a escuchar en el puerto 3000
app.listen(PORT, () =>
  console.log(`Servidor listo en http://localhost:${PORT}`)
);
