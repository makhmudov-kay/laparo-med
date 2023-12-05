import { NgxIntersectionComponent } from 'ngx-intersection2';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BenefitsData } from '../advantages.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-advantages-card',
  templateUrl: './advantages-card.component.html',
  styleUrls: ['./advantages-card.component.less'],
  standalone: true,
  imports: [NgClass, NgIf, NgFor, NgxIntersectionComponent, TranslateModule],
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

  /**
   *
   */
  fade = false;

  /**
   *
   * @param e
   */
  handleIntersection(e: boolean) {
    this.fade = e;
  }
}
