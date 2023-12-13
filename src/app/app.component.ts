import { Component } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateService } from '@ngx-translate/core';
import { Settings } from './core/helpers/settings';
import { Constants } from './core/configs/constants';
import { Title } from '@angular/platform-browser';
import { filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    settings: Settings,
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(Constants.DEFAULT_LANGUAGE);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(settings.language);

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateTitle();
      });

    translate.onLangChange.subscribe(() => {
      this.updateTitle();
    });
  }

  private updateTitle() {
    let route = this.activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const titleKey = route.snapshot.data['title'] || 'defaultTitleKey';
    this.translate.get(titleKey).subscribe((translatedTitle: string) => {
      this.titleService.setTitle(translatedTitle);
    });
  }
}
