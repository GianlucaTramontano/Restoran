import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  onSubmit() {
    console.log('Form submitted', { name: this.name, email: this.email, subject: this.subject, message: this.message });
  }
}