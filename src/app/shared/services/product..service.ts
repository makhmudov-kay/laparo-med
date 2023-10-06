import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { Grid } from '../models/grid.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private $base: BaseService) {}

  getAll() {
    return this.$base.get<Grid<Product>>('shop/products/');
  }
}
