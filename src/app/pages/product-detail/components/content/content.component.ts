import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ProductAdditionalComponent } from '../product-additional/product-additional.component';
import { ProductInfoComponent } from '../product-info/product-info.component';
import { MyCurrencyPipe } from 'src/app/shared/pipes/my-currency.pipe';
import { Store } from '@ngxs/store';
import { CartAction } from 'src/app/shared/store/data/data.action';
import { DataState } from 'src/app/shared/store/data/data.state';
import {
  ProductDetail,
  ProductItem,
} from 'src/app/shared/models/product-detail.model';
import { Price } from 'src/app/shared/models/price.model';

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
    AsyncPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent {
  /**
   *
   */

  private _product!: ProductDetail;
  public get product(): ProductDetail {
    return this._product;
  }
  @Input()
  public set product(v: ProductDetail) {
    this._product = v;
    this.singleProduct = {
      id: v.id,
      title: v.title,
      price: v.price,
      image: v.product_images[0].image,
      count: 0,
      totalPrice: {
        usd: v.price.usd,
        uzs: v.price.uzs,
        eur: v.price.eur,
      },
    };
  }

  count = 0;
  singleProduct!: ProductItem;

  /**
   *
   */
  totalPrice!: Price;

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
  constructor(private $store: Store, private cd: ChangeDetectorRef) {}

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

    const totalPrices = result.reduce(
      (total: Price, item: any) => {
        total.usd += item.totalPrice.usd;
        total.uzs += item.totalPrice.uzs;
        total.eur += item.totalPrice.eur;
        return total;
      },
      { usd: 0, uzs: 0, eur: 0 }
    );

    const filteredList = result.filter((item: any) => item.count !== 0);
    this.totalPrice = totalPrices;
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
          sameItem.totalPrice = {
            usd: item.totalPrice.usd
              ? sameItem.totalPrice.usd + item.price.usd * item.count
              : item.price.usd * item.count,
            uzs: item.totalPrice.uzs
              ? sameItem.totalPrice.uzs + item.price.uzs * item.count
              : item.price.uzs * item.count,
            eur: item.totalPrice.eur
              ? sameItem.totalPrice.eur + item.price.eur * item.count
              : item.price.eur * item.count,
          };
        } else {
          cart.push({ ...item });
        }
      });
      this.$store.dispatch(new CartAction(cart));
    }

    this.count = 0;
    for (const key in this.totalPrice) {
      if (Object.prototype.hasOwnProperty.call(this.totalPrice, key)) {
        this.totalPrice[key as keyof Price] = 0;
        this.cd.markForCheck();
      }
    }
    this.cd.markForCheck();
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

  /**
   *
   */
  increaseCount() {
    ++this.count;
    this.cd.markForCheck();
  }

  /**
   *
   */
  decreaseCount() {
    --this.count;
    this.cd.markForCheck();
  }
}
