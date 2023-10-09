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
    header: 'TRAINED TO PERFECTION',
    description:
      "Meet the LAPARO Analytic - the world's only laparoscopy simulator with advanced training analysis. ximize the effectiveness of your learning with the help of specialized training scenarios developed in ollaboration with surgeons and specialists.",
    video: './assets/video/analytic-video.mp4',
    title: 'Camera 0° & 30°',
    leftText:
      'More surgeries in hospitals around the world are performed with the laparoscopic approach than ever before. As the method becomes widely adopted there is one obstacle standing in the way of many operating rooms: how can one prepare more new surgeons for these challenging procedures? Training the manual and decision-making skills with the use of professional laparoscopy simulators is becoming increasingly more popular. Surgery can be thought of as a type of craftsmanship, for it to be mastered, systematic training through repetition and reflection must be performed. Experience the high level of quality and rapid improvement with the LAPARO Analytic. It is a complex training station equipped with sophisticated sensors which precisely track and analyze the position of instruments during training. With tangible results from a comprehensive scoring system and the ability to track progress on a personalized learning curve based on interactive training scenarios. You will be able to hone your skills with little need for outside assistance.',
    rightText:
      'Having a good vision with a certain amount of light during minimally invasive surgery is a matter of success and directly affects patient safety. There are different methodologies and preferences of what endoscopic camera angle to use and when. This is why vision tracks are available with optics angles 0° and 30°. Why not implement it to simulators to make the training closer to reality? New Analytic’s camera can be adjusted to individual preferences. Thanks to the new mechanism it is possible to choose a preferred angle before the training. This is a standard feature of vision tracks but rarely found in laparoscopic simulators, not mention of training boxes. Changing the angle of the camera allows for more diversified training. Especially, using 30°angle requires re-adaptation. We are facing here different, deeper, and more difficult perspective. Additionally, using 30° camera we get the widest possible angle during surgery. In the simulators available on the market cameras are embedded or they are using photo cameras. Very often they are permanently mounted. There is no possibility to adjust it to specific needs.',
  };

  /**
   */
  infoBlockData = [
    {
      img: './assets/image/apex-vr-img.png',
      title: 'Networking Capability',
    },
    {
      img: './assets/image/apex-vr-img-2.png',
      title: 'Multiple User Accounts',
    },
    {
      img: './assets/image/apex-vr-img-3.png',
      title: 'Training Analysis',
    },
    {
      img: './assets/image/apex-vr-img-4.png',
      title: 'Complex Parameter Scoring System',
    },
    {
      img: './assets/image/apex-vr-img-5.png',
      title: 'Learning Curve Tracking',
    },
    {
      img: './assets/image/apex-vr-img-6.png',
      title: 'Easy Interface',
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
        title: 'Touchscreen Interface',
        text: 'All-in-one 23" Touchscreen Computer with an easy interface and stand-alone Laparo Application.',
      },
      {
        img: './assets/image/analytic-img-2.jpg',
        title: 'Camera',
        text: 'Full HD adjustable camera 0°, 30° mounted on a rotatable ball-joint mount.',
      },
      {
        img: './assets/image/analytic-img-3.png',
        title: 'Instruments',
        text: 'The included instruments provide a realistic high-fidelity training experience.',
      },
      {
        img: './assets/image/analytic-img-4.png',
        title: 'Operating Area',
        text: 'A hinge mounted lid on the top and a removable front cover allow easy access for adjustment.',
      },
      {
        img: './assets/image/analytic-img-5.png',
        title: 'Adjustable Height',
        text: 'An electric column allows easy and effortless height adjustment.',
      },
    ],
  };

  /**
   */
  apexVRFeatures = {
    first: {
      title: 'Log In',
      text: 'Enter your user credentials to login to your own personal account.',
      img: './assets/image/icon-feature-1.png',
    },
    second: {
      title: 'Learn',
      text: 'Watch the tutorial, pay close attention to see how to do it.',
      img: './assets/image/icon-feature-4.png',
    },
    third: {
      title: 'Select Scenario',
      text: 'Select a new training session by browsing available scenarios and placing right module in the operating area.',
      img: './assets/image/icon-feature-3.png',
    },
    fourth: {
      title: 'Train',
      text: 'Select start, insert the instruments through the trocar sensors and complete scenario requirements',
      img: './assets/image/icon-feature-2.png',
    },
    fivth: {
      title: 'Score',
      text: 'After completing training you will see a comprehensive score breakdown and you will be able to analyze your performance in detail.',
      img: './assets/image/icon-feature-6.png',
    },
    sixth: {
      title: 'Review',
      text: 'With the Timeline Analysis watch your past training performance, look for areas in need of improvement.',
      img: './assets/image/icon-feature-5.png',
    },
  };

  /**
   */
  analysis = {
    title: 'Analysis',
    description:
      'Meet the incredible capabilities of the LAPARO Analytic - ultra precise analysis based on original state-of-the-art electronic sensors. Increase the effectiveness of your training - monitor your skill development in real-time and make corrections to hone your technique. After completing training, analyze the results to draw your own conclusions on how to do better. See parameters for each hand separately, adjust future training to fit the training path of you and your students. Track progress and maximize efficiency!',
    leftText:
      'LAPARO Analytic software gives the surgeon the ability to precisely analyze even the most subtle instrument movements. After completing a session you will be able to scroll through an interactive timeline which displays detailed graphs and zones of interest along with the recorded video. This greatly improves the process of finding and defining the mistakes and problems, and it shows what mistakes are made and must be corrected.',
    rightText:
      'At the end of each training session the user can see the precise scores for each aspect of training, thanks to which he will know exactly where he is in his skill development. What’s important, all users have their own personal accounts with only their own scores, results and recorded videos.',
  };

  /**
   */
  software = {
    img: './assets/image/software-2.png',
    title: 'Multiple accounts One device',
    text: 'A single LAPARO Analytic has the ability to store, hold, and protect the information of multiple trainees. Each user can log in with his own password-protected account and see all of his previous results as well as their own personal Learning Curve. A supervisor or professor with an administrator account can monitor all users and manage them in groups.',
  };

  /**
   */
  paralax = {
    img: '../../../../../assets/image/paralax-2.png',
    title: 'LIMITLESS',
  };

  /**
   */
  networking = {
    title: 'Networking',
    description:
      'Configure your LAPARO Analytic trainers into a network and conduct high-quality group training sessions. The mentor station will let you monitor multiple trainees simultaneously and to correct their mistakes immediately. You can also stream your own view from your own operating area to your trainees so that they can focus and follow the exercise on their own screens.',
    works: [
      {
        title: 'TEACH',
        text: 'Stream your own screen during training ensuring that each trainee is able to watch your work closely.',
        value: 1,
      },
      {
        title: 'SUPERVISE',
        text: 'You may observe multiple students simultaneously from the comfort of your own station and react accordingly.',
        value: 2,
      },
      {
        title: 'TAKE YOUR PICK',
        text: 'With networking functionality each account is accessible on each training station - you may log-in on any training station available and work from your personal account.',
        value: 3,
      },
    ],
    background: '../../../../../assets/image/network-2.png',
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
