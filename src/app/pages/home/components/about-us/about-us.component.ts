import { Component } from '@angular/core';
import { ProductsArrowSVG } from 'src/app/shared/svg/products-arrow/products-arrow.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.less'],
  standalone: true,
  imports: [ProductsArrowSVG],
})
export class AboutUsComponent {}
