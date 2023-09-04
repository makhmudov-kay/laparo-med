import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SvgCloseComponent } from 'src/app/shared/svg/svg-close/svg-close.component';
import { SvgSearchComponent } from 'src/app/shared/svg/svg-search/svg-search.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.less'],
  standalone: true,
  imports: [SvgSearchComponent, NgFor, SvgCloseComponent, NgClass],
})
export class CategoriesComponent {
  @Input()
  isDetail = false;
}
