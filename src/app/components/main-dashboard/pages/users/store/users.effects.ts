import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import * as userActions from '../store/users.actions';
import { UsersService } from '../utils/users.service';

@Injectable()
export class UserStoreEffects {
    constructor(private dataService: UsersService, private actions$: Actions) { }

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

    // // saveRequestEffect$ = createEffect(() => this.actions$.pipe(
    // //     ofType(userActions.saveRequestAction),
    // //     switchMap(action => {
    // //         const subject = "User";
    // //         return this.dataService.saveUser(action.item).pipe(
    // //             map((item: any) => {
    // //                 return userActions.saveSuccessAction({ item })
    // //             }),
    // //             catchError(error => {
    // //                 return observableOf(userActions.saveFailureAction({ error }))
    // //             })
    // //         )
    // //     })
    // // ))

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