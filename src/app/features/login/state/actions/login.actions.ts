import { createAction, props } from '@ngrx/store';

export interface User {
  username: string;
  role: string;
}

export interface ErrorLogin {
  code: string;
  msg: string;
}

export const logins = createAction('[Login] Do Logins');

export const loginsSuccess = createAction('[Login] Logins Success', props<{ user: User }>());

export const loginsFailure = createAction('[Login] Logins Failure', props<{ error: ErrorLogin }>());
