import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperModule } from 'swiper/angular';
import { NewsSlideComponent } from './news-slide/news-slide.component';
import { NEWS_BLOCK } from './news-block';
import { News } from './news-block.interface';
import { ArrowBtnSVG } from 'src/app/shared/svg/arrow-btn/arrow-btn.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less'],
  standalone: true,
  imports: [SwiperModule, NgFor, NewsSlideComponent, ArrowBtnSVG],
})
export class NewsComponent {
  /**
   *
   */
  news: News[] = NEWS_BLOCK;

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
