import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/core/models/user.model';
import { MatSort } from '@angular/material/sort';
import { BackendService } from 'src/app/configs/backend.service';
@Component({
  selector: 'app-articles-table',
  templateUrl: './articles-table.component.html',
  styleUrls: ['./articles-table.component.scss']
})
export class ArticlesTableComponent implements OnInit {

  public error;
  public postsMetadata;
  public loading = false;
  displayedColumns: string[] = ['name', 'description', 'creation_date', 'actions'];
  dataSource = new MatTableDataSource<User>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private _backendService: BackendService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.loading = true;
    this._backendService.getAuth('articles/').subscribe(
      res => {
        this.loading = false;
        let { articles, total } = res;
        this.postsMetadata = total;
        this.dataSource = articles;
        this.dataSource = new MatTableDataSource(articles);
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
