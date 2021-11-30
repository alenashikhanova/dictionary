import {createAction, props} from '@ngrx/store';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import { TranslationResponseInterface } from '../types/translations-response.interface';
import {ActionTypes} from '../actionTypes';

export const saveWordAction = createAction(
  ActionTypes.SAVE_WORD,
  props<{word: string}>()
);

export const saveWordSuccessAction = createAction(
  ActionTypes.SAVE_WORD_SUCCESS,
  props<{data: TranslationResponseInterface}>()
);

export const saveWordFailureAction = createAction(
  ActionTypes.SAVE_WORD_FAILURE,
  props<{errors: BackendErrorsInterface}>()
);
