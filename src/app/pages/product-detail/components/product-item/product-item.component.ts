import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
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
  imports: [CalcInputComponent, MyTranslatePipe, MyCurrencyPipe, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  increaseCount = new EventEmitter();

  /**
   *
   */
  @Output()
  decreaseCount = new EventEmitter();

  /**
   *
   */
  private _count!: number;
  public get count(): number {
    return this._count;
  }
  @Input()
  public set count(v: number) {
    this._count = v;
  }

  /**
   *
   */
  @Output()
  addOrDeleteProduct = new EventEmitter<any>();

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
    let count = this.count;
    if (encrese) {
      // ++this.count;

      this.increaseCount.emit();
      ++count;
    } else {
      // --this.count;
      this.decreaseCount.emit();
      --count;
    }
    // this.product.count = this.count;
    this.product.count = count;

    for (const key in this.product.totalPrice) {
      if (Object.prototype.hasOwnProperty.call(this.product.totalPrice, key)) {
        this.product.totalPrice[key as keyof Price] =
          this.product.price[key as keyof Price] * this.product.count;
      }
    }

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
