import {createAction, props} from '@ngrx/store';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import {ActionTypes} from '../actionTypes';

export const deleteWordAction = createAction(
  ActionTypes.DELETE_WORD,
  props<{id: string}>()
);

export const deleteWordSuccessAction = createAction(
  ActionTypes.DELETE_WORD_SUCCESS,
  props<{idDeleted: string}>()
);

export const deleteWordFailureAction = createAction(
  ActionTypes.DELETE_WORD_FAILURE,
  props<{errors: BackendErrorsInterface}>()
);
