import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SwiperCarouselComponent } from './components/swiper-carousel/swiper-carousel.component';
import { ContentComponent } from './components/content/content.component';
import { ProductShareComponent } from '../products/components/product-detail-info/components/product-share/product-share.component';
import { ProductDetailService } from 'src/app/shared/services/product-detail.service';
import { Observable, filter, map } from 'rxjs';
import {
  ImageItem,
  ProductDetail,
} from 'src/app/shared/models/product-detail.model';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
  RouterLink,
} from '@angular/router';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { MyTranslatePipe } from 'src/app/shared/pipes/my-translate.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { SvgSpinnerComponent } from 'src/app/shared/svg/svg-spinner/svg-spinner.component';
import { SvgCheckComponent } from 'src/app/shared/svg/svg-check/svg-check.component';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInRight } from 'ng-animate';
import { NotificationComponent } from 'src/app/shared/components/notification/notification.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less'],
  standalone: true,
  imports: [
    SwiperCarouselComponent,
    ContentComponent,
    ProductShareComponent,
    NgIf,
    AsyncPipe,
    MyTranslatePipe,
    TranslateModule,
    SvgSpinnerComponent,
    NgFor,
    SvgCheckComponent,
    RouterLink,
    NotificationComponent
  ],
})
export class ProductDetailComponent {
  /**
   *
   */
  id!: string | null;

  /**
   *
   */
  product$!: Observable<ProductDetail>;

  /**
   * 
   */
  isNotification = false;

  /**
   *
   * @param $product
   * @param route
   */
  constructor(
    private $product: ProductDetailService,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {
    this.route.params.subscribe((e) => {
      this.id = e['id'];
      this.getProductById();
    });

    this.router.events
      .pipe(
        filter(
          (e): e is NavigationEnd | NavigationStart =>
            e instanceof NavigationEnd || e instanceof NavigationStart
        )
      )
      .subscribe((e) => {
        if (e instanceof NavigationEnd) {
          this.isNotification = false;
        }
      });
  }

  /**
   *
   */
  private getProductById() {
    if (this.id) {
      this.product$ = this.$product
        .getProductById(this.id)
        .pipe(map((res) => res));
    }
  }

  /**
   *
   * @param e
   */
  isAddedToCart(e: boolean) {
    this.isNotification = e;
    this.cd.markForCheck();
  }
}
