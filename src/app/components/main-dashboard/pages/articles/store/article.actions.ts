import { createAction, props } from "@ngrx/store";
import { Article } from "src/app/core/models/article.model";

export enum ActionTypes {

    SET_SELECTED_ARTICLE = '[Article] Set Selected Article',
    UNSET_SELECTED_ARTICLE = '[Article] Unset Selected Article',

    LOAD_ARTICLE_REQUEST = '[Article] Load Article Request',
    LOAD_ARTICLE_FAILURE = '[Article] Load Article Failure',
    LOAD_ARTICLE_SUCCESS = '[Article] Load Article Success',

    LOAD_CATEGORIES_REQUEST = '[Article] Load Categories Request',
    LOAD_CATEGORIES_FAILURE = '[Article] Load Categories Failure',
    LOAD_CATEGORIES_SUCCESS = '[Article] Load Categories Success',

    LOAD_REQUEST = '[Article] Load Request',
    LOAD_FAILURE = '[Article] Load Failure',
    LOAD_SUCCESS = '[Article] Load Success',

    SAVE_REQUEST = '[Article] Save',
    SAVE_FAILURE = '[Article] Save Failure',
    SAVE_SUCCESS = '[Article] Save Success',

    UPDATE_REQUEST = '[Article] Update',
    UPDATE_FAILURE = '[Article] Update Failure',
    UPDATE_SUCCESS = '[Article] Update Success',

    DELETE_REQUEST = '[Article] Delete',
    DELETE_FAILURE = '[Article] Delete Failure',
    DELETE_SUCCESS = '[Article] Delete Success'
}

//1
export const loadArticleRequestAction = createAction(
    ActionTypes.LOAD_ARTICLE_REQUEST,
    props<{ _id: string }>()
);

export const loadArticleSuccessAction = createAction(
    ActionTypes.LOAD_ARTICLE_FAILURE,
    props<{ article: Article }>()
);

export const loadArticleFailureAction = createAction(
    ActionTypes.LOAD_ARTICLE_SUCCESS,
    props<{ error: string }>()
);

//2
export const loadRequestAction = createAction(
    ActionTypes.LOAD_REQUEST
);

export const loadFailureAction = createAction(
    ActionTypes.LOAD_FAILURE,
    props<{ error: string }>()
);

export const loadSuccessAction = createAction(
    ActionTypes.LOAD_SUCCESS,
    props<{ articlesMetadata: any }>()
);
//3
export const saveRequestAction = createAction(
    ActionTypes.SAVE_REQUEST,
    props<{ article: Article }>()
);

export const saveFailureAction = createAction(
    ActionTypes.SAVE_FAILURE,
    props<{ error: string }>()
);

export const saveSuccessAction = createAction(
    ActionTypes.SAVE_SUCCESS,
    props<{ article: Article }>()
);
//4

export const updateRequestAction = createAction(
    ActionTypes.UPDATE_REQUEST,
    props<{ article: Article }>()
);

export const updateFailureAction = createAction(
    ActionTypes.UPDATE_FAILURE,
    props<{ error: string }>()
);

export const updateSuccessAction = createAction(
    ActionTypes.UPDATE_SUCCESS,
    props<{ article: Article }>()
);
//5
export const deleteRequestAction = createAction(
    ActionTypes.DELETE_REQUEST,
    props<{ id: number }>()
);

export const deleteFailureAction = createAction(
    ActionTypes.DELETE_FAILURE,
    props<{ error: string }>()
);

export const deleteSuccessAction = createAction(
    ActionTypes.DELETE_SUCCESS,
    props<{ id: number }>()
);
//
export const loadCategoriesRequestAction = createAction(
    ActionTypes.LOAD_CATEGORIES_REQUEST
);

export const loadCategoriesFailureAction = createAction(
    ActionTypes.LOAD_CATEGORIES_FAILURE,
    props<{ error: string }>()
);

export const loadCategoriesSuccessAction = createAction(
    ActionTypes.LOAD_CATEGORIES_SUCCESS,
    props<{ categoriesMetadata: any }>()
);
//
export const setSelectedArticleAction = createAction(
    ActionTypes.SET_SELECTED_ARTICLE,
    props<{ article: Article }>()
);

export const unsetSelectedArticleAction = createAction(
    ActionTypes.UNSET_SELECTED_ARTICLE,
);