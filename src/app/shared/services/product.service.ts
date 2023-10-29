import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { Grid } from '../models/grid.model';
import { Product } from '../models/product.model';
import { Constants } from 'src/app/core/configs/constants';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  pageIndex = 1;
  constructor(private $base: BaseService) {}

  getAll(categoryId?: number, search?: string) {
    let params = new HttpParams()
      .append('page', this.pageIndex)
      .append('page_size', Constants.PAGE_SIZE);

    if (categoryId) {
      params = params.append('category_id', categoryId);
    }
    if (search) {
      params = params.append('search', search);
    }
    return this.$base.get<Grid<Product>>('shop/products/', params);
  }
}
