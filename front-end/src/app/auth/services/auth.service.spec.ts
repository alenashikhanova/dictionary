import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RegisterRequestInterface } from '../store/types/register-request.interface';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';

describe('AuthService', () => {
  let authService: AuthService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should add an user and return it', () => {
    authService.register(newUser).subscribe(
      data => expect(data).toEqual(createdUser, 'should return the employee'),
      fail
    );

    const req = httpTestingController.expectOne('/api/auth/register');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(newUser);

    const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: createdUser });
    req.event(expectedResponse);
  });

});

const newUser: RegisterRequestInterface = {
  username: 'Mahesh',
  email: 'user@gmail.com',
  password: 'password',
  googleId: null
};

const createdUser: CurrentUserInterface = {
      username: 'Mahesh',
      email: 'user@gmail.com',
      id: 'someId',
      token: 'token'
};
