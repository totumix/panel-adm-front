import { createSelector } from '@ngrx/store';
import { AppState, ArticlesState } from './state';

const ArticleFeature = (state: AppState) => {
    return state.articlesStore
};

export const getArticles = createSelector(
    ArticleFeature,
    (state: ArticlesState) => state.articles
);

export const getCategories = createSelector(
    ArticleFeature,
    (state: ArticlesState) => state.categories
);

export const getArticle = createSelector(
    ArticleFeature,
    (state: ArticlesState, _id: string) => state.articles.filter(x => x._id === _id)
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