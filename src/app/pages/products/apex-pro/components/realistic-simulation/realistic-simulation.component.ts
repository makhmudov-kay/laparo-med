import { Component, Input } from '@angular/core';
import { InformationIconsComponent } from './information-icons/information-icons.component';
import { DataInformation } from '../../apex-pro.component';
import { NgClass, NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-realistic-simulation',
  templateUrl: './realistic-simulation.component.html',
  styleUrls: ['./realistic-simulation.component.less'],
  standalone: true,
  imports: [InformationIconsComponent, NgFor, NgClass, TranslateModule],
})
export class RealisticSimulationComponent {
  /**
   *
   */
  @Input()
  data!: DataInformation;

  /**
   *
   */
  @Input()
  even!: boolean;
}
