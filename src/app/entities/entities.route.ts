import { Routes } from '@angular/router';

export const entitiesRoutes: Routes = [
  { path: 'producto', loadChildren: './producto/producto.module#ProductoModule' },
  { path: 'proveedor', loadChildren: './proveedor/proveedor.module#ProveedorModule' },
];

