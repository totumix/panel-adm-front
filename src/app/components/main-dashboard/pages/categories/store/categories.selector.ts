import { createSelector } from '@ngrx/store';
import { AppState, CategoriesState } from './state';

const CategoryFeature = (state: AppState) => {
    return state.categoriesStore
};

export const getCategories = createSelector(
    CategoryFeature,
    (state: CategoriesState) => state.categories
);


export const getCategory = createSelector(
    CategoryFeature,
    (state: CategoriesState, _id: string) => state.categories.filter(x => x._id === _id)
);


export const getSelectedCategory = createSelector(
    CategoryFeature,
    (state: CategoriesState) => state.selectedCategory
);

export const getCategoryError = createSelector(
    CategoryFeature,
    (state: CategoriesState) => state.error
);

export const getCategoryIsLoading = createSelector(
    CategoryFeature,
    (state: CategoriesState) => state.isLoading
);

export const getTotalCategories = createSelector(
    CategoryFeature,
    (state: CategoriesState) => state.total
);