import { Component } from '@angular/core';
import { TEAM_CARD } from './team-info';
import { TeamCardComponent } from './team-card/team-card.component';
import { NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

export interface Team {
  title: string;
  img: string;
  text: string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.less'],
  standalone: true,
  imports: [TeamCardComponent, NgFor, TranslateModule],
})
export class TeamComponent {
  /**
   *
   */
  team: Team[] = TEAM_CARD;
}
