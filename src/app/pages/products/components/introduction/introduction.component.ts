import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IntroductionSvgComponent } from 'src/app/shared/svg/introduction-svg/introduction-svg.component';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.less'],
  standalone: true,
  imports: [IntroductionSvgComponent, TranslateModule],
})
export class IntroductionComponent {
  /**
   */
  @Input()
  data!: any;
}
