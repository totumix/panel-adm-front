import { createEntityAdapter, EntityAdapter, EntityState }
    from '@ngrx/entity';
import { User } from 'src/app/core/models/user.model';


export interface UsersState {
    selectedUser: User,
    users: User[],
    isLoading?: boolean;
    error?: any;
}

export const initialState: UsersState =
{
    selectedUser: null,
    users: [],
    isLoading: false,
    error: null
};