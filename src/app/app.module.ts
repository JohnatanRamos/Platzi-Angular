import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Firebase
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';

// Enviroments
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// My components
// import { propComponent } from './product/products.components';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
// import { ProductosComponent } from './productos/productos.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { DetailProductComponent } from './detail-product/detail-product.component';
import { LayoutComponent } from './layout/layout.component';

// Moduls
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ContactComponent,
    NotFoundComponent,
    LayoutComponent,
  ],
  imports: [
    // Los que van en este lugar no se importan en otra parte porque ya este modulo se los pasa
    // para que sean usados por todos los demas
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
