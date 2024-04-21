import { Component, OnInit, Input } from '@angular/core';
import { ExerciseItem } from '../../shared/models/exerciseItem';
import { CommonModule } from '@angular/common';
import { ExerciseListItemComponent } from '../exercise-list-item/exercise-list-item.component';
import { ExerciseService } from '../exercise.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'exercise-list',
  standalone: true,
  imports: [CommonModule, ExerciseListItemComponent, RouterModule],
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})

export class ExerciseListComponent implements OnInit {
  @Input() exercises : ExerciseItem[] = [];

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(): void {

    this.exerciseService.getExercises().subscribe(
      (exercises : any) => {
        this.exercises = exercises;
      },

      (error : any) => {
        alert(error.message);
      }
    );

  }
}
