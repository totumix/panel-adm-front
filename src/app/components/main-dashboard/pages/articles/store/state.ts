import { createEntityAdapter, EntityAdapter, EntityState }
    from '@ngrx/entity';
import { Article } from 'src/app/core/models/article.model';


export interface ArticlesState {
    selectedArticle: Article,
    articles: Article[],
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
    articles: [],
    total: null,
    error: null
};