import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Settings } from '../helpers/settings';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private settings: Settings) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = req.headers
      .set('accept-language', this.settings.language)
      .set('currency', this.settings.currency);
    const authReq = req.clone({ headers });
    return next.handle(authReq);
  }
}
