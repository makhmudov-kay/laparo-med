import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
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
  value = '';

  /**
   *
   * @param router
   */
  constructor(private router: Router) {}

  /**
   *
   * @param categoryId
   */
  selectCategory(categoryId: number) {
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
