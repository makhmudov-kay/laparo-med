import { Component } from '@angular/core';
import { LinesComponent } from 'src/app/shared/svg/lines/lines.component';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.less'],
  standalone: true,
  imports: [LinesComponent],
})
export class LineComponent {}
