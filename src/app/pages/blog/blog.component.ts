import { Component } from '@angular/core';
import { PostsComponent } from './components/posts/posts.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PopularComponent } from './components/popular/popular.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less'],
  standalone: true,
  imports: [PostsComponent, CategoriesComponent, PopularComponent],
})
export class BlogComponent {}
