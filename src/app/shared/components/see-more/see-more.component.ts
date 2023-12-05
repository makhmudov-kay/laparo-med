import { NgxIntersectionComponent } from 'ngx-intersection2';
import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.less'],
  standalone: true,
  imports: [NgxIntersectionComponent, NgClass, TranslateModule],
})
export class SeeMoreComponent {
  fade = false;
  handleIntersection(e: boolean) {
    this.fade = e;
  }
}
