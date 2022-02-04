import { createReducer, on } from '@ngrx/store';
import * as articlesActions from './article.actions';
import * as articlesState from './state';

const initialState = articlesState.initialState;


const _articlesReducer = createReducer(
    initialState,
    on(articlesActions.loadArticleRequestAction, (state, { id }) => ({
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

    on(articlesActions.updateSuccessAction, (state, { item }) => ({
        ...state,
        isLoading: false,
        selectedBook: item,
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

    on(articlesActions.deleteSuccessAction, (state, { id }) => ({
        ...state,
        isLoading: false,
        articles: state.articles.filter(x => x._id != id)
    })),

    on(articlesActions.deleteFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    }))
);

export function articlesReducer(state, action) {
    return _articlesReducer(state, action);
}