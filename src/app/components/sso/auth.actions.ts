import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/core/models/user';

export const setUser = createAction(
    '[Auth ] setUser',
    props<{ user: IUser }>()
);

export const unSetUser = createAction(
    '[Auth ] unSetUser',
);