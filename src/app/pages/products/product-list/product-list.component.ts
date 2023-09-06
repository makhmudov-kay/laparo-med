import { Component } from '@angular/core';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { NgFor } from '@angular/common';
import { CategoriesComponent } from '../../blog/components/categories/categories.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SubscribeComponent } from 'src/app/shared/components/subscribe/subscribe.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less'],
  standalone: true,
  imports: [
    ProductCardComponent,
    NgFor,
    CategoriesComponent,
    PaginationComponent,
    SubscribeComponent
  ],
})
export class ProductListComponent {}
