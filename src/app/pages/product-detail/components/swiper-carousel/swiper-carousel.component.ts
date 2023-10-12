import { Component, Input, ViewChild } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
import { SwiperNavComponent } from 'src/app/shared/components/swiper-nav/swiper-nav.component';
import { NgFor } from '@angular/common';
import { ImageItem } from 'src/app/shared/models/product-detail.model';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-swiper-carousel',
  templateUrl: './swiper-carousel.component.html',
  styleUrls: ['./swiper-carousel.component.less'],
  standalone: true,
  imports: [SwiperModule, SwiperNavComponent, NgFor],
})
export class SwiperCarouselComponent {
  /**
   *
   */
  @Input()
  slides!: ImageItem[];

  /**
   *
   */
  thumbsSwiper: any;

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
