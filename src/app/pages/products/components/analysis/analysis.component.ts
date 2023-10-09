import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.less'],
  standalone: true,
})
export class AnalysisComponent {
  @Input()
  data!: any;
}
