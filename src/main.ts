import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


// Fetch from backend
fetch('localhost:8080/api/content')
.then(response => response.json())
.then(data => console.log(data));