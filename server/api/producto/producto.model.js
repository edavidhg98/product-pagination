const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productoSchema = new Schema({
  name: { type: String, required: true, minlength: 8, maxlength: 30 },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },

  /** Foreign Fields */

  idProveedor: { type: Schema.Types.ObjectId }}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
productoSchema.virtual('proveedor', {
  ref: 'Proveedor',
  localField: 'idProveedor',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('Producto', productoSchema);
