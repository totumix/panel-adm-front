import { createAction, props } from "@ngrx/store";
import { Article } from "src/app/core/models/article.model";

export enum ActionTypes {
    LOAD_ARTICLE_REQUEST = '[Article] Load Article Request',
    LOAD_ARTICLE_FAILURE = '[Article] Load Article Failure',
    LOAD_ARTICLE_SUCCESS = '[Article] Load Article Success',

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
    props<{ id: number }>()
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
    props<{ item: Article }>()
);

export const updateFailureAction = createAction(
    ActionTypes.UPDATE_FAILURE,
    props<{ error: string }>()
);

export const updateSuccessAction = createAction(
    ActionTypes.UPDATE_SUCCESS,
    props<{ item: Article }>()
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