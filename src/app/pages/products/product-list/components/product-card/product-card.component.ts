import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from 'src/app/shared/models/product.model';
import { MyCurrencyPipe } from 'src/app/shared/pipes/my-currency.pipe';
import { MyTranslatePipe } from 'src/app/shared/pipes/my-translate.pipe';
import { SvgAddToCartComponent } from 'src/app/shared/svg/svg-add-to-cart/svg-add-to-cart.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less'],
  standalone: true,
  imports: [
    SvgAddToCartComponent,
    MyCurrencyPipe,
    MyTranslatePipe,
    RouterLink,
    AsyncPipe,
  ],
})
export class ProductCardComponent {
  @Input() // { required: true }
  data: Product = {
    id: 0,
    title: { ru: 'test', en: 'test', uz: 'test' },
    price: { uzs: 0, eur: 0, usd: 0 },
    image: './assets/image/product-card-1.png',
    category: 0,
  };
}
