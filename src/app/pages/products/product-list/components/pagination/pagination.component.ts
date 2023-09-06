import { Component } from '@angular/core';
import { ArrowBtnSVG } from 'src/app/shared/svg/arrow-btn/arrow-btn.component';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.less'],
  standalone: true,
  imports: [ArrowBtnSVG]
})
export class PaginationComponent {}
