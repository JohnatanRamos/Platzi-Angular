import { Component, OnInit } from '@angular/core';

// Services
import { ProductService } from '../../../core/services/product/product.service';

// Models
import {Product} from '../../../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productsArray: Array<Product> = [];

  displayedColumns: string[] = ['ID', 'Titulo', 'Precio', 'Accion'];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(element => {
      this.productsArray = element;
    });
  }

  deleteProduct(id: string) {
    this.productService.deleteProcut(id).subscribe(element => {
      this.getAllProducts(); }
    );
  }

}
