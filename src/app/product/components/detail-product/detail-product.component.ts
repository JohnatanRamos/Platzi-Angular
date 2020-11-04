import { Component, OnInit } from '@angular/core';

// "ActivatedRoute" es una inyeccion de dependencia
import { Params, ActivatedRoute } from '@angular/router';

// Services
import { ProductService } from '../../../core/services/product/product.service';

// Models
import { Product } from '../../../product.model';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss'],
})
export class DetailProductComponent implements OnInit {
  product: Product;

  constructor(
    // De esta manera declaramos la ruta la cual nos va proveer el valor(id)
    private route: ActivatedRoute,
    // Instanciamos una variable de tipo "ProductService" para poder usar el servicio
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
    // El "suscribe" es para cuando se pase otro valor, se vaya suscribiendo
    // Decimos que "params" es de tipo "Params" y es el valor que nos pasa la ruta
    // this.route.params.subscribe((params: Params) => {
    //   console.log(params);
    //   const id = params.id;
    //   const producto = this.productService.getProduct(id);
    //   // console.log(producto);
    //   // Esto es lo que retornamos al template
    //   this.product = producto;
    // });
  }

  fetchProduct(id: string): void {
    this.productService.getProduct(id).subscribe(prodcuto => {
      this.product = prodcuto;
    });
  }
}
