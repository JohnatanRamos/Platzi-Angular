import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valueunique'
})
export class ValueuniquePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value);
    console.log(args);
    return null;
  }

}
