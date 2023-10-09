import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paralax',
  templateUrl: './paralax.component.html',
  styleUrls: ['./paralax.component.less'],
  standalone: true,
})
export class ParalaxComponent {
  @Input()
  paralax!: any;
}
