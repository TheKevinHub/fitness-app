import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ExerciseItem } from '../../shared/models/exerciseItem';
import { FormsModule } from '@angular/forms';

const filters = [
  (item : ExerciseItem) => item,
  (item : ExerciseItem) => !item.isCustom,
  (item : ExerciseItem) => item.isCustom,
];

@Component({
  selector: 'exercise-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exercise-filter.component.html',
  styleUrl: './exercise-filter.component.css'
})
export class ExerciseFilterComponent implements OnInit {
  @Output() filter = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.filter.emit(filters[0]);
  }

  listFilter : any = '0';

  changeFilter(value : any) {
    this.filter.emit(filters[value]);
  }

}
