import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as rolesActions from './rol.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BaseFormRolesService } from '../utils/base-form-roles.service';
import { RolesService } from '../utils/roles.service';
import { Rol } from 'src/app/core/models/rol.model';

@Injectable()
export class RolStoreEffects {
    constructor(
        private dataService: RolesService,
        private actions$: Actions,
        private _snackBar: MatSnackBar,
        public rolForm: BaseFormRolesService
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
        switchMap(rol => {
            console.log(rol)
            const subject = "Rol";
            return this.dataService.saveRol(rol).pipe(
                map((role: any) => {
                    this.rolForm.resetForm(new Rol)
                    this._snackBar.open('The role has been created', 'Success', { duration: 5000 })
                    return rolesActions.saveSuccessAction({ role })
                }),
                catchError(error => {
                    this._snackBar.open(error.error, 'Success', { duration: 5000 })
                    return observableOf(rolesActions.saveFailureAction({ error }))
                })
            )
        })
    ))

    updateRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(rolesActions.updateRequestAction),
        switchMap(role => {
            return this.dataService.updateRol(role).pipe(
                map((role: Rol) => {
                    this._snackBar.open('The role has been updated', 'Success', { duration: 5000 })
                    return rolesActions.updateSuccessAction({ role })
                }),
                catchError(error => {
                    return observableOf(rolesActions.updateFailureAction({ error }))
                })
            )
        })
    ))

    deleteRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(rolesActions.deleteRequestAction),
        switchMap(action => {
            return this.dataService.deleteRol(action._id).pipe(
                map((item: any) => {
                    this._snackBar.open('The role has been deleted', 'Success', { duration: 5000 })
                    return rolesActions.deleteSuccessAction({ _id: action._id })
                }),
                catchError(error => {
                    return observableOf(rolesActions.deleteFailureAction({ error }))
                })
            )
        })
    ))
}