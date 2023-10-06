import { Component } from '@angular/core';
import { InformationIconsComponent } from './information-icons/information-icons.component';

@Component({
  selector: 'app-realistic-simulation',
  templateUrl: './realistic-simulation.component.html',
  styleUrls: ['./realistic-simulation.component.less'],
  standalone: true,
  imports: [InformationIconsComponent],
})
export class RealisticSimulationComponent {}
