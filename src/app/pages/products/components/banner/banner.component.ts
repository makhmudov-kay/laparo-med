import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less'],
  standalone: true,
})
export class BannerComponent {
  @Input()
  data!: any;
}