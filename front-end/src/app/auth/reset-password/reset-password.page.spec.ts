import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AuthStateInterface } from '../store/types/auth-state.interface';
import { ResetPasswordPage } from './reset-password.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';



describe('PasswordResetPage', () => {
  let component: ResetPasswordPage;
  let fixture: ComponentFixture<ResetPasswordPage>;
  let store: MockStore<AuthStateInterface>;
  let mockIsSubmittingSelector;
  let mockValidationErrorsSelector;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswordPage ],
      imports: [
        IonicModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        provideMockStore({ initialState: state })
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ResetPasswordPage);
    component = fixture.componentInstance;
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
