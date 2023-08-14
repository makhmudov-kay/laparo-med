import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ArrowSVG } from 'src/app/shared/svg/arrow/arrow.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  standalone: true,
  imports: [ArrowSVG, NgIf],
})
export class MenuComponent {
  @Input()
  isDrawer!: boolean;
}
