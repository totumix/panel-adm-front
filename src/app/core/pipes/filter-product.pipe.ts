import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultProducts = [];
    for (const result of value) {
      console.log(result)
      if ( result.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
           result.code.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
           result.type.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultProducts.push(result);

      };
    };
    return resultProducts;
  }
}