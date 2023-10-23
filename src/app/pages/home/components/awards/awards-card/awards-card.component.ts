import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LinkBtnComponent } from 'src/app/shared/components/link-btn/link-btn.component';

@Component({
  selector: 'app-awards-card',
  templateUrl: './awards-card.component.html',
  styleUrls: ['./awards-card.component.less'],
  standalone: true,
  imports: [LinkBtnComponent, TranslateModule],
})
export class AwardsCardComponent {
  @Input()
  data!: any;
}
