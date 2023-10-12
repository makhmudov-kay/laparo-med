import {
  ChangeDetectorRef,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { CalcInputComponent } from 'src/app/shared/components/calc-input/calc-input.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.less'],
  standalone: true,
  imports: [CalcInputComponent],
})
export class ProductItemComponent {
  /**
   *
   */
  private _product!: any;
  public get product(): any {
    return this._product;
  }
  @Input()
  public set product(v: any) {
    this._product = v;
    this._product.count = 0;
    this._product.totalPrice = this.product.price;
  }

  /**
   *
   */
  private _isMain!: boolean;
  public get isMain(): boolean {
    return this._isMain;
  }
  @Input()
  public set isMain(v: boolean) {
    this._isMain = v;
    this.count = v ? 1 : 0;
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
   */
  decrease() {
    if (this.isMain) {
      if (this.count > 1) {
        this.handleCounter();
      }
    } else {
      if (this.count > 0) {
        this.handleCounter();
      }
    }
  }

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
    this.product.totalPrice = this.product.price * this.product.count;

    this.addOrDeleteProduct.emit(this.product);
    this.cd.markForCheck();
  }

  /**
   *
   */
  increase() {
    this.handleCounter(true);
  }
}
