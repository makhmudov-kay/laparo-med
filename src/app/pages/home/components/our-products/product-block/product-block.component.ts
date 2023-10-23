import { Component, Input } from '@angular/core';
import { ProductsArrowSVG } from 'src/app/shared/svg/products-arrow/products-arrow.component';
import { ProductsBlock } from '../products-block.interface';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-product-block',
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.less'],
  standalone: true,
  imports: [ProductsArrowSVG, NgClass, TranslateModule],
})
export class ProductBlockComponent {
  /**
   *
   */
  @Input()
  product!: ProductsBlock;
}
