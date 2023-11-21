import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-product-about',
  templateUrl: './product-about.component.html',
  styleUrls: ['./product-about.component.less'],
  standalone: true,
  imports: [NgFor, TranslateModule],
})
export class ProductAboutComponent {
  @Input()
  data!: any;
}
