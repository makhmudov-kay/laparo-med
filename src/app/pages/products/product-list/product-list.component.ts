import { Component, inject } from '@angular/core';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { AsyncPipe, NgFor, NgIf, SlicePipe } from '@angular/common';
import { CategoriesComponent } from '../../blog/components/categories/categories.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SubscribeComponent } from 'src/app/shared/components/subscribe/subscribe.component';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Observable, debounce, debounceTime, takeUntil } from 'rxjs';
import { Grid } from 'src/app/shared/models/grid.model';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { TranslateModule } from '@ngx-translate/core';
import { EmptyCardComponent } from './components/empty-card/empty-card.component';
import { ActivatedRoute } from '@angular/router';
import { NgDestroy } from 'src/app/core/services/ng-destroy.service';

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
    EmptyCardComponent,
    SlicePipe
  ],
  providers: [NgDestroy],
})
export class ProductListComponent {
  $category = inject(CategoryService);
  $product = inject(ProductService);

  get category$() {
    return this.$category.category$;
  }

  product$!: Observable<Grid<Product>>;
  discountProduct$!: Observable<Product[]>;

  public get pageIndex(): number {
    return this.$product.pageIndex;
  }
  public set pageIndex(v: number) {
    this.$product.pageIndex = v;
  }

  /**
   *
   */
  constructor(private route: ActivatedRoute, private destroy$: NgDestroy) {
    this.getAllProducts();
    this.getDiscountProducts();
    this.route.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        const categoryId = Number(params['category_id']);
        if (categoryId === 0) {
          this.getAllProducts();
          return;
        }
        this.filterDataByCategory(categoryId);
      });
  }

  /**
   *
   */
  getAllProducts() {
    this.product$ = this.$product.getAll();
  }

  /**
   *
   */
  getDiscountProducts() {
    this.discountProduct$ = this.$product.getProductsWithDiscount();
  }

  /**
   *
   * @param pageIndex
   */
  handlePageIndexChange(pageIndex: number) {
    this.pageIndex = pageIndex;
    this.getAllProducts();
  }

  /**
   *
   * @param categoryId
   */
  filterDataByCategory(categoryId: number) {
    this.product$ = this.$product.getAll(categoryId);
  }

  /**
   *
   * @param text
   */
  search(text: string) {
    this.product$ = this.$product
      .getAll(undefined, text)
      .pipe(debounceTime(1000));
  }
}
