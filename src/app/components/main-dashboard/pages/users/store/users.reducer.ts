import { createReducer, on } from '@ngrx/store';
import * as usersActions from './users.actions';
import * as usersState from './state';

const initialState = usersState.initialState;


const _usersReducer = createReducer(
    initialState,
    on(usersActions.loadUserRequestAction, (state, { id }) => ({
        ...state,
        isLoading: true
    })),

    on(usersActions.loadUserSuccessAction, (state, { user }) => ({
        ...state,
        isLoading: false,
        selectedUser: user
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

    on(usersActions.loadSuccessAction, (state, { usersMetadata }) => ({
        ...state,
        isLoading: false,
        users: usersMetadata.users,
        total: usersMetadata.total
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

    on(usersActions.saveSuccessAction, (state, { item }) => ({
        ...state,
        isLoading: false,
        selectedBook: item,
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
        users: state.users.filter(x => x.id != id)
    })),

    on(usersActions.deleteFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    }))
);

export function usersReducer(state, action) {
    return _usersReducer(state, action);
}