import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// My components
import { ContactComponent } from './contact/contact.component';
// import { ProductosComponent } from './productos/productos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';

// Guards
import { GuardGuard } from './guards/guard.guard';

const routes: Routes = [
  {
    // Esto hace que todo lo que este dentro de "children" contenga el componente "Layout"
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'home',
        // Esto es para cargar un modulo
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      // {
      //   path: 'product',
      //   component: ProductosComponent,
      // },
    ],
  },
  // Estas van a fuera porque no van a compartir el layout
  {
    path: 'admin',
    canActivate: [GuardGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
