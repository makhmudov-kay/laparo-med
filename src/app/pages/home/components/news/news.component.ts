import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperModule } from 'swiper/angular';
import { NewsSlideComponent } from './news-slide/news-slide.component';
import { NEWS_BLOCK } from './news-block';
import { News } from './news-block.interface';
import { ArrowBtnSVG } from 'src/app/shared/svg/arrow-btn/arrow-btn.component';
import { SwiperNavComponent } from 'src/app/shared/components/swiper-nav/swiper-nav.component';
import { TranslateModule } from '@ngx-translate/core';
import { BlogDetailComponent } from 'src/app/pages/blog-detail/blog-detail.component';
import { PostCardComponent } from 'src/app/pages/blog/components/post-card/post-card.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { BlogComponent } from 'src/app/pages/blog/blog.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less'],
  standalone: true,
  imports: [
    SwiperModule,
    NgFor,
    NewsSlideComponent,
    ArrowBtnSVG,
    SwiperNavComponent,
    TranslateModule,
    PostCardComponent,
    AsyncPipe,
    NgIf,
  ],
})
export class NewsComponent extends BlogComponent {
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
  constructor() {
    super();
  }

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
