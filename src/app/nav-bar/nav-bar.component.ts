import { Component } from '@angular/core';
import { ScrollService } from '../services/scroll.service';
import { StorageService } from '../services/storage.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(
    private scrollService: ScrollService,
    private storageService: StorageService,
    public translate: TranslateService
  ) {}

  scrollToSection(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
  }

  saveValue(value: string) {
    this.storageService.saveValue(value);
  }
}
