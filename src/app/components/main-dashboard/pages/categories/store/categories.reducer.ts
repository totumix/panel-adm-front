import { createReducer, on } from '@ngrx/store';
import * as categoriesActions from './categories.actions';
import * as usersState from './state';

const initialState = usersState.initialState;


const _categoriesReducer = createReducer(
    initialState,
    on(categoriesActions.loadUserRequestAction, (state, { _id }) => ({
        ...state,
        isLoading: true
    })),

    on(categoriesActions.loadUserSuccessAction, (state, { category }) => ({
        ...state,
        isLoading: false,
        selectedCategory: category
    })),

    on(categoriesActions.loadUserFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(categoriesActions.loadRequestAction, state => ({
        ...state,
        isLoading: true
    })),

    on(categoriesActions.loadSuccessAction, (state, { categoriesMetadata }) => ({
        ...state,
        isLoading: false,
        categories: categoriesMetadata.categories,
        total: categoriesMetadata.total
    })),

    on(categoriesActions.loadFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(categoriesActions.saveRequestAction, state => ({
        ...state,
        isLoading: true
    })),

    on(categoriesActions.saveSuccessAction, (state, { category }) => ({
        ...state,
        isLoading: false,
        selectedCategory: category,
        categories: [...state.categories, category],
        error: null
    })),

    on(categoriesActions.saveFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(categoriesActions.updateRequestAction, (state) => ({
        ...state,
        isLoading: true
    })),

    on(categoriesActions.setSelectedCategoryAction, (state, { category }) => ({
        ...state,
        selectedCategory: category,
        isLoading: true,
    })),

    on(categoriesActions.unsetSelectedCategoryAction, (state) => ({
        ...state,
        selectedCategory: null,
    })),

    on(categoriesActions.updateSuccessAction, (state, { category }) => ({
        ...state,
        selectedCategory: category,
        categories: state.categories.map(
            tempCategory => tempCategory._id === category._id ?
                { ...category, name: category.name } : tempCategory
        ),
        isLoading: false,
        error: null
    })),

    on(categoriesActions.updateFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(categoriesActions.deleteRequestAction, state => ({
        ...state,
        isLoading: true
    })),

    on(categoriesActions.deleteSuccessAction, (state, { _id }) => ({
        ...state,
        isLoading: false,
        categories: state.categories.filter(x => x._id != _id)
    })),

    on(categoriesActions.deleteFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    }))
);

export function categoriesReducer(state, action) {
    return _categoriesReducer(state, action);
}