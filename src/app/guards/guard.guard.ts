import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

// Pipes
import { map, tap } from 'rxjs/operators';

// Services
import { AuthService } from '../core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private route: Router
  ) {

  }

  // En base a la ruta va devolver un "observable" o una "promise" o un "Bool"
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.hasUser().pipe(
      map(user => user === null ? false : true),
      tap(hasUser => {
        // Si "hasUser" me devuelve un falso, entonces el entra a la condicion y lo redirecciona a la ruta especificada
        if (!hasUser){
          this.route.navigate(['auth/login']);
        }
      })
      // Con el "tap" redireccionamos a otra ruta sino estamos logueados como admin
    );
    // Si returna un true si lo deja acceder
  }
}
