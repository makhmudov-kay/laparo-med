import { Component, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
import { SwiperNavComponent } from 'src/app/shared/components/swiper-nav/swiper-nav.component';
import { NgFor, NgIf } from '@angular/common';
import { ImageItem } from 'src/app/shared/models/product-detail.model';
import { SvgCircleCloseComponent } from 'src/app/shared/svg/svg-circle-close/svg-circle-close.component';
import { ArrowBtnSVG } from 'src/app/shared/svg/arrow-btn/arrow-btn.component';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-swiper-carousel',
  templateUrl: './swiper-carousel.component.html',
  styleUrls: ['./swiper-carousel.component.less'],
  standalone: true,
  imports: [
    SwiperModule,
    SwiperNavComponent,
    NgFor,
    NgIf,
    SvgCircleCloseComponent,
    ArrowBtnSVG,
  ],
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
  @ViewChild('swiperView')
  swiperView!: SwiperComponent;

  /**
   */
  viewImg = false;

  /**
   */
  initialSlide!: number;

  /**
   */
  isActiveindex!: number;

  /**
   *
   * @param cd
   */
  constructor(private cd: ChangeDetectorRef) {}

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
  /**
   *
   */
  preSwiperView() {
    this.swiperView.swiperRef.slidePrev();
    this.isActiveindex = this.swiperView.swiperRef.activeIndex + 1;
  }

  /**
   *
   */
  nextSwiperView() {
    this.swiperView.swiperRef.slideNext();
    this.isActiveindex = this.swiperView.swiperRef.activeIndex + 1;
  }

  /**
   *
   * @param image
   * @param collection
   */
  openImage(image: ImageItem) {
    const selectedImage = this.slides.findIndex((img) => img.id === image.id);
    this.initialSlide = selectedImage;
    this.isActiveindex = selectedImage + 1;
    this.viewImg = true;
  }
}
