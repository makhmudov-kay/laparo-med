import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.less'],
  standalone: true,
})
export class SoftwareComponent {
  @Input()
  data!: any;
}
