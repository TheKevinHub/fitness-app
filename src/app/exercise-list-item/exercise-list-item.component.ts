import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExerciseItem } from '../../shared/models/exerciseItem';
import { CommonModule } from '@angular/common';
import events from './../../shared/services/EventService';

@Component({
  selector: 'exercise-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-list-item.component.html',
  styleUrl: './exercise-list-item.component.css'
})
export class ExerciseListItemComponent {
  @Input() exerciseName! : string;

  @Input() isCustom! : boolean;
  @Output() isCustomChange = new EventEmitter<boolean>();

  get cssClasses() {
    // return this.isCustom ? ['custom', 'text-red-500'] : [''];
    return {'custom text-red-500': this.isCustom};
  }

  constructor() { }

  removeExercise() {
    events.emit('removeExercise', this.exerciseName);
  }

  toggleCustom() {
    this.isCustom = !this.isCustom;
    this.isCustomChange.emit(this.isCustom);
  }

}
