import { Component } from '@angular/core';
import { MissionCardComponent } from './mission-card/mission-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.less'],
  standalone: true,
  imports: [MissionCardComponent, NgFor],
})
export class MissionComponent {}
