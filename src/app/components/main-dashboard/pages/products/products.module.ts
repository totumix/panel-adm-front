import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: ProductsTableComponent }
]

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsTableComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
