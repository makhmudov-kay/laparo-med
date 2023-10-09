import { Component, Input } from '@angular/core';
import { IntroductionSvgComponent } from 'src/app/shared/svg/introduction-svg/introduction-svg.component';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.less'],
  standalone: true,
  imports: [IntroductionSvgComponent],
})
export class IntroductionComponent {
  /**
   */
  @Input()
  data!: any;
}
