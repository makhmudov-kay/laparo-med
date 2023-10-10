import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-additional',
  templateUrl: './product-additional.component.html',
  styleUrls: ['./product-additional.component.less'],
  standalone: true,
  imports: [NgFor, ProductItemComponent, NgClass],
})
export class ProductAdditionalComponent {
  /**
   *
   */
  @Input()
  data!: any;

  /**
   *
   */
  @Output()
  addOrDeleteProduct = new EventEmitter<any>();

  /**
   *
   */
  @Output()
  toggleCollapseHandler = new EventEmitter<number>();

  /**
   *
   */
  isActive = false;

  /**
   *
   */
  toggleCollapse(id: number) {
    this.toggleCollapseHandler.emit(id);
  }
}
