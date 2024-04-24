import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { ExerciseService } from '../exercise.service';
import { ExerciseItem } from '../../shared/models/exerciseItem';

@Component({
  selector: 'app-exercise-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './exercise-details.component.html',
  styleUrl: './exercise-details.component.css'
})
export class ExerciseDetailsComponent {

  exercise : ExerciseItem | undefined = {} as ExerciseItem;

  constructor(private exerciseService: ExerciseService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      
      if (id) {
        this.exerciseService.getExerciseDetails(parseInt(id, 10)).subscribe(response => this.exercise = response);
      }

    })
  }

}import { CommonModule } from '@angular/common';
