import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-description-first',
  templateUrl: './description-first.component.html',
  styleUrls: ['./description-first.component.less'],
  standalone: true,
  imports: [TranslateModule],
})
export class DescriptionFirstComponent {}
