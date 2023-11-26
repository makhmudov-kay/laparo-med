import { Observable } from 'rxjs';
import { Component, ChangeDetectorRef } from '@angular/core';
import { TotalInfoComponent } from './components/total-info/total-info.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgFor, NgIf } from '@angular/common';
import { Select, Selector, State, Store } from '@ngxs/store';
import { DataState } from 'src/app/shared/store/data/data.state';
import { CartAction } from 'src/app/shared/store/data/data.action';
import { Price } from 'src/app/shared/models/price.model';
import { ProductItem } from 'src/app/shared/models/product-detail.model';
import { TranslateModule } from '@ngx-translate/core';
import { OrderService } from './services/order.service';
import { OrderRequest } from 'src/app/shared/models/order.request';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInRight } from 'ng-animate';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],
  standalone: true,
  imports: [
    ProductListComponent,
    TotalInfoComponent,
    NgFor,
    TranslateModule,
    NgIf,
    RouterLink
  ],
  animations: [
    trigger('fadeIn', [
      transition(
        ':enter',
        useAnimation(fadeInRight, {
          params: { timing: 1 },
        })
      ),
    ]),
  ],
})
export class CartComponent {
  /**
   *
   */
  cartItems!: ProductItem[];

  /**
   */
  fadeIn!: any;

  /**
   *
   */
  totalPrice!: Price;

  /**
   */
  visibleMessage = false;

  /**
   */
  isLoading = false;

  /**
   *
   */
  @Select(DataState.cart)
  cart$!: Observable<ProductItem[]>;

  /**
   *
   * @param cd
   */
  constructor(
    private cd: ChangeDetectorRef,
    private $store: Store,
    private order$: OrderService
  ) {
    this.cart$.subscribe((data) => {
      this.cartItems = data;
      this.calcTotalsPrice();
      this.cd.markForCheck();
    });
  }

  /**
   *
   */
  private calcTotalsPrice() {
    this.cartItems.forEach((item) => {
      this.calcTotalPrice(item);
    });
    this.totalPrice = this.cartItems.reduce(
      (total: Price, item: any) => {
        total.usd += item.totalPrice.usd;
        total.uzs += item.totalPrice.uzs;
        total.eur += item.totalPrice.eur;
        return total;
      },
      { usd: 0, uzs: 0, eur: 0 }
    );
    this.cd.markForCheck();
  }

  /**
   *
   * @param newCartList
   */
  private updateCart(newCartList: any[]) {
    this.calcTotalsPrice();
    this.$store.dispatch(new CartAction(newCartList));
  }

  /**
   *
   * @param newCartList
   */
  private calcTotalPrice(newCartList: any) {
    for (const key in newCartList.totalPrice) {
      if (Object.prototype.hasOwnProperty.call(newCartList.totalPrice, key)) {
        if (newCartList.discount > 0) {
          newCartList.totalPrice[key as keyof Price] =
            newCartList.new_price[key as keyof Price] * newCartList.count;
        } else {
          newCartList.totalPrice[key as keyof Price] =
            newCartList.price[key as keyof Price] * newCartList.count;
        }
      }
    }
  }

  /**
   *
   * @param id
   */
  deleteProduct(id: number) {
    const newCartList = this.cartItems.filter((item) => item.id !== id);
    this.updateCart(newCartList);
  }

  /**
   *
   * @param id
   */
  decreaseProduct(id: number) {
    const newCartList = this.cartItems.find((item) => item.id === id);
    if (newCartList && newCartList.count) {
      --newCartList.count;
      this.calcTotalPrice(newCartList);
    }
    const filteredList = this.cartItems.filter((item: any) => item.count !== 0);
    this.updateCart(filteredList);
  }

  /**
   *
   * @param id
   */
  increaseProduct(id: number) {
    const newCartList = this.cartItems.find((item) => item.id === id);
    if (newCartList && newCartList.count) {
      ++newCartList.count;
      this.calcTotalPrice(newCartList);
    }
    this.updateCart(this.cartItems);
  }

  /**
   *
   */
  sendOrder() {
    this.isLoading = true;
    this.cd.markForCheck();
    const products: OrderRequest[] = [];
    this.cartItems.forEach((item) => {
      const newItem = {
        configurator: item.configurator_id ? item.configurator_id : null,
        product: item.id,
        quantity: item.count,
        price: item.discount > 0 ? item.new_price : item.price,
      };

      products.push(newItem);
    });

    this.order$.sendOrder(products).subscribe((result: any) => {
      if (result.detail.includes('Order created')) {
        this.visibleMessage = true;
        this.isLoading = false;
        this.cartItems = [];
        this.$store.dispatch(new CartAction([]));
        localStorage.removeItem('cart');
        this.cd.markForCheck();
        setTimeout(() => {
          this.visibleMessage = false;
          this.cd.markForCheck();
        }, 3000);
      }
    });
  }
}
