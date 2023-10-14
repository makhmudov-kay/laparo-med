import { AsyncPipe } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MyCurrencyPipe } from 'src/app/shared/pipes/my-currency.pipe';
import { MyTranslatePipe } from 'src/app/shared/pipes/my-translate.pipe';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],
  standalone: true,
  imports: [MyCurrencyPipe, MyTranslatePipe, AsyncPipe, RouterLink],
})
export class ProductComponent {
  /**
   *
   */
  @Input()
  item!: any;

  /**
   *
   */
  @Output()
  deleteProduct = new EventEmitter<number>();

  /**
   *
   * @param id
   */
  deleteFromBasket(id: number) {
    this.deleteProduct.emit(id);
  }
}
