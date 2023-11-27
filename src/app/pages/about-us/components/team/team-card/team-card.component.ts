import { NgxIntersectionComponent } from 'ngx-intersection2';
import { Component, Input } from '@angular/core';
import { Team } from '../team.component';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.less'],
  standalone: true,
  imports: [NgClass, TranslateModule, NgxIntersectionComponent],
})
export class TeamCardComponent {
  /**
   *
   */
  @Input()
  teamCard!: Team;

  /**
   *
   */
  @Input()
  isEven = false;

  fade = false;

  handleIntersection(e: boolean) {
    this.fade = e;
  }
}
