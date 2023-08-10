import { Component, OnInit } from '@angular/core';
import { LogoComponent } from 'src/app/shared/svg/logo/logo.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  standalone: true,
  imports: [LogoComponent],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
