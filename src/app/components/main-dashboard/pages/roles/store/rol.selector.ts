import { createSelector } from '@ngrx/store';
import { AppState, RolesState } from './state';

const UserFeature = (state: AppState) => {
    return state.rolesStore
};

export const getRoles = createSelector(
    UserFeature,
    (state: RolesState) => state.roles
);

export const getRol = createSelector(
    UserFeature,
    (state: RolesState, id: string) => state.roles.filter(x => x._id === id)
);

export const getSelectedRol = createSelector(
    UserFeature,
    (state: RolesState) => state.selectedRol
);

export const getRolError = createSelector(
    UserFeature,
    (state: RolesState) => state.error
);

export const getRolIsLoading = createSelector(
    UserFeature,
    (state: RolesState) => state.isLoading
);

export const getTotalRoles = createSelector(
    UserFeature,
    (state: RolesState) => state.total
);