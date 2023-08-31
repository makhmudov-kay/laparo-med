import { Component, Input } from '@angular/core';
import { PostCardComponent } from '../post-card/post-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.less'],
  standalone: true,
  imports: [PostCardComponent, NgFor],
})
export class PopularComponent {
  @Input()
  title!: string;
}
