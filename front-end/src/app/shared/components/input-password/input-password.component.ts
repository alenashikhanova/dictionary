import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent implements OnInit {

  @Output() inputChanged = new EventEmitter<string>();

  show = false;
  passwordType = 'password';
  passwordForm: FormGroup;
  savedPassword = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.passwordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]]
    });
  }

  toggleType(): void {
      this.show = !this.show;
      this.passwordType = (this.show) ? 'text' : 'password';
  }

  onInputPassword(event: any): void {
    const value = event.target.value;
    this.passwordForm.patchValue({ password: value });
    this.inputChanged.emit(value);
  }

  get password() {
    return this.passwordForm.get('password');
  }
}
