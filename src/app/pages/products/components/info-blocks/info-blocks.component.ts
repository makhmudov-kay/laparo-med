import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-blocks',
  templateUrl: './info-blocks.component.html',
  styleUrls: ['./info-blocks.component.less'],
  standalone: true,
  imports: [NgFor],
})
export class InfoBlocksComponent {
  /**
   */
  @Input()
  data!: any;
}
