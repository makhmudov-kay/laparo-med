import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Route, provideRouter, withInMemoryScrolling } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderInterceptor } from './app/core/interceptors/header.interceptor';
import { importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';

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
    ],
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      ROUTES,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })
    ),
    importProvidersFrom(HttpClientModule),
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
