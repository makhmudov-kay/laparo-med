import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { GenesisComponent } from './components/genesis/genesis.component';
import { LineComponent } from './components/line/line.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { ProfessionalsProductComponent } from './components/professionals-product/professionals-product.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SeeMoreComponent } from 'src/app/shared/components/see-more/see-more.component';

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.less'],
  standalone: true,
  imports: [
    BannerComponent,
    GenesisComponent,
    LineComponent,
    AdvantagesComponent,
    ProfessionalsProductComponent,
    ContactUsComponent,
    SeeMoreComponent
  ],
})
export class ProfessionalsComponent {}
