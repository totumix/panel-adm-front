import { createAction, props, Action } from "@ngrx/store";
import { User } from "src/app/core/models/user.model";

export enum ActionTypes {

    SET_SELECTED_USER = '[User] Set Selected User',


    LOAD_USER_REQUEST = '[User] Load User Request',
    LOAD_USER_FAILURE = '[User] Load User Failure',
    LOAD_USER_SUCCESS = '[User] Load User Success',

    LOAD_ROLES_REQUEST = '[User] Load Roles Request',
    LOAD_ROLES_FAILURE = '[User] Load Roles Failure',
    LOAD_ROLES_SUCCESS = '[User] Load Roles Success',

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


export const setSelectedUserAction = createAction(
    ActionTypes.SET_SELECTED_USER,
    props<{ user: User }>()
);

//1
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
    props<{ usersMetadata: any }>()
);
//3
export const saveRequestAction = createAction(
    ActionTypes.SAVE_REQUEST,
    props<{ user: User }>()
);

export const saveFailureAction = createAction(
    ActionTypes.SAVE_FAILURE,
    props<{ error: string }>()
);

export const saveSuccessAction = createAction(
    ActionTypes.SAVE_SUCCESS,
    props<{ user: User }>()
);
//4

export const updateRequestAction = createAction(
    ActionTypes.UPDATE_REQUEST,
    props<{ user: User }>()
);

export const updateFailureAction = createAction(
    ActionTypes.UPDATE_FAILURE,
    props<{ error: string }>()
);

export const updateSuccessAction = createAction(
    ActionTypes.UPDATE_SUCCESS,
    props<{ user: User }>()
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
//6
export const loadRolesRequestAction = createAction(
    ActionTypes.LOAD_ROLES_REQUEST
);

export const loadRolesFailureAction = createAction(
    ActionTypes.LOAD_ROLES_FAILURE,
    props<{ error: string }>()
);

export const loadRolesSuccessAction = createAction(
    ActionTypes.LOAD_ROLES_SUCCESS,
    props<{ rolesMetadata: any }>()
);