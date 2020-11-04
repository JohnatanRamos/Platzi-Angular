import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Pipe para transformar
import { map } from 'rxjs/operators';

// Services
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // "total" es un "observable" de tipo number
  total$: Observable<number>;
  // total: number;

  constructor(
    private cartService: CartService,
  ) {

    // De esta manera capturamos el .length con un pipe
    // Como "total$" es de tipo observable, creamos el observable con el pipe
    // Y asignamos el observable a la variable "total$" y de esta manera no necesitamos el subscibe
    this.total$ = this.cartService.cart$.pipe(map(
      value => value.length
    ));
    // De esta manera se captura el .length con un "subscribe"
    // this.cartService.cart$.subscribe(value => {
    //   this.total = value.length;
    // });
   }

  ngOnInit(): void {
  }

}
