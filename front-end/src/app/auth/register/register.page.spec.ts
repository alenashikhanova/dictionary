import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RegisterPage } from './register.page';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthStateInterface } from '../store/types/auth-state.interface';
import { isSubmittingSelector, validationErrorsSelector } from '../store/selectors';
import { registerAction } from '../store/actions/register.action';
import { RegisterRequestInterface } from '../store/types/register-request.interface';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  let store: MockStore<AuthStateInterface>;
  let mockIsSubmittingSelector;
  let mockValidationErrorsSelector;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      declarations: [
        RegisterPage
      ],
      imports: [
        IonicModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        provideMockStore({ initialState: state })
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;

    mockValidationErrorsSelector = store.overrideSelector(validationErrorsSelector, validationErrors);
    mockIsSubmittingSelector = store.overrideSelector(isSubmittingSelector, true);

    fixture.detectChanges();
    spyOn(store, 'dispatch').and.callFake(() => {});
  }));

  afterEach(() => { fixture.destroy(); });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('OnSubmit method should dispatch if form is valid', () => {
    component.registerForm.setValue(validFormValues);
    fixture.detectChanges();
    expect(component.registerForm.valid).toBeTruthy();
    component.onSubmit();
    expect(store.dispatch).toHaveBeenCalledWith(registerAction({request: validFormValues}));
  });

  it('OnSubmit method should show error if form is not valid', () => {
    component.registerForm.setValue(emptyFormValues);
    fixture.detectChanges();
    expect(component.registerForm.valid).toBeFalsy();
    expect(() => component.onSubmit()).toThrow(new Error('Form is invalid'));
  });
});

const state: AuthStateInterface =  {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
  isLoading: false
};


const validationErrors = {
  key: 'message',
  value: 'some errors'
};

const validFormValues: RegisterRequestInterface = {
  username: 'John',
  email: 'john@mainModule.com',
  password: 'password',
  googleId: null
};

const emptyFormValues = {
  username: '',
  email: '',
  password: '',
  googleId: null
};
