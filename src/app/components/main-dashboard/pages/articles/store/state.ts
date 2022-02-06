import { createEntityAdapter, EntityAdapter, EntityState }
    from '@ngrx/entity';
import { Article } from 'src/app/core/models/article.model';
import { Category } from 'src/app/core/models/category.model';


export interface ArticlesState {
    selectedArticle: Article,
    articles: Article[],
    categories: Category[],
    isLoading?: boolean;
    total: number;
    error?: any;
}

export interface AppState {
    articlesStore: ArticlesState
}

export const initialState: ArticlesState =
{
    selectedArticle: null,
    isLoading: false,
    articles: null,
    categories: null,
    total: null,
    error: null
};