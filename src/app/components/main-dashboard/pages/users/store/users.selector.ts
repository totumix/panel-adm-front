import { createSelector } from '@ngrx/store';
import { UsersState } from './state';

const UserFeature = (state: UsersState) => {
    return state
};

export const getUsers = createSelector(
    UserFeature,
    (state: UsersState) => state.users
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