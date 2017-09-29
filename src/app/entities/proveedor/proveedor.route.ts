import { Routes } from '@angular/router';

import { ProveedorComponent } from './proveedor.component';
import { ProveedorUpSertComponent } from './proveedor-upsert.component';
import { ProveedorDetailsComponent } from './proveedor-details.component';

export const proveedorRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProveedorComponent },
      { path: 'create', component: ProveedorUpSertComponent },
      { path: ':id', component: ProveedorDetailsComponent },
      { path: ':id/update', component: ProveedorUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/proveedor/';
