import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-product-aspire',
  templateUrl: './product-aspire.component.html',
  styleUrls: ['./product-aspire.component.less'],
  standalone: true,
  imports: [TranslateModule],
})
export class ProductAspireComponent {
  @Input()
  data!: any;
}
