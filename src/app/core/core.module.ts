import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//PIPES
import { NoimagePipe } from './pipes/noimage.pipe';
import { FilterUserPipe } from './pipes/filter-user.pipe';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { FilterCustomersPipe } from './pipes/filter-client.pipe';
@NgModule({
  declarations: [
    NoimagePipe,
    FilterUserPipe,
    FilterProductPipe,
    FilterCustomersPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NoimagePipe,
    FilterUserPipe,
    FilterProductPipe,
    FilterCustomersPipe
  ]
})
export class CoreModule { }
