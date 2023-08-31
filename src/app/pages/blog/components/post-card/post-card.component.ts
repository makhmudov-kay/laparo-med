import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.less'],
  standalone: true,
  imports: [NgClass],
})
export class PostCardComponent {
  @Input()
  isFirst = false;
}
