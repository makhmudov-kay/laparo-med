import { Component } from '@angular/core';
import { ProductDetailInfoComponent } from '../components/product-detail-info/product-detail-info.component';
import { ProductAspireComponent } from '../components/product-detail-info/components/product-aspire/product-aspire.component';
import { ProductDescriptionComponent } from '../components/product-detail-info/components/product-description/product-description.component';
import { DescriptionFirstComponent } from '../components/product-detail-info/components/description-first/description-first.component';
import { ProductAboutComponent } from '../components/product-detail-info/components/product-about/product-about.component';
import { ProductFormComponent } from '../components/product-detail-info/components/product-form/product-form.component';

@Component({
  selector: 'app-advance-portable',
  templateUrl: './advance-portable.component.html',
  styleUrls: ['./advance-portable.component.less'],
  standalone: true,
  imports: [
    ProductDetailInfoComponent,
    ProductAspireComponent,
    ProductDescriptionComponent,
    DescriptionFirstComponent,
    ProductAboutComponent,
    ProductFormComponent,
  ],
})
export class AdvancePortableComponent {
  productInfo = {
    title: 'advancePortableTitle',
    contentTitle: 'advancePortableContent',
    text: [
      'advancePortableText1',
      'advancePortableText2',
      'advancePortableText3',
    ],
    aspireText: 'advancePortableAspireText',
    video: './assets/video/advanced-portable.mp4',
    feature: {
      description: 'advancePortableFeatureDescription',
      features: [
        'advancePortableFeature1',
        'advancePortableFeature2',
        'advancePortableFeature3',
        'advancePortableFeature4',
        'advancePortableFeature5',
        'advancePortableFeature6',
        'advancePortableFeature7',
      ],
      img: './assets/image/advance-portable-img.jpg',
    },
    slides: [
      { image: './assets/image/portable-slide-1.jpg' },
      { image: './assets/image/portable-slide-2.jpg' },
      { image: './assets/image/portable-slide-3.png' },
      { image: './assets/image/portable-slide-4.png' },
    ],
  };
}
