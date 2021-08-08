import { createReducer, on } from '@ngrx/store';
import { IAuthError } from '../../shared/interfaces/auth-error.interface';
import { IUser } from '../../shared/interfaces/user.interface';
import { AuthActions } from './index';

export interface IAuthState {
  user: IUser | null;
  error: IAuthError | null;
  loading: boolean;
}

export const initialState: IAuthState = {
  user: null,
  error: null,
  loading: false,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.checkAuthStatus, (state) => ({
    ...state,
    error: null,
    loading: true,
  })),

  on(AuthActions.authenticated, (state, { user }) => ({
    ...state,
    user,
    error: null,
    loading: false,
  })),

  on(AuthActions.notAuthenticated, () => initialState),

  on(AuthActions.login, (state) => ({ ...state, error: null, loading: true })),

  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    error: null,
    loading: false,
  })),

  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(AuthActions.register, (state) => ({
    ...state,
    error: null,
    loading: true,
  })),

  on(AuthActions.registerSuccess, (state, { user }) => ({
    ...state,
    user,
    error: null,
    loading: false,
  })),

  on(AuthActions.registerFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(AuthActions.logout, () => initialState)
);
