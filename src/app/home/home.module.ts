// Genera el modulo
import { NgModule } from '@angular/core';

// Hace que funcionen los if, for, etc...
import { CommonModule } from '@angular/common';

// Components
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';

// Routing
import { HomeRoutingModule } from './home-routing.module';

// Moduls
import { SharedModule } from '../shared/shared.module';

@NgModule({
  // Componentes que va usar este modulo
  declarations: [BannerComponent, HomeComponent],
  // Importamo el enrutado para que todos los componentes lo puedan usar
  imports: [CommonModule, SharedModule, HomeRoutingModule],
})
export class HomeModule {}
