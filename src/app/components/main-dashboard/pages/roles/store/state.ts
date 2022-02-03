import { createEntityAdapter, EntityAdapter, EntityState }
    from '@ngrx/entity';
import { Rol } from 'src/app/core/models/rol.model';


export interface RolesState {
    selectedRol: Rol,
    roles: Rol[],
    isLoading?: boolean;
    total: number;
    error?: any;
}

export interface AppState {
    rolesStore: RolesState
}

export const initialState: RolesState =
{
    selectedRol: null,
    isLoading: false,
    roles: [],
    total: null,
    error: null
};