import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.less'],
  standalone: true,
  imports: [NgFor],
})
export class NetworkComponent {
  @Input()
  data!: any;
}
