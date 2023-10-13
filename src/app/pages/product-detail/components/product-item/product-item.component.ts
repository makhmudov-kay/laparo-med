import {
  ChangeDetectorRef,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { CalcInputComponent } from 'src/app/shared/components/calc-input/calc-input.component';
import { Price } from 'src/app/shared/models/price.model';
import { ProductItem } from 'src/app/shared/models/product-detail.model';
import { MyCurrencyPipe } from 'src/app/shared/pipes/my-currency.pipe';
import { MyTranslatePipe } from 'src/app/shared/pipes/my-translate.pipe';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.less'],
  standalone: true,
  imports: [CalcInputComponent, MyTranslatePipe, MyCurrencyPipe],
})
export class ProductItemComponent {
  /**
   *
   */
  private _product!: ProductItem;
  public get product(): ProductItem {
    return this._product;
  }
  @Input()
  public set product(v: ProductItem) {
    this._product = v;
    this._product.count = 0;
    this._product.totalPrice = { ...this.product.price };
  }

  /**
   *
   */
  @Output()
  addOrDeleteProduct = new EventEmitter<any>();

  /**
   *
   */
  count = 0;

  /**
   *
   * @param cd
   */
  constructor(private cd: ChangeDetectorRef) {}

  /**
   *
   * @param encrese
   */
  private handleCounter(encrese: boolean = false) {
    if (encrese) {
      ++this.count;
    } else {
      --this.count;
    }
    this.product.count = this.count;

    for (const key in this.product.totalPrice) {
      if (Object.prototype.hasOwnProperty.call(this.product.totalPrice, key)) {
        this.product.totalPrice[key as keyof Price] =
          this.product.price[key as keyof Price] * this.product.count;
      }
    }

    // this.product.totalPrice = this.product.price * this.product.count;
    this.addOrDeleteProduct.emit(this.product);
    this.cd.markForCheck();
  }

  /**
   *
   */
  increase() {
    this.handleCounter(true);
  }

  /**
   *
   */
  decrease() {
    if (this.count > 0) {
      this.handleCounter();
    }
  }
}
