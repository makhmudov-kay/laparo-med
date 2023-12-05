import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-product-tabs',
  templateUrl: './product-tabs.component.html',
  styleUrls: ['./product-tabs.component.less'],
  standalone: true,
  imports: [TranslateModule],
})
export class ProductTabsComponent {}
