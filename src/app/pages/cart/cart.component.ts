import { Observable } from 'rxjs';
import { Component, ChangeDetectorRef } from '@angular/core';
import { TotalInfoComponent } from './components/total-info/total-info.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgFor } from '@angular/common';
import { Select, Store } from '@ngxs/store';
import { DataState } from 'src/app/shared/store/data/data.state';
import { CartAction } from 'src/app/shared/store/data/data.action';
import { Price } from 'src/app/shared/models/price.model';
import { ProductItem } from 'src/app/shared/models/product-detail.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],
  standalone: true,
  imports: [ProductListComponent, TotalInfoComponent, NgFor, TranslateModule],
})
export class CartComponent {
  /**
   *
   */
  cartItems!: ProductItem[];

  /**
   *
   */
  totalPrice!: Price;

  /**
   *
   */
  @Select(DataState.cart)
  cart$!: Observable<ProductItem[]>;

  /**
   *
   * @param cd
   */
  constructor(private cd: ChangeDetectorRef, private $store: Store) {
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
        newCartList.totalPrice[key as keyof Price] =
          newCartList.price[key as keyof Price] * newCartList.count;
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
}
