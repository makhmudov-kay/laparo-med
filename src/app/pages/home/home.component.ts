import { Component } from '@angular/core';
import { BannerCarouselComponent } from './components/banner-carousel/banner-carousel.component';
import { OurProductsComponent } from './components/our-products/our-products.component';
import { SubscribeComponent } from 'src/app/shared/components/subscribe/subscribe.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NewsComponent } from './components/news/news.component';
import { PartnersComponent } from './components/partners/partners.component';
import { AwardsComponent } from './components/awards/awards.component';
import { SendFormComponent } from './components/send-form/send-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  standalone: true,
  imports: [
    BannerCarouselComponent,
    OurProductsComponent,
    SubscribeComponent,
    AboutUsComponent,
    NewsComponent,
    PartnersComponent,
    AwardsComponent,
    SendFormComponent
  ],
})
export class HomeComponent {}
