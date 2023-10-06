import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsInfoComponent } from 'src/app/shared/components/products-info/products-info.component';
import { IndividualProductsData } from '../../../individuals/components/individual-products/individual-products.component';

@Component({
  selector: 'app-professionals-product',
  templateUrl: './professionals-product.component.html',
  styleUrls: ['./professionals-product.component.less'],
  standalone: true,
  imports: [ProductsInfoComponent, NgFor, NgIf],
})
export class ProfessionalsProductComponent {
  products: IndividualProductsData[] = [
    {
      title: 'Apex',
      description:
        'The latest hybrid solution from LAPARO was created by combining the knowledge and experience of professionals and engineers with the use of the state-of-the art technologies. The hybrid simulator is an innovative solution on a global scale. It combines virtual reality with physical skills training. Despite its complexity, the trainer offers extremely simple and intuitive manual skills and procedures training, a wide selection of training modules, scenarios for conducting training in virtual reality and a number of tutorials that guide the user step by step like a personal trainer.',

      list: [
        'Cutting-edge technology for measuring parameters of motion sensors and camera',
        'Unique camera with adjustable angle and focus',
        'System of automatic setting of training modules',
        'Comprehensive training on one medical simulator - VR & REAL',
        'Networking capability',
        'Patent pending',
      ],
      img: './assets/image/prof-product-1.png',
      link: '/',
    },
    {
      title: 'Analytic',
      description:
        'The Laparo Analytic takes laparoscopy training boxes to a higher level. It is a full-fledged workstation intended for use in medical simulation centers and hospitals and it was designed in close collaboration with surgeons to be used by surgeons. The device includes custom-built and cutting-edge solutions for training laparoscopy surgery in educational institutions around the world and it features software and technology which makes leaps in improving the quality of training.',
      list: [
        'Networking Capabilities',
        'Laser Sensors and Computer Vision Trackers',
        'Scoring System with Analysis Software',
        'Built-in scripts, Tutorials and Learning Materials',
        'Custom Training Scenario Functionality',
        'Easy Data Export and Video Recording for Research',
        'Compatibility with all Modules and Approaches',
        'Easy Electric Height Adjustment',
        'Durable Build Quality',
      ],
      img: './assets/image/prof-product-2.png',
      link: '/',
    },
    {
      title: 'Advance Training Station',
      description:
        'Are you looking for a reliable laparoscopic simulator with a full set of instruments and training modules that will cope with daily training? Meet LAPARO Advance Training Station, which is dedicated for medical simulation centers, universities and hospitals. Minimally invasive surgery trainer consists of an independent training station, equipped with an all-in-one computer with a touch screen. Need to transport your training station from one room to another? No problem, the base of the device has been equipped with wheels to make it easy.',

      list: [
        'An all-in-one computer with large touch screen',
        'Stable but mobile at the same time',
        'Complete set - to start training, just connect the device to the power supply',
        'Does not require installation of any additional software',
        '12 trocar positions',
      ],
      img: './assets/image/prof-product-3.png',
      link: '/',
    },
    {
      title: 'Advance Portable',
      description:
        'Are you looking for a high quality Laparoscopic trainer which can function as a full fledged training station anywhere you take it? Meet LAPARO Advance Portable which was designed with durability and portability in mind. The trainer features a large heavy-duty case attached to a solid base. We developed this device in collaboration with practicing surgeons for use at institutions, medical simulation centers and in hospitals. The LAPARO Advance is the perfect solution for situations where laparoscopic procedures must be practiced frequently and the trainer must remain portable and easy to stow away.',

      list: [
        '12 trocar positions',
        '8 mm and 10 mm access holes',
        'Software compatible with Windows, MacOS and Linux',
        'Record, Time and Share Training Sessions',
        'Ball-joint 30 degree lockable camera mount for free movement in all directions',
        'Full HD 1080p USB Camera',
        'Ergonomics Imitating Real-Life Surgery Conditions',
        'Learn with the assistance of Laparo Learning Materials',
      ],
      img: './assets/image/prof-product-4.jpg',
      link: '/',
    },
  ];
}
