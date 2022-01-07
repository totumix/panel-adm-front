import { createEntityAdapter, EntityAdapter, EntityState }
    from '@ngrx/entity';
import { User } from 'src/app/core/models/user.model';


export interface UsersState {
    selectedUser: User,
    users: User[],
    isLoading?: boolean;
    total: number;
    error?: any;
}

export interface AppState {
    usersStore: UsersState
}

export const initialState: UsersState =
{
    selectedUser: null,
    users: [],
    isLoading: false,
    total: null,
    error: null
};