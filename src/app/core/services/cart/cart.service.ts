import { Injectable } from '@angular/core';

// Esta libreria añade principios reactivos
import { BehaviorSubject } from 'rxjs';

// Models
import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // "private" para que no todos tenga acceso a el sino a un observable.
  private product: Product[] = [];
  // "Cart" es para que accedan a "product",
  // "cart" es de tipo "Product[]" haciendo instancia de "BehaviorSubject",
  // "cart" lo inicializamos en vacio de esta forma "([])";
  private cart = new BehaviorSubject<Product[]>([]);

  // le decimos que tome lo de que tiene "cart" y lo puedan usar como un observable.
  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(products: Product) {
    // De esta manera no es necesario hacer un push,
    // Le decimos que haga una copia de lo que tiene el array "this.product",
    // Y que le agregue lo que llego
    this.product = [...this.product, products];
    // Notificamos a todos los componentes que estan suscritos.
    this.cart.next(this.product);
  }
}
