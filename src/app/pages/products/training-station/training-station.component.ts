import { Component } from '@angular/core';
import { ProductDetailInfoComponent } from '../components/product-detail-info/product-detail-info.component';
import { ProductAspireComponent } from '../components/product-detail-info/components/product-aspire/product-aspire.component';
import { ProductDescriptionComponent } from '../components/product-detail-info/components/product-description/product-description.component';
import { DescriptionFirstComponent } from '../components/product-detail-info/components/description-first/description-first.component';
import { ProductAboutComponent } from '../components/product-detail-info/components/product-about/product-about.component';
import { ProductFormComponent } from '../components/product-detail-info/components/product-form/product-form.component';

@Component({
  selector: 'app-training-station',
  templateUrl: './training-station.component.html',
  styleUrls: ['./training-station.component.less'],
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
export class TrainingStationComponent {
  productInfo = {
    title: 'trainingStation',
    contentTitle: 'trainingStation1',
    text: [
      'trainingStation2',
      'trainingStation3',
      'trainingStation4',
      'trainingStation5',
      'networkingWorkTitle1',
      'trainingStation6',
    ],
    aspireText: 'trainingStation7',
    video: './assets/video/advanced-training.mp4',
    feature: {
      description: 'trainingStation8',
      features: [
        'trainingStation9',
        'trainingStation10',
        'trainingStation11',
        'trainingStation12',
        'trainingStation13',
        'trainingStation14',
      ],
      img: './assets/image/advance-training-img.jpg',
    },
    slides: [
      { image: './assets/image/training-slide-1.jpg' },
      { image: './assets/image/training-slide-2.jpg' },
      { image: './assets/image/training-slide-3.jpg' },
      { image: './assets/image/training-slide-4.png' },
      { image: './assets/image/training-slide-5.png' },
      { image: './assets/image/training-slide-6.png' },
    ],
  };
}
