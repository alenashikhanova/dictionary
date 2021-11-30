/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { DictionaryService } from '../../services/dictionary.service';
import { saveWordAction, saveWordFailureAction, saveWordSuccessAction } from '../actions/save-word.action';
import { TranslationResponseInterface } from '../types/translations-response.interface';
import { ToastService } from 'src/app/shared/services/toast/toast.service';

@Injectable()

export class SaveWordEffect {
  saveWord$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveWordAction),
      switchMap(({word}) => {
        console.log('SaveWordEffect');

        return this.dictionaryService.addWord(word).pipe(
          map((data: TranslationResponseInterface) => {
            return saveWordSuccessAction({data});
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            this.toastService.showError(errorResponse.error.message);
            return of(saveWordFailureAction({errors: errorResponse.error})
            );
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private dictionaryService: DictionaryService,
    private toastService: ToastService) {}
}
