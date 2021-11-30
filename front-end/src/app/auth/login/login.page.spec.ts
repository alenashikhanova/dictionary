import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AuthStateInterface } from '../store/types/auth-state.interface';
import { LoginPage } from './login.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { isSubmittingSelector, validationErrorsSelector } from '../store/selectors';
describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let store: MockStore<AuthStateInterface>;
  let mockIsSubmittingSelector;
  let mockValidationErrorsSelector;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
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
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;

    mockValidationErrorsSelector = store.overrideSelector(validationErrorsSelector, validationErrors);
    mockIsSubmittingSelector = store.overrideSelector(isSubmittingSelector, true);

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
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
