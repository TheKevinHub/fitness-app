import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { timer } from 'rxjs';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionClose, ionBarbellOutline, ionBookOutline, ionTimerOutline, ionBody } from '@ng-icons/ionicons';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, DatePipe, NgIconComponent, EditDialogComponent],
  providers:[provideIcons({ ionClose, ionBarbellOutline, ionBookOutline, ionTimerOutline, ionBody })],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router) { }

  dateTime!: Date

  ngOnInit(): void {
    timer(0, 1000).subscribe(() => {
      this.dateTime = new Date()
    })
  }

  goToWorkout() {
    this.router.navigate(['exercises']);
  }


  @ViewChild(EditDialogComponent) dialog?: EditDialogComponent;
  showEditDialog() {
    this.dialog?.dialog?.nativeElement.classList.remove('hidden');
    setTimeout(() => {
      this.dialog?.dialog?.nativeElement.classList.add('opacity-100');
    }, 20);
  }
}