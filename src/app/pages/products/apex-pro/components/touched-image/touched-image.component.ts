import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductImage } from 'src/app/shared/models/product-image.model';

@Component({
  selector: 'app-touched-image',
  templateUrl: './touched-image.component.html',
  styleUrls: ['./touched-image.component.less'],
  standalone: true,
  imports: [NgClass, NgFor, NgStyle],
})
export class TouchedImageComponent {
  /**
   */
  @Input()
  imageInfo!: ProductImage;

  /**
   */
  selectedId!: number | null;

  /**
   *
   * @param id
   */
  onSelectInfo(id: number) {
    if (this.selectedId === id) {
      this.selectedId = null;
      return;
    }
    this.selectedId = id;
  }
}
