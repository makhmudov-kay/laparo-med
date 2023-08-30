import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { STORY_DATA } from './story-data';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less'],
  standalone: true,
  imports: [NgFor],
})
export class HistoryComponent {
  stories = STORY_DATA;
}
