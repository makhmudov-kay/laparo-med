import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.less'],
  standalone: true,
  imports: [TranslateModule],
})
export class AnalysisComponent {
  @Input()
  data!: any;
}
