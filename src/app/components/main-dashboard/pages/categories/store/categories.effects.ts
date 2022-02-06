import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import * as categoriesActions from './categories.actions';
import { CategoriesService } from '../utils/categories.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BaseFormCategoriesService } from '../utils/base-form-categories.service';
import { User } from 'src/app/core/models/user.model';
import { Category } from 'src/app/core/models/category.model';

@Injectable()
export class CategoryStoreEffects {
    constructor(
        private dataService: CategoriesService,
        private actions$: Actions,
        private _snackBar: MatSnackBar,
        public categoryForm: BaseFormCategoriesService
    ) { }

    loadUserRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(categoriesActions.loadUserRequestAction),
        switchMap(action => {
            return this.dataService.getCategory(action._id).pipe(
                map((category: any) => {
                    this.categoryForm.pathFormData(category)
                    return categoriesActions.loadUserSuccessAction({ category })
                }),
                catchError((error: any) => {
                    return observableOf(categoriesActions.loadUserFailureAction({ error }))
                })
            )
        })
    ))

    getCategories$ = createEffect(() => this.actions$.pipe(
        ofType(categoriesActions.loadRequestAction),
        switchMap(action => {
            return this.dataService.getCategories().pipe(
                map((categoriesMetadata: any) => {
                    return categoriesActions.loadSuccessAction({ categoriesMetadata })
                }),
                catchError(error => {
                    return observableOf(categoriesActions.loadFailureAction({ error }))
                })
            )
        })
    ))

    saveRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(categoriesActions.saveRequestAction),
        switchMap(category => {
            const subject = "Category";
            return this.dataService.saveCategory(category).pipe(
                map((category: any) => {
                    this._snackBar.open('The category has been created', 'Success', { duration: 5000 })
                    return categoriesActions.saveSuccessAction({ category })
                }),
                catchError(error => {
                    this._snackBar.open(error.error, 'Failed', { duration: 5000 })
                    return observableOf(categoriesActions.saveFailureAction({ error }))
                })
            )
        })
    ))

    updateRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(categoriesActions.updateRequestAction),
        switchMap(action => {
            return this.dataService.updateCategory(action).pipe(
                map((category: any) => {
                    this._snackBar.open('The user has been updated', 'Success', { duration: 5000 })
                    return categoriesActions.updateSuccessAction({ category })
                }),
                catchError(error => {
                    this._snackBar.open(error.error, 'Failed', { duration: 5000 })
                    return observableOf(categoriesActions.updateFailureAction({ error }))
                })
            )
        })
    ))

    deleteRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(categoriesActions.deleteRequestAction),
        switchMap(action => {
            console.log(action, "entra efect delete")
            return this.dataService.deleteCategory(action._id).pipe(
                map((item: any) => {
                    console.log(item, 'item')
                    this._snackBar.open('The user has been deleted', 'Success', { duration: 5000 })
                    return categoriesActions.deleteSuccessAction({ _id: action._id })
                }),
                catchError(error => {
                    console.log(error, "error")
                    this._snackBar.open(error.error, 'Failed', { duration: 5000 })
                    return observableOf(categoriesActions.deleteFailureAction({ error }))
                })
            )
        })
    ))
}