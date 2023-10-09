import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-aspire',
  templateUrl: './product-aspire.component.html',
  styleUrls: ['./product-aspire.component.less'],
  standalone: true,
})
export class ProductAspireComponent {
  @Input()
  data!: any;
}
