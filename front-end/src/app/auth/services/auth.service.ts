/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { RegisterRequestInterface } from '../store/types/register-request.interface';
import { HttpClient } from '@angular/common/http';
import { LoginRequestInterface } from '../store/types/login-request-interface';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';
import { SendMailToResetPasswordRequestInterface } from '../store/types/send-mail-to-reset-password-request.interface';
import { ResetPasswordRequestInterface } from '../store/types/reset-password-request.interface';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = '/api/auth/register';
    return this.http.post<CurrentUserInterface>(url, data);
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = '/api/auth/login';
    return this.http.post<CurrentUserInterface>(url, data);
  }

  async googleAuthSignInServer(): Promise<Observable<CurrentUserInterface>> {
    const user = await GoogleAuth.signIn();
    const googleUser: RegisterRequestInterface = {
        email: user.email,
        username: user.givenName,
        password: null,
        googleId: user.id
    };

    const url = '/api/auth/google-auth';
    return this.http.post<CurrentUserInterface>(url, googleUser);
  }

  isAuthenticated(): boolean {
    return this.getToken() ? true : false;
  }

  getToken(): string {
    return this.localStorageService.get('accessToken');
  }

  logout(): void {
    this.localStorageService.set('accessToken', '');
  }

  sendMail(data: SendMailToResetPasswordRequestInterface): Observable<CurrentUserInterface> {
    const url = '/api/password-reset';
    return this.http.post<CurrentUserInterface>(url, data);
  }

  resetPassword(data: ResetPasswordRequestInterface): Observable<CurrentUserInterface> {
    const url = `/api/password-reset/${data._id}/${data.token}`;
    return this.http.post<CurrentUserInterface>(url, data);
  }
}
