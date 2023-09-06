import { Component, Input } from '@angular/core';
import { ProductsArrowSVG } from '../../svg/products-arrow/products-arrow.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link-btn',
  templateUrl: './link-btn.component.html',
  styleUrls: ['./link-btn.component.less'],
  standalone: true,
  imports: [ProductsArrowSVG, RouterLink],
})
export class LinkBtnComponent {
  /**
   *
   */
  @Input()
  link: string | number = '';

  /**
   *
   */
  @Input()
  text = 'Read more';
}
