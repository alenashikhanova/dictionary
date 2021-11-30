import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/app-state.interface';
import { DictionaryStateInterface } from './types/dictionary-state.interface';

export const dictionaryFeatureSelector = createFeatureSelector<AppStateInterface, DictionaryStateInterface>('dictionary');

export const isSubmittingSelector = createSelector(
  dictionaryFeatureSelector,
  (dictionaryState: DictionaryStateInterface) => dictionaryState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  dictionaryFeatureSelector,
  (dictionaryState: DictionaryStateInterface) => dictionaryState.validationErrors
);

export const dataSelector = createSelector(
  dictionaryFeatureSelector,
  (dictionaryState: DictionaryStateInterface) => {

    if (dictionaryState.data) {
      return dictionaryState.data;
    } else {
      return [];
    }
  }
);

export const isLoadingSelector = createSelector(
  dictionaryFeatureSelector,
  (dictionaryState: DictionaryStateInterface) => dictionaryState.isLoading
);
