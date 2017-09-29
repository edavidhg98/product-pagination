const repository = require('./producto.repository');

function getAll(req, res) {
  repository.get(req.query)
    .then((doc) => {
      res.set('X-Total-Count', doc.totalCount);
      res.json(doc.productos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((producto) => {
      if (!producto) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(producto);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _producto = extractData(req);

  repository.add(_producto)
    .then((producto) => {
      res.status(201).json(producto);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _producto = extractData(req);

  repository.update(id, _producto)
    .then((producto) => {
      if (!producto) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(producto);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      price: req.body.price,
      idProveedor: req.body.idProveedor,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((producto) => {
      if (!producto) {
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
