import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { UsersState } from './users.reducer';

const UserFeature = (state: AppState) => {
    return state.usersStore
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