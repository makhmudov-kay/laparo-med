import { NgxIntersectionComponent } from 'ngx-intersection2';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LinkBtnComponent } from 'src/app/shared/components/link-btn/link-btn.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.less'],
  standalone: true,
  imports: [
    LinkBtnComponent,
    TranslateModule,
    NgxIntersectionComponent,
    NgClass,
  ],
})
export class OurStoryComponent {
  fade = false;

  handleIntersection(e: boolean) {
    this.fade = e;
  }
}
