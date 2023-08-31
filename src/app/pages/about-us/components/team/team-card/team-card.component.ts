import { Component, Input } from '@angular/core';
import { Team } from '../team.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.less'],
  standalone: true,
  imports: [NgClass],
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
}
