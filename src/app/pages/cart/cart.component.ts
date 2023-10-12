import { Observable } from 'rxjs';
import { Component, ChangeDetectorRef } from '@angular/core';
import { TotalInfoComponent } from './components/total-info/total-info.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgFor } from '@angular/common';
import { Select, Store } from '@ngxs/store';
import { DataState } from 'src/app/shared/store/data/data.state';
import { CartAction } from 'src/app/shared/store/data/data.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],
  standalone: true,
  imports: [ProductListComponent, TotalInfoComponent, NgFor],
})
export class CartComponent {
  /**
   *
   */
  cartItems!: any[];

  /**
   *
   */
  totalPrice!: number;

  /**
   *
   */
  @Select(DataState.cart)
  cart$!: Observable<any[]>;

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
      item.totalPrice = item.count * item.price;
    });

    this.totalPrice = this.cartItems.reduce(
      (acc, item) => acc + item.totalPrice,
      0
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
    if (newCartList) {
      --newCartList.count;
    }
    this.updateCart(this.cartItems);
  }

  /**
   *
   * @param id
   */
  increaseProduct(id: number) {
    const newCartList = this.cartItems.find((item) => item.id === id);
    if (newCartList) {
      ++newCartList.count;
    }
    this.updateCart(this.cartItems);
  }
}
