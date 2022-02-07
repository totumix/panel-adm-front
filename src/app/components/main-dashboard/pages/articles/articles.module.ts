import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesTableComponent } from './components/articles-table/articles-table.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ArticlesStoreEffects } from './store/article.effects';
import { articlesReducer } from './store/article.reducer';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BaseFormArticleService } from './utils/base-form-article.service';

const routes: Routes = [
  {
    path: "", component: ArticlesComponent, children: [
      { path: "", component: ArticlesTableComponent },
      { path: "article", component: AddArticleComponent },
      { path: "article/:_id", component: AddArticleComponent }
    ]
  }
]

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticlesTableComponent,
    AddArticleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    StoreModule.forFeature('articlesStore', articlesReducer),
    EffectsModule.forFeature([ArticlesStoreEffects]),
    RouterModule.forChild(routes)
  ],
  providers: [
    BaseFormArticleService,
    ArticlesStoreEffects
  ]
})
export class ArticlesModule { }
