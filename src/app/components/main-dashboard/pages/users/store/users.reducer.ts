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

    on(usersActions.loadRolesRequestAction, state => ({
        ...state,
        isLoading: true
    })),

    on(usersActions.loadRolesSuccessAction, (state, { rolesMetadata }) => ({
        ...state,
        isLoading: false,
        roles: rolesMetadata.roles,
    })),

    on(usersActions.loadRolesFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(usersActions.saveRequestAction, state => ({
        ...state,
        isLoading: true
    })),

    on(usersActions.saveSuccessAction, (state, { user }) => ({
        ...state,
        isLoading: false,
        selectedUser: user,
        error: null
    })),

    on(usersActions.saveFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(usersActions.updateRequestAction, (state) => ({
        ...state,
        isLoading: true
    })),

    on(usersActions.setSelectedUserAction, (state, { user }) => ({
        ...state,
        selectedUser: user,
        isLoading: true,
    })),

    on(usersActions.updateSuccessAction, (state, { user }) => ({
        ...state,
        selectedUser: user,
        isLoading: false,
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

    on(usersActions.deleteSuccessAction, (state, { _id }) => ({
        ...state,
        isLoading: false,
        users: state.users.filter(x => x._id != _id)
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