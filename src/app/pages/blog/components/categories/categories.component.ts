import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Category } from 'src/app/shared/models/category.model';
import { MyTranslatePipe } from 'src/app/shared/pipes/my-translate.pipe';
import { SvgCloseComponent } from 'src/app/shared/svg/svg-close/svg-close.component';
import { SvgSearchComponent } from 'src/app/shared/svg/svg-search/svg-search.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.less'],
  standalone: true,
  imports: [
    SvgSearchComponent,
    NgFor,
    SvgCloseComponent,
    NgClass,
    TranslateModule,
    MyTranslatePipe,
    AsyncPipe,
    RouterLink,
    FormsModule,
    NgIf,
  ],
})
export class CategoriesComponent {
  /**
   *
   */
  @Input()
  isDetail = false;

  /**
   *
   */
  @Input()
  data: Category[] = [];

  /**
   */
  @Output()
  seartValue = new EventEmitter<string>();

  /**
   */
  @Output()
  resetInputHandler = new EventEmitter();

  /**
   *
   */
  categoryId!: number;

  /**
   *
   */
  value = '';

  /**
   *
   * @param router
   */
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {
    this.route.queryParams.subscribe((p) => {
      console.log(p);

      this.categoryId = +p['category_id'];
      this.cd.markForCheck();
    });
  }

  /**
   *
   * @param categoryId
   */
  selectCategory(categoryId: number) {
    this.categoryId = categoryId;
    this.router.navigate([], { queryParams: { category_id: categoryId } });
  }

  /**
   *
   * @param text
   */
  searchText() {
    this.seartValue.emit(this.value);
  }

  /**
   *
   */
  resetInput() {
    this.resetInputHandler.emit();
    this.value = '';
  }
}
