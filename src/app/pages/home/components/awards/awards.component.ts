import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperModule } from 'swiper/angular';
import { AwardsCardComponent } from './awards-card/awards-card.component';
import { SwiperNavComponent } from 'src/app/shared/components/swiper-nav/swiper-nav.component';
import { AWARD_SLIDES_DATA } from './slider-data';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.less'],
  standalone: true,
  imports: [
    SwiperModule,
    NgFor,
    AwardsCardComponent,
    SwiperNavComponent,
    TranslateModule,
  ],
})
export class AwardsComponent {
  /**
   *
   */
  @ViewChild('swiper')
  swiper!: SwiperComponent;

  data = AWARD_SLIDES_DATA;

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
