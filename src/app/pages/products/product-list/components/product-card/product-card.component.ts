import {
  AsyncPipe,
  DecimalPipe,
  JsonPipe,
  NgClass,
  NgIf,
} from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
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
    NgIf,
    NgClass,
    DecimalPipe,
    JsonPipe,
    TranslateModule,
  ],
})
export class ProductCardComponent {
  /**
   *
   */
  @Input() // { required: true }
  data!: any;

  /**
   *
   * @param router
   */
  constructor(private router: Router) {}

  /**
   *
   * @param id
   */
  navigateTo(id: number) {
    this.router.navigate(['products', id]);
  }
}
