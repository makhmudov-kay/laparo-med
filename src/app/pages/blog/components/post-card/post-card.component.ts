import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LinkBtnComponent } from 'src/app/shared/components/link-btn/link-btn.component';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.less'],
  standalone: true,
  imports: [NgClass, LinkBtnComponent, NgIf],
})
export class PostCardComponent {
  /**
   *
   */
  @Input()
  isFirst = false;

  /**
   *
   */
  @Input()
  isSmCard = false;

  /**
   *
   */
  @Input()
  withoutImg = false;
}
