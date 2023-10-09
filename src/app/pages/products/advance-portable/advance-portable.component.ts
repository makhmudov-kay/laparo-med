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
    title: 'LAPARO Advance Portable – Laparoscopic Simulator',
    contentTitle: 'Not enough space? It’s not a problem!',
    text: [
      'The LAPARO Advance Portable will be perfect everywhere where a complete, professional trainer is required. It’s a great compromise – all you need is a desk or table to which you attach the computer arm and place the simulator. Whenever you need, you can pack it in seconds and leave your desk clear.',
      'Reliable and durable',
      'LAPARO Advance Portable is dedicated for hospitals, medical universities, and medical simulation centers. Ergonomic and durable casing is made of special resistant materials to provide many hours of training.',
    ],
    aspireText:
      'By choosing the LAPARO Advance Portable, you will receive a complete minimally invasive surgery training set, including laparoscopic instruments and training modules.',
    video: './assets/video/advanced-portable.mp4',
    feature: {
      description:
        'You can easily adjust the exercises to the appropriate level of advancement thanks to a wide range of training pads. The set also includes a computer with an all-in-one touch screen mounted on the arm, but you can connect it to any other computer or laptop at any time. The full HD 1080p free rotation camera allows for learning in conditions similar to procedures in the operating room.',
      features: [
        'Laparo Advance - trainer with a built-in FULL HD 30 ° camera and LED lighting',
        'Adjustable arm to fix the computer to the desk',
        'Integrated computer with touch screen and already installed software',
        'Real clinical instruments: dissector, grasper, scissors, needle holder, clip applier',
        'Laparo Training Program - all 4 courses!',
        'Training modules: Dexterity, Tension, Suturing, Cutting Circles + Universal Holder, Dissection 3 in 1.',
        '46 unique exercises!',
      ],
      img: './assets/image/advance-portable-img.jpg',
    },
    slides: [
      './assets/image/portable-slide-1.jpg',
      './assets/image/portable-slide-2.jpg',
      './assets/image/portable-slide-3.png',
      './assets/image/portable-slide-4.png',
    ],
  };
}
