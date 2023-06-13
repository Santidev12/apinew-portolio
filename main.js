const express = require("express");
const app = express();

let projects = [
  { id: 2, name: "Mi proyecto potato 2", img: "/assets/images/shop.svg" }, //0
  { id: 1, name: "Mi proyecto carrot 1", img: "/assets/images/shop.svg" }, //1
  { id: 3, name: "Mi proyecto potato 3", img: "/assets/images/shop.svg" }, //2
  { id: 4, name: "Mi proyecto carrot 4", img: "/assets/images/shop.svg" }, //3
];

app.use(express.json());

app.get("/projects", (req, res) => {
  res.send(projects);
});

app.post("/projects", (req, res) => {
  const project = req.body;
  projects.push(project);
  res.send("ok!");
});

app.get("/projects/:id", (req, res) => {
  const id = req.params.id;
  const project = projects.find((p) => p.id == id);

  if (!project) {
    res.status(404);
  }
  res.send(project);
});

app.listen(3000, () => console.log("Servidor listo en http://localhost:3000"));
