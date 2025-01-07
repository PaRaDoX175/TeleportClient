import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
      },
      150: {
        items: 2,
      },
      300: {
        items: 3,
      },
      450: {
        items: 4,
      },
      600: {
        items: 5,
      },
    },
    nav: true,
    margin: 100,
    autoplay: true,
    center: true,
  };
}
