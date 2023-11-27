import { Component, Input } from '@angular/core';
import { PostCardComponent } from '../post-card/post-card.component';
import { NgFor } from '@angular/common';
import { Blog } from '../../models/blog.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.less'],
  standalone: true,
  imports: [PostCardComponent, NgFor, TranslateModule],
})
export class PopularComponent {
  /**
   * key for translate
   */
  @Input()
  title!: string;

  @Input()
  data!: Blog[] | null;

  fade = false
}
