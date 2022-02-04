import { createSelector } from '@ngrx/store';
import { AppState, UsersState } from './state';

const UserFeature = (state: AppState) => {
    return state.usersStore
};

export const getUsers = createSelector(
    UserFeature,
    (state: UsersState) => state.users
);

export const getRoles = createSelector(
    UserFeature,
    (state: UsersState) => state.roles
);

export const getUser = createSelector(
    UserFeature,
    (state: UsersState, id: number) => state.users.filter(x => x.id === id)
);


export const getSelectedUser = createSelector(
    UserFeature,
    (state: UsersState) => state.selectedUser
);

export const getUserError = createSelector(
    UserFeature,
    (state: UsersState) => state.error
);

export const getUserIsLoading = createSelector(
    UserFeature,
    (state: UsersState) => state.isLoading
);

export const getTotalUsers = createSelector(
    UserFeature,
    (state: UsersState) => state.total
);