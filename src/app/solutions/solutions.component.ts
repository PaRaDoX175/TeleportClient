import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.5s ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class SolutionsComponent {
  activeText: string = 'text1';

  showText(textId: string) {
    this.activeText = textId;
  }
  getAnimationState(text: string) {
    return this.activeText === text ? 'visible' : 'hidden';
  }
}
