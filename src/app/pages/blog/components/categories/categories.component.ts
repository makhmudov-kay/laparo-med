import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  ],
})
export class CategoriesComponent {
  @Input()
  isDetail = false;

  /**
   *
   */
  @Input()
  data: Category[] = [];
}
