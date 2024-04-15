import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.updateFilter('0');
  }

  listFilter : any = '0';

  updateFilter(value : any) {
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }

}
