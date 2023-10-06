import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateService } from '@ngx-translate/core';
import { Settings } from './core/helpers/settings';
import { Constants } from './core/configs/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
})
export class AppComponent {
  constructor(translate: TranslateService, settings: Settings) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(Constants.DEFAULT_LANGUAGE);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(settings.language);
  }
}
