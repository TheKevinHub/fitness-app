import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { ExerciseItem } from '../shared/models/exerciseItem';
import { catchError } from 'rxjs/operators';
import { Observable, map, throwError } from 'rxjs';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private http: HttpClient) { }

  private getStandardOptions() : any {
      return new HttpHeaders({
        'Content-Type': 'application/json',
      });
  }

  getExercises() : Observable<ExerciseItem[]> {
    return this.http.get<ExerciseItem[]>('assets/exercises.json', {observe: 'body', headers: this.getStandardOptions()}).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status == 0) {
      console.error('There is an issue with the client or network:', error.error);
    } else {
      console.error('Server-side error: ', error.error);
    }

    return throwError(() => new Error('Cannot retrieve exercises from the server. Please try again.'))
  }

  private addExercise(exercise: ExerciseItem) {
    let options = this.getStandardOptions();

    options.headers = options.headers.set('Authorization', 'value-need-for-authorization');
    this.http.post('assets/exercises.json', exercise, options);
  }
  
  getExerciseDetails(id: number) {
      return this.getExercises().pipe(map(exerciseList => {
      return exerciseList.find(p => p.id == id)
    }));
  }
}