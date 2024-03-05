import { Component } from '@angular/core';
import { SliderFilled, arrOfInfo } from './projects-info';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  arr: SliderFilled[] = [];
  constructor() {
    this.arr = arrOfInfo;
  }
}
