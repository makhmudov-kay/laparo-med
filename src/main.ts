import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Route, provideRouter } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: '',
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
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(ROUTES)],
});
