import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ForgotPasswordPage } from './forgot-password.page';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AuthStateInterface } from '../store/types/auth-state.interface';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ForgotPasswordPage', () => {
  let component: ForgotPasswordPage;
  let fixture: ComponentFixture<ForgotPasswordPage>;
  let store: MockStore<AuthStateInterface>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordPage ],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        FormBuilder,
        provideMockStore({ initialState: state })
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(ForgotPasswordPage);
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
