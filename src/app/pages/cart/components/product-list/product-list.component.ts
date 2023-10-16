import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CalcInputComponent } from 'src/app/shared/components/calc-input/calc-input.component';
import { ProductItem } from 'src/app/shared/models/product-detail.model';
import { MyCurrencyPipe } from 'src/app/shared/pipes/my-currency.pipe';
import { MyTranslatePipe } from 'src/app/shared/pipes/my-translate.pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less'],
  standalone: true,
  imports: [
    CalcInputComponent,
    NgIf,
    MyTranslatePipe,
    AsyncPipe,
    MyCurrencyPipe,
    RouterLink,
  ],
})
export class ProductListComponent {
  /**
   *
   */
  @Input()
  product!: ProductItem;

  /**
   *
   */
  @Output()
  decreaseProduct = new EventEmitter<number>();

  /**
   *
   */
  @Output()
  increaseProduct = new EventEmitter<number>();

  /**
   *
   */
  @Output()
  deleteProductHandler = new EventEmitter<number>();

  /**
   *
   */
  isMobileSize = false;

  /**
   *
   * @param cd
   */
  constructor(private cd: ChangeDetectorRef) {
    this.checkMobileSize();
  }

  /**
   *
   */
  private checkMobileSize() {
    this.isMobileSize = window.innerWidth < 576;
    this.cd.markForCheck();
  }

  /**
   *
   */
  decrease() {
    this.decreaseProduct.emit(this.product.id);
  }

  /**
   *
   */
  increase() {
    this.increaseProduct.emit(this.product.id);
  }

  /**
   *
   * @param id
   */
  deleteProduct() {
    this.deleteProductHandler.emit(this.product.id);
  }

  /**
   *
   */
  @HostListener('window:resize')
  onResize(e: any) {
    this.checkMobileSize();
  }
}
