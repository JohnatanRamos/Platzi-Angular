import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';

// Pipes
import { ExponentPipe } from './pipes/exponent/exponent.pipe';
import { ValueuniquePipe } from './pipes/value/valueunique.pipe';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ExponentPipe,
    ValueuniquePipe
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ExponentPipe,
  ],
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    // Para que reconozca las rutas, para que reconozca los componentes
    RouterModule
  ]
})
export class SharedModule { }
