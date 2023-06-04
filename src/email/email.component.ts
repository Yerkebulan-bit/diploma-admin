import {Component} from '@angular/core';
import {EmailController} from "../controllers/email.controller";

@Component({
  selector: 'app-form',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailFormComponent {
  subject: string = '';
  message: string = '';

  constructor(private emailController: EmailController) {
  }

  submitForm() {

    this.emailController.sendMail(this.message, this.subject).subscribe()

  }
}
