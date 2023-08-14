import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ArrowComponent } from 'src/app/shared/svg/arrow/arrow.component';
import { CartComponent } from 'src/app/shared/svg/cart/cart.component';
import { LogoComponent } from 'src/app/shared/svg/logo/logo.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  standalone: true,
  imports: [LogoComponent, CartComponent, ArrowComponent, NgIf],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
