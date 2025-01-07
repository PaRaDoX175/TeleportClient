import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';

  constructor(translate: TranslateService) {
    const lItem = localStorage.getItem('Language');

    if (lItem != null) {
      switch (lItem) {
        case 'ru':
          translate.use('ru');
          break;
        case 'en':
          translate.use('en');
          break;
      }
    } else {
      translate.use('ru');
    }
  }
}
