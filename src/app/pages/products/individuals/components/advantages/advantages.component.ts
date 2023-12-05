import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.less'],
  standalone: true,
  imports: [NgFor, TranslateModule],
})
export class AdvantagesComponent {
  advantages = [
    'advantages1',
    'advantages2',
    'advantages3',
    'advantages4',
    'advantages5',
    'advantages6',
  ];
}
