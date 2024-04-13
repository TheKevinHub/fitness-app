import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'fitness-app';

  dateTime: Date

  ngOnInit() {
    timer(0, 1000).subscribe(() => {
      this.dateTime = new Date()
    })
  }
}


// import { Observable, timer } from 'rxjs';
// import { map } from 'rxjs/operators';

// dateTime: Observable<Date>

// ngOnInit() {
//   this.dateTime = timer(0, 1000).pipe (
//     map(() => {
//       return new Date()
//     })
//   )
// }
// Add | async