import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { ProductService } from './services/product/product.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProductService
  ]
})
export class CoreModule { }
