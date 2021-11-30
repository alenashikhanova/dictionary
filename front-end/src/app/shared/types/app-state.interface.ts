import { AuthStateInterface } from 'src/app/auth/store/types/auth-state.interface';
import { DictionaryStateInterface } from 'src/app/dictionary/store/types/dictionary-state.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  dictionary: DictionaryStateInterface | null;
};
