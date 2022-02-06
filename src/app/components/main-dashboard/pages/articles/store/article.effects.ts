import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as articlesActions from './article.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/core/models/user.model';
import { ArticlesService } from '../utils/articles.service';
import { BaseFormArticleService } from '../utils/base-form-article.service';
import { Article } from 'src/app/core/models/article.model';

@Injectable()
export class ArticlesStoreEffects {
    constructor(
        private dataService: ArticlesService,
        private actions$: Actions,
        private _snackBar: MatSnackBar,
        public articleForm: BaseFormArticleService
    ) { }

    loadArticleRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(articlesActions.loadArticleRequestAction),
        switchMap(action => {
            const subject = "Article";
            return this.dataService.getArticle(action._id).pipe(
                map((article: any) => {
                    return articlesActions.loadArticleSuccessAction({ article })
                }),
                catchError((error: any) => {
                    return observableOf(articlesActions.loadArticleFailureAction({ error }))
                })
            )
        })
    ))

    getArticles$ = createEffect(() => this.actions$.pipe(
        ofType(articlesActions.loadRequestAction),
        switchMap(action => {
            console.log(action)
            return this.dataService.getArticles().pipe(
                map((articlesMetadata: any) => {
                    return articlesActions.loadSuccessAction({ articlesMetadata })
                }),
                catchError(error => {
                    return observableOf(articlesActions.loadFailureAction({ error }))
                })
            )
        })
    ))

    saveRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(articlesActions.saveRequestAction),
        switchMap(article => {
            const subject = "Article";
            return this.dataService.saveArticle(article).pipe(
                map((article: any) => {
                    console.log(article)
                    this.articleForm.resetForm(new Article)
                    this._snackBar.open('The article has been created', 'Success', { duration: 5000 })
                    return articlesActions.saveSuccessAction({ article })
                }),
                catchError(error => {
                    this._snackBar.open(error.error, 'Success', { duration: 5000 })
                    return observableOf(articlesActions.saveFailureAction({ error }))
                })
            )
        })
    ))

    getCategories$ = createEffect(() => this.actions$.pipe(
        ofType(articlesActions.loadCategoriesRequestAction),
        switchMap(action => {
            return this.dataService.getCategories().pipe(
                map((categoriesMetadata: any) => {
                    return articlesActions.loadCategoriesSuccessAction({ categoriesMetadata })
                }),
                catchError(error => {
                    return observableOf(articlesActions.loadCategoriesFailureAction({ error }))
                })
            )
        })
    ))




    updateRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(articlesActions.updateRequestAction),
        switchMap(action => {
            return this.dataService.updateArticle(action).pipe(
                map((article: any) => {
                    this._snackBar.open('The article has been updated', 'Success', { duration: 5000 })
                    return articlesActions.updateSuccessAction({ article })
                }),
                catchError(error => {
                    this._snackBar.open(error.error, 'Failed', { duration: 5000 })
                    return observableOf(articlesActions.updateFailureAction({ error }))
                })
            )
        })
    ))

    // deleteRequestEffect$ = createEffect(() => this.actions$.pipe(
    //     ofType(userActions.deleteRequestAction),
    //     switchMap(action => {
    //         return this.dataService.deleteUser(action.id).pipe(
    //             map((item: any) => {
    //                 return userActions.deleteSuccessAction({ id: action.id })
    //             }),
    //             catchError(error => {
    //                 return observableOf(userActions.deleteFailureAction({ error }))
    //             })
    //         )
    //     })
    // ))
}