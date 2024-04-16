import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExerciseItem } from '../../shared/models/exerciseItem';
import { CommonModule } from '@angular/common';
import { EventService } from './../../shared/services/EventService';

@Component({
  selector: 'exercise-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-list-item.component.html',
  styleUrl: './exercise-list-item.component.css'
})
export class ExerciseListItemComponent {
  @Input() exercise! : ExerciseItem;

  get cssClasses() {
    // return this.isCustom ? ['custom', 'text-red-500'] : [''];
    return {'custom text-red-500': this.exercise.isCustom};
  }

  constructor(private events: EventService) { }

  removeExercise() {
    this.events.emit('removeExercise', this.exercise);
  }

  toggleCustom() {
    this.exercise.isCustom = !this.exercise.isCustom;
  }

}
