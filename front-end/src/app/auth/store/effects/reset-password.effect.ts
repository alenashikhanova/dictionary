/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { resetPasswordAction, resetPasswordFailureAction, resetPasswordSuccessAction } from '../actions/reset-password.action';
import { Router } from '@angular/router';
import { of } from 'rxjs';
@Injectable()

export class ResetPasswordEffect {

  resetPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(resetPasswordAction),
      switchMap(({request}) => {
        return this.authService.resetPassword(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.toastService.showMessage(`Password has been changed`);
            return resetPasswordSuccessAction({currentUser});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            this.toastService.showMessage(`Something went wrong ${errorResponse.error}`);
            return of(resetPasswordFailureAction({errors: errorResponse.error})
            );
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(resetPasswordSuccessAction),
      tap(() => {
        this.router.navigateByUrl('/login');
      })
    ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router) {}
}


