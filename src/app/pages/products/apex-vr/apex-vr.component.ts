import { Component } from '@angular/core';
import { BannerComponent } from '../components/banner/banner.component';
import { IntroductionComponent } from '../components/introduction/introduction.component';
import { InfoBlocksComponent } from '../components/info-blocks/info-blocks.component';
import { TouchedImageComponent } from '../apex-pro/components/touched-image/touched-image.component';
import { ProductImage } from 'src/app/shared/models/product-image.model';
import { FeaturesComponent } from '../components/features/features.component';
import { AnalysisComponent } from '../components/analysis/analysis.component';
import { SoftwareComponent } from '../components/software/software.component';
import { ParalaxComponent } from '../components/paralax/paralax.component';
import { NetworkComponent } from '../components/network/network.component';
import { SpecificationComponent } from 'src/app/shared/components/specification/specification.component';
import { Specification } from 'src/app/shared/components/specification/specification.model';
import { PartnersComponent } from '../../home/components/partners/partners.component';
import { SendFormComponent } from '../../home/components/send-form/send-form.component';

@Component({
  selector: 'app-apex-vr',
  templateUrl: './apex-vr.component.html',
  styleUrls: ['./apex-vr.component.less'],
  standalone: true,
  imports: [
    BannerComponent,
    IntroductionComponent,
    InfoBlocksComponent,
    TouchedImageComponent,
    FeaturesComponent,
    AnalysisComponent,
    SoftwareComponent,
    ParalaxComponent,
    NetworkComponent,
    SpecificationComponent,
    PartnersComponent,
    SendFormComponent,
  ],
})
export class ApexVrComponent {
  /**
   */
  bannerData = {
    title: 'APEX VR',
    img: './assets/image/apex-vr-banner.png',
  };

  /**
   */
  introductionData = {
    header: 'INTRODUCTION',
    description:
      'Meet LAPARO Apex - First Mixed Reality Laparoscopic Simulator by LAPARO. As a technology company, we push the boundaries of what technology can be used to improve and develop new, more effective training techniques. This is how the ambitious LAPARO Hybrid project was born to create a robust trainer for use in the most advanced medical simulation centers around the world.',
    video: './assets/video/apex-vr-video.mp4',
    title: 'Hybrid Simulator',
    leftText:
      'Over the past decade VR has been hailed as ‘cutting edge’ and as ‘must-have’ technology for every medical simulation center. Laparoscopy simulators costing millions promised incredible results in training surgeons with realistic procedures, haptic feedback and realistic 3D models. Many simulation centers and hospitals around the world ordered these devices only to find that their training capabilities are quite limited and impractical when used in the long-term with students. 15 years forward, laparoscopic surgeons agree on the immense drawbacks of such solutions - they are simply inadequate for testing and for preparing larger numbers of young surgeons for the OR. Their capabilities are limited in size and scope and they lack the technical support and active development of exercises and programs.',
    rightText:
      'For the price of a single VR simulator one could equip an entire medical simulation center with diverse laparoscopy trainers and training solutions of all levels. On the other hand, basic low-price laparoscopy trainers can also be limited in capabilities. Students can develop practical skills and they can gain an adequate understanding of the forces and physical properties on these low-fidelity devices, but that can only go so far. Such trainers cannot realistically simulate complete procedures such as appendectomies and cholecystectomies. They don’t feature analytical or scoring capabilities and most importantly - they can’t teach much without the direct supervision of qualified laparoscopic surgeons.',
  };

  /**
   */
  infoBlockData = [
    {
      img: './assets/image/apex-vr-img.png',
      title: 'The combination of VR &amp; REAL training',
    },
    {
      img: './assets/image/apex-vr-img-2.png',
      title: 'Next-generation Virtual Reality',
    },
    {
      img: './assets/image/apex-vr-img-3.png',
      title: 'Comprehensive Training Platform',
    },
    {
      img: './assets/image/apex-vr-img-4.png',
      title: 'Powerful Training Analysis',
    },
    {
      img: './assets/image/apex-vr-img-5.png',
      title: 'Adjustable Track Vision',
    },
    {
      img: './assets/image/apex-vr-img-6.png',
      title: 'Real Training Instruments',
    },
  ];

