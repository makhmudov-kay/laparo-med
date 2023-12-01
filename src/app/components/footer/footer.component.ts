import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';
// import { LogoComponent } from 'src/app/shared/svg/logo/logo.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
  standalone: true,
  imports: [LogoComponent, TranslateModule, RouterLink],
})
export class FooterComponent {}
