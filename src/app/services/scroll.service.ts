import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private subscription?: Subscription;

  constructor(private sharedService: SharedService) {}

  init() {
    this.subscription = this.sharedService.scrollToSection$.subscribe(
      (sectionId) => {
        this.scrollTo(sectionId);
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
