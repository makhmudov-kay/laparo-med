import { Route } from '@angular/router';

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
