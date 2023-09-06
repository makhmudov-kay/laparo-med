import { Component } from '@angular/core';
import { SvgAddToCartComponent } from 'src/app/shared/svg/svg-add-to-cart/svg-add-to-cart.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less'],
  standalone: true,
  imports: [SvgAddToCartComponent],
})
export class ProductCardComponent {}
