import { Component } from '@angular/core';
import { SwiperCarouselComponent } from './components/swiper-carousel/swiper-carousel.component';
import { ContentComponent } from './components/content/content.component';
import { ProductShareComponent } from '../products/components/product-detail-info/components/product-share/product-share.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less'],
  standalone: true,
  imports: [SwiperCarouselComponent, ContentComponent, ProductShareComponent],
})
export class ProductDetailComponent {
  data = {
    slides: [
      './assets/image/product-slide-1.png',
      './assets/image/product-slide-2.png',
      './assets/image/product-slide-3.png',
      './assets/image/product-slide-4.png',
      './assets/image/product-slide-5.png',
      './assets/image/product-slide-6.png',
      './assets/image/product-slide-7.png',
    ],
  };
}
