import { Component, EventEmitter, Output } from '@angular/core';
import { ArrowBtnSVG } from '../../svg/arrow-btn/arrow-btn.component';

@Component({
  selector: 'app-swiper-nav',
  templateUrl: './swiper-nav.component.html',
  styleUrls: ['./swiper-nav.component.less'],
  standalone: true,
  imports: [ArrowBtnSVG],
})
export class SwiperNavComponent {
  /**
   *
   */
  @Output()
  next = new EventEmitter();

  /**
   *
   */
  @Output()
  pre = new EventEmitter();
}
