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
    title: 'apexVRTitle',
    img: './assets/image/apex-vr-banner.png',
  };

  /**
   */
  introductionData = {
    header: 'introductionData.header',
    description: 'introductionData.desc',
    video: './assets/video/apex-vr-video.mp4',
    title: 'introductionData.title',
    leftText: 'introductionData.left',
    rightText: 'introductionData.right',
  };

  /**
   */
  infoBlockData = [
    {
      img: './assets/image/apex-vr-img.png',
      title: 'infoBlockData.title1',
    },
    {
      img: './assets/image/apex-vr-img-2.png',
      title: 'infoBlockData.title2',
    },
    {
      img: './assets/image/apex-vr-img-3.png',
      title: 'infoBlockData.title3',
    },
    {
      img: './assets/image/apex-vr-img-4.png',
      title: 'infoBlockData.title4',
    },
    {
      img: './assets/image/apex-vr-img-5.png',
      title: 'infoBlockData.title5',
    },
    {
      img: './assets/image/apex-vr-img-6.png',
      title: 'infoBlockData.title6',
    },
  ];

  /**
   */
  apexVRImageData: ProductImage = {
    img: './assets/image/apex-vr-image.png',
    type: 'apexVRImageData',
    info: [
      {
        img: './assets/image/apex-vr-image-1.png',
        title: 'apexVRImageData.title1',
        text: 'apexVRImageData.text1',
      },
      {
        img: './assets/image/apex-vr-image-2.jpeg',
        title: 'apexVRImageData.title2',
        text: 'apexVRImageData.text2',
      },
      {
        img: './assets/image/apex-vr-image-3.jpg',
        title: 'apexVRImageData.title3',
        text: 'apexVRImageData.text3',
      },
      {
        img: './assets/image/apex-vr-image-4.jpg',
        title: 'apexVRImageData.title4',
        text: 'apexVRImageData.text4',
      },
      {
        img: './assets/image/apex-vr-image-5.jpg',
        title: 'apexVRImageData.title5',
        text: 'apexVRImageData.text5',
      },
      {
        img: './assets/image/apex-vr-image-6.jpg',
        title: 'apexVRImageData.title6',
        text: 'apexVRImageData.text6',
      },
      {
        img: './assets/image/apex-vr-image-7.jpg',
        title: 'apexVRImageData.title7',
        text: 'apexVRImageData.text7',
      },
      {
        img: './assets/image/apex-vr-image-8.jpg',
        title: 'apexVRImageData.title8',
        text: 'apexVRImageData.text8',
      },
      {
        img: './assets/image/apex-vr-image-9.jpg',
        title: 'apexVRImageData.title9',
        text: 'apexVRImageData.text9',
      },
      {
        img: './assets/image/apex-vr-image-10.jpg',
        title: 'apexVRImageData.title10',
        text: 'apexVRImageData.text10',
      },
    ],
  };

  /**
   */
  apexVRFeatures = {
    first: {
      title: 'apexVRFeatures.title1',
      text: 'apexVRFeatures.text1',
      img: './assets/image/icon-feature-1.png',
    },
    second: {
      title: 'apexVRFeatures.title2',
      text: 'apexVRFeatures.text2',
      img: './assets/image/icon-feature-2.png',
    },
    third: {
      title: 'apexVRFeatures.title3',
      text: 'apexVRFeatures.text3',
      img: './assets/image/icon-feature-3.png',
    },
    fourth: {
      title: 'apexVRFeatures.title4',
      text: 'apexVRFeatures.text4',
      img: './assets/image/icon-feature-4.png',
    },
    fivth: {
      title: 'apexVRFeatures.title5',
      text: 'apexVRFeatures.text5',
      img: './assets/image/icon-feature-5.png',
    },
    sixth: {
      title: 'apexVRFeatures.title6',
      text: 'apexVRFeatures.text6',
      img: './assets/image/icon-feature-6.png',
    },
  };

  /**
   */
  analysis = {
    title: 'analysisTitle',
    description: 'analysisDesc',
    leftText: 'analysisLeft',
    rightText: 'analysisRight',
  };

  /**
   */
  software = {
    img: './assets/image/software-1.jpeg',
    title: 'softwareTitle',
    text: 'apexTextAnalytic',
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
    title: 'networkingTitle1',
    description: 'networkingDescription1',
    works: [
      {
        title: 'networkingWorkTitle',
        text: 'networkingWorkText',
        value: 1,
      },
      {
        title: 'networkingWorkTitle1',
        text: 'networkingWorkText1',
        value: 2,
      },
      {
        title: 'networkingWorkTitle2',
        text: 'networkingWorkText2',
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
