import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BenefitsData } from '../advantages.component';

@Component({
  selector: 'app-advantages-card',
  templateUrl: './advantages-card.component.html',
  styleUrls: ['./advantages-card.component.less'],
  standalone: true,
  imports: [NgClass, NgIf, NgFor],
})
export class AdvantagesCardComponent {
  /**
   *
   */
  @Input()
  even = false;

  /**
   *
   */
  @Input()
  data!: BenefitsData;
}
