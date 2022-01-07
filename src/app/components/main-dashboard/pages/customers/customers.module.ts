import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomersTableComponent } from './componets/customers-table/customers-table.component';
import { AddCustomerComponent } from './componets/add-customer/add-customer.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: CustomersTableComponent }
]

@NgModule({
  declarations: [
    CustomersTableComponent,
    CustomersComponent,
    AddCustomerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomersModule { }
