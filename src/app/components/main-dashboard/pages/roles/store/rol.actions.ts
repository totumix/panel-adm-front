import { createAction, props } from "@ngrx/store";
import { Rol } from "src/app/core/models/rol.model";

export enum ActionTypes {

    SET_SELECTED_ROL = '[Rol] Set Selected Rol',
    UNSET_SELECTED_ROL = '[Rol] Unset Selected Rol',

    LOAD_ROL_REQUEST = '[Rol] Load Rol Request',
    LOAD_ROL_FAILURE = '[Rol] Load Rol Failure',
    LOAD_ROL_SUCCESS = '[Rol] Load Rol Success',

    LOAD_REQUEST = '[Rol] Load Request',
    LOAD_FAILURE = '[Rol] Load Failure',
    LOAD_SUCCESS = '[Rol] Load Success',

    SAVE_REQUEST = '[Rol] Save',
    SAVE_FAILURE = '[Rol] Save Failure',
    SAVE_SUCCESS = '[Rol] Save Success',

    UPDATE_REQUEST = '[Rol] Update',
    UPDATE_FAILURE = '[Rol] Update Failure',
    UPDATE_SUCCESS = '[Rol] Update Success',

    DELETE_REQUEST = '[Rol] Delete',
    DELETE_FAILURE = '[Rol] Delete Failure',
    DELETE_SUCCESS = '[Rol] Delete Success'
}

export const setSelectedRolAction = createAction(
    ActionTypes.SET_SELECTED_ROL,
    props<{ role: Rol }>()
);

export const unsetSelectedRolAction = createAction(
    ActionTypes.UNSET_SELECTED_ROL,
);

//1
export const loadRolRequestAction = createAction(
    ActionTypes.LOAD_ROL_REQUEST,
    props<{ id: string }>()
);

export const loadRolSuccessAction = createAction(
    ActionTypes.LOAD_ROL_FAILURE,
    props<{ role: Rol }>()
);

export const loadRolFailureAction = createAction(
    ActionTypes.LOAD_ROL_SUCCESS,
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
    props<{ rolesMetadata: any }>()
);
//3
export const saveRequestAction = createAction(
    ActionTypes.SAVE_REQUEST,
    props<{ role: Rol }>()
);

export const saveFailureAction = createAction(
    ActionTypes.SAVE_FAILURE,
    props<{ error: string }>()
);

export const saveSuccessAction = createAction(
    ActionTypes.SAVE_SUCCESS,
    props<{ role: Rol }>()
);
//4

export const updateRequestAction = createAction(
    ActionTypes.UPDATE_REQUEST,
    props<{ role: Rol }>()
);

export const updateFailureAction = createAction(
    ActionTypes.UPDATE_FAILURE,
    props<{ error: string }>()
);

export const updateSuccessAction = createAction(
    ActionTypes.UPDATE_SUCCESS,
    props<{ role: Rol }>()
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