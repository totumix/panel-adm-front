import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultUsers = [];
    for (const result of value) {
      if (result.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 || result.email.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultUsers.push(result);
      };
    };
    return resultUsers;
  }
}