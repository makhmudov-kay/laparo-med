import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less'],
  standalone: true,
  imports: [TranslateModule],
})
export class BannerComponent {
  @Input()
  data!: any;
}
