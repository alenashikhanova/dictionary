import { Action, createReducer, on } from '@ngrx/store';
import { googleAuthAction, googleAuthFailureAction, googleAuthSuccessAction } from './actions/google-auth.action';
import { loginAction, loginFailureAction, loginSuccessAction } from './actions/login.action';
import { registerAction, registerFailureAction, registerSuccessAction } from './actions/register.action';
import { resetPasswordAction, resetPasswordFailureAction, resetPasswordSuccessAction } from './actions/reset-password.action';
import {
  sendMailToResetPasswordAction,
  sendMailToResetPasswordFailureAction,
  sendMailToResetPasswordSuccessAction } from './actions/send-mail-to-reset-password.action';
import { AuthStateInterface } from './types/auth-state.interface';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
  on(
    loginAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    loginFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
  on(
    sendMailToResetPasswordAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    sendMailToResetPasswordSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    sendMailToResetPasswordFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
  on(
    resetPasswordAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    resetPasswordSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser
    })
  ),
  on(
    resetPasswordFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
  on(
    googleAuthAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    googleAuthSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser
    })
  ),
  on(
    googleAuthFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  )
);

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
};

