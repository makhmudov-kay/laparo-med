import { Component, OnInit } from '@angular/core';
import { SwiperCarouselComponent } from './components/swiper-carousel/swiper-carousel.component';
import { ContentComponent } from './components/content/content.component';
import { ProductShareComponent } from '../products/components/product-detail-info/components/product-share/product-share.component';
import { ProductDetailService } from 'src/app/shared/services/product-detail.service';
import { Observable, map } from 'rxjs';
import { ProductDetail } from 'src/app/shared/models/product-detail.model';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { MyTranslatePipe } from 'src/app/shared/pipes/my-translate.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { SvgSpinnerComponent } from 'src/app/shared/svg/svg-spinner/svg-spinner.component';

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
   * @param $product
   * @param route
   */
  constructor(
    private $product: ProductDetailService,
    private route: ActivatedRoute
  ) {
    // this.id = this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe((e) => {
      this.id = e['id'];
      this.getProductById();
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
}
