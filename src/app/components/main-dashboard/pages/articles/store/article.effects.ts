import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import * as articlesActions from './article.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/core/models/user.model';
import { BaseFormUserService } from '../../users/utils/base-form-user.service';
import { ArticlesService } from '../utils/articles.service';

@Injectable()
export class ArticlesStoreEffects {
    constructor(
        private dataService: ArticlesService,
        private actions$: Actions,
        private _snackBar: MatSnackBar,
        public userForm: BaseFormUserService
    ) { }

    // loadUserRequestEffect$ = createEffect(() => this.actions$.pipe(
    //     ofType(userActions.loadUserRequestAction),
    //     switchMap(action => {
    //         const subject = "User";
    //         return this.dataService.getUser(action.id).pipe(
    //             map((user: any) => {
    //                 return userActions.loadUserSuccessAction({ user })
    //             }),
    //             catchError((error: any) => {
    //                 return observableOf(userActions.loadUserFailureAction({ error }))
    //             })
    //         )
    //     })
    // ))

    getArticles$ = createEffect(() => this.actions$.pipe(
        ofType(articlesActions.loadRequestAction),
        switchMap(action => {
            console.log(action)
            return this.dataService.getArticles().pipe(
                map((articlesMetadata: any) => {
                    console.log(articlesMetadata)
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
        switchMap(user => {
            const subject = "User";
            return this.dataService.saveUser(user).pipe(
                map((article: any) => {
                    this.userForm.resetForm(new User)
                    this._snackBar.open('The user has been created', 'Success', { duration: 5000 })
                    return articlesActions.saveSuccessAction({ article })
                }),
                catchError(error => {
                    this._snackBar.open(error.error, 'Success', { duration: 5000 })
                    return observableOf(articlesActions.saveFailureAction({ error }))
                })
            )
        })
    ))

    // // updateRequestEffect$ = createEffect(() => this.actions$.pipe(
    // //     ofType(userActions.updateRequestAction),
    // //     switchMap(action => {
    // //         return this.dataService.updateUser(action.item).pipe(
    // //             map((item: any) => {
    // //                 return userActions.updateSuccessAction({ item })
    // //             }),
    // //             catchError(error => {
    // //                 return observableOf(userActions.updateFailureAction({ error }))
    // //             })
    // //         )
    // //     })
    // // ))

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