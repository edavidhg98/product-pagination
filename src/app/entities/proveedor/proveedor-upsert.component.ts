import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProveedorService } from './proveedor.service';
import { Proveedor } from './proveedor.model';


@Component({
  selector: 'app-proveedor-upsert',
  templateUrl: './proveedor-upsert.component.html'
})
export class ProveedorUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  proveedor: Proveedor;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private proveedorService: ProveedorService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.proveedorService.getById(id).subscribe(proveedor => this.proveedor = proveedor);
      }
    });
  }

  save(formValues) {
    this.proveedor = formValues;
    this.proveedorService.insert(this.proveedor).subscribe(
      (response) => {
        this.router.navigate(['/entities/proveedor']);
      }
    );
  }

  update() {
    this.proveedorService.update(this.proveedor._id, this.proveedor).subscribe(
      (response) => {
        this.router.navigate(['/entities/proveedor']);
      }
    );
  }
}
