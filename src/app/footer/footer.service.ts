import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseForm } from './response.interface';
import { ToastrService } from 'ngx-toastr';
import { Email } from './SMTPLib';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  isLoading = false;
  email = Email;

  constructor(private toastr: ToastrService) {}

  sendEmail(form: ResponseForm) {
    this.email
      .send({
        SecureToken: '2e27a134-cfae-4c58-978c-5a93d2fb65f9',
        To: 'a.sergazin@chemco.kz',
        From: 'a.sergazin@chemco.kz',
        Subject: 'Новая заявка с сайта t-port.kz',
        Body: `<p><b>Имя:</b> ${form.Name}</p><p><b>Почта:</b> ${form.EmailAddress}</p><p><b>Телефон:</b> ${form.Phone}</p><p><b>Текст сообщения:</b> ${form.Message}</p>`,
      })
      .then((message) => {
        alert(message);
      })
      .then(() => {
        this.toastr.success('Сообщение отправлено!');
      })
      .catch(() => {
        this.toastr.error('Сообщение не было отправлено');
      });
  }
}
