import { NgxIntersectionComponent } from 'ngx-intersection2';
import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.less'],
  standalone: true,
  imports: [NgxIntersectionComponent, NgClass],
})
export class SeeMoreComponent {
  fade = false;
  handleIntersection(e: boolean) {
    this.fade = e;
  }
}
