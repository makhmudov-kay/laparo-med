import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.less'],
  standalone: true,
  imports: [TranslateModule],
})
export class SoftwareComponent {
  @Input()
  data!: any;
}
