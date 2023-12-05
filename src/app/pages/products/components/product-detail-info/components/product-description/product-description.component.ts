import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.less'],
  standalone: true,
  imports: [TranslateModule],
})
export class ProductDescriptionComponent {}
