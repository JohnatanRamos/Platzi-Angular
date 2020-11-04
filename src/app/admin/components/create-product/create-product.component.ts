import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

// Storage
import { AngularFireStorage } from '@angular/fire/storage';

// Validaciones propias
import { MyValidators } from '../../../../utils/validators';

// Services
import { ProductService } from '../../../core/services/product/product.service';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  // Para decirle que vamos a crear un grupo de controles
  form: FormGroup;
  image$: Observable<any>;

  constructor(
    // Hacemos una inyeccion de las rutas
    private router: Router,
    private productService: ProductService,
    // Hacemos una inyeccion para poder crear nuestro formulario
    private formBuilder: FormBuilder,
    // Inyectamos el storage
    private storage: AngularFireStorage
  ) {
    // Ponemos el formulario aca y no en el "OnInit" porque estamos es creando y no trayendo
    this.buildForm();
  }

  ngOnInit(): void {}

  // Aca Estamos creando el formulario
  private buildForm() {
    // Aca estamos creando nuestro grupo de controles
    this.form = this.formBuilder.group({
      // El primer parametro es el valor inicial del controlador o input
      id: ['', [Validators.required]],
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
      this.productService.createProduct(register).subscribe((newProduct) => {
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
