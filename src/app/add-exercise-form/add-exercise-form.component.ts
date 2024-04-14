import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ExerciseItem } from '../../shared/models/exerciseItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-exercise-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-exercise-form.component.html',
  styleUrl: './add-exercise-form.component.css'
})
export class AddExerciseFormComponent {
  @Output() addExercise = new EventEmitter<ExerciseItem>();
  newExerciseName = '';

  addNewExercise() {
    this.addExercise.emit(new ExerciseItem(this.newExerciseName, true))
    this.newExerciseName = '';
  }

}
