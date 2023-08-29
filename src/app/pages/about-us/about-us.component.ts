import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { HistoryComponent } from './components/history/history.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.less'],
  standalone: true,
  imports: [BannerComponent, HistoryComponent],
})
export class AboutUsComponent {}
