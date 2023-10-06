import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { RealisticSimulationComponent } from './components/realistic-simulation/realistic-simulation.component';
import { NgFor } from '@angular/common';

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
  imports: [BannerComponent, RealisticSimulationComponent, NgFor],
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
}
