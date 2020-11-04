import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routs
import { AdminRoutingModule } from './admin-routing.module';

// Components
import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

// Moduls
import { MaterialModule } from '../material/material.module';

// Reactive forms
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';


@NgModule({
  // Propios del modulo
  declarations: [
    ProductFormComponent,
    NavComponent,
    DashboardComponent,
    ProductListComponent,
    CreateProductComponent,
    ProductEditComponent
  ],
  // Componentes y modulos que va usar el "module" de "admin"
  imports: [
    // Que vienen desde otro lugar
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
