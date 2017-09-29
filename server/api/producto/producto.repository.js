const Producto = require('./producto.model');

module.exports = {
  get(query) {
    const PAGE = parseInt(query.page);
    const ELEMENTS_BY_PAGE = parseInt(query.size);
    let TOTAL_ENTITIES = 0;

    return Producto
              .find().count()
              .then((number) => {
                TOTAL_ENTITIES = number;
                const SKIP_ENTITIES = PAGE * ELEMENTS_BY_PAGE;
                return Producto.find().skip(SKIP_ENTITIES).limit(ELEMENTS_BY_PAGE);
              })
              .then((productos) => { return { totalCount: TOTAL_ENTITIES, productos } });
  },
  getById(id) {
    return Producto.findById(id)
          .populate('proveedor')

  },
  add(producto) {
    const _producto = new Producto(producto);
    return _producto.save();
  },
  update(id, producto) {
    return Producto.findByIdAndUpdate(id, producto, { new: true, runValidators: true });
  },
  remove(id) {
    return Producto.findByIdAndRemove(id);
  }
};
