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

  getAll() {
    const params = new HttpParams()
      .append('page', this.pageIndex)
      .append('page_size', Constants.PAGE_SIZE);
    return this.$base.get<Grid<Product>>('shop/products/', params);
  }
}
