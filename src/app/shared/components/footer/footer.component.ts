import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField: FormControl;

  constructor() {
    // El primer parametro que recibe "FormControl" es el valor por defecto del input
    this.emailField = new FormControl('', [
      Validators.required,
      Validators.email
    ]);

    // De esta manera capturamos el valor de un input, estamos escuchando con un observable
    this.emailField.valueChanges.subscribe(value => {
      console.log(value);
    });
   }

  ngOnInit(): void {
  }

  sendEmail() {
    if (this.emailField.valid) {
      // De esta manera capturamos el valor sin el observable
      console.log(this.emailField.value);
    }
  }

}
