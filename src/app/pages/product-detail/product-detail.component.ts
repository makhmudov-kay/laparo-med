import { ChangeDetectorRef, Component, ViewChild, inject } from '@angular/core';
import { SwiperCarouselComponent } from './components/swiper-carousel/swiper-carousel.component';
import { ContentComponent } from './components/content/content.component';
import { ProductShareComponent } from '../products/components/product-detail-info/components/product-share/product-share.component';
import { ProductDetailService } from 'src/app/shared/services/product-detail.service';
import { Observable, filter, map, tap } from 'rxjs';
import {
  ItemsType,
  ProductDetail,
  ProductItem,
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
import { NotificationComponent } from 'src/app/shared/components/notification/notification.component';
import { SvgCloseComponent } from 'src/app/shared/svg/svg-close/svg-close.component';
import { SwiperComponent, SwiperModule } from 'swiper/angular';
import { ArrowBtnSVG } from 'src/app/shared/svg/arrow-btn/arrow-btn.component';
import { MyCurrencyPipe } from 'src/app/shared/pipes/my-currency.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { MyTranslateSyncPipe } from 'src/app/shared/pipes/my-translate-sync.pipe';
import { MyCurrencySyncPipe } from 'src/app/shared/pipes/my-currency-sync.pipe';

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
    NotificationComponent,
    SvgCloseComponent,
    SwiperModule,
    ArrowBtnSVG,
    MyCurrencyPipe,
    MyTranslateSyncPipe,
    MyCurrencySyncPipe
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
   */
  thumbsSwiper: any;

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
   */
  modules!: ProductItem[];

  /**
   */
  visibleModulesSlide = false;

  sanitizer!: DomSanitizer;

  /**
   */
  videoId!: string;

  /**
   *
   * @param $product
   * @param route
   */
  constructor(
    private $product: ProductDetailService,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef,
    private $sanitizer: DomSanitizer
  ) {
    this.sanitizer = $sanitizer;
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
   */
  private getProductById() {
    if (this.id) {
      this.product$ = this.$product.getProductById(this.id).pipe(
        map((res) => res),
        tap((res) => {
          this.modules = this.collectionModules(res.items);
          this.cd.markForCheck();
        })
      );
    }
  }

  /**
   *
   * @param items
   * @returns
   */
  collectionModules(items: ItemsType[]): ProductItem[] {
    let filteredItems: ProductItem[] = [];

    if (items && items.length) {
      items.forEach((item) => {
        item.product.forEach((el) => {
          filteredItems.push(el);
        });
      });
    }

    return filteredItems;
  }

  /**
   *
   * @param e
   */
  isAddedToCart(e: boolean) {
    this.isNotification = e;
    this.cd.markForCheck();
  }

  /**
   *
   * @param id
   */
  openModuleSlider(id: number) {
    const selectedProduct = this.modules.findIndex(
      (product) => product.id === id
    );
    this.initialSlide = selectedProduct;
    this.isActiveindex = selectedProduct + 1;
    this.visibleModulesSlide = true;
    this.cd.markForCheck();
  }

  /**
   *
   * @param link
   * @returns
   */
  setUrl(link: string) {
    let id = link.split('=')[1];
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${id}`
    );
  }
}
