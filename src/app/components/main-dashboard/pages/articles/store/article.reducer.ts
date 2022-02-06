import { createReducer, on } from '@ngrx/store';
import * as articlesActions from './article.actions';
import * as articlesState from './state';

const initialState = articlesState.initialState;


const _articlesReducer = createReducer(
    initialState,
    on(articlesActions.loadArticleRequestAction, (state, { _id }) => ({
        ...state,
        isLoading: true
    })),

    on(articlesActions.loadArticleSuccessAction, (state, { article }) => ({
        ...state,
        isLoading: false,
        selectedArticle: article
    })),

    on(articlesActions.loadArticleFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(articlesActions.loadRequestAction, state => ({
        ...state,
        isLoading: true
    })),

    on(articlesActions.loadSuccessAction, (state, { articlesMetadata }) => ({
        ...state,
        isLoading: false,
        articles: articlesMetadata.articles,
        total: articlesMetadata.total
    })),

    on(articlesActions.loadFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(articlesActions.saveRequestAction, state => ({
        ...state,
        isLoading: true
    })),

    on(articlesActions.saveSuccessAction, (state, { article }) => ({
        ...state,
        isLoading: false,
        selectedArticle: article,
        error: null
    })),

    on(articlesActions.saveFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(articlesActions.updateRequestAction, state => ({
        ...state,
        isLoading: true
    })),

    on(articlesActions.updateSuccessAction, (state, { article }) => ({
        ...state,
        isLoading: false,
        selectedArticle: article,
        error: null
    })),

    on(articlesActions.updateFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(articlesActions.deleteRequestAction, state => ({
        ...state,
        isLoading: true
    })),

    on(articlesActions.deleteSuccessAction, (state, { _id }) => ({
        ...state,
        isLoading: false,
        articles: state.articles.filter(x => x._id != _id)
    })),

    on(articlesActions.deleteFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(articlesActions.loadCategoriesRequestAction, state => ({
        ...state,
        isLoading: true
    })),

    on(articlesActions.loadCategoriesSuccessAction, (state, { categoriesMetadata }) => ({
        ...state,
        isLoading: false,
        categories: categoriesMetadata.categories
    })),

    on(articlesActions.loadCategoriesFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(articlesActions.setSelectedArticleAction, (state, { article }) => ({
        ...state,
        selectedArticle: article,
        isLoading: true,
    })),

    on(articlesActions.unsetSelectedArticleAction, (state) => ({
        ...state,
        selectedArticle: null,
    })),
);

export function articlesReducer(state, action) {
    return _articlesReducer(state, action);
}