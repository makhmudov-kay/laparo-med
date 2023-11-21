import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-product-detail-title',
  templateUrl: './product-detail-title.component.html',
  styleUrls: ['./product-detail-title.component.less'],
  standalone: true,
  imports: [TranslateModule],
})
export class ProductDetailTitleComponent {
  @Input()
  title!: string;
}
