import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCustomers'
})
export class FilterCustomersPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultCustomers = [];
    for (const result of value) {
      if (result.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultCustomers.push(result);
      };
    };
    return resultCustomers;
  }
}
