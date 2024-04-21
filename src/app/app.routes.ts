import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ExerciseFilterComponent } from './exercise-filter/exercise-filter.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';

// TODO: Work with the routes/pages

export const routes: Routes = [
    { path: '', component: Component },
    { path: 'filter', component: ExerciseFilterComponent },
    { path: 'exercises', component: ExerciseListComponent },
    { path: 'exercises/:id', component: ExerciseDetailsComponent },
    { path: '**', component: NotFoundComponent},
];
