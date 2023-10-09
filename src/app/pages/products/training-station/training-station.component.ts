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
    title: 'LAPARO Advance Training Station – Laparoscopic Simulator',
    contentTitle: 'Advanced trainer for Professionals',
    text: [
      'A complete and robust set for practical training in minimally invasive surgery. Meet LAPARO Advance Training Station, which is designed in cooperation with professionals for professionals in medical simulation centers, universities and hospitals.',
      'Device dimensions 146-185 x 60 x 67cm',
      'Package dimensions 80 x 120 x 136 cm',
      'Shipping: Worldwide',
      'Made in EU',
      'Warranty: 2 years',
    ],
    aspireText:
      'Non-intuitive tool guidance, a two-dimensional view, and a limited operating field are well-known reasons why minimally invasive surgical methods require additional training and practice. The LAPARO Advance simulator makes it an ideal solution in situations where frequent training of laparoscopic procedures is necessary.',
    video: './assets/video/advanced-training.mp4',
    feature: {
      description:
        'The Laparo Advance was developed for use at institutions, medical simulation centers and hospitals around the world. The Laparo Advance Training Station features a foldable desk station with height adjustment and a large heavy-duty trainer box attached to a solid base. The whole station is designed to last a long time and intense daily use. The Laparo Advance is equipped with a Full HD USB Camera which is mounted on a 30° ball-joint mount. Any question? Contact us!',
      features: [
        'Laparo Advance - trainer with a built-in FULL HD 30 ° camera and LED lighting',
        'Independent training station, equipped with an all-in-one computer with a touch screen',
        'Real clinical instruments: dissector, grasper, scissors, needle holder, clip applier',
        'Training modules: Dexterity, Tension, Suturing, Cutting Circles + Universal Holder, Dissection 3 in 1.',
        'Laparo Training Program - all 4 courses!',
        '46 unique exercises!',
      ],
      img: './assets/image/advance-training-img.jpg',
    },
    slides: [
      './assets/image/training-slide-1.jpg',
      './assets/image/training-slide-2.jpg',
      './assets/image/training-slide-3.jpg',
      './assets/image/training-slide-4.png',
      './assets/image/training-slide-5.png',
      './assets/image/training-slide-6.png',
    ],
  };
}
