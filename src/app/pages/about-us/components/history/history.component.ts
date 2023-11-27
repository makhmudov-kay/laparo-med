import { NgxIntersectionComponent } from 'ngx-intersection2';
import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { STORY_DATA } from './story-data';
import { TranslateModule } from '@ngx-translate/core';
interface StoryData {
  date: string;
  title: string;
  fade?: boolean;
}
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less'],
  standalone: true,
  imports: [NgFor, TranslateModule, NgxIntersectionComponent, NgClass],
})
export class HistoryComponent {
  stories: StoryData[] = STORY_DATA;

  handleIntersection(e: boolean, story: StoryData) {
    story.fade = e;
  }
}
