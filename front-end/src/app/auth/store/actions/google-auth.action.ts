import { createAction, props } from '@ngrx/store';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { ActionTypes } from '../actionTypes';

export const googleAuthAction = createAction(
  ActionTypes.GOOGLE_AUTH
);

export const googleAuthSuccessAction = createAction(
  ActionTypes.GOOGLE_AUTH_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
);

export const googleAuthFailureAction = createAction(
  ActionTypes.GOOGLE_AUTH_FAILURE,
  props<{errors: BackendErrorsInterface}>()
);
