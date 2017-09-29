const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const proveedorSchema = new Schema({
  name: { type: String },  
  email: { type: String },  
  address: { type: String },  
  telefono: { type: String },  

}, { toJSON: { virtuals: true } });


/** Relaciones One-To-Many */
proveedorSchema.virtual('productoss', {
  ref: 'Producto',
  localField: '_id',
  foreignField: 'idProveedor'
});

module.exports = mongoose.model('Proveedor', proveedorSchema);