  /**
   */
  apexVRImageData: ProductImage = {
    img: './assets/image/apex-vr-image.png',
    type: 'apex-vr',
    info: [
      {
        img: './assets/image/apex-vr-image-1.png',
        title: 'Touchscreen Interface',
        text: '27" Touchscreen Monitor with an easy interface and stand-alone Laparo Application',
      },
      {
        img: './assets/image/apex-vr-image-2.jpeg',
        title: 'Navigation yboard',
        text: 'Additional navigation keyboard as an alternative to a touchscreen monitor',
      },
      {
        img: './assets/image/apex-vr-image-3.jpg',
        title: 'Rotating Arm',
        text: 'Allows for different approaches thanks to monitor on a rotating arm',
      },
      {
        img: './assets/image/apex-vr-image-4.jpg',
        title: 'Real Instruments',
        text: 'Close-to-reality experience while training laparoscopic procedures on clinical instruments',
      },
      {
        img: './assets/image/apex-vr-image-5.jpg',
        title: 'Adjustable Camera',
        text: 'Electronically adjustable camera: 0°, 30°, 45° and from 0° to 70° with a knob',
      },
      {
        img: './assets/image/apex-vr-image-6.jpg',
        title: 'Module Adjustment System',
        text: 'Drawer with a unique system for setting training modules automatically',
      },
      {
        img: './assets/image/apex-vr-image-7.jpg',
        title: 'All in one place',
        text: 'Drawer for storing training modules and needed accessories',
      },
      {
        img: './assets/image/apex-vr-image-8.jpg',
        title: 'Ergonomics First',
        text: 'Electrical adjustable column for better ergonomics',
      },
      {
        img: './assets/image/apex-vr-image-9.jpg',
        title: 'Durable &amp;  portable',
        text: 'Large, durable wheels with blockade make it easy to transport from one training room to another',
      },
      {
        img: './assets/image/apex-vr-image-10.jpg',
        title: 'Electrosurgery Pedals',
        text: 'Some procedures like for example Cholecytectomy require special pedals for cutting and coagulation',
      },
    ],
  };

  /**
   */
  apexVRFeatures = {
    first: {
      title: 'Log in',
      text: 'Enter your user credentials to login to your own personal account.',
      img: './assets/image/icon-feature-1.png',
    },
    second: {
      title: 'Review',
      text: 'With the Timeline Analysis watch your past training performance, look for areas in need of improvement.',
      img: './assets/image/icon-feature-2.png',
    },
    third: {
      title: 'Select Scenario',
      text: 'Choose the scenario based on the skills you want to learn.',
      img: './assets/image/icon-feature-3.png',
    },
    fourth: {
      title: 'Score',
      text: 'After completing training you will see a comprehensive score breakdown and you will be able to analyze your performance in detail.',
      img: './assets/image/icon-feature-4.png',
    },
    fivth: {
      title: 'Train',
      text: 'Select start, insert the instruments through the trocar sensors and complete scenario requirements.',
      img: './assets/image/icon-feature-5.png',
    },
    sixth: {
      title: 'Learn',
      text: 'Watch the tutorial, pay close attention to see how to do it.',
      img: './assets/image/icon-feature-6.png',
    },
  };

  /**
   */
  analysis = {
    title: 'Cutting-Edge Technology',
    description:
      'The technology applied in the Apex laparoscopic simulator is the result of years of cooperation with various international medical centers, placing greater emphasis on the accuracy and efficiency of training. The following solutions are currently in the process of obtaining international patents: - cutting-edge technology for measuring parameters of motion sensors and camera - unique camera with adjustable angle and focus - system of automatic setting of training modules - selected for particular training - laparoscopy training system',
    leftText:
      'The latest hybrid solution from LAPARO was created by combining the knowledge and experience of professionals and engineers with the use of the state-of-the art technologies. The hybrid simulator is an innovative solution on a global scale. It combines virtual reality with physical skills training. Despite its complexity, the trainer offers extremely simple and intuitive manual skills and procedures training, a wide selection of training modules, scenarios for conducting training in virtual reality and a number of tutorials that guide the user step by step like a personal trainer.',
    rightText:
      'Comprehensive training on one medical simulator? Now it’s possible! Physical training is necessary to develop the workshop of manual skills, while VR helps in learning surgical procedures (e.g. coagulation, clipping etc.), faithfully reflecting the conditions prevailing during the procedure. LAPARO Apex has been equipped with many specialized sensors, faithfully reflecting the measured values, measuring each parameter, thanks to which you can easily check the effectiveness of training and progress in learning - yours or your students.',
  };

