import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languageChangeSubject: Subject<string> = new Subject<string>();

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.languageChangeSubject.next(event.lang);
    });
  }

  getLanguageChangeObservable() {
    return this.languageChangeSubject.asObservable();
  }
}
