import { Route } from '@angular/router';
import { authGuard } from './app/pages/login/service/auth.guard';

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
    path: 'cart',
    loadComponent: () =>
      import('./app/pages/cart/cart.component').then((m) => m.CartComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./app/pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'password-reset',
    loadComponent: () =>
      import('./app/pages/password-reset/password-reset.component').then(
        (m) => m.PasswordResetComponent
      ),
  },
  {
    path: 'cabinet',
    loadComponent: () =>
      import('./app/pages/cabinet/cabinet.component').then(
        (m) => m.CabinetComponent
      ),
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import(
            './app/pages/cabinet/components/dashboard/dashboard.component'
          ).then((m) => m.DashboardComponent),
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./app/pages/cabinet/components/orders/orders.component').then(
            (m) => m.OrdersComponent
          ),
      },
      {
        path: 'details',
        loadComponent: () =>
          import(
            './app/pages/cabinet/components/acc-details/acc-details.component'
          ).then((m) => m.AccDetailsComponent),
      },
    ],
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
      {
        path: 'apex-vr',
        loadComponent: () =>
          import('./app/pages/products/apex-vr/apex-vr.component').then(
            (m) => m.ApexVrComponent
          ),
      },
      {
        path: 'analytic',
        loadComponent: () =>
          import('./app/pages/products/analytic/analytic.component').then(
            (m) => m.AnalyticComponent
          ),
      },
      {
        path: 'advance-training-station',
        loadComponent: () =>
          import(
            './app/pages/products/training-station/training-station.component'
          ).then((m) => m.TrainingStationComponent),
      },
      {
        path: 'advance-portable',
        loadComponent: () =>
          import(
            './app/pages/products/advance-portable/advance-portable.component'
          ).then((m) => m.AdvancePortableComponent),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./app/pages/product-detail/product-detail.component').then(
            (m) => m.ProductDetailComponent
          ),
      },
    ],
  },
];
