import { Injectable } from '@angular/core';

// Para hacer peticiones
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// Models
import { Product } from '../../../product.model';

// Ambiente
import { environment } from '../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// Para hacer un ejemplo rapido
interface User {
  email: string;
  gender: string;
  phone: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  // Hacemos una inyeccion de dependencia creando una variable de tipo "HttpClient"
  constructor(private http: HttpClient) {}

  getAllProducts() {
    // Se pone de tipo "Product[]" para que no tenga conflicto con el subscribe
    return this.http.get<Product[]>(environment.url + '/products');
  }

  getProduct(id: string): any {
    return this.http.get<Product[]>(environment.url + '/products/' + `${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(environment.url + '/products', product);
  }

  // Cremos un parametro llamado "Change" de tipo partial para decirle que solo va esperar ciertos campos, no toda la interfaz o entidad
  updateProduct(id: string, change: Partial<Product>) {
    return this.http.put(environment.url + '/products/' + `${id}`, change)
    .pipe(
      // De esta forma tambien capturamos un error, llamando a la funcion "handleError"
      // para ver la otra forma ve a la funcion "deleteProcut"
      catchError(this.handleError)
    );
  }

  deleteProcut(id: string) {
    return this.http.delete(environment.url + '/products/' + `${id}`)
    .pipe(
      // De esta manera tambien podemos controlar el error, para ver la otra forma
      // ve a la funcion 'updateProduct'
      catchError(error => {return throwError('Ups, algo salio mal')})
    );
  }

  // Este ejemplo es con otra api, para ver como tipar algo que no viene como lo esperamos
  getRandomUser(): Observable<User[]> {
    return this.http.get('https://randomuser.me/api/?results=2')
    .pipe(
      // Primero se pone el "catchError" y despues el "map"
      catchError(this.handleError),
      // El "map" es por si algo salio bien, si todo salio bien, no entra al "catchError"
      map((response: any) => response.results as User[])
    );
  }

  // Esta funcion la creamos para cuando haya un error, sacar un mensaje y que esta funcion la
  // puedan usar todos los demas servicios para capturar el error
  private handleError(error: HttpErrorResponse) {
    // si ponemos "error.status" podemos saber que nos devuelve la respuesta y de esta forma
    // hacer una condicion para manejar diferentes tipos de errores
    console.log(error);
    // De esta forma lanzamos el mensaje de error
    return throwError('Algo salio mal');
  }

  // ______________Esto era cuando no habia servicio y era con arrays________________

  // Duplicamos el array que hay en "productos.C" solo para buscar desde aca
  // O sea que este array lo cramos solo para ver el detalle del producto
  // productArray: Product[] = [
  //   {
  //     id: '0',
  //     image: 'assets/imagenes/pin.png',
  //     title: 'string',
  //     price: 15000,
  //     description: 'string',
  //   },
  //   {
  //     id: '1',
  //     image: 'assets/imagenes/camiseta.png',
  //     title: 'string',
  //     price: 9000,
  //     description: 'string',
  //   },
  //   {
  //     id: '2',
  //     image: 'assets/imagenes/hoodie.png',
  //     title: 'string',
  //     price: 8000,
  //     description: 'string',
  //   },
  // ];

  // getAllProducts() {
  //   return this.productArray;
  // }

  // getProduct(id: string) {
  //   // Segun elp parametro vamos a buscar en el array
  //   // const valor = this.productArray.find((item) => id === item.id);
  //   // if (valor) {
  //   return this.productArray.find((item) => id === item.id);
  //   // } else {
  //   //   return 'No se encontro el valor';
  //   // }
  // }
}
