import { createSelector } from '@ngrx/store';
import { AppState, ArticlesState } from './state';

const ArticleFeature = (state: AppState) => {
    return state.articlesStore
};

export const getArticles = createSelector(
    ArticleFeature,
    (state: ArticlesState) => state.articles
);

export const getArticle = createSelector(
    ArticleFeature,
    (state: ArticlesState, id: number) => state.articles.filter(x => x._id === id)
);

export const getSelectedArticle = createSelector(
    ArticleFeature,
    (state: ArticlesState) => state.selectedArticle
);

export const getArticleError = createSelector(
    ArticleFeature,
    (state: ArticlesState) => state.error
);

export const getArticleIsLoading = createSelector(
    ArticleFeature,
    (state: ArticlesState) => state.isLoading
);

export const getTotalArticles = createSelector(
    ArticleFeature,
    (state: ArticlesState) => state.total
);