import { Proveedor } from '../proveedor/proveedor.model';

export interface Producto {
  _id?: string;
  name: String;
  description: String;
  category: String;
  price: Number;

  /** Many-To-One Relationships */
  
  idProveedor?: String;
  proveedor?: Proveedor;

}
