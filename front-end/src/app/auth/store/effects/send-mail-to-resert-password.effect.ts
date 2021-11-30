/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import {
  sendMailToResetPasswordAction,
  sendMailToResetPasswordFailureAction,
  sendMailToResetPasswordSuccessAction } from '../actions/send-mail-to-reset-password.action';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { ToastService } from 'src/app/shared/services/toast/toast.service';

@Injectable()

export class SendMailToResetPasswordEffect {

  sendMail$ = createEffect(() =>
  this.actions$.pipe(
    ofType(sendMailToResetPasswordAction),
    switchMap(({request}) => {
      return this.authService.sendMail(request).pipe(
        map((currentUser: CurrentUserInterface) => {
          this.toastService.showMessage(`An email has been sent to ${request.email}`);
          return sendMailToResetPasswordSuccessAction({currentUser});
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          this.toastService.showMessage(`Something went wrong ${errorResponse.error}`);
          return of(sendMailToResetPasswordFailureAction({errors: errorResponse.error})
          );
        })
      );
    })
  )
);

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private toastService: ToastService) {}
}


