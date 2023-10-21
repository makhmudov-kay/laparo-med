import { TranslateModule } from '@ngx-translate/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
} from '@angular/core';
import { CartSVG } from 'src/app/shared/svg/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DataState } from 'src/app/shared/store/data/data.state';
import { CartAction } from 'src/app/shared/store/data/data.action';
import { RouterLink } from '@angular/router';
import { Price } from 'src/app/shared/models/price.model';
import { MyCurrencyPipe } from 'src/app/shared/pipes/my-currency.pipe';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],
  standalone: true,
  imports: [
    CartSVG,
    NgIf,
    AsyncPipe,
    ProductComponent,
    NgFor,
    RouterLink,
    MyCurrencyPipe,
    TranslateModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  /**
   *
   */
  isVisibleCart = false;

  /**
   *
   */
  cartItems!: any[];

  /**
   *
   */
  totalCount!: number;
  totalPrice!: Price;

  /**
   *
   */
  @Select(DataState.cart)
  cart$!: Observable<any[]>;

  /**
   *
   * @param el
   */
  constructor(
    private el: ElementRef,
    private $store: Store,
    private cd: ChangeDetectorRef
  ) {
    this.cart$.subscribe((data) => {
      this.cartItems = data;
      this.totalCount = this.cartItems.reduce(
        (acc, item) => acc + item.count,
        0
      );

      const totalPrices = data.reduce(
        (total: Price, item: any) => {
          total.usd += item.totalPrice.usd;
          total.uzs += item.totalPrice.uzs;
          total.eur += item.totalPrice.eur;
          return total;
        },
        { usd: 0, uzs: 0, eur: 0 }
      );
      this.totalPrice = totalPrices;
      this.cd.markForCheck();
    });
  }

  /**
   *
   */
  toggleCartPopup() {
    this.isVisibleCart = !this.isVisibleCart;
  }

  /**
   *
   * @param id
   */
  deleteProduct(id: number) {
    const newCartList = this.cartItems.filter((item) => item.id !== id);
    this.$store.dispatch(new CartAction(newCartList));
  }

  /**
   *
   * @param event
   */
  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.isVisibleCart = false;
    }
  }
}
