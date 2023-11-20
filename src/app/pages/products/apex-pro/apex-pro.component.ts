import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { RealisticSimulationComponent } from './components/realistic-simulation/realistic-simulation.component';
import { NgFor } from '@angular/common';
import { TouchedImageComponent } from './components/touched-image/touched-image.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SpecificationComponent } from 'src/app/shared/components/specification/specification.component';
import { ProductImage } from 'src/app/shared/models/product-image.model';
import { Specification } from 'src/app/shared/components/specification/specification.model';
import { SendFormComponent } from '../../home/components/send-form/send-form.component';

export interface DataInformation {
  img: string;
  imageList: ImageList[];
  title: string;
  text: string;
  list: string[];
}

export interface ImageList {
  title: string;
  img: string;
}

@Component({
  selector: 'app-apex-pro',
  templateUrl: './apex-pro.component.html',
  styleUrls: ['./apex-pro.component.less'],
  standalone: true,
  imports: [
    BannerComponent,
    RealisticSimulationComponent,
    NgFor,
    TouchedImageComponent,
    AboutComponent,
    GalleryComponent,
    SpecificationComponent,
    SendFormComponent,
  ],
})
export class ApexProComponent {
  /**
   *
   */
  dataInformations: DataInformation[] = [
    {
      img: './assets/image/apex-info-1.jpg',
      imageList: [
        {
          title: 'dataInformations.imageList.title',
          img: './assets/image/apex-pro-info-1.jpg',
        },
        {
          title: 'PEDIATRIC SURGERY',
          img: './assets/image/apex-pro-info-2.jpg',
        },
        {
          title: 'TRAINING PROGRAM',
          img: './assets/image/apex-pro-info-3.jpg',
        },
      ],
      title: 'Realistic surgical simulation',
      text: 'Laparo Apex PRO is a revolutionary hybrid simulator that combines both virtual reality and physical module training to offer a comprehensive and unparalleled training experience. It is the first laparoscopic simulator in the world that is dedicated also to training in pediatric surgery, providing a unique opportunity for trainees to gain valuable experience and expertise in this challenging field.',
      list: [
        '🔵 Complete training curriculum – from beginner manual skills to advanced procedures',
        '🔵 Real clinical instruments and laparoscopes',
        '🔵 Realistic touch feedback between instruments in virtual reality',
        '🔵 Custom training creator',
      ],
    },
    {
      img: './assets/image/apex-info-2.jpg',
      imageList: [
        {
          title: 'REAL INSTRUMENTS',
          img: './assets/image/apex-pro-info-4.jpg',
        },
        {
          title: 'REDUCED AREA',
          img: './assets/image/apex-pro-info-5.jpg',
        },
        {
          title: 'PEDIATRIC TRAINING PROGRAM',
          img: './assets/image/apex-pro-info-6.jpg',
        },
      ],
      title: 'Experience the future of pediatric surgical training',
      text: 'Unlock the potential of pediatric surgical training with Laparo Apex Pro. This advanced simulator is tailored to the needs of pediatric surgeons, offering comprehensive training in the three most commonly performed pediatric procedures. Trainees can refine their skills, from mastering essential techniques to navigating delicate anatomy, all within a realistic and immersive environment. Laparo Apex Pro’s lifelike simulations and real-time feedback empower surgeons to develop expertise in pediatric surgery and enhance patient outcomes.',
      list: [
        '🔵 Pediatric training program (Virtual + Real)',
        '🔵 3 pediatric ports with reduced distance of 4.5 cm',
        '🔵 Trocars adapted to work also with 3 mm instruments',
        '🔵 Set of pediatric instruments',
        '🔵 5 mm diameter real pediatric laparoscope',
      ],
    },
    {
      img: './assets/image/apex-info-3.jpg',
      imageList: [
        {
          title: 'PATENTED SENSORS',
          img: './assets/image/apex-pro-info-7.jpg',
        },
        {
          title: 'ADVANCED ANALYSIS',
          img: './assets/image/apex-pro-info-8.jpg',
        },
        {
          title: 'REAL-TIME FEEDBACK',
          img: './assets/image/apex-pro-info-9.jpg',
        },
      ],
      title: 'Achieve surgical excellence',
      text: 'Laparo Apex Pro takes surgical training to new heights, providing a cutting-edge platform for surgeons to refine their skills and expertise in this specialized field. It offers a complete training curriculum that caters to both beginners and advanced learners, making it an indispensable tool for medical simulation centers, medical universities, hospitals, and research-oriented institutions seeking to enhance their surgical training programs.',
      list: [
        '🔵 No subscription fees and lifelong software support',
        '🔵 Real-time feedback during simulations, allowing trainees to adjust and improve their skills on the spot',
        '🔵 Customization – Laparo Apex PRO can be tailored to specific training requirements, encompassing a broad range of general and pediatric surgical procedures.',
      ],
    },
  ];

