import { createAction, props, Action } from "@ngrx/store";
import { Category } from "src/app/core/models/category.model";

export enum ActionTypes {

    SET_SELECTED_CATEGORY = '[Category] Set Selected Category',
    UNSET_SELECTED_CATEGORY = '[Category] Unset Selected Category',


    LOAD_CATEGORY_REQUEST = '[Category] Load Category Request',
    LOAD_CATEGORY_FAILURE = '[Category] Load Category Failure',
    LOAD_CATEGORY_SUCCESS = '[Category] Load Category Success',

    LOAD_REQUEST = '[Category] Load Request',
    LOAD_FAILURE = '[Category] Load Failure',
    LOAD_SUCCESS = '[Category] Load Success',

    SAVE_REQUEST = '[Category] Save',
    SAVE_FAILURE = '[Category] Save Failure',
    SAVE_SUCCESS = '[Category] Save Success',

    UPDATE_REQUEST = '[Category] Update',
    UPDATE_FAILURE = '[Category] Update Failure',
    UPDATE_SUCCESS = '[Category] Update Success',

    DELETE_REQUEST = '[Category] Delete',
    DELETE_FAILURE = '[Category] Delete Failure',
    DELETE_SUCCESS = '[Category] Delete Success'
}


export const setSelectedCategoryAction = createAction(
    ActionTypes.SET_SELECTED_CATEGORY,
    props<{ category: Category }>()
);

export const unsetSelectedCategoryAction = createAction(
    ActionTypes.UNSET_SELECTED_CATEGORY,
);

//1
export const loadUserRequestAction = createAction(
    ActionTypes.LOAD_CATEGORY_REQUEST,
    props<{ _id: string }>()
);

export const loadUserSuccessAction = createAction(
    ActionTypes.LOAD_CATEGORY_SUCCESS,
    props<{ category: Category }>()
);

export const loadUserFailureAction = createAction(
    ActionTypes.LOAD_CATEGORY_FAILURE,
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
    props<{ categoriesMetadata: any }>()
);
//3
export const saveRequestAction = createAction(
    ActionTypes.SAVE_REQUEST,
    props<{ user: Category }>()
);

export const saveFailureAction = createAction(
    ActionTypes.SAVE_FAILURE,
    props<{ error: string }>()
);

export const saveSuccessAction = createAction(
    ActionTypes.SAVE_SUCCESS,
    props<{ category: Category }>()
);
//4

export const updateRequestAction = createAction(
    ActionTypes.UPDATE_REQUEST,
    props<{ category: Category }>()
);

export const updateFailureAction = createAction(
    ActionTypes.UPDATE_FAILURE,
    props<{ error: string }>()
);

export const updateSuccessAction = createAction(
    ActionTypes.UPDATE_SUCCESS,
    props<{ category: Category }>()
);
//5
export const deleteRequestAction = createAction(
    ActionTypes.DELETE_REQUEST,
    props<{ _id: string }>()
);

export const deleteFailureAction = createAction(
    ActionTypes.DELETE_FAILURE,
    props<{ error: string }>()
);

export const deleteSuccessAction = createAction(
    ActionTypes.DELETE_SUCCESS,
    props<{ _id: string }>()
);
