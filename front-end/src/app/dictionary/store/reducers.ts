/* eslint-disable no-underscore-dangle */
import { Action, createReducer, on } from '@ngrx/store';
import { deleteWordAction, deleteWordFailureAction, deleteWordSuccessAction } from './actions/delete-word.action';
import { getWordsAction, getWordsFailureAction, getWordsSuccessAction } from './actions/get-words.action';
import { saveWordAction, saveWordFailureAction, saveWordSuccessAction } from './actions/save-word.action';
import { DictionaryStateInterface } from './types/dictionary-state.interface';
import { TranslationResponseInterface } from './types/translations-response.interface';

const initialState: DictionaryStateInterface = {
  isSubmitting: false,
  isLoading: false,
  validationErrors: null,
  data: null
};

const dictionaryReducer = createReducer(
  initialState,
  on(
    saveWordAction,
    (state): DictionaryStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    saveWordSuccessAction,
    (state, action): DictionaryStateInterface => {
      const newWord = action.data;
      const updatedDictionary: TranslationResponseInterface[] = (state.data !== null) ? [...state.data] : [];

      if (newWord) {
        updatedDictionary.push(newWord);
      }

      return {
        ...state,
        isSubmitting: false,
        data: updatedDictionary
      };
    }
  ),
  on(
    saveWordFailureAction,
    (state, action): DictionaryStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
  on(
    getWordsAction,
    (state): DictionaryStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    getWordsSuccessAction,
    (state, action): DictionaryStateInterface => ({
      ...state,
      isSubmitting: false,
      data: action.data
    })
  ),
  on(
    getWordsFailureAction,
    (state, action): DictionaryStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
  on(
    deleteWordAction,
    (state): DictionaryStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    deleteWordSuccessAction,
    (state, action): DictionaryStateInterface => {
      const idDeleted = action.idDeleted;
      const copyDictionary: TranslationResponseInterface[] = (state.data !== null) ? [...state.data] : [];

      const updatedData = copyDictionary.filter(item => item._id !== idDeleted);

      return {
        ...state,
        isSubmitting: false,
        data: updatedData
      };
    }
  ),
  on(
    deleteWordFailureAction,
    (state, action): DictionaryStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
);

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function reducers(state: DictionaryStateInterface, action: Action) {
  return dictionaryReducer(state, action);
};
