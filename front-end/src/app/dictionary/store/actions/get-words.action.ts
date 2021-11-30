import {createAction, props} from '@ngrx/store';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import { TranslationResponseInterface } from '../types/translations-response.interface';
import {ActionTypes} from '../actionTypes';

export const getWordsAction = createAction(
  ActionTypes.GET_WORDS
);

export const getWordsSuccessAction = createAction(
  ActionTypes.GET_WORDS_SUCCESS,
  props<{data: TranslationResponseInterface[]}>()
);

export const getWordsFailureAction = createAction(
  ActionTypes.GET_WORDS_FAILURE,
  props<{errors: BackendErrorsInterface}>()
);
