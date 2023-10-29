import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { Registration } from '../model/registration.request';
import { Login } from '../model/login.request';
import { ConfirmUser } from '../model/comfirm.request';
import { Observable, Subject, catchError, tap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /**
   */
  error$: Subject<string> = new Subject<string>();

  /**
   *
   * @param $base
   */
  constructor(private $base: BaseService) {}

  /**
   *
   * @param user
   * @returns
   */
  registration(user: Registration) {
    return this.$base.post('account/register/', user);
  }

  /**
   *
   * @param user
   * @returns
   */
  auth(user: Login) {
    return this.$base
      .post('account/login/', user)
      .pipe(tap(this.setToken), catchError(this.handleError.bind(this)));
  }

  /**
   *
   * @param user
   * @returns
   */
  confirm(user: ConfirmUser) {
    return this.$base.post('account/confirm/', user);
  }

  /**
   */
  get token(): string {
    return localStorage.getItem('access') ?? '';
  }

  /**
   *
   * @returns
   */
  isAuthintificate(): boolean {
    return !!this.token;
  }

  /**
   *
   */
  logout(): void {
    this.setToken(null);
  }

  /**
   *
   * @param error
   * @returns
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    const message = error.error.error;

    switch (message) {
      case 'Unauthorized':
        this.error$.next('Неверный логин или пароль');
        break;
    }

    return throwError(() => error);
  }

  /**
   *
   * @param response
   */
  private setToken(response: any): void {
    if (response) {
      localStorage.setItem('access', response!.access);
      localStorage.setItem('refresh', response!.refresh);
      return;
    }
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
  }
}
