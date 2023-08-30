import { Component } from '@angular/core';
import { LinkBtnComponent } from 'src/app/shared/components/link-btn/link-btn.component';

@Component({
  selector: 'app-awards-card',
  templateUrl: './awards-card.component.html',
  styleUrls: ['./awards-card.component.less'],
  standalone: true,
  imports: [LinkBtnComponent],
})
export class AwardsCardComponent {}
