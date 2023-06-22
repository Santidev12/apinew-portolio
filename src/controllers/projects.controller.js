import repository from "../repositories/projects.repository.js";

let projects = [
  { id: 2, name: "Mi proyecto potato 2", img: "/assets/images/shop.svg" }, //0
  { id: 1, name: "Mi proyecto carrot 1", img: "/assets/images/shop.svg" }, //1
  { id: 3, name: "Mi proyecto potato 3", img: "/assets/images/shop.svg" }, //2
  { id: 4, name: "Mi proyecto carrot 4", img: "/assets/images/shop.svg" }, //3
];

export async function all(req, res) {
  const query = req.query;
  const dbprojects = await repository.all();

  // Añadir validacion de search!
  if (!query.search) {
    res.send(dbprojects);
    return;
  }

  // Extraer search
  const search = query.search.toLowerCase();

  // Filtrar projects
  const result = projects.filter((p) => {
    const name = p.name.toLowerCase();
    return name.match(search);
  });

  res.send(result);
}

export async function create(req, res) {
  const project = req.body;
  const result = await repository.create(project);

  if (result.acknowledged) {
    res.status(201).send("Proyecto creado con exito!");
  } else {
    res.status(500).send("Error al crear el proyecto");
  }
}

export async function one(req, res) {
  const id = req.params.id;
  const project = await repository.one(id);

  if (!project) {
    res.status(404);
  }
  res.send(project);
}

export async function remove(req, res) {
  const id = req.params.id;
  const result = await repository.remove(id);

  if (result.acknowledged) {
    res.status(202).send("Proyecto eliminado con exito!");
  } else {
    res.status(500).send("Imposible eliminar proyecto!");
  }
}

export async function update(req, res) {
  const id = req.params.id;
  const body = req.body;
  const result = await repository.update(id, body);
  if (result.acknowledged) {
    res.status(202).send("Proyecto actualizado con exito");
  } else {
    res.status(500).send("Proyecto no actualizado!");
  }
}

export default { all, create, one, remove, update };
