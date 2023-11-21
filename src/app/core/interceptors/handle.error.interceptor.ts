import { Inject, Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { catchError, Observable, throwError, retry } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/login/service/auth.service';

export interface ErrorModel {
  errors: { [key: string]: string[] };
  message: string;
}

@Injectable()
export class HandleErrorInterceptor implements HttpInterceptor {
  /**
   *
   */
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private $auth: AuthService,
    private router: Router
  ) {}

  /**
   *
   * @param req
   * @param next
   * @returns
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      // retry(1),
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.Unauthorized) {
          this.$auth.logout();
          this.router.navigate(['./', 'login']);
          return throwError(() => error);
        }

        const errorCustom = this.getServerErrors(error);

        return throwError(() => errorCustom);
      })
    );
  }

  private getServerErrors(error: HttpErrorResponse) {
    if (!navigator.onLine) {
      return 'Offline';
    }

    switch (error.status) {
      case HttpStatusCode.PayloadTooLarge:
        return 'PayloadTooLarge';

      case HttpStatusCode.Forbidden:
        return 'Forbidden';

      case HttpStatusCode.InternalServerError:
        return 'InternalServerError';

      case HttpStatusCode.NotFound:
        return 'NotFound';

      default:
        return this.getErrorFromServer(error);
    }
  }

  /**
   *
   * @param error
   * @returns
   */
  private getErrorFromServer(error: HttpErrorResponse) {
    const errors = (error.error as ErrorModel).errors;
    if (errors) {
      const firstError = errors[Object.keys(errors)[0]];
      if (firstError) {
        if (firstError[0] != undefined) {
          return error.error as ErrorModel;
        }
      }

      // return ErrorHelper.createUnknownError(error.error.error);
      return { unknownError: JSON.stringify(errors) };
    }

    // return ErrorHelper.createUnknownError(error);
    return { unknownError: JSON.stringify(error) };
  }
}
