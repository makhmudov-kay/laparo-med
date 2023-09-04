import { Component } from '@angular/core';
import { CategoriesComponent } from '../blog/components/categories/categories.component';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.less'],
  standalone: true,
  imports: [CategoriesComponent]
})
export class BlogDetailComponent {}
