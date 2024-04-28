import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'edit-dialog',
  standalone: true,
  imports: [],
  templateUrl: './edit-dialog.component.html',
  styleUrl: './edit-dialog.component.css'
})
export class EditDialogComponent {

  @ViewChild('dialog') dialog?: ElementRef;
  hideEditDialog() {
    this.dialog?.nativeElement.classList.add('opacity-0');
    this.dialog?.nativeElement.classList.remove('opacity-100');
    setTimeout(() => {
      this.dialog?.nativeElement.classList.add('hidden');
    }, 500);
  }

}
