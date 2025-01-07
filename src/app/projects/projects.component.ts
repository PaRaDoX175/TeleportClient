import { Component, OnInit } from '@angular/core';
import { SliderFilled, arrOfInfo } from './projects-info';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  // arr: SliderFilled[] = [];

  // constructor(private translate: TranslateService) {
  //   this.arr = arrOfInfo;
  // }

  arr: SliderFilled[] = [];
  currentLanguage?: string;

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.languageService.getLanguageChangeObservable().subscribe({
      next: (lang: string) => {
        this.currentLanguage = lang;
        this.loadProjects();
        console.log('Все ок');
      },
      error: (err: any) => console.log(err),
    });
  }

  loadProjects() {
    this.translate.get('PROJECTS').subscribe((data: any[]) => {
      this.arr = data;
    });
  }
}
