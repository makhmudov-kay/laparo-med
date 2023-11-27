import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgxIntersectionComponent } from 'ngx-intersection2';
import { ProductsArrowSVG } from 'src/app/shared/svg/products-arrow/products-arrow.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.less'],
  standalone: true,
  imports: [
    ProductsArrowSVG,
    TranslateModule,
    NgxIntersectionComponent,
    NgClass,
    RouterLink,
  ],
})
export class AboutUsComponent {
  fade = false;
  handleIntersection(e: boolean) {
    this.fade = e;
  }
}
