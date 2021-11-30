import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import { resetPasswordAction } from '../store/actions/reset-password.action';
import { isSubmittingSelector, validationErrorsSelector } from '../store/selectors';
import { ResetPasswordRequestInterface } from '../store/types/reset-password-request.interface';

@Component({
  selector: 'app-password-reset',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;

  passwordForm: FormGroup;
  id: string;
  token: string;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    public toastService: ToastService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
    this.initializeValues();
  }

  initForm(): void {
    this.passwordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));

    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.token = params.token;
    });
  }

  onSubmit(): void {

    if (!this.passwordForm.valid) {
      this.toastService.showError('Email is invalid');
      throw new Error('Email is invalid');
    }

    const request: ResetPasswordRequestInterface = {
      ...this.passwordForm.value,
      _id: this.id,
      token: this.token
    };

    this.store.dispatch(resetPasswordAction({request}));
  }

  get password() {
    return this.passwordForm.get('password');
  }

}
