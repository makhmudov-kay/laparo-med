import { Component, Input } from '@angular/core';
import { PostCardComponent } from '../post-card/post-card.component';
import { NgClass, NgFor } from '@angular/common';
import { Blog } from '../../models/blog.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less'],
  standalone: true,
  imports: [PostCardComponent, NgFor, NgClass, TranslateModule],
})
export class PostsComponent {
  @Input()
  data: Blog[] = [];
}
