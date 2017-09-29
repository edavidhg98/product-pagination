import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductoService } from './producto.service';
import { Producto } from './producto.model';

import { ProveedorService } from '../proveedor/proveedor.service';
import { Proveedor } from '../proveedor/proveedor.model';

@Component({
  selector: 'app-producto-upsert',
  templateUrl: './producto-upsert.component.html'
})
export class ProductoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  producto: Producto;

  /** Many-To-One Relationships */
  proveedors: Proveedor[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private proveedorService: ProveedorService,
  ) { }

  ngOnInit() {
    this.proveedorService.getAll().subscribe(proveedors => this.proveedors = proveedors);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.productoService.getById(id).subscribe(producto => this.producto = producto);
      }
    });
  }

  save(formValues) {
    this.producto = formValues;
    this.productoService.insert(this.producto).subscribe(
      (response) => {
        this.router.navigate(['/entities/producto']);
      }
    );
  }

  update() {
    this.productoService.update(this.producto._id, this.producto).subscribe(
      (response) => {
        this.router.navigate(['/entities/producto']);
      }
    );
  }
}
