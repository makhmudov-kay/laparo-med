import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperModule } from 'swiper/angular';
import { AwardsCardComponent } from './awards-card/awards-card.component';
import { SwiperNavComponent } from 'src/app/shared/components/swiper-nav/swiper-nav.component';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.less'],
  standalone: true,
  imports: [SwiperModule, NgFor, AwardsCardComponent, SwiperNavComponent],
})
export class AwardsComponent {
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
