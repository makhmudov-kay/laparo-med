import { Component } from '@angular/core';
import { HistoryCardComponent } from './history-card/history-card.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less'],
  standalone: true,
  imports: [HistoryCardComponent]
})
export class HistoryComponent {}
