import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { ProductDetail } from '../models/product-detail.model';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailService {
  /**
   *
   * @param $base
   */
  constructor(private $base: BaseService) {}

  /**
   *
   * @param id
   * @returns
   */
  getProductById(id: string | null) {
    return this.$base.get<ProductDetail>(`shop/products/${id}`);
  }
}