  /**
   */
  software = {
    img: './assets/image/software-1.jpeg',
    title: 'Multiple accounts One device',
    text: 'A single LAPARO Apex has the ability to store, hold, and protect the information of ultiple trainees. Each user can log in with his own password-protected account and see all of his previous results as well as their own personal Learning Curve. A supervisor or professor with an administrator account can monitor all users and manage them in groups.',
  };

  /**
   */
  paralax = {
    img: '../../../../../assets/image/paralax-1.jpg',
    title: '',
  };

  /**
   */
  networking = {
    title: 'Group training',
    description:
      "Connect your LAPARO Apex simulators to the group working network and conduct your workshops more efficiently. The mentor's station will allow you to supervise the work of many students at the same time and correct mistakes immediately. As an Administrator, you can also share your screen with other students so that they can repeat after you. Networking capability allows for: - sharing views between stations (Mentor Mode) - preview of exercises real-time on all stations - access to the user account from any device in the network - protection against data loss.",
    works: [
      {
        title: 'PATENT PENDING',
        text: 'Cutting-edge technology for measuring parameters of motion sensors and camera',
        value: 1,
      },
      {
        title: 'MADE IN EU',
        text: 'LAPARO simulators and training modules are designed and manufactured in the office placed in the center of Europe',
        value: 2,
      },
      {
        title: '2 YEARS WARRANTY',
        text: 'Test durability and quality, and constantly develop new solutions in response to the growing eeds of the medical industry and its progress',
        value: 3,
      },
    ],
    background: '../../../../../assets/image/network-1.jpg',
  };

  /**
   */
  apexVRSpecification: Specification = {
    title: 'Technical Data',
    list: [
      {
        category: 'Main features',
        options: [
          { title: 'Main purpose', value: 'Physical Module-based training' },
          { title: '', value: 'Virtual Reality training' },
          {
            title: 'Camera',
            value: 'Full HD 1080p 0°, 30°, 45; electronically adjustable',
          },
          {
            title: '',
            value: '360° movement',
          },
          {
            title: '',
            value: 'Focus Ring',
          },
          {
            title: '',
            value: 'Digital Zoom',
          },
          {
            title: '',
            value: 'LED lighting with saturation adjustment',
          },
          {
            title: 'Number of instrument ports',
            value: '8 anatomical ports for instruments and track vision',
          },
          {
            title: '',
            value:
              'Camera/laparoscope can be shifted and placed in any 1 of 8 ports and is held in place with a magic arm',
          },
          {
            title: 'Training instruments',
            value:
              'Real clinical instruments: dissector, grasper, scissors, needle holder, clip applier, stapler, multitool: hook+suction + irrigator',
          },
          {
            title: 'Training modules',
            value:
              'Dexterity, Tension, Suturing, Cutting Circles + Universal Holder, Dissection 3 in 1,',
          },
          {
            title: '',
            value:
              'Appendectomy, Prostatectomy, Cholecystectomy, Ovarian Cyst Removal, Myomectomy, Vaginal Cuff Repair',
          },
          {
            title: 'Pedals for electrosurgery',
            value: 'YES (for VR use)',
          },
          {
            title: 'Computer',
            value: '27’’ touchscreen',
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
            value: 'Procedural skills (VR)',
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
        category: 'Dimensions',
        options: [
          { title: 'Weight', value: '90 kg' },
          {
            title: 'Width',
            value: '66 cm',
          },
          {
            title: 'Depth',
            value: '123 cm',
          },
          {
            title: 'Height',
            value: '170-195 cm',
          },
        ],
      },
      {
        category: 'Technical Data',
        options: [
          { title: 'Maximum Power', value: '900 W' },
          { title: 'Voltage', value: '110V/230V' },
          { title: 'Frequency', value: '50-60 Hz' },
        ],
      },
    ],
  };
}
