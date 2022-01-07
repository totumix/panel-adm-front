import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../../../../configs/backend.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {

  public productsDataSource = [];
  public error;
  public total;
  page = 1;
  filter = '';
  constructor(
    private _backendService: BackendService,
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this._backendService.getAuth('products/').subscribe(
      res => {
        let { products, total } = res;
        this.productsDataSource = products;
        this.total = total;
      },
      err => {
        var httpErrorResponse = this._backendService.handleError(err)
        if (httpErrorResponse != null) {
          this.error = httpErrorResponse.error.message;
        }
      }
    )
  }
}
