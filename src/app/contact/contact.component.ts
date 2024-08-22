import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  // templateUrl: './contact.component.html',
  // styleUrls: ['./contact.component.css'],
  templateUrl: './cont.component.html',
  styleUrls: ['./cont.component.css'],
})
export class ContactComponent {
  email: any = 'khelifiatef@outlook.fr';
  name: any = '';
  message: any = '';
  object: any = '';

  sendEmail(event: Event): void {
    event.preventDefault(); // Prevents the default form submission behavior

    const mailToLink = this.getMailToLink();
    window.location.href = mailToLink; // Opens the user's email client
  }

  getMailToLink(): any {
    try {
      const subject = encodeURIComponent(` ${this.object}`);
      const body = encodeURIComponent(
        `Name: ${this.name}\n\nMessage:\n${this.message}`
      );
      return `mailto:khelifiatef@outlook.fr?subject=${subject}&body=${body}`;
    } catch (e) {
      console.log(e);
    }
  }
}
