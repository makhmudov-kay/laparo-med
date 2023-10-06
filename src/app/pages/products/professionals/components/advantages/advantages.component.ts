import { Component } from '@angular/core';
import { AdvantagesCardComponent } from './advantages-card/advantages-card.component';
import { NgFor } from '@angular/common';

export interface BenefitsData {
  id: number;
  title: string;
  description: string;
  list: string[];
  img: string;
}

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.less'],
  standalone: true,
  imports: [AdvantagesCardComponent, NgFor],
})
export class AdvantagesComponent {
  benefitsData: BenefitsData[] = [
    {
      id: 1,
      title: 'Benefits for Hospitals',
      description:
        'Procedures performed laparoscopically save time and are economically preferable for the hospital itself – the patient recovery period following laparoscopy is much shorter than in traditional surgery.',
      list: [
        'Increased access to proper training results in a lower risk of injury and improved patient-care.',
        'More young and capable surgeons can work effectively in hospitals which invest in skill development.',
        'Shortened hospital stays are especially important now, in the time of the global pandemic.',
      ],
      img: './assets/image/advantages-1.png',
    },
    {
      id: 2,
      title: 'Benefits for Patients',
      description:
        'The laparoscopic approach is most importantly an increased level of comfort to the patient – convalescence is much shorter than in open laparotomy. The patient can usually return to normality after just several days of healing. What’s more:',
      list: [
        'Laparoscopy is much less burdensome to the patient’s composition reduces the risk of complication',
        'After laparoscopic surgery, only small, barely visible scars remain',
        'Normal digestive system peristalsis returns much faster.',
      ],
      img: './assets/image/advantages-2.png',
    },
    {
      id: 3,
      title: 'Growing Trend',
      description:
        'Every year more and more procedures are adapted and implemented for the laparoscopic approach. It applies in such cases as: removal of the gallbladder, appendectomy, excision of colon tumors, adrenal gland tumors, treatment of acute abdominal diseases and treatment of pathological obesity operations on the spleen, kidneys, prostate, hernias in many gynecological diseases.',
      list: [],
      img: './assets/image/advantages-3.png',
    },
  ];
}
