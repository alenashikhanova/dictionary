import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import { registerAction } from '../store/actions/register.action';
import { isSubmittingSelector, validationErrorsSelector } from '../store/selectors';
import { RegisterRequestInterface } from '../store/types/register-request.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;

  registerForm: FormGroup;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    public toastService: ToastService) { }

  ngOnInit() {
    this.initForm();
    this.initializeValues();
  }

  initForm(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
      googleId: [null]
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(): void {

    if (!this.registerForm.valid) {
      this.toastService.showError('Form is invalid');
      throw new Error('Form is invalid');
    }

    const request: RegisterRequestInterface = {
      ...this.registerForm.value
    };

    this.store.dispatch(registerAction({request}));
  }

  updateInputForm(passwordValue: string): void {
    this.registerForm.patchValue({ password: passwordValue });
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get username() {
    return this.registerForm.get('username');
  }

}
