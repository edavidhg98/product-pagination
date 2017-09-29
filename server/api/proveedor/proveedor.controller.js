const repository = require('./proveedor.repository');

function getAll(req, res) {
  repository.get()
    .then((proveedors) => {
      res.json(proveedors);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((proveedor) => {
      if (!proveedor) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(proveedor);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _proveedor = extractData(req);

  repository.add(_proveedor)
    .then((proveedor) => {
      res.status(201).json(proveedor);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _proveedor = extractData(req);

  repository.update(id, _proveedor)
    .then((proveedor) => {
      if (!proveedor) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(proveedor);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      telefono: req.body.telefono,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((proveedor) => {
      if (!proveedor) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.status(204).json();
    })
    .catch(handleError(res));
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json({ msg: `Error al realizar la petición ${err}` });
    } else {
      res.status(statusCode).json({ msg: `Ocurrión un error en el servidor ${err}` });
    }
  };
}

module.exports = {
  getAll,
  getById,
  insert,
  update,
  remove
};
