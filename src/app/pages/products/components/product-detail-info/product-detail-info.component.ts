import { Component, Input } from '@angular/core';
import { ProductDetailTitleComponent } from './components/product-detail-title/product-detail-title.component';
import { ProductTabsComponent } from './components/product-tabs/product-tabs.component';
import { TabContentComponent } from './components/tab-content/tab-content.component';
import { ProductShareComponent } from './components/product-share/product-share.component';
import { SwiperCarouselComponent } from 'src/app/pages/product-detail/components/swiper-carousel/swiper-carousel.component';

@Component({
  selector: 'app-product-detail-info',
  templateUrl: './product-detail-info.component.html',
  styleUrls: ['./product-detail-info.component.less'],
  standalone: true,
  imports: [
    ProductDetailTitleComponent,
    ProductTabsComponent,
    TabContentComponent,
    ProductShareComponent,
    SwiperCarouselComponent,
  ],
})
export class ProductDetailInfoComponent {
  @Input()
  data!: any;
}
