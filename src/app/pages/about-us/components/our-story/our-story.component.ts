import { Component } from '@angular/core';
import { LinkBtnComponent } from 'src/app/shared/components/link-btn/link-btn.component';

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.less'],
  standalone: true,
  imports: [LinkBtnComponent],
})
export class OurStoryComponent {}
