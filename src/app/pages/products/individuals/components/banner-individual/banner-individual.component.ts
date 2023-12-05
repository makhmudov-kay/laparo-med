import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-banner-individual',
  templateUrl: './banner-individual.component.html',
  styleUrls: ['./banner-individual.component.less'],
  standalone: true,
  imports: [TranslateModule],
})
export class BannerIndividualComponent {}
