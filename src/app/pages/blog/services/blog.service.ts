import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BaseService } from 'src/app/core/services/base.service';
import { Constants } from 'src/app/core/configs/constants';
import { Blog } from '../models/blog.model';
import { Grid } from 'src/app/shared/models/grid.model';
import { BlogDetails } from '../models/blog-details.model';

@Injectable({ providedIn: 'root' })
export class BlogService {
  pageIndex = 1;
  constructor(private $base: BaseService) {}

  getAll() {
    const params = new HttpParams()
      .append('page', this.pageIndex)
      .append('page_size', Constants.PAGE_SIZE);
    return this.$base.get<Grid<Blog>>('shop/blog/', params);
  }

  getById(id: number) {
    return this.$base.get<BlogDetails>(`shop/blog/${id}/`);
  }
}
