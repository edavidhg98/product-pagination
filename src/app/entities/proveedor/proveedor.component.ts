import { Component, OnInit, Inject } from '@angular/core';

import { ProveedorService } from './proveedor.service';
import { Proveedor } from './proveedor.model';

@Component({
  selector: 'app-proveedor',
  template: `
              <div class="container-fluid">
                <app-proveedor-list [proveedors]="proveedors"></app-proveedor-list>
              </div>
            `
})
export class ProveedorComponent implements OnInit {

  proveedors: Proveedor[] = [];

  constructor(private proveedorService: ProveedorService) {

  }

  ngOnInit() {
    this.proveedorService.getAll().subscribe(proveedors => this.proveedors = proveedors);
  }
}
