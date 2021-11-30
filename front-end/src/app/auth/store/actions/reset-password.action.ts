import { createAction, props } from '@ngrx/store';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { ActionTypes } from '../actionTypes';
import { ResetPasswordRequestInterface } from '../types/reset-password-request.interface';

export const resetPasswordAction = createAction(
  ActionTypes.RESET_PASSWORD,
  props<{request: ResetPasswordRequestInterface}>()
);

export const resetPasswordSuccessAction = createAction(
  ActionTypes.RESET_PASSWORD_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
);

export const resetPasswordFailureAction = createAction(
  ActionTypes.RESET_PASSWORD_FAILURE,
  props<{errors: BackendErrorsInterface}>()
);
