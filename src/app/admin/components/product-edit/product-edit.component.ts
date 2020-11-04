import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

// Storage
import { AngularFireStorage } from '@angular/fire/storage';

// Validaciones propias
import { MyValidators } from '../../../../utils/validators';

// Services
import { ProductService } from '../../../core/services/product/product.service';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  // Para decirle que vamos a crear un grupo de controles
  form: FormGroup;
  image$: Observable<any>;
  id: string;

  constructor(
    // Hacemos una inyeccion de las rutas
    private router: Router,
    private productService: ProductService,
    // Hacemos una inyeccion para poder crear nuestro formulario
    private formBuilder: FormBuilder,
    // Inyectamos el storage
    private storage: AngularFireStorage,
    // Para recibir el id en la ruta
    private activatedRoute: ActivatedRoute
  ) {
    // Ponemos el formulario aca y no en el "OnInit" porque estamos es creando y no trayendo
    this.buildForm();
  }

  ngOnInit(): void {
    // A "params" se le define el tipo desde aca porque el "this" no funciona como callback
    this.activatedRoute.params.subscribe((params: Params) => {
      // Le asignamos a la variable "id" lo que nos trae la ruta
      this.id = params.id;
      // Hacemos una consulta de acurdo con el "id" que nos llego de la ruta
      this.productService.getProduct(this.id).subscribe(product => {
        // Le asignamos el formulario el producto consultado
        this.form.patchValue(product);
        // Y toda esta consulta que me trae, se la enviamos por medio del formulario para que aparezca en el template
      });
    });
  }

  // Aca Estamos creando el formulario
  private buildForm() {
    // Aca estamos creando nuestro grupo de controles
    this.form = this.formBuilder.group({
      // El primer parametro es el valor inicial del controlador o input
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidators.priceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const register = this.form.value;
      this.productService.updateProduct(this.id, register).subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/Products']);
      });
    }
  }

  get controlGetPrice() {
    // De esta manera capturamos y podemos manipular el control de "price"
    return this.form.get('price');
  }

  uploadImage(e) {
    // Capturamos las propiedades del input file
    const value = e.target.files[0];
    const name = value.name;
    // Este es el nombre del directoria a donde va ir
    const fileRef = this.storage.ref(name);
    // "cargar" es un observable
    const cargar = this.storage.upload(name, value);

    cargar.snapshotChanges().pipe(
      finalize(() => {
        // De esta manera obtenemos la direccion de la imagen cuando finalice la carga para eso
        // es el metodo "finalize" y como "image$" es un observable toca obtener esa url
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          // Le llevamos el valor al formulario
          this.form.get('image').setValue(url);
        });
      })
    ).subscribe();
    // Ponemos el "subscribe" para que se ejecute
  }

}
