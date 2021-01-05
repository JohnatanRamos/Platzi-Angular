// Para capturar el valor que llega
import { AbstractControl } from '@angular/forms';

export class MyValidators{

    static priceValid(control: AbstractControl) {
        const value = control.value;
        // const obj = {'title': control.parent.value['title']}
        console.log(a);
        console.log(control);
        if (value > 10000) {
            return { price_invalid: true};
        }
        return null;
    }
}
