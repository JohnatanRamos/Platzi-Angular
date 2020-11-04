import { Component, OnInit, AfterViewInit } from '@angular/core';

// Lo importamos para poder usar el plugin
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  // Creamos una variable de tipo "Swiper" para poder inicializar
  mySwiper: Swiper;

  constructor() {}

  ngOnInit(): void {}

  // Nos dice cuando se renderizaron los componentes hijos que son: footer, banner y navbar
  ngAfterViewInit() {
    // Para que cunado se renderice el componente hijo, ejecute el plugin
    this.mySwiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
