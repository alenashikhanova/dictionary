/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { from, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';
import { Router } from '@angular/router';
import { googleAuthAction, googleAuthFailureAction, googleAuthSuccessAction } from '../actions/google-auth.action';
import { ToastService } from 'src/app/shared/services/toast/toast.service';

@Injectable()

export class GoogleAuthEffect {

  googleAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(googleAuthAction),
      switchMap(() => {
        const observable = from(this.authService.googleAuthSignInServer());
        return observable.pipe(
          switchMap((anotherObservable) => {
            return anotherObservable.pipe(
              map((currentUser: CurrentUserInterface) => {
                this.localStorageService.set('accessToken', currentUser.token);
                return googleAuthSuccessAction({currentUser});
              }),

              catchError((errorResponse: HttpErrorResponse) => {
                this.toastService.showMessage(`Error: ${errorResponse.error}`);
                return of(googleAuthFailureAction({errors: errorResponse.error})
                );
              })
            );
          })
        );
      })
    )
  );


  redirectAfterSubmit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(googleAuthSuccessAction),
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
    private toastService: ToastService,
    private router: Router) {}
}
