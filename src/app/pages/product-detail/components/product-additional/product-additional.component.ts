import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ItemsType } from 'src/app/shared/models/product-detail.model';

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
  data!: ItemsType;

  /**
   */
  @Input()
  configuratorId!: null | number;

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
   */
  @Output()
  toggleCollapseHandler = new EventEmitter<string>();

  /**
   *
   */
  isActive = false;

  /**
   *
   */
  toggleCollapse(type: string) {
    this.toggleCollapseHandler.emit(type);
  }
}
