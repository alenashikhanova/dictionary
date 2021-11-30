import { createAction, props } from '@ngrx/store';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { ActionTypes } from '../actionTypes';
import { SendMailToResetPasswordRequestInterface } from '../types/send-mail-to-reset-password-request.interface';

export const sendMailToResetPasswordAction = createAction(
  ActionTypes.SEND_MAIL_TO_RESET_PASSWORD,
  props<{request: SendMailToResetPasswordRequestInterface}>()
);

export const sendMailToResetPasswordSuccessAction = createAction(
  ActionTypes.SEND_MAIL_TO_RESET_PASSWORD_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
);

export const sendMailToResetPasswordFailureAction = createAction(
  ActionTypes.SEND_MAIL_TO_RESET_PASSWORD_FAILURE,
  props<{errors: BackendErrorsInterface}>()
);
