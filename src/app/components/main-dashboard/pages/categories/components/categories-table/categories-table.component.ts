import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/core/models/user.model';
import { MatSort } from '@angular/material/sort';
import { BackendService } from 'src/app/configs/backend.service';

@Component({
  selector: 'app-categories-table',
  templateUrl: './categories-table.component.html',
  styleUrls: ['./categories-table.component.scss']
})
export class CategoriesTableComponent implements OnInit {

  public error;
  public categoriessMetadata;
  public loading = false;
  displayedColumns: string[] = ['name', 'actions'];
  dataSource = new MatTableDataSource<User>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private _backendService: BackendService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.loading = true;
    this._backendService.getAuth('categories/').subscribe(
      res => {
        this.loading = false;
        let { categories, total } = res;
        console.log(res)
        this.categoriessMetadata = total;
        this.dataSource = categories;
        this.dataSource = new MatTableDataSource(categories);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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
