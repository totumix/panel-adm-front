import { createEntityAdapter, EntityAdapter, EntityState }
    from '@ngrx/entity';
import { Rol } from 'src/app/core/models/rol.model';
import { User } from 'src/app/core/models/user.model';


export interface UsersState {
    selectedUser: User,
    users: User[],
    roles: Rol[],
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
    roles: [],
    total: null,
    error: null
};