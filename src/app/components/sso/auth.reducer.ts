import { createReducer, on } from '@ngrx/store';
import { IUser } from 'src/app/core/models/user';
import * as authAction from './auth.actions';

export interface State {
    user: IUser;
    token: string
}

export const initialState: State = {
    user: null,
    token: null
}

const _authReducer = createReducer(initialState,
    on(authAction.setUser, (state, { user }) => ({ ...state, user: { ...user } })),
    on(authAction.unSetUser, state => ({ ...state, user: null })),
);

export function authReducer(state, action) {
    return _authReducer(state, action);
}