import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { CalcInputComponent } from 'src/app/shared/components/calc-input/calc-input.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less'],
  standalone: true,
  imports: [CalcInputComponent, NgIf],
})
export class ProductListComponent {
  /**
   *
   */
  @Input()
  product!: any;

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
    this.decreaseProduct.emit(17);
  }

  /**
   *
   */
  increase() {
    this.increaseProduct.emit(17);
  }

  /**
   *
   * @param id
   */
  deleteProduct(id: number) {
    this.deleteProductHandler.emit(id);
  }

  /**
   *
   */
  @HostListener('window:resize')
  onResize(e: any) {
    this.checkMobileSize();
  }
}
