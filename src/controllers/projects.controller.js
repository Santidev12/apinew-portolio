import repository from "../repositories/projects.repository.js";

// 
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
  const result = dbprojects.filter((p) => {
    const name = p.name.toLowerCase();
    return name.match(search);
  });

  res.send(result);
}

export async function create(req, res) {

  const project = req.body;
  if(project._id == ""){
    delete project._id;
  }
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
  if(body._id){
    delete body._id;
  }
  const result = await repository.update(id, body);
  if (result.acknowledged) {
    res.status(202).send("Proyecto actualizado con exito");
  } else {
    res.status(500).send("Proyecto no actualizado!");
  }
}

export default { all, create, one, remove, update };
