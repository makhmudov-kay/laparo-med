import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsInfoComponent } from 'src/app/shared/components/products-info/products-info.component';
import { ArrowSVG } from 'src/app/shared/svg/arrow/arrow.component';

export interface IndividualProductsData {
  title: string;
  description: string;
  listTitle?: string;
  list: string[];
  img: string;
  link: string;
}

@Component({
  selector: 'app-individual-products',
  templateUrl: './individual-products.component.html',
  styleUrls: ['./individual-products.component.less'],
  standalone: true,
  imports: [ArrowSVG, NgFor, NgIf, NgClass, ProductsInfoComponent],
})
export class IndividualProductsComponent {
  products: IndividualProductsData[] = [
    {
      title: 'ASPIRE',
      description:
        'Laparo ASPIRE - simplifying complexity The lightweight and compact design makes the Laparo ASPIRE portable and easy to use at home and on the road. Simply install the included software on any computer with standard USB ports and connect it to the trainer to start training. The Laparo ASPIRE is compatible with all training modules and accessories offered by Laparo and it is especially helpful in preparing for the FLS and E-BLUS exams. The trainer is intended for novices and beginners as well as more advanced surgeons seeking portability and flexibility.',
      listTitle: 'ASPIRE',
      list: [
        '8 precisely designed 5mm instrument access points',
        'Record, Time and Share Training Sessions',
        'Learn with the assistance of Laparo Learning Materials',
        '720p plug-and-play USB Cable Camera',
        'LED lighting',
        'Replaceable Cross-Compatible Training Modules',
        'Adjustable Camera-Holder for Unassisted Training',
        'Software compatible with Windows, MacOS and Linux',
      ],
      img: './assets/image/individula-1.png',
      link: '../products/list?category_id=6',
    },
    {
      title: 'Advance',
      description:
        'Do you want to take the next big step in developing your laparoscopy skills? Do you expect a personal trainer which will keep up with your development? The Laparo Advance is the highest class of personal laparoscopy trainers. The device is portable, yields an incredible build durability and design quality. The full HD camera which can be rotated and adjusted will permit you the freedom to practice at all configurations. The Laparo Advance is compatible with all of the training modules and accessories available in our store.',
      listTitle: 'ADVANCE',
      list: [
        'Full HD 30 ° camera similar to the one used during real laparoscopic surgery',
        'The ball joint of the camera allows to adjust the camera',
        'Special holes allow the use of instruments with a 10 mm diameter',
        'To enable more training options, the simulator has additional instrument inputs',
        'LED lighting allows for optimal illumination of the operating field',
        'A complete set, equipped with the necessary training modules, tools and accessories',
        'The entire range of LAPARO training modules is compatible with the Advance simulator',
        'A special solid casing designed for many hours of training',
        'Thanks to the ergonomic handle it is convenient to transport',
        'No subscription - you buy once and exercise as much as you want',
      ],
      img: './assets/image/individula-2.png',
      link: '../products/list?category_id=2',
    },
    {
      title: 'Adept',
      description:
        'Are you a student at the beginning on your training path? Are you just learning suturing or perhaps need to learn more advanced types of suturing patterns? Surgical Skills Adept is the professional set for learning surgical suturing which enables training at many different levels of advancement. Thanks to multiple modules you can practice any suturing technique you desire, including ones in a limited operative area.',
      listTitle: 'ADEPT',
      list: [
        'Designed for medical students and surgeons',
        'Allows for unassisted training',
        'Highly differentiated modules and elements create many opportunities for practice',
        'Our Multi-layered skin allows the development of subcutaneous suturing skills',
        'Inserts and components are easily reusable with proper maintenance and care',
        'Includes a complete assortment of accessories needed for practical training',
        'Fast and easy assembly and easy insert replacement',
        'Handy and compact build - easily transportable',
      ],
      img: './assets/image/individula-3.png',
      link: '../products/list?category_id=7',
    },
  ];
}
