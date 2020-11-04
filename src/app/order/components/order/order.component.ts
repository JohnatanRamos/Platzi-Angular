import { Component, OnInit } from '@angular/core';

// Models
import { Product } from '../../../product.model';

// Pipe
import { ValueuniquePipe } from '../../../shared/pipes/value/valueunique.pipe';

// Services
import { CartService } from '../../../core/services/cart/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  // Esto es una variable de tipo "Observable" que tiene un array de tipo "Product[]"
  product$: Observable<Product[]>;

  constructor(
    private cartService: CartService,
    private valueuniquePipe: ValueuniquePipe,
  ) {
    // Como ambos son del mismo tipo, le pasamos lo que tiene "cart$"
    this.product$ = cartService.cart$;
  }

  ngOnInit(): void {
  }

}
