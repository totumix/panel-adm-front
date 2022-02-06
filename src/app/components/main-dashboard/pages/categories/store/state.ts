import { createEntityAdapter, EntityAdapter, EntityState }
    from '@ngrx/entity';
import { Rol } from 'src/app/core/models/rol.model';
import { Category } from 'src/app/core/models/category.model';


export interface CategoriesState {
    selectedCategory: Category,
    categories: Category[],
    isLoading?: boolean;
    total: number;
    error?: any;
}

export interface AppState {
    categoriesStore: CategoriesState
}

export const initialState: CategoriesState =
{
    selectedCategory: null,
    categories: null,
    isLoading: false,
    total: null,
    error: null
};