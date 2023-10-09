import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail-title',
  templateUrl: './product-detail-title.component.html',
  styleUrls: ['./product-detail-title.component.less'],
  standalone: true,
})
export class ProductDetailTitleComponent {
  @Input()
  title!: string;
}
