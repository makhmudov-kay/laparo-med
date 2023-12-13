import { Route } from '@angular/router';
import { authGuard } from './app/pages/login/service/auth.guard';

export const ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./app/pages/home/home.component').then((m) => m.HomeComponent),
    data: { title: 'iModels' },
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('./app/pages/about-us/about-us.component').then(
        (m) => m.AboutUsComponent
      ),
    data: { title: 'iModelsAboutUs' },
  },
  {
    path: 'contacts',
    loadComponent: () =>
      import('./app/pages/contacts/contacts.component').then(
        (m) => m.ContactsComponent
      ),
    data: { title: 'iModelscontacts' },
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./app/pages/blog/blog.component').then((m) => m.BlogComponent),
    data: { title: 'iModelsblog' },
  },
  {
    path: 'blog/:id',
    loadComponent: () =>
      import('./app/pages/blog-detail/blog-detail.component').then(
        (m) => m.BlogDetailComponent
      ),
    data: { title: 'iModelsblog' },
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./app/pages/cart/cart.component').then((m) => m.CartComponent),
    data: { title: 'iModelscart' },
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./app/pages/login/login.component').then((m) => m.LoginComponent),
    data: { title: 'iModelslogin' },
  },
  {
    path: 'password-reset',
    loadComponent: () =>
      import('./app/pages/password-reset/password-reset.component').then(
        (m) => m.PasswordResetComponent
      ),
    data: { title: 'iModelspasswordReset' },
  },
  {
    path: 'cabinet',
    loadComponent: () =>
      import('./app/pages/cabinet/cabinet.component').then(
        (m) => m.CabinetComponent
      ),
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'orders', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import(
            './app/pages/cabinet/components/dashboard/dashboard.component'
          ).then((m) => m.DashboardComponent),
        canActivate: [authGuard],
        data: { title: 'iModelsdashboard' },
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./app/pages/cabinet/components/orders/orders.component').then(
            (m) => m.OrdersComponent
          ),
        canActivate: [authGuard],
        data: { title: 'iModelsorders' },
      },
      {
        path: 'details',
        loadComponent: () =>
          import(
            './app/pages/cabinet/components/acc-details/acc-details.component'
          ).then((m) => m.AccDetailsComponent),
        canActivate: [authGuard],
        data: { title: 'iModelsdetails' },
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
        data: { title: 'iModelslist' },
      },

      {
        path: 'individuals',
        loadComponent: () =>
          import('./app/pages/products/individuals/individuals.component').then(
            (m) => m.IndividualsComponent
          ),
        data: { title: 'iModelsindividuals' },
      },
      {
        path: 'professionals',
        loadComponent: () =>
          import(
            './app/pages/products/professionals/professionals.component'
          ).then((m) => m.ProfessionalsComponent),
        data: { title: 'iModelsprofessionals' },
      },
      {
        path: 'apex-pro',
        loadComponent: () =>
          import('./app/pages/products/apex-pro/apex-pro.component').then(
            (m) => m.ApexProComponent
          ),
        data: { title: 'iModelsapexPro' },
      },
      {
        path: 'apex-vr',
        loadComponent: () =>
          import('./app/pages/products/apex-vr/apex-vr.component').then(
            (m) => m.ApexVrComponent
          ),
        data: { title: 'iModelsapexVr' },
      },
      {
        path: 'analytic',
        loadComponent: () =>
          import('./app/pages/products/analytic/analytic.component').then(
            (m) => m.AnalyticComponent
          ),
        data: { title: 'iModelsanalytic' },
      },
      {
        path: 'advance-training-station',
        loadComponent: () =>
          import(
            './app/pages/products/training-station/training-station.component'
          ).then((m) => m.TrainingStationComponent),
        data: { title: 'iModelsadvanceTrainingStation' },
      },
      {
        path: 'advance-portable',
        loadComponent: () =>
          import(
            './app/pages/products/advance-portable/advance-portable.component'
          ).then((m) => m.AdvancePortableComponent),
        data: { title: 'iModelsadvancePortable' },
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./app/pages/product-detail/product-detail.component').then(
            (m) => m.ProductDetailComponent
          ),
        data: { title: 'iModelsproduct' },
      },
    ],
  },
];
