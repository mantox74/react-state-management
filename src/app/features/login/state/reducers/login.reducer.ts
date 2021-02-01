import { Action, createReducer, on } from '@ngrx/store';
import { loginsSuccess, loginsFailure } from '../actions/login.actions';

export const loginFeatureKey = 'login';

export interface State {
  logged: Boolean;
  idUser?: String;
  error?: String;
}

export const initialState: State = {
  logged: false,
};

export const LoginReducer = createReducer(
  initialState,
  on(loginsSuccess, (state, { user }) => {
    return {
      logged: true,
      idUser: user.username,
    };
  }),
  on(loginsFailure, (state, { error }) => {
    return {
      logged: false,
      error: error.msg,
    };
  }),
);
