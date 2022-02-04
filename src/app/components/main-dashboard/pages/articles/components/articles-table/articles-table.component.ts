import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/core/models/user.model';
import { MatSort } from '@angular/material/sort';
import { BackendService } from 'src/app/configs/backend.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state';
import * as articlesActions from '../../store/article.actions';
import * as articlesSelector from '../../store/article.selector';
import { Observable, of } from 'rxjs';
import { Article } from 'src/app/core/models/article.model';
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
  articles$: Observable<Article[]>;
  articles: Article[];

  constructor(
    private _backendService: BackendService,
    private _route: ActivatedRoute,
    private _router: Router,
    private store$: Store<AppState>,
  ) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.store$.dispatch(articlesActions.loadRequestAction())
    this.store$.select(articlesSelector.getArticles).subscribe(
      articles => {
        console.log(articles, "articles")
        this.setDataTable(articles);
        this.articles$ = of(this.articles);
      }
    );
  }


  setDataTable(data) {
    this.dataSource = data;
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

  editArticle(article) {
    console.log(article, "edit article")
    // this.store$.dispatch(usersActions.setSelectedUserAction({ user }));
    this._router.navigate(['article', article._id], { relativeTo: this._route });
  }

}
