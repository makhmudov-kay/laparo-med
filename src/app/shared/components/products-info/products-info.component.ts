import { NgFor, NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ArrowSVG } from '../../svg/arrow/arrow.component';
import { IndividualProductsData } from 'src/app/pages/products/individuals/components/individual-products/individual-products.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-products-info',
  templateUrl: './products-info.component.html',
  styleUrls: ['./products-info.component.less'],
  standalone: true,
  imports: [NgFor, ArrowSVG, NgClass, TranslateModule, NgIf],
})
export class ProductsInfoComponent {
  /**
   *
   */
  @Input()
  product!: IndividualProductsData;

  /**
   *
   */
  @Input()
  listColumn!: boolean;

  /**
   * 
   */
  @Input()
  isProfessional = false;
}
