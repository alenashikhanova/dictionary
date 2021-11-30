import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  const routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
