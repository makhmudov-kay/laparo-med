import { Component } from '@angular/core';
import { AdvantagesCardComponent } from './advantages-card/advantages-card.component';
import { NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

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
  imports: [AdvantagesCardComponent, NgFor, TranslateModule],
})
export class AdvantagesComponent {
  benefitsData: BenefitsData[] = [
    {
      id: 1,
      title: 'benefitTitle',
      description: 'benefitDesc',
      list: ['benefitList1', 'benefitList2', 'benefitList3'],
      img: './assets/image/advantages-1.png',
    },
    {
      id: 2,
      title: 'benefitTitle2',
      description: 'benefitDesc2',
      list: ['benefitList4', 'benefitList5', 'benefitList6'],
      img: './assets/image/advantages-2.png',
    },
    {
      id: 3,
      title: 'benefitTitle3',
      description: 'benefitDesc3',
      list: [],
      img: './assets/image/advantages-3.png',
    },
  ];
}
