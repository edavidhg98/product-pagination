import { Producto } from '../producto/producto.model';

export interface Proveedor {
  _id?: string;
  name: String;
  email: String;
  address: String;
  telefono: String;


  /** One-To-Many Relationships */
  productoss?: Producto[];
}