  /**
   */
  apexImageData: ProductImage = {
    img: './assets/image/apex-pro-img-0.png',
    type: 'apex-pro',
    info: [
      {
        img: './assets/image/apex-pro-img-1.jpg',
        title: '27’’ touchscreen with position adjustment',
        text: '27-inch touchscreen monitor with easy-to-use interface and Laparo software',
      },
      {
        img: './assets/image/apex-pro-img-2.jpg',
        title: 'Real laparoscopes',
        text: '2 real laparoscopes in standard set - 0° and 30°',
      },
      {
        img: './assets/image/apex-pro-img-3.jpg',
        title: 'Real instruments',
        text: 'Instruments with embedded sensors: Dissector, Grasper, Scissors, Needle holder, Clip applier. Pediatric 3mm instruments : Needle Holder, Grasper, Dissector, Scissors',
      },
      {
        img: './assets/image/apex-pro-img-4.jpg',
        title: 'Training Modules',
        text: 'Training modules for manual skills - full set Training modules for procedures - 3 to choose VR training modules - 3 to choose',
      },
      {
        img: './assets/image/apex-pro-img-5.jpg',
        title: 'Accessories storage',
        text: '2 drawers for storing training modules and needed accessories',
      },
      {
        img: './assets/image/apex-pro-img-6.jpg',
        title: 'Electrosurgery Pedals',
        text: 'Some procedures like for example Cholecytectomy require special pedals for cutting and coagulation',
      },
    ],
  };

  /**
   */
  apexSpecification: Specification = {
    title: 'Specification',
    list: [
      {
        category: 'Main features',
        options: [
          { title: 'Main purpose', value: 'Physical Module-based training' },
          { title: '', value: 'Virtual Reality training' },
          { title: '', value: 'Pediatric surgery training (Virtual + Real)' },
          {
            title: 'Camera',
            value: '2 real laparoscopes - 0° and 30°',
          },
          {
            title: '',
            value: 'Possibility to rotate the optics relative to camera',
          },
          {
            title: 'Light source',
            value: 'optical fibre connected to laparoscope, LED light source',
          },
          {
            title: 'Instrument ports',
            value: '15 instrument ports',
          },
          {
            title: '',
            value:
              'Reduced working area for pediatric use with 4,25 cm distance between trocars',
          },
          {
            title: 'Training instruments',
            value:
              'Dissector, Grasper, Scissors, Needle holder, Clip applier, Multitool 1 (Stapler, Bipolar grasper, Vessel sealer, Ultrasonic scalpel), Multitool 2 (Hook, Suction-irrigator, pyloric knife)',
          },
          {
            title: 'Pediatric 3mm instruments',
            value: 'Needle Holder, Grasper, Dissector, Scissors',
          },
          {
            title: 'Training modules',
            value:
              'Dexterity, Tension, Suturing, Cutting Circles + Universal Holder, Dissection 3 in 1,',
          },
          {
            title: 'Procedural Training Modules - 3 to choose',
            value:
              'Appendectomy, Prostatectomy, Cholecystectomy, Ovarian Cyst Removal, Myomectomy, Vaginal Cuff Repair',
          },
          {
            title: '',
            value:
              'Pediatric Training Modules: Pyloromyotomy, Pyeloplasty, Thoracoscopic repair of esophageal atresia',
          },
          {
            title: 'Virtual Procedures - 3 to choose',
            value:
              'Appendectomy Cholecystectomy Gynecology Pack Nephrectomy Prostatectomy',
          },
          {
            title: '',
            value:
              'Pediatric Pyloromyotomy Pediatric Pyeloplasty Pediatric Thoracoscopic repair of esophageal atresia',
          },
          {
            title: '',
            value: '',
          },
        ],
      },
      {
        category: 'Software',
        options: [
          { title: 'Training analysis', value: '✅' },
          { title: 'Automatic assessment', value: '✅' },
          { title: 'Real time analysis', value: '✅' },
          { title: 'Laparo Training Program', value: 'Basic manual skills' },
          {
            title: '',
            value: 'Intermediate manual skills',
          },
          {
            title: '',
            value: 'Basic suturing skills',
          },
          {
            title: '',
            value: 'Advance suturing skills',
          },
          {
            title: '',
            value: 'Procedural skills (real)',
          },
          {
            title: '',
            value: 'Procedural skills (virtual)',
          },
          {
            title: '',
            value: 'Pediatric Procedures (real)',
          },
          {
            title: '',
            value: 'Pediatric Procedures (virtual)',
          },
          {
            title: 'Multi-work (network)',
            value: '✅',
          },
          {
            title: '„Teacher-student” training mode',
            value: '✅',
          },
          {
            title: 'Learning curve tracking',
            value: '✅',
          },
          {
            title: 'Custom training creator with tutorials',
            value: '✅',
          },
          {
            title: 'User accounts',
            value: 'User accounts – unlimited number + Administrator accounts',
          },
          {
            title: 'Possibility of data export',
            value: '✅',
          },
          {
            title: 'Perpetual lifetime licence',
            value: '✅',
          },
        ],
      },
      {
        category: 'Hardware',
        options: [
          { title: 'Screen', value: '27’’ touchscreen' },
          {
            title: 'Pedals for Electrosurgery',
            value: 'YES (for virtual procedures)',
          },
          {
            title: 'Ergonomics',
            value: 'Automatic electric adjustment column',
          },
          {
            title: '',
            value: 'Screen adjustment on a rotating arm',
          },
          {
            title: 'Keyboard',
            value: 'Extra navigation keyboard with touchpad',
          },
          {
            title: 'Drawer for training modules storage',
            value: '2',
          },
          {
            title: 'Wheels with blockade',
            value: '✅',
          },
        ],
      },
      {
        category: 'Technical Data',
        options: [
          { title: 'Device size', value: '166-216 cm x 125 cm x 62 cm' },
          { title: 'Device weight', value: '115 kg' },
          { title: 'Voltage', value: '110V/230V' },
          { title: 'Frequency', value: '50-60 Hz' },
          { title: 'Maximum Power', value: '900 W' },
          { title: 'Guarantee', value: '2 years' },
        ],
      },
    ],
  };
}
