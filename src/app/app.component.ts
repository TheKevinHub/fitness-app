import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { timer } from 'rxjs';
import { ExerciseItem } from '../shared/models/exerciseItem';
import { FormsModule } from '@angular/forms';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { AddExerciseFormComponent } from './add-exercise-form/add-exercise-form.component';
import { ExerciseFilterComponent } from './exercise-filter/exercise-filter.component';
import events from './../shared/services/EventService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ExerciseListComponent, AddExerciseFormComponent, ExerciseFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'fitness-app';

  dateTime!: Date

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

  constructor() {
    events.listen('removeExercise', (exercise : any) => {
      // todo remove exercise from items
      console.log(exercise);
    })
  }

  filter: any;
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