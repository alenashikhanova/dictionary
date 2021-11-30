import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import { loginAction } from '../store/actions/login.action';
import { isSubmittingSelector, validationErrorsSelector } from '../store/selectors';
import { LoginRequestInterface } from '../store/types/login-request-interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;

  loginForm: FormGroup;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    public toastService: ToastService) { }

  ngOnInit() {
    this.initForm();
    this.initializeValues();
  }

  initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(): void {
    if (!this.loginForm.valid) {
      this.toastService.showError('Form is invalid');
      throw new Error('Form is invalid');
    }

    const request: LoginRequestInterface = {
      ...this.loginForm.value
    };

    this.store.dispatch(loginAction({request}));
  }

  updateInputForm(passwordValue: string): void {
    this.loginForm.patchValue({ password: passwordValue });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get username() {
    return this.loginForm.get('username');
  }
}
