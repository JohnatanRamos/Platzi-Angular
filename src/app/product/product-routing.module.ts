import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  {
    path: '',
    component: ProductosComponent
  },
  {
    path: ':id',
    component: DetailProductComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule {}