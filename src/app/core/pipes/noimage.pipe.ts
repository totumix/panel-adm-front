import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( images: string ): string {

    if ( !images ) {
      return 'assets/images/n_a.jpg';
    }
  
    if ( images ) {
      return images;
    } else {
      return 'assets/images/n_a.jpg';
    }

  }

}
