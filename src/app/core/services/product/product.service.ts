import { Injectable } from '@angular/core';

// Para hacer peticiones
import { HttpClient } from '@angular/common/http';

// Models
import { Product } from '../../../product.model';

// Ambiente
import { environment } from '../../../../environments/environment';

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
    return this.http.put(environment.url + '/products/' + `${id}`, change);
  }

  deleteProcut(id: string) {
    return this.http.delete(environment.url + '/products/' + `${id}`);
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
