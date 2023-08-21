import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import { NewsSlideComponent } from './news-slide/news-slide.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less'],
  standalone: true,
  imports: [SwiperModule, NgFor, NewsSlideComponent],
})
export class NewsComponent {}
