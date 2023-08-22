import { Component, Input } from '@angular/core';
import { ArrowBtnSVG } from 'src/app/shared/svg/arrow-btn/arrow-btn.component';
import { News } from '../news-block.interface';

@Component({
  selector: 'app-news-slide',
  templateUrl: './news-slide.component.html',
  styleUrls: ['./news-slide.component.less'],
  standalone: true,
  imports: [ArrowBtnSVG],
})
export class NewsSlideComponent {
  /**
   * 
   */
  @Input()
  new!: News;
}
