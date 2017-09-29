const Proveedor = require('./proveedor.model');

module.exports = {
  get() {
    return Proveedor.find();
  },
  getById(id) {
    return Proveedor.findById(id)
          
          .populate('productos')
  },
  add(proveedor) {
    const _proveedor = new Proveedor(proveedor);
    return _proveedor.save();
  },
  update(id, proveedor) {
    return Proveedor.findByIdAndUpdate(id, proveedor, { new: true, runValidators: true });
  },
  remove(id) {
    return Proveedor.findByIdAndRemove(id);
  }
};
