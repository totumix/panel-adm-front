import { ActionReducerMap, ActionReducer, INIT, MetaReducer } from '@ngrx/store';
import * as users from './components/main-dashboard/pages/users/store/users.reducer';

export interface AppState {
    usersStore: users.UsersState,
}

export const appReducers: ActionReducerMap<AppState> = {
    usersStore: users.usersReducer,
}

// export const hydrationMetaReducer = (
//     reducer: ActionReducer<AppState>
// ): ActionReducer<AppState> => {
//     return (state, action) => {
//         if (action.type === INIT) {
//             const storageValue = localStorage.getItem("state");
//             if (storageValue) {
//                 try {
//                     return JSON.parse(storageValue);
//                 } catch {
//                     localStorage.removeItem("state");
//                 }
//             }
//         }
//         const nextState = reducer(state, action);
//         localStorage.setItem("state", JSON.stringify(nextState));
//         return nextState;
//     };
// };

// export const metaReducers: MetaReducer[] = [appReducers];
