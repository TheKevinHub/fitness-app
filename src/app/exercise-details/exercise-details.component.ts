import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { ExerciseService } from '../exercise.service';
import { ExerciseItem } from '../../shared/models/exerciseItem';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionBarbell } from '@ng-icons/ionicons';

@Component({
  selector: 'app-exercise-details',
  standalone: true,
  imports: [CommonModule, RouterLink, NgIconComponent],
  providers:[provideIcons({ ionBarbell })],
  templateUrl: './exercise-details.component.html',
  styleUrl: './exercise-details.component.css'
})
export class ExerciseDetailsComponent implements OnInit {

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

}
