import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mission-card',
  templateUrl: './mission-card.component.html',
  styleUrls: ['./mission-card.component.less'],
  standalone: true,
  imports: [TranslateModule],
})
export class MissionCardComponent {
  @Input()
  info!: any;
}
