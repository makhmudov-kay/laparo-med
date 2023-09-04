import { Component } from '@angular/core';
import { PostsComponent } from './components/posts/posts.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PopularComponent } from './components/popular/popular.component';
import { ArrowSVG } from 'src/app/shared/svg/arrow/arrow.component';
import { SubscribeComponent } from 'src/app/shared/components/subscribe/subscribe.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less'],
  standalone: true,
  imports: [
    PostsComponent,
    CategoriesComponent,
    PopularComponent,
    ArrowSVG,
    SubscribeComponent,
  ],
})
export class BlogComponent {}
