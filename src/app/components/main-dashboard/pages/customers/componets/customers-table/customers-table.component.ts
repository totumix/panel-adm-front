import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../../../../configs/backend.service';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.scss']
})
export class CustomersTableComponent implements OnInit {

  public customersDataSource = [];
  public error;
  public total;
  page = 1;
  filter = '';
  constructor(
    private _backendService: BackendService,
  ) { }

  ngOnInit() {
  }

  getCustomer() {
    this._backendService.getAuth('clients/').subscribe(
      res => {
        let { clients, total } = res;
        this.customersDataSource = clients;
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
