import { Component, OnInit, Input } from '@angular/core';
import { ExerciseItem } from '../../shared/models/exerciseItem';
import { CommonModule } from '@angular/common';
import { ExerciseListItemComponent } from '../exercise-list-item/exercise-list-item.component';

@Component({
  selector: 'exercise-list',
  standalone: true,
  imports: [CommonModule, ExerciseListItemComponent],
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent {
  @Input() exercises : ExerciseItem[] = [];
  constructor() { }
}
