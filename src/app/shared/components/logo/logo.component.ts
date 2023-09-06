import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.less'],
  standalone: true,
  imports: [NgClass, RouterLink],
})
export class LogoComponent {
  /**
   *
   */
  @Input()
  footer = false;
}
