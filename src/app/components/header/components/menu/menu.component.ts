import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ArrowSVG } from 'src/app/shared/svg/arrow/arrow.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  standalone: true,
  imports: [ArrowSVG, NgIf, RouterLink, TranslateModule],
})
export class MenuComponent {
  @Input()
  isDrawer!: boolean;

  @Output()
  closeDrawer = new EventEmitter<boolean>();
}
