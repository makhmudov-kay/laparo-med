import { Component } from '@angular/core';
import { MissionCardComponent } from './mission-card/mission-card.component';
import { NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.less'],
  standalone: true,
  imports: [MissionCardComponent, NgFor, TranslateModule],
})
export class MissionComponent {
  cardData = [
    {
      title: 'mission',
      text: 'missionText',
    },
    {
      title: 'vision',
      text: 'visionText',
    },
    {
      title: 'values',
      text: 'valuesText',
    },
  ];
}
