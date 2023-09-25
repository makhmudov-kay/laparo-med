import { Component } from '@angular/core';
import { BannerIndividualComponent } from './components/banner-individual/banner-individual.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { IndividualProductsComponent } from './components/individual-products/individual-products.component';
import { SeeMoreComponent } from 'src/app/shared/components/see-more/see-more.component';

@Component({
  selector: 'app-individuals',
  templateUrl: './individuals.component.html',
  styleUrls: ['./individuals.component.less'],
  standalone: true,
  imports: [
    BannerIndividualComponent,
    AdvantagesComponent,
    IndividualProductsComponent,
    SeeMoreComponent
  ],
})
export class IndividualsComponent {}
