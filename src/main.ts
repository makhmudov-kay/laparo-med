import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Route, provideRouter, withInMemoryScrolling } from '@angular/router';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { HeaderInterceptor } from './app/core/interceptors/header.interceptor';
import { importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ROUTES } from './_routes';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxsModule } from '@ngxs/store';
import { DataState } from './app/shared/store/data/data.state';
import { DecimalPipe } from '@angular/common';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { HandleErrorInterceptor } from './app/core/interceptors/handle.error.interceptor';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      ROUTES,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })
    ),
    provideEnvironmentNgxMask(),
    importProvidersFrom(
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient],
        },
      }),

      /** NgxsModule for store usage, StateList is for states which ngxs store serves */
      NgxsModule.forRoot([DataState], {})
    ),
    {
      provide: 'API_URL',
      useValue: environment.endpoint,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HandleErrorInterceptor,
      multi: true,
    },
    DecimalPipe,
  ],
});
