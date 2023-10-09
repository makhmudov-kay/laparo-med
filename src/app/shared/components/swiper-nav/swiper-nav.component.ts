import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ArrowBtnSVG } from '../../svg/arrow-btn/arrow-btn.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-swiper-nav',
  templateUrl: './swiper-nav.component.html',
  styleUrls: ['./swiper-nav.component.less'],
  standalone: true,
  imports: [ArrowBtnSVG, NgClass],
})
export class SwiperNavComponent {
  /**
   *
   */
  @Input()
  spaceBeetWeen!: boolean;

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
