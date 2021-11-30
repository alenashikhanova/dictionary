/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { DictionaryService } from '../../services/dictionary.service';
import { TranslationResponseInterface } from '../types/translations-response.interface';
import { getWordsAction, getWordsFailureAction, getWordsSuccessAction } from '../actions/get-words.action';

@Injectable()

export class GetWordsEffect {
  getWords$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getWordsAction),
      switchMap(() => {
        return this.dictionaryService.getAll().pipe(
          map((data: TranslationResponseInterface[]) => {
            return getWordsSuccessAction({data});
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(getWordsFailureAction({errors: errorResponse.error})
            );
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private dictionaryService: DictionaryService) {}
}
