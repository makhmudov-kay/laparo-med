import { Component } from '@angular/core';
import { BannerComponent } from '../components/banner/banner.component';
import { IntroductionComponent } from '../components/introduction/introduction.component';
import { InfoBlocksComponent } from '../components/info-blocks/info-blocks.component';
import { TouchedImageComponent } from '../apex-pro/components/touched-image/touched-image.component';
import { FeaturesComponent } from '../components/features/features.component';
import { AnalysisComponent } from '../components/analysis/analysis.component';
import { SoftwareComponent } from '../components/software/software.component';
import { ParalaxComponent } from '../components/paralax/paralax.component';
import { NetworkComponent } from '../components/network/network.component';
import { SpecificationComponent } from 'src/app/shared/components/specification/specification.component';
import { PartnersComponent } from '../../home/components/partners/partners.component';
import { SendFormComponent } from '../../home/components/send-form/send-form.component';
import { ProductImage } from 'src/app/shared/models/product-image.model';
import { Specification } from 'src/app/shared/components/specification/specification.model';

@Component({
  selector: 'app-analytic',
  templateUrl: './analytic.component.html',
  styleUrls: ['./analytic.component.less'],
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
export class AnalyticComponent {
  /**
   */
  bannerData = {
    title: 'ANALYTIC',
    img: './assets/image/analytic-img-banner.png',
  };

  /**
   */
  introductionData = {
    header: 'analyticHeader',
    description: 'analyticDesc',
    video: './assets/video/analytic-video.mp4',
    title: 'analyticCamera',
    leftText: 'analyticLeftText',
    rightText: 'analyticRightText',
  };

  /**
   */
  infoBlockData = [
    {
      img: './assets/image/apex-vr-img.png',
      title: 'analyticInfoBLock1',
    },
    {
      img: './assets/image/apex-vr-img-2.png',
      title: 'analyticInfoBLock2',
    },
    {
      img: './assets/image/apex-vr-img-3.png',
      title: 'analyticInfoBLock3',
    },
    {
      img: './assets/image/apex-vr-img-4.png',
      title: 'analyticInfoBLock4',
    },
    {
      img: './assets/image/apex-vr-img-5.png',
      title: 'analyticInfoBLock5',
    },
    {
      img: './assets/image/apex-vr-img-6.png',
      title: 'analyticInfoBLock6',
    },
  ];

  /**
   */
  apexVRImageData: ProductImage = {
    img: './assets/image/analytic-feature.png',
    type: 'analytic',
    info: [
      {
        img: './assets/image/analytic-img-1.png',
        title: 'apexVRImageDataInfoTitle1',
        text: 'apexVRImageDataInfoText1',
      },
      {
        img: './assets/image/analytic-img-2.jpg',
        title: 'camera',
        text: 'apexVRImageDataInfoText2',
      },
      {
        img: './assets/image/analytic-img-3.png',
        title: 'instruments',
        text: 'apexVRImageDataInfoText3',
      },
      {
        img: './assets/image/analytic-img-4.png',
        title: 'apexVRImageDataInfoTitle4',
        text: 'apexVRImageDataInfoText4',
      },
      {
        img: './assets/image/analytic-img-5.png',
        title: 'apexVRImageDataInfoTitle5',
        text: 'apexVRImageDataInfoText5',
      },
    ],
  };

  /**
   *
   */
  apexVRFeatures = {
    first: {
      title: 'apexVRFeaturesTitle1',
      text: 'apexVRFeaturesText1',
      img: './assets/image/icon-feature-1.png',
    },
    second: {
      title: 'apexVRFeaturesTitle2',
      text: 'apexVRFeaturesText2',
      img: './assets/image/icon-feature-4.png',
    },
    third: {
      title: 'apexVRFeaturesTitle3',
      text: 'apexVRFeaturesText3',
      img: './assets/image/icon-feature-3.png',
    },
    fourth: {
      title: 'apexVRFeaturesTitle4',
      text: 'apexVRFeaturesText4',
      img: './assets/image/icon-feature-2.png',
    },
    fivth: {
      title: 'apexVRFeaturesTitle5',
      text: 'apexVRFeaturesText5',
      img: './assets/image/icon-feature-6.png',
    },
    sixth: {
      title: 'apexVRFeaturesTitle6',
      text: 'apexVRFeaturesText6',
      img: './assets/image/icon-feature-5.png',
    },
  };

  /**
   */
  analysis = {
    title: 'Analysis',
    description: 'analysisDescription',
    leftText: 'analysisLeftText',
    rightText: 'analysisRightText',
  };

  /**
   */
  software = {
    img: './assets/image/software-2.png',
    title: 'softwareTitle',
    text: 'softwareText',
  };

  /**
   */
  paralax = {
    img: '../../../../../assets/image/paralax-2.png',
    title: 'parallaxTitle',
  };

  /**
   */
  networking = {
    title: 'networkingTitle',
    description: 'networkingDescription',
    works: [
      {
        title: 'worksTitle1',
        text: 'worksText1',
        value: 1,
      },
      {
        title: 'worksTitle2',
        text: 'worksText2',
        value: 2,
      },
      {
        title: 'worksTitle3',
        text: 'worksText3',
        value: 3,
      },
    ],
    background: '../../../../../assets/image/network-2.png',
  };

  /**
   */
  apexVRSpecification: Specification = {
    title: 'apexVRSpecificationTitle',
    list: [
      {
        category: 'mainFeature',
        options: [
          { title: 'optionTitle1', value: 'optionValue1' },
          { title: '', value: 'optionValue2' },
          {
            title: 'camera',
            value: 'optionValue3',
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
        category: 'apexVRSpecificationTitle',
        options: [
          { title: 'Maximum Power', value: '900 W' },
          { title: 'Voltage', value: '110V/230V' },
          { title: 'Frequency', value: '50-60 Hz' },
        ],
      },
    ],
  };
}
