import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { HistoryComponent } from './components/history/history.component';
import { MissionComponent } from './components/mission/mission.component';
import { OurStoryComponent } from './components/our-story/our-story.component';
import { TeamComponent } from './components/team/team.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.less'],
  standalone: true,
  imports: [
    BannerComponent,
    HistoryComponent,
    MissionComponent,
    OurStoryComponent,
    TeamComponent,
  ],
})
export class AboutUsComponent {}
