import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import * as userActions from './users.actions';
import { UsersService } from '../utils/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BaseFormUserService } from '../utils/base-form-user.service';
import { User } from 'src/app/core/models/user.model';

@Injectable()
export class UserStoreEffects {
    constructor(
        private dataService: UsersService,
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

    getUsers$ = createEffect(() => this.actions$.pipe(
        ofType(userActions.loadRequestAction),
        switchMap(action => {
            return this.dataService.getUsers().pipe(
                map((usersMetadata: any) => {
                    return userActions.loadSuccessAction({ usersMetadata })
                }),
                catchError(error => {
                    return observableOf(userActions.loadFailureAction({ error }))
                })
            )
        })
    ))

    getRoles$ = createEffect(() => this.actions$.pipe(
        ofType(userActions.loadRolesRequestAction),
        switchMap(action => {
            return this.dataService.getRoles().pipe(
                map((rolesMetadata: any) => {
                    return userActions.loadRolesSuccessAction({ rolesMetadata })
                }),
                catchError(error => {
                    return observableOf(userActions.loadRolesFailureAction({ error }))
                })
            )
        })
    ))

    saveRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(userActions.saveRequestAction),
        switchMap(user => {
            const subject = "User";
            return this.dataService.saveUser(user).pipe(
                map((user: any) => {
                    this.userForm.resetForm(new User)
                    this._snackBar.open('The user has been created', 'Success', { duration: 5000 })
                    return userActions.saveSuccessAction({ user })
                }),
                catchError(error => {
                    this._snackBar.open(error.error, 'Failed', { duration: 5000 })
                    return observableOf(userActions.saveFailureAction({ error }))
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

    deleteRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(userActions.deleteRequestAction),
        switchMap(action => {
            return this.dataService.deleteUser(action._id).pipe(
                map((item: any) => {
                    console.log(item)
                    this._snackBar.open('The user has been deleted', 'Success', { duration: 5000 })
                    return userActions.deleteSuccessAction({ _id: action._id })
                }),
                catchError(error => {
                    this._snackBar.open(error.error, 'Failed', { duration: 5000 })
                    return observableOf(userActions.deleteFailureAction({ error }))
                })
            )
        })
    ))
}