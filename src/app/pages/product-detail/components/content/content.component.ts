import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { NgFor, NgIf } from '@angular/common';
import { ProductAdditionalComponent } from '../product-additional/product-additional.component';
import { ProductInfoComponent } from '../product-info/product-info.component';
import { MyCurrencyPipe } from 'src/app/shared/pipes/my-currency.pipe';
import { Store } from '@ngxs/store';
import { CartAction } from 'src/app/shared/store/data/data.action';
import { DataState } from 'src/app/shared/store/data/data.state';
import { ProductDetail } from 'src/app/shared/models/product-detail.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less'],
  standalone: true,
  imports: [
    ProductItemComponent,
    NgFor,
    ProductAdditionalComponent,
    ProductAdditionalComponent,
    ProductInfoComponent,
    MyCurrencyPipe,
    NgIf,
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent {
  /**
   *
   */
  @Input()
  product!: ProductDetail;

  /**
   *
   */
  totalPrice = 0;

  /**
   *
   */
  list: any = [];
  needToAddcart: any = [];

  /**
   *
   */
  configurator = false;

  /**
   *
   * @param $store
   */
  constructor(private $store: Store) {}

  /**
   *
   * @param product
   */
  addOrDeleteProduct(product: any) {
    this.list.push(product);

    const result = Object.values(
      this.list.reduce(
        (acc: any, n: any) => (!acc[n.id] && (acc[n.id] = n), acc),
        {}
      )
    );

    const totalPrice = result.reduce(
      (init: any, curr: any) => init + curr.totalPrice,
      0
    ) as number;

    const filteredList = result.filter((item: any) => item.count !== 0);
    this.totalPrice = totalPrice;
    this.needToAddcart = filteredList;
  }

  /**
   *
   */
  addToCart() {
    if (this.needToAddcart.length) {
      const cart = this.$store.selectSnapshot(DataState.cart);

      this.needToAddcart.forEach((item: any) => {
        const sameItem = cart.find((cartItem: any) => item.id === cartItem.id);
        if (sameItem) {
          sameItem.count += item.count;
          sameItem.totalPrice += item.totalPrice;
        } else {
          cart.push({ ...item });
        }
      });

      this.$store.dispatch(new CartAction(cart));
    }
  }

  /**
   *
   * @param id
   */
  toggleCollapse(type: string) {
    this.product.items = this.product.items.map((item: any) => {
      if (item.type === type) {
        item.isOpened = !item.isOpened;
      } else {
        item.isOpened = false;
      }
      return item;
    });
  }

  /**
   *
   */
  toggleConfigurator() {
    this.configurator = !this.configurator;
  }
}
