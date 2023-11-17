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
            value: 'degMovement',
          },
          {
            title: '',
            value: 'focusRing',
          },
          {
            title: '',
            value: 'digitalZone',
          },
          {
            title: '',
            value: 'LEDadjustment',
          },
          {
            title: 'optionTitle2',
            value: 'optionValue4',
          },
          {
            title: '',
            value: 'optionValue5',
          },
          {
            title: 'optionTitle3',
            value: 'optionValue6',
          },
          {
            title: 'optionTitle4',
            value: 'optionValue7',
          },
          {
            title: '',
            value: 'optionValue8',
          },
          {
            title: 'optionTitle5',
            value: 'optionValue9',
          },
          {
            title: 'optionTitle6',
            value: 'optionValue10',
          },
          {
            title: 'optionTitle7',
            value: 'optionValue11',
          },
          {
            title: '',
            value: 'optionValue12',
          },
          {
            title: '',
            value: '',
          },
        ],
      },
      {
        category: 'software',
        options: [
          { title: 'optionTitle8', value: '✅' },
          { title: 'optionTitle9', value: '✅' },
          { title: 'optionTitle10', value: '✅' },
          { title: 'optionTitle11', value: 'optionValue13' },
          {
            title: '',
            value: 'optionValue14',
          },
          {
            title: '',
            value: 'optionValue15',
          },
          {
            title: '',
            value: 'optionValue16',
          },
          {
            title: '',
            value: 'optionValue17',
          },
          {
            title: '',
            value: 'optionValue18',
          },
          {
            title: 'optionTitle12',
            value: '✅',
          },
          {
            title: 'optionTitle13',
            value: '✅',
          },
          {
            title: 'optionTitle14',
            value: '✅',
          },
          {
            title: 'optionTitle15',
            value: '✅',
          },
          {
            title: 'optionTitle16',
            value: 'optionValue19',
          },
          {
            title: 'optionTitle17',
            value: '✅',
          },
          {
            title: 'optionTitle18',
            value: '✅',
          },
        ],
      },
      {
        category: 'dimension',
        options: [
          { title: 'optionTitle19', value: '90kg' },
          {
            title: 'optionTitle20',
            value: '66sm',
          },
          {
            title: 'optionTitle21',
            value: '123sm',
          },
          {
            title: 'optionTitle22',
            value: '175195sm',
          },
        ],
      },
      {
        category: 'apexVRSpecificationTitle',
        options: [
          { title: 'optionTitle23', value: '900 W' },
          { title: 'optionTitle24', value: '110V/230V' },
          { title: 'optionTitle25', value: '50-60 Hz' },
        ],
      },
    ],
  };
}
