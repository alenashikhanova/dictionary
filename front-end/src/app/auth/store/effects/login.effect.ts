/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';
import { Router } from '@angular/router';
import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.action';
@Injectable()

export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({request}) => {
        return this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.localStorageService.set('accessToken', currentUser.token);
            return loginSuccessAction({currentUser});
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(loginFailureAction({errors: errorResponse.error})
            );
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccessAction),
      tap(() => {
        this.router.navigateByUrl('/', { replaceUrl: true});
      })
    ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router) {}
}
