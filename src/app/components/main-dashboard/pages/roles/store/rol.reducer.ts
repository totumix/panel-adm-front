import { createReducer, on } from '@ngrx/store';
import * as rolesActions from './rol.actions';
import * as rolesState from './state';

const initialState = rolesState.initialState;


const _rolesReducer = createReducer(
    initialState,
    on(rolesActions.loadRolRequestAction, (state, { id }) => ({
        ...state,
        isLoading: true
    })),

    on(rolesActions.loadRolSuccessAction, (state, { role }) => ({
        ...state,
        isLoading: false,
        selectedRole: role
    })),

    on(rolesActions.loadRolFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(rolesActions.loadRequestAction, state => ({
        ...state,
        isLoading: true
    })),

    on(rolesActions.loadSuccessAction, (state, { rolesMetadata }) => ({
        ...state,
        isLoading: false,
        roles: rolesMetadata.roles,
        total: rolesMetadata.total
    })),

    on(rolesActions.loadFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(rolesActions.saveRequestAction, state => ({
        ...state,
        isLoading: true
    })),

    on(rolesActions.saveSuccessAction, (state, { role }) => ({
        ...state,
        isLoading: false,
        selectedRole: role,
        roles: [...state.roles, role],
        error: null
    })),

    on(rolesActions.saveFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(rolesActions.updateRequestAction, state => ({
        ...state,
        isLoading: true
    })),

    on(rolesActions.updateSuccessAction, (state, { role }) => ({
        ...state,
        isLoading: false,
        selectedRole: role,
        roles: state.roles.map(
            tempRole => tempRole._id === role._id ?
                { ...role, name: role.name } : tempRole
        ),
        error: null
    })),

    on(rolesActions.updateFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(rolesActions.deleteRequestAction, state => ({
        ...state,
        isLoading: true
    })),

    on(rolesActions.deleteSuccessAction, (state, { _id }) => ({
        ...state,
        isLoading: false,
        roles: state.roles.filter(x => x._id != _id)
    })),

    on(rolesActions.deleteFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(rolesActions.setSelectedRolAction, (state, { role }) => ({
        ...state,
        selectedRole: role,
        isLoading: true,
    })),

    on(rolesActions.unsetSelectedRolAction, (state) => ({
        ...state,
        selectedRole: null,
    })),
);

export function rolesReducer(state, action) {
    return _rolesReducer(state, action);
}