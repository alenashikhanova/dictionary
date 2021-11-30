import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrorsInterface | null;
  isLoading: boolean;
}
