import { Component } from '@angular/core';
import { ProductsArrowSVG } from 'src/app/shared/svg/products-arrow/products-arrow.component';

@Component({
  selector: 'app-awards-card',
  templateUrl: './awards-card.component.html',
  styleUrls: ['./awards-card.component.less'],
  standalone: true,
  imports: [ProductsArrowSVG],
})
export class AwardsCardComponent {}
