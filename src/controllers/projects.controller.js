let projects = [
  { id: 2, name: "Mi proyecto potato 2", img: "/assets/images/shop.svg" }, //0
  { id: 1, name: "Mi proyecto carrot 1", img: "/assets/images/shop.svg" }, //1
  { id: 3, name: "Mi proyecto potato 3", img: "/assets/images/shop.svg" }, //2
  { id: 4, name: "Mi proyecto carrot 4", img: "/assets/images/shop.svg" }, //3
];

export function all(req, res) {
  const query = req.query;

  // Añadir validacion de search!
  if (!query.search) {
    res.send(projects);
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

export function create(req, res) {
  const project = req.body;
  projects.push(project);
  res.send("ok!");
}

export function one(req, res) {
  const id = req.params.id;
  const project = projects.find((p) => p.id == id);

  if (!project) {
    res.status(404);
  }
  res.send(project);
}

export function destroy(req, res) {
  // obtener parametro :id
  const id = req.params.id;
  // obtener indice de proyecto
  const index = projects.findIndex((p) => p.id == id);
  // validar si existe el Indice
  if (index == -1) {
    res.status(404);
    res.send("Not Found!");
  }

  // eliminar con splice
  projects.splice(index, 1);

  // responder "ok!"
  res.send("ok!");
}

export function update(req, res) {
  // extraer el id
  const id = req.params.id;
  // buscar proyecto
  const project = projects.find((p) => p.id == id);
  // validar si se encontro el proyecto
  if (!project) {
    res.status(404);
    res.send("Proyecto no encontrado!");
  }

  // actualizar obj proyecto con el body
  const body = req.body;
  project.name = body.name;

  res.send("ok!");
}

export default { all, create, one, destroy, update };
