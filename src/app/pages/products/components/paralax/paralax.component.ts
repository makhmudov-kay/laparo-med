import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-paralax',
  templateUrl: './paralax.component.html',
  styleUrls: ['./paralax.component.less'],
  standalone: true,
  imports: [TranslateModule],
})
export class ParalaxComponent {
  @Input()
  paralax!: any;
}
