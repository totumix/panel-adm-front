import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import * as rolesActions from './rol.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/core/models/user.model';
import { UsersService } from '../../users/utils/users.service';
import { BaseFormUserService } from '../../users/utils/base-form-user.service';

@Injectable()
export class RolStoreEffects {
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

    getRoles$ = createEffect(() => this.actions$.pipe(
        ofType(rolesActions.loadRequestAction),
        switchMap(action => {
            return this.dataService.getRoles().pipe(
                map((rolesMetadata: any) => {
                    return rolesActions.loadSuccessAction({ rolesMetadata })
                }),
                catchError(error => {
                    return observableOf(rolesActions.loadFailureAction({ error }))
                })
            )
        })
    ))

    saveRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(rolesActions.saveRequestAction),
        switchMap(user => {
            const subject = "User";
            return this.dataService.saveUser(user).pipe(
                map((rol: any) => {
                    this.userForm.resetForm(new User)
                    this._snackBar.open('The user has been created', 'Success', { duration: 5000 })
                    return rolesActions.saveSuccessAction({ rol })
                }),
                catchError(error => {
                    this._snackBar.open(error.error, 'Success', { duration: 5000 })
                    return observableOf(rolesActions.saveFailureAction({ error }))
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