import { Component } from '@angular/core';
import { SvgSpinnerComponent } from 'src/app/shared/svg/svg-spinner/svg-spinner.component';

@Component({
  selector: 'app-empty-card',
  templateUrl: './empty-card.component.html',
  styleUrls: ['./empty-card.component.less'],
  standalone: true,
  imports: [SvgSpinnerComponent],
})
export class EmptyCardComponent {}
