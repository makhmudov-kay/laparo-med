import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { RealisticSimulationComponent } from './components/realistic-simulation/realistic-simulation.component';

@Component({
  selector: 'app-apex-pro',
  templateUrl: './apex-pro.component.html',
  styleUrls: ['./apex-pro.component.less'],
  standalone: true,
  imports: [BannerComponent, RealisticSimulationComponent],
})
export class ApexProComponent {
  dataInformations = [
    {
      img: './assets/image/apex-info-1.jpg',
      imageList: [
        {
          title: 'HYBRID APPROACH',
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
    },
  ];
}
