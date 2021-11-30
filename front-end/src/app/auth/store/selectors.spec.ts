import { authFeatureSelector, isSubmittingSelector, validationErrorsSelector } from './selectors';
import { AppStateInterface } from '../../shared/types/app-state.interface';

describe('Selectors', () => {
  const initialState: AppStateInterface = {
    auth: {
      isSubmitting: false,
      currentUser: null,
      isLoggedIn: null,
      validationErrors: {key: 'error', value: 'some error'},
      isLoading: false,
    },
    dictionary: null
  };

  it('should select isSubmitting', () => {
    const isSubmitting = isSubmittingSelector.projector(initialState.auth);
    expect(isSubmitting).toEqual(false);
  });

  it('should select validationErrors', () => {
    const validationErrors = validationErrorsSelector.projector(initialState.auth);
    expect(validationErrors).toEqual({key: 'error', value: 'some error'});
  });

});
