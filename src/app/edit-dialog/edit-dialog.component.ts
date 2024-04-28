import { Component, ViewChild, ElementRef } from '@angular/core';
import { SummaryItem } from '../../shared/models/summaryItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'edit-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-dialog.component.html',
  styleUrl: './edit-dialog.component.css'
})
export class EditDialogComponent {
  items : SummaryItem[] = [
    new SummaryItem('Cal Intake', true, true),
    new SummaryItem('Cal Burned', true, true),
    new SummaryItem('Weight', true, false, true),
    new SummaryItem('Weight Goal', true, false, true),
    new SummaryItem('Height', true, false, false, true),
    new SummaryItem('BMI'),
    new SummaryItem('Today Done', true, false, false, false, true),
  ];

  toggleItem(item : SummaryItem) {
    item.isIncluded = !item.isIncluded;
  }

  @ViewChild('dialog') dialog?: ElementRef;
  hideEditDialog() {
    this.dialog?.nativeElement.classList.add('opacity-0');
    this.dialog?.nativeElement.classList.remove('opacity-100');
    setTimeout(() => {
      this.dialog?.nativeElement.classList.add('hidden');
    }, 500);
  }

}
