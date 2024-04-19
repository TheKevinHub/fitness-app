import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { createInvalidDomainValidator } from './customValidator';

const customValidator = createInvalidDomainValidator(['gmail.com', 'yahoo.com', 'hotmail.com']);

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {



  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email, customValidator]),
    senderMessage: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  submitForm() {
    console.log(this.contactForm.valid);
    // if (this.senderName.dirty) {
    //   alert('You changed the name field.');
    // }
  }


}
