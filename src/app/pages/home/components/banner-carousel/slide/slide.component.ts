import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ArrowSVG } from 'src/app/shared/svg/arrow/arrow.component';
import { Slide } from '../slide.interface';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.less'],
  standalone: true,
  imports: [NgStyle, ArrowSVG],
})
export class SlideComponent {
  /**
   *
   */
  @Input()
  slide!: Slide;
}
