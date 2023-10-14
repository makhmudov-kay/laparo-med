import { Component, inject } from '@angular/core';
import { PostsComponent } from './components/posts/posts.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PopularComponent } from './components/popular/popular.component';
import { ArrowSVG } from 'src/app/shared/svg/arrow/arrow.component';
import { SubscribeComponent } from 'src/app/shared/components/subscribe/subscribe.component';
import { BlogService } from './services/blog.service';
import { Observable } from 'rxjs';
import { Grid } from 'src/app/shared/models/grid.model';
import { Blog } from './models/blog.model';
import { AsyncPipe, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Constants } from 'src/app/core/configs/constants';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less'],
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,

    TranslateModule,

    PostsComponent,
    CategoriesComponent,
    PopularComponent,
    ArrowSVG,
    SubscribeComponent,
  ],
})
export class BlogComponent {
  $blog = inject(BlogService);

  blog?: Grid<Blog>;

  public get pageIndex(): number {
    return this.$blog.pageIndex;
  }
  public set pageIndex(v: number) {
    this.$blog.pageIndex = v;
  }

  get popular$() {
    return this.$blog.popular$;
  }

  readonly PAGE_SIZE = Constants.PAGE_SIZE;

  /**
   *
   */
  constructor() {
    this.$blog
      .getAll()
      .pipe(takeUntilDestroyed())
      .subscribe((blog) => (this.blog = blog));
  }

  /**
   *
   * @param pageIndex
   */
  handlePageIndexChange(pageIndex: number) {
    this.pageIndex = pageIndex;
    this.$blog.getAll().subscribe((blog) => {
      this.blog = {
        ...blog,
        results: [...this.blog!.results, ...blog.results],
      };
    });
  }
}
