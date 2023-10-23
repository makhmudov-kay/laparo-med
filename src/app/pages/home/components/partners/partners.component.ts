import { NgFor, NgIf } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperModule } from 'swiper/angular';
import { PARTNERS } from './partners-data';
import { SwiperNavComponent } from 'src/app/shared/components/swiper-nav/swiper-nav.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.less'],
  standalone: true,
  imports: [SwiperModule, NgFor, SwiperNavComponent, NgIf, TranslateModule],
})
export class PartnersComponent {
  /**
   */
  @Input()
  hideTitle = false;

  /**
   *
   */
  data = PARTNERS;

  /**
   *
   */
  @ViewChild('swiper')
  swiper!: SwiperComponent;

  /**
   *
   */
  pre() {
    this.swiper.swiperRef.slidePrev();
  }

  /**
   *
   */
  next() {
    this.swiper.swiperRef.slideNext();
  }
}
