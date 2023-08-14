import { Component, OnInit } from '@angular/core';
import { LogoComponent } from 'src/app/shared/svg/logo/logo.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
  standalone: true,
  imports: [LogoComponent],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
