import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ArrowBtnSVG } from 'src/app/shared/svg/arrow-btn/arrow-btn.component';
import { SwiperModule } from 'swiper/angular';
import { PARTNERS } from './partners-data';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.less'],
  standalone: true,
  imports: [SwiperModule, NgFor, ArrowBtnSVG],
})
export class PartnersComponent {
  data = PARTNERS
}
