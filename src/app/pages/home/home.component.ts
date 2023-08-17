import { Component } from '@angular/core';
import { BannerCarouselComponent } from './components/banner-carousel/banner-carousel.component';
import { OurProductsComponent } from './components/our-products/our-products.component';
import { SubscribeComponent } from 'src/app/shared/components/subscribe/subscribe.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  standalone: true,
  imports: [BannerCarouselComponent, OurProductsComponent, SubscribeComponent],
})
export class HomeComponent {}
