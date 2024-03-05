import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseForm } from './response.interface';
import { ToastrService } from 'ngx-toastr';
import { Email } from './SMTPLib';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  baseUrl = 'http://localhost:5045/api/message';
  isLoading = false;
  email = Email;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  postMessage(form: ResponseForm) {
    this.isLoading = true;
    this.http.post(this.baseUrl, form, { responseType: 'text' }).subscribe({
      next: (response) => {
        this.isLoading = false;
        console.log(response);
        this.toastr.success('Сообщение успешно отправлено');
      },
      error: () => {
        this.isLoading = false;
        this.toastr.error('Сообщение не было отправлено');
      },
    });
  }

  sendEmail(form: ResponseForm) {
    this.email
      .send({
        SecureToken: '3b4bfc4a-f8ee-417a-a4b3-5899c6b76299',
        To: 'ruslan.absalam@gmail.com',
        From: 'ruslan.absalam@gmail.com',
        Subject: 'Новая заявка с сайта t-port.kz',
        Body: `<p><b>Имя:</b> ${form.Name}</p><p><b>Почта:</b> ${form.EmailAddress}</p><p><b>Телефон:</b> ${form.Phone}</p><p><b>Текст сообщения:</b> ${form.Message}</p>`,
      })
      .then((message) => {
        alert(message);
      });
  }
}
