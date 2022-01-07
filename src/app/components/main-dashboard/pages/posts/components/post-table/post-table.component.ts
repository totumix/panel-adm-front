import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/core/models/user.model';
import { MatSort } from '@angular/material/sort';
import { BackendService } from 'src/app/configs/backend.service';
@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.scss']
})
export class PostTableComponent implements OnInit {
  public error;
  public postsMetadata;
  public loading = false;
  displayedColumns: string[] = ['image', 'title', 'article', 'description', 'creation_date', 'state', 'actions'];
  dataSource = new MatTableDataSource<User>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private _backendService: BackendService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.loading = true;
    this._backendService.getAuth('posts/').subscribe(
      res => {
        this.loading = false;
        let { posts, total } = res;
        this.postsMetadata = total;
        console.log(posts[0].images[0])
        this.dataSource = posts;
        this.dataSource = new MatTableDataSource(posts);
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
