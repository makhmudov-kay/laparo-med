import { Component } from '@angular/core';
import { CategoriesComponent } from '../blog/components/categories/categories.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { PostCardComponent } from '../blog/components/post-card/post-card.component';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.less'],
  standalone: true,
  imports: [CategoriesComponent, SocialLinksComponent, PostCardComponent]
})
export class BlogDetailComponent {}
