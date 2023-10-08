import { Component, Input } from '@angular/core';
import { ProductsArrowSVG } from '../../svg/products-arrow/products-arrow.component';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-link-btn',
  templateUrl: './link-btn.component.html',
  styleUrls: ['./link-btn.component.less'],
  standalone: true,
  imports: [ProductsArrowSVG, RouterLink, TranslateModule],
})
export class LinkBtnComponent {
  /**
   * Router link
   */
  @Input()
  link: any[] = [];

  /**
   *
   */
  @Input()
  text = 'readMore';
}
