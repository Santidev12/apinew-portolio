import express from "express";
import projectsRouter from "./routes/projects.routes.js";

const app = express();

// añade middleware express.json
app.use(express.json());

// añade las rutas de projects.js
app.use("/projects", projectsRouter);

// Empezar a escuchar en el puerto 3000
app.listen(3000, () => console.log("Servidor listo en http://localhost:3000"));
