import { createAction, props, Action } from "@ngrx/store";
import { User } from "src/app/core/models/user.model";

export enum ActionTypes {
    LOAD_USER_REQUEST = '[User] Load User Request',
    LOAD_USER_FAILURE = '[User] Load User Failure',
    LOAD_USER_SUCCESS = '[User] Load User Success',

    LOAD_REQUEST = '[User] Load Request',
    LOAD_FAILURE = '[User] Load Failure',
    LOAD_SUCCESS = '[User] Load Success',

    SAVE_REQUEST = '[User] Save',
    SAVE_FAILURE = '[User] Save Failure',
    SAVE_SUCCESS = '[User] Save Success',

    UPDATE_REQUEST = '[User] Update',
    UPDATE_FAILURE = '[User] Update Failure',
    UPDATE_SUCCESS = '[User] Update Success',

    DELETE_REQUEST = '[User] Delete',
    DELETE_FAILURE = '[User] Delete Failure',
    DELETE_SUCCESS = '[User] Delete Success'
}

export const loadUserRequestAction = createAction(
    ActionTypes.LOAD_USER_REQUEST,
    props<{ id: number }>()
);

export const loadUserSuccessAction = createAction(
    ActionTypes.LOAD_USER_SUCCESS,
    props<{ user: User }>()
);

export const loadUserFailureAction = createAction(
    ActionTypes.LOAD_USER_FAILURE,
    props<{ error: string }>()
);

export const loadRequestAction = createAction(
    ActionTypes.LOAD_REQUEST
);

export const loadFailureAction = createAction(
    ActionTypes.LOAD_FAILURE,
    props<{ error: string }>()
);

export const loadSuccessAction = createAction(
    ActionTypes.LOAD_SUCCESS,
    props<{ usersMetadata: any }>()
);

export const saveRequestAction = createAction(
    ActionTypes.SAVE_REQUEST,
    props<{ item: User }>()
);

export const saveFailureAction = createAction(
    ActionTypes.SAVE_FAILURE,
    props<{ error: string }>()
);

export const saveSuccessAction = createAction(
    ActionTypes.SAVE_SUCCESS,
    props<{ item: User }>()
);


export const updateRequestAction = createAction(
    ActionTypes.UPDATE_REQUEST,
    props<{ item: User }>()
);

export const updateFailureAction = createAction(
    ActionTypes.UPDATE_FAILURE,
    props<{ error: string }>()
);

export const updateSuccessAction = createAction(
    ActionTypes.UPDATE_SUCCESS,
    props<{ item: User }>()
);

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