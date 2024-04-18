import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

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
    senderName: new FormControl(''),
    senderEmail: new FormControl(''),
    senderMessage: new FormControl('')
  });

  submitForm() {
    console.log(this.contactForm.valid);
    // if (this.senderName.dirty) {
    //   alert('You changed the name field.');
    // }
  }


}
