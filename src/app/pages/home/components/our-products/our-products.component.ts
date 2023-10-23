import { Component } from '@angular/core';
import { ProductBlockComponent } from './product-block/product-block.component';
import { PRODUCTS_BLOCK } from './products-block';
import { ProductsBlock } from './products-block.interface';
import { NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.less'],
  standalone: true,
  imports: [ProductBlockComponent, NgFor, TranslateModule],
})
export class OurProductsComponent {
  /**
   *
   */
  productsBlockInfo: ProductsBlock[] = PRODUCTS_BLOCK;
}
