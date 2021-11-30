import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import { sendMailToResetPasswordAction } from '../store/actions/send-mail-to-reset-password.action';
import { isSubmittingSelector, validationErrorsSelector } from '../store/selectors';
import { SendMailToResetPasswordRequestInterface } from '../store/types/send-mail-to-reset-password-request.interface';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;

  sendMailForm: FormGroup;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    public toastService: ToastService) { }

  ngOnInit() {
    this.initForm();
    this.initializeValues();
  }

  initForm(): void {
    this.sendMailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(): void {

    if (!this.sendMailForm.valid) {
      this.toastService.showError('Email is invalid');
      throw new Error('Email is invalid');
    }

    const request: SendMailToResetPasswordRequestInterface = {
      ...this.sendMailForm.value
    };

    this.store.dispatch(sendMailToResetPasswordAction({request}));
  }

  get email() {
    return this.sendMailForm.get('email');
  }
}
