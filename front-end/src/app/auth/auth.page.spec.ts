import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AuthStateInterface } from '../auth/store/types/auth-state.interface';
import { AuthPage } from './auth.page';

describe('AuthPage', () => {
  let component: AuthPage;
  let fixture: ComponentFixture<AuthPage>;
  let store: MockStore<AuthStateInterface>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [
        provideMockStore({ initialState: state })
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(AuthPage);
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
