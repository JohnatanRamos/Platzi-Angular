import { Component, Input, Output, EventEmitter } from '@angular/core';

// Services
import { CartService } from '../../../core/services/cart/cart.service';

// Models
import { Product } from '../../../product.model';

// Decirle a angular que esto es un componente
@Component({
  // Asi es como lo vamos a invocar
  selector: 'app-product',
  templateUrl: './product.Component.html',
  styleUrls: ['./product.component.scss'],
})
export class propComponent {

  constructor(
    private cartService: CartService
  ) {}
  // Le estamaos diciendo que "product" solo recive datos de tipo "Product"
  // Input hace que "product" reciva datos de otro lugar
  @Input() product: Product;
  // Creamos una variable "productClicked" de tipo "EventEmitter, este es de tipo any osea que se le puede ingresar cualquier valor"
  // Inicializamos "productClicked" en vacio, ejemplo: new EventEmitter(0);
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  agregarProduct() {
    // Pide el id al componente padre que fue seleccionado en Product.html
    // this.productClicked.emit(this.product.id);

    // Le llevamos el "product" el cual es el que estamos ubicados desde el template
    this.cartService.addCart(this.product);
  }
}
