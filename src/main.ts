import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Route, provideRouter } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: 'home',
    loadComponent: () =>
      import('./app/pages/home/home.component').then((m) => m.HomeComponent),
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(ROUTES)],
});
