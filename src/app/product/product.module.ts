import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { propComponent } from './components/product/products.components';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { ProductosComponent } from './components/productos/productos.component';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';

@NgModule({
  // Componentes que va usar este modulo
  declarations: [
    propComponent,
    DetailProductComponent,
    ProductosComponent
  ],
  imports: [
    // Modulos que se van a usar 
    CommonModule,
    SharedModule,
    ProductRoutingModule,
    MaterialModule
  ]
})
export class ProductModule {

}