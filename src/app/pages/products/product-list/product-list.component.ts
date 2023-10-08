import { Component, inject } from '@angular/core';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { CategoriesComponent } from '../../blog/components/categories/categories.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SubscribeComponent } from 'src/app/shared/components/subscribe/subscribe.component';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Observable } from 'rxjs';
import { Grid } from 'src/app/shared/models/grid.model';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product..service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less'],
  standalone: true,
  imports: [
    ProductCardComponent,
    NgFor,
    NgIf,
    AsyncPipe,
    CategoriesComponent,
    PaginationComponent,
    SubscribeComponent,
    TranslateModule,
  ],
})
export class ProductListComponent {
  $category = inject(CategoryService);
  $product = inject(ProductService);

  get category$() {
    return this.$category.category$;
  }

  product$!: Observable<Grid<Product>>;

  public get pageIndex(): number {
    return this.$product.pageIndex;
  }
  public set pageIndex(v: number) {
    this.$product.pageIndex = v;
  }

  /**
   *
   */
  constructor() {
    this.product$ = this.$product.getAll();
  }

  /**
   *
   * @param pageIndex
   */
  handlePageIndexChange(pageIndex: number) {
    this.pageIndex = pageIndex;
    this.product$ = this.$product.getAll();
  }
}
