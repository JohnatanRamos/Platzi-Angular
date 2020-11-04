import { Component, OnInit } from '@angular/core';

// Services
import { ProductService } from '../../../core/services/product/product.service';

// Models
import { Product } from '../../../product.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productArray: Product[] = [];

  // Hacemos una inyeccion para poder unsar el servicio
  constructor(private productService: ProductService) { }

  // El metodo "ngOnInit" es para cuando inicial el componente entonce
  // que cuando inice llame la funcion "fetchProducts" para que liste todos los productos
  ngOnInit(): void {
    this.fetchProducts();
  }

  // El subscribe no tiene porblemas porque el servicio es del mismo tipo que "producArray"
  // Lo que haya en el suscribe siempre tiene que ser del mismo tipo, en este caso
  // "item" tiene que ser del mismo tipo que "productArray"
  fetchProducts() {
    this.productService.getAllProducts().subscribe(item => {
      this.productArray = item;
    });
  }

  createProduct(product: Product) {
    this.productService.createProduct(product).subscribe(item => {
      console.log(item); }
    );
  }

  // ______________________Desde aca era cuando no habia servicio_______________________
  // Este array solo es creado para listar los productos
  // productArray: Product[] = [
  //   {
  //     id: '0',
  //     image: 'assets/imagenes/pin.png',
  //     title: 'Insignia',
  //     price: 15000,
  //     description: 'string',
  //   },
  //   {
  //     id: '1',
  //     image: 'assets/imagenes/camiseta.png',
  //     title: 'Camiseta',
  //     price: 9000,
  //     description: 'string',
  //   },
  //   {
  //     id: '2',
  //     image: 'assets/imagenes/hoodie.png',
  //     title: 'Hoodie',
  //     price: 8000,
  //     description: 'string',
  //   },
  // ];

  EnviarId(id: number) {
    // El parametro viene del ouput productClicked
    console.log('El id del producto es: ' + id);
  }

}
