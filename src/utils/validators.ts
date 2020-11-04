// Para capturar el valor que llega
import { AbstractControl } from '@angular/forms';

export class MyValidators{

    static priceValid(control: AbstractControl) {
        const value = control.value;
        if (value > 10000) {
            return { price_invalid: true};
        }
        return null;
    }
}
