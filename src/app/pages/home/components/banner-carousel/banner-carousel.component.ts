import { Component, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperModule } from 'swiper/angular';
import { SlideComponent } from './slide/slide.component';
import { ArrowBtnSVG } from 'src/app/shared/svg/arrow-btn/arrow-btn.component';
import { SLIDER_DATE } from './slider-data';
import { NgFor } from '@angular/common';
import { Slide } from './slide.interface';

@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.less'],
  standalone: true,
  imports: [SwiperModule, SlideComponent, ArrowBtnSVG, NgFor],
})
export class BannerCarouselComponent {
  /**
   *
   */
  swiperData: Slide[] = SLIDER_DATE;

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
