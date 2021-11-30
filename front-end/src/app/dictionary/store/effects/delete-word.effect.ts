/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { DictionaryService } from '../../services/dictionary.service';
import { deleteWordAction, deleteWordFailureAction, deleteWordSuccessAction } from '../actions/delete-word.action';

@Injectable()

export class DeleteWordEffect {
  deleteWord$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteWordAction),
      switchMap(({id}) => {
        return this.dictionaryService.deleteWord(id).pipe(
          map((idDeleted: string) => {
            return deleteWordSuccessAction({idDeleted});
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(deleteWordFailureAction({errors: errorResponse.error})
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
