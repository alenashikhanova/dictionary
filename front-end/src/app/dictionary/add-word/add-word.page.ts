import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import { saveWordAction } from '../store/actions/save-word.action';
import { isSubmittingSelector, validationErrorsSelector } from '../store/selectors';
import { TranslationResponseInterface } from '../store/types/translations-response.interface';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.page.html',
  styleUrls: ['./add-word.page.scss'],
})
export class AddWordPage implements OnInit {
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;

  addWordForm: FormGroup;
  translation: TranslationResponseInterface;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private toastService: ToastService) { }

  ngOnInit() {
    this.initForm();
    this.initializeValues();
  }

  initForm(): void {
    this.addWordForm = this.formBuilder.group({
      word: ['', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-ZА-Яа-я]*$')]]
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(): void {

    if (!this.addWordForm.valid) {
      this.toastService.showError('Form is invalid');
      throw new Error('Form is invalid');
    }

    const word = this.addWordForm.value;
    console.log(word);

    this.store.dispatch(saveWordAction({word}));
    this.addWordForm.reset();
  }

  get word() {
    return this.addWordForm.get('word');
  }
}
