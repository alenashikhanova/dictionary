import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import { TranslationResponseInterface } from './translations-response.interface';

export interface DictionaryStateInterface {
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
  isLoading: boolean;
  data: TranslationResponseInterface[] | null;
}
