import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// My Components
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

const routes: Routes = [
  {
    // El "children" hace que todo aparezca dentro del padre, en este caso seria "NavComponente"
    // El seria el padre y "ProductFormComponent" seria el hijo
    // Entonces "ProductFormComponent" apareceria dentro de "NavComponent" con la ayuda de "router-outlet"
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'form',
        component: ProductFormComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'Products',
        component: ProductListComponent
      },
      {
        path: 'Products/create',
        component: CreateProductComponent
      },
      {
        path: 'Products/edit/:id',
        component: ProductEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
