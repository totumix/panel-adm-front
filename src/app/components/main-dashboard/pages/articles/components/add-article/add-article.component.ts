import { Component, OnInit } from '@angular/core';
import { BaseFormArticleService } from '../../utils/base-form-article.service';
import { IUser } from 'src/app/core/models/user'
import { User } from 'src/app/core/models/user.model';
import * as articlesActions from '../../store/article.actions';
import * as articlesSelector from '../../store/article.selector'
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state';
import { Observable } from 'rxjs';
import { ArticlesService } from '../../utils/articles.service';
import { Rol } from 'src/app/core/models/rol.model';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/core/models/category.model';
import { Article } from 'src/app/core/models/article.model';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  error$: Observable<any>;
  total$: Observable<any>;
  isLoading$: Observable<boolean>;
  categories: Category[];
  selectedUser: User;
  userId: string;
  constructor(
    public articlesForm: BaseFormArticleService,
    private store$: Store<AppState>,
    private _articlesService: ArticlesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let _id = params.get('_id')
      if (_id)
        this.store$.dispatch(articlesActions.loadArticleRequestAction({ _id }))
      this.dataInit();
    })
  }

  dataInit = async () => {
    this.store$.select(articlesSelector.getSelectedArticle).subscribe(
      selectedArticle => this.articlesForm.pathFormData(selectedArticle)
    );
    this.store$.select(articlesSelector.getCategories).subscribe(
      categories => categories ?
        this.categories = categories :
        this._articlesService.getCategories().subscribe(categoriesMetadata => this.categories = categoriesMetadata.categories)
    );
  }

  sendForm() {
    const article = this.articlesForm.baseForm.value;
    article._id ? this.store$.dispatch(articlesActions.updateRequestAction(article)) :
      this.store$.dispatch(articlesActions.saveRequestAction(article));
    this.error$ = this.store$.select(articlesSelector.getArticleError);
  }

  ngOnDestroy() {
    this.articlesForm.resetForm(new Article);
    this.store$.dispatch(articlesActions.unsetSelectedArticleAction());
  }

}
