const express = require("express");
const app = express();

let projects = [
  { name: "Mi proyecto 1", img: "/assets/images/shop.svg" },
  { name: "Mi proyecto 2", img: "/assets/images/shop.svg" },
  { name: "Mi proyecto 3", img: "/assets/images/shop.svg" },
  { name: "Mi proyecto 4", img: "/assets/images/shop.svg" },
  { name: "Mi proyecto 5", img: "/assets/images/shop.svg" },
];

app.get("/projects", (req, res) => {
  res.send(projects);
});

app.post("/projects", (req, res) => {
  console.log(req.body);
  console.log(req.headers);

  res.send();
});

app.listen(3000, () => console.log("Servidor listo en http://localhost:3000"));
