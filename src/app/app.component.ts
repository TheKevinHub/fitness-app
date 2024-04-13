import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { timer } from 'rxjs';
import { ExerciseItem } from '../shared/models/exerciseItem';
import { FormsModule } from '@angular/forms';

const filters = [
  (item : ExerciseItem) => item,
  (item : ExerciseItem) => !item.isCustom,
  (item : ExerciseItem) => item.isCustom,
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
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


  // Testing adding new exercises and working with filters
  // PS. Remember to remove bootstrap from index.html

  items : ExerciseItem[] = [
    new ExerciseItem('Push Up'),
    new ExerciseItem('Pull Up'),
    new ExerciseItem('Chin Up', true)
  ];

  listFilter : any = '0';

  newExerciseName = '';

  get visibleItems() : ExerciseItem[] {
    return this.items.filter(filters[this.listFilter])
  }

  addNewExercise() {
    this.items.push(new ExerciseItem(this.newExerciseName, true))
    this.newExerciseName = '';
  }

  toggleItem(item : ExerciseItem) {
    item.isCustom = !item.isCustom;
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