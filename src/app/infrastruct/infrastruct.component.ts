import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-infrastruct',
  templateUrl: './infrastruct.component.html',
  styleUrls: ['./infrastruct.component.scss'],
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
export class InfrastructComponent {
  activeText: string = 'text1';

  showText(textId: string) {
    this.activeText = textId;
  }
  getAnimationState(text: string) {
    return this.activeText === text ? 'visible' : 'hidden';
  }
}
