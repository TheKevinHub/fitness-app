import { Component, OnInit, Input } from '@angular/core';
import { ExerciseItem } from '../../shared/models/exerciseItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'exercise-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent {
  @Input() exercises : ExerciseItem[] = [];

  toggleItem(item : ExerciseItem) {
    item.isCustom = !item.isCustom;
  }

}
