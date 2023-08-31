import { Component } from '@angular/core';
import { PostCardComponent } from '../post-card/post-card.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less'],
  standalone: true,
  imports: [PostCardComponent, NgFor, NgClass],
})
export class PostsComponent {}
