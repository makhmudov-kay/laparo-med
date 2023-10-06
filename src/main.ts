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

<<<<<<< HEAD
export const ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./app/pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('./app/pages/about-us/about-us.component').then(
        (m) => m.AboutUsComponent
      ),
  },
  {
    path: 'contacts',
    loadComponent: () =>
      import('./app/pages/contacts/contacts.component').then(
        (m) => m.ContactsComponent
      ),
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./app/pages/blog/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: 'blog/:id',
    loadComponent: () =>
      import('./app/pages/blog-detail/blog-detail.component').then(
        (m) => m.BlogDetailComponent
      ),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./app/pages/products/products.component').then(
        (m) => m.ProductsComponent
      ),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'list' },
      {
        path: 'list',
        loadComponent: () =>
          import(
            './app/pages/products/product-list/product-list.component'
          ).then((m) => m.ProductListComponent),
      },
      {
        path: 'individuals',
        loadComponent: () =>
          import('./app/pages/products/individuals/individuals.component').then(
            (m) => m.IndividualsComponent
          ),
      },
      {
        path: 'professionals',
        loadComponent: () =>
          import(
            './app/pages/products/professionals/professionals.component'
          ).then((m) => m.ProfessionalsComponent),
      },
      {
        path: 'apex-pro',
        loadComponent: () =>
          import('./app/pages/products/apex-pro/apex-pro.component').then(
            (m) => m.ApexProComponent
          ),
      },
    ],
  },
];
=======
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
>>>>>>> aaf4f06187ef6c846f16016daff64ccfe9d9c825

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      ROUTES,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })
    ),
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
  ],
});
