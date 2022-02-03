import { createReducer, on } from '@ngrx/store';
import * as usersActions from './rol.actions';
import * as usersState from './state';

const initialState = usersState.initialState;


const _rolesReducer = createReducer(
    initialState,
    on(usersActions.loadUserRequestAction, (state, { id }) => ({
        ...state,
        isLoading: true
    })),

    on(usersActions.loadUserSuccessAction, (state, { rol }) => ({
        ...state,
        isLoading: false,
        selectedRol: rol
    })),

    on(usersActions.loadUserFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(usersActions.loadRequestAction, state => ({
        ...state,
        isLoading: true
    })),

    on(usersActions.loadSuccessAction, (state, { rolesMetadata }) => ({
        ...state,
        isLoading: false,
        roles: rolesMetadata.roles,
        total: rolesMetadata.total
    })),

    on(usersActions.loadFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(usersActions.saveRequestAction, state => ({
        ...state,
        isLoading: true
    })),

    on(usersActions.saveSuccessAction, (state, { rol }) => ({
        ...state,
        isLoading: false,
        selectedRol: rol,
        error: null
    })),

    on(usersActions.saveFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(usersActions.updateRequestAction, state => ({
        ...state,
        isLoading: true
    })),

    on(usersActions.updateSuccessAction, (state, { item }) => ({
        ...state,
        isLoading: false,
        selectedBook: item,
        error: null
    })),

    on(usersActions.updateFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(usersActions.deleteRequestAction, state => ({
        ...state,
        isLoading: true
    })),

    on(usersActions.deleteSuccessAction, (state, { id }) => ({
        ...state,
        isLoading: false,
        roles: state.roles.filter(x => x._id != id)
    })),

    on(usersActions.deleteFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    }))
);

export function rolesReducer(state, action) {
    return _rolesReducer(state, action);
}