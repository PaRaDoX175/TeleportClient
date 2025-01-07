import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly key = 'Language';

  getValue() {
    return localStorage.getItem(this.key);
  }

  saveValue(lang: string) {
    localStorage.setItem(this.key, lang);
  }

  clearValue() {
    localStorage.removeItem(this.key);
  }
}
