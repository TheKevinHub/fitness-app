import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ExerciseItem } from '../shared/models/exerciseItem';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { AddExerciseFormComponent } from './add-exercise-form/add-exercise-form.component';
import { ExerciseFilterComponent } from './exercise-filter/exercise-filter.component';
import { EventService } from './../shared/services/EventService';
import { ExerciseService } from './exercise.service';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, CommonModule, FormsModule,
    ExerciseListComponent, AddExerciseFormComponent,
    ExerciseFilterComponent, HttpClientModule,
    ContactComponent, RouterModule, HomePageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'fitness-app';

  ngOnInit(): void {
    this.exerciseService.getExercises().subscribe(
      (data : any) => {
        this.items = data;
      },
    );
  }


  // Testing adding new exercises and working with filters
  // PS. Remember to remove bootstrap from index.html

  items : ExerciseItem[] = [];

  constructor(events: EventService, private exerciseService : ExerciseService, private router: Router) {
    events.listen('removeExercise', (exercise : any) => {
      // todo remove exercise from items
      let index = this.items.indexOf(exercise);
      if (exercise.isCustom) {
        this.items.splice(index, 1);
      }
    })
  }

  filter: any;
}