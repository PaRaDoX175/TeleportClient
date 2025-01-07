import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ResponseForm } from './response.interface';
import { FooterService } from './footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  // baseUrl = 'http://localhost:5045/api/message';

  constructor(public service: FooterService) {}

  // onSubmit(form: NgForm) {
  //   this.service.postMessage(form.value);
  // }

  onSubmit(form: NgForm) {
    this.service.isLoading = true;
    this.service.sendEmail(form.value);
    this.service.isLoading = false;
  }
}
