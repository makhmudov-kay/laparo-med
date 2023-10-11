import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],
  standalone: true,
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
