import { Component, inject } from '@angular/core';
import { CategoriesComponent } from '../blog/components/categories/categories.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { PostCardComponent } from '../blog/components/post-card/post-card.component';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog/services/blog.service';
import { BlogDetails } from '../blog/models/blog-details.model';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { MyTranslatePipe } from 'src/app/shared/pipes/my-translate.pipe';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.less'],
  standalone: true,
  imports: [
    CategoriesComponent,
    SocialLinksComponent,
    PostCardComponent,
    AsyncPipe,
    DatePipe,
    NgIf,

    MyTranslatePipe,
  ],
})
export class BlogDetailComponent {
  route = inject(ActivatedRoute);
  blogId = this.route.snapshot.params['id'];
  $blog = inject(BlogService);
  blog$: Observable<BlogDetails>;
  constructor() {
    this.blog$ = this.$blog.getById(this.blogId);
  }
}
